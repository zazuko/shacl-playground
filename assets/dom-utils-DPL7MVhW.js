/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */function n(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}function r(t){return t?new Set(t.split(" ")):new Set}function s(t){return[...t].join(" ")}function o(t,e,u){const i=r(t.getAttribute(e));i.add(u),t.setAttribute(e,s(i))}function a(t,e,u){const i=r(t.getAttribute(e));if(i.delete(u),i.size===0){t.removeAttribute(e);return}t.setAttribute(e,s(i))}function c(t){return t.nodeType===Node.TEXT_NODE&&t.textContent.trim()===""}export{o as a,n as g,c as i,a as r};
