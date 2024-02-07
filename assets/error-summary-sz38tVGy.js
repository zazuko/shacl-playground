import{s as m,ad as o,x as a,ae as u}from"./index-3w6te0oK.js";function d(r){return r.resultMessage?r.resultMessage:r.sourceConstraintComponent?`Violated ${u(r.sourceConstraintComponent.id.value)}`:"Unspecified error"}const n=r=>a` <li>${d(r)}</li> `;function f({focusNodes:r,...s},e){return a`
    <ul>
      ${s.errors.map(n)}
      ${[...r].map(([t,{properties:i,errors:c}])=>a`
          <li>
            ${u(t.value,e)||t.value}:
            <ul>
              ${c.map(n)}
              ${[...i].map(([l,p])=>a`
                  <li>
                    ${u(l.value,e)||l.value}:
                    <ul>
                      ${p.map(n)}
                    </ul>
                  </li>
                `)}
            </ul>
          </li>
        `)}
    </ul>
  `}function h({focusNodes:r,errors:s},e){if(e.focusNode){const t=r.get(e.focusNode)||{properties:o.termMap(),errors:[]};if(e.resultPath){const i=t.properties.get(e.resultPath.id);i?i.push(e):t.properties.set(e.resultPath.id,[e])}else t.errors.push(e);r.set(e.focusNode,t)}else s.push(e);return{focusNodes:r,errors:s}}class v extends m{static get properties(){return{validationResults:{type:Array},customPrefixes:{type:Object}}}constructor(){super(),this.validationResults=[],this.customPrefixes={}}render(){const s=this.validationResults.map(e=>o.rdfine.sh.ValidationResult(e)).filter(e=>e.resultSeverity.equals(o.ns.sh.Violation));if(s.length){const e=s.reduce(h,{focusNodes:o.termMap(),errors:[]});return f(e,this.customPrefixes)}return""}}customElements.define("error-summary",v);
