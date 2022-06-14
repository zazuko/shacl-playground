(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{419:function(e,t,a){"use strict";a.r(t);var r=a(78),s=a(10),i=a(97),l=a(90),n={string:l.xsd.string,integer:l.xsd.integer,decimal:l.xsd.decimal,boolean:l.xsd.boolean,dateTime:l.xsd.dateTime};class u{constructor({strings:e,values:t,tag:a,strategy:r,defaultOptions:s}){this.strings=e,this.values=t,this._tag=a,this.__strategy=r,this.__defaultOptions=s}toString(e){let t=this.__defaultOptions;e&&(t={...t,...e});const{value:a,prefixes:r}=this._toPartialString(t);return this.__strategy.getFinalString(a,r,t)}_toPartialString(e){const t=new Set,a=this.strings.length-1;let r="";for(let s=0;s<a;s++){let a=null;r+=this.strings[s];const l=this.values[s];if(null!=l){if("boolean"==typeof l)a=this.__strategy.evaluateLiteral(i.default.literal(l.toString(),n.boolean),e);else if("number"==typeof l){const t=Number.isInteger(l)?n.integer:n.decimal;a=this.__strategy.evaluateLiteral(i.default.literal(l.toString(),t),e)}else if(l instanceof Date)a=this.__strategy.evaluateLiteral(i.default.literal(l.toISOString(),n.dateTime),e);else if(Array.isArray(l)){const[t,...r]=l;a=this._tag`${t}`._toPartialString(e);for(const t of r){const r=this._tag`${t}`._toPartialString(e);a.value+="\n"+r.value,a.prefixes=[...a.prefixes,...r.prefixes]}}else"object"==typeof l&&("_toPartialString"in l?a=l._toPartialString(e):"subject"in l?a=this.__strategy.evaluateQuad(l,e):"match"in l?a=this.__strategy.evaluateDataset(l,e):"termType"in l&&(a=this.__strategy.evaluateTerm(l,e)));null===a&&(a={value:l.toString(),prefixes:[]}),r+=a.value,[...a.prefixes].forEach(e=>t.add(e))}}return r+=this.strings[a],{value:r,prefixes:t}}}const o=new RegExp('["\\\\\n\r]'),d=new RegExp('["\\\\\n\r]',"g"),p={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function c(e){return p[e]}function v(e){return"_:"+e.value}function h(e){return`<${e.value}>`}function f(e){return`"${t=e.value,o.test(t)?t.replace(d,c):t}"`;var t}function g(e){const t=f(e);return e.language?`${t}@${e.language}`:e.datatype&&!e.datatype.equals(n.string)?`${t}^^${h(e.datatype)}`:t}class m extends class{evaluateTerm(e,t){switch(e.termType){case"Literal":return this.evaluateLiteral(e,t);case"NamedNode":return this.evaluateNamedNode(e,t);case"BlankNode":return this.evaluateBlankNode(e);case"Variable":return this.evaluateVariable(e)}return{value:"",prefixes:[]}}}{evaluateDataset(e,t){const[a,...r]=e;let s={value:"",prefixes:[]};return a&&(s=this.evaluateQuad(a,t)),r.reduce((e,a)=>{const r=this.evaluateQuad(a,t);return{value:`${e.value}\n${r.value}`,prefixes:e.prefixes}},s)}evaluateQuad(e,t){const a=this.evaluateTerm(e.subject,t),r=this.evaluateTerm(e.predicate,t),s=this.evaluateTerm(e.object,t),i=this.evaluateTerm(e.graph,t);return{value:`${a.value} ${r.value} ${s.value} ${i.value} .`,prefixes:[]}}evaluateLiteral(e){return{value:g(e),prefixes:[]}}evaluateNamedNode(e){return{value:h(e),prefixes:[]}}evaluateBlankNode(e){return{value:v(e),prefixes:[]}}evaluateVariable(){throw new Error("N-Quads cannot serialize variables")}getFinalString(e){return e}}class y extends m{evaluateDataset(e,t){const a=e.match(null,null,null,t.graph);return super.evaluateDataset(a,t)}evaluateQuad(e,t){return t.graph.equals(e.graph)?super.evaluateQuad(i.default.triple(e.subject,e.predicate,e.object),t):{value:"",prefixes:[]}}}const x=(e,...t)=>new u({strings:e,values:t,tag:x,strategy:new y,defaultOptions:{graph:i.default.defaultGraph(),sortGraphs:!1}});var _=a(44);a(245),a(246),a(225),a(226);const b=Object.entries({tree:"Focus node tree",raw:"Raw RDF"});class $ extends(Object(r.a)(_.a,s.b)){static get properties(){return{display:{type:String}}}render(){return s.d`
      <vaadin-form-layout>
        <vaadin-form-item label-position="top">
          <label slot="label">Display errors as</label>
          <vaadin-list-box
            selected="${b.findIndex(([e])=>e===this.display)}"
            @selected-changed="${this.__formatSelected}"
          >
            ${b.map(([e,t])=>s.d`
                <vaadin-item value="${e}">${t}</vaadin-item>
              `)}
          </vaadin-list-box>
        </vaadin-form-item>
      </vaadin-form-layout>
    `}mapState(e){return{display:e.validation.display||"tree"}}__formatSelected(e){e.target.items&&_.a.dispatch.validation.display(e.target.items[e.detail.value].value)}}customElements.define("validation-drawer",$);class S extends(Object(r.a)(_.a,s.b)){static get properties(){return{conforms:{type:Boolean},results:{type:Array},displayAs:{type:String},prefixes:{type:String}}}constructor(){super(),this.results=[]}connectedCallback(){super.connectedCallback(),Promise.all([a.e(13),a.e(31)]).then(a.bind(null,417))}render(){return s.d`
      <h2>Validation Report</h2>
      <h3>Success</h3>
      <p>${this.conforms?"Yes":"No"}</p>
      <h3 ?hidden="${0===this.results.length}">Errors found</h3>
      ${this._renderResultVisualisation()}
    `}_renderResultVisualisation(){switch(this.displayAs){case"tree":return s.d`
          <error-summary .validationResults="${this.results}"></error-summary>
        `;case"raw":{Promise.all([a.e(1),a.e(14)]).then(a.bind(null,420));const e=x`${[...this.report.dataset]}`.toString();return s.d`
          <rdf-snippet
            .input="${e}"
            input-format="text/turtle"
            layout="vertical"
            prefixes="${this.prefixes}"
            only-output
          ></rdf-snippet>
        `}default:return s.d`
          Unsupported visualization ${this.displayAs}
        `}}mapState(e){return{conforms:e.validation.conforms,results:e.validation.results,report:e.validation.report,displayAs:e.validation.display,prefixes:["sh",...e.shapesGraph.prefixes,...e.dataGraph.prefixes].join(",")}}}customElements.define("validation-report",S)}}]);
//# sourceMappingURL=da0e6b0570756e60593d.js.map