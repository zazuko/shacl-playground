import { html, LitElement } from "lit";
import { shrink } from "@zazuko/prefixes/shrink";
import rdf from "../env.js";

function createMessage(result) {
  try {
    if (result.resultMessage) {
      // Get all messages if multiple exist
      const messages = Array.isArray(result.resultMessage)
        ? result.resultMessage
        : [result.resultMessage];
      return messages.join('; ');
    }
  } catch (e) {
    // Handle multiple resultMessage values by accessing the raw RDF data
    const messages = result.pointer.out(rdf.ns.sh.resultMessage).values;
    if (messages.length > 0) {
      return messages.join('; ');
    }
  }

  if (result.sourceConstraintComponent) {
    return `Violated ${shrink(result.sourceConstraintComponent.id.value)}`;
  }

  return "Unspecified error";
}

const renderResult = (result) => html` <li>${createMessage(result)}</li> `;

function renderSummary({ focusNodes, ...top }, customPrefixes) {
  return html`
    <ul>
      ${top.errors.map(renderResult)}
      ${[...focusNodes].map(
        ([focusNode, { properties, errors }]) => html`
          <li>
            ${shrink(focusNode.value, customPrefixes) || focusNode.value}:
            <ul>
              ${errors.map(renderResult)}
              ${[...properties].map(
                ([property, messages]) => html`
                  <li>
                    ${shrink(property.value, customPrefixes) || property.value}:
                    <ul>
                      ${messages.map(renderResult)}
                    </ul>
                  </li>
                `
              )}
            </ul>
          </li>
        `
      )}
    </ul>
  `;
}

function reduceToFocusNodes({ focusNodes, errors }, result) {
  if (result.focusNode) {
    const focusNodeErrors = focusNodes.get(result.focusNode) || {
      properties: rdf.termMap(),
      errors: [],
    };
    if (result.resultPath) {
      const pathErrors = focusNodeErrors.properties.get(result.resultPath.id);
      if (pathErrors) {
        pathErrors.push(result);
      } else {
        focusNodeErrors.properties.set(result.resultPath.id, [result]);
      }
    } else {
      focusNodeErrors.errors.push(result);
    }

    focusNodes.set(result.focusNode, focusNodeErrors);
  } else {
    errors.push(result);
  }

  return { focusNodes, errors };
}

class ErrorSummary extends LitElement {
  static get properties() {
    return {
      validationResults: { type: Array },
      customPrefixes: { type: Object },
    };
  }

  constructor() {
    super();
    this.validationResults = [];
    this.customPrefixes = {};
  }

  render() {
    const results = this.validationResults
      .map((result) => rdf.rdfine.sh.ValidationResult(result))
      .filter((result) => result.resultSeverity.equals(rdf.ns.sh.Violation));

    if (results.length) {
      const summary = results.reduce(reduceToFocusNodes, {
        focusNodes: rdf.termMap(),
        errors: [],
      });
      return renderSummary(summary, this.customPrefixes);
    }

    return "";
  }
}

customElements.define("error-summary", ErrorSummary);
