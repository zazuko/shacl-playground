import{r as f,i as y,A as n,T as I,a as h,D as w,E as v,P as _,c as b,C as x,h as $,d as C}from"./index-2TCwO9Hs.js";f("vaadin-icon",y`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});const E={SVG:2},S=(i,e)=>e===void 0?i?._$litType$!==void 0:i?._$litType$===e;const T={CHILD:2},A=i=>(...e)=>({_$litDirective$:i,values:e});class N{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class a extends N{constructor(e){if(super(e),this.et=n,e.type!==T.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n||e==null)return this.ft=void 0,this.et=e;if(e===I)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;class c extends a{}c.directiveName="unsafeSVG",c.resultType=2;const g=A(c);function k(i){let e=n;if(i){const t=i.cloneNode(!0);t.removeAttribute("id"),e=h`${g(t.outerHTML)}`}return e}function M(i){return S(i,E.SVG)||i===n}function p(i){let e=i==null||i===""?n:i;return M(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=n),e}function z(i,e){const t=p(i);w(t,e)}function R(i){return h`${g(i)}`}const s={};class r extends v(_){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(e){let t=s[e];return t||(t=document.createElement("vaadin-iconset"),t.name=e,s[e]=t),t}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(e){this._icons=this._icons||this.__createIconMap();const t=this._icons[this.__getIconId(e)];return{svg:k(t),size:this.size,viewBox:t?t.getAttribute("viewBox"):null}}__createIconMap(){const e={};return this.querySelectorAll("[id]").forEach(t=>{e[this.__getIconId(t.id)]=t}),e}__getIconId(e){return(e||"").replace(`${this.name}:`,"")}__nameChanged(e,t){t&&(s[e]=r.getIconset(t),delete s[t]),e&&(s[e]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:e})))}}customElements.define(r.is,r);const L="vaadin";class u extends b(v(x(_))){static get template(){return $`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,reflectToAttribute:!0,observer:"__iconChanged"},svg:{type:Object},size:{type:Number,value:24},__svgElement:Object,__viewBox:String}}static get observers(){return["__svgChanged(svg, __svgElement)"]}constructor(){super(),this.__onIconsetRegistered=this.__onIconsetRegistered.bind(this)}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("svg"),this._tooltipController=new C(this),this.addController(this._tooltipController)}__getIconsetName(e){return e?e.split(":")[0]||L:void 0}__onIconsetRegistered(e){e.detail===this.__getIconsetName(this.icon)&&this.__iconChanged(this.icon)}connectedCallback(){super.connectedCallback(),document.addEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}__iconChanged(e){if(e){this.__checkDeprecatedIcon(e);const t=this.__getIconsetName(e),o=r.getIconset(t),{svg:m,size:l,viewBox:d}=o.applyIcon(e);d&&(this.__viewBox=d),l!==this.size&&(this.size=l),this.svg=m}else this.svg=p(null)}__checkDeprecatedIcon(e){const t={"vaadin:buss":"vaadin:bus","vaadin:funcion":"vaadin:function","vaadin:megafone":"vaadin:megaphone","vaadin:palete":"vaadin:palette","vaadin:trendind-down":"vaadin:trending-down"};e in t&&console.warn(`WARNING: The icon "${e}" is deprecated. Use "${t[e]}" instead`)}__svgChanged(e,t){t&&z(e,t)}__computeViewBox(e,t){return t||`0 0 ${e} ${e}`}}customElements.define(u.is,u);export{u as Icon,k as cloneSvgNode,p as ensureSvgLiteral,M as isValidSvg,z as renderSvg,R as unsafeSvgLiteral};
