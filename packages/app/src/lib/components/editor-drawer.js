import { connect } from "@captaincodeman/rdx";
import { html, LitElement, render } from "lit";
import "@vaadin/form-layout/vaadin-form-layout.js";
import "@vaadin/select/vaadin-select.js";
import { mediaTypes as formats } from "@rdfjs-elements/formats-pretty";
import { store } from "../store/index.js";
import "./prefix-list.js";
import "./custom-prefixes.js";

class EditorDrawer extends connect(store, LitElement) {
  static get properties() {
    return {
      format: { type: String },
      model: { type: String },
      prefixes: { type: Array },
      customPrefixes: { type: Object },
    };
  }

  constructor() {
    super();
    this.prefixes = [];
  }

  render() {
    return html`
      <vaadin-form-layout>
        <vaadin-select
          label="Format"
          value="${this.format}"
          @value-changed="${this.__formatSelected}"
          .renderer="${this.__renderList}"
        >
        </vaadin-select>

        <prefix-list .selected="${this.prefixes}"></prefix-list>

        <custom-prefixes .prefixes="${this.customPrefixes}"></custom-prefixes>
      </vaadin-form-layout>
    `;
  }

  __renderList(root) {
    render(
      html`
        <vaadin-list-box>
          ${Object.values(formats).map(
            (format) => html`
              <vaadin-item value="${format}">${format}</vaadin-item>
            `
          )}
        </vaadin-list-box>
      `,
      root
    );
  }

  mapState(state) {
    return {
      format: state[this.model].format,
      prefixes: state[this.model].prefixes,
      customPrefixes: state[this.model].customPrefixes || {},
    };
  }

  mapEvents() {
    return {
      "prefix-selected": (e) =>
        store.dispatch[this.model].addPrefix(e.detail.value),
      "prefix-unselected": (e) =>
        store.dispatch[this.model].removePrefix(e.detail.value),
      "custom-prefix-set": (e) =>
        store.dispatch[this.model].setCustomPrefix(e.detail),
    };
  }

  __formatSelected(e) {
    store.dispatch[this.model].changeFormat(e.detail.value);
  }
}

customElements.define("editor-drawer", EditorDrawer);
