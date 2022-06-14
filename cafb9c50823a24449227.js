/*! For license information please see cafb9c50823a24449227.js.LICENSE.txt */
!function(t){function e(e){for(var r,i,s=e[0],o=e[1],a=0,c=[];a<s.length;a++)i=s[a],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&c.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);for(l&&l(e);c.length;)c.shift()()}var r={},n={7:0};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,i){r=n[t]=[e,i]}));e.push(r[2]=s);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(t){return i.p+""+{0:"97184865fa3f4743776c",1:"0a9d07daac19885d069d",2:"7736619552076308ceb6",3:"5a9f8ff2df716332c689",4:"a856ce7d1ad1621818e7",5:"01780d46125c92190c70",6:"da0e6b0570756e60593d",8:"4ce0821cd88460f1747e",9:"38055b81a09659fcc6c2",10:"2926fb151a8b337041a5",11:"319ea9d4cf9eff3ad7f3",12:"86d7ca258aa8b41bfc87",13:"d99f1d827ba33e57a329",14:"98636055b7a3d79a4e01",15:"77dd54ee9eb7231f09c8",16:"10d9fa57965604c47f84",17:"651e51406f3e7fc94729",18:"05c18939c66b20e804cf",19:"489a81851842a561c35d",20:"c39355baf9c7717e40f6",21:"843100e2cd8e5e7905b7",22:"30b9d0a206e32d25eda2",23:"3b6bf2c52639cd28a00a",24:"68aa03db291a0933b4f6",25:"719b35c98073e6b13b70",26:"7f112c981d8520f95e08",27:"b1098bb07361dc422f0f",28:"299f6529664028f5dbbd",29:"76d066b291755d4af4e7",30:"b8bff08fea14f9da646d",31:"53b741a9f32bca3584d9"}[t]+".js"}(t);var l=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(c);var r=n[t];if(0!==r){if(r){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,r[1](l)}n[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=o;i(i.s=77)}([function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,r){"use strict";r.d(e,"r",(function(){return i})),r.d(e,"n",(function(){return s})),r.d(e,"k",(function(){return o})),r.d(e,"l",(function(){return a})),r.d(e,"i",(function(){return l})),r.d(e,"m",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return h})),r.d(e,"g",(function(){return u})),r.d(e,"p",(function(){return p})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return m})),r.d(e,"b",(function(){return _})),r.d(e,"j",(function(){return b})),r.d(e,"c",(function(){return y})),r.d(e,"o",(function(){return g})),r.d(e,"d",(function(){return v})),r.d(e,"q",(function(){return w}));r(4);var n=r(11);const i=!window.ShadyDOM||!window.ShadyDOM.inUse,s=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,i&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let o=window.Polymer&&window.Polymer.rootPath||Object(n.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let l=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let c=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let d=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let h=window.Polymer&&window.Polymer.legacyOptimizations||!1;let u=window.Polymer&&window.Polymer.legacyWarnings||!1;let p=window.Polymer&&window.Polymer.syncInitialRender||!1;let f=window.Polymer&&window.Polymer.legacyUndefined||!1;let m=window.Polymer&&window.Polymer.orderedComputed||!1;let _=!0;let b=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let y=window.Polymer&&window.Polymer.fastDomIf||!1;let g=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let v=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let w=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"g",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"i",(function(){return a})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"a",(function(){return h})),r.d(e,"h",(function(){return u}));r(4);function n(t){return t.indexOf(".")>=0}function i(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function s(t,e){return 0===t.indexOf(e+".")}function o(t,e){return 0===e.indexOf(t+".")}function a(t,e,r){return e+r.slice(t.length)}function l(t,e){return t===e||s(t,e)||o(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let n=t[r].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function h(t,e,r){let n=t,i=d(e);for(let t=0;t<i.length;t++){if(!n)return;n=n[i[t]]}return r&&(r.path=i.join(".")),n}function u(t,e,r){let n=t,i=d(e),s=i[i.length-1];if(i.length>1){for(let t=0;t<i.length-1;t++){if(n=n[i[t]],!n)return}n[s]=r}else n[e]=r;return i.join(".")}},function(t,e,r){"use strict";r.d(e,"b",(function(){return a}));r(26);var n=r(10),i=r(28);r.d(e,"a",(function(){return n.c}));let s=0;const o={},a=(t,e,r)=>{const a=r&&r.moduleId||"custom-style-module-"+s++;Array.isArray(e)||(e=e?[e]:[]);const l=e.map(t=>{if(!(t instanceof n.a))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!o[t]){const e=document.createElement("template");e.innerHTML=`<style>${t.toString()}</style>`,o[t]=Object(i.c)(e)[0]}return o[t].textContent}),c=document.createElement("dom-module");if(t){const e=customElements.get(t);e&&Object.prototype.hasOwnProperty.call(e,"__finalized")&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),c.setAttribute("theme-for",t)}const d=r&&r.include||[];c.innerHTML=`\n    <template>\n      ${d.map(t=>`<style include=${t}></style>`)}\n      ${l.length?`<style>${l.join("\n")}</style>`:""}\n    </template>\n  `,c.register(a)}},function(t,e,r){"use strict";window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(4);let n=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const s=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=n++;function i(n){let i=n.__mixinSet;if(i&&i[r])return n;let s=e,o=s.get(n);if(!o){o=t(n),s.set(n,o);let e=Object.create(o.__mixinSet||i||null);e[r]=!0,o.__mixinSet=e}return o}return i}},function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return u}));r(4);let n=0,i=0,s=[],o=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=s.length;for(let e=0;e<t;e++){let t=s[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}s.splice(0,t),i+=t})).observe(l,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},d={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},h={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},u={run:t=>(a||(a=!0,l.textContent=o++),s.push(t),n++),cancel(t){const e=t-i;if(e>=0){if(!s[e])throw new Error("invalid async handle: "+t);s[e]=null}}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(17),i=r(30);r.d(e,"b",(function(){return i.a}));const s=Object(n.a)(HTMLElement)},function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return l}));const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let i,s;function o(t){i=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(s=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?i=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const l=i},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o}));r(4),r(5),r(6);class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,r){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,r),t}}let i=new Set;const s=function(t){i.add(t)},o=function(){const t=Boolean(i.size);return i.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return g.b})),r.d(e,"e",(function(){return g.d})),r.d(e,"b",(function(){return v}));const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return n&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const a=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new o(r,i)},l=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t;var c;const d=window.trustedTypes,h=d?d.emptyScript:"",u=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},f=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=m){var n,i;const s=this.constructor._$Eh(t,r);if(void 0!==s&&!0===r.reflect){const o=(null!==(i=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:p.toAttribute)(e,r.type);this._$Ei=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(t,e){var r,n,i;const s=this.constructor,o=s._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=s.getPropertyOptions(o),a=t.converter,l=null!==(i=null!==(n=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==i?i:p.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach((t,e)=>this._$ES(e,this[e],t)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.0.2");var b,y,g=r(32);class v extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Object(g.d)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return g.c}}v.finalized=!0,v._$litElement$=!0,null===(b=globalThis.litElementHydrateSupport)||void 0===b||b.call(globalThis,{LitElement:v});const w=globalThis.litElementPolyfillSupport;null==w||w({LitElement:v});(null!==(y=globalThis.litElementVersions)&&void 0!==y?y:globalThis.litElementVersions=[]).push("3.0.2")},function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return c}));r(4);let n,i,s=/(url\()([^)]*)(\))/g,o=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&o.test(t))return t;if("//"===t)return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),n)try{return new URL(t,e).href}catch(e){return t}return i||(i=document.implementation.createHTMLDocument("temp"),i.base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=e,i.anchor.href=t,i.anchor.href||t}function l(t,e){return t.replace(s,(function(t,r,n,i){return r+"'"+a(n.replace(/["']/g,""),e)+"'"+i}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return u}));r(4);var n=r(0),i=(r(1),r(13));r(20),r(9);const s=Element.prototype,o=s.matches||s.matchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector,a=function(t,e){return o.call(t,e)};class l{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new i.a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(n.a)(this.node).contains(t))return!0;let e=t,r=t.ownerDocument;for(;e&&e!==r&&e!==this.node;)e=Object(n.a)(e).parentNode||Object(n.a)(e).host;return e===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(n.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(n.a)(e).assignedSlot;return t}importNode(t,e){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(r).importNode(t,e)}getEffectiveChildNodes(){return i.a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),r=[];for(let n,i=0,s=e.length;i<s&&(n=e[i]);i++)n.nodeType===Node.ELEMENT_NODE&&a(n,t)&&r.push(n);return r}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function c(t,e){for(let r=0;r<e.length;r++){let n=e[r];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class d{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;let h=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=l.prototype[e])}),c(t.prototype,["classList"]),h=t,Object.defineProperties(d.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&u(t).getOwnerRoot(),r=this.path;for(let t=0;t<r.length;t++){const n=r[t];if(u(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let r=0;r<e.length;r++){let n=e[r];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let r=0;r<e.length;r++){let n=e[r];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(l.prototype,["textContent","innerHTML","className"]);const u=function(t){if((t=t||document)instanceof h)return t;if(t instanceof d)return t;let e=t.__domApi;return e||(e=t instanceof Event?new d(t):new h(t),t.__domApi=e),e}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(4);var n=r(47),i=r(6),s=r(0);function o(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(s.a)(t);return o(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>o(t)?(t=t,Object(s.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):Object(s.a)(this._target).children&&(this._listenSlots(Object(s.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):Object(s.a)(this._target).children&&(this._unlistenSlots(Object(s.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.c.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=Object(n.a)(e,this._effectiveNodes);for(let e,n=0;n<r.length&&(e=r[n]);n++)for(let r,n=0;n<e.removed.length&&(r=e.removed[n]);n++)t.removedNodes.push(r);for(let n,i=0;i<r.length&&(n=r[i]);i++)for(let r=n.index;r<n.index+n.addedCount;r++)t.addedNodes.push(e[r]);this._effectiveNodes=e;let i=!1;return(t.addedNodes.length||t.removedNodes.length)&&(i=!0,this.callback.call(this._target,t)),i}_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];o(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];o(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return s}));const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,s=/@media\s(.*)/},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(26),i=r(56);const s=t=>class extends(Object(i.a)(t)){static finalize(){super.finalize();const t=this.prototype._template,e=Object.getPrototypeOf(this.prototype)._template;e&&Array.from(e.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=n.a.prototype.modules;let r=!1;const i=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{const r=0===t.indexOf("vaadin-"),n=0===e.indexOf("vaadin-"),i=["lumo-","material-"],s=i.filter(e=>0===t.indexOf(e)).length>0,o=i.filter(t=>0===e.indexOf(t)).length>0;return r!==n?r?-1:1:s!==o?s?-1:1:0}).forEach(n=>{if(n!==i){const i=e[n].getAttribute("theme-for");i&&i.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(r=!0,this._includeStyle(n,t))})}}),!r&&e[i]&&this._includeStyle(i,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const r=document.createElement("style");r.setAttribute("include",t),e.content.appendChild(r)}}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r(6),i=r(9);const s=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,o=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function a(t,e){if("function"!=typeof t)return;const r=s.exec(t.toString());if(r)try{t=new Function(r[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const l=function(t,e){if(window.Vaadin.developmentMode)return a(t,e)};function c(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(o?!function(){if(o){if(Object.keys(o).map(t=>o[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!a((function(){return!0})))}catch(t){return!1}}());var d=r(55);let h;window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){l(c)};const u=new Set,p=t=>class extends(Object(d.a)(t)){static finalize(){super.finalize();const{is:t}=this;t&&!u.has(t)&&(window.Vaadin.registrations.push(this),u.add(t),window.Vaadin.developmentModeCallback&&(h=i.a.debounce(h,n.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(i.b)(h)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return f}));r(4);var n=r(1),i=r(5),s=r(28),o=r(11),a=r(26),l=r(29),c=r(40),d=r(46);const h=Object(i.a)(t=>{const e=Object(d.a)(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=function(t){const e={};for(let r in t){const n=t[r];e[r]="function"==typeof n?{type:n}:n}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){Object(c.b)(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){Object(c.a)(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});var u=r(0);const p=window.ShadyCSS&&window.ShadyCSS.cssBuild,f=Object(i.a)(t=>{const e=h(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):n.e||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let s in t)e=this.prototype,r=s,n=t[s],i=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):e._createComputedProperty(r,n.computed,i)),n.readOnly&&!e._hasReadOnlyEffect(r)?e._createReadOnlyProperty(r,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(r)?e._createReflectedProperty(r):!1===n.reflectToAttribute&&e._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),n.notify&&!e._hasNotifyEffect(r)?e._createNotifyingProperty(r):!1===n.notify&&e._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),n.observer&&e._createPropertyObserver(r,n.observer,i[n.observer]),e._addPropertyToAttributeMap(r);var e,r,n,i}static createObservers(t,e){const r=this.prototype;for(let n=0;n<t.length;n++)r._createMethodObserver(t[n],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!n.m||n.a)&&(e=a.a.import(t,"template"),n.m&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(o.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.k,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let n=e[r];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Object(o.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const r=this.importPath;!function(t,e,r,i){if(!p){const n=e.content.querySelectorAll("style"),o=Object(s.c)(e),a=Object(s.b)(r),l=e.content.firstElementChild;for(let r=0;r<a.length;r++){let n=a[r];n.textContent=t._processStyleText(n.textContent,i),e.content.insertBefore(n,l)}let c=0;for(let e=0;e<o.length;e++){let r=o[e],s=n[c];s!==r?(r=r.cloneNode(!0),s.parentNode.insertBefore(r,s)):c++,r.textContent=t._processStyleText(r.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),n.q&&p&&n.n){const r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,r?Object(o.c)(r):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(u.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),n.p&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(o.c)(this.importPath)),Object(o.c)(t,e)}static _parseTemplateContent(t,r,n){return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,n)}static _addTemplatePropertyEffect(t,r,i){return!n.g||r in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,i)}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));const n="action",i="state"},function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return a}));r(4);const n={},i=/-[a-z]/g,s=/([A-Z])/g;function o(t){return n[t]||(n[t]=t.indexOf("-")<0?t:t.replace(i,t=>t[1].toUpperCase()))}function a(t){return n[t]||(n[t]=t.replace(s,"-$1").toLowerCase())}},function(t,e,r){"use strict";r.d(e,"b",(function(){return i}));r(4);var n=r(9);r.d(e,"a",(function(){return n.b}));const i=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(n.c)()}while(t||e)}},function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return v})),r.d(e,"a",(function(){return w}));r(4);var n=r(29),i=r(22),s=r(1),o=r(0);let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(n.a)(l),d=Object(i.a)(c);const h=Object(n.a)(class{});function u(t,e){for(let r=0;r<e.length;r++){let n=e[r];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(o.a)(Object(o.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Object(o.a)(Object(o.a)(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class p extends h{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,r(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,r)}}_showHideChildren(t){u(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const f=Object(i.a)(p);function m(t){let e=t.__dataHost;return e&&e._methodHost||e}function _(t,e,r){let n=r.mutableData?f:p;v.mixin&&(n=v.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=r,i.prototype._bindTemplate(t),function(t,e,r,n){let i=r.hostProps||{};for(let e in n.instanceProps){delete i[e];let r=n.notifyInstanceProp;r&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:g(e,r)})}if(n.forwardHostProp&&e.__dataHost)for(let e in i)r.hasHostProps||(r.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}})}(i,t,e,r),i}function b(t,e,r,n){let i=r.forwardHostProp;if(i&&e.hasHostProps){const h="template"==t.localName;let u=e.templatizeTemplateClass;if(!u){if(h){let t=r.mutableData?d:c;class n extends t{}u=e.templatizeTemplateClass=n}else{const r=t.constructor;class n extends r{}u=e.templatizeTemplateClass=n}let o=e.hostProps;for(let t in o)u.prototype._addPropertyEffect("_host_"+t,u.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:y(t,i)}),u.prototype._createNotifyingProperty("_host_"+t);s.g&&n&&function(t,e,r){const n=r.constructor._properties,{propertyEffects:i}=t,{instanceProps:s}=e;for(let t in i)if(!(n[t]||s&&s[t])){const e=i[t];for(let r=0;r<e.length;r++){const{part:n}=e[r].info;if(!n.signature||!n.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,r,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),h)l=u,a=o=t,Object.setPrototypeOf(o,l.prototype),new l,a=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,u.prototype);const r=e.hostProps;for(let e in r)if(e="_host_"+e,e in t){const r=t[e];delete t[e],t.__data[e]=r}}}var o,l}function y(t,e){return function(t,r,n){e.call(t.__templatizeOwner,r.substring("_host_".length),n[r])}}function g(t,e){return function(t,r,n){e.call(t.__templatizeOwner,t,r,n[r])}}function v(t,e,r){if(s.m&&!m(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:p)._parseTemplate(t),i=n.templatizeInstanceClass;i||(i=_(t,n,r),n.templatizeInstanceClass=i);const o=m(t);b(t,n,r,o);let a=class extends i{};return a.prototype._methodHost=o,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=n.hostProps,a=a,a}function w(t,e){let r;for(;e;)if(r=e.__dataHost?e:e.__templatizeInstance){if(r.__dataHost==t)return r;e=r.__dataHost}else e=Object(o.a)(e).parentNode;return null}},function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return o}));var n=r(5);function i(t,e,r,n,i){let s;i&&(s="object"==typeof r&&null!==r,s&&(n=t.__dataTemp[e]));let o=n!==r&&(n==n||r==r);return s&&o&&(t.__dataTemp[e]=r),o}const s=Object(n.a)(t=>class extends t{_shouldPropertyChange(t,e,r){return i(this,t,e,r,!0)}}),o=Object(n.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,r){return i(this,t,e,r,this.mutableData)}});s._mutablePropertyChange=i},function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return o}));var n=r(14);function i(t,e){for(let r in e)null===r?t.style.removeProperty(r):t.style.setProperty(r,e[r])}function s(t,e){const r=window.getComputedStyle(t).getPropertyValue(e);return r?r.trim():""}function o(t){const e=n.b.test(t)||n.c.test(t);return n.b.lastIndex=0,n.c.lastIndex=0,e}},function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return p}));var n=r(41),i=r(1);const s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},o);function l(t,e){return u({},Object(n.a)(e),t)}function c(t,e,r,n){!function(t,e,r){const n=t._noAccessors,i=Object.getOwnPropertyNames(t);for(let s=0;s<i.length;s++){let o=i[s];if(!(o in r))if(n)e[o]=t[o];else{let r=Object.getOwnPropertyDescriptor(t,o);r&&(r.configurable=!0,Object.defineProperty(e,o,r))}}}(e,t,n);for(let t in s)e[t]&&(r[t]=r[t]||[],r[t].push(e[t]))}function d(t,e){for(const r in e){const n=t[r],i=e[r];t[r]=!("value"in i)&&n&&"value"in n?Object.assign({value:n.value},i):i}}const h=Object(n.a)(HTMLElement);function u(t,e,r){let n;const s={};class l extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)d(e,n[t].properties);return d(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,r=0;r<n.length;r++)t=n[r],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=s.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=l.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),i.e&&h(t);const e=Object.getPrototypeOf(this);let r=s.beforeRegister;if(r)for(let t=0;t<r.length;t++)r[t].call(e);if(r=s.registered,r)for(let t=0;t<r.length;t++)r[t].call(e)}}_applyListeners(){super._applyListeners();const t=s.listeners;if(t)for(let e=0;e<t.length;e++){const r=t[e];if(r)for(let t in r)this._addMethodEventListenerToNode(this,t,r[t])}}_ensureAttributes(){const t=s.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const r=t[e];for(let t in r)this._ensureAttribute(t,r[t])}super._ensureAttributes()}ready(){super.ready();let t=s.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=s.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=s.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,r){super.attributeChanged();let n=s.attributeChanged;if(n)for(let i=0;i<n.length;i++)n[i].call(this,t,e,r)}}if(r){Array.isArray(r)||(r=[r]);let t=e.prototype.behaviors;n=function t(e,r,n){r=r||[];for(let i=e.length-1;i>=0;i--){let s=e[i];s?Array.isArray(s)?t(s,r):r.indexOf(s)<0&&(!n||n.indexOf(s)<0)&&r.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return r}(r,null,t),l.prototype.behaviors=t?t.concat(r):n}const h=e=>{n&&function(t,e,r){for(let n=0;n<e.length;n++)c(t,e[n],r,a)}(e,n,s),c(e,t,s,o)};return i.e||h(l.prototype),l.generatedFrom=t,l}const p=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let r=e?e(h):h;return r=u(t,r,t.behaviors),r.is=r.prototype.is=t.is,r}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(37);var n=r(12),i=r(1),s=new Set;const o={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(s.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():i.r||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(n.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(s.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?s.delete(this):s.add(this)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(4);var n=r(11),i=r(1);let s={},o={};function a(t,e){s[t]=o[t.toLowerCase()]=e}function l(t){return s[t]||o[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=l(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,n){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(n.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(n.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(i.m&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=s,customElements.define("dom-module",c)},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));class n{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,r){const{scrollLeft:n}=r;if("rtl"!==e||!t)return n;switch(t){case"negative":return r.scrollWidth-r.clientWidth+n;case"reverse":return r.scrollWidth-r.clientWidth-n}return n}static setNormalizedScrollLeft(t,e,r,n){if("rtl"===e&&t)switch(t){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+n;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-n;break;default:r.scrollLeft=n}else r.scrollLeft=n}}},function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return u}));var n=r(26),i=r(11);function s(t){return n.a.import(t)}function o(t){let e=t.body?t.body:t;const r=Object(i.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=r,n}function a(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...l(e[t]));return r}function l(t){const e=s(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...h(e));const r=e.querySelector("template");r&&t.push(...c(r,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const r=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let s=n[t],o=s.getAttribute("include");o&&r.push(...a(o).filter((function(t,e,r){return r.indexOf(t)===e}))),e&&(s.textContent=Object(i.b)(s.textContent,e)),r.push(s)}t._styles=r}return t._styles}function d(t){let e=s(t);return e?h(e):[]}function h(t){const e=[],r=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<r.length;t++){let n=r[t];if(n.import){const t=n.import,r=n.hasAttribute("shady-unscoped");if(r&&!t._unscopedStyle){const e=o(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=o(t));e.push(r?t._unscopedStyle:t._style)}}return e}function u(t){let e=t.trim().split(/\s+/),r="";for(let t=0;t<e.length;t++)r+=p(e[t]);return r}function p(t){let e=s(t);if(e&&void 0===e._cssText){let t=f(e),r=e.querySelector("template");r&&(t+=function(t,e){let r="";const n=c(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),r+=e.textContent}return r}(r,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function f(t){let e="",r=h(t);for(let t=0;t<r.length;t++)e+=r[t].textContent;return e}},function(t,e,r){"use strict";r.d(e,"a",(function(){return Z}));r(4);var n=r(0),i=r(5),s=r(2),o=r(19),a=r(45);const l={"dom-if":!0,"dom-repeat":!0};let c=!1,d=!1;function h(t){(function(){if(!c){c=!0;const t=document.createElement("textarea");t.placeholder="a",d=t.placeholder===t.textContent}return d})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function u(t){let e=t.getAttribute("is");if(e&&l[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;)t.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return t}function p(t,e){let r=e.parentInfo&&p(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function f(t,e,r,n){n.id&&(e[n.id]=r)}function m(t,e,r){if(r.events&&r.events.length)for(let n,i=0,s=r.events;i<s.length&&(n=s[i]);i++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function _(t,e,r,n){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=n)}const b=Object(i.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(e),r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let n=!1,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(i,e,r)||n,h(i),i.firstChild&&this._parseTemplateChildNodes(i,e,r),i.hasAttributes&&i.hasAttributes()&&(n=this._parseTemplateNodeAttributes(i,e,r)||n),n||r.noted}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let n,i=t.firstChild,s=0;i;i=n){if("template"==i.localName&&(i=u(i)),n=i.nextSibling,i.nodeType===Node.TEXT_NODE){let r=n;for(;r&&r.nodeType===Node.TEXT_NODE;)i.textContent+=r.textContent,n=r.nextSibling,t.removeChild(r),r=n;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let o={parentIndex:s,parentInfo:r};this._parseTemplateNode(i,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),i.parentNode&&s++}}static _parseTemplateNestedTemplate(t,e,r){let n=t,i=this._parseTemplate(n,e);return(i.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=i,!0}static _parseTemplateNodeAttributes(t,e,r){let n=!1,i=Array.from(t.attributes);for(let s,o=i.length-1;s=i[o];o--)n=this._parseTemplateNodeAttribute(t,e,r,s.name,s.value)||n;return n}static _parseTemplateNodeAttribute(t,e,r,n,i){return"on-"===n.slice(0,3)?(t.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:i}),!0):"id"===n&&(r.id=i,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,n=e.content||t.content,i=document.importNode(n,!0);i.__noInsertionPoint=!e.hasInsertionPoint;let s=i.nodeList=new Array(r.length);i.$={};for(let t,n=0,o=r.length;n<o&&(t=r[n]);n++){let r=s[n]=p(i,t);f(0,i.$,r,t),_(0,r,t,e),m(this,r,t)}return i=i,i}_addMethodEventListenerToNode(t,e,r,n){let i=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):console.warn("listener method `"+r+"` not defined")}}(n=n||t,0,r);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}});var y=r(1);let g=0;const v=[],w={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},O=/[A-Z]/;function S(t,e,r){let n=t[e];if(n){if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),r))for(let t in n){let e=n[t],r=n[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else n=t[e]={};return n}function P(t,e,r,n,i,o){if(e){let a=!1;const l=g++;for(let c in r){let d=e[i?Object(s.g)(c):c];if(d)for(let e,s=0,h=d.length;s<h&&(e=d[s]);s++)e.info&&e.info.lastRun===l||i&&!A(c,e.trigger)||(e.info&&(e.info.lastRun=l),e.fn(t,c,r,n,e.info,i,o),a=!0)}return a}return!1}function C(t,e,r,n,i,o,a,l){let c=!1,d=e[a?Object(s.g)(n):n];if(d)for(let e,s=0,h=d.length;s<h&&(e=d[s]);s++)e.info&&e.info.lastRun===r||a&&!A(n,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,n,i,o,e.info,a,l),c=!0);return c}function A(t,e){if(e){let r=e.name;return r==t||!(!e.structured||!Object(s.b)(r,t))||!(!e.wildcard||!Object(s.c)(r,t))}return!0}function x(t,e,r,n,i){let s="string"==typeof i.method?t[i.method]:i.method,o=i.property;s?s.call(t,t.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function E(t,e,r){let n=Object(s.g)(e);if(n!==e){return T(t,Object(o.a)(n)+"-changed",r[e],e),!0}return!1}function T(t,e,r,i){let s={value:r,queueProperty:!0};i&&(s.path=i),Object(n.a)(t).dispatchEvent(new CustomEvent(e,{detail:s}))}function j(t,e,r,n,i,o){let a=(o?Object(s.g)(e):e)!=e?e:null,l=a?Object(s.a)(t,a):t.__data[e];a&&void 0===l&&(l=r[e]),T(t,i.eventName,l,a)}function k(t,e,r,n,i){let s=t.__data[e];y.l&&(s=Object(y.l)(s,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,s)}function N(t,e,r,n){let i=t[w.COMPUTE];if(i)if(y.h){g++;const s=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[w.COMPUTE];let n,{counts:i,ready:s,total:o}=function(t){const e=t.__computeInfo,r={},n=t[w.COMPUTE],i=[];let s=0;for(let t in e){const n=e[t];s+=r[t]=n.args.filter(t=>!t.literal).length+(n.dynamicFn?1:0)}for(let t in n)e[t]||i.push(t);return{counts:r,ready:i,total:s}}(t);for(;n=s.shift();){e.set(n,e.size);const t=r[n];t&&t.forEach(t=>{const e=t.info.methodInfo;--o,0==--i[e]&&s.push(e)})}if(0!==o){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),o=[];for(let t in e)z(t,i,o,s,n);let a;for(;a=o.shift();)L(t,"",e,r,a)&&z(a.methodInfo,i,o,s,n);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let s=e;for(;P(t,i,s,r,n);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}const I=(t,e,r)=>{let n=0,i=e.length-1,s=-1;for(;n<=i;){const o=n+i>>1,a=r.get(e[o].methodInfo)-r.get(t.methodInfo);if(a<0)n=o+1;else{if(!(a>0)){s=o;break}i=o-1}}s<0&&(s=i+1),e.splice(s,0,t)},z=(t,e,r,n,i)=>{const o=e[i?Object(s.g)(t):t];if(o)for(let e=0;e<o.length;e++){const s=o[e];s.info.lastRun===g||i&&!A(t,s.trigger)||(s.info.lastRun=g,I(s.info,r,n))}};function L(t,e,r,n,i){let s=B(t,e,r,n,i);if(s===v)return!1;let o=i.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,s,!0):(t[o]=s,!1)}function D(t,e,r,n,i,s,a){r.bindings=r.bindings||[];let l={kind:n,target:i,parts:s,literal:a,isCompound:1!==s.length};if(r.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(o.a)(i)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let r=0;r<l.parts.length;r++){let n=l.parts[r];n.compoundIndex=r,R(t,e,l,n,c)}}function R(t,e,r,n,i){if(!n.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,o={index:i,binding:r,part:n,evaluator:t};for(let r=0;r<s.length;r++){let n=s[r];"string"==typeof n&&(n=Y(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:M,info:o,trigger:n})}}}function M(t,e,r,n,i,o,a){let l=a[i.index],c=i.binding,d=i.part;if(o&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let n=r[e];e=Object(s.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(l)}else{let s=i.evaluator._evaluateBinding(t,d,e,r,n,o);s!==v&&function(t,e,r,n,i){i=function(t,e,r,n){if(r.isCompound){let i=t.__dataCompoundStorage[r.target];i[n.compoundIndex]=e,e=i.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,i,r,n),y.l&&(i=Object(y.l)(i,r.target,r.kind,e));if("attribute"==r.kind)t._valueToNodeAttribute(e,i,r.target);else{let n=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[w.READ_ONLY]&&e[w.READ_ONLY][n]||e._setPendingProperty(n,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,i)}}(t,l,c,d,s)}}function $(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,s=new Array(i.length);for(let t=0;t<i.length;t++)s[t]=i[t].literal;let o=e.target;r[o]=s,e.literal&&"property"==e.kind&&("className"===o&&(t=Object(n.a)(t)),t[o]=e.literal)}}function F(t,e,r){if(r.listenerEvent){let n=r.parts[0];t.addEventListener(r.listenerEvent,(function(t){!function(t,e,r,n,i){let o,a=t.detail,l=a&&a.path;l?(n=Object(s.i)(r,n,l),o=a&&a.value):o=t.currentTarget[r],o=i?!o:o,e[w.READ_ONLY]&&e[w.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,o,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,r.target,n.source,n.negate)}))}}function H(t,e,r,n,i,s){s=e.static||s&&("object"!=typeof s||s[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:s};for(let i,s=0;s<e.args.length&&(i=e.args[s]);s++)i.literal||t._addPropertyEffect(i.rootProperty,r,{fn:n,info:o,trigger:i});return s&&t._addPropertyEffect(e.methodName,r,{fn:n,info:o}),o}function B(t,e,r,n,i){let s=t._methodHost||t,o=s[i.methodName];if(o){let n=t._marshalArgs(i.args,e,r);return n===v?v:o.apply(s,n)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const q=[],U=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function G(t){let e="";for(let r=0;r<t.length;r++){e+=t[r].literal||""}return e}function V(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:q};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let r=Y(t);return r.literal||(e.static=!1),r}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function Y(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=Object(s.g)(e),r.structured=Object(s.d)(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function J(t,e,r){let n=Object(s.a)(t,r);return void 0===n&&(n=e[r]),n}function W(t,e,r,n){const i={indexSplices:n};y.f&&!t._overrideLegacyUndefined&&(e.splices=i),t.notifyPath(r+".splices",i),t.notifyPath(r+".length",e.length),y.f&&!t._overrideLegacyUndefined&&(i.indexSplices=[])}function X(t,e,r,n,i,s){W(t,e,r,[{index:n,addedCount:i,removed:s,object:e,type:"splice"}])}const Z=Object(i.a)(t=>{const e=b(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return w}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(K.length){let t=K[K.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[w.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==w.READ_ONLY);let n=S(this,e,!0)[t];n||(n=this[e][t]=[]),n.push(r)}_removePropertyEffect(t,e,r){let n=S(this,e,!0)[t],i=n.indexOf(r);i>=0&&n.splice(i,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,w.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,w.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,w.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,w.COMPUTE)}_setPendingPropertyOrPath(t,e,r,n){if(n||Object(s.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let r=Object(s.a)(this,t);if(!(t=Object(s.h)(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let n=t.__dataLinkedPaths;if(n){let i;for(let o in n){let a=n[o];Object(s.c)(o,e)?(i=Object(s.i)(o,a,e),t._setPendingPropertyOrPath(i,r,!0,!0)):Object(s.c)(a,e)&&(i=Object(s.i)(a,o,e),t._setPendingPropertyOrPath(i,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||("className"===e&&(t=Object(n.a)(t)),t[e]=r)}_setPendingProperty(t,e,r){let n=this.__dataHasPaths&&Object(s.d)(t),i=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,i[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[w.NOTIFY]&&this[w.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[w.READ_ONLY]&&this[w.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let n,i=this.__dataHasPaths;this.__dataHasPaths=!1,N(this,e,r,i),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,r,i),this._flushClients(),P(this,this[w.REFLECT],e,r,i),P(this,this[w.OBSERVE],e,r,i),n&&function(t,e,r,n,i){let s,o,a=t[w.NOTIFY],l=g++;for(let o in e)e[o]&&(a&&C(t,a,l,o,r,n,i)||i&&E(t,o,r))&&(s=!0);s&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,n,e,r,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[w.PROPAGATE]&&P(this,this[w.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,n){const i=(e,n)=>{P(this,t.propertyEffects,e,r,n,t.nodeList);for(let i=t.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,e,r,n)};t.runEffects?t.runEffects(i,e,n):i(e,n)}linkPaths(t,e){t=Object(s.f)(t),e=Object(s.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(s.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};W(this,Object(s.a)(this,t,r),r.path,e)}get(t,e){return Object(s.a)(e||this,t)}set(t,e,r){r?Object(s.h)(r,t,e):this[w.READ_ONLY]&&this[w.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let r={path:""},n=Object(s.a)(this,t,r),i=n.length,o=n.push(...e);return e.length&&X(this,n,r.path,i,e.length,[]),o}pop(t){let e={path:""},r=Object(s.a)(this,t,e),n=Boolean(r.length),i=r.pop();return n&&X(this,r,e.path,r.length,0,[i]),i}splice(t,e,r,...n){let i,o={path:""},a=Object(s.a)(this,t,o);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),i=2===arguments.length?a.splice(e):a.splice(e,r,...n),(n.length||i.length)&&X(this,a,o.path,e,n.length,i),i}shift(t){let e={path:""},r=Object(s.a)(this,t,e),n=Boolean(r.length),i=r.shift();return n&&X(this,r,e.path,0,0,[i]),i}unshift(t,...e){let r={path:""},n=Object(s.a)(this,t,r),i=n.unshift(...e);return e.length&&X(this,n,r.path,0,e.length,[]),i}notifyPath(t,e){let r;if(1==arguments.length){let n={path:""};e=Object(s.a)(this,t,n),r=n.path}else r=Array.isArray(t)?Object(s.f)(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,w.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let n={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,w.OBSERVE,{fn:x,info:n,trigger:{name:t}}),r&&this._addPropertyEffect(e,w.OBSERVE,{fn:x,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let r=V(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");H(this,r,w.OBSERVE,B,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,w.NOTIFY,{fn:j,info:{eventName:Object(o.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,w.REFLECT,{fn:k,info:{attrName:e}})}_createComputedProperty(t,e,r){let n=V(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");const i=H(this,n,w.COMPUTE,L,t,r);S(this,"__computeInfo")[t]=i}_marshalArgs(t,e,r){const n=this.__data,i=[];for(let o=0,a=t.length;o<a;o++){let{name:a,structured:l,wildcard:c,value:d,literal:h}=t[o];if(!h)if(c){const t=Object(s.c)(a,e),i=J(n,r,t?e:a);d={path:t?e:a,value:i,base:t?Object(s.a)(n,a):i}}else d=l?J(n,r,a):n[a];if(y.f&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return v;i[o]=d}return i}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),n=this.__preBoundTemplateInfo==r;if(!n)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e)if(r=Object.create(r),r.wasPreBound=n,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,n=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=n,n?n.nextSibling=r:e.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(r)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),K.push(this);let r=super._stampTemplate(t,e);if(K.pop(),e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,function(t,e){let{nodeList:r,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let i=n[e],s=r[e],o=i.bindings;if(o)for(let e=0;e<o.length;e++){let r=o[e];$(s,r),F(s,t,r)}s.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:r,nextSibling:i,parent:s}=e;r?r.nextSibling=i:s&&(s.firstChild=i),i?i.previousSibling=r:s&&(s.lastChild=r),e.nextSibling=e.previousSibling=null;let o=e.childNodes;for(let t=0;t<o.length;t++){let e=o[t];Object(n.a)(Object(n.a)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,r,n){let i=e._parseTemplateNode.call(this,t,r,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(t.textContent=G(e)||" ",D(this,r,n,"text","textContent",e),i=!0)}return i}static _parseTemplateNodeAttribute(t,r,n,i,s){let a=this._parseBindings(s,r);if(a){let e=i,s="property";O.test(i)?s="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),s="attribute");let l=G(a);return l&&"attribute"==s&&("class"==i&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(i)),t.setAttribute(i,l)),"attribute"==s&&"disable-upgrade$"==e&&t.setAttribute(i,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===s&&(i=Object(o.b)(i)),D(this,r,n,s,i,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,r,n,i,s)}static _parseTemplateNestedTemplate(t,r,n){let i=e._parseTemplateNestedTemplate.call(this,t,r,n);const s=t.parentNode,o=n.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;y.j&&(a||l)&&(s.removeChild(t),(n=n.parentInfo).templateInfo=o,n.noted=!0,i=!1);let c=o.hostProps;if(y.c&&a)c&&(r.hostProps=Object.assign(r.hostProps||{},c),y.j||(n.parentInfo.noted=!0));else{let t="{";for(let e in c){D(this,r,n,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return i}static _parseBindings(t,e){let r,n=[],i=0;for(;null!==(r=U.exec(t));){r.index>i&&n.push({literal:t.slice(i,r.index)});let s=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,c="",d=-1;"{"==s&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=V(a),u=[];if(h){let{args:t,methodName:r}=h;for(let e=0;e<t.length;e++){let r=t[e];r.literal||u.push(r)}let n=e.dynamicFns;(n&&n[r]||h.static)&&(u.push(r),h.dynamicFn=!0)}else u.push(a);n.push({source:a,mode:s,negate:o,customEvent:l,signature:h,dependencies:u,event:c}),i=U.lastIndex}if(i&&i<t.length){let e=t.substring(i);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,r,n,i,o){let a;return a=e.signature?B(t,r,n,0,e.signature):r!=e.source?Object(s.a)(t,e.source):o&&Object(s.d)(r)?Object(s.a)(t,r):t.__data[r],e.negate&&(a=!a),a}}}),K=[]},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(4);class n{constructor(t){this.value=t.toString()}toString(){return this.value}}function i(t){if(t instanceof n)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const s=function(t,...e){const r=document.createElement("template");return r.innerHTML=e.reduce((e,r,s)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof n)return i(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(r)+t[s+1],t[0]),r}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(24);r(4);const i=function t(e){let r;return r="function"==typeof e?e:t.Class(e),e._legacyForceObservedAttributes&&(r.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(r.is,r),r};i.Class=n.a},function(t,e,r){"use strict";var n;r.d(e,"a",(function(){return $})),r.d(e,"b",(function(){return O})),r.d(e,"c",(function(){return S})),r.d(e,"d",(function(){return A}));const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,a="?"+o,l=`<${a}>`,c=document,d=(t="")=>c.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,p=t=>{var e;return u(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,_=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,y=/'/g,g=/"/g,v=/^(?:script|style|textarea)$/i,w=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),O=w(1),S=(w(2),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),C=new WeakMap,A=(t,e,r)=>{var n,i;const s=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let o=s._$litPart$;if(void 0===o){const t=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:null;s._$litPart$=o=new N(e.insertBefore(d(),t),t,void 0,null!=r?r:{})}return o._$AI(t),o},x=c.createTreeWalker(c,129,null,!1),E=(t,e)=>{const r=t.length-1,n=[];let i,a=2===e?"<svg>":"",c=f;for(let e=0;e<r;e++){const r=t[e];let s,d,h=-1,u=0;for(;u<r.length&&(c.lastIndex=u,d=c.exec(r),null!==d);)u=c.lastIndex,c===f?"!--"===d[1]?c=m:void 0!==d[1]?c=_:void 0!==d[2]?(v.test(d[2])&&(i=RegExp("</"+d[2],"g")),c=b):void 0!==d[3]&&(c=b):c===b?">"===d[0]?(c=null!=i?i:f,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,s=d[1],c=void 0===d[3]?b:'"'===d[3]?g:y):c===g||c===y?c=b:c===m||c===_?c=f:(c=b,i=void 0);const p=c===b&&t[e+1].startsWith("/>")?" ":"";a+=c===f?r+l:h>=0?(n.push(s),r.slice(0,h)+"$lit$"+r.slice(h)+o+p):r+o+(-2===h?(n.push(void 0),e):p)}const d=a+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==s?s.createHTML(d):d,n]};class T{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,l=0;const c=t.length-1,h=this.parts,[u,p]=E(t,e);if(this.el=T.createElement(u,r),x.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=x.nextNode())&&h.length<c;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(o)){const r=p[l++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(o),e=/([.?@])?(.*)/.exec(r);h.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?z:"?"===e[1]?D:"@"===e[1]?R:I})}else h.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(v.test(n.tagName)){const t=n.textContent.split(o),e=t.length-1;if(e>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],d()),x.nextNode(),h.push({type:2,index:++s});n.append(t[e],d())}}}else if(8===n.nodeType)if(n.data===a)h.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(o,t+1));)h.push({type:7,index:s}),t+=o.length-1}s++}}static createElement(t,e){const r=c.createElement("template");return r.innerHTML=t,r}}function j(t,e,r=t,n){var i,s,o,a;if(e===S)return e;let l=void 0!==n?null===(i=r._$Cl)||void 0===i?void 0:i[n]:r._$Cu;const c=h(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,n)),void 0!==n?(null!==(o=(a=r)._$Cl)&&void 0!==o?o:a._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,n)),e}class k{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(r,!0);x.currentNode=i;let s=x.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new N(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new M(s,this,t)),this.v.push(e),l=n[++a]}o!==(null==l?void 0:l.index)&&(s=x.nextNode(),o++)}return i}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{constructor(t,e,r,n){var i;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),h(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==S&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):p(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==P&&h(this._$AH)?this._$AA.nextSibling.data=t:this.S(c.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=T.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(r);else{const t=new k(i,this),e=t.p(this.options);t.m(r),this.S(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new T(t)),e}M(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new N(this.A(d()),this.A(d()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,r,n,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const i=this.strings;let s=!1;if(void 0===i)t=j(this,t,e,0),s=!h(t)||t!==this._$AH&&t!==S,s&&(this._$AH=t);else{const n=t;let o,a;for(t=i[0],o=0;o<i.length-1;o++)a=j(this,n[r+o],e,o),a===S&&(a=this._$AH[o]),s||(s=!h(a)||a!==this._$AH[o]),a===P?t=P:t!==P&&(t+=(null!=a?a:"")+i[o+1]),this._$AH[o]=a}s&&!n&&this.k(t)}k(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class z extends I{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===P?void 0:t}}const L=i?i.emptyScript:"";class D extends I{constructor(){super(...arguments),this.type=4}k(t){t&&t!==P?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class R extends I{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=j(this,t,e,0))&&void 0!==r?r:P)===S)return;const n=this._$AH,i=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==P&&(n===P||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class M{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const $={P:"$lit$",V:o,L:a,I:1,N:E,R:k,D:p,j:j,H:N,O:I,F:D,B:R,W:z,Z:M},F=window.litHtmlPolyfillSupport;null==F||F(T,N),(null!==(n=globalThis.litHtmlVersions)&&void 0!==n?n:globalThis.litHtmlVersions=[]).push("2.0.2")},function(t,e,r){"use strict";class n extends HTMLElement{static get version(){return"21.0.5"}}customElements.define("vaadin-lumo-styles",n)},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(4);var n=r(5),i=r(39);const s=Object(n.a)(t=>class extends t{_addEventListenerToNode(t,e,r){Object(i.a)(t,e,r)||super._addEventListenerToNode(t,e,r)}_removeEventListenerFromNode(t,e,r){Object(i.b)(t,e,r)||super._removeEventListenerFromNode(t,e,r)}})},function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return d}));r(4);let n=!1,i=[],s=[];function o(){n=!0,requestAnimationFrame((function(){n=!1,a(i),setTimeout((function(){!function(t){for(let e=0,r=t.length;e<r;e++)l(t.shift())}(s)}))}))}function a(t){for(;t.length;)l(t.shift())}function l(t){const e=t[0],r=t[1],n=t[2];try{r.apply(e,n)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,r){n||o(),i.push([t,e,r])}function d(t,e,r){n||o(),s.push([t,e,r])}},function(t,e,r){"use strict";var n=r(3);r(33);const i=n.a`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,s=document.createElement("template");s.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content)},function(t,e,r){"use strict";r.d(e,"a",(function(){return L}));var n=r(41),i=(r(31),r(21));r(4);var s=r(29),o=r(22),a=r(34),l=r(1),c=r(0);let d=!1;function h(){if(l.e&&!l.r){if(!d){d=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}const u=Object(a.a)(Object(o.b)(Object(s.a)(HTMLElement)));customElements.define("dom-bind",class extends u{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),l.m)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,r,n){this.mutableData=!0}connectedCallback(){h()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(c.a)(Object(c.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var p=r(7),f=r(9),m=r(20),_=r(2),b=r(6);const y=Object(o.b)(p.a);class g extends y{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!l.o,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),h()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(c.a)(Object(c.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=Object(i.c)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(t,e){let r=this.__instances;for(let n,i=0;i<r.length&&(n=r[i]);i++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,r){if(Object(_.e)(this.as,e)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=r);let i=Object(_.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(i,r)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,r=this.__getMethodHost();return function(){return r[e].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let r=0;r<e.length;r++)0===t.indexOf(e[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=f.a.debounce(this.__renderDebouncer,e>0?b.d.after(e):b.c,t.bind(this)),Object(m.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(m.b)()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),l.o&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((e,r,n)=>this.__filterFn(t[e],r,n))),this.__sortFn&&e.sort((e,r)=>this.__sortFn(t[e],t[r])),e}__calculateLimit(t){let e=t;const r=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),n=Math.max(e-r,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-r,0),this.__chunkCount),e=Math.min(r+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){const n=this.__itemsIdxToInstIdx={};let i;for(i=0;i<e;i++){let e=this.__instances[i],s=r[i],o=t[s];n[s]=i,e?(e._setPendingProperty(this.as,o),e._setPendingProperty(this.indexAs,i),e._setPendingProperty(this.itemsIndexAs,s),e._flushProperties()):this.__insertInstance(o,i,s)}for(let t=this.__instances.length-1;t>=i;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const r=Object(c.a)(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];r.appendChild(n)}return e}__attachInstance(t,e){let r=this.__instances[t];e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=r,new this.__ctor(n)}__insertInstance(t,e,r){const n=this.__stampInstance(t,e,r);let i=this.__instances[e+1],s=i?i.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(n.root,s),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let r=t.slice(6),n=r.indexOf("."),i=n<0?r:r.substring(0,n);if(i==parseInt(i,10)){let t=n<0?"":r.substring(n+1);this.__handleObservedPaths(t);let s=this.__itemsIdxToInstIdx[i],o=this.__instances[s];if(o){let r=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(r,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(i.a)(this.template,t)}}customElements.define(g.is,g);class v extends p.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=f.a.debounce(this.__renderDebouncer,b.c,()=>this.__render()),Object(m.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(c.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),h()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:Object(c.a)(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=Object(c.a)(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(Object(c.a)(this).previousSibling!==e[e.length-1])for(let r,n=0;n<e.length&&(r=e[n]);n++)Object(c.a)(t).insertBefore(r,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Object(m.b)()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),l.o&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const w=l.c?class extends v{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(l.m&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=e._bindTemplate(this.__template,!0);r.runEffects=(t,e,r)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(n.changedProps,e)),t(e,r);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:t,changedProps:{}}),r)for(const t in e){const e=Object(_.g)(t);n.changedProps[e]=this.__dataHost[e]}else Object.assign(n.changedProps,e)},this.__instance=e._stampTemplate(this.__template,r),Object(c.a)(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Object(i.b)(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends v{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Object(i.c)(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(_.g)(t)]=!0))}})),this.__instance=new this.__ctor,Object(c.a)(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(c.a)(t[0]).parentNode;if(e){e=Object(c.a)(e);for(let r,n=0;n<t.length&&(r=t[n]);n++)e.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(w.is,w);var O=r(5),S=r(47),P=r(17);let C=Object(O.a)(t=>{let e=Object(P.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let r=e.path;if(r==JSCompiler_renameProperty("items",this)){let r=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=Object(S.a)(r,n);this.__applySplices(t)}this.__lastItems=r,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=r.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let r=0;r<t.length;r++){let n=t[r];e.forEach((t,r)=>{t<n.index||(t>=n.index+n.removed.length?e.set(r,t+n.addedCount-n.removed.length):e.set(r,-1))});for(let t=0;t<n.addedCount;t++){let r=n.index+t;e.has(this.items[r])&&e.set(this.items[r],r)}}this.__updateLinks();let r=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,e.delete(n)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((r,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let r;this.__selectedMap.delete(t),this.multi&&(r=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(p.a);class A extends C{static get is(){return"array-selector"}static get template(){return null}}customElements.define(A.is,A);var x=r(53),E=r(23),T=r(8);const j=new x.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,r){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,r){},styleSubtree(t,e){j.processStyles(),Object(E.c)(t,e)},styleElement(t){j.processStyles()},styleDocument(t){j.processStyles(),Object(E.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(E.b)(t,e),flushCustomStyles(){},nativeCss:T.c,nativeShadow:T.d,cssBuild:T.a,disableRuntime:T.b}),window.ShadyCSS.CustomStyleInterface=j;var k=r(28);const N=window.ShadyCSS.CustomStyleInterface;class I extends HTMLElement{constructor(){super(),this._style=null,N.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(k.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}let z;window.customElements.define("custom-style",I),z=o.a._mutablePropertyChange;Boolean;r(30);const L=Object(n.a)(HTMLElement).prototype},,function(t,e,r){"use strict";r.d(e,"a",(function(){return N})),r.d(e,"b",(function(){return I})),r.d(e,"c",(function(){return L}));r(4);var n=r(6),i=r(9),s=r(1),o=r(0);let a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function p(t){return d.indexOf(t)>-1}let f=!1;function m(t){if(!p(t)&&"touchend"!==t)return a&&f&&s.i?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){f=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let _=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const b=[],y={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},g={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function v(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let r=t.getRootNode();if(t.id){let n=r.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let w=function(t){let e=t.sourceCapabilities;var r;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,n=x(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)b.push(n[t]);else if(r=n[t],y[r.localName]){let r=v(n[t]);for(let t=0;t<r.length;t++)e=e||b.indexOf(r[t])>-1}if(n[t]===P.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function O(t){let e=_?["click"]:d;for(let r,n=0;n<e.length;n++)r=e[n],t?(b.length=0,document.addEventListener(r,w,!0)):document.removeEventListener(r,w,!0)}function S(t){let e=t.type;if(!p(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!u&&(e=h[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let P={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function C(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function A(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}s.b&&document.addEventListener("touchend",(function(t){if(!s.b)return;P.mouse.mouseIgnoreJob||O(!0),P.mouse.target=x(t)[0],P.mouse.mouseIgnoreJob=i.a.debounce(P.mouse.mouseIgnoreJob,n.d.after(2500),(function(){O(),P.mouse.target=null,P.mouse.mouseIgnoreJob=null}))}),!!f&&{passive:!0});const x=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],E={},T=[];function j(t){const e=x(t);return e.length>0?e[0]:t.target}function k(t){let e,r=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;let i=n[r];if(i){if(!t[l]&&(t[l]={},"touch"===r.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===r&&1===t.touches.length&&(P.touch.id=e.identifier),P.touch.id!==e.identifier)return;a||"touchstart"!==r&&"touchmove"!==r||function(t){let e=t.changedTouches[0],r=t.type;if("touchstart"===r)P.touch.x=e.clientX,P.touch.y=e.clientY,P.touch.scrollDecided=!1;else if("touchmove"===r){if(P.touch.scrollDecided)return;P.touch.scrollDecided=!0;let r=function(t){let e="auto",r=x(t);for(let t,n=0;n<r.length;n++)if(t=r[n],t[c]){e=t[c];break}return e}(t),n=!1,i=Math.abs(P.touch.x-e.clientX),s=Math.abs(P.touch.y-e.clientY);t.cancelable&&("none"===r?n=!0:"pan-x"===r?n=s>i:"pan-y"===r&&(n=i>s)),n?t.preventDefault():R("track")}}(t)}if(e=t[l],!e.skip){for(let r,n=0;n<T.length;n++)r=T[n],i[r.name]&&!e[r.name]&&r.flow&&r.flow.start.indexOf(t.type)>-1&&r.reset&&r.reset();for(let n,s=0;s<T.length;s++)n=T[s],i[n.name]&&!e[n.name]&&(e[n.name]=!0,n[r](t))}}}function N(t,e,r){return!!E[e]&&(function(t,e,r){let n=E[e],i=n.deps,s=n.name,o=t.__polymerGestures;o||(t.__polymerGestures=o={});for(let e,r,n=0;n<i.length;n++)e=i[n],_&&p(e)&&"click"!==e||(r=o[e],r||(o[e]=r={_count:0}),0===r._count&&t.addEventListener(e,k,m(e)),r[s]=(r[s]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),n.touchAction&&L(t,n.touchAction)}(t,e,r),!0)}function I(t,e,r){return!!E[e]&&(function(t,e,r){let n=E[e],i=n.deps,s=n.name,o=t.__polymerGestures;if(o)for(let e,r,n=0;n<i.length;n++)e=i[n],r=o[e],r&&r[s]&&(r[s]=(r[s]||1)-1,r._count=(r._count||1)-1,0===r._count&&t.removeEventListener(e,k,m(e)));t.removeEventListener(e,r)}(t,e,r),!0)}function z(t){T.push(t);for(let e=0;e<t.emits.length;e++)E[t.emits[e]]=t}function L(t,e){a&&t instanceof HTMLElement&&n.c.run(()=>{t.style.touchAction=e}),t[c]=e}function D(t,e,r){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,Object(o.a)(t).dispatchEvent(n),n.defaultPrevented){let t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function R(t){let e=function(t){for(let e,r=0;r<T.length;r++){e=T[r];for(let r,n=0;n<e.emits.length;n++)if(r=e.emits[n],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function M(t,e,r,n){e&&D(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(t){return R(t)}})}function $(t,e,r){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),i=Math.abs(t.y-r);return n>=5||i>=5}function F(t,e,r){if(!e)return;let n,i=t.moves[t.moves.length-2],s=t.moves[t.moves.length-1],o=s.x-t.x,a=s.y-t.y,l=0;i&&(n=s.x-i.x,l=s.y-i.y),D(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:o,dy:a,ddx:n,ddy:l,sourceEvent:r,hover:function(){return function(t,e){let r=document.elementFromPoint(t,e),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(t,e),i===n)break;n&&(r=n)}return r}(r.clientX,r.clientY)}})}function H(t,e,r){let n=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),s=j(r||e);!s||g[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=25&&i<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=j(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let r=e.getBoundingClientRect(),n=t.pageX,i=t.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}(e))&&(t.prevent||D(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}z({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){A(this.info)},mousedown:function(t){if(!S(t))return;let e=j(t),r=this;C(this.info,(function(t){S(t)||(M("up",e,t),A(r.info))}),(function(t){S(t)&&M("up",e,t),A(r.info)})),M("down",e,t)},touchstart:function(t){M("down",j(t),t.changedTouches[0],t)},touchend:function(t){M("up",j(t),t.changedTouches[0],t)}}),z({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,A(this.info)},mousedown:function(t){if(!S(t))return;let e=j(t),r=this,n=function(t){let n=t.clientX,i=t.clientY;$(r.info,n,i)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&R("tap"),r.info.addMove({x:n,y:i}),S(t)||(r.info.state="end",A(r.info)),e&&F(r.info,e,t),r.info.started=!0)};C(this.info,n,(function(t){r.info.started&&n(t),A(r.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=j(t),r=t.changedTouches[0],n=r.clientX,i=r.clientY;$(this.info,n,i)&&("start"===this.info.state&&R("tap"),this.info.addMove({x:n,y:i}),F(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=j(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),F(this.info,e,r))}}),z({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){S(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){S(t)&&H(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){H(this.info,t.changedTouches[0],t)}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s}));function n(){0}const i=[];function s(t){i.push(t)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return bt}));var n=r(8);class i{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function s(t){return function t(e,r){let n=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=r.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(d.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let i=e.parsedSelector=e.selector=n.trim();e.atRule=0===i.indexOf(p),e.atRule?0===i.indexOf(u)?e.type=a.MEDIA_RULE:i.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===i.indexOf(h)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let i=e.rules;if(i)for(let e,n=0,s=i.length;n<s&&(e=i[n]);n++)t(e,r);return e}(function(t){let e=new i;e.start=0,e.end=t.length;let r=e;for(let n=0,s=t.length;n<s;n++)if(t[n]===l){r.rules||(r.rules=[]);let t=r,e=t.rules[t.rules.length-1]||null;r=new i,r.start=n+1,r.parent=t,r.previous=e,t.rules.push(r)}else t[n]===c&&(r.end=n+1,r=r.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function o(t,e,r=""){let n="";if(t.cssText||t.rules){let r=t.rules;if(r&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(h)}(r))for(let t,i=0,s=r.length;i<s&&(t=r[i]);i++)n=o(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(r+=t.selector+" "+l+"\n"),r+=n,t.selector&&(r+=c+"\n\n")),r}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",p="@";var f=r(14);const m=new Set;function _(t){const e=t.textContent;if(!m.has(e)){m.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function b(t){return t.hasAttribute("shady-unscoped")}function y(t,e){return t?("string"==typeof t&&(t=s(t)),e&&v(t,e),o(t,n.c)):""}function g(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=s(t.textContent)),t.__cssRules||null}function v(t,e,r,n){if(!t)return;let i=!1,s=t.type;if(n&&s===a.MEDIA_RULE){let e=t.selector.match(f.a);e&&(window.matchMedia(e[1]).matches||(i=!0))}s===a.STYLE_RULE?e(t):r&&s===a.KEYFRAMES_RULE?r(t):s===a.MIXIN_RULE&&(i=!0);let o=t.rules;if(o&&!i)for(let t,i=0,s=o.length;i<s&&(t=o[i]);i++)v(t,e,r,n)}function w(t,e){let r=0;for(let n=e,i=t.length;n<i;n++)if("("===t[n])r++;else if(")"===t[n]&&0==--r)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function O(t){if(void 0!==n.a)return n.a;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function S(t){return""!==O(t)}var P=r(23);const C=/;\s*/m,A=/^\s*(initial)|(inherit)\s*$/,x=/\s*!important/;class E{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let T=null;class j{constructor(){this._currentElement=null,this._measureElement=null,this._map=new E}detectMixin(t){return Object(P.a)(t)}gatherStyles(t){const e=function(t){const e=[],r=t.querySelectorAll("style");for(let t=0;t<r.length;t++){const i=r[t];b(i)?n.d||(_(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){const r=document.createElement("style");return r.textContent=e,t.content.insertBefore(r,t.content.firstChild),r}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const r=t._gatheredStyle;return r?this.transformStyle(r,e):null}transformStyle(t,e=""){let r=g(t);return this.transformRules(r,e),t.textContent=y(r),r}transformCustomStyle(t){let e=g(t);return v(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=y(e),e}transformRules(t,e){this._currentElement=e,v(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f.c,(t,r,n,i)=>this._produceCssProperties(t,r,n,i,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const r={};let n=!1;return v(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(r,this._cssTextToMap(e.parsedCssText))}),r}_consumeCssProperties(t,e){let r=null;for(;r=f.b.exec(t);){let n=r[0],i=r[1],s=r.index,o=s+n.indexOf("@apply"),a=s+n.length,l=t.slice(0,o),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(i,d);t=`${l}${h}${c}`,f.b.lastIndex=s+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(C,"");let r=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let i,s,o;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(i in a)o=e&&e[i],s=[i,": var(",t,"_-_",i],o&&s.push(",",o.replace(x,"")),s.push(")"),x.test(a[i])&&s.push(" !important"),r.push(s.join(""))}return r.join("; ")}_replaceInitialOrInherit(t,e){let r=A.exec(e);return r&&(e=r[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let r,n,i=t.split(";"),s={};for(let t,o,a=0;a<i.length;a++)t=i[a],t&&(o=t.split(":"),o.length>1&&(r=o[0].trim(),n=o.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(r,n)),s[r]=n));return s}_invalidateMixinEntry(t){if(T)for(let e in t.dependants)e!==this._currentElement&&T(e)}_produceCssProperties(t,e,r,n,i){if(r&&function t(e,r){let n=e.indexOf("var(");if(-1===n)return r(e,"","","");let i=w(e,n+3),s=e.substring(n+4,i),o=e.substring(0,n),a=t(e.substring(i+1),r),l=s.indexOf(",");return-1===l?r(o,s.trim(),"",a):r(o,s.substring(0,l).trim(),s.substring(l+1).trim(),a)}(r,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let s=this._consumeCssProperties(""+n,i),o=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let h,u,p=[],f=!1;for(h in l)u=a[h],void 0===u&&(u="initial"),d&&!(h in d)&&(f=!0),p.push(`${e}_-_${h}: ${u}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),r&&(o=`${t};${o}`),`${o}${p.join("; ")};`}}j.prototype.detectMixin=j.prototype.detectMixin,j.prototype.transformStyle=j.prototype.transformStyle,j.prototype.transformCustomStyle=j.prototype.transformCustomStyle,j.prototype.transformRules=j.prototype.transformRules,j.prototype.transformRule=j.prototype.transformRule,j.prototype.transformTemplate=j.prototype.transformTemplate,j.prototype._separator="_-_",Object.defineProperty(j.prototype,"invalidCallback",{get:()=>T,set(t){T=t}});var k=j;var N={};const I="_applyShimCurrentVersion",z="_applyShimNextVersion",L=Promise.resolve();function D(t){let e=N[t];e&&function(t){t[I]=t[I]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[z]=(t[z]||0)+1}(e)}function R(t){return t[I]===t[z]}function M(t){return!R(t)&&t._applyShimValidatingVersion===t[z]}function $(t){t._applyShimValidatingVersion=t[z],t._validating||(t._validating=!0,L.then((function(){t[I]=t[z],t._validating=!1})))}r(53);const F=new k;class H{constructor(){this.customStyleInterface=null,F.invalidCallback=D}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{F.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),S(t))return;N[e]=t;let r=F.transformTemplate(t,e);t._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let r=t[e],n=this.customStyleInterface.getStyleForCustomStyle(r);n&&F.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(P.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,r="",n="";return e?e.indexOf("-")>-1?r=e:(n=e,r=t.getAttribute&&t.getAttribute("is")||""):(r=t.is,n=t.extends),{is:r,typeExtension:n}}(t),r=N[e];if((!r||!S(r))&&r&&!R(r)){M(r)||(this.prepareTemplate(r,e),$(r));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=r._styleAst,t.textContent=y(r._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new H;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,r,n){t.flushCustomStyles(),t.prepareTemplate(e,r)},prepareTemplateStyles(t,e,r){window.ShadyCSS.prepareTemplate(t,e,r)},prepareTemplateDom(t,e){},styleSubtree(e,r){t.flushCustomStyles(),t.styleSubtree(e,r)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(P.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=F;var B=r(17),q=r(34),U=r(45),G=r(5);const V=/:host\(:dir\((ltr|rtl)\)\)/g,Y=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,J=/:dir\((?:ltr|rtl)\)/,W=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),X=[];let Z=null,K="";function Q(){K=document.documentElement.getAttribute("dir")}function tt(t){if(!t.__autoDirOptOut){t.setAttribute("dir",K)}}function et(){Q(),K=document.documentElement.getAttribute("dir");for(let t=0;t<X.length;t++)tt(X[t])}const rt=Object(G.a)(t=>{W||Z||(Q(),Z=new MutationObserver(et),Z.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(U.a)(t);class r extends e{static _processStyleText(t,r){return t=e._processStyleText.call(this,t,r),!W&&J.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(V,':host([dir="$1"])'),e=e.replace(Y,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Z&&Z.takeRecords().length&&et(),X.push(this),tt(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=X.indexOf(this);t>-1&&X.splice(t,1)}}}return r.__activateDir=!1,r});r(35);function nt(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?nt():window.addEventListener("DOMContentLoaded",nt);var it=r(12),st=r(39),ot=r(9),at=r(6),lt=r(2),ct=r(0);r(4);const dt=window.ShadyDOM,ht=window.ShadyCSS;function ut(t,e){return Object(ct.a)(t).getRootNode()===e}var pt=r(1);const ft=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Object(G.a)(t=>{const e=Object(B.a)(t);let r=ft(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,r,n){"disable-upgrade"==t?this.__isUpgradeDisabled&&null==r&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Object(ct.a)(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,r,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});var mt=r(40);let _t=window.ShadyCSS;const bt=Object(G.a)(t=>{const e=Object(q.a)(Object(B.a)(t)),r=B.b?e:rt(e),n=ft(r),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,r){(this.__dataAttributes&&this.__dataAttributes[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,r,null)}setAttribute(t,e){if(pt.d&&!this._legacyForceObservedAttributes){const r=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,r,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(pt.d&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return pt.d&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Object(mt.b)(this.prototype)),this.__observedAttributes):n.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,r,n){e!==r&&("disable-upgrade"==t?this.__isUpgradeDisabled&&null==r&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Object(ct.a)(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,r,n),this.attributeChanged(t,e,r)))}attributeChanged(t,e,r){}_initializeProperties(){if(pt.e&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),pt.d&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,r=t.length;e<r;e++){const r=t[e];this.__attributeReaction(r.name,null,r.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,r){this._propertyToAttribute(t,e,r)}serializeValueToAttribute(t,e,r){this._valueToNodeAttribute(r||this,t,e)}extend(t,e){if(!t||!e)return t||e;let r=Object.getOwnPropertyNames(e);for(let n,i=0;i<r.length&&(n=r[i]);i++){let r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r)}return t}mixin(t,e){for(let r in e)t[r]=e[r];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,r){r=r||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});n.detail=e;let i=r.node||this;return Object(ct.a)(i).dispatchEvent(n),n}listen(t,e,r){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),i=n.get(t);i||(i={},n.set(t,i));let s=e+r;i[s]||(i[s]=this._addMethodEventListenerToNode(t,e,r,this))}unlisten(t,e,r){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),i=e+r,s=n&&n[i];s&&(this._removeEventListenerFromNode(t,e,s),n[i]=null)}setScrollDirection(t,e){Object(st.c)(e||this,i[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ct.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(it.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(it.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(it.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let r,n=0;r=t[n];n++)r.nodeType!==Node.COMMENT_NODE&&e.push(r.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(it.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(ct.a)(this).contains(t)&&Object(ct.a)(this).getRootNode()===Object(ct.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ct.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!dt||!ht)return null;if(!dt.handlesDynamicScoping)return null;const r=ht.ScopingShim;if(!r)return null;const n=r.scopeForNode(t),i=Object(ct.a)(t).getRootNode(),s=t=>{if(!ut(t,i))return;const e=Array.from(dt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const s=e[t];if(!ut(s,i))continue;const o=r.currentScopeForNode(s);o!==n&&(""!==o&&r.unscopeNode(s,o),r.scopeNode(s,n))}};if(s(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const r=t[e];for(let t=0;t<r.addedNodes.length;t++){const e=r.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&s(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return _t.getComputedStyleValue(this,t)}debounce(t,e,r){return this._debouncers=this._debouncers||{},this._debouncers[t]=ot.a.debounce(this._debouncers[t],r>0?at.d.after(r):at.c,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?at.d.run(t.bind(this),e):~at.c.run(t.bind(this))}cancelAsync(t){t<0?at.c.cancel(~t):at.d.cancel(t)}create(t,e){let r=document.createElement(t);if(e)if(r.setProperties)r.setProperties(e);else for(let t in e)r[t]=e[t];return r}elementMatches(t,e){return Object(it.b)(e||this,t)}toggleAttribute(t,e){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(e=!r.hasAttribute(t)),e?(Object(ct.a)(r).setAttribute(t,""),!0):(Object(ct.a)(r).removeAttribute(t),!1)}toggleClass(t,e,r){r=r||this,1==arguments.length&&(e=!r.classList.contains(t)),e?r.classList.add(t):r.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,r,n){n=n||this,this.transform("translate3d("+t+","+e+","+r+")",n)}arrayDelete(t,e){let r;if(Array.isArray(t)){if(r=t.indexOf(e),r>=0)return t.splice(r,1)}else{if(r=Object(lt.a)(this,t).indexOf(e),r>=0)return this.splice(t,r,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return s.prototype.is="",s})},function(t,e,r){"use strict";var n=r(3);r(33);const i=n.a`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 52%);
    --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
    --lumo-primary-text-color: var(--lumo-primary-color);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 100%, 61%);
    --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
    --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
    --lumo-error-text-color: hsl(3, 92%, 53%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
    --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
    --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
    --lumo-success-text-color: hsl(145, 100%, 32%);
    --lumo-success-contrast-color: #fff;
  }
`,s=document.createElement("template");s.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content);const o=n.a`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 86%, 55%);
    --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
    --lumo-primary-text-color: hsl(214, 100%, 70%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 90%, 63%);
    --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
    --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
    --lumo-error-text-color: hsl(3, 100%, 67%);

    /* Success */
    --lumo-success-color: hsl(145, 65%, 42%);
    --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
    --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 47%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a {
    color: var(--lumo-primary-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Object(n.b)("",o,{moduleId:"lumo-color"});const a=n.a`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;Object(n.b)("",a,{moduleId:"lumo-color-legacy",include:["lumo-color"]})},function(t,e,r){const n=r(67);t.exports=n},function(t,e,r){"use strict";r.d(e,"a",(function(){return Y}));var n={};r.r(n),r.d(n,"changeFormat",(function(){return w})),r.d(n,"parsed",(function(){return O})),r.d(n,"setGraph",(function(){return S})),r.d(n,"addPrefix",(function(){return P})),r.d(n,"removePrefix",(function(){return C})),r.d(n,"setCustomPrefix",(function(){return A})),r.d(n,"replaceCustomPrefixes",(function(){return x}));var i={};r.r(i),r.d(i,"shapesGraph",(function(){return j})),r.d(i,"dataGraph",(function(){return I})),r.d(i,"validation",(function(){return $})),r.d(i,"playground",(function(){return q}));var s=r(18);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class c extends EventTarget{constructor(t,e){super(),this.state=t,this.reducer=e,this.state=this.reducer(this.state,{})}dispatch(t){const e=new CustomEvent(s.a,{cancelable:!0,detail:{action:t}});return this.dispatchEvent(e)&&(t=e.detail.action,this.state=this.reducer(this.state,t),this.dispatchEvent(new CustomEvent(s.b,{detail:{action:t}}))),t}}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p=(t,e)=>e.indexOf("/")>-1?e:t+"/"+e,f=(t,e,r)=>{const n=p(e,r);return t.dispatch[e][r]=e=>{const r=h({type:n},void 0!==e&&{payload:e});return t.dispatch(r)},n},m={},_=[],b={dispatchPlugin:{onModel(t,e,r){t.dispatch[e]={};for(const n in r.reducers)f(t,e,n)}},effectsPlugin:{onModel(t,e,r){if(!r.effects)return;const n=r.effects({getDispatch:()=>t.dispatch,getState:()=>t.state});for(const r in n){const i=f(t,e,r),s=n[r];m[i]?m[i].push(s):m[i]=[s],"init"===r&&_.push(s)}},onStore(t){t.addEventListener(s.b,t=>{const{action:e}=t.detail,r=m[e.type];r&&queueMicrotask(()=>r.forEach(t=>t(e.payload)))}),queueMicrotask(()=>_.forEach(t=>t()))}}};function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e){return g(g({},t),{},{format:e})}function O(t,{quads:e,serialized:r}){return g(g({},t),{},{quads:e,graph:r})}function S(t,e){return g(g({},t),{},{graph:e})}function P(t,e){return g(g({},t),{},{prefixes:[...new Set([...t.prefixes,e])]})}function C(t,e){return g(g({},t),{},{prefixes:t.prefixes.filter(t=>t!==e)})}function A(t,{prefix:e,namespace:r}){if("string"!=typeof e||"string"!=typeof r)return t;const n=g({},t.customPrefixes);return r?n[e]=r:delete n[e],g(g({},t),{},{customPrefixes:n})}function x(t,e){return g(g({},t),{},{customPrefixes:e})}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const j={state:{format:"text/turtle",graph:"@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix schema: <http://schema.org/> .\n\nschema:Person\n  a rdfs:Class, sh:NodeShape ;\n  sh:property\n    [\n      sh:path schema:name ;\n      sh:minCount 1 ;\n      sh:maxCount 1 ;\n    ],\n    [\n      sh:path schema:age ;\n      sh:minCount 1 ;\n      sh:minInclusive 18 ;\n    ] ;\n.\n",prefixes:["sh","schema"],customPrefixes:{}},reducers:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){T(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},n)};function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const I={state:{format:"application/ld+json",graph:'{\n  "@context": {\n    "@base": "https://example.com/",\n    "@vocab": "http://schema.org/"\n  },\n  "@id": "John-Doe",\n  "@type": "Person",\n  "name": [\n    "John",\n    "Johnny"\n  ],\n  "age": 18\n}\n',prefixes:[],customPrefixes:{}},reducers:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){N(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},n)};var z=r(54),L=r.n(z);function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){M(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const $={state:{display:"tree",conforms:void 0,results:[]},reducers:{report(t,e){const r=e.results.map(L.a);return R(R({},t),{},{results:r,conforms:e.conforms,report:e})},display:(t,e)=>R(R({},t),{},{display:e})},effects(t){const e=t.getDispatch();async function n(){const{shapesGraph:n,dataGraph:i}=t.getState();if(n.quads&&i.quads){const t=(await r.e(8).then(r.t.bind(null,404,7))).default,{dataset:s}=(await r.e(28).then(r.bind(null,424))).default,o=new t(s(n.quads));e.validation.report(o.validate(s(i.quads)))}}return{"dataGraph/parsed":n,"shapesGraph/parsed":n}}};function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const q={state:{page:3,shaperone:new URL("https://forms.hypermedia.app/playground/").toString(),sharingLink:new URL(window.location.href).toString()},reducers:{switchPage:(t,e)=>H(H({},t),{},{page:e}),setShaperoneParam(t,{key:e,value:r}){const n=new URL(t.shaperone),i=new URLSearchParams(n.hash.substr(1));return i.set(e,r),n.hash=i.toString(),H(H({},t),{},{shaperone:n.toString()})},setSharingParam(t,{key:e,value:r}){const n=new URL(t.sharingLink),i=new URLSearchParams(n.hash.substr(1));return i.set(e,r),n.hash=i.toString(),H(H({},t),{},{sharingLink:n.toString()})}},effects(t){const e=t.getDispatch();return{switchPage(t){e.playground.setSharingParam({key:"page",value:t})},"dataGraph/parsed":function({serialized:r}){const{format:n}=t.getState().dataGraph;e.playground.setShaperoneParam({key:"resource",value:r}),e.playground.setShaperoneParam({key:"resourceFormat",value:n}),e.playground.setSharingParam({key:"dataGraph",value:r}),e.playground.setSharingParam({key:"dataGraphFormat",value:n})},"shapesGraph/parsed":function({serialized:r}){const{format:n}=t.getState().shapesGraph;e.playground.setShaperoneParam({key:"shapes",value:r}),e.playground.setShaperoneParam({key:"shapesFormat",value:n}),e.playground.setSharingParam({key:"shapesGraph",value:r}),e.playground.setSharingParam({key:"shapesGraphFormat",value:n})},"dataGraph/setCustomPrefix":function(){e.playground.setSharingParam({key:"dataGraphCustomPrefixes",value:JSON.stringify(t.getState().dataGraph.customPrefixes)})},"shapesGraph/setCustomPrefix":function(){e.playground.setSharingParam({key:"shapesGraphCustomPrefixes",value:JSON.stringify(t.getState().shapesGraph.customPrefixes)})},restoreState(){const t=new URL(document.location.toString()),r=new URLSearchParams(t.hash.substr(1));function n(e){return r.get(e)||t.searchParams.get(e)}const i=n("page"),s=n("shapesGraph"),o=n("shapesGraphFormat"),a=n("shapesGraphCustomPrefixes"),l=n("dataGraph"),c=n("dataGraphFormat"),d=n("dataGraphCustomPrefixes");i&&e.playground.switchPage(Number.parseInt(i,10)),s&&e.shapesGraph.setGraph(s),o&&e.shapesGraph.changeFormat(o),a&&e.shapesGraph.replaceCustomPrefixes(JSON.parse(a)),l&&e.dataGraph.setGraph(l),c&&e.dataGraph.changeFormat(c),d&&e.dataGraph.replaceCustomPrefixes(JSON.parse(d)),[...t.searchParams.keys()].forEach(e=>t.searchParams.delete(e)),t.hash="",window.history.replaceState(null,"",t.toString())}}}};function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function V(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const Y=function(t,e){const r=a({name:location.hostname,storage:localStorage,serializer:JSON,filter:t=>!0,persist:t=>t,delay:0},e),n=r.storage.getItem(r.name);n&&(t.state=a(a({},t.state),r.serializer.parse(n)));let i=0;return t.addEventListener(s.b,e=>{const{action:n}=e.detail;r.filter(n)&&(i&&window.clearTimeout(i),i=window.setTimeout(()=>{r.storage.setItem(r.name,r.serializer.stringify(r.persist(t.state))),i=0},r.delay))}),t}((t=>{const e=h({},t.models),r=h(h({},b),t.plugins);for(const t in r){const n=r[t];n.model&&(e[t]=n.model)}const n={};for(const t in e){const r=e[t],i={};for(const e in r.reducers)i[p(t,e)]=r.reducers[e];n[t]=(t=r.state,e)=>{const n=i[e.type];return n?n(t,e.payload):t}}const i=function(t){return(e={},r)=>{const n={};for(const i in t)n[i]=t[i](e[i],r);return n}}(n),s=t&&t.state,o=new c(s,i);for(const t in r){const n=r[t];if(n.onModel)for(const t in e)n.onModel(o,t,e[t])}for(const t in r){const e=r[t];e.onStore&&e.onStore(o)}return o})({models:i}),{persist(t){const{dataGraph:{quads:e},shapesGraph:{quads:r},validation:n}=t,i=V(t.dataGraph,["quads"]);return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({shapesGraph:V(t.shapesGraph,["quads"]),dataGraph:i},V(t,["dataGraph","shapesGraph","validation"]))}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(4);var n=r(5),i=r(19),s=r(46);const o={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)o[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(n.a)(t=>{const e=Object(s.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(i.b)(t[e]))}static attributeNameForProperty(t){return Object(i.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const r=this;r.hasAttribute(t)||this._valueToNodeAttribute(r,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!o[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(4);var n=r(5),i=r(6),s=r(0);const o=i.c,a=Object(n.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let n=this.__data[t],i=this._shouldPropertyChange(t,e,n);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),i}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,o.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,n){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,n)}_attributeToProperty(t,e,r){if(!this.__serializing){const n=this.__dataAttributes,i=n&&n[t]||t;this[i]=this._deserializeValue(e,r||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const n=this._serializeValue(e);"class"!==r&&"name"!==r&&"slot"!==r||(t=Object(s.a)(t)),void 0===n?t.removeAttribute(r):t.setAttribute(r,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(4);function n(t,e,r){return{index:t,removed:e,addedCount:r}}function i(t,e,r,i,s,a){let l,c=0,d=0,h=Math.min(r-e,a-s);if(0==e&&0==s&&(c=function(t,e,r){for(let n=0;n<r;n++)if(!o(t[n],e[n]))return n;return r}(t,i,h)),r==t.length&&a==i.length&&(d=function(t,e,r){let n=t.length,i=e.length,s=0;for(;s<r&&o(t[--n],e[--i]);)s++;return s}(t,i,h-c)),s+=c,a-=d,(r-=d)-(e+=c)==0&&a-s==0)return[];if(e==r){for(l=n(e,[],0);s<a;)l.removed.push(i[s++]);return[l]}if(s==a)return[n(e,[],r-e)];let u=function(t){let e=t.length-1,r=t[0].length-1,n=t[e][r],i=[];for(;e>0||r>0;){if(0==e){i.push(2),r--;continue}if(0==r){i.push(3),e--;continue}let s,o=t[e-1][r-1],a=t[e-1][r],l=t[e][r-1];s=a<l?a<o?a:o:l<o?l:o,s==o?(o==n?i.push(0):(i.push(1),n=o),e--,r--):s==a?(i.push(3),e--,n=a):(i.push(2),r--,n=l)}return i.reverse(),i}(function(t,e,r,n,i,s){let a=s-i+1,l=r-e+1,c=new Array(a);for(let t=0;t<a;t++)c[t]=new Array(l),c[t][0]=t;for(let t=0;t<l;t++)c[0][t]=t;for(let r=1;r<a;r++)for(let s=1;s<l;s++)if(o(t[e+s-1],n[i+r-1]))c[r][s]=c[r-1][s-1];else{let t=c[r-1][s]+1,e=c[r][s-1]+1;c[r][s]=t<e?t:e}return c}(t,e,r,i,s,a));l=void 0;let p=[],f=e,m=s;for(let t=0;t<u.length;t++)switch(u[t]){case 0:l&&(p.push(l),l=void 0),f++,m++;break;case 1:l||(l=n(f,[],0)),l.addedCount++,f++,l.removed.push(i[m]),m++;break;case 2:l||(l=n(f,[],0)),l.addedCount++,f++;break;case 3:l||(l=n(f,[],0)),l.removed.push(i[m]),m++}return l&&p.push(l),p}function s(t,e){return i(t,0,t.length,e,0,e.length)}function o(t,e){return t===e}},function(t,e,r){"use strict";var n=r(3);r(33);const i=n.a`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,s=document.createElement("template");s.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content)},function(t,e,r){"use strict";var n=r(3);r(33);const i=n.a`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,s=document.createElement("template");s.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content);const o=n.a`
  html {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */

  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Object(n.b)("",o,{moduleId:"lumo-typography"})},function(t,e,r){"use strict";var n=r(3);r(33);const i=n.a`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,s=document.createElement("template");s.innerHTML=`<style>${i.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content)},function(t,e,r){const n=r(63);t.exports=t=>{const e=n("http://www.w3.org/2001/XMLSchema#",{factory:t}),r=n("http://www.w3.org/1999/02/22-rdf-syntax-ns#",{factory:t});return{first:r.first,nil:r.nil,rest:r.rest,langString:r.langString,xsd:e}}},function(t,e){t.exports=function(t,e){return null==t?e:Array.isArray(t)?t:"string"!=typeof t&&t[Symbol.iterator]?[...t]:[t]}},function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));let n,i=null,s=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(t){requestAnimationFrame((function(){s?s(t):(i||(i=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),i.then((function(){t&&t()})))}))}const a="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,o(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,o(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const r=t[e];if(r[a])continue;const n=this.getStyleForCustomStyle(r);if(n){const t=n.__appliedElement||n;l&&l(t),r[a]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,r){const n=r(66);t.exports=function({dataset:t,graph:e,term:r,value:i,factory:s,_context:o}){return new n({dataset:t,graph:e,term:r,value:i,factory:s,_context:o})}},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(27);const i=[];let s;new MutationObserver((function(){const t=a();i.forEach(e=>{o(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const o=function(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=r&&t.removeAttribute("dir")},a=function(){return document.documentElement.getAttribute("dir")},l=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),s||(s=n.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),o(this,a(),null))}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),"dir"!==t)return;const n=a(),s=r===n&&-1===i.indexOf(this),l=!r&&e&&-1===i.indexOf(this),c=r!==n&&e===n;s||l?(this.__subscribe(),o(this,n,r)):c&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,e,r){("dir"!==r||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,r)}_attributeToProperty(t,e,r){"dir"!==t||e?super._attributeToProperty(t,e,r):this.dir=""}__subscribe(t=!0){t?-1===i.indexOf(this)&&i.push(this):i.indexOf(this)>-1&&i.splice(i.indexOf(this),1)}__getNormalizedScrollLeft(t){return n.a.getNormalizedScrollLeft(s,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return n.a.setNormalizedScrollLeft(s,this.getAttribute("dir")||"ltr",t,e)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),"theme"===t&&this._setTheme(r)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=t=>class extends t{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");null!==t&&(this.value=t),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>this._setFocused(!1),!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("keyup",t=>this._onKeyup(t))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){t?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(t){t?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(t){t?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(t){/^( |SpaceBar|Enter)$/.test(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this._setActive(!0))}_onKeyup(){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(13),i=r(27),s=r(9),o=r(6);const a=t=>class extends t{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("click",t=>this._onClick(t)),this._observer=new n.a(this,()=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(t,e,r,n){if(!n&&t){this.setAttribute("aria-orientation",e||"vertical"),this.items.forEach(t=>{e?t.setAttribute("orientation",e):t.removeAttribute("orientation")}),this._setFocusable(r||0);const n=t[r];t.forEach(t=>t.selected=t===n),n&&!n.disabled&&this._scrollToItem(r)}}get focused(){return this.getRootNode().activeElement}_filterItems(t){return t.filter(t=>t._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const e=this._filterItems(t.composedPath())[0];let r;e&&!e.disabled&&(r=this.items.indexOf(e))>=0&&(this.selected=r)}_searchKey(t,e){this._searchReset=s.a.debounce(this._searchReset,o.d.after(500),()=>this._searchBuf=""),this._searchBuf+=e.toLowerCase();this.items.some(t=>0===t.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=e.toLowerCase());const r=1===this._searchBuf.length?t+1:t;return this._getAvailableIndex(r,1,t=>!(t.disabled||this._isItemHidden(t))&&0===t.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(t){if(t.metaKey||t.ctrlKey)return;const e=t.key,r=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(e)&&1===e.length){const t=this._searchKey(r,e);return void(t>=0&&this._focus(t))}let n,i;const s=this._isRTL?-1:1;this._vertical&&"ArrowUp"===e||!this._vertical&&"ArrowLeft"===e?(i=-s,n=r-s):this._vertical&&"ArrowDown"===e||!this._vertical&&"ArrowRight"===e?(i=s,n=r+s):"Home"===e?(i=1,n=0):"End"===e&&(i=-1,n=this.items.length-1),n=this._getAvailableIndex(n,i,t=>!(t.disabled||this._isItemHidden(t))),n>=0&&(this._focus(n),t.preventDefault())}_getAvailableIndex(t,e,r){const n=this.items.length;for(let i=0;"number"==typeof t&&i<n;i++,t+=e||1){t<0?t=n-1:t>=n&&(t=0);if(r(this.items[t]))return t}return-1}_isItemHidden(t){return"none"===getComputedStyle(t).display}_setFocusable(t){t=this._getAvailableIndex(t,1,t=>!t.disabled);const e=this.items[t];this.items.forEach(t=>t.tabIndex=t===e?0:-1)}_focus(t){const e=this.items[t];this.items.forEach(t=>t.focused=t===e),this._setFocusable(t),this._scrollToItem(t),e.focus()}focus(){this._observer&&this._observer.flush();const t=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);t&&t.focus()}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(t){const e=this.items[t];if(!e)return;const r=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),i=(this.items[t+1]||e).getBoundingClientRect(),s=(this.items[t-1]||e).getBoundingClientRect();let o=0;!this._isRTL&&i[r[1]]>=n[r[1]]||this._isRTL&&i[r[1]]<=n[r[1]]?o=i[r[1]]-n[r[1]]:(!this._isRTL&&s[r[0]]<=n[r[0]]||this._isRTL&&s[r[0]]>=n[r[0]])&&(o=s[r[0]]-n[r[0]]),this._scroll(o)}get _vertical(){return"horizontal"!==this.orientation}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const e=this.getAttribute("dir")||"ltr",r=i.a.detectScrollType(),n=i.a.getNormalizedScrollLeft(r,e,this._scrollerElement)+t;i.a.setNormalizedScrollLeft(r,e,this._scrollerElement,n)}}}},function(t,e){class r{equals(t){return!!t&&t.termType===this.termType}}r.prototype.termType="DefaultGraph",r.prototype.value="",t.exports=r},function(t,e){class r{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}r.prototype.termType="NamedNode",t.exports=r},function(t,e,r){const{toLiteral:n}=r(74);function i(t,e){if("string"!=typeof t)throw new Error("Named node must be an IRI string");return e.namedNode(t)}t.exports=function(t,e="Literal",r,s){if(t&&"object"==typeof t&&t.termType)return t;if(t&&"URL"===t.constructor.name)return i(t.toString(),s);if("BlankNode"===e)return function(t,e){if(t&&"string"!=typeof t)throw new Error("Blank node identifier must be a string");return e.blankNode(t)}(t,s);if(null!=t){if("Literal"===e)return function(t,e,r){if("string"==typeof t)return(e=e&&(e.value||e.toString()))&&-1!==e.indexOf(":")&&(e=r.namedNode(e)),r.literal(t.toString(),e);const i=n(t,r);if(!i)throw new Error("The value cannot be converted to a literal node");return i}(t,r,s);if("NamedNode"===e)return i(t,s);throw new Error("unknown type")}}},function(t,e,r){"use strict";r(33);const n=document.createElement("template");n.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(n.content)},function(t,e,r){const n=r(43),i={apply:(t,e,r)=>t(r[0]),get:(t,e)=>t(e)};t.exports=function(t,{factory:e=n}={}){const r=(r="")=>e.namedNode(`${t}${r.raw||r}`);return"undefined"==typeof Proxy?r:new Proxy(r,i)}},function(t,e,r){"use strict";r(37);var n=r(31);Object(n.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._add(),this.queryHandler(this._mq))},queryHandler:function(t){this._setQueryMatches(t.matches)}})},function(t,e){const r=document.createElement("template");r.innerHTML="\n  <style>\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: constant(safe-area-inset-top, 0px);\n      --safe-area-inset-right: constant(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: constant(safe-area-inset-left, 0px);\n    }\n\n    @supports (padding-left: env(safe-area-inset-left)) {\n      html {\n        --safe-area-inset-top: env(safe-area-inset-top, 0px);\n        --safe-area-inset-right: env(safe-area-inset-right, 0px);\n        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n        --safe-area-inset-left: env(safe-area-inset-left, 0px);\n      }\n    }\n  </style>\n",document.head.appendChild(r.content)},function(t,e,r){const n=r(43),i=r(51),s=r(52),o=r(73),a=r(75);class l{constructor({dataset:t,graph:e,term:r,value:o,factory:l=n,_context:c}){if(this.factory=l,this.namespace=i(l),c)return void(this._context=c);const d=r&&s(r)||o&&s(o)||[null];this._context=d.map(r=>new a({dataset:t,graph:e,value:r,factory:this.factory,namespace:this.namespace}))}get term(){const t=this.terms;if(1===t.length)return t[0]}get terms(){return this._context.map(t=>t.term).filter(Boolean)}get value(){const t=this.term;return t&&t.value}get values(){return this.terms.map(t=>t.value)}get dataset(){const t=this.datasets;if(1===t.length)return t[0]}get datasets(){return this._context.map(t=>t.dataset).filter(Boolean)}any(){return l.fromContext(this._context.map(t=>t.clone({})))}isList(){return!!this.term&&(!!this.term.equals(this.namespace.nil)||!!this.out(this.namespace.first).term)}list(){if(this.terms.length>1)throw new Error("iterator over multiple terms is not supported");if(this.term){if("NamedNode"!==this.term.termType&&"BlankNode"!==this.term.termType)return null;if(!this.term.equals(this.namespace.nil)&&!this.out(this.namespace.first).term)return null}let t=this;return{[Symbol.iterator]:()=>({next:()=>{if(!t.term||t.term.equals(this.namespace.nil))return{done:!0};const e=t.out(this.namespace.first);if(e.terms.length>1)throw new Error("Invalid list: multiple values for rdf:first on "+t.value);const r=t.out(this.namespace.rest);if(r.terms.length>1)throw new Error("Invalid list: multiple values for rdf:rest on "+t.value);return t=r,{done:!1,value:e}}})}}toArray(){return this._context.map(t=>l.fromContext(t)).filter(t=>t.terms.some(Boolean))}filter(t){return l.fromContext(this._context.filter(e=>t(l.fromContext(e))))}forEach(t){return this.toArray().forEach(t),this}map(t){return this.toArray().map(t)}toString(){return this.values.join()}node(t,{type:e,datatype:r,language:n}={}){const i=(t=this._toTermArray(t,e,r||n)||[null]).reduce((t,e)=>t.concat(this._context.reduce((t,r)=>t.concat([r.clone({value:e})]),[])),[]);return l.fromContext(i)}blankNode(t){return this.node(t,{type:"BlankNode"})}literal(t,e){return this.node(t,{type:"Literal",datatype:e})}namedNode(t){return this.node(t,{type:"NamedNode"})}in(t){t=this._toTermArray(t);const e=this._context.reduce((e,r)=>e.concat(r.in(t)),[]);return l.fromContext(e)}out(t,e={}){t=this._toTermArray(t);const r=this._context.reduce((r,n)=>r.concat(n.out(t,e)),[]);return l.fromContext(r)}has(t,e){t=this._toTermArray(t),e=this._toTermArray(e);const r=this._context.reduce((r,n)=>r.concat(n.has(t,e)),[]);return l.fromContext(r)}addIn(t,e,r){if(!t)throw new Error("predicate parameter is required");"function"==typeof e&&(r=e,e=null),t=this._toTermArray(t),e=this._toTermArray(e)||[this.factory.blankNode()];const n=this._context.map(r=>r.addIn(t,e));return r&&l.fromContext(n).forEach(r),this}addOut(t,e,r){if(!t)throw new Error("predicate parameter is required");"function"==typeof e&&(r=e,e=null),t=this._toTermArray(t),e=this._toTermArray(e)||[this.factory.blankNode()];const n=this._context.map(r=>r.addOut(t,e));return r&&l.fromContext(n).forEach(r),this}addList(t,e){if(!t||!e)throw new Error("predicate and items parameter is required");return t=this._toTermArray(t),e=this._toTermArray(e),this._context.forEach(r=>r.addList(t,e)),this}deleteIn(t,e){return t=this._toTermArray(t),e=this._toTermArray(e),this._context.forEach(r=>r.deleteIn(t,e)),this}deleteOut(t,e){return t=this._toTermArray(t),e=this._toTermArray(e),this._context.forEach(r=>r.deleteOut(t,e)),this}deleteList(t){if(!t)throw new Error("predicate parameter is required");return t=this._toTermArray(t),this._context.forEach(e=>e.deleteList(t)),this}_toTermArray(t,e,r){return o(t,e,r,this.factory)}static fromContext(t){return new l({_context:s(t),factory:t.factory})}}t.exports=l},function(t,e,r){const n=r(68),i=r(59),s=r(69),o=r(70),a=r(60),l=r(71),c=r(72);const d={namedNode:function(t){return new a(t)},blankNode:function(t){return new n(t)},literal:function(t,e){return"string"==typeof e?-1===e.indexOf(":")?new o(t,e):new o(t,null,d.namedNode(e)):new o(t,null,e)},variable:function(t){return new c(t)},defaultGraph:function(){return d.defaultGraphInstance},triple:function(t,e,r){return d.quad(t,e,r)},quad:function(t,e,r,n){return new l(t,e,r,n||d.defaultGraphInstance)},fromTerm:function(t){return s.call(d,t)},fromQuad:function(t){return s.call(d,t)},defaultGraphInstance:new i};t.exports=d},function(t,e){class r{constructor(t){this.value=t||"b"+ ++r.nextId}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}r.prototype.termType="BlankNode",r.nextId=0,t.exports=r},function(t,e){t.exports=function(t){if(!t)return null;if("BlankNode"===t.termType)return this.blankNode(t.value);if("DefaultGraph"===t.termType)return this.defaultGraph();if("Literal"===t.termType)return this.literal(t.value,t.language||this.namedNode(t.datatype.value));if("NamedNode"===t.termType)return this.namedNode(t.value);if("Quad"===t.termType){const e=this.fromTerm(t.subject),r=this.fromTerm(t.predicate),n=this.fromTerm(t.object),i=this.fromTerm(t.graph);return this.quad(e,r,n,i)}if("Variable"===t.termType)return this.variable(t.value);throw new Error("unknown termType "+t.termType)}},function(t,e,r){const n=r(60);class i{constructor(t,e,r){this.value=t,this.datatype=i.stringDatatype,this.language="",e?(this.language=e,this.datatype=i.langStringDatatype):r&&(this.datatype=r)}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)}}i.prototype.termType="Literal",i.langStringDatatype=new n("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),i.stringDatatype=new n("http://www.w3.org/2001/XMLSchema#string"),t.exports=i},function(t,e,r){const n=r(59);class i{constructor(t,e,r,i){this.subject=t,this.predicate=e,this.object=r,this.graph=i||new n}equals(t){return!!t&&("Quad"===t.termType||!t.termType)&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)}}i.prototype.termType="Quad",i.prototype.value="",t.exports=i},function(t,e){class r{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}r.prototype.termType="Variable",t.exports=r},function(t,e,r){const n=r(61),i=r(52);t.exports=function(t,e,r,s){return null!=t||e?(i(t)||[void 0]).reduce((t,i)=>"object"==typeof i&&i.terms?t.concat(i.terms):(t.push(n(i,e,r,s)),t),[]):t}},function(t,e,r){const n=r(43),i=r(51),{xsd:s}=i(n);function o(t,e=n){return"boolean"!=typeof t?null:e.literal(t.toString(),s("boolean"))}function a(t,e=n){return"number"!=typeof t?null:Number.isInteger(t)?e.literal(t.toString(10),s("integer")):e.literal(t.toString(10),s("double"))}function l(t,e=n){return"string"!=typeof t?null:e.literal(t)}t.exports={booleanToLiteral:o,numberToLiteral:a,stringToLiteral:l,toLiteral:function(t,e=n){return o(t,e)||a(t,e)||l(t,e)}}},function(t,e,r){const n=r(61),i=r(52),{createLanguageMapper:s}=r(76);class o{constructor({dataset:t,graph:e,value:r,factory:i,namespace:s}){this.dataset=t,this.graph=e,this.factory=i,this.namespace=s,this.term=n(r,void 0,void 0,i)}clone({dataset:t=this.dataset,graph:e=this.graph,value:r,factory:n=this.factory,namespace:i=this.namespace}){return new o({dataset:t,graph:e,value:r,factory:n,namespace:i})}has(t,e){return this.matchProperty(i(this.term),t,e,i(this.graph),"subject").map(t=>this.clone({value:t}))}in(t){return this.matchProperty(null,t,i(this.term),i(this.graph),"subject").map(t=>this.clone({value:t}))}out(t,{language:e}={}){let r=this.matchProperty(i(this.term),t,null,i(this.graph),"object");if(void 0!==e){const t="string"==typeof e?[e]:e,n=s(r);r=t.map(n).find(Boolean)||[]}return r.map(t=>this.clone({value:t}))}addIn(t,e){const r=[];return this.term&&e.forEach(e=>{t.forEach(t=>{this.dataset.add(this.factory.quad(e,t,this.term,this.graph))}),r.push(this.clone({value:e}))}),r}addOut(t,e){const r=[];return this.term&&e.forEach(e=>{t.forEach(t=>{this.dataset.add(this.factory.quad(this.term,t,e,this.graph))}),r.push(this.clone({value:e}))}),r}addList(t,e){this.term&&t.forEach(t=>{const r=e.map(()=>this.factory.blankNode());this.dataset.add(this.factory.quad(this.term,t,r[0]||this.namespace.nil,this.graph));for(let t=0;t<r.length;t++)this.dataset.add(this.factory.quad(r[t],this.namespace.first,e[t],this.graph)),this.dataset.add(this.factory.quad(r[t],this.namespace.rest,r[t+1]||this.namespace.nil,this.graph))})}deleteIn(t,e){this.deleteMatch(e,t,i(this.term),i(this.graph))}deleteOut(t,e){this.deleteMatch(i(this.term),t,e,i(this.graph))}deleteList(t){t.forEach(t=>{for(const e of this.dataset.match(this.term,t))this.deleteItems(e)})}deleteItems(t){let e=[t];for(;!e[e.length-1].object.equals(this.namespace.nil);){const t=e[e.length-1].object;e=e.concat([...this.dataset.match(t)])}e.forEach(t=>{this.dataset.delete(t)})}match(t,e,r,n){if(!(t||e||r||n))return[...this.dataset];t=t||[null],e=e||[null],r=r||[null],n=n||[null];const i=[];for(const s of n)for(const n of t)for(const t of e)for(const e of r)for(const r of this.dataset.match(n,t,e,s))i.push(r);return i}matchProperty(t,e,r,n,i){return this.match(t,e,r,n).map(t=>t[i])}deleteMatch(t,e,r,n){this.match(t,e,r,n).forEach(t=>{this.dataset.delete(t)})}}t.exports=o},function(t,e,r){const n=r(43),i=r(51)(n);function s(t,e){const r="Literal"!==e.termType,n=i.langString.equals(e.datatype)||i.xsd.string.equals(e.datatype);if(r||!n)return t;const s=e.language.toLowerCase();return t.has(s)?t.get(s).push(e):t.set(s,[e]),t}t.exports={createLanguageMapper:function(t){const e=t.reduce(s,new Map),r=[...e.entries()];return t=>{const n=t.toLowerCase();if("*"===n)return r[0]&&r[0][1];const i=e.get(n);if(i)return i;const s=r.find(([t])=>t.startsWith(n));return s&&s[1]}}}},function(t,e,r){"use strict";r.r(e);var n=r(10),i=r(78),s=r(3);r(42),r(36),r(49);Object(s.b)("vaadin-app-layout",s.a`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});var o=r(7),a=r(35),l=r(13),c=r(15),d=r(16),h=r(24),u=r(25);r(65);const p=function(){if(window.navigator.userAgent.match(/iPhone|iPad/i)){const t=window.innerHeight,e=window.innerWidth>t,r=document.documentElement.clientHeight;e&&r>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",r-t+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}};p(),window.addEventListener("resize",p);class f extends(Object(d.a)(Object(c.a)(Object(h.b)([u.a],o.a)))){static get template(){return o.b`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
        }

        :host([drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get version(){return"21.0.5"}static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"_primarySectionObserver"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"_drawerOpenedObserver"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Object(a.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new l.a(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new l.a(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new l.a(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}_primarySectionObserver(t){-1!==["navbar","drawer"].indexOf(t)||this.set("primarySection","navbar")}_drawerOpenedObserver(){const t=this.$.drawer;t.removeAttribute("tabindex"),this.overlay&&this.drawerOpened&&(t.setAttribute("tabindex",0),t.focus(),this._updateDrawerHeight()),this.notifyResize()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;0===t?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const t=this.$.navbarTop.getBoundingClientRect(),e=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",t.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",e.height+"px");const r=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",r.width+"px"),this.notifyResize()}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,r=t>e?t+"px":"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",r)}_updateOverlayMode(){const t="true"==this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),e=this.$.drawer;!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","drawer")):(this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label")),this._updateDrawerHeight(),this.overlay!==t&&this.notifyResize()}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t="true"==this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(e=>{e.getAttribute("slot").indexOf("touch-optimized")>-1&&(e.__touchOptimized=!0),t&&e.__touchOptimized?e.setAttribute("slot","navbar-bottom"):e.setAttribute("slot","navbar")}),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(a.a)(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(f.is,f);r(50),r(48);Object(s.b)("vaadin-tab",s.a`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-contrast-60pct);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});var m=r(57);class _ extends(Object(d.a)(Object(c.a)(Object(m.a)(o.a)))){static get template(){return o.b`<slot></slot>`}static get is(){return"vaadin-tab"}static get version(){return"21.0.5"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(t){const e=this.hasAttribute("active");if(super._onKeyup(t),e){const t=this.querySelector("a");t&&t.click()}}}customElements.define(_.is,_);r(62);Object(s.b)("vaadin-tabs",s.a`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) [part='tabs'] {
      justify-content: center;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});var b=r(58);class y extends(Object(d.a)(Object(b.a)(Object(c.a)(Object(h.b)([u.a],o.a))))){static get template(){return o.b`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button"></div>
    `}static get is(){return"vaadin-tabs"}static get version(){return"21.0.5"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Object(a.a)(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let r=t>0?"start":"";r+=t+this._scrollOffset<e?" end":"",1==this.__direction&&(r=r.replace(/start|end/gi,t=>"start"===t?"end":"start")),r?this.setAttribute("overflow",r.trim()):this.removeAttribute("overflow")}}customElements.define(y.is,y);r(37);var g=r(12),v=r(19);class w{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach((function(e){(!t||t.indexOf(e)<0)&&this.setItemSelected(e,!1)}),this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,e){if(null!=t&&e!==this.isSelected(t)){if(e)this.selection.push(t);else{var r=this.selection.indexOf(t);r>=0&&this.selection.splice(r,1)}this.selectCallback&&this.selectCallback(t,e)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}const O={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new w(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(g.a)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=Object(g.a)(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return null==t?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(!this.attrForSelected)return Number(t);for(var e,r=0;e=this.items[r];r++)if(this._valueForItem(e)==t)return r},_indexToValue:function(t){if(!this.attrForSelected)return t;var e=this.items[t];return e?this._valueForItem(e):void 0},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return-1===e?null:e}var r=t[Object(v.b)(this.attrForSelected)];return null!=r?r:t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return Object(g.a)(t).observeNodes((function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(t){for(var e=t.target,r=this.items;e&&e!=this;){var n=r.indexOf(e);if(n>=0){var i=this._indexToValue(n);return void this._itemActivate(i,e)}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}};var S=r(31),P=r(30);Object(S.a)({_template:P.a`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[u.a,O],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});r(64);Object(s.b)("",s.a`
    :host([theme~='margin']) {
      margin: var(--lumo-space-m);
    }

    :host([theme~='padding']) {
      padding: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-ordered-layout"}),Object(s.b)("vaadin-vertical-layout",s.a`
    :host([theme~='spacing-xs']) ::slotted(*) {
      margin-top: var(--lumo-space-xs);
    }

    :host([theme~='spacing-s']) ::slotted(*) {
      margin-top: var(--lumo-space-s);
    }

    :host([theme~='spacing']) ::slotted(*) {
      margin-top: var(--lumo-space-m);
    }

    :host([theme~='spacing-l']) ::slotted(*) {
      margin-top: var(--lumo-space-l);
    }

    :host([theme~='spacing-xl']) ::slotted(*) {
      margin-top: var(--lumo-space-xl);
    }

    /* Compensate for the first item margin, so that there is no gap around the layout itself. */
    :host([theme~='spacing-xs'])::before {
      content: '';
      margin-top: calc(var(--lumo-space-xs) * -1);
    }

    :host([theme~='spacing-s'])::before {
      content: '';
      margin-top: calc(var(--lumo-space-s) * -1);
    }

    :host([theme~='spacing'])::before {
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
    }

    :host([theme~='spacing-l'])::before {
      content: '';
      margin-top: calc(var(--lumo-space-l) * -1);
    }

    :host([theme~='spacing-xl'])::before {
      content: '';
      margin-top: calc(var(--lumo-space-xl) * -1);
    }
  `,{include:["lumo-ordered-layout"],moduleId:"lumo-vertical-layout"});class C extends(Object(d.a)(Object(c.a)(o.a))){static get template(){return o.b`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) ::slotted(*) {
          margin-top: 1em;
        }

        /* Compensate for the first item margin, so that there is no gap around the layout itself. */
        :host([theme~='spacing'])::before {
          content: '';
          margin-top: -1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}static get version(){return"21.0.5"}}customElements.define(C.is,C),Object(s.b)("vaadin-split-layout",s.a`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});var A=r(34);class x extends(Object(d.a)(Object(c.a)(Object(A.a)(Object(h.b)([u.a],o.a))))){static get template(){return o.b`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div
        part="splitter"
        id="splitter"
        on-track="_onHandleTrack"
        on-down="_setPointerEventsNone"
        on-up="_restorePointerEvents"
      >
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get version(){return"21.0.5"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),new l.a(this,this._processChildren)}_processChildren(){this.getEffectiveChildren().forEach((t,e)=>{0===e?(this._primaryChild=t,t.setAttribute("slot","primary")):1==e?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,r){0===(e=Math.max(0,Math.min(e,r)))&&(e=1e-6),t.style.flex="1 1 "+e+"px"}_setPointerEventsNone(t){this._primaryChild&&this._secondaryChild&&(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){this._primaryChild&&this._secondaryChild&&(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;var e="vertical"===this.orientation?"height":"width";if("start"===t.detail.state)return void(this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]});var r="vertical"===this.orientation?t.detail.dy:t.detail.dx;const n="vertical"!==this.orientation&&"rtl"===this.getAttribute("dir")?-r:r;this._setFlexBasis(this._primaryChild,this._startSize.primary+n,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-n,this._startSize.container),this.notifyResize(),"end"===t.detail.state&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){super.notifyResize()}}customElements.define(x.is,x);var E=r(44);const T=0,j=1,k=2,N=3,I="Data Graph",z="Shapes Graph",L="Validation Report";class D extends(Object(i.a)(E.a,n.b)){static get styles(){return n.c`
      :host {
        display: block;
        height: 100vh;
      }

      vaadin-app-layout {
        display: flex;
        flex-flow: column;
      }

      vaadin-app-layout::part(drawer) {
        z-index: 10;
      }

      vaadin-tabs {
        width: 100%;
      }

      vaadin-tab.report.valid {
        color: lightseagreen;
      }

      vaadin-tab.report.invalid {
        color: orangered;
      }

      vaadin-tab:last-child {
        margin-left: auto;
      }

      :host(:not([wide])) vaadin-tab:first-child {
        margin-left: 72px;
      }

      :host([wide]) vaadin-tab > span {
        display: none;
      }

      iron-pages {
        height: 100%;
        margin: 0 auto;
        padding: 0 20px 0;
      }

      vaadin-split-layout#top-split {
        height: 100%;
      }

      iron-pages#narrow {
        height: 85%;
        max-width: 1000px;
        padding-top: 20px;
        flex: 1;
      }

      section {
        height: 100%;
      }

      vaadin-button.navbar {
        margin-right: 10px;
      }

      #about-drawer > * {
        width: 100%;
      }

      [hidden] {
        display: none;
      }

      graph-editor h2 {
        background: white;
        line-height: 70px;
        margin: 0;
      }
    `}static get properties(){return{page:{type:Number},reportClass:{type:String},reportIcon:{type:String},sharingLink:{type:String},sharingLinkShortened:{type:Boolean},sharingDialogOpen:{type:Boolean},__wideDisplay:{type:Boolean,reflect:!0,attribute:"wide"}}}constructor(){super(),this.reportIcon="vaadin:bug-o"}connectedCallback(){super.connectedCallback(),r.e(18).then(r.bind(null,421)),r.e(19).then(r.bind(null,248)),r.e(25).then(r.bind(null,249)),Promise.all([r.e(4),r.e(29)]).then(r.bind(null,418)),r.e(22).then(r.bind(null,423)),Promise.all([r.e(1),r.e(0),r.e(4),r.e(11),r.e(15)]).then(r.bind(null,422)),r.e(30).then(r.bind(null,403)),E.a.dispatch.playground.restoreState()}render(){return n.d`
      <iron-media-query
        query="(min-width: 800px)"
        @query-matches-changed="${this.__setWideDisplay}"
      ></iron-media-query>

      <vaadin-app-layout>
        <vaadin-drawer-toggle
          ?hidden="${this.__wideDisplay}"
          slot="navbar [touch-optimized]"
        ></vaadin-drawer-toggle>
        <vaadin-tabs
          slot="navbar"
          theme="centered"
          .selected="${this.page}"
          @selected-changed="${t=>this.__pageSelected(t.detail.value)}"
        >
          <vaadin-tab theme="icon-on-top" title="${z}">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>${z}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top" title="${I}">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>${I}</span>
          </vaadin-tab>
          <vaadin-tab
            class="report ${this.reportClass}"
            theme="icon-on-top"
            title="${L}"
          >
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>${L}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top">
            <iron-icon icon="vaadin:question-circle-o"></iron-icon>
            <span>About</span>
          </vaadin-tab>
        </vaadin-tabs>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="Share"
          @click="${this.__openSharingDialog}"
        >
          <iron-icon icon="vaadin:connect"></iron-icon>
        </vaadin-button>
        <vaadin-button
          class="navbar"
          slot="navbar [touch-optimized]"
          title="Open in Shaperone playground"
          @click="${this.__openPlayground}"
        >
          <iron-icon icon="vaadin:form"></iron-icon>
        </vaadin-button>

        <iron-pages selected="${this.page}" slot="drawer">
          <editor-drawer model="shapesGraph"></editor-drawer>
          <editor-drawer model="dataGraph"></editor-drawer>
          <validation-drawer></validation-drawer>
          <vaadin-vertical-layout id="about-drawer">
            <vaadin-button @click="${this.__reset}">
              <iron-icon icon="vaadin:trash" slot="prefix"></iron-icon>
              Reset
            </vaadin-button>
            <vaadin-button @click="${this.__openCode}">
              <iron-icon icon="vaadin:code" slot="prefix"></iron-icon>
              GitHub
            </vaadin-button>
          </vaadin-vertical-layout>
        </iron-pages>

        ${this.__wideDisplay?this.__renderWide():this.__renderNarrow()}
      </vaadin-app-layout>

      <vaadin-dialog
        ?opened="${this.sharingDialogOpen}"
        .renderer="${this.__renderSharingDialog(this)}"
        @opened-changed="${t=>{this.sharingDialogOpen=t.detail.value}}"
      >
      </vaadin-dialog>
    `}__renderWide(){Promise.all([r.e(0),r.e(6)]).then(r.bind(null,419));const t=this.page===N?1:0;return n.d`
      <iron-pages selected="${t}">
        <vaadin-split-layout id="top-split" orientation="vertical">
          <vaadin-split-layout style="height: 60%">
            <graph-editor
              style="width: 50%"
              model="shapesGraph"
              @focus="${()=>this.__pageSelected(T)}"
            >
              <h2 slot="header">
                ${z}
              </h2>
            </graph-editor>
            <graph-editor
              style="width: 50%"
              model="dataGraph"
              @focus="${()=>this.__pageSelected(j)}"
            >
              <h2 slot="header">
                ${I}
              </h2>
            </graph-editor>
          </vaadin-split-layout>
          <validation-report
            style="height: 40%"
            @click="${()=>this.__pageSelected(k)}"
          ></validation-report>
        </vaadin-split-layout>
        <section>
          ${this.__renderAbout()}
        </section>
      </iron-pages>
    `}__renderNarrow(){return n.d`
      <iron-pages
        id="narrow"
        selected="${this.page}"
        @iron-select="${this.__loadPage}"
      >
        <section id="shapes-graph">
          <graph-editor model="shapesGraph"></graph-editor>
        </section>
        <section id="data-graph">
          <graph-editor model="dataGraph"></graph-editor>
        </section>
        <section id="validation-report">
          <validation-report></validation-report>
        </section>
        <section>
          ${this.__renderAbout()}
        </section>
      </iron-pages>
    `}__renderAbout(){return n.d`
      <zero-md src="./README.md"> </zero-md>
      <h2>Changelog</h2>
      <zero-md src="./CHANGELOG.md">
        <template>
          <style>
            h1 {
              display: none;
            }
          </style>
        </template>
      </zero-md>
      <p>Copyright © 2021 Zazuko GmbH</p>
    `}__renderSharingDialog(t){return e=>{var r;let i;e.firstElementChild?i=e.firstElementChild:(i=document.createElement("div"),e.appendChild(i)),Object(n.e)(n.d`
          <vaadin-text-field
            style="width:500px"
            readonly
            autoselect
            label="Copy this URL to share playground"
            .value="${t.sharingLink}"
          ></vaadin-text-field>
          <br />
          <vaadin-button
            ?disabled="${t.sharingLinkShortened}"
            @click="${t.__shortenSharingLink.bind(t)}"
          >
            Shorten
          </vaadin-button>
        `,i),null===(r=i.querySelector("vaadin-text-field"))||void 0===r||r.focus()}}mapState(t){let e="";return t.validation.conforms?e="valid":!1===t.validation.conforms&&(e="invalid"),{reportClass:e,reportIcon:t.validation.conforms?"vaadin:bug-o":"vaadin:bug",page:t.playground.page,shaperoneLink:t.playground.shaperone,sharingLink:t.playground.sharingLink,sharingLinkShortened:!1}}__pageSelected(t){E.a.dispatch.playground.switchPage(t)}__reset(){localStorage.removeItem(document.location.hostname),document.location.reload()}__loadPage(t){"validation-report"===t.detail.item.id&&Promise.all([r.e(0),r.e(6)]).then(r.bind(null,419))}__openPlayground(){window.open(this.shaperoneLink,"shaperone")}__openCode(){window.open("https://github.com/zazuko/shacl-playground","_blank")}__openSharingDialog(){this.sharingDialogOpen=!0}async __shortenSharingLink(){if(this.sharingLinkShortened)return;this.sharingLinkShortened=!0;const t=await fetch("https://s.zazuko.com/api/v1/shorten/",{method:"POST",body:new URLSearchParams({url:this.sharingLink})});this.sharingLink=await t.text()}__setWideDisplay(t){this.__wideDisplay=t.detail.value}}customElements.define("shacl-playground",D)},function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(18);const i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),c=Symbol(),d=Symbol();function h(t,e){return class extends e{constructor(...t){super(...t),this[d]=this[d].bind(this),this[s]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[o](),this[l]()}disconnectedCallback(){this[c](),this[a](),super.disconnectedCallback&&super.disconnectedCallback()}[s](){this[i]=this.mapEvents?this.mapEvents():{}}[o](){for(const t in this[i])this.addEventListener(t,this[i][t],!1)}[a](){for(const t in this[i])this.removeEventListener(t,this[i][t],!1)}[l](){t.addEventListener(n.b,this[d]),this[d]()}[c](){t.removeEventListener(n.b,this[d])}[d](){this.mapState&&Object.assign(this,this.mapState(t.state))}}}}]);
//# sourceMappingURL=cafb9c50823a24449227.js.map