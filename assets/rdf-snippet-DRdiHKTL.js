import{aa as T,ab as C,s as k,i as P,x as y}from"./index-DpEFpdLU.js";import{m as $}from"./rdf-editor-CmXWlMyL.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},I=i=>(...t)=>({_$litDirective$:i,values:t});class U{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,u){this._$Ct=t,this._$AM=e,this._$Ci=u}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:L}=T,S=()=>document.createComment(""),A=(i,t,e)=>{var u;const a=i._$AA.parentNode,s=t===void 0?i._$AB:t._$AA;if(e===void 0){const r=a.insertBefore(S(),s),p=a.insertBefore(S(),s);e=new L(r,p,i,i.options)}else{const r=e._$AB.nextSibling,p=e._$AM,c=p!==i;if(c){let l;(u=e._$AQ)===null||u===void 0||u.call(e,i),e._$AM=i,e._$AP!==void 0&&(l=i._$AU)!==p._$AU&&e._$AP(l)}if(r!==s||c){let l=e._$AA;for(;l!==r;){const v=l.nextSibling;a.insertBefore(l,s),l=v}}}return e},m=(i,t,e=i)=>(i._$AI(t,e),i),M={},N=(i,t=M)=>i._$AH=t,R=i=>i._$AH,g=i=>{var t;(t=i._$AP)===null||t===void 0||t.call(i,!1,!0);let e=i._$AA;const u=i._$AB.nextSibling;for(;e!==u;){const a=e.nextSibling;e.remove(),e=a}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(i,t,e)=>{const u=new Map;for(let a=t;a<=e;a++)u.set(i[a],a);return u},j=I(class extends U{constructor(i){if(super(i),i.type!==q.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,t,e){let u;e===void 0?e=t:t!==void 0&&(u=t);const a=[],s=[];let r=0;for(const p of i)a[r]=u?u(p,r):r,s[r]=e(p,r),r++;return{values:s,keys:a}}render(i,t,e){return this.ct(i,t,e).values}update(i,[t,e,u]){var a;const s=R(i),{values:r,keys:p}=this.ct(t,e,u);if(!Array.isArray(s))return this.ut=p,r;const c=(a=this.ut)!==null&&a!==void 0?a:this.ut=[],l=[];let v,w,o=0,d=s.length-1,n=0,h=r.length-1;for(;o<=d&&n<=h;)if(s[o]===null)o++;else if(s[d]===null)d--;else if(c[o]===p[n])l[n]=m(s[o],r[n]),o++,n++;else if(c[d]===p[h])l[h]=m(s[d],r[h]),d--,h--;else if(c[o]===p[h])l[h]=m(s[o],r[h]),A(i,l[h+1],s[o]),o++,h--;else if(c[d]===p[n])l[n]=m(s[d],r[n]),A(i,s[o],s[d]),d--,n++;else if(v===void 0&&(v=E(p,n,h),w=E(c,o,d)),v.has(c[o]))if(v.has(c[d])){const f=w.get(p[n]),x=f!==void 0?s[f]:null;if(x===null){const F=A(i,s[o]);m(F,r[n]),l[n]=F}else l[n]=m(x,r[n]),A(i,s[o],x),s[f]=null;n++}else g(s[d]),d--;else g(s[o]),o++;for(;n<=h;){const f=A(i,l[h+1]);m(f,r[n]),l[n++]=f}for(;o<=d;){const f=s[o++];f!==null&&g(f)}return this.ut=p,N(i,l),C}}),b=Symbol("quads"),O=Symbol("previous output"),_=Symbol("Shown editor"),B={[$.turtle]:"Turtle",[$.jsonLd]:y`JSON&#8209;LD`,[$.trig]:"TriG",[$.nquads]:y`N&#8209;Quads`,[$.ntriples]:y`N&#8209;Triples`,[$.notation3]:"Notation3",[$.rdfXml]:"RDF/XML"};class D extends k{static get properties(){return{formats:{type:String,reflect:!0},input:{type:String,attribute:!1},inputFormat:{type:String,attribute:"input-format"},selectedFormat:{type:String,attribute:!1},layout:{type:String,reflect:!0},prefixes:{type:String},onlyOutput:{type:Boolean,attribute:"only-output"},customPrefixes:{type:Object}}}static get styles(){return P`
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
    `}get value(){return this[_]==="input"?this.input:this._outputEditor.value}get _editor(){return this.renderRoot.querySelector("#input")}get _outputEditor(){return this.renderRoot.querySelector("#output")}get _outputFormats(){const t=this.formats.split(",").map(e=>e.trim());if(!this.onlyOutput){const e=this.formats.indexOf(this.inputFormat);e>=0&&t.splice(e,1)}return t}constructor(){super(),this.formats=Object.values($).join(","),this.prefixes="",this[b]=[],this[_]="input",this.inputFormat="text/turtle",this.customPrefixes={}}connectedCallback(){super.connectedCallback();const t=this.querySelector("script");t&&(this.inputFormat=t.getAttribute("type")||"text/turtle",this.input=t.textContent.trim()),[this.selectedFormat]=this._outputFormats}render(){return y`<div id="wrapper">
      <ol>
        ${this._renderButtons()}
      </ol>
      <rdf-editor
        id="input"
        readonly
        .value="${this.input}"
        .format="${this.inputFormat}"
        ?visible="${this[_]==="input"&&!this.onlyOutput}"
        @quads-changed="${this.__inputParsed}"
      ></rdf-editor>
      <rdf-editor
        id="output"
        readonly
        .customPrefixes="${this.customPrefixes}"
        .prefixes="${this.prefixes}"
        .quads="${this[b]}"
        .format="${this.selectedFormat}"
        ?visible="${this[_]==="output"}"
        @serialized="${this.__dispatchChangeEvent}"
      ></rdf-editor>
    </div>`}async updated(t){super.updated(t),t.has("onlyOutput")&&this.onlyOutput&&this[_]==="input"&&this._showOutput(this._outputFormats[0])()}_renderButtons(){const t=()=>{const e=`format input ${this[_]==="input"?"selected":""}`;return y`<li
        input
        part="${e}"
        @click="${this._showInput}"
        @keydown="${this._onKey(this._showInput)}"
      >
        ${B[this.inputFormat]||this.inputFormat}
      </li>`};return y` ${this.onlyOutput?"":t()}
    ${j(this._outputFormats,this.__renderOutputButton.bind(this))}`}_onKey(t){const e=t.bind(this);return u=>{u.key==="Enter"&&e(this)}}async _showInput(){this[_]="input",this.__dispatchChangeEvent(),this[O]=this.selectedFormat,await this.requestUpdate(),await this._editor.ready,this._editor.codeMirror.editor.refresh()}_showOutput(t){return async()=>{this.selectedFormat=t,this[_]="output",t===this[O]&&this.__dispatchChangeEvent(),this.requestUpdate()}}__inputParsed(t){this[b]=t.detail.value,this.requestUpdate()}__renderOutputButton(t){const e=`format output ${this[_]==="output"&&this.selectedFormat===t?"selected":""}`;return y`<li
      output
      part="${e}"
      @click="${this._showOutput(t)}"
      @keydown="${this._onKey(this._showOutput(t))}"
    >
      ${B[t]||t}
    </li>`}__dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value}}))}}window.customElements.define("rdf-snippet",D);
