import {css, html, LitElement} from 'lit-element';
import prefixes from '@zazuko/rdf-vocabularies/prefixes';
import {repeat} from 'lit-html/directives/repeat';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js'
import '@vaadin/vaadin-list-box/vaadin-list-box.js'
import '@vaadin/vaadin-item/vaadin-item.js'

class PrefixList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      vaadin-form-item {
        width: 100%;
      }
      
      vaadin-list-box {
        display: block;
        resize: vertical;
        height: auto;
        max-height: 500px;
        overflow: scroll;
        width: 100%;
      }`
  }

  static get properties() {
    return {
      selected: { type: Array }
    }
  }

  constructor() {
    super()
    this.selected = []
  }

  render() {
    const sorted = Object.keys(prefixes).sort(this.__selectedFirst.bind(this))
    const selectedIndexes = Array.from({length: this.selected.length},(v,k)=>k)

    return html`<vaadin-form-item label-position="top">
      <label slot="label">Prefixes</label>
      <vaadin-list-box multiple .selectedValues="${selectedIndexes}">
        ${repeat(sorted,  prefix => html`
          <vaadin-item value="${prefix}" 
                       @click="${this.__toggle(prefix)}">
            ${prefix}
          </vaadin-item>
        `)}
      </vaadin-list-box>
    </vaadin-form-item>
    </vaadin-form-layout>`
  }

  __selectedFirst(left, right) {
    if (this.selected.includes(left) && this.selected.includes(left)) {
      return left.localeCompare(right)
    }

    if (this.selected.includes(left)) {
      return -1
    }

    return left.localeCompare(right)
  }

  __toggle(prefix) {
    return (e) => {
      const event = e.target.selected ? 'prefix-unselected' : 'prefix-selected'

      this.dispatchEvent(new CustomEvent(event, {
        detail: {
          value: prefix,
        },
        bubbles: true,
        composed: true,
      }))
    }
  }
}

customElements.define('prefix-list', PrefixList)
