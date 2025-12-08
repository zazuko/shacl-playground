const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D7E5t0pT.js","assets/index-Q55tuwhF.js","assets/vaadin-drawer-toggle-WRyPAw9M.js","assets/dom-utils-BhgefGZl.js","assets/vaadin-dialog-DkC0iNYf.js","assets/templates-BX-bFQ9c.js","assets/vaadin-icons-DHFea2Hi.js","assets/iron-icon-CfM687WV.js","assets/graph-editor-B_ye_JQA.js","assets/rdf-editor-mCQ4F84x.js","assets/vaadin-form-item-DpaMmVrE.js","assets/validation-report-CbPH27Rt.js"])))=>i.map(i=>d[i]);
const nh=Object.freeze(Object.defineProperty({__proto__:null,get _void(){return p0},get acl(){return jg},get as(){return Bg},get bibo(){return zg},get cc(){return Hg},get cert(){return Vg},get cnt(){return Jg},get constant(){return Yg},get crm(){return Kg},get csvw(){return Zg},get ctag(){return eb},get cur(){return nb},get dash(){return ab},get dashSparql(){return sb},get dbo(){return cb},get dc11(){return db},get dcam(){return pb},get dcat(){return mb},get dcmitype(){return yb},get dcterms(){return bb},get default(){return Od},get dig(){return wb},get discipline(){return Ab},get doap(){return Eb},get dprod(){return Pb},get dpv(){return $b},get dqv(){return Rb},get dtype(){return Ib},get duv(){return Mb},get earl(){return jb},get ebucore(){return Bb},get exif(){return zb},get foaf(){return Hb},get frbr(){return Vb},get geo(){return Jb},get geof(){return Yb},get geor(){return Kb},get gml(){return Zb},get gn(){return ev},get gr(){return nv},get grddl(){return sv},get gs1(){return av},get gtfs(){return cv},get http(){return dv},get hydra(){return pv},get ical(){return mv},get la(){return yv},get ldp(){return bv},get list(){return wv},get locn(){return Av},get log(){return Ev},get lvont(){return Pv},get m4i(){return $v},get ma(){return Rv},get mads(){return Iv},get math(){return Mv},get oa(){return jv},get og(){return Bv},get oidc(){return zv},get org(){return Hv},get owl(){return Lr},get pim(){return Gv},get prefix(){return Wv},get prov(){return Qv},get qb(){return Xv},get qkdv(){return tw},get quantitykind(){return rw},get qudt(){return iw},get rdau(){return ow},get rdf(){return pe},get rdfa(){return cw},get rdfs(){return gt},get rev(){return hw},get rico(){return fw},get rif(){return T0},get rr(){return _w},get rss(){return gw},get schema(){return vw},get sd(){return xw},get sdmx(){return Sw},get sem(){return Cw},get set(){return Tw},get sf(){return Ow},get sh(){return b},get shex(){return Iw},get shsh(){return Mw},get sioc(){return jw},get skos(){return Bw},get skosxl(){return zw},get solid(){return Hw},get sosa(){return Vw},get sou(){return Jw},get ssn(){return Yw},get stat(){return Kw},get string(){return Zw},get test(){return e0},get time(){return n0},get unit(){return s0},get v(){return O0},get vaem(){return a0},get vann(){return c0},get vcard(){return d0},get vs(){return m0},get vso(){return y0},get wdr(){return N0},get wdrs(){return b0},get wgs(){return w0},get xhv(){return A0},get xkos(){return E0},get xml(){return L0},get xsd(){return At}},Symbol.toStringTag,{value:"Module"}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $A(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var r=function n(){var i=!1;try{i=this instanceof n}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}),r}var _i={exports:{}},Yo;function ih(){if(Yo)return _i.exports;Yo=1;var e=_i.exports={},t,r;function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?t=setTimeout:t=n}catch{t=n}try{typeof clearTimeout=="function"?r=clearTimeout:r=i}catch{r=i}})();function s(P){if(t===setTimeout)return setTimeout(P,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(P,0);try{return t(P,0)}catch{try{return t.call(null,P,0)}catch{return t.call(this,P,0)}}}function o(P){if(r===clearTimeout)return clearTimeout(P);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(P);try{return r(P)}catch{try{return r.call(null,P)}catch{return r.call(this,P)}}}var a=[],l=!1,u,h=-1;function m(){!l||!u||(l=!1,u.length?a=u.concat(a):h=-1,a.length&&y())}function y(){if(!l){var P=s(m);l=!0;for(var I=a.length;I;){for(u=a,a=[];++h<I;)u&&u[h].run();h=-1,I=a.length}u=null,l=!1,o(P)}}e.nextTick=function(P){var I=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)I[R-1]=arguments[R];a.push(new v(P,I)),a.length===1&&!l&&s(y)};function v(P,I){this.fun=P,this.array=I}v.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={};function E(){}return e.on=E,e.addListener=E,e.once=E,e.off=E,e.removeListener=E,e.removeAllListeners=E,e.emit=E,e.prependListener=E,e.prependOnceListener=E,e.listeners=function(P){return[]},e.binding=function(P){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(P){throw new Error("process.chdir is not supported")},e.umask=function(){return 0},_i.exports}var sh=ih();const oh=ze(sh);var yi={},Ve={},Qo;function ah(){if(Qo)return Ve;Qo=1,Ve.byteLength=a,Ve.toByteArray=u,Ve.fromByteArray=y;for(var e=[],t=[],r=typeof Uint8Array<"u"?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,s=n.length;i<s;++i)e[i]=n[i],t[n.charCodeAt(i)]=i;t[45]=62,t[95]=63;function o(v){var E=v.length;if(E%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var P=v.indexOf("=");P===-1&&(P=E);var I=P===E?0:4-P%4;return[P,I]}function a(v){var E=o(v),P=E[0],I=E[1];return(P+I)*3/4-I}function l(v,E,P){return(E+P)*3/4-P}function u(v){var E,P=o(v),I=P[0],R=P[1],$=new r(l(v,I,R)),M=0,S=R>0?I-4:I,w;for(w=0;w<S;w+=4)E=t[v.charCodeAt(w)]<<18|t[v.charCodeAt(w+1)]<<12|t[v.charCodeAt(w+2)]<<6|t[v.charCodeAt(w+3)],$[M++]=E>>16&255,$[M++]=E>>8&255,$[M++]=E&255;return R===2&&(E=t[v.charCodeAt(w)]<<2|t[v.charCodeAt(w+1)]>>4,$[M++]=E&255),R===1&&(E=t[v.charCodeAt(w)]<<10|t[v.charCodeAt(w+1)]<<4|t[v.charCodeAt(w+2)]>>2,$[M++]=E>>8&255,$[M++]=E&255),$}function h(v){return e[v>>18&63]+e[v>>12&63]+e[v>>6&63]+e[v&63]}function m(v,E,P){for(var I,R=[],$=E;$<P;$+=3)I=(v[$]<<16&16711680)+(v[$+1]<<8&65280)+(v[$+2]&255),R.push(h(I));return R.join("")}function y(v){for(var E,P=v.length,I=P%3,R=[],$=16383,M=0,S=P-I;M<S;M+=$)R.push(m(v,M,M+$>S?S:M+$));return I===1?(E=v[P-1],R.push(e[E>>2]+e[E<<4&63]+"==")):I===2&&(E=(v[P-2]<<8)+v[P-1],R.push(e[E>>10]+e[E>>4&63]+e[E<<2&63]+"=")),R.join("")}return Ve}var kr={};var Ko;function lh(){return Ko||(Ko=1,kr.read=function(e,t,r,n,i){var s,o,a=i*8-n-1,l=(1<<a)-1,u=l>>1,h=-7,m=r?i-1:0,y=r?-1:1,v=e[t+m];for(m+=y,s=v&(1<<-h)-1,v>>=-h,h+=a;h>0;s=s*256+e[t+m],m+=y,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=n;h>0;o=o*256+e[t+m],m+=y,h-=8);if(s===0)s=1-u;else{if(s===l)return o?NaN:(v?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-u}return(v?-1:1)*o*Math.pow(2,s-n)},kr.write=function(e,t,r,n,i,s){var o,a,l,u=s*8-i-1,h=(1<<u)-1,m=h>>1,y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=n?0:s-1,E=n?1:-1,P=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+m>=1?t+=y/l:t+=y*Math.pow(2,1-m),t*l>=2&&(o++,l/=2),o+m>=h?(a=0,o=h):o+m>=1?(a=(t*l-1)*Math.pow(2,i),o=o+m):(a=t*Math.pow(2,m-1)*Math.pow(2,i),o=0));i>=8;e[r+v]=a&255,v+=E,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+v]=o&255,v+=E,o/=256,u-=8);e[r+v-E]|=P*128}),kr}var Xo;function ch(){return Xo||(Xo=1,function(e){const t=ah(),r=lh(),n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=$,e.INSPECT_MAX_BYTES=50;const i=2147483647;e.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=s(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{const p=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(p,c),p.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function o(p){if(p>i)throw new RangeError('The value "'+p+'" is invalid for option "size"');const c=new Uint8Array(p);return Object.setPrototypeOf(c,a.prototype),c}function a(p,c,d){if(typeof p=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(p)}return l(p,c,d)}a.poolSize=8192;function l(p,c,d){if(typeof p=="string")return y(p,c);if(ArrayBuffer.isView(p))return E(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(bt(p,ArrayBuffer)||p&&bt(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(bt(p,SharedArrayBuffer)||p&&bt(p.buffer,SharedArrayBuffer)))return P(p,c,d);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const f=p.valueOf&&p.valueOf();if(f!=null&&f!==p)return a.from(f,c,d);const _=I(p);if(_)return _;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return a.from(p[Symbol.toPrimitive]("string"),c,d);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}a.from=function(p,c,d){return l(p,c,d)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function u(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function h(p,c,d){return u(p),p<=0?o(p):c!==void 0?typeof d=="string"?o(p).fill(c,d):o(p).fill(c):o(p)}a.alloc=function(p,c,d){return h(p,c,d)};function m(p){return u(p),o(p<0?0:R(p)|0)}a.allocUnsafe=function(p){return m(p)},a.allocUnsafeSlow=function(p){return m(p)};function y(p,c){if((typeof c!="string"||c==="")&&(c="utf8"),!a.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const d=M(p,c)|0;let f=o(d);const _=f.write(p,c);return _!==d&&(f=f.slice(0,_)),f}function v(p){const c=p.length<0?0:R(p.length)|0,d=o(c);for(let f=0;f<c;f+=1)d[f]=p[f]&255;return d}function E(p){if(bt(p,Uint8Array)){const c=new Uint8Array(p);return P(c.buffer,c.byteOffset,c.byteLength)}return v(p)}function P(p,c,d){if(c<0||p.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<c+(d||0))throw new RangeError('"length" is outside of buffer bounds');let f;return c===void 0&&d===void 0?f=new Uint8Array(p):d===void 0?f=new Uint8Array(p,c):f=new Uint8Array(p,c,d),Object.setPrototypeOf(f,a.prototype),f}function I(p){if(a.isBuffer(p)){const c=R(p.length)|0,d=o(c);return d.length===0||p.copy(d,0,0,c),d}if(p.length!==void 0)return typeof p.length!="number"||mi(p.length)?o(0):v(p);if(p.type==="Buffer"&&Array.isArray(p.data))return v(p.data)}function R(p){if(p>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return p|0}function $(p){return+p!=p&&(p=0),a.alloc(+p)}a.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==a.prototype},a.compare=function(c,d){if(bt(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),bt(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(c)||!a.isBuffer(d))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===d)return 0;let f=c.length,_=d.length;for(let g=0,x=Math.min(f,_);g<x;++g)if(c[g]!==d[g]){f=c[g],_=d[g];break}return f<_?-1:_<f?1:0},a.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(c,d){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return a.alloc(0);let f;if(d===void 0)for(d=0,f=0;f<c.length;++f)d+=c[f].length;const _=a.allocUnsafe(d);let g=0;for(f=0;f<c.length;++f){let x=c[f];if(bt(x,Uint8Array))g+x.length>_.length?(a.isBuffer(x)||(x=a.from(x)),x.copy(_,g)):Uint8Array.prototype.set.call(_,x,g);else if(a.isBuffer(x))x.copy(_,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=x.length}return _};function M(p,c){if(a.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||bt(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);const d=p.length,f=arguments.length>2&&arguments[2]===!0;if(!f&&d===0)return 0;let _=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return d;case"utf8":case"utf-8":return fi(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return d*2;case"hex":return d>>>1;case"base64":return Wo(p).length;default:if(_)return f?-1:fi(p).length;c=(""+c).toLowerCase(),_=!0}}a.byteLength=M;function S(p,c,d){let f=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((d===void 0||d>this.length)&&(d=this.length),d<=0)||(d>>>=0,c>>>=0,d<=c))return"";for(p||(p="utf8");;)switch(p){case"hex":return Wd(this,c,d);case"utf8":case"utf-8":return Dr(this,c,d);case"ascii":return Gd(this,c,d);case"latin1":case"binary":return Jd(this,c,d);case"base64":return Mr(this,c,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yd(this,c,d);default:if(f)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),f=!0}}a.prototype._isBuffer=!0;function w(p,c,d){const f=p[c];p[c]=p[d],p[d]=f}a.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let d=0;d<c;d+=2)w(this,d,d+1);return this},a.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let d=0;d<c;d+=4)w(this,d,d+3),w(this,d+1,d+2);return this},a.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let d=0;d<c;d+=8)w(this,d,d+7),w(this,d+1,d+6),w(this,d+2,d+5),w(this,d+3,d+4);return this},a.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?Dr(this,0,c):S.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(c){if(!a.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:a.compare(this,c)===0},a.prototype.inspect=function(){let c="";const d=e.INSPECT_MAX_BYTES;return c=this.toString("hex",0,d).replace(/(.{2})/g,"$1 ").trim(),this.length>d&&(c+=" ... "),"<Buffer "+c+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(c,d,f,_,g){if(bt(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),!a.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(d===void 0&&(d=0),f===void 0&&(f=c?c.length:0),_===void 0&&(_=0),g===void 0&&(g=this.length),d<0||f>c.length||_<0||g>this.length)throw new RangeError("out of range index");if(_>=g&&d>=f)return 0;if(_>=g)return-1;if(d>=f)return 1;if(d>>>=0,f>>>=0,_>>>=0,g>>>=0,this===c)return 0;let x=g-_,z=f-d;const W=Math.min(x,z),G=this.slice(_,g),Y=c.slice(d,f);for(let q=0;q<W;++q)if(G[q]!==Y[q]){x=G[q],z=Y[q];break}return x<z?-1:z<x?1:0};function T(p,c,d,f,_){if(p.length===0)return-1;if(typeof d=="string"?(f=d,d=0):d>2147483647?d=2147483647:d<-2147483648&&(d=-2147483648),d=+d,mi(d)&&(d=_?0:p.length-1),d<0&&(d=p.length+d),d>=p.length){if(_)return-1;d=p.length-1}else if(d<0)if(_)d=0;else return-1;if(typeof c=="string"&&(c=a.from(c,f)),a.isBuffer(c))return c.length===0?-1:O(p,c,d,f,_);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?_?Uint8Array.prototype.indexOf.call(p,c,d):Uint8Array.prototype.lastIndexOf.call(p,c,d):O(p,[c],d,f,_);throw new TypeError("val must be string, number or Buffer")}function O(p,c,d,f,_){let g=1,x=p.length,z=c.length;if(f!==void 0&&(f=String(f).toLowerCase(),f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le")){if(p.length<2||c.length<2)return-1;g=2,x/=2,z/=2,d/=2}function W(Y,q){return g===1?Y[q]:Y.readUInt16BE(q*g)}let G;if(_){let Y=-1;for(G=d;G<x;G++)if(W(p,G)===W(c,Y===-1?0:G-Y)){if(Y===-1&&(Y=G),G-Y+1===z)return Y*g}else Y!==-1&&(G-=G-Y),Y=-1}else for(d+z>x&&(d=x-z),G=d;G>=0;G--){let Y=!0;for(let q=0;q<z;q++)if(W(p,G+q)!==W(c,q)){Y=!1;break}if(Y)return G}return-1}a.prototype.includes=function(c,d,f){return this.indexOf(c,d,f)!==-1},a.prototype.indexOf=function(c,d,f){return T(this,c,d,f,!0)},a.prototype.lastIndexOf=function(c,d,f){return T(this,c,d,f,!1)};function L(p,c,d,f){d=Number(d)||0;const _=p.length-d;f?(f=Number(f),f>_&&(f=_)):f=_;const g=c.length;f>g/2&&(f=g/2);let x;for(x=0;x<f;++x){const z=parseInt(c.substr(x*2,2),16);if(mi(z))return x;p[d+x]=z}return x}function j(p,c,d,f){return jr(fi(c,p.length-d),p,d,f)}function F(p,c,d,f){return jr(Zd(c),p,d,f)}function st(p,c,d,f){return jr(Wo(c),p,d,f)}function Qt(p,c,d,f){return jr(th(c,p.length-d),p,d,f)}a.prototype.write=function(c,d,f,_){if(d===void 0)_="utf8",f=this.length,d=0;else if(f===void 0&&typeof d=="string")_=d,f=this.length,d=0;else if(isFinite(d))d=d>>>0,isFinite(f)?(f=f>>>0,_===void 0&&(_="utf8")):(_=f,f=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const g=this.length-d;if((f===void 0||f>g)&&(f=g),c.length>0&&(f<0||d<0)||d>this.length)throw new RangeError("Attempt to write outside buffer bounds");_||(_="utf8");let x=!1;for(;;)switch(_){case"hex":return L(this,c,d,f);case"utf8":case"utf-8":return j(this,c,d,f);case"ascii":case"latin1":case"binary":return F(this,c,d,f);case"base64":return st(this,c,d,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qt(this,c,d,f);default:if(x)throw new TypeError("Unknown encoding: "+_);_=(""+_).toLowerCase(),x=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Mr(p,c,d){return c===0&&d===p.length?t.fromByteArray(p):t.fromByteArray(p.slice(c,d))}function Dr(p,c,d){d=Math.min(p.length,d);const f=[];let _=c;for(;_<d;){const g=p[_];let x=null,z=g>239?4:g>223?3:g>191?2:1;if(_+z<=d){let W,G,Y,q;switch(z){case 1:g<128&&(x=g);break;case 2:W=p[_+1],(W&192)===128&&(q=(g&31)<<6|W&63,q>127&&(x=q));break;case 3:W=p[_+1],G=p[_+2],(W&192)===128&&(G&192)===128&&(q=(g&15)<<12|(W&63)<<6|G&63,q>2047&&(q<55296||q>57343)&&(x=q));break;case 4:W=p[_+1],G=p[_+2],Y=p[_+3],(W&192)===128&&(G&192)===128&&(Y&192)===128&&(q=(g&15)<<18|(W&63)<<12|(G&63)<<6|Y&63,q>65535&&q<1114112&&(x=q))}}x===null?(x=65533,z=1):x>65535&&(x-=65536,f.push(x>>>10&1023|55296),x=56320|x&1023),f.push(x),_+=z}return Vd(f)}const Fo=4096;function Vd(p){const c=p.length;if(c<=Fo)return String.fromCharCode.apply(String,p);let d="",f=0;for(;f<c;)d+=String.fromCharCode.apply(String,p.slice(f,f+=Fo));return d}function Gd(p,c,d){let f="";d=Math.min(p.length,d);for(let _=c;_<d;++_)f+=String.fromCharCode(p[_]&127);return f}function Jd(p,c,d){let f="";d=Math.min(p.length,d);for(let _=c;_<d;++_)f+=String.fromCharCode(p[_]);return f}function Wd(p,c,d){const f=p.length;(!c||c<0)&&(c=0),(!d||d<0||d>f)&&(d=f);let _="";for(let g=c;g<d;++g)_+=eh[p[g]];return _}function Yd(p,c,d){const f=p.slice(c,d);let _="";for(let g=0;g<f.length-1;g+=2)_+=String.fromCharCode(f[g]+f[g+1]*256);return _}a.prototype.slice=function(c,d){const f=this.length;c=~~c,d=d===void 0?f:~~d,c<0?(c+=f,c<0&&(c=0)):c>f&&(c=f),d<0?(d+=f,d<0&&(d=0)):d>f&&(d=f),d<c&&(d=c);const _=this.subarray(c,d);return Object.setPrototypeOf(_,a.prototype),_};function K(p,c,d){if(p%1!==0||p<0)throw new RangeError("offset is not uint");if(p+c>d)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=this[c],g=1,x=0;for(;++x<d&&(g*=256);)_+=this[c+x]*g;return _},a.prototype.readUintBE=a.prototype.readUIntBE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=this[c+--d],g=1;for(;d>0&&(g*=256);)_+=this[c+--d]*g;return _},a.prototype.readUint8=a.prototype.readUInt8=function(c,d){return c=c>>>0,d||K(c,1,this.length),this[c]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(c,d){return c=c>>>0,d||K(c,2,this.length),this[c]|this[c+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(c,d){return c=c>>>0,d||K(c,2,this.length),this[c]<<8|this[c+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(c,d){return c=c>>>0,d||K(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(c,d){return c=c>>>0,d||K(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},a.prototype.readBigUInt64LE=jt(function(c){c=c>>>0,_e(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&qe(c,this.length-8);const _=d+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,g=this[++c]+this[++c]*2**8+this[++c]*2**16+f*2**24;return BigInt(_)+(BigInt(g)<<BigInt(32))}),a.prototype.readBigUInt64BE=jt(function(c){c=c>>>0,_e(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&qe(c,this.length-8);const _=d*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],g=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+f;return(BigInt(_)<<BigInt(32))+BigInt(g)}),a.prototype.readIntLE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=this[c],g=1,x=0;for(;++x<d&&(g*=256);)_+=this[c+x]*g;return g*=128,_>=g&&(_-=Math.pow(2,8*d)),_},a.prototype.readIntBE=function(c,d,f){c=c>>>0,d=d>>>0,f||K(c,d,this.length);let _=d,g=1,x=this[c+--_];for(;_>0&&(g*=256);)x+=this[c+--_]*g;return g*=128,x>=g&&(x-=Math.pow(2,8*d)),x},a.prototype.readInt8=function(c,d){return c=c>>>0,d||K(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},a.prototype.readInt16LE=function(c,d){c=c>>>0,d||K(c,2,this.length);const f=this[c]|this[c+1]<<8;return f&32768?f|4294901760:f},a.prototype.readInt16BE=function(c,d){c=c>>>0,d||K(c,2,this.length);const f=this[c+1]|this[c]<<8;return f&32768?f|4294901760:f},a.prototype.readInt32LE=function(c,d){return c=c>>>0,d||K(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},a.prototype.readInt32BE=function(c,d){return c=c>>>0,d||K(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},a.prototype.readBigInt64LE=jt(function(c){c=c>>>0,_e(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&qe(c,this.length-8);const _=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(f<<24);return(BigInt(_)<<BigInt(32))+BigInt(d+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),a.prototype.readBigInt64BE=jt(function(c){c=c>>>0,_e(c,"offset");const d=this[c],f=this[c+7];(d===void 0||f===void 0)&&qe(c,this.length-8);const _=(d<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(_)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+f)}),a.prototype.readFloatLE=function(c,d){return c=c>>>0,d||K(c,4,this.length),r.read(this,c,!0,23,4)},a.prototype.readFloatBE=function(c,d){return c=c>>>0,d||K(c,4,this.length),r.read(this,c,!1,23,4)},a.prototype.readDoubleLE=function(c,d){return c=c>>>0,d||K(c,8,this.length),r.read(this,c,!0,52,8)},a.prototype.readDoubleBE=function(c,d){return c=c>>>0,d||K(c,8,this.length),r.read(this,c,!1,52,8)};function ct(p,c,d,f,_,g){if(!a.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>_||c<g)throw new RangeError('"value" argument is out of bounds');if(d+f>p.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(c,d,f,_){if(c=+c,d=d>>>0,f=f>>>0,!_){const z=Math.pow(2,8*f)-1;ct(this,c,d,f,z,0)}let g=1,x=0;for(this[d]=c&255;++x<f&&(g*=256);)this[d+x]=c/g&255;return d+f},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(c,d,f,_){if(c=+c,d=d>>>0,f=f>>>0,!_){const z=Math.pow(2,8*f)-1;ct(this,c,d,f,z,0)}let g=f-1,x=1;for(this[d+g]=c&255;--g>=0&&(x*=256);)this[d+g]=c/x&255;return d+f},a.prototype.writeUint8=a.prototype.writeUInt8=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,1,255,0),this[d]=c&255,d+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,65535,0),this[d]=c&255,this[d+1]=c>>>8,d+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,65535,0),this[d]=c>>>8,this[d+1]=c&255,d+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,4294967295,0),this[d+3]=c>>>24,this[d+2]=c>>>16,this[d+1]=c>>>8,this[d]=c&255,d+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,4294967295,0),this[d]=c>>>24,this[d+1]=c>>>16,this[d+2]=c>>>8,this[d+3]=c&255,d+4};function zo(p,c,d,f,_){Jo(c,f,_,p,d,7);let g=Number(c&BigInt(4294967295));p[d++]=g,g=g>>8,p[d++]=g,g=g>>8,p[d++]=g,g=g>>8,p[d++]=g;let x=Number(c>>BigInt(32)&BigInt(4294967295));return p[d++]=x,x=x>>8,p[d++]=x,x=x>>8,p[d++]=x,x=x>>8,p[d++]=x,d}function Uo(p,c,d,f,_){Jo(c,f,_,p,d,7);let g=Number(c&BigInt(4294967295));p[d+7]=g,g=g>>8,p[d+6]=g,g=g>>8,p[d+5]=g,g=g>>8,p[d+4]=g;let x=Number(c>>BigInt(32)&BigInt(4294967295));return p[d+3]=x,x=x>>8,p[d+2]=x,x=x>>8,p[d+1]=x,x=x>>8,p[d]=x,d+8}a.prototype.writeBigUInt64LE=jt(function(c,d=0){return zo(this,c,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=jt(function(c,d=0){return Uo(this,c,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(c,d,f,_){if(c=+c,d=d>>>0,!_){const W=Math.pow(2,8*f-1);ct(this,c,d,f,W-1,-W)}let g=0,x=1,z=0;for(this[d]=c&255;++g<f&&(x*=256);)c<0&&z===0&&this[d+g-1]!==0&&(z=1),this[d+g]=(c/x>>0)-z&255;return d+f},a.prototype.writeIntBE=function(c,d,f,_){if(c=+c,d=d>>>0,!_){const W=Math.pow(2,8*f-1);ct(this,c,d,f,W-1,-W)}let g=f-1,x=1,z=0;for(this[d+g]=c&255;--g>=0&&(x*=256);)c<0&&z===0&&this[d+g+1]!==0&&(z=1),this[d+g]=(c/x>>0)-z&255;return d+f},a.prototype.writeInt8=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,1,127,-128),c<0&&(c=255+c+1),this[d]=c&255,d+1},a.prototype.writeInt16LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,32767,-32768),this[d]=c&255,this[d+1]=c>>>8,d+2},a.prototype.writeInt16BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,2,32767,-32768),this[d]=c>>>8,this[d+1]=c&255,d+2},a.prototype.writeInt32LE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,2147483647,-2147483648),this[d]=c&255,this[d+1]=c>>>8,this[d+2]=c>>>16,this[d+3]=c>>>24,d+4},a.prototype.writeInt32BE=function(c,d,f){return c=+c,d=d>>>0,f||ct(this,c,d,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[d]=c>>>24,this[d+1]=c>>>16,this[d+2]=c>>>8,this[d+3]=c&255,d+4},a.prototype.writeBigInt64LE=jt(function(c,d=0){return zo(this,c,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=jt(function(c,d=0){return Uo(this,c,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ho(p,c,d,f,_,g){if(d+f>p.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("Index out of range")}function qo(p,c,d,f,_){return c=+c,d=d>>>0,_||Ho(p,c,d,4),r.write(p,c,d,f,23,4),d+4}a.prototype.writeFloatLE=function(c,d,f){return qo(this,c,d,!0,f)},a.prototype.writeFloatBE=function(c,d,f){return qo(this,c,d,!1,f)};function Vo(p,c,d,f,_){return c=+c,d=d>>>0,_||Ho(p,c,d,8),r.write(p,c,d,f,52,8),d+8}a.prototype.writeDoubleLE=function(c,d,f){return Vo(this,c,d,!0,f)},a.prototype.writeDoubleBE=function(c,d,f){return Vo(this,c,d,!1,f)},a.prototype.copy=function(c,d,f,_){if(!a.isBuffer(c))throw new TypeError("argument should be a Buffer");if(f||(f=0),!_&&_!==0&&(_=this.length),d>=c.length&&(d=c.length),d||(d=0),_>0&&_<f&&(_=f),_===f||c.length===0||this.length===0)return 0;if(d<0)throw new RangeError("targetStart out of bounds");if(f<0||f>=this.length)throw new RangeError("Index out of range");if(_<0)throw new RangeError("sourceEnd out of bounds");_>this.length&&(_=this.length),c.length-d<_-f&&(_=c.length-d+f);const g=_-f;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(d,f,_):Uint8Array.prototype.set.call(c,this.subarray(f,_),d),g},a.prototype.fill=function(c,d,f,_){if(typeof c=="string"){if(typeof d=="string"?(_=d,d=0,f=this.length):typeof f=="string"&&(_=f,f=this.length),_!==void 0&&typeof _!="string")throw new TypeError("encoding must be a string");if(typeof _=="string"&&!a.isEncoding(_))throw new TypeError("Unknown encoding: "+_);if(c.length===1){const x=c.charCodeAt(0);(_==="utf8"&&x<128||_==="latin1")&&(c=x)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(d<0||this.length<d||this.length<f)throw new RangeError("Out of range index");if(f<=d)return this;d=d>>>0,f=f===void 0?this.length:f>>>0,c||(c=0);let g;if(typeof c=="number")for(g=d;g<f;++g)this[g]=c;else{const x=a.isBuffer(c)?c:a.from(c,_),z=x.length;if(z===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(g=0;g<f-d;++g)this[g+d]=x[g%z]}return this};const me={};function pi(p,c,d){me[p]=class extends d{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${p}]`,this.stack,delete this.name}get code(){return p}set code(_){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:_,writable:!0})}toString(){return`${this.name} [${p}]: ${this.message}`}}}pi("ERR_BUFFER_OUT_OF_BOUNDS",function(p){return p?`${p} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),pi("ERR_INVALID_ARG_TYPE",function(p,c){return`The "${p}" argument must be of type number. Received type ${typeof c}`},TypeError),pi("ERR_OUT_OF_RANGE",function(p,c,d){let f=`The value of "${p}" is out of range.`,_=d;return Number.isInteger(d)&&Math.abs(d)>2**32?_=Go(String(d)):typeof d=="bigint"&&(_=String(d),(d>BigInt(2)**BigInt(32)||d<-(BigInt(2)**BigInt(32)))&&(_=Go(_)),_+="n"),f+=` It must be ${c}. Received ${_}`,f},RangeError);function Go(p){let c="",d=p.length;const f=p[0]==="-"?1:0;for(;d>=f+4;d-=3)c=`_${p.slice(d-3,d)}${c}`;return`${p.slice(0,d)}${c}`}function Qd(p,c,d){_e(c,"offset"),(p[c]===void 0||p[c+d]===void 0)&&qe(c,p.length-(d+1))}function Jo(p,c,d,f,_,g){if(p>d||p<c){const x=typeof c=="bigint"?"n":"";let z;throw c===0||c===BigInt(0)?z=`>= 0${x} and < 2${x} ** ${(g+1)*8}${x}`:z=`>= -(2${x} ** ${(g+1)*8-1}${x}) and < 2 ** ${(g+1)*8-1}${x}`,new me.ERR_OUT_OF_RANGE("value",z,p)}Qd(f,_,g)}function _e(p,c){if(typeof p!="number")throw new me.ERR_INVALID_ARG_TYPE(c,"number",p)}function qe(p,c,d){throw Math.floor(p)!==p?(_e(p,d),new me.ERR_OUT_OF_RANGE("offset","an integer",p)):c<0?new me.ERR_BUFFER_OUT_OF_BOUNDS:new me.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${c}`,p)}const Kd=/[^+/0-9A-Za-z-_]/g;function Xd(p){if(p=p.split("=")[0],p=p.trim().replace(Kd,""),p.length<2)return"";for(;p.length%4!==0;)p=p+"=";return p}function fi(p,c){c=c||1/0;let d;const f=p.length;let _=null;const g=[];for(let x=0;x<f;++x){if(d=p.charCodeAt(x),d>55295&&d<57344){if(!_){if(d>56319){(c-=3)>-1&&g.push(239,191,189);continue}else if(x+1===f){(c-=3)>-1&&g.push(239,191,189);continue}_=d;continue}if(d<56320){(c-=3)>-1&&g.push(239,191,189),_=d;continue}d=(_-55296<<10|d-56320)+65536}else _&&(c-=3)>-1&&g.push(239,191,189);if(_=null,d<128){if((c-=1)<0)break;g.push(d)}else if(d<2048){if((c-=2)<0)break;g.push(d>>6|192,d&63|128)}else if(d<65536){if((c-=3)<0)break;g.push(d>>12|224,d>>6&63|128,d&63|128)}else if(d<1114112){if((c-=4)<0)break;g.push(d>>18|240,d>>12&63|128,d>>6&63|128,d&63|128)}else throw new Error("Invalid code point")}return g}function Zd(p){const c=[];for(let d=0;d<p.length;++d)c.push(p.charCodeAt(d)&255);return c}function th(p,c){let d,f,_;const g=[];for(let x=0;x<p.length&&!((c-=2)<0);++x)d=p.charCodeAt(x),f=d>>8,_=d%256,g.push(_),g.push(f);return g}function Wo(p){return t.toByteArray(Xd(p))}function jr(p,c,d,f){let _;for(_=0;_<f&&!(_+d>=c.length||_>=p.length);++_)c[_+d]=p[_];return _}function bt(p,c){return p instanceof c||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===c.name}function mi(p){return p!==p}const eh=function(){const p="0123456789abcdef",c=new Array(256);for(let d=0;d<16;++d){const f=d*16;for(let _=0;_<16;++_)c[f+_]=p[d]+p[_]}return c}();function jt(p){return typeof BigInt>"u"?rh:p}function rh(){throw new Error("BigInt not supported")}}(yi)),yi}var uh=ch(),Br={exports:{}},Zo;function dh(){if(Zo)return Br.exports;Zo=1;var e=typeof Reflect=="object"?Reflect:null,t=e&&typeof e.apply=="function"?e.apply:function(w,T,O){return Function.prototype.apply.call(w,T,O)},r;e&&typeof e.ownKeys=="function"?r=e.ownKeys:Object.getOwnPropertySymbols?r=function(w){return Object.getOwnPropertyNames(w).concat(Object.getOwnPropertySymbols(w))}:r=function(w){return Object.getOwnPropertyNames(w)};function n(S){console&&console.warn&&console.warn(S)}var i=Number.isNaN||function(w){return w!==w};function s(){s.init.call(this)}Br.exports=s,Br.exports.once=R,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(S){if(typeof S!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof S)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(S){if(typeof S!="number"||S<0||i(S))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+S+".");o=S}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(w){if(typeof w!="number"||w<0||i(w))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+w+".");return this._maxListeners=w,this};function l(S){return S._maxListeners===void 0?s.defaultMaxListeners:S._maxListeners}s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(w){for(var T=[],O=1;O<arguments.length;O++)T.push(arguments[O]);var L=w==="error",j=this._events;if(j!==void 0)L=L&&j.error===void 0;else if(!L)return!1;if(L){var F;if(T.length>0&&(F=T[0]),F instanceof Error)throw F;var st=new Error("Unhandled error."+(F?" ("+F.message+")":""));throw st.context=F,st}var Qt=j[w];if(Qt===void 0)return!1;if(typeof Qt=="function")t(Qt,this,T);else for(var Mr=Qt.length,Dr=E(Qt,Mr),O=0;O<Mr;++O)t(Dr[O],this,T);return!0};function u(S,w,T,O){var L,j,F;if(a(T),j=S._events,j===void 0?(j=S._events=Object.create(null),S._eventsCount=0):(j.newListener!==void 0&&(S.emit("newListener",w,T.listener?T.listener:T),j=S._events),F=j[w]),F===void 0)F=j[w]=T,++S._eventsCount;else if(typeof F=="function"?F=j[w]=O?[T,F]:[F,T]:O?F.unshift(T):F.push(T),L=l(S),L>0&&F.length>L&&!F.warned){F.warned=!0;var st=new Error("Possible EventEmitter memory leak detected. "+F.length+" "+String(w)+" listeners added. Use emitter.setMaxListeners() to increase limit");st.name="MaxListenersExceededWarning",st.emitter=S,st.type=w,st.count=F.length,n(st)}return S}s.prototype.addListener=function(w,T){return u(this,w,T,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(w,T){return u(this,w,T,!0)};function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(S,w,T){var O={fired:!1,wrapFn:void 0,target:S,type:w,listener:T},L=h.bind(O);return L.listener=T,O.wrapFn=L,L}s.prototype.once=function(w,T){return a(T),this.on(w,m(this,w,T)),this},s.prototype.prependOnceListener=function(w,T){return a(T),this.prependListener(w,m(this,w,T)),this},s.prototype.removeListener=function(w,T){var O,L,j,F,st;if(a(T),L=this._events,L===void 0)return this;if(O=L[w],O===void 0)return this;if(O===T||O.listener===T)--this._eventsCount===0?this._events=Object.create(null):(delete L[w],L.removeListener&&this.emit("removeListener",w,O.listener||T));else if(typeof O!="function"){for(j=-1,F=O.length-1;F>=0;F--)if(O[F]===T||O[F].listener===T){st=O[F].listener,j=F;break}if(j<0)return this;j===0?O.shift():P(O,j),O.length===1&&(L[w]=O[0]),L.removeListener!==void 0&&this.emit("removeListener",w,st||T)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(w){var T,O,L;if(O=this._events,O===void 0)return this;if(O.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):O[w]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete O[w]),this;if(arguments.length===0){var j=Object.keys(O),F;for(L=0;L<j.length;++L)F=j[L],F!=="removeListener"&&this.removeAllListeners(F);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(T=O[w],typeof T=="function")this.removeListener(w,T);else if(T!==void 0)for(L=T.length-1;L>=0;L--)this.removeListener(w,T[L]);return this};function y(S,w,T){var O=S._events;if(O===void 0)return[];var L=O[w];return L===void 0?[]:typeof L=="function"?T?[L.listener||L]:[L]:T?I(L):E(L,L.length)}s.prototype.listeners=function(w){return y(this,w,!0)},s.prototype.rawListeners=function(w){return y(this,w,!1)},s.listenerCount=function(S,w){return typeof S.listenerCount=="function"?S.listenerCount(w):v.call(S,w)},s.prototype.listenerCount=v;function v(S){var w=this._events;if(w!==void 0){var T=w[S];if(typeof T=="function")return 1;if(T!==void 0)return T.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]};function E(S,w){for(var T=new Array(w),O=0;O<w;++O)T[O]=S[O];return T}function P(S,w){for(;w+1<S.length;w++)S[w]=S[w+1];S.pop()}function I(S){for(var w=new Array(S.length),T=0;T<w.length;++T)w[T]=S[T].listener||S[T];return w}function R(S,w){return new Promise(function(T,O){function L(F){S.removeListener(w,j),O(F)}function j(){typeof S.removeListener=="function"&&S.removeListener("error",L),T([].slice.call(arguments))}M(S,w,j,{once:!0}),w!=="error"&&$(S,L,{once:!0})})}function $(S,w,T){typeof S.on=="function"&&M(S,"error",w,T)}function M(S,w,T,O){if(typeof S.on=="function")O.once?S.once(w,T):S.on(w,T);else if(typeof S.addEventListener=="function")S.addEventListener(w,function L(j){O.once&&S.removeEventListener(w,L),T(j)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof S)}return Br.exports}var hh=dh();const ph=ze(hh);window.Buffer=uh.Buffer;window.process=oh;window.EventEmitter=ph;const fh="modulepreload",mh=function(e){return"/"+e},ta={},wt=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(r.map(u=>{if(u=mh(u),u in ta)return;ta[u]=!0;const h=u.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":fh,h||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),h)return new Promise((v,E)=>{y.addEventListener("load",v),y.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};const en=globalThis,Js=en.ShadowRoot&&(en.ShadyCSS===void 0||en.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ws=Symbol(),ea=new WeakMap;let bc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ws)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Js&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ea.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ea.set(r,t))}return t}toString(){return this.cssText}};const _h=e=>new bc(typeof e=="string"?e:e+"",void 0,Ws),yh=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new bc(r,e,Ws)},gh=(e,t)=>{if(Js)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=en.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},ra=Js?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return _h(r)})(e):e;const{is:bh,defineProperty:vh,getOwnPropertyDescriptor:wh,getOwnPropertyNames:xh,getOwnPropertySymbols:Ah,getPrototypeOf:Sh}=Object,ri=globalThis,na=ri.trustedTypes,Eh=na?na.emptyScript:"",Ch=ri.reactiveElementPolyfillSupport,or=(e,t)=>e,as={toAttribute(e,t){switch(t){case Boolean:e=e?Eh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},vc=(e,t)=>!bh(e,t),ia={attribute:!0,type:String,converter:as,reflect:!1,useDefault:!1,hasChanged:vc};Symbol.metadata??=Symbol("metadata"),ri.litPropertyMetadata??=new WeakMap;let xe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ia){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&vh(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=wh(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ia}static _$Ei(){if(this.hasOwnProperty(or("elementProperties")))return;const t=Sh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(or("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(or("properties"))){const r=this.properties,n=[...xh(r),...Ah(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(ra(i))}else t!==void 0&&r.push(ra(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:as).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:as;this._$Em=i,this[i]=o.fromAttribute(r,s.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const i=this.constructor,s=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??vc)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};xe.elementStyles=[],xe.shadowRootOptions={mode:"open"},xe[or("elementProperties")]=new Map,xe[or("finalized")]=new Map,Ch?.({ReactiveElement:xe}),(ri.reactiveElementVersions??=[]).push("2.1.0");const Ys=globalThis,un=Ys.trustedTypes,sa=un?un.createPolicy("lit-html",{createHTML:e=>e}):void 0,wc="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,xc="?"+Ft,Ph=`<${xc}>`,ae=document,fr=()=>ae.createComment(""),mr=e=>e===null||typeof e!="object"&&typeof e!="function",Qs=Array.isArray,Th=e=>Qs(e)||typeof e?.[Symbol.iterator]=="function",gi=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oa=/-->/g,aa=/>/g,Kt=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),la=/'/g,ca=/"/g,Ac=/^(?:script|style|textarea|title)$/i,$h=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Je=$h(1),Ne=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),ua=new WeakMap,ee=ae.createTreeWalker(ae,129);function Sc(e,t){if(!Qs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return sa!==void 0?sa.createHTML(t):t}const Oh=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Ge;for(let a=0;a<r;a++){const l=e[a];let u,h,m=-1,y=0;for(;y<l.length&&(o.lastIndex=y,h=o.exec(l),h!==null);)y=o.lastIndex,o===Ge?h[1]==="!--"?o=oa:h[1]!==void 0?o=aa:h[2]!==void 0?(Ac.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=Kt):h[3]!==void 0&&(o=Kt):o===Kt?h[0]===">"?(o=i??Ge,m=-1):h[1]===void 0?m=-2:(m=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Kt:h[3]==='"'?ca:la):o===ca||o===la?o=Kt:o===oa||o===aa?o=Ge:(o=Kt,i=void 0);const v=o===Kt&&e[a+1].startsWith("/>")?" ":"";s+=o===Ge?l+Ph:m>=0?(n.push(u),l.slice(0,m)+wc+l.slice(m)+Ft+v):l+Ft+(m===-2?a:v)}return[Sc(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};let ls=class Ec{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,h]=Oh(t,r);if(this.el=Ec.createElement(u,n),ee.currentNode=this.el.content,r===2||r===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=ee.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(wc)){const y=h[o++],v=i.getAttribute(m).split(Ft),E=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:E[2],strings:v,ctor:E[1]==="."?Nh:E[1]==="?"?Ih:E[1]==="@"?Lh:ni}),i.removeAttribute(m)}else m.startsWith(Ft)&&(l.push({type:6,index:s}),i.removeAttribute(m));if(Ac.test(i.tagName)){const m=i.textContent.split(Ft),y=m.length-1;if(y>0){i.textContent=un?un.emptyScript:"";for(let v=0;v<y;v++)i.append(m[v],fr()),ee.nextNode(),l.push({type:2,index:++s});i.append(m[y],fr())}}}else if(i.nodeType===8)if(i.data===xc)l.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(Ft,m+1))!==-1;)l.push({type:7,index:s}),m+=Ft.length-1}s++}}static createElement(t,r){const n=ae.createElement("template");return n.innerHTML=t,n}};function Ie(e,t,r=e,n){if(t===Ne)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=mr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=Ie(e,i._$AS(e,t.values),i,n)),t}let Rh=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??ae).importNode(r,!0);ee.currentNode=i;let s=ee.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new Ks(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Mh(s,this,t)),this._$AV.push(u),l=n[++a]}o!==l?.index&&(s=ee.nextNode(),o++)}return ee.currentNode=ae,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},Ks=class Cc{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ie(this,t,r),mr(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==Ne&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Th(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&mr(this._$AH)?this._$AA.nextSibling.data=t:this.T(ae.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ls.createElement(Sc(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Rh(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=ua.get(t.strings);return r===void 0&&ua.set(t.strings,r=new ls(t)),r}k(t){Qs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new Cc(this.O(fr()),this.O(fr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ni=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Z}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=Ie(this,t,r,0),o=!mr(t)||t!==this._$AH&&t!==Ne,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=Ie(this,a[n+l],r,l),u===Ne&&(u=this._$AH[l]),o||=!mr(u)||u!==this._$AH[l],u===Z?t=Z:t!==Z&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Nh=class extends ni{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},Ih=class extends ni{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},Lh=class extends ni{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=Ie(this,t,r,0)??Z)===Ne)return;const n=this._$AH,i=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==Z&&(n===Z||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Mh=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ie(this,t)}};const Dh=Ys.litHtmlPolyfillSupport;Dh?.(ls,Ks),(Ys.litHtmlVersions??=[]).push("3.3.0");const Pc=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new Ks(t.insertBefore(fr(),s),s,void 0,r??{})}return i._$AI(e),i};const Xs=globalThis;let ar=class extends xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};ar._$litElement$=!0,ar.finalized=!0,Xs.litElementHydrateSupport?.({LitElement:ar});const jh=Xs.litElementPolyfillSupport;jh?.({LitElement:ar});(Xs.litElementVersions??=[]).push("4.2.0");function kh(e){return(t={},r)=>{const n={};for(const i in e)n[i]=e[i](t[i],r);return n}}const Bh="action",_r="state",We=Symbol(),da=Symbol(),ha=Symbol(),pa=Symbol(),fa=Symbol(),ma=Symbol(),ye=Symbol();function Fh(e,t){return class extends t{constructor(...r){super(...r),this[ye]=this[ye].bind(this),this[da]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[ha](),this[fa]()}disconnectedCallback(){this[ma](),this[pa](),super.disconnectedCallback&&super.disconnectedCallback()}[da](){this[We]=this.mapEvents?this.mapEvents():{}}[ha](){for(const r in this[We])this.addEventListener(r,this[We][r],!1)}[pa](){for(const r in this[We])this.removeEventListener(r,this[We][r],!1)}[fa](){e.addEventListener(_r,this[ye]),this[ye]()}[ma](){e.removeEventListener(_r,this[ye])}[ye](){this.mapState&&Object.assign(this,this.mapState(e.state))}}}const ii=e=>e;let zh=class extends EventTarget{constructor(t,r){super(),this.state=t,this.reducer=r,this.state=this.reducer(this.state,{})}dispatch(t){const r=new CustomEvent(Bh,{cancelable:!0,detail:{action:t}});return this.dispatchEvent(r)&&(t=r.detail.action,this.state=this.reducer(this.state,t),this.dispatchEvent(new CustomEvent(_r,{detail:{action:t}}))),t}};const Tc=(e,t)=>t.indexOf("/")>-1?t:e+"/"+t,_a=(e,t,r)=>{const n=Tc(t,r);return e.dispatch[t][r]=i=>{const s={type:n,...i!==void 0&&{payload:i}};return e.dispatch(s)},n},Fr={},ya=[],Uh={dispatchPlugin:{onModel(e,t,r){e.dispatch[t]={};for(const n in r.reducers)_a(e,t,n)}},effectsPlugin:{onModel(e,t,r){if(!r.effects)return;const n=r.effects({getDispatch:()=>e.dispatch,getState:()=>e.state});for(const i in n){const s=_a(e,t,i),o=n[i];Fr[s]?Fr[s].push(o):Fr[s]=[o],i==="init"&&ya.push(o)}},onStore(e){e.addEventListener(_r,t=>{const{action:r}=t.detail,n=Fr[r.type];n&&queueMicrotask(()=>n.forEach(i=>i(r.payload)))}),queueMicrotask(()=>ya.forEach(t=>t()))}}},Hh=e=>{const t={...e.models},r={...Uh,...e.plugins};for(const a in r){const l=r[a];l.model&&(t[a]=l.model)}const n={};for(const a in t){const l=t[a],u={};for(const h in l.reducers)u[Tc(a,h)]=l.reducers[h];n[a]=(h=l.state,m)=>{const y=u[m.type];return y?y(h,m.payload):h}}const i=kh(n),s=e&&e.state,o=new zh(s,i);for(const a in r){const l=r[a];if(l.onModel)for(const u in t)l.onModel(o,u,t[u])}for(const a in r){const l=r[a];l.onStore&&l.onStore(o)}return o};function qh(e,t){const r={name:location.hostname,storage:localStorage,serializer:JSON,filter:s=>!0,persist:s=>s,delay:0,...t},n=r.storage.getItem(r.name);n&&(e.state={...e.state,...r.serializer.parse(n)});let i=0;return e.addEventListener(_r,s=>{const{action:o}=s.detail;r.filter(o)&&(i&&window.clearTimeout(i),i=window.setTimeout(()=>{r.storage.setItem(r.name,r.serializer.stringify(r.persist(e.state))),i=0},r.delay))}),e}class Vh extends HTMLElement{static get version(){return"23.5.12"}}customElements.define("vaadin-lumo-styles",Vh);const rn=window,Zs=rn.ShadowRoot&&(rn.ShadyCSS===void 0||rn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,to=Symbol(),ga=new WeakMap;let eo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==to)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Zs&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ga.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ga.set(r,t))}return t}toString(){return this.cssText}};const Gh=e=>new eo(typeof e=="string"?e:e+"",void 0,to),lt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new eo(r,e,to)},Jh=(e,t)=>{Zs?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),i=rn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)})},ba=Zs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Gh(r)})(e):e;var bi;const dn=window,va=dn.trustedTypes,Wh=va?va.emptyScript:"",wa=dn.reactiveElementPolyfillSupport,cs={toAttribute(e,t){switch(t){case Boolean:e=e?Wh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$c=(e,t)=>t!==e&&(t==t||e==e),vi={attribute:!0,type:String,converter:cs,reflect:!1,hasChanged:$c},us="finalized";let Ae=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,r=vi){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(i){const s=this[t];this[r]=i,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||vi}static finalize(){if(this.hasOwnProperty(us))return!1;this[us]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(ba(i))}else t!==void 0&&r.push(ba(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Jh(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=vi){var i;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:cs).toAttribute(r,n.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,r){var n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:cs;this._$El=s,this[s]=a.fromAttribute(r,o.type),this._$El=null}}requestUpdate(t,r,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||$c)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ae[us]=!0,Ae.elementProperties=new Map,Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},wa?.({ReactiveElement:Ae}),((bi=dn.reactiveElementVersions)!==null&&bi!==void 0?bi:dn.reactiveElementVersions=[]).push("1.6.3");var wi;const hn=window,Le=hn.trustedTypes,xa=Le?Le.createPolicy("lit-html",{createHTML:e=>e}):void 0,ds="$lit$",zt=`lit$${(Math.random()+"").slice(9)}$`,Oc="?"+zt,Yh=`<${Oc}>`,le=document,yr=()=>le.createComment(""),gr=e=>e===null||typeof e!="object"&&typeof e!="function",Rc=Array.isArray,Qh=e=>Rc(e)||typeof e?.[Symbol.iterator]=="function",xi=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Aa=/-->/g,Sa=/>/g,Xt=RegExp(`>|${xi}(?:([^\\s"'>=/]+)(${xi}*=${xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ea=/'/g,Ca=/"/g,Nc=/^(?:script|style|textarea|title)$/i,Kh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),HA=Kh(2),Me=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),Pa=new WeakMap,re=le.createTreeWalker(le,129,null,!1);function Ic(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return xa!==void 0?xa.createHTML(t):t}const Xh=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":"",o=Ye;for(let a=0;a<r;a++){const l=e[a];let u,h,m=-1,y=0;for(;y<l.length&&(o.lastIndex=y,h=o.exec(l),h!==null);)y=o.lastIndex,o===Ye?h[1]==="!--"?o=Aa:h[1]!==void 0?o=Sa:h[2]!==void 0?(Nc.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=Xt):h[3]!==void 0&&(o=Xt):o===Xt?h[0]===">"?(o=i??Ye,m=-1):h[1]===void 0?m=-2:(m=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Xt:h[3]==='"'?Ca:Ea):o===Ca||o===Ea?o=Xt:o===Aa||o===Sa?o=Ye:(o=Xt,i=void 0);const v=o===Xt&&e[a+1].startsWith("/>")?" ":"";s+=o===Ye?l+Yh:m>=0?(n.push(u),l.slice(0,m)+ds+l.slice(m)+zt+v):l+zt+(m===-2?(n.push(void 0),a):v)}return[Ic(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class br{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,h]=Xh(t,r);if(this.el=br.createElement(u,n),re.currentNode=this.el.content,r===2){const m=this.el.content,y=m.firstChild;y.remove(),m.append(...y.childNodes)}for(;(i=re.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const m=[];for(const y of i.getAttributeNames())if(y.endsWith(ds)||y.startsWith(zt)){const v=h[o++];if(m.push(y),v!==void 0){const E=i.getAttribute(v.toLowerCase()+ds).split(zt),P=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:P[2],strings:E,ctor:P[1]==="."?tp:P[1]==="?"?rp:P[1]==="@"?np:si})}else l.push({type:6,index:s})}for(const y of m)i.removeAttribute(y)}if(Nc.test(i.tagName)){const m=i.textContent.split(zt),y=m.length-1;if(y>0){i.textContent=Le?Le.emptyScript:"";for(let v=0;v<y;v++)i.append(m[v],yr()),re.nextNode(),l.push({type:2,index:++s});i.append(m[y],yr())}}}else if(i.nodeType===8)if(i.data===Oc)l.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(zt,m+1))!==-1;)l.push({type:7,index:s}),m+=zt.length-1}s++}}static createElement(t,r){const n=le.createElement("template");return n.innerHTML=t,n}}function De(e,t,r=e,n){var i,s,o,a;if(t===Me)return t;let l=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const u=gr(t)?void 0:t._$litDirective$;return l?.constructor!==u&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(e),l._$AT(e,r,n)),n!==void 0?((o=(a=r)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=De(e,l._$AS(e,t.values),l,n)),t}class Zh{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:i}=this._$AD,s=((r=t?.creationScope)!==null&&r!==void 0?r:le).importNode(n,!0);re.currentNode=s;let o=re.nextNode(),a=0,l=0,u=i[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new Or(o,o.nextSibling,this,t):u.type===1?h=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(h=new ip(o,this,t)),this._$AV.push(h),u=i[++l]}a!==u?.index&&(o=re.nextNode(),a++)}return re.currentNode=le,s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Or{constructor(t,r,n,i){var s;this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=De(this,t,r),gr(t)?t===tt||t==null||t===""?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qh(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tt&&gr(this._$AH)?this._$AA.nextSibling.data=t:this.$(le.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=br.createElement(Ic(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const o=new Zh(s,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(t){let r=Pa.get(t.strings);return r===void 0&&Pa.set(t.strings,r=new br(t)),r}T(t){Rc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new Or(this.k(yr()),this.k(yr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class si{constructor(t,r,n,i,s){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=tt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=De(this,t,r,0),o=!gr(t)||t!==this._$AH&&t!==Me,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=De(this,a[n+l],r,l),u===Me&&(u=this._$AH[l]),o||(o=!gr(u)||u!==this._$AH[l]),u===tt?t=tt:t!==tt&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!i&&this.j(t)}j(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tp extends si{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tt?void 0:t}}const ep=Le?Le.emptyScript:"";class rp extends si{constructor(){super(...arguments),this.type=4}j(t){t&&t!==tt?this.element.setAttribute(this.name,ep):this.element.removeAttribute(this.name)}}class np extends si{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=De(this,t,r,0))!==null&&n!==void 0?n:tt)===Me)return;const i=this._$AH,s=t===tt&&i!==tt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==tt&&(i===tt||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ip{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){De(this,t)}}const Ta=hn.litHtmlPolyfillSupport;Ta?.(br,Or),((wi=hn.litHtmlVersions)!==null&&wi!==void 0?wi:hn.litHtmlVersions=[]).push("2.8.0");const sp=(e,t,r)=>{var n,i;const s=(n=r?.renderBefore)!==null&&n!==void 0?n:t;let o=s._$litPart$;if(o===void 0){const a=(i=r?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Or(t.insertBefore(yr(),a),a,void 0,r??{})}return o._$AI(e),o};var Ai,Si;let nn=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sp(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Me}};nn.finalized=!0,nn._$litElement$=!0,(Ai=globalThis.litElementHydrateSupport)===null||Ai===void 0||Ai.call(globalThis,{LitElement:nn});const $a=globalThis.litElementPolyfillSupport;$a?.({LitElement:nn});((Si=globalThis.litElementVersions)!==null&&Si!==void 0?Si:globalThis.litElementVersions=[]).push("3.3.3");const op=e=>class extends e{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(r){this._set_theme(r)}};const Lc=[];function Lt(e,t,r={}){e&&hp(e)&&console.warn(`The custom element definition for "${e}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=cp(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,r):Lc.push({themeFor:e,styles:t,include:r.include,moduleId:r.moduleId})}function hs(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Lc}function ap(e,t){return(e||"").split(" ").some(r=>new RegExp(`^${r.split("*").join(".*")}$`).test(t))}function lp(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function cp(e=[]){return[e].flat(1/0).filter(t=>t instanceof eo?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Mc(e){const t=[];return e.include&&[].concat(e.include).forEach(r=>{const n=hs().find(i=>i.moduleId===r);n?t.push(...Mc(n),...n.styles):console.warn(`Included moduleId ${r} not found in style registry`)},e.styles),t}function up(e,t){const r=document.createElement("style");r.innerHTML=e.map(n=>n.cssText).join(`
`),t.content.appendChild(r)}function dp(e){const t=`${e}-default-theme`,r=hs().filter(n=>n.moduleId!==t&&ap(n.themeFor,e)).map(n=>({...n,styles:[...Mc(n),...n.styles],includePriority:lp(n.moduleId)})).sort((n,i)=>i.includePriority-n.includePriority);return r.length>0?r:hs().filter(n=>n.moduleId===t)}function hp(e){return Dc(customElements.get(e))}function Dc(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}const Ue=e=>class extends op(e){static finalize(){if(super.finalize(),this.elementStyles)return;const r=this.prototype._template;!r||Dc(this)||up(this.getStylesForThis(),r)}static finalizeStyles(r){const n=this.getStylesForThis();return r?[...super.finalizeStyles(r),...n]:n}static getStylesForThis(){const r=Object.getPrototypeOf(this.prototype),n=(r?r.constructor.__themes:[])||[];this.__themes=[...n,...dp(this.is)];const i=this.__themes.flatMap(s=>s.styles);return i.filter((s,o)=>o===i.lastIndexOf(s))}};const pp=lt`
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
`,jc=document.createElement("template");jc.innerHTML=`<style>${pp.toString().replace(":host","html")}</style>`;document.head.appendChild(jc.content);const kc=lt`
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
`;Lt("",kc,{moduleId:"lumo-color"});const fp=lt`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;Lt("",[kc,fp],{moduleId:"lumo-color-legacy"});const mp=lt`
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
`,Bc=document.createElement("template");Bc.innerHTML=`<style>${mp.toString().replace(":host","html")}</style>`;document.head.appendChild(Bc.content);const _p=lt`
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
`,yp=lt`
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
`;Lt("",yp,{moduleId:"lumo-typography"});const Fc=document.createElement("template");Fc.innerHTML=`<style>${_p.toString().replace(":host","html")}</style>`;document.head.appendChild(Fc.content);Lt("vaadin-app-layout",lt`
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
  `,{moduleId:"lumo-app-layout"});const zc=document.createElement("template");zc.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(zc.content);const oi=e=>e.test(navigator.userAgent),ps=e=>e.test(navigator.platform),gp=e=>e.test(navigator.vendor);oi(/Android/);oi(/Chrome/)&&gp(/Google Inc/);oi(/Firefox/);const bp=ps(/^iPad/)||ps(/^Mac/)&&navigator.maxTouchPoints>1,vp=ps(/^iPhone/),wp=vp||bp;oi(/^((?!chrome|android).)*safari/i);const JA=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();function Uc(){if(wp){const e=window.innerHeight,r=window.innerWidth>e,n=document.documentElement.clientHeight;r&&n>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${n-e}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Uc();window.addEventListener("resize",Uc);window.JSCompiler_renameProperty=function(e,t){return e};function Qe(e,t,r){return{index:e,removed:t,addedCount:r}}const Hc=0,qc=1,fs=2,ms=3;function xp(e,t,r,n,i,s){let o=s-i+1,a=r-t+1,l=new Array(o);for(let u=0;u<o;u++)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;u++)l[0][u]=u;for(let u=1;u<o;u++)for(let h=1;h<a;h++)if(ro(e[t+h-1],n[i+u-1]))l[u][h]=l[u-1][h-1];else{let m=l[u-1][h]+1,y=l[u][h-1]+1;l[u][h]=m<y?m:y}return l}function Ap(e){let t=e.length-1,r=e[0].length-1,n=e[t][r],i=[];for(;t>0||r>0;){if(t==0){i.push(fs),r--;continue}if(r==0){i.push(ms),t--;continue}let s=e[t-1][r-1],o=e[t-1][r],a=e[t][r-1],l;o<a?l=o<s?o:s:l=a<s?a:s,l==s?(s==n?i.push(Hc):(i.push(qc),n=s),t--,r--):l==o?(i.push(ms),t--,n=o):(i.push(fs),r--,n=a)}return i.reverse(),i}function Sp(e,t,r,n,i,s){let o=0,a=0,l,u=Math.min(r-t,s-i);if(t==0&&i==0&&(o=Ep(e,n,u)),r==e.length&&s==n.length&&(a=Cp(e,n,u-o)),t+=o,i+=o,r-=a,s-=a,r-t==0&&s-i==0)return[];if(t==r){for(l=Qe(t,[],0);i<s;)l.removed.push(n[i++]);return[l]}else if(i==s)return[Qe(t,[],r-t)];let h=Ap(xp(e,t,r,n,i,s));l=void 0;let m=[],y=t,v=i;for(let E=0;E<h.length;E++)switch(h[E]){case Hc:l&&(m.push(l),l=void 0),y++,v++;break;case qc:l||(l=Qe(y,[],0)),l.addedCount++,y++,l.removed.push(n[v]),v++;break;case fs:l||(l=Qe(y,[],0)),l.addedCount++,y++;break;case ms:l||(l=Qe(y,[],0)),l.removed.push(n[v]),v++;break}return l&&m.push(l),m}function Ep(e,t,r){for(let n=0;n<r;n++)if(!ro(e[n],t[n]))return n;return r}function Cp(e,t,r){let n=e.length,i=t.length,s=0;for(;s<r&&ro(e[--n],t[--i]);)s++;return s}function Vc(e,t){return Sp(e,0,e.length,t,0,t.length)}function ro(e,t){return e===t}let Pp=0,Gc=0,Pe=[],Tp=0,_s=!1,Jc=document.createTextNode("");new window.MutationObserver($p).observe(Jc,{characterData:!0});function $p(){_s=!1;const e=Pe.length;for(let t=0;t<e;t++){let r=Pe[t];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}Pe.splice(0,e),Gc+=e}const lr={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},Ut={run(e){return _s||(_s=!0,Jc.textContent=Tp++),Pe.push(e),Pp++},cancel(e){const t=e-Gc;if(t>=0){if(!Pe[t])throw new Error("invalid async handle: "+e);Pe[t]=null}}};const N=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function ge(e){return e.localName==="slot"}let Nt=class{static getFlattenedNodes(e){const t=N(e);return ge(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(r=>ge(r)?(r=r,N(r).assignedNodes({flatten:!0})):[r]).reduce((r,n)=>r.concat(n),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ge(this._target)?this._listenSlots([this._target]):N(this._target).children&&(this._listenSlots(N(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ge(this._target)?this._unlistenSlots([this._target]):N(this._target).children&&(this._unlistenSlots(N(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ut.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=Vc(t,this._effectiveNodes);for(let i=0,s;i<r.length&&(s=r[i]);i++)for(let o=0,a;o<s.removed.length&&(a=s.removed[o]);o++)e.removedNodes.push(a);for(let i=0,s;i<r.length&&(s=r[i]);i++)for(let o=s.index;o<s.index+s.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];ge(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];ge(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};let pn=!1,Wc=[],Yc=[];function Qc(){pn=!0,requestAnimationFrame(function(){pn=!1,Op(Wc),setTimeout(function(){Rp(Yc)})})}function Op(e){for(;e.length;)Kc(e.shift())}function Rp(e){for(let t=0,r=e.length;t<r;t++)Kc(e.shift())}function Kc(e){const t=e[0],r=e[1],n=e[2];try{r.apply(t,n)}catch(i){setTimeout(()=>{throw i})}}function Np(e,t,r){pn||Qc(),Wc.push([e,t,r])}function Xc(e,t,r){pn||Qc(),Yc.push([e,t,r])}let Ip=/(url\()([^)]*)(\))/g,Lp=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,zr,pt;function cr(e,t){if(e&&Lp.test(e)||e==="//")return e;if(zr===void 0){zr=!1;try{const r=new URL("b","http://a");r.pathname="c%20d",zr=r.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),zr)try{return new URL(e,t).href}catch{return e}return pt||(pt=document.implementation.createHTMLDocument("temp"),pt.base=pt.createElement("base"),pt.head.appendChild(pt.base),pt.anchor=pt.createElement("a"),pt.body.appendChild(pt.anchor)),pt.base.href=t,pt.anchor.href=e,pt.anchor.href||e}function no(e,t){return e.replace(Ip,function(r,n,i,s){return n+"'"+cr(i.replace(/["']/g,""),t)+"'"+s})}function io(e){return e.substring(0,e.lastIndexOf("/")+1)}const so=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Mp=so&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Dp=window.Polymer&&window.Polymer.rootPath||io(document.baseURI||window.location.href),fn=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,jp=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,je=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,kp=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,vr=window.Polymer&&window.Polymer.legacyOptimizations||!1,Zc=window.Polymer&&window.Polymer.legacyWarnings||!1,Bp=window.Polymer&&window.Polymer.syncInitialRender||!1,ys=window.Polymer&&window.Polymer.legacyUndefined||!1,Fp=window.Polymer&&window.Polymer.orderedComputed||!1,oo=!0;const zp=function(e){oo=e};let Oa=window.Polymer&&window.Polymer.removeNestedTemplates||!1,tu=window.Polymer&&window.Polymer.fastDomIf||!1,gs=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ur=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Up=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Hp=0;const et=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=Hp++;function n(i){let s=i.__mixinSet;if(s&&s[r])return i;let o=t,a=o.get(i);if(!a){a=e(i),o.set(i,a);let l=Object.create(a.__mixinSet||s||null);l[r]=!0,a.__mixinSet=l}return a}return n};let ao={},eu={};function Ra(e,t){ao[e]=eu[e.toLowerCase()]=t}function Na(e){return ao[e]||eu[e.toLowerCase()]}function qp(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class wr extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,r){if(t){let n=Na(t);return n&&r?n.querySelector(r):n}return null}attributeChangedCallback(t,r,n,i){r!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,r=cr(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=io(r)}return this.__assetpath}register(t){if(t=t||this.id,t){if(je&&Na(t)!==void 0)throw Ra(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ra(t,this),qp(this)}}}wr.prototype.modules=ao;customElements.define("dom-module",wr);const Vp="link[rel=import][type~=css]",Gp="include",Ia="shady-unscoped";function lo(e){return wr.import(e)}function La(e){let t=e.body?e.body:e;const r=no(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=r,n}function Jp(e){const t=e.trim().split(/\s+/),r=[];for(let n=0;n<t.length;n++)r.push(...Wp(t[n]));return r}function Wp(e){const t=lo(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const r=[];r.push(...uo(t));const n=t.querySelector("template");n&&r.push(...co(n,t.assetpath)),t._styles=r}return t._styles}function co(e,t){if(!e._styles){const r=[],n=e.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let s=n[i],o=s.getAttribute(Gp);o&&r.push(...Jp(o).filter(function(a,l,u){return u.indexOf(a)===l})),t&&(s.textContent=no(s.textContent,t)),r.push(s)}e._styles=r}return e._styles}function Yp(e){let t=lo(e);return t?uo(t):[]}function uo(e){const t=[],r=e.querySelectorAll(Vp);for(let n=0;n<r.length;n++){let i=r[n];if(i.import){const s=i.import,o=i.hasAttribute(Ia);if(o&&!s._unscopedStyle){const a=La(s);a.setAttribute(Ia,""),s._unscopedStyle=a}else s._style||(s._style=La(s));t.push(o?s._unscopedStyle:s._style)}}return t}function Qp(e){let t=e.trim().split(/\s+/),r="";for(let n=0;n<t.length;n++)r+=Kp(t[n]);return r}function Kp(e){let t=lo(e);if(t&&t._cssText===void 0){let r=Zp(t),n=t.querySelector("template");n&&(r+=Xp(n,t.assetpath)),t._cssText=r||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function Xp(e,t){let r="";const n=co(e,t);for(let i=0;i<n.length;i++){let s=n[i];s.parentNode&&s.parentNode.removeChild(s),r+=s.textContent}return r}function Zp(e){let t="",r=uo(e);for(let n=0;n<r.length;n++)t+=r[n].textContent;return t}function bs(e){return e.indexOf(".")>=0}function Mt(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function ru(e,t){return e.indexOf(t+".")===0}function xr(e,t){return t.indexOf(e+".")===0}function Ar(e,t,r){return t+r.slice(e.length)}function tf(e,t){return e===t||ru(e,t)||xr(e,t)}function nr(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let n=e[r].toString().split(".");for(let i=0;i<n.length;i++)t.push(n[i])}return t.join(".")}else return e}function nu(e){return Array.isArray(e)?nr(e).split("."):e.toString().split(".")}function ot(e,t,r){let n=e,i=nu(t);for(let s=0;s<i.length;s++){if(!n)return;let o=i[s];n=n[o]}return r&&(r.path=i.join(".")),n}function Ma(e,t,r){let n=e,i=nu(t),s=i[i.length-1];if(i.length>1){for(let o=0;o<i.length-1;o++){let a=i[o];if(n=n[a],!n)return}n[s]=r}else n[t]=r;return i.join(".")}const mn={},ef=/-[a-z]/g,rf=/([A-Z])/g;function ho(e){return mn[e]||(mn[e]=e.indexOf("-")<0?e:e.replace(ef,t=>t[1].toUpperCase()))}function ai(e){return mn[e]||(mn[e]=e.replace(rf,"-$1").toLowerCase())}const nf=Ut,iu=et(e=>{class t extends e{static createProperties(n){const i=this.prototype;for(let s in n)s in i||i._createPropertyAccessor(s)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,s){let o=this.__data[n],a=this._shouldPropertyChange(n,i,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,nf.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(n,i,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,s)),this.__dataCounter--}_shouldPropertiesChange(n,i,s){return!!i}_propertiesChanged(n,i,s){}_shouldPropertyChange(n,i,s){return s!==i&&(s===s||i===i)}attributeChangedCallback(n,i,s,o){i!==s&&this._attributeToProperty(n,s),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,s,o)}_attributeToProperty(n,i,s){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(i,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,s){this.__serializing=!0,s=arguments.length<3?this[n]:s,this._valueToNodeAttribute(this,s,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,s){const o=this._serializeValue(i);(s==="class"||s==="name"||s==="slot")&&(n=N(n)),o===void 0?n.removeAttribute(s):n.setAttribute(s,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});const su={};let Hr=HTMLElement.prototype;for(;Hr;){let e=Object.getOwnPropertyNames(Hr);for(let t=0;t<e.length;t++)su[e[t]]=!0;Hr=Object.getPrototypeOf(Hr)}const sf=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function of(e,t){if(!su[t]){let r=e[t];r!==void 0&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}const ou=et(e=>{const t=iu(e);class r extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let s=0;s<i.length;s++)this.prototype._createPropertyAccessor(ho(i[s]))}static attributeNameForProperty(i){return ai(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let s in i)this._setProperty(s,i[s])}_ensureAttribute(i,s){const o=this;o.hasAttribute(i)||this._valueToNodeAttribute(o,s,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(sf(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,s){let o;switch(s){case Object:try{o=JSON.parse(i)}catch{o=i}break;case Array:try{o=JSON.parse(i)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:o=isNaN(i)?String(i):Number(i),o=new Date(o);break;default:o=super._deserializeValue(i,s);break}return o}_definePropertyAccessor(i,s){of(this,i),super._definePropertyAccessor(i,s)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return r});const af={"dom-if":!0,"dom-repeat":!0};let Da=!1,ja=!1;function lf(){if(!Da){Da=!0;const e=document.createElement("textarea");e.placeholder="a",ja=e.placeholder===e.textContent}return ja}function cf(e){lf()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const uf=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,r,n)=>{const i=r.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(i,n));return}t.setAttribute(n,i)}})();function df(e){let t=e.getAttribute("is");if(t&&af[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;){const{name:n}=r.attributes[0];uf(e,r,n),r.removeAttribute(n)}}return e}function au(e,t){let r=t.parentInfo&&au(e,t.parentInfo);if(r){for(let n=r.firstChild,i=0;n;n=n.nextSibling)if(t.parentIndex===i++)return n}else return e}function hf(e,t,r,n){n.id&&(t[n.id]=r)}function pf(e,t,r){if(r.events&&r.events.length)for(let n=0,i=r.events,s;n<i.length&&(s=i[n]);n++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function ff(e,t,r,n){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=n)}function mf(e,t,r){return e=e._methodHost||e,function(i){e[r]?e[r](i,i.detail):console.warn("listener method `"+r+"` not defined")}}const _f=et(e=>{class t extends e{static _parseTemplate(n,i){if(!n._templateInfo){let s=n._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!i,s.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,s,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,s){return this._parseTemplateNode(n.content,i,s)}static _parseTemplateNode(n,i,s){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,i,s)||o:a.localName==="slot"&&(i.hasInsertionPoint=!0),cf(a),a.firstChild&&this._parseTemplateChildNodes(a,i,s),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,i,s)||o),o||s.noted}static _parseTemplateChildNodes(n,i,s){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=df(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)o.textContent+=h.textContent,l=h.nextSibling,n.removeChild(h),h=l;if(i.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let u={parentIndex:a,parentInfo:s};this._parseTemplateNode(o,i,u)&&(u.infoIndex=i.nodeInfoList.push(u)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,s){let o=n,a=this._parseTemplate(o,i);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,s){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,u;u=a[l];l--)o=this._parseTemplateNodeAttribute(n,i,s,u.name,u.value)||o;return o}static _parseTemplateNodeAttribute(n,i,s,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),s.events=s.events||[],s.events.push({name:o.slice(3),value:a}),!0):o==="id"?(s.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let s=i.nodeInfoList,o=i.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let u=0,h=s.length,m;u<h&&(m=s[u]);u++){let y=l[u]=au(a,m);hf(this,a.$,y,m),ff(this,y,m,i),pf(this,y,m)}return a=a,a}_addMethodEventListenerToNode(n,i,s,o){o=o||n;let a=mf(o,i,s);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,s){n.addEventListener(i,s)}_removeEventListenerFromNode(n,i,s){n.removeEventListener(i,s)}}return t});let Sr=0;const Er=[],U={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},lu="__computeInfo",yf=/[A-Z]/;function Ei(e,t,r){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),r))for(let i in n){let s=n[i],o=n[i]=Array(s.length);for(let a=0;a<s.length;a++)o[a]=s[a]}return n}function ir(e,t,r,n,i,s){if(t){let o=!1;const a=Sr++;for(let l in r){let u=i?Mt(l):l,h=t[u];if(h)for(let m=0,y=h.length,v;m<y&&(v=h[m]);m++)(!v.info||v.info.lastRun!==a)&&(!i||po(l,v.trigger))&&(v.info&&(v.info.lastRun=a),v.fn(e,l,r,n,v.info,i,s),o=!0)}return o}return!1}function gf(e,t,r,n,i,s,o,a){let l=!1,u=o?Mt(n):n,h=t[u];if(h)for(let m=0,y=h.length,v;m<y&&(v=h[m]);m++)(!v.info||v.info.lastRun!==r)&&(!o||po(n,v.trigger))&&(v.info&&(v.info.lastRun=r),v.fn(e,n,i,s,v.info,o,a),l=!0);return l}function po(e,t){if(t){let r=t.name;return r==e||!!(t.structured&&ru(r,e))||!!(t.wildcard&&xr(r,e))}else return!0}function ka(e,t,r,n,i){let s=typeof i.method=="string"?e[i.method]:i.method,o=i.property;s?s.call(e,e.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function bf(e,t,r,n,i){let s=e[U.NOTIFY],o,a=Sr++;for(let u in t)t[u]&&(s&&gf(e,s,a,u,r,n,i)||i&&vf(e,u,r))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function vf(e,t,r){let n=Mt(t);if(n!==t){let i=ai(n)+"-changed";return cu(e,i,r[t],t),!0}return!1}function cu(e,t,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),N(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function wf(e,t,r,n,i,s){let a=(s?Mt(t):t)!=t?t:null,l=a?ot(e,a):e.__data[t];a&&l===void 0&&(l=r[t]),cu(e,i.eventName,l,a)}function xf(e,t,r,n,i){let s,o=e.detail,a=o&&o.path;a?(n=Ar(r,n,a),s=o&&o.value):s=e.currentTarget[r],s=i?!s:s,(!t[U.READ_ONLY]||!t[U.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,s,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Af(e,t,r,n,i){let s=e.__data[t];fn&&(s=fn(s,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,s)}function Sf(e,t,r,n){let i=e[U.COMPUTE];if(i)if(Fp){Sr++;const s=Cf(e),o=[];for(let l in t)Ba(l,i,o,s,n);let a;for(;a=o.shift();)uu(e,"",t,r,a)&&Ba(a.methodInfo,i,o,s,n);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;ir(e,i,s,r,n);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const Ef=(e,t,r)=>{let n=0,i=t.length-1,s=-1;for(;n<=i;){const o=n+i>>1,a=r.get(t[o].methodInfo)-r.get(e.methodInfo);if(a<0)n=o+1;else if(a>0)i=o-1;else{s=o;break}}s<0&&(s=i+1),t.splice(s,0,e)},Ba=(e,t,r,n,i)=>{const s=i?Mt(e):e,o=t[s];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Sr&&(!i||po(e,l.trigger))&&(l.info.lastRun=Sr,Ef(l.info,r,n))}};function Cf(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[U.COMPUTE];let{counts:n,ready:i,total:s}=Pf(e),o;for(;o=i.shift();){t.set(o,t.size);const a=r[o];a&&a.forEach(l=>{const u=l.info.methodInfo;--s,--n[u]===0&&i.push(u)})}s!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Pf(e){const t=e[lu],r={},n=e[U.COMPUTE],i=[];let s=0;for(let o in t){const a=t[o];s+=r[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)t[o]||i.push(o);return{counts:r,ready:i,total:s}}function uu(e,t,r,n,i){let s=vs(e,t,r,n,i);if(s===Er)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function Tf(e,t,r){let n=e.__dataLinkedPaths;if(n){let i;for(let s in n){let o=n[s];xr(s,t)?(i=Ar(s,o,t),e._setPendingPropertyOrPath(i,r,!0,!0)):xr(o,t)&&(i=Ar(o,s,t),e._setPendingPropertyOrPath(i,r,!0,!0))}}}function Ci(e,t,r,n,i,s,o){r.bindings=r.bindings||[];let a={kind:n,target:i,parts:s,literal:o,isCompound:s.length!==1};if(r.bindings.push(a),If(a)){let{event:u,negate:h}=a.parts[0];a.listenerEvent=u||ai(i)+"-changed",a.listenerNegate=h}let l=t.nodeInfoList.length;for(let u=0;u<a.parts.length;u++){let h=a.parts[u];h.compoundIndex=u,$f(e,t,a,h,l)}}function $f(e,t,r,n,i){if(!n.literal)if(r.kind==="attribute"&&r.target[0]==="-")console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,o={index:i,binding:r,part:n,evaluator:e};for(let a=0;a<s.length;a++){let l=s[a];typeof l=="string"&&(l=hu(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:Of,info:o,trigger:l})}}}function Of(e,t,r,n,i,s,o){let a=o[i.index],l=i.binding,u=i.part;if(s&&u.source&&t.length>u.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let h=r[t];t=Ar(u.source,l.target,t),a._setPendingPropertyOrPath(t,h,!1,!0)&&e._enqueueClient(a)}else{let h=i.evaluator._evaluateBinding(e,u,t,r,n,s);h!==Er&&Rf(e,a,l,u,h)}}function Rf(e,t,r,n,i){if(i=Nf(t,i,r,n),fn&&(i=fn(i,r.target,r.kind,t)),r.kind=="attribute")e._valueToNodeAttribute(t,i,r.target);else{let s=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[U.READ_ONLY]||!t[U.READ_ONLY][s])&&t._setPendingProperty(s,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,i)}}function Nf(e,t,r,n){if(r.isCompound){let i=e.__dataCompoundStorage[r.target];i[n.compoundIndex]=t,t=i.join("")}return r.kind!=="attribute"&&(r.target==="textContent"||r.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function If(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Lf(e,t){let{nodeList:r,nodeInfoList:n}=t;if(n.length)for(let i=0;i<n.length;i++){let s=n[i],o=r[i],a=s.bindings;if(a)for(let l=0;l<a.length;l++){let u=a[l];Mf(o,u),Df(o,e,u)}o.__dataHost=e}}function Mf(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let o=0;o<n.length;o++)i[o]=n[o].literal;let s=t.target;r[s]=i,t.literal&&t.kind=="property"&&(s==="className"&&(e=N(e)),e[s]=t.literal)}}function Df(e,t,r){if(r.listenerEvent){let n=r.parts[0];e.addEventListener(r.listenerEvent,function(i){xf(i,t,r.target,n.source,n.negate)})}}function Fa(e,t,r,n,i,s){s=t.static||s&&(typeof s!="object"||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:s};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,r,{fn:n,info:o,trigger:l});return s&&e._addPropertyEffect(t.methodName,r,{fn:n,info:o}),o}function vs(e,t,r,n,i){let s=e._methodHost||e,o=s[i.methodName];if(o){let a=e._marshalArgs(i.args,t,r);return a===Er?Er:o.apply(s,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const jf=[],du="(?:[a-zA-Z_$][\\w.:$\\-*]*)",kf="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Bf="(?:'(?:[^'\\\\]|\\\\.)*')",Ff='(?:"(?:[^"\\\\]|\\\\.)*")',zf="(?:"+Bf+"|"+Ff+")",za="(?:("+du+"|"+kf+"|"+zf+")\\s*)",Uf="(?:"+za+"(?:,\\s*"+za+")*)",Hf="(?:\\(\\s*(?:"+Uf+"?)\\)\\s*)",qf="("+du+"\\s*"+Hf+"?)",Vf="(\\[\\[|{{)\\s*",Gf="(?:]]|}})",Jf="(?:(!)\\s*)?",Wf=Vf+Jf+qf+Gf,Ua=new RegExp(Wf,"g");function Ha(e){let t="";for(let r=0;r<e.length;r++){let n=e[r].literal;t+=n||""}return t}function Pi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:jf};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return Yf(i,n)}else return n}return null}function Yf(e,t){return t.args=e.map(function(r){let n=hu(r);return n.literal||(t.static=!1),n},this),t}function hu(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0;break}return r.literal||(r.rootProperty=Mt(t),r.structured=bs(t),r.structured&&(r.wildcard=t.slice(-2)==".*",r.wildcard&&(r.name=t.slice(0,-2)))),r}function qa(e,t,r){let n=ot(e,r);return n===void 0&&(n=t[r]),n}function pu(e,t,r,n){const i={indexSplices:n};ys&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(r+".splices",i),e.notifyPath(r+".length",t.length),ys&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Ke(e,t,r,n,i,s){pu(e,t,r,[{index:n,addedCount:i,removed:s,object:t,type:"splice"}])}function Qf(e){return e[0].toUpperCase()+e.substring(1)}const li=et(e=>{const t=_f(ou(e));class r extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return U}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Xe.length){let i=Xe[Xe.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let s=this[U.READ_ONLY];for(let o in i)(!s||!s[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=i[o])}_addPropertyEffect(i,s,o){this._createPropertyAccessor(i,s==U.READ_ONLY);let a=Ei(this,s,!0)[i];a||(a=this[s][i]=[]),a.push(o)}_removePropertyEffect(i,s,o){let a=Ei(this,s,!0)[i],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,s){let o=this[s];return!!(o&&o[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,U.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,U.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,U.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,U.COMPUTE)}_setPendingPropertyOrPath(i,s,o,a){if(a||Mt(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=ot(this,i);if(i=Ma(this,i,s),!i||!super._shouldPropertyChange(i,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,s,o))return Tf(this,i,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,s,o);this[i]=s}return!1}_setUnmanagedPropertyToNode(i,s,o){(o!==i[s]||typeof o=="object")&&(s==="className"&&(i=N(i)),i[s]=o)}_setPendingProperty(i,s,o){let a=this.__dataHasPaths&&bs(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,s,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=s:this.__data[i]=s,this.__dataPending[i]=s,(a||this[U.NOTIFY]&&this[U.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=o),!0):!1}_setProperty(i,s){this._setPendingProperty(i,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let s=0;s<i.length;s++){let o=i[s];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,s){for(let o in i)(s||!this[U.READ_ONLY]||!this[U.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,s,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Sf(this,s,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,o,a),this._flushClients(),ir(this,this[U.REFLECT],s,o,a),ir(this,this[U.OBSERVE],s,o,a),l&&bf(this,l,s,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,s,o){this[U.PROPAGATE]&&ir(this,this[U.PROPAGATE],i,s,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,s,o)}_runEffectsForTemplate(i,s,o,a){const l=(u,h)=>{ir(this,i.propertyEffects,u,o,h,i.nodeList);for(let m=i.firstChild;m;m=m.nextSibling)this._runEffectsForTemplate(m,u,o,h)};i.runEffects?i.runEffects(l,s,a):l(s,a)}linkPaths(i,s){i=nr(i),s=nr(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=s}unlinkPaths(i){i=nr(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,s){let o={path:""},a=ot(this,i,o);pu(this,a,o.path,s)}get(i,s){return ot(s||this,i)}set(i,s,o){o?Ma(o,i,s):(!this[U.READ_ONLY]||!this[U.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,s,!0)&&this._invalidateProperties()}push(i,...s){let o={path:""},a=ot(this,i,o),l=a.length,u=a.push(...s);return s.length&&Ke(this,a,o.path,l,s.length,[]),u}pop(i){let s={path:""},o=ot(this,i,s),a=!!o.length,l=o.pop();return a&&Ke(this,o,s.path,o.length,0,[l]),l}splice(i,s,o,...a){let l={path:""},u=ot(this,i,l);s<0?s=u.length-Math.floor(-s):s&&(s=Math.floor(s));let h;return arguments.length===2?h=u.splice(s):h=u.splice(s,o,...a),(a.length||h.length)&&Ke(this,u,l.path,s,a.length,h),h}shift(i){let s={path:""},o=ot(this,i,s),a=!!o.length,l=o.shift();return a&&Ke(this,o,s.path,0,0,[l]),l}unshift(i,...s){let o={path:""},a=ot(this,i,o),l=a.unshift(...s);return s.length&&Ke(this,a,o.path,0,s.length,[]),l}notifyPath(i,s){let o;if(arguments.length==1){let a={path:""};s=ot(this,i,a),o=a.path}else Array.isArray(i)?o=nr(i):o=i;this._setPendingPropertyOrPath(o,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,s){this._addPropertyEffect(i,U.READ_ONLY),s&&(this["_set"+Qf(i)]=function(o){this._setProperty(i,o)})}_createPropertyObserver(i,s,o){let a={property:i,method:s,dynamicFn:!!o};this._addPropertyEffect(i,U.OBSERVE,{fn:ka,info:a,trigger:{name:i}}),o&&this._addPropertyEffect(s,U.OBSERVE,{fn:ka,info:a,trigger:{name:s}})}_createMethodObserver(i,s){let o=Pi(i);if(!o)throw new Error("Malformed observer expression '"+i+"'");Fa(this,o,U.OBSERVE,vs,null,s)}_createNotifyingProperty(i){this._addPropertyEffect(i,U.NOTIFY,{fn:wf,info:{eventName:ai(i)+"-changed",property:i}})}_createReflectedProperty(i){let s=this.constructor.attributeNameForProperty(i);s[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,U.REFLECT,{fn:Af,info:{attrName:s}})}_createComputedProperty(i,s,o){let a=Pi(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=Fa(this,a,U.COMPUTE,uu,i,o);Ei(this,lu)[i]=l}_marshalArgs(i,s,o){const a=this.__data,l=[];for(let u=0,h=i.length;u<h;u++){let{name:m,structured:y,wildcard:v,value:E,literal:P}=i[u];if(!P)if(v){const I=xr(m,s),R=qa(a,o,I?s:m);E={path:I?s:m,value:R,base:I?ot(a,m):R}}else E=y?qa(a,o,m):a[m];if(ys&&!this._overrideLegacyUndefined&&E===void 0&&i.length>1)return Er;l[u]=E}return l}static addPropertyEffect(i,s,o){this.prototype._addPropertyEffect(i,s,o)}static createPropertyObserver(i,s,o){this.prototype._createPropertyObserver(i,s,o)}static createMethodObserver(i,s){this.prototype._createMethodObserver(i,s)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,s){this.prototype._createReadOnlyProperty(i,s)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,s,o){this.prototype._createComputedProperty(i,s,o)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,s){let o=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(s)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=i._parentTemplateInfo||this.__templateInfo,u=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=u,u?u.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(i,s,o){let a=i.hostProps=i.hostProps||{};a[s]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[s]=l[s]||[]).push(o)}_stampTemplate(i,s){s=s||this._bindTemplate(i,!0),Xe.push(this);let o=super._stampTemplate(i,s);if(Xe.pop(),s.nodeList=o.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=s,Lf(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(i){const s=i.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=s;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),s.nextSibling=s.previousSibling=null;let u=s.childNodes;for(let h=0;h<u.length;h++){let m=u[h];N(N(m).parentNode).removeChild(m)}}static _parseTemplateNode(i,s,o){let a=t._parseTemplateNode.call(this,i,s,o);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,s);l&&(i.textContent=Ha(l)||" ",Ci(this,s,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,s,o,a,l){let u=this._parseBindings(l,s);if(u){let h=a,m="property";yf.test(a)?m="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),m="attribute");let y=Ha(u);return y&&m=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(y+=" "+i.getAttribute(a)),i.setAttribute(a,y)),m=="attribute"&&h=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&h==="value"&&i.setAttribute(h,""),i.removeAttribute(h),m==="property"&&(a=ho(a)),Ci(this,s,o,m,a,u,y),!0}else return t._parseTemplateNodeAttribute.call(this,i,s,o,a,l)}static _parseTemplateNestedTemplate(i,s,o){let a=t._parseTemplateNestedTemplate.call(this,i,s,o);const l=i.parentNode,u=o.templateInfo,h=l.localName==="dom-if",m=l.localName==="dom-repeat";Oa&&(h||m)&&(l.removeChild(i),o=o.parentInfo,o.templateInfo=u,o.noted=!0,a=!1);let y=u.hostProps;if(tu&&h)y&&(s.hostProps=Object.assign(s.hostProps||{},y),Oa||(o.parentInfo.noted=!0));else{let v="{";for(let E in y){let P=[{mode:v,source:E,dependencies:[E],hostProp:!0}];Ci(this,s,o,"property","_host_"+E,P)}}return a}static _parseBindings(i,s){let o=[],a=0,l;for(;(l=Ua.exec(i))!==null;){l.index>a&&o.push({literal:i.slice(a,l.index)});let u=l[1][0],h=!!l[2],m=l[3].trim(),y=!1,v="",E=-1;u=="{"&&(E=m.indexOf("::"))>0&&(v=m.substring(E+2),m=m.substring(0,E),y=!0);let P=Pi(m),I=[];if(P){let{args:R,methodName:$}=P;for(let S=0;S<R.length;S++){let w=R[S];w.literal||I.push(w)}let M=s.dynamicFns;(M&&M[$]||P.static)&&(I.push($),P.dynamicFn=!0)}else I.push(m);o.push({source:m,mode:u,negate:h,customEvent:y,signature:P,dependencies:I,event:v}),a=Ua.lastIndex}if(a&&a<i.length){let u=i.substring(a);u&&o.push({literal:u})}return o.length?o:null}static _evaluateBinding(i,s,o,a,l,u){let h;return s.signature?h=vs(i,o,a,l,s.signature):o!=s.source?h=ot(i,s.source):u&&bs(o)?h=ot(i,o):h=i.__data[o],s.negate&&(h=!h),h}}return r}),Xe=[];function Kf(e){const t={};for(let r in e){const n=e[r];t[r]=typeof n=="function"?{type:n}:n}return t}const Xf=et(e=>{const t=iu(e);function r(s){const o=Object.getPrototypeOf(s);return o.prototype instanceof i?o:null}function n(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let o=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(o=Kf(a))}s.__ownProperties=o}return s.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=r(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=r(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});const Zf="3.5.1",ws=window.ShadyCSS&&window.ShadyCSS.cssBuild,ci=et(e=>{const t=Xf(li(e));function r(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let u=l._properties;for(let h in u){let m=u[h];"value"in m&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=m)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,u,h,m){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(u)?console.warn(`Cannot redefine computed property '${u}'.`):l._createComputedProperty(u,h.computed,m)),h.readOnly&&!l._hasReadOnlyEffect(u)?l._createReadOnlyProperty(u,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(u)&&console.warn(`Cannot make readOnly property '${u}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(u)?l._createReflectedProperty(u):h.reflectToAttribute===!1&&l._hasReflectEffect(u)&&console.warn(`Cannot make reflected property '${u}' non-reflected.`),h.notify&&!l._hasNotifyEffect(u)?l._createNotifyingProperty(u):h.notify===!1&&l._hasNotifyEffect(u)&&console.warn(`Cannot make notify property '${u}' non-notify.`),h.observer&&l._createPropertyObserver(u,h.observer,m[h.observer]),l._addPropertyToAttributeMap(u)}function s(l,u,h,m){if(!ws){const y=u.content.querySelectorAll("style"),v=co(u),E=Yp(h),P=u.content.firstElementChild;for(let R=0;R<E.length;R++){let $=E[R];$.textContent=l._processStyleText($.textContent,m),u.content.insertBefore($,P)}let I=0;for(let R=0;R<v.length;R++){let $=v[R],M=y[I];M!==$?($=$.cloneNode(!0),M.parentNode.insertBefore($,M)):I++,$.textContent=l._processStyleText($.textContent,m)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(u,h),Up&&ws&&Mp){const y=u.content.querySelectorAll("style");if(y){let v="";Array.from(y).forEach(E=>{v+=E.textContent,E.parentNode.removeChild(E)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(v)}}}function o(l){let u=null;if(l&&(!je||kp)&&(u=wr.import(l,"template"),je&&!u))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return u}class a extends t{static get polymerElementVersion(){return Zf}static _finalizeClass(){t._finalizeClass.call(this);const u=n(this);u&&this.createObservers(u,this._properties),this._prepareTemplate()}static _prepareTemplate(){let u=this.template;u&&(typeof u=="string"?(console.error("template getter must return HTMLTemplateElement"),u=null):vr||(u=u.cloneNode(!0))),this.prototype._template=u}static createProperties(u){for(let h in u)i(this.prototype,h,u[h],u)}static createObservers(u,h){const m=this.prototype;for(let y=0;y<u.length;y++)m._createMethodObserver(u[y],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let u=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof u=="function"&&(u=u()),this._template=u!==void 0?u:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(u){this._template=u}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const u=this.importMeta;if(u)this._importPath=io(u.url);else{const h=wr.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Dp,this.importPath=this.constructor.importPath;let u=r(this.constructor);if(u)for(let h in u){let m=u[h];if(this._canApplyPropertyDefault(h)){let y=typeof m.value=="function"?m.value.call(this):m.value;this._hasAccessor(h)?this._setPendingProperty(h,y,!0):this[h]=y}}}_canApplyPropertyDefault(u){return!this.hasOwnProperty(u)}static _processStyleText(u,h){return no(u,h)}static _finalizeTemplate(u){const h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;const m=this.importPath,y=m?cr(m):"";s(this,h,u,y),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(u){const h=N(this);if(h.attachShadow)return u?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:u}),h.shadowRoot.appendChild(u),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Bp&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(u){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,u)}resolveUrl(u,h){return!h&&this.importPath&&(h=cr(this.importPath)),cr(u,h)}static _parseTemplateContent(u,h,m){return h.dynamicFns=h.dynamicFns||this._properties,t._parseTemplateContent.call(this,u,h,m)}static _addTemplatePropertyEffect(u,h,m){return Zc&&!(h in this._properties)&&!(m.info.part.signature&&m.info.part.signature.static)&&!m.info.part.hostProp&&!u.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,u,h,m)}}return a});const Va=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class fu{constructor(t,r){_u(t,r);const n=r.reduce((i,s,o)=>i+mu(s)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function mu(e){if(e instanceof fu)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function tm(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof fu)return mu(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const he=function(t,...r){_u(t,r);const n=document.createElement("template");let i=r.reduce((s,o,a)=>s+tm(o)+t[a+1],t[0]);return Va&&(i=Va.createHTML(i)),n.innerHTML=i,n},_u=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};const Dt=ci(HTMLElement);const fo=et(e=>class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(r=>{r.hostConnected&&r.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(r=>{r.hostDisconnected&&r.hostDisconnected()})}addController(r){this.__controllers.add(r),this.$!==void 0&&this.isConnected&&r.hostConnected&&r.hostConnected()}removeController(r){this.__controllers.delete(r)}}),em=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,sn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function rm(){function e(){return!0}return yu(e)}function nm(){try{return im()?!0:sm()?sn?!om():!rm():!1}catch{return!1}}function im(){return localStorage.getItem("vaadin.developmentmode.force")}function sm(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function om(){return!!(sn&&Object.keys(sn).map(t=>sn[t]).filter(t=>t.productionMode).length>0)}function yu(e,t){if(typeof e!="function")return;const r=em.exec(e.toString());if(r)try{e=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(t)}window.Vaadin=window.Vaadin||{};const Ga=function(e,t){if(window.Vaadin.developmentMode)return yu(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=nm());function am(){}const lm=function(){if(typeof Ga=="function")return Ga(am)};let Ja=0,gu=0;const Te=[];let Wa=0,xs=!1;const bu=document.createTextNode("");new window.MutationObserver(cm).observe(bu,{characterData:!0});function cm(){xs=!1;const e=Te.length;for(let t=0;t<e;t++){const r=Te[t];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}Te.splice(0,e),gu+=e}const um={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},dm={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},hm={run(e){xs||(xs=!0,bu.textContent=Wa,Wa+=1),Te.push(e);const t=Ja;return Ja+=1,t},cancel(e){const t=e-gu;if(t>=0){if(!Te[t])throw new Error(`invalid async handle: ${e}`);Te[t]=null}}};let vu=class As{static debounce(t,r,n){return t instanceof As?t._cancelAsync():t=new As,t.setConfig(r,n),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,r){this._asyncModule=t,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,Ss.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ss.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}},Ss=new Set;function pm(e){Ss.add(e)}class $e{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let r="reverse";return t.scrollLeft>0?r="default":(t.scrollLeft=2,t.scrollLeft<2&&(r="negative")),document.body.removeChild(t),r}static getNormalizedScrollLeft(t,r,n){const{scrollLeft:i}=n;if(r!=="rtl"||!t)return i;switch(t){case"negative":return n.scrollWidth-n.clientWidth+i;case"reverse":return n.scrollWidth-n.clientWidth-i;default:return i}}static setNormalizedScrollLeft(t,r,n,i){if(r!=="rtl"||!t){n.scrollLeft=i;return}switch(t){case"negative":n.scrollLeft=n.clientWidth-n.scrollWidth+i;break;case"reverse":n.scrollLeft=n.scrollWidth-n.clientWidth-i;break;default:n.scrollLeft=i;break}}}const $t=[];function fm(){const e=Cs();$t.forEach(t=>{Es(t,e)})}let qr;const mm=new MutationObserver(fm);mm.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function Es(e,t,r=e.getAttribute("dir")){t?e.setAttribute("dir",t):r!=null&&e.removeAttribute("dir")}function Cs(){return document.documentElement.getAttribute("dir")}const _m=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:r=>r||"",toAttribute:r=>r===""?null:r}}}}static finalize(){super.finalize(),qr||(qr=$e.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Es(this,Cs(),null))}attributeChangedCallback(r,n,i){if(super.attributeChangedCallback(r,n,i),r!=="dir")return;const s=Cs(),o=i===s&&$t.indexOf(this)===-1,a=!i&&n&&$t.indexOf(this)===-1;o||a?(this.__subscribe(),Es(this,s,i)):i!==s&&n===s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=$t.includes(this),this.__unsubscribe()}_valueToNodeAttribute(r,n,i){i==="dir"&&n===""&&!r.hasAttribute("dir")||super._valueToNodeAttribute(r,n,i)}_attributeToProperty(r,n,i){r==="dir"&&!n?this.dir="":super._attributeToProperty(r,n,i)}__subscribe(){$t.includes(this)||$t.push(this)}__unsubscribe(){$t.includes(this)&&$t.splice($t.indexOf(this),1)}__getNormalizedScrollLeft(r){return $e.getNormalizedScrollLeft(qr,this.getAttribute("dir")||"ltr",r)}__setNormalizedScrollLeft(r,n){return $e.setNormalizedScrollLeft(qr,this.getAttribute("dir")||"ltr",r,n)}};zp(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){lm()};let Ti;const Ya=new Set,He=e=>class extends _m(e){static get version(){return"23.5.12"}static finalize(){super.finalize();const{is:r}=this;r&&!Ya.has(r)&&(window.Vaadin.registrations.push(this),Ya.add(r),window.Vaadin.developmentModeCallback&&(Ti=vu.debounce(Ti,dm,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),pm(Ti)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};let mo=!1;window.addEventListener("keydown",()=>{mo=!0},{capture:!0});window.addEventListener("mousedown",()=>{mo=!1},{capture:!0});function ym(){return mo}function wu(e){const t=e.style;if(t.visibility==="hidden"||t.display==="none")return!0;const r=window.getComputedStyle(e);return r.visibility==="hidden"||r.display==="none"}function gm(e){if(!wm(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}function bm(e,t){const r=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return r===0||n===0?n>r:r>n}function vm(e,t){const r=[];for(;e.length>0&&t.length>0;)bm(e[0],t[0])?r.push(t.shift()):r.push(e.shift());return r.concat(e,t)}function Ps(e){const t=e.length;if(t<2)return e;const r=Math.ceil(t/2),n=Ps(e.slice(0,r)),i=Ps(e.slice(r));return vm(n,i)}function xu(e,t){if(e.nodeType!==Node.ELEMENT_NODE||wu(e))return!1;const r=e,n=gm(r);let i=n>0;n>=0&&t.push(r);let s=[];return r.localName==="slot"?s=r.assignedNodes({flatten:!0}):s=(r.shadowRoot||r).children,[...s].forEach(o=>{i=xu(o,t)||i}),i}function Qa(e){return e.offsetParent===null&&e.clientWidth===0&&e.clientHeight===0?!0:wu(e)}function wm(e){return e.matches('[tabindex="-1"]')?!1:e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Au(e){return e.getRootNode().activeElement===e}function xm(e){const t=[];return xu(e,t)?Ps(t):t}const $i=[];class Am{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");$i.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,$i.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from($i).pop()&&t.key==="Tab"){t.preventDefault();const r=t.shiftKey;this.__focusNextElement(r)}}__focusNextElement(t=!1){const r=this.__focusableElements,n=t?-1:1,i=this.__focusedElementIndex,s=(r.length+i+n)%r.length,o=r[s];o.focus(),o.localName==="input"&&o.select()}get __focusableElements(){return xm(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(Au).pop())}}class Ka extends He(Ue(fo(Dt))){static get template(){return he`
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
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new Am(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Np(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new Nt(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new Nt(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new Nt(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,r){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):r&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,r=this.$.drawer;t===0?r.setAttribute("hidden",""):r.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const r=this.$.navbarTop.getBoundingClientRect(),i=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${r.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${i.height}px`);const o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${o.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:r}=this.$.drawer,n=t>r?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",n)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,r){r&&window.removeEventListener(r,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",r=this.querySelectorAll('[slot*="navbar"]');r.length>0&&Array.from(r).forEach(n=>{n.getAttribute("slot").indexOf("touch-optimized")>-1&&(n.__touchOptimized=!0),t&&n.__touchOptimized?n.setAttribute("slot","navbar-bottom"):n.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Xc(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(Ka.is,Ka);const Sm=lt`
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
`,Su=document.createElement("template");Su.innerHTML=`<style>${Sm.toString().replace(":host","html")}</style>`;document.head.appendChild(Su.content);const Em=lt`
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
`;const Eu=document.createElement("template");Eu.innerHTML=`<style>${Em.toString().replace(":host","html")}$</style>`;document.head.appendChild(Eu.content);Lt("vaadin-tab",lt`
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
  `,{moduleId:"lumo-tab"});let Cm=0;function Pm(){return Cm++}class _o extends EventTarget{static generateId(t,r){return`${t||"default"}-${r.localName}-${Pm()}`}constructor(t,r,n,i,s){super(),this.host=t,this.slotName=r,this.slotFactory=n,this.slotInitializer=i,s&&(this.defaultId=_o.generateId(r,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:r,slotFactory:n}=this;let i=this.defaultNode;return!i&&n&&(i=n(t),i instanceof Element&&(r!==""&&i.setAttribute("slot",r),this.node=i,this.defaultNode=i)),i&&t.appendChild(i),i}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(r=>r.nodeType===Node.ELEMENT_NODE&&r.slot===t||r.nodeType===Node.TEXT_NODE&&r.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:r}=this;r&&r(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,r=t===""?"slot:not([name])":`slot[name=${t}]`,n=this.host.shadowRoot.querySelector(r);this.__slotObserver=new Nt(n,i=>{const s=this.node,o=i.addedNodes.find(a=>a!==s);i.removedNodes.length&&i.removedNodes.forEach(a=>{this.teardownNode(a)}),o&&(s&&s.isConnected&&this.host.removeChild(s),this.node=o,o!==this.defaultNode&&(this.initCustomNode(o),this.initNode(o)))})}}class Cu extends _o{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const r=this.node;r&&(r.context=t)}setManual(t){this.manual=t;const r=this.node;r&&(r.manual=t)}setOpened(t){this.opened=t;const r=this.node;r&&(r.opened=t)}setPosition(t){this.position=t;const r=this.node;r&&(r._position=t)}setShouldShow(t){this.shouldShow=t;const r=this.node;r&&(r.shouldShow=t)}setTarget(t){this.target=t;const r=this.node;r&&(r.target=t)}}const Pu=et(e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(r){this._setAriaDisabled(r)}_setAriaDisabled(r){r?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});const Tm=e=>e,Tu=typeof document.head.style.touchAction=="string",Ts="__polymerGestures",Oi="__polymerGesturesHandled",$s="__polymerGesturesTouchAction",Xa=25,Za=5,$m=2,Om=["mousedown","mousemove","mouseup","click"],Rm=[0,1,4,2],Nm=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function yo(e){return Om.indexOf(e)>-1}let Im=!1;(function(){try{const e=Object.defineProperty({},"passive",{get(){Im=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Lm(e){yo(e)}const Mm=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Dm={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function se(e){const t=e.type;if(!yo(t))return!1;if(t==="mousemove"){let n=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!Nm&&(n=Rm[e.which]||0),!!(n&1)}return(e.button===void 0?0:e.button)===0}function jm(e){if(e.type==="click"){if(e.detail===0)return!0;const t=Ht(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const r=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}const Ot={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function km(e){let t="auto";const r=Ou(e);for(let n=0,i;n<r.length;n++)if(i=r[n],i[$s]){t=i[$s];break}return t}function $u(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Oe(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Ou=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],go={},ne=[];function Bm(e,t){let r=document.elementFromPoint(e,t),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const i=n;if(n=n.shadowRoot.elementFromPoint(e,t),i===n)break;n&&(r=n)}return r}function Ht(e){const t=Ou(e);return t.length>0?t[0]:e.target}function Fm(e){const t=e.type,n=e.currentTarget[Ts];if(!n)return;const i=n[t];if(!i)return;if(!e[Oi]&&(e[Oi]={},t.startsWith("touch"))){const o=e.changedTouches[0];if(t==="touchstart"&&e.touches.length===1&&(Ot.touch.id=o.identifier),Ot.touch.id!==o.identifier)return;Tu||(t==="touchstart"||t==="touchmove")&&zm(e)}const s=e[Oi];if(!s.skip){for(let o=0,a;o<ne.length;o++)a=ne[o],i[a.name]&&!s[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<ne.length;o++)a=ne[o],i[a.name]&&!s[a.name]&&(s[a.name]=!0,a[t](e))}}function zm(e){const t=e.changedTouches[0],r=e.type;if(r==="touchstart")Ot.touch.x=t.clientX,Ot.touch.y=t.clientY,Ot.touch.scrollDecided=!1;else if(r==="touchmove"){if(Ot.touch.scrollDecided)return;Ot.touch.scrollDecided=!0;const n=km(e);let i=!1;const s=Math.abs(Ot.touch.x-t.clientX),o=Math.abs(Ot.touch.y-t.clientY);e.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=o>s:n==="pan-y"&&(i=s>o)),i?e.preventDefault():_n("track")}}function ur(e,t,r){return go[t]?(Um(e,t,r),!0):!1}function Um(e,t,r){const n=go[t],i=n.deps,s=n.name;let o=e[Ts];o||(e[Ts]=o={});for(let a=0,l,u;a<i.length;a++)l=i[a],!(Mm&&yo(l)&&l!=="click")&&(u=o[l],u||(o[l]=u={_count:0}),u._count===0&&e.addEventListener(l,Fm,Lm(l)),u[s]=(u[s]||0)+1,u._count=(u._count||0)+1);e.addEventListener(t,r),n.touchAction&&qm(e,n.touchAction)}function bo(e){ne.push(e);for(let t=0;t<e.emits.length;t++)go[e.emits[t]]=e}function Hm(e){for(let t=0,r;t<ne.length;t++){r=ne[t];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===e)return r}return null}function qm(e,t){Tu&&e instanceof HTMLElement&&hm.run(()=>{e.style.touchAction=t}),e[$s]=t}function vo(e,t,r){const n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,Tm(e).dispatchEvent(n),n.defaultPrevented){const i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function _n(e){const t=Hm(e);t.info&&(t.info.prevent=!0)}bo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Oe(this.info)},mousedown(e){if(!se(e))return;const t=Ht(e),r=this,n=s=>{se(s)||(Ze("up",t,s),Oe(r.info))},i=s=>{se(s)&&Ze("up",t,s),Oe(r.info)};$u(this.info,n,i),Ze("down",t,e)},touchstart(e){Ze("down",Ht(e),e.changedTouches[0],e)},touchend(e){Ze("up",Ht(e),e.changedTouches[0],e)}});function Ze(e,t,r,n){t&&vo(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent(i){return _n(i)}})}bo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>$m&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Oe(this.info)},mousedown(e){if(!se(e))return;const t=Ht(e),r=this,n=s=>{const o=s.clientX,a=s.clientY;tl(r.info,o,a)&&(r.info.state=r.info.started?s.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&_n("tap"),r.info.addMove({x:o,y:a}),se(s)||(r.info.state="end",Oe(r.info)),t&&Ri(r.info,t,s),r.info.started=!0)},i=s=>{r.info.started&&n(s),Oe(r.info)};$u(this.info,n,i),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=Ht(e),r=e.changedTouches[0],n=r.clientX,i=r.clientY;tl(this.info,n,i)&&(this.info.state==="start"&&_n("tap"),this.info.addMove({x:n,y:i}),Ri(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend(e){const t=Ht(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Ri(this.info,t,r))}});function tl(e,t,r){if(e.prevent)return!1;if(e.started)return!0;const n=Math.abs(e.x-t),i=Math.abs(e.y-r);return n>=Za||i>=Za}function Ri(e,t,r){if(!t)return;const n=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],s=i.x-e.x,o=i.y-e.y;let a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),vo(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover(){return Bm(r.clientX,r.clientY)}})}bo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){se(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){se(e)&&el(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){el(this.info,e.changedTouches[0],e)}});function el(e,t,r){const n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),s=Ht(r||t);!s||Dm[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Xa&&i<=Xa||jm(t))&&(e.prevent||vo(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}const Ru=et(e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",r=>{this._onKeyDown(r)}),this.addEventListener("keyup",r=>{this._onKeyUp(r)})}_onKeyDown(r){switch(r.key){case"Enter":this._onEnter(r);break;case"Escape":this._onEscape(r);break}}_onKeyUp(r){}_onEnter(r){}_onEscape(r){}});const Nu=e=>class extends Pu(Ru(e)){get _activeKeys(){return[" "]}ready(){super.ready(),ur(this,"down",r=>{this._shouldSetActive(r)&&this._setActive(!0)}),ur(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(r){return!this.disabled}_onKeyDown(r){super._onKeyDown(r),this._shouldSetActive(r)&&this._activeKeys.includes(r.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(r){this.toggleAttribute("active",r)}};const Iu=et(e=>class extends e{get _keyboardActive(){return ym()}ready(){this.addEventListener("focusin",r=>{this._shouldSetFocus(r)&&this._setFocused(!0)}),this.addEventListener("focusout",r=>{this._shouldRemoveFocus(r)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(r){this.toggleAttribute("focused",r),this.toggleAttribute("focus-ring",r&&this._keyboardActive)}_shouldSetFocus(r){return!0}_shouldRemoveFocus(r){return!0}});const Vm=e=>class extends Nu(Iu(e)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(r){this._value=r}ready(){super.ready();const r=this.getAttribute("value");r!==null&&(this.value=r)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(r){return!this.disabled&&!(r.type==="keydown"&&r.defaultPrevented)}_selectedChanged(r){this.setAttribute("aria-selected",r)}_disabledChanged(r){super._disabledChanged(r),r&&(this.selected=!1,this.blur())}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&!r.defaultPrevented&&(r.preventDefault(),this.click())}};class rl extends He(Ue(Vm(fo(Dt)))){static get template(){return he`
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
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Cu(this),this.addController(this._tooltipController)}_onKeyUp(t){const r=this.hasAttribute("active");if(super._onKeyUp(t),r){const n=this.querySelector("a");n&&n.click()}}}customElements.define(rl.is,rl);const Lu=document.createElement("template");Lu.innerHTML=`
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
`;document.head.appendChild(Lu.content);Lt("vaadin-tabs",lt`
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
  `,{moduleId:"lumo-tabs"});const Vr=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(t=>{t.target.resizables?t.target.resizables.forEach(r=>{r._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Gm=et(e=>class extends e{connectedCallback(){if(super.connectedCallback(),Vr.observe(this),this._observeParent){const r=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;r.resizables||(r.resizables=new Set,Vr.observe(r)),r.resizables.add(this),this.__parent=r}}disconnectedCallback(){super.disconnectedCallback(),Vr.unobserve(this);const r=this.__parent;if(this._observeParent&&r){const n=r.resizables;n&&(n.delete(this),n.size===0&&Vr.unobserve(r)),this.__parent=null}}get _observeParent(){return!1}_onResize(r){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});const Jm=e=>class extends Ru(e){focus(){const r=this._getItems();if(Array.isArray(r)){const n=this._getAvailableIndex(r,0,null,i=>!Qa(i));n>=0&&r[n].focus()}}get focused(){return(this._getItems()||[]).find(Au)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(r){if(super._onKeyDown(r),r.metaKey||r.ctrlKey)return;const{key:n}=r,i=this._getItems()||[],s=i.indexOf(this.focused);let o,a;const u=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(n)?(a=-u,o=s-u):this.__isNextKey(n)?(a=u,o=s+u):n==="Home"?(a=1,o=0):n==="End"&&(a=-1,o=i.length-1),o=this._getAvailableIndex(i,o,a,h=>!Qa(h)),o>=0&&(r.preventDefault(),this._focus(o,!0))}__isPrevKey(r){return this._vertical?r==="ArrowUp":r==="ArrowLeft"}__isNextKey(r){return this._vertical?r==="ArrowDown":r==="ArrowRight"}_focus(r,n=!1){const i=this._getItems();this._focusItem(i[r],n)}_focusItem(r){r&&(r.focus(),r.setAttribute("focus-ring",""))}_getAvailableIndex(r,n,i,s){const o=r.length;let a=n;for(let l=0;typeof a=="number"&&l<o;l+=1,a+=i||1){a<0?a=o-1:a>=o&&(a=0);const u=r[a];if(!u.hasAttribute("disabled")&&this.__isMatchingItem(u,s))return a}return-1}__isMatchingItem(r,n){return typeof n=="function"?n(r):!0}};const Wm=e=>class extends Jm(e){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",r=>this._onClick(r)),this._observer=new Nt(this,()=>{this._setItems(this._filterItems(Nt.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(r,n,i,s){if(!s&&r){this.setAttribute("aria-orientation",n||"vertical"),this.items.forEach(a=>{n?a.setAttribute("orientation",n):a.removeAttribute("orientation")}),this._setFocusable(i||0);const o=r[i];r.forEach(a=>{a.selected=a===o}),o&&!o.disabled&&this._scrollToItem(i)}}_filterItems(r){return r.filter(n=>n._hasVaadinItemMixin)}_onClick(r){if(r.metaKey||r.shiftKey||r.ctrlKey||r.defaultPrevented)return;const n=this._filterItems(r.composedPath())[0];let i;n&&!n.disabled&&(i=this.items.indexOf(n))>=0&&(this.selected=i)}_searchKey(r,n){this._searchReset=vu.debounce(this._searchReset,um.after(500),()=>{this._searchBuf=""}),this._searchBuf+=n.toLowerCase(),this.items.some(s=>this.__isMatchingKey(s))||(this._searchBuf=n.toLowerCase());const i=this._searchBuf.length===1?r+1:r;return this._getAvailableIndex(this.items,i,1,s=>this.__isMatchingKey(s)&&getComputedStyle(s).display!=="none")}__isMatchingKey(r){return r.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeyDown(r){if(r.metaKey||r.ctrlKey)return;const n=r.key,i=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(n)&&n.length===1){const s=this._searchKey(i,n);s>=0&&this._focus(s);return}super._onKeyDown(r)}_isItemHidden(r){return getComputedStyle(r).display==="none"}_setFocusable(r){r=this._getAvailableIndex(this.items,r,1);const n=this.items[r];this.items.forEach(i=>{i.tabIndex=i===n?0:-1})}_focus(r){this.items.forEach((n,i)=>{n.focused=i===r}),this._setFocusable(r),this._scrollToItem(r),super._focus(r)}focus(){this._observer&&this._observer.flush();const r=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(r)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(r){const n=this.items[r];if(!n)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],s=this._scrollerElement.getBoundingClientRect(),o=(this.items[r+1]||n).getBoundingClientRect(),a=(this.items[r-1]||n).getBoundingClientRect();let l=0;!this._isRTL&&o[i[1]]>=s[i[1]]||this._isRTL&&o[i[1]]<=s[i[1]]?l=o[i[1]]-s[i[1]]:(!this._isRTL&&a[i[0]]<=s[i[0]]||this._isRTL&&a[i[0]]>=s[i[0]])&&(l=a[i[0]]-s[i[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(r){if(this._vertical)this._scrollerElement.scrollTop+=r;else{const n=this.getAttribute("dir")||"ltr",i=$e.detectScrollType(),s=$e.getNormalizedScrollLeft(i,n,this._scrollerElement)+r;$e.setNormalizedScrollLeft(i,n,this._scrollerElement,s)}}};class nl extends Gm(He(Wm(Ue(Dt)))){static get template(){return he`
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
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Xc(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(r=>{this.__itemsResizeObserver.observe(r)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),r=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let n=Math.floor(t)>1?"start":"";Math.ceil(t)<Math.ceil(r-this._scrollOffset)&&(n+=" end"),this.__direction===1&&(n=n.replace(/start|end/gi,i=>i==="start"?"end":"start")),n?this.setAttribute("overflow",n.trim()):this.removeAttribute("overflow")}}customElements.define(nl.is,nl);const Ym=lt`
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
`;Lt("vaadin-button",Ym,{moduleId:"lumo-button"});const Qm=e=>class extends Pu(e){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(r,n){super._disabledChanged(r,n),r?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):n&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(r){this.disabled&&r!==-1&&(this._lastTabIndex=r,this.tabindex=-1)}};const Km=e=>class extends Nu(Qm(Iu(e))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(r){super._onKeyDown(r),this._activeKeys.includes(r.key)&&(r.preventDefault(),this.click())}};class il extends Km(He(Ue(fo(Dt)))){static get is(){return"vaadin-button"}static get template(){return he`
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
    `}ready(){super.ready(),this._tooltipController=new Cu(this),this.addController(this._tooltipController)}}customElements.define(il.is,il);const ui=!(window.ShadyDOM&&window.ShadyDOM.inUse);let yn;function sl(e){e&&e.shimcssproperties?yn=!1:yn=ui||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Cr;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Cr=window.ShadyCSS.cssBuild);const Mu=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?yn=window.ShadyCSS.nativeCss:window.ShadyCSS?(sl(window.ShadyCSS),window.ShadyCSS=void 0):sl(window.WebComponents&&window.WebComponents.flags);const wo=yn;class ol{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Du(e){return e=Xm(e),ju(Zm(e),e)}function Xm(e){return e.replace(It.comments,"").replace(It.port,"")}function Zm(e){let t=new ol;t.start=0,t.end=e.length;let r=t;for(let n=0,i=e.length;n<i;n++)if(e[n]===Bu){r.rules||(r.rules=[]);let s=r,o=s.rules[s.rules.length-1]||null;r=new ol,r.start=n+1,r.parent=s,r.previous=o,s.rules.push(r)}else e[n]===Fu&&(r.end=n+1,r=r.parent||t);return t}function ju(e,t){let r=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let i=e.previous?e.previous.end:e.parent.start;r=t.substring(i,e.start-1),r=t_(r),r=r.replace(It.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=r.trim();e.atRule=s.indexOf(o_)===0,e.atRule?s.indexOf(s_)===0?e.type=Se.MEDIA_RULE:s.match(It.keyframesRule)&&(e.type=Se.KEYFRAMES_RULE,e.keyframesName=e.selector.split(It.multipleSpaces).pop()):s.indexOf(zu)===0?e.type=Se.MIXIN_RULE:e.type=Se.STYLE_RULE}let n=e.rules;if(n)for(let i=0,s=n.length,o;i<s&&(o=n[i]);i++)ju(o,t);return e}function t_(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],r=6-t.length;for(;r--;)t="0"+t;return"\\"+t})}function ku(e,t,r=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!e_(i))for(let s=0,o=i.length,a;s<o&&(a=i[s]);s++)n=ku(a,t,n);else n=t?e.cssText:r_(e.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(e.selector&&(r+=e.selector+" "+Bu+`
`),r+=n,e.selector&&(r+=Fu+`

`)),r}function e_(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(zu)===0}function r_(e){return e=n_(e),i_(e)}function n_(e){return e.replace(It.customProp,"").replace(It.mixinProp,"")}function i_(e){return e.replace(It.mixinApply,"").replace(It.varApply,"")}const Se={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Bu="{",Fu="}",It={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},zu="--",s_="@media",o_="@";const Os=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,gn=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;const al=new Set,a_="shady-unscoped";function l_(e){const t=e.textContent;if(!al.has(t)){al.add(t);const r=document.createElement("style");r.setAttribute("shady-unscoped",""),r.textContent=t,document.head.appendChild(r)}}function c_(e){return e.hasAttribute(a_)}function Rs(e,t){return e?(typeof e=="string"&&(e=Du(e)),ku(e,wo)):""}function ll(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Du(e.textContent)),e.__cssRules||null}function on(e,t,r,n){if(!e)return;let i=!1,s=e.type;s===Se.STYLE_RULE?t(e):s===Se.MIXIN_RULE&&(i=!0);let o=e.rules;if(o&&!i)for(let a=0,l=o.length,u;a<l&&(u=o[a]);a++)on(u,t)}function u_(e,t){let r=0;for(let n=t,i=e.length;n<i;n++)if(e[n]==="(")r++;else if(e[n]===")"&&--r===0)return n;return-1}function Uu(e,t){let r=e.indexOf("var(");if(r===-1)return t(e,"","","");let n=u_(e,r+3),i=e.substring(r+4,n),s=e.substring(0,r),o=Uu(e.substring(n+1),t),a=i.indexOf(",");if(a===-1)return t(s,i.trim(),"",o);let l=i.substring(0,a).trim(),u=i.substring(a+1).trim();return t(s,l,u,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function d_(e){let t=e.localName,r="",n="";return t?t.indexOf("-")>-1?r=t:(n=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,n=e.extends),{is:r,typeExtension:n}}function h_(e){const t=[],r=e.querySelectorAll("style");for(let n=0;n<r.length;n++){const i=r[n];c_(i)?ui||(l_(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}const Hu="css-build";function p_(e){if(Cr!==void 0)return Cr;if(e.__cssBuild===void 0){const t=e.getAttribute(Hu);if(t)e.__cssBuild=t;else{const r=f_(e);r!==""&&m_(e),e.__cssBuild=r}}return e.__cssBuild||""}function cl(e){return p_(e)!==""}function f_(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const r=t.textContent.trim().split(":");if(r[0]===Hu)return r[1]}return""}function m_(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}function Ns(e,t){for(let r in t)r===null?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function qu(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}function __(e){const t=gn.test(e)||Os.test(e);return gn.lastIndex=0,Os.lastIndex=0,t}const y_=/;\s*/m,g_=/^\s*(initial)|(inherit)\s*$/,ul=/\s*!important/,Is="_-_";class b_{constructor(){this._map={}}set(t,r){t=t.trim(),this._map[t]={properties:r,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let bn=null;class at{constructor(){this._currentElement=null,this._measureElement=null,this._map=new b_}detectMixin(t){return __(t)}gatherStyles(t){const r=h_(t.content);if(r){const n=document.createElement("style");return n.textContent=r,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,r){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,r):null}transformStyle(t,r=""){let n=ll(t);return this.transformRules(n,r),t.textContent=Rs(n),n}transformCustomStyle(t){let r=ll(t);return on(r,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),t.textContent=Rs(r),r}transformRules(t,r){this._currentElement=r,on(t,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,r){return t=t.replace(Os,(n,i,s,o)=>this._produceCssProperties(n,i,s,o,r)),this._consumeCssProperties(t,r)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let r=t;for(;r.parent;)r=r.parent;const n={};let i=!1;return on(r,s=>{i=i||s===t,!i&&s.selector===t.selector&&Object.assign(n,this._cssTextToMap(s.parsedCssText))}),n}_consumeCssProperties(t,r){let n=null;for(;n=gn.exec(t);){let i=n[0],s=n[1],o=n.index,a=o+i.indexOf("@apply"),l=o+i.length,u=t.slice(0,a),h=t.slice(l),m=r?this._fallbacksFromPreviousRules(r):{};Object.assign(m,this._cssTextToMap(u));let y=this._atApplyToCssProperties(s,m);t=`${u}${y}${h}`,gn.lastIndex=o+y.length}return t}_atApplyToCssProperties(t,r){t=t.replace(y_,"");let n=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){this._currentElement&&(i.dependants[this._currentElement]=!0);let s,o,a;const l=i.properties;for(s in l)a=r&&r[s],o=[s,": var(",t,Is,s],a&&o.push(",",a.replace(ul,"")),o.push(")"),ul.test(l[s])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,r){let n=g_.exec(r);return n&&(n[1]?r=this._getInitialValueForProperty(t):r="apply-shim-inherit"),r}_cssTextToMap(t,r=!1){let n=t.split(";"),i,s,o={};for(let a=0,l,u;a<n.length;a++)l=n[a],l&&(u=l.split(":"),u.length>1&&(i=u[0].trim(),s=u.slice(1).join(":"),r&&(s=this._replaceInitialOrInherit(i,s)),o[i]=s));return o}_invalidateMixinEntry(t){if(bn)for(let r in t.dependants)r!==this._currentElement&&bn(r)}_produceCssProperties(t,r,n,i,s){if(n&&Uu(n,(I,R)=>{R&&this._map.get(R)&&(i=`@apply ${R};`)}),!i)return t;let o=this._consumeCssProperties(""+i,s),a=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(o,!0),u=l,h=this._map.get(r),m=h&&h.properties;m?u=Object.assign(Object.create(m),l):this._map.set(r,u);let y=[],v,E,P=!1;for(v in u)E=l[v],E===void 0&&(E="initial"),m&&!(v in m)&&(P=!0),y.push(`${r}${Is}${v}: ${E}`);return P&&this._invalidateMixinEntry(h),h&&(h.properties=u),n&&(a=`${t};${a}`),`${a}${y.join("; ")};`}}at.prototype.detectMixin=at.prototype.detectMixin;at.prototype.transformStyle=at.prototype.transformStyle;at.prototype.transformCustomStyle=at.prototype.transformCustomStyle;at.prototype.transformRules=at.prototype.transformRules;at.prototype.transformRule=at.prototype.transformRule;at.prototype.transformTemplate=at.prototype.transformTemplate;at.prototype._separator=Is;Object.defineProperty(at.prototype,"invalidCallback",{get(){return bn},set(e){bn=e}});const Ls={};const vn="_applyShimCurrentVersion",ke="_applyShimNextVersion",wn="_applyShimValidatingVersion",v_=Promise.resolve();function w_(e){let t=Ls[e];t&&x_(t)}function x_(e){e[vn]=e[vn]||0,e[wn]=e[wn]||0,e[ke]=(e[ke]||0)+1}function Vu(e){return e[vn]===e[ke]}function A_(e){return!Vu(e)&&e[wn]===e[ke]}function S_(e){e[wn]=e[ke],e._validating||(e._validating=!0,v_.then(function(){e[vn]=e[ke],e._validating=!1}))}let Ni=null,dl=window.HTMLImports&&window.HTMLImports.whenReady||null,Ii;function hl(e){requestAnimationFrame(function(){dl?dl(e):(Ni||(Ni=new Promise(t=>{Ii=t}),document.readyState==="complete"?Ii():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Ii()})),Ni.then(function(){e&&e()}))})}const pl="__seenByShadyCSS",Gr="__shadyCSSCachedStyle";let xn=null,dr=null,Vt=class{constructor(){this.customStyles=[],this.enqueued=!1,hl(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!dr||(this.enqueued=!0,hl(dr))}addCustomStyle(t){t[pl]||(t[pl]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Gr])return t[Gr];let r;return t.getStyle?r=t.getStyle():r=t,r}processStyles(){const t=this.customStyles;for(let r=0;r<t.length;r++){const n=t[r];if(n[Gr])continue;const i=this.getStyleForCustomStyle(n);if(i){const s=i.__appliedElement||i;xn&&xn(s),n[Gr]=s}}return t}};Vt.prototype.addCustomStyle=Vt.prototype.addCustomStyle;Vt.prototype.getStyleForCustomStyle=Vt.prototype.getStyleForCustomStyle;Vt.prototype.processStyles=Vt.prototype.processStyles;Object.defineProperties(Vt.prototype,{transformCallback:{get(){return xn},set(e){xn=e}},validateCallback:{get(){return dr},set(e){let t=!1;dr||(t=!0),dr=e,t&&this.enqueueDocumentValidation()}}});const sr=new at;class E_{constructor(){this.customStyleInterface=null,sr.invalidCallback=w_}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{sr.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,r){if(this.ensure(),cl(t))return;Ls[r]=t;let n=sr.transformTemplate(t,r);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let r=0;r<t.length;r++){let n=t[r],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&sr.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,r){if(this.ensure(),r&&Ns(t,r),t.shadowRoot){this.styleElement(t);let n=t.shadowRoot.children||t.shadowRoot.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}else{let n=t.children||t.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}}styleElement(t){this.ensure();let{is:r}=d_(t),n=Ls[r];if(!(n&&cl(n))&&n&&!Vu(n)){A_(n)||(this.prepareTemplate(n,r),S_(n));let i=t.shadowRoot;if(i){let s=i.querySelector("style");s&&(s.__cssRules=n._styleAst,s.textContent=Rs(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new E_;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(r,n,i){e.flushCustomStyles(),e.prepareTemplate(r,n)},prepareTemplateStyles(r,n,i){window.ShadyCSS.prepareTemplate(r,n,i)},prepareTemplateDom(r,n){},styleSubtree(r,n){e.flushCustomStyles(),e.styleSubtree(r,n)},styleElement(r){e.flushCustomStyles(),e.styleElement(r)},styleDocument(r){e.flushCustomStyles(),e.styleDocument(r)},getComputedStyleValue(r,n){return qu(r,n)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:wo,nativeShadow:ui,cssBuild:Cr,disableRuntime:Mu},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=sr;class ce{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,r){this._asyncModule=t,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,Pr.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Pr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,r,n){return t instanceof ce?t._cancelAsync():t=new ce,t.setConfig(r,n),t}}let Pr=new Set;const Gu=function(e){Pr.add(e)},C_=function(){const e=!!Pr.size;return Pr.forEach(t=>{try{t.flush()}catch(r){setTimeout(()=>{throw r})}}),e};let xo=typeof document.head.style.touchAction=="string",An="__polymerGestures",an="__polymerGesturesHandled",Ms="__polymerGesturesTouchAction",fl=25,ml=5,P_=2,T_=2500,Ju=["mousedown","mousemove","mouseup","click"],$_=[0,1,4,2],O_=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Ao(e){return Ju.indexOf(e)>-1}let So=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){So=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Wu(e){if(!(Ao(e)||e==="touchend")&&xo&&So&&jp)return{passive:!0}}let Yu=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Ds=[],R_={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},N_={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function I_(e){return R_[e.localName]||!1}function L_(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let r=e.getRootNode();if(e.id){let n=r.querySelectorAll(`label[for = '${e.id}']`);for(let i=0;i<n.length;i++)t.push(n[i])}}catch{}}return t}let _l=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[an]={skip:!0},e.type==="click")){let r=!1,n=di(e);for(let i=0;i<n.length;i++){if(n[i].nodeType===Node.ELEMENT_NODE){if(n[i].localName==="label")Ds.push(n[i]);else if(I_(n[i])){let s=L_(n[i]);for(let o=0;o<s.length;o++)r=r||Ds.indexOf(s[o])>-1}}if(n[i]===nt.mouse.target)return}if(r)return;e.preventDefault(),e.stopPropagation()}};function yl(e){let t=Yu?["click"]:Ju;for(let r=0,n;r<t.length;r++)n=t[r],e?(Ds.length=0,document.addEventListener(n,_l,!0)):document.removeEventListener(n,_l,!0)}function M_(e){if(!oo)return;nt.mouse.mouseIgnoreJob||yl(!0);let t=function(){yl(),nt.mouse.target=null,nt.mouse.mouseIgnoreJob=null};nt.mouse.target=di(e)[0],nt.mouse.mouseIgnoreJob=ce.debounce(nt.mouse.mouseIgnoreJob,lr.after(T_),t)}function oe(e){let t=e.type;if(!Ao(t))return!1;if(t==="mousemove"){let r=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!O_&&(r=$_[e.which]||0),!!(r&1)}else return(e.button===void 0?0:e.button)===0}function D_(e){if(e.type==="click"){if(e.detail===0)return!0;let t=qt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}let nt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function j_(e){let t="auto",r=di(e);for(let n=0,i;n<r.length;n++)if(i=r[n],i[Ms]){t=i[Ms];break}return t}function Qu(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Re(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}oo&&document.addEventListener("touchend",M_,So?{passive:!0}:!1);const di=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Rr={},ie=[];function k_(e,t){let r=document.elementFromPoint(e,t),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(e,t),i===n)break;n&&(r=n)}return r}function qt(e){const t=di(e);return t.length>0?t[0]:e.target}function Ku(e){let t,r=e.type,i=e.currentTarget[An];if(!i)return;let s=i[r];if(s){if(!e[an]&&(e[an]={},r.slice(0,5)==="touch")){e=e;let o=e.changedTouches[0];if(r==="touchstart"&&e.touches.length===1&&(nt.touch.id=o.identifier),nt.touch.id!==o.identifier)return;xo||(r==="touchstart"||r==="touchmove")&&B_(e)}if(t=e[an],!t.skip){for(let o=0,a;o<ie.length;o++)a=ie[o],s[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<ie.length;o++)a=ie[o],s[a.name]&&!t[a.name]&&(t[a.name]=!0,a[r](e))}}}function B_(e){let t=e.changedTouches[0],r=e.type;if(r==="touchstart")nt.touch.x=t.clientX,nt.touch.y=t.clientY,nt.touch.scrollDecided=!1;else if(r==="touchmove"){if(nt.touch.scrollDecided)return;nt.touch.scrollDecided=!0;let n=j_(e),i=!1,s=Math.abs(nt.touch.x-t.clientX),o=Math.abs(nt.touch.y-t.clientY);e.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=o>s:n==="pan-y"&&(i=s>o)),i?e.preventDefault():Sn("track")}}function F_(e,t,r){return Rr[t]?(U_(e,t,r),!0):!1}function z_(e,t,r){return Rr[t]?(H_(e,t,r),!0):!1}function U_(e,t,r){let n=Rr[t],i=n.deps,s=n.name,o=e[An];o||(e[An]=o={});for(let a=0,l,u;a<i.length;a++)l=i[a],!(Yu&&Ao(l)&&l!=="click")&&(u=o[l],u||(o[l]=u={_count:0}),u._count===0&&e.addEventListener(l,Ku,Wu(l)),u[s]=(u[s]||0)+1,u._count=(u._count||0)+1);e.addEventListener(t,r),n.touchAction&&Xu(e,n.touchAction)}function H_(e,t,r){let n=Rr[t],i=n.deps,s=n.name,o=e[An];if(o)for(let a=0,l,u;a<i.length;a++)l=i[a],u=o[l],u&&u[s]&&(u[s]=(u[s]||1)-1,u._count=(u._count||1)-1,u._count===0&&e.removeEventListener(l,Ku,Wu(l)));e.removeEventListener(t,r)}function Eo(e){ie.push(e);for(let t=0;t<e.emits.length;t++)Rr[e.emits[t]]=e}function q_(e){for(let t=0,r;t<ie.length;t++){r=ie[t];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===e)return r}return null}function Xu(e,t){xo&&e instanceof HTMLElement&&Ut.run(()=>{e.style.touchAction=t}),e[Ms]=t}function Co(e,t,r){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,N(e).dispatchEvent(n),n.defaultPrevented){let i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function Sn(e){let t=q_(e);t.info&&(t.info.prevent=!0)}Eo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Re(this.info)},mousedown:function(e){if(!oe(e))return;let t=qt(e),r=this,n=function(o){oe(o)||(tr("up",t,o),Re(r.info))},i=function(o){oe(o)&&tr("up",t,o),Re(r.info)};Qu(this.info,n,i),tr("down",t,e)},touchstart:function(e){tr("down",qt(e),e.changedTouches[0],e)},touchend:function(e){tr("up",qt(e),e.changedTouches[0],e)}});function tr(e,t,r,n){t&&Co(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(i){return Sn(i)}})}Eo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>P_&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Re(this.info)},mousedown:function(e){if(!oe(e))return;let t=qt(e),r=this,n=function(o){let a=o.clientX,l=o.clientY;gl(r.info,a,l)&&(r.info.state=r.info.started?o.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&Sn("tap"),r.info.addMove({x:a,y:l}),oe(o)||(r.info.state="end",Re(r.info)),t&&Li(r.info,t,o),r.info.started=!0)},i=function(o){r.info.started&&n(o),Re(r.info)};Qu(this.info,n,i),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=qt(e),r=e.changedTouches[0],n=r.clientX,i=r.clientY;gl(this.info,n,i)&&(this.info.state==="start"&&Sn("tap"),this.info.addMove({x:n,y:i}),Li(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=qt(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Li(this.info,t,r))}});function gl(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),i=Math.abs(e.y-r);return n>=ml||i>=ml}function Li(e,t,r){if(!t)return;let n=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],s=i.x-e.x,o=i.y-e.y,a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),Co(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover:function(){return k_(r.clientX,r.clientY)}})}Eo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){oe(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){oe(e)&&bl(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){bl(this.info,e.changedTouches[0],e)}});function bl(e,t,r){let n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),s=qt(r||t);!s||N_[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=fl&&i<=fl||D_(t))&&(e.prevent||Co(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}const Zu=et(e=>{class t extends e{_addEventListenerToNode(n,i,s){F_(n,i,s)||super._addEventListenerToNode(n,i,s)}_removeEventListenerFromNode(n,i,s){z_(n,i,s)||super._removeEventListenerFromNode(n,i,s)}}return t});const V_=/:host\(:dir\((ltr|rtl)\)\)/g,G_=':host([dir="$1"])',J_=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,W_=':host([dir="$2"]) $1',Y_=/:dir\((?:ltr|rtl)\)/,vl=!!(window.ShadyDOM&&window.ShadyDOM.inUse),hr=[];let pr=null,Po="";function td(){Po=document.documentElement.getAttribute("dir")}function ed(e){e.__autoDirOptOut||e.setAttribute("dir",Po)}function rd(){td(),Po=document.documentElement.getAttribute("dir");for(let e=0;e<hr.length;e++)ed(hr[e])}function Q_(){pr&&pr.takeRecords().length&&rd()}const K_=et(e=>{vl||pr||(td(),pr=new MutationObserver(rd),pr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=ou(e);class r extends t{static _processStyleText(i,s){return i=t._processStyleText.call(this,i,s),!vl&&Y_.test(i)&&(i=this._replaceDirInCssText(i),this.__activateDir=!0),i}static _replaceDirInCssText(i){let s=i;return s=s.replace(V_,G_),s=s.replace(J_,W_),s}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Q_(),hr.push(this),ed(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const i=hr.indexOf(this);i>-1&&hr.splice(i,1)}}}return r.__activateDir=!1,r});function wl(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?wl():window.addEventListener("DOMContentLoaded",wl);const nd=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=C_();while(e||t)};const be=Element.prototype,X_=be.matches||be.matchesSelector||be.mozMatchesSelector||be.msMatchesSelector||be.oMatchesSelector||be.webkitMatchesSelector,id=function(e,t){return X_.call(e,t)};class H{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Nt(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(N(this.node).contains(t))return!0;let r=t,n=t.ownerDocument;for(;r&&r!==n&&r!==this.node;)r=N(r).parentNode||N(r).host;return r===this.node}getOwnerRoot(){return N(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?N(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],r=N(this.node).assignedSlot;for(;r;)t.push(r),r=N(r).assignedSlot;return t}importNode(t,r){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return N(n).importNode(t,r)}getEffectiveChildNodes(){return Nt.getFlattenedNodes(this.node)}queryDistributedElements(t){let r=this.getEffectiveChildNodes(),n=[];for(let i=0,s=r.length,o;i<s&&(o=r[i]);i++)o.nodeType===Node.ELEMENT_NODE&&id(o,t)&&n.push(o);return n}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function Z_(e,t){for(let r=0;r<t.length;r++){let n=t[r];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}function xl(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}function ty(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(i){this.node[n]=i},configurable:!0})}}class js{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}H.prototype.cloneNode;H.prototype.appendChild;H.prototype.insertBefore;H.prototype.removeChild;H.prototype.replaceChild;H.prototype.setAttribute;H.prototype.removeAttribute;H.prototype.querySelector;H.prototype.querySelectorAll;H.prototype.parentNode;H.prototype.firstChild;H.prototype.lastChild;H.prototype.nextSibling;H.prototype.previousSibling;H.prototype.firstElementChild;H.prototype.lastElementChild;H.prototype.nextElementSibling;H.prototype.previousElementSibling;H.prototype.childNodes;H.prototype.children;H.prototype.classList;H.prototype.textContent;H.prototype.innerHTML;let ks=H;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(H.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=H.prototype[t])}),xl(e.prototype,["classList"]),ks=e,Object.defineProperties(js.prototype,{localTarget:{get(){const t=this.event.currentTarget,r=t&&xt(t).getOwnerRoot(),n=this.path;for(let i=0;i<n.length;i++){const s=n[i];if(xt(s).getOwnerRoot()===r)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Z_(H.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),xl(H.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),ty(H.prototype,["textContent","innerHTML","className"]);const xt=function(e){if(e=e||document,e instanceof ks||e instanceof js)return e;let t=e.__domApi;return t||(e instanceof Event?t=new js(e):t=new ks(e),e.__domApi=t),t};const Mi=window.ShadyDOM,Al=window.ShadyCSS;function Sl(e,t){return N(e).getRootNode()===t}function ey(e,t=!1){if(!Mi||!Al||!Mi.handlesDynamicScoping)return null;const r=Al.ScopingShim;if(!r)return null;const n=r.scopeForNode(e),i=N(e).getRootNode(),s=o=>{if(!Sl(o,i))return;const a=Array.from(Mi.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const u=a[l];if(!Sl(u,i))continue;const h=r.currentScopeForNode(u);h!==n&&(h!==""&&r.unscopeNode(u,h),r.scopeNode(u,n))}};if(s(e),t){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const u=a[l];for(let h=0;h<u.addedNodes.length;h++){const m=u.addedNodes[h];m.nodeType===Node.ELEMENT_NODE&&s(m)}}});return o.observe(e,{childList:!0,subtree:!0}),o}else return null}const Di="disable-upgrade",sd=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};et(e=>{const t=ci(e);let r=sd(t);class n extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat(Di)}_initializeProperties(){this.hasAttribute(Di)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}attributeChangedCallback(s,o,a,l){s==Di?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,N(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(s,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});const Jr="disable-upgrade";let ry=window.ShadyCSS;const od=et(e=>{const t=Zu(ci(e)),r=ws?t:K_(t),n=sd(r),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,u){(this.__dataAttributes&&this.__dataAttributes[a]||a===Jr)&&this.attributeChangedCallback(a,l,u,null)}setAttribute(a,l){if(Ur&&!this._legacyForceObservedAttributes){const u=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,u,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(Ur&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return Ur&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(Jr)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,u,h){l!==u&&(a==Jr?this.__isUpgradeDisabled&&u==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,N(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,u,h),this.attributeChanged(a,l,u)))}attributeChanged(a,l,u){}_initializeProperties(){if(vr&&this.hasAttribute(Jr))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ur&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,u){this._propertyToAttribute(a,l,u)}serializeValueToAttribute(a,l,u){this._valueToNodeAttribute(u||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let u=Object.getOwnPropertyNames(l);for(let h=0,m;h<u.length&&(m=u[h]);h++){let y=Object.getOwnPropertyDescriptor(l,m);y&&Object.defineProperty(a,m,y)}return a}mixin(a,l){for(let u in l)a[u]=l[u];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,u){u=u||{},l=l??{};let h=new Event(a,{bubbles:u.bubbles===void 0?!0:u.bubbles,cancelable:!!u.cancelable,composed:u.composed===void 0?!0:u.composed});h.detail=l;let m=u.node||this;return N(m).dispatchEvent(h),h}listen(a,l,u){a=a||this;let h=this.__boundListeners||(this.__boundListeners=new WeakMap),m=h.get(a);m||(m={},h.set(a,m));let y=l+u;m[y]||(m[y]=this._addMethodEventListenerToNode(a,l,u,this))}unlisten(a,l,u){a=a||this;let h=this.__boundListeners&&this.__boundListeners.get(a),m=l+u,y=h&&h[m];y&&(this._removeEventListenerFromNode(a,l,y),h[m]=null)}setScrollDirection(a,l){Xu(l||this,i[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=N(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=xt(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return xt(this).getEffectiveChildNodes()}queryDistributedElements(a){return xt(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let u=0,h;h=a[u];u++)h.nodeType!==Node.COMMENT_NODE&&l.push(h.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?xt(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(u){return u.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&N(l).contains(a)&&N(l).getRootNode()===N(a).getRootNode()}isLocalDescendant(a){return this.root===N(a).getRootNode()}scopeSubtree(a,l=!1){return ey(a,l)}getComputedStyleValue(a){return ry.getComputedStyleValue(this,a)}debounce(a,l,u){return this._debouncers=this._debouncers||{},this._debouncers[a]=ce.debounce(this._debouncers[a],u>0?lr.after(u):Ut,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?lr.run(a.bind(this),l):~Ut.run(a.bind(this))}cancelAsync(a){a<0?Ut.cancel(~a):lr.cancel(a)}create(a,l){let u=document.createElement(a);if(l)if(u.setProperties)u.setProperties(l);else for(let h in l)u[h]=l[h];return u}elementMatches(a,l){return id(l||this,a)}toggleAttribute(a,l){let u=this;return arguments.length===3&&(u=arguments[2]),arguments.length==1&&(l=!u.hasAttribute(a)),l?(N(u).setAttribute(a,""),!0):(N(u).removeAttribute(a),!1)}toggleClass(a,l,u){u=u||this,arguments.length==1&&(l=!u.classList.contains(a)),l?u.classList.add(a):u.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,u,h){h=h||this,this.transform("translate3d("+a+","+l+","+u+")",h)}arrayDelete(a,l){let u;if(Array.isArray(a)){if(u=a.indexOf(l),u>=0)return a.splice(u,1)}else if(u=ot(this,a).indexOf(l),u>=0)return this.splice(a,u,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return s.prototype.is="",s});const ny={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ad={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},iy=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ad);function sy(e,t,r){const n=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let s=0;s<i.length;s++){let o=i[s];if(!(o in r))if(n)t[o]=e[o];else{let a=Object.getOwnPropertyDescriptor(e,o);a&&(a.configurable=!0,Object.defineProperty(t,o,a))}}}function oy(e,t,r){for(let n=0;n<t.length;n++)ld(e,t[n],r,iy)}function ld(e,t,r,n){sy(t,e,n);for(let i in ny)t[i]&&(r[i]=r[i]||[],r[i].push(t[i]))}function cd(e,t,r){t=t||[];for(let n=e.length-1;n>=0;n--){let i=e[n];i?Array.isArray(i)?cd(i,t):t.indexOf(i)<0&&(!r||r.indexOf(i)<0)&&t.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return t}function El(e,t){for(const r in t){const n=e[r],i=t[r];!("value"in i)&&n&&"value"in n?e[r]=Object.assign({value:n.value},i):e[r]=i}}const Cl=od(HTMLElement);function ay(e,t,r){let n;const i={};class s extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(n)for(let l=0,u;l<n.length;l++)u=n[l],u.properties&&this.createProperties(u.properties),u.observers&&this.createObservers(u.observers,u.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let u=0;u<n.length;u++)El(l,n[u].properties);return El(l,e.properties),l}static get observers(){let l=[];if(n)for(let u=0,h;u<n.length;u++)h=n[u],h.observers&&(l=l.concat(h.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=i.created;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}_registered(){const l=s.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),vr&&o(l);const u=Object.getPrototypeOf(this);let h=i.beforeRegister;if(h)for(let m=0;m<h.length;m++)h[m].call(u);if(h=i.registered,h)for(let m=0;m<h.length;m++)h[m].call(u)}}_applyListeners(){super._applyListeners();const l=i.listeners;if(l)for(let u=0;u<l.length;u++){const h=l[u];if(h)for(let m in h)this._addMethodEventListenerToNode(this,m,h[m])}}_ensureAttributes(){const l=i.hostAttributes;if(l)for(let u=l.length-1;u>=0;u--){const h=l[u];for(let m in h)this._ensureAttribute(m,h[m])}super._ensureAttributes()}ready(){super.ready();let l=i.ready;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}attached(){super.attached();let l=i.attached;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}detached(){super.detached();let l=i.detached;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}attributeChanged(l,u,h){super.attributeChanged();let m=i.attributeChanged;if(m)for(let y=0;y<m.length;y++)m[y].call(this,l,u,h)}}if(r){Array.isArray(r)||(r=[r]);let a=t.prototype.behaviors;n=cd(r,null,a),s.prototype.behaviors=a?a.concat(r):n}const o=a=>{n&&oy(a,n,i),ld(a,e,i,ad)};return vr||o(s.prototype),s.generatedFrom=e,s}const ly=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let r=t?t(Cl):Cl;return r=ay(e,r,e.behaviors),r.is=r.prototype.is=e.is,r};const hi=function(e){let t;return typeof e=="function"?t=e:t=hi.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};hi.Class=ly;function To(e,t,r,n,i){let s;i&&(s=typeof r=="object"&&r!==null,s&&(n=e.__dataTemp[t]));let o=n!==r&&(n===n||r===r);return s&&o&&(e.__dataTemp[t]=r),o}const $o=et(e=>{class t extends e{_shouldPropertyChange(n,i,s){return To(this,n,i,s,!0)}}return t}),ud=et(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,i,s){return To(this,n,i,s,this.mutableData)}}return t});$o._mutablePropertyChange=To;let Bs=null;function Fs(){return Bs}Fs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Fs,writable:!0}});const dd=li(Fs),cy=$o(dd);function uy(e,t){Bs=e,Object.setPrototypeOf(e,t.prototype),new t,Bs=null}const dy=li(class{});function hd(e,t){for(let r=0;r<t.length;r++){let n=t[r];if(!!e!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),N(N(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const i=n.__polymerReplaced__;i&&N(N(i).parentNode).replaceChild(n,i)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class Yt extends dy{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let r=[];this.children=r;for(let i=this.root.firstChild;i;i=i.nextSibling)r.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,r){this._setPendingPropertyOrPath(t,r,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,r,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,r,i=>{i.model=this,n(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,r,n)}}_showHideChildren(t){hd(t,this.children)}_setUnmanagedPropertyToNode(t,r,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&r=="textContent"?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,r,n)}get parentModel(){let t=this.__parentModel;if(!t){let r;t=this;do t=t.__dataHost.__dataHost;while((r=t.__templatizeOptions)&&!r.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Yt.prototype.__dataHost;Yt.prototype.__templatizeOptions;Yt.prototype._methodHost;Yt.prototype.__templatizeOwner;Yt.prototype.__hostProps;const hy=$o(Yt);function Pl(e){let t=e.__dataHost;return t&&t._methodHost||t}function py(e,t,r){let n=r.mutableData?hy:Yt;En.mixin&&(n=En.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=r,i.prototype._bindTemplate(e),_y(i,e,t,r),i}function fy(e,t,r,n){let i=r.forwardHostProp;if(i&&t.hasHostProps){const s=e.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(s){let l=r.mutableData?cy:dd;class u extends l{}o=t.templatizeTemplateClass=u}else{const l=e.constructor;class u extends l{}o=t.templatizeTemplateClass=u}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:my(l,i)}),o.prototype._createNotifyingProperty("_host_"+l);Zc&&n&&by(t,r,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)uy(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in e){const u=e[l];delete e[l],e.__data[l]=u}}}}function my(e,t){return function(n,i,s){t.call(n.__templatizeOwner,i.substring(6),s[i])}}function _y(e,t,r,n){let i=r.hostProps||{};for(let s in n.instanceProps){delete i[s];let o=n.notifyInstanceProp;o&&e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:yy(s,o)})}if(n.forwardHostProp&&t.__dataHost)for(let s in i)r.hasHostProps||(r.hasHostProps=!0),e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:gy()})}function yy(e,t){return function(n,i,s){t.call(n.__templatizeOwner,n,i,s[i])}}function gy(){return function(t,r,n){t.__dataHost._setPendingPropertyOrPath("_host_"+r,n[r],!0,!0)}}function En(e,t,r){if(je&&!Pl(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:Yt)._parseTemplate(e),s=i.templatizeInstanceClass;s||(s=py(e,i,r),i.templatizeInstanceClass=s);const o=Pl(e);fy(e,i,r,o);let a=class extends s{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a,a}function by(e,t,r){const n=r.constructor._properties,{propertyEffects:i}=e,{instanceProps:s}=t;for(let o in i)if(!n[o]&&!(s&&s[o])){const a=i[o];for(let l=0;l<a.length;l++){const{part:u}=a[l].info;if(!(u.signature&&u.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function vy(e,t){let r;for(;t;)if(r=t.__dataHost?t:t.__templatizeInstance)if(r.__dataHost!=e)t=r.__dataHost;else return r;else t=N(t).parentNode;return null}let Tl=!1;function Oo(){if(vr&&!so){if(!Tl){Tl=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const wy=Zu(ud(li(HTMLElement)));class xy extends wy{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),je)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,r,n,i){this.mutableData=!0}connectedCallback(){Oo()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){N(N(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let r=new MutationObserver(()=>{if(t=this.querySelector("template"),t)r.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});r.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let r=this.root.firstChild;r;r=r.nextSibling)this.__children[this.__children.length]=r;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",xy);const Ay=ud(Dt);class $l extends Ay{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!gs,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Oo()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=N(N(this).parentNode);for(let r=0;r<this.__instances.length;r++)this.__attachInstance(r,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let r=this.template=t._templateInfo?t:this.querySelector("template");if(!r){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=En(r,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(i,s){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(i,s)},notifyInstanceProp:function(i,s,o){if(tf(this.as,s)){let a=i[this.itemsIndexAs];s==this.as&&(this.items[a]=o);let l=Ar(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,s);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let r=t,n=this.__getMethodHost();return function(){return n[r].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let r=this.__observePaths;for(let n=0;n<r.length;n++)t.indexOf(r[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,r=0){this.__renderDebouncer=ce.debounce(this.__renderDebouncer,r>0?lr.after(r):Ut,t.bind(this)),Gu(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),nd()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const r=this.__sortAndFilterItems(t),n=this.__calculateLimit(r.length);this.__updateInstances(t,n,r),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!gs||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=n;return this.__filterFn&&(r=r.filter((n,i,s)=>this.__filterFn(t[n],i,s))),this.__sortFn&&r.sort((n,i)=>this.__sortFn(t[n],t[i])),r}__calculateLimit(t){let r=t;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(r=Math.min(t,this.initialCount),i=Math.max(r-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(t-n,0),this.__chunkCount),r=Math.min(n+i,t)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=r<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,r}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,r=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*r)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,r,n){const i=this.__itemsIdxToInstIdx={};let s;for(s=0;s<r;s++){let o=this.__instances[s],a=n[s],l=t[a];i[a]=s,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,s),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,s,a)}for(let o=this.__instances.length-1;o>=s;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let r=this.__instances[t];const n=N(r.root);for(let i=0;i<r.children.length;i++){let s=r.children[i];n.appendChild(s)}return r}__attachInstance(t,r){let n=this.__instances[t];r.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,r,n){let i={};return i[this.as]=t,i[this.indexAs]=r,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(t,r,n){const i=this.__stampInstance(t,r,n);let s=this.__instances[r+1],o=s?s.children[0]:this;return N(N(this).parentNode).insertBefore(i.root,o),this.__instances[r]=i,i}_showHideChildren(t){for(let r=0;r<this.__instances.length;r++)this.__instances[r]._showHideChildren(t)}__handleItemPath(t,r){let n=t.slice(6),i=n.indexOf("."),s=i<0?n:n.substring(0,i);if(s==parseInt(s,10)){let o=i<0?"":n.substring(i+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[s],l=this.__instances[a];if(l){let u=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(u,r,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let r=this.modelForElement(t);return r&&r[this.as]}indexForElement(t){let r=this.modelForElement(t);return r&&r[this.indexAs]}modelForElement(t){return vy(this.template,t)}}customElements.define($l.is,$l);class pd extends Dt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ce.debounce(this.__renderDebouncer,Ut,()=>this.__render()),Gu(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=N(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!N(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Oo()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let r=t._templateInfo?t:N(t).querySelector("template");if(!r){let n=new MutationObserver(()=>{if(N(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=r}return!0}__ensureInstance(){let t=N(this).parentNode;if(this.__hasInstance()){let r=this.__getInstanceNodes();if(r&&r.length&&N(this).previousSibling!==r[r.length-1])for(let i=0,s;i<r.length&&(s=r[i]);i++)N(t).insertBefore(s,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){nd()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!gs||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class Sy extends pd{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const r=this.__dataHost||this;if(je&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=r._bindTemplate(this.__template,!0);n.runEffects=(i,s,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(a.changedProps,s)),i(s,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:i,changedProps:{}}),o)for(const l in s){const u=Mt(l);a.changedProps[u]=this.__dataHost[u]}else Object.assign(a.changedProps,s)},this.__instance=r._stampTemplate(this.__template,n),N(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,hd(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class Ey extends pd{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=En(this.__template,this,{mutableData:!0,forwardHostProp:function(r,n){this.__instance&&(this.if?this.__instance.forwardHostProp(r,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Mt(r)]=!0))}})),this.__instance=new this.__ctor,N(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let r=N(t[0]).parentNode;if(r){r=N(r);for(let n=0,i;n<t.length&&(i=t[n]);n++)r.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let r in t)this.__instance._setPendingProperty(r,this.__dataHost[r]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const Ol=tu?Sy:Ey;customElements.define(Ol.is,Ol);let Cy=et(e=>{let t=ci(e);class r extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(i,s){let o=s.path;if(o==JSCompiler_renameProperty("items",this)){let a=s.base||[],l=this.__lastItems,u=this.__lastMulti;if(i!==u&&this.clearSelection(),l){let h=Vc(a,l);this.__applySplices(h)}this.__lastItems=a,this.__lastMulti=i}else if(s.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(s.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(i){let s=this.__selectedMap;for(let a=0;a<i.length;a++){let l=i[a];s.forEach((u,h)=>{u<l.index||(u>=l.index+l.removed.length?s.set(h,u+l.addedCount-l.removed.length):s.set(h,-1))});for(let u=0;u<l.addedCount;u++){let h=l.index+u;s.has(this.items[h])&&s.set(this.items[h],h)}}this.__updateLinks();let o=0;s.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,s.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let i=0;this.__selectedMap.forEach(s=>{s>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${s}`,`${JSCompiler_renameProperty("selected",this)}.${i++}`)})}else this.__selectedMap.forEach(i=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${i}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${i}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(i){return this.__selectedMap.has(i)}isIndexSelected(i){return this.isSelected(this.items[i])}__deselectChangedIdx(i){let s=this.__selectedIndexForItemIndex(i);if(s>=0){let o=0;this.__selectedMap.forEach((a,l)=>{s==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(i){let s=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${i}`];if(s)return parseInt(s.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(i){let s=this.__selectedMap.get(i);if(s>=0){this.__selectedMap.delete(i);let o;this.multi&&(o=this.__selectedIndexForItemIndex(s)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(i){this.deselect(this.items[i])}select(i){this.selectIndex(this.items.indexOf(i))}selectIndex(i){let s=this.items[i];this.isSelected(s)?this.toggle&&this.deselectIndex(i):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(s,i),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),s):this.selected=this.selectedItem=s)}}return r}),Py=Cy(Dt);class Rl extends Py{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Rl.is,Rl);const ln=new Vt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){ln.processStyles(),Ns(e,t)},styleElement(e){ln.processStyles()},styleDocument(e){ln.processStyles(),Ns(document.body,e)},getComputedStyleValue(e,t){return qu(e,t)},flushCustomStyles(){},nativeCss:wo,nativeShadow:ui,cssBuild:Cr,disableRuntime:Mu});window.ShadyCSS.CustomStyleInterface=ln;const Nl="include",Ty=window.ShadyCSS.CustomStyleInterface;class $y extends HTMLElement{constructor(){super(),this._style=null,Ty.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const r=t.getAttribute(Nl);return r&&(t.removeAttribute(Nl),t.textContent=Qp(r)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",$y);const cS=od(HTMLElement).prototype;var Wr=new Set;const Oy={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Wr.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&e._interestedResizables.indexOf(this)===-1&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){if(this._notifyingDescendant){e.stopPropagation();return}so||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=xt(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(Wr.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Wr.delete(this):Wr.add(this)}};class Ry{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach(function(r){(!t||t.indexOf(r)<0)&&this.setItemSelected(r,!1)},this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,r){if(t!=null&&r!==this.isSelected(t)){if(r)this.selection.push(t);else{var n=this.selection.indexOf(t);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(t,r)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}const Ny={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new Ry(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&xt(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;this.selected!==void 0&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;this.selected!==void 0&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&typeof this._observer.flush=="function"?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=xt(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&this._selection.get()===void 0&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return e==null?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(this.attrForSelected){for(var t=0,r;r=this.items[t];t++)if(this._valueForItem(r)==e)return t}else return Number(e)},_indexToValue:function(e){if(this.attrForSelected){var t=this.items[e];if(t)return this._valueForItem(t)}else return e},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return t===-1?null:t}var r=e[ho(this.attrForSelected)];return r??e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return xt(e).observeNodes(function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){for(var t=e.target,r=this.items;t&&t!=this;){var n=r.indexOf(t);if(n>=0){var i=this._indexToValue(n);this._itemActivate(i,t);return}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};hi({_template:he`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[Oy,Ny],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(e,t){this.async(this.notifyResize)}});hi({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(!this.full&&e[0]!=="("&&(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});const Iy=lt`
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
`;Lt("vaadin-vertical-layout",Iy,{moduleId:"lumo-vertical-layout"});class Il extends He(Ue(Dt)){static get template(){return he`
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
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(Il.is,Il);Lt("vaadin-split-layout",lt`
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
  `,{moduleId:"lumo-split-layout"});class Cn extends He(Ue(Dt)){static get template(){return he`
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
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new Nt(this,r=>{this._cleanupNodes(r.removedNodes),this._processChildren()});const t=this.$.splitter;ur(t,"track",this._onHandleTrack.bind(this)),ur(t,"down",this._setPointerEventsNone.bind(this)),ur(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(r=>{r.parentElement instanceof Cn||r.removeAttribute("slot")})}_processChildren(){const t=[...this.children];t.filter(r=>r.hasAttribute("slot")).forEach(r=>this._processChildWithSlot(r)),t.filter(r=>!r.hasAttribute("slot")).forEach((r,n)=>this._processChildWithoutSlot(r,n))}_processChildWithSlot(t){const r=t.getAttribute("slot");t.__autoSlotted?(this[`_${r}Child`]=null,t.removeAttribute("slot")):this[`_${r}Child`]=t}_processChildWithoutSlot(t,r){let n;this._primaryChild||this._secondaryChild?n=this._primaryChild?"secondary":"primary":n=r===0?"primary":"secondary",this[`_${n}Child`]=t,t.setAttribute("slot",n),t.__autoSlotted=!0}_setFlexBasis(t,r,n){r=Math.max(0,Math.min(r,n)),r===0&&(r=1e-6),t.style.flex=`1 1 ${r}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const r=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[r]-this.$.splitter.getBoundingClientRect()[r],primary:this._primaryChild.getBoundingClientRect()[r],secondary:this._secondaryChild.getBoundingClientRect()[r]};return}const n=this.orientation==="vertical"?t.detail.dy:t.detail.dx,s=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-n:n;this._setFlexBasis(this._primaryChild,this._startSize.primary+s,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-s,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Cn.is,Cn);var ji,Ll;function Ly(){if(Ll)return ji;Ll=1;async function e(t,r=fetch){const n=await r("https://s.zazuko.com/api/v1/shorten/",{method:"POST",body:new URLSearchParams({url:t})});if(!n.ok)throw new Error(await n.text());return n.text()}return ji={shorten:e},ji}var My=Ly();const Dy=`@prefix sh: <http://www.w3.org/ns/shacl#> .
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
`;function jy(e,t){return{...e,format:t}}function ky(e,{quads:t,serialized:r}){return{...e,quads:t,graph:r}}function By(e,t){return{...e,graph:t}}function Fy(e,t){return{...e,prefixes:[...new Set([...e.prefixes,t])]}}function zy(e,t){return{...e,prefixes:e.prefixes.filter(r=>r!==t)}}function Uy(e,{prefix:t,namespace:r}){if(typeof t!="string"||typeof r!="string")return e;const n={...e.customPrefixes};return r?n[t]=r:delete n[t],{...e,customPrefixes:n}}function Hy(e,t){return{...e,customPrefixes:t}}const fd=Object.freeze(Object.defineProperty({__proto__:null,addPrefix:Fy,changeFormat:jy,parsed:ky,removePrefix:zy,replaceCustomPrefixes:Hy,setCustomPrefix:Uy,setGraph:By},Symbol.toStringTag,{value:"Module"})),qy=ii({state:{format:"text/turtle",graph:Dy,prefixes:["sh","schema"],customPrefixes:{}},reducers:{...fd}}),Vy=`{
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
`,Gy=ii({state:{format:"application/ld+json",graph:Vy,prefixes:[],customPrefixes:{}},reducers:{...fd}});let Ro=class md{constructor(t,{bind:r=!1}={}){this._factories=t.slice();for(const n of this._factories){typeof n.prototype.init=="function"&&n.prototype.init.call(this);for(const i of n.exports||[])r?this[i]=n.prototype[i].bind(this):this[i]=n.prototype[i]}}clone(){const t=new md(this._factories);for(const r of t._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(t,this);return t}};function Ml({parent:e,child:t}){return new Proxy({},{get(n,i){return t[i]||e[i]},set(n,i,s){return t[i]=s,!0},has(n,i){return i in t||i in e},ownKeys(){const n=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);return[...new Set([...n,...i]).values()]},getOwnPropertyDescriptor(n,i){return{enumerable:!i.toString().startsWith("_"),configurable:!0}}})}class ue{constructor(t,{parent:r,bind:n=!1}={}){if(this._parent=r,t instanceof Ro||t instanceof ue)return Ml({parent:r,child:t});this._factories=t.slice();const i=r?Ml({parent:r,child:this}):this;for(const s of this._factories){typeof s.prototype.init=="function"&&s.prototype.init.call(i);for(const o of s.exports||[])n?this[o]=s.prototype[o].bind(i):this[o]=s.prototype[o]}return i}clone(){const t=new ue(this._factories,this._parent);for(const r of t._factories)typeof r.prototype.clone=="function"&&r.prototype.clone.call(t,this);return t}}const Jy=(e,t,r,n)=>{if(r==="length"||r==="prototype"||r==="arguments"||r==="caller")return;const i=Object.getOwnPropertyDescriptor(e,r),s=Object.getOwnPropertyDescriptor(t,r);!Wy(i,s)&&n||Object.defineProperty(e,r,s)},Wy=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},Yy=(e,t)=>{const r=Object.getPrototypeOf(t);r!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,r)},Qy=(e,t)=>`/* Wrapped ${e}*/
${t}`,Ky=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Xy=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Zy=(e,t,r)=>{const n=r===""?"":`with ${r.trim()}() `,i=Qy.bind(null,n,t.toString());Object.defineProperty(i,"name",Xy);const{writable:s,enumerable:o,configurable:a}=Ky;Object.defineProperty(e,"toString",{value:i,writable:s,enumerable:o,configurable:a})};function tg(e,t,{ignoreNonConfigurable:r=!1}={}){const{name:n}=e;for(const i of Reflect.ownKeys(t))Jy(e,t,i,r);return Yy(e,t),Zy(e,t,n),e}const Pn=new WeakMap,_d=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0;const i=e.displayName||e.name||"<anonymous>",s=function(...o){if(Pn.set(s,++n),n===1)r=e.apply(this,o),e=void 0;else if(t.throw===!0)throw new Error(`Function \`${i}\` can only be called once`);return r};return tg(s,e),Pn.set(s,n),s};_d.callCount=e=>{if(!Pn.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return Pn.get(e)};function zs(e){return function(t,r,n){return Array.isArray(t)?!0:n.findIndex(s=>Array.isArray(s)?!0:e(t,s))===r}}function yd(e,t){return e&&e.equals(t)}function gd(e){return(t,r)=>{if(!t||!r)return!1;const n=t.id.equals(r.id);return e?n&&t._graphId.equals(r._graphId):n}}function ki(e,t){return typeof e=="string"?t.namedNode(e):"termType"in e?e:e.id}class eg{add(t){return this.__resource.pointer.addOut(this.__resource.env.ns.rdf.type,ki(t,this.__resource.env)),this}clear(){this.__graph.deleteOut(this.__resource.env.ns.rdf.type)}delete(t){const r=this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,ki(t,this.__resource.env));for(const n of r)this.__graph.dataset.delete(n);return r.size>0}forEach(t,r){for(const n of this.values())t.call(r,n,n,this)}has(t){return this.__graph.has(this.__resource.env.ns.rdf.type,ki(t,this.__resource.env)).terms.length>0}get size(){return this.__graph.out(this.__resource.env.ns.rdf.type).terms.filter(zs(yd)).length}[Symbol.iterator](){return this.values()}entries(){return this.__values.map(t=>[t,t])[Symbol.iterator]()}keys(){return this.values()}values(){return this.__values[Symbol.iterator]()}get[Symbol.toStringTag](){return this.__values.toString()}constructor(t,r=!1){this.__resource=t,this.__allGraphs=r,this.__graph=r?t.env.clownface({dataset:t.pointer.dataset,term:t.pointer.term,graph:void 0}):t.pointer}get __values(){const t=this.__allGraphs?null:this.__resource._graphId;return[...this.__graph.dataset.match(this.__resource.id,this.__resource.env.ns.rdf.type,null,t)].map(i=>this.__resource.env.clownface({dataset:this.__graph.dataset,term:i.object,graph:i.graph})).map(i=>this.__resource._create(i)).filter(zs(gd(!1)))}}class bd{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}bd.prototype.termType="BlankNode";class No{equals(t){return!!t&&t.termType===this.termType}}No.prototype.termType="DefaultGraph";No.prototype.value="";function Dl(e,t){if(!t)return null;if(t.termType==="BlankNode")return e.blankNode(t.value);if(t.termType==="DefaultGraph")return e.defaultGraph();if(t.termType==="Literal")return e.literal(t.value,t.language||e.namedNode(t.datatype.value));if(t.termType==="NamedNode")return e.namedNode(t.value);if(t.termType==="Quad"){const r=e.fromTerm(t.subject),n=e.fromTerm(t.predicate),i=e.fromTerm(t.object),s=e.fromTerm(t.graph);return e.quad(r,n,i,s)}if(t.termType==="Variable")return e.variable(t.value);throw new Error(`unknown termType ${t.termType}`)}class cn{constructor(t,r,n,i=""){this.value=t,this.language=r,this.datatype=n,this.direction=i}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)&&(t.direction||"")===this.direction}}cn.prototype.termType="Literal";class Nr{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}Nr.prototype.termType="NamedNode";class Io{constructor(t,r,n,i){this.subject=t,this.predicate=r,this.object=n,this.graph=i}equals(t){return!!t&&(t.termType==="Quad"||!t.termType)&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)}}Io.prototype.termType="Quad";Io.prototype.value="";class vd{constructor(t){this.value=t}equals(t){return!!t&&t.termType===this.termType&&t.value===this.value}}vd.prototype.termType="Variable";const rg=new Nr("http://www.w3.org/1999/02/22-rdf-syntax-ns#dirLangString"),jl=new Nr("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),ng=new Nr("http://www.w3.org/2001/XMLSchema#string");class Ir{constructor(){this.init()}init(){this._data={blankNodeCounter:0,defaultGraph:new No}}namedNode(t){return new Nr(t)}blankNode(t){return t=t||"b"+ ++this._data.blankNodeCounter,new bd(t)}literal(t,r){return typeof r=="string"?new cn(t,r,jl):typeof r?.language=="string"?new cn(t,r.language,r.direction?rg:jl,r.direction):new cn(t,"",r||ng)}variable(t){return new vd(t)}defaultGraph(){return this._data.defaultGraph}quad(t,r,n,i=this.defaultGraph()){return new Io(t,r,n,i)}fromTerm(t){return Dl(this,t)}fromQuad(t){return Dl(this,t)}}Ir.exports=["blankNode","defaultGraph","fromQuad","fromTerm","literal","namedNode","quad","variable"];const Bt=new Ir,ig={apply:(e,t,r)=>e(r[0]),get:(e,t)=>e(t)};function A(e,{factory:t=Bt}={}){const r=(n="")=>t.namedNode(`${e}${n.raw||n}`);return typeof Proxy>"u"?r:new Proxy(r,ig)}const Us=A("http://www.w3.org/1999/02/22-rdf-syntax-ns#");function wd(e){return Us.nil.equals(e.term)}function Tr(e){const t=wd(e),r=e.out([Us.first,Us.rest]).values.length===2;return t||r}function Lo(e,t,r){const n=[];let i=t;for(;!wd(i);)i.out(e.env.ns.rdf.first).map((o,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:first objects");return r.call(e,o)}).forEach(o=>{if(Array.isArray(o))throw new Error("Malformed RDF List had multiple rdf:first objects");n.push(o)}),i=i.out(e.env.ns.rdf.rest).map((o,a)=>{if(a>0)throw new Error("Malformed RDF List with multiple rdf:rest objects");return o})[0];return n}function*xd(e){let t=e.constructor;for(;t;)"__properties"in t&&(yield t),t=Object.getPrototypeOf(t)}function sg(e){switch(e.termType){case"NamedNode":case"BlankNode":case"Literal":return!0;default:return!1}}function og(e){const t=e.pointer._context[0].graph;return[...e.pointer.dataset.match(e.id,null,null,t)].reduce((r,n)=>{if(e.env.ns.rdf.type.equals(n.predicate))return r;const i=r.get(n.predicate)||[];return sg(n.object)&&i.push(e.pointer.node(n.object)),r.set(n.predicate,i),r},e.env.termMap())}function ag(e,t,r){return e&&t in e?e[t]===r.value:!1}function Ad(e,t){if(t.ns.xsd.string.equals(e.datatype))return e.value;if(t.ns.xsd.integer.equals(e.datatype)){const r=Number.parseInt(e.value);if(r.toString()===e.value)return r}if(t.ns.xsd.double.equals(e.datatype)){const r=Number.parseFloat(e.value);if(r.toString()===e.value)return r}if(t.ns.xsd.boolean.equals(e.datatype)){if(e.value==="true")return!0;if(e.value==="false")return!1}return t.ns.rdf.langString.equals(e.datatype)?{"@value":e.value,"@language":e.language}:e.datatype?{"@value":e.value,"@type":e.datatype.value}:e.value}function lg(e,t){return(r,[n,i])=>{const s=a=>{if(a.term.termType==="Literal")return Ad(a.term,e.env);const l=a.list();return l?[...l].map(s):Tn(e._create(e.pointer.node(a.term)),t)},o=i.map(s);return o.length===1?r[n.value]=o[0]:r[n.value]=o,r}}function cg(e){const{parentContexts:t,visitedResources:r,remainingObjects:n,context:i,resource:s,namespace:o}=e;return({json:a,contextPopulated:l=!1},[u,{options:h}])=>{const m=h.path?h.path:o?o(u):null;if(!m||Array.isArray(m)||typeof m=="function"||h.subjectFromAllGraphs)return{json:a,contextPopulated:l};let y=!1;const v=typeof m=="string"?e.resource.env.namedNode(m):m;if(!n.get(v))return{json:a,contextPopulated:l};const P=s.pointer.out(v);ag(t,u,v)||(Tr(P)?i[u]={"@container":"@list","@id":v.value}:i[u]=v.value,y=!0);function I(M){switch(M.term.termType){case"BlankNode":case"NamedNode":return h.fromTerm.call(s,M);default:return M.term}}const $=P.map(M=>M.term.termType==="Literal"?M.term:Tr(M)?Lo(s,M,I):I(M)).map(function M(S){if(Array.isArray(S))return S.map(w=>M(w));if("termType"in S)switch(S.termType){case"Literal":return Ad(S,s.env);case"BlankNode":case"NamedNode":return Tn(s._create(s.pointer.node(S)),{parentContexts:{...t,...i},visitedResources:r});default:return null}return Tn(S,{parentContexts:{...t,...i},visitedResources:r})});return h.values.includes("array")&&$.length!==1?a[u]=$:h.values.includes("list")&&Array.isArray($[0])?a[u]=$[0]||[]:$.length>1?a[u]=$:a[u]=h.values.includes("single")?$[0]:$,n.delete(v),{json:a,contextPopulated:l||y}}}function Tn(e,{parentContexts:t,visitedResources:r=e.env.termSet()}={}){const i={id:e.id.termType==="NamedNode"?e.id.value:`_:${e.id.value}`},s=[...e.types];if(s.length>0&&(i.type=s.map(h=>h.id.value)),r.has(e.id))return i;r.add(e.id);const o=og(e);let a=!0,l;t?l={}:(a=!1,l={id:"@id",type:"@type"});let u=!1;for(const{__properties:h,__ns:m}of xd(e))({contextPopulated:u}=[...h].reduce(cg({parentContexts:t,visitedResources:r,resource:e,remainingObjects:o,context:l,namespace:m}),{json:i,contextPopulated:u}));return[...o].reduce(lg(e,{parentContexts:{...t,...l},visitedResources:r}),i),(!a||u)&&(i["@context"]=l),i}function Sd(e,t){return t&&typeof t!="string"?e.node(t):!t||t.startsWith("_:")?e.blankNode():e.namedNode(t)}function Ed(e,t){const r=Sd(e.pointer,t.id);return e._create(r,[],{initializer:t})}const Ce=class Ce{static _userInitializeProperties(t,r={}){Object.entries(r).filter(([n])=>n!=="id"&&n!=="types").forEach(([n,i])=>{if(!n.startsWith("http")){typeof i=="function"?t[n]=i(t.pointer.any()):t[n]=i;return}const o=(Array.isArray(i)?i:[i]).map(function a(l){if(typeof l=="function"){const m=l(t.pointer.any());if(typeof m=="function")throw new Error("Initializer factory function cannot return a function");if(Array.isArray(m))throw new Error("Initializer factory function cannot return an array");return a(m)}if(typeof l=="object"&&"term"in l)return l.term;if(typeof l=="object"&&"pointer"in l)return l.pointer;if(typeof l=="object"&&"termType"in l)return t.pointer.node(l);let u;return typeof l=="object"&&"value"in l&&"datatype"in l?u=t.env.rdfine().convert.toLiteral(l.value,l.datatype):u=t.env.rdfine().convert.toLiteral(l),u?t.pointer.node(u):Ed(t,l).pointer});t.pointer.addOut(t.pointer.namedNode(n),o)});for(const n of r.types||[])t.types.add(n)}constructor(t,r,n={}){if(this.__initialized=!1,t.term.termType!=="BlankNode"&&t.term.termType!=="NamedNode")throw new Error(`RdfResource cannot be initialized from a ${t.term.termType} node`);let i;"id"in r?(i=r,this.env=i.env):this.env=r;const s=this.env.clownface({...t,term:t.term});s._context[0].graph?(this.pointer=s,this.unionGraphPointer=this.env.clownface({dataset:s.dataset,term:s.term,graph:void 0})):(this.pointer=this.env.clownface({dataset:s.dataset,term:s.term,graph:this.env.defaultGraph()}),this.unionGraphPointer=this.env.clownface({dataset:s.dataset,term:s.term})),this.__initializeProperties=_d(()=>{const o=this;return[...xd(o)].flatMap(l=>[...l.__initializers]).forEach(([l,u])=>{const h=o[l];if(Array.isArray(h)&&h.length===0||typeof h>"u"){if(typeof u=="function"){o[l]=u(o);return}o[l]=u}}),!0}),this._parent=i,this.__initialized=this.__initializeProperties(),Ce._userInitializeProperties(this,n)}get id(){return this.pointer.term}get _graphId(){return this.pointer._context[0].graph}get types(){return new eg(this)}get isAnonymous(){return this.id.termType==="BlankNode"}hasType(t){return this.types.has(t)}equals(t){if(!t)return!1;if("termType"in t)return this.id.equals(t);const r="_context"in t?t:t.pointer,n=this.id.equals(r.term);return this.isAnonymous||r.term.termType==="BlankNode"?n&&this.pointer.dataset===r.dataset:n}get(t,r){const n=this.getArray(t,r);return n.length>0?n[0]:null}getArray(t,r){const n=this._getObjects(t,r).filter(i=>i.term.termType==="NamedNode"||i.term.termType==="BlankNode").map(i=>this._create(i,[],{parent:this}));return n.length?n:[]}getNumber(t,r){const[n]=this._getObjects(t,r).toArray();if(typeof n>"u")return null;if(n.term.termType==="Literal")return parseFloat(n.value);throw new Error(`Expected property '${t}' to be a number but found '${n}'`)}getString(t,r){const[n]=this._getObjects(t,r).toArray();if(typeof n>"u")return null;if(n.term.termType==="Literal")return n.value;throw new Error(`Expected property '${t}' to be a literal but found '${n}'`)}getBoolean(t,r){const[n]=this._getObjects(t,r).toArray();if(typeof n>"u")return!1;if(n.term.termType==="Literal"&&this.env.ns.xsd.boolean.equals(n.term.datatype))return n.term.equals(this.pointer.literal(!0).term);throw new Error(`Expected property '${t}' to be a boolean but found '${n}'`)}_getObjects(t,{strict:r}={strict:!1}){const n=typeof t=="string"?this.pointer.namedNode(t):t,i=this.pointer.out(n);if(!i.terms.length&&r)throw new Error(`Value for predicate <${t}> was missing`);return i}_create(t,r,n={}){return this.env.rdfine().factory.createEntity(t,r,n)}toJSON(){return Tn(this)}};Ce.__mixins=[],Ce.__properties=new Map,Ce.__initializers=new Map;let Hs=Ce;function ug(e,t){if(!t)throw new Error(`Cannot construct URI for property ${e}. Annotate the class with @namespace or use a NamedNode`);return t[e]}function dg(e,t,r){return typeof e=="string"?e.match(/^(http|urn):\/\//)?t.namedNode(e):ug(e,r):e}function hg(e){const t=r=>r.out(e).toArray();return t.predicate=e,t.crossesGraphBoundaries=!1,t}function kl(e,t,r){return r.map(n=>typeof n=="function"?n.call(t,e):hg(dg(n,t,e)))}function pg(e){const t=r=>{switch(r.term.termType){case"BlankNode":case"NamedNode":return Tr(r)?Lo(e,r,t):e._create(r,[],{parent:e});default:return r.term}};return t}function fg(e){return new Proxy(e,{get(t,r){if(r in t||typeof r=="symbol")return t[r.toString()];const n=t._getObjects(r.toString());if(n.values.length===0)return;const i=n.map(pg(t));return i.length===1?i[0]:i},set(t,r,n){if(r in t||typeof r=="symbol")return t[r.toString()]=n,!0;if(typeof r=="number")return!1;const i=Array.isArray(n)?n:[n],s=i.reduce((a,l)=>(typeof l=="function"&&(l=l(t.pointer)),!l||typeof l!="object"?a:l&&("termType"in l||"_context"in l)?[...a,l]:[...a,l.id]),[]),o=t.pointer.namedNode(r.toString());return t.pointer.deleteOut(o),i.length&&t.pointer.addOut(o,s),!0}})}class mg{constructor(t){this.__env=t,this.__mixins=new Set,this.__alwaysMixins=new Set,this.__typeMixins=new Map,this.__typeCache=new Map,this.BaseClass=t.rdfine.Resource}addMixin(...t){this.__typeCache.clear(),t.forEach(r=>{if("appliesTo"in r){const n=this.__typeMixins.get(r.appliesTo.value)||[];this.__typeMixins.set(r.appliesTo.value,[...n,r])}else r.shouldApply===!0&&this.__alwaysMixins.add(r),this.__mixins.add(r)})}createEntity(t,r=[],n={}){let i=this.BaseClass,s=r;if(r.length>0){const[h,...m]=r;this.__isConstructor(h)&&(i=h,s=m)}const o=t.out(this.__env.ns.rdf.type).values;for(const h of n.initializer?.types||[])"termType"in h?o.push(h.value):o.push(h.id.value);i=this.__getBaseClass(i,o);const a=new i(t,this.__env),l=[...this.__mixins].reduce((h,m)=>((m.shouldApply===!0||typeof m.shouldApply=="function"&&m.shouldApply(a))&&h.add(m),h),new Set(s)),u=this.__extend(i,[...l]);return fg(new u(t,n.parent||this.__env,n.initializer))}__getBaseClass(t,r){const n=[t.name,...r].toString(),i=this.__typeCache.get(n);if(i)return i;const s=r.reduce((a,l)=>{const u=this.__typeMixins.get(l);return u&&u.forEach(h=>a.add(h)),a},new Set),o=this.__extend(t,[...this.__alwaysMixins,...s]);return this.__typeCache.set(n,o),o}__extend(t,r){const n=r.reduce((s,o)=>o(s),t),i=t.__mixins||[];return n.__mixins=[...i,...r],n}__isConstructor(t){return"__mixins"in t}}function Cd(e,t){e.__ns=t}const _g=(e,t)=>(Cd(t,e),t),yg=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(i){Cd(i,e)}}},D=e=>t=>typeof t=="function"?_g(e,t):yg(e,t);function Bl(e,t,r){return r.reduce((i,s)=>{const o=[];return i.forEach(a=>{o.push(...s(a,e))}),o},t).reduce((i,s)=>i.concat(s.toArray()),[])}function gg(e,t){const n=[...e.datasets.reduce((i,s)=>[...s].reduce((o,a)=>o.add(a.graph),i),t.termSet()).values()];return n.length?n.map(i=>t.clownface({dataset:e.dataset,term:e.term,graph:i})):[e]}function Pd(e,t,r){const{fromTerm:n,toTerm:i,assertSetValue:s,valueTypeName:o,initial:a,strict:l,compare:u,subjectFromAllGraphs:h,filter:m}=r;let y=["single"];Array.isArray(r.values)?y=r.values:r.values&&(y=[r.values]);const v=E=>Array.isArray(r.path)?kl(e.constructor.__ns,E.env,r.path):kl(e.constructor.__ns,E.env,[r.path||t]);Object.defineProperty(e,t,{get(){const E=h?gg(this.pointer,this.env):[this.pointer],P=v(this);let I=Bl(this.env,E,P);const R=P.some(M=>M.crossesGraphBoundaries);(h||R)&&(y=["array"]),m&&(I=I.filter(M=>m(M.term)));const $=I.map((M,S)=>{if(Tr(M)){if(S>0)throw new Error("Lists of lists are not supported");return Lo(this,M,n.bind(this))}return n.call(this,M)}).filter(zs(u));if(y.includes("array")&&$.length!==1)return $;if(y.includes("list")&&Array.isArray($[0]))return $[0]||[];if($.length>1&&!y.includes("array"))throw new Error(`${t}: Multiple terms found where 0..1 was expected`);if(Array.isArray($[0])&&!y.includes("list"))throw new Error(`${t}: RDF List found where 0..1 object was expected`);if(this.__initialized&&l&&$.length===0)throw new Error(`Object not found for property ${t}`);return y.includes("single")?$[0]:$},set(E){if(!y.includes("array")&&!y.includes("list")&&Array.isArray(E))throw new Error(`${t}: Cannot set array to a non-array property`);const P=v(this),I=P.length===1?this.pointer.toArray():Bl(this.env,[this.pointer],P.slice(0,P.length-1));if(I.length>1)throw new Error("Cannot set value to multiple nodes at once");const R=I[0],$=P[P.length-1].predicate;if(R.out($).forEach(T=>{Tr(T)&&R.deleteList($)}),R.deleteOut($),E===null||typeof E>"u")return;let M=!1,S;Array.isArray(E)?(M=!0,S=E):S=[E];const w=S.reduce((T,O)=>{let L,j;if(typeof O=="function"?j=O(this.pointer.any()):j=O,j&&typeof j=="object"&&"termType"in j?L=j:j&&typeof j=="object"&&"term"in j?L=j.term:j&&typeof j=="object"&&"pointer"in j?L=j.id:L=i.call(this,j),m&&!m(L))return T;if(!s(j)){const F=P.map(st=>`<${st.predicate.value}>`).join("/");throw new Error(`Unexpected value for path ${F}. Expecting a ${o} or RDF/JS term.`)}return[...T,L]},[]);y.includes("list")&&(y.length===1||M)?w.length===0?R.addOut($,this.env.ns.rdf.nil):R.addList($,w):R.addOut($,w)}}),Object.hasOwnProperty.call(e.constructor,"__properties")||(e.constructor.__properties=new Map),Object.hasOwnProperty.call(e.constructor,"__initializers")||(e.constructor.__initializers=new Map),e.constructor.__properties.set(t,{initial:a,options:{...r,values:y}}),a&&e.constructor.__initializers.set(t,a)}const bg=(e,t,r)=>{Pd(t,r.toString(),e)},vg=(e,t)=>({kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){Pd(r.prototype,t.key.toString(),e)}});function Mo(e){return(t,r)=>r!==void 0?bg(e,t,r):vg(e,t)}function wg(e={}){const t=e.type||String;return Mo({...e,fromTerm(r){return this.env.rdfine().convert.fromLiteral(t,r)},toTerm(r){return this.env.rdfine().convert.toLiteral(r,e.datatype)},valueTypeName:t.name,assertSetValue:r=>{if(r instanceof Date)return!0;if(typeof r=="object"){let n;return"id"in r?!1:("term"in r?n=r.term:n=r,n.termType==="Literal")}return!0},compare(r,n){return r===n}})}function xg(e={}){return Mo({...e,fromTerm(t){return e.implicitTypes&&t.addOut(this.env.ns.rdf.type,e.implicitTypes),this._create(t,e.as,{parent:this})},toTerm(t){const r=Sd(this.pointer,t.id);return t.types&&Array.isArray(t.types)&&r.addOut(this.env.ns.rdf.type,t.types),e.implicitTypes&&r.addOut(this.env.ns.rdf.type,e.implicitTypes),this._create(r,e.as,{initializer:t}),r.term},valueTypeName:"RdfResource instance",assertSetValue:t=>{let r=null;return"termType"in t?r=t:"term"in t&&(r=t.term),r?r.termType==="NamedNode"||r.termType==="BlankNode":!0},compare:gd(!0)})}function Ag(e){return typeof e=="object"&&e instanceof Object&&"id"in e}function C(e={}){return Mo({...e,fromTerm:t=>t.term,toTerm(t){return Ag(t)?Ed(this,t).id:this.env.rdfine().convert.toLiteral(t)||this.env.literal(t.toString())},valueTypeName:"RDF/JS term object",assertSetValue:()=>!0,compare:yd})}C.literal=wg;C.resource=xg;function Sg(e,t,r){return t===Boolean?Bt.literal("true",e.ns.xsd.boolean).equals(r.term):t===Number?Number.parseFloat(r.value):t===Date?new Date(Date.parse(r.value)):r.value}function Eg(e,t,r){switch(typeof t){case"boolean":return Bt.literal(t.toString(),r||e.ns.xsd.boolean);case"number":return Bt.literal(t.toString(),r||(Number.isInteger(t)?e.ns.xsd.integer:e.ns.xsd.float));case"bigint":return Bt.literal(t.toString(),r||e.ns.xsd.long);case"string":return Bt.literal(t,r);case"object":if(t instanceof Date){const n=t.toISOString();return e.ns.xsd.date.equals(r)?Bt.literal(n.substr(0,10),e.ns.xsd.date):Bt.literal(n,r||e.ns.xsd.dateTime)}break}}class Cg{init(){const t=this;class r extends Hs{static get env(){return t}}let n;this.rdfine=()=>({factory:n,createEntity:n.createEntity.bind(n),convert:{toLiteral:Eg.bind(null,t),fromLiteral:Sg.bind(null,t)}}),this.rdfine.Resource=r,n=new mg(t)}static get exports(){return["_initVocabulary"]}_initVocabulary(t){return this.rdfine().factory.addMixin(...Object.values(t)),Object.fromEntries(Object.entries(t).reduce((r,[n,i])=>"createFactory"in i?[...r,[n.replace(/Mixin$/,""),i.createFactory(this)]]:r,[]))}}var Bi,Fl;function Pg(){if(Fl)return Bi;Fl=1;function e(t,r){for(const n of r)t.add(n);return t}return Bi=e,Bi}var Tg=Pg();const qs=ze(Tg);var Fi,zl;function $g(){if(zl)return Fi;zl=1;function e(t,r,n,i,s){const o=t.match(r,n,i,s);for(const a of o)t.delete(a);return t}return Fi=e,Fi}var Og=$g();const Td=ze(Og);var zi,Ul;function Rg(){if(Ul)return zi;Ul=1;function e(t,r){if(t.size!==r.size)return!1;for(const n of t)if(!r.has(n))return!1;return!0}return zi=e,zi}var Ng=Rg();const $d=ze(Ng),Ig=e=>class{dataset;init(){const t=e(this);this.dataset=(r=[])=>new t([...r]),this.dataset.Class=t,this.dataset.addAll=qs,this.dataset.deleteMatch=Td,this.dataset.equals=$d}};class Hl extends Map{import(t,r,n){const i=this.get(t);return i?i.import(r,n):null}}class Lg{constructor({factory:t}){this.factory=t,this.parsers=new Hl,this.serializers=new Hl}import(t){if(t.parsers)for(const[r,n]of t.parsers)this.parsers.set(r,new n.constructor({factory:this.factory}));if(t.serializers)for(const[r,n]of t.serializers)this.serializers.set(r,new n.constructor({factory:this.factory}));return this}}let Mg=class{init(){this.formats=new Lg({factory:this})}clone(t){this.formats.import(t.formats)}},Do=class{namespace(t){return A(t,{factory:this})}};Do.exports=["namespace"];class Od{init(){this.ns=nh}}const Dg=A("http://www.w3.org/ns/auth/acl#"),jg=Dg,kg=A("https://www.w3.org/ns/activitystreams#"),Bg=kg,Fg=A("http://purl.org/ontology/bibo/"),zg=Fg,Ug=A("http://creativecommons.org/ns#"),Hg=Ug,qg=A("http://www.w3.org/ns/auth/cert#"),Vg=qg,Gg=A("http://www.w3.org/2011/content#"),Jg=Gg,Wg=A("http://qudt.org/vocab/constant/"),Yg=Wg,Qg=A("http://www.cidoc-crm.org/cidoc-crm/"),Kg=Qg,Xg=A("http://www.w3.org/ns/csvw#"),Zg=Xg,tb=A("http://commontag.org/ns#"),eb=tb,rb=A("http://qudt.org/vocab/currency/"),nb=rb,ib=A("http://datashapes.org/sparql#"),sb=ib,ob=A("http://datashapes.org/dash#"),ab=ob,lb=A("http://dbpedia.org/ontology/"),cb=lb,ub=A("http://purl.org/dc/elements/1.1/"),db=ub,hb=A("http://purl.org/dc/dcam/"),pb=hb,fb=A("http://www.w3.org/ns/dcat#"),mb=fb,_b=A("http://purl.org/dc/dcmitype/"),yb=_b,gb=A("http://purl.org/dc/terms/"),bb=gb,vb=A("http://www.ics.forth.gr/isl/CRMdig/"),wb=vb,xb=A("http://qudt.org/vocab/discipline/"),Ab=xb,Sb=A("http://usefulinc.com/ns/doap#"),Eb=Sb,Cb=A("https://ekgf.github.io/dprod/"),Pb=Cb,Tb=A("http://www.w3.org/ns/dpv#"),$b=Tb,Ob=A("http://www.w3.org/ns/dqv#"),Rb=Ob,Nb=A("http://www.linkedmodel.org/schema/dtype#"),Ib=Nb,Lb=A("http://www.w3.org/ns/duv#"),Mb=Lb,Db=A("http://www.w3.org/ns/earl#"),jb=Db,kb=A("http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#"),Bb=kb,Fb=A("http://www.w3.org/2003/12/exif/ns#"),zb=Fb,Ub=A("http://xmlns.com/foaf/0.1/"),Hb=Ub,qb=A("http://purl.org/vocab/frbr/core#"),Vb=qb,Gb=A("http://www.opengis.net/ont/geosparql#"),Jb=Gb,Wb=A("http://www.opengis.net/def/function/geosparql/"),Yb=Wb,Qb=A("http://www.opengis.net/def/rule/geosparql/"),Kb=Qb,Xb=A("http://www.opengis.net/ont/gml#"),Zb=Xb,tv=A("http://www.geonames.org/ontology#"),ev=tv,rv=A("http://purl.org/goodrelations/v1#"),nv=rv,iv=A("http://www.w3.org/2003/g/data-view#"),sv=iv,ov=A("https://gs1.org/voc/"),av=ov,lv=A("http://vocab.gtfs.org/terms#"),cv=lv,uv=A("http://www.w3.org/2011/http#"),dv=uv,hv=A("http://www.w3.org/ns/hydra/core#"),pv=hv,fv=A("http://www.w3.org/2002/12/cal/icaltzd#"),mv=fv,_v=A("https://linked.art/ns/terms/"),yv=_v,gv=A("http://www.w3.org/ns/ldp#"),bv=gv,vv=A("http://www.w3.org/2000/10/swap/list#"),wv=vv,xv=A("http://www.w3.org/ns/locn#"),Av=xv,Sv=A("http://www.w3.org/2000/10/swap/log#"),Ev=Sv,Cv=A("http://lexvo.org/ontology#"),Pv=Cv,Tv=A("http://w3id.org/nfdi4ing/metadata4ing#"),$v=Tv,Ov=A("http://www.w3.org/ns/ma-ont#"),Rv=Ov,Nv=A("http://www.loc.gov/mads/rdf/v1#"),Iv=Nv,Lv=A("http://www.w3.org/2000/10/swap/math#"),Mv=Lv,Dv=A("http://www.w3.org/ns/oa#"),jv=Dv,kv=A("http://ogp.me/ns#"),Bv=kv,Fv=A("http://www.w3.org/ns/solid/oidc#"),zv=Fv,Uv=A("http://www.w3.org/ns/org#"),Hv=Uv,qv=A("http://www.w3.org/2002/07/owl#"),Lr=qv,Vv=A("http://www.w3.org/ns/pim/space#"),Gv=Vv,Jv=A("http://qudt.org/vocab/prefix/"),Wv=Jv,Yv=A("http://www.w3.org/ns/prov#"),Qv=Yv,Kv=A("http://purl.org/linked-data/cube#"),Xv=Kv,Zv=A("http://qudt.org/vocab/dimensionvector/"),tw=Zv,ew=A("http://qudt.org/vocab/quantitykind/"),rw=ew,nw=A("http://qudt.org/schema/qudt/"),iw=nw,sw=A("http://rdaregistry.info/Elements/u/"),ow=sw,aw=A("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),pe=aw,lw=A("http://www.w3.org/ns/rdfa#"),cw=lw,uw=A("http://www.w3.org/2000/01/rdf-schema#"),gt=uw,dw=A("http://purl.org/stuff/rev#"),hw=dw,pw=A("https://www.ica.org/standards/RiC/ontology#"),fw=pw,mw=A("http://www.w3.org/ns/r2rml#"),_w=mw,yw=A("http://purl.org/rss/1.0/"),gw=yw,bw=A("http://schema.org/"),vw=bw,ww=A("http://www.w3.org/ns/sparql-service-description#"),xw=ww,Aw=A("http://purl.org/linked-data/sdmx#"),Sw=Aw,Ew=A("http://semanticweb.cs.vu.nl/2009/11/sem/"),Cw=Ew,Pw=A("http://www.w3.org/2000/10/swap/set#"),Tw=Pw,$w=A("http://www.opengis.net/ont/sf#"),Ow=$w,Rw=A("http://www.w3.org/ns/shacl#"),b=Rw,Nw=A("http://www.w3.org/ns/shex#"),Iw=Nw,Lw=A("http://www.w3.org/ns/shacl-shacl#"),Mw=Lw,Dw=A("http://rdfs.org/sioc/ns#"),jw=Dw,kw=A("http://www.w3.org/2004/02/skos/core#"),Bw=kw,Fw=A("http://www.w3.org/2008/05/skos-xl#"),zw=Fw,Uw=A("http://www.w3.org/ns/solid/terms#"),Hw=Uw,qw=A("http://www.w3.org/ns/sosa/"),Vw=qw,Gw=A("http://qudt.org/vocab/sou/"),Jw=Gw,Ww=A("http://www.w3.org/ns/ssn/"),Yw=Ww,Qw=A("http://www.w3.org/ns/posix/stat#"),Kw=Qw,Xw=A("http://www.w3.org/2000/10/swap/string#"),Zw=Xw,t0=A("http://www.w3.org/2006/03/test-description#"),e0=t0,r0=A("http://www.w3.org/2006/time#"),n0=r0,i0=A("http://qudt.org/vocab/unit/"),s0=i0,o0=A("http://www.linkedmodel.org/schema/vaem#"),a0=o0,l0=A("http://purl.org/vocab/vann/"),c0=l0,u0=A("http://www.w3.org/2006/vcard/ns#"),d0=u0,h0=A("http://rdfs.org/ns/void#"),p0=h0,f0=A("http://www.w3.org/2003/06/sw-vocab-status/ns#"),m0=f0,_0=A("http://purl.org/vso/ns#"),y0=_0,g0=A("http://www.w3.org/2007/05/powder-s#"),b0=g0,v0=A("http://www.w3.org/2003/01/geo/wgs84_pos#"),w0=v0,x0=A("http://www.w3.org/1999/xhtml/vocab#"),A0=x0,S0=A("http://rdf-vocabulary.ddialliance.org/xkos#"),E0=S0,C0=A("http://www.w3.org/2001/XMLSchema#"),At=C0,P0=A("http://www.w3.org/2007/rif#"),T0=P0,$0=A("http://rdf.data-vocabulary.org/#"),O0=$0,R0=A("http://www.w3.org/2007/05/powder#"),N0=R0,I0=A("http://www.w3.org/XML/1998/namespace/"),L0=I0,jo=e=>{const t=e.namespace("http://www.w3.org/2001/XMLSchema#"),r=e.namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");return{first:r.first,nil:r.nil,rest:r.rest,langString:r.langString,xsd:t}};function dt(e,t){return typeof e>"u"||e===null?t:Array.isArray(e)?e:typeof e!="string"&&e[Symbol.iterator]?[...e]:[e]}const fe=new Ro([Do,Ir]),{xsd:Vs}=jo(fe);function M0(e,t=fe){return typeof e!="boolean"?null:t.literal(e.toString(),Vs("boolean"))}function D0(e,t=fe){return typeof e!="number"?null:Number.isInteger(e)?t.literal(e.toString(10),Vs("integer")):t.literal(e.toString(10),Vs("double"))}function j0(e,t=fe){return typeof e!="string"?null:t.literal(e)}function k0(e,t=fe){return M0(e,t)||D0(e,t)||j0(e,t)}function B0(e,t){if(e&&typeof e!="string")throw new Error("Blank node identifier must be a string");return t.blankNode(e)}function F0(e,t,r){if(typeof e=="string")return t=t&&(t.value||t.toString()),t&&t.indexOf(":")!==-1&&(t=r.namedNode(t)),r.literal(e.toString(),t);const n=k0(e,r);if(!n)throw new Error("The value cannot be converted to a literal node");return n}function ql(e,t){if(typeof e!="string")throw new Error("Named node must be an IRI string");return t.namedNode(e)}function Rd(e,t="Literal",r,n){if(e&&typeof e=="object"&&e.termType)return e;if(e&&e.constructor.name==="URL")return ql(e.toString(),n);if(t==="BlankNode")return B0(e,n);if(!(e===null||typeof e>"u")){if(t==="Literal")return F0(e,r,n);if(t==="NamedNode")return ql(e,n);throw new Error("unknown type")}}function z0(e,t,r,n){return(typeof e>"u"||e===null)&&!t?e:(dt(e)||[void 0]).reduce((i,s)=>typeof s=="object"&&s.terms?i.concat(s.terms):(i.push(Rd(s,t,r,n)),i),[])}const Vl=jo(fe);function U0(e,t){const r=t.termType!=="Literal",n=Vl.langString.equals(t.datatype)||Vl.xsd.string.equals(t.datatype);if(r||!n)return e;const i=t.language.toLowerCase();return e.has(i)?e.get(i).push(t):e.set(i,[t]),e}function H0(e){const t=e.reduce(U0,new Map),r=[...t.entries()];return n=>{const i=n.toLowerCase();if(i==="*")return r[0]&&r[0][1];const s=t.get(i);if(s)return s;const o=r.find(([a])=>a.startsWith(i));return o&&o[1]}}function q0(e,{language:t}){const r=typeof t=="string"?[t]:t,n=H0(e);return r.map(n).find(Boolean)||[]}class ko{constructor({dataset:t,graph:r,value:n,factory:i,namespace:s}){this.dataset=t,this.graph=r,this.factory=i,this.namespace=s,this.term=Rd(n,void 0,void 0,i)}clone({dataset:t=this.dataset,graph:r=this.graph,value:n,factory:i=this.factory,namespace:s=this.namespace}){return new ko({dataset:t,graph:r,value:n,factory:i,namespace:s})}has(t,r){return this.matchProperty(dt(this.term),t,r,dt(this.graph),"subject").map(n=>this.clone({value:n}))}in(t){return this.matchProperty(null,t,dt(this.term),dt(this.graph),"subject").map(r=>this.clone({value:r}))}out(t,{language:r}={}){let n=this.matchProperty(dt(this.term),t,null,dt(this.graph),"object");return typeof r<"u"&&(n=q0(n,{language:r})),n.map(i=>this.clone({value:i}))}addIn(t,r){const n=[];return this.term&&r.forEach(i=>{t.forEach(s=>{this.dataset.add(this.factory.quad(i,s,this.term,this.graph))}),n.push(this.clone({value:i}))}),n}addOut(t,r){const n=[];return this.term&&r.forEach(i=>{t.forEach(s=>{this.dataset.add(this.factory.quad(this.term,s,i,this.graph))}),n.push(this.clone({value:i}))}),n}addList(t,r){this.term&&t.forEach(n=>{const i=r.map(()=>this.factory.blankNode());this.dataset.add(this.factory.quad(this.term,n,i[0]||this.namespace.nil,this.graph));for(let s=0;s<i.length;s++)this.dataset.add(this.factory.quad(i[s],this.namespace.first,r[s],this.graph)),this.dataset.add(this.factory.quad(i[s],this.namespace.rest,i[s+1]||this.namespace.nil,this.graph))})}deleteIn(t,r){this.deleteMatch(r,t,dt(this.term),dt(this.graph))}deleteOut(t,r){this.deleteMatch(dt(this.term),t,r,dt(this.graph))}deleteList(t){t.forEach(r=>{for(const n of this.dataset.match(this.term,r))this.deleteItems(n)})}deleteItems(t){let r=[t];for(;!r[r.length-1].object.equals(this.namespace.nil);){const n=r[r.length-1].object;r=r.concat([...this.dataset.match(n)])}r.forEach(n=>{this.dataset.delete(n)})}match(t,r,n,i){if(!t&&!r&&!n&&!i)return[...this.dataset];t=t||[null],r=r||[null],n=n||[null],i=i||[null];const s=[];for(const o of i)for(const a of t)for(const l of r)for(const u of n)for(const h of this.dataset.match(a,l,u,o))s.push(h);return s}matchProperty(t,r,n,i,s){return this.match(t,r,n,i).map(o=>o[s])}deleteMatch(t,r,n,i){this.match(t,r,n,i).forEach(s=>{this.dataset.delete(s)})}}class ut{constructor({dataset:t,graph:r,term:n,value:i,factory:s,_context:o}){if(this.factory=s,this.namespace=jo(s),o){this._context=o;return}const a=n&&dt(n)||i&&dt(i)||[null];this._context=a.map(l=>new ko({dataset:t,graph:r,value:l,factory:this.factory,namespace:this.namespace}))}get term(){const t=this.terms;if(t.length===1)return t[0]}get terms(){return this._context.map(t=>t.term).filter(Boolean)}get value(){const t=this.term;return t&&t.value}get values(){return this.terms.map(t=>t.value)}get dataset(){const t=this.datasets;if(t.length===1)return t[0]}get datasets(){return this._context.map(t=>t.dataset).filter(Boolean)}any(){return ut.fromContext(this._context.map(t=>t.clone({})),this)}isList(){return this.term?!!(this.term.equals(this.namespace.nil)||this.out(this.namespace.first).term):!1}list(){if(this.terms.length>1)throw new Error("iterator over multiple terms is not supported");if(this.term&&(this.term.termType!=="NamedNode"&&this.term.termType!=="BlankNode"||!this.term.equals(this.namespace.nil)&&!this.out(this.namespace.first).term))return null;let t=this;return{[Symbol.iterator]:()=>({next:()=>{if(!t.term||t.term.equals(this.namespace.nil))return{done:!0};const r=t.out(this.namespace.first);if(r.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:first on ${t.value}`);const n=t.out(this.namespace.rest);if(n.terms.length>1)throw new Error(`Invalid list: multiple values for rdf:rest on ${t.value}`);return t=n,{done:!1,value:r}}})}}toArray(){return this._context.map(t=>ut.fromContext(t,this)).filter(t=>t.terms.some(Boolean))}filter(t){const r=this._context.map(n=>ut.fromContext(n,this));return ut.fromContext(this._context.filter((n,i)=>t(ut.fromContext(n,this),i,r)),this)}forEach(t){return this.toArray().forEach(t),this}map(t){return this.toArray().map(t)}toString(){return this.values.join()}node(t,{type:r,datatype:n,language:i}={}){t=this._toTermArray(t,r,n||i)||[null];const s=t.reduce((o,a)=>o.concat(this._context.reduce((l,u)=>l.concat([u.clone({value:a})]),[])),[]);return ut.fromContext(s,{factory:this.factory})}blankNode(t){return this.node(t,{type:"BlankNode"})}literal(t,r){return this.node(t,{type:"Literal",datatype:r})}namedNode(t){return this.node(t,{type:"NamedNode"})}in(t){t=this._toTermArray(t);const r=this._context.reduce((n,i)=>n.concat(i.in(t)),[]);return ut.fromContext(r,this)}out(t,r={}){t=this._toTermArray(t);const n=this._context.reduce((i,s)=>i.concat(s.out(t,r)),[]);return ut.fromContext(n,this)}has(t,r){t=this._toTermArray(t),r=this._toTermArray(r);const n=this._context.reduce((i,s)=>i.concat(s.has(t,r)),[]);return ut.fromContext(n,this)}addIn(t,r,n){if(!t)throw new Error("predicate parameter is required");typeof r=="function"&&(n=r,r=null),t=this._toTermArray(t),r=this._toTermArray(r)||[this.factory.blankNode()];const i=this._context.map(s=>s.addIn(t,r));return n&&ut.fromContext(i,this).forEach(n),this}addOut(t,r,n){if(!t)throw new Error("predicate parameter is required");typeof r=="function"&&(n=r,r=null),t=this._toTermArray(t),r=this._toTermArray(r)||[this.factory.blankNode()];const i=this._context.map(s=>s.addOut(t,r));return n&&ut.fromContext(i,this).forEach(n),this}addList(t,r){if(!t||!r)throw new Error("predicate and items parameter is required");return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(n=>n.addList(t,r)),this}deleteIn(t,r){return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(n=>n.deleteIn(t,r)),this}deleteOut(t,r){return t=this._toTermArray(t),r=this._toTermArray(r),this._context.forEach(n=>n.deleteOut(t,r)),this}deleteList(t){if(!t)throw new Error("predicate parameter is required");return t=this._toTermArray(t),this._context.forEach(r=>r.deleteList(t)),this}_toTermArray(t,r,n){return z0(t,r,n,this.factory)}static fromContext(t,{factory:r}){return new ut({_context:dt(t),factory:r})}}function V0({dataset:e,graph:t,term:r,value:n,factory:i=fe,_context:s}){return new ut({dataset:e,graph:t,term:r,value:n,factory:i,_context:s})}class Nd{clownface({...t}={}){return!t.dataset&&typeof this.dataset=="function"&&(t.dataset=this.dataset()),V0({...t,factory:this})}}Nd.exports=["clownface"];var Ui,Gl;function G0(){if(Gl)return Ui;Gl=1;function e(t){return"_:"+t.value}return Ui=e,Ui}var Hi,Jl;function J0(){if(Jl)return Hi;Jl=1;function e(t,r){return[...t].map(n=>r(n)).join(`
`)+`
`}return Hi=e,Hi}var qi,Wl;function W0(){if(Wl)return qi;Wl=1;function e(){return""}return qi=e,qi}var Vi,Yl;function Id(){if(Yl)return Vi;Yl=1;function e(t){return"<"+t.value+">"}return Vi=e,Vi}var Gi,Ql;function Y0(){if(Ql)return Gi;Ql=1;const e=Id(),t=/["\\\\\n\r]/,r=/["\\\\\n\r]/g,n={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function i(a){return n[a]}function s(a){return t.test(a)?a.replace(r,i):a}function o(a){const l=s(a.value);return a.datatype.value==="http://www.w3.org/2001/XMLSchema#string"?'"'+l+'"':a.datatype.value==="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"?'"'+l+'"@'+a.language:'"'+l+'"^^'+e(a.datatype)}return Gi=o,Gi}var Ji,Kl;function Q0(){if(Kl)return Ji;Kl=1;function e(t,r){const n=r(t.subject),i=r(t.predicate),s=r(t.object),o=r(t.graph);return`${n} ${i} ${s} ${o?o+" ":""}.`}return Ji=e,Ji}var Wi,Xl;function K0(){if(Xl)return Wi;Xl=1;function e(t){return"?"+t.value}return Wi=e,Wi}var Yi,Zl;function X0(){if(Zl)return Yi;Zl=1;const e=G0(),t=J0(),r=W0(),n=Y0(),i=Id(),s=Q0(),o=K0();function a(l){if(!l)return null;if(l.termType==="BlankNode")return e(l);if(l.termType==="DefaultGraph")return r();if(l.termType==="Literal")return n(l);if(l.termType==="NamedNode")return i(l);if(l.termType==="Quad"||l.subject&&l.predicate&&l.object&&l.graph)return s(l,a);if(l.termType==="Variable")return o(l);if(l[Symbol.iterator])return t(l,a);throw new Error(`unknown termType ${l.termType}`)}return Yi=a,Yi}var Z0=X0();const Ee=ze(Z0);class Ld{constructor(t){if(this.index=new Map,t)for(const[r,n]of t)this.set(r,n)}get size(){return this.index.size}clear(){this.index.clear()}delete(t){return this.index.delete(Ee(t))}*entries(){for(const[,{term:t,value:r}]of this.index)yield[t,r]}forEach(t,r){for(const n of this.entries())t.call(r,n[1],n[0],this)}get(t){const r=this.index.get(Ee(t));return r&&r.value}has(t){return this.index.has(Ee(t))}*keys(){for(const[,{term:t}]of this.index)yield t}set(t,r){const n=Ee(t);return this.index.set(n,{term:t,value:r}),this}*values(){for(const[,{value:t}]of this.index)yield t}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}let Bo=class{termMap(t){return new Ld(t)}};Bo.exports=["termMap"];function tc(e){try{return Ee(e)}catch{return null}}class tx{constructor(t){if(this.index=new Map,t)for(const r of t)this.add(r)}get size(){return this.index.size}add(t){const r=Ee(t);return this.index.has(r)||this.index.set(r,t),this}clear(){this.index.clear()}delete(t){return t?this.index.delete(tc(t)):!1}entries(){return this.values().entries()}forEach(t,r){return this.values().forEach(t,r)}has(t){return t?this.index.has(tc(t)):!1}values(){return new Set(this.index.values())}keys(){return this.values()}[Symbol.iterator](){return this.values()[Symbol.iterator]()}}let Md=class{termSet(t){return new tx(t)}};Md.exports=["termSet"];function ex(e){return"_:"+e.value}function rx(e,t){return[...e].map(r=>t(r)).join(`
`)+`
`}function nx(){return""}function Dd(e){return"<"+e.value+">"}const ix=/["\\\\\n\r]/,sx=/["\\\\\n\r]/g,ox={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function ax(e){return ox[e]}function lx(e){return ix.test(e)?e.replace(sx,ax):e}function cx(e){const t=lx(e.value);return e.datatype.value==="http://www.w3.org/2001/XMLSchema#string"?'"'+t+'"':e.datatype.value==="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"?'"'+t+'"@'+e.language:'"'+t+'"^^'+Dd(e.datatype)}function ux(e,t){const r=t(e.subject),n=t(e.predicate),i=t(e.object),s=t(e.graph);return`${r} ${n} ${i} ${s?s+" ":""}.`}function dx(e){return"?"+e.value}function $n(e){if(!e)return null;if(e.termType==="BlankNode")return ex(e);if(e.termType==="DefaultGraph")return nx();if(e.termType==="Literal")return cx(e);if(e.termType==="NamedNode")return Dd(e);if(e.termType==="Quad"||e.subject&&e.predicate&&e.object&&e.graph)return ux(e,$n);if(e.termType==="Variable")return dx(e);if(e[Symbol.iterator])return rx(e,$n);throw new Error(`unknown termType ${e.termType}`)}class hx{constructor(){this.quadLevel=new Map}add(t,r){this.quadLevel.set($n(t),r)}has(t,r){const n=this.quadLevel.get($n(t));return n===void 0?!1:n<=r}}function Qi({backward:e,callback:t,dataset:r,filter:n,forward:i,term:s,visited:o=new hx}){const a=(l,u)=>{const h=m=>{for(const y of m){if(o.has(y,u))continue;o.add(y,u);const v={dataset:r,level:u,quad:y};n(v)&&(t(v),i&&a(y.object,u+1),e&&a(y.subject,u+1))}};i&&h(r.match(l)),e&&h(r.match(null,null,l))};a(s,0)}class px{constructor(t,{backward:r=!1,factory:n,forward:i=!0}){this.backward=r,this.factory=n,this.filter=t,this.forward=i}forEach({term:t,dataset:r},n){Qi({backward:this.backward,callback:n,dataset:r,filter:this.filter,forward:this.forward,term:t})}match({term:t,dataset:r}){const n=this.factory.dataset();return Qi({backward:this.backward,callback:({quad:i})=>n.add(i),dataset:r,filter:this.filter,forward:this.forward,term:t}),n}reduce({term:t,dataset:r},n,i){let s=i;return Qi({backward:this.backward,callback:o=>{s=n(o,s)},dataset:r,filter:this.filter,forward:this.forward,term:t}),s}}class jd{traverser(t,{backward:r=!1,forward:n=!0}={}){return new px(t,{backward:r,factory:this,forward:n})}}jd.exports=["traverser"];const fx=new ue([Ir,Mg,Do,Od,Nd,Bo,Md,jd]);function Zt(e){return typeof e=="string"||e instanceof String}const mx="http://www.w3.org/2001/XMLSchema#string";function Q(e){if(typeof e=="string")return e;if(!e)return"";if(typeof e.id<"u"&&e.termType!=="Quad")return e.id;let t,r,n,i;switch(e.termType){case"NamedNode":return e.value;case"BlankNode":return`_:${e.value}`;case"Variable":return`?${e.value}`;case"DefaultGraph":return"";case"Literal":return e.language?`"${e.value}"@${e.language}`:`"${e.value}"${e.datatype&&e.datatype.value!==mx?`^^${e.datatype.value}`:""}`;case"Quad":return t=Ki(Q(e.subject)),r=Ki(Q(e.predicate)),n=Ki(Q(e.object)),i=e.graph.termType==="DefaultGraph"?"":` ${Q(e.graph)}`,`<<${t} ${r} ${n}${i}>>`;default:throw new Error(`Unexpected termType: ${e.termType}`)}}const _x=/^"(.*".*)(?="[^"]*$)/;function Ki(e){return e.replace(_x,(t,r)=>`"${r.replace(/"/g,'""')}`)}class yx{constructor(t){if(this._size=0,this._graphs=Object.create(null),this._id=0,this._ids=Object.create(null),this._ids["><"]=0,this._entities=Object.create(null),this._quads=new Map,t)for(const r of t)this.add(r)}get size(){let t=this._size;if(t!==null)return t;t=0;const r=this._graphs;let n,i;for(const s in r)for(const o in n=r[s].subjects)for(const a in i=n[o])t+=Object.keys(i[a]).length;return this._size=t,this._size}add(t){let r=Q(t.subject),n=Q(t.predicate),i=Q(t.object);const s=Q(t.graph);let o=this._graphs[s];o||(o=this._graphs[s]={subjects:{},predicates:{},objects:{}},Object.freeze(o));const a=this._ids,l=this._entities;return r=a[r]||(a[l[++this._id]=r]=this._id),n=a[n]||(a[l[++this._id]=n]=this._id),i=a[i]||(a[l[++this._id]=i]=this._id),this._addToIndex(o.subjects,r,n,i),this._addToIndex(o.predicates,n,i,r),this._addToIndex(o.objects,i,r,n),this._setQuad(r,n,i,s,t),this._size=null,this}delete(t){let r=Q(t.subject),n=Q(t.predicate),i=Q(t.object);const s=Q(t.graph),o=this._ids,a=this._graphs;let l,u,h;if(!(r=o[r])||!(n=o[n])||!(i=o[i])||!(l=a[s])||!(u=l.subjects[r])||!(h=u[n])||!(i in h))return this;this._removeFromIndex(l.subjects,r,n,i),this._removeFromIndex(l.predicates,n,i,r),this._removeFromIndex(l.objects,i,r,n),this._size!==null&&this._size--,this._deleteQuad(r,n,i,s);for(r in l.subjects)return this;return delete a[s],this}has(t){const r=Q(t.subject),n=Q(t.predicate),i=Q(t.object),s=Q(t.graph),o=this._graphs[s];if(!o)return!1;const a=this._ids;let l,u,h;return Zt(r)&&!(l=a[r])||Zt(n)&&!(u=a[n])||Zt(i)&&!(h=a[i])?!1:this._countInIndex(o.objects,h,l,u)===1}match(t,r,n,i){return this._createDataset(this._match(t,r,n,i))}[Symbol.iterator](){return this._match()[Symbol.iterator]()}_addToIndex(t,r,n,i){const s=t[r]||(t[r]={}),o=s[n]||(s[n]={}),a=i in o;return a||(o[i]=null),!a}_removeFromIndex(t,r,n,i){const s=t[r],o=s[n];delete o[i];for(const a in o)return;delete s[n];for(const a in s)return;delete t[r]}_findInIndex(t,r,n,i,s,o,a,l,u,h){let m,y,v;r&&((m=t,t={})[r]=m[r]);for(const E in t)if(y=t[E],y){n&&((m=y,y={})[n]=m[n]);for(const P in y)if(v=y[P],v){const I=i?i in v?[i]:[]:Object.keys(v);for(let R=0;R<I.length;R++){const $={[s]:E,[o]:P,[a]:I[R]},M=this._getQuad($.subject,$.predicate,$.object,l);if(h)h.push(M);else if(u(M))return!0}}}return h}_countInIndex(t,r,n,i){let s=0,o,a,l;r&&((o=t,t={})[r]=o[r]);for(const u in t)if(a=t[u],a){n&&((o=a,a={})[n]=o[n]);for(const h in a)l=a[h],l&&(i?i in l&&s++:s+=Object.keys(l).length)}return s}_getGraphs(t){return Zt(t)?{[t]:this._graphs[t]}:this._graphs}_match(t,r,n,i){t=t&&Q(t),r=r&&Q(r),n=n&&Q(n),i=i&&Q(i);const s=[],o=this._getGraphs(i),a=this._ids;let l,u,h,m;if(Zt(t)&&!(u=a[t])||Zt(r)&&!(h=a[r])||Zt(n)&&!(m=a[n]))return s;for(const y in o)l=o[y],l&&(u?m?this._findInIndex(l.objects,m,u,h,"object","subject","predicate",y,null,s):this._findInIndex(l.subjects,u,h,null,"subject","predicate","object",y,null,s):h?this._findInIndex(l.predicates,h,m,null,"predicate","object","subject",y,null,s):m?this._findInIndex(l.objects,m,null,null,"object","subject","predicate",y,null,s):this._findInIndex(l.subjects,null,null,null,"subject","predicate","object",y,null,s));return s}_getQuad(t,r,n,i){return this._quads.get(this._toId(t,r,n,i))}_setQuad(t,r,n,i,s){this._quads.set(this._toId(t,r,n,i),s)}_deleteQuad(t,r,n,i){this._quads.delete(this._toId(t,r,n,i))}_createDataset(t){return new this.constructor(t)}_toId(t,r,n,i){return`${t}:${r}:${n}:${i}`}}class gx extends yx{addAll(...[t]){return qs(this,t)}deleteMatches(...t){return Td(this,...t)}equals(...[t]){return $d(this,t)}forEach(t){Array.from(this).forEach(r=>t(r,this))}filter(t){return new this.constructor([...this].filter(r=>t(r,this)))}map(t){return new this.constructor([...this].map(r=>t(r,this)))}match(...t){return super.match(...t)}merge(...[t]){return qs(new this.constructor([...this]),t)}}const bx=new ue([Ig(()=>gx)],{parent:fx}),vx=new ue([Cg],{parent:bx});function k(e,t,r){const n=(o,a,{additionalMixins:l=[]}={})=>r.rdfine().factory.createEntity(o,[...e,...l],{initializer:{...t,...a||{}}}),i=(o,a,{additionalMixins:l=[]}={})=>u=>{const h=u||r.clownface(),m=typeof o=="string"?h.namedNode(o):h.node(o);return r.rdfine().factory.createEntity(m,[...e,...l],{initializer:{...t,...a||{}}})},s=(o,{additionalMixins:a=[]}={})=>l=>r.rdfine().factory.createEntity((l||r.clownface()).blankNode(),[...e,...a],{initializer:{...t,...o||{}}});return(o,a,l)=>typeof o=="object"&&"term"in o?n(o,a,l):typeof o=="object"&&o.termType==="NamedNode"||typeof o=="string"?i(o,a,l):s(o,a)}var er=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Yr=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function B(e){let t=class extends e{};return er([C.literal(),Yr("design:type",Object)],t.prototype,"comment",void 0),er([C.resource({as:[B]}),Yr("design:type",Object)],t.prototype,"isDefinedBy",void 0),er([C.literal(),Yr("design:type",Object)],t.prototype,"label",void 0),er([C.resource({values:"array",as:[B]}),Yr("design:type",Array)],t.prototype,"seeAlso",void 0),t=er([D(gt)],t),t}B.appliesTo=gt.Resource;B.createFactory=e=>k([B],{types:[gt.Resource]},e);var vt=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Tt=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function de(e){let t=class extends B(e){};return vt([C.resource({values:"array",as:[de]}),Tt("design:type",Array)],t.prototype,"detail",void 0),vt([C(),Tt("design:type",Object)],t.prototype,"focusNode",void 0),vt([C.literal(),Tt("design:type",Object)],t.prototype,"resultMessage",void 0),vt([C.resource({as:[B]}),Tt("design:type",Object)],t.prototype,"resultPath",void 0),vt([C.resource({implicitTypes:[b.Severity]}),Tt("design:type",Object)],t.prototype,"resultSeverity",void 0),vt([C(),Tt("design:type",Object)],t.prototype,"sourceConstraint",void 0),vt([C.resource({implicitTypes:[b.ConstraintComponent]}),Tt("design:type",Object)],t.prototype,"sourceConstraintComponent",void 0),vt([C.resource({implicitTypes:[b.Shape]}),Tt("design:type",Object)],t.prototype,"sourceShape",void 0),vt([C(),Tt("design:type",Object)],t.prototype,"value",void 0),t=vt([D(b)],t),t}de.appliesTo=b.AbstractResult;de.createFactory=e=>k([B,de],{types:[b.AbstractResult]},e);var Xi=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},ec=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Et(e){let t=class extends B(e){};return Xi([C.literal(),ec("design:type",Object)],t.prototype,"labelTemplate",void 0),Xi([C.resource({implicitTypes:[b.Parameter]}),ec("design:type",Object)],t.prototype,"parameter",void 0),t=Xi([D(b)],t),t}Et.appliesTo=b.Parameterizable;Et.createFactory=e=>k([B,Et],{types:[b.Parameterizable]},e);var Qr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Zi=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function On(e){let t=class extends Et(e){};return Qr([C.resource({implicitTypes:[b.Validator]}),Zi("design:type",Object)],t.prototype,"nodeValidator",void 0),Qr([C.resource({implicitTypes:[b.Validator]}),Zi("design:type",Object)],t.prototype,"propertyValidator",void 0),Qr([C.resource({implicitTypes:[b.Validator]}),Zi("design:type",Object)],t.prototype,"validator",void 0),t=Qr([D(b)],t),t}On.appliesTo=b.ConstraintComponent;On.createFactory=e=>k([Et,On],{types:[b.ConstraintComponent]},e);var rc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},wx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function yt(e){let t=class extends B(e){};return rc([C.resource({values:"array",as:[yt]}),wx("design:type",Array)],t.prototype,"subClassOf",void 0),t=rc([D(gt)],t),t}yt.appliesTo=gt.Class;yt.createFactory=e=>k([B,yt],{types:[gt.Class]},e);var nc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},xx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Gt(e){let t=class extends Et(e){};return nc([C.resource({as:[yt]}),xx("design:type",Object)],t.prototype,"returnType",void 0),t=nc([D(b)],t),t}Gt.appliesTo=b.Function;Gt.createFactory=e=>k([Et,Gt],{types:[b.Function]},e);var ic=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Ax=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function it(e){let t=class extends B(e){};return ic([C.literal(),Ax("design:type",Object)],t.prototype,"jsFunctionName",void 0),t=ic([D(b)],t),t}it.appliesTo=b.JSExecutable;it.createFactory=e=>k([B,it],{types:[b.JSExecutable]},e);var Sx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Rn(e){let t=class extends it(e){};return t=Sx([D(b)],t),t}Rn.appliesTo=b.JSConstraint;Rn.createFactory=e=>k([it,Rn],{types:[b.JSConstraint]},e);var Ex=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Nn(e){let t=class extends it(Gt(e)){};return t=Ex([D(b)],t),t}Nn.appliesTo=b.JSFunction;Nn.createFactory=e=>k([it,Gt,Nn],{types:[b.JSFunction]},e);var sc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Cx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function In(e){let t=class extends B(e){};return sc([C.literal(),Cx("design:type",Object)],t.prototype,"jsLibraryURL",void 0),t=sc([D(b)],t),t}In.appliesTo=b.JSLibrary;In.createFactory=e=>k([B,In],{types:[b.JSLibrary]},e);var oc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Px=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Ct(e){let t=class extends B(e){};return oc([C.resource({implicitTypes:[b.Shape]}),Px("design:type",Object)],t.prototype,"condition",void 0),t=oc([D(b)],t),t}Ct.appliesTo=b.Rule;Ct.createFactory=e=>k([B,Ct],{types:[b.Rule]},e);var Tx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Ln(e){let t=class extends Ct(it(e)){};return t=Tx([D(b)],t),t}Ln.appliesTo=b.JSRule;Ln.createFactory=e=>k([Ct,it,Ln],{types:[b.JSRule]},e);var $x=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Jt(e){let t=class extends B(e){};return t=$x([D(b)],t),t}Jt.appliesTo=b.Target;Jt.createFactory=e=>k([B,Jt],{types:[b.Target]},e);var Ox=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Mn(e){let t=class extends Jt(it(e)){};return t=Ox([D(b)],t),t}Mn.appliesTo=b.JSTarget;Mn.createFactory=e=>k([Jt,it,Mn],{types:[b.JSTarget]},e);var Rx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Wt(e){let t=class extends Et(yt(e)){};return t=Rx([D(b)],t),t}Wt.appliesTo=b.TargetType;Wt.createFactory=e=>k([Et,yt,Wt],{types:[b.TargetType]},e);var Nx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Dn(e){let t=class extends Wt(it(e)){};return t=Nx([D(b)],t),t}Dn.appliesTo=b.JSTargetType;Dn.createFactory=e=>k([Wt,it,Dn],{types:[b.JSTargetType]},e);var Ix=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Pt(e){let t=class extends B(e){};return t=Ix([D(b)],t),t}Pt.appliesTo=b.Validator;Pt.createFactory=e=>k([B,Pt],{types:[b.Validator]},e);var Lx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function jn(e){let t=class extends Pt(it(e)){};return t=Lx([D(b)],t),t}jn.appliesTo=b.JSValidator;jn.createFactory=e=>k([Pt,it,jn],{types:[b.JSValidator]},e);const Mx={BlankNode:b.BlankNode,BlankNodeOrIRI:b.BlankNodeOrIRI,BlankNodeOrLiteral:b.BlankNodeOrLiteral,IRI:b.IRI,IRIOrLiteral:b.IRIOrLiteral,Literal:b.Literal};var Dx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function St(e){let t=class extends e{};return t=Dx([D(pe)],t),t}St.appliesTo=pe.Property;St.createFactory=e=>k([St],{types:[pe.Property]},e);var X=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},rt=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function _t(e){let t=class extends B(e){};return X([C.resource({values:"list",as:[_t]}),rt("design:type",Array)],t.prototype,"and",void 0),X([C.resource({as:[yt]}),rt("design:type",Object)],t.prototype,"class",void 0),X([C.literal({type:Boolean}),rt("design:type",Object)],t.prototype,"closed",void 0),X([C({values:"list"}),rt("design:type",Array)],t.prototype,"in",void 0),X([C.resource({implicitTypes:[b.NodeShape]}),rt("design:type",Object)],t.prototype,"node",void 0),X([C(),rt("design:type",Object)],t.prototype,"nodeKind",void 0),X([C.resource({values:"list",as:[_t]}),rt("design:type",Array)],t.prototype,"or",void 0),X([C.resource({values:"array",implicitTypes:[b.PropertyShape]}),rt("design:type",Array)],t.prototype,"property",void 0),X([C.resource({implicitTypes:[b.Rule]}),rt("design:type",Object)],t.prototype,"rule",void 0),X([C.resource({implicitTypes:[b.Severity]}),rt("design:type",Object)],t.prototype,"severity",void 0),X([C.resource({implicitTypes:[b.SPARQLConstraint]}),rt("design:type",Object)],t.prototype,"sparql",void 0),X([C.resource({implicitTypes:[b.Target]}),rt("design:type",Object)],t.prototype,"target",void 0),X([C.resource({values:"array",as:[yt]}),rt("design:type",Array)],t.prototype,"targetClass",void 0),X([C({values:"array"}),rt("design:type",Array)],t.prototype,"targetNode",void 0),X([C.resource({as:[St]}),rt("design:type",Object)],t.prototype,"targetObjectsOf",void 0),X([C.resource({as:[St]}),rt("design:type",Object)],t.prototype,"targetSubjectsOf",void 0),X([C.resource({values:"list",as:[_t]}),rt("design:type",Array)],t.prototype,"xone",void 0),t=X([D(b)],t),t}_t.appliesTo=b.Shape;_t.createFactory=e=>k([B,_t],{types:[b.Shape]},e);var ac=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},jx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function kn(e){let t=class extends _t(e){};return ac([C({values:"list"}),jx("design:type",Array)],t.prototype,"ignoredProperties",void 0),t=ac([D(b)],t),t}kn.appliesTo=b.NodeShape;kn.createFactory=e=>k([_t,kn],{types:[b.NodeShape]},e);var kx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Bn(e){let t=class extends yt(e){};return t=kx([D(gt)],t),t}Bn.appliesTo=gt.Datatype;Bn.createFactory=e=>k([yt,Bn],{types:[gt.Datatype]},e);var V=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},J=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Be(e){let t=class extends _t(e){};return V([C.resource({path:b.equals,as:[St]}),J("design:type",Object)],t.prototype,"_equals",void 0),V([C.resource({as:[Bn]}),J("design:type",Object)],t.prototype,"datatype",void 0),V([C(),J("design:type",Object)],t.prototype,"defaultValue",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"description",void 0),V([C.resource({as:[St]}),J("design:type",Object)],t.prototype,"disjoint",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"flags",void 0),V([C.resource({implicitTypes:[b.PropertyGroup]}),J("design:type",Object)],t.prototype,"group",void 0),V([C({values:"array"}),J("design:type",Array)],t.prototype,"hasValue",void 0),V([C.literal({values:"list"}),J("design:type",Array)],t.prototype,"languageIn",void 0),V([C.resource({as:[St]}),J("design:type",Object)],t.prototype,"lessThan",void 0),V([C.resource({as:[St]}),J("design:type",Object)],t.prototype,"lessThanOrEquals",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxCount",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxExclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxInclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"maxLength",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minCount",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minExclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minInclusive",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"minLength",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"name",void 0),V([C.literal({type:Number}),J("design:type",Object)],t.prototype,"order",void 0),V([C.resource({values:["list","single"],as:[B]}),J("design:type",Object)],t.prototype,"path",void 0),V([C.literal(),J("design:type",Object)],t.prototype,"pattern",void 0),V([C.literal({type:Boolean}),J("design:type",Object)],t.prototype,"uniqueLang",void 0),t=V([D(b)],t),t}Be.appliesTo=b.PropertyShape;Be.createFactory=e=>k([_t,Be],{types:[b.PropertyShape]},e);var lc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Bx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Fn(e){let t=class extends Be(e){};return lc([C.literal({type:Boolean}),Bx("design:type",Object)],t.prototype,"optional",void 0),t=lc([D(b)],t),t}Fn.appliesTo=b.Parameter;Fn.createFactory=e=>k([Be,Fn],{types:[b.Parameter]},e);var ts=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},cc=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function zn(e){let t=class extends B(e){};return ts([C.literal(),cc("design:type",Object)],t.prototype,"namespace",void 0),ts([C.literal(),cc("design:type",Object)],t.prototype,"prefix",void 0),t=ts([D(b)],t),t}zn.appliesTo=b.PrefixDeclaration;zn.createFactory=e=>k([B,zn],{types:[b.PrefixDeclaration]},e);var uc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Fx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Un(e){let t=class extends B(e){};return uc([C.literal({type:Number}),Fx("design:type",Object)],t.prototype,"order",void 0),t=uc([D(b)],t),t}Un.appliesTo=b.PropertyGroup;Un.createFactory=e=>k([B,Un],{types:[b.PropertyGroup]},e);var Kr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},es=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Hn(e){let t=class extends B(e){};return Kr([C.resource({as:[St]}),es("design:type",Object)],t.prototype,"annotationProperty",void 0),Kr([C(),es("design:type",Object)],t.prototype,"annotationValue",void 0),Kr([C.literal(),es("design:type",Object)],t.prototype,"annotationVarName",void 0),t=Kr([D(b)],t),t}Hn.appliesTo=b.ResultAnnotation;Hn.createFactory=e=>k([B,Hn],{types:[b.ResultAnnotation]},e);var zx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function qn(e){let t=class extends B(e){};return t=zx([D(b)],t),t}qn.appliesTo=b.Severity;qn.createFactory=e=>k([B,qn],{types:[b.Severity]},e);var rs=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},dc=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function $r(e){let t=class extends e{};return rs([C(),dc("design:type",Object)],t.prototype,"first",void 0),rs([C.resource({as:[$r]}),dc("design:type",Object)],t.prototype,"rest",void 0),t=rs([D(pe)],t),t}$r.appliesTo=pe.List;$r.createFactory=e=>k([$r],{types:[pe.List]},e);var te=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},ve=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function kd(e){let t=class extends e{};return te([C.resource({as:[B]}),ve("design:type",Object)],t.prototype,"annotatedProperty",void 0),te([C.resource({as:[B]}),ve("design:type",Object)],t.prototype,"annotatedSource",void 0),te([C.resource({as:[B]}),ve("design:type",Object)],t.prototype,"annotatedTarget",void 0),te([C.resource({as:[B]}),ve("design:type",Object)],t.prototype,"deprecated",void 0),te([C.resource({as:[$r]}),ve("design:type",Object)],t.prototype,"members",void 0),te([C.resource({as:[B]}),ve("design:type",Object)],t.prototype,"versionInfo",void 0),t=te([D(Lr)],t),t}kd.appliesTo=gt.Resource;var we=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},rr=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Rt(e){let t=class extends kd(B(e)){};return we([C.resource({as:[Rt]}),rr("design:type",Object)],t.prototype,"backwardCompatibleWith",void 0),we([C.resource({as:[Rt]}),rr("design:type",Object)],t.prototype,"imports",void 0),we([C.resource({as:[Rt]}),rr("design:type",Object)],t.prototype,"incompatibleWith",void 0),we([C.resource({as:[Rt]}),rr("design:type",Object)],t.prototype,"priorVersion",void 0),we([C.resource({as:[Rt]}),rr("design:type",Object)],t.prototype,"versionIRI",void 0),t=we([D(Lr)],t),t}Rt.appliesTo=Lr.Ontology;Rt.createFactory=e=>k([B,Rt],{types:[Lr.Ontology]},e);var hc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Ux=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ft(e){let t=class extends B(e){};return hc([C.resource({as:[Rt]}),Ux("design:type",Object)],t.prototype,"prefixes",void 0),t=hc([D(b)],t),t}ft.appliesTo=b.SPARQLExecutable;ft.createFactory=e=>k([B,ft],{types:[b.SPARQLExecutable]},e);var pc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Hx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function mt(e){let t=class extends ft(e){};return pc([C.literal(),Hx("design:type",Object)],t.prototype,"ask",void 0),t=pc([D(b)],t),t}mt.appliesTo=b.SPARQLAskExecutable;mt.createFactory=e=>k([ft,mt],{types:[b.SPARQLAskExecutable]},e);var qx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Vn(e){let t=class extends Pt(mt(e)){};return t=qx([D(b)],t),t}Vn.appliesTo=b.SPARQLAskValidator;Vn.createFactory=e=>k([Pt,mt,Vn],{types:[b.SPARQLAskValidator]},e);var fc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Vx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ht(e){let t=class extends ft(e){};return fc([C.literal(),Vx("design:type",Object)],t.prototype,"select",void 0),t=fc([D(b)],t),t}ht.appliesTo=b.SPARQLSelectExecutable;ht.createFactory=e=>k([ft,ht],{types:[b.SPARQLSelectExecutable]},e);var Gx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Gn(e){let t=class extends ht(e){};return t=Gx([D(b)],t),t}Gn.appliesTo=b.SPARQLConstraint;Gn.createFactory=e=>k([ht,Gn],{types:[b.SPARQLConstraint]},e);var mc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Jx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Fe(e){let t=class extends ft(e){};return mc([C.literal(),Jx("design:type",Object)],t.prototype,"construct",void 0),t=mc([D(b)],t),t}Fe.appliesTo=b.SPARQLConstructExecutable;Fe.createFactory=e=>k([ft,Fe],{types:[b.SPARQLConstructExecutable]},e);var Wx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Jn(e){let t=class extends ht(mt(Gt(e))){};return t=Wx([D(b)],t),t}Jn.appliesTo=b.SPARQLFunction;Jn.createFactory=e=>k([ht,mt,Gt,Jn],{types:[b.SPARQLFunction]},e);var Yx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Wn(e){let t=class extends Fe(Ct(e)){};return t=Yx([D(b)],t),t}Wn.appliesTo=b.SPARQLRule;Wn.createFactory=e=>k([Fe,Ct,Wn],{types:[b.SPARQLRule]},e);var _c=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Qx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Yn(e){let t=class extends Pt(ht(e)){};return _c([C.resource({implicitTypes:[b.ResultAnnotation]}),Qx("design:type",Object)],t.prototype,"resultAnnotation",void 0),t=_c([D(b)],t),t}Yn.appliesTo=b.SPARQLSelectValidator;Yn.createFactory=e=>k([Pt,ht,Yn],{types:[b.SPARQLSelectValidator]},e);var Kx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Qn(e){let t=class extends Jt(ht(mt(e))){};return t=Kx([D(b)],t),t}Qn.appliesTo=b.SPARQLTarget;Qn.createFactory=e=>k([Jt,ht,mt,Qn],{types:[b.SPARQLTarget]},e);var Xx=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function Kn(e){let t=class extends Wt(ht(mt(e))){};return t=Xx([D(b)],t),t}Kn.appliesTo=b.SPARQLTargetType;Kn.createFactory=e=>k([Wt,ht,mt,Kn],{types:[b.SPARQLTargetType]},e);var yc=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},Zx=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Xn(e){let t=class extends ft(e){};return yc([C.literal(),Zx("design:type",Object)],t.prototype,"update",void 0),t=yc([D(b)],t),t}Xn.appliesTo=b.SPARQLUpdateExecutable;Xn.createFactory=e=>k([ft,Xn],{types:[b.SPARQLUpdateExecutable]},e);var Xr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},ns=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function Zn(e){let t=class extends Ct(e){};return Xr([C(),ns("design:type",Object)],t.prototype,"object",void 0),Xr([C(),ns("design:type",Object)],t.prototype,"predicate",void 0),Xr([C(),ns("design:type",Object)],t.prototype,"subject",void 0),t=Xr([D(b)],t),t}Zn.appliesTo=b.TripleRule;Zn.createFactory=e=>k([Ct,Zn],{types:[b.TripleRule]},e);var Zr=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},is=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)};function ti(e){let t=class extends B(e){};return Zr([C.literal({type:Boolean}),is("design:type",Object)],t.prototype,"conforms",void 0),Zr([C.resource({values:"array",implicitTypes:[b.ValidationResult]}),is("design:type",Array)],t.prototype,"result",void 0),Zr([C.literal({type:Boolean}),is("design:type",Object)],t.prototype,"shapesGraphWellFormed",void 0),t=Zr([D(b)],t),t}ti.appliesTo=b.ValidationReport;ti.createFactory=e=>k([B,ti],{types:[b.ValidationReport]},e);var tA=function(e,t,r,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};function ei(e){let t=class extends de(e){};return t=tA([D(b)],t),t}ei.appliesTo=b.ValidationResult;ei.createFactory=e=>k([de,ei],{types:[b.ValidationResult]},e);const eA=Object.freeze(Object.defineProperty({__proto__:null,AbstractResultMixin:de,ConstraintComponentMixin:On,FunctionMixin:Gt,JSConstraintMixin:Rn,JSExecutableMixin:it,JSFunctionMixin:Nn,JSLibraryMixin:In,JSRuleMixin:Ln,JSTargetMixin:Mn,JSTargetTypeMixin:Dn,JSValidatorMixin:jn,NodeKindEnum:Mx,NodeShapeMixin:kn,ParameterMixin:Fn,ParameterizableMixin:Et,PrefixDeclarationMixin:zn,PropertyGroupMixin:Un,PropertyShapeMixin:Be,ResultAnnotationMixin:Hn,RuleMixin:Ct,SPARQLAskExecutableMixin:mt,SPARQLAskValidatorMixin:Vn,SPARQLConstraintMixin:Gn,SPARQLConstructExecutableMixin:Fe,SPARQLExecutableMixin:ft,SPARQLFunctionMixin:Jn,SPARQLRuleMixin:Wn,SPARQLSelectExecutableMixin:ht,SPARQLSelectValidatorMixin:Yn,SPARQLTargetMixin:Qn,SPARQLTargetTypeMixin:Kn,SPARQLUpdateExecutableMixin:Xn,SeverityMixin:qn,ShapeMixin:_t,TargetMixin:Jt,TargetTypeMixin:Wt,TripleRuleMixin:Zn,ValidationReportMixin:ti,ValidationResultMixin:ei,ValidatorMixin:Pt},Symbol.toStringTag,{value:"Module"}));class rA{init(){this.rdfine.sh=this._initVocabulary(eA)}}const ss=new ue([rA],{parent:vx}),nA=ii({state:{display:"tree",conforms:void 0,results:[]},reducers:{report(e,t){const r=t.results.map(ss.clownface);return{...e,results:r,conforms:t.conforms,report:t}},display(e,t){return{...e,display:t}}},effects(e){const t=e.getDispatch();async function r(){const{shapesGraph:n,dataGraph:i}=e.getState();if(n.quads&&i.quads){const s=(await wt(async()=>{const{default:a}=await import("./index-D7E5t0pT.js");return{default:a}},__vite__mapDeps([0,1]))).default,o=new s(ss.dataset(n.quads));t.validation.report(await o.validate(ss.dataset(i.quads)))}}return{"dataGraph/parsed":r,"shapesGraph/parsed":r}}}),iA={rif:"http://www.w3.org/2007/rif#",v:"http://rdf.data-vocabulary.org/#",wdr:"http://www.w3.org/2007/05/powder#",xml:"http://www.w3.org/XML/1998/namespace/"},sA={acl:"http://www.w3.org/ns/auth/acl#",as:"https://www.w3.org/ns/activitystreams#",bibo:"http://purl.org/ontology/bibo/",cc:"http://creativecommons.org/ns#",cert:"http://www.w3.org/ns/auth/cert#",cnt:"http://www.w3.org/2011/content#",constant:"http://qudt.org/vocab/constant/",crm:"http://www.cidoc-crm.org/cidoc-crm/",csvw:"http://www.w3.org/ns/csvw#",ctag:"http://commontag.org/ns#",cur:"http://qudt.org/vocab/currency/","dash-sparql":"http://datashapes.org/sparql#",dash:"http://datashapes.org/dash#",dbo:"http://dbpedia.org/ontology/",dc11:"http://purl.org/dc/elements/1.1/",dcam:"http://purl.org/dc/dcam/",dcat:"http://www.w3.org/ns/dcat#",dcmitype:"http://purl.org/dc/dcmitype/",dcterms:"http://purl.org/dc/terms/",dig:"http://www.ics.forth.gr/isl/CRMdig/",discipline:"http://qudt.org/vocab/discipline/",doap:"http://usefulinc.com/ns/doap#",dprod:"https://ekgf.github.io/dprod/",dpv:"http://www.w3.org/ns/dpv#",dqv:"http://www.w3.org/ns/dqv#",dtype:"http://www.linkedmodel.org/schema/dtype#",duv:"http://www.w3.org/ns/duv#",earl:"http://www.w3.org/ns/earl#",ebucore:"http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",exif:"http://www.w3.org/2003/12/exif/ns#",foaf:"http://xmlns.com/foaf/0.1/",frbr:"http://purl.org/vocab/frbr/core#",geo:"http://www.opengis.net/ont/geosparql#",geof:"http://www.opengis.net/def/function/geosparql/",geor:"http://www.opengis.net/def/rule/geosparql/",gml:"http://www.opengis.net/ont/gml#",gn:"http://www.geonames.org/ontology#",gr:"http://purl.org/goodrelations/v1#",grddl:"http://www.w3.org/2003/g/data-view#",gs1:"https://gs1.org/voc/",gtfs:"http://vocab.gtfs.org/terms#",http:"http://www.w3.org/2011/http#",hydra:"http://www.w3.org/ns/hydra/core#",ical:"http://www.w3.org/2002/12/cal/icaltzd#",la:"https://linked.art/ns/terms/",ldp:"http://www.w3.org/ns/ldp#",list:"http://www.w3.org/2000/10/swap/list#",locn:"http://www.w3.org/ns/locn#",log:"http://www.w3.org/2000/10/swap/log#",lvont:"http://lexvo.org/ontology#",m4i:"http://w3id.org/nfdi4ing/metadata4ing#",ma:"http://www.w3.org/ns/ma-ont#",mads:"http://www.loc.gov/mads/rdf/v1#",math:"http://www.w3.org/2000/10/swap/math#",oa:"http://www.w3.org/ns/oa#",og:"http://ogp.me/ns#",oidc:"http://www.w3.org/ns/solid/oidc#",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",pim:"http://www.w3.org/ns/pim/space#",prefix:"http://qudt.org/vocab/prefix/",prov:"http://www.w3.org/ns/prov#",qb:"http://purl.org/linked-data/cube#",qkdv:"http://qudt.org/vocab/dimensionvector/",quantitykind:"http://qudt.org/vocab/quantitykind/",qudt:"http://qudt.org/schema/qudt/",rdau:"http://rdaregistry.info/Elements/u/",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfa:"http://www.w3.org/ns/rdfa#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",rev:"http://purl.org/stuff/rev#",rico:"https://www.ica.org/standards/RiC/ontology#",rr:"http://www.w3.org/ns/r2rml#",rss:"http://purl.org/rss/1.0/",schema:"http://schema.org/",sd:"http://www.w3.org/ns/sparql-service-description#",sdmx:"http://purl.org/linked-data/sdmx#",sem:"http://semanticweb.cs.vu.nl/2009/11/sem/",set:"http://www.w3.org/2000/10/swap/set#",sf:"http://www.opengis.net/ont/sf#",sh:"http://www.w3.org/ns/shacl#",shex:"http://www.w3.org/ns/shex#",shsh:"http://www.w3.org/ns/shacl-shacl#",sioc:"http://rdfs.org/sioc/ns#",skos:"http://www.w3.org/2004/02/skos/core#",skosxl:"http://www.w3.org/2008/05/skos-xl#",solid:"http://www.w3.org/ns/solid/terms#",sosa:"http://www.w3.org/ns/sosa/",sou:"http://qudt.org/vocab/sou/",ssn:"http://www.w3.org/ns/ssn/",stat:"http://www.w3.org/ns/posix/stat#",string:"http://www.w3.org/2000/10/swap/string#",test:"http://www.w3.org/2006/03/test-description#",time:"http://www.w3.org/2006/time#",unit:"http://qudt.org/vocab/unit/",vaem:"http://www.linkedmodel.org/schema/vaem#",vann:"http://purl.org/vocab/vann/",vcard:"http://www.w3.org/2006/vcard/ns#",void:"http://rdfs.org/ns/void#",vs:"http://www.w3.org/2003/06/sw-vocab-status/ns#",vso:"http://purl.org/vso/ns#",wdrs:"http://www.w3.org/2007/05/powder-s#",wgs:"http://www.w3.org/2003/01/geo/wgs84_pos#",xhv:"http://www.w3.org/1999/xhtml/vocab#",xkos:"http://rdf-vocabulary.ddialliance.org/xkos#",xsd:"http://www.w3.org/2001/XMLSchema#"},Bd={...sA,...iA};function oA(e,t={}){const r={...Bd,...t},n=Array.from(Object.entries(r)).filter(([,i])=>e.startsWith(i));if(n.length){n.sort(([,s],[,o])=>o.length-s.length);const i=n[0];return e.replace(new RegExp(`^${i[1]}`),`${i[0]}:`)}return""}const Gs=new Ro([Ir,Bo]);class aA{evaluateTerm(t,r){switch(t.termType){case"Literal":return this.evaluateLiteral(t,r);case"NamedNode":return this.evaluateNamedNode(t,r);case"BlankNode":return this.evaluateBlankNode(t,r);case"Variable":return this.evaluateVariable(t,r)}return{value:"",prefixes:[]}}}function lA(e){return Symbol.iterator in Object(e)&&typeof e!="string"}class cA{constructor({strings:t,values:r,tag:n,strategy:i,defaultOptions:s}){this.strings=t,this.values=r,this._tag=n,this.__strategy=i,this.__defaultOptions=s}toString({env:t=Gs,...r}={}){let n={...this.__defaultOptions(t),env:t};r&&(n={...n,...r});const{value:i,prefixes:s}=this._toPartialString(n);return this.__strategy.getFinalString(i,s,n)}_toPartialString(t){const r=t.env||Gs,n=new Set,i=this.strings.length-1;let s="";for(let o=0;o<i;o++){let a=null;s+=this.strings[o];const l=this.values[o];if(!(typeof l>"u"||l===null)){if(typeof l=="boolean")a=this.__strategy.evaluateLiteral(r.literal(l.toString(),At.boolean),t);else if(typeof l=="number"){const u=Number.isInteger(l)?At.integer:At.decimal;a=this.__strategy.evaluateLiteral(r.literal(l.toString(),u),t)}else if(l instanceof Date)a=this.__strategy.evaluateLiteral(r.literal(l.toISOString(),At.dateTime),t);else if(typeof l=="object"){if("_toPartialString"in l)a=l._toPartialString(t);else if("subject"in l)a=this.__strategy.evaluateQuad(l,t);else if("match"in l)a=this.__strategy.evaluateDataset(l,t);else if("termType"in l)a=this.__strategy.evaluateTerm(l,t);else if(lA(l)){const[u,...h]=l;a=this._tag`${u}`._toPartialString(t);for(const m of h){const y=this._tag`${m}`._toPartialString(t);a.value+=`
${y.value}`,a.prefixes=[...a.prefixes,...y.prefixes]}}}a===null&&(a={value:l.toString(),prefixes:[]}),s+=a.value,[...a.prefixes].forEach(u=>n.add(u))}}return s+=this.strings[i],{value:s,prefixes:n}}}function Fd(e={}){return Object.fromEntries(Object.entries(e).map(([t,r])=>[t,typeof r=="string"?r:r().value]))}function uA(e,t){return[...e].filter(r=>r in t).map(r=>[r,t[r]])}const dA=new RegExp(`["\\\\
\r]`),hA=new RegExp(`["\\\\
\r]`,"g"),pA={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function fA(e){return pA[e]}function mA(e){return dA.test(e)?e.replace(hA,fA):e}function _A(e){return`_:${e.value}`}function yA(e){return`<${e.value}>`}function zd(e){return`"${mA(e.value)}"`}function gA(e){const t=zd(e);return e.language?`${t}@${e.language}`:e.datatype&&!e.datatype.equals(At.string)?`${t}^^${yA(e.datatype)}`:t}function bA(e){return _A(e)}function Ud(e,{base:t="",prefixes:r={},noPrefixedNames:n}){const i=typeof t=="string"?t:t.value,s=new RegExp("^"+i);let o;return n!==!0&&(o=oA(e.value,Fd(r)))?{value:o.replaceAll(/[/#]/g,a=>`\\${a}`),prefixes:[o.split(":")[0]]}:{value:`<${e.value.replace(s,"")}>`,prefixes:[]}}const vA=new Ld([[At.integer,/^-?[0-9]+$/],[At.decimal,/^-?[0-9]+\.[0-9]+$/],[At.boolean,/^(true|false)$/]]);function wA(e,{base:t="",prefixes:r={}}){if(!e.language&&e.datatype){const n=vA.get(e.datatype);if(n&&n.test(e.value))return{value:e.value,prefixes:[]};if(!e.datatype.equals(At.string)){const i=Ud(e.datatype,{base:t,prefixes:r});return{value:`${zd(e)}^^${i.value}`,prefixes:i.prefixes}}}return{value:gA(e),prefixes:[]}}function xA(e,t){return uA(e,t).map(([r,n])=>`@prefix ${r}: <${n}> .`)}class AA extends aA{evaluateBlankNode(t){return{value:bA(t),prefixes:[]}}evaluateLiteral(t,r){return wA(t,r)}evaluateNamedNode(t,r){return Ud(t,r)}evaluateVariable(){throw new Error("Turtle cannot serialize variables")}evaluateDataset(t,r){const n=[...t.match(null,null,null,r.graph)];return r.cheapCompression?this.__evaluateQuads(n,r):[...n.reduce((s,o)=>{let a=s.get(o.subject.value);return a||(a=new Set,s.set(o.subject.value,a)),a.add(o),s},new Map).values()].reduce((s,o,a)=>{const l=this.__evaluateQuads([...o],r),u=a?`
`:"";return{value:`${s.value}${u}${l.value}`,prefixes:[...s.prefixes,...l.prefixes]}},{value:"",prefixes:[]})}evaluateQuad(t,r,{terminate:n=!0,newLineAfterSubject:i=!1}={}){if(!r.graph.equals(t.graph))return{value:"",prefixes:[]};const s=this.evaluateTerm(t.subject,r),o=this.evaluateTerm(t.predicate,r),a=this.evaluateTerm(t.object,r),l=i?`
   `:" ";return{value:`${s.value}${l}${o.value} ${a.value}${n?" .":""}`,prefixes:[...s.prefixes,...o.prefixes,...a.prefixes]}}getFinalString(t,r,n){const i=n.directives||typeof n.directives>"u";let s=[];if(i){if(s=xA(r,{...Bd,...Fd(n.prefixes)}),n.base){const o=typeof n.base=="string"?n.base:n.base.value;s.push(`@base <${o}> .`)}s.length>0&&s.push(`
`)}return`${s.join(`
`)}${t}`}__evaluateQuads(t,r){if(t.length===0)return{value:"",prefixes:[]};let n=t;r.cheapCompression||(n=t.sort((s,o)=>s.predicate.value.localeCompare(o.predicate.value)));const i=n.reduce((s,o)=>{if(!s.previous)return{...this.evaluateQuad(o,r,{terminate:!1,newLineAfterSubject:!0}),previous:o};if(s.previous.subject.equals(o.subject)&&s.previous.predicate.equals(o.predicate))return{...this.__appendObject(s,o,r),previous:o};if(s.previous.subject.equals(o.subject))return{...this.__appendPredicateObject(s,o,r),previous:o};const a=this.evaluateQuad(o,r,{terminate:!1,newLineAfterSubject:!0});return{value:s.value+` .
`+a.value,prefixes:[...s.prefixes,...a.prefixes],previous:o}},{value:"",prefixes:[]});return{...i,value:i.value+" ."}}__appendPredicateObject(t,r,n){const i=this.evaluateTerm(r.predicate,n),s=this.evaluateTerm(r.object,n);return{value:`${t.value} ;
   ${i.value} ${s.value}`,prefixes:[...t.prefixes,...i.prefixes,...s.prefixes]}}__appendObject(t,r,n){const i=this.evaluateTerm(r.object,n);return{value:`${t.value} ,
      ${i.value}`,prefixes:[...t.prefixes,...i.prefixes]}}}const Hd=(e,...t)=>new cA({strings:e,values:t,tag:Hd,strategy:new AA,defaultOptions:(r=Gs)=>({directives:!0,graph:r.defaultGraph(),cheapCompression:!1})});async function gc(e,t,r,n){return n?n.dataset(e).serialize({format:t,prefixes:r}):Hd`${e}`.toString()}async function SA(e,t,{instanceUrl:r="https://shacl-playground.zazuko.com",dataGraphFormat:n="text/turtle",shapesGraphFormat:i="text/turtle",prefixes:s=[],dataGraphPrefixes:o=[],dataGraphCustomPrefixes:a,shapesGraphPrefixes:l=[],shapesGraphCustomPrefixes:u,env:h}={}){const m=new URL(r),y=new URLSearchParams([["shapesGraph",await gc(e,n,[...s,...o],h)],["dataGraph",await gc(t,i,[...s,...l],h)],["shapesGraphFormat",i],["dataGraphFormat",n]]);return a&&y.set("dataGraphCustomPrefixes",JSON.stringify(a)),u&&y.set("shapesGraphCustomPrefixes",JSON.stringify(u)),m.hash=y.toString(),m.toString()}const qd=new URL(window.location.href),EA=Object.fromEntries([...new URLSearchParams(qd.hash.substr(1)).entries()]),CA=ii({state:{page:3,shaperone:new URL("https://forms.hypermedia.app/playground/").toString(),sharingLink:qd.toString(),sharingParams:EA},reducers:{switchPage(e,t){return{...e,page:t}},setShaperoneParam(e,{key:t,value:r}){const n=new URL(e.shaperone),i=new URLSearchParams(n.hash.substr(1));return i.set(t,r),n.hash=i.toString(),{...e,shaperone:n.toString()}},setSharingLink(e,t){return{...e,sharingLink:t}},setSharingParam(e,{key:t,value:r}){const{shapesGraph:n,dataGraph:i,...s}=e.sharingParams||{};return{...e,sharingParams:{shapesGraph:n,dataGraph:i,...s,[t]:r}}}},effects(e){const t=e.getDispatch();return{switchPage(r){t.playground.setSharingParam({key:"page",value:r})},async setSharingParam(){const{shapesGraph:r,dataGraph:n,...i}=e.getState().playground.sharingParams,s=await SA(r,n,{...i,instanceUrl:window.location.href});t.playground.setSharingLink(s)},"dataGraph/parsed":function({serialized:r}){const{format:n}=e.getState().dataGraph;t.playground.setShaperoneParam({key:"resource",value:r}),t.playground.setShaperoneParam({key:"resourceFormat",value:n}),t.playground.setSharingParam({key:"dataGraph",value:r}),t.playground.setSharingParam({key:"dataGraphFormat",value:n})},"shapesGraph/parsed":function({serialized:r}){const{format:n}=e.getState().shapesGraph;t.playground.setShaperoneParam({key:"shapes",value:r}),t.playground.setShaperoneParam({key:"shapesFormat",value:n}),t.playground.setSharingParam({key:"shapesGraph",value:r}),t.playground.setSharingParam({key:"shapesGraphFormat",value:n})},"dataGraph/setCustomPrefix":function(){t.playground.setSharingParam({key:"dataGraphCustomPrefixes",value:e.getState().dataGraph.customPrefixes})},"shapesGraph/setCustomPrefix":function(){t.playground.setSharingParam({key:"shapesGraphCustomPrefixes",value:e.getState().shapesGraph.customPrefixes})},restoreState(){const r=new URL(document.location.toString()),n=new URLSearchParams(r.hash.substr(1));function i(y){return n.get(y)||r.searchParams.get(y)}const s=i("page"),o=i("shapesGraph"),a=i("shapesGraphFormat"),l=i("shapesGraphCustomPrefixes"),u=i("dataGraph"),h=i("dataGraphFormat"),m=i("dataGraphCustomPrefixes");s&&t.playground.switchPage(Number.parseInt(s,10)),o&&t.shapesGraph.setGraph(o),a&&t.shapesGraph.changeFormat(a),l&&t.shapesGraph.replaceCustomPrefixes(JSON.parse(l)),u&&t.dataGraph.setGraph(u),h&&t.dataGraph.changeFormat(h),m&&t.dataGraph.replaceCustomPrefixes(JSON.parse(m)),[...r.searchParams.keys()].forEach(y=>r.searchParams.delete(y)),r.hash="",window.history.replaceState(null,"",r.toString())}}}}),PA=Object.freeze(Object.defineProperty({__proto__:null,dataGraph:Gy,playground:CA,shapesGraph:qy,validation:nA},Symbol.toStringTag,{value:"Module"})),os=qh(Hh({models:PA}),{persist(e){const{dataGraph:{quads:t,...r},shapesGraph:{quads:n,...i},validation:s,...o}=e;return{shapesGraph:i,dataGraph:r,...o}}}),tn={SHAPES:0,DATA:1,REPORT:2,ABOUT:3},kt={DataGraph:"Data Graph",ShapesGraph:"Shapes Graph",Report:"Validation Report"};class TA extends Fh(os,ar){static get styles(){return yh`
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
    `}static get properties(){return{page:{type:Number},reportClass:{type:String},reportIcon:{type:String},sharingLink:{type:String},sharingLinkShortened:{type:Boolean},sharingDialogOpen:{type:Boolean},__wideDisplay:{type:Boolean,reflect:!0,attribute:"wide"}}}constructor(){super(),this.reportIcon="vaadin:bug-o"}connectedCallback(){super.connectedCallback(),wt(()=>import("./vaadin-drawer-toggle-WRyPAw9M.js"),__vite__mapDeps([2,3])),wt(()=>import("./iron-icon-CfM687WV.js").then(t=>t.i),[]),wt(()=>import("./vaadin-icon-NYlrVEaj.js"),[]),wt(()=>import("./vaadin-dialog-DkC0iNYf.js"),__vite__mapDeps([4,5])),wt(()=>import("./vaadin-icons-DHFea2Hi.js"),__vite__mapDeps([6,7])),wt(()=>import("./graph-editor-B_ye_JQA.js"),__vite__mapDeps([8,9,10,3,5])),wt(()=>import("./index-B1ww7QDV.js"),[]),os.dispatch.playground.restoreState()}render(){return Je`
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
          <vaadin-tab theme="icon-on-top" title="${kt.ShapesGraph}">
            <iron-icon icon="vaadin:cluster"></iron-icon>
            <span>${kt.ShapesGraph}</span>
          </vaadin-tab>
          <vaadin-tab theme="icon-on-top" title="${kt.DataGraph}">
            <iron-icon icon="vaadin:database"></iron-icon>
            <span>${kt.DataGraph}</span>
          </vaadin-tab>
          <vaadin-tab
            class="report ${this.reportClass}"
            theme="icon-on-top"
            title="${kt.Report}"
          >
            <iron-icon icon="${this.reportIcon}"></iron-icon>
            <span>${kt.Report}</span>
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
    `}__renderWide(){wt(()=>import("./validation-report-CbPH27Rt.js"),__vite__mapDeps([11,10,3]));const t=this.page===tn.ABOUT?1:0;return Je`
      <iron-pages selected="${t}">
        <vaadin-split-layout id="top-split" orientation="vertical">
          <vaadin-split-layout style="height: 60%">
            <graph-editor
              style="width: 50%"
              model="shapesGraph"
              @focus="${()=>this.__pageSelected(tn.SHAPES)}"
            >
              <h2 slot="header">${kt.ShapesGraph}</h2>
            </graph-editor>
            <graph-editor
              style="width: 50%"
              model="dataGraph"
              @focus="${()=>this.__pageSelected(tn.DATA)}"
            >
              <h2 slot="header">${kt.DataGraph}</h2>
            </graph-editor>
          </vaadin-split-layout>
          <validation-report
            style="height: 40%"
            @click="${()=>this.__pageSelected(tn.REPORT)}"
          ></validation-report>
        </vaadin-split-layout>
        <section>${this.__renderAbout()}</section>
      </iron-pages>
    `}__renderNarrow(){return Je`
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
    `}__renderAbout(){return Je`
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
    `}__renderSharingDialog(t){return r=>{let n;r.firstElementChild?n=r.firstElementChild:(n=document.createElement("div"),r.appendChild(n)),Pc(Je`
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
        `,n),n.querySelector("vaadin-text-field")?.focus()}}mapState(t){let r="";return t.validation.conforms?r="valid":t.validation.conforms===!1&&(r="invalid"),{reportClass:r,reportIcon:t.validation.conforms?"vaadin:bug-o":"vaadin:bug",page:t.playground.page,shaperoneLink:t.playground.shaperone,sharingLink:t.playground.sharingLink,sharingLinkShortened:!1}}__pageSelected(t){os.dispatch.playground.switchPage(t)}__reset(){localStorage.removeItem(document.location.hostname),document.location.reload()}__loadPage(t){t.detail.item.id==="validation-report"&&wt(()=>import("./validation-report-CbPH27Rt.js"),__vite__mapDeps([11,10,3]))}__openPlayground(){window.open(this.shaperoneLink,"shaperone")}__openCode(){window.open("https://github.com/zazuko/shacl-playground","_blank")}__openSharingDialog(){this.sharingDialogOpen=!0}async __shortenSharingLink(){this.sharingLinkShortened||(this.sharingLinkShortened=!0,this.sharingLink=await My.shorten(this.sharingLink))}__setWideDisplay(t){this.__wideDisplay=t.detail.value}}customElements.define("shacl-playground",TA);export{Ir as $,tt as A,il as B,fo as C,sp as D,He as E,Nt as F,Pc as G,wp as H,Am as I,Xc as J,Ru as K,En as L,aA as M,gA as N,yA as O,Dt as P,_A as Q,cA as R,_o as S,Me as T,Gs as U,Gm as V,Vm as W,Wm as X,yx as Y,Ro as Z,wt as _,HA as a,Do as a0,Nd as a1,Bo as a2,A as a3,tx as a4,ze as a5,Ld as a6,At as a7,Zg as a8,pe as a9,dh as aa,ch as ab,Bt as ac,Ee as ad,uh as ae,ss as af,oA as ag,ih as ah,Hl as ai,$A as aj,Lg as ak,nh as al,Mg as am,Ym as b,Ue as c,Cu as d,JA as e,op as f,hi as g,he as h,lt as i,xt as j,cS as k,_m as l,Km as m,et as n,Iu as o,Qm as p,Pm as q,Lt as r,ar as s,yh as t,Bd as u,vu as v,um as w,Je as x,Fh as y,os as z};
