/*! For license information please see 97184865fa3f4743776c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(t,e,n){"use strict";var r=n(7),o=n(15),i=n(55),a=n(57);class s extends(Object(a.a)(Object(o.a)(Object(i.a)(r.a)))){static get template(){return r.b`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}static get version(){return"21.0.5"}constructor(){super(),this.value}}customElements.define(s.is,s)},172:function(t,e,n){"use strict";var r=n(7),o=n(15),i=n(58);const a=t=>class extends(Object(i.a)(t)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",t=>this._onMultipleClick(t)),super.ready()}_enhanceMultipleItems(t,e,n,r){if(t&&e){if(r){const e=r.map(e=>t[e]);t.forEach(t=>t.selected=-1!==e.indexOf(t))}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const t=this.selectedValues.slice(-1)[0];t&&!t.disabled&&this._scrollToItem(t)}_onMultipleClick(t){const e=this._filterItems(t.composedPath())[0],n=e&&!e.disabled?this.items.indexOf(e):-1;n<0||!this.multiple||(t.preventDefault(),-1!==this.selectedValues.indexOf(n)?this.selectedValues=this.selectedValues.filter(t=>t!==n):this.selectedValues=this.selectedValues.concat(n))}_multipleChanged(t,e){!t&&e&&(this.selectedValues=[],this.items.forEach(t=>t.selected=!1)),t&&!e&&void 0!==this.selected&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0)}};var s=n(16);class l extends(Object(s.a)(a(Object(o.a)(r.a)))){static get template(){return r.b`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-list-box"}static get version(){return"21.0.5"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var t=this.querySelector("vaadin-item");!t||t instanceof r.a||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(l.is,l)},225:function(t,e,n){"use strict";n(252),n(172)},226:function(t,e,n){"use strict";n(251),n(134)},245:function(t,e,n){"use strict";var r=n(3);n(36);Object(r.b)("vaadin-form-layout",r.a`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});var o=n(7),i=n(35),a=n(24),s=n(13),l=n(25),c=n(15),u=n(16);class d extends(Object(u.a)(Object(c.a)(Object(a.b)([l.a],o.a)))){static get template(){return o.b`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get version(){return"21.0.5"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.root.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("iron-resize",this._selectResponsiveStep),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),Object(i.b)(this,this._selectResponsiveStep),Object(i.b)(this,this.updateStyles),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(t=>{t.forEach(t=>{"attributes"!==t.type||"colspan"!==t.attributeName&&"hidden"!==t.attributeName||this.updateStyles()})}),this.__childObserver=new s.a(this,e=>{const n=this._getObservableNodes(e.addedNodes),r=this._getObservableNodes(e.removedNodes);n.forEach(e=>{this.__mutationObserver.observe(e,t)}),(n.length>0||r.length>0)&&this.updateStyles()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(t=>t.nodeType===Node.ELEMENT_NODE&&-1===e.indexOf(t.localName.toLowerCase()))}_naturalNumberOrOne(t){return"number"==typeof t&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return"inherit"!==t&&"normal"!==t&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(t=>{if(this._naturalNumberOrOne(t.columns)!==t.columns)throw new Error(`Invalid 'columns' value of ${t.columns}, a natural number is required.`);if(void 0!==t.minWidth&&!this._isValidCSSLength(t.minWidth))throw new Error(`Invalid 'minWidth' value of ${t.minWidth}, a valid CSS length required.`);if(void 0!==t.labelsPosition&&-1===["aside","top"].indexOf(t.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${t.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(n){e&&e!==t?(console.warn(n.message+" Using previously set 'responsiveSteps' instead."),this.responsiveSteps=e):(console.warn(n.message+" Using default 'responsiveSteps' instead."),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){0===t.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;this.responsiveSteps.forEach(e=>{this.$.layout.style.setProperty("background-position",e.minWidth);parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(t=e)}),this.$.layout.style.removeProperty("background-position"),t&&(this._columnCount=t.columns,this._labelsOnTop="top"===t.labelsPosition)}_invokeUpdateStyles(){this.updateStyles()}updateStyles(t){super.updateStyles(t);const e=getComputedStyle(this),n=e.getPropertyValue("--vaadin-form-layout-column-spacing"),r=e.direction,o="margin-"+("ltr"===r?"left":"right"),i="margin-"+("ltr"===r?"right":"left"),a=this.offsetWidth;let s=0;Array.from(this.children).filter(t=>"br"===t.localName||"none"!==getComputedStyle(t).display).forEach((t,e,r)=>{if("br"===t.localName)return void(s=0);let l;l=this._naturalNumberOrOne(parseFloat(t.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const c=l/this._columnCount;t.style.width=`calc(${99.9*c}% - ${1-c} * ${n})`,s+l>this._columnCount&&(s=0),0===s?t.style.setProperty(o,"0px"):t.style.removeProperty(o);const u=e+1,d=u<r.length&&"br"===r[u].localName;if(s+l===this._columnCount)t.style.setProperty(i,"0px");else if(d){const e=(this._columnCount-s-l)/this._columnCount;t.style.setProperty(i,`calc(${e*a}px + ${e} * ${n})`)}else t.style.removeProperty(i);s=(s+l)%this._columnCount,"vaadin-form-item"===t.localName&&(this._labelsOnTop?t.setAttribute("label-position","top"):t.removeAttribute("label-position"))})}}customElements.define(d.is,d)},246:function(t,e,n){"use strict";var r=n(3);n(42),n(36),n(48),n(49);Object(r.b)("vaadin-form-item",r.a`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }
  `,{moduleId:"lumo-form-item"});var o=n(7),i=n(15);class a extends(Object(i.a)(o.a)){static get template(){return o.b`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;

          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;

          margin: calc(0.5 * var(--vaadin-form-item-row-spacing)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="_onLabelClick">
        <slot name="label" id="labelSlot"></slot>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}_onLabelClick(){const t=Array.prototype.find.call(this.$.contentSlot.assignedNodes(),t=>t.nodeType===Node.ELEMENT_NODE);t&&(t.focus(),t.click())}}customElements.define(a.is,a)},251:function(t,e,n){"use strict";var r=n(3);n(62),n(50),n(36),n(48),n(49);Object(r.b)("vaadin-item",r.a`
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      padding: 0.5em 1em;
      min-height: var(--lumo-size-m);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
    }

    /* Checkmark */
    :host([tabindex])::before {
      display: var(--_lumo-item-selected-icon-display, none);
      content: var(--lumo-icons-checkmark);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      font-weight: normal;
      width: 1em;
      height: 1em;
      margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
      color: var(--lumo-primary-text-color);
      flex: none;
      opacity: 0;
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host([active]:not([selected]))::before {
      transform: scale(0.8);
      opacity: 0;
      transition-duration: 0s;
    }

    [part='content'] {
      flex: auto;
    }

    /* Disabled */
    :host([disabled]) {
      color: var(--lumo-disabled-text-color);
      cursor: default;
      pointer-events: none;
    }

    /* Slotted icons */
    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-item"});n(134)},252:function(t,e,n){"use strict";var r=n(3);n(42),n(36),n(48);Object(r.b)("vaadin-list-box",r.a`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Normal item */
    [part='items'] ::slotted(vaadin-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: var(--lumo-clickable-cursor);
      outline: none;
      border-radius: var(--lumo-border-radius-m);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    [part='items'] ::slotted(vaadin-item[disabled]) {
      cursor: default;
    }

    /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
    [part='items'] ::slotted(vaadin-item)::before {
      display: var(--_lumo-item-selected-icon-display);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* Focused item */
    [part='items'] ::slotted([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    @media (pointer: coarse) {
      [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: transparent;
      }

      [part='items'] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: none;
      }
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    }
  `,{moduleId:"lumo-list-box"});n(172)},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(97);const o={apply:(t,e,n)=>t(n[0]),get:(t,e)=>t(e)};function i(t,{factory:e=r}={}){const n=(n="")=>e.namedNode(`${t}${n.raw||n}`);return"undefined"==typeof Proxy?n:new Proxy(n,o)}},90:function(t,e,n){"use strict";n.r(e),n.d(e,"acl",(function(){return i})),n.d(e,"as",(function(){return s})),n.d(e,"cc",(function(){return c})),n.d(e,"cnt",(function(){return d})),n.d(e,"constant",(function(){return h})),n.d(e,"csvw",(function(){return f})),n.d(e,"ctag",(function(){return b})),n.d(e,"dash",(function(){return v})),n.d(e,"dbo",(function(){return O})),n.d(e,"dc11",(function(){return x})),n.d(e,"dcat",(function(){return k})),n.d(e,"dcterms",(function(){return C})),n.d(e,"discipline",(function(){return q})),n.d(e,"doap",(function(){return P})),n.d(e,"dpv",(function(){return I})),n.d(e,"dqv",(function(){return A})),n.d(e,"dtype",(function(){return z})),n.d(e,"duv",(function(){return D})),n.d(e,"earl",(function(){return W})),n.d(e,"foaf",(function(){return G})),n.d(e,"frbr",(function(){return B})),n.d(e,"geo",(function(){return X})),n.d(e,"geof",(function(){return H})),n.d(e,"geor",(function(){return Q})),n.d(e,"gml",(function(){return Z})),n.d(e,"gn",(function(){return et})),n.d(e,"gr",(function(){return rt})),n.d(e,"grddl",(function(){return it})),n.d(e,"gtfs",(function(){return st})),n.d(e,"http",(function(){return ct})),n.d(e,"hydra",(function(){return dt})),n.d(e,"ical",(function(){return ht})),n.d(e,"ldp",(function(){return ft})),n.d(e,"lvont",(function(){return bt})),n.d(e,"ma",(function(){return vt})),n.d(e,"oa",(function(){return Ot})),n.d(e,"og",(function(){return xt})),n.d(e,"org",(function(){return kt})),n.d(e,"owl",(function(){return Ct})),n.d(e,"prefix",(function(){return qt})),n.d(e,"prov",(function(){return Pt})),n.d(e,"qb",(function(){return It})),n.d(e,"qkdv",(function(){return At})),n.d(e,"quantitykind",(function(){return zt})),n.d(e,"qudt",(function(){return Dt})),n.d(e,"rdau",(function(){return Wt})),n.d(e,"rdf",(function(){return Gt})),n.d(e,"rdfa",(function(){return Bt})),n.d(e,"rdfs",(function(){return Xt})),n.d(e,"rev",(function(){return Ht})),n.d(e,"rico",(function(){return Qt})),n.d(e,"rif",(function(){return Zt})),n.d(e,"rr",(function(){return ee})),n.d(e,"rss",(function(){return re})),n.d(e,"schema",(function(){return ie})),n.d(e,"sd",(function(){return se})),n.d(e,"sdmx",(function(){return ce})),n.d(e,"sem",(function(){return de})),n.d(e,"sf",(function(){return he})),n.d(e,"sh",(function(){return fe})),n.d(e,"shex",(function(){return be})),n.d(e,"sioc",(function(){return ve})),n.d(e,"skos",(function(){return Oe})),n.d(e,"skosxl",(function(){return xe})),n.d(e,"sosa",(function(){return ke})),n.d(e,"sou",(function(){return Ce})),n.d(e,"ssn",(function(){return qe})),n.d(e,"test",(function(){return Pe})),n.d(e,"time",(function(){return Ie})),n.d(e,"unit",(function(){return Ae})),n.d(e,"v",(function(){return ze})),n.d(e,"vaem",(function(){return De})),n.d(e,"vann",(function(){return We})),n.d(e,"vcard",(function(){return Ge})),n.d(e,"_void",(function(){return Be})),n.d(e,"vs",(function(){return Xe})),n.d(e,"wdr",(function(){return He})),n.d(e,"wdrs",(function(){return Qe})),n.d(e,"wgs",(function(){return Ze})),n.d(e,"xhv",(function(){return en})),n.d(e,"xkos",(function(){return rn})),n.d(e,"xml",(function(){return an})),n.d(e,"xsd",(function(){return ln}));var r=n(79);const o=Object(r.a)("http://www.w3.org/ns/auth/acl#"),i=o,a=Object(r.a)("https://www.w3.org/ns/activitystreams#"),s=a,l=Object(r.a)("http://creativecommons.org/ns#"),c=l,u=Object(r.a)("http://www.w3.org/2011/content#"),d=u,p=Object(r.a)("http://qudt.org/vocab/constant/"),h=p,m=Object(r.a)("http://www.w3.org/ns/csvw#"),f=m,w=Object(r.a)("http://commontag.org/ns#"),b=w,g=Object(r.a)("http://datashapes.org/dash#"),v=g,y=Object(r.a)("http://dbpedia.org/ontology/"),O=y,j=Object(r.a)("http://purl.org/dc/elements/1.1/"),x=j,_=Object(r.a)("http://www.w3.org/ns/dcat#"),k=_,S=Object(r.a)("http://purl.org/dc/terms/"),C=S,E=Object(r.a)("http://qudt.org/vocab/discipline/"),q=E,N=Object(r.a)("http://usefulinc.com/ns/doap#"),P=N,T=Object(r.a)("http://www.w3.org/ns/dpv#"),I=T,V=Object(r.a)("http://www.w3.org/ns/dqv#"),A=V,L=Object(r.a)("http://www.linkedmodel.org/schema/dtype#"),z=L,$=Object(r.a)("http://www.w3.org/ns/duv#"),D=$,M=Object(r.a)("https://www.w3.org/ns/earl#"),W=M,R=Object(r.a)("http://xmlns.com/foaf/0.1/"),G=R,U=Object(r.a)("http://purl.org/vocab/frbr/core#"),B=U,F=Object(r.a)("http://www.opengis.net/ont/geosparql#"),X=F,J=Object(r.a)("http://www.opengis.net/def/function/geosparql/"),H=J,K=Object(r.a)("http://www.opengis.net/def/rule/geosparql/"),Q=K,Y=Object(r.a)("http://www.opengis.net/ont/gml#"),Z=Y,tt=Object(r.a)("http://www.geonames.org/ontology#"),et=tt,nt=Object(r.a)("http://purl.org/goodrelations/v1#"),rt=nt,ot=Object(r.a)("http://www.w3.org/2003/g/data-view#"),it=ot,at=Object(r.a)("http://vocab.gtfs.org/terms#"),st=at,lt=Object(r.a)("http://www.w3.org/2011/http#"),ct=lt,ut=Object(r.a)("http://www.w3.org/ns/hydra/core#"),dt=ut,pt=Object(r.a)("http://www.w3.org/2002/12/cal/icaltzd#"),ht=pt,mt=Object(r.a)("http://www.w3.org/ns/ldp#"),ft=mt,wt=Object(r.a)("http://lexvo.org/ontology#"),bt=wt,gt=Object(r.a)("http://www.w3.org/ns/ma-ont#"),vt=gt,yt=Object(r.a)("http://www.w3.org/ns/oa#"),Ot=yt,jt=Object(r.a)("http://ogp.me/ns#"),xt=jt,_t=Object(r.a)("http://www.w3.org/ns/org#"),kt=_t,St=Object(r.a)("http://www.w3.org/2002/07/owl#"),Ct=St,Et=Object(r.a)("http://qudt.org/vocab/prefix/"),qt=Et,Nt=Object(r.a)("http://www.w3.org/ns/prov#"),Pt=Nt,Tt=Object(r.a)("http://purl.org/linked-data/cube#"),It=Tt,Vt=Object(r.a)("http://qudt.org/vocab/dimensionvector/"),At=Vt,Lt=Object(r.a)("http://qudt.org/vocab/quantitykind/"),zt=Lt,$t=Object(r.a)("http://qudt.org/schema/qudt/"),Dt=$t,Mt=Object(r.a)("http://rdaregistry.info/Elements/u/"),Wt=Mt,Rt=Object(r.a)("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),Gt=Rt,Ut=Object(r.a)("http://www.w3.org/ns/rdfa#"),Bt=Ut,Ft=Object(r.a)("http://www.w3.org/2000/01/rdf-schema#"),Xt=Ft,Jt=Object(r.a)("http://purl.org/stuff/rev#"),Ht=Jt,Kt=Object(r.a)("https://www.ica.org/standards/RiC/ontology#"),Qt=Kt,Yt=Object(r.a)("http://www.w3.org/2007/rif#"),Zt=Yt,te=Object(r.a)("http://www.w3.org/ns/r2rml#"),ee=te,ne=Object(r.a)("http://purl.org/rss/1.0/"),re=ne,oe=Object(r.a)("http://schema.org/"),ie=oe,ae=Object(r.a)("http://www.w3.org/ns/sparql-service-description#"),se=ae,le=Object(r.a)("http://purl.org/linked-data/sdmx#"),ce=le,ue=Object(r.a)("http://semanticweb.cs.vu.nl/2009/11/sem/"),de=ue,pe=Object(r.a)("http://www.opengis.net/ont/sf#"),he=pe,me=Object(r.a)("http://www.w3.org/ns/shacl#"),fe=me,we=Object(r.a)("http://www.w3.org/ns/shex#"),be=we,ge=Object(r.a)("http://rdfs.org/sioc/ns#"),ve=ge,ye=Object(r.a)("http://www.w3.org/2004/02/skos/core#"),Oe=ye,je=Object(r.a)("http://www.w3.org/2008/05/skos-xl#"),xe=je,_e=Object(r.a)("http://www.w3.org/ns/sosa/"),ke=_e,Se=Object(r.a)("http://qudt.org/vocab/sou/"),Ce=Se,Ee=Object(r.a)("http://www.w3.org/ns/ssn/"),qe=Ee,Ne=Object(r.a)("http://www.w3.org/2006/03/test-description#"),Pe=Ne,Te=Object(r.a)("http://www.w3.org/2006/time#"),Ie=Te,Ve=Object(r.a)("http://qudt.org/vocab/unit/"),Ae=Ve,Le=Object(r.a)("http://rdf.data-vocabulary.org/#"),ze=Le,$e=Object(r.a)("http://www.linkedmodel.org/schema/vaem#"),De=$e,Me=Object(r.a)("http://purl.org/vocab/vann/"),We=Me,Re=Object(r.a)("http://www.w3.org/2006/vcard/ns#"),Ge=Re,Ue=Object(r.a)("http://rdfs.org/ns/void#"),Be=Ue,Fe=Object(r.a)("http://www.w3.org/2003/06/sw-vocab-status/ns#"),Xe=Fe,Je=Object(r.a)("http://www.w3.org/2007/05/powder#"),He=Je,Ke=Object(r.a)("http://www.w3.org/2007/05/powder-s#"),Qe=Ke,Ye=Object(r.a)("http://www.w3.org/2003/01/geo/wgs84_pos#"),Ze=Ye,tn=Object(r.a)("http://www.w3.org/1999/xhtml/vocab#"),en=tn,nn=Object(r.a)("http://rdf-vocabulary.ddialliance.org/xkos#"),rn=nn,on=Object(r.a)("http://www.w3.org/XML/1998/namespace"),an=on,sn=Object(r.a)("http://www.w3.org/2001/XMLSchema#"),ln=sn},97:function(t,e,n){"use strict";n.r(e),n.d(e,"namedNode",(function(){return u})),n.d(e,"defaultGraphInstance",(function(){return d})),n.d(e,"blankNode",(function(){return p})),n.d(e,"literal",(function(){return h})),n.d(e,"defaultGraph",(function(){return m})),n.d(e,"variable",(function(){return f})),n.d(e,"quad",(function(){return w})),n.d(e,"triple",(function(){return b}));var r={};n.r(r),n.d(r,"namedNode",(function(){return u})),n.d(r,"defaultGraphInstance",(function(){return d})),n.d(r,"blankNode",(function(){return p})),n.d(r,"literal",(function(){return h})),n.d(r,"defaultGraph",(function(){return m})),n.d(r,"variable",(function(){return f})),n.d(r,"quad",(function(){return w})),n.d(r,"triple",(function(){return b}));class o{constructor(t){this.value=t||"b"+ ++o.nextId}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}get termType(){return"BlankNode"}}o.nextId=0;class i{get value(){return""}equals(t){return!!t&&t.termType===this.termType}get termType(){return"DefaultGraph"}}class a{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}get termType(){return"NamedNode"}}class s{constructor(t,e,n){this.value=t,this.datatype=s.stringDatatype,this.language="",e?(this.language=e,this.datatype=s.langStringDatatype):n&&(this.datatype=n)}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)}get termType(){return"Literal"}}s.langStringDatatype=new a("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),s.stringDatatype=new a("http://www.w3.org/2001/XMLSchema#string");class l{constructor(t,e,n,r){this.subject=t,this.predicate=e,this.object=n,this.graph=r||new i}equals(t){return!!t&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)}}class c{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}get termType(){return"Variable"}}function u(t){return new a(t)}const d=new i;function p(t){return new o(t)}function h(t,e){return"string"==typeof e?-1===e.indexOf(":")?new s(t,e):new s(t,null,u(e)):new s(t,null,e)}function m(){return d}function f(t){return new c(t)}function w(t,e,n,r){return new l(t,e,n,r||d)}function b(t,e,n){return w(t,e,n)}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},r)}}]);
//# sourceMappingURL=97184865fa3f4743776c.js.map