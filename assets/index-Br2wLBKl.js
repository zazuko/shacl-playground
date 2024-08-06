function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CnnLA-PM.js","assets/index-B4iEea_B.js","assets/vaadin-drawer-toggle-CZrq_8T-.js","assets/dom-utils-DPL7MVhW.js","assets/vaadin-dialog-CDiyHrXP.js","assets/templates-vt-f1sI-.js","assets/vaadin-icons-CtON8nuc.js","assets/iron-icon-CL_xrCqV.js","assets/graph-editor-Daw-tXNj.js","assets/rdf-editor-Dwq9Z-Nn.js","assets/vaadin-item-CIW41obp.js","assets/validation-report-D54zjyYX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var e_=Object.defineProperty;var t_=(t,e,r)=>e in t?e_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Cs=(t,e,r)=>(t_(t,typeof e!="symbol"?e+"":e,r),r);const r_=Object.freeze(Object.defineProperty({__proto__:null,get _void(){return o1},get acl(){return NS},get as(){return MS},get bibo(){return jS},get cc(){return FS},get cert(){return zS},get cnt(){return HS},get constant(){return WS},get crm(){return GS},get csvw(){return JS},get ctag(){return KS},get dash(){return tA},get dashSparql(){return ZS},get dbo(){return nA},get dc11(){return oA},get dcam(){return aA},get dcat(){return cA},get dcmitype(){return dA},get dcterms(){return hA},get default(){return Oy},get dig(){return yA},get discipline(){return _A},get doap(){return bA},get dpv(){return vA},get dqv(){return AA},get dtype(){return xA},get duv(){return PA},get earl(){return RA},get ebucore(){return $A},get exif(){return NA},get foaf(){return MA},get frbr(){return jA},get geo(){return FA},get geof(){return zA},get geor(){return HA},get gml(){return WA},get gn(){return GA},get gr(){return JA},get grddl(){return KA},get gs1(){return ZA},get gtfs(){return tE},get http(){return nE},get hydra(){return oE},get ical(){return aE},get la(){return cE},get ldp(){return dE},get list(){return hE},get locn(){return yE},get log(){return _E},get lvont(){return bE},get m4i(){return vE},get ma(){return AE},get mads(){return xE},get math(){return PE},get oa(){return RE},get og(){return $E},get oidc(){return NE},get org(){return ME},get owl(){return hi},get pim(){return kE},get prefix(){return BE},get prov(){return UE},get qb(){return qE},get qkdv(){return VE},get quantitykind(){return YE},get qudt(){return QE},get rdau(){return XE},get rdf(){return Or},get rdfa(){return tx},get rdfs(){return ft},get rev(){return ix},get rico(){return sx},get rif(){return b1},get rr(){return lx},get rss(){return ux},get schema(){return fx},get sd(){return px},get sdmx(){return mx},get sem(){return gx},get set(){return wx},get sf(){return Sx},get sh(){return C},get shex(){return xx},get shsh(){return Px},get sioc(){return Rx},get skos(){return $x},get skosxl(){return Nx},get solid(){return Mx},get sosa(){return jx},get sou(){return Fx},get ssn(){return zx},get stat(){return Hx},get string(){return Wx},get test(){return Gx},get time(){return Jx},get unit(){return Kx},get v(){return v1},get vaem(){return Zx},get vann(){return t1},get vcard(){return n1},get vs(){return a1},get wdr(){return A1},get wdrs(){return c1},get wgs(){return d1},get xhv(){return h1},get xkos(){return y1},get xml(){return x1},get xsd(){return _1}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var n_=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function hn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jI(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var oh={exports:{}},Me=oh.exports={},yt,mt;function Ma(){throw new Error("setTimeout has not been defined")}function Da(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?yt=setTimeout:yt=Ma}catch{yt=Ma}try{typeof clearTimeout=="function"?mt=clearTimeout:mt=Da}catch{mt=Da}})();function sh(t){if(yt===setTimeout)return setTimeout(t,0);if((yt===Ma||!yt)&&setTimeout)return yt=setTimeout,setTimeout(t,0);try{return yt(t,0)}catch{try{return yt.call(null,t,0)}catch{return yt.call(this,t,0)}}}function i_(t){if(mt===clearTimeout)return clearTimeout(t);if((mt===Da||!mt)&&clearTimeout)return mt=clearTimeout,clearTimeout(t);try{return mt(t)}catch{try{return mt.call(null,t)}catch{return mt.call(this,t)}}}var Lt=[],Gr=!1,yr,ki=-1;function o_(){!Gr||!yr||(Gr=!1,yr.length?Lt=yr.concat(Lt):ki=-1,Lt.length&&ah())}function ah(){if(!Gr){var t=sh(o_);Gr=!0;for(var e=Lt.length;e;){for(yr=Lt,Lt=[];++ki<e;)yr&&yr[ki].run();ki=-1,e=Lt.length}yr=null,Gr=!1,i_(t)}}Me.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];Lt.push(new lh(t,e)),Lt.length===1&&!Gr&&sh(ah)};function lh(t,e){this.fun=t,this.array=e}lh.prototype.run=function(){this.fun.apply(null,this.array)};Me.title="browser";Me.browser=!0;Me.env={};Me.argv=[];Me.version="";Me.versions={};function Bt(){}Me.on=Bt;Me.addListener=Bt;Me.once=Bt;Me.off=Bt;Me.removeListener=Bt;Me.removeAllListeners=Bt;Me.emit=Bt;Me.prependListener=Bt;Me.prependOnceListener=Bt;Me.listeners=function(t){return[]};Me.binding=function(t){throw new Error("process.binding is not supported")};Me.cwd=function(){return"/"};Me.chdir=function(t){throw new Error("process.chdir is not supported")};Me.umask=function(){return 0};var nr=oh.exports;const s_=hn(nr);var xt={},Xo={};Xo.byteLength=c_;Xo.toByteArray=d_;Xo.fromByteArray=p_;var _t=[],ot=[],a_=typeof Uint8Array<"u"?Uint8Array:Array,Rs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Mr=0,l_=Rs.length;Mr<l_;++Mr)_t[Mr]=Rs[Mr],ot[Rs.charCodeAt(Mr)]=Mr;ot[45]=62;ot[95]=63;function ch(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function c_(t){var e=ch(t),r=e[0],n=e[1];return(r+n)*3/4-n}function u_(t,e,r){return(e+r)*3/4-r}function d_(t){var e,r=ch(t),n=r[0],i=r[1],o=new a_(u_(t,n,i)),s=0,a=i>0?n-4:n,l;for(l=0;l<a;l+=4)e=ot[t.charCodeAt(l)]<<18|ot[t.charCodeAt(l+1)]<<12|ot[t.charCodeAt(l+2)]<<6|ot[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=ot[t.charCodeAt(l)]<<2|ot[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=ot[t.charCodeAt(l)]<<10|ot[t.charCodeAt(l+1)]<<4|ot[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function f_(t){return _t[t>>18&63]+_t[t>>12&63]+_t[t>>6&63]+_t[t&63]}function h_(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(f_(n));return i.join("")}function p_(t){for(var e,r=t.length,n=r%3,i=[],o=16383,s=0,a=r-n;s<a;s+=o)i.push(h_(t,s,s+o>a?a:s+o));return n===1?(e=t[r-1],i.push(_t[e>>2]+_t[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],i.push(_t[e>>10]+_t[e>>4&63]+_t[e<<2&63]+"=")),i.join("")}var Bl={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Bl.read=function(t,e,r,n,i){var o,s,a=i*8-n-1,l=(1<<a)-1,c=l>>1,f=-7,p=r?i-1:0,y=r?-1:1,b=t[e+p];for(p+=y,o=b&(1<<-f)-1,b>>=-f,f+=a;f>0;o=o*256+t[e+p],p+=y,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=n;f>0;s=s*256+t[e+p],p+=y,f-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(b?-1:1)*(1/0);s=s+Math.pow(2,n),o=o-c}return(b?-1:1)*s*Math.pow(2,o-n)};Bl.write=function(t,e,r,n,i,o){var s,a,l,c=o*8-i-1,f=(1<<c)-1,p=f>>1,y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:o-1,T=n?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+p>=1?e+=y/l:e+=y*Math.pow(2,1-p),e*l>=2&&(s++,l/=2),s+p>=f?(a=0,s=f):s+p>=1?(a=(e*l-1)*Math.pow(2,i),s=s+p):(a=e*Math.pow(2,p-1)*Math.pow(2,i),s=0));i>=8;t[r+b]=a&255,b+=T,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[r+b]=s&255,b+=T,s/=256,c-=8);t[r+b-T]|=E*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=Xo,r=Bl,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=$,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const h=new Uint8Array(1),u={foo:function(){return 42}};return Object.setPrototypeOf(u,Uint8Array.prototype),Object.setPrototypeOf(h,u),h.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(h){if(h>i)throw new RangeError('The value "'+h+'" is invalid for option "size"');const u=new Uint8Array(h);return Object.setPrototypeOf(u,a.prototype),u}function a(h,u,d){if(typeof h=="number"){if(typeof u=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(h)}return l(h,u,d)}a.poolSize=8192;function l(h,u,d){if(typeof h=="string")return y(h,u);if(ArrayBuffer.isView(h))return T(h);if(h==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof h);if(Y(h,ArrayBuffer)||h&&Y(h.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Y(h,SharedArrayBuffer)||h&&Y(h.buffer,SharedArrayBuffer)))return E(h,u,d);if(typeof h=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const _=h.valueOf&&h.valueOf();if(_!=null&&_!==h)return a.from(_,u,d);const w=I(h);if(w)return w;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof h[Symbol.toPrimitive]=="function")return a.from(h[Symbol.toPrimitive]("string"),u,d);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof h)}a.from=function(h,u,d){return l(h,u,d)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(h){if(typeof h!="number")throw new TypeError('"size" argument must be of type number');if(h<0)throw new RangeError('The value "'+h+'" is invalid for option "size"')}function f(h,u,d){return c(h),h<=0?s(h):u!==void 0?typeof d=="string"?s(h).fill(u,d):s(h).fill(u):s(h)}a.alloc=function(h,u,d){return f(h,u,d)};function p(h){return c(h),s(h<0?0:F(h)|0)}a.allocUnsafe=function(h){return p(h)},a.allocUnsafeSlow=function(h){return p(h)};function y(h,u){if((typeof u!="string"||u==="")&&(u="utf8"),!a.isEncoding(u))throw new TypeError("Unknown encoding: "+u);const d=x(h,u)|0;let _=s(d);const w=_.write(h,u);return w!==d&&(_=_.slice(0,w)),_}function b(h){const u=h.length<0?0:F(h.length)|0,d=s(u);for(let _=0;_<u;_+=1)d[_]=h[_]&255;return d}function T(h){if(Y(h,Uint8Array)){const u=new Uint8Array(h);return E(u.buffer,u.byteOffset,u.byteLength)}return b(h)}function E(h,u,d){if(u<0||h.byteLength<u)throw new RangeError('"offset" is outside of buffer bounds');if(h.byteLength<u+(d||0))throw new RangeError('"length" is outside of buffer bounds');let _;return u===void 0&&d===void 0?_=new Uint8Array(h):d===void 0?_=new Uint8Array(h,u):_=new Uint8Array(h,u,d),Object.setPrototypeOf(_,a.prototype),_}function I(h){if(a.isBuffer(h)){const u=F(h.length)|0,d=s(u);return d.length===0||h.copy(d,0,0,u),d}if(h.length!==void 0)return typeof h.length!="number"||nt(h.length)?s(0):b(h);if(h.type==="Buffer"&&Array.isArray(h.data))return b(h.data)}function F(h){if(h>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return h|0}function $(h){return+h!=h&&(h=0),a.alloc(+h)}a.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==a.prototype},a.compare=function(u,d){if(Y(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),Y(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(u)||!a.isBuffer(d))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===d)return 0;let _=u.length,w=d.length;for(let P=0,N=Math.min(_,w);P<N;++P)if(u[P]!==d[P]){_=u[P],w=d[P];break}return _<w?-1:w<_?1:0},a.isEncoding=function(u){switch(String(u).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(u,d){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return a.alloc(0);let _;if(d===void 0)for(d=0,_=0;_<u.length;++_)d+=u[_].length;const w=a.allocUnsafe(d);let P=0;for(_=0;_<u.length;++_){let N=u[_];if(Y(N,Uint8Array))P+N.length>w.length?(a.isBuffer(N)||(N=a.from(N)),N.copy(w,P)):Uint8Array.prototype.set.call(w,N,P);else if(a.isBuffer(N))N.copy(w,P);else throw new TypeError('"list" argument must be an Array of Buffers');P+=N.length}return w};function x(h,u){if(a.isBuffer(h))return h.length;if(ArrayBuffer.isView(h)||Y(h,ArrayBuffer))return h.byteLength;if(typeof h!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof h);const d=h.length,_=arguments.length>2&&arguments[2]===!0;if(!_&&d===0)return 0;let w=!1;for(;;)switch(u){case"ascii":case"latin1":case"binary":return d;case"utf8":case"utf-8":return q(h).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return d*2;case"hex":return d>>>1;case"base64":return _e(h).length;default:if(w)return _?-1:q(h).length;u=(""+u).toLowerCase(),w=!0}}a.byteLength=x;function U(h,u,d){let _=!1;if((u===void 0||u<0)&&(u=0),u>this.length||((d===void 0||d>this.length)&&(d=this.length),d<=0)||(d>>>=0,u>>>=0,d<=u))return"";for(h||(h="utf8");;)switch(h){case"hex":return we(this,u,d);case"utf8":case"utf-8":return ue(this,u,d);case"ascii":return xe(this,u,d);case"latin1":case"binary":return be(this,u,d);case"base64":return j(this,u,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return de(this,u,d);default:if(_)throw new TypeError("Unknown encoding: "+h);h=(h+"").toLowerCase(),_=!0}}a.prototype._isBuffer=!0;function W(h,u,d){const _=h[u];h[u]=h[d],h[d]=_}a.prototype.swap16=function(){const u=this.length;if(u%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let d=0;d<u;d+=2)W(this,d,d+1);return this},a.prototype.swap32=function(){const u=this.length;if(u%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let d=0;d<u;d+=4)W(this,d,d+3),W(this,d+1,d+2);return this},a.prototype.swap64=function(){const u=this.length;if(u%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let d=0;d<u;d+=8)W(this,d,d+7),W(this,d+1,d+6),W(this,d+2,d+5),W(this,d+3,d+4);return this},a.prototype.toString=function(){const u=this.length;return u===0?"":arguments.length===0?ue(this,0,u):U.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(u){if(!a.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u?!0:a.compare(this,u)===0},a.prototype.inspect=function(){let u="";const d=t.INSPECT_MAX_BYTES;return u=this.toString("hex",0,d).replace(/(.{2})/g,"$1 ").trim(),this.length>d&&(u+=" ... "),"<Buffer "+u+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(u,d,_,w,P){if(Y(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(d===void 0&&(d=0),_===void 0&&(_=u?u.length:0),w===void 0&&(w=0),P===void 0&&(P=this.length),d<0||_>u.length||w<0||P>this.length)throw new RangeError("out of range index");if(w>=P&&d>=_)return 0;if(w>=P)return-1;if(d>=_)return 1;if(d>>>=0,_>>>=0,w>>>=0,P>>>=0,this===u)return 0;let N=P-w,ae=_-d;const Oe=Math.min(N,ae),Te=this.slice(w,P),$e=u.slice(d,_);for(let ge=0;ge<Oe;++ge)if(Te[ge]!==$e[ge]){N=Te[ge],ae=$e[ge];break}return N<ae?-1:ae<N?1:0};function he(h,u,d,_,w){if(h.length===0)return-1;if(typeof d=="string"?(_=d,d=0):d>2147483647?d=2147483647:d<-2147483648&&(d=-2147483648),d=+d,nt(d)&&(d=w?0:h.length-1),d<0&&(d=h.length+d),d>=h.length){if(w)return-1;d=h.length-1}else if(d<0)if(w)d=0;else return-1;if(typeof u=="string"&&(u=a.from(u,_)),a.isBuffer(u))return u.length===0?-1:Ne(h,u,d,_,w);if(typeof u=="number")return u=u&255,typeof Uint8Array.prototype.indexOf=="function"?w?Uint8Array.prototype.indexOf.call(h,u,d):Uint8Array.prototype.lastIndexOf.call(h,u,d):Ne(h,[u],d,_,w);throw new TypeError("val must be string, number or Buffer")}function Ne(h,u,d,_,w){let P=1,N=h.length,ae=u.length;if(_!==void 0&&(_=String(_).toLowerCase(),_==="ucs2"||_==="ucs-2"||_==="utf16le"||_==="utf-16le")){if(h.length<2||u.length<2)return-1;P=2,N/=2,ae/=2,d/=2}function Oe($e,ge){return P===1?$e[ge]:$e.readUInt16BE(ge*P)}let Te;if(w){let $e=-1;for(Te=d;Te<N;Te++)if(Oe(h,Te)===Oe(u,$e===-1?0:Te-$e)){if($e===-1&&($e=Te),Te-$e+1===ae)return $e*P}else $e!==-1&&(Te-=Te-$e),$e=-1}else for(d+ae>N&&(d=N-ae),Te=d;Te>=0;Te--){let $e=!0;for(let ge=0;ge<ae;ge++)if(Oe(h,Te+ge)!==Oe(u,ge)){$e=!1;break}if($e)return Te}return-1}a.prototype.includes=function(u,d,_){return this.indexOf(u,d,_)!==-1},a.prototype.indexOf=function(u,d,_){return he(this,u,d,_,!0)},a.prototype.lastIndexOf=function(u,d,_){return he(this,u,d,_,!1)};function se(h,u,d,_){d=Number(d)||0;const w=h.length-d;_?(_=Number(_),_>w&&(_=w)):_=w;const P=u.length;_>P/2&&(_=P/2);let N;for(N=0;N<_;++N){const ae=parseInt(u.substr(N*2,2),16);if(nt(ae))return N;h[d+N]=ae}return N}function Q(h,u,d,_){return Ye(q(u,h.length-d),h,d,_)}function Ee(h,u,d,_){return Ye(ve(u),h,d,_)}function Pe(h,u,d,_){return Ye(_e(u),h,d,_)}function ee(h,u,d,_){return Ye(O(u,h.length-d),h,d,_)}a.prototype.write=function(u,d,_,w){if(d===void 0)w="utf8",_=this.length,d=0;else if(_===void 0&&typeof d=="string")w=d,_=this.length,d=0;else if(isFinite(d))d=d>>>0,isFinite(_)?(_=_>>>0,w===void 0&&(w="utf8")):(w=_,_=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const P=this.length-d;if((_===void 0||_>P)&&(_=P),u.length>0&&(_<0||d<0)||d>this.length)throw new RangeError("Attempt to write outside buffer bounds");w||(w="utf8");let N=!1;for(;;)switch(w){case"hex":return se(this,u,d,_);case"utf8":case"utf-8":return Q(this,u,d,_);case"ascii":case"latin1":case"binary":return Ee(this,u,d,_);case"base64":return Pe(this,u,d,_);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ee(this,u,d,_);default:if(N)throw new TypeError("Unknown encoding: "+w);w=(""+w).toLowerCase(),N=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function j(h,u,d){return u===0&&d===h.length?e.fromByteArray(h):e.fromByteArray(h.slice(u,d))}function ue(h,u,d){d=Math.min(h.length,d);const _=[];let w=u;for(;w<d;){const P=h[w];let N=null,ae=P>239?4:P>223?3:P>191?2:1;if(w+ae<=d){let Oe,Te,$e,ge;switch(ae){case 1:P<128&&(N=P);break;case 2:Oe=h[w+1],(Oe&192)===128&&(ge=(P&31)<<6|Oe&63,ge>127&&(N=ge));break;case 3:Oe=h[w+1],Te=h[w+2],(Oe&192)===128&&(Te&192)===128&&(ge=(P&15)<<12|(Oe&63)<<6|Te&63,ge>2047&&(ge<55296||ge>57343)&&(N=ge));break;case 4:Oe=h[w+1],Te=h[w+2],$e=h[w+3],(Oe&192)===128&&(Te&192)===128&&($e&192)===128&&(ge=(P&15)<<18|(Oe&63)<<12|(Te&63)<<6|$e&63,ge>65535&&ge<1114112&&(N=ge))}}N===null?(N=65533,ae=1):N>65535&&(N-=65536,_.push(N>>>10&1023|55296),N=56320|N&1023),_.push(N),w+=ae}return ne(_)}const re=4096;function ne(h){const u=h.length;if(u<=re)return String.fromCharCode.apply(String,h);let d="",_=0;for(;_<u;)d+=String.fromCharCode.apply(String,h.slice(_,_+=re));return d}function xe(h,u,d){let _="";d=Math.min(h.length,d);for(let w=u;w<d;++w)_+=String.fromCharCode(h[w]&127);return _}function be(h,u,d){let _="";d=Math.min(h.length,d);for(let w=u;w<d;++w)_+=String.fromCharCode(h[w]);return _}function we(h,u,d){const _=h.length;(!u||u<0)&&(u=0),(!d||d<0||d>_)&&(d=_);let w="";for(let P=u;P<d;++P)w+=vn[h[P]];return w}function de(h,u,d){const _=h.slice(u,d);let w="";for(let P=0;P<_.length-1;P+=2)w+=String.fromCharCode(_[P]+_[P+1]*256);return w}a.prototype.slice=function(u,d){const _=this.length;u=~~u,d=d===void 0?_:~~d,u<0?(u+=_,u<0&&(u=0)):u>_&&(u=_),d<0?(d+=_,d<0&&(d=0)):d>_&&(d=_),d<u&&(d=u);const w=this.subarray(u,d);return Object.setPrototypeOf(w,a.prototype),w};function J(h,u,d){if(h%1!==0||h<0)throw new RangeError("offset is not uint");if(h+u>d)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(u,d,_){u=u>>>0,d=d>>>0,_||J(u,d,this.length);let w=this[u],P=1,N=0;for(;++N<d&&(P*=256);)w+=this[u+N]*P;return w},a.prototype.readUintBE=a.prototype.readUIntBE=function(u,d,_){u=u>>>0,d=d>>>0,_||J(u,d,this.length);let w=this[u+--d],P=1;for(;d>0&&(P*=256);)w+=this[u+--d]*P;return w},a.prototype.readUint8=a.prototype.readUInt8=function(u,d){return u=u>>>0,d||J(u,1,this.length),this[u]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(u,d){return u=u>>>0,d||J(u,2,this.length),this[u]|this[u+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(u,d){return u=u>>>0,d||J(u,2,this.length),this[u]<<8|this[u+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(u,d){return u=u>>>0,d||J(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+this[u+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(u,d){return u=u>>>0,d||J(u,4,this.length),this[u]*16777216+(this[u+1]<<16|this[u+2]<<8|this[u+3])},a.prototype.readBigUInt64LE=ht(function(u){u=u>>>0,S(u,"offset");const d=this[u],_=this[u+7];(d===void 0||_===void 0)&&A(u,this.length-8);const w=d+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24,P=this[++u]+this[++u]*2**8+this[++u]*2**16+_*2**24;return BigInt(w)+(BigInt(P)<<BigInt(32))}),a.prototype.readBigUInt64BE=ht(function(u){u=u>>>0,S(u,"offset");const d=this[u],_=this[u+7];(d===void 0||_===void 0)&&A(u,this.length-8);const w=d*2**24+this[++u]*2**16+this[++u]*2**8+this[++u],P=this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+_;return(BigInt(w)<<BigInt(32))+BigInt(P)}),a.prototype.readIntLE=function(u,d,_){u=u>>>0,d=d>>>0,_||J(u,d,this.length);let w=this[u],P=1,N=0;for(;++N<d&&(P*=256);)w+=this[u+N]*P;return P*=128,w>=P&&(w-=Math.pow(2,8*d)),w},a.prototype.readIntBE=function(u,d,_){u=u>>>0,d=d>>>0,_||J(u,d,this.length);let w=d,P=1,N=this[u+--w];for(;w>0&&(P*=256);)N+=this[u+--w]*P;return P*=128,N>=P&&(N-=Math.pow(2,8*d)),N},a.prototype.readInt8=function(u,d){return u=u>>>0,d||J(u,1,this.length),this[u]&128?(255-this[u]+1)*-1:this[u]},a.prototype.readInt16LE=function(u,d){u=u>>>0,d||J(u,2,this.length);const _=this[u]|this[u+1]<<8;return _&32768?_|4294901760:_},a.prototype.readInt16BE=function(u,d){u=u>>>0,d||J(u,2,this.length);const _=this[u+1]|this[u]<<8;return _&32768?_|4294901760:_},a.prototype.readInt32LE=function(u,d){return u=u>>>0,d||J(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},a.prototype.readInt32BE=function(u,d){return u=u>>>0,d||J(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},a.prototype.readBigInt64LE=ht(function(u){u=u>>>0,S(u,"offset");const d=this[u],_=this[u+7];(d===void 0||_===void 0)&&A(u,this.length-8);const w=this[u+4]+this[u+5]*2**8+this[u+6]*2**16+(_<<24);return(BigInt(w)<<BigInt(32))+BigInt(d+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24)}),a.prototype.readBigInt64BE=ht(function(u){u=u>>>0,S(u,"offset");const d=this[u],_=this[u+7];(d===void 0||_===void 0)&&A(u,this.length-8);const w=(d<<24)+this[++u]*2**16+this[++u]*2**8+this[++u];return(BigInt(w)<<BigInt(32))+BigInt(this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+_)}),a.prototype.readFloatLE=function(u,d){return u=u>>>0,d||J(u,4,this.length),r.read(this,u,!0,23,4)},a.prototype.readFloatBE=function(u,d){return u=u>>>0,d||J(u,4,this.length),r.read(this,u,!1,23,4)},a.prototype.readDoubleLE=function(u,d){return u=u>>>0,d||J(u,8,this.length),r.read(this,u,!0,52,8)},a.prototype.readDoubleBE=function(u,d){return u=u>>>0,d||J(u,8,this.length),r.read(this,u,!1,52,8)};function me(h,u,d,_,w,P){if(!a.isBuffer(h))throw new TypeError('"buffer" argument must be a Buffer instance');if(u>w||u<P)throw new RangeError('"value" argument is out of bounds');if(d+_>h.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(u,d,_,w){if(u=+u,d=d>>>0,_=_>>>0,!w){const ae=Math.pow(2,8*_)-1;me(this,u,d,_,ae,0)}let P=1,N=0;for(this[d]=u&255;++N<_&&(P*=256);)this[d+N]=u/P&255;return d+_},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(u,d,_,w){if(u=+u,d=d>>>0,_=_>>>0,!w){const ae=Math.pow(2,8*_)-1;me(this,u,d,_,ae,0)}let P=_-1,N=1;for(this[d+P]=u&255;--P>=0&&(N*=256);)this[d+P]=u/N&255;return d+_},a.prototype.writeUint8=a.prototype.writeUInt8=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,1,255,0),this[d]=u&255,d+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,2,65535,0),this[d]=u&255,this[d+1]=u>>>8,d+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,2,65535,0),this[d]=u>>>8,this[d+1]=u&255,d+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,4,4294967295,0),this[d+3]=u>>>24,this[d+2]=u>>>16,this[d+1]=u>>>8,this[d]=u&255,d+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,4,4294967295,0),this[d]=u>>>24,this[d+1]=u>>>16,this[d+2]=u>>>8,this[d+3]=u&255,d+4};function v(h,u,d,_,w){Ce(u,_,w,h,d,7);let P=Number(u&BigInt(4294967295));h[d++]=P,P=P>>8,h[d++]=P,P=P>>8,h[d++]=P,P=P>>8,h[d++]=P;let N=Number(u>>BigInt(32)&BigInt(4294967295));return h[d++]=N,N=N>>8,h[d++]=N,N=N>>8,h[d++]=N,N=N>>8,h[d++]=N,d}function R(h,u,d,_,w){Ce(u,_,w,h,d,7);let P=Number(u&BigInt(4294967295));h[d+7]=P,P=P>>8,h[d+6]=P,P=P>>8,h[d+5]=P,P=P>>8,h[d+4]=P;let N=Number(u>>BigInt(32)&BigInt(4294967295));return h[d+3]=N,N=N>>8,h[d+2]=N,N=N>>8,h[d+1]=N,N=N>>8,h[d]=N,d+8}a.prototype.writeBigUInt64LE=ht(function(u,d=0){return v(this,u,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=ht(function(u,d=0){return R(this,u,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(u,d,_,w){if(u=+u,d=d>>>0,!w){const Oe=Math.pow(2,8*_-1);me(this,u,d,_,Oe-1,-Oe)}let P=0,N=1,ae=0;for(this[d]=u&255;++P<_&&(N*=256);)u<0&&ae===0&&this[d+P-1]!==0&&(ae=1),this[d+P]=(u/N>>0)-ae&255;return d+_},a.prototype.writeIntBE=function(u,d,_,w){if(u=+u,d=d>>>0,!w){const Oe=Math.pow(2,8*_-1);me(this,u,d,_,Oe-1,-Oe)}let P=_-1,N=1,ae=0;for(this[d+P]=u&255;--P>=0&&(N*=256);)u<0&&ae===0&&this[d+P+1]!==0&&(ae=1),this[d+P]=(u/N>>0)-ae&255;return d+_},a.prototype.writeInt8=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,1,127,-128),u<0&&(u=255+u+1),this[d]=u&255,d+1},a.prototype.writeInt16LE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,2,32767,-32768),this[d]=u&255,this[d+1]=u>>>8,d+2},a.prototype.writeInt16BE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,2,32767,-32768),this[d]=u>>>8,this[d+1]=u&255,d+2},a.prototype.writeInt32LE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,4,2147483647,-2147483648),this[d]=u&255,this[d+1]=u>>>8,this[d+2]=u>>>16,this[d+3]=u>>>24,d+4},a.prototype.writeInt32BE=function(u,d,_){return u=+u,d=d>>>0,_||me(this,u,d,4,2147483647,-2147483648),u<0&&(u=4294967295+u+1),this[d]=u>>>24,this[d+1]=u>>>16,this[d+2]=u>>>8,this[d+3]=u&255,d+4},a.prototype.writeBigInt64LE=ht(function(u,d=0){return v(this,u,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=ht(function(u,d=0){return R(this,u,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function D(h,u,d,_,w,P){if(d+_>h.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("Index out of range")}function K(h,u,d,_,w){return u=+u,d=d>>>0,w||D(h,u,d,4),r.write(h,u,d,_,23,4),d+4}a.prototype.writeFloatLE=function(u,d,_){return K(this,u,d,!0,_)},a.prototype.writeFloatBE=function(u,d,_){return K(this,u,d,!1,_)};function le(h,u,d,_,w){return u=+u,d=d>>>0,w||D(h,u,d,8),r.write(h,u,d,_,52,8),d+8}a.prototype.writeDoubleLE=function(u,d,_){return le(this,u,d,!0,_)},a.prototype.writeDoubleBE=function(u,d,_){return le(this,u,d,!1,_)},a.prototype.copy=function(u,d,_,w){if(!a.isBuffer(u))throw new TypeError("argument should be a Buffer");if(_||(_=0),!w&&w!==0&&(w=this.length),d>=u.length&&(d=u.length),d||(d=0),w>0&&w<_&&(w=_),w===_||u.length===0||this.length===0)return 0;if(d<0)throw new RangeError("targetStart out of bounds");if(_<0||_>=this.length)throw new RangeError("Index out of range");if(w<0)throw new RangeError("sourceEnd out of bounds");w>this.length&&(w=this.length),u.length-d<w-_&&(w=u.length-d+_);const P=w-_;return this===u&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(d,_,w):Uint8Array.prototype.set.call(u,this.subarray(_,w),d),P},a.prototype.fill=function(u,d,_,w){if(typeof u=="string"){if(typeof d=="string"?(w=d,d=0,_=this.length):typeof _=="string"&&(w=_,_=this.length),w!==void 0&&typeof w!="string")throw new TypeError("encoding must be a string");if(typeof w=="string"&&!a.isEncoding(w))throw new TypeError("Unknown encoding: "+w);if(u.length===1){const N=u.charCodeAt(0);(w==="utf8"&&N<128||w==="latin1")&&(u=N)}}else typeof u=="number"?u=u&255:typeof u=="boolean"&&(u=Number(u));if(d<0||this.length<d||this.length<_)throw new RangeError("Out of range index");if(_<=d)return this;d=d>>>0,_=_===void 0?this.length:_>>>0,u||(u=0);let P;if(typeof u=="number")for(P=d;P<_;++P)this[P]=u;else{const N=a.isBuffer(u)?u:a.from(u,w),ae=N.length;if(ae===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(P=0;P<_-d;++P)this[P+d]=N[P%ae]}return this};const oe={};function X(h,u,d){oe[h]=class extends d{constructor(){super(),Object.defineProperty(this,"message",{value:u.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${h}]`,this.stack,delete this.name}get code(){return h}set code(w){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:w,writable:!0})}toString(){return`${this.name} [${h}]: ${this.message}`}}}X("ERR_BUFFER_OUT_OF_BOUNDS",function(h){return h?`${h} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),X("ERR_INVALID_ARG_TYPE",function(h,u){return`The "${h}" argument must be of type number. Received type ${typeof u}`},TypeError),X("ERR_OUT_OF_RANGE",function(h,u,d){let _=`The value of "${h}" is out of range.`,w=d;return Number.isInteger(d)&&Math.abs(d)>2**32?w=ce(String(d)):typeof d=="bigint"&&(w=String(d),(d>BigInt(2)**BigInt(32)||d<-(BigInt(2)**BigInt(32)))&&(w=ce(w)),w+="n"),_+=` It must be ${u}. Received ${w}`,_},RangeError);function ce(h){let u="",d=h.length;const _=h[0]==="-"?1:0;for(;d>=_+4;d-=3)u=`_${h.slice(d-3,d)}${u}`;return`${h.slice(0,d)}${u}`}function pe(h,u,d){S(u,"offset"),(h[u]===void 0||h[u+d]===void 0)&&A(u,h.length-(d+1))}function Ce(h,u,d,_,w,P){if(h>d||h<u){const N=typeof u=="bigint"?"n":"";let ae;throw P>3?u===0||u===BigInt(0)?ae=`>= 0${N} and < 2${N} ** ${(P+1)*8}${N}`:ae=`>= -(2${N} ** ${(P+1)*8-1}${N}) and < 2 ** ${(P+1)*8-1}${N}`:ae=`>= ${u}${N} and <= ${d}${N}`,new oe.ERR_OUT_OF_RANGE("value",ae,h)}pe(_,w,P)}function S(h,u){if(typeof h!="number")throw new oe.ERR_INVALID_ARG_TYPE(u,"number",h)}function A(h,u,d){throw Math.floor(h)!==h?(S(h,d),new oe.ERR_OUT_OF_RANGE(d||"offset","an integer",h)):u<0?new oe.ERR_BUFFER_OUT_OF_BOUNDS:new oe.ERR_OUT_OF_RANGE(d||"offset",`>= ${d?1:0} and <= ${u}`,h)}const M=/[^+/0-9A-Za-z-_]/g;function H(h){if(h=h.split("=")[0],h=h.trim().replace(M,""),h.length<2)return"";for(;h.length%4!==0;)h=h+"=";return h}function q(h,u){u=u||1/0;let d;const _=h.length;let w=null;const P=[];for(let N=0;N<_;++N){if(d=h.charCodeAt(N),d>55295&&d<57344){if(!w){if(d>56319){(u-=3)>-1&&P.push(239,191,189);continue}else if(N+1===_){(u-=3)>-1&&P.push(239,191,189);continue}w=d;continue}if(d<56320){(u-=3)>-1&&P.push(239,191,189),w=d;continue}d=(w-55296<<10|d-56320)+65536}else w&&(u-=3)>-1&&P.push(239,191,189);if(w=null,d<128){if((u-=1)<0)break;P.push(d)}else if(d<2048){if((u-=2)<0)break;P.push(d>>6|192,d&63|128)}else if(d<65536){if((u-=3)<0)break;P.push(d>>12|224,d>>6&63|128,d&63|128)}else if(d<1114112){if((u-=4)<0)break;P.push(d>>18|240,d>>12&63|128,d>>6&63|128,d&63|128)}else throw new Error("Invalid code point")}return P}function ve(h){const u=[];for(let d=0;d<h.length;++d)u.push(h.charCodeAt(d)&255);return u}function O(h,u){let d,_,w;const P=[];for(let N=0;N<h.length&&!((u-=2)<0);++N)d=h.charCodeAt(N),_=d>>8,w=d%256,P.push(w),P.push(_);return P}function _e(h){return e.toByteArray(H(h))}function Ye(h,u,d,_){let w;for(w=0;w<_&&!(w+d>=u.length||w>=h.length);++w)u[w+d]=h[w];return w}function Y(h,u){return h instanceof u||h!=null&&h.constructor!=null&&h.constructor.name!=null&&h.constructor.name===u.name}function nt(h){return h!==h}const vn=function(){const h="0123456789abcdef",u=new Array(256);for(let d=0;d<16;++d){const _=d*16;for(let w=0;w<16;++w)u[_+w]=h[d]+h[w]}return u}();function ht(h){return typeof BigInt>"u"?Ss:h}function Ss(){throw new Error("BigInt not supported")}})(xt);var zl={exports:{}},Yr=typeof Reflect=="object"?Reflect:null,nu=Yr&&typeof Yr.apply=="function"?Yr.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Fi;Yr&&typeof Yr.ownKeys=="function"?Fi=Yr.ownKeys:Object.getOwnPropertySymbols?Fi=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Fi=function(e){return Object.getOwnPropertyNames(e)};function y_(t){console&&console.warn&&console.warn(t)}var uh=Number.isNaN||function(e){return e!==e};function Ae(){Ae.init.call(this)}zl.exports=Ae;zl.exports.once=b_;Ae.EventEmitter=Ae;Ae.prototype._events=void 0;Ae.prototype._eventsCount=0;Ae.prototype._maxListeners=void 0;var iu=10;function Zo(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(Ae,"defaultMaxListeners",{enumerable:!0,get:function(){return iu},set:function(t){if(typeof t!="number"||t<0||uh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");iu=t}});Ae.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Ae.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||uh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function dh(t){return t._maxListeners===void 0?Ae.defaultMaxListeners:t._maxListeners}Ae.prototype.getMaxListeners=function(){return dh(this)};Ae.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var i=e==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var s;if(r.length>0&&(s=r[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=o[e];if(l===void 0)return!1;if(typeof l=="function")nu(l,this,r);else for(var c=l.length,f=mh(l,c),n=0;n<c;++n)nu(f[n],this,r);return!0};function fh(t,e,r,n){var i,o,s;if(Zo(r),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),s=o[e]),s===void 0)s=o[e]=r,++t._eventsCount;else if(typeof s=="function"?s=o[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),i=dh(t),i>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=s.length,y_(a)}return t}Ae.prototype.addListener=function(e,r){return fh(this,e,r,!1)};Ae.prototype.on=Ae.prototype.addListener;Ae.prototype.prependListener=function(e,r){return fh(this,e,r,!0)};function m_(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function hh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=m_.bind(n);return i.listener=r,n.wrapFn=i,i}Ae.prototype.once=function(e,r){return Zo(r),this.on(e,hh(this,e,r)),this};Ae.prototype.prependOnceListener=function(e,r){return Zo(r),this.prependListener(e,hh(this,e,r)),this};Ae.prototype.removeListener=function(e,r){var n,i,o,s,a;if(Zo(r),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(o=-1,s=n.length-1;s>=0;s--)if(n[s]===r||n[s].listener===r){a=n[s].listener,o=s;break}if(o<0)return this;o===0?n.shift():__(n,o),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,a||r)}return this};Ae.prototype.off=Ae.prototype.removeListener;Ae.prototype.removeAllListeners=function(e){var r,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var o=Object.keys(n),s;for(i=0;i<o.length;++i)s=o[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(i=r.length-1;i>=0;i--)this.removeListener(e,r[i]);return this};function ph(t,e,r){var n=t._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?r?[i.listener||i]:[i]:r?g_(i):mh(i,i.length)}Ae.prototype.listeners=function(e){return ph(this,e,!0)};Ae.prototype.rawListeners=function(e){return ph(this,e,!1)};Ae.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):yh.call(t,e)};Ae.prototype.listenerCount=yh;function yh(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}Ae.prototype.eventNames=function(){return this._eventsCount>0?Fi(this._events):[]};function mh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function __(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function g_(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function b_(t,e){return new Promise(function(r,n){function i(s){t.removeListener(e,o),n(s)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",i),r([].slice.call(arguments))}_h(t,e,o,{once:!0}),e!=="error"&&w_(t,i,{once:!0})})}function w_(t,e,r){typeof t.on=="function"&&_h(t,"error",e,r)}function _h(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(o){n.once&&t.removeEventListener(e,i),r(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var ui=zl.exports;const v_=hn(ui);window.Buffer=xt.Buffer;window.process=s_;window.EventEmitter=v_;const S_="modulepreload",A_=function(t){return"/"+t},ou={},Rt=function(e,r,n){let i=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(r.map(l=>{if(l=A_(l),l in ou)return;ou[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!n)for(let b=o.length-1;b>=0;b--){const T=o[b];if(T.href===l&&(!c||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":S_,c||(y.as="script",y.crossOrigin=""),y.href=l,a&&y.setAttribute("nonce",a),document.head.appendChild(y),c)return new Promise((b,T)=>{y.addEventListener("load",b),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=window,Ul=Bi.ShadowRoot&&(Bi.ShadyCSS===void 0||Bi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hl=Symbol(),su=new WeakMap;let ql=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Hl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ul&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=su.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&su.set(r,e))}return e}toString(){return this.cssText}};const E_=t=>new ql(typeof t=="string"?t:t+"",void 0,Hl),Ve=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new ql(r,t,Hl)},x_=(t,e)=>{Ul?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=Bi.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},au=Ul?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return E_(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Os;const Zi=window,lu=Zi.trustedTypes,T_=lu?lu.emptyScript:"",cu=Zi.reactiveElementPolyfillSupport,ja={toAttribute(t,e){switch(e){case Boolean:t=t?T_:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},gh=(t,e)=>e!==t&&(e==e||t==t),$s={attribute:!0,type:String,converter:ja,reflect:!1,hasChanged:gh},ka="finalized";let Hr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,r=$s){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){const o=this[e];this[r]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$s}static finalize(){if(this.hasOwnProperty(ka))return!1;this[ka]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(au(i))}else e!==void 0&&r.push(au(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return x_(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=$s){var i;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:ja).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:ja;this._$El=o,this[o]=a.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||gh)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Hr[ka]=!0,Hr.elementProperties=new Map,Hr.elementStyles=[],Hr.shadowRootOptions={mode:"open"},cu==null||cu({ReactiveElement:Hr}),((Os=Zi.reactiveElementVersions)!==null&&Os!==void 0?Os:Zi.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Is;const eo=window,on=eo.trustedTypes,uu=on?on.createPolicy("lit-html",{createHTML:t=>t}):void 0,to="$lit$",It=`lit$${(Math.random()+"").slice(9)}$`,Wl="?"+It,P_=`<${Wl}>`,Er=document,Jn=()=>Er.createComment(""),Qn=t=>t===null||typeof t!="object"&&typeof t!="function",bh=Array.isArray,wh=t=>bh(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ns=`[ 	
\f\r]`,An=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,du=/-->/g,fu=/>/g,lr=RegExp(`>|${Ns}(?:([^\\s"'>=/]+)(${Ns}*=${Ns}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hu=/'/g,pu=/"/g,vh=/^(?:script|style|textarea|title)$/i,C_=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),En=C_(1),sn=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),yu=new WeakMap,mr=Er.createTreeWalker(Er,129,null,!1);function Sh(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return uu!==void 0?uu.createHTML(e):e}const Ah=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=An;for(let a=0;a<r;a++){const l=t[a];let c,f,p=-1,y=0;for(;y<l.length&&(s.lastIndex=y,f=s.exec(l),f!==null);)y=s.lastIndex,s===An?f[1]==="!--"?s=du:f[1]!==void 0?s=fu:f[2]!==void 0?(vh.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=lr):f[3]!==void 0&&(s=lr):s===lr?f[0]===">"?(s=i??An,p=-1):f[1]===void 0?p=-2:(p=s.lastIndex-f[2].length,c=f[1],s=f[3]===void 0?lr:f[3]==='"'?pu:hu):s===pu||s===hu?s=lr:s===du||s===fu?s=An:(s=lr,i=void 0);const b=s===lr&&t[a+1].startsWith("/>")?" ":"";o+=s===An?l+P_:p>=0?(n.push(c),l.slice(0,p)+to+l.slice(p)+It+b):l+It+(p===-2?(n.push(void 0),a):b)}return[Sh(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class Kn{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,f]=Ah(e,r);if(this.el=Kn.createElement(c,n),mr.currentNode=this.el.content,r===2){const p=this.el.content,y=p.firstChild;y.remove(),p.append(...y.childNodes)}for(;(i=mr.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const p=[];for(const y of i.getAttributeNames())if(y.endsWith(to)||y.startsWith(It)){const b=f[s++];if(p.push(y),b!==void 0){const T=i.getAttribute(b.toLowerCase()+to).split(It),E=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:E[2],strings:T,ctor:E[1]==="."?xh:E[1]==="?"?Th:E[1]==="@"?Ph:di})}else l.push({type:6,index:o})}for(const y of p)i.removeAttribute(y)}if(vh.test(i.tagName)){const p=i.textContent.split(It),y=p.length-1;if(y>0){i.textContent=on?on.emptyScript:"";for(let b=0;b<y;b++)i.append(p[b],Jn()),mr.nextNode(),l.push({type:2,index:++o});i.append(p[y],Jn())}}}else if(i.nodeType===8)if(i.data===Wl)l.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(It,p+1))!==-1;)l.push({type:7,index:o}),p+=It.length-1}o++}}static createElement(e,r){const n=Er.createElement("template");return n.innerHTML=e,n}}function xr(t,e,r=t,n){var i,o,s,a;if(e===sn)return e;let l=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const c=Qn(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,n)),n!==void 0?((s=(a=r)._$Co)!==null&&s!==void 0?s:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(e=xr(t,l._$AS(t,e.values),l,n)),e}class Eh{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:Er).importNode(n,!0);mr.currentNode=o;let s=mr.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let f;c.type===2?f=new pn(s,s.nextSibling,this,e):c.type===1?f=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(f=new Ch(s,this,e)),this._$AV.push(f),c=i[++l]}a!==(c==null?void 0:c.index)&&(s=mr.nextNode(),a++)}return mr.currentNode=Er,o}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class pn{constructor(e,r,n,i){var o;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=xr(this,e,r),Qn(e)?e===Fe||e==null||e===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):e!==this._$AH&&e!==sn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wh(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Fe&&Qn(this._$AH)?this._$AA.nextSibling.data=e:this.$(Er.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Kn.createElement(Sh(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.v(n);else{const s=new Eh(o,this),a=s.u(this.options);s.v(n),this.$(a),this._$AH=s}}_$AC(e){let r=yu.get(e.strings);return r===void 0&&yu.set(e.strings,r=new Kn(e)),r}T(e){bh(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new pn(this.k(Jn()),this.k(Jn()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class di{constructor(e,r,n,i,o){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=xr(this,e,r,0),s=!Qn(e)||e!==this._$AH&&e!==sn,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=xr(this,a[n+l],r,l),c===sn&&(c=this._$AH[l]),s||(s=!Qn(c)||c!==this._$AH[l]),c===Fe?e=Fe:e!==Fe&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xh extends di{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Fe?void 0:e}}const R_=on?on.emptyScript:"";class Th extends di{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Fe?this.element.setAttribute(this.name,R_):this.element.removeAttribute(this.name)}}class Ph extends di{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){var n;if((e=(n=xr(this,e,r,0))!==null&&n!==void 0?n:Fe)===sn)return;const i=this._$AH,o=e===Fe&&i!==Fe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Fe&&(i===Fe||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ch{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){xr(this,e)}}const zI={O:to,P:It,A:Wl,C:1,M:Ah,L:Eh,R:wh,D:xr,I:pn,V:di,H:Th,N:Ph,U:xh,F:Ch},mu=eo.litHtmlPolyfillSupport;mu==null||mu(Kn,pn),((Is=eo.litHtmlVersions)!==null&&Is!==void 0?Is:eo.litHtmlVersions=[]).push("2.8.0");const Rh=(t,e,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=o._$litPart$;if(s===void 0){const a=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new pn(e.insertBefore(Jn(),a),a,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ls,Ms;let Fn=class extends Hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return sn}};Fn.finalized=!0,Fn._$litElement$=!0,(Ls=globalThis.litElementHydrateSupport)===null||Ls===void 0||Ls.call(globalThis,{LitElement:Fn});const _u=globalThis.litElementPolyfillSupport;_u==null||_u({LitElement:Fn});((Ms=globalThis.litElementVersions)!==null&&Ms!==void 0?Ms:globalThis.litElementVersions=[]).push("3.3.3");function O_(t){return(e={},r)=>{const n={};for(const i in t)n[i]=t[i](e[i],r);return n}}const $_="action",Xn="state",xn=Symbol(),gu=Symbol(),bu=Symbol(),wu=Symbol(),vu=Symbol(),Su=Symbol(),Dr=Symbol();function I_(t,e){return class extends e{constructor(...r){super(...r),this[Dr]=this[Dr].bind(this),this[gu]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[bu](),this[vu]()}disconnectedCallback(){this[Su](),this[wu](),super.disconnectedCallback&&super.disconnectedCallback()}[gu](){this[xn]=this.mapEvents?this.mapEvents():{}}[bu](){for(const r in this[xn])this.addEventListener(r,this[xn][r],!1)}[wu](){for(const r in this[xn])this.removeEventListener(r,this[xn][r],!1)}[vu](){t.addEventListener(Xn,this[Dr]),this[Dr]()}[Su](){t.removeEventListener(Xn,this[Dr])}[Dr](){this.mapState&&Object.assign(this,this.mapState(t.state))}}}const es=t=>t;let N_=class extends EventTarget{constructor(e,r){super(),this.state=e,this.reducer=r,this.state=this.reducer(this.state,{})}dispatch(e){const r=new CustomEvent($_,{cancelable:!0,detail:{action:e}});return this.dispatchEvent(r)&&(e=r.detail.action,this.state=this.reducer(this.state,e),this.dispatchEvent(new CustomEvent(Xn,{detail:{action:e}}))),e}};const Oh=(t,e)=>e.indexOf("/")>-1?e:t+"/"+e,Au=(t,e,r)=>{const n=Oh(e,r);return t.dispatch[e][r]=i=>{const o={type:n,...i!==void 0&&{payload:i}};return t.dispatch(o)},n},gi={},Eu=[],L_={dispatchPlugin:{onModel(t,e,r){t.dispatch[e]={};for(const n in r.reducers)Au(t,e,n)}},effectsPlugin:{onModel(t,e,r){if(!r.effects)return;const n=r.effects({getDispatch:()=>t.dispatch,getState:()=>t.state});for(const i in n){const o=Au(t,e,i),s=n[i];gi[o]?gi[o].push(s):gi[o]=[s],i==="init"&&Eu.push(s)}},onStore(t){t.addEventListener(Xn,e=>{const{action:r}=e.detail,n=gi[r.type];n&&queueMicrotask(()=>n.forEach(i=>i(r.payload)))}),queueMicrotask(()=>Eu.forEach(e=>e()))}}},M_=t=>{const e={...t.models},r={...L_,...t.plugins};for(const a in r){const l=r[a];l.model&&(e[a]=l.model)}const n={};for(const a in e){const l=e[a],c={};for(const f in l.reducers)c[Oh(a,f)]=l.reducers[f];n[a]=(f=l.state,p)=>{const y=c[p.type];return y?y(f,p.payload):f}}const i=O_(n),o=t&&t.state,s=new N_(o,i);for(const a in r){const l=r[a];if(l.onModel)for(const c in e)l.onModel(s,c,e[c])}for(const a in r){const l=r[a];l.onStore&&l.onStore(s)}return s};function D_(t,e){const r={name:location.hostname,storage:localStorage,serializer:JSON,filter:o=>!0,persist:o=>o,delay:0,...e},n=r.storage.getItem(r.name);n&&(t.state={...t.state,...r.serializer.parse(n)});let i=0;return t.addEventListener(Xn,o=>{const{action:s}=o.detail;r.filter(s)&&(i&&window.clearTimeout(i),i=window.setTimeout(()=>{r.storage.setItem(r.name,r.serializer.stringify(r.persist(t.state))),i=0},r.delay))}),t}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class j_ extends HTMLElement{static get version(){return"23.5.3"}}customElements.define("vaadin-lumo-styles",j_);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const k_=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(r){this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const $h=[];function zt(t,e,r={}){t&&q_(t)&&console.warn(`The custom element definition for "${t}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=z_(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,r):$h.push({themeFor:t,styles:e,include:r.include,moduleId:r.moduleId})}function Fa(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():$h}function F_(t,e){return(t||"").split(" ").some(r=>new RegExp(`^${r.split("*").join(".*")}$`).test(e))}function B_(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function z_(t=[]){return[t].flat(1/0).filter(e=>e instanceof ql?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Ih(t){const e=[];return t.include&&[].concat(t.include).forEach(r=>{const n=Fa().find(i=>i.moduleId===r);n?e.push(...Ih(n),...n.styles):console.warn(`Included moduleId ${r} not found in style registry`)},t.styles),e}function U_(t,e){const r=document.createElement("style");r.innerHTML=t.map(n=>n.cssText).join(`
`),e.content.appendChild(r)}function H_(t){const e=`${t}-default-theme`,r=Fa().filter(n=>n.moduleId!==e&&F_(n.themeFor,t)).map(n=>({...n,styles:[...Ih(n),...n.styles],includePriority:B_(n.moduleId)})).sort((n,i)=>i.includePriority-n.includePriority);return r.length>0?r:Fa().filter(n=>n.moduleId===e)}function q_(t){return Nh(customElements.get(t))}function Nh(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const yn=t=>class extends k_(t){static finalize(){if(super.finalize(),this.elementStyles)return;const r=this.prototype._template;!r||Nh(this)||U_(this.getStylesForThis(),r)}static finalizeStyles(r){const n=this.getStylesForThis();return r?[...super.finalizeStyles(r),...n]:n}static getStylesForThis(){const r=Object.getPrototypeOf(this.prototype),n=(r?r.constructor.__themes:[])||[];this.__themes=[...n,...H_(this.is)];const i=this.__themes.flatMap(o=>o.styles);return i.filter((o,s)=>s===i.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const W_=Ve`
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
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
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
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,Lh=document.createElement("template");Lh.innerHTML=`<style>${W_.toString().replace(":host","html")}</style>`;document.head.appendChild(Lh.content);const Mh=Ve`
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
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
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
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;zt("",Mh,{moduleId:"lumo-color"});const V_=Ve`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;zt("",[Mh,V_],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const G_=Ve`
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
`,Dh=document.createElement("template");Dh.innerHTML=`<style>${G_.toString().replace(":host","html")}</style>`;document.head.appendChild(Dh.content);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Y_=Ve`
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
`,J_=Ve`
  html,
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

  a:where(:any-link):hover {
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
`;zt("",J_,{moduleId:"lumo-typography"});const jh=document.createElement("template");jh.innerHTML=`<style>${Y_.toString().replace(":host","html")}</style>`;document.head.appendChild(jh.content);zt("vaadin-app-layout",Ve`
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
  `,{moduleId:"lumo-app-layout"});const kh=document.createElement("template");kh.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(kh.content);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const ts=t=>t.test(navigator.userAgent),Ba=t=>t.test(navigator.platform),Q_=t=>t.test(navigator.vendor);ts(/Android/);ts(/Chrome/)&&Q_(/Google Inc/);ts(/Firefox/);const K_=Ba(/^iPad/)||Ba(/^Mac/)&&navigator.maxTouchPoints>1,X_=Ba(/^iPhone/),Z_=X_||K_;ts(/^((?!chrome|android).)*safari/i);const VI=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */function Fh(){if(Z_){const t=window.innerHeight,r=window.innerWidth>t,n=document.documentElement.clientHeight;r&&n>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${n-t}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Fh();window.addEventListener("resize",Fh);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Tn(t,e,r){return{index:t,removed:e,addedCount:r}}const Bh=0,zh=1,za=2,Ua=3;function eg(t,e,r,n,i,o){let s=o-i+1,a=r-e+1,l=new Array(s);for(let c=0;c<s;c++)l[c]=new Array(a),l[c][0]=c;for(let c=0;c<a;c++)l[0][c]=c;for(let c=1;c<s;c++)for(let f=1;f<a;f++)if(Vl(t[e+f-1],n[i+c-1]))l[c][f]=l[c-1][f-1];else{let p=l[c-1][f]+1,y=l[c][f-1]+1;l[c][f]=p<y?p:y}return l}function tg(t){let e=t.length-1,r=t[0].length-1,n=t[e][r],i=[];for(;e>0||r>0;){if(e==0){i.push(za),r--;continue}if(r==0){i.push(Ua),e--;continue}let o=t[e-1][r-1],s=t[e-1][r],a=t[e][r-1],l;s<a?l=s<o?s:o:l=a<o?a:o,l==o?(o==n?i.push(Bh):(i.push(zh),n=o),e--,r--):l==s?(i.push(Ua),e--,n=s):(i.push(za),r--,n=a)}return i.reverse(),i}function rg(t,e,r,n,i,o){let s=0,a=0,l,c=Math.min(r-e,o-i);if(e==0&&i==0&&(s=ng(t,n,c)),r==t.length&&o==n.length&&(a=ig(t,n,c-s)),e+=s,i+=s,r-=a,o-=a,r-e==0&&o-i==0)return[];if(e==r){for(l=Tn(e,[],0);i<o;)l.removed.push(n[i++]);return[l]}else if(i==o)return[Tn(e,[],r-e)];let f=tg(eg(t,e,r,n,i,o));l=void 0;let p=[],y=e,b=i;for(let T=0;T<f.length;T++)switch(f[T]){case Bh:l&&(p.push(l),l=void 0),y++,b++;break;case zh:l||(l=Tn(y,[],0)),l.addedCount++,y++,l.removed.push(n[b]),b++;break;case za:l||(l=Tn(y,[],0)),l.addedCount++,y++;break;case Ua:l||(l=Tn(y,[],0)),l.removed.push(n[b]),b++;break}return l&&p.push(l),p}function ng(t,e,r){for(let n=0;n<r;n++)if(!Vl(t[n],e[n]))return n;return r}function ig(t,e,r){let n=t.length,i=e.length,o=0;for(;o<r&&Vl(t[--n],e[--i]);)o++;return o}function Uh(t,e){return rg(t,0,t.length,e,0,e.length)}function Vl(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let og=0,Hh=0,Jr=[],sg=0,Ha=!1,qh=document.createTextNode("");new window.MutationObserver(ag).observe(qh,{characterData:!0});function ag(){Ha=!1;const t=Jr.length;for(let e=0;e<t;e++){let r=Jr[e];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}Jr.splice(0,t),Hh+=t}const Bn={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Qt={run(t){return Ha||(Ha=!0,qh.textContent=sg++),Jr.push(t),og++},cancel(t){const e=t-Hh;if(e>=0){if(!Jr[e])throw new Error("invalid async handle: "+t);Jr[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function jr(t){return t.localName==="slot"}let Dt=class{static getFlattenedNodes(t){const e=G(t);return jr(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(r=>jr(r)?(r=r,G(r).assignedNodes({flatten:!0})):[r]).reduce((r,n)=>r.concat(n),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){jr(this._target)?this._listenSlots([this._target]):G(this._target).children&&(this._listenSlots(G(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){jr(this._target)?this._unlistenSlots([this._target]):G(this._target).children&&(this._unlistenSlots(G(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Qt.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=Uh(e,this._effectiveNodes);for(let i=0,o;i<r.length&&(o=r[i]);i++)for(let s=0,a;s<o.removed.length&&(a=o.removed[s]);s++)t.removedNodes.push(a);for(let i=0,o;i<r.length&&(o=r[i]);i++)for(let s=o.index;s<o.index+o.addedCount;s++)t.addedNodes.push(e[s]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];jr(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];jr(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ro=!1,Wh=[],Vh=[];function Gh(){ro=!0,requestAnimationFrame(function(){ro=!1,lg(Wh),setTimeout(function(){cg(Vh)})})}function lg(t){for(;t.length;)Yh(t.shift())}function cg(t){for(let e=0,r=t.length;e<r;e++)Yh(t.shift())}function Yh(t){const e=t[0],r=t[1],n=t[2];try{r.apply(e,n)}catch(i){setTimeout(()=>{throw i})}}function ug(t,e,r){ro||Gh(),Wh.push([t,e,r])}function Jh(t,e,r){ro||Gh(),Vh.push([t,e,r])}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dg=/(url\()([^)]*)(\))/g,fg=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,bi,rt;function zn(t,e){if(t&&fg.test(t)||t==="//")return t;if(bi===void 0){bi=!1;try{const r=new URL("b","http://a");r.pathname="c%20d",bi=r.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),bi)try{return new URL(t,e).href}catch{return t}return rt||(rt=document.implementation.createHTMLDocument("temp"),rt.base=rt.createElement("base"),rt.head.appendChild(rt.base),rt.anchor=rt.createElement("a"),rt.body.appendChild(rt.anchor)),rt.base.href=e,rt.anchor.href=t,rt.anchor.href||t}function Gl(t,e){return t.replace(dg,function(r,n,i,o){return n+"'"+zn(i.replace(/["']/g,""),e)+"'"+o})}function Yl(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jl=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const hg=Jl&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let pg=window.Polymer&&window.Polymer.rootPath||Yl(document.baseURI||window.location.href),no=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,yg=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,an=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,mg=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Zn=window.Polymer&&window.Polymer.legacyOptimizations||!1,Qh=window.Polymer&&window.Polymer.legacyWarnings||!1,_g=window.Polymer&&window.Polymer.syncInitialRender||!1,qa=window.Polymer&&window.Polymer.legacyUndefined||!1,gg=window.Polymer&&window.Polymer.orderedComputed||!1,Ql=!0;const bg=function(t){Ql=t};let xu=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Kh=window.Polymer&&window.Polymer.fastDomIf||!1,Wa=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,wi=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,wg=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let vg=0;const Be=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=vg++;function n(i){let o=i.__mixinSet;if(o&&o[r])return i;let s=e,a=s.get(i);if(!a){a=t(i),s.set(i,a);let l=Object.create(a.__mixinSet||o||null);l[r]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Kl={},Xh={};function Tu(t,e){Kl[t]=Xh[t.toLowerCase()]=e}function Pu(t){return Kl[t]||Xh[t.toLowerCase()]}function Sg(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class ei extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,r){if(e){let n=Pu(e);return n&&r?n.querySelector(r):n}return null}attributeChangedCallback(e,r,n,i){r!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,r=zn(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Yl(r)}return this.__assetpath}register(e){if(e=e||this.id,e){if(an&&Pu(e)!==void 0)throw Tu(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Tu(e,this),Sg(this)}}}ei.prototype.modules=Kl;customElements.define("dom-module",ei);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ag="link[rel=import][type~=css]",Eg="include",Cu="shady-unscoped";function Xl(t){return ei.import(t)}function Ru(t){let e=t.body?t.body:t;const r=Gl(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=r,n}function xg(t){const e=t.trim().split(/\s+/),r=[];for(let n=0;n<e.length;n++)r.push(...Tg(e[n]));return r}function Tg(t){const e=Xl(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const r=[];r.push(...ec(e));const n=e.querySelector("template");n&&r.push(...Zl(n,e.assetpath)),e._styles=r}return e._styles}function Zl(t,e){if(!t._styles){const r=[],n=t.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let o=n[i],s=o.getAttribute(Eg);s&&r.push(...xg(s).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(o.textContent=Gl(o.textContent,e)),r.push(o)}t._styles=r}return t._styles}function Pg(t){let e=Xl(t);return e?ec(e):[]}function ec(t){const e=[],r=t.querySelectorAll(Ag);for(let n=0;n<r.length;n++){let i=r[n];if(i.import){const o=i.import,s=i.hasAttribute(Cu);if(s&&!o._unscopedStyle){const a=Ru(o);a.setAttribute(Cu,""),o._unscopedStyle=a}else o._style||(o._style=Ru(o));e.push(s?o._unscopedStyle:o._style)}}return e}function Cg(t){let e=t.trim().split(/\s+/),r="";for(let n=0;n<e.length;n++)r+=Rg(e[n]);return r}function Rg(t){let e=Xl(t);if(e&&e._cssText===void 0){let r=$g(e),n=e.querySelector("template");n&&(r+=Og(n,e.assetpath)),e._cssText=r||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Og(t,e){let r="";const n=Zl(t,e);for(let i=0;i<n.length;i++){let o=n[i];o.parentNode&&o.parentNode.removeChild(o),r+=o.textContent}return r}function $g(t){let e="",r=ec(t);for(let n=0;n<r.length;n++)e+=r[n].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Va(t){return t.indexOf(".")>=0}function Ut(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Zh(t,e){return t.indexOf(e+".")===0}function ti(t,e){return e.indexOf(t+".")===0}function ri(t,e,r){return e+r.slice(t.length)}function Ig(t,e){return t===e||Zh(t,e)||ti(t,e)}function Mn(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let n=t[r].toString().split(".");for(let i=0;i<n.length;i++)e.push(n[i])}return e.join(".")}else return t}function ep(t){return Array.isArray(t)?Mn(t).split("."):t.toString().split(".")}function Je(t,e,r){let n=t,i=ep(e);for(let o=0;o<i.length;o++){if(!n)return;let s=i[o];n=n[s]}return r&&(r.path=i.join(".")),n}function Ou(t,e,r){let n=t,i=ep(e),o=i[i.length-1];if(i.length>1){for(let s=0;s<i.length-1;s++){let a=i[s];if(n=n[a],!n)return}n[o]=r}else n[e]=r;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const io={},Ng=/-[a-z]/g,Lg=/([A-Z])/g;function tc(t){return io[t]||(io[t]=t.indexOf("-")<0?t:t.replace(Ng,e=>e[1].toUpperCase()))}function rs(t){return io[t]||(io[t]=t.replace(Lg,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mg=Qt,tp=Be(t=>{class e extends t{static createProperties(n){const i=this.prototype;for(let o in n)o in i||i._createPropertyAccessor(o)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(o){this._setPendingProperty(n,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,o){let s=this.__data[n],a=this._shouldPropertyChange(n,i,s);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=s),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Mg.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(n,i,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,o)),this.__dataCounter--}_shouldPropertiesChange(n,i,o){return!!i}_propertiesChanged(n,i,o){}_shouldPropertyChange(n,i,o){return o!==i&&(o===o||i===i)}attributeChangedCallback(n,i,o,s){i!==o&&this._attributeToProperty(n,o),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,o,s)}_attributeToProperty(n,i,o){if(!this.__serializing){const s=this.__dataAttributes,a=s&&s[n]||n;this[a]=this._deserializeValue(i,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,o){this.__serializing=!0,o=arguments.length<3?this[n]:o,this._valueToNodeAttribute(this,o,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,o){const s=this._serializeValue(i);(o==="class"||o==="name"||o==="slot")&&(n=G(n)),s===void 0?n.removeAttribute(o):n.setAttribute(o,s===""&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n!=null?n.toString():void 0}}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rp={};let vi=HTMLElement.prototype;for(;vi;){let t=Object.getOwnPropertyNames(vi);for(let e=0;e<t.length;e++)rp[t[e]]=!0;vi=Object.getPrototypeOf(vi)}const Dg=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function jg(t,e){if(!rp[e]){let r=t[e];r!==void 0&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}const np=Be(t=>{const e=tp(t);class r extends e{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let o=0;o<i.length;o++)this.prototype._createPropertyAccessor(tc(i[o]))}static attributeNameForProperty(i){return rs(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let o in i)this._setProperty(o,i[o])}_ensureAttribute(i,o){const s=this;s.hasAttribute(i)||this._valueToNodeAttribute(s,o,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(Dg(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,o){let s;switch(o){case Object:try{s=JSON.parse(i)}catch{s=i}break;case Array:try{s=JSON.parse(i)}catch{s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:s=isNaN(i)?String(i):Number(i),s=new Date(s);break;default:s=super._deserializeValue(i,o);break}return s}_definePropertyAccessor(i,o){jg(this,i),super._definePropertyAccessor(i,o)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kg={"dom-if":!0,"dom-repeat":!0};let $u=!1,Iu=!1;function Fg(){if(!$u){$u=!0;const t=document.createElement("textarea");t.placeholder="a",Iu=t.placeholder===t.textContent}return Iu}function Bg(t){Fg()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const zg=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,r,n)=>{const i=r.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(i,n));return}e.setAttribute(n,i)}})();function Ug(t){let e=t.getAttribute("is");if(e&&kg[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;){const{name:n}=r.attributes[0];zg(t,r,n),r.removeAttribute(n)}}return t}function ip(t,e){let r=e.parentInfo&&ip(t,e.parentInfo);if(r){for(let n=r.firstChild,i=0;n;n=n.nextSibling)if(e.parentIndex===i++)return n}else return t}function Hg(t,e,r,n){n.id&&(e[n.id]=r)}function qg(t,e,r){if(r.events&&r.events.length)for(let n=0,i=r.events,o;n<i.length&&(o=i[n]);n++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function Wg(t,e,r,n){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=n)}function Vg(t,e,r){return t=t._methodHost||t,function(i){t[r]?t[r](i,i.detail):console.warn("listener method `"+r+"` not defined")}}const Gg=Be(t=>{class e extends t{static _parseTemplate(n,i){if(!n._templateInfo){let o=n._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!i,o.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,o,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,o){return this._parseTemplateNode(n.content,i,o)}static _parseTemplateNode(n,i,o){let s=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?s=this._parseTemplateNestedTemplate(a,i,o)||s:a.localName==="slot"&&(i.hasInsertionPoint=!0),Bg(a),a.firstChild&&this._parseTemplateChildNodes(a,i,o),a.hasAttributes&&a.hasAttributes()&&(s=this._parseTemplateNodeAttributes(a,i,o)||s),s||o.noted}static _parseTemplateChildNodes(n,i,o){if(!(n.localName==="script"||n.localName==="style"))for(let s=n.firstChild,a=0,l;s;s=l){if(s.localName=="template"&&(s=Ug(s)),l=s.nextSibling,s.nodeType===Node.TEXT_NODE){let f=l;for(;f&&f.nodeType===Node.TEXT_NODE;)s.textContent+=f.textContent,l=f.nextSibling,n.removeChild(f),f=l;if(i.stripWhiteSpace&&!s.textContent.trim()){n.removeChild(s);continue}}let c={parentIndex:a,parentInfo:o};this._parseTemplateNode(s,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),s.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,o){let s=n,a=this._parseTemplate(s,i);return(a.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,o){let s=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)s=this._parseTemplateNodeAttribute(n,i,o,c.name,c.value)||s;return s}static _parseTemplateNodeAttribute(n,i,o,s,a){return s.slice(0,3)==="on-"?(n.removeAttribute(s),o.events=o.events||[],o.events.push({name:s.slice(3),value:a}),!0):s==="id"?(o.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let o=i.nodeInfoList,s=i.content||n.content,a=document.importNode(s,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let c=0,f=o.length,p;c<f&&(p=o[c]);c++){let y=l[c]=ip(a,p);Hg(this,a.$,y,p),Wg(this,y,p,i),qg(this,y,p)}return a=a,a}_addMethodEventListenerToNode(n,i,o,s){s=s||n;let a=Vg(s,i,o);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,o){n.addEventListener(i,o)}_removeEventListenerFromNode(n,i,o){n.removeEventListener(i,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ni=0;const ii=[],ye={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},op="__computeInfo",Yg=/[A-Z]/;function Ds(t,e,r){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),r))for(let i in n){let o=n[i],s=n[i]=Array(o.length);for(let a=0;a<o.length;a++)s[a]=o[a]}return n}function Dn(t,e,r,n,i,o){if(e){let s=!1;const a=ni++;for(let l in r){let c=i?Ut(l):l,f=e[c];if(f)for(let p=0,y=f.length,b;p<y&&(b=f[p]);p++)(!b.info||b.info.lastRun!==a)&&(!i||rc(l,b.trigger))&&(b.info&&(b.info.lastRun=a),b.fn(t,l,r,n,b.info,i,o),s=!0)}return s}return!1}function Jg(t,e,r,n,i,o,s,a){let l=!1,c=s?Ut(n):n,f=e[c];if(f)for(let p=0,y=f.length,b;p<y&&(b=f[p]);p++)(!b.info||b.info.lastRun!==r)&&(!s||rc(n,b.trigger))&&(b.info&&(b.info.lastRun=r),b.fn(t,n,i,o,b.info,s,a),l=!0);return l}function rc(t,e){if(e){let r=e.name;return r==t||!!(e.structured&&Zh(r,t))||!!(e.wildcard&&ti(r,t))}else return!0}function Nu(t,e,r,n,i){let o=typeof i.method=="string"?t[i.method]:i.method,s=i.property;o?o.call(t,t.__data[s],n[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Qg(t,e,r,n,i){let o=t[ye.NOTIFY],s,a=ni++;for(let c in e)e[c]&&(o&&Jg(t,o,a,c,r,n,i)||i&&Kg(t,c,r))&&(s=!0);let l;s&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Kg(t,e,r){let n=Ut(e);if(n!==e){let i=rs(n)+"-changed";return sp(t,i,r[e],e),!0}return!1}function sp(t,e,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),G(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function Xg(t,e,r,n,i,o){let a=(o?Ut(e):e)!=e?e:null,l=a?Je(t,a):t.__data[e];a&&l===void 0&&(l=r[e]),sp(t,i.eventName,l,a)}function Zg(t,e,r,n,i){let o,s=t.detail,a=s&&s.path;a?(n=ri(r,n,a),o=s&&s.value):o=t.currentTarget[r],o=i?!o:o,(!e[ye.READ_ONLY]||!e[ye.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,o,!0,!!a)&&(!s||!s.queueProperty)&&e._invalidateProperties()}function eb(t,e,r,n,i){let o=t.__data[e];no&&(o=no(o,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,o)}function tb(t,e,r,n){let i=t[ye.COMPUTE];if(i)if(gg){ni++;const o=nb(t),s=[];for(let l in e)Lu(l,i,s,o,n);let a;for(;a=s.shift();)ap(t,"",e,r,a)&&Lu(a.methodInfo,i,s,o,n);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let o=e;for(;Dn(t,i,o,r,n);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}const rb=(t,e,r)=>{let n=0,i=e.length-1,o=-1;for(;n<=i;){const s=n+i>>1,a=r.get(e[s].methodInfo)-r.get(t.methodInfo);if(a<0)n=s+1;else if(a>0)i=s-1;else{o=s;break}}o<0&&(o=i+1),e.splice(o,0,t)},Lu=(t,e,r,n,i)=>{const o=i?Ut(t):t,s=e[o];if(s)for(let a=0;a<s.length;a++){const l=s[a];l.info.lastRun!==ni&&(!i||rc(t,l.trigger))&&(l.info.lastRun=ni,rb(l.info,r,n))}};function nb(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[ye.COMPUTE];let{counts:n,ready:i,total:o}=ib(t),s;for(;s=i.shift();){e.set(s,e.size);const a=r[s];a&&a.forEach(l=>{const c=l.info.methodInfo;--o,--n[c]===0&&i.push(c)})}o!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function ib(t){const e=t[op],r={},n=t[ye.COMPUTE],i=[];let o=0;for(let s in e){const a=e[s];o+=r[s]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let s in n)e[s]||i.push(s);return{counts:r,ready:i,total:o}}function ap(t,e,r,n,i){let o=Ga(t,e,r,n,i);if(o===ii)return!1;let s=i.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,o,!0):(t[s]=o,!1)}function ob(t,e,r){let n=t.__dataLinkedPaths;if(n){let i;for(let o in n){let s=n[o];ti(o,e)?(i=ri(o,s,e),t._setPendingPropertyOrPath(i,r,!0,!0)):ti(s,e)&&(i=ri(s,o,e),t._setPendingPropertyOrPath(i,r,!0,!0))}}}function js(t,e,r,n,i,o,s){r.bindings=r.bindings||[];let a={kind:n,target:i,parts:o,literal:s,isCompound:o.length!==1};if(r.bindings.push(a),ub(a)){let{event:c,negate:f}=a.parts[0];a.listenerEvent=c||rs(i)+"-changed",a.listenerNegate=f}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let f=a.parts[c];f.compoundIndex=c,sb(t,e,a,f,l)}}function sb(t,e,r,n,i){if(!n.literal)if(r.kind==="attribute"&&r.target[0]==="-")console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,s={index:i,binding:r,part:n,evaluator:t};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=cp(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:ab,info:s,trigger:l})}}}function ab(t,e,r,n,i,o,s){let a=s[i.index],l=i.binding,c=i.part;if(o&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let f=r[e];e=ri(c.source,l.target,e),a._setPendingPropertyOrPath(e,f,!1,!0)&&t._enqueueClient(a)}else{let f=i.evaluator._evaluateBinding(t,c,e,r,n,o);f!==ii&&lb(t,a,l,c,f)}}function lb(t,e,r,n,i){if(i=cb(e,i,r,n),no&&(i=no(i,r.target,r.kind,e)),r.kind=="attribute")t._valueToNodeAttribute(e,i,r.target);else{let o=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?(!e[ye.READ_ONLY]||!e[ye.READ_ONLY][o])&&e._setPendingProperty(o,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,i)}}function cb(t,e,r,n){if(r.isCompound){let i=t.__dataCompoundStorage[r.target];i[n.compoundIndex]=e,e=i.join("")}return r.kind!=="attribute"&&(r.target==="textContent"||r.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function ub(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function db(t,e){let{nodeList:r,nodeInfoList:n}=e;if(n.length)for(let i=0;i<n.length;i++){let o=n[i],s=r[i],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];fb(s,c),hb(s,t,c)}s.__dataHost=t}}function fb(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=n[s].literal;let o=e.target;r[o]=i,e.literal&&e.kind=="property"&&(o==="className"&&(t=G(t)),t[o]=e.literal)}}function hb(t,e,r){if(r.listenerEvent){let n=r.parts[0];t.addEventListener(r.listenerEvent,function(i){Zg(i,e,r.target,n.source,n.negate)})}}function Mu(t,e,r,n,i,o){o=e.static||o&&(typeof o!="object"||o[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:o};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,r,{fn:n,info:s,trigger:l});return o&&t._addPropertyEffect(e.methodName,r,{fn:n,info:s}),s}function Ga(t,e,r,n,i){let o=t._methodHost||t,s=o[i.methodName];if(s){let a=t._marshalArgs(i.args,e,r);return a===ii?ii:s.apply(o,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const pb=[],lp="(?:[a-zA-Z_$][\\w.:$\\-*]*)",yb="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",mb="(?:'(?:[^'\\\\]|\\\\.)*')",_b='(?:"(?:[^"\\\\]|\\\\.)*")',gb="(?:"+mb+"|"+_b+")",Du="(?:("+lp+"|"+yb+"|"+gb+")\\s*)",bb="(?:"+Du+"(?:,\\s*"+Du+")*)",wb="(?:\\(\\s*(?:"+bb+"?)\\)\\s*)",vb="("+lp+"\\s*"+wb+"?)",Sb="(\\[\\[|{{)\\s*",Ab="(?:]]|}})",Eb="(?:(!)\\s*)?",xb=Sb+Eb+vb+Ab,ju=new RegExp(xb,"g");function ku(t){let e="";for(let r=0;r<t.length;r++){let n=t[r].literal;e+=n||""}return e}function ks(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:pb};if(e[2].trim()){let i=e[2].replace(/\\,/g,"&comma;").split(",");return Tb(i,n)}else return n}return null}function Tb(t,e){return e.args=t.map(function(r){let n=cp(r);return n.literal||(e.static=!1),n},this),e}function cp(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0;break}return r.literal||(r.rootProperty=Ut(e),r.structured=Va(e),r.structured&&(r.wildcard=e.slice(-2)==".*",r.wildcard&&(r.name=e.slice(0,-2)))),r}function Fu(t,e,r){let n=Je(t,r);return n===void 0&&(n=e[r]),n}function up(t,e,r,n){const i={indexSplices:n};qa&&!t._overrideLegacyUndefined&&(e.splices=i),t.notifyPath(r+".splices",i),t.notifyPath(r+".length",e.length),qa&&!t._overrideLegacyUndefined&&(i.indexSplices=[])}function Pn(t,e,r,n,i,o){up(t,e,r,[{index:n,addedCount:i,removed:o,object:e,type:"splice"}])}function Pb(t){return t[0].toUpperCase()+t.substring(1)}const ns=Be(t=>{const e=Gg(np(t));class r extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return ye}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Cn.length){let i=Cn[Cn.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let o=this[ye.READ_ONLY];for(let s in i)(!o||!o[s])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=i[s])}_addPropertyEffect(i,o,s){this._createPropertyAccessor(i,o==ye.READ_ONLY);let a=Ds(this,o,!0)[i];a||(a=this[o][i]=[]),a.push(s)}_removePropertyEffect(i,o,s){let a=Ds(this,o,!0)[i],l=a.indexOf(s);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,o){let s=this[o];return!!(s&&s[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,ye.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,ye.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,ye.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,ye.COMPUTE)}_setPendingPropertyOrPath(i,o,s,a){if(a||Ut(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=Je(this,i);if(i=Ou(this,i,o),!i||!super._shouldPropertyChange(i,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,o,s))return ob(this,i,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,o,s);this[i]=o}return!1}_setUnmanagedPropertyToNode(i,o,s){(s!==i[o]||typeof s=="object")&&(o==="className"&&(i=G(i)),i[o]=s)}_setPendingProperty(i,o,s){let a=this.__dataHasPaths&&Va(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,o,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=o:this.__data[i]=o,this.__dataPending[i]=o,(a||this[ye.NOTIFY]&&this[ye.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=s),!0):!1}_setProperty(i,o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let o=0;o<i.length;o++){let s=i[o];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,o){for(let s in i)(o||!this[ye.READ_ONLY]||!this[ye.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,i[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,o,s){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;tb(this,o,s,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,s,a),this._flushClients(),Dn(this,this[ye.REFLECT],o,s,a),Dn(this,this[ye.OBSERVE],o,s,a),l&&Qg(this,l,o,s,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,o,s){this[ye.PROPAGATE]&&Dn(this,this[ye.PROPAGATE],i,o,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,o,s)}_runEffectsForTemplate(i,o,s,a){const l=(c,f)=>{Dn(this,i.propertyEffects,c,s,f,i.nodeList);for(let p=i.firstChild;p;p=p.nextSibling)this._runEffectsForTemplate(p,c,s,f)};i.runEffects?i.runEffects(l,o,a):l(o,a)}linkPaths(i,o){i=Mn(i),o=Mn(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=o}unlinkPaths(i){i=Mn(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,o){let s={path:""},a=Je(this,i,s);up(this,a,s.path,o)}get(i,o){return Je(o||this,i)}set(i,o,s){s?Ou(s,i,o):(!this[ye.READ_ONLY]||!this[ye.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,o,!0)&&this._invalidateProperties()}push(i,...o){let s={path:""},a=Je(this,i,s),l=a.length,c=a.push(...o);return o.length&&Pn(this,a,s.path,l,o.length,[]),c}pop(i){let o={path:""},s=Je(this,i,o),a=!!s.length,l=s.pop();return a&&Pn(this,s,o.path,s.length,0,[l]),l}splice(i,o,s,...a){let l={path:""},c=Je(this,i,l);o<0?o=c.length-Math.floor(-o):o&&(o=Math.floor(o));let f;return arguments.length===2?f=c.splice(o):f=c.splice(o,s,...a),(a.length||f.length)&&Pn(this,c,l.path,o,a.length,f),f}shift(i){let o={path:""},s=Je(this,i,o),a=!!s.length,l=s.shift();return a&&Pn(this,s,o.path,0,0,[l]),l}unshift(i,...o){let s={path:""},a=Je(this,i,s),l=a.unshift(...o);return o.length&&Pn(this,a,s.path,0,o.length,[]),l}notifyPath(i,o){let s;if(arguments.length==1){let a={path:""};o=Je(this,i,a),s=a.path}else Array.isArray(i)?s=Mn(i):s=i;this._setPendingPropertyOrPath(s,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,o){this._addPropertyEffect(i,ye.READ_ONLY),o&&(this["_set"+Pb(i)]=function(s){this._setProperty(i,s)})}_createPropertyObserver(i,o,s){let a={property:i,method:o,dynamicFn:!!s};this._addPropertyEffect(i,ye.OBSERVE,{fn:Nu,info:a,trigger:{name:i}}),s&&this._addPropertyEffect(o,ye.OBSERVE,{fn:Nu,info:a,trigger:{name:o}})}_createMethodObserver(i,o){let s=ks(i);if(!s)throw new Error("Malformed observer expression '"+i+"'");Mu(this,s,ye.OBSERVE,Ga,null,o)}_createNotifyingProperty(i){this._addPropertyEffect(i,ye.NOTIFY,{fn:Xg,info:{eventName:rs(i)+"-changed",property:i}})}_createReflectedProperty(i){let o=this.constructor.attributeNameForProperty(i);o[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,ye.REFLECT,{fn:eb,info:{attrName:o}})}_createComputedProperty(i,o,s){let a=ks(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=Mu(this,a,ye.COMPUTE,ap,i,s);Ds(this,op)[i]=l}_marshalArgs(i,o,s){const a=this.__data,l=[];for(let c=0,f=i.length;c<f;c++){let{name:p,structured:y,wildcard:b,value:T,literal:E}=i[c];if(!E)if(b){const I=ti(p,o),F=Fu(a,s,I?o:p);T={path:I?o:p,value:F,base:I?Je(a,p):F}}else T=y?Fu(a,s,p):a[p];if(qa&&!this._overrideLegacyUndefined&&T===void 0&&i.length>1)return ii;l[c]=T}return l}static addPropertyEffect(i,o,s){this.prototype._addPropertyEffect(i,o,s)}static createPropertyObserver(i,o,s){this.prototype._createPropertyObserver(i,o,s)}static createMethodObserver(i,o){this.prototype._createMethodObserver(i,o)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,o){this.prototype._createReadOnlyProperty(i,o)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,o,s){this.prototype._createComputedProperty(i,o,s)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,o){let s=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==s;if(!a)for(let l in s.propertyEffects)this._createPropertyAccessor(l);if(o)if(s=Object.create(s),s.wasPreBound=a,!this.__templateInfo)this.__templateInfo=s;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;s.parent=l,l.lastChild=s,s.previousSibling=c,c?c.nextSibling=s:l.firstChild=s}else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(i,o,s){let a=i.hostProps=i.hostProps||{};a[o]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[o]=l[o]||[]).push(s)}_stampTemplate(i,o){o=o||this._bindTemplate(i,!0),Cn.push(this);let s=super._stampTemplate(i,o);if(Cn.pop(),o.nodeList=s.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=s.firstChild;l;l=l.nextSibling)a.push(l)}return s.templateInfo=o,db(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(i){const o=i.templateInfo,{previousSibling:s,nextSibling:a,parent:l}=o;s?s.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=s:l&&(l.lastChild=s),o.nextSibling=o.previousSibling=null;let c=o.childNodes;for(let f=0;f<c.length;f++){let p=c[f];G(G(p).parentNode).removeChild(p)}}static _parseTemplateNode(i,o,s){let a=e._parseTemplateNode.call(this,i,o,s);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,o);l&&(i.textContent=ku(l)||" ",js(this,o,s,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,o,s,a,l){let c=this._parseBindings(l,o);if(c){let f=a,p="property";Yg.test(a)?p="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),p="attribute");let y=ku(c);return y&&p=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(y+=" "+i.getAttribute(a)),i.setAttribute(a,y)),p=="attribute"&&f=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&f==="value"&&i.setAttribute(f,""),i.removeAttribute(f),p==="property"&&(a=tc(a)),js(this,o,s,p,a,c,y),!0}else return e._parseTemplateNodeAttribute.call(this,i,o,s,a,l)}static _parseTemplateNestedTemplate(i,o,s){let a=e._parseTemplateNestedTemplate.call(this,i,o,s);const l=i.parentNode,c=s.templateInfo,f=l.localName==="dom-if",p=l.localName==="dom-repeat";xu&&(f||p)&&(l.removeChild(i),s=s.parentInfo,s.templateInfo=c,s.noted=!0,a=!1);let y=c.hostProps;if(Kh&&f)y&&(o.hostProps=Object.assign(o.hostProps||{},y),xu||(s.parentInfo.noted=!0));else{let b="{";for(let T in y){let E=[{mode:b,source:T,dependencies:[T],hostProp:!0}];js(this,o,s,"property","_host_"+T,E)}}return a}static _parseBindings(i,o){let s=[],a=0,l;for(;(l=ju.exec(i))!==null;){l.index>a&&s.push({literal:i.slice(a,l.index)});let c=l[1][0],f=!!l[2],p=l[3].trim(),y=!1,b="",T=-1;c=="{"&&(T=p.indexOf("::"))>0&&(b=p.substring(T+2),p=p.substring(0,T),y=!0);let E=ks(p),I=[];if(E){let{args:F,methodName:$}=E;for(let U=0;U<F.length;U++){let W=F[U];W.literal||I.push(W)}let x=o.dynamicFns;(x&&x[$]||E.static)&&(I.push($),E.dynamicFn=!0)}else I.push(p);s.push({source:p,mode:c,negate:f,customEvent:y,signature:E,dependencies:I,event:b}),a=ju.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&s.push({literal:c})}return s.length?s:null}static _evaluateBinding(i,o,s,a,l,c){let f;return o.signature?f=Ga(i,s,a,l,o.signature):s!=o.source?f=Je(i,o.source):c&&Va(s)?f=Je(i,s):f=i.__data[s],o.negate&&(f=!f),f}}return r}),Cn=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Cb(t){const e={};for(let r in t){const n=t[r];e[r]=typeof n=="function"?{type:n}:n}return e}const Rb=Be(t=>{const e=tp(t);function r(o){const s=Object.getPrototypeOf(o);return s.prototype instanceof i?s:null}function n(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let s=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(s=Cb(a))}o.__ownProperties=s}return o.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const s=this._properties;this.__observedAttributes=s?Object.keys(s).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const s=r(this);s&&s.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const s=n(this);s&&this.createProperties(s)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const s=r(this);this.__properties=Object.assign({},s&&s._properties,n(this))}return this.__properties}static typeForProperty(s){const a=this._properties[s];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ob="3.5.1",Ya=window.ShadyCSS&&window.ShadyCSS.cssBuild,is=Be(t=>{const e=Rb(ns(t));function r(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let f in c){let p=c[f];"value"in p&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[f]=p)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,f,p){f.computed&&(f.readOnly=!0),f.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,f.computed,p)),f.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!f.computed):f.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),f.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):f.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),f.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):f.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),f.observer&&l._createPropertyObserver(c,f.observer,p[f.observer]),l._addPropertyToAttributeMap(c)}function o(l,c,f,p){if(!Ya){const y=c.content.querySelectorAll("style"),b=Zl(c),T=Pg(f),E=c.content.firstElementChild;for(let F=0;F<T.length;F++){let $=T[F];$.textContent=l._processStyleText($.textContent,p),c.content.insertBefore($,E)}let I=0;for(let F=0;F<b.length;F++){let $=b[F],x=y[I];x!==$?($=$.cloneNode(!0),x.parentNode.insertBefore($,x)):I++,$.textContent=l._processStyleText($.textContent,p)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,f),wg&&Ya&&hg){const y=c.content.querySelectorAll("style");if(y){let b="";Array.from(y).forEach(T=>{b+=T.textContent,T.parentNode.removeChild(T)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(b)}}}function s(l){let c=null;if(l&&(!an||mg)&&(c=ei.import(l,"template"),an&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return Ob}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Zn||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let f in c)i(this.prototype,f,c[f],c)}static createObservers(c,f){const p=this.prototype;for(let y=0;y<c.length;y++)p._createMethodObserver(c[y],f)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&s(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Yl(c.url);else{const f=ei.import(this.is);this._importPath=f&&f.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=pg,this.importPath=this.constructor.importPath;let c=r(this.constructor);if(c)for(let f in c){let p=c[f];if(this._canApplyPropertyDefault(f)){let y=typeof p.value=="function"?p.value.call(this):p.value;this._hasAccessor(f)?this._setPendingProperty(f,y,!0):this[f]=y}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,f){return Gl(c,f)}static _finalizeTemplate(c){const f=this.prototype._template;if(f&&!f.__polymerFinalized){f.__polymerFinalized=!0;const p=this.importPath,y=p?zn(p):"";o(this,f,c,y),this.prototype._bindTemplate(f)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const f=G(this);if(f.attachShadow)return c?(f.shadowRoot||(f.attachShadow({mode:"open",shadyUpgradeFragment:c}),f.shadowRoot.appendChild(c),this.constructor._styleSheet&&(f.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),_g&&window.ShadyDOM&&window.ShadyDOM.flushInitial(f.shadowRoot),f.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,f){return!f&&this.importPath&&(f=zn(this.importPath)),zn(c,f)}static _parseTemplateContent(c,f,p){return f.dynamicFns=f.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,f,p)}static _addTemplatePropertyEffect(c,f,p){return Qh&&!(f in this._properties)&&!(p.info.part.signature&&p.info.part.signature.static)&&!p.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${f}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,f,p)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bu=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class dp{constructor(e,r){hp(e,r);const n=r.reduce((i,o,s)=>i+fp(o)+e[s+1],e[0]);this.value=n.toString()}toString(){return this.value}}function fp(t){if(t instanceof dp)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function $b(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof dp)return fp(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Rr=function(e,...r){hp(e,r);const n=document.createElement("template");let i=r.reduce((o,s,a)=>o+$b(s)+e[a+1],e[0]);return Bu&&(i=Bu.createHTML(i)),n.innerHTML=i,n},hp=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ht=is(HTMLElement);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const nc=Be(t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(r=>{r.hostConnected&&r.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(r=>{r.hostDisconnected&&r.hostDisconnected()})}addController(r){this.__controllers.add(r),this.$!==void 0&&this.isConnected&&r.hostConnected&&r.hostConnected()}removeController(r){this.__controllers.delete(r)}}),Ib=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,zi=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Nb(){function t(){return!0}return pp(t)}function Lb(){try{return Mb()?!0:Db()?zi?!jb():!Nb():!1}catch{return!1}}function Mb(){return localStorage.getItem("vaadin.developmentmode.force")}function Db(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function jb(){return!!(zi&&Object.keys(zi).map(e=>zi[e]).filter(e=>e.productionMode).length>0)}function pp(t,e){if(typeof t!="function")return;const r=Ib.exec(t.toString());if(r)try{t=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const zu=function(t,e){if(window.Vaadin.developmentMode)return pp(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Lb());function kb(){}const Fb=function(){if(typeof zu=="function")return zu(kb)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Uu=0,yp=0;const Qr=[];let Hu=0,Ja=!1;const mp=document.createTextNode("");new window.MutationObserver(Bb).observe(mp,{characterData:!0});function Bb(){Ja=!1;const t=Qr.length;for(let e=0;e<t;e++){const r=Qr[e];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}Qr.splice(0,t),yp+=t}const zb={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Ub={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Hb={run(t){Ja||(Ja=!0,mp.textContent=Hu,Hu+=1),Qr.push(t);const e=Uu;return Uu+=1,e},cancel(t){const e=t-yp;if(e>=0){if(!Qr[e])throw new Error(`invalid async handle: ${t}`);Qr[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let _p=class Qa{static debounce(e,r,n){return e instanceof Qa?e._cancelAsync():e=new Qa,e.setConfig(r,n),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,r){this._asyncModule=e,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,Ka.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ka.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}},Ka=new Set;function qb(t){Ka.add(t)}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Kr{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let r="reverse";return e.scrollLeft>0?r="default":(e.scrollLeft=2,e.scrollLeft<2&&(r="negative")),document.body.removeChild(e),r}static getNormalizedScrollLeft(e,r,n){const{scrollLeft:i}=n;if(r!=="rtl"||!e)return i;switch(e){case"negative":return n.scrollWidth-n.clientWidth+i;case"reverse":return n.scrollWidth-n.clientWidth-i;default:return i}}static setNormalizedScrollLeft(e,r,n,i){if(r!=="rtl"||!e){n.scrollLeft=i;return}switch(e){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+i;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-i;break;default:n.scrollLeft=i;break}}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Ot=[];function Wb(){const t=Za();Ot.forEach(e=>{Xa(e,t)})}let Si;const Vb=new MutationObserver(Wb);Vb.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function Xa(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):r!=null&&t.removeAttribute("dir")}function Za(){return document.documentElement.getAttribute("dir")}const Gb=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:r=>r||"",toAttribute:r=>r===""?null:r}}}}static finalize(){super.finalize(),Si||(Si=Kr.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Xa(this,Za(),null))}attributeChangedCallback(r,n,i){if(super.attributeChangedCallback(r,n,i),r!=="dir")return;const o=Za(),s=i===o&&Ot.indexOf(this)===-1,a=!i&&n&&Ot.indexOf(this)===-1;s||a?(this.__subscribe(),Xa(this,o,i)):i!==o&&n===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ot.includes(this),this.__unsubscribe()}_valueToNodeAttribute(r,n,i){i==="dir"&&n===""&&!r.hasAttribute("dir")||super._valueToNodeAttribute(r,n,i)}_attributeToProperty(r,n,i){r==="dir"&&!n?this.dir="":super._attributeToProperty(r,n,i)}__subscribe(){Ot.includes(this)||Ot.push(this)}__unsubscribe(){Ot.includes(this)&&Ot.splice(Ot.indexOf(this),1)}__getNormalizedScrollLeft(r){return Kr.getNormalizedScrollLeft(Si,this.getAttribute("dir")||"ltr",r)}__setNormalizedScrollLeft(r,n){return Kr.setNormalizedScrollLeft(Si,this.getAttribute("dir")||"ltr",r,n)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */bg(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Fb()};let Fs;const qu=new Set,mn=t=>class extends Gb(t){static get version(){return"23.5.3"}static finalize(){super.finalize();const{is:r}=this;r&&!qu.has(r)&&(window.Vaadin.registrations.push(this),qu.add(r),window.Vaadin.developmentModeCallback&&(Fs=_p.debounce(Fs,Ub,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),qb(Fs)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */let ic=!1;window.addEventListener("keydown",()=>{ic=!0},{capture:!0});window.addEventListener("mousedown",()=>{ic=!1},{capture:!0});function Yb(){return ic}function gp(t){const e=t.style;if(e.visibility==="hidden"||e.display==="none")return!0;const r=window.getComputedStyle(t);return r.visibility==="hidden"||r.display==="none"}function Jb(t){if(!Xb(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}function Qb(t,e){const r=Math.max(t.tabIndex,0),n=Math.max(e.tabIndex,0);return r===0||n===0?n>r:r>n}function Kb(t,e){const r=[];for(;t.length>0&&e.length>0;)Qb(t[0],e[0])?r.push(e.shift()):r.push(t.shift());return r.concat(t,e)}function el(t){const e=t.length;if(e<2)return t;const r=Math.ceil(e/2),n=el(t.slice(0,r)),i=el(t.slice(r));return Kb(n,i)}function bp(t,e){if(t.nodeType!==Node.ELEMENT_NODE||gp(t))return!1;const r=t,n=Jb(r);let i=n>0;n>=0&&e.push(r);let o=[];return r.localName==="slot"?o=r.assignedNodes({flatten:!0}):o=(r.shadowRoot||r).children,[...o].forEach(s=>{i=bp(s,e)||i}),i}function Wu(t){return t.offsetParent===null&&t.clientWidth===0&&t.clientHeight===0?!0:gp(t)}function Xb(t){return t.matches('[tabindex="-1"]')?!1:t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function wp(t){return t.getRootNode().activeElement===t}function Zb(t){const e=[];return bp(t,e)?el(e):e}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Bs=[];class ew{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Bs.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Bs.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(Bs).pop()&&e.key==="Tab"){e.preventDefault();const r=e.shiftKey;this.__focusNextElement(r)}}__focusNextElement(e=!1){const r=this.__focusableElements,n=e?-1:1,i=this.__focusedElementIndex,o=(r.length+i+n)%r.length,s=r[o];s.focus(),s.localName==="input"&&s.select()}get __focusableElements(){return Zb(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(wp).pop())}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Vu extends mn(yn(nc(Ht))){static get template(){return Rr`
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
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
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
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
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
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new ew(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),ug(this,this._afterFirstRender),this._updateTouchOptimizedMode();const e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new Dt(e,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new Dt(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new Dt(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(e){["navbar","drawer"].includes(e)||this.set("primarySection","navbar")}__drawerOpenedChanged(e,r){this.overlay&&(e?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):r&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const e=this.querySelector("vaadin-drawer-toggle");e&&e.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const e=this.querySelectorAll("[slot=drawer]").length,r=this.$.drawer;e===0?r.setAttribute("hidden",""):r.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const r=this.$.navbarTop.getBoundingClientRect(),i=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${r.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${i.height}px`);const s=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${s.width}px`)}_updateDrawerHeight(){const{scrollHeight:e,offsetHeight:r}=this.$.drawer,n=e>r?`${e}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",n)}_updateOverlayMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const e=this.$.drawer;this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",this.i18n.drawer)):(e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(e=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){e();return}this.$.drawer.addEventListener("transitionend",e,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const e=this.querySelector("vaadin-drawer-toggle");e&&(e.focus(),e.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(e){e.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(e,r){r&&window.removeEventListener(r,this.__closeOverlayDrawerListener),e&&window.addEventListener(e,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(e){e.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){return(getComputedStyle(this).getPropertyValue(e)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",r=this.querySelectorAll('[slot*="navbar"]');r.length>0&&Array.from(r).forEach(n=>{n.getAttribute("slot").indexOf("touch-optimized")>-1&&(n.__touchOptimized=!0),e&&n.__touchOptimized?n.setAttribute("slot","navbar-bottom"):n.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),e?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Jh(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(Vu.is,Vu);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-app-layout" is deprecated. Use "@vaadin/app-layout" instead.');/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const tw=Ve`
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
`,vp=document.createElement("template");vp.innerHTML=`<style>${tw.toString().replace(":host","html")}</style>`;document.head.appendChild(vp.content);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const rw=Ve`
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
`;Ve`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const Sp=document.createElement("template");Sp.innerHTML=`<style>${rw.toString().replace(":host","html")}$</style>`;document.head.appendChild(Sp.content);zt("vaadin-tab",Ve`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
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
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */let nw=0;function iw(){return nw++}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class oc extends EventTarget{static generateId(e,r){return`${e||"default"}-${r.localName}-${iw()}`}constructor(e,r,n,i,o){super(),this.host=e,this.slotName=r,this.slotFactory=n,this.slotInitializer=i,o&&(this.defaultId=oc.generateId(r,e))}hostConnected(){if(!this.initialized){let e=this.getSlotChild();e?(this.node=e,this.initCustomNode(e)):e=this.attachDefaultNode(),this.initNode(e),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:e,slotName:r,slotFactory:n}=this;let i=this.defaultNode;return!i&&n&&(i=n(e),i instanceof Element&&(r!==""&&i.setAttribute("slot",r),this.node=i,this.defaultNode=i)),i&&e.appendChild(i),i}getSlotChild(){const{slotName:e}=this;return Array.from(this.host.childNodes).find(r=>r.nodeType===Node.ELEMENT_NODE&&r.slot===e||r.nodeType===Node.TEXT_NODE&&r.textContent.trim()&&e==="")}initNode(e){const{slotInitializer:r}=this;r&&r(this.host,e)}initCustomNode(e){}teardownNode(e){}observe(){const{slotName:e}=this,r=e===""?"slot:not([name])":`slot[name=${e}]`,n=this.host.shadowRoot.querySelector(r);this.__slotObserver=new Dt(n,i=>{const o=this.node,s=i.addedNodes.find(a=>a!==o);i.removedNodes.length&&i.removedNodes.forEach(a=>{this.teardownNode(a)}),s&&(o&&o.isConnected&&this.host.removeChild(o),this.node=s,s!==this.defaultNode&&(this.initCustomNode(s),this.initNode(s)))})}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Ap extends oc{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow)}setContext(e){this.context=e;const r=this.node;r&&(r.context=e)}setManual(e){this.manual=e;const r=this.node;r&&(r.manual=e)}setOpened(e){this.opened=e;const r=this.node;r&&(r.opened=e)}setPosition(e){this.position=e;const r=this.node;r&&(r._position=e)}setShouldShow(e){this.shouldShow=e;const r=this.node;r&&(r.shouldShow=e)}setTarget(e){this.target=e;const r=this.node;r&&(r.target=e)}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Ep=Be(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(r){this._setAriaDisabled(r)}_setAriaDisabled(r){r?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ow=!1,sw=t=>t,sc=typeof document.head.style.touchAction=="string",tl="__polymerGestures",zs="__polymerGesturesHandled",rl="__polymerGesturesTouchAction",Gu=25,Yu=5,aw=2,lw=["mousedown","mousemove","mouseup","click"],cw=[0,1,4,2],uw=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function ac(t){return lw.indexOf(t)>-1}let xp=!1;(function(){try{const t=Object.defineProperty({},"passive",{get(){xp=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function dw(t){if(!(ac(t)||t==="touchend")&&sc&&xp&&ow)return{passive:!0}}const fw=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),hw={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function br(t){const e=t.type;if(!ac(e))return!1;if(e==="mousemove"){let n=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!uw&&(n=cw[t.which]||0),!!(n&1)}return(t.button===void 0?0:t.button)===0}function pw(t){if(t.type==="click"){if(t.detail===0)return!0;const e=Kt(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const r=e.getBoundingClientRect(),n=t.pageX,i=t.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}const $t={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function yw(t){let e="auto";const r=Pp(t);for(let n=0,i;n<r.length;n++)if(i=r[n],i[rl]){e=i[rl];break}return e}function Tp(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function Xr(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const Pp=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],lc={},_r=[];function mw(t,e){let r=document.elementFromPoint(t,e),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const i=n;if(n=n.shadowRoot.elementFromPoint(t,e),i===n)break;n&&(r=n)}return r}function Kt(t){const e=Pp(t);return e.length>0?e[0]:t.target}function _w(t){const e=t.type,n=t.currentTarget[tl];if(!n)return;const i=n[e];if(!i)return;if(!t[zs]&&(t[zs]={},e.startsWith("touch"))){const s=t.changedTouches[0];if(e==="touchstart"&&t.touches.length===1&&($t.touch.id=s.identifier),$t.touch.id!==s.identifier)return;sc||(e==="touchstart"||e==="touchmove")&&gw(t)}const o=t[zs];if(!o.skip){for(let s=0,a;s<_r.length;s++)a=_r[s],i[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(let s=0,a;s<_r.length;s++)a=_r[s],i[a.name]&&!o[a.name]&&(o[a.name]=!0,a[e](t))}}function gw(t){const e=t.changedTouches[0],r=t.type;if(r==="touchstart")$t.touch.x=e.clientX,$t.touch.y=e.clientY,$t.touch.scrollDecided=!1;else if(r==="touchmove"){if($t.touch.scrollDecided)return;$t.touch.scrollDecided=!0;const n=yw(t);let i=!1;const o=Math.abs($t.touch.x-e.clientX),s=Math.abs($t.touch.y-e.clientY);t.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=s>o:n==="pan-y"&&(i=o>s)),i?t.preventDefault():oo("track")}}function Un(t,e,r){return lc[e]?(bw(t,e,r),!0):!1}function bw(t,e,r){const n=lc[e],i=n.deps,o=n.name;let s=t[tl];s||(t[tl]=s={});for(let a=0,l,c;a<i.length;a++)l=i[a],!(fw&&ac(l)&&l!=="click")&&(c=s[l],c||(s[l]=c={_count:0}),c._count===0&&t.addEventListener(l,_w,dw(l)),c[o]=(c[o]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,r),n.touchAction&&vw(t,n.touchAction)}function cc(t){_r.push(t);for(let e=0;e<t.emits.length;e++)lc[t.emits[e]]=t}function ww(t){for(let e=0,r;e<_r.length;e++){r=_r[e];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===t)return r}return null}function vw(t,e){sc&&t instanceof HTMLElement&&Hb.run(()=>{t.style.touchAction=e}),t[rl]=e}function uc(t,e,r){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,sw(t).dispatchEvent(n),n.defaultPrevented){const i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function oo(t){const e=ww(t);e.info&&(e.info.prevent=!0)}cc({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Xr(this.info)},mousedown(t){if(!br(t))return;const e=Kt(t),r=this,n=o=>{br(o)||(Rn("up",e,o),Xr(r.info))},i=o=>{br(o)&&Rn("up",e,o),Xr(r.info)};Tp(this.info,n,i),Rn("down",e,t)},touchstart(t){Rn("down",Kt(t),t.changedTouches[0],t)},touchend(t){Rn("up",Kt(t),t.changedTouches[0],t)}});function Rn(t,e,r,n){e&&uc(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent(i){return oo(i)}})}cc({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>aw&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Xr(this.info)},mousedown(t){if(!br(t))return;const e=Kt(t),r=this,n=o=>{const s=o.clientX,a=o.clientY;Ju(r.info,s,a)&&(r.info.state=r.info.started?o.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&oo("tap"),r.info.addMove({x:s,y:a}),br(o)||(r.info.state="end",Xr(r.info)),e&&Us(r.info,e,o),r.info.started=!0)},i=o=>{r.info.started&&n(o),Xr(r.info)};Tp(this.info,n,i),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=Kt(t),r=t.changedTouches[0],n=r.clientX,i=r.clientY;Ju(this.info,n,i)&&(this.info.state==="start"&&oo("tap"),this.info.addMove({x:n,y:i}),Us(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend(t){const e=Kt(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Us(this.info,e,r))}});function Ju(t,e,r){if(t.prevent)return!1;if(t.started)return!0;const n=Math.abs(t.x-e),i=Math.abs(t.y-r);return n>=Yu||i>=Yu}function Us(t,e,r){if(!e)return;const n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,s=i.y-t.y;let a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),uc(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:o,dy:s,ddx:a,ddy:l,sourceEvent:r,hover(){return mw(r.clientX,r.clientY)}})}cc({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){br(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){br(t)&&Qu(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){Qu(this.info,t.changedTouches[0],t)}});function Qu(t,e,r){const n=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=Kt(r||e);!o||hw[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Gu&&i<=Gu||pw(e))&&(t.prevent||uc(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Cp=Be(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",r=>{this._onKeyDown(r)}),this.addEventListener("keyup",r=>{this._onKeyUp(r)})}_onKeyDown(r){switch(r.key){case"Enter":this._onEnter(r);break;case"Escape":this._onEscape(r);break}}_onKeyUp(r){}_onEnter(r){}_onEscape(r){}});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Rp=t=>class extends Ep(Cp(t)){get _activeKeys(){return[" "]}ready(){super.ready(),Un(this,"down",r=>{this._shouldSetActive(r)&&this._setActive(!0)}),Un(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(r){return!this.disabled}_onKeyDown(r){super._onKeyDown(r),this._shouldSetActive(r)&&this._activeKeys.includes(r.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(r){this.toggleAttribute("active",r)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Op=Be(t=>class extends t{get _keyboardActive(){return Yb()}ready(){this.addEventListener("focusin",r=>{this._shouldSetFocus(r)&&this._setFocused(!0)}),this.addEventListener("focusout",r=>{this._shouldRemoveFocus(r)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(r){this.toggleAttribute("focused",r),this.toggleAttribute("focus-ring",r&&this._keyboardActive)}_shouldSetFocus(r){return!0}_shouldRemoveFocus(r){return!0}});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Sw=t=>class extends Rp(Op(t)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(r){this._value=r}ready(){super.ready();const r=this.getAttribute("value");r!==null&&(this.value=r)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(r){return!this.disabled&&!(r.type==="keydown"&&r.defaultPrevented)}_selectedChanged(r){this.setAttribute("aria-selected",r)}_disabledChanged(r){super._disabledChanged(r),r&&(this.selected=!1,this.blur())}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&!r.defaultPrevented&&(r.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Ku extends mn(yn(Sw(nc(Ht)))){static get template(){return Rr`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Ap(this),this.addController(this._tooltipController)}_onKeyUp(e){const r=this.hasAttribute("active");if(super._onKeyUp(e),r){const n=this.querySelector("a");n&&n.click()}}}customElements.define(Ku.is,Ku);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const $p=document.createElement("template");$p.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild($p.content);zt("vaadin-tabs",Ve`
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

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
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
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Ai=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.resizables?e.target.resizables.forEach(r=>{r._onResize(e.contentRect)}):e.target._onResize(e.contentRect)})})}),Aw=Be(t=>class extends t{connectedCallback(){if(super.connectedCallback(),Ai.observe(this),this._observeParent){const r=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;r.resizables||(r.resizables=new Set,Ai.observe(r)),r.resizables.add(this),this.__parent=r}}disconnectedCallback(){super.disconnectedCallback(),Ai.unobserve(this);const r=this.__parent;if(this._observeParent&&r){const n=r.resizables;n&&(n.delete(this),n.size===0&&Ai.unobserve(r)),this.__parent=null}}get _observeParent(){return!1}_onResize(r){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Ew=t=>class extends Cp(t){focus(){const r=this._getItems();if(Array.isArray(r)){const n=this._getAvailableIndex(r,0,null,i=>!Wu(i));n>=0&&r[n].focus()}}get focused(){return(this._getItems()||[]).find(wp)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(r){if(super._onKeyDown(r),r.metaKey||r.ctrlKey)return;const{key:n}=r,i=this._getItems()||[],o=i.indexOf(this.focused);let s,a;const c=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(n)?(a=-c,s=o-c):this.__isNextKey(n)?(a=c,s=o+c):n==="Home"?(a=1,s=0):n==="End"&&(a=-1,s=i.length-1),s=this._getAvailableIndex(i,s,a,f=>!Wu(f)),s>=0&&(r.preventDefault(),this._focus(s,!0))}__isPrevKey(r){return this._vertical?r==="ArrowUp":r==="ArrowLeft"}__isNextKey(r){return this._vertical?r==="ArrowDown":r==="ArrowRight"}_focus(r,n=!1){const i=this._getItems();this._focusItem(i[r],n)}_focusItem(r){r&&(r.focus(),r.setAttribute("focus-ring",""))}_getAvailableIndex(r,n,i,o){const s=r.length;let a=n;for(let l=0;typeof a=="number"&&l<s;l+=1,a+=i||1){a<0?a=s-1:a>=s&&(a=0);const c=r[a];if(!c.hasAttribute("disabled")&&this.__isMatchingItem(c,o))return a}return-1}__isMatchingItem(r,n){return typeof n=="function"?n(r):!0}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const xw=t=>class extends Ew(t){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",r=>this._onClick(r)),this._observer=new Dt(this,()=>{this._setItems(this._filterItems(Dt.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(r,n,i,o){if(!o&&r){this.setAttribute("aria-orientation",n||"vertical"),this.items.forEach(a=>{n?a.setAttribute("orientation",n):a.removeAttribute("orientation")}),this._setFocusable(i||0);const s=r[i];r.forEach(a=>{a.selected=a===s}),s&&!s.disabled&&this._scrollToItem(i)}}_filterItems(r){return r.filter(n=>n._hasVaadinItemMixin)}_onClick(r){if(r.metaKey||r.shiftKey||r.ctrlKey||r.defaultPrevented)return;const n=this._filterItems(r.composedPath())[0];let i;n&&!n.disabled&&(i=this.items.indexOf(n))>=0&&(this.selected=i)}_searchKey(r,n){this._searchReset=_p.debounce(this._searchReset,zb.after(500),()=>{this._searchBuf=""}),this._searchBuf+=n.toLowerCase(),this.items.some(o=>this.__isMatchingKey(o))||(this._searchBuf=n.toLowerCase());const i=this._searchBuf.length===1?r+1:r;return this._getAvailableIndex(this.items,i,1,o=>this.__isMatchingKey(o)&&getComputedStyle(o).display!=="none")}__isMatchingKey(r){return r.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeyDown(r){if(r.metaKey||r.ctrlKey)return;const n=r.key,i=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(n)&&n.length===1){const o=this._searchKey(i,n);o>=0&&this._focus(o);return}super._onKeyDown(r)}_isItemHidden(r){return getComputedStyle(r).display==="none"}_setFocusable(r){r=this._getAvailableIndex(this.items,r,1);const n=this.items[r];this.items.forEach(i=>{i.tabIndex=i===n?0:-1})}_focus(r){this.items.forEach((n,i)=>{n.focused=i===r}),this._setFocusable(r),this._scrollToItem(r),super._focus(r)}focus(){this._observer&&this._observer.flush();const r=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(r)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(r){const n=this.items[r];if(!n)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),s=(this.items[r+1]||n).getBoundingClientRect(),a=(this.items[r-1]||n).getBoundingClientRect();let l=0;!this._isRTL&&s[i[1]]>=o[i[1]]||this._isRTL&&s[i[1]]<=o[i[1]]?l=s[i[1]]-o[i[1]]:(!this._isRTL&&a[i[0]]<=o[i[0]]||this._isRTL&&a[i[0]]>=o[i[0]])&&(l=a[i[0]]-o[i[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(r){if(this._vertical)this._scrollerElement.scrollTop+=r;else{const n=this.getAttribute("dir")||"ltr",i=Kr.detectScrollType(),o=Kr.getNormalizedScrollLeft(i,n,this._scrollerElement)+r;Kr.setNormalizedScrollLeft(i,n,this._scrollerElement,o)}}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Xu extends Aw(mn(xw(yn(Ht)))){static get template(){return Rr`
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
          content: '\\25C0';
        }

        [part='forward-button']::after {
          content: '\\25B6';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '\\25B6';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '\\25C0';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Jh(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(r=>{this.__itemsResizeObserver.observe(r)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),r=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let n=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(r-this._scrollOffset)&&(n+=" end"),this.__direction===1&&(n=n.replace(/start|end/gi,i=>i==="start"?"end":"start")),n?this.setAttribute("overflow",n.trim()):this.removeAttribute("overflow")}}customElements.define(Xu.is,Xu);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-tabs" is deprecated. Use "@vaadin/tabs" instead.');const Tw=Ve`
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

  /* Set only for the internal parts so we don't affect the host vertical alignment */
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
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
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

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
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

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
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

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
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
`;zt("vaadin-button",Tw,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Pw=t=>class extends Ep(t){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(r,n){super._disabledChanged(r,n),r?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):n&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(r){this.disabled&&r!==-1&&(this._lastTabIndex=r,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Cw=t=>class extends Rp(Pw(Op(t))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&(r.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Zu extends Cw(mn(yn(nc(Ht)))){static get is(){return"vaadin-button"}static get template(){return Rr`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
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
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ap(this),this.addController(this._tooltipController)}}customElements.define(Zu.is,Zu);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-button" is deprecated. Use "@vaadin/button" instead.');/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const os=!(window.ShadyDOM&&window.ShadyDOM.inUse);let so;function ed(t){t&&t.shimcssproperties?so=!1:so=os||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let oi;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(oi=window.ShadyCSS.cssBuild);const Ip=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?so=window.ShadyCSS.nativeCss:window.ShadyCSS?(ed(window.ShadyCSS),window.ShadyCSS=void 0):ed(window.WebComponents&&window.WebComponents.flags);const dc=so;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class td{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Np(t){return t=Rw(t),Lp(Ow(t),t)}function Rw(t){return t.replace(jt.comments,"").replace(jt.port,"")}function Ow(t){let e=new td;e.start=0,e.end=t.length;let r=e;for(let n=0,i=t.length;n<i;n++)if(t[n]===Dp){r.rules||(r.rules=[]);let o=r,s=o.rules[o.rules.length-1]||null;r=new td,r.start=n+1,r.parent=o,r.previous=s,o.rules.push(r)}else t[n]===jp&&(r.end=n+1,r=r.parent||e);return e}function Lp(t,e){let r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){let i=t.previous?t.previous.end:t.parent.start;r=e.substring(i,t.start-1),r=$w(r),r=r.replace(jt.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let o=t.parsedSelector=t.selector=r.trim();t.atRule=o.indexOf(jw)===0,t.atRule?o.indexOf(Dw)===0?t.type=Yt.MEDIA_RULE:o.match(jt.keyframesRule)&&(t.type=Yt.KEYFRAMES_RULE,t.keyframesName=t.selector.split(jt.multipleSpaces).pop()):o.indexOf(kp)===0?t.type=Yt.MIXIN_RULE:t.type=Yt.STYLE_RULE}let n=t.rules;if(n)for(let i=0,o=n.length,s;i<o&&(s=n[i]);i++)Lp(s,e);return t}function $w(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],r=6-e.length;for(;r--;)e="0"+e;return"\\"+e})}function Mp(t,e,r=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!Iw(i))for(let o=0,s=i.length,a;o<s&&(a=i[o]);o++)n=Mp(a,e,n);else n=e?t.cssText:Nw(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(r+=t.selector+" "+Dp+`
`),r+=n,t.selector&&(r+=jp+`

`)),r}function Iw(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(kp)===0}function Nw(t){return t=Lw(t),Mw(t)}function Lw(t){return t.replace(jt.customProp,"").replace(jt.mixinProp,"")}function Mw(t){return t.replace(jt.mixinApply,"").replace(jt.varApply,"")}const Yt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Dp="{",jp="}",jt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},kp="--",Dw="@media",jw="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nl=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ao=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,kw=/@media\s(.*)/;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rd=new Set,Fw="shady-unscoped";function Bw(t){const e=t.textContent;if(!rd.has(e)){rd.add(e);const r=document.createElement("style");r.setAttribute("shady-unscoped",""),r.textContent=e,document.head.appendChild(r)}}function zw(t){return t.hasAttribute(Fw)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function il(t,e){return t?(typeof t=="string"&&(t=Np(t)),e&&Hn(t,e),Mp(t,dc)):""}function nd(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Np(t.textContent)),t.__cssRules||null}function Hn(t,e,r,n){if(!t)return;let i=!1,o=t.type;if(n&&o===Yt.MEDIA_RULE){let a=t.selector.match(kw);a&&(window.matchMedia(a[1]).matches||(i=!0))}o===Yt.STYLE_RULE?e(t):r&&o===Yt.KEYFRAMES_RULE?r(t):o===Yt.MIXIN_RULE&&(i=!0);let s=t.rules;if(s&&!i)for(let a=0,l=s.length,c;a<l&&(c=s[a]);a++)Hn(c,e,r,n)}function Uw(t,e){let r=0;for(let n=e,i=t.length;n<i;n++)if(t[n]==="(")r++;else if(t[n]===")"&&--r===0)return n;return-1}function Fp(t,e){let r=t.indexOf("var(");if(r===-1)return e(t,"","","");let n=Uw(t,r+3),i=t.substring(r+4,n),o=t.substring(0,r),s=Fp(t.substring(n+1),e),a=i.indexOf(",");if(a===-1)return e(o,i.trim(),"",s);let l=i.substring(0,a).trim(),c=i.substring(a+1).trim();return e(o,l,c,s)}window.ShadyDOM&&window.ShadyDOM.wrap;function Hw(t){let e=t.localName,r="",n="";return e?e.indexOf("-")>-1?r=e:(n=e,r=t.getAttribute&&t.getAttribute("is")||""):(r=t.is,n=t.extends),{is:r,typeExtension:n}}function qw(t){const e=[],r=t.querySelectorAll("style");for(let n=0;n<r.length;n++){const i=r[n];zw(i)?os||(Bw(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}const Bp="css-build";function Ww(t){if(oi!==void 0)return oi;if(t.__cssBuild===void 0){const e=t.getAttribute(Bp);if(e)t.__cssBuild=e;else{const r=Vw(t);r!==""&&Gw(t),t.__cssBuild=r}}return t.__cssBuild||""}function id(t){return Ww(t)!==""}function Vw(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const r=e.textContent.trim().split(":");if(r[0]===Bp)return r[1]}return""}function Gw(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ol(t,e){for(let r in e)r===null?t.style.removeProperty(r):t.style.setProperty(r,e[r])}function zp(t,e){const r=window.getComputedStyle(t).getPropertyValue(e);return r?r.trim():""}function Yw(t){const e=ao.test(t)||nl.test(t);return ao.lastIndex=0,nl.lastIndex=0,e}const Jw=/;\s*/m,Qw=/^\s*(initial)|(inherit)\s*$/,od=/\s*!important/,sl="_-_";class Kw{constructor(){this._map={}}set(e,r){e=e.trim(),this._map[e]={properties:r,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let lo=null;class Qe{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Kw}detectMixin(e){return Yw(e)}gatherStyles(e){const r=qw(e.content);if(r){const n=document.createElement("style");return n.textContent=r,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,r){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,r):null}transformStyle(e,r=""){let n=nd(e);return this.transformRules(n,r),e.textContent=il(n),n}transformCustomStyle(e){let r=nd(e);return Hn(r,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=il(r),r}transformRules(e,r){this._currentElement=r,Hn(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,r){return e=e.replace(nl,(n,i,o,s)=>this._produceCssProperties(n,i,o,s,r)),this._consumeCssProperties(e,r)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let r=e;for(;r.parent;)r=r.parent;const n={};let i=!1;return Hn(r,o=>{i=i||o===e,!i&&o.selector===e.selector&&Object.assign(n,this._cssTextToMap(o.parsedCssText))}),n}_consumeCssProperties(e,r){let n=null;for(;n=ao.exec(e);){let i=n[0],o=n[1],s=n.index,a=s+i.indexOf("@apply"),l=s+i.length,c=e.slice(0,a),f=e.slice(l),p=r?this._fallbacksFromPreviousRules(r):{};Object.assign(p,this._cssTextToMap(c));let y=this._atApplyToCssProperties(o,p);e=`${c}${y}${f}`,ao.lastIndex=s+y.length}return e}_atApplyToCssProperties(e,r){e=e.replace(Jw,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){this._currentElement&&(i.dependants[this._currentElement]=!0);let o,s,a;const l=i.properties;for(o in l)a=r&&r[o],s=[o,": var(",e,sl,o],a&&s.push(",",a.replace(od,"")),s.push(")"),od.test(l[o])&&s.push(" !important"),n.push(s.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,r){let n=Qw.exec(r);return n&&(n[1]?r=this._getInitialValueForProperty(e):r="apply-shim-inherit"),r}_cssTextToMap(e,r=!1){let n=e.split(";"),i,o,s={};for(let a=0,l,c;a<n.length;a++)l=n[a],l&&(c=l.split(":"),c.length>1&&(i=c[0].trim(),o=c.slice(1).join(":"),r&&(o=this._replaceInitialOrInherit(i,o)),s[i]=o));return s}_invalidateMixinEntry(e){if(lo)for(let r in e.dependants)r!==this._currentElement&&lo(r)}_produceCssProperties(e,r,n,i,o){if(n&&Fp(n,(I,F)=>{F&&this._map.get(F)&&(i=`@apply ${F};`)}),!i)return e;let s=this._consumeCssProperties(""+i,o),a=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(s,!0),c=l,f=this._map.get(r),p=f&&f.properties;p?c=Object.assign(Object.create(p),l):this._map.set(r,c);let y=[],b,T,E=!1;for(b in c)T=l[b],T===void 0&&(T="initial"),p&&!(b in p)&&(E=!0),y.push(`${r}${sl}${b}: ${T}`);return E&&this._invalidateMixinEntry(f),f&&(f.properties=c),n&&(a=`${e};${a}`),`${a}${y.join("; ")};`}}Qe.prototype.detectMixin=Qe.prototype.detectMixin;Qe.prototype.transformStyle=Qe.prototype.transformStyle;Qe.prototype.transformCustomStyle=Qe.prototype.transformCustomStyle;Qe.prototype.transformRules=Qe.prototype.transformRules;Qe.prototype.transformRule=Qe.prototype.transformRule;Qe.prototype.transformTemplate=Qe.prototype.transformTemplate;Qe.prototype._separator=sl;Object.defineProperty(Qe.prototype,"invalidCallback",{get(){return lo},set(t){lo=t}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const al={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const co="_applyShimCurrentVersion",ln="_applyShimNextVersion",uo="_applyShimValidatingVersion",Xw=Promise.resolve();function Zw(t){let e=al[t];e&&ev(e)}function ev(t){t[co]=t[co]||0,t[uo]=t[uo]||0,t[ln]=(t[ln]||0)+1}function Up(t){return t[co]===t[ln]}function tv(t){return!Up(t)&&t[uo]===t[ln]}function rv(t){t[uo]=t[ln],t._validating||(t._validating=!0,Xw.then(function(){t[co]=t[ln],t._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Hs=null,sd=window.HTMLImports&&window.HTMLImports.whenReady||null,qs;function ad(t){requestAnimationFrame(function(){sd?sd(t):(Hs||(Hs=new Promise(e=>{qs=e}),document.readyState==="complete"?qs():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&qs()})),Hs.then(function(){t&&t()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ld="__seenByShadyCSS",Ei="__shadyCSSCachedStyle";let fo=null,qn=null,Zt=class{constructor(){this.customStyles=[],this.enqueued=!1,ad(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!qn||(this.enqueued=!0,ad(qn))}addCustomStyle(e){e[ld]||(e[ld]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Ei])return e[Ei];let r;return e.getStyle?r=e.getStyle():r=e,r}processStyles(){const e=this.customStyles;for(let r=0;r<e.length;r++){const n=e[r];if(n[Ei])continue;const i=this.getStyleForCustomStyle(n);if(i){const o=i.__appliedElement||i;fo&&fo(o),n[Ei]=o}}return e}};Zt.prototype.addCustomStyle=Zt.prototype.addCustomStyle;Zt.prototype.getStyleForCustomStyle=Zt.prototype.getStyleForCustomStyle;Zt.prototype.processStyles=Zt.prototype.processStyles;Object.defineProperties(Zt.prototype,{transformCallback:{get(){return fo},set(t){fo=t}},validateCallback:{get(){return qn},set(t){let e=!1;qn||(e=!0),qn=t,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jn=new Qe;class nv{constructor(){this.customStyleInterface=null,jn.invalidCallback=Zw}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{jn.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,r){if(this.ensure(),id(e))return;al[r]=e;let n=jn.transformTemplate(e,r);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let r=0;r<e.length;r++){let n=e[r],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&jn.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,r){if(this.ensure(),r&&ol(e,r),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}else{let n=e.children||e.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}}styleElement(e){this.ensure();let{is:r}=Hw(e),n=al[r];if(!(n&&id(n))&&n&&!Up(n)){tv(n)||(this.prepareTemplate(n,r),rv(n));let i=e.shadowRoot;if(i){let o=i.querySelector("style");o&&(o.__cssRules=n._styleAst,o.textContent=il(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new nv;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(r,n,i){t.flushCustomStyles(),t.prepareTemplate(r,n)},prepareTemplateStyles(r,n,i){window.ShadyCSS.prepareTemplate(r,n,i)},prepareTemplateDom(r,n){},styleSubtree(r,n){t.flushCustomStyles(),t.styleSubtree(r,n)},styleElement(r){t.flushCustomStyles(),t.styleElement(r)},styleDocument(r){t.flushCustomStyles(),t.styleDocument(r)},getComputedStyleValue(r,n){return zp(r,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:dc,nativeShadow:os,cssBuild:oi,disableRuntime:Ip},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=jn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Tr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,r){this._asyncModule=e,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,si.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),si.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,r,n){return e instanceof Tr?e._cancelAsync():e=new Tr,e.setConfig(r,n),e}}let si=new Set;const Hp=function(t){si.add(t)},iv=function(){const t=!!si.size;return si.forEach(e=>{try{e.flush()}catch(r){setTimeout(()=>{throw r})}}),t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fc=typeof document.head.style.touchAction=="string",ho="__polymerGestures",Ui="__polymerGesturesHandled",ll="__polymerGesturesTouchAction",cd=25,ud=5,ov=2,sv=2500,qp=["mousedown","mousemove","mouseup","click"],av=[0,1,4,2],lv=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function hc(t){return qp.indexOf(t)>-1}let pc=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){pc=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function Wp(t){if(!(hc(t)||t==="touchend")&&fc&&pc&&yg)return{passive:!0}}let Vp=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const cl=[],cv={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},uv={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function dv(t){return cv[t.localName]||!1}function fv(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let r=t.getRootNode();if(t.id){let n=r.querySelectorAll(`label[for = '${t.id}']`);for(let i=0;i<n.length;i++)e.push(n[i])}}catch{}}return e}let dd=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[Ui]={skip:!0},t.type==="click")){let r=!1,n=ss(t);for(let i=0;i<n.length;i++){if(n[i].nodeType===Node.ELEMENT_NODE){if(n[i].localName==="label")cl.push(n[i]);else if(dv(n[i])){let o=fv(n[i]);for(let s=0;s<o.length;s++)r=r||cl.indexOf(o[s])>-1}}if(n[i]===qe.mouse.target)return}if(r)return;t.preventDefault(),t.stopPropagation()}};function fd(t){let e=Vp?["click"]:qp;for(let r=0,n;r<e.length;r++)n=e[r],t?(cl.length=0,document.addEventListener(n,dd,!0)):document.removeEventListener(n,dd,!0)}function hv(t){if(!Ql)return;qe.mouse.mouseIgnoreJob||fd(!0);let e=function(){fd(),qe.mouse.target=null,qe.mouse.mouseIgnoreJob=null};qe.mouse.target=ss(t)[0],qe.mouse.mouseIgnoreJob=Tr.debounce(qe.mouse.mouseIgnoreJob,Bn.after(sv),e)}function wr(t){let e=t.type;if(!hc(e))return!1;if(e==="mousemove"){let r=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!lv&&(r=av[t.which]||0),!!(r&1)}else return(t.button===void 0?0:t.button)===0}function pv(t){if(t.type==="click"){if(t.detail===0)return!0;let e=Xt(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let r=e.getBoundingClientRect(),n=t.pageX,i=t.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}let qe={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function yv(t){let e="auto",r=ss(t);for(let n=0,i;n<r.length;n++)if(i=r[n],i[ll]){e=i[ll];break}return e}function Gp(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function Zr(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}Ql&&document.addEventListener("touchend",hv,pc?{passive:!0}:!1);const ss=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],fi={},gr=[];function mv(t,e){let r=document.elementFromPoint(t,e),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(t,e),i===n)break;n&&(r=n)}return r}function Xt(t){const e=ss(t);return e.length>0?e[0]:t.target}function Yp(t){let e,r=t.type,i=t.currentTarget[ho];if(!i)return;let o=i[r];if(o){if(!t[Ui]&&(t[Ui]={},r.slice(0,5)==="touch")){t=t;let s=t.changedTouches[0];if(r==="touchstart"&&t.touches.length===1&&(qe.touch.id=s.identifier),qe.touch.id!==s.identifier)return;fc||(r==="touchstart"||r==="touchmove")&&_v(t)}if(e=t[Ui],!e.skip){for(let s=0,a;s<gr.length;s++)a=gr[s],o[a.name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(let s=0,a;s<gr.length;s++)a=gr[s],o[a.name]&&!e[a.name]&&(e[a.name]=!0,a[r](t))}}}function _v(t){let e=t.changedTouches[0],r=t.type;if(r==="touchstart")qe.touch.x=e.clientX,qe.touch.y=e.clientY,qe.touch.scrollDecided=!1;else if(r==="touchmove"){if(qe.touch.scrollDecided)return;qe.touch.scrollDecided=!0;let n=yv(t),i=!1,o=Math.abs(qe.touch.x-e.clientX),s=Math.abs(qe.touch.y-e.clientY);t.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=s>o:n==="pan-y"&&(i=o>s)),i?t.preventDefault():po("track")}}function gv(t,e,r){return fi[e]?(wv(t,e,r),!0):!1}function bv(t,e,r){return fi[e]?(vv(t,e,r),!0):!1}function wv(t,e,r){let n=fi[e],i=n.deps,o=n.name,s=t[ho];s||(t[ho]=s={});for(let a=0,l,c;a<i.length;a++)l=i[a],!(Vp&&hc(l)&&l!=="click")&&(c=s[l],c||(s[l]=c={_count:0}),c._count===0&&t.addEventListener(l,Yp,Wp(l)),c[o]=(c[o]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,r),n.touchAction&&Jp(t,n.touchAction)}function vv(t,e,r){let n=fi[e],i=n.deps,o=n.name,s=t[ho];if(s)for(let a=0,l,c;a<i.length;a++)l=i[a],c=s[l],c&&c[o]&&(c[o]=(c[o]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,Yp,Wp(l)));t.removeEventListener(e,r)}function yc(t){gr.push(t);for(let e=0;e<t.emits.length;e++)fi[t.emits[e]]=t}function Sv(t){for(let e=0,r;e<gr.length;e++){r=gr[e];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===t)return r}return null}function Jp(t,e){fc&&t instanceof HTMLElement&&Qt.run(()=>{t.style.touchAction=e}),t[ll]=e}function mc(t,e,r){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,G(t).dispatchEvent(n),n.defaultPrevented){let i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function po(t){let e=Sv(t);e.info&&(e.info.prevent=!0)}yc({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Zr(this.info)},mousedown:function(t){if(!wr(t))return;let e=Xt(t),r=this,n=function(s){wr(s)||(On("up",e,s),Zr(r.info))},i=function(s){wr(s)&&On("up",e,s),Zr(r.info)};Gp(this.info,n,i),On("down",e,t)},touchstart:function(t){On("down",Xt(t),t.changedTouches[0],t)},touchend:function(t){On("up",Xt(t),t.changedTouches[0],t)}});function On(t,e,r,n){e&&mc(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(i){return po(i)}})}yc({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>ov&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Zr(this.info)},mousedown:function(t){if(!wr(t))return;let e=Xt(t),r=this,n=function(s){let a=s.clientX,l=s.clientY;hd(r.info,a,l)&&(r.info.state=r.info.started?s.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&po("tap"),r.info.addMove({x:a,y:l}),wr(s)||(r.info.state="end",Zr(r.info)),e&&Ws(r.info,e,s),r.info.started=!0)},i=function(s){r.info.started&&n(s),Zr(r.info)};Gp(this.info,n,i),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Xt(t),r=t.changedTouches[0],n=r.clientX,i=r.clientY;hd(this.info,n,i)&&(this.info.state==="start"&&po("tap"),this.info.addMove({x:n,y:i}),Ws(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Xt(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Ws(this.info,e,r))}});function hd(t,e,r){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),i=Math.abs(t.y-r);return n>=ud||i>=ud}function Ws(t,e,r){if(!e)return;let n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,s=i.y-t.y,a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),mc(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:o,dy:s,ddx:a,ddy:l,sourceEvent:r,hover:function(){return mv(r.clientX,r.clientY)}})}yc({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){wr(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){wr(t)&&pd(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){pd(this.info,t.changedTouches[0],t)}});function pd(t,e,r){let n=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=Xt(r||e);!o||uv[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=cd&&i<=cd||pv(e))&&(t.prevent||mc(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qp=Be(t=>{class e extends t{_addEventListenerToNode(n,i,o){gv(n,i,o)||super._addEventListenerToNode(n,i,o)}_removeEventListenerFromNode(n,i,o){bv(n,i,o)||super._removeEventListenerFromNode(n,i,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Av=/:host\(:dir\((ltr|rtl)\)\)/g,Ev=':host([dir="$1"])',xv=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Tv=':host([dir="$2"]) $1',Pv=/:dir\((?:ltr|rtl)\)/,yd=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Wn=[];let Vn=null,_c="";function Kp(){_c=document.documentElement.getAttribute("dir")}function Xp(t){t.__autoDirOptOut||t.setAttribute("dir",_c)}function Zp(){Kp(),_c=document.documentElement.getAttribute("dir");for(let t=0;t<Wn.length;t++)Xp(Wn[t])}function Cv(){Vn&&Vn.takeRecords().length&&Zp()}const Rv=Be(t=>{yd||Vn||(Kp(),Vn=new MutationObserver(Zp),Vn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=np(t);class r extends e{static _processStyleText(i,o){return i=e._processStyleText.call(this,i,o),!yd&&Pv.test(i)&&(i=this._replaceDirInCssText(i),this.__activateDir=!0),i}static _replaceDirInCssText(i){let o=i;return o=o.replace(Av,Ev),o=o.replace(xv,Tv),o}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Cv(),Wn.push(this),Xp(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const i=Wn.indexOf(this);i>-1&&Wn.splice(i,1)}}}return r.__activateDir=!1,r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function md(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?md():window.addEventListener("DOMContentLoaded",md);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ey=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=iv();while(t||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kr=Element.prototype,Ov=kr.matches||kr.matchesSelector||kr.mozMatchesSelector||kr.msMatchesSelector||kr.oMatchesSelector||kr.webkitMatchesSelector,ty=function(t,e){return Ov.call(t,e)};class Se{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Dt(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(G(this.node).contains(e))return!0;let r=e,n=e.ownerDocument;for(;r&&r!==n&&r!==this.node;)r=G(r).parentNode||G(r).host;return r===this.node}getOwnerRoot(){return G(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?G(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],r=G(this.node).assignedSlot;for(;r;)e.push(r),r=G(r).assignedSlot;return e}importNode(e,r){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return G(n).importNode(e,r)}getEffectiveChildNodes(){return Dt.getFlattenedNodes(this.node)}queryDistributedElements(e){let r=this.getEffectiveChildNodes(),n=[];for(let i=0,o=r.length,s;i<o&&(s=r[i]);i++)s.nodeType===Node.ELEMENT_NODE&&ty(s,e)&&n.push(s);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function $v(t,e){for(let r=0;r<e.length;r++){let n=e[r];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function _d(t,e){for(let r=0;r<e.length;r++){let n=e[r];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function Iv(t,e){for(let r=0;r<e.length;r++){let n=e[r];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(i){this.node[n]=i},configurable:!0})}}class ul{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Se.prototype.cloneNode;Se.prototype.appendChild;Se.prototype.insertBefore;Se.prototype.removeChild;Se.prototype.replaceChild;Se.prototype.setAttribute;Se.prototype.removeAttribute;Se.prototype.querySelector;Se.prototype.querySelectorAll;Se.prototype.parentNode;Se.prototype.firstChild;Se.prototype.lastChild;Se.prototype.nextSibling;Se.prototype.previousSibling;Se.prototype.firstElementChild;Se.prototype.lastElementChild;Se.prototype.nextElementSibling;Se.prototype.previousElementSibling;Se.prototype.childNodes;Se.prototype.children;Se.prototype.classList;Se.prototype.textContent;Se.prototype.innerHTML;let dl=Se;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Se.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=Se.prototype[e])}),_d(t.prototype,["classList"]),dl=t,Object.defineProperties(ul.prototype,{localTarget:{get(){const e=this.event.currentTarget,r=e&&gt(e).getOwnerRoot(),n=this.path;for(let i=0;i<n.length;i++){const o=n[i];if(gt(o).getOwnerRoot()===r)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else $v(Se.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),_d(Se.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Iv(Se.prototype,["textContent","innerHTML","className"]);const gt=function(t){if(t=t||document,t instanceof dl||t instanceof ul)return t;let e=t.__domApi;return e||(t instanceof Event?e=new ul(t):e=new dl(t),t.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vs=window.ShadyDOM,gd=window.ShadyCSS;function bd(t,e){return G(t).getRootNode()===e}function Nv(t,e=!1){if(!Vs||!gd||!Vs.handlesDynamicScoping)return null;const r=gd.ScopingShim;if(!r)return null;const n=r.scopeForNode(t),i=G(t).getRootNode(),o=s=>{if(!bd(s,i))return;const a=Array.from(Vs.nativeMethods.querySelectorAll.call(s,"*"));a.push(s);for(let l=0;l<a.length;l++){const c=a[l];if(!bd(c,i))continue;const f=r.currentScopeForNode(c);f!==n&&(f!==""&&r.unscopeNode(c,f),r.scopeNode(c,n))}};if(o(t),e){const s=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const c=a[l];for(let f=0;f<c.addedNodes.length;f++){const p=c.addedNodes[f];p.nodeType===Node.ELEMENT_NODE&&o(p)}}});return s.observe(t,{childList:!0,subtree:!0}),s}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Gs="disable-upgrade",ry=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Be(t=>{const e=is(t);let r=ry(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat(Gs)}_initializeProperties(){this.hasAttribute(Gs)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}attributeChangedCallback(o,s,a,l){o==Gs?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,G(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(o,s,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xi="disable-upgrade";let Lv=window.ShadyCSS;const ny=Be(t=>{const e=Qp(is(t)),r=Ya?e:Rv(e),n=ry(r),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,c){(this.__dataAttributes&&this.__dataAttributes[a]||a===xi)&&this.attributeChangedCallback(a,l,c,null)}setAttribute(a,l){if(wi&&!this._legacyForceObservedAttributes){const c=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,c,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(wi&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return wi&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(xi)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,c,f){l!==c&&(a==xi?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,G(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,c,f),this.attributeChanged(a,l,c)))}attributeChanged(a,l,c){}_initializeProperties(){if(Zn&&this.hasAttribute(xi))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),wi&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,c=a.length;l<c;l++){const f=a[l];this.__attributeReaction(f.name,null,f.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,c){this._propertyToAttribute(a,l,c)}serializeValueToAttribute(a,l,c){this._valueToNodeAttribute(c||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let c=Object.getOwnPropertyNames(l);for(let f=0,p;f<c.length&&(p=c[f]);f++){let y=Object.getOwnPropertyDescriptor(l,p);y&&Object.defineProperty(a,p,y)}return a}mixin(a,l){for(let c in l)a[c]=l[c];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,c){c=c||{},l=l??{};let f=new Event(a,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});f.detail=l;let p=c.node||this;return G(p).dispatchEvent(f),f}listen(a,l,c){a=a||this;let f=this.__boundListeners||(this.__boundListeners=new WeakMap),p=f.get(a);p||(p={},f.set(a,p));let y=l+c;p[y]||(p[y]=this._addMethodEventListenerToNode(a,l,c,this))}unlisten(a,l,c){a=a||this;let f=this.__boundListeners&&this.__boundListeners.get(a),p=l+c,y=f&&f[p];y&&(this._removeEventListenerFromNode(a,l,y),f[p]=null)}setScrollDirection(a,l){Jp(l||this,i[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=G(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=gt(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return gt(this).getEffectiveChildNodes()}queryDistributedElements(a){return gt(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let c=0,f;f=a[c];c++)f.nodeType!==Node.COMMENT_NODE&&l.push(f.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?gt(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&G(l).contains(a)&&G(l).getRootNode()===G(a).getRootNode()}isLocalDescendant(a){return this.root===G(a).getRootNode()}scopeSubtree(a,l=!1){return Nv(a,l)}getComputedStyleValue(a){return Lv.getComputedStyleValue(this,a)}debounce(a,l,c){return this._debouncers=this._debouncers||{},this._debouncers[a]=Tr.debounce(this._debouncers[a],c>0?Bn.after(c):Qt,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?Bn.run(a.bind(this),l):~Qt.run(a.bind(this))}cancelAsync(a){a<0?Qt.cancel(~a):Bn.cancel(a)}create(a,l){let c=document.createElement(a);if(l)if(c.setProperties)c.setProperties(l);else for(let f in l)c[f]=l[f];return c}elementMatches(a,l){return ty(l||this,a)}toggleAttribute(a,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(a)),l?(G(c).setAttribute(a,""),!0):(G(c).removeAttribute(a),!1)}toggleClass(a,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(a)),l?c.classList.add(a):c.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,c,f){f=f||this,this.transform("translate3d("+a+","+l+","+c+")",f)}arrayDelete(a,l){let c;if(Array.isArray(a)){if(c=a.indexOf(l),c>=0)return a.splice(c,1)}else if(c=Je(this,a).indexOf(l),c>=0)return this.splice(a,c,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return o.prototype.is="",o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mv={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},iy={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Dv=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},iy);function jv(t,e,r){const n=t._noAccessors,i=Object.getOwnPropertyNames(t);for(let o=0;o<i.length;o++){let s=i[o];if(!(s in r))if(n)e[s]=t[s];else{let a=Object.getOwnPropertyDescriptor(t,s);a&&(a.configurable=!0,Object.defineProperty(e,s,a))}}}function kv(t,e,r){for(let n=0;n<e.length;n++)oy(t,e[n],r,Dv)}function oy(t,e,r,n){jv(e,t,n);for(let i in Mv)e[i]&&(r[i]=r[i]||[],r[i].push(e[i]))}function sy(t,e,r){e=e||[];for(let n=t.length-1;n>=0;n--){let i=t[n];i?Array.isArray(i)?sy(i,e):e.indexOf(i)<0&&(!r||r.indexOf(i)<0)&&e.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return e}function wd(t,e){for(const r in e){const n=t[r],i=e[r];!("value"in i)&&n&&"value"in n?t[r]=Object.assign({value:n.value},i):t[r]=i}}const vd=ny(HTMLElement);function Fv(t,e,r){let n;const i={};class o extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)wd(l,n[c].properties);return wd(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,f;c<n.length;c++)f=n[c],f.observers&&(l=l.concat(f.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=i.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=o.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Zn&&s(l);const c=Object.getPrototypeOf(this);let f=i.beforeRegister;if(f)for(let p=0;p<f.length;p++)f[p].call(c);if(f=i.registered,f)for(let p=0;p<f.length;p++)f[p].call(c)}}_applyListeners(){super._applyListeners();const l=i.listeners;if(l)for(let c=0;c<l.length;c++){const f=l[c];if(f)for(let p in f)this._addMethodEventListenerToNode(this,p,f[p])}}_ensureAttributes(){const l=i.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const f=l[c];for(let p in f)this._ensureAttribute(p,f[p])}super._ensureAttributes()}ready(){super.ready();let l=i.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=i.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=i.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,f){super.attributeChanged();let p=i.attributeChanged;if(p)for(let y=0;y<p.length;y++)p[y].call(this,l,c,f)}}if(r){Array.isArray(r)||(r=[r]);let a=e.prototype.behaviors;n=sy(r,null,a),o.prototype.behaviors=a?a.concat(r):n}const s=a=>{n&&kv(a,n,i),oy(a,t,i,iy)};return Zn||s(o.prototype),o.generatedFrom=t,o}const Bv=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let r=e?e(vd):vd;return r=Fv(t,r,t.behaviors),r.is=r.prototype.is=t.is,r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const as=function(t){let e;return typeof t=="function"?e=t:e=as.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};as.Class=Bv;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function gc(t,e,r,n,i){let o;i&&(o=typeof r=="object"&&r!==null,o&&(n=t.__dataTemp[e]));let s=n!==r&&(n===n||r===r);return o&&s&&(t.__dataTemp[e]=r),s}const bc=Be(t=>{class e extends t{_shouldPropertyChange(n,i,o){return gc(this,n,i,o,!0)}}return e}),ay=Be(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,i,o){return gc(this,n,i,o,this.mutableData)}}return e});bc._mutablePropertyChange=gc;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fl=null;function hl(){return fl}hl.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:hl,writable:!0}});const ly=ns(hl),zv=bc(ly);function Uv(t,e){fl=t,Object.setPrototypeOf(t,e.prototype),new e,fl=null}const Hv=ns(class{});function cy(t,e){for(let r=0;r<e.length;r++){let n=e[r];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),G(G(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const i=n.__polymerReplaced__;i&&G(G(i).parentNode).replaceChild(n,i)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class ir extends Hv{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let r=[];this.children=r;for(let i=this.root.firstChild;i;i=i.nextSibling)r.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,r){this._setPendingPropertyOrPath(e,r,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,r,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,r,i=>{i.model=this,n(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,r,n)}}_showHideChildren(e){cy(e,this.children)}_setUnmanagedPropertyToNode(e,r,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&r=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,r,n)}get parentModel(){let e=this.__parentModel;if(!e){let r;e=this;do e=e.__dataHost.__dataHost;while((r=e.__templatizeOptions)&&!r.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}ir.prototype.__dataHost;ir.prototype.__templatizeOptions;ir.prototype._methodHost;ir.prototype.__templatizeOwner;ir.prototype.__hostProps;const qv=bc(ir);function Sd(t){let e=t.__dataHost;return e&&e._methodHost||e}function Wv(t,e,r){let n=r.mutableData?qv:ir;yo.mixin&&(n=yo.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=r,i.prototype._bindTemplate(t),Yv(i,t,e,r),i}function Vv(t,e,r,n){let i=r.forwardHostProp;if(i&&e.hasHostProps){const o=t.localName=="template";let s=e.templatizeTemplateClass;if(!s){if(o){let l=r.mutableData?zv:ly;class c extends l{}s=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}s=e.templatizeTemplateClass=c}let a=e.hostProps;for(let l in a)s.prototype._addPropertyEffect("_host_"+l,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Gv(l,i)}),s.prototype._createNotifyingProperty("_host_"+l);Qh&&n&&Kv(e,r,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),o)Uv(t,s),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,s.prototype);const a=e.hostProps;for(let l in a)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function Gv(t,e){return function(n,i,o){e.call(n.__templatizeOwner,i.substring(6),o[i])}}function Yv(t,e,r,n){let i=r.hostProps||{};for(let o in n.instanceProps){delete i[o];let s=n.notifyInstanceProp;s&&t.prototype._addPropertyEffect(o,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Jv(o,s)})}if(n.forwardHostProp&&e.__dataHost)for(let o in i)r.hasHostProps||(r.hasHostProps=!0),t.prototype._addPropertyEffect(o,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Qv()})}function Jv(t,e){return function(n,i,o){e.call(n.__templatizeOwner,n,i,o[i])}}function Qv(){return function(e,r,n){e.__dataHost._setPendingPropertyOrPath("_host_"+r,n[r],!0,!0)}}function yo(t,e,r){if(an&&!Sd(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=(e?e.constructor:ir)._parseTemplate(t),o=i.templatizeInstanceClass;o||(o=Wv(t,i,r),i.templatizeInstanceClass=o);const s=Sd(t);Vv(t,i,r,s);let a=class extends o{};return a.prototype._methodHost=s,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=i.hostProps,a=a,a}function Kv(t,e,r){const n=r.constructor._properties,{propertyEffects:i}=t,{instanceProps:o}=e;for(let s in i)if(!n[s]&&!(o&&o[s])){const a=i[s];for(let l=0;l<a.length;l++){const{part:c}=a[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${s}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Xv(t,e){let r;for(;e;)if(r=e.__dataHost?e:e.__templatizeInstance)if(r.__dataHost!=t)e=r.__dataHost;else return r;else e=G(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ad=!1;function wc(){if(Zn&&!Jl){if(!Ad){Ad=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zv=Qp(ay(ns(HTMLElement)));class e0 extends Zv{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),an)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,r,n,i){this.mutableData=!0}connectedCallback(){wc()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){G(G(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let r=new MutationObserver(()=>{if(e=this.querySelector("template"),e)r.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});r.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let r=this.root.firstChild;r;r=r.nextSibling)this.__children[this.__children.length]=r;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",e0);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const t0=ay(Ht);class Ed extends t0{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Wa,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),wc()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=G(G(this).parentNode);for(let r=0;r<this.__instances.length;r++)this.__attachInstance(r,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let r=this.template=e._templateInfo?e:this.querySelector("template");if(!r){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=yo(r,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(i,o){let s=this.__instances;for(let a=0,l;a<s.length&&(l=s[a]);a++)l.forwardHostProp(i,o)},notifyInstanceProp:function(i,o,s){if(Ig(this.as,o)){let a=i[this.itemsIndexAs];o==this.as&&(this.items[a]=s);let l=ri(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,o);this.notifyPath(l,s)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let r=e,n=this.__getMethodHost();return function(){return n[r].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let r=this.__observePaths;for(let n=0;n<r.length;n++)e.indexOf(r[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,r=0){this.__renderDebouncer=Tr.debounce(this.__renderDebouncer,r>0?Bn.after(r):Qt,e.bind(this)),Hp(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ey()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const r=this.__sortAndFilterItems(e),n=this.__calculateLimit(r.length);this.__updateInstances(e,n,r),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Wa||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=n;return this.__filterFn&&(r=r.filter((n,i,o)=>this.__filterFn(e[n],i,o))),this.__sortFn&&r.sort((n,i)=>this.__sortFn(e[n],e[i])),r}__calculateLimit(e){let r=e;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(r=Math.min(e,this.initialCount),i=Math.max(r-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(e-n,0),this.__chunkCount),r=Math.min(n+i,e)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=r<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,r}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,r=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*r)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,r,n){const i=this.__itemsIdxToInstIdx={};let o;for(o=0;o<r;o++){let s=this.__instances[o],a=n[o],l=e[a];i[a]=o,s?(s._setPendingProperty(this.as,l),s._setPendingProperty(this.indexAs,o),s._setPendingProperty(this.itemsIndexAs,a),s._flushProperties()):this.__insertInstance(l,o,a)}for(let s=this.__instances.length-1;s>=o;s--)this.__detachAndRemoveInstance(s)}__detachInstance(e){let r=this.__instances[e];const n=G(r.root);for(let i=0;i<r.children.length;i++){let o=r.children[i];n.appendChild(o)}return r}__attachInstance(e,r){let n=this.__instances[e];r.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,r,n){let i={};return i[this.as]=e,i[this.indexAs]=r,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,r,n){const i=this.__stampInstance(e,r,n);let o=this.__instances[r+1],s=o?o.children[0]:this;return G(G(this).parentNode).insertBefore(i.root,s),this.__instances[r]=i,i}_showHideChildren(e){for(let r=0;r<this.__instances.length;r++)this.__instances[r]._showHideChildren(e)}__handleItemPath(e,r){let n=e.slice(6),i=n.indexOf("."),o=i<0?n:n.substring(0,i);if(o==parseInt(o,10)){let s=i<0?"":n.substring(i+1);this.__handleObservedPaths(s);let a=this.__itemsIdxToInstIdx[o],l=this.__instances[a];if(l){let c=this.as+(s?"."+s:"");l._setPendingPropertyOrPath(c,r,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let r=this.modelForElement(e);return r&&r[this.as]}indexForElement(e){let r=this.modelForElement(e);return r&&r[this.indexAs]}modelForElement(e){return Xv(this.template,e)}}customElements.define(Ed.is,Ed);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class uy extends Ht{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Tr.debounce(this.__renderDebouncer,Qt,()=>this.__render()),Hp(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=G(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!G(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),wc()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let r=e._templateInfo?e:G(e).querySelector("template");if(!r){let n=new MutationObserver(()=>{if(G(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=r}return!0}__ensureInstance(){let e=G(this).parentNode;if(this.__hasInstance()){let r=this.__getInstanceNodes();if(r&&r.length&&G(this).previousSibling!==r[r.length-1])for(let i=0,o;i<r.length&&(o=r[i]);i++)G(e).insertBefore(o,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){ey()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Wa||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class r0 extends uy{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const r=this.__dataHost||this;if(an&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=r._bindTemplate(this.__template,!0);n.runEffects=(i,o,s)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),o=Object.assign(a.changedProps,o)),i(o,s);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:i,changedProps:{}}),s)for(const l in o){const c=Ut(l);a.changedProps[c]=this.__dataHost[c]}else Object.assign(a.changedProps,o)},this.__instance=r._stampTemplate(this.__template,n),G(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,cy(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class n0 extends uy{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=yo(this.__template,this,{mutableData:!0,forwardHostProp:function(r,n){this.__instance&&(this.if?this.__instance.forwardHostProp(r,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Ut(r)]=!0))}})),this.__instance=new this.__ctor,G(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let r=G(e[0]).parentNode;if(r){r=G(r);for(let n=0,i;n<e.length&&(i=e[n]);n++)r.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let r in e)this.__instance._setPendingProperty(r,this.__dataHost[r]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const xd=Kh?r0:n0;customElements.define(xd.is,xd);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i0=Be(t=>{let e=is(t);class r extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(i,o){let s=o.path;if(s==JSCompiler_renameProperty("items",this)){let a=o.base||[],l=this.__lastItems,c=this.__lastMulti;if(i!==c&&this.clearSelection(),l){let f=Uh(a,l);this.__applySplices(f)}this.__lastItems=a,this.__lastMulti=i}else if(o.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(o.value.indexSplices);else{let a=s.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(i){let o=this.__selectedMap;for(let a=0;a<i.length;a++){let l=i[a];o.forEach((c,f)=>{c<l.index||(c>=l.index+l.removed.length?o.set(f,c+l.addedCount-l.removed.length):o.set(f,-1))});for(let c=0;c<l.addedCount;c++){let f=l.index+c;o.has(this.items[f])&&o.set(this.items[f],f)}}this.__updateLinks();let s=0;o.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null,o.delete(l)):s++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let i=0;this.__selectedMap.forEach(o=>{o>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${o}`,`${JSCompiler_renameProperty("selected",this)}.${i++}`)})}else this.__selectedMap.forEach(i=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${i}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${i}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(i){return this.__selectedMap.has(i)}isIndexSelected(i){return this.isSelected(this.items[i])}__deselectChangedIdx(i){let o=this.__selectedIndexForItemIndex(i);if(o>=0){let s=0;this.__selectedMap.forEach((a,l)=>{o==s++&&this.deselect(l)})}}__selectedIndexForItemIndex(i){let o=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${i}`];if(o)return parseInt(o.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(i){let o=this.__selectedMap.get(i);if(o>=0){this.__selectedMap.delete(i);let s;this.multi&&(s=this.__selectedIndexForItemIndex(o)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null}}deselectIndex(i){this.deselect(this.items[i])}select(i){this.selectIndex(this.items.indexOf(i))}selectIndex(i){let o=this.items[i];this.isSelected(o)?this.toggle&&this.deselectIndex(i):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(o,i),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),o):this.selected=this.selectedItem=o)}}return r}),o0=i0(Ht);class Td extends o0{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Td.is,Td);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Hi=new Zt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,r){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,r){},styleSubtree(t,e){Hi.processStyles(),ol(t,e)},styleElement(t){Hi.processStyles()},styleDocument(t){Hi.processStyles(),ol(document.body,t)},getComputedStyleValue(t,e){return zp(t,e)},flushCustomStyles(){},nativeCss:dc,nativeShadow:os,cssBuild:oi,disableRuntime:Ip});window.ShadyCSS.CustomStyleInterface=Hi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pd="include",s0=window.ShadyCSS.CustomStyleInterface;class a0 extends HTMLElement{constructor(){super(),this._style=null,s0.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const r=e.getAttribute(Pd);return r&&(e.removeAttribute(Pd),e.textContent=Cg(r)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",a0);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lN=ny(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ti=new Set;const l0={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Ti.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&t._interestedResizables.indexOf(this)===-1&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){if(this._notifyingDescendant){t.stopPropagation();return}Jl||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=gt(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(Ti.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Ti.delete(this):Ti.add(this)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class c0{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach(function(r){(!e||e.indexOf(r)<0)&&this.setItemSelected(r,!1)},this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,r){if(e!=null&&r!==this.isSelected(e)){if(r)this.selection.push(e);else{var n=this.selection.indexOf(e);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(e,r)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const u0={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new c0(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&gt(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;this.selected!==void 0&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;this.selected!==void 0&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&typeof this._observer.flush=="function"?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=gt(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&this._selection.get()===void 0&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return t==null?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(this.attrForSelected){for(var e=0,r;r=this.items[e];e++)if(this._valueForItem(r)==t)return e}else return Number(t)},_indexToValue:function(t){if(this.attrForSelected){var e=this.items[t];if(e)return this._valueForItem(e)}else return t},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return e===-1?null:e}var r=t[tc(this.attrForSelected)];return r??t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return gt(t).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(t){for(var e=t.target,r=this.items;e&&e!=this;){var n=r.indexOf(e);if(n>=0){var i=this._indexToValue(n);this._itemActivate(i,e);return}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/as({_template:Rr`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[l0,u0],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/as({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var t=this.query;t&&(!this.full&&t[0]!=="("&&(t="("+t+")"),this._mq=window.matchMedia(t),this._add(),this.queryHandler(this._mq))},queryHandler:function(t){this._setQueryMatches(t.matches)}});const d0=Ve`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;zt("vaadin-vertical-layout",d0,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Cd extends mn(yn(Ht)){static get template(){return Rr`
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

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(Cd.is,Cd);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-ordered-layout" is deprecated. Use "@vaadin/vertical-layout" instead.');zt("vaadin-split-layout",Ve`
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
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class mo extends mn(yn(Ht)){static get template(){return Rr`
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
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new Dt(this,r=>{this._cleanupNodes(r.removedNodes),this._processChildren()});const e=this.$.splitter;Un(e,"track",this._onHandleTrack.bind(this)),Un(e,"down",this._setPointerEventsNone.bind(this)),Un(e,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(e){e.forEach(r=>{r.parentElement instanceof mo||r.removeAttribute("slot")})}_processChildren(){const e=[...this.children];e.filter(r=>r.hasAttribute("slot")).forEach(r=>this._processChildWithSlot(r)),e.filter(r=>!r.hasAttribute("slot")).forEach((r,n)=>this._processChildWithoutSlot(r,n))}_processChildWithSlot(e){const r=e.getAttribute("slot");e.__autoSlotted?(this[`_${r}Child`]=null,e.removeAttribute("slot")):this[`_${r}Child`]=e}_processChildWithoutSlot(e,r){let n;this._primaryChild||this._secondaryChild?n=this._primaryChild?"secondary":"primary":n=r===0?"primary":"secondary",this[`_${n}Child`]=e,e.setAttribute("slot",n),e.__autoSlotted=!0}_setFlexBasis(e,r,n){r=Math.max(0,Math.min(r,n)),r===0&&(r=1e-6),e.style.flex=`1 1 ${r}px`}_setPointerEventsNone(e){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",e.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(e){if(!this._primaryChild||!this._secondaryChild)return;const r=this.orientation==="vertical"?"height":"width";if(e.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[r]-this.$.splitter.getBoundingClientRect()[r],primary:this._primaryChild.getBoundingClientRect()[r],secondary:this._secondaryChild.getBoundingClientRect()[r]};return}const n=this.orientation==="vertical"?e.detail.dy:e.detail.dx,o=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-n:n;this._setFlexBasis(this._primaryChild,this._startSize.primary+o,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-o,this._startSize.container),e.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(mo.is,mo);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-split-layout" is deprecated. Use "@vaadin/split-layout" instead.');async function f0(t,e=fetch){const r=await e("https://s.zazuko.com/api/v1/shorten/",{method:"POST",body:new URLSearchParams({url:t})});if(!r.ok)throw new Error(await r.text());return r.text()}var h0={shorten:f0};const p0=`@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix schema: <http://schema.org/> .

schema:Person
  a rdfs:Class, sh:NodeShape ;
  sh:property
    [
      sh:path schema:name ;
      sh:minCount 1 ;
      sh:maxCount 1 ;
    ],
    [
      sh:path schema:age ;
      sh:minCount 1 ;
      sh:minInclusive 18 ;
    ] ;
.
`;function y0(t,e){return{...t,format:e}}function m0(t,{quads:e,serialized:r}){return{...t,quads:e,graph:r}}function _0(t,e){return{...t,graph:e}}function g0(t,e){return{...t,prefixes:[...new Set([...t.prefixes,e])]}}function b0(t,e){return{...t,prefixes:t.prefixes.filter(r=>r!==e)}}function w0(t,{prefix:e,namespace:r}){if(typeof e!="string"||typeof r!="string")return t;const n={...t.customPrefixes};return r?n[e]=r:delete n[e],{...t,customPrefixes:n}}function v0(t,e){return{...t,customPrefixes:e}}const dy=Object.freeze(Object.defineProperty({__proto__:null,addPrefix:g0,changeFormat:y0,parsed:m0,removePrefix:b0,replaceCustomPrefixes:v0,setCustomPrefix:w0,setGraph:_0},Symbol.toStringTag,{value:"Module"})),S0=es({state:{format:"text/turtle",graph:p0,prefixes:["sh","schema"],customPrefixes:{}},reducers:{...dy}}),A0=`{
  "@context": {
    "@base": "https://example.com/",
    "@vocab": "http://schema.org/"
  },
  "@id": "John-Doe",
  "@type": "Person",
  "name": [
    "John",
    "Johnny"
  ],
  "age": 18
}
`,E0=es({state:{format:"application/ld+json",graph:A0,prefixes:[],customPrefixes:{}},reducers:{...dy}});function x0({parent:t,child:e}){return new Proxy({},{get(n,i){return e[i]||t[i]},set(n,i,o){return e[i]=o,!0},has(n,i){return i in e||i in t},ownKeys(){const n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertyNames(e);return[...new Set([...n,...i]).values()]},getOwnPropertyDescriptor(n,i){return{enumerable:!i.toString().startsWith("_"),configurable:!0}}})}let vc=class fy{constructor(e,{parent:r,bind:n=!1}={}){this._parent=r,this._factories=e.slice();const i=r?x0({parent:r,child:this}):this;for(const o of this._factories){typeof o.prototype.init=="function"&&o.prototype.init.call(i);for(const s of o.exports||[])n?this[s]=o.prototype[s].bind(i):this[s]=o.prototype[s]}return i}clone(){const e=new fy(this._factories,this._parent);for(const r of e._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(e,this);return e}};var Sc={exports:{}},T0=hy;function hy(t,e){if(t&&e)return hy(t)(e);if(typeof t!="function")throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(n){r[n]=t[n]}),r;function r(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];var o=t.apply(this,n),s=n[n.length-1];return typeof o=="function"&&o!==s&&Object.keys(s).forEach(function(a){o[a]=s[a]}),o}}var py=T0;Sc.exports=py(qi);Sc.exports.strict=py(yy);qi.proto=qi(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return qi(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return yy(this)},configurable:!0})});function qi(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function yy(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},r=t.name||"Function wrapped with `once`";return e.onceError=r+" shouldn't be called more than once",e.called=!1,e}var P0=Sc.exports;const C0=hn(P0);function pl(t){return function(e,r,n){return Array.isArray(e)?!0:n.findIndex(o=>Array.isArray(o)?!0:t(e,o))===r}}function my(t,e){return t&&t.equals(e)}function _y(t){return(e,r)=>{if(!e||!r)return!1;const n=e.id.equals(r.id);return t?n&&e._graphId.equals(r._graphId):n}}function Ys(t,e){return typeof t=="string"?e.namedNode(t):"termType"in t?t:t.id}class R0{constructor(e,r=!1){this.__resource=e,this.__allGraphs=r,this.__graph=r?e.env.clownface({dataset:e.pointer.dataset,term:e.pointer.term,graph:void 0}):e.pointer}add(e){return this.__resource.pointer.addOut(this.__resource.env.ns.rdf.type,Ys(e,this.__resource.env)),this}clear(){this.__graph.deleteOut(this.__resource.env.ns.rdf.type)}delete(e){const r=this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,Ys(e,this.__resource.env));for(const n of r)this.__graph.dataset.delete(n);return r.size>0}forEach(e,r){for(const n of this.values())e.call(r,n,n,this)}has(e){return this.__graph.has(this.__resource.env.ns.rdf.type,Ys(e,this.__resource.env)).terms.length>0}get size(){return this.__graph.out(this.__resource.env.ns.rdf.type).terms.filter(pl(my)).length}[Symbol.iterator](){return this.values()}entries(){return this.__values.map(e=>[e,e])[Symbol.iterator]()}keys(){return this.values()}values(){return this.__values[Symbol.iterator]()}get[Symbol.toStringTag](){return this.__values.toString()}get __values(){const e=this.__allGraphs?null:this.__resource._graphId;return[...this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,null,e)].map(i=>this.__resource.env.clownface({dataset:this.__graph.dataset,term:i.object,graph:i.graph})).map(i=>this.__resource._create(i)).filter(pl(_y(!1)))}}class gy{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}gy.prototype.termType="BlankNode";class Ac{equals(e){return!!e&&e.termType===this.termType}}Ac.prototype.termType="DefaultGraph";Ac.prototype.value="";function Rd(t,e){if(!e)return null;if(e.termType==="BlankNode")return t.blankNode(e.value);if(e.termType==="DefaultGraph")return t.defaultGraph();if(e.termType==="Literal")return t.literal(e.value,e.language||t.namedNode(e.datatype.value));if(e.termType==="NamedNode")return t.namedNode(e.value);if(e.termType==="Quad"){const r=t.fromTerm(e.subject),n=t.fromTerm(e.predicate),i=t.fromTerm(e.object),o=t.fromTerm(e.graph);return t.quad(r,n,i,o)}if(e.termType==="Variable")return t.variable(e.value);throw new Error(`unknown termType ${e.termType}`)}class yl{constructor(e,r,n){this.value=e,this.language=r,this.datatype=n}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value&&e.language===this.language&&e.datatype.equals(this.datatype)}}yl.prototype.termType="Literal";class ls{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}ls.prototype.termType="NamedNode";class Ec{constructor(e,r,n,i){this.subject=e,this.predicate=r,this.object=n,this.graph=i}equals(e){return!!e&&(e.termType==="Quad"||!e.termType)&&e.subject.equals(this.subject)&&e.predicate.equals(this.predicate)&&e.object.equals(this.object)&&e.graph.equals(this.graph)}}Ec.prototype.termType="Quad";Ec.prototype.value="";class by{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}by.prototype.termType="Variable";const O0=new ls("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),$0=new ls("http://www.w3.org/2001/XMLSchema#string");class cs{constructor(){this.init()}init(){this._data={blankNodeCounter:0,defaultGraph:new Ac}}namedNode(e){return new ls(e)}blankNode(e){return e=e||"b"+ ++this._data.blankNodeCounter,new gy(e)}literal(e,r){return typeof r=="string"?new yl(e,r,O0):new yl(e,"",r||$0)}variable(e){return new by(e)}defaultGraph(){return this._data.defaultGraph}quad(e,r,n,i=this.defaultGraph()){return new Ec(e,r,n,i)}fromTerm(e){return Rd(this,e)}fromQuad(e){return Rd(this,e)}}cs.exports=["blankNode","defaultGraph","fromQuad","fromTerm","literal","namedNode","quad","variable"];const Vt=new cs,I0={apply:(t,e,r)=>t(r[0]),get:(t,e)=>t(e)};function L(t,{factory:e=Vt}={}){const r=(n="")=>e.namedNode(`${t}${n.raw||n}`);return typeof Proxy>"u"?r:new Proxy(r,I0)}const ml=L("http://www.w3.org/1999/02/22-rdf-syntax-ns#");function wy(t){return ml.nil.equals(t.term)}function ai(t){const e=wy(t),r=t.out([ml.first,ml.rest]).values.length===2;return e||r}function xc(t,e,r){const n=[];let i=e;for(;!wy(i);)i.out(t.env.ns.rdf.first).map((s,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:first objects");return r.call(t,s)}).forEach(s=>{if(Array.isArray(s))throw new Error("Malformed RDF List had multiple rdf:first objects");n.push(s)}),i=i.out(t.env.ns.rdf.rest).map((s,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:rest objects");return s})[0];return n}function*vy(t){let e=t.constructor;for(;e;)"__properties"in e&&(yield e),e=Object.getPrototypeOf(e)}function N0(t){switch(t.termType){case"NamedNode":case"BlankNode":case"Literal":return!0;default:return!1}}function L0(t){const e=t.pointer._context[0].graph;return[...t.pointer.dataset.match(t.id,null,null,e)].reduce((r,n)=>{if(t.env.ns.rdf.type.equals(n.predicate))return r;const i=r.get(n.predicate)||[];return N0(n.object)&&i.push(t.pointer.node(n.object)),r.set(n.predicate,i),r},t.env.termMap())}function M0(t,e,r){return t&&e in t?t[e]===r.value:!1}function Sy(t,e){if(e.ns.xsd.string.equals(t.datatype))return t.value;if(e.ns.xsd.integer.equals(t.datatype)){const r=Number.parseInt(t.value);if(r.toString()===t.value)return r}if(e.ns.xsd.double.equals(t.datatype)){const r=Number.parseFloat(t.value);if(r.toString()===t.value)return r}if(e.ns.xsd.boolean.equals(t.datatype)){if(t.value==="true")return!0;if(t.value==="false")return!1}return e.ns.rdf.langString.equals(t.datatype)?{"@value":t.value,"@language":t.language}:t.datatype?{"@value":t.value,"@type":t.datatype.value}:t.value}function D0(t,e){return(r,[n,i])=>{const o=a=>{if(a.term.termType==="Literal")return Sy(a.term,t.env);const l=a.list();return l?[...l].map(o):_o(t._create(t.pointer.node(a.term)),e)},s=i.map(o);return s.length===1?r[n.value]=s[0]:r[n.value]=s,r}}function j0(t){const{parentContexts:e,visitedResources:r,remainingObjects:n,context:i,resource:o,namespace:s}=t;return({json:a,contextPopulated:l=!1},[c,{options:f}])=>{const p=f.path?f.path:s?s(c):null;if(!p||Array.isArray(p)||typeof p=="function"||f.subjectFromAllGraphs)return{json:a,contextPopulated:l};let y=!1;const b=typeof p=="string"?t.resource.env.namedNode(p):p;if(!n.get(b))return{json:a,contextPopulated:l};const E=o.pointer.out(b);M0(e,c,b)||(ai(E)?i[c]={"@container":"@list","@id":b.value}:i[c]=b.value,y=!0);function I(x){switch(x.term.termType){case"BlankNode":case"NamedNode":return f.fromTerm.call(o,x);default:return x.term}}const $=E.map(x=>x.term.termType==="Literal"?x.term:ai(x)?xc(o,x,I):I(x)).map(function x(U){if(Array.isArray(U))return U.map(W=>x(W));if("termType"in U)switch(U.termType){case"Literal":return Sy(U,o.env);case"BlankNode":case"NamedNode":return _o(o._create(o.pointer.node(U)),{parentContexts:{...e,...i},visitedResources:r});default:return null}return _o(U,{parentContexts:{...e,...i},visitedResources:r})});return f.values.includes("array")&&$.length!==1?a[c]=$:f.values.includes("list")&&Array.isArray($[0])?a[c]=$[0]||[]:$.length>1?a[c]=$:a[c]=f.values.includes("single")?$[0]:$,n.delete(b),{json:a,contextPopulated:l||y}}}function _o(t,{parentContexts:e,visitedResources:r=t.env.termSet()}={}){const i={id:t.id.termType==="NamedNode"?t.id.value:`_:${t.id.value}`},o=[...t.types];if(o.length>0&&(i.type=o.map(f=>f.id.value)),r.has(t.id))return i;r.add(t.id);const s=L0(t);let a=!0,l;e?l={}:(a=!1,l={id:"@id",type:"@type"});let c=!1;for(const{__properties:f,__ns:p}of vy(t))({contextPopulated:c}=[...f].reduce(j0({parentContexts:e,visitedResources:r,resource:t,remainingObjects:s,context:l,namespace:p}),{json:i,contextPopulated:c}));return[...s].reduce(D0(t,{parentContexts:{...e,...l},visitedResources:r}),i),(!a||c)&&(i["@context"]=l),i}function Ay(t,e){return e&&typeof e!="string"?t.node(e):!e||e.startsWith("_:")?t.blankNode():t.namedNode(e)}function Ey(t,e){const r=Ay(t.pointer,e.id);return t._create(r,[],{initializer:e})}class _n{constructor(e,r,n={}){if(this.__initialized=!1,e.term.termType!=="BlankNode"&&e.term.termType!=="NamedNode")throw new Error(`RdfResource cannot be initialized from a ${e.term.termType} node`);let i;"id"in r?(i=r,this.env=i.env):this.env=r;const o=this.env.clownface({...e,term:e.term});o._context[0].graph?(this.pointer=o,this.unionGraphPointer=this.env.clownface({dataset:o.dataset,term:o.term,graph:void 0})):(this.pointer=this.env.clownface({dataset:o.dataset,term:o.term,graph:this.env.defaultGraph()}),this.unionGraphPointer=this.env.clownface({dataset:o.dataset,term:o.term})),this.__initializeProperties=C0(()=>{const s=this;return[...vy(s)].flatMap(l=>[...l.__initializers]).forEach(([l,c])=>{const f=s[l];if(Array.isArray(f)&&f.length===0||typeof f>"u"){if(typeof c=="function"){s[l]=c(s);return}s[l]=c}}),!0}),this._parent=i,this.__initialized=this.__initializeProperties(),_n._userInitializeProperties(this,n)}static _userInitializeProperties(e,r={}){Object.entries(r).filter(([n])=>n!=="id"&&n!=="types").forEach(([n,i])=>{if(!n.startsWith("http")){typeof i=="function"?e[n]=i(e.pointer.any()):e[n]=i;return}const s=(Array.isArray(i)?i:[i]).map(function a(l){if(typeof l=="function"){const p=l(e.pointer.any());if(typeof p=="function")throw new Error("Initializer factory function cannot return a function");if(Array.isArray(p))throw new Error("Initializer factory function cannot return an array");return a(p)}if(typeof l=="object"&&"term"in l)return l.term;if(typeof l=="object"&&"pointer"in l)return l.pointer;if(typeof l=="object"&&"termType"in l)return e.pointer.node(l);let c;return typeof l=="object"&&"value"in l&&"datatype"in l?c=e.env.rdfine().convert.toLiteral(l.value,l.datatype):c=e.env.rdfine().convert.toLiteral(l),c?e.pointer.node(c):Ey(e,l).pointer});e.pointer.addOut(e.pointer.namedNode(n),s)});for(const n of r.types||[])e.types.add(n)}get id(){return this.pointer.term}get _graphId(){return this.pointer._context[0].graph}get types(){return new R0(this)}get isAnonymous(){return this.id.termType==="BlankNode"}hasType(e){return this.types.has(e)}equals(e){if(!e)return!1;if("termType"in e)return this.id.equals(e);const r="_context"in e?e:e.pointer,n=this.id.equals(r.term);return this.isAnonymous||r.term.termType==="BlankNode"?n&&this.pointer.dataset===r.dataset:n}get(e,r){const n=this.getArray(e,r);return n.length>0?n[0]:null}getArray(e,r){const n=this._getObjects(e,r).filter(i=>i.term.termType==="NamedNode"||i.term.termType==="BlankNode").map(i=>this._create(i,[],{parent:this}));return n.length?n:[]}getNumber(e,r){const[n]=this._getObjects(e,r).toArray();if(typeof n>"u")return null;if(n.term.termType==="Literal")return parseFloat(n.value);throw new Error(`Expected property '${e}' to be a number but found '${n}'`)}getString(e,r){const[n]=this._getObjects(e,r).toArray();if(typeof n>"u")return null;if(n.term.termType==="Literal")return n.value;throw new Error(`Expected property '${e}' to be a literal but found '${n}'`)}getBoolean(e,r){const[n]=this._getObjects(e,r).toArray();if(typeof n>"u")return!1;if(n.term.termType==="Literal"&&this.env.ns.xsd.boolean.equals(n.term.datatype))return n.term.equals(this.pointer.literal(!0).term);throw new Error(`Expected property '${e}' to be a boolean but found '${n}'`)}_getObjects(e,{strict:r}={strict:!1}){const n=typeof e=="string"?this.pointer.namedNode(e):e,i=this.pointer.out(n);if(!i.terms.length&&r)throw new Error(`Value for predicate <${e}> was missing`);return i}_create(e,r,n={}){return this.env.rdfine().factory.createEntity(e,r,n)}toJSON(){return _o(this)}}_n.__mixins=[];_n.__properties=new Map;_n.__initializers=new Map;function k0(t,e){if(!e)throw new Error(`Cannot construct URI for property ${t}. Annotate the class with @namespace or use a NamedNode`);return e[t]}function F0(t,e,r){return typeof t=="string"?t.match(/^(http|urn):\/\//)?e.namedNode(t):k0(t,r):t}function B0(t){const e=r=>r.out(t).toArray();return e.predicate=t,e.crossesGraphBoundaries=!1,e}function Od(t,e,r){return r.map(n=>typeof n=="function"?n.call(e,t):B0(F0(n,e,t)))}function z0(t){const e=r=>{switch(r.term.termType){case"BlankNode":case"NamedNode":return ai(r)?xc(t,r,e):t._create(r,[],{parent:t});default:return r.term}};return e}function U0(t){return new Proxy(t,{get(e,r){if(r in e||typeof r=="symbol")return e[r.toString()];const n=e._getObjects(r.toString());if(n.values.length===0)return;const i=n.map(z0(e));return i.length===1?i[0]:i},set(e,r,n){if(r in e||typeof r=="symbol")return e[r.toString()]=n,!0;if(typeof r=="number")return!1;const i=Array.isArray(n)?n:[n],o=i.reduce((a,l)=>(typeof l=="function"&&(l=l(e.pointer)),!l||typeof l!="object"?a:l&&("termType"in l||"_context"in l)?[...a,l]:[...a,l.id]),[]),s=e.pointer.namedNode(r.toString());return e.pointer.deleteOut(s),i.length&&e.pointer.addOut(s,o),!0}})}class H0{constructor(e){this.__env=e,this.__mixins=new Set,this.__alwaysMixins=new Set,this.__typeMixins=new Map,this.__typeCache=new Map,this.BaseClass=e.rdfine.Resource}addMixin(...e){this.__typeCache.clear(),e.forEach(r=>{if("appliesTo"in r){const n=this.__typeMixins.get(r.appliesTo.value)||[];this.__typeMixins.set(r.appliesTo.value,[...n,r])}else r.shouldApply===!0&&this.__alwaysMixins.add(r),this.__mixins.add(r)})}createEntity(e,r=[],n={}){var f;let i=this.BaseClass,o=r;if(r.length>0){const[p,...y]=r;this.__isConstructor(p)&&(i=p,o=y)}const s=e.out(this.__env.ns.rdf.type).values;for(const p of((f=n.initializer)==null?void 0:f.types)||[])"termType"in p?s.push(p.value):s.push(p.id.value);i=this.__getBaseClass(i,s);const a=new i(e,this.__env),l=[...this.__mixins].reduce((p,y)=>((y.shouldApply===!0||typeof y.shouldApply=="function"&&y.shouldApply(a))&&p.add(y),p),new Set(o)),c=this.__extend(i,[...l]);return U0(new c(e,n.parent||this.__env,n.initializer))}__getBaseClass(e,r){const n=[e.name,...r].toString(),i=this.__typeCache.get(n);if(i)return i;const o=r.reduce((a,l)=>{const c=this.__typeMixins.get(l);return c&&c.forEach(f=>a.add(f)),a},new Set),s=this.__extend(e,[...this.__alwaysMixins,...o]);return this.__typeCache.set(n,s),s}__extend(e,r){const n=r.reduce((o,s)=>s(o),e),i=e.__mixins||[];return n.__mixins=[...i,...r],n}__isConstructor(e){return"__mixins"in e}}function xy(t,e){t.__ns=e}const q0=(t,e)=>(xy(e,t),e),W0=(t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(i){xy(i,t)}}},Z=t=>e=>typeof e=="function"?q0(t,e):W0(t,e);function $d(t,e,r){return r.reduce((i,o)=>{const s=[];return i.forEach(a=>{s.push(...o(a,t))}),s},e).reduce((i,o)=>i.concat(o.toArray()),[])}function V0(t,e){const n=[...t.datasets.reduce((i,o)=>[...o].reduce((s,a)=>s.add(a.graph),i),e.termSet()).values()];return n.length?n.map(i=>e.clownface({dataset:t.dataset,term:t.term,graph:i})):[t]}function Ty(t,e,r){const{fromTerm:n,toTerm:i,assertSetValue:o,valueTypeName:s,initial:a,strict:l,compare:c,subjectFromAllGraphs:f,filter:p}=r;let y=["single"];Array.isArray(r.values)?y=r.values:r.values&&(y=[r.values]);const b=T=>Array.isArray(r.path)?Od(t.constructor.__ns,T.env,r.path):Od(t.constructor.__ns,T.env,[r.path||e]);Object.defineProperty(t,e,{get(){const T=f?V0(this.pointer,this.env):[this.pointer],E=b(this);let I=$d(this.env,T,E);const F=E.some(x=>x.crossesGraphBoundaries);(f||F)&&(y=["array"]),p&&(I=I.filter(x=>p(x.term)));const $=I.map((x,U)=>{if(ai(x)){if(U>0)throw new Error("Lists of lists are not supported");return xc(this,x,n.bind(this))}return n.call(this,x)}).filter(pl(c));if(y.includes("array")&&$.length!==1)return $;if(y.includes("list")&&Array.isArray($[0]))return $[0]||[];if($.length>1&&!y.includes("array"))throw new Error(`${e}: Multiple terms found where 0..1 was expected`);if(Array.isArray($[0])&&!y.includes("list"))throw new Error(`${e}: RDF List found where 0..1 object was expected`);if(this.__initialized&&l&&$.length===0)throw new Error(`Object not found for property ${e}`);return y.includes("single")?$[0]:$},set(T){if(!y.includes("array")&&!y.includes("list")&&Array.isArray(T))throw new Error(`${e}: Cannot set array to a non-array property`);const E=b(this),I=E.length===1?this.pointer.toArray():$d(this.env,[this.pointer],E.slice(0,E.length-1));if(I.length>1)throw new Error("Cannot set value to multiple nodes at once");const F=I[0],$=E[E.length-1].predicate;if(F.out($).forEach(he=>{ai(he)&&F.deleteList($)}),F.deleteOut($),T===null||typeof T>"u")return;let x=!1,U;Array.isArray(T)?(x=!0,U=T):U=[T];const W=U.reduce((he,Ne)=>{let se,Q;if(typeof Ne=="function"?Q=Ne(this.pointer.any()):Q=Ne,Q&&typeof Q=="object"&&"termType"in Q?se=Q:Q&&typeof Q=="object"&&"term"in Q?se=Q.term:Q&&typeof Q=="object"&&"pointer"in Q?se=Q.id:se=i.call(this,Q),p&&!p(se))return he;if(!o(Q)){const Ee=E.map(Pe=>`<${Pe.predicate.value}>`).join("/");throw new Error(`Unexpected value for path ${Ee}. Expecting a ${s} or RDF/JS term.`)}return[...he,se]},[]);y.includes("list")&&(y.length===1||x)?W.length===0?F.addOut($,this.env.ns.rdf.nil):F.addList($,W):F.addOut($,W)}}),Object.hasOwnProperty.call(t.constructor,"__properties")||(t.constructor.__properties=new Map),Object.hasOwnProperty.call(t.constructor,"__initializers")||(t.constructor.__initializers=new Map),t.constructor.__properties.set(e,{initial:a,options:{...r,values:y}}),a&&t.constructor.__initializers.set(e,a)}const G0=(t,e,r)=>{Ty(e,r.toString(),t)},Y0=(t,e)=>({kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){Ty(r.prototype,e.key.toString(),t)}});function Tc(t){return(e,r)=>r!==void 0?G0(t,e,r):Y0(t,e)}function J0(t={}){const e=t.type||String;return Tc({...t,fromTerm(r){return this.env.rdfine().convert.fromLiteral(e,r)},toTerm(r){return this.env.rdfine().convert.toLiteral(r,t.datatype)},valueTypeName:e.name,assertSetValue:r=>{if(r instanceof Date)return!0;if(typeof r=="object"){let n;return"id"in r?!1:("term"in r?n=r.term:n=r,n.termType==="Literal")}return!0},compare(r,n){return r===n}})}function Q0(t={}){return Tc({...t,fromTerm(e){return t.implicitTypes&&e.addOut(this.env.ns.rdf.type,t.implicitTypes),this._create(e,t.as,{parent:this})},toTerm(e){const r=Ay(this.pointer,e.id);return e.types&&Array.isArray(e.types)&&r.addOut(this.env.ns.rdf.type,e.types),t.implicitTypes&&r.addOut(this.env.ns.rdf.type,t.implicitTypes),this._create(r,t.as,{initializer:e}),r.term},valueTypeName:"RdfResource instance",assertSetValue:e=>{let r=null;return"termType"in e?r=e:"term"in e&&(r=e.term),r?r.termType==="NamedNode"||r.termType==="BlankNode":!0},compare:_y(!0)})}function K0(t){return typeof t=="object"&&t instanceof Object&&"id"in t}function k(t={}){return Tc({...t,fromTerm:e=>e.term,toTerm(e){return K0(e)?Ey(this,e).id:this.env.rdfine().convert.toLiteral(e)||this.env.literal(e.toString())},valueTypeName:"RDF/JS term object",assertSetValue:()=>!0,compare:my})}k.literal=J0;k.resource=Q0;function X0(t,e,r){return e===Boolean?Vt.literal("true",t.ns.xsd.boolean).equals(r.term):e===Number?Number.parseFloat(r.value):e===Date?new Date(Date.parse(r.value)):r.value}function Z0(t,e,r){switch(typeof e){case"boolean":return Vt.literal(e.toString(),r||t.ns.xsd.boolean);case"number":return Vt.literal(e.toString(),r||(Number.isInteger(e)?t.ns.xsd.integer:t.ns.xsd.float));case"bigint":return Vt.literal(e.toString(),r||t.ns.xsd.long);case"string":return Vt.literal(e,r);case"object":if(e instanceof Date){const n=e.toISOString();return t.ns.xsd.date.equals(r)?Vt.literal(n.substr(0,10),t.ns.xsd.date):Vt.literal(n,r||t.ns.xsd.dateTime)}break}}class eS{init(){const e=this;class r extends _n{static get env(){return e}}let n;this.rdfine=()=>({factory:n,createEntity:n.createEntity.bind(n),convert:{toLiteral:Z0.bind(null,e),fromLiteral:X0.bind(null,e)}}),this.rdfine.Resource=r,n=new H0(e)}static get exports(){return["_initVocabulary"]}_initVocabulary(e){return this.rdfine().factory.addMixin(...Object.values(e)),Object.fromEntries(Object.entries(e).reduce((r,[n,i])=>"createFactory"in i?[...r,[n.replace(/Mixin$/,""),i.createFactory(this)]]:r,[]))}}let Pc=class{namespace(e){return L(e,{factory:this})}};Pc.exports=["namespace"];class Id extends Map{import(e,r,n){const i=this.get(e);return i?i.import(r,n):null}}class tS{constructor({factory:e}){this.factory=e,this.parsers=new Id,this.serializers=new Id}import(e){if(e.parsers)for(const[r,n]of e.parsers)this.parsers.set(r,new n.constructor({factory:this.factory}));if(e.serializers)for(const[r,n]of e.serializers)this.serializers.set(r,new n.constructor({factory:this.factory}));return this}}let rS=class{init(){this.formats=new tS({factory:this})}clone(e){this.formats.import(e.formats)}};function nS(t){return"_:"+t.value}var iS=nS;function oS(t,e){return[...t].map(r=>e(r)).join(`
`)+`
`}var sS=oS;function aS(){return""}var lS=aS;function cS(t){return"<"+t.value+">"}var Py=cS;const uS=Py,dS=/["\\\\\n\r]/,fS=/["\\\\\n\r]/g,hS={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function pS(t){return hS[t]}function yS(t){return dS.test(t)?t.replace(fS,pS):t}function mS(t){const e=yS(t.value);return t.datatype.value==="http://www.w3.org/2001/XMLSchema#string"?'"'+e+'"':t.datatype.value==="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"?'"'+e+'"@'+t.language:'"'+e+'"^^'+uS(t.datatype)}var _S=mS;function gS(t,e){const r=e(t.subject),n=e(t.predicate),i=e(t.object),o=e(t.graph);return`${r} ${n} ${i} ${o?o+" ":""}.`}var bS=gS;function wS(t){return"?"+t.value}var vS=wS;const SS=iS,AS=sS,ES=lS,xS=_S,TS=Py,PS=bS,CS=vS;function _l(t){if(!t)return null;if(t.termType==="BlankNode")return SS(t);if(t.termType==="DefaultGraph")return ES();if(t.termType==="Literal")return xS(t);if(t.termType==="NamedNode")return TS(t);if(t.termType==="Quad"||t.subject&&t.predicate&&t.object&&t.graph)return PS(t,_l);if(t.termType==="Variable")return CS(t);if(t[Symbol.iterator])return AS(t,_l);throw new Error(`unknown termType ${t.termType}`)}var RS=_l;const Jt=hn(RS);class OS{constructor(e){if(this.index=new Map,e)for(const[r,n]of e)this.set(r,n)}get size(){return this.index.size}clear(){this.index.clear()}delete(e){return this.index.delete(Jt(e))}*entries(){for(const[,{term:e,value:r}]of this.index)yield[e,r]}forEach(e,r){for(const n of this.entries())e.call(r,n[1],n[0],this)}get(e){const r=this.index.get(Jt(e));return r&&r.value}has(e){return this.index.has(Jt(e))}*keys(){for(const[,{term:e}]of this.index)yield e}set(e,r){const n=Jt(e);return this.index.set(n,{term:e,value:r}),this}*values(){for(const[,{value:e}]of this.index)yield e}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}let Cy=class{termMap(e){return new OS(e)}};Cy.exports=["termMap"];function Nd(t){try{return Jt(t)}catch{return null}}class $S{constructor(e){if(this.index=new Map,e)for(const r of e)this.add(r)}get size(){return this.index.size}add(e){const r=Jt(e);return this.index.has(r)||this.index.set(r,e),this}clear(){this.index.clear()}delete(e){return e?this.index.delete(Nd(e)):!1}entries(){return this.values().entries()}forEach(e,r){return this.values().forEach(e,r)}has(e){return e?this.index.has(Nd(e)):!1}values(){return new Set(this.index.values())}keys(){return this.values()}[Symbol.iterator](){return this.values()[Symbol.iterator]()}}let Ry=class{termSet(e){return new $S(e)}};Ry.exports=["termSet"];class Oy{init(){this.ns=r_}}const IS=L("http://www.w3.org/ns/auth/acl#"),NS=IS,LS=L("https://www.w3.org/ns/activitystreams#"),MS=LS,DS=L("http://purl.org/ontology/bibo/"),jS=DS,kS=L("http://creativecommons.org/ns#"),FS=kS,BS=L("http://www.w3.org/ns/auth/cert#"),zS=BS,US=L("http://www.w3.org/2011/content#"),HS=US,qS=L("http://qudt.org/vocab/constant/"),WS=qS,VS=L("http://www.cidoc-crm.org/cidoc-crm/"),GS=VS,YS=L("http://www.w3.org/ns/csvw#"),JS=YS,QS=L("http://commontag.org/ns#"),KS=QS,XS=L("http://datashapes.org/sparql#"),ZS=XS,eA=L("http://datashapes.org/dash#"),tA=eA,rA=L("http://dbpedia.org/ontology/"),nA=rA,iA=L("http://purl.org/dc/elements/1.1/"),oA=iA,sA=L("http://purl.org/dc/dcam/"),aA=sA,lA=L("http://www.w3.org/ns/dcat#"),cA=lA,uA=L("http://purl.org/dc/dcmitype/"),dA=uA,fA=L("http://purl.org/dc/terms/"),hA=fA,pA=L("http://www.ics.forth.gr/isl/CRMdig/"),yA=pA,mA=L("http://qudt.org/vocab/discipline/"),_A=mA,gA=L("http://usefulinc.com/ns/doap#"),bA=gA,wA=L("http://www.w3.org/ns/dpv#"),vA=wA,SA=L("http://www.w3.org/ns/dqv#"),AA=SA,EA=L("http://www.linkedmodel.org/schema/dtype#"),xA=EA,TA=L("http://www.w3.org/ns/duv#"),PA=TA,CA=L("http://www.w3.org/ns/earl#"),RA=CA,OA=L("http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#"),$A=OA,IA=L("http://www.w3.org/2003/12/exif/ns#"),NA=IA,LA=L("http://xmlns.com/foaf/0.1/"),MA=LA,DA=L("http://purl.org/vocab/frbr/core#"),jA=DA,kA=L("http://www.opengis.net/ont/geosparql#"),FA=kA,BA=L("http://www.opengis.net/def/function/geosparql/"),zA=BA,UA=L("http://www.opengis.net/def/rule/geosparql/"),HA=UA,qA=L("http://www.opengis.net/ont/gml#"),WA=qA,VA=L("http://www.geonames.org/ontology#"),GA=VA,YA=L("http://purl.org/goodrelations/v1#"),JA=YA,QA=L("http://www.w3.org/2003/g/data-view#"),KA=QA,XA=L("https://gs1.org/voc/"),ZA=XA,eE=L("http://vocab.gtfs.org/terms#"),tE=eE,rE=L("http://www.w3.org/2011/http#"),nE=rE,iE=L("http://www.w3.org/ns/hydra/core#"),oE=iE,sE=L("http://www.w3.org/2002/12/cal/icaltzd#"),aE=sE,lE=L("https://linked.art/ns/terms/"),cE=lE,uE=L("http://www.w3.org/ns/ldp#"),dE=uE,fE=L("http://www.w3.org/2000/10/swap/list#"),hE=fE,pE=L("http://www.w3.org/ns/locn#"),yE=pE,mE=L("http://www.w3.org/2000/10/swap/log#"),_E=mE,gE=L("http://lexvo.org/ontology#"),bE=gE,wE=L("http://w3id.org/nfdi4ing/metadata4ing#"),vE=wE,SE=L("http://www.w3.org/ns/ma-ont#"),AE=SE,EE=L("http://www.loc.gov/mads/rdf/v1#"),xE=EE,TE=L("http://www.w3.org/2000/10/swap/math#"),PE=TE,CE=L("http://www.w3.org/ns/oa#"),RE=CE,OE=L("http://ogp.me/ns#"),$E=OE,IE=L("http://www.w3.org/ns/solid/oidc#"),NE=IE,LE=L("http://www.w3.org/ns/org#"),ME=LE,DE=L("http://www.w3.org/2002/07/owl#"),hi=DE,jE=L("http://www.w3.org/ns/pim/space#"),kE=jE,FE=L("http://qudt.org/vocab/prefix/"),BE=FE,zE=L("http://www.w3.org/ns/prov#"),UE=zE,HE=L("http://purl.org/linked-data/cube#"),qE=HE,WE=L("http://qudt.org/vocab/dimensionvector/"),VE=WE,GE=L("http://qudt.org/vocab/quantitykind/"),YE=GE,JE=L("http://qudt.org/schema/qudt/"),QE=JE,KE=L("http://rdaregistry.info/Elements/u/"),XE=KE,ZE=L("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),Or=ZE,ex=L("http://www.w3.org/ns/rdfa#"),tx=ex,rx=L("http://www.w3.org/2000/01/rdf-schema#"),ft=rx,nx=L("http://purl.org/stuff/rev#"),ix=nx,ox=L("https://www.ica.org/standards/RiC/ontology#"),sx=ox,ax=L("http://www.w3.org/ns/r2rml#"),lx=ax,cx=L("http://purl.org/rss/1.0/"),ux=cx,dx=L("http://schema.org/"),fx=dx,hx=L("http://www.w3.org/ns/sparql-service-description#"),px=hx,yx=L("http://purl.org/linked-data/sdmx#"),mx=yx,_x=L("http://semanticweb.cs.vu.nl/2009/11/sem/"),gx=_x,bx=L("http://www.w3.org/2000/10/swap/set#"),wx=bx,vx=L("http://www.opengis.net/ont/sf#"),Sx=vx,Ax=L("http://www.w3.org/ns/shacl#"),C=Ax,Ex=L("http://www.w3.org/ns/shex#"),xx=Ex,Tx=L("https://www.w3.org/ns/shacl-shacl#"),Px=Tx,Cx=L("http://rdfs.org/sioc/ns#"),Rx=Cx,Ox=L("http://www.w3.org/2004/02/skos/core#"),$x=Ox,Ix=L("http://www.w3.org/2008/05/skos-xl#"),Nx=Ix,Lx=L("http://www.w3.org/ns/solid/terms#"),Mx=Lx,Dx=L("http://www.w3.org/ns/sosa/"),jx=Dx,kx=L("http://qudt.org/vocab/sou/"),Fx=kx,Bx=L("http://www.w3.org/ns/ssn/"),zx=Bx,Ux=L("http://www.w3.org/ns/posix/stat#"),Hx=Ux,qx=L("http://www.w3.org/2000/10/swap/string#"),Wx=qx,Vx=L("http://www.w3.org/2006/03/test-description#"),Gx=Vx,Yx=L("http://www.w3.org/2006/time#"),Jx=Yx,Qx=L("http://qudt.org/vocab/unit/"),Kx=Qx,Xx=L("http://www.linkedmodel.org/schema/vaem#"),Zx=Xx,e1=L("http://purl.org/vocab/vann/"),t1=e1,r1=L("http://www.w3.org/2006/vcard/ns#"),n1=r1,i1=L("http://rdfs.org/ns/void#"),o1=i1,s1=L("http://www.w3.org/2003/06/sw-vocab-status/ns#"),a1=s1,l1=L("http://www.w3.org/2007/05/powder-s#"),c1=l1,u1=L("http://www.w3.org/2003/01/geo/wgs84_pos#"),d1=u1,f1=L("http://www.w3.org/1999/xhtml/vocab#"),h1=f1,p1=L("http://rdf-vocabulary.ddialliance.org/xkos#"),y1=p1,m1=L("http://www.w3.org/2001/XMLSchema#"),_1=m1,g1=L("http://www.w3.org/2007/rif#"),b1=g1,w1=L("http://rdf.data-vocabulary.org/#"),v1=w1,S1=L("http://www.w3.org/2007/05/powder#"),A1=S1,E1=L("http://www.w3.org/XML/1998/namespace/"),x1=E1,Cc=t=>{const e=t.namespace("http://www.w3.org/2001/XMLSchema#"),r=t.namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");return{first:r.first,nil:r.nil,rest:r.rest,langString:r.langString,xsd:e}};function Ze(t,e){return typeof t>"u"||t===null?e:Array.isArray(t)?t:typeof t!="string"&&t[Symbol.iterator]?[...t]:[t]}class Rc{constructor(e,{bind:r=!1}={}){this._factories=e.slice();for(const n of this._factories){typeof n.prototype.init=="function"&&n.prototype.init.call(this);for(const i of n.exports||[])r?this[i]=n.prototype[i].bind(this):this[i]=n.prototype[i]}}clone(){const e=new Rc(this._factories);for(const r of e._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(e,this);return e}}const $r=new Rc([Pc,cs]),{xsd:gl}=Cc($r);function T1(t,e=$r){return typeof t!="boolean"?null:e.literal(t.toString(),gl("boolean"))}function P1(t,e=$r){return typeof t!="number"?null:Number.isInteger(t)?e.literal(t.toString(10),gl("integer")):e.literal(t.toString(10),gl("double"))}function C1(t,e=$r){return typeof t!="string"?null:e.literal(t)}function R1(t,e=$r){return T1(t,e)||P1(t,e)||C1(t,e)}function O1(t,e){if(t&&typeof t!="string")throw new Error("Blank node identifier must be a string");return e.blankNode(t)}function $1(t,e,r){if(typeof t=="string")return e=e&&(e.value||e.toString()),e&&e.indexOf(":")!==-1&&(e=r.namedNode(e)),r.literal(t.toString(),e);const n=R1(t,r);if(!n)throw new Error("The value cannot be converted to a literal node");return n}function Ld(t,e){if(typeof t!="string")throw new Error("Named node must be an IRI string");return e.namedNode(t)}function $y(t,e="Literal",r,n){if(t&&typeof t=="object"&&t.termType)return t;if(t&&t.constructor.name==="URL")return Ld(t.toString(),n);if(e==="BlankNode")return O1(t,n);if(!(t===null||typeof t>"u")){if(e==="Literal")return $1(t,r,n);if(e==="NamedNode")return Ld(t,n);throw new Error("unknown type")}}function I1(t,e,r,n){return(typeof t>"u"||t===null)&&!e?t:(Ze(t)||[void 0]).reduce((i,o)=>typeof o=="object"&&o.terms?i.concat(o.terms):(i.push($y(o,e,r,n)),i),[])}const Md=Cc($r);function N1(t,e){const r=e.termType!=="Literal",n=Md.langString.equals(e.datatype)||Md.xsd.string.equals(e.datatype);if(r||!n)return t;const i=e.language.toLowerCase();return t.has(i)?t.get(i).push(e):t.set(i,[e]),t}function L1(t){const e=t.reduce(N1,new Map),r=[...e.entries()];return n=>{const i=n.toLowerCase();if(i==="*")return r[0]&&r[0][1];const o=e.get(i);if(o)return o;const s=r.find(([a])=>a.startsWith(i));return s&&s[1]}}function M1(t,{language:e}){const r=typeof e=="string"?[e]:e,n=L1(t);return r.map(n).find(Boolean)||[]}class Oc{constructor({dataset:e,graph:r,value:n,factory:i,namespace:o}){this.dataset=e,this.graph=r,this.factory=i,this.namespace=o,this.term=$y(n,void 0,void 0,i)}clone({dataset:e=this.dataset,graph:r=this.graph,value:n,factory:i=this.factory,namespace:o=this.namespace}){return new Oc({dataset:e,graph:r,value:n,factory:i,namespace:o})}has(e,r){return this.matchProperty(Ze(this.term),e,r,Ze(this.graph),"subject").map(n=>this.clone({value:n}))}in(e){return this.matchProperty(null,e,Ze(this.term),Ze(this.graph),"subject").map(r=>this.clone({value:r}))}out(e,{language:r}={}){let n=this.matchProperty(Ze(this.term),e,null,Ze(this.graph),"object");return typeof r<"u"&&(n=M1(n,{language:r})),n.map(i=>this.clone({value:i}))}addIn(e,r){const n=[];return this.term&&r.forEach(i=>{e.forEach(o=>{this.dataset.add(this.factory.quad(i,o,this.term,this.graph))}),n.push(this.clone({value:i}))}),n}addOut(e,r){const n=[];return this.term&&r.forEach(i=>{e.forEach(o=>{this.dataset.add(this.factory.quad(this.term,o,i,this.graph))}),n.push(this.clone({value:i}))}),n}addList(e,r){this.term&&e.forEach(n=>{const i=r.map(()=>this.factory.blankNode());this.dataset.add(this.factory.quad(this.term,n,i[0]||this.namespace.nil,this.graph));for(let o=0;o<i.length;o++)this.dataset.add(this.factory.quad(i[o],this.namespace.first,r[o],this.graph)),this.dataset.add(this.factory.quad(i[o],this.namespace.rest,i[o+1]||this.namespace.nil,this.graph))})}deleteIn(e,r){this.deleteMatch(r,e,Ze(this.term),Ze(this.graph))}deleteOut(e,r){this.deleteMatch(Ze(this.term),e,r,Ze(this.graph))}deleteList(e){e.forEach(r=>{for(const n of this.dataset.match(this.term,r))this.deleteItems(n)})}deleteItems(e){let r=[e];for(;!r[r.length-1].object.equals(this.namespace.nil);){const n=r[r.length-1].object;r=r.concat([...this.dataset.match(n)])}r.forEach(n=>{this.dataset.delete(n)})}match(e,r,n,i){if(!e&&!r&&!n&&!i)return[...this.dataset];e=e||[null],r=r||[null],n=n||[null],i=i||[null];const o=[];for(const s of i)for(const a of e)for(const l of r)for(const c of n)for(const f of this.dataset.match(a,l,c,s))o.push(f);return o}matchProperty(e,r,n,i,o){return this.match(e,r,n,i).map(s=>s[o])}deleteMatch(e,r,n,i){this.match(e,r,n,i).forEach(o=>{this.dataset.delete(o)})}}class Xe{constructor({dataset:e,graph:r,term:n,value:i,factory:o,_context:s}){if(this.factory=o,this.namespace=Cc(o),s){this._context=s;return}const a=n&&Ze(n)||i&&Ze(i)||[null];this._context=a.map(l=>new Oc({dataset:e,graph:r,value:l,factory:this.factory,namespace:this.namespace}))}get term(){const e=this.terms;if(e.length===1)return e[0]}get terms(){return this._context.map(e=>e.term).filter(Boolean)}get value(){const e=this.term;return e&&e.value}get values(){return this.terms.map(e=>e.value)}get dataset(){const e=this.datasets;if(e.length===1)return e[0]}get datasets(){return this._context.map(e=>e.dataset).filter(Boolean)}any(){return Xe.fromContext(this._context.map(e=>e.clone({})),this)}isList(){return this.term?!!(this.term.equals(this.namespace.nil)||this.out(this.namespace.first).term):!1}list(){if(this.terms.length>1)throw new Error("iterator over multiple terms is not supported");if(this.term&&(this.term.termType!=="NamedNode"&&this.term.termType!=="BlankNode"||!this.term.equals(this.namespace.nil)&&!this.out(this.namespace.first).term))return null;let e=this;return{[Symbol.iterator]:()=>({next:()=>{if(!e.term||e.term.equals(this.namespace.nil))return{done:!0};const r=e.out(this.namespace.first);if(r.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:first on ${e.value}`);const n=e.out(this.namespace.rest);if(n.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:rest on ${e.value}`);return e=n,{done:!1,value:r}}})}}toArray(){return this._context.map(e=>Xe.fromContext(e,this)).filter(e=>e.terms.some(Boolean))}filter(e){const r=this._context.map(n=>Xe.fromContext(n,this));return Xe.fromContext(this._context.filter((n,i)=>e(Xe.fromContext(n,this),i,r)),this)}forEach(e){return this.toArray().forEach(e),this}map(e){return this.toArray().map(e)}toString(){return this.values.join()}node(e,{type:r,datatype:n,language:i}={}){e=this._toTermArray(e,r,n||i)||[null];const o=e.reduce((s,a)=>s.concat(this._context.reduce((l,c)=>l.concat([c.clone({value:a})]),[])),[]);return Xe.fromContext(o,{factory:this.factory})}blankNode(e){return this.node(e,{type:"BlankNode"})}literal(e,r){return this.node(e,{type:"Literal",datatype:r})}namedNode(e){return this.node(e,{type:"NamedNode"})}in(e){e=this._toTermArray(e);const r=this._context.reduce((n,i)=>n.concat(i.in(e)),[]);return Xe.fromContext(r,this)}out(e,r={}){e=this._toTermArray(e);const n=this._context.reduce((i,o)=>i.concat(o.out(e,r)),[]);return Xe.fromContext(n,this)}has(e,r){e=this._toTermArray(e),r=this._toTermArray(r);const n=this._context.reduce((i,o)=>i.concat(o.has(e,r)),[]);return Xe.fromContext(n,this)}addIn(e,r,n){if(!e)throw new Error("predicate parameter is required");typeof r=="function"&&(n=r,r=null),e=this._toTermArray(e),r=this._toTermArray(r)||[this.factory.blankNode()];const i=this._context.map(o=>o.addIn(e,r));return n&&Xe.fromContext(i,this).forEach(n),this}addOut(e,r,n){if(!e)throw new Error("predicate parameter is required");typeof r=="function"&&(n=r,r=null),e=this._toTermArray(e),r=this._toTermArray(r)||[this.factory.blankNode()];const i=this._context.map(o=>o.addOut(e,r));return n&&Xe.fromContext(i,this).forEach(n),this}addList(e,r){if(!e||!r)throw new Error("predicate and items parameter is required");return e=this._toTermArray(e),r=this._toTermArray(r),this._context.forEach(n=>n.addList(e,r)),this}deleteIn(e,r){return e=this._toTermArray(e),r=this._toTermArray(r),this._context.forEach(n=>n.deleteIn(e,r)),this}deleteOut(e,r){return e=this._toTermArray(e),r=this._toTermArray(r),this._context.forEach(n=>n.deleteOut(e,r)),this}deleteList(e){if(!e)throw new Error("predicate parameter is required");return e=this._toTermArray(e),this._context.forEach(r=>r.deleteList(e)),this}_toTermArray(e,r,n){return I1(e,r,n,this.factory)}static fromContext(e,{factory:r}){return new Xe({_context:Ze(e),factory:r})}}function D1({dataset:t,graph:e,term:r,value:n,factory:i=$r,_context:o}){return new Xe({dataset:t,graph:e,term:r,value:n,factory:i,_context:o})}class Iy{clownface({...e}={}){return!e.dataset&&typeof this.dataset=="function"&&(e.dataset=this.dataset()),D1({...e,factory:this})}}Iy.exports=["clownface"];class j1{constructor(){this.quadLevel=new Map}add(e,r){this.quadLevel.set(Jt(e),r)}has(e,r){const n=this.quadLevel.get(Jt(e));return n===void 0?!1:n<=r}}function Js({backward:t,callback:e,dataset:r,filter:n,forward:i,term:o,visited:s=new j1}){const a=(l,c)=>{const f=p=>{for(const y of p){if(s.has(y,c))continue;s.add(y,c);const b={dataset:r,level:c,quad:y};n(b)&&(e(b),i&&a(y.object,c+1),t&&a(y.subject,c+1))}};i&&f(r.match(l)),t&&f(r.match(null,null,l))};a(o,0)}class k1{constructor(e,{backward:r=!1,factory:n,forward:i=!0}){this.backward=r,this.factory=n,this.filter=e,this.forward=i}forEach({term:e,dataset:r},n){Js({backward:this.backward,callback:n,dataset:r,filter:this.filter,forward:this.forward,term:e})}match({term:e,dataset:r}){const n=this.factory.dataset();return Js({backward:this.backward,callback:({quad:i})=>n.add(i),dataset:r,filter:this.filter,forward:this.forward,term:e}),n}reduce({term:e,dataset:r},n,i){let o=i;return Js({backward:this.backward,callback:s=>{o=n(s,o)},dataset:r,filter:this.filter,forward:this.forward,term:e}),o}}class Ny{traverser(e,{backward:r=!1,forward:n=!0}={}){return new k1(e,{backward:r,factory:this,forward:n})}}Ny.exports=["traverser"];function cr(t){return typeof t=="string"||t instanceof String}const F1="http://www.w3.org/2001/XMLSchema#string";function De(t){if(typeof t=="string")return t;if(!t)return"";if(typeof t.id<"u"&&t.termType!=="Quad")return t.id;let e,r,n,i;switch(t.termType){case"NamedNode":return t.value;case"BlankNode":return`_:${t.value}`;case"Variable":return`?${t.value}`;case"DefaultGraph":return"";case"Literal":return t.language?`"${t.value}"@${t.language}`:`"${t.value}"${t.datatype&&t.datatype.value!==F1?`^^${t.datatype.value}`:""}`;case"Quad":return e=Qs(De(t.subject)),r=Qs(De(t.predicate)),n=Qs(De(t.object)),i=t.graph.termType==="DefaultGraph"?"":` ${De(t.graph)}`,`<<${e} ${r} ${n}${i}>>`;default:throw new Error(`Unexpected termType: ${t.termType}`)}}const B1=/^"(.*".*)(?="[^"]*$)/;function Qs(t){return t.replace(B1,(e,r)=>`"${r.replace(/"/g,'""')}`)}class z1{constructor(e){if(this._size=0,this._graphs=Object.create(null),this._id=0,this._ids=Object.create(null),this._ids["><"]=0,this._entities=Object.create(null),this._quads=new Map,e)for(const r of e)this.add(r)}get size(){let e=this._size;if(e!==null)return e;e=0;const r=this._graphs;let n,i;for(const o in r)for(const s in n=r[o].subjects)for(const a in i=n[s])e+=Object.keys(i[a]).length;return this._size=e,this._size}add(e){let r=De(e.subject),n=De(e.predicate),i=De(e.object);const o=De(e.graph);let s=this._graphs[o];s||(s=this._graphs[o]={subjects:{},predicates:{},objects:{}},Object.freeze(s));const a=this._ids,l=this._entities;return r=a[r]||(a[l[++this._id]=r]=this._id),n=a[n]||(a[l[++this._id]=n]=this._id),i=a[i]||(a[l[++this._id]=i]=this._id),this._addToIndex(s.subjects,r,n,i),this._addToIndex(s.predicates,n,i,r),this._addToIndex(s.objects,i,r,n),this._setQuad(r,n,i,o,e),this._size=null,this}delete(e){let r=De(e.subject),n=De(e.predicate),i=De(e.object);const o=De(e.graph),s=this._ids,a=this._graphs;let l,c,f;if(!(r=s[r])||!(n=s[n])||!(i=s[i])||!(l=a[o])||!(c=l.subjects[r])||!(f=c[n])||!(i in f))return this;this._removeFromIndex(l.subjects,r,n,i),this._removeFromIndex(l.predicates,n,i,r),this._removeFromIndex(l.objects,i,r,n),this._size!==null&&this._size--,this._deleteQuad(r,n,i,o);for(r in l.subjects)return this;return delete a[o],this}has(e){const r=De(e.subject),n=De(e.predicate),i=De(e.object),o=De(e.graph),s=this._graphs[o];if(!s)return!1;const a=this._ids;let l,c,f;return cr(r)&&!(l=a[r])||cr(n)&&!(c=a[n])||cr(i)&&!(f=a[i])?!1:this._countInIndex(s.objects,f,l,c)===1}match(e,r,n,i){return this._createDataset(this._match(e,r,n,i))}[Symbol.iterator](){return this._match()[Symbol.iterator]()}_addToIndex(e,r,n,i){const o=e[r]||(e[r]={}),s=o[n]||(o[n]={}),a=i in s;return a||(s[i]=null),!a}_removeFromIndex(e,r,n,i){const o=e[r],s=o[n];delete s[i];for(const a in s)return;delete o[n];for(const a in o)return;delete e[r]}_findInIndex(e,r,n,i,o,s,a,l,c,f){let p,y,b;r&&((p=e,e={})[r]=p[r]);for(const T in e)if(y=e[T],y){n&&((p=y,y={})[n]=p[n]);for(const E in y)if(b=y[E],b){const I=i?i in b?[i]:[]:Object.keys(b);for(let F=0;F<I.length;F++){const $={[o]:T,[s]:E,[a]:I[F]},x=this._getQuad($.subject,$.predicate,$.object,l);if(f)f.push(x);else if(c(x))return!0}}}return f}_countInIndex(e,r,n,i){let o=0,s,a,l;r&&((s=e,e={})[r]=s[r]);for(const c in e)if(a=e[c],a){n&&((s=a,a={})[n]=s[n]);for(const f in a)l=a[f],l&&(i?i in l&&o++:o+=Object.keys(l).length)}return o}_getGraphs(e){return cr(e)?{[e]:this._graphs[e]}:this._graphs}_match(e,r,n,i){e=e&&De(e),r=r&&De(r),n=n&&De(n),i=i&&De(i);const o=[],s=this._getGraphs(i),a=this._ids;let l,c,f,p;if(cr(e)&&!(c=a[e])||cr(r)&&!(f=a[r])||cr(n)&&!(p=a[n]))return o;for(const y in s)l=s[y],l&&(c?p?this._findInIndex(l.objects,p,c,f,"object","subject","predicate",y,null,o):this._findInIndex(l.subjects,c,f,null,"subject","predicate","object",y,null,o):f?this._findInIndex(l.predicates,f,p,null,"predicate","object","subject",y,null,o):p?this._findInIndex(l.objects,p,null,null,"object","subject","predicate",y,null,o):this._findInIndex(l.subjects,null,null,null,"subject","predicate","object",y,null,o));return o}_getQuad(e,r,n,i){return this._quads.get(this._toId(e,r,n,i))}_setQuad(e,r,n,i,o){this._quads.set(this._toId(e,r,n,i),o)}_deleteQuad(e,r,n,i){this._quads.delete(this._toId(e,r,n,i))}_createDataset(e){return new this.constructor(e)}_toId(e,r,n,i){return`${e}:${r}:${n}:${i}`}}function U1(t,e){for(const r of e)t.add(r);return t}var H1=U1;function q1(t,e,r,n,i){const o=t.match(e,r,n,i);for(const s of o)t.delete(s);return t}var W1=q1;function V1(t,e){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}var G1=V1,Ly={},My={},Dy=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),n=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[r]=i;for(r in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var o=Object.getOwnPropertySymbols(e);if(o.length!==1||o[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,r);if(s.value!==i||s.enumerable!==!0)return!1}return!0},Y1=Dy,$c=function(){return Y1()&&!!Symbol.toStringTag},Dd=typeof Symbol<"u"&&Symbol,J1=Dy,Q1=function(){return typeof Dd!="function"||typeof Symbol!="function"||typeof Dd("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:J1()},jd={foo:{}},K1=Object,X1=function(){return{__proto__:jd}.foo===jd.foo&&!({__proto__:null}instanceof K1)},Z1="Function.prototype.bind called on incompatible ",eT=Object.prototype.toString,tT=Math.max,rT="[object Function]",kd=function(e,r){for(var n=[],i=0;i<e.length;i+=1)n[i]=e[i];for(var o=0;o<r.length;o+=1)n[o+e.length]=r[o];return n},nT=function(e,r){for(var n=[],i=r||0,o=0;i<e.length;i+=1,o+=1)n[o]=e[i];return n},iT=function(t,e){for(var r="",n=0;n<t.length;n+=1)r+=t[n],n+1<t.length&&(r+=e);return r},oT=function(e){var r=this;if(typeof r!="function"||eT.apply(r)!==rT)throw new TypeError(Z1+r);for(var n=nT(arguments,1),i,o=function(){if(this instanceof i){var f=r.apply(this,kd(n,arguments));return Object(f)===f?f:this}return r.apply(e,kd(n,arguments))},s=tT(0,r.length-n.length),a=[],l=0;l<s;l++)a[l]="$"+l;if(i=Function("binder","return function ("+iT(a,",")+"){ return binder.apply(this,arguments); }")(o),r.prototype){var c=function(){};c.prototype=r.prototype,i.prototype=new c,c.prototype=null}return i},sT=oT,Ic=Function.prototype.bind||sT,aT=Function.prototype.call,lT=Object.prototype.hasOwnProperty,cT=Ic,uT=cT.call(aT,lT),fe,cn=SyntaxError,jy=Function,en=TypeError,Ks=function(t){try{return jy('"use strict"; return ('+t+").constructor;")()}catch{}},vr=Object.getOwnPropertyDescriptor;if(vr)try{vr({},"")}catch{vr=null}var Xs=function(){throw new en},dT=vr?function(){try{return arguments.callee,Xs}catch{try{return vr(arguments,"callee").get}catch{return Xs}}}():Xs,Fr=Q1(),fT=X1(),ke=Object.getPrototypeOf||(fT?function(t){return t.__proto__}:null),qr={},hT=typeof Uint8Array>"u"||!ke?fe:ke(Uint8Array),Sr={"%AggregateError%":typeof AggregateError>"u"?fe:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?fe:ArrayBuffer,"%ArrayIteratorPrototype%":Fr&&ke?ke([][Symbol.iterator]()):fe,"%AsyncFromSyncIteratorPrototype%":fe,"%AsyncFunction%":qr,"%AsyncGenerator%":qr,"%AsyncGeneratorFunction%":qr,"%AsyncIteratorPrototype%":qr,"%Atomics%":typeof Atomics>"u"?fe:Atomics,"%BigInt%":typeof BigInt>"u"?fe:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?fe:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?fe:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?fe:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?fe:Float32Array,"%Float64Array%":typeof Float64Array>"u"?fe:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?fe:FinalizationRegistry,"%Function%":jy,"%GeneratorFunction%":qr,"%Int8Array%":typeof Int8Array>"u"?fe:Int8Array,"%Int16Array%":typeof Int16Array>"u"?fe:Int16Array,"%Int32Array%":typeof Int32Array>"u"?fe:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Fr&&ke?ke(ke([][Symbol.iterator]())):fe,"%JSON%":typeof JSON=="object"?JSON:fe,"%Map%":typeof Map>"u"?fe:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Fr||!ke?fe:ke(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?fe:Promise,"%Proxy%":typeof Proxy>"u"?fe:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?fe:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?fe:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Fr||!ke?fe:ke(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?fe:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Fr&&ke?ke(""[Symbol.iterator]()):fe,"%Symbol%":Fr?Symbol:fe,"%SyntaxError%":cn,"%ThrowTypeError%":dT,"%TypedArray%":hT,"%TypeError%":en,"%Uint8Array%":typeof Uint8Array>"u"?fe:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?fe:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?fe:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?fe:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?fe:WeakMap,"%WeakRef%":typeof WeakRef>"u"?fe:WeakRef,"%WeakSet%":typeof WeakSet>"u"?fe:WeakSet};if(ke)try{null.error}catch(t){var pT=ke(ke(t));Sr["%Error.prototype%"]=pT}var yT=function t(e){var r;if(e==="%AsyncFunction%")r=Ks("async function () {}");else if(e==="%GeneratorFunction%")r=Ks("function* () {}");else if(e==="%AsyncGeneratorFunction%")r=Ks("async function* () {}");else if(e==="%AsyncGenerator%"){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=t("%AsyncGenerator%");i&&ke&&(r=ke(i.prototype))}return Sr[e]=r,r},Fd={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},pi=Ic,go=uT,mT=pi.call(Function.call,Array.prototype.concat),_T=pi.call(Function.apply,Array.prototype.splice),Bd=pi.call(Function.call,String.prototype.replace),bo=pi.call(Function.call,String.prototype.slice),gT=pi.call(Function.call,RegExp.prototype.exec),bT=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,wT=/\\(\\)?/g,vT=function(e){var r=bo(e,0,1),n=bo(e,-1);if(r==="%"&&n!=="%")throw new cn("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&r!=="%")throw new cn("invalid intrinsic syntax, expected opening `%`");var i=[];return Bd(e,bT,function(o,s,a,l){i[i.length]=a?Bd(l,wT,"$1"):s||o}),i},ST=function(e,r){var n=e,i;if(go(Fd,n)&&(i=Fd[n],n="%"+i[0]+"%"),go(Sr,n)){var o=Sr[n];if(o===qr&&(o=yT(n)),typeof o>"u"&&!r)throw new en("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:i,name:n,value:o}}throw new cn("intrinsic "+e+" does not exist!")},gn=function(e,r){if(typeof e!="string"||e.length===0)throw new en("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new en('"allowMissing" argument must be a boolean');if(gT(/^%?[^%]*%?$/,e)===null)throw new cn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=vT(e),i=n.length>0?n[0]:"",o=ST("%"+i+"%",r),s=o.name,a=o.value,l=!1,c=o.alias;c&&(i=c[0],_T(n,mT([0,1],c)));for(var f=1,p=!0;f<n.length;f+=1){var y=n[f],b=bo(y,0,1),T=bo(y,-1);if((b==='"'||b==="'"||b==="`"||T==='"'||T==="'"||T==="`")&&b!==T)throw new cn("property names with quotes must have matching quotes");if((y==="constructor"||!p)&&(l=!0),i+="."+y,s="%"+i+"%",go(Sr,s))a=Sr[s];else if(a!=null){if(!(y in a)){if(!r)throw new en("base intrinsic for "+e+" exists, but the property is not available.");return}if(vr&&f+1>=n.length){var E=vr(a,y);p=!!E,p&&"get"in E&&!("originalValue"in E.get)?a=E.get:a=a[y]}else p=go(a,y),a=a[y];p&&!l&&(Sr[s]=a)}}return a},ky={exports:{}},AT=gn,bl=AT("%Object.defineProperty%",!0),wl=function(){if(bl)try{return bl({},"a",{value:1}),!0}catch{return!1}return!1};wl.hasArrayLengthDefineBug=function(){if(!wl())return null;try{return bl([],"length",{value:1}).length!==1}catch{return!0}};var Fy=wl,ET=gn,Wi=ET("%Object.getOwnPropertyDescriptor%",!0);if(Wi)try{Wi([],"length")}catch{Wi=null}var Nc=Wi,xT=Fy(),Lc=gn,Gn=xT&&Lc("%Object.defineProperty%",!0);if(Gn)try{Gn({},"a",{value:1})}catch{Gn=!1}var TT=Lc("%SyntaxError%"),Br=Lc("%TypeError%"),zd=Nc,PT=function(e,r,n){if(!e||typeof e!="object"&&typeof e!="function")throw new Br("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new Br("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new Br("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new Br("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new Br("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new Br("`loose`, if provided, must be a boolean");var i=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,s=arguments.length>5?arguments[5]:null,a=arguments.length>6?arguments[6]:!1,l=!!zd&&zd(e,r);if(Gn)Gn(e,r,{configurable:s===null&&l?l.configurable:!s,enumerable:i===null&&l?l.enumerable:!i,value:n,writable:o===null&&l?l.writable:!o});else if(a||!i&&!o&&!s)e[r]=n;else throw new TT("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},By=gn,Ud=PT,CT=Fy(),Hd=Nc,qd=By("%TypeError%"),RT=By("%Math.floor%"),OT=function(e,r){if(typeof e!="function")throw new qd("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||RT(r)!==r)throw new qd("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],i=!0,o=!0;if("length"in e&&Hd){var s=Hd(e,"length");s&&!s.configurable&&(i=!1),s&&!s.writable&&(o=!1)}return(i||o||!n)&&(CT?Ud(e,"length",r,!0,!0):Ud(e,"length",r)),e};(function(t){var e=Ic,r=gn,n=OT,i=r("%TypeError%"),o=r("%Function.prototype.apply%"),s=r("%Function.prototype.call%"),a=r("%Reflect.apply%",!0)||e.call(s,o),l=r("%Object.defineProperty%",!0),c=r("%Math.max%");if(l)try{l({},"a",{value:1})}catch{l=null}t.exports=function(y){if(typeof y!="function")throw new i("a function is required");var b=a(e,s,arguments);return n(b,1+c(0,y.length-(arguments.length-1)),!0)};var f=function(){return a(e,o,arguments)};l?l(t.exports,"apply",{value:f}):t.exports.apply=f})(ky);var zy=ky.exports,Uy=gn,Hy=zy,$T=Hy(Uy("String.prototype.indexOf")),qy=function(e,r){var n=Uy(e,!!r);return typeof n=="function"&&$T(e,".prototype.")>-1?Hy(n):n},IT=$c(),NT=qy,vl=NT("Object.prototype.toString"),us=function(e){return IT&&e&&typeof e=="object"&&Symbol.toStringTag in e?!1:vl(e)==="[object Arguments]"},Wy=function(e){return us(e)?!0:e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&vl(e)!=="[object Array]"&&vl(e.callee)==="[object Function]"},LT=function(){return us(arguments)}();us.isLegacyArguments=Wy;var MT=LT?us:Wy,DT=Object.prototype.toString,jT=Function.prototype.toString,kT=/^\s*(?:function)?\*/,Vy=$c(),Zs=Object.getPrototypeOf,FT=function(){if(!Vy)return!1;try{return Function("return function*() {}")()}catch{}},ea,BT=function(e){if(typeof e!="function")return!1;if(kT.test(jT.call(e)))return!0;if(!Vy){var r=DT.call(e);return r==="[object GeneratorFunction]"}if(!Zs)return!1;if(typeof ea>"u"){var n=FT();ea=n?Zs(n):!1}return Zs(e)===ea},Gy=Function.prototype.toString,Vr=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,Sl,Vi;if(typeof Vr=="function"&&typeof Object.defineProperty=="function")try{Sl=Object.defineProperty({},"length",{get:function(){throw Vi}}),Vi={},Vr(function(){throw 42},null,Sl)}catch(t){t!==Vi&&(Vr=null)}else Vr=null;var zT=/^\s*class\b/,Al=function(e){try{var r=Gy.call(e);return zT.test(r)}catch{return!1}},ta=function(e){try{return Al(e)?!1:(Gy.call(e),!0)}catch{return!1}},Gi=Object.prototype.toString,UT="[object Object]",HT="[object Function]",qT="[object GeneratorFunction]",WT="[object HTMLAllCollection]",VT="[object HTML document.all class]",GT="[object HTMLCollection]",YT=typeof Symbol=="function"&&!!Symbol.toStringTag,JT=!(0 in[,]),El=function(){return!1};if(typeof document=="object"){var QT=document.all;Gi.call(QT)===Gi.call(document.all)&&(El=function(e){if((JT||!e)&&(typeof e>"u"||typeof e=="object"))try{var r=Gi.call(e);return(r===WT||r===VT||r===GT||r===UT)&&e("")==null}catch{}return!1})}var KT=Vr?function(e){if(El(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;try{Vr(e,null,Sl)}catch(r){if(r!==Vi)return!1}return!Al(e)&&ta(e)}:function(e){if(El(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(YT)return ta(e);if(Al(e))return!1;var r=Gi.call(e);return r!==HT&&r!==qT&&!/^\[object HTML/.test(r)?!1:ta(e)},XT=KT,ZT=Object.prototype.toString,Yy=Object.prototype.hasOwnProperty,eP=function(e,r,n){for(var i=0,o=e.length;i<o;i++)Yy.call(e,i)&&(n==null?r(e[i],i,e):r.call(n,e[i],i,e))},tP=function(e,r,n){for(var i=0,o=e.length;i<o;i++)n==null?r(e.charAt(i),i,e):r.call(n,e.charAt(i),i,e)},rP=function(e,r,n){for(var i in e)Yy.call(e,i)&&(n==null?r(e[i],i,e):r.call(n,e[i],i,e))},nP=function(e,r,n){if(!XT(r))throw new TypeError("iterator must be a function");var i;arguments.length>=3&&(i=n),ZT.call(e)==="[object Array]"?eP(e,r,i):typeof e=="string"?tP(e,r,i):rP(e,r,i)},iP=nP,ra=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],oP=typeof globalThis>"u"?window:globalThis,sP=function(){for(var e=[],r=0;r<ra.length;r++)typeof oP[ra[r]]=="function"&&(e[e.length]=ra[r]);return e},wo=iP,aP=sP,Wd=zy,Mc=qy,Yi=Nc,lP=Mc("Object.prototype.toString"),Jy=$c(),Vd=typeof globalThis>"u"?window:globalThis,xl=aP(),Dc=Mc("String.prototype.slice"),na=Object.getPrototypeOf,cP=Mc("Array.prototype.indexOf",!0)||function(e,r){for(var n=0;n<e.length;n+=1)if(e[n]===r)return n;return-1},vo={__proto__:null};Jy&&Yi&&na?wo(xl,function(t){var e=new Vd[t];if(Symbol.toStringTag in e){var r=na(e),n=Yi(r,Symbol.toStringTag);if(!n){var i=na(r);n=Yi(i,Symbol.toStringTag)}vo["$"+t]=Wd(n.get)}}):wo(xl,function(t){var e=new Vd[t],r=e.slice||e.set;r&&(vo["$"+t]=Wd(r))});var uP=function(e){var r=!1;return wo(vo,function(n,i){if(!r)try{"$"+n(e)===i&&(r=Dc(i,1))}catch{}}),r},dP=function(e){var r=!1;return wo(vo,function(n,i){if(!r)try{n(e),r=Dc(i,1)}catch{}}),r},Qy=function(e){if(!e||typeof e!="object")return!1;if(!Jy){var r=Dc(lP(e),8,-1);return cP(xl,r)>-1?r:r!=="Object"?!1:dP(e)}return Yi?uP(e):null},fP=Qy,hP=function(e){return!!fP(e)};(function(t){var e=MT,r=BT,n=Qy,i=hP;function o(O){return O.call.bind(O)}var s=typeof BigInt<"u",a=typeof Symbol<"u",l=o(Object.prototype.toString),c=o(Number.prototype.valueOf),f=o(String.prototype.valueOf),p=o(Boolean.prototype.valueOf);if(s)var y=o(BigInt.prototype.valueOf);if(a)var b=o(Symbol.prototype.valueOf);function T(O,_e){if(typeof O!="object")return!1;try{return _e(O),!0}catch{return!1}}t.isArgumentsObject=e,t.isGeneratorFunction=r,t.isTypedArray=i;function E(O){return typeof Promise<"u"&&O instanceof Promise||O!==null&&typeof O=="object"&&typeof O.then=="function"&&typeof O.catch=="function"}t.isPromise=E;function I(O){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(O):i(O)||v(O)}t.isArrayBufferView=I;function F(O){return n(O)==="Uint8Array"}t.isUint8Array=F;function $(O){return n(O)==="Uint8ClampedArray"}t.isUint8ClampedArray=$;function x(O){return n(O)==="Uint16Array"}t.isUint16Array=x;function U(O){return n(O)==="Uint32Array"}t.isUint32Array=U;function W(O){return n(O)==="Int8Array"}t.isInt8Array=W;function he(O){return n(O)==="Int16Array"}t.isInt16Array=he;function Ne(O){return n(O)==="Int32Array"}t.isInt32Array=Ne;function se(O){return n(O)==="Float32Array"}t.isFloat32Array=se;function Q(O){return n(O)==="Float64Array"}t.isFloat64Array=Q;function Ee(O){return n(O)==="BigInt64Array"}t.isBigInt64Array=Ee;function Pe(O){return n(O)==="BigUint64Array"}t.isBigUint64Array=Pe;function ee(O){return l(O)==="[object Map]"}ee.working=typeof Map<"u"&&ee(new Map);function j(O){return typeof Map>"u"?!1:ee.working?ee(O):O instanceof Map}t.isMap=j;function ue(O){return l(O)==="[object Set]"}ue.working=typeof Set<"u"&&ue(new Set);function re(O){return typeof Set>"u"?!1:ue.working?ue(O):O instanceof Set}t.isSet=re;function ne(O){return l(O)==="[object WeakMap]"}ne.working=typeof WeakMap<"u"&&ne(new WeakMap);function xe(O){return typeof WeakMap>"u"?!1:ne.working?ne(O):O instanceof WeakMap}t.isWeakMap=xe;function be(O){return l(O)==="[object WeakSet]"}be.working=typeof WeakSet<"u"&&be(new WeakSet);function we(O){return be(O)}t.isWeakSet=we;function de(O){return l(O)==="[object ArrayBuffer]"}de.working=typeof ArrayBuffer<"u"&&de(new ArrayBuffer);function J(O){return typeof ArrayBuffer>"u"?!1:de.working?de(O):O instanceof ArrayBuffer}t.isArrayBuffer=J;function me(O){return l(O)==="[object DataView]"}me.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&me(new DataView(new ArrayBuffer(1),0,1));function v(O){return typeof DataView>"u"?!1:me.working?me(O):O instanceof DataView}t.isDataView=v;var R=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function D(O){return l(O)==="[object SharedArrayBuffer]"}function K(O){return typeof R>"u"?!1:(typeof D.working>"u"&&(D.working=D(new R)),D.working?D(O):O instanceof R)}t.isSharedArrayBuffer=K;function le(O){return l(O)==="[object AsyncFunction]"}t.isAsyncFunction=le;function oe(O){return l(O)==="[object Map Iterator]"}t.isMapIterator=oe;function X(O){return l(O)==="[object Set Iterator]"}t.isSetIterator=X;function ce(O){return l(O)==="[object Generator]"}t.isGeneratorObject=ce;function pe(O){return l(O)==="[object WebAssembly.Module]"}t.isWebAssemblyCompiledModule=pe;function Ce(O){return T(O,c)}t.isNumberObject=Ce;function S(O){return T(O,f)}t.isStringObject=S;function A(O){return T(O,p)}t.isBooleanObject=A;function M(O){return s&&T(O,y)}t.isBigIntObject=M;function H(O){return a&&T(O,b)}t.isSymbolObject=H;function q(O){return Ce(O)||S(O)||A(O)||M(O)||H(O)}t.isBoxedPrimitive=q;function ve(O){return typeof Uint8Array<"u"&&(J(O)||K(O))}t.isAnyArrayBuffer=ve,["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(O){Object.defineProperty(t,O,{enumerable:!1,value:function(){throw new Error(O+" is not supported in userland")}})})})(My);var pP=function(e){return e&&typeof e=="object"&&typeof e.copy=="function"&&typeof e.fill=="function"&&typeof e.readUInt8=="function"},Tl={exports:{}};typeof Object.create=="function"?Tl.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Tl.exports=function(e,r){if(r){e.super_=r;var n=function(){};n.prototype=r.prototype,e.prototype=new n,e.prototype.constructor=e}};var yP=Tl.exports;(function(t){var e={},r=Object.getOwnPropertyDescriptors||function(R){for(var D=Object.keys(R),K={},le=0;le<D.length;le++)K[D[le]]=Object.getOwnPropertyDescriptor(R,D[le]);return K},n=/%[sdj%]/g;t.format=function(v){if(!he(v)){for(var R=[],D=0;D<arguments.length;D++)R.push(a(arguments[D]));return R.join(" ")}for(var D=1,K=arguments,le=K.length,oe=String(v).replace(n,function(ce){if(ce==="%%")return"%";if(D>=le)return ce;switch(ce){case"%s":return String(K[D++]);case"%d":return Number(K[D++]);case"%j":try{return JSON.stringify(K[D++])}catch{return"[Circular]"}default:return ce}}),X=K[D];D<le;X=K[++D])x(X)||!Ee(X)?oe+=" "+X:oe+=" "+a(X);return oe},t.deprecate=function(v,R){if(typeof process<"u"&&process.noDeprecation===!0)return v;if(typeof process>"u")return function(){return t.deprecate(v,R).apply(this,arguments)};var D=!1;function K(){if(!D){if(process.throwDeprecation)throw new Error(R);process.traceDeprecation?console.trace(R):console.error(R),D=!0}return v.apply(this,arguments)}return K};var i={},o=/^$/;if(e.NODE_DEBUG){var s=e.NODE_DEBUG;s=s.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),o=new RegExp("^"+s+"$","i")}t.debuglog=function(v){if(v=v.toUpperCase(),!i[v])if(o.test(v)){var R=process.pid;i[v]=function(){var D=t.format.apply(t,arguments);console.error("%s %d: %s",v,R,D)}}else i[v]=function(){};return i[v]};function a(v,R){var D={seen:[],stylize:c};return arguments.length>=3&&(D.depth=arguments[2]),arguments.length>=4&&(D.colors=arguments[3]),$(R)?D.showHidden=R:R&&t._extend(D,R),se(D.showHidden)&&(D.showHidden=!1),se(D.depth)&&(D.depth=2),se(D.colors)&&(D.colors=!1),se(D.customInspect)&&(D.customInspect=!0),D.colors&&(D.stylize=l),p(D,v,D.depth)}t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function l(v,R){var D=a.styles[R];return D?"\x1B["+a.colors[D][0]+"m"+v+"\x1B["+a.colors[D][1]+"m":v}function c(v,R){return v}function f(v){var R={};return v.forEach(function(D,K){R[D]=!0}),R}function p(v,R,D){if(v.customInspect&&R&&j(R.inspect)&&R.inspect!==t.inspect&&!(R.constructor&&R.constructor.prototype===R)){var K=R.inspect(D,v);return he(K)||(K=p(v,K,D)),K}var le=y(v,R);if(le)return le;var oe=Object.keys(R),X=f(oe);if(v.showHidden&&(oe=Object.getOwnPropertyNames(R)),ee(R)&&(oe.indexOf("message")>=0||oe.indexOf("description")>=0))return b(R);if(oe.length===0){if(j(R)){var ce=R.name?": "+R.name:"";return v.stylize("[Function"+ce+"]","special")}if(Q(R))return v.stylize(RegExp.prototype.toString.call(R),"regexp");if(Pe(R))return v.stylize(Date.prototype.toString.call(R),"date");if(ee(R))return b(R)}var pe="",Ce=!1,S=["{","}"];if(F(R)&&(Ce=!0,S=["[","]"]),j(R)){var A=R.name?": "+R.name:"";pe=" [Function"+A+"]"}if(Q(R)&&(pe=" "+RegExp.prototype.toString.call(R)),Pe(R)&&(pe=" "+Date.prototype.toUTCString.call(R)),ee(R)&&(pe=" "+b(R)),oe.length===0&&(!Ce||R.length==0))return S[0]+pe+S[1];if(D<0)return Q(R)?v.stylize(RegExp.prototype.toString.call(R),"regexp"):v.stylize("[Object]","special");v.seen.push(R);var M;return Ce?M=T(v,R,D,X,oe):M=oe.map(function(H){return E(v,R,D,X,H,Ce)}),v.seen.pop(),I(M,pe,S)}function y(v,R){if(se(R))return v.stylize("undefined","undefined");if(he(R)){var D="'"+JSON.stringify(R).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return v.stylize(D,"string")}if(W(R))return v.stylize(""+R,"number");if($(R))return v.stylize(""+R,"boolean");if(x(R))return v.stylize("null","null")}function b(v){return"["+Error.prototype.toString.call(v)+"]"}function T(v,R,D,K,le){for(var oe=[],X=0,ce=R.length;X<ce;++X)we(R,String(X))?oe.push(E(v,R,D,K,String(X),!0)):oe.push("");return le.forEach(function(pe){pe.match(/^\d+$/)||oe.push(E(v,R,D,K,pe,!0))}),oe}function E(v,R,D,K,le,oe){var X,ce,pe;if(pe=Object.getOwnPropertyDescriptor(R,le)||{value:R[le]},pe.get?pe.set?ce=v.stylize("[Getter/Setter]","special"):ce=v.stylize("[Getter]","special"):pe.set&&(ce=v.stylize("[Setter]","special")),we(K,le)||(X="["+le+"]"),ce||(v.seen.indexOf(pe.value)<0?(x(D)?ce=p(v,pe.value,null):ce=p(v,pe.value,D-1),ce.indexOf(`
`)>-1&&(oe?ce=ce.split(`
`).map(function(Ce){return"  "+Ce}).join(`
`).slice(2):ce=`
`+ce.split(`
`).map(function(Ce){return"   "+Ce}).join(`
`))):ce=v.stylize("[Circular]","special")),se(X)){if(oe&&le.match(/^\d+$/))return ce;X=JSON.stringify(""+le),X.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(X=X.slice(1,-1),X=v.stylize(X,"name")):(X=X.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),X=v.stylize(X,"string"))}return X+": "+ce}function I(v,R,D){var K=v.reduce(function(le,oe){return oe.indexOf(`
`)>=0,le+oe.replace(/\u001b\[\d\d?m/g,"").length+1},0);return K>60?D[0]+(R===""?"":R+`
 `)+" "+v.join(`,
  `)+" "+D[1]:D[0]+R+" "+v.join(", ")+" "+D[1]}t.types=My;function F(v){return Array.isArray(v)}t.isArray=F;function $(v){return typeof v=="boolean"}t.isBoolean=$;function x(v){return v===null}t.isNull=x;function U(v){return v==null}t.isNullOrUndefined=U;function W(v){return typeof v=="number"}t.isNumber=W;function he(v){return typeof v=="string"}t.isString=he;function Ne(v){return typeof v=="symbol"}t.isSymbol=Ne;function se(v){return v===void 0}t.isUndefined=se;function Q(v){return Ee(v)&&re(v)==="[object RegExp]"}t.isRegExp=Q,t.types.isRegExp=Q;function Ee(v){return typeof v=="object"&&v!==null}t.isObject=Ee;function Pe(v){return Ee(v)&&re(v)==="[object Date]"}t.isDate=Pe,t.types.isDate=Pe;function ee(v){return Ee(v)&&(re(v)==="[object Error]"||v instanceof Error)}t.isError=ee,t.types.isNativeError=ee;function j(v){return typeof v=="function"}t.isFunction=j;function ue(v){return v===null||typeof v=="boolean"||typeof v=="number"||typeof v=="string"||typeof v=="symbol"||typeof v>"u"}t.isPrimitive=ue,t.isBuffer=pP;function re(v){return Object.prototype.toString.call(v)}function ne(v){return v<10?"0"+v.toString(10):v.toString(10)}var xe=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function be(){var v=new Date,R=[ne(v.getHours()),ne(v.getMinutes()),ne(v.getSeconds())].join(":");return[v.getDate(),xe[v.getMonth()],R].join(" ")}t.log=function(){console.log("%s - %s",be(),t.format.apply(t,arguments))},t.inherits=yP,t._extend=function(v,R){if(!R||!Ee(R))return v;for(var D=Object.keys(R),K=D.length;K--;)v[D[K]]=R[D[K]];return v};function we(v,R){return Object.prototype.hasOwnProperty.call(v,R)}var de=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;t.promisify=function(R){if(typeof R!="function")throw new TypeError('The "original" argument must be of type Function');if(de&&R[de]){var D=R[de];if(typeof D!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(D,de,{value:D,enumerable:!1,writable:!1,configurable:!0}),D}function D(){for(var K,le,oe=new Promise(function(pe,Ce){K=pe,le=Ce}),X=[],ce=0;ce<arguments.length;ce++)X.push(arguments[ce]);X.push(function(pe,Ce){pe?le(pe):K(Ce)});try{R.apply(this,X)}catch(pe){le(pe)}return oe}return Object.setPrototypeOf(D,Object.getPrototypeOf(R)),de&&Object.defineProperty(D,de,{value:D,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(D,r(R))},t.promisify.custom=de;function J(v,R){if(!v){var D=new Error("Promise was rejected with a falsy value");D.reason=v,v=D}return R(v)}function me(v){if(typeof v!="function")throw new TypeError('The "original" argument must be of type Function');function R(){for(var D=[],K=0;K<arguments.length;K++)D.push(arguments[K]);var le=D.pop();if(typeof le!="function")throw new TypeError("The last argument must be of type Function");var oe=this,X=function(){return le.apply(oe,arguments)};v.apply(this,D).then(function(ce){process.nextTick(X.bind(null,null,ce))},function(ce){process.nextTick(J.bind(null,ce,X))})}return Object.setPrototypeOf(R,Object.getPrototypeOf(v)),Object.defineProperties(R,r(v)),R}t.callbackify=me})(Ly);var Ky={exports:{}},ia={exports:{}},Le={ArrayIsArray(t){return Array.isArray(t)},ArrayPrototypeIncludes(t,e){return t.includes(e)},ArrayPrototypeIndexOf(t,e){return t.indexOf(e)},ArrayPrototypeJoin(t,e){return t.join(e)},ArrayPrototypeMap(t,e){return t.map(e)},ArrayPrototypePop(t,e){return t.pop(e)},ArrayPrototypePush(t,e){return t.push(e)},ArrayPrototypeSlice(t,e,r){return t.slice(e,r)},Error,FunctionPrototypeCall(t,e,...r){return t.call(e,...r)},FunctionPrototypeSymbolHasInstance(t,e){return Function.prototype[Symbol.hasInstance].call(t,e)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER,NumberMIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER,NumberParseInt:Number.parseInt,ObjectDefineProperties(t,e){return Object.defineProperties(t,e)},ObjectDefineProperty(t,e,r){return Object.defineProperty(t,e,r)},ObjectGetOwnPropertyDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)},ObjectKeys(t){return Object.keys(t)},ObjectSetPrototypeOf(t,e){return Object.setPrototypeOf(t,e)},Promise,PromisePrototypeCatch(t,e){return t.catch(e)},PromisePrototypeThen(t,e,r){return t.then(e,r)},PromiseReject(t){return Promise.reject(t)},PromiseResolve(t){return Promise.resolve(t)},ReflectApply:Reflect.apply,RegExpPrototypeTest(t,e){return t.test(e)},SafeSet:Set,String,StringPrototypeSlice(t,e,r){return t.slice(e,r)},StringPrototypeToLowerCase(t){return t.toLowerCase()},StringPrototypeToUpperCase(t){return t.toUpperCase()},StringPrototypeTrim(t){return t.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,SymbolDispose:Symbol.dispose||Symbol("Symbol.dispose"),SymbolAsyncDispose:Symbol.asyncDispose||Symbol("Symbol.asyncDispose"),TypedArrayPrototypeSet(t,e,r){return t.set(e,r)},Boolean,Uint8Array},Xy={exports:{}},$n={exports:{}},Gd;function li(){if(Gd)return $n.exports;Gd=1;const{AbortController:t,AbortSignal:e}=typeof self<"u"?self:typeof window<"u"?window:void 0;return $n.exports=t,$n.exports.AbortSignal=e,$n.exports.default=t,$n.exports}(function(t){const e=xt,{kResistStopPropagation:r,SymbolDispose:n}=Le,i=globalThis.AbortSignal||li().AbortSignal,o=globalThis.AbortController||li().AbortController,s=Object.getPrototypeOf(async function(){}).constructor,a=globalThis.Blob||e.Blob,l=typeof a<"u"?function(b){return b instanceof a}:function(b){return!1},c=(y,b)=>{if(y!==void 0&&(y===null||typeof y!="object"||!("aborted"in y)))throw new ERR_INVALID_ARG_TYPE(b,"AbortSignal",y)},f=(y,b)=>{if(typeof y!="function")throw new ERR_INVALID_ARG_TYPE(b,"Function",y)};class p extends Error{constructor(b){if(!Array.isArray(b))throw new TypeError(`Expected input to be an Array, got ${typeof b}`);let T="";for(let E=0;E<b.length;E++)T+=`    ${b[E].stack}
`;super(T),this.name="AggregateError",this.errors=b}}t.exports={AggregateError:p,kEmptyObject:Object.freeze({}),once(y){let b=!1;return function(...T){b||(b=!0,y.apply(this,T))}},createDeferredPromise:function(){let y,b;return{promise:new Promise((E,I)=>{y=E,b=I}),resolve:y,reject:b}},promisify(y){return new Promise((b,T)=>{y((E,...I)=>E?T(E):b(...I))})},debuglog(){return function(){}},format(y,...b){return y.replace(/%([sdifj])/g,function(...[T,E]){const I=b.shift();return E==="f"?I.toFixed(6):E==="j"?JSON.stringify(I):E==="s"&&typeof I=="object"?`${I.constructor!==Object?I.constructor.name:""} {}`.trim():I.toString()})},inspect(y){switch(typeof y){case"string":if(y.includes("'"))if(y.includes('"')){if(!y.includes("`")&&!y.includes("${"))return`\`${y}\``}else return`"${y}"`;return`'${y}'`;case"number":return isNaN(y)?"NaN":Object.is(y,-0)?String(y):y;case"bigint":return`${String(y)}n`;case"boolean":case"undefined":return String(y);case"object":return"{}"}},types:{isAsyncFunction(y){return y instanceof s},isArrayBufferView(y){return ArrayBuffer.isView(y)}},isBlob:l,deprecate(y,b){return y},addAbortListener:ui.addAbortListener||function(b,T){if(b===void 0)throw new ERR_INVALID_ARG_TYPE("signal","AbortSignal",b);c(b,"signal"),f(T,"listener");let E;return b.aborted?queueMicrotask(()=>T()):(b.addEventListener("abort",T,{__proto__:null,once:!0,[r]:!0}),E=()=>{b.removeEventListener("abort",T)}),{__proto__:null,[n](){var I;(I=E)===null||I===void 0||I()}}},AbortSignalAny:i.any||function(b){if(b.length===1)return b[0];const T=new o,E=()=>T.abort();return b.forEach(I=>{c(I,"signals"),I.addEventListener("abort",E,{once:!0})}),T.signal.addEventListener("abort",()=>{b.forEach(I=>I.removeEventListener("abort",E))},{once:!0}),T.signal}},t.exports.promisify.custom=Symbol.for("nodejs.util.promisify.custom")})(Xy);var Ke=Xy.exports,jc={};const{format:mP,inspect:So,AggregateError:_P}=Ke,gP=globalThis.AggregateError||_P,bP=Symbol("kIsNodeError"),wP=["string","function","number","object","Function","Object","boolean","bigint","symbol"],vP=/^([A-Z][a-z0-9]*)+$/,SP="__node_internal_",ds={};function Ar(t,e){if(!t)throw new ds.ERR_INTERNAL_ASSERTION(e)}function Yd(t){let e="",r=t.length;const n=t[0]==="-"?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function AP(t,e,r){if(typeof e=="function")return Ar(e.length<=r.length,`Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${e.length}).`),e(...r);const n=(e.match(/%[dfijoOs]/g)||[]).length;return Ar(n===r.length,`Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${n}).`),r.length===0?e:mP(e,...r)}function Ue(t,e,r){r||(r=Error);class n extends r{constructor(...o){super(AP(t,e,o))}toString(){return`${this.name} [${t}]: ${this.message}`}}Object.defineProperties(n.prototype,{name:{value:r.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${t}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),n.prototype.code=t,n.prototype[bP]=!0,ds[t]=n}function Jd(t){const e=SP+t.name;return Object.defineProperty(t,"name",{value:e}),t}function EP(t,e){if(t&&e&&t!==e){if(Array.isArray(e.errors))return e.errors.push(t),e;const r=new gP([e,t],e.message);return r.code=e.code,r}return t||e}let xP=class extends Error{constructor(e="The operation was aborted",r=void 0){if(r!==void 0&&typeof r!="object")throw new ds.ERR_INVALID_ARG_TYPE("options","Object",r);super(e,r),this.code="ABORT_ERR",this.name="AbortError"}};Ue("ERR_ASSERTION","%s",Error);Ue("ERR_INVALID_ARG_TYPE",(t,e,r)=>{Ar(typeof t=="string","'name' must be a string"),Array.isArray(e)||(e=[e]);let n="The ";t.endsWith(" argument")?n+=`${t} `:n+=`"${t}" ${t.includes(".")?"property":"argument"} `,n+="must be ";const i=[],o=[],s=[];for(const l of e)Ar(typeof l=="string","All expected entries have to be of type string"),wP.includes(l)?i.push(l.toLowerCase()):vP.test(l)?o.push(l):(Ar(l!=="object",'The value "object" should be written as "Object"'),s.push(l));if(o.length>0){const l=i.indexOf("object");l!==-1&&(i.splice(i,l,1),o.push("Object"))}if(i.length>0){switch(i.length){case 1:n+=`of type ${i[0]}`;break;case 2:n+=`one of type ${i[0]} or ${i[1]}`;break;default:{const l=i.pop();n+=`one of type ${i.join(", ")}, or ${l}`}}(o.length>0||s.length>0)&&(n+=" or ")}if(o.length>0){switch(o.length){case 1:n+=`an instance of ${o[0]}`;break;case 2:n+=`an instance of ${o[0]} or ${o[1]}`;break;default:{const l=o.pop();n+=`an instance of ${o.join(", ")}, or ${l}`}}s.length>0&&(n+=" or ")}switch(s.length){case 0:break;case 1:s[0].toLowerCase()!==s[0]&&(n+="an "),n+=`${s[0]}`;break;case 2:n+=`one of ${s[0]} or ${s[1]}`;break;default:{const l=s.pop();n+=`one of ${s.join(", ")}, or ${l}`}}if(r==null)n+=`. Received ${r}`;else if(typeof r=="function"&&r.name)n+=`. Received function ${r.name}`;else if(typeof r=="object"){var a;if((a=r.constructor)!==null&&a!==void 0&&a.name)n+=`. Received an instance of ${r.constructor.name}`;else{const l=So(r,{depth:-1});n+=`. Received ${l}`}}else{let l=So(r,{colors:!1});l.length>25&&(l=`${l.slice(0,25)}...`),n+=`. Received type ${typeof r} (${l})`}return n},TypeError);Ue("ERR_INVALID_ARG_VALUE",(t,e,r="is invalid")=>{let n=So(e);return n.length>128&&(n=n.slice(0,128)+"..."),`The ${t.includes(".")?"property":"argument"} '${t}' ${r}. Received ${n}`},TypeError);Ue("ERR_INVALID_RETURN_VALUE",(t,e,r)=>{var n;const i=r!=null&&(n=r.constructor)!==null&&n!==void 0&&n.name?`instance of ${r.constructor.name}`:`type ${typeof r}`;return`Expected ${t} to be returned from the "${e}" function but got ${i}.`},TypeError);Ue("ERR_MISSING_ARGS",(...t)=>{Ar(t.length>0,"At least one arg needs to be specified");let e;const r=t.length;switch(t=(Array.isArray(t)?t:[t]).map(n=>`"${n}"`).join(" or "),r){case 1:e+=`The ${t[0]} argument`;break;case 2:e+=`The ${t[0]} and ${t[1]} arguments`;break;default:{const n=t.pop();e+=`The ${t.join(", ")}, and ${n} arguments`}break}return`${e} must be specified`},TypeError);Ue("ERR_OUT_OF_RANGE",(t,e,r)=>{Ar(e,'Missing "range" argument');let n;return Number.isInteger(r)&&Math.abs(r)>2**32?n=Yd(String(r)):typeof r=="bigint"?(n=String(r),(r>2n**32n||r<-(2n**32n))&&(n=Yd(n)),n+="n"):n=So(r),`The value of "${t}" is out of range. It must be ${e}. Received ${n}`},RangeError);Ue("ERR_MULTIPLE_CALLBACK","Callback called multiple times",Error);Ue("ERR_METHOD_NOT_IMPLEMENTED","The %s method is not implemented",Error);Ue("ERR_STREAM_ALREADY_FINISHED","Cannot call %s after a stream was finished",Error);Ue("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable",Error);Ue("ERR_STREAM_DESTROYED","Cannot call %s after a stream was destroyed",Error);Ue("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError);Ue("ERR_STREAM_PREMATURE_CLOSE","Premature close",Error);Ue("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF",Error);Ue("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event",Error);Ue("ERR_STREAM_WRITE_AFTER_END","write after end",Error);Ue("ERR_UNKNOWN_ENCODING","Unknown encoding: %s",TypeError);var tt={AbortError:xP,aggregateTwoErrors:Jd(EP),hideStackFrames:Jd,codes:ds};const{ArrayIsArray:kc,ArrayPrototypeIncludes:Zy,ArrayPrototypeJoin:em,ArrayPrototypeMap:TP,NumberIsInteger:Fc,NumberIsNaN:PP,NumberMAX_SAFE_INTEGER:CP,NumberMIN_SAFE_INTEGER:RP,NumberParseInt:OP,ObjectPrototypeHasOwnProperty:$P,RegExpPrototypeExec:tm,String:IP,StringPrototypeToUpperCase:NP,StringPrototypeTrim:LP}=Le,{hideStackFrames:lt,codes:{ERR_SOCKET_BAD_PORT:MP,ERR_INVALID_ARG_TYPE:Ge,ERR_INVALID_ARG_VALUE:bn,ERR_OUT_OF_RANGE:Pr,ERR_UNKNOWN_SIGNAL:Qd}}=tt,{normalizeEncoding:DP}=Ke,{isAsyncFunction:jP,isArrayBufferView:kP}=Ke.types,Kd={};function FP(t){return t===(t|0)}function BP(t){return t===t>>>0}const zP=/^[0-7]+$/,UP="must be a 32-bit unsigned integer or an octal string";function HP(t,e,r){if(typeof t>"u"&&(t=r),typeof t=="string"){if(tm(zP,t)===null)throw new bn(e,t,UP);t=OP(t,8)}return rm(t,e),t}const qP=lt((t,e,r=RP,n=CP)=>{if(typeof t!="number")throw new Ge(e,"number",t);if(!Fc(t))throw new Pr(e,"an integer",t);if(t<r||t>n)throw new Pr(e,`>= ${r} && <= ${n}`,t)}),WP=lt((t,e,r=-2147483648,n=2147483647)=>{if(typeof t!="number")throw new Ge(e,"number",t);if(!Fc(t))throw new Pr(e,"an integer",t);if(t<r||t>n)throw new Pr(e,`>= ${r} && <= ${n}`,t)}),rm=lt((t,e,r=!1)=>{if(typeof t!="number")throw new Ge(e,"number",t);if(!Fc(t))throw new Pr(e,"an integer",t);const n=r?1:0,i=4294967295;if(t<n||t>i)throw new Pr(e,`>= ${n} && <= ${i}`,t)});function Bc(t,e){if(typeof t!="string")throw new Ge(e,"string",t)}function VP(t,e,r=void 0,n){if(typeof t!="number")throw new Ge(e,"number",t);if(r!=null&&t<r||n!=null&&t>n||(r!=null||n!=null)&&PP(t))throw new Pr(e,`${r!=null?`>= ${r}`:""}${r!=null&&n!=null?" && ":""}${n!=null?`<= ${n}`:""}`,t)}const GP=lt((t,e,r)=>{if(!Zy(r,t)){const i="must be one of: "+em(TP(r,o=>typeof o=="string"?`'${o}'`:IP(o)),", ");throw new bn(e,t,i)}});function nm(t,e){if(typeof t!="boolean")throw new Ge(e,"boolean",t)}function oa(t,e,r){return t==null||!$P(t,e)?r:t[e]}const YP=lt((t,e,r=null)=>{const n=oa(r,"allowArray",!1),i=oa(r,"allowFunction",!1);if(!oa(r,"nullable",!1)&&t===null||!n&&kc(t)||typeof t!="object"&&(!i||typeof t!="function"))throw new Ge(e,"Object",t)}),JP=lt((t,e)=>{if(t!=null&&typeof t!="object"&&typeof t!="function")throw new Ge(e,"a dictionary",t)}),fs=lt((t,e,r=0)=>{if(!kc(t))throw new Ge(e,"Array",t);if(t.length<r){const n=`must be longer than ${r}`;throw new bn(e,t,n)}});function QP(t,e){fs(t,e);for(let r=0;r<t.length;r++)Bc(t[r],`${e}[${r}]`)}function KP(t,e){fs(t,e);for(let r=0;r<t.length;r++)nm(t[r],`${e}[${r}]`)}function XP(t,e){fs(t,e);for(let r=0;r<t.length;r++){const n=t[r],i=`${e}[${r}]`;if(n==null)throw new Ge(i,"AbortSignal",n);im(n,i)}}function ZP(t,e="signal"){if(Bc(t,e),Kd[t]===void 0)throw Kd[NP(t)]!==void 0?new Qd(t+" (signals must use all capital letters)"):new Qd(t)}const eC=lt((t,e="buffer")=>{if(!kP(t))throw new Ge(e,["Buffer","TypedArray","DataView"],t)});function tC(t,e){const r=DP(e),n=t.length;if(r==="hex"&&n%2!==0)throw new bn("encoding",e,`is invalid for data of length ${n}`)}function rC(t,e="Port",r=!0){if(typeof t!="number"&&typeof t!="string"||typeof t=="string"&&LP(t).length===0||+t!==+t>>>0||t>65535||t===0&&!r)throw new MP(e,t,r);return t|0}const im=lt((t,e)=>{if(t!==void 0&&(t===null||typeof t!="object"||!("aborted"in t)))throw new Ge(e,"AbortSignal",t)}),nC=lt((t,e)=>{if(typeof t!="function")throw new Ge(e,"Function",t)}),iC=lt((t,e)=>{if(typeof t!="function"||jP(t))throw new Ge(e,"Function",t)}),oC=lt((t,e)=>{if(t!==void 0)throw new Ge(e,"undefined",t)});function sC(t,e,r){if(!Zy(r,t))throw new Ge(e,`('${em(r,"|")}')`,t)}const aC=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function Xd(t,e){if(typeof t>"u"||!tm(aC,t))throw new bn(e,t,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}function lC(t){if(typeof t=="string")return Xd(t,"hints"),t;if(kc(t)){const e=t.length;let r="";if(e===0)return r;for(let n=0;n<e;n++){const i=t[n];Xd(i,"hints"),r+=i,n!==e-1&&(r+=", ")}return r}throw new bn("hints",t,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}var yi={isInt32:FP,isUint32:BP,parseFileMode:HP,validateArray:fs,validateStringArray:QP,validateBooleanArray:KP,validateAbortSignalArray:XP,validateBoolean:nm,validateBuffer:eC,validateDictionary:JP,validateEncoding:tC,validateFunction:nC,validateInt32:WP,validateInteger:qP,validateNumber:VP,validateObject:YP,validateOneOf:GP,validatePlainFunction:iC,validatePort:rC,validateSignalName:ZP,validateString:Bc,validateUint32:rm,validateUndefined:oC,validateUnion:sC,validateAbortSignal:im,validateLinkHeaderValue:lC},zc={exports:{}};const{SymbolAsyncIterator:Zd,SymbolIterator:ef,SymbolFor:Ir}=Le,om=Ir("nodejs.stream.destroyed"),sm=Ir("nodejs.stream.errored"),Pl=Ir("nodejs.stream.readable"),Cl=Ir("nodejs.stream.writable"),am=Ir("nodejs.stream.disturbed"),cC=Ir("nodejs.webstream.isClosedPromise"),uC=Ir("nodejs.webstream.controllerErrorFunction");function hs(t,e=!1){var r;return!!(t&&typeof t.pipe=="function"&&typeof t.on=="function"&&(!e||typeof t.pause=="function"&&typeof t.resume=="function")&&(!t._writableState||((r=t._readableState)===null||r===void 0?void 0:r.readable)!==!1)&&(!t._writableState||t._readableState))}function ps(t){var e;return!!(t&&typeof t.write=="function"&&typeof t.on=="function"&&(!t._readableState||((e=t._writableState)===null||e===void 0?void 0:e.writable)!==!1))}function dC(t){return!!(t&&typeof t.pipe=="function"&&t._readableState&&typeof t.on=="function"&&typeof t.write=="function")}function Tt(t){return t&&(t._readableState||t._writableState||typeof t.write=="function"&&typeof t.on=="function"||typeof t.pipe=="function"&&typeof t.on=="function")}function lm(t){return!!(t&&!Tt(t)&&typeof t.pipeThrough=="function"&&typeof t.getReader=="function"&&typeof t.cancel=="function")}function cm(t){return!!(t&&!Tt(t)&&typeof t.getWriter=="function"&&typeof t.abort=="function")}function um(t){return!!(t&&!Tt(t)&&typeof t.readable=="object"&&typeof t.writable=="object")}function fC(t){return lm(t)||cm(t)||um(t)}function hC(t,e){return t==null?!1:e===!0?typeof t[Zd]=="function":e===!1?typeof t[ef]=="function":typeof t[Zd]=="function"||typeof t[ef]=="function"}function ys(t){if(!Tt(t))return null;const e=t._writableState,r=t._readableState,n=e||r;return!!(t.destroyed||t[om]||n!=null&&n.destroyed)}function dm(t){if(!ps(t))return null;if(t.writableEnded===!0)return!0;const e=t._writableState;return e!=null&&e.errored?!1:typeof(e==null?void 0:e.ended)!="boolean"?null:e.ended}function pC(t,e){if(!ps(t))return null;if(t.writableFinished===!0)return!0;const r=t._writableState;return r!=null&&r.errored?!1:typeof(r==null?void 0:r.finished)!="boolean"?null:!!(r.finished||e===!1&&r.ended===!0&&r.length===0)}function yC(t){if(!hs(t))return null;if(t.readableEnded===!0)return!0;const e=t._readableState;return!e||e.errored?!1:typeof(e==null?void 0:e.ended)!="boolean"?null:e.ended}function fm(t,e){if(!hs(t))return null;const r=t._readableState;return r!=null&&r.errored?!1:typeof(r==null?void 0:r.endEmitted)!="boolean"?null:!!(r.endEmitted||e===!1&&r.ended===!0&&r.length===0)}function hm(t){return t&&t[Pl]!=null?t[Pl]:typeof(t==null?void 0:t.readable)!="boolean"?null:ys(t)?!1:hs(t)&&t.readable&&!fm(t)}function pm(t){return t&&t[Cl]!=null?t[Cl]:typeof(t==null?void 0:t.writable)!="boolean"?null:ys(t)?!1:ps(t)&&t.writable&&!dm(t)}function mC(t,e){return Tt(t)?ys(t)?!0:!((e==null?void 0:e.readable)!==!1&&hm(t)||(e==null?void 0:e.writable)!==!1&&pm(t)):null}function _C(t){var e,r;return Tt(t)?t.writableErrored?t.writableErrored:(e=(r=t._writableState)===null||r===void 0?void 0:r.errored)!==null&&e!==void 0?e:null:null}function gC(t){var e,r;return Tt(t)?t.readableErrored?t.readableErrored:(e=(r=t._readableState)===null||r===void 0?void 0:r.errored)!==null&&e!==void 0?e:null:null}function bC(t){if(!Tt(t))return null;if(typeof t.closed=="boolean")return t.closed;const e=t._writableState,r=t._readableState;return typeof(e==null?void 0:e.closed)=="boolean"||typeof(r==null?void 0:r.closed)=="boolean"?(e==null?void 0:e.closed)||(r==null?void 0:r.closed):typeof t._closed=="boolean"&&ym(t)?t._closed:null}function ym(t){return typeof t._closed=="boolean"&&typeof t._defaultKeepAlive=="boolean"&&typeof t._removedConnection=="boolean"&&typeof t._removedContLen=="boolean"}function mm(t){return typeof t._sent100=="boolean"&&ym(t)}function wC(t){var e;return typeof t._consuming=="boolean"&&typeof t._dumped=="boolean"&&((e=t.req)===null||e===void 0?void 0:e.upgradeOrConnect)===void 0}function vC(t){if(!Tt(t))return null;const e=t._writableState,r=t._readableState,n=e||r;return!n&&mm(t)||!!(n&&n.autoDestroy&&n.emitClose&&n.closed===!1)}function SC(t){var e;return!!(t&&((e=t[am])!==null&&e!==void 0?e:t.readableDidRead||t.readableAborted))}function AC(t){var e,r,n,i,o,s,a,l,c,f;return!!(t&&((e=(r=(n=(i=(o=(s=t[sm])!==null&&s!==void 0?s:t.readableErrored)!==null&&o!==void 0?o:t.writableErrored)!==null&&i!==void 0?i:(a=t._readableState)===null||a===void 0?void 0:a.errorEmitted)!==null&&n!==void 0?n:(l=t._writableState)===null||l===void 0?void 0:l.errorEmitted)!==null&&r!==void 0?r:(c=t._readableState)===null||c===void 0?void 0:c.errored)!==null&&e!==void 0?e:!((f=t._writableState)===null||f===void 0)&&f.errored))}var qt={isDestroyed:ys,kIsDestroyed:om,isDisturbed:SC,kIsDisturbed:am,isErrored:AC,kIsErrored:sm,isReadable:hm,kIsReadable:Pl,kIsClosedPromise:cC,kControllerErrorFunction:uC,kIsWritable:Cl,isClosed:bC,isDuplexNodeStream:dC,isFinished:mC,isIterable:hC,isReadableNodeStream:hs,isReadableStream:lm,isReadableEnded:yC,isReadableFinished:fm,isReadableErrored:gC,isNodeStream:Tt,isWebStream:fC,isWritable:pm,isWritableNodeStream:ps,isWritableStream:cm,isWritableEnded:dm,isWritableFinished:pC,isWritableErrored:_C,isServerRequest:wC,isServerResponse:mm,willEmitClose:vC,isTransformStream:um};const Gt=nr,{AbortError:_m,codes:EC}=tt,{ERR_INVALID_ARG_TYPE:xC,ERR_STREAM_PREMATURE_CLOSE:tf}=EC,{kEmptyObject:Rl,once:Ol}=Ke,{validateAbortSignal:TC,validateFunction:PC,validateObject:CC,validateBoolean:RC}=yi,{Promise:OC,PromisePrototypeThen:$C,SymbolDispose:gm}=Le,{isClosed:IC,isReadable:rf,isReadableNodeStream:sa,isReadableStream:NC,isReadableFinished:nf,isReadableErrored:of,isWritable:sf,isWritableNodeStream:af,isWritableStream:LC,isWritableFinished:lf,isWritableErrored:cf,isNodeStream:MC,willEmitClose:DC,kIsClosedPromise:jC}=qt;let tn;function kC(t){return t.setHeader&&typeof t.abort=="function"}const $l=()=>{};function bm(t,e,r){var n,i;if(arguments.length===2?(r=e,e=Rl):e==null?e=Rl:CC(e,"options"),PC(r,"callback"),TC(e.signal,"options.signal"),r=Ol(r),NC(t)||LC(t))return FC(t,e,r);if(!MC(t))throw new xC("stream",["ReadableStream","WritableStream","Stream"],t);const o=(n=e.readable)!==null&&n!==void 0?n:sa(t),s=(i=e.writable)!==null&&i!==void 0?i:af(t),a=t._writableState,l=t._readableState,c=()=>{t.writable||y()};let f=DC(t)&&sa(t)===o&&af(t)===s,p=lf(t,!1);const y=()=>{p=!0,t.destroyed&&(f=!1),!(f&&(!t.readable||o))&&(!o||b)&&r.call(t)};let b=nf(t,!1);const T=()=>{b=!0,t.destroyed&&(f=!1),!(f&&(!t.writable||s))&&(!s||p)&&r.call(t)},E=W=>{r.call(t,W)};let I=IC(t);const F=()=>{I=!0;const W=cf(t)||of(t);if(W&&typeof W!="boolean")return r.call(t,W);if(o&&!b&&sa(t,!0)&&!nf(t,!1))return r.call(t,new tf);if(s&&!p&&!lf(t,!1))return r.call(t,new tf);r.call(t)},$=()=>{I=!0;const W=cf(t)||of(t);if(W&&typeof W!="boolean")return r.call(t,W);r.call(t)},x=()=>{t.req.on("finish",y)};kC(t)?(t.on("complete",y),f||t.on("abort",F),t.req?x():t.on("request",x)):s&&!a&&(t.on("end",c),t.on("close",c)),!f&&typeof t.aborted=="boolean"&&t.on("aborted",F),t.on("end",T),t.on("finish",y),e.error!==!1&&t.on("error",E),t.on("close",F),I?Gt.nextTick(F):a!=null&&a.errorEmitted||l!=null&&l.errorEmitted?f||Gt.nextTick($):(!o&&(!f||rf(t))&&(p||sf(t)===!1)||!s&&(!f||sf(t))&&(b||rf(t)===!1)||l&&t.req&&t.aborted)&&Gt.nextTick($);const U=()=>{r=$l,t.removeListener("aborted",F),t.removeListener("complete",y),t.removeListener("abort",F),t.removeListener("request",x),t.req&&t.req.removeListener("finish",y),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",y),t.removeListener("end",T),t.removeListener("error",E),t.removeListener("close",F)};if(e.signal&&!I){const W=()=>{const he=r;U(),he.call(t,new _m(void 0,{cause:e.signal.reason}))};if(e.signal.aborted)Gt.nextTick(W);else{tn=tn||Ke.addAbortListener;const he=tn(e.signal,W),Ne=r;r=Ol((...se)=>{he[gm](),Ne.apply(t,se)})}}return U}function FC(t,e,r){let n=!1,i=$l;if(e.signal)if(i=()=>{n=!0,r.call(t,new _m(void 0,{cause:e.signal.reason}))},e.signal.aborted)Gt.nextTick(i);else{tn=tn||Ke.addAbortListener;const s=tn(e.signal,i),a=r;r=Ol((...l)=>{s[gm](),a.apply(t,l)})}const o=(...s)=>{n||Gt.nextTick(()=>r.apply(t,s))};return $C(t[jC].promise,o,o),$l}function BC(t,e){var r;let n=!1;return e===null&&(e=Rl),(r=e)!==null&&r!==void 0&&r.cleanup&&(RC(e.cleanup,"cleanup"),n=e.cleanup),new OC((i,o)=>{const s=bm(t,e,a=>{n&&s(),a?o(a):i()})})}zc.exports=bm;zc.exports.finished=BC;var or=zc.exports;const wt=nr,{aggregateTwoErrors:zC,codes:{ERR_MULTIPLE_CALLBACK:UC},AbortError:HC}=tt,{Symbol:wm}=Le,{kIsDestroyed:qC,isDestroyed:WC,isFinished:VC,isServerRequest:GC}=qt,vm=wm("kDestroy"),Il=wm("kConstruct");function Sm(t,e,r){t&&(t.stack,e&&!e.errored&&(e.errored=t),r&&!r.errored&&(r.errored=t))}function YC(t,e){const r=this._readableState,n=this._writableState,i=n||r;return n!=null&&n.destroyed||r!=null&&r.destroyed?(typeof e=="function"&&e(),this):(Sm(t,n,r),n&&(n.destroyed=!0),r&&(r.destroyed=!0),i.constructed?uf(this,t,e):this.once(vm,function(o){uf(this,zC(o,t),e)}),this)}function uf(t,e,r){let n=!1;function i(o){if(n)return;n=!0;const s=t._readableState,a=t._writableState;Sm(o,a,s),a&&(a.closed=!0),s&&(s.closed=!0),typeof r=="function"&&r(o),o?wt.nextTick(JC,t,o):wt.nextTick(Am,t)}try{t._destroy(e||null,i)}catch(o){i(o)}}function JC(t,e){Nl(t,e),Am(t)}function Am(t){const e=t._readableState,r=t._writableState;r&&(r.closeEmitted=!0),e&&(e.closeEmitted=!0),(r!=null&&r.emitClose||e!=null&&e.emitClose)&&t.emit("close")}function Nl(t,e){const r=t._readableState,n=t._writableState;n!=null&&n.errorEmitted||r!=null&&r.errorEmitted||(n&&(n.errorEmitted=!0),r&&(r.errorEmitted=!0),t.emit("error",e))}function QC(){const t=this._readableState,e=this._writableState;t&&(t.constructed=!0,t.closed=!1,t.closeEmitted=!1,t.destroyed=!1,t.errored=null,t.errorEmitted=!1,t.reading=!1,t.ended=t.readable===!1,t.endEmitted=t.readable===!1),e&&(e.constructed=!0,e.destroyed=!1,e.closed=!1,e.closeEmitted=!1,e.errored=null,e.errorEmitted=!1,e.finalCalled=!1,e.prefinished=!1,e.ended=e.writable===!1,e.ending=e.writable===!1,e.finished=e.writable===!1)}function Ll(t,e,r){const n=t._readableState,i=t._writableState;if(i!=null&&i.destroyed||n!=null&&n.destroyed)return this;n!=null&&n.autoDestroy||i!=null&&i.autoDestroy?t.destroy(e):e&&(e.stack,i&&!i.errored&&(i.errored=e),n&&!n.errored&&(n.errored=e),r?wt.nextTick(Nl,t,e):Nl(t,e))}function KC(t,e){if(typeof t._construct!="function")return;const r=t._readableState,n=t._writableState;r&&(r.constructed=!1),n&&(n.constructed=!1),t.once(Il,e),!(t.listenerCount(Il)>1)&&wt.nextTick(XC,t)}function XC(t){let e=!1;function r(n){if(e){Ll(t,n??new UC);return}e=!0;const i=t._readableState,o=t._writableState,s=o||i;i&&(i.constructed=!0),o&&(o.constructed=!0),s.destroyed?t.emit(vm,n):n?Ll(t,n,!0):wt.nextTick(ZC,t)}try{t._construct(n=>{wt.nextTick(r,n)})}catch(n){wt.nextTick(r,n)}}function ZC(t){t.emit(Il)}function df(t){return(t==null?void 0:t.setHeader)&&typeof t.abort=="function"}function Em(t){t.emit("close")}function eR(t,e){t.emit("error",e),wt.nextTick(Em,t)}function tR(t,e){!t||WC(t)||(!e&&!VC(t)&&(e=new HC),GC(t)?(t.socket=null,t.destroy(e)):df(t)?t.abort():df(t.req)?t.req.abort():typeof t.destroy=="function"?t.destroy(e):typeof t.close=="function"?t.close():e?wt.nextTick(eR,t,e):wt.nextTick(Em,t),t.destroyed||(t[qC]=!0))}var wn={construct:KC,destroyer:tR,destroy:YC,undestroy:QC,errorOrDestroy:Ll};const{ArrayIsArray:rR,ObjectSetPrototypeOf:xm}=Le,{EventEmitter:ms}=ui;function _s(t){ms.call(this,t)}xm(_s.prototype,ms.prototype);xm(_s,ms);_s.prototype.pipe=function(t,e){const r=this;function n(f){t.writable&&t.write(f)===!1&&r.pause&&r.pause()}r.on("data",n);function i(){r.readable&&r.resume&&r.resume()}t.on("drain",i),!t._isStdio&&(!e||e.end!==!1)&&(r.on("end",s),r.on("close",a));let o=!1;function s(){o||(o=!0,t.end())}function a(){o||(o=!0,typeof t.destroy=="function"&&t.destroy())}function l(f){c(),ms.listenerCount(this,"error")===0&&this.emit("error",f)}Ml(r,"error",l),Ml(t,"error",l);function c(){r.removeListener("data",n),t.removeListener("drain",i),r.removeListener("end",s),r.removeListener("close",a),r.removeListener("error",l),t.removeListener("error",l),r.removeListener("end",c),r.removeListener("close",c),t.removeListener("close",c)}return r.on("end",c),r.on("close",c),t.on("close",c),t.emit("pipe",r),t};function Ml(t,e,r){if(typeof t.prependListener=="function")return t.prependListener(e,r);!t._events||!t._events[e]?t.on(e,r):rR(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]}var Uc={Stream:_s,prependListener:Ml},Tm={exports:{}};(function(t){const{SymbolDispose:e}=Le,{AbortError:r,codes:n}=tt,{isNodeStream:i,isWebStream:o,kControllerErrorFunction:s}=qt,a=or,{ERR_INVALID_ARG_TYPE:l}=n;let c;const f=(p,y)=>{if(typeof p!="object"||!("aborted"in p))throw new l(y,"AbortSignal",p)};t.exports.addAbortSignal=function(y,b){if(f(y,"signal"),!i(b)&&!o(b))throw new l("stream",["ReadableStream","WritableStream","Stream"],b);return t.exports.addAbortSignalNoValidate(y,b)},t.exports.addAbortSignalNoValidate=function(p,y){if(typeof p!="object"||!("aborted"in p))return y;const b=i(y)?()=>{y.destroy(new r(void 0,{cause:p.reason}))}:()=>{y[s](new r(void 0,{cause:p.reason}))};if(p.aborted)b();else{c=c||Ke.addAbortListener;const T=c(p,b);a(y,T[e])}return y}})(Tm);var gs=Tm.exports;const{StringPrototypeSlice:ff,SymbolIterator:nR,TypedArrayPrototypeSet:Pi,Uint8Array:iR}=Le,{Buffer:aa}=xt,{inspect:oR}=Ke;var sR=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){const r={data:e,next:null};this.length>0?this.tail.next=r:this.head=r,this.tail=r,++this.length}unshift(e){const r={data:e,next:this.head};this.length===0&&(this.tail=r),this.head=r,++this.length}shift(){if(this.length===0)return;const e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return"";let r=this.head,n=""+r.data;for(;(r=r.next)!==null;)n+=e+r.data;return n}concat(e){if(this.length===0)return aa.alloc(0);const r=aa.allocUnsafe(e>>>0);let n=this.head,i=0;for(;n;)Pi(r,n.data,i),i+=n.data.length,n=n.next;return r}consume(e,r){const n=this.head.data;if(e<n.length){const i=n.slice(0,e);return this.head.data=n.slice(e),i}return e===n.length?this.shift():r?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[nR](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let r="",n=this.head,i=0;do{const o=n.data;if(e>o.length)r+=o,e-=o.length;else{e===o.length?(r+=o,++i,n.next?this.head=n.next:this.head=this.tail=null):(r+=ff(o,0,e),this.head=n,n.data=ff(o,e));break}++i}while((n=n.next)!==null);return this.length-=i,r}_getBuffer(e){const r=aa.allocUnsafe(e),n=e;let i=this.head,o=0;do{const s=i.data;if(e>s.length)Pi(r,s,n-e),e-=s.length;else{e===s.length?(Pi(r,s,n-e),++o,i.next?this.head=i.next:this.head=this.tail=null):(Pi(r,new iR(s.buffer,s.byteOffset,e),n-e),this.head=i,i.data=s.slice(e));break}++o}while((i=i.next)!==null);return this.length-=o,r}[Symbol.for("nodejs.util.inspect.custom")](e,r){return oR(this,{...r,depth:0,customInspect:!1})}};const{MathFloor:aR,NumberIsInteger:lR}=Le,{validateInteger:cR}=yi,{ERR_INVALID_ARG_VALUE:uR}=tt.codes;let Pm=16*1024,Cm=16;function dR(t,e,r){return t.highWaterMark!=null?t.highWaterMark:e?t[r]:null}function Rm(t){return t?Cm:Pm}function fR(t,e){cR(e,"value",0),t?Cm=e:Pm=e}function hR(t,e,r,n){const i=dR(e,n,r);if(i!=null){if(!lR(i)||i<0){const o=n?`options.${r}`:"options.highWaterMark";throw new uR(o,i)}return aR(i)}return Rm(t.objectMode)}var bs={getHighWaterMark:hR,getDefaultHighWaterMark:Rm,setDefaultHighWaterMark:fR},Om={},Dl={exports:{}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */(function(t,e){var r=xt,n=r.Buffer;function i(s,a){for(var l in s)a[l]=s[l]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?t.exports=r:(i(r,e),e.Buffer=o);function o(s,a,l){return n(s,a,l)}o.prototype=Object.create(n.prototype),i(n,o),o.from=function(s,a,l){if(typeof s=="number")throw new TypeError("Argument must not be a number");return n(s,a,l)},o.alloc=function(s,a,l){if(typeof s!="number")throw new TypeError("Argument must be a number");var c=n(s);return a!==void 0?typeof l=="string"?c.fill(a,l):c.fill(a):c.fill(0),c},o.allocUnsafe=function(s){if(typeof s!="number")throw new TypeError("Argument must be a number");return n(s)},o.allocUnsafeSlow=function(s){if(typeof s!="number")throw new TypeError("Argument must be a number");return r.SlowBuffer(s)}})(Dl,Dl.exports);var pR=Dl.exports,Hc=pR.Buffer,hf=Hc.isEncoding||function(t){switch(t=""+t,t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function yR(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}function mR(t){var e=yR(t);if(typeof e!="string"&&(Hc.isEncoding===hf||!hf(t)))throw new Error("Unknown encoding: "+t);return e||t}Om.StringDecoder=mi;function mi(t){this.encoding=mR(t);var e;switch(this.encoding){case"utf16le":this.text=SR,this.end=AR,e=4;break;case"utf8":this.fillLast=bR,e=4;break;case"base64":this.text=ER,this.end=xR,e=3;break;default:this.write=TR,this.end=PR;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=Hc.allocUnsafe(e)}mi.prototype.write=function(t){if(t.length===0)return"";var e,r;if(this.lastNeed){if(e=this.fillLast(t),e===void 0)return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""};mi.prototype.end=vR;mi.prototype.text=wR;mi.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length};function la(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function _R(t,e,r){var n=e.length-1;if(n<r)return 0;var i=la(e[n]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--n<r||i===-2?0:(i=la(e[n]),i>=0?(i>0&&(t.lastNeed=i-2),i):--n<r||i===-2?0:(i=la(e[n]),i>=0?(i>0&&(i===2?i=0:t.lastNeed=i-3),i):0))}function gR(t,e,r){if((e[0]&192)!==128)return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if((e[1]&192)!==128)return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&(e[2]&192)!==128)return t.lastNeed=2,"�"}}function bR(t){var e=this.lastTotal-this.lastNeed,r=gR(this,t);if(r!==void 0)return r;if(this.lastNeed<=t.length)return t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length}function wR(t,e){var r=_R(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)}function vR(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e}function SR(t,e){if((t.length-e)%2===0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function AR(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function ER(t,e){var r=(t.length-e)%3;return r===0?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,r===1?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function xR(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function TR(t){return t.toString(this.encoding)}function PR(t){return t&&t.length?this.write(t):""}const pf=nr,{PromisePrototypeThen:CR,SymbolAsyncIterator:yf,SymbolIterator:mf}=Le,{Buffer:RR}=xt,{ERR_INVALID_ARG_TYPE:OR,ERR_STREAM_NULL_VALUES:$R}=tt.codes;function IR(t,e,r){let n;if(typeof e=="string"||e instanceof RR)return new t({objectMode:!0,...r,read(){this.push(e),this.push(null)}});let i;if(e&&e[yf])i=!0,n=e[yf]();else if(e&&e[mf])i=!1,n=e[mf]();else throw new OR("iterable",["Iterable"],e);const o=new t({objectMode:!0,highWaterMark:1,...r});let s=!1;o._read=function(){s||(s=!0,l())},o._destroy=function(c,f){CR(a(c),()=>pf.nextTick(f,c),p=>pf.nextTick(f,p||c))};async function a(c){const f=c!=null,p=typeof n.throw=="function";if(f&&p){const{value:y,done:b}=await n.throw(c);if(await y,b)return}if(typeof n.return=="function"){const{value:y}=await n.return();await y}}async function l(){for(;;){try{const{value:c,done:f}=i?await n.next():n.next();if(f)o.push(null);else{const p=c&&typeof c.then=="function"?await c:c;if(p===null)throw s=!1,new $R;if(o.push(p))continue;s=!1}}catch(c){o.destroy(c)}break}}return o}var $m=IR,ca,_f;function ws(){if(_f)return ca;_f=1;const t=nr,{ArrayPrototypeIndexOf:e,NumberIsInteger:r,NumberIsNaN:n,NumberParseInt:i,ObjectDefineProperties:o,ObjectKeys:s,ObjectSetPrototypeOf:a,Promise:l,SafeSet:c,SymbolAsyncDispose:f,SymbolAsyncIterator:p,Symbol:y}=Le;ca=Y,Y.ReadableState=Ye;const{EventEmitter:b}=ui,{Stream:T,prependListener:E}=Uc,{Buffer:I}=xt,{addAbortSignal:F}=gs,$=or;let x=Ke.debuglog("stream",m=>{x=m});const U=sR,W=wn,{getHighWaterMark:he,getDefaultHighWaterMark:Ne}=bs,{aggregateTwoErrors:se,codes:{ERR_INVALID_ARG_TYPE:Q,ERR_METHOD_NOT_IMPLEMENTED:Ee,ERR_OUT_OF_RANGE:Pe,ERR_STREAM_PUSH_AFTER_EOF:ee,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:j},AbortError:ue}=tt,{validateObject:re}=yi,ne=y("kPaused"),{StringDecoder:xe}=Om,be=$m;a(Y.prototype,T.prototype),a(Y,T);const we=()=>{},{errorOrDestroy:de}=W,J=1,me=2,v=4,R=8,D=16,K=32,le=64,oe=128,X=256,ce=512,pe=1024,Ce=2048,S=4096,A=8192,M=16384,H=32768,q=65536,ve=1<<17,O=1<<18;function _e(m){return{enumerable:!1,get(){return(this.state&m)!==0},set(g){g?this.state|=m:this.state&=~m}}}o(Ye.prototype,{objectMode:_e(J),ended:_e(me),endEmitted:_e(v),reading:_e(R),constructed:_e(D),sync:_e(K),needReadable:_e(le),emittedReadable:_e(oe),readableListening:_e(X),resumeScheduled:_e(ce),errorEmitted:_e(pe),emitClose:_e(Ce),autoDestroy:_e(S),destroyed:_e(A),closed:_e(M),closeEmitted:_e(H),multiAwaitDrain:_e(q),readingMore:_e(ve),dataEmitted:_e(O)});function Ye(m,g,B){typeof B!="boolean"&&(B=g instanceof kt()),this.state=Ce|S|D|K,m&&m.objectMode&&(this.state|=J),B&&m&&m.readableObjectMode&&(this.state|=J),this.highWaterMark=m?he(this,m,"readableHighWaterMark",B):Ne(!1),this.buffer=new U,this.length=0,this.pipes=[],this.flowing=null,this[ne]=null,m&&m.emitClose===!1&&(this.state&=~Ce),m&&m.autoDestroy===!1&&(this.state&=~S),this.errored=null,this.defaultEncoding=m&&m.defaultEncoding||"utf8",this.awaitDrainWriters=null,this.decoder=null,this.encoding=null,m&&m.encoding&&(this.decoder=new xe(m.encoding),this.encoding=m.encoding)}function Y(m){if(!(this instanceof Y))return new Y(m);const g=this instanceof kt();this._readableState=new Ye(m,this,g),m&&(typeof m.read=="function"&&(this._read=m.read),typeof m.destroy=="function"&&(this._destroy=m.destroy),typeof m.construct=="function"&&(this._construct=m.construct),m.signal&&!g&&F(m.signal,this)),T.call(this,m),W.construct(this,()=>{this._readableState.needReadable&&w(this,this._readableState)})}Y.prototype.destroy=W.destroy,Y.prototype._undestroy=W.undestroy,Y.prototype._destroy=function(m,g){g(m)},Y.prototype[b.captureRejectionSymbol]=function(m){this.destroy(m)},Y.prototype[f]=function(){let m;return this.destroyed||(m=this.readableEnded?null:new ue,this.destroy(m)),new l((g,B)=>$(this,z=>z&&z!==m?B(z):g(null)))},Y.prototype.push=function(m,g){return nt(this,m,g,!1)},Y.prototype.unshift=function(m,g){return nt(this,m,g,!0)};function nt(m,g,B,z){x("readableAddChunk",g);const V=m._readableState;let He;if(V.state&J||(typeof g=="string"?(B=B||V.defaultEncoding,V.encoding!==B&&(z&&V.encoding?g=I.from(g,B).toString(V.encoding):(g=I.from(g,B),B=""))):g instanceof I?B="":T._isUint8Array(g)?(g=T._uint8ArrayToBuffer(g),B=""):g!=null&&(He=new Q("chunk",["string","Buffer","Uint8Array"],g))),He)de(m,He);else if(g===null)V.state&=~R,u(m,V);else if(V.state&J||g&&g.length>0)if(z)if(V.state&v)de(m,new j);else{if(V.destroyed||V.errored)return!1;vn(m,V,g,!0)}else if(V.ended)de(m,new ee);else{if(V.destroyed||V.errored)return!1;V.state&=~R,V.decoder&&!B?(g=V.decoder.write(g),V.objectMode||g.length!==0?vn(m,V,g,!1):w(m,V)):vn(m,V,g,!1)}else z||(V.state&=~R,w(m,V));return!V.ended&&(V.length<V.highWaterMark||V.length===0)}function vn(m,g,B,z){g.flowing&&g.length===0&&!g.sync&&m.listenerCount("data")>0?(g.state&q?g.awaitDrainWriters.clear():g.awaitDrainWriters=null,g.dataEmitted=!0,m.emit("data",B)):(g.length+=g.objectMode?1:B.length,z?g.buffer.unshift(B):g.buffer.push(B),g.state&le&&d(m)),w(m,g)}Y.prototype.isPaused=function(){const m=this._readableState;return m[ne]===!0||m.flowing===!1},Y.prototype.setEncoding=function(m){const g=new xe(m);this._readableState.decoder=g,this._readableState.encoding=this._readableState.decoder.encoding;const B=this._readableState.buffer;let z="";for(const V of B)z+=g.write(V);return B.clear(),z!==""&&B.push(z),this._readableState.length=z.length,this};const ht=1073741824;function Ss(m){if(m>ht)throw new Pe("size","<= 1GiB",m);return m--,m|=m>>>1,m|=m>>>2,m|=m>>>4,m|=m>>>8,m|=m>>>16,m++,m}function h(m,g){return m<=0||g.length===0&&g.ended?0:g.state&J?1:n(m)?g.flowing&&g.length?g.buffer.first().length:g.length:m<=g.length?m:g.ended?g.length:0}Y.prototype.read=function(m){x("read",m),m===void 0?m=NaN:r(m)||(m=i(m,10));const g=this._readableState,B=m;if(m>g.highWaterMark&&(g.highWaterMark=Ss(m)),m!==0&&(g.state&=~oe),m===0&&g.needReadable&&((g.highWaterMark!==0?g.length>=g.highWaterMark:g.length>0)||g.ended))return x("read: emitReadable",g.length,g.ended),g.length===0&&g.ended?As(this):d(this),null;if(m=h(m,g),m===0&&g.ended)return g.length===0&&As(this),null;let z=(g.state&le)!==0;if(x("need readable",z),(g.length===0||g.length-m<g.highWaterMark)&&(z=!0,x("length less than watermark",z)),g.ended||g.reading||g.destroyed||g.errored||!g.constructed)z=!1,x("reading, ended or constructing",z);else if(z){x("do read"),g.state|=R|K,g.length===0&&(g.state|=le);try{this._read(g.highWaterMark)}catch(He){de(this,He)}g.state&=~K,g.reading||(m=h(B,g))}let V;return m>0?V=Kc(m,g):V=null,V===null?(g.needReadable=g.length<=g.highWaterMark,m=0):(g.length-=m,g.multiAwaitDrain?g.awaitDrainWriters.clear():g.awaitDrainWriters=null),g.length===0&&(g.ended||(g.needReadable=!0),B!==m&&g.ended&&As(this)),V!==null&&!g.errorEmitted&&!g.closeEmitted&&(g.dataEmitted=!0,this.emit("data",V)),V};function u(m,g){if(x("onEofChunk"),!g.ended){if(g.decoder){const B=g.decoder.end();B&&B.length&&(g.buffer.push(B),g.length+=g.objectMode?1:B.length)}g.ended=!0,g.sync?d(m):(g.needReadable=!1,g.emittedReadable=!0,_(m))}}function d(m){const g=m._readableState;x("emitReadable",g.needReadable,g.emittedReadable),g.needReadable=!1,g.emittedReadable||(x("emitReadable",g.flowing),g.emittedReadable=!0,t.nextTick(_,m))}function _(m){const g=m._readableState;x("emitReadable_",g.destroyed,g.length,g.ended),!g.destroyed&&!g.errored&&(g.length||g.ended)&&(m.emit("readable"),g.emittedReadable=!1),g.needReadable=!g.flowing&&!g.ended&&g.length<=g.highWaterMark,ge(m)}function w(m,g){!g.readingMore&&g.constructed&&(g.readingMore=!0,t.nextTick(P,m,g))}function P(m,g){for(;!g.reading&&!g.ended&&(g.length<g.highWaterMark||g.flowing&&g.length===0);){const B=g.length;if(x("maybeReadMore read 0"),m.read(0),B===g.length)break}g.readingMore=!1}Y.prototype._read=function(m){throw new Ee("_read()")},Y.prototype.pipe=function(m,g){const B=this,z=this._readableState;z.pipes.length===1&&(z.multiAwaitDrain||(z.multiAwaitDrain=!0,z.awaitDrainWriters=new c(z.awaitDrainWriters?[z.awaitDrainWriters]:[]))),z.pipes.push(m),x("pipe count=%d opts=%j",z.pipes.length,g);const He=(!g||g.end!==!1)&&m!==t.stdout&&m!==t.stderr?Zc:Sn;z.endEmitted?t.nextTick(He):B.once("end",He),m.on("unpipe",it);function it(ar,Pt){x("onunpipe"),ar===B&&Pt&&Pt.hasUnpiped===!1&&(Pt.hasUnpiped=!0,Zm())}function Zc(){x("onend"),m.end()}let sr,eu=!1;function Zm(){x("cleanup"),m.removeListener("close",Ts),m.removeListener("finish",Ps),sr&&m.removeListener("drain",sr),m.removeListener("error",xs),m.removeListener("unpipe",it),B.removeListener("end",Zc),B.removeListener("end",Sn),B.removeListener("data",ru),eu=!0,sr&&z.awaitDrainWriters&&(!m._writableState||m._writableState.needDrain)&&sr()}function tu(){eu||(z.pipes.length===1&&z.pipes[0]===m?(x("false write response, pause",0),z.awaitDrainWriters=m,z.multiAwaitDrain=!1):z.pipes.length>1&&z.pipes.includes(m)&&(x("false write response, pause",z.awaitDrainWriters.size),z.awaitDrainWriters.add(m)),B.pause()),sr||(sr=N(B,m),m.on("drain",sr))}B.on("data",ru);function ru(ar){x("ondata");const Pt=m.write(ar);x("dest.write",Pt),Pt===!1&&tu()}function xs(ar){if(x("onerror",ar),Sn(),m.removeListener("error",xs),m.listenerCount("error")===0){const Pt=m._writableState||m._readableState;Pt&&!Pt.errorEmitted?de(m,ar):m.emit("error",ar)}}E(m,"error",xs);function Ts(){m.removeListener("finish",Ps),Sn()}m.once("close",Ts);function Ps(){x("onfinish"),m.removeListener("close",Ts),Sn()}m.once("finish",Ps);function Sn(){x("unpipe"),B.unpipe(m)}return m.emit("pipe",B),m.writableNeedDrain===!0?tu():z.flowing||(x("pipe resume"),B.resume()),m};function N(m,g){return function(){const z=m._readableState;z.awaitDrainWriters===g?(x("pipeOnDrain",1),z.awaitDrainWriters=null):z.multiAwaitDrain&&(x("pipeOnDrain",z.awaitDrainWriters.size),z.awaitDrainWriters.delete(g)),(!z.awaitDrainWriters||z.awaitDrainWriters.size===0)&&m.listenerCount("data")&&m.resume()}}Y.prototype.unpipe=function(m){const g=this._readableState,B={hasUnpiped:!1};if(g.pipes.length===0)return this;if(!m){const V=g.pipes;g.pipes=[],this.pause();for(let He=0;He<V.length;He++)V[He].emit("unpipe",this,{hasUnpiped:!1});return this}const z=e(g.pipes,m);return z===-1?this:(g.pipes.splice(z,1),g.pipes.length===0&&this.pause(),m.emit("unpipe",this,B),this)},Y.prototype.on=function(m,g){const B=T.prototype.on.call(this,m,g),z=this._readableState;return m==="data"?(z.readableListening=this.listenerCount("readable")>0,z.flowing!==!1&&this.resume()):m==="readable"&&!z.endEmitted&&!z.readableListening&&(z.readableListening=z.needReadable=!0,z.flowing=!1,z.emittedReadable=!1,x("on readable",z.length,z.reading),z.length?d(this):z.reading||t.nextTick(Oe,this)),B},Y.prototype.addListener=Y.prototype.on,Y.prototype.removeListener=function(m,g){const B=T.prototype.removeListener.call(this,m,g);return m==="readable"&&t.nextTick(ae,this),B},Y.prototype.off=Y.prototype.removeListener,Y.prototype.removeAllListeners=function(m){const g=T.prototype.removeAllListeners.apply(this,arguments);return(m==="readable"||m===void 0)&&t.nextTick(ae,this),g};function ae(m){const g=m._readableState;g.readableListening=m.listenerCount("readable")>0,g.resumeScheduled&&g[ne]===!1?g.flowing=!0:m.listenerCount("data")>0?m.resume():g.readableListening||(g.flowing=null)}function Oe(m){x("readable nexttick read 0"),m.read(0)}Y.prototype.resume=function(){const m=this._readableState;return m.flowing||(x("resume"),m.flowing=!m.readableListening,Te(this,m)),m[ne]=!1,this};function Te(m,g){g.resumeScheduled||(g.resumeScheduled=!0,t.nextTick($e,m,g))}function $e(m,g){x("resume",g.reading),g.reading||m.read(0),g.resumeScheduled=!1,m.emit("resume"),ge(m),g.flowing&&!g.reading&&m.read(0)}Y.prototype.pause=function(){return x("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(x("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState[ne]=!0,this};function ge(m){const g=m._readableState;for(x("flow",g.flowing);g.flowing&&m.read()!==null;);}Y.prototype.wrap=function(m){let g=!1;m.on("data",z=>{!this.push(z)&&m.pause&&(g=!0,m.pause())}),m.on("end",()=>{this.push(null)}),m.on("error",z=>{de(this,z)}),m.on("close",()=>{this.destroy()}),m.on("destroy",()=>{this.destroy()}),this._read=()=>{g&&m.resume&&(g=!1,m.resume())};const B=s(m);for(let z=1;z<B.length;z++){const V=B[z];this[V]===void 0&&typeof m[V]=="function"&&(this[V]=m[V].bind(m))}return this},Y.prototype[p]=function(){return Qc(this)},Y.prototype.iterator=function(m){return m!==void 0&&re(m,"options"),Qc(this,m)};function Qc(m,g){typeof m.read!="function"&&(m=Y.wrap(m,{objectMode:!0}));const B=Qm(m,g);return B.stream=m,B}async function*Qm(m,g){let B=we;function z(it){this===m?(B(),B=we):B=it}m.on("readable",z);let V;const He=$(m,{writable:!1},it=>{V=it?se(V,it):null,B(),B=we});try{for(;;){const it=m.destroyed?null:m.read();if(it!==null)yield it;else{if(V)throw V;if(V===null)return;await new l(z)}}}catch(it){throw V=se(V,it),V}finally{(V||(g==null?void 0:g.destroyOnReturn)!==!1)&&(V===void 0||m._readableState.autoDestroy)?W.destroyer(m,null):(m.off("readable",z),He())}}o(Y.prototype,{readable:{__proto__:null,get(){const m=this._readableState;return!!m&&m.readable!==!1&&!m.destroyed&&!m.errorEmitted&&!m.endEmitted},set(m){this._readableState&&(this._readableState.readable=!!m)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(m){this._readableState&&(this._readableState.flowing=m)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(m){this._readableState&&(this._readableState.destroyed=m)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}}),o(Ye.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[ne]!==!1},set(m){this[ne]=!!m}}}),Y._fromList=Kc;function Kc(m,g){if(g.length===0)return null;let B;return g.objectMode?B=g.buffer.shift():!m||m>=g.length?(g.decoder?B=g.buffer.join(""):g.buffer.length===1?B=g.buffer.first():B=g.buffer.concat(g.length),g.buffer.clear()):B=g.buffer.consume(m,g.decoder),B}function As(m){const g=m._readableState;x("endReadable",g.endEmitted),g.endEmitted||(g.ended=!0,t.nextTick(Km,g,m))}function Km(m,g){if(x("endReadableNT",m.endEmitted,m.length),!m.errored&&!m.closeEmitted&&!m.endEmitted&&m.length===0){if(m.endEmitted=!0,g.emit("end"),g.writable&&g.allowHalfOpen===!1)t.nextTick(Xm,g);else if(m.autoDestroy){const B=g._writableState;(!B||B.autoDestroy&&(B.finished||B.writable===!1))&&g.destroy()}}}function Xm(m){m.writable&&!m.writableEnded&&!m.destroyed&&m.end()}Y.from=function(m,g){return be(Y,m,g)};let Es;function Xc(){return Es===void 0&&(Es={}),Es}return Y.fromWeb=function(m,g){return Xc().newStreamReadableFromReadableStream(m,g)},Y.toWeb=function(m,g){return Xc().newReadableStreamFromStreamReadable(m,g)},Y.wrap=function(m,g){var B,z;return new Y({objectMode:(B=(z=m.readableObjectMode)!==null&&z!==void 0?z:m.objectMode)!==null&&B!==void 0?B:!0,...g,destroy(V,He){W.destroyer(m,V),He(V)}}).wrap(m)},ca}var ua,gf;function qc(){if(gf)return ua;gf=1;const t=nr,{ArrayPrototypeSlice:e,Error:r,FunctionPrototypeSymbolHasInstance:n,ObjectDefineProperty:i,ObjectDefineProperties:o,ObjectSetPrototypeOf:s,StringPrototypeToLowerCase:a,Symbol:l,SymbolHasInstance:c}=Le;ua=re,re.WritableState=j;const{EventEmitter:f}=ui,p=Uc.Stream,{Buffer:y}=xt,b=wn,{addAbortSignal:T}=gs,{getHighWaterMark:E,getDefaultHighWaterMark:I}=bs,{ERR_INVALID_ARG_TYPE:F,ERR_METHOD_NOT_IMPLEMENTED:$,ERR_MULTIPLE_CALLBACK:x,ERR_STREAM_CANNOT_PIPE:U,ERR_STREAM_DESTROYED:W,ERR_STREAM_ALREADY_FINISHED:he,ERR_STREAM_NULL_VALUES:Ne,ERR_STREAM_WRITE_AFTER_END:se,ERR_UNKNOWN_ENCODING:Q}=tt.codes,{errorOrDestroy:Ee}=b;s(re.prototype,p.prototype),s(re,p);function Pe(){}const ee=l("kOnFinished");function j(S,A,M){typeof M!="boolean"&&(M=A instanceof kt()),this.objectMode=!!(S&&S.objectMode),M&&(this.objectMode=this.objectMode||!!(S&&S.writableObjectMode)),this.highWaterMark=S?E(this,S,"writableHighWaterMark",M):I(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;const H=!!(S&&S.decodeStrings===!1);this.decodeStrings=!H,this.defaultEncoding=S&&S.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=de.bind(void 0,A),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,ue(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!S||S.emitClose!==!1,this.autoDestroy=!S||S.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[ee]=[]}function ue(S){S.buffered=[],S.bufferedIndex=0,S.allBuffers=!0,S.allNoop=!0}j.prototype.getBuffer=function(){return e(this.buffered,this.bufferedIndex)},i(j.prototype,"bufferedRequestCount",{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function re(S){const A=this instanceof kt();if(!A&&!n(re,this))return new re(S);this._writableState=new j(S,this,A),S&&(typeof S.write=="function"&&(this._write=S.write),typeof S.writev=="function"&&(this._writev=S.writev),typeof S.destroy=="function"&&(this._destroy=S.destroy),typeof S.final=="function"&&(this._final=S.final),typeof S.construct=="function"&&(this._construct=S.construct),S.signal&&T(S.signal,this)),p.call(this,S),b.construct(this,()=>{const M=this._writableState;M.writing||R(this,M),oe(this,M)})}i(re,c,{__proto__:null,value:function(S){return n(this,S)?!0:this!==re?!1:S&&S._writableState instanceof j}}),re.prototype.pipe=function(){Ee(this,new U)};function ne(S,A,M,H){const q=S._writableState;if(typeof M=="function")H=M,M=q.defaultEncoding;else{if(!M)M=q.defaultEncoding;else if(M!=="buffer"&&!y.isEncoding(M))throw new Q(M);typeof H!="function"&&(H=Pe)}if(A===null)throw new Ne;if(!q.objectMode)if(typeof A=="string")q.decodeStrings!==!1&&(A=y.from(A,M),M="buffer");else if(A instanceof y)M="buffer";else if(p._isUint8Array(A))A=p._uint8ArrayToBuffer(A),M="buffer";else throw new F("chunk",["string","Buffer","Uint8Array"],A);let ve;return q.ending?ve=new se:q.destroyed&&(ve=new W("write")),ve?(t.nextTick(H,ve),Ee(S,ve,!0),ve):(q.pendingcb++,xe(S,q,A,M,H))}re.prototype.write=function(S,A,M){return ne(this,S,A,M)===!0},re.prototype.cork=function(){this._writableState.corked++},re.prototype.uncork=function(){const S=this._writableState;S.corked&&(S.corked--,S.writing||R(this,S))},re.prototype.setDefaultEncoding=function(A){if(typeof A=="string"&&(A=a(A)),!y.isEncoding(A))throw new Q(A);return this._writableState.defaultEncoding=A,this};function xe(S,A,M,H,q){const ve=A.objectMode?1:M.length;A.length+=ve;const O=A.length<A.highWaterMark;return O||(A.needDrain=!0),A.writing||A.corked||A.errored||!A.constructed?(A.buffered.push({chunk:M,encoding:H,callback:q}),A.allBuffers&&H!=="buffer"&&(A.allBuffers=!1),A.allNoop&&q!==Pe&&(A.allNoop=!1)):(A.writelen=ve,A.writecb=q,A.writing=!0,A.sync=!0,S._write(M,H,A.onwrite),A.sync=!1),O&&!A.errored&&!A.destroyed}function be(S,A,M,H,q,ve,O){A.writelen=H,A.writecb=O,A.writing=!0,A.sync=!0,A.destroyed?A.onwrite(new W("write")):M?S._writev(q,A.onwrite):S._write(q,ve,A.onwrite),A.sync=!1}function we(S,A,M,H){--A.pendingcb,H(M),v(A),Ee(S,M)}function de(S,A){const M=S._writableState,H=M.sync,q=M.writecb;if(typeof q!="function"){Ee(S,new x);return}M.writing=!1,M.writecb=null,M.length-=M.writelen,M.writelen=0,A?(A.stack,M.errored||(M.errored=A),S._readableState&&!S._readableState.errored&&(S._readableState.errored=A),H?t.nextTick(we,S,M,A,q):we(S,M,A,q)):(M.buffered.length>M.bufferedIndex&&R(S,M),H?M.afterWriteTickInfo!==null&&M.afterWriteTickInfo.cb===q?M.afterWriteTickInfo.count++:(M.afterWriteTickInfo={count:1,cb:q,stream:S,state:M},t.nextTick(J,M.afterWriteTickInfo)):me(S,M,1,q))}function J({stream:S,state:A,count:M,cb:H}){return A.afterWriteTickInfo=null,me(S,A,M,H)}function me(S,A,M,H){for(!A.ending&&!S.destroyed&&A.length===0&&A.needDrain&&(A.needDrain=!1,S.emit("drain"));M-- >0;)A.pendingcb--,H();A.destroyed&&v(A),oe(S,A)}function v(S){if(S.writing)return;for(let q=S.bufferedIndex;q<S.buffered.length;++q){var A;const{chunk:ve,callback:O}=S.buffered[q],_e=S.objectMode?1:ve.length;S.length-=_e,O((A=S.errored)!==null&&A!==void 0?A:new W("write"))}const M=S[ee].splice(0);for(let q=0;q<M.length;q++){var H;M[q]((H=S.errored)!==null&&H!==void 0?H:new W("end"))}ue(S)}function R(S,A){if(A.corked||A.bufferProcessing||A.destroyed||!A.constructed)return;const{buffered:M,bufferedIndex:H,objectMode:q}=A,ve=M.length-H;if(!ve)return;let O=H;if(A.bufferProcessing=!0,ve>1&&S._writev){A.pendingcb-=ve-1;const _e=A.allNoop?Pe:Y=>{for(let nt=O;nt<M.length;++nt)M[nt].callback(Y)},Ye=A.allNoop&&O===0?M:e(M,O);Ye.allBuffers=A.allBuffers,be(S,A,!0,A.length,Ye,"",_e),ue(A)}else{do{const{chunk:_e,encoding:Ye,callback:Y}=M[O];M[O++]=null;const nt=q?1:_e.length;be(S,A,!1,nt,_e,Ye,Y)}while(O<M.length&&!A.writing);O===M.length?ue(A):O>256?(M.splice(0,O),A.bufferedIndex=0):A.bufferedIndex=O}A.bufferProcessing=!1}re.prototype._write=function(S,A,M){if(this._writev)this._writev([{chunk:S,encoding:A}],M);else throw new $("_write()")},re.prototype._writev=null,re.prototype.end=function(S,A,M){const H=this._writableState;typeof S=="function"?(M=S,S=null,A=null):typeof A=="function"&&(M=A,A=null);let q;if(S!=null){const ve=ne(this,S,A);ve instanceof r&&(q=ve)}return H.corked&&(H.corked=1,this.uncork()),q||(!H.errored&&!H.ending?(H.ending=!0,oe(this,H,!0),H.ended=!0):H.finished?q=new he("end"):H.destroyed&&(q=new W("end"))),typeof M=="function"&&(q||H.finished?t.nextTick(M,q):H[ee].push(M)),this};function D(S){return S.ending&&!S.destroyed&&S.constructed&&S.length===0&&!S.errored&&S.buffered.length===0&&!S.finished&&!S.writing&&!S.errorEmitted&&!S.closeEmitted}function K(S,A){let M=!1;function H(q){if(M){Ee(S,q??x());return}if(M=!0,A.pendingcb--,q){const ve=A[ee].splice(0);for(let O=0;O<ve.length;O++)ve[O](q);Ee(S,q,A.sync)}else D(A)&&(A.prefinished=!0,S.emit("prefinish"),A.pendingcb++,t.nextTick(X,S,A))}A.sync=!0,A.pendingcb++;try{S._final(H)}catch(q){H(q)}A.sync=!1}function le(S,A){!A.prefinished&&!A.finalCalled&&(typeof S._final=="function"&&!A.destroyed?(A.finalCalled=!0,K(S,A)):(A.prefinished=!0,S.emit("prefinish")))}function oe(S,A,M){D(A)&&(le(S,A),A.pendingcb===0&&(M?(A.pendingcb++,t.nextTick((H,q)=>{D(q)?X(H,q):q.pendingcb--},S,A)):D(A)&&(A.pendingcb++,X(S,A))))}function X(S,A){A.pendingcb--,A.finished=!0;const M=A[ee].splice(0);for(let H=0;H<M.length;H++)M[H]();if(S.emit("finish"),A.autoDestroy){const H=S._readableState;(!H||H.autoDestroy&&(H.endEmitted||H.readable===!1))&&S.destroy()}}o(re.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(S){this._writableState&&(this._writableState.destroyed=S)}},writable:{__proto__:null,get(){const S=this._writableState;return!!S&&S.writable!==!1&&!S.destroyed&&!S.errored&&!S.ending&&!S.ended},set(S){this._writableState&&(this._writableState.writable=!!S)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){const S=this._writableState;return S?!S.destroyed&&!S.ending&&S.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});const ce=b.destroy;re.prototype.destroy=function(S,A){const M=this._writableState;return!M.destroyed&&(M.bufferedIndex<M.buffered.length||M[ee].length)&&t.nextTick(v,M),ce.call(this,S,A),this},re.prototype._undestroy=b.undestroy,re.prototype._destroy=function(S,A){A(S)},re.prototype[f.captureRejectionSymbol]=function(S){this.destroy(S)};let pe;function Ce(){return pe===void 0&&(pe={}),pe}return re.fromWeb=function(S,A){return Ce().newStreamWritableFromWritableStream(S,A)},re.toWeb=function(S){return Ce().newWritableStreamFromStreamWritable(S)},ua}var da,bf;function NR(){if(bf)return da;bf=1;const t=nr,e=xt,{isReadable:r,isWritable:n,isIterable:i,isNodeStream:o,isReadableNodeStream:s,isWritableNodeStream:a,isDuplexNodeStream:l,isReadableStream:c,isWritableStream:f}=qt,p=or,{AbortError:y,codes:{ERR_INVALID_ARG_TYPE:b,ERR_INVALID_RETURN_VALUE:T}}=tt,{destroyer:E}=wn,I=kt(),F=ws(),$=qc(),{createDeferredPromise:x}=Ke,U=$m,W=globalThis.Blob||e.Blob,he=typeof W<"u"?function(j){return j instanceof W}:function(j){return!1},Ne=globalThis.AbortController||li().AbortController,{FunctionPrototypeCall:se}=Le;class Q extends I{constructor(j){super(j),(j==null?void 0:j.readable)===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),(j==null?void 0:j.writable)===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}}da=function ee(j,ue){if(l(j))return j;if(s(j))return Pe({readable:j});if(a(j))return Pe({writable:j});if(o(j))return Pe({writable:!1,readable:!1});if(c(j))return Pe({readable:F.fromWeb(j)});if(f(j))return Pe({writable:$.fromWeb(j)});if(typeof j=="function"){const{value:ne,write:xe,final:be,destroy:we}=Ee(j);if(i(ne))return U(Q,ne,{objectMode:!0,write:xe,final:be,destroy:we});const de=ne==null?void 0:ne.then;if(typeof de=="function"){let J;const me=se(de,ne,v=>{if(v!=null)throw new T("nully","body",v)},v=>{E(J,v)});return J=new Q({objectMode:!0,readable:!1,write:xe,final(v){be(async()=>{try{await me,t.nextTick(v,null)}catch(R){t.nextTick(v,R)}})},destroy:we})}throw new T("Iterable, AsyncIterable or AsyncFunction",ue,ne)}if(he(j))return ee(j.arrayBuffer());if(i(j))return U(Q,j,{objectMode:!0,writable:!1});if(c(j==null?void 0:j.readable)&&f(j==null?void 0:j.writable))return Q.fromWeb(j);if(typeof(j==null?void 0:j.writable)=="object"||typeof(j==null?void 0:j.readable)=="object"){const ne=j!=null&&j.readable?s(j==null?void 0:j.readable)?j==null?void 0:j.readable:ee(j.readable):void 0,xe=j!=null&&j.writable?a(j==null?void 0:j.writable)?j==null?void 0:j.writable:ee(j.writable):void 0;return Pe({readable:ne,writable:xe})}const re=j==null?void 0:j.then;if(typeof re=="function"){let ne;return se(re,j,xe=>{xe!=null&&ne.push(xe),ne.push(null)},xe=>{E(ne,xe)}),ne=new Q({objectMode:!0,writable:!1,read(){}})}throw new b(ue,["Blob","ReadableStream","WritableStream","Stream","Iterable","AsyncIterable","Function","{ readable, writable } pair","Promise"],j)};function Ee(ee){let{promise:j,resolve:ue}=x();const re=new Ne,ne=re.signal;return{value:ee(async function*(){for(;;){const be=j;j=null;const{chunk:we,done:de,cb:J}=await be;if(t.nextTick(J),de)return;if(ne.aborted)throw new y(void 0,{cause:ne.reason});({promise:j,resolve:ue}=x()),yield we}}(),{signal:ne}),write(be,we,de){const J=ue;ue=null,J({chunk:be,done:!1,cb:de})},final(be){const we=ue;ue=null,we({done:!0,cb:be})},destroy(be,we){re.abort(),we(be)}}}function Pe(ee){const j=ee.readable&&typeof ee.readable.read!="function"?F.wrap(ee.readable):ee.readable,ue=ee.writable;let re=!!r(j),ne=!!n(ue),xe,be,we,de,J;function me(v){const R=de;de=null,R?R(v):v&&J.destroy(v)}return J=new Q({readableObjectMode:!!(j!=null&&j.readableObjectMode),writableObjectMode:!!(ue!=null&&ue.writableObjectMode),readable:re,writable:ne}),ne&&(p(ue,v=>{ne=!1,v&&E(j,v),me(v)}),J._write=function(v,R,D){ue.write(v,R)?D():xe=D},J._final=function(v){ue.end(),be=v},ue.on("drain",function(){if(xe){const v=xe;xe=null,v()}}),ue.on("finish",function(){if(be){const v=be;be=null,v()}})),re&&(p(j,v=>{re=!1,v&&E(j,v),me(v)}),j.on("readable",function(){if(we){const v=we;we=null,v()}}),j.on("end",function(){J.push(null)}),J._read=function(){for(;;){const v=j.read();if(v===null){we=J._read;return}if(!J.push(v))return}}),J._destroy=function(v,R){!v&&de!==null&&(v=new y),we=null,xe=null,be=null,de===null?R(v):(de=R,E(ue,v),E(j,v))},J}return da}var fa,wf;function kt(){if(wf)return fa;wf=1;const{ObjectDefineProperties:t,ObjectGetOwnPropertyDescriptor:e,ObjectKeys:r,ObjectSetPrototypeOf:n}=Le;fa=s;const i=ws(),o=qc();n(s.prototype,i.prototype),n(s,i);{const f=r(o.prototype);for(let p=0;p<f.length;p++){const y=f[p];s.prototype[y]||(s.prototype[y]=o.prototype[y])}}function s(f){if(!(this instanceof s))return new s(f);i.call(this,f),o.call(this,f),f?(this.allowHalfOpen=f.allowHalfOpen!==!1,f.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),f.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}t(s.prototype,{writable:{__proto__:null,...e(o.prototype,"writable")},writableHighWaterMark:{__proto__:null,...e(o.prototype,"writableHighWaterMark")},writableObjectMode:{__proto__:null,...e(o.prototype,"writableObjectMode")},writableBuffer:{__proto__:null,...e(o.prototype,"writableBuffer")},writableLength:{__proto__:null,...e(o.prototype,"writableLength")},writableFinished:{__proto__:null,...e(o.prototype,"writableFinished")},writableCorked:{__proto__:null,...e(o.prototype,"writableCorked")},writableEnded:{__proto__:null,...e(o.prototype,"writableEnded")},writableNeedDrain:{__proto__:null,...e(o.prototype,"writableNeedDrain")},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(f){this._readableState&&this._writableState&&(this._readableState.destroyed=f,this._writableState.destroyed=f)}}});let a;function l(){return a===void 0&&(a={}),a}s.fromWeb=function(f,p){return l().newStreamDuplexFromReadableWritablePair(f,p)},s.toWeb=function(f){return l().newReadableWritablePairFromDuplex(f)};let c;return s.from=function(f){return c||(c=NR()),c(f,"body")},fa}const{ObjectSetPrototypeOf:Im,Symbol:LR}=Le;var Nm=Ft;const{ERR_METHOD_NOT_IMPLEMENTED:MR}=tt.codes,Wc=kt(),{getHighWaterMark:DR}=bs;Im(Ft.prototype,Wc.prototype);Im(Ft,Wc);const Yn=LR("kCallback");function Ft(t){if(!(this instanceof Ft))return new Ft(t);const e=t?DR(this,t,"readableHighWaterMark",!0):null;e===0&&(t={...t,highWaterMark:null,readableHighWaterMark:e,writableHighWaterMark:t.writableHighWaterMark||0}),Wc.call(this,t),this._readableState.sync=!1,this[Yn]=null,t&&(typeof t.transform=="function"&&(this._transform=t.transform),typeof t.flush=="function"&&(this._flush=t.flush)),this.on("prefinish",jR)}function jl(t){typeof this._flush=="function"&&!this.destroyed?this._flush((e,r)=>{if(e){t?t(e):this.destroy(e);return}r!=null&&this.push(r),this.push(null),t&&t()}):(this.push(null),t&&t())}function jR(){this._final!==jl&&jl.call(this)}Ft.prototype._final=jl;Ft.prototype._transform=function(t,e,r){throw new MR("_transform()")};Ft.prototype._write=function(t,e,r){const n=this._readableState,i=this._writableState,o=n.length;this._transform(t,e,(s,a)=>{if(s){r(s);return}a!=null&&this.push(a),i.ended||o===n.length||n.length<n.highWaterMark?r():this[Yn]=r})};Ft.prototype._read=function(){if(this[Yn]){const t=this[Yn];this[Yn]=null,t()}};const{ObjectSetPrototypeOf:Lm}=Le;var Mm=un;const Vc=Nm;Lm(un.prototype,Vc.prototype);Lm(un,Vc);function un(t){if(!(this instanceof un))return new un(t);Vc.call(this,t)}un.prototype._transform=function(t,e,r){r(null,t)};const kn=nr,{ArrayIsArray:kR,Promise:FR,SymbolAsyncIterator:BR,SymbolDispose:zR}=Le,Ao=or,{once:UR}=Ke,HR=wn,vf=kt(),{aggregateTwoErrors:qR,codes:{ERR_INVALID_ARG_TYPE:kl,ERR_INVALID_RETURN_VALUE:ha,ERR_MISSING_ARGS:WR,ERR_STREAM_DESTROYED:VR,ERR_STREAM_PREMATURE_CLOSE:GR},AbortError:YR}=tt,{validateFunction:JR,validateAbortSignal:QR}=yi,{isIterable:pr,isReadable:pa,isReadableNodeStream:Ji,isNodeStream:Sf,isTransformStream:Wr,isWebStream:KR,isReadableStream:ya,isReadableFinished:XR}=qt,ZR=globalThis.AbortController||li().AbortController;let ma,_a,ga;function Af(t,e,r){let n=!1;t.on("close",()=>{n=!0});const i=Ao(t,{readable:e,writable:r},o=>{n=!o});return{destroy:o=>{n||(n=!0,HR.destroyer(t,o||new VR("pipe")))},cleanup:i}}function eO(t){return JR(t[t.length-1],"streams[stream.length - 1]"),t.pop()}function ba(t){if(pr(t))return t;if(Ji(t))return tO(t);throw new kl("val",["Readable","Iterable","AsyncIterable"],t)}async function*tO(t){_a||(_a=ws()),yield*_a.prototype[BR].call(t)}async function Ci(t,e,r,{end:n}){let i,o=null;const s=c=>{if(c&&(i=c),o){const f=o;o=null,f()}},a=()=>new FR((c,f)=>{i?f(i):o=()=>{i?f(i):c()}});e.on("drain",s);const l=Ao(e,{readable:!1},s);try{e.writableNeedDrain&&await a();for await(const c of t)e.write(c)||await a();n&&(e.end(),await a()),r()}catch(c){r(i!==c?qR(i,c):c)}finally{l(),e.off("drain",s)}}async function wa(t,e,r,{end:n}){Wr(e)&&(e=e.writable);const i=e.getWriter();try{for await(const o of t)await i.ready,i.write(o).catch(()=>{});await i.ready,n&&await i.close(),r()}catch(o){try{await i.abort(o),r(o)}catch(s){r(s)}}}function rO(...t){return Dm(t,UR(eO(t)))}function Dm(t,e,r){if(t.length===1&&kR(t[0])&&(t=t[0]),t.length<2)throw new WR("streams");const n=new ZR,i=n.signal,o=r==null?void 0:r.signal,s=[];QR(o,"options.signal");function a(){T(new YR)}ga=ga||Ke.addAbortListener;let l;o&&(l=ga(o,a));let c,f;const p=[];let y=0;function b($){T($,--y===0)}function T($,x){var U;if($&&(!c||c.code==="ERR_STREAM_PREMATURE_CLOSE")&&(c=$),!(!c&&!x)){for(;p.length;)p.shift()(c);(U=l)===null||U===void 0||U[zR](),n.abort(),x&&(c||s.forEach(W=>W()),kn.nextTick(e,c,f))}}let E;for(let $=0;$<t.length;$++){const x=t[$],U=$<t.length-1,W=$>0,he=U||(r==null?void 0:r.end)!==!1,Ne=$===t.length-1;if(Sf(x)){let se=function(Q){Q&&Q.name!=="AbortError"&&Q.code!=="ERR_STREAM_PREMATURE_CLOSE"&&b(Q)};if(he){const{destroy:Q,cleanup:Ee}=Af(x,U,W);p.push(Q),pa(x)&&Ne&&s.push(Ee)}x.on("error",se),pa(x)&&Ne&&s.push(()=>{x.removeListener("error",se)})}if($===0)if(typeof x=="function"){if(E=x({signal:i}),!pr(E))throw new ha("Iterable, AsyncIterable or Stream","source",E)}else pr(x)||Ji(x)||Wr(x)?E=x:E=vf.from(x);else if(typeof x=="function"){if(Wr(E)){var I;E=ba((I=E)===null||I===void 0?void 0:I.readable)}else E=ba(E);if(E=x(E,{signal:i}),U){if(!pr(E,!0))throw new ha("AsyncIterable",`transform[${$-1}]`,E)}else{var F;ma||(ma=Mm);const se=new ma({objectMode:!0}),Q=(F=E)===null||F===void 0?void 0:F.then;if(typeof Q=="function")y++,Q.call(E,ee=>{f=ee,ee!=null&&se.write(ee),he&&se.end(),kn.nextTick(b)},ee=>{se.destroy(ee),kn.nextTick(b,ee)});else if(pr(E,!0))y++,Ci(E,se,b,{end:he});else if(ya(E)||Wr(E)){const ee=E.readable||E;y++,Ci(ee,se,b,{end:he})}else throw new ha("AsyncIterable or Promise","destination",E);E=se;const{destroy:Ee,cleanup:Pe}=Af(E,!1,!0);p.push(Ee),Ne&&s.push(Pe)}}else if(Sf(x)){if(Ji(E)){y+=2;const se=nO(E,x,b,{end:he});pa(x)&&Ne&&s.push(se)}else if(Wr(E)||ya(E)){const se=E.readable||E;y++,Ci(se,x,b,{end:he})}else if(pr(E))y++,Ci(E,x,b,{end:he});else throw new kl("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],E);E=x}else if(KR(x)){if(Ji(E))y++,wa(ba(E),x,b,{end:he});else if(ya(E)||pr(E))y++,wa(E,x,b,{end:he});else if(Wr(E))y++,wa(E.readable,x,b,{end:he});else throw new kl("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],E);E=x}else E=vf.from(x)}return(i!=null&&i.aborted||o!=null&&o.aborted)&&kn.nextTick(a),E}function nO(t,e,r,{end:n}){let i=!1;if(e.on("close",()=>{i||r(new GR)}),t.pipe(e,{end:!1}),n){let o=function(){i=!0,e.end()};XR(t)?kn.nextTick(o):t.once("end",o)}else r();return Ao(t,{readable:!0,writable:!1},o=>{const s=t._readableState;o&&o.code==="ERR_STREAM_PREMATURE_CLOSE"&&s&&s.ended&&!s.errored&&!s.errorEmitted?t.once("end",r).once("error",r):r(o)}),Ao(e,{readable:!1,writable:!0},r)}var Gc={pipelineImpl:Dm,pipeline:rO};const{pipeline:iO}=Gc,Ri=kt(),{destroyer:oO}=wn,{isNodeStream:Oi,isReadable:Ef,isWritable:xf,isWebStream:va,isTransformStream:ur,isWritableStream:Tf,isReadableStream:Pf}=qt,{AbortError:sO,codes:{ERR_INVALID_ARG_VALUE:Cf,ERR_MISSING_ARGS:aO}}=tt,lO=or;var jm=function(...e){if(e.length===0)throw new aO("streams");if(e.length===1)return Ri.from(e[0]);const r=[...e];if(typeof e[0]=="function"&&(e[0]=Ri.from(e[0])),typeof e[e.length-1]=="function"){const b=e.length-1;e[b]=Ri.from(e[b])}for(let b=0;b<e.length;++b)if(!(!Oi(e[b])&&!va(e[b]))){if(b<e.length-1&&!(Ef(e[b])||Pf(e[b])||ur(e[b])))throw new Cf(`streams[${b}]`,r[b],"must be readable");if(b>0&&!(xf(e[b])||Tf(e[b])||ur(e[b])))throw new Cf(`streams[${b}]`,r[b],"must be writable")}let n,i,o,s,a;function l(b){const T=s;s=null,T?T(b):b?a.destroy(b):!y&&!p&&a.destroy()}const c=e[0],f=iO(e,l),p=!!(xf(c)||Tf(c)||ur(c)),y=!!(Ef(f)||Pf(f)||ur(f));if(a=new Ri({writableObjectMode:!!(c!=null&&c.writableObjectMode),readableObjectMode:!!(f!=null&&f.readableObjectMode),writable:p,readable:y}),p){if(Oi(c))a._write=function(T,E,I){c.write(T,E)?I():n=I},a._final=function(T){c.end(),i=T},c.on("drain",function(){if(n){const T=n;n=null,T()}});else if(va(c)){const E=(ur(c)?c.writable:c).getWriter();a._write=async function(I,F,$){try{await E.ready,E.write(I).catch(()=>{}),$()}catch(x){$(x)}},a._final=async function(I){try{await E.ready,E.close().catch(()=>{}),i=I}catch(F){I(F)}}}const b=ur(f)?f.readable:f;lO(b,()=>{if(i){const T=i;i=null,T()}})}if(y){if(Oi(f))f.on("readable",function(){if(o){const b=o;o=null,b()}}),f.on("end",function(){a.push(null)}),a._read=function(){for(;;){const b=f.read();if(b===null){o=a._read;return}if(!a.push(b))return}};else if(va(f)){const T=(ur(f)?f.readable:f).getReader();a._read=async function(){for(;;)try{const{value:E,done:I}=await T.read();if(!a.push(E))return;if(I){a.push(null);return}}catch{return}}}}return a._destroy=function(b,T){!b&&s!==null&&(b=new sO),o=null,n=null,i=null,s===null?T(b):(s=T,Oi(f)&&oO(f,b))},a};const cO=globalThis.AbortController||li().AbortController,{codes:{ERR_INVALID_ARG_VALUE:uO,ERR_INVALID_ARG_TYPE:_i,ERR_MISSING_ARGS:dO,ERR_OUT_OF_RANGE:fO},AbortError:vt}=tt,{validateAbortSignal:Nr,validateInteger:Rf,validateObject:Lr}=yi,hO=Le.Symbol("kWeak"),pO=Le.Symbol("kResistStopPropagation"),{finished:yO}=or,mO=jm,{addAbortSignalNoValidate:_O}=gs,{isWritable:gO,isNodeStream:bO}=qt,{deprecate:wO}=Ke,{ArrayPrototypePush:vO,Boolean:SO,MathFloor:Of,Number:AO,NumberIsNaN:EO,Promise:$f,PromiseReject:If,PromiseResolve:xO,PromisePrototypeThen:Nf,Symbol:km}=Le,Eo=km("kEmpty"),Lf=km("kEof");function TO(t,e){if(e!=null&&Lr(e,"options"),(e==null?void 0:e.signal)!=null&&Nr(e.signal,"options.signal"),bO(t)&&!gO(t))throw new uO("stream",t,"must be writable");const r=mO(this,t);return e!=null&&e.signal&&_O(e.signal,r),r}function vs(t,e){if(typeof t!="function")throw new _i("fn",["Function","AsyncFunction"],t);e!=null&&Lr(e,"options"),(e==null?void 0:e.signal)!=null&&Nr(e.signal,"options.signal");let r=1;(e==null?void 0:e.concurrency)!=null&&(r=Of(e.concurrency));let n=r-1;return(e==null?void 0:e.highWaterMark)!=null&&(n=Of(e.highWaterMark)),Rf(r,"options.concurrency",1),Rf(n,"options.highWaterMark",0),n+=r,(async function*(){const o=Ke.AbortSignalAny([e==null?void 0:e.signal].filter(SO)),s=this,a=[],l={signal:o};let c,f,p=!1,y=0;function b(){p=!0,T()}function T(){y-=1,E()}function E(){f&&!p&&y<r&&a.length<n&&(f(),f=null)}async function I(){try{for await(let F of s){if(p)return;if(o.aborted)throw new vt;try{if(F=t(F,l),F===Eo)continue;F=xO(F)}catch($){F=If($)}y+=1,Nf(F,T,b),a.push(F),c&&(c(),c=null),!p&&(a.length>=n||y>=r)&&await new $f($=>{f=$})}a.push(Lf)}catch(F){const $=If(F);Nf($,T,b),a.push($)}finally{p=!0,c&&(c(),c=null)}}I();try{for(;;){for(;a.length>0;){const F=await a[0];if(F===Lf)return;if(o.aborted)throw new vt;F!==Eo&&(yield F),a.shift(),E()}await new $f(F=>{c=F})}}finally{p=!0,f&&(f(),f=null)}}).call(this)}function PO(t=void 0){return t!=null&&Lr(t,"options"),(t==null?void 0:t.signal)!=null&&Nr(t.signal,"options.signal"),(async function*(){let r=0;for await(const i of this){var n;if(t!=null&&(n=t.signal)!==null&&n!==void 0&&n.aborted)throw new vt({cause:t.signal.reason});yield[r++,i]}}).call(this)}async function Fm(t,e=void 0){for await(const r of Yc.call(this,t,e))return!0;return!1}async function CO(t,e=void 0){if(typeof t!="function")throw new _i("fn",["Function","AsyncFunction"],t);return!await Fm.call(this,async(...r)=>!await t(...r),e)}async function RO(t,e){for await(const r of Yc.call(this,t,e))return r}async function OO(t,e){if(typeof t!="function")throw new _i("fn",["Function","AsyncFunction"],t);async function r(n,i){return await t(n,i),Eo}for await(const n of vs.call(this,r,e));}function Yc(t,e){if(typeof t!="function")throw new _i("fn",["Function","AsyncFunction"],t);async function r(n,i){return await t(n,i)?n:Eo}return vs.call(this,r,e)}class $O extends dO{constructor(){super("reduce"),this.message="Reduce of an empty stream requires an initial value"}}async function IO(t,e,r){var n;if(typeof t!="function")throw new _i("reducer",["Function","AsyncFunction"],t);r!=null&&Lr(r,"options"),(r==null?void 0:r.signal)!=null&&Nr(r.signal,"options.signal");let i=arguments.length>1;if(r!=null&&(n=r.signal)!==null&&n!==void 0&&n.aborted){const c=new vt(void 0,{cause:r.signal.reason});throw this.once("error",()=>{}),await yO(this.destroy(c)),c}const o=new cO,s=o.signal;if(r!=null&&r.signal){const c={once:!0,[hO]:this,[pO]:!0};r.signal.addEventListener("abort",()=>o.abort(),c)}let a=!1;try{for await(const c of this){var l;if(a=!0,r!=null&&(l=r.signal)!==null&&l!==void 0&&l.aborted)throw new vt;i?e=await t(e,c,{signal:s}):(e=c,i=!0)}if(!a&&!i)throw new $O}finally{o.abort()}return e}async function NO(t){t!=null&&Lr(t,"options"),(t==null?void 0:t.signal)!=null&&Nr(t.signal,"options.signal");const e=[];for await(const n of this){var r;if(t!=null&&(r=t.signal)!==null&&r!==void 0&&r.aborted)throw new vt(void 0,{cause:t.signal.reason});vO(e,n)}return e}function LO(t,e){const r=vs.call(this,t,e);return(async function*(){for await(const i of r)yield*i}).call(this)}function Bm(t){if(t=AO(t),EO(t))return 0;if(t<0)throw new fO("number",">= 0",t);return t}function MO(t,e=void 0){return e!=null&&Lr(e,"options"),(e==null?void 0:e.signal)!=null&&Nr(e.signal,"options.signal"),t=Bm(t),(async function*(){var n;if(e!=null&&(n=e.signal)!==null&&n!==void 0&&n.aborted)throw new vt;for await(const o of this){var i;if(e!=null&&(i=e.signal)!==null&&i!==void 0&&i.aborted)throw new vt;t--<=0&&(yield o)}}).call(this)}function DO(t,e=void 0){return e!=null&&Lr(e,"options"),(e==null?void 0:e.signal)!=null&&Nr(e.signal,"options.signal"),t=Bm(t),(async function*(){var n;if(e!=null&&(n=e.signal)!==null&&n!==void 0&&n.aborted)throw new vt;for await(const o of this){var i;if(e!=null&&(i=e.signal)!==null&&i!==void 0&&i.aborted)throw new vt;if(t-- >0&&(yield o),t<=0)return}}).call(this)}jc.streamReturningOperators={asIndexedPairs:wO(PO,"readable.asIndexedPairs will be removed in a future version."),drop:MO,filter:Yc,flatMap:LO,map:vs,take:DO,compose:TO};jc.promiseReturningOperators={every:CO,forEach:OO,reduce:IO,toArray:NO,some:Fm,find:RO};var Sa,Mf;function zm(){if(Mf)return Sa;Mf=1;const{ArrayPrototypePop:t,Promise:e}=Le,{isIterable:r,isNodeStream:n,isWebStream:i}=qt,{pipelineImpl:o}=Gc,{finished:s}=or;Um();function a(...l){return new e((c,f)=>{let p,y;const b=l[l.length-1];if(b&&typeof b=="object"&&!n(b)&&!r(b)&&!i(b)){const T=t(l);p=T.signal,y=T.end}o(l,(T,E)=>{T?f(T):c(E)},{signal:p,end:y})})}return Sa={finished:s,pipeline:a},Sa}var Df;function Um(){if(Df)return ia.exports;Df=1;const{Buffer:t}=xt,{ObjectDefineProperty:e,ObjectKeys:r,ReflectApply:n}=Le,{promisify:{custom:i}}=Ke,{streamReturningOperators:o,promiseReturningOperators:s}=jc,{codes:{ERR_ILLEGAL_CONSTRUCTOR:a}}=tt,l=jm,{setDefaultHighWaterMark:c,getDefaultHighWaterMark:f}=bs,{pipeline:p}=Gc,{destroyer:y}=wn,b=or,T=zm(),E=qt,I=ia.exports=Uc.Stream;I.isDestroyed=E.isDestroyed,I.isDisturbed=E.isDisturbed,I.isErrored=E.isErrored,I.isReadable=E.isReadable,I.isWritable=E.isWritable,I.Readable=ws();for(const $ of r(o)){let U=function(...W){if(new.target)throw a();return I.Readable.from(n(x,this,W))};const x=o[$];e(U,"name",{__proto__:null,value:x.name}),e(U,"length",{__proto__:null,value:x.length}),e(I.Readable.prototype,$,{__proto__:null,value:U,enumerable:!1,configurable:!0,writable:!0})}for(const $ of r(s)){let U=function(...W){if(new.target)throw a();return n(x,this,W)};const x=s[$];e(U,"name",{__proto__:null,value:x.name}),e(U,"length",{__proto__:null,value:x.length}),e(I.Readable.prototype,$,{__proto__:null,value:U,enumerable:!1,configurable:!0,writable:!0})}I.Writable=qc(),I.Duplex=kt(),I.Transform=Nm,I.PassThrough=Mm,I.pipeline=p;const{addAbortSignal:F}=gs;return I.addAbortSignal=F,I.finished=b,I.destroy=y,I.compose=l,I.setDefaultHighWaterMark=c,I.getDefaultHighWaterMark=f,e(I,"promises",{__proto__:null,configurable:!0,enumerable:!0,get(){return T}}),e(p,i,{__proto__:null,enumerable:!0,get(){return T.pipeline}}),e(b,i,{__proto__:null,enumerable:!0,get(){return T.finished}}),I.Stream=I,I._isUint8Array=function(x){return x instanceof Uint8Array},I._uint8ArrayToBuffer=function(x){return t.from(x.buffer,x.byteOffset,x.byteLength)},ia.exports}(function(t){const e=Um(),r=zm(),n=e.Readable.destroy;t.exports=e.Readable,t.exports._uint8ArrayToBuffer=e._uint8ArrayToBuffer,t.exports._isUint8Array=e._isUint8Array,t.exports.isDisturbed=e.isDisturbed,t.exports.isErrored=e.isErrored,t.exports.isReadable=e.isReadable,t.exports.Readable=e.Readable,t.exports.Writable=e.Writable,t.exports.Duplex=e.Duplex,t.exports.Transform=e.Transform,t.exports.PassThrough=e.PassThrough,t.exports.addAbortSignal=e.addAbortSignal,t.exports.finished=e.finished,t.exports.destroy=e.destroy,t.exports.destroy=n,t.exports.pipeline=e.pipeline,t.exports.compose=e.compose,Object.defineProperty(e,"promises",{configurable:!0,enumerable:!0,get(){return r}}),t.exports.Stream=e.Stream,t.exports.default=t.exports})(Ky);var Jc=Ky.exports;const yN=hn(Jc),{promisify:jO}=Ly,{finished:kO}=Jc;async function FO(t,e){return e.on("data",r=>t.add(r)),await jO(kO)(e),t}var BO=FO,zO=class Hm{constructor(e,r=new Map,n=0){this.prefix=e,this._existing=r,this.counter=n}clone(){const{prefix:e,_existing:r,counter:n}=this;return new Hm(e,new Map(r),n)}getId(e){const r=e&&this._existing.get(e);if(r)return r;const n=this.prefix+this.counter;return this.counter++,e&&this._existing.set(e,n),n}hasId(e){return this._existing.has(e)}getOldIds(){return[...this._existing.keys()]}};(function(t,e){if(t.setImmediate)return;var r=1,n={},i=!1,o=t.document,s;function a($){typeof $!="function"&&($=new Function(""+$));for(var x=new Array(arguments.length-1),U=0;U<x.length;U++)x[U]=arguments[U+1];var W={callback:$,args:x};return n[r]=W,s(r),r++}function l($){delete n[$]}function c($){var x=$.callback,U=$.args;switch(U.length){case 0:x();break;case 1:x(U[0]);break;case 2:x(U[0],U[1]);break;case 3:x(U[0],U[1],U[2]);break;default:x.apply(e,U);break}}function f($){if(i)setTimeout(f,0,$);else{var x=n[$];if(x){i=!0;try{c(x)}finally{l($),i=!1}}}}function p(){s=function($){process.nextTick(function(){f($)})}}function y(){if(t.postMessage&&!t.importScripts){var $=!0,x=t.onmessage;return t.onmessage=function(){$=!1},t.postMessage("","*"),t.onmessage=x,$}}function b(){var $="setImmediate$"+Math.random()+"$",x=function(U){U.source===t&&typeof U.data=="string"&&U.data.indexOf($)===0&&f(+U.data.slice($.length))};t.addEventListener?t.addEventListener("message",x,!1):t.attachEvent("onmessage",x),s=function(U){t.postMessage($+U,"*")}}function T(){var $=new MessageChannel;$.port1.onmessage=function(x){var U=x.data;f(U)},s=function(x){$.port2.postMessage(x)}}function E(){var $=o.documentElement;s=function(x){var U=o.createElement("script");U.onreadystatechange=function(){f(x),U.onreadystatechange=null,$.removeChild(U),U=null},$.appendChild(U)}}function I(){s=function($){setTimeout(f,0,$)}}var F=Object.getPrototypeOf&&Object.getPrototypeOf(t);F=F&&F.setTimeout?F:t,{}.toString.call(t.process)==="[object process]"?p():y()?b():t.MessageChannel?T():o&&"onreadystatechange"in o.createElement("script")?E():I(),F.setImmediate=a,F.clearImmediate=l})(typeof self>"u"?typeof window>"u"?n_:window:self);/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */const Aa=self.crypto||self.msCrypto;var UO=class{constructor(e){if(!(Aa&&Aa.subtle))throw new Error("crypto.subtle not found.");if(e==="sha256")this.algorithm={name:"SHA-256"};else if(e==="sha1")this.algorithm={name:"SHA-1"};else throw new Error(`Unsupported algorithm "${e}".`);this._content=""}update(e){this._content+=e}async digest(){const e=new TextEncoder().encode(this._content),r=new Uint8Array(await Aa.subtle.digest(this.algorithm,e));let n="";for(let i=0;i<r.length;++i)n+=r[i].toString(16).padStart(2,"0");return n}};/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */var HO=class{constructor(e){this.current=e.sort(),this.done=!1,this.dir=new Map;for(let r=0;r<e.length;++r)this.dir.set(e[r],!0)}hasNext(){return!this.done}next(){const{current:e,dir:r}=this,n=e.slice();let i=null,o=0;const s=e.length;for(let a=0;a<s;++a){const l=e[a],c=r.get(l);(i===null||l>i)&&(c&&a>0&&l>e[a-1]||!c&&a<s-1&&l>e[a+1])&&(i=l,o=a)}if(i===null)this.done=!0;else{const a=r.get(i)?o-1:o+1;e[o]=e[a],e[a]=i;for(const l of e)l>i&&r.set(l,!r.get(l))}return n}};/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */const qO="http://www.w3.org/1999/02/22-rdf-syntax-ns#",Ea=qO+"langString",xa="http://www.w3.org/2001/XMLSchema#string",ct="NamedNode",dr="BlankNode",Qi="Literal",jf="DefaultGraph",rn={};(()=>{const t="(?:<([^:]+:[^>]*)>)",r="A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�"+"_",n=r+"0-9-·̀-ͯ‿-⁀",o="(_:(?:["+r+"0-9])(?:(?:["+n+".])*(?:["+n+"]))?)",s='"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"',a="(?:\\^\\^"+t+")",c="(?:"+s+"(?:"+a+"|"+"(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))"+")?)",f="[ \\t]+",p="[ \\t]*",y="(?:"+t+"|"+o+")"+f,b=t+f,T="(?:"+t+"|"+o+"|"+c+")"+p,E="(?:\\.|(?:(?:"+t+"|"+o+")"+p+"\\.))";rn.eoln=/(?:\r\n)|(?:\n)|(?:\r)/g,rn.empty=new RegExp("^"+p+"$"),rn.quad=new RegExp("^"+p+y+b+T+E+p+"$")})();var WO=class Ki{static parse(e){const r=[],n={},i=e.split(rn.eoln);let o=0;for(const s of i){if(o++,rn.empty.test(s))continue;const a=s.match(rn.quad);if(a===null)throw new Error("N-Quads parse error on line "+o+".");const l={subject:null,predicate:null,object:null,graph:null};if(a[1]!==void 0?l.subject={termType:ct,value:a[1]}:l.subject={termType:dr,value:a[2]},l.predicate={termType:ct,value:a[3]},a[4]!==void 0?l.object={termType:ct,value:a[4]}:a[5]!==void 0?l.object={termType:dr,value:a[5]}:(l.object={termType:Qi,value:void 0,datatype:{termType:ct}},a[7]!==void 0?l.object.datatype.value=a[7]:a[8]!==void 0?(l.object.datatype.value=Ea,l.object.language=a[8]):l.object.datatype.value=xa,l.object.value=QO(a[6])),a[9]!==void 0?l.graph={termType:ct,value:a[9]}:a[10]!==void 0?l.graph={termType:dr,value:a[10]}:l.graph={termType:jf,value:""},!(l.graph.value in n))n[l.graph.value]=[l],r.push(l);else{let c=!0;const f=n[l.graph.value];for(const p of f)if(VO(p,l)){c=!1;break}c&&(f.push(l),r.push(l))}}return r}static serialize(e){Array.isArray(e)||(e=Ki.legacyDatasetToQuads(e));const r=[];for(const n of e)r.push(Ki.serializeQuad(n));return r.sort().join("")}static serializeQuadComponents(e,r,n,i){let o="";return e.termType===ct?o+=`<${e.value}>`:o+=`${e.value}`,o+=` <${r.value}> `,n.termType===ct?o+=`<${n.value}>`:n.termType===dr?o+=n.value:(o+=`"${YO(n.value)}"`,n.datatype.value===Ea?n.language&&(o+=`@${n.language}`):n.datatype.value!==xa&&(o+=`^^<${n.datatype.value}>`)),i.termType===ct?o+=` <${i.value}>`:i.termType===dr&&(o+=` ${i.value}`),o+=` .
`,o}static serializeQuad(e){return Ki.serializeQuadComponents(e.subject,e.predicate,e.object,e.graph)}static legacyDatasetToQuads(e){const r=[],n={"blank node":dr,IRI:ct,literal:Qi};for(const i in e)e[i].forEach(s=>{const a={};for(const l in s){const c=s[l],f={termType:n[c.type],value:c.value};f.termType===Qi&&(f.datatype={termType:ct},"datatype"in c&&(f.datatype.value=c.datatype),"language"in c?("datatype"in c||(f.datatype.value=Ea),f.language=c.language):"datatype"in c||(f.datatype.value=xa)),a[l]=f}i==="@default"?a.graph={termType:jf,value:""}:a.graph={termType:i.startsWith("_:")?dr:ct,value:i},r.push(a)});return r}};function VO(t,e){return!(t.subject.termType===e.subject.termType&&t.object.termType===e.object.termType)||!(t.subject.value===e.subject.value&&t.predicate.value===e.predicate.value&&t.object.value===e.object.value)?!1:t.object.termType!==Qi?!0:t.object.datatype.termType===e.object.datatype.termType&&t.object.language===e.object.language&&t.object.datatype.value===e.object.datatype.value}const GO=/["\\\n\r]/g;function YO(t){return t.replace(GO,function(e){switch(e){case'"':return'\\"';case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r"}})}const JO=/(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;function QO(t){return t.replace(JO,function(e,r,n,i){if(r)switch(r){case"t":return"	";case"b":return"\b";case"n":return`
`;case"r":return"\r";case"f":return"\f";case'"':return'"';case"'":return"'";case"\\":return"\\"}if(n)return String.fromCharCode(parseInt(n,16));if(i)throw new Error("Unsupported U escape")})}/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */const kf=zO,KO=UO,XO=HO,Ff=WO;var ZO=class{constructor({createMessageDigest:e=()=>new KO("sha256"),canonicalIdMap:r=new Map,maxDeepIterations:n=1/0}={}){this.name="URDNA2015",this.blankNodeInfo=new Map,this.canonicalIssuer=new kf("_:c14n",r),this.createMessageDigest=e,this.maxDeepIterations=n,this.quads=null,this.deepIterations=null}main(e){this.deepIterations=new Map,this.quads=e;for(const a of e)this._addBlankNodeQuadInfo({quad:a,component:a.subject}),this._addBlankNodeQuadInfo({quad:a,component:a.object}),this._addBlankNodeQuadInfo({quad:a,component:a.graph});const r=new Map,n=[...this.blankNodeInfo.keys()];for(const a of n)this._hashAndTrackBlankNode({id:a,hashToBlankNodes:r});const i=[...r.keys()].sort(),o=[];for(const a of i){const l=r.get(a);if(l.length>1){o.push(l);continue}const c=l[0];this.canonicalIssuer.getId(c)}for(const a of o){const l=[];for(const c of a){if(this.canonicalIssuer.hasId(c))continue;const f=new kf("_:b");f.getId(c);const p=this.hashNDegreeQuads(c,f);l.push(p)}l.sort(e$);for(const c of l){const f=c.issuer.getOldIds();for(const p of f)this.canonicalIssuer.getId(p)}}const s=[];for(const a of this.quads){const l=Ff.serializeQuadComponents(this._componentWithCanonicalId({component:a.subject}),a.predicate,this._componentWithCanonicalId({component:a.object}),this._componentWithCanonicalId({component:a.graph}));s.push(l)}return s.sort(),s.join("")}hashFirstDegreeQuads(e){const r=[],n=this.blankNodeInfo.get(e),i=n.quads;for(const s of i){const a={subject:null,predicate:s.predicate,object:null,graph:null};a.subject=this.modifyFirstDegreeComponent(e,s.subject,"subject"),a.object=this.modifyFirstDegreeComponent(e,s.object,"object"),a.graph=this.modifyFirstDegreeComponent(e,s.graph,"graph"),r.push(Ff.serializeQuad(a))}r.sort();const o=this.createMessageDigest();for(const s of r)o.update(s);return n.hash=o.digest(),n.hash}hashRelatedBlankNode(e,r,n,i){let o;this.canonicalIssuer.hasId(e)?o=this.canonicalIssuer.getId(e):n.hasId(e)?o=n.getId(e):o=this.blankNodeInfo.get(e).hash;const s=this.createMessageDigest();return s.update(i),i!=="g"&&s.update(this.getRelatedPredicate(r)),s.update(o),s.digest()}hashNDegreeQuads(e,r){const n=this.deepIterations.get(e)||0;if(n>this.maxDeepIterations)throw new Error(`Maximum deep iterations (${this.maxDeepIterations}) exceeded.`);this.deepIterations.set(e,n+1);const i=this.createMessageDigest(),o=this.createHashToRelated(e,r),s=[...o.keys()].sort();for(const a of s){i.update(a);let l="",c;const f=new XO(o.get(a));for(;f.hasNext();){const p=f.next();let y=r.clone(),b="";const T=[];let E=!1;for(const I of p)if(this.canonicalIssuer.hasId(I)?b+=this.canonicalIssuer.getId(I):(y.hasId(I)||T.push(I),b+=y.getId(I)),l.length!==0&&b>l){E=!0;break}if(!E){for(const I of T){const F=this.hashNDegreeQuads(I,y);if(b+=y.getId(I),b+=`<${F.hash}>`,y=F.issuer,l.length!==0&&b>l){E=!0;break}}E||(l.length===0||b<l)&&(l=b,c=y)}}i.update(l),r=c}return{hash:i.digest(),issuer:r}}modifyFirstDegreeComponent(e,r){return r.termType!=="BlankNode"?r:{termType:"BlankNode",value:r.value===e?"_:a":"_:z"}}getRelatedPredicate(e){return`<${e.predicate.value}>`}createHashToRelated(e,r){const n=new Map,i=this.blankNodeInfo.get(e).quads;for(const o of i)this._addRelatedBlankNodeHash({quad:o,component:o.subject,position:"s",id:e,issuer:r,hashToRelated:n}),this._addRelatedBlankNodeHash({quad:o,component:o.object,position:"o",id:e,issuer:r,hashToRelated:n}),this._addRelatedBlankNodeHash({quad:o,component:o.graph,position:"g",id:e,issuer:r,hashToRelated:n});return n}_hashAndTrackBlankNode({id:e,hashToBlankNodes:r}){const n=this.hashFirstDegreeQuads(e),i=r.get(n);i?i.push(e):r.set(n,[e])}_addBlankNodeQuadInfo({quad:e,component:r}){if(r.termType!=="BlankNode")return;const n=r.value,i=this.blankNodeInfo.get(n);i?i.quads.add(e):this.blankNodeInfo.set(n,{quads:new Set([e]),hash:null})}_addRelatedBlankNodeHash({quad:e,component:r,position:n,id:i,issuer:o,hashToRelated:s}){if(!(r.termType==="BlankNode"&&r.value!==i))return;const a=r.value,l=this.hashRelatedBlankNode(a,e,o,n),c=s.get(l);c?c.push(a):s.set(l,[a])}_componentWithCanonicalId({component:e}){return e.termType==="BlankNode"&&!e.value.startsWith(this.canonicalIssuer.prefix)?{termType:"BlankNode",value:this.canonicalIssuer.getId(e.value)}:e}};function e$(t,e){return t.hash<e.hash?-1:t.hash>e.hash?1:0}const t$=ZO;function r$(t){return new t$().main(t)}var n$=r$;const{Readable:i$}=Jc;function o$(t){const e=t[Symbol.iterator](),r=new i$({objectMode:!0,read:()=>{for(;;){const n=e.next().value;if(!n){r.push(null);return}if(!r.push(n))return}}});return r}var s$=o$,a$={addAll:H1,deleteMatch:W1,equals:G1,fromStream:BO,toCanonical:n$,toStream:s$};const fr=hn(a$),l$=async(t,{init:e,convertChunk:r,getSize:n,truncateChunk:i,addChunk:o,getFinalChunk:s,finalize:a},{maxBuffer:l=Number.POSITIVE_INFINITY}={})=>{if(!u$(t))throw new Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");const c=e();c.length=0;try{for await(const f of t){const p=d$(f),y=r[p](f,c);qm({convertedChunk:y,state:c,getSize:n,truncateChunk:i,addChunk:o,maxBuffer:l})}return c$({state:c,convertChunk:r,getSize:n,truncateChunk:i,addChunk:o,getFinalChunk:s,maxBuffer:l}),a(c)}catch(f){throw f.bufferedData=a(c),f}},c$=({state:t,getSize:e,truncateChunk:r,addChunk:n,getFinalChunk:i,maxBuffer:o})=>{const s=i(t);s!==void 0&&qm({convertedChunk:s,state:t,getSize:e,truncateChunk:r,addChunk:n,maxBuffer:o})},qm=({convertedChunk:t,state:e,getSize:r,truncateChunk:n,addChunk:i,maxBuffer:o})=>{const s=r(t),a=e.length+s;if(a<=o){Bf(t,e,i,a);return}const l=n(t,o-e.length);throw l!==void 0&&Bf(l,e,i,o),new f$},Bf=(t,e,r,n)=>{e.contents=r(t,e,n),e.length=n},u$=t=>typeof t=="object"&&t!==null&&typeof t[Symbol.asyncIterator]=="function",d$=t=>{var n;const e=typeof t;if(e==="string")return"string";if(e!=="object"||t===null)return"others";if((n=globalThis.Buffer)!=null&&n.isBuffer(t))return"buffer";const r=zf.call(t);return r==="[object ArrayBuffer]"?"arrayBuffer":r==="[object DataView]"?"dataView":Number.isInteger(t.byteLength)&&Number.isInteger(t.byteOffset)&&zf.call(t.buffer)==="[object ArrayBuffer]"?"typedArray":"others"},{toString:zf}=Object.prototype;class f$ extends Error{constructor(){super("maxBuffer exceeded");Cs(this,"name","MaxBufferError")}}const h$=t=>t,p$=({contents:t})=>t,y$=t=>{throw new Error(`Streams in object mode are not supported: ${String(t)}`)},m$=t=>t.length;new TextEncoder;async function _$(t,e){return l$(t,S$,e)}const g$=()=>({contents:"",textDecoder:new TextDecoder}),$i=(t,{textDecoder:e})=>e.decode(t,{stream:!0}),b$=(t,{contents:e})=>e+t,w$=(t,e)=>t.slice(0,e),v$=({textDecoder:t})=>{const e=t.decode();return e===""?void 0:e},S$={init:g$,convertChunk:{string:h$,buffer:$i,arrayBuffer:$i,dataView:$i,typedArray:$i,others:y$},getSize:m$,truncateChunk:w$,addChunk:b$,getFinalChunk:v$,finalize:p$},A$={rif:"http://www.w3.org/2007/rif#",v:"http://rdf.data-vocabulary.org/#",wdr:"http://www.w3.org/2007/05/powder#",xml:"http://www.w3.org/XML/1998/namespace/"},E$={acl:"http://www.w3.org/ns/auth/acl#",as:"https://www.w3.org/ns/activitystreams#",bibo:"http://purl.org/ontology/bibo/",cc:"http://creativecommons.org/ns#",cert:"http://www.w3.org/ns/auth/cert#",cnt:"http://www.w3.org/2011/content#",constant:"http://qudt.org/vocab/constant/",crm:"http://www.cidoc-crm.org/cidoc-crm/",csvw:"http://www.w3.org/ns/csvw#",ctag:"http://commontag.org/ns#","dash-sparql":"http://datashapes.org/sparql#",dash:"http://datashapes.org/dash#",dbo:"http://dbpedia.org/ontology/",dc11:"http://purl.org/dc/elements/1.1/",dcam:"http://purl.org/dc/dcam/",dcat:"http://www.w3.org/ns/dcat#",dcmitype:"http://purl.org/dc/dcmitype/",dcterms:"http://purl.org/dc/terms/",dig:"http://www.ics.forth.gr/isl/CRMdig/",discipline:"http://qudt.org/vocab/discipline/",doap:"http://usefulinc.com/ns/doap#",dpv:"http://www.w3.org/ns/dpv#",dqv:"http://www.w3.org/ns/dqv#",dtype:"http://www.linkedmodel.org/schema/dtype#",duv:"http://www.w3.org/ns/duv#",earl:"http://www.w3.org/ns/earl#",ebucore:"http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",exif:"http://www.w3.org/2003/12/exif/ns#",foaf:"http://xmlns.com/foaf/0.1/",frbr:"http://purl.org/vocab/frbr/core#",geo:"http://www.opengis.net/ont/geosparql#",geof:"http://www.opengis.net/def/function/geosparql/",geor:"http://www.opengis.net/def/rule/geosparql/",gml:"http://www.opengis.net/ont/gml#",gn:"http://www.geonames.org/ontology#",gr:"http://purl.org/goodrelations/v1#",grddl:"http://www.w3.org/2003/g/data-view#",gs1:"https://gs1.org/voc/",gtfs:"http://vocab.gtfs.org/terms#",http:"http://www.w3.org/2011/http#",hydra:"http://www.w3.org/ns/hydra/core#",ical:"http://www.w3.org/2002/12/cal/icaltzd#",la:"https://linked.art/ns/terms/",ldp:"http://www.w3.org/ns/ldp#",list:"http://www.w3.org/2000/10/swap/list#",locn:"http://www.w3.org/ns/locn#",log:"http://www.w3.org/2000/10/swap/log#",lvont:"http://lexvo.org/ontology#",m4i:"http://w3id.org/nfdi4ing/metadata4ing#",ma:"http://www.w3.org/ns/ma-ont#",mads:"http://www.loc.gov/mads/rdf/v1#",math:"http://www.w3.org/2000/10/swap/math#",oa:"http://www.w3.org/ns/oa#",og:"http://ogp.me/ns#",oidc:"http://www.w3.org/ns/solid/oidc#",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",pim:"http://www.w3.org/ns/pim/space#",prefix:"http://qudt.org/vocab/prefix/",prov:"http://www.w3.org/ns/prov#",qb:"http://purl.org/linked-data/cube#",qkdv:"http://qudt.org/vocab/dimensionvector/",quantitykind:"http://qudt.org/vocab/quantitykind/",qudt:"http://qudt.org/schema/qudt/",rdau:"http://rdaregistry.info/Elements/u/",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfa:"http://www.w3.org/ns/rdfa#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",rev:"http://purl.org/stuff/rev#",rico:"https://www.ica.org/standards/RiC/ontology#",rr:"http://www.w3.org/ns/r2rml#",rss:"http://purl.org/rss/1.0/",schema:"http://schema.org/",sd:"http://www.w3.org/ns/sparql-service-description#",sdmx:"http://purl.org/linked-data/sdmx#",sem:"http://semanticweb.cs.vu.nl/2009/11/sem/",set:"http://www.w3.org/2000/10/swap/set#",sf:"http://www.opengis.net/ont/sf#",sh:"http://www.w3.org/ns/shacl#",shex:"http://www.w3.org/ns/shex#",shsh:"http://www.w3.org/ns/shacl-shacl#",sioc:"http://rdfs.org/sioc/ns#",skos:"http://www.w3.org/2004/02/skos/core#",skosxl:"http://www.w3.org/2008/05/skos-xl#",solid:"http://www.w3.org/ns/solid/terms#",sosa:"http://www.w3.org/ns/sosa/",sou:"http://qudt.org/vocab/sou/",ssn:"http://www.w3.org/ns/ssn/",stat:"http://www.w3.org/ns/posix/stat#",string:"http://www.w3.org/2000/10/swap/string#",test:"http://www.w3.org/2006/03/test-description#",time:"http://www.w3.org/2006/time#",unit:"http://qudt.org/vocab/unit/",vaem:"http://www.linkedmodel.org/schema/vaem#",vann:"http://purl.org/vocab/vann/",vcard:"http://www.w3.org/2006/vcard/ns#",void:"http://rdfs.org/ns/void#",vs:"http://www.w3.org/2003/06/sw-vocab-status/ns#",vso:"http://purl.org/vso/ns#",wdrs:"http://www.w3.org/2007/05/powder-s#",wgs:"http://www.w3.org/2003/01/geo/wgs84_pos#",xhv:"http://www.w3.org/1999/xhtml/vocab#",xkos:"http://rdf-vocabulary.ddialliance.org/xkos#",xsd:"http://www.w3.org/2001/XMLSchema#"},xo={...E$,...A$};function x$(t,e={}){const r={...xo,...e},n=Array.from(Object.entries(r)).filter(([,i])=>t.startsWith(i));if(n.length){n.sort(([,o],[,s])=>s.length-o.length);const i=n[0];return t.replace(new RegExp(`^${i[1]}`),`${i[0]}:`)}return""}function T$(t){return class Xi extends z1{addAll(...[r]){return fr.addAll(this,r)}deleteMatches(...r){return fr.deleteMatch(this,...r)}equals(...[r]){return fr.equals(this,r)}forEach(r){Array.from(this).forEach(n=>r(n,this))}import(...[r]){return fr.fromStream(this,r)}filter(r){return new Xi([...this].filter(n=>r(n,this)))}map(r){return new Xi([...this].map(n=>r(n,this)))}match(...r){return super.match(...r)}merge(...[r]){return fr.addAll(new Xi([...this]),r)}toCanonical(){return fr.toCanonical(this)}toStream(){return fr.toStream(this)}async serialize({format:r,prefixes:n=[]}){const i=t.formats.serializers.get(r);return i?_$(i.import(this.toStream(),{prefixes:n.reduce((o,s)=>Array.isArray(s)?{...o,[s[0]]:s[1]}:s in xo?{...o,[s]:xo[s]}:o,{})})):this.toCanonical()}}}class P${constructor(){Cs(this,"dataset")}init(){const e=T$(this);this.dataset=(r=[])=>new e([...r]),this.dataset.Class=e}}function C$(){return new vc([cs,P$,rS,Pc,Oy,Iy,Cy,Ry,Ny])}const nn=C$(),R$=new vc([eS],{parent:nn});function te(t,e,r){const n=(s,a,{additionalMixins:l=[]}={})=>r.rdfine().factory.createEntity(s,[...t,...l],{initializer:{...e,...a||{}}}),i=(s,a,{additionalMixins:l=[]}={})=>c=>{const f=c||r.clownface(),p=typeof s=="string"?f.namedNode(s):f.node(s);return r.rdfine().factory.createEntity(p,[...t,...l],{initializer:{...e,...a||{}}})},o=(s,{additionalMixins:a=[]}={})=>l=>r.rdfine().factory.createEntity((l||r.clownface()).blankNode(),[...t,...a],{initializer:{...e,...s||{}}});return(s,a,l)=>typeof s=="object"&&"term"in s?n(s,a,l):typeof s=="object"&&s.termType==="NamedNode"||typeof s=="string"?i(s,a,l):o(s,a)}var In=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ii=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function ie(t){let e=class extends t{};return In([k.literal(),Ii("design:type",Object)],e.prototype,"comment",void 0),In([k.resource({as:[ie]}),Ii("design:type",Object)],e.prototype,"isDefinedBy",void 0),In([k.literal(),Ii("design:type",Object)],e.prototype,"label",void 0),In([k.resource({values:"array",as:[ie]}),Ii("design:type",Array)],e.prototype,"seeAlso",void 0),e=In([Z(ft)],e),e}ie.appliesTo=ft.Resource;ie.createFactory=t=>te([ie],{types:[ft.Resource]},t);var pt=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ct=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Cr(t){let e=class extends ie(t){};return pt([k.resource({values:"array",as:[Cr]}),Ct("design:type",Array)],e.prototype,"detail",void 0),pt([k(),Ct("design:type",Object)],e.prototype,"focusNode",void 0),pt([k.literal(),Ct("design:type",Object)],e.prototype,"resultMessage",void 0),pt([k.resource({as:[ie]}),Ct("design:type",Object)],e.prototype,"resultPath",void 0),pt([k.resource({implicitTypes:[C.Severity]}),Ct("design:type",Object)],e.prototype,"resultSeverity",void 0),pt([k(),Ct("design:type",Object)],e.prototype,"sourceConstraint",void 0),pt([k.resource({implicitTypes:[C.ConstraintComponent]}),Ct("design:type",Object)],e.prototype,"sourceConstraintComponent",void 0),pt([k.resource({implicitTypes:[C.Shape]}),Ct("design:type",Object)],e.prototype,"sourceShape",void 0),pt([k(),Ct("design:type",Object)],e.prototype,"value",void 0),e=pt([Z(C)],e),e}Cr.appliesTo=C.AbstractResult;Cr.createFactory=t=>te([ie,Cr],{types:[C.AbstractResult]},t);var Ta=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Uf=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function St(t){let e=class extends ie(t){};return Ta([k.literal(),Uf("design:type",Object)],e.prototype,"labelTemplate",void 0),Ta([k.resource({implicitTypes:[C.Parameter]}),Uf("design:type",Object)],e.prototype,"parameter",void 0),e=Ta([Z(C)],e),e}St.appliesTo=C.Parameterizable;St.createFactory=t=>te([ie,St],{types:[C.Parameterizable]},t);var Ni=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Pa=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function To(t){let e=class extends St(t){};return Ni([k.resource({implicitTypes:[C.Validator]}),Pa("design:type",Object)],e.prototype,"nodeValidator",void 0),Ni([k.resource({implicitTypes:[C.Validator]}),Pa("design:type",Object)],e.prototype,"propertyValidator",void 0),Ni([k.resource({implicitTypes:[C.Validator]}),Pa("design:type",Object)],e.prototype,"validator",void 0),e=Ni([Z(C)],e),e}To.appliesTo=C.ConstraintComponent;To.createFactory=t=>te([St,To],{types:[C.ConstraintComponent]},t);var Hf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},O$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function dt(t){let e=class extends ie(t){};return Hf([k.resource({values:"array",as:[dt]}),O$("design:type",Array)],e.prototype,"subClassOf",void 0),e=Hf([Z(ft)],e),e}dt.appliesTo=ft.Class;dt.createFactory=t=>te([ie,dt],{types:[ft.Class]},t);var qf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},$$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function er(t){let e=class extends St(t){};return qf([k.resource({as:[dt]}),$$("design:type",Object)],e.prototype,"returnType",void 0),e=qf([Z(C)],e),e}er.appliesTo=C.Function;er.createFactory=t=>te([St,er],{types:[C.Function]},t);var Wf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},I$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function We(t){let e=class extends ie(t){};return Wf([k.literal(),I$("design:type",Object)],e.prototype,"jsFunctionName",void 0),e=Wf([Z(C)],e),e}We.appliesTo=C.JSExecutable;We.createFactory=t=>te([ie,We],{types:[C.JSExecutable]},t);var N$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Po(t){let e=class extends We(t){};return e=N$([Z(C)],e),e}Po.appliesTo=C.JSConstraint;Po.createFactory=t=>te([We,Po],{types:[C.JSConstraint]},t);var L$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Co(t){let e=class extends We(er(t)){};return e=L$([Z(C)],e),e}Co.appliesTo=C.JSFunction;Co.createFactory=t=>te([We,er,Co],{types:[C.JSFunction]},t);var Vf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},M$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Ro(t){let e=class extends ie(t){};return Vf([k.literal(),M$("design:type",Object)],e.prototype,"jsLibraryURL",void 0),e=Vf([Z(C)],e),e}Ro.appliesTo=C.JSLibrary;Ro.createFactory=t=>te([ie,Ro],{types:[C.JSLibrary]},t);var Gf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},D$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function At(t){let e=class extends ie(t){};return Gf([k.resource({implicitTypes:[C.Shape]}),D$("design:type",Object)],e.prototype,"condition",void 0),e=Gf([Z(C)],e),e}At.appliesTo=C.Rule;At.createFactory=t=>te([ie,At],{types:[C.Rule]},t);var j$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Oo(t){let e=class extends At(We(t)){};return e=j$([Z(C)],e),e}Oo.appliesTo=C.JSRule;Oo.createFactory=t=>te([At,We,Oo],{types:[C.JSRule]},t);var k$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function tr(t){let e=class extends ie(t){};return e=k$([Z(C)],e),e}tr.appliesTo=C.Target;tr.createFactory=t=>te([ie,tr],{types:[C.Target]},t);var F$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function $o(t){let e=class extends tr(We(t)){};return e=F$([Z(C)],e),e}$o.appliesTo=C.JSTarget;$o.createFactory=t=>te([tr,We,$o],{types:[C.JSTarget]},t);var B$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function rr(t){let e=class extends St(dt(t)){};return e=B$([Z(C)],e),e}rr.appliesTo=C.TargetType;rr.createFactory=t=>te([St,dt,rr],{types:[C.TargetType]},t);var z$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Io(t){let e=class extends rr(We(t)){};return e=z$([Z(C)],e),e}Io.appliesTo=C.JSTargetType;Io.createFactory=t=>te([rr,We,Io],{types:[C.JSTargetType]},t);var U$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Et(t){let e=class extends ie(t){};return e=U$([Z(C)],e),e}Et.appliesTo=C.Validator;Et.createFactory=t=>te([ie,Et],{types:[C.Validator]},t);var H$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function No(t){let e=class extends Et(We(t)){};return e=H$([Z(C)],e),e}No.appliesTo=C.JSValidator;No.createFactory=t=>te([Et,We,No],{types:[C.JSValidator]},t);const q$={BlankNode:C.BlankNode,BlankNodeOrIRI:C.BlankNodeOrIRI,BlankNodeOrLiteral:C.BlankNodeOrLiteral,IRI:C.IRI,IRIOrLiteral:C.IRIOrLiteral,Literal:C.Literal},W$=q$;var V$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function bt(t){let e=class extends t{};return e=V$([Z(Or)],e),e}bt.appliesTo=Or.Property;bt.createFactory=t=>te([bt],{types:[Or.Property]},t);var je=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ze=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function ut(t){let e=class extends ie(t){};return je([k.resource({values:"list",as:[ut]}),ze("design:type",Array)],e.prototype,"and",void 0),je([k.resource({as:[dt]}),ze("design:type",Object)],e.prototype,"class",void 0),je([k.literal({type:Boolean}),ze("design:type",Object)],e.prototype,"closed",void 0),je([k({values:"list"}),ze("design:type",Array)],e.prototype,"in",void 0),je([k.resource({implicitTypes:[C.NodeShape]}),ze("design:type",Object)],e.prototype,"node",void 0),je([k(),ze("design:type",Object)],e.prototype,"nodeKind",void 0),je([k.resource({values:"list",as:[ut]}),ze("design:type",Array)],e.prototype,"or",void 0),je([k.resource({values:"array",implicitTypes:[C.PropertyShape]}),ze("design:type",Array)],e.prototype,"property",void 0),je([k.resource({implicitTypes:[C.Rule]}),ze("design:type",Object)],e.prototype,"rule",void 0),je([k.resource({implicitTypes:[C.Severity]}),ze("design:type",Object)],e.prototype,"severity",void 0),je([k.resource({implicitTypes:[C.SPARQLConstraint]}),ze("design:type",Object)],e.prototype,"sparql",void 0),je([k.resource({implicitTypes:[C.Target]}),ze("design:type",Object)],e.prototype,"target",void 0),je([k.resource({values:"array",as:[dt]}),ze("design:type",Array)],e.prototype,"targetClass",void 0),je([k({values:"array"}),ze("design:type",Array)],e.prototype,"targetNode",void 0),je([k.resource({as:[bt]}),ze("design:type",Object)],e.prototype,"targetObjectsOf",void 0),je([k.resource({as:[bt]}),ze("design:type",Object)],e.prototype,"targetSubjectsOf",void 0),je([k.resource({values:"list",as:[ut]}),ze("design:type",Array)],e.prototype,"xone",void 0),e=je([Z(C)],e),e}ut.appliesTo=C.Shape;ut.createFactory=t=>te([ie,ut],{types:[C.Shape]},t);var Yf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},G$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Lo(t){let e=class extends ut(t){};return Yf([k({values:"list"}),G$("design:type",Array)],e.prototype,"ignoredProperties",void 0),e=Yf([Z(C)],e),e}Lo.appliesTo=C.NodeShape;Lo.createFactory=t=>te([ut,Lo],{types:[C.NodeShape]},t);var Y$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Mo(t){let e=class extends dt(t){};return e=Y$([Z(ft)],e),e}Mo.appliesTo=ft.Datatype;Mo.createFactory=t=>te([dt,Mo],{types:[ft.Datatype]},t);var Re=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ie=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function dn(t){let e=class extends ut(t){};return Re([k.resource({path:C.equals,as:[bt]}),Ie("design:type",Object)],e.prototype,"_equals",void 0),Re([k.resource({as:[Mo]}),Ie("design:type",Object)],e.prototype,"datatype",void 0),Re([k(),Ie("design:type",Object)],e.prototype,"defaultValue",void 0),Re([k.literal(),Ie("design:type",Object)],e.prototype,"description",void 0),Re([k.resource({as:[bt]}),Ie("design:type",Object)],e.prototype,"disjoint",void 0),Re([k.literal(),Ie("design:type",Object)],e.prototype,"flags",void 0),Re([k.resource({implicitTypes:[C.PropertyGroup]}),Ie("design:type",Object)],e.prototype,"group",void 0),Re([k({values:"array"}),Ie("design:type",Array)],e.prototype,"hasValue",void 0),Re([k.literal({values:"list"}),Ie("design:type",Array)],e.prototype,"languageIn",void 0),Re([k.resource({as:[bt]}),Ie("design:type",Object)],e.prototype,"lessThan",void 0),Re([k.resource({as:[bt]}),Ie("design:type",Object)],e.prototype,"lessThanOrEquals",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"maxCount",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"maxExclusive",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"maxInclusive",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"maxLength",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"minCount",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"minExclusive",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"minInclusive",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"minLength",void 0),Re([k.literal(),Ie("design:type",Object)],e.prototype,"name",void 0),Re([k.literal({type:Number}),Ie("design:type",Object)],e.prototype,"order",void 0),Re([k.resource({values:["list","single"],as:[ie]}),Ie("design:type",Object)],e.prototype,"path",void 0),Re([k.literal(),Ie("design:type",Object)],e.prototype,"pattern",void 0),Re([k.literal({type:Boolean}),Ie("design:type",Object)],e.prototype,"uniqueLang",void 0),e=Re([Z(C)],e),e}dn.appliesTo=C.PropertyShape;dn.createFactory=t=>te([ut,dn],{types:[C.PropertyShape]},t);var Jf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},J$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Do(t){let e=class extends dn(t){};return Jf([k.literal({type:Boolean}),J$("design:type",Object)],e.prototype,"optional",void 0),e=Jf([Z(C)],e),e}Do.appliesTo=C.Parameter;Do.createFactory=t=>te([dn,Do],{types:[C.Parameter]},t);var Ca=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Qf=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function jo(t){let e=class extends ie(t){};return Ca([k.literal(),Qf("design:type",Object)],e.prototype,"namespace",void 0),Ca([k.literal(),Qf("design:type",Object)],e.prototype,"prefix",void 0),e=Ca([Z(C)],e),e}jo.appliesTo=C.PrefixDeclaration;jo.createFactory=t=>te([ie,jo],{types:[C.PrefixDeclaration]},t);var Kf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Q$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function ko(t){let e=class extends ie(t){};return Kf([k.literal({type:Number}),Q$("design:type",Object)],e.prototype,"order",void 0),e=Kf([Z(C)],e),e}ko.appliesTo=C.PropertyGroup;ko.createFactory=t=>te([ie,ko],{types:[C.PropertyGroup]},t);var Li=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ra=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Fo(t){let e=class extends ie(t){};return Li([k.resource({as:[bt]}),Ra("design:type",Object)],e.prototype,"annotationProperty",void 0),Li([k(),Ra("design:type",Object)],e.prototype,"annotationValue",void 0),Li([k.literal(),Ra("design:type",Object)],e.prototype,"annotationVarName",void 0),e=Li([Z(C)],e),e}Fo.appliesTo=C.ResultAnnotation;Fo.createFactory=t=>te([ie,Fo],{types:[C.ResultAnnotation]},t);var K$=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Bo(t){let e=class extends ie(t){};return e=K$([Z(C)],e),e}Bo.appliesTo=C.Severity;Bo.createFactory=t=>te([ie,Bo],{types:[C.Severity]},t);var Oa=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Xf=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function ci(t){let e=class extends t{};return Oa([k(),Xf("design:type",Object)],e.prototype,"first",void 0),Oa([k.resource({as:[ci]}),Xf("design:type",Object)],e.prototype,"rest",void 0),e=Oa([Z(Or)],e),e}ci.appliesTo=Or.List;ci.createFactory=t=>te([ci],{types:[Or.List]},t);var hr=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},zr=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Wm(t){let e=class extends t{};return hr([k.resource({as:[ie]}),zr("design:type",Object)],e.prototype,"annotatedProperty",void 0),hr([k.resource({as:[ie]}),zr("design:type",Object)],e.prototype,"annotatedSource",void 0),hr([k.resource({as:[ie]}),zr("design:type",Object)],e.prototype,"annotatedTarget",void 0),hr([k.resource({as:[ie]}),zr("design:type",Object)],e.prototype,"deprecated",void 0),hr([k.resource({as:[ci]}),zr("design:type",Object)],e.prototype,"members",void 0),hr([k.resource({as:[ie]}),zr("design:type",Object)],e.prototype,"versionInfo",void 0),e=hr([Z(hi)],e),e}Wm.appliesTo=ft.Resource;var Ur=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Nn=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Nt(t){let e=class extends Wm(ie(t)){};return Ur([k.resource({as:[Nt]}),Nn("design:type",Object)],e.prototype,"backwardCompatibleWith",void 0),Ur([k.resource({as:[Nt]}),Nn("design:type",Object)],e.prototype,"imports",void 0),Ur([k.resource({as:[Nt]}),Nn("design:type",Object)],e.prototype,"incompatibleWith",void 0),Ur([k.resource({as:[Nt]}),Nn("design:type",Object)],e.prototype,"priorVersion",void 0),Ur([k.resource({as:[Nt]}),Nn("design:type",Object)],e.prototype,"versionIRI",void 0),e=Ur([Z(hi)],e),e}Nt.appliesTo=hi.Ontology;Nt.createFactory=t=>te([ie,Nt],{types:[hi.Ontology]},t);var Zf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},X$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function st(t){let e=class extends ie(t){};return Zf([k.resource({as:[Nt]}),X$("design:type",Object)],e.prototype,"prefixes",void 0),e=Zf([Z(C)],e),e}st.appliesTo=C.SPARQLExecutable;st.createFactory=t=>te([ie,st],{types:[C.SPARQLExecutable]},t);var eh=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Z$=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function at(t){let e=class extends st(t){};return eh([k.literal(),Z$("design:type",Object)],e.prototype,"ask",void 0),e=eh([Z(C)],e),e}at.appliesTo=C.SPARQLAskExecutable;at.createFactory=t=>te([st,at],{types:[C.SPARQLAskExecutable]},t);var eI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function zo(t){let e=class extends Et(at(t)){};return e=eI([Z(C)],e),e}zo.appliesTo=C.SPARQLAskValidator;zo.createFactory=t=>te([Et,at,zo],{types:[C.SPARQLAskValidator]},t);var th=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},tI=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function et(t){let e=class extends st(t){};return th([k.literal(),tI("design:type",Object)],e.prototype,"select",void 0),e=th([Z(C)],e),e}et.appliesTo=C.SPARQLSelectExecutable;et.createFactory=t=>te([st,et],{types:[C.SPARQLSelectExecutable]},t);var rI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Uo(t){let e=class extends et(t){};return e=rI([Z(C)],e),e}Uo.appliesTo=C.SPARQLConstraint;Uo.createFactory=t=>te([et,Uo],{types:[C.SPARQLConstraint]},t);var rh=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},nI=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function fn(t){let e=class extends st(t){};return rh([k.literal(),nI("design:type",Object)],e.prototype,"construct",void 0),e=rh([Z(C)],e),e}fn.appliesTo=C.SPARQLConstructExecutable;fn.createFactory=t=>te([st,fn],{types:[C.SPARQLConstructExecutable]},t);var iI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Ho(t){let e=class extends et(at(er(t))){};return e=iI([Z(C)],e),e}Ho.appliesTo=C.SPARQLFunction;Ho.createFactory=t=>te([et,at,er,Ho],{types:[C.SPARQLFunction]},t);var oI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function qo(t){let e=class extends fn(At(t)){};return e=oI([Z(C)],e),e}qo.appliesTo=C.SPARQLRule;qo.createFactory=t=>te([fn,At,qo],{types:[C.SPARQLRule]},t);var nh=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},sI=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Wo(t){let e=class extends Et(et(t)){};return nh([k.resource({implicitTypes:[C.ResultAnnotation]}),sI("design:type",Object)],e.prototype,"resultAnnotation",void 0),e=nh([Z(C)],e),e}Wo.appliesTo=C.SPARQLSelectValidator;Wo.createFactory=t=>te([Et,et,Wo],{types:[C.SPARQLSelectValidator]},t);var aI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Vo(t){let e=class extends tr(et(at(t))){};return e=aI([Z(C)],e),e}Vo.appliesTo=C.SPARQLTarget;Vo.createFactory=t=>te([tr,et,at,Vo],{types:[C.SPARQLTarget]},t);var lI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Go(t){let e=class extends rr(et(at(t))){};return e=lI([Z(C)],e),e}Go.appliesTo=C.SPARQLTargetType;Go.createFactory=t=>te([rr,et,at,Go],{types:[C.SPARQLTargetType]},t);var ih=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},cI=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Yo(t){let e=class extends st(t){};return ih([k.literal(),cI("design:type",Object)],e.prototype,"update",void 0),e=ih([Z(C)],e),e}Yo.appliesTo=C.SPARQLUpdateExecutable;Yo.createFactory=t=>te([st,Yo],{types:[C.SPARQLUpdateExecutable]},t);var Mi=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},$a=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Jo(t){let e=class extends At(t){};return Mi([k(),$a("design:type",Object)],e.prototype,"object",void 0),Mi([k(),$a("design:type",Object)],e.prototype,"predicate",void 0),Mi([k(),$a("design:type",Object)],e.prototype,"subject",void 0),e=Mi([Z(C)],e),e}Jo.appliesTo=C.TripleRule;Jo.createFactory=t=>te([At,Jo],{types:[C.TripleRule]},t);var Di=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ia=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)};function Qo(t){let e=class extends ie(t){};return Di([k.literal({type:Boolean}),Ia("design:type",Object)],e.prototype,"conforms",void 0),Di([k.resource({values:"array",implicitTypes:[C.ValidationResult]}),Ia("design:type",Array)],e.prototype,"result",void 0),Di([k.literal({type:Boolean}),Ia("design:type",Object)],e.prototype,"shapesGraphWellFormed",void 0),e=Di([Z(C)],e),e}Qo.appliesTo=C.ValidationReport;Qo.createFactory=t=>te([ie,Qo],{types:[C.ValidationReport]},t);var uI=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function Ko(t){let e=class extends Cr(t){};return e=uI([Z(C)],e),e}Ko.appliesTo=C.ValidationResult;Ko.createFactory=t=>te([Cr,Ko],{types:[C.ValidationResult]},t);const dI=Object.freeze(Object.defineProperty({__proto__:null,AbstractResultMixin:Cr,ConstraintComponentMixin:To,FunctionMixin:er,JSConstraintMixin:Po,JSExecutableMixin:We,JSFunctionMixin:Co,JSLibraryMixin:Ro,JSRuleMixin:Oo,JSTargetMixin:$o,JSTargetTypeMixin:Io,JSValidatorMixin:No,NodeKindEnum:W$,NodeShapeMixin:Lo,ParameterMixin:Do,ParameterizableMixin:St,PrefixDeclarationMixin:jo,PropertyGroupMixin:ko,PropertyShapeMixin:dn,ResultAnnotationMixin:Fo,RuleMixin:At,SPARQLAskExecutableMixin:at,SPARQLAskValidatorMixin:zo,SPARQLConstraintMixin:Uo,SPARQLConstructExecutableMixin:fn,SPARQLExecutableMixin:st,SPARQLFunctionMixin:Ho,SPARQLRuleMixin:qo,SPARQLSelectExecutableMixin:et,SPARQLSelectValidatorMixin:Wo,SPARQLTargetMixin:Vo,SPARQLTargetTypeMixin:Go,SPARQLUpdateExecutableMixin:Yo,SeverityMixin:Bo,ShapeMixin:ut,TargetMixin:tr,TargetTypeMixin:rr,TripleRuleMixin:Jo,ValidationReportMixin:Qo,ValidationResultMixin:Ko,ValidatorMixin:Et},Symbol.toStringTag,{value:"Module"}));class fI{init(){this.rdfine.sh=this._initVocabulary(dI)}}const Na=new vc([fI],{parent:R$}),hI=es({state:{display:"tree",conforms:void 0,results:[]},reducers:{report(t,e){const r=e.results.map(Na.clownface);return{...t,results:r,conforms:e.conforms,report:e}},display(t,e){return{...t,display:e}}},effects(t){const e=t.getDispatch();async function r(){const{shapesGraph:n,dataGraph:i}=t.getState();if(n.quads&&i.quads){const o=(await Rt(()=>import("./index-CnnLA-PM.js"),__vite__mapDeps([0,1]))).default,s=new o(Na.dataset(n.quads));e.validation.report(s.validate(Na.dataset(i.quads)))}}return{"dataGraph/parsed":r,"shapesGraph/parsed":r}}}),{xsd:Ln}=nn.ns,Mt={string:Ln.string,integer:Ln.integer,decimal:Ln.decimal,boolean:Ln.boolean,dateTime:Ln.dateTime};class pI{evaluateTerm(e,r){switch(e.termType){case"Literal":return this.evaluateLiteral(e,r);case"NamedNode":return this.evaluateNamedNode(e,r);case"BlankNode":return this.evaluateBlankNode(e);case"Variable":return this.evaluateVariable(e)}return{value:"",prefixes:[]}}}function yI(t){return Symbol.iterator in Object(t)&&typeof t!="string"}class mI{constructor({strings:e,values:r,tag:n,strategy:i,defaultOptions:o}){this.strings=e,this.values=r,this._tag=n,this.__strategy=i,this.__defaultOptions=o}toString(e){let r=this.__defaultOptions;e&&(r={...r,...e});const{value:n,prefixes:i}=this._toPartialString(r);return this.__strategy.getFinalString(n,i,r)}_toPartialString(e){const r=new Set,n=this.strings.length-1;let i="";for(let o=0;o<n;o++){let s=null;i+=this.strings[o];const a=this.values[o];if(!(typeof a>"u"||a===null)){if(typeof a=="boolean")s=this.__strategy.evaluateLiteral(nn.literal(a.toString(),Mt.boolean),e);else if(typeof a=="number"){const l=Number.isInteger(a)?Mt.integer:Mt.decimal;s=this.__strategy.evaluateLiteral(nn.literal(a.toString(),l),e)}else if(a instanceof Date)s=this.__strategy.evaluateLiteral(nn.literal(a.toISOString(),Mt.dateTime),e);else if(typeof a=="object"){if("_toPartialString"in a)s=a._toPartialString(e);else if("subject"in a)s=this.__strategy.evaluateQuad(a,e);else if("match"in a)s=this.__strategy.evaluateDataset(a,e);else if("termType"in a)s=this.__strategy.evaluateTerm(a,e);else if(yI(a)){const[l,...c]=a;s=this._tag`${l}`._toPartialString(e);for(const f of c){const p=this._tag`${f}`._toPartialString(e);s.value+=`
${p.value}`,s.prefixes=[...s.prefixes,...p.prefixes]}}}s===null&&(s={value:a.toString(),prefixes:[]}),i+=s.value,[...s.prefixes].forEach(l=>r.add(l))}}return i+=this.strings[n],{value:i,prefixes:r}}}function Vm(t={}){return Object.fromEntries(Object.entries(t).map(([e,r])=>[e,typeof r=="string"?r:r().value]))}function _I(t,e){return[...t].filter(r=>r in e).map(r=>[r,e[r]])}const gI=new RegExp(`["\\\\
\r]`),bI=new RegExp(`["\\\\
\r]`,"g"),wI={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function vI(t){return wI[t]}function SI(t){return gI.test(t)?t.replace(bI,vI):t}function AI(t){return`_:${t.value}`}function EI(t){return`<${t.value}>`}function Gm(t){return`"${SI(t.value)}"`}function xI(t){const e=Gm(t);return t.language?`${e}@${t.language}`:t.datatype&&!t.datatype.equals(Mt.string)?`${e}^^${EI(t.datatype)}`:e}function TI(t){return AI(t)}function Ym(t,{base:e="",prefixes:r={},noPrefixedNames:n}){const i=typeof e=="string"?e:e.value,o=new RegExp("^"+i);let s;return n!==!0&&(s=x$(t.value,Vm(r)))?{value:s,prefixes:[s.split(":")[0]]}:{value:`<${t.value.replace(o,"")}>`,prefixes:[]}}function PI(t){return t.equals(Mt.integer)||t.equals(Mt.boolean)||t.equals(Mt.decimal)}function CI(t,{base:e="",prefixes:r={}}){if(!t.language&&t.datatype){if(PI(t.datatype))return{value:t.value,prefixes:[]};if(!t.datatype.equals(Mt.string)){const n=Ym(t.datatype,{base:e,prefixes:r});return{value:`${Gm(t)}^^${n.value}`,prefixes:n.prefixes}}}return{value:xI(t),prefixes:[]}}function RI(t,e){return _I(t,e).map(([r,n])=>`@prefix ${r}: <${n}> .`)}class OI extends pI{evaluateBlankNode(e){return{value:TI(e),prefixes:[]}}evaluateLiteral(e,r){return CI(e,r)}evaluateNamedNode(e,r){return Ym(e,r)}evaluateVariable(){throw new Error("Turtle cannot serialize variables")}evaluateDataset(e,r){const n=[...e.match(null,null,null,r.graph)];return r.cheapCompression?this.__evaluateQuads(n,r):[...n.reduce((o,s)=>{let a=o.get(s.subject.value);return a||(a=new Set,o.set(s.subject.value,a)),a.add(s),o},new Map).values()].reduce((o,s,a)=>{const l=this.__evaluateQuads([...s],r),c=a?`
`:"";return{value:`${o.value}${c}${l.value}`,prefixes:[...o.prefixes,...l.prefixes]}},{value:"",prefixes:[]})}evaluateQuad(e,r,{terminate:n=!0,newLineAfterSubject:i=!1}={}){if(!r.graph.equals(e.graph))return{value:"",prefixes:[]};const o=this.evaluateTerm(e.subject,r),s=this.evaluateTerm(e.predicate,r),a=this.evaluateTerm(e.object,r),l=i?`
   `:" ";return{value:`${o.value}${l}${s.value} ${a.value}${n?" .":""}`,prefixes:[...o.prefixes,...s.prefixes,...a.prefixes]}}getFinalString(e,r,n){const i=n.directives||typeof n.directives>"u";let o=[];if(i){if(o=RI(r,{...xo,...Vm(n.prefixes)}),n.base){const s=typeof n.base=="string"?n.base:n.base.value;o.push(`@base <${s}> .`)}o.length>0&&o.push(`
`)}return`${o.join(`
`)}${e}`}__evaluateQuads(e,r){if(e.length===0)return{value:"",prefixes:[]};let n=e;r.cheapCompression||(n=e.sort((o,s)=>o.predicate.value.localeCompare(s.predicate.value)));const i=n.reduce((o,s)=>{if(!o.previous)return{...this.evaluateQuad(s,r,{terminate:!1,newLineAfterSubject:!0}),previous:s};if(o.previous.subject.equals(s.subject)&&o.previous.predicate.equals(s.predicate))return{...this.__appendObject(o,s,r),previous:s};if(o.previous.subject.equals(s.subject))return{...this.__appendPredicateObject(o,s,r),previous:s};const a=this.evaluateQuad(s,r,{terminate:!1,newLineAfterSubject:!0});return{value:o.value+` .
`+a.value,prefixes:[...o.prefixes,...a.prefixes],previous:s}},{value:"",prefixes:[]});return{...i,value:i.value+" ."}}__appendPredicateObject(e,r,n){const i=this.evaluateTerm(r.predicate,n),o=this.evaluateTerm(r.object,n);return{value:`${e.value} ;
   ${i.value} ${o.value}`,prefixes:[...e.prefixes,...i.prefixes,...o.prefixes]}}__appendObject(e,r,n){const i=this.evaluateTerm(r.object,n);return{value:`${e.value} ,
      ${i.value}`,prefixes:[...e.prefixes,...i.prefixes]}}}const Fl=(t,...e)=>new mI({strings:t,values:e,tag:Fl,strategy:new OI,defaultOptions:{directives:!0,graph:nn.defaultGraph(),cheapCompression:!1}});function $I(t,e,{instanceUrl:r="https://shacl-playground.zazuko.com",dataGraphFormat:n="text/turtle",shapesGraphFormat:i="text/turtle",dataGraphCustomPrefixes:o,shapesGraphCustomPrefixes:s}={}){const a=new URL(r),l=new URLSearchParams([["shapesGraph",Fl`${t}`.toString()],["dataGraph",Fl`${e}`.toString()],["shapesGraphFormat",i],["dataGraphFormat",n]]);return o&&l.set("dataGraphCustomPrefixes",JSON.stringify(o)),s&&l.set("shapesGraphCustomPrefixes",JSON.stringify(s)),a.hash=l.toString(),a.toString()}const Jm=new URL(window.location.href),II=Object.fromEntries([...new URLSearchParams(Jm.hash.substr(1)).entries()]),NI=es({state:{page:3,shaperone:new URL("https://forms.hypermedia.app/playground/").toString(),sharingLink:Jm.toString(),sharingParams:II},reducers:{switchPage(t,e){return{...t,page:e}},setShaperoneParam(t,{key:e,value:r}){const n=new URL(t.shaperone),i=new URLSearchParams(n.hash.substr(1));return i.set(e,r),n.hash=i.toString(),{...t,shaperone:n.toString()}},setSharingParam(t,{key:e,value:r}){const{shapesGraph:n,dataGraph:i,...o}=t.sharingParams||{},s=$I(n,i,{...o,instanceUrl:window.location.href});return{...t,sharingParams:{shapesGraph:n,dataGraph:i,...o,[e]:r},sharingLink:s}}},effects(t){const e=t.getDispatch();return{switchPage(r){e.playground.setSharingParam({key:"page",value:r})},"dataGraph/parsed":function({serialized:r}){const{format:n}=t.getState().dataGraph;e.playground.setShaperoneParam({key:"resource",value:r}),e.playground.setShaperoneParam({key:"resourceFormat",value:n}),e.playground.setSharingParam({key:"dataGraph",value:r}),e.playground.setSharingParam({key:"dataGraphFormat",value:n})},"shapesGraph/parsed":function({serialized:r}){const{format:n}=t.getState().shapesGraph;e.playground.setShaperoneParam({key:"shapes",value:r}),e.playground.setShaperoneParam({key:"shapesFormat",value:n}),e.playground.setSharingParam({key:"shapesGraph",value:r}),e.playground.setSharingParam({key:"shapesGraphFormat",value:n})},"dataGraph/setCustomPrefix":function(){e.playground.setSharingParam({key:"dataGraphCustomPrefixes",value:t.getState().dataGraph.customPrefixes})},"shapesGraph/setCustomPrefix":function(){e.playground.setSharingParam({key:"shapesGraphCustomPrefixes",value:t.getState().shapesGraph.customPrefixes})},restoreState(){const r=new URL(document.location.toString()),n=new URLSearchParams(r.hash.substr(1));function i(y){return n.get(y)||r.searchParams.get(y)}const o=i("page"),s=i("shapesGraph"),a=i("shapesGraphFormat"),l=i("shapesGraphCustomPrefixes"),c=i("dataGraph"),f=i("dataGraphFormat"),p=i("dataGraphCustomPrefixes");o&&e.playground.switchPage(Number.parseInt(o,10)),s&&e.shapesGraph.setGraph(s),a&&e.shapesGraph.changeFormat(a),l&&e.shapesGraph.replaceCustomPrefixes(JSON.parse(l)),c&&e.dataGraph.setGraph(c),f&&e.dataGraph.changeFormat(f),p&&e.dataGraph.replaceCustomPrefixes(JSON.parse(p)),[...r.searchParams.keys()].forEach(y=>r.searchParams.delete(y)),r.hash="",window.history.replaceState(null,"",r.toString())}}}}),LI=Object.freeze(Object.defineProperty({__proto__:null,dataGraph:E0,playground:NI,shapesGraph:S0,validation:hI},Symbol.toStringTag,{value:"Module"})),La=D_(M_({models:LI}),{persist(t){const{dataGraph:{quads:e,...r},shapesGraph:{quads:n,...i},validation:o,...s}=t;return{shapesGraph:i,dataGraph:r,...s}}}),ji={SHAPES:0,DATA:1,REPORT:2,ABOUT:3},Wt={DataGraph:"Data Graph",ShapesGraph:"Shapes Graph",Report:"Validation Report"};class MI extends I_(La,Fn){static get styles(){return Ve`
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
        margin-right: 0;
      }

      vaadin-tab:first-child {
        margin-left: 0;
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
    `}static get properties(){return{page:{type:Number},reportClass:{type:String},reportIcon:{type:String},sharingLink:{type:String},sharingLinkShortened:{type:Boolean},sharingDialogOpen:{type:Boolean},__wideDisplay:{type:Boolean,reflect:!0,attribute:"wide"}}}constructor(){super(),this.reportIcon="vaadin:bug-o"}connectedCallback(){super.connectedCallback(),Rt(()=>import("./vaadin-drawer-toggle-CZrq_8T-.js"),__vite__mapDeps([2,3])),Rt(()=>import("./iron-icon-CL_xrCqV.js").then(e=>e.i),__vite__mapDeps([])),Rt(()=>import("./vaadin-dialog-CDiyHrXP.js"),__vite__mapDeps([4,5])),Rt(()=>import("./vaadin-icons-CtON8nuc.js"),__vite__mapDeps([6,7])),Rt(()=>import("./graph-editor-Daw-tXNj.js"),__vite__mapDeps([8,9,10,3,5])),Rt(()=>import("./index-B1ww7QDV.js"),__vite__mapDeps([])),La.dispatch.playground.restoreState()}render(){return En`
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
          @selected-changed="${e=>this.__pageSelected(e.detail.value)}"
        >
          <vaadin-tab theme="icon-on-top" title="${Wt.ShapesGraph}">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>${Wt.ShapesGraph}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top" title="${Wt.DataGraph}">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>${Wt.DataGraph}</span>
          </vaadin-tab>
          <vaadin-tab
            class="report ${this.reportClass}"
            theme="icon-on-top"
            title="${Wt.Report}"
          >
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>${Wt.Report}</span>
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
        @opened-changed="${e=>{this.sharingDialogOpen=e.detail.value}}"
      >
      </vaadin-dialog>
    `}__renderWide(){Rt(()=>import("./validation-report-D54zjyYX.js"),__vite__mapDeps([11,10,3]));const e=this.page===ji.ABOUT?1:0;return En`
      <iron-pages selected="${e}">
        <vaadin-split-layout id="top-split" orientation="vertical">
          <vaadin-split-layout style="height: 60%">
            <graph-editor
              style="width: 50%"
              model="shapesGraph"
              @focus="${()=>this.__pageSelected(ji.SHAPES)}"
            >
              <h2 slot="header">${Wt.ShapesGraph}</h2>
            </graph-editor>
            <graph-editor
              style="width: 50%"
              model="dataGraph"
              @focus="${()=>this.__pageSelected(ji.DATA)}"
            >
              <h2 slot="header">${Wt.DataGraph}</h2>
            </graph-editor>
          </vaadin-split-layout>
          <validation-report
            style="height: 40%"
            @click="${()=>this.__pageSelected(ji.REPORT)}"
          ></validation-report>
        </vaadin-split-layout>
        <section>${this.__renderAbout()}</section>
      </iron-pages>
    `}__renderNarrow(){return En`
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
        <section>${this.__renderAbout()}</section>
      </iron-pages>
    `}__renderAbout(){return En`
      <zero-md src="/README.md"> </zero-md>
      <h2>Changelog</h2>
      <zero-md src="/CHANGELOG.md">
        <template>
          <style>
            h1 {
              display: none;
            }
          </style>
        </template>
      </zero-md>
      <p>Copyright © 2021 Zazuko GmbH</p>
    `}__renderSharingDialog(e){return r=>{var i;let n;r.firstElementChild?n=r.firstElementChild:(n=document.createElement("div"),r.appendChild(n)),Rh(En`
          <vaadin-text-field
            style="width:500px"
            readonly
            autoselect
            label="Copy this URL to share playground"
            .value="${e.sharingLink}"
          ></vaadin-text-field>
          <br />
          <vaadin-button
            ?disabled="${e.sharingLinkShortened}"
            @click="${e.__shortenSharingLink.bind(e)}"
          >
            Shorten
          </vaadin-button>
        `,n),(i=n.querySelector("vaadin-text-field"))==null||i.focus()}}mapState(e){let r="";return e.validation.conforms?r="valid":e.validation.conforms===!1&&(r="invalid"),{reportClass:r,reportIcon:e.validation.conforms?"vaadin:bug-o":"vaadin:bug",page:e.playground.page,shaperoneLink:e.playground.shaperone,sharingLink:e.playground.sharingLink,sharingLinkShortened:!1}}__pageSelected(e){La.dispatch.playground.switchPage(e)}__reset(){localStorage.removeItem(document.location.hostname),document.location.reload()}__loadPage(e){e.detail.item.id==="validation-report"&&Rt(()=>import("./validation-report-D54zjyYX.js"),__vite__mapDeps([11,10,3]))}__openPlayground(){window.open(this.shaperoneLink,"shaperone")}__openCode(){window.open("https://github.com/zazuko/shacl-playground","_blank")}__openSharingDialog(){this.sharingDialogOpen=!0}async __shortenSharingLink(){this.sharingLinkShortened||(this.sharingLinkShortened=!0,this.sharingLink=await h0.shorten(this.sharingLink))}__setWideDisplay(e){this.__wideDisplay=e.detail.value}}customElements.define("shacl-playground",MI);export{JS as $,yo as A,Zu as B,nc as C,Gb as D,mn as E,Dt as F,pI as G,xI as H,EI as I,AI as J,Cp as K,mI as L,Aw as M,Sw as N,xw as O,Ht as P,Rc as Q,nn as R,oc as S,k_ as T,Pc as U,cs as V,z1 as W,L as X,$S as Y,_1 as Z,Rt as _,VI as a,Or as a0,OS as a1,n_ as a2,hn as a3,ui as a4,xt as a5,yP as a6,Om as a7,Jc as a8,Vt as a9,Jt as aa,zO as ab,UO as ac,HO as ad,WO as ae,ZO as af,Na as ag,x$ as ah,zI as ai,sn as aj,Id as ak,jI as al,yN as am,tS as an,r_ as ao,rS as ap,Tw as b,as as c,gt as d,lN as e,yn as f,Cw as g,Rr as h,Ve as i,Be as j,Op as k,Pw as l,iw as m,Ap as n,_p as o,xo as p,I_ as q,zt as r,Fn as s,zb as t,La as u,Rh as v,Z_ as w,En as x,ew as y,Jh as z};
