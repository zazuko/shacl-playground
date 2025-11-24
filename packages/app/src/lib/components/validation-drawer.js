import { connect } from "@captaincodeman/rdx";
import { html, LitElement } from "lit";
import "@vaadin/form-layout/vaadin-form-layout.js";
import "@vaadin/form-layout/vaadin-form-item.js";
import "@vaadin/list-box/vaadin-list-box.js";
import "@vaadin/item/vaadin-item.js";
import { store } from "../store/index.js";

const displayModes = Object.entries({
  tree: "Focus node tree",
  raw: "Raw RDF",
});

class ValidationDrawer extends connect(store, LitElement) {
  static get properties() {
    return {
      display: { type: String },
    };
  }

  render() {
    return html`
      <vaadin-form-layout>
        <vaadin-form-item label-position="top">
          <label slot="label">Display errors as</label>
          <vaadin-list-box
            selected="${displayModes.findIndex(
              ([key]) => key === this.display
            )}"
            @selected-changed="${this.__formatSelected}"
          >
            ${displayModes.map(
              ([mode, label]) => html`
                <vaadin-item value="${mode}">${label}</vaadin-item>
              `
            )}
          </vaadin-list-box>
        </vaadin-form-item>
      </vaadin-form-layout>
    `;
  }

  mapState(state) {
    return {
      display: state.validation.display || "tree",
    };
  }

  __formatSelected(e) {
    if (e.target.items) {
      store.dispatch.validation.display(e.target.items[e.detail.value].value);
    }
  }
}

customElements.define("validation-drawer", ValidationDrawer);
