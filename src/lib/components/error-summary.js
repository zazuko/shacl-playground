import {html, LitElement} from 'lit-element'
import { shrink } from '@zazuko/rdf-vocabularies/shrink'
import TermMap from '@rdf-esm/term-map'
import {fromPointer} from '@rdfine/shacl/lib/ValidationResult';
import {sh} from '@tpluscode/rdf-ns-builders';

function createMessage(result) {
  if (result.resultMessage) {
    return result.resultMessage
  }

  if (result.sourceConstraintComponent) {
    return `Violated ${shrink(result.sourceConstraintComponent.id.value)}`
  }

  return 'Unspecified error'
}

const renderResult = (result) => html`<li>${createMessage(result)}</li>`

function renderSummary({ errors, focusNodes }) {
  return html`<ul>
    ${errors.map(renderResult)}
    ${[...focusNodes].map(([focusNode, { properties, errors }]) => html`<li>
      ${focusNode.value}:
      <ul>
        ${errors.map(renderResult)}
        ${[...properties].map(([property, messages]) => html`<li>
          ${shrink(property.value)}:
          <ul>
            ${messages.map(renderResult)}
          </ul>
        </li>`)}
      </ul>
    </li>`)}
  </ul>`
}

function reduceToFocusNodes({ focusNodes, errors }, result) {
  if (result.focusNode) {
    const focusNodeErrors = focusNodes.get(result.focusNode) || { properties: new TermMap(), errors: [] }
    if (result.resultPath) {
      const pathErrors = focusNodeErrors.properties.get(result.resultPath.id)
      if (pathErrors) {
        pathErrors.push(result)
      } else {
        focusNodeErrors.properties.set(result.resultPath.id, [result])
      }
    } else {
      focusNodeErrors.errors.push(result)
    }

    focusNodes.set(result.focusNode, focusNodeErrors)
  } else {
    errors.push(result)
  }

  return { focusNodes, errors }
}

class ErrorSummary extends  LitElement {
  static get properties() {
    return {
      validationResults: { type: Array }
    }
  }

  constructor() {
    super()
    this.validationResults = []
  }


  render() {
    const results = this.validationResults
      .map(result => fromPointer(result))
      .filter(result => result.resultSeverity.equals(sh.Violation))

    if (results.length) {
      const summary = results.reduce(reduceToFocusNodes, { focusNodes: new TermMap(), errors: [] })
      return renderSummary(summary)
    }

    return ''
  }
}

customElements.define('error-summary', ErrorSummary)
