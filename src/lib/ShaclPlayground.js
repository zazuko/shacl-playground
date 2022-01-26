import { css, html, LitElement, render } from "lit";
import { connect } from "@captaincodeman/rdx";
import "@vaadin/vaadin-app-layout/vaadin-app-layout.js";
import "@vaadin/vaadin-tabs/vaadin-tabs.js";
import "@vaadin/vaadin-tabs/vaadin-tab.js";
import "@polymer/iron-pages/iron-pages.js";
import "@polymer/iron-media-query/iron-media-query.js";
import "@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js";
import "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import { store } from "./store/index.js";

const TAB = {
  SHAPES: 0,
  DATA: 1,
  REPORT: 2,
  ABOUT: 3
};
const LABEL = {
  DataGraph: "Data Graph",
  ShapesGraph: "Shapes Graph",
  Report: "Validation Report"
};

export class ShaclPlayground extends connect(store, LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100vh;
      }

      vaadin-app-layout {
        display: flex;
        flex-flow: column;
      }

      vaadin-app-layout::part(drawer) {
        z-index: 10;
      }

      vaadin-tabs {
        width: 100%;
      }

      vaadin-tab.report.valid {
        color: lightseagreen;
      }

      vaadin-tab.report.invalid {
        color: orangered;
      }

      vaadin-tab:last-child {
        margin-left: auto;
      }

      :host(:not([wide])) vaadin-tab:first-child {
        margin-left: 72px;
      }

      :host([wide]) vaadin-tab > span {
        display: none;
      }

      iron-pages {
        height: 100%;
        margin: 0 auto;
        padding: 0 20px 0;
      }

      vaadin-split-layout#top-split {
        height: 100%;
      }

      iron-pages#narrow {
        height: 85%;
        max-width: 1000px;
        padding-top: 20px;
        flex: 1;
      }

      section {
        height: 100%;
      }

      vaadin-button.navbar {
        margin-right: 10px;
      }

      #about-drawer > * {
        width: 100%;
      }

      [hidden] {
        display: none;
      }

      graph-editor h2 {
        background: white;
        line-height: 70px;
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {
      page: { type: Number },
      reportClass: { type: String },
      reportIcon: { type: String },
      sharingLink: { type: String },
      sharingLinkShortened: { type: Boolean },
      sharingDialogOpen: { type: Boolean },
      __wideDisplay: { type: Boolean, reflect: true, attribute: "wide" }
    };
  }

  constructor() {
    super();

    this.reportIcon = "vaadin:bug-o";
  }

  connectedCallback() {
    super.connectedCallback();
    import("@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js");
    import("@vaadin/vaadin-button/vaadin-button.js");
    import("@polymer/iron-icon/iron-icon.js");
    import("@vaadin/vaadin-dialog/vaadin-dialog.js");
    import("@vaadin/vaadin-icons/vaadin-icons.js");
    import("./components/graph-editor.js");
    import("zero-md");

    store.dispatch.playground.restoreState();
  }

  render() {
    return html`
      <iron-media-query
        query="(min-width: 800px)"
        @query-matches-changed="${this.__setWideDisplay}"
      ></iron-media-query>

      <vaadin-app-layout>
        <vaadin-drawer-toggle
          ?hidden="${this.__wideDisplay}"
          slot="navbar [touch-optimized]"
        ></vaadin-drawer-toggle>
        <vaadin-tabs
          slot="navbar"
          theme="centered"
          .selected="${this.page}"
          @selected-changed="${e => this.__pageSelected(e.detail.value)}"
        >
          <vaadin-tab theme="icon-on-top" title="${LABEL.ShapesGraph}">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>${LABEL.ShapesGraph}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top" title="${LABEL.DataGraph}">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>${LABEL.DataGraph}</span>
          </vaadin-tab>
          <vaadin-tab
            class="report ${this.reportClass}"
            theme="icon-on-top"
            title="${LABEL.Report}"
          >
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>${LABEL.Report}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top">
            <iron-icon icon="vaadin:question-circle-o"></iron-icon>
            <span>About</span>
          </vaadin-tab>
        </vaadin-tabs>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="Share"
          @click="${this.__openSharingDialog}"
        >
          <iron-icon icon="vaadin:connect"></iron-icon>
        </vaadin-button>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="Open in Shaperone playground"
          @click="${this.__openPlayground}"
        >
          <iron-icon icon="vaadin:form"></iron-icon>
        </vaadin-button>

        <iron-pages selected="${this.page}" slot="drawer">
          <editor-drawer model="shapesGraph"></editor-drawer>
          <editor-drawer model="dataGraph"></editor-drawer>
          <validation-drawer></validation-drawer>
          <vaadin-vertical-layout id="about-drawer">
            <vaadin-button @click="${this.__reset}">
              <iron-icon icon="vaadin:trash" slot="prefix"></iron-icon>
              Reset
            </vaadin-button>
            <vaadin-button @click="${this.__openCode}">
              <iron-icon icon="vaadin:code" slot="prefix"></iron-icon>
              GitHub
            </vaadin-button>
          </vaadin-vertical-layout>
        </iron-pages>

        ${this.__wideDisplay ? this.__renderWide() : this.__renderNarrow()}
      </vaadin-app-layout>

      <vaadin-dialog
        ?opened="${this.sharingDialogOpen}"
        .renderer="${this.__renderSharingDialog(this)}"
        @opened-changed="${e => {
          this.sharingDialogOpen = e.detail.value;
        }}"
      >
      </vaadin-dialog>
    `;
  }

  __renderWide() {
    import("./validation-report.js");
    const selected = this.page === TAB.ABOUT ? 1 : 0;

    return html`
      <iron-pages selected="${selected}">
        <vaadin-split-layout id="top-split" orientation="vertical">
          <vaadin-split-layout style="height: 60%">
            <graph-editor
              style="width: 50%"
              model="shapesGraph"
              @focus="${() => this.__pageSelected(TAB.SHAPES)}"
            >
              <h2 slot="header">
                ${LABEL.ShapesGraph}
              </h2>
            </graph-editor>
            <graph-editor
              style="width: 50%"
              model="dataGraph"
              @focus="${() => this.__pageSelected(TAB.DATA)}"
            >
              <h2 slot="header">
                ${LABEL.DataGraph}
              </h2>
            </graph-editor>
          </vaadin-split-layout>
          <validation-report
            style="height: 40%"
            @click="${() => this.__pageSelected(TAB.REPORT)}"
          ></validation-report>
        </vaadin-split-layout>
        <section>
          ${this.__renderAbout()}
        </section>
      </iron-pages>
    `;
  }

  __renderNarrow() {
    return html`
      <iron-pages
        id="narrow"
        selected="${this.page}"
        @iron-select="${this.__loadPage}"
      >
        <section id="shapes-graph">
          <graph-editor model="shapesGraph"></graph-editor>
        </section>
        <section id="data-graph">
          <graph-editor model="dataGraph"></graph-editor>
        </section>
        <section id="validation-report">
          <validation-report></validation-report>
        </section>
        <section>
          ${this.__renderAbout()}
        </section>
      </iron-pages>
    `;
  }

  __renderAbout() {
    return html`
      <zero-md src="./README.md"> </zero-md>
      <h2>Changelog</h2>
      <zero-md src="./CHANGELOG.md">
        <template>
          <style>
            h1 {
              display: none;
            }
          </style>
        </template>
      </zero-md>
      <p>Copyright © 2021 Zazuko GmbH</p>
    `;
  }

  __renderSharingDialog(parent) {
    /* eslint-disable lit/no-template-bind */
    return root => {
      let dialogContents;
      if (!root.firstElementChild) {
        dialogContents = document.createElement("div");
        root.appendChild(dialogContents);
      } else {
        dialogContents = root.firstElementChild;
      }

      render(
        html`
          <vaadin-text-field
            style="width:500px"
            readonly
            autoselect
            label="Copy this URL to share playground"
            .value="${parent.sharingLink}"
          ></vaadin-text-field>
          <br />
          <vaadin-button
            ?disabled="${parent.sharingLinkShortened}"
            @click="${parent.__shortenSharingLink.bind(parent)}"
          >
            Shorten
          </vaadin-button>
        `,
        dialogContents
      );

      dialogContents.querySelector("vaadin-text-field")?.focus();
    };
  }

  mapState(state) {
    let reportClass = "";
    if (state.validation.conforms) {
      reportClass = "valid";
    } else if (state.validation.conforms === false) {
      reportClass = "invalid";
    }

    return {
      reportClass,
      reportIcon: state.validation.conforms ? "vaadin:bug-o" : "vaadin:bug",
      page: state.playground.page,
      shaperoneLink: state.playground.shaperone,
      sharingLink: state.playground.sharingLink,
      sharingLinkShortened: false
    };
  }

  __pageSelected(page) {
    store.dispatch.playground.switchPage(page);
  }

  __reset() {
    localStorage.removeItem(document.location.hostname);
    document.location.reload();
  }

  __loadPage(e) {
    if (e.detail.item.id === "validation-report") {
      import("./validation-report.js");
    }
  }

  __openPlayground() {
    window.open(this.shaperoneLink, "shaperone");
  }

  __openCode() {
    window.open("https://github.com/zazuko/shacl-playground", "_blank");
  }

  __openSharingDialog() {
    this.sharingDialogOpen = true;
  }

  async __shortenSharingLink() {
    if (this.sharingLinkShortened) {
      return;
    }

    this.sharingLinkShortened = true;

    const response = await fetch("https://s.zazuko.com/api/v1/shorten/", {
      method: "POST",
      body: new URLSearchParams({
        url: this.sharingLink
      })
    });

    this.sharingLink = await response.text();
  }

  __setWideDisplay(e) {
    this.__wideDisplay = e.detail.value;
  }
}
