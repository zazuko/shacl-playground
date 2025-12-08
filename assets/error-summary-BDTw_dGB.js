import{s as p,af as a,ag as u,x as o}from"./index-2TCwO9Hs.js";function d(s){try{if(s.resultMessage)return(Array.isArray(s.resultMessage)?s.resultMessage:[s.resultMessage]).join("; ")}catch{const e=s.pointer.out(a.ns.sh.resultMessage).values;if(e.length>0)return e.join("; ")}return s.sourceConstraintComponent?`Violated ${u(s.sourceConstraintComponent.id.value)}`:"Unspecified error"}const n=s=>o` <li>${d(s)}</li> `;function f({focusNodes:s,...r},e){return o`
    <ul>
      ${r.errors.map(n)}
      ${[...s].map(([t,{properties:i,errors:c}])=>o`
          <li>
            ${u(t.value,e)||t.value}:
            <ul>
              ${c.map(n)}
              ${[...i].map(([l,m])=>o`
                  <li>
                    ${u(l.value,e)||l.value}:
                    <ul>
                      ${m.map(n)}
                    </ul>
                  </li>
                `)}
            </ul>
          </li>
        `)}
    </ul>
  `}function h({focusNodes:s,errors:r},e){if(e.focusNode){const t=s.get(e.focusNode)||{properties:a.termMap(),errors:[]};if(e.resultPath){const i=t.properties.get(e.resultPath.id);i?i.push(e):t.properties.set(e.resultPath.id,[e])}else t.errors.push(e);s.set(e.focusNode,t)}else r.push(e);return{focusNodes:s,errors:r}}class g extends p{static get properties(){return{validationResults:{type:Array},customPrefixes:{type:Object}}}constructor(){super(),this.validationResults=[],this.customPrefixes={}}render(){const r=this.validationResults.map(e=>a.rdfine.sh.ValidationResult(e)).filter(e=>e.resultSeverity.equals(a.ns.sh.Violation));if(r.length){const e=r.reduce(h,{focusNodes:a.termMap(),errors:[]});return f(e,this.customPrefixes)}return""}}customElements.define("error-summary",g);
