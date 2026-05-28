const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DS6glaew.js","assets/index-CVCAfa6O.js","assets/vaadin-drawer-toggle-B_E4Car6.js","assets/dom-utils-BhgefGZl.js","assets/vaadin-dialog-C3NXfiV7.js","assets/templates-Cqr9MHO1.js","assets/vaadin-icons-ZtjGuumd.js","assets/iron-icon-CiPI8Ugs.js","assets/graph-editor-D-aDy86A.js","assets/rdf-editor-BmxbOtQP.js","assets/vaadin-form-item-k_RJ7zNM.js","assets/validation-report-Bbvt-I-J.js"])))=>i.map(i=>d[i]);
const Fd=Object.freeze(Object.defineProperty({__proto__:null,get _void(){return Yw},get acl(){return bg},get as(){return wg},get bibo(){return Ag},get cc(){return Eg},get cert(){return Pg},get cnt(){return $g},get constant(){return Rg},get crm(){return Ig},get csvw(){return Mg},get ctag(){return jg},get cur(){return Bg},get dash(){return Hg},get dashSparql(){return zg},get dbo(){return Vg},get dc11(){return Jg},get dcam(){return Yg},get dcat(){return Kg},get dcmitype(){return Zg},get dcterms(){return eb},get default(){return fd},get dig(){return ib},get discipline(){return sb},get doap(){return ab},get dprod(){return cb},get dpv(){return db},get dqv(){return pb},get dtype(){return mb},get duv(){return yb},get earl(){return bb},get ebucore(){return wb},get exif(){return Ab},get foaf(){return Eb},get frbr(){return Pb},get geo(){return $b},get geof(){return Rb},get geor(){return Ib},get gml(){return Mb},get gn(){return jb},get gr(){return Bb},get grddl(){return zb},get gs1(){return Hb},get gtfs(){return Vb},get http(){return Jb},get hydra(){return Yb},get ical(){return Kb},get la(){return Zb},get ldp(){return ev},get list(){return iv},get locn(){return sv},get log(){return av},get lvont(){return cv},get m4i(){return dv},get ma(){return pv},get mads(){return mv},get math(){return yv},get oa(){return bv},get og(){return wv},get oidc(){return Av},get org(){return Ev},get owl(){return Lr},get pim(){return Tv},get prefix(){return Ov},get prov(){return Nv},get qb(){return Lv},get qkdv(){return Dv},get quantitykind(){return kv},get qudt(){return Fv},get rdau(){return Uv},get rdf(){return fe},get rdfa(){return Vv},get rdfs(){return gt},get rev(){return Wv},get rico(){return Qv},get rif(){return u0},get rr(){return Xv},get rss(){return tw},get schema(){return rw},get sd(){return nw},get sdmx(){return ow},get sem(){return lw},get set(){return uw},get sf(){return hw},get sh(){return b},get shex(){return mw},get shsh(){return yw},get sioc(){return bw},get skos(){return ww},get skosxl(){return Aw},get solid(){return Ew},get sosa(){return Pw},get sou(){return $w},get ssn(){return Rw},get stat(){return Iw},get string(){return Mw},get test(){return jw},get time(){return Bw},get unit(){return zw},get v(){return h0},get vaem(){return Hw},get vann(){return Vw},get vcard(){return Jw},get vs(){return Kw},get vso(){return Zw},get wdr(){return f0},get wdrs(){return e0},get wgs(){return i0},get xhv(){return s0},get xkos(){return a0},get xml(){return _0},get xsd(){return At}},Symbol.toStringTag,{value:"Module"}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function $r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function iA(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var r=function i(){var n=!1;try{n=this instanceof i}catch{}return n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}),r}var _n={exports:{}},Fo;function zd(){if(Fo)return _n.exports;Fo=1;var e=_n.exports={},t,r;function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?t=setTimeout:t=i}catch{t=i}try{typeof clearTimeout=="function"?r=clearTimeout:r=n}catch{r=n}})();function s(P){if(t===setTimeout)return setTimeout(P,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(P,0);try{return t(P,0)}catch{try{return t.call(null,P,0)}catch{return t.call(this,P,0)}}}function o(P){if(r===clearTimeout)return clearTimeout(P);if((r===n||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(P);try{return r(P)}catch{try{return r.call(null,P)}catch{return r.call(this,P)}}}var a=[],l=!1,u,h=-1;function m(){!l||!u||(l=!1,u.length?a=u.concat(a):h=-1,a.length&&y())}function y(){if(!l){var P=s(m);l=!0;for(var I=a.length;I;){for(u=a,a=[];++h<I;)u&&u[h].run();h=-1,I=a.length}u=null,l=!1,o(P)}}e.nextTick=function(P){var I=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)I[R-1]=arguments[R];a.push(new v(P,I)),a.length===1&&!l&&s(y)};function v(P,I){this.fun=P,this.array=I}v.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={};function E(){}return e.on=E,e.addListener=E,e.once=E,e.off=E,e.removeListener=E,e.removeAllListeners=E,e.emit=E,e.prependListener=E,e.prependOnceListener=E,e.listeners=function(P){return[]},e.binding=function(P){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(P){throw new Error("process.chdir is not supported")},e.umask=function(){return 0},_n.exports}var Ud=zd();const Hd=$r(Ud);var yn={},qe={},zo;function qd(){if(zo)return qe;zo=1,qe.byteLength=a,qe.toByteArray=u,qe.fromByteArray=y;for(var e=[],t=[],r=typeof Uint8Array<"u"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,s=i.length;n<s;++n)e[n]=i[n],t[i.charCodeAt(n)]=n;t[45]=62,t[95]=63;function o(v){var E=v.length;if(E%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var P=v.indexOf("=");P===-1&&(P=E);var I=P===E?0:4-P%4;return[P,I]}function a(v){var E=o(v),P=E[0],I=E[1];return(P+I)*3/4-I}function l(v,E,P){return(E+P)*3/4-P}function u(v){var E,P=o(v),I=P[0],R=P[1],$=new r(l(v,I,R)),M=0,S=R>0?I-4:I,w;for(w=0;w<S;w+=4)E=t[v.charCodeAt(w)]<<18|t[v.charCodeAt(w+1)]<<12|t[v.charCodeAt(w+2)]<<6|t[v.charCodeAt(w+3)],$[M++]=E>>16&255,$[M++]=E>>8&255,$[M++]=E&255;return R===2&&(E=t[v.charCodeAt(w)]<<2|t[v.charCodeAt(w+1)]>>4,$[M++]=E&255),R===1&&(E=t[v.charCodeAt(w)]<<10|t[v.charCodeAt(w+1)]<<4|t[v.charCodeAt(w+2)]>>2,$[M++]=E>>8&255,$[M++]=E&255),$}function h(v){return e[v>>18&63]+e[v>>12&63]+e[v>>6&63]+e[v&63]}function m(v,E,P){for(var I,R=[],$=E;$<P;$+=3)I=(v[$]<<16&16711680)+(v[$+1]<<8&65280)+(v[$+2]&255),R.push(h(I));return R.join("")}function y(v){for(var E,P=v.length,I=P%3,R=[],$=16383,M=0,S=P-I;M<S;M+=$)R.push(m(v,M,M+$>S?S:M+$));return I===1?(E=v[P-1],R.push(e[E>>2]+e[E<<4&63]+"==")):I===2&&(E=(v[P-2]<<8)+v[P-1],R.push(e[E>>10]+e[E>>4&63]+e[E<<2&63]+"=")),R.join("")}return qe}var kr={};var Uo;function Vd(){return Uo||(Uo=1,kr.read=function(e,t,r,i,n){var s,o,a=n*8-i-1,l=(1<<a)-1,u=l>>1,h=-7,m=r?n-1:0,y=r?-1:1,v=e[t+m];for(m+=y,s=v&(1<<-h)-1,v>>=-h,h+=a;h>0;s=s*256+e[t+m],m+=y,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=o*256+e[t+m],m+=y,h-=8);if(s===0)s=1-u;else{if(s===l)return o?NaN:(v?-1:1)*(1/0);o=o+Math.pow(2,i),s=s-u}return(v?-1:1)*o*Math.pow(2,s-i)},kr.write=function(e,t,r,i,n,s){var o,a,l,u=s*8-n-1,h=(1<<u)-1,m=h>>1,y=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=i?0:s-1,E=i?1:-1,P=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+m>=1?t+=y/l:t+=y*Math.pow(2,1-m),t*l>=2&&(o++,l/=2),o+m>=h?(a=0,o=h):o+m>=1?(a=(t*l-1)*Math.pow(2,n),o=o+m):(a=t*Math.pow(2,m-1)*Math.pow(2,n),o=0));n>=8;e[r+v]=a&255,v+=E,a/=256,n-=8);for(o=o<<n|a,u+=n;u>0;e[r+v]=o&255,v+=E,o/=256,u-=8);e[r+v-E]|=P*128}),kr}var Ho;function Gd(){return Ho||(Ho=1,(function(e){const t=qd(),r=Vd(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=$,e.INSPECT_MAX_BYTES=50;const n=2147483647;e.kMaxLength=n,a.TYPED_ARRAY_SUPPORT=s(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{const p=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(p,c),p.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function o(p){if(p>n)throw new RangeError('The value "'+p+'" is invalid for option "size"');const c=new Uint8Array(p);return Object.setPrototypeOf(c,a.prototype),c}function a(p,c,d){if(typeof p=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(p)}return l(p,c,d)}a.poolSize=8192;function l(p,c,d){if(typeof p=="string")return y(p,c);if(ArrayBuffer.isView(p))return E(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(bt(p,ArrayBuffer)||p&&bt(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(bt(p,SharedArrayBuffer)||p&&bt(p.buffer,SharedArrayBuffer)))return P(p,c,d);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const f=p.valueOf&&p.valueOf();if(f!=null&&f!==p)return a.from(f,c,d);const _=I(p);if(_)return _;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return a.from(p[Symbol.toPrimitive]("string"),c,d);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}a.from=function(p,c,d){return l(p,c,d)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function u(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function h(p,c,d){return u(p),p<=0?o(p):c!==void 0?typeof d=="string"?o(p).fill(c,d):o(p).fill(c):o(p)}a.alloc=function(p,c,d){return h(p,c,d)};function m(p){return u(p),o(p<0?0:R(p)|0)}a.allocUnsafe=function(p){return m(p)},a.allocUnsafeSlow=function(p){return m(p)};function y(p,c){if((typeof c!="string"||c==="")&&(c="utf8"),!a.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const d=M(p,c)|0;let f=o(d);const _=f.write(p,c);return _!==d&&(f=f.slice(0,_)),f}function v(p){const c=p.length<0?0:R(p.length)|0,d=o(c);for(let f=0;f<c;f+=1)d[f]=p[f]&255;return d}function E(p){if(bt(p,Uint8Array)){const c=new Uint8Array(p);return P(c.buffer,c.byteOffset,c.byteLength)}return v(p)}function P(p,c,d){if(c<0||p.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<c+(d||0))throw new RangeError('"length" is outside of buffer bounds');let f;return c===void 0&&d===void 0?f=new Uint8Array(p):d===void 0?f=new Uint8Array(p,c):f=new Uint8Array(p,c,d),Object.setPrototypeOf(f,a.prototype),f}function I(p){if(a.isBuffer(p)){const c=R(p.length)|0,d=o(c);return d.length===0||p.copy(d,0,0,c),d}if(p.length!==void 0)return typeof p.length!="number"||mn(p.length)?o(0):v(p);if(p.type==="Buffer"&&Array.isArray(p.data))return v(p.data)}function R(p){if(p>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return p|0}function $(p){return+p!=p&&(p=0),a.alloc(+p)}a.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==a.prototype},a.compare=function(c,d){if(bt(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),bt(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(c)||!a.isBuffer(d))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===d)return 0;let f=c.length,_=d.length;for(let g=0,x=Math.min(f,_);g<x;++g)if(c[g]!==d[g]){f=c[g],_=d[g];break}return f<_?-1:_<f?1:0},a.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(c,d){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return a.alloc(0);let f;if(d===void 0)for(d=0,f=0;f<c.length;++f)d+=c[f].length;const _=a.allocUnsafe(d);let g=0;for(f=0;f<c.length;++f){let x=c[f];if(bt(x,Uint8Array))g+x.length>_.length?(a.isBuffer(x)||(x=a.from(x)),x.copy(_,g)):Uint8Array.prototype.set.call(_,x,g);else if(a.isBuffer(x))x.copy(_,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=x.length}return _};function M(p,c){if(a.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||bt(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);const d=p.length,f=arguments.length>2&&arguments[2]===!0;if(!f&&d===0)return 0;let _=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return d;case"utf8":case"utf-8":return fn(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return d*2;case"hex":return d>>>1;case"base64":return Bo(p).length;default:if(_)return f?-1:fn(p).length;c=(""+c).toLowerCase(),_=!0}}a.byteLength=M;function S(p,c,d){let f=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((d===void 0||d>this.length)&&(d=this.length),d<=0)||(d>>>=0,c>>>=0,d<=c))return"";for(p||(p="utf8");;)switch(p){case"hex":return Rd(this,c,d);case"utf8":case"utf-8":return Dr(this,c,d);case"ascii":return $d(this,c,d);case"latin1":case"binary":return Od(this,c,d);case"base64":return Mr(this,c,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nd(this,c,d);default:if(f)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),f=!0}}a.prototype._isBuffer=!0;function w(p,c,d){const f=p[c];p[c]=p[d],p[d]=f}a.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let d=0;d<c;d+=2)w(this,d,d+1);return this},a.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let d=0;d<c;d+=4)w(this,d,d+3),w(this,d+1,d+2);return this},a.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let d=0;d<c;d+=8)w(this,d,d+7),w(this,d+1,d+6),w(this,d+2,d+5),w(this,d+3,d+4);return this},a.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?Dr(this,0,c):S.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(c){if(!a.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:a.compare(this,c)===0},a.prototype.inspect=function(){let c="";const d=e.INSPECT_MAX_BYTES;return c=this.toString("hex",0,d).replace(/(.{2})/g,"$1 ").trim(),this.length>d&&(c+=" ... "),"<Buffer "+c+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(c,d,f,_,g){if(bt(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),!a.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(d===void 0&&(d=0),f===void 0&&(f=c?c.length:0),_===void 0&&(_=0),g===void 0&&(g=this.length),d<0||f>c.length||_<0||g>this.length)throw new RangeError("out of range index");if(_>=g&&d>=f)return 0;if(_>=g)return-1;if(d>=f)return 1;if(d>>>=0,f>>>=0,_>>>=0,g>>>=0,this===c)return 0;let x=g-_,z=f-d;const W=Math.min(x,z),G=this.slice(_,g),Y=c.slice(d,f);for(let q=0;q<W;++q)if(G[q]!==Y[q]){x=G[q],z=Y[q];break}return x<z?-1:z<x?1:0};function T(p,c,d,f,_){if(p.length===0)return-1;if(typeof d=="string"?(f=d,d=0):d>2147483647?d=2147483647:d<-2147483648&&(d=-2147483648),d=+d,mn(d)&&(d=_?0:p.length-1),d<0&&(d=p.length+d),d>=p.length){if(_)return-1;d=p.length-1}else if(d<0)if(_)d=0;else return-1;if(typeof c=="string"&&(c=a.from(c,f)),a.isBuffer(c))return c.length===0?-1:O(p,c,d,f,_);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?_?Uint8Array.prototype.indexOf.call(p,c,d):Uint8Array.prototype.lastIndexOf.call(p,c,d):O(p,[c],d,f,_);throw new TypeError("val must be string, number or Buffer")}function O(p,c,d,f,_){let g=1,x=p.length,z=c.length;if(f!==void 0&&(f=String(f).toLowerCase(),f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le")){if(p.length<2||c.length<2)return-1;g=2,x/=2,z/=2,d/=2}function W(Y,q){return g===1?Y[q]:Y.readUInt16BE(q*g)}let G;if(_){let Y=-1;for(G=d;G<x;G++)if(W(p,G)===W(c,Y===-1?0:G-Y)){if(Y===-1&&(Y=G),G-Y+1===z)return Y*g}else Y!==-1&&(G-=G-Y),Y=-1}else for(d+z>x&&(d=x-z),G=d;G>=0;G--){let Y=!0;for(let q=0;q<z;q++)if(W(p,G+q)!==W(c,q)){Y=!1;break}if(Y)return G}return-1}a.prototype.includes=function(c,d,f){return this.indexOf(c,d,f)!==-1},a.prototype.indexOf=function(c,d,f){return T(this,c,d,f,!0)},a.prototype.lastIndexOf=function(c,d,f){return T(this,c,d,f,!1)};function L(p,c,d,f){d=Number(d)||0;const _=p.length-d;f?(f=Number(f),f>_&&(f=_)):f=_;const g=c.length;f>g/2&&(f=g/2);let x;for(x=0;x<f;++x){const z=parseInt(c.substr(x*2,2),16);if(mn(z))return x;p[d+x]=z}return x}function j(p,c,d,f){return jr(fn(c,p.length-d),p,d,f)}function F(p,c,d,f){return jr(Dd(c),p,d,f)}function st(p,c,d,f){return jr(Bo(c),p,d,f)}function Kt(p,c,d,f){return jr(jd(c,p.length-d),p,d,f)}a.prototype.write=function(c,d,f,_){if(d===void 0)_="utf8",f=this.length,d=0;else if(f===void 0&&typeof d=="string")_=d,f=this.length,d=0;else if(isFinite(d))d=d>>>0,isFinite(f)?(f=f>>>0,_===void 0&&(_="utf8")):(_=f,f=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const g=this.length-d;if((f===void 0||f>g)&&(f=g),c.length>0&&(f<0||d<0)||d>this.length)throw new RangeError("Attempt to write outside buffer bounds");_||(_="utf8");let x=!1;for(;;)switch(_){case"hex":return L(this,c,d,f);case"utf8":case"utf-8":return j(this,c,d,f);case"ascii":case"latin1":case"binary":return F(this,c,d,f);case"base64":return st(this,c,d,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Kt(this,c,d,f);default:if(x)throw new TypeError("Unknown encoding: "+_);_=(""+_).toLowerCase(),x=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Mr(p,c,d){return c===0&&d===p.length?t.fromByteArray(p):t.fromByteArray(p.slice(c,d))}function Dr(p,c,d){d=Math.min(p.length,d);const f=[];let _=c;for(;_<d;){const g=p[_];let x=null,z=g>239?4:g>223?3:g>191?2:1;if(_+z<=d){let W,G,Y,q;switch(z){case 1:g<128&&(x=g);break;case 2:W=p[_+1],(W&192)===128&&(q=(g&31)<<6|W&63,q>127&&(x=q));break;case 3:W=p[_+1],G=p[_+2],(W&192)===128&&(G&192)===128&&(q=(g&15)<<12|(W&63)<<6|G&63,q>2047&&(q<55296||q>57343)&&(x=q));break;case 4:W=p[_+1],G=p[_+2],Y=p[_+3],(W&192)===128&&(G&192)===128&&(Y&192)===128&&(q=(g&15)<<18|(W&63)<<12|(G&63)<<6|Y&63,q>65535&&q<1114112&&(x=q))}}x===null?(x=65533,z=1):x>65535&&(x-=65536,f.push(x>>>10&1023|55296),x=56320|x&1023),f.push(x),_+=z}return Td(f)}const Ro=4096;function Td(p){const c=p.length;if(c<=Ro)return String.fromCharCode.apply(String,p);let d="",f=0;for(;f<c;)d+=String.fromCharCode.apply(String,p.slice(f,f+=Ro));return d}function $d(p,c,d){let f="";d=Math.min(p.length,d);for(let _=c;_<d;++_)f+=String.fromCharCode(p[_]&127);return f}function Od(p,c,d){let f="";d=Math.min(p.length,d);for(let _=c;_<d;++_)f+=String.fromCharCode(p[_]);return f}function Rd(p,c,d){const f=p.length;(!c||c<0)&&(c=0),(!d||d<0||d>f)&&(d=f);let _="";for(let g=c;g<d;++g)_+=kd[p[g]];return _}function Nd(p,c,d){const f=p.slice(c,d);let _="";for(let g=0;g<f.length-1;g+=2)_+=String.fromCharCode(f[g]+f[g+1]*256);return _}a.prototype.slice=function(c,d){const f=this.length;c=~~c,d=d===void 0?f:~~d,c<0?(c+=f,c<0&&(c=0)):c>f&&(c=f),d<0?(d+=f,d<0&&(d=0)):d>f&&(d=f),d<c&&(d=c);const _=this.subarray(c,d);return Object.setPrototypeOf(_,a.prototype),_};function K(p,c,d){if(p%1!==0||p<0)throw new RangeError("offset is not uint");if(p+c>d)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=this[c],g=1,x=0;for(;++x<d&&(g*=256);)_+=this[c+x]*g;return _},a.prototype.readUintBE=a.prototype.readUIntBE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=this[c+--d],g=1;for(;d>0&&(g*=256);)_+=this[c+--d]*g;return _},a.prototype.readUint8=a.prototype.readUInt8=function(c,d){return c=c>>>0,d||K(c,1,this.length),this[c]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(c,d){return c=c>>>0,d||K(c,2,this.length),this[c]|this[c+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(c,d){return c=c>>>0,d||K(c,2,this.length),this[c]<<8|this[c+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(c,d){return c=c>>>0,d||K(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(c,d){return c=c>>>0,d||K(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},a.prototype.readBigUInt64LE=kt(function(c){c=c>>>0,ye(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&He(c,this.length-8);const _=d+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,g=this[++c]+this[++c]*2**8+this[++c]*2**16+f*2**24;return BigInt(_)+(BigInt(g)<<BigInt(32))}),a.prototype.readBigUInt64BE=kt(function(c){c=c>>>0,ye(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&He(c,this.length-8);const _=d*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],g=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+f;return(BigInt(_)<<BigInt(32))+BigInt(g)}),a.prototype.readIntLE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=this[c],g=1,x=0;for(;++x<d&&(g*=256);)_+=this[c+x]*g;return g*=128,_>=g&&(_-=Math.pow(2,8*d)),_},a.prototype.readIntBE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=d,g=1,x=this[c+--_];for(;_>0&&(g*=256);)x+=this[c+--_]*g;return g*=128,x>=g&&(x-=Math.pow(2,8*d)),x},a.prototype.readInt8=function(c,d){return c=c>>>0,d||K(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},a.prototype.readInt16LE=function(c,d){c=c>>>0,d||K(c,2,this.length);const f=this[c]|this[c+1]<<8;return f&32768?f|4294901760:f},a.prototype.readInt16BE=function(c,d){c=c>>>0,d||K(c,2,this.length);const f=this[c+1]|this[c]<<8;return f&32768?f|4294901760:f},a.prototype.readInt32LE=function(c,d){return c=c>>>0,d||K(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},a.prototype.readInt32BE=function(c,d){return c=c>>>0,d||K(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},a.prototype.readBigInt64LE=kt(function(c){c=c>>>0,ye(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&He(c,this.length-8);const _=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(f<<24);return(BigInt(_)<<BigInt(32))+BigInt(d+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),a.prototype.readBigInt64BE=kt(function(c){c=c>>>0,ye(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&He(c,this.length-8);const _=(d<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(_)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+f)}),a.prototype.readFloatLE=function(c,d){return c=c>>>0,d||K(c,4,this.length),r.read(this,c,!0,23,4)},a.prototype.readFloatBE=function(c,d){return c=c>>>0,d||K(c,4,this.length),r.read(this,c,!1,23,4)},a.prototype.readDoubleLE=function(c,d){return c=c>>>0,d||K(c,8,this.length),r.read(this,c,!0,52,8)},a.prototype.readDoubleBE=function(c,d){return c=c>>>0,d||K(c,8,this.length),r.read(this,c,!1,52,8)};function ct(p,c,d,f,_,g){if(!a.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>_||c<g)throw new RangeError('"value" argument is out of bounds');if(d+f>p.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(c,d,f,_){if(c=+c,d=d>>>0,f=f>>>0,!_){const z=Math.pow(2,8*f)-1;ct(this,c,d,f,z,0)}let g=1,x=0;for(this[d]=c&255;++x<f&&(g*=256);)this[d+x]=c/g&255;return d+f},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(c,d,f,_){if(c=+c,d=d>>>0,f=f>>>0,!_){const z=Math.pow(2,8*f)-1;ct(this,c,d,f,z,0)}let g=f-1,x=1;for(this[d+g]=c&255;--g>=0&&(x*=256);)this[d+g]=c/x&255;return d+f},a.prototype.writeUint8=a.prototype.writeUInt8=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,1,255,0),this[d]=c&255,d+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,65535,0),this[d]=c&255,this[d+1]=c>>>8,d+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,65535,0),this[d]=c>>>8,this[d+1]=c&255,d+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,4294967295,0),this[d+3]=c>>>24,this[d+2]=c>>>16,this[d+1]=c>>>8,this[d]=c&255,d+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,4294967295,0),this[d]=c>>>24,this[d+1]=c>>>16,this[d+2]=c>>>8,this[d+3]=c&255,d+4};function No(p,c,d,f,_){ko(c,f,_,p,d,7);let g=Number(c&BigInt(4294967295));p[d++]=g,g=g>>8,p[d++]=g,g=g>>8,p[d++]=g,g=g>>8,p[d++]=g;let x=Number(c>>BigInt(32)&BigInt(4294967295));return p[d++]=x,x=x>>8,p[d++]=x,x=x>>8,p[d++]=x,x=x>>8,p[d++]=x,d}function Io(p,c,d,f,_){ko(c,f,_,p,d,7);let g=Number(c&BigInt(4294967295));p[d+7]=g,g=g>>8,p[d+6]=g,g=g>>8,p[d+5]=g,g=g>>8,p[d+4]=g;let x=Number(c>>BigInt(32)&BigInt(4294967295));return p[d+3]=x,x=x>>8,p[d+2]=x,x=x>>8,p[d+1]=x,x=x>>8,p[d]=x,d+8}a.prototype.writeBigUInt64LE=kt(function(c,d=0){return No(this,c,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=kt(function(c,d=0){return Io(this,c,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(c,d,f,_){if(c=+c,d=d>>>0,!_){const W=Math.pow(2,8*f-1);ct(this,c,d,f,W-1,-W)}let g=0,x=1,z=0;for(this[d]=c&255;++g<f&&(x*=256);)c<0&&z===0&&this[d+g-1]!==0&&(z=1),this[d+g]=(c/x>>0)-z&255;return d+f},a.prototype.writeIntBE=function(c,d,f,_){if(c=+c,d=d>>>0,!_){const W=Math.pow(2,8*f-1);ct(this,c,d,f,W-1,-W)}let g=f-1,x=1,z=0;for(this[d+g]=c&255;--g>=0&&(x*=256);)c<0&&z===0&&this[d+g+1]!==0&&(z=1),this[d+g]=(c/x>>0)-z&255;return d+f},a.prototype.writeInt8=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,1,127,-128),c<0&&(c=255+c+1),this[d]=c&255,d+1},a.prototype.writeInt16LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,32767,-32768),this[d]=c&255,this[d+1]=c>>>8,d+2},a.prototype.writeInt16BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,32767,-32768),this[d]=c>>>8,this[d+1]=c&255,d+2},a.prototype.writeInt32LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,2147483647,-2147483648),this[d]=c&255,this[d+1]=c>>>8,this[d+2]=c>>>16,this[d+3]=c>>>24,d+4},a.prototype.writeInt32BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[d]=c>>>24,this[d+1]=c>>>16,this[d+2]=c>>>8,this[d+3]=c&255,d+4},a.prototype.writeBigInt64LE=kt(function(c,d=0){return No(this,c,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=kt(function(c,d=0){return Io(this,c,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Lo(p,c,d,f,_,g){if(d+f>p.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("Index out of range")}function Mo(p,c,d,f,_){return c=+c,d=d>>>0,_||Lo(p,c,d,4),r.write(p,c,d,f,23,4),d+4}a.prototype.writeFloatLE=function(c,d,f){return Mo(this,c,d,!0,f)},a.prototype.writeFloatBE=function(c,d,f){return Mo(this,c,d,!1,f)};function Do(p,c,d,f,_){return c=+c,d=d>>>0,_||Lo(p,c,d,8),r.write(p,c,d,f,52,8),d+8}a.prototype.writeDoubleLE=function(c,d,f){return Do(this,c,d,!0,f)},a.prototype.writeDoubleBE=function(c,d,f){return Do(this,c,d,!1,f)},a.prototype.copy=function(c,d,f,_){if(!a.isBuffer(c))throw new TypeError("argument should be a Buffer");if(f||(f=0),!_&&_!==0&&(_=this.length),d>=c.length&&(d=c.length),d||(d=0),_>0&&_<f&&(_=f),_===f||c.length===0||this.length===0)return 0;if(d<0)throw new RangeError("targetStart out of bounds");if(f<0||f>=this.length)throw new RangeError("Index out of range");if(_<0)throw new RangeError("sourceEnd out of bounds");_>this.length&&(_=this.length),c.length-d<_-f&&(_=c.length-d+f);const g=_-f;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(d,f,_):Uint8Array.prototype.set.call(c,this.subarray(f,_),d),g},a.prototype.fill=function(c,d,f,_){if(typeof c=="string"){if(typeof d=="string"?(_=d,d=0,f=this.length):typeof f=="string"&&(_=f,f=this.length),_!==void 0&&typeof _!="string")throw new TypeError("encoding must be a string");if(typeof _=="string"&&!a.isEncoding(_))throw new TypeError("Unknown encoding: "+_);if(c.length===1){const x=c.charCodeAt(0);(_==="utf8"&&x<128||_==="latin1")&&(c=x)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(d<0||this.length<d||this.length<f)throw new RangeError("Out of range index");if(f<=d)return this;d=d>>>0,f=f===void 0?this.length:f>>>0,c||(c=0);let g;if(typeof c=="number")for(g=d;g<f;++g)this[g]=c;else{const x=a.isBuffer(c)?c:a.from(c,_),z=x.length;if(z===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(g=0;g<f-d;++g)this[g+d]=x[g%z]}return this};const _e={};function pn(p,c,d){_e[p]=class extends d{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${p}]`,this.stack,delete this.name}get code(){return p}set code(_){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:_,writable:!0})}toString(){return`${this.name} [${p}]: ${this.message}`}}}pn("ERR_BUFFER_OUT_OF_BOUNDS",function(p){return p?`${p} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),pn("ERR_INVALID_ARG_TYPE",function(p,c){return`The "${p}" argument must be of type number. Received type ${typeof c}`},TypeError),pn("ERR_OUT_OF_RANGE",function(p,c,d){let f=`The value of "${p}" is out of range.`,_=d;return Number.isInteger(d)&&Math.abs(d)>2**32?_=jo(String(d)):typeof d=="bigint"&&(_=String(d),(d>BigInt(2)**BigInt(32)||d<-(BigInt(2)**BigInt(32)))&&(_=jo(_)),_+="n"),f+=` It must be ${c}. Received ${_}`,f},RangeError);function jo(p){let c="",d=p.length;const f=p[0]==="-"?1:0;for(;d>=f+4;d-=3)c=`_${p.slice(d-3,d)}${c}`;return`${p.slice(0,d)}${c}`}function Id(p,c,d){ye(c,"offset"),(p[c]===void 0||p[c+d]===void 0)&&He(c,p.length-(d+1))}function ko(p,c,d,f,_,g){if(p>d||p<c){const x=typeof c=="bigint"?"n":"";let z;throw c===0||c===BigInt(0)?z=`>= 0${x} and < 2${x} ** ${(g+1)*8}${x}`:z=`>= -(2${x} ** ${(g+1)*8-1}${x}) and < 2 ** ${(g+1)*8-1}${x}`,new _e.ERR_OUT_OF_RANGE("value",z,p)}Id(f,_,g)}function ye(p,c){if(typeof p!="number")throw new _e.ERR_INVALID_ARG_TYPE(c,"number",p)}function He(p,c,d){throw Math.floor(p)!==p?(ye(p,d),new _e.ERR_OUT_OF_RANGE("offset","an integer",p)):c<0?new _e.ERR_BUFFER_OUT_OF_BOUNDS:new _e.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${c}`,p)}const Ld=/[^+/0-9A-Za-z-_]/g;function Md(p){if(p=p.split("=")[0],p=p.trim().replace(Ld,""),p.length<2)return"";for(;p.length%4!==0;)p=p+"=";return p}function fn(p,c){c=c||1/0;let d;const f=p.length;let _=null;const g=[];for(let x=0;x<f;++x){if(d=p.charCodeAt(x),d>55295&&d<57344){if(!_){if(d>56319){(c-=3)>-1&&g.push(239,191,189);continue}else if(x+1===f){(c-=3)>-1&&g.push(239,191,189);continue}_=d;continue}if(d<56320){(c-=3)>-1&&g.push(239,191,189),_=d;continue}d=(_-55296<<10|d-56320)+65536}else _&&(c-=3)>-1&&g.push(239,191,189);if(_=null,d<128){if((c-=1)<0)break;g.push(d)}else if(d<2048){if((c-=2)<0)break;g.push(d>>6|192,d&63|128)}else if(d<65536){if((c-=3)<0)break;g.push(d>>12|224,d>>6&63|128,d&63|128)}else if(d<1114112){if((c-=4)<0)break;g.push(d>>18|240,d>>12&63|128,d>>6&63|128,d&63|128)}else throw new Error("Invalid code point")}return g}function Dd(p){const c=[];for(let d=0;d<p.length;++d)c.push(p.charCodeAt(d)&255);return c}function jd(p,c){let d,f,_;const g=[];for(let x=0;x<p.length&&!((c-=2)<0);++x)d=p.charCodeAt(x),f=d>>8,_=d%256,g.push(_),g.push(f);return g}function Bo(p){return t.toByteArray(Md(p))}function jr(p,c,d,f){let _;for(_=0;_<f&&!(_+d>=c.length||_>=p.length);++_)c[_+d]=p[_];return _}function bt(p,c){return p instanceof c||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===c.name}function mn(p){return p!==p}const kd=(function(){const p="0123456789abcdef",c=new Array(256);for(let d=0;d<16;++d){const f=d*16;for(let _=0;_<16;++_)c[f+_]=p[d]+p[_]}return c})();function kt(p){return typeof BigInt>"u"?Bd:p}function Bd(){throw new Error("BigInt not supported")}})(yn)),yn}var Jd=Gd(),Br={exports:{}},qo;function Wd(){if(qo)return Br.exports;qo=1;var e=typeof Reflect=="object"?Reflect:null,t=e&&typeof e.apply=="function"?e.apply:function(w,T,O){return Function.prototype.apply.call(w,T,O)},r;e&&typeof e.ownKeys=="function"?r=e.ownKeys:Object.getOwnPropertySymbols?r=function(w){return Object.getOwnPropertyNames(w).concat(Object.getOwnPropertySymbols(w))}:r=function(w){return Object.getOwnPropertyNames(w)};function i(S){console&&console.warn&&console.warn(S)}var n=Number.isNaN||function(w){return w!==w};function s(){s.init.call(this)}Br.exports=s,Br.exports.once=R,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(S){if(typeof S!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof S)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(S){if(typeof S!="number"||S<0||n(S))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+S+".");o=S}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(w){if(typeof w!="number"||w<0||n(w))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+w+".");return this._maxListeners=w,this};function l(S){return S._maxListeners===void 0?s.defaultMaxListeners:S._maxListeners}s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(w){for(var T=[],O=1;O<arguments.length;O++)T.push(arguments[O]);var L=w==="error",j=this._events;if(j!==void 0)L=L&&j.error===void 0;else if(!L)return!1;if(L){var F;if(T.length>0&&(F=T[0]),F instanceof Error)throw F;var st=new Error("Unhandled error."+(F?" ("+F.message+")":""));throw st.context=F,st}var Kt=j[w];if(Kt===void 0)return!1;if(typeof Kt=="function")t(Kt,this,T);else for(var Mr=Kt.length,Dr=E(Kt,Mr),O=0;O<Mr;++O)t(Dr[O],this,T);return!0};function u(S,w,T,O){var L,j,F;if(a(T),j=S._events,j===void 0?(j=S._events=Object.create(null),S._eventsCount=0):(j.newListener!==void 0&&(S.emit("newListener",w,T.listener?T.listener:T),j=S._events),F=j[w]),F===void 0)F=j[w]=T,++S._eventsCount;else if(typeof F=="function"?F=j[w]=O?[T,F]:[F,T]:O?F.unshift(T):F.push(T),L=l(S),L>0&&F.length>L&&!F.warned){F.warned=!0;var st=new Error("Possible EventEmitter memory leak detected. "+F.length+" "+String(w)+" listeners added. Use emitter.setMaxListeners() to increase limit");st.name="MaxListenersExceededWarning",st.emitter=S,st.type=w,st.count=F.length,i(st)}return S}s.prototype.addListener=function(w,T){return u(this,w,T,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(w,T){return u(this,w,T,!0)};function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(S,w,T){var O={fired:!1,wrapFn:void 0,target:S,type:w,listener:T},L=h.bind(O);return L.listener=T,O.wrapFn=L,L}s.prototype.once=function(w,T){return a(T),this.on(w,m(this,w,T)),this},s.prototype.prependOnceListener=function(w,T){return a(T),this.prependListener(w,m(this,w,T)),this},s.prototype.removeListener=function(w,T){var O,L,j,F,st;if(a(T),L=this._events,L===void 0)return this;if(O=L[w],O===void 0)return this;if(O===T||O.listener===T)--this._eventsCount===0?this._events=Object.create(null):(delete L[w],L.removeListener&&this.emit("removeListener",w,O.listener||T));else if(typeof O!="function"){for(j=-1,F=O.length-1;F>=0;F--)if(O[F]===T||O[F].listener===T){st=O[F].listener,j=F;break}if(j<0)return this;j===0?O.shift():P(O,j),O.length===1&&(L[w]=O[0]),L.removeListener!==void 0&&this.emit("removeListener",w,st||T)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(w){var T,O,L;if(O=this._events,O===void 0)return this;if(O.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):O[w]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete O[w]),this;if(arguments.length===0){var j=Object.keys(O),F;for(L=0;L<j.length;++L)F=j[L],F!=="removeListener"&&this.removeAllListeners(F);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(T=O[w],typeof T=="function")this.removeListener(w,T);else if(T!==void 0)for(L=T.length-1;L>=0;L--)this.removeListener(w,T[L]);return this};function y(S,w,T){var O=S._events;if(O===void 0)return[];var L=O[w];return L===void 0?[]:typeof L=="function"?T?[L.listener||L]:[L]:T?I(L):E(L,L.length)}s.prototype.listeners=function(w){return y(this,w,!0)},s.prototype.rawListeners=function(w){return y(this,w,!1)},s.listenerCount=function(S,w){return typeof S.listenerCount=="function"?S.listenerCount(w):v.call(S,w)},s.prototype.listenerCount=v;function v(S){var w=this._events;if(w!==void 0){var T=w[S];if(typeof T=="function")return 1;if(T!==void 0)return T.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]};function E(S,w){for(var T=new Array(w),O=0;O<w;++O)T[O]=S[O];return T}function P(S,w){for(;w+1<S.length;w++)S[w]=S[w+1];S.pop()}function I(S){for(var w=new Array(S.length),T=0;T<w.length;++T)w[T]=S[T].listener||S[T];return w}function R(S,w){return new Promise(function(T,O){function L(F){S.removeListener(w,j),O(F)}function j(){typeof S.removeListener=="function"&&S.removeListener("error",L),T([].slice.call(arguments))}M(S,w,j,{once:!0}),w!=="error"&&$(S,L,{once:!0})})}function $(S,w,T){typeof S.on=="function"&&M(S,"error",w,T)}function M(S,w,T,O){if(typeof S.on=="function")O.once?S.once(w,T):S.on(w,T);else if(typeof S.addEventListener=="function")S.addEventListener(w,function L(j){O.once&&S.removeEventListener(w,L),T(j)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof S)}return Br.exports}var Yd=Wd();const Qd=$r(Yd);window.Buffer=Jd.Buffer;window.process=Hd;window.EventEmitter=Qd;const Kd="modulepreload",Xd=function(e){return"/"+e},Vo={},wt=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");n=l(r.map(u=>{if(u=Xd(u),u in Vo)return;Vo[u]=!0;const h=u.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":Kd,h||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),h)return new Promise((v,E)=>{y.addEventListener("load",v),y.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};const ei=globalThis,Bs=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fs=Symbol(),Go=new WeakMap;let ic=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Fs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Bs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Go.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Go.set(r,t))}return t}toString(){return this.cssText}};const Zd=e=>new ic(typeof e=="string"?e:e+"",void 0,Fs),th=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new ic(r,e,Fs)},eh=(e,t)=>{if(Bs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=ei.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Jo=Bs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Zd(r)})(e):e;const{is:rh,defineProperty:ih,getOwnPropertyDescriptor:nh,getOwnPropertyNames:sh,getOwnPropertySymbols:oh,getPrototypeOf:ah}=Object,tn=globalThis,Wo=tn.trustedTypes,lh=Wo?Wo.emptyScript:"",ch=tn.reactiveElementPolyfillSupport,sr=(e,t)=>e,Zn={toAttribute(e,t){switch(t){case Boolean:e=e?lh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},nc=(e,t)=>!rh(e,t),Yo={attribute:!0,type:String,converter:Zn,reflect:!1,useDefault:!1,hasChanged:nc};Symbol.metadata??=Symbol("metadata"),tn.litPropertyMetadata??=new WeakMap;let Ae=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Yo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&ih(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:s}=nh(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:n,set(o){const a=n?.call(this);s?.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yo}static _$Ei(){if(this.hasOwnProperty(sr("elementProperties")))return;const t=ah(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(sr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sr("properties"))){const r=this.properties,i=[...sh(r),...oh(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Jo(n))}else t!==void 0&&r.push(Jo(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Zn).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Zn;this._$Em=n;const a=o.fromAttribute(r,s.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,r,i,n=!1,s){if(t!==void 0){const o=this.constructor;if(n===!1&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??nc)(s,r)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:o}=s,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[sr("elementProperties")]=new Map,Ae[sr("finalized")]=new Map,ch?.({ReactiveElement:Ae}),(tn.reactiveElementVersions??=[]).push("2.1.2");const zs=globalThis,Qo=e=>e,ci=zs.trustedTypes,Ko=ci?ci.createPolicy("lit-html",{createHTML:e=>e}):void 0,sc="$lit$",zt=`lit$${Math.random().toFixed(9).slice(2)}$`,oc="?"+zt,uh=`<${oc}>`,le=document,pr=()=>le.createComment(""),fr=e=>e===null||typeof e!="object"&&typeof e!="function",Us=Array.isArray,dh=e=>Us(e)||typeof e?.[Symbol.iterator]=="function",gn=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xo=/-->/g,Zo=/>/g,Xt=RegExp(`>|${gn}(?:([^\\s"'>=/]+)(${gn}*=${gn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ta=/'/g,ea=/"/g,ac=/^(?:script|style|textarea|title)$/i,hh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ge=hh(1),Ne=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),ra=new WeakMap,re=le.createTreeWalker(le,129);function lc(e,t){if(!Us(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ko!==void 0?Ko.createHTML(t):t}const ph=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=Ve;for(let a=0;a<r;a++){const l=e[a];let u,h,m=-1,y=0;for(;y<l.length&&(o.lastIndex=y,h=o.exec(l),h!==null);)y=o.lastIndex,o===Ve?h[1]==="!--"?o=Xo:h[1]!==void 0?o=Zo:h[2]!==void 0?(ac.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=Xt):h[3]!==void 0&&(o=Xt):o===Xt?h[0]===">"?(o=n??Ve,m=-1):h[1]===void 0?m=-2:(m=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Xt:h[3]==='"'?ea:ta):o===ea||o===ta?o=Xt:o===Xo||o===Zo?o=Ve:(o=Xt,n=void 0);const v=o===Xt&&e[a+1].startsWith("/>")?" ":"";s+=o===Ve?l+uh:m>=0?(i.push(u),l.slice(0,m)+sc+l.slice(m)+zt+v):l+zt+(m===-2?a:v)}return[lc(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let ts=class cc{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,h]=ph(t,r);if(this.el=cc.createElement(u,i),re.currentNode=this.el.content,r===2||r===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(n=re.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const m of n.getAttributeNames())if(m.endsWith(sc)){const y=h[o++],v=n.getAttribute(m).split(zt),E=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:E[2],strings:v,ctor:E[1]==="."?mh:E[1]==="?"?_h:E[1]==="@"?yh:rn}),n.removeAttribute(m)}else m.startsWith(zt)&&(l.push({type:6,index:s}),n.removeAttribute(m));if(ac.test(n.tagName)){const m=n.textContent.split(zt),y=m.length-1;if(y>0){n.textContent=ci?ci.emptyScript:"";for(let v=0;v<y;v++)n.append(m[v],pr()),re.nextNode(),l.push({type:2,index:++s});n.append(m[y],pr())}}}else if(n.nodeType===8)if(n.data===oc)l.push({type:2,index:s});else{let m=-1;for(;(m=n.data.indexOf(zt,m+1))!==-1;)l.push({type:7,index:s}),m+=zt.length-1}s++}}static createElement(t,r){const i=le.createElement("template");return i.innerHTML=t,i}};function Ie(e,t,r=e,i){if(t===Ne)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const s=fr(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Ie(e,n._$AS(e,t.values),n,i)),t}let fh=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??le).importNode(r,!0);re.currentNode=n;let s=re.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new en(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new gh(s,this,t)),this._$AV.push(u),l=i[++a]}o!==l?.index&&(s=re.nextNode(),o++)}return re.currentNode=le,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},en=class uc{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ie(this,t,r),fr(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==Ne&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):dh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&fr(this._$AH)?this._$AA.nextSibling.data=t:this.T(le.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ts.createElement(lc(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const s=new fh(n,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=ra.get(t.strings);return r===void 0&&ra.set(t.strings,r=new ts(t)),r}k(t){Us(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new uc(this.O(pr()),this.O(pr()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Qo(t).nextSibling;Qo(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},rn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=Ie(this,t,r,0),o=!fr(t)||t!==this._$AH&&t!==Ne,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=Ie(this,a[i+l],r,l),u===Ne&&(u=this._$AH[l]),o||=!fr(u)||u!==this._$AH[l],u===Z?t=Z:t!==Z&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!n&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mh=class extends rn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},_h=class extends rn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},yh=class extends rn{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){if((t=Ie(this,t,r,0)??Z)===Ne)return;const i=this._$AH,n=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},gh=class{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ie(this,t)}};const pA={I:en},bh=zs.litHtmlPolyfillSupport;bh?.(ts,en),(zs.litHtmlVersions??=[]).push("3.3.3");const dc=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=r?.renderBefore??null;i._$litPart$=n=new en(t.insertBefore(pr(),s),s,void 0,r??{})}return n._$AI(e),n};const Hs=globalThis;let or=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};or._$litElement$=!0,or.finalized=!0,Hs.litElementHydrateSupport?.({LitElement:or});const vh=Hs.litElementPolyfillSupport;vh?.({LitElement:or});(Hs.litElementVersions??=[]).push("4.2.2");function wh(e){return(t={},r)=>{const i={};for(const n in e)i[n]=e[n](t[n],r);return i}}const xh="action",mr="state",Je=Symbol(),ia=Symbol(),na=Symbol(),sa=Symbol(),oa=Symbol(),aa=Symbol(),ge=Symbol();function Ah(e,t){return class extends t{constructor(...r){super(...r),this[ge]=this[ge].bind(this),this[ia]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[na](),this[oa]()}disconnectedCallback(){this[aa](),this[sa](),super.disconnectedCallback&&super.disconnectedCallback()}[ia](){this[Je]=this.mapEvents?this.mapEvents():{}}[na](){for(const r in this[Je])this.addEventListener(r,this[Je][r],!1)}[sa](){for(const r in this[Je])this.removeEventListener(r,this[Je][r],!1)}[oa](){e.addEventListener(mr,this[ge]),this[ge]()}[aa](){e.removeEventListener(mr,this[ge])}[ge](){this.mapState&&Object.assign(this,this.mapState(e.state))}}}const nn=e=>e;let Sh=class extends EventTarget{constructor(t,r){super(),this.state=t,this.reducer=r,this.state=this.reducer(this.state,{})}dispatch(t){const r=new CustomEvent(xh,{cancelable:!0,detail:{action:t}});return this.dispatchEvent(r)&&(t=r.detail.action,this.state=this.reducer(this.state,t),this.dispatchEvent(new CustomEvent(mr,{detail:{action:t}}))),t}};const hc=(e,t)=>t.indexOf("/")>-1?t:e+"/"+t,la=(e,t,r)=>{const i=hc(t,r);return e.dispatch[t][r]=n=>{const s={type:i,...n!==void 0&&{payload:n}};return e.dispatch(s)},i},Fr={},ca=[],Eh={dispatchPlugin:{onModel(e,t,r){e.dispatch[t]={};for(const i in r.reducers)la(e,t,i)}},effectsPlugin:{onModel(e,t,r){if(!r.effects)return;const i=r.effects({getDispatch:()=>e.dispatch,getState:()=>e.state});for(const n in i){const s=la(e,t,n),o=i[n];Fr[s]?Fr[s].push(o):Fr[s]=[o],n==="init"&&ca.push(o)}},onStore(e){e.addEventListener(mr,t=>{const{action:r}=t.detail,i=Fr[r.type];i&&queueMicrotask(()=>i.forEach(n=>n(r.payload)))}),queueMicrotask(()=>ca.forEach(t=>t()))}}},Ch=e=>{const t={...e.models},r={...Eh,...e.plugins};for(const a in r){const l=r[a];l.model&&(t[a]=l.model)}const i={};for(const a in t){const l=t[a],u={};for(const h in l.reducers)u[hc(a,h)]=l.reducers[h];i[a]=(h=l.state,m)=>{const y=u[m.type];return y?y(h,m.payload):h}}const n=wh(i),s=e&&e.state,o=new Sh(s,n);for(const a in r){const l=r[a];if(l.onModel)for(const u in t)l.onModel(o,u,t[u])}for(const a in r){const l=r[a];l.onStore&&l.onStore(o)}return o};function Ph(e,t){const r={name:location.hostname,storage:localStorage,serializer:JSON,filter:s=>!0,persist:s=>s,delay:0,...t},i=r.storage.getItem(r.name);i&&(e.state={...e.state,...r.serializer.parse(i)});let n=0;return e.addEventListener(mr,s=>{const{action:o}=s.detail;r.filter(o)&&(n&&window.clearTimeout(n),n=window.setTimeout(()=>{r.storage.setItem(r.name,r.serializer.stringify(r.persist(e.state))),n=0},r.delay))}),e}class Th extends HTMLElement{static get version(){return"23.6.4"}}customElements.define("vaadin-lumo-styles",Th);const ri=window,qs=ri.ShadowRoot&&(ri.ShadyCSS===void 0||ri.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vs=Symbol(),ua=new WeakMap;let Gs=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Vs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(qs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=ua.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ua.set(r,t))}return t}toString(){return this.cssText}};const $h=e=>new Gs(typeof e=="string"?e:e+"",void 0,Vs),lt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce(((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1]),e[0]);return new Gs(r,e,Vs)},Oh=(e,t)=>{qs?e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet)):t.forEach((r=>{const i=document.createElement("style"),n=ri.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}))},da=qs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return $h(r)})(e):e;var bn;const ui=window,ha=ui.trustedTypes,Rh=ha?ha.emptyScript:"",pa=ui.reactiveElementPolyfillSupport,es={toAttribute(e,t){switch(t){case Boolean:e=e?Rh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},pc=(e,t)=>t!==e&&(t==t||e==e),vn={attribute:!0,type:String,converter:es,reflect:!1,hasChanged:pc},rs="finalized";let Se=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((r,i)=>{const n=this._$Ep(i,r);n!==void 0&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,r=vn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const s=this[t];this[r]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||vn}static finalize(){if(this.hasOwnProperty(rs))return!1;this[rs]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of i)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(da(n))}else t!==void 0&&r.push(da(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((r=>r(this)))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])}))}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Oh(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)}))}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=vn){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:es).toAttribute(r,i.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,r){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:es;this._$El=s,this[s]=a.fromAttribute(r,o.type),this._$El=null}}requestUpdate(t,r,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||pc)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((n,s)=>this[s]=n)),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach((n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)})),this.update(i)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach((i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((r,i)=>this._$EO(i,this[i],r))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Se[rs]=!0,Se.elementProperties=new Map,Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},pa?.({ReactiveElement:Se}),((bn=ui.reactiveElementVersions)!==null&&bn!==void 0?bn:ui.reactiveElementVersions=[]).push("1.6.3");var wn;const di=window,Le=di.trustedTypes,fa=Le?Le.createPolicy("lit-html",{createHTML:e=>e}):void 0,is="$lit$",Ut=`lit$${(Math.random()+"").slice(9)}$`,fc="?"+Ut,Nh=`<${fc}>`,ce=document,_r=()=>ce.createComment(""),yr=e=>e===null||typeof e!="object"&&typeof e!="function",mc=Array.isArray,Ih=e=>mc(e)||typeof e?.[Symbol.iterator]=="function",xn=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ma=/-->/g,_a=/>/g,Zt=RegExp(`>|${xn}(?:([^\\s"'>=/]+)(${xn}*=${xn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ya=/'/g,ga=/"/g,_c=/^(?:script|style|textarea|title)$/i,Me=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),ba=new WeakMap,ie=ce.createTreeWalker(ce,129,null,!1);function yc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return fa!==void 0?fa.createHTML(t):t}const Lh=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":"",o=We;for(let a=0;a<r;a++){const l=e[a];let u,h,m=-1,y=0;for(;y<l.length&&(o.lastIndex=y,h=o.exec(l),h!==null);)y=o.lastIndex,o===We?h[1]==="!--"?o=ma:h[1]!==void 0?o=_a:h[2]!==void 0?(_c.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=Zt):h[3]!==void 0&&(o=Zt):o===Zt?h[0]===">"?(o=n??We,m=-1):h[1]===void 0?m=-2:(m=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Zt:h[3]==='"'?ga:ya):o===ga||o===ya?o=Zt:o===ma||o===_a?o=We:(o=Zt,n=void 0);const v=o===Zt&&e[a+1].startsWith("/>")?" ":"";s+=o===We?l+Nh:m>=0?(i.push(u),l.slice(0,m)+is+l.slice(m)+Ut+v):l+Ut+(m===-2?(i.push(void 0),a):v)}return[yc(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class gr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,h]=Lh(t,r);if(this.el=gr.createElement(u,i),ie.currentNode=this.el.content,r===2){const m=this.el.content,y=m.firstChild;y.remove(),m.append(...y.childNodes)}for(;(n=ie.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const m=[];for(const y of n.getAttributeNames())if(y.endsWith(is)||y.startsWith(Ut)){const v=h[o++];if(m.push(y),v!==void 0){const E=n.getAttribute(v.toLowerCase()+is).split(Ut),P=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:P[2],strings:E,ctor:P[1]==="."?Dh:P[1]==="?"?kh:P[1]==="@"?Bh:sn})}else l.push({type:6,index:s})}for(const y of m)n.removeAttribute(y)}if(_c.test(n.tagName)){const m=n.textContent.split(Ut),y=m.length-1;if(y>0){n.textContent=Le?Le.emptyScript:"";for(let v=0;v<y;v++)n.append(m[v],_r()),ie.nextNode(),l.push({type:2,index:++s});n.append(m[y],_r())}}}else if(n.nodeType===8)if(n.data===fc)l.push({type:2,index:s});else{let m=-1;for(;(m=n.data.indexOf(Ut,m+1))!==-1;)l.push({type:7,index:s}),m+=Ut.length-1}s++}}static createElement(t,r){const i=ce.createElement("template");return i.innerHTML=t,i}}function De(e,t,r=e,i){var n,s,o,a;if(t===Me)return t;let l=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const u=yr(t)?void 0:t._$litDirective$;return l?.constructor!==u&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(e),l._$AT(e,r,i)),i!==void 0?((o=(a=r)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:r._$Cl=l),l!==void 0&&(t=De(e,l._$AS(e,t.values),l,i)),t}class Mh{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:i},parts:n}=this._$AD,s=((r=t?.creationScope)!==null&&r!==void 0?r:ce).importNode(i,!0);ie.currentNode=s;let o=ie.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new Or(o,o.nextSibling,this,t):u.type===1?h=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(h=new Fh(o,this,t)),this._$AV.push(h),u=n[++l]}a!==u?.index&&(o=ie.nextNode(),a++)}return ie.currentNode=ce,s}v(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Or{constructor(t,r,i,n){var s;this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=De(this,t,r),yr(t)?t===tt||t==null||t===""?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ih(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tt&&yr(this._$AH)?this._$AA.nextSibling.data=t:this.$(ce.createTextNode(t)),this._$AH=t}g(t){var r;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=gr.createElement(yc(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(i);else{const o=new Mh(s,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(t){let r=ba.get(t.strings);return r===void 0&&ba.set(t.strings,r=new gr(t)),r}T(t){mc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new Or(this.k(_r()),this.k(_r()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class sn{constructor(t,r,i,n,s){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=tt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=De(this,t,r,0),o=!yr(t)||t!==this._$AH&&t!==Me,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=De(this,a[i+l],r,l),u===Me&&(u=this._$AH[l]),o||(o=!yr(u)||u!==this._$AH[l]),u===tt?t=tt:t!==tt&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!n&&this.j(t)}j(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Dh extends sn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tt?void 0:t}}const jh=Le?Le.emptyScript:"";class kh extends sn{constructor(){super(...arguments),this.type=4}j(t){t&&t!==tt?this.element.setAttribute(this.name,jh):this.element.removeAttribute(this.name)}}class Bh extends sn{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){var i;if((t=(i=De(this,t,r,0))!==null&&i!==void 0?i:tt)===Me)return;const n=this._$AH,s=t===tt&&n!==tt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==tt&&(n===tt||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Fh{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){De(this,t)}}const va=di.litHtmlPolyfillSupport;va?.(gr,Or),((wn=di.litHtmlVersions)!==null&&wn!==void 0?wn:di.litHtmlVersions=[]).push("2.8.0");const zh=(e,t,r)=>{var i,n;const s=(i=r?.renderBefore)!==null&&i!==void 0?i:t;let o=s._$litPart$;if(o===void 0){const a=(n=r?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=o=new Or(t.insertBefore(_r(),a),a,void 0,r??{})}return o._$AI(e),o};var An,Sn;let ii=class extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Me}};ii.finalized=!0,ii._$litElement$=!0,(An=globalThis.litElementHydrateSupport)===null||An===void 0||An.call(globalThis,{LitElement:ii});const wa=globalThis.litElementPolyfillSupport;wa?.({LitElement:ii});((Sn=globalThis.litElementVersions)!==null&&Sn!==void 0?Sn:globalThis.litElementVersions=[]).push("3.3.3");const Uh=e=>class extends e{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(r){this._set_theme(r)}};const gc=[];function Mt(e,t,r={}){e&&Wh(e)&&console.warn(`The custom element definition for "${e}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=Vh(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,r):gc.push({themeFor:e,styles:t,include:r.include,moduleId:r.moduleId})}function ns(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():gc}function Hh(e,t){return(e||"").split(" ").some(r=>new RegExp(`^${r.split("*").join(".*")}$`).test(t))}function qh(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function Vh(e=[]){return[e].flat(1/0).filter(t=>t instanceof Gs?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function bc(e){const t=[];return e.include&&[].concat(e.include).forEach(r=>{const i=ns().find(n=>n.moduleId===r);i?t.push(...bc(i),...i.styles):console.warn(`Included moduleId ${r} not found in style registry`)},e.styles),t}function Gh(e,t){const r=document.createElement("style");r.innerHTML=e.map(i=>i.cssText).join(`
`),t.content.appendChild(r)}function Jh(e){const t=`${e}-default-theme`,r=ns().filter(i=>i.moduleId!==t&&Hh(i.themeFor,e)).map(i=>({...i,styles:[...bc(i),...i.styles],includePriority:qh(i.moduleId)})).sort((i,n)=>n.includePriority-i.includePriority);return r.length>0?r:ns().filter(i=>i.moduleId===t)}function Wh(e){return vc(customElements.get(e))}function vc(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}const ze=e=>class extends Uh(e){static finalize(){if(super.finalize(),this.elementStyles)return;const r=this.prototype._template;!r||vc(this)||Gh(this.getStylesForThis(),r)}static finalizeStyles(r){const i=this.getStylesForThis();return r?[...super.finalizeStyles(r),...i]:i}static getStylesForThis(){const r=Object.getPrototypeOf(this.prototype),i=(r?r.constructor.__themes:[])||[];this.__themes=[...i,...Jh(this.is)];const n=this.__themes.flatMap(s=>s.styles);return n.filter((s,o)=>o===n.lastIndexOf(s))}};const Yh=lt`
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
`,wc=document.createElement("template");wc.innerHTML=`<style>${Yh.toString().replace(":host","html")}</style>`;document.head.appendChild(wc.content);const xc=lt`
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
`;Mt("",xc,{moduleId:"lumo-color"});const Qh=lt`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;Mt("",[xc,Qh],{moduleId:"lumo-color-legacy"});const Kh=lt`
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
`,Ac=document.createElement("template");Ac.innerHTML=`<style>${Kh.toString().replace(":host","html")}</style>`;document.head.appendChild(Ac.content);const Xh=lt`
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
`,Zh=lt`
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
`;Mt("",Zh,{moduleId:"lumo-typography"});const Sc=document.createElement("template");Sc.innerHTML=`<style>${Xh.toString().replace(":host","html")}</style>`;document.head.appendChild(Sc.content);Mt("vaadin-app-layout",lt`
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
  `,{moduleId:"lumo-app-layout"});const Ec=document.createElement("template");Ec.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(Ec.content);const on=e=>e.test(navigator.userAgent),ss=e=>e.test(navigator.platform),tp=e=>e.test(navigator.vendor);on(/Android/);on(/Chrome/)&&tp(/Google Inc/);on(/Firefox/);const ep=ss(/^iPad/)||ss(/^Mac/)&&navigator.maxTouchPoints>1,rp=ss(/^iPhone/),ip=rp||ep;on(/^((?!chrome|android).)*safari/i);const wA=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();function Cc(){if(ip){const e=window.innerHeight,r=window.innerWidth>e,i=document.documentElement.clientHeight;r&&i>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${i-e}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Cc();window.addEventListener("resize",Cc);window.JSCompiler_renameProperty=function(e,t){return e};function Ye(e,t,r){return{index:e,removed:t,addedCount:r}}const Pc=0,Tc=1,os=2,as=3;function np(e,t,r,i,n,s){let o=s-n+1,a=r-t+1,l=new Array(o);for(let u=0;u<o;u++)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;u++)l[0][u]=u;for(let u=1;u<o;u++)for(let h=1;h<a;h++)if(Js(e[t+h-1],i[n+u-1]))l[u][h]=l[u-1][h-1];else{let m=l[u-1][h]+1,y=l[u][h-1]+1;l[u][h]=m<y?m:y}return l}function sp(e){let t=e.length-1,r=e[0].length-1,i=e[t][r],n=[];for(;t>0||r>0;){if(t==0){n.push(os),r--;continue}if(r==0){n.push(as),t--;continue}let s=e[t-1][r-1],o=e[t-1][r],a=e[t][r-1],l;o<a?l=o<s?o:s:l=a<s?a:s,l==s?(s==i?n.push(Pc):(n.push(Tc),i=s),t--,r--):l==o?(n.push(as),t--,i=o):(n.push(os),r--,i=a)}return n.reverse(),n}function op(e,t,r,i,n,s){let o=0,a=0,l,u=Math.min(r-t,s-n);if(t==0&&n==0&&(o=ap(e,i,u)),r==e.length&&s==i.length&&(a=lp(e,i,u-o)),t+=o,n+=o,r-=a,s-=a,r-t==0&&s-n==0)return[];if(t==r){for(l=Ye(t,[],0);n<s;)l.removed.push(i[n++]);return[l]}else if(n==s)return[Ye(t,[],r-t)];let h=sp(np(e,t,r,i,n,s));l=void 0;let m=[],y=t,v=n;for(let E=0;E<h.length;E++)switch(h[E]){case Pc:l&&(m.push(l),l=void 0),y++,v++;break;case Tc:l||(l=Ye(y,[],0)),l.addedCount++,y++,l.removed.push(i[v]),v++;break;case os:l||(l=Ye(y,[],0)),l.addedCount++,y++;break;case as:l||(l=Ye(y,[],0)),l.removed.push(i[v]),v++;break}return l&&m.push(l),m}function ap(e,t,r){for(let i=0;i<r;i++)if(!Js(e[i],t[i]))return i;return r}function lp(e,t,r){let i=e.length,n=t.length,s=0;for(;s<r&&Js(e[--i],t[--n]);)s++;return s}function $c(e,t){return op(e,0,e.length,t,0,t.length)}function Js(e,t){return e===t}let cp=0,Oc=0,Pe=[],up=0,ls=!1,Rc=document.createTextNode("");new window.MutationObserver(dp).observe(Rc,{characterData:!0});function dp(){ls=!1;const e=Pe.length;for(let t=0;t<e;t++){let r=Pe[t];if(r)try{r()}catch(i){setTimeout(()=>{throw i})}}Pe.splice(0,e),Oc+=e}const ar={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Ht={run(e){return ls||(ls=!0,Rc.textContent=up++),Pe.push(e),cp++},cancel(e){const t=e-Oc;if(t>=0){if(!Pe[t])throw new Error("invalid async handle: "+e);Pe[t]=null}}};const N=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function be(e){return e.localName==="slot"}let It=class{static getFlattenedNodes(e){const t=N(e);if(be(e))return e=e,t.assignedNodes({flatten:!0});{const r=[];for(let i=0;i<t.childNodes.length;i++){const n=t.childNodes[i];if(be(n)){const s=n;r.push(...N(s).assignedNodes({flatten:!0}))}else r.push(n)}return r}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){be(this._target)?this._listenSlots([this._target]):N(this._target).children&&(this._listenSlots(N(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){be(this._target)?this._unlistenSlots([this._target]):N(this._target).children&&(this._unlistenSlots(N(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ht.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=$c(t,this._effectiveNodes);for(let n=0,s;n<r.length&&(s=r[n]);n++)for(let o=0,a;o<s.removed.length&&(a=s.removed[o]);o++)e.removedNodes.push(a);for(let n=0,s;n<r.length&&(s=r[n]);n++)for(let o=s.index;o<s.index+s.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];be(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];be(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};let hi=!1,Nc=[],Ic=[];function Lc(){hi=!0,requestAnimationFrame(function(){hi=!1,hp(Nc),setTimeout(function(){pp(Ic)})})}function hp(e){for(;e.length;)Mc(e.shift())}function pp(e){for(let t=0,r=e.length;t<r;t++)Mc(e.shift())}function Mc(e){const t=e[0],r=e[1],i=e[2];try{r.apply(t,i)}catch(n){setTimeout(()=>{throw n})}}function fp(e,t,r){hi||Lc(),Nc.push([e,t,r])}function Dc(e,t,r){hi||Lc(),Ic.push([e,t,r])}let mp=/(url\()([^)]*)(\))/g,_p=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,zr,pt;function lr(e,t){if(e&&_p.test(e)||e==="//")return e;if(zr===void 0){zr=!1;try{const r=new URL("b","http://a");r.pathname="c%20d",zr=r.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),zr)try{return new URL(e,t).href}catch{return e}return pt||(pt=document.implementation.createHTMLDocument("temp"),pt.base=pt.createElement("base"),pt.head.appendChild(pt.base),pt.anchor=pt.createElement("a"),pt.body.appendChild(pt.anchor)),pt.base.href=t,pt.anchor.href=e,pt.anchor.href||e}function Ws(e,t){return e.replace(mp,function(r,i,n,s){return i+"'"+lr(n.replace(/["']/g,""),t)+"'"+s})}function Ys(e){return e.substring(0,e.lastIndexOf("/")+1)}const Qs=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const yp=Qs&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let gp=window.Polymer&&window.Polymer.rootPath||Ys(document.baseURI||window.location.href),pi=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,bp=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,je=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,vp=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,br=window.Polymer&&window.Polymer.legacyOptimizations||!1,jc=window.Polymer&&window.Polymer.legacyWarnings||!1,wp=window.Polymer&&window.Polymer.syncInitialRender||!1,cs=window.Polymer&&window.Polymer.legacyUndefined||!1,xp=window.Polymer&&window.Polymer.orderedComputed||!1,Ks=!0;const Ap=function(e){Ks=e};let xa=window.Polymer&&window.Polymer.removeNestedTemplates||!1,kc=window.Polymer&&window.Polymer.fastDomIf||!1,us=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ur=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Sp=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Ep=0;const et=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=Ep++;function i(n){let s=n.__mixinSet;if(s&&s[r])return n;let o=t,a=o.get(n);if(!a){a=e(n),o.set(n,a);let l=Object.create(a.__mixinSet||s||null);l[r]=!0,a.__mixinSet=l}return a}return i};let Xs={},Bc={};function Aa(e,t){Xs[e]=Bc[e.toLowerCase()]=t}function Sa(e){return Xs[e]||Bc[e.toLowerCase()]}function Cp(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class vr extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,r){if(t){let i=Sa(t);return i&&r?i.querySelector(r):i}return null}attributeChangedCallback(t,r,i,n){r!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,r=lr(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ys(r)}return this.__assetpath}register(t){if(t=t||this.id,t){if(je&&Sa(t)!==void 0)throw Aa(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Aa(t,this),Cp(this)}}}vr.prototype.modules=Xs;customElements.define("dom-module",vr);const Pp="link[rel=import][type~=css]",Tp="include",Ea="shady-unscoped";function Zs(e){return vr.import(e)}function Ca(e){let t=e.body?e.body:e;const r=Ws(t.textContent,e.baseURI),i=document.createElement("style");return i.textContent=r,i}function $p(e){const t=e.trim().split(/\s+/),r=[];for(let i=0;i<t.length;i++)r.push(...Op(t[i]));return r}function Op(e){const t=Zs(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const r=[];r.push(...eo(t));const i=t.querySelector("template");i&&r.push(...to(i,t.assetpath)),t._styles=r}return t._styles}function to(e,t){if(!e._styles){const r=[],i=e.content.querySelectorAll("style");for(let n=0;n<i.length;n++){let s=i[n],o=s.getAttribute(Tp);o&&r.push(...$p(o).filter(function(a,l,u){return u.indexOf(a)===l})),t&&(s.textContent=Ws(s.textContent,t)),r.push(s)}e._styles=r}return e._styles}function Rp(e){let t=Zs(e);return t?eo(t):[]}function eo(e){const t=[],r=e.querySelectorAll(Pp);for(let i=0;i<r.length;i++){let n=r[i];if(n.import){const s=n.import,o=n.hasAttribute(Ea);if(o&&!s._unscopedStyle){const a=Ca(s);a.setAttribute(Ea,""),s._unscopedStyle=a}else s._style||(s._style=Ca(s));t.push(o?s._unscopedStyle:s._style)}}return t}function Np(e){let t=e.trim().split(/\s+/),r="";for(let i=0;i<t.length;i++)r+=Ip(t[i]);return r}function Ip(e){let t=Zs(e);if(t&&t._cssText===void 0){let r=Mp(t),i=t.querySelector("template");i&&(r+=Lp(i,t.assetpath)),t._cssText=r||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function Lp(e,t){let r="";const i=to(e,t);for(let n=0;n<i.length;n++){let s=i[n];s.parentNode&&s.parentNode.removeChild(s),r+=s.textContent}return r}function Mp(e){let t="",r=eo(e);for(let i=0;i<r.length;i++)t+=r[i].textContent;return t}function ds(e){return e.indexOf(".")>=0}function Dt(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Fc(e,t){return e.indexOf(t+".")===0}function wr(e,t){return t.indexOf(e+".")===0}function xr(e,t,r){return t+r.slice(e.length)}function Dp(e,t){return e===t||Fc(e,t)||wr(e,t)}function rr(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let i=e[r].toString().split(".");for(let n=0;n<i.length;n++)t.push(i[n])}return t.join(".")}else return e}function zc(e){return Array.isArray(e)?rr(e).split("."):e.toString().split(".")}function ot(e,t,r){let i=e,n=zc(t);for(let s=0;s<n.length;s++){if(!i)return;let o=n[s];i=i[o]}return r&&(r.path=n.join(".")),i}function Pa(e,t,r){let i=e,n=zc(t),s=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(i=i[a],!i)return}i[s]=r}else i[t]=r;return n.join(".")}const fi={},jp=/-[a-z]/g,kp=/([A-Z])/g;function ro(e){return fi[e]||(fi[e]=e.indexOf("-")<0?e:e.replace(jp,t=>t[1].toUpperCase()))}function an(e){return fi[e]||(fi[e]=e.replace(kp,"-$1").toLowerCase())}const Bp=Ht,Uc=et(e=>{class t extends e{static createProperties(i){const n=this.prototype;for(let s in i)s in n||n._createPropertyAccessor(s)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,n){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,n))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[i];return n||(n=this.constructor.attributeNameForProperty(i),this.__dataAttributes[n]=i),n}_definePropertyAccessor(i,n){Object.defineProperty(this,i,{get(){return this.__data[i]},set:n?function(){}:function(s){this._setPendingProperty(i,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,n){this._setPendingProperty(i,n)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,n,s){let o=this.__data[i],a=this._shouldPropertyChange(i,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=o),this.__data[i]=n,this.__dataPending[i]=n),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Bp.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,n=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(i,n,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,n,s)),this.__dataCounter--}_shouldPropertiesChange(i,n,s){return!!n}_propertiesChanged(i,n,s){}_shouldPropertyChange(i,n,s){return s!==n&&(s===s||n===n)}attributeChangedCallback(i,n,s,o){n!==s&&this._attributeToProperty(i,s),super.attributeChangedCallback&&super.attributeChangedCallback(i,n,s,o)}_attributeToProperty(i,n,s){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[i]||i;this[a]=this._deserializeValue(n,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,n,s){this.__serializing=!0,s=arguments.length<3?this[i]:s,this._valueToNodeAttribute(this,s,n||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,n,s){const o=this._serializeValue(n);(s==="class"||s==="name"||s==="slot")&&(i=N(i)),o===void 0?i.removeAttribute(s):i.setAttribute(s,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(i){return typeof i==="boolean"?i?"":void 0:i?.toString()}_deserializeValue(i,n){switch(n){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});const Hc={};let Hr=HTMLElement.prototype;for(;Hr;){let e=Object.getOwnPropertyNames(Hr);for(let t=0;t<e.length;t++)Hc[e[t]]=!0;Hr=Object.getPrototypeOf(Hr)}const Fp=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function zp(e,t){if(!Hc[t]){let r=e[t];r!==void 0&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}const qc=et(e=>{const t=Uc(e);class r extends t{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let s=0;s<n.length;s++)this.prototype._createPropertyAccessor(ro(n[s]))}static attributeNameForProperty(n){return an(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let s in n)this._setProperty(s,n[s])}_ensureAttribute(n,s){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,s,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Fp(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,s){let o;switch(s){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,s);break}return o}_definePropertyAccessor(n,s){zp(this,n),super._definePropertyAccessor(n,s)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return r});const Up={"dom-if":!0,"dom-repeat":!0};let Ta=!1,$a=!1;function Hp(){if(!Ta){Ta=!0;const e=document.createElement("textarea");e.placeholder="a",$a=e.placeholder===e.textContent}return $a}function qp(e){Hp()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Vp=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,r,i)=>{const n=r.getAttribute(i);if(e&&i.startsWith("on-")){t.setAttribute(i,e.createScript(n,i));return}t.setAttribute(i,n)}})();function Gp(e){let t=e.getAttribute("is");if(t&&Up[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;){const{name:i}=r.attributes[0];Vp(e,r,i),r.removeAttribute(i)}}return e}function Vc(e,t){let r=t.parentInfo&&Vc(e,t.parentInfo);if(r){for(let i=r.firstChild,n=0;i;i=i.nextSibling)if(t.parentIndex===n++)return i}else return e}function Jp(e,t,r,i){i.id&&(t[i.id]=r)}function Wp(e,t,r){if(r.events&&r.events.length)for(let i=0,n=r.events,s;i<n.length&&(s=n[i]);i++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function Yp(e,t,r,i){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=i)}function Qp(e,t,r){return e=e._methodHost||e,function(n){e[r]?e[r](n,n.detail):console.warn("listener method `"+r+"` not defined")}}const Kp=et(e=>{class t extends e{static _parseTemplate(i,n){if(!i._templateInfo){let s=i._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!n,s.stripWhiteSpace=n&&n.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,s,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,n,s){return this._parseTemplateNode(i.content,n,s)}static _parseTemplateNode(i,n,s){let o=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,s)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),qp(a),a.firstChild&&this._parseTemplateChildNodes(a,n,s),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,s)||o),o||s.noted}static _parseTemplateChildNodes(i,n,s){if(!(i.localName==="script"||i.localName==="style"))for(let o=i.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Gp(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)o.textContent+=h.textContent,l=h.nextSibling,i.removeChild(h),h=l;if(n.stripWhiteSpace&&!o.textContent.trim()){i.removeChild(o);continue}}let u={parentIndex:a,parentInfo:s};this._parseTemplateNode(o,n,u)&&(u.infoIndex=n.nodeInfoList.push(u)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(i,n,s){let o=i,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,n,s){let o=!1,a=Array.from(i.attributes);for(let l=a.length-1,u;u=a[l];l--)o=this._parseTemplateNodeAttribute(i,n,s,u.name,u.value)||o;return o}static _parseTemplateNodeAttribute(i,n,s,o,a){return o.slice(0,3)==="on-"?(i.removeAttribute(o),s.events=s.events||[],s.events.push({name:o.slice(3),value:a}),!0):o==="id"?(s.id=a,!0):!1}static _contentForTemplate(i){let n=i._templateInfo;return n&&n.content||i.content}_stampTemplate(i,n){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),n=n||this.constructor._parseTemplate(i);let s=n.nodeInfoList,o=n.content||i.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let u=0,h=s.length,m;u<h&&(m=s[u]);u++){let y=l[u]=Vc(a,m);Jp(this,a.$,y,m),Yp(this,y,m,n),Wp(this,y,m)}return a=a,a}_addMethodEventListenerToNode(i,n,s,o){o=o||i;let a=Qp(o,n,s);return this._addEventListenerToNode(i,n,a),a}_addEventListenerToNode(i,n,s){i.addEventListener(n,s)}_removeEventListenerFromNode(i,n,s){i.removeEventListener(n,s)}}return t});let Ar=0;const Sr=[],U={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Gc="__computeInfo",Xp=/[A-Z]/;function En(e,t,r){let i=e[t];if(!i)i=e[t]={};else if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),r))for(let n in i){let s=i[n],o=i[n]=Array(s.length);for(let a=0;a<s.length;a++)o[a]=s[a]}return i}function ir(e,t,r,i,n,s){if(t){let o=!1;const a=Ar++;for(let l in r){let u=n?Dt(l):l,h=t[u];if(h)for(let m=0,y=h.length,v;m<y&&(v=h[m]);m++)(!v.info||v.info.lastRun!==a)&&(!n||io(l,v.trigger))&&(v.info&&(v.info.lastRun=a),v.fn(e,l,r,i,v.info,n,s),o=!0)}return o}return!1}function Zp(e,t,r,i,n,s,o,a){let l=!1,u=o?Dt(i):i,h=t[u];if(h)for(let m=0,y=h.length,v;m<y&&(v=h[m]);m++)(!v.info||v.info.lastRun!==r)&&(!o||io(i,v.trigger))&&(v.info&&(v.info.lastRun=r),v.fn(e,i,n,s,v.info,o,a),l=!0);return l}function io(e,t){if(t){let r=t.name;return r==e||!!(t.structured&&Fc(r,e))||!!(t.wildcard&&wr(r,e))}else return!0}function Oa(e,t,r,i,n){let s=typeof n.method=="string"?e[n.method]:n.method,o=n.property;s?s.call(e,e.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function tf(e,t,r,i,n){let s=e[U.NOTIFY],o,a=Ar++;for(let u in t)t[u]&&(s&&Zp(e,s,a,u,r,i,n)||n&&ef(e,u,r))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ef(e,t,r){let i=Dt(t);if(i!==t){let n=an(i)+"-changed";return Jc(e,n,r[t],t),!0}return!1}function Jc(e,t,r,i){let n={value:r,queueProperty:!0};i&&(n.path=i),N(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function rf(e,t,r,i,n,s){let a=(s?Dt(t):t)!=t?t:null,l=a?ot(e,a):e.__data[t];a&&l===void 0&&(l=r[t]),Jc(e,n.eventName,l,a)}function nf(e,t,r,i,n){let s,o=e.detail,a=o&&o.path;a?(i=xr(r,i,a),s=o&&o.value):s=e.currentTarget[r],s=n?!s:s,(!t[U.READ_ONLY]||!t[U.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,s,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function sf(e,t,r,i,n){let s=e.__data[t];pi&&(s=pi(s,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,s)}function of(e,t,r,i){let n=e[U.COMPUTE];if(n)if(xp){Ar++;const s=lf(e),o=[];for(let l in t)Ra(l,n,o,s,i);let a;for(;a=o.shift();)Wc(e,"",t,r,a)&&Ra(a.methodInfo,n,o,s,i);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;ir(e,n,s,r,i);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const af=(e,t,r)=>{let i=0,n=t.length-1,s=-1;for(;i<=n;){const o=i+n>>1,a=r.get(t[o].methodInfo)-r.get(e.methodInfo);if(a<0)i=o+1;else if(a>0)n=o-1;else{s=o;break}}s<0&&(s=n+1),t.splice(s,0,e)},Ra=(e,t,r,i,n)=>{const s=n?Dt(e):e,o=t[s];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ar&&(!n||io(e,l.trigger))&&(l.info.lastRun=Ar,af(l.info,r,i))}};function lf(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[U.COMPUTE];let{counts:i,ready:n,total:s}=cf(e),o;for(;o=n.shift();){t.set(o,t.size);const a=r[o];a&&a.forEach(l=>{const u=l.info.methodInfo;--s,--i[u]===0&&n.push(u)})}s!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function cf(e){const t=e[Gc],r={},i=e[U.COMPUTE],n=[];let s=0;for(let o in t){const a=t[o];s+=r[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in i)t[o]||n.push(o);return{counts:r,ready:n,total:s}}function Wc(e,t,r,i,n){let s=hs(e,t,r,i,n);if(s===Sr)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function uf(e,t,r){let i=e.__dataLinkedPaths;if(i){let n;for(let s in i){let o=i[s];wr(s,t)?(n=xr(s,o,t),e._setPendingPropertyOrPath(n,r,!0,!0)):wr(o,t)&&(n=xr(o,s,t),e._setPendingPropertyOrPath(n,r,!0,!0))}}}function Cn(e,t,r,i,n,s,o){r.bindings=r.bindings||[];let a={kind:i,target:n,parts:s,literal:o,isCompound:s.length!==1};if(r.bindings.push(a),mf(a)){let{event:u,negate:h}=a.parts[0];a.listenerEvent=u||an(n)+"-changed",a.listenerNegate=h}let l=t.nodeInfoList.length;for(let u=0;u<a.parts.length;u++){let h=a.parts[u];h.compoundIndex=u,df(e,t,a,h,l)}}function df(e,t,r,i,n){if(!i.literal)if(r.kind==="attribute"&&r.target[0]==="-")console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,o={index:n,binding:r,part:i,evaluator:e};for(let a=0;a<s.length;a++){let l=s[a];typeof l=="string"&&(l=Qc(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:hf,info:o,trigger:l})}}}function hf(e,t,r,i,n,s,o){let a=o[n.index],l=n.binding,u=n.part;if(s&&u.source&&t.length>u.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let h=r[t];t=xr(u.source,l.target,t),a._setPendingPropertyOrPath(t,h,!1,!0)&&e._enqueueClient(a)}else{let h=n.evaluator._evaluateBinding(e,u,t,r,i,s);h!==Sr&&pf(e,a,l,u,h)}}function pf(e,t,r,i,n){if(n=ff(t,n,r,i),pi&&(n=pi(n,r.target,r.kind,t)),r.kind=="attribute")e._valueToNodeAttribute(t,n,r.target);else{let s=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[U.READ_ONLY]||!t[U.READ_ONLY][s])&&t._setPendingProperty(s,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,n)}}function ff(e,t,r,i){if(r.isCompound){let n=e.__dataCompoundStorage[r.target];n[i.compoundIndex]=t,t=n.join("")}return r.kind!=="attribute"&&(r.target==="textContent"||r.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function mf(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function _f(e,t){let{nodeList:r,nodeInfoList:i}=t;if(i.length)for(let n=0;n<i.length;n++){let s=i[n],o=r[n],a=s.bindings;if(a)for(let l=0;l<a.length;l++){let u=a[l];yf(o,u),gf(o,e,u)}o.__dataHost=e}}function yf(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,n=new Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o].literal;let s=t.target;r[s]=n,t.literal&&t.kind=="property"&&(s==="className"&&(e=N(e)),e[s]=t.literal)}}function gf(e,t,r){if(r.listenerEvent){let i=r.parts[0];e.addEventListener(r.listenerEvent,function(n){nf(n,t,r.target,i.source,i.negate)})}}function Na(e,t,r,i,n,s){s=t.static||s&&(typeof s!="object"||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:s};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,r,{fn:i,info:o,trigger:l});return s&&e._addPropertyEffect(t.methodName,r,{fn:i,info:o}),o}function hs(e,t,r,i,n){let s=e._methodHost||e,o=s[n.methodName];if(o){let a=e._marshalArgs(n.args,t,r);return a===Sr?Sr:o.apply(s,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const bf=[],Yc="(?:[a-zA-Z_$][\\w.:$\\-*]*)",vf="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",wf="(?:'(?:[^'\\\\]|\\\\.)*')",xf='(?:"(?:[^"\\\\]|\\\\.)*")',Af="(?:"+wf+"|"+xf+")",Ia="(?:("+Yc+"|"+vf+"|"+Af+")\\s*)",Sf="(?:"+Ia+"(?:,\\s*"+Ia+")*)",Ef="(?:\\(\\s*(?:"+Sf+"?)\\)\\s*)",Cf="("+Yc+"\\s*"+Ef+"?)",Pf="(\\[\\[|{{)\\s*",Tf="(?:]]|}})",$f="(?:(!)\\s*)?",Of=Pf+$f+Cf+Tf,La=new RegExp(Of,"g");function Ma(e){let t="";for(let r=0;r<e.length;r++){let i=e[r].literal;t+=i||""}return t}function Pn(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:bf};if(t[2].trim()){let n=t[2].replace(/\\,/g,"&comma;").split(",");return Rf(n,i)}else return i}return null}function Rf(e,t){return t.args=e.map(function(r){let i=Qc(r);return i.literal||(t.static=!1),i},this),t}function Qc(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0;break}return r.literal||(r.rootProperty=Dt(t),r.structured=ds(t),r.structured&&(r.wildcard=t.slice(-2)==".*",r.wildcard&&(r.name=t.slice(0,-2)))),r}function Da(e,t,r){let i=ot(e,r);return i===void 0&&(i=t[r]),i}function Kc(e,t,r,i){const n={indexSplices:i};cs&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(r+".splices",n),e.notifyPath(r+".length",t.length),cs&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function Qe(e,t,r,i,n,s){Kc(e,t,r,[{index:i,addedCount:n,removed:s,object:t,type:"splice"}])}function Nf(e){return e[0].toUpperCase()+e.substring(1)}const ln=et(e=>{const t=Kp(qc(e));class r extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return U}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ke.length){let n=Ke[Ke.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let s=this[U.READ_ONLY];for(let o in n)(!s||!s[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,s,o){this._createPropertyAccessor(n,s==U.READ_ONLY);let a=En(this,s,!0)[n];a||(a=this[s][n]=[]),a.push(o)}_removePropertyEffect(n,s,o){let a=En(this,s,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,s){let o=this[s];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,U.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,U.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,U.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,U.COMPUTE)}_setPendingPropertyOrPath(n,s,o,a){if(a||Dt(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=ot(this,n);if(n=Pa(this,n,s),!n||!super._shouldPropertyChange(n,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,s,o))return uf(this,n,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,s,o);this[n]=s}return!1}_setUnmanagedPropertyToNode(n,s,o){(o!==n[s]||typeof o=="object")&&(s==="className"&&(n=N(n)),n[s]=o)}_setPendingProperty(n,s,o){let a=this.__dataHasPaths&&ds(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,s,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=s:this.__data[n]=s,this.__dataPending[n]=s,(a||this[U.NOTIFY]&&this[U.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let s=0;s<n.length;s++){let o=n[s];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,s){for(let o in n)(s||!this[U.READ_ONLY]||!this[U.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,s,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;of(this,s,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,o,a),this._flushClients(),ir(this,this[U.REFLECT],s,o,a),ir(this,this[U.OBSERVE],s,o,a),l&&tf(this,l,s,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,s,o){this[U.PROPAGATE]&&ir(this,this[U.PROPAGATE],n,s,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,s,o)}_runEffectsForTemplate(n,s,o,a){const l=(u,h)=>{ir(this,n.propertyEffects,u,o,h,n.nodeList);for(let m=n.firstChild;m;m=m.nextSibling)this._runEffectsForTemplate(m,u,o,h)};n.runEffects?n.runEffects(l,s,a):l(s,a)}linkPaths(n,s){n=rr(n),s=rr(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=s}unlinkPaths(n){n=rr(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,s){let o={path:""},a=ot(this,n,o);Kc(this,a,o.path,s)}get(n,s){return ot(s||this,n)}set(n,s,o){o?Pa(o,n,s):(!this[U.READ_ONLY]||!this[U.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,s,!0)&&this._invalidateProperties()}push(n,...s){let o={path:""},a=ot(this,n,o),l=a.length,u=a.push(...s);return s.length&&Qe(this,a,o.path,l,s.length,[]),u}pop(n){let s={path:""},o=ot(this,n,s),a=!!o.length,l=o.pop();return a&&Qe(this,o,s.path,o.length,0,[l]),l}splice(n,s,o,...a){let l={path:""},u=ot(this,n,l);s<0?s=u.length-Math.floor(-s):s&&(s=Math.floor(s));let h;return arguments.length===2?h=u.splice(s):h=u.splice(s,o,...a),(a.length||h.length)&&Qe(this,u,l.path,s,a.length,h),h}shift(n){let s={path:""},o=ot(this,n,s),a=!!o.length,l=o.shift();return a&&Qe(this,o,s.path,0,0,[l]),l}unshift(n,...s){let o={path:""},a=ot(this,n,o),l=a.unshift(...s);return s.length&&Qe(this,a,o.path,0,s.length,[]),l}notifyPath(n,s){let o;if(arguments.length==1){let a={path:""};s=ot(this,n,a),o=a.path}else Array.isArray(n)?o=rr(n):o=n;this._setPendingPropertyOrPath(o,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,s){this._addPropertyEffect(n,U.READ_ONLY),s&&(this["_set"+Nf(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,s,o){let a={property:n,method:s,dynamicFn:!!o};this._addPropertyEffect(n,U.OBSERVE,{fn:Oa,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(s,U.OBSERVE,{fn:Oa,info:a,trigger:{name:s}})}_createMethodObserver(n,s){let o=Pn(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");Na(this,o,U.OBSERVE,hs,null,s)}_createNotifyingProperty(n){this._addPropertyEffect(n,U.NOTIFY,{fn:rf,info:{eventName:an(n)+"-changed",property:n}})}_createReflectedProperty(n){let s=this.constructor.attributeNameForProperty(n);s[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,U.REFLECT,{fn:sf,info:{attrName:s}})}_createComputedProperty(n,s,o){let a=Pn(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=Na(this,a,U.COMPUTE,Wc,n,o);En(this,Gc)[n]=l}_marshalArgs(n,s,o){const a=this.__data,l=[];for(let u=0,h=n.length;u<h;u++){let{name:m,structured:y,wildcard:v,value:E,literal:P}=n[u];if(!P)if(v){const I=wr(m,s),R=Da(a,o,I?s:m);E={path:I?s:m,value:R,base:I?ot(a,m):R}}else E=y?Da(a,o,m):a[m];if(cs&&!this._overrideLegacyUndefined&&E===void 0&&n.length>1)return Sr;l[u]=E}return l}static addPropertyEffect(n,s,o){this.prototype._addPropertyEffect(n,s,o)}static createPropertyObserver(n,s,o){this.prototype._createPropertyObserver(n,s,o)}static createMethodObserver(n,s){this.prototype._createMethodObserver(n,s)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,s){this.prototype._createReadOnlyProperty(n,s)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,s,o){this.prototype._createComputedProperty(n,s,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,s){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(s)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,u=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=u,u?u.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,s,o){let a=n.hostProps=n.hostProps||{};a[s]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[s]=l[s]||[]).push(o)}_stampTemplate(n,s){s=s||this._bindTemplate(n,!0),Ke.push(this);let o=super._stampTemplate(n,s);if(Ke.pop(),s.nodeList=o.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=s,_f(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const s=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=s;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),s.nextSibling=s.previousSibling=null;let u=s.childNodes;for(let h=0;h<u.length;h++){let m=u[h];N(N(m).parentNode).removeChild(m)}}static _parseTemplateNode(n,s,o){let a=t._parseTemplateNode.call(this,n,s,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,s);l&&(n.textContent=Ma(l)||" ",Cn(this,s,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,s,o,a,l){let u=this._parseBindings(l,s);if(u){let h=a,m="property";Xp.test(a)?m="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),m="attribute");let y=Ma(u);return y&&m=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(y+=" "+n.getAttribute(a)),n.setAttribute(a,y)),m=="attribute"&&h=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&h==="value"&&n.setAttribute(h,""),n.removeAttribute(h),m==="property"&&(a=ro(a)),Cn(this,s,o,m,a,u,y),!0}else return t._parseTemplateNodeAttribute.call(this,n,s,o,a,l)}static _parseTemplateNestedTemplate(n,s,o){let a=t._parseTemplateNestedTemplate.call(this,n,s,o);const l=n.parentNode,u=o.templateInfo,h=l.localName==="dom-if",m=l.localName==="dom-repeat";xa&&(h||m)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=u,o.noted=!0,a=!1);let y=u.hostProps;if(kc&&h)y&&(s.hostProps=Object.assign(s.hostProps||{},y),xa||(o.parentInfo.noted=!0));else{let v="{";for(let E in y){let P=[{mode:v,source:E,dependencies:[E],hostProp:!0}];Cn(this,s,o,"property","_host_"+E,P)}}return a}static _parseBindings(n,s){let o=[],a=0,l;for(;(l=La.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let u=l[1][0],h=!!l[2],m=l[3].trim(),y=!1,v="",E=-1;u=="{"&&(E=m.indexOf("::"))>0&&(v=m.substring(E+2),m=m.substring(0,E),y=!0);let P=Pn(m),I=[];if(P){let{args:R,methodName:$}=P;for(let S=0;S<R.length;S++){let w=R[S];w.literal||I.push(w)}let M=s.dynamicFns;(M&&M[$]||P.static)&&(I.push($),P.dynamicFn=!0)}else I.push(m);o.push({source:m,mode:u,negate:h,customEvent:y,signature:P,dependencies:I,event:v}),a=La.lastIndex}if(a&&a<n.length){let u=n.substring(a);u&&o.push({literal:u})}return o.length?o:null}static _evaluateBinding(n,s,o,a,l,u){let h;return s.signature?h=hs(n,o,a,l,s.signature):o!=s.source?h=ot(n,s.source):u&&ds(o)?h=ot(n,o):h=n.__data[o],s.negate&&(h=!h),h}}return r}),Ke=[];function If(e){const t={};for(let r in e){const i=e[r];t[r]=typeof i=="function"?{type:i}:i}return t}const Lf=et(e=>{const t=Uc(e);function r(s){const o=Object.getPrototypeOf(s);return o.prototype instanceof n?o:null}function i(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let o=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(o=If(a))}s.__ownProperties=o}return s.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=r(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=i(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=r(this);this.__properties=Object.assign({},o&&o._properties,i(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});const Mf="3.5.2",ps=window.ShadyCSS&&window.ShadyCSS.cssBuild,cn=et(e=>{const t=Lf(ln(e));function r(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let u=l._properties;for(let h in u){let m=u[h];"value"in m&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=m)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,u,h,m){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(u)?console.warn(`Cannot redefine computed property '${u}'.`):l._createComputedProperty(u,h.computed,m)),h.readOnly&&!l._hasReadOnlyEffect(u)?l._createReadOnlyProperty(u,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(u)&&console.warn(`Cannot make readOnly property '${u}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(u)?l._createReflectedProperty(u):h.reflectToAttribute===!1&&l._hasReflectEffect(u)&&console.warn(`Cannot make reflected property '${u}' non-reflected.`),h.notify&&!l._hasNotifyEffect(u)?l._createNotifyingProperty(u):h.notify===!1&&l._hasNotifyEffect(u)&&console.warn(`Cannot make notify property '${u}' non-notify.`),h.observer&&l._createPropertyObserver(u,h.observer,m[h.observer]),l._addPropertyToAttributeMap(u)}function s(l,u,h,m){if(!ps){const y=u.content.querySelectorAll("style"),v=to(u),E=Rp(h),P=u.content.firstElementChild;for(let R=0;R<E.length;R++){let $=E[R];$.textContent=l._processStyleText($.textContent,m),u.content.insertBefore($,P)}let I=0;for(let R=0;R<v.length;R++){let $=v[R],M=y[I];M!==$?($=$.cloneNode(!0),M.parentNode.insertBefore($,M)):I++,$.textContent=l._processStyleText($.textContent,m)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(u,h),Sp&&ps&&yp){const y=u.content.querySelectorAll("style");if(y){let v="";Array.from(y).forEach(E=>{v+=E.textContent,E.parentNode.removeChild(E)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(v)}}}function o(l){let u=null;if(l&&(!je||vp)&&(u=vr.import(l,"template"),je&&!u))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return u}class a extends t{static get polymerElementVersion(){return Mf}static _finalizeClass(){t._finalizeClass.call(this);const u=i(this);u&&this.createObservers(u,this._properties),this._prepareTemplate()}static _prepareTemplate(){let u=this.template;u&&(typeof u=="string"?(console.error("template getter must return HTMLTemplateElement"),u=null):br||(u=u.cloneNode(!0))),this.prototype._template=u}static createProperties(u){for(let h in u)n(this.prototype,h,u[h],u)}static createObservers(u,h){const m=this.prototype;for(let y=0;y<u.length;y++)m._createMethodObserver(u[y],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let u=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof u=="function"&&(u=u()),this._template=u!==void 0?u:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(u){this._template=u}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const u=this.importMeta;if(u)this._importPath=Ys(u.url);else{const h=vr.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=gp,this.importPath=this.constructor.importPath;let u=r(this.constructor);if(u)for(let h in u){let m=u[h];if(this._canApplyPropertyDefault(h)){let y=typeof m.value=="function"?m.value.call(this):m.value;this._hasAccessor(h)?this._setPendingProperty(h,y,!0):this[h]=y}}}_canApplyPropertyDefault(u){return!this.hasOwnProperty(u)}static _processStyleText(u,h){return Ws(u,h)}static _finalizeTemplate(u){const h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;const m=this.importPath,y=m?lr(m):"";s(this,h,u,y),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(u){const h=N(this);if(h.attachShadow)return u?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:u}),h.shadowRoot.appendChild(u),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),wp&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(u){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,u)}resolveUrl(u,h){return!h&&this.importPath&&(h=lr(this.importPath)),lr(u,h)}static _parseTemplateContent(u,h,m){return h.dynamicFns=h.dynamicFns||this._properties,t._parseTemplateContent.call(this,u,h,m)}static _addTemplatePropertyEffect(u,h,m){return jc&&!(h in this._properties)&&!(m.info.part.signature&&m.info.part.signature.static)&&!m.info.part.hostProp&&!u.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,u,h,m)}}return a});const ja=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Xc{constructor(t,r){tu(t,r);const i=r.reduce((n,s,o)=>n+Zc(s)+t[o+1],t[0]);this.value=i.toString()}toString(){return this.value}}function Zc(e){if(e instanceof Xc)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Df(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Xc)return Zc(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const pe=function(t,...r){tu(t,r);const i=document.createElement("template");let n=r.reduce((s,o,a)=>s+Df(o)+t[a+1],t[0]);return ja&&(n=ja.createHTML(n)),i.innerHTML=n,i},tu=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};const jt=cn(HTMLElement);const no=et(e=>class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(r=>{r.hostConnected&&r.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(r=>{r.hostDisconnected&&r.hostDisconnected()})}addController(r){this.__controllers.add(r),this.$!==void 0&&this.isConnected&&r.hostConnected&&r.hostConnected()}removeController(r){this.__controllers.delete(r)}}),jf=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ni=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function kf(){function e(){return!0}return eu(e)}function Bf(){try{return Ff()?!0:zf()?ni?!Uf():!kf():!1}catch{return!1}}function Ff(){return localStorage.getItem("vaadin.developmentmode.force")}function zf(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Uf(){return!!(ni&&Object.keys(ni).map(t=>ni[t]).filter(t=>t.productionMode).length>0)}function eu(e,t){if(typeof e!="function")return;const r=jf.exec(e.toString());if(r)try{e=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const ka=function(e,t){if(window.Vaadin.developmentMode)return eu(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Bf());function Hf(){}const qf=function(){if(typeof ka=="function")return ka(Hf)};let Ba=0,ru=0;const Te=[];let Fa=0,fs=!1;const iu=document.createTextNode("");new window.MutationObserver(Vf).observe(iu,{characterData:!0});function Vf(){fs=!1;const e=Te.length;for(let t=0;t<e;t++){const r=Te[t];if(r)try{r()}catch(i){setTimeout(()=>{throw i})}}Te.splice(0,e),ru+=e}const Gf={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Jf={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Wf={run(e){fs||(fs=!0,iu.textContent=Fa,Fa+=1),Te.push(e);const t=Ba;return Ba+=1,t},cancel(e){const t=e-ru;if(t>=0){if(!Te[t])throw new Error(`invalid async handle: ${e}`);Te[t]=null}}};let nu=class ms{static debounce(t,r,i){return t instanceof ms?t._cancelAsync():t=new ms,t.setConfig(r,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,r){this._asyncModule=t,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,_s.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),_s.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}},_s=new Set;function Yf(e){_s.add(e)}class $e{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let r="reverse";return t.scrollLeft>0?r="default":(t.scrollLeft=2,t.scrollLeft<2&&(r="negative")),document.body.removeChild(t),r}static getNormalizedScrollLeft(t,r,i){const{scrollLeft:n}=i;if(r!=="rtl"||!t)return n;switch(t){case"negative":return i.scrollWidth-i.clientWidth+n;case"reverse":return i.scrollWidth-i.clientWidth-n;default:return n}}static setNormalizedScrollLeft(t,r,i,n){if(r!=="rtl"||!t){i.scrollLeft=n;return}switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+n;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-n;break;default:i.scrollLeft=n;break}}}const Ot=[];function Qf(){const e=gs();Ot.forEach(t=>{ys(t,e)})}let qr;const Kf=new MutationObserver(Qf);Kf.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function ys(e,t,r=e.getAttribute("dir")){t?e.setAttribute("dir",t):r!=null&&e.removeAttribute("dir")}function gs(){return document.documentElement.getAttribute("dir")}const Xf=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:r=>r||"",toAttribute:r=>r===""?null:r}}}}static finalize(){super.finalize(),qr||(qr=$e.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),ys(this,gs(),null))}attributeChangedCallback(r,i,n){if(super.attributeChangedCallback(r,i,n),r!=="dir")return;const s=gs(),o=n===s&&Ot.indexOf(this)===-1,a=!n&&i&&Ot.indexOf(this)===-1;o||a?(this.__subscribe(),ys(this,s,n)):n!==s&&i===s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ot.includes(this),this.__unsubscribe()}_valueToNodeAttribute(r,i,n){n==="dir"&&i===""&&!r.hasAttribute("dir")||super._valueToNodeAttribute(r,i,n)}_attributeToProperty(r,i,n){r==="dir"&&!i?this.dir="":super._attributeToProperty(r,i,n)}__subscribe(){Ot.includes(this)||Ot.push(this)}__unsubscribe(){Ot.includes(this)&&Ot.splice(Ot.indexOf(this),1)}__getNormalizedScrollLeft(r){return $e.getNormalizedScrollLeft(qr,this.getAttribute("dir")||"ltr",r)}__setNormalizedScrollLeft(r,i){return $e.setNormalizedScrollLeft(qr,this.getAttribute("dir")||"ltr",r,i)}};Ap(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){qf()};let Tn;const za=new Set,Ue=e=>class extends Xf(e){static get version(){return"23.6.4"}static finalize(){super.finalize();const{is:r}=this;r&&!za.has(r)&&(window.Vaadin.registrations.push(this),za.add(r),window.Vaadin.developmentModeCallback&&(Tn=nu.debounce(Tn,Jf,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Yf(Tn)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};let so=!1;window.addEventListener("keydown",()=>{so=!0},{capture:!0});window.addEventListener("mousedown",()=>{so=!1},{capture:!0});function Zf(){return so}function su(e){const t=e.style;if(t.visibility==="hidden"||t.display==="none")return!0;const r=window.getComputedStyle(e);return r.visibility==="hidden"||r.display==="none"}function tm(e){if(!im(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}function em(e,t){const r=Math.max(e.tabIndex,0),i=Math.max(t.tabIndex,0);return r===0||i===0?i>r:r>i}function rm(e,t){const r=[];for(;e.length>0&&t.length>0;)em(e[0],t[0])?r.push(t.shift()):r.push(e.shift());return r.concat(e,t)}function bs(e){const t=e.length;if(t<2)return e;const r=Math.ceil(t/2),i=bs(e.slice(0,r)),n=bs(e.slice(r));return rm(i,n)}function ou(e,t){if(e.nodeType!==Node.ELEMENT_NODE||su(e))return!1;const r=e,i=tm(r);let n=i>0;i>=0&&t.push(r);let s=[];return r.localName==="slot"?s=r.assignedNodes({flatten:!0}):s=(r.shadowRoot||r).children,[...s].forEach(o=>{n=ou(o,t)||n}),n}function Ua(e){return e.offsetParent===null&&e.clientWidth===0&&e.clientHeight===0?!0:su(e)}function im(e){return e.matches('[tabindex="-1"]')?!1:e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function au(e){return e.getRootNode().activeElement===e}function nm(e){const t=[];return ou(e,t)?bs(t):t}const $n=[];class sm{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");$n.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,$n.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from($n).pop()&&t.key==="Tab"){t.preventDefault();const r=t.shiftKey;this.__focusNextElement(r)}}__focusNextElement(t=!1){const r=this.__focusableElements,i=t?-1:1,n=this.__focusedElementIndex,s=(r.length+n+i)%r.length,o=r[s];o.focus(),o.localName==="input"&&o.select()}get __focusableElements(){return nm(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(au).pop())}}class Ha extends Ue(ze(no(jt))){static get template(){return pe`
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
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new sm(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),fp(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new It(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new It(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new It(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,r){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):r&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,r=this.$.drawer;t===0?r.setAttribute("hidden",""):r.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const r=this.$.navbarTop.getBoundingClientRect(),n=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${r.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${n.height}px`);const o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${o.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:r}=this.$.drawer,i=t>r?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",i)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,r){r&&window.removeEventListener(r,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",r=this.querySelectorAll('[slot*="navbar"]');r.length>0&&Array.from(r).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),t&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Dc(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(Ha.is,Ha);const om=lt`
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
`,lu=document.createElement("template");lu.innerHTML=`<style>${om.toString().replace(":host","html")}</style>`;document.head.appendChild(lu.content);const am=lt`
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
`;lt`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const cu=document.createElement("template");cu.innerHTML=`<style>${am.toString().replace(":host","html")}$</style>`;document.head.appendChild(cu.content);Mt("vaadin-tab",lt`
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
  `,{moduleId:"lumo-tab"});let lm=0;function cm(){return lm++}class oo extends EventTarget{static generateId(t,r){return`${t||"default"}-${r.localName}-${cm()}`}constructor(t,r,i,n,s){super(),this.host=t,this.slotName=r,this.slotFactory=i,this.slotInitializer=n,s&&(this.defaultId=oo.generateId(r,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:r,slotFactory:i}=this;let n=this.defaultNode;return!n&&i&&(n=i(t),n instanceof Element&&(r!==""&&n.setAttribute("slot",r),this.node=n,this.defaultNode=n)),n&&t.appendChild(n),n}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(r=>r.nodeType===Node.ELEMENT_NODE&&r.slot===t||r.nodeType===Node.TEXT_NODE&&r.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:r}=this;r&&r(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,r=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(r);this.__slotObserver=new It(i,n=>{const s=this.node,o=n.addedNodes.find(a=>a!==s);n.removedNodes.length&&n.removedNodes.forEach(a=>{this.teardownNode(a)}),o&&(s&&s.isConnected&&this.host.removeChild(s),this.node=o,o!==this.defaultNode&&(this.initCustomNode(o),this.initNode(o)))})}}class uu extends oo{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const r=this.node;r&&(r.context=t)}setManual(t){this.manual=t;const r=this.node;r&&(r.manual=t)}setOpened(t){this.opened=t;const r=this.node;r&&(r.opened=t)}setPosition(t){this.position=t;const r=this.node;r&&(r._position=t)}setShouldShow(t){this.shouldShow=t;const r=this.node;r&&(r.shouldShow=t)}setTarget(t){this.target=t;const r=this.node;r&&(r.target=t)}}const du=et(e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(r){this._setAriaDisabled(r)}_setAriaDisabled(r){r?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});const um=e=>e,hu=typeof document.head.style.touchAction=="string",vs="__polymerGestures",On="__polymerGesturesHandled",ws="__polymerGesturesTouchAction",qa=25,Va=5,dm=2,hm=["mousedown","mousemove","mouseup","click"],pm=[0,1,4,2],fm=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function ao(e){return hm.indexOf(e)>-1}let mm=!1;(function(){try{const e=Object.defineProperty({},"passive",{get(){mm=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function _m(e){ao(e)}const ym=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),gm={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function oe(e){const t=e.type;if(!ao(t))return!1;if(t==="mousemove"){let i=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!fm&&(i=pm[e.which]||0),!!(i&1)}return(e.button===void 0?0:e.button)===0}function bm(e){if(e.type==="click"){if(e.detail===0)return!0;const t=qt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const r=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}const Rt={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function vm(e){let t="auto";const r=fu(e);for(let i=0,n;i<r.length;i++)if(n=r[i],n[ws]){t=n[ws];break}return t}function pu(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Oe(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const fu=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],lo={},ne=[];function wm(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(r=i)}return r}function qt(e){const t=fu(e);return t.length>0?t[0]:e.target}function xm(e){const t=e.type,i=e.currentTarget[vs];if(!i)return;const n=i[t];if(!n)return;if(!e[On]&&(e[On]={},t.startsWith("touch"))){const o=e.changedTouches[0];if(t==="touchstart"&&e.touches.length===1&&(Rt.touch.id=o.identifier),Rt.touch.id!==o.identifier)return;hu||(t==="touchstart"||t==="touchmove")&&Am(e)}const s=e[On];if(!s.skip){for(let o=0,a;o<ne.length;o++)a=ne[o],n[a.name]&&!s[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<ne.length;o++)a=ne[o],n[a.name]&&!s[a.name]&&(s[a.name]=!0,a[t](e))}}function Am(e){const t=e.changedTouches[0],r=e.type;if(r==="touchstart")Rt.touch.x=t.clientX,Rt.touch.y=t.clientY,Rt.touch.scrollDecided=!1;else if(r==="touchmove"){if(Rt.touch.scrollDecided)return;Rt.touch.scrollDecided=!0;const i=vm(e);let n=!1;const s=Math.abs(Rt.touch.x-t.clientX),o=Math.abs(Rt.touch.y-t.clientY);e.cancelable&&(i==="none"?n=!0:i==="pan-x"?n=o>s:i==="pan-y"&&(n=s>o)),n?e.preventDefault():mi("track")}}function cr(e,t,r){return lo[t]?(Sm(e,t,r),!0):!1}function Sm(e,t,r){const i=lo[t],n=i.deps,s=i.name;let o=e[vs];o||(e[vs]=o={});for(let a=0,l,u;a<n.length;a++)l=n[a],!(ym&&ao(l)&&l!=="click")&&(u=o[l],u||(o[l]=u={_count:0}),u._count===0&&e.addEventListener(l,xm,_m(l)),u[s]=(u[s]||0)+1,u._count=(u._count||0)+1);e.addEventListener(t,r),i.touchAction&&Cm(e,i.touchAction)}function co(e){ne.push(e);for(let t=0;t<e.emits.length;t++)lo[e.emits[t]]=e}function Em(e){for(let t=0,r;t<ne.length;t++){r=ne[t];for(let i=0,n;i<r.emits.length;i++)if(n=r.emits[i],n===e)return r}return null}function Cm(e,t){hu&&e instanceof HTMLElement&&Wf.run(()=>{e.style.touchAction=t}),e[ws]=t}function uo(e,t,r){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,um(e).dispatchEvent(i),i.defaultPrevented){const n=r.preventer||r.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function mi(e){const t=Em(e);t.info&&(t.info.prevent=!0)}co({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Oe(this.info)},mousedown(e){if(!oe(e))return;const t=qt(e),r=this,i=s=>{oe(s)||(Xe("up",t,s),Oe(r.info))},n=s=>{oe(s)&&Xe("up",t,s),Oe(r.info)};pu(this.info,i,n),Xe("down",t,e)},touchstart(e){Xe("down",qt(e),e.changedTouches[0],e)},touchend(e){Xe("up",qt(e),e.changedTouches[0],e)}});function Xe(e,t,r,i){t&&uo(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent(n){return mi(n)}})}co({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>dm&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Oe(this.info)},mousedown(e){if(!oe(e))return;const t=qt(e),r=this,i=s=>{const o=s.clientX,a=s.clientY;Ga(r.info,o,a)&&(r.info.state=r.info.started?s.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&mi("tap"),r.info.addMove({x:o,y:a}),oe(s)||(r.info.state="end",Oe(r.info)),t&&Rn(r.info,t,s),r.info.started=!0)},n=s=>{r.info.started&&i(s),Oe(r.info)};pu(this.info,i,n),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=qt(e),r=e.changedTouches[0],i=r.clientX,n=r.clientY;Ga(this.info,i,n)&&(this.info.state==="start"&&mi("tap"),this.info.addMove({x:i,y:n}),Rn(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend(e){const t=qt(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Rn(this.info,t,r))}});function Ga(e,t,r){if(e.prevent)return!1;if(e.started)return!0;const i=Math.abs(e.x-t),n=Math.abs(e.y-r);return i>=Va||n>=Va}function Rn(e,t,r){if(!t)return;const i=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],s=n.x-e.x,o=n.y-e.y;let a,l=0;i&&(a=n.x-i.x,l=n.y-i.y),uo(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover(){return wm(r.clientX,r.clientY)}})}co({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){oe(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){oe(e)&&Ja(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){Ja(this.info,e.changedTouches[0],e)}});function Ja(e,t,r){const i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),s=qt(r||t);!s||gm[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=qa&&n<=qa||bm(t))&&(e.prevent||uo(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}const mu=et(e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",r=>{this._onKeyDown(r)}),this.addEventListener("keyup",r=>{this._onKeyUp(r)})}_onKeyDown(r){switch(r.key){case"Enter":this._onEnter(r);break;case"Escape":this._onEscape(r);break}}_onKeyUp(r){}_onEnter(r){}_onEscape(r){}});const _u=e=>class extends du(mu(e)){get _activeKeys(){return[" "]}ready(){super.ready(),cr(this,"down",r=>{this._shouldSetActive(r)&&this._setActive(!0)}),cr(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(r){return!this.disabled}_onKeyDown(r){super._onKeyDown(r),this._shouldSetActive(r)&&this._activeKeys.includes(r.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(r){this.toggleAttribute("active",r)}};const yu=et(e=>class extends e{get _keyboardActive(){return Zf()}ready(){this.addEventListener("focusin",r=>{this._shouldSetFocus(r)&&this._setFocused(!0)}),this.addEventListener("focusout",r=>{this._shouldRemoveFocus(r)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(r){this.toggleAttribute("focused",r),this.toggleAttribute("focus-ring",r&&this._keyboardActive)}_shouldSetFocus(r){return!0}_shouldRemoveFocus(r){return!0}});const Pm=e=>class extends _u(yu(e)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(r){this._value=r}ready(){super.ready();const r=this.getAttribute("value");r!==null&&(this.value=r)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(r){return!this.disabled&&!(r.type==="keydown"&&r.defaultPrevented)}_selectedChanged(r){this.setAttribute("aria-selected",r)}_disabledChanged(r){super._disabledChanged(r),r&&(this.selected=!1,this.blur())}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&!r.defaultPrevented&&(r.preventDefault(),this.click())}};class Wa extends Ue(ze(Pm(no(jt)))){static get template(){return pe`
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
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new uu(this),this.addController(this._tooltipController)}_onKeyUp(t){const r=this.hasAttribute("active");if(super._onKeyUp(t),r){const i=this.querySelector("a");i&&i.click()}}}customElements.define(Wa.is,Wa);const gu=document.createElement("template");gu.innerHTML=`
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
`;document.head.appendChild(gu.content);Mt("vaadin-tabs",lt`
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
  `,{moduleId:"lumo-tabs"});const Vr=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(t=>{t.target.resizables?t.target.resizables.forEach(r=>{r._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Tm=et(e=>class extends e{connectedCallback(){if(super.connectedCallback(),Vr.observe(this),this._observeParent){const r=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;r.resizables||(r.resizables=new Set,Vr.observe(r)),r.resizables.add(this),this.__parent=r}}disconnectedCallback(){super.disconnectedCallback(),Vr.unobserve(this);const r=this.__parent;if(this._observeParent&&r){const i=r.resizables;i&&(i.delete(this),i.size===0&&Vr.unobserve(r)),this.__parent=null}}get _observeParent(){return!1}_onResize(r){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});const $m=e=>class extends mu(e){focus(){const r=this._getItems();if(Array.isArray(r)){const i=this._getAvailableIndex(r,0,null,n=>!Ua(n));i>=0&&r[i].focus()}}get focused(){return(this._getItems()||[]).find(au)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(r){if(super._onKeyDown(r),r.metaKey||r.ctrlKey)return;const{key:i}=r,n=this._getItems()||[],s=n.indexOf(this.focused);let o,a;const u=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(i)?(a=-u,o=s-u):this.__isNextKey(i)?(a=u,o=s+u):i==="Home"?(a=1,o=0):i==="End"&&(a=-1,o=n.length-1),o=this._getAvailableIndex(n,o,a,h=>!Ua(h)),o>=0&&(r.preventDefault(),this._focus(o,!0))}__isPrevKey(r){return this._vertical?r==="ArrowUp":r==="ArrowLeft"}__isNextKey(r){return this._vertical?r==="ArrowDown":r==="ArrowRight"}_focus(r,i=!1){const n=this._getItems();this._focusItem(n[r],i)}_focusItem(r){r&&(r.focus(),r.setAttribute("focus-ring",""))}_getAvailableIndex(r,i,n,s){const o=r.length;let a=i;for(let l=0;typeof a=="number"&&l<o;l+=1,a+=n||1){a<0?a=o-1:a>=o&&(a=0);const u=r[a];if(!u.hasAttribute("disabled")&&this.__isMatchingItem(u,s))return a}return-1}__isMatchingItem(r,i){return typeof i=="function"?i(r):!0}};const Om=e=>class extends $m(e){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",r=>this._onClick(r)),this._observer=new It(this,()=>{this._setItems(this._filterItems(It.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(r,i,n,s){if(!s&&r){this.setAttribute("aria-orientation",i||"vertical"),this.items.forEach(a=>{i?a.setAttribute("orientation",i):a.removeAttribute("orientation")}),this._setFocusable(n||0);const o=r[n];r.forEach(a=>{a.selected=a===o}),o&&!o.disabled&&this._scrollToItem(n)}}_filterItems(r){return r.filter(i=>i._hasVaadinItemMixin)}_onClick(r){if(r.metaKey||r.shiftKey||r.ctrlKey||r.defaultPrevented)return;const i=this._filterItems(r.composedPath())[0];let n;i&&!i.disabled&&(n=this.items.indexOf(i))>=0&&(this.selected=n)}_searchKey(r,i){this._searchReset=nu.debounce(this._searchReset,Gf.after(500),()=>{this._searchBuf=""}),this._searchBuf+=i.toLowerCase(),this.items.some(s=>this.__isMatchingKey(s))||(this._searchBuf=i.toLowerCase());const n=this._searchBuf.length===1?r+1:r;return this._getAvailableIndex(this.items,n,1,s=>this.__isMatchingKey(s)&&getComputedStyle(s).display!=="none")}__isMatchingKey(r){return r.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeyDown(r){if(r.metaKey||r.ctrlKey)return;const i=r.key,n=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(i)&&i.length===1){const s=this._searchKey(n,i);s>=0&&this._focus(s);return}super._onKeyDown(r)}_isItemHidden(r){return getComputedStyle(r).display==="none"}_setFocusable(r){r=this._getAvailableIndex(this.items,r,1);const i=this.items[r];this.items.forEach(n=>{n.tabIndex=n===i?0:-1})}_focus(r){this.items.forEach((i,n)=>{i.focused=n===r}),this._setFocusable(r),this._scrollToItem(r),super._focus(r)}focus(){this._observer&&this._observer.flush();const r=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(r)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(r){const i=this.items[r];if(!i)return;const n=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],s=this._scrollerElement.getBoundingClientRect(),o=(this.items[r+1]||i).getBoundingClientRect(),a=(this.items[r-1]||i).getBoundingClientRect();let l=0;!this._isRTL&&o[n[1]]>=s[n[1]]||this._isRTL&&o[n[1]]<=s[n[1]]?l=o[n[1]]-s[n[1]]:(!this._isRTL&&a[n[0]]<=s[n[0]]||this._isRTL&&a[n[0]]>=s[n[0]])&&(l=a[n[0]]-s[n[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(r){if(this._vertical)this._scrollerElement.scrollTop+=r;else{const i=this.getAttribute("dir")||"ltr",n=$e.detectScrollType(),s=$e.getNormalizedScrollLeft(n,i,this._scrollerElement)+r;$e.setNormalizedScrollLeft(n,i,this._scrollerElement,s)}}};class Ya extends Tm(Ue(Om(ze(jt)))){static get template(){return pe`
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
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Dc(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(r=>{this.__itemsResizeObserver.observe(r)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),r=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=Math.floor(t)>1?"start":"";Math.ceil(t)<Math.ceil(r-this._scrollOffset)&&(i+=" end"),this.__direction===1&&(i=i.replace(/start|end/gi,n=>n==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}}customElements.define(Ya.is,Ya);const Rm=lt`
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
`;Mt("vaadin-button",Rm,{moduleId:"lumo-button"});const Nm=e=>class extends du(e){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(r,i){super._disabledChanged(r,i),r?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(r){this.disabled&&r!==-1&&(this._lastTabIndex=r,this.tabindex=-1)}};const Im=e=>class extends _u(Nm(yu(e))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&(r.preventDefault(),this.click())}};class Qa extends Im(Ue(ze(no(jt)))){static get is(){return"vaadin-button"}static get template(){return pe`
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
    `}ready(){super.ready(),this._tooltipController=new uu(this),this.addController(this._tooltipController)}}customElements.define(Qa.is,Qa);const un=!(window.ShadyDOM&&window.ShadyDOM.inUse);let _i;function Ka(e){e&&e.shimcssproperties?_i=!1:_i=un||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Er;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Er=window.ShadyCSS.cssBuild);const bu=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?_i=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ka(window.ShadyCSS),window.ShadyCSS=void 0):Ka(window.WebComponents&&window.WebComponents.flags);const ho=_i;class Xa{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function vu(e){return e=Lm(e),wu(Mm(e),e)}function Lm(e){return e.replace(Lt.comments,"").replace(Lt.port,"")}function Mm(e){let t=new Xa;t.start=0,t.end=e.length;let r=t;for(let i=0,n=e.length;i<n;i++)if(e[i]===Au){r.rules||(r.rules=[]);let s=r,o=s.rules[s.rules.length-1]||null;r=new Xa,r.start=i+1,r.parent=s,r.previous=o,s.rules.push(r)}else e[i]===Su&&(r.end=i+1,r=r.parent||t);return t}function wu(e,t){let r=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let n=e.previous?e.previous.end:e.parent.start;r=t.substring(n,e.start-1),r=Dm(r),r=r.replace(Lt.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=r.trim();e.atRule=s.indexOf(Um)===0,e.atRule?s.indexOf(zm)===0?e.type=Ee.MEDIA_RULE:s.match(Lt.keyframesRule)&&(e.type=Ee.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Lt.multipleSpaces).pop()):s.indexOf(Eu)===0?e.type=Ee.MIXIN_RULE:e.type=Ee.STYLE_RULE}let i=e.rules;if(i)for(let n=0,s=i.length,o;n<s&&(o=i[n]);n++)wu(o,t);return e}function Dm(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],r=6-t.length;for(;r--;)t="0"+t;return"\\"+t})}function xu(e,t,r=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!jm(n))for(let s=0,o=n.length,a;s<o&&(a=n[s]);s++)i=xu(a,t,i);else i=t?e.cssText:km(e.cssText),i=i.trim(),i&&(i="  "+i+`
`)}return i&&(e.selector&&(r+=e.selector+" "+Au+`
`),r+=i,e.selector&&(r+=Su+`

`)),r}function jm(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(Eu)===0}function km(e){return e=Bm(e),Fm(e)}function Bm(e){return e.replace(Lt.customProp,"").replace(Lt.mixinProp,"")}function Fm(e){return e.replace(Lt.mixinApply,"").replace(Lt.varApply,"")}const Ee={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Au="{",Su="}",Lt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Eu="--",zm="@media",Um="@";const xs=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,yi=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;const Za=new Set,Hm="shady-unscoped";function qm(e){const t=e.textContent;if(!Za.has(t)){Za.add(t);const r=document.createElement("style");r.setAttribute("shady-unscoped",""),r.textContent=t,document.head.appendChild(r)}}function Vm(e){return e.hasAttribute(Hm)}function As(e,t){return e?(typeof e=="string"&&(e=vu(e)),xu(e,ho)):""}function tl(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=vu(e.textContent)),e.__cssRules||null}function si(e,t,r,i){if(!e)return;let n=!1,s=e.type;s===Ee.STYLE_RULE?t(e):s===Ee.MIXIN_RULE&&(n=!0);let o=e.rules;if(o&&!n)for(let a=0,l=o.length,u;a<l&&(u=o[a]);a++)si(u,t)}function Gm(e,t){let r=0;for(let i=t,n=e.length;i<n;i++)if(e[i]==="(")r++;else if(e[i]===")"&&--r===0)return i;return-1}function Cu(e,t){let r=e.indexOf("var(");if(r===-1)return t(e,"","","");let i=Gm(e,r+3),n=e.substring(r+4,i),s=e.substring(0,r),o=Cu(e.substring(i+1),t),a=n.indexOf(",");if(a===-1)return t(s,n.trim(),"",o);let l=n.substring(0,a).trim(),u=n.substring(a+1).trim();return t(s,l,u,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function Jm(e){let t=e.localName,r="",i="";return t?t.indexOf("-")>-1?r=t:(i=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,i=e.extends),{is:r,typeExtension:i}}function Wm(e){const t=[],r=e.querySelectorAll("style");for(let i=0;i<r.length;i++){const n=r[i];Vm(n)?un||(qm(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}const Pu="css-build";function Ym(e){if(Er!==void 0)return Er;if(e.__cssBuild===void 0){const t=e.getAttribute(Pu);if(t)e.__cssBuild=t;else{const r=Qm(e);r!==""&&Km(e),e.__cssBuild=r}}return e.__cssBuild||""}function el(e){return Ym(e)!==""}function Qm(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const r=t.textContent.trim().split(":");if(r[0]===Pu)return r[1]}return""}function Km(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}function Ss(e,t){for(let r in t)r===null?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function Tu(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}function Xm(e){const t=yi.test(e)||xs.test(e);return yi.lastIndex=0,xs.lastIndex=0,t}const Zm=/;\s*/m,t_=/^\s*(initial)|(inherit)\s*$/,rl=/\s*!important/,Es="_-_";class e_{constructor(){this._map={}}set(t,r){t=t.trim(),this._map[t]={properties:r,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let gi=null;class at{constructor(){this._currentElement=null,this._measureElement=null,this._map=new e_}detectMixin(t){return Xm(t)}gatherStyles(t){const r=Wm(t.content);if(r){const i=document.createElement("style");return i.textContent=r,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,r){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,r):null}transformStyle(t,r=""){let i=tl(t);return this.transformRules(i,r),t.textContent=As(i),i}transformCustomStyle(t){let r=tl(t);return si(r,i=>{i.selector===":root"&&(i.selector="html"),this.transformRule(i)}),t.textContent=As(r),r}transformRules(t,r){this._currentElement=r,si(t,i=>{this.transformRule(i)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,r){return t=t.replace(xs,(i,n,s,o)=>this._produceCssProperties(i,n,s,o,r)),this._consumeCssProperties(t,r)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let r=t;for(;r.parent;)r=r.parent;const i={};let n=!1;return si(r,s=>{n=n||s===t,!n&&s.selector===t.selector&&Object.assign(i,this._cssTextToMap(s.parsedCssText))}),i}_consumeCssProperties(t,r){let i=null;for(;i=yi.exec(t);){let n=i[0],s=i[1],o=i.index,a=o+n.indexOf("@apply"),l=o+n.length,u=t.slice(0,a),h=t.slice(l),m=r?this._fallbacksFromPreviousRules(r):{};Object.assign(m,this._cssTextToMap(u));let y=this._atApplyToCssProperties(s,m);t=`${u}${y}${h}`,yi.lastIndex=o+y.length}return t}_atApplyToCssProperties(t,r){t=t.replace(Zm,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let s,o,a;const l=n.properties;for(s in l)a=r&&r[s],o=[s,": var(",t,Es,s],a&&o.push(",",a.replace(rl,"")),o.push(")"),rl.test(l[s])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,r){let i=t_.exec(r);return i&&(i[1]?r=this._getInitialValueForProperty(t):r="apply-shim-inherit"),r}_cssTextToMap(t,r=!1){let i=t.split(";"),n,s,o={};for(let a=0,l,u;a<i.length;a++)l=i[a],l&&(u=l.split(":"),u.length>1&&(n=u[0].trim(),s=u.slice(1).join(":"),r&&(s=this._replaceInitialOrInherit(n,s)),o[n]=s));return o}_invalidateMixinEntry(t){if(gi)for(let r in t.dependants)r!==this._currentElement&&gi(r)}_produceCssProperties(t,r,i,n,s){if(i&&Cu(i,(I,R)=>{R&&this._map.get(R)&&(n=`@apply ${R};`)}),!n)return t;let o=this._consumeCssProperties(""+n,s),a=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(o,!0),u=l,h=this._map.get(r),m=h&&h.properties;m?u=Object.assign(Object.create(m),l):this._map.set(r,u);let y=[],v,E,P=!1;for(v in u)E=l[v],E===void 0&&(E="initial"),m&&!(v in m)&&(P=!0),y.push(`${r}${Es}${v}: ${E}`);return P&&this._invalidateMixinEntry(h),h&&(h.properties=u),i&&(a=`${t};${a}`),`${a}${y.join("; ")};`}}at.prototype.detectMixin=at.prototype.detectMixin;at.prototype.transformStyle=at.prototype.transformStyle;at.prototype.transformCustomStyle=at.prototype.transformCustomStyle;at.prototype.transformRules=at.prototype.transformRules;at.prototype.transformRule=at.prototype.transformRule;at.prototype.transformTemplate=at.prototype.transformTemplate;at.prototype._separator=Es;Object.defineProperty(at.prototype,"invalidCallback",{get(){return gi},set(e){gi=e}});const Cs={};const bi="_applyShimCurrentVersion",ke="_applyShimNextVersion",vi="_applyShimValidatingVersion",r_=Promise.resolve();function i_(e){let t=Cs[e];t&&n_(t)}function n_(e){e[bi]=e[bi]||0,e[vi]=e[vi]||0,e[ke]=(e[ke]||0)+1}function $u(e){return e[bi]===e[ke]}function s_(e){return!$u(e)&&e[vi]===e[ke]}function o_(e){e[vi]=e[ke],e._validating||(e._validating=!0,r_.then(function(){e[bi]=e[ke],e._validating=!1}))}let Nn=null,il=window.HTMLImports&&window.HTMLImports.whenReady||null,In;function nl(e){requestAnimationFrame(function(){il?il(e):(Nn||(Nn=new Promise(t=>{In=t}),document.readyState==="complete"?In():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&In()})),Nn.then(function(){e&&e()}))})}const sl="__seenByShadyCSS",Gr="__shadyCSSCachedStyle";let wi=null,ur=null,Gt=class{constructor(){this.customStyles=[],this.enqueued=!1,nl(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!ur||(this.enqueued=!0,nl(ur))}addCustomStyle(t){t[sl]||(t[sl]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Gr])return t[Gr];let r;return t.getStyle?r=t.getStyle():r=t,r}processStyles(){const t=this.customStyles;for(let r=0;r<t.length;r++){const i=t[r];if(i[Gr])continue;const n=this.getStyleForCustomStyle(i);if(n){const s=n.__appliedElement||n;wi&&wi(s),i[Gr]=s}}return t}};Gt.prototype.addCustomStyle=Gt.prototype.addCustomStyle;Gt.prototype.getStyleForCustomStyle=Gt.prototype.getStyleForCustomStyle;Gt.prototype.processStyles=Gt.prototype.processStyles;Object.defineProperties(Gt.prototype,{transformCallback:{get(){return wi},set(e){wi=e}},validateCallback:{get(){return ur},set(e){let t=!1;ur||(t=!0),ur=e,t&&this.enqueueDocumentValidation()}}});const nr=new at;class a_{constructor(){this.customStyleInterface=null,nr.invalidCallback=i_}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{nr.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,r){if(this.ensure(),el(t))return;Cs[r]=t;let i=nr.transformTemplate(t,r);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let r=0;r<t.length;r++){let i=t[r],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&nr.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,r){if(this.ensure(),r&&Ss(t,r),t.shadowRoot){this.styleElement(t);let i=t.shadowRoot.children||t.shadowRoot.childNodes;for(let n=0;n<i.length;n++)this.styleSubtree(i[n])}else{let i=t.children||t.childNodes;for(let n=0;n<i.length;n++)this.styleSubtree(i[n])}}styleElement(t){this.ensure();let{is:r}=Jm(t),i=Cs[r];if(!(i&&el(i))&&i&&!$u(i)){s_(i)||(this.prepareTemplate(i,r),o_(i));let n=t.shadowRoot;if(n){let s=n.querySelector("style");s&&(s.__cssRules=i._styleAst,s.textContent=As(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new a_;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(r,i,n){e.flushCustomStyles(),e.prepareTemplate(r,i)},prepareTemplateStyles(r,i,n){window.ShadyCSS.prepareTemplate(r,i,n)},prepareTemplateDom(r,i){},styleSubtree(r,i){e.flushCustomStyles(),e.styleSubtree(r,i)},styleElement(r){e.flushCustomStyles(),e.styleElement(r)},styleDocument(r){e.flushCustomStyles(),e.styleDocument(r)},getComputedStyleValue(r,i){return Tu(r,i)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:ho,nativeShadow:un,cssBuild:Er,disableRuntime:bu},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=nr;class ue{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,r){this._asyncModule=t,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,Cr.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Cr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,r,i){return t instanceof ue?t._cancelAsync():t=new ue,t.setConfig(r,i),t}}let Cr=new Set;const Ou=function(e){Cr.add(e)},l_=function(){const e=!!Cr.size;return Cr.forEach(t=>{try{t.flush()}catch(r){setTimeout(()=>{throw r})}}),e};let po=typeof document.head.style.touchAction=="string",xi="__polymerGestures",oi="__polymerGesturesHandled",Ps="__polymerGesturesTouchAction",ol=25,al=5,c_=2,u_=2500,Ru=["mousedown","mousemove","mouseup","click"],d_=[0,1,4,2],h_=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function fo(e){return Ru.indexOf(e)>-1}let mo=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){mo=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Nu(e){if(!(fo(e)||e==="touchend")&&po&&mo&&bp)return{passive:!0}}let Iu=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Ts=[],p_={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},f_={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function m_(e){return p_[e.localName]||!1}function __(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let r=e.getRootNode();if(e.id){let i=r.querySelectorAll(`label[for = '${e.id}']`);for(let n=0;n<i.length;n++)t.push(i[n])}}catch{}}return t}let ll=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[oi]={skip:!0},e.type==="click")){let r=!1,i=dn(e);for(let n=0;n<i.length;n++){if(i[n].nodeType===Node.ELEMENT_NODE){if(i[n].localName==="label")Ts.push(i[n]);else if(m_(i[n])){let s=__(i[n]);for(let o=0;o<s.length;o++)r=r||Ts.indexOf(s[o])>-1}}if(i[n]===it.mouse.target)return}if(r)return;e.preventDefault(),e.stopPropagation()}};function cl(e){let t=Iu?["click"]:Ru;for(let r=0,i;r<t.length;r++)i=t[r],e?(Ts.length=0,document.addEventListener(i,ll,!0)):document.removeEventListener(i,ll,!0)}function y_(e){if(!Ks)return;it.mouse.mouseIgnoreJob||cl(!0);let t=function(){cl(),it.mouse.target=null,it.mouse.mouseIgnoreJob=null};it.mouse.target=dn(e)[0],it.mouse.mouseIgnoreJob=ue.debounce(it.mouse.mouseIgnoreJob,ar.after(u_),t)}function ae(e){let t=e.type;if(!fo(t))return!1;if(t==="mousemove"){let r=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!h_&&(r=d_[e.which]||0),!!(r&1)}else return(e.button===void 0?0:e.button)===0}function g_(e){if(e.type==="click"){if(e.detail===0)return!0;let t=Vt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}let it={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function b_(e){let t="auto",r=dn(e);for(let i=0,n;i<r.length;i++)if(n=r[i],n[Ps]){t=n[Ps];break}return t}function Lu(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Re(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}Ks&&document.addEventListener("touchend",y_,mo?{passive:!0}:!1);const dn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Rr={},se=[];function v_(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(r=i)}return r}function Vt(e){const t=dn(e);return t.length>0?t[0]:e.target}function Mu(e){let t,r=e.type,n=e.currentTarget[xi];if(!n)return;let s=n[r];if(s){if(!e[oi]&&(e[oi]={},r.slice(0,5)==="touch")){e=e;let o=e.changedTouches[0];if(r==="touchstart"&&e.touches.length===1&&(it.touch.id=o.identifier),it.touch.id!==o.identifier)return;po||(r==="touchstart"||r==="touchmove")&&w_(e)}if(t=e[oi],!t.skip){for(let o=0,a;o<se.length;o++)a=se[o],s[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<se.length;o++)a=se[o],s[a.name]&&!t[a.name]&&(t[a.name]=!0,a[r](e))}}}function w_(e){let t=e.changedTouches[0],r=e.type;if(r==="touchstart")it.touch.x=t.clientX,it.touch.y=t.clientY,it.touch.scrollDecided=!1;else if(r==="touchmove"){if(it.touch.scrollDecided)return;it.touch.scrollDecided=!0;let i=b_(e),n=!1,s=Math.abs(it.touch.x-t.clientX),o=Math.abs(it.touch.y-t.clientY);e.cancelable&&(i==="none"?n=!0:i==="pan-x"?n=o>s:i==="pan-y"&&(n=s>o)),n?e.preventDefault():Ai("track")}}function x_(e,t,r){return Rr[t]?(S_(e,t,r),!0):!1}function A_(e,t,r){return Rr[t]?(E_(e,t,r),!0):!1}function S_(e,t,r){let i=Rr[t],n=i.deps,s=i.name,o=e[xi];o||(e[xi]=o={});for(let a=0,l,u;a<n.length;a++)l=n[a],!(Iu&&fo(l)&&l!=="click")&&(u=o[l],u||(o[l]=u={_count:0}),u._count===0&&e.addEventListener(l,Mu,Nu(l)),u[s]=(u[s]||0)+1,u._count=(u._count||0)+1);e.addEventListener(t,r),i.touchAction&&Du(e,i.touchAction)}function E_(e,t,r){let i=Rr[t],n=i.deps,s=i.name,o=e[xi];if(o)for(let a=0,l,u;a<n.length;a++)l=n[a],u=o[l],u&&u[s]&&(u[s]=(u[s]||1)-1,u._count=(u._count||1)-1,u._count===0&&e.removeEventListener(l,Mu,Nu(l)));e.removeEventListener(t,r)}function _o(e){se.push(e);for(let t=0;t<e.emits.length;t++)Rr[e.emits[t]]=e}function C_(e){for(let t=0,r;t<se.length;t++){r=se[t];for(let i=0,n;i<r.emits.length;i++)if(n=r.emits[i],n===e)return r}return null}function Du(e,t){po&&e instanceof HTMLElement&&Ht.run(()=>{e.style.touchAction=t}),e[Ps]=t}function yo(e,t,r){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,N(e).dispatchEvent(i),i.defaultPrevented){let n=r.preventer||r.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function Ai(e){let t=C_(e);t.info&&(t.info.prevent=!0)}_o({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Re(this.info)},mousedown:function(e){if(!ae(e))return;let t=Vt(e),r=this,i=function(o){ae(o)||(Ze("up",t,o),Re(r.info))},n=function(o){ae(o)&&Ze("up",t,o),Re(r.info)};Lu(this.info,i,n),Ze("down",t,e)},touchstart:function(e){Ze("down",Vt(e),e.changedTouches[0],e)},touchend:function(e){Ze("up",Vt(e),e.changedTouches[0],e)}});function Ze(e,t,r,i){t&&yo(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:function(n){return Ai(n)}})}_o({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>c_&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Re(this.info)},mousedown:function(e){if(!ae(e))return;let t=Vt(e),r=this,i=function(o){let a=o.clientX,l=o.clientY;ul(r.info,a,l)&&(r.info.state=r.info.started?o.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&Ai("tap"),r.info.addMove({x:a,y:l}),ae(o)||(r.info.state="end",Re(r.info)),t&&Ln(r.info,t,o),r.info.started=!0)},n=function(o){r.info.started&&i(o),Re(r.info)};Lu(this.info,i,n),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Vt(e),r=e.changedTouches[0],i=r.clientX,n=r.clientY;ul(this.info,i,n)&&(this.info.state==="start"&&Ai("tap"),this.info.addMove({x:i,y:n}),Ln(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Vt(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Ln(this.info,t,r))}});function ul(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),n=Math.abs(e.y-r);return i>=al||n>=al}function Ln(e,t,r){if(!t)return;let i=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],s=n.x-e.x,o=n.y-e.y,a,l=0;i&&(a=n.x-i.x,l=n.y-i.y),yo(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover:function(){return v_(r.clientX,r.clientY)}})}_o({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){ae(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){ae(e)&&dl(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){dl(this.info,e.changedTouches[0],e)}});function dl(e,t,r){let i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),s=Vt(r||t);!s||f_[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=ol&&n<=ol||g_(t))&&(e.prevent||yo(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}const ju=et(e=>{class t extends e{_addEventListenerToNode(i,n,s){x_(i,n,s)||super._addEventListenerToNode(i,n,s)}_removeEventListenerFromNode(i,n,s){A_(i,n,s)||super._removeEventListenerFromNode(i,n,s)}}return t});const P_=/:host\(:dir\((ltr|rtl)\)\)/g,T_=':host([dir="$1"])',$_=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,O_=':host([dir="$2"]) $1',R_=/:dir\((?:ltr|rtl)\)/,hl=!!(window.ShadyDOM&&window.ShadyDOM.inUse),dr=[];let hr=null,go="";function ku(){go=document.documentElement.getAttribute("dir")}function Bu(e){e.__autoDirOptOut||e.setAttribute("dir",go)}function Fu(){ku(),go=document.documentElement.getAttribute("dir");for(let e=0;e<dr.length;e++)Bu(dr[e])}function N_(){hr&&hr.takeRecords().length&&Fu()}const I_=et(e=>{hl||hr||(ku(),hr=new MutationObserver(Fu),hr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=qc(e);class r extends t{static _processStyleText(n,s){return n=t._processStyleText.call(this,n,s),!hl&&R_.test(n)&&(n=this._replaceDirInCssText(n),this.__activateDir=!0),n}static _replaceDirInCssText(n){let s=n;return s=s.replace(P_,T_),s=s.replace($_,O_),s}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(N_(),dr.push(this),Bu(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const n=dr.indexOf(this);n>-1&&dr.splice(n,1)}}}return r.__activateDir=!1,r});function pl(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?pl():window.addEventListener("DOMContentLoaded",pl);const zu=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=l_();while(e||t)};const ve=Element.prototype,L_=ve.matches||ve.matchesSelector||ve.mozMatchesSelector||ve.msMatchesSelector||ve.oMatchesSelector||ve.webkitMatchesSelector,Uu=function(e,t){return L_.call(e,t)};class H{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new It(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(N(this.node).contains(t))return!0;let r=t,i=t.ownerDocument;for(;r&&r!==i&&r!==this.node;)r=N(r).parentNode||N(r).host;return r===this.node}getOwnerRoot(){return N(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?N(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],r=N(this.node).assignedSlot;for(;r;)t.push(r),r=N(r).assignedSlot;return t}importNode(t,r){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return N(i).importNode(t,r)}getEffectiveChildNodes(){return It.getFlattenedNodes(this.node)}queryDistributedElements(t){let r=this.getEffectiveChildNodes(),i=[];for(let n=0,s=r.length,o;n<s&&(o=r[n]);n++)o.nodeType===Node.ELEMENT_NODE&&Uu(o,t)&&i.push(o);return i}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function M_(e,t){for(let r=0;r<t.length;r++){let i=t[r];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}function fl(e,t){for(let r=0;r<t.length;r++){let i=t[r];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}function D_(e,t){for(let r=0;r<t.length;r++){let i=t[r];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(n){this.node[i]=n},configurable:!0})}}class $s{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}H.prototype.cloneNode;H.prototype.appendChild;H.prototype.insertBefore;H.prototype.removeChild;H.prototype.replaceChild;H.prototype.setAttribute;H.prototype.removeAttribute;H.prototype.querySelector;H.prototype.querySelectorAll;H.prototype.parentNode;H.prototype.firstChild;H.prototype.lastChild;H.prototype.nextSibling;H.prototype.previousSibling;H.prototype.firstElementChild;H.prototype.lastElementChild;H.prototype.nextElementSibling;H.prototype.previousElementSibling;H.prototype.childNodes;H.prototype.children;H.prototype.classList;H.prototype.textContent;H.prototype.innerHTML;let Os=H;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(H.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=H.prototype[t])}),fl(e.prototype,["classList"]),Os=e,Object.defineProperties($s.prototype,{localTarget:{get(){const t=this.event.currentTarget,r=t&&xt(t).getOwnerRoot(),i=this.path;for(let n=0;n<i.length;n++){const s=i[n];if(xt(s).getOwnerRoot()===r)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else M_(H.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),fl(H.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),D_(H.prototype,["textContent","innerHTML","className"]);const xt=function(e){if(e=e||document,e instanceof Os||e instanceof $s)return e;let t=e.__domApi;return t||(e instanceof Event?t=new $s(e):t=new Os(e),e.__domApi=t),t};const Mn=window.ShadyDOM,ml=window.ShadyCSS;function _l(e,t){return N(e).getRootNode()===t}function j_(e,t=!1){if(!Mn||!ml||!Mn.handlesDynamicScoping)return null;const r=ml.ScopingShim;if(!r)return null;const i=r.scopeForNode(e),n=N(e).getRootNode(),s=o=>{if(!_l(o,n))return;const a=Array.from(Mn.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const u=a[l];if(!_l(u,n))continue;const h=r.currentScopeForNode(u);h!==i&&(h!==""&&r.unscopeNode(u,h),r.scopeNode(u,i))}};if(s(e),t){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const u=a[l];for(let h=0;h<u.addedNodes.length;h++){const m=u.addedNodes[h];m.nodeType===Node.ELEMENT_NODE&&s(m)}}});return o.observe(e,{childList:!0,subtree:!0}),o}else return null}const Dn="disable-upgrade",Hu=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};et(e=>{const t=cn(e);let r=Hu(t);class i extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat(Dn)}_initializeProperties(){this.hasAttribute(Dn)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}attributeChangedCallback(s,o,a,l){s==Dn?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,N(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(s,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return i});const Jr="disable-upgrade";let k_=window.ShadyCSS;const qu=et(e=>{const t=ju(cn(e)),r=ps?t:I_(t),i=Hu(r),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,u){(this.__dataAttributes&&this.__dataAttributes[a]||a===Jr)&&this.attributeChangedCallback(a,l,u,null)}setAttribute(a,l){if(Ur&&!this._legacyForceObservedAttributes){const u=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,u,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(Ur&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return Ur&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):i.call(this).concat(Jr)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,u,h){l!==u&&(a==Jr?this.__isUpgradeDisabled&&u==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,N(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,u,h),this.attributeChanged(a,l,u)))}attributeChanged(a,l,u){}_initializeProperties(){if(br&&this.hasAttribute(Jr))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ur&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,u){this._propertyToAttribute(a,l,u)}serializeValueToAttribute(a,l,u){this._valueToNodeAttribute(u||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let u=Object.getOwnPropertyNames(l);for(let h=0,m;h<u.length&&(m=u[h]);h++){let y=Object.getOwnPropertyDescriptor(l,m);y&&Object.defineProperty(a,m,y)}return a}mixin(a,l){for(let u in l)a[u]=l[u];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,u){u=u||{},l=l??{};let h=new Event(a,{bubbles:u.bubbles===void 0?!0:u.bubbles,cancelable:!!u.cancelable,composed:u.composed===void 0?!0:u.composed});h.detail=l;let m=u.node||this;return N(m).dispatchEvent(h),h}listen(a,l,u){a=a||this;let h=this.__boundListeners||(this.__boundListeners=new WeakMap),m=h.get(a);m||(m={},h.set(a,m));let y=l+u;m[y]||(m[y]=this._addMethodEventListenerToNode(a,l,u,this))}unlisten(a,l,u){a=a||this;let h=this.__boundListeners&&this.__boundListeners.get(a),m=l+u,y=h&&h[m];y&&(this._removeEventListenerFromNode(a,l,y),h[m]=null)}setScrollDirection(a,l){Du(l||this,n[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=N(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=xt(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return xt(this).getEffectiveChildNodes()}queryDistributedElements(a){return xt(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let u=0,h;h=a[u];u++)h.nodeType!==Node.COMMENT_NODE&&l.push(h.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?xt(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(u){return u.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&N(l).contains(a)&&N(l).getRootNode()===N(a).getRootNode()}isLocalDescendant(a){return this.root===N(a).getRootNode()}scopeSubtree(a,l=!1){return j_(a,l)}getComputedStyleValue(a){return k_.getComputedStyleValue(this,a)}debounce(a,l,u){return this._debouncers=this._debouncers||{},this._debouncers[a]=ue.debounce(this._debouncers[a],u>0?ar.after(u):Ht,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?ar.run(a.bind(this),l):~Ht.run(a.bind(this))}cancelAsync(a){a<0?Ht.cancel(~a):ar.cancel(a)}create(a,l){let u=document.createElement(a);if(l)if(u.setProperties)u.setProperties(l);else for(let h in l)u[h]=l[h];return u}elementMatches(a,l){return Uu(l||this,a)}toggleAttribute(a,l){let u=this;return arguments.length===3&&(u=arguments[2]),arguments.length==1&&(l=!u.hasAttribute(a)),l?(N(u).setAttribute(a,""),!0):(N(u).removeAttribute(a),!1)}toggleClass(a,l,u){u=u||this,arguments.length==1&&(l=!u.classList.contains(a)),l?u.classList.add(a):u.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,u,h){h=h||this,this.transform("translate3d("+a+","+l+","+u+")",h)}arrayDelete(a,l){let u;if(Array.isArray(a)){if(u=a.indexOf(l),u>=0)return a.splice(u,1)}else if(u=ot(this,a).indexOf(l),u>=0)return this.splice(a,u,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return s.prototype.is="",s});const B_={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Vu={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},F_=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Vu);function z_(e,t,r){const i=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let s=0;s<n.length;s++){let o=n[s];if(!(o in r))if(i)t[o]=e[o];else{let a=Object.getOwnPropertyDescriptor(e,o);a&&(a.configurable=!0,Object.defineProperty(t,o,a))}}}function U_(e,t,r){for(let i=0;i<t.length;i++)Gu(e,t[i],r,F_)}function Gu(e,t,r,i){z_(t,e,i);for(let n in B_)t[n]&&(r[n]=r[n]||[],r[n].push(t[n]))}function Ju(e,t,r){t=t||[];for(let i=e.length-1;i>=0;i--){let n=e[i];n?Array.isArray(n)?Ju(n,t):t.indexOf(n)<0&&(!r||r.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function yl(e,t){for(const r in t){const i=e[r],n=t[r];!("value"in n)&&i&&"value"in i?e[r]=Object.assign({value:i.value},n):e[r]=n}}const gl=qu(HTMLElement);function H_(e,t,r){let i;const n={};class s extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(i)for(let l=0,u;l<i.length;l++)u=i[l],u.properties&&this.createProperties(u.properties),u.observers&&this.createObservers(u.observers,u.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(i)for(let u=0;u<i.length;u++)yl(l,i[u].properties);return yl(l,e.properties),l}static get observers(){let l=[];if(i)for(let u=0,h;u<i.length;u++)h=i[u],h.observers&&(l=l.concat(h.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=n.created;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}_registered(){const l=s.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),br&&o(l);const u=Object.getPrototypeOf(this);let h=n.beforeRegister;if(h)for(let m=0;m<h.length;m++)h[m].call(u);if(h=n.registered,h)for(let m=0;m<h.length;m++)h[m].call(u)}}_applyListeners(){super._applyListeners();const l=n.listeners;if(l)for(let u=0;u<l.length;u++){const h=l[u];if(h)for(let m in h)this._addMethodEventListenerToNode(this,m,h[m])}}_ensureAttributes(){const l=n.hostAttributes;if(l)for(let u=l.length-1;u>=0;u--){const h=l[u];for(let m in h)this._ensureAttribute(m,h[m])}super._ensureAttributes()}ready(){super.ready();let l=n.ready;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}attached(){super.attached();let l=n.attached;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}detached(){super.detached();let l=n.detached;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}attributeChanged(l,u,h){super.attributeChanged();let m=n.attributeChanged;if(m)for(let y=0;y<m.length;y++)m[y].call(this,l,u,h)}}if(r){Array.isArray(r)||(r=[r]);let a=t.prototype.behaviors;i=Ju(r,null,a),s.prototype.behaviors=a?a.concat(r):i}const o=a=>{i&&U_(a,i,n),Gu(a,e,n,Vu)};return br||o(s.prototype),s.generatedFrom=e,s}const q_=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let r=t?t(gl):gl;return r=H_(e,r,e.behaviors),r.is=r.prototype.is=e.is,r};const hn=function(e){let t;return typeof e=="function"?t=e:t=hn.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};hn.Class=q_;function bo(e,t,r,i,n){let s;n&&(s=typeof r=="object"&&r!==null,s&&(i=e.__dataTemp[t]));let o=i!==r&&(i===i||r===r);return s&&o&&(e.__dataTemp[t]=r),o}const vo=et(e=>{class t extends e{_shouldPropertyChange(i,n,s){return bo(this,i,n,s,!0)}}return t}),Wu=et(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,n,s){return bo(this,i,n,s,this.mutableData)}}return t});vo._mutablePropertyChange=bo;let Rs=null;function Ns(){return Rs}Ns.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ns,writable:!0}});const Yu=ln(Ns),V_=vo(Yu);function G_(e,t){Rs=e,Object.setPrototypeOf(e,t.prototype),new t,Rs=null}const J_=ln(class{});function Qu(e,t){for(let r=0;r<t.length;r++){let i=t[r];if(!!e!=!!i.__hideTemplateChildren__)if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),N(N(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const n=i.__polymerReplaced__;n&&N(N(n).parentNode).replaceChild(i,n)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}class Qt extends J_{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let r=[];this.children=r;for(let n=this.root.firstChild;n;n=n.nextSibling)r.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in t)this._setPendingProperty(i,t[i])}forwardHostProp(t,r){this._setPendingPropertyOrPath(t,r,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,r,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,r,n=>{n.model=this,i(n)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,r,i)}}_showHideChildren(t){Qu(t,this.children)}_setUnmanagedPropertyToNode(t,r,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&r=="textContent"?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,r,i)}get parentModel(){let t=this.__parentModel;if(!t){let r;t=this;do t=t.__dataHost.__dataHost;while((r=t.__templatizeOptions)&&!r.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Qt.prototype.__dataHost;Qt.prototype.__templatizeOptions;Qt.prototype._methodHost;Qt.prototype.__templatizeOwner;Qt.prototype.__hostProps;const W_=vo(Qt);function bl(e){let t=e.__dataHost;return t&&t._methodHost||t}function Y_(e,t,r){let i=r.mutableData?W_:Qt;Si.mixin&&(i=Si.mixin(i));let n=class extends i{};return n.prototype.__templatizeOptions=r,n.prototype._bindTemplate(e),X_(n,e,t,r),n}function Q_(e,t,r,i){let n=r.forwardHostProp;if(n&&t.hasHostProps){const s=e.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(s){let l=r.mutableData?V_:Yu;class u extends l{}o=t.templatizeTemplateClass=u}else{const l=e.constructor;class u extends l{}o=t.templatizeTemplateClass=u}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:K_(l,n)}),o.prototype._createNotifyingProperty("_host_"+l);jc&&i&&ey(t,r,i)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)G_(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in e){const u=e[l];delete e[l],e.__data[l]=u}}}}function K_(e,t){return function(i,n,s){t.call(i.__templatizeOwner,n.substring(6),s[n])}}function X_(e,t,r,i){let n=r.hostProps||{};for(let s in i.instanceProps){delete n[s];let o=i.notifyInstanceProp;o&&e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Z_(s,o)})}if(i.forwardHostProp&&t.__dataHost)for(let s in n)r.hasHostProps||(r.hasHostProps=!0),e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ty()})}function Z_(e,t){return function(i,n,s){t.call(i.__templatizeOwner,i,n,s[n])}}function ty(){return function(t,r,i){t.__dataHost._setPendingPropertyOrPath("_host_"+r,i[r],!0,!0)}}function Si(e,t,r){if(je&&!bl(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:Qt)._parseTemplate(e),s=n.templatizeInstanceClass;s||(s=Y_(e,n,r),n.templatizeInstanceClass=s);const o=bl(e);Q_(e,n,r,o);let a=class extends s{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a=a,a}function ey(e,t,r){const i=r.constructor._properties,{propertyEffects:n}=e,{instanceProps:s}=t;for(let o in n)if(!i[o]&&!(s&&s[o])){const a=n[o];for(let l=0;l<a.length;l++){const{part:u}=a[l].info;if(!(u.signature&&u.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function ry(e,t){let r;for(;t;)if(r=t.__dataHost?t:t.__templatizeInstance)if(r.__dataHost!=e)t=r.__dataHost;else return r;else t=N(t).parentNode;return null}let vl=!1;function wo(){if(br&&!Qs){if(!vl){vl=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const iy=ju(Wu(ln(HTMLElement)));class ny extends iy{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),je)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,r,i,n){this.mutableData=!0}connectedCallback(){wo()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){N(N(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let r=new MutationObserver(()=>{if(t=this.querySelector("template"),t)r.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});r.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let r=this.root.firstChild;r;r=r.nextSibling)this.__children[this.__children.length]=r;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",ny);const sy=Wu(jt);class wl extends sy{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!us,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),wo()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=N(N(this).parentNode);for(let r=0;r<this.__instances.length;r++)this.__attachInstance(r,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let r=this.template=t._templateInfo?t:this.querySelector("template");if(!r){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Si(r,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(n,s){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(n,s)},notifyInstanceProp:function(n,s,o){if(Dp(this.as,s)){let a=n[this.itemsIndexAs];s==this.as&&(this.items[a]=o);let l=xr(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,s);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let r=t,i=this.__getMethodHost();return function(){return i[r].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let r=this.__observePaths;for(let i=0;i<r.length;i++)t.indexOf(r[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,r=0){this.__renderDebouncer=ue.debounce(this.__renderDebouncer,r>0?ar.after(r):Ht,t.bind(this)),Ou(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),zu()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const r=this.__sortAndFilterItems(t),i=this.__calculateLimit(r.length);this.__updateInstances(t,i,r),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!us||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let r=new Array(t.length);for(let i=0;i<t.length;i++)r[i]=i;return this.__filterFn&&(r=r.filter((i,n,s)=>this.__filterFn(t[i],n,s))),this.__sortFn&&r.sort((i,n)=>this.__sortFn(t[i],t[n])),r}__calculateLimit(t){let r=t;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(r=Math.min(t,this.initialCount),n=Math.max(r-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-i,0),this.__chunkCount),r=Math.min(i+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=r<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,r}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,r=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*r)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,r,i){const n=this.__itemsIdxToInstIdx={};let s;for(s=0;s<r;s++){let o=this.__instances[s],a=i[s],l=t[a];n[a]=s,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,s),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,s,a)}for(let o=this.__instances.length-1;o>=s;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let r=this.__instances[t];const i=N(r.root);for(let n=0;n<r.children.length;n++){let s=r.children[n];i.appendChild(s)}return r}__attachInstance(t,r){let i=this.__instances[t];r.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,r,i){let n={};return n[this.as]=t,n[this.indexAs]=r,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,r,i){const n=this.__stampInstance(t,r,i);let s=this.__instances[r+1],o=s?s.children[0]:this;return N(N(this).parentNode).insertBefore(n.root,o),this.__instances[r]=n,n}_showHideChildren(t){for(let r=0;r<this.__instances.length;r++)this.__instances[r]._showHideChildren(t)}__handleItemPath(t,r){let i=t.slice(6),n=i.indexOf("."),s=n<0?i:i.substring(0,n);if(s==parseInt(s,10)){let o=n<0?"":i.substring(n+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[s],l=this.__instances[a];if(l){let u=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(u,r,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let r=this.modelForElement(t);return r&&r[this.as]}indexForElement(t){let r=this.modelForElement(t);return r&&r[this.indexAs]}modelForElement(t){return ry(this.template,t)}}customElements.define(wl.is,wl);class Ku extends jt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ue.debounce(this.__renderDebouncer,Ht,()=>this.__render()),Ou(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=N(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!N(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),wo()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let r=t._templateInfo?t:N(t).querySelector("template");if(!r){let i=new MutationObserver(()=>{if(N(this).querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return i.observe(this,{childList:!0}),!1}this.__template=r}return!0}__ensureInstance(){let t=N(this).parentNode;if(this.__hasInstance()){let r=this.__getInstanceNodes();if(r&&r.length&&N(this).previousSibling!==r[r.length-1])for(let n=0,s;n<r.length&&(s=r[n]);n++)N(t).insertBefore(s,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){zu()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!us||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class oy extends Ku{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const r=this.__dataHost||this;if(je&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=r._bindTemplate(this.__template,!0);i.runEffects=(n,s,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(a.changedProps,s)),n(s,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:n,changedProps:{}}),o)for(const l in s){const u=Dt(l);a.changedProps[u]=this.__dataHost[u]}else Object.assign(a.changedProps,s)},this.__instance=r._stampTemplate(this.__template,i),N(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,Qu(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class ay extends Ku{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Si(this.__template,this,{mutableData:!0,forwardHostProp:function(r,i){this.__instance&&(this.if?this.__instance.forwardHostProp(r,i):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Dt(r)]=!0))}})),this.__instance=new this.__ctor,N(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let r=N(t[0]).parentNode;if(r){r=N(r);for(let i=0,n;i<t.length&&(n=t[i]);i++)r.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let r in t)this.__instance._setPendingProperty(r,this.__dataHost[r]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const xl=kc?oy:ay;customElements.define(xl.is,xl);let ly=et(e=>{let t=cn(e);class r extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(n,s){let o=s.path;if(o==JSCompiler_renameProperty("items",this)){let a=s.base||[],l=this.__lastItems,u=this.__lastMulti;if(n!==u&&this.clearSelection(),l){let h=$c(a,l);this.__applySplices(h)}this.__lastItems=a,this.__lastMulti=n}else if(s.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(s.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(n){let s=this.__selectedMap;for(let a=0;a<n.length;a++){let l=n[a];s.forEach((u,h)=>{u<l.index||(u>=l.index+l.removed.length?s.set(h,u+l.addedCount-l.removed.length):s.set(h,-1))});for(let u=0;u<l.addedCount;u++){let h=l.index+u;s.has(this.items[h])&&s.set(this.items[h],h)}}this.__updateLinks();let o=0;s.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,s.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let n=0;this.__selectedMap.forEach(s=>{s>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${s}`,`${JSCompiler_renameProperty("selected",this)}.${n++}`)})}else this.__selectedMap.forEach(n=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${n}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${n}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(n){return this.__selectedMap.has(n)}isIndexSelected(n){return this.isSelected(this.items[n])}__deselectChangedIdx(n){let s=this.__selectedIndexForItemIndex(n);if(s>=0){let o=0;this.__selectedMap.forEach((a,l)=>{s==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(n){let s=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${n}`];if(s)return parseInt(s.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(n){let s=this.__selectedMap.get(n);if(s>=0){this.__selectedMap.delete(n);let o;this.multi&&(o=this.__selectedIndexForItemIndex(s)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(n){this.deselect(this.items[n])}select(n){this.selectIndex(this.items.indexOf(n))}selectIndex(n){let s=this.items[n];this.isSelected(s)?this.toggle&&this.deselectIndex(n):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(s,n),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),s):this.selected=this.selectedItem=s)}}return r}),cy=ly(jt);class Al extends cy{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Al.is,Al);const ai=new Gt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){ai.processStyles(),Ss(e,t)},styleElement(e){ai.processStyles()},styleDocument(e){ai.processStyles(),Ss(document.body,e)},getComputedStyleValue(e,t){return Tu(e,t)},flushCustomStyles(){},nativeCss:ho,nativeShadow:un,cssBuild:Er,disableRuntime:bu});window.ShadyCSS.CustomStyleInterface=ai;const Sl="include",uy=window.ShadyCSS.CustomStyleInterface;class dy extends HTMLElement{constructor(){super(),this._style=null,uy.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const r=t.getAttribute(Sl);return r&&(t.removeAttribute(Sl),t.textContent=Np(r)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",dy);const jA=qu(HTMLElement).prototype;var Wr=new Set;const hy={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Wr.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&e._interestedResizables.indexOf(this)===-1&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){if(this._notifyingDescendant){e.stopPropagation();return}Qs||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=xt(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(Wr.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Wr.delete(this):Wr.add(this)}};class py{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach(function(r){(!t||t.indexOf(r)<0)&&this.setItemSelected(r,!1)},this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,r){if(t!=null&&r!==this.isSelected(t)){if(r)this.selection.push(t);else{var i=this.selection.indexOf(t);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(t,r)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}const fy={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new py(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&xt(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;this.selected!==void 0&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;this.selected!==void 0&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&typeof this._observer.flush=="function"?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=xt(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&this._selection.get()===void 0&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return e==null?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(this.attrForSelected){for(var t=0,r;r=this.items[t];t++)if(this._valueForItem(r)==e)return t}else return Number(e)},_indexToValue:function(e){if(this.attrForSelected){var t=this.items[e];if(t)return this._valueForItem(t)}else return e},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return t===-1?null:t}var r=e[ro(this.attrForSelected)];return r??e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return xt(e).observeNodes(function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,r=this.items;t&&t!=this;){var i=r.indexOf(t);if(i>=0){var n=this._indexToValue(i);this._itemActivate(n,t);return}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};hn({_template:pe`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[hy,fy],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(e,t){this.async(this.notifyResize)}});hn({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(!this.full&&e[0]!=="("&&(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});const my=lt`
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
`;Mt("vaadin-vertical-layout",my,{moduleId:"lumo-vertical-layout"});class El extends Ue(ze(jt)){static get template(){return pe`
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
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(El.is,El);Mt("vaadin-split-layout",lt`
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
  `,{moduleId:"lumo-split-layout"});class Ei extends Ue(ze(jt)){static get template(){return pe`
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
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new It(this,r=>{this._cleanupNodes(r.removedNodes),this._processChildren()});const t=this.$.splitter;cr(t,"track",this._onHandleTrack.bind(this)),cr(t,"down",this._setPointerEventsNone.bind(this)),cr(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(r=>{r.parentElement instanceof Ei||r.removeAttribute("slot")})}_processChildren(){const t=[...this.children];t.filter(r=>r.hasAttribute("slot")).forEach(r=>this._processChildWithSlot(r)),t.filter(r=>!r.hasAttribute("slot")).forEach((r,i)=>this._processChildWithoutSlot(r,i))}_processChildWithSlot(t){const r=t.getAttribute("slot");t.__autoSlotted?(this[`_${r}Child`]=null,t.removeAttribute("slot")):this[`_${r}Child`]=t}_processChildWithoutSlot(t,r){let i;this._primaryChild||this._secondaryChild?i=this._primaryChild?"secondary":"primary":i=r===0?"primary":"secondary",this[`_${i}Child`]=t,t.setAttribute("slot",i),t.__autoSlotted=!0}_setFlexBasis(t,r,i){r=Math.max(0,Math.min(r,i)),r===0&&(r=1e-6),t.style.flex=`1 1 ${r}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const r=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[r]-this.$.splitter.getBoundingClientRect()[r],primary:this._primaryChild.getBoundingClientRect()[r],secondary:this._secondaryChild.getBoundingClientRect()[r]};return}const i=this.orientation==="vertical"?t.detail.dy:t.detail.dx,s=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+s,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-s,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Ei.is,Ei);var jn,Cl;function _y(){if(Cl)return jn;Cl=1;async function e(t,r=fetch){const i=await r("https://s.zazuko.com/api/v1/shorten/",{method:"POST",body:new URLSearchParams({url:t})});if(!i.ok)throw new Error(await i.text());return i.text()}return jn={shorten:e},jn}var yy=_y();const gy=`@prefix sh: <http://www.w3.org/ns/shacl#> .
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
`;function by(e,t){return{...e,format:t}}function vy(e,{quads:t,serialized:r}){return{...e,quads:t,graph:r}}function wy(e,t){return{...e,graph:t}}function xy(e,t){return{...e,prefixes:[...new Set([...e.prefixes,t])]}}function Ay(e,t){return{...e,prefixes:e.prefixes.filter(r=>r!==t)}}function Sy(e,{prefix:t,namespace:r}){if(typeof t!="string"||typeof r!="string")return e;const i={...e.customPrefixes};return r?i[t]=r:delete i[t],{...e,customPrefixes:i}}function Ey(e,t){return{...e,customPrefixes:t}}const Xu=Object.freeze(Object.defineProperty({__proto__:null,addPrefix:xy,changeFormat:by,parsed:vy,removePrefix:Ay,replaceCustomPrefixes:Ey,setCustomPrefix:Sy,setGraph:wy},Symbol.toStringTag,{value:"Module"})),Cy=nn({state:{format:"text/turtle",graph:gy,prefixes:["sh","schema"],customPrefixes:{}},reducers:{...Xu}}),Py=`{
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
`,Ty=nn({state:{format:"application/ld+json",graph:Py,prefixes:[],customPrefixes:{}},reducers:{...Xu}});let xo=class Zu{constructor(t,{bind:r=!1}={}){this._factories=t.slice();for(const i of this._factories){typeof i.prototype.init=="function"&&i.prototype.init.call(this);for(const n of i.exports||[])r?this[n]=i.prototype[n].bind(this):this[n]=i.prototype[n]}}clone(){const t=new Zu(this._factories);for(const r of t._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(t,this);return t}};function Pl({parent:e,child:t}){return new Proxy({},{get(i,n){return t[n]||e[n]},set(i,n,s){return t[n]=s,!0},has(i,n){return n in t||n in e},ownKeys(){const i=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);return[...new Set([...i,...n]).values()]},getOwnPropertyDescriptor(i,n){return{enumerable:!n.toString().startsWith("_"),configurable:!0}}})}class de{constructor(t,{parent:r,bind:i=!1}={}){if(this._parent=r,t instanceof xo||t instanceof de)return Pl({parent:r,child:t});this._factories=t.slice();const n=r?Pl({parent:r,child:this}):this;for(const s of this._factories){typeof s.prototype.init=="function"&&s.prototype.init.call(n);for(const o of s.exports||[])i?this[o]=s.prototype[o].bind(n):this[o]=s.prototype[o]}return n}clone(){const t=new de(this._factories,this._parent);for(const r of t._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(t,this);return t}}const $y=(e,t,r,i)=>{if(r==="length"||r==="prototype"||r==="arguments"||r==="caller")return;const n=Object.getOwnPropertyDescriptor(e,r),s=Object.getOwnPropertyDescriptor(t,r);!Oy(n,s)&&i||Object.defineProperty(e,r,s)},Oy=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},Ry=(e,t)=>{const r=Object.getPrototypeOf(t);r!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,r)},Ny=(e,t)=>`/* Wrapped ${e}*/
${t}`,Iy=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Ly=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),My=(e,t,r)=>{const i=r===""?"":`with ${r.trim()}() `,n=Ny.bind(null,i,t.toString());Object.defineProperty(n,"name",Ly);const{writable:s,enumerable:o,configurable:a}=Iy;Object.defineProperty(e,"toString",{value:n,writable:s,enumerable:o,configurable:a})};function Dy(e,t,{ignoreNonConfigurable:r=!1}={}){const{name:i}=e;for(const n of Reflect.ownKeys(t))$y(e,t,n,r);return Ry(e,t),My(e,t,i),e}const Ci=new WeakMap,td=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,i=0;const n=e.displayName||e.name||"<anonymous>",s=function(...o){if(Ci.set(s,++i),i===1)r=e.apply(this,o),e=void 0;else if(t.throw===!0)throw new Error(`Function \`${n}\` can only be called once`);return r};return Dy(s,e),Ci.set(s,i),s};td.callCount=e=>{if(!Ci.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return Ci.get(e)};function Is(e){return function(t,r,i){return Array.isArray(t)?!0:i.findIndex(s=>Array.isArray(s)?!0:e(t,s))===r}}function ed(e,t){return e&&e.equals(t)}function rd(e){return(t,r)=>{if(!t||!r)return!1;const i=t.id.equals(r.id);return e?i&&t._graphId.equals(r._graphId):i}}function kn(e,t){return typeof e=="string"?t.namedNode(e):"termType"in e?e:e.id}class jy{add(t){return this.__resource.pointer.addOut(this.__resource.env.ns.rdf.type,kn(t,this.__resource.env)),this}clear(){this.__graph.deleteOut(this.__resource.env.ns.rdf.type)}delete(t){const r=this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,kn(t,this.__resource.env));for(const i of r)this.__graph.dataset.delete(i);return r.size>0}forEach(t,r){for(const i of this.values())t.call(r,i,i,this)}has(t){return this.__graph.has(this.__resource.env.ns.rdf.type,kn(t,this.__resource.env)).terms.length>0}get size(){return this.__graph.out(this.__resource.env.ns.rdf.type).terms.filter(Is(ed)).length}[Symbol.iterator](){return this.values()}entries(){return this.__values.map(t=>[t,t])[Symbol.iterator]()}keys(){return this.values()}values(){return this.__values[Symbol.iterator]()}get[Symbol.toStringTag](){return this.__values.toString()}constructor(t,r=!1){this.__resource=t,this.__allGraphs=r,this.__graph=r?t.env.clownface({dataset:t.pointer.dataset,term:t.pointer.term,graph:void 0}):t.pointer}get __values(){const t=this.__allGraphs?null:this.__resource._graphId;return[...this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,null,t)].map(n=>this.__resource.env.clownface({dataset:this.__graph.dataset,term:n.object,graph:n.graph})).map(n=>this.__resource._create(n)).filter(Is(rd(!1)))}}class id{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}id.prototype.termType="BlankNode";class Ao{equals(t){return!!t&&t.termType===this.termType}}Ao.prototype.termType="DefaultGraph";Ao.prototype.value="";function Tl(e,t){if(!t)return null;if(t.termType==="BlankNode")return e.blankNode(t.value);if(t.termType==="DefaultGraph")return e.defaultGraph();if(t.termType==="Literal")return e.literal(t.value,t.language||e.namedNode(t.datatype.value));if(t.termType==="NamedNode")return e.namedNode(t.value);if(t.termType==="Quad"){const r=e.fromTerm(t.subject),i=e.fromTerm(t.predicate),n=e.fromTerm(t.object),s=e.fromTerm(t.graph);return e.quad(r,i,n,s)}if(t.termType==="Variable")return e.variable(t.value);throw new Error(`unknown termType ${t.termType}`)}class li{constructor(t,r,i,n=""){this.value=t,this.language=r,this.datatype=i,this.direction=n}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)&&(t.direction||"")===this.direction}}li.prototype.termType="Literal";class Nr{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}Nr.prototype.termType="NamedNode";class So{constructor(t,r,i,n){this.subject=t,this.predicate=r,this.object=i,this.graph=n}equals(t){return!!t&&(t.termType==="Quad"||!t.termType)&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)}}So.prototype.termType="Quad";So.prototype.value="";class nd{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}nd.prototype.termType="Variable";const ky=new Nr("http://www.w3.org/1999/02/22-rdf-syntax-ns#dirLangString"),$l=new Nr("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),By=new Nr("http://www.w3.org/2001/XMLSchema#string");class Ir{constructor(){this.init()}init(){this._data={blankNodeCounter:0,defaultGraph:new Ao}}namedNode(t){return new Nr(t)}blankNode(t){return t=t||"b"+ ++this._data.blankNodeCounter,new id(t)}literal(t,r){return typeof r=="string"?new li(t,r,$l):typeof r?.language=="string"?new li(t,r.language,r.direction?ky:$l,r.direction):new li(t,"",r||By)}variable(t){return new nd(t)}defaultGraph(){return this._data.defaultGraph}quad(t,r,i,n=this.defaultGraph()){return new So(t,r,i,n)}fromTerm(t){return Tl(this,t)}fromQuad(t){return Tl(this,t)}}Ir.exports=["blankNode","defaultGraph","fromQuad","fromTerm","literal","namedNode","quad","variable"];const Ft=new Ir,Fy={apply:(e,t,r)=>e(r[0]),get:(e,t)=>e(t)};function A(e,{factory:t=Ft}={}){const r=(i="")=>t.namedNode(`${e}${i.raw||i}`);return typeof Proxy>"u"?r:new Proxy(r,Fy)}const Ls=A("http://www.w3.org/1999/02/22-rdf-syntax-ns#");function sd(e){return Ls.nil.equals(e.term)}function Pr(e){const t=sd(e),r=e.out([Ls.first,Ls.rest]).values.length===2;return t||r}function Eo(e,t,r){const i=[];let n=t;for(;!sd(n);)n.out(e.env.ns.rdf.first).map((o,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:first objects");return r.call(e,o)}).forEach(o=>{if(Array.isArray(o))throw new Error("Malformed RDF List had multiple rdf:first objects");i.push(o)}),n=n.out(e.env.ns.rdf.rest).map((o,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:rest objects");return o})[0];return i}function*od(e){let t=e.constructor;for(;t;)"__properties"in t&&(yield t),t=Object.getPrototypeOf(t)}function zy(e){switch(e.termType){case"NamedNode":case"BlankNode":case"Literal":return!0;default:return!1}}function Uy(e){const t=e.pointer._context[0].graph;return[...e.pointer.dataset.match(e.id,null,null,t)].reduce((r,i)=>{if(e.env.ns.rdf.type.equals(i.predicate))return r;const n=r.get(i.predicate)||[];return zy(i.object)&&n.push(e.pointer.node(i.object)),r.set(i.predicate,n),r},e.env.termMap())}function Hy(e,t,r){return e&&t in e?e[t]===r.value:!1}function ad(e,t){if(t.ns.xsd.string.equals(e.datatype))return e.value;if(t.ns.xsd.integer.equals(e.datatype)){const r=Number.parseInt(e.value);if(r.toString()===e.value)return r}if(t.ns.xsd.double.equals(e.datatype)){const r=Number.parseFloat(e.value);if(r.toString()===e.value)return r}if(t.ns.xsd.boolean.equals(e.datatype)){if(e.value==="true")return!0;if(e.value==="false")return!1}return t.ns.rdf.langString.equals(e.datatype)?{"@value":e.value,"@language":e.language}:e.datatype?{"@value":e.value,"@type":e.datatype.value}:e.value}function qy(e,t){return(r,[i,n])=>{const s=a=>{if(a.term.termType==="Literal")return ad(a.term,e.env);const l=a.list();return l?[...l].map(s):Pi(e._create(e.pointer.node(a.term)),t)},o=n.map(s);return o.length===1?r[i.value]=o[0]:r[i.value]=o,r}}function Vy(e){const{parentContexts:t,visitedResources:r,remainingObjects:i,context:n,resource:s,namespace:o}=e;return({json:a,contextPopulated:l=!1},[u,{options:h}])=>{const m=h.path?h.path:o?o(u):null;if(!m||Array.isArray(m)||typeof m=="function"||h.subjectFromAllGraphs)return{json:a,contextPopulated:l};let y=!1;const v=typeof m=="string"?e.resource.env.namedNode(m):m;if(!i.get(v))return{json:a,contextPopulated:l};const P=s.pointer.out(v);Hy(t,u,v)||(Pr(P)?n[u]={"@container":"@list","@id":v.value}:n[u]=v.value,y=!0);function I(M){switch(M.term.termType){case"BlankNode":case"NamedNode":return h.fromTerm.call(s,M);default:return M.term}}const $=P.map(M=>M.term.termType==="Literal"?M.term:Pr(M)?Eo(s,M,I):I(M)).map(function M(S){if(Array.isArray(S))return S.map(w=>M(w));if("termType"in S)switch(S.termType){case"Literal":return ad(S,s.env);case"BlankNode":case"NamedNode":return Pi(s._create(s.pointer.node(S)),{parentContexts:{...t,...n},visitedResources:r});default:return null}return Pi(S,{parentContexts:{...t,...n},visitedResources:r})});return h.values.includes("array")&&$.length!==1?a[u]=$:h.values.includes("list")&&Array.isArray($[0])?a[u]=$[0]||[]:$.length>1?a[u]=$:a[u]=h.values.includes("single")?$[0]:$,i.delete(v),{json:a,contextPopulated:l||y}}}function Pi(e,{parentContexts:t,visitedResources:r=e.env.termSet()}={}){const n={id:e.id.termType==="NamedNode"?e.id.value:`_:${e.id.value}`},s=[...e.types];if(s.length>0&&(n.type=s.map(h=>h.id.value)),r.has(e.id))return n;r.add(e.id);const o=Uy(e);let a=!0,l;t?l={}:(a=!1,l={id:"@id",type:"@type"});let u=!1;for(const{__properties:h,__ns:m}of od(e))({contextPopulated:u}=[...h].reduce(Vy({parentContexts:t,visitedResources:r,resource:e,remainingObjects:o,context:l,namespace:m}),{json:n,contextPopulated:u}));return[...o].reduce(qy(e,{parentContexts:{...t,...l},visitedResources:r}),n),(!a||u)&&(n["@context"]=l),n}function ld(e,t){return t&&typeof t!="string"?e.node(t):!t||t.startsWith("_:")?e.blankNode():e.namedNode(t)}function cd(e,t){const r=ld(e.pointer,t.id);return e._create(r,[],{initializer:t})}const Ce=class Ce{static _userInitializeProperties(t,r={}){Object.entries(r).filter(([i])=>i!=="id"&&i!=="types").forEach(([i,n])=>{if(!i.startsWith("http")){typeof n=="function"?t[i]=n(t.pointer.any()):t[i]=n;return}const o=(Array.isArray(n)?n:[n]).map(function a(l){if(typeof l=="function"){const m=l(t.pointer.any());if(typeof m=="function")throw new Error("Initializer factory function cannot return a function");if(Array.isArray(m))throw new Error("Initializer factory function cannot return an array");return a(m)}if(typeof l=="object"&&"term"in l)return l.term;if(typeof l=="object"&&"pointer"in l)return l.pointer;if(typeof l=="object"&&"termType"in l)return t.pointer.node(l);let u;return typeof l=="object"&&"value"in l&&"datatype"in l?u=t.env.rdfine().convert.toLiteral(l.value,l.datatype):u=t.env.rdfine().convert.toLiteral(l),u?t.pointer.node(u):cd(t,l).pointer});t.pointer.addOut(t.pointer.namedNode(i),o)});for(const i of r.types||[])t.types.add(i)}constructor(t,r,i={}){if(this.__initialized=!1,t.term.termType!=="BlankNode"&&t.term.termType!=="NamedNode")throw new Error(`RdfResource cannot be initialized from a ${t.term.termType} node`);let n;"id"in r?(n=r,this.env=n.env):this.env=r;const s=this.env.clownface({...t,term:t.term});s._context[0].graph?(this.pointer=s,this.unionGraphPointer=this.env.clownface({dataset:s.dataset,term:s.term,graph:void 0})):(this.pointer=this.env.clownface({dataset:s.dataset,term:s.term,graph:this.env.defaultGraph()}),this.unionGraphPointer=this.env.clownface({dataset:s.dataset,term:s.term})),this.__initializeProperties=td(()=>{const o=this;return[...od(o)].flatMap(l=>[...l.__initializers]).forEach(([l,u])=>{const h=o[l];if(Array.isArray(h)&&h.length===0||typeof h>"u"){if(typeof u=="function"){o[l]=u(o);return}o[l]=u}}),!0}),this._parent=n,this.__initialized=this.__initializeProperties(),Ce._userInitializeProperties(this,i)}get id(){return this.pointer.term}get _graphId(){return this.pointer._context[0].graph}get types(){return new jy(this)}get isAnonymous(){return this.id.termType==="BlankNode"}hasType(t){return this.types.has(t)}equals(t){if(!t)return!1;if("termType"in t)return this.id.equals(t);const r="_context"in t?t:t.pointer,i=this.id.equals(r.term);return this.isAnonymous||r.term.termType==="BlankNode"?i&&this.pointer.dataset===r.dataset:i}get(t,r){const i=this.getArray(t,r);return i.length>0?i[0]:null}getArray(t,r){const i=this._getObjects(t,r).filter(n=>n.term.termType==="NamedNode"||n.term.termType==="BlankNode").map(n=>this._create(n,[],{parent:this}));return i.length?i:[]}getNumber(t,r){const[i]=this._getObjects(t,r).toArray();if(typeof i>"u")return null;if(i.term.termType==="Literal")return parseFloat(i.value);throw new Error(`Expected property '${t}' to be a number but found '${i}'`)}getString(t,r){const[i]=this._getObjects(t,r).toArray();if(typeof i>"u")return null;if(i.term.termType==="Literal")return i.value;throw new Error(`Expected property '${t}' to be a literal but found '${i}'`)}getBoolean(t,r){const[i]=this._getObjects(t,r).toArray();if(typeof i>"u")return!1;if(i.term.termType==="Literal"&&this.env.ns.xsd.boolean.equals(i.term.datatype))return i.term.equals(this.pointer.literal(!0).term);throw new Error(`Expected property '${t}' to be a boolean but found '${i}'`)}_getObjects(t,{strict:r}={strict:!1}){const i=typeof t=="string"?this.pointer.namedNode(t):t,n=this.pointer.out(i);if(!n.terms.length&&r)throw new Error(`Value for predicate <${t}> was missing`);return n}_create(t,r,i={}){return this.env.rdfine().factory.createEntity(t,r,i)}toJSON(){return Pi(this)}};Ce.__mixins=[],Ce.__properties=new Map,Ce.__initializers=new Map;let Ms=Ce;function Gy(e,t){if(!t)throw new Error(`Cannot construct URI for property ${e}. Annotate the class with @namespace or use a NamedNode`);return t[e]}function Jy(e,t,r){return typeof e=="string"?e.match(/^(http|urn):\/\//)?t.namedNode(e):Gy(e,r):e}function Wy(e){const t=r=>r.out(e).toArray();return t.predicate=e,t.crossesGraphBoundaries=!1,t}function Ol(e,t,r){return r.map(i=>typeof i=="function"?i.call(t,e):Wy(Jy(i,t,e)))}function Yy(e){const t=r=>{switch(r.term.termType){case"BlankNode":case"NamedNode":return Pr(r)?Eo(e,r,t):e._create(r,[],{parent:e});default:return r.term}};return t}function Qy(e){return new Proxy(e,{get(t,r){if(r in t||typeof r=="symbol")return t[r.toString()];const i=t._getObjects(r.toString());if(i.values.length===0)return;const n=i.map(Yy(t));return n.length===1?n[0]:n},set(t,r,i){if(r in t||typeof r=="symbol")return t[r.toString()]=i,!0;if(typeof r=="number")return!1;const n=Array.isArray(i)?i:[i],s=n.reduce((a,l)=>(typeof l=="function"&&(l=l(t.pointer)),!l||typeof l!="object"?a:l&&("termType"in l||"_context"in l)?[...a,l]:[...a,l.id]),[]),o=t.pointer.namedNode(r.toString());return t.pointer.deleteOut(o),n.length&&t.pointer.addOut(o,s),!0}})}class Ky{constructor(t){this.__env=t,this.__mixins=new Set,this.__alwaysMixins=new Set,this.__typeMixins=new Map,this.__typeCache=new Map,this.BaseClass=t.rdfine.Resource}addMixin(...t){this.__typeCache.clear(),t.forEach(r=>{if("appliesTo"in r){const i=this.__typeMixins.get(r.appliesTo.value)||[];this.__typeMixins.set(r.appliesTo.value,[...i,r])}else r.shouldApply===!0&&this.__alwaysMixins.add(r),this.__mixins.add(r)})}createEntity(t,r=[],i={}){let n=this.BaseClass,s=r;if(r.length>0){const[h,...m]=r;this.__isConstructor(h)&&(n=h,s=m)}const o=t.out(this.__env.ns.rdf.type).values;for(const h of i.initializer?.types||[])"termType"in h?o.push(h.value):o.push(h.id.value);n=this.__getBaseClass(n,o);const a=new n(t,this.__env),l=[...this.__mixins].reduce((h,m)=>((m.shouldApply===!0||typeof m.shouldApply=="function"&&m.shouldApply(a))&&h.add(m),h),new Set(s)),u=this.__extend(n,[...l]);return Qy(new u(t,i.parent||this.__env,i.initializer))}__getBaseClass(t,r){const i=[t.name,...r].toString(),n=this.__typeCache.get(i);if(n)return n;const s=r.reduce((a,l)=>{const u=this.__typeMixins.get(l);return u&&u.forEach(h=>a.add(h)),a},new Set),o=this.__extend(t,[...this.__alwaysMixins,...s]);return this.__typeCache.set(i,o),o}__extend(t,r){const i=r.reduce((s,o)=>o(s),t),n=t.__mixins||[];return i.__mixins=[...n,...r],i}__isConstructor(t){return"__mixins"in t}}function ud(e,t){e.__ns=t}const Xy=(e,t)=>(ud(t,e),t),Zy=(e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(n){ud(n,e)}}},D=e=>t=>typeof t=="function"?Xy(e,t):Zy(e,t);function Rl(e,t,r){return r.reduce((n,s)=>{const o=[];return n.forEach(a=>{o.push(...s(a,e))}),o},t).reduce((n,s)=>n.concat(s.toArray()),[])}function tg(e,t){const i=[...e.datasets.reduce((n,s)=>[...s].reduce((o,a)=>o.add(a.graph),n),t.termSet()).values()];return i.length?i.map(n=>t.clownface({dataset:e.dataset,term:e.term,graph:n})):[e]}function dd(e,t,r){const{fromTerm:i,toTerm:n,assertSetValue:s,valueTypeName:o,initial:a,strict:l,compare:u,subjectFromAllGraphs:h,filter:m}=r;let y=["single"];Array.isArray(r.values)?y=r.values:r.values&&(y=[r.values]);const v=E=>Array.isArray(r.path)?Ol(e.constructor.__ns,E.env,r.path):Ol(e.constructor.__ns,E.env,[r.path||t]);Object.defineProperty(e,t,{get(){const E=h?tg(this.pointer,this.env):[this.pointer],P=v(this);let I=Rl(this.env,E,P);const R=P.some(M=>M.crossesGraphBoundaries);(h||R)&&(y=["array"]),m&&(I=I.filter(M=>m(M.term)));const $=I.map((M,S)=>{if(Pr(M)){if(S>0)throw new Error("Lists of lists are not supported");return Eo(this,M,i.bind(this))}return i.call(this,M)}).filter(Is(u));if(y.includes("array")&&$.length!==1)return $;if(y.includes("list")&&Array.isArray($[0]))return $[0]||[];if($.length>1&&!y.includes("array"))throw new Error(`${t}: Multiple terms found where 0..1 was expected`);if(Array.isArray($[0])&&!y.includes("list"))throw new Error(`${t}: RDF List found where 0..1 object was expected`);if(this.__initialized&&l&&$.length===0)throw new Error(`Object not found for property ${t}`);return y.includes("single")?$[0]:$},set(E){if(!y.includes("array")&&!y.includes("list")&&Array.isArray(E))throw new Error(`${t}: Cannot set array to a non-array property`);const P=v(this),I=P.length===1?this.pointer.toArray():Rl(this.env,[this.pointer],P.slice(0,P.length-1));if(I.length>1)throw new Error("Cannot set value to multiple nodes at once");const R=I[0],$=P[P.length-1].predicate;if(R.out($).forEach(T=>{Pr(T)&&R.deleteList($)}),R.deleteOut($),E===null||typeof E>"u")return;let M=!1,S;Array.isArray(E)?(M=!0,S=E):S=[E];const w=S.reduce((T,O)=>{let L,j;if(typeof O=="function"?j=O(this.pointer.any()):j=O,j&&typeof j=="object"&&"termType"in j?L=j:j&&typeof j=="object"&&"term"in j?L=j.term:j&&typeof j=="object"&&"pointer"in j?L=j.id:L=n.call(this,j),m&&!m(L))return T;if(!s(j)){const F=P.map(st=>`<${st.predicate.value}>`).join("/");throw new Error(`Unexpected value for path ${F}. Expecting a ${o} or RDF/JS term.`)}return[...T,L]},[]);y.includes("list")&&(y.length===1||M)?w.length===0?R.addOut($,this.env.ns.rdf.nil):R.addList($,w):R.addOut($,w)}}),Object.hasOwnProperty.call(e.constructor,"__properties")||(e.constructor.__properties=new Map),Object.hasOwnProperty.call(e.constructor,"__initializers")||(e.constructor.__initializers=new Map),e.constructor.__properties.set(t,{initial:a,options:{...r,values:y}}),a&&e.constructor.__initializers.set(t,a)}const eg=(e,t,r)=>{dd(t,r.toString(),e)},rg=(e,t)=>({kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){dd(r.prototype,t.key.toString(),e)}});function Co(e){return(t,r)=>r!==void 0?eg(e,t,r):rg(e,t)}function ig(e={}){const t=e.type||String;return Co({...e,fromTerm(r){return this.env.rdfine().convert.fromLiteral(t,r)},toTerm(r){return this.env.rdfine().convert.toLiteral(r,e.datatype)},valueTypeName:t.name,assertSetValue:r=>{if(r instanceof Date)return!0;if(typeof r=="object"){let i;return"id"in r?!1:("term"in r?i=r.term:i=r,i.termType==="Literal")}return!0},compare(r,i){return r===i}})}function ng(e={}){return Co({...e,fromTerm(t){return e.implicitTypes&&t.addOut(this.env.ns.rdf.type,e.implicitTypes),this._create(t,e.as,{parent:this})},toTerm(t){const r=ld(this.pointer,t.id);return t.types&&Array.isArray(t.types)&&r.addOut(this.env.ns.rdf.type,t.types),e.implicitTypes&&r.addOut(this.env.ns.rdf.type,e.implicitTypes),this._create(r,e.as,{initializer:t}),r.term},valueTypeName:"RdfResource instance",assertSetValue:t=>{let r=null;return"termType"in t?r=t:"term"in t&&(r=t.term),r?r.termType==="NamedNode"||r.termType==="BlankNode":!0},compare:rd(!0)})}function sg(e){return typeof e=="object"&&e instanceof Object&&"id"in e}function C(e={}){return Co({...e,fromTerm:t=>t.term,toTerm(t){return sg(t)?cd(this,t).id:this.env.rdfine().convert.toLiteral(t)||this.env.literal(t.toString())},valueTypeName:"RDF/JS term object",assertSetValue:()=>!0,compare:ed})}C.literal=ig;C.resource=ng;function og(e,t,r){return t===Boolean?Ft.literal("true",e.ns.xsd.boolean).equals(r.term):t===Number?Number.parseFloat(r.value):t===Date?new Date(Date.parse(r.value)):r.value}function ag(e,t,r){switch(typeof t){case"boolean":return Ft.literal(t.toString(),r||e.ns.xsd.boolean);case"number":return Ft.literal(t.toString(),r||(Number.isInteger(t)?e.ns.xsd.integer:e.ns.xsd.float));case"bigint":return Ft.literal(t.toString(),r||e.ns.xsd.long);case"string":return Ft.literal(t,r);case"object":if(t instanceof Date){const i=t.toISOString();return e.ns.xsd.date.equals(r)?Ft.literal(i.substr(0,10),e.ns.xsd.date):Ft.literal(i,r||e.ns.xsd.dateTime)}break}}class lg{init(){const t=this;class r extends Ms{static get env(){return t}}let i;this.rdfine=()=>({factory:i,createEntity:i.createEntity.bind(i),convert:{toLiteral:ag.bind(null,t),fromLiteral:og.bind(null,t)}}),this.rdfine.Resource=r,i=new Ky(t)}static get exports(){return["_initVocabulary"]}_initVocabulary(t){return this.rdfine().factory.addMixin(...Object.values(t)),Object.fromEntries(Object.entries(t).reduce((r,[i,n])=>"createFactory"in n?[...r,[i.replace(/Mixin$/,""),n.createFactory(this)]]:r,[]))}}var Bn,Nl;function cg(){if(Nl)return Bn;Nl=1;function e(t,r){for(const i of r)t.add(i);return t}return Bn=e,Bn}var ug=cg();const Ds=$r(ug);var Fn,Il;function dg(){if(Il)return Fn;Il=1;function e(t,r,i,n,s){const o=t.match(r,i,n,s);for(const a of o)t.delete(a);return t}return Fn=e,Fn}var hg=dg();const hd=$r(hg);var zn,Ll;function pg(){if(Ll)return zn;Ll=1;function e(t,r){if(t.size!==r.size)return!1;for(const i of t)if(!r.has(i))return!1;return!0}return zn=e,zn}var fg=pg();const pd=$r(fg),mg=e=>class{dataset;init(){const t=e(this);this.dataset=((r=[])=>new t([...r])),this.dataset.Class=t,this.dataset.addAll=Ds,this.dataset.deleteMatch=hd,this.dataset.equals=pd}};class Ml extends Map{import(t,r,i){const n=this.get(t);return n?n.import(r,i):null}}class _g{constructor({factory:t}){this.factory=t,this.parsers=new Ml,this.serializers=new Ml}import(t){if(t.parsers)for(const[r,i]of t.parsers)this.parsers.set(r,new i.constructor({factory:this.factory}));if(t.serializers)for(const[r,i]of t.serializers)this.serializers.set(r,new i.constructor({factory:this.factory}));return this}}let yg=class{init(){this.formats=new _g({factory:this})}clone(t){this.formats.import(t.formats)}},Po=class{namespace(t){return A(t,{factory:this})}};Po.exports=["namespace"];class fd{init(){this.ns=Fd}}const gg=A("http://www.w3.org/ns/auth/acl#"),bg=gg,vg=A("https://www.w3.org/ns/activitystreams#"),wg=vg,xg=A("http://purl.org/ontology/bibo/"),Ag=xg,Sg=A("http://creativecommons.org/ns#"),Eg=Sg,Cg=A("http://www.w3.org/ns/auth/cert#"),Pg=Cg,Tg=A("http://www.w3.org/2011/content#"),$g=Tg,Og=A("http://qudt.org/vocab/constant/"),Rg=Og,Ng=A("http://www.cidoc-crm.org/cidoc-crm/"),Ig=Ng,Lg=A("http://www.w3.org/ns/csvw#"),Mg=Lg,Dg=A("http://commontag.org/ns#"),jg=Dg,kg=A("http://qudt.org/vocab/currency/"),Bg=kg,Fg=A("http://datashapes.org/sparql#"),zg=Fg,Ug=A("http://datashapes.org/dash#"),Hg=Ug,qg=A("http://dbpedia.org/ontology/"),Vg=qg,Gg=A("http://purl.org/dc/elements/1.1/"),Jg=Gg,Wg=A("http://purl.org/dc/dcam/"),Yg=Wg,Qg=A("http://www.w3.org/ns/dcat#"),Kg=Qg,Xg=A("http://purl.org/dc/dcmitype/"),Zg=Xg,tb=A("http://purl.org/dc/terms/"),eb=tb,rb=A("http://www.ics.forth.gr/isl/CRMdig/"),ib=rb,nb=A("http://qudt.org/vocab/discipline/"),sb=nb,ob=A("http://usefulinc.com/ns/doap#"),ab=ob,lb=A("https://ekgf.github.io/dprod/"),cb=lb,ub=A("http://www.w3.org/ns/dpv#"),db=ub,hb=A("http://www.w3.org/ns/dqv#"),pb=hb,fb=A("http://www.linkedmodel.org/schema/dtype#"),mb=fb,_b=A("http://www.w3.org/ns/duv#"),yb=_b,gb=A("http://www.w3.org/ns/earl#"),bb=gb,vb=A("http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#"),wb=vb,xb=A("http://www.w3.org/2003/12/exif/ns#"),Ab=xb,Sb=A("http://xmlns.com/foaf/0.1/"),Eb=Sb,Cb=A("http://purl.org/vocab/frbr/core#"),Pb=Cb,Tb=A("http://www.opengis.net/ont/geosparql#"),$b=Tb,Ob=A("http://www.opengis.net/def/function/geosparql/"),Rb=Ob,Nb=A("http://www.opengis.net/def/rule/geosparql/"),Ib=Nb,Lb=A("http://www.opengis.net/ont/gml#"),Mb=Lb,Db=A("http://www.geonames.org/ontology#"),jb=Db,kb=A("http://purl.org/goodrelations/v1#"),Bb=kb,Fb=A("http://www.w3.org/2003/g/data-view#"),zb=Fb,Ub=A("https://gs1.org/voc/"),Hb=Ub,qb=A("http://vocab.gtfs.org/terms#"),Vb=qb,Gb=A("http://www.w3.org/2011/http#"),Jb=Gb,Wb=A("http://www.w3.org/ns/hydra/core#"),Yb=Wb,Qb=A("http://www.w3.org/2002/12/cal/icaltzd#"),Kb=Qb,Xb=A("https://linked.art/ns/terms/"),Zb=Xb,tv=A("http://www.w3.org/ns/ldp#"),ev=tv,rv=A("http://www.w3.org/2000/10/swap/list#"),iv=rv,nv=A("http://www.w3.org/ns/locn#"),sv=nv,ov=A("http://www.w3.org/2000/10/swap/log#"),av=ov,lv=A("http://lexvo.org/ontology#"),cv=lv,uv=A("http://w3id.org/nfdi4ing/metadata4ing#"),dv=uv,hv=A("http://www.w3.org/ns/ma-ont#"),pv=hv,fv=A("http://www.loc.gov/mads/rdf/v1#"),mv=fv,_v=A("http://www.w3.org/2000/10/swap/math#"),yv=_v,gv=A("http://www.w3.org/ns/oa#"),bv=gv,vv=A("http://ogp.me/ns#"),wv=vv,xv=A("http://www.w3.org/ns/solid/oidc#"),Av=xv,Sv=A("http://www.w3.org/ns/org#"),Ev=Sv,Cv=A("http://www.w3.org/2002/07/owl#"),Lr=Cv,Pv=A("http://www.w3.org/ns/pim/space#"),Tv=Pv,$v=A("http://qudt.org/vocab/prefix/"),Ov=$v,Rv=A("http://www.w3.org/ns/prov#"),Nv=Rv,Iv=A("http://purl.org/linked-data/cube#"),Lv=Iv,Mv=A("http://qudt.org/vocab/dimensionvector/"),Dv=Mv,jv=A("http://qudt.org/vocab/quantitykind/"),kv=jv,Bv=A("http://qudt.org/schema/qudt/"),Fv=Bv,zv=A("http://rdaregistry.info/Elements/u/"),Uv=zv,Hv=A("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),fe=Hv,qv=A("http://www.w3.org/ns/rdfa#"),Vv=qv,Gv=A("http://www.w3.org/2000/01/rdf-schema#"),gt=Gv,Jv=A("http://purl.org/stuff/rev#"),Wv=Jv,Yv=A("https://www.ica.org/standards/RiC/ontology#"),Qv=Yv,Kv=A("http://www.w3.org/ns/r2rml#"),Xv=Kv,Zv=A("http://purl.org/rss/1.0/"),tw=Zv,ew=A("http://schema.org/"),rw=ew,iw=A("http://www.w3.org/ns/sparql-service-description#"),nw=iw,sw=A("http://purl.org/linked-data/sdmx#"),ow=sw,aw=A("http://semanticweb.cs.vu.nl/2009/11/sem/"),lw=aw,cw=A("http://www.w3.org/2000/10/swap/set#"),uw=cw,dw=A("http://www.opengis.net/ont/sf#"),hw=dw,pw=A("http://www.w3.org/ns/shacl#"),b=pw,fw=A("http://www.w3.org/ns/shex#"),mw=fw,_w=A("http://www.w3.org/ns/shacl-shacl#"),yw=_w,gw=A("http://rdfs.org/sioc/ns#"),bw=gw,vw=A("http://www.w3.org/2004/02/skos/core#"),ww=vw,xw=A("http://www.w3.org/2008/05/skos-xl#"),Aw=xw,Sw=A("http://www.w3.org/ns/solid/terms#"),Ew=Sw,Cw=A("http://www.w3.org/ns/sosa/"),Pw=Cw,Tw=A("http://qudt.org/vocab/sou/"),$w=Tw,Ow=A("http://www.w3.org/ns/ssn/"),Rw=Ow,Nw=A("http://www.w3.org/ns/posix/stat#"),Iw=Nw,Lw=A("http://www.w3.org/2000/10/swap/string#"),Mw=Lw,Dw=A("http://www.w3.org/2006/03/test-description#"),jw=Dw,kw=A("http://www.w3.org/2006/time#"),Bw=kw,Fw=A("http://qudt.org/vocab/unit/"),zw=Fw,Uw=A("http://www.linkedmodel.org/schema/vaem#"),Hw=Uw,qw=A("http://purl.org/vocab/vann/"),Vw=qw,Gw=A("http://www.w3.org/2006/vcard/ns#"),Jw=Gw,Ww=A("http://rdfs.org/ns/void#"),Yw=Ww,Qw=A("http://www.w3.org/2003/06/sw-vocab-status/ns#"),Kw=Qw,Xw=A("http://purl.org/vso/ns#"),Zw=Xw,t0=A("http://www.w3.org/2007/05/powder-s#"),e0=t0,r0=A("http://www.w3.org/2003/01/geo/wgs84_pos#"),i0=r0,n0=A("http://www.w3.org/1999/xhtml/vocab#"),s0=n0,o0=A("http://rdf-vocabulary.ddialliance.org/xkos#"),a0=o0,l0=A("http://www.w3.org/2001/XMLSchema#"),At=l0,c0=A("http://www.w3.org/2007/rif#"),u0=c0,d0=A("http://rdf.data-vocabulary.org/#"),h0=d0,p0=A("http://www.w3.org/2007/05/powder#"),f0=p0,m0=A("http://www.w3.org/XML/1998/namespace/"),_0=m0,To=e=>{const t=e.namespace("http://www.w3.org/2001/XMLSchema#"),r=e.namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");return{first:r.first,nil:r.nil,rest:r.rest,langString:r.langString,xsd:t}};function dt(e,t){return typeof e>"u"||e===null?t:Array.isArray(e)?e:typeof e!="string"&&e[Symbol.iterator]?[...e]:[e]}const me=new xo([Po,Ir]),{xsd:js}=To(me);function y0(e,t=me){return typeof e!="boolean"?null:t.literal(e.toString(),js("boolean"))}function g0(e,t=me){return typeof e!="number"?null:Number.isInteger(e)?t.literal(e.toString(10),js("integer")):t.literal(e.toString(10),js("double"))}function b0(e,t=me){return typeof e!="string"?null:t.literal(e)}function v0(e,t=me){return y0(e,t)||g0(e,t)||b0(e,t)}function w0(e,t){if(e&&typeof e!="string")throw new Error("Blank node identifier must be a string");return t.blankNode(e)}function x0(e,t,r){if(typeof e=="string")return t=t&&(t.value||t.toString()),t&&t.indexOf(":")!==-1&&(t=r.namedNode(t)),r.literal(e.toString(),t);const i=v0(e,r);if(!i)throw new Error("The value cannot be converted to a literal node");return i}function Dl(e,t){if(typeof e!="string")throw new Error("Named node must be an IRI string");return t.namedNode(e)}function md(e,t="Literal",r,i){if(e&&typeof e=="object"&&e.termType)return e;if(e&&e.constructor.name==="URL")return Dl(e.toString(),i);if(t==="BlankNode")return w0(e,i);if(!(e===null||typeof e>"u")){if(t==="Literal")return x0(e,r,i);if(t==="NamedNode")return Dl(e,i);throw new Error("unknown type")}}function A0(e,t,r,i){return(typeof e>"u"||e===null)&&!t?e:(dt(e)||[void 0]).reduce((n,s)=>typeof s=="object"&&s.terms?n.concat(s.terms):(n.push(md(s,t,r,i)),n),[])}const jl=To(me);function S0(e,t){const r=t.termType!=="Literal",i=jl.langString.equals(t.datatype)||jl.xsd.string.equals(t.datatype);if(r||!i)return e;const n=t.language.toLowerCase();return e.has(n)?e.get(n).push(t):e.set(n,[t]),e}function E0(e){const t=e.reduce(S0,new Map),r=[...t.entries()];return i=>{const n=i.toLowerCase();if(n==="*")return r[0]&&r[0][1];const s=t.get(n);if(s)return s;const o=r.find(([a])=>a.startsWith(n));return o&&o[1]}}function C0(e,{language:t}){const r=typeof t=="string"?[t]:t,i=E0(e);return r.map(i).find(Boolean)||[]}class $o{constructor({dataset:t,graph:r,value:i,factory:n,namespace:s}){this.dataset=t,this.graph=r,this.factory=n,this.namespace=s,this.term=md(i,void 0,void 0,n)}clone({dataset:t=this.dataset,graph:r=this.graph,value:i,factory:n=this.factory,namespace:s=this.namespace}){return new $o({dataset:t,graph:r,value:i,factory:n,namespace:s})}has(t,r){return this.matchProperty(dt(this.term),t,r,dt(this.graph),"subject").map(i=>this.clone({value:i}))}in(t){return this.matchProperty(null,t,dt(this.term),dt(this.graph),"subject").map(r=>this.clone({value:r}))}out(t,{language:r}={}){let i=this.matchProperty(dt(this.term),t,null,dt(this.graph),"object");return typeof r<"u"&&(i=C0(i,{language:r})),i.map(n=>this.clone({value:n}))}addIn(t,r){const i=[];return this.term&&r.forEach(n=>{t.forEach(s=>{this.dataset.add(this.factory.quad(n,s,this.term,this.graph))}),i.push(this.clone({value:n}))}),i}addOut(t,r){const i=[];return this.term&&r.forEach(n=>{t.forEach(s=>{this.dataset.add(this.factory.quad(this.term,s,n,this.graph))}),i.push(this.clone({value:n}))}),i}addList(t,r){this.term&&t.forEach(i=>{const n=r.map(()=>this.factory.blankNode());this.dataset.add(this.factory.quad(this.term,i,n[0]||this.namespace.nil,this.graph));for(let s=0;s<n.length;s++)this.dataset.add(this.factory.quad(n[s],this.namespace.first,r[s],this.graph)),this.dataset.add(this.factory.quad(n[s],this.namespace.rest,n[s+1]||this.namespace.nil,this.graph))})}deleteIn(t,r){this.deleteMatch(r,t,dt(this.term),dt(this.graph))}deleteOut(t,r){this.deleteMatch(dt(this.term),t,r,dt(this.graph))}deleteList(t){t.forEach(r=>{for(const i of this.dataset.match(this.term,r))this.deleteItems(i)})}deleteItems(t){let r=[t];for(;!r[r.length-1].object.equals(this.namespace.nil);){const i=r[r.length-1].object;r=r.concat([...this.dataset.match(i)])}r.forEach(i=>{this.dataset.delete(i)})}match(t,r,i,n){if(!t&&!r&&!i&&!n)return[...this.dataset];t=t||[null],r=r||[null],i=i||[null],n=n||[null];const s=[];for(const o of n)for(const a of t)for(const l of r)for(const u of i)for(const h of this.dataset.match(a,l,u,o))s.push(h);return s}matchProperty(t,r,i,n,s){return this.match(t,r,i,n).map(o=>o[s])}deleteMatch(t,r,i,n){this.match(t,r,i,n).forEach(s=>{this.dataset.delete(s)})}}class ut{constructor({dataset:t,graph:r,term:i,value:n,factory:s,_context:o}){if(this.factory=s,this.namespace=To(s),o){this._context=o;return}const a=i&&dt(i)||n&&dt(n)||[null];this._context=a.map(l=>new $o({dataset:t,graph:r,value:l,factory:this.factory,namespace:this.namespace}))}get term(){const t=this.terms;if(t.length===1)return t[0]}get terms(){return this._context.map(t=>t.term).filter(Boolean)}get value(){const t=this.term;return t&&t.value}get values(){return this.terms.map(t=>t.value)}get dataset(){const t=this.datasets;if(t.length===1)return t[0]}get datasets(){return this._context.map(t=>t.dataset).filter(Boolean)}any(){return ut.fromContext(this._context.map(t=>t.clone({})),this)}isList(){return this.term?!!(this.term.equals(this.namespace.nil)||this.out(this.namespace.first).term):!1}list(){if(this.terms.length>1)throw new Error("iterator over multiple terms is not supported");if(this.term&&(this.term.termType!=="NamedNode"&&this.term.termType!=="BlankNode"||!this.term.equals(this.namespace.nil)&&!this.out(this.namespace.first).term))return null;let t=this;return{[Symbol.iterator]:()=>({next:()=>{if(!t.term||t.term.equals(this.namespace.nil))return{done:!0};const r=t.out(this.namespace.first);if(r.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:first on ${t.value}`);const i=t.out(this.namespace.rest);if(i.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:rest on ${t.value}`);return t=i,{done:!1,value:r}}})}}toArray(){return this._context.map(t=>ut.fromContext(t,this)).filter(t=>t.terms.some(Boolean))}filter(t){const r=this._context.map(i=>ut.fromContext(i,this));return ut.fromContext(this._context.filter((i,n)=>t(ut.fromContext(i,this),n,r)),this)}forEach(t){return this.toArray().forEach(t),this}map(t){return this.toArray().map(t)}toString(){return this.values.join()}node(t,{type:r,datatype:i,language:n}={}){t=this._toTermArray(t,r,i||n)||[null];const s=t.reduce((o,a)=>o.concat(this._context.reduce((l,u)=>l.concat([u.clone({value:a})]),[])),[]);return ut.fromContext(s,{factory:this.factory})}blankNode(t){return this.node(t,{type:"BlankNode"})}literal(t,r){return this.node(t,{type:"Literal",datatype:r})}namedNode(t){return this.node(t,{type:"NamedNode"})}in(t){t=this._toTermArray(t);const r=this._context.reduce((i,n)=>i.concat(n.in(t)),[]);return ut.fromContext(r,this)}out(t,r={}){t=this._toTermArray(t);const i=this._context.reduce((n,s)=>n.concat(s.out(t,r)),[]);return ut.fromContext(i,this)}has(t,r){t=this._toTermArray(t),r=this._toTermArray(r);const i=this._context.reduce((n,s)=>n.concat(s.has(t,r)),[]);return ut.fromContext(i,this)}addIn(t,r,i){if(!t)throw new Error("predicate parameter is required");typeof r=="function"&&(i=r,r=null),t=this._toTermArray(t),r=this._toTermArray(r)||[this.factory.blankNode()];const n=this._context.map(s=>s.addIn(t,r));return i&&ut.fromContext(n,this).forEach(i),this}addOut(t,r,i){if(!t)throw new Error("predicate parameter is required");typeof r=="function"&&(i=r,r=null),t=this._toTermArray(t),r=this._toTermArray(r)||[this.factory.blankNode()];const n=this._context.map(s=>s.addOut(t,r));return i&&ut.fromContext(n,this).forEach(i),this}addList(t,r){if(!t||!r)throw new Error("predicate and items parameter is required");return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(i=>i.addList(t,r)),this}deleteIn(t,r){return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(i=>i.deleteIn(t,r)),this}deleteOut(t,r){return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(i=>i.deleteOut(t,r)),this}deleteList(t){if(!t)throw new Error("predicate parameter is required");return t=this._toTermArray(t),this._context.forEach(r=>r.deleteList(t)),this}_toTermArray(t,r,i){return A0(t,r,i,this.factory)}static fromContext(t,{factory:r}){return new ut({_context:dt(t),factory:r})}}function P0({dataset:e,graph:t,term:r,value:i,factory:n=me,_context:s}){return new ut({dataset:e,graph:t,term:r,value:i,factory:n,_context:s})}class _d{clownface({...t}={}){return!t.dataset&&typeof this.dataset=="function"&&(t.dataset=this.dataset()),P0({...t,factory:this})}}_d.exports=["clownface"];function T0(e){return"_:"+e.value}function $0(e,t){return[...e].map(r=>t(r)).join(`
`)+`
`}function O0(){return""}function yd(e){return"<"+e.value+">"}const R0=/["\\\\\n\r]/,N0=/["\\\\\n\r]/g,I0={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function L0(e){return I0[e]}function M0(e){return R0.test(e)?e.replace(N0,L0):e}function D0(e){const t=M0(e.value);return e.datatype.value==="http://www.w3.org/2001/XMLSchema#string"?'"'+t+'"':e.datatype.value==="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"?'"'+t+'"@'+e.language:'"'+t+'"^^'+yd(e.datatype)}function j0(e,t){const r=t(e.subject),i=t(e.predicate),n=t(e.object),s=t(e.graph);return`${r} ${i} ${n} ${s?s+" ":""}.`}function k0(e){return"?"+e.value}function St(e){if(!e)return null;if(e.termType==="BlankNode")return T0(e);if(e.termType==="DefaultGraph")return O0();if(e.termType==="Literal")return D0(e);if(e.termType==="NamedNode")return yd(e);if(e.termType==="Quad"||e.subject&&e.predicate&&e.object&&e.graph)return j0(e,St);if(e.termType==="Variable")return k0(e);if(e[Symbol.iterator])return $0(e,St);throw new Error(`unknown termType ${e.termType}`)}class gd{constructor(t){if(this.index=new Map,t)for(const[r,i]of t)this.set(r,i)}get size(){return this.index.size}clear(){this.index.clear()}delete(t){return this.index.delete(St(t))}*entries(){for(const[,{term:t,value:r}]of this.index)yield[t,r]}forEach(t,r){for(const i of this.entries())t.call(r,i[1],i[0],this)}get(t){const r=this.index.get(St(t));return r&&r.value}has(t){return this.index.has(St(t))}*keys(){for(const[,{term:t}]of this.index)yield t}set(t,r){const i=St(t);return this.index.set(i,{term:t,value:r}),this}*values(){for(const[,{value:t}]of this.index)yield t}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}let Oo=class{termMap(t){return new gd(t)}};Oo.exports=["termMap"];function kl(e){try{return St(e)}catch{return null}}class B0{constructor(t){if(this.index=new Map,t)for(const r of t)this.add(r)}get size(){return this.index.size}add(t){const r=St(t);return this.index.has(r)||this.index.set(r,t),this}clear(){this.index.clear()}delete(t){return t?this.index.delete(kl(t)):!1}entries(){return this.values().entries()}forEach(t,r){return this.values().forEach(t,r)}has(t){return t?this.index.has(kl(t)):!1}values(){return new Set(this.index.values())}keys(){return this.values()}[Symbol.iterator](){return this.index.values()}}let bd=class{termSet(t){return new B0(t)}};bd.exports=["termSet"];class F0{constructor(){this.quadLevel=new Map}add(t,r){this.quadLevel.set(St(t),r)}has(t,r){const i=this.quadLevel.get(St(t));return i===void 0?!1:i<=r}}function Un({backward:e,callback:t,dataset:r,filter:i,forward:n,term:s,visited:o=new F0}){const a=(l,u)=>{const h=m=>{for(const y of m){if(o.has(y,u))continue;o.add(y,u);const v={dataset:r,level:u,quad:y};i(v)&&(t(v),n&&a(y.object,u+1),e&&a(y.subject,u+1))}};n&&h(r.match(l)),e&&h(r.match(null,null,l))};a(s,0)}class z0{constructor(t,{backward:r=!1,factory:i,forward:n=!0}){this.backward=r,this.factory=i,this.filter=t,this.forward=n}forEach({term:t,dataset:r},i){Un({backward:this.backward,callback:i,dataset:r,filter:this.filter,forward:this.forward,term:t})}match({term:t,dataset:r}){const i=this.factory.dataset();return Un({backward:this.backward,callback:({quad:n})=>i.add(n),dataset:r,filter:this.filter,forward:this.forward,term:t}),i}reduce({term:t,dataset:r},i,n){let s=n;return Un({backward:this.backward,callback:o=>{s=i(o,s)},dataset:r,filter:this.filter,forward:this.forward,term:t}),s}}class vd{traverser(t,{backward:r=!1,forward:i=!0}={}){return new z0(t,{backward:r,factory:this,forward:i})}}vd.exports=["traverser"];const U0=new de([Ir,yg,Po,fd,_d,Oo,bd,vd]);function te(e){return typeof e=="string"||e instanceof String}const H0="http://www.w3.org/2001/XMLSchema#string";function Q(e){if(typeof e=="string")return e;if(!e)return"";if(typeof e.id<"u"&&e.termType!=="Quad")return e.id;let t,r,i,n;switch(e.termType){case"NamedNode":return e.value;case"BlankNode":return`_:${e.value}`;case"Variable":return`?${e.value}`;case"DefaultGraph":return"";case"Literal":return e.language?`"${e.value}"@${e.language}`:`"${e.value}"${e.datatype&&e.datatype.value!==H0?`^^${e.datatype.value}`:""}`;case"Quad":return t=Hn(Q(e.subject)),r=Hn(Q(e.predicate)),i=Hn(Q(e.object)),n=e.graph.termType==="DefaultGraph"?"":` ${Q(e.graph)}`,`<<${t} ${r} ${i}${n}>>`;default:throw new Error(`Unexpected termType: ${e.termType}`)}}const q0=/^"(.*".*)(?="[^"]*$)/;function Hn(e){return e.replace(q0,(t,r)=>`"${r.replace(/"/g,'""')}`)}class V0{constructor(t){if(this._size=0,this._graphs=Object.create(null),this._id=0,this._ids=Object.create(null),this._ids["><"]=0,this._entities=Object.create(null),this._quads=new Map,t)for(const r of t)this.add(r)}get size(){let t=this._size;if(t!==null)return t;t=0;const r=this._graphs;let i,n;for(const s in r)for(const o in i=r[s].subjects)for(const a in n=i[o])t+=Object.keys(n[a]).length;return this._size=t,this._size}add(t){let r=Q(t.subject),i=Q(t.predicate),n=Q(t.object);const s=Q(t.graph);let o=this._graphs[s];o||(o=this._graphs[s]={subjects:{},predicates:{},objects:{}},Object.freeze(o));const a=this._ids,l=this._entities;return r=a[r]||(a[l[++this._id]=r]=this._id),i=a[i]||(a[l[++this._id]=i]=this._id),n=a[n]||(a[l[++this._id]=n]=this._id),this._addToIndex(o.subjects,r,i,n),this._addToIndex(o.predicates,i,n,r),this._addToIndex(o.objects,n,r,i),this._setQuad(r,i,n,s,t),this._size=null,this}delete(t){let r=Q(t.subject),i=Q(t.predicate),n=Q(t.object);const s=Q(t.graph),o=this._ids,a=this._graphs;let l,u,h;if(!(r=o[r])||!(i=o[i])||!(n=o[n])||!(l=a[s])||!(u=l.subjects[r])||!(h=u[i])||!(n in h))return this;this._removeFromIndex(l.subjects,r,i,n),this._removeFromIndex(l.predicates,i,n,r),this._removeFromIndex(l.objects,n,r,i),this._size!==null&&this._size--,this._deleteQuad(r,i,n,s);for(r in l.subjects)return this;return delete a[s],this}has(t){const r=Q(t.subject),i=Q(t.predicate),n=Q(t.object),s=Q(t.graph),o=this._graphs[s];if(!o)return!1;const a=this._ids;let l,u,h;return te(r)&&!(l=a[r])||te(i)&&!(u=a[i])||te(n)&&!(h=a[n])?!1:this._countInIndex(o.objects,h,l,u)===1}match(t,r,i,n){return this._createDataset(this._match(t,r,i,n))}[Symbol.iterator](){return this._match()[Symbol.iterator]()}_addToIndex(t,r,i,n){const s=t[r]||(t[r]={}),o=s[i]||(s[i]={}),a=n in o;return a||(o[n]=null),!a}_removeFromIndex(t,r,i,n){const s=t[r],o=s[i];delete o[n];for(const a in o)return;delete s[i];for(const a in s)return;delete t[r]}_findInIndex(t,r,i,n,s,o,a,l,u,h){let m,y,v;r&&((m=t,t={})[r]=m[r]);for(const E in t)if(y=t[E],y){i&&((m=y,y={})[i]=m[i]);for(const P in y)if(v=y[P],v){const I=n?n in v?[n]:[]:Object.keys(v);for(let R=0;R<I.length;R++){const $={[s]:E,[o]:P,[a]:I[R]},M=this._getQuad($.subject,$.predicate,$.object,l);if(h)h.push(M);else if(u(M))return!0}}}return h}_countInIndex(t,r,i,n){let s=0,o,a,l;r&&((o=t,t={})[r]=o[r]);for(const u in t)if(a=t[u],a){i&&((o=a,a={})[i]=o[i]);for(const h in a)l=a[h],l&&(n?n in l&&s++:s+=Object.keys(l).length)}return s}_getGraphs(t){return te(t)?{[t]:this._graphs[t]}:this._graphs}_match(t,r,i,n){t=t&&Q(t),r=r&&Q(r),i=i&&Q(i),n=n&&Q(n);const s=[],o=this._getGraphs(n),a=this._ids;let l,u,h,m;if(te(t)&&!(u=a[t])||te(r)&&!(h=a[r])||te(i)&&!(m=a[i]))return s;for(const y in o)l=o[y],l&&(u?m?this._findInIndex(l.objects,m,u,h,"object","subject","predicate",y,null,s):this._findInIndex(l.subjects,u,h,null,"subject","predicate","object",y,null,s):h?this._findInIndex(l.predicates,h,m,null,"predicate","object","subject",y,null,s):m?this._findInIndex(l.objects,m,null,null,"object","subject","predicate",y,null,s):this._findInIndex(l.subjects,null,null,null,"subject","predicate","object",y,null,s));return s}_getQuad(t,r,i,n){return this._quads.get(this._toId(t,r,i,n))}_setQuad(t,r,i,n,s){this._quads.set(this._toId(t,r,i,n),s)}_deleteQuad(t,r,i,n){this._quads.delete(this._toId(t,r,i,n))}_createDataset(t){return new this.constructor(t)}_toId(t,r,i,n){return`${t}:${r}:${i}:${n}`}}class G0 extends V0{addAll(...[t]){return Ds(this,t)}deleteMatches(...t){return hd(this,...t)}equals(...[t]){return pd(this,t)}forEach(t){Array.from(this).forEach(r=>t(r,this))}filter(t){return new this.constructor([...this].filter(r=>t(r,this)))}map(t){return new this.constructor([...this].map(r=>t(r,this)))}match(...t){return super.match(...t)}merge(...[t]){return Ds(new this.constructor([...this]),t)}}const J0=new de([mg(()=>G0)],{parent:U0}),W0=new de([lg],{parent:J0});function k(e,t,r){const i=(o,a,{additionalMixins:l=[]}={})=>r.rdfine().factory.createEntity(o,[...e,...l],{initializer:{...t,...a||{}}}),n=(o,a,{additionalMixins:l=[]}={})=>u=>{const h=u||r.clownface(),m=typeof o=="string"?h.namedNode(o):h.node(o);return r.rdfine().factory.createEntity(m,[...e,...l],{initializer:{...t,...a||{}}})},s=(o,{additionalMixins:a=[]}={})=>l=>r.rdfine().factory.createEntity((l||r.clownface()).blankNode(),[...e,...a],{initializer:{...t,...o||{}}});return(o,a,l)=>typeof o=="object"&&"term"in o?i(o,a,l):typeof o=="object"&&o.termType==="NamedNode"||typeof o=="string"?n(o,a,l):s(o,a)}var tr=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Yr=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function B(e){let t=class extends e{};return tr([C.literal(),Yr("design:type",Object)],t.prototype,"comment",void 0),tr([C.resource({as:[B]}),Yr("design:type",Object)],t.prototype,"isDefinedBy",void 0),tr([C.literal(),Yr("design:type",Object)],t.prototype,"label",void 0),tr([C.resource({values:"array",as:[B]}),Yr("design:type",Array)],t.prototype,"seeAlso",void 0),t=tr([D(gt)],t),t}B.appliesTo=gt.Resource;B.createFactory=e=>k([B],{types:[gt.Resource]},e);var vt=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},$t=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function he(e){let t=class extends B(e){};return vt([C.resource({values:"array",as:[he]}),$t("design:type",Array)],t.prototype,"detail",void 0),vt([C(),$t("design:type",Object)],t.prototype,"focusNode",void 0),vt([C.literal(),$t("design:type",Object)],t.prototype,"resultMessage",void 0),vt([C.resource({as:[B]}),$t("design:type",Object)],t.prototype,"resultPath",void 0),vt([C.resource({implicitTypes:[b.Severity]}),$t("design:type",Object)],t.prototype,"resultSeverity",void 0),vt([C(),$t("design:type",Object)],t.prototype,"sourceConstraint",void 0),vt([C.resource({implicitTypes:[b.ConstraintComponent]}),$t("design:type",Object)],t.prototype,"sourceConstraintComponent",void 0),vt([C.resource({implicitTypes:[b.Shape]}),$t("design:type",Object)],t.prototype,"sourceShape",void 0),vt([C(),$t("design:type",Object)],t.prototype,"value",void 0),t=vt([D(b)],t),t}he.appliesTo=b.AbstractResult;he.createFactory=e=>k([B,he],{types:[b.AbstractResult]},e);var qn=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Bl=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ct(e){let t=class extends B(e){};return qn([C.literal(),Bl("design:type",Object)],t.prototype,"labelTemplate",void 0),qn([C.resource({implicitTypes:[b.Parameter]}),Bl("design:type",Object)],t.prototype,"parameter",void 0),t=qn([D(b)],t),t}Ct.appliesTo=b.Parameterizable;Ct.createFactory=e=>k([B,Ct],{types:[b.Parameterizable]},e);var Qr=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Vn=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ti(e){let t=class extends Ct(e){};return Qr([C.resource({implicitTypes:[b.Validator]}),Vn("design:type",Object)],t.prototype,"nodeValidator",void 0),Qr([C.resource({implicitTypes:[b.Validator]}),Vn("design:type",Object)],t.prototype,"propertyValidator",void 0),Qr([C.resource({implicitTypes:[b.Validator]}),Vn("design:type",Object)],t.prototype,"validator",void 0),t=Qr([D(b)],t),t}Ti.appliesTo=b.ConstraintComponent;Ti.createFactory=e=>k([Ct,Ti],{types:[b.ConstraintComponent]},e);var Fl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Y0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function yt(e){let t=class extends B(e){};return Fl([C.resource({values:"array",as:[yt]}),Y0("design:type",Array)],t.prototype,"subClassOf",void 0),t=Fl([D(gt)],t),t}yt.appliesTo=gt.Class;yt.createFactory=e=>k([B,yt],{types:[gt.Class]},e);var zl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Q0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Jt(e){let t=class extends Ct(e){};return zl([C.resource({as:[yt]}),Q0("design:type",Object)],t.prototype,"returnType",void 0),t=zl([D(b)],t),t}Jt.appliesTo=b.Function;Jt.createFactory=e=>k([Ct,Jt],{types:[b.Function]},e);var Ul=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},K0=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function nt(e){let t=class extends B(e){};return Ul([C.literal(),K0("design:type",Object)],t.prototype,"jsFunctionName",void 0),t=Ul([D(b)],t),t}nt.appliesTo=b.JSExecutable;nt.createFactory=e=>k([B,nt],{types:[b.JSExecutable]},e);var X0=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function $i(e){let t=class extends nt(e){};return t=X0([D(b)],t),t}$i.appliesTo=b.JSConstraint;$i.createFactory=e=>k([nt,$i],{types:[b.JSConstraint]},e);var Z0=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Oi(e){let t=class extends nt(Jt(e)){};return t=Z0([D(b)],t),t}Oi.appliesTo=b.JSFunction;Oi.createFactory=e=>k([nt,Jt,Oi],{types:[b.JSFunction]},e);var Hl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},tx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ri(e){let t=class extends B(e){};return Hl([C.literal(),tx("design:type",Object)],t.prototype,"jsLibraryURL",void 0),t=Hl([D(b)],t),t}Ri.appliesTo=b.JSLibrary;Ri.createFactory=e=>k([B,Ri],{types:[b.JSLibrary]},e);var ql=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},ex=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Pt(e){let t=class extends B(e){};return ql([C.resource({implicitTypes:[b.Shape]}),ex("design:type",Object)],t.prototype,"condition",void 0),t=ql([D(b)],t),t}Pt.appliesTo=b.Rule;Pt.createFactory=e=>k([B,Pt],{types:[b.Rule]},e);var rx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Ni(e){let t=class extends Pt(nt(e)){};return t=rx([D(b)],t),t}Ni.appliesTo=b.JSRule;Ni.createFactory=e=>k([Pt,nt,Ni],{types:[b.JSRule]},e);var ix=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Wt(e){let t=class extends B(e){};return t=ix([D(b)],t),t}Wt.appliesTo=b.Target;Wt.createFactory=e=>k([B,Wt],{types:[b.Target]},e);var nx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Ii(e){let t=class extends Wt(nt(e)){};return t=nx([D(b)],t),t}Ii.appliesTo=b.JSTarget;Ii.createFactory=e=>k([Wt,nt,Ii],{types:[b.JSTarget]},e);var sx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Yt(e){let t=class extends Ct(yt(e)){};return t=sx([D(b)],t),t}Yt.appliesTo=b.TargetType;Yt.createFactory=e=>k([Ct,yt,Yt],{types:[b.TargetType]},e);var ox=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Li(e){let t=class extends Yt(nt(e)){};return t=ox([D(b)],t),t}Li.appliesTo=b.JSTargetType;Li.createFactory=e=>k([Yt,nt,Li],{types:[b.JSTargetType]},e);var ax=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Tt(e){let t=class extends B(e){};return t=ax([D(b)],t),t}Tt.appliesTo=b.Validator;Tt.createFactory=e=>k([B,Tt],{types:[b.Validator]},e);var lx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Mi(e){let t=class extends Tt(nt(e)){};return t=lx([D(b)],t),t}Mi.appliesTo=b.JSValidator;Mi.createFactory=e=>k([Tt,nt,Mi],{types:[b.JSValidator]},e);const cx={BlankNode:b.BlankNode,BlankNodeOrIRI:b.BlankNodeOrIRI,BlankNodeOrLiteral:b.BlankNodeOrLiteral,IRI:b.IRI,IRIOrLiteral:b.IRIOrLiteral,Literal:b.Literal};var ux=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Et(e){let t=class extends e{};return t=ux([D(fe)],t),t}Et.appliesTo=fe.Property;Et.createFactory=e=>k([Et],{types:[fe.Property]},e);var X=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},rt=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function _t(e){let t=class extends B(e){};return X([C.resource({values:"list",as:[_t]}),rt("design:type",Array)],t.prototype,"and",void 0),X([C.resource({as:[yt]}),rt("design:type",Object)],t.prototype,"class",void 0),X([C.literal({type:Boolean}),rt("design:type",Object)],t.prototype,"closed",void 0),X([C({values:"list"}),rt("design:type",Array)],t.prototype,"in",void 0),X([C.resource({implicitTypes:[b.NodeShape]}),rt("design:type",Object)],t.prototype,"node",void 0),X([C(),rt("design:type",Object)],t.prototype,"nodeKind",void 0),X([C.resource({values:"list",as:[_t]}),rt("design:type",Array)],t.prototype,"or",void 0),X([C.resource({values:"array",implicitTypes:[b.PropertyShape]}),rt("design:type",Array)],t.prototype,"property",void 0),X([C.resource({implicitTypes:[b.Rule]}),rt("design:type",Object)],t.prototype,"rule",void 0),X([C.resource({implicitTypes:[b.Severity]}),rt("design:type",Object)],t.prototype,"severity",void 0),X([C.resource({implicitTypes:[b.SPARQLConstraint]}),rt("design:type",Object)],t.prototype,"sparql",void 0),X([C.resource({implicitTypes:[b.Target]}),rt("design:type",Object)],t.prototype,"target",void 0),X([C.resource({values:"array",as:[yt]}),rt("design:type",Array)],t.prototype,"targetClass",void 0),X([C({values:"array"}),rt("design:type",Array)],t.prototype,"targetNode",void 0),X([C.resource({as:[Et]}),rt("design:type",Object)],t.prototype,"targetObjectsOf",void 0),X([C.resource({as:[Et]}),rt("design:type",Object)],t.prototype,"targetSubjectsOf",void 0),X([C.resource({values:"list",as:[_t]}),rt("design:type",Array)],t.prototype,"xone",void 0),t=X([D(b)],t),t}_t.appliesTo=b.Shape;_t.createFactory=e=>k([B,_t],{types:[b.Shape]},e);var Vl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},dx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Di(e){let t=class extends _t(e){};return Vl([C({values:"list"}),dx("design:type",Array)],t.prototype,"ignoredProperties",void 0),t=Vl([D(b)],t),t}Di.appliesTo=b.NodeShape;Di.createFactory=e=>k([_t,Di],{types:[b.NodeShape]},e);var hx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function ji(e){let t=class extends yt(e){};return t=hx([D(gt)],t),t}ji.appliesTo=gt.Datatype;ji.createFactory=e=>k([yt,ji],{types:[gt.Datatype]},e);var V=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},J=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Be(e){let t=class extends _t(e){};return V([C.resource({path:b.equals,as:[Et]}),J("design:type",Object)],t.prototype,"_equals",void 0),V([C.resource({as:[ji]}),J("design:type",Object)],t.prototype,"datatype",void 0),V([C(),J("design:type",Object)],t.prototype,"defaultValue",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"description",void 0),V([C.resource({as:[Et]}),J("design:type",Object)],t.prototype,"disjoint",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"flags",void 0),V([C.resource({implicitTypes:[b.PropertyGroup]}),J("design:type",Object)],t.prototype,"group",void 0),V([C({values:"array"}),J("design:type",Array)],t.prototype,"hasValue",void 0),V([C.literal({values:"list"}),J("design:type",Array)],t.prototype,"languageIn",void 0),V([C.resource({as:[Et]}),J("design:type",Object)],t.prototype,"lessThan",void 0),V([C.resource({as:[Et]}),J("design:type",Object)],t.prototype,"lessThanOrEquals",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxCount",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxExclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxInclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxLength",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minCount",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minExclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minInclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minLength",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"name",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"order",void 0),V([C.resource({values:["list","single"],as:[B]}),J("design:type",Object)],t.prototype,"path",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"pattern",void 0),V([C.literal({type:Boolean}),J("design:type",Object)],t.prototype,"uniqueLang",void 0),t=V([D(b)],t),t}Be.appliesTo=b.PropertyShape;Be.createFactory=e=>k([_t,Be],{types:[b.PropertyShape]},e);var Gl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},px=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ki(e){let t=class extends Be(e){};return Gl([C.literal({type:Boolean}),px("design:type",Object)],t.prototype,"optional",void 0),t=Gl([D(b)],t),t}ki.appliesTo=b.Parameter;ki.createFactory=e=>k([Be,ki],{types:[b.Parameter]},e);var Gn=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Jl=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Bi(e){let t=class extends B(e){};return Gn([C.literal(),Jl("design:type",Object)],t.prototype,"namespace",void 0),Gn([C.literal(),Jl("design:type",Object)],t.prototype,"prefix",void 0),t=Gn([D(b)],t),t}Bi.appliesTo=b.PrefixDeclaration;Bi.createFactory=e=>k([B,Bi],{types:[b.PrefixDeclaration]},e);var Wl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},fx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Fi(e){let t=class extends B(e){};return Wl([C.literal({type:Number}),fx("design:type",Object)],t.prototype,"order",void 0),t=Wl([D(b)],t),t}Fi.appliesTo=b.PropertyGroup;Fi.createFactory=e=>k([B,Fi],{types:[b.PropertyGroup]},e);var Kr=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Jn=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function zi(e){let t=class extends B(e){};return Kr([C.resource({as:[Et]}),Jn("design:type",Object)],t.prototype,"annotationProperty",void 0),Kr([C(),Jn("design:type",Object)],t.prototype,"annotationValue",void 0),Kr([C.literal(),Jn("design:type",Object)],t.prototype,"annotationVarName",void 0),t=Kr([D(b)],t),t}zi.appliesTo=b.ResultAnnotation;zi.createFactory=e=>k([B,zi],{types:[b.ResultAnnotation]},e);var mx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Ui(e){let t=class extends B(e){};return t=mx([D(b)],t),t}Ui.appliesTo=b.Severity;Ui.createFactory=e=>k([B,Ui],{types:[b.Severity]},e);var Wn=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Yl=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Tr(e){let t=class extends e{};return Wn([C(),Yl("design:type",Object)],t.prototype,"first",void 0),Wn([C.resource({as:[Tr]}),Yl("design:type",Object)],t.prototype,"rest",void 0),t=Wn([D(fe)],t),t}Tr.appliesTo=fe.List;Tr.createFactory=e=>k([Tr],{types:[fe.List]},e);var ee=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},we=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function wd(e){let t=class extends e{};return ee([C.resource({as:[B]}),we("design:type",Object)],t.prototype,"annotatedProperty",void 0),ee([C.resource({as:[B]}),we("design:type",Object)],t.prototype,"annotatedSource",void 0),ee([C.resource({as:[B]}),we("design:type",Object)],t.prototype,"annotatedTarget",void 0),ee([C.resource({as:[B]}),we("design:type",Object)],t.prototype,"deprecated",void 0),ee([C.resource({as:[Tr]}),we("design:type",Object)],t.prototype,"members",void 0),ee([C.resource({as:[B]}),we("design:type",Object)],t.prototype,"versionInfo",void 0),t=ee([D(Lr)],t),t}wd.appliesTo=gt.Resource;var xe=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},er=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Nt(e){let t=class extends wd(B(e)){};return xe([C.resource({as:[Nt]}),er("design:type",Object)],t.prototype,"backwardCompatibleWith",void 0),xe([C.resource({as:[Nt]}),er("design:type",Object)],t.prototype,"imports",void 0),xe([C.resource({as:[Nt]}),er("design:type",Object)],t.prototype,"incompatibleWith",void 0),xe([C.resource({as:[Nt]}),er("design:type",Object)],t.prototype,"priorVersion",void 0),xe([C.resource({as:[Nt]}),er("design:type",Object)],t.prototype,"versionIRI",void 0),t=xe([D(Lr)],t),t}Nt.appliesTo=Lr.Ontology;Nt.createFactory=e=>k([B,Nt],{types:[Lr.Ontology]},e);var Ql=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},_x=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ft(e){let t=class extends B(e){};return Ql([C.resource({as:[Nt]}),_x("design:type",Object)],t.prototype,"prefixes",void 0),t=Ql([D(b)],t),t}ft.appliesTo=b.SPARQLExecutable;ft.createFactory=e=>k([B,ft],{types:[b.SPARQLExecutable]},e);var Kl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},yx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function mt(e){let t=class extends ft(e){};return Kl([C.literal(),yx("design:type",Object)],t.prototype,"ask",void 0),t=Kl([D(b)],t),t}mt.appliesTo=b.SPARQLAskExecutable;mt.createFactory=e=>k([ft,mt],{types:[b.SPARQLAskExecutable]},e);var gx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Hi(e){let t=class extends Tt(mt(e)){};return t=gx([D(b)],t),t}Hi.appliesTo=b.SPARQLAskValidator;Hi.createFactory=e=>k([Tt,mt,Hi],{types:[b.SPARQLAskValidator]},e);var Xl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},bx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ht(e){let t=class extends ft(e){};return Xl([C.literal(),bx("design:type",Object)],t.prototype,"select",void 0),t=Xl([D(b)],t),t}ht.appliesTo=b.SPARQLSelectExecutable;ht.createFactory=e=>k([ft,ht],{types:[b.SPARQLSelectExecutable]},e);var vx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function qi(e){let t=class extends ht(e){};return t=vx([D(b)],t),t}qi.appliesTo=b.SPARQLConstraint;qi.createFactory=e=>k([ht,qi],{types:[b.SPARQLConstraint]},e);var Zl=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},wx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Fe(e){let t=class extends ft(e){};return Zl([C.literal(),wx("design:type",Object)],t.prototype,"construct",void 0),t=Zl([D(b)],t),t}Fe.appliesTo=b.SPARQLConstructExecutable;Fe.createFactory=e=>k([ft,Fe],{types:[b.SPARQLConstructExecutable]},e);var xx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Vi(e){let t=class extends ht(mt(Jt(e))){};return t=xx([D(b)],t),t}Vi.appliesTo=b.SPARQLFunction;Vi.createFactory=e=>k([ht,mt,Jt,Vi],{types:[b.SPARQLFunction]},e);var Ax=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Gi(e){let t=class extends Fe(Pt(e)){};return t=Ax([D(b)],t),t}Gi.appliesTo=b.SPARQLRule;Gi.createFactory=e=>k([Fe,Pt,Gi],{types:[b.SPARQLRule]},e);var tc=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Sx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ji(e){let t=class extends Tt(ht(e)){};return tc([C.resource({implicitTypes:[b.ResultAnnotation]}),Sx("design:type",Object)],t.prototype,"resultAnnotation",void 0),t=tc([D(b)],t),t}Ji.appliesTo=b.SPARQLSelectValidator;Ji.createFactory=e=>k([Tt,ht,Ji],{types:[b.SPARQLSelectValidator]},e);var Ex=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Wi(e){let t=class extends Wt(ht(mt(e))){};return t=Ex([D(b)],t),t}Wi.appliesTo=b.SPARQLTarget;Wi.createFactory=e=>k([Wt,ht,mt,Wi],{types:[b.SPARQLTarget]},e);var Cx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Yi(e){let t=class extends Yt(ht(mt(e))){};return t=Cx([D(b)],t),t}Yi.appliesTo=b.SPARQLTargetType;Yi.createFactory=e=>k([Yt,ht,mt,Yi],{types:[b.SPARQLTargetType]},e);var ec=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Px=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Qi(e){let t=class extends ft(e){};return ec([C.literal(),Px("design:type",Object)],t.prototype,"update",void 0),t=ec([D(b)],t),t}Qi.appliesTo=b.SPARQLUpdateExecutable;Qi.createFactory=e=>k([ft,Qi],{types:[b.SPARQLUpdateExecutable]},e);var Xr=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Yn=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ki(e){let t=class extends Pt(e){};return Xr([C(),Yn("design:type",Object)],t.prototype,"object",void 0),Xr([C(),Yn("design:type",Object)],t.prototype,"predicate",void 0),Xr([C(),Yn("design:type",Object)],t.prototype,"subject",void 0),t=Xr([D(b)],t),t}Ki.appliesTo=b.TripleRule;Ki.createFactory=e=>k([Pt,Ki],{types:[b.TripleRule]},e);var Zr=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},Qn=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Xi(e){let t=class extends B(e){};return Zr([C.literal({type:Boolean}),Qn("design:type",Object)],t.prototype,"conforms",void 0),Zr([C.resource({values:"array",implicitTypes:[b.ValidationResult]}),Qn("design:type",Array)],t.prototype,"result",void 0),Zr([C.literal({type:Boolean}),Qn("design:type",Object)],t.prototype,"shapesGraphWellFormed",void 0),t=Zr([D(b)],t),t}Xi.appliesTo=b.ValidationReport;Xi.createFactory=e=>k([B,Xi],{types:[b.ValidationReport]},e);var Tx=function(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};function Zi(e){let t=class extends he(e){};return t=Tx([D(b)],t),t}Zi.appliesTo=b.ValidationResult;Zi.createFactory=e=>k([he,Zi],{types:[b.ValidationResult]},e);const $x=Object.freeze(Object.defineProperty({__proto__:null,AbstractResultMixin:he,ConstraintComponentMixin:Ti,FunctionMixin:Jt,JSConstraintMixin:$i,JSExecutableMixin:nt,JSFunctionMixin:Oi,JSLibraryMixin:Ri,JSRuleMixin:Ni,JSTargetMixin:Ii,JSTargetTypeMixin:Li,JSValidatorMixin:Mi,NodeKindEnum:cx,NodeShapeMixin:Di,ParameterMixin:ki,ParameterizableMixin:Ct,PrefixDeclarationMixin:Bi,PropertyGroupMixin:Fi,PropertyShapeMixin:Be,ResultAnnotationMixin:zi,RuleMixin:Pt,SPARQLAskExecutableMixin:mt,SPARQLAskValidatorMixin:Hi,SPARQLConstraintMixin:qi,SPARQLConstructExecutableMixin:Fe,SPARQLExecutableMixin:ft,SPARQLFunctionMixin:Vi,SPARQLRuleMixin:Gi,SPARQLSelectExecutableMixin:ht,SPARQLSelectValidatorMixin:Ji,SPARQLTargetMixin:Wi,SPARQLTargetTypeMixin:Yi,SPARQLUpdateExecutableMixin:Qi,SeverityMixin:Ui,ShapeMixin:_t,TargetMixin:Wt,TargetTypeMixin:Yt,TripleRuleMixin:Ki,ValidationReportMixin:Xi,ValidationResultMixin:Zi,ValidatorMixin:Tt},Symbol.toStringTag,{value:"Module"}));class Ox{init(){this.rdfine.sh=this._initVocabulary($x)}}const Kn=new de([Ox],{parent:W0}),Rx=nn({state:{display:"tree",conforms:void 0,results:[]},reducers:{report(e,t){const r=t.results.map(Kn.clownface);return{...e,results:r,conforms:t.conforms,report:t}},display(e,t){return{...e,display:t}}},effects(e){const t=e.getDispatch();async function r(){const{shapesGraph:i,dataGraph:n}=e.getState();if(i.quads&&n.quads){const s=(await wt(async()=>{const{default:a}=await import("./index-DS6glaew.js");return{default:a}},__vite__mapDeps([0,1]))).default,o=new s(Kn.dataset(i.quads));t.validation.report(await o.validate(Kn.dataset(n.quads)))}}return{"dataGraph/parsed":r,"shapesGraph/parsed":r}}}),Nx={rif:"http://www.w3.org/2007/rif#",v:"http://rdf.data-vocabulary.org/#",wdr:"http://www.w3.org/2007/05/powder#",xml:"http://www.w3.org/XML/1998/namespace/"},Ix={acl:"http://www.w3.org/ns/auth/acl#",as:"https://www.w3.org/ns/activitystreams#",b59:"https://barnard59.zazuko.com/vocab#",bibo:"http://purl.org/ontology/bibo/",cc:"http://creativecommons.org/ns#",cert:"http://www.w3.org/ns/auth/cert#",cnt:"http://www.w3.org/2011/content#",code:"https://code.described.at/",constant:"http://qudt.org/vocab/constant/",crm:"http://www.cidoc-crm.org/cidoc-crm/",csvw:"http://www.w3.org/ns/csvw#",ctag:"http://commontag.org/ns#",cube:"https://cube.link/",cur:"http://qudt.org/vocab/currency/","dash-sparql":"http://datashapes.org/sparql#",dash:"http://datashapes.org/dash#",dbo:"http://dbpedia.org/ontology/",dc11:"http://purl.org/dc/elements/1.1/",dcam:"http://purl.org/dc/dcam/",dcat:"http://www.w3.org/ns/dcat#",dcmitype:"http://purl.org/dc/dcmitype/",dcterms:"http://purl.org/dc/terms/",dig:"http://www.ics.forth.gr/isl/CRMdig/",discipline:"http://qudt.org/vocab/discipline/",doap:"http://usefulinc.com/ns/doap#",dprod:"https://ekgf.github.io/dprod/",dpv:"http://www.w3.org/ns/dpv#",dqv:"http://www.w3.org/ns/dqv#",dtype:"http://www.linkedmodel.org/schema/dtype#",duv:"http://www.w3.org/ns/duv#",earl:"http://www.w3.org/ns/earl#",ebucore:"http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",exif:"http://www.w3.org/2003/12/exif/ns#",foaf:"http://xmlns.com/foaf/0.1/",frbr:"http://purl.org/vocab/frbr/core#",geo:"http://www.opengis.net/ont/geosparql#",geof:"http://www.opengis.net/def/function/geosparql/",geor:"http://www.opengis.net/def/rule/geosparql/",gml:"http://www.opengis.net/ont/gml#",gn:"http://www.geonames.org/ontology#",gr:"http://purl.org/goodrelations/v1#",grddl:"http://www.w3.org/2003/g/data-view#",gs1:"https://gs1.org/voc/",gtfs:"http://vocab.gtfs.org/terms#",http:"http://www.w3.org/2011/http#",hydra:"http://www.w3.org/ns/hydra/core#",ical:"http://www.w3.org/2002/12/cal/icaltzd#",la:"https://linked.art/ns/terms/",ldp:"http://www.w3.org/ns/ldp#",list:"http://www.w3.org/2000/10/swap/list#",locn:"http://www.w3.org/ns/locn#",log:"http://www.w3.org/2000/10/swap/log#",lvont:"http://lexvo.org/ontology#",m4i:"http://w3id.org/nfdi4ing/metadata4ing#",ma:"http://www.w3.org/ns/ma-ont#",mads:"http://www.loc.gov/mads/rdf/v1#",math:"http://www.w3.org/2000/10/swap/math#",meta:"https://cube.link/meta/",oa:"http://www.w3.org/ns/oa#",og:"http://ogp.me/ns#",oidc:"http://www.w3.org/ns/solid/oidc#",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",pim:"http://www.w3.org/ns/pim/space#",pipeline:"https://pipeline.described.at/",prefix:"http://qudt.org/vocab/prefix/",prov:"http://www.w3.org/ns/prov#",qb:"http://purl.org/linked-data/cube#",qkdv:"http://qudt.org/vocab/dimensionvector/",quantitykind:"http://qudt.org/vocab/quantitykind/",qudt:"http://qudt.org/schema/qudt/",rdau:"http://rdaregistry.info/Elements/u/",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfa:"http://www.w3.org/ns/rdfa#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",relation:"https://cube.link/relation/",rev:"http://purl.org/stuff/rev#",rico:"https://www.ica.org/standards/RiC/ontology#",rr:"http://www.w3.org/ns/r2rml#",rss:"http://purl.org/rss/1.0/",schema:"http://schema.org/",sd:"http://www.w3.org/ns/sparql-service-description#",sdmx:"http://purl.org/linked-data/sdmx#",sem:"http://semanticweb.cs.vu.nl/2009/11/sem/",set:"http://www.w3.org/2000/10/swap/set#",sf:"http://www.opengis.net/ont/sf#",sh:"http://www.w3.org/ns/shacl#",shex:"http://www.w3.org/ns/shex#",shsh:"http://www.w3.org/ns/shacl-shacl#",sioc:"http://rdfs.org/sioc/ns#",skos:"http://www.w3.org/2004/02/skos/core#",skosxl:"http://www.w3.org/2008/05/skos-xl#",solid:"http://www.w3.org/ns/solid/terms#",sosa:"http://www.w3.org/ns/sosa/",sou:"http://qudt.org/vocab/sou/",ssn:"http://www.w3.org/ns/ssn/",stat:"http://www.w3.org/ns/posix/stat#",string:"http://www.w3.org/2000/10/swap/string#",test:"http://www.w3.org/2006/03/test-description#",time:"http://www.w3.org/2006/time#",unit:"http://qudt.org/vocab/unit/",vaem:"http://www.linkedmodel.org/schema/vaem#",vann:"http://purl.org/vocab/vann/",vcard:"http://www.w3.org/2006/vcard/ns#",void:"http://rdfs.org/ns/void#",vs:"http://www.w3.org/2003/06/sw-vocab-status/ns#",vso:"http://purl.org/vso/ns#",wdrs:"http://www.w3.org/2007/05/powder-s#",wgs:"http://www.w3.org/2003/01/geo/wgs84_pos#",xhv:"http://www.w3.org/1999/xhtml/vocab#",xkos:"http://rdf-vocabulary.ddialliance.org/xkos#",xsd:"http://www.w3.org/2001/XMLSchema#"},xd={...Ix,...Nx};function Lx(e,t={}){const r={...xd,...t},i=Array.from(Object.entries(r)).filter(([,n])=>e.startsWith(n));if(i.length){i.sort(([,s],[,o])=>o.length-s.length);const n=i[0];return e.replace(new RegExp(`^${n[1]}`),`${n[0]}:`)}return""}const ks=new xo([Ir,Oo]);class Mx{evaluateTerm(t,r){switch(t.termType){case"Literal":return this.evaluateLiteral(t,r);case"NamedNode":return this.evaluateNamedNode(t,r);case"BlankNode":return this.evaluateBlankNode(t,r);case"Variable":return this.evaluateVariable(t,r)}return{value:"",prefixes:[]}}}function Dx(e){return Symbol.iterator in Object(e)&&typeof e!="string"}class jx{constructor({strings:t,values:r,tag:i,strategy:n,defaultOptions:s}){this.strings=t,this.values=r,this._tag=i,this.__strategy=n,this.__defaultOptions=s}toString({env:t=ks,...r}={}){let i={...this.__defaultOptions(t),env:t};r&&(i={...i,...r});const{value:n,prefixes:s}=this._toPartialString(i);return this.__strategy.getFinalString(n,s,i)}_toPartialString(t){const r=t.env||ks,i=new Set,n=this.strings.length-1;let s="";for(let o=0;o<n;o++){let a=null;s+=this.strings[o];const l=this.values[o];if(!(typeof l>"u"||l===null)){if(typeof l=="boolean")a=this.__strategy.evaluateLiteral(r.literal(l.toString(),At.boolean),t);else if(typeof l=="number"){const u=Number.isInteger(l)?At.integer:At.decimal;a=this.__strategy.evaluateLiteral(r.literal(l.toString(),u),t)}else if(l instanceof Date)a=this.__strategy.evaluateLiteral(r.literal(l.toISOString(),At.dateTime),t);else if(typeof l=="object"){if("_toPartialString"in l)a=l._toPartialString(t);else if("subject"in l)a=this.__strategy.evaluateQuad(l,t);else if("match"in l)a=this.__strategy.evaluateDataset(l,t);else if("termType"in l)a=this.__strategy.evaluateTerm(l,t);else if(Dx(l)){const[u,...h]=l;a=this._tag`${u}`._toPartialString(t);for(const m of h){const y=this._tag`${m}`._toPartialString(t);a.value+=`
${y.value}`,a.prefixes=[...a.prefixes,...y.prefixes]}}}a===null&&(a={value:l.toString(),prefixes:[]}),s+=a.value,[...a.prefixes].forEach(u=>i.add(u))}}return s+=this.strings[n],{value:s,prefixes:i}}}function Ad(e={}){return Object.fromEntries(Object.entries(e).map(([t,r])=>[t,typeof r=="string"?r:r().value]))}function kx(e,t){return[...e].filter(r=>r in t).map(r=>[r,t[r]])}const Bx=new RegExp(`["\\\\
\r]`),Fx=new RegExp(`["\\\\
\r]`,"g"),zx={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function Ux(e){return zx[e]}function Hx(e){return Bx.test(e)?e.replace(Fx,Ux):e}function qx(e){return`_:${e.value}`}function Vx(e){return`<${e.value}>`}function Sd(e){return`"${Hx(e.value)}"`}function Gx(e){const t=Sd(e);return e.language?`${t}@${e.language}`:e.datatype&&!e.datatype.equals(At.string)?`${t}^^${Vx(e.datatype)}`:t}function Jx(e){return qx(e)}function Ed(e,{base:t="",prefixes:r={},noPrefixedNames:i}){const n=typeof t=="string"?t:t.value,s=new RegExp("^"+n);let o;return i!==!0&&(o=Lx(e.value,Ad(r)))?{value:o.replaceAll(/[/#]/g,a=>`\\${a}`),prefixes:[o.split(":")[0]]}:{value:`<${e.value.replace(s,"")}>`,prefixes:[]}}const Wx=new gd([[At.integer,/^-?[0-9]+$/],[At.decimal,/^-?[0-9]+\.[0-9]+$/],[At.boolean,/^(true|false)$/]]);function Yx(e,{base:t="",prefixes:r={}}){if(!e.language&&e.datatype){const i=Wx.get(e.datatype);if(i&&i.test(e.value))return{value:e.value,prefixes:[]};if(!e.datatype.equals(At.string)){const n=Ed(e.datatype,{base:t,prefixes:r});return{value:`${Sd(e)}^^${n.value}`,prefixes:n.prefixes}}}return{value:Gx(e),prefixes:[]}}function Qx(e,t){return kx(e,t).map(([r,i])=>`@prefix ${r}: <${i}> .`)}class Kx extends Mx{evaluateBlankNode(t){return{value:Jx(t),prefixes:[]}}evaluateLiteral(t,r){return Yx(t,r)}evaluateNamedNode(t,r){return Ed(t,r)}evaluateVariable(){throw new Error("Turtle cannot serialize variables")}evaluateDataset(t,r){const i=[...t.match(null,null,null,r.graph)];return r.cheapCompression?this.__evaluateQuads(i,r):[...i.reduce((s,o)=>{let a=s.get(o.subject.value);return a||(a=new Set,s.set(o.subject.value,a)),a.add(o),s},new Map).values()].reduce((s,o,a)=>{const l=this.__evaluateQuads([...o],r),u=a?`
`:"";return{value:`${s.value}${u}${l.value}`,prefixes:[...s.prefixes,...l.prefixes]}},{value:"",prefixes:[]})}evaluateQuad(t,r,{terminate:i=!0,newLineAfterSubject:n=!1}={}){if(!r.graph.equals(t.graph))return{value:"",prefixes:[]};const s=this.evaluateTerm(t.subject,r),o=this.evaluateTerm(t.predicate,r),a=this.evaluateTerm(t.object,r),l=n?`
   `:" ";return{value:`${s.value}${l}${o.value} ${a.value}${i?" .":""}`,prefixes:[...s.prefixes,...o.prefixes,...a.prefixes]}}getFinalString(t,r,i){const n=i.directives||typeof i.directives>"u";let s=[];if(n){if(s=Qx(r,{...xd,...Ad(i.prefixes)}),i.base){const o=typeof i.base=="string"?i.base:i.base.value;s.push(`@base <${o}> .`)}s.length>0&&s.push(`
`)}return`${s.join(`
`)}${t}`}__evaluateQuads(t,r){if(t.length===0)return{value:"",prefixes:[]};let i=t;r.cheapCompression||(i=t.sort((s,o)=>s.predicate.value.localeCompare(o.predicate.value)));const n=i.reduce((s,o)=>{if(!s.previous)return{...this.evaluateQuad(o,r,{terminate:!1,newLineAfterSubject:!0}),previous:o};if(s.previous.subject.equals(o.subject)&&s.previous.predicate.equals(o.predicate))return{...this.__appendObject(s,o,r),previous:o};if(s.previous.subject.equals(o.subject))return{...this.__appendPredicateObject(s,o,r),previous:o};const a=this.evaluateQuad(o,r,{terminate:!1,newLineAfterSubject:!0});return{value:s.value+` .
`+a.value,prefixes:[...s.prefixes,...a.prefixes],previous:o}},{value:"",prefixes:[]});return{...n,value:n.value+" ."}}__appendPredicateObject(t,r,i){const n=this.evaluateTerm(r.predicate,i),s=this.evaluateTerm(r.object,i);return{value:`${t.value} ;
   ${n.value} ${s.value}`,prefixes:[...t.prefixes,...n.prefixes,...s.prefixes]}}__appendObject(t,r,i){const n=this.evaluateTerm(r.object,i);return{value:`${t.value} ,
      ${n.value}`,prefixes:[...t.prefixes,...n.prefixes]}}}const Cd=(e,...t)=>new jx({strings:e,values:t,tag:Cd,strategy:new Kx,defaultOptions:(r=ks)=>({directives:!0,graph:r.defaultGraph(),cheapCompression:!1})});async function rc(e,t,r,i){return i?i.dataset(e).serialize({format:t,prefixes:r}):Cd`${e}`.toString()}async function Xx(e,t,{instanceUrl:r="https://shacl-playground.zazuko.com",dataGraphFormat:i="text/turtle",shapesGraphFormat:n="text/turtle",prefixes:s=[],dataGraphPrefixes:o=[],dataGraphCustomPrefixes:a,shapesGraphPrefixes:l=[],shapesGraphCustomPrefixes:u,env:h}={}){const m=new URL(r),y=new URLSearchParams([["shapesGraph",await rc(e,i,[...s,...o],h)],["dataGraph",await rc(t,n,[...s,...l],h)],["shapesGraphFormat",n],["dataGraphFormat",i]]);return a&&y.set("dataGraphCustomPrefixes",JSON.stringify(a)),u&&y.set("shapesGraphCustomPrefixes",JSON.stringify(u)),m.hash=y.toString(),m.toString()}const Pd=new URL(window.location.href),Zx=Object.fromEntries([...new URLSearchParams(Pd.hash.substr(1)).entries()]),tA=nn({state:{page:3,shaperone:new URL("https://forms.hypermedia.app/playground/").toString(),sharingLink:Pd.toString(),sharingParams:Zx},reducers:{switchPage(e,t){return{...e,page:t}},setShaperoneParam(e,{key:t,value:r}){const i=new URL(e.shaperone),n=new URLSearchParams(i.hash.substr(1));return n.set(t,r),i.hash=n.toString(),{...e,shaperone:i.toString()}},setSharingLink(e,t){return{...e,sharingLink:t}},setSharingParam(e,{key:t,value:r}){const{shapesGraph:i,dataGraph:n,...s}=e.sharingParams||{};return{...e,sharingParams:{shapesGraph:i,dataGraph:n,...s,[t]:r}}}},effects(e){const t=e.getDispatch();return{switchPage(r){t.playground.setSharingParam({key:"page",value:r})},async setSharingParam(){const{shapesGraph:r,dataGraph:i,...n}=e.getState().playground.sharingParams,s=await Xx(r,i,{...n,instanceUrl:window.location.href});t.playground.setSharingLink(s)},"dataGraph/parsed":function({serialized:r}){const{format:i}=e.getState().dataGraph;t.playground.setShaperoneParam({key:"resource",value:r}),t.playground.setShaperoneParam({key:"resourceFormat",value:i}),t.playground.setSharingParam({key:"dataGraph",value:r}),t.playground.setSharingParam({key:"dataGraphFormat",value:i})},"shapesGraph/parsed":function({serialized:r}){const{format:i}=e.getState().shapesGraph;t.playground.setShaperoneParam({key:"shapes",value:r}),t.playground.setShaperoneParam({key:"shapesFormat",value:i}),t.playground.setSharingParam({key:"shapesGraph",value:r}),t.playground.setSharingParam({key:"shapesGraphFormat",value:i})},"dataGraph/setCustomPrefix":function(){t.playground.setSharingParam({key:"dataGraphCustomPrefixes",value:e.getState().dataGraph.customPrefixes})},"shapesGraph/setCustomPrefix":function(){t.playground.setSharingParam({key:"shapesGraphCustomPrefixes",value:e.getState().shapesGraph.customPrefixes})},restoreState(){const r=new URL(document.location.toString()),i=new URLSearchParams(r.hash.substr(1));function n(y){return i.get(y)||r.searchParams.get(y)}const s=n("page"),o=n("shapesGraph"),a=n("shapesGraphFormat"),l=n("shapesGraphCustomPrefixes"),u=n("dataGraph"),h=n("dataGraphFormat"),m=n("dataGraphCustomPrefixes");s&&t.playground.switchPage(Number.parseInt(s,10)),o&&t.shapesGraph.setGraph(o),a&&t.shapesGraph.changeFormat(a),l&&t.shapesGraph.replaceCustomPrefixes(JSON.parse(l)),u&&t.dataGraph.setGraph(u),h&&t.dataGraph.changeFormat(h),m&&t.dataGraph.replaceCustomPrefixes(JSON.parse(m)),[...r.searchParams.keys()].forEach(y=>r.searchParams.delete(y)),r.hash="",window.history.replaceState(null,"",r.toString())}}}}),eA=Object.freeze(Object.defineProperty({__proto__:null,dataGraph:Ty,playground:tA,shapesGraph:Cy,validation:Rx},Symbol.toStringTag,{value:"Module"})),Xn=Ph(Ch({models:eA}),{persist(e){const{dataGraph:{quads:t,...r},shapesGraph:{quads:i,...n},validation:s,...o}=e;return{shapesGraph:n,dataGraph:r,...o}}}),ti={SHAPES:0,DATA:1,REPORT:2,ABOUT:3},Bt={DataGraph:"Data Graph",ShapesGraph:"Shapes Graph",Report:"Validation Report"};class rA extends Ah(Xn,or){static get styles(){return th`
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
    `}static get properties(){return{page:{type:Number},reportClass:{type:String},reportIcon:{type:String},sharingLink:{type:String},sharingLinkShortened:{type:Boolean},sharingDialogOpen:{type:Boolean},__wideDisplay:{type:Boolean,reflect:!0,attribute:"wide"}}}constructor(){super(),this.reportIcon="vaadin:bug-o"}connectedCallback(){super.connectedCallback(),wt(()=>import("./vaadin-drawer-toggle-B_E4Car6.js"),__vite__mapDeps([2,3])),wt(()=>import("./iron-icon-CiPI8Ugs.js").then(t=>t.i),[]),wt(()=>import("./vaadin-icon-CMtFR2c8.js"),[]),wt(()=>import("./vaadin-dialog-C3NXfiV7.js"),__vite__mapDeps([4,5])),wt(()=>import("./vaadin-icons-ZtjGuumd.js"),__vite__mapDeps([6,7])),wt(()=>import("./graph-editor-D-aDy86A.js"),__vite__mapDeps([8,9,10,3,5])),wt(()=>import("./index-B1ww7QDV.js"),[]),Xn.dispatch.playground.restoreState()}render(){return Ge`
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
          <vaadin-tab theme="icon-on-top" title="${Bt.ShapesGraph}">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>${Bt.ShapesGraph}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top" title="${Bt.DataGraph}">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>${Bt.DataGraph}</span>
          </vaadin-tab>
          <vaadin-tab
            class="report ${this.reportClass}"
            theme="icon-on-top"
            title="${Bt.Report}"
          >
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>${Bt.Report}</span>
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
    `}__renderWide(){wt(()=>import("./validation-report-Bbvt-I-J.js"),__vite__mapDeps([11,10,3]));const t=this.page===ti.ABOUT?1:0;return Ge`
      <iron-pages selected="${t}">
        <vaadin-split-layout id="top-split" orientation="vertical">
          <vaadin-split-layout style="height: 60%">
            <graph-editor
              style="width: 50%"
              model="shapesGraph"
              @focus="${()=>this.__pageSelected(ti.SHAPES)}"
            >
              <h2 slot="header">${Bt.ShapesGraph}</h2>
            </graph-editor>
            <graph-editor
              style="width: 50%"
              model="dataGraph"
              @focus="${()=>this.__pageSelected(ti.DATA)}"
            >
              <h2 slot="header">${Bt.DataGraph}</h2>
            </graph-editor>
          </vaadin-split-layout>
          <validation-report
            style="height: 40%"
            @click="${()=>this.__pageSelected(ti.REPORT)}"
          ></validation-report>
        </vaadin-split-layout>
        <section>${this.__renderAbout()}</section>
      </iron-pages>
    `}__renderNarrow(){return Ge`
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
    `}__renderAbout(){return Ge`
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
    `}__renderSharingDialog(t){return r=>{let i;r.firstElementChild?i=r.firstElementChild:(i=document.createElement("div"),r.appendChild(i)),dc(Ge`
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
        `,i),i.querySelector("vaadin-text-field")?.focus()}}mapState(t){let r="";return t.validation.conforms?r="valid":t.validation.conforms===!1&&(r="invalid"),{reportClass:r,reportIcon:t.validation.conforms?"vaadin:bug-o":"vaadin:bug",page:t.playground.page,shaperoneLink:t.playground.shaperone,sharingLink:t.playground.sharingLink,sharingLinkShortened:!1}}__pageSelected(t){Xn.dispatch.playground.switchPage(t)}__reset(){localStorage.removeItem(document.location.hostname),document.location.reload()}__loadPage(t){t.detail.item.id==="validation-report"&&wt(()=>import("./validation-report-Bbvt-I-J.js"),__vite__mapDeps([11,10,3]))}__openPlayground(){window.open(this.shaperoneLink,"shaperone")}__openCode(){window.open("https://github.com/zazuko/shacl-playground","_blank")}__openSharingDialog(){this.sharingDialogOpen=!0}async __shortenSharingLink(){this.sharingLinkShortened||(this.sharingLinkShortened=!0,this.sharingLink=await yy.shorten(this.sharingLink))}__setWideDisplay(t){this.__wideDisplay=t.detail.value}}customElements.define("shacl-playground",rA);export{or as $,qx as A,jA as B,_d as C,dc as D,Ne as E,Po as F,Jd as G,Fd as H,Pm as I,Rm as J,mu as K,Om as L,et as M,ks as N,xt as O,hn as P,Ft as Q,Tm as R,Mx as S,Nm as T,cm as U,iA as V,$r as W,Ah as X,pe as Y,lt as Z,wt as _,Qa as a,th as a0,ip as a1,wA as a2,pA as a3,Gx as a4,Vx as a5,A as a6,xd as a7,Kn as a8,Mt as a9,zd as aa,Gd as ab,Wd as ac,Lx as ad,Xn as ae,At as af,Mg as ag,fe as ah,Si as ai,Gf as aj,St as ak,Im as b,no as c,Ir as d,V0 as e,nu as f,Xf as g,Ue as h,xo as i,Oo as j,yg as k,It as l,yu as m,sm as n,_g as o,jt as p,Ml as q,oo as r,jx as s,gd as t,B0 as u,ze as v,Uh as w,uu as x,Dc as y,Ge as z};
