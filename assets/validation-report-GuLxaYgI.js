import{G as x,H as y,I as g,J as $,L as _,R as p,q as c,s as v,u,x as r,_ as o}from"./index-3w6te0oK.js";import"./vaadin-item-HSLyiYGW.js";import"./dom-utils-VPENXKn6.js";class b extends x{evaluateDataset(e,t){const[a,...n]=e;let i={value:"",prefixes:[]};return a&&(i=this.evaluateQuad(a,t)),n.reduce((l,m)=>{const f=this.evaluateQuad(m,t);return{value:`${l.value}
${f.value}`,prefixes:l.prefixes}},i)}evaluateQuad(e,t){const a=this.evaluateTerm(e.subject,t),n=this.evaluateTerm(e.predicate,t),i=this.evaluateTerm(e.object,t),l=this.evaluateTerm(e.graph,t);return{value:`${a.value} ${n.value} ${i.value} ${l.value} .`,prefixes:[]}}evaluateLiteral(e){return{value:y(e),prefixes:[]}}evaluateNamedNode(e){return{value:g(e),prefixes:[]}}evaluateBlankNode(e){return{value:$(e),prefixes:[]}}evaluateVariable(){throw new Error("N-Quads cannot serialize variables")}getFinalString(e){return e}}class S extends b{evaluateDataset(e,t){const a=e.match(null,null,null,t.graph);return super.evaluateDataset(a,t)}evaluateQuad(e,t){return t.graph.equals(e.graph)?super.evaluateQuad(p.quad(e.subject,e.predicate,e.object),t):{value:"",prefixes:[]}}}const h=(s,...e)=>new _({strings:s,values:e,tag:h,strategy:new S,defaultOptions:{graph:p.defaultGraph(),sortGraphs:!1}}),d=Object.entries({tree:"Focus node tree",raw:"Raw RDF"});class R extends c(u,v){static get properties(){return{display:{type:String}}}render(){return r`
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
    `}mapState(e){return{display:e.validation.display||"tree"}}__formatSelected(e){e.target.items&&u.dispatch.validation.display(e.target.items[e.detail.value].value)}}customElements.define("validation-drawer",R);class w extends c(u,v){static get properties(){return{conforms:{type:Boolean},results:{type:Array},displayAs:{type:String},prefixes:{type:String}}}constructor(){super(),this.results=[]}connectedCallback(){super.connectedCallback(),o(()=>import("./error-summary-sz38tVGy.js"),__vite__mapDeps([0,1]))}render(){return r`
      <h2>Validation Report</h2>
      <h3>Success</h3>
      <p>${this.conforms?"Yes":"No"}</p>
      <h3 ?hidden="${this.results.length===0}">Errors found</h3>
      ${this._renderResultVisualisation()}
    `}_renderResultVisualisation(){switch(this.displayAs){case"tree":return r`
          <error-summary .validationResults="${this.results}" .customPrefixes="${this.customPrefixes}"></error-summary>
        `;case"raw":{o(()=>import("./rdf-snippet-GZWInTTW.js"),__vite__mapDeps([2,1,3]));const e=h`${[...this.report.dataset]}`.toString();return r`
          <rdf-snippet
            .input="${e}"
            input-format="text/turtle"
            layout="vertical"
            prefixes="${this.prefixes}"
            only-output
          ></rdf-snippet>
        `}default:return r` Unsupported visualization ${this.displayAs} `}}mapState(e){return{conforms:e.validation.conforms,results:e.validation.results,report:e.validation.report,displayAs:e.validation.display,prefixes:["sh",...e.shapesGraph.prefixes,...e.dataGraph.prefixes].join(","),customPrefixes:{...e.shapesGraph.customPrefixes,...e.dataGraph.customPrefixes}}}}customElements.define("validation-report",w);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/error-summary-sz38tVGy.js","assets/index-3w6te0oK.js","assets/rdf-snippet-GZWInTTW.js","assets/rdf-editor-y5PgPFo7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
