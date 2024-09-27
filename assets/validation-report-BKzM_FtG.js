const __vite__fileDeps=["assets/error-summary-Bh6dqPnl.js","assets/index-DpEFpdLU.js","assets/rdf-snippet-DRdiHKTL.js","assets/rdf-editor-CmXWlMyL.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{G as x,H as y,I as g,J as $,L as _,M as p,q as c,s as v,u,x as r,_ as o}from"./index-DpEFpdLU.js";import"./vaadin-item-CMeNBG6v.js";import"./dom-utils-DPL7MVhW.js";class b extends x{evaluateDataset(e,t){const[a,...n]=e;let i={value:"",prefixes:[]};return a&&(i=this.evaluateQuad(a,t)),n.reduce((l,f)=>{const m=this.evaluateQuad(f,t);return{value:`${l.value}
${m.value}`,prefixes:l.prefixes}},i)}evaluateQuad(e,t){const a=this.evaluateTerm(e.subject,t),n=this.evaluateTerm(e.predicate,t),i=this.evaluateTerm(e.object,t),l=this.evaluateTerm(e.graph,t);return{value:`${a.value} ${n.value} ${i.value} ${l.value} .`,prefixes:[]}}evaluateLiteral(e){return{value:y(e),prefixes:[]}}evaluateNamedNode(e){return{value:g(e),prefixes:[]}}evaluateBlankNode(e){return{value:$(e),prefixes:[]}}evaluateVariable(){throw new Error("N-Quads cannot serialize variables")}getFinalString(e){return e}}class S extends b{evaluateDataset(e,t){const a=e.match(null,null,null,t.graph);return super.evaluateDataset(a,t)}evaluateQuad(e,t){const a=t.env||p;return t.graph.equals(e.graph)?super.evaluateQuad(a.quad(e.subject,e.predicate,e.object),t):{value:"",prefixes:[]}}}const h=(s,...e)=>new _({strings:s,values:e,tag:h,strategy:new S,defaultOptions:(t=p)=>({graph:t.defaultGraph(),sortGraphs:!1})}),d=Object.entries({tree:"Focus node tree",raw:"Raw RDF"});class w extends c(u,v){static get properties(){return{display:{type:String}}}render(){return r`
      <vaadin-form-layout>
        <vaadin-form-item label-position="top">
          <label slot="label">Display errors as</label>
          <vaadin-list-box
            selected="${d.findIndex(([e])=>e===this.display)}"
            @selected-changed="${this.__formatSelected}"
          >
            ${d.map(([e,t])=>r`
                <vaadin-item value="${e}">${t}</vaadin-item>
              `)}
          </vaadin-list-box>
        </vaadin-form-item>
      </vaadin-form-layout>
    `}mapState(e){return{display:e.validation.display||"tree"}}__formatSelected(e){e.target.items&&u.dispatch.validation.display(e.target.items[e.detail.value].value)}}customElements.define("validation-drawer",w);class R extends c(u,v){static get properties(){return{conforms:{type:Boolean},results:{type:Array},displayAs:{type:String},prefixes:{type:String}}}constructor(){super(),this.results=[]}connectedCallback(){super.connectedCallback(),o(()=>import("./error-summary-Bh6dqPnl.js"),__vite__mapDeps([0,1]))}render(){return r`
      <h2>Validation Report</h2>
      <h3>Success</h3>
      <p>${this.conforms?"Yes":"No"}</p>
      <h3 ?hidden="${this.results.length===0}">Errors found</h3>
      ${this._renderResultVisualisation()}
    `}_renderResultVisualisation(){switch(this.displayAs){case"tree":return r`
          <error-summary .validationResults="${this.results}" .customPrefixes="${this.customPrefixes}"></error-summary>
        `;case"raw":{o(()=>import("./rdf-snippet-DRdiHKTL.js"),__vite__mapDeps([2,1,3]));const e=h`${[...this.report.dataset]}`.toString();return r`
          <rdf-snippet
            .input="${e}"
            input-format="text/turtle"
            layout="vertical"
            prefixes="${this.prefixes}"
            only-output
          ></rdf-snippet>
        `}default:return r` Unsupported visualization ${this.displayAs} `}}mapState(e){return{conforms:e.validation.conforms,results:e.validation.results,report:e.validation.report,displayAs:e.validation.display,prefixes:["sh",...e.shapesGraph.prefixes,...e.dataGraph.prefixes].join(","),customPrefixes:{...e.shapesGraph.customPrefixes,...e.dataGraph.customPrefixes}}}}customElements.define("validation-report",R);
