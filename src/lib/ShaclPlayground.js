import {css, html, LitElement} from 'lit-element'
import { connect } from '@captaincodeman/rdx'
import '@vaadin/vaadin-app-layout/vaadin-app-layout.js'
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js'
import '@vaadin/vaadin-tabs/vaadin-tabs.js'
import '@vaadin/vaadin-tabs/vaadin-tab.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-icon/iron-icon.js'
import { store } from './store/index.js'

export class ShaclPlayground extends connect(store, LitElement) {
  static get styles() {
    return css`
      vaadin-app-layout {
        height: 100vh;
        display: flex;
        flex-flow: column;
      }

      vaadin-tabs {
        width: 100%;
      }

      vaadin-tab.report.valid {
        color: lightseagreen;
      }

      vaadin-tab.report.invalid {
        color: orangered;
      }

      iron-pages {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px 20px 0;
        flex: 1;
      }

      section {
        height: 90vh;
      }
    `
  }

  static get properties() {
    return {
      page: { type: Number },
      reportClass: { type: String },
      reportIcon: { typ: String }
    }
  }

  constructor() {
    super();

    this.reportIcon = 'vaadin:bug-o'
  }

  connectedCallback() {
    super.connectedCallback()
    import('@vaadin/vaadin-icons/vaadin-icons.js')
    import('./components/graph-editor.js')
  }

  render() {
    return html`<vaadin-app-layout>
      <vaadin-drawer-toggle slot="navbar [touch-optimized]"></vaadin-drawer-toggle>
      <vaadin-tabs slot="navbar" 
                   theme="centered"
                   .selected="${this.page}"
                   @selected-changed="${this.__pageSelected}">
        <vaadin-tab theme="icon-on-top">
          <iron-icon icon="vaadin:bullets"></iron-icon>
          <span>Shapes Graph</span>
        </vaadin-tab>
        <vaadin-tab theme="icon-on-top">
          <iron-icon icon="vaadin:database"></iron-icon>
          <span>Data Graph</span>
        </vaadin-tab>
        <vaadin-tab class="report ${this.reportClass}" theme="icon-on-top">
          <iron-icon icon="${this.reportIcon}"></iron-icon>
          <span>Validation Report</span>
        </vaadin-tab>
        <vaadin-tab theme="icon-on-top">
          <iron-icon icon="vaadin:question-circle-o"></iron-icon>
          <span>About</span>
        </vaadin-tab>
      </vaadin-tabs>

      <iron-pages selected="${this.page}" slot="drawer">
        <editor-drawer model="shapesGraph"></editor-drawer>
        <editor-drawer model="dataGraph"></editor-drawer>
        <validation-drawer></validation-drawer>
      </iron-pages>
      
      <iron-pages selected="${this.page}" @iron-select="${this.__loadPage}">
        <section id="shapes-graph">
          <graph-editor model="shapesGraph"></graph-editor>
        </section>
        <section id="data-graph">
          <graph-editor model="dataGraph"></graph-editor>
        </section>
        <section id="validation-report">
          <validation-report></validation-report>
        </section>
        <section>Copyright © 2021 Zazuko GmbH</section>
      </iron-pages>
    </vaadin-app-layout>`
  }

  mapState(state) {
    let reportClass = ''
    if (state.validation.conforms) {
      reportClass = 'valid'
    } else if(state.validation.conforms === false) {
      reportClass = 'invalid'
    }

    return {
      reportClass,
      reportIcon: state.validation.conforms ? 'vaadin:bug-o' : 'vaadin:bug',
      page: state.playground.page
    }
  }

  __pageSelected(e) {
    store.dispatch.playground.switchPage(e.detail.value)
  }

  __loadPage(e) {
    if (e.detail.item.id === 'validation-report') {
        import('./validation-report.js')
    }
  }
}
