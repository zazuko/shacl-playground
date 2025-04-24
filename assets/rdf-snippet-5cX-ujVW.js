import{m as y}from"./rdf-editor-BIh2fq8w.js";import"./index-BfYWPPsp.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,Z=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),tt=new WeakMap;let _t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tt.set(e,t))}return t}toString(){return this.cssText}};const vt=r=>new _t(typeof r=="string"?r:r+"",void 0,X),St=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new _t(e,r,X)},Et=(r,t)=>{if(Z)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},et=Z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return vt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:wt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:Ct,getOwnPropertySymbols:Pt,getPrototypeOf:Ot}=Object,g=globalThis,st=g.trustedTypes,Ut=st?st.emptyScript:"",z=g.reactiveElementPolyfillSupport,T=(r,t)=>r,Q={toAttribute(r,t){switch(t){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ft=(r,t)=>!bt(r,t),it={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:ft};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&wt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=xt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const l=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,i=[...Ct(e),...Pt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(et(s))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Q).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),h=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:Q;this._$Em=s,this[s]=h.fromAttribute(e,l.type)??((n=this._$Ej)==null?void 0:n.get(s))??null,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const o=this.constructor,n=this[t];if(i??(i=o.getPropertyOptions(t)),!((i.hasChanged??ft)(n,e)||i.useDefault&&i.reflect&&n===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:l}=n,h=this[o];l!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,n,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[T("elementProperties")]=new Map,P[T("finalized")]=new Map,z==null||z({ReactiveElement:P}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,D=N.trustedTypes,rt=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,mt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,yt="?"+A,Mt=`<${yt}>`,x=document,k=()=>x.createComment(""),B=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ht=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",V=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,ot=/>/g,v=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,at=/"/g,At=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),E=Tt(1),C=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),lt=new WeakMap,b=x.createTreeWalker(x,129);function gt(r,t){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const Nt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=M;for(let l=0;l<e;l++){const h=r[l];let u,p,a=-1,d=0;for(;d<h.length&&(n.lastIndex=d,p=n.exec(h),p!==null);)d=n.lastIndex,n===M?p[1]==="!--"?n=nt:p[1]!==void 0?n=ot:p[2]!==void 0?(At.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=v):p[3]!==void 0&&(n=v):n===v?p[0]===">"?(n=s??M,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,u=p[1],n=p[3]===void 0?v:p[3]==='"'?at:ht):n===at||n===ht?n=v:n===nt||n===ot?n=M:(n=v,s=void 0);const c=n===v&&r[l+1].startsWith("/>")?" ":"";o+=n===M?h+Mt:a>=0?(i.push(u),h.slice(0,a)+mt+h.slice(a)+A+c):h+A+(a===-2?l:c)}return[gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,h=this.parts,[u,p]=Nt(t,e);if(this.el=F.createElement(u,i),b.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=b.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(mt)){const d=p[n++],c=s.getAttribute(a).split(A),$=/([.?@])?(.*)/.exec(d);h.push({type:1,index:o,name:$[2],strings:c,ctor:$[1]==="."?kt:$[1]==="?"?Bt:$[1]==="@"?Ft:j}),s.removeAttribute(a)}else a.startsWith(A)&&(h.push({type:6,index:o}),s.removeAttribute(a));if(At.test(s.tagName)){const a=s.textContent.split(A),d=a.length-1;if(d>0){s.textContent=D?D.emptyScript:"";for(let c=0;c<d;c++)s.append(a[c],k()),b.nextNode(),h.push({type:2,index:++o});s.append(a[d],k())}}}else if(s.nodeType===8)if(s.data===yt)h.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf(A,a+1))!==-1;)h.push({type:7,index:o}),a+=A.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function O(r,t,e=r,i){var n,l;if(t===C)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=B(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=O(r,s._$AS(r,t.values),s,i)),t}let Rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);b.currentNode=s;let o=b.nextNode(),n=0,l=0,h=i[0];for(;h!==void 0;){if(n===h.index){let u;h.type===2?u=new U(o,o.nextSibling,this,t):h.type===1?u=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(u=new It(o,this,t)),this._$AV.push(u),h=i[++l]}n!==(h==null?void 0:h.index)&&(o=b.nextNode(),n++)}return b.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),B(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=F.createElement(gt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Rt(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new F(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=O(this,t,e,0),n=!B(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const l=t;let h,u;for(t=o[0],h=0;h<o.length-1;h++)u=O(this,l[i+h],e,h),u===C&&(u=this._$AH[h]),n||(n=!B(u)||u!==this._$AH[h]),u===_?t=_:t!==_&&(t+=(u??"")+o[h+1]),this._$AH[h]=u}n&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kt extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class Bt extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class Ft extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??_)===C)return;const i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Lt={I:U},W=N.litHtmlPolyfillSupport;W==null||W(F,U),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.0");const Dt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new U(t.insertBefore(k(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;let R=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}};var $t;R._$litElement$=!0,R.finalized=!0,($t=w.litElementHydrateSupport)==null||$t.call(w,{LitElement:R});const K=w.litElementPolyfillSupport;K==null||K({LitElement:R});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={CHILD:2},qt=r=>(...t)=>({_$litDirective$:r,values:t});class zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Vt}=Lt,ut=()=>document.createComment(""),H=(r,t,e)=>{var o;const i=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){const n=i.insertBefore(ut(),s),l=i.insertBefore(ut(),s);e=new Vt(n,l,r,r.options)}else{const n=e._$AB.nextSibling,l=e._$AM,h=l!==r;if(h){let u;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(u=r._$AU)!==l._$AU&&e._$AP(u)}if(n!==s||h){let u=e._$AA;for(;u!==n;){const p=u.nextSibling;i.insertBefore(u,s),u=p}}}return e},S=(r,t,e=r)=>(r._$AI(t,e),r),Wt={},Kt=(r,t=Wt)=>r._$AH=t,Jt=r=>r._$AH,J=r=>{var i;(i=r._$AP)==null||i.call(r,!1,!0);let t=r._$AA;const e=r._$AB.nextSibling;for(;t!==e;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=(r,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(r[s],s);return i},Qt=qt(class extends zt{constructor(r){if(super(r),r.type!==jt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],o=[];let n=0;for(const l of r)s[n]=i?i(l,n):n,o[n]=e(l,n),n++;return{values:o,keys:s}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const s=Jt(r),{values:o,keys:n}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=n,o;const l=this.ut??(this.ut=[]),h=[];let u,p,a=0,d=s.length-1,c=0,$=o.length-1;for(;a<=d&&c<=$;)if(s[a]===null)a++;else if(s[d]===null)d--;else if(l[a]===n[c])h[c]=S(s[a],o[c]),a++,c++;else if(l[d]===n[$])h[$]=S(s[d],o[$]),d--,$--;else if(l[a]===n[$])h[$]=S(s[a],o[$]),H(r,h[$+1],s[a]),a++,$--;else if(l[d]===n[c])h[c]=S(s[d],o[c]),H(r,s[a],s[d]),d--,c++;else if(u===void 0&&(u=ct(n,c,$),p=ct(l,a,d)),u.has(l[a]))if(u.has(l[d])){const f=p.get(n[c]),q=f!==void 0?s[f]:null;if(q===null){const Y=H(r,s[a]);S(Y,o[c]),h[c]=Y}else h[c]=S(q,o[c]),H(r,s[a],q),s[f]=null;c++}else J(s[d]),d--;else J(s[a]),a++;for(;c<=$;){const f=H(r,h[$+1]);S(f,o[c]),h[c++]=f}for(;a<=d;){const f=s[a++];f!==null&&J(f)}return this.ut=n,Kt(r,h),C}}),I=Symbol("quads"),dt=Symbol("previous output"),m=Symbol("Shown editor"),pt={[y.turtle]:"Turtle",[y.jsonLd]:E`JSON&#8209;LD`,[y.trig]:"TriG",[y.nquads]:E`N&#8209;Quads`,[y.ntriples]:E`N&#8209;Triples`,[y.notation3]:"Notation3",[y.rdfXml]:"RDF/XML"};class Zt extends R{static get properties(){return{formats:{type:String,reflect:!0},input:{type:String,attribute:!1},inputFormat:{type:String,attribute:"input-format"},selectedFormat:{type:String,attribute:!1},layout:{type:String,reflect:!0},prefixes:{type:String},onlyOutput:{type:Boolean,attribute:"only-output"},customPrefixes:{type:Object}}}static get styles(){return St`
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
    `}get value(){return this[m]==="input"?this.input:this._outputEditor.value}get _editor(){return this.renderRoot.querySelector("#input")}get _outputEditor(){return this.renderRoot.querySelector("#output")}get _outputFormats(){const t=this.formats.split(",").map(e=>e.trim());if(!this.onlyOutput){const e=this.formats.indexOf(this.inputFormat);e>=0&&t.splice(e,1)}return t}constructor(){super(),this.formats=Object.values(y).join(","),this.prefixes="",this[I]=[],this[m]="input",this.inputFormat="text/turtle",this.customPrefixes={}}connectedCallback(){super.connectedCallback();const t=this.querySelector("script");t&&(this.inputFormat=t.getAttribute("type")||"text/turtle",this.input=t.textContent.trim()),[this.selectedFormat]=this._outputFormats}render(){return E`<div id="wrapper">
      <ol>
        ${this._renderButtons()}
      </ol>
      <rdf-editor
        id="input"
        readonly
        .value="${this.input}"
        .format="${this.inputFormat}"
        ?visible="${this[m]==="input"&&!this.onlyOutput}"
        @quads-changed="${this.__inputParsed}"
      ></rdf-editor>
      <rdf-editor
        id="output"
        readonly
        .customPrefixes="${this.customPrefixes}"
        .prefixes="${this.prefixes}"
        .quads="${this[I]}"
        .format="${this.selectedFormat}"
        ?visible="${this[m]==="output"}"
        @serialized="${this.__dispatchChangeEvent}"
      ></rdf-editor>
    </div>`}async updated(t){super.updated(t),t.has("onlyOutput")&&this.onlyOutput&&this[m]==="input"&&this._showOutput(this._outputFormats[0])()}_renderButtons(){const t=()=>{const e=`format input ${this[m]==="input"?"selected":""}`;return E`<li
        input
        part="${e}"
        @click="${this._showInput}"
        @keydown="${this._onKey(this._showInput)}"
      >
        ${pt[this.inputFormat]||this.inputFormat}
      </li>`};return E` ${this.onlyOutput?"":t()}
    ${Qt(this._outputFormats,this.__renderOutputButton.bind(this))}`}_onKey(t){const e=t.bind(this);return i=>{i.key==="Enter"&&e(this)}}async _showInput(){this[m]="input",this.__dispatchChangeEvent(),this[dt]=this.selectedFormat,await this.requestUpdate(),await this._editor.ready,this._editor.codeMirror.editor.refresh()}_showOutput(t){return async()=>{this.selectedFormat=t,this[m]="output",t===this[dt]&&this.__dispatchChangeEvent(),this.requestUpdate()}}__inputParsed(t){this[I]=t.detail.value,this.requestUpdate(),this.dispatchEvent(new CustomEvent("quads-changed",{detail:{value:this[I]}}))}__renderOutputButton(t){const e=`format output ${this[m]==="output"&&this.selectedFormat===t?"selected":""}`;return E`<li
      output
      part="${e}"
      @click="${this._showOutput(t)}"
      @keydown="${this._onKey(this._showOutput(t))}"
    >
      ${pt[t]||t}
    </li>`}__dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value}}))}}window.customElements.define("rdf-snippet",Zt);
