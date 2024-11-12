import{css,html,CrLitElement,nothing}from"chrome://resources/lit/v3_0/lit.rollup.js";import{PolymerElement,html as html$1,templatize,useShadow,dom,Polymer,Templatizer,OptionalMutableDataBehavior,animationFrame,microTask,idlePeriod,flush,Debouncer,enqueueDebouncer,matches,translate,dedupingMixin,afterNextRender,timeOut}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import"./strings.m.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{addWebUiListener,removeWebUiListener,sendWithPromise}from"chrome://resources/js/cr.js";const sheet$1=new CSSStyleSheet;sheet$1.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb, var(--cr-shadow-color) 30%, transparent);--cr-shadow-ambient-color_:color-mix(in srgb, var(--cr-shadow-color) 15%, transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb), 0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0, 0, 0, .06);--cr-title-text-color:rgb(90, 90, 90);--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){html{--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb), 0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-separator-color:rgba(255, 255, 255, .1);--cr-title-text-color:var(--cr-primary-text-color);--scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent}}html{--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(\n      var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb), .14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-container-shadow-height:6px;--cr-container-shadow-margin:calc(-1 * var(--cr-container-shadow-height));--cr-container-shadow-max-opacity:1;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1}html{--cr-fallback-color-outline:rgb(116, 119, 117);--cr-fallback-color-primary:rgb(11, 87, 208);--cr-fallback-color-on-primary:rgb(255, 255, 255);--cr-fallback-color-primary-container:rgb(211, 227, 253);--cr-fallback-color-on-primary-container:rgb(4, 30, 73);--cr-fallback-color-secondary-container:rgb(194, 231, 255);--cr-fallback-color-on-secondary-container:rgb(0, 29, 53);--cr-fallback-color-neutral-container:rgb(242, 242, 242);--cr-fallback-color-neutral-outline:rgb(199, 199, 199);--cr-fallback-color-surface:rgb(255, 255, 255);--cr-fallback-color-surface2:rgb(243, 246, 252);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225, 227, 225);--cr-fallback-color-on-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-subtle:rgb(71, 71, 71);--cr-fallback-color-inverse-primary:rgb(168, 199, 250);--cr-fallback-color-inverse-surface:rgb(48, 48, 48);--cr-fallback-color-inverse-on-surface:rgb(242, 242, 242);--cr-fallback-color-tonal-container:rgb(211, 227, 253);--cr-fallback-color-on-tonal-container:rgb(4, 30, 73);--cr-fallback-color-tonal-outline:rgb(168, 199, 250);--cr-fallback-color-error:rgb(179, 38, 30);--cr-fallback-color-divider:rgb(211, 227, 253);--cr-fallback-color-state-hover-on-prominent_:rgba(253, 252, 251, .1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(\n      var(--cr-fallback-color-state-on-subtle-rgb_), .06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(\n      var(--cr-fallback-color-state-on-subtle-rgb_), .08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(\n      var(--cr-fallback-color-state-ripple-primary-rgb_), 0.32);--cr-fallback-color-base-container:rgb(236, 239, 247);--cr-fallback-color-disabled-background:rgba(\n      var(--cr-fallback-color-on-surface-rgb), .12);--cr-fallback-color-disabled-foreground:rgba(\n      var(--cr-fallback-color-on-surface-rgb), var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,\n      rgba(var(--cr-fallback-color-on-surface-rgb), .08));--cr-hover-on-prominent-background-color:var(\n      --color-sys-state-hover-on-prominent,\n      var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(\n      --color-sys-state-hover-on-subtle,\n      var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,\n      rgba(var(--cr-fallback-color-on-surface-rgb), .12));--cr-active-on-primary-background-color:var(\n      --color-sys-state-ripple-primary,\n      var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(\n      --color-sys-state-ripple-neutral-on-subtle,\n      var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,\n      var(--cr-fallback-color-primary));--cr-primary-text-color:var(--color-primary-foreground,\n      var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,\n      var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,\n      var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow, rgb(0, 0, 0));--cr-checked-color:var(\n      --color-checkbox-foreground-checked,\n      var(--cr-fallback-color-primary))}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142, 145, 143);--cr-fallback-color-primary:rgb(168, 199, 250);--cr-fallback-color-on-primary:rgb(6, 46, 111);--cr-fallback-color-primary-container:rgb(8, 66, 160);--cr-fallback-color-on-primary-container:rgb(211, 227, 253);--cr-fallback-color-secondary-container:rgb(0, 74, 119);--cr-fallback-color-on-secondary-container:rgb(194, 231, 255);--cr-fallback-color-neutral-container:rgb(40, 40, 40);--cr-fallback-color-neutral-outline:rgb(117, 117, 117);--cr-fallback-color-surface:rgb(31, 31, 31);--cr-fallback-color-surface2:rgb(45, 47, 49);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-variant:rgb(196, 199, 197);--cr-fallback-color-on-surface-subtle:rgb(199, 199, 199);--cr-fallback-color-inverse-primary:rgb(11, 87, 208);--cr-fallback-color-inverse-surface:rgb(227, 227, 227);--cr-fallback-color-inverse-on-surface:rgb(31, 31, 31);--cr-fallback-color-tonal-container:rgb(0, 74, 119);--cr-fallback-color-on-tonal-container:rgb(194, 231, 255);--cr-fallback-color-tonal-outline:rgb(4, 125, 183);--cr-fallback-color-error:rgb(242, 184, 181);--cr-fallback-color-divider:rgb(94, 94, 94);--cr-fallback-color-state-hover-on-prominent_:rgba(31, 31, 31, .06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(\n        var(--cr-fallback-color-state-on-subtle-rgb_), .10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(\n        var(--cr-fallback-color-state-on-subtle-rgb_), .16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40, 40, 40, 1)}}@media (forced-colors:active){html{--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}`);document.adoptedStyleSheets=[...document.adoptedStyleSheets,sheet$1];
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertInstanceof(value,type,message){if(value instanceof type){return}throw new Error(`Value ${value} is not of type ${type.name||typeof type}`)}function assertNotReached(message="Unreachable code hit"){assert(false,message)}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}function listenOnce(target,eventNames,callback){const eventNamesArray=Array.isArray(eventNames)?eventNames:eventNames.split(/ +/);const removeAllAndCallCallback=function(event){eventNamesArray.forEach((function(eventName){target.removeEventListener(eventName,removeAllAndCallCallback,false)}));return callback(event)};eventNamesArray.forEach((function(eventName){target.addEventListener(eventName,removeAllAndCallCallback,false)}))}function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}let instance$y=null;function getCss$w(){return instance$y||(instance$y=[...[],css`:host{--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$p(){return html`
<dialog id="dialog" @cancel="${this.onDialogCancel_}"
    @click="${this.onDialogClick_}" @close="${this.onDialogClose_}">
  <div id="container" @click="${this.onContainerClick_}">
    <div class="drawer-header">
      <slot name="header-icon">
        <picture>
          <source media="(prefers-color-scheme: dark)"
              srcset="//resources/images/chrome_logo_dark.svg">
          <img id="product-logo"
              srcset="chrome://theme/current-channel-logo@1x 1x,
                      chrome://theme/current-channel-logo@2x 2x"
              role="presentation">
        </picture>
      </slot>
      <div id="heading" tabindex="-1">${this.heading}</div>
    </div>
    <slot name="body"></slot>
  </div>
</dialog>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends CrLitElement{constructor(){super(...arguments);this.heading="";this.align="ltr";this.show_=false}static get is(){return"cr-drawer"}static get styles(){return getCss$w()}render(){return getHtml$p.bind(this)()}static get properties(){return{heading:{type:String},show_:{type:Boolean,reflect:true},align:{type:String,reflect:true}}}get open(){return this.$.dialog.open}set open(_value){assertNotReached("Cannot set |open|.")}toggle(){if(this.open){this.cancel()}else{this.openDrawer()}}async openDrawer(){if(this.open){return}this.$.dialog.showModal();this.show_=true;await this.updateComplete;this.fire("cr-drawer-opening");listenOnce(this.$.dialog,"transitionend",(()=>{this.fire("cr-drawer-opened")}))}async dismiss_(cancel){if(!this.open){return}this.show_=false;listenOnce(this.$.dialog,"transitionend",(()=>{this.$.dialog.close(cancel?"canceled":"closed")}))}cancel(){this.dismiss_(true)}close(){this.dismiss_(false)}wasCanceled(){return!this.open&&this.$.dialog.returnValue==="canceled"}onContainerClick_(event){event.stopPropagation()}onDialogClick_(){this.cancel()}onDialogCancel_(event){event.preventDefault();this.cancel()}onDialogClose_(){this.fire("close")}}customElements.define(CrDrawerElement.is,CrDrawerElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLazyRenderElement extends PolymerElement{constructor(){super(...arguments);this.child_=null;this.instance_=null}static get is(){return"cr-lazy-render"}static get template(){return html$1`<slot></slot>`}get(){if(!this.child_){this.render_()}assert(this.child_);return this.child_}getIfExists(){return this.child_}render_(){const template=this.shadowRoot.querySelector("slot").assignedNodes({flatten:true}).filter((n=>n.nodeType===Node.ELEMENT_NODE))[0];const TemplateClass=templatize(template,this,{mutableData:false,forwardHostProp:this._forwardHostPropV2});const parentNode=this.parentNode;if(parentNode&&!this.child_){this.instance_=new TemplateClass;this.child_=this.instance_.root.firstElementChild;parentNode.insertBefore(this.instance_.root,this)}}_forwardHostPropV2(prop,value){if(this.instance_){this.instance_.forwardHostProp(prop,value)}}}customElements.define(CrLazyRenderElement.is,CrLazyRenderElement);let instance$x=null;function getCss$v(){return instance$x||(instance$x=[...[],css`:host{--cr-toast-background:var(--color-toast-background,
      var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
      var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
      var(--cr-fallback-color-inverse-on-surface))}:host{align-items:center;background:var(--cr-toast-background);border-radius:8px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;line-height:20px;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 16px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}::slotted(cr-button:last-of-type){margin-inline-end:-8px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$o(){return html`<slot></slot>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends CrLitElement{constructor(){super(...arguments);this.duration=0;this.open=false;this.hideTimeoutId_=null}static get is(){return"cr-toast"}static get styles(){return getCss$v()}render(){return getHtml$o.bind(this)()}static get properties(){return{duration:{type:Number},open:{type:Boolean,reflect:true}}}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("duration")||changedProperties.has("open")){this.resetAutoHide_()}}resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}async show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.removeAttribute("aria-hidden");this.open=true;await this.updateComplete;this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}async hide(){this.setAttribute("aria-hidden","true");this.open=false;await this.updateComplete}}customElements.define(CrToastElement.is,CrToastElement);let instance$w=null;function getCss$u(){return instance$w||(instance$w=[...[],css`:host([hidden]),[hidden]{display:none!important}`])}let instance$v=null;function getCss$t(){return instance$v||(instance$v=[...[getCss$u()],css`#content{display:flex;flex:1}.collapsible{overflow:hidden;text-overflow:ellipsis}span{white-space:pre}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$n(){return html`
<cr-toast id="toast" .duration="${this.duration}">
  <div id="content" class="elided-text"></div>
  <slot id="slotted"></slot>
</cr-toast>`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let toastManagerInstance=null;function getToastManager(){assert(toastManagerInstance);return toastManagerInstance}function setInstance(instance){assert(!instance||!toastManagerInstance);toastManagerInstance=instance}class CrToastManagerElement extends CrLitElement{constructor(){super(...arguments);this.duration=0}static get is(){return"cr-toast-manager"}static get styles(){return getCss$t()}render(){return getHtml$n.bind(this)()}static get properties(){return{duration:{type:Number}}}get isToastOpen(){return this.$.toast.open}get slottedHidden(){return this.$.slotted.hidden}connectedCallback(){super.connectedCallback();setInstance(this)}disconnectedCallback(){super.disconnectedCallback();setInstance(null)}show(label,hideSlotted=false){this.$.content.textContent=label;this.showInternal_(hideSlotted)}showForStringPieces(pieces,hideSlotted=false){const content=this.$.content;content.textContent="";pieces.forEach((function(p){if(p.value.length===0){return}const span=document.createElement("span");span.textContent=p.value;if(p.collapsible){span.classList.add("collapsible")}content.appendChild(span)}));this.showInternal_(hideSlotted)}showInternal_(hideSlotted){this.$.slotted.hidden=hideSlotted;this.$.toast.show()}hide(){this.$.toast.hide()}}customElements.define(CrToastManagerElement.is,CrToastManagerElement);let instance$u=null;function getCss$s(){return instance$u||(instance$u=[...[getCss$u()],css`:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}`])}
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EventTracker{listeners_=[];add(target,eventType,listener,capture=false){const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter((listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true}))}removeAll(){this.listeners_.forEach((listener=>EventTracker.removeEventListener(listener)));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let iconsetMap=null;class IconsetMap extends EventTarget{constructor(){super();this.iconsets_=new Map;this.ironIconsets_=new Map;this.tracker_=new EventTracker;const iconsets=document.head.querySelectorAll("iron-iconset-svg");for(const iconset of iconsets){this.setIronIconset(iconset.name,iconset)}this.tracker_.add(window,"iron-iconset-added",(e=>{this.setIronIconset(e.detail.name,e.detail)}))}static getInstance(){return iconsetMap||(iconsetMap=new IconsetMap)}static resetInstanceForTesting(instance){if(iconsetMap!==null){iconsetMap.tracker_.removeAll()}iconsetMap=instance}get(id){return this.iconsets_.get(id)||this.ironIconsets_.get(id)||null}setIronIconset(id,iconset){assert(!this.ironIconsets_.has(id),"Tried to add a second iron-iconset with id "+id);this.ironIconsets_.set(id,iconset);this.dispatchEvent(new CustomEvent("cr-iconset-added",{detail:id}))}set(id,iconset){assert(!this.iconsets_.has(id),"Tried to add a second iconset with id "+id);this.iconsets_.set(id,iconset);this.dispatchEvent(new CustomEvent("cr-iconset-added",{detail:id}))}}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrIconElement extends CrLitElement{constructor(){super(...arguments);this.icon="";this.iconsetName_="";this.iconName_="";this.iconset_=null}static get is(){return"cr-icon"}static get styles(){return getCss$s()}static get properties(){return{icon:{type:String}}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("icon")){const[iconsetName,iconName]=this.icon.split(":");this.iconName_=iconName||"";this.iconsetName_=iconsetName||"";this.updateIcon()}}updateIcon(){if(this.iconName_===""&&this.iconset_){this.iconset_.removeIcon(this)}else if(this.iconsetName_){const iconsetMap=IconsetMap.getInstance();this.iconset_=iconsetMap.get(this.iconsetName_);assert(this.iconset_,`Could not find iconset for: '${this.iconsetName_}:${this.iconName_}'`);this.iconset_.applyIcon(this,this.iconName_)}}}customElements.define(CrIconElement.is,CrIconElement);let instance$t=null;function getCss$r(){return instance$t||(instance$t=[...[],css`:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_RADIUS_PX=300;const MIN_DURATION_MS=800;function distance(x1,y1,x2,y2){const xDelta=x1-x2;const yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)}class CrRippleElement extends CrLitElement{constructor(){super(...arguments);this.holdDown=false;this.recenters=false;this.noink=false;this.ripples_=[];this.eventTracker_=new EventTracker}static get is(){return"cr-ripple"}static get styles(){return getCss$r()}static get properties(){return{holdDown:{type:Boolean},recenters:{type:Boolean},noink:{type:Boolean}}}connectedCallback(){super.connectedCallback();assert(this.parentNode);const keyEventTarget=this.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?this.parentNode.host:this.parentElement;this.eventTracker_.add(keyEventTarget,"pointerdown",(e=>this.uiDownAction(e)));this.eventTracker_.add(keyEventTarget,"pointerup",(()=>this.uiUpAction()));this.eventTracker_.add(keyEventTarget,"keydown",(e=>{if(e.defaultPrevented){return}if(e.key==="Enter"){this.onEnterKeydown_();return}if(e.key===" "){this.onSpaceKeydown_()}}));this.eventTracker_.add(keyEventTarget,"keyup",(e=>{if(e.defaultPrevented){return}if(e.key===" "){this.onSpaceKeyup_()}}))}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("holdDown")){this.holdDownChanged_(this.holdDown,changedProperties.get("holdDown"))}}uiDownAction(e){if(e!==undefined&&e.button!==0){return}if(!this.noink){this.downAction_(e)}}downAction_(e){if(this.ripples_.length&&this.holdDown){return}this.showRipple_(e)}clear(){this.hideRipple_();this.holdDown=false}showAndHoldDown(){this.ripples_.forEach((ripple=>{ripple.remove()}));this.ripples_=[];this.holdDown=true}showRipple_(e){const rect=this.getBoundingClientRect();const roundedCenterX=function(){return Math.round(rect.width/2)};const roundedCenterY=function(){return Math.round(rect.height/2)};let x=0;let y=0;const centered=!e;if(centered){x=roundedCenterX();y=roundedCenterY()}else{x=Math.round(e.clientX-rect.left);y=Math.round(e.clientY-rect.top)}const corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];const cornerDistances=corners.map((function(corner){return Math.round(distance(x,y,corner.x,corner.y))}));const radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));const startTranslate=`${x-radius}px, ${y-radius}px`;let endTranslate=startTranslate;if(this.recenters&&!centered){endTranslate=`${roundedCenterX()-radius}px, ${roundedCenterY()-radius}px`}const ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples_.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:[`translate(${startTranslate}) scale(0)`,`translate(${endTranslate}) scale(1)`]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})}uiUpAction(){if(!this.noink){this.upAction_()}}upAction_(){if(!this.holdDown){this.hideRipple_()}}hideRipple_(){if(this.ripples_.length===0){return}this.ripples_.forEach((function(ripple){const opacity=ripple.computedStyleMap().get("opacity");if(opacity===null){ripple.remove();return}const animation=ripple.animate({opacity:[opacity.value,0]},{duration:150,fill:"forwards"});animation.finished.then((()=>{ripple.remove()}))}));this.ripples_=[]}onEnterKeydown_(){this.uiDownAction();window.setTimeout((()=>{this.uiUpAction()}),1)}onSpaceKeydown_(){this.uiDownAction()}onSpaceKeyup_(){this.uiUpAction()}holdDownChanged_(newHoldDown,oldHoldDown){if(oldHoldDown===undefined){return}if(newHoldDown){this.downAction_()}else{this.upAction_()}}}customElements.define(CrRippleElement.is,CrRippleElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRippleMixin=superClass=>{class CrRippleMixin extends superClass{constructor(){super(...arguments);this.noink=false;this.rippleContainer=null;this.ripple_=null}static get properties(){return{noink:{type:Boolean}}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("noink")&&this.hasRipple()){assert(this.ripple_);this.ripple_.noink=this.noink}}ensureRippleOnPointerdown(){this.addEventListener("pointerdown",(()=>this.ensureRipple()),{capture:true})}ensureRipple(){if(this.hasRipple()){return}this.ripple_=this.createRipple();this.ripple_.noink=this.noink;const rippleContainer=this.rippleContainer||this.shadowRoot;assert(rippleContainer);rippleContainer.appendChild(this.ripple_)}getRipple(){this.ensureRipple();assert(this.ripple_);return this.ripple_}hasRipple(){return Boolean(this.ripple_)}createRipple(){const ripple=document.createElement("cr-ripple");ripple.id="ink";return ripple}}return CrRippleMixin};let instance$s=null;function getCss$q(){return instance$s||(instance$s=[...[],css`:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$m(){return html`
<div id="icon">
  <div id="maskedImage"></div>
</div>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=CrRippleMixin(CrLitElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get styles(){return getCss$q()}render(){return getHtml$m.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},ironIcon:{type:String,reflect:true},suppressRtlFlip:{type:Boolean,value:false,reflect:true},multipleIcons_:{type:Boolean,reflect:true}}}constructor(){super();this.disabled=false;this.multipleIcons_=false;this.spaceKeyDown_=false;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.ensureRippleOnPointerdown()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("ironIcon")){const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1}}firstUpdated(){if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false");this.disabledChanged_(this.disabled,changedProperties.get("disabled"))}if(changedProperties.has("ironIcon")){this.onIronIconChanged_()}}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("tabindex",String(this.disabled?-1:0))}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}async onIronIconChanged_(){this.shadowRoot.querySelectorAll("cr-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");icons.forEach((async icon=>{const crIcon=document.createElement("cr-icon");crIcon.icon=icon;this.$.icon.appendChild(crIcon);await crIcon.updateComplete;crIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);let instance$r=null;function getCss$p(){return instance$r||(instance$r=[...[],css`:host{display:none}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$l(){return html`
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 ${this.size} ${this.size}"
     preserveAspectRatio="xMidYMid meet" focusable="false"
     style="pointer-events: none; display: block; width: 100%; height 100%;">
 </svg>
<slot></slot>
`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const APPLIED_ICON_CLASS="cr-iconset-svg-icon_";class CrIconsetElement extends CrLitElement{constructor(){super(...arguments);this.name="";this.size=24}static get is(){return"cr-iconset"}static get styles(){return getCss$p()}render(){return getHtml$l.bind(this)()}static get properties(){return{name:{type:String},size:{type:Number}}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("name")){assert(changedProperties.get("name")===undefined);IconsetMap.getInstance().set(this.name,this)}}applyIcon(element,iconName){this.removeIcon(element);const svg=this.cloneIcon_(iconName);if(svg){svg.classList.add(APPLIED_ICON_CLASS);element.shadowRoot.insertBefore(svg,element.shadowRoot.childNodes[0]);return svg}return null}createIcon(iconName){return this.cloneIcon_(iconName)}removeIcon(element){const oldSvg=element.shadowRoot.querySelector(`.${APPLIED_ICON_CLASS}`);if(oldSvg){oldSvg.remove()}}cloneIcon_(id){const sourceSvg=this.querySelector(`g[id="${id}"]`);if(!sourceSvg){return null}const svgClone=this.$.baseSvg.cloneNode(true);const content=sourceSvg.cloneNode(true);content.removeAttribute("id");const contentViewBox=content.getAttribute("viewBox");if(contentViewBox){svgClone.setAttribute("viewBox",contentViewBox)}svgClone.appendChild(content);return svgClone}}customElements.define(CrIconsetElement.is,CrIconsetElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValidArray(arr){if(arr instanceof Array&&Object.isFrozen(arr)){return true}return false}function getStaticString(literal){const isStaticString=isValidArray(literal)&&!!literal.raw&&isValidArray(literal.raw)&&literal.length===literal.raw.length&&literal.length===1;assert(isStaticString,"static_types.js only allows static strings");return literal.join("")}function createTypes(_ignore,literal){return getStaticString(literal)}const rules={createHTML:createTypes,createScript:createTypes,createScriptURL:createTypes};let staticPolicy;if(window.trustedTypes){staticPolicy=window.trustedTypes.createPolicy("static-types",rules)}else{staticPolicy=rules}function getTrustedHTML(literal){return staticPolicy.createHTML("",literal)}const div=document.createElement("div");div.innerHTML=getTrustedHTML`
<cr-iconset name="cr20" size="20">
  <svg>
    <defs>
      
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="delete">
        <path d="M 5.832031 17.5 C 5.375 17.5 4.984375 17.335938 4.65625 17.011719 C 4.328125 16.683594 4.167969 16.292969 4.167969 15.832031 L 4.167969 5 L 3.332031 5 L 3.332031 3.332031 L 7.5 3.332031 L 7.5 2.5 L 12.5 2.5 L 12.5 3.332031 L 16.667969 3.332031 L 16.667969 5 L 15.832031 5 L 15.832031 15.832031 C 15.832031 16.292969 15.671875 16.683594 15.34375 17.011719 C 15.015625 17.335938 14.625 17.5 14.167969 17.5 Z M 14.167969 5 L 5.832031 5 L 5.832031 15.832031 L 14.167969 15.832031 Z M 7.5 14.167969 L 9.167969 14.167969 L 9.167969 6.667969 L 7.5 6.667969 Z M 10.832031 14.167969 L 12.5 14.167969 L 12.5 6.667969 L 10.832031 6.667969 Z M 5.832031 5 L 5.832031 15.832031 Z M 5.832031 5 ">
        </path>
      </g>
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      <g id="password">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
      </g>
      
        <g id="banner-warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
        <g id="warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
      
  </defs></svg>
</cr-iconset>


<cr-iconset name="cr" size="24">
  <svg>
    <defs>
      
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
        <g id="bluetooth">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z">
          </path>
        </g>
        <g id="camera-alt">
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
          </path>
        </g>
        <g id="work">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z">
          </path>
        </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="chrome-product" viewBox="0 -960 960 960">
        <path d="M336-479q0 60 42 102t102 42q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102Zm144 216q11 0 22.5-.5T525-267L427-99q-144-16-237.5-125T96-479q0-43 9.5-84.5T134-645l160 274q28 51 78 79.5T480-263Zm0-432q-71 0-126.5 42T276-545l-98-170q53-71 132.5-109.5T480-863q95 0 179 45t138 123H480Zm356 72q15 35 21.5 71t6.5 73q0 155-100 260.5T509-96l157-275q14-25 22-52t8-56q0-40-15-77t-41-67h196Z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download" viewBox="0 -960 960 960">
        <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"></path>
      </g>
      
        <g id="folder-filled">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
          </path>
        </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
        <g id="sim-card-alert">
          <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z">
          </path>
        </g>
        <g id="sim-lock">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
          </path>
        </g>
        <g id="sms-connect">
          <path d="M20,2C21.1,2 22,2.9 22,4L22,16C22,17.1 21.1,18 20,18L6,18L2,22L2.01,4C2.01,2.9 2.9,2 4,2L20,2ZM8,8L4,12L8,16L8,13L14,13L14,11L8,11L8,8ZM19.666,7.872L16.038,4.372L16.038,6.997L10,6.997L10,9L16.038,9L16.038,11.372L19.666,7.872Z">
          </path>
        </g>
      
      
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync" viewBox="0 -960 960 960">
        <path d="M216-192v-72h74q-45-40-71.5-95.5T192-480q0-101 61-177.5T408-758v75q-63 23-103.5 77.5T264-480q0 48 19.5 89t52.5 70v-63h72v192H216Zm336-10v-75q63-23 103.5-77.5T696-480q0-48-19.5-89T624-639v63h-72v-192h192v72h-74q45 40 71.5 95.5T768-480q0 101-61 177.5T552-202Z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-down-filled">
        <path d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumbs-up-filled">
        <path d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </path></g>
      <g id="videocam" viewBox="0 -960 960 960">
        <path d="M216-192q-29 0-50.5-21.5T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h432q29.7 0 50.85 21.15Q720-725.7 720-696v168l144-144v384L720-432v168q0 29-21.15 50.5T648-192H216Zm0-72h432v-432H216v432Zm0 0v-432 432Z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</cr-iconset>
`;const iconsets=div.querySelectorAll("cr-iconset");for(const iconset of iconsets){document.head.appendChild(iconset)}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldMixinLit=superClass=>{class CrSearchFieldMixinLit extends superClass{constructor(){super(...arguments);this.label="";this.clearLabel="";this.hasSearchText=false;this.effectiveValue_="";this.searchDelayTimer_=-1}static get properties(){return{label:{type:String},clearLabel:{type:String},hasSearchText:{type:Boolean,reflect:true}}}getSearchInput(){assertNotReached()}getValue(){return this.getSearchInput().value}setValue(value,noEvent){const updated=this.updateEffectiveValue_(value);this.getSearchInput().value=this.effectiveValue_;if(!updated){if(value===""&&this.hasSearchText){this.hasSearchText=false}return}this.onSearchTermInput();if(!noEvent){this.fire("search-changed",this.effectiveValue_)}}scheduleSearch_(){if(this.searchDelayTimer_>=0){clearTimeout(this.searchDelayTimer_)}const length=this.getValue().length;const timeoutMs=length>0?500-100*(Math.min(length,4)-1):0;this.searchDelayTimer_=setTimeout((()=>{this.getSearchInput().dispatchEvent(new CustomEvent("search",{composed:true,detail:this.getValue()}));this.searchDelayTimer_=-1}),timeoutMs)}onSearchTermSearch(){this.onValueChanged_(this.getValue(),false)}onSearchTermInput(){this.hasSearchText=this.getSearchInput().value!=="";this.scheduleSearch_()}onValueChanged_(newValue,noEvent){const updated=this.updateEffectiveValue_(newValue);if(updated&&!noEvent){this.fire("search-changed",this.effectiveValue_)}}updateEffectiveValue_(value){const effectiveValue=value.replace(/\s+/g," ").replace(/^\s/,"");if(effectiveValue===this.effectiveValue_){return false}this.effectiveValue_=effectiveValue;return true}}return CrSearchFieldMixinLit};let instance$q=null;function getCss$o(){return instance$q||(instance$q=[...[],css`.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(//resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}`])}let instance$p=null;function getCss$n(){return instance$p||(instance$p=[...[getCss$u(),getCss$o()],css`[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#container.can-scroll:not(.scrolled-to-bottom)+#cr-container-shadow-bottom,#cr-container-shadow-bottom.force-shadow,#cr-container-shadow-top.force-shadow,#cr-container-shadow-top:has(+#container.can-scroll:not(.scrolled-to-top)){opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}cr-tooltip::part(tooltip),paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}`])}let instance$o=null;function getCss$m(){return instance$o||(instance$o=[...[getCss$n(),getCss$o()],css`:host{display:block;height:40px;isolation:isolate;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
        --cr-toolbar-search-field-input-icon-color,
        var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
        --cr-toolbar-icon-button-focus-outline-color,
        var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
        --cr-toolbar-search-field-input-icon-color,
        var(--google-grey-500))}}cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
      var(--color-toolbar-search-field-icon,
      var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}.spinner{mask-image:url(//resources/images/throbber_small.svg);mask-position:center;mask-repeat:no-repeat;mask-size:var(--cr-icon-size) var(--cr-icon-size);background-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));height:var(--cr-icon-size);margin:0;opacity:1;padding:2px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){.spinner{background-color:var(--cr-toolbar-search-field-input-icon-color,#fff)}}#prompt{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;font-size:12px;font-weight:500;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0);position:relative}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;font-size:12px;font-weight:500;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:0 0;border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);height:36px;max-width:var(--cr-toolbar-field-max-width,none);overflow:hidden;padding:0 6px;position:relative;width:var(--cr-toolbar-field-width,680px);--cr-toolbar-search-field-border-radius:100px}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}#background,#stateBackground{display:none}:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--color-toolbar-search-field-background-hover,var(--cr-hover-background-color));z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) .spinner{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%;position:relative;z-index:2}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$k(){return html`
<div id="background"></div>
<div id="stateBackground"></div>
<div id="content">
  ${this.shouldShowSpinner_()?html`
    <div class="spinner"></div>`:""}
    <cr-icon-button id="icon" iron-icon="${this.iconOverride||"cr:search"}"
        title="${this.label}" tabindex="${this.getIconTabIndex_()}"
        aria-hidden="${this.getIconAriaHidden_()}" suppress-rtl-flip
        @click="${this.onSearchIconClicked_}" ?disabled="${this.disabled}">
  </cr-icon-button>
  <div id="searchTerm">
    <label id="prompt" for="searchInput" aria-hidden="true">
      ${this.label}
    </label>
    <input id="searchInput"
        aria-labelledby="prompt"
        aria-description="${this.inputAriaDescription}"
        autocapitalize="off"
        autocomplete="off"
        type="search"
        @beforeinput="${this.onSearchTermNativeBeforeInput}"
        @input="${this.onSearchTermNativeInput}"
        @search="${this.onSearchTermSearch}"
        @keydown="${this.onSearchTermKeydown_}"
        @focus="${this.onInputFocus_}"
        @blur="${this.onInputBlur_}"
        ?autofocus="${this.autofocus}"
        spellcheck="false"
        ?disabled="${this.disabled}">
  </div>
  ${this.hasSearchText?html`
    <cr-icon-button id="clearSearch" iron-icon="cr:cancel"
        title="${this.clearLabel}" @click="${this.clearSearch_}"
        ?disabled="${this.disabled}"></cr-icon-button>`:""}
</div>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase=CrSearchFieldMixinLit(CrLitElement);class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase{constructor(){super(...arguments);this.narrow=false;this.showingSearch=false;this.disabled=false;this.autofocus=false;this.spinnerActive=false;this.searchFocused_=false;this.inputAriaDescription=""}static get is(){return"cr-toolbar-search-field"}static get styles(){return getCss$m()}render(){return getHtml$k.bind(this)()}static get properties(){return{narrow:{type:Boolean,reflect:true},showingSearch:{type:Boolean,notify:true,reflect:true},disabled:{type:Boolean,reflect:true},autofocus:{type:Boolean,reflect:true},spinnerActive:{type:Boolean,reflect:true},searchFocused_:{type:Boolean,reflect:true},iconOverride:{type:String},inputAriaDescription:{type:String}}}firstUpdated(){this.addEventListener("click",(e=>this.showSearch_(e)))}getSearchInput(){return this.$.searchInput}isSearchFocused(){return this.searchFocused_}async showAndFocus(){this.showingSearch=true;await this.updateComplete;this.focus_()}onSearchTermNativeBeforeInput(e){this.fire("search-term-native-before-input",{e:e})}onSearchTermInput(){super.onSearchTermInput();this.showingSearch=this.hasSearchText||this.isSearchFocused()}onSearchTermNativeInput(e){this.onSearchTermInput();this.fire("search-term-native-input",{e:e,inputValue:this.getValue()})}getIconTabIndex_(){return this.narrow&&!this.hasSearchText?0:-1}getIconAriaHidden_(){return Boolean(!this.narrow||this.hasSearchText).toString()}shouldShowSpinner_(){return this.spinnerActive&&this.showingSearch}onSearchIconClicked_(){this.fire("search-icon-clicked")}focus_(){this.getSearchInput().focus()}onInputFocus_(){this.searchFocused_=true}onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}}onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false;this.setValue("");this.getSearchInput().blur()}}async showSearch_(e){if(e.target!==this.shadowRoot.querySelector("#clearSearch")){this.showingSearch=true}if(this.narrow){await this.updateComplete;this.focus_()}}clearSearch_(){this.setValue("");this.focus_();this.spinnerActive=false;this.fire("search-term-cleared")}}customElements.define(CrToolbarSearchFieldElement.is,CrToolbarSearchFieldElement);let instance$n=null;function getCss$l(){return instance$n||(instance$n=[...[getCss$u(),getCss$o()],css`:host{align-items:center;box-sizing:border-box;color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{color:var(--cr-secondary-text-color)}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$j(){return html`
<div id="leftContent">
  <div id="leftSpacer">
    ${this.showMenu?html`
      <cr-icon-button id="menuButton" class="no-overlap"
          iron-icon="cr20:menu" @click="${this.onMenuClick_}"
          aria-label="${this.menuLabel||nothing}"
          title="${this.menuLabel}">
      </cr-icon-button>`:""}
    <slot name="product-logo">
      <picture>
        <source media="(prefers-color-scheme: dark)"
            srcset="//resources/images/chrome_logo_dark.svg">
        <img id="product-logo"
            srcset="chrome://theme/current-channel-logo@1x 1x,
                    chrome://theme/current-channel-logo@2x 2x"
            role="presentation">
      </picture>
    </slot>
    <h1>${this.pageName}</h1>
  </div>
</div>

<div id="centeredContent" ?hidden="${!this.showSearch}">
  <cr-toolbar-search-field id="search" ?narrow="${this.narrow}"
      label="${this.searchPrompt}" clear-label="${this.clearLabel}"
      ?spinner-active="${this.spinnerActive}"
      ?showing-search="${this.showingSearch_}"
      @showing-search-changed="${this.onShowingSearchChanged_}"
      ?autofocus="${this.autofocus}" icon-override="${this.searchIconOverride}"
      input-aria-description="${this.searchInputAriaDescription}">
  </cr-toolbar-search-field>
</div>

<div id="rightContent">
  <div id="rightSpacer">
    <slot></slot>
  </div>
</div>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends CrLitElement{constructor(){super(...arguments);this.pageName="";this.searchPrompt="";this.clearLabel="";this.spinnerActive=false;this.showMenu=false;this.showSearch=true;this.autofocus=false;this.narrow=false;this.narrowThreshold=900;this.alwaysShowLogo=false;this.showingSearch_=false;this.searchInputAriaDescription="";this.narrowQuery_=null}static get is(){return"cr-toolbar"}static get styles(){return getCss$l()}render(){return getHtml$j.bind(this)()}static get properties(){return{pageName:{type:String},searchPrompt:{type:String},clearLabel:{type:String},menuLabel:{type:String},spinnerActive:{type:Boolean},showMenu:{type:Boolean},showSearch:{type:Boolean},autofocus:{type:Boolean,reflect:true},narrow:{type:Boolean,reflect:true,notify:true},narrowThreshold:{type:Number},alwaysShowLogo:{type:Boolean,reflect:true},showingSearch_:{type:Boolean,reflect:true},searchIconOverride:{type:String},searchInputAriaDescription:{type:String}}}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("narrowThreshold")){this.narrowQuery_=window.matchMedia(`(max-width: ${this.narrowThreshold}px)`);this.narrow=this.narrowQuery_.matches;this.narrowQuery_.addListener((()=>this.onQueryChanged_()))}}getSearchField(){return this.$.search}onMenuClick_(){this.fire("cr-toolbar-menu-click")}async focusMenuButton(){assert(this.showMenu);await this.updateComplete;const menuButton=this.shadowRoot.querySelector("#menuButton");assert(!!menuButton);menuButton.focus()}isMenuFocused(){return!!this.shadowRoot.activeElement&&this.shadowRoot.activeElement.id==="menuButton"}onShowingSearchChanged_(e){this.showingSearch_=e.detail.value}onQueryChanged_(){assert(this.narrowQuery_);this.narrow=this.narrowQuery_.matches}}customElements.define(CrToolbarElement.is,CrToolbarElement);let instance$m=null;function getCss$k(){return instance$m||(instance$m=[...[],css`:host ::slotted([slot=view]){bottom:0;display:none;left:0;position:absolute;right:0;top:0}:host ::slotted(.active),:host ::slotted(.closing){display:block}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$i(){return html`<slot name="view"></slot>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getEffectiveView(element){return element.matches("cr-lazy-render, cr-lazy-render-lit")?element.get():element}function dispatchCustomEvent(element,eventType){element.dispatchEvent(new CustomEvent(eventType,{bubbles:true,composed:true}))}const viewAnimations=new Map;viewAnimations.set("fade-in",(element=>{const animation=element.animate([{opacity:0},{opacity:1}],{duration:180,easing:"ease-in-out",iterations:1});return animation.finished}));viewAnimations.set("fade-out",(element=>{const animation=element.animate([{opacity:1},{opacity:0}],{duration:180,easing:"ease-in-out",iterations:1});return animation.finished}));viewAnimations.set("slide-in-fade-in-ltr",(element=>{const animation=element.animate([{transform:"translateX(-8px)",opacity:0},{transform:"translateX(0)",opacity:1}],{duration:300,easing:"cubic-bezier(0.0, 0.0, 0.2, 1)",fill:"forwards",iterations:1});return animation.finished}));viewAnimations.set("slide-in-fade-in-rtl",(element=>{const animation=element.animate([{transform:"translateX(8px)",opacity:0},{transform:"translateX(0)",opacity:1}],{duration:300,easing:"cubic-bezier(0.0, 0.0, 0.2, 1)",fill:"forwards",iterations:1});return animation.finished}));class CrViewManagerElement extends CrLitElement{static get is(){return"cr-view-manager"}static get styles(){return getCss$k()}render(){return getHtml$i.bind(this)()}exit_(element,animation){const animationFunction=viewAnimations.get(animation);element.classList.remove("active");element.classList.add("closing");dispatchCustomEvent(element,"view-exit-start");if(!animationFunction){element.classList.remove("closing");dispatchCustomEvent(element,"view-exit-finish");return Promise.resolve()}return animationFunction(element).then((()=>{element.classList.remove("closing");dispatchCustomEvent(element,"view-exit-finish")}))}enter_(view,animation){const animationFunction=viewAnimations.get(animation);const effectiveView=getEffectiveView(view);effectiveView.classList.add("active");dispatchCustomEvent(effectiveView,"view-enter-start");if(!animationFunction){dispatchCustomEvent(effectiveView,"view-enter-finish");return Promise.resolve()}return animationFunction(effectiveView).then((()=>{dispatchCustomEvent(effectiveView,"view-enter-finish")}))}switchView(newViewId,enterAnimation,exitAnimation){const previousView=this.querySelector(".active");const newView=this.querySelector("#"+newViewId);assert(!!newView);const promises=[];if(previousView){promises.push(this.exit_(previousView,exitAnimation||"fade-out"));promises.push(this.enter_(newView,enterAnimation||"fade-in"))}else{promises.push(this.enter_(newView,"no-animation"))}return Promise.all(promises).then((()=>{}))}}customElements.define(CrViewManagerElement.is,CrViewManagerElement);const styleMod$6=document.createElement("dom-module");styleMod$6.appendChild(html$1`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$6.register("cr-hidden-style");const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html$1`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(//resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$5.register("cr-icons");
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSelectableMixin=superClass=>{class CrSelectableMixin extends superClass{constructor(){super(...arguments);this.attrForSelected=null;this.selectedAttribute=null;this.selectOnClick=true;this.items_=[];this.selectedItem_=null}static get properties(){return{attrForSelected:{type:String},selected:{type:String,notify:true},selectedAttribute:{type:String},selectable:{type:String}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.selectOnClick){this.addEventListener("click",(e=>this.onClick_(e)))}this.observeItems()}observeItems(){this.getSlot().addEventListener("slotchange",(()=>this.itemsChanged()))}connectedCallback(){super.connectedCallback();this.updateItems_()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("attrForSelected")){if(this.selectedItem_){assert(this.attrForSelected);const value=this.selectedItem_.getAttribute(this.attrForSelected);assert(value!==null);this.selected=value}}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("selected")){this.updateSelectedItem_()}}select(value){this.selected=value}selectPrevious(){const length=this.items_.length;let index=length-1;if(this.selected!==undefined){index=(this.valueToIndex_(this.selected)-1+length)%length}this.selected=this.indexToValue_(index)}selectNext(){const index=this.selected===undefined?0:(this.valueToIndex_(this.selected)+1)%this.items_.length;this.selected=this.indexToValue_(index)}getItemsForTest(){return this.items_}getSlot(){const slot=this.shadowRoot.querySelector("slot");assert(slot);return slot}queryItems(){const selectable=this.selectable===undefined?"*":this.selectable;return Array.from(this.querySelectorAll(`:scope > ${selectable}`))}queryMatchingItem(selector){const selectable=this.selectable||"*";return this.querySelector(`:scope > :is(${selectable})${selector}`)}updateItems_(){this.items_=this.queryItems();this.items_.forEach(((item,index)=>item.setAttribute("data-selection-index",index.toString())))}get selectedItem(){return this.selectedItem_}updateSelectedItem_(){if(!this.items_){return}const item=this.selected==null?null:this.items_[this.valueToIndex_(this.selected)];if(!!item&&this.selectedItem_!==item){this.setItemSelected_(this.selectedItem_,false);this.setItemSelected_(item,true)}else if(!item){this.setItemSelected_(this.selectedItem_,false)}}setItemSelected_(item,isSelected){if(!item){return}item.classList.toggle("selected",isSelected);if(this.selectedAttribute){item.toggleAttribute(this.selectedAttribute,isSelected)}this.selectedItem_=isSelected?item:null;this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})}valueToIndex_(value){if(!this.attrForSelected){return Number(value)}const match=this.queryMatchingItem(`[${this.attrForSelected}="${value}"]`);return match?Number(match.dataset["selectionIndex"]):-1}indexToValue_(index){if(!this.attrForSelected){return index}const item=this.items_[index];if(!item){return index}return item.getAttribute(this.attrForSelected)||index}itemsChanged(){this.updateItems_();this.updateSelectedItem_();this.fire("iron-items-changed")}onClick_(e){let element=e.target;while(element&&element!==this){const idx=this.items_.indexOf(element);if(idx>=0){const value=this.indexToValue_(idx);assert(value!==null);this.fire("iron-activate",{item:element,selected:value});this.select(value);return}element=element.parentNode}}}return CrSelectableMixin};let instance$l=null;function getCss$j(){return instance$l||(instance$l=[...[],css`:host{display:block}:host(:not([show-all]))>::slotted(:not(slot):not(.selected)){display:none!important}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$h(){return html`<slot></slot>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPageSelectorElementBase=CrSelectableMixin(CrLitElement);class CrPageSelectorElement extends CrPageSelectorElementBase{static get is(){return"cr-page-selector"}static get styles(){return getCss$j()}static get properties(){return{hasNestedSlots:{type:Boolean}}}render(){return getHtml$h.bind(this)()}constructor(){super();this.hasNestedSlots=false;this.selectOnClick=false}queryItems(){return this.hasNestedSlots?Array.from(this.getSlot().assignedElements({flatten:true})):super.queryItems()}queryMatchingItem(selector){if(this.hasNestedSlots){const match=this.queryItems().find((el=>el.matches(selector)));return match?match:null}return super.queryMatchingItem(selector)}observeItems(){if(this.hasNestedSlots){this.addEventListener("slotchange",(()=>this.itemsChanged()))}super.observeItems()}}customElements.define(CrPageSelectorElement.is,CrPageSelectorElement);let instance$k=null;function getCss$i(){return instance$k||(instance$k=[...[getCss$u()],css`:host{cursor:pointer;display:flex;flex-direction:row;font-size:var(--cr-tabs-font-size,14px);font-weight:500;height:var(--cr-tabs-height,48px);user-select:none}.tab{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex:var(--cr-tabs-flex,auto);height:100%;justify-content:center;opacity:1;outline:0;padding:0 var(--cr-tabs-tab-inline-padding,0);position:relative;transition:opacity .1s cubic-bezier(.4,0,1,1)}:host-context(.focus-outline-visible) .tab:focus{outline:var(--cr-tabs-focus-outline,auto);outline-offset:var(--cr-tabs-focus-outline-offset,0)}.selected{color:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}@media (prefers-color-scheme:dark){.selected{color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-tabs-icon-size,var(--cr-icon-size));background-color:var(--cr-secondary-text-color);display:none;height:var(--cr-tabs-icon-size,var(--cr-icon-size));margin-inline-end:var(--cr-tabs-icon-margin-end,var(--cr-icon-size));width:var(--cr-tabs-icon-size,var(--cr-icon-size))}.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-600))}@media (prefers-color-scheme:dark){.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-indicator,.tab-indicator-background{bottom:0;height:var(--cr-tabs-selection-bar-width,2px);left:var(--cr-tabs-tab-inline-padding,0);position:absolute;right:var(--cr-tabs-tab-inline-padding,0)}.tab-indicator{border-top-left-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));border-top-right-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));opacity:0;transform-origin:left center;transition:transform}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}.tab-indicator.expand{transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,1,1)}.tab-indicator.contract{transition-duration:180ms;transition-timing-function:cubic-bezier(0,0,.2,1)}.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-600));opacity:var(--cr-tabs-selection-bar-unselected-opacity,0);z-index:-1}@media (prefers-color-scheme:dark){.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-300))}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-300))}}@media (forced-colors:active){.tab-indicator{background:SelectedItem}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$g(){return html`${this.tabNames.map(((item,index)=>html`
<div role="tab"
    class="tab ${this.getSelectedClass_(index)}"
    aria-selected="${this.getAriaSelected_(index)}"
    tabindex="${this.getTabindex_(index)}"
    data-index="${index}" @click="${this.onTabClick_}">
  <div class="tab-icon" .style="${this.getIconStyle_(index)}"></div>
  ${item}
  <div class="tab-indicator-background"></div>
  <div class="tab-indicator"></div>
</div>
`))}`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NONE_SELECTED=-1;class CrTabsElement extends CrLitElement{constructor(){super(...arguments);this.tabIcons=[];this.tabNames=[];this.selected=NONE_SELECTED;this.isRtl_=false}static get is(){return"cr-tabs"}static get styles(){return getCss$i()}render(){return getHtml$g.bind(this)()}static get properties(){return{tabIcons:{type:Array},tabNames:{type:Array},selected:{type:Number,notify:true}}}connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-tabs")}firstUpdated(){this.setAttribute("role","tablist");this.addEventListener("keydown",this.onKeyDown_.bind(this))}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("selected")){this.onSelectedChanged_(this.selected,changedProperties.get("selected"))}}getAriaSelected_(index){return index===this.selected?"true":"false"}getIconStyle_(index){const icon=this.tabIcons[index];return icon?`-webkit-mask-image: url(${icon}); display: block;`:""}getTabindex_(index){return index===this.selected?"0":"-1"}getSelectedClass_(index){return index===this.selected?"selected":""}onSelectedChanged_(newSelected,oldSelected){if(newSelected===NONE_SELECTED||oldSelected===NONE_SELECTED||oldSelected===undefined){return}const tabs=this.shadowRoot.querySelectorAll(".tab");if(tabs.length<=oldSelected){return}const oldTabRect=tabs[oldSelected].getBoundingClientRect();const newTabRect=tabs[newSelected].getBoundingClientRect();const newIndicator=tabs[newSelected].querySelector(".tab-indicator");newIndicator.classList.remove("expand","contract");this.updateIndicator_(newIndicator,newTabRect,oldTabRect.left,oldTabRect.width);newIndicator.getBoundingClientRect();newIndicator.classList.add("expand");newIndicator.addEventListener("transitionend",(e=>this.onIndicatorTransitionEnd_(e)),{once:true});const leftmostEdge=Math.min(oldTabRect.left,newTabRect.left);const fullWidth=newTabRect.left>oldTabRect.left?newTabRect.right-oldTabRect.left:oldTabRect.right-newTabRect.left;this.updateIndicator_(newIndicator,newTabRect,leftmostEdge,fullWidth)}async onKeyDown_(e){const count=this.tabNames.length;let newSelection;if(e.key==="Home"){newSelection=0}else if(e.key==="End"){newSelection=count-1}else if(e.key==="ArrowLeft"||e.key==="ArrowRight"){const delta=e.key==="ArrowLeft"?this.isRtl_?1:-1:this.isRtl_?-1:1;newSelection=(count+this.selected+delta)%count}else{return}e.preventDefault();e.stopPropagation();this.selected=newSelection;await this.updateComplete;this.shadowRoot.querySelector(".tab.selected").focus()}onIndicatorTransitionEnd_(event){const indicator=event.target;indicator.classList.replace("expand","contract");indicator.style.transform=`translateX(0) scaleX(1)`}onTabClick_(e){const target=e.currentTarget;this.selected=Number(target.dataset["index"])}updateIndicator_(indicator,originRect,newLeft,newWidth){const leftDiff=100*(newLeft-originRect.left)/originRect.width;const widthRatio=newWidth/originRect.width;const transform=`translateX(${leftDiff}%) scaleX(${widthRatio})`;indicator.style.transform=transform}}customElements.define(CrTabsElement.is,CrTabsElement);const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html$1`
  <template>
    <style include="cr-hidden-style cr-icons">
[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#container.can-scroll:not(.scrolled-to-bottom)+#cr-container-shadow-bottom,#cr-container-shadow-bottom.force-shadow,#cr-container-shadow-top.force-shadow,#cr-container-shadow-top:has(+#container.can-scroll:not(.scrolled-to-top)){opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}cr-tooltip::part(tooltip),paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$4.register("cr-shared-style");
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{focusByKeyboard_=true;classList_;constructor(doc){this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(e=>this.onEvent_(true,e)),true);doc.addEventListener("mousedown",(e=>this.onEvent_(false,e)),true);this.updateVisibility()}onEvent_(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}if(e instanceof KeyboardEvent&&e.repeat){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}let instance$j=null;function getCss$h(){return instance$j||(instance$j=[...[getCss$u()],css`:host{--cr-button-background-color:transparent;--cr-button-border-color:var(--color-button-border,
      var(--cr-fallback-color-tonal-outline));--cr-button-text-color:var(--color-button-foreground,
      var(--cr-fallback-color-primary));--cr-button-ripple-opacity:1;--cr-button-ripple-color:var(--cr-active-background-color);--cr-button-disabled-background-color:transparent;--cr-button-disabled-border-color:var(--color-button-border-disabled,
      var(--cr-fallback-color-disabled-background));--cr-button-disabled-text-color:var(--color-button-foreground-disabled,
      var(--cr-fallback-color-disabled-foreground))}:host(.action-button){--cr-button-background-color:var(--color-button-background-prominent,
      var(--cr-fallback-color-primary));--cr-button-text-color:var(--color-button-foreground-prominent,
      var(--cr-fallback-color-on-primary));--cr-button-ripple-color:var(--cr-active-on-primary-background-color);--cr-button-border:none;--cr-button-disabled-background-color:var(
      --color-button-background-prominent-disabled,
      var(--cr-fallback-color-disabled-background));--cr-button-disabled-text-color:var(--color-button-foreground-disabled,
      var(--cr-fallback-color-disabled-foreground));--cr-button-disabled-border:none}:host(.floating-button),:host(.tonal-button){--cr-button-background-color:var(--color-button-background-tonal,
      var(--cr-fallback-color-secondary-container));--cr-button-text-color:var(--color-button-foreground-tonal,
      var(--cr-fallback-color-on-tonal-container));--cr-button-border:none;--cr-button-disabled-background-color:var(
      --color-button-background-tonal-disabled,
      var(--cr-fallback-color-disabled-background));--cr-button-disabled-text-color:var(--color-button-foreground-disabled,
      var(--cr-fallback-color-disabled-foreground));--cr-button-disabled-border:none}:host{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:5.14em;height:var(--cr-button-height);padding:8px 16px;outline-width:0;overflow:hidden;position:relative;cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;border:var(--cr-button-border,1px solid var(--cr-button-border-color));border-radius:100px;background:var(--cr-button-background-color);color:var(--cr-button-text-color);font-weight:500;line-height:20px;isolation:isolate}@media (forced-colors:active){:host{forced-color-adjust:none}}:host(.floating-button){border-radius:8px;height:40px;transition:box-shadow 80ms linear}:host(.floating-button:hover){box-shadow:var(--cr-elevation-3)}:host([has-prefix-icon_]),:host([has-suffix-icon_]){--iron-icon-height:20px;--iron-icon-width:20px;--icon-block-padding-large:16px;--icon-block-padding-small:12px;gap:8px;padding-block-end:8px;padding-block-start:8px}:host([has-prefix-icon_]){padding-inline-end:var(--icon-block-padding-large);padding-inline-start:var(--icon-block-padding-small)}:host([has-suffix-icon_]){padding-inline-end:var(--icon-block-padding-small);padding-inline-start:var(--icon-block-padding-large)}:host-context(.focus-outline-visible):host(:focus){box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}#background{border-radius:inherit;inset:0;pointer-events:none;position:absolute}#content{display:inline}#hoverBackground{content:'';display:none;inset:0;pointer-events:none;position:absolute;z-index:1}:host(:hover) #hoverBackground{background:var(--cr-hover-background-color);display:block}:host(.action-button:hover) #hoverBackground{background:var(--cr-hover-on-prominent-background-color)}:host([disabled]){background:var(--cr-button-disabled-background-color);border:var(--cr-button-disabled-border,1px solid var(--cr-button-disabled-border-color));color:var(--cr-button-disabled-text-color);cursor:auto;pointer-events:none}:host(.cancel-button){margin-inline-end:8px}:host(.action-button),:host(.cancel-button){line-height:154%}#ink{color:var(--cr-button-ripple-color);--paper-ripple-opacity:var(--cr-button-ripple-opacity)}#background{z-index:0}#hoverBackground,cr-ripple{z-index:1}#content,::slotted(*){z-index:2}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$f(){return html`
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon"
    @slotchange="${this.onPrefixIconSlotChanged_}">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon"
    @slotchange="${this.onSuffixIconSlotChanged_}">
</slot>
<div id="hoverBackground" part="hoverBackground"></div>`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrButtonElementBase=CrRippleMixin(CrLitElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get styles(){return getCss$h()}render(){return getHtml$f.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},hasPrefixIcon_:{type:Boolean,reflect:true},hasSuffixIcon_:{type:Boolean,reflect:true}}}constructor(){super();this.disabled=false;this.hasPrefixIcon_=false;this.hasSuffixIcon_=false;this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.ensureRippleOnPointerdown()}firstUpdated(){if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}FocusOutlineManager.forDocument(document)}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false");this.disabledChanged_(this.disabled,changedProperties.get("disabled"))}}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("tabindex",String(this.disabled?-1:0))}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}}customElements.define(CrButtonElement.is,CrButtonElement);let instance$i=null;function getCss$g(){return instance$i||(instance$i=[...[],css`:host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,
            var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));display:block;isolation:isolate;outline:0}:host([readonly]){--cr-input-border-radius:8px 8px}#label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}#inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}#inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}#inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{background-color:var(--cr-input-hover-background-color);display:none;inset:0;pointer-events:none;position:absolute;z-index:0}:host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:var(--cr-input-font-size,12px);font-weight:inherit;line-height:16px;min-height:var(--cr-input-min-height,auto);outline:0;padding:0;text-align:inherit;text-overflow:ellipsis;width:100%}#inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host([readonly]) #underline{display:none}:host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,
            var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}`])}let instance$h=null;function getCss$f(){return instance$h||(instance$h=[...[getCss$u(),getCss$g(),getCss$n()],css`:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:none;letter-spacing:var(--cr-input-letter-spacing)}#input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:11px;height:var(--cr-form-field-label-height);line-height:16px;margin:4px 10px;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}#inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$e(){return html`
<div id="label" class="cr-form-field-label" ?hidden="${!this.label}"
    aria-hidden="true">
  ${this.label}
</div>
<div id="row-container" part="row-container">
  <div id="input-container">
    <div id="inner-input-container">
      <div id="hover-layer"></div>
      <div id="inner-input-content">
        <slot name="inline-prefix"></slot>
        <input id="input" ?disabled="${this.disabled}"
            ?autofocus="${this.autofocus}"
            .value="${this.internalValue_}" tabindex="${this.inputTabindex}"
            .type="${this.type}"
            ?readonly="${this.readonly}" maxlength="${this.maxlength}"
            pattern="${this.pattern||nothing}" ?required="${this.required}"
            minlength="${this.minlength}" inputmode="${this.inputmode}"
            aria-description="${this.ariaDescription||nothing}"
            aria-errormessage="${this.getAriaErrorMessage_()||nothing}"
            aria-label="${this.getAriaLabel_()}"
            aria-invalid="${this.getAriaInvalid_()}"
            .max="${this.max||nothing}" .min="${this.min||nothing}"
            @focus="${this.onInputFocus_}"
            @blur="${this.onInputBlur_}" @change="${this.onInputChange_}"
            @input="${this.onInput_}"
            part="input"
            autocomplete="off">
        <slot name="inline-suffix"></slot>
      </div>
    </div>
    <div id="underline-base"></div>
    <div id="underline"></div>
  </div>
  <slot name="suffix"></slot>
</div>
<div id="error" role="${this.getErrorRole_()||nothing}"
    aria-live="assertive">${this.getErrorMessage_()}</div>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends CrLitElement{constructor(){super(...arguments);this.ariaDescription=null;this.ariaLabel="";this.autofocus=false;this.autoValidate=false;this.disabled=false;this.errorMessage="";this.inputTabindex=0;this.invalid=false;this.label="";this.placeholder=null;this.readonly=false;this.required=false;this.type="text";this.value="";this.internalValue_="";this.focused_=false}static get is(){return"cr-input"}static get styles(){return getCss$f()}render(){return getHtml$e.bind(this)()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String},autofocus:{type:Boolean,reflect:true},autoValidate:{type:Boolean},disabled:{type:Boolean,reflect:true},errorMessage:{type:String},errorRole_:{type:String},displayErrorMessage_:{type:String},focused_:{type:Boolean,reflect:true},invalid:{type:Boolean,notify:true,reflect:true},max:{type:Number,reflect:true},min:{type:Number,reflect:true},maxlength:{type:Number,reflect:true},minlength:{type:Number,reflect:true},pattern:{type:String,reflect:true},inputmode:{type:String},label:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflect:true},required:{type:Boolean,reflect:true},inputTabindex:{type:Number},type:{type:String},value:{type:String,notify:true},internalValue_:{type:String,state:true}}}firstUpdated(){assert(!this.hasAttribute("tabindex"))}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("value")){this.internalValue_=this.value===undefined||this.value===null?"":this.value}if(changedProperties.has("inputTabindex")){assert(this.inputTabindex===0||this.inputTabindex===-1)}if(changedProperties.has("type")){assert(SUPPORTED_INPUT_TYPES.has(this.type))}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("value")){const previous=changedProperties.get("value");if((!!this.value||!!previous)&&this.autoValidate){this.invalid=!this.inputElement.checkValidity()}}if(changedProperties.has("placeholder")){if(this.placeholder===null||this.placeholder===undefined){this.inputElement.removeAttribute("placeholder")}else{this.inputElement.setAttribute("placeholder",this.placeholder)}}}get inputElement(){return this.$.input}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}async onInputChange_(e){await this.updateComplete;this.fire("change",{sourceEvent:e})}onInput_(e){this.internalValue_=e.target.value;this.value=this.internalValue_}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}getAriaLabel_(){return this.ariaLabel||this.label||this.placeholder}getAriaInvalid_(){return this.invalid?"true":"false"}getErrorMessage_(){return this.invalid?this.errorMessage:""}getErrorRole_(){return this.invalid?"alert":""}getAriaErrorMessage_(){return this.invalid?"error":""}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.performUpdate();this.invalid=!this.inputElement.checkValidity();this.performUpdate();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);let instance$g=null;function getCss$e(){return instance$g||(instance$g=[...[getCss$n(),getCss$g()],css`:host{display:flex;user-select:none;--cr-search-field-clear-icon-fill:var(--google-grey-700);--cr-search-field-clear-icon-margin-end:-4px;--cr-search-field-input-border-bottom:1px solid var(--cr-secondary-text-color)}#searchIcon{align-self:center;display:var(--cr-search-field-search-icon-display,inherit);height:16px;padding:4px;vertical-align:middle;width:16px}#searchIconInline{--iron-icon-fill-color:var(--cr-search-field-search-icon-fill, inherit);display:var(--cr-search-field-search-icon-inline-display,none);margin-inline-start:var(--cr-search-field-search-icon-inline-margin-start,0)}#searchInput{--cr-input-background-color:transparent;--cr-input-border-bottom:var(--cr-search-field-input-border-bottom);--cr-input-border-radius:0;--cr-input-error-display:none;--cr-input-min-height:var(--cr-search-field-input-min-height, 24px);--cr-input-padding-end:0;--cr-input-padding-start:var(--cr-search-field-input-padding-start, 0);--cr-input-padding-bottom:var(--cr-search-field-input-padding-bottom, 2px);--cr-input-padding-top:var(--cr-search-field-input-padding-top, 2px);--cr-input-placeholder-color:var(--cr-search-field-placeholder-color);--cr-input-underline-display:var(--cr-search-field-underline-display);--cr-input-underline-border-radius:var(--cr-search-field-input-underline-border-radius, 0);--cr-input-underline-height:var(--cr-search-field-input-underline-height, 0);align-self:stretch;color:var(--cr-primary-text-color);display:block;font-size:92.3076923%;width:var(--cr-search-field-input-width,160px)}:host([has-search-text]) #searchInput{--cr-input-padding-end:calc(24px +
    var(--cr-search-field-clear-icon-margin-end))}#clearSearch{--cr-icon-button-fill-color:var(--cr-search-field-clear-icon-fill);--cr-icon-button-icon-size:var(--cr-search-field-clear-icon-size, 16px);--cr-icon-button-size:var(--cr-search-field-clear-button-size, 24px);margin-inline-end:var(--cr-search-field-clear-icon-margin-end);margin-inline-start:4px;position:absolute;right:0;z-index:1}:host-context([dir=rtl]) #clearSearch{left:0;right:auto}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$d(){return html`
<cr-icon id="searchIcon" icon="cr:search" part="searchIcon"></cr-icon>
<cr-input id="searchInput" part="searchInput"
    @search="${this.onSearchTermSearch}" @input="${this.onSearchTermInput}"
    aria-label="${this.label}" type="search" ?autofocus="${this.autofocus}"
    .placeholder="${this.label}" spellcheck="false">
  <cr-icon id="searchIconInline" slot="inline-prefix" icon="cr:search">
  </cr-icon>
  <cr-icon-button id="clearSearch" class="icon-cancel" slot="suffix"
      ?hidden="${!this.hasSearchText}"  @click="${this.onClearSearchClick_}"
      .title="${this.clearLabel}">
  </cr-icon-button>
</cr-input>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldElementBase=CrSearchFieldMixinLit(CrLitElement);class CrSearchFieldElement extends CrSearchFieldElementBase{constructor(){super(...arguments);this.autofocus=false}static get is(){return"cr-search-field"}static get styles(){return getCss$e()}render(){return getHtml$d.bind(this)()}static get properties(){return{autofocus:{type:Boolean}}}getSearchInput(){return this.$.searchInput}onClearSearchClick_(){this.setValue("");setTimeout((()=>{this.$.searchInput.focus()}))}}customElements.define(CrSearchFieldElement.is,CrSearchFieldElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:false}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach((function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}}),this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return true},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:false})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false},_requestResizeNotifications:function(){if(!this.isAttached){return}if(document.readyState==="loading"){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()}))}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach((function(orphan){if(orphan!==this){orphan._findParent()}}),this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach((function(resizable){if(resizable!==this){resizable._findParent()}}),this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:true,_scrollTargetChanged:function(scrollTarget,isAttached){if(this._oldScrollTarget){this._toggleScrollListener(false,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if(scrollTarget==="document"){this.scrollTarget=this._doc}else if(typeof scrollTarget==="string"){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if(typeof leftOrOptions==="object"){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);var IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8;var DEFAULT_PHYSICAL_COUNT=3;var HIDDEN_Y="-10000px";var SECRET_TABINDEX=-100;Polymer({_template:html$1`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:false,reflectToAttribute:true,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:false},selectedItem:{type:Object,notify:true},selectedItems:{type:Object,notify:true},multiSelection:{type:Boolean,value:false},scrollOffset:{type:Number,value:0},preserveFocus:{type:Boolean,value:false}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:true,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(val<0){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(idx==null){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems((function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}}))||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(idx==null){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems((function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)}))}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),true)},attached:function(){this._debounce("_render",this._render,animationFrame);this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,animationFrame)},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=Boolean(styles.direction==="rtl");this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));var delta=scrollTop-this._scrollPosition;var isScrollingDown=delta>=0;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(Math.abs(delta)>this._physicalSize&&this._physicalSize>0){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition);this._update()}else if(this._physicalCount>0){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables:function(fromTop){var ith,offsetContent,physicalItemHeight;var idxs=[];var protectedOffsetContent=this._hiddenContentSize*this._ratio;var virtualStart=this._virtualStart;var virtualEnd=this._virtualEnd;var physicalCount=this._physicalCount;var top=this._physicalTop+this._scrollOffset;var bottom=this._physicalBottom+this._scrollOffset;var scrollTop=this._scrollPosition;var scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;this._physicalStart;offsetContent=bottom-scrollBottom}while(true){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(virtualStart-idxs.length<=0){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=ith===0?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&itemSet.length===0||this._physicalCount===0){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_createPool:function(size){this._ensureTemplatized();var i,inst;var physicalItems=new Array(size);for(i=0;i<size;i++){inst=this.stamp(null);physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount;var nextIncrease=Math.round(this._physicalCount*.5);if(delta<0){return}if(delta>0){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(this._physicalCount*.5)}if(this._virtualEnd>=this._virtualCount-1||nextIncrease===0);else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),microTask)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),idlePeriod)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(this._physicalCount!==0){var reusables=this._getReusables(true);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(this._virtualCount>0){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={};instanceProps.__key__=true;instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.selectedAs]=true;instanceProps.tabIndex=true;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if(typeof oldGrid==="undefined")return;this.notifyResize();flush();newGrid&&this._updateGridMetrics()},_getFocusedElement:function(){function doSearch(node,query){let result=null;let type=node.nodeType;if(type==Node.ELEMENT_NODE||type==Node.DOCUMENT_FRAGMENT_NODE)result=node.querySelector(query);if(result)return result;let child=node.firstChild;while(child!==null&&result===null){result=doSearch(child,query);child=child.nextSibling}if(result)return result;const shadowRoot=node.shadowRoot;return shadowRoot?doSearch(shadowRoot,query):null}const focusWithin=doSearch(this,":focus-within");return focusWithin?doSearch(focusWithin,":focus"):null},_itemsChanged:function(change){var rendering=/^items(\.splices){0,1}$/.test(change.path);var lastFocusedIndex,focusedElement;if(rendering&&this.preserveFocus){lastFocusedIndex=this._focusedVirtualIndex;focusedElement=this._getFocusedElement()}var preservingFocus=rendering&&this.preserveFocus&&focusedElement;if(change.path==="items"){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset&&!preservingFocus){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,animationFrame)}else if(change.path==="items.splices"){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;var itemAddedOrRemoved=change.value.indexSplices.some((function(splice){return splice.addedCount>0||splice.removed.length>0}));if(itemAddedOrRemoved){var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}var affectedIndexRendered=change.value.indexSplices.some((function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd}),this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,animationFrame)}}else if(change.path!=="items.length"){this._forwardItemPath(change.path,change.value)}if(preservingFocus){flush();focusedElement.blur();this._focusPhysicalItem(Math.min(this.items.length-1,lastFocusedIndex));if(!this._isIndexVisible(this._focusedVirtualIndex)){this.scrollToIndex(this._focusedVirtualIndex)}}},_forwardItemPath:function(path,value){path=path.slice(6);var dot=path.indexOf(".");if(dot===-1){dot=path.length}var isIndexRendered;var pidx;var inst;var offscreenInstance=this.modelForElement(this._offscreenFocusedItem);var vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,false,true);inst._flushProperties&&inst._flushProperties();if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},_adjustVirtualIndex:function(splices){splices.forEach((function(splice){splice.removed.forEach(this._removeItem,this);if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(this._focusedVirtualIndex>=0){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}}),this)},_removeItem:function(item){this.$.selector.deselect(item);if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(arguments.length===2&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_assignModels:function(itemSet){this._iterateItems((function(pidx,vidx){var el=this._physicalItems[pidx];var item=this.items&&this.items[vidx];if(item!=null){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(true);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}}),itemSet)},_updateMetrics:function(itemSet){flush();var newPhysicalSize=0;var oldPhysicalSize=0;var prevAvgCount=this._physicalAverageCount;var prevPhysicalAvg=this._physicalAverage;this._iterateItems((function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0}),itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=this._itemsPerRow===1?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth;var rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems((function(pidx,vidx){var modulus=vidx%this._itemsPerRow;var x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=x*-1}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}}))}else{const order=[];this._iterateItems((function(pidx,vidx){const item=this._physicalItems[pidx];this.translate3d(0,y+"px",0,item);y+=this._physicalSizes[pidx];const itemId=item.id;if(itemId){order.push(itemId)}}));if(order.length){this.setAttribute("aria-owns",order.join(" "))}}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var deltaHeight=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(deltaHeight!==0){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollPosition;if(!IOS_TOUCH_SCROLLING&&scrollTop>0){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&pos>=0){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||this._scrollHeight===0;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},scrollToIndex:function(idx){if(typeof idx!=="number"||idx<0||idx>this.items.length-1){return}flush();if(this._physicalCount===0){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-this._itemsPerRow*2:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart;var currentVirtualItem=this._virtualStart;var targetOffsetTop=0;var hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(true);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();this.toggleScrollListener(true);this._resetAverage();this._render()}else{this.toggleScrollListener(false)}}),animationFrame)},selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},selectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=true}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},deselectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=false;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},clearSelection:function(){this._iterateItems((function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=false}));this.$.selector.clearSelection()},_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex;var target=dom(e).path[0];var activeEl=this._getActiveElement();var physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];if(target.localName==="input"||target.localName==="button"||target.localName==="select"){return}modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(fidx>=0&&fidx<this._virtualCount){if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(this._virtualCount>0&&this._physicalCount>0){this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(idx<0||idx>=this._virtualCount){return}this._restoreFocusedItem();if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)];var model=this.modelForElement(physicalItem);var focusable;model.tabIndex=SECRET_TABINDEX;if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}if(!focusable){focusable=dom(physicalItem).querySelector('[tabindex="'+SECRET_TABINDEX+'"]')}model.tabIndex=0;this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}if(!this._focusBackfillItem){var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}this._assignModels();var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex);var onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem);var offScreenInstance=this.modelForElement(this._offscreenFocusedItem);if(onScreenInstance[this.as]===offScreenInstance[this.as]){this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;this._physicalItems[fpidx]=this._offscreenFocusedItem;this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target);var focusedModel=this.modelForElement(this._focusedItem);var hasOffscreenFocusedItem=this._offscreenFocusedItem!==null;var fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel!==targetModel){this._restoreFocusedItem();if(focusedModel){focusedModel.tabIndex=-1}targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case 40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:if(this._focusedVirtualIndex>0)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}}),this)},_notifyInstancePropV2:function(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(path.indexOf(this.as+".")===0){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item).notifyPath(path,value)}}),this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item)[prop]=value}}),this)},_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});const sheet=new CSSStyleSheet;sheet.replaceSync(`html{--error-color:var(--google-red-700);--warning-color:rgb(242, 153, 0);--extensions-card-height:160px;--separator-gap:9px;--sidebar-width:256px;--cr-toolbar-field-width:680px;--paper-grey-300:#e0e0e0;--panel-icon-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--panel-icon-color:var(--google-grey-500);--error-color:var(--google-red-300);--warning-color:var(--google-yellow-300)}}`);document.adoptedStyleSheets=[...document.adoptedStyleSheets,sheet];const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html$1`
  <template>
    <style include="cr-shared-style">
a[href]{color:var(--cr-link-color)}.activity-message{color:var(--md-loading-message-color);font-size:123%;font-weight:500;margin-top:80px;text-align:center}.activity-subpage-header{display:flex;justify-content:flex-end;padding:12px 12px}.activity-table-headings{align-items:center;display:flex;flex-direction:row;font-weight:500;margin-inline-end:auto;min-height:calc(var(--cr-section-min-height) - var(--separator-gap));padding:0 var(--cr-section-padding)}.clear-activities-button{margin:0 8px}.matching-restricted-sites-warning{align-items:flex-start;display:flex;flex-direction:row}.matching-restricted-sites-warning cr-icon{fill:var(--warning-color);margin-inline-end:8px;min-height:var(--cr-icon-size);min-width:var(--cr-icon-size)}.page-container{height:100%}.page-content{background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);box-sizing:border-box;margin:auto;min-height:100%;padding-bottom:64px;width:var(--cr-toolbar-field-width)}.page-header{align-items:center;display:flex;height:40px;margin-bottom:12px;padding:8px 12px 0}.link-icon-button{align-items:center;display:flex;justify-content:center}.separator{border-inline-start:var(--cr-separator-line);flex-shrink:0;height:calc(var(--cr-section-min-height) - var(--separator-gap));margin-inline-end:var(--cr-section-padding);margin-inline-start:0}.site-favicon{background-size:100% 100%;height:var(--cr-icon-size);min-width:var(--cr-icon-size)}.panel-title{font-size:15px;font-weight:400;margin:0 0 16px 5px}.panel-background{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding:0 var(--cr-section-padding);container-type:inline-size}.panel-header{align-items:center;display:flex;padding:var(--cr-section-padding) 0}.panel-header-text{padding-inline-start:20px}.panel-header-text h3{margin:0;font-weight:400}.panel-header-icon{align-items:center;fill:var(--panel-icon-color)}.panel-extensions{border-top:var(--cr-separator-line);padding:calc(var(--cr-section-padding) - 6px) 0}.panel-extension-row{border-top:none}.panel-extension-info{padding-inline-start:18px;margin-inline:8px;max-width:100%;overflow:hidden;text-overflow:ellipsis}.panel-extension-icon{height:var(--cr-icon-size);width:var(--cr-icon-size)}
@container (max-width:450px) {
  .panel-header-icon {
    display: none;
  }

  .panel-header-text {
    padding-inline-start: 0;
  }
}

    </style>
  </template>
`.content);styleMod$3.register("shared-style");
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const isMac=/Mac/.test(navigator.platform);const isWindows=/Win/.test(navigator.platform);const isChromeOS=(()=>{let returnValue=false;returnValue=true;return returnValue})();const isAndroid=/Android/.test(navigator.userAgent);const isIOS=/CriOS/.test(navigator.userAgent);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk=false;assert(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);function focusWithoutInk(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}const toFocusWithNoInk=toFocus;assert(document===toFocusWithNoInk.ownerDocument);const{noink:noink}=toFocusWithNoInk;toFocusWithNoInk.noink=true;toFocusWithNoInk.focus();toFocusWithNoInk.noink=noink}let instance$f=null;function getCss$d(){return instance$f||(instance$f=[...[],css`:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}`])}let instance$e=null;function getCss$c(){return instance$e||(instance$e=[...[getCss$d()],css`:host([disabled]){opacity:.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size, 20px);--cr-icon-button-size:var(--cr-expand-button-size, 36px)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$c(){return html`
<div id="label" aria-hidden="true"><slot></slot></div>
<cr-icon-button id="icon" aria-labelledby="label" ?disabled="${this.disabled}"
    aria-expanded="${this.getAriaExpanded_()}"
    tabindex="${this.tabIndex}" part="icon" iron-icon="${this.getIcon_()}">
</cr-icon-button>`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrExpandButtonElement extends CrLitElement{constructor(){super(...arguments);this.expanded=false;this.disabled=false;this.expandIcon="cr:expand-more";this.collapseIcon="cr:expand-less";this.tabIndex=0}static get is(){return"cr-expand-button"}static get styles(){return getCss$c()}render(){return getHtml$c.bind(this)()}static get properties(){return{expanded:{type:Boolean,notify:true},disabled:{type:Boolean,reflect:true},ariaLabel:{type:String},tabIndex:{type:Number},expandIcon:{type:String},collapseIcon:{type:String},expandTitle:{type:String},collapseTitle:{type:String}}}firstUpdated(){this.addEventListener("click",this.toggleExpand_)}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("expanded")||changedProperties.has("collapseTitle")||changedProperties.has("expandTitle")){this.title=(this.expanded?this.collapseTitle:this.expandTitle)||""}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("ariaLabel")){this.onAriaLabelChange_()}}focus(){this.$.icon.focus()}getIcon_(){return this.expanded?this.collapseIcon:this.expandIcon}getAriaExpanded_(){return this.expanded?"true":"false"}onAriaLabelChange_(){if(this.ariaLabel){this.$.icon.removeAttribute("aria-labelledby");this.$.icon.setAttribute("aria-label",this.ariaLabel)}else{this.$.icon.removeAttribute("aria-label");this.$.icon.setAttribute("aria-labelledby","label")}}toggleExpand_(event){event.stopPropagation();event.preventDefault();this.scrollIntoViewIfNeeded();this.expanded=!this.expanded;focusWithoutInk(this.$.icon)}}customElements.define(CrExpandButtonElement.is,CrExpandButtonElement);function getTemplate$y(){return html$1`<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{border-top:var(--cr-separator-line);display:block;padding:8px var(--cr-section-padding)}cr-expand-button{--cr-expand-button-disabled-display:none;height:calc(var(--cr-section-min-height) - var(--separator-gap))}cr-expand-button[disabled]{opacity:1}#activity-call-and-time{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-time-width)}#activity-type{min-width:var(--activity-type-width)}#activity-name{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-time{min-width:var(--activity-time-width);text-align:end}#expanded-data{display:flex;flex-direction:column;margin-inline-start:16px;max-width:var(--activity-log-call-and-time-width)}#page-url-link{margin-bottom:10px;margin-inline-end:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}#args-list,#web-request-section{display:flex;flex-direction:column;margin-bottom:10px}.expanded-data-heading{font-weight:500}.list-item{display:flex;margin-top:10px}.index{min-width:3em}#web-request-details,.arg{overflow:hidden;overflow-wrap:break-word}#web-request-details{margin-top:10px}</style>
<cr-expand-button expanded="[[data.expanded]]" disabled="[[!isExpandable_]]" on-click="onExpandClick_">
  <div id="activity-call-and-time">
    <span id="activity-type">[[data.activityType]]</span>
    <span id="activity-name" title="[[data.name]]">[[data.name]]</span>
    <span id="activity-time">[[getFormattedTime_(data.timeStamp)]]</span>
  </div>
</cr-expand-button>
<div id="expanded-data" hidden$="[[!data.expanded]]">
  <a id="page-url-link" href="[[data.pageUrl]]" target="_blank" hidden$="[[!hasPageUrl_(data.pageUrl)]]" title="[[data.pageUrl]]">[[data.pageUrl]]</a>
  <div id="args-list" hidden$="[[!hasArgs_(argsList_)]]">
    <span class="expanded-data-heading">
      API function arguments
    </span>
    <template is="dom-repeat" items="[[argsList_]]">
      <div class="list-item">
        <span class="index">[[item.index]]</span>
        <span class="arg">[[item.arg]]</span>
      </div>
    </template>
  </div>
  <div id="web-request-section" hidden$="[[!hasWebRequestInfo_(data.webRequestInfo)]]">
    <span class="expanded-data-heading">Web request info</span>
    <span id="web-request-details">[[data.webRequestInfo]]</span>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ARG_URL_PLACEHOLDER="<arg_url>";const ARG_URL_PLACEHOLDER_REGEX=/"<arg_url>"/g;class ActivityLogStreamItemElement extends PolymerElement{static get is(){return"activity-log-stream-item"}static get template(){return getTemplate$y()}static get properties(){return{data:Object,argsList_:{type:Array,computed:"computeArgsList_(data.args)"},isExpandable_:{type:Boolean,computed:"computeIsExpandable_(data)"}}}computeIsExpandable_(){return this.hasPageUrl_()||this.hasArgs_()||this.hasWebRequestInfo_()}getFormattedTime_(){const activityDate=new Date(this.data.timestamp);const timeString=activityDate.toLocaleTimeString(undefined,{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"});const ms=activityDate.getMilliseconds().toString().padStart(3,"0");return`${timeString}.${ms}`}hasPageUrl_(){return!!this.data.pageUrl}hasArgs_(){return this.argsList_.length>0}hasWebRequestInfo_(){return!!this.data.webRequestInfo&&this.data.webRequestInfo!=="{}"}computeArgsList_(){const parsedArgs=JSON.parse(this.data.args);if(!Array.isArray(parsedArgs)){return[]}return parsedArgs.map(((arg,i)=>({arg:JSON.stringify(arg).replace(ARG_URL_PLACEHOLDER_REGEX,`"${this.data.argUrl}"`),index:i+1})))}onExpandClick_(){if(this.isExpandable_){this.set("data.expanded",!this.data.expanded);this.dispatchEvent(new CustomEvent("resize-stream"))}}}customElements.define(ActivityLogStreamItemElement.is,ActivityLogStreamItemElement);function getTemplate$x(){return html$1`<!--_html_template_start_--><style include="shared-style">:host{--activity-log-call-and-time-width:575px;--activity-type-width:85px;--activity-time-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}.activity-table-headings{width:var(--activity-log-call-and-time-width)}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-time{flex:0 var(--activity-time-width);text-align:end}iron-list{flex:1}</style>
<div class="activity-subpage-header">
  <cr-search-field label="Search by API call/URL" on-search-changed="onSearchChanged_">
  </cr-search-field>
  <cr-button id="toggle-stream-button" on-click="onToggleButtonClick_">
    <span hidden$="[[isStreamOn_]]">
      Start recording
    </span>
    <span hidden$="[[!isStreamOn_]]">
      Stop recording
    </span>
  </cr-button>
  <cr-button class="clear-activities-button" on-click="clearStream">
    Clear activities
  </cr-button>
</div>
<div id="empty-stream-message" class="activity-message" hidden$="[[!isStreamEmpty_(activityStream_.length)]]">
  <span id="stream-stopped-message" hidden$="[[isStreamOn_]]">
    Press &quot;Start&quot; to listen for extension activities
  </span>
  <span id="stream-started-message" hidden$="[[!isStreamOn_]]">
    Listening for extension activitiesâ€¦
  </span>
</div>
<div id="empty-search-message" class="activity-message" hidden$="[[!shouldShowEmptySearchMessage_(
        activityStream_.length, filteredActivityStream_.length)]]">
  No search results found
</div>
<div class="activity-table-headings" hidden$="[[isFilteredStreamEmpty_(filteredActivityStream_.length)]]">
  <span id="activity-type">Type</span>
  <span id="activity-key">Activity Name</span>
  <span id="activity-time">Time</span>
</div>
<iron-list items="[[filteredActivityStream_]]">
  <template>
    <activity-log-stream-item data="[[item]]"></activity-log-stream-item>
  </template>
</iron-list>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function processActivityForStream(activity){const activityType=activity.activityType;const timestamp=activity.time;const isContentScript=activityType===chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;const args=isContentScript?JSON.stringify([]):activity.args;let streamItemNames=[activity.apiCall];if(isContentScript){streamItemNames=activity.args?JSON.parse(activity.args):[];assert(Array.isArray(streamItemNames),"Invalid data for script names.")}const other=activity.other;const webRequestInfo=other&&other.webRequest;return streamItemNames.map((name=>({args:args,argUrl:activity.argUrl,activityType:activityType,name:name,pageUrl:activity.pageUrl,timestamp:timestamp,webRequestInfo:webRequestInfo,expanded:false})))}class ActivityLogStreamElement extends PolymerElement{static get is(){return"activity-log-stream"}static get template(){return getTemplate$x()}static get properties(){return{extensionId:String,delegate:Object,isStreamOn_:{type:Boolean,value:false},activityStream_:{type:Array,value:()=>[]},filteredActivityStream_:{type:Array,computed:"computeFilteredActivityStream_(activityStream_.*, lastSearch_)"},lastSearch_:{type:String,value:""}}}constructor(){super();this.listenerInstance_=()=>{}}connectedCallback(){super.connectedCallback();this.listenerInstance_=this.extensionActivityListener_.bind(this);this.startStream()}onResizeStream_(){this.shadowRoot.querySelector("iron-list").notifyResize()}clearStream(){this.splice("activityStream_",0,this.activityStream_.length)}startStream(){if(this.isStreamOn_){return}this.isStreamOn_=true;this.delegate.getOnExtensionActivity().addListener(this.listenerInstance_)}pauseStream(){if(!this.isStreamOn_){return}this.delegate.getOnExtensionActivity().removeListener(this.listenerInstance_);this.isStreamOn_=false}onToggleButtonClick_(){if(this.isStreamOn_){this.pauseStream()}else{this.startStream()}}isStreamEmpty_(){return this.activityStream_.length===0}isFilteredStreamEmpty_(){return this.filteredActivityStream_.length===0}shouldShowEmptySearchMessage_(){return!this.isStreamEmpty_()&&this.isFilteredStreamEmpty_()}extensionActivityListener_(activity){if(activity.extensionId!==this.extensionId){return}this.splice("activityStream_",this.activityStream_.length,0,...processActivityForStream(activity));this.shadowRoot.querySelector("iron-list").notifyResize()}onSearchChanged_(e){const searchTerm=e.detail.replace(/\s+/g,"").toLowerCase();if(searchTerm===this.lastSearch_){return}this.lastSearch_=searchTerm}computeFilteredActivityStream_(){if(!this.lastSearch_){return this.activityStream_.slice()}const propNames=["name","pageUrl","activityType"];return this.activityStream_.filter((act=>propNames.some((prop=>{const value=act[prop];return value&&value.toLowerCase().includes(this.lastSearch_)}))))}}customElements.define(ActivityLogStreamElement.is,ActivityLogStreamElement);
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIVE_CLASS="focus-row-active";class FocusRow{root;delegate;eventTracker=new EventTracker;boundary_;constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){const withFocusable=element;if(withFocusable.getFocusableElement){return withFocusable.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(_sampleElement){const focusable=this.getFirstFocusable();assert(focusable);return focusable}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(type){const element=this.getFocusableElements().find((el=>!type||el.getAttribute("focus-type")===type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}const target=e.currentTarget;if(!target.disabled){target.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}let instance$d=null;function getCss$b(){return instance$d||(instance$d=[...[],css`:host{--cr-hairline:1px solid var(--color-menu-separator,
      var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
          var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
      var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
      var(--cr-fallback-color-on-surface))}:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{outline:0;padding:var(--cr-action-menu-padding,8px 0)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$b(){return html`
<dialog id="dialog" part="dialog" @close="${this.onNativeDialogClose_}"
    role="application"
    aria-roledescription="${this.roleDescription||nothing}">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1"
      aria-label="${this.accessibilityLabel||nothing}">
    <slot id="contentNode" @slotchange="${this.onSlotchange_}"></slot>
  </div>
</dialog>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnchorAlignment;(function(AnchorAlignment){AnchorAlignment[AnchorAlignment["BEFORE_START"]=-2]="BEFORE_START";AnchorAlignment[AnchorAlignment["AFTER_START"]=-1]="AFTER_START";AnchorAlignment[AnchorAlignment["CENTER"]=0]="CENTER";AnchorAlignment[AnchorAlignment["BEFORE_END"]=1]="BEFORE_END";AnchorAlignment[AnchorAlignment["AFTER_END"]=2]="AFTER_END"})(AnchorAlignment||(AnchorAlignment={}));const DROPDOWN_ITEM_CLASS="dropdown-item";const SELECTABLE_DROPDOWN_ITEM_QUERY=`.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=start-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}class CrActionMenuElement extends CrLitElement{constructor(){super(...arguments);this.autoReposition=false;this.open=false;this.boundClose_=null;this.resizeObserver_=null;this.hasMousemoveListener_=false;this.anchorElement_=null;this.lastConfig_=null}static get is(){return"cr-action-menu"}static get styles(){return getCss$b()}render(){return getHtml$b.bind(this)()}static get properties(){return{accessibilityLabel:{type:String},autoReposition:{type:Boolean},open:{type:Boolean,notify:true},roleDescription:{type:String}}}firstUpdated(){this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("mouseover",this.onMouseover_);this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeListeners_()}getDialog(){return this.$.dialog}removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}}onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}this.fire("close")}onClick_(e){if(e.target===this){this.close();e.stopPropagation()}}onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const options=Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex((option=>FocusRow.getFocusableElement(option)===focused));if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",(e=>{this.onMouseover_(e);this.hasMousemoveListener_=false}),{once:true})}}onMouseover_(e){const item=e.composedPath().find((el=>el.matches&&el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY)));(item||this.$.wrapper).focus()}updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()}close(){if(!this.open){return}this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){assert(this.anchorElement_);focusWithoutInk(this.anchorElement_);this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}}showAt(anchorElement,config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(config&&!config.noOffset&&config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},config));this.$.wrapper.focus()}showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_();const openedByKey=FocusOutlineManager.forDocument(document).visible;if(openedByKey){const firstSelectableItem=this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);if(firstSelectableItem){requestAnimationFrame((()=>{firstSelectableItem.focus()}))}}}resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"}positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"}onSlotchange_(){for(const node of this.$.contentNode.assignedElements({flatten:true})){if(node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}}}addListeners_(){this.boundClose_=this.boundClose_||(()=>{if(this.$.dialog.open){this.close()}});window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);if(this.autoReposition){this.resizeObserver_=new ResizeObserver((()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire("cr-action-menu-repositioned")}}));this.resizeObserver_.observe(this.$.dialog)}}}customElements.define(CrActionMenuElement.is,CrActionMenuElement);function getTemplate$w(){return html$1`<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{border-top:var(--cr-separator-line);display:block;padding-bottom:8px;padding-inline-end:8px;padding-inline-start:var(--cr-section-padding);padding-top:8px}#activity-item-main-row{align-items:center;display:flex;flex-direction:row;min-height:calc(var(--cr-section-min-height) - var(--separator-gap))}#activity-item-main-row .separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}#activity-item-main-row cr-expand-button{margin-inline-end:6px}#activity-call-and-count{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-count-width)}#activity-delete{margin:0}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-count{flex:0 var(--activity-count-width);text-align:end}.page-url{display:flex;flex-direction:row;margin-bottom:10px;max-width:var(--activity-log-call-and-count-width)}.page-url-link{flex-grow:1;margin-inline-end:20px;margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
<div actionable$="[[isExpandable_]]" id="activity-item-main-row" on-click="onExpandClick_">
  <div id="activity-call-and-count">
    <span id="activity-type">[[data.activityType]]</span>
    <span id="activity-key" title="[[data.key]]">[[data.key]]</span>
    <span id="activity-count">[[data.count]]</span>
  </div>
  <cr-expand-button no-hover expanded="{{data.expanded}}" hidden$="[[!isExpandable_]]">
  </cr-expand-button>
  <div class="separator" hidden$="[[!isExpandable_]]"></div>
  <cr-icon-button id="activity-delete" class="icon-delete-gray" aria-describedby="api-call" aria-label="Clear entry" on-click="onDeleteClick_"></cr-icon-button>
</div>
<div id="page-url-list" hidden$="[[!data.expanded]]">
  <template is="dom-repeat" items="[[getPageUrls_(data)]]">
    <div class="page-url">
      <a class="page-url-link" href="[[item.page]]" target="_blank" title="[[item.page]]">[[item.page]]</a>
      <span class="page-url-count" hidden$="[[!shouldShowPageUrlCount_(data)]]">
        [[item.count]]
      </span>
    </div>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ActivityLogHistoryItemElement extends PolymerElement{static get is(){return"activity-log-history-item"}static get template(){return getTemplate$w()}static get properties(){return{data:Object,isExpandable_:{type:Boolean,computed:"computeIsExpandable_(data.countsByUrl)"}}}computeIsExpandable_(){return this.data.countsByUrl.size>0}getPageUrls_(){return Array.from(this.data.countsByUrl.entries()).map((e=>({page:e[0],count:e[1]}))).sort((function(a,b){if(a.count!==b.count){return b.count-a.count}return a.page<b.page?-1:a.page>b.page?1:0}))}onDeleteClick_(e){e.stopPropagation();this.dispatchEvent(new CustomEvent("delete-activity-log-item",{bubbles:true,composed:true,detail:Array.from(this.data.activityIds.values())}))}onExpandClick_(){if(this.isExpandable_){this.set("data.expanded",!this.data.expanded)}}shouldShowPageUrlCount_(){return this.data.countsByUrl.size>1}}customElements.define(ActivityLogHistoryItemElement.is,ActivityLogHistoryItemElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PromiseResolver{resolve_=()=>{};reject_=()=>{};isFulfilled_=false;promise_;constructor(){this.promise_=new Promise(((resolve,reject)=>{this.resolve_=resolution=>{resolve(resolution);this.isFulfilled_=true};this.reject_=reason=>{reject(reason);this.isFulfilled_=true}}))}get isFulfilled(){return this.isFulfilled_}get promise(){return this.promise_}get resolve(){return this.resolve_}get reject(){return this.reject_}}function getTemplate$v(){return html$1`<!--_html_template_start_--><style include="shared-style">:host{--activity-log-call-and-count-width:514px;--activity-type-width:85px;--activity-count-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}cr-icon-button{margin:0}.activity-table-headings{width:var(--activity-log-call-and-count-width)}#activity-list{overflow-y:auto}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-count{flex:0 var(--activity-count-width);text-align:end}</style>
<div class="activity-subpage-header">
  <cr-search-field label="Search by API call/URL" on-search-changed="onSearchChanged_">
  </cr-search-field>
  <cr-button class="clear-activities-button" on-click="onClearActivitiesClick_">
    Clear activities
  </cr-button>
  <cr-icon-button id="more-actions" iron-icon="cr:more-vert" title="More actions" on-click="onMoreActionsClick_"></cr-icon-button>
  <cr-action-menu role-description="Menu">
    <button id="expand-all-button" class="dropdown-item" on-click="onExpandAllClick_">
      Expand all
    </button>
    <button id="collapse-all-button" class="dropdown-item" on-click="onCollapseAllClick_">
      Collapse all
    </button>
    <button id="export-button" class="dropdown-item" on-click="onExportClick_">
      Export Activities
    </button>
  </cr-action-menu>
</div>
<div id="loading-activities" class="activity-message" hidden$="[[!shouldShowLoadingMessage_(
        pageState_)]]">
  <span>Fetching activitiesâ€¦</span>
</div>
<div id="no-activities" class="activity-message" hidden$="[[!shouldShowEmptyActivityLogMessage_(
        pageState_, activityData_)]]">
  <span>No recent activities</span>
</div>
<div class="activity-table-headings" hidden$="[[!shouldShowActivities_(pageState_, activityData_)]]">
  <span id="activity-type">Type</span>
  <span id="activity-key">Activity Name</span>
  <span id="activity-count">Count</span>
</div>
<div id="activity-list" hidden$="[[!shouldShowActivities_(pageState_, activityData_)]]">
  <template is="dom-repeat" items="[[activityData_]]">
    <activity-log-history-item data="[[item]]">
    </activity-log-history-item>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ActivityLogPageState;(function(ActivityLogPageState){ActivityLogPageState["LOADING"]="loading";ActivityLogPageState["LOADED"]="loaded"})(ActivityLogPageState||(ActivityLogPageState={}));function getActivityGroupKeysForContentScript(activity){assert(activity.activityType===chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT);if(!activity.args){return[]}const parsedArgs=JSON.parse(activity.args);assert(Array.isArray(parsedArgs),"Invalid API data.");return parsedArgs}function getActivityGroupKeysForWebRequest(activity){assert(activity.activityType===chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST);const apiCall=activity.apiCall;const other=activity.other;if(!other||!other.webRequest){return[apiCall]}const webRequest=JSON.parse(other.webRequest);assert(typeof webRequest==="object","Invalid API data");return Object.keys(webRequest).length===0?[apiCall]:Object.keys(webRequest).map((field=>`${apiCall} (${field})`))}function groupActivities(activityData){const groupedActivities=new Map;for(const activity of activityData){const activityId=activity.activityId;const activityType=activity.activityType;const count=activity.count;const pageUrl=activity.pageUrl;const isContentScript=activityType===chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;const isWebRequest=activityType===chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST;let activityGroupKeys=[activity.apiCall];if(isContentScript){activityGroupKeys=getActivityGroupKeysForContentScript(activity)}else if(isWebRequest){activityGroupKeys=getActivityGroupKeysForWebRequest(activity)}for(const key of activityGroupKeys){if(!groupedActivities.has(key)){const activityGroup={activityIds:new Set([activityId]),key:key,count:count,activityType:activityType,countsByUrl:pageUrl?new Map([[pageUrl,count]]):new Map,expanded:false};groupedActivities.set(key,activityGroup)}else{const activityGroup=groupedActivities.get(key);activityGroup.activityIds.add(activityId);activityGroup.count+=count;if(pageUrl){const currentCount=activityGroup.countsByUrl.get(pageUrl)||0;activityGroup.countsByUrl.set(pageUrl,currentCount+count)}}}}return groupedActivities}function sortActivitiesByCallCount(groupedActivities){return Array.from(groupedActivities.values()).sort(((a,b)=>{if(a.count!==b.count){return b.count-a.count}if(a.key<b.key){return-1}if(a.key>b.key){return 1}return 0}))}class ActivityLogHistoryElement extends PolymerElement{static get is(){return"activity-log-history"}static get template(){return getTemplate$v()}static get properties(){return{extensionId:String,delegate:Object,activityData_:{type:Array,value:()=>[]},pageState_:{type:String,value:ActivityLogPageState.LOADING},lastSearch_:{type:String,value:""}}}constructor(){super();this.dataFetchedResolver_=null;this.rawActivities_=""}ready(){super.ready();this.addEventListener("delete-activity-log-item",(e=>this.deleteItem_(e)))}setPageStateForTest(state){this.pageState_=state}whenDataFetched(){return this.dataFetchedResolver_.promise}connectedCallback(){super.connectedCallback();this.dataFetchedResolver_=new PromiseResolver;this.refreshActivities_()}shouldShowEmptyActivityLogMessage_(){return this.pageState_===ActivityLogPageState.LOADED&&this.activityData_.length===0}shouldShowLoadingMessage_(){return this.pageState_===ActivityLogPageState.LOADING}shouldShowActivities_(){return this.pageState_===ActivityLogPageState.LOADED&&this.activityData_.length>0}onClearActivitiesClick_(){this.delegate.deleteActivitiesFromExtension(this.extensionId).then((()=>{this.processActivities_([])}))}onMoreActionsClick_(){const moreButton=this.shadowRoot.querySelector("cr-icon-button");assert(moreButton);this.shadowRoot.querySelector("cr-action-menu").showAt(moreButton)}expandItems_(expanded){this.activityData_.forEach(((item,index)=>{if(item.countsByUrl.size>0){this.set(`activityData_.${index}.expanded`,expanded)}}));this.shadowRoot.querySelector("cr-action-menu").close()}onExpandAllClick_(){this.expandItems_(true)}onCollapseAllClick_(){this.expandItems_(false)}onExportClick_(){const fileName=`exported_activity_log_${this.extensionId}.json`;this.delegate.downloadActivities(this.rawActivities_,fileName)}deleteItem_(e){const activityIds=e.detail;this.delegate.deleteActivitiesById(activityIds).then((()=>{this.refreshActivities_()}))}processActivities_(activityData){this.pageState_=ActivityLogPageState.LOADED;activityData.sort(((a,b)=>a.time-b.time));this.rawActivities_=JSON.stringify(activityData);this.activityData_=sortActivitiesByCallCount(groupActivities(activityData));if(!this.dataFetchedResolver_.isFulfilled){this.dataFetchedResolver_.resolve()}}refreshActivities_(){if(this.lastSearch_===""){return this.getActivityLog_()}return this.getFilteredActivityLog_(this.lastSearch_)}getActivityLog_(){this.pageState_=ActivityLogPageState.LOADING;return this.delegate.getExtensionActivityLog(this.extensionId).then((result=>{this.processActivities_(result.activities)}))}getFilteredActivityLog_(searchTerm){this.pageState_=ActivityLogPageState.LOADING;return this.delegate.getFilteredExtensionActivityLog(this.extensionId,searchTerm).then((result=>{this.processActivities_(result.activities)}))}onSearchChanged_(e){const searchTerm=e.detail.replace(/\s+/g,"");if(searchTerm===this.lastSearch_){return}this.lastSearch_=searchTerm;this.refreshActivities_()}}customElements.define(ActivityLogHistoryElement.is,ActivityLogHistoryElement);
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-description",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nMixin=dedupingMixin((superClass=>{class I18nMixin extends superClass{i18nRaw_(id,...varArgs){return varArgs.length===0?loadTimeData.getString(id):loadTimeData.getStringF(id,...varArgs)}i18n(id,...varArgs){const rawString=this.i18nRaw_(id,...varArgs);return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent}i18nAdvanced(id,opts){opts=opts||{};const rawString=this.i18nRaw_(id,...opts.substitutions||[]);return sanitizeInnerHtml(rawString,opts)}i18nDynamic(_locale,id,...varArgs){return this.i18n(id,...varArgs)}i18nRecursive(locale,id,...varArgs){let args=varArgs;if(args.length>0){args=args.map((str=>this.i18nExists(str)?loadTimeData.getString(str):str))}return this.i18nDynamic(locale,id,...args)}i18nExists(id){return loadTimeData.valueExists(id)}}return I18nMixin}));
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Page;(function(Page){Page["LIST"]="items-list";Page["DETAILS"]="details-view";Page["ACTIVITY_LOG"]="activity-log";Page["SITE_PERMISSIONS"]="site-permissions";Page["SITE_PERMISSIONS_ALL_SITES"]="site-permissions-by-site";Page["SHORTCUTS"]="keyboard-shortcuts";Page["ERRORS"]="error-page"})(Page||(Page={}));var Dialog;(function(Dialog){Dialog["OPTIONS"]="options"})(Dialog||(Dialog={}));function isPageStateEqual(a,b){return a.page===b.page&&a.subpage===b.subpage&&a.extensionId===b.extensionId}const CANONICAL_PATH_REGEX=/(^\/)([\/-\w]+)(\/$)/;class NavigationHelper{constructor(){this.nextListenerId_=1;this.listeners_=new Map;this.processRoute_();window.addEventListener("popstate",(()=>{this.notifyRouteChanged_(this.getCurrentPage())}))}get currentPath_(){return location.pathname.replace(CANONICAL_PATH_REGEX,"$1$2")}processRoute_(){if(this.currentPath_==="/configureCommands"||this.currentPath_==="/shortcuts"){window.history.replaceState(undefined,"","/shortcuts")}else if(this.currentPath_==="/sitePermissions"){window.history.replaceState(undefined,"","/sitePermissions")}else if(this.currentPath_==="/sitePermissions/allSites"){window.history.replaceState(undefined,"","/sitePermissions/allSites")}else if(this.currentPath_!=="/"){window.history.replaceState(undefined,"","/")}}getCurrentPage(){const search=new URLSearchParams(location.search);let id=search.get("id");if(id){return{page:Page.DETAILS,extensionId:id}}id=search.get("activity");if(id){return{page:Page.ACTIVITY_LOG,extensionId:id}}id=search.get("options");if(id){return{page:Page.DETAILS,extensionId:id,subpage:Dialog.OPTIONS}}id=search.get("errors");if(id){return{page:Page.ERRORS,extensionId:id}}if(this.currentPath_==="/shortcuts"){return{page:Page.SHORTCUTS}}if(this.currentPath_==="/sitePermissions"){return{page:Page.SITE_PERMISSIONS}}if(this.currentPath_==="/sitePermissions/allSites"){return{page:Page.SITE_PERMISSIONS_ALL_SITES}}return{page:Page.LIST}}addListener(listener){const nextListenerId=this.nextListenerId_++;this.listeners_.set(nextListenerId,listener);return nextListenerId}removeListener(id){return this.listeners_.delete(id)}notifyRouteChanged_(newPage){for(const listener of this.listeners_.values()){listener(newPage)}}navigateTo(newPage){const currentPage=this.getCurrentPage();if(currentPage&&isPageStateEqual(currentPage,newPage)){return}this.updateHistory(newPage,false);this.notifyRouteChanged_(newPage)}replaceWith(newPage){this.updateHistory(newPage,true);if(this.previousPage_&&isPageStateEqual(this.previousPage_,newPage)){history.back();return}this.notifyRouteChanged_(newPage)}updateHistory(entry,replaceState){let path;switch(entry.page){case Page.LIST:path="/";break;case Page.ACTIVITY_LOG:path="/?activity="+entry.extensionId;break;case Page.DETAILS:if(entry.subpage){assert(entry.subpage===Dialog.OPTIONS);path="/?options="+entry.extensionId}else{path="/?id="+entry.extensionId}break;case Page.SITE_PERMISSIONS:path="/sitePermissions";break;case Page.SITE_PERMISSIONS_ALL_SITES:path="/sitePermissions/allSites";break;case Page.SHORTCUTS:path="/shortcuts";break;case Page.ERRORS:path="/?errors="+entry.extensionId;break}assert(path);const state={url:path};const currentPage=this.getCurrentPage();const isDialogNavigation=currentPage.page===entry.page&&currentPage.extensionId===entry.extensionId;if(replaceState||isDialogNavigation){history.replaceState(state,"",path)}else{this.previousPage_=currentPage;history.pushState(state,"",path)}}}const navigation=new NavigationHelper;function getTemplate$u(){return html$1`<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">#clear-activities-button{margin-inline-start:8px}#closeButton{margin-inline-end:16px}#icon{height:24px;margin-inline-end:12px;width:24px}cr-tabs{--cr-tabs-font-size:inherit;--cr-tabs-height:40px;border-bottom:1px solid var(--google-grey-300)}.page-content{display:flex;flex-direction:column;padding-bottom:0}cr-page-selector{flex:1;position:relative}activity-log-history,activity-log-stream{bottom:0;position:absolute;top:0;width:100%}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" aria-label="Back" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <template is="dom-if" if="[[!extensionInfo.isPlaceholder]]">
        <img id="icon" src="[[extensionInfo.iconUrl]]" alt="">
      </template>
      <div class="cr-title-text">
        [[getActivityLogHeading_(extensionInfo)]]
      </div>
    </div>
    <cr-tabs id="tabs" selected="{{selectedSubpage_}}" tab-names="[[tabNames_]]">
    </cr-tabs>
    <cr-page-selector selected="[[selectedSubpage_]]">
      <div>
        <template is="dom-if" if="[[isHistoryTabSelected_(selectedSubpage_)]]" restamp>
          <activity-log-history extension-id="[[extensionInfo.id]]" delegate="[[delegate]]">
          </activity-log-history>
        </template>
      </div>
      <div>
        <template is="dom-if" if="[[isStreamTabSelected_(selectedSubpage_)]]">
          <activity-log-stream extension-id="[[extensionInfo.id]]" delegate="[[delegate]]">
          </activity-log-stream>
        </template>
      </div>
    </cr-page-selector>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsActivityLogElementBase=I18nMixin(PolymerElement);class ExtensionsActivityLogElement extends ExtensionsActivityLogElementBase{static get is(){return"extensions-activity-log"}static get template(){return getTemplate$u()}static get properties(){return{extensionInfo:Object,delegate:Object,selectedSubpage_:{type:Number,value:NONE_SELECTED,observer:"onSelectedSubpageChanged_"},tabNames_:{type:Array,value:()=>[loadTimeData.getString("activityLogHistoryTabHeading"),loadTimeData.getString("activityLogStreamTabHeading")]}}}ready(){super.ready();this.addEventListener("view-enter-start",this.onViewEnterStart_);this.addEventListener("view-exit-finish",this.onViewExitFinish_)}onViewEnterStart_(){this.selectedSubpage_=0;afterNextRender(this,(()=>focusWithoutInk(this.$.closeButton)))}onViewExitFinish_(){this.selectedSubpage_=NONE_SELECTED;const activityLogStream=this.shadowRoot.querySelector("activity-log-stream");if(activityLogStream){activityLogStream.clearStream()}}getActivityLogHeading_(){const headingName=this.extensionInfo.isPlaceholder?this.i18n("missingOrUninstalledExtension"):this.extensionInfo.name;return this.i18n("activityLogPageHeading",headingName)}isHistoryTabSelected_(){return this.selectedSubpage_===0}isStreamTabSelected_(){return this.selectedSubpage_===1}onSelectedSubpageChanged_(newTab,oldTab){const activityLogStream=this.shadowRoot.querySelector("activity-log-stream");if(activityLogStream){if(newTab===1){activityLogStream.startStream()}else if(oldTab===1){activityLogStream.pauseStream()}}}onCloseButtonClick_(){if(this.extensionInfo.isPlaceholder){navigation.navigateTo({page:Page.LIST})}else{navigation.navigateTo({page:Page.DETAILS,extensionId:this.extensionInfo.id})}}}customElements.define(ExtensionsActivityLogElement.is,ExtensionsActivityLogElement);let instance$c=null;function getCss$a(){return instance$c||(instance$c=[...[getCss$d(),getCss$n(),getCss$u()],css`:host{box-sizing:border-box;flex:1;font-family:inherit;font-size:100%;line-height:154%;min-height:var(--cr-section-min-height);padding:0}:host(:not([embedded])){padding:0 var(--cr-section-padding)}#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
      var(--google-grey-700));display:flex;flex-shrink:0;padding-inline-end:var(--cr-icon-button-margin-start);width:var(--cr-link-row-icon-width,var(--cr-icon-size))}@media (prefers-color-scheme:dark){#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
        var(--google-grey-500))}}#labelWrapper{flex:1;flex-basis:.000000001px;padding-bottom:var(--cr-section-vertical-padding);padding-top:var(--cr-section-vertical-padding);text-align:start}#label,#subLabel{display:flex}#buttonAriaDescription{clip:rect(0,0,0,0);display:block;position:fixed}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$a(){return html`
    ${this.startIcon?html`
<cr-icon id="startIcon" .icon="${this.startIcon}" aria-hidden="true"></cr-icon>
    `:""}
<div id="labelWrapper" ?hidden="${this.shouldHideLabelWrapper_()}">
  <div id="label" aria-hidden="${!this.ariaShowLabel}">
    ${this.label}
    <slot name="label"></slot>
  </div>
  <div id="subLabel" class="cr-secondary-text"
      aria-hidden="${!this.ariaShowSublabel}">
    ${this.subLabel}
    <slot name="sub-label"></slot>
  </div>
</div>
<slot></slot>
<div id="buttonAriaDescription" aria-hidden="true">
  ${this.getButtonAriaDescription_()}
</div>
<cr-icon-button id="icon" iron-icon="${this.getIcon_()}" role="link"
    part="icon" aria-roledescription="${this.roleDescription||nothing}"
    aria-describedby="buttonAriaDescription"
    aria-labelledby="label subLabel" ?disabled="${this.disabled}">
</cr-icon-button>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLinkRowElement extends CrLitElement{constructor(){super(...arguments);this.ariaShowLabel=false;this.ariaShowSublabel=false;this.startIcon="";this.label="";this.subLabel="";this.disabled=false;this.external=false;this.usingSlottedLabel=false}static get is(){return"cr-link-row"}static get styles(){return getCss$a()}render(){return getHtml$a.bind(this)()}static get properties(){return{ariaShowLabel:{type:Boolean,reflect:true},ariaShowSublabel:{type:Boolean,reflect:true},startIcon:{type:String},label:{type:String},subLabel:{type:String},disabled:{type:Boolean,reflect:true},external:{type:Boolean},usingSlottedLabel:{type:Boolean},roleDescription:{type:String},buttonAriaDescription:{type:String}}}focus(){this.$.icon.focus()}shouldHideLabelWrapper_(){return!(this.label||this.usingSlottedLabel)}getIcon_(){return this.external?"cr:open-in-new":"cr:arrow-right"}getButtonAriaDescription_(){return this.buttonAriaDescription??(this.external?loadTimeData.getString("opensInNewTab"):"")}}customElements.define(CrLinkRowElement.is,CrLinkRowElement);let instance$b=null;function getCss$9(){return instance$b||(instance$b=[...[],css`:host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
          var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
          var(--cr-fallback-color-on-primary));--cr-toggle-checked-ripple-color:var(
      --cr-active-neutral-on-subtle-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
          var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
          var(--cr-fallback-color-outline));--cr-toggle-unchecked-ripple-color:var(
      --cr-active-neutral-on-subtle-background-color);--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);--cr-toggle-bar-border:1px solid var(--cr-toggle-bar-border-color);--cr-toggle-bar-width:26px;--cr-toggle-knob-diameter:8px;-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;height:fit-content;isolation:isolate;min-width:initial;outline:0;position:relative;width:fit-content}@media (forced-colors:active){:host #knob{background-color:CanvasText!important}}:host(:active){--cr-toggle-knob-diameter:10px}:host([checked]){--cr-toggle-bar-border-color:var(--cr-toggle-checked-bar-color);--cr-toggle-knob-diameter:12px}:host([checked]:active){--cr-toggle-knob-diameter:14px}:host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
          var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
          var(--cr-fallback-color-disabled-foreground));--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);cursor:initial;opacity:1;pointer-events:none}:host([checked][disabled]){--cr-toggle-bar-border:none}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border:var(--cr-toggle-bar-border);border-radius:50px;box-sizing:border-box;display:block;height:16px;left:3px;opacity:1;position:initial;top:2px;transition:background-color linear 80ms;width:var(--cr-toggle-bar-width);z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:1}:host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
      0.5 * var(--cr-toggle-bar-width) -
      var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
      0.5 * var(--cr-toggle-bar-width) + -50%);--cr-toggle-knob-position-start_:calc(
      var(--cr-toggle-knob-position-center_) -
      var(--cr-toggle-knob-direction_) *
      var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
      var(--cr-toggle-knob-position-center_) +
      var(--cr-toggle-knob-direction_) *
      var(--cr-toggle-knob-travel-distance_));background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:none;display:block;height:var(--cr-toggle-knob-diameter);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter);z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([dir=rtl]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host([checked]:active) #knob,:host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
          var(--cr-fallback-color-primary-container))}:host(:hover) #knob::before{background-color:var(--cr-hover-on-subtle-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}#ink{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) #ink{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) #ink{left:auto;right:50%;transform:translate(50%,-50%)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$9(){return html`
<span id="bar"></span>
<span id="knob"></span>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MOVE_THRESHOLD_PX=5;const CrToggleElementBase=CrRippleMixin(CrLitElement);class CrToggleElement extends CrToggleElementBase{constructor(){super(...arguments);this.checked=false;this.disabled=false;this.boundPointerMove_=null;this.handledInPointerMove_=false;this.pointerDownX_=0}static get is(){return"cr-toggle"}static get styles(){return getCss$9()}render(){return getHtml$9.bind(this)()}static get properties(){return{checked:{type:Boolean,reflect:true,notify:true},disabled:{type:Boolean,reflect:true}}}firstUpdated(){if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}this.setAttribute("aria-pressed",this.checked?"true":"false");this.setAttribute("aria-disabled",this.disabled?"true":"false");this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this));this.addEventListener("pointerup",this.onPointerUp_.bind(this))}connectedCallback(){super.connectedCallback();const direction=this.matches(":host-context([dir=rtl]) cr-toggle")?-1:1;this.boundPointerMove_=e=>{e.preventDefault();const diff=e.clientX-this.pointerDownX_;if(Math.abs(diff)<MOVE_THRESHOLD_PX){return}this.handledInPointerMove_=true;const shouldToggle=diff*direction<0&&this.checked||diff*direction>0&&!this.checked;if(shouldToggle){this.toggleState_(false)}}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("checked")){this.setAttribute("aria-pressed",this.checked?"true":"false")}if(changedProperties.has("disabled")){this.setAttribute("tabindex",this.disabled?"-1":"0");this.setAttribute("aria-disabled",this.disabled?"true":"false")}}hideRipple_(){this.getRipple().clear()}onPointerUp_(){assert(this.boundPointerMove_);this.removeEventListener("pointermove",this.boundPointerMove_);this.hideRipple_()}onPointerDown_(e){if(e.button!==0){return}this.setPointerCapture(e.pointerId);this.pointerDownX_=e.clientX;this.handledInPointerMove_=false;assert(this.boundPointerMove_);this.addEventListener("pointermove",this.boundPointerMove_)}onClick_(e){e.stopPropagation();e.preventDefault();if(this.handledInPointerMove_){return}this.toggleState_(false)}async toggleState_(fromKeyboard){if(this.disabled){return}if(!fromKeyboard){this.hideRipple_()}this.checked=!this.checked;await this.updateComplete;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.toggleState_(true)}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.toggleState_(true)}}createRipple(){this.rippleContainer=this.$.knob;const ripple=super.createRipple();ripple.setAttribute("recenters","");ripple.classList.add("circle");return ripple}}customElements.define(CrToggleElement.is,CrToggleElement);let instance$a=null;function getCss$8(){return instance$a||(instance$a=[...[getCss$u()],css`:host{display:block;position:absolute;outline:0;z-index:1002;user-select:none;cursor:default}#tooltip{display:block;outline:0;font-size:10px;line-height:1;background-color:var(--paper-tooltip-background,#616161);color:var(--paper-tooltip-text-color,#fff);padding:8px;border-radius:2px}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--paper-tooltip-opacity,.9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--paper-tooltip-opacity,.9)}100%{opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--paper-tooltip-delay-in,500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--paper-tooltip-duration-in,500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--paper-tooltip-opacity,.9);animation-delay:var(--paper-tooltip-delay-out,0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--paper-tooltip-duration-out,500ms);animation-fill-mode:forwards}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$8(){return html`
    <div id="tooltip" hidden part="tooltip">
      <slot></slot>
    </div>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TooltipPosition;(function(TooltipPosition){TooltipPosition["TOP"]="top";TooltipPosition["BOTTOM"]="bottom";TooltipPosition["LEFT"]="left";TooltipPosition["RIGHT"]="right"})(TooltipPosition||(TooltipPosition={}));class CrTooltipElement extends CrLitElement{constructor(){super(...arguments);this.animationDelay=500;this.fitToVisibleBounds=false;this.for="";this.manualMode=false;this.offset=14;this.position=TooltipPosition.BOTTOM;this.animationPlaying_=false;this.showing_=false;this.target_=null;this.tracker_=new EventTracker}static get is(){return"cr-tooltip"}static get styles(){return getCss$8()}render(){return getHtml$8.bind(this)()}static get properties(){return{for:{type:String},manualMode:{type:Boolean},position:{type:String},fitToVisibleBounds:{type:Boolean},offset:{type:Number},animationDelay:{type:Number}}}connectedCallback(){super.connectedCallback();this.findTarget_()}disconnectedCallback(){if(!this.manualMode){this.removeListeners_()}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.addEventListener("animationend",(()=>this.onAnimationEnd_()))}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("animationDelay")){this.style.setProperty("--paper-tooltip-delay-in",`${this.animationDelay}ms`)}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("for")){this.findTarget_()}if(changedProperties.has("manualMode")){if(this.manualMode){this.removeListeners_()}else{this.addListeners_()}}}get target(){if(this.manualTarget_){return this.manualTarget_}const ownerRoot=this.getRootNode();if(this.for){return ownerRoot.querySelector(`#${this.for}`)}const parentNode=this.parentNode;return!!parentNode&&parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}set target(target){this.manualTarget_=target;this.findTarget_()}show(){if(this.showing_){return}if(!!this.textContent&&this.textContent.trim()===""){const children=this.shadowRoot.querySelector("slot").assignedElements();const hasNonEmptyChild=Array.from(children).some((el=>!!el.textContent&&el.textContent.trim()!==""));if(!hasNonEmptyChild){return}}this.showing_=true;this.$.tooltip.hidden=false;this.$.tooltip.classList.remove("fade-out-animation");this.updatePosition();this.animationPlaying_=true;this.$.tooltip.classList.add("fade-in-animation")}hide(){if(!this.showing_){return}if(this.animationPlaying_){this.showing_=false;this.$.tooltip.classList.remove("fade-in-animation","fade-out-animation");this.$.tooltip.hidden=true;return}this.$.tooltip.classList.remove("fade-in-animation");this.$.tooltip.classList.add("fade-out-animation");this.showing_=false;this.animationPlaying_=true}updatePosition(){if(!this.target_){return}const offsetParent=this.offsetParent||this.composedOffsetParent_();if(!offsetParent){return}const offset=this.offset;const parentRect=offsetParent.getBoundingClientRect();const targetRect=this.target_.getBoundingClientRect();const thisRect=this.getBoundingClientRect();const horizontalCenterOffset=(targetRect.width-thisRect.width)/2;const verticalCenterOffset=(targetRect.height-thisRect.height)/2;const targetLeft=targetRect.left-parentRect.left;const targetTop=targetRect.top-parentRect.top;let tooltipLeft;let tooltipTop;switch(this.position){case TooltipPosition.TOP:tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case TooltipPosition.BOTTOM:tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case TooltipPosition.LEFT:tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case TooltipPosition.RIGHT:tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=Math.max(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=Math.max(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}}findTarget_(){if(!this.manualMode){this.removeListeners_()}this.target_=this.target;if(!this.manualMode){this.addListeners_()}}onAnimationEnd_(){this.animationPlaying_=false;if(!this.showing_){this.$.tooltip.classList.remove("fade-out-animation");this.$.tooltip.hidden=true}}addListeners_(){if(this.target_){this.tracker_.add(this.target_,"pointerenter",(()=>this.show()));this.tracker_.add(this.target_,"focus",(()=>this.show()));this.tracker_.add(this.target_,"pointerleave",(()=>this.hide()));this.tracker_.add(this.target_,"blur",(()=>this.hide()));this.tracker_.add(this.target_,"click",(()=>this.hide()))}this.tracker_.add(this.$.tooltip,"animationend",(()=>this.onAnimationEnd_()));this.tracker_.add(this,"pointerenter",(()=>this.hide()))}removeListeners_(){this.tracker_.removeAll()}composedOffsetParent_(){if(this.computedStyleMap().get("display").value==="none"){return null}for(let ancestor=flatTreeParent(this);ancestor!==null;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element)){continue}const style=ancestor.computedStyleMap();if(style.get("display").value==="none"){return null}if(style.get("display").value==="contents"){continue}if(style.get("position").value!=="static"){return ancestor}if(ancestor.tagName==="BODY"){return ancestor}}return null;function flatTreeParent(element){if(element.assignedSlot){return element.assignedSlot}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return element.parentElement}}}customElements.define(CrTooltipElement.is,CrTooltipElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map((function(key){return metaDatas[this.type][key]}),this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=element.shadowRoot?element.shadowRoot:dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){var root=element.shadowRoot?element.shadowRoot:dom(element.root||element);root.removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.fire("iron-iconset-added",this,{node:window})},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$4=html$1`
<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="delete">
        <path d="M 5.832031 17.5 C 5.375 17.5 4.984375 17.335938 4.65625 17.011719 C 4.328125 16.683594 4.167969 16.292969 4.167969 15.832031 L 4.167969 5 L 3.332031 5 L 3.332031 3.332031 L 7.5 3.332031 L 7.5 2.5 L 12.5 2.5 L 12.5 3.332031 L 16.667969 3.332031 L 16.667969 5 L 15.832031 5 L 15.832031 15.832031 C 15.832031 16.292969 15.671875 16.683594 15.34375 17.011719 C 15.015625 17.335938 14.625 17.5 14.167969 17.5 Z M 14.167969 5 L 5.832031 5 L 5.832031 15.832031 L 14.167969 15.832031 Z M 7.5 14.167969 L 9.167969 14.167969 L 9.167969 6.667969 L 7.5 6.667969 Z M 10.832031 14.167969 L 12.5 14.167969 L 12.5 6.667969 L 10.832031 6.667969 Z M 5.832031 5 L 5.832031 15.832031 Z M 5.832031 5 ">
        </path>
      </g>
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      <g id="password">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
      </g>
      
        <g id="banner-warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
        <g id="warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
      
  </defs></svg>
</iron-iconset-svg>


<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
        <g id="bluetooth">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z">
          </path>
        </g>
        <g id="camera-alt">
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
          </path>
        </g>
        <g id="work">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z">
          </path>
        </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="chrome-product" viewBox="0 -960 960 960">
        <path d="M336-479q0 60 42 102t102 42q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102Zm144 216q11 0 22.5-.5T525-267L427-99q-144-16-237.5-125T96-479q0-43 9.5-84.5T134-645l160 274q28 51 78 79.5T480-263Zm0-432q-71 0-126.5 42T276-545l-98-170q53-71 132.5-109.5T480-863q95 0 179 45t138 123H480Zm356 72q15 35 21.5 71t6.5 73q0 155-100 260.5T509-96l157-275q14-25 22-52t8-56q0-40-15-77t-41-67h196Z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download" viewBox="0 -960 960 960">
        <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"></path>
      </g>
      
        <g id="folder-filled">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
          </path>
        </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
        <g id="sim-card-alert">
          <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z">
          </path>
        </g>
        <g id="sim-lock">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
          </path>
        </g>
        <g id="sms-connect">
          <path d="M20,2C21.1,2 22,2.9 22,4L22,16C22,17.1 21.1,18 20,18L6,18L2,22L2.01,4C2.01,2.9 2.9,2 4,2L20,2ZM8,8L4,12L8,16L8,13L14,13L14,11L8,11L8,8ZM19.666,7.872L16.038,4.372L16.038,6.997L10,6.997L10,9L16.038,9L16.038,11.372L19.666,7.872Z">
          </path>
        </g>
      
      
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync" viewBox="0 -960 960 960">
        <path d="M216-192v-72h74q-45-40-71.5-95.5T192-480q0-101 61-177.5T408-758v75q-63 23-103.5 77.5T264-480q0 48 19.5 89t52.5 70v-63h72v192H216Zm336-10v-75q63-23 103.5-77.5T696-480q0-48-19.5-89T624-639v63h-72v-192h192v72h-74q45 40 71.5 95.5T768-480q0 101-61 177.5T552-202Z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-down-filled">
        <path d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumbs-up-filled">
        <path d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </path></g>
      <g id="videocam" viewBox="0 -960 960 960">
        <path d="M216-192q-29 0-50.5-21.5T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h432q29.7 0 50.85 21.15Q720-725.7 720-696v168l144-144v384L720-432v168q0 29-21.15 50.5T648-192H216Zm0-72h432v-432H216v432Zm0 0v-432 432Z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$4.content);let instance$9=null;function getCss$7(){return instance$9||(instance$9=[...[getCss$n()],css`:host{display:flex}cr-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){cr-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$7(){return html`
<cr-icon id="indicator" tabindex="0" aria-label="${this.iconAriaLabel}"
    aria-describedby="tooltip" icon="${this.iconClass}" role="img">
</cr-icon>
<cr-tooltip id="tooltip"
    for="indicator" position="${this.tooltipPosition}"
    fit-to-visible-bounds part="tooltip">
  <slot name="tooltip-text">${this.tooltipText}</slot>
</cr-tooltip>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends CrLitElement{constructor(){super(...arguments);this.iconAriaLabel="";this.iconClass="";this.tooltipText="";this.tooltipPosition="top"}static get is(){return"cr-tooltip-icon"}static get styles(){return getCss$7()}render(){return getHtml$7.bind(this)()}static get properties(){return{iconAriaLabel:{type:String},iconClass:{type:String},tooltipText:{type:String},tooltipPosition:{type:String}}}getFocusableElement(){return this.$.indicator}}customElements.define(CrTooltipIconElement.is,CrTooltipIconElement);
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ActionLink extends HTMLAnchorElement{boundOnKeyDown_=null;boundOnMouseDown_=null;boundOnBlur_=null;connectedCallback(){this.tabIndex=this.disabled?-1:0;if(!this.hasAttribute("role")){this.setAttribute("role","link")}this.boundOnKeyDown_=e=>{if(!this.disabled&&e.key==="Enter"&&!this.href){window.setTimeout((()=>this.click()),0)}};this.addEventListener("keydown",this.boundOnKeyDown_);function preventDefault(e){e.preventDefault()}function removePreventDefault(){document.removeEventListener("selectstart",preventDefault);document.removeEventListener("mouseup",removePreventDefault)}this.boundOnMouseDown_=()=>{document.addEventListener("selectstart",preventDefault);document.addEventListener("mouseup",removePreventDefault);if(document.activeElement!==this){this.classList.add("no-outline")}};this.addEventListener("mousedown",this.boundOnMouseDown_);this.boundOnBlur_=()=>this.classList.remove("no-outline");this.addEventListener("blur",this.boundOnBlur_)}disconnectedCallback(){this.removeEventListener("keydown",this.boundOnKeyDown_);this.boundOnKeyDown_=null;this.removeEventListener("mousedown",this.boundOnMouseDown_);this.boundOnMouseDown_=null;this.removeEventListener("blur",this.boundOnBlur_);this.boundOnBlur_=null}set disabled(disabled){if(disabled){HTMLAnchorElement.prototype.setAttribute.call(this,"disabled","")}else{HTMLAnchorElement.prototype.removeAttribute.call(this,"disabled")}this.tabIndex=disabled?-1:0}get disabled(){return this.hasAttribute("disabled")}setAttribute(attr,val){if(attr.toLowerCase()==="disabled"){this.disabled=true}else{super.setAttribute(attr,val)}}removeAttribute(attr){if(attr.toLowerCase()==="disabled"){this.disabled=false}else{super.removeAttribute(attr)}}}customElements.define("action-link",ActionLink,{extends:"a"});const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html$1`
  <template>
    <style>
[is=action-link]{cursor:pointer;display:inline-block;text-decoration:underline}[is=action-link],[is=action-link]:active,[is=action-link]:hover,[is=action-link]:visited{color:var(--cr-link-color)}[is=action-link][disabled]{color:var(--cr-fallback-color-disabled-foreground);cursor:default;pointer-events:none}[is=action-link].no-outline{outline:0}
    </style>
  </template>
`.content);styleMod$2.register("action-link");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$3=html$1`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: flex;
      }

      .layout.inline {
        display: inline-flex;
      }

      .layout.horizontal {
        flex-direction: row;
      }

      .layout.vertical {
        flex-direction: column;
      }

      .layout.wrap {
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        justify-content: center;
      }

      .flex {
        flex: 1;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .flex-none {
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: flex;
      }

      .layout.horizontal-reverse {
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        align-items: center;
      }

      .layout.end {
        align-items: flex-end;
      }

      .layout.baseline {
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        justify-content: center;
      }

      .layout.end-justified {
        justify-content: flex-end;
      }

      .layout.around-justified {
        justify-content: space-around;
      }

      .layout.justified {
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        align-self: flex-start;
      }

      .self-center {
        align-self: center;
      }

      .self-end {
        align-self: flex-end;
      }

      .self-stretch {
        align-self: stretch;
      }

      .self-baseline {
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        align-content: flex-start;
      }

      .layout.end-aligned {
        align-content: flex-end;
      }

      .layout.center-aligned {
        align-content: center;
      }

      .layout.between-aligned {
        align-content: space-between;
      }

      .layout.around-aligned {
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        flex: 1;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        flex: 2;
      }

      .flex-3 {
        flex: 3;
      }

      .flex-4 {
        flex: 4;
      }

      .flex-5 {
        flex: 5;
      }

      .flex-6 {
        flex: 6;
      }

      .flex-7 {
        flex: 7;
      }

      .flex-8 {
        flex: 8;
      }

      .flex-9 {
        flex: 9;
      }

      .flex-10 {
        flex: 10;
      }

      .flex-11 {
        flex: 11;
      }

      .flex-12 {
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$2=html$1`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;

        /* Colors */
        --google-red-500: #db4437;
        --google-blue-500: #4285f4;
        --google-green-500: #0f9d58;
        --google-yellow-500: #f4b400;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(template$2.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:false,reflectToAttribute:true,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if(alt==="loading"){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(alt==="");this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=false;this.__coolingDown=false}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html$1`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template$1.setAttribute("strip-whitespace","");Polymer({_template:template$1,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrScrollObserverMixinLit=superClass=>{class CrScrollObserverMixinLit extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.topProbe_=null;this.bottomProbe_=null}connectedCallback(){super.connectedCallback();const container=this.getContainer();this.topProbe_=document.createElement("div");this.bottomProbe_=document.createElement("div");container.prepend(this.topProbe_);container.append(this.bottomProbe_);this.enableScrollObservation(true)}disconnectedCallback(){super.disconnectedCallback();this.enableScrollObservation(false)}getContainer(){const container=this.shadowRoot.querySelector("#container");assert(container);return container}getIntersectionObserver_(){const callback=entries=>{const container=this.getContainer();for(const entry of entries){const target=entry.target;if(target===this.topProbe_){container.classList.toggle("scrolled-to-top",entry.intersectionRatio!==0);const canScroll=entry.intersectionRatio===0||!container.classList.contains("scrolled-to-bottom");container.classList.toggle("can-scroll",canScroll)}if(target===this.bottomProbe_){container.classList.toggle("scrolled-to-bottom",entry.intersectionRatio!==0);const canScroll=entry.intersectionRatio===0||!container.classList.contains("scrolled-to-top");container.classList.toggle("can-scroll",canScroll)}}};return new IntersectionObserver(callback,{root:this.getContainer(),threshold:0})}enableScrollObservation(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(!this.isConnected){return}if(this.intersectionObserver_){assert(this.topProbe_);assert(this.bottomProbe_);this.intersectionObserver_.observe(this.topProbe_);this.intersectionObserver_.observe(this.bottomProbe_)}}))}}return CrScrollObserverMixinLit};
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide$1;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide$1||(CrContainerShadowSide$1={}));const CrContainerShadowMixinLit=superClass=>{const superClassBase=CrScrollObserverMixinLit(superClass);class CrContainerShadowMixinLit extends superClassBase{constructor(){super(...arguments);this.dropShadows_=new Map;this.sides_=[]}connectedCallback(){super.connectedCallback();const container=this.shadowRoot.querySelector("#container");assert(container);const hasBottomShadow=container.hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide$1.TOP,CrContainerShadowSide$1.BOTTOM]:[CrContainerShadowSide$1.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow)}));container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide$1.TOP),container);if(hasBottomShadow){container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide$1.BOTTOM),container.nextSibling)}}setForceDropShadows(enabled){assert(this.sides_.length>0);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("force-shadow",enabled)}}}return CrContainerShadowMixinLit};let instance$8=null;function getCss$6(){return instance$8||(instance$8=[...[getCss$u(),getCss$o()],css`dialog{--scroll-border-color:var(--google-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#container.can-scroll:not(.scrolled-to-bottom)+#cr-container-shadow-bottom,#cr-container-shadow-top:has(+#container.can-scroll:not(.scrolled-to-top)){border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6(){return html`
<dialog id="dialog" @close="${this.onNativeDialogClose_}"
    @cancel="${this.onNativeDialogCancel_}" part="dialog"
    aria-labelledby="title"
    aria-description="${this.ariaDescriptionText||nothing}">
<!-- This wrapper is necessary, such that the "pulse" animation is not
    erroneously played when the user clicks on the outer-most scrollbar. -->
  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      ${this.showCloseButton?html`
        <cr-icon-button id="close" class="icon-clear"
            aria-label="${this.closeText||nothing}"
            @click="${this.cancel}" @keypress="${this.onCloseKeypress_}">
        </cr-icon-button>
       `:""}
    </div>
    <slot name="header"></slot>
    <div class="body-container" id="container" show-bottom-shadow
        part="body-container">
      <slot name="body"></slot>
    </div>
    <slot name="button-container"></slot>
    <slot name="footer"></slot>
  </div>
</dialog>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrDialogElementBase=CrContainerShadowMixinLit(CrScrollObserverMixinLit(CrLitElement));class CrDialogElement extends CrDialogElementBase{constructor(){super(...arguments);this.consumeKeydownEvent=false;this.ignoreEnterKey=false;this.ignorePopstate=false;this.noCancel=false;this.open=false;this.showCloseButton=false;this.showOnAttach=false;this.mutationObserver_=null;this.boundKeydown_=null}static get is(){return"cr-dialog"}static get styles(){return getCss$6()}render(){return getHtml$6.bind(this)()}static get properties(){return{open:{type:Boolean,reflect:true},closeText:{type:String},ignorePopstate:{type:Boolean},ignoreEnterKey:{type:Boolean},consumeKeydownEvent:{type:Boolean},noCancel:{type:Boolean},showCloseButton:{type:Boolean},showOnAttach:{type:Boolean},ariaDescriptionText:{type:String}}}firstUpdated(){window.addEventListener("popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.enableScrollObservation(true);this.addKeydownListener_()}else{this.enableScrollObservation(false);this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}async showModal(){if(this.showOnAttach){const element=this.querySelector("[autofocus]");if(element&&element instanceof CrLitElement&&!element.shadowRoot){element.ensureInitialRender()}}this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;await this.updateComplete;this.fire("cr-dialog-open")}cancel(){this.fire("cancel");this.$.dialog.close();assert(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.fire("close")}async onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;await this.updateComplete;this.fire("cancel")}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);function getTemplate$t(){return html$1`<!--_html_template_start_--><style include="cr-shared-style shared-style"></style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">[[getDialogTitle_(firstRestrictedSite)]]</div>
  <div class="matching-restricted-sites-warning" slot="body">
    <cr-icon icon="cr:info-outline"></cr-icon>
    <span>[[getDialogWarning_(firstRestrictedSite)]]</span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <cr-button class="action-button" on-click="onSubmitClick_">
      Allow
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsRestrictedSitesDialogElementBase=I18nMixin(PolymerElement);class ExtensionsRestrictedSitesDialogElement extends ExtensionsRestrictedSitesDialogElementBase{static get is(){return"extensions-restricted-sites-dialog"}static get template(){return getTemplate$t()}static get properties(){return{firstRestrictedSite:{type:String,value:""}}}isOpen(){return this.$.dialog.open}wasConfirmed(){return this.$.dialog.getNative().returnValue==="success"}onCancelClick_(){this.$.dialog.cancel()}onSubmitClick_(){this.$.dialog.close()}getDialogTitle_(){return this.i18n("matchingRestrictedSitesTitle",this.firstRestrictedSite)}getDialogWarning_(){return this.i18n("matchingRestrictedSitesWarning",this.firstRestrictedSite)}}customElements.define(ExtensionsRestrictedSitesDialogElement.is,ExtensionsRestrictedSitesDialogElement);function getTemplate$s(){return html$1`<!--_html_template_start_--><style>:host{align-items:center;display:flex;touch-action:none}input{display:none}label{box-sizing:border-box;cursor:pointer;flex:1}cr-toggle{display:inline-block}:host ::slotted(*){flex:1;margin-inline-end:20px}</style>
<label id="label" aria-hidden="true">
  <input id="native" type="checkbox" checked="[[checked]]" on-change="onNativeChange_" on-click="onNativeClick_" disabled="[[disabled]]">
  <slot></slot>
</label>
<cr-toggle id="crToggle" checked="{{checked}}" aria-labelledby="label" on-change="onCrToggleChange_" disabled="[[disabled]]"></cr-toggle>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsToggleRowElement extends PolymerElement{static get is(){return"extensions-toggle-row"}static get template(){return getTemplate$s()}static get properties(){return{checked:Boolean,disabled:Boolean}}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getLabel(){return this.$.label}onNativeClick_(e){e.stopPropagation()}onNativeChange_(e){e.stopPropagation();this.$.crToggle.checked=this.$.native.checked;this.checked=this.$.native.checked;this.fire_("change",this.checked)}onCrToggleChange_(e){e.stopPropagation();this.$.native.checked=e.detail;this.fire_("change",this.checked)}}customElements.define(ExtensionsToggleRowElement.is,ExtensionsToggleRowElement);function getTemplate$r(){return html$1`<!--_html_template_start_--><style include="cr-shared-style shared-style">cr-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size)}#section-heading{align-items:center;color:var(--cr-primary-text-color);display:flex;justify-content:space-between;margin-top:12px}.toggle-section{display:flex;flex-direction:column;justify-content:center;min-height:var(--cr-section-min-height)}.new-all-hosts-toggle-label{color:var(--cr-primary-text-color);margin-inline-start:var(--cr-section-indent-width)}.site-row{display:flex}.site-favicon{margin-inline-end:calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}.site-toggle{border-top:var(--cr-separator-line);margin-inline-start:var(--cr-section-indent-width)}</style>
<div id="section-heading" hidden$="[[enableEnhancedSiteControls]]">
  <span>This extension can read and change your data on sites. You can control which sites the extension can access.</span>
  <a id="linkIconButton" aria-label="Learn more about extension permissions" href="https://support.google.com/chrome?p=enable_extensions" target="_blank" on-click="onLearnMoreClick_">
    <cr-icon icon="cr:help-outline"></cr-icon>
  </a>
</div>
<div class="toggle-section">
  <extensions-toggle-row checked="[[allowedOnAllHosts_(permissions.*)]]" id="allHostsToggle" on-change="onAllHostsToggleChanged_">
    <span class="[[getAllHostsToggleLabelClass_(enableEnhancedSiteControls)]]">
      Automatically allow access on the following sites
    </span>
    <a id="linkIconButton" aria-label="Learn more about extension permissions" href="https://support.google.com/chrome?p=enable_extensions" target="_blank" on-click="onLearnMoreClick_" hidden$="[[!enableEnhancedSiteControls]]">
      <cr-icon icon="cr:help-outline"></cr-icon>
    </a>
  </extensions-toggle-row>
</div>

<template is="dom-repeat" items="[[getSortedHosts_(permissions.*)]]">
  <div class="toggle-section site-toggle">
    <extensions-toggle-row checked="[[isItemChecked_(item, selectedHost_)]]" class="host-toggle no-end-padding" disabled="[[allowedOnAllHosts_(permissions.*)]]" host="[[item.host]]" on-change="onHostAccessChanged_">
      <div class="site-row">
        <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item.host)]]" hidden$="[[!enableEnhancedSiteControls]]"></div>
        <span>[[item.host]]</span>
      </div>
    </extensions-toggle-row>
  </div>
</template>

<template is="dom-if" if="[[showMatchingRestrictedSitesDialog_]]" restamp>
  <extensions-restricted-sites-dialog first-restricted-site="[[matchingRestrictedSites_.0]]" on-close="onMatchingRestrictedSitesDialogClose_">
  </extensions-restricted-sites-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var SafetyCheckWarningReason;(function(SafetyCheckWarningReason){SafetyCheckWarningReason[SafetyCheckWarningReason["UNPUBLISHED"]=1]="UNPUBLISHED";SafetyCheckWarningReason[SafetyCheckWarningReason["POLICY"]=2]="POLICY";SafetyCheckWarningReason[SafetyCheckWarningReason["MALWARE"]=3]="MALWARE";SafetyCheckWarningReason[SafetyCheckWarningReason["OFFSTORE"]=4]="OFFSTORE";SafetyCheckWarningReason[SafetyCheckWarningReason["UNWANTED"]=5]="UNWANTED";SafetyCheckWarningReason[SafetyCheckWarningReason["NO_PRIVACY_PRACTICE"]=6]="NO_PRIVACY_PRACTICE"})(SafetyCheckWarningReason||(SafetyCheckWarningReason={}));var SourceType;(function(SourceType){SourceType["WEBSTORE"]="webstore";SourceType["POLICY"]="policy";SourceType["SIDELOADED"]="sideloaded";SourceType["UNPACKED"]="unpacked";SourceType["INSTALLED_BY_DEFAULT"]="installed-by-default";SourceType["UNKNOWN"]="unknown"})(SourceType||(SourceType={}));var EnableControl;(function(EnableControl){EnableControl["RELOAD"]="RELOAD";EnableControl["REPAIR"]="REPAIR";EnableControl["ENABLE_TOGGLE"]="ENABLE_TOGGLE"})(EnableControl||(EnableControl={}));var UserAction;(function(UserAction){UserAction["ALL_TOGGLED_ON"]="Extensions.Settings.HostList.AllHostsToggledOn";UserAction["ALL_TOGGLED_OFF"]="Extensions.Settings.HostList.AllHostsToggledOff";UserAction["SPECIFIC_TOGGLED_ON"]="Extensions.Settings.HostList.SpecificHostToggledOn";UserAction["SPECIFIC_TOGGLED_OFF"]="Extensions.Settings.HostList.SpecificHostToggledOff";UserAction["LEARN_MORE"]="Extensions.Settings.HostList.LearnMoreActivated"})(UserAction||(UserAction={}));const SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME="SafeBrowsing.ExtensionSafetyHub.Trigger.Kept";const SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME="SafeBrowsing.ExtensionSafetyHub.Trigger.Removed";const SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME=`SafeBrowsing.ExtensionSafetyHub.Trigger.Shown`;const SAFETY_HUB_WARNING_REASON_MAX_SIZE=7;function isEnabled$1(state){switch(state){case chrome.developerPrivate.ExtensionState.ENABLED:case chrome.developerPrivate.ExtensionState.TERMINATED:return true;case chrome.developerPrivate.ExtensionState.BLOCKLISTED:case chrome.developerPrivate.ExtensionState.DISABLED:return false;default:assertNotReached()}}function userCanChangeEnablement(item){if(!item.userMayModify){return false}if(item.disableReasons.corruptInstall||item.disableReasons.suspiciousInstall||item.disableReasons.updateRequired||item.disableReasons.publishedInStoreRequired||item.disableReasons.blockedByPolicy){return false}if(item.dependentExtensions.length>0){return false}if(item.state===chrome.developerPrivate.ExtensionState.BLOCKLISTED){return false}return true}function getItemSource(item){if(item.controlledInfo){return SourceType.POLICY}switch(item.location){case chrome.developerPrivate.Location.THIRD_PARTY:return SourceType.SIDELOADED;case chrome.developerPrivate.Location.UNPACKED:return SourceType.UNPACKED;case chrome.developerPrivate.Location.UNKNOWN:return SourceType.UNKNOWN;case chrome.developerPrivate.Location.FROM_STORE:return SourceType.WEBSTORE;case chrome.developerPrivate.Location.INSTALLED_BY_DEFAULT:return SourceType.INSTALLED_BY_DEFAULT;default:assertNotReached(item.location)}}function getItemSourceString(source){switch(source){case SourceType.POLICY:return loadTimeData.getString("itemSourcePolicy");case SourceType.SIDELOADED:return loadTimeData.getString("itemSourceSideloaded");case SourceType.UNPACKED:return loadTimeData.getString("itemSourceUnpacked");case SourceType.WEBSTORE:return loadTimeData.getString("itemSourceWebstore");case SourceType.INSTALLED_BY_DEFAULT:return loadTimeData.getString("itemSourceInstalledByDefault");case SourceType.UNKNOWN:return"";default:assertNotReached()}}function convertSafetyCheckReason(reason){switch(reason){case chrome.developerPrivate.SafetyCheckWarningReason.UNPUBLISHED:{return SafetyCheckWarningReason.UNPUBLISHED}case chrome.developerPrivate.SafetyCheckWarningReason.POLICY:{return SafetyCheckWarningReason.POLICY}case chrome.developerPrivate.SafetyCheckWarningReason.MALWARE:{return SafetyCheckWarningReason.MALWARE}case chrome.developerPrivate.SafetyCheckWarningReason.OFFSTORE:{return SafetyCheckWarningReason.OFFSTORE}case chrome.developerPrivate.SafetyCheckWarningReason.UNWANTED:{return SafetyCheckWarningReason.UNWANTED}case chrome.developerPrivate.SafetyCheckWarningReason.NO_PRIVACY_PRACTICE:{return SafetyCheckWarningReason.NO_PRIVACY_PRACTICE}default:{assertNotReached()}}}function computeInspectableViewLabel(view){const url=new URL(view.url);let label=view.url;if(url.protocol==="chrome-extension:"){label=url.pathname.substring(1)}if(label==="_generated_background_page.html"){label=loadTimeData.getString("viewBackgroundPage")}if(view.type==="EXTENSION_SERVICE_WORKER_BACKGROUND"){label=loadTimeData.getString("viewServiceWorker")}if(view.incognito){label+=" "+loadTimeData.getString("viewIncognito")}if(view.renderProcessId===-1){label+=" "+loadTimeData.getString("viewInactive")}if(view.isIframe){label+=" "+loadTimeData.getString("viewIframe")}return label}function getEnableToggleAriaLabel(toggleEnabled,extensionsDataType,appEnabled,extensionEnabled,itemOff){if(!toggleEnabled){return itemOff}const ExtensionType=chrome.developerPrivate.ExtensionType;switch(extensionsDataType){case ExtensionType.HOSTED_APP:case ExtensionType.LEGACY_PACKAGED_APP:case ExtensionType.PLATFORM_APP:return appEnabled;case ExtensionType.EXTENSION:case ExtensionType.SHARED_MODULE:return extensionEnabled}assertNotReached("Item type is not App or Extension.")}function sortViews(views){function getSortValue(view){switch(view.type){case chrome.developerPrivate.ViewType.EXTENSION_SERVICE_WORKER_BACKGROUND:return 2;case chrome.developerPrivate.ViewType.EXTENSION_BACKGROUND_PAGE:return 1;default:return 0}}return[...views].sort(((a,b)=>getSortValue(b)-getSortValue(a)))}function isTerminated(state){return state===chrome.developerPrivate.ExtensionState.TERMINATED}function getEnableControl(data){if(isTerminated(data.state)){return EnableControl.RELOAD}if(data.disableReasons.corruptInstall&&data.userMayModify){return EnableControl.REPAIR}return EnableControl.ENABLE_TOGGLE}function getEnableToggleTooltipText(data){if(!isEnabled$1(data.state)){return loadTimeData.getString("enableToggleTooltipDisabled")}return loadTimeData.getString(data.permissions.canAccessSiteData?"enableToggleTooltipEnabledWithSiteAccess":"enableToggleTooltipEnabled")}function getTemplate$q(){return html$1`<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style"></style>
<cr-dialog id="dialog" close-text="Close">
  <div slot="title">[[computeDialogTitle_(currentSite)]]</div>
  <div slot="body">
    <cr-input id="input" label="Site" placeholder="http://example.com" value="{{site_}}" on-input="validate_" invalid="[[inputInvalid_]]" error-message="Not a valid web address" spellcheck="false" autofocus>
    </cr-input>
    <div class="matching-restricted-sites-warning" hidden="[[!matchingRestrictedSites_.length]]">
      <cr-icon icon="cr:info-outline"></cr-icon>
      <span>[[computeMatchingRestrictedSitesWarning_(site_)]]</span>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <cr-button class="action-button" id="submit" on-click="onSubmitClick_" disabled="[[computeSubmitButtonDisabled_(inputInvalid_, site_)]]">
      [[computeSubmitButtonLabel_(currentSite)]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}function getTemplate$p(){return html$1`<!--_html_template_start_--><style include="cr-shared-style"></style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">[[computeDialogTitle_(siteToEdit)]]</div>
  <div slot="body">
    <cr-input id="input" label="Site URL" placeholder="https://example.com" value="{{site_}}" on-input="validate_" invalid="[[!inputValid_]]" error-message="Not a valid web address" spellcheck="false" autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_">
      Cancel
    </cr-button>
    <cr-button class="action-button" id="submit" on-click="onSubmit_" disabled="[[computeSubmitButtonDisabled_(inputValid_, site_)]]">
      [[computeSubmitButtonLabel_(siteToEdit)]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sitePermissionsPatternRegExp=new RegExp("^"+"((http|https)://)?"+"([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)"+"(:[0-9]+)?"+"$");function getSitePermissionsPatternFromSite(site){const res=sitePermissionsPatternRegExp.exec(site);assert(res);const scheme=res[1]||"https://";const host=res[3];const port=res[4]||"";return scheme+host+port}class SitePermissionsEditUrlDialogElement extends PolymerElement{static get is(){return"site-permissions-edit-url-dialog"}static get template(){return getTemplate$p()}static get properties(){return{delegate:Object,siteSet:String,siteToEdit:{type:String,value:null},site_:{type:String,value:""},inputValid_:{type:Boolean,value:true}}}connectedCallback(){super.connectedCallback();if(this.siteToEdit!==null){this.site_=this.siteToEdit;this.validate_()}}validate_(){this.inputValid_=this.site_.trim().length===0||sitePermissionsPatternRegExp.test(this.site_)}computeDialogTitle_(){return loadTimeData.getString(this.siteToEdit===null?"sitePermissionsAddSiteDialogTitle":"sitePermissionsEditSiteDialogTitle")}computeSubmitButtonDisabled_(){return!this.inputValid_||this.site_.trim().length===0}computeSubmitButtonLabel_(){return loadTimeData.getString(this.siteToEdit===null?"add":"save")}onCancel_(){this.$.dialog.cancel()}onSubmit_(){const pattern=getSitePermissionsPatternFromSite(this.site_);if(this.siteToEdit!==null){this.handleEdit_(pattern)}else{this.handleAdd_(pattern)}}handleEdit_(pattern){assert(this.siteToEdit);if(pattern===this.siteToEdit){this.$.dialog.close();return}this.delegate.removeUserSpecifiedSites(this.siteSet,[this.siteToEdit]).then((()=>{this.addUserSpecifiedSite_(pattern)}))}handleAdd_(pattern){assert(!this.siteToEdit);this.addUserSpecifiedSite_(pattern)}addUserSpecifiedSite_(pattern){this.delegate.addUserSpecifiedSites(this.siteSet,[pattern]).then((()=>{this.$.dialog.close()}),(()=>{this.inputValid_=false}))}}customElements.define(SitePermissionsEditUrlDialogElement.is,SitePermissionsEditUrlDialogElement);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteSettingsMixin=dedupingMixin((superClass=>{class SiteSettingsMixin extends superClass{static get properties(){return{delegate:Object,enableEnhancedSiteControls:Boolean,restrictedSites:{type:Array,value:[]},permittedSites:{type:Array,value:[]}}}ready(){super.ready();if(this.enableEnhancedSiteControls){this.delegate.getUserSiteSettings().then(this.onUserSiteSettingsChanged_.bind(this));this.delegate.getUserSiteSettingsChangedTarget().addListener(this.onUserSiteSettingsChanged_.bind(this))}}onUserSiteSettingsChanged_({permittedSites:permittedSites,restrictedSites:restrictedSites}){this.permittedSites=permittedSites;this.restrictedSites=restrictedSites}}return SiteSettingsMixin}));
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const runtimeHostsPatternRegExp=new RegExp("^"+"((http|https|\\*)://)?"+"(\\*\\.)?"+"([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)"+"(:[0-9]+)?"+"(\\/\\*|\\/)?"+"$");function getPatternFromSite(site){const res=runtimeHostsPatternRegExp.exec(site);assert(res);const scheme=res[1]||"*://";const host=(res[3]||"")+res[4];const port=res[5]||"";const path="/*";return scheme+host+port+path}function getMatchingUserSpecifiedSites(userSites,host){if(!runtimeHostsPatternRegExp.test(host)){return[]}const newHostRes=runtimeHostsPatternRegExp.exec(host);assert(newHostRes);const matchAllSchemes=!newHostRes[1]||newHostRes[1]==="*://";const matchAllSubdomains=newHostRes[3]==="*.";return userSites.filter((userSite=>{const siteRes=sitePermissionsPatternRegExp.exec(userSite);assert(siteRes);if(!matchAllSchemes&&newHostRes[1]!==siteRes[1]){return false}if(matchAllSubdomains&&!siteRes[3].endsWith(newHostRes[4])){return false}if(!matchAllSubdomains&&siteRes[3]!==newHostRes[4]){return false}return!newHostRes[5]||newHostRes[5]===siteRes[4]}))}const ExtensionsRuntimeHostsDialogElementBase=I18nMixin(SiteSettingsMixin(PolymerElement));class ExtensionsRuntimeHostsDialogElement extends ExtensionsRuntimeHostsDialogElementBase{static get is(){return"extensions-runtime-hosts-dialog"}static get template(){return getTemplate$q()}static get properties(){return{itemId:String,currentSite:{type:String,value:null},updateHostAccess:{type:Boolean,value:false},site_:String,inputInvalid_:{type:Boolean,value:false},matchingRestrictedSites_:{type:Array,computed:"computeMatchingRestrictedSites_(site_, restrictedSites)"}}}connectedCallback(){super.connectedCallback();if(this.currentSite!==null&&this.currentSite!==undefined){this.site_=this.currentSite;this.validate_()}this.$.dialog.showModal()}isOpen(){return this.$.dialog.open}validate_(){if(this.site_.trim().length===0){this.inputInvalid_=false;return}this.inputInvalid_=!runtimeHostsPatternRegExp.test(this.site_)}computeDialogTitle_(){const stringId=this.currentSite===null?"runtimeHostsDialogTitle":"hostPermissionsEdit";return loadTimeData.getString(stringId)}computeSubmitButtonDisabled_(){return this.inputInvalid_||this.site_===undefined||this.site_.trim().length===0}computeSubmitButtonLabel_(){const stringId=this.currentSite===null?"add":"save";return loadTimeData.getString(stringId)}computeMatchingRestrictedSites_(){return getMatchingUserSpecifiedSites(this.restrictedSites,this.site_)}onCancelClick_(){this.$.dialog.cancel()}onSubmitClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.AddHostDialogSubmitted");if(this.currentSite!==null){this.handleEdit_()}else{this.handleAdd_()}}handleAdd_(){assert(!this.currentSite);if(this.updateHostAccess){this.delegate.setItemHostAccess(this.itemId,chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES)}this.addPermission_()}handleEdit_(){assert(this.currentSite);assert(!this.updateHostAccess,"Editing host permissions should only be possible if the host "+"access is already set to specific sites.");if(this.currentSite===this.site_){this.$.dialog.close();return}this.delegate.removeRuntimeHostPermission(this.itemId,this.currentSite).then((()=>{this.addPermission_()}))}addPermission_(){const pattern=getPatternFromSite(this.site_);const restrictedSites=this.matchingRestrictedSites_;this.delegate.addRuntimeHostPermission(this.itemId,pattern).then((()=>{if(restrictedSites.length){this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED,restrictedSites)}this.$.dialog.close()}),(()=>{this.inputInvalid_=true}))}computeMatchingRestrictedSitesWarning_(){return this.matchingRestrictedSites_.length?this.i18n("matchingRestrictedSitesWarning",this.matchingRestrictedSites_[0]):""}}customElements.define(ExtensionsRuntimeHostsDialogElement.is,ExtensionsRuntimeHostsDialogElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getSupportedScaleFactors(){const supportedScaleFactors=[];if(!isIOS){supportedScaleFactors.push(1)}if(!isIOS&&!isAndroid){supportedScaleFactors.push(2)}else{supportedScaleFactors.push(window.devicePixelRatio)}return supportedScaleFactors}function getUrlForCss(s){const s2=s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g,"\\$1");return`url("${s2}")`}function getImageSet(path){const supportedScaleFactors=getSupportedScaleFactors();const replaceStartIndex=path.indexOf("SCALEFACTOR");if(replaceStartIndex<0){return getUrlForCss(path)}let s="";for(let i=0;i<supportedScaleFactors.length;++i){const scaleFactor=supportedScaleFactors[i];const pathWithScaleFactor=path.substr(0,replaceStartIndex)+scaleFactor+path.substr(replaceStartIndex+"scalefactor".length);s+=getUrlForCss(pathWithScaleFactor)+" "+scaleFactor+"x";if(i!==supportedScaleFactors.length-1){s+=", "}}return"image-set("+s+")"}function getBaseFaviconUrl(){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","16");faviconUrl.searchParams.set("scaleFactor","SCALEFACTORx");return faviconUrl}function getFaviconForPageURL(url,isSyncedUrlForHistoryUi,remoteIconUrlForUma="",size=16,forceLightMode=false){const faviconUrl=getBaseFaviconUrl();faviconUrl.searchParams.set("size",size.toString());faviconUrl.searchParams.set("pageUrl",url);const fallback="0";faviconUrl.searchParams.set("allowGoogleServerFallback",fallback);if(forceLightMode){faviconUrl.searchParams.set("forceLightMode","true")}return getImageSet(faviconUrl.toString())}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUBDOMAIN_SPECIFIER="*.";function getFaviconUrl(site){let faviconUrl=site.startsWith("*://")?site.replace("*://","http://"):site;if(faviconUrl.endsWith("/*")){faviconUrl=faviconUrl.substring(0,faviconUrl.length-2)}return getFaviconForPageURL(faviconUrl,false,"",20)}function matchesSubdomains(site){return site.includes(SUBDOMAIN_SPECIFIER)}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsHostPermissionsToggleListElementBase=SiteSettingsMixin(PolymerElement);class ExtensionsHostPermissionsToggleListElement extends ExtensionsHostPermissionsToggleListElementBase{static get is(){return"extensions-host-permissions-toggle-list"}static get template(){return getTemplate$r()}static get properties(){return{permissions:Object,itemId:String,selectedHost_:{type:String,value:""},matchingRestrictedSites_:Array,showMatchingRestrictedSitesDialog_:{type:Boolean,value:false}}}getRestrictedSitesDialog(){return this.shadowRoot.querySelector("extensions-restricted-sites-dialog")}allowedOnAllHosts_(){return this.permissions.hostAccess===chrome.developerPrivate.HostAccess.ON_ALL_SITES}getSortedHosts_(){return this.permissions.hosts.sort(((a,b)=>{if(a.host<b.host){return-1}if(a.host>b.host){return 1}return 0}))}onAllHostsToggleChanged_(e){const checked=e.detail;if(checked){this.delegate.setItemHostAccess(this.itemId,chrome.developerPrivate.HostAccess.ON_ALL_SITES);this.delegate.recordUserAction(UserAction.ALL_TOGGLED_ON)}else{this.delegate.setItemHostAccess(this.itemId,chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);this.delegate.recordUserAction(UserAction.ALL_TOGGLED_OFF)}}onHostAccessChanged_(e){const host=e.target.host;const checked=e.target.checked;if(!checked){this.delegate.removeRuntimeHostPermission(this.itemId,host);this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_OFF);return}this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_ON);const matchingRestrictedSites=getMatchingUserSpecifiedSites(this.restrictedSites,host);if(matchingRestrictedSites.length){this.selectedHost_=host;this.matchingRestrictedSites_=matchingRestrictedSites;this.showMatchingRestrictedSitesDialog_=true;return}this.delegate.addRuntimeHostPermission(this.itemId,host)}isItemChecked_(item){return item.granted||this.selectedHost_===item.host}getAllHostsToggleLabelClass_(){return this.enableEnhancedSiteControls?"new-all-hosts-toggle-label":""}onLearnMoreClick_(){this.delegate.recordUserAction(UserAction.LEARN_MORE)}getFaviconUrl_(url){return getFaviconUrl(url)}unselectHost_(){this.showMatchingRestrictedSitesDialog_=false;this.selectedHost_="";this.matchingRestrictedSites_=[]}onMatchingRestrictedSitesDialogClose_(){const dialog=this.getRestrictedSitesDialog();assert(dialog);if(dialog.wasConfirmed()){assert(this.matchingRestrictedSites_.length);this.delegate.addRuntimeHostPermission(this.itemId,this.selectedHost_).then((()=>{this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED,this.matchingRestrictedSites_)})).finally((()=>{this.unselectHost_()}))}else{this.unselectHost_()}}}customElements.define(ExtensionsHostPermissionsToggleListElement.is,ExtensionsHostPermissionsToggleListElement);let instance$7=null;function getCss$5(){return instance$7||(instance$7=[...[],css`:host{--cr-radio-button-checked-color:var(--color-radio-button-foreground-checked,
                var(--cr-fallback-color-primary));--cr-radio-button-checked-ripple-color:var(--cr-active-background-color);--cr-radio-button-ink-size:32px;--cr-radio-button-size:16px;--cr-radio-button-unchecked-color:var(--color-radio-button-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-radio-button-unchecked-ripple-color:var(--cr-active-background-color);--ink-to-circle:calc((var(--cr-radio-button-ink-size) -
                               var(--cr-radio-button-size)) / 2);align-items:center;display:flex;flex-shrink:0;gap:var(--cr-radio-button-label-spacing,20px);outline:0}@media (prefers-color-scheme:dark){:host{--cr-radio-button-checked-color:var(--google-blue-300);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-radio-button-unchecked-color:var(--google-grey-500);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}@media (forced-colors:active){:host{--cr-radio-button-checked-color:SelectedItem;forced-color-adjust:none}}:host([disabled]){opacity:1;pointer-events:none;--cr-radio-button-checked-color:var(--color-radio-foreground-disabled,
            var(--cr-fallback-color-disabled-background));--cr-radio-button-unchecked-color:var(--color-radio-foreground-disabled,
                var(--cr-fallback-color-disabled-background))}:host(:not([disabled])){cursor:pointer}:host(.label-first){flex-direction:row-reverse}#labelWrapper{flex:1}:host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}#label{color:inherit}:host([hide-label-text]) #label{clip:rect(0,0,0,0);display:block;position:fixed}.disc,.disc-border,.disc-wrapper,cr-ripple,paper-ripple{border-radius:50%}.disc-wrapper{height:var(--cr-radio-button-size);margin-block-start:var(--cr-radio-button-disc-margin-block-start,0);position:relative;width:var(--cr-radio-button-size)}.disc,.disc-border{box-sizing:border-box;height:var(--cr-radio-button-size);width:var(--cr-radio-button-size)}.disc-border{border:2px solid var(--cr-radio-button-unchecked-color)}:host([checked]) .disc-border{border-color:var(--cr-radio-button-checked-color)}#button:focus{outline:0}.disc{background-color:transparent;position:absolute;top:0;transform:scale(0);transition:border-color .2s,transform .2s}:host([checked]) .disc{background-color:var(--cr-radio-button-checked-color);transform:scale(.5)}#overlay{border-radius:50%;box-sizing:border-box;display:none;height:var(--cr-radio-button-ink-size);left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-radio-button-ink-size)}#button:hover #overlay{background-color:var(--cr-hover-background-color);display:block}#button:focus-visible #overlay{border:2px solid var(--cr-focus-outline-color);display:block}cr-ripple,paper-ripple{--paper-ripple-opacity:1;color:var(--cr-radio-button-unchecked-ripple-color);height:var(--cr-radio-button-ink-size);left:calc(-1 * var(--ink-to-circle));pointer-events:none;position:absolute;top:calc(-1 * var(--ink-to-circle));transition:color linear 80ms;width:var(--cr-radio-button-ink-size)}:host-context([dir=rtl]) cr-ripple,:host-context([dir=rtl]) paper-ripple{left:auto;right:calc(-1 * var(--ink-to-circle))}:host([checked]) cr-ripple,:host([checked]) paper-ripple{color:var(--cr-radio-button-checked-ripple-color)}`])}let instance$6=null;function getCss$4(){return instance$6||(instance$6=[...[getCss$5(),getCss$u()],css``])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5(){return html`
<div aria-checked="${this.getAriaChecked()}"
    aria-describedby="slotted-content"
    aria-disabled="${this.getAriaDisabled()}"
    aria-labelledby="label"
    class="disc-wrapper"
    id="button"
    role="radio"
    tabindex="${this.getButtonTabIndex()}"
    @keydown="${this.onInputKeydown}">
  <div class="disc-border"></div>
  <div class="disc"></div>
  <div id="overlay"></div>
</div>

<div id="labelWrapper">
  <span id="label" ?hidden="${!this.label}" aria-hidden="true">
    ${this.label}
  </span>
  <span id="slotted-content">
    <slot></slot>
  </span>
</div>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonMixinLit=superClass=>{class CrRadioButtonMixinLit extends superClass{constructor(){super(...arguments);this.checked=false;this.disabled=false;this.focusable=false;this.hideLabelText=false;this.label="";this.ariaCheckedString="false";this.ariaDisabledString="false"}static get properties(){return{checked:{type:Boolean,reflect:true},disabled:{type:Boolean,reflect:true,notify:true},focusable:{type:Boolean},hideLabelText:{type:Boolean,reflect:true},label:{type:String},name:{type:String,notify:true,reflect:true},ariaCheckedString:{type:String},ariaDisabledString:{type:String}}}connectedCallback(){super.connectedCallback();this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("up",this.hideRipple_.bind(this))}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("focusable")){const links=this.querySelectorAll("a");links.forEach((link=>{link.tabIndex=this.checked?0:-1}))}}getAriaDisabled(){return this.disabled?"true":"false"}getAriaChecked(){return this.checked?"true":"false"}getButtonTabIndex(){return this.focusable?0:-1}focus(){const button=this.shadowRoot.querySelector("#button");assert(button);button.focus()}getRipple(){assertNotReached()}hideRipple_(){this.getRipple().clear()}onInputKeydown(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}}}return CrRadioButtonMixinLit};
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonElementBase=CrRippleMixin(CrRadioButtonMixinLit(CrLitElement));class CrRadioButtonElement extends CrRadioButtonElementBase{static get is(){return"cr-radio-button"}static get styles(){return getCss$4()}render(){return getHtml$5.bind(this)()}createRipple(){this.rippleContainer=this.shadowRoot.querySelector(".disc-wrapper");const ripple=super.createRipple();ripple.setAttribute("recenters","");ripple.classList.add("circle");return ripple}}customElements.define(CrRadioButtonElement.is,CrRadioButtonElement);let instance$5=null;function getCss$3(){return instance$5||(instance$5=[...[],css`:host{display:inline-block}:host ::slotted(*){padding:var(--cr-radio-group-item-padding,12px)}:host([disabled]){cursor:initial;pointer-events:none;user-select:none}:host([disabled]) ::slotted(*){opacity:var(--cr-disabled-opacity)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4(){return html`<slot></slot>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEnabled(radio){return radio.matches(":not([disabled]):not([hidden])")&&radio.style.display!=="none"&&radio.style.visibility!=="hidden"}class CrRadioGroupElement extends CrLitElement{constructor(){super(...arguments);this.disabled=false;this.selectableElements="cr-radio-button, cr-card-radio-button, controlled-radio-button";this.nestedSelectable=false;this.selectableRegExp_=new RegExp("");this.buttons_=null;this.buttonEventTracker_=new EventTracker;this.deltaKeyMap_=null;this.isRtl_=false;this.populateBound_=null}static get is(){return"cr-radio-group"}static get styles(){return getCss$3()}render(){return getHtml$4.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},selected:{type:String,notify:true},selectableElements:{type:String},nestedSelectable:{type:Boolean},selectableRegExp_:{type:Object}}}firstUpdated(){this.addEventListener("keydown",(e=>this.onKeyDown_(e)));this.addEventListener("click",(e=>this.onClick_(e)));if(!this.hasAttribute("role")){this.setAttribute("role","radiogroup")}}connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-radio-group");this.deltaKeyMap_=new Map([["ArrowDown",1],["ArrowLeft",this.isRtl_?1:-1],["ArrowRight",this.isRtl_?-1:1],["ArrowUp",-1],["PageDown",1],["PageUp",-1]]);this.populateBound_=()=>this.populate_();assert(this.populateBound_);this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.populateBound_);this.populate_()}disconnectedCallback(){super.disconnectedCallback();assert(this.populateBound_);this.shadowRoot.querySelector("slot").removeEventListener("slotchange",this.populateBound_);this.buttonEventTracker_.removeAll()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("selectableElements")){const tags=this.selectableElements.split(", ").join("|");this.selectableRegExp_=new RegExp(`^(${tags})$`,"i")}}updated(changedProperties){if(changedProperties.has("nestedSelectable")){this.populate_()}if(changedProperties.has("disabled")||changedProperties.has("selected")){this.update_()}this.setAttribute("aria-disabled",`${this.disabled}`);super.updated(changedProperties)}focus(){if(this.disabled||!this.buttons_){return}const radio=this.buttons_.find((radio=>this.isButtonEnabledAndSelected_(radio)));if(radio){radio.focus()}}onKeyDown_(event){if(this.disabled){return}if(event.ctrlKey||event.shiftKey||event.metaKey||event.altKey){return}const targetElement=event.target;if(!this.buttons_||!this.buttons_.includes(targetElement)){return}if(event.key===" "||event.key==="Enter"){event.preventDefault();this.select_(targetElement);return}const enabledRadios=this.buttons_.filter(isEnabled);if(enabledRadios.length===0){return}assert(this.deltaKeyMap_);let selectedIndex;const max=enabledRadios.length-1;if(event.key==="Home"){selectedIndex=0}else if(event.key==="End"){selectedIndex=max}else if(this.deltaKeyMap_.has(event.key)){const delta=this.deltaKeyMap_.get(event.key);const lastSelection=enabledRadios.findIndex((radio=>radio.checked));selectedIndex=Math.max(0,lastSelection)+delta;if(selectedIndex>max){selectedIndex=0}else if(selectedIndex<0){selectedIndex=max}}else{return}const radio=enabledRadios[selectedIndex];const name=`${radio.name}`;if(this.selected!==name){event.preventDefault();event.stopPropagation();this.selected=name;radio.focus()}}onClick_(event){const path=event.composedPath();if(path.some((target=>/^a$/i.test(target.tagName)))){return}const target=path.find((n=>this.selectableRegExp_.test(n.tagName)));if(target&&this.buttons_&&this.buttons_.includes(target)){this.select_(target)}}populate_(){const elements=this.shadowRoot.querySelector("slot").assignedElements({flatten:true});this.buttons_=Array.from(elements).flatMap((el=>{let result=[];if(el.matches(this.selectableElements)){result.push(el)}if(this.nestedSelectable){result=result.concat(Array.from(el.querySelectorAll(this.selectableElements)))}return result}));this.buttonEventTracker_.removeAll();this.buttons_.forEach((el=>{this.buttonEventTracker_.add(el,"disabled-changed",(()=>this.populate_()));this.buttonEventTracker_.add(el,"name-changed",(()=>this.populate_()))}));this.update_()}select_(button){if(!isEnabled(button)){return}const name=`${button.name}`;if(this.selected!==name){this.selected=name}}isButtonEnabledAndSelected_(button){return!this.disabled&&button.checked&&isEnabled(button)}update_(){if(!this.buttons_){return}let noneMadeFocusable=true;this.buttons_.forEach((radio=>{radio.checked=this.selected!==undefined&&`${radio.name}`===`${this.selected}`;const disabled=this.disabled||!isEnabled(radio);const canBeFocused=radio.checked&&!disabled;if(canBeFocused){radio.focusable=true;noneMadeFocusable=false}else{radio.focusable=false}radio.setAttribute("aria-disabled",`${disabled}`)}));if(noneMadeFocusable&&!this.disabled){const radio=this.buttons_.find(isEnabled);if(radio){radio.focusable=true}}}}customElements.define(CrRadioGroupElement.is,CrRadioGroupElement);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html$1`
  <template>
    <style>
.md-select{--md-arrow-width:7px;--md-select-bg-color:transparent;--md-select-option-bg-color:white;--md-select-side-padding:10px;--md-select-text-color:inherit;-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:12px;height:36px;line-height:36px;max-width:100%;outline:0;padding-block-end:0;padding-block-start:0;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}.md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1;pointer-events:none}.md-select:focus{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);styleMod$1.register("md-select");function getTemplate$o(){return html$1`<!--_html_template_start_--><style include="cr-shared-style action-link md-select shared-style cr-icons">cr-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size)}.link-icon-button{margin-inline-start:6px}#section-heading{--md-select-width:160px;align-items:center;display:flex}#section-heading-heading{display:flex;flex:1}#section-heading .link-icon-button{margin-inline-start:6px}#hostAccess{margin-inline-start:12px;width:100%}#hosts{margin-bottom:0;padding-inline-start:calc(var(--cr-section-indent-padding) - var(--cr-section-padding))}#hosts li{align-items:center;border-top:var(--cr-separator-line);display:flex;height:var(--cr-section-min-height)}#hosts li:first-child{border-top:none}#add-host{font-weight:500;width:100%}#permissions-mode{color:var(--cr-primary-text-color);margin-top:12px}#new-permissions-mode{color:var(--cr-primary-text-color);margin-top:12px;padding-inline-start:calc(var(--cr-section-indent-padding) - var(--cr-section-padding))}#new-section-heading{align-items:flex-start;display:flex;flex-direction:column}#new-section-heading-title{display:flex}#new-section-heading-subtext{color:var(--cr-secondary-text-color);margin-top:3px}#host-access-row{display:flex;justify-content:space-between;margin-top:18px;width:100%}.site{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.site-favicon{margin-inline-end:calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}</style>
<template is="dom-if" if="[[!enableEnhancedSiteControls]]">
  <div id="permissions-mode">
    <div id="section-heading">
      <div id="section-heading-heading">
        <span id="section-heading-text">
          Allow this extension to read and change all your data on websites you visit:
        </span>
        <a class="link-icon-button" aria-label="Learn more about extension permissions" href="https://support.google.com/chrome?p=enable_extensions" target="_blank" on-click="onLearnMoreClick_">
          <cr-icon icon="cr:help-outline"></cr-icon>
        </a>
      </div>
      <div>
        <select id="hostAccess" class="md-select" on-change="onHostAccessChange_" value="[[permissions.hostAccess]]" aria-labelledby="section-heading-text">
          <option value="[[HostAccess_.ON_CLICK]]">
            On click
          </option>
          <option value="[[HostAccess_.ON_SPECIFIC_SITES]]">
            On specific sites
          </option>
          <option value="[[HostAccess_.ON_ALL_SITES]]">
            On all sites
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<template is="dom-if" if="[[enableEnhancedSiteControls]]">
  <div id="new-permissions-mode">
    <div id="new-section-heading">
      <div id="new-section-heading-title">
        <span id="new-section-heading-text">
            Choose when this extension can read and change your site data
        </span>
        <a class="link-icon-button" aria-label="Learn more about extension permissions" href="https://support.google.com/chrome?p=enable_extensions" target="_blank" on-click="onLearnMoreClick_">
          <cr-icon icon="cr:help-outline"></cr-icon>
        </a>
      </div>
      <span id="new-section-heading-subtext">
        You can always click the extension to use it on any site
      </span>
      <div id="host-access-row">
        <select id="newHostAccess" class="md-select" on-change="onHostAccessChange_" value="[[permissions.hostAccess]]" aria-labelledby="new-section-heading-text">
          <option value="[[HostAccess_.ON_CLICK]]">
            Ask on every visit
          </option>
          <option value="[[HostAccess_.ON_SPECIFIC_SITES]]">
            Allow on specific sites
          </option>
          <option value="[[HostAccess_.ON_ALL_SITES]]">
            Allow on all sites
          </option>
        </select>
        <cr-button id="add-site-button" hidden="[[!showSpecificSites_(permissions.*)]]" on-click="onAddHostClick_">
          Add
        </cr-button>
      </div>
    </div>
  </div>
</template>

<template is="dom-if" if="[[showSpecificSites_(permissions.*)]]">
  <ul id="hosts">
    <template is="dom-repeat" items="[[getRuntimeHosts_(permissions.hosts)]]">
      <li>
        <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item)]]" hidden$="[[!enableEnhancedSiteControls]]"></div>
        <div class="site">[[item]]</div>
        <cr-icon-button class="icon-edit edit-host" on-click="onEditHostClick_" hidden$="[[!enableEnhancedSiteControls]]"></cr-icon-button>
        <cr-icon-button class="icon-delete-gray remove-host" on-click="onDeleteHostClick_" hidden$="[[!enableEnhancedSiteControls]]"></cr-icon-button>
        <cr-icon-button class="icon-more-vert open-edit-host" on-click="onOpenEditHostClick_" title="Edit" hidden$="[[enableEnhancedSiteControls]]"></cr-icon-button>
      </li>
    </template>
    <li hidden$="[[enableEnhancedSiteControls]]">
      <a id="add-host" is="action-link" on-click="onAddHostClick_">
        Add a new page
      </a>
    </li>
  </ul>
</template>

<cr-action-menu id="hostActionMenu" role-description="Menu">
  <button class="dropdown-item" id="action-menu-edit" on-click="onActionMenuEditClick_">
    Edit
  </button>
  <button class="dropdown-item" id="action-menu-remove" on-click="onActionMenuRemoveClick_">
    Remove
  </button>
</cr-action-menu>
<template is="dom-if" if="[[showHostDialog_]]" restamp>
  <extensions-runtime-hosts-dialog delegate="[[delegate]]" item-id="[[itemId]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" current-site="[[hostDialogModel_]]" update-host-access="[[dialogShouldUpdateHostAccess_(oldHostAccess_)]]" on-close="onHostDialogClose_" on-cancel="onHostDialogCancel_">
  </extensions-runtime-hosts-dialog>
</template>
<template is="dom-if" if="[[showRemoveSiteDialog_]]" restamp>
  <cr-dialog id="removeSitesDialog" on-cancel="onRemoveSitesWarningCancel_" show-on-attach>
    <div slot="title">Remove the specific sites you added?</div>
    <div slot="button-container">
      <cr-button class="cancel-button" on-click="onRemoveSitesWarningCancel_">
        Cancel
      </cr-button>
      <cr-button class="action-button" on-click="onRemoveSitesWarningConfirm_">
        Remove
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsRuntimeHostPermissionsElement extends PolymerElement{static get is(){return"extensions-runtime-host-permissions"}static get template(){return getTemplate$o()}static get properties(){return{permissions:Object,itemId:String,delegate:Object,enableEnhancedSiteControls:Boolean,showHostDialog_:Boolean,showRemoveSiteDialog_:{type:Boolean,value:false},hostDialogModel_:{type:String,value:null},hostDialogAnchorElement_:{type:Object,value:null},actionMenuModel_:{type:String,value:null},actionMenuAnchorElement_:{type:Object,value:null},oldHostAccess_:{type:String,value:null},revertingHostAccess_:{type:Boolean,value:false},HostAccess_:{type:Object,value:chrome.developerPrivate.HostAccess}}}getSelectMenu(){const selectMenuId=this.enableEnhancedSiteControls?"#newHostAccess":"#hostAccess";return this.shadowRoot.querySelector(selectMenuId)}getRemoveSiteDialog(){return this.shadowRoot.querySelector("#removeSitesDialog")}onHostAccessChange_(){const selectMenu=this.getSelectMenu();const access=selectMenu.value;if(!this.revertingHostAccess_){switch(access){case chrome.developerPrivate.HostAccess.ON_CLICK:chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.OnClickSelected");break;case chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES:chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.OnSpecificSitesSelected");break;case chrome.developerPrivate.HostAccess.ON_ALL_SITES:chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.OnAllSitesSelected");break}}const kOnSpecificSites=chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES;if(access===kOnSpecificSites&&this.permissions.hostAccess!==kOnSpecificSites){this.oldHostAccess_=this.permissions.hostAccess;this.doShowHostDialog_(selectMenu,null)}else if(this.enableEnhancedSiteControls&&access!==kOnSpecificSites&&this.permissions.hostAccess===kOnSpecificSites){this.showRemoveSiteDialog_=true}else{this.delegate.setItemHostAccess(this.itemId,access)}}showSpecificSites_(){return this.permissions.hostAccess===chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES}getRuntimeHosts_(){if(!this.permissions.hosts){return[]}return this.permissions.hosts.filter((control=>control.granted)).map((control=>control.host)).sort()}onAddHostClick_(e){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.AddHostActivated");this.doShowHostDialog_(e.target,null)}doShowHostDialog_(anchorElement,currentSite){this.hostDialogAnchorElement_=anchorElement;this.hostDialogModel_=currentSite;this.showHostDialog_=true}onHostDialogClose_(){this.hostDialogModel_=null;this.showHostDialog_=false;assert(this.hostDialogAnchorElement_);focusWithoutInk(this.hostDialogAnchorElement_);this.hostDialogAnchorElement_=null;this.oldHostAccess_=null}onHostDialogCancel_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.AddHostDialogCanceled");if(this.oldHostAccess_){assert(this.permissions.hostAccess===this.oldHostAccess_);this.revertingHostAccess_=true;this.getSelectMenu().value=this.oldHostAccess_;this.revertingHostAccess_=false;this.oldHostAccess_=null}}dialogShouldUpdateHostAccess_(){return!!this.oldHostAccess_}onOpenEditHostClick_(e){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.ActionMenuOpened");this.actionMenuModel_=e.model.item;this.actionMenuAnchorElement_=e.target;this.$.hostActionMenu.showAt(e.target)}onActionMenuEditClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.ActionMenuEditActivated");const site=this.actionMenuModel_;assert(this.actionMenuAnchorElement_,"Menu Anchor");const anchorElement=this.actionMenuAnchorElement_;this.actionMenuAnchorElement_=null;this.closeActionMenu_();this.doShowHostDialog_(anchorElement,site)}onActionMenuRemoveClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.ActionMenuRemoveActivated");assert(this.actionMenuModel_,"Action Menu Model");this.delegate.removeRuntimeHostPermission(this.itemId,this.actionMenuModel_);this.closeActionMenu_()}closeActionMenu_(){const menu=this.$.hostActionMenu;assert(menu.open);menu.close()}onLearnMoreClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.LearnMoreActivated")}onEditHostClick_(e){this.doShowHostDialog_(e.target,e.model.item)}onDeleteHostClick_(e){this.delegate.removeRuntimeHostPermission(this.itemId,e.model.item)}getFaviconUrl_(url){return getFaviconUrl(url)}onRemoveSitesWarningConfirm_(){this.delegate.setItemHostAccess(this.itemId,this.getSelectMenu().value);this.getRemoveSiteDialog().close();this.showRemoveSiteDialog_=false}onRemoveSitesWarningCancel_(){assert(this.permissions.hostAccess===chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);this.revertingHostAccess_=true;this.getSelectMenu().value=this.permissions.hostAccess;this.revertingHostAccess_=false;this.getRemoveSiteDialog().close();this.showRemoveSiteDialog_=false}}customElements.define(ExtensionsRuntimeHostPermissionsElement.is,ExtensionsRuntimeHostPermissionsElement);function getTemplate$n(){return html$1`<!--_html_template_start_--><style include="iron-flex cr-shared-style cr-icons action-link
    shared-style">:host{--iron-icon-fill-color:var(--cr-secondary-text-color);display:block;height:100%}#enable-section{margin-bottom:8px}#enable-section cr-tooltip-icon{margin-inline-end:20px}#enable-section span{color:var(--cr-secondary-text-color);font-weight:500}#enable-section .enabled-text{color:var(--google-blue-500)}@media (prefers-color-scheme:dark){#enable-section .enabled-text{color:var(--google-blue-300)}}#icon{height:24px;margin-inline-end:12px;margin-inline-start:16px;width:24px}#name{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.section{box-sizing:border-box;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.message-container{align-items:center;background-color:var(--google-grey-50);display:flex;padding:15px;margin-top:2px}.message-icon{align-items:center;align-self:flex-start;display:flex;height:var(--cr-icon-size);width:var(--cr-icon-size);fill:var(--panel-icon-color)}.message-container cr-icon{height:var(--cr-icon-size);padding:6px;width:var(--cr-icon-size)}.message-text{flex:1;margin-inline-start:15px}@media (prefers-color-scheme:dark){.message-container{background-color:var(--google-grey-800)}}.keep-button{margin-inline-end:10px;margin-inline-start:40px}.cr-row.control-line{justify-content:space-between}.section-content{color:var(--cr-secondary-text-color)}.actionable{cursor:pointer}.inspectable-view{display:inline;height:20px;overflow-wrap:anywhere;width:auto;word-break:normal}@media (prefers-color-scheme:light){.warning .action-button{background:#fff;color:var(--google-blue-500)}#reload-button{color:var(--google-blue-500)}}.warning span{color:var(--error-color);flex:1}.warning-icon{--iron-icon-fill-color:var(--error-color);flex-shrink:0;height:18px;margin-inline-end:8px;width:18px}.link-icon-button{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);margin-inline-start:6px}#allowlist-warning{flex:1}#allowlist-warning .warning-icon{--iron-icon-fill-color:var(--warning-color)}ul{margin:0;padding-inline-start:20px}#options-section .control-line:first-child{border-top:var(--cr-separator-line)}extensions-toggle-row{box-sizing:border-box;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}#show-access-requests-toggle{margin-inline-start:var(--cr-section-indent-width);min-height:var(--cr-section-min-height);padding:0}#access-toggle-and-link{color:var(--cr-primary-text-color);display:flex}#load-path{word-break:break-all}#load-path>a[is=action-link]{display:inline}#size{align-items:center;display:flex}paper-spinner-lite{height:var(--cr-icon-size);width:var(--cr-icon-size)}#a11yAssociation{height:0;overflow:hidden}</style>

<div id="a11yAssociation" aria-hidden="true">
  [[a11yAssociation(data.name)]]
</div>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" aria-label$="[[getBackButtonAriaLabel_(data.name)]]" aria-roledescription$="[[
              getBackButtonAriaRoleDescription_(data.name)]]" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <img id="icon" src="[[data.iconUrl]]" alt="">
      <span id="name" class="cr-title-text" role="heading" aria-level="1">
        [[data.name]]
      </span>
      <template is="dom-if" if="[[!computeDevReloadButtonHidden_(data.*)]]">
        <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap" title="Reload" aria-label="Reload" aria-describedby="a11yAssociation" on-click="onReloadClick_">
        </cr-icon-button>
      </template>
    </div>

    <div id="safetyCheckWarningContainer" class="message-container" hidden$="[[!showSafetyCheck_]]">
      <cr-icon aria-hidden="true" icon="extensions-icons:my_extensions" class="message-icon">
      </cr-icon>
      <div class="message-text">
        <span class="section-title" aria-level="2">
          Chrome recommends you review this extension
        </span>
        <div class="section-content">
          [[data.safetyCheckText.detailString]]
        </div>
      </div>
      <cr-button class="keep-button" on-click="onKeepClick_">
        Keep
      </cr-button>
      <cr-button class="action-button" on-click="onRemoveClick_">
        Remove
      </cr-button>
    </div>

    <div id="mv2DeprecationMessage" class="message-container" hidden$="[[!showMv2DeprecationMessage_]]">
      <cr-icon aria-hidden="true" icon$="[[getMv2DeprecationMessageIcon_()]]" class="message-icon">
      </cr-icon>
      <div class="message-text">
        <span class="section-title" aria-level="2">
          [[getMv2DeprecationMessageHeader_()]]
        </span>
        <div class="section-content" inner-h-t-m-l="[[getMv2DeprecationMessageSubtitle_()]]">
        </div>
      </div>
      <cr-button class="find-alternative-button" on-click="onFindAlternativeButtonClick_" hidden$="[[!showMv2DeprecationFindAlternativeButton_]]">
        Find alternative
      </cr-button>
      <cr-button class="remove-button" on-click="onRemoveButtonClick_" hidden$="[[!showMv2DeprecationRemoveButton_]]">
        Remove
      </cr-button>
      <cr-icon-button class="icon-more-vert header-aligned-button" id="actionMenuButton" on-click="onActionMenuButtonClick_" title="More options" aria-label="[[getActionMenuButtonLabel_()]]" hidden$="[[!showMv2DeprecationActionMenu_]]">
      </cr-icon-button>
      <cr-action-menu id="actionMenu">
        <button class="dropdown-item" id="findAlternativeAction" hidden="[[!data.recommendationsUrl]]" on-click="onFindAlternativeActionClick_">
          Find alternative
        </button>
        <button class="dropdown-item" id="keepAction" on-click="onKeepActionClick_">
          Keep for now
        </button>
      </cr-action-menu>
    </div>

    <div class="cr-row first control-line" id="enable-section">
      <span class$="[[computeEnabledStyle_(data.state)]]">
        [[computeEnabledText_(data.state, 'On',
            'Off')]]
      </span>
      <div class="layout horizontal">
        <cr-tooltip-icon hidden$="[[!data.controlledInfo]]" tooltip-text="[[data.controlledInfo.text]]" icon-class="cr20:domain" icon-aria-label="[[data.controlledInfo.text]]">
        </cr-tooltip-icon>
        <template is="dom-if" if="[[showReloadButton_(data.state)]]">
          <cr-button id="terminated-reload-button" class="action-button" on-click="onReloadClick_">
            Reload
          </cr-button>
        </template>
        <cr-tooltip-icon id="parentDisabledPermissionsToolTip" hidden$="[[!data.disableReasons.parentDisabledPermissions]]" tooltip-text="Your parent has disabled extension permissions" icon-class="cr20:kite" icon-aria-label="Your parent has disabled extension permissions">
        </cr-tooltip-icon>
        <cr-toggle id="enableToggle" aria-label$="[[getEnableToggleAriaLabel_(data.*)]]" aria-describedby="name enable-toggle-tooltip" checked="[[isEnabled_(data.state)]]" on-change="onEnableToggleChange_" disabled$="[[!isEnableToggleEnabled_(data.*)]]" hidden$="[[!showEnableToggle_(data.*)]]">
        </cr-toggle>
        <cr-tooltip id="enable-toggle-tooltip" for="enableToggle" position="left" aria-hidden="true" animation-delay="0" fit-to-visible-bounds>
          [[getEnableToggleTooltipText_(data.*)]]
        </cr-tooltip>
      </div>
    </div>
    <div id="warnings" hidden$="[[!hasSevereWarnings_(data.*)]]">
      <div id="runtime-warnings" hidden$="[[!data.runtimeWarnings.length]]" class="cr-row continuation warning control-line">
        <cr-icon class="warning-icon" icon="cr:error"></cr-icon>
        <span>
          <template is="dom-repeat" items="[[data.runtimeWarnings]]">
            [[item]]
          </template>
        </span>
        <template is="dom-if" if="[[!showReloadButton_(data.state)]]">
          <cr-button id="warnings-reload-button" class="action-button" on-click="onReloadClick_">
            Reload
          </cr-button>
        </template>
      </div>
      <div class="cr-row continuation warning" id="suspicious-warning" hidden$="[[!data.disableReasons.suspiciousInstall]]">
        <cr-icon class="warning-icon" icon="cr:warning"></cr-icon>
        <span>
          This extension is not listed in the Chrome Web Store and may have been added without your knowledge.
          <a target="_blank" href="https://support.google.com/chrome?p=ui_remove_non_cws_extensions&amp;hl=en-US" aria-label="Learn more about disabled extensions.">
            Learn more
          </a>
        </span>
      </div>
      <div class="cr-row continuation warning control-line" id="corrupted-warning" hidden$="[[!showRepairButton_(data.disableReasons.corruptInstall)]]">
        <cr-icon class="warning-icon" icon="cr:warning"></cr-icon>
        <span>This extension may have been corrupted.</span>
        <cr-button id="repair-button" class="action-button" on-click="onRepairClick_">
          Repair
        </cr-button>
      </div>
      <div class="cr-row continuation warning" id="blocklisted-warning" hidden$="[[!showBlocklistText_]]">
        <cr-icon class="warning-icon" icon="cr:warning"></cr-icon>
        <span>[[data.blocklistText]]</span>
      </div>
      <div class="cr-row continuation warning" id="update-required-warning" hidden$="[[!data.disableReasons.updateRequired]]">
        <cr-icon class="warning-icon" icon="cr:warning"></cr-icon>
        <span>This extension is outdated and disabled by enterprise policy. It might become enabled automatically when a newer version is available.</span>
      </div>
      <div class="cr-row continuation warning" id="published-in-store-required-warning" hidden$="[[!data.disableReasons.publishedInStoreRequired]]">
        <cr-icon class="warning-icon" icon="cr:warning"></cr-icon>
        <span>This extension has been disabled by enterprise policy because it is no longer available on the Chrome Web Store.</span>
      </div>
    </div>
    <div id="allowlist-warning" class="cr-row continuation" hidden$="[[!showAllowlistWarning_(data.*)]]">
      <cr-icon class="warning-icon" icon="extensions-icons:safebrowsing_warning">
      </cr-icon>
      <span class="cr-secondary-text">
        This extension is not trusted by Enhanced Safe Browsing.
        <a href="https://support.google.com/chrome?p=cws_enhanced_safe_browsing" target="_blank" aria-label="Learn more about Enhanced Safe Browsing.">
          Learn more
        </a>
      </span>
    </div>
    <div class="section">
      <div class="section-title" role="heading" aria-level="2">
        Description
      </div>
      <div class="section-content" id="description">
        [[getDescription_(data.description, 'No description provided')]]
      </div>
    </div>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        Version
      </div>
      <div class="section-content">[[data.version]]</div>
    </div>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        Size
      </div>
      <div class="section-content" id="size">
        <span>[[size_]]</span>
        <paper-spinner-lite active="[[!size_]]" hidden="[[size_]]">
        </paper-spinner-lite>
      </div>
    </div>
    <div class="section hr" id="id-section" hidden$="[[!inDevMode]]">
      <div class="section-title" role="heading" aria-level="2">
        ID
      </div>
      <div class="section-content">[[data.id]]</div>
    </div>
    <template is="dom-if" if="[[inDevMode]]">
      <div class="section hr" id="inspectable-views">
        <div class="section-title" role="heading" aria-level="2">
          Inspect views
        </div>
        <div class="section-content">
          <ul id="inspect-views">
            <li hidden="[[data.views.length]]">
              No active views
            </li>
            <template is="dom-repeat" items="[[sortedViews_]]">
              <li>
                <a is="action-link" class="inspectable-view" on-click="onInspectClick_">
                  [[computeInspectLabel_(item)]]
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </template>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        Permissions
      </div>
      <div class="section-content">
        <span id="no-permissions" hidden$="[[hasPermissions_(data.*)]]">
          [[getNoPermissionsString_(data.*, enableEnhancedSiteControls)]]
        </span>
        <ul id="permissions-list" hidden$="[[!data.permissions.simplePermissions.length]]">
          <template is="dom-repeat" items="[[data.permissions.simplePermissions]]">
            <li>
              [[item.message]]
              <ul hidden="[[!item.submessages.length]]">
                <template is="dom-repeat" items="[[item.submessages]]">
                  <li>[[item]]</li>
                </template>
              </ul>
            </li>
          </template>
          <li hidden$="[[showSiteAccessSection_(data.*,
              enableEnhancedSiteControls)]]">
            This extension has no additional site access
          </li>
        </ul>
      </div>
    </div>
    <template is="dom-if" if="[[showSiteAccessSection_(data.*,
        enableEnhancedSiteControls)]]">
      <div class="section hr">
        <div class="section-title" role="heading" aria-level="2" hidden$="[[enableEnhancedSiteControls]]">
          Site access
        </div>
        <div class="section-content">
          <span id="no-site-access" hidden$="[[showSiteAccessContent_(data.*)]]">
            This extension has no additional site access
          </span>
          <template is="dom-if" if="[[showFreeformRuntimeHostPermissions_(data.*)]]">
            <extensions-runtime-host-permissions permissions="[[data.permissions.runtimeHostPermissions]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" delegate="[[delegate]]" item-id="[[data.id]]">
            </extensions-runtime-host-permissions>
          </template>
          <template is="dom-if" if="[[showHostPermissionsToggleList_(data.*)]]">
            <extensions-host-permissions-toggle-list permissions="[[data.permissions.runtimeHostPermissions]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" delegate="[[delegate]]" item-id="[[data.id]]">
            </extensions-host-permissions-toggle-list>
          </template>
          <template is="dom-if" if="[[showEnableAccessRequestsToggle_(
                data.*, enableEnhancedSiteControls)]]">
            <extensions-toggle-row id="show-access-requests-toggle" checked="[[data.showAccessRequestsInToolbar]]" class="hr" on-change="onShowAccessRequestsChange_">
              <div id="access-toggle-and-link">
                <span>Allow extension to show access requests in the Chrome toolbar</span>
                <a class="link-icon-button" aria-label="Learn more about access requests." href="https://support.google.com/chrome_webstore/answer/2664769" target="_blank">
                  <cr-icon icon="cr:help-outline"></cr-icon>
                </a>
              </div>
            </extensions-toggle-row>
          </template>
        </div>
      </div>
    </template>
    <template is="dom-if" if="[[hasDependentExtensions_(data.dependentExtensions.splices)]]">
      <div class="section hr">
        <div class="section-title" role="heading" aria-level="2">
          The following extensions depend on this extension:
        </div>
        <div class="section-content">
          <ul id="dependent-extensions-list">
            <template is="dom-repeat" items="[[data.dependentExtensions]]">
              <li>[[computeDependentEntry_(item)]]</li>
            </template>
          </ul>
        </div>
      </div>
    </template>
    <cr-link-row class="hr" hidden$="[[isLacrosEnabled_]]" id="siteSettings" label="Site settings" on-click="onSiteSettingsClick_" external></cr-link-row>
    <template is="dom-if" if="[[shouldShowOptionsSection_(data.*)]]">
      <div id="options-section">
        <template is="dom-if" if="[[canPinToToolbar_(data.pinnedToToolbar)]]">
          <extensions-toggle-row id="pin-to-toolbar" checked="[[data.pinnedToToolbar]]" class="hr" on-change="onPinnedToToolbarChange_">
            <span>Pin to toolbar</span>
          </extensions-toggle-row>
        </template>
        <template is="dom-if" if="[[shouldShowIncognitoOption_(
              data.incognitoAccess.isEnabled, incognitoAvailable)]]">
          <extensions-toggle-row id="allow-incognito" checked="[[data.incognitoAccess.isActive]]" class="hr" on-change="onAllowIncognitoChange_">
            <div>
              <div>Allow in Incognito</div>
              <div class="section-content">Warning: Google Chrome cannot prevent extensions from recording your browsing history. To disable this extension in Incognito mode, unselect this option.</div>
            </div>
          </extensions-toggle-row>
        </template>
        <template is="dom-if" if="[[data.fileAccess.isEnabled]]">
          <extensions-toggle-row id="allow-on-file-urls" checked="[[data.fileAccess.isActive]]" class="hr" on-change="onAllowOnFileUrlsChange_">
            <span>Allow access to file URLs</span>
          </extensions-toggle-row>
        </template>
        <template is="dom-if" if="[[data.errorCollection.isEnabled]]">
          <extensions-toggle-row id="collect-errors" checked="[[data.errorCollection.isActive]]" class="hr" on-change="onCollectErrorsChange_">
            <span>Collect errors</span>
          </extensions-toggle-row>
        </template>
      </div>
    </template>
    <cr-link-row class="hr" id="extensionsOptions" disabled="[[!isEnabled_(data.state)]]" hidden="[[!shouldShowOptionsLink_(data.*)]]" label="Extension options" on-click="onExtensionOptionsClick_" external></cr-link-row>
    <cr-link-row class="hr" id="extensionsActivityLogLink" hidden$="[[!showActivityLog]]" label="View activity log" on-click="onActivityLogClick_" role-description="Subpage button">
    </cr-link-row>
    <cr-link-row class="hr" hidden="[[!data.manifestHomePageUrl.length]]" id="extensionWebsite" label="Open extension website" on-click="onExtensionWebSiteClick_" external></cr-link-row>
    <cr-link-row class="hr" hidden="[[!data.webStoreUrl.length]]" id="viewInStore" label="View in Chrome Web Store" on-click="onViewInStoreClick_" external></cr-link-row>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        Source
      </div>
      <div id="source" class="section-content">
        [[computeSourceString_(data.*)]]
      </div>
      <div id="load-path" class="section-content" hidden$="[[!data.prettifiedPath]]">
        <span>Loaded from:</span>
        <a is="action-link" on-click="onLoadPathClick_">
          [[data.prettifiedPath]]
        </a>
      </div>
    </div>
    <cr-link-row class="hr" id="remove-extension" hidden="[[data.mustRemainInstalled]]" label="Remove extension" on-click="onRemoveClick_">
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ItemMixin=dedupingMixin((superClass=>{class ItemMixin extends superClass{constructor(){super(...arguments);this.isReloading_=false}static get properties(){return{data:Object,delegate:Object}}appOrExtension(type,appLabel,extensionLabel){const ExtensionType=chrome.developerPrivate.ExtensionType;switch(type){case ExtensionType.HOSTED_APP:case ExtensionType.LEGACY_PACKAGED_APP:case ExtensionType.PLATFORM_APP:return appLabel;case ExtensionType.EXTENSION:case ExtensionType.SHARED_MODULE:return extensionLabel}assertNotReached("Item type is not App or Extension.")}a11yAssociation(name){return loadTimeData.getStringF("extensionA11yAssociation",name)}canReloadItem(){const showIcon=this.data.location===chrome.developerPrivate.Location.UNPACKED&&(this.data.state===chrome.developerPrivate.ExtensionState.ENABLED||this.data.disableReasons.reloading);return showIcon}async reloadItem(){if(this.isReloading_){return}this.isReloading_=true;const toastManager=getToastManager();toastManager.duration=0;toastManager.show(loadTimeData.getString("itemReloading"));try{await this.delegate.reloadItem(this.data.id);toastManager.hide();toastManager.duration=3e3;toastManager.show(loadTimeData.getString("itemReloaded"))}catch(loadError){toastManager.hide();throw loadError}finally{this.isReloading_=false}}}return ItemMixin}));
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Mv2ExperimentStage;(function(Mv2ExperimentStage){Mv2ExperimentStage[Mv2ExperimentStage["NONE"]=0]="NONE";Mv2ExperimentStage[Mv2ExperimentStage["WARNING"]=1]="WARNING";Mv2ExperimentStage[Mv2ExperimentStage["DISABLE_WITH_REENABLE"]=2]="DISABLE_WITH_REENABLE"})(Mv2ExperimentStage||(Mv2ExperimentStage={}));function getMv2ExperimentStage(stage){if(stage===0){return Mv2ExperimentStage.NONE}if(stage===1){return Mv2ExperimentStage.WARNING}if(stage===2){return Mv2ExperimentStage.DISABLE_WITH_REENABLE}assertNotReached()}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsDetailViewElementBase=I18nMixin(ItemMixin(PolymerElement));class ExtensionsDetailViewElement extends ExtensionsDetailViewElementBase{static get is(){return"extensions-detail-view"}static get template(){return getTemplate$n()}static get properties(){return{data:Object,size_:String,delegate:Object,inDevMode:Boolean,enableEnhancedSiteControls:Boolean,incognitoAvailable:Boolean,showActivityLog:Boolean,fromActivityLog:Boolean,sortedViews_:{type:Array,computed:"computeSortedViews_(data.views)"},showSafetyCheck_:{type:Boolean,computed:"computeShowSafetyCheck_(data.safetyCheckText)",observer:"onShowSafetyCheckChanged_"},showMv2DeprecationMessage_:{type:Boolean,computed:"computeShowMv2DeprecationMessage_("+"mv2ExperimentStage_, data.isAffectedByMV2Deprecation, "+"data.didAcknowledgeMV2DeprecationNotice, "+"data.disableReasons.unsupportedManifestVersion)"},showMv2DeprecationFindAlternativeButton_:{type:Boolean,computed:"computeShowMv2DeprecationFindAlternativeButton_("+"mv2ExperimentStage_, data.recommendationsUrl)"},showMv2DeprecationRemoveButton_:{type:Boolean,computed:"computeShowMv2DeprecationRemoveButton_(mv2ExperimentStage_)"},showMv2DeprecationActionMenu_:{type:Boolean,computed:"computeShowMv2DeprecationActionMenu_(mv2ExperimentStage_)"},showBlocklistText_:{type:Boolean,computed:"computeShowBlocklistText_(data.blocklistText)"},mv2ExperimentStage_:{type:Number,value:()=>getMv2ExperimentStage(loadTimeData.getInteger("MV2ExperimentStage"))},isLacrosEnabled_:{type:Boolean,readOnly:true,value:()=>loadTimeData.getBoolean("isLacrosEnabled")}}}static get observers(){return["onItemIdChanged_(data.id, delegate)"]}ready(){super.ready();this.addEventListener("view-enter-start",this.onViewEnterStart_)}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}focusOptionsButton(){this.$.extensionsOptions.focus()}onViewEnterStart_(){const elementToFocus=this.fromActivityLog?this.$.extensionsActivityLogLink:this.$.closeButton;afterNextRender(this,(()=>focusWithoutInk(elementToFocus)))}onItemIdChanged_(){this.size_="";this.delegate.getExtensionSize(this.data.id).then((size=>{this.size_=size}))}onActivityLogClick_(){navigation.navigateTo({page:Page.ACTIVITY_LOG,extensionId:this.data.id})}getDescription_(description,fallback){return description||fallback}getBackButtonAriaLabel_(){return loadTimeData.getStringF("itemDetailsBackButtonAriaLabel",this.data.name)}getBackButtonAriaRoleDescription_(){return loadTimeData.getStringF("itemDetailsBackButtonRoleDescription",this.data.name)}getEnableToggleAriaLabel_(){return getEnableToggleAriaLabel(this.isEnabled_(),this.data.type,this.i18n("appEnabled"),this.i18n("extensionEnabled"),this.i18n("itemOff"))}getEnableToggleTooltipText_(){return getEnableToggleTooltipText(this.data)}onCloseButtonClick_(){navigation.navigateTo({page:Page.LIST})}isEnabled_(){return isEnabled$1(this.data.state)}isEnableToggleEnabled_(){return userCanChangeEnablement(this.data)}hasDependentExtensions_(){return this.data.dependentExtensions.length>0}hasSevereWarnings_(){return this.data.disableReasons.corruptInstall||this.data.disableReasons.suspiciousInstall||this.data.disableReasons.updateRequired||!!this.data.blocklistText||this.data.disableReasons.publishedInStoreRequired||this.data.runtimeWarnings.length>0}computeDevReloadButtonHidden_(){return!this.canReloadItem()}computeEnabledStyle_(){return this.isEnabled_()?"enabled-text":""}computeEnabledText_(state,onText,offText){return isEnabled$1(state)?onText:offText}computeSortedViews_(){return sortViews(this.data.views)}computeInspectLabel_(view){return computeInspectableViewLabel(view)}shouldShowOptionsLink_(){return!!this.data.optionsPage}shouldShowOptionsSection_(){return this.canPinToToolbar_()||this.data.incognitoAccess.isEnabled||this.data.fileAccess.isEnabled||this.data.errorCollection.isEnabled}canPinToToolbar_(){return this.data.pinnedToToolbar!==undefined}shouldShowIncognitoOption_(){return this.data.incognitoAccess.isEnabled&&this.incognitoAvailable}onEnableToggleChange_(){this.delegate.setItemEnabled(this.data.id,this.$.enableToggle.checked);this.$.enableToggle.checked=this.isEnabled_()}onInspectClick_(e){this.delegate.inspectItemView(this.data.id,e.model.item)}onExtensionOptionsClick_(){this.delegate.showItemOptionsPage(this.data)}onReloadClick_(){this.reloadItem().catch((loadError=>this.fire_("load-error",loadError)))}onRemoveClick_(){if(this.showSafetyCheck_){chrome.metricsPrivate.recordUserAction("SafetyCheck.DetailRemoveClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME,convertSafetyCheckReason(this.data.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}this.delegate.deleteItem(this.data.id)}onKeepClick_(){if(this.showSafetyCheck_){chrome.metricsPrivate.recordUserAction("SafetyCheck.DetailKeepClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME,convertSafetyCheckReason(this.data.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}this.delegate.setItemSafetyCheckWarningAcknowledged(this.data.id,this.data.safetyCheckWarningReason)}onFindAlternativeButtonClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Warning.FindAlternativeForExtension.Entry");const recommendationsUrl=this.data.recommendationsUrl;assert(!!recommendationsUrl);this.delegate.openUrl(recommendationsUrl)}onRemoveButtonClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.DisableWithReEnable.Remove");this.delegate.deleteItem(this.data.id)}onRepairClick_(){this.delegate.repairItem(this.data.id)}onLoadPathClick_(){this.delegate.showInFolder(this.data.id)}onPinnedToToolbarChange_(){this.delegate.setItemPinnedToToolbar(this.data.id,this.shadowRoot.querySelector("#pin-to-toolbar").checked)}onAllowIncognitoChange_(){this.delegate.setItemAllowedIncognito(this.data.id,this.shadowRoot.querySelector("#allow-incognito").checked)}onAllowOnFileUrlsChange_(){this.delegate.setItemAllowedOnFileUrls(this.data.id,this.shadowRoot.querySelector("#allow-on-file-urls").checked)}onCollectErrorsChange_(){this.delegate.setItemCollectsErrors(this.data.id,this.shadowRoot.querySelector("#collect-errors").checked)}onExtensionWebSiteClick_(){this.delegate.openUrl(this.data.manifestHomePageUrl)}onSiteSettingsClick_(){this.delegate.openUrl(`chrome://settings/content/siteDetails?site=chrome-extension://${this.data.id}`)}onViewInStoreClick_(){this.delegate.openUrl(this.data.webStoreUrl)}computeDependentEntry_(item){return loadTimeData.getStringF("itemDependentEntry",item.name,item.id)}computeSourceString_(){return this.data.locationText||getItemSourceString(getItemSource(this.data))}hasPermissions_(){return this.data.permissions.simplePermissions.length>0||this.hasRuntimeHostPermissions_()}getNoPermissionsString_(){const showPermissionsAndSiteAccessStrings=this.enableEnhancedSiteControls&&!this.showSiteAccessContent_();return loadTimeData.getString(showPermissionsAndSiteAccessStrings?"itemPermissionsAndSiteAccessEmpty":"itemPermissionsEmpty")}hasRuntimeHostPermissions_(){return!!this.data.permissions.runtimeHostPermissions}showSiteAccessSection_(){return!this.enableEnhancedSiteControls||this.showSiteAccessContent_()}showSiteAccessContent_(){return this.showFreeformRuntimeHostPermissions_()||this.showHostPermissionsToggleList_()}showFreeformRuntimeHostPermissions_(){return this.hasRuntimeHostPermissions_()&&this.data.permissions.runtimeHostPermissions.hasAllHosts}showHostPermissionsToggleList_(){return this.hasRuntimeHostPermissions_()&&!this.data.permissions.runtimeHostPermissions.hasAllHosts}showEnableAccessRequestsToggle_(){return this.showSiteAccessContent_()&&this.enableEnhancedSiteControls}onShowAccessRequestsChange_(){const showAccessRequestsToggle=this.shadowRoot.querySelector("#show-access-requests-toggle");assert(showAccessRequestsToggle);this.delegate.setShowAccessRequestsInToolbar(this.data.id,showAccessRequestsToggle.checked)}showReloadButton_(){return getEnableControl(this.data)===EnableControl.RELOAD}computeShowSafetyCheck_(){if(!loadTimeData.getBoolean("safetyCheckShowReviewPanel")){return false}const ExtensionType=chrome.developerPrivate.ExtensionType;if(!(this.data.type===ExtensionType.EXTENSION||this.data.type===ExtensionType.SHARED_MODULE)){return false}return!!(this.data.safetyCheckText&&this.data.safetyCheckText.detailString)}computeShowMv2DeprecationMessage_(){switch(this.mv2ExperimentStage_){case Mv2ExperimentStage.NONE:return false;case Mv2ExperimentStage.WARNING:return this.data.isAffectedByMV2Deprecation;case Mv2ExperimentStage.DISABLE_WITH_REENABLE:return this.data.isAffectedByMV2Deprecation&&this.data.disableReasons.unsupportedManifestVersion&&!this.data.didAcknowledgeMV2DeprecationNotice;default:return false}}computeShowMv2DeprecationFindAlternativeButton_(){return this.mv2ExperimentStage_===Mv2ExperimentStage.WARNING&&!!this.data.recommendationsUrl}computeShowMv2DeprecationRemoveButton_(){return this.mv2ExperimentStage_===Mv2ExperimentStage.DISABLE_WITH_REENABLE}computeShowMv2DeprecationActionMenu_(){return this.mv2ExperimentStage_===Mv2ExperimentStage.DISABLE_WITH_REENABLE}onShowSafetyCheckChanged_(){if(this.showSafetyCheck_){chrome.metricsPrivate.recordUserAction("SafetyCheck.DetailWarningShown")}}computeShowBlocklistText_(){return!this.showSafetyCheck_&&!!this.data.blocklistText}showRepairButton_(){return getEnableControl(this.data)===EnableControl.REPAIR}showEnableToggle_(){const enableControl=getEnableControl(this.data);return enableControl===EnableControl.ENABLE_TOGGLE||enableControl===EnableControl.REPAIR}showAllowlistWarning_(){return this.data.showSafeBrowsingAllowlistWarning&&!this.data.blocklistText}onActionMenuButtonClick_(event){this.$.actionMenu.showAt(event.target,{anchorAlignmentY:AnchorAlignment.AFTER_END})}onFindAlternativeActionClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Disabled.FindAlternativeForExtension");this.$.actionMenu.close();const recommendationsUrl=this.data.recommendationsUrl;assert(!!recommendationsUrl);this.delegate.openUrl(recommendationsUrl)}onKeepActionClick_(){assert(this.mv2ExperimentStage_===Mv2ExperimentStage.DISABLE_WITH_REENABLE);chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Disabled.DismissedForExtension.DetailPage");this.$.actionMenu.close();this.delegate.dismissMv2DeprecationNoticeForExtension(this.data.id)}getMv2DeprecationMessageHeader_(){switch(this.mv2ExperimentStage_){case Mv2ExperimentStage.NONE:return"";case Mv2ExperimentStage.WARNING:return this.i18n("mv2DeprecationMessageWarningHeader");case Mv2ExperimentStage.DISABLE_WITH_REENABLE:return this.i18n("mv2DeprecationMessageDisabledHeader");default:assertNotReached()}}getMv2DeprecationMessageSubtitle_(){switch(this.mv2ExperimentStage_){case Mv2ExperimentStage.NONE:return"";case Mv2ExperimentStage.WARNING:return this.i18nAdvanced("mv2DeprecationMessageWarningSubtitle",{substitutions:["https://chromewebstore.google.com/category/extensions"]});case Mv2ExperimentStage.DISABLE_WITH_REENABLE:return this.i18nAdvanced("mv2DeprecationMessageDisabledSubtitle",{substitutions:["https://support.google.com/chrome_webstore"+"?p=unsupported_extensions"]});default:assertNotReached()}}getMv2DeprecationMessageIcon_(){switch(this.mv2ExperimentStage_){case Mv2ExperimentStage.NONE:case Mv2ExperimentStage.WARNING:return"extensions-icons:my_extensions";case Mv2ExperimentStage.DISABLE_WITH_REENABLE:return"extensions-icons:extension_off";default:assertNotReached()}}getActionMenuButtonLabel_(){return this.i18n("mv2DeprecationPanelExtensionActionMenuLabel",this.data.name)}}customElements.define(ExtensionsDetailViewElement.is,ExtensionsDetailViewElement);
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DragWrapper{dragEnters_=0;target_;delegate_;constructor(target,delegate){this.target_=target;this.delegate_=delegate;target.addEventListener("dragenter",(e=>this.onDragEnter_(e)));target.addEventListener("dragover",(e=>this.onDragOver_(e)));target.addEventListener("drop",(e=>this.onDrop_(e)));target.addEventListener("dragleave",(e=>this.onDragLeave_(e)))}get isCurrentDragTarget(){return this.target_.classList.contains("drag-target")}onDragEnter_(e){if(++this.dragEnters_===1){if(this.delegate_.shouldAcceptDrag(e)){this.target_.classList.add("drag-target");this.delegate_.doDragEnter(e)}}else{this.onDragOver_(e)}}onDragOver_(e){if(!this.target_.classList.contains("drag-target")){return}this.delegate_.doDragOver(e)}onDrop_(e){this.dragEnters_=0;if(!this.target_.classList.contains("drag-target")){return}this.target_.classList.remove("drag-target");this.delegate_.doDrop(e)}onDragLeave_(e){if(--this.dragEnters_>0){return}this.target_.classList.remove("drag-target");this.delegate_.doDragLeave(e)}}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Service{constructor(){this.isDeleting_=false;this.eventsToIgnoreOnce_=new Set}getProfileConfiguration(){return chrome.developerPrivate.getProfileConfiguration()}getItemStateChangedTarget(){return chrome.developerPrivate.onItemStateChanged}shouldIgnoreUpdate(extensionId,eventType){return this.eventsToIgnoreOnce_.delete(`${extensionId}_${eventType}`)}ignoreNextEvent(extensionId,eventType){this.eventsToIgnoreOnce_.add(`${extensionId}_${eventType}`)}getProfileStateChangedTarget(){return chrome.developerPrivate.onProfileStateChanged}getExtensionsInfo(){return chrome.developerPrivate.getExtensionsInfo({includeDisabled:true,includeTerminated:true})}getExtensionSize(id){return chrome.developerPrivate.getExtensionSize(id)}addRuntimeHostPermission(id,host){return chrome.developerPrivate.addHostPermission(id,host)}removeRuntimeHostPermission(id,host){return chrome.developerPrivate.removeHostPermission(id,host)}recordUserAction(metricName){chrome.metricsPrivate.recordUserAction(metricName)}chooseFilePath_(selectType,fileType){return chrome.developerPrivate.choosePath(selectType,fileType).catch((error=>{if(error.message!=="File selection was canceled."){throw error}return""}))}updateExtensionCommandKeybinding(extensionId,commandName,keybinding){chrome.developerPrivate.updateExtensionCommand({extensionId:extensionId,commandName:commandName,keybinding:keybinding})}updateExtensionCommandScope(extensionId,commandName,scope){this.ignoreNextEvent(extensionId,chrome.developerPrivate.EventType.COMMAND_REMOVED);chrome.developerPrivate.updateExtensionCommand({extensionId:extensionId,commandName:commandName,scope:scope})}setShortcutHandlingSuspended(isCapturing){chrome.developerPrivate.setShortcutHandlingSuspended(isCapturing)}loadUnpackedHelper_(extraOptions){const options=Object.assign({failQuietly:true,populateError:true},extraOptions);return chrome.developerPrivate.loadUnpacked(options).then((loadError=>{if(loadError){throw loadError}return true})).catch((error=>{if(error.message!=="File selection was canceled."){throw error}return false}))}deleteItem(id){if(this.isDeleting_){return}chrome.metricsPrivate.recordUserAction("Extensions.RemoveExtensionClick");this.isDeleting_=true;chrome.management.uninstall(id,{showConfirmDialog:true}).catch((_=>{})).finally((()=>{this.isDeleting_=false}))}uninstallItem(id){chrome.metricsPrivate.recordUserAction("Extensions.RemoveExtensionClick");return chrome.management.uninstall(id,{showConfirmDialog:true})}deleteItems(ids){this.isDeleting_=true;return chrome.developerPrivate.removeMultipleExtensions(ids).finally((()=>{this.isDeleting_=false}))}setItemSafetyCheckWarningAcknowledged(id,reason){return chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,acknowledgeSafetyCheckWarningReason:reason})}setItemEnabled(id,isEnabled){chrome.metricsPrivate.recordUserAction(isEnabled?"Extensions.ExtensionEnabled":"Extensions.ExtensionDisabled");chrome.management.setEnabled(id,isEnabled)}setItemAllowedIncognito(id,isAllowedIncognito){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,incognitoAccess:isAllowedIncognito})}setItemAllowedOnFileUrls(id,isAllowedOnFileUrls){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,fileAccess:isAllowedOnFileUrls})}setItemHostAccess(id,hostAccess){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,hostAccess:hostAccess})}setItemCollectsErrors(id,collectsErrors){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,errorCollection:collectsErrors})}setItemPinnedToToolbar(id,pinnedToToolbar){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,pinnedToToolbar:pinnedToToolbar})}inspectItemView(id,view){chrome.developerPrivate.openDevTools({extensionId:id,renderProcessId:view.renderProcessId,renderViewId:view.renderViewId,incognito:view.incognito,isServiceWorker:view.type==="EXTENSION_SERVICE_WORKER_BACKGROUND"})}openUrl(url){window.open(url)}reloadItem(id){return chrome.developerPrivate.reload(id,{failQuietly:true,populateErrorForUnpacked:true}).then((loadError=>{if(loadError){throw loadError}}))}repairItem(id){chrome.developerPrivate.repairExtension(id)}showItemOptionsPage(extension){assert(extension&&extension.optionsPage);if(extension.optionsPage.openInTab){chrome.developerPrivate.showOptions(extension.id)}else{navigation.navigateTo({page:Page.DETAILS,subpage:Dialog.OPTIONS,extensionId:extension.id})}}setProfileInDevMode(inDevMode){chrome.developerPrivate.updateProfileConfiguration({inDeveloperMode:inDevMode})}loadUnpacked(){return this.loadUnpackedHelper_()}retryLoadUnpacked(retryGuid){return this.loadUnpackedHelper_({retryGuid:retryGuid})}choosePackRootDirectory(){return this.chooseFilePath_(chrome.developerPrivate.SelectType.FOLDER,chrome.developerPrivate.FileType.LOAD)}choosePrivateKeyPath(){return this.chooseFilePath_(chrome.developerPrivate.SelectType.FILE,chrome.developerPrivate.FileType.PEM)}packExtension(rootPath,keyPath,flag){return chrome.developerPrivate.packDirectory(rootPath,keyPath,flag)}updateAllExtensions(extensions){return chrome.developerPrivate.autoUpdate().then((()=>{chrome.metricsPrivate.recordUserAction("Options_UpdateExtensions");return new Promise(((resolve,reject)=>{const loadLocalExtensions=async()=>{for(const extension of extensions){if(extension.location==="UNPACKED"){try{await this.reloadItem(extension.id)}catch(loadError){reject(loadError);break}}}resolve()};loadLocalExtensions()}))}))}deleteErrors(extensionId,errorIds,type){chrome.developerPrivate.deleteExtensionErrors({extensionId:extensionId,errorIds:errorIds,type:type})}requestFileSource(args){return chrome.developerPrivate.requestFileSource(args)}showInFolder(id){chrome.developerPrivate.showPath(id)}getExtensionActivityLog(extensionId){return chrome.activityLogPrivate.getExtensionActivities({activityType:chrome.activityLogPrivate.ExtensionActivityFilter.ANY,extensionId:extensionId})}getFilteredExtensionActivityLog(extensionId,searchTerm){const anyType=chrome.activityLogPrivate.ExtensionActivityFilter.ANY;const activityLogFilters=[{activityType:anyType,extensionId:extensionId,apiCall:`%${searchTerm}%`},{activityType:anyType,extensionId:extensionId,pageUrl:`%${searchTerm}%`},{activityType:anyType,extensionId:extensionId,argUrl:`%${searchTerm}%`}];const promises=activityLogFilters.map((filter=>chrome.activityLogPrivate.getExtensionActivities(filter)));return Promise.all(promises).then((results=>{const activitiesById=new Map;for(const result of results){for(const activity of result.activities){activitiesById.set(activity.activityId,activity)}}return{activities:Array.from(activitiesById.values())}}))}deleteActivitiesById(activityIds){return chrome.activityLogPrivate.deleteActivities(activityIds)}deleteActivitiesFromExtension(extensionId){return chrome.activityLogPrivate.deleteActivitiesByExtension(extensionId)}getOnExtensionActivity(){return chrome.activityLogPrivate.onExtensionActivity}downloadActivities(rawActivityData,fileName){const blob=new Blob([rawActivityData],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=fileName;a.click()}loadUnpackedFromDrag(){return this.loadUnpackedHelper_({useDraggedPath:true})}installDroppedFile(){chrome.developerPrivate.installDroppedFile()}notifyDragInstallInProgress(){chrome.developerPrivate.notifyDragInstallInProgress()}getUserSiteSettings(){return chrome.developerPrivate.getUserSiteSettings()}addUserSpecifiedSites(siteSet,hosts){return chrome.developerPrivate.addUserSpecifiedSites({siteSet:siteSet,hosts:hosts})}removeUserSpecifiedSites(siteSet,hosts){return chrome.developerPrivate.removeUserSpecifiedSites({siteSet:siteSet,hosts:hosts})}getUserAndExtensionSitesByEtld(){return chrome.developerPrivate.getUserAndExtensionSitesByEtld()}getMatchingExtensionsForSite(site){return chrome.developerPrivate.getMatchingExtensionsForSite(site)}getUserSiteSettingsChangedTarget(){return chrome.developerPrivate.onUserSiteSettingsChanged}setShowAccessRequestsInToolbar(id,showRequests){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,showAccessRequestsInToolbar:showRequests})}updateSiteAccess(site,updates){return chrome.developerPrivate.updateSiteAccess(site,updates)}dismissSafetyHubExtensionsMenuNotification(){chrome.developerPrivate.dismissSafetyHubExtensionsMenuNotification()}dismissMv2DeprecationNotice(){chrome.developerPrivate.updateProfileConfiguration({isMv2DeprecationNoticeDismissed:true})}dismissMv2DeprecationNoticeForExtension(id){return chrome.developerPrivate.dismissMv2DeprecationNoticeForExtension(id)}static getInstance(){return instance$4||(instance$4=new Service)}static setInstance(obj){instance$4=obj}}let instance$4=null;
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DragAndDropHandler{constructor(dragEnabled,target){this.dragEnabled=dragEnabled;this.eventTarget_=target}shouldAcceptDrag(e){if(!this.dragEnabled){return false}return!!e.dataTransfer.types&&e.dataTransfer.types.indexOf("Files")>-1}doDragEnter(){Service.getInstance().notifyDragInstallInProgress();this.eventTarget_.dispatchEvent(new CustomEvent("extension-drag-started"))}doDragLeave(){this.fireDragEnded_()}doDragOver(e){e.preventDefault()}doDrop(e){this.fireDragEnded_();if(e.dataTransfer.files.length!==1){return}let handled=false;const item=e.dataTransfer.items[0];if(item.kind==="file"&&item.webkitGetAsEntry().isDirectory){handled=true;this.handleDirectoryDrop_()}else if(/\.(crx|user\.js|zip)$/i.test(e.dataTransfer.files[0].name)){handled=true;this.handleFileDrop_()}if(handled){e.preventDefault()}}handleFileDrop_(){Service.getInstance().installDroppedFile()}handleDirectoryDrop_(){Service.getInstance().loadUnpackedFromDrag().catch((loadError=>{this.eventTarget_.dispatchEvent(new CustomEvent("drag-and-drop-load-error",{detail:loadError}))}))}fireDragEnded_(){this.eventTarget_.dispatchEvent(new CustomEvent("extension-drag-ended"))}}function getTemplate$m(){return html$1`<!--_html_template_start_--><style include="cr-hidden-style">:host{align-items:center;background-color:rgba(241,241,241,.9);color:var(--cr-secondary-text-color);display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:10}@media (prefers-color-scheme:dark){:host{background-color:rgba(0,0,0,.6)}}#container{align-items:center;display:flex;flex-direction:column}cr-icon{height:64px;margin-bottom:16px;width:64px}#text{color:#6e6e6e;font-size:123.1%;font-weight:500}</style>
<div id="container">
  <cr-icon icon="cr:extension"></cr-icon>
  <div id="text">Drop to install</div>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsDropOverlayElement extends PolymerElement{static get is(){return"extensions-drop-overlay"}static get template(){return getTemplate$m()}static get properties(){return{dragEnabled:{type:Boolean,observer:"dragEnabledChanged_"}}}constructor(){super();this.hidden=true;const dragTarget=document.documentElement;this.dragWrapperHandler_=new DragAndDropHandler(true,dragTarget);dragTarget.addEventListener("extension-drag-started",(()=>{this.hidden=false}));dragTarget.addEventListener("extension-drag-ended",(()=>{this.hidden=true}));dragTarget.addEventListener("drag-and-drop-load-error",(e=>{this.dispatchEvent(new CustomEvent("load-error",{bubbles:true,composed:true,detail:e.detail}))}));this.dragWrapper_=new DragWrapper(dragTarget,this.dragWrapperHandler_)}dragEnabledChanged_(dragEnabled){this.dragWrapperHandler_.dragEnabled=dragEnabled}}customElements.define(ExtensionsDropOverlayElement.is,ExtensionsDropOverlayElement);let instance$3=null;function getCss$2(){return instance$3||(instance$3=[...[],css`:host{--collapse-duration:var(--iron-collapse-transition-duration, 300ms);display:block;transition:max-height var(--collapse-duration) ease-out;overflow:visible}:host([no-animation]){transition:none}:host(.collapse-closed){display:none}:host(:not(.collapse-opened)){overflow:hidden}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3(){return html`<slot></slot>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrCollapseElement extends CrLitElement{constructor(){super(...arguments);this.opened=false;this.noAnimation=false}static get is(){return"cr-collapse"}static get styles(){return getCss$2()}render(){return getHtml$3.bind(this)()}static get properties(){return{opened:{type:Boolean,notify:true},noAnimation:{type:Boolean,reflect:true}}}toggle(){this.opened=!this.opened}show(){this.opened=true}hide(){this.opened=false}firstUpdated(){if(!this.hasAttribute("role")){this.setAttribute("role","group")}this.setAttribute("aria-hidden","true");this.addEventListener("transitionend",(e=>this.onTransitionEnd_(e)))}updated(changedProperties){super.updated(changedProperties);if(!changedProperties.has("opened")){return}this.setAttribute("aria-hidden",this.opened?"false":"true");this.classList.toggle("collapse-closed",false);this.classList.toggle("collapse-opened",false);this.updateHeight_(this.opened,changedProperties.get("opened"));if(this.opened){this.focus()}}updateHeight_(opening,lastOpened){const finalMaxHeight=opening?"":"0px";const animationStartSize=`${this.getBoundingClientRect().height}px`;const animationEndSize=opening?`${this.scrollHeight}px`:"0px";const willAnimate=lastOpened!==undefined&&!this.noAnimation&&this.style.maxHeight!==finalMaxHeight&&animationStartSize!==animationEndSize;if(willAnimate&&!opening){this.style.maxHeight=animationStartSize;this.scrollTop=this.scrollTop}this.style.maxHeight=animationEndSize;if(!willAnimate){this.updateStyles_()}}onTransitionEnd_(e){if(e.composedPath()[0]===this){this.updateStyles_()}}updateStyles_(){this.style.maxHeight=this.opened?"":"0px";this.classList.toggle("collapse-closed",!this.opened);this.classList.toggle("collapse-opened",this.opened)}}customElements.define(CrCollapseElement.is,CrCollapseElement);function getTemplate$l(){return html$1`<!--_html_template_start_--><style include="cr-hidden-style">:host{--paper-grey-500:#9e9e9e;--paper-grey-800:#424242;--container-bg:white;--line-bg:var(--paper-grey-300);--main-color:var(--paper-grey-800);display:block}@media (prefers-color-scheme:dark){:host{--container-bg:rgba(0, 0, 0, .4);--line-bg:var(--google-grey-800);--main-color:var(--cr-primary-text-color)}}#scroll-container{background:var(--container-bg);height:100%;overflow:auto;position:relative}@media (prefers-color-scheme:light){#scroll-container{border:1px solid var(--paper-grey-500)}}#main{color:var(--main-color);display:flex;font-family:monospace;min-height:100%}#line-numbers{background:var(--line-bg);display:flex;flex-direction:column;padding:0 8px;text-align:end}@media (prefers-color-scheme:light){#line-numbers{border-inline-end:1px solid var(--paper-grey-500)}}#source{display:flex;flex-direction:column;margin-inline-start:4px}#line-numbers span,#source span{white-space:pre}#no-code{text-align:center}@media (prefers-color-scheme:light){#no-code{color:var(--paper-grey-800)}.more-code{color:var(--paper-grey-500)}}#highlight-description{height:0;overflow:hidden}@media (prefers-color-scheme:dark){mark{background-color:var(--google-yellow-300);color:var(--google-grey-900)}}</style>
<div id="scroll-container" hidden="[[!highlighted_]]" dir="ltr">
  <div id="main">
    
    <div id="line-numbers" aria-hidden="true">
      <div class="more-code before" hidden="[[!truncatedBefore_]]">
        ...
      </div>
      <span>[[lineNumbers_]]</span>
      <div class="more-code after" hidden="[[!truncatedAfter_]]">
        ...
      </div>
    </div>
    <div id="source">
      <div class="more-code before" hidden="[[!truncatedBefore_]]">
        [[getLinesNotShownLabel_(
            truncatedBefore_,
            '<1 line not shown>',
            '<$1 lines not shown>')]]
      </div>
      <span><span>[[before_]]</span><mark aria-description="[[highlightDescription_]]">[[highlighted_]]</mark><span>[[after_]]</span></span>
      <div class="more-code after" hidden="[[!truncatedAfter_]]">
        [[getLinesNotShownLabel_(
            truncatedAfter_,
            '<1 line not shown>',
            '<$1 lines not shown>')]]
      </div>
    </div>
  </div>
</div>
<div id="no-code" hidden="[[!showNoCode_]]">[[couldNotDisplayCode]]</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function visibleLineCount(totalCount,oppositeCount){const MAX_VISIBLE_LINES=1e3;const max=Math.max(MAX_VISIBLE_LINES/2,MAX_VISIBLE_LINES-oppositeCount);return Math.min(max,totalCount)}const ExtensionsCodeSectionElementBase=I18nMixin(PolymerElement);class ExtensionsCodeSectionElement extends ExtensionsCodeSectionElementBase{static get is(){return"extensions-code-section"}static get template(){return getTemplate$l()}static get properties(){return{code:{type:Object,value:null},isActive:Boolean,highlighted_:String,before_:String,after_:String,showNoCode_:{type:Boolean,computed:"computeShowNoCode_(isActive, highlighted_)"},highlightDescription_:String,lineNumbers_:String,truncatedBefore_:Number,truncatedAfter_:Number,couldNotDisplayCode:String}}static get observers(){return["onCodeChanged_(code.*)"]}onCodeChanged_(){if(!this.code||!this.code.beforeHighlight&&!this.code.highlight&&!this.code.afterHighlight){this.highlighted_="";this.highlightDescription_="";this.before_="";this.after_="";this.lineNumbers_="";return}const before=this.code.beforeHighlight;const highlight=this.code.highlight;const after=this.code.afterHighlight;const linesBefore=before?before.split("\n"):[];const linesAfter=after?after.split("\n"):[];const visibleLineCountBefore=visibleLineCount(linesBefore.length,linesAfter.length);const visibleLineCountAfter=visibleLineCount(linesAfter.length,linesBefore.length);const visibleBefore=linesBefore.slice(linesBefore.length-visibleLineCountBefore).join("\n");let visibleAfter=linesAfter.slice(0,visibleLineCountAfter).join("\n");if(visibleAfter.charAt(visibleAfter.length-1)==="\n"){visibleAfter+=" "}this.highlighted_=highlight;this.highlightDescription_=this.getAccessibilityHighlightDescription_(linesBefore.length,highlight.split("\n").length);this.before_=visibleBefore;this.after_=visibleAfter;this.truncatedBefore_=linesBefore.length-visibleLineCountBefore;this.truncatedAfter_=linesAfter.length-visibleLineCountAfter;const visibleCode=visibleBefore+highlight+visibleAfter;this.setLineNumbers_(this.truncatedBefore_+1,this.truncatedBefore_+visibleCode.split("\n").length);this.scrollToHighlight_(visibleLineCountBefore)}getLinesNotShownLabel_(lineCount,stringSingular,stringPluralTemplate){return lineCount===1?stringSingular:loadTimeData.substituteString(stringPluralTemplate,lineCount)}setLineNumbers_(start,end){let lineNumbers="";for(let i=start;i<=end;++i){lineNumbers+=i+"\n"}this.lineNumbers_=lineNumbers}scrollToHighlight_(linesBeforeHighlight){const CSS_LINE_HEIGHT=20;const highlightTop=linesBeforeHighlight*CSS_LINE_HEIGHT;const targetTop=highlightTop-this.clientHeight*.5;this.$["scroll-container"].scrollTo({top:targetTop})}getAccessibilityHighlightDescription_(lineStart,numLines){if(numLines>1){return this.i18n("accessibilityErrorMultiLine",lineStart.toString(),(lineStart+numLines-1).toString())}else{return this.i18n("accessibilityErrorLine",lineStart.toString())}}computeShowNoCode_(){return this.isActive&&!this.highlighted_}}customElements.define(ExtensionsCodeSectionElement.is,ExtensionsCodeSectionElement);function getTemplate$k(){return html$1`<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{display:block;height:100%}cr-icon{--iron-icon-fill-color:var(--google-grey-700);flex-shrink:0;height:var(--cr-icon-size);width:var(--cr-icon-size)}cr-icon[icon='cr:warning']{--iron-icon-fill-color:#ff9800}cr-icon[icon='cr:error']{--iron-icon-fill-color:var(--error-color)}.section{padding:0 var(--cr-section-padding)}#heading{align-items:center;display:flex;height:40px;margin-bottom:30px;padding:8px 12px 0}#heading span{flex:1;margin:0 10px}#dev-reload-button{margin-inline-end:12px}#errorsList{min-height:100px}.error-item{padding-inline-start:0}.error-item cr-icon-button{margin:0}.error-item.selected{background-color:rgba(0,0,0,.08)}.error-item .start{align-items:center;align-self:stretch;display:flex;flex:1;padding:0 var(--cr-section-padding)}.error-message{flex-grow:1;margin-inline-start:10px;word-break:break-word}.devtools-controls{padding:0 var(--cr-section-padding)}.details-heading{align-items:center;display:flex;height:var(--cr-section-min-height)}.stack-trace-container{list-style:none;margin-top:0;padding:0}.stack-trace-container li{cursor:pointer;font-family:monospace;padding:4px}.stack-trace-container li.selected,.stack-trace-container li:hover{background:var(--google-blue-100);color:var(--google-grey-900)}extensions-code-section{height:200px;margin-bottom:20px}:host-context(.focus-outline-visible) .start:focus{outline:-webkit-focus-ring-color auto 5px}.start:focus{outline:0}.context-url{word-wrap:break-word}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div id="heading" class="cr-title-text">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" aria-label="Back" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <span role="heading" aria-level="2">Errors</span>
      <template is="dom-if" if="[[showReloadButton_(data.*)]]">
        <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap" title="Reload" aria-label="Reload" aria-describedby="a11yAssociation" on-click="onReloadClick_">
        </cr-icon-button>
      </template>
      <cr-button on-click="onClearAllClick_" hidden="[[!entries_.length]]">
        Clear all
      </cr-button>
    </div>
    <div class="section">
      <div id="errorsList">
        <template is="dom-repeat" items="[[entries_]]">
          <div class="item-container">
            <div class$="cr-row error-item
                [[computeErrorClass_(item, selectedEntry_)]]">
              <div actionable class="start" on-click="onErrorItemAction_" on-keydown="onErrorItemAction_" tabindex="0" role="button" aria-expanded$="[[isAriaExpanded_(
                      index, selectedEntry_)]]">
                <cr-icon icon$="cr:[[computeErrorIcon_(item)]]" title$="[[computeErrorTypeLabel_(item)]]">
                </cr-icon>
                <div id$="[[item.id]]" class="error-message">
                  [[item.message]]
                </div>
                <div class$="cr-icon [[iconName_(index, selectedEntry_)]]">
                </div>
              </div>
              <div class="separator"></div>
              <cr-icon-button class="icon-delete-gray" on-click="onDeleteErrorAction_" aria-describedby$="[[item.id]]" aria-label="Clear entry"></cr-icon-button>
            </div>
            <cr-collapse opened="[[isOpened_(index, selectedEntry_)]]">
              <div class="devtools-controls">
                <template is="dom-if" if="[[computeIsRuntimeError_(item)]]">
                  <div class="details-heading cr-title-text" role="heading" aria-level="3">
                    Context
                  </div>
                  <span class="context-url">
                    [[getContextUrl_(
                        item, 'Unknown')]]
                  </span>
                  <div class="details-heading cr-title-text" role="heading" aria-level="3">
                    Stack Trace
                  </div>
                  <ul class="stack-trace-container" on-keydown="onStackKeydown_">
                    <template is="dom-repeat" items="[[item.stackTrace]]">
                      <li on-click="onStackFrameClick_" tabindex$="[[getStackFrameTabIndex_(item,
                              selectedStackFrame_)]]" hidden="[[!shouldDisplayFrame_(item.url)]]" class$="[[getStackFrameClass_(item,
                              selectedStackFrame_)]]">
                        [[getStackTraceLabel_(item)]]
                      </li>
                    </template>
                  </ul>
                </template>
                <extensions-code-section code="[[code_]]" is-active="[[isOpened_(index, selectedEntry_)]]" could-not-display-code="Nothing to see here, move along.">
                </extensions-code-section>
              </div>
            </cr-collapse>
          </div>
        </template>
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getRelativeUrl(url,error){const fullUrl="chrome-extension://"+error.extensionId+"/";return url.startsWith(fullUrl)?url.substring(fullUrl.length):url}function getErrorSeverityText(item,log,warn,error){if(item.type===chrome.developerPrivate.ErrorType.RUNTIME){switch(item.severity){case chrome.developerPrivate.ErrorLevel.LOG:return log;case chrome.developerPrivate.ErrorLevel.WARN:return warn;case chrome.developerPrivate.ErrorLevel.ERROR:return error;default:assertNotReached()}}assert(item.type===chrome.developerPrivate.ErrorType.MANIFEST);return warn}const ExtensionsErrorPageElementBase=ItemMixin(PolymerElement);class ExtensionsErrorPageElement extends ExtensionsErrorPageElementBase{static get is(){return"extensions-error-page"}static get template(){return getTemplate$k()}static get properties(){return{data:Object,delegate:Object,inDevMode:{type:Boolean,value:false,observer:"onInDevModeChanged_"},entries_:Array,code_:Object,selectedEntry_:{type:Number,observer:"onSelectedErrorChanged_"},selectedStackFrame_:{type:Object,value(){return null}}}}static get observers(){return["observeDataChanges_(data.*)"]}ready(){super.ready();this.addEventListener("view-enter-start",this.onViewEnterStart_);FocusOutlineManager.forDocument(document)}getSelectedError(){return this.entries_[this.selectedEntry_]}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}onViewEnterStart_(){afterNextRender(this,(()=>focusWithoutInk(this.$.closeButton)));chrome.metricsPrivate.recordUserAction("Options_ViewExtensionErrors")}getContextUrl_(error,unknown){return error.contextUrl?getRelativeUrl(error.contextUrl,error):unknown}observeDataChanges_(){this.entries_=[...this.data.manifestErrors,...this.data.runtimeErrors];this.selectedEntry_=-1;if(this.entries_.length){this.selectedEntry_=0}}onCloseButtonClick_(){navigation.navigateTo({page:Page.LIST})}onClearAllClick_(){const ids=this.entries_.map((entry=>entry.id));this.delegate.deleteErrors(this.data.id,ids)}computeErrorIcon_(error){return getErrorSeverityText(error,"info","warning","error")}computeErrorTypeLabel_(error){return getErrorSeverityText(error,loadTimeData.getString("logLevel"),loadTimeData.getString("warnLevel"),loadTimeData.getString("errorLevel"))}onDeleteErrorAction_(e){this.delegate.deleteErrors(this.data.id,[e.model.item.id]);e.stopPropagation()}onInDevModeChanged_(){if(!this.inDevMode){setTimeout((()=>{this.onCloseButtonClick_()}),0)}}onSelectedErrorChanged_(){this.code_=null;if(this.selectedEntry_<0){return}const error=this.getSelectedError();const args={extensionId:error.extensionId,message:error.message,pathSuffix:""};switch(error.type){case chrome.developerPrivate.ErrorType.MANIFEST:const manifestError=error;args.pathSuffix=manifestError.source;args.manifestKey=manifestError.manifestKey;args.manifestSpecific=manifestError.manifestSpecific;break;case chrome.developerPrivate.ErrorType.RUNTIME:const runtimeError=error;try{args.pathSuffix=new URL(runtimeError.source).pathname.slice(1)}catch(e){return}args.lineNumber=runtimeError.stackTrace&&runtimeError.stackTrace[0]?runtimeError.stackTrace[0].lineNumber:0;this.selectedStackFrame_=runtimeError.stackTrace&&runtimeError.stackTrace[0]?runtimeError.stackTrace[0]:null;break}this.delegate.requestFileSource(args).then((code=>this.code_=code))}computeIsRuntimeError_(item){return item.type===chrome.developerPrivate.ErrorType.RUNTIME}getStackTraceLabel_(frame){let description=getRelativeUrl(frame.url,this.getSelectedError())+":"+frame.lineNumber;if(frame.functionName){const functionName=frame.functionName==="(anonymous function)"?loadTimeData.getString("anonymousFunction"):frame.functionName;description+=" ("+functionName+")"}return description}getStackFrameClass_(frame){return frame===this.selectedStackFrame_?"selected":""}getStackFrameTabIndex_(frame){return frame===this.selectedStackFrame_?0:-1}shouldDisplayFrame_(url){return!/^extensions::/.test(url)}updateSelected_(frame){this.selectedStackFrame_=frame;const selectedError=this.getSelectedError();this.delegate.requestFileSource({extensionId:selectedError.extensionId,message:selectedError.message,pathSuffix:getRelativeUrl(frame.url,selectedError),lineNumber:frame.lineNumber}).then((code=>this.code_=code))}onStackFrameClick_(e){const frame=e.model.item;this.updateSelected_(frame)}onStackKeydown_(e){let direction=0;if(e.key==="ArrowDown"){direction=1}else if(e.key==="ArrowUp"){direction=-1}else{return}e.preventDefault();const list=e.target.parentElement.querySelectorAll("li");for(let i=0;i<list.length;++i){if(list[i].classList.contains("selected")){const repeaterEvent=e;const frame=repeaterEvent.model.item.stackTrace[i+direction];if(frame){this.updateSelected_(frame);list[i+direction].focus()}return}}}computeErrorClass_(index){return index===this.selectedEntry_?"selected":""}iconName_(index){return index===this.selectedEntry_?"icon-expand-less":"icon-expand-more"}isOpened_(index){return index===this.selectedEntry_}isAriaExpanded_(index){return this.isOpened_(index).toString()}onErrorItemAction_(e){if(e.type==="keydown"&&!(e.code==="Space"||e.code==="Enter")){return}e.preventDefault();const repeaterEvent=e;this.selectedEntry_=this.selectedEntry_===repeaterEvent.model.index?-1:repeaterEvent.model.index}showReloadButton_(){return this.canReloadItem()}onReloadClick_(){this.reloadItem().catch((loadError=>this.fire_("load-error",loadError)))}}customElements.define(ExtensionsErrorPageElement.is,ExtensionsErrorPageElement);function getTemplate$j(){return html$1`<!--_html_template_start_--><style include="cr-shared-style">div[slot=body] ul{background-color:#ffebee;margin:0;padding-bottom:10px;padding-inline-end:10px;padding-top:10px}@media (prefers-color-scheme:dark){div[slot=body] ul{background-color:rgba(0,0,0,.3);color:var(--error-color)}}</style>
<cr-dialog id="dialog" close-text="Close">
  <div slot="title">There were warnings when trying to install this extension:</div>
  <div slot="body">
    <ul>
      <template is="dom-repeat" items="[[installWarnings]]">
        <li>[[item]]</li>
      </template>
    </ul>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      OK
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsInstallWarningsDialogElement extends PolymerElement{static get is(){return"extensions-install-warnings-dialog"}static get template(){return getTemplate$j()}static get properties(){return{installWarnings:Array}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onOkClick_(){this.$.dialog.close()}}customElements.define(ExtensionsInstallWarningsDialogElement.is,ExtensionsInstallWarningsDialogElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nMixinLit=superClass=>{class I18nMixinLit extends superClass{i18nRaw_(id,...varArgs){return varArgs.length===0?loadTimeData.getString(id):loadTimeData.getStringF(id,...varArgs)}i18n(id,...varArgs){const rawString=this.i18nRaw_(id,...varArgs);return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent}i18nAdvanced(id,opts){opts=opts||{};const rawString=this.i18nRaw_(id,...opts.substitutions||[]);return sanitizeInnerHtml(rawString,opts)}i18nDynamic(_locale,id,...varArgs){return this.i18n(id,...varArgs)}i18nRecursive(locale,id,...varArgs){let args=varArgs;if(args.length>0){args=args.map((str=>this.i18nExists(str)?loadTimeData.getString(str):str))}return this.i18nDynamic(locale,id,...args)}i18nExists(id){return loadTimeData.valueExists(id)}}return I18nMixinLit};
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WebUiListenerMixinLit=superClass=>{class WebUiListenerMixinLit extends superClass{constructor(){super(...arguments);this.webUiListeners_=[]}addWebUiListener(eventName,callback){this.webUiListeners_.push(addWebUiListener(eventName,callback))}disconnectedCallback(){super.disconnectedCallback();while(this.webUiListeners_.length>0){removeWebUiListener(this.webUiListeners_.pop())}}}return WebUiListenerMixinLit};let instance$2=null;function getCss$1(){return instance$2||(instance$2=[...[],css`:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}cr-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2(){return html`${this.isManaged_?html`
  <cr-icon .icon="${this.managedByIcon_}"></cr-icon>
  <div id="content" .innerHTML="${this.getManagementString_()}"></div>
`:""}`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ManagedFootnoteElementBase=I18nMixinLit(WebUiListenerMixinLit(CrLitElement));class ManagedFootnoteElement extends ManagedFootnoteElementBase{constructor(){super(...arguments);this.isManaged_=loadTimeData.getBoolean("isManaged");this.managedByIcon_=loadTimeData.getString("managedByIcon");this.showDeviceInfo=false}static get is(){return"managed-footnote"}static get styles(){return getCss$1()}render(){return getHtml$2.bind(this)()}static get properties(){return{isManaged_:{reflect:true,type:Boolean},showDeviceInfo:{type:Boolean},managedByIcon_:{reflect:true,type:String}}}firstUpdated(){this.addWebUiListener("is-managed-changed",(managed=>{loadTimeData.overrideValues({isManaged:managed});this.isManaged_=managed}))}getManagementString_(){if(this.showDeviceInfo){return this.i18nAdvanced("deviceManagedByOrg")}return this.i18nAdvanced("browserManagedByOrg")}}customElements.define(ManagedFootnoteElement.is,ManagedFootnoteElement);chrome.send("observeManagedUI");const template=html$1`<iron-iconset-svg name="extensions-icons" size="24">
<svg>
<defs>
  
  <g id="unpacked">
    <path class="cls-1" fill="none" d="M0,0H24V24H0V0Z"></path>
    <circle cx="9" cy="12" r="1"></circle>
    <path d="M20,5H4A2,2,0,0,0,2,7V17a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V7A2,2,0,0,0,20,5ZM9,17a5,5,0,1,1,5-5A5,5,0,0,1,9,17Zm11,1a1,1,0,1,1,1-1A1,1,0,0,1,20,18ZM20,8a1,1,0,1,1,1-1A1,1,0,0,1,20,8Z"></path>
  </g>

  
  
  <g id="safebrowsing_warning">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 4.24l6 3v4.1c0 3.9-2.55 7.5-6 8.59-3.45-1.09-6-4.7-6-8.59v-4.1l6-3M12 2L4 6v5.33c0 4.93 3.41 9.55 8 10.67 4.59-1.12 8-5.73 8-10.67V6l-8-4zm-1 13h2v2h-2v-2zm2-7h-2v5h2V8z"></path>
  </g>

  
  <g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
  <g id="business"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>

  
  <g id="my_extensions" viewBox="0 -960 960 960"><path d="M216-135.869q-33.287 0-56.709-23.422-23.422-23.422-23.422-56.709v-172.304q37.609-2 63.218-28.424 25.608-26.424 25.608-63.272t-25.608-63.272q-25.609-26.424-63.218-28.424V-744q0-33.287 23.422-56.709 23.422-23.422 56.709-23.422h161.065q2.631-40.956 31.96-69.315 29.329-28.359 70.75-28.359t70.975 28.199q29.554 28.199 32.185 69.475H744q33.287 0 56.709 23.422 23.422 23.422 23.422 56.709v161.065q40.956 2.631 69.315 31.96 28.359 29.329 28.359 70.75t-28.199 70.975q-28.199 29.554-69.475 32.185V-216q0 33.287-23.422 56.709-23.422 23.422-56.709 23.422H216Zm2.87-83.001h522.26v-522.26H218.87v108.652q42.13 22.63 65.597 63.772 23.468 41.141 23.468 88.706 0 49.01-23.468 90.168Q261-348.674 218.87-327.283v108.413ZM480-480Z"></path></g>
  <g id="site_permissions" viewBox="0 -960 960 960"><path d="M454.087-136.587V-384H533.5v84h288v79.413h-288v84h-79.413Zm-315.587-84V-300h247.413v79.413H138.5Zm144-135.826v-84h-144v-79.174h144v-84h79.413v247.174H282.5Zm147.587-84v-79.174H821.5v79.174H430.087Zm144-135.587v-247.413H653.5v84h168V-660h-168v84h-79.413ZM138.5-660v-79.413h391.413V-660H138.5Z"></path></g>
  <g id="keyboard_shortcuts" viewBox="0 -960 960 960"><path d="M168-229q-34.483 0-58.741-24.259-24.26-24.258-24.26-58.741v-336q0-34.483 24.26-58.741Q133.517-731 168-731h624q34.483 0 58.741 24.259Q875-682.483 875-648v336q0 34.483-24.259 58.741Q826.483-229 792-229H168Zm0-83h624v-336H168v336Zm168-24h288v-72H336v72Zm-96-120h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm-408-96h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72ZM168-312v-336 336Z"></path></g>
  <g id="web_store" enable-background="new 0 0 192 192" height="24px" viewBox="0 0 192 192" width="24px"><path fill="none" d="M0 0h192v192H0z"></path><path fill="#F1F3F4" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path><path fill="#F1F3F4" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path><path fill="#E8EAED" d="M20 28h152v66.35H20z"></path><path fill="#FFF" d="M113.27 56.34H78.73c-3.82 0-6.91-3.09-6.91-6.91 0-3.82 3.09-6.91 6.91-6.91h34.54c3.82 0 6.91 3.09 6.91 6.91 0 3.81-3.09 6.91-6.91 6.91z"></path><defs><path id="a" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><g clip-path="url(#b)"><linearGradient id="c" x1="39.161" x2="152.841" y1="125.013" y2="125.013" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#d93025"></stop><stop offset="1" style="stop-color:#ea4335"></stop></linearGradient><path fill="url(#c)" d="m39.16 116.8 9.05 27.61 19.38 21.63L96 116.81l56.84-.01C141.49 97.18 120.29 83.99 96 83.99c-24.29 0-45.49 13.19-56.84 32.81z"></path><linearGradient id="d" x1="-3.897" x2="109.806" y1="36.608" y2="36.608" gradientTransform="rotate(-120 100 93.002)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1e8e3e"></stop><stop offset="1" style="stop-color:#34a853"></stop></linearGradient><path fill="url(#d)" d="m95.99 215.28 19.38-21.64 9.04-27.6H67.58L39.16 116.8c-11.31 19.64-12.14 44.61.01 65.65 12.14 21.04 34.17 32.81 56.82 32.83z"></path><linearGradient id="e" x1="96.791" x2="210.494" y1="8.387" y2="8.387" gradientTransform="rotate(120 88.856 76)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#fbbc04"></stop><stop offset="1" style="stop-color:#fcc934"></stop></linearGradient><path fill="url(#e)" d="M152.84 116.81H96l28.42 49.23L96 215.28c22.66-.02 44.69-11.79 56.83-32.83 12.15-21.04 11.32-46 .01-65.64z"></path><ellipse cx="96" cy="149.63" fill="#F1F3F4" rx="32.81" ry="32.82"></ellipse><ellipse cx="96" cy="149.63" fill="#1A73E8" rx="26.66" ry="26.67"></ellipse></g><path fill="#BDC1C6" d="M20 94.35h152v.86H20zM20 93.48h152v.86H20z" opacity=".1"></path></g>

  
  <g id="extension_off" viewBox="0 -960 960 960"><path d="M791-55 55-791l57-57 736 736-57 57Zm9-219-80-80v-366H354l-80-80h86q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v86ZM537-537ZM423-423ZM200-120q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-17 6-31.5t17-25.5l57 57v88q54 20 87 67t33 105q0 57-33 104t-87 68v88h520l57 57q-11 11-25.5 17t-31.5 6H200Z"></path></g>
</defs>
</svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);function getTemplate$i(){return html$1`<!--_html_template_start_--><style include="iron-flex cr-shared-style cr-hidden-style cr-icons action-link
    shared-style">.bounded-text,.clippable-flex-text,.multiline-clippable-text{overflow:hidden;text-overflow:ellipsis}.bounded-text,.clippable-flex-text{white-space:nowrap}.clippable-flex-text{flex-shrink:1}cr-tooltip-icon{margin-inline-end:8px}#icon-wrapper{align-self:flex-start;display:flex;padding:6px;position:relative}#icon{height:36px;width:36px}#card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);display:flex;flex-direction:column;height:var(--extensions-card-height);transition:height .3s cubic-bezier(.25,.1,.25,1)}#card.dev-mode{height:208px}#main{display:flex;flex:1;min-height:0;padding:16px 20px}#content{display:flex;flex:1;flex-direction:column;margin-inline-start:24px;overflow:hidden}#name-and-version{color:var(--cr-primary-text-color);margin-bottom:4px}#name{margin-inline-end:8px}#description{flex:1}#warnings{color:var(--error-color);flex:1;margin-bottom:8px}#allowlist-warning{flex:1;margin-bottom:8px}.message-icon{height:18px;margin-inline-end:4px;vertical-align:top;width:18px}#warnings .message-icon{--iron-icon-fill-color:var(--error-color)}#allowlist-warning .message-icon{--iron-icon-fill-color:var(--warning-color)}#extension-id{flex-shrink:0}#inspect-views{display:flex;white-space:nowrap}#inspect-views>span{margin-inline-end:4px}#button-strip{box-sizing:border-box;flex-shrink:0;height:var(--cr-section-min-height);padding-bottom:8px;padding-inline-end:20px;padding-top:8px}#button-strip cr-button{margin-inline-start:8px}#source-indicator{margin-inline-start:24px;margin-top:24px;position:absolute}.source-icon-wrapper{align-items:center;background:#f1592b;border-radius:50%;box-shadow:0 1px 1px 0 rgba(0,0,0,.22),0 2px 2px 0 rgba(0,0,0,.12);display:flex;height:22px;justify-content:center;width:22px}#source-indicator iron-icon{color:#fff;height:16px;width:16px}cr-tooltip{--paper-tooltip-min-width:0}#errors-button{color:var(--error-color)}#dev-reload-button{margin-inline-end:12px}#blocklisted-warning:empty{display:none}#a11yAssociation{height:0;overflow:hidden}</style>

<div id="a11yAssociation" aria-hidden="true">
  [[a11yAssociation(data.name)]]
</div>
<div id="card" class$="[[computeClasses_(data.state, inDevMode)]]">
  <div id="main">
    <div id="icon-wrapper">
      <img id="icon" src="[[data.iconUrl]]" aria-describedby="a11yAssociation" alt="">
      <template is="dom-if" if="[[computeSourceIndicatorIcon_(data.*)]]">
        <div id="source-indicator">
          <div class="source-icon-wrapper" role="img" aria-describedby="a11yAssociation" aria-label$="[[computeSourceIndicatorText_(data.*)]]">
            <cr-icon icon="[[computeSourceIndicatorIcon_(data.*)]]">
            </cr-icon>
          </div>
        </div>
      </template>
    </div>
    
    <template is="dom-if" if="[[computeSourceIndicatorIcon_(data.*)]]">
      <cr-tooltip id="source-indicator-text" for="source-indicator" position="top" fit-to-visible-bounds aria-hidden="true">
        [[computeSourceIndicatorText_(data.*)]]
      </cr-tooltip>
    </template>
    <div id="content">
      
      <div>
        <div id="name-and-version" class="layout horizontal center">
          <div id="name" role="heading" aria-level="3" class="clippable-flex-text">[[data.name]]</div>
          <span id="version" class="cr-secondary-text" hidden$="[[!inDevMode]]">
            [[data.version]]
          </span>
        </div>
      </div>
      <div id="description" class="cr-secondary-text multiline-clippable-text" hidden$="[[!showDescription_(data.disableReasons.*, data.*)]]">
        [[data.description]]
      </div>
      <template is="dom-if" if="[[showSevereWarnings(data.disableReasons.*, data.*)]]">
        <div id="warnings">
          <cr-icon class="message-icon" icon="cr:error"></cr-icon>
          <span id="runtime-warnings" aria-describedby="a11yAssociation" hidden$="[[!data.runtimeWarnings.length]]">
            <template is="dom-repeat" items="[[data.runtimeWarnings]]">
              [[item]]
            </template>
          </span>
          <span id="suspicious-warning" aria-describedby="a11yAssociation" hidden$="[[!data.disableReasons.suspiciousInstall]]">
            This extension is not listed in the Chrome Web Store and may have been added without your knowledge.
            <a target="_blank" href="https://support.google.com/chrome?p=ui_remove_non_cws_extensions&amp;hl=en-US" aria-label="Learn more about disabled extensions.">
              Learn more
            </a>
          </span>
          <span id="corrupted-warning" aria-describedby="a11yAssociation" hidden$="[[!data.disableReasons.corruptInstall]]">
            This extension may have been corrupted.
          </span>
          <span id="blocklisted-warning">[[data.blocklistText]]</span>
        </div>
      </template>
      <template is="dom-if" if="[[showMv2DeprecationWarning_(data.disableReasons.*, data.*)]]">
          <div id="warnings">
            <cr-icon class="message-icon" icon="cr:error"></cr-icon>
            <span id="mv2-deprecation-warning" aria-describedby="a11yAssociation">
              This extension was turned off because it is no longer supported
            </span>
          </div>
      </template>
      <template is="dom-if" if="[[showAllowlistWarning_(data.disableReasons.*, data.*)]]">
        <div id="allowlist-warning">
          <cr-icon class="message-icon" icon="extensions-icons:safebrowsing_warning">
          </cr-icon>
          <span class="cr-secondary-text" aria-describedby="a11yAssociation">
            This extension is not trusted by Enhanced Safe Browsing.
            <a href="https://support.google.com/chrome?p=cws_enhanced_safe_browsing" target="_blank" aria-label="Learn more about Enhanced Safe Browsing.">
              Learn more
            </a>
          </span>
        </div>
      </template>
      <template is="dom-if" if="[[inDevMode]]">
        <div id="extension-id" class="bounded-text cr-secondary-text">
          [[data.id]]
        </div>
        <template is="dom-if" if="[[!computeInspectViewsHidden_(data.views)]]">
          
          <div>
            <div id="inspect-views" class="cr-secondary-text">
              <span aria-describedby="a11yAssociation">
                Inspect views
              </span>
              <a class="clippable-flex-text" is="action-link" title="[[computeFirstInspectTitle_(firstInspectView_)]]" on-click="onInspectClick_">
                [[computeFirstInspectLabel_(firstInspectView_)]]
              </a>
              <a is="action-link" hidden$="[[computeExtraViewsHidden_(data.views)]]" on-click="onExtraInspectClick_">
                &nbsp;[[computeExtraInspectLabel_(data.views)]]
              </a>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
  <div id="button-strip" class="layout horizontal center cr-secondary-text">
    <div class="layout flex horizontal center">
      <cr-button id="detailsButton" on-click="onDetailsClick_" aria-describedby="a11yAssociation">
        Details
      </cr-button>
      <cr-button id="removeButton" on-click="onRemoveClick_" aria-describedby="a11yAssociation" hidden="[[data.mustRemainInstalled]]">
        Remove
      </cr-button>
      <template is="dom-if" if="[[shouldShowErrorsButton_(data.*)]]">
        <cr-button id="errors-button" on-click="onErrorsClick_" aria-describedby="a11yAssociation">
          Errors
        </cr-button>
      </template>
    </div>
    <template is="dom-if" if="[[!computeDevReloadButtonHidden_(data.*)]]">
      <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap" title="Reload" aria-label="Reload" aria-describedby="a11yAssociation" on-click="onReloadClick_">
      </cr-icon-button>
    </template>
    <template is="dom-if" if="[[showRepairButton_(data.disableReasons.corruptInstall)]]">
      <cr-button id="repair-button" class="action-button" aria-describedby="a11yAssociation" on-click="onRepairClick_">
        Repair
      </cr-button>
    </template>
    <template is="dom-if" if="[[showReloadButton_(data.state)]]">
      <cr-button id="terminated-reload-button" on-click="onReloadClick_" aria-describedby="a11yAssociation" class="action-button">
        Reload
      </cr-button>
    </template>
    <cr-tooltip-icon id="parentDisabledPermissionsToolTip" hidden$="[[!data.disableReasons.parentDisabledPermissions]]" tooltip-text="Your parent has disabled extension permissions" icon-class="cr20:kite" icon-aria-label="Your parent has disabled extension permissions">
    </cr-tooltip-icon>
    <cr-tooltip id="enable-toggle-tooltip" for="enableToggle" position="left" aria-hidden="true" animation-delay="0" fit-to-visible-bounds>
      [[getEnableToggleTooltipText_(data.*)]]
    </cr-tooltip>
    <cr-toggle id="enableToggle" aria-label$="[[getEnableToggleAriaLabel_(data.*)]]" aria-describedby="a11yAssociation enable-toggle-tooltip" checked="[[isEnabled_(data.state)]]" on-change="onEnableToggleChange_" disabled$="[[!isEnableToggleEnabled_(data.*)]]" hidden$="[[!showEnableToggle_(data.*)]]">
    </cr-toggle>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsItemElementBase=I18nMixin(ItemMixin(PolymerElement));class ExtensionsItemElement extends ExtensionsItemElementBase{static get is(){return"extensions-item"}static get template(){return getTemplate$i()}static get properties(){return{delegate:Object,inDevMode:{type:Boolean,value:false},safetyCheckShowing:{type:Boolean,value:false},data:Object,showingDetails_:{type:Boolean,value:false},firstInspectView_:{type:Object,computed:"computeFirstInspectView_(data.views)"}}}static get observers(){return["observeIdVisibility_(inDevMode, showingDetails_, data.id)"]}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getDetailsButton(){return this.$.detailsButton}getRemoveButton(){return this.data.mustRemainInstalled?null:this.$.removeButton}getErrorsButton(){return this.shadowRoot.querySelector("#errors-button")}getEnableToggleAriaLabel_(){return getEnableToggleAriaLabel(this.isEnabled_(),this.data.type,this.i18n("appEnabled"),this.i18n("extensionEnabled"),this.i18n("itemOff"))}getEnableToggleTooltipText_(){return getEnableToggleTooltipText(this.data)}observeIdVisibility_(){flush();const idElement=this.shadowRoot.querySelector("#extension-id");if(idElement){assert(this.data);idElement.textContent=this.i18n("itemId",this.data.id)}}shouldShowErrorsButton_(){if(this.data.installWarnings&&this.data.installWarnings.length>0){return true}return this.data.manifestErrors.length>0||this.data.runtimeErrors.length>0}onRemoveClick_(){if(this.safetyCheckShowing){const actionToRecord=this.data.safetyCheckText?"SafetyCheck.ReviewPanelRemoveClicked":"SafetyCheck.NonTriggeringExtensionRemoved";chrome.metricsPrivate.recordUserAction(actionToRecord)}this.delegate.deleteItem(this.data.id)}onEnableToggleChange_(){this.delegate.setItemEnabled(this.data.id,this.$.enableToggle.checked);this.$.enableToggle.checked=this.isEnabled_()}onErrorsClick_(){if(this.data.installWarnings&&this.data.installWarnings.length>0){this.fire_("show-install-warnings",this.data.installWarnings);return}navigation.navigateTo({page:Page.ERRORS,extensionId:this.data.id})}onDetailsClick_(){navigation.navigateTo({page:Page.DETAILS,extensionId:this.data.id})}computeFirstInspectView_(){return sortViews(this.data.views)[0]}onInspectClick_(){this.delegate.inspectItemView(this.data.id,this.firstInspectView_)}onExtraInspectClick_(){navigation.navigateTo({page:Page.DETAILS,extensionId:this.data.id})}onReloadClick_(){this.reloadItem().catch((loadError=>this.fire_("load-error",loadError)))}onRepairClick_(){this.delegate.repairItem(this.data.id)}isEnabled_(){return isEnabled$1(this.data.state)}isEnableToggleEnabled_(){return userCanChangeEnablement(this.data)}showReloadButton_(){return getEnableControl(this.data)===EnableControl.RELOAD}showRepairButton_(){return getEnableControl(this.data)===EnableControl.REPAIR}showEnableToggle_(){return getEnableControl(this.data)===EnableControl.ENABLE_TOGGLE}computeClasses_(){let classes=this.isEnabled_()?"enabled":"disabled";if(this.inDevMode){classes+=" dev-mode"}return classes}computeSourceIndicatorIcon_(){switch(getItemSource(this.data)){case SourceType.POLICY:return"extensions-icons:business";case SourceType.SIDELOADED:return"extensions-icons:input";case SourceType.UNKNOWN:return"extensions-icons:input";case SourceType.UNPACKED:return"extensions-icons:unpacked";case SourceType.WEBSTORE:case SourceType.INSTALLED_BY_DEFAULT:return"";default:assertNotReached()}}computeSourceIndicatorText_(){if(this.data.locationText){return this.data.locationText}const sourceType=getItemSource(this.data);return sourceType===SourceType.WEBSTORE?"":getItemSourceString(sourceType)}computeInspectViewsHidden_(){return!this.data.views||this.data.views.length===0}computeFirstInspectTitle_(){return this.data.views.length>0?computeInspectableViewLabel(this.firstInspectView_):""}computeFirstInspectLabel_(){const label=this.computeFirstInspectTitle_();return label&&this.data.views.length>1?label+",":label}computeExtraViewsHidden_(){return this.data.views.length<=1}computeDevReloadButtonHidden_(){return!this.canReloadItem()}computeExtraInspectLabel_(){return this.i18n("itemInspectViewsExtra",(this.data.views.length-1).toString())}hasSevereWarnings_(){return this.data.disableReasons.corruptInstall||this.data.disableReasons.suspiciousInstall||this.data.runtimeWarnings.length>0||!!this.data.blocklistText}hasMv2DeprecationWarning_(){return this.data.disableReasons.unsupportedManifestVersion}hasAllowlistWarning_(){return this.data.showSafeBrowsingAllowlistWarning}showDescription_(){return!this.hasSevereWarnings_()&&!this.hasMv2DeprecationWarning_()&&!this.hasAllowlistWarning_()}showSevereWarnings(){return this.hasSevereWarnings_()}showMv2DeprecationWarning_(){return this.hasMv2DeprecationWarning_()&&!this.hasSevereWarnings_()}showAllowlistWarning_(){return this.hasAllowlistWarning_()&&!this.hasSevereWarnings_()&&!this.hasMv2DeprecationWarning_()}}customElements.define(ExtensionsItemElement.is,ExtensionsItemElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PluralStringProxyImpl{getPluralString(messageName,itemCount){return sendWithPromise("getPluralString",messageName,itemCount)}getPluralStringTupleWithComma(messageName1,itemCount1,messageName2,itemCount2){return sendWithPromise("getPluralStringTupleWithComma",messageName1,itemCount1,messageName2,itemCount2)}getPluralStringTupleWithPeriods(messageName1,itemCount1,messageName2,itemCount2){return sendWithPromise("getPluralStringTupleWithPeriods",messageName1,itemCount1,messageName2,itemCount2)}static getInstance(){return instance$1||(instance$1=new PluralStringProxyImpl)}static setInstance(obj){instance$1=obj}}let instance$1=null;function getTemplate$h(){return html$1`<!--_html_template_start_--><style include="cr-shared-style shared-style">.cr-row{padding:0}.extension-buttons,.header-button{margin-inline-start:auto}</style>

<h2 class="panel-title" hidden$="[[!showTitle]]">
  Updates
</h2>

<div class="panel-background" id="panelContainer">
  <div class="panel-header">
    <cr-icon aria-hidden="true" icon="extensions-icons:my_extensions" class="panel-header-icon">
    </cr-icon>
    <div class="panel-header-text">
      <h3 id="headingText">[[headerString_]]</h3>
      <div class="cr-secondary-text" inner-h-t-m-l="[[getSubtitleString_(subtitleString_)]]">
      </div>
    </div>
    <cr-button class="header-button" on-click="onDismissButtonClick_">
      Got it
    </cr-button>
  </div>

  <div class="panel-extensions">
    <template is="dom-repeat" items="[[extensions]]">
      <div class="panel-extension-row cr-row">
        <img class="panel-extension-icon" src="[[item.iconUrl]]" role="presentation">
        <div class="panel-extension-info text-elide">[[item.name]]</div>
        <div class="extension-buttons">
          <cr-button class="find-alternative-button" on-click="onFindAlternativeButtonClick_" hidden$="[[!showExtensionFindAlternativeButton_(item)]]" aria-label="[[getFindAlternativeButtonLabelFor_(item.name)]]">
            Find alternative
            <cr-icon icon="cr:open-in-new" slot="suffix-icon"></cr-icon>
          </cr-button>
          <cr-icon-button id="removeButton" class="icon-delete-gray" on-click="onRemoveButtonClick_" title="Remove" aria-label$="[[getRemoveButtonLabelFor_(item.name)]]" hidden$="[[!showExtensionRemoveButton_(item,
                  mv2ExperimentStage)]]">
          </cr-icon-button>
          <cr-icon-button id="actionMenuButton" class="icon-more-vert header-aligned-button" on-click="onExtensionActionMenuClick_" title="More options" aria-label="[[getActionMenuButtonLabelFor_(item.name)]]">
          </cr-icon-button>
        </div>
      </div>
    </template>

    <cr-action-menu id="actionMenu">
      <button class="dropdown-item" id="findAlternativeAction" on-click="onFindAlternativeExtensionActionClick_" hidden$="[[!showExtensionFindAlternativeAction_(
              extensionWithActionMenuOpened_, mv2ExperimentStage)]]">
        Find alternatives
      </button>
      <button class="dropdown-item" id="keepAction" on-click="onKeepExtensionActionClick_">
        Keep for now
      </button>
      <button class="dropdown-item" id="removeAction" on-click="onRemoveExtensionActionClicked_" hidden$="[[!showExtensionRemoveAction_(
              extensionWithActionMenuOpened_, mv2ExperimentStage)]]">
        Remove from Chrome
      </button>
    </cr-action-menu>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsMv2DeprecationPanelElement extends(I18nMixin(PolymerElement)){static get is(){return"extensions-mv2-deprecation-panel"}static get template(){return getTemplate$h()}static get properties(){return{delegate:Object,extensions:{type:Array,notify:true},mv2ExperimentStage:Number,showTitle:Boolean,headerString_:String,subtitleString_:String,extensionWithActionMenuOpened_:Object}}static get observers(){return["onExtensionsChanged_(extensions.*)"]}async onExtensionsChanged_(){let headerVar;let subtitleVar;let subtitleLink;switch(this.mv2ExperimentStage){case Mv2ExperimentStage.NONE:assertNotReached();case Mv2ExperimentStage.WARNING:headerVar="mv2DeprecationPanelWarningHeader";subtitleVar="mv2DeprecationPanelWarningSubtitle";subtitleLink="https://chromewebstore.google.com/category/extensions";break;case Mv2ExperimentStage.DISABLE_WITH_REENABLE:headerVar="mv2DeprecationPanelDisabledHeader";subtitleVar="mv2DeprecationPanelDisabledSubtitle";subtitleLink="https://support.google.com/chrome_webstore?"+"p=unsupported_extensions";break;default:assertNotReached()}this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString(headerVar,this.extensions.length);const subtitle=await PluralStringProxyImpl.getInstance().getPluralString(subtitleVar,this.extensions.length);this.subtitleString_=subtitle.replace("$1",subtitleLink)}showExtensionFindAlternativeButton_(extension){return this.mv2ExperimentStage===Mv2ExperimentStage.WARNING&&!!extension.recommendationsUrl}showExtensionRemoveButton_(extension){return this.mv2ExperimentStage===Mv2ExperimentStage.DISABLE_WITH_REENABLE&&!extension.mustRemainInstalled}showExtensionFindAlternativeAction_(){return this.mv2ExperimentStage===Mv2ExperimentStage.DISABLE_WITH_REENABLE&&this.extensionWithActionMenuOpened_&&!!this.extensionWithActionMenuOpened_.recommendationsUrl}showExtensionRemoveAction_(){return this.mv2ExperimentStage===Mv2ExperimentStage.WARNING&&this.extensionWithActionMenuOpened_&&!this.extensionWithActionMenuOpened_.mustRemainInstalled}getRemoveButtonLabelFor_(extensionName){return this.i18n("mv2DeprecationPanelRemoveButtonAccLabel",extensionName)}getActionMenuButtonLabelFor_(extensionName){return this.i18n("mv2DeprecationPanelExtensionActionMenuLabel",extensionName)}getSubtitleString_(){return sanitizeInnerHtml(this.subtitleString_)}getFindAlternativeButtonLabelFor_(extensionName){return this.i18n("mv2DeprecationPanelFindAlternativeButtonAccLabel",extensionName)}onDismissButtonClick_(){switch(this.mv2ExperimentStage){case Mv2ExperimentStage.NONE:assertNotReached();case Mv2ExperimentStage.WARNING:chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Warning.Dismissed");break;case Mv2ExperimentStage.WARNING:chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Disabled.Dismissed");break}this.delegate.dismissMv2DeprecationNotice()}onFindAlternativeButtonClick_(event){assert(this.mv2ExperimentStage===Mv2ExperimentStage.WARNING);chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Warning.FindAlternativeForExtension");const recommendationsUrl=event.model.item.recommendationsUrl;assert(!!recommendationsUrl);this.delegate.openUrl(recommendationsUrl)}onRemoveButtonClick_(event){assert(this.mv2ExperimentStage===Mv2ExperimentStage.DISABLE_WITH_REENABLE);chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Disabled.RemoveExtension");this.$.actionMenu.close();this.delegate.deleteItem(event.model.item.id)}onExtensionActionMenuClick_(event){this.extensionWithActionMenuOpened_=event.model.item;this.$.actionMenu.showAt(event.target,{anchorAlignmentY:AnchorAlignment.AFTER_END})}onFindAlternativeExtensionActionClick_(){assert(this.mv2ExperimentStage===Mv2ExperimentStage.DISABLE_WITH_REENABLE);chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Disabled.FindAlternativeForExtension");const recommendationsUrl=this.extensionWithActionMenuOpened_.recommendationsUrl;assert(!!recommendationsUrl);this.delegate.openUrl(recommendationsUrl)}onRemoveExtensionActionClicked_(){assert(this.mv2ExperimentStage===Mv2ExperimentStage.WARNING);chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Warning.RemoveExtension");this.$.actionMenu.close();this.delegate.deleteItem(this.extensionWithActionMenuOpened_.id)}onKeepExtensionActionClick_(){switch(this.mv2ExperimentStage){case Mv2ExperimentStage.NONE:assertNotReached();case Mv2ExperimentStage.WARNING:chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Warning.DismissedForExtension");break;case Mv2ExperimentStage.WARNING:chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Disabled.DismissedForExtension");break}this.$.actionMenu.close();this.delegate.dismissMv2DeprecationNoticeForExtension(this.extensionWithActionMenuOpened_.id)}}customElements.define(ExtensionsMv2DeprecationPanelElement.is,ExtensionsMv2DeprecationPanelElement);function getTemplate$g(){return html$1`<!--_html_template_start_--><style include="cr-shared-style shared-style">.panel-header{padding:calc(var(--cr-section-padding) - var(--cr-section-vertical-padding)) 0}.header-group-wrapper{flex:1;margin-inline-start:15px}cr-icon[icon='cr:check']{padding-inline-start:10px;fill:var(--google-green-700)}@media (prefers-color-scheme:dark){cr-icon[icon='cr:check']{fill:var(--grey-900-white-4-percent)}}.completion-container{font-weight:500;font-size:14px;margin-top:20px;min-height:42px}.panel-extension-info{flex:1;margin-top:15px;margin-bottom:0}.bulk-action-button{margin-inline-start:auto}.cr-row{padding:0}</style>

<h2 id="safetyHubTitleContainer" class="panel-title" hidden$="[[!shouldShowSafetyHubHeader_]]">
  Safety Check
</h2>

<div class="panel-background">
  <cr-expand-button no-hover id="expandButton" expanded="{{unsafeExtensionsReviewListExpanded_}}" hidden$="[[!shouldShowUnsafeExtensions_]]">
    <div class="panel-header" id="reviewPanelContainer">
      <cr-icon aria-hidden="true" icon="extensions-icons:my_extensions" class="panel-header-icon">
      </cr-icon>
      <div class="panel-header-text">
        <h3 id="headingText">[[headerString_]]</h3>
        <div class="cr-secondary-text" id="secondaryText">
            [[subtitleString_]]
        </div>
      </div>
      <cr-button class="action-button bulk-action-button" aria-label="Remove all" id="removeAllButton" on-click="onRemoveAllClick_" hidden$="[[!shouldShowSafetyHubRemoveAllButton_]]">
          Remove all
      </cr-button>
    </div>
  </cr-expand-button>
  <cr-collapse class="panel-extensions" opened="[[unsafeExtensionsReviewListExpanded_]]" hidden$="[[!shouldShowUnsafeExtensions_]]">
    <template is="dom-repeat" items="[[extensions]]">
      <div class="panel-extension-row cr-row">
        <img class="panel-extension-icon" src="[[item.iconUrl]]" role="presentation">
        <div class="panel-extension-info text-elide">
          <div class="extension-representation">[[item.name]]</div>
          <div class="cr-secondary-text">
            [[item.safetyCheckText.panelString]]
          </div>
        </div>
        <cr-icon-button iron-icon="cr:delete" actionable on-click="onRemoveExtensionClick_" aria-label="[[getRemoveButtonA11yLabel_(item.name)]]">
        </cr-icon-button>
        <cr-icon-button class="icon-more-vert header-aligned-button" id="makeExceptionMenuButton" on-click="onMakeExceptionMenuClick_" aria-label="[[getOptionMenuA11yLabel_(item.name)]]" focus-type="makeExceptionMenuButton"></cr-icon-button>
      </div>
    </template>
  </cr-collapse>
  <div class="header-with-icon completion-container" hidden$="[[!shouldShowCompletionInfo_]]">
    <cr-icon role="img" icon="cr:check"></cr-icon>
    <span class="header-group-wrapper">[[completionMessage_]]</span>
  </div>
  <cr-action-menu id="makeExceptionMenu">
    <button id="menuKeepExtension" class="dropdown-item" on-click="onKeepExtensionClick_">
        Keep this extension
    </button>
  </cr-action-menu>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsReviewPanelElementBase=I18nMixin(PolymerElement);class ExtensionsReviewPanelElement extends ExtensionsReviewPanelElementBase{static get is(){return"extensions-review-panel"}static get template(){return getTemplate$g()}static get properties(){return{delegate:Object,extensions:{type:Array,notify:true},headerString_:String,subtitleString_:String,completionMessage_:String,shouldShowSafetyHubRemoveAllButton_:{type:Boolean,computed:"computeShouldShowSafetyHubRemoveAllButton_(extensions.*)"},shouldShowUnsafeExtensions_:{type:Boolean,computed:"computeShouldShowUnsafeExtensions_(extensions.*)"},shouldShowCompletionInfo_:{type:Boolean,computed:"computeShouldShowCompletionInfo_(extensions.*, reviewPanelShown_)"},shouldShowSafetyHubHeader_:{type:Boolean,computed:"computeShouldShowSafetyHubHeader_(extensions.*)"},unsafeExtensionsReviewListExpanded_:{type:Boolean,value:true},numberOfExtensionsChangedByLastReviewPanelAction_:{type:Number,value:0},reviewPanelShown_:{type:Boolean,value:false},lastClickedExtensionId_:String}}static get observers(){return["onExtensionsChanged_(extensions.*)"]}async onExtensionsChanged_(){this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckTitle",this.extensions.length);this.subtitleString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckDescription",this.extensions.length);this.completionMessage_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckAllDoneForNow",this.numberOfExtensionsChangedByLastReviewPanelAction_)}computeShouldShowCompletionInfo_(){if(this.extensions?.length===0&&this.numberOfExtensionsChangedByLastReviewPanelAction_!==0){if(!this.completionMetricLogged_){this.completionMetricLogged_=true;chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewCompletion")}return true}else{return false}}computeShouldShowUnsafeExtensions_(){if(this.extensions?.length!==0){if(!this.shouldShowUnsafeExtensions_){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelShown");for(const extension of this.extensions){chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME,convertSafetyCheckReason(extension.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}}this.completionMetricLogged_=false;if(this.shouldShowCompletionInfo_){this.numberOfExtensionsChangedByLastReviewPanelAction_=0}return true}return false}computeShouldShowSafetyHubHeader_(){return loadTimeData.getBoolean("safetyHubShowReviewPanel")&&(this.shouldShowUnsafeExtensions_||this.shouldShowCompletionInfo_)}computeShouldShowSafetyHubRemoveAllButton_(){return this.extensions?.length!==1}onMakeExceptionMenuClick_(e){this.lastClickedExtensionId_=e.model.item.id;this.lastClickedExtensionTriggerReason_=e.model.item.safetyCheckWarningReason;this.$.makeExceptionMenu.showAt(e.target)}onKeepExtensionClick_(){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelKeepClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME,convertSafetyCheckReason(this.lastClickedExtensionTriggerReason_),SAFETY_HUB_WARNING_REASON_MAX_SIZE);if(this.extensions?.length===1){this.numberOfExtensionsChangedByLastReviewPanelAction_=1}this.$.makeExceptionMenu.close();if(this.lastClickedExtensionId_){this.delegate.setItemSafetyCheckWarningAcknowledged(this.lastClickedExtensionId_,this.lastClickedExtensionTriggerReason_)}}getRemoveButtonA11yLabel_(extensionName){return loadTimeData.substituteString(this.i18n("safetyCheckRemoveButtonA11yLabel"),extensionName)}getOptionMenuA11yLabel_(extensionName){return loadTimeData.substituteString(this.i18n("safetyCheckOptionMenuA11yLabel"),extensionName)}async onRemoveExtensionClick_(e){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelRemoveClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME,convertSafetyCheckReason(e.model.item.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE);if(this.extensions?.length===1){this.numberOfExtensionsChangedByLastReviewPanelAction_=1}try{await this.delegate.uninstallItem(e.model.item.id)}catch(_){this.numberOfExtensionsChangedByLastReviewPanelAction_=0}}async onRemoveAllClick_(event){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelRemoveAllClicked");event.stopPropagation();this.numberOfExtensionsChangedByLastReviewPanelAction_=this.extensions.length;try{this.extensions.forEach((extension=>{chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME,convertSafetyCheckReason(extension.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}));await this.delegate.deleteItems(this.extensions.map((extension=>extension.id)))}catch(_){this.numberOfExtensionsChangedByLastReviewPanelAction_=0}}}customElements.define(ExtensionsReviewPanelElement.is,ExtensionsReviewPanelElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function emptyHTML(){return window.trustedTypes?window.trustedTypes.emptyHTML:""}class CustomElement extends HTMLElement{static get template(){return emptyHTML()}constructor(){super();this.attachShadow({mode:"open"});const template=document.createElement("template");template.innerHTML=this.constructor.template||emptyHTML();this.shadowRoot.appendChild(template.content.cloneNode(true))}$(query){return this.shadowRoot.querySelector(query)}$all(query){return this.shadowRoot.querySelectorAll(query)}getRequiredElement(query){const el=this.shadowRoot.querySelector(query);assert(el);assert(el instanceof HTMLElement);return el}}function getTemplate$f(){return getTrustedHTML`<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TIMEOUT_MS=150;const instances=new Map;function getInstance(container=document.body){if(instances.has(container)){return instances.get(container)}assert(container.isConnected);const instance=new CrA11yAnnouncerElement;container.appendChild(instance);instances.set(container,instance);return instance}class CrA11yAnnouncerElement extends CustomElement{constructor(){super(...arguments);this.currentTimeout_=null;this.messages_=[]}static get is(){return"cr-a11y-announcer"}static get template(){return getTemplate$f()}disconnectedCallback(){if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}for(const[parent,instance]of instances){if(instance===this){instances.delete(parent);break}}}announce(message,timeout=TIMEOUT_MS){if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}this.messages_.push(message);this.currentTimeout_=setTimeout((()=>{const messagesDiv=this.shadowRoot.querySelector("#messages");messagesDiv.innerHTML=window.trustedTypes.emptyHTML;for(const message of this.messages_){const div=document.createElement("div");div.textContent=message;messagesDiv.appendChild(div)}this.dispatchEvent(new CustomEvent("cr-a11y-announcer-messages-sent",{bubbles:true,detail:{messages:this.messages_.slice()}}));this.messages_.length=0;this.currentTimeout_=null}),timeout)}}customElements.define(CrA11yAnnouncerElement.is,CrA11yAnnouncerElement);function getTemplate$e(){return html$1`<!--_html_template_start_--><style include="shared-style">#content-wrapper,.items-container{--extensions-card-width:400px}#container{box-sizing:border-box;height:100%}#content-wrapper{min-width:var(--extensions-card-width);padding:24px 60px 64px}#content-wrapper:has(extensions-mv2-deprecation-panel),#content-wrapper:has(extensions-review-panel){padding-top:14px}.empty-list-message{color:#6e6e6e;font-size:123%;font-weight:500;margin-top:80px;text-align:center}@media (prefers-color-scheme:dark){.empty-list-message{color:var(--cr-secondary-text-color)}}.items-container{--grid-gutter:12px;display:grid;grid-column-gap:var(--grid-gutter);grid-row-gap:var(--grid-gutter);grid-template-columns:repeat(auto-fill,var(--extensions-card-width));justify-content:center;margin:auto;max-width:calc(var(--extensions-card-width) * var(--max-columns) + var(--grid-gutter) * var(--max-columns))}.items-container.panel :first-child{max-width:calc(var(--extensions-card-width) * 2 + var(--grid-gutter) * 2);grid-column:1/-1}extensions-mv2-deprecation-panel,extensions-review-panel{margin:15px auto;width:100%}#checkup-container{grid-column:1/-1;min-height:var(--extensions-card-height)}extensions-item{grid-column-start:auto;grid-row-start:auto}.section-header{color:var(--cr-primary-text-color);font-size:123%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:21px;padding-bottom:4px;padding-top:8px}managed-footnote{border-top:none;margin-bottom:-24px;padding-bottom:12px;padding-top:12px;z-index:1}</style>
<div id="container">
  <managed-footnote hidden="[[filter]]"></managed-footnote>
  <div id="content-wrapper" style="--max-columns:[[maxColumns_]]">
    <template is="dom-if" if="[[showSafetyCheckReviewPanel_]]" restamp>
      <div class="items-container panel">
        <extensions-review-panel extensions="[[unsafeExtensions_]]" delegate="[[delegate]]">
        </extensions-review-panel>
      </div>
    </template>

    <template is="dom-if" if="[[showMv2DeprecationPanel_]]" restamp>
      <div class="items-container panel">
        <extensions-mv2-deprecation-panel extensions="[[mv2DeprecatedExtensions_]]" delegate="[[delegate]]" mv2-experiment-stage="[[mv2ExperimentStage_]]" show-title="[[showSafetyCheckReviewPanel_]]">
        </extensions-mv2-deprecation-panel>
      </div>
    </template>

    <div id="no-items" class="empty-list-message" hidden$="[[!shouldShowEmptyItemsMessage_(
            apps.length, extensions.length)]]">
      <span on-click="onNoExtensionsClick_">
        Find extensions and themes in the <a target="_blank" href="https://chrome.google.com/webstore/category/extensions">Chrome Web Store</a>
      </span>
    </div>
    <div id="no-search-results" class="empty-list-message" hidden$="[[!shouldShowEmptySearchMessage_(
            shownAppsCount_, shownExtensionsCount_, apps, extensions)]]">
      <span>No search results found</span>
    </div>

    <div id="extensions-section" hidden="[[!shownExtensionsCount_]]">
      
      <h2 class="section-header items-container">
        All Extensions
      </h2>
      <div class="items-container">
        
        <template is="dom-repeat" items="[[extensions]]" initial-count="3" filter="[[computedFilter_]]" rendered-item-count="{{shownExtensionsCount_::dom-change}}">
          <extensions-item id="[[item.id]]" data="[[item]]" safety-check-showing="[[hasSafetyCheckTriggeringExtension_]]" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
          </extensions-item>
          </template>
      </div>
    </div>

    <div id="chrome-apps-section" hidden="[[!shownAppsCount_]]">
      
      <h2 class="section-header items-container">Chrome Apps</h2>
      <div class="items-container">
        <template is="dom-repeat" items="[[apps]]" initial-count="3" filter="[[computedFilter_]]" rendered-item-count="{{shownAppsCount_::dom-change}}">
          <extensions-item id="[[item.id]]" data="[[item]]" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
          </extensions-item>
        </template>
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsItemListElementBase=I18nMixin(PolymerElement);class ExtensionsItemListElement extends ExtensionsItemListElementBase{static get is(){return"extensions-item-list"}static get template(){return getTemplate$e()}static get properties(){return{apps:Array,extensions:Array,delegate:Object,inDevMode:{type:Boolean,value:false},isMv2DeprecationNoticeDismissed:{type:Boolean,notify:true},filter:{type:String},computedFilter_:{type:String,computed:"computeFilter_(filter)",observer:"announceSearchResults_"},maxColumns_:{type:Number,value:3},unsafeExtensions_:{type:Array,computed:"computeUnsafeExtensions_(extensions.*)"},mv2ExperimentStage_:{type:Number,value:()=>getMv2ExperimentStage(loadTimeData.getInteger("MV2ExperimentStage"))},mv2DeprecatedExtensions_:{type:Array,computed:"computeMv2DeprecatedExtensions_(extensions.*)"},shownAppsCount_:{type:Number,value:0},shownExtensionsCount_:{type:Number,value:0},showSafetyCheckReviewPanel_:{type:Boolean,computed:"computeShowSafetyCheckReviewPanel_(unsafeExtensions_)"},reviewPanelShown_:{type:Boolean,value:false},showMv2DeprecationPanel_:{type:Boolean,computed:"computeShowMv2DeprecationPanel_("+"mv2ExperimentStage_, mv2DeprecatedExtensions_, "+"isMv2DeprecationNoticeDismissed)"},hasSafetyCheckTriggeringExtension_:{type:Boolean,computed:"computeHasSafetyCheckTriggeringExtension_(extensions)"}}}getDetailsButton(id){const item=this.shadowRoot.querySelector(`#${id}`);return item&&item.getDetailsButton()}getRemoveButton(id){const item=this.shadowRoot.querySelector(`#${id}`);return item&&item.getRemoveButton()}getErrorsButton(id){const item=this.shadowRoot.querySelector(`#${id}`);return item&&item.getErrorsButton()}focusItemButton(id){const item=this.shadowRoot.querySelector(`#${id}`);if(!item){return false}const buttonToFocus=item.getRemoveButton()||item.getDetailsButton();buttonToFocus.focus();return true}computeFilter_(){const formattedFilter=this.filter.trim().toLowerCase();if(!formattedFilter){return null}return i=>[i.name,i.id].some((s=>s.toLowerCase().includes(formattedFilter)))}computeMv2DeprecatedExtensions_(){return this.extensions.filter((extension=>{switch(this.mv2ExperimentStage_){case Mv2ExperimentStage.NONE:return false;case Mv2ExperimentStage.WARNING:return extension.isAffectedByMV2Deprecation&&!extension.didAcknowledgeMV2DeprecationNotice;case Mv2ExperimentStage.DISABLE_WITH_REENABLE:return extension.isAffectedByMV2Deprecation&&extension.disableReasons.unsupportedManifestVersion&&!extension.didAcknowledgeMV2DeprecationNotice}}))}computeUnsafeExtensions_(){return this.extensions?.filter((extension=>!!(extension.safetyCheckText&&extension.safetyCheckText.panelString)))}computeShowSafetyCheckReviewPanel_(){if(!loadTimeData.getBoolean("safetyCheckShowReviewPanel")&&!loadTimeData.getBoolean("safetyHubShowReviewPanel")){return false}if(this.unsafeExtensions_?.length!==0){this.reviewPanelShown_=true}return this.unsafeExtensions_?.length!==0||this.reviewPanelShown_}computeHasSafetyCheckTriggeringExtension_(){if(!this.extensions){return false}for(const extension of this.extensions){if(!!extension.safetyCheckText&&!!extension.safetyCheckText.panelString&&this.showSafetyCheckReviewPanel_){return true}}return false}computeShowMv2DeprecationPanel_(){switch(this.mv2ExperimentStage_){case Mv2ExperimentStage.NONE:return false;case Mv2ExperimentStage.WARNING:case Mv2ExperimentStage.DISABLE_WITH_REENABLE:return!this.isMv2DeprecationNoticeDismissed&&this.mv2DeprecatedExtensions_?.length!==0}}shouldShowEmptyItemsMessage_(){if(!this.apps||!this.extensions){return}return this.apps.length===0&&this.extensions.length===0}shouldShowEmptySearchMessage_(){return!this.shouldShowEmptyItemsMessage_()&&this.shownAppsCount_===0&&this.shownExtensionsCount_===0}onNoExtensionsClick_(e){if(e.target.tagName==="A"){chrome.metricsPrivate.recordUserAction("Options_GetMoreExtensions")}}announceSearchResults_(){if(this.computedFilter_){setTimeout((()=>{const total=this.shownAppsCount_+this.shownExtensionsCount_;getInstance().announce(this.shouldShowEmptySearchMessage_()?this.i18n("noSearchResults"):total===1?this.i18n("searchResultsSingular",this.filter):this.i18n("searchResultsPlural",total.toString(),this.filter))}),0)}}}customElements.define(ExtensionsItemListElement.is,ExtensionsItemListElement);function getTemplate$d(){return html$1`<!--_html_template_start_--><style include="cr-icons cr-hidden-style">#main{position:relative;width:200px}#clear{--cr-icon-button-size:28px;position:absolute;right:2px}#input{--cr-input-readonly-opacity:1}:host-context([dir=rtl]) #clear{left:-2px;right:inherit}</style>
<div id="main">
    <cr-input id="input" readonly="[[readonly_]]" aria-label="[[computeInputAriaLabel_(item, command)]]" placeholder="[[computePlaceholder_(readonly_)]]" invalid="[[getIsInvalid_(error_)]]" error-message="[[getErrorString_(error_,
          'Include Ctrl\\, Alt\\, or Search',
          'Invalid combination',
          'Type a letter')]]" value="[[computeText_(shortcut)]]">
    <cr-icon-button id="edit" title="Edit" aria-label="[[computeEditButtonAriaLabel_(item, command)]]" slot="suffix" class="icon-edit no-overlap" on-click="onEditClick_"></cr-icon-button>
  </cr-input>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Key;(function(Key){Key[Key["COMMA"]=188]="COMMA";Key[Key["DEL"]=46]="DEL";Key[Key["DOWN"]=40]="DOWN";Key[Key["END"]=35]="END";Key[Key["ESCAPE"]=27]="ESCAPE";Key[Key["HOME"]=36]="HOME";Key[Key["INS"]=45]="INS";Key[Key["LEFT"]=37]="LEFT";Key[Key["MEDIA_NEXT_TRACK"]=176]="MEDIA_NEXT_TRACK";Key[Key["MEDIA_PLAY_PAUSE"]=179]="MEDIA_PLAY_PAUSE";Key[Key["MEDIA_PREV_TRACK"]=177]="MEDIA_PREV_TRACK";Key[Key["MEDIA_STOP"]=178]="MEDIA_STOP";Key[Key["PAGE_DOWN"]=34]="PAGE_DOWN";Key[Key["PAGE_UP"]=33]="PAGE_UP";Key[Key["PERIOD"]=190]="PERIOD";Key[Key["RIGHT"]=39]="RIGHT";Key[Key["SPACE"]=32]="SPACE";Key[Key["TAB"]=9]="TAB";Key[Key["UP"]=38]="UP"})(Key||(Key={}));var ModifierPolicy;(function(ModifierPolicy){ModifierPolicy[ModifierPolicy["NOT_ALLOWED"]=0]="NOT_ALLOWED";ModifierPolicy[ModifierPolicy["REQUIRED"]=1]="REQUIRED"})(ModifierPolicy||(ModifierPolicy={}));function getModifierPolicy(keyCode){switch(keyCode){case Key.MEDIA_NEXT_TRACK:case Key.MEDIA_PLAY_PAUSE:case Key.MEDIA_PREV_TRACK:case Key.MEDIA_STOP:return ModifierPolicy.NOT_ALLOWED;default:return ModifierPolicy.REQUIRED}}function hasModifier(e,countShiftAsModifier){return e.ctrlKey||e.altKey||isMac&&e.metaKey||isChromeOS&&e.metaKey||countShiftAsModifier&&e.shiftKey}function isValidKeyCode(keyCode){if(keyCode===Key.ESCAPE){return false}for(const k in Key){if(Key[k]===keyCode){return true}}return keyCode>="A".charCodeAt(0)&&keyCode<="Z".charCodeAt(0)||keyCode>="0".charCodeAt(0)&&keyCode<="9".charCodeAt(0)}function keystrokeToString(e){const output=[];if(isMac&&e.metaKey){output.push("Command")}if(isChromeOS&&e.metaKey){output.push("Search")}if(e.ctrlKey){output.push("Ctrl")}if(!e.ctrlKey&&e.altKey){output.push("Alt")}if(e.shiftKey){output.push("Shift")}const keyCode=e.keyCode;if(isValidKeyCode(keyCode)){if(keyCode>="A".charCodeAt(0)&&keyCode<="Z".charCodeAt(0)||keyCode>="0".charCodeAt(0)&&keyCode<="9".charCodeAt(0)){output.push(String.fromCharCode(keyCode))}else{switch(keyCode){case Key.COMMA:output.push("Comma");break;case Key.DEL:output.push("Delete");break;case Key.DOWN:output.push("Down");break;case Key.END:output.push("End");break;case Key.HOME:output.push("Home");break;case Key.INS:output.push("Insert");break;case Key.LEFT:output.push("Left");break;case Key.MEDIA_NEXT_TRACK:output.push("MediaNextTrack");break;case Key.MEDIA_PLAY_PAUSE:output.push("MediaPlayPause");break;case Key.MEDIA_PREV_TRACK:output.push("MediaPrevTrack");break;case Key.MEDIA_STOP:output.push("MediaStop");break;case Key.PAGE_DOWN:output.push("PageDown");break;case Key.PAGE_UP:output.push("PageUp");break;case Key.PERIOD:output.push("Period");break;case Key.RIGHT:output.push("Right");break;case Key.SPACE:output.push("Space");break;case Key.TAB:output.push("Tab");break;case Key.UP:output.push("Up");break}}}return output.join("+")}function hasValidModifiers(e){switch(getModifierPolicy(e.keyCode)){case ModifierPolicy.REQUIRED:return hasModifier(e,false);case ModifierPolicy.NOT_ALLOWED:return!hasModifier(e,true);default:assertNotReached()}}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ShortcutError;(function(ShortcutError){ShortcutError[ShortcutError["NO_ERROR"]=0]="NO_ERROR";ShortcutError[ShortcutError["INCLUDE_START_MODIFIER"]=1]="INCLUDE_START_MODIFIER";ShortcutError[ShortcutError["TOO_MANY_MODIFIERS"]=2]="TOO_MANY_MODIFIERS";ShortcutError[ShortcutError["NEED_CHARACTER"]=3]="NEED_CHARACTER"})(ShortcutError||(ShortcutError={}));const ExtensionsShortcutInputElementBase=I18nMixin(PolymerElement);class ExtensionsShortcutInputElement extends ExtensionsShortcutInputElementBase{static get is(){return"extensions-shortcut-input"}static get template(){return getTemplate$d()}static get properties(){return{delegate:Object,item:Object,command:Object,shortcut:{type:String,value:""},capturing_:{type:Boolean,value:false},error_:{type:Number,value:ShortcutError.NO_ERROR},readonly_:{type:Boolean,value:true,reflectToAttribute:true},pendingShortcut_:{type:String,value:""}}}ready(){super.ready();const node=this.$.input;node.addEventListener("mouseup",this.startCapture_.bind(this));node.addEventListener("blur",this.endCapture_.bind(this));node.addEventListener("focus",this.startCapture_.bind(this));node.addEventListener("keydown",this.onKeyDown_.bind(this));node.addEventListener("keyup",this.onKeyUp_.bind(this))}startCapture_(){if(this.capturing_||this.readonly_){return}this.capturing_=true;this.delegate.setShortcutHandlingSuspended(true)}endCapture_(){if(!this.capturing_){return}this.pendingShortcut_="";this.capturing_=false;this.$.input.blur();this.error_=ShortcutError.NO_ERROR;this.delegate.setShortcutHandlingSuspended(false);this.readonly_=true}clearShortcut_(){this.pendingShortcut_="";this.shortcut="";this.commitPending_();this.endCapture_()}onKeyDown_(e){if(this.readonly_){return}if(e.target===this.$.edit){return}if(e.keyCode===Key.ESCAPE){if(!this.capturing_){return}this.endCapture_();e.preventDefault();e.stopPropagation();return}if(e.keyCode===Key.TAB){return}if(!this.capturing_){this.startCapture_()}this.handleKey_(e)}onKeyUp_(e){if(this.readonly_){return}if(e.target===this.$.edit||e.key==="Enter"){return}if(e.keyCode===Key.ESCAPE||e.keyCode===Key.TAB){return}this.handleKey_(e)}getErrorString_(_error,includeStartModifier,tooManyModifiers,needCharacter){switch(this.error_){case ShortcutError.INCLUDE_START_MODIFIER:return includeStartModifier;case ShortcutError.TOO_MANY_MODIFIERS:return tooManyModifiers;case ShortcutError.NEED_CHARACTER:return needCharacter;default:assert(this.error_===ShortcutError.NO_ERROR);return""}}handleKey_(e){e.preventDefault();e.stopPropagation();if(e.ctrlKey&&e.altKey){this.error_=ShortcutError.TOO_MANY_MODIFIERS;return}if(!hasValidModifiers(e)){this.pendingShortcut_="";this.error_=ShortcutError.INCLUDE_START_MODIFIER;return}this.pendingShortcut_=keystrokeToString(e);if(!isValidKeyCode(e.keyCode)){this.error_=ShortcutError.NEED_CHARACTER;return}this.error_=ShortcutError.NO_ERROR;getInstance().announce(this.i18n("shortcutSet",this.computeText_()));this.commitPending_();this.endCapture_()}commitPending_(){this.shortcut=this.pendingShortcut_;this.delegate.updateExtensionCommandKeybinding(this.item.id,this.command.name,this.shortcut)}computeInputAriaLabel_(){return this.i18n("editShortcutInputLabel",this.command.description,this.item.name)}computeEditButtonAriaLabel_(){return this.i18n("editShortcutButtonLabel",this.command.description,this.item.name)}computePlaceholder_(){if(this.readonly_){return this.shortcut?this.i18n("shortcutSet",this.computeText_()):this.i18n("shortcutNotSet")}return this.i18n("shortcutTypeAShortcut")}computeText_(){const shortcutString=this.capturing_?this.pendingShortcut_:this.shortcut;return shortcutString.split("+").join(" + ")}getIsInvalid_(){return this.error_!==ShortcutError.NO_ERROR}onEditClick_(){this.clearShortcut_();this.readonly_=false;this.$.input.focus()}}customElements.define(ExtensionsShortcutInputElement.is,ExtensionsShortcutInputElement);function getTemplate$c(){return html$1`<!--_html_template_start_--><style include="md-select cr-shared-style">:host{height:100%}.shortcut-card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto 16px auto;padding-bottom:8px;width:var(--cr-toolbar-field-width)}.shortcut-card:last-of-type{margin-bottom:64px}#container{box-sizing:border-box;height:100%;padding-top:24px}.command-entry{align-items:start;display:flex;margin-bottom:-8px;padding-top:16px}.command-name{flex:1;margin-top:6px}.command-entry .md-select{line-height:22px;margin-inline-start:var(--cr-section-padding)}.card-title{align-items:center;border-bottom:var(--cr-separator-line);display:flex;margin-bottom:9px;padding:16px var(--cr-section-padding)}.icon{height:20px;margin-inline-end:20px;width:20px}.card-controls{margin-inline-end:20px;margin-inline-start:60px}</style>
<div id="container">
  <template is="dom-repeat" items="[[calculateShownItems_(items.*)]]">
    <div class="shortcut-card">
      <div class="card-title cr-title-text">
        <img class="icon" src="[[item.iconUrl]]" alt="">
        <span role="heading" aria-level="2">[[item.name]]</span>
      </div>
      <div class="card-controls">
        <template is="dom-repeat" items="[[item.commands]]" as="command">
          <div class="command-entry" command="[[command]]">
            <span class="command-name">[[command.description]]</span>
            <extensions-shortcut-input delegate="[[delegate]]" item="[[item]]" shortcut="[[command.keybinding]]" command="[[command]]">
            </extensions-shortcut-input>
            
            <select class="md-select" on-change="onScopeChanged_" aria-label="[[computeScopeAriaLabel_(item, command)]]" disabled$="[[computeScopeDisabled_(command)]]" value="[[
                    triggerScopeChange_(command.scope, CommandScope_)]]">
              <option value$="[[CommandScope_.CHROME]]">
                In Chrome
              </option>
              <option value$="[[CommandScope_.GLOBAL]]">
                Global
              </option>
            </select>
          </div>
        </template>
      </div>
    </div>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsKeyboardShortcutsElementBase=I18nMixin(PolymerElement);class ExtensionsKeyboardShortcutsElement extends ExtensionsKeyboardShortcutsElementBase{static get is(){return"extensions-keyboard-shortcuts"}static get template(){return getTemplate$c()}static get properties(){return{delegate:Object,items:Array,CommandScope_:{type:Object,value:chrome.developerPrivate.CommandScope}}}ready(){super.ready();this.addEventListener("view-enter-start",this.onViewEnter_)}onViewEnter_(){chrome.metricsPrivate.recordUserAction("Options_ExtensionCommands")}calculateShownItems_(){return this.items.filter((function(item){return item.commands.length>0}))}hasKeybinding_(keybinding){return!!keybinding}computeScopeAriaLabel_(item,command){return this.i18n("shortcutScopeLabel",command.description,item.name)}computeScopeDisabled_(command){return command.isExtensionAction||!command.isActive}triggerScopeChange_(scope){return scope}onCloseButtonClick_(){this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onScopeChanged_(event){this.delegate.updateExtensionCommandScope(event.model.get("item.id"),event.model.get("command.name"),event.target.value)}}customElements.define(ExtensionsKeyboardShortcutsElement.is,ExtensionsKeyboardShortcutsElement);function getTemplate$b(){return html$1`<!--_html_template_start_--><style include="cr-shared-style">.description-row{display:flex}.row-label{display:block;width:104px}paper-spinner-lite{margin-inline-end:8px}</style>
<cr-dialog id="dialog" close-text="Close">
  <div slot="title">Failed to load extension</div>
  <div slot="body">
    <div id="info">
      <div id="file" class="description-row" hidden$="[[!file_]]">
        <span class="row-label">File</span>
        <span class="row-value">[[file_]]</span>
      </div>
      <div id="error" class="description-row">
        <span class="row-label">Error</span>
        <span class="row-value">[[error_]]</span>
      </div>
    </div>
    <extensions-code-section id="code" could-not-display-code="Could not load manifest.">
    </extensions-code-section>
  </div>
  <div slot="button-container">
    <paper-spinner-lite active="[[retrying_]]"></paper-spinner-lite>
    <cr-button class="cancel-button" on-click="close">
      Cancel
    </cr-button>
    <cr-button class="action-button" disabled="[[retrying_]]" on-click="onRetryClick_">
      Retry
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsLoadErrorElement extends PolymerElement{static get is(){return"extensions-load-error"}static get template(){return getTemplate$b()}static get properties(){return{delegate:Object,loadError:Object,file_:{type:String,value:null},error_:{type:String,value:null},retrying_:Boolean}}static get observers(){return["observeLoadErrorChanges_(loadError)"]}show(){this.$.dialog.showModal()}close(){this.$.dialog.close()}onRetryClick_(){this.retrying_=true;this.delegate.retryLoadUnpacked(this.loadError instanceof Error?undefined:this.loadError.retryGuid).then((()=>{this.close()}),(loadError=>{this.loadError=loadError;this.retrying_=false}))}observeLoadErrorChanges_(){assert(this.loadError);if(this.loadError instanceof Error){this.file_=undefined;this.error_=this.loadError.message;this.$.code.isActive=false;return}this.file_=this.loadError.path;this.error_=this.loadError.error;const source=this.loadError.source;const codeSectionProperties={beforeHighlight:source?source.beforeHighlight:"",highlight:source?source.highlight:"",afterHighlight:source?source.afterHighlight:"",title:"",message:this.loadError.error};this.$.code.code=codeSectionProperties;this.$.code.isActive=true}}customElements.define(ExtensionsLoadErrorElement.is,ExtensionsLoadErrorElement);function getTemplate$a(){return html$1`<!--_html_template_start_--><style>#icon{height:32px;margin-inline-end:10px;width:32px}#icon-and-name-wrapper{align-items:center;display:flex}ExtensionOptions{display:block;height:100%;overflow:hidden}cr-dialog::part(dialog){height:var(--dialog-height);opacity:var(--dialog-opacity,0);transition:opacity .1s ease .1s;width:var(--dialog-width)}cr-dialog::part(wrapper){height:100%;max-height:initial;overflow:hidden}cr-dialog #body{height:100%;padding:0}cr-dialog{--cr-dialog-body-border-bottom:none;--cr-dialog-body-border-top:none;--scroll-border:none}cr-dialog::part(body-container){height:100%;min-height:initial}</style>

<cr-dialog id="dialog" close-text="Close" on-close="onClose_" show-close-button>
  <div slot="title">
    <div id="icon-and-name-wrapper">
      <img id="icon" src="[[data_.iconUrl]]" alt="">
      <span>[[data_.name]]</span>
    </div>
  </div>
  <div slot="body" id="body">
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function whenDocumentReady(){if(document.readyState==="complete"){return Promise.resolve()}return new Promise((function(resolve){document.addEventListener("readystatechange",(function f(){if(document.readyState==="complete"){document.removeEventListener("readystatechange",f);resolve()}}))}))}const OptionsDialogMinWidth=400;const OptionsDialogMaxHeight=640;class ExtensionsOptionsDialogElement extends PolymerElement{constructor(){super(...arguments);this.preferredSize_=null;this.debouncer_=null;this.eventTracker_=new EventTracker}static get is(){return"extensions-options-dialog"}static get template(){return getTemplate$a()}static get properties(){return{extensionOptions_:Object,data_:Object}}get open(){return this.$.dialog.open}updateDialogSize_(){let headerHeight=this.$.body.offsetTop;if(this.$.body.assignedSlot&&this.$.body.assignedSlot.parentElement){headerHeight=this.$.body.assignedSlot.parentElement.offsetTop}const maxHeight=Math.min(.9*window.innerHeight,OptionsDialogMaxHeight);const effectiveHeight=Math.min(maxHeight,headerHeight+this.preferredSize_.height);const effectiveWidth=Math.max(OptionsDialogMinWidth,this.preferredSize_.width);this.$.dialog.style.setProperty("--dialog-height",`${effectiveHeight}px`);this.$.dialog.style.setProperty("--dialog-width",`${effectiveWidth}px`);this.$.dialog.style.setProperty("--dialog-opacity","1")}show(data){this.data_=data;whenDocumentReady().then((()=>{if(!this.extensionOptions_){this.extensionOptions_=document.createElement("ExtensionOptions")}this.extensionOptions_.extension=this.data_.id;this.extensionOptions_.onclose=()=>this.$.dialog.close();const boundUpdateDialogSize=this.updateDialogSize_.bind(this);this.extensionOptions_.onpreferredsizechanged=e=>{if(!this.$.dialog.open){this.$.dialog.showModal()}this.preferredSize_=e;this.debouncer_=Debouncer.debounce(this.debouncer_,timeOut.after(50),boundUpdateDialogSize)};this.eventTracker_.add(window,"resize",boundUpdateDialogSize);this.$.body.appendChild(this.extensionOptions_)}))}onClose_(){this.extensionOptions_.onpreferredsizechanged=null;this.eventTracker_.removeAll();const currentPage=navigation.getCurrentPage();if(currentPage&&currentPage.page===Page.DETAILS){navigation.navigateTo({page:Page.DETAILS,extensionId:currentPage.extensionId})}}}customElements.define(ExtensionsOptionsDialogElement.is,ExtensionsOptionsDialogElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1(){return html`<slot></slot>`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorBase=CrSelectableMixin(CrLitElement);class CrMenuSelector extends CrMenuSelectorBase{static get is(){return"cr-menu-selector"}render(){return getHtml$1.bind(this)()}connectedCallback(){super.connectedCallback();FocusOutlineManager.forDocument(document)}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.setAttribute("role","menu");this.addEventListener("focusin",this.onFocusin_.bind(this));this.addEventListener("keydown",this.onKeydown_.bind(this));this.addEventListener("iron-deselect",(e=>this.onIronDeselected_(e)));this.addEventListener("iron-select",(e=>this.onIronSelected_(e)))}getAllFocusableItems_(){return Array.from(this.querySelectorAll("[role=menuitem]:not([disabled]):not([hidden])"))}onFocusin_(e){const focusMovedWithKeyboard=FocusOutlineManager.forDocument(document).visible;const focusMovedFromOutside=e.relatedTarget===null||!this.contains(e.relatedTarget);if(focusMovedWithKeyboard&&focusMovedFromOutside){this.getAllFocusableItems_()[0].focus()}}onIronDeselected_(e){e.detail.item.removeAttribute("aria-current")}onIronSelected_(e){e.detail.item.setAttribute("aria-current","page")}onKeydown_(event){const items=this.getAllFocusableItems_();assert(items.length>=1);const currentFocusedIndex=items.indexOf(this.querySelector(":focus"));let newFocusedIndex=currentFocusedIndex;switch(event.key){case"Tab":if(event.shiftKey){items[0].focus()}else{items[items.length-1].focus({preventScroll:true})}return;case"ArrowDown":newFocusedIndex=(currentFocusedIndex+1)%items.length;break;case"ArrowUp":newFocusedIndex=(currentFocusedIndex+items.length-1)%items.length;break;case"Home":newFocusedIndex=0;break;case"End":newFocusedIndex=items.length-1;break}if(newFocusedIndex===currentFocusedIndex){return}event.preventDefault();items[newFocusedIndex].focus()}}customElements.define(CrMenuSelector.is,CrMenuSelector);const styleMod=document.createElement("dom-module");styleMod.appendChild(html$1`
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item cr-icon,.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);styleMod.register("cr-nav-menu-item-style");function getTemplate$9(){return html$1`<!--_html_template_start_--><style include="cr-icons cr-hidden-style cr-nav-menu-item-style
cr-shared-style">:host{--sidebar-inactive-color:#5a5a5a;color:var(--sidebar-inactive-color);display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;width:var(--sidebar-width)}@media (prefers-color-scheme:dark){:host{--sidebar-inactive-color:var(--cr-primary-text-color)}}#sectionMenu{padding-top:8px}.separator{border-top:var(--cr-separator-line);margin:8px 0}#moreExtensions{align-items:center;display:flex;margin-bottom:8px}#web-store-icon{--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:18px;margin-inline-start:-2px}#discover-more-text{line-height:19px;margin-inline-end:10px}#discover-more-text a{color:var(--cr-link-color)}</style>
<cr-menu-selector id="sectionMenu" selected-attribute="selected" attr-for-selected="data-path" selected="[[selectedPath_]]">
  
  <a role="menuitem" class="cr-nav-menu-item" id="sectionsExtensions" href="/" on-click="onLinkClick_" data-path="items-list">
    <cr-icon icon="extensions-icons:my_extensions"></cr-icon>
    My extensions
    <cr-ripple></cr-ripple>
  </a>
  <a role="menuitem" class="cr-nav-menu-item" id="sectionsSitePermissions" hidden="[[!enableEnhancedSiteControls]]" href="/sitePermissions" on-click="onLinkClick_" data-path="site-permissions">
    <cr-icon icon="extensions-icons:site_permissions"></cr-icon>
    Site permissions
    <cr-ripple></cr-ripple>
  </a>
  <a role="menuitem" class="cr-nav-menu-item" id="sectionsShortcuts" href="/shortcuts" on-click="onLinkClick_" data-path="keyboard-shortcuts">
    <cr-icon icon="extensions-icons:keyboard_shortcuts"></cr-icon>
    Keyboard shortcuts
    <cr-ripple></cr-ripple>
  </a>
</cr-menu-selector>
<div class="separator"></div>
<div class="cr-nav-menu-item" id="moreExtensions">
  <cr-icon id="web-store-icon" icon="extensions-icons:web_store">
  </cr-icon>
  <span id="discover-more-text" class="cr-secondary-text" on-click="onMoreExtensionsClick_" inner-h-t-m-l="[[discoverMoreText_]]"></span>
  <cr-ripple></cr-ripple>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsSidebarElementBase=I18nMixin(PolymerElement);class ExtensionsSidebarElement extends ExtensionsSidebarElementBase{constructor(){super(...arguments);this.navigationListener_=null}static get is(){return"extensions-sidebar"}static get template(){return getTemplate$9()}static get properties(){return{enableEnhancedSiteControls:Boolean,selectedPath_:String,discoverMoreText_:{type:String,computed:"computeDiscoverMoreText_()"}}}ready(){super.ready();this.setAttribute("role","navigation");this.computeSelectedPath_(navigation.getCurrentPage().page)}connectedCallback(){super.connectedCallback();this.navigationListener_=navigation.addListener((newPage=>{this.computeSelectedPath_(newPage.page)}))}disconnectedCallback(){super.disconnectedCallback();assert(this.navigationListener_);assert(navigation.removeListener(this.navigationListener_));this.navigationListener_=null}computeSelectedPath_(page){switch(page){case Page.SITE_PERMISSIONS:case Page.SITE_PERMISSIONS_ALL_SITES:this.selectedPath_=Page.SITE_PERMISSIONS;break;case Page.SHORTCUTS:this.selectedPath_=Page.SHORTCUTS;break;default:this.selectedPath_=Page.LIST}}onLinkClick_(e){e.preventDefault();navigation.navigateTo({page:e.target.dataset["path"]});this.dispatchEvent(new CustomEvent("close-drawer",{bubbles:true,composed:true}))}onMoreExtensionsClick_(e){if(e.target.tagName==="A"){chrome.metricsPrivate.recordUserAction("Options_GetMoreExtensions")}}computeDiscoverMoreText_(){return this.i18nAdvanced("sidebarDiscoverMore",{tags:["a"],attrs:["target"],substitutions:[loadTimeData.getString("getMoreExtensionsUrl")]})}}customElements.define(ExtensionsSidebarElement.is,ExtensionsSidebarElement);function getTemplate$8(){return html$1`<!--_html_template_start_--><style include="cr-shared-style md-select">:host{--radio-group-height:132px;--dialog-height:360px}#dialog-title{display:flex;flex-direction:column;gap:8px}#title-subtext{color:var(--cr-secondary-text-color);font-size:81.25%}cr-radio-group{padding-inline:8px}.site-access-list{max-height:var(--dialog-height)}.indented-site-access-list{margin-inline-start:36px;max-height:calc(var(--dialog-height) - var(--radio-group-height))}.extension-row{--md-select-width:180px;align-items:center;border-top:var(--cr-separator-line);display:flex;height:32px;padding:12px 0}.extension-row:first-child{border-top:none}.extension-icon{height:24px;margin-inline-end:12px;width:24px}.extension-name{flex-grow:1;margin-inline-end:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="dialog-title">
    <div>Edit site permissions</div>
    <div id="title-subtext">
      <span id="site">[[getSiteWithoutSubdomainSpecifier_(site)]]</span>
      <span id="includesSubdomains" hidden$="[[!matchesSubdomains_(site)]]">
        - includes subdomains
      </span>
    </div>
  </div>
  <div slot="header">
    
    <template is="dom-if" if="[[!matchesSubdomains_(site)]]">
      <cr-radio-group selected="{{siteSet_}}">
        <cr-radio-button hidden="[[!showPermittedOption_]]" name="[[siteSetEnum_.USER_PERMITTED]]" label="[[getPermittedSiteLabel_(site)]]">
        </cr-radio-button>
        <cr-radio-button name="[[siteSetEnum_.USER_RESTRICTED]]" label="[[getRestrictedSiteLabel_(site)]]">
        </cr-radio-button>
        <cr-radio-button name="[[siteSetEnum_.EXTENSION_SPECIFIED]]" label="Customize for each extension">
        </cr-radio-button>
      </cr-radio-group>
    </template>
  </div>
  <div slot="body">
    <template is="dom-if" if="[[showExtensionSiteAccessData_(siteSet_)]]">
      <div class$="[[getDialogBodyContainerClass_(site)]]">
        <template is="dom-repeat" items="[[extensionSiteAccessData_]]">
          <div class="extension-row">
            <img class="extension-icon" src="[[item.iconUrl]]" alt="">
            <span class="extension-name">[[item.name]]</span>
            <select class="extension-host-access md-select" disabled="[[item.addedByPolicy]]" on-change="onHostAccessChange_" value="[[getExtensionHostAccess_(item.id, item.siteAccess)]]">
              <option value="[[hostAccessEnum_.ON_CLICK]]">
                Ask on every visit
              </option>
              <option value="[[hostAccessEnum_.ON_SPECIFIC_SITES]]">
                Always on this site
              </option>
              <option value="[[hostAccessEnum_.ON_ALL_SITES]]" disabled="[[!item.canRequestAllSites]]">
                Always on all sites
              </option>
            </select>
          </div>
        </template>
      </div>
    </template>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <cr-button class="action-button" id="submit" on-click="onSubmitClick_">
      Save
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EXTENSION_SPECIFIED=chrome.developerPrivate.SiteSet.EXTENSION_SPECIFIED;const VALID_SCHEMES=["*","http","https","file","ftp","chrome","chrome-extension","filesystem","ftp","ws","wss","data","uuid-in-package"];const SitePermissionsEditPermissionsDialogElementBase=I18nMixin(PolymerElement);class SitePermissionsEditPermissionsDialogElement extends SitePermissionsEditPermissionsDialogElementBase{static get is(){return"site-permissions-edit-permissions-dialog"}static get template(){return getTemplate$8()}static get properties(){return{delegate:Object,extensions:{type:Array,value:()=>[],observer:"onExtensionsUpdated_"},originalSiteSet:String,site:String,siteSet_:{type:String,observer:"onSiteSetUpdated_"},siteSetEnum_:{type:Object,value:chrome.developerPrivate.SiteSet},extensionSiteAccessData_:{type:Array,value:()=>[]},showPermittedOption_:{type:Boolean,value:()=>loadTimeData.getBoolean("enableUserPermittedSites")},hostAccessEnum_:{type:Object,value:chrome.developerPrivate.HostAccess}}}constructor(){super();this.unsavedExtensionsIdToHostAccess_=new Map}ready(){super.ready();this.siteSet_=this.originalSiteSet;assert(!this.matchesSubdomains_()||this.originalSiteSet===EXTENSION_SPECIFIED)}onExtensionsUpdated_(extensions){this.extensionsIdToInfo_=new Map;for(const extension of extensions){this.extensionsIdToInfo_.set(extension.id,extension)}this.updateExtensionSiteAccessData_(this.siteSet_)}onSiteSetUpdated_(siteSet){this.updateExtensionSiteAccessData_(siteSet)}isSiteHostOnly_(){return!VALID_SCHEMES.some((scheme=>this.site.startsWith(`${scheme}://`)))}async updateExtensionSiteAccessData_(siteSet){if(siteSet!==EXTENSION_SPECIFIED){return}const siteToCheck=this.isSiteHostOnly_()?`*://${this.site}/`:`${this.site}/`;const matchingExtensionsInfo=await this.delegate.getMatchingExtensionsForSite(siteToCheck);const extensionSiteAccessData=[];matchingExtensionsInfo.forEach((({id:id,siteAccess:siteAccess,canRequestAllSites:canRequestAllSites})=>{assert(this.extensionsIdToInfo_.has(id));const{name:name,iconUrl:iconUrl}=this.extensionsIdToInfo_.get(id);const addedByPolicy=getItemSource(this.extensionsIdToInfo_.get(id))===SourceType.POLICY;extensionSiteAccessData.push({id:id,name:name,iconUrl:iconUrl,siteAccess:siteAccess,addedByPolicy:addedByPolicy,canRequestAllSites:canRequestAllSites});if(this.unsavedExtensionsIdToHostAccess_.get(id)===siteAccess){this.unsavedExtensionsIdToHostAccess_.delete(id)}}));for(const extensionId of this.unsavedExtensionsIdToHostAccess_.keys()){if(!this.extensionsIdToInfo_.has(extensionId)){this.unsavedExtensionsIdToHostAccess_.delete(extensionId)}}this.extensionSiteAccessData_=extensionSiteAccessData}onCancelClick_(){this.$.dialog.cancel()}async onSubmitClick_(){if(this.siteSet_!==this.originalSiteSet){const sitesToChange=this.isSiteHostOnly_()?[`http://${this.site}`,`https://${this.site}`]:[this.site];if(this.siteSet_===EXTENSION_SPECIFIED){await this.delegate.removeUserSpecifiedSites(this.originalSiteSet,sitesToChange)}else{await this.delegate.addUserSpecifiedSites(this.siteSet_,sitesToChange)}}if(this.siteSet_===EXTENSION_SPECIFIED&&this.unsavedExtensionsIdToHostAccess_.size){const updates=[];this.unsavedExtensionsIdToHostAccess_.forEach(((val,key)=>{updates.push({id:key,siteAccess:val})}));const siteToUpdate=this.isSiteHostOnly_()?`*://${this.site}/`:`${this.site}/`;await this.delegate.updateSiteAccess(siteToUpdate,updates)}this.$.dialog.close()}getSiteWithoutSubdomainSpecifier_(){return this.site.replace(SUBDOMAIN_SPECIFIER,"")}getPermittedSiteLabel_(){return this.i18n("editSitePermissionsAllowAllExtensions",this.site)}getRestrictedSiteLabel_(){return this.i18n("editSitePermissionsRestrictExtensions",this.site)}matchesSubdomains_(){return matchesSubdomains(this.site)}showExtensionSiteAccessData_(){return this.siteSet_===EXTENSION_SPECIFIED}getDialogBodyContainerClass_(){return this.matchesSubdomains_()?"site-access-list":"indented-site-access-list"}getExtensionHostAccess_(extensionId,originalSiteAccess){return this.unsavedExtensionsIdToHostAccess_.get(extensionId)||originalSiteAccess}onHostAccessChange_(e){const selectMenu=this.shadowRoot.querySelectorAll(".extension-host-access")[e.model.index];assert(selectMenu);const originalSiteAccess=e.model.item.siteAccess;const newSiteAccess=selectMenu.value;assert(e.model.item.canRequestAllSites||newSiteAccess!==chrome.developerPrivate.HostAccess.ON_ALL_SITES);if(originalSiteAccess===newSiteAccess){this.unsavedExtensionsIdToHostAccess_.delete(e.model.item.id)}else{this.unsavedExtensionsIdToHostAccess_.set(e.model.item.id,newSiteAccess)}}}customElements.define(SitePermissionsEditPermissionsDialogElement.is,SitePermissionsEditPermissionsDialogElement);function getTemplate$7(){return html$1`<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style">#site-list-header-container{align-items:center;display:flex;justify-content:space-between}#no-sites{color:var(--cr-secondary-text-color);margin:var(--cr-section-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height);margin-inline-start:24px}#sites-list{margin:12px 0}.site{flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden;text-overflow:ellipsis}.separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}</style>
<div id="site-list-header-container">
  <span>[[header]]</span>
  <cr-button id="addSite" on-click="onAddSiteClick_">Add</cr-button>
</div>
<div id="no-sites" hidden$="[[hasSites_(sites)]]">No sites added</div>
<div id="sites-list" hidden$="[[!hasSites_(sites)]]">
  <template is="dom-repeat" items="[[sites]]">
    <div class="site-row">
      <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item)]]"></div>
      <span class="site">[[item]]</span>
      <cr-icon-button class="icon-more-vert no-overlap" on-click="onDotsClick_">
      </cr-icon-button>
    </div>
  </template>
</div>

<cr-action-menu id="siteActionMenu">
  <button class="dropdown-item" id="edit-site-url" on-click="onEditSiteUrlClick_">
    Edit site URL
  </button>
  <button class="dropdown-item" id="edit-site-permissions" on-click="onEditSitePermissionsClick_">
    Edit site permissions
  </button>
  <button class="dropdown-item" id="remove-site" on-click="onRemoveSiteClick_">
    Remove
  </button>
</cr-action-menu>

<template is="dom-if" if="[[showEditSiteUrlDialog_]]" restamp>
  <site-permissions-edit-url-dialog delegate="[[delegate]]" site-to-edit="[[siteToEdit_]]" site-set="[[siteSet]]" on-close="onEditSiteUrlDialogClose_">
  </site-permissions-edit-url-dialog>
</template>

<template is="dom-if" if="[[showEditSitePermissionsDialog_]]" restamp>
  <site-permissions-edit-permissions-dialog delegate="[[delegate]]" extensions="[[extensions]]" site="[[siteToEdit_]]" original-site-set="[[siteSet]]" on-close="onEditSitePermissionsDialogClose_">
  </site-permissions-edit-permissions-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsSitePermissionsListElement extends PolymerElement{constructor(){super(...arguments);this.siteToEditAnchorElement_=null}static get is(){return"site-permissions-list"}static get template(){return getTemplate$7()}static get properties(){return{delegate:Object,extensions:Array,header:String,siteSet:String,sites:Array,showEditSiteUrlDialog_:{type:Boolean,value:false},showEditSitePermissionsDialog_:{type:Boolean,value:false},siteToEdit_:{type:String,value:null}}}hasSites_(){return!!this.sites.length}getFaviconUrl_(url){return getFaviconUrl(url)}focusOnAnchor_(){assert(this.siteToEditAnchorElement_,"Site Anchor");focusWithoutInk(this.siteToEditAnchorElement_);this.siteToEditAnchorElement_=null}onAddSiteClick_(){assert(!this.showEditSitePermissionsDialog_);this.siteToEdit_=null;this.showEditSiteUrlDialog_=true}onEditSiteUrlDialogClose_(){this.showEditSiteUrlDialog_=false;if(this.siteToEdit_!==null){this.focusOnAnchor_()}this.siteToEdit_=null}onEditSitePermissionsDialogClose_(){this.showEditSitePermissionsDialog_=false;assert(this.siteToEdit_,"Site To Edit");this.focusOnAnchor_();this.siteToEdit_=null}onDotsClick_(e){this.siteToEdit_=e.model.item;assert(!this.showEditSitePermissionsDialog_);this.$.siteActionMenu.showAt(e.target);this.siteToEditAnchorElement_=e.target}onEditSitePermissionsClick_(){this.closeActionMenu_();assert(this.siteToEdit_!==null);this.showEditSitePermissionsDialog_=true}onEditSiteUrlClick_(){this.closeActionMenu_();assert(this.siteToEdit_!==null);this.showEditSiteUrlDialog_=true}onRemoveSiteClick_(){assert(this.siteToEdit_,"Site To Edit");this.delegate.removeUserSpecifiedSites(this.siteSet,[this.siteToEdit_]).then((()=>{this.closeActionMenu_();this.siteToEdit_=null}))}closeActionMenu_(){const menu=this.$.siteActionMenu;assert(menu.open);menu.close()}}customElements.define(ExtensionsSitePermissionsListElement.is,ExtensionsSitePermissionsListElement);function getTemplate$6(){return html$1`<!--_html_template_start_--><style include="cr-shared-style shared-style">#container{box-sizing:border-box}#header{font-size:.88rem;margin:31px auto 16px auto;width:var(--cr-toolbar-field-width)}#site-permissions-container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto;width:var(--cr-toolbar-field-width)}#site-lists{box-sizing:border-box;padding:var(--cr-section-padding) var(--cr-section-padding) 0}cr-link-row{padding-inline-end:28px}</style>
<div class="page-container" id="container">
  <div id="header">Site permissions</div>
  <div id="site-permissions-container">
    <div id="site-lists">
      <template is="dom-if" if="[[showPermittedSites_]]">
        <site-permissions-list delegate="[[delegate]]" extensions="[[extensions]]" header="All extensions allowed" site-set="[[siteSetEnum_.USER_PERMITTED]]" sites="[[permittedSites]]"></site-permissions-list>
      </template>
      <site-permissions-list delegate="[[delegate]]" extensions="[[extensions]]" header="Not allowed to use extensions" site-set="[[siteSetEnum_.USER_RESTRICTED]]" sites="[[restrictedSites]]"></site-permissions-list>
    </div>
    <cr-link-row class="hr" id="allSitesLink" label="See extension permissions for other sites" on-click="onAllSitesLinkClick_">
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsSitePermissionsElementBase=SiteSettingsMixin(PolymerElement);class ExtensionsSitePermissionsElement extends ExtensionsSitePermissionsElementBase{static get is(){return"extensions-site-permissions"}static get template(){return getTemplate$6()}static get properties(){return{extensions:Array,showPermittedSites_:{type:Boolean,value:()=>loadTimeData.getBoolean("enableUserPermittedSites")},siteSetEnum_:{type:Object,value:chrome.developerPrivate.SiteSet}}}onAllSitesLinkClick_(){navigation.navigateTo({page:Page.SITE_PERMISSIONS_ALL_SITES})}}customElements.define(ExtensionsSitePermissionsElement.is,ExtensionsSitePermissionsElement);function getTemplate$5(){return html$1`<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style">#etld-row{align-items:center;display:flex;height:var(--cr-section-two-line-min-height)}.site-and-subtext{display:flex;flex-direction:column;flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden}.site-wrapper{display:flex}.site{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.includes-subdomains{color:var(--cr-secondary-text-color);flex-shrink:0;margin-inline-start:4px}.site-subtext{color:var(--cr-secondary-text-color)}#sites-list{margin-inline-start:var(--cr-section-indent-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height)}</style>
<div id="etld-row" class$="[[getClassForIndex_(listIndex)]]">
  <div class="site-favicon" style$="background-image:[[getEtldOrSiteFaviconUrl_(data)]]"></div>
  <div class="site-and-subtext">
    <div class="site-wrapper">
      <span id="etldOrSite" class="site">[[getDisplayUrl_(data)]]</span>
      <span id="etldOrSiteIncludesSubdomains" class="includes-subdomains" hidden$="[[!etldOrFirstSiteMatchesSubdomains_(data)]]">
        - includes subdomains
      </span>
    </div>
    <span id="etldOrSiteSubtext" class="site-subtext">
      [[getEtldOrSiteSubText_(data)]]
    </span>
  </div>
  <template is="dom-if" if="[[isExpandable_]]">
    <cr-expand-button no-hover id="expand-sites-button" expanded="{{expanded_}}">
    </cr-expand-button>
  </template>
  <template is="dom-if" if="[[!isExpandable_]]">
    <cr-icon-button class="subpage-arrow" id="edit-one-site-button" on-click="onEditSiteClick_">
    </cr-icon-button>
  </template>
</div>
<div id="sites-list" hidden$="[[!expanded_]]">
  <template is="dom-repeat" items="[[data.sites]]">
    <div class="site-row hr">
      <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item.site)]]"></div>
      <div class="site-and-subtext">
        <div class="site-wrapper">
          <span class="site">
            [[getSiteWithoutSubdomainSpecifier_(item.site)]]
          </span>
          <span class="includes-subdomains" hidden$="[[!matchesSubdomains_(item.site)]]">
            - includes subdomains
          </span>
        </div>
        <span class="site-subtext">[[getSiteSubtext_(item)]]</span>
      </div>
      <cr-icon-button class="subpage-arrow" on-click="onEditSiteInListClick_">
      </cr-icon-button>
    </div>
  </template>
</div>

<template is="dom-if" if="[[showEditSitePermissionsDialog_]]" restamp>
  <site-permissions-edit-permissions-dialog delegate="[[delegate]]" extensions="[[extensions]]" site="[[siteToEdit_.site]]" original-site-set="[[siteToEdit_.siteSet]]" on-close="onEditSitePermissionsDialogClose_">
  </site-permissions-edit-permissions-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SitePermissionsSiteGroupElement extends PolymerElement{static get is(){return"site-permissions-site-group"}static get template(){return getTemplate$5()}static get properties(){return{data:Object,delegate:Object,extensions:Array,listIndex:{type:Number,value:-1},expanded_:{type:Boolean,value:false},isExpandable_:{type:Boolean,computed:"computeIsExpandable_(data.sites)"},showEditSitePermissionsDialog_:{type:Boolean,value:false},siteToEdit_:{type:Object,value:null}}}getEtldOrSiteFaviconUrl_(){return getFaviconUrl(this.getDisplayUrl_())}getFaviconUrl_(url){return getFaviconUrl(url)}computeIsExpandable_(){return this.data.sites.length>1}getClassForIndex_(){return this.listIndex>0?"hr":""}getDisplayUrl_(){return this.data.sites.length===1?this.getSiteWithoutSubdomainSpecifier_(this.data.sites[0].site):this.data.etldPlusOne}getEtldOrSiteSubText_(){const siteSet=this.data.sites[0].siteSet;const isSiteSetConsistent=this.data.sites.every((site=>site.siteSet===siteSet));if(!isSiteSetConsistent){return""}if(siteSet===chrome.developerPrivate.SiteSet.USER_PERMITTED){return loadTimeData.getString("permittedSites")}return siteSet===chrome.developerPrivate.SiteSet.USER_RESTRICTED?loadTimeData.getString("restrictedSites"):this.getExtensionCountText_(this.data.numExtensions)}getSiteWithoutSubdomainSpecifier_(site){return site.replace(SUBDOMAIN_SPECIFIER,"")}etldOrFirstSiteMatchesSubdomains_(){const site=this.data.sites.length===1?this.data.sites[0].site:this.data.etldPlusOne;return matchesSubdomains(site)}matchesSubdomains_(site){return matchesSubdomains(site)}getSiteSubtext_(siteInfo){if(siteInfo.numExtensions>0){return this.getExtensionCountText_(siteInfo.numExtensions)}return loadTimeData.getString(siteInfo.siteSet===chrome.developerPrivate.SiteSet.USER_PERMITTED?"permittedSites":"restrictedSites")}getExtensionCountText_(numExtensions){return numExtensions===1?loadTimeData.getString("sitePermissionsAllSitesOneExtension"):loadTimeData.getStringF("sitePermissionsAllSitesExtensionCount",numExtensions)}onEditSiteClick_(){this.siteToEdit_=this.data.sites[0];this.showEditSitePermissionsDialog_=true}onEditSiteInListClick_(e){this.siteToEdit_=e.model.item;this.showEditSitePermissionsDialog_=true}onEditSitePermissionsDialogClose_(){this.showEditSitePermissionsDialog_=false;assert(this.siteToEdit_,"Site To Edit");this.siteToEdit_=null}isUserSpecifiedSite_(siteSet){return siteSet===chrome.developerPrivate.SiteSet.USER_PERMITTED||siteSet===chrome.developerPrivate.SiteSet.USER_RESTRICTED}}customElements.define(SitePermissionsSiteGroupElement.is,SitePermissionsSiteGroupElement);function getTemplate$4(){return html$1`<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style">#container{box-sizing:border-box}.cr-title-text{margin-inline-start:16px}#site-groups{margin:0 var(--cr-section-padding)}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <span class="cr-title-text">All sites</span>
    </div>
    <div id="site-groups">
      <template is="dom-repeat" items="[[siteGroups_]]">
        <site-permissions-site-group data="[[item]]" delegate="[[delegate]]" extensions="[[extensions]]" list-index="[[index]]">
        </site-permissions-site-group>
      </template>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsSitePermissionsBySiteElement extends PolymerElement{static get is(){return"extensions-site-permissions-by-site"}static get template(){return getTemplate$4()}static get properties(){return{delegate:Object,extensions:Array,siteGroups_:{type:Array,value:()=>[]}}}ready(){super.ready();this.refreshUserAndExtensionSites_();this.delegate.getUserSiteSettingsChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this));this.delegate.getItemStateChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this))}refreshUserAndExtensionSites_(){this.delegate.getUserAndExtensionSitesByEtld().then((sites=>{this.siteGroups_=sites}))}onCloseButtonClick_(){navigation.navigateTo({page:Page.SITE_PERMISSIONS})}}customElements.define(ExtensionsSitePermissionsBySiteElement.is,ExtensionsSitePermissionsBySiteElement);function getTemplate$3(){return html$1`<!--_html_template_start_--><style include="cr-shared-style">.body{white-space:pre-wrap;word-break:break-word}</style>

<cr-dialog id="dialog" close-text="Close">
  <div class="title" slot="title">[[title_]]</div>
  
  <div class="body" slot="body">[[model.message]]</div>
  <div class="button-container" slot="button-container">
    <cr-button class$="[[getCancelButtonClass_(confirmLabel_)]]" on-click="onCancelClick_" hidden="[[!cancelLabel_]]">
      [[cancelLabel_]]
    </cr-button>
    <cr-button class="action-button" on-click="onConfirmClick_" hidden="[[!confirmLabel_]]">
      [[confirmLabel_]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsPackDialogAlertElement extends PolymerElement{constructor(){super(...arguments);this.cancelLabel_=null;this.confirmLabel_=""}static get is(){return"extensions-pack-dialog-alert"}static get template(){return getTemplate$3()}static get properties(){return{model:Object,title_:String,message_:String,cancelLabel_:String,confirmLabel_:String}}get returnValue(){return this.$.dialog.getNative().returnValue}ready(){super.ready();this.cancelLabel_=null;this.confirmLabel_=null;switch(this.model.status){case chrome.developerPrivate.PackStatus.WARNING:this.title_=loadTimeData.getString("packDialogWarningTitle");this.cancelLabel_=loadTimeData.getString("cancel");this.confirmLabel_=loadTimeData.getString("packDialogProceedAnyway");break;case chrome.developerPrivate.PackStatus.ERROR:this.title_=loadTimeData.getString("packDialogErrorTitle");this.cancelLabel_=loadTimeData.getString("ok");break;case chrome.developerPrivate.PackStatus.SUCCESS:this.title_=loadTimeData.getString("packDialogTitle");this.cancelLabel_=loadTimeData.getString("ok");break;default:assertNotReached()}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}getCancelButtonClass_(){return this.confirmLabel_?"cancel-button":"action-button"}onCancelClick_(){this.$.dialog.cancel()}onConfirmClick_(){assert(this.model.status===chrome.developerPrivate.PackStatus.WARNING);this.$.dialog.close()}}customElements.define(ExtensionsPackDialogAlertElement.is,ExtensionsPackDialogAlertElement);function getTemplate$2(){return html$1`<!--_html_template_start_--><style include="cr-shared-style">cr-input{margin-top:var(--cr-form-field-bottom-spacing);--cr-input-error-display:none}cr-button[slot=suffix]{margin-inline-start:10px}cr-input{margin-bottom:4px}</style>
<cr-dialog id="dialog" close-text="Close">
  <div slot="title">Pack extension</div>
  <div slot="body">
    <div>Select the root directory of the extension to pack. To update an extension, also select the private key file to reuse.</div>
    <cr-input id="rootDir" label="Extension root directory" value="{{packDirectory_}}" autofocus>
      <cr-button id="rootDirBrowse" on-click="onRootBrowse_" slot="suffix">
        Browse
      </cr-button>
    </cr-input>
    <cr-input id="keyFile" label="Private key file (optional)" value="{{keyFile_}}">
      <cr-button id="keyFileBrowse" on-click="onKeyBrowse_" slot="suffix">
        Browse
      </cr-button>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <cr-button class="action-button" on-click="onConfirmClick_" disabled="[[!packDirectory_]]">
      Pack extension
    </cr-button>
  </div>
</cr-dialog>
<template is="dom-if" if="[[lastResponse_]]" restamp>
  <extensions-pack-dialog-alert model="[[lastResponse_]]" on-close="onAlertClose_">
  </extensions-pack-dialog-alert>
</template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsPackDialogElement extends PolymerElement{static get is(){return"extensions-pack-dialog"}static get template(){return getTemplate$2()}static get properties(){return{delegate:Object,packDirectory_:{type:String,value:""},keyFile_:String,lastResponse_:Object}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onRootBrowse_(){this.delegate.choosePackRootDirectory().then((path=>{if(path){this.set("packDirectory_",path)}}))}onKeyBrowse_(){this.delegate.choosePrivateKeyPath().then((path=>{if(path){this.set("keyFile_",path)}}))}onCancelClick_(){this.$.dialog.cancel()}onConfirmClick_(){this.delegate.packExtension(this.packDirectory_,this.keyFile_,0).then((response=>this.onPackResponse_(response)))}onPackResponse_(response){this.lastResponse_=response}onAlertClose_(e){e.stopPropagation();if(this.lastResponse_.status===chrome.developerPrivate.PackStatus.SUCCESS){this.$.dialog.close();return}if(this.shadowRoot.querySelector("extensions-pack-dialog-alert").returnValue==="success"){this.delegate.packExtension(this.lastResponse_.item_path,this.lastResponse_.pem_path,this.lastResponse_.override_flags).then((response=>this.onPackResponse_(response)))}this.lastResponse_=null}}customElements.define(ExtensionsPackDialogElement.is,ExtensionsPackDialogElement);function getTemplate$1(){return html$1`<!--_html_template_start_--><style include="cr-hidden-style">:host{--border-bottom-height:1px;--button-row-height:calc(2 * var(--padding-top-bottom) +
        var(--cr-button-height));--drawer-transition:0.3s cubic-bezier(.25, .1, .25, 1);--padding-top-bottom:10px}cr-tooltip-icon{margin-inline-end:20px}#devDrawer[expanded] #buttonStrip{top:0}#devDrawer{background:#fff;border-bottom:1px solid var(--google-grey-300);height:0;overflow-x:hidden;overflow-y:auto;position:relative;transition:height var(--drawer-transition)}@media (prefers-color-scheme:dark){#devDrawer{background:0 0;border-bottom-color:var(--cr-separator-color)}}#devDrawer[expanded]{height:calc(var(--button-row-height) + var(--border-bottom-height))}#buttonStrip{margin-inline-end:auto;margin-inline-start:24px;padding:var(--padding-top-bottom) 0;position:absolute;top:calc(var(--button-row-height) * -1);transition:top var(--drawer-transition);user-select:none;width:100%}#buttonStrip cr-button{margin-inline-end:16px}.more-actions{align-items:center;display:flex;justify-content:flex-end;white-space:nowrap}.more-actions span{margin-inline-end:16px}cr-toolbar{--cr-toolbar-center-basis:680px;--cr-toolbar-field-max-width:var(--cr-toolbar-center-basis);--cr-toolbar-field-width:100%;--cr-toolbar-header-white-space:nowrap}</style>
<cr-toolbar id="toolbar" page-name="Extensions" search-prompt="Search extensions" clear-label="Clear search" autofocus menu-label="Main menu" narrow="{{narrow}}" narrow-threshold="1000" show-menu="[[narrow]]">
  <div class="more-actions">
    <span id="devModeLabel">Developer mode</span>
    <cr-tooltip-icon hidden="[[!shouldDisableDevMode_(
        devModeControlledByPolicy, isChildAccount)]]" tooltip-text="[[getTooltipText_(isChildAccount)]]" icon-class="[[getIcon_(isChildAccount)]]" icon-aria-label="[[getTooltipText_(isChildAccount)]]">
    </cr-tooltip-icon>
    <cr-toggle id="devMode" on-change="onDevModeToggleChange_" disabled="[[shouldDisableDevMode_(
            devModeControlledByPolicy, isChildAccount)]]" checked="[[inDevMode]]" aria-labelledby="devModeLabel">
    </cr-toggle>
  </div>
</cr-toolbar>
<template is="dom-if" if="[[showPackDialog_]]" restamp>
  <extensions-pack-dialog delegate="[[delegate]]" on-close="onPackDialogClose_">
  </extensions-pack-dialog>
</template>
<div id="devDrawer" expanded$="[[expanded_]]">
  <div id="buttonStrip">
    <cr-button hidden$="[[!canLoadUnpacked]]" id="loadUnpacked" on-click="onLoadUnpackedClick_">
      Load unpacked
    </cr-button>
    <cr-button id="packExtensions" on-click="onPackClick_">
      Pack extension
    </cr-button>
    <cr-button id="updateNow" on-click="onUpdateNowClick_" title="Update extensions now">
      Update
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsToolbarElementBase=I18nMixin(PolymerElement);class ExtensionsToolbarElement extends ExtensionsToolbarElementBase{static get is(){return"extensions-toolbar"}static get template(){return getTemplate$1()}static get properties(){return{extensions:Array,delegate:Object,inDevMode:{type:Boolean,value:false,observer:"onInDevModeChanged_",reflectToAttribute:true},devModeControlledByPolicy:Boolean,isChildAccount:Boolean,narrow:{type:Boolean,notify:true},canLoadUnpacked:Boolean,expanded_:Boolean,showPackDialog_:Boolean,isUpdating_:{type:Boolean,value:false}}}ready(){super.ready();this.setAttribute("role","banner")}focusSearchInput(){this.$.toolbar.getSearchField().showAndFocus()}isSearchFocused(){return this.$.toolbar.getSearchField().isSearchFocused()}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}shouldDisableDevMode_(){return this.devModeControlledByPolicy||this.isChildAccount}getTooltipText_(){return this.i18n(this.isChildAccount?"controlledSettingChildRestriction":"controlledSettingPolicy")}getIcon_(){return this.isChildAccount?"cr20:kite":"cr20:domain"}onDevModeToggleChange_(e){this.delegate.setProfileInDevMode(e.detail);chrome.metricsPrivate.recordUserAction("Options_ToggleDeveloperMode_"+(e.detail?"Enabled":"Disabled"))}onInDevModeChanged_(_current,previous){const drawer=this.$.devDrawer;if(this.inDevMode){if(drawer.hidden){drawer.hidden=false;drawer.offsetTop}}else{if(previous===undefined){drawer.hidden=true;return}listenOnce(drawer,"transitionend",(()=>{if(!this.inDevMode){drawer.hidden=true}}))}this.expanded_=!this.expanded_}onLoadUnpackedClick_(){this.delegate.loadUnpacked().then((success=>{if(success){const toastManager=getToastManager();toastManager.duration=3e3;toastManager.show(this.i18n("toolbarLoadUnpackedDone"))}})).catch((loadError=>{this.fire_("load-error",loadError)}));chrome.metricsPrivate.recordUserAction("Options_LoadUnpackedExtension")}onPackClick_(){chrome.metricsPrivate.recordUserAction("Options_PackExtension");this.showPackDialog_=true}onPackDialogClose_(){this.showPackDialog_=false;this.$.packExtensions.focus()}onUpdateNowClick_(){if(this.isUpdating_){return}this.isUpdating_=true;const toastManager=getToastManager();toastManager.duration=0;toastManager.show(this.i18n("toolbarUpdatingToast"));this.delegate.updateAllExtensions(this.extensions).then((()=>{toastManager.hide();toastManager.duration=3e3;toastManager.show(this.i18n("toolbarUpdateDone"));this.isUpdating_=false}),(loadError=>{this.fire_("load-error",loadError);toastManager.hide();this.isUpdating_=false}))}}customElements.define(ExtensionsToolbarElement.is,ExtensionsToolbarElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrScrollObserverMixin=dedupingMixin((superClass=>{class CrScrollObserverMixin extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.topProbe_=null;this.bottomProbe_=null}connectedCallback(){super.connectedCallback();const container=this.getContainer();this.topProbe_=document.createElement("div");this.bottomProbe_=document.createElement("div");container.prepend(this.topProbe_);container.append(this.bottomProbe_);this.enableScrollObservation(true)}disconnectedCallback(){super.disconnectedCallback();this.enableScrollObservation(false)}getContainer(){const container=this.shadowRoot.querySelector("#container");assert(container);return container}getIntersectionObserver_(){const callback=entries=>{const container=this.getContainer();for(const entry of entries){const target=entry.target;if(target===this.topProbe_){container.classList.toggle("scrolled-to-top",entry.intersectionRatio!==0);const canScroll=entry.intersectionRatio===0||!container.classList.contains("scrolled-to-bottom");container.classList.toggle("can-scroll",canScroll)}if(target===this.bottomProbe_){container.classList.toggle("scrolled-to-bottom",entry.intersectionRatio!==0);const canScroll=entry.intersectionRatio===0||!container.classList.contains("scrolled-to-top");container.classList.toggle("can-scroll",canScroll)}}};return new IntersectionObserver(callback,{root:this.getContainer(),threshold:0})}enableScrollObservation(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(!this.isConnected){return}if(this.intersectionObserver_){assert(this.topProbe_);assert(this.bottomProbe_);this.intersectionObserver_.observe(this.topProbe_);this.intersectionObserver_.observe(this.bottomProbe_)}}))}}return CrScrollObserverMixin}));
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide||(CrContainerShadowSide={}));const CrContainerShadowMixin=dedupingMixin((superClass=>{const superClassBase=CrScrollObserverMixin(superClass);class CrContainerShadowMixin extends superClassBase{constructor(){super(...arguments);this.dropShadows_=new Map;this.sides_=[]}connectedCallback(){super.connectedCallback();const container=this.shadowRoot.querySelector("#container");assert(container);const hasBottomShadow=container.hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow)}));container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),container);if(hasBottomShadow){container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),container.nextSibling)}}setForceDropShadows(enabled){assert(this.sides_.length>0);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("force-shadow",enabled)}}}return CrContainerShadowMixin}));function getTemplate(){return html$1`<!--_html_template_start_--><style include="cr-hidden-style shared-style">:host{color:var(--cr-primary-text-color);display:flex;flex-direction:column;height:100%}#viewManager{flex:1 1 var(--cr-toolbar-field-width);height:100%;position:relative}@media (min-width:1650px){#viewManager:has(extensions-item-list.active){flex-basis:1400px}}@media (max-width:1649px){#viewManager:has(extensions-item-list.active){flex-basis:950px}}extensions-item{display:inline-block}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#left{height:100%;min-width:var(--sidebar-width);position:sticky;top:0}#left extensions-sidebar{max-height:100%;overflow:auto;overscroll-behavior:contain}#left,#right{flex:1 1 0}</style>
<extensions-drop-overlay drag-enabled="[[inDevMode]]">
</extensions-drop-overlay>
<extensions-toolbar id="toolbar" in-dev-mode="[[inDevMode]]" can-load-unpacked="[[canLoadUnpacked]]" is-child-account="[[isChildAccount_]]" dev-mode-controlled-by-policy="[[devModeControlledByPolicy]]" delegate="[[delegate]]" on-cr-toolbar-menu-click="onMenuButtonClick_" on-search-changed="onFilterChanged_" extensions="[[extensions_]]" narrow="{{narrow_}}">
</extensions-toolbar>
<template is="dom-if" if="[[showDrawer_]]" restamp>
  <cr-drawer id="drawer" heading="Extensions" align="ltr" on-close="onDrawerClose_">
    <div slot="body">
      <extensions-sidebar on-close-drawer="onCloseDrawer_" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]">
      </extensions-sidebar>
    </div>
  </cr-drawer>
</template>
<div id="container">
  <div id="left" hidden$="[[narrow_]]">
    <extensions-sidebar on-close-drawer="onCloseDrawer_" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]">
    </extensions-sidebar>
  </div>
  <cr-view-manager id="viewManager" role="main">
    <extensions-item-list id="items-list" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]" is-mv2-deprecation-notice-dismissed="[[isMv2DeprecationNoticeDismissed]]" filter="[[filter]]" hidden$="[[!didInitPage_]]" slot="view" apps="[[apps_]]" extensions="[[extensions_]]" on-show-install-warnings="onShowInstallWarnings_">
    </extensions-item-list>
    <cr-lazy-render id="details-view">
      <template>
        <extensions-detail-view delegate="[[delegate]]" slot="view" in-dev-mode="[[inDevMode]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" from-activity-log="[[fromActivityLog_]]" show-activity-log="[[showActivityLog]]" incognito-available="[[incognitoAvailable_]]" data="[[detailViewItem_]]">
        </extensions-detail-view>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="activity-log">
      <template>
        <extensions-activity-log delegate="[[delegate]]" slot="view" extension-info="[[activityLogItem_]]">
        </extensions-activity-log>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="site-permissions">
      <template>
        <extensions-site-permissions delegate="[[delegate]]" slot="view" extensions="[[extensions_]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]">
        </extensions-site-permissions>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="site-permissions-by-site">
      <template>
        <extensions-site-permissions-by-site delegate="[[delegate]]" slot="view" extensions="[[extensions_]]">
        </extensions-site-permissions-by-site>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="keyboard-shortcuts">
      <template>
        <extensions-keyboard-shortcuts delegate="[[delegate]]" slot="view" items="[[extensions_]]">
        </extensions-keyboard-shortcuts>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="error-page">
      <template>
        <extensions-error-page data="[[errorPageItem_]]" slot="view" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
        </extensions-error-page>
      </template>
    </cr-lazy-render>
  </cr-view-manager>
  <div id="right" hidden$="[[narrow_]]"></div>
</div>
<template is="dom-if" if="[[showOptionsDialog_]]" restamp>
  <extensions-options-dialog id="options-dialog" on-close="onOptionsDialogClose_">
  </extensions-options-dialog>
</template>
<template is="dom-if" if="[[showLoadErrorDialog_]]" restamp>
  <extensions-load-error id="load-error" delegate="[[delegate]]" on-close="onLoadErrorDialogClose_">
  </extensions-load-error>
</template>
<template is="dom-if" if="[[showInstallWarningsDialog_]]" restamp>
  <extensions-install-warnings-dialog on-close="onInstallWarningsDialogClose_" install-warnings="[[installWarnings_]]">
  </extensions-install-warnings-dialog>
</template>
<cr-toast-manager></cr-toast-manager>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function compareExtensions(a,b){function compare(x,y){return x<y?-1:x>y?1:0}function compareLocation(x,y){if(x.location===y.location){return 0}if(x.location===chrome.developerPrivate.Location.UNPACKED){return-1}if(y.location===chrome.developerPrivate.Location.UNPACKED){return 1}return 0}return compareLocation(a,b)||compare(a.name.toLowerCase(),b.name.toLowerCase())||compare(a.id,b.id)}const ExtensionsManagerElementBase=CrContainerShadowMixin(PolymerElement);class ExtensionsManagerElement extends ExtensionsManagerElementBase{static get is(){return"extensions-manager"}static get template(){return getTemplate()}static get properties(){return{canLoadUnpacked:{type:Boolean,value:false},delegate:{type:Object,value(){return Service.getInstance()}},inDevMode:{type:Boolean,value:()=>loadTimeData.getBoolean("inDevMode")},isMv2DeprecationNoticeDismissed:{type:Boolean,value:()=>loadTimeData.getBoolean("MV2DeprecationNoticeDismissed")},showActivityLog:{type:Boolean,value:()=>loadTimeData.getBoolean("showActivityLog")},enableEnhancedSiteControls:{type:Boolean,value:()=>loadTimeData.getBoolean("enableEnhancedSiteControls")},devModeControlledByPolicy:{type:Boolean,value:false},isChildAccount_:{type:Boolean,value:false},incognitoAvailable_:{type:Boolean,value:false},filter:{type:String,value:""},errorPageItem_:Object,detailViewItem_:Object,activityLogItem_:Object,extensions_:Array,apps_:Array,didInitPage_:{type:Boolean,value:false},narrow_:{type:Boolean,observer:"onNarrowChanged_"},showDrawer_:Boolean,showLoadErrorDialog_:Boolean,showInstallWarningsDialog_:Boolean,installWarnings_:Array,showOptionsDialog_:Boolean,fromActivityLog_:Boolean}}constructor(){super();this.navigationListener_=null;this.currentPage_=null;this.navigationListener_=null;this.pageInitializedResolver_=new PromiseResolver}ready(){super.ready();this.addEventListener("load-error",this.onLoadError_);this.addEventListener("view-enter-start",this.onViewEnterStart_);this.addEventListener("view-exit-start",this.onViewExitStart_);this.addEventListener("view-exit-finish",this.onViewExitFinish_);const service=Service.getInstance();const onProfileStateChanged=profileInfo=>{this.isChildAccount_=profileInfo.isChildAccount;this.incognitoAvailable_=profileInfo.isIncognitoAvailable;this.devModeControlledByPolicy=profileInfo.isDeveloperModeControlledByPolicy;this.inDevMode=profileInfo.inDeveloperMode;this.canLoadUnpacked=profileInfo.canLoadUnpacked;this.isMv2DeprecationNoticeDismissed=profileInfo.isMv2DeprecationNoticeDismissed};service.getProfileStateChangedTarget().addListener(onProfileStateChanged);service.getProfileConfiguration().then(onProfileStateChanged);service.getExtensionsInfo().then((extensionsAndApps=>{this.initExtensionsAndApps_(extensionsAndApps);this.initPage_();service.getItemStateChangedTarget().addListener(this.onItemStateChanged_.bind(this))}))}connectedCallback(){super.connectedCallback();document.documentElement.classList.remove("loading");document.fonts.load("bold 12px Roboto");this.navigationListener_=navigation.addListener((newPage=>{this.changePage_(newPage)}))}disconnectedCallback(){super.disconnectedCallback();assert(this.navigationListener_);assert(navigation.removeListener(this.navigationListener_));this.navigationListener_=null}whenPageInitializedForTest(){return this.pageInitializedResolver_.promise}initPage_(){this.didInitPage_=true;this.changePage_(navigation.getCurrentPage());this.pageInitializedResolver_.resolve()}onNarrowChanged_(){const drawer=this.shadowRoot.querySelector("cr-drawer");if(!this.narrow_&&drawer&&drawer.open){drawer.close()}}onItemStateChanged_(eventData){const EventType=chrome.developerPrivate.EventType;switch(eventData.event_type){case EventType.VIEW_REGISTERED:case EventType.VIEW_UNREGISTERED:case EventType.INSTALLED:case EventType.LOADED:case EventType.UNLOADED:case EventType.ERROR_ADDED:case EventType.ERRORS_REMOVED:case EventType.PREFS_CHANGED:case EventType.WARNINGS_CHANGED:case EventType.COMMAND_ADDED:case EventType.COMMAND_REMOVED:case EventType.PERMISSIONS_CHANGED:case EventType.SERVICE_WORKER_STARTED:case EventType.SERVICE_WORKER_STOPPED:case EventType.PINNED_ACTIONS_CHANGED:if(!eventData.extensionInfo){break}if(this.delegate.shouldIgnoreUpdate(eventData.extensionInfo.id,eventData.event_type)){break}const listId=this.getListId_(eventData.extensionInfo);const currentIndex=this.get(listId).findIndex((item=>item.id===eventData.extensionInfo.id));if(currentIndex>=0){this.updateItem_(listId,currentIndex,eventData.extensionInfo)}else{this.addItem_(listId,eventData.extensionInfo)}break;case EventType.UNINSTALLED:this.removeItem_(eventData.item_id);break;case EventType.CONFIGURATION_CHANGED:const index=this.getIndexInList_("extensions_",eventData.item_id);this.updateItem_("extensions_",index,Object.assign({},this.getData_(eventData.item_id),{didAcknowledgeMV2DeprecationNotice:eventData.extensionInfo?.didAcknowledgeMV2DeprecationNotice,safetyCheckText:eventData.extensionInfo?.safetyCheckText}));break;default:assertNotReached()}}onFilterChanged_(event){if(this.currentPage_.page!==Page.LIST){navigation.navigateTo({page:Page.LIST})}this.filter=event.detail}onMenuButtonClick_(){this.showDrawer_=true;setTimeout((()=>{this.shadowRoot.querySelector("cr-drawer").openDrawer()}),0)}getListId_(item){const ExtensionType=chrome.developerPrivate.ExtensionType;switch(item.type){case ExtensionType.HOSTED_APP:case ExtensionType.LEGACY_PACKAGED_APP:case ExtensionType.PLATFORM_APP:return"apps_";case ExtensionType.EXTENSION:case ExtensionType.SHARED_MODULE:return"extensions_";case ExtensionType.THEME:assertNotReached("Don't send themes to the chrome://extensions page");default:assertNotReached()}}getIndexInList_(listId,itemId){return this.get(listId).findIndex((function(item){return item.id===itemId}))}getData_(id){return this.extensions_[this.getIndexInList_("extensions_",id)]||this.apps_[this.getIndexInList_("apps_",id)]}initExtensionsAndApps_(extensionsAndApps){extensionsAndApps.sort(compareExtensions);const apps=[];const extensions=[];for(const i of extensionsAndApps){const list=this.getListId_(i)==="apps_"?apps:extensions;list.push(i)}this.apps_=apps;this.extensions_=extensions}addItem_(listId,item){assert(this.getIndexInList_(listId,item.id)===-1);let insertBeforeChild=this.get(listId).findIndex((function(listEl){return compareExtensions(listEl,item)>0}));if(insertBeforeChild===-1){insertBeforeChild=this.get(listId).length}this.splice(listId,insertBeforeChild,0,item)}updateItem_(listId,index,item){assert(index>=0);this.set([listId,index],item);if(this.detailViewItem_&&this.detailViewItem_.id===item.id&&this.currentPage_.page===Page.DETAILS){this.detailViewItem_=item}else if(this.errorPageItem_&&this.errorPageItem_.id===item.id&&this.currentPage_.page===Page.ERRORS){this.errorPageItem_=item}else if(this.activityLogItem_&&this.activityLogItem_.id===item.id&&this.currentPage_.page===Page.ACTIVITY_LOG){this.activityLogItem_=item}}focusAfterItemRemoved_(listId,index){setTimeout((()=>{if(this.get(listId).length){const focusIndex=Math.min(this.get(listId).length-1,index);const itemToFocusId=this.get([listId,focusIndex]).id;if(!this.$["items-list"].focusItemButton(itemToFocusId)){this.$.toolbar.focusSearchInput()}}else{this.$.toolbar.focusSearchInput()}}),0)}removeItem_(itemId){let listId="extensions_";let index=this.getIndexInList_(listId,itemId);if(index===-1){listId="apps_";index=this.getIndexInList_(listId,itemId)}assert(index>=0);this.splice(listId,index,1);if(this.currentPage_.page===Page.LIST){this.focusAfterItemRemoved_(listId,index)}else if((this.currentPage_.page===Page.ACTIVITY_LOG||this.currentPage_.page===Page.DETAILS||this.currentPage_.page===Page.ERRORS)&&this.currentPage_.extensionId===itemId){navigation.replaceWith({page:Page.LIST})}}onLoadError_(e){this.showLoadErrorDialog_=true;setTimeout((()=>{const dialog=this.shadowRoot.querySelector("extensions-load-error");dialog.loadError=e.detail;dialog.show()}),0)}changePage_(newPage){this.onCloseDrawer_();const optionsDialog=this.shadowRoot.querySelector("extensions-options-dialog");if(optionsDialog&&optionsDialog.open){this.showOptionsDialog_=false}const fromPage=this.currentPage_?this.currentPage_.page:null;const toPage=newPage.page;let data;let activityLogPlaceholder;if(toPage===Page.LIST){this.delegate.dismissSafetyHubExtensionsMenuNotification()}if(newPage.extensionId){data=this.getData_(newPage.extensionId);if(!data){if(this.showActivityLog&&toPage===Page.ACTIVITY_LOG){activityLogPlaceholder={id:newPage.extensionId,isPlaceholder:true}}else{navigation.replaceWith({page:Page.LIST});return}}}if(toPage===Page.DETAILS){this.detailViewItem_=data}else if(toPage===Page.ERRORS){this.errorPageItem_=data}else if(toPage===Page.ACTIVITY_LOG){if(!this.showActivityLog){navigation.replaceWith({page:Page.DETAILS,extensionId:newPage.extensionId});return}this.activityLogItem_=data||activityLogPlaceholder}else if((toPage===Page.SITE_PERMISSIONS||toPage===Page.SITE_PERMISSIONS_ALL_SITES)&&!this.enableEnhancedSiteControls){navigation.replaceWith({page:Page.LIST});return}if(fromPage!==toPage){this.$.viewManager.switchView(toPage,"no-animation","no-animation")}if(newPage.subpage){assert(newPage.subpage===Dialog.OPTIONS);assert(newPage.extensionId);this.showOptionsDialog_=true;setTimeout((()=>{this.shadowRoot.querySelector("extensions-options-dialog").show(data)}),0)}document.title=toPage===Page.DETAILS?`${loadTimeData.getString("title")} - ${this.detailViewItem_.name}`:loadTimeData.getString("title");this.currentPage_=newPage}onDrawerClose_(){this.showDrawer_=false}onCloseDrawer_(){const drawer=this.shadowRoot.querySelector("cr-drawer");if(drawer&&drawer.open){drawer.close()}}onLoadErrorDialogClose_(){this.showLoadErrorDialog_=false}onOptionsDialogClose_(){this.showOptionsDialog_=false;this.shadowRoot.querySelector("extensions-detail-view").focusOptionsButton()}onViewEnterStart_(){this.fromActivityLog_=false}onViewExitStart_(e){const viewType=e.composedPath()[0].tagName;this.fromActivityLog_=viewType==="EXTENSIONS-ACTIVITY-LOG"}onViewExitFinish_(e){const viewType=e.composedPath()[0].tagName;if(viewType==="EXTENSIONS-ITEM-LIST"||viewType==="EXTENSIONS-KEYBOARD-SHORTCUTS"||viewType==="EXTENSIONS-ACTIVITY-LOG"||viewType==="EXTENSIONS-SITE-PERMISSIONS"||viewType==="EXTENSIONS-SITE-PERMISSIONS-BY-SITE"){return}const extensionId=e.composedPath()[0].data.id;const list=this.shadowRoot.querySelector("extensions-item-list");const button=viewType==="EXTENSIONS-DETAIL-VIEW"?list.getDetailsButton(extensionId):list.getErrorsButton(extensionId);if(button){button.focus()}}onShowInstallWarnings_(e){this.installWarnings_=e.detail;this.showInstallWarningsDialog_=true}onInstallWarningsDialogClose_(){this.installWarnings_=null;this.showInstallWarningsDialog_=false}}customElements.define(ExtensionsManagerElement.is,ExtensionsManagerElement);let instance=null;function getCss(){return instance||(instance=[...[],css`:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:32px;--cr-checkbox-ripple-offset:50%;--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-opacity:1;--cr-checkbox-mark-color:var(
      --color-checkbox-check,
      var(--cr-fallback-color-on-primary));--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-unchecked-box-color:var(
      --color-checkbox-foreground-unchecked,
      var(--cr-fallback-color-outline));--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-unchecked-ripple-opacity:.4}}:host([disabled]){cursor:initial;opacity:1;pointer-events:none;--cr-checkbox-checked-box-color:var(
      --color-checkbox-container-disabled,
      var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
      --color-checkbox-outline-disabled,
      var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
      var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host([disabled][checked]) #checkbox{border-color:transparent}#hover-layer{display:none}#checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}#checkbox:focus-visible{outline:var(--cr-checkbox-focus-outline,2px solid var(--cr-focus-outline-color));outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}#ink{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
      var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) #ink{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
      var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) #ink{left:auto;right:var(--cr-checkbox-ripple-offset);transform:translate(50%,-50%)}#labelContainer{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #labelContainer{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #labelContainer{display:none}#ariaDescription{height:0;overflow:hidden;width:0}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml(){return html`
<div id="checkbox" tabindex="${this.tabIndex}" role="checkbox"
    @keydown="${this.onKeyDown_}" @keyup="${this.onKeyUp_}"
    aria-disabled="${this.getAriaDisabled_()}"
    aria-checked="${this.getAriaChecked_()}"
    aria-labelledby="labelContainer"
    aria-describedby="ariaDescription">
  <!-- Inline SVG paints faster than loading it from a separate file. -->
  <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12"
      fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
  </svg>
  <div id="hover-layer"></div>
</div>
<div id="labelContainer" aria-hidden="true"
    aria-label="${this.ariaLabelOverride||nothing}" part="label-container">
  <slot></slot>
</div>
<div id="ariaDescription" aria-hidden="true">${this.ariaDescription}</div>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrCheckboxElementBase=CrRippleMixin(CrLitElement);class CrCheckboxElement extends CrCheckboxElementBase{constructor(){super(...arguments);this.checked=false;this.disabled=false;this.ariaDescription=null;this.tabIndex=0}static get is(){return"cr-checkbox"}static get styles(){return getCss()}render(){return getHtml.bind(this)()}static get properties(){return{checked:{type:Boolean,reflect:true,notify:true},disabled:{type:Boolean,reflect:true},ariaDescription:{type:String},ariaLabelOverride:{type:String},tabIndex:{type:Number}}}firstUpdated(){this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("pointerup",this.hideRipple_.bind(this));this.$.labelContainer.addEventListener("pointerdown",this.showRipple_.bind(this));this.$.labelContainer.addEventListener("pointerleave",this.hideRipple_.bind(this))}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("disabled")){const previousTabIndex=changedProperties.get("disabled");if(previousTabIndex!==undefined||this.disabled){this.tabIndex=this.disabled?-1:0}}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("tabIndex")){this.removeAttribute("tabindex")}}focus(){this.$.checkbox.focus()}getFocusableElement(){return this.$.checkbox}getAriaDisabled_(){return this.disabled?"true":"false"}getAriaChecked_(){return this.checked?"true":"false"}showRipple_(){if(this.noink){return}this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}async onClick_(e){if(this.disabled||e.target.tagName==="A"){return}e.stopPropagation();e.preventDefault();this.checked=!this.checked;await this.updateComplete;this.fire("change",this.checked)}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(e.key===" "){this.click()}}createRipple(){this.rippleContainer=this.$.checkbox;const ripple=super.createRipple();ripple.setAttribute("recenters","");ripple.classList.add("circle");return ripple}}customElements.define(CrCheckboxElement.is,CrCheckboxElement);export{ARG_URL_PLACEHOLDER,ActivityLogHistoryElement,ActivityLogHistoryItemElement,ActivityLogPageState,ActivityLogStreamElement,ActivityLogStreamItemElement,CrCheckboxElement,CrIconElement,Dialog,ExtensionsActivityLogElement,ExtensionsCodeSectionElement,ExtensionsDetailViewElement,ExtensionsErrorPageElement,ExtensionsHostPermissionsToggleListElement,ExtensionsItemElement,ExtensionsItemListElement,ExtensionsKeyboardShortcutsElement,ExtensionsLoadErrorElement,ExtensionsManagerElement,ExtensionsMv2DeprecationPanelElement,ExtensionsOptionsDialogElement,ExtensionsPackDialogAlertElement,ExtensionsPackDialogElement,ExtensionsRestrictedSitesDialogElement,ExtensionsReviewPanelElement,ExtensionsRuntimeHostPermissionsElement,ExtensionsRuntimeHostsDialogElement,ExtensionsShortcutInputElement,ExtensionsSidebarElement,ExtensionsSitePermissionsBySiteElement,ExtensionsSitePermissionsElement,ExtensionsSitePermissionsListElement,ExtensionsToggleRowElement,ExtensionsToolbarElement,Key,NavigationHelper,OptionsDialogMaxHeight,OptionsDialogMinWidth,Page,PluralStringProxyImpl,Service,SitePermissionsEditPermissionsDialogElement,SitePermissionsEditUrlDialogElement,SitePermissionsSiteGroupElement,SiteSettingsMixin,UserAction,getFaviconUrl,getMatchingUserSpecifiedSites,getPatternFromSite,getSitePermissionsPatternFromSite,getToastManager,getTrustedHTML,isValidKeyCode,keystrokeToString,navigation};
