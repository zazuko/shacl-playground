import { css, html, LitElement } from "lit";
import prefixes from "@zazuko/rdf-vocabularies/prefixes";
import "@vaadin/vaadin-form-layout/vaadin-form-item.js";
import "@vaadin/vaadin-list-box/vaadin-list-box.js";
import "@vaadin/vaadin-item/vaadin-item.js";

class PrefixList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      vaadin-form-item {
        width: 100%;
      }

      #list {
        display: block;
        resize: vertical;
        height: auto;
        max-height: 500px;
        overflow: scroll;
        width: 100%;
      }

      vaadin-item {
        cursor: pointer;
      }

      vaadin-item::before {
        opacity: 0;
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc(
            (1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2
          )
          0;
      }

      vaadin-item[selected]::before {
        opacity: 1;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: Array }
    };
  }

  constructor() {
    super();
    this.selected = [];
  }

  render() {
    const sorted = Object.keys(prefixes).sort(this.__selectedFirst.bind(this));

    return html`<vaadin-form-item label-position="top">
      <label slot="label">Prefixes</label>
        <div id="list">
          ${sorted.map(
            prefix => html`
              <vaadin-item
                value="${prefix}"
                ?selected="${this.selected.includes(prefix)}"
                @click="${this.__toggle(prefix)}"
              >
                ${prefix}
              </vaadin-item>
            `
          )}
        </div>
      </vaadin-list-box>
    </vaadin-form-item>`;
  }

  __selectedFirst(left, right) {
    if (this.selected.includes(left) && this.selected.includes(right)) {
      return left.localeCompare(right);
    }

    if (this.selected.includes(left)) {
      return -1;
    }

    return left.localeCompare(right);
  }

  __toggle(prefix) {
    return e => {
      const event = e.target.selected ? "prefix-unselected" : "prefix-selected";

      this.dispatchEvent(
        new CustomEvent(event, {
          detail: {
            value: prefix
          },
          bubbles: true,
          composed: true
        })
      );
    };
  }
}

customElements.define("prefix-list", PrefixList);
