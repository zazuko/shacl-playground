/*! For license information please see 98636055b7a3d79a4e01.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{180:function(t,e){},181:function(t,e){},205:function(t,e){},207:function(t,e){},208:function(t,e){},215:function(t,e){},420:function(t,e,i){"use strict";i.r(e);var r=i(10),s=i(32);const o=2;const{H:n}=s.a,u=()=>document.createComment(""),l=(t,e,i)=>{var r;const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(u(),o),r=s.insertBefore(u(),o);i=new n(e,r,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,u=n!==t;if(u){let e;null===(r=i._$AQ)||void 0===r||r.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||u){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,o),t=e}}}return i},a=(t,e,i=t)=>(t._$AI(e,i),t),d={},p=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const r=t._$AB.nextSibling;for(;i!==r;){const t=i.nextSibling;i.remove(),i=t}},c=(t,e,i)=>{const r=new Map;for(let s=e;s<=i;s++)r.set(t[s],s);return r},h=(f=class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),t.type!==o)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const s=[],o=[];let n=0;for(const e of t)s[n]=r?r(e,n):n,o[n]=i(e,n),n++;return{values:o,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){var o;const n=t._$AH,{values:u,keys:h}=this.dt(e,i,r);if(!Array.isArray(n))return this.ct=h,u;const f=null!==(o=this.ct)&&void 0!==o?o:this.ct=[],_=[];let m,$,v=0,y=n.length-1,g=0,x=u.length-1;for(;v<=y&&g<=x;)if(null===n[v])v++;else if(null===n[y])y--;else if(f[v]===h[g])_[g]=a(n[v],u[g]),v++,g++;else if(f[y]===h[x])_[x]=a(n[y],u[x]),y--,x--;else if(f[v]===h[x])_[x]=a(n[v],u[x]),l(t,_[x+1],n[v]),v++,x--;else if(f[y]===h[g])_[g]=a(n[y],u[g]),l(t,n[v],n[y]),y--,g++;else if(void 0===m&&(m=c(h,g,x),$=c(f,v,y)),m.has(f[v]))if(m.has(f[y])){const e=$.get(h[g]),i=void 0!==e?n[e]:null;if(null===i){const e=l(t,n[v]);a(e,u[g]),_[g]=e}else _[g]=a(i,u[g]),l(t,n[v],i),n[e]=null;g++}else p(n[y]),y--;else p(n[v]),v++;for(;g<=x;){const e=l(t,_[x+1]);a(e,u[g]),_[g++]=e}for(;v<=y;){const t=n[v++];null!==t&&p(t)}return this.ct=h,((t,e=d)=>{t._$AH=e})(t,_),s.c}},(...t)=>({_$litDirective$:f,values:t}));i(171);var f,_=i(170);i(175);const m=Symbol("quads"),$=Symbol("previous output"),v=Symbol("Shown editor"),y={[_.formats.turtle]:"Turtle",[_.formats.jsonLd]:r.d`JSON&#8209;LD`,[_.formats.trig]:"TriG",[_.formats.nquads]:r.d`N&#8209;Quads`,[_.formats.ntriples]:r.d`N&#8209;Triples`,[_.formats.notation3]:"Notation3",[_.formats.rdfXml]:"RDF/XML"};class g extends r.b{static get properties(){return{formats:{type:String,reflect:!0},input:{type:String,attribute:!1},inputFormat:{type:String,attribute:"input-format"},selectedFormat:{type:String,attribute:!1},layout:{type:String,reflect:!0},prefixes:{type:String},onlyOutput:{type:Boolean,attribute:"only-output"},customPrefixes:{type:Object}}}static get styles(){return r.c`
      :host {
        display: block;
      }

      #wrapper {
        display: flex;
        flex-direction: column;
      }

      :host([layout='vertical']) #wrapper {
        flex-direction: row;
      }

      ol {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
      }

      :host([layout='vertical']) ol {
        flex-direction: column;
      }

      li {
        list-style: none;
        cursor: pointer;
        padding: 10px;
        margin: 2px;
        border: solid 1px black;
      }

      li[part$='selected'] {
        text-decoration: underline;
      }

      rdf-editor {
        flex: 1;
      }

      rdf-editor,
      #wrapper {
        height: 100%;
      }

      rdf-editor:not([visible]) {
        display: none;
      }
    `}get value(){return"input"===this[v]?this.input:this._outputEditor.value}get _editor(){return this.renderRoot.querySelector("#input")}get _outputEditor(){return this.renderRoot.querySelector("#output")}get _outputFormats(){const t=this.formats.split(",").map(t=>t.trim());if(!this.onlyOutput){const e=this.formats.indexOf(this.inputFormat);e>=0&&t.splice(e,1)}return t}constructor(){super(),this.formats=Object.values(_.formats).join(","),this.prefixes="",this[m]=[],this[v]="input",this.inputFormat="text/turtle",this.customPrefixes={}}connectedCallback(){super.connectedCallback();const t=this.querySelector("script");t&&(this.inputFormat=t.getAttribute("type")||"text/turtle",this.input=t.textContent.trim()),[this.selectedFormat]=this._outputFormats}render(){return r.d`<div id="wrapper">
      <ol>
        ${this._renderButtons()}
      </ol>
      <rdf-editor
        id="input"
        readonly
        .value="${this.input}"
        .format="${this.inputFormat}"
        ?visible="${"input"===this[v]&&!this.onlyOutput}"
        @quads-changed="${this.__inputParsed}"
      ></rdf-editor>
      <rdf-editor
        id="output"
        readonly
        .customPrefixes="${this.customPrefixes}"
        .prefixes="${this.prefixes}"
        .quads="${this[m]}"
        .format="${this.selectedFormat}"
        ?visible="${"output"===this[v]}"
        @serialized="${this.__dispatchChangeEvent}"
      ></rdf-editor>
    </div>`}async updated(t){super.updated(t),t.has("onlyOutput")&&this.onlyOutput&&"input"===this[v]&&this._showOutput(this._outputFormats[0])()}_renderButtons(){return r.d` ${this.onlyOutput?"":(()=>{const t="format input "+("input"===this[v]?"selected":"");return r.d`<li input part="${t}" @click="${this._showInput}">
        ${y[this.inputFormat]||this.inputFormat}
      </li>`})()}
    ${h(this._outputFormats,this.__renderOutputButton.bind(this))}`}async _showInput(){this[v]="input",this.__dispatchChangeEvent(),this[$]=this.selectedFormat,await this.requestUpdate(),await this._editor.ready,this._editor.codeMirror.editor.refresh()}_showOutput(t){return async()=>{this.selectedFormat=t,this[v]="output",t===this[$]&&this.__dispatchChangeEvent(),this.requestUpdate()}}__inputParsed(t){this[m]=t.detail.value,this.requestUpdate()}__renderOutputButton(t){const e="format output "+("output"===this[v]&&this.selectedFormat===t?"selected":"");return r.d`<li output part="${e}" @click="${this._showOutput(t)}">
      ${y[t]||t}
    </li>`}__dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value}}))}}window.customElements.define("rdf-snippet",g)}}]);
//# sourceMappingURL=98636055b7a3d79a4e01.js.map