import { css, html, LitElement } from "lit";
import "@vaadin/vaadin-text-field/vaadin-text-field.js";
import "@vaadin/vaadin-button/vaadin-button.js";

export class CustomPrefixes extends LitElement {
  static get properties() {
    return {
      prefixes: { type: Object }
    };
  }

  static get styles() {
    return css`
      vaadin-form-item {
        max-width: 100%;
      }

      dd {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `;
  }

  constructor() {
    super();
    this.prefixes = {};
  }

  render() {
    const prefixes = Object.entries(this.prefixes);

    return html`
      <vaadin-form-item label-position="top">
        <label slot="label">Custom prefixes (click to edit)</label>
        <dl>
          ${prefixes.map(
            ([prefix, namespace]) => html`
              <dt
                @click="${this.editPrefix(prefix, namespace)}"
                @keyPress="${this.editPrefix(prefix, namespace)}"
              >
                ${prefix}
              </dt>
              <dd
                dir="rtl"
                title="${namespace}"
                @click="${this.editPrefix(prefix, namespace)}"
                @keyPress="${this.editPrefix(prefix, namespace)}"
              >
                ${namespace}&lrm;
              </dd>
            `
          )}
        </dl>
        <vaadin-text-field id="prefix" label="Prefix"></vaadin-text-field>
        <vaadin-text-field
          id="ns"
          label="Namespace"
          placeholder="Empty to remove"
        ></vaadin-text-field>
        <vaadin-button @click="${this.setPrefix}">Set prefix</vaadin-button>
      </vaadin-form-item>
    `;
  }

  editPrefix(prefix, namespace) {
    return () => {
      this.renderRoot.querySelector("#prefix").value = prefix;
      this.renderRoot.querySelector("#ns").value = namespace;
    };
  }

  setPrefix() {
    const prefix = this.renderRoot.querySelector("#prefix");
    const namespace = this.renderRoot.querySelector("#ns");

    if (!prefix.value) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent("custom-prefix-set", {
        detail: {
          prefix: prefix.value,
          namespace: namespace.value
        },
        bubbles: true,
        composed: true
      })
    );

    prefix.value = "";
    namespace.value = "";
  }
}

customElements.define("custom-prefixes", CustomPrefixes);
