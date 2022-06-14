/*! For license information please see 76d066b291755d4af4e7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{418:function(e,t,s){"use strict";s.r(t),s.d(t,"DialogElement",(function(){return b}));var i=s(3);s(36),s(173);Object(i.b)("vaadin-dialog-overlay",i.a`
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

    /* No padding */
    :host([theme~='no-padding']) [part='content'] {
      padding: 0;
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
  `,{include:["lumo-overlay"],moduleId:"lumo-dialog"});var o=s(7),r=s(25),n=s(24),a=s(250),l=s(16),d=s(174),h=s(56);function u(e){return e.touches?e.touches[0]:e}function c(e){return e.clientX>=0&&e.clientX<=window.innerWidth&&e.clientY>=0&&e.clientY<=window.innerHeight}const p=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),g=e=>class extends e{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:p},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!("touchstart"===e.type&&e.touches.length>1)&&this.draggable&&(0===e.button||e.touches)){const t=this.$.overlay.$.resizerContainer,s=e.target===t,i=e.offsetX>t.clientWidth||e.offsetY>t.clientHeight,o=e.target===this.$.overlay.$.content,r=e.composedPath().some((e,t)=>{if(e.classList){const s=e.classList.contains(this.__dragHandleClassName||"draggable"),i=e.classList.contains("draggable-leaf-only"),o=0===t;return i&&o||s&&(!i||o)}});if(s&&!i||o||r){!r&&e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const t=u(e);this._originalMouseCoords={top:t.pageY,left:t.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),"absolute"!==this.$.overlay.$.overlay.style.position&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const t=u(e);if(c(t)){const e=this._originalBounds.top+(t.pageY-this._originalMouseCoords.top),s=this._originalBounds.left+(t.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:e,left:s})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};Object(i.b)("vaadin-dialog-overlay",i.a`
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
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
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
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const v=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const t=document.createElement("div");this._resizeListeners.start[e]=t=>this._startResize(t,e),this._resizeListeners.resize[e]=t=>this._resize(t,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),1===e.length&&t.classList.add("edge"),t.classList.add("resizer"),t.classList.add(e),t.addEventListener("mousedown",this._resizeListeners.start[e]),t.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(t)})}_startResize(e,t){if(!("touchstart"===e.type&&e.touches.length>1)&&(0===e.button||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const s=u(e);this._originalMouseCoords={top:s.pageY,left:s.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[t]),window.addEventListener("touchmove",this._resizeListeners.resize[t]),window.addEventListener("mouseup",this._resizeListeners.stop[t]),window.addEventListener("touchend",this._resizeListeners.stop[t]),"absolute"!==this.$.overlay.$.overlay.style.position&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,t){const s=u(e);if(c(s)){const e=40;t.split("").forEach(t=>{switch(t){case"n":{const t=this._originalBounds.height-(s.pageY-this._originalMouseCoords.top),i=this._originalBounds.top+(s.pageY-this._originalMouseCoords.top);t>e&&this.$.overlay.setBounds({top:i,height:t});break}case"e":{const t=this._originalBounds.width+(s.pageX-this._originalMouseCoords.left);t>e&&this.$.overlay.setBounds({width:t});break}case"s":{const t=this._originalBounds.height+(s.pageY-this._originalMouseCoords.top);t>e&&this.$.overlay.setBounds({height:t});break}case"w":{const t=this._originalBounds.width-(s.pageX-this._originalMouseCoords.left),i=this._originalBounds.left+(s.pageX-this._originalMouseCoords.left);t>e&&this.$.overlay.setBounds({left:i,width:t});break}}}),this.$.overlay.notifyResize()}}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:t,height:s}=getComputedStyle(this.$.overlay.$.overlay),i=this.$.overlay.$.content;i.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:o,height:r}=getComputedStyle(i);return i.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:t,height:s,contentWidth:o,contentHeight:r}}};let y;Object(i.b)("vaadin-dialog-overlay",i.a`
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
  `,{moduleId:"vaadin-dialog-overlay-styles"});class m extends(Object(n.b)(r.a,a.a)){static get is(){return"vaadin-dialog-overlay"}static get template(){if(!y){y=super.template.cloneNode(!0);const e=y.content.querySelector('[part="content"]'),t=y.content.querySelector('[part="overlay"]'),s=document.createElement("div");s.id="resizerContainer",s.classList.add("resizer-container"),s.appendChild(e),t.appendChild(s)}return y}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}setBounds(e){const t=this.$.overlay,s=Object.assign({},e);"absolute"!==t.style.position&&(t.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow());for(const e in s)"number"==typeof s[e]&&(s[e]=s[e]+"px");Object.assign(t.style,s)}getBounds(){const e=this.$.overlay.getBoundingClientRect(),t=this.getBoundingClientRect();return{top:e.top-t.top,left:e.left-t.left,width:e.width,height:e.height}}__forceSafariReflow(){const e=this.$.resizerContainer.scrollTop,t=this.$.overlay;t.style.display="block",requestAnimationFrame(()=>{t.style.display="",this.$.resizerContainer.scrollTop=e})}}customElements.define(m.is,m);class b extends(Object(h.a)(Object(l.a)(g(v(o.a))))){static get template(){return o.b`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get version(){return"21.0.5"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},renderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_rendererChanged(renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),Object(d.a)(this)}requestContentUpdate(){this.$.overlay.requestContentUpdate()}render(){console.warn("WARNING: Since Vaadin 21, render() is deprecated. Please use requestContentUpdate() instead."),this.requestContentUpdate()}_rendererChanged(e){this.$.overlay.setProperties({owner:this,renderer:e})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(b.is,b)}}]);
//# sourceMappingURL=76d066b291755d4af4e7.js.map