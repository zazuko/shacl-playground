import { connect } from "@captaincodeman/rdx";
import { html, LitElement } from "lit";
import { ntriples } from "@tpluscode/rdf-string";
import { store } from "./store/index.js";
import "./components/validation-drawer.js";

class ValidationReport extends connect(store, LitElement) {
  static get properties() {
    return {
      conforms: { type: Boolean },
      results: { type: Array },
      displayAs: { type: String },
      prefixes: { type: String },
    };
  }

  constructor() {
    super();
    this.results = [];
  }

  connectedCallback() {
    super.connectedCallback();
    import("./components/error-summary.js");
  }

  render() {
    return html`
      <h2>Validation Report</h2>
      <h3>Success</h3>
      <p>${this.conforms ? "Yes" : "No"}</p>
      <h3 ?hidden="${this.results.length === 0}">Errors found</h3>
      ${this._renderResultVisualisation()}
    `;
  }

  _renderResultVisualisation() {
    switch (this.displayAs) {
      case "tree":
        return html`
          <error-summary .validationResults="${this.results}" .customPrefixes="${this.customPrefixes}"></error-summary>
        `;
      case "raw": {
        import("@rdfjs-elements/rdf-snippet");
        const raw = ntriples`${[...this.report.dataset]}`.toString();
        return html`
          <rdf-snippet
            .input="${raw}"
            input-format="text/turtle"
            layout="vertical"
            prefixes="${this.prefixes}"
            only-output
          ></rdf-snippet>
        `;
      }
      default:
        return html` Unsupported visualization ${this.displayAs} `;
    }
  }

  mapState(state) {
    return {
      conforms: state.validation.conforms,
      results: state.validation.results,
      report: state.validation.report,
      displayAs: state.validation.display,
      prefixes: [
        "sh",
        ...state.shapesGraph.prefixes,
        ...state.dataGraph.prefixes,
      ].join(","),
      customPrefixes: { ...state.shapesGraph.customPrefixes, ...state.dataGraph.customPrefixes }
    };
  }
}

customElements.define("validation-report", ValidationReport);
