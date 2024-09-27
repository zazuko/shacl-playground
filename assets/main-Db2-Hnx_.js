import{a3 as g}from"./index-DpEFpdLU.js";import{a as z}from"./rdf-editor-CmXWlMyL.js";import{m as $}from"./main-znShvKfx.js";function C(a,r){for(var i=0;i<r.length;i++){const e=r[i];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in a)){const t=Object.getOwnPropertyDescriptor(e,s);t&&Object.defineProperty(a,s,t.get?t:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}const b=z,D=$,{c1:c,namedNode:j,$_PREFIX_CACHE:m}=b,v=/[&"<>']/g,M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"},k=/^xml/i,f=a=>a.replace(v,r=>M[r]),L=/([A-Za-z_][A-Za-z_.0-9-]*)$/,X=/([A-Za-z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}][A-Za-z_.0-9\-\u00b7\u203f-\u2040\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]*$)/u;function x(a,r,i,e){if(e.isNamedNode)i+=' rdf:resource="'+f(e.value)+'"/>';else if(e.isLiteral)e.isLanguaged?i+=' xml:lang="'+e.language+'"':e.isDatatyped&&(i+=' rdf:datatype="'+f(e.datatype.value)+'"'),i+=">"+f(e.value)+"</"+r+">";else if(e.isBlankNode)i+=' rdf:nodeID="'+f(e.value)+'"/>';else throw new Error(`Not allowed to serialize term type '${e.termType}' as object in XML serializer.`);return i}function F(a,r){let i=a._h_prefixes,e=r.value,s,t;{let u=L.exec(e);if(u)s=e.slice(0,u.index),t=u[1];else if(u=X.exec(e),u)s=e.slice(0,u.index),t=u[1];else throw new Error(`Cannot serialize predicate <${e}> into an XML qname`)}let n,l;e:for(;;){t:for(;;)if(i[m]){let o=i[m]._h_inverse;if(s in o){let _=o[s];n=(_?_+":":"")+t,l="<"+n;break e}else break}else{for(let o in i)if(i[o]===s){n=(o?o+":":"")+t,l="<"+n;break t}break}let u="__g"+a._c_prefixes_tmp++;n=u+":"+t,l="<"+n+" xmlns:"+u+'="'+s+'"';break}return[n,l]}class p extends D{constructor(r={}){let i=r.prefixes;delete r.prefixes,super(r),this._b_prefixes_open=!0,this._c_prefixes_tmp=0,this._kt_subject=null;let e=`<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"`;this._update_prefixes({rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#"}),i?this.push(e+this._serialize_prefixes(i)):this.push(e)}_serialize_prefixes(r,i=!1){if(!this._b_prefixes_open)return;let e=this._h_prefixes,s="";for(let t in r){if(t in e){if(r[t]===e[t]&&!i)continue;throw new Error(`Cannot change prefixes in RDF/XML serializer. Attempted to modify '${t}' from <${e[t]}> to <${r[t]}>`)}if(k.test(t))throw new Error(`Cannot serialize prefix '${t}' since it is reserved under the blanket XML namespace.`);s+=`
	xmlns${t?":"+t:""}="${j(r[t]).value}"`}return s&&this._update_prefixes(r,!0),s}_serialize_c3r(r){let i="";this._b_prefixes_open&&(i+=">",this._b_prefixes_open=!1);let e=this._h_prefixes;this._kt_subject!==null&&(i+=`
	</rdf:Description>`,this._kt_subject=null);for(let s in r){let t="",n=c(s,e);if(!n.termType)continue;if(!n.isNamedNode&&!n.isBlankNode)throw new Error(`Cannot use ${n.termType} term type in subject position`);if(n.isNamedNode)t+=`

	<rdf:Description rdf:about="`+f(n.value)+'">';else if(n.isBlankNode)t+=`

	<rdf:Description rdf:nodeID="`+f(n.value)+'">';else throw new Error(`Not allowed to serialize term type '${n.termType}' as subject in XML serializer.`);let l=!1,u=r[s];for(let o in u){let _=c(o,e);if(!_.termType)continue;if(!_.isNamedNode)throw new Error(`Cannot use ${_.termType} term type in subject position`);let[y,E]=F(this,_),d="";for(let N of u[o]){let h=c(N,e);h.termType&&(d+=`
		`+x(this,y,E,h))}d&&(t+=d,l=!0)}l&&(i+=t+`
	</rdf:Description>`)}return i}_serialize_quad(r){let i=b.from.quad(r);this._b_prefixes_open&&(this._s_push+=">",this._b_prefixes_open=!1);let{subject:e,predicate:s,object:t}=i,[n,l]=F(this,s),u=`
		`+x(this,n,l,t);if(e.equals(this._kt_subject))this._s_push+=u;else{if(!e.isNamedNode&&!e.isBlankNode)throw new Error(`Cannot use ${e.termType} term type in subject position`);let o;if(e.isNamedNode)o=`

	<rdf:Description rdf:about="`+f(e.value)+'">'+u;else if(e.isBlankNode)o=`

	<rdf:Description rdf:nodeID="`+f(e.value)+'">'+u;else throw new Error(`Not allowed to serialize term type '${e.termType}' as subject in XML serializer.`);this._kt_subject?this._s_push+=`
	</rdf:Description>`+o:this._s_push+=o,this._kt_subject=e}}_flush(){p._flush_buffer(this),this._b_prefixes_open&&(this.push(">"),this._b_prefixes_open=!1),this._kt_subject?this.push(`
	</rdf:Description>
</rdf:RDF>
`):this.push(`
</rdf:RDF>
`),this.push(null)}}Object.assign(p,{_serialize_comment:D.prototype._serialize_hash_comment});var w=function(a){return new p(a)};const S=g(w),O=C({__proto__:null,default:S},[w]);export{O as m};
