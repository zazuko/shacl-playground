(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{417:function(e,r,t){"use strict";t.r(r);var s=t(10),o=t(395),n=t(125),u=t(398),i=t(90);function l(e,r){if(null==e)return{};var t,s,o=function(e,r){if(null==e)return{};var t,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a=e=>s.d`
    <li>${function(e){return e.resultMessage?e.resultMessage:e.sourceConstraintComponent?"Violated "+Object(o.a)(e.sourceConstraintComponent.id.value):"Unspecified error"}(e)}</li>
  `;function c({focusNodes:e,errors:r},t){if(t.focusNode){const r=e.get(t.focusNode)||{properties:new n.a,errors:[]};if(t.resultPath){const e=r.properties.get(t.resultPath.id);e?e.push(t):r.properties.set(t.resultPath.id,[t])}else r.errors.push(t);e.set(t.focusNode,r)}else r.push(t);return{focusNodes:e,errors:r}}class p extends s.b{static get properties(){return{validationResults:{type:Array}}}constructor(){super(),this.validationResults=[]}render(){const e=this.validationResults.map(e=>Object(u.a)(e)).filter(e=>e.resultSeverity.equals(i.sh.Violation));if(e.length){return function(e){let{focusNodes:r}=e,t=l(e,["focusNodes"]);return s.d`
    <ul>
      ${t.errors.map(a)}
      ${[...r].map(([e,{properties:r,errors:t}])=>s.d`
          <li>
            ${e.value}:
            <ul>
              ${t.map(a)}
              ${[...r].map(([e,r])=>s.d`
                  <li>
                    ${Object(o.a)(e.value)}:
                    <ul>
                      ${r.map(a)}
                    </ul>
                  </li>
                `)}
            </ul>
          </li>
        `)}
    </ul>
  `}(e.reduce(c,{focusNodes:new n.a,errors:[]}))}return""}}customElements.define("error-summary",p)}}]);
//# sourceMappingURL=53b741a9f32bca3584d9.js.map