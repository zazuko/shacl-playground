import { connect } from "@captaincodeman/rdx";
import { html, LitElement } from "lit-element";
import "@vaadin/vaadin-form-layout/vaadin-form-layout.js";
import "@vaadin/vaadin-select/vaadin-select.js";
import { formats } from "@rdfjs-elements/formats-pretty";
import { store } from "../store/index.js";
import "./prefix-list.js";

class EditorDrawer extends connect(store, LitElement) {
  static get properties() {
    return {
      format: { type: String },
      model: { type: String },
      prefixes: { type: Array }
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
        >
          <template>
            <vaadin-list-box>
              ${Object.values(formats).map(
                format => html`
                  <vaadin-item value="${format}">${format}</vaadin-item>
                `
              )}
            </vaadin-list-box>
          </template>
        </vaadin-select>

        <prefix-list .selected="${this.prefixes}"></prefix-list>
      </vaadin-form-layout>
    `;
  }

  mapState(state) {
    return {
      format: state[this.model].format,
      prefixes: state[this.model].prefixes
    };
  }

  mapEvents() {
    return {
      "prefix-selected": e =>
        store.dispatch[this.model].addPrefix(e.detail.value),
      "prefix-unselected": e =>
        store.dispatch[this.model].removePrefix(e.detail.value)
    };
  }

  __formatSelected(e) {
    store.dispatch[this.model].changeFormat(e.detail.value);
  }
}

customElements.define("editor-drawer", EditorDrawer);
