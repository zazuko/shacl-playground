import{a3 as k,E as q,z as m,$ as B,a0 as P}from"./index-CMPDJWgO.js";import{m as _}from"./rdf-editor-BlAHCz55.js";const I={CHILD:2},M=e=>(...t)=>({_$litDirective$:e,values:t});let U=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,l){this._$Ct=t,this._$AM=i,this._$Ci=l}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const{I:j}=k,F=e=>e,S=()=>document.createComment(""),v=(e,t,i)=>{const l=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(i===void 0){const a=l.insertBefore(S(),s),r=l.insertBefore(S(),s);i=new j(a,r,e,e.options)}else{const a=i._$AB.nextSibling,r=i._$AM,d=r!==e;if(d){let u;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(u=e._$AU)!==r._$AU&&i._$AP(u)}if(a!==s||d){let u=i._$AA;for(;u!==a;){const y=F(u).nextSibling;F(l).insertBefore(u,s),u=y}}}return i},$=(e,t,i=e)=>(e._$AI(t,i),e),L={},D=(e,t=L)=>e._$AH=t,N=e=>e._$AH,A=e=>{e._$AR(),e._$AA.remove()};const O=(e,t,i)=>{const l=new Map;for(let s=t;s<=i;s++)l.set(e[s],s);return l},R=M(class extends U{constructor(e){if(super(e),e.type!==I.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let l;i===void 0?i=t:t!==void 0&&(l=t);const s=[],a=[];let r=0;for(const d of e)s[r]=l?l(d,r):r,a[r]=i(d,r),r++;return{values:a,keys:s}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,l]){const s=N(e),{values:a,keys:r}=this.dt(t,i,l);if(!Array.isArray(s))return this.ut=r,a;const d=this.ut??=[],u=[];let y,w,n=0,p=s.length-1,o=0,h=a.length-1;for(;n<=p&&o<=h;)if(s[n]===null)n++;else if(s[p]===null)p--;else if(d[n]===r[o])u[o]=$(s[n],a[o]),n++,o++;else if(d[p]===r[h])u[h]=$(s[p],a[h]),p--,h--;else if(d[n]===r[h])u[h]=$(s[n],a[h]),v(e,u[h+1],s[n]),n++,h--;else if(d[p]===r[o])u[o]=$(s[p],a[o]),v(e,s[n],s[p]),p--,o++;else if(y===void 0&&(y=O(r,o,h),w=O(d,n,p)),y.has(d[n]))if(y.has(d[p])){const c=w.get(r[o]),x=c!==void 0?s[c]:null;if(x===null){const b=v(e,s[n]);$(b,a[o]),u[o]=b}else u[o]=$(x,a[o]),v(e,s[n],x),s[c]=null;o++}else A(s[p]),p--;else A(s[n]),n++;for(;o<=h;){const c=v(e,u[h+1]);$(c,a[o]),u[o++]=c}for(;n<=p;){const c=s[n++];c!==null&&A(c)}return this.ut=r,D(e,u),q}}),g=Symbol("quads"),C=Symbol("previous output"),f=Symbol("Shown editor"),E={[_.turtle]:"Turtle",[_.jsonLd]:m`JSON&#8209;LD`,[_.trig]:"TriG",[_.nquads]:m`N&#8209;Quads`,[_.ntriples]:m`N&#8209;Triples`,[_.notation3]:"Notation3",[_.rdfXml]:"RDF/XML"};class T extends B{static get properties(){return{formats:{type:String,reflect:!0},input:{type:String,attribute:!1},inputFormat:{type:String,attribute:"input-format"},selectedFormat:{type:String,attribute:!1},layout:{type:String,reflect:!0},prefixes:{type:String},onlyOutput:{type:Boolean,attribute:"only-output"},customPrefixes:{type:Object}}}static get styles(){return P`
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
    `}get value(){return this[f]==="input"?this.input:this._outputEditor.value}get _editor(){return this.renderRoot.querySelector("#input")}get _outputEditor(){return this.renderRoot.querySelector("#output")}get _outputFormats(){const t=this.formats.split(",").map(i=>i.trim());if(!this.onlyOutput){const i=this.formats.indexOf(this.inputFormat);i>=0&&t.splice(i,1)}return t}constructor(){super(),this.formats=Object.values(_).join(","),this.prefixes="",this[g]=[],this[f]="input",this.inputFormat="text/turtle",this.customPrefixes={}}connectedCallback(){super.connectedCallback();const t=this.querySelector("script");t&&(this.inputFormat=t.getAttribute("type")||"text/turtle",this.input=t.textContent.trim()),[this.selectedFormat]=this._outputFormats}render(){return m`<div id="wrapper">
      <ol>
        ${this._renderButtons()}
      </ol>
      <rdf-editor
        id="input"
        readonly
        .value="${this.input}"
        .format="${this.inputFormat}"
        ?visible="${this[f]==="input"&&!this.onlyOutput}"
        @quads-changed="${this.__inputParsed}"
      ></rdf-editor>
      <rdf-editor
        id="output"
        readonly
        .customPrefixes="${this.customPrefixes}"
        .prefixes="${this.prefixes}"
        .quads="${this[g]}"
        .format="${this.selectedFormat}"
        ?visible="${this[f]==="output"}"
        @serialized="${this.__dispatchChangeEvent}"
      ></rdf-editor>
    </div>`}async updated(t){super.updated(t),t.has("onlyOutput")&&this.onlyOutput&&this[f]==="input"&&this._showOutput(this._outputFormats[0])()}_renderButtons(){const t=()=>{const i=`format input ${this[f]==="input"?"selected":""}`;return m`<li
        input
        part="${i}"
        @click="${this._showInput}"
        @keydown="${this._onKey(this._showInput)}"
      >
        ${E[this.inputFormat]||this.inputFormat}
      </li>`};return m` ${this.onlyOutput?"":t()}
    ${R(this._outputFormats,this.__renderOutputButton.bind(this))}`}_onKey(t){const i=t.bind(this);return l=>{l.key==="Enter"&&i(this)}}async _showInput(){this[f]="input",this.__dispatchChangeEvent(),this[C]=this.selectedFormat,await this.requestUpdate(),await this._editor.ready,this._editor.codeMirror.editor.refresh()}_showOutput(t){return async()=>{this.selectedFormat=t,this[f]="output",t===this[C]&&this.__dispatchChangeEvent(),this.requestUpdate()}}__inputParsed(t){this[g]=t.detail.value,this.requestUpdate(),this.dispatchEvent(new CustomEvent("quads-changed",{detail:{value:this[g]}}))}__renderOutputButton(t){const i=`format output ${this[f]==="output"&&this.selectedFormat===t?"selected":""}`;return m`<li
      output
      part="${i}"
      @click="${this._showOutput(t)}"
      @keydown="${this._onKey(this._showOutput(t))}"
    >
      ${E[t]||t}
    </li>`}__dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value}}))}}window.customElements.define("rdf-snippet",T);
