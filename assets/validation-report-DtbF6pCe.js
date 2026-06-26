const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-summary-CtnH_1k1.js","assets/index-CMPDJWgO.js","assets/rdf-snippet-DbWX0EMR.js","assets/rdf-editor-BlAHCz55.js"])))=>i.map(i=>d[i]);
import{S as x,a4 as y,a5 as g,A as $,s as b,N as p,X as c,$ as v,ae as u,z as r,_ as o}from"./index-CMPDJWgO.js";import"./vaadin-form-item-Bw9PPiJV.js";import"./dom-utils-BhgefGZl.js";class _ extends x{evaluateDataset(e,a){const[t,...n]=e;let i={value:"",prefixes:[]};return t&&(i=this.evaluateQuad(t,a)),n.reduce((l,f)=>{const m=this.evaluateQuad(f,a);return{value:`${l.value}
${m.value}`,prefixes:l.prefixes}},i)}evaluateQuad(e,a){const t=this.evaluateTerm(e.subject,a),n=this.evaluateTerm(e.predicate,a),i=this.evaluateTerm(e.object,a),l=this.evaluateTerm(e.graph,a);return{value:`${t.value} ${n.value} ${i.value} ${l.value} .`,prefixes:[]}}evaluateLiteral(e){return{value:y(e),prefixes:[]}}evaluateNamedNode(e){return{value:g(e),prefixes:[]}}evaluateBlankNode(e){return{value:$(e),prefixes:[]}}evaluateVariable(){throw new Error("N-Quads cannot serialize variables")}getFinalString(e){return e}}class S extends _{evaluateDataset(e,a){const t=e.match(null,null,null,a.graph);return super.evaluateDataset(t,a)}evaluateQuad(e,a){const t=a.env||p;return a.graph.equals(e.graph)?super.evaluateQuad(t.quad(e.subject,e.predicate,e.object),a):{value:"",prefixes:[]}}}const h=(s,...e)=>new b({strings:s,values:e,tag:h,strategy:new S,defaultOptions:(a=p)=>({graph:a.defaultGraph(),sortGraphs:!1})}),d=Object.entries({tree:"Focus node tree",raw:"Raw RDF"});class w extends c(u,v){static get properties(){return{display:{type:String}}}render(){return r`
      <vaadin-form-layout>
        <vaadin-form-item label-position="top">
          <label slot="label">Display errors as</label>
          <vaadin-list-box
            selected="${d.findIndex(([e])=>e===this.display)}"
            @selected-changed="${this.__formatSelected}"
          >
            ${d.map(([e,a])=>r`
                <vaadin-item value="${e}">${a}</vaadin-item>
              `)}
          </vaadin-list-box>
        </vaadin-form-item>
      </vaadin-form-layout>
    `}mapState(e){return{display:e.validation.display||"tree"}}__formatSelected(e){e.target.items&&u.dispatch.validation.display(e.target.items[e.detail.value].value)}}customElements.define("validation-drawer",w);class N extends c(u,v){static get properties(){return{conforms:{type:Boolean},results:{type:Array},displayAs:{type:String},prefixes:{type:String}}}constructor(){super(),this.results=[]}connectedCallback(){super.connectedCallback(),o(()=>import("./error-summary-CtnH_1k1.js"),__vite__mapDeps([0,1]))}render(){return r`
      <h2>Validation Report</h2>
      <h3>Success</h3>
      <p>${this.conforms?"Yes":"No"}</p>
      <h3 ?hidden="${this.results.length===0}">Errors found</h3>
      ${this._renderResultVisualisation()}
    `}_renderResultVisualisation(){switch(this.displayAs){case"tree":return r`
          <error-summary .validationResults="${this.results}" .customPrefixes="${this.customPrefixes}"></error-summary>
        `;case"raw":{o(()=>import("./rdf-snippet-DbWX0EMR.js"),__vite__mapDeps([2,1,3]));const e=h`${[...this.report.dataset]}`.toString();return r`
          <rdf-snippet
            .input="${e}"
            input-format="text/turtle"
            layout="vertical"
            prefixes="${this.prefixes}"
            only-output
          ></rdf-snippet>
        `}default:return r` Unsupported visualization ${this.displayAs} `}}mapState(e){return{conforms:e.validation.conforms,results:e.validation.results,report:e.validation.report,displayAs:e.validation.display,prefixes:["sh",...e.shapesGraph.prefixes,...e.dataGraph.prefixes].join(","),customPrefixes:{...e.shapesGraph.customPrefixes,...e.dataGraph.customPrefixes}}}}customElements.define("validation-report",N);
