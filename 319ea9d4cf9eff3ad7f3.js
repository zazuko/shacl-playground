/*! For license information please see 319ea9d4cf9eff3ad7f3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,19],{101:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));let i=!1;window.addEventListener("keydown",()=>{i=!0},{capture:!0}),window.addEventListener("mousedown",()=>{i=!1},{capture:!0});const r=t=>class extends((t=>class extends t{static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}}}})(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this.contains(t.relatedTarget)||this._focus():-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",()=>this._setFocused(!1)),super.ready(),this.addEventListener("keydown",t=>{!t.defaultPrevented&&9===t.keyCode&&t.shiftKey&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0))}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&i?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0)}click(){this.disabled||super.click()}}},110:function(t,e,o){"use strict";var i=o(3);o(42),o(50),o(36),o(48),o(49);Object(i.b)("vaadin-button",i.a`
    :host {
      /* Sizing */
      --lumo-button-size: var(--lumo-size-m);
      min-width: calc(var(--lumo-button-size) * 2);
      height: var(--lumo-button-size);
      padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
      margin: var(--lumo-space-xs) 0;
      box-sizing: border-box;
      /* Style */
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 500;
      color: var(--_lumo-button-color, var(--lumo-primary-text-color));
      background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-m);
      cursor: var(--lumo-clickable-cursor);
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Set only for the internal parts so we don’t affect the host vertical alignment */
    [part='label'],
    [part='prefix'],
    [part='suffix'] {
      line-height: var(--lumo-line-height-xs);
    }

    [part='label'] {
      padding: calc(var(--lumo-button-size) / 6) 0;
    }

    :host([theme~='small']) {
      font-size: var(--lumo-font-size-s);
      --lumo-button-size: var(--lumo-size-s);
    }

    :host([theme~='large']) {
      font-size: var(--lumo-font-size-l);
      --lumo-button-size: var(--lumo-size-l);
    }

    /* This needs to be the last selector for it to take priority */
    :host([disabled][disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      background-color: var(--lumo-contrast-5pct);
    }

    /* For interaction states */
    :host::before,
    :host::after {
      content: '';
      /* We rely on the host always being relative */
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    /* Hover */

    :host(:hover)::before {
      opacity: 0.05;
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([active]):hover)::before {
        opacity: 0;
      }
    }

    /* Active */

    :host::after {
      transition: opacity 1.4s, transform 0.1s;
      filter: blur(8px);
    }

    :host([active])::before {
      opacity: 0.1;
      transition-duration: 0s;
    }

    :host([active])::after {
      opacity: 0.1;
      transition-duration: 0s, 0s;
      transform: scale(0);
    }

    /* Keyboard focus */

    :host([focus-ring]) {
      box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Types (primary, tertiary, tertiary-inline */

    :host([theme~='tertiary']),
    :host([theme~='tertiary-inline']) {
      background-color: transparent !important;
      transition: opacity 0.2s;
      min-width: 0;
    }

    :host([theme~='tertiary'])::before,
    :host([theme~='tertiary-inline'])::before {
      display: none;
    }

    :host([theme~='tertiary']) {
      padding: 0 calc(var(--lumo-button-size) / 6);
    }

    @media (hover: hover) {
      :host([theme*='tertiary']:not([active]):hover) {
        opacity: 0.8;
      }
    }

    :host([theme~='tertiary'][active]),
    :host([theme~='tertiary-inline'][active]) {
      opacity: 0.5;
      transition-duration: 0s;
    }

    :host([theme~='tertiary-inline']) {
      margin: 0;
      height: auto;
      padding: 0;
      line-height: inherit;
      font-size: inherit;
    }

    :host([theme~='tertiary-inline']) [part='label'] {
      padding: 0;
      overflow: visible;
      line-height: inherit;
    }

    :host([theme~='primary']) {
      background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
      color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
      font-weight: 600;
      min-width: calc(var(--lumo-button-size) * 2.5);
    }

    :host([theme~='primary'][disabled]) {
      background-color: var(--lumo-primary-color-50pct);
      color: var(--lumo-primary-contrast-color);
    }

    :host([theme~='primary']:hover)::before {
      opacity: 0.1;
    }

    :host([theme~='primary'][active])::before {
      background-color: var(--lumo-shade-20pct);
    }

    @media (pointer: coarse) {
      :host([theme~='primary'][active])::before {
        background-color: var(--lumo-shade-60pct);
      }

      :host([theme~='primary']:not([active]):hover)::before {
        opacity: 0;
      }
    }

    :host([theme~='primary'][active])::after {
      opacity: 0.2;
    }

    /* Colors (success, error, contrast) */

    :host([theme~='success']) {
      color: var(--lumo-success-text-color);
    }

    :host([theme~='success'][theme~='primary']) {
      background-color: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
    }

    :host([theme~='success'][theme~='primary'][disabled]) {
      background-color: var(--lumo-success-color-50pct);
    }

    :host([theme~='error']) {
      color: var(--lumo-error-text-color);
    }

    :host([theme~='error'][theme~='primary']) {
      background-color: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
    }

    :host([theme~='error'][theme~='primary'][disabled]) {
      background-color: var(--lumo-error-color-50pct);
    }

    :host([theme~='contrast']) {
      color: var(--lumo-contrast);
    }

    :host([theme~='contrast'][theme~='primary']) {
      background-color: var(--lumo-contrast);
      color: var(--lumo-base-color);
    }

    :host([theme~='contrast'][theme~='primary'][disabled]) {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Icons */

    [part] ::slotted(vaadin-icon),
    [part] ::slotted(iron-icon) {
      display: inline-block;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    [part] ::slotted(vaadin-icon[icon^='vaadin:']),
    [part] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    [part='prefix'] {
      margin-left: -0.25em;
      margin-right: 0.25em;
    }

    [part='suffix'] {
      margin-left: 0.25em;
      margin-right: -0.25em;
    }

    /* Icon-only */

    :host([theme~='icon']:not([theme~='tertiary-inline'])) {
      min-width: var(--lumo-button-size);
      padding-left: calc(var(--lumo-button-size) / 4);
      padding-right: calc(var(--lumo-button-size) / 4);
    }

    :host([theme~='icon']) [part='prefix'],
    :host([theme~='icon']) [part='suffix'] {
      margin-left: 0;
      margin-right: 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='prefix'] {
      margin-left: 0.25em;
      margin-right: -0.25em;
    }

    :host([dir='rtl']) [part='suffix'] {
      margin-left: -0.25em;
      margin-right: 0.25em;
    }

    :host([dir='rtl'][theme~='icon']) [part='prefix'],
    :host([dir='rtl'][theme~='icon']) [part='suffix'] {
      margin-left: 0;
      margin-right: 0;
    }
  `,{moduleId:"lumo-button"})},133:function(t,e,o){"use strict";o.d(e,"a",(function(){return p}));var i=o(7),r=o(9),a=o(6),n=o(3);Object(n.b)("",n.a`
    :host {
      display: inline-flex;
      outline: none;
    }

    :host::before {
      content: '\\2003';
      width: 0;
      display: inline-block;
      /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
    }

    :host([hidden]) {
      display: none !important;
    }

    .vaadin-text-field-container,
    .vaadin-text-area-container {
      display: flex;
      flex-direction: column;
      min-width: 100%;
      max-width: 100%;
      width: var(--vaadin-text-field-default-width, 12em);
    }

    [part='label']:empty {
      display: none;
    }

    [part='input-field'] {
      display: flex;
      align-items: center;
      flex: auto;
    }

    .vaadin-text-field-container [part='input-field'] {
      flex-grow: 0;
    }

    /* Reset the native input styles */
    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea) {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      min-width: 0;
      font: inherit;
      font-size: 1em;
      line-height: normal;
      color: inherit;
      background-color: transparent;
      /* Disable default invalid style in Firefox */
      box-shadow: none;
    }

    [part='input-field'] ::slotted(*) {
      flex: none;
    }

    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea),
    [part='input-field'] ::slotted([part='value']) {
      flex: auto;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    [part='input-field'] ::slotted(textarea) {
      resize: none;
    }

    [part='clear-button'] {
      display: none;
      cursor: default;
    }

    [part='clear-button']::before {
      content: '✕';
    }

    :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
      display: block;
    }
  `,{moduleId:"vaadin-text-field-shared-styles"});const s={default:["autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},l={DEFAULT:"default",ACCESSIBLE:"accessible"},d=t=>class extends t{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_hostPropsChanged("+s.default.join(", ")+")","_hostAccessiblePropsChanged("+s.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot)return;const t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return t||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(t){if(this.preventInvalidInput){const t=this.inputElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=r.a.debounce(this._inputDebouncer,a.d.after(200),()=>{this.removeAttribute("input-prevented")}))}t.__fromClearButton||(this.__userInput=!0),this.value=t.target.value,this.__userInput=!1}_onChange(t){if(this._valueClearing)return;const e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}_valueChanged(t,e){""===t&&void 0===e||(""!==t&&null!=t?this.setAttribute("has-value",""):this.removeAttribute("has-value"),this.__userInput||(void 0!==t?this.inputElement.value=t:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(t){this._setOrToggleAttribute("has-label",!!t,this)}_helperTextChanged(t){this._setOrToggleAttribute("has-helper",!!t,this)}_errorMessageChanged(t){this._setOrToggleAttribute("has-error-message",!!t,this)}_onHelperSlotChange(){const t=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=t.filter(t=>3!==t.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){const t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),t&&!this._slottedInput?(this._validateSlottedValue(t),this._addInputListeners(t),this._slottedInput=t):!t&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(l).map(t=>l[t]).forEach(t=>this._propagateHostAttributes(s[t].map(t=>this[t]),t))}_hostPropsChanged(...t){this._propagateHostAttributes(t,l.DEFAULT)}_hostAccessiblePropsChanged(...t){this._propagateHostAttributes(t,l.ACCESSIBLE)}_validateSlottedValue(t){t.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),t.value="")}_propagateHostAttributes(t,e){const o=this.inputElement,i=s[e];e===l.ACCESSIBLE?i.forEach((e,i)=>{this._setOrToggleAttribute(e,t[i],o),this._setOrToggleAttribute("aria-"+e,!!t[i]&&"true",o)}):i.forEach((e,i)=>{this._setOrToggleAttribute(e,t[i],o)})}_setOrToggleAttribute(t,e,o){t&&o&&(e?o.setAttribute(t,"boolean"==typeof e?"":e):o.removeAttribute(t))}_constraintsChanged(t,e,o,i){this.invalid&&(t||e||o||i?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange),t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange),t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);const t=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(t),this._slottedInput&&this._addInputListeners(this._slottedInput),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var e=d._uniqueId=1+d._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._labelId=`${this.constructor.is}-label-${e}`,this._helperTextId=`${this.constructor.is}-helper-${e}`,this._inputId=`${this.constructor.is}-input-${e}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(t){}}))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1;const e=new Event("input",{bubbles:!0,composed:!0});e.__fromClearButton=!0;const o=new Event("change",{bubbles:!this._slottedInput});o.__fromClearButton=!0,this.inputElement.dispatchEvent(e),this.inputElement.dispatchEvent(o)}_onKeyDown(t){if(27===t.keyCode&&this.clearButtonVisible){const t=!!this.value;this.clear(),t&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(t)&&t.preventDefault()}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__enabledCharRegExp.test(t.key)}_onPaste(t){if(this._enabledCharPattern){const e=(t.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onDrop(t){if(this._enabledCharPattern){const e=t.dataTransfer.getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onBeforeInput(t){this._enabledCharPattern&&t.data&&!this.__enabledTextRegExp.test(t.data)&&t.preventDefault()}__enabledCharPatternChanged(t){this.__enabledCharRegExp=t&&new RegExp("^"+t+"$"),this.__enabledTextRegExp=t&&new RegExp("^"+t+"*$")}_getActiveErrorId(t,e,o,i,r,a){const n=[];(i||a)&&n.push(r),e&&t&&n.push(o),this._setOrToggleAttribute("aria-describedby",n.join(" "),this.focusElement)}_getActiveLabelId(t,e,o){let i=o;t&&(i=`${e} ${o}`),this.focusElement.setAttribute("aria-labelledby",i)}_getErrorMessageAriaHidden(t,e,o){return(!(e&&t?o:void 0)).toString()}_dispatchIronResizeEventIfNeeded(t,e){const o="__previous"+t;void 0!==this[o]&&this[o]!==e&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[o]=e}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=r.a.debounce(this.__observeOffsetHeightDebouncer,a.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}};var h=o(101),u=o(15),c=o(16);class p extends(Object(c.a)(d(Object(h.a)(Object(u.a)(i.a))))){static get template(){return i.b`
      <style include="vaadin-text-field-shared-styles"></style>

      <div class="vaadin-text-field-container">
        <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

        <div part="input-field" id="[[_inputId]]">
          <slot name="prefix"></slot>

          <slot name="input">
            <input part="value" />
          </slot>

          <div part="clear-button" id="clearButton" role="button" aria-label$="[[i18n.clear]]"></div>
          <slot name="suffix"></slot>
        </div>

        <div part="helper-text" id="[[_helperTextId]]">
          <slot name="helper">[[helperText]]</slot>
        </div>

        <div
          part="error-message"
          id="[[_errorId]]"
          aria-live="assertive"
          aria-hidden$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]"
          >[[errorMessage]]</div
        >
      </div>
    `}static get is(){return"vaadin-text-field"}static get version(){return"21.0.5"}static get properties(){return{pattern:{type:String},title:{type:String}}}}customElements.define(p.is,p)},152:function(t,e,o){"use strict";e.a={acl:"http://www.w3.org/ns/auth/acl#",as:"https://www.w3.org/ns/activitystreams#",cc:"http://creativecommons.org/ns#",cnt:"http://www.w3.org/2011/content#",constant:"http://qudt.org/vocab/constant/",csvw:"http://www.w3.org/ns/csvw#",ctag:"http://commontag.org/ns#",dash:"http://datashapes.org/dash#",dbo:"http://dbpedia.org/ontology/",dc11:"http://purl.org/dc/elements/1.1/",dcat:"http://www.w3.org/ns/dcat#",dcterms:"http://purl.org/dc/terms/",discipline:"http://qudt.org/vocab/discipline/",doap:"http://usefulinc.com/ns/doap#",dpv:"http://www.w3.org/ns/dpv#",dqv:"http://www.w3.org/ns/dqv#",dtype:"http://www.linkedmodel.org/schema/dtype#",duv:"http://www.w3.org/ns/duv#",earl:"https://www.w3.org/ns/earl#",foaf:"http://xmlns.com/foaf/0.1/",frbr:"http://purl.org/vocab/frbr/core#",geo:"http://www.opengis.net/ont/geosparql#",geof:"http://www.opengis.net/def/function/geosparql/",geor:"http://www.opengis.net/def/rule/geosparql/",gml:"http://www.opengis.net/ont/gml#",gn:"http://www.geonames.org/ontology#",gr:"http://purl.org/goodrelations/v1#",grddl:"http://www.w3.org/2003/g/data-view#",gtfs:"http://vocab.gtfs.org/terms#",http:"http://www.w3.org/2011/http#",hydra:"http://www.w3.org/ns/hydra/core#",ical:"http://www.w3.org/2002/12/cal/icaltzd#",ldp:"http://www.w3.org/ns/ldp#",lvont:"http://lexvo.org/ontology#",ma:"http://www.w3.org/ns/ma-ont#",oa:"http://www.w3.org/ns/oa#",og:"http://ogp.me/ns#",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",prefix:"http://qudt.org/2.1/vocab/prefix/",prov:"http://www.w3.org/ns/prov#",qb:"http://purl.org/linked-data/cube#",qkdv:"http://qudt.org/vocab/dimensionvector/",quantitykind:"http://qudt.org/vocab/quantitykind/",qudt:"http://qudt.org/schema/qudt/",rdau:"http://rdaregistry.info/Elements/u/",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfa:"http://www.w3.org/ns/rdfa#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",rev:"http://purl.org/stuff/rev#",rico:"https://www.ica.org/standards/RiC/ontology#",rif:"http://www.w3.org/2007/rif#",rr:"http://www.w3.org/ns/r2rml#",rss:"http://purl.org/rss/1.0/",schema:"http://schema.org/",sd:"http://www.w3.org/ns/sparql-service-description#",sdmx:"http://purl.org/linked-data/sdmx#",sem:"http://semanticweb.cs.vu.nl/2009/11/sem/",sf:"http://www.opengis.net/ont/sf#",sh:"http://www.w3.org/ns/shacl#",shex:"http://www.w3.org/ns/shex#",sioc:"http://rdfs.org/sioc/ns#",skos:"http://www.w3.org/2004/02/skos/core#",skosxl:"http://www.w3.org/2008/05/skos-xl#",sosa:"http://www.w3.org/ns/sosa/",sou:"http://qudt.org/vocab/sou/",ssn:"http://www.w3.org/ns/ssn/",test:"http://www.w3.org/2006/03/test-description#",time:"http://www.w3.org/2006/time#",unit:"http://qudt.org/vocab/unit/",v:"http://rdf.data-vocabulary.org/#",vaem:"http://www.linkedmodel.org/schema/vaem#",vann:"http://purl.org/vocab/vann/",vcard:"http://www.w3.org/2006/vcard/ns#",void:"http://rdfs.org/ns/void#",vs:"http://www.w3.org/2003/06/sw-vocab-status/ns#",wdr:"http://www.w3.org/2007/05/powder#",wdrs:"http://www.w3.org/2007/05/powder-s#",wgs:"http://www.w3.org/2003/01/geo/wgs84_pos#",xhv:"http://www.w3.org/1999/xhtml/vocab#",xkos:"http://rdf-vocabulary.ddialliance.org/xkos#",xml:"http://www.w3.org/XML/1998/namespace",xsd:"http://www.w3.org/2001/XMLSchema#"}},176:function(t,e,o){"use strict";var i=o(3);o(42),o(62),o(50),o(48);const r=i.a`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;Object(i.b)("",r,{moduleId:"lumo-field-button"})},247:function(t,e,o){"use strict";var i=o(3);o(42),o(50),o(36),o(48),o(49);const r=i.a`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='label'] {
    padding-right: 1em;
  }

  [part='label']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--lumo-primary-text-color);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([required]:not([has-value])) [part='label']::after {
    opacity: 1;
  }

  :host([invalid]) [part='label']::after {
    color: var(--lumo-error-text-color);
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  /* Margin that doesn’t reserve space when there’s no error message */
  [part='error-message']:not(:empty)::before,
  [part='error-message']:not(:empty)::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([required][dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='label']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;Object(i.b)("",r,{moduleId:"lumo-required-field"});o(62),o(176);Object(i.b)("vaadin-text-field",i.a`
    :host {
      --lumo-text-field-size: var(--lumo-size-m);
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      padding: var(--lumo-space-xs) 0;
    }

    :host::before {
      height: var(--lumo-text-field-size);
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
    }

    :host([focused]:not([readonly])) [part='label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([has-helper]) [part='helper-text']::before {
      content: '';
      display: block;
      height: 0.4em;
    }

    [part='helper-text'],
    [part='helper-text'] ::slotted(*) {
      display: block;
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-xs);
      line-height: var(--lumo-line-height-xs);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
    }

    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea),
    [part='input-field'] ::slotted([part='value']) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size);
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    [part='value']:focus,
    :host([focused]) [part='input-field'] ::slotted(input),
    :host([focused]) [part='input-field'] ::slotted(textarea) {
      -webkit-mask-image: none;
      mask-image: none;
    }

    [part='value']::placeholder {
      color: inherit;
      transition: opacity 0.175s 0.1s;
      opacity: 0.5;
    }

    [part='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    [part='input-field']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    /* Hover */

    :host(:hover:not([readonly]):not([focused])) [part='label'],
    :host(:hover:not([readonly])) [part='helper-text'],
    :host(:hover:not([readonly])) [part='helper-text'] ::slotted(*) {
      color: var(--lumo-body-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.1;
    }

    /* Touch device adjustment */
    @media (pointer: coarse) {
      :host(:hover:not([readonly]):not([focused])) [part='label'] {
        color: var(--lumo-secondary-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
        opacity: 0;
      }

      :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
        opacity: 0.2;
      }
    }

    /* Trigger when not focusing using the keyboard */
    :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
      transform: scaleX(0);
      transition-duration: 0.15s, 1s;
    }

    /* Focus-ring */

    :host([focus-ring]) [part='input-field'] {
      box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Read-only and disabled */
    :host([readonly]) [part='value']::placeholder,
    :host([disabled]) [part='value']::placeholder {
      opacity: 0;
    }

    /* Read-only */

    :host([readonly]) [part='input-field'] {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly]) [part='input-field']::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled style */

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) [part='input-field'] {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'],
    :host([disabled]) [part='value'],
    :host([disabled]) [part='input-field'] ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid style */

    :host([invalid]) [part='input-field'] {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid]) [part='input-field']::after {
      background-color: var(--lumo-error-color-50pct);
    }

    :host([invalid][focus-ring]) [part='input-field'] {
      box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
    }

    :host([input-prevented]) [part='input-field'] {
      color: var(--lumo-error-text-color);
    }

    /* Small theme */

    :host([theme~='small']) {
      font-size: var(--lumo-font-size-s);
      --lumo-text-field-size: var(--lumo-size-s);
    }

    :host([theme~='small'][has-label]) [part='label'] {
      font-size: var(--lumo-font-size-xs);
    }

    :host([theme~='small'][has-label]) [part='error-message'] {
      font-size: var(--lumo-font-size-xxs);
    }

    /* Text align */

    :host([theme~='align-left']) [part='value'] {
      text-align: left;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) [part='value'] {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) [part='value'] {
      text-align: right;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
    /* helper-text position */

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
      display: none;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='label'] {
      order: 0;
      padding-bottom: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
      order: 1;
    }

    :host([has-helper][theme~='helper-above-field']) [part='input-field'] {
      order: 2;
    }

    :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
      order: 3;
    }

    /* Slotted content */

    [part='input-field'] ::slotted(:not([part]):not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
      color: var(--lumo-secondary-text-color);
      font-weight: 400;
    }

    /* Slotted icons */
    [part='input-field'] ::slotted(vaadin-icon),
    [part='input-field'] ::slotted(iron-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    [part='input-field'] ::slotted(vaadin-icon[icon^='vaadin:']),
    [part='input-field'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    [part='clear-button']::before {
      content: var(--lumo-icons-cross);
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='input-field']::after {
      transform-origin: 0% 0;
    }

    :host([dir='rtl']) [part='value'],
    :host([dir='rtl']) [part='input-field'] ::slotted(input),
    :host([dir='rtl']) [part='input-field'] ::slotted(textarea) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    :host([dir='rtl']) [part='value']:focus,
    :host([focused][dir='rtl']) [part='input-field'] ::slotted(input),
    :host([focused][dir='rtl']) [part='input-field'] ::slotted(textarea) {
      -webkit-mask-image: none;
      mask-image: none;
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) [part='value'],
      :host([dir='rtl']) [part='input-field'] ::slotted(input),
      :host([dir='rtl']) [part='input-field'] ::slotted(textarea),
      :host([dir='rtl']) [part='input-field'] ::slotted([part='value']) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-text-field",include:["lumo-required-field","lumo-field-button"]});o(133)},248:function(t,e,o){"use strict";o.r(e),o.d(e,"ButtonElement",(function(){return i.a}));o(110);var i=o(94)},329:function(t,e,o){"use strict";o(247),o(133)},400:function(t,e,o){"use strict";var i=o(3);o(50),o(36),o(48),o(62),o(173);const r=i.a`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;Object(i.b)("",r,{moduleId:"lumo-menu-overlay-core"});const a=i.a`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`;Object(i.b)("",a,{moduleId:"lumo-menu-overlay",include:["lumo-overlay","lumo-menu-overlay-core"]});o(176),o(247),o(251),o(252);Object(i.b)("vaadin-select",i.a`
    :host {
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    [selected] {
      padding-left: 0;
      padding-right: 0;
      flex: auto;
    }

    :host([theme~='small']) [selected] {
      padding: 0;
      min-height: var(--lumo-size-s);
    }

    :host([theme~='align-left']) [selected] {
      text-align: left;
    }

    :host([theme~='align-right']) [selected] {
      text-align: right;
    }

    :host([theme~='align-center']) [selected] {
      text-align: center;
    }

    [part='toggle-button']::before {
      content: var(--lumo-icons-dropdown);
    }

    /* Highlight the toggle button when hovering over the entire component */
    :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
      color: var(--lumo-contrast-80pct);
    }
  `,{include:["lumo-field-button"],moduleId:"lumo-select"}),Object(i.b)("vaadin-select-text-field",i.a`
    :host([theme~='align-center']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

    :host([theme~='align-center']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

    [part='input-field'] {
      cursor: default;
    }

    [part='input-field'] ::slotted([part='value']) {
      display: flex;
    }

    [part='input-field']:focus {
      outline: none;
    }

    /* RTL specific styles */
    :host([theme~='align-left'][dir='rtl']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([dir='rtl']) ::slotted([part~='value']),
    :host([theme~='align-right'][dir='rtl']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }
  `,{moduleId:"lumo-select-text-field"}),Object(i.b)("vaadin-select-overlay",i.a`
    :host {
      --_lumo-item-selected-icon-display: block;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }

    [part~='overlay'] {
      min-width: var(--vaadin-select-text-field-width);
    }

    /* Small viewport adjustment */
    :host([phone]) {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch;
      justify-content: flex-end;
    }

    :host([theme~='align-left']) {
      text-align: left;
    }

    :host([theme~='align-right']) {
      text-align: right;
    }

    :host([theme~='align-center']) {
      text-align: center;
    }
  `,{include:["lumo-menu-overlay"],moduleId:"lumo-select-overlay"});var n=o(7),s=o(24),l=o(15),d=o(101),h=o(25),u=(o(64),o(16)),c=o(174),p=o(250);Object(i.b)("vaadin-select-overlay",i.a`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class A extends p.a{static get is(){return"vaadin-select-overlay"}}customElements.define(A.is,A);var m=o(133);class g extends m.a{static get is(){return"vaadin-select-text-field"}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(g.is,g);const v=document.createElement("template");v.innerHTML="\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(v.content);class b extends(Object(u.a)(Object(d.a)(Object(l.a)(Object(s.b)(h.a,n.a))))){static get template(){return n.b`
      <style>
        :host {
          display: inline-block;
        }

        vaadin-select-text-field {
          width: 100%;
          min-width: 0;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='toggle-button'] {
          font-family: 'vaadin-select-icons';
        }

        [part='toggle-button']::before {
          content: '\\e900';
        }
      </style>

      <vaadin-select-text-field
        placeholder="[[placeholder]]"
        label="[[label]]"
        required="[[required]]"
        invalid="[[invalid]]"
        error-message="[[errorMessage]]"
        readonly$="[[readonly]]"
        helper-text="[[helperText]]"
        theme$="[[theme]]"
      >
        <slot name="prefix" slot="prefix"></slot>
        <slot name="helper" slot="helper">[[helperText]]</slot>
        <div part="value"></div>
        <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
      </vaadin-select-text-field>
      <vaadin-select-overlay
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[theme]]"
      ></vaadin-select-overlay>

      <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
    `}static get is(){return"vaadin-select"}static get version(){return"21.0.5"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_rendererChanged(renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",t=>{const e=Array.from(t.composedPath()).some(t=>t.nodeType===Node.ELEMENT_NODE&&"helper"===t.getAttribute("slot"));this.opened=!this.readonly&&!e}),this.focusElement.addEventListener("keydown",t=>this._onKeyDown(t)),Object(c.a)(this)}requestContentUpdate(){this._overlayElement.requestContentUpdate(),this._assignMenuElement(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}render(){console.warn("WARNING: Since Vaadin 21, render() is deprecated. Please use requestContentUpdate() instead."),this.requestContentUpdate()}_rendererChanged(t,e){e&&(e.setProperties({owner:this,renderer:t}),this.requestContentUpdate(),t&&this._assignMenuElement())}_assignMenuElement(){const t=this.__getMenuElement();t&&t!==this.__lastMenuElement&&(this._menuElement=t,t.addEventListener("items-changed",()=>{this._items=t.items,this._items.forEach(t=>t.setAttribute("role","option"))}),t.addEventListener("selected-changed",()=>this._updateValueSlot()),t.addEventListener("keydown",t=>this._onKeyDownInside(t)),t.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),t.setAttribute("role","listbox"),this.__lastMenuElement=t)}__getMenuElement(){const t=this._overlayElement&&this._overlayElement.content;return t?Array.from(t.children).find(t=>"style"!==t.localName):null}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}_requiredChanged(t){this.setAttribute("aria-required",t)}_valueChanged(t,e){""===t?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===t&&void 0===e||this.validate()}_onKeyDown(t){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(t.key))t.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(t.key)&&1===t.key.length){const e=this._menuElement.selected,o=void 0!==e?e:-1,i=this._menuElement._searchKey(o,t.key);i>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[i].value,this._items))}}_onKeyDownInside(t){/^(Tab)$/.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(t){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else e&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(t){return!!t&&Boolean(t.hasAttribute("label")?t.getAttribute("label"):t.textContent.trim()||t.children.length)}_attachSelectedItem(t){if(!t)return;let e;t.hasAttribute("label")?(e=document.createElement("vaadin-item"),e.textContent=t.getAttribute("label")):e=t.cloneNode(!0),e._sourceItem=t,e.removeAttribute("tabindex"),e.removeAttribute("role"),this._valueElement.appendChild(e),e.selected=!0}_updateAriaExpanded(t,e,o){e&&e.setAttribute("aria-expanded",t),o&&o.focusElement&&o.focusElement.setAttribute("aria-expanded",t)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";const t=this._items[this._menuElement.selected],e=this._hasContent(t);this._valueElement.slot=e?"input":"",this._attachSelectedItem(t),!this._valueChanging&&t&&(this._selectedChanging=!0,this.value=t.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(t,e){e&&(this._menuElement.selected=e.reduce((e,o,i)=>void 0===e&&o.value===t?i:e,void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(t){super._setFocused(this.opened||t),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){const t=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),e=Math.min(window.innerHeight,document.documentElement.clientHeight),o=t.top>(e-t.height)/2;"rtl"===this.getAttribute("dir")?this._overlayElement.style.right=document.documentElement.clientWidth-t.right+"px":this._overlayElement.style.left=t.left+"px",o?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=e-t.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=t.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":t.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(b.is,b)},94:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var i=o(7),r=o(34),a=o(39),n=o(15),s=o(101),l=o(16);class d extends(Object(l.a)(Object(s.a)(Object(n.a)(Object(r.a)(i.a))))){static get template(){return i.b`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Ensure the button is always aligned on the baseline */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        #button {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <div part="prefix">
          <slot name="prefix"></slot>
        </div>
        <div part="label">
          <slot></slot>
        </div>
        <div part="suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
      <button id="button" type="button"></button>
    `}static get is(){return"vaadin-button"}static get version(){return"21.0.5"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.toggleAttribute("active",!1)}_addActiveListeners(){Object(a.a)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(a.a)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(d.is,d)}}]);
//# sourceMappingURL=319ea9d4cf9eff3ad7f3.js.map