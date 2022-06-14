(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(e,t){},181:function(e,t){},205:function(e,t){},207:function(e,t){},208:function(e,t){},215:function(e,t){},422:function(e,t,i){"use strict";i.r(t);var s=i(10),r=(i(175),i(78)),a=i(44),o=(i(245),i(400),i(170)),d=i(152);i(246),i(225),i(226);class l extends s.b{static get styles(){return s.c`
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
    `}static get properties(){return{selected:{type:Array}}}constructor(){super(),this.selected=[]}render(){const e=Object.keys(d.a).sort(this.__selectedFirst.bind(this));return s.d`<vaadin-form-item label-position="top">
      <label slot="label">Prefixes</label>
        <div id="list">
          ${e.map(e=>s.d`
              <vaadin-item
                value="${e}"
                ?selected="${this.selected.includes(e)}"
                @click="${this.__toggle(e)}"
              >
                ${e}
              </vaadin-item>
            `)}
        </div>
      </vaadin-list-box>
    </vaadin-form-item>`}__selectedFirst(e,t){return this.selected.includes(e)&&this.selected.includes(t)?e.localeCompare(t):this.selected.includes(e)?-1:e.localeCompare(t)}__toggle(e){return t=>{const i=t.target.selected?"prefix-unselected":"prefix-selected";this.dispatchEvent(new CustomEvent(i,{detail:{value:e},bubbles:!0,composed:!0}))}}}customElements.define("prefix-list",l);i(329),i(248);class n extends s.b{static get properties(){return{prefixes:{type:Object}}}static get styles(){return s.c`
      vaadin-form-item {
        max-width: 100%;
      }

      dd {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `}constructor(){super(),this.prefixes={}}render(){const e=Object.entries(this.prefixes);return s.d`
      <vaadin-form-item label-position="top">
        <label slot="label">Custom prefixes (click to edit)</label>
        <dl>
          ${e.map(([e,t])=>s.d`
              <dt
                @click="${this.editPrefix(e,t)}"
                @keyPress="${this.editPrefix(e,t)}"
              >
                ${e}
              </dt>
              <dd
                dir="rtl"
                title="${t}"
                @click="${this.editPrefix(e,t)}"
                @keyPress="${this.editPrefix(e,t)}"
              >
                ${t}&lrm;
              </dd>
            `)}
        </dl>
        <vaadin-text-field id="prefix" label="Prefix"></vaadin-text-field>
        <vaadin-text-field
          id="ns"
          label="Namespace"
          placeholder="Empty to remove"
        ></vaadin-text-field>
        <vaadin-button @click="${this.setPrefix}">Set prefix</vaadin-button>
      </vaadin-form-item>
    `}editPrefix(e,t){return()=>{this.renderRoot.querySelector("#prefix").value=e,this.renderRoot.querySelector("#ns").value=t}}setPrefix(){const e=this.renderRoot.querySelector("#prefix"),t=this.renderRoot.querySelector("#ns");e.value&&(this.dispatchEvent(new CustomEvent("custom-prefix-set",{detail:{prefix:e.value,namespace:t.value},bubbles:!0,composed:!0})),e.value="",t.value="")}}customElements.define("custom-prefixes",n);class c extends(Object(r.a)(a.a,s.b)){static get properties(){return{format:{type:String},model:{type:String},prefixes:{type:Array},customPrefixes:{type:Object}}}constructor(){super(),this.prefixes=[]}render(){return s.d`
      <vaadin-form-layout>
        <vaadin-select
          label="Format"
          value="${this.format}"
          @value-changed="${this.__formatSelected}"
          .renderer="${this.__renderList}"
        >
        </vaadin-select>

        <prefix-list .selected="${this.prefixes}"></prefix-list>

        <custom-prefixes .prefixes="${this.customPrefixes}"></custom-prefixes>
      </vaadin-form-layout>
    `}__renderList(e){Object(s.e)(s.d`
        <vaadin-list-box>
          ${Object.values(o.formats).map(e=>s.d`
              <vaadin-item value="${e}">${e}</vaadin-item>
            `)}
        </vaadin-list-box>
      `,e)}mapState(e){return{format:e[this.model].format,prefixes:e[this.model].prefixes,customPrefixes:e[this.model].customPrefixes||{}}}mapEvents(){return{"prefix-selected":e=>a.a.dispatch[this.model].addPrefix(e.detail.value),"prefix-unselected":e=>a.a.dispatch[this.model].removePrefix(e.detail.value),"custom-prefix-set":e=>a.a.dispatch[this.model].setCustomPrefix(e.detail)}}__formatSelected(e){a.a.dispatch[this.model].changeFormat(e.detail.value)}}customElements.define("editor-drawer",c);let m=null;class f extends(Object(r.a)(a.a,s.b)){static get styles(){return s.c`
      :host {
        display: flex;
        flex-direction: column;
        overflow: scroll;
      }

      slot[name="header"]::slotted(*) {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 100;
      }

      rdf-editor {
        flex: 1;
      }
    `}static get properties(){return{format:{type:String},graph:{type:String},model:{type:String},prefixes:{type:Array},customPrefixes:{type:Object}}}async firstUpdated(){const e=this.shadowRoot.querySelector("rdf-editor");await e.ready,await(m||(m=new Promise(e=>{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/addon/display/autorefresh.min.js",t.onload=e,document.head.appendChild(t)})),m),e.codeMirror.editor.setOption("autoRefresh",!0)}render(){return s.d`
      <slot name="header"></slot>
      <rdf-editor
        .format="${this.format}"
        .value="${this.graph}"
        auto-parse
        .parseDelay="${10}"
        .prefixes="${this.prefixes.join(",")}"
        .customPrefixes="${this.customPrefixes}"
        @quads-changed="${this.__quadsChanged}"
        @focus="${e=>this.__forwardEvent(e)}"
        @blur="${e=>this.__forwardEvent(e)}"
      ></rdf-editor>
    `}__forwardEvent(e){this.dispatchEvent(new Event(e.type))}__quadsChanged(e){a.a.dispatch[this.model].parsed({quads:e.detail.value,serialized:e.target.value})}mapState(e){return{format:e[this.model].format,prefixes:e[this.model].prefixes,customPrefixes:e[this.model].customPrefixes||{},graph:e[this.model].graph}}}customElements.define("graph-editor",f)}}]);
//# sourceMappingURL=77dd54ee9eb7231f09c8.js.map