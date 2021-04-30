import { css, html, LitElement } from "lit-element";
import "@rdfjs-elements/rdf-editor";
import { connect } from "@captaincodeman/rdx";
import { store } from "../store/index.js";
import "./editor-drawer.js";

let autorefreshLoaded = null;
const PARSE_DELAY = 10;

function autoRefresh() {
  if (!autorefreshLoaded) {
    autorefreshLoaded = new Promise(resolve => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/addon/display/autorefresh.min.js";
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }

  return autorefreshLoaded;
}

class GraphEditor extends connect(store, LitElement) {
  static get styles() {
    return css`
      rdf-editor {
        height: 100%;
      }
    `;
  }

  static get properties() {
    return {
      format: { type: String },
      graph: { type: String },
      model: { type: String },
      prefixes: { type: Array }
    };
  }

  async firstUpdated() {
    const editor = this.shadowRoot.querySelector("rdf-editor");
    await editor.ready;

    await autoRefresh();
    editor.codeMirror.editor.setOption("autoRefresh", true);
  }

  render() {
    return html`
      <slot name="header"></slot>
      <rdf-editor
        .format="${this.format}"
        .value="${this.graph}"
        auto-parse
        .parseDelay="${PARSE_DELAY}"
        .prefixes="${this.prefixes.join(",")}"
        @quads-changed="${this.__quadsChanged}"
        @focus="${e => this.__forwardEvent(e)}"
        @blur="${e => this.__forwardEvent(e)}"
      ></rdf-editor>
    `;
  }

  __forwardEvent(e) {
    this.dispatchEvent(new Event(e.type));
  }

  __quadsChanged(e) {
    store.dispatch[this.model].parsed({
      quads: e.detail.value,
      serialized: e.target.codeMirror.value
    });
  }

  mapState(state) {
    return {
      format: state[this.model].format,
      prefixes: state[this.model].prefixes,
      graph: state[this.model].graph
    };
  }
}

customElements.define("graph-editor", GraphEditor);
