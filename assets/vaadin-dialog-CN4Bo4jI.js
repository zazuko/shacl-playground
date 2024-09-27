import{o as b,O as w,p as C}from"./templates-Dfdgit8i.js";import{i as g,r as v,a as z,T as x,h as E,E as $,P as L}from"./index-DpEFpdLU.js";const B=g`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;v("vaadin-dialog-overlay",[b,B],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */function c(a){return a.touches?a.touches[0]:a}function y(a){return a.clientX>=0&&a.clientX<=window.innerWidth&&a.clientY>=0&&a.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const T=a=>class extends a{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:z},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const o=this.$.overlay.$.resizerContainer,i=e.target===o,r=e.offsetX>o.clientWidth||e.offsetY>o.clientHeight,n=e.target===this.$.overlay.$.content,s=e.composedPath().some((l,d)=>{if(!l.classList)return!1;const p=l.classList.contains(this.__dragHandleClassName||"draggable"),m=l.classList.contains("draggable-leaf-only"),f=d===0;return m&&f||p&&(!m||f)});if(i&&!r||n||s){s||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=c(e);this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const o=c(e);if(y(o)){const i=this._originalBounds.top+(o.pageY-this._originalMouseCoords.top),r=this._originalBounds.left+(o.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:i,left:r})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */v("vaadin-dialog-overlay",g`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    :host([resizable]) [part='title'] {
      cursor: move;
      -webkit-user-select: none;
      user-select: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const O=a=>class extends a{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const o=document.createElement("div");this._resizeListeners.start[e]=i=>this._startResize(i,e),this._resizeListeners.resize[e]=i=>this._resize(i,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&o.classList.add("edge"),o.classList.add("resizer"),o.classList.add(e),o.addEventListener("mousedown",this._resizeListeners.start[e]),o.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(o)})}_startResize(e,o){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const i=c(e);this._originalMouseCoords={top:i.pageY,left:i.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[o]),window.addEventListener("touchmove",this._resizeListeners.resize[o]),window.addEventListener("mouseup",this._resizeListeners.stop[o]),window.addEventListener("touchend",this._resizeListeners.stop[o]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,o){const i=c(e);y(i)&&o.split("").forEach(n=>{switch(n){case"n":{const s=this._originalBounds.height-(i.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top);s>40&&this.$.overlay.setBounds({top:l,height:s});break}case"e":{const s=this._originalBounds.width+(i.pageX-this._originalMouseCoords.left);s>40&&this.$.overlay.setBounds({width:s});break}case"s":{const s=this._originalBounds.height+(i.pageY-this._originalMouseCoords.top);s>40&&this.$.overlay.setBounds({height:s});break}case"w":{const s=this._originalBounds.width-(i.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);s>40&&this.$.overlay.setBounds({left:l,width:s});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:o,height:i}=getComputedStyle(this.$.overlay.$.overlay),r=this.$.overlay.$.content;r.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:n,height:s}=getComputedStyle(r);return r.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:o,height:i,contentWidth:n,contentHeight:s}}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */v("vaadin-dialog-overlay",g`
    [part='header'],
    [part='header-content'],
    [part='footer'] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: none;
      pointer-events: none;
      z-index: 1;
    }

    [part='header'] {
      flex-wrap: nowrap;
    }

    ::slotted([slot='header-content']),
    ::slotted([slot='title']),
    ::slotted([slot='footer']) {
      display: contents;
      pointer-events: auto;
    }

    ::slotted([slot='title']) {
      font: inherit !important;
      overflow-wrap: anywhere;
    }

    [part='header-content'] {
      flex: 1;
    }

    :host([has-title]) [part='header-content'],
    [part='footer'] {
      justify-content: flex-end;
    }

    :host(:not([has-title]):not([has-header])) [part='header'],
    :host(:not([has-header])) [part='header-content'],
    :host(:not([has-title])) [part='title'],
    :host(:not([has-footer])) [part='footer'] {
      display: none !important;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      height: auto;
    }

    @media (min-height: 320px) {
      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
        flex: 1;
        overflow: auto;
      }
    }

    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let h;class _ extends w{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!h){h=super.template.cloneNode(!0);const t=h.content.querySelector('[part="content"]'),e=h.content.querySelector('[part="overlay"]'),o=document.createElement("section");o.id="resizerContainer",o.classList.add("resizer-container"),o.appendChild(t),e.appendChild(o);const i=document.createElement("header");i.setAttribute("part","header"),o.insertBefore(i,t);const r=document.createElement("div");r.setAttribute("part","title"),i.appendChild(r);const n=document.createElement("slot");n.setAttribute("name","title"),r.appendChild(n);const s=document.createElement("div");s.setAttribute("part","header-content"),i.appendChild(s);const l=document.createElement("slot");l.setAttribute("name","header-content"),s.appendChild(l);const d=document.createElement("footer");d.setAttribute("part","footer"),o.appendChild(d);const p=document.createElement("slot");p.setAttribute("name","footer"),d.appendChild(p)}return h}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}static get properties(){return{modeless:Boolean,withBackdrop:Boolean,headerTitle:String,headerRenderer:Function,footerRenderer:Function}}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(t){const e=document.createElement("div");return e.setAttribute("slot",t),e}__clearContainer(t){t.innerHTML="",delete t._$litPart$}__initContainer(t,e){return t?this.__clearContainer(t):t=this.__createContainer(e),t}_headerFooterRendererChange(t,e,o){const i=this.__oldHeaderRenderer!==t;this.__oldHeaderRenderer=t;const r=this.__oldFooterRenderer!==e;this.__oldFooterRenderer=e;const n=this._oldOpenedFooterHeader!==o;this._oldOpenedFooterHeader=o,this.toggleAttribute("has-header",!!t),this.toggleAttribute("has-footer",!!e),i&&(t?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),r&&(e?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(t&&(i||n)||e&&(r||n))&&o&&this.requestContentUpdate()}_headerTitleChanged(t,e){this.toggleAttribute("has-title",!!t),e&&(t||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=t}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(t){const e=this.$.overlay,o={...t};e.style.position!=="absolute"&&(e.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow()),Object.keys(o).forEach(i=>{typeof o[i]=="number"&&(o[i]=`${o[i]}px`)}),Object.assign(e.style,o)}getBounds(){const t=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),o=t.top-e.top,i=t.left-e.left,r=t.width,n=t.height;return{top:o,left:i,width:r,height:n}}__forceSafariReflow(){const t=this.$.resizerContainer.scrollTop,e=this.$.overlay;e.style.display="block",requestAnimationFrame(()=>{e.style.display="",this.$.resizerContainer.scrollTop=t})}__updateOverflow(){let t="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const o=this.$.content;o.scrollTop>0&&(t+=" top"),o.scrollTop<o.scrollHeight-o.clientHeight&&(t+=" bottom")}const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):e.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}}customElements.define(_.is,_);class u extends x($(T(O(L)))){static get template(){return E`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,headerTitle:String,headerRenderer:Function,footerRenderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),C(this)}requestContentUpdate(){this.$&&this.$.overlay.requestContentUpdate()}_rendererChanged(t,e,o){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:e,footerRenderer:o})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,e){t||e?this.$.overlay.setAttribute("aria-label",t||e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(t){t.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(t){this.noCloseOnOutsideClick&&t.preventDefault()}_handleEscPress(t){this.noCloseOnEsc&&t.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(u.is,u);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const S=u;console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-dialog" is deprecated. Use "@vaadin/dialog" instead.');export{u as Dialog,S as DialogElement,_ as DialogOverlay};
