const __vite__fileDeps=["assets/index-DHN7dA8i.js","assets/index-sQkBqab4.js","assets/vaadin-drawer-toggle-Dm-j_s5o.js","assets/dom-utils-DPL7MVhW.js","assets/vaadin-dialog-CN4Bo4jI.js","assets/templates-Dfdgit8i.js","assets/vaadin-icons-BVbHMYI2.js","assets/iron-icon-BrafWa4-.js","assets/graph-editor-BRS5OkvR.js","assets/rdf-editor-CmXWlMyL.js","assets/vaadin-item-CMeNBG6v.js","assets/validation-report-BKzM_FtG.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Ed=Object.defineProperty;var Pd=(e,t,r)=>t in e?Ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var To=(e,t,r)=>(Pd(e,typeof t!="symbol"?t+"":t,r),r);const Td=Object.freeze(Object.defineProperty({__proto__:null,get _void(){return uw},get acl(){return Fy},get as(){return ky},get bibo(){return Uy},get cc(){return qy},get cert(){return Gy},get cnt(){return Yy},get constant(){return Qy},get crm(){return Xy},get csvw(){return tg},get ctag(){return rg},get dash(){return og},get dashSparql(){return ig},get dbo(){return lg},get dc11(){return ug},get dcam(){return hg},get dcat(){return fg},get dcmitype(){return _g},get dcterms(){return gg},get default(){return Xu},get dig(){return vg},get discipline(){return xg},get doap(){return Ag},get dpv(){return Eg},get dqv(){return Tg},get dtype(){return Rg},get duv(){return Ng},get earl(){return Lg},get ebucore(){return Dg},get exif(){return Fg},get foaf(){return kg},get frbr(){return Ug},get geo(){return qg},get geof(){return Gg},get geor(){return Yg},get gml(){return Qg},get gn(){return Xg},get gr(){return tb},get grddl(){return rb},get gs1(){return ib},get gtfs(){return ob},get http(){return lb},get hydra(){return ub},get ical(){return hb},get la(){return fb},get ldp(){return _b},get list(){return gb},get locn(){return vb},get log(){return xb},get lvont(){return Ab},get m4i(){return Eb},get ma(){return Tb},get mads(){return Rb},get math(){return Nb},get oa(){return Lb},get og(){return Db},get oidc(){return Fb},get org(){return kb},get owl(){return Nr},get pim(){return Hb},get prefix(){return Vb},get prov(){return Jb},get qb(){return Wb},get qkdv(){return Kb},get quantitykind(){return Zb},get qudt(){return ev},get rdau(){return nv},get rdf(){return ye},get rdfa(){return ov},get rdfs(){return mt},get rev(){return cv},get rico(){return dv},get rif(){return Sw},get rr(){return pv},get rss(){return mv},get schema(){return yv},get sd(){return bv},get sdmx(){return wv},get sem(){return Sv},get set(){return Cv},get sf(){return Pv},get sh(){return b},get shex(){return Rv},get shsh(){return Nv},get sioc(){return Lv},get skos(){return Dv},get skosxl(){return Fv},get solid(){return kv},get sosa(){return Uv},get sou(){return qv},get ssn(){return Gv},get stat(){return Yv},get string(){return Qv},get test(){return Xv},get time(){return tw},get unit(){return rw},get v(){return Cw},get vaem(){return iw},get vann(){return ow},get vcard(){return lw},get vs(){return hw},get wdr(){return Pw},get wdrs(){return fw},get wgs(){return _w},get xhv(){return gw},get xkos(){return vw},get xml(){return Ow},get xsd(){return xt}},Symbol.toStringTag,{value:"Module"}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Lx=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function me(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mx(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}),r}var Pl={exports:{}},q=Pl.exports={},gt,bt;function ki(){throw new Error("setTimeout has not been defined")}function zi(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?gt=setTimeout:gt=ki}catch{gt=ki}try{typeof clearTimeout=="function"?bt=clearTimeout:bt=zi}catch{bt=zi}})();function Tl(e){if(gt===setTimeout)return setTimeout(e,0);if((gt===ki||!gt)&&setTimeout)return gt=setTimeout,setTimeout(e,0);try{return gt(e,0)}catch{try{return gt.call(null,e,0)}catch{return gt.call(this,e,0)}}}function Od(e){if(bt===clearTimeout)return clearTimeout(e);if((bt===zi||!bt)&&clearTimeout)return bt=clearTimeout,clearTimeout(e);try{return bt(e)}catch{try{return bt.call(null,e)}catch{return bt.call(this,e)}}}var It=[],Oe=!1,ie,Wr=-1;function Rd(){!Oe||!ie||(Oe=!1,ie.length?It=ie.concat(It):Wr=-1,It.length&&Ol())}function Ol(){if(!Oe){var e=Tl(Rd);Oe=!0;for(var t=It.length;t;){for(ie=It,It=[];++Wr<t;)ie&&ie[Wr].run();Wr=-1,t=It.length}ie=null,Oe=!1,Od(e)}}q.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];It.push(new Rl(e,t)),It.length===1&&!Oe&&Tl(Ol)};function Rl(e,t){this.fun=e,this.array=t}Rl.prototype.run=function(){this.fun.apply(null,this.array)};q.title="browser";q.browser=!0;q.env={};q.argv=[];q.version="";q.versions={};function Dt(){}q.on=Dt;q.addListener=Dt;q.once=Dt;q.off=Dt;q.removeListener=Dt;q.removeAllListeners=Dt;q.emit=Dt;q.prependListener=Dt;q.prependOnceListener=Dt;q.listeners=function(e){return[]};q.binding=function(e){throw new Error("process.binding is not supported")};q.cwd=function(){return"/"};q.chdir=function(e){throw new Error("process.chdir is not supported")};q.umask=function(){return 0};var $d=Pl.exports;const Nd=me($d);var $l={},Jn={};Jn.byteLength=Md;Jn.toByteArray=jd;Jn.fromByteArray=kd;var vt=[],ut=[],Id=typeof Uint8Array<"u"?Uint8Array:Array,ci="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var xe=0,Ld=ci.length;xe<Ld;++xe)vt[xe]=ci[xe],ut[ci.charCodeAt(xe)]=xe;ut[45]=62;ut[95]=63;function Nl(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");r===-1&&(r=t);var n=r===t?0:4-r%4;return[r,n]}function Md(e){var t=Nl(e),r=t[0],n=t[1];return(r+n)*3/4-n}function Dd(e,t,r){return(t+r)*3/4-r}function jd(e){var t,r=Nl(e),n=r[0],i=r[1],s=new Id(Dd(e,n,i)),o=0,a=i>0?n-4:n,l;for(l=0;l<a;l+=4)t=ut[e.charCodeAt(l)]<<18|ut[e.charCodeAt(l+1)]<<12|ut[e.charCodeAt(l+2)]<<6|ut[e.charCodeAt(l+3)],s[o++]=t>>16&255,s[o++]=t>>8&255,s[o++]=t&255;return i===2&&(t=ut[e.charCodeAt(l)]<<2|ut[e.charCodeAt(l+1)]>>4,s[o++]=t&255),i===1&&(t=ut[e.charCodeAt(l)]<<10|ut[e.charCodeAt(l+1)]<<4|ut[e.charCodeAt(l+2)]>>2,s[o++]=t>>8&255,s[o++]=t&255),s}function Fd(e){return vt[e>>18&63]+vt[e>>12&63]+vt[e>>6&63]+vt[e&63]}function Bd(e,t,r){for(var n,i=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),i.push(Fd(n));return i.join("")}function kd(e){for(var t,r=e.length,n=r%3,i=[],s=16383,o=0,a=r-n;o<a;o+=s)i.push(Bd(e,o,o+s>a?a:o+s));return n===1?(t=e[r-1],i.push(vt[t>>2]+vt[t<<4&63]+"==")):n===2&&(t=(e[r-2]<<8)+e[r-1],i.push(vt[t>>10]+vt[t>>4&63]+vt[t<<2&63]+"=")),i.join("")}var Es={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Es.read=function(e,t,r,n,i){var s,o,a=i*8-n-1,l=(1<<a)-1,d=l>>1,p=-7,m=r?i-1:0,y=r?-1:1,S=e[t+m];for(m+=y,s=S&(1<<-p)-1,S>>=-p,p+=a;p>0;s=s*256+e[t+m],m+=y,p-=8);for(o=s&(1<<-p)-1,s>>=-p,p+=n;p>0;o=o*256+e[t+m],m+=y,p-=8);if(s===0)s=1-d;else{if(s===l)return o?NaN:(S?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-d}return(S?-1:1)*o*Math.pow(2,s-n)};Es.write=function(e,t,r,n,i,s){var o,a,l,d=s*8-i-1,p=(1<<d)-1,m=p>>1,y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,S=n?0:s-1,A=n?1:-1,R=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=p):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+m>=1?t+=y/l:t+=y*Math.pow(2,1-m),t*l>=2&&(o++,l/=2),o+m>=p?(a=0,o=p):o+m>=1?(a=(t*l-1)*Math.pow(2,i),o=o+m):(a=t*Math.pow(2,m-1)*Math.pow(2,i),o=0));i>=8;e[r+S]=a&255,S+=A,a/=256,i-=8);for(o=o<<i|a,d+=i;d>0;e[r+S]=o&255,S+=A,o/=256,d-=8);e[r+S-A]|=R*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Jn,r=Es,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=P,e.INSPECT_MAX_BYTES=50;const i=2147483647;e.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=s(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{const h=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(h,c),h.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function o(h){if(h>i)throw new RangeError('The value "'+h+'" is invalid for option "size"');const c=new Uint8Array(h);return Object.setPrototypeOf(c,a.prototype),c}function a(h,c,u){if(typeof h=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(h)}return l(h,c,u)}a.poolSize=8192;function l(h,c,u){if(typeof h=="string")return y(h,c);if(ArrayBuffer.isView(h))return A(h);if(h==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof h);if(_t(h,ArrayBuffer)||h&&_t(h.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(_t(h,SharedArrayBuffer)||h&&_t(h.buffer,SharedArrayBuffer)))return R(h,c,u);if(typeof h=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const f=h.valueOf&&h.valueOf();if(f!=null&&f!==h)return a.from(f,c,u);const _=j(h);if(_)return _;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof h[Symbol.toPrimitive]=="function")return a.from(h[Symbol.toPrimitive]("string"),c,u);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof h)}a.from=function(h,c,u){return l(h,c,u)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function d(h){if(typeof h!="number")throw new TypeError('"size" argument must be of type number');if(h<0)throw new RangeError('The value "'+h+'" is invalid for option "size"')}function p(h,c,u){return d(h),h<=0?o(h):c!==void 0?typeof u=="string"?o(h).fill(c,u):o(h).fill(c):o(h)}a.alloc=function(h,c,u){return p(h,c,u)};function m(h){return d(h),o(h<0?0:N(h)|0)}a.allocUnsafe=function(h){return m(h)},a.allocUnsafeSlow=function(h){return m(h)};function y(h,c){if((typeof c!="string"||c==="")&&(c="utf8"),!a.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const u=I(h,c)|0;let f=o(u);const _=f.write(h,c);return _!==u&&(f=f.slice(0,_)),f}function S(h){const c=h.length<0?0:N(h.length)|0,u=o(c);for(let f=0;f<c;f+=1)u[f]=h[f]&255;return u}function A(h){if(_t(h,Uint8Array)){const c=new Uint8Array(h);return R(c.buffer,c.byteOffset,c.byteLength)}return S(h)}function R(h,c,u){if(c<0||h.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(h.byteLength<c+(u||0))throw new RangeError('"length" is outside of buffer bounds');let f;return c===void 0&&u===void 0?f=new Uint8Array(h):u===void 0?f=new Uint8Array(h,c):f=new Uint8Array(h,c,u),Object.setPrototypeOf(f,a.prototype),f}function j(h){if(a.isBuffer(h)){const c=N(h.length)|0,u=o(c);return u.length===0||h.copy(u,0,0,c),u}if(h.length!==void 0)return typeof h.length!="number"||li(h.length)?o(0):S(h);if(h.type==="Buffer"&&Array.isArray(h.data))return S(h.data)}function N(h){if(h>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return h|0}function P(h){return+h!=h&&(h=0),a.alloc(+h)}a.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==a.prototype},a.compare=function(c,u){if(_t(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),_t(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(c)||!a.isBuffer(u))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===u)return 0;let f=c.length,_=u.length;for(let g=0,v=Math.min(f,_);g<v;++g)if(c[g]!==u[g]){f=c[g],_=u[g];break}return f<_?-1:_<f?1:0},a.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(c,u){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return a.alloc(0);let f;if(u===void 0)for(u=0,f=0;f<c.length;++f)u+=c[f].length;const _=a.allocUnsafe(u);let g=0;for(f=0;f<c.length;++f){let v=c[f];if(_t(v,Uint8Array))g+v.length>_.length?(a.isBuffer(v)||(v=a.from(v)),v.copy(_,g)):Uint8Array.prototype.set.call(_,v,g);else if(a.isBuffer(v))v.copy(_,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=v.length}return _};function I(h,c){if(a.isBuffer(h))return h.length;if(ArrayBuffer.isView(h)||_t(h,ArrayBuffer))return h.byteLength;if(typeof h!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof h);const u=h.length,f=arguments.length>2&&arguments[2]===!0;if(!f&&u===0)return 0;let _=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return u;case"utf8":case"utf-8":return ai(h).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u*2;case"hex":return u>>>1;case"base64":return Po(h).length;default:if(_)return f?-1:ai(h).length;c=(""+c).toLowerCase(),_=!0}}a.byteLength=I;function G(h,c,u){let f=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((u===void 0||u>this.length)&&(u=this.length),u<=0)||(u>>>=0,c>>>=0,u<=c))return"";for(h||(h="utf8");;)switch(h){case"hex":return yd(this,c,u);case"utf8":case"utf-8":return go(this,c,u);case"ascii":return md(this,c,u);case"latin1":case"binary":return _d(this,c,u);case"base64":return pd(this,c,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gd(this,c,u);default:if(f)throw new TypeError("Unknown encoding: "+h);h=(h+"").toLowerCase(),f=!0}}a.prototype._isBuffer=!0;function Z(h,c,u){const f=h[c];h[c]=h[u],h[u]=f}a.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let u=0;u<c;u+=2)Z(this,u,u+1);return this},a.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let u=0;u<c;u+=4)Z(this,u,u+3),Z(this,u+1,u+2);return this},a.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let u=0;u<c;u+=8)Z(this,u,u+7),Z(this,u+1,u+6),Z(this,u+2,u+5),Z(this,u+3,u+4);return this},a.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?go(this,0,c):G.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(c){if(!a.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:a.compare(this,c)===0},a.prototype.inspect=function(){let c="";const u=e.INSPECT_MAX_BYTES;return c=this.toString("hex",0,u).replace(/(.{2})/g,"$1 ").trim(),this.length>u&&(c+=" ... "),"<Buffer "+c+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(c,u,f,_,g){if(_t(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),!a.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(u===void 0&&(u=0),f===void 0&&(f=c?c.length:0),_===void 0&&(_=0),g===void 0&&(g=this.length),u<0||f>c.length||_<0||g>this.length)throw new RangeError("out of range index");if(_>=g&&u>=f)return 0;if(_>=g)return-1;if(u>=f)return 1;if(u>>>=0,f>>>=0,_>>>=0,g>>>=0,this===c)return 0;let v=g-_,$=f-u;const U=Math.min(v,$),k=this.slice(_,g),H=c.slice(u,f);for(let F=0;F<U;++F)if(k[F]!==H[F]){v=k[F],$=H[F];break}return v<$?-1:$<v?1:0};function te(h,c,u,f,_){if(h.length===0)return-1;if(typeof u=="string"?(f=u,u=0):u>2147483647?u=2147483647:u<-2147483648&&(u=-2147483648),u=+u,li(u)&&(u=_?0:h.length-1),u<0&&(u=h.length+u),u>=h.length){if(_)return-1;u=h.length-1}else if(u<0)if(_)u=0;else return-1;if(typeof c=="string"&&(c=a.from(c,f)),a.isBuffer(c))return c.length===0?-1:be(h,c,u,f,_);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?_?Uint8Array.prototype.indexOf.call(h,c,u):Uint8Array.prototype.lastIndexOf.call(h,c,u):be(h,[c],u,f,_);throw new TypeError("val must be string, number or Buffer")}function be(h,c,u,f,_){let g=1,v=h.length,$=c.length;if(f!==void 0&&(f=String(f).toLowerCase(),f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le")){if(h.length<2||c.length<2)return-1;g=2,v/=2,$/=2,u/=2}function U(H,F){return g===1?H[F]:H.readUInt16BE(F*g)}let k;if(_){let H=-1;for(k=u;k<v;k++)if(U(h,k)===U(c,H===-1?0:k-H)){if(H===-1&&(H=k),k-H+1===$)return H*g}else H!==-1&&(k-=k-H),H=-1}else for(u+$>v&&(u=v-$),k=u;k>=0;k--){let H=!0;for(let F=0;F<$;F++)if(U(h,k+F)!==U(c,F)){H=!1;break}if(H)return k}return-1}a.prototype.includes=function(c,u,f){return this.indexOf(c,u,f)!==-1},a.prototype.indexOf=function(c,u,f){return te(this,c,u,f,!0)},a.prototype.lastIndexOf=function(c,u,f){return te(this,c,u,f,!1)};function kt(h,c,u,f){u=Number(u)||0;const _=h.length-u;f?(f=Number(f),f>_&&(f=_)):f=_;const g=c.length;f>g/2&&(f=g/2);let v;for(v=0;v<f;++v){const $=parseInt(c.substr(v*2,2),16);if(li($))return v;h[u+v]=$}return v}function J(h,c,u,f){return Ir(ai(c,h.length-u),h,u,f)}function ii(h,c,u,f){return Ir(xd(c),h,u,f)}function si(h,c,u,f){return Ir(Po(c),h,u,f)}function hd(h,c,u,f){return Ir(Sd(c,h.length-u),h,u,f)}a.prototype.write=function(c,u,f,_){if(u===void 0)_="utf8",f=this.length,u=0;else if(f===void 0&&typeof u=="string")_=u,f=this.length,u=0;else if(isFinite(u))u=u>>>0,isFinite(f)?(f=f>>>0,_===void 0&&(_="utf8")):(_=f,f=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const g=this.length-u;if((f===void 0||f>g)&&(f=g),c.length>0&&(f<0||u<0)||u>this.length)throw new RangeError("Attempt to write outside buffer bounds");_||(_="utf8");let v=!1;for(;;)switch(_){case"hex":return kt(this,c,u,f);case"utf8":case"utf-8":return J(this,c,u,f);case"ascii":case"latin1":case"binary":return ii(this,c,u,f);case"base64":return si(this,c,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hd(this,c,u,f);default:if(v)throw new TypeError("Unknown encoding: "+_);_=(""+_).toLowerCase(),v=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function pd(h,c,u){return c===0&&u===h.length?t.fromByteArray(h):t.fromByteArray(h.slice(c,u))}function go(h,c,u){u=Math.min(h.length,u);const f=[];let _=c;for(;_<u;){const g=h[_];let v=null,$=g>239?4:g>223?3:g>191?2:1;if(_+$<=u){let U,k,H,F;switch($){case 1:g<128&&(v=g);break;case 2:U=h[_+1],(U&192)===128&&(F=(g&31)<<6|U&63,F>127&&(v=F));break;case 3:U=h[_+1],k=h[_+2],(U&192)===128&&(k&192)===128&&(F=(g&15)<<12|(U&63)<<6|k&63,F>2047&&(F<55296||F>57343)&&(v=F));break;case 4:U=h[_+1],k=h[_+2],H=h[_+3],(U&192)===128&&(k&192)===128&&(H&192)===128&&(F=(g&15)<<18|(U&63)<<12|(k&63)<<6|H&63,F>65535&&F<1114112&&(v=F))}}v===null?(v=65533,$=1):v>65535&&(v-=65536,f.push(v>>>10&1023|55296),v=56320|v&1023),f.push(v),_+=$}return fd(f)}const bo=4096;function fd(h){const c=h.length;if(c<=bo)return String.fromCharCode.apply(String,h);let u="",f=0;for(;f<c;)u+=String.fromCharCode.apply(String,h.slice(f,f+=bo));return u}function md(h,c,u){let f="";u=Math.min(h.length,u);for(let _=c;_<u;++_)f+=String.fromCharCode(h[_]&127);return f}function _d(h,c,u){let f="";u=Math.min(h.length,u);for(let _=c;_<u;++_)f+=String.fromCharCode(h[_]);return f}function yd(h,c,u){const f=h.length;(!c||c<0)&&(c=0),(!u||u<0||u>f)&&(u=f);let _="";for(let g=c;g<u;++g)_+=Ad[h[g]];return _}function gd(h,c,u){const f=h.slice(c,u);let _="";for(let g=0;g<f.length-1;g+=2)_+=String.fromCharCode(f[g]+f[g+1]*256);return _}a.prototype.slice=function(c,u){const f=this.length;c=~~c,u=u===void 0?f:~~u,c<0?(c+=f,c<0&&(c=0)):c>f&&(c=f),u<0?(u+=f,u<0&&(u=0)):u>f&&(u=f),u<c&&(u=c);const _=this.subarray(c,u);return Object.setPrototypeOf(_,a.prototype),_};function Y(h,c,u){if(h%1!==0||h<0)throw new RangeError("offset is not uint");if(h+c>u)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(c,u,f){c=c>>>0,u=u>>>0,f||Y(c,u,this.length);let _=this[c],g=1,v=0;for(;++v<u&&(g*=256);)_+=this[c+v]*g;return _},a.prototype.readUintBE=a.prototype.readUIntBE=function(c,u,f){c=c>>>0,u=u>>>0,f||Y(c,u,this.length);let _=this[c+--u],g=1;for(;u>0&&(g*=256);)_+=this[c+--u]*g;return _},a.prototype.readUint8=a.prototype.readUInt8=function(c,u){return c=c>>>0,u||Y(c,1,this.length),this[c]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(c,u){return c=c>>>0,u||Y(c,2,this.length),this[c]|this[c+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(c,u){return c=c>>>0,u||Y(c,2,this.length),this[c]<<8|this[c+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(c,u){return c=c>>>0,u||Y(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(c,u){return c=c>>>0,u||Y(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},a.prototype.readBigUInt64LE=zt(function(c){c=c>>>0,we(c,"offset");const u=this[c],f=this[c+7];(u===void 0||f===void 0)&&Ge(c,this.length-8);const _=u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,g=this[++c]+this[++c]*2**8+this[++c]*2**16+f*2**24;return BigInt(_)+(BigInt(g)<<BigInt(32))}),a.prototype.readBigUInt64BE=zt(function(c){c=c>>>0,we(c,"offset");const u=this[c],f=this[c+7];(u===void 0||f===void 0)&&Ge(c,this.length-8);const _=u*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],g=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+f;return(BigInt(_)<<BigInt(32))+BigInt(g)}),a.prototype.readIntLE=function(c,u,f){c=c>>>0,u=u>>>0,f||Y(c,u,this.length);let _=this[c],g=1,v=0;for(;++v<u&&(g*=256);)_+=this[c+v]*g;return g*=128,_>=g&&(_-=Math.pow(2,8*u)),_},a.prototype.readIntBE=function(c,u,f){c=c>>>0,u=u>>>0,f||Y(c,u,this.length);let _=u,g=1,v=this[c+--_];for(;_>0&&(g*=256);)v+=this[c+--_]*g;return g*=128,v>=g&&(v-=Math.pow(2,8*u)),v},a.prototype.readInt8=function(c,u){return c=c>>>0,u||Y(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},a.prototype.readInt16LE=function(c,u){c=c>>>0,u||Y(c,2,this.length);const f=this[c]|this[c+1]<<8;return f&32768?f|4294901760:f},a.prototype.readInt16BE=function(c,u){c=c>>>0,u||Y(c,2,this.length);const f=this[c+1]|this[c]<<8;return f&32768?f|4294901760:f},a.prototype.readInt32LE=function(c,u){return c=c>>>0,u||Y(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},a.prototype.readInt32BE=function(c,u){return c=c>>>0,u||Y(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},a.prototype.readBigInt64LE=zt(function(c){c=c>>>0,we(c,"offset");const u=this[c],f=this[c+7];(u===void 0||f===void 0)&&Ge(c,this.length-8);const _=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(f<<24);return(BigInt(_)<<BigInt(32))+BigInt(u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),a.prototype.readBigInt64BE=zt(function(c){c=c>>>0,we(c,"offset");const u=this[c],f=this[c+7];(u===void 0||f===void 0)&&Ge(c,this.length-8);const _=(u<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(_)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+f)}),a.prototype.readFloatLE=function(c,u){return c=c>>>0,u||Y(c,4,this.length),r.read(this,c,!0,23,4)},a.prototype.readFloatBE=function(c,u){return c=c>>>0,u||Y(c,4,this.length),r.read(this,c,!1,23,4)},a.prototype.readDoubleLE=function(c,u){return c=c>>>0,u||Y(c,8,this.length),r.read(this,c,!0,52,8)},a.prototype.readDoubleBE=function(c,u){return c=c>>>0,u||Y(c,8,this.length),r.read(this,c,!1,52,8)};function st(h,c,u,f,_,g){if(!a.isBuffer(h))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>_||c<g)throw new RangeError('"value" argument is out of bounds');if(u+f>h.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(c,u,f,_){if(c=+c,u=u>>>0,f=f>>>0,!_){const $=Math.pow(2,8*f)-1;st(this,c,u,f,$,0)}let g=1,v=0;for(this[u]=c&255;++v<f&&(g*=256);)this[u+v]=c/g&255;return u+f},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(c,u,f,_){if(c=+c,u=u>>>0,f=f>>>0,!_){const $=Math.pow(2,8*f)-1;st(this,c,u,f,$,0)}let g=f-1,v=1;for(this[u+g]=c&255;--g>=0&&(v*=256);)this[u+g]=c/v&255;return u+f},a.prototype.writeUint8=a.prototype.writeUInt8=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,1,255,0),this[u]=c&255,u+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,2,65535,0),this[u]=c&255,this[u+1]=c>>>8,u+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,2,65535,0),this[u]=c>>>8,this[u+1]=c&255,u+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,4,4294967295,0),this[u+3]=c>>>24,this[u+2]=c>>>16,this[u+1]=c>>>8,this[u]=c&255,u+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,4,4294967295,0),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4};function vo(h,c,u,f,_){Eo(c,f,_,h,u,7);let g=Number(c&BigInt(4294967295));h[u++]=g,g=g>>8,h[u++]=g,g=g>>8,h[u++]=g,g=g>>8,h[u++]=g;let v=Number(c>>BigInt(32)&BigInt(4294967295));return h[u++]=v,v=v>>8,h[u++]=v,v=v>>8,h[u++]=v,v=v>>8,h[u++]=v,u}function wo(h,c,u,f,_){Eo(c,f,_,h,u,7);let g=Number(c&BigInt(4294967295));h[u+7]=g,g=g>>8,h[u+6]=g,g=g>>8,h[u+5]=g,g=g>>8,h[u+4]=g;let v=Number(c>>BigInt(32)&BigInt(4294967295));return h[u+3]=v,v=v>>8,h[u+2]=v,v=v>>8,h[u+1]=v,v=v>>8,h[u]=v,u+8}a.prototype.writeBigUInt64LE=zt(function(c,u=0){return vo(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=zt(function(c,u=0){return wo(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(c,u,f,_){if(c=+c,u=u>>>0,!_){const U=Math.pow(2,8*f-1);st(this,c,u,f,U-1,-U)}let g=0,v=1,$=0;for(this[u]=c&255;++g<f&&(v*=256);)c<0&&$===0&&this[u+g-1]!==0&&($=1),this[u+g]=(c/v>>0)-$&255;return u+f},a.prototype.writeIntBE=function(c,u,f,_){if(c=+c,u=u>>>0,!_){const U=Math.pow(2,8*f-1);st(this,c,u,f,U-1,-U)}let g=f-1,v=1,$=0;for(this[u+g]=c&255;--g>=0&&(v*=256);)c<0&&$===0&&this[u+g+1]!==0&&($=1),this[u+g]=(c/v>>0)-$&255;return u+f},a.prototype.writeInt8=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,1,127,-128),c<0&&(c=255+c+1),this[u]=c&255,u+1},a.prototype.writeInt16LE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,2,32767,-32768),this[u]=c&255,this[u+1]=c>>>8,u+2},a.prototype.writeInt16BE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,2,32767,-32768),this[u]=c>>>8,this[u+1]=c&255,u+2},a.prototype.writeInt32LE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,4,2147483647,-2147483648),this[u]=c&255,this[u+1]=c>>>8,this[u+2]=c>>>16,this[u+3]=c>>>24,u+4},a.prototype.writeInt32BE=function(c,u,f){return c=+c,u=u>>>0,f||st(this,c,u,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4},a.prototype.writeBigInt64LE=zt(function(c,u=0){return vo(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=zt(function(c,u=0){return wo(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function xo(h,c,u,f,_,g){if(u+f>h.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("Index out of range")}function So(h,c,u,f,_){return c=+c,u=u>>>0,_||xo(h,c,u,4),r.write(h,c,u,f,23,4),u+4}a.prototype.writeFloatLE=function(c,u,f){return So(this,c,u,!0,f)},a.prototype.writeFloatBE=function(c,u,f){return So(this,c,u,!1,f)};function Ao(h,c,u,f,_){return c=+c,u=u>>>0,_||xo(h,c,u,8),r.write(h,c,u,f,52,8),u+8}a.prototype.writeDoubleLE=function(c,u,f){return Ao(this,c,u,!0,f)},a.prototype.writeDoubleBE=function(c,u,f){return Ao(this,c,u,!1,f)},a.prototype.copy=function(c,u,f,_){if(!a.isBuffer(c))throw new TypeError("argument should be a Buffer");if(f||(f=0),!_&&_!==0&&(_=this.length),u>=c.length&&(u=c.length),u||(u=0),_>0&&_<f&&(_=f),_===f||c.length===0||this.length===0)return 0;if(u<0)throw new RangeError("targetStart out of bounds");if(f<0||f>=this.length)throw new RangeError("Index out of range");if(_<0)throw new RangeError("sourceEnd out of bounds");_>this.length&&(_=this.length),c.length-u<_-f&&(_=c.length-u+f);const g=_-f;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(u,f,_):Uint8Array.prototype.set.call(c,this.subarray(f,_),u),g},a.prototype.fill=function(c,u,f,_){if(typeof c=="string"){if(typeof u=="string"?(_=u,u=0,f=this.length):typeof f=="string"&&(_=f,f=this.length),_!==void 0&&typeof _!="string")throw new TypeError("encoding must be a string");if(typeof _=="string"&&!a.isEncoding(_))throw new TypeError("Unknown encoding: "+_);if(c.length===1){const v=c.charCodeAt(0);(_==="utf8"&&v<128||_==="latin1")&&(c=v)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(u<0||this.length<u||this.length<f)throw new RangeError("Out of range index");if(f<=u)return this;u=u>>>0,f=f===void 0?this.length:f>>>0,c||(c=0);let g;if(typeof c=="number")for(g=u;g<f;++g)this[g]=c;else{const v=a.isBuffer(c)?c:a.from(c,_),$=v.length;if($===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(g=0;g<f-u;++g)this[g+u]=v[g%$]}return this};const ve={};function oi(h,c,u){ve[h]=class extends u{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${h}]`,this.stack,delete this.name}get code(){return h}set code(_){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:_,writable:!0})}toString(){return`${this.name} [${h}]: ${this.message}`}}}oi("ERR_BUFFER_OUT_OF_BOUNDS",function(h){return h?`${h} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),oi("ERR_INVALID_ARG_TYPE",function(h,c){return`The "${h}" argument must be of type number. Received type ${typeof c}`},TypeError),oi("ERR_OUT_OF_RANGE",function(h,c,u){let f=`The value of "${h}" is out of range.`,_=u;return Number.isInteger(u)&&Math.abs(u)>2**32?_=Co(String(u)):typeof u=="bigint"&&(_=String(u),(u>BigInt(2)**BigInt(32)||u<-(BigInt(2)**BigInt(32)))&&(_=Co(_)),_+="n"),f+=` It must be ${c}. Received ${_}`,f},RangeError);function Co(h){let c="",u=h.length;const f=h[0]==="-"?1:0;for(;u>=f+4;u-=3)c=`_${h.slice(u-3,u)}${c}`;return`${h.slice(0,u)}${c}`}function bd(h,c,u){we(c,"offset"),(h[c]===void 0||h[c+u]===void 0)&&Ge(c,h.length-(u+1))}function Eo(h,c,u,f,_,g){if(h>u||h<c){const v=typeof c=="bigint"?"n":"";let $;throw g>3?c===0||c===BigInt(0)?$=`>= 0${v} and < 2${v} ** ${(g+1)*8}${v}`:$=`>= -(2${v} ** ${(g+1)*8-1}${v}) and < 2 ** ${(g+1)*8-1}${v}`:$=`>= ${c}${v} and <= ${u}${v}`,new ve.ERR_OUT_OF_RANGE("value",$,h)}bd(f,_,g)}function we(h,c){if(typeof h!="number")throw new ve.ERR_INVALID_ARG_TYPE(c,"number",h)}function Ge(h,c,u){throw Math.floor(h)!==h?(we(h,u),new ve.ERR_OUT_OF_RANGE(u||"offset","an integer",h)):c<0?new ve.ERR_BUFFER_OUT_OF_BOUNDS:new ve.ERR_OUT_OF_RANGE(u||"offset",`>= ${u?1:0} and <= ${c}`,h)}const vd=/[^+/0-9A-Za-z-_]/g;function wd(h){if(h=h.split("=")[0],h=h.trim().replace(vd,""),h.length<2)return"";for(;h.length%4!==0;)h=h+"=";return h}function ai(h,c){c=c||1/0;let u;const f=h.length;let _=null;const g=[];for(let v=0;v<f;++v){if(u=h.charCodeAt(v),u>55295&&u<57344){if(!_){if(u>56319){(c-=3)>-1&&g.push(239,191,189);continue}else if(v+1===f){(c-=3)>-1&&g.push(239,191,189);continue}_=u;continue}if(u<56320){(c-=3)>-1&&g.push(239,191,189),_=u;continue}u=(_-55296<<10|u-56320)+65536}else _&&(c-=3)>-1&&g.push(239,191,189);if(_=null,u<128){if((c-=1)<0)break;g.push(u)}else if(u<2048){if((c-=2)<0)break;g.push(u>>6|192,u&63|128)}else if(u<65536){if((c-=3)<0)break;g.push(u>>12|224,u>>6&63|128,u&63|128)}else if(u<1114112){if((c-=4)<0)break;g.push(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}else throw new Error("Invalid code point")}return g}function xd(h){const c=[];for(let u=0;u<h.length;++u)c.push(h.charCodeAt(u)&255);return c}function Sd(h,c){let u,f,_;const g=[];for(let v=0;v<h.length&&!((c-=2)<0);++v)u=h.charCodeAt(v),f=u>>8,_=u%256,g.push(_),g.push(f);return g}function Po(h){return t.toByteArray(wd(h))}function Ir(h,c,u,f){let _;for(_=0;_<f&&!(_+u>=c.length||_>=h.length);++_)c[_+u]=h[_];return _}function _t(h,c){return h instanceof c||h!=null&&h.constructor!=null&&h.constructor.name!=null&&h.constructor.name===c.name}function li(h){return h!==h}const Ad=function(){const h="0123456789abcdef",c=new Array(256);for(let u=0;u<16;++u){const f=u*16;for(let _=0;_<16;++_)c[f+_]=h[u]+h[_]}return c}();function zt(h){return typeof BigInt>"u"?Cd:h}function Cd(){throw new Error("BigInt not supported")}})($l);var Ps={exports:{}},Re=typeof Reflect=="object"?Reflect:null,Oo=Re&&typeof Re.apply=="function"?Re.apply:function(t,r,n){return Function.prototype.apply.call(t,r,n)},Qr;Re&&typeof Re.ownKeys=="function"?Qr=Re.ownKeys:Object.getOwnPropertySymbols?Qr=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Qr=function(t){return Object.getOwnPropertyNames(t)};function zd(e){console&&console.warn&&console.warn(e)}var Il=Number.isNaN||function(t){return t!==t};function D(){D.init.call(this)}Ps.exports=D;Ps.exports.once=Vd;D.EventEmitter=D;D.prototype._events=void 0;D.prototype._eventsCount=0;D.prototype._maxListeners=void 0;var Ro=10;function Yn(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(D,"defaultMaxListeners",{enumerable:!0,get:function(){return Ro},set:function(e){if(typeof e!="number"||e<0||Il(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");Ro=e}});D.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};D.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||Il(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function Ll(e){return e._maxListeners===void 0?D.defaultMaxListeners:e._maxListeners}D.prototype.getMaxListeners=function(){return Ll(this)};D.prototype.emit=function(t){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var i=t==="error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(r.length>0&&(o=r[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[t];if(l===void 0)return!1;if(typeof l=="function")Oo(l,this,r);else for(var d=l.length,p=Bl(l,d),n=0;n<d;++n)Oo(p[n],this,r);return!0};function Ml(e,t,r,n){var i,s,o;if(Yn(r),s=e._events,s===void 0?(s=e._events=Object.create(null),e._eventsCount=0):(s.newListener!==void 0&&(e.emit("newListener",t,r.listener?r.listener:r),s=e._events),o=s[t]),o===void 0)o=s[t]=r,++e._eventsCount;else if(typeof o=="function"?o=s[t]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r),i=Ll(e),i>0&&o.length>i&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=o.length,zd(a)}return e}D.prototype.addListener=function(t,r){return Ml(this,t,r,!1)};D.prototype.on=D.prototype.addListener;D.prototype.prependListener=function(t,r){return Ml(this,t,r,!0)};function Ud(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Dl(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=Ud.bind(n);return i.listener=r,n.wrapFn=i,i}D.prototype.once=function(t,r){return Yn(r),this.on(t,Dl(this,t,r)),this};D.prototype.prependOnceListener=function(t,r){return Yn(r),this.prependListener(t,Dl(this,t,r)),this};D.prototype.removeListener=function(t,r){var n,i,s,o,a;if(Yn(r),i=this._events,i===void 0)return this;if(n=i[t],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||r));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===r||n[o].listener===r){a=n[o].listener,s=o;break}if(s<0)return this;s===0?n.shift():Hd(n,s),n.length===1&&(i[t]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",t,a||r)}return this};D.prototype.off=D.prototype.removeListener;D.prototype.removeAllListeners=function(t){var r,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[t]),this;if(arguments.length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[t],typeof r=="function")this.removeListener(t,r);else if(r!==void 0)for(i=r.length-1;i>=0;i--)this.removeListener(t,r[i]);return this};function jl(e,t,r){var n=e._events;if(n===void 0)return[];var i=n[t];return i===void 0?[]:typeof i=="function"?r?[i.listener||i]:[i]:r?qd(i):Bl(i,i.length)}D.prototype.listeners=function(t){return jl(this,t,!0)};D.prototype.rawListeners=function(t){return jl(this,t,!1)};D.listenerCount=function(e,t){return typeof e.listenerCount=="function"?e.listenerCount(t):Fl.call(e,t)};D.prototype.listenerCount=Fl;function Fl(e){var t=this._events;if(t!==void 0){var r=t[e];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}D.prototype.eventNames=function(){return this._eventsCount>0?Qr(this._events):[]};function Bl(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function Hd(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function qd(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}function Vd(e,t){return new Promise(function(r,n){function i(o){e.removeListener(t,s),n(o)}function s(){typeof e.removeListener=="function"&&e.removeListener("error",i),r([].slice.call(arguments))}kl(e,t,s,{once:!0}),t!=="error"&&Gd(e,i,{once:!0})})}function Gd(e,t,r){typeof e.on=="function"&&kl(e,"error",t,r)}function kl(e,t,r,n){if(typeof e.on=="function")n.once?e.once(t,r):e.on(t,r);else if(typeof e.addEventListener=="function")e.addEventListener(t,function i(s){n.once&&e.removeEventListener(t,i),r(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}var Jd=Ps.exports;const Yd=me(Jd);window.Buffer=$l.Buffer;window.process=Nd;window.EventEmitter=Yd;const Wd="modulepreload",Qd=function(e){return"/"+e},$o={},Tt=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(r.map(l=>{if(l=Qd(l),l in $o)return;$o[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!n)for(let S=s.length-1;S>=0;S--){const A=s[S];if(A.href===l&&(!d||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Wd,d||(y.as="script",y.crossOrigin=""),y.href=l,a&&y.setAttribute("nonce",a),document.head.appendChild(y),d)return new Promise((S,A)=>{y.addEventListener("load",S),y.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=window,Ts=Kr.ShadowRoot&&(Kr.ShadyCSS===void 0||Kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Os=Symbol(),No=new WeakMap;let Rs=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Os)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ts&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=No.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&No.set(r,t))}return t}toString(){return this.cssText}};const Kd=e=>new Rs(typeof e=="string"?e:e+"",void 0,Os),rt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Rs(r,e,Os)},Xd=(e,t)=>{Ts?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),i=Kr.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)})},Io=Ts?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Kd(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ui;const rn=window,Lo=rn.trustedTypes,Zd=Lo?Lo.emptyScript:"",Mo=rn.reactiveElementPolyfillSupport,Ui={toAttribute(e,t){switch(t){case Boolean:e=e?Zd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},zl=(e,t)=>t!==e&&(t==t||e==e),di={attribute:!0,type:String,converter:Ui,reflect:!1,hasChanged:zl},Hi="finalized";let Te=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,r=di){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(i){const s=this[t];this[r]=i,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||di}static finalize(){if(this.hasOwnProperty(Hi))return!1;this[Hi]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Io(i))}else t!==void 0&&r.push(Io(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xd(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=di){var i;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Ui).toAttribute(r,n.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,r){var n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Ui;this._$El=s,this[s]=a.fromAttribute(r,o.type),this._$El=null}}requestUpdate(t,r,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||zl)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Te[Hi]=!0,Te.elementProperties=new Map,Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Mo==null||Mo({ReactiveElement:Te}),((ui=rn.reactiveElementVersions)!==null&&ui!==void 0?ui:rn.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hi;const nn=window,De=nn.trustedTypes,Do=De?De.createPolicy("lit-html",{createHTML:e=>e}):void 0,sn="$lit$",$t=`lit$${(Math.random()+"").slice(9)}$`,$s="?"+$t,th=`<${$s}>`,ue=document,mr=()=>ue.createComment(""),_r=e=>e===null||typeof e!="object"&&typeof e!="function",Ul=Array.isArray,Hl=e=>Ul(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",pi=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jo=/-->/g,Fo=/>/g,ee=RegExp(`>|${pi}(?:([^\\s"'>=/]+)(${pi}*=${pi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bo=/'/g,ko=/"/g,ql=/^(?:script|style|textarea|title)$/i,eh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ye=eh(1),je=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),zo=new WeakMap,se=ue.createTreeWalker(ue,129,null,!1);function Vl(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Do!==void 0?Do.createHTML(t):t}const Gl=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":"",o=Je;for(let a=0;a<r;a++){const l=e[a];let d,p,m=-1,y=0;for(;y<l.length&&(o.lastIndex=y,p=o.exec(l),p!==null);)y=o.lastIndex,o===Je?p[1]==="!--"?o=jo:p[1]!==void 0?o=Fo:p[2]!==void 0?(ql.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=ee):p[3]!==void 0&&(o=ee):o===ee?p[0]===">"?(o=i??Je,m=-1):p[1]===void 0?m=-2:(m=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?ee:p[3]==='"'?ko:Bo):o===ko||o===Bo?o=ee:o===jo||o===Fo?o=Je:(o=ee,i=void 0);const S=o===ee&&e[a+1].startsWith("/>")?" ":"";s+=o===Je?l+th:m>=0?(n.push(d),l.slice(0,m)+sn+l.slice(m)+$t+S):l+$t+(m===-2?(n.push(void 0),a):S)}return[Vl(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class yr{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[d,p]=Gl(t,r);if(this.el=yr.createElement(d,n),se.currentNode=this.el.content,r===2){const m=this.el.content,y=m.firstChild;y.remove(),m.append(...y.childNodes)}for(;(i=se.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const m=[];for(const y of i.getAttributeNames())if(y.endsWith(sn)||y.startsWith($t)){const S=p[o++];if(m.push(y),S!==void 0){const A=i.getAttribute(S.toLowerCase()+sn).split($t),R=/([.?@])?(.*)/.exec(S);l.push({type:1,index:s,name:R[2],strings:A,ctor:R[1]==="."?Yl:R[1]==="?"?Wl:R[1]==="@"?Ql:Or})}else l.push({type:6,index:s})}for(const y of m)i.removeAttribute(y)}if(ql.test(i.tagName)){const m=i.textContent.split($t),y=m.length-1;if(y>0){i.textContent=De?De.emptyScript:"";for(let S=0;S<y;S++)i.append(m[S],mr()),se.nextNode(),l.push({type:2,index:++s});i.append(m[y],mr())}}}else if(i.nodeType===8)if(i.data===$s)l.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf($t,m+1))!==-1;)l.push({type:7,index:s}),m+=$t.length-1}s++}}static createElement(t,r){const n=ue.createElement("template");return n.innerHTML=t,n}}function de(e,t,r=e,n){var i,s,o,a;if(t===je)return t;let l=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const d=_r(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),d===void 0?l=void 0:(l=new d(e),l._$AT(e,r,n)),n!==void 0?((o=(a=r)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=de(e,l._$AS(e,t.values),l,n)),t}class Jl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:i}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ue).importNode(n,!0);se.currentNode=s;let o=se.nextNode(),a=0,l=0,d=i[0];for(;d!==void 0;){if(a===d.index){let p;d.type===2?p=new Ue(o,o.nextSibling,this,t):d.type===1?p=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(p=new Kl(o,this,t)),this._$AV.push(p),d=i[++l]}a!==(d==null?void 0:d.index)&&(o=se.nextNode(),a++)}return se.currentNode=ue,s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ue{constructor(t,r,n,i){var s;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=de(this,t,r),_r(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==je&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Hl(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Q&&_r(this._$AH)?this._$AA.nextSibling.data=t:this.$(ue.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=yr.createElement(Vl(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const o=new Jl(s,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(t){let r=zo.get(t.strings);return r===void 0&&zo.set(t.strings,r=new yr(t)),r}T(t){Ul(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new Ue(this.k(mr()),this.k(mr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Or{constructor(t,r,n,i,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=de(this,t,r,0),o=!_r(t)||t!==this._$AH&&t!==je,o&&(this._$AH=t);else{const a=t;let l,d;for(t=s[0],l=0;l<s.length-1;l++)d=de(this,a[n+l],r,l),d===je&&(d=this._$AH[l]),o||(o=!_r(d)||d!==this._$AH[l]),d===Q?t=Q:t!==Q&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}o&&!i&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yl extends Or{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}const rh=De?De.emptyScript:"";class Wl extends Or{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Q?this.element.setAttribute(this.name,rh):this.element.removeAttribute(this.name)}}class Ql extends Or{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=de(this,t,r,0))!==null&&n!==void 0?n:Q)===je)return;const i=this._$AH,s=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Kl{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){de(this,t)}}const Bx={O:sn,P:$t,A:$s,C:1,M:Gl,L:Jl,R:Hl,D:de,I:Ue,V:Or,H:Wl,N:Ql,U:Yl,F:Kl},Uo=nn.litHtmlPolyfillSupport;Uo==null||Uo(yr,Ue),((hi=nn.litHtmlVersions)!==null&&hi!==void 0?hi:nn.litHtmlVersions=[]).push("2.8.0");const Xl=(e,t,r)=>{var n,i;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let o=s._$litPart$;if(o===void 0){const a=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Ue(t.insertBefore(mr(),a),a,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fi,mi;let or=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return je}};or.finalized=!0,or._$litElement$=!0,(fi=globalThis.litElementHydrateSupport)===null||fi===void 0||fi.call(globalThis,{LitElement:or});const Ho=globalThis.litElementPolyfillSupport;Ho==null||Ho({LitElement:or});((mi=globalThis.litElementVersions)!==null&&mi!==void 0?mi:globalThis.litElementVersions=[]).push("3.3.3");function nh(e){return(t={},r)=>{const n={};for(const i in e)n[i]=e[i](t[i],r);return n}}const ih="action",gr="state",We=Symbol(),qo=Symbol(),Vo=Symbol(),Go=Symbol(),Jo=Symbol(),Yo=Symbol(),Se=Symbol();function sh(e,t){return class extends t{constructor(...r){super(...r),this[Se]=this[Se].bind(this),this[qo]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[Vo](),this[Jo]()}disconnectedCallback(){this[Yo](),this[Go](),super.disconnectedCallback&&super.disconnectedCallback()}[qo](){this[We]=this.mapEvents?this.mapEvents():{}}[Vo](){for(const r in this[We])this.addEventListener(r,this[We][r],!1)}[Go](){for(const r in this[We])this.removeEventListener(r,this[We][r],!1)}[Jo](){e.addEventListener(gr,this[Se]),this[Se]()}[Yo](){e.removeEventListener(gr,this[Se])}[Se](){this.mapState&&Object.assign(this,this.mapState(e.state))}}}const Wn=e=>e;let oh=class extends EventTarget{constructor(t,r){super(),this.state=t,this.reducer=r,this.state=this.reducer(this.state,{})}dispatch(t){const r=new CustomEvent(ih,{cancelable:!0,detail:{action:t}});return this.dispatchEvent(r)&&(t=r.detail.action,this.state=this.reducer(this.state,t),this.dispatchEvent(new CustomEvent(gr,{detail:{action:t}}))),t}};const Zl=(e,t)=>t.indexOf("/")>-1?t:e+"/"+t,Wo=(e,t,r)=>{const n=Zl(t,r);return e.dispatch[t][r]=i=>{const s={type:n,...i!==void 0&&{payload:i}};return e.dispatch(s)},n},Lr={},Qo=[],ah={dispatchPlugin:{onModel(e,t,r){e.dispatch[t]={};for(const n in r.reducers)Wo(e,t,n)}},effectsPlugin:{onModel(e,t,r){if(!r.effects)return;const n=r.effects({getDispatch:()=>e.dispatch,getState:()=>e.state});for(const i in n){const s=Wo(e,t,i),o=n[i];Lr[s]?Lr[s].push(o):Lr[s]=[o],i==="init"&&Qo.push(o)}},onStore(e){e.addEventListener(gr,t=>{const{action:r}=t.detail,n=Lr[r.type];n&&queueMicrotask(()=>n.forEach(i=>i(r.payload)))}),queueMicrotask(()=>Qo.forEach(t=>t()))}}},lh=e=>{const t={...e.models},r={...ah,...e.plugins};for(const a in r){const l=r[a];l.model&&(t[a]=l.model)}const n={};for(const a in t){const l=t[a],d={};for(const p in l.reducers)d[Zl(a,p)]=l.reducers[p];n[a]=(p=l.state,m)=>{const y=d[m.type];return y?y(p,m.payload):p}}const i=nh(n),s=e&&e.state,o=new oh(s,i);for(const a in r){const l=r[a];if(l.onModel)for(const d in t)l.onModel(o,d,t[d])}for(const a in r){const l=r[a];l.onStore&&l.onStore(o)}return o};function ch(e,t){const r={name:location.hostname,storage:localStorage,serializer:JSON,filter:s=>!0,persist:s=>s,delay:0,...t},n=r.storage.getItem(r.name);n&&(e.state={...e.state,...r.serializer.parse(n)});let i=0;return e.addEventListener(gr,s=>{const{action:o}=s.detail;r.filter(o)&&(i&&window.clearTimeout(i),i=window.setTimeout(()=>{r.storage.setItem(r.name,r.serializer.stringify(r.persist(e.state))),i=0},r.delay))}),e}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class uh extends HTMLElement{static get version(){return"23.5.3"}}customElements.define("vaadin-lumo-styles",uh);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const dh=e=>class extends e{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(r){this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const tc=[];function jt(e,t,r={}){e&&yh(e)&&console.warn(`The custom element definition for "${e}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=fh(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,r):tc.push({themeFor:e,styles:t,include:r.include,moduleId:r.moduleId})}function qi(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():tc}function hh(e,t){return(e||"").split(" ").some(r=>new RegExp(`^${r.split("*").join(".*")}$`).test(t))}function ph(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function fh(e=[]){return[e].flat(1/0).filter(t=>t instanceof Rs?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function ec(e){const t=[];return e.include&&[].concat(e.include).forEach(r=>{const n=qi().find(i=>i.moduleId===r);n?t.push(...ec(n),...n.styles):console.warn(`Included moduleId ${r} not found in style registry`)},e.styles),t}function mh(e,t){const r=document.createElement("style");r.innerHTML=e.map(n=>n.cssText).join(`
`),t.content.appendChild(r)}function _h(e){const t=`${e}-default-theme`,r=qi().filter(n=>n.moduleId!==t&&hh(n.themeFor,e)).map(n=>({...n,styles:[...ec(n),...n.styles],includePriority:ph(n.moduleId)})).sort((n,i)=>i.includePriority-n.includePriority);return r.length>0?r:qi().filter(n=>n.moduleId===t)}function yh(e){return rc(customElements.get(e))}function rc(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}const He=e=>class extends dh(e){static finalize(){if(super.finalize(),this.elementStyles)return;const r=this.prototype._template;!r||rc(this)||mh(this.getStylesForThis(),r)}static finalizeStyles(r){const n=this.getStylesForThis();return r?[...super.finalizeStyles(r),...n]:n}static getStylesForThis(){const r=Object.getPrototypeOf(this.prototype),n=(r?r.constructor.__themes:[])||[];this.__themes=[...n,..._h(this.is)];const i=this.__themes.flatMap(s=>s.styles);return i.filter((s,o)=>o===i.lastIndexOf(s))}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const gh=rt`
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
`,nc=document.createElement("template");nc.innerHTML=`<style>${gh.toString().replace(":host","html")}</style>`;document.head.appendChild(nc.content);const ic=rt`
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
`;jt("",ic,{moduleId:"lumo-color"});const bh=rt`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;jt("",[ic,bh],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const vh=rt`
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
`,sc=document.createElement("template");sc.innerHTML=`<style>${vh.toString().replace(":host","html")}</style>`;document.head.appendChild(sc.content);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const wh=rt`
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
`,xh=rt`
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
`;jt("",xh,{moduleId:"lumo-typography"});const oc=document.createElement("template");oc.innerHTML=`<style>${wh.toString().replace(":host","html")}</style>`;document.head.appendChild(oc.content);jt("vaadin-app-layout",rt`
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
  `,{moduleId:"lumo-app-layout"});const ac=document.createElement("template");ac.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(ac.content);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Qn=e=>e.test(navigator.userAgent),Vi=e=>e.test(navigator.platform),Sh=e=>e.test(navigator.vendor);Qn(/Android/);Qn(/Chrome/)&&Sh(/Google Inc/);Qn(/Firefox/);const Ah=Vi(/^iPad/)||Vi(/^Mac/)&&navigator.maxTouchPoints>1,Ch=Vi(/^iPhone/),Eh=Ch||Ah;Qn(/^((?!chrome|android).)*safari/i);const qx=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */function lc(){if(Eh){const e=window.innerHeight,r=window.innerWidth>e,n=document.documentElement.clientHeight;r&&n>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${n-e}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}lc();window.addEventListener("resize",lc);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Qe(e,t,r){return{index:e,removed:t,addedCount:r}}const cc=0,uc=1,Gi=2,Ji=3;function Ph(e,t,r,n,i,s){let o=s-i+1,a=r-t+1,l=new Array(o);for(let d=0;d<o;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<o;d++)for(let p=1;p<a;p++)if(Ns(e[t+p-1],n[i+d-1]))l[d][p]=l[d-1][p-1];else{let m=l[d-1][p]+1,y=l[d][p-1]+1;l[d][p]=m<y?m:y}return l}function Th(e){let t=e.length-1,r=e[0].length-1,n=e[t][r],i=[];for(;t>0||r>0;){if(t==0){i.push(Gi),r--;continue}if(r==0){i.push(Ji),t--;continue}let s=e[t-1][r-1],o=e[t-1][r],a=e[t][r-1],l;o<a?l=o<s?o:s:l=a<s?a:s,l==s?(s==n?i.push(cc):(i.push(uc),n=s),t--,r--):l==o?(i.push(Ji),t--,n=o):(i.push(Gi),r--,n=a)}return i.reverse(),i}function Oh(e,t,r,n,i,s){let o=0,a=0,l,d=Math.min(r-t,s-i);if(t==0&&i==0&&(o=Rh(e,n,d)),r==e.length&&s==n.length&&(a=$h(e,n,d-o)),t+=o,i+=o,r-=a,s-=a,r-t==0&&s-i==0)return[];if(t==r){for(l=Qe(t,[],0);i<s;)l.removed.push(n[i++]);return[l]}else if(i==s)return[Qe(t,[],r-t)];let p=Th(Ph(e,t,r,n,i,s));l=void 0;let m=[],y=t,S=i;for(let A=0;A<p.length;A++)switch(p[A]){case cc:l&&(m.push(l),l=void 0),y++,S++;break;case uc:l||(l=Qe(y,[],0)),l.addedCount++,y++,l.removed.push(n[S]),S++;break;case Gi:l||(l=Qe(y,[],0)),l.addedCount++,y++;break;case Ji:l||(l=Qe(y,[],0)),l.removed.push(n[S]),S++;break}return l&&m.push(l),m}function Rh(e,t,r){for(let n=0;n<r;n++)if(!Ns(e[n],t[n]))return n;return r}function $h(e,t,r){let n=e.length,i=t.length,s=0;for(;s<r&&Ns(e[--n],t[--i]);)s++;return s}function dc(e,t){return Oh(e,0,e.length,t,0,t.length)}function Ns(e,t){return e===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Nh=0,hc=0,$e=[],Ih=0,Yi=!1,pc=document.createTextNode("");new window.MutationObserver(Lh).observe(pc,{characterData:!0});function Lh(){Yi=!1;const e=$e.length;for(let t=0;t<e;t++){let r=$e[t];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}$e.splice(0,e),hc+=e}const ar={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Gt={run(e){return Yi||(Yi=!0,pc.textContent=Ih++),$e.push(e),Nh++},cancel(e){const t=e-hc;if(t>=0){if(!$e[t])throw new Error("invalid async handle: "+e);$e[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const C=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ae(e){return e.localName==="slot"}let Lt=class{static getFlattenedNodes(e){const t=C(e);return Ae(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(r=>Ae(r)?(r=r,C(r).assignedNodes({flatten:!0})):[r]).reduce((r,n)=>r.concat(n),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ae(this._target)?this._listenSlots([this._target]):C(this._target).children&&(this._listenSlots(C(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ae(this._target)?this._unlistenSlots([this._target]):C(this._target).children&&(this._unlistenSlots(C(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Gt.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=dc(t,this._effectiveNodes);for(let i=0,s;i<r.length&&(s=r[i]);i++)for(let o=0,a;o<s.removed.length&&(a=s.removed[o]);o++)e.removedNodes.push(a);for(let i=0,s;i<r.length&&(s=r[i]);i++)for(let o=s.index;o<s.index+s.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];Ae(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];Ae(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let on=!1,fc=[],mc=[];function _c(){on=!0,requestAnimationFrame(function(){on=!1,Mh(fc),setTimeout(function(){Dh(mc)})})}function Mh(e){for(;e.length;)yc(e.shift())}function Dh(e){for(let t=0,r=e.length;t<r;t++)yc(e.shift())}function yc(e){const t=e[0],r=e[1],n=e[2];try{r.apply(t,n)}catch(i){setTimeout(()=>{throw i})}}function jh(e,t,r){on||_c(),fc.push([e,t,r])}function gc(e,t,r){on||_c(),mc.push([e,t,r])}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Fh=/(url\()([^)]*)(\))/g,Bh=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Mr,ct;function lr(e,t){if(e&&Bh.test(e)||e==="//")return e;if(Mr===void 0){Mr=!1;try{const r=new URL("b","http://a");r.pathname="c%20d",Mr=r.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Mr)try{return new URL(e,t).href}catch{return e}return ct||(ct=document.implementation.createHTMLDocument("temp"),ct.base=ct.createElement("base"),ct.head.appendChild(ct.base),ct.anchor=ct.createElement("a"),ct.body.appendChild(ct.anchor)),ct.base.href=t,ct.anchor.href=e,ct.anchor.href||e}function Is(e,t){return e.replace(Fh,function(r,n,i,s){return n+"'"+lr(i.replace(/["']/g,""),t)+"'"+s})}function Ls(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ms=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const kh=Ms&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let zh=window.Polymer&&window.Polymer.rootPath||Ls(document.baseURI||window.location.href),an=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Uh=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Fe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Hh=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,br=window.Polymer&&window.Polymer.legacyOptimizations||!1,bc=window.Polymer&&window.Polymer.legacyWarnings||!1,qh=window.Polymer&&window.Polymer.syncInitialRender||!1,Wi=window.Polymer&&window.Polymer.legacyUndefined||!1,Vh=window.Polymer&&window.Polymer.orderedComputed||!1,Ds=!0;const Gh=function(e){Ds=e};let Ko=window.Polymer&&window.Polymer.removeNestedTemplates||!1,vc=window.Polymer&&window.Polymer.fastDomIf||!1,Qi=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Dr=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Jh=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Yh=0;const K=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=Yh++;function n(i){let s=i.__mixinSet;if(s&&s[r])return i;let o=t,a=o.get(i);if(!a){a=e(i),o.set(i,a);let l=Object.create(a.__mixinSet||s||null);l[r]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let js={},wc={};function Xo(e,t){js[e]=wc[e.toLowerCase()]=t}function Zo(e){return js[e]||wc[e.toLowerCase()]}function Wh(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class vr extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,r){if(t){let n=Zo(t);return n&&r?n.querySelector(r):n}return null}attributeChangedCallback(t,r,n,i){r!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,r=lr(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ls(r)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Fe&&Zo(t)!==void 0)throw Xo(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Xo(t,this),Wh(this)}}}vr.prototype.modules=js;customElements.define("dom-module",vr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qh="link[rel=import][type~=css]",Kh="include",ta="shady-unscoped";function Fs(e){return vr.import(e)}function ea(e){let t=e.body?e.body:e;const r=Is(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=r,n}function Xh(e){const t=e.trim().split(/\s+/),r=[];for(let n=0;n<t.length;n++)r.push(...Zh(t[n]));return r}function Zh(e){const t=Fs(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const r=[];r.push(...ks(t));const n=t.querySelector("template");n&&r.push(...Bs(n,t.assetpath)),t._styles=r}return t._styles}function Bs(e,t){if(!e._styles){const r=[],n=e.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let s=n[i],o=s.getAttribute(Kh);o&&r.push(...Xh(o).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(s.textContent=Is(s.textContent,t)),r.push(s)}e._styles=r}return e._styles}function tp(e){let t=Fs(e);return t?ks(t):[]}function ks(e){const t=[],r=e.querySelectorAll(Qh);for(let n=0;n<r.length;n++){let i=r[n];if(i.import){const s=i.import,o=i.hasAttribute(ta);if(o&&!s._unscopedStyle){const a=ea(s);a.setAttribute(ta,""),s._unscopedStyle=a}else s._style||(s._style=ea(s));t.push(o?s._unscopedStyle:s._style)}}return t}function ep(e){let t=e.trim().split(/\s+/),r="";for(let n=0;n<t.length;n++)r+=rp(t[n]);return r}function rp(e){let t=Fs(e);if(t&&t._cssText===void 0){let r=ip(t),n=t.querySelector("template");n&&(r+=np(n,t.assetpath)),t._cssText=r||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function np(e,t){let r="";const n=Bs(e,t);for(let i=0;i<n.length;i++){let s=n[i];s.parentNode&&s.parentNode.removeChild(s),r+=s.textContent}return r}function ip(e){let t="",r=ks(e);for(let n=0;n<r.length;n++)t+=r[n].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ki(e){return e.indexOf(".")>=0}function Ft(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function xc(e,t){return e.indexOf(t+".")===0}function wr(e,t){return t.indexOf(e+".")===0}function xr(e,t,r){return t+r.slice(e.length)}function sp(e,t){return e===t||xc(e,t)||wr(e,t)}function nr(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let n=e[r].toString().split(".");for(let i=0;i<n.length;i++)t.push(n[i])}return t.join(".")}else return e}function Sc(e){return Array.isArray(e)?nr(e).split("."):e.toString().split(".")}function nt(e,t,r){let n=e,i=Sc(t);for(let s=0;s<i.length;s++){if(!n)return;let o=i[s];n=n[o]}return r&&(r.path=i.join(".")),n}function ra(e,t,r){let n=e,i=Sc(t),s=i[i.length-1];if(i.length>1){for(let o=0;o<i.length-1;o++){let a=i[o];if(n=n[a],!n)return}n[s]=r}else n[t]=r;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ln={},op=/-[a-z]/g,ap=/([A-Z])/g;function zs(e){return ln[e]||(ln[e]=e.indexOf("-")<0?e:e.replace(op,t=>t[1].toUpperCase()))}function Kn(e){return ln[e]||(ln[e]=e.replace(ap,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lp=Gt,Ac=K(e=>{class t extends e{static createProperties(n){const i=this.prototype;for(let s in n)s in i||i._createPropertyAccessor(s)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,s){let o=this.__data[n],a=this._shouldPropertyChange(n,i,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,lp.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(n,i,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,s)),this.__dataCounter--}_shouldPropertiesChange(n,i,s){return!!i}_propertiesChanged(n,i,s){}_shouldPropertyChange(n,i,s){return s!==i&&(s===s||i===i)}attributeChangedCallback(n,i,s,o){i!==s&&this._attributeToProperty(n,s),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,s,o)}_attributeToProperty(n,i,s){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(i,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,s){this.__serializing=!0,s=arguments.length<3?this[n]:s,this._valueToNodeAttribute(this,s,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,s){const o=this._serializeValue(i);(s==="class"||s==="name"||s==="slot")&&(n=C(n)),o===void 0?n.removeAttribute(s):n.setAttribute(s,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n!=null?n.toString():void 0}}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Cc={};let jr=HTMLElement.prototype;for(;jr;){let e=Object.getOwnPropertyNames(jr);for(let t=0;t<e.length;t++)Cc[e[t]]=!0;jr=Object.getPrototypeOf(jr)}const cp=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function up(e,t){if(!Cc[t]){let r=e[t];r!==void 0&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}const Ec=K(e=>{const t=Ac(e);class r extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let s=0;s<i.length;s++)this.prototype._createPropertyAccessor(zs(i[s]))}static attributeNameForProperty(i){return Kn(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let s in i)this._setProperty(s,i[s])}_ensureAttribute(i,s){const o=this;o.hasAttribute(i)||this._valueToNodeAttribute(o,s,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(cp(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,s){let o;switch(s){case Object:try{o=JSON.parse(i)}catch{o=i}break;case Array:try{o=JSON.parse(i)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:o=isNaN(i)?String(i):Number(i),o=new Date(o);break;default:o=super._deserializeValue(i,s);break}return o}_definePropertyAccessor(i,s){up(this,i),super._definePropertyAccessor(i,s)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const dp={"dom-if":!0,"dom-repeat":!0};let na=!1,ia=!1;function hp(){if(!na){na=!0;const e=document.createElement("textarea");e.placeholder="a",ia=e.placeholder===e.textContent}return ia}function pp(e){hp()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const fp=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,r,n)=>{const i=r.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(i,n));return}t.setAttribute(n,i)}})();function mp(e){let t=e.getAttribute("is");if(t&&dp[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;){const{name:n}=r.attributes[0];fp(e,r,n),r.removeAttribute(n)}}return e}function Pc(e,t){let r=t.parentInfo&&Pc(e,t.parentInfo);if(r){for(let n=r.firstChild,i=0;n;n=n.nextSibling)if(t.parentIndex===i++)return n}else return e}function _p(e,t,r,n){n.id&&(t[n.id]=r)}function yp(e,t,r){if(r.events&&r.events.length)for(let n=0,i=r.events,s;n<i.length&&(s=i[n]);n++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function gp(e,t,r,n){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=n)}function bp(e,t,r){return e=e._methodHost||e,function(i){e[r]?e[r](i,i.detail):console.warn("listener method `"+r+"` not defined")}}const vp=K(e=>{class t extends e{static _parseTemplate(n,i){if(!n._templateInfo){let s=n._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!i,s.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,s,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,s){return this._parseTemplateNode(n.content,i,s)}static _parseTemplateNode(n,i,s){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,i,s)||o:a.localName==="slot"&&(i.hasInsertionPoint=!0),pp(a),a.firstChild&&this._parseTemplateChildNodes(a,i,s),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,i,s)||o),o||s.noted}static _parseTemplateChildNodes(n,i,s){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=mp(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let p=l;for(;p&&p.nodeType===Node.TEXT_NODE;)o.textContent+=p.textContent,l=p.nextSibling,n.removeChild(p),p=l;if(i.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let d={parentIndex:a,parentInfo:s};this._parseTemplateNode(o,i,d)&&(d.infoIndex=i.nodeInfoList.push(d)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,s){let o=n,a=this._parseTemplate(o,i);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,s){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,d;d=a[l];l--)o=this._parseTemplateNodeAttribute(n,i,s,d.name,d.value)||o;return o}static _parseTemplateNodeAttribute(n,i,s,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),s.events=s.events||[],s.events.push({name:o.slice(3),value:a}),!0):o==="id"?(s.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let s=i.nodeInfoList,o=i.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let d=0,p=s.length,m;d<p&&(m=s[d]);d++){let y=l[d]=Pc(a,m);_p(this,a.$,y,m),gp(this,y,m,i),yp(this,y,m)}return a=a,a}_addMethodEventListenerToNode(n,i,s,o){o=o||n;let a=bp(o,i,s);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,s){n.addEventListener(i,s)}_removeEventListenerFromNode(n,i,s){n.removeEventListener(i,s)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Sr=0;const Ar=[],L={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Tc="__computeInfo",wp=/[A-Z]/;function _i(e,t,r){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),r))for(let i in n){let s=n[i],o=n[i]=Array(s.length);for(let a=0;a<s.length;a++)o[a]=s[a]}return n}function ir(e,t,r,n,i,s){if(t){let o=!1;const a=Sr++;for(let l in r){let d=i?Ft(l):l,p=t[d];if(p)for(let m=0,y=p.length,S;m<y&&(S=p[m]);m++)(!S.info||S.info.lastRun!==a)&&(!i||Us(l,S.trigger))&&(S.info&&(S.info.lastRun=a),S.fn(e,l,r,n,S.info,i,s),o=!0)}return o}return!1}function xp(e,t,r,n,i,s,o,a){let l=!1,d=o?Ft(n):n,p=t[d];if(p)for(let m=0,y=p.length,S;m<y&&(S=p[m]);m++)(!S.info||S.info.lastRun!==r)&&(!o||Us(n,S.trigger))&&(S.info&&(S.info.lastRun=r),S.fn(e,n,i,s,S.info,o,a),l=!0);return l}function Us(e,t){if(t){let r=t.name;return r==e||!!(t.structured&&xc(r,e))||!!(t.wildcard&&wr(r,e))}else return!0}function sa(e,t,r,n,i){let s=typeof i.method=="string"?e[i.method]:i.method,o=i.property;s?s.call(e,e.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Sp(e,t,r,n,i){let s=e[L.NOTIFY],o,a=Sr++;for(let d in t)t[d]&&(s&&xp(e,s,a,d,r,n,i)||i&&Ap(e,d,r))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Ap(e,t,r){let n=Ft(t);if(n!==t){let i=Kn(n)+"-changed";return Oc(e,i,r[t],t),!0}return!1}function Oc(e,t,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),C(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Cp(e,t,r,n,i,s){let a=(s?Ft(t):t)!=t?t:null,l=a?nt(e,a):e.__data[t];a&&l===void 0&&(l=r[t]),Oc(e,i.eventName,l,a)}function Ep(e,t,r,n,i){let s,o=e.detail,a=o&&o.path;a?(n=xr(r,n,a),s=o&&o.value):s=e.currentTarget[r],s=i?!s:s,(!t[L.READ_ONLY]||!t[L.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,s,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Pp(e,t,r,n,i){let s=e.__data[t];an&&(s=an(s,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,s)}function Tp(e,t,r,n){let i=e[L.COMPUTE];if(i)if(Vh){Sr++;const s=Rp(e),o=[];for(let l in t)oa(l,i,o,s,n);let a;for(;a=o.shift();)Rc(e,"",t,r,a)&&oa(a.methodInfo,i,o,s,n);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;ir(e,i,s,r,n);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const Op=(e,t,r)=>{let n=0,i=t.length-1,s=-1;for(;n<=i;){const o=n+i>>1,a=r.get(t[o].methodInfo)-r.get(e.methodInfo);if(a<0)n=o+1;else if(a>0)i=o-1;else{s=o;break}}s<0&&(s=i+1),t.splice(s,0,e)},oa=(e,t,r,n,i)=>{const s=i?Ft(e):e,o=t[s];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Sr&&(!i||Us(e,l.trigger))&&(l.info.lastRun=Sr,Op(l.info,r,n))}};function Rp(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[L.COMPUTE];let{counts:n,ready:i,total:s}=$p(e),o;for(;o=i.shift();){t.set(o,t.size);const a=r[o];a&&a.forEach(l=>{const d=l.info.methodInfo;--s,--n[d]===0&&i.push(d)})}s!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function $p(e){const t=e[Tc],r={},n=e[L.COMPUTE],i=[];let s=0;for(let o in t){const a=t[o];s+=r[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)t[o]||i.push(o);return{counts:r,ready:i,total:s}}function Rc(e,t,r,n,i){let s=Xi(e,t,r,n,i);if(s===Ar)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function Np(e,t,r){let n=e.__dataLinkedPaths;if(n){let i;for(let s in n){let o=n[s];wr(s,t)?(i=xr(s,o,t),e._setPendingPropertyOrPath(i,r,!0,!0)):wr(o,t)&&(i=xr(o,s,t),e._setPendingPropertyOrPath(i,r,!0,!0))}}}function yi(e,t,r,n,i,s,o){r.bindings=r.bindings||[];let a={kind:n,target:i,parts:s,literal:o,isCompound:s.length!==1};if(r.bindings.push(a),jp(a)){let{event:d,negate:p}=a.parts[0];a.listenerEvent=d||Kn(i)+"-changed",a.listenerNegate=p}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let p=a.parts[d];p.compoundIndex=d,Ip(e,t,a,p,l)}}function Ip(e,t,r,n,i){if(!n.literal)if(r.kind==="attribute"&&r.target[0]==="-")console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,o={index:i,binding:r,part:n,evaluator:e};for(let a=0;a<s.length;a++){let l=s[a];typeof l=="string"&&(l=Nc(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:Lp,info:o,trigger:l})}}}function Lp(e,t,r,n,i,s,o){let a=o[i.index],l=i.binding,d=i.part;if(s&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let p=r[t];t=xr(d.source,l.target,t),a._setPendingPropertyOrPath(t,p,!1,!0)&&e._enqueueClient(a)}else{let p=i.evaluator._evaluateBinding(e,d,t,r,n,s);p!==Ar&&Mp(e,a,l,d,p)}}function Mp(e,t,r,n,i){if(i=Dp(t,i,r,n),an&&(i=an(i,r.target,r.kind,t)),r.kind=="attribute")e._valueToNodeAttribute(t,i,r.target);else{let s=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[L.READ_ONLY]||!t[L.READ_ONLY][s])&&t._setPendingProperty(s,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,i)}}function Dp(e,t,r,n){if(r.isCompound){let i=e.__dataCompoundStorage[r.target];i[n.compoundIndex]=t,t=i.join("")}return r.kind!=="attribute"&&(r.target==="textContent"||r.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function jp(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Fp(e,t){let{nodeList:r,nodeInfoList:n}=t;if(n.length)for(let i=0;i<n.length;i++){let s=n[i],o=r[i],a=s.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];Bp(o,d),kp(o,e,d)}o.__dataHost=e}}function Bp(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let o=0;o<n.length;o++)i[o]=n[o].literal;let s=t.target;r[s]=i,t.literal&&t.kind=="property"&&(s==="className"&&(e=C(e)),e[s]=t.literal)}}function kp(e,t,r){if(r.listenerEvent){let n=r.parts[0];e.addEventListener(r.listenerEvent,function(i){Ep(i,t,r.target,n.source,n.negate)})}}function aa(e,t,r,n,i,s){s=t.static||s&&(typeof s!="object"||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:s};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,r,{fn:n,info:o,trigger:l});return s&&e._addPropertyEffect(t.methodName,r,{fn:n,info:o}),o}function Xi(e,t,r,n,i){let s=e._methodHost||e,o=s[i.methodName];if(o){let a=e._marshalArgs(i.args,t,r);return a===Ar?Ar:o.apply(s,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const zp=[],$c="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Up="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Hp="(?:'(?:[^'\\\\]|\\\\.)*')",qp='(?:"(?:[^"\\\\]|\\\\.)*")',Vp="(?:"+Hp+"|"+qp+")",la="(?:("+$c+"|"+Up+"|"+Vp+")\\s*)",Gp="(?:"+la+"(?:,\\s*"+la+")*)",Jp="(?:\\(\\s*(?:"+Gp+"?)\\)\\s*)",Yp="("+$c+"\\s*"+Jp+"?)",Wp="(\\[\\[|{{)\\s*",Qp="(?:]]|}})",Kp="(?:(!)\\s*)?",Xp=Wp+Kp+Yp+Qp,ca=new RegExp(Xp,"g");function ua(e){let t="";for(let r=0;r<e.length;r++){let n=e[r].literal;t+=n||""}return t}function gi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:zp};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return Zp(i,n)}else return n}return null}function Zp(e,t){return t.args=e.map(function(r){let n=Nc(r);return n.literal||(t.static=!1),n},this),t}function Nc(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0;break}return r.literal||(r.rootProperty=Ft(t),r.structured=Ki(t),r.structured&&(r.wildcard=t.slice(-2)==".*",r.wildcard&&(r.name=t.slice(0,-2)))),r}function da(e,t,r){let n=nt(e,r);return n===void 0&&(n=t[r]),n}function Ic(e,t,r,n){const i={indexSplices:n};Wi&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(r+".splices",i),e.notifyPath(r+".length",t.length),Wi&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Ke(e,t,r,n,i,s){Ic(e,t,r,[{index:n,addedCount:i,removed:s,object:t,type:"splice"}])}function tf(e){return e[0].toUpperCase()+e.substring(1)}const Xn=K(e=>{const t=vp(Ec(e));class r extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return L}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Xe.length){let i=Xe[Xe.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let s=this[L.READ_ONLY];for(let o in i)(!s||!s[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=i[o])}_addPropertyEffect(i,s,o){this._createPropertyAccessor(i,s==L.READ_ONLY);let a=_i(this,s,!0)[i];a||(a=this[s][i]=[]),a.push(o)}_removePropertyEffect(i,s,o){let a=_i(this,s,!0)[i],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,s){let o=this[s];return!!(o&&o[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,L.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,L.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,L.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,L.COMPUTE)}_setPendingPropertyOrPath(i,s,o,a){if(a||Ft(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=nt(this,i);if(i=ra(this,i,s),!i||!super._shouldPropertyChange(i,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,s,o))return Np(this,i,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,s,o);this[i]=s}return!1}_setUnmanagedPropertyToNode(i,s,o){(o!==i[s]||typeof o=="object")&&(s==="className"&&(i=C(i)),i[s]=o)}_setPendingProperty(i,s,o){let a=this.__dataHasPaths&&Ki(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,s,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=s:this.__data[i]=s,this.__dataPending[i]=s,(a||this[L.NOTIFY]&&this[L.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=o),!0):!1}_setProperty(i,s){this._setPendingProperty(i,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let s=0;s<i.length;s++){let o=i[s];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,s){for(let o in i)(s||!this[L.READ_ONLY]||!this[L.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,s,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Tp(this,s,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,o,a),this._flushClients(),ir(this,this[L.REFLECT],s,o,a),ir(this,this[L.OBSERVE],s,o,a),l&&Sp(this,l,s,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,s,o){this[L.PROPAGATE]&&ir(this,this[L.PROPAGATE],i,s,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,s,o)}_runEffectsForTemplate(i,s,o,a){const l=(d,p)=>{ir(this,i.propertyEffects,d,o,p,i.nodeList);for(let m=i.firstChild;m;m=m.nextSibling)this._runEffectsForTemplate(m,d,o,p)};i.runEffects?i.runEffects(l,s,a):l(s,a)}linkPaths(i,s){i=nr(i),s=nr(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=s}unlinkPaths(i){i=nr(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,s){let o={path:""},a=nt(this,i,o);Ic(this,a,o.path,s)}get(i,s){return nt(s||this,i)}set(i,s,o){o?ra(o,i,s):(!this[L.READ_ONLY]||!this[L.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,s,!0)&&this._invalidateProperties()}push(i,...s){let o={path:""},a=nt(this,i,o),l=a.length,d=a.push(...s);return s.length&&Ke(this,a,o.path,l,s.length,[]),d}pop(i){let s={path:""},o=nt(this,i,s),a=!!o.length,l=o.pop();return a&&Ke(this,o,s.path,o.length,0,[l]),l}splice(i,s,o,...a){let l={path:""},d=nt(this,i,l);s<0?s=d.length-Math.floor(-s):s&&(s=Math.floor(s));let p;return arguments.length===2?p=d.splice(s):p=d.splice(s,o,...a),(a.length||p.length)&&Ke(this,d,l.path,s,a.length,p),p}shift(i){let s={path:""},o=nt(this,i,s),a=!!o.length,l=o.shift();return a&&Ke(this,o,s.path,0,0,[l]),l}unshift(i,...s){let o={path:""},a=nt(this,i,o),l=a.unshift(...s);return s.length&&Ke(this,a,o.path,0,s.length,[]),l}notifyPath(i,s){let o;if(arguments.length==1){let a={path:""};s=nt(this,i,a),o=a.path}else Array.isArray(i)?o=nr(i):o=i;this._setPendingPropertyOrPath(o,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,s){this._addPropertyEffect(i,L.READ_ONLY),s&&(this["_set"+tf(i)]=function(o){this._setProperty(i,o)})}_createPropertyObserver(i,s,o){let a={property:i,method:s,dynamicFn:!!o};this._addPropertyEffect(i,L.OBSERVE,{fn:sa,info:a,trigger:{name:i}}),o&&this._addPropertyEffect(s,L.OBSERVE,{fn:sa,info:a,trigger:{name:s}})}_createMethodObserver(i,s){let o=gi(i);if(!o)throw new Error("Malformed observer expression '"+i+"'");aa(this,o,L.OBSERVE,Xi,null,s)}_createNotifyingProperty(i){this._addPropertyEffect(i,L.NOTIFY,{fn:Cp,info:{eventName:Kn(i)+"-changed",property:i}})}_createReflectedProperty(i){let s=this.constructor.attributeNameForProperty(i);s[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,L.REFLECT,{fn:Pp,info:{attrName:s}})}_createComputedProperty(i,s,o){let a=gi(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=aa(this,a,L.COMPUTE,Rc,i,o);_i(this,Tc)[i]=l}_marshalArgs(i,s,o){const a=this.__data,l=[];for(let d=0,p=i.length;d<p;d++){let{name:m,structured:y,wildcard:S,value:A,literal:R}=i[d];if(!R)if(S){const j=wr(m,s),N=da(a,o,j?s:m);A={path:j?s:m,value:N,base:j?nt(a,m):N}}else A=y?da(a,o,m):a[m];if(Wi&&!this._overrideLegacyUndefined&&A===void 0&&i.length>1)return Ar;l[d]=A}return l}static addPropertyEffect(i,s,o){this.prototype._addPropertyEffect(i,s,o)}static createPropertyObserver(i,s,o){this.prototype._createPropertyObserver(i,s,o)}static createMethodObserver(i,s){this.prototype._createMethodObserver(i,s)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,s){this.prototype._createReadOnlyProperty(i,s)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,s,o){this.prototype._createComputedProperty(i,s,o)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,s){let o=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(s)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=i._parentTemplateInfo||this.__templateInfo,d=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=d,d?d.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(i,s,o){let a=i.hostProps=i.hostProps||{};a[s]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[s]=l[s]||[]).push(o)}_stampTemplate(i,s){s=s||this._bindTemplate(i,!0),Xe.push(this);let o=super._stampTemplate(i,s);if(Xe.pop(),s.nodeList=o.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=s,Fp(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(i){const s=i.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=s;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),s.nextSibling=s.previousSibling=null;let d=s.childNodes;for(let p=0;p<d.length;p++){let m=d[p];C(C(m).parentNode).removeChild(m)}}static _parseTemplateNode(i,s,o){let a=t._parseTemplateNode.call(this,i,s,o);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,s);l&&(i.textContent=ua(l)||" ",yi(this,s,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,s,o,a,l){let d=this._parseBindings(l,s);if(d){let p=a,m="property";wp.test(a)?m="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),m="attribute");let y=ua(d);return y&&m=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(y+=" "+i.getAttribute(a)),i.setAttribute(a,y)),m=="attribute"&&p=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&p==="value"&&i.setAttribute(p,""),i.removeAttribute(p),m==="property"&&(a=zs(a)),yi(this,s,o,m,a,d,y),!0}else return t._parseTemplateNodeAttribute.call(this,i,s,o,a,l)}static _parseTemplateNestedTemplate(i,s,o){let a=t._parseTemplateNestedTemplate.call(this,i,s,o);const l=i.parentNode,d=o.templateInfo,p=l.localName==="dom-if",m=l.localName==="dom-repeat";Ko&&(p||m)&&(l.removeChild(i),o=o.parentInfo,o.templateInfo=d,o.noted=!0,a=!1);let y=d.hostProps;if(vc&&p)y&&(s.hostProps=Object.assign(s.hostProps||{},y),Ko||(o.parentInfo.noted=!0));else{let S="{";for(let A in y){let R=[{mode:S,source:A,dependencies:[A],hostProp:!0}];yi(this,s,o,"property","_host_"+A,R)}}return a}static _parseBindings(i,s){let o=[],a=0,l;for(;(l=ca.exec(i))!==null;){l.index>a&&o.push({literal:i.slice(a,l.index)});let d=l[1][0],p=!!l[2],m=l[3].trim(),y=!1,S="",A=-1;d=="{"&&(A=m.indexOf("::"))>0&&(S=m.substring(A+2),m=m.substring(0,A),y=!0);let R=gi(m),j=[];if(R){let{args:N,methodName:P}=R;for(let G=0;G<N.length;G++){let Z=N[G];Z.literal||j.push(Z)}let I=s.dynamicFns;(I&&I[P]||R.static)&&(j.push(P),R.dynamicFn=!0)}else j.push(m);o.push({source:m,mode:d,negate:p,customEvent:y,signature:R,dependencies:j,event:S}),a=ca.lastIndex}if(a&&a<i.length){let d=i.substring(a);d&&o.push({literal:d})}return o.length?o:null}static _evaluateBinding(i,s,o,a,l,d){let p;return s.signature?p=Xi(i,o,a,l,s.signature):o!=s.source?p=nt(i,s.source):d&&Ki(o)?p=nt(i,o):p=i.__data[o],s.negate&&(p=!p),p}}return r}),Xe=[];/**
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
*/function ef(e){const t={};for(let r in e){const n=e[r];t[r]=typeof n=="function"?{type:n}:n}return t}const rf=K(e=>{const t=Ac(e);function r(s){const o=Object.getPrototypeOf(s);return o.prototype instanceof i?o:null}function n(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let o=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(o=ef(a))}s.__ownProperties=o}return s.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=r(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=r(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const nf="3.5.1",Zi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Zn=K(e=>{const t=rf(Xn(e));function r(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let p in d){let m=d[p];"value"in m&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[p]=m)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,d,p,m){p.computed&&(p.readOnly=!0),p.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,p.computed,m)),p.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!p.computed):p.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),p.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):p.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),p.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):p.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),p.observer&&l._createPropertyObserver(d,p.observer,m[p.observer]),l._addPropertyToAttributeMap(d)}function s(l,d,p,m){if(!Zi){const y=d.content.querySelectorAll("style"),S=Bs(d),A=tp(p),R=d.content.firstElementChild;for(let N=0;N<A.length;N++){let P=A[N];P.textContent=l._processStyleText(P.textContent,m),d.content.insertBefore(P,R)}let j=0;for(let N=0;N<S.length;N++){let P=S[N],I=y[j];I!==P?(P=P.cloneNode(!0),I.parentNode.insertBefore(P,I)):j++,P.textContent=l._processStyleText(P.textContent,m)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,p),Jh&&Zi&&kh){const y=d.content.querySelectorAll("style");if(y){let S="";Array.from(y).forEach(A=>{S+=A.textContent,A.parentNode.removeChild(A)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(S)}}}function o(l){let d=null;if(l&&(!Fe||Hh)&&(d=vr.import(l,"template"),Fe&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return nf}static _finalizeClass(){t._finalizeClass.call(this);const d=n(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):br||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let p in d)i(this.prototype,p,d[p],d)}static createObservers(d,p){const m=this.prototype;for(let y=0;y<d.length;y++)m._createMethodObserver(d[y],p)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Ls(d.url);else{const p=vr.import(this.is);this._importPath=p&&p.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=zh,this.importPath=this.constructor.importPath;let d=r(this.constructor);if(d)for(let p in d){let m=d[p];if(this._canApplyPropertyDefault(p)){let y=typeof m.value=="function"?m.value.call(this):m.value;this._hasAccessor(p)?this._setPendingProperty(p,y,!0):this[p]=y}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,p){return Is(d,p)}static _finalizeTemplate(d){const p=this.prototype._template;if(p&&!p.__polymerFinalized){p.__polymerFinalized=!0;const m=this.importPath,y=m?lr(m):"";s(this,p,d,y),this.prototype._bindTemplate(p)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const p=C(this);if(p.attachShadow)return d?(p.shadowRoot||(p.attachShadow({mode:"open",shadyUpgradeFragment:d}),p.shadowRoot.appendChild(d),this.constructor._styleSheet&&(p.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),qh&&window.ShadyDOM&&window.ShadyDOM.flushInitial(p.shadowRoot),p.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,p){return!p&&this.importPath&&(p=lr(this.importPath)),lr(d,p)}static _parseTemplateContent(d,p,m){return p.dynamicFns=p.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,p,m)}static _addTemplatePropertyEffect(d,p,m){return bc&&!(p in this._properties)&&!(m.info.part.signature&&m.info.part.signature.static)&&!m.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${p}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,p,m)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ha=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Lc{constructor(t,r){Dc(t,r);const n=r.reduce((i,s,o)=>i+Mc(s)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function Mc(e){if(e instanceof Lc)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function sf(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Lc)return Mc(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const _e=function(t,...r){Dc(t,r);const n=document.createElement("template");let i=r.reduce((s,o,a)=>s+sf(o)+t[a+1],t[0]);return ha&&(i=ha.createHTML(i)),n.innerHTML=i,n},Dc=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bt=Zn(HTMLElement);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Hs=K(e=>class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(r=>{r.hostConnected&&r.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(r=>{r.hostDisconnected&&r.hostDisconnected()})}addController(r){this.__controllers.add(r),this.$!==void 0&&this.isConnected&&r.hostConnected&&r.hostConnected()}removeController(r){this.__controllers.delete(r)}}),of=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Xr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function af(){function e(){return!0}return jc(e)}function lf(){try{return cf()?!0:uf()?Xr?!df():!af():!1}catch{return!1}}function cf(){return localStorage.getItem("vaadin.developmentmode.force")}function uf(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function df(){return!!(Xr&&Object.keys(Xr).map(t=>Xr[t]).filter(t=>t.productionMode).length>0)}function jc(e,t){if(typeof e!="function")return;const r=of.exec(e.toString());if(r)try{e=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(t)}window.Vaadin=window.Vaadin||{};const pa=function(e,t){if(window.Vaadin.developmentMode)return jc(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=lf());function hf(){}const pf=function(){if(typeof pa=="function")return pa(hf)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let fa=0,Fc=0;const Ne=[];let ma=0,ts=!1;const Bc=document.createTextNode("");new window.MutationObserver(ff).observe(Bc,{characterData:!0});function ff(){ts=!1;const e=Ne.length;for(let t=0;t<e;t++){const r=Ne[t];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}Ne.splice(0,e),Fc+=e}const mf={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},_f={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},yf={run(e){ts||(ts=!0,Bc.textContent=ma,ma+=1),Ne.push(e);const t=fa;return fa+=1,t},cancel(e){const t=e-Fc;if(t>=0){if(!Ne[t])throw new Error(`invalid async handle: ${e}`);Ne[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let kc=class es{static debounce(t,r,n){return t instanceof es?t._cancelAsync():t=new es,t.setConfig(r,n),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,r){this._asyncModule=t,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,rs.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),rs.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}},rs=new Set;function gf(e){rs.add(e)}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Ie{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let r="reverse";return t.scrollLeft>0?r="default":(t.scrollLeft=2,t.scrollLeft<2&&(r="negative")),document.body.removeChild(t),r}static getNormalizedScrollLeft(t,r,n){const{scrollLeft:i}=n;if(r!=="rtl"||!t)return i;switch(t){case"negative":return n.scrollWidth-n.clientWidth+i;case"reverse":return n.scrollWidth-n.clientWidth-i;default:return i}}static setNormalizedScrollLeft(t,r,n,i){if(r!=="rtl"||!t){n.scrollLeft=i;return}switch(t){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+i;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-i;break;default:n.scrollLeft=i;break}}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Ot=[];function bf(){const e=is();Ot.forEach(t=>{ns(t,e)})}let Fr;const vf=new MutationObserver(bf);vf.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function ns(e,t,r=e.getAttribute("dir")){t?e.setAttribute("dir",t):r!=null&&e.removeAttribute("dir")}function is(){return document.documentElement.getAttribute("dir")}const wf=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:r=>r||"",toAttribute:r=>r===""?null:r}}}}static finalize(){super.finalize(),Fr||(Fr=Ie.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),ns(this,is(),null))}attributeChangedCallback(r,n,i){if(super.attributeChangedCallback(r,n,i),r!=="dir")return;const s=is(),o=i===s&&Ot.indexOf(this)===-1,a=!i&&n&&Ot.indexOf(this)===-1;o||a?(this.__subscribe(),ns(this,s,i)):i!==s&&n===s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ot.includes(this),this.__unsubscribe()}_valueToNodeAttribute(r,n,i){i==="dir"&&n===""&&!r.hasAttribute("dir")||super._valueToNodeAttribute(r,n,i)}_attributeToProperty(r,n,i){r==="dir"&&!n?this.dir="":super._attributeToProperty(r,n,i)}__subscribe(){Ot.includes(this)||Ot.push(this)}__unsubscribe(){Ot.includes(this)&&Ot.splice(Ot.indexOf(this),1)}__getNormalizedScrollLeft(r){return Ie.getNormalizedScrollLeft(Fr,this.getAttribute("dir")||"ltr",r)}__setNormalizedScrollLeft(r,n){return Ie.setNormalizedScrollLeft(Fr,this.getAttribute("dir")||"ltr",r,n)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */Gh(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){pf()};let bi;const _a=new Set,qe=e=>class extends wf(e){static get version(){return"23.5.3"}static finalize(){super.finalize();const{is:r}=this;r&&!_a.has(r)&&(window.Vaadin.registrations.push(this),_a.add(r),window.Vaadin.developmentModeCallback&&(bi=kc.debounce(bi,_f,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),gf(bi)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */let qs=!1;window.addEventListener("keydown",()=>{qs=!0},{capture:!0});window.addEventListener("mousedown",()=>{qs=!1},{capture:!0});function xf(){return qs}function zc(e){const t=e.style;if(t.visibility==="hidden"||t.display==="none")return!0;const r=window.getComputedStyle(e);return r.visibility==="hidden"||r.display==="none"}function Sf(e){if(!Ef(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}function Af(e,t){const r=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return r===0||n===0?n>r:r>n}function Cf(e,t){const r=[];for(;e.length>0&&t.length>0;)Af(e[0],t[0])?r.push(t.shift()):r.push(e.shift());return r.concat(e,t)}function ss(e){const t=e.length;if(t<2)return e;const r=Math.ceil(t/2),n=ss(e.slice(0,r)),i=ss(e.slice(r));return Cf(n,i)}function Uc(e,t){if(e.nodeType!==Node.ELEMENT_NODE||zc(e))return!1;const r=e,n=Sf(r);let i=n>0;n>=0&&t.push(r);let s=[];return r.localName==="slot"?s=r.assignedNodes({flatten:!0}):s=(r.shadowRoot||r).children,[...s].forEach(o=>{i=Uc(o,t)||i}),i}function ya(e){return e.offsetParent===null&&e.clientWidth===0&&e.clientHeight===0?!0:zc(e)}function Ef(e){return e.matches('[tabindex="-1"]')?!1:e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Hc(e){return e.getRootNode().activeElement===e}function Pf(e){const t=[];return Uc(e,t)?ss(t):t}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const vi=[];class Tf{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");vi.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,vi.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(vi).pop()&&t.key==="Tab"){t.preventDefault();const r=t.shiftKey;this.__focusNextElement(r)}}__focusNextElement(t=!1){const r=this.__focusableElements,n=t?-1:1,i=this.__focusedElementIndex,s=(r.length+i+n)%r.length,o=r[s];o.focus(),o.localName==="input"&&o.select()}get __focusableElements(){return Pf(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(Hc).pop())}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class ga extends qe(He(Hs(Bt))){static get template(){return _e`
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
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new Tf(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),jh(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new Lt(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new Lt(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new Lt(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,r){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):r&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,r=this.$.drawer;t===0?r.setAttribute("hidden",""):r.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const r=this.$.navbarTop.getBoundingClientRect(),i=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${r.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${i.height}px`);const o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${o.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:r}=this.$.drawer,n=t>r?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",n)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,r){r&&window.removeEventListener(r,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",r=this.querySelectorAll('[slot*="navbar"]');r.length>0&&Array.from(r).forEach(n=>{n.getAttribute("slot").indexOf("touch-optimized")>-1&&(n.__touchOptimized=!0),t&&n.__touchOptimized?n.setAttribute("slot","navbar-bottom"):n.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),gc(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(ga.is,ga);/**
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
 */const Of=rt`
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
`,qc=document.createElement("template");qc.innerHTML=`<style>${Of.toString().replace(":host","html")}</style>`;document.head.appendChild(qc.content);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Rf=rt`
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
`;rt`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const Vc=document.createElement("template");Vc.innerHTML=`<style>${Rf.toString().replace(":host","html")}$</style>`;document.head.appendChild(Vc.content);jt("vaadin-tab",rt`
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
 */let $f=0;function Nf(){return $f++}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Vs extends EventTarget{static generateId(t,r){return`${t||"default"}-${r.localName}-${Nf()}`}constructor(t,r,n,i,s){super(),this.host=t,this.slotName=r,this.slotFactory=n,this.slotInitializer=i,s&&(this.defaultId=Vs.generateId(r,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:r,slotFactory:n}=this;let i=this.defaultNode;return!i&&n&&(i=n(t),i instanceof Element&&(r!==""&&i.setAttribute("slot",r),this.node=i,this.defaultNode=i)),i&&t.appendChild(i),i}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(r=>r.nodeType===Node.ELEMENT_NODE&&r.slot===t||r.nodeType===Node.TEXT_NODE&&r.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:r}=this;r&&r(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,r=t===""?"slot:not([name])":`slot[name=${t}]`,n=this.host.shadowRoot.querySelector(r);this.__slotObserver=new Lt(n,i=>{const s=this.node,o=i.addedNodes.find(a=>a!==s);i.removedNodes.length&&i.removedNodes.forEach(a=>{this.teardownNode(a)}),o&&(s&&s.isConnected&&this.host.removeChild(s),this.node=o,o!==this.defaultNode&&(this.initCustomNode(o),this.initNode(o)))})}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Gc extends Vs{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const r=this.node;r&&(r.context=t)}setManual(t){this.manual=t;const r=this.node;r&&(r.manual=t)}setOpened(t){this.opened=t;const r=this.node;r&&(r.opened=t)}setPosition(t){this.position=t;const r=this.node;r&&(r._position=t)}setShouldShow(t){this.shouldShow=t;const r=this.node;r&&(r.shouldShow=t)}setTarget(t){this.target=t;const r=this.node;r&&(r.target=t)}}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Jc=K(e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(r){this._setAriaDisabled(r)}_setAriaDisabled(r){r?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const If=!1,Lf=e=>e,Gs=typeof document.head.style.touchAction=="string",os="__polymerGestures",wi="__polymerGesturesHandled",as="__polymerGesturesTouchAction",ba=25,va=5,Mf=2,Df=["mousedown","mousemove","mouseup","click"],jf=[0,1,4,2],Ff=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Js(e){return Df.indexOf(e)>-1}let Yc=!1;(function(){try{const e=Object.defineProperty({},"passive",{get(){Yc=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Bf(e){if(!(Js(e)||e==="touchend")&&Gs&&Yc&&If)return{passive:!0}}const kf=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),zf={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function le(e){const t=e.type;if(!Js(t))return!1;if(t==="mousemove"){let n=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!Ff&&(n=jf[e.which]||0),!!(n&1)}return(e.button===void 0?0:e.button)===0}function Uf(e){if(e.type==="click"){if(e.detail===0)return!0;const t=Jt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const r=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}const Rt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Hf(e){let t="auto";const r=Qc(e);for(let n=0,i;n<r.length;n++)if(i=r[n],i[as]){t=i[as];break}return t}function Wc(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Le(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Qc=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Ys={},oe=[];function qf(e,t){let r=document.elementFromPoint(e,t),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const i=n;if(n=n.shadowRoot.elementFromPoint(e,t),i===n)break;n&&(r=n)}return r}function Jt(e){const t=Qc(e);return t.length>0?t[0]:e.target}function Vf(e){const t=e.type,n=e.currentTarget[os];if(!n)return;const i=n[t];if(!i)return;if(!e[wi]&&(e[wi]={},t.startsWith("touch"))){const o=e.changedTouches[0];if(t==="touchstart"&&e.touches.length===1&&(Rt.touch.id=o.identifier),Rt.touch.id!==o.identifier)return;Gs||(t==="touchstart"||t==="touchmove")&&Gf(e)}const s=e[wi];if(!s.skip){for(let o=0,a;o<oe.length;o++)a=oe[o],i[a.name]&&!s[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<oe.length;o++)a=oe[o],i[a.name]&&!s[a.name]&&(s[a.name]=!0,a[t](e))}}function Gf(e){const t=e.changedTouches[0],r=e.type;if(r==="touchstart")Rt.touch.x=t.clientX,Rt.touch.y=t.clientY,Rt.touch.scrollDecided=!1;else if(r==="touchmove"){if(Rt.touch.scrollDecided)return;Rt.touch.scrollDecided=!0;const n=Hf(e);let i=!1;const s=Math.abs(Rt.touch.x-t.clientX),o=Math.abs(Rt.touch.y-t.clientY);e.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=o>s:n==="pan-y"&&(i=s>o)),i?e.preventDefault():cn("track")}}function cr(e,t,r){return Ys[t]?(Jf(e,t,r),!0):!1}function Jf(e,t,r){const n=Ys[t],i=n.deps,s=n.name;let o=e[os];o||(e[os]=o={});for(let a=0,l,d;a<i.length;a++)l=i[a],!(kf&&Js(l)&&l!=="click")&&(d=o[l],d||(o[l]=d={_count:0}),d._count===0&&e.addEventListener(l,Vf,Bf(l)),d[s]=(d[s]||0)+1,d._count=(d._count||0)+1);e.addEventListener(t,r),n.touchAction&&Wf(e,n.touchAction)}function Ws(e){oe.push(e);for(let t=0;t<e.emits.length;t++)Ys[e.emits[t]]=e}function Yf(e){for(let t=0,r;t<oe.length;t++){r=oe[t];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===e)return r}return null}function Wf(e,t){Gs&&e instanceof HTMLElement&&yf.run(()=>{e.style.touchAction=t}),e[as]=t}function Qs(e,t,r){const n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,Lf(e).dispatchEvent(n),n.defaultPrevented){const i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function cn(e){const t=Yf(e);t.info&&(t.info.prevent=!0)}Ws({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Le(this.info)},mousedown(e){if(!le(e))return;const t=Jt(e),r=this,n=s=>{le(s)||(Ze("up",t,s),Le(r.info))},i=s=>{le(s)&&Ze("up",t,s),Le(r.info)};Wc(this.info,n,i),Ze("down",t,e)},touchstart(e){Ze("down",Jt(e),e.changedTouches[0],e)},touchend(e){Ze("up",Jt(e),e.changedTouches[0],e)}});function Ze(e,t,r,n){t&&Qs(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent(i){return cn(i)}})}Ws({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>Mf&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Le(this.info)},mousedown(e){if(!le(e))return;const t=Jt(e),r=this,n=s=>{const o=s.clientX,a=s.clientY;wa(r.info,o,a)&&(r.info.state=r.info.started?s.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&cn("tap"),r.info.addMove({x:o,y:a}),le(s)||(r.info.state="end",Le(r.info)),t&&xi(r.info,t,s),r.info.started=!0)},i=s=>{r.info.started&&n(s),Le(r.info)};Wc(this.info,n,i),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=Jt(e),r=e.changedTouches[0],n=r.clientX,i=r.clientY;wa(this.info,n,i)&&(this.info.state==="start"&&cn("tap"),this.info.addMove({x:n,y:i}),xi(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend(e){const t=Jt(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),xi(this.info,t,r))}});function wa(e,t,r){if(e.prevent)return!1;if(e.started)return!0;const n=Math.abs(e.x-t),i=Math.abs(e.y-r);return n>=va||i>=va}function xi(e,t,r){if(!t)return;const n=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],s=i.x-e.x,o=i.y-e.y;let a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),Qs(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover(){return qf(r.clientX,r.clientY)}})}Ws({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){le(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){le(e)&&xa(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){xa(this.info,e.changedTouches[0],e)}});function xa(e,t,r){const n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),s=Jt(r||t);!s||zf[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=ba&&i<=ba||Uf(t))&&(e.prevent||Qs(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Kc=K(e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",r=>{this._onKeyDown(r)}),this.addEventListener("keyup",r=>{this._onKeyUp(r)})}_onKeyDown(r){switch(r.key){case"Enter":this._onEnter(r);break;case"Escape":this._onEscape(r);break}}_onKeyUp(r){}_onEnter(r){}_onEscape(r){}});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Xc=e=>class extends Jc(Kc(e)){get _activeKeys(){return[" "]}ready(){super.ready(),cr(this,"down",r=>{this._shouldSetActive(r)&&this._setActive(!0)}),cr(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(r){return!this.disabled}_onKeyDown(r){super._onKeyDown(r),this._shouldSetActive(r)&&this._activeKeys.includes(r.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(r){this.toggleAttribute("active",r)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Zc=K(e=>class extends e{get _keyboardActive(){return xf()}ready(){this.addEventListener("focusin",r=>{this._shouldSetFocus(r)&&this._setFocused(!0)}),this.addEventListener("focusout",r=>{this._shouldRemoveFocus(r)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(r){this.toggleAttribute("focused",r),this.toggleAttribute("focus-ring",r&&this._keyboardActive)}_shouldSetFocus(r){return!0}_shouldRemoveFocus(r){return!0}});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Qf=e=>class extends Xc(Zc(e)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(r){this._value=r}ready(){super.ready();const r=this.getAttribute("value");r!==null&&(this.value=r)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(r){return!this.disabled&&!(r.type==="keydown"&&r.defaultPrevented)}_selectedChanged(r){this.setAttribute("aria-selected",r)}_disabledChanged(r){super._disabledChanged(r),r&&(this.selected=!1,this.blur())}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&!r.defaultPrevented&&(r.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Sa extends qe(He(Qf(Hs(Bt)))){static get template(){return _e`
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
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Gc(this),this.addController(this._tooltipController)}_onKeyUp(t){const r=this.hasAttribute("active");if(super._onKeyUp(t),r){const n=this.querySelector("a");n&&n.click()}}}customElements.define(Sa.is,Sa);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const tu=document.createElement("template");tu.innerHTML=`
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
`;document.head.appendChild(tu.content);jt("vaadin-tabs",rt`
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
 */const Br=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(t=>{t.target.resizables?t.target.resizables.forEach(r=>{r._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Kf=K(e=>class extends e{connectedCallback(){if(super.connectedCallback(),Br.observe(this),this._observeParent){const r=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;r.resizables||(r.resizables=new Set,Br.observe(r)),r.resizables.add(this),this.__parent=r}}disconnectedCallback(){super.disconnectedCallback(),Br.unobserve(this);const r=this.__parent;if(this._observeParent&&r){const n=r.resizables;n&&(n.delete(this),n.size===0&&Br.unobserve(r)),this.__parent=null}}get _observeParent(){return!1}_onResize(r){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Xf=e=>class extends Kc(e){focus(){const r=this._getItems();if(Array.isArray(r)){const n=this._getAvailableIndex(r,0,null,i=>!ya(i));n>=0&&r[n].focus()}}get focused(){return(this._getItems()||[]).find(Hc)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(r){if(super._onKeyDown(r),r.metaKey||r.ctrlKey)return;const{key:n}=r,i=this._getItems()||[],s=i.indexOf(this.focused);let o,a;const d=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(n)?(a=-d,o=s-d):this.__isNextKey(n)?(a=d,o=s+d):n==="Home"?(a=1,o=0):n==="End"&&(a=-1,o=i.length-1),o=this._getAvailableIndex(i,o,a,p=>!ya(p)),o>=0&&(r.preventDefault(),this._focus(o,!0))}__isPrevKey(r){return this._vertical?r==="ArrowUp":r==="ArrowLeft"}__isNextKey(r){return this._vertical?r==="ArrowDown":r==="ArrowRight"}_focus(r,n=!1){const i=this._getItems();this._focusItem(i[r],n)}_focusItem(r){r&&(r.focus(),r.setAttribute("focus-ring",""))}_getAvailableIndex(r,n,i,s){const o=r.length;let a=n;for(let l=0;typeof a=="number"&&l<o;l+=1,a+=i||1){a<0?a=o-1:a>=o&&(a=0);const d=r[a];if(!d.hasAttribute("disabled")&&this.__isMatchingItem(d,s))return a}return-1}__isMatchingItem(r,n){return typeof n=="function"?n(r):!0}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Zf=e=>class extends Xf(e){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",r=>this._onClick(r)),this._observer=new Lt(this,()=>{this._setItems(this._filterItems(Lt.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(r,n,i,s){if(!s&&r){this.setAttribute("aria-orientation",n||"vertical"),this.items.forEach(a=>{n?a.setAttribute("orientation",n):a.removeAttribute("orientation")}),this._setFocusable(i||0);const o=r[i];r.forEach(a=>{a.selected=a===o}),o&&!o.disabled&&this._scrollToItem(i)}}_filterItems(r){return r.filter(n=>n._hasVaadinItemMixin)}_onClick(r){if(r.metaKey||r.shiftKey||r.ctrlKey||r.defaultPrevented)return;const n=this._filterItems(r.composedPath())[0];let i;n&&!n.disabled&&(i=this.items.indexOf(n))>=0&&(this.selected=i)}_searchKey(r,n){this._searchReset=kc.debounce(this._searchReset,mf.after(500),()=>{this._searchBuf=""}),this._searchBuf+=n.toLowerCase(),this.items.some(s=>this.__isMatchingKey(s))||(this._searchBuf=n.toLowerCase());const i=this._searchBuf.length===1?r+1:r;return this._getAvailableIndex(this.items,i,1,s=>this.__isMatchingKey(s)&&getComputedStyle(s).display!=="none")}__isMatchingKey(r){return r.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeyDown(r){if(r.metaKey||r.ctrlKey)return;const n=r.key,i=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(n)&&n.length===1){const s=this._searchKey(i,n);s>=0&&this._focus(s);return}super._onKeyDown(r)}_isItemHidden(r){return getComputedStyle(r).display==="none"}_setFocusable(r){r=this._getAvailableIndex(this.items,r,1);const n=this.items[r];this.items.forEach(i=>{i.tabIndex=i===n?0:-1})}_focus(r){this.items.forEach((n,i)=>{n.focused=i===r}),this._setFocusable(r),this._scrollToItem(r),super._focus(r)}focus(){this._observer&&this._observer.flush();const r=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(r)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(r){const n=this.items[r];if(!n)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],s=this._scrollerElement.getBoundingClientRect(),o=(this.items[r+1]||n).getBoundingClientRect(),a=(this.items[r-1]||n).getBoundingClientRect();let l=0;!this._isRTL&&o[i[1]]>=s[i[1]]||this._isRTL&&o[i[1]]<=s[i[1]]?l=o[i[1]]-s[i[1]]:(!this._isRTL&&a[i[0]]<=s[i[0]]||this._isRTL&&a[i[0]]>=s[i[0]])&&(l=a[i[0]]-s[i[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(r){if(this._vertical)this._scrollerElement.scrollTop+=r;else{const n=this.getAttribute("dir")||"ltr",i=Ie.detectScrollType(),s=Ie.getNormalizedScrollLeft(i,n,this._scrollerElement)+r;Ie.setNormalizedScrollLeft(i,n,this._scrollerElement,s)}}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Aa extends Kf(qe(Zf(He(Bt)))){static get template(){return _e`
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
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),gc(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(r=>{this.__itemsResizeObserver.observe(r)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),r=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let n=Math.floor(t)>1?"start":"";Math.ceil(t)<Math.ceil(r-this._scrollOffset)&&(n+=" end"),this.__direction===1&&(n=n.replace(/start|end/gi,i=>i==="start"?"end":"start")),n?this.setAttribute("overflow",n.trim()):this.removeAttribute("overflow")}}customElements.define(Aa.is,Aa);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-tabs" is deprecated. Use "@vaadin/tabs" instead.');const tm=rt`
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
`;jt("vaadin-button",tm,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const em=e=>class extends Jc(e){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(r,n){super._disabledChanged(r,n),r?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):n&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(r){this.disabled&&r!==-1&&(this._lastTabIndex=r,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const rm=e=>class extends Xc(em(Zc(e))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&(r.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class Ca extends rm(qe(He(Hs(Bt)))){static get is(){return"vaadin-button"}static get template(){return _e`
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
    `}ready(){super.ready(),this._tooltipController=new Gc(this),this.addController(this._tooltipController)}}customElements.define(Ca.is,Ca);/**
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
*/const ti=!(window.ShadyDOM&&window.ShadyDOM.inUse);let un;function Ea(e){e&&e.shimcssproperties?un=!1:un=ti||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Cr;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Cr=window.ShadyCSS.cssBuild);const eu=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?un=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ea(window.ShadyCSS),window.ShadyCSS=void 0):Ea(window.WebComponents&&window.WebComponents.flags);const Ks=un;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Pa{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ru(e){return e=nm(e),nu(im(e),e)}function nm(e){return e.replace(Mt.comments,"").replace(Mt.port,"")}function im(e){let t=new Pa;t.start=0,t.end=e.length;let r=t;for(let n=0,i=e.length;n<i;n++)if(e[n]===su){r.rules||(r.rules=[]);let s=r,o=s.rules[s.rules.length-1]||null;r=new Pa,r.start=n+1,r.parent=s,r.previous=o,s.rules.push(r)}else e[n]===ou&&(r.end=n+1,r=r.parent||t);return t}function nu(e,t){let r=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let i=e.previous?e.previous.end:e.parent.start;r=t.substring(i,e.start-1),r=sm(r),r=r.replace(Mt.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=r.trim();e.atRule=s.indexOf(dm)===0,e.atRule?s.indexOf(um)===0?e.type=qt.MEDIA_RULE:s.match(Mt.keyframesRule)&&(e.type=qt.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Mt.multipleSpaces).pop()):s.indexOf(au)===0?e.type=qt.MIXIN_RULE:e.type=qt.STYLE_RULE}let n=e.rules;if(n)for(let i=0,s=n.length,o;i<s&&(o=n[i]);i++)nu(o,t);return e}function sm(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],r=6-t.length;for(;r--;)t="0"+t;return"\\"+t})}function iu(e,t,r=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!om(i))for(let s=0,o=i.length,a;s<o&&(a=i[s]);s++)n=iu(a,t,n);else n=t?e.cssText:am(e.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(e.selector&&(r+=e.selector+" "+su+`
`),r+=n,e.selector&&(r+=ou+`

`)),r}function om(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(au)===0}function am(e){return e=lm(e),cm(e)}function lm(e){return e.replace(Mt.customProp,"").replace(Mt.mixinProp,"")}function cm(e){return e.replace(Mt.mixinApply,"").replace(Mt.varApply,"")}const qt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},su="{",ou="}",Mt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},au="--",um="@media",dm="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ls=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,dn=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,hm=/@media\s(.*)/;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ta=new Set,pm="shady-unscoped";function fm(e){const t=e.textContent;if(!Ta.has(t)){Ta.add(t);const r=document.createElement("style");r.setAttribute("shady-unscoped",""),r.textContent=t,document.head.appendChild(r)}}function mm(e){return e.hasAttribute(pm)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function cs(e,t){return e?(typeof e=="string"&&(e=ru(e)),t&&ur(e,t),iu(e,Ks)):""}function Oa(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=ru(e.textContent)),e.__cssRules||null}function ur(e,t,r,n){if(!e)return;let i=!1,s=e.type;if(n&&s===qt.MEDIA_RULE){let a=e.selector.match(hm);a&&(window.matchMedia(a[1]).matches||(i=!0))}s===qt.STYLE_RULE?t(e):r&&s===qt.KEYFRAMES_RULE?r(e):s===qt.MIXIN_RULE&&(i=!0);let o=e.rules;if(o&&!i)for(let a=0,l=o.length,d;a<l&&(d=o[a]);a++)ur(d,t,r,n)}function _m(e,t){let r=0;for(let n=t,i=e.length;n<i;n++)if(e[n]==="(")r++;else if(e[n]===")"&&--r===0)return n;return-1}function lu(e,t){let r=e.indexOf("var(");if(r===-1)return t(e,"","","");let n=_m(e,r+3),i=e.substring(r+4,n),s=e.substring(0,r),o=lu(e.substring(n+1),t),a=i.indexOf(",");if(a===-1)return t(s,i.trim(),"",o);let l=i.substring(0,a).trim(),d=i.substring(a+1).trim();return t(s,l,d,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function ym(e){let t=e.localName,r="",n="";return t?t.indexOf("-")>-1?r=t:(n=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,n=e.extends),{is:r,typeExtension:n}}function gm(e){const t=[],r=e.querySelectorAll("style");for(let n=0;n<r.length;n++){const i=r[n];mm(i)?ti||(fm(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}const cu="css-build";function bm(e){if(Cr!==void 0)return Cr;if(e.__cssBuild===void 0){const t=e.getAttribute(cu);if(t)e.__cssBuild=t;else{const r=vm(e);r!==""&&wm(e),e.__cssBuild=r}}return e.__cssBuild||""}function Ra(e){return bm(e)!==""}function vm(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const r=t.textContent.trim().split(":");if(r[0]===cu)return r[1]}return""}function wm(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function us(e,t){for(let r in t)r===null?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function uu(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}function xm(e){const t=dn.test(e)||ls.test(e);return dn.lastIndex=0,ls.lastIndex=0,t}const Sm=/;\s*/m,Am=/^\s*(initial)|(inherit)\s*$/,$a=/\s*!important/,ds="_-_";class Cm{constructor(){this._map={}}set(t,r){t=t.trim(),this._map[t]={properties:r,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let hn=null;class it{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Cm}detectMixin(t){return xm(t)}gatherStyles(t){const r=gm(t.content);if(r){const n=document.createElement("style");return n.textContent=r,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,r){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,r):null}transformStyle(t,r=""){let n=Oa(t);return this.transformRules(n,r),t.textContent=cs(n),n}transformCustomStyle(t){let r=Oa(t);return ur(r,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),t.textContent=cs(r),r}transformRules(t,r){this._currentElement=r,ur(t,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,r){return t=t.replace(ls,(n,i,s,o)=>this._produceCssProperties(n,i,s,o,r)),this._consumeCssProperties(t,r)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let r=t;for(;r.parent;)r=r.parent;const n={};let i=!1;return ur(r,s=>{i=i||s===t,!i&&s.selector===t.selector&&Object.assign(n,this._cssTextToMap(s.parsedCssText))}),n}_consumeCssProperties(t,r){let n=null;for(;n=dn.exec(t);){let i=n[0],s=n[1],o=n.index,a=o+i.indexOf("@apply"),l=o+i.length,d=t.slice(0,a),p=t.slice(l),m=r?this._fallbacksFromPreviousRules(r):{};Object.assign(m,this._cssTextToMap(d));let y=this._atApplyToCssProperties(s,m);t=`${d}${y}${p}`,dn.lastIndex=o+y.length}return t}_atApplyToCssProperties(t,r){t=t.replace(Sm,"");let n=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){this._currentElement&&(i.dependants[this._currentElement]=!0);let s,o,a;const l=i.properties;for(s in l)a=r&&r[s],o=[s,": var(",t,ds,s],a&&o.push(",",a.replace($a,"")),o.push(")"),$a.test(l[s])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,r){let n=Am.exec(r);return n&&(n[1]?r=this._getInitialValueForProperty(t):r="apply-shim-inherit"),r}_cssTextToMap(t,r=!1){let n=t.split(";"),i,s,o={};for(let a=0,l,d;a<n.length;a++)l=n[a],l&&(d=l.split(":"),d.length>1&&(i=d[0].trim(),s=d.slice(1).join(":"),r&&(s=this._replaceInitialOrInherit(i,s)),o[i]=s));return o}_invalidateMixinEntry(t){if(hn)for(let r in t.dependants)r!==this._currentElement&&hn(r)}_produceCssProperties(t,r,n,i,s){if(n&&lu(n,(j,N)=>{N&&this._map.get(N)&&(i=`@apply ${N};`)}),!i)return t;let o=this._consumeCssProperties(""+i,s),a=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(o,!0),d=l,p=this._map.get(r),m=p&&p.properties;m?d=Object.assign(Object.create(m),l):this._map.set(r,d);let y=[],S,A,R=!1;for(S in d)A=l[S],A===void 0&&(A="initial"),m&&!(S in m)&&(R=!0),y.push(`${r}${ds}${S}: ${A}`);return R&&this._invalidateMixinEntry(p),p&&(p.properties=d),n&&(a=`${t};${a}`),`${a}${y.join("; ")};`}}it.prototype.detectMixin=it.prototype.detectMixin;it.prototype.transformStyle=it.prototype.transformStyle;it.prototype.transformCustomStyle=it.prototype.transformCustomStyle;it.prototype.transformRules=it.prototype.transformRules;it.prototype.transformRule=it.prototype.transformRule;it.prototype.transformTemplate=it.prototype.transformTemplate;it.prototype._separator=ds;Object.defineProperty(it.prototype,"invalidCallback",{get(){return hn},set(e){hn=e}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hs={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pn="_applyShimCurrentVersion",Be="_applyShimNextVersion",fn="_applyShimValidatingVersion",Em=Promise.resolve();function Pm(e){let t=hs[e];t&&Tm(t)}function Tm(e){e[pn]=e[pn]||0,e[fn]=e[fn]||0,e[Be]=(e[Be]||0)+1}function du(e){return e[pn]===e[Be]}function Om(e){return!du(e)&&e[fn]===e[Be]}function Rm(e){e[fn]=e[Be],e._validating||(e._validating=!0,Em.then(function(){e[pn]=e[Be],e._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Si=null,Na=window.HTMLImports&&window.HTMLImports.whenReady||null,Ai;function Ia(e){requestAnimationFrame(function(){Na?Na(e):(Si||(Si=new Promise(t=>{Ai=t}),document.readyState==="complete"?Ai():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Ai()})),Si.then(function(){e&&e()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const La="__seenByShadyCSS",kr="__shadyCSSCachedStyle";let mn=null,dr=null,Wt=class{constructor(){this.customStyles=[],this.enqueued=!1,Ia(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!dr||(this.enqueued=!0,Ia(dr))}addCustomStyle(t){t[La]||(t[La]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[kr])return t[kr];let r;return t.getStyle?r=t.getStyle():r=t,r}processStyles(){const t=this.customStyles;for(let r=0;r<t.length;r++){const n=t[r];if(n[kr])continue;const i=this.getStyleForCustomStyle(n);if(i){const s=i.__appliedElement||i;mn&&mn(s),n[kr]=s}}return t}};Wt.prototype.addCustomStyle=Wt.prototype.addCustomStyle;Wt.prototype.getStyleForCustomStyle=Wt.prototype.getStyleForCustomStyle;Wt.prototype.processStyles=Wt.prototype.processStyles;Object.defineProperties(Wt.prototype,{transformCallback:{get(){return mn},set(e){mn=e}},validateCallback:{get(){return dr},set(e){let t=!1;dr||(t=!0),dr=e,t&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const sr=new it;class $m{constructor(){this.customStyleInterface=null,sr.invalidCallback=Pm}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{sr.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,r){if(this.ensure(),Ra(t))return;hs[r]=t;let n=sr.transformTemplate(t,r);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let r=0;r<t.length;r++){let n=t[r],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&sr.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,r){if(this.ensure(),r&&us(t,r),t.shadowRoot){this.styleElement(t);let n=t.shadowRoot.children||t.shadowRoot.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}else{let n=t.children||t.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}}styleElement(t){this.ensure();let{is:r}=ym(t),n=hs[r];if(!(n&&Ra(n))&&n&&!du(n)){Om(n)||(this.prepareTemplate(n,r),Rm(n));let i=t.shadowRoot;if(i){let s=i.querySelector("style");s&&(s.__cssRules=n._styleAst,s.textContent=cs(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new $m;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(r,n,i){e.flushCustomStyles(),e.prepareTemplate(r,n)},prepareTemplateStyles(r,n,i){window.ShadyCSS.prepareTemplate(r,n,i)},prepareTemplateDom(r,n){},styleSubtree(r,n){e.flushCustomStyles(),e.styleSubtree(r,n)},styleElement(r){e.flushCustomStyles(),e.styleElement(r)},styleDocument(r){e.flushCustomStyles(),e.styleDocument(r)},getComputedStyleValue(r,n){return uu(r,n)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:Ks,nativeShadow:ti,cssBuild:Cr,disableRuntime:eu},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=sr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class he{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,r){this._asyncModule=t,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,Er.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Er.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,r,n){return t instanceof he?t._cancelAsync():t=new he,t.setConfig(r,n),t}}let Er=new Set;const hu=function(e){Er.add(e)},Nm=function(){const e=!!Er.size;return Er.forEach(t=>{try{t.flush()}catch(r){setTimeout(()=>{throw r})}}),e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xs=typeof document.head.style.touchAction=="string",_n="__polymerGestures",Zr="__polymerGesturesHandled",ps="__polymerGesturesTouchAction",Ma=25,Da=5,Im=2,Lm=2500,pu=["mousedown","mousemove","mouseup","click"],Mm=[0,1,4,2],Dm=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Zs(e){return pu.indexOf(e)>-1}let to=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){to=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function fu(e){if(!(Zs(e)||e==="touchend")&&Xs&&to&&Uh)return{passive:!0}}let mu=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const fs=[],jm={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Fm={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Bm(e){return jm[e.localName]||!1}function km(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let r=e.getRootNode();if(e.id){let n=r.querySelectorAll(`label[for = '${e.id}']`);for(let i=0;i<n.length;i++)t.push(n[i])}}catch{}}return t}let ja=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[Zr]={skip:!0},e.type==="click")){let r=!1,n=ei(e);for(let i=0;i<n.length;i++){if(n[i].nodeType===Node.ELEMENT_NODE){if(n[i].localName==="label")fs.push(n[i]);else if(Bm(n[i])){let s=km(n[i]);for(let o=0;o<s.length;o++)r=r||fs.indexOf(s[o])>-1}}if(n[i]===tt.mouse.target)return}if(r)return;e.preventDefault(),e.stopPropagation()}};function Fa(e){let t=mu?["click"]:pu;for(let r=0,n;r<t.length;r++)n=t[r],e?(fs.length=0,document.addEventListener(n,ja,!0)):document.removeEventListener(n,ja,!0)}function zm(e){if(!Ds)return;tt.mouse.mouseIgnoreJob||Fa(!0);let t=function(){Fa(),tt.mouse.target=null,tt.mouse.mouseIgnoreJob=null};tt.mouse.target=ei(e)[0],tt.mouse.mouseIgnoreJob=he.debounce(tt.mouse.mouseIgnoreJob,ar.after(Lm),t)}function ce(e){let t=e.type;if(!Zs(t))return!1;if(t==="mousemove"){let r=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!Dm&&(r=Mm[e.which]||0),!!(r&1)}else return(e.button===void 0?0:e.button)===0}function Um(e){if(e.type==="click"){if(e.detail===0)return!0;let t=Yt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}let tt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Hm(e){let t="auto",r=ei(e);for(let n=0,i;n<r.length;n++)if(i=r[n],i[ps]){t=i[ps];break}return t}function _u(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Me(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}Ds&&document.addEventListener("touchend",zm,to?{passive:!0}:!1);const ei=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Rr={},ae=[];function qm(e,t){let r=document.elementFromPoint(e,t),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(e,t),i===n)break;n&&(r=n)}return r}function Yt(e){const t=ei(e);return t.length>0?t[0]:e.target}function yu(e){let t,r=e.type,i=e.currentTarget[_n];if(!i)return;let s=i[r];if(s){if(!e[Zr]&&(e[Zr]={},r.slice(0,5)==="touch")){e=e;let o=e.changedTouches[0];if(r==="touchstart"&&e.touches.length===1&&(tt.touch.id=o.identifier),tt.touch.id!==o.identifier)return;Xs||(r==="touchstart"||r==="touchmove")&&Vm(e)}if(t=e[Zr],!t.skip){for(let o=0,a;o<ae.length;o++)a=ae[o],s[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<ae.length;o++)a=ae[o],s[a.name]&&!t[a.name]&&(t[a.name]=!0,a[r](e))}}}function Vm(e){let t=e.changedTouches[0],r=e.type;if(r==="touchstart")tt.touch.x=t.clientX,tt.touch.y=t.clientY,tt.touch.scrollDecided=!1;else if(r==="touchmove"){if(tt.touch.scrollDecided)return;tt.touch.scrollDecided=!0;let n=Hm(e),i=!1,s=Math.abs(tt.touch.x-t.clientX),o=Math.abs(tt.touch.y-t.clientY);e.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=o>s:n==="pan-y"&&(i=s>o)),i?e.preventDefault():yn("track")}}function Gm(e,t,r){return Rr[t]?(Ym(e,t,r),!0):!1}function Jm(e,t,r){return Rr[t]?(Wm(e,t,r),!0):!1}function Ym(e,t,r){let n=Rr[t],i=n.deps,s=n.name,o=e[_n];o||(e[_n]=o={});for(let a=0,l,d;a<i.length;a++)l=i[a],!(mu&&Zs(l)&&l!=="click")&&(d=o[l],d||(o[l]=d={_count:0}),d._count===0&&e.addEventListener(l,yu,fu(l)),d[s]=(d[s]||0)+1,d._count=(d._count||0)+1);e.addEventListener(t,r),n.touchAction&&gu(e,n.touchAction)}function Wm(e,t,r){let n=Rr[t],i=n.deps,s=n.name,o=e[_n];if(o)for(let a=0,l,d;a<i.length;a++)l=i[a],d=o[l],d&&d[s]&&(d[s]=(d[s]||1)-1,d._count=(d._count||1)-1,d._count===0&&e.removeEventListener(l,yu,fu(l)));e.removeEventListener(t,r)}function eo(e){ae.push(e);for(let t=0;t<e.emits.length;t++)Rr[e.emits[t]]=e}function Qm(e){for(let t=0,r;t<ae.length;t++){r=ae[t];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===e)return r}return null}function gu(e,t){Xs&&e instanceof HTMLElement&&Gt.run(()=>{e.style.touchAction=t}),e[ps]=t}function ro(e,t,r){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,C(e).dispatchEvent(n),n.defaultPrevented){let i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function yn(e){let t=Qm(e);t.info&&(t.info.prevent=!0)}eo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Me(this.info)},mousedown:function(e){if(!ce(e))return;let t=Yt(e),r=this,n=function(o){ce(o)||(tr("up",t,o),Me(r.info))},i=function(o){ce(o)&&tr("up",t,o),Me(r.info)};_u(this.info,n,i),tr("down",t,e)},touchstart:function(e){tr("down",Yt(e),e.changedTouches[0],e)},touchend:function(e){tr("up",Yt(e),e.changedTouches[0],e)}});function tr(e,t,r,n){t&&ro(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(i){return yn(i)}})}eo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>Im&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Me(this.info)},mousedown:function(e){if(!ce(e))return;let t=Yt(e),r=this,n=function(o){let a=o.clientX,l=o.clientY;Ba(r.info,a,l)&&(r.info.state=r.info.started?o.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&yn("tap"),r.info.addMove({x:a,y:l}),ce(o)||(r.info.state="end",Me(r.info)),t&&Ci(r.info,t,o),r.info.started=!0)},i=function(o){r.info.started&&n(o),Me(r.info)};_u(this.info,n,i),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Yt(e),r=e.changedTouches[0],n=r.clientX,i=r.clientY;Ba(this.info,n,i)&&(this.info.state==="start"&&yn("tap"),this.info.addMove({x:n,y:i}),Ci(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Yt(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Ci(this.info,t,r))}});function Ba(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),i=Math.abs(e.y-r);return n>=Da||i>=Da}function Ci(e,t,r){if(!t)return;let n=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],s=i.x-e.x,o=i.y-e.y,a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),ro(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover:function(){return qm(r.clientX,r.clientY)}})}eo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){ce(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){ce(e)&&ka(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ka(this.info,e.changedTouches[0],e)}});function ka(e,t,r){let n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),s=Yt(r||t);!s||Fm[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Ma&&i<=Ma||Um(t))&&(e.prevent||ro(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bu=K(e=>{class t extends e{_addEventListenerToNode(n,i,s){Gm(n,i,s)||super._addEventListenerToNode(n,i,s)}_removeEventListenerFromNode(n,i,s){Jm(n,i,s)||super._removeEventListenerFromNode(n,i,s)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Km=/:host\(:dir\((ltr|rtl)\)\)/g,Xm=':host([dir="$1"])',Zm=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,t_=':host([dir="$2"]) $1',e_=/:dir\((?:ltr|rtl)\)/,za=!!(window.ShadyDOM&&window.ShadyDOM.inUse),hr=[];let pr=null,no="";function vu(){no=document.documentElement.getAttribute("dir")}function wu(e){e.__autoDirOptOut||e.setAttribute("dir",no)}function xu(){vu(),no=document.documentElement.getAttribute("dir");for(let e=0;e<hr.length;e++)wu(hr[e])}function r_(){pr&&pr.takeRecords().length&&xu()}const n_=K(e=>{za||pr||(vu(),pr=new MutationObserver(xu),pr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Ec(e);class r extends t{static _processStyleText(i,s){return i=t._processStyleText.call(this,i,s),!za&&e_.test(i)&&(i=this._replaceDirInCssText(i),this.__activateDir=!0),i}static _replaceDirInCssText(i){let s=i;return s=s.replace(Km,Xm),s=s.replace(Zm,t_),s}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(r_(),hr.push(this),wu(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const i=hr.indexOf(this);i>-1&&hr.splice(i,1)}}}return r.__activateDir=!1,r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ua(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Ua():window.addEventListener("DOMContentLoaded",Ua);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Su=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Nm();while(e||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ce=Element.prototype,i_=Ce.matches||Ce.matchesSelector||Ce.mozMatchesSelector||Ce.msMatchesSelector||Ce.oMatchesSelector||Ce.webkitMatchesSelector,Au=function(e,t){return i_.call(e,t)};class M{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Lt(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(C(this.node).contains(t))return!0;let r=t,n=t.ownerDocument;for(;r&&r!==n&&r!==this.node;)r=C(r).parentNode||C(r).host;return r===this.node}getOwnerRoot(){return C(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?C(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],r=C(this.node).assignedSlot;for(;r;)t.push(r),r=C(r).assignedSlot;return t}importNode(t,r){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return C(n).importNode(t,r)}getEffectiveChildNodes(){return Lt.getFlattenedNodes(this.node)}queryDistributedElements(t){let r=this.getEffectiveChildNodes(),n=[];for(let i=0,s=r.length,o;i<s&&(o=r[i]);i++)o.nodeType===Node.ELEMENT_NODE&&Au(o,t)&&n.push(o);return n}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function s_(e,t){for(let r=0;r<t.length;r++){let n=t[r];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Ha(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}function o_(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(i){this.node[n]=i},configurable:!0})}}class ms{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}M.prototype.cloneNode;M.prototype.appendChild;M.prototype.insertBefore;M.prototype.removeChild;M.prototype.replaceChild;M.prototype.setAttribute;M.prototype.removeAttribute;M.prototype.querySelector;M.prototype.querySelectorAll;M.prototype.parentNode;M.prototype.firstChild;M.prototype.lastChild;M.prototype.nextSibling;M.prototype.previousSibling;M.prototype.firstElementChild;M.prototype.lastElementChild;M.prototype.nextElementSibling;M.prototype.previousElementSibling;M.prototype.childNodes;M.prototype.children;M.prototype.classList;M.prototype.textContent;M.prototype.innerHTML;let _s=M;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(M.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=M.prototype[t])}),Ha(e.prototype,["classList"]),_s=e,Object.defineProperties(ms.prototype,{localTarget:{get(){const t=this.event.currentTarget,r=t&&wt(t).getOwnerRoot(),n=this.path;for(let i=0;i<n.length;i++){const s=n[i];if(wt(s).getOwnerRoot()===r)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else s_(M.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Ha(M.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),o_(M.prototype,["textContent","innerHTML","className"]);const wt=function(e){if(e=e||document,e instanceof _s||e instanceof ms)return e;let t=e.__domApi;return t||(e instanceof Event?t=new ms(e):t=new _s(e),e.__domApi=t),t};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ei=window.ShadyDOM,qa=window.ShadyCSS;function Va(e,t){return C(e).getRootNode()===t}function a_(e,t=!1){if(!Ei||!qa||!Ei.handlesDynamicScoping)return null;const r=qa.ScopingShim;if(!r)return null;const n=r.scopeForNode(e),i=C(e).getRootNode(),s=o=>{if(!Va(o,i))return;const a=Array.from(Ei.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const d=a[l];if(!Va(d,i))continue;const p=r.currentScopeForNode(d);p!==n&&(p!==""&&r.unscopeNode(d,p),r.scopeNode(d,n))}};if(s(e),t){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const d=a[l];for(let p=0;p<d.addedNodes.length;p++){const m=d.addedNodes[p];m.nodeType===Node.ELEMENT_NODE&&s(m)}}});return o.observe(e,{childList:!0,subtree:!0}),o}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Pi="disable-upgrade",Cu=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};K(e=>{const t=Zn(e);let r=Cu(t);class n extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat(Pi)}_initializeProperties(){this.hasAttribute(Pi)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}attributeChangedCallback(s,o,a,l){s==Pi?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,C(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(s,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zr="disable-upgrade";let l_=window.ShadyCSS;const Eu=K(e=>{const t=bu(Zn(e)),r=Zi?t:n_(t),n=Cu(r),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,d){(this.__dataAttributes&&this.__dataAttributes[a]||a===zr)&&this.attributeChangedCallback(a,l,d,null)}setAttribute(a,l){if(Dr&&!this._legacyForceObservedAttributes){const d=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,d,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(Dr&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return Dr&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(zr)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,d,p){l!==d&&(a==zr?this.__isUpgradeDisabled&&d==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,C(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,d,p),this.attributeChanged(a,l,d)))}attributeChanged(a,l,d){}_initializeProperties(){if(br&&this.hasAttribute(zr))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Dr&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,d=a.length;l<d;l++){const p=a[l];this.__attributeReaction(p.name,null,p.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,d){this._propertyToAttribute(a,l,d)}serializeValueToAttribute(a,l,d){this._valueToNodeAttribute(d||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let d=Object.getOwnPropertyNames(l);for(let p=0,m;p<d.length&&(m=d[p]);p++){let y=Object.getOwnPropertyDescriptor(l,m);y&&Object.defineProperty(a,m,y)}return a}mixin(a,l){for(let d in l)a[d]=l[d];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,d){d=d||{},l=l??{};let p=new Event(a,{bubbles:d.bubbles===void 0?!0:d.bubbles,cancelable:!!d.cancelable,composed:d.composed===void 0?!0:d.composed});p.detail=l;let m=d.node||this;return C(m).dispatchEvent(p),p}listen(a,l,d){a=a||this;let p=this.__boundListeners||(this.__boundListeners=new WeakMap),m=p.get(a);m||(m={},p.set(a,m));let y=l+d;m[y]||(m[y]=this._addMethodEventListenerToNode(a,l,d,this))}unlisten(a,l,d){a=a||this;let p=this.__boundListeners&&this.__boundListeners.get(a),m=l+d,y=p&&p[m];y&&(this._removeEventListenerFromNode(a,l,y),p[m]=null)}setScrollDirection(a,l){gu(l||this,i[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=C(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=wt(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return wt(this).getEffectiveChildNodes()}queryDistributedElements(a){return wt(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let d=0,p;p=a[d];d++)p.nodeType!==Node.COMMENT_NODE&&l.push(p.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?wt(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(d){return d.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&C(l).contains(a)&&C(l).getRootNode()===C(a).getRootNode()}isLocalDescendant(a){return this.root===C(a).getRootNode()}scopeSubtree(a,l=!1){return a_(a,l)}getComputedStyleValue(a){return l_.getComputedStyleValue(this,a)}debounce(a,l,d){return this._debouncers=this._debouncers||{},this._debouncers[a]=he.debounce(this._debouncers[a],d>0?ar.after(d):Gt,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?ar.run(a.bind(this),l):~Gt.run(a.bind(this))}cancelAsync(a){a<0?Gt.cancel(~a):ar.cancel(a)}create(a,l){let d=document.createElement(a);if(l)if(d.setProperties)d.setProperties(l);else for(let p in l)d[p]=l[p];return d}elementMatches(a,l){return Au(l||this,a)}toggleAttribute(a,l){let d=this;return arguments.length===3&&(d=arguments[2]),arguments.length==1&&(l=!d.hasAttribute(a)),l?(C(d).setAttribute(a,""),!0):(C(d).removeAttribute(a),!1)}toggleClass(a,l,d){d=d||this,arguments.length==1&&(l=!d.classList.contains(a)),l?d.classList.add(a):d.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,d,p){p=p||this,this.transform("translate3d("+a+","+l+","+d+")",p)}arrayDelete(a,l){let d;if(Array.isArray(a)){if(d=a.indexOf(l),d>=0)return a.splice(d,1)}else if(d=nt(this,a).indexOf(l),d>=0)return this.splice(a,d,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return s.prototype.is="",s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const c_={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Pu={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},u_=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Pu);function d_(e,t,r){const n=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let s=0;s<i.length;s++){let o=i[s];if(!(o in r))if(n)t[o]=e[o];else{let a=Object.getOwnPropertyDescriptor(e,o);a&&(a.configurable=!0,Object.defineProperty(t,o,a))}}}function h_(e,t,r){for(let n=0;n<t.length;n++)Tu(e,t[n],r,u_)}function Tu(e,t,r,n){d_(t,e,n);for(let i in c_)t[i]&&(r[i]=r[i]||[],r[i].push(t[i]))}function Ou(e,t,r){t=t||[];for(let n=e.length-1;n>=0;n--){let i=e[n];i?Array.isArray(i)?Ou(i,t):t.indexOf(i)<0&&(!r||r.indexOf(i)<0)&&t.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return t}function Ga(e,t){for(const r in t){const n=e[r],i=t[r];!("value"in i)&&n&&"value"in n?e[r]=Object.assign({value:n.value},i):e[r]=i}}const Ja=Eu(HTMLElement);function p_(e,t,r){let n;const i={};class s extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(n)for(let l=0,d;l<n.length;l++)d=n[l],d.properties&&this.createProperties(d.properties),d.observers&&this.createObservers(d.observers,d.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let d=0;d<n.length;d++)Ga(l,n[d].properties);return Ga(l,e.properties),l}static get observers(){let l=[];if(n)for(let d=0,p;d<n.length;d++)p=n[d],p.observers&&(l=l.concat(p.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=i.created;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}_registered(){const l=s.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),br&&o(l);const d=Object.getPrototypeOf(this);let p=i.beforeRegister;if(p)for(let m=0;m<p.length;m++)p[m].call(d);if(p=i.registered,p)for(let m=0;m<p.length;m++)p[m].call(d)}}_applyListeners(){super._applyListeners();const l=i.listeners;if(l)for(let d=0;d<l.length;d++){const p=l[d];if(p)for(let m in p)this._addMethodEventListenerToNode(this,m,p[m])}}_ensureAttributes(){const l=i.hostAttributes;if(l)for(let d=l.length-1;d>=0;d--){const p=l[d];for(let m in p)this._ensureAttribute(m,p[m])}super._ensureAttributes()}ready(){super.ready();let l=i.ready;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}attached(){super.attached();let l=i.attached;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}detached(){super.detached();let l=i.detached;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}attributeChanged(l,d,p){super.attributeChanged();let m=i.attributeChanged;if(m)for(let y=0;y<m.length;y++)m[y].call(this,l,d,p)}}if(r){Array.isArray(r)||(r=[r]);let a=t.prototype.behaviors;n=Ou(r,null,a),s.prototype.behaviors=a?a.concat(r):n}const o=a=>{n&&h_(a,n,i),Tu(a,e,i,Pu)};return br||o(s.prototype),s.generatedFrom=e,s}const f_=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let r=t?t(Ja):Ja;return r=p_(e,r,e.behaviors),r.is=r.prototype.is=e.is,r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ri=function(e){let t;return typeof e=="function"?t=e:t=ri.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};ri.Class=f_;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function io(e,t,r,n,i){let s;i&&(s=typeof r=="object"&&r!==null,s&&(n=e.__dataTemp[t]));let o=n!==r&&(n===n||r===r);return s&&o&&(e.__dataTemp[t]=r),o}const so=K(e=>{class t extends e{_shouldPropertyChange(n,i,s){return io(this,n,i,s,!0)}}return t}),Ru=K(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,i,s){return io(this,n,i,s,this.mutableData)}}return t});so._mutablePropertyChange=io;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ys=null;function gs(){return ys}gs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:gs,writable:!0}});const $u=Xn(gs),m_=so($u);function __(e,t){ys=e,Object.setPrototypeOf(e,t.prototype),new t,ys=null}const y_=Xn(class{});function Nu(e,t){for(let r=0;r<t.length;r++){let n=t[r];if(!!e!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),C(C(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const i=n.__polymerReplaced__;i&&C(C(i).parentNode).replaceChild(n,i)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class Zt extends y_{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let r=[];this.children=r;for(let i=this.root.firstChild;i;i=i.nextSibling)r.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,r){this._setPendingPropertyOrPath(t,r,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,r,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,r,i=>{i.model=this,n(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,r,n)}}_showHideChildren(t){Nu(t,this.children)}_setUnmanagedPropertyToNode(t,r,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&r=="textContent"?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,r,n)}get parentModel(){let t=this.__parentModel;if(!t){let r;t=this;do t=t.__dataHost.__dataHost;while((r=t.__templatizeOptions)&&!r.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Zt.prototype.__dataHost;Zt.prototype.__templatizeOptions;Zt.prototype._methodHost;Zt.prototype.__templatizeOwner;Zt.prototype.__hostProps;const g_=so(Zt);function Ya(e){let t=e.__dataHost;return t&&t._methodHost||t}function b_(e,t,r){let n=r.mutableData?g_:Zt;gn.mixin&&(n=gn.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=r,i.prototype._bindTemplate(e),x_(i,e,t,r),i}function v_(e,t,r,n){let i=r.forwardHostProp;if(i&&t.hasHostProps){const s=e.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(s){let l=r.mutableData?m_:$u;class d extends l{}o=t.templatizeTemplateClass=d}else{const l=e.constructor;class d extends l{}o=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w_(l,i)}),o.prototype._createNotifyingProperty("_host_"+l);bc&&n&&C_(t,r,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)__(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in e){const d=e[l];delete e[l],e.__data[l]=d}}}}function w_(e,t){return function(n,i,s){t.call(n.__templatizeOwner,i.substring(6),s[i])}}function x_(e,t,r,n){let i=r.hostProps||{};for(let s in n.instanceProps){delete i[s];let o=n.notifyInstanceProp;o&&e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:S_(s,o)})}if(n.forwardHostProp&&t.__dataHost)for(let s in i)r.hasHostProps||(r.hasHostProps=!0),e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:A_()})}function S_(e,t){return function(n,i,s){t.call(n.__templatizeOwner,n,i,s[i])}}function A_(){return function(t,r,n){t.__dataHost._setPendingPropertyOrPath("_host_"+r,n[r],!0,!0)}}function gn(e,t,r){if(Fe&&!Ya(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:Zt)._parseTemplate(e),s=i.templatizeInstanceClass;s||(s=b_(e,i,r),i.templatizeInstanceClass=s);const o=Ya(e);v_(e,i,r,o);let a=class extends s{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a,a}function C_(e,t,r){const n=r.constructor._properties,{propertyEffects:i}=e,{instanceProps:s}=t;for(let o in i)if(!n[o]&&!(s&&s[o])){const a=i[o];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function E_(e,t){let r;for(;t;)if(r=t.__dataHost?t:t.__templatizeInstance)if(r.__dataHost!=e)t=r.__dataHost;else return r;else t=C(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Wa=!1;function oo(){if(br&&!Ms){if(!Wa){Wa=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P_=bu(Ru(Xn(HTMLElement)));class T_ extends P_{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Fe)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,r,n,i){this.mutableData=!0}connectedCallback(){oo()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){C(C(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let r=new MutationObserver(()=>{if(t=this.querySelector("template"),t)r.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});r.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let r=this.root.firstChild;r;r=r.nextSibling)this.__children[this.__children.length]=r;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",T_);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O_=Ru(Bt);class Qa extends O_{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Qi,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),oo()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=C(C(this).parentNode);for(let r=0;r<this.__instances.length;r++)this.__attachInstance(r,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let r=this.template=t._templateInfo?t:this.querySelector("template");if(!r){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=gn(r,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(i,s){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(i,s)},notifyInstanceProp:function(i,s,o){if(sp(this.as,s)){let a=i[this.itemsIndexAs];s==this.as&&(this.items[a]=o);let l=xr(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,s);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let r=t,n=this.__getMethodHost();return function(){return n[r].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let r=this.__observePaths;for(let n=0;n<r.length;n++)t.indexOf(r[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,r=0){this.__renderDebouncer=he.debounce(this.__renderDebouncer,r>0?ar.after(r):Gt,t.bind(this)),hu(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Su()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const r=this.__sortAndFilterItems(t),n=this.__calculateLimit(r.length);this.__updateInstances(t,n,r),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Qi||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=n;return this.__filterFn&&(r=r.filter((n,i,s)=>this.__filterFn(t[n],i,s))),this.__sortFn&&r.sort((n,i)=>this.__sortFn(t[n],t[i])),r}__calculateLimit(t){let r=t;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(r=Math.min(t,this.initialCount),i=Math.max(r-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(t-n,0),this.__chunkCount),r=Math.min(n+i,t)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=r<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,r}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,r=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*r)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,r,n){const i=this.__itemsIdxToInstIdx={};let s;for(s=0;s<r;s++){let o=this.__instances[s],a=n[s],l=t[a];i[a]=s,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,s),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,s,a)}for(let o=this.__instances.length-1;o>=s;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let r=this.__instances[t];const n=C(r.root);for(let i=0;i<r.children.length;i++){let s=r.children[i];n.appendChild(s)}return r}__attachInstance(t,r){let n=this.__instances[t];r.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,r,n){let i={};return i[this.as]=t,i[this.indexAs]=r,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(t,r,n){const i=this.__stampInstance(t,r,n);let s=this.__instances[r+1],o=s?s.children[0]:this;return C(C(this).parentNode).insertBefore(i.root,o),this.__instances[r]=i,i}_showHideChildren(t){for(let r=0;r<this.__instances.length;r++)this.__instances[r]._showHideChildren(t)}__handleItemPath(t,r){let n=t.slice(6),i=n.indexOf("."),s=i<0?n:n.substring(0,i);if(s==parseInt(s,10)){let o=i<0?"":n.substring(i+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[s],l=this.__instances[a];if(l){let d=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(d,r,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let r=this.modelForElement(t);return r&&r[this.as]}indexForElement(t){let r=this.modelForElement(t);return r&&r[this.indexAs]}modelForElement(t){return E_(this.template,t)}}customElements.define(Qa.is,Qa);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Iu extends Bt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=he.debounce(this.__renderDebouncer,Gt,()=>this.__render()),hu(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=C(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!C(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),oo()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let r=t._templateInfo?t:C(t).querySelector("template");if(!r){let n=new MutationObserver(()=>{if(C(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=r}return!0}__ensureInstance(){let t=C(this).parentNode;if(this.__hasInstance()){let r=this.__getInstanceNodes();if(r&&r.length&&C(this).previousSibling!==r[r.length-1])for(let i=0,s;i<r.length&&(s=r[i]);i++)C(t).insertBefore(s,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Su()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Qi||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class R_ extends Iu{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const r=this.__dataHost||this;if(Fe&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=r._bindTemplate(this.__template,!0);n.runEffects=(i,s,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(a.changedProps,s)),i(s,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:i,changedProps:{}}),o)for(const l in s){const d=Ft(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,s)},this.__instance=r._stampTemplate(this.__template,n),C(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,Nu(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class $_ extends Iu{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=gn(this.__template,this,{mutableData:!0,forwardHostProp:function(r,n){this.__instance&&(this.if?this.__instance.forwardHostProp(r,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Ft(r)]=!0))}})),this.__instance=new this.__ctor,C(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let r=C(t[0]).parentNode;if(r){r=C(r);for(let n=0,i;n<t.length&&(i=t[n]);n++)r.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let r in t)this.__instance._setPendingProperty(r,this.__dataHost[r]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const Ka=vc?R_:$_;customElements.define(Ka.is,Ka);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let N_=K(e=>{let t=Zn(e);class r extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(i,s){let o=s.path;if(o==JSCompiler_renameProperty("items",this)){let a=s.base||[],l=this.__lastItems,d=this.__lastMulti;if(i!==d&&this.clearSelection(),l){let p=dc(a,l);this.__applySplices(p)}this.__lastItems=a,this.__lastMulti=i}else if(s.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(s.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(i){let s=this.__selectedMap;for(let a=0;a<i.length;a++){let l=i[a];s.forEach((d,p)=>{d<l.index||(d>=l.index+l.removed.length?s.set(p,d+l.addedCount-l.removed.length):s.set(p,-1))});for(let d=0;d<l.addedCount;d++){let p=l.index+d;s.has(this.items[p])&&s.set(this.items[p],p)}}this.__updateLinks();let o=0;s.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,s.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let i=0;this.__selectedMap.forEach(s=>{s>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${s}`,`${JSCompiler_renameProperty("selected",this)}.${i++}`)})}else this.__selectedMap.forEach(i=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${i}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${i}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(i){return this.__selectedMap.has(i)}isIndexSelected(i){return this.isSelected(this.items[i])}__deselectChangedIdx(i){let s=this.__selectedIndexForItemIndex(i);if(s>=0){let o=0;this.__selectedMap.forEach((a,l)=>{s==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(i){let s=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${i}`];if(s)return parseInt(s.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(i){let s=this.__selectedMap.get(i);if(s>=0){this.__selectedMap.delete(i);let o;this.multi&&(o=this.__selectedIndexForItemIndex(s)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(i){this.deselect(this.items[i])}select(i){this.selectIndex(this.items.indexOf(i))}selectIndex(i){let s=this.items[i];this.isSelected(s)?this.toggle&&this.deselectIndex(i):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(s,i),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),s):this.selected=this.selectedItem=s)}}return r}),I_=N_(Bt);class Xa extends I_{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Xa.is,Xa);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const tn=new Wt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){tn.processStyles(),us(e,t)},styleElement(e){tn.processStyles()},styleDocument(e){tn.processStyles(),us(document.body,e)},getComputedStyleValue(e,t){return uu(e,t)},flushCustomStyles(){},nativeCss:Ks,nativeShadow:ti,cssBuild:Cr,disableRuntime:eu});window.ShadyCSS.CustomStyleInterface=tn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Za="include",L_=window.ShadyCSS.CustomStyleInterface;class M_ extends HTMLElement{constructor(){super(),this._style=null,L_.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const r=t.getAttribute(Za);return r&&(t.removeAttribute(Za),t.textContent=ep(r)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",M_);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oS=Eu(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ur=new Set;const D_={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Ur.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&e._interestedResizables.indexOf(this)===-1&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){if(this._notifyingDescendant){e.stopPropagation();return}Ms||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=wt(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(Ur.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Ur.delete(this):Ur.add(this)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class j_{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach(function(r){(!t||t.indexOf(r)<0)&&this.setItemSelected(r,!1)},this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,r){if(t!=null&&r!==this.isSelected(t)){if(r)this.selection.push(t);else{var n=this.selection.indexOf(t);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(t,r)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const F_={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new j_(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&wt(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;this.selected!==void 0&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;this.selected!==void 0&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&typeof this._observer.flush=="function"?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=wt(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&this._selection.get()===void 0&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return e==null?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(this.attrForSelected){for(var t=0,r;r=this.items[t];t++)if(this._valueForItem(r)==e)return t}else return Number(e)},_indexToValue:function(e){if(this.attrForSelected){var t=this.items[e];if(t)return this._valueForItem(t)}else return e},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return t===-1?null:t}var r=e[zs(this.attrForSelected)];return r??e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return wt(e).observeNodes(function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,r=this.items;t&&t!=this;){var n=r.indexOf(t);if(n>=0){var i=this._indexToValue(n);this._itemActivate(i,t);return}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ri({_template:_e`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[D_,F_],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(e,t){this.async(this.notifyResize)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ri({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(!this.full&&e[0]!=="("&&(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});const B_=rt`
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
`;jt("vaadin-vertical-layout",B_,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */class tl extends qe(He(Bt)){static get template(){return _e`
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
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(tl.is,tl);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-ordered-layout" is deprecated. Use "@vaadin/vertical-layout" instead.');jt("vaadin-split-layout",rt`
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
 */class bn extends qe(He(Bt)){static get template(){return _e`
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
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new Lt(this,r=>{this._cleanupNodes(r.removedNodes),this._processChildren()});const t=this.$.splitter;cr(t,"track",this._onHandleTrack.bind(this)),cr(t,"down",this._setPointerEventsNone.bind(this)),cr(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(r=>{r.parentElement instanceof bn||r.removeAttribute("slot")})}_processChildren(){const t=[...this.children];t.filter(r=>r.hasAttribute("slot")).forEach(r=>this._processChildWithSlot(r)),t.filter(r=>!r.hasAttribute("slot")).forEach((r,n)=>this._processChildWithoutSlot(r,n))}_processChildWithSlot(t){const r=t.getAttribute("slot");t.__autoSlotted?(this[`_${r}Child`]=null,t.removeAttribute("slot")):this[`_${r}Child`]=t}_processChildWithoutSlot(t,r){let n;this._primaryChild||this._secondaryChild?n=this._primaryChild?"secondary":"primary":n=r===0?"primary":"secondary",this[`_${n}Child`]=t,t.setAttribute("slot",n),t.__autoSlotted=!0}_setFlexBasis(t,r,n){r=Math.max(0,Math.min(r,n)),r===0&&(r=1e-6),t.style.flex=`1 1 ${r}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const r=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[r]-this.$.splitter.getBoundingClientRect()[r],primary:this._primaryChild.getBoundingClientRect()[r],secondary:this._secondaryChild.getBoundingClientRect()[r]};return}const n=this.orientation==="vertical"?t.detail.dy:t.detail.dx,s=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-n:n;this._setFlexBasis(this._primaryChild,this._startSize.primary+s,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-s,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(bn.is,bn);/**
 * @license
 * Copyright (c) 2000 - 2024 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-split-layout" is deprecated. Use "@vaadin/split-layout" instead.');async function k_(e,t=fetch){const r=await t("https://s.zazuko.com/api/v1/shorten/",{method:"POST",body:new URLSearchParams({url:e})});if(!r.ok)throw new Error(await r.text());return r.text()}var z_={shorten:k_};const U_=`@prefix sh: <http://www.w3.org/ns/shacl#> .
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
`;function H_(e,t){return{...e,format:t}}function q_(e,{quads:t,serialized:r}){return{...e,quads:t,graph:r}}function V_(e,t){return{...e,graph:t}}function G_(e,t){return{...e,prefixes:[...new Set([...e.prefixes,t])]}}function J_(e,t){return{...e,prefixes:e.prefixes.filter(r=>r!==t)}}function Y_(e,{prefix:t,namespace:r}){if(typeof t!="string"||typeof r!="string")return e;const n={...e.customPrefixes};return r?n[t]=r:delete n[t],{...e,customPrefixes:n}}function W_(e,t){return{...e,customPrefixes:t}}const Lu=Object.freeze(Object.defineProperty({__proto__:null,addPrefix:G_,changeFormat:H_,parsed:q_,removePrefix:J_,replaceCustomPrefixes:W_,setCustomPrefix:Y_,setGraph:V_},Symbol.toStringTag,{value:"Module"})),Q_=Wn({state:{format:"text/turtle",graph:U_,prefixes:["sh","schema"],customPrefixes:{}},reducers:{...Lu}}),K_=`{
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
`,X_=Wn({state:{format:"application/ld+json",graph:K_,prefixes:[],customPrefixes:{}},reducers:{...Lu}});let ao=class Mu{constructor(t,{bind:r=!1}={}){this._factories=t.slice();for(const n of this._factories){typeof n.prototype.init=="function"&&n.prototype.init.call(this);for(const i of n.exports||[])r?this[i]=n.prototype[i].bind(this):this[i]=n.prototype[i]}}clone(){const t=new Mu(this._factories);for(const r of t._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(t,this);return t}};function el({parent:e,child:t}){return new Proxy({},{get(n,i){return t[i]||e[i]},set(n,i,s){return t[i]=s,!0},has(n,i){return i in t||i in e},ownKeys(){const n=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);return[...new Set([...n,...i]).values()]},getOwnPropertyDescriptor(n,i){return{enumerable:!i.toString().startsWith("_"),configurable:!0}}})}class pe{constructor(t,{parent:r,bind:n=!1}={}){if(this._parent=r,t instanceof ao||t instanceof pe)return el({parent:r,child:t});this._factories=t.slice();const i=r?el({parent:r,child:this}):this;for(const s of this._factories){typeof s.prototype.init=="function"&&s.prototype.init.call(i);for(const o of s.exports||[])n?this[o]=s.prototype[o].bind(i):this[o]=s.prototype[o]}return i}clone(){const t=new pe(this._factories,this._parent);for(const r of t._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(t,this);return t}}var lo={exports:{}},Z_=Du;function Du(e,t){if(e&&t)return Du(e)(t);if(typeof e!="function")throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(n){r[n]=e[n]}),r;function r(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];var s=e.apply(this,n),o=n[n.length-1];return typeof s=="function"&&s!==o&&Object.keys(o).forEach(function(a){s[a]=o[a]}),s}}var ju=Z_;lo.exports=ju(en);lo.exports.strict=ju(Fu);en.proto=en(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return en(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return Fu(this)},configurable:!0})});function en(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function Fu(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}var ty=lo.exports;const ey=me(ty);function bs(e){return function(t,r,n){return Array.isArray(t)?!0:n.findIndex(s=>Array.isArray(s)?!0:e(t,s))===r}}function Bu(e,t){return e&&e.equals(t)}function ku(e){return(t,r)=>{if(!t||!r)return!1;const n=t.id.equals(r.id);return e?n&&t._graphId.equals(r._graphId):n}}function Ti(e,t){return typeof e=="string"?t.namedNode(e):"termType"in e?e:e.id}class ry{constructor(t,r=!1){this.__resource=t,this.__allGraphs=r,this.__graph=r?t.env.clownface({dataset:t.pointer.dataset,term:t.pointer.term,graph:void 0}):t.pointer}add(t){return this.__resource.pointer.addOut(this.__resource.env.ns.rdf.type,Ti(t,this.__resource.env)),this}clear(){this.__graph.deleteOut(this.__resource.env.ns.rdf.type)}delete(t){const r=this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,Ti(t,this.__resource.env));for(const n of r)this.__graph.dataset.delete(n);return r.size>0}forEach(t,r){for(const n of this.values())t.call(r,n,n,this)}has(t){return this.__graph.has(this.__resource.env.ns.rdf.type,Ti(t,this.__resource.env)).terms.length>0}get size(){return this.__graph.out(this.__resource.env.ns.rdf.type).terms.filter(bs(Bu)).length}[Symbol.iterator](){return this.values()}entries(){return this.__values.map(t=>[t,t])[Symbol.iterator]()}keys(){return this.values()}values(){return this.__values[Symbol.iterator]()}get[Symbol.toStringTag](){return this.__values.toString()}get __values(){const t=this.__allGraphs?null:this.__resource._graphId;return[...this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,null,t)].map(i=>this.__resource.env.clownface({dataset:this.__graph.dataset,term:i.object,graph:i.graph})).map(i=>this.__resource._create(i)).filter(bs(ku(!1)))}}class zu{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}zu.prototype.termType="BlankNode";class co{equals(t){return!!t&&t.termType===this.termType}}co.prototype.termType="DefaultGraph";co.prototype.value="";function rl(e,t){if(!t)return null;if(t.termType==="BlankNode")return e.blankNode(t.value);if(t.termType==="DefaultGraph")return e.defaultGraph();if(t.termType==="Literal")return e.literal(t.value,t.language||e.namedNode(t.datatype.value));if(t.termType==="NamedNode")return e.namedNode(t.value);if(t.termType==="Quad"){const r=e.fromTerm(t.subject),n=e.fromTerm(t.predicate),i=e.fromTerm(t.object),s=e.fromTerm(t.graph);return e.quad(r,n,i,s)}if(t.termType==="Variable")return e.variable(t.value);throw new Error(`unknown termType ${t.termType}`)}class vs{constructor(t,r,n){this.value=t,this.language=r,this.datatype=n}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)}}vs.prototype.termType="Literal";class ni{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}ni.prototype.termType="NamedNode";class uo{constructor(t,r,n,i){this.subject=t,this.predicate=r,this.object=n,this.graph=i}equals(t){return!!t&&(t.termType==="Quad"||!t.termType)&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)}}uo.prototype.termType="Quad";uo.prototype.value="";class Uu{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}Uu.prototype.termType="Variable";const ny=new ni("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),iy=new ni("http://www.w3.org/2001/XMLSchema#string");class $r{constructor(){this.init()}init(){this._data={blankNodeCounter:0,defaultGraph:new co}}namedNode(t){return new ni(t)}blankNode(t){return t=t||"b"+ ++this._data.blankNodeCounter,new zu(t)}literal(t,r){return typeof r=="string"?new vs(t,r,ny):new vs(t,"",r||iy)}variable(t){return new Uu(t)}defaultGraph(){return this._data.defaultGraph}quad(t,r,n,i=this.defaultGraph()){return new uo(t,r,n,i)}fromTerm(t){return rl(this,t)}fromQuad(t){return rl(this,t)}}$r.exports=["blankNode","defaultGraph","fromQuad","fromTerm","literal","namedNode","quad","variable"];const Ht=new $r,sy={apply:(e,t,r)=>e(r[0]),get:(e,t)=>e(t)};function w(e,{factory:t=Ht}={}){const r=(n="")=>t.namedNode(`${e}${n.raw||n}`);return typeof Proxy>"u"?r:new Proxy(r,sy)}const ws=w("http://www.w3.org/1999/02/22-rdf-syntax-ns#");function Hu(e){return ws.nil.equals(e.term)}function Pr(e){const t=Hu(e),r=e.out([ws.first,ws.rest]).values.length===2;return t||r}function ho(e,t,r){const n=[];let i=t;for(;!Hu(i);)i.out(e.env.ns.rdf.first).map((o,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:first objects");return r.call(e,o)}).forEach(o=>{if(Array.isArray(o))throw new Error("Malformed RDF List had multiple rdf:first objects");n.push(o)}),i=i.out(e.env.ns.rdf.rest).map((o,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:rest objects");return o})[0];return n}function*qu(e){let t=e.constructor;for(;t;)"__properties"in t&&(yield t),t=Object.getPrototypeOf(t)}function oy(e){switch(e.termType){case"NamedNode":case"BlankNode":case"Literal":return!0;default:return!1}}function ay(e){const t=e.pointer._context[0].graph;return[...e.pointer.dataset.match(e.id,null,null,t)].reduce((r,n)=>{if(e.env.ns.rdf.type.equals(n.predicate))return r;const i=r.get(n.predicate)||[];return oy(n.object)&&i.push(e.pointer.node(n.object)),r.set(n.predicate,i),r},e.env.termMap())}function ly(e,t,r){return e&&t in e?e[t]===r.value:!1}function Vu(e,t){if(t.ns.xsd.string.equals(e.datatype))return e.value;if(t.ns.xsd.integer.equals(e.datatype)){const r=Number.parseInt(e.value);if(r.toString()===e.value)return r}if(t.ns.xsd.double.equals(e.datatype)){const r=Number.parseFloat(e.value);if(r.toString()===e.value)return r}if(t.ns.xsd.boolean.equals(e.datatype)){if(e.value==="true")return!0;if(e.value==="false")return!1}return t.ns.rdf.langString.equals(e.datatype)?{"@value":e.value,"@language":e.language}:e.datatype?{"@value":e.value,"@type":e.datatype.value}:e.value}function cy(e,t){return(r,[n,i])=>{const s=a=>{if(a.term.termType==="Literal")return Vu(a.term,e.env);const l=a.list();return l?[...l].map(s):vn(e._create(e.pointer.node(a.term)),t)},o=i.map(s);return o.length===1?r[n.value]=o[0]:r[n.value]=o,r}}function uy(e){const{parentContexts:t,visitedResources:r,remainingObjects:n,context:i,resource:s,namespace:o}=e;return({json:a,contextPopulated:l=!1},[d,{options:p}])=>{const m=p.path?p.path:o?o(d):null;if(!m||Array.isArray(m)||typeof m=="function"||p.subjectFromAllGraphs)return{json:a,contextPopulated:l};let y=!1;const S=typeof m=="string"?e.resource.env.namedNode(m):m;if(!n.get(S))return{json:a,contextPopulated:l};const R=s.pointer.out(S);ly(t,d,S)||(Pr(R)?i[d]={"@container":"@list","@id":S.value}:i[d]=S.value,y=!0);function j(I){switch(I.term.termType){case"BlankNode":case"NamedNode":return p.fromTerm.call(s,I);default:return I.term}}const P=R.map(I=>I.term.termType==="Literal"?I.term:Pr(I)?ho(s,I,j):j(I)).map(function I(G){if(Array.isArray(G))return G.map(Z=>I(Z));if("termType"in G)switch(G.termType){case"Literal":return Vu(G,s.env);case"BlankNode":case"NamedNode":return vn(s._create(s.pointer.node(G)),{parentContexts:{...t,...i},visitedResources:r});default:return null}return vn(G,{parentContexts:{...t,...i},visitedResources:r})});return p.values.includes("array")&&P.length!==1?a[d]=P:p.values.includes("list")&&Array.isArray(P[0])?a[d]=P[0]||[]:P.length>1?a[d]=P:a[d]=p.values.includes("single")?P[0]:P,n.delete(S),{json:a,contextPopulated:l||y}}}function vn(e,{parentContexts:t,visitedResources:r=e.env.termSet()}={}){const i={id:e.id.termType==="NamedNode"?e.id.value:`_:${e.id.value}`},s=[...e.types];if(s.length>0&&(i.type=s.map(p=>p.id.value)),r.has(e.id))return i;r.add(e.id);const o=ay(e);let a=!0,l;t?l={}:(a=!1,l={id:"@id",type:"@type"});let d=!1;for(const{__properties:p,__ns:m}of qu(e))({contextPopulated:d}=[...p].reduce(uy({parentContexts:t,visitedResources:r,resource:e,remainingObjects:o,context:l,namespace:m}),{json:i,contextPopulated:d}));return[...o].reduce(cy(e,{parentContexts:{...t,...l},visitedResources:r}),i),(!a||d)&&(i["@context"]=l),i}function Gu(e,t){return t&&typeof t!="string"?e.node(t):!t||t.startsWith("_:")?e.blankNode():e.namedNode(t)}function Ju(e,t){const r=Gu(e.pointer,t.id);return e._create(r,[],{initializer:t})}class Ve{constructor(t,r,n={}){if(this.__initialized=!1,t.term.termType!=="BlankNode"&&t.term.termType!=="NamedNode")throw new Error(`RdfResource cannot be initialized from a ${t.term.termType} node`);let i;"id"in r?(i=r,this.env=i.env):this.env=r;const s=this.env.clownface({...t,term:t.term});s._context[0].graph?(this.pointer=s,this.unionGraphPointer=this.env.clownface({dataset:s.dataset,term:s.term,graph:void 0})):(this.pointer=this.env.clownface({dataset:s.dataset,term:s.term,graph:this.env.defaultGraph()}),this.unionGraphPointer=this.env.clownface({dataset:s.dataset,term:s.term})),this.__initializeProperties=ey(()=>{const o=this;return[...qu(o)].flatMap(l=>[...l.__initializers]).forEach(([l,d])=>{const p=o[l];if(Array.isArray(p)&&p.length===0||typeof p>"u"){if(typeof d=="function"){o[l]=d(o);return}o[l]=d}}),!0}),this._parent=i,this.__initialized=this.__initializeProperties(),Ve._userInitializeProperties(this,n)}static _userInitializeProperties(t,r={}){Object.entries(r).filter(([n])=>n!=="id"&&n!=="types").forEach(([n,i])=>{if(!n.startsWith("http")){typeof i=="function"?t[n]=i(t.pointer.any()):t[n]=i;return}const o=(Array.isArray(i)?i:[i]).map(function a(l){if(typeof l=="function"){const m=l(t.pointer.any());if(typeof m=="function")throw new Error("Initializer factory function cannot return a function");if(Array.isArray(m))throw new Error("Initializer factory function cannot return an array");return a(m)}if(typeof l=="object"&&"term"in l)return l.term;if(typeof l=="object"&&"pointer"in l)return l.pointer;if(typeof l=="object"&&"termType"in l)return t.pointer.node(l);let d;return typeof l=="object"&&"value"in l&&"datatype"in l?d=t.env.rdfine().convert.toLiteral(l.value,l.datatype):d=t.env.rdfine().convert.toLiteral(l),d?t.pointer.node(d):Ju(t,l).pointer});t.pointer.addOut(t.pointer.namedNode(n),o)});for(const n of r.types||[])t.types.add(n)}get id(){return this.pointer.term}get _graphId(){return this.pointer._context[0].graph}get types(){return new ry(this)}get isAnonymous(){return this.id.termType==="BlankNode"}hasType(t){return this.types.has(t)}equals(t){if(!t)return!1;if("termType"in t)return this.id.equals(t);const r="_context"in t?t:t.pointer,n=this.id.equals(r.term);return this.isAnonymous||r.term.termType==="BlankNode"?n&&this.pointer.dataset===r.dataset:n}get(t,r){const n=this.getArray(t,r);return n.length>0?n[0]:null}getArray(t,r){const n=this._getObjects(t,r).filter(i=>i.term.termType==="NamedNode"||i.term.termType==="BlankNode").map(i=>this._create(i,[],{parent:this}));return n.length?n:[]}getNumber(t,r){const[n]=this._getObjects(t,r).toArray();if(typeof n>"u")return null;if(n.term.termType==="Literal")return parseFloat(n.value);throw new Error(`Expected property '${t}' to be a number but found '${n}'`)}getString(t,r){const[n]=this._getObjects(t,r).toArray();if(typeof n>"u")return null;if(n.term.termType==="Literal")return n.value;throw new Error(`Expected property '${t}' to be a literal but found '${n}'`)}getBoolean(t,r){const[n]=this._getObjects(t,r).toArray();if(typeof n>"u")return!1;if(n.term.termType==="Literal"&&this.env.ns.xsd.boolean.equals(n.term.datatype))return n.term.equals(this.pointer.literal(!0).term);throw new Error(`Expected property '${t}' to be a boolean but found '${n}'`)}_getObjects(t,{strict:r}={strict:!1}){const n=typeof t=="string"?this.pointer.namedNode(t):t,i=this.pointer.out(n);if(!i.terms.length&&r)throw new Error(`Value for predicate <${t}> was missing`);return i}_create(t,r,n={}){return this.env.rdfine().factory.createEntity(t,r,n)}toJSON(){return vn(this)}}Ve.__mixins=[];Ve.__properties=new Map;Ve.__initializers=new Map;function dy(e,t){if(!t)throw new Error(`Cannot construct URI for property ${e}. Annotate the class with @namespace or use a NamedNode`);return t[e]}function hy(e,t,r){return typeof e=="string"?e.match(/^(http|urn):\/\//)?t.namedNode(e):dy(e,r):e}function py(e){const t=r=>r.out(e).toArray();return t.predicate=e,t.crossesGraphBoundaries=!1,t}function nl(e,t,r){return r.map(n=>typeof n=="function"?n.call(t,e):py(hy(n,t,e)))}function fy(e){const t=r=>{switch(r.term.termType){case"BlankNode":case"NamedNode":return Pr(r)?ho(e,r,t):e._create(r,[],{parent:e});default:return r.term}};return t}function my(e){return new Proxy(e,{get(t,r){if(r in t||typeof r=="symbol")return t[r.toString()];const n=t._getObjects(r.toString());if(n.values.length===0)return;const i=n.map(fy(t));return i.length===1?i[0]:i},set(t,r,n){if(r in t||typeof r=="symbol")return t[r.toString()]=n,!0;if(typeof r=="number")return!1;const i=Array.isArray(n)?n:[n],s=i.reduce((a,l)=>(typeof l=="function"&&(l=l(t.pointer)),!l||typeof l!="object"?a:l&&("termType"in l||"_context"in l)?[...a,l]:[...a,l.id]),[]),o=t.pointer.namedNode(r.toString());return t.pointer.deleteOut(o),i.length&&t.pointer.addOut(o,s),!0}})}class _y{constructor(t){this.__env=t,this.__mixins=new Set,this.__alwaysMixins=new Set,this.__typeMixins=new Map,this.__typeCache=new Map,this.BaseClass=t.rdfine.Resource}addMixin(...t){this.__typeCache.clear(),t.forEach(r=>{if("appliesTo"in r){const n=this.__typeMixins.get(r.appliesTo.value)||[];this.__typeMixins.set(r.appliesTo.value,[...n,r])}else r.shouldApply===!0&&this.__alwaysMixins.add(r),this.__mixins.add(r)})}createEntity(t,r=[],n={}){var p;let i=this.BaseClass,s=r;if(r.length>0){const[m,...y]=r;this.__isConstructor(m)&&(i=m,s=y)}const o=t.out(this.__env.ns.rdf.type).values;for(const m of((p=n.initializer)==null?void 0:p.types)||[])"termType"in m?o.push(m.value):o.push(m.id.value);i=this.__getBaseClass(i,o);const a=new i(t,this.__env),l=[...this.__mixins].reduce((m,y)=>((y.shouldApply===!0||typeof y.shouldApply=="function"&&y.shouldApply(a))&&m.add(y),m),new Set(s)),d=this.__extend(i,[...l]);return my(new d(t,n.parent||this.__env,n.initializer))}__getBaseClass(t,r){const n=[t.name,...r].toString(),i=this.__typeCache.get(n);if(i)return i;const s=r.reduce((a,l)=>{const d=this.__typeMixins.get(l);return d&&d.forEach(p=>a.add(p)),a},new Set),o=this.__extend(t,[...this.__alwaysMixins,...s]);return this.__typeCache.set(n,o),o}__extend(t,r){const n=r.reduce((s,o)=>o(s),t),i=t.__mixins||[];return n.__mixins=[...i,...r],n}__isConstructor(t){return"__mixins"in t}}function Yu(e,t){e.__ns=t}const yy=(e,t)=>(Yu(t,e),t),gy=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(i){Yu(i,e)}}},E=e=>t=>typeof t=="function"?yy(e,t):gy(e,t);function il(e,t,r){return r.reduce((i,s)=>{const o=[];return i.forEach(a=>{o.push(...s(a,e))}),o},t).reduce((i,s)=>i.concat(s.toArray()),[])}function by(e,t){const n=[...e.datasets.reduce((i,s)=>[...s].reduce((o,a)=>o.add(a.graph),i),t.termSet()).values()];return n.length?n.map(i=>t.clownface({dataset:e.dataset,term:e.term,graph:i})):[e]}function Wu(e,t,r){const{fromTerm:n,toTerm:i,assertSetValue:s,valueTypeName:o,initial:a,strict:l,compare:d,subjectFromAllGraphs:p,filter:m}=r;let y=["single"];Array.isArray(r.values)?y=r.values:r.values&&(y=[r.values]);const S=A=>Array.isArray(r.path)?nl(e.constructor.__ns,A.env,r.path):nl(e.constructor.__ns,A.env,[r.path||t]);Object.defineProperty(e,t,{get(){const A=p?by(this.pointer,this.env):[this.pointer],R=S(this);let j=il(this.env,A,R);const N=R.some(I=>I.crossesGraphBoundaries);(p||N)&&(y=["array"]),m&&(j=j.filter(I=>m(I.term)));const P=j.map((I,G)=>{if(Pr(I)){if(G>0)throw new Error("Lists of lists are not supported");return ho(this,I,n.bind(this))}return n.call(this,I)}).filter(bs(d));if(y.includes("array")&&P.length!==1)return P;if(y.includes("list")&&Array.isArray(P[0]))return P[0]||[];if(P.length>1&&!y.includes("array"))throw new Error(`${t}: Multiple terms found where 0..1 was expected`);if(Array.isArray(P[0])&&!y.includes("list"))throw new Error(`${t}: RDF List found where 0..1 object was expected`);if(this.__initialized&&l&&P.length===0)throw new Error(`Object not found for property ${t}`);return y.includes("single")?P[0]:P},set(A){if(!y.includes("array")&&!y.includes("list")&&Array.isArray(A))throw new Error(`${t}: Cannot set array to a non-array property`);const R=S(this),j=R.length===1?this.pointer.toArray():il(this.env,[this.pointer],R.slice(0,R.length-1));if(j.length>1)throw new Error("Cannot set value to multiple nodes at once");const N=j[0],P=R[R.length-1].predicate;if(N.out(P).forEach(te=>{Pr(te)&&N.deleteList(P)}),N.deleteOut(P),A===null||typeof A>"u")return;let I=!1,G;Array.isArray(A)?(I=!0,G=A):G=[A];const Z=G.reduce((te,be)=>{let kt,J;if(typeof be=="function"?J=be(this.pointer.any()):J=be,J&&typeof J=="object"&&"termType"in J?kt=J:J&&typeof J=="object"&&"term"in J?kt=J.term:J&&typeof J=="object"&&"pointer"in J?kt=J.id:kt=i.call(this,J),m&&!m(kt))return te;if(!s(J)){const ii=R.map(si=>`<${si.predicate.value}>`).join("/");throw new Error(`Unexpected value for path ${ii}. Expecting a ${o} or RDF/JS term.`)}return[...te,kt]},[]);y.includes("list")&&(y.length===1||I)?Z.length===0?N.addOut(P,this.env.ns.rdf.nil):N.addList(P,Z):N.addOut(P,Z)}}),Object.hasOwnProperty.call(e.constructor,"__properties")||(e.constructor.__properties=new Map),Object.hasOwnProperty.call(e.constructor,"__initializers")||(e.constructor.__initializers=new Map),e.constructor.__properties.set(t,{initial:a,options:{...r,values:y}}),a&&e.constructor.__initializers.set(t,a)}const vy=(e,t,r)=>{Wu(t,r.toString(),e)},wy=(e,t)=>({kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){Wu(r.prototype,t.key.toString(),e)}});function po(e){return(t,r)=>r!==void 0?vy(e,t,r):wy(e,t)}function xy(e={}){const t=e.type||String;return po({...e,fromTerm(r){return this.env.rdfine().convert.fromLiteral(t,r)},toTerm(r){return this.env.rdfine().convert.toLiteral(r,e.datatype)},valueTypeName:t.name,assertSetValue:r=>{if(r instanceof Date)return!0;if(typeof r=="object"){let n;return"id"in r?!1:("term"in r?n=r.term:n=r,n.termType==="Literal")}return!0},compare(r,n){return r===n}})}function Sy(e={}){return po({...e,fromTerm(t){return e.implicitTypes&&t.addOut(this.env.ns.rdf.type,e.implicitTypes),this._create(t,e.as,{parent:this})},toTerm(t){const r=Gu(this.pointer,t.id);return t.types&&Array.isArray(t.types)&&r.addOut(this.env.ns.rdf.type,t.types),e.implicitTypes&&r.addOut(this.env.ns.rdf.type,e.implicitTypes),this._create(r,e.as,{initializer:t}),r.term},valueTypeName:"RdfResource instance",assertSetValue:t=>{let r=null;return"termType"in t?r=t:"term"in t&&(r=t.term),r?r.termType==="NamedNode"||r.termType==="BlankNode":!0},compare:ku(!0)})}function Ay(e){return typeof e=="object"&&e instanceof Object&&"id"in e}function x(e={}){return po({...e,fromTerm:t=>t.term,toTerm(t){return Ay(t)?Ju(this,t).id:this.env.rdfine().convert.toLiteral(t)||this.env.literal(t.toString())},valueTypeName:"RDF/JS term object",assertSetValue:()=>!0,compare:Bu})}x.literal=xy;x.resource=Sy;function Cy(e,t,r){return t===Boolean?Ht.literal("true",e.ns.xsd.boolean).equals(r.term):t===Number?Number.parseFloat(r.value):t===Date?new Date(Date.parse(r.value)):r.value}function Ey(e,t,r){switch(typeof t){case"boolean":return Ht.literal(t.toString(),r||e.ns.xsd.boolean);case"number":return Ht.literal(t.toString(),r||(Number.isInteger(t)?e.ns.xsd.integer:e.ns.xsd.float));case"bigint":return Ht.literal(t.toString(),r||e.ns.xsd.long);case"string":return Ht.literal(t,r);case"object":if(t instanceof Date){const n=t.toISOString();return e.ns.xsd.date.equals(r)?Ht.literal(n.substr(0,10),e.ns.xsd.date):Ht.literal(n,r||e.ns.xsd.dateTime)}break}}class Py{init(){const t=this;class r extends Ve{static get env(){return t}}let n;this.rdfine=()=>({factory:n,createEntity:n.createEntity.bind(n),convert:{toLiteral:Ey.bind(null,t),fromLiteral:Cy.bind(null,t)}}),this.rdfine.Resource=r,n=new _y(t)}static get exports(){return["_initVocabulary"]}_initVocabulary(t){return this.rdfine().factory.addMixin(...Object.values(t)),Object.fromEntries(Object.entries(t).reduce((r,[n,i])=>"createFactory"in i?[...r,[n.replace(/Mixin$/,""),i.createFactory(this)]]:r,[]))}}function Ty(e,t){for(const r of t)e.add(r);return e}var Oy=Ty;const xs=me(Oy);function Ry(e,t,r,n,i){const s=e.match(t,r,n,i);for(const o of s)e.delete(o);return e}var $y=Ry;const Qu=me($y);function Ny(e,t){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}var Iy=Ny;const Ku=me(Iy),Ly=e=>class{constructor(){To(this,"dataset")}init(){const t=e(this);this.dataset=(r=[])=>new t([...r]),this.dataset.Class=t,this.dataset.addAll=xs,this.dataset.deleteMatch=Qu,this.dataset.equals=Ku}};class sl extends Map{import(t,r,n){const i=this.get(t);return i?i.import(r,n):null}}class My{constructor({factory:t}){this.factory=t,this.parsers=new sl,this.serializers=new sl}import(t){if(t.parsers)for(const[r,n]of t.parsers)this.parsers.set(r,new n.constructor({factory:this.factory}));if(t.serializers)for(const[r,n]of t.serializers)this.serializers.set(r,new n.constructor({factory:this.factory}));return this}}let Dy=class{init(){this.formats=new My({factory:this})}clone(t){this.formats.import(t.formats)}},fo=class{namespace(t){return w(t,{factory:this})}};fo.exports=["namespace"];class Xu{init(){this.ns=Td}}const jy=w("http://www.w3.org/ns/auth/acl#"),Fy=jy,By=w("https://www.w3.org/ns/activitystreams#"),ky=By,zy=w("http://purl.org/ontology/bibo/"),Uy=zy,Hy=w("http://creativecommons.org/ns#"),qy=Hy,Vy=w("http://www.w3.org/ns/auth/cert#"),Gy=Vy,Jy=w("http://www.w3.org/2011/content#"),Yy=Jy,Wy=w("http://qudt.org/vocab/constant/"),Qy=Wy,Ky=w("http://www.cidoc-crm.org/cidoc-crm/"),Xy=Ky,Zy=w("http://www.w3.org/ns/csvw#"),tg=Zy,eg=w("http://commontag.org/ns#"),rg=eg,ng=w("http://datashapes.org/sparql#"),ig=ng,sg=w("http://datashapes.org/dash#"),og=sg,ag=w("http://dbpedia.org/ontology/"),lg=ag,cg=w("http://purl.org/dc/elements/1.1/"),ug=cg,dg=w("http://purl.org/dc/dcam/"),hg=dg,pg=w("http://www.w3.org/ns/dcat#"),fg=pg,mg=w("http://purl.org/dc/dcmitype/"),_g=mg,yg=w("http://purl.org/dc/terms/"),gg=yg,bg=w("http://www.ics.forth.gr/isl/CRMdig/"),vg=bg,wg=w("http://qudt.org/vocab/discipline/"),xg=wg,Sg=w("http://usefulinc.com/ns/doap#"),Ag=Sg,Cg=w("http://www.w3.org/ns/dpv#"),Eg=Cg,Pg=w("http://www.w3.org/ns/dqv#"),Tg=Pg,Og=w("http://www.linkedmodel.org/schema/dtype#"),Rg=Og,$g=w("http://www.w3.org/ns/duv#"),Ng=$g,Ig=w("http://www.w3.org/ns/earl#"),Lg=Ig,Mg=w("http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#"),Dg=Mg,jg=w("http://www.w3.org/2003/12/exif/ns#"),Fg=jg,Bg=w("http://xmlns.com/foaf/0.1/"),kg=Bg,zg=w("http://purl.org/vocab/frbr/core#"),Ug=zg,Hg=w("http://www.opengis.net/ont/geosparql#"),qg=Hg,Vg=w("http://www.opengis.net/def/function/geosparql/"),Gg=Vg,Jg=w("http://www.opengis.net/def/rule/geosparql/"),Yg=Jg,Wg=w("http://www.opengis.net/ont/gml#"),Qg=Wg,Kg=w("http://www.geonames.org/ontology#"),Xg=Kg,Zg=w("http://purl.org/goodrelations/v1#"),tb=Zg,eb=w("http://www.w3.org/2003/g/data-view#"),rb=eb,nb=w("https://gs1.org/voc/"),ib=nb,sb=w("http://vocab.gtfs.org/terms#"),ob=sb,ab=w("http://www.w3.org/2011/http#"),lb=ab,cb=w("http://www.w3.org/ns/hydra/core#"),ub=cb,db=w("http://www.w3.org/2002/12/cal/icaltzd#"),hb=db,pb=w("https://linked.art/ns/terms/"),fb=pb,mb=w("http://www.w3.org/ns/ldp#"),_b=mb,yb=w("http://www.w3.org/2000/10/swap/list#"),gb=yb,bb=w("http://www.w3.org/ns/locn#"),vb=bb,wb=w("http://www.w3.org/2000/10/swap/log#"),xb=wb,Sb=w("http://lexvo.org/ontology#"),Ab=Sb,Cb=w("http://w3id.org/nfdi4ing/metadata4ing#"),Eb=Cb,Pb=w("http://www.w3.org/ns/ma-ont#"),Tb=Pb,Ob=w("http://www.loc.gov/mads/rdf/v1#"),Rb=Ob,$b=w("http://www.w3.org/2000/10/swap/math#"),Nb=$b,Ib=w("http://www.w3.org/ns/oa#"),Lb=Ib,Mb=w("http://ogp.me/ns#"),Db=Mb,jb=w("http://www.w3.org/ns/solid/oidc#"),Fb=jb,Bb=w("http://www.w3.org/ns/org#"),kb=Bb,zb=w("http://www.w3.org/2002/07/owl#"),Nr=zb,Ub=w("http://www.w3.org/ns/pim/space#"),Hb=Ub,qb=w("http://qudt.org/vocab/prefix/"),Vb=qb,Gb=w("http://www.w3.org/ns/prov#"),Jb=Gb,Yb=w("http://purl.org/linked-data/cube#"),Wb=Yb,Qb=w("http://qudt.org/vocab/dimensionvector/"),Kb=Qb,Xb=w("http://qudt.org/vocab/quantitykind/"),Zb=Xb,tv=w("http://qudt.org/schema/qudt/"),ev=tv,rv=w("http://rdaregistry.info/Elements/u/"),nv=rv,iv=w("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),ye=iv,sv=w("http://www.w3.org/ns/rdfa#"),ov=sv,av=w("http://www.w3.org/2000/01/rdf-schema#"),mt=av,lv=w("http://purl.org/stuff/rev#"),cv=lv,uv=w("https://www.ica.org/standards/RiC/ontology#"),dv=uv,hv=w("http://www.w3.org/ns/r2rml#"),pv=hv,fv=w("http://purl.org/rss/1.0/"),mv=fv,_v=w("http://schema.org/"),yv=_v,gv=w("http://www.w3.org/ns/sparql-service-description#"),bv=gv,vv=w("http://purl.org/linked-data/sdmx#"),wv=vv,xv=w("http://semanticweb.cs.vu.nl/2009/11/sem/"),Sv=xv,Av=w("http://www.w3.org/2000/10/swap/set#"),Cv=Av,Ev=w("http://www.opengis.net/ont/sf#"),Pv=Ev,Tv=w("http://www.w3.org/ns/shacl#"),b=Tv,Ov=w("http://www.w3.org/ns/shex#"),Rv=Ov,$v=w("https://www.w3.org/ns/shacl-shacl#"),Nv=$v,Iv=w("http://rdfs.org/sioc/ns#"),Lv=Iv,Mv=w("http://www.w3.org/2004/02/skos/core#"),Dv=Mv,jv=w("http://www.w3.org/2008/05/skos-xl#"),Fv=jv,Bv=w("http://www.w3.org/ns/solid/terms#"),kv=Bv,zv=w("http://www.w3.org/ns/sosa/"),Uv=zv,Hv=w("http://qudt.org/vocab/sou/"),qv=Hv,Vv=w("http://www.w3.org/ns/ssn/"),Gv=Vv,Jv=w("http://www.w3.org/ns/posix/stat#"),Yv=Jv,Wv=w("http://www.w3.org/2000/10/swap/string#"),Qv=Wv,Kv=w("http://www.w3.org/2006/03/test-description#"),Xv=Kv,Zv=w("http://www.w3.org/2006/time#"),tw=Zv,ew=w("http://qudt.org/vocab/unit/"),rw=ew,nw=w("http://www.linkedmodel.org/schema/vaem#"),iw=nw,sw=w("http://purl.org/vocab/vann/"),ow=sw,aw=w("http://www.w3.org/2006/vcard/ns#"),lw=aw,cw=w("http://rdfs.org/ns/void#"),uw=cw,dw=w("http://www.w3.org/2003/06/sw-vocab-status/ns#"),hw=dw,pw=w("http://www.w3.org/2007/05/powder-s#"),fw=pw,mw=w("http://www.w3.org/2003/01/geo/wgs84_pos#"),_w=mw,yw=w("http://www.w3.org/1999/xhtml/vocab#"),gw=yw,bw=w("http://rdf-vocabulary.ddialliance.org/xkos#"),vw=bw,ww=w("http://www.w3.org/2001/XMLSchema#"),xt=ww,xw=w("http://www.w3.org/2007/rif#"),Sw=xw,Aw=w("http://rdf.data-vocabulary.org/#"),Cw=Aw,Ew=w("http://www.w3.org/2007/05/powder#"),Pw=Ew,Tw=w("http://www.w3.org/XML/1998/namespace/"),Ow=Tw,mo=e=>{const t=e.namespace("http://www.w3.org/2001/XMLSchema#"),r=e.namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");return{first:r.first,nil:r.nil,rest:r.rest,langString:r.langString,xsd:t}};function at(e,t){return typeof e>"u"||e===null?t:Array.isArray(e)?e:typeof e!="string"&&e[Symbol.iterator]?[...e]:[e]}const ge=new ao([fo,$r]),{xsd:Ss}=mo(ge);function Rw(e,t=ge){return typeof e!="boolean"?null:t.literal(e.toString(),Ss("boolean"))}function $w(e,t=ge){return typeof e!="number"?null:Number.isInteger(e)?t.literal(e.toString(10),Ss("integer")):t.literal(e.toString(10),Ss("double"))}function Nw(e,t=ge){return typeof e!="string"?null:t.literal(e)}function Iw(e,t=ge){return Rw(e,t)||$w(e,t)||Nw(e,t)}function Lw(e,t){if(e&&typeof e!="string")throw new Error("Blank node identifier must be a string");return t.blankNode(e)}function Mw(e,t,r){if(typeof e=="string")return t=t&&(t.value||t.toString()),t&&t.indexOf(":")!==-1&&(t=r.namedNode(t)),r.literal(e.toString(),t);const n=Iw(e,r);if(!n)throw new Error("The value cannot be converted to a literal node");return n}function ol(e,t){if(typeof e!="string")throw new Error("Named node must be an IRI string");return t.namedNode(e)}function Zu(e,t="Literal",r,n){if(e&&typeof e=="object"&&e.termType)return e;if(e&&e.constructor.name==="URL")return ol(e.toString(),n);if(t==="BlankNode")return Lw(e,n);if(!(e===null||typeof e>"u")){if(t==="Literal")return Mw(e,r,n);if(t==="NamedNode")return ol(e,n);throw new Error("unknown type")}}function Dw(e,t,r,n){return(typeof e>"u"||e===null)&&!t?e:(at(e)||[void 0]).reduce((i,s)=>typeof s=="object"&&s.terms?i.concat(s.terms):(i.push(Zu(s,t,r,n)),i),[])}const al=mo(ge);function jw(e,t){const r=t.termType!=="Literal",n=al.langString.equals(t.datatype)||al.xsd.string.equals(t.datatype);if(r||!n)return e;const i=t.language.toLowerCase();return e.has(i)?e.get(i).push(t):e.set(i,[t]),e}function Fw(e){const t=e.reduce(jw,new Map),r=[...t.entries()];return n=>{const i=n.toLowerCase();if(i==="*")return r[0]&&r[0][1];const s=t.get(i);if(s)return s;const o=r.find(([a])=>a.startsWith(i));return o&&o[1]}}function Bw(e,{language:t}){const r=typeof t=="string"?[t]:t,n=Fw(e);return r.map(n).find(Boolean)||[]}class _o{constructor({dataset:t,graph:r,value:n,factory:i,namespace:s}){this.dataset=t,this.graph=r,this.factory=i,this.namespace=s,this.term=Zu(n,void 0,void 0,i)}clone({dataset:t=this.dataset,graph:r=this.graph,value:n,factory:i=this.factory,namespace:s=this.namespace}){return new _o({dataset:t,graph:r,value:n,factory:i,namespace:s})}has(t,r){return this.matchProperty(at(this.term),t,r,at(this.graph),"subject").map(n=>this.clone({value:n}))}in(t){return this.matchProperty(null,t,at(this.term),at(this.graph),"subject").map(r=>this.clone({value:r}))}out(t,{language:r}={}){let n=this.matchProperty(at(this.term),t,null,at(this.graph),"object");return typeof r<"u"&&(n=Bw(n,{language:r})),n.map(i=>this.clone({value:i}))}addIn(t,r){const n=[];return this.term&&r.forEach(i=>{t.forEach(s=>{this.dataset.add(this.factory.quad(i,s,this.term,this.graph))}),n.push(this.clone({value:i}))}),n}addOut(t,r){const n=[];return this.term&&r.forEach(i=>{t.forEach(s=>{this.dataset.add(this.factory.quad(this.term,s,i,this.graph))}),n.push(this.clone({value:i}))}),n}addList(t,r){this.term&&t.forEach(n=>{const i=r.map(()=>this.factory.blankNode());this.dataset.add(this.factory.quad(this.term,n,i[0]||this.namespace.nil,this.graph));for(let s=0;s<i.length;s++)this.dataset.add(this.factory.quad(i[s],this.namespace.first,r[s],this.graph)),this.dataset.add(this.factory.quad(i[s],this.namespace.rest,i[s+1]||this.namespace.nil,this.graph))})}deleteIn(t,r){this.deleteMatch(r,t,at(this.term),at(this.graph))}deleteOut(t,r){this.deleteMatch(at(this.term),t,r,at(this.graph))}deleteList(t){t.forEach(r=>{for(const n of this.dataset.match(this.term,r))this.deleteItems(n)})}deleteItems(t){let r=[t];for(;!r[r.length-1].object.equals(this.namespace.nil);){const n=r[r.length-1].object;r=r.concat([...this.dataset.match(n)])}r.forEach(n=>{this.dataset.delete(n)})}match(t,r,n,i){if(!t&&!r&&!n&&!i)return[...this.dataset];t=t||[null],r=r||[null],n=n||[null],i=i||[null];const s=[];for(const o of i)for(const a of t)for(const l of r)for(const d of n)for(const p of this.dataset.match(a,l,d,o))s.push(p);return s}matchProperty(t,r,n,i,s){return this.match(t,r,n,i).map(o=>o[s])}deleteMatch(t,r,n,i){this.match(t,r,n,i).forEach(s=>{this.dataset.delete(s)})}}class ot{constructor({dataset:t,graph:r,term:n,value:i,factory:s,_context:o}){if(this.factory=s,this.namespace=mo(s),o){this._context=o;return}const a=n&&at(n)||i&&at(i)||[null];this._context=a.map(l=>new _o({dataset:t,graph:r,value:l,factory:this.factory,namespace:this.namespace}))}get term(){const t=this.terms;if(t.length===1)return t[0]}get terms(){return this._context.map(t=>t.term).filter(Boolean)}get value(){const t=this.term;return t&&t.value}get values(){return this.terms.map(t=>t.value)}get dataset(){const t=this.datasets;if(t.length===1)return t[0]}get datasets(){return this._context.map(t=>t.dataset).filter(Boolean)}any(){return ot.fromContext(this._context.map(t=>t.clone({})),this)}isList(){return this.term?!!(this.term.equals(this.namespace.nil)||this.out(this.namespace.first).term):!1}list(){if(this.terms.length>1)throw new Error("iterator over multiple terms is not supported");if(this.term&&(this.term.termType!=="NamedNode"&&this.term.termType!=="BlankNode"||!this.term.equals(this.namespace.nil)&&!this.out(this.namespace.first).term))return null;let t=this;return{[Symbol.iterator]:()=>({next:()=>{if(!t.term||t.term.equals(this.namespace.nil))return{done:!0};const r=t.out(this.namespace.first);if(r.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:first on ${t.value}`);const n=t.out(this.namespace.rest);if(n.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:rest on ${t.value}`);return t=n,{done:!1,value:r}}})}}toArray(){return this._context.map(t=>ot.fromContext(t,this)).filter(t=>t.terms.some(Boolean))}filter(t){const r=this._context.map(n=>ot.fromContext(n,this));return ot.fromContext(this._context.filter((n,i)=>t(ot.fromContext(n,this),i,r)),this)}forEach(t){return this.toArray().forEach(t),this}map(t){return this.toArray().map(t)}toString(){return this.values.join()}node(t,{type:r,datatype:n,language:i}={}){t=this._toTermArray(t,r,n||i)||[null];const s=t.reduce((o,a)=>o.concat(this._context.reduce((l,d)=>l.concat([d.clone({value:a})]),[])),[]);return ot.fromContext(s,{factory:this.factory})}blankNode(t){return this.node(t,{type:"BlankNode"})}literal(t,r){return this.node(t,{type:"Literal",datatype:r})}namedNode(t){return this.node(t,{type:"NamedNode"})}in(t){t=this._toTermArray(t);const r=this._context.reduce((n,i)=>n.concat(i.in(t)),[]);return ot.fromContext(r,this)}out(t,r={}){t=this._toTermArray(t);const n=this._context.reduce((i,s)=>i.concat(s.out(t,r)),[]);return ot.fromContext(n,this)}has(t,r){t=this._toTermArray(t),r=this._toTermArray(r);const n=this._context.reduce((i,s)=>i.concat(s.has(t,r)),[]);return ot.fromContext(n,this)}addIn(t,r,n){if(!t)throw new Error("predicate parameter is required");typeof r=="function"&&(n=r,r=null),t=this._toTermArray(t),r=this._toTermArray(r)||[this.factory.blankNode()];const i=this._context.map(s=>s.addIn(t,r));return n&&ot.fromContext(i,this).forEach(n),this}addOut(t,r,n){if(!t)throw new Error("predicate parameter is required");typeof r=="function"&&(n=r,r=null),t=this._toTermArray(t),r=this._toTermArray(r)||[this.factory.blankNode()];const i=this._context.map(s=>s.addOut(t,r));return n&&ot.fromContext(i,this).forEach(n),this}addList(t,r){if(!t||!r)throw new Error("predicate and items parameter is required");return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(n=>n.addList(t,r)),this}deleteIn(t,r){return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(n=>n.deleteIn(t,r)),this}deleteOut(t,r){return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(n=>n.deleteOut(t,r)),this}deleteList(t){if(!t)throw new Error("predicate parameter is required");return t=this._toTermArray(t),this._context.forEach(r=>r.deleteList(t)),this}_toTermArray(t,r,n){return Dw(t,r,n,this.factory)}static fromContext(t,{factory:r}){return new ot({_context:at(t),factory:r})}}function kw({dataset:e,graph:t,term:r,value:n,factory:i=ge,_context:s}){return new ot({dataset:e,graph:t,term:r,value:n,factory:i,_context:s})}class td{clownface({...t}={}){return!t.dataset&&typeof this.dataset=="function"&&(t.dataset=this.dataset()),kw({...t,factory:this})}}td.exports=["clownface"];function zw(e){return"_:"+e.value}var Uw=zw;function Hw(e,t){return[...e].map(r=>t(r)).join(`
`)+`
`}var qw=Hw;function Vw(){return""}var Gw=Vw;function Jw(e){return"<"+e.value+">"}var ed=Jw;const Yw=ed,Ww=/["\\\\\n\r]/,Qw=/["\\\\\n\r]/g,Kw={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function Xw(e){return Kw[e]}function Zw(e){return Ww.test(e)?e.replace(Qw,Xw):e}function t0(e){const t=Zw(e.value);return e.datatype.value==="http://www.w3.org/2001/XMLSchema#string"?'"'+t+'"':e.datatype.value==="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"?'"'+t+'"@'+e.language:'"'+t+'"^^'+Yw(e.datatype)}var e0=t0;function r0(e,t){const r=t(e.subject),n=t(e.predicate),i=t(e.object),s=t(e.graph);return`${r} ${n} ${i} ${s?s+" ":""}.`}var n0=r0;function i0(e){return"?"+e.value}var s0=i0;const o0=Uw,a0=qw,l0=Gw,c0=e0,u0=ed,d0=n0,h0=s0;function As(e){if(!e)return null;if(e.termType==="BlankNode")return o0(e);if(e.termType==="DefaultGraph")return l0();if(e.termType==="Literal")return c0(e);if(e.termType==="NamedNode")return u0(e);if(e.termType==="Quad"||e.subject&&e.predicate&&e.object&&e.graph)return d0(e,As);if(e.termType==="Variable")return h0(e);if(e[Symbol.iterator])return a0(e,As);throw new Error(`unknown termType ${e.termType}`)}var p0=As;const Vt=me(p0);class rd{constructor(t){if(this.index=new Map,t)for(const[r,n]of t)this.set(r,n)}get size(){return this.index.size}clear(){this.index.clear()}delete(t){return this.index.delete(Vt(t))}*entries(){for(const[,{term:t,value:r}]of this.index)yield[t,r]}forEach(t,r){for(const n of this.entries())t.call(r,n[1],n[0],this)}get(t){const r=this.index.get(Vt(t));return r&&r.value}has(t){return this.index.has(Vt(t))}*keys(){for(const[,{term:t}]of this.index)yield t}set(t,r){const n=Vt(t);return this.index.set(n,{term:t,value:r}),this}*values(){for(const[,{value:t}]of this.index)yield t}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}let yo=class{termMap(t){return new rd(t)}};yo.exports=["termMap"];function ll(e){try{return Vt(e)}catch{return null}}class f0{constructor(t){if(this.index=new Map,t)for(const r of t)this.add(r)}get size(){return this.index.size}add(t){const r=Vt(t);return this.index.has(r)||this.index.set(r,t),this}clear(){this.index.clear()}delete(t){return t?this.index.delete(ll(t)):!1}entries(){return this.values().entries()}forEach(t,r){return this.values().forEach(t,r)}has(t){return t?this.index.has(ll(t)):!1}values(){return new Set(this.index.values())}keys(){return this.values()}[Symbol.iterator](){return this.values()[Symbol.iterator]()}}let nd=class{termSet(t){return new f0(t)}};nd.exports=["termSet"];class m0{constructor(){this.quadLevel=new Map}add(t,r){this.quadLevel.set(Vt(t),r)}has(t,r){const n=this.quadLevel.get(Vt(t));return n===void 0?!1:n<=r}}function Oi({backward:e,callback:t,dataset:r,filter:n,forward:i,term:s,visited:o=new m0}){const a=(l,d)=>{const p=m=>{for(const y of m){if(o.has(y,d))continue;o.add(y,d);const S={dataset:r,level:d,quad:y};n(S)&&(t(S),i&&a(y.object,d+1),e&&a(y.subject,d+1))}};i&&p(r.match(l)),e&&p(r.match(null,null,l))};a(s,0)}class _0{constructor(t,{backward:r=!1,factory:n,forward:i=!0}){this.backward=r,this.factory=n,this.filter=t,this.forward=i}forEach({term:t,dataset:r},n){Oi({backward:this.backward,callback:n,dataset:r,filter:this.filter,forward:this.forward,term:t})}match({term:t,dataset:r}){const n=this.factory.dataset();return Oi({backward:this.backward,callback:({quad:i})=>n.add(i),dataset:r,filter:this.filter,forward:this.forward,term:t}),n}reduce({term:t,dataset:r},n,i){let s=i;return Oi({backward:this.backward,callback:o=>{s=n(o,s)},dataset:r,filter:this.filter,forward:this.forward,term:t}),s}}class id{traverser(t,{backward:r=!1,forward:n=!0}={}){return new _0(t,{backward:r,factory:this,forward:n})}}id.exports=["traverser"];const y0=new pe([$r,Dy,fo,Xu,td,yo,nd,id]);function re(e){return typeof e=="string"||e instanceof String}const g0="http://www.w3.org/2001/XMLSchema#string";function V(e){if(typeof e=="string")return e;if(!e)return"";if(typeof e.id<"u"&&e.termType!=="Quad")return e.id;let t,r,n,i;switch(e.termType){case"NamedNode":return e.value;case"BlankNode":return`_:${e.value}`;case"Variable":return`?${e.value}`;case"DefaultGraph":return"";case"Literal":return e.language?`"${e.value}"@${e.language}`:`"${e.value}"${e.datatype&&e.datatype.value!==g0?`^^${e.datatype.value}`:""}`;case"Quad":return t=Ri(V(e.subject)),r=Ri(V(e.predicate)),n=Ri(V(e.object)),i=e.graph.termType==="DefaultGraph"?"":` ${V(e.graph)}`,`<<${t} ${r} ${n}${i}>>`;default:throw new Error(`Unexpected termType: ${e.termType}`)}}const b0=/^"(.*".*)(?="[^"]*$)/;function Ri(e){return e.replace(b0,(t,r)=>`"${r.replace(/"/g,'""')}`)}class v0{constructor(t){if(this._size=0,this._graphs=Object.create(null),this._id=0,this._ids=Object.create(null),this._ids["><"]=0,this._entities=Object.create(null),this._quads=new Map,t)for(const r of t)this.add(r)}get size(){let t=this._size;if(t!==null)return t;t=0;const r=this._graphs;let n,i;for(const s in r)for(const o in n=r[s].subjects)for(const a in i=n[o])t+=Object.keys(i[a]).length;return this._size=t,this._size}add(t){let r=V(t.subject),n=V(t.predicate),i=V(t.object);const s=V(t.graph);let o=this._graphs[s];o||(o=this._graphs[s]={subjects:{},predicates:{},objects:{}},Object.freeze(o));const a=this._ids,l=this._entities;return r=a[r]||(a[l[++this._id]=r]=this._id),n=a[n]||(a[l[++this._id]=n]=this._id),i=a[i]||(a[l[++this._id]=i]=this._id),this._addToIndex(o.subjects,r,n,i),this._addToIndex(o.predicates,n,i,r),this._addToIndex(o.objects,i,r,n),this._setQuad(r,n,i,s,t),this._size=null,this}delete(t){let r=V(t.subject),n=V(t.predicate),i=V(t.object);const s=V(t.graph),o=this._ids,a=this._graphs;let l,d,p;if(!(r=o[r])||!(n=o[n])||!(i=o[i])||!(l=a[s])||!(d=l.subjects[r])||!(p=d[n])||!(i in p))return this;this._removeFromIndex(l.subjects,r,n,i),this._removeFromIndex(l.predicates,n,i,r),this._removeFromIndex(l.objects,i,r,n),this._size!==null&&this._size--,this._deleteQuad(r,n,i,s);for(r in l.subjects)return this;return delete a[s],this}has(t){const r=V(t.subject),n=V(t.predicate),i=V(t.object),s=V(t.graph),o=this._graphs[s];if(!o)return!1;const a=this._ids;let l,d,p;return re(r)&&!(l=a[r])||re(n)&&!(d=a[n])||re(i)&&!(p=a[i])?!1:this._countInIndex(o.objects,p,l,d)===1}match(t,r,n,i){return this._createDataset(this._match(t,r,n,i))}[Symbol.iterator](){return this._match()[Symbol.iterator]()}_addToIndex(t,r,n,i){const s=t[r]||(t[r]={}),o=s[n]||(s[n]={}),a=i in o;return a||(o[i]=null),!a}_removeFromIndex(t,r,n,i){const s=t[r],o=s[n];delete o[i];for(const a in o)return;delete s[n];for(const a in s)return;delete t[r]}_findInIndex(t,r,n,i,s,o,a,l,d,p){let m,y,S;r&&((m=t,t={})[r]=m[r]);for(const A in t)if(y=t[A],y){n&&((m=y,y={})[n]=m[n]);for(const R in y)if(S=y[R],S){const j=i?i in S?[i]:[]:Object.keys(S);for(let N=0;N<j.length;N++){const P={[s]:A,[o]:R,[a]:j[N]},I=this._getQuad(P.subject,P.predicate,P.object,l);if(p)p.push(I);else if(d(I))return!0}}}return p}_countInIndex(t,r,n,i){let s=0,o,a,l;r&&((o=t,t={})[r]=o[r]);for(const d in t)if(a=t[d],a){n&&((o=a,a={})[n]=o[n]);for(const p in a)l=a[p],l&&(i?i in l&&s++:s+=Object.keys(l).length)}return s}_getGraphs(t){return re(t)?{[t]:this._graphs[t]}:this._graphs}_match(t,r,n,i){t=t&&V(t),r=r&&V(r),n=n&&V(n),i=i&&V(i);const s=[],o=this._getGraphs(i),a=this._ids;let l,d,p,m;if(re(t)&&!(d=a[t])||re(r)&&!(p=a[r])||re(n)&&!(m=a[n]))return s;for(const y in o)l=o[y],l&&(d?m?this._findInIndex(l.objects,m,d,p,"object","subject","predicate",y,null,s):this._findInIndex(l.subjects,d,p,null,"subject","predicate","object",y,null,s):p?this._findInIndex(l.predicates,p,m,null,"predicate","object","subject",y,null,s):m?this._findInIndex(l.objects,m,null,null,"object","subject","predicate",y,null,s):this._findInIndex(l.subjects,null,null,null,"subject","predicate","object",y,null,s));return s}_getQuad(t,r,n,i){return this._quads.get(this._toId(t,r,n,i))}_setQuad(t,r,n,i,s){this._quads.set(this._toId(t,r,n,i),s)}_deleteQuad(t,r,n,i){this._quads.delete(this._toId(t,r,n,i))}_createDataset(t){return new this.constructor(t)}_toId(t,r,n,i){return`${t}:${r}:${n}:${i}`}}class fr extends v0{addAll(...[t]){return xs(this,t)}deleteMatches(...t){return Qu(this,...t)}equals(...[t]){return Ku(this,t)}forEach(t){Array.from(this).forEach(r=>t(r,this))}filter(t){return new fr([...this].filter(r=>t(r,this)))}map(t){return new fr([...this].map(r=>t(r,this)))}match(...t){return super.match(...t)}merge(...[t]){return xs(new fr([...this]),t)}}const w0=new pe([Ly(()=>fr)],{parent:y0}),x0=new pe([Py],{parent:w0});function T(e,t,r){const n=(o,a,{additionalMixins:l=[]}={})=>r.rdfine().factory.createEntity(o,[...e,...l],{initializer:{...t,...a||{}}}),i=(o,a,{additionalMixins:l=[]}={})=>d=>{const p=d||r.clownface(),m=typeof o=="string"?p.namedNode(o):p.node(o);return r.rdfine().factory.createEntity(m,[...e,...l],{initializer:{...t,...a||{}}})},s=(o,{additionalMixins:a=[]}={})=>l=>r.rdfine().factory.createEntity((l||r.clownface()).blankNode(),[...e,...a],{initializer:{...t,...o||{}}});return(o,a,l)=>typeof o=="object"&&"term"in o?n(o,a,l):typeof o=="object"&&o.termType==="NamedNode"||typeof o=="string"?i(o,a,l):s(o,a)}var er=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Hr=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function O(e){let t=class extends e{};return er([x.literal(),Hr("design:type",Object)],t.prototype,"comment",void 0),er([x.resource({as:[O]}),Hr("design:type",Object)],t.prototype,"isDefinedBy",void 0),er([x.literal(),Hr("design:type",Object)],t.prototype,"label",void 0),er([x.resource({values:"array",as:[O]}),Hr("design:type",Array)],t.prototype,"seeAlso",void 0),t=er([E(mt)],t),t}O.appliesTo=mt.Resource;O.createFactory=e=>T([O],{types:[mt.Resource]},e);var yt=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Pt=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function fe(e){let t=class extends O(e){};return yt([x.resource({values:"array",as:[fe]}),Pt("design:type",Array)],t.prototype,"detail",void 0),yt([x(),Pt("design:type",Object)],t.prototype,"focusNode",void 0),yt([x.literal(),Pt("design:type",Object)],t.prototype,"resultMessage",void 0),yt([x.resource({as:[O]}),Pt("design:type",Object)],t.prototype,"resultPath",void 0),yt([x.resource({implicitTypes:[b.Severity]}),Pt("design:type",Object)],t.prototype,"resultSeverity",void 0),yt([x(),Pt("design:type",Object)],t.prototype,"sourceConstraint",void 0),yt([x.resource({implicitTypes:[b.ConstraintComponent]}),Pt("design:type",Object)],t.prototype,"sourceConstraintComponent",void 0),yt([x.resource({implicitTypes:[b.Shape]}),Pt("design:type",Object)],t.prototype,"sourceShape",void 0),yt([x(),Pt("design:type",Object)],t.prototype,"value",void 0),t=yt([E(b)],t),t}fe.appliesTo=b.AbstractResult;fe.createFactory=e=>T([O,fe],{types:[b.AbstractResult]},e);var $i=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},cl=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function At(e){let t=class extends O(e){};return $i([x.literal(),cl("design:type",Object)],t.prototype,"labelTemplate",void 0),$i([x.resource({implicitTypes:[b.Parameter]}),cl("design:type",Object)],t.prototype,"parameter",void 0),t=$i([E(b)],t),t}At.appliesTo=b.Parameterizable;At.createFactory=e=>T([O,At],{types:[b.Parameterizable]},e);var qr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Ni=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function wn(e){let t=class extends At(e){};return qr([x.resource({implicitTypes:[b.Validator]}),Ni("design:type",Object)],t.prototype,"nodeValidator",void 0),qr([x.resource({implicitTypes:[b.Validator]}),Ni("design:type",Object)],t.prototype,"propertyValidator",void 0),qr([x.resource({implicitTypes:[b.Validator]}),Ni("design:type",Object)],t.prototype,"validator",void 0),t=qr([E(b)],t),t}wn.appliesTo=b.ConstraintComponent;wn.createFactory=e=>T([At,wn],{types:[b.ConstraintComponent]},e);var ul=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},S0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ft(e){let t=class extends O(e){};return ul([x.resource({values:"array",as:[ft]}),S0("design:type",Array)],t.prototype,"subClassOf",void 0),t=ul([E(mt)],t),t}ft.appliesTo=mt.Class;ft.createFactory=e=>T([O,ft],{types:[mt.Class]},e);var dl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},A0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Qt(e){let t=class extends At(e){};return dl([x.resource({as:[ft]}),A0("design:type",Object)],t.prototype,"returnType",void 0),t=dl([E(b)],t),t}Qt.appliesTo=b.Function;Qt.createFactory=e=>T([At,Qt],{types:[b.Function]},e);var hl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},C0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function et(e){let t=class extends O(e){};return hl([x.literal(),C0("design:type",Object)],t.prototype,"jsFunctionName",void 0),t=hl([E(b)],t),t}et.appliesTo=b.JSExecutable;et.createFactory=e=>T([O,et],{types:[b.JSExecutable]},e);var E0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function xn(e){let t=class extends et(e){};return t=E0([E(b)],t),t}xn.appliesTo=b.JSConstraint;xn.createFactory=e=>T([et,xn],{types:[b.JSConstraint]},e);var P0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Sn(e){let t=class extends et(Qt(e)){};return t=P0([E(b)],t),t}Sn.appliesTo=b.JSFunction;Sn.createFactory=e=>T([et,Qt,Sn],{types:[b.JSFunction]},e);var pl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},T0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function An(e){let t=class extends O(e){};return pl([x.literal(),T0("design:type",Object)],t.prototype,"jsLibraryURL",void 0),t=pl([E(b)],t),t}An.appliesTo=b.JSLibrary;An.createFactory=e=>T([O,An],{types:[b.JSLibrary]},e);var fl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},O0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ct(e){let t=class extends O(e){};return fl([x.resource({implicitTypes:[b.Shape]}),O0("design:type",Object)],t.prototype,"condition",void 0),t=fl([E(b)],t),t}Ct.appliesTo=b.Rule;Ct.createFactory=e=>T([O,Ct],{types:[b.Rule]},e);var R0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Cn(e){let t=class extends Ct(et(e)){};return t=R0([E(b)],t),t}Cn.appliesTo=b.JSRule;Cn.createFactory=e=>T([Ct,et,Cn],{types:[b.JSRule]},e);var $0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Kt(e){let t=class extends O(e){};return t=$0([E(b)],t),t}Kt.appliesTo=b.Target;Kt.createFactory=e=>T([O,Kt],{types:[b.Target]},e);var N0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function En(e){let t=class extends Kt(et(e)){};return t=N0([E(b)],t),t}En.appliesTo=b.JSTarget;En.createFactory=e=>T([Kt,et,En],{types:[b.JSTarget]},e);var I0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Xt(e){let t=class extends At(ft(e)){};return t=I0([E(b)],t),t}Xt.appliesTo=b.TargetType;Xt.createFactory=e=>T([At,ft,Xt],{types:[b.TargetType]},e);var L0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Pn(e){let t=class extends Xt(et(e)){};return t=L0([E(b)],t),t}Pn.appliesTo=b.JSTargetType;Pn.createFactory=e=>T([Xt,et,Pn],{types:[b.JSTargetType]},e);var M0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Et(e){let t=class extends O(e){};return t=M0([E(b)],t),t}Et.appliesTo=b.Validator;Et.createFactory=e=>T([O,Et],{types:[b.Validator]},e);var D0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Tn(e){let t=class extends Et(et(e)){};return t=D0([E(b)],t),t}Tn.appliesTo=b.JSValidator;Tn.createFactory=e=>T([Et,et,Tn],{types:[b.JSValidator]},e);const j0={BlankNode:b.BlankNode,BlankNodeOrIRI:b.BlankNodeOrIRI,BlankNodeOrLiteral:b.BlankNodeOrLiteral,IRI:b.IRI,IRIOrLiteral:b.IRIOrLiteral,Literal:b.Literal},F0=j0;var B0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function St(e){let t=class extends e{};return t=B0([E(ye)],t),t}St.appliesTo=ye.Property;St.createFactory=e=>T([St],{types:[ye.Property]},e);var W=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},X=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function pt(e){let t=class extends O(e){};return W([x.resource({values:"list",as:[pt]}),X("design:type",Array)],t.prototype,"and",void 0),W([x.resource({as:[ft]}),X("design:type",Object)],t.prototype,"class",void 0),W([x.literal({type:Boolean}),X("design:type",Object)],t.prototype,"closed",void 0),W([x({values:"list"}),X("design:type",Array)],t.prototype,"in",void 0),W([x.resource({implicitTypes:[b.NodeShape]}),X("design:type",Object)],t.prototype,"node",void 0),W([x(),X("design:type",Object)],t.prototype,"nodeKind",void 0),W([x.resource({values:"list",as:[pt]}),X("design:type",Array)],t.prototype,"or",void 0),W([x.resource({values:"array",implicitTypes:[b.PropertyShape]}),X("design:type",Array)],t.prototype,"property",void 0),W([x.resource({implicitTypes:[b.Rule]}),X("design:type",Object)],t.prototype,"rule",void 0),W([x.resource({implicitTypes:[b.Severity]}),X("design:type",Object)],t.prototype,"severity",void 0),W([x.resource({implicitTypes:[b.SPARQLConstraint]}),X("design:type",Object)],t.prototype,"sparql",void 0),W([x.resource({implicitTypes:[b.Target]}),X("design:type",Object)],t.prototype,"target",void 0),W([x.resource({values:"array",as:[ft]}),X("design:type",Array)],t.prototype,"targetClass",void 0),W([x({values:"array"}),X("design:type",Array)],t.prototype,"targetNode",void 0),W([x.resource({as:[St]}),X("design:type",Object)],t.prototype,"targetObjectsOf",void 0),W([x.resource({as:[St]}),X("design:type",Object)],t.prototype,"targetSubjectsOf",void 0),W([x.resource({values:"list",as:[pt]}),X("design:type",Array)],t.prototype,"xone",void 0),t=W([E(b)],t),t}pt.appliesTo=b.Shape;pt.createFactory=e=>T([O,pt],{types:[b.Shape]},e);var ml=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},k0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function On(e){let t=class extends pt(e){};return ml([x({values:"list"}),k0("design:type",Array)],t.prototype,"ignoredProperties",void 0),t=ml([E(b)],t),t}On.appliesTo=b.NodeShape;On.createFactory=e=>T([pt,On],{types:[b.NodeShape]},e);var z0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Rn(e){let t=class extends ft(e){};return t=z0([E(mt)],t),t}Rn.appliesTo=mt.Datatype;Rn.createFactory=e=>T([ft,Rn],{types:[mt.Datatype]},e);var B=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},z=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ke(e){let t=class extends pt(e){};return B([x.resource({path:b.equals,as:[St]}),z("design:type",Object)],t.prototype,"_equals",void 0),B([x.resource({as:[Rn]}),z("design:type",Object)],t.prototype,"datatype",void 0),B([x(),z("design:type",Object)],t.prototype,"defaultValue",void 0),B([x.literal(),z("design:type",Object)],t.prototype,"description",void 0),B([x.resource({as:[St]}),z("design:type",Object)],t.prototype,"disjoint",void 0),B([x.literal(),z("design:type",Object)],t.prototype,"flags",void 0),B([x.resource({implicitTypes:[b.PropertyGroup]}),z("design:type",Object)],t.prototype,"group",void 0),B([x({values:"array"}),z("design:type",Array)],t.prototype,"hasValue",void 0),B([x.literal({values:"list"}),z("design:type",Array)],t.prototype,"languageIn",void 0),B([x.resource({as:[St]}),z("design:type",Object)],t.prototype,"lessThan",void 0),B([x.resource({as:[St]}),z("design:type",Object)],t.prototype,"lessThanOrEquals",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"maxCount",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"maxExclusive",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"maxInclusive",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"maxLength",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"minCount",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"minExclusive",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"minInclusive",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"minLength",void 0),B([x.literal(),z("design:type",Object)],t.prototype,"name",void 0),B([x.literal({type:Number}),z("design:type",Object)],t.prototype,"order",void 0),B([x.resource({values:["list","single"],as:[O]}),z("design:type",Object)],t.prototype,"path",void 0),B([x.literal(),z("design:type",Object)],t.prototype,"pattern",void 0),B([x.literal({type:Boolean}),z("design:type",Object)],t.prototype,"uniqueLang",void 0),t=B([E(b)],t),t}ke.appliesTo=b.PropertyShape;ke.createFactory=e=>T([pt,ke],{types:[b.PropertyShape]},e);var _l=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},U0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function $n(e){let t=class extends ke(e){};return _l([x.literal({type:Boolean}),U0("design:type",Object)],t.prototype,"optional",void 0),t=_l([E(b)],t),t}$n.appliesTo=b.Parameter;$n.createFactory=e=>T([ke,$n],{types:[b.Parameter]},e);var Ii=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},yl=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Nn(e){let t=class extends O(e){};return Ii([x.literal(),yl("design:type",Object)],t.prototype,"namespace",void 0),Ii([x.literal(),yl("design:type",Object)],t.prototype,"prefix",void 0),t=Ii([E(b)],t),t}Nn.appliesTo=b.PrefixDeclaration;Nn.createFactory=e=>T([O,Nn],{types:[b.PrefixDeclaration]},e);var gl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},H0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function In(e){let t=class extends O(e){};return gl([x.literal({type:Number}),H0("design:type",Object)],t.prototype,"order",void 0),t=gl([E(b)],t),t}In.appliesTo=b.PropertyGroup;In.createFactory=e=>T([O,In],{types:[b.PropertyGroup]},e);var Vr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Li=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ln(e){let t=class extends O(e){};return Vr([x.resource({as:[St]}),Li("design:type",Object)],t.prototype,"annotationProperty",void 0),Vr([x(),Li("design:type",Object)],t.prototype,"annotationValue",void 0),Vr([x.literal(),Li("design:type",Object)],t.prototype,"annotationVarName",void 0),t=Vr([E(b)],t),t}Ln.appliesTo=b.ResultAnnotation;Ln.createFactory=e=>T([O,Ln],{types:[b.ResultAnnotation]},e);var q0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Mn(e){let t=class extends O(e){};return t=q0([E(b)],t),t}Mn.appliesTo=b.Severity;Mn.createFactory=e=>T([O,Mn],{types:[b.Severity]},e);var Mi=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},bl=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Tr(e){let t=class extends e{};return Mi([x(),bl("design:type",Object)],t.prototype,"first",void 0),Mi([x.resource({as:[Tr]}),bl("design:type",Object)],t.prototype,"rest",void 0),t=Mi([E(ye)],t),t}Tr.appliesTo=ye.List;Tr.createFactory=e=>T([Tr],{types:[ye.List]},e);var ne=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Ee=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function sd(e){let t=class extends e{};return ne([x.resource({as:[O]}),Ee("design:type",Object)],t.prototype,"annotatedProperty",void 0),ne([x.resource({as:[O]}),Ee("design:type",Object)],t.prototype,"annotatedSource",void 0),ne([x.resource({as:[O]}),Ee("design:type",Object)],t.prototype,"annotatedTarget",void 0),ne([x.resource({as:[O]}),Ee("design:type",Object)],t.prototype,"deprecated",void 0),ne([x.resource({as:[Tr]}),Ee("design:type",Object)],t.prototype,"members",void 0),ne([x.resource({as:[O]}),Ee("design:type",Object)],t.prototype,"versionInfo",void 0),t=ne([E(Nr)],t),t}sd.appliesTo=mt.Resource;var Pe=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},rr=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Nt(e){let t=class extends sd(O(e)){};return Pe([x.resource({as:[Nt]}),rr("design:type",Object)],t.prototype,"backwardCompatibleWith",void 0),Pe([x.resource({as:[Nt]}),rr("design:type",Object)],t.prototype,"imports",void 0),Pe([x.resource({as:[Nt]}),rr("design:type",Object)],t.prototype,"incompatibleWith",void 0),Pe([x.resource({as:[Nt]}),rr("design:type",Object)],t.prototype,"priorVersion",void 0),Pe([x.resource({as:[Nt]}),rr("design:type",Object)],t.prototype,"versionIRI",void 0),t=Pe([E(Nr)],t),t}Nt.appliesTo=Nr.Ontology;Nt.createFactory=e=>T([O,Nt],{types:[Nr.Ontology]},e);var vl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},V0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function dt(e){let t=class extends O(e){};return vl([x.resource({as:[Nt]}),V0("design:type",Object)],t.prototype,"prefixes",void 0),t=vl([E(b)],t),t}dt.appliesTo=b.SPARQLExecutable;dt.createFactory=e=>T([O,dt],{types:[b.SPARQLExecutable]},e);var wl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},G0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ht(e){let t=class extends dt(e){};return wl([x.literal(),G0("design:type",Object)],t.prototype,"ask",void 0),t=wl([E(b)],t),t}ht.appliesTo=b.SPARQLAskExecutable;ht.createFactory=e=>T([dt,ht],{types:[b.SPARQLAskExecutable]},e);var J0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Dn(e){let t=class extends Et(ht(e)){};return t=J0([E(b)],t),t}Dn.appliesTo=b.SPARQLAskValidator;Dn.createFactory=e=>T([Et,ht,Dn],{types:[b.SPARQLAskValidator]},e);var xl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Y0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function lt(e){let t=class extends dt(e){};return xl([x.literal(),Y0("design:type",Object)],t.prototype,"select",void 0),t=xl([E(b)],t),t}lt.appliesTo=b.SPARQLSelectExecutable;lt.createFactory=e=>T([dt,lt],{types:[b.SPARQLSelectExecutable]},e);var W0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function jn(e){let t=class extends lt(e){};return t=W0([E(b)],t),t}jn.appliesTo=b.SPARQLConstraint;jn.createFactory=e=>T([lt,jn],{types:[b.SPARQLConstraint]},e);var Sl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Q0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ze(e){let t=class extends dt(e){};return Sl([x.literal(),Q0("design:type",Object)],t.prototype,"construct",void 0),t=Sl([E(b)],t),t}ze.appliesTo=b.SPARQLConstructExecutable;ze.createFactory=e=>T([dt,ze],{types:[b.SPARQLConstructExecutable]},e);var K0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Fn(e){let t=class extends lt(ht(Qt(e))){};return t=K0([E(b)],t),t}Fn.appliesTo=b.SPARQLFunction;Fn.createFactory=e=>T([lt,ht,Qt,Fn],{types:[b.SPARQLFunction]},e);var X0=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Bn(e){let t=class extends ze(Ct(e)){};return t=X0([E(b)],t),t}Bn.appliesTo=b.SPARQLRule;Bn.createFactory=e=>T([ze,Ct,Bn],{types:[b.SPARQLRule]},e);var Al=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Z0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function kn(e){let t=class extends Et(lt(e)){};return Al([x.resource({implicitTypes:[b.ResultAnnotation]}),Z0("design:type",Object)],t.prototype,"resultAnnotation",void 0),t=Al([E(b)],t),t}kn.appliesTo=b.SPARQLSelectValidator;kn.createFactory=e=>T([Et,lt,kn],{types:[b.SPARQLSelectValidator]},e);var tx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function zn(e){let t=class extends Kt(lt(ht(e))){};return t=tx([E(b)],t),t}zn.appliesTo=b.SPARQLTarget;zn.createFactory=e=>T([Kt,lt,ht,zn],{types:[b.SPARQLTarget]},e);var ex=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Un(e){let t=class extends Xt(lt(ht(e))){};return t=ex([E(b)],t),t}Un.appliesTo=b.SPARQLTargetType;Un.createFactory=e=>T([Xt,lt,ht,Un],{types:[b.SPARQLTargetType]},e);var Cl=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},rx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Hn(e){let t=class extends dt(e){};return Cl([x.literal(),rx("design:type",Object)],t.prototype,"update",void 0),t=Cl([E(b)],t),t}Hn.appliesTo=b.SPARQLUpdateExecutable;Hn.createFactory=e=>T([dt,Hn],{types:[b.SPARQLUpdateExecutable]},e);var Gr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Di=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function qn(e){let t=class extends Ct(e){};return Gr([x(),Di("design:type",Object)],t.prototype,"object",void 0),Gr([x(),Di("design:type",Object)],t.prototype,"predicate",void 0),Gr([x(),Di("design:type",Object)],t.prototype,"subject",void 0),t=Gr([E(b)],t),t}qn.appliesTo=b.TripleRule;qn.createFactory=e=>T([Ct,qn],{types:[b.TripleRule]},e);var Jr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},ji=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Vn(e){let t=class extends O(e){};return Jr([x.literal({type:Boolean}),ji("design:type",Object)],t.prototype,"conforms",void 0),Jr([x.resource({values:"array",implicitTypes:[b.ValidationResult]}),ji("design:type",Array)],t.prototype,"result",void 0),Jr([x.literal({type:Boolean}),ji("design:type",Object)],t.prototype,"shapesGraphWellFormed",void 0),t=Jr([E(b)],t),t}Vn.appliesTo=b.ValidationReport;Vn.createFactory=e=>T([O,Vn],{types:[b.ValidationReport]},e);var nx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Gn(e){let t=class extends fe(e){};return t=nx([E(b)],t),t}Gn.appliesTo=b.ValidationResult;Gn.createFactory=e=>T([fe,Gn],{types:[b.ValidationResult]},e);const ix=Object.freeze(Object.defineProperty({__proto__:null,AbstractResultMixin:fe,ConstraintComponentMixin:wn,FunctionMixin:Qt,JSConstraintMixin:xn,JSExecutableMixin:et,JSFunctionMixin:Sn,JSLibraryMixin:An,JSRuleMixin:Cn,JSTargetMixin:En,JSTargetTypeMixin:Pn,JSValidatorMixin:Tn,NodeKindEnum:F0,NodeShapeMixin:On,ParameterMixin:$n,ParameterizableMixin:At,PrefixDeclarationMixin:Nn,PropertyGroupMixin:In,PropertyShapeMixin:ke,ResultAnnotationMixin:Ln,RuleMixin:Ct,SPARQLAskExecutableMixin:ht,SPARQLAskValidatorMixin:Dn,SPARQLConstraintMixin:jn,SPARQLConstructExecutableMixin:ze,SPARQLExecutableMixin:dt,SPARQLFunctionMixin:Fn,SPARQLRuleMixin:Bn,SPARQLSelectExecutableMixin:lt,SPARQLSelectValidatorMixin:kn,SPARQLTargetMixin:zn,SPARQLTargetTypeMixin:Un,SPARQLUpdateExecutableMixin:Hn,SeverityMixin:Mn,ShapeMixin:pt,TargetMixin:Kt,TargetTypeMixin:Xt,TripleRuleMixin:qn,ValidationReportMixin:Vn,ValidationResultMixin:Gn,ValidatorMixin:Et},Symbol.toStringTag,{value:"Module"}));class sx{init(){this.rdfine.sh=this._initVocabulary(ix)}}const Fi=new pe([sx],{parent:x0}),ox=Wn({state:{display:"tree",conforms:void 0,results:[]},reducers:{report(e,t){const r=t.results.map(Fi.clownface);return{...e,results:r,conforms:t.conforms,report:t}},display(e,t){return{...e,display:t}}},effects(e){const t=e.getDispatch();async function r(){const{shapesGraph:n,dataGraph:i}=e.getState();if(n.quads&&i.quads){const s=(await Tt(()=>import("./index-DHN7dA8i.js"),__vite__mapDeps([0,1]))).default,o=new s(Fi.dataset(n.quads));t.validation.report(o.validate(Fi.dataset(i.quads)))}}return{"dataGraph/parsed":r,"shapesGraph/parsed":r}}}),ax={rif:"http://www.w3.org/2007/rif#",v:"http://rdf.data-vocabulary.org/#",wdr:"http://www.w3.org/2007/05/powder#",xml:"http://www.w3.org/XML/1998/namespace/"},lx={acl:"http://www.w3.org/ns/auth/acl#",as:"https://www.w3.org/ns/activitystreams#",bibo:"http://purl.org/ontology/bibo/",cc:"http://creativecommons.org/ns#",cert:"http://www.w3.org/ns/auth/cert#",cnt:"http://www.w3.org/2011/content#",constant:"http://qudt.org/vocab/constant/",crm:"http://www.cidoc-crm.org/cidoc-crm/",csvw:"http://www.w3.org/ns/csvw#",ctag:"http://commontag.org/ns#","dash-sparql":"http://datashapes.org/sparql#",dash:"http://datashapes.org/dash#",dbo:"http://dbpedia.org/ontology/",dc11:"http://purl.org/dc/elements/1.1/",dcam:"http://purl.org/dc/dcam/",dcat:"http://www.w3.org/ns/dcat#",dcmitype:"http://purl.org/dc/dcmitype/",dcterms:"http://purl.org/dc/terms/",dig:"http://www.ics.forth.gr/isl/CRMdig/",discipline:"http://qudt.org/vocab/discipline/",doap:"http://usefulinc.com/ns/doap#",dpv:"http://www.w3.org/ns/dpv#",dqv:"http://www.w3.org/ns/dqv#",dtype:"http://www.linkedmodel.org/schema/dtype#",duv:"http://www.w3.org/ns/duv#",earl:"http://www.w3.org/ns/earl#",ebucore:"http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",exif:"http://www.w3.org/2003/12/exif/ns#",foaf:"http://xmlns.com/foaf/0.1/",frbr:"http://purl.org/vocab/frbr/core#",geo:"http://www.opengis.net/ont/geosparql#",geof:"http://www.opengis.net/def/function/geosparql/",geor:"http://www.opengis.net/def/rule/geosparql/",gml:"http://www.opengis.net/ont/gml#",gn:"http://www.geonames.org/ontology#",gr:"http://purl.org/goodrelations/v1#",grddl:"http://www.w3.org/2003/g/data-view#",gs1:"https://gs1.org/voc/",gtfs:"http://vocab.gtfs.org/terms#",http:"http://www.w3.org/2011/http#",hydra:"http://www.w3.org/ns/hydra/core#",ical:"http://www.w3.org/2002/12/cal/icaltzd#",la:"https://linked.art/ns/terms/",ldp:"http://www.w3.org/ns/ldp#",list:"http://www.w3.org/2000/10/swap/list#",locn:"http://www.w3.org/ns/locn#",log:"http://www.w3.org/2000/10/swap/log#",lvont:"http://lexvo.org/ontology#",m4i:"http://w3id.org/nfdi4ing/metadata4ing#",ma:"http://www.w3.org/ns/ma-ont#",mads:"http://www.loc.gov/mads/rdf/v1#",math:"http://www.w3.org/2000/10/swap/math#",oa:"http://www.w3.org/ns/oa#",og:"http://ogp.me/ns#",oidc:"http://www.w3.org/ns/solid/oidc#",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",pim:"http://www.w3.org/ns/pim/space#",prefix:"http://qudt.org/vocab/prefix/",prov:"http://www.w3.org/ns/prov#",qb:"http://purl.org/linked-data/cube#",qkdv:"http://qudt.org/vocab/dimensionvector/",quantitykind:"http://qudt.org/vocab/quantitykind/",qudt:"http://qudt.org/schema/qudt/",rdau:"http://rdaregistry.info/Elements/u/",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfa:"http://www.w3.org/ns/rdfa#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",rev:"http://purl.org/stuff/rev#",rico:"https://www.ica.org/standards/RiC/ontology#",rr:"http://www.w3.org/ns/r2rml#",rss:"http://purl.org/rss/1.0/",schema:"http://schema.org/",sd:"http://www.w3.org/ns/sparql-service-description#",sdmx:"http://purl.org/linked-data/sdmx#",sem:"http://semanticweb.cs.vu.nl/2009/11/sem/",set:"http://www.w3.org/2000/10/swap/set#",sf:"http://www.opengis.net/ont/sf#",sh:"http://www.w3.org/ns/shacl#",shex:"http://www.w3.org/ns/shex#",shsh:"http://www.w3.org/ns/shacl-shacl#",sioc:"http://rdfs.org/sioc/ns#",skos:"http://www.w3.org/2004/02/skos/core#",skosxl:"http://www.w3.org/2008/05/skos-xl#",solid:"http://www.w3.org/ns/solid/terms#",sosa:"http://www.w3.org/ns/sosa/",sou:"http://qudt.org/vocab/sou/",ssn:"http://www.w3.org/ns/ssn/",stat:"http://www.w3.org/ns/posix/stat#",string:"http://www.w3.org/2000/10/swap/string#",test:"http://www.w3.org/2006/03/test-description#",time:"http://www.w3.org/2006/time#",unit:"http://qudt.org/vocab/unit/",vaem:"http://www.linkedmodel.org/schema/vaem#",vann:"http://purl.org/vocab/vann/",vcard:"http://www.w3.org/2006/vcard/ns#",void:"http://rdfs.org/ns/void#",vs:"http://www.w3.org/2003/06/sw-vocab-status/ns#",vso:"http://purl.org/vso/ns#",wdrs:"http://www.w3.org/2007/05/powder-s#",wgs:"http://www.w3.org/2003/01/geo/wgs84_pos#",xhv:"http://www.w3.org/1999/xhtml/vocab#",xkos:"http://rdf-vocabulary.ddialliance.org/xkos#",xsd:"http://www.w3.org/2001/XMLSchema#"},cx={...lx,...ax},od=cx;function ux(e,t={}){const r={...od,...t},n=Array.from(Object.entries(r)).filter(([,i])=>e.startsWith(i));if(n.length){n.sort(([,s],[,o])=>o.length-s.length);const i=n[0];return e.replace(new RegExp(`^${i[1]}`),`${i[0]}:`)}return""}const Cs=new ao([$r,yo]);class dx{evaluateTerm(t,r){switch(t.termType){case"Literal":return this.evaluateLiteral(t,r);case"NamedNode":return this.evaluateNamedNode(t,r);case"BlankNode":return this.evaluateBlankNode(t,r);case"Variable":return this.evaluateVariable(t,r)}return{value:"",prefixes:[]}}}function hx(e){return Symbol.iterator in Object(e)&&typeof e!="string"}class px{constructor({strings:t,values:r,tag:n,strategy:i,defaultOptions:s}){this.strings=t,this.values=r,this._tag=n,this.__strategy=i,this.__defaultOptions=s}toString({env:t=Cs,...r}={}){let n={...this.__defaultOptions(t),env:t};r&&(n={...n,...r});const{value:i,prefixes:s}=this._toPartialString(n);return this.__strategy.getFinalString(i,s,n)}_toPartialString(t){const r=t.env||Cs,n=new Set,i=this.strings.length-1;let s="";for(let o=0;o<i;o++){let a=null;s+=this.strings[o];const l=this.values[o];if(!(typeof l>"u"||l===null)){if(typeof l=="boolean")a=this.__strategy.evaluateLiteral(r.literal(l.toString(),xt.boolean),t);else if(typeof l=="number"){const d=Number.isInteger(l)?xt.integer:xt.decimal;a=this.__strategy.evaluateLiteral(r.literal(l.toString(),d),t)}else if(l instanceof Date)a=this.__strategy.evaluateLiteral(r.literal(l.toISOString(),xt.dateTime),t);else if(typeof l=="object"){if("_toPartialString"in l)a=l._toPartialString(t);else if("subject"in l)a=this.__strategy.evaluateQuad(l,t);else if("match"in l)a=this.__strategy.evaluateDataset(l,t);else if("termType"in l)a=this.__strategy.evaluateTerm(l,t);else if(hx(l)){const[d,...p]=l;a=this._tag`${d}`._toPartialString(t);for(const m of p){const y=this._tag`${m}`._toPartialString(t);a.value+=`
${y.value}`,a.prefixes=[...a.prefixes,...y.prefixes]}}}a===null&&(a={value:l.toString(),prefixes:[]}),s+=a.value,[...a.prefixes].forEach(d=>n.add(d))}}return s+=this.strings[i],{value:s,prefixes:n}}}function ad(e={}){return Object.fromEntries(Object.entries(e).map(([t,r])=>[t,typeof r=="string"?r:r().value]))}function fx(e,t){return[...e].filter(r=>r in t).map(r=>[r,t[r]])}const mx=new RegExp(`["\\\\
\r]`),_x=new RegExp(`["\\\\
\r]`,"g"),yx={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function gx(e){return yx[e]}function bx(e){return mx.test(e)?e.replace(_x,gx):e}function vx(e){return`_:${e.value}`}function wx(e){return`<${e.value}>`}function ld(e){return`"${bx(e.value)}"`}function xx(e){const t=ld(e);return e.language?`${t}@${e.language}`:e.datatype&&!e.datatype.equals(xt.string)?`${t}^^${wx(e.datatype)}`:t}function Sx(e){return vx(e)}function cd(e,{base:t="",prefixes:r={},noPrefixedNames:n}){const i=typeof t=="string"?t:t.value,s=new RegExp("^"+i);let o;return n!==!0&&(o=ux(e.value,ad(r)))?{value:o.replaceAll(/[/#]/g,a=>`\\${a}`),prefixes:[o.split(":")[0]]}:{value:`<${e.value.replace(s,"")}>`,prefixes:[]}}const Ax=new rd([[xt.integer,/^-?[0-9]+$/],[xt.decimal,/^-?[0-9]+\.[0-9]+$/],[xt.boolean,/^(true|false)$/]]);function Cx(e,{base:t="",prefixes:r={}}){if(!e.language&&e.datatype){const n=Ax.get(e.datatype);if(n&&n.test(e.value))return{value:e.value,prefixes:[]};if(!e.datatype.equals(xt.string)){const i=cd(e.datatype,{base:t,prefixes:r});return{value:`${ld(e)}^^${i.value}`,prefixes:i.prefixes}}}return{value:xx(e),prefixes:[]}}function Ex(e,t){return fx(e,t).map(([r,n])=>`@prefix ${r}: <${n}> .`)}class Px extends dx{evaluateBlankNode(t){return{value:Sx(t),prefixes:[]}}evaluateLiteral(t,r){return Cx(t,r)}evaluateNamedNode(t,r){return cd(t,r)}evaluateVariable(){throw new Error("Turtle cannot serialize variables")}evaluateDataset(t,r){const n=[...t.match(null,null,null,r.graph)];return r.cheapCompression?this.__evaluateQuads(n,r):[...n.reduce((s,o)=>{let a=s.get(o.subject.value);return a||(a=new Set,s.set(o.subject.value,a)),a.add(o),s},new Map).values()].reduce((s,o,a)=>{const l=this.__evaluateQuads([...o],r),d=a?`
`:"";return{value:`${s.value}${d}${l.value}`,prefixes:[...s.prefixes,...l.prefixes]}},{value:"",prefixes:[]})}evaluateQuad(t,r,{terminate:n=!0,newLineAfterSubject:i=!1}={}){if(!r.graph.equals(t.graph))return{value:"",prefixes:[]};const s=this.evaluateTerm(t.subject,r),o=this.evaluateTerm(t.predicate,r),a=this.evaluateTerm(t.object,r),l=i?`
   `:" ";return{value:`${s.value}${l}${o.value} ${a.value}${n?" .":""}`,prefixes:[...s.prefixes,...o.prefixes,...a.prefixes]}}getFinalString(t,r,n){const i=n.directives||typeof n.directives>"u";let s=[];if(i){if(s=Ex(r,{...od,...ad(n.prefixes)}),n.base){const o=typeof n.base=="string"?n.base:n.base.value;s.push(`@base <${o}> .`)}s.length>0&&s.push(`
`)}return`${s.join(`
`)}${t}`}__evaluateQuads(t,r){if(t.length===0)return{value:"",prefixes:[]};let n=t;r.cheapCompression||(n=t.sort((s,o)=>s.predicate.value.localeCompare(o.predicate.value)));const i=n.reduce((s,o)=>{if(!s.previous)return{...this.evaluateQuad(o,r,{terminate:!1,newLineAfterSubject:!0}),previous:o};if(s.previous.subject.equals(o.subject)&&s.previous.predicate.equals(o.predicate))return{...this.__appendObject(s,o,r),previous:o};if(s.previous.subject.equals(o.subject))return{...this.__appendPredicateObject(s,o,r),previous:o};const a=this.evaluateQuad(o,r,{terminate:!1,newLineAfterSubject:!0});return{value:s.value+` .
`+a.value,prefixes:[...s.prefixes,...a.prefixes],previous:o}},{value:"",prefixes:[]});return{...i,value:i.value+" ."}}__appendPredicateObject(t,r,n){const i=this.evaluateTerm(r.predicate,n),s=this.evaluateTerm(r.object,n);return{value:`${t.value} ;
   ${i.value} ${s.value}`,prefixes:[...t.prefixes,...i.prefixes,...s.prefixes]}}__appendObject(t,r,n){const i=this.evaluateTerm(r.object,n);return{value:`${t.value} ,
      ${i.value}`,prefixes:[...t.prefixes,...i.prefixes]}}}const ud=(e,...t)=>new px({strings:e,values:t,tag:ud,strategy:new Px,defaultOptions:(r=Cs)=>({directives:!0,graph:r.defaultGraph(),cheapCompression:!1})});async function El(e,t,r,n){return n?n.dataset(e).serialize({format:t,prefixes:r}):ud`${e}`.toString()}async function Tx(e,t,{instanceUrl:r="https://shacl-playground.zazuko.com",dataGraphFormat:n="text/turtle",shapesGraphFormat:i="text/turtle",prefixes:s=[],dataGraphPrefixes:o=[],dataGraphCustomPrefixes:a,shapesGraphPrefixes:l=[],shapesGraphCustomPrefixes:d,env:p}={}){const m=new URL(r),y=new URLSearchParams([["shapesGraph",await El(e,n,[...s,...o],p)],["dataGraph",await El(t,i,[...s,...l],p)],["shapesGraphFormat",i],["dataGraphFormat",n]]);return a&&y.set("dataGraphCustomPrefixes",JSON.stringify(a)),d&&y.set("shapesGraphCustomPrefixes",JSON.stringify(d)),m.hash=y.toString(),m.toString()}const dd=new URL(window.location.href),Ox=Object.fromEntries([...new URLSearchParams(dd.hash.substr(1)).entries()]),Rx=Wn({state:{page:3,shaperone:new URL("https://forms.hypermedia.app/playground/").toString(),sharingLink:dd.toString(),sharingParams:Ox},reducers:{switchPage(e,t){return{...e,page:t}},setShaperoneParam(e,{key:t,value:r}){const n=new URL(e.shaperone),i=new URLSearchParams(n.hash.substr(1));return i.set(t,r),n.hash=i.toString(),{...e,shaperone:n.toString()}},setSharingLink(e,t){return{...e,sharingLink:t}},setSharingParam(e,{key:t,value:r}){const{shapesGraph:n,dataGraph:i,...s}=e.sharingParams||{};return{...e,sharingParams:{shapesGraph:n,dataGraph:i,...s,[t]:r}}}},effects(e){const t=e.getDispatch();return{switchPage(r){t.playground.setSharingParam({key:"page",value:r})},async setSharingParam(){const{shapesGraph:r,dataGraph:n,...i}=e.getState().playground.sharingParams,s=await Tx(r,n,{...i,instanceUrl:window.location.href});t.playground.setSharingLink(s)},"dataGraph/parsed":function({serialized:r}){const{format:n}=e.getState().dataGraph;t.playground.setShaperoneParam({key:"resource",value:r}),t.playground.setShaperoneParam({key:"resourceFormat",value:n}),t.playground.setSharingParam({key:"dataGraph",value:r}),t.playground.setSharingParam({key:"dataGraphFormat",value:n})},"shapesGraph/parsed":function({serialized:r}){const{format:n}=e.getState().shapesGraph;t.playground.setShaperoneParam({key:"shapes",value:r}),t.playground.setShaperoneParam({key:"shapesFormat",value:n}),t.playground.setSharingParam({key:"shapesGraph",value:r}),t.playground.setSharingParam({key:"shapesGraphFormat",value:n})},"dataGraph/setCustomPrefix":function(){t.playground.setSharingParam({key:"dataGraphCustomPrefixes",value:e.getState().dataGraph.customPrefixes})},"shapesGraph/setCustomPrefix":function(){t.playground.setSharingParam({key:"shapesGraphCustomPrefixes",value:e.getState().shapesGraph.customPrefixes})},restoreState(){const r=new URL(document.location.toString()),n=new URLSearchParams(r.hash.substr(1));function i(y){return n.get(y)||r.searchParams.get(y)}const s=i("page"),o=i("shapesGraph"),a=i("shapesGraphFormat"),l=i("shapesGraphCustomPrefixes"),d=i("dataGraph"),p=i("dataGraphFormat"),m=i("dataGraphCustomPrefixes");s&&t.playground.switchPage(Number.parseInt(s,10)),o&&t.shapesGraph.setGraph(o),a&&t.shapesGraph.changeFormat(a),l&&t.shapesGraph.replaceCustomPrefixes(JSON.parse(l)),d&&t.dataGraph.setGraph(d),p&&t.dataGraph.changeFormat(p),m&&t.dataGraph.replaceCustomPrefixes(JSON.parse(m)),[...r.searchParams.keys()].forEach(y=>r.searchParams.delete(y)),r.hash="",window.history.replaceState(null,"",r.toString())}}}}),$x=Object.freeze(Object.defineProperty({__proto__:null,dataGraph:X_,playground:Rx,shapesGraph:Q_,validation:ox},Symbol.toStringTag,{value:"Module"})),Bi=ch(lh({models:$x}),{persist(e){const{dataGraph:{quads:t,...r},shapesGraph:{quads:n,...i},validation:s,...o}=e;return{shapesGraph:i,dataGraph:r,...o}}}),Yr={SHAPES:0,DATA:1,REPORT:2,ABOUT:3},Ut={DataGraph:"Data Graph",ShapesGraph:"Shapes Graph",Report:"Validation Report"};class Nx extends sh(Bi,or){static get styles(){return rt`
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
    `}static get properties(){return{page:{type:Number},reportClass:{type:String},reportIcon:{type:String},sharingLink:{type:String},sharingLinkShortened:{type:Boolean},sharingDialogOpen:{type:Boolean},__wideDisplay:{type:Boolean,reflect:!0,attribute:"wide"}}}constructor(){super(),this.reportIcon="vaadin:bug-o"}connectedCallback(){super.connectedCallback(),Tt(()=>import("./vaadin-drawer-toggle-Dm-j_s5o.js"),__vite__mapDeps([2,3])),Tt(()=>import("./iron-icon-BrafWa4-.js").then(t=>t.i),[]),Tt(()=>import("./vaadin-dialog-CN4Bo4jI.js"),__vite__mapDeps([4,5])),Tt(()=>import("./vaadin-icons-BVbHMYI2.js"),__vite__mapDeps([6,7])),Tt(()=>import("./graph-editor-BRS5OkvR.js"),__vite__mapDeps([8,9,10,3,5])),Tt(()=>import("./index-B1ww7QDV.js"),[]),Bi.dispatch.playground.restoreState()}render(){return Ye`
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
          <vaadin-tab theme="icon-on-top" title="${Ut.ShapesGraph}">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>${Ut.ShapesGraph}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top" title="${Ut.DataGraph}">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>${Ut.DataGraph}</span>
          </vaadin-tab>
          <vaadin-tab
            class="report ${this.reportClass}"
            theme="icon-on-top"
            title="${Ut.Report}"
          >
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>${Ut.Report}</span>
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
    `}__renderWide(){Tt(()=>import("./validation-report-BKzM_FtG.js"),__vite__mapDeps([11,10,3]));const t=this.page===Yr.ABOUT?1:0;return Ye`
      <iron-pages selected="${t}">
        <vaadin-split-layout id="top-split" orientation="vertical">
          <vaadin-split-layout style="height: 60%">
            <graph-editor
              style="width: 50%"
              model="shapesGraph"
              @focus="${()=>this.__pageSelected(Yr.SHAPES)}"
            >
              <h2 slot="header">${Ut.ShapesGraph}</h2>
            </graph-editor>
            <graph-editor
              style="width: 50%"
              model="dataGraph"
              @focus="${()=>this.__pageSelected(Yr.DATA)}"
            >
              <h2 slot="header">${Ut.DataGraph}</h2>
            </graph-editor>
          </vaadin-split-layout>
          <validation-report
            style="height: 40%"
            @click="${()=>this.__pageSelected(Yr.REPORT)}"
          ></validation-report>
        </vaadin-split-layout>
        <section>${this.__renderAbout()}</section>
      </iron-pages>
    `}__renderNarrow(){return Ye`
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
    `}__renderAbout(){return Ye`
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
    `}__renderSharingDialog(t){return r=>{var i;let n;r.firstElementChild?n=r.firstElementChild:(n=document.createElement("div"),r.appendChild(n)),Xl(Ye`
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
        `,n),(i=n.querySelector("vaadin-text-field"))==null||i.focus()}}mapState(t){let r="";return t.validation.conforms?r="valid":t.validation.conforms===!1&&(r="invalid"),{reportClass:r,reportIcon:t.validation.conforms?"vaadin:bug-o":"vaadin:bug",page:t.playground.page,shaperoneLink:t.playground.shaperone,sharingLink:t.playground.sharingLink,sharingLinkShortened:!1}}__pageSelected(t){Bi.dispatch.playground.switchPage(t)}__reset(){localStorage.removeItem(document.location.hostname),document.location.reload()}__loadPage(t){t.detail.item.id==="validation-report"&&Tt(()=>import("./validation-report-BKzM_FtG.js"),__vite__mapDeps([11,10,3]))}__openPlayground(){window.open(this.shaperoneLink,"shaperone")}__openCode(){window.open("https://github.com/zazuko/shacl-playground","_blank")}__openSharingDialog(){this.sharingDialogOpen=!0}async __shortenSharingLink(){this.sharingLinkShortened||(this.sharingLinkShortened=!0,this.sharingLink=await z_.shorten(this.sharingLink))}__setWideDisplay(t){this.__wideDisplay=t.detail.value}}customElements.define("shacl-playground",Nx);export{tg as $,gn as A,Ca as B,Hs as C,wf as D,qe as E,Lt as F,dx as G,xx as H,wx as I,vx as J,Kc as K,px as L,Cs as M,Qf as N,Zf as O,Bt as P,ao as Q,Kf as R,Vs as S,dh as T,fo as U,$r as V,v0 as W,w as X,f0 as Y,xt as Z,Tt as _,qx as a,ye as a0,rd as a1,Lx as a2,me as a3,Jd as a4,$l as a5,Ht as a6,Vt as a7,Fi as a8,ux as a9,Bx as aa,je as ab,$d as ac,sl as ad,Mx as ae,My as af,Td as ag,Dy as ah,tm as b,ri as c,wt as d,oS as e,He as f,rm as g,_e as h,rt as i,K as j,Zc as k,em as l,Nf as m,Gc as n,kc as o,od as p,sh as q,jt as r,or as s,mf as t,Bi as u,Xl as v,Eh as w,Ye as x,Tf as y,gc as z};
