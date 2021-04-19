import { css, html, LitElement } from "lit-element";
import { render } from "lit-html";
import { connect } from "@captaincodeman/rdx";
import "@vaadin/vaadin-app-layout/vaadin-app-layout.js";
import "@vaadin/vaadin-tabs/vaadin-tabs.js";
import "@vaadin/vaadin-tabs/vaadin-tab.js";
import "@polymer/iron-pages/iron-pages.js";
import { store } from "./store/index.js";

export class ShaclPlayground extends connect(store, LitElement) {
  static get styles() {
    return css`
      vaadin-app-layout {
        height: 100vh;
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

      iron-pages {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px 20px 0;
        flex: 1;
      }

      section {
        height: 90vh;
      }

      vaadin-button[slot="navbar"] {
        margin-right: 10px;
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
      sharingDialogOpen: { type: Boolean }
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
      <vaadin-app-layout>
        <vaadin-drawer-toggle
          slot="navbar [touch-optimized]"
        ></vaadin-drawer-toggle>
        <vaadin-tabs
          slot="navbar"
          theme="centered"
          .selected="${this.page}"
          @selected-changed="${this.__pageSelected}"
        >
          <vaadin-tab theme="icon-on-top">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>Shapes Graph</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>Data Graph</span>
          </vaadin-tab>
          <vaadin-tab class="report ${this.reportClass}" theme="icon-on-top">
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>Validation Report</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top">
            <iron-icon icon="vaadin:question-circle-o"></iron-icon>
            <span>About</span>
          </vaadin-tab>
        </vaadin-tabs>
        <vaadin-button
          slot="navbar"
          title="Share"
          @click="${this.__openSharingDialog}"
        >
          <iron-icon icon="vaadin:share"></iron-icon>
        </vaadin-button>
        <vaadin-button
          slot="navbar"
          title="Open in Shaperone playground"
          @click="${this.__openPlayground}"
        >
          <iron-icon icon="vaadin:form"></iron-icon>
        </vaadin-button>
        <vaadin-button slot="navbar" title="Reset" @click="${this.__reset}">
          <iron-icon icon="vaadin:trash"></iron-icon>
        </vaadin-button>
        <vaadin-button
          slot="navbar"
          title="Open on GitHub"
          @click="${this.__openCode}"
        >
          <iron-icon icon="vaadin:code"></iron-icon>
        </vaadin-button>

        <iron-pages selected="${this.page}" slot="drawer">
          <editor-drawer model="shapesGraph"></editor-drawer>
          <editor-drawer model="dataGraph"></editor-drawer>
          <validation-drawer></validation-drawer>
        </iron-pages>

        <iron-pages selected="${this.page}" @iron-select="${this.__loadPage}">
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
            <zero-md src="/CHANGELOG.md"> </zero-md>

            <p>Copyright © 2021 Zazuko GmbH</p>
          </section>
        </iron-pages>
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

  __pageSelected(e) {
    store.dispatch.playground.switchPage(e.detail.value);
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

    const shortnenerUrl = new URL("https://s.zazuko.com/api/v1/shorten/");
    shortnenerUrl.searchParams.set("url", this.sharingLink);
    const response = await fetch(shortnenerUrl);

    this.sharingLink = await response.text();
  }
}
