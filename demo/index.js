(function(A,l){typeof exports=="object"&&typeof module!="undefined"?l(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],l):(A=typeof globalThis!="undefined"?globalThis:A||self,l(A.FmmVueDemo={},A.Vue))})(this,function(A,l){"use strict";function Zn(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var f=Zn(l);function sn(n,t=[]){return Object.keys(n).reduce((i,r)=>(t.includes(r)||(i[r]=l.unref(n[r])),i),{})}function M(n){return typeof n=="function"}function Qn(n){return l.isReactive(n)||l.isReadonly(n)}function Jn(n,t,i){if(i)return t?t(n()):n();try{var r=Promise.resolve(n());return t?r.then(t):r}catch(a){return Promise.reject(a)}}const nt="__root";function tt(n){return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];try{return Promise.resolve(n.apply(this,t))}catch(r){return Promise.reject(r)}}}function it(n={}){const t=l.unref(n),i=Object.keys(t),r={},a={},e={};return i.forEach(o=>{const p=t[o];switch(!0){case M(p.$validator):r[o]=p;break;case M(p):r[o]={$validator:p};break;case o.startsWith("$"):e[o]=p;break;default:a[o]=p}}),{rules:r,nestedValidators:a,config:e}}function gn(n,t,i){const r=l.unref(t);return n.call(i,r,i)}function xn(n){return n.$valid!==void 0?!n.$valid:!n}function rt(n,t,i,r,{$lazy:a},e,o,p=[]){const m=l.ref(!!r.value),g=l.ref(0);i.value=!1;const s=l.watch([t,r].concat(p),()=>{if(a&&!r.value)return!1;let d;try{d=gn(n,t,o)}catch(c){d=Promise.reject(c)}g.value++,i.value=!!g.value,m.value=!1,Promise.resolve(d).then(c=>{g.value--,i.value=!!g.value,e.value=c,m.value=xn(c)}).catch(c=>{g.value--,i.value=!!g.value,e.value=c,m.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:m,$unwatch:s}}function at(n,t,i,{$lazy:r},a,e){const o=()=>({}),p=l.computed(()=>{if(r&&!i.value)return!1;try{const m=gn(n,t,e);return a.value=m,xn(m)}catch(m){a.value=m}return!0});return{$unwatch:o,$invalid:p}}function et(n,t,i,r,a,e,o,p){const m=l.ref(!1),g=n.$params||{},s=l.ref(null);let d,c;n.$async?{$invalid:d,$unwatch:c}=rt(n.$validator,t,m,i,r,s,a,n.$watchTargets):{$invalid:d,$unwatch:c}=at(n.$validator,t,i,r,s,a);const x=n.$message;return{$message:M(x)?l.computed(()=>x(sn({$pending:m,$invalid:d,$params:sn(g),$model:t,$response:s,$validator:e,$propertyPath:p,$property:o}))):x||"",$params:g,$pending:m,$invalid:d,$response:s,$unwatch:c}}function ot(n,t,i,r,a,e,o,p){const m=Object.keys(n),g=r.get(a,n),s=l.ref(!1);if(g){if(!g.$partial)return g;g.$unwatch(),s.value=g.$dirty.value}const d={$dirty:s,$path:a,$touch:()=>{s.value||(s.value=!0)},$reset:()=>{s.value&&(s.value=!1)}};return m.length?(m.forEach(c=>{d[c]=et(n[c],t,d.$dirty,e,o,c,i,a)}),d.$externalResults=l.computed(()=>p.value?[].concat(p.value).map((c,x)=>({$propertyPath:a,$property:i,$validator:"$externalResults",$uid:`${a}-externalResult-${x}`,$message:c,$params:{},$response:null,$pending:!1})):[]),d.$invalid=l.computed(()=>!!d.$externalResults.value.length||m.some(c=>l.unref(d[c].$invalid))),d.$pending=l.computed(()=>m.some(c=>l.unref(d[c].$pending))),d.$error=l.computed(()=>d.$dirty.value?d.$pending.value||d.$invalid.value:!1),d.$silentErrors=l.computed(()=>m.filter(c=>l.unref(d[c].$invalid)).map(c=>{const x=d[c];return l.reactive({$propertyPath:a,$property:i,$validator:c,$uid:`${a}-${c}`,$message:x.$message,$params:x.$params,$response:x.$response,$pending:x.$pending})}).concat(d.$externalResults.value)),d.$errors=l.computed(()=>d.$dirty.value?d.$silentErrors.value:[]),d.$unwatch=()=>m.forEach(c=>{d[c].$unwatch()}),r.set(a,n,d),d):(g&&r.set(a,n,d),d)}function pt(n,t,i,r,a,e,o){const p=Object.keys(n);return p.length?p.reduce((m,g)=>(m[g]=Y({validations:n[g],state:t,key:g,parentKey:i,resultsCache:r,globalConfig:a,instance:e,externalResults:o}),m),{}):{}}function mt(n,t,i){const r=l.computed(()=>[t,i].filter(x=>x).reduce((x,v)=>x.concat(Object.values(l.unref(v))),[])),a=l.computed({get(){return n.$dirty.value||(r.value.length?r.value.every(x=>x.$dirty):!1)},set(x){n.$dirty.value=x}}),e=l.computed(()=>{const x=l.unref(n.$silentErrors)||[],v=r.value.filter(w=>(l.unref(w).$silentErrors||[]).length).reduce((w,k)=>w.concat(...k.$silentErrors),[]);return x.concat(v)}),o=l.computed(()=>{const x=l.unref(n.$errors)||[],v=r.value.filter(w=>(l.unref(w).$errors||[]).length).reduce((w,k)=>w.concat(...k.$errors),[]);return x.concat(v)}),p=l.computed(()=>r.value.some(x=>x.$invalid)||l.unref(n.$invalid)||!1),m=l.computed(()=>r.value.some(x=>l.unref(x.$pending))||l.unref(n.$pending)||!1),g=l.computed(()=>r.value.some(x=>x.$dirty)||r.value.some(x=>x.$anyDirty)||a.value),s=l.computed(()=>a.value?m.value||p.value:!1),d=()=>{n.$touch(),r.value.forEach(x=>{x.$touch()})},c=()=>{n.$reset(),r.value.forEach(x=>{x.$reset()})};return r.value.length&&r.value.every(x=>x.$dirty)&&d(),{$dirty:a,$errors:o,$invalid:p,$anyDirty:g,$error:s,$pending:m,$touch:d,$reset:c,$silentErrors:e}}function Y({validations:n,state:t,key:i,parentKey:r,childResults:a,resultsCache:e,globalConfig:o={},instance:p,externalResults:m}){const g=tt(function(){return H.value||dn(),Jn(l.nextTick,function(){return new Promise(u=>{if(!ln.value)return u(!mn.value);const j=l.watch(ln,()=>{u(!mn.value),j()})})})}),s=r?`${r}.${i}`:i,{rules:d,nestedValidators:c,config:x}=it(n),v=Object.assign({},o,x),w=i?l.computed(()=>{const u=l.unref(t);return u?l.unref(u[i]):void 0}):t,k=Object.assign({},l.unref(m)||{}),T=l.computed(()=>{const u=l.unref(m);return i?u?l.unref(u[i]):void 0:u}),$=ot(d,w,i,e,s,v,p,T),pn=pt(c,w,s,e,v,p,T),{$dirty:H,$errors:Ri,$invalid:mn,$anyDirty:Li,$error:Ii,$pending:ln,$touch:dn,$reset:Ti,$silentErrors:$i}=mt($,pn,a),Di=i?l.computed({get:()=>l.unref(w),set:u=>{H.value=!0;const j=l.unref(t),Kn=l.unref(m);Kn&&(Kn[i]=k[i]),l.isRef(j[i])?j[i].value=u:j[i]=u}}):null;i&&v.$autoDirty&&l.watch(w,()=>{H.value||dn();const u=l.unref(m);u&&(u[i]=k[i])},{flush:"sync"});function Pi(u){return(a.value||{})[u]}function Oi(){l.isRef(m)?m.value=k:Object.keys(k).length===0?Object.keys(m).forEach(u=>{delete m[u]}):Object.assign(m,k)}return l.reactive(Object.assign({},$,{$model:Di,$dirty:H,$error:Ii,$errors:Ri,$invalid:mn,$anyDirty:Li,$pending:ln,$touch:dn,$reset:Ti,$path:s||nt,$silentErrors:$i,$validate:g},a&&{$getResultsForChild:Pi,$clearExternalResults:Oi},pn))}class lt{constructor(){this.storage=new Map}set(t,i,r){this.storage.set(t,{rules:i,result:r})}checkRulesValidity(t,i,r){const a=Object.keys(r),e=Object.keys(i);return e.length!==a.length||!e.every(p=>a.includes(p))?!1:e.every(p=>i[p].$params?Object.keys(i[p].$params).every(m=>l.unref(r[p].$params[m])===l.unref(i[p].$params[m])):!0)}get(t,i){const r=this.storage.get(t);if(!r)return;const{rules:a,result:e}=r,o=this.checkRulesValidity(t,i,a),p=e.$unwatch?e.$unwatch:()=>({});return o?e:{$dirty:e.$dirty,$partial:!0,$unwatch:p}}}const cn=Symbol("vuelidate#injectChiildResults"),bn=Symbol("vuelidate#removeChiildResults"),B={COLLECT_ALL:!0,COLLECT_NONE:!1};function dt({$scope:n}){const t={},i=l.ref([]),r=l.computed(()=>i.value.reduce((m,g)=>(m[g]=l.unref(t[g]),m),{}));function a(m,{$registerAs:g,$scope:s,$stopPropagation:d}){d||n===B.COLLECT_NONE||s===B.COLLECT_NONE||n!==B.COLLECT_ALL&&n!==s||(t[g]=m,i.value.push(g))}function e(m){i.value=i.value.filter(g=>g!==m),delete t[m]}const o=l.inject(cn,()=>{});l.provide(cn,a);const p=l.inject(bn,()=>{});return l.provide(bn,e),{childResults:r,sendValidationResultsToParent:o,removeValidationResultsFromParent:p}}function st(n,t,i={}){arguments.length===1&&(i=n,n=void 0,t=void 0);let{$registerAs:r,$scope:a=B.COLLECT_ALL,$stopPropagation:e,$externalResults:o}=i;const p=l.getCurrentInstance(),m=p?p.type:{};!r&&p&&(r=`_vuelidate_${p.uid||p._uid}`);const g=l.ref({}),s=new lt,{childResults:d,sendValidationResultsToParent:c,removeValidationResultsFromParent:x}=p?dt({$scope:a}):{childResults:l.ref({})};if(!n&&m.validations){const v=m.validations;t=l.ref({}),l.onBeforeMount(()=>{t.value=p.proxy;function w(k){return new Proxy(k,{get(T,$,pn){return typeof T[$]=="object"?w(T[$]):l.computed(()=>T[$])}})}l.watch(()=>M(v)?v.call(t.value,new w(t.value)):v,k=>{g.value=Y({validations:k,state:t,childResults:d,resultsCache:s,globalConfig:i,instance:p.proxy,externalResults:o||p.proxy.vuelidateExternalResults})},{immediate:!0})}),i=m.validationsConfig||i}else{const v=l.isRef(n)||Qn(n)?n:l.reactive(n||{});l.watch(v,w=>{g.value=Y({validations:w,state:t,childResults:d,resultsCache:s,globalConfig:i,instance:p?p.proxy:{},externalResults:o})},{immediate:!0})}return p&&(c(g,{$registerAs:r,$scope:a,$stopPropagation:e}),l.onBeforeUnmount(()=>x(r))),l.computed(()=>Object.assign({},l.unref(g.value),d.value))}const D=n=>{if(n=l.unref(n),Array.isArray(n))return!!n.length;if(n==null)return!1;if(n===!1)return!0;if(n instanceof Date)return!isNaN(n.getTime());if(typeof n=="object"){for(let t in n)return!0;return!1}return!!String(n).length},gt=n=>(n=l.unref(n),Array.isArray(n)?n.length:typeof n=="object"?Object.keys(n).length:String(n).length);function xt(n){return t=>(t=l.unref(t),!D(t)||n.test(t))}var ct=xt(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i),bt={$validator:ct,$message:"Value is not a valid email address",$params:{type:"email"}};function ft(n){return t=>!D(t)||gt(t)>=l.unref(n)}function ht(n){return{$validator:ft(n),$message:({$params:t})=>`This field should be at least ${t.min} long`,$params:{min:n,type:"minLength"}}}function vt(n){return typeof n=="string"&&(n=n.trim()),D(n)}var N={$validator:vt,$message:"Value is required",$params:{type:"required"}};function ut(n){return t=>!D(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+l.unref(n)}function wt(n){return{$validator:ut(n),$message:({$params:t})=>`The minimum value allowed is ${t.min}`,$params:{min:n,type:"minValue"}}}function yt(n){return t=>!D(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+l.unref(n)}var kt=n=>({$validator:yt(n),$message:({$params:t})=>`The maximum value is ${t.max}`,$params:{max:n,type:"maxValue"}}),_t=`/*!
* Vuetify v3.0.0-alpha.11
* Forged by John Leider
* Released under the MIT License.
*/
@charset "UTF-8";
@-webkit-keyframes v-shake {
  59% {
    margin-left: 0;
  }
  60%, 80% {
    margin-left: 2px;
  }
  70%, 90% {
    margin-left: -2px;
  }
}
@keyframes v-shake {
  59% {
    margin-left: 0;
  }
  60%, 80% {
    margin-left: 2px;
  }
  70%, 90% {
    margin-left: -2px;
  }
}
.bg-black {
  background-color: #000000 !important;
  border-color: #000000 !important;
}

.text-black {
  color: #000000 !important;
  caret-color: #000000 !important;
}

.bg-white {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

.text-white {
  color: #FFFFFF !important;
  caret-color: #FFFFFF !important;
}

.bg-transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}

.text-transparent {
  color: transparent !important;
  caret-color: transparent !important;
}

.bg-red {
  background-color: #F44336 !important;
  border-color: #F44336 !important;
}

.text-red {
  color: #F44336 !important;
  caret-color: #F44336 !important;
}

.bg-red-lighten-5 {
  background-color: #FFEBEE !important;
  border-color: #FFEBEE !important;
}

.text-red-lighten-5 {
  color: #FFEBEE !important;
  caret-color: #FFEBEE !important;
}

.bg-red-lighten-4 {
  background-color: #FFCDD2 !important;
  border-color: #FFCDD2 !important;
}

.text-red-lighten-4 {
  color: #FFCDD2 !important;
  caret-color: #FFCDD2 !important;
}

.bg-red-lighten-3 {
  background-color: #EF9A9A !important;
  border-color: #EF9A9A !important;
}

.text-red-lighten-3 {
  color: #EF9A9A !important;
  caret-color: #EF9A9A !important;
}

.bg-red-lighten-2 {
  background-color: #E57373 !important;
  border-color: #E57373 !important;
}

.text-red-lighten-2 {
  color: #E57373 !important;
  caret-color: #E57373 !important;
}

.bg-red-lighten-1 {
  background-color: #EF5350 !important;
  border-color: #EF5350 !important;
}

.text-red-lighten-1 {
  color: #EF5350 !important;
  caret-color: #EF5350 !important;
}

.bg-red-darken-1 {
  background-color: #E53935 !important;
  border-color: #E53935 !important;
}

.text-red-darken-1 {
  color: #E53935 !important;
  caret-color: #E53935 !important;
}

.bg-red-darken-2 {
  background-color: #D32F2F !important;
  border-color: #D32F2F !important;
}

.text-red-darken-2 {
  color: #D32F2F !important;
  caret-color: #D32F2F !important;
}

.bg-red-darken-3 {
  background-color: #C62828 !important;
  border-color: #C62828 !important;
}

.text-red-darken-3 {
  color: #C62828 !important;
  caret-color: #C62828 !important;
}

.bg-red-darken-4 {
  background-color: #B71C1C !important;
  border-color: #B71C1C !important;
}

.text-red-darken-4 {
  color: #B71C1C !important;
  caret-color: #B71C1C !important;
}

.bg-red-accent-1 {
  background-color: #FF8A80 !important;
  border-color: #FF8A80 !important;
}

.text-red-accent-1 {
  color: #FF8A80 !important;
  caret-color: #FF8A80 !important;
}

.bg-red-accent-2 {
  background-color: #FF5252 !important;
  border-color: #FF5252 !important;
}

.text-red-accent-2 {
  color: #FF5252 !important;
  caret-color: #FF5252 !important;
}

.bg-red-accent-3 {
  background-color: #FF1744 !important;
  border-color: #FF1744 !important;
}

.text-red-accent-3 {
  color: #FF1744 !important;
  caret-color: #FF1744 !important;
}

.bg-red-accent-4 {
  background-color: #D50000 !important;
  border-color: #D50000 !important;
}

.text-red-accent-4 {
  color: #D50000 !important;
  caret-color: #D50000 !important;
}

.bg-pink {
  background-color: #e91e63 !important;
  border-color: #e91e63 !important;
}

.text-pink {
  color: #e91e63 !important;
  caret-color: #e91e63 !important;
}

.bg-pink-lighten-5 {
  background-color: #fce4ec !important;
  border-color: #fce4ec !important;
}

.text-pink-lighten-5 {
  color: #fce4ec !important;
  caret-color: #fce4ec !important;
}

.bg-pink-lighten-4 {
  background-color: #f8bbd0 !important;
  border-color: #f8bbd0 !important;
}

.text-pink-lighten-4 {
  color: #f8bbd0 !important;
  caret-color: #f8bbd0 !important;
}

.bg-pink-lighten-3 {
  background-color: #f48fb1 !important;
  border-color: #f48fb1 !important;
}

.text-pink-lighten-3 {
  color: #f48fb1 !important;
  caret-color: #f48fb1 !important;
}

.bg-pink-lighten-2 {
  background-color: #f06292 !important;
  border-color: #f06292 !important;
}

.text-pink-lighten-2 {
  color: #f06292 !important;
  caret-color: #f06292 !important;
}

.bg-pink-lighten-1 {
  background-color: #ec407a !important;
  border-color: #ec407a !important;
}

.text-pink-lighten-1 {
  color: #ec407a !important;
  caret-color: #ec407a !important;
}

.bg-pink-darken-1 {
  background-color: #d81b60 !important;
  border-color: #d81b60 !important;
}

.text-pink-darken-1 {
  color: #d81b60 !important;
  caret-color: #d81b60 !important;
}

.bg-pink-darken-2 {
  background-color: #c2185b !important;
  border-color: #c2185b !important;
}

.text-pink-darken-2 {
  color: #c2185b !important;
  caret-color: #c2185b !important;
}

.bg-pink-darken-3 {
  background-color: #ad1457 !important;
  border-color: #ad1457 !important;
}

.text-pink-darken-3 {
  color: #ad1457 !important;
  caret-color: #ad1457 !important;
}

.bg-pink-darken-4 {
  background-color: #880e4f !important;
  border-color: #880e4f !important;
}

.text-pink-darken-4 {
  color: #880e4f !important;
  caret-color: #880e4f !important;
}

.bg-pink-accent-1 {
  background-color: #ff80ab !important;
  border-color: #ff80ab !important;
}

.text-pink-accent-1 {
  color: #ff80ab !important;
  caret-color: #ff80ab !important;
}

.bg-pink-accent-2 {
  background-color: #ff4081 !important;
  border-color: #ff4081 !important;
}

.text-pink-accent-2 {
  color: #ff4081 !important;
  caret-color: #ff4081 !important;
}

.bg-pink-accent-3 {
  background-color: #f50057 !important;
  border-color: #f50057 !important;
}

.text-pink-accent-3 {
  color: #f50057 !important;
  caret-color: #f50057 !important;
}

.bg-pink-accent-4 {
  background-color: #c51162 !important;
  border-color: #c51162 !important;
}

.text-pink-accent-4 {
  color: #c51162 !important;
  caret-color: #c51162 !important;
}

.bg-purple {
  background-color: #9c27b0 !important;
  border-color: #9c27b0 !important;
}

.text-purple {
  color: #9c27b0 !important;
  caret-color: #9c27b0 !important;
}

.bg-purple-lighten-5 {
  background-color: #f3e5f5 !important;
  border-color: #f3e5f5 !important;
}

.text-purple-lighten-5 {
  color: #f3e5f5 !important;
  caret-color: #f3e5f5 !important;
}

.bg-purple-lighten-4 {
  background-color: #e1bee7 !important;
  border-color: #e1bee7 !important;
}

.text-purple-lighten-4 {
  color: #e1bee7 !important;
  caret-color: #e1bee7 !important;
}

.bg-purple-lighten-3 {
  background-color: #ce93d8 !important;
  border-color: #ce93d8 !important;
}

.text-purple-lighten-3 {
  color: #ce93d8 !important;
  caret-color: #ce93d8 !important;
}

.bg-purple-lighten-2 {
  background-color: #ba68c8 !important;
  border-color: #ba68c8 !important;
}

.text-purple-lighten-2 {
  color: #ba68c8 !important;
  caret-color: #ba68c8 !important;
}

.bg-purple-lighten-1 {
  background-color: #ab47bc !important;
  border-color: #ab47bc !important;
}

.text-purple-lighten-1 {
  color: #ab47bc !important;
  caret-color: #ab47bc !important;
}

.bg-purple-darken-1 {
  background-color: #8e24aa !important;
  border-color: #8e24aa !important;
}

.text-purple-darken-1 {
  color: #8e24aa !important;
  caret-color: #8e24aa !important;
}

.bg-purple-darken-2 {
  background-color: #7b1fa2 !important;
  border-color: #7b1fa2 !important;
}

.text-purple-darken-2 {
  color: #7b1fa2 !important;
  caret-color: #7b1fa2 !important;
}

.bg-purple-darken-3 {
  background-color: #6a1b9a !important;
  border-color: #6a1b9a !important;
}

.text-purple-darken-3 {
  color: #6a1b9a !important;
  caret-color: #6a1b9a !important;
}

.bg-purple-darken-4 {
  background-color: #4a148c !important;
  border-color: #4a148c !important;
}

.text-purple-darken-4 {
  color: #4a148c !important;
  caret-color: #4a148c !important;
}

.bg-purple-accent-1 {
  background-color: #ea80fc !important;
  border-color: #ea80fc !important;
}

.text-purple-accent-1 {
  color: #ea80fc !important;
  caret-color: #ea80fc !important;
}

.bg-purple-accent-2 {
  background-color: #e040fb !important;
  border-color: #e040fb !important;
}

.text-purple-accent-2 {
  color: #e040fb !important;
  caret-color: #e040fb !important;
}

.bg-purple-accent-3 {
  background-color: #d500f9 !important;
  border-color: #d500f9 !important;
}

.text-purple-accent-3 {
  color: #d500f9 !important;
  caret-color: #d500f9 !important;
}

.bg-purple-accent-4 {
  background-color: #aa00ff !important;
  border-color: #aa00ff !important;
}

.text-purple-accent-4 {
  color: #aa00ff !important;
  caret-color: #aa00ff !important;
}

.bg-deep-purple {
  background-color: #673ab7 !important;
  border-color: #673ab7 !important;
}

.text-deep-purple {
  color: #673ab7 !important;
  caret-color: #673ab7 !important;
}

.bg-deep-purple-lighten-5 {
  background-color: #ede7f6 !important;
  border-color: #ede7f6 !important;
}

.text-deep-purple-lighten-5 {
  color: #ede7f6 !important;
  caret-color: #ede7f6 !important;
}

.bg-deep-purple-lighten-4 {
  background-color: #d1c4e9 !important;
  border-color: #d1c4e9 !important;
}

.text-deep-purple-lighten-4 {
  color: #d1c4e9 !important;
  caret-color: #d1c4e9 !important;
}

.bg-deep-purple-lighten-3 {
  background-color: #b39ddb !important;
  border-color: #b39ddb !important;
}

.text-deep-purple-lighten-3 {
  color: #b39ddb !important;
  caret-color: #b39ddb !important;
}

.bg-deep-purple-lighten-2 {
  background-color: #9575cd !important;
  border-color: #9575cd !important;
}

.text-deep-purple-lighten-2 {
  color: #9575cd !important;
  caret-color: #9575cd !important;
}

.bg-deep-purple-lighten-1 {
  background-color: #7e57c2 !important;
  border-color: #7e57c2 !important;
}

.text-deep-purple-lighten-1 {
  color: #7e57c2 !important;
  caret-color: #7e57c2 !important;
}

.bg-deep-purple-darken-1 {
  background-color: #5e35b1 !important;
  border-color: #5e35b1 !important;
}

.text-deep-purple-darken-1 {
  color: #5e35b1 !important;
  caret-color: #5e35b1 !important;
}

.bg-deep-purple-darken-2 {
  background-color: #512da8 !important;
  border-color: #512da8 !important;
}

.text-deep-purple-darken-2 {
  color: #512da8 !important;
  caret-color: #512da8 !important;
}

.bg-deep-purple-darken-3 {
  background-color: #4527a0 !important;
  border-color: #4527a0 !important;
}

.text-deep-purple-darken-3 {
  color: #4527a0 !important;
  caret-color: #4527a0 !important;
}

.bg-deep-purple-darken-4 {
  background-color: #311b92 !important;
  border-color: #311b92 !important;
}

.text-deep-purple-darken-4 {
  color: #311b92 !important;
  caret-color: #311b92 !important;
}

.bg-deep-purple-accent-1 {
  background-color: #b388ff !important;
  border-color: #b388ff !important;
}

.text-deep-purple-accent-1 {
  color: #b388ff !important;
  caret-color: #b388ff !important;
}

.bg-deep-purple-accent-2 {
  background-color: #7c4dff !important;
  border-color: #7c4dff !important;
}

.text-deep-purple-accent-2 {
  color: #7c4dff !important;
  caret-color: #7c4dff !important;
}

.bg-deep-purple-accent-3 {
  background-color: #651fff !important;
  border-color: #651fff !important;
}

.text-deep-purple-accent-3 {
  color: #651fff !important;
  caret-color: #651fff !important;
}

.bg-deep-purple-accent-4 {
  background-color: #6200ea !important;
  border-color: #6200ea !important;
}

.text-deep-purple-accent-4 {
  color: #6200ea !important;
  caret-color: #6200ea !important;
}

.bg-indigo {
  background-color: #3f51b5 !important;
  border-color: #3f51b5 !important;
}

.text-indigo {
  color: #3f51b5 !important;
  caret-color: #3f51b5 !important;
}

.bg-indigo-lighten-5 {
  background-color: #e8eaf6 !important;
  border-color: #e8eaf6 !important;
}

.text-indigo-lighten-5 {
  color: #e8eaf6 !important;
  caret-color: #e8eaf6 !important;
}

.bg-indigo-lighten-4 {
  background-color: #c5cae9 !important;
  border-color: #c5cae9 !important;
}

.text-indigo-lighten-4 {
  color: #c5cae9 !important;
  caret-color: #c5cae9 !important;
}

.bg-indigo-lighten-3 {
  background-color: #9fa8da !important;
  border-color: #9fa8da !important;
}

.text-indigo-lighten-3 {
  color: #9fa8da !important;
  caret-color: #9fa8da !important;
}

.bg-indigo-lighten-2 {
  background-color: #7986cb !important;
  border-color: #7986cb !important;
}

.text-indigo-lighten-2 {
  color: #7986cb !important;
  caret-color: #7986cb !important;
}

.bg-indigo-lighten-1 {
  background-color: #5c6bc0 !important;
  border-color: #5c6bc0 !important;
}

.text-indigo-lighten-1 {
  color: #5c6bc0 !important;
  caret-color: #5c6bc0 !important;
}

.bg-indigo-darken-1 {
  background-color: #3949ab !important;
  border-color: #3949ab !important;
}

.text-indigo-darken-1 {
  color: #3949ab !important;
  caret-color: #3949ab !important;
}

.bg-indigo-darken-2 {
  background-color: #303f9f !important;
  border-color: #303f9f !important;
}

.text-indigo-darken-2 {
  color: #303f9f !important;
  caret-color: #303f9f !important;
}

.bg-indigo-darken-3 {
  background-color: #283593 !important;
  border-color: #283593 !important;
}

.text-indigo-darken-3 {
  color: #283593 !important;
  caret-color: #283593 !important;
}

.bg-indigo-darken-4 {
  background-color: #1a237e !important;
  border-color: #1a237e !important;
}

.text-indigo-darken-4 {
  color: #1a237e !important;
  caret-color: #1a237e !important;
}

.bg-indigo-accent-1 {
  background-color: #8c9eff !important;
  border-color: #8c9eff !important;
}

.text-indigo-accent-1 {
  color: #8c9eff !important;
  caret-color: #8c9eff !important;
}

.bg-indigo-accent-2 {
  background-color: #536dfe !important;
  border-color: #536dfe !important;
}

.text-indigo-accent-2 {
  color: #536dfe !important;
  caret-color: #536dfe !important;
}

.bg-indigo-accent-3 {
  background-color: #3d5afe !important;
  border-color: #3d5afe !important;
}

.text-indigo-accent-3 {
  color: #3d5afe !important;
  caret-color: #3d5afe !important;
}

.bg-indigo-accent-4 {
  background-color: #304ffe !important;
  border-color: #304ffe !important;
}

.text-indigo-accent-4 {
  color: #304ffe !important;
  caret-color: #304ffe !important;
}

.bg-blue {
  background-color: #2196F3 !important;
  border-color: #2196F3 !important;
}

.text-blue {
  color: #2196F3 !important;
  caret-color: #2196F3 !important;
}

.bg-blue-lighten-5 {
  background-color: #E3F2FD !important;
  border-color: #E3F2FD !important;
}

.text-blue-lighten-5 {
  color: #E3F2FD !important;
  caret-color: #E3F2FD !important;
}

.bg-blue-lighten-4 {
  background-color: #BBDEFB !important;
  border-color: #BBDEFB !important;
}

.text-blue-lighten-4 {
  color: #BBDEFB !important;
  caret-color: #BBDEFB !important;
}

.bg-blue-lighten-3 {
  background-color: #90CAF9 !important;
  border-color: #90CAF9 !important;
}

.text-blue-lighten-3 {
  color: #90CAF9 !important;
  caret-color: #90CAF9 !important;
}

.bg-blue-lighten-2 {
  background-color: #64B5F6 !important;
  border-color: #64B5F6 !important;
}

.text-blue-lighten-2 {
  color: #64B5F6 !important;
  caret-color: #64B5F6 !important;
}

.bg-blue-lighten-1 {
  background-color: #42A5F5 !important;
  border-color: #42A5F5 !important;
}

.text-blue-lighten-1 {
  color: #42A5F5 !important;
  caret-color: #42A5F5 !important;
}

.bg-blue-darken-1 {
  background-color: #1E88E5 !important;
  border-color: #1E88E5 !important;
}

.text-blue-darken-1 {
  color: #1E88E5 !important;
  caret-color: #1E88E5 !important;
}

.bg-blue-darken-2 {
  background-color: #1976D2 !important;
  border-color: #1976D2 !important;
}

.text-blue-darken-2 {
  color: #1976D2 !important;
  caret-color: #1976D2 !important;
}

.bg-blue-darken-3 {
  background-color: #1565C0 !important;
  border-color: #1565C0 !important;
}

.text-blue-darken-3 {
  color: #1565C0 !important;
  caret-color: #1565C0 !important;
}

.bg-blue-darken-4 {
  background-color: #0D47A1 !important;
  border-color: #0D47A1 !important;
}

.text-blue-darken-4 {
  color: #0D47A1 !important;
  caret-color: #0D47A1 !important;
}

.bg-blue-accent-1 {
  background-color: #82B1FF !important;
  border-color: #82B1FF !important;
}

.text-blue-accent-1 {
  color: #82B1FF !important;
  caret-color: #82B1FF !important;
}

.bg-blue-accent-2 {
  background-color: #448AFF !important;
  border-color: #448AFF !important;
}

.text-blue-accent-2 {
  color: #448AFF !important;
  caret-color: #448AFF !important;
}

.bg-blue-accent-3 {
  background-color: #2979FF !important;
  border-color: #2979FF !important;
}

.text-blue-accent-3 {
  color: #2979FF !important;
  caret-color: #2979FF !important;
}

.bg-blue-accent-4 {
  background-color: #2962FF !important;
  border-color: #2962FF !important;
}

.text-blue-accent-4 {
  color: #2962FF !important;
  caret-color: #2962FF !important;
}

.bg-light-blue {
  background-color: #03a9f4 !important;
  border-color: #03a9f4 !important;
}

.text-light-blue {
  color: #03a9f4 !important;
  caret-color: #03a9f4 !important;
}

.bg-light-blue-lighten-5 {
  background-color: #e1f5fe !important;
  border-color: #e1f5fe !important;
}

.text-light-blue-lighten-5 {
  color: #e1f5fe !important;
  caret-color: #e1f5fe !important;
}

.bg-light-blue-lighten-4 {
  background-color: #b3e5fc !important;
  border-color: #b3e5fc !important;
}

.text-light-blue-lighten-4 {
  color: #b3e5fc !important;
  caret-color: #b3e5fc !important;
}

.bg-light-blue-lighten-3 {
  background-color: #81d4fa !important;
  border-color: #81d4fa !important;
}

.text-light-blue-lighten-3 {
  color: #81d4fa !important;
  caret-color: #81d4fa !important;
}

.bg-light-blue-lighten-2 {
  background-color: #4fc3f7 !important;
  border-color: #4fc3f7 !important;
}

.text-light-blue-lighten-2 {
  color: #4fc3f7 !important;
  caret-color: #4fc3f7 !important;
}

.bg-light-blue-lighten-1 {
  background-color: #29b6f6 !important;
  border-color: #29b6f6 !important;
}

.text-light-blue-lighten-1 {
  color: #29b6f6 !important;
  caret-color: #29b6f6 !important;
}

.bg-light-blue-darken-1 {
  background-color: #039be5 !important;
  border-color: #039be5 !important;
}

.text-light-blue-darken-1 {
  color: #039be5 !important;
  caret-color: #039be5 !important;
}

.bg-light-blue-darken-2 {
  background-color: #0288d1 !important;
  border-color: #0288d1 !important;
}

.text-light-blue-darken-2 {
  color: #0288d1 !important;
  caret-color: #0288d1 !important;
}

.bg-light-blue-darken-3 {
  background-color: #0277bd !important;
  border-color: #0277bd !important;
}

.text-light-blue-darken-3 {
  color: #0277bd !important;
  caret-color: #0277bd !important;
}

.bg-light-blue-darken-4 {
  background-color: #01579b !important;
  border-color: #01579b !important;
}

.text-light-blue-darken-4 {
  color: #01579b !important;
  caret-color: #01579b !important;
}

.bg-light-blue-accent-1 {
  background-color: #80d8ff !important;
  border-color: #80d8ff !important;
}

.text-light-blue-accent-1 {
  color: #80d8ff !important;
  caret-color: #80d8ff !important;
}

.bg-light-blue-accent-2 {
  background-color: #40c4ff !important;
  border-color: #40c4ff !important;
}

.text-light-blue-accent-2 {
  color: #40c4ff !important;
  caret-color: #40c4ff !important;
}

.bg-light-blue-accent-3 {
  background-color: #00b0ff !important;
  border-color: #00b0ff !important;
}

.text-light-blue-accent-3 {
  color: #00b0ff !important;
  caret-color: #00b0ff !important;
}

.bg-light-blue-accent-4 {
  background-color: #0091ea !important;
  border-color: #0091ea !important;
}

.text-light-blue-accent-4 {
  color: #0091ea !important;
  caret-color: #0091ea !important;
}

.bg-cyan {
  background-color: #00bcd4 !important;
  border-color: #00bcd4 !important;
}

.text-cyan {
  color: #00bcd4 !important;
  caret-color: #00bcd4 !important;
}

.bg-cyan-lighten-5 {
  background-color: #e0f7fa !important;
  border-color: #e0f7fa !important;
}

.text-cyan-lighten-5 {
  color: #e0f7fa !important;
  caret-color: #e0f7fa !important;
}

.bg-cyan-lighten-4 {
  background-color: #b2ebf2 !important;
  border-color: #b2ebf2 !important;
}

.text-cyan-lighten-4 {
  color: #b2ebf2 !important;
  caret-color: #b2ebf2 !important;
}

.bg-cyan-lighten-3 {
  background-color: #80deea !important;
  border-color: #80deea !important;
}

.text-cyan-lighten-3 {
  color: #80deea !important;
  caret-color: #80deea !important;
}

.bg-cyan-lighten-2 {
  background-color: #4dd0e1 !important;
  border-color: #4dd0e1 !important;
}

.text-cyan-lighten-2 {
  color: #4dd0e1 !important;
  caret-color: #4dd0e1 !important;
}

.bg-cyan-lighten-1 {
  background-color: #26c6da !important;
  border-color: #26c6da !important;
}

.text-cyan-lighten-1 {
  color: #26c6da !important;
  caret-color: #26c6da !important;
}

.bg-cyan-darken-1 {
  background-color: #00acc1 !important;
  border-color: #00acc1 !important;
}

.text-cyan-darken-1 {
  color: #00acc1 !important;
  caret-color: #00acc1 !important;
}

.bg-cyan-darken-2 {
  background-color: #0097a7 !important;
  border-color: #0097a7 !important;
}

.text-cyan-darken-2 {
  color: #0097a7 !important;
  caret-color: #0097a7 !important;
}

.bg-cyan-darken-3 {
  background-color: #00838f !important;
  border-color: #00838f !important;
}

.text-cyan-darken-3 {
  color: #00838f !important;
  caret-color: #00838f !important;
}

.bg-cyan-darken-4 {
  background-color: #006064 !important;
  border-color: #006064 !important;
}

.text-cyan-darken-4 {
  color: #006064 !important;
  caret-color: #006064 !important;
}

.bg-cyan-accent-1 {
  background-color: #84ffff !important;
  border-color: #84ffff !important;
}

.text-cyan-accent-1 {
  color: #84ffff !important;
  caret-color: #84ffff !important;
}

.bg-cyan-accent-2 {
  background-color: #18ffff !important;
  border-color: #18ffff !important;
}

.text-cyan-accent-2 {
  color: #18ffff !important;
  caret-color: #18ffff !important;
}

.bg-cyan-accent-3 {
  background-color: #00e5ff !important;
  border-color: #00e5ff !important;
}

.text-cyan-accent-3 {
  color: #00e5ff !important;
  caret-color: #00e5ff !important;
}

.bg-cyan-accent-4 {
  background-color: #00b8d4 !important;
  border-color: #00b8d4 !important;
}

.text-cyan-accent-4 {
  color: #00b8d4 !important;
  caret-color: #00b8d4 !important;
}

.bg-teal {
  background-color: #009688 !important;
  border-color: #009688 !important;
}

.text-teal {
  color: #009688 !important;
  caret-color: #009688 !important;
}

.bg-teal-lighten-5 {
  background-color: #e0f2f1 !important;
  border-color: #e0f2f1 !important;
}

.text-teal-lighten-5 {
  color: #e0f2f1 !important;
  caret-color: #e0f2f1 !important;
}

.bg-teal-lighten-4 {
  background-color: #b2dfdb !important;
  border-color: #b2dfdb !important;
}

.text-teal-lighten-4 {
  color: #b2dfdb !important;
  caret-color: #b2dfdb !important;
}

.bg-teal-lighten-3 {
  background-color: #80cbc4 !important;
  border-color: #80cbc4 !important;
}

.text-teal-lighten-3 {
  color: #80cbc4 !important;
  caret-color: #80cbc4 !important;
}

.bg-teal-lighten-2 {
  background-color: #4db6ac !important;
  border-color: #4db6ac !important;
}

.text-teal-lighten-2 {
  color: #4db6ac !important;
  caret-color: #4db6ac !important;
}

.bg-teal-lighten-1 {
  background-color: #26a69a !important;
  border-color: #26a69a !important;
}

.text-teal-lighten-1 {
  color: #26a69a !important;
  caret-color: #26a69a !important;
}

.bg-teal-darken-1 {
  background-color: #00897b !important;
  border-color: #00897b !important;
}

.text-teal-darken-1 {
  color: #00897b !important;
  caret-color: #00897b !important;
}

.bg-teal-darken-2 {
  background-color: #00796b !important;
  border-color: #00796b !important;
}

.text-teal-darken-2 {
  color: #00796b !important;
  caret-color: #00796b !important;
}

.bg-teal-darken-3 {
  background-color: #00695c !important;
  border-color: #00695c !important;
}

.text-teal-darken-3 {
  color: #00695c !important;
  caret-color: #00695c !important;
}

.bg-teal-darken-4 {
  background-color: #004d40 !important;
  border-color: #004d40 !important;
}

.text-teal-darken-4 {
  color: #004d40 !important;
  caret-color: #004d40 !important;
}

.bg-teal-accent-1 {
  background-color: #a7ffeb !important;
  border-color: #a7ffeb !important;
}

.text-teal-accent-1 {
  color: #a7ffeb !important;
  caret-color: #a7ffeb !important;
}

.bg-teal-accent-2 {
  background-color: #64ffda !important;
  border-color: #64ffda !important;
}

.text-teal-accent-2 {
  color: #64ffda !important;
  caret-color: #64ffda !important;
}

.bg-teal-accent-3 {
  background-color: #1de9b6 !important;
  border-color: #1de9b6 !important;
}

.text-teal-accent-3 {
  color: #1de9b6 !important;
  caret-color: #1de9b6 !important;
}

.bg-teal-accent-4 {
  background-color: #00bfa5 !important;
  border-color: #00bfa5 !important;
}

.text-teal-accent-4 {
  color: #00bfa5 !important;
  caret-color: #00bfa5 !important;
}

.bg-green {
  background-color: #4CAF50 !important;
  border-color: #4CAF50 !important;
}

.text-green {
  color: #4CAF50 !important;
  caret-color: #4CAF50 !important;
}

.bg-green-lighten-5 {
  background-color: #E8F5E9 !important;
  border-color: #E8F5E9 !important;
}

.text-green-lighten-5 {
  color: #E8F5E9 !important;
  caret-color: #E8F5E9 !important;
}

.bg-green-lighten-4 {
  background-color: #C8E6C9 !important;
  border-color: #C8E6C9 !important;
}

.text-green-lighten-4 {
  color: #C8E6C9 !important;
  caret-color: #C8E6C9 !important;
}

.bg-green-lighten-3 {
  background-color: #A5D6A7 !important;
  border-color: #A5D6A7 !important;
}

.text-green-lighten-3 {
  color: #A5D6A7 !important;
  caret-color: #A5D6A7 !important;
}

.bg-green-lighten-2 {
  background-color: #81C784 !important;
  border-color: #81C784 !important;
}

.text-green-lighten-2 {
  color: #81C784 !important;
  caret-color: #81C784 !important;
}

.bg-green-lighten-1 {
  background-color: #66BB6A !important;
  border-color: #66BB6A !important;
}

.text-green-lighten-1 {
  color: #66BB6A !important;
  caret-color: #66BB6A !important;
}

.bg-green-darken-1 {
  background-color: #43A047 !important;
  border-color: #43A047 !important;
}

.text-green-darken-1 {
  color: #43A047 !important;
  caret-color: #43A047 !important;
}

.bg-green-darken-2 {
  background-color: #388E3C !important;
  border-color: #388E3C !important;
}

.text-green-darken-2 {
  color: #388E3C !important;
  caret-color: #388E3C !important;
}

.bg-green-darken-3 {
  background-color: #2E7D32 !important;
  border-color: #2E7D32 !important;
}

.text-green-darken-3 {
  color: #2E7D32 !important;
  caret-color: #2E7D32 !important;
}

.bg-green-darken-4 {
  background-color: #1B5E20 !important;
  border-color: #1B5E20 !important;
}

.text-green-darken-4 {
  color: #1B5E20 !important;
  caret-color: #1B5E20 !important;
}

.bg-green-accent-1 {
  background-color: #B9F6CA !important;
  border-color: #B9F6CA !important;
}

.text-green-accent-1 {
  color: #B9F6CA !important;
  caret-color: #B9F6CA !important;
}

.bg-green-accent-2 {
  background-color: #69F0AE !important;
  border-color: #69F0AE !important;
}

.text-green-accent-2 {
  color: #69F0AE !important;
  caret-color: #69F0AE !important;
}

.bg-green-accent-3 {
  background-color: #00E676 !important;
  border-color: #00E676 !important;
}

.text-green-accent-3 {
  color: #00E676 !important;
  caret-color: #00E676 !important;
}

.bg-green-accent-4 {
  background-color: #00C853 !important;
  border-color: #00C853 !important;
}

.text-green-accent-4 {
  color: #00C853 !important;
  caret-color: #00C853 !important;
}

.bg-light-green {
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
}

.text-light-green {
  color: #8bc34a !important;
  caret-color: #8bc34a !important;
}

.bg-light-green-lighten-5 {
  background-color: #f1f8e9 !important;
  border-color: #f1f8e9 !important;
}

.text-light-green-lighten-5 {
  color: #f1f8e9 !important;
  caret-color: #f1f8e9 !important;
}

.bg-light-green-lighten-4 {
  background-color: #dcedc8 !important;
  border-color: #dcedc8 !important;
}

.text-light-green-lighten-4 {
  color: #dcedc8 !important;
  caret-color: #dcedc8 !important;
}

.bg-light-green-lighten-3 {
  background-color: #c5e1a5 !important;
  border-color: #c5e1a5 !important;
}

.text-light-green-lighten-3 {
  color: #c5e1a5 !important;
  caret-color: #c5e1a5 !important;
}

.bg-light-green-lighten-2 {
  background-color: #aed581 !important;
  border-color: #aed581 !important;
}

.text-light-green-lighten-2 {
  color: #aed581 !important;
  caret-color: #aed581 !important;
}

.bg-light-green-lighten-1 {
  background-color: #9ccc65 !important;
  border-color: #9ccc65 !important;
}

.text-light-green-lighten-1 {
  color: #9ccc65 !important;
  caret-color: #9ccc65 !important;
}

.bg-light-green-darken-1 {
  background-color: #7cb342 !important;
  border-color: #7cb342 !important;
}

.text-light-green-darken-1 {
  color: #7cb342 !important;
  caret-color: #7cb342 !important;
}

.bg-light-green-darken-2 {
  background-color: #689f38 !important;
  border-color: #689f38 !important;
}

.text-light-green-darken-2 {
  color: #689f38 !important;
  caret-color: #689f38 !important;
}

.bg-light-green-darken-3 {
  background-color: #558b2f !important;
  border-color: #558b2f !important;
}

.text-light-green-darken-3 {
  color: #558b2f !important;
  caret-color: #558b2f !important;
}

.bg-light-green-darken-4 {
  background-color: #33691e !important;
  border-color: #33691e !important;
}

.text-light-green-darken-4 {
  color: #33691e !important;
  caret-color: #33691e !important;
}

.bg-light-green-accent-1 {
  background-color: #ccff90 !important;
  border-color: #ccff90 !important;
}

.text-light-green-accent-1 {
  color: #ccff90 !important;
  caret-color: #ccff90 !important;
}

.bg-light-green-accent-2 {
  background-color: #b2ff59 !important;
  border-color: #b2ff59 !important;
}

.text-light-green-accent-2 {
  color: #b2ff59 !important;
  caret-color: #b2ff59 !important;
}

.bg-light-green-accent-3 {
  background-color: #76ff03 !important;
  border-color: #76ff03 !important;
}

.text-light-green-accent-3 {
  color: #76ff03 !important;
  caret-color: #76ff03 !important;
}

.bg-light-green-accent-4 {
  background-color: #64dd17 !important;
  border-color: #64dd17 !important;
}

.text-light-green-accent-4 {
  color: #64dd17 !important;
  caret-color: #64dd17 !important;
}

.bg-lime {
  background-color: #cddc39 !important;
  border-color: #cddc39 !important;
}

.text-lime {
  color: #cddc39 !important;
  caret-color: #cddc39 !important;
}

.bg-lime-lighten-5 {
  background-color: #f9fbe7 !important;
  border-color: #f9fbe7 !important;
}

.text-lime-lighten-5 {
  color: #f9fbe7 !important;
  caret-color: #f9fbe7 !important;
}

.bg-lime-lighten-4 {
  background-color: #f0f4c3 !important;
  border-color: #f0f4c3 !important;
}

.text-lime-lighten-4 {
  color: #f0f4c3 !important;
  caret-color: #f0f4c3 !important;
}

.bg-lime-lighten-3 {
  background-color: #e6ee9c !important;
  border-color: #e6ee9c !important;
}

.text-lime-lighten-3 {
  color: #e6ee9c !important;
  caret-color: #e6ee9c !important;
}

.bg-lime-lighten-2 {
  background-color: #dce775 !important;
  border-color: #dce775 !important;
}

.text-lime-lighten-2 {
  color: #dce775 !important;
  caret-color: #dce775 !important;
}

.bg-lime-lighten-1 {
  background-color: #d4e157 !important;
  border-color: #d4e157 !important;
}

.text-lime-lighten-1 {
  color: #d4e157 !important;
  caret-color: #d4e157 !important;
}

.bg-lime-darken-1 {
  background-color: #c0ca33 !important;
  border-color: #c0ca33 !important;
}

.text-lime-darken-1 {
  color: #c0ca33 !important;
  caret-color: #c0ca33 !important;
}

.bg-lime-darken-2 {
  background-color: #afb42b !important;
  border-color: #afb42b !important;
}

.text-lime-darken-2 {
  color: #afb42b !important;
  caret-color: #afb42b !important;
}

.bg-lime-darken-3 {
  background-color: #9e9d24 !important;
  border-color: #9e9d24 !important;
}

.text-lime-darken-3 {
  color: #9e9d24 !important;
  caret-color: #9e9d24 !important;
}

.bg-lime-darken-4 {
  background-color: #827717 !important;
  border-color: #827717 !important;
}

.text-lime-darken-4 {
  color: #827717 !important;
  caret-color: #827717 !important;
}

.bg-lime-accent-1 {
  background-color: #f4ff81 !important;
  border-color: #f4ff81 !important;
}

.text-lime-accent-1 {
  color: #f4ff81 !important;
  caret-color: #f4ff81 !important;
}

.bg-lime-accent-2 {
  background-color: #eeff41 !important;
  border-color: #eeff41 !important;
}

.text-lime-accent-2 {
  color: #eeff41 !important;
  caret-color: #eeff41 !important;
}

.bg-lime-accent-3 {
  background-color: #c6ff00 !important;
  border-color: #c6ff00 !important;
}

.text-lime-accent-3 {
  color: #c6ff00 !important;
  caret-color: #c6ff00 !important;
}

.bg-lime-accent-4 {
  background-color: #aeea00 !important;
  border-color: #aeea00 !important;
}

.text-lime-accent-4 {
  color: #aeea00 !important;
  caret-color: #aeea00 !important;
}

.bg-yellow {
  background-color: #ffeb3b !important;
  border-color: #ffeb3b !important;
}

.text-yellow {
  color: #ffeb3b !important;
  caret-color: #ffeb3b !important;
}

.bg-yellow-lighten-5 {
  background-color: #fffde7 !important;
  border-color: #fffde7 !important;
}

.text-yellow-lighten-5 {
  color: #fffde7 !important;
  caret-color: #fffde7 !important;
}

.bg-yellow-lighten-4 {
  background-color: #fff9c4 !important;
  border-color: #fff9c4 !important;
}

.text-yellow-lighten-4 {
  color: #fff9c4 !important;
  caret-color: #fff9c4 !important;
}

.bg-yellow-lighten-3 {
  background-color: #fff59d !important;
  border-color: #fff59d !important;
}

.text-yellow-lighten-3 {
  color: #fff59d !important;
  caret-color: #fff59d !important;
}

.bg-yellow-lighten-2 {
  background-color: #fff176 !important;
  border-color: #fff176 !important;
}

.text-yellow-lighten-2 {
  color: #fff176 !important;
  caret-color: #fff176 !important;
}

.bg-yellow-lighten-1 {
  background-color: #ffee58 !important;
  border-color: #ffee58 !important;
}

.text-yellow-lighten-1 {
  color: #ffee58 !important;
  caret-color: #ffee58 !important;
}

.bg-yellow-darken-1 {
  background-color: #fdd835 !important;
  border-color: #fdd835 !important;
}

.text-yellow-darken-1 {
  color: #fdd835 !important;
  caret-color: #fdd835 !important;
}

.bg-yellow-darken-2 {
  background-color: #fbc02d !important;
  border-color: #fbc02d !important;
}

.text-yellow-darken-2 {
  color: #fbc02d !important;
  caret-color: #fbc02d !important;
}

.bg-yellow-darken-3 {
  background-color: #f9a825 !important;
  border-color: #f9a825 !important;
}

.text-yellow-darken-3 {
  color: #f9a825 !important;
  caret-color: #f9a825 !important;
}

.bg-yellow-darken-4 {
  background-color: #f57f17 !important;
  border-color: #f57f17 !important;
}

.text-yellow-darken-4 {
  color: #f57f17 !important;
  caret-color: #f57f17 !important;
}

.bg-yellow-accent-1 {
  background-color: #ffff8d !important;
  border-color: #ffff8d !important;
}

.text-yellow-accent-1 {
  color: #ffff8d !important;
  caret-color: #ffff8d !important;
}

.bg-yellow-accent-2 {
  background-color: #ffff00 !important;
  border-color: #ffff00 !important;
}

.text-yellow-accent-2 {
  color: #ffff00 !important;
  caret-color: #ffff00 !important;
}

.bg-yellow-accent-3 {
  background-color: #ffea00 !important;
  border-color: #ffea00 !important;
}

.text-yellow-accent-3 {
  color: #ffea00 !important;
  caret-color: #ffea00 !important;
}

.bg-yellow-accent-4 {
  background-color: #ffd600 !important;
  border-color: #ffd600 !important;
}

.text-yellow-accent-4 {
  color: #ffd600 !important;
  caret-color: #ffd600 !important;
}

.bg-amber {
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
}

.text-amber {
  color: #ffc107 !important;
  caret-color: #ffc107 !important;
}

.bg-amber-lighten-5 {
  background-color: #fff8e1 !important;
  border-color: #fff8e1 !important;
}

.text-amber-lighten-5 {
  color: #fff8e1 !important;
  caret-color: #fff8e1 !important;
}

.bg-amber-lighten-4 {
  background-color: #ffecb3 !important;
  border-color: #ffecb3 !important;
}

.text-amber-lighten-4 {
  color: #ffecb3 !important;
  caret-color: #ffecb3 !important;
}

.bg-amber-lighten-3 {
  background-color: #ffe082 !important;
  border-color: #ffe082 !important;
}

.text-amber-lighten-3 {
  color: #ffe082 !important;
  caret-color: #ffe082 !important;
}

.bg-amber-lighten-2 {
  background-color: #ffd54f !important;
  border-color: #ffd54f !important;
}

.text-amber-lighten-2 {
  color: #ffd54f !important;
  caret-color: #ffd54f !important;
}

.bg-amber-lighten-1 {
  background-color: #ffca28 !important;
  border-color: #ffca28 !important;
}

.text-amber-lighten-1 {
  color: #ffca28 !important;
  caret-color: #ffca28 !important;
}

.bg-amber-darken-1 {
  background-color: #ffb300 !important;
  border-color: #ffb300 !important;
}

.text-amber-darken-1 {
  color: #ffb300 !important;
  caret-color: #ffb300 !important;
}

.bg-amber-darken-2 {
  background-color: #ffa000 !important;
  border-color: #ffa000 !important;
}

.text-amber-darken-2 {
  color: #ffa000 !important;
  caret-color: #ffa000 !important;
}

.bg-amber-darken-3 {
  background-color: #ff8f00 !important;
  border-color: #ff8f00 !important;
}

.text-amber-darken-3 {
  color: #ff8f00 !important;
  caret-color: #ff8f00 !important;
}

.bg-amber-darken-4 {
  background-color: #ff6f00 !important;
  border-color: #ff6f00 !important;
}

.text-amber-darken-4 {
  color: #ff6f00 !important;
  caret-color: #ff6f00 !important;
}

.bg-amber-accent-1 {
  background-color: #ffe57f !important;
  border-color: #ffe57f !important;
}

.text-amber-accent-1 {
  color: #ffe57f !important;
  caret-color: #ffe57f !important;
}

.bg-amber-accent-2 {
  background-color: #ffd740 !important;
  border-color: #ffd740 !important;
}

.text-amber-accent-2 {
  color: #ffd740 !important;
  caret-color: #ffd740 !important;
}

.bg-amber-accent-3 {
  background-color: #ffc400 !important;
  border-color: #ffc400 !important;
}

.text-amber-accent-3 {
  color: #ffc400 !important;
  caret-color: #ffc400 !important;
}

.bg-amber-accent-4 {
  background-color: #ffab00 !important;
  border-color: #ffab00 !important;
}

.text-amber-accent-4 {
  color: #ffab00 !important;
  caret-color: #ffab00 !important;
}

.bg-orange {
  background-color: #ff9800 !important;
  border-color: #ff9800 !important;
}

.text-orange {
  color: #ff9800 !important;
  caret-color: #ff9800 !important;
}

.bg-orange-lighten-5 {
  background-color: #fff3e0 !important;
  border-color: #fff3e0 !important;
}

.text-orange-lighten-5 {
  color: #fff3e0 !important;
  caret-color: #fff3e0 !important;
}

.bg-orange-lighten-4 {
  background-color: #ffe0b2 !important;
  border-color: #ffe0b2 !important;
}

.text-orange-lighten-4 {
  color: #ffe0b2 !important;
  caret-color: #ffe0b2 !important;
}

.bg-orange-lighten-3 {
  background-color: #ffcc80 !important;
  border-color: #ffcc80 !important;
}

.text-orange-lighten-3 {
  color: #ffcc80 !important;
  caret-color: #ffcc80 !important;
}

.bg-orange-lighten-2 {
  background-color: #ffb74d !important;
  border-color: #ffb74d !important;
}

.text-orange-lighten-2 {
  color: #ffb74d !important;
  caret-color: #ffb74d !important;
}

.bg-orange-lighten-1 {
  background-color: #ffa726 !important;
  border-color: #ffa726 !important;
}

.text-orange-lighten-1 {
  color: #ffa726 !important;
  caret-color: #ffa726 !important;
}

.bg-orange-darken-1 {
  background-color: #fb8c00 !important;
  border-color: #fb8c00 !important;
}

.text-orange-darken-1 {
  color: #fb8c00 !important;
  caret-color: #fb8c00 !important;
}

.bg-orange-darken-2 {
  background-color: #f57c00 !important;
  border-color: #f57c00 !important;
}

.text-orange-darken-2 {
  color: #f57c00 !important;
  caret-color: #f57c00 !important;
}

.bg-orange-darken-3 {
  background-color: #ef6c00 !important;
  border-color: #ef6c00 !important;
}

.text-orange-darken-3 {
  color: #ef6c00 !important;
  caret-color: #ef6c00 !important;
}

.bg-orange-darken-4 {
  background-color: #e65100 !important;
  border-color: #e65100 !important;
}

.text-orange-darken-4 {
  color: #e65100 !important;
  caret-color: #e65100 !important;
}

.bg-orange-accent-1 {
  background-color: #ffd180 !important;
  border-color: #ffd180 !important;
}

.text-orange-accent-1 {
  color: #ffd180 !important;
  caret-color: #ffd180 !important;
}

.bg-orange-accent-2 {
  background-color: #ffab40 !important;
  border-color: #ffab40 !important;
}

.text-orange-accent-2 {
  color: #ffab40 !important;
  caret-color: #ffab40 !important;
}

.bg-orange-accent-3 {
  background-color: #ff9100 !important;
  border-color: #ff9100 !important;
}

.text-orange-accent-3 {
  color: #ff9100 !important;
  caret-color: #ff9100 !important;
}

.bg-orange-accent-4 {
  background-color: #ff6d00 !important;
  border-color: #ff6d00 !important;
}

.text-orange-accent-4 {
  color: #ff6d00 !important;
  caret-color: #ff6d00 !important;
}

.bg-deep-orange {
  background-color: #ff5722 !important;
  border-color: #ff5722 !important;
}

.text-deep-orange {
  color: #ff5722 !important;
  caret-color: #ff5722 !important;
}

.bg-deep-orange-lighten-5 {
  background-color: #fbe9e7 !important;
  border-color: #fbe9e7 !important;
}

.text-deep-orange-lighten-5 {
  color: #fbe9e7 !important;
  caret-color: #fbe9e7 !important;
}

.bg-deep-orange-lighten-4 {
  background-color: #ffccbc !important;
  border-color: #ffccbc !important;
}

.text-deep-orange-lighten-4 {
  color: #ffccbc !important;
  caret-color: #ffccbc !important;
}

.bg-deep-orange-lighten-3 {
  background-color: #ffab91 !important;
  border-color: #ffab91 !important;
}

.text-deep-orange-lighten-3 {
  color: #ffab91 !important;
  caret-color: #ffab91 !important;
}

.bg-deep-orange-lighten-2 {
  background-color: #ff8a65 !important;
  border-color: #ff8a65 !important;
}

.text-deep-orange-lighten-2 {
  color: #ff8a65 !important;
  caret-color: #ff8a65 !important;
}

.bg-deep-orange-lighten-1 {
  background-color: #ff7043 !important;
  border-color: #ff7043 !important;
}

.text-deep-orange-lighten-1 {
  color: #ff7043 !important;
  caret-color: #ff7043 !important;
}

.bg-deep-orange-darken-1 {
  background-color: #f4511e !important;
  border-color: #f4511e !important;
}

.text-deep-orange-darken-1 {
  color: #f4511e !important;
  caret-color: #f4511e !important;
}

.bg-deep-orange-darken-2 {
  background-color: #e64a19 !important;
  border-color: #e64a19 !important;
}

.text-deep-orange-darken-2 {
  color: #e64a19 !important;
  caret-color: #e64a19 !important;
}

.bg-deep-orange-darken-3 {
  background-color: #d84315 !important;
  border-color: #d84315 !important;
}

.text-deep-orange-darken-3 {
  color: #d84315 !important;
  caret-color: #d84315 !important;
}

.bg-deep-orange-darken-4 {
  background-color: #bf360c !important;
  border-color: #bf360c !important;
}

.text-deep-orange-darken-4 {
  color: #bf360c !important;
  caret-color: #bf360c !important;
}

.bg-deep-orange-accent-1 {
  background-color: #ff9e80 !important;
  border-color: #ff9e80 !important;
}

.text-deep-orange-accent-1 {
  color: #ff9e80 !important;
  caret-color: #ff9e80 !important;
}

.bg-deep-orange-accent-2 {
  background-color: #ff6e40 !important;
  border-color: #ff6e40 !important;
}

.text-deep-orange-accent-2 {
  color: #ff6e40 !important;
  caret-color: #ff6e40 !important;
}

.bg-deep-orange-accent-3 {
  background-color: #ff3d00 !important;
  border-color: #ff3d00 !important;
}

.text-deep-orange-accent-3 {
  color: #ff3d00 !important;
  caret-color: #ff3d00 !important;
}

.bg-deep-orange-accent-4 {
  background-color: #dd2c00 !important;
  border-color: #dd2c00 !important;
}

.text-deep-orange-accent-4 {
  color: #dd2c00 !important;
  caret-color: #dd2c00 !important;
}

.bg-brown {
  background-color: #795548 !important;
  border-color: #795548 !important;
}

.text-brown {
  color: #795548 !important;
  caret-color: #795548 !important;
}

.bg-brown-lighten-5 {
  background-color: #efebe9 !important;
  border-color: #efebe9 !important;
}

.text-brown-lighten-5 {
  color: #efebe9 !important;
  caret-color: #efebe9 !important;
}

.bg-brown-lighten-4 {
  background-color: #d7ccc8 !important;
  border-color: #d7ccc8 !important;
}

.text-brown-lighten-4 {
  color: #d7ccc8 !important;
  caret-color: #d7ccc8 !important;
}

.bg-brown-lighten-3 {
  background-color: #bcaaa4 !important;
  border-color: #bcaaa4 !important;
}

.text-brown-lighten-3 {
  color: #bcaaa4 !important;
  caret-color: #bcaaa4 !important;
}

.bg-brown-lighten-2 {
  background-color: #a1887f !important;
  border-color: #a1887f !important;
}

.text-brown-lighten-2 {
  color: #a1887f !important;
  caret-color: #a1887f !important;
}

.bg-brown-lighten-1 {
  background-color: #8d6e63 !important;
  border-color: #8d6e63 !important;
}

.text-brown-lighten-1 {
  color: #8d6e63 !important;
  caret-color: #8d6e63 !important;
}

.bg-brown-darken-1 {
  background-color: #6d4c41 !important;
  border-color: #6d4c41 !important;
}

.text-brown-darken-1 {
  color: #6d4c41 !important;
  caret-color: #6d4c41 !important;
}

.bg-brown-darken-2 {
  background-color: #5d4037 !important;
  border-color: #5d4037 !important;
}

.text-brown-darken-2 {
  color: #5d4037 !important;
  caret-color: #5d4037 !important;
}

.bg-brown-darken-3 {
  background-color: #4e342e !important;
  border-color: #4e342e !important;
}

.text-brown-darken-3 {
  color: #4e342e !important;
  caret-color: #4e342e !important;
}

.bg-brown-darken-4 {
  background-color: #3e2723 !important;
  border-color: #3e2723 !important;
}

.text-brown-darken-4 {
  color: #3e2723 !important;
  caret-color: #3e2723 !important;
}

.bg-blue-grey {
  background-color: #607d8b !important;
  border-color: #607d8b !important;
}

.text-blue-grey {
  color: #607d8b !important;
  caret-color: #607d8b !important;
}

.bg-blue-grey-lighten-5 {
  background-color: #eceff1 !important;
  border-color: #eceff1 !important;
}

.text-blue-grey-lighten-5 {
  color: #eceff1 !important;
  caret-color: #eceff1 !important;
}

.bg-blue-grey-lighten-4 {
  background-color: #cfd8dc !important;
  border-color: #cfd8dc !important;
}

.text-blue-grey-lighten-4 {
  color: #cfd8dc !important;
  caret-color: #cfd8dc !important;
}

.bg-blue-grey-lighten-3 {
  background-color: #b0bec5 !important;
  border-color: #b0bec5 !important;
}

.text-blue-grey-lighten-3 {
  color: #b0bec5 !important;
  caret-color: #b0bec5 !important;
}

.bg-blue-grey-lighten-2 {
  background-color: #90a4ae !important;
  border-color: #90a4ae !important;
}

.text-blue-grey-lighten-2 {
  color: #90a4ae !important;
  caret-color: #90a4ae !important;
}

.bg-blue-grey-lighten-1 {
  background-color: #78909c !important;
  border-color: #78909c !important;
}

.text-blue-grey-lighten-1 {
  color: #78909c !important;
  caret-color: #78909c !important;
}

.bg-blue-grey-darken-1 {
  background-color: #546e7a !important;
  border-color: #546e7a !important;
}

.text-blue-grey-darken-1 {
  color: #546e7a !important;
  caret-color: #546e7a !important;
}

.bg-blue-grey-darken-2 {
  background-color: #455a64 !important;
  border-color: #455a64 !important;
}

.text-blue-grey-darken-2 {
  color: #455a64 !important;
  caret-color: #455a64 !important;
}

.bg-blue-grey-darken-3 {
  background-color: #37474f !important;
  border-color: #37474f !important;
}

.text-blue-grey-darken-3 {
  color: #37474f !important;
  caret-color: #37474f !important;
}

.bg-blue-grey-darken-4 {
  background-color: #263238 !important;
  border-color: #263238 !important;
}

.text-blue-grey-darken-4 {
  color: #263238 !important;
  caret-color: #263238 !important;
}

.bg-grey {
  background-color: #9e9e9e !important;
  border-color: #9e9e9e !important;
}

.text-grey {
  color: #9e9e9e !important;
  caret-color: #9e9e9e !important;
}

.bg-grey-lighten-5 {
  background-color: #fafafa !important;
  border-color: #fafafa !important;
}

.text-grey-lighten-5 {
  color: #fafafa !important;
  caret-color: #fafafa !important;
}

.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
  border-color: #f5f5f5 !important;
}

.text-grey-lighten-4 {
  color: #f5f5f5 !important;
  caret-color: #f5f5f5 !important;
}

.bg-grey-lighten-3 {
  background-color: #eeeeee !important;
  border-color: #eeeeee !important;
}

.text-grey-lighten-3 {
  color: #eeeeee !important;
  caret-color: #eeeeee !important;
}

.bg-grey-lighten-2 {
  background-color: #e0e0e0 !important;
  border-color: #e0e0e0 !important;
}

.text-grey-lighten-2 {
  color: #e0e0e0 !important;
  caret-color: #e0e0e0 !important;
}

.bg-grey-lighten-1 {
  background-color: #bdbdbd !important;
  border-color: #bdbdbd !important;
}

.text-grey-lighten-1 {
  color: #bdbdbd !important;
  caret-color: #bdbdbd !important;
}

.bg-grey-darken-1 {
  background-color: #757575 !important;
  border-color: #757575 !important;
}

.text-grey-darken-1 {
  color: #757575 !important;
  caret-color: #757575 !important;
}

.bg-grey-darken-2 {
  background-color: #616161 !important;
  border-color: #616161 !important;
}

.text-grey-darken-2 {
  color: #616161 !important;
  caret-color: #616161 !important;
}

.bg-grey-darken-3 {
  background-color: #424242 !important;
  border-color: #424242 !important;
}

.text-grey-darken-3 {
  color: #424242 !important;
  caret-color: #424242 !important;
}

.bg-grey-darken-4 {
  background-color: #212121 !important;
  border-color: #212121 !important;
}

.text-grey-darken-4 {
  color: #212121 !important;
  caret-color: #212121 !important;
}

.bg-shades-black {
  background-color: #000000 !important;
  border-color: #000000 !important;
}

.text-shades-black {
  color: #000000 !important;
  caret-color: #000000 !important;
}

.bg-shades-white {
  background-color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

.text-shades-white {
  color: #FFFFFF !important;
  caret-color: #FFFFFF !important;
}

.bg-shades-transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}

.text-shades-transparent {
  color: transparent !important;
  caret-color: transparent !important;
}

/*!
 * ress.css \u2022 v2.0.4
 * MIT License
 * github.com/filipelinhares/ress
 */
/* # =================================================================
   # Global selectors
   # ================================================================= */
html {
  box-sizing: border-box;
  overflow-y: scroll;
  /* All browsers without overlaying scrollbars */
  -webkit-text-size-adjust: 100%;
  /* Prevent adjustments of font size after orientation changes in iOS */
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  /* Set \`background-repeat: no-repeat\` to all elements and pseudo elements */
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit;
  /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}

* {
  padding: 0;
  /* Reset \`padding\` and \`margin\` of all elements */
  margin: 0;
}

/* # =================================================================
   # General elements
   # ================================================================= */
hr {
  overflow: visible;
  /* Show the overflow in Edge and IE */
  height: 0;
  /* Add the correct box sizing in Firefox */
}

details,
main {
  display: block;
  /* Render the \`main\` element consistently in IE. */
}

summary {
  display: list-item;
  /* Add the correct display in all browsers */
}

small {
  font-size: 80%;
  /* Set font-size to 80% in \`small\` elements */
}

[hidden] {
  display: none;
  /* Add the correct display in IE */
}

abbr[title] {
  border-bottom: none;
  /* Remove the bottom border in Chrome 57 */
  /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

a {
  background-color: transparent;
  /* Remove the gray background on active links in IE 10 */
}

a:active,
a:hover {
  outline-width: 0;
  /* Remove the outline when hovering in all browsers */
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  /* Specify the font family of code elements */
}

pre {
  font-size: 1em;
  /* Correct the odd \`em\` font sizing in all browsers */
}

b,
strong {
  font-weight: bolder;
  /* Add the correct font weight in Chrome, Edge, and Safari */
}

/* https://gist.github.com/unruthless/413930 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* # =================================================================
   # Forms
   # ================================================================= */
input {
  border-radius: 0;
}

/* Replace pointer cursor in disabled elements */
[disabled] {
  cursor: default;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
  /* Correct the cursor style of increment and decrement buttons in Chrome */
}

[type=search] {
  -webkit-appearance: textfield;
  /* Correct the odd appearance in Chrome and Safari */
  outline-offset: -2px;
  /* Correct the outline style in Safari */
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  /* Remove the inner padding in Chrome and Safari on macOS */
}

textarea {
  overflow: auto;
  /* Internet Explorer 11+ */
  resize: vertical;
  /* Specify textarea resizability */
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  /* Specify font inheritance of form elements */
}

optgroup {
  font-weight: bold;
  /* Restore the font weight unset by the previous rule */
}

button {
  overflow: visible;
  /* Address \`overflow\` set to \`hidden\` in IE 8/9/10/11 */
}

button,
select {
  text-transform: none;
  /* Firefox 40+, Internet Explorer 11- */
}

/* Apply cursor pointer to button elements */
button,
[type=button],
[type=reset],
[type=submit],
[role=button] {
  cursor: pointer;
  color: inherit;
}

/* Remove inner padding and border in Firefox 4+ */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/* Replace focus style removed in the border reset above */
button:-moz-focusring,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  outline: 1px dotted ButtonText;
}

button,
html [type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
  /* Correct the inability to style clickable types in iOS */
}

/* Remove the default button styling in all browsers */
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
}

/* Style select like a standard input */
select {
  -moz-appearance: none;
  /* Firefox 36+ */
  -webkit-appearance: none;
  /* Chrome 41+ */
}

select::-ms-expand {
  display: none;
  /* Internet Explorer 11+ */
}

select::-ms-value {
  color: currentColor;
  /* Internet Explorer 11+ */
}

legend {
  border: 0;
  /* Correct \`color\` not being inherited in IE 8/9/10/11 */
  color: inherit;
  /* Correct the color inheritance from \`fieldset\` elements in IE */
  display: table;
  /* Correct the text wrapping in Edge and IE */
  max-width: 100%;
  /* Correct the text wrapping in Edge and IE */
  white-space: normal;
  /* Correct the text wrapping in Edge and IE */
  max-width: 100%;
  /* Correct the text wrapping in Edge 18- and IE */
}

::-webkit-file-upload-button {
  /* Correct the inability to style clickable types in iOS and Safari */
  -webkit-appearance: button;
  color: inherit;
  font: inherit;
  /* Change font properties to \`inherit\` in Chrome and Safari */
}

::-ms-clear,
::-ms-reveal {
  display: none;
}

/* # =================================================================
   # Specify media element style
   # ================================================================= */
img {
  border-style: none;
  /* Remove border when inside \`a\` element in IE 8/9/10 */
}

/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
progress {
  vertical-align: baseline;
}

/* # =================================================================
   # Accessibility
   # ================================================================= */
/* Hide content from screens but not screenreaders */
@media screen {
  [hidden~=screen] {
    display: inherit;
  }

  [hidden~=screen]:not(:active):not(:focus):not(:target) {
    position: absolute !important;
    clip: rect(0 0 0 0) !important;
  }
}
/* Specify the progress cursor of updating elements */
[aria-busy=true] {
  cursor: progress;
}

/* Specify the pointer cursor of trigger elements */
[aria-controls] {
  cursor: pointer;
}

/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
[aria-disabled=true] {
  cursor: default;
}

.elevation-24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12) !important;
}

.elevation-23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12) !important;
}

.elevation-22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12) !important;
}

.elevation-21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12) !important;
}

.elevation-20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12) !important;
}

.elevation-19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12) !important;
}

.elevation-18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12) !important;
}

.elevation-17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12) !important;
}

.elevation-16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12) !important;
}

.elevation-15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12) !important;
}

.elevation-14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12) !important;
}

.elevation-13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12) !important;
}

.elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12) !important;
}

.elevation-11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12) !important;
}

.elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12) !important;
}

.elevation-9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12) !important;
}

.elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
}

.elevation-7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12) !important;
}

.elevation-6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important;
}

.elevation-5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12) !important;
}

.elevation-4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
}

.elevation-3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12) !important;
}

.elevation-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
}

.elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;
}

.elevation-0 {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important;
}

.carousel-transition-enter-from {
  transform: translate(100%, 0);
}
.carousel-transition-leave-from, .carousel-transition-leave-to {
  position: absolute;
  top: 0;
  transform: translate(-100%, 0);
}

.carousel-reverse-transition-enter-from {
  transform: translate(-100%, 0);
}
.carousel-reverse-transition-leave-from, .carousel-reverse-transition-leave-to {
  position: absolute;
  top: 0;
  transform: translate(100%, 0);
}

.dialog-transition-enter-active {
  transition: 225ms cubic-bezier(0, 0, 0.2, 1);
}
.dialog-transition-leave-active {
  transition: 125ms cubic-bezier(0.4, 0, 1, 1);
}
.dialog-transition-enter-active, .dialog-transition-leave-active {
  transition-property: transform, opacity;
  pointer-events: none;
}
.dialog-transition-enter-from, .dialog-transition-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.dialog-transition-enter-to, .dialog-transition-leave-from {
  opacity: 1;
}

.dialog-bottom-transition-enter-from, .dialog-bottom-transition-leave-to {
  transform: translateY(100%);
}

.dialog-top-transition-enter-from, .dialog-top-transition-leave-to {
  transform: translateY(-100%);
}

.picker-transition-enter-from, .picker-transition-leave-to,
.picker-reverse-transition-enter-from,
.picker-reverse-transition-leave-to {
  opacity: 0;
}
.picker-transition-leave-from, .picker-transition-leave-active, .picker-transition-leave-to,
.picker-reverse-transition-leave-from,
.picker-reverse-transition-leave-active,
.picker-reverse-transition-leave-to {
  position: absolute !important;
}

.picker-transition-enter-from {
  transform: translate(0, 100%);
}
.picker-transition-leave-to {
  transform: translate(0, -100%);
}

.picker-reverse-transition-enter-from {
  transform: translate(0, -100%);
}
.picker-reverse-transition-leave-to {
  transform: translate(0, 100%);
}

.picker-title-transition-enter-to, .picker-title-transition-leave-from {
  transform: translate(0, 0);
}
.picker-title-transition-enter-from {
  transform: translate(-100%, 0);
}
.picker-title-transition-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
.picker-title-transition-leave-from, .picker-title-transition-leave-to, .picker-title-transition-leave-active {
  position: absolute !important;
}

.tab-transition-enter-from {
  transform: translate(100%, 0);
}
.tab-transition-leave-from, .tab-transition-leave-active {
  position: absolute;
  top: 0;
}
.tab-transition-leave-to {
  position: absolute;
  transform: translate(-100%, 0);
}

.tab-reverse-transition-enter-from {
  transform: translate(-100%, 0);
}
.tab-reverse-transition-leave-from, .tab-reverse-transition-leave-to {
  top: 0;
  position: absolute;
  transform: translate(100%, 0);
}

.expand-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-x-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-x-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-x-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-enter-from, .scale-transition-leave-from, .scale-transition-leave-to {
  opacity: 0;
  transform: scale(0);
}

.scale-rotate-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-transition-enter-from, .scale-rotate-transition-leave, .scale-rotate-transition-leave-to {
  opacity: 0;
  transform: scale(0) rotate(-45deg);
}

.scale-rotate-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-reverse-transition-enter-from, .scale-rotate-reverse-transition-leave-from, .scale-rotate-reverse-transition-leave-to {
  opacity: 0;
  transform: scale(0) rotate(45deg);
}

.message-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-transition-enter-from, .message-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.message-transition-leave-from, .message-transition-leave-active {
  position: absolute;
}

.slide-y-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-transition-enter-from, .slide-y-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.slide-y-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-reverse-transition-enter-from, .slide-y-reverse-transition-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.scroll-y-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-transition-enter-from, .scroll-y-transition-leave-to {
  opacity: 0;
}
.scroll-y-transition-enter-from {
  transform: translateY(-15px);
}
.scroll-y-transition-leave-to {
  transform: translateY(15px);
}

.scroll-y-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-reverse-transition-enter-from, .scroll-y-reverse-transition-leave-to {
  opacity: 0;
}
.scroll-y-reverse-transition-enter-from {
  transform: translateY(15px);
}
.scroll-y-reverse-transition-leave-to {
  transform: translateY(-15px);
}

.scroll-x-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-transition-enter-from, .scroll-x-transition-leave-to {
  opacity: 0;
}
.scroll-x-transition-enter-from {
  transform: translateX(-15px);
}
.scroll-x-transition-leave-to {
  transform: translateX(15px);
}

.scroll-x-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-reverse-transition-enter-from, .scroll-x-reverse-transition-leave-to {
  opacity: 0;
}
.scroll-x-reverse-transition-enter-from {
  transform: translateX(15px);
}
.scroll-x-reverse-transition-leave-to {
  transform: translateX(-15px);
}

.slide-x-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-transition-enter-from, .slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}

.slide-x-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-reverse-transition-enter-from, .slide-x-reverse-transition-leave-to {
  opacity: 0;
  transform: translateX(15px);
}

.fade-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-transition-enter-from, .fade-transition-leave-to {
  opacity: 0 !important;
}

.fab-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fab-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fab-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fab-transition-enter-from, .fab-transition-leave-to {
  transform: scale(0) rotate(-45deg);
}

.v-locale--is-rtl {
  direction: rtl;
}
.v-locale--is-ltr {
  direction: ltr;
}

.blockquote {
  padding: 16px 0 16px 24px;
  font-size: 18px;
  font-weight: 300;
}

html {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  font-size: 1rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html.overflow-y-hidden {
  overflow-y: hidden !important;
}

:root {
  --v-theme-background: #fff;
  --v-theme-on-background: #000;
  --v-theme-surface: #fff;
  --v-theme-on-surface: #000;
  --v-theme-overlay-multiplier: 1;
  --v-scrollbar-offset: 0px;
}

@supports (-webkit-touch-callout: none) {
  body {
    cursor: pointer;
  }
}
@media only print {
  .hidden-print-only {
    display: none !important;
  }
}

@media only screen {
  .hidden-screen-only {
    display: none !important;
  }
}

@media (max-width: 599px) {
  .hidden-xs {
    display: none !important;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .hidden-sm {
    display: none !important;
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .hidden-md {
    display: none !important;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .hidden-lg {
    display: none !important;
  }
}

@media (min-width: 1920px) and (max-width: 2559px) {
  .hidden-xl {
    display: none !important;
  }
}

@media (min-width: 2560px) {
  .hidden-xxl {
    display: none !important;
  }
}

@media (min-width: 600px) {
  .hidden-sm-and-up {
    display: none !important;
  }
}

@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none !important;
  }
}

@media (min-width: 1280px) {
  .hidden-lg-and-up {
    display: none !important;
  }
}

@media (min-width: 1920px) {
  .hidden-xl-and-up {
    display: none !important;
  }
}

@media (max-width: 959px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}

@media (max-width: 1279px) {
  .hidden-md-and-down {
    display: none !important;
  }
}

@media (max-width: 1919px) {
  .hidden-lg-and-down {
    display: none !important;
  }
}

@media (max-width: 2559px) {
  .hidden-xl-and-down {
    display: none !important;
  }
}

.d-sr-only,
.d-sr-only-focusable:not(:focus) {
  border: 0 !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}

.font-weight-thin {
  font-weight: 100 !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-regular {
  font-weight: 400 !important;
}

.font-weight-medium {
  font-weight: 500 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-black {
  font-weight: 900 !important;
}

.font-italic {
  font-style: italic !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-x-hidden {
  overflow-x: hidden !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.overflow-y-hidden {
  overflow-y: hidden !important;
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.float-none {
  float: none !important;
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.v-locale--is-rtl .float-end {
  float: left !important;
}

.v-locale--is-rtl .float-start {
  float: right !important;
}

.v-locale--is-ltr .float-end {
  float: right !important;
}

.v-locale--is-ltr .float-start {
  float: left !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-start {
  justify-content: flex-start !important;
}

.justify-end {
  justify-content: flex-end !important;
}

.justify-center {
  justify-content: center !important;
}

.justify-space-between {
  justify-content: space-between !important;
}

.justify-space-around {
  justify-content: space-around !important;
}

.align-start {
  align-items: flex-start !important;
}

.align-end {
  align-items: flex-end !important;
}

.align-center {
  align-items: center !important;
}

.align-baseline {
  align-items: baseline !important;
}

.align-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-space-between {
  align-content: space-between !important;
}

.align-content-space-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-6 {
  order: 6 !important;
}

.order-7 {
  order: 7 !important;
}

.order-8 {
  order: 8 !important;
}

.order-9 {
  order: 9 !important;
}

.order-10 {
  order: 10 !important;
}

.order-11 {
  order: 11 !important;
}

.order-12 {
  order: 12 !important;
}

.order-last {
  order: 13 !important;
}

.ma-0 {
  margin: 0px !important;
}

.ma-1 {
  margin: 4px !important;
}

.ma-2 {
  margin: 8px !important;
}

.ma-3 {
  margin: 12px !important;
}

.ma-4 {
  margin: 16px !important;
}

.ma-5 {
  margin: 20px !important;
}

.ma-6 {
  margin: 24px !important;
}

.ma-7 {
  margin: 28px !important;
}

.ma-8 {
  margin: 32px !important;
}

.ma-9 {
  margin: 36px !important;
}

.ma-10 {
  margin: 40px !important;
}

.ma-11 {
  margin: 44px !important;
}

.ma-12 {
  margin: 48px !important;
}

.ma-13 {
  margin: 52px !important;
}

.ma-14 {
  margin: 56px !important;
}

.ma-15 {
  margin: 60px !important;
}

.ma-16 {
  margin: 64px !important;
}

.ma-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.mx-1 {
  margin-right: 4px !important;
  margin-left: 4px !important;
}

.mx-2 {
  margin-right: 8px !important;
  margin-left: 8px !important;
}

.mx-3 {
  margin-right: 12px !important;
  margin-left: 12px !important;
}

.mx-4 {
  margin-right: 16px !important;
  margin-left: 16px !important;
}

.mx-5 {
  margin-right: 20px !important;
  margin-left: 20px !important;
}

.mx-6 {
  margin-right: 24px !important;
  margin-left: 24px !important;
}

.mx-7 {
  margin-right: 28px !important;
  margin-left: 28px !important;
}

.mx-8 {
  margin-right: 32px !important;
  margin-left: 32px !important;
}

.mx-9 {
  margin-right: 36px !important;
  margin-left: 36px !important;
}

.mx-10 {
  margin-right: 40px !important;
  margin-left: 40px !important;
}

.mx-11 {
  margin-right: 44px !important;
  margin-left: 44px !important;
}

.mx-12 {
  margin-right: 48px !important;
  margin-left: 48px !important;
}

.mx-13 {
  margin-right: 52px !important;
  margin-left: 52px !important;
}

.mx-14 {
  margin-right: 56px !important;
  margin-left: 56px !important;
}

.mx-15 {
  margin-right: 60px !important;
  margin-left: 60px !important;
}

.mx-16 {
  margin-right: 64px !important;
  margin-left: 64px !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.my-1 {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}

.my-2 {
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}

.my-3 {
  margin-top: 12px !important;
  margin-bottom: 12px !important;
}

.my-4 {
  margin-top: 16px !important;
  margin-bottom: 16px !important;
}

.my-5 {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.my-6 {
  margin-top: 24px !important;
  margin-bottom: 24px !important;
}

.my-7 {
  margin-top: 28px !important;
  margin-bottom: 28px !important;
}

.my-8 {
  margin-top: 32px !important;
  margin-bottom: 32px !important;
}

.my-9 {
  margin-top: 36px !important;
  margin-bottom: 36px !important;
}

.my-10 {
  margin-top: 40px !important;
  margin-bottom: 40px !important;
}

.my-11 {
  margin-top: 44px !important;
  margin-bottom: 44px !important;
}

.my-12 {
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}

.my-13 {
  margin-top: 52px !important;
  margin-bottom: 52px !important;
}

.my-14 {
  margin-top: 56px !important;
  margin-bottom: 56px !important;
}

.my-15 {
  margin-top: 60px !important;
  margin-bottom: 60px !important;
}

.my-16 {
  margin-top: 64px !important;
  margin-bottom: 64px !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0px !important;
}

.mt-1 {
  margin-top: 4px !important;
}

.mt-2 {
  margin-top: 8px !important;
}

.mt-3 {
  margin-top: 12px !important;
}

.mt-4 {
  margin-top: 16px !important;
}

.mt-5 {
  margin-top: 20px !important;
}

.mt-6 {
  margin-top: 24px !important;
}

.mt-7 {
  margin-top: 28px !important;
}

.mt-8 {
  margin-top: 32px !important;
}

.mt-9 {
  margin-top: 36px !important;
}

.mt-10 {
  margin-top: 40px !important;
}

.mt-11 {
  margin-top: 44px !important;
}

.mt-12 {
  margin-top: 48px !important;
}

.mt-13 {
  margin-top: 52px !important;
}

.mt-14 {
  margin-top: 56px !important;
}

.mt-15 {
  margin-top: 60px !important;
}

.mt-16 {
  margin-top: 64px !important;
}

.mt-auto {
  margin-top: auto !important;
}

.mr-0 {
  margin-right: 0px !important;
}

.mr-1 {
  margin-right: 4px !important;
}

.mr-2 {
  margin-right: 8px !important;
}

.mr-3 {
  margin-right: 12px !important;
}

.mr-4 {
  margin-right: 16px !important;
}

.mr-5 {
  margin-right: 20px !important;
}

.mr-6 {
  margin-right: 24px !important;
}

.mr-7 {
  margin-right: 28px !important;
}

.mr-8 {
  margin-right: 32px !important;
}

.mr-9 {
  margin-right: 36px !important;
}

.mr-10 {
  margin-right: 40px !important;
}

.mr-11 {
  margin-right: 44px !important;
}

.mr-12 {
  margin-right: 48px !important;
}

.mr-13 {
  margin-right: 52px !important;
}

.mr-14 {
  margin-right: 56px !important;
}

.mr-15 {
  margin-right: 60px !important;
}

.mr-16 {
  margin-right: 64px !important;
}

.mr-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0px !important;
}

.mb-1 {
  margin-bottom: 4px !important;
}

.mb-2 {
  margin-bottom: 8px !important;
}

.mb-3 {
  margin-bottom: 12px !important;
}

.mb-4 {
  margin-bottom: 16px !important;
}

.mb-5 {
  margin-bottom: 20px !important;
}

.mb-6 {
  margin-bottom: 24px !important;
}

.mb-7 {
  margin-bottom: 28px !important;
}

.mb-8 {
  margin-bottom: 32px !important;
}

.mb-9 {
  margin-bottom: 36px !important;
}

.mb-10 {
  margin-bottom: 40px !important;
}

.mb-11 {
  margin-bottom: 44px !important;
}

.mb-12 {
  margin-bottom: 48px !important;
}

.mb-13 {
  margin-bottom: 52px !important;
}

.mb-14 {
  margin-bottom: 56px !important;
}

.mb-15 {
  margin-bottom: 60px !important;
}

.mb-16 {
  margin-bottom: 64px !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ml-0 {
  margin-left: 0px !important;
}

.ml-1 {
  margin-left: 4px !important;
}

.ml-2 {
  margin-left: 8px !important;
}

.ml-3 {
  margin-left: 12px !important;
}

.ml-4 {
  margin-left: 16px !important;
}

.ml-5 {
  margin-left: 20px !important;
}

.ml-6 {
  margin-left: 24px !important;
}

.ml-7 {
  margin-left: 28px !important;
}

.ml-8 {
  margin-left: 32px !important;
}

.ml-9 {
  margin-left: 36px !important;
}

.ml-10 {
  margin-left: 40px !important;
}

.ml-11 {
  margin-left: 44px !important;
}

.ml-12 {
  margin-left: 48px !important;
}

.ml-13 {
  margin-left: 52px !important;
}

.ml-14 {
  margin-left: 56px !important;
}

.ml-15 {
  margin-left: 60px !important;
}

.ml-16 {
  margin-left: 64px !important;
}

.ml-auto {
  margin-left: auto !important;
}

.ms-0 {
  -webkit-margin-start: 0px !important;
          margin-inline-start: 0px !important;
}

.ms-1 {
  -webkit-margin-start: 4px !important;
          margin-inline-start: 4px !important;
}

.ms-2 {
  -webkit-margin-start: 8px !important;
          margin-inline-start: 8px !important;
}

.ms-3 {
  -webkit-margin-start: 12px !important;
          margin-inline-start: 12px !important;
}

.ms-4 {
  -webkit-margin-start: 16px !important;
          margin-inline-start: 16px !important;
}

.ms-5 {
  -webkit-margin-start: 20px !important;
          margin-inline-start: 20px !important;
}

.ms-6 {
  -webkit-margin-start: 24px !important;
          margin-inline-start: 24px !important;
}

.ms-7 {
  -webkit-margin-start: 28px !important;
          margin-inline-start: 28px !important;
}

.ms-8 {
  -webkit-margin-start: 32px !important;
          margin-inline-start: 32px !important;
}

.ms-9 {
  -webkit-margin-start: 36px !important;
          margin-inline-start: 36px !important;
}

.ms-10 {
  -webkit-margin-start: 40px !important;
          margin-inline-start: 40px !important;
}

.ms-11 {
  -webkit-margin-start: 44px !important;
          margin-inline-start: 44px !important;
}

.ms-12 {
  -webkit-margin-start: 48px !important;
          margin-inline-start: 48px !important;
}

.ms-13 {
  -webkit-margin-start: 52px !important;
          margin-inline-start: 52px !important;
}

.ms-14 {
  -webkit-margin-start: 56px !important;
          margin-inline-start: 56px !important;
}

.ms-15 {
  -webkit-margin-start: 60px !important;
          margin-inline-start: 60px !important;
}

.ms-16 {
  -webkit-margin-start: 64px !important;
          margin-inline-start: 64px !important;
}

.ms-auto {
  -webkit-margin-start: auto !important;
          margin-inline-start: auto !important;
}

.me-0 {
  -webkit-margin-end: 0px !important;
          margin-inline-end: 0px !important;
}

.me-1 {
  -webkit-margin-end: 4px !important;
          margin-inline-end: 4px !important;
}

.me-2 {
  -webkit-margin-end: 8px !important;
          margin-inline-end: 8px !important;
}

.me-3 {
  -webkit-margin-end: 12px !important;
          margin-inline-end: 12px !important;
}

.me-4 {
  -webkit-margin-end: 16px !important;
          margin-inline-end: 16px !important;
}

.me-5 {
  -webkit-margin-end: 20px !important;
          margin-inline-end: 20px !important;
}

.me-6 {
  -webkit-margin-end: 24px !important;
          margin-inline-end: 24px !important;
}

.me-7 {
  -webkit-margin-end: 28px !important;
          margin-inline-end: 28px !important;
}

.me-8 {
  -webkit-margin-end: 32px !important;
          margin-inline-end: 32px !important;
}

.me-9 {
  -webkit-margin-end: 36px !important;
          margin-inline-end: 36px !important;
}

.me-10 {
  -webkit-margin-end: 40px !important;
          margin-inline-end: 40px !important;
}

.me-11 {
  -webkit-margin-end: 44px !important;
          margin-inline-end: 44px !important;
}

.me-12 {
  -webkit-margin-end: 48px !important;
          margin-inline-end: 48px !important;
}

.me-13 {
  -webkit-margin-end: 52px !important;
          margin-inline-end: 52px !important;
}

.me-14 {
  -webkit-margin-end: 56px !important;
          margin-inline-end: 56px !important;
}

.me-15 {
  -webkit-margin-end: 60px !important;
          margin-inline-end: 60px !important;
}

.me-16 {
  -webkit-margin-end: 64px !important;
          margin-inline-end: 64px !important;
}

.me-auto {
  -webkit-margin-end: auto !important;
          margin-inline-end: auto !important;
}

.ma-n1 {
  margin: -4px !important;
}

.ma-n2 {
  margin: -8px !important;
}

.ma-n3 {
  margin: -12px !important;
}

.ma-n4 {
  margin: -16px !important;
}

.ma-n5 {
  margin: -20px !important;
}

.ma-n6 {
  margin: -24px !important;
}

.ma-n7 {
  margin: -28px !important;
}

.ma-n8 {
  margin: -32px !important;
}

.ma-n9 {
  margin: -36px !important;
}

.ma-n10 {
  margin: -40px !important;
}

.ma-n11 {
  margin: -44px !important;
}

.ma-n12 {
  margin: -48px !important;
}

.ma-n13 {
  margin: -52px !important;
}

.ma-n14 {
  margin: -56px !important;
}

.ma-n15 {
  margin: -60px !important;
}

.ma-n16 {
  margin: -64px !important;
}

.mx-n1 {
  margin-right: -4px !important;
  margin-left: -4px !important;
}

.mx-n2 {
  margin-right: -8px !important;
  margin-left: -8px !important;
}

.mx-n3 {
  margin-right: -12px !important;
  margin-left: -12px !important;
}

.mx-n4 {
  margin-right: -16px !important;
  margin-left: -16px !important;
}

.mx-n5 {
  margin-right: -20px !important;
  margin-left: -20px !important;
}

.mx-n6 {
  margin-right: -24px !important;
  margin-left: -24px !important;
}

.mx-n7 {
  margin-right: -28px !important;
  margin-left: -28px !important;
}

.mx-n8 {
  margin-right: -32px !important;
  margin-left: -32px !important;
}

.mx-n9 {
  margin-right: -36px !important;
  margin-left: -36px !important;
}

.mx-n10 {
  margin-right: -40px !important;
  margin-left: -40px !important;
}

.mx-n11 {
  margin-right: -44px !important;
  margin-left: -44px !important;
}

.mx-n12 {
  margin-right: -48px !important;
  margin-left: -48px !important;
}

.mx-n13 {
  margin-right: -52px !important;
  margin-left: -52px !important;
}

.mx-n14 {
  margin-right: -56px !important;
  margin-left: -56px !important;
}

.mx-n15 {
  margin-right: -60px !important;
  margin-left: -60px !important;
}

.mx-n16 {
  margin-right: -64px !important;
  margin-left: -64px !important;
}

.my-n1 {
  margin-top: -4px !important;
  margin-bottom: -4px !important;
}

.my-n2 {
  margin-top: -8px !important;
  margin-bottom: -8px !important;
}

.my-n3 {
  margin-top: -12px !important;
  margin-bottom: -12px !important;
}

.my-n4 {
  margin-top: -16px !important;
  margin-bottom: -16px !important;
}

.my-n5 {
  margin-top: -20px !important;
  margin-bottom: -20px !important;
}

.my-n6 {
  margin-top: -24px !important;
  margin-bottom: -24px !important;
}

.my-n7 {
  margin-top: -28px !important;
  margin-bottom: -28px !important;
}

.my-n8 {
  margin-top: -32px !important;
  margin-bottom: -32px !important;
}

.my-n9 {
  margin-top: -36px !important;
  margin-bottom: -36px !important;
}

.my-n10 {
  margin-top: -40px !important;
  margin-bottom: -40px !important;
}

.my-n11 {
  margin-top: -44px !important;
  margin-bottom: -44px !important;
}

.my-n12 {
  margin-top: -48px !important;
  margin-bottom: -48px !important;
}

.my-n13 {
  margin-top: -52px !important;
  margin-bottom: -52px !important;
}

.my-n14 {
  margin-top: -56px !important;
  margin-bottom: -56px !important;
}

.my-n15 {
  margin-top: -60px !important;
  margin-bottom: -60px !important;
}

.my-n16 {
  margin-top: -64px !important;
  margin-bottom: -64px !important;
}

.mt-n1 {
  margin-top: -4px !important;
}

.mt-n2 {
  margin-top: -8px !important;
}

.mt-n3 {
  margin-top: -12px !important;
}

.mt-n4 {
  margin-top: -16px !important;
}

.mt-n5 {
  margin-top: -20px !important;
}

.mt-n6 {
  margin-top: -24px !important;
}

.mt-n7 {
  margin-top: -28px !important;
}

.mt-n8 {
  margin-top: -32px !important;
}

.mt-n9 {
  margin-top: -36px !important;
}

.mt-n10 {
  margin-top: -40px !important;
}

.mt-n11 {
  margin-top: -44px !important;
}

.mt-n12 {
  margin-top: -48px !important;
}

.mt-n13 {
  margin-top: -52px !important;
}

.mt-n14 {
  margin-top: -56px !important;
}

.mt-n15 {
  margin-top: -60px !important;
}

.mt-n16 {
  margin-top: -64px !important;
}

.mr-n1 {
  margin-right: -4px !important;
}

.mr-n2 {
  margin-right: -8px !important;
}

.mr-n3 {
  margin-right: -12px !important;
}

.mr-n4 {
  margin-right: -16px !important;
}

.mr-n5 {
  margin-right: -20px !important;
}

.mr-n6 {
  margin-right: -24px !important;
}

.mr-n7 {
  margin-right: -28px !important;
}

.mr-n8 {
  margin-right: -32px !important;
}

.mr-n9 {
  margin-right: -36px !important;
}

.mr-n10 {
  margin-right: -40px !important;
}

.mr-n11 {
  margin-right: -44px !important;
}

.mr-n12 {
  margin-right: -48px !important;
}

.mr-n13 {
  margin-right: -52px !important;
}

.mr-n14 {
  margin-right: -56px !important;
}

.mr-n15 {
  margin-right: -60px !important;
}

.mr-n16 {
  margin-right: -64px !important;
}

.mb-n1 {
  margin-bottom: -4px !important;
}

.mb-n2 {
  margin-bottom: -8px !important;
}

.mb-n3 {
  margin-bottom: -12px !important;
}

.mb-n4 {
  margin-bottom: -16px !important;
}

.mb-n5 {
  margin-bottom: -20px !important;
}

.mb-n6 {
  margin-bottom: -24px !important;
}

.mb-n7 {
  margin-bottom: -28px !important;
}

.mb-n8 {
  margin-bottom: -32px !important;
}

.mb-n9 {
  margin-bottom: -36px !important;
}

.mb-n10 {
  margin-bottom: -40px !important;
}

.mb-n11 {
  margin-bottom: -44px !important;
}

.mb-n12 {
  margin-bottom: -48px !important;
}

.mb-n13 {
  margin-bottom: -52px !important;
}

.mb-n14 {
  margin-bottom: -56px !important;
}

.mb-n15 {
  margin-bottom: -60px !important;
}

.mb-n16 {
  margin-bottom: -64px !important;
}

.ml-n1 {
  margin-left: -4px !important;
}

.ml-n2 {
  margin-left: -8px !important;
}

.ml-n3 {
  margin-left: -12px !important;
}

.ml-n4 {
  margin-left: -16px !important;
}

.ml-n5 {
  margin-left: -20px !important;
}

.ml-n6 {
  margin-left: -24px !important;
}

.ml-n7 {
  margin-left: -28px !important;
}

.ml-n8 {
  margin-left: -32px !important;
}

.ml-n9 {
  margin-left: -36px !important;
}

.ml-n10 {
  margin-left: -40px !important;
}

.ml-n11 {
  margin-left: -44px !important;
}

.ml-n12 {
  margin-left: -48px !important;
}

.ml-n13 {
  margin-left: -52px !important;
}

.ml-n14 {
  margin-left: -56px !important;
}

.ml-n15 {
  margin-left: -60px !important;
}

.ml-n16 {
  margin-left: -64px !important;
}

.ms-n1 {
  -webkit-margin-start: -4px !important;
          margin-inline-start: -4px !important;
}

.ms-n2 {
  -webkit-margin-start: -8px !important;
          margin-inline-start: -8px !important;
}

.ms-n3 {
  -webkit-margin-start: -12px !important;
          margin-inline-start: -12px !important;
}

.ms-n4 {
  -webkit-margin-start: -16px !important;
          margin-inline-start: -16px !important;
}

.ms-n5 {
  -webkit-margin-start: -20px !important;
          margin-inline-start: -20px !important;
}

.ms-n6 {
  -webkit-margin-start: -24px !important;
          margin-inline-start: -24px !important;
}

.ms-n7 {
  -webkit-margin-start: -28px !important;
          margin-inline-start: -28px !important;
}

.ms-n8 {
  -webkit-margin-start: -32px !important;
          margin-inline-start: -32px !important;
}

.ms-n9 {
  -webkit-margin-start: -36px !important;
          margin-inline-start: -36px !important;
}

.ms-n10 {
  -webkit-margin-start: -40px !important;
          margin-inline-start: -40px !important;
}

.ms-n11 {
  -webkit-margin-start: -44px !important;
          margin-inline-start: -44px !important;
}

.ms-n12 {
  -webkit-margin-start: -48px !important;
          margin-inline-start: -48px !important;
}

.ms-n13 {
  -webkit-margin-start: -52px !important;
          margin-inline-start: -52px !important;
}

.ms-n14 {
  -webkit-margin-start: -56px !important;
          margin-inline-start: -56px !important;
}

.ms-n15 {
  -webkit-margin-start: -60px !important;
          margin-inline-start: -60px !important;
}

.ms-n16 {
  -webkit-margin-start: -64px !important;
          margin-inline-start: -64px !important;
}

.me-n1 {
  -webkit-margin-end: -4px !important;
          margin-inline-end: -4px !important;
}

.me-n2 {
  -webkit-margin-end: -8px !important;
          margin-inline-end: -8px !important;
}

.me-n3 {
  -webkit-margin-end: -12px !important;
          margin-inline-end: -12px !important;
}

.me-n4 {
  -webkit-margin-end: -16px !important;
          margin-inline-end: -16px !important;
}

.me-n5 {
  -webkit-margin-end: -20px !important;
          margin-inline-end: -20px !important;
}

.me-n6 {
  -webkit-margin-end: -24px !important;
          margin-inline-end: -24px !important;
}

.me-n7 {
  -webkit-margin-end: -28px !important;
          margin-inline-end: -28px !important;
}

.me-n8 {
  -webkit-margin-end: -32px !important;
          margin-inline-end: -32px !important;
}

.me-n9 {
  -webkit-margin-end: -36px !important;
          margin-inline-end: -36px !important;
}

.me-n10 {
  -webkit-margin-end: -40px !important;
          margin-inline-end: -40px !important;
}

.me-n11 {
  -webkit-margin-end: -44px !important;
          margin-inline-end: -44px !important;
}

.me-n12 {
  -webkit-margin-end: -48px !important;
          margin-inline-end: -48px !important;
}

.me-n13 {
  -webkit-margin-end: -52px !important;
          margin-inline-end: -52px !important;
}

.me-n14 {
  -webkit-margin-end: -56px !important;
          margin-inline-end: -56px !important;
}

.me-n15 {
  -webkit-margin-end: -60px !important;
          margin-inline-end: -60px !important;
}

.me-n16 {
  -webkit-margin-end: -64px !important;
          margin-inline-end: -64px !important;
}

.pa-0 {
  padding: 0px !important;
}

.pa-1 {
  padding: 4px !important;
}

.pa-2 {
  padding: 8px !important;
}

.pa-3 {
  padding: 12px !important;
}

.pa-4 {
  padding: 16px !important;
}

.pa-5 {
  padding: 20px !important;
}

.pa-6 {
  padding: 24px !important;
}

.pa-7 {
  padding: 28px !important;
}

.pa-8 {
  padding: 32px !important;
}

.pa-9 {
  padding: 36px !important;
}

.pa-10 {
  padding: 40px !important;
}

.pa-11 {
  padding: 44px !important;
}

.pa-12 {
  padding: 48px !important;
}

.pa-13 {
  padding: 52px !important;
}

.pa-14 {
  padding: 56px !important;
}

.pa-15 {
  padding: 60px !important;
}

.pa-16 {
  padding: 64px !important;
}

.px-0 {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.px-1 {
  padding-right: 4px !important;
  padding-left: 4px !important;
}

.px-2 {
  padding-right: 8px !important;
  padding-left: 8px !important;
}

.px-3 {
  padding-right: 12px !important;
  padding-left: 12px !important;
}

.px-4 {
  padding-right: 16px !important;
  padding-left: 16px !important;
}

.px-5 {
  padding-right: 20px !important;
  padding-left: 20px !important;
}

.px-6 {
  padding-right: 24px !important;
  padding-left: 24px !important;
}

.px-7 {
  padding-right: 28px !important;
  padding-left: 28px !important;
}

.px-8 {
  padding-right: 32px !important;
  padding-left: 32px !important;
}

.px-9 {
  padding-right: 36px !important;
  padding-left: 36px !important;
}

.px-10 {
  padding-right: 40px !important;
  padding-left: 40px !important;
}

.px-11 {
  padding-right: 44px !important;
  padding-left: 44px !important;
}

.px-12 {
  padding-right: 48px !important;
  padding-left: 48px !important;
}

.px-13 {
  padding-right: 52px !important;
  padding-left: 52px !important;
}

.px-14 {
  padding-right: 56px !important;
  padding-left: 56px !important;
}

.px-15 {
  padding-right: 60px !important;
  padding-left: 60px !important;
}

.px-16 {
  padding-right: 64px !important;
  padding-left: 64px !important;
}

.py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}

.py-2 {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.py-3 {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}

.py-4 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}

.py-5 {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}

.py-6 {
  padding-top: 24px !important;
  padding-bottom: 24px !important;
}

.py-7 {
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}

.py-8 {
  padding-top: 32px !important;
  padding-bottom: 32px !important;
}

.py-9 {
  padding-top: 36px !important;
  padding-bottom: 36px !important;
}

.py-10 {
  padding-top: 40px !important;
  padding-bottom: 40px !important;
}

.py-11 {
  padding-top: 44px !important;
  padding-bottom: 44px !important;
}

.py-12 {
  padding-top: 48px !important;
  padding-bottom: 48px !important;
}

.py-13 {
  padding-top: 52px !important;
  padding-bottom: 52px !important;
}

.py-14 {
  padding-top: 56px !important;
  padding-bottom: 56px !important;
}

.py-15 {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}

.py-16 {
  padding-top: 64px !important;
  padding-bottom: 64px !important;
}

.pt-0 {
  padding-top: 0px !important;
}

.pt-1 {
  padding-top: 4px !important;
}

.pt-2 {
  padding-top: 8px !important;
}

.pt-3 {
  padding-top: 12px !important;
}

.pt-4 {
  padding-top: 16px !important;
}

.pt-5 {
  padding-top: 20px !important;
}

.pt-6 {
  padding-top: 24px !important;
}

.pt-7 {
  padding-top: 28px !important;
}

.pt-8 {
  padding-top: 32px !important;
}

.pt-9 {
  padding-top: 36px !important;
}

.pt-10 {
  padding-top: 40px !important;
}

.pt-11 {
  padding-top: 44px !important;
}

.pt-12 {
  padding-top: 48px !important;
}

.pt-13 {
  padding-top: 52px !important;
}

.pt-14 {
  padding-top: 56px !important;
}

.pt-15 {
  padding-top: 60px !important;
}

.pt-16 {
  padding-top: 64px !important;
}

.pr-0 {
  padding-right: 0px !important;
}

.pr-1 {
  padding-right: 4px !important;
}

.pr-2 {
  padding-right: 8px !important;
}

.pr-3 {
  padding-right: 12px !important;
}

.pr-4 {
  padding-right: 16px !important;
}

.pr-5 {
  padding-right: 20px !important;
}

.pr-6 {
  padding-right: 24px !important;
}

.pr-7 {
  padding-right: 28px !important;
}

.pr-8 {
  padding-right: 32px !important;
}

.pr-9 {
  padding-right: 36px !important;
}

.pr-10 {
  padding-right: 40px !important;
}

.pr-11 {
  padding-right: 44px !important;
}

.pr-12 {
  padding-right: 48px !important;
}

.pr-13 {
  padding-right: 52px !important;
}

.pr-14 {
  padding-right: 56px !important;
}

.pr-15 {
  padding-right: 60px !important;
}

.pr-16 {
  padding-right: 64px !important;
}

.pb-0 {
  padding-bottom: 0px !important;
}

.pb-1 {
  padding-bottom: 4px !important;
}

.pb-2 {
  padding-bottom: 8px !important;
}

.pb-3 {
  padding-bottom: 12px !important;
}

.pb-4 {
  padding-bottom: 16px !important;
}

.pb-5 {
  padding-bottom: 20px !important;
}

.pb-6 {
  padding-bottom: 24px !important;
}

.pb-7 {
  padding-bottom: 28px !important;
}

.pb-8 {
  padding-bottom: 32px !important;
}

.pb-9 {
  padding-bottom: 36px !important;
}

.pb-10 {
  padding-bottom: 40px !important;
}

.pb-11 {
  padding-bottom: 44px !important;
}

.pb-12 {
  padding-bottom: 48px !important;
}

.pb-13 {
  padding-bottom: 52px !important;
}

.pb-14 {
  padding-bottom: 56px !important;
}

.pb-15 {
  padding-bottom: 60px !important;
}

.pb-16 {
  padding-bottom: 64px !important;
}

.pl-0 {
  padding-left: 0px !important;
}

.pl-1 {
  padding-left: 4px !important;
}

.pl-2 {
  padding-left: 8px !important;
}

.pl-3 {
  padding-left: 12px !important;
}

.pl-4 {
  padding-left: 16px !important;
}

.pl-5 {
  padding-left: 20px !important;
}

.pl-6 {
  padding-left: 24px !important;
}

.pl-7 {
  padding-left: 28px !important;
}

.pl-8 {
  padding-left: 32px !important;
}

.pl-9 {
  padding-left: 36px !important;
}

.pl-10 {
  padding-left: 40px !important;
}

.pl-11 {
  padding-left: 44px !important;
}

.pl-12 {
  padding-left: 48px !important;
}

.pl-13 {
  padding-left: 52px !important;
}

.pl-14 {
  padding-left: 56px !important;
}

.pl-15 {
  padding-left: 60px !important;
}

.pl-16 {
  padding-left: 64px !important;
}

.ps-0 {
  -webkit-padding-start: 0px !important;
          padding-inline-start: 0px !important;
}

.ps-1 {
  -webkit-padding-start: 4px !important;
          padding-inline-start: 4px !important;
}

.ps-2 {
  -webkit-padding-start: 8px !important;
          padding-inline-start: 8px !important;
}

.ps-3 {
  -webkit-padding-start: 12px !important;
          padding-inline-start: 12px !important;
}

.ps-4 {
  -webkit-padding-start: 16px !important;
          padding-inline-start: 16px !important;
}

.ps-5 {
  -webkit-padding-start: 20px !important;
          padding-inline-start: 20px !important;
}

.ps-6 {
  -webkit-padding-start: 24px !important;
          padding-inline-start: 24px !important;
}

.ps-7 {
  -webkit-padding-start: 28px !important;
          padding-inline-start: 28px !important;
}

.ps-8 {
  -webkit-padding-start: 32px !important;
          padding-inline-start: 32px !important;
}

.ps-9 {
  -webkit-padding-start: 36px !important;
          padding-inline-start: 36px !important;
}

.ps-10 {
  -webkit-padding-start: 40px !important;
          padding-inline-start: 40px !important;
}

.ps-11 {
  -webkit-padding-start: 44px !important;
          padding-inline-start: 44px !important;
}

.ps-12 {
  -webkit-padding-start: 48px !important;
          padding-inline-start: 48px !important;
}

.ps-13 {
  -webkit-padding-start: 52px !important;
          padding-inline-start: 52px !important;
}

.ps-14 {
  -webkit-padding-start: 56px !important;
          padding-inline-start: 56px !important;
}

.ps-15 {
  -webkit-padding-start: 60px !important;
          padding-inline-start: 60px !important;
}

.ps-16 {
  -webkit-padding-start: 64px !important;
          padding-inline-start: 64px !important;
}

.pe-0 {
  -webkit-padding-end: 0px !important;
          padding-inline-end: 0px !important;
}

.pe-1 {
  -webkit-padding-end: 4px !important;
          padding-inline-end: 4px !important;
}

.pe-2 {
  -webkit-padding-end: 8px !important;
          padding-inline-end: 8px !important;
}

.pe-3 {
  -webkit-padding-end: 12px !important;
          padding-inline-end: 12px !important;
}

.pe-4 {
  -webkit-padding-end: 16px !important;
          padding-inline-end: 16px !important;
}

.pe-5 {
  -webkit-padding-end: 20px !important;
          padding-inline-end: 20px !important;
}

.pe-6 {
  -webkit-padding-end: 24px !important;
          padding-inline-end: 24px !important;
}

.pe-7 {
  -webkit-padding-end: 28px !important;
          padding-inline-end: 28px !important;
}

.pe-8 {
  -webkit-padding-end: 32px !important;
          padding-inline-end: 32px !important;
}

.pe-9 {
  -webkit-padding-end: 36px !important;
          padding-inline-end: 36px !important;
}

.pe-10 {
  -webkit-padding-end: 40px !important;
          padding-inline-end: 40px !important;
}

.pe-11 {
  -webkit-padding-end: 44px !important;
          padding-inline-end: 44px !important;
}

.pe-12 {
  -webkit-padding-end: 48px !important;
          padding-inline-end: 48px !important;
}

.pe-13 {
  -webkit-padding-end: 52px !important;
          padding-inline-end: 52px !important;
}

.pe-14 {
  -webkit-padding-end: 56px !important;
          padding-inline-end: 56px !important;
}

.pe-15 {
  -webkit-padding-end: 60px !important;
          padding-inline-end: 60px !important;
}

.pe-16 {
  -webkit-padding-end: 64px !important;
          padding-inline-end: 64px !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-sm {
  border-radius: 2px !important;
}

.rounded {
  border-radius: 4px !important;
}

.rounded-lg {
  border-radius: 8px !important;
}

.rounded-xl {
  border-radius: 24px !important;
}

.rounded-pill {
  border-radius: 9999px !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-shaped {
  border-radius: 24px 0 !important;
}

.rounded-t-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.rounded-t-sm {
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
}

.rounded-t {
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
}

.rounded-t-lg {
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
}

.rounded-t-xl {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 24px !important;
}

.rounded-t-pill {
  border-top-left-radius: 9999px !important;
  border-top-right-radius: 9999px !important;
}

.rounded-t-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}

.rounded-t-shaped {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 0 !important;
}

.rounded-r-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-r-sm {
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}

.rounded-r {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.rounded-r-lg {
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}

.rounded-r-xl {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.rounded-r-pill {
  border-top-right-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}

.rounded-r-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-r-shaped {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-b-0 {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-b-sm {
  border-bottom-left-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}

.rounded-b {
  border-bottom-left-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.rounded-b-lg {
  border-bottom-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}

.rounded-b-xl {
  border-bottom-left-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.rounded-b-pill {
  border-bottom-left-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}

.rounded-b-circle {
  border-bottom-left-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-b-shaped {
  border-bottom-left-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-l-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-l-sm {
  border-top-left-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
}

.rounded-l {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}

.rounded-l-lg {
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}

.rounded-l-xl {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.rounded-l-pill {
  border-top-left-radius: 9999px !important;
  border-bottom-left-radius: 9999px !important;
}

.rounded-l-circle {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.rounded-l-shaped {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-tl-0 {
  border-top-left-radius: 0 !important;
}

.rounded-tl-sm {
  border-top-left-radius: 2px !important;
}

.rounded-tl {
  border-top-left-radius: 4px !important;
}

.rounded-tl-lg {
  border-top-left-radius: 8px !important;
}

.rounded-tl-xl {
  border-top-left-radius: 24px !important;
}

.rounded-tl-pill {
  border-top-left-radius: 9999px !important;
}

.rounded-tl-circle {
  border-top-left-radius: 50% !important;
}

.rounded-tl-shaped {
  border-top-left-radius: 24px 0 !important;
}

.rounded-tr-0 {
  border-top-right-radius: 0 !important;
}

.rounded-tr-sm {
  border-top-right-radius: 2px !important;
}

.rounded-tr {
  border-top-right-radius: 4px !important;
}

.rounded-tr-lg {
  border-top-right-radius: 8px !important;
}

.rounded-tr-xl {
  border-top-right-radius: 24px !important;
}

.rounded-tr-pill {
  border-top-right-radius: 9999px !important;
}

.rounded-tr-circle {
  border-top-right-radius: 50% !important;
}

.rounded-tr-shaped {
  border-top-right-radius: 24px 0 !important;
}

.rounded-br-0 {
  border-bottom-right-radius: 0 !important;
}

.rounded-br-sm {
  border-bottom-right-radius: 2px !important;
}

.rounded-br {
  border-bottom-right-radius: 4px !important;
}

.rounded-br-lg {
  border-bottom-right-radius: 8px !important;
}

.rounded-br-xl {
  border-bottom-right-radius: 24px !important;
}

.rounded-br-pill {
  border-bottom-right-radius: 9999px !important;
}

.rounded-br-circle {
  border-bottom-right-radius: 50% !important;
}

.rounded-br-shaped {
  border-bottom-right-radius: 24px 0 !important;
}

.rounded-bl-0 {
  border-bottom-left-radius: 0 !important;
}

.rounded-bl-sm {
  border-bottom-left-radius: 2px !important;
}

.rounded-bl {
  border-bottom-left-radius: 4px !important;
}

.rounded-bl-lg {
  border-bottom-left-radius: 8px !important;
}

.rounded-bl-xl {
  border-bottom-left-radius: 24px !important;
}

.rounded-bl-pill {
  border-bottom-left-radius: 9999px !important;
}

.rounded-bl-circle {
  border-bottom-left-radius: 50% !important;
}

.rounded-bl-shaped {
  border-bottom-left-radius: 24px 0 !important;
}

.border-0 {
  border-width: 0 !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border {
  border-width: thin !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-sm {
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-md {
  border-width: 2px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-lg {
  border-width: 4px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-xl {
  border-width: 8px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-opacity-0 {
  --v-border-opacity: 0 !important;
}

.border-opacity {
  --v-border-opacity: 0.12 !important;
}

.border-opacity-25 {
  --v-border-opacity: 0.25 !important;
}

.border-opacity-50 {
  --v-border-opacity: 0.5 !important;
}

.border-opacity-75 {
  --v-border-opacity: 0.75 !important;
}

.border-opacity-100 {
  --v-border-opacity: 1 !important;
}

.border-t-0 {
  border-top-width: 0 !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t {
  border-top-width: thin !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-sm {
  border-top-width: 1px !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-md {
  border-top-width: 2px !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-lg {
  border-top-width: 4px !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-t-xl {
  border-top-width: 8px !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-r-0 {
  border-right-width: 0 !important;
  border-right-style: solid !important;
  border-right-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-r {
  border-right-width: thin !important;
  border-right-style: solid !important;
  border-right-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-r-sm {
  border-right-width: 1px !important;
  border-right-style: solid !important;
  border-right-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-r-md {
  border-right-width: 2px !important;
  border-right-style: solid !important;
  border-right-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-r-lg {
  border-right-width: 4px !important;
  border-right-style: solid !important;
  border-right-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-r-xl {
  border-right-width: 8px !important;
  border-right-style: solid !important;
  border-right-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-0 {
  border-bottom-width: 0 !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b {
  border-bottom-width: thin !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-sm {
  border-bottom-width: 1px !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-md {
  border-bottom-width: 2px !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-lg {
  border-bottom-width: 4px !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-b-xl {
  border-bottom-width: 8px !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-l-0 {
  border-left-width: 0 !important;
  border-left-style: solid !important;
  border-left-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-l {
  border-left-width: thin !important;
  border-left-style: solid !important;
  border-left-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-l-sm {
  border-left-width: 1px !important;
  border-left-style: solid !important;
  border-left-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-l-md {
  border-left-width: 2px !important;
  border-left-style: solid !important;
  border-left-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-l-lg {
  border-left-width: 4px !important;
  border-left-style: solid !important;
  border-left-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-l-xl {
  border-left-width: 8px !important;
  border-left-style: solid !important;
  border-left-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}

.border-solid {
  border-style: solid !important;
}

.border-dashed {
  border-style: dashed !important;
}

.border-dotted {
  border-style: dotted !important;
}

.border-double {
  border-style: double !important;
}

.border-none {
  border-style: none !important;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-justify {
  text-align: justify !important;
}

.text-start {
  text-align: start !important;
}

.text-end {
  text-align: end !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-overline {
  text-decoration: overline !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-no-wrap {
  white-space: nowrap !important;
}

.text-pre {
  white-space: pre !important;
}

.text-pre-line {
  white-space: pre-line !important;
}

.text-pre-wrap {
  white-space: pre-wrap !important;
}

.text-break {
  overflow-wrap: break-word !important;
  word-break: break-word !important;
}

.text-high-emphasis {
  opacity: var(--v-high-emphasis-opacity) !important;
}

.text-medium-emphasis {
  opacity: var(--v-medium-emphasis-opacity) !important;
}

.text-disabled {
  opacity: var(--v-disabled-opacity) !important;
}

.text-truncate {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.text-none {
  text-transform: none !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-h1 {
  font-size: 6rem !important;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.015625em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-h2 {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-h3 {
  font-size: 3rem !important;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-h4 {
  font-size: 2.125rem !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-h5 {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-subtitle-1 {
  font-size: 1rem !important;
  font-weight: normal;
  line-height: 1.75rem;
  letter-spacing: 0.009375em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-subtitle-2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-body-1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-body-2 {
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0178571429em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-button {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.0892857143em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: uppercase !important;
}

.text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}

.text-overline {
  font-size: 0.75rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.1666666667em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: uppercase !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-fixed {
  position: fixed !important;
}

.position-absolute {
  position: absolute !important;
}

.position-sticky {
  position: sticky !important;
}

@media (min-width: 600px) {
  .d-sm-none {
    display: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .float-sm-left {
    float: left !important;
  }

  .float-sm-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-sm-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-sm-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-sm-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-sm-start {
    float: left !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-sm-start {
    justify-content: flex-start !important;
  }

  .justify-sm-end {
    justify-content: flex-end !important;
  }

  .justify-sm-center {
    justify-content: center !important;
  }

  .justify-sm-space-between {
    justify-content: space-between !important;
  }

  .justify-sm-space-around {
    justify-content: space-around !important;
  }

  .align-sm-start {
    align-items: flex-start !important;
  }

  .align-sm-end {
    align-items: flex-end !important;
  }

  .align-sm-center {
    align-items: center !important;
  }

  .align-sm-baseline {
    align-items: baseline !important;
  }

  .align-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-space-between {
    align-content: space-between !important;
  }

  .align-content-sm-space-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-6 {
    order: 6 !important;
  }

  .order-sm-7 {
    order: 7 !important;
  }

  .order-sm-8 {
    order: 8 !important;
  }

  .order-sm-9 {
    order: 9 !important;
  }

  .order-sm-10 {
    order: 10 !important;
  }

  .order-sm-11 {
    order: 11 !important;
  }

  .order-sm-12 {
    order: 12 !important;
  }

  .order-sm-last {
    order: 13 !important;
  }

  .ma-sm-0 {
    margin: 0px !important;
  }

  .ma-sm-1 {
    margin: 4px !important;
  }

  .ma-sm-2 {
    margin: 8px !important;
  }

  .ma-sm-3 {
    margin: 12px !important;
  }

  .ma-sm-4 {
    margin: 16px !important;
  }

  .ma-sm-5 {
    margin: 20px !important;
  }

  .ma-sm-6 {
    margin: 24px !important;
  }

  .ma-sm-7 {
    margin: 28px !important;
  }

  .ma-sm-8 {
    margin: 32px !important;
  }

  .ma-sm-9 {
    margin: 36px !important;
  }

  .ma-sm-10 {
    margin: 40px !important;
  }

  .ma-sm-11 {
    margin: 44px !important;
  }

  .ma-sm-12 {
    margin: 48px !important;
  }

  .ma-sm-13 {
    margin: 52px !important;
  }

  .ma-sm-14 {
    margin: 56px !important;
  }

  .ma-sm-15 {
    margin: 60px !important;
  }

  .ma-sm-16 {
    margin: 64px !important;
  }

  .ma-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .mx-sm-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }

  .mx-sm-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }

  .mx-sm-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }

  .mx-sm-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }

  .mx-sm-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }

  .mx-sm-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }

  .mx-sm-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }

  .mx-sm-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }

  .mx-sm-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }

  .mx-sm-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }

  .mx-sm-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }

  .mx-sm-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }

  .mx-sm-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }

  .mx-sm-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }

  .mx-sm-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }

  .mx-sm-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .my-sm-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .my-sm-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .my-sm-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .my-sm-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-sm-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .my-sm-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .my-sm-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .my-sm-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .my-sm-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .my-sm-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .my-sm-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .my-sm-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .my-sm-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }

  .my-sm-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }

  .my-sm-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .my-sm-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0px !important;
  }

  .mt-sm-1 {
    margin-top: 4px !important;
  }

  .mt-sm-2 {
    margin-top: 8px !important;
  }

  .mt-sm-3 {
    margin-top: 12px !important;
  }

  .mt-sm-4 {
    margin-top: 16px !important;
  }

  .mt-sm-5 {
    margin-top: 20px !important;
  }

  .mt-sm-6 {
    margin-top: 24px !important;
  }

  .mt-sm-7 {
    margin-top: 28px !important;
  }

  .mt-sm-8 {
    margin-top: 32px !important;
  }

  .mt-sm-9 {
    margin-top: 36px !important;
  }

  .mt-sm-10 {
    margin-top: 40px !important;
  }

  .mt-sm-11 {
    margin-top: 44px !important;
  }

  .mt-sm-12 {
    margin-top: 48px !important;
  }

  .mt-sm-13 {
    margin-top: 52px !important;
  }

  .mt-sm-14 {
    margin-top: 56px !important;
  }

  .mt-sm-15 {
    margin-top: 60px !important;
  }

  .mt-sm-16 {
    margin-top: 64px !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .mr-sm-0 {
    margin-right: 0px !important;
  }

  .mr-sm-1 {
    margin-right: 4px !important;
  }

  .mr-sm-2 {
    margin-right: 8px !important;
  }

  .mr-sm-3 {
    margin-right: 12px !important;
  }

  .mr-sm-4 {
    margin-right: 16px !important;
  }

  .mr-sm-5 {
    margin-right: 20px !important;
  }

  .mr-sm-6 {
    margin-right: 24px !important;
  }

  .mr-sm-7 {
    margin-right: 28px !important;
  }

  .mr-sm-8 {
    margin-right: 32px !important;
  }

  .mr-sm-9 {
    margin-right: 36px !important;
  }

  .mr-sm-10 {
    margin-right: 40px !important;
  }

  .mr-sm-11 {
    margin-right: 44px !important;
  }

  .mr-sm-12 {
    margin-right: 48px !important;
  }

  .mr-sm-13 {
    margin-right: 52px !important;
  }

  .mr-sm-14 {
    margin-right: 56px !important;
  }

  .mr-sm-15 {
    margin-right: 60px !important;
  }

  .mr-sm-16 {
    margin-right: 64px !important;
  }

  .mr-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0px !important;
  }

  .mb-sm-1 {
    margin-bottom: 4px !important;
  }

  .mb-sm-2 {
    margin-bottom: 8px !important;
  }

  .mb-sm-3 {
    margin-bottom: 12px !important;
  }

  .mb-sm-4 {
    margin-bottom: 16px !important;
  }

  .mb-sm-5 {
    margin-bottom: 20px !important;
  }

  .mb-sm-6 {
    margin-bottom: 24px !important;
  }

  .mb-sm-7 {
    margin-bottom: 28px !important;
  }

  .mb-sm-8 {
    margin-bottom: 32px !important;
  }

  .mb-sm-9 {
    margin-bottom: 36px !important;
  }

  .mb-sm-10 {
    margin-bottom: 40px !important;
  }

  .mb-sm-11 {
    margin-bottom: 44px !important;
  }

  .mb-sm-12 {
    margin-bottom: 48px !important;
  }

  .mb-sm-13 {
    margin-bottom: 52px !important;
  }

  .mb-sm-14 {
    margin-bottom: 56px !important;
  }

  .mb-sm-15 {
    margin-bottom: 60px !important;
  }

  .mb-sm-16 {
    margin-bottom: 64px !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ml-sm-0 {
    margin-left: 0px !important;
  }

  .ml-sm-1 {
    margin-left: 4px !important;
  }

  .ml-sm-2 {
    margin-left: 8px !important;
  }

  .ml-sm-3 {
    margin-left: 12px !important;
  }

  .ml-sm-4 {
    margin-left: 16px !important;
  }

  .ml-sm-5 {
    margin-left: 20px !important;
  }

  .ml-sm-6 {
    margin-left: 24px !important;
  }

  .ml-sm-7 {
    margin-left: 28px !important;
  }

  .ml-sm-8 {
    margin-left: 32px !important;
  }

  .ml-sm-9 {
    margin-left: 36px !important;
  }

  .ml-sm-10 {
    margin-left: 40px !important;
  }

  .ml-sm-11 {
    margin-left: 44px !important;
  }

  .ml-sm-12 {
    margin-left: 48px !important;
  }

  .ml-sm-13 {
    margin-left: 52px !important;
  }

  .ml-sm-14 {
    margin-left: 56px !important;
  }

  .ml-sm-15 {
    margin-left: 60px !important;
  }

  .ml-sm-16 {
    margin-left: 64px !important;
  }

  .ml-sm-auto {
    margin-left: auto !important;
  }

  .ms-sm-0 {
    -webkit-margin-start: 0px !important;
            margin-inline-start: 0px !important;
  }

  .ms-sm-1 {
    -webkit-margin-start: 4px !important;
            margin-inline-start: 4px !important;
  }

  .ms-sm-2 {
    -webkit-margin-start: 8px !important;
            margin-inline-start: 8px !important;
  }

  .ms-sm-3 {
    -webkit-margin-start: 12px !important;
            margin-inline-start: 12px !important;
  }

  .ms-sm-4 {
    -webkit-margin-start: 16px !important;
            margin-inline-start: 16px !important;
  }

  .ms-sm-5 {
    -webkit-margin-start: 20px !important;
            margin-inline-start: 20px !important;
  }

  .ms-sm-6 {
    -webkit-margin-start: 24px !important;
            margin-inline-start: 24px !important;
  }

  .ms-sm-7 {
    -webkit-margin-start: 28px !important;
            margin-inline-start: 28px !important;
  }

  .ms-sm-8 {
    -webkit-margin-start: 32px !important;
            margin-inline-start: 32px !important;
  }

  .ms-sm-9 {
    -webkit-margin-start: 36px !important;
            margin-inline-start: 36px !important;
  }

  .ms-sm-10 {
    -webkit-margin-start: 40px !important;
            margin-inline-start: 40px !important;
  }

  .ms-sm-11 {
    -webkit-margin-start: 44px !important;
            margin-inline-start: 44px !important;
  }

  .ms-sm-12 {
    -webkit-margin-start: 48px !important;
            margin-inline-start: 48px !important;
  }

  .ms-sm-13 {
    -webkit-margin-start: 52px !important;
            margin-inline-start: 52px !important;
  }

  .ms-sm-14 {
    -webkit-margin-start: 56px !important;
            margin-inline-start: 56px !important;
  }

  .ms-sm-15 {
    -webkit-margin-start: 60px !important;
            margin-inline-start: 60px !important;
  }

  .ms-sm-16 {
    -webkit-margin-start: 64px !important;
            margin-inline-start: 64px !important;
  }

  .ms-sm-auto {
    -webkit-margin-start: auto !important;
            margin-inline-start: auto !important;
  }

  .me-sm-0 {
    -webkit-margin-end: 0px !important;
            margin-inline-end: 0px !important;
  }

  .me-sm-1 {
    -webkit-margin-end: 4px !important;
            margin-inline-end: 4px !important;
  }

  .me-sm-2 {
    -webkit-margin-end: 8px !important;
            margin-inline-end: 8px !important;
  }

  .me-sm-3 {
    -webkit-margin-end: 12px !important;
            margin-inline-end: 12px !important;
  }

  .me-sm-4 {
    -webkit-margin-end: 16px !important;
            margin-inline-end: 16px !important;
  }

  .me-sm-5 {
    -webkit-margin-end: 20px !important;
            margin-inline-end: 20px !important;
  }

  .me-sm-6 {
    -webkit-margin-end: 24px !important;
            margin-inline-end: 24px !important;
  }

  .me-sm-7 {
    -webkit-margin-end: 28px !important;
            margin-inline-end: 28px !important;
  }

  .me-sm-8 {
    -webkit-margin-end: 32px !important;
            margin-inline-end: 32px !important;
  }

  .me-sm-9 {
    -webkit-margin-end: 36px !important;
            margin-inline-end: 36px !important;
  }

  .me-sm-10 {
    -webkit-margin-end: 40px !important;
            margin-inline-end: 40px !important;
  }

  .me-sm-11 {
    -webkit-margin-end: 44px !important;
            margin-inline-end: 44px !important;
  }

  .me-sm-12 {
    -webkit-margin-end: 48px !important;
            margin-inline-end: 48px !important;
  }

  .me-sm-13 {
    -webkit-margin-end: 52px !important;
            margin-inline-end: 52px !important;
  }

  .me-sm-14 {
    -webkit-margin-end: 56px !important;
            margin-inline-end: 56px !important;
  }

  .me-sm-15 {
    -webkit-margin-end: 60px !important;
            margin-inline-end: 60px !important;
  }

  .me-sm-16 {
    -webkit-margin-end: 64px !important;
            margin-inline-end: 64px !important;
  }

  .me-sm-auto {
    -webkit-margin-end: auto !important;
            margin-inline-end: auto !important;
  }

  .ma-sm-n1 {
    margin: -4px !important;
  }

  .ma-sm-n2 {
    margin: -8px !important;
  }

  .ma-sm-n3 {
    margin: -12px !important;
  }

  .ma-sm-n4 {
    margin: -16px !important;
  }

  .ma-sm-n5 {
    margin: -20px !important;
  }

  .ma-sm-n6 {
    margin: -24px !important;
  }

  .ma-sm-n7 {
    margin: -28px !important;
  }

  .ma-sm-n8 {
    margin: -32px !important;
  }

  .ma-sm-n9 {
    margin: -36px !important;
  }

  .ma-sm-n10 {
    margin: -40px !important;
  }

  .ma-sm-n11 {
    margin: -44px !important;
  }

  .ma-sm-n12 {
    margin: -48px !important;
  }

  .ma-sm-n13 {
    margin: -52px !important;
  }

  .ma-sm-n14 {
    margin: -56px !important;
  }

  .ma-sm-n15 {
    margin: -60px !important;
  }

  .ma-sm-n16 {
    margin: -64px !important;
  }

  .mx-sm-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }

  .mx-sm-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }

  .mx-sm-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }

  .mx-sm-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }

  .mx-sm-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }

  .mx-sm-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }

  .mx-sm-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }

  .mx-sm-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }

  .mx-sm-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }

  .mx-sm-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }

  .mx-sm-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }

  .mx-sm-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }

  .mx-sm-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }

  .mx-sm-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }

  .mx-sm-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }

  .mx-sm-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }

  .my-sm-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }

  .my-sm-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }

  .my-sm-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }

  .my-sm-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }

  .my-sm-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }

  .my-sm-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }

  .my-sm-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }

  .my-sm-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }

  .my-sm-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }

  .my-sm-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }

  .my-sm-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }

  .my-sm-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }

  .my-sm-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }

  .my-sm-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }

  .my-sm-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }

  .my-sm-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }

  .mt-sm-n1 {
    margin-top: -4px !important;
  }

  .mt-sm-n2 {
    margin-top: -8px !important;
  }

  .mt-sm-n3 {
    margin-top: -12px !important;
  }

  .mt-sm-n4 {
    margin-top: -16px !important;
  }

  .mt-sm-n5 {
    margin-top: -20px !important;
  }

  .mt-sm-n6 {
    margin-top: -24px !important;
  }

  .mt-sm-n7 {
    margin-top: -28px !important;
  }

  .mt-sm-n8 {
    margin-top: -32px !important;
  }

  .mt-sm-n9 {
    margin-top: -36px !important;
  }

  .mt-sm-n10 {
    margin-top: -40px !important;
  }

  .mt-sm-n11 {
    margin-top: -44px !important;
  }

  .mt-sm-n12 {
    margin-top: -48px !important;
  }

  .mt-sm-n13 {
    margin-top: -52px !important;
  }

  .mt-sm-n14 {
    margin-top: -56px !important;
  }

  .mt-sm-n15 {
    margin-top: -60px !important;
  }

  .mt-sm-n16 {
    margin-top: -64px !important;
  }

  .mr-sm-n1 {
    margin-right: -4px !important;
  }

  .mr-sm-n2 {
    margin-right: -8px !important;
  }

  .mr-sm-n3 {
    margin-right: -12px !important;
  }

  .mr-sm-n4 {
    margin-right: -16px !important;
  }

  .mr-sm-n5 {
    margin-right: -20px !important;
  }

  .mr-sm-n6 {
    margin-right: -24px !important;
  }

  .mr-sm-n7 {
    margin-right: -28px !important;
  }

  .mr-sm-n8 {
    margin-right: -32px !important;
  }

  .mr-sm-n9 {
    margin-right: -36px !important;
  }

  .mr-sm-n10 {
    margin-right: -40px !important;
  }

  .mr-sm-n11 {
    margin-right: -44px !important;
  }

  .mr-sm-n12 {
    margin-right: -48px !important;
  }

  .mr-sm-n13 {
    margin-right: -52px !important;
  }

  .mr-sm-n14 {
    margin-right: -56px !important;
  }

  .mr-sm-n15 {
    margin-right: -60px !important;
  }

  .mr-sm-n16 {
    margin-right: -64px !important;
  }

  .mb-sm-n1 {
    margin-bottom: -4px !important;
  }

  .mb-sm-n2 {
    margin-bottom: -8px !important;
  }

  .mb-sm-n3 {
    margin-bottom: -12px !important;
  }

  .mb-sm-n4 {
    margin-bottom: -16px !important;
  }

  .mb-sm-n5 {
    margin-bottom: -20px !important;
  }

  .mb-sm-n6 {
    margin-bottom: -24px !important;
  }

  .mb-sm-n7 {
    margin-bottom: -28px !important;
  }

  .mb-sm-n8 {
    margin-bottom: -32px !important;
  }

  .mb-sm-n9 {
    margin-bottom: -36px !important;
  }

  .mb-sm-n10 {
    margin-bottom: -40px !important;
  }

  .mb-sm-n11 {
    margin-bottom: -44px !important;
  }

  .mb-sm-n12 {
    margin-bottom: -48px !important;
  }

  .mb-sm-n13 {
    margin-bottom: -52px !important;
  }

  .mb-sm-n14 {
    margin-bottom: -56px !important;
  }

  .mb-sm-n15 {
    margin-bottom: -60px !important;
  }

  .mb-sm-n16 {
    margin-bottom: -64px !important;
  }

  .ml-sm-n1 {
    margin-left: -4px !important;
  }

  .ml-sm-n2 {
    margin-left: -8px !important;
  }

  .ml-sm-n3 {
    margin-left: -12px !important;
  }

  .ml-sm-n4 {
    margin-left: -16px !important;
  }

  .ml-sm-n5 {
    margin-left: -20px !important;
  }

  .ml-sm-n6 {
    margin-left: -24px !important;
  }

  .ml-sm-n7 {
    margin-left: -28px !important;
  }

  .ml-sm-n8 {
    margin-left: -32px !important;
  }

  .ml-sm-n9 {
    margin-left: -36px !important;
  }

  .ml-sm-n10 {
    margin-left: -40px !important;
  }

  .ml-sm-n11 {
    margin-left: -44px !important;
  }

  .ml-sm-n12 {
    margin-left: -48px !important;
  }

  .ml-sm-n13 {
    margin-left: -52px !important;
  }

  .ml-sm-n14 {
    margin-left: -56px !important;
  }

  .ml-sm-n15 {
    margin-left: -60px !important;
  }

  .ml-sm-n16 {
    margin-left: -64px !important;
  }

  .ms-sm-n1 {
    -webkit-margin-start: -4px !important;
            margin-inline-start: -4px !important;
  }

  .ms-sm-n2 {
    -webkit-margin-start: -8px !important;
            margin-inline-start: -8px !important;
  }

  .ms-sm-n3 {
    -webkit-margin-start: -12px !important;
            margin-inline-start: -12px !important;
  }

  .ms-sm-n4 {
    -webkit-margin-start: -16px !important;
            margin-inline-start: -16px !important;
  }

  .ms-sm-n5 {
    -webkit-margin-start: -20px !important;
            margin-inline-start: -20px !important;
  }

  .ms-sm-n6 {
    -webkit-margin-start: -24px !important;
            margin-inline-start: -24px !important;
  }

  .ms-sm-n7 {
    -webkit-margin-start: -28px !important;
            margin-inline-start: -28px !important;
  }

  .ms-sm-n8 {
    -webkit-margin-start: -32px !important;
            margin-inline-start: -32px !important;
  }

  .ms-sm-n9 {
    -webkit-margin-start: -36px !important;
            margin-inline-start: -36px !important;
  }

  .ms-sm-n10 {
    -webkit-margin-start: -40px !important;
            margin-inline-start: -40px !important;
  }

  .ms-sm-n11 {
    -webkit-margin-start: -44px !important;
            margin-inline-start: -44px !important;
  }

  .ms-sm-n12 {
    -webkit-margin-start: -48px !important;
            margin-inline-start: -48px !important;
  }

  .ms-sm-n13 {
    -webkit-margin-start: -52px !important;
            margin-inline-start: -52px !important;
  }

  .ms-sm-n14 {
    -webkit-margin-start: -56px !important;
            margin-inline-start: -56px !important;
  }

  .ms-sm-n15 {
    -webkit-margin-start: -60px !important;
            margin-inline-start: -60px !important;
  }

  .ms-sm-n16 {
    -webkit-margin-start: -64px !important;
            margin-inline-start: -64px !important;
  }

  .me-sm-n1 {
    -webkit-margin-end: -4px !important;
            margin-inline-end: -4px !important;
  }

  .me-sm-n2 {
    -webkit-margin-end: -8px !important;
            margin-inline-end: -8px !important;
  }

  .me-sm-n3 {
    -webkit-margin-end: -12px !important;
            margin-inline-end: -12px !important;
  }

  .me-sm-n4 {
    -webkit-margin-end: -16px !important;
            margin-inline-end: -16px !important;
  }

  .me-sm-n5 {
    -webkit-margin-end: -20px !important;
            margin-inline-end: -20px !important;
  }

  .me-sm-n6 {
    -webkit-margin-end: -24px !important;
            margin-inline-end: -24px !important;
  }

  .me-sm-n7 {
    -webkit-margin-end: -28px !important;
            margin-inline-end: -28px !important;
  }

  .me-sm-n8 {
    -webkit-margin-end: -32px !important;
            margin-inline-end: -32px !important;
  }

  .me-sm-n9 {
    -webkit-margin-end: -36px !important;
            margin-inline-end: -36px !important;
  }

  .me-sm-n10 {
    -webkit-margin-end: -40px !important;
            margin-inline-end: -40px !important;
  }

  .me-sm-n11 {
    -webkit-margin-end: -44px !important;
            margin-inline-end: -44px !important;
  }

  .me-sm-n12 {
    -webkit-margin-end: -48px !important;
            margin-inline-end: -48px !important;
  }

  .me-sm-n13 {
    -webkit-margin-end: -52px !important;
            margin-inline-end: -52px !important;
  }

  .me-sm-n14 {
    -webkit-margin-end: -56px !important;
            margin-inline-end: -56px !important;
  }

  .me-sm-n15 {
    -webkit-margin-end: -60px !important;
            margin-inline-end: -60px !important;
  }

  .me-sm-n16 {
    -webkit-margin-end: -64px !important;
            margin-inline-end: -64px !important;
  }

  .pa-sm-0 {
    padding: 0px !important;
  }

  .pa-sm-1 {
    padding: 4px !important;
  }

  .pa-sm-2 {
    padding: 8px !important;
  }

  .pa-sm-3 {
    padding: 12px !important;
  }

  .pa-sm-4 {
    padding: 16px !important;
  }

  .pa-sm-5 {
    padding: 20px !important;
  }

  .pa-sm-6 {
    padding: 24px !important;
  }

  .pa-sm-7 {
    padding: 28px !important;
  }

  .pa-sm-8 {
    padding: 32px !important;
  }

  .pa-sm-9 {
    padding: 36px !important;
  }

  .pa-sm-10 {
    padding: 40px !important;
  }

  .pa-sm-11 {
    padding: 44px !important;
  }

  .pa-sm-12 {
    padding: 48px !important;
  }

  .pa-sm-13 {
    padding: 52px !important;
  }

  .pa-sm-14 {
    padding: 56px !important;
  }

  .pa-sm-15 {
    padding: 60px !important;
  }

  .pa-sm-16 {
    padding: 64px !important;
  }

  .px-sm-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .px-sm-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }

  .px-sm-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .px-sm-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  .px-sm-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .px-sm-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .px-sm-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .px-sm-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }

  .px-sm-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }

  .px-sm-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }

  .px-sm-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .px-sm-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }

  .px-sm-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }

  .px-sm-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }

  .px-sm-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }

  .px-sm-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }

  .px-sm-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }

  .py-sm-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .py-sm-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .py-sm-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .py-sm-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .py-sm-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .py-sm-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .py-sm-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .py-sm-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .py-sm-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .py-sm-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .py-sm-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .py-sm-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .py-sm-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .py-sm-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }

  .py-sm-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }

  .py-sm-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .py-sm-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .pt-sm-0 {
    padding-top: 0px !important;
  }

  .pt-sm-1 {
    padding-top: 4px !important;
  }

  .pt-sm-2 {
    padding-top: 8px !important;
  }

  .pt-sm-3 {
    padding-top: 12px !important;
  }

  .pt-sm-4 {
    padding-top: 16px !important;
  }

  .pt-sm-5 {
    padding-top: 20px !important;
  }

  .pt-sm-6 {
    padding-top: 24px !important;
  }

  .pt-sm-7 {
    padding-top: 28px !important;
  }

  .pt-sm-8 {
    padding-top: 32px !important;
  }

  .pt-sm-9 {
    padding-top: 36px !important;
  }

  .pt-sm-10 {
    padding-top: 40px !important;
  }

  .pt-sm-11 {
    padding-top: 44px !important;
  }

  .pt-sm-12 {
    padding-top: 48px !important;
  }

  .pt-sm-13 {
    padding-top: 52px !important;
  }

  .pt-sm-14 {
    padding-top: 56px !important;
  }

  .pt-sm-15 {
    padding-top: 60px !important;
  }

  .pt-sm-16 {
    padding-top: 64px !important;
  }

  .pr-sm-0 {
    padding-right: 0px !important;
  }

  .pr-sm-1 {
    padding-right: 4px !important;
  }

  .pr-sm-2 {
    padding-right: 8px !important;
  }

  .pr-sm-3 {
    padding-right: 12px !important;
  }

  .pr-sm-4 {
    padding-right: 16px !important;
  }

  .pr-sm-5 {
    padding-right: 20px !important;
  }

  .pr-sm-6 {
    padding-right: 24px !important;
  }

  .pr-sm-7 {
    padding-right: 28px !important;
  }

  .pr-sm-8 {
    padding-right: 32px !important;
  }

  .pr-sm-9 {
    padding-right: 36px !important;
  }

  .pr-sm-10 {
    padding-right: 40px !important;
  }

  .pr-sm-11 {
    padding-right: 44px !important;
  }

  .pr-sm-12 {
    padding-right: 48px !important;
  }

  .pr-sm-13 {
    padding-right: 52px !important;
  }

  .pr-sm-14 {
    padding-right: 56px !important;
  }

  .pr-sm-15 {
    padding-right: 60px !important;
  }

  .pr-sm-16 {
    padding-right: 64px !important;
  }

  .pb-sm-0 {
    padding-bottom: 0px !important;
  }

  .pb-sm-1 {
    padding-bottom: 4px !important;
  }

  .pb-sm-2 {
    padding-bottom: 8px !important;
  }

  .pb-sm-3 {
    padding-bottom: 12px !important;
  }

  .pb-sm-4 {
    padding-bottom: 16px !important;
  }

  .pb-sm-5 {
    padding-bottom: 20px !important;
  }

  .pb-sm-6 {
    padding-bottom: 24px !important;
  }

  .pb-sm-7 {
    padding-bottom: 28px !important;
  }

  .pb-sm-8 {
    padding-bottom: 32px !important;
  }

  .pb-sm-9 {
    padding-bottom: 36px !important;
  }

  .pb-sm-10 {
    padding-bottom: 40px !important;
  }

  .pb-sm-11 {
    padding-bottom: 44px !important;
  }

  .pb-sm-12 {
    padding-bottom: 48px !important;
  }

  .pb-sm-13 {
    padding-bottom: 52px !important;
  }

  .pb-sm-14 {
    padding-bottom: 56px !important;
  }

  .pb-sm-15 {
    padding-bottom: 60px !important;
  }

  .pb-sm-16 {
    padding-bottom: 64px !important;
  }

  .pl-sm-0 {
    padding-left: 0px !important;
  }

  .pl-sm-1 {
    padding-left: 4px !important;
  }

  .pl-sm-2 {
    padding-left: 8px !important;
  }

  .pl-sm-3 {
    padding-left: 12px !important;
  }

  .pl-sm-4 {
    padding-left: 16px !important;
  }

  .pl-sm-5 {
    padding-left: 20px !important;
  }

  .pl-sm-6 {
    padding-left: 24px !important;
  }

  .pl-sm-7 {
    padding-left: 28px !important;
  }

  .pl-sm-8 {
    padding-left: 32px !important;
  }

  .pl-sm-9 {
    padding-left: 36px !important;
  }

  .pl-sm-10 {
    padding-left: 40px !important;
  }

  .pl-sm-11 {
    padding-left: 44px !important;
  }

  .pl-sm-12 {
    padding-left: 48px !important;
  }

  .pl-sm-13 {
    padding-left: 52px !important;
  }

  .pl-sm-14 {
    padding-left: 56px !important;
  }

  .pl-sm-15 {
    padding-left: 60px !important;
  }

  .pl-sm-16 {
    padding-left: 64px !important;
  }

  .ps-sm-0 {
    -webkit-padding-start: 0px !important;
            padding-inline-start: 0px !important;
  }

  .ps-sm-1 {
    -webkit-padding-start: 4px !important;
            padding-inline-start: 4px !important;
  }

  .ps-sm-2 {
    -webkit-padding-start: 8px !important;
            padding-inline-start: 8px !important;
  }

  .ps-sm-3 {
    -webkit-padding-start: 12px !important;
            padding-inline-start: 12px !important;
  }

  .ps-sm-4 {
    -webkit-padding-start: 16px !important;
            padding-inline-start: 16px !important;
  }

  .ps-sm-5 {
    -webkit-padding-start: 20px !important;
            padding-inline-start: 20px !important;
  }

  .ps-sm-6 {
    -webkit-padding-start: 24px !important;
            padding-inline-start: 24px !important;
  }

  .ps-sm-7 {
    -webkit-padding-start: 28px !important;
            padding-inline-start: 28px !important;
  }

  .ps-sm-8 {
    -webkit-padding-start: 32px !important;
            padding-inline-start: 32px !important;
  }

  .ps-sm-9 {
    -webkit-padding-start: 36px !important;
            padding-inline-start: 36px !important;
  }

  .ps-sm-10 {
    -webkit-padding-start: 40px !important;
            padding-inline-start: 40px !important;
  }

  .ps-sm-11 {
    -webkit-padding-start: 44px !important;
            padding-inline-start: 44px !important;
  }

  .ps-sm-12 {
    -webkit-padding-start: 48px !important;
            padding-inline-start: 48px !important;
  }

  .ps-sm-13 {
    -webkit-padding-start: 52px !important;
            padding-inline-start: 52px !important;
  }

  .ps-sm-14 {
    -webkit-padding-start: 56px !important;
            padding-inline-start: 56px !important;
  }

  .ps-sm-15 {
    -webkit-padding-start: 60px !important;
            padding-inline-start: 60px !important;
  }

  .ps-sm-16 {
    -webkit-padding-start: 64px !important;
            padding-inline-start: 64px !important;
  }

  .pe-sm-0 {
    -webkit-padding-end: 0px !important;
            padding-inline-end: 0px !important;
  }

  .pe-sm-1 {
    -webkit-padding-end: 4px !important;
            padding-inline-end: 4px !important;
  }

  .pe-sm-2 {
    -webkit-padding-end: 8px !important;
            padding-inline-end: 8px !important;
  }

  .pe-sm-3 {
    -webkit-padding-end: 12px !important;
            padding-inline-end: 12px !important;
  }

  .pe-sm-4 {
    -webkit-padding-end: 16px !important;
            padding-inline-end: 16px !important;
  }

  .pe-sm-5 {
    -webkit-padding-end: 20px !important;
            padding-inline-end: 20px !important;
  }

  .pe-sm-6 {
    -webkit-padding-end: 24px !important;
            padding-inline-end: 24px !important;
  }

  .pe-sm-7 {
    -webkit-padding-end: 28px !important;
            padding-inline-end: 28px !important;
  }

  .pe-sm-8 {
    -webkit-padding-end: 32px !important;
            padding-inline-end: 32px !important;
  }

  .pe-sm-9 {
    -webkit-padding-end: 36px !important;
            padding-inline-end: 36px !important;
  }

  .pe-sm-10 {
    -webkit-padding-end: 40px !important;
            padding-inline-end: 40px !important;
  }

  .pe-sm-11 {
    -webkit-padding-end: 44px !important;
            padding-inline-end: 44px !important;
  }

  .pe-sm-12 {
    -webkit-padding-end: 48px !important;
            padding-inline-end: 48px !important;
  }

  .pe-sm-13 {
    -webkit-padding-end: 52px !important;
            padding-inline-end: 52px !important;
  }

  .pe-sm-14 {
    -webkit-padding-end: 56px !important;
            padding-inline-end: 56px !important;
  }

  .pe-sm-15 {
    -webkit-padding-end: 60px !important;
            padding-inline-end: 60px !important;
  }

  .pe-sm-16 {
    -webkit-padding-end: 64px !important;
            padding-inline-end: 64px !important;
  }

  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }

  .text-sm-justify {
    text-align: justify !important;
  }

  .text-sm-start {
    text-align: start !important;
  }

  .text-sm-end {
    text-align: end !important;
  }

  .text-sm-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }

  .text-sm-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-sm-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 960px) {
  .d-md-none {
    display: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .float-md-none {
    float: none !important;
  }

  .float-md-left {
    float: left !important;
  }

  .float-md-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-md-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-md-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-md-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-md-start {
    float: left !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-md-start {
    justify-content: flex-start !important;
  }

  .justify-md-end {
    justify-content: flex-end !important;
  }

  .justify-md-center {
    justify-content: center !important;
  }

  .justify-md-space-between {
    justify-content: space-between !important;
  }

  .justify-md-space-around {
    justify-content: space-around !important;
  }

  .align-md-start {
    align-items: flex-start !important;
  }

  .align-md-end {
    align-items: flex-end !important;
  }

  .align-md-center {
    align-items: center !important;
  }

  .align-md-baseline {
    align-items: baseline !important;
  }

  .align-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-space-between {
    align-content: space-between !important;
  }

  .align-content-md-space-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-6 {
    order: 6 !important;
  }

  .order-md-7 {
    order: 7 !important;
  }

  .order-md-8 {
    order: 8 !important;
  }

  .order-md-9 {
    order: 9 !important;
  }

  .order-md-10 {
    order: 10 !important;
  }

  .order-md-11 {
    order: 11 !important;
  }

  .order-md-12 {
    order: 12 !important;
  }

  .order-md-last {
    order: 13 !important;
  }

  .ma-md-0 {
    margin: 0px !important;
  }

  .ma-md-1 {
    margin: 4px !important;
  }

  .ma-md-2 {
    margin: 8px !important;
  }

  .ma-md-3 {
    margin: 12px !important;
  }

  .ma-md-4 {
    margin: 16px !important;
  }

  .ma-md-5 {
    margin: 20px !important;
  }

  .ma-md-6 {
    margin: 24px !important;
  }

  .ma-md-7 {
    margin: 28px !important;
  }

  .ma-md-8 {
    margin: 32px !important;
  }

  .ma-md-9 {
    margin: 36px !important;
  }

  .ma-md-10 {
    margin: 40px !important;
  }

  .ma-md-11 {
    margin: 44px !important;
  }

  .ma-md-12 {
    margin: 48px !important;
  }

  .ma-md-13 {
    margin: 52px !important;
  }

  .ma-md-14 {
    margin: 56px !important;
  }

  .ma-md-15 {
    margin: 60px !important;
  }

  .ma-md-16 {
    margin: 64px !important;
  }

  .ma-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .mx-md-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }

  .mx-md-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }

  .mx-md-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }

  .mx-md-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }

  .mx-md-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }

  .mx-md-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }

  .mx-md-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }

  .mx-md-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }

  .mx-md-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }

  .mx-md-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }

  .mx-md-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }

  .mx-md-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }

  .mx-md-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }

  .mx-md-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }

  .mx-md-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }

  .mx-md-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .my-md-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .my-md-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .my-md-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .my-md-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-md-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .my-md-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .my-md-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .my-md-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .my-md-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .my-md-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .my-md-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .my-md-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .my-md-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }

  .my-md-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }

  .my-md-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .my-md-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0px !important;
  }

  .mt-md-1 {
    margin-top: 4px !important;
  }

  .mt-md-2 {
    margin-top: 8px !important;
  }

  .mt-md-3 {
    margin-top: 12px !important;
  }

  .mt-md-4 {
    margin-top: 16px !important;
  }

  .mt-md-5 {
    margin-top: 20px !important;
  }

  .mt-md-6 {
    margin-top: 24px !important;
  }

  .mt-md-7 {
    margin-top: 28px !important;
  }

  .mt-md-8 {
    margin-top: 32px !important;
  }

  .mt-md-9 {
    margin-top: 36px !important;
  }

  .mt-md-10 {
    margin-top: 40px !important;
  }

  .mt-md-11 {
    margin-top: 44px !important;
  }

  .mt-md-12 {
    margin-top: 48px !important;
  }

  .mt-md-13 {
    margin-top: 52px !important;
  }

  .mt-md-14 {
    margin-top: 56px !important;
  }

  .mt-md-15 {
    margin-top: 60px !important;
  }

  .mt-md-16 {
    margin-top: 64px !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .mr-md-0 {
    margin-right: 0px !important;
  }

  .mr-md-1 {
    margin-right: 4px !important;
  }

  .mr-md-2 {
    margin-right: 8px !important;
  }

  .mr-md-3 {
    margin-right: 12px !important;
  }

  .mr-md-4 {
    margin-right: 16px !important;
  }

  .mr-md-5 {
    margin-right: 20px !important;
  }

  .mr-md-6 {
    margin-right: 24px !important;
  }

  .mr-md-7 {
    margin-right: 28px !important;
  }

  .mr-md-8 {
    margin-right: 32px !important;
  }

  .mr-md-9 {
    margin-right: 36px !important;
  }

  .mr-md-10 {
    margin-right: 40px !important;
  }

  .mr-md-11 {
    margin-right: 44px !important;
  }

  .mr-md-12 {
    margin-right: 48px !important;
  }

  .mr-md-13 {
    margin-right: 52px !important;
  }

  .mr-md-14 {
    margin-right: 56px !important;
  }

  .mr-md-15 {
    margin-right: 60px !important;
  }

  .mr-md-16 {
    margin-right: 64px !important;
  }

  .mr-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0px !important;
  }

  .mb-md-1 {
    margin-bottom: 4px !important;
  }

  .mb-md-2 {
    margin-bottom: 8px !important;
  }

  .mb-md-3 {
    margin-bottom: 12px !important;
  }

  .mb-md-4 {
    margin-bottom: 16px !important;
  }

  .mb-md-5 {
    margin-bottom: 20px !important;
  }

  .mb-md-6 {
    margin-bottom: 24px !important;
  }

  .mb-md-7 {
    margin-bottom: 28px !important;
  }

  .mb-md-8 {
    margin-bottom: 32px !important;
  }

  .mb-md-9 {
    margin-bottom: 36px !important;
  }

  .mb-md-10 {
    margin-bottom: 40px !important;
  }

  .mb-md-11 {
    margin-bottom: 44px !important;
  }

  .mb-md-12 {
    margin-bottom: 48px !important;
  }

  .mb-md-13 {
    margin-bottom: 52px !important;
  }

  .mb-md-14 {
    margin-bottom: 56px !important;
  }

  .mb-md-15 {
    margin-bottom: 60px !important;
  }

  .mb-md-16 {
    margin-bottom: 64px !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ml-md-0 {
    margin-left: 0px !important;
  }

  .ml-md-1 {
    margin-left: 4px !important;
  }

  .ml-md-2 {
    margin-left: 8px !important;
  }

  .ml-md-3 {
    margin-left: 12px !important;
  }

  .ml-md-4 {
    margin-left: 16px !important;
  }

  .ml-md-5 {
    margin-left: 20px !important;
  }

  .ml-md-6 {
    margin-left: 24px !important;
  }

  .ml-md-7 {
    margin-left: 28px !important;
  }

  .ml-md-8 {
    margin-left: 32px !important;
  }

  .ml-md-9 {
    margin-left: 36px !important;
  }

  .ml-md-10 {
    margin-left: 40px !important;
  }

  .ml-md-11 {
    margin-left: 44px !important;
  }

  .ml-md-12 {
    margin-left: 48px !important;
  }

  .ml-md-13 {
    margin-left: 52px !important;
  }

  .ml-md-14 {
    margin-left: 56px !important;
  }

  .ml-md-15 {
    margin-left: 60px !important;
  }

  .ml-md-16 {
    margin-left: 64px !important;
  }

  .ml-md-auto {
    margin-left: auto !important;
  }

  .ms-md-0 {
    -webkit-margin-start: 0px !important;
            margin-inline-start: 0px !important;
  }

  .ms-md-1 {
    -webkit-margin-start: 4px !important;
            margin-inline-start: 4px !important;
  }

  .ms-md-2 {
    -webkit-margin-start: 8px !important;
            margin-inline-start: 8px !important;
  }

  .ms-md-3 {
    -webkit-margin-start: 12px !important;
            margin-inline-start: 12px !important;
  }

  .ms-md-4 {
    -webkit-margin-start: 16px !important;
            margin-inline-start: 16px !important;
  }

  .ms-md-5 {
    -webkit-margin-start: 20px !important;
            margin-inline-start: 20px !important;
  }

  .ms-md-6 {
    -webkit-margin-start: 24px !important;
            margin-inline-start: 24px !important;
  }

  .ms-md-7 {
    -webkit-margin-start: 28px !important;
            margin-inline-start: 28px !important;
  }

  .ms-md-8 {
    -webkit-margin-start: 32px !important;
            margin-inline-start: 32px !important;
  }

  .ms-md-9 {
    -webkit-margin-start: 36px !important;
            margin-inline-start: 36px !important;
  }

  .ms-md-10 {
    -webkit-margin-start: 40px !important;
            margin-inline-start: 40px !important;
  }

  .ms-md-11 {
    -webkit-margin-start: 44px !important;
            margin-inline-start: 44px !important;
  }

  .ms-md-12 {
    -webkit-margin-start: 48px !important;
            margin-inline-start: 48px !important;
  }

  .ms-md-13 {
    -webkit-margin-start: 52px !important;
            margin-inline-start: 52px !important;
  }

  .ms-md-14 {
    -webkit-margin-start: 56px !important;
            margin-inline-start: 56px !important;
  }

  .ms-md-15 {
    -webkit-margin-start: 60px !important;
            margin-inline-start: 60px !important;
  }

  .ms-md-16 {
    -webkit-margin-start: 64px !important;
            margin-inline-start: 64px !important;
  }

  .ms-md-auto {
    -webkit-margin-start: auto !important;
            margin-inline-start: auto !important;
  }

  .me-md-0 {
    -webkit-margin-end: 0px !important;
            margin-inline-end: 0px !important;
  }

  .me-md-1 {
    -webkit-margin-end: 4px !important;
            margin-inline-end: 4px !important;
  }

  .me-md-2 {
    -webkit-margin-end: 8px !important;
            margin-inline-end: 8px !important;
  }

  .me-md-3 {
    -webkit-margin-end: 12px !important;
            margin-inline-end: 12px !important;
  }

  .me-md-4 {
    -webkit-margin-end: 16px !important;
            margin-inline-end: 16px !important;
  }

  .me-md-5 {
    -webkit-margin-end: 20px !important;
            margin-inline-end: 20px !important;
  }

  .me-md-6 {
    -webkit-margin-end: 24px !important;
            margin-inline-end: 24px !important;
  }

  .me-md-7 {
    -webkit-margin-end: 28px !important;
            margin-inline-end: 28px !important;
  }

  .me-md-8 {
    -webkit-margin-end: 32px !important;
            margin-inline-end: 32px !important;
  }

  .me-md-9 {
    -webkit-margin-end: 36px !important;
            margin-inline-end: 36px !important;
  }

  .me-md-10 {
    -webkit-margin-end: 40px !important;
            margin-inline-end: 40px !important;
  }

  .me-md-11 {
    -webkit-margin-end: 44px !important;
            margin-inline-end: 44px !important;
  }

  .me-md-12 {
    -webkit-margin-end: 48px !important;
            margin-inline-end: 48px !important;
  }

  .me-md-13 {
    -webkit-margin-end: 52px !important;
            margin-inline-end: 52px !important;
  }

  .me-md-14 {
    -webkit-margin-end: 56px !important;
            margin-inline-end: 56px !important;
  }

  .me-md-15 {
    -webkit-margin-end: 60px !important;
            margin-inline-end: 60px !important;
  }

  .me-md-16 {
    -webkit-margin-end: 64px !important;
            margin-inline-end: 64px !important;
  }

  .me-md-auto {
    -webkit-margin-end: auto !important;
            margin-inline-end: auto !important;
  }

  .ma-md-n1 {
    margin: -4px !important;
  }

  .ma-md-n2 {
    margin: -8px !important;
  }

  .ma-md-n3 {
    margin: -12px !important;
  }

  .ma-md-n4 {
    margin: -16px !important;
  }

  .ma-md-n5 {
    margin: -20px !important;
  }

  .ma-md-n6 {
    margin: -24px !important;
  }

  .ma-md-n7 {
    margin: -28px !important;
  }

  .ma-md-n8 {
    margin: -32px !important;
  }

  .ma-md-n9 {
    margin: -36px !important;
  }

  .ma-md-n10 {
    margin: -40px !important;
  }

  .ma-md-n11 {
    margin: -44px !important;
  }

  .ma-md-n12 {
    margin: -48px !important;
  }

  .ma-md-n13 {
    margin: -52px !important;
  }

  .ma-md-n14 {
    margin: -56px !important;
  }

  .ma-md-n15 {
    margin: -60px !important;
  }

  .ma-md-n16 {
    margin: -64px !important;
  }

  .mx-md-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }

  .mx-md-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }

  .mx-md-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }

  .mx-md-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }

  .mx-md-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }

  .mx-md-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }

  .mx-md-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }

  .mx-md-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }

  .mx-md-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }

  .mx-md-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }

  .mx-md-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }

  .mx-md-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }

  .mx-md-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }

  .mx-md-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }

  .mx-md-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }

  .mx-md-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }

  .my-md-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }

  .my-md-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }

  .my-md-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }

  .my-md-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }

  .my-md-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }

  .my-md-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }

  .my-md-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }

  .my-md-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }

  .my-md-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }

  .my-md-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }

  .my-md-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }

  .my-md-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }

  .my-md-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }

  .my-md-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }

  .my-md-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }

  .my-md-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }

  .mt-md-n1 {
    margin-top: -4px !important;
  }

  .mt-md-n2 {
    margin-top: -8px !important;
  }

  .mt-md-n3 {
    margin-top: -12px !important;
  }

  .mt-md-n4 {
    margin-top: -16px !important;
  }

  .mt-md-n5 {
    margin-top: -20px !important;
  }

  .mt-md-n6 {
    margin-top: -24px !important;
  }

  .mt-md-n7 {
    margin-top: -28px !important;
  }

  .mt-md-n8 {
    margin-top: -32px !important;
  }

  .mt-md-n9 {
    margin-top: -36px !important;
  }

  .mt-md-n10 {
    margin-top: -40px !important;
  }

  .mt-md-n11 {
    margin-top: -44px !important;
  }

  .mt-md-n12 {
    margin-top: -48px !important;
  }

  .mt-md-n13 {
    margin-top: -52px !important;
  }

  .mt-md-n14 {
    margin-top: -56px !important;
  }

  .mt-md-n15 {
    margin-top: -60px !important;
  }

  .mt-md-n16 {
    margin-top: -64px !important;
  }

  .mr-md-n1 {
    margin-right: -4px !important;
  }

  .mr-md-n2 {
    margin-right: -8px !important;
  }

  .mr-md-n3 {
    margin-right: -12px !important;
  }

  .mr-md-n4 {
    margin-right: -16px !important;
  }

  .mr-md-n5 {
    margin-right: -20px !important;
  }

  .mr-md-n6 {
    margin-right: -24px !important;
  }

  .mr-md-n7 {
    margin-right: -28px !important;
  }

  .mr-md-n8 {
    margin-right: -32px !important;
  }

  .mr-md-n9 {
    margin-right: -36px !important;
  }

  .mr-md-n10 {
    margin-right: -40px !important;
  }

  .mr-md-n11 {
    margin-right: -44px !important;
  }

  .mr-md-n12 {
    margin-right: -48px !important;
  }

  .mr-md-n13 {
    margin-right: -52px !important;
  }

  .mr-md-n14 {
    margin-right: -56px !important;
  }

  .mr-md-n15 {
    margin-right: -60px !important;
  }

  .mr-md-n16 {
    margin-right: -64px !important;
  }

  .mb-md-n1 {
    margin-bottom: -4px !important;
  }

  .mb-md-n2 {
    margin-bottom: -8px !important;
  }

  .mb-md-n3 {
    margin-bottom: -12px !important;
  }

  .mb-md-n4 {
    margin-bottom: -16px !important;
  }

  .mb-md-n5 {
    margin-bottom: -20px !important;
  }

  .mb-md-n6 {
    margin-bottom: -24px !important;
  }

  .mb-md-n7 {
    margin-bottom: -28px !important;
  }

  .mb-md-n8 {
    margin-bottom: -32px !important;
  }

  .mb-md-n9 {
    margin-bottom: -36px !important;
  }

  .mb-md-n10 {
    margin-bottom: -40px !important;
  }

  .mb-md-n11 {
    margin-bottom: -44px !important;
  }

  .mb-md-n12 {
    margin-bottom: -48px !important;
  }

  .mb-md-n13 {
    margin-bottom: -52px !important;
  }

  .mb-md-n14 {
    margin-bottom: -56px !important;
  }

  .mb-md-n15 {
    margin-bottom: -60px !important;
  }

  .mb-md-n16 {
    margin-bottom: -64px !important;
  }

  .ml-md-n1 {
    margin-left: -4px !important;
  }

  .ml-md-n2 {
    margin-left: -8px !important;
  }

  .ml-md-n3 {
    margin-left: -12px !important;
  }

  .ml-md-n4 {
    margin-left: -16px !important;
  }

  .ml-md-n5 {
    margin-left: -20px !important;
  }

  .ml-md-n6 {
    margin-left: -24px !important;
  }

  .ml-md-n7 {
    margin-left: -28px !important;
  }

  .ml-md-n8 {
    margin-left: -32px !important;
  }

  .ml-md-n9 {
    margin-left: -36px !important;
  }

  .ml-md-n10 {
    margin-left: -40px !important;
  }

  .ml-md-n11 {
    margin-left: -44px !important;
  }

  .ml-md-n12 {
    margin-left: -48px !important;
  }

  .ml-md-n13 {
    margin-left: -52px !important;
  }

  .ml-md-n14 {
    margin-left: -56px !important;
  }

  .ml-md-n15 {
    margin-left: -60px !important;
  }

  .ml-md-n16 {
    margin-left: -64px !important;
  }

  .ms-md-n1 {
    -webkit-margin-start: -4px !important;
            margin-inline-start: -4px !important;
  }

  .ms-md-n2 {
    -webkit-margin-start: -8px !important;
            margin-inline-start: -8px !important;
  }

  .ms-md-n3 {
    -webkit-margin-start: -12px !important;
            margin-inline-start: -12px !important;
  }

  .ms-md-n4 {
    -webkit-margin-start: -16px !important;
            margin-inline-start: -16px !important;
  }

  .ms-md-n5 {
    -webkit-margin-start: -20px !important;
            margin-inline-start: -20px !important;
  }

  .ms-md-n6 {
    -webkit-margin-start: -24px !important;
            margin-inline-start: -24px !important;
  }

  .ms-md-n7 {
    -webkit-margin-start: -28px !important;
            margin-inline-start: -28px !important;
  }

  .ms-md-n8 {
    -webkit-margin-start: -32px !important;
            margin-inline-start: -32px !important;
  }

  .ms-md-n9 {
    -webkit-margin-start: -36px !important;
            margin-inline-start: -36px !important;
  }

  .ms-md-n10 {
    -webkit-margin-start: -40px !important;
            margin-inline-start: -40px !important;
  }

  .ms-md-n11 {
    -webkit-margin-start: -44px !important;
            margin-inline-start: -44px !important;
  }

  .ms-md-n12 {
    -webkit-margin-start: -48px !important;
            margin-inline-start: -48px !important;
  }

  .ms-md-n13 {
    -webkit-margin-start: -52px !important;
            margin-inline-start: -52px !important;
  }

  .ms-md-n14 {
    -webkit-margin-start: -56px !important;
            margin-inline-start: -56px !important;
  }

  .ms-md-n15 {
    -webkit-margin-start: -60px !important;
            margin-inline-start: -60px !important;
  }

  .ms-md-n16 {
    -webkit-margin-start: -64px !important;
            margin-inline-start: -64px !important;
  }

  .me-md-n1 {
    -webkit-margin-end: -4px !important;
            margin-inline-end: -4px !important;
  }

  .me-md-n2 {
    -webkit-margin-end: -8px !important;
            margin-inline-end: -8px !important;
  }

  .me-md-n3 {
    -webkit-margin-end: -12px !important;
            margin-inline-end: -12px !important;
  }

  .me-md-n4 {
    -webkit-margin-end: -16px !important;
            margin-inline-end: -16px !important;
  }

  .me-md-n5 {
    -webkit-margin-end: -20px !important;
            margin-inline-end: -20px !important;
  }

  .me-md-n6 {
    -webkit-margin-end: -24px !important;
            margin-inline-end: -24px !important;
  }

  .me-md-n7 {
    -webkit-margin-end: -28px !important;
            margin-inline-end: -28px !important;
  }

  .me-md-n8 {
    -webkit-margin-end: -32px !important;
            margin-inline-end: -32px !important;
  }

  .me-md-n9 {
    -webkit-margin-end: -36px !important;
            margin-inline-end: -36px !important;
  }

  .me-md-n10 {
    -webkit-margin-end: -40px !important;
            margin-inline-end: -40px !important;
  }

  .me-md-n11 {
    -webkit-margin-end: -44px !important;
            margin-inline-end: -44px !important;
  }

  .me-md-n12 {
    -webkit-margin-end: -48px !important;
            margin-inline-end: -48px !important;
  }

  .me-md-n13 {
    -webkit-margin-end: -52px !important;
            margin-inline-end: -52px !important;
  }

  .me-md-n14 {
    -webkit-margin-end: -56px !important;
            margin-inline-end: -56px !important;
  }

  .me-md-n15 {
    -webkit-margin-end: -60px !important;
            margin-inline-end: -60px !important;
  }

  .me-md-n16 {
    -webkit-margin-end: -64px !important;
            margin-inline-end: -64px !important;
  }

  .pa-md-0 {
    padding: 0px !important;
  }

  .pa-md-1 {
    padding: 4px !important;
  }

  .pa-md-2 {
    padding: 8px !important;
  }

  .pa-md-3 {
    padding: 12px !important;
  }

  .pa-md-4 {
    padding: 16px !important;
  }

  .pa-md-5 {
    padding: 20px !important;
  }

  .pa-md-6 {
    padding: 24px !important;
  }

  .pa-md-7 {
    padding: 28px !important;
  }

  .pa-md-8 {
    padding: 32px !important;
  }

  .pa-md-9 {
    padding: 36px !important;
  }

  .pa-md-10 {
    padding: 40px !important;
  }

  .pa-md-11 {
    padding: 44px !important;
  }

  .pa-md-12 {
    padding: 48px !important;
  }

  .pa-md-13 {
    padding: 52px !important;
  }

  .pa-md-14 {
    padding: 56px !important;
  }

  .pa-md-15 {
    padding: 60px !important;
  }

  .pa-md-16 {
    padding: 64px !important;
  }

  .px-md-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .px-md-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }

  .px-md-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .px-md-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  .px-md-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .px-md-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .px-md-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .px-md-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }

  .px-md-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }

  .px-md-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }

  .px-md-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .px-md-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }

  .px-md-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }

  .px-md-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }

  .px-md-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }

  .px-md-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }

  .px-md-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }

  .py-md-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .py-md-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .py-md-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .py-md-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .py-md-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .py-md-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .py-md-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .py-md-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .py-md-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .py-md-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .py-md-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .py-md-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .py-md-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .py-md-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }

  .py-md-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }

  .py-md-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .py-md-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .pt-md-0 {
    padding-top: 0px !important;
  }

  .pt-md-1 {
    padding-top: 4px !important;
  }

  .pt-md-2 {
    padding-top: 8px !important;
  }

  .pt-md-3 {
    padding-top: 12px !important;
  }

  .pt-md-4 {
    padding-top: 16px !important;
  }

  .pt-md-5 {
    padding-top: 20px !important;
  }

  .pt-md-6 {
    padding-top: 24px !important;
  }

  .pt-md-7 {
    padding-top: 28px !important;
  }

  .pt-md-8 {
    padding-top: 32px !important;
  }

  .pt-md-9 {
    padding-top: 36px !important;
  }

  .pt-md-10 {
    padding-top: 40px !important;
  }

  .pt-md-11 {
    padding-top: 44px !important;
  }

  .pt-md-12 {
    padding-top: 48px !important;
  }

  .pt-md-13 {
    padding-top: 52px !important;
  }

  .pt-md-14 {
    padding-top: 56px !important;
  }

  .pt-md-15 {
    padding-top: 60px !important;
  }

  .pt-md-16 {
    padding-top: 64px !important;
  }

  .pr-md-0 {
    padding-right: 0px !important;
  }

  .pr-md-1 {
    padding-right: 4px !important;
  }

  .pr-md-2 {
    padding-right: 8px !important;
  }

  .pr-md-3 {
    padding-right: 12px !important;
  }

  .pr-md-4 {
    padding-right: 16px !important;
  }

  .pr-md-5 {
    padding-right: 20px !important;
  }

  .pr-md-6 {
    padding-right: 24px !important;
  }

  .pr-md-7 {
    padding-right: 28px !important;
  }

  .pr-md-8 {
    padding-right: 32px !important;
  }

  .pr-md-9 {
    padding-right: 36px !important;
  }

  .pr-md-10 {
    padding-right: 40px !important;
  }

  .pr-md-11 {
    padding-right: 44px !important;
  }

  .pr-md-12 {
    padding-right: 48px !important;
  }

  .pr-md-13 {
    padding-right: 52px !important;
  }

  .pr-md-14 {
    padding-right: 56px !important;
  }

  .pr-md-15 {
    padding-right: 60px !important;
  }

  .pr-md-16 {
    padding-right: 64px !important;
  }

  .pb-md-0 {
    padding-bottom: 0px !important;
  }

  .pb-md-1 {
    padding-bottom: 4px !important;
  }

  .pb-md-2 {
    padding-bottom: 8px !important;
  }

  .pb-md-3 {
    padding-bottom: 12px !important;
  }

  .pb-md-4 {
    padding-bottom: 16px !important;
  }

  .pb-md-5 {
    padding-bottom: 20px !important;
  }

  .pb-md-6 {
    padding-bottom: 24px !important;
  }

  .pb-md-7 {
    padding-bottom: 28px !important;
  }

  .pb-md-8 {
    padding-bottom: 32px !important;
  }

  .pb-md-9 {
    padding-bottom: 36px !important;
  }

  .pb-md-10 {
    padding-bottom: 40px !important;
  }

  .pb-md-11 {
    padding-bottom: 44px !important;
  }

  .pb-md-12 {
    padding-bottom: 48px !important;
  }

  .pb-md-13 {
    padding-bottom: 52px !important;
  }

  .pb-md-14 {
    padding-bottom: 56px !important;
  }

  .pb-md-15 {
    padding-bottom: 60px !important;
  }

  .pb-md-16 {
    padding-bottom: 64px !important;
  }

  .pl-md-0 {
    padding-left: 0px !important;
  }

  .pl-md-1 {
    padding-left: 4px !important;
  }

  .pl-md-2 {
    padding-left: 8px !important;
  }

  .pl-md-3 {
    padding-left: 12px !important;
  }

  .pl-md-4 {
    padding-left: 16px !important;
  }

  .pl-md-5 {
    padding-left: 20px !important;
  }

  .pl-md-6 {
    padding-left: 24px !important;
  }

  .pl-md-7 {
    padding-left: 28px !important;
  }

  .pl-md-8 {
    padding-left: 32px !important;
  }

  .pl-md-9 {
    padding-left: 36px !important;
  }

  .pl-md-10 {
    padding-left: 40px !important;
  }

  .pl-md-11 {
    padding-left: 44px !important;
  }

  .pl-md-12 {
    padding-left: 48px !important;
  }

  .pl-md-13 {
    padding-left: 52px !important;
  }

  .pl-md-14 {
    padding-left: 56px !important;
  }

  .pl-md-15 {
    padding-left: 60px !important;
  }

  .pl-md-16 {
    padding-left: 64px !important;
  }

  .ps-md-0 {
    -webkit-padding-start: 0px !important;
            padding-inline-start: 0px !important;
  }

  .ps-md-1 {
    -webkit-padding-start: 4px !important;
            padding-inline-start: 4px !important;
  }

  .ps-md-2 {
    -webkit-padding-start: 8px !important;
            padding-inline-start: 8px !important;
  }

  .ps-md-3 {
    -webkit-padding-start: 12px !important;
            padding-inline-start: 12px !important;
  }

  .ps-md-4 {
    -webkit-padding-start: 16px !important;
            padding-inline-start: 16px !important;
  }

  .ps-md-5 {
    -webkit-padding-start: 20px !important;
            padding-inline-start: 20px !important;
  }

  .ps-md-6 {
    -webkit-padding-start: 24px !important;
            padding-inline-start: 24px !important;
  }

  .ps-md-7 {
    -webkit-padding-start: 28px !important;
            padding-inline-start: 28px !important;
  }

  .ps-md-8 {
    -webkit-padding-start: 32px !important;
            padding-inline-start: 32px !important;
  }

  .ps-md-9 {
    -webkit-padding-start: 36px !important;
            padding-inline-start: 36px !important;
  }

  .ps-md-10 {
    -webkit-padding-start: 40px !important;
            padding-inline-start: 40px !important;
  }

  .ps-md-11 {
    -webkit-padding-start: 44px !important;
            padding-inline-start: 44px !important;
  }

  .ps-md-12 {
    -webkit-padding-start: 48px !important;
            padding-inline-start: 48px !important;
  }

  .ps-md-13 {
    -webkit-padding-start: 52px !important;
            padding-inline-start: 52px !important;
  }

  .ps-md-14 {
    -webkit-padding-start: 56px !important;
            padding-inline-start: 56px !important;
  }

  .ps-md-15 {
    -webkit-padding-start: 60px !important;
            padding-inline-start: 60px !important;
  }

  .ps-md-16 {
    -webkit-padding-start: 64px !important;
            padding-inline-start: 64px !important;
  }

  .pe-md-0 {
    -webkit-padding-end: 0px !important;
            padding-inline-end: 0px !important;
  }

  .pe-md-1 {
    -webkit-padding-end: 4px !important;
            padding-inline-end: 4px !important;
  }

  .pe-md-2 {
    -webkit-padding-end: 8px !important;
            padding-inline-end: 8px !important;
  }

  .pe-md-3 {
    -webkit-padding-end: 12px !important;
            padding-inline-end: 12px !important;
  }

  .pe-md-4 {
    -webkit-padding-end: 16px !important;
            padding-inline-end: 16px !important;
  }

  .pe-md-5 {
    -webkit-padding-end: 20px !important;
            padding-inline-end: 20px !important;
  }

  .pe-md-6 {
    -webkit-padding-end: 24px !important;
            padding-inline-end: 24px !important;
  }

  .pe-md-7 {
    -webkit-padding-end: 28px !important;
            padding-inline-end: 28px !important;
  }

  .pe-md-8 {
    -webkit-padding-end: 32px !important;
            padding-inline-end: 32px !important;
  }

  .pe-md-9 {
    -webkit-padding-end: 36px !important;
            padding-inline-end: 36px !important;
  }

  .pe-md-10 {
    -webkit-padding-end: 40px !important;
            padding-inline-end: 40px !important;
  }

  .pe-md-11 {
    -webkit-padding-end: 44px !important;
            padding-inline-end: 44px !important;
  }

  .pe-md-12 {
    -webkit-padding-end: 48px !important;
            padding-inline-end: 48px !important;
  }

  .pe-md-13 {
    -webkit-padding-end: 52px !important;
            padding-inline-end: 52px !important;
  }

  .pe-md-14 {
    -webkit-padding-end: 56px !important;
            padding-inline-end: 56px !important;
  }

  .pe-md-15 {
    -webkit-padding-end: 60px !important;
            padding-inline-end: 60px !important;
  }

  .pe-md-16 {
    -webkit-padding-end: 64px !important;
            padding-inline-end: 64px !important;
  }

  .text-md-left {
    text-align: left !important;
  }

  .text-md-right {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }

  .text-md-justify {
    text-align: justify !important;
  }

  .text-md-start {
    text-align: start !important;
  }

  .text-md-end {
    text-align: end !important;
  }

  .text-md-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }

  .text-md-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-md-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 1280px) {
  .d-lg-none {
    display: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .float-lg-left {
    float: left !important;
  }

  .float-lg-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-lg-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-lg-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-lg-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-lg-start {
    float: left !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-lg-start {
    justify-content: flex-start !important;
  }

  .justify-lg-end {
    justify-content: flex-end !important;
  }

  .justify-lg-center {
    justify-content: center !important;
  }

  .justify-lg-space-between {
    justify-content: space-between !important;
  }

  .justify-lg-space-around {
    justify-content: space-around !important;
  }

  .align-lg-start {
    align-items: flex-start !important;
  }

  .align-lg-end {
    align-items: flex-end !important;
  }

  .align-lg-center {
    align-items: center !important;
  }

  .align-lg-baseline {
    align-items: baseline !important;
  }

  .align-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-space-between {
    align-content: space-between !important;
  }

  .align-content-lg-space-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-6 {
    order: 6 !important;
  }

  .order-lg-7 {
    order: 7 !important;
  }

  .order-lg-8 {
    order: 8 !important;
  }

  .order-lg-9 {
    order: 9 !important;
  }

  .order-lg-10 {
    order: 10 !important;
  }

  .order-lg-11 {
    order: 11 !important;
  }

  .order-lg-12 {
    order: 12 !important;
  }

  .order-lg-last {
    order: 13 !important;
  }

  .ma-lg-0 {
    margin: 0px !important;
  }

  .ma-lg-1 {
    margin: 4px !important;
  }

  .ma-lg-2 {
    margin: 8px !important;
  }

  .ma-lg-3 {
    margin: 12px !important;
  }

  .ma-lg-4 {
    margin: 16px !important;
  }

  .ma-lg-5 {
    margin: 20px !important;
  }

  .ma-lg-6 {
    margin: 24px !important;
  }

  .ma-lg-7 {
    margin: 28px !important;
  }

  .ma-lg-8 {
    margin: 32px !important;
  }

  .ma-lg-9 {
    margin: 36px !important;
  }

  .ma-lg-10 {
    margin: 40px !important;
  }

  .ma-lg-11 {
    margin: 44px !important;
  }

  .ma-lg-12 {
    margin: 48px !important;
  }

  .ma-lg-13 {
    margin: 52px !important;
  }

  .ma-lg-14 {
    margin: 56px !important;
  }

  .ma-lg-15 {
    margin: 60px !important;
  }

  .ma-lg-16 {
    margin: 64px !important;
  }

  .ma-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .mx-lg-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }

  .mx-lg-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }

  .mx-lg-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }

  .mx-lg-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }

  .mx-lg-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }

  .mx-lg-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }

  .mx-lg-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }

  .mx-lg-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }

  .mx-lg-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }

  .mx-lg-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }

  .mx-lg-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }

  .mx-lg-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }

  .mx-lg-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }

  .mx-lg-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }

  .mx-lg-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }

  .mx-lg-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .my-lg-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .my-lg-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .my-lg-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .my-lg-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-lg-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .my-lg-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .my-lg-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .my-lg-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .my-lg-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .my-lg-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .my-lg-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .my-lg-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .my-lg-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }

  .my-lg-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }

  .my-lg-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .my-lg-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0px !important;
  }

  .mt-lg-1 {
    margin-top: 4px !important;
  }

  .mt-lg-2 {
    margin-top: 8px !important;
  }

  .mt-lg-3 {
    margin-top: 12px !important;
  }

  .mt-lg-4 {
    margin-top: 16px !important;
  }

  .mt-lg-5 {
    margin-top: 20px !important;
  }

  .mt-lg-6 {
    margin-top: 24px !important;
  }

  .mt-lg-7 {
    margin-top: 28px !important;
  }

  .mt-lg-8 {
    margin-top: 32px !important;
  }

  .mt-lg-9 {
    margin-top: 36px !important;
  }

  .mt-lg-10 {
    margin-top: 40px !important;
  }

  .mt-lg-11 {
    margin-top: 44px !important;
  }

  .mt-lg-12 {
    margin-top: 48px !important;
  }

  .mt-lg-13 {
    margin-top: 52px !important;
  }

  .mt-lg-14 {
    margin-top: 56px !important;
  }

  .mt-lg-15 {
    margin-top: 60px !important;
  }

  .mt-lg-16 {
    margin-top: 64px !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .mr-lg-0 {
    margin-right: 0px !important;
  }

  .mr-lg-1 {
    margin-right: 4px !important;
  }

  .mr-lg-2 {
    margin-right: 8px !important;
  }

  .mr-lg-3 {
    margin-right: 12px !important;
  }

  .mr-lg-4 {
    margin-right: 16px !important;
  }

  .mr-lg-5 {
    margin-right: 20px !important;
  }

  .mr-lg-6 {
    margin-right: 24px !important;
  }

  .mr-lg-7 {
    margin-right: 28px !important;
  }

  .mr-lg-8 {
    margin-right: 32px !important;
  }

  .mr-lg-9 {
    margin-right: 36px !important;
  }

  .mr-lg-10 {
    margin-right: 40px !important;
  }

  .mr-lg-11 {
    margin-right: 44px !important;
  }

  .mr-lg-12 {
    margin-right: 48px !important;
  }

  .mr-lg-13 {
    margin-right: 52px !important;
  }

  .mr-lg-14 {
    margin-right: 56px !important;
  }

  .mr-lg-15 {
    margin-right: 60px !important;
  }

  .mr-lg-16 {
    margin-right: 64px !important;
  }

  .mr-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0px !important;
  }

  .mb-lg-1 {
    margin-bottom: 4px !important;
  }

  .mb-lg-2 {
    margin-bottom: 8px !important;
  }

  .mb-lg-3 {
    margin-bottom: 12px !important;
  }

  .mb-lg-4 {
    margin-bottom: 16px !important;
  }

  .mb-lg-5 {
    margin-bottom: 20px !important;
  }

  .mb-lg-6 {
    margin-bottom: 24px !important;
  }

  .mb-lg-7 {
    margin-bottom: 28px !important;
  }

  .mb-lg-8 {
    margin-bottom: 32px !important;
  }

  .mb-lg-9 {
    margin-bottom: 36px !important;
  }

  .mb-lg-10 {
    margin-bottom: 40px !important;
  }

  .mb-lg-11 {
    margin-bottom: 44px !important;
  }

  .mb-lg-12 {
    margin-bottom: 48px !important;
  }

  .mb-lg-13 {
    margin-bottom: 52px !important;
  }

  .mb-lg-14 {
    margin-bottom: 56px !important;
  }

  .mb-lg-15 {
    margin-bottom: 60px !important;
  }

  .mb-lg-16 {
    margin-bottom: 64px !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ml-lg-0 {
    margin-left: 0px !important;
  }

  .ml-lg-1 {
    margin-left: 4px !important;
  }

  .ml-lg-2 {
    margin-left: 8px !important;
  }

  .ml-lg-3 {
    margin-left: 12px !important;
  }

  .ml-lg-4 {
    margin-left: 16px !important;
  }

  .ml-lg-5 {
    margin-left: 20px !important;
  }

  .ml-lg-6 {
    margin-left: 24px !important;
  }

  .ml-lg-7 {
    margin-left: 28px !important;
  }

  .ml-lg-8 {
    margin-left: 32px !important;
  }

  .ml-lg-9 {
    margin-left: 36px !important;
  }

  .ml-lg-10 {
    margin-left: 40px !important;
  }

  .ml-lg-11 {
    margin-left: 44px !important;
  }

  .ml-lg-12 {
    margin-left: 48px !important;
  }

  .ml-lg-13 {
    margin-left: 52px !important;
  }

  .ml-lg-14 {
    margin-left: 56px !important;
  }

  .ml-lg-15 {
    margin-left: 60px !important;
  }

  .ml-lg-16 {
    margin-left: 64px !important;
  }

  .ml-lg-auto {
    margin-left: auto !important;
  }

  .ms-lg-0 {
    -webkit-margin-start: 0px !important;
            margin-inline-start: 0px !important;
  }

  .ms-lg-1 {
    -webkit-margin-start: 4px !important;
            margin-inline-start: 4px !important;
  }

  .ms-lg-2 {
    -webkit-margin-start: 8px !important;
            margin-inline-start: 8px !important;
  }

  .ms-lg-3 {
    -webkit-margin-start: 12px !important;
            margin-inline-start: 12px !important;
  }

  .ms-lg-4 {
    -webkit-margin-start: 16px !important;
            margin-inline-start: 16px !important;
  }

  .ms-lg-5 {
    -webkit-margin-start: 20px !important;
            margin-inline-start: 20px !important;
  }

  .ms-lg-6 {
    -webkit-margin-start: 24px !important;
            margin-inline-start: 24px !important;
  }

  .ms-lg-7 {
    -webkit-margin-start: 28px !important;
            margin-inline-start: 28px !important;
  }

  .ms-lg-8 {
    -webkit-margin-start: 32px !important;
            margin-inline-start: 32px !important;
  }

  .ms-lg-9 {
    -webkit-margin-start: 36px !important;
            margin-inline-start: 36px !important;
  }

  .ms-lg-10 {
    -webkit-margin-start: 40px !important;
            margin-inline-start: 40px !important;
  }

  .ms-lg-11 {
    -webkit-margin-start: 44px !important;
            margin-inline-start: 44px !important;
  }

  .ms-lg-12 {
    -webkit-margin-start: 48px !important;
            margin-inline-start: 48px !important;
  }

  .ms-lg-13 {
    -webkit-margin-start: 52px !important;
            margin-inline-start: 52px !important;
  }

  .ms-lg-14 {
    -webkit-margin-start: 56px !important;
            margin-inline-start: 56px !important;
  }

  .ms-lg-15 {
    -webkit-margin-start: 60px !important;
            margin-inline-start: 60px !important;
  }

  .ms-lg-16 {
    -webkit-margin-start: 64px !important;
            margin-inline-start: 64px !important;
  }

  .ms-lg-auto {
    -webkit-margin-start: auto !important;
            margin-inline-start: auto !important;
  }

  .me-lg-0 {
    -webkit-margin-end: 0px !important;
            margin-inline-end: 0px !important;
  }

  .me-lg-1 {
    -webkit-margin-end: 4px !important;
            margin-inline-end: 4px !important;
  }

  .me-lg-2 {
    -webkit-margin-end: 8px !important;
            margin-inline-end: 8px !important;
  }

  .me-lg-3 {
    -webkit-margin-end: 12px !important;
            margin-inline-end: 12px !important;
  }

  .me-lg-4 {
    -webkit-margin-end: 16px !important;
            margin-inline-end: 16px !important;
  }

  .me-lg-5 {
    -webkit-margin-end: 20px !important;
            margin-inline-end: 20px !important;
  }

  .me-lg-6 {
    -webkit-margin-end: 24px !important;
            margin-inline-end: 24px !important;
  }

  .me-lg-7 {
    -webkit-margin-end: 28px !important;
            margin-inline-end: 28px !important;
  }

  .me-lg-8 {
    -webkit-margin-end: 32px !important;
            margin-inline-end: 32px !important;
  }

  .me-lg-9 {
    -webkit-margin-end: 36px !important;
            margin-inline-end: 36px !important;
  }

  .me-lg-10 {
    -webkit-margin-end: 40px !important;
            margin-inline-end: 40px !important;
  }

  .me-lg-11 {
    -webkit-margin-end: 44px !important;
            margin-inline-end: 44px !important;
  }

  .me-lg-12 {
    -webkit-margin-end: 48px !important;
            margin-inline-end: 48px !important;
  }

  .me-lg-13 {
    -webkit-margin-end: 52px !important;
            margin-inline-end: 52px !important;
  }

  .me-lg-14 {
    -webkit-margin-end: 56px !important;
            margin-inline-end: 56px !important;
  }

  .me-lg-15 {
    -webkit-margin-end: 60px !important;
            margin-inline-end: 60px !important;
  }

  .me-lg-16 {
    -webkit-margin-end: 64px !important;
            margin-inline-end: 64px !important;
  }

  .me-lg-auto {
    -webkit-margin-end: auto !important;
            margin-inline-end: auto !important;
  }

  .ma-lg-n1 {
    margin: -4px !important;
  }

  .ma-lg-n2 {
    margin: -8px !important;
  }

  .ma-lg-n3 {
    margin: -12px !important;
  }

  .ma-lg-n4 {
    margin: -16px !important;
  }

  .ma-lg-n5 {
    margin: -20px !important;
  }

  .ma-lg-n6 {
    margin: -24px !important;
  }

  .ma-lg-n7 {
    margin: -28px !important;
  }

  .ma-lg-n8 {
    margin: -32px !important;
  }

  .ma-lg-n9 {
    margin: -36px !important;
  }

  .ma-lg-n10 {
    margin: -40px !important;
  }

  .ma-lg-n11 {
    margin: -44px !important;
  }

  .ma-lg-n12 {
    margin: -48px !important;
  }

  .ma-lg-n13 {
    margin: -52px !important;
  }

  .ma-lg-n14 {
    margin: -56px !important;
  }

  .ma-lg-n15 {
    margin: -60px !important;
  }

  .ma-lg-n16 {
    margin: -64px !important;
  }

  .mx-lg-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }

  .mx-lg-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }

  .mx-lg-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }

  .mx-lg-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }

  .mx-lg-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }

  .mx-lg-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }

  .mx-lg-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }

  .mx-lg-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }

  .mx-lg-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }

  .mx-lg-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }

  .mx-lg-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }

  .mx-lg-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }

  .mx-lg-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }

  .mx-lg-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }

  .mx-lg-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }

  .mx-lg-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }

  .my-lg-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }

  .my-lg-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }

  .my-lg-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }

  .my-lg-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }

  .my-lg-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }

  .my-lg-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }

  .my-lg-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }

  .my-lg-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }

  .my-lg-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }

  .my-lg-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }

  .my-lg-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }

  .my-lg-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }

  .my-lg-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }

  .my-lg-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }

  .my-lg-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }

  .my-lg-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }

  .mt-lg-n1 {
    margin-top: -4px !important;
  }

  .mt-lg-n2 {
    margin-top: -8px !important;
  }

  .mt-lg-n3 {
    margin-top: -12px !important;
  }

  .mt-lg-n4 {
    margin-top: -16px !important;
  }

  .mt-lg-n5 {
    margin-top: -20px !important;
  }

  .mt-lg-n6 {
    margin-top: -24px !important;
  }

  .mt-lg-n7 {
    margin-top: -28px !important;
  }

  .mt-lg-n8 {
    margin-top: -32px !important;
  }

  .mt-lg-n9 {
    margin-top: -36px !important;
  }

  .mt-lg-n10 {
    margin-top: -40px !important;
  }

  .mt-lg-n11 {
    margin-top: -44px !important;
  }

  .mt-lg-n12 {
    margin-top: -48px !important;
  }

  .mt-lg-n13 {
    margin-top: -52px !important;
  }

  .mt-lg-n14 {
    margin-top: -56px !important;
  }

  .mt-lg-n15 {
    margin-top: -60px !important;
  }

  .mt-lg-n16 {
    margin-top: -64px !important;
  }

  .mr-lg-n1 {
    margin-right: -4px !important;
  }

  .mr-lg-n2 {
    margin-right: -8px !important;
  }

  .mr-lg-n3 {
    margin-right: -12px !important;
  }

  .mr-lg-n4 {
    margin-right: -16px !important;
  }

  .mr-lg-n5 {
    margin-right: -20px !important;
  }

  .mr-lg-n6 {
    margin-right: -24px !important;
  }

  .mr-lg-n7 {
    margin-right: -28px !important;
  }

  .mr-lg-n8 {
    margin-right: -32px !important;
  }

  .mr-lg-n9 {
    margin-right: -36px !important;
  }

  .mr-lg-n10 {
    margin-right: -40px !important;
  }

  .mr-lg-n11 {
    margin-right: -44px !important;
  }

  .mr-lg-n12 {
    margin-right: -48px !important;
  }

  .mr-lg-n13 {
    margin-right: -52px !important;
  }

  .mr-lg-n14 {
    margin-right: -56px !important;
  }

  .mr-lg-n15 {
    margin-right: -60px !important;
  }

  .mr-lg-n16 {
    margin-right: -64px !important;
  }

  .mb-lg-n1 {
    margin-bottom: -4px !important;
  }

  .mb-lg-n2 {
    margin-bottom: -8px !important;
  }

  .mb-lg-n3 {
    margin-bottom: -12px !important;
  }

  .mb-lg-n4 {
    margin-bottom: -16px !important;
  }

  .mb-lg-n5 {
    margin-bottom: -20px !important;
  }

  .mb-lg-n6 {
    margin-bottom: -24px !important;
  }

  .mb-lg-n7 {
    margin-bottom: -28px !important;
  }

  .mb-lg-n8 {
    margin-bottom: -32px !important;
  }

  .mb-lg-n9 {
    margin-bottom: -36px !important;
  }

  .mb-lg-n10 {
    margin-bottom: -40px !important;
  }

  .mb-lg-n11 {
    margin-bottom: -44px !important;
  }

  .mb-lg-n12 {
    margin-bottom: -48px !important;
  }

  .mb-lg-n13 {
    margin-bottom: -52px !important;
  }

  .mb-lg-n14 {
    margin-bottom: -56px !important;
  }

  .mb-lg-n15 {
    margin-bottom: -60px !important;
  }

  .mb-lg-n16 {
    margin-bottom: -64px !important;
  }

  .ml-lg-n1 {
    margin-left: -4px !important;
  }

  .ml-lg-n2 {
    margin-left: -8px !important;
  }

  .ml-lg-n3 {
    margin-left: -12px !important;
  }

  .ml-lg-n4 {
    margin-left: -16px !important;
  }

  .ml-lg-n5 {
    margin-left: -20px !important;
  }

  .ml-lg-n6 {
    margin-left: -24px !important;
  }

  .ml-lg-n7 {
    margin-left: -28px !important;
  }

  .ml-lg-n8 {
    margin-left: -32px !important;
  }

  .ml-lg-n9 {
    margin-left: -36px !important;
  }

  .ml-lg-n10 {
    margin-left: -40px !important;
  }

  .ml-lg-n11 {
    margin-left: -44px !important;
  }

  .ml-lg-n12 {
    margin-left: -48px !important;
  }

  .ml-lg-n13 {
    margin-left: -52px !important;
  }

  .ml-lg-n14 {
    margin-left: -56px !important;
  }

  .ml-lg-n15 {
    margin-left: -60px !important;
  }

  .ml-lg-n16 {
    margin-left: -64px !important;
  }

  .ms-lg-n1 {
    -webkit-margin-start: -4px !important;
            margin-inline-start: -4px !important;
  }

  .ms-lg-n2 {
    -webkit-margin-start: -8px !important;
            margin-inline-start: -8px !important;
  }

  .ms-lg-n3 {
    -webkit-margin-start: -12px !important;
            margin-inline-start: -12px !important;
  }

  .ms-lg-n4 {
    -webkit-margin-start: -16px !important;
            margin-inline-start: -16px !important;
  }

  .ms-lg-n5 {
    -webkit-margin-start: -20px !important;
            margin-inline-start: -20px !important;
  }

  .ms-lg-n6 {
    -webkit-margin-start: -24px !important;
            margin-inline-start: -24px !important;
  }

  .ms-lg-n7 {
    -webkit-margin-start: -28px !important;
            margin-inline-start: -28px !important;
  }

  .ms-lg-n8 {
    -webkit-margin-start: -32px !important;
            margin-inline-start: -32px !important;
  }

  .ms-lg-n9 {
    -webkit-margin-start: -36px !important;
            margin-inline-start: -36px !important;
  }

  .ms-lg-n10 {
    -webkit-margin-start: -40px !important;
            margin-inline-start: -40px !important;
  }

  .ms-lg-n11 {
    -webkit-margin-start: -44px !important;
            margin-inline-start: -44px !important;
  }

  .ms-lg-n12 {
    -webkit-margin-start: -48px !important;
            margin-inline-start: -48px !important;
  }

  .ms-lg-n13 {
    -webkit-margin-start: -52px !important;
            margin-inline-start: -52px !important;
  }

  .ms-lg-n14 {
    -webkit-margin-start: -56px !important;
            margin-inline-start: -56px !important;
  }

  .ms-lg-n15 {
    -webkit-margin-start: -60px !important;
            margin-inline-start: -60px !important;
  }

  .ms-lg-n16 {
    -webkit-margin-start: -64px !important;
            margin-inline-start: -64px !important;
  }

  .me-lg-n1 {
    -webkit-margin-end: -4px !important;
            margin-inline-end: -4px !important;
  }

  .me-lg-n2 {
    -webkit-margin-end: -8px !important;
            margin-inline-end: -8px !important;
  }

  .me-lg-n3 {
    -webkit-margin-end: -12px !important;
            margin-inline-end: -12px !important;
  }

  .me-lg-n4 {
    -webkit-margin-end: -16px !important;
            margin-inline-end: -16px !important;
  }

  .me-lg-n5 {
    -webkit-margin-end: -20px !important;
            margin-inline-end: -20px !important;
  }

  .me-lg-n6 {
    -webkit-margin-end: -24px !important;
            margin-inline-end: -24px !important;
  }

  .me-lg-n7 {
    -webkit-margin-end: -28px !important;
            margin-inline-end: -28px !important;
  }

  .me-lg-n8 {
    -webkit-margin-end: -32px !important;
            margin-inline-end: -32px !important;
  }

  .me-lg-n9 {
    -webkit-margin-end: -36px !important;
            margin-inline-end: -36px !important;
  }

  .me-lg-n10 {
    -webkit-margin-end: -40px !important;
            margin-inline-end: -40px !important;
  }

  .me-lg-n11 {
    -webkit-margin-end: -44px !important;
            margin-inline-end: -44px !important;
  }

  .me-lg-n12 {
    -webkit-margin-end: -48px !important;
            margin-inline-end: -48px !important;
  }

  .me-lg-n13 {
    -webkit-margin-end: -52px !important;
            margin-inline-end: -52px !important;
  }

  .me-lg-n14 {
    -webkit-margin-end: -56px !important;
            margin-inline-end: -56px !important;
  }

  .me-lg-n15 {
    -webkit-margin-end: -60px !important;
            margin-inline-end: -60px !important;
  }

  .me-lg-n16 {
    -webkit-margin-end: -64px !important;
            margin-inline-end: -64px !important;
  }

  .pa-lg-0 {
    padding: 0px !important;
  }

  .pa-lg-1 {
    padding: 4px !important;
  }

  .pa-lg-2 {
    padding: 8px !important;
  }

  .pa-lg-3 {
    padding: 12px !important;
  }

  .pa-lg-4 {
    padding: 16px !important;
  }

  .pa-lg-5 {
    padding: 20px !important;
  }

  .pa-lg-6 {
    padding: 24px !important;
  }

  .pa-lg-7 {
    padding: 28px !important;
  }

  .pa-lg-8 {
    padding: 32px !important;
  }

  .pa-lg-9 {
    padding: 36px !important;
  }

  .pa-lg-10 {
    padding: 40px !important;
  }

  .pa-lg-11 {
    padding: 44px !important;
  }

  .pa-lg-12 {
    padding: 48px !important;
  }

  .pa-lg-13 {
    padding: 52px !important;
  }

  .pa-lg-14 {
    padding: 56px !important;
  }

  .pa-lg-15 {
    padding: 60px !important;
  }

  .pa-lg-16 {
    padding: 64px !important;
  }

  .px-lg-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .px-lg-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }

  .px-lg-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .px-lg-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  .px-lg-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .px-lg-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .px-lg-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .px-lg-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }

  .px-lg-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }

  .px-lg-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }

  .px-lg-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .px-lg-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }

  .px-lg-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }

  .px-lg-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }

  .px-lg-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }

  .px-lg-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }

  .px-lg-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }

  .py-lg-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .py-lg-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .py-lg-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .py-lg-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .py-lg-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .py-lg-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .py-lg-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .py-lg-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .py-lg-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .py-lg-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .py-lg-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .py-lg-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .py-lg-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .py-lg-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }

  .py-lg-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }

  .py-lg-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .py-lg-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .pt-lg-0 {
    padding-top: 0px !important;
  }

  .pt-lg-1 {
    padding-top: 4px !important;
  }

  .pt-lg-2 {
    padding-top: 8px !important;
  }

  .pt-lg-3 {
    padding-top: 12px !important;
  }

  .pt-lg-4 {
    padding-top: 16px !important;
  }

  .pt-lg-5 {
    padding-top: 20px !important;
  }

  .pt-lg-6 {
    padding-top: 24px !important;
  }

  .pt-lg-7 {
    padding-top: 28px !important;
  }

  .pt-lg-8 {
    padding-top: 32px !important;
  }

  .pt-lg-9 {
    padding-top: 36px !important;
  }

  .pt-lg-10 {
    padding-top: 40px !important;
  }

  .pt-lg-11 {
    padding-top: 44px !important;
  }

  .pt-lg-12 {
    padding-top: 48px !important;
  }

  .pt-lg-13 {
    padding-top: 52px !important;
  }

  .pt-lg-14 {
    padding-top: 56px !important;
  }

  .pt-lg-15 {
    padding-top: 60px !important;
  }

  .pt-lg-16 {
    padding-top: 64px !important;
  }

  .pr-lg-0 {
    padding-right: 0px !important;
  }

  .pr-lg-1 {
    padding-right: 4px !important;
  }

  .pr-lg-2 {
    padding-right: 8px !important;
  }

  .pr-lg-3 {
    padding-right: 12px !important;
  }

  .pr-lg-4 {
    padding-right: 16px !important;
  }

  .pr-lg-5 {
    padding-right: 20px !important;
  }

  .pr-lg-6 {
    padding-right: 24px !important;
  }

  .pr-lg-7 {
    padding-right: 28px !important;
  }

  .pr-lg-8 {
    padding-right: 32px !important;
  }

  .pr-lg-9 {
    padding-right: 36px !important;
  }

  .pr-lg-10 {
    padding-right: 40px !important;
  }

  .pr-lg-11 {
    padding-right: 44px !important;
  }

  .pr-lg-12 {
    padding-right: 48px !important;
  }

  .pr-lg-13 {
    padding-right: 52px !important;
  }

  .pr-lg-14 {
    padding-right: 56px !important;
  }

  .pr-lg-15 {
    padding-right: 60px !important;
  }

  .pr-lg-16 {
    padding-right: 64px !important;
  }

  .pb-lg-0 {
    padding-bottom: 0px !important;
  }

  .pb-lg-1 {
    padding-bottom: 4px !important;
  }

  .pb-lg-2 {
    padding-bottom: 8px !important;
  }

  .pb-lg-3 {
    padding-bottom: 12px !important;
  }

  .pb-lg-4 {
    padding-bottom: 16px !important;
  }

  .pb-lg-5 {
    padding-bottom: 20px !important;
  }

  .pb-lg-6 {
    padding-bottom: 24px !important;
  }

  .pb-lg-7 {
    padding-bottom: 28px !important;
  }

  .pb-lg-8 {
    padding-bottom: 32px !important;
  }

  .pb-lg-9 {
    padding-bottom: 36px !important;
  }

  .pb-lg-10 {
    padding-bottom: 40px !important;
  }

  .pb-lg-11 {
    padding-bottom: 44px !important;
  }

  .pb-lg-12 {
    padding-bottom: 48px !important;
  }

  .pb-lg-13 {
    padding-bottom: 52px !important;
  }

  .pb-lg-14 {
    padding-bottom: 56px !important;
  }

  .pb-lg-15 {
    padding-bottom: 60px !important;
  }

  .pb-lg-16 {
    padding-bottom: 64px !important;
  }

  .pl-lg-0 {
    padding-left: 0px !important;
  }

  .pl-lg-1 {
    padding-left: 4px !important;
  }

  .pl-lg-2 {
    padding-left: 8px !important;
  }

  .pl-lg-3 {
    padding-left: 12px !important;
  }

  .pl-lg-4 {
    padding-left: 16px !important;
  }

  .pl-lg-5 {
    padding-left: 20px !important;
  }

  .pl-lg-6 {
    padding-left: 24px !important;
  }

  .pl-lg-7 {
    padding-left: 28px !important;
  }

  .pl-lg-8 {
    padding-left: 32px !important;
  }

  .pl-lg-9 {
    padding-left: 36px !important;
  }

  .pl-lg-10 {
    padding-left: 40px !important;
  }

  .pl-lg-11 {
    padding-left: 44px !important;
  }

  .pl-lg-12 {
    padding-left: 48px !important;
  }

  .pl-lg-13 {
    padding-left: 52px !important;
  }

  .pl-lg-14 {
    padding-left: 56px !important;
  }

  .pl-lg-15 {
    padding-left: 60px !important;
  }

  .pl-lg-16 {
    padding-left: 64px !important;
  }

  .ps-lg-0 {
    -webkit-padding-start: 0px !important;
            padding-inline-start: 0px !important;
  }

  .ps-lg-1 {
    -webkit-padding-start: 4px !important;
            padding-inline-start: 4px !important;
  }

  .ps-lg-2 {
    -webkit-padding-start: 8px !important;
            padding-inline-start: 8px !important;
  }

  .ps-lg-3 {
    -webkit-padding-start: 12px !important;
            padding-inline-start: 12px !important;
  }

  .ps-lg-4 {
    -webkit-padding-start: 16px !important;
            padding-inline-start: 16px !important;
  }

  .ps-lg-5 {
    -webkit-padding-start: 20px !important;
            padding-inline-start: 20px !important;
  }

  .ps-lg-6 {
    -webkit-padding-start: 24px !important;
            padding-inline-start: 24px !important;
  }

  .ps-lg-7 {
    -webkit-padding-start: 28px !important;
            padding-inline-start: 28px !important;
  }

  .ps-lg-8 {
    -webkit-padding-start: 32px !important;
            padding-inline-start: 32px !important;
  }

  .ps-lg-9 {
    -webkit-padding-start: 36px !important;
            padding-inline-start: 36px !important;
  }

  .ps-lg-10 {
    -webkit-padding-start: 40px !important;
            padding-inline-start: 40px !important;
  }

  .ps-lg-11 {
    -webkit-padding-start: 44px !important;
            padding-inline-start: 44px !important;
  }

  .ps-lg-12 {
    -webkit-padding-start: 48px !important;
            padding-inline-start: 48px !important;
  }

  .ps-lg-13 {
    -webkit-padding-start: 52px !important;
            padding-inline-start: 52px !important;
  }

  .ps-lg-14 {
    -webkit-padding-start: 56px !important;
            padding-inline-start: 56px !important;
  }

  .ps-lg-15 {
    -webkit-padding-start: 60px !important;
            padding-inline-start: 60px !important;
  }

  .ps-lg-16 {
    -webkit-padding-start: 64px !important;
            padding-inline-start: 64px !important;
  }

  .pe-lg-0 {
    -webkit-padding-end: 0px !important;
            padding-inline-end: 0px !important;
  }

  .pe-lg-1 {
    -webkit-padding-end: 4px !important;
            padding-inline-end: 4px !important;
  }

  .pe-lg-2 {
    -webkit-padding-end: 8px !important;
            padding-inline-end: 8px !important;
  }

  .pe-lg-3 {
    -webkit-padding-end: 12px !important;
            padding-inline-end: 12px !important;
  }

  .pe-lg-4 {
    -webkit-padding-end: 16px !important;
            padding-inline-end: 16px !important;
  }

  .pe-lg-5 {
    -webkit-padding-end: 20px !important;
            padding-inline-end: 20px !important;
  }

  .pe-lg-6 {
    -webkit-padding-end: 24px !important;
            padding-inline-end: 24px !important;
  }

  .pe-lg-7 {
    -webkit-padding-end: 28px !important;
            padding-inline-end: 28px !important;
  }

  .pe-lg-8 {
    -webkit-padding-end: 32px !important;
            padding-inline-end: 32px !important;
  }

  .pe-lg-9 {
    -webkit-padding-end: 36px !important;
            padding-inline-end: 36px !important;
  }

  .pe-lg-10 {
    -webkit-padding-end: 40px !important;
            padding-inline-end: 40px !important;
  }

  .pe-lg-11 {
    -webkit-padding-end: 44px !important;
            padding-inline-end: 44px !important;
  }

  .pe-lg-12 {
    -webkit-padding-end: 48px !important;
            padding-inline-end: 48px !important;
  }

  .pe-lg-13 {
    -webkit-padding-end: 52px !important;
            padding-inline-end: 52px !important;
  }

  .pe-lg-14 {
    -webkit-padding-end: 56px !important;
            padding-inline-end: 56px !important;
  }

  .pe-lg-15 {
    -webkit-padding-end: 60px !important;
            padding-inline-end: 60px !important;
  }

  .pe-lg-16 {
    -webkit-padding-end: 64px !important;
            padding-inline-end: 64px !important;
  }

  .text-lg-left {
    text-align: left !important;
  }

  .text-lg-right {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }

  .text-lg-justify {
    text-align: justify !important;
  }

  .text-lg-start {
    text-align: start !important;
  }

  .text-lg-end {
    text-align: end !important;
  }

  .text-lg-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }

  .text-lg-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-lg-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 1920px) {
  .d-xl-none {
    display: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .float-xl-left {
    float: left !important;
  }

  .float-xl-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-xl-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-xl-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-xl-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-xl-start {
    float: left !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-xl-start {
    justify-content: flex-start !important;
  }

  .justify-xl-end {
    justify-content: flex-end !important;
  }

  .justify-xl-center {
    justify-content: center !important;
  }

  .justify-xl-space-between {
    justify-content: space-between !important;
  }

  .justify-xl-space-around {
    justify-content: space-around !important;
  }

  .align-xl-start {
    align-items: flex-start !important;
  }

  .align-xl-end {
    align-items: flex-end !important;
  }

  .align-xl-center {
    align-items: center !important;
  }

  .align-xl-baseline {
    align-items: baseline !important;
  }

  .align-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-space-between {
    align-content: space-between !important;
  }

  .align-content-xl-space-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-6 {
    order: 6 !important;
  }

  .order-xl-7 {
    order: 7 !important;
  }

  .order-xl-8 {
    order: 8 !important;
  }

  .order-xl-9 {
    order: 9 !important;
  }

  .order-xl-10 {
    order: 10 !important;
  }

  .order-xl-11 {
    order: 11 !important;
  }

  .order-xl-12 {
    order: 12 !important;
  }

  .order-xl-last {
    order: 13 !important;
  }

  .ma-xl-0 {
    margin: 0px !important;
  }

  .ma-xl-1 {
    margin: 4px !important;
  }

  .ma-xl-2 {
    margin: 8px !important;
  }

  .ma-xl-3 {
    margin: 12px !important;
  }

  .ma-xl-4 {
    margin: 16px !important;
  }

  .ma-xl-5 {
    margin: 20px !important;
  }

  .ma-xl-6 {
    margin: 24px !important;
  }

  .ma-xl-7 {
    margin: 28px !important;
  }

  .ma-xl-8 {
    margin: 32px !important;
  }

  .ma-xl-9 {
    margin: 36px !important;
  }

  .ma-xl-10 {
    margin: 40px !important;
  }

  .ma-xl-11 {
    margin: 44px !important;
  }

  .ma-xl-12 {
    margin: 48px !important;
  }

  .ma-xl-13 {
    margin: 52px !important;
  }

  .ma-xl-14 {
    margin: 56px !important;
  }

  .ma-xl-15 {
    margin: 60px !important;
  }

  .ma-xl-16 {
    margin: 64px !important;
  }

  .ma-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .mx-xl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }

  .mx-xl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }

  .mx-xl-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }

  .mx-xl-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }

  .mx-xl-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }

  .mx-xl-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }

  .mx-xl-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }

  .mx-xl-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }

  .mx-xl-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }

  .mx-xl-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }

  .mx-xl-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }

  .mx-xl-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }

  .mx-xl-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }

  .mx-xl-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }

  .mx-xl-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }

  .mx-xl-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .my-xl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .my-xl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .my-xl-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .my-xl-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-xl-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .my-xl-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .my-xl-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .my-xl-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .my-xl-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .my-xl-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .my-xl-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .my-xl-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .my-xl-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }

  .my-xl-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }

  .my-xl-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .my-xl-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0px !important;
  }

  .mt-xl-1 {
    margin-top: 4px !important;
  }

  .mt-xl-2 {
    margin-top: 8px !important;
  }

  .mt-xl-3 {
    margin-top: 12px !important;
  }

  .mt-xl-4 {
    margin-top: 16px !important;
  }

  .mt-xl-5 {
    margin-top: 20px !important;
  }

  .mt-xl-6 {
    margin-top: 24px !important;
  }

  .mt-xl-7 {
    margin-top: 28px !important;
  }

  .mt-xl-8 {
    margin-top: 32px !important;
  }

  .mt-xl-9 {
    margin-top: 36px !important;
  }

  .mt-xl-10 {
    margin-top: 40px !important;
  }

  .mt-xl-11 {
    margin-top: 44px !important;
  }

  .mt-xl-12 {
    margin-top: 48px !important;
  }

  .mt-xl-13 {
    margin-top: 52px !important;
  }

  .mt-xl-14 {
    margin-top: 56px !important;
  }

  .mt-xl-15 {
    margin-top: 60px !important;
  }

  .mt-xl-16 {
    margin-top: 64px !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .mr-xl-0 {
    margin-right: 0px !important;
  }

  .mr-xl-1 {
    margin-right: 4px !important;
  }

  .mr-xl-2 {
    margin-right: 8px !important;
  }

  .mr-xl-3 {
    margin-right: 12px !important;
  }

  .mr-xl-4 {
    margin-right: 16px !important;
  }

  .mr-xl-5 {
    margin-right: 20px !important;
  }

  .mr-xl-6 {
    margin-right: 24px !important;
  }

  .mr-xl-7 {
    margin-right: 28px !important;
  }

  .mr-xl-8 {
    margin-right: 32px !important;
  }

  .mr-xl-9 {
    margin-right: 36px !important;
  }

  .mr-xl-10 {
    margin-right: 40px !important;
  }

  .mr-xl-11 {
    margin-right: 44px !important;
  }

  .mr-xl-12 {
    margin-right: 48px !important;
  }

  .mr-xl-13 {
    margin-right: 52px !important;
  }

  .mr-xl-14 {
    margin-right: 56px !important;
  }

  .mr-xl-15 {
    margin-right: 60px !important;
  }

  .mr-xl-16 {
    margin-right: 64px !important;
  }

  .mr-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0px !important;
  }

  .mb-xl-1 {
    margin-bottom: 4px !important;
  }

  .mb-xl-2 {
    margin-bottom: 8px !important;
  }

  .mb-xl-3 {
    margin-bottom: 12px !important;
  }

  .mb-xl-4 {
    margin-bottom: 16px !important;
  }

  .mb-xl-5 {
    margin-bottom: 20px !important;
  }

  .mb-xl-6 {
    margin-bottom: 24px !important;
  }

  .mb-xl-7 {
    margin-bottom: 28px !important;
  }

  .mb-xl-8 {
    margin-bottom: 32px !important;
  }

  .mb-xl-9 {
    margin-bottom: 36px !important;
  }

  .mb-xl-10 {
    margin-bottom: 40px !important;
  }

  .mb-xl-11 {
    margin-bottom: 44px !important;
  }

  .mb-xl-12 {
    margin-bottom: 48px !important;
  }

  .mb-xl-13 {
    margin-bottom: 52px !important;
  }

  .mb-xl-14 {
    margin-bottom: 56px !important;
  }

  .mb-xl-15 {
    margin-bottom: 60px !important;
  }

  .mb-xl-16 {
    margin-bottom: 64px !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ml-xl-0 {
    margin-left: 0px !important;
  }

  .ml-xl-1 {
    margin-left: 4px !important;
  }

  .ml-xl-2 {
    margin-left: 8px !important;
  }

  .ml-xl-3 {
    margin-left: 12px !important;
  }

  .ml-xl-4 {
    margin-left: 16px !important;
  }

  .ml-xl-5 {
    margin-left: 20px !important;
  }

  .ml-xl-6 {
    margin-left: 24px !important;
  }

  .ml-xl-7 {
    margin-left: 28px !important;
  }

  .ml-xl-8 {
    margin-left: 32px !important;
  }

  .ml-xl-9 {
    margin-left: 36px !important;
  }

  .ml-xl-10 {
    margin-left: 40px !important;
  }

  .ml-xl-11 {
    margin-left: 44px !important;
  }

  .ml-xl-12 {
    margin-left: 48px !important;
  }

  .ml-xl-13 {
    margin-left: 52px !important;
  }

  .ml-xl-14 {
    margin-left: 56px !important;
  }

  .ml-xl-15 {
    margin-left: 60px !important;
  }

  .ml-xl-16 {
    margin-left: 64px !important;
  }

  .ml-xl-auto {
    margin-left: auto !important;
  }

  .ms-xl-0 {
    -webkit-margin-start: 0px !important;
            margin-inline-start: 0px !important;
  }

  .ms-xl-1 {
    -webkit-margin-start: 4px !important;
            margin-inline-start: 4px !important;
  }

  .ms-xl-2 {
    -webkit-margin-start: 8px !important;
            margin-inline-start: 8px !important;
  }

  .ms-xl-3 {
    -webkit-margin-start: 12px !important;
            margin-inline-start: 12px !important;
  }

  .ms-xl-4 {
    -webkit-margin-start: 16px !important;
            margin-inline-start: 16px !important;
  }

  .ms-xl-5 {
    -webkit-margin-start: 20px !important;
            margin-inline-start: 20px !important;
  }

  .ms-xl-6 {
    -webkit-margin-start: 24px !important;
            margin-inline-start: 24px !important;
  }

  .ms-xl-7 {
    -webkit-margin-start: 28px !important;
            margin-inline-start: 28px !important;
  }

  .ms-xl-8 {
    -webkit-margin-start: 32px !important;
            margin-inline-start: 32px !important;
  }

  .ms-xl-9 {
    -webkit-margin-start: 36px !important;
            margin-inline-start: 36px !important;
  }

  .ms-xl-10 {
    -webkit-margin-start: 40px !important;
            margin-inline-start: 40px !important;
  }

  .ms-xl-11 {
    -webkit-margin-start: 44px !important;
            margin-inline-start: 44px !important;
  }

  .ms-xl-12 {
    -webkit-margin-start: 48px !important;
            margin-inline-start: 48px !important;
  }

  .ms-xl-13 {
    -webkit-margin-start: 52px !important;
            margin-inline-start: 52px !important;
  }

  .ms-xl-14 {
    -webkit-margin-start: 56px !important;
            margin-inline-start: 56px !important;
  }

  .ms-xl-15 {
    -webkit-margin-start: 60px !important;
            margin-inline-start: 60px !important;
  }

  .ms-xl-16 {
    -webkit-margin-start: 64px !important;
            margin-inline-start: 64px !important;
  }

  .ms-xl-auto {
    -webkit-margin-start: auto !important;
            margin-inline-start: auto !important;
  }

  .me-xl-0 {
    -webkit-margin-end: 0px !important;
            margin-inline-end: 0px !important;
  }

  .me-xl-1 {
    -webkit-margin-end: 4px !important;
            margin-inline-end: 4px !important;
  }

  .me-xl-2 {
    -webkit-margin-end: 8px !important;
            margin-inline-end: 8px !important;
  }

  .me-xl-3 {
    -webkit-margin-end: 12px !important;
            margin-inline-end: 12px !important;
  }

  .me-xl-4 {
    -webkit-margin-end: 16px !important;
            margin-inline-end: 16px !important;
  }

  .me-xl-5 {
    -webkit-margin-end: 20px !important;
            margin-inline-end: 20px !important;
  }

  .me-xl-6 {
    -webkit-margin-end: 24px !important;
            margin-inline-end: 24px !important;
  }

  .me-xl-7 {
    -webkit-margin-end: 28px !important;
            margin-inline-end: 28px !important;
  }

  .me-xl-8 {
    -webkit-margin-end: 32px !important;
            margin-inline-end: 32px !important;
  }

  .me-xl-9 {
    -webkit-margin-end: 36px !important;
            margin-inline-end: 36px !important;
  }

  .me-xl-10 {
    -webkit-margin-end: 40px !important;
            margin-inline-end: 40px !important;
  }

  .me-xl-11 {
    -webkit-margin-end: 44px !important;
            margin-inline-end: 44px !important;
  }

  .me-xl-12 {
    -webkit-margin-end: 48px !important;
            margin-inline-end: 48px !important;
  }

  .me-xl-13 {
    -webkit-margin-end: 52px !important;
            margin-inline-end: 52px !important;
  }

  .me-xl-14 {
    -webkit-margin-end: 56px !important;
            margin-inline-end: 56px !important;
  }

  .me-xl-15 {
    -webkit-margin-end: 60px !important;
            margin-inline-end: 60px !important;
  }

  .me-xl-16 {
    -webkit-margin-end: 64px !important;
            margin-inline-end: 64px !important;
  }

  .me-xl-auto {
    -webkit-margin-end: auto !important;
            margin-inline-end: auto !important;
  }

  .ma-xl-n1 {
    margin: -4px !important;
  }

  .ma-xl-n2 {
    margin: -8px !important;
  }

  .ma-xl-n3 {
    margin: -12px !important;
  }

  .ma-xl-n4 {
    margin: -16px !important;
  }

  .ma-xl-n5 {
    margin: -20px !important;
  }

  .ma-xl-n6 {
    margin: -24px !important;
  }

  .ma-xl-n7 {
    margin: -28px !important;
  }

  .ma-xl-n8 {
    margin: -32px !important;
  }

  .ma-xl-n9 {
    margin: -36px !important;
  }

  .ma-xl-n10 {
    margin: -40px !important;
  }

  .ma-xl-n11 {
    margin: -44px !important;
  }

  .ma-xl-n12 {
    margin: -48px !important;
  }

  .ma-xl-n13 {
    margin: -52px !important;
  }

  .ma-xl-n14 {
    margin: -56px !important;
  }

  .ma-xl-n15 {
    margin: -60px !important;
  }

  .ma-xl-n16 {
    margin: -64px !important;
  }

  .mx-xl-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }

  .mx-xl-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }

  .mx-xl-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }

  .mx-xl-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }

  .mx-xl-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }

  .mx-xl-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }

  .mx-xl-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }

  .mx-xl-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }

  .mx-xl-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }

  .mx-xl-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }

  .mx-xl-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }

  .mx-xl-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }

  .mx-xl-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }

  .mx-xl-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }

  .mx-xl-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }

  .mx-xl-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }

  .my-xl-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }

  .my-xl-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }

  .my-xl-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }

  .my-xl-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }

  .my-xl-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }

  .my-xl-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }

  .my-xl-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }

  .my-xl-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }

  .my-xl-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }

  .my-xl-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }

  .my-xl-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }

  .my-xl-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }

  .my-xl-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }

  .my-xl-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }

  .my-xl-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }

  .my-xl-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }

  .mt-xl-n1 {
    margin-top: -4px !important;
  }

  .mt-xl-n2 {
    margin-top: -8px !important;
  }

  .mt-xl-n3 {
    margin-top: -12px !important;
  }

  .mt-xl-n4 {
    margin-top: -16px !important;
  }

  .mt-xl-n5 {
    margin-top: -20px !important;
  }

  .mt-xl-n6 {
    margin-top: -24px !important;
  }

  .mt-xl-n7 {
    margin-top: -28px !important;
  }

  .mt-xl-n8 {
    margin-top: -32px !important;
  }

  .mt-xl-n9 {
    margin-top: -36px !important;
  }

  .mt-xl-n10 {
    margin-top: -40px !important;
  }

  .mt-xl-n11 {
    margin-top: -44px !important;
  }

  .mt-xl-n12 {
    margin-top: -48px !important;
  }

  .mt-xl-n13 {
    margin-top: -52px !important;
  }

  .mt-xl-n14 {
    margin-top: -56px !important;
  }

  .mt-xl-n15 {
    margin-top: -60px !important;
  }

  .mt-xl-n16 {
    margin-top: -64px !important;
  }

  .mr-xl-n1 {
    margin-right: -4px !important;
  }

  .mr-xl-n2 {
    margin-right: -8px !important;
  }

  .mr-xl-n3 {
    margin-right: -12px !important;
  }

  .mr-xl-n4 {
    margin-right: -16px !important;
  }

  .mr-xl-n5 {
    margin-right: -20px !important;
  }

  .mr-xl-n6 {
    margin-right: -24px !important;
  }

  .mr-xl-n7 {
    margin-right: -28px !important;
  }

  .mr-xl-n8 {
    margin-right: -32px !important;
  }

  .mr-xl-n9 {
    margin-right: -36px !important;
  }

  .mr-xl-n10 {
    margin-right: -40px !important;
  }

  .mr-xl-n11 {
    margin-right: -44px !important;
  }

  .mr-xl-n12 {
    margin-right: -48px !important;
  }

  .mr-xl-n13 {
    margin-right: -52px !important;
  }

  .mr-xl-n14 {
    margin-right: -56px !important;
  }

  .mr-xl-n15 {
    margin-right: -60px !important;
  }

  .mr-xl-n16 {
    margin-right: -64px !important;
  }

  .mb-xl-n1 {
    margin-bottom: -4px !important;
  }

  .mb-xl-n2 {
    margin-bottom: -8px !important;
  }

  .mb-xl-n3 {
    margin-bottom: -12px !important;
  }

  .mb-xl-n4 {
    margin-bottom: -16px !important;
  }

  .mb-xl-n5 {
    margin-bottom: -20px !important;
  }

  .mb-xl-n6 {
    margin-bottom: -24px !important;
  }

  .mb-xl-n7 {
    margin-bottom: -28px !important;
  }

  .mb-xl-n8 {
    margin-bottom: -32px !important;
  }

  .mb-xl-n9 {
    margin-bottom: -36px !important;
  }

  .mb-xl-n10 {
    margin-bottom: -40px !important;
  }

  .mb-xl-n11 {
    margin-bottom: -44px !important;
  }

  .mb-xl-n12 {
    margin-bottom: -48px !important;
  }

  .mb-xl-n13 {
    margin-bottom: -52px !important;
  }

  .mb-xl-n14 {
    margin-bottom: -56px !important;
  }

  .mb-xl-n15 {
    margin-bottom: -60px !important;
  }

  .mb-xl-n16 {
    margin-bottom: -64px !important;
  }

  .ml-xl-n1 {
    margin-left: -4px !important;
  }

  .ml-xl-n2 {
    margin-left: -8px !important;
  }

  .ml-xl-n3 {
    margin-left: -12px !important;
  }

  .ml-xl-n4 {
    margin-left: -16px !important;
  }

  .ml-xl-n5 {
    margin-left: -20px !important;
  }

  .ml-xl-n6 {
    margin-left: -24px !important;
  }

  .ml-xl-n7 {
    margin-left: -28px !important;
  }

  .ml-xl-n8 {
    margin-left: -32px !important;
  }

  .ml-xl-n9 {
    margin-left: -36px !important;
  }

  .ml-xl-n10 {
    margin-left: -40px !important;
  }

  .ml-xl-n11 {
    margin-left: -44px !important;
  }

  .ml-xl-n12 {
    margin-left: -48px !important;
  }

  .ml-xl-n13 {
    margin-left: -52px !important;
  }

  .ml-xl-n14 {
    margin-left: -56px !important;
  }

  .ml-xl-n15 {
    margin-left: -60px !important;
  }

  .ml-xl-n16 {
    margin-left: -64px !important;
  }

  .ms-xl-n1 {
    -webkit-margin-start: -4px !important;
            margin-inline-start: -4px !important;
  }

  .ms-xl-n2 {
    -webkit-margin-start: -8px !important;
            margin-inline-start: -8px !important;
  }

  .ms-xl-n3 {
    -webkit-margin-start: -12px !important;
            margin-inline-start: -12px !important;
  }

  .ms-xl-n4 {
    -webkit-margin-start: -16px !important;
            margin-inline-start: -16px !important;
  }

  .ms-xl-n5 {
    -webkit-margin-start: -20px !important;
            margin-inline-start: -20px !important;
  }

  .ms-xl-n6 {
    -webkit-margin-start: -24px !important;
            margin-inline-start: -24px !important;
  }

  .ms-xl-n7 {
    -webkit-margin-start: -28px !important;
            margin-inline-start: -28px !important;
  }

  .ms-xl-n8 {
    -webkit-margin-start: -32px !important;
            margin-inline-start: -32px !important;
  }

  .ms-xl-n9 {
    -webkit-margin-start: -36px !important;
            margin-inline-start: -36px !important;
  }

  .ms-xl-n10 {
    -webkit-margin-start: -40px !important;
            margin-inline-start: -40px !important;
  }

  .ms-xl-n11 {
    -webkit-margin-start: -44px !important;
            margin-inline-start: -44px !important;
  }

  .ms-xl-n12 {
    -webkit-margin-start: -48px !important;
            margin-inline-start: -48px !important;
  }

  .ms-xl-n13 {
    -webkit-margin-start: -52px !important;
            margin-inline-start: -52px !important;
  }

  .ms-xl-n14 {
    -webkit-margin-start: -56px !important;
            margin-inline-start: -56px !important;
  }

  .ms-xl-n15 {
    -webkit-margin-start: -60px !important;
            margin-inline-start: -60px !important;
  }

  .ms-xl-n16 {
    -webkit-margin-start: -64px !important;
            margin-inline-start: -64px !important;
  }

  .me-xl-n1 {
    -webkit-margin-end: -4px !important;
            margin-inline-end: -4px !important;
  }

  .me-xl-n2 {
    -webkit-margin-end: -8px !important;
            margin-inline-end: -8px !important;
  }

  .me-xl-n3 {
    -webkit-margin-end: -12px !important;
            margin-inline-end: -12px !important;
  }

  .me-xl-n4 {
    -webkit-margin-end: -16px !important;
            margin-inline-end: -16px !important;
  }

  .me-xl-n5 {
    -webkit-margin-end: -20px !important;
            margin-inline-end: -20px !important;
  }

  .me-xl-n6 {
    -webkit-margin-end: -24px !important;
            margin-inline-end: -24px !important;
  }

  .me-xl-n7 {
    -webkit-margin-end: -28px !important;
            margin-inline-end: -28px !important;
  }

  .me-xl-n8 {
    -webkit-margin-end: -32px !important;
            margin-inline-end: -32px !important;
  }

  .me-xl-n9 {
    -webkit-margin-end: -36px !important;
            margin-inline-end: -36px !important;
  }

  .me-xl-n10 {
    -webkit-margin-end: -40px !important;
            margin-inline-end: -40px !important;
  }

  .me-xl-n11 {
    -webkit-margin-end: -44px !important;
            margin-inline-end: -44px !important;
  }

  .me-xl-n12 {
    -webkit-margin-end: -48px !important;
            margin-inline-end: -48px !important;
  }

  .me-xl-n13 {
    -webkit-margin-end: -52px !important;
            margin-inline-end: -52px !important;
  }

  .me-xl-n14 {
    -webkit-margin-end: -56px !important;
            margin-inline-end: -56px !important;
  }

  .me-xl-n15 {
    -webkit-margin-end: -60px !important;
            margin-inline-end: -60px !important;
  }

  .me-xl-n16 {
    -webkit-margin-end: -64px !important;
            margin-inline-end: -64px !important;
  }

  .pa-xl-0 {
    padding: 0px !important;
  }

  .pa-xl-1 {
    padding: 4px !important;
  }

  .pa-xl-2 {
    padding: 8px !important;
  }

  .pa-xl-3 {
    padding: 12px !important;
  }

  .pa-xl-4 {
    padding: 16px !important;
  }

  .pa-xl-5 {
    padding: 20px !important;
  }

  .pa-xl-6 {
    padding: 24px !important;
  }

  .pa-xl-7 {
    padding: 28px !important;
  }

  .pa-xl-8 {
    padding: 32px !important;
  }

  .pa-xl-9 {
    padding: 36px !important;
  }

  .pa-xl-10 {
    padding: 40px !important;
  }

  .pa-xl-11 {
    padding: 44px !important;
  }

  .pa-xl-12 {
    padding: 48px !important;
  }

  .pa-xl-13 {
    padding: 52px !important;
  }

  .pa-xl-14 {
    padding: 56px !important;
  }

  .pa-xl-15 {
    padding: 60px !important;
  }

  .pa-xl-16 {
    padding: 64px !important;
  }

  .px-xl-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .px-xl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }

  .px-xl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .px-xl-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  .px-xl-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .px-xl-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .px-xl-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .px-xl-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }

  .px-xl-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }

  .px-xl-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }

  .px-xl-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .px-xl-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }

  .px-xl-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }

  .px-xl-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }

  .px-xl-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }

  .px-xl-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }

  .px-xl-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }

  .py-xl-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .py-xl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .py-xl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .py-xl-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .py-xl-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .py-xl-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .py-xl-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .py-xl-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .py-xl-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .py-xl-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .py-xl-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .py-xl-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .py-xl-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .py-xl-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }

  .py-xl-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }

  .py-xl-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .py-xl-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .pt-xl-0 {
    padding-top: 0px !important;
  }

  .pt-xl-1 {
    padding-top: 4px !important;
  }

  .pt-xl-2 {
    padding-top: 8px !important;
  }

  .pt-xl-3 {
    padding-top: 12px !important;
  }

  .pt-xl-4 {
    padding-top: 16px !important;
  }

  .pt-xl-5 {
    padding-top: 20px !important;
  }

  .pt-xl-6 {
    padding-top: 24px !important;
  }

  .pt-xl-7 {
    padding-top: 28px !important;
  }

  .pt-xl-8 {
    padding-top: 32px !important;
  }

  .pt-xl-9 {
    padding-top: 36px !important;
  }

  .pt-xl-10 {
    padding-top: 40px !important;
  }

  .pt-xl-11 {
    padding-top: 44px !important;
  }

  .pt-xl-12 {
    padding-top: 48px !important;
  }

  .pt-xl-13 {
    padding-top: 52px !important;
  }

  .pt-xl-14 {
    padding-top: 56px !important;
  }

  .pt-xl-15 {
    padding-top: 60px !important;
  }

  .pt-xl-16 {
    padding-top: 64px !important;
  }

  .pr-xl-0 {
    padding-right: 0px !important;
  }

  .pr-xl-1 {
    padding-right: 4px !important;
  }

  .pr-xl-2 {
    padding-right: 8px !important;
  }

  .pr-xl-3 {
    padding-right: 12px !important;
  }

  .pr-xl-4 {
    padding-right: 16px !important;
  }

  .pr-xl-5 {
    padding-right: 20px !important;
  }

  .pr-xl-6 {
    padding-right: 24px !important;
  }

  .pr-xl-7 {
    padding-right: 28px !important;
  }

  .pr-xl-8 {
    padding-right: 32px !important;
  }

  .pr-xl-9 {
    padding-right: 36px !important;
  }

  .pr-xl-10 {
    padding-right: 40px !important;
  }

  .pr-xl-11 {
    padding-right: 44px !important;
  }

  .pr-xl-12 {
    padding-right: 48px !important;
  }

  .pr-xl-13 {
    padding-right: 52px !important;
  }

  .pr-xl-14 {
    padding-right: 56px !important;
  }

  .pr-xl-15 {
    padding-right: 60px !important;
  }

  .pr-xl-16 {
    padding-right: 64px !important;
  }

  .pb-xl-0 {
    padding-bottom: 0px !important;
  }

  .pb-xl-1 {
    padding-bottom: 4px !important;
  }

  .pb-xl-2 {
    padding-bottom: 8px !important;
  }

  .pb-xl-3 {
    padding-bottom: 12px !important;
  }

  .pb-xl-4 {
    padding-bottom: 16px !important;
  }

  .pb-xl-5 {
    padding-bottom: 20px !important;
  }

  .pb-xl-6 {
    padding-bottom: 24px !important;
  }

  .pb-xl-7 {
    padding-bottom: 28px !important;
  }

  .pb-xl-8 {
    padding-bottom: 32px !important;
  }

  .pb-xl-9 {
    padding-bottom: 36px !important;
  }

  .pb-xl-10 {
    padding-bottom: 40px !important;
  }

  .pb-xl-11 {
    padding-bottom: 44px !important;
  }

  .pb-xl-12 {
    padding-bottom: 48px !important;
  }

  .pb-xl-13 {
    padding-bottom: 52px !important;
  }

  .pb-xl-14 {
    padding-bottom: 56px !important;
  }

  .pb-xl-15 {
    padding-bottom: 60px !important;
  }

  .pb-xl-16 {
    padding-bottom: 64px !important;
  }

  .pl-xl-0 {
    padding-left: 0px !important;
  }

  .pl-xl-1 {
    padding-left: 4px !important;
  }

  .pl-xl-2 {
    padding-left: 8px !important;
  }

  .pl-xl-3 {
    padding-left: 12px !important;
  }

  .pl-xl-4 {
    padding-left: 16px !important;
  }

  .pl-xl-5 {
    padding-left: 20px !important;
  }

  .pl-xl-6 {
    padding-left: 24px !important;
  }

  .pl-xl-7 {
    padding-left: 28px !important;
  }

  .pl-xl-8 {
    padding-left: 32px !important;
  }

  .pl-xl-9 {
    padding-left: 36px !important;
  }

  .pl-xl-10 {
    padding-left: 40px !important;
  }

  .pl-xl-11 {
    padding-left: 44px !important;
  }

  .pl-xl-12 {
    padding-left: 48px !important;
  }

  .pl-xl-13 {
    padding-left: 52px !important;
  }

  .pl-xl-14 {
    padding-left: 56px !important;
  }

  .pl-xl-15 {
    padding-left: 60px !important;
  }

  .pl-xl-16 {
    padding-left: 64px !important;
  }

  .ps-xl-0 {
    -webkit-padding-start: 0px !important;
            padding-inline-start: 0px !important;
  }

  .ps-xl-1 {
    -webkit-padding-start: 4px !important;
            padding-inline-start: 4px !important;
  }

  .ps-xl-2 {
    -webkit-padding-start: 8px !important;
            padding-inline-start: 8px !important;
  }

  .ps-xl-3 {
    -webkit-padding-start: 12px !important;
            padding-inline-start: 12px !important;
  }

  .ps-xl-4 {
    -webkit-padding-start: 16px !important;
            padding-inline-start: 16px !important;
  }

  .ps-xl-5 {
    -webkit-padding-start: 20px !important;
            padding-inline-start: 20px !important;
  }

  .ps-xl-6 {
    -webkit-padding-start: 24px !important;
            padding-inline-start: 24px !important;
  }

  .ps-xl-7 {
    -webkit-padding-start: 28px !important;
            padding-inline-start: 28px !important;
  }

  .ps-xl-8 {
    -webkit-padding-start: 32px !important;
            padding-inline-start: 32px !important;
  }

  .ps-xl-9 {
    -webkit-padding-start: 36px !important;
            padding-inline-start: 36px !important;
  }

  .ps-xl-10 {
    -webkit-padding-start: 40px !important;
            padding-inline-start: 40px !important;
  }

  .ps-xl-11 {
    -webkit-padding-start: 44px !important;
            padding-inline-start: 44px !important;
  }

  .ps-xl-12 {
    -webkit-padding-start: 48px !important;
            padding-inline-start: 48px !important;
  }

  .ps-xl-13 {
    -webkit-padding-start: 52px !important;
            padding-inline-start: 52px !important;
  }

  .ps-xl-14 {
    -webkit-padding-start: 56px !important;
            padding-inline-start: 56px !important;
  }

  .ps-xl-15 {
    -webkit-padding-start: 60px !important;
            padding-inline-start: 60px !important;
  }

  .ps-xl-16 {
    -webkit-padding-start: 64px !important;
            padding-inline-start: 64px !important;
  }

  .pe-xl-0 {
    -webkit-padding-end: 0px !important;
            padding-inline-end: 0px !important;
  }

  .pe-xl-1 {
    -webkit-padding-end: 4px !important;
            padding-inline-end: 4px !important;
  }

  .pe-xl-2 {
    -webkit-padding-end: 8px !important;
            padding-inline-end: 8px !important;
  }

  .pe-xl-3 {
    -webkit-padding-end: 12px !important;
            padding-inline-end: 12px !important;
  }

  .pe-xl-4 {
    -webkit-padding-end: 16px !important;
            padding-inline-end: 16px !important;
  }

  .pe-xl-5 {
    -webkit-padding-end: 20px !important;
            padding-inline-end: 20px !important;
  }

  .pe-xl-6 {
    -webkit-padding-end: 24px !important;
            padding-inline-end: 24px !important;
  }

  .pe-xl-7 {
    -webkit-padding-end: 28px !important;
            padding-inline-end: 28px !important;
  }

  .pe-xl-8 {
    -webkit-padding-end: 32px !important;
            padding-inline-end: 32px !important;
  }

  .pe-xl-9 {
    -webkit-padding-end: 36px !important;
            padding-inline-end: 36px !important;
  }

  .pe-xl-10 {
    -webkit-padding-end: 40px !important;
            padding-inline-end: 40px !important;
  }

  .pe-xl-11 {
    -webkit-padding-end: 44px !important;
            padding-inline-end: 44px !important;
  }

  .pe-xl-12 {
    -webkit-padding-end: 48px !important;
            padding-inline-end: 48px !important;
  }

  .pe-xl-13 {
    -webkit-padding-end: 52px !important;
            padding-inline-end: 52px !important;
  }

  .pe-xl-14 {
    -webkit-padding-end: 56px !important;
            padding-inline-end: 56px !important;
  }

  .pe-xl-15 {
    -webkit-padding-end: 60px !important;
            padding-inline-end: 60px !important;
  }

  .pe-xl-16 {
    -webkit-padding-end: 64px !important;
            padding-inline-end: 64px !important;
  }

  .text-xl-left {
    text-align: left !important;
  }

  .text-xl-right {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }

  .text-xl-justify {
    text-align: justify !important;
  }

  .text-xl-start {
    text-align: start !important;
  }

  .text-xl-end {
    text-align: end !important;
  }

  .text-xl-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }

  .text-xl-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xl-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 2560px) {
  .d-xxl-none {
    display: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .float-xxl-left {
    float: left !important;
  }

  .float-xxl-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-xxl-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-xxl-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-xxl-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-xxl-start {
    float: left !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-xxl-center {
    justify-content: center !important;
  }

  .justify-xxl-space-between {
    justify-content: space-between !important;
  }

  .justify-xxl-space-around {
    justify-content: space-around !important;
  }

  .align-xxl-start {
    align-items: flex-start !important;
  }

  .align-xxl-end {
    align-items: flex-end !important;
  }

  .align-xxl-center {
    align-items: center !important;
  }

  .align-xxl-baseline {
    align-items: baseline !important;
  }

  .align-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-space-between {
    align-content: space-between !important;
  }

  .align-content-xxl-space-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-6 {
    order: 6 !important;
  }

  .order-xxl-7 {
    order: 7 !important;
  }

  .order-xxl-8 {
    order: 8 !important;
  }

  .order-xxl-9 {
    order: 9 !important;
  }

  .order-xxl-10 {
    order: 10 !important;
  }

  .order-xxl-11 {
    order: 11 !important;
  }

  .order-xxl-12 {
    order: 12 !important;
  }

  .order-xxl-last {
    order: 13 !important;
  }

  .ma-xxl-0 {
    margin: 0px !important;
  }

  .ma-xxl-1 {
    margin: 4px !important;
  }

  .ma-xxl-2 {
    margin: 8px !important;
  }

  .ma-xxl-3 {
    margin: 12px !important;
  }

  .ma-xxl-4 {
    margin: 16px !important;
  }

  .ma-xxl-5 {
    margin: 20px !important;
  }

  .ma-xxl-6 {
    margin: 24px !important;
  }

  .ma-xxl-7 {
    margin: 28px !important;
  }

  .ma-xxl-8 {
    margin: 32px !important;
  }

  .ma-xxl-9 {
    margin: 36px !important;
  }

  .ma-xxl-10 {
    margin: 40px !important;
  }

  .ma-xxl-11 {
    margin: 44px !important;
  }

  .ma-xxl-12 {
    margin: 48px !important;
  }

  .ma-xxl-13 {
    margin: 52px !important;
  }

  .ma-xxl-14 {
    margin: 56px !important;
  }

  .ma-xxl-15 {
    margin: 60px !important;
  }

  .ma-xxl-16 {
    margin: 64px !important;
  }

  .ma-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .mx-xxl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }

  .mx-xxl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }

  .mx-xxl-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }

  .mx-xxl-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }

  .mx-xxl-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }

  .mx-xxl-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }

  .mx-xxl-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }

  .mx-xxl-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }

  .mx-xxl-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }

  .mx-xxl-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }

  .mx-xxl-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }

  .mx-xxl-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }

  .mx-xxl-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }

  .mx-xxl-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }

  .mx-xxl-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }

  .mx-xxl-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .my-xxl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .my-xxl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .my-xxl-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .my-xxl-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-xxl-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .my-xxl-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .my-xxl-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .my-xxl-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .my-xxl-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .my-xxl-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .my-xxl-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .my-xxl-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .my-xxl-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }

  .my-xxl-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }

  .my-xxl-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .my-xxl-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0px !important;
  }

  .mt-xxl-1 {
    margin-top: 4px !important;
  }

  .mt-xxl-2 {
    margin-top: 8px !important;
  }

  .mt-xxl-3 {
    margin-top: 12px !important;
  }

  .mt-xxl-4 {
    margin-top: 16px !important;
  }

  .mt-xxl-5 {
    margin-top: 20px !important;
  }

  .mt-xxl-6 {
    margin-top: 24px !important;
  }

  .mt-xxl-7 {
    margin-top: 28px !important;
  }

  .mt-xxl-8 {
    margin-top: 32px !important;
  }

  .mt-xxl-9 {
    margin-top: 36px !important;
  }

  .mt-xxl-10 {
    margin-top: 40px !important;
  }

  .mt-xxl-11 {
    margin-top: 44px !important;
  }

  .mt-xxl-12 {
    margin-top: 48px !important;
  }

  .mt-xxl-13 {
    margin-top: 52px !important;
  }

  .mt-xxl-14 {
    margin-top: 56px !important;
  }

  .mt-xxl-15 {
    margin-top: 60px !important;
  }

  .mt-xxl-16 {
    margin-top: 64px !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .mr-xxl-0 {
    margin-right: 0px !important;
  }

  .mr-xxl-1 {
    margin-right: 4px !important;
  }

  .mr-xxl-2 {
    margin-right: 8px !important;
  }

  .mr-xxl-3 {
    margin-right: 12px !important;
  }

  .mr-xxl-4 {
    margin-right: 16px !important;
  }

  .mr-xxl-5 {
    margin-right: 20px !important;
  }

  .mr-xxl-6 {
    margin-right: 24px !important;
  }

  .mr-xxl-7 {
    margin-right: 28px !important;
  }

  .mr-xxl-8 {
    margin-right: 32px !important;
  }

  .mr-xxl-9 {
    margin-right: 36px !important;
  }

  .mr-xxl-10 {
    margin-right: 40px !important;
  }

  .mr-xxl-11 {
    margin-right: 44px !important;
  }

  .mr-xxl-12 {
    margin-right: 48px !important;
  }

  .mr-xxl-13 {
    margin-right: 52px !important;
  }

  .mr-xxl-14 {
    margin-right: 56px !important;
  }

  .mr-xxl-15 {
    margin-right: 60px !important;
  }

  .mr-xxl-16 {
    margin-right: 64px !important;
  }

  .mr-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0px !important;
  }

  .mb-xxl-1 {
    margin-bottom: 4px !important;
  }

  .mb-xxl-2 {
    margin-bottom: 8px !important;
  }

  .mb-xxl-3 {
    margin-bottom: 12px !important;
  }

  .mb-xxl-4 {
    margin-bottom: 16px !important;
  }

  .mb-xxl-5 {
    margin-bottom: 20px !important;
  }

  .mb-xxl-6 {
    margin-bottom: 24px !important;
  }

  .mb-xxl-7 {
    margin-bottom: 28px !important;
  }

  .mb-xxl-8 {
    margin-bottom: 32px !important;
  }

  .mb-xxl-9 {
    margin-bottom: 36px !important;
  }

  .mb-xxl-10 {
    margin-bottom: 40px !important;
  }

  .mb-xxl-11 {
    margin-bottom: 44px !important;
  }

  .mb-xxl-12 {
    margin-bottom: 48px !important;
  }

  .mb-xxl-13 {
    margin-bottom: 52px !important;
  }

  .mb-xxl-14 {
    margin-bottom: 56px !important;
  }

  .mb-xxl-15 {
    margin-bottom: 60px !important;
  }

  .mb-xxl-16 {
    margin-bottom: 64px !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ml-xxl-0 {
    margin-left: 0px !important;
  }

  .ml-xxl-1 {
    margin-left: 4px !important;
  }

  .ml-xxl-2 {
    margin-left: 8px !important;
  }

  .ml-xxl-3 {
    margin-left: 12px !important;
  }

  .ml-xxl-4 {
    margin-left: 16px !important;
  }

  .ml-xxl-5 {
    margin-left: 20px !important;
  }

  .ml-xxl-6 {
    margin-left: 24px !important;
  }

  .ml-xxl-7 {
    margin-left: 28px !important;
  }

  .ml-xxl-8 {
    margin-left: 32px !important;
  }

  .ml-xxl-9 {
    margin-left: 36px !important;
  }

  .ml-xxl-10 {
    margin-left: 40px !important;
  }

  .ml-xxl-11 {
    margin-left: 44px !important;
  }

  .ml-xxl-12 {
    margin-left: 48px !important;
  }

  .ml-xxl-13 {
    margin-left: 52px !important;
  }

  .ml-xxl-14 {
    margin-left: 56px !important;
  }

  .ml-xxl-15 {
    margin-left: 60px !important;
  }

  .ml-xxl-16 {
    margin-left: 64px !important;
  }

  .ml-xxl-auto {
    margin-left: auto !important;
  }

  .ms-xxl-0 {
    -webkit-margin-start: 0px !important;
            margin-inline-start: 0px !important;
  }

  .ms-xxl-1 {
    -webkit-margin-start: 4px !important;
            margin-inline-start: 4px !important;
  }

  .ms-xxl-2 {
    -webkit-margin-start: 8px !important;
            margin-inline-start: 8px !important;
  }

  .ms-xxl-3 {
    -webkit-margin-start: 12px !important;
            margin-inline-start: 12px !important;
  }

  .ms-xxl-4 {
    -webkit-margin-start: 16px !important;
            margin-inline-start: 16px !important;
  }

  .ms-xxl-5 {
    -webkit-margin-start: 20px !important;
            margin-inline-start: 20px !important;
  }

  .ms-xxl-6 {
    -webkit-margin-start: 24px !important;
            margin-inline-start: 24px !important;
  }

  .ms-xxl-7 {
    -webkit-margin-start: 28px !important;
            margin-inline-start: 28px !important;
  }

  .ms-xxl-8 {
    -webkit-margin-start: 32px !important;
            margin-inline-start: 32px !important;
  }

  .ms-xxl-9 {
    -webkit-margin-start: 36px !important;
            margin-inline-start: 36px !important;
  }

  .ms-xxl-10 {
    -webkit-margin-start: 40px !important;
            margin-inline-start: 40px !important;
  }

  .ms-xxl-11 {
    -webkit-margin-start: 44px !important;
            margin-inline-start: 44px !important;
  }

  .ms-xxl-12 {
    -webkit-margin-start: 48px !important;
            margin-inline-start: 48px !important;
  }

  .ms-xxl-13 {
    -webkit-margin-start: 52px !important;
            margin-inline-start: 52px !important;
  }

  .ms-xxl-14 {
    -webkit-margin-start: 56px !important;
            margin-inline-start: 56px !important;
  }

  .ms-xxl-15 {
    -webkit-margin-start: 60px !important;
            margin-inline-start: 60px !important;
  }

  .ms-xxl-16 {
    -webkit-margin-start: 64px !important;
            margin-inline-start: 64px !important;
  }

  .ms-xxl-auto {
    -webkit-margin-start: auto !important;
            margin-inline-start: auto !important;
  }

  .me-xxl-0 {
    -webkit-margin-end: 0px !important;
            margin-inline-end: 0px !important;
  }

  .me-xxl-1 {
    -webkit-margin-end: 4px !important;
            margin-inline-end: 4px !important;
  }

  .me-xxl-2 {
    -webkit-margin-end: 8px !important;
            margin-inline-end: 8px !important;
  }

  .me-xxl-3 {
    -webkit-margin-end: 12px !important;
            margin-inline-end: 12px !important;
  }

  .me-xxl-4 {
    -webkit-margin-end: 16px !important;
            margin-inline-end: 16px !important;
  }

  .me-xxl-5 {
    -webkit-margin-end: 20px !important;
            margin-inline-end: 20px !important;
  }

  .me-xxl-6 {
    -webkit-margin-end: 24px !important;
            margin-inline-end: 24px !important;
  }

  .me-xxl-7 {
    -webkit-margin-end: 28px !important;
            margin-inline-end: 28px !important;
  }

  .me-xxl-8 {
    -webkit-margin-end: 32px !important;
            margin-inline-end: 32px !important;
  }

  .me-xxl-9 {
    -webkit-margin-end: 36px !important;
            margin-inline-end: 36px !important;
  }

  .me-xxl-10 {
    -webkit-margin-end: 40px !important;
            margin-inline-end: 40px !important;
  }

  .me-xxl-11 {
    -webkit-margin-end: 44px !important;
            margin-inline-end: 44px !important;
  }

  .me-xxl-12 {
    -webkit-margin-end: 48px !important;
            margin-inline-end: 48px !important;
  }

  .me-xxl-13 {
    -webkit-margin-end: 52px !important;
            margin-inline-end: 52px !important;
  }

  .me-xxl-14 {
    -webkit-margin-end: 56px !important;
            margin-inline-end: 56px !important;
  }

  .me-xxl-15 {
    -webkit-margin-end: 60px !important;
            margin-inline-end: 60px !important;
  }

  .me-xxl-16 {
    -webkit-margin-end: 64px !important;
            margin-inline-end: 64px !important;
  }

  .me-xxl-auto {
    -webkit-margin-end: auto !important;
            margin-inline-end: auto !important;
  }

  .ma-xxl-n1 {
    margin: -4px !important;
  }

  .ma-xxl-n2 {
    margin: -8px !important;
  }

  .ma-xxl-n3 {
    margin: -12px !important;
  }

  .ma-xxl-n4 {
    margin: -16px !important;
  }

  .ma-xxl-n5 {
    margin: -20px !important;
  }

  .ma-xxl-n6 {
    margin: -24px !important;
  }

  .ma-xxl-n7 {
    margin: -28px !important;
  }

  .ma-xxl-n8 {
    margin: -32px !important;
  }

  .ma-xxl-n9 {
    margin: -36px !important;
  }

  .ma-xxl-n10 {
    margin: -40px !important;
  }

  .ma-xxl-n11 {
    margin: -44px !important;
  }

  .ma-xxl-n12 {
    margin: -48px !important;
  }

  .ma-xxl-n13 {
    margin: -52px !important;
  }

  .ma-xxl-n14 {
    margin: -56px !important;
  }

  .ma-xxl-n15 {
    margin: -60px !important;
  }

  .ma-xxl-n16 {
    margin: -64px !important;
  }

  .mx-xxl-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }

  .mx-xxl-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }

  .mx-xxl-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }

  .mx-xxl-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }

  .mx-xxl-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }

  .mx-xxl-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }

  .mx-xxl-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }

  .mx-xxl-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }

  .mx-xxl-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }

  .mx-xxl-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }

  .mx-xxl-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }

  .mx-xxl-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }

  .mx-xxl-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }

  .mx-xxl-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }

  .mx-xxl-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }

  .mx-xxl-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }

  .my-xxl-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }

  .my-xxl-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }

  .my-xxl-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }

  .my-xxl-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }

  .my-xxl-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }

  .my-xxl-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }

  .my-xxl-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }

  .my-xxl-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }

  .my-xxl-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }

  .my-xxl-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }

  .my-xxl-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }

  .my-xxl-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }

  .my-xxl-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }

  .my-xxl-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }

  .my-xxl-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }

  .my-xxl-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }

  .mt-xxl-n1 {
    margin-top: -4px !important;
  }

  .mt-xxl-n2 {
    margin-top: -8px !important;
  }

  .mt-xxl-n3 {
    margin-top: -12px !important;
  }

  .mt-xxl-n4 {
    margin-top: -16px !important;
  }

  .mt-xxl-n5 {
    margin-top: -20px !important;
  }

  .mt-xxl-n6 {
    margin-top: -24px !important;
  }

  .mt-xxl-n7 {
    margin-top: -28px !important;
  }

  .mt-xxl-n8 {
    margin-top: -32px !important;
  }

  .mt-xxl-n9 {
    margin-top: -36px !important;
  }

  .mt-xxl-n10 {
    margin-top: -40px !important;
  }

  .mt-xxl-n11 {
    margin-top: -44px !important;
  }

  .mt-xxl-n12 {
    margin-top: -48px !important;
  }

  .mt-xxl-n13 {
    margin-top: -52px !important;
  }

  .mt-xxl-n14 {
    margin-top: -56px !important;
  }

  .mt-xxl-n15 {
    margin-top: -60px !important;
  }

  .mt-xxl-n16 {
    margin-top: -64px !important;
  }

  .mr-xxl-n1 {
    margin-right: -4px !important;
  }

  .mr-xxl-n2 {
    margin-right: -8px !important;
  }

  .mr-xxl-n3 {
    margin-right: -12px !important;
  }

  .mr-xxl-n4 {
    margin-right: -16px !important;
  }

  .mr-xxl-n5 {
    margin-right: -20px !important;
  }

  .mr-xxl-n6 {
    margin-right: -24px !important;
  }

  .mr-xxl-n7 {
    margin-right: -28px !important;
  }

  .mr-xxl-n8 {
    margin-right: -32px !important;
  }

  .mr-xxl-n9 {
    margin-right: -36px !important;
  }

  .mr-xxl-n10 {
    margin-right: -40px !important;
  }

  .mr-xxl-n11 {
    margin-right: -44px !important;
  }

  .mr-xxl-n12 {
    margin-right: -48px !important;
  }

  .mr-xxl-n13 {
    margin-right: -52px !important;
  }

  .mr-xxl-n14 {
    margin-right: -56px !important;
  }

  .mr-xxl-n15 {
    margin-right: -60px !important;
  }

  .mr-xxl-n16 {
    margin-right: -64px !important;
  }

  .mb-xxl-n1 {
    margin-bottom: -4px !important;
  }

  .mb-xxl-n2 {
    margin-bottom: -8px !important;
  }

  .mb-xxl-n3 {
    margin-bottom: -12px !important;
  }

  .mb-xxl-n4 {
    margin-bottom: -16px !important;
  }

  .mb-xxl-n5 {
    margin-bottom: -20px !important;
  }

  .mb-xxl-n6 {
    margin-bottom: -24px !important;
  }

  .mb-xxl-n7 {
    margin-bottom: -28px !important;
  }

  .mb-xxl-n8 {
    margin-bottom: -32px !important;
  }

  .mb-xxl-n9 {
    margin-bottom: -36px !important;
  }

  .mb-xxl-n10 {
    margin-bottom: -40px !important;
  }

  .mb-xxl-n11 {
    margin-bottom: -44px !important;
  }

  .mb-xxl-n12 {
    margin-bottom: -48px !important;
  }

  .mb-xxl-n13 {
    margin-bottom: -52px !important;
  }

  .mb-xxl-n14 {
    margin-bottom: -56px !important;
  }

  .mb-xxl-n15 {
    margin-bottom: -60px !important;
  }

  .mb-xxl-n16 {
    margin-bottom: -64px !important;
  }

  .ml-xxl-n1 {
    margin-left: -4px !important;
  }

  .ml-xxl-n2 {
    margin-left: -8px !important;
  }

  .ml-xxl-n3 {
    margin-left: -12px !important;
  }

  .ml-xxl-n4 {
    margin-left: -16px !important;
  }

  .ml-xxl-n5 {
    margin-left: -20px !important;
  }

  .ml-xxl-n6 {
    margin-left: -24px !important;
  }

  .ml-xxl-n7 {
    margin-left: -28px !important;
  }

  .ml-xxl-n8 {
    margin-left: -32px !important;
  }

  .ml-xxl-n9 {
    margin-left: -36px !important;
  }

  .ml-xxl-n10 {
    margin-left: -40px !important;
  }

  .ml-xxl-n11 {
    margin-left: -44px !important;
  }

  .ml-xxl-n12 {
    margin-left: -48px !important;
  }

  .ml-xxl-n13 {
    margin-left: -52px !important;
  }

  .ml-xxl-n14 {
    margin-left: -56px !important;
  }

  .ml-xxl-n15 {
    margin-left: -60px !important;
  }

  .ml-xxl-n16 {
    margin-left: -64px !important;
  }

  .ms-xxl-n1 {
    -webkit-margin-start: -4px !important;
            margin-inline-start: -4px !important;
  }

  .ms-xxl-n2 {
    -webkit-margin-start: -8px !important;
            margin-inline-start: -8px !important;
  }

  .ms-xxl-n3 {
    -webkit-margin-start: -12px !important;
            margin-inline-start: -12px !important;
  }

  .ms-xxl-n4 {
    -webkit-margin-start: -16px !important;
            margin-inline-start: -16px !important;
  }

  .ms-xxl-n5 {
    -webkit-margin-start: -20px !important;
            margin-inline-start: -20px !important;
  }

  .ms-xxl-n6 {
    -webkit-margin-start: -24px !important;
            margin-inline-start: -24px !important;
  }

  .ms-xxl-n7 {
    -webkit-margin-start: -28px !important;
            margin-inline-start: -28px !important;
  }

  .ms-xxl-n8 {
    -webkit-margin-start: -32px !important;
            margin-inline-start: -32px !important;
  }

  .ms-xxl-n9 {
    -webkit-margin-start: -36px !important;
            margin-inline-start: -36px !important;
  }

  .ms-xxl-n10 {
    -webkit-margin-start: -40px !important;
            margin-inline-start: -40px !important;
  }

  .ms-xxl-n11 {
    -webkit-margin-start: -44px !important;
            margin-inline-start: -44px !important;
  }

  .ms-xxl-n12 {
    -webkit-margin-start: -48px !important;
            margin-inline-start: -48px !important;
  }

  .ms-xxl-n13 {
    -webkit-margin-start: -52px !important;
            margin-inline-start: -52px !important;
  }

  .ms-xxl-n14 {
    -webkit-margin-start: -56px !important;
            margin-inline-start: -56px !important;
  }

  .ms-xxl-n15 {
    -webkit-margin-start: -60px !important;
            margin-inline-start: -60px !important;
  }

  .ms-xxl-n16 {
    -webkit-margin-start: -64px !important;
            margin-inline-start: -64px !important;
  }

  .me-xxl-n1 {
    -webkit-margin-end: -4px !important;
            margin-inline-end: -4px !important;
  }

  .me-xxl-n2 {
    -webkit-margin-end: -8px !important;
            margin-inline-end: -8px !important;
  }

  .me-xxl-n3 {
    -webkit-margin-end: -12px !important;
            margin-inline-end: -12px !important;
  }

  .me-xxl-n4 {
    -webkit-margin-end: -16px !important;
            margin-inline-end: -16px !important;
  }

  .me-xxl-n5 {
    -webkit-margin-end: -20px !important;
            margin-inline-end: -20px !important;
  }

  .me-xxl-n6 {
    -webkit-margin-end: -24px !important;
            margin-inline-end: -24px !important;
  }

  .me-xxl-n7 {
    -webkit-margin-end: -28px !important;
            margin-inline-end: -28px !important;
  }

  .me-xxl-n8 {
    -webkit-margin-end: -32px !important;
            margin-inline-end: -32px !important;
  }

  .me-xxl-n9 {
    -webkit-margin-end: -36px !important;
            margin-inline-end: -36px !important;
  }

  .me-xxl-n10 {
    -webkit-margin-end: -40px !important;
            margin-inline-end: -40px !important;
  }

  .me-xxl-n11 {
    -webkit-margin-end: -44px !important;
            margin-inline-end: -44px !important;
  }

  .me-xxl-n12 {
    -webkit-margin-end: -48px !important;
            margin-inline-end: -48px !important;
  }

  .me-xxl-n13 {
    -webkit-margin-end: -52px !important;
            margin-inline-end: -52px !important;
  }

  .me-xxl-n14 {
    -webkit-margin-end: -56px !important;
            margin-inline-end: -56px !important;
  }

  .me-xxl-n15 {
    -webkit-margin-end: -60px !important;
            margin-inline-end: -60px !important;
  }

  .me-xxl-n16 {
    -webkit-margin-end: -64px !important;
            margin-inline-end: -64px !important;
  }

  .pa-xxl-0 {
    padding: 0px !important;
  }

  .pa-xxl-1 {
    padding: 4px !important;
  }

  .pa-xxl-2 {
    padding: 8px !important;
  }

  .pa-xxl-3 {
    padding: 12px !important;
  }

  .pa-xxl-4 {
    padding: 16px !important;
  }

  .pa-xxl-5 {
    padding: 20px !important;
  }

  .pa-xxl-6 {
    padding: 24px !important;
  }

  .pa-xxl-7 {
    padding: 28px !important;
  }

  .pa-xxl-8 {
    padding: 32px !important;
  }

  .pa-xxl-9 {
    padding: 36px !important;
  }

  .pa-xxl-10 {
    padding: 40px !important;
  }

  .pa-xxl-11 {
    padding: 44px !important;
  }

  .pa-xxl-12 {
    padding: 48px !important;
  }

  .pa-xxl-13 {
    padding: 52px !important;
  }

  .pa-xxl-14 {
    padding: 56px !important;
  }

  .pa-xxl-15 {
    padding: 60px !important;
  }

  .pa-xxl-16 {
    padding: 64px !important;
  }

  .px-xxl-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .px-xxl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }

  .px-xxl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .px-xxl-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  .px-xxl-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .px-xxl-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .px-xxl-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .px-xxl-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }

  .px-xxl-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }

  .px-xxl-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }

  .px-xxl-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .px-xxl-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }

  .px-xxl-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }

  .px-xxl-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }

  .px-xxl-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }

  .px-xxl-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }

  .px-xxl-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }

  .py-xxl-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .py-xxl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .py-xxl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .py-xxl-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .py-xxl-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .py-xxl-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .py-xxl-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .py-xxl-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .py-xxl-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .py-xxl-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .py-xxl-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .py-xxl-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .py-xxl-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .py-xxl-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }

  .py-xxl-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }

  .py-xxl-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .py-xxl-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .pt-xxl-0 {
    padding-top: 0px !important;
  }

  .pt-xxl-1 {
    padding-top: 4px !important;
  }

  .pt-xxl-2 {
    padding-top: 8px !important;
  }

  .pt-xxl-3 {
    padding-top: 12px !important;
  }

  .pt-xxl-4 {
    padding-top: 16px !important;
  }

  .pt-xxl-5 {
    padding-top: 20px !important;
  }

  .pt-xxl-6 {
    padding-top: 24px !important;
  }

  .pt-xxl-7 {
    padding-top: 28px !important;
  }

  .pt-xxl-8 {
    padding-top: 32px !important;
  }

  .pt-xxl-9 {
    padding-top: 36px !important;
  }

  .pt-xxl-10 {
    padding-top: 40px !important;
  }

  .pt-xxl-11 {
    padding-top: 44px !important;
  }

  .pt-xxl-12 {
    padding-top: 48px !important;
  }

  .pt-xxl-13 {
    padding-top: 52px !important;
  }

  .pt-xxl-14 {
    padding-top: 56px !important;
  }

  .pt-xxl-15 {
    padding-top: 60px !important;
  }

  .pt-xxl-16 {
    padding-top: 64px !important;
  }

  .pr-xxl-0 {
    padding-right: 0px !important;
  }

  .pr-xxl-1 {
    padding-right: 4px !important;
  }

  .pr-xxl-2 {
    padding-right: 8px !important;
  }

  .pr-xxl-3 {
    padding-right: 12px !important;
  }

  .pr-xxl-4 {
    padding-right: 16px !important;
  }

  .pr-xxl-5 {
    padding-right: 20px !important;
  }

  .pr-xxl-6 {
    padding-right: 24px !important;
  }

  .pr-xxl-7 {
    padding-right: 28px !important;
  }

  .pr-xxl-8 {
    padding-right: 32px !important;
  }

  .pr-xxl-9 {
    padding-right: 36px !important;
  }

  .pr-xxl-10 {
    padding-right: 40px !important;
  }

  .pr-xxl-11 {
    padding-right: 44px !important;
  }

  .pr-xxl-12 {
    padding-right: 48px !important;
  }

  .pr-xxl-13 {
    padding-right: 52px !important;
  }

  .pr-xxl-14 {
    padding-right: 56px !important;
  }

  .pr-xxl-15 {
    padding-right: 60px !important;
  }

  .pr-xxl-16 {
    padding-right: 64px !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0px !important;
  }

  .pb-xxl-1 {
    padding-bottom: 4px !important;
  }

  .pb-xxl-2 {
    padding-bottom: 8px !important;
  }

  .pb-xxl-3 {
    padding-bottom: 12px !important;
  }

  .pb-xxl-4 {
    padding-bottom: 16px !important;
  }

  .pb-xxl-5 {
    padding-bottom: 20px !important;
  }

  .pb-xxl-6 {
    padding-bottom: 24px !important;
  }

  .pb-xxl-7 {
    padding-bottom: 28px !important;
  }

  .pb-xxl-8 {
    padding-bottom: 32px !important;
  }

  .pb-xxl-9 {
    padding-bottom: 36px !important;
  }

  .pb-xxl-10 {
    padding-bottom: 40px !important;
  }

  .pb-xxl-11 {
    padding-bottom: 44px !important;
  }

  .pb-xxl-12 {
    padding-bottom: 48px !important;
  }

  .pb-xxl-13 {
    padding-bottom: 52px !important;
  }

  .pb-xxl-14 {
    padding-bottom: 56px !important;
  }

  .pb-xxl-15 {
    padding-bottom: 60px !important;
  }

  .pb-xxl-16 {
    padding-bottom: 64px !important;
  }

  .pl-xxl-0 {
    padding-left: 0px !important;
  }

  .pl-xxl-1 {
    padding-left: 4px !important;
  }

  .pl-xxl-2 {
    padding-left: 8px !important;
  }

  .pl-xxl-3 {
    padding-left: 12px !important;
  }

  .pl-xxl-4 {
    padding-left: 16px !important;
  }

  .pl-xxl-5 {
    padding-left: 20px !important;
  }

  .pl-xxl-6 {
    padding-left: 24px !important;
  }

  .pl-xxl-7 {
    padding-left: 28px !important;
  }

  .pl-xxl-8 {
    padding-left: 32px !important;
  }

  .pl-xxl-9 {
    padding-left: 36px !important;
  }

  .pl-xxl-10 {
    padding-left: 40px !important;
  }

  .pl-xxl-11 {
    padding-left: 44px !important;
  }

  .pl-xxl-12 {
    padding-left: 48px !important;
  }

  .pl-xxl-13 {
    padding-left: 52px !important;
  }

  .pl-xxl-14 {
    padding-left: 56px !important;
  }

  .pl-xxl-15 {
    padding-left: 60px !important;
  }

  .pl-xxl-16 {
    padding-left: 64px !important;
  }

  .ps-xxl-0 {
    -webkit-padding-start: 0px !important;
            padding-inline-start: 0px !important;
  }

  .ps-xxl-1 {
    -webkit-padding-start: 4px !important;
            padding-inline-start: 4px !important;
  }

  .ps-xxl-2 {
    -webkit-padding-start: 8px !important;
            padding-inline-start: 8px !important;
  }

  .ps-xxl-3 {
    -webkit-padding-start: 12px !important;
            padding-inline-start: 12px !important;
  }

  .ps-xxl-4 {
    -webkit-padding-start: 16px !important;
            padding-inline-start: 16px !important;
  }

  .ps-xxl-5 {
    -webkit-padding-start: 20px !important;
            padding-inline-start: 20px !important;
  }

  .ps-xxl-6 {
    -webkit-padding-start: 24px !important;
            padding-inline-start: 24px !important;
  }

  .ps-xxl-7 {
    -webkit-padding-start: 28px !important;
            padding-inline-start: 28px !important;
  }

  .ps-xxl-8 {
    -webkit-padding-start: 32px !important;
            padding-inline-start: 32px !important;
  }

  .ps-xxl-9 {
    -webkit-padding-start: 36px !important;
            padding-inline-start: 36px !important;
  }

  .ps-xxl-10 {
    -webkit-padding-start: 40px !important;
            padding-inline-start: 40px !important;
  }

  .ps-xxl-11 {
    -webkit-padding-start: 44px !important;
            padding-inline-start: 44px !important;
  }

  .ps-xxl-12 {
    -webkit-padding-start: 48px !important;
            padding-inline-start: 48px !important;
  }

  .ps-xxl-13 {
    -webkit-padding-start: 52px !important;
            padding-inline-start: 52px !important;
  }

  .ps-xxl-14 {
    -webkit-padding-start: 56px !important;
            padding-inline-start: 56px !important;
  }

  .ps-xxl-15 {
    -webkit-padding-start: 60px !important;
            padding-inline-start: 60px !important;
  }

  .ps-xxl-16 {
    -webkit-padding-start: 64px !important;
            padding-inline-start: 64px !important;
  }

  .pe-xxl-0 {
    -webkit-padding-end: 0px !important;
            padding-inline-end: 0px !important;
  }

  .pe-xxl-1 {
    -webkit-padding-end: 4px !important;
            padding-inline-end: 4px !important;
  }

  .pe-xxl-2 {
    -webkit-padding-end: 8px !important;
            padding-inline-end: 8px !important;
  }

  .pe-xxl-3 {
    -webkit-padding-end: 12px !important;
            padding-inline-end: 12px !important;
  }

  .pe-xxl-4 {
    -webkit-padding-end: 16px !important;
            padding-inline-end: 16px !important;
  }

  .pe-xxl-5 {
    -webkit-padding-end: 20px !important;
            padding-inline-end: 20px !important;
  }

  .pe-xxl-6 {
    -webkit-padding-end: 24px !important;
            padding-inline-end: 24px !important;
  }

  .pe-xxl-7 {
    -webkit-padding-end: 28px !important;
            padding-inline-end: 28px !important;
  }

  .pe-xxl-8 {
    -webkit-padding-end: 32px !important;
            padding-inline-end: 32px !important;
  }

  .pe-xxl-9 {
    -webkit-padding-end: 36px !important;
            padding-inline-end: 36px !important;
  }

  .pe-xxl-10 {
    -webkit-padding-end: 40px !important;
            padding-inline-end: 40px !important;
  }

  .pe-xxl-11 {
    -webkit-padding-end: 44px !important;
            padding-inline-end: 44px !important;
  }

  .pe-xxl-12 {
    -webkit-padding-end: 48px !important;
            padding-inline-end: 48px !important;
  }

  .pe-xxl-13 {
    -webkit-padding-end: 52px !important;
            padding-inline-end: 52px !important;
  }

  .pe-xxl-14 {
    -webkit-padding-end: 56px !important;
            padding-inline-end: 56px !important;
  }

  .pe-xxl-15 {
    -webkit-padding-end: 60px !important;
            padding-inline-end: 60px !important;
  }

  .pe-xxl-16 {
    -webkit-padding-end: 64px !important;
            padding-inline-end: 64px !important;
  }

  .text-xxl-left {
    text-align: left !important;
  }

  .text-xxl-right {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }

  .text-xxl-justify {
    text-align: justify !important;
  }

  .text-xxl-start {
    text-align: start !important;
  }

  .text-xxl-end {
    text-align: end !important;
  }

  .text-xxl-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }

  .text-xxl-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }

  .text-xxl-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .float-print-none {
    float: none !important;
  }

  .float-print-left {
    float: left !important;
  }

  .float-print-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-print-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-print-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-print-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-print-start {
    float: left !important;
  }
}.v-code {
  background-color: rgb(var(--v-code-background-color));
  border-radius: 3px;
  font-size: 85%;
  font-weight: normal;
  padding: 0.2em 0.4em;
}.v-kbd {
  background: rgb(var(--v-kbd-background-color));
  border-radius: 3px;
  color: rgb(var(--v-kbd-color));
  font-size: 85%;
  font-weight: normal;
  padding: 0.2em 0.4rem;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}.v-ripple__container {
  color: inherit;
  border-radius: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  contain: strict;
}
.v-ripple__animation {
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  will-change: transform, opacity;
}
.v-ripple__animation--enter {
  transition: none;
}
.v-ripple__animation--in {
  transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1), opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
}
.v-ripple__animation--out {
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
}.v-application {
  display: flex;
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
}
.v-application a {
  cursor: pointer;
}

.v-application__wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}

@-moz-document url-prefix() {
  @media print {
    .v-application {
      display: block;
    }
    .v-application__wrap {
      display: block;
    }
  }
}.v-app-bar-title {
  font-size: 1.5rem;
  padding: 6px 20px;
}

.v-app-bar-title__placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}.v-badge {
  display: inline-block;
  line-height: 1;
}

.v-badge__badge {
  align-items: center;
  border-radius: 10px;
  display: flex;
  font-size: 0.75rem;
  font-weight: 500;
  height: 1.25rem;
  justify-content: center;
  min-width: 20px;
  padding: 4px;
  pointer-events: auto;
  position: absolute;
  text-align: center;
  text-indent: 0;
  transition: 0.225s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}
.v-badge--bordered .v-badge__badge::after {
  border-radius: inherit;
  border-style: solid;
  border-width: 2px;
  bottom: 0;
  color: rgb(var(--v-theme-background));
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(1.2);
}
.v-badge--dot .v-badge__badge {
  border-radius: 4.5px;
  height: 9px;
  min-width: 0;
  padding: 0;
  width: 9px;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-badge--dot .v-badge__badge::after {
  border-width: 1.5px;
}
.v-badge--inline .v-badge__badge {
  position: relative;
  vertical-align: middle;
}
.v-badge__badge .v-icon {
  color: inherit;
}
.v-badge__badge img,
.v-badge__badge .v-img {
  height: 100%;
  width: 100%;
}

.v-badge__content {
  padding: 0 2px;
}

.v-badge__wrapper {
  display: flex;
  position: relative;
}
.v-badge--inline .v-badge__wrapper {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin: 0 4px;
}.v-avatar {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  overflow: hidden;
  position: relative;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
}
.v-avatar.v-avatar--size-x-small {
  --v-avatar-height: 24px;
}
.v-avatar.v-avatar--size-small {
  --v-avatar-height: 32px;
}
.v-avatar.v-avatar--size-default {
  --v-avatar-height: 40px;
}
.v-avatar.v-avatar--size-large {
  --v-avatar-height: 48px;
}
.v-avatar.v-avatar--size-x-large {
  --v-avatar-height: 56px;
}
.v-avatar.v-avatar--density-default {
  height: calc(var(--v-avatar-height) + 0px);
  width: calc(var(--v-avatar-height) + 0px);
}
.v-avatar.v-avatar--density-comfortable {
  height: calc(var(--v-avatar-height) + -4px);
  width: calc(var(--v-avatar-height) + -4px);
}
.v-avatar.v-avatar--density-compact {
  height: calc(var(--v-avatar-height) + -8px);
  width: calc(var(--v-avatar-height) + -8px);
}
.v-avatar > * {
  border-radius: inherit;
  width: inherit;
  height: inherit;
}
.v-avatar > .v-icon {
  font-size: var(--v-avatar-height);
}
.v-avatar--rounded {
  border-radius: 4px;
}

.v-list-item-avatar .v-avatar {
  overflow: visible;
  height: inherit;
  width: inherit;
}.v-app-bar {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  padding-left: 4px;
  padding-right: calc(4px + var(--v-scrollbar-offset));
  position: fixed;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: height, transform;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-app-bar--is-active {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.v-app-bar--border {
  border-width: 0 0 thin;
  box-shadow: none;
}
.v-app-bar--absolute {
  position: absolute;
}
.v-app-bar--border.v-app-bar--bottom {
  border-bottom-width: 0;
  border-top-width: 0 0 thin;
}
.v-app-bar--collapsed {
  max-width: 112px;
  overflow: hidden;
}
.v-app-bar--collapsed.v-locale--is-ltr, .v-locale--is-ltr .v-app-bar--collapsed {
  border-bottom-right-radius: 24px;
}
.v-app-bar--collapsed.v-locale--is-rtl, .v-locale--is-rtl .v-app-bar--collapsed {
  border-bottom-left-radius: 24px;
}
.v-app-bar--flat {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.v-app-bar--floating {
  display: inline-flex;
}
.v-app-bar--rounded {
  border-radius: 4px;
}

.v-app-bar__content {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  transition: inherit;
  width: 100%;
}
.v-app-bar--density-default .v-app-bar__content {
  padding-bottom: 8px;
  padding-top: 8px;
}
.v-app-bar--density-comfortable .v-app-bar__content {
  padding-bottom: 4px;
  padding-top: 4px;
}
.v-app-bar--density-compact .v-app-bar__content {
  padding-bottom: 0;
  padding-top: 0;
}

.v-app-bar__extension {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  transition: inherit;
  width: 100%;
}

.v-app-bar__image {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  display: flex;
}

.v-app-bar__append {
  display: flex;
  flex: 0 1 auto;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}

.v-app-bar__prepend {
  display: flex;
  flex: 0 1 auto;
}.v-banner {
  background: rgb(var(--v-theme-background));
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  padding-bottom: 8px;
  -webkit-padding-end: 8px;
          padding-inline-end: 8px;
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
  position: relative;
  width: 100%;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0 0 thin 0;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0;
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-surface));
}
.v-banner--border {
  border-width: thin;
  box-shadow: none;
}
.v-banner--absolute {
  position: absolute;
}
.v-banner--fixed {
  position: fixed;
}
.v-banner--sticky {
  position: sticky;
}
.v-banner--border {
  border-width: thin;
}
.v-banner--mobile {
  align-items: center;
  -webkit-padding-end: 8px;
          padding-inline-end: 8px;
  -webkit-padding-start: 16px;
          padding-inline-start: 16px;
}
.v-banner--rounded {
  border-radius: 4px;
}
.v-banner--density-default.v-banner--one-line {
  padding-top: 10px;
}
.v-banner--density-default.v-banner--two-line {
  padding-top: 24px;
}
.v-banner--density-default.v-banner--three-line {
  padding-top: 24px;
}

.v-banner--density-comfortable.v-banner--one-line {
  padding-top: 6px;
}
.v-banner--density-comfortable.v-banner--two-line {
  padding-top: 20px;
}
.v-banner--density-comfortable.v-banner--three-line {
  padding-top: 20px;
}

.v-banner--density-compact.v-banner--one-line {
  padding-top: 2px;
}
.v-banner--density-compact.v-banner--two-line {
  padding-top: 16px;
}
.v-banner--density-compact.v-banner--three-line {
  padding-top: 16px;
}

.v-banner--sticky {
  top: 0;
}

.v-banner-actions {
  align-items: flex-end;
  display: flex;
  flex: 0 1;
  justify-content: flex-end;
}
.v-banner--mobile .v-banner-actions {
  flex: 1 0;
}

.v-banner-content {
  display: flex;
  flex: 1 1;
  min-width: 0;
  -webkit-padding-end: 90px;
          padding-inline-end: 90px;
}
.v-banner--mobile .v-banner-content {
  flex: 1 1 auto;
  -webkit-padding-end: 8px;
          padding-inline-end: 8px;
}
.v-banner--two-line .v-banner-content {
  margin-bottom: 4px;
}
.v-banner--three-line .v-banner-content {
  margin-bottom: 8px;
}

.v-banner-avatar {
  align-self: flex-start;
  border-radius: 50%;
  -webkit-margin-end: 24px;
          margin-inline-end: 24px;
  -webkit-margin-start: 0;
          margin-inline-start: 0;
  position: relative;
}
.v-banner-avatar::after {
  background: currentColor;
  border-radius: inherit;
  bottom: 0;
  content: "";
  left: 0;
  opacity: var(--v-border-opacity);
  position: absolute;
  right: 0;
  top: 0;
}
.v-banner--mobile .v-banner-avatar {
  -webkit-margin-end: 16px;
          margin-inline-end: 16px;
}
.v-banner--one-line .v-banner-avatar {
  align-self: center;
}

.v-banner-text {
  -webkit-box-orient: vertical;
  align-self: flex-start;
  color: rgb(var(--v-theme-on-surface));
  display: -webkit-box;
  line-height: 1.375rem;
  overflow: hidden;
}
.v-banner--one-line .v-banner-text {
  align-self: center;
}
.v-banner--two-line .v-banner-text {
  -webkit-line-clamp: 2;
}
.v-banner--three-line .v-banner-text {
  -webkit-line-clamp: 3;
}.v-alert {
  padding: 16px;
  position: relative;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  color: rgb(var(--v-theme-on-surface));
}
.v-alert--absolute {
  position: absolute;
}
.v-alert--fixed {
  position: fixed;
}
.v-alert--variant-plain, .v-alert--variant-outlined, .v-alert--variant-text, .v-alert--variant-contained-text {
  background: transparent;
  color: inherit;
}
.v-alert--variant-plain {
  opacity: 0.62;
}
.v-alert--variant-plain:focus, .v-alert--variant-plain:hover {
  opacity: 1;
}
.v-alert--variant-plain .v-alert__overlay {
  display: none;
}
.v-alert--variant-contained {
  background: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  color: rgb(var(--v-theme-on-surface));
  z-index: 1;
}
.v-alert--variant-outlined {
  border: thin solid currentColor;
}
.v-alert--variant-text .v-alert__overlay {
  background: currentColor;
}
.v-alert--variant-contained-text .v-alert__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}
.v-alert.v-alert--border {
  --v-border-opacity: 0.26;
}
.v-alert--border {
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
}
.v-alert:not(.v-alert--prominent) .v-avatar {
  --v-avatar-height: 24px;
}
.v-alert--variant-plain {
  transition: 0.2s opacity cubic-bezier(0.4, 0, 0.2, 1);
}
.v-alert--density-default {
  padding-top: 16px;
  padding-bottom: 16px;
}
.v-alert--density-default.v-alert--prominent .v-alert__avatar {
  -webkit-margin-start: 0px;
          margin-inline-start: 0px;
  -webkit-margin-end: 16px;
          margin-inline-end: 16px;
}
.v-alert--density-default.v-alert--prominent .v-alert__avatar .v-icon {
  font-size: 40px;
}

.v-alert--density-comfortable {
  padding-top: 12px;
  padding-bottom: 12px;
}
.v-alert--density-comfortable.v-alert--prominent .v-alert__avatar {
  -webkit-margin-start: -2px;
          margin-inline-start: -2px;
  -webkit-margin-end: 14px;
          margin-inline-end: 14px;
}
.v-alert--density-comfortable.v-alert--prominent .v-alert__avatar .v-icon {
  font-size: 34px;
}

.v-alert--density-compact {
  padding-top: 8px;
  padding-bottom: 8px;
}
.v-alert--density-compact.v-alert--prominent .v-alert__avatar {
  -webkit-margin-start: -4px;
          margin-inline-start: -4px;
  -webkit-margin-end: 12px;
          margin-inline-end: 12px;
}
.v-alert--density-compact.v-alert--prominent .v-alert__avatar .v-icon {
  font-size: 28px;
}

.v-alert__avatar {
  align-self: flex-start;
  display: flex;
  position: relative;
  -webkit-margin-start: 0;
          margin-inline-start: 0;
  -webkit-margin-end: 16px;
          margin-inline-end: 16px;
}
.v-alert--prominent .v-alert__avatar {
  align-self: center;
  flex: 1 0 auto;
  max-width: 40px;
}
.v-alert--tip .v-alert__avatar {
  -webkit-margin-start: -33px;
          margin-inline-start: -33px;
  max-height: 24px;
  max-width: 24px;
}
.v-alert--tip .v-alert__avatar::before {
  content: "";
  top: 4px;
  left: 4px;
  position: absolute;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: inherit;
}
.v-alert--tip .v-alert__avatar .v-avatar {
  height: auto;
  max-width: inherit;
  max-height: inherit;
}

.v-alert__border {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: var(--v-border-opacity);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  border-color: currentColor;
  border-style: solid;
  border-width: 0;
}
.v-alert__border--border {
  border-width: 8px;
  box-shadow: none;
}
.v-alert--border-start .v-alert__border {
  border-inline-start-width: 8px;
  border-inline-end-width: 0;
}
.v-alert--border-top .v-alert__border {
  border-top-width: 8px;
  border-bottom-width: 0;
}
.v-alert--border-bottom .v-alert__border {
  border-bottom-width: 8px;
  border-top-width: 0;
}
.v-alert--border-end .v-alert__border {
  border-inline-end-width: 8px;
  border-inline-start-width: 0;
}
.v-alert--border.v-alert--tip .v-alert__border {
  --v-border-opacity: 1;
  border-inline-start-width: 6px;
}

.v-alert__close {
  align-self: flex-start;
  display: flex;
  flex: 0 1 auto;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
  -webkit-padding-start: 8px;
          padding-inline-start: 8px;
}
.v-alert__close .v-btn {
  height: inherit;
  width: inherit;
}
.v-alert__close .v-icon {
  font-size: 20px;
}

.v-alert__content {
  display: flex;
}
.v-alert--prominent .v-alert__content {
  align-items: center;
}

.v-alert-text {
  padding: 16px;
}
.v-alert--border-start .v-alert-text {
  -webkit-padding-end: 24px;
          padding-inline-end: 24px;
}
.v-alert--border-end .v-alert-text {
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
}

.v-alert__text {
  display: flex;
  flex: 1 1;
}.v-bottom-navigation {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: fixed;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-bottom-navigation--border {
  border-width: thin;
  box-shadow: none;
}
.v-bottom-navigation--is-active {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.v-bottom-navigation--absolute {
  position: absolute;
}

.v-bottom-navigation__content {
  display: flex;
  flex: none;
  justify-content: center;
  transition: inherit;
  width: 100%;
}.v-breadcrumbs {
  line-height: 1.375rem;
  padding: 16px;
}
.v-breadcrumbs--rounded {
  border-radius: 4px;
}
.v-breadcrumbs--density-default {
  padding-top: 16px;
  padding-bottom: 16px;
}

.v-breadcrumbs--density-comfortable {
  padding-top: 12px;
  padding-bottom: 12px;
}

.v-breadcrumbs--density-compact {
  padding-top: 8px;
  padding-bottom: 8px;
}

.v-breadcrumbs-item {
  align-items: center;
  color: inherit;
  display: inline-flex;
  padding: 0 4px;
  text-decoration: none;
  vertical-align: middle;
}
.v-breadcrumbs-item--disabled {
  opacity: var(--v-disabled-opacity);
  pointer-events: none;
}
.v-breadcrumbs-item--link:hover {
  text-decoration: underline;
}
.v-breadcrumbs-item .v-icon {
  font-size: 1rem;
  -webkit-margin-start: -4px;
          margin-inline-start: -4px;
  -webkit-margin-end: 2px;
          margin-inline-end: 2px;
}

.v-breadcrumbs-divider {
  display: inline-block;
  padding: 0 8px;
  vertical-align: middle;
}.v-card {
  color: rgb(var(--v-theme-on-surface));
  overflow: hidden;
  position: relative;
  padding: 0;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
}
.v-card--border {
  border-width: thin;
  box-shadow: none;
}
.v-card--absolute {
  position: absolute;
}
.v-card--fixed {
  position: fixed;
}
.v-card:hover .v-card__overlay {
  opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
}
.v-card:focus-visible .v-card__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-card:focus .v-card__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
}
.v-card--active:hover.v-card__overlay,
.v-card--active .v-card__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-card--active:focus .v-card__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}
.v-card--variant-plain, .v-card--variant-outlined, .v-card--variant-text, .v-card--variant-contained-text {
  background: transparent;
  color: inherit;
}
.v-card--variant-plain {
  opacity: 0.62;
}
.v-card--variant-plain:focus, .v-card--variant-plain:hover {
  opacity: 1;
}
.v-card--variant-plain .v-card__overlay {
  display: none;
}
.v-card--variant-contained {
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  z-index: 1;
}
.v-card--variant-contained::before {
  border-radius: inherit;
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.v-card--variant-outlined {
  border: thin solid currentColor;
}
.v-card--variant-text .v-card__overlay {
  background: currentColor;
}
.v-card--variant-contained-text .v-card__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}
.v-card--disabled {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.v-card--disabled > [class*=v-card-] {
  opacity: 0.6;
}
.v-card--flat {
  box-shadow: none;
}
.v-card--hover {
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.v-card--hover::before, .v-card--hover::after {
  border-radius: inherit;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
}
.v-card--hover::before {
  opacity: 1;
  z-index: -1;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.v-card--hover::after {
  z-index: 1;
  opacity: 0;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.v-card--hover:hover::after {
  opacity: 1;
}
.v-card--hover:hover::before {
  opacity: 0;
}
.v-card--link {
  cursor: pointer;
}
.v-card--tile {
  border-radius: 0;
}

.v-card-actions {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  min-height: 52px;
  padding: 0.5rem;
}

.v-card-avatar {
  align-self: flex-start;
  padding: 0.5rem 1rem;
}
.v-card-header .v-card-avatar:last-child {
  -webkit-padding-end: 0;
          padding-inline-end: 0;
}
.v-card-header .v-card-avatar:first-child {
  -webkit-padding-start: 0;
          padding-inline-start: 0;
}

.v-card-header-text {
  flex: 1 1 auto;
}

.v-card-img {
  border-radius: inherit;
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
}

.v-card-header {
  align-items: center;
  display: flex;
  padding: 0.5rem 1rem;
}

.v-card-media {
  overflow: hidden;
}

.v-card-subtitle {
  align-items: center;
  display: flex;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: var(--v-medium-emphasis-opacity);
  padding: 0 1rem;
  text-transform: none;
}
.v-card .v-card-subtitle {
  line-height: 1.25rem;
}
.v-card--density-comfortable .v-card-subtitle {
  line-height: 1.125rem;
}
.v-card--density-compact .v-card-subtitle {
  line-height: 1rem;
}
.v-card-header .v-card-subtitle {
  padding: 0;
}

.v-card-text {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: var(--v-medium-emphasis-opacity);
  padding: 1rem;
  text-transform: none;
  transition: inherit;
  transition-property: color, opacity;
}
.v-card .v-card-text {
  line-height: 1.25rem;
}
.v-card--density-comfortable .v-card-text {
  line-height: 1.2rem;
}
.v-card--density-compact .v-card-text {
  line-height: 1.15rem;
}

.v-card-title {
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  font-weight: 500;
  -webkit-hyphens: auto;
          hyphens: auto;
  letter-spacing: 0.0125em;
  overflow-wrap: normal;
  padding: 0.5rem 1rem;
  text-transform: none;
  word-break: normal;
  word-wrap: break-word;
}
.v-card .v-card-title {
  line-height: 2rem;
}
.v-card--density-comfortable .v-card-title {
  line-height: 1.75rem;
}
.v-card--density-compact .v-card-title {
  line-height: 1.55rem;
}
.v-card-header .v-card-title {
  padding: 0;
}

.v-card__overlay {
  background-color: currentColor;
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.v-card__overlay + .v-card-media {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}.v-btn {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  outline: none;
  overflow: visible;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-property: box-shadow, transform, opacity, color;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
}
.v-btn--size-x-small {
  --v-btn-size: 0.625rem;
  --v-btn-height: 20px;
  font-size: 0.625rem;
  min-width: 36px;
  padding: 0 8px;
}

.v-btn--size-small {
  --v-btn-size: 0.75rem;
  --v-btn-height: 28px;
  font-size: 0.75rem;
  min-width: 50px;
  padding: 0 12px;
}

.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 36px;
  font-size: 0.875rem;
  min-width: 64px;
  padding: 0 16px;
}

.v-btn--size-large {
  --v-btn-size: 1rem;
  --v-btn-height: 44px;
  font-size: 1rem;
  min-width: 78px;
  padding: 0 20px;
}

.v-btn--size-x-large {
  --v-btn-size: 1.125rem;
  --v-btn-height: 52px;
  font-size: 1.125rem;
  min-width: 92px;
  padding: 0 24px;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}

.v-btn.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -8px);
}

.v-btn.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -12px);
}

.v-btn--border {
  border-width: thin;
  box-shadow: none;
}
.v-btn:hover .v-btn__overlay {
  opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
}
.v-btn:focus-visible .v-btn__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-btn:focus .v-btn__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--variant-plain, .v-btn--variant-outlined, .v-btn--variant-text, .v-btn--variant-contained-text {
  background: transparent;
  color: inherit;
}
.v-btn--variant-plain {
  opacity: 0.62;
}
.v-btn--variant-plain:focus, .v-btn--variant-plain:hover {
  opacity: 1;
}
.v-btn--variant-plain .v-btn__overlay {
  display: none;
}
.v-btn--variant-contained {
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  z-index: 1;
}
.v-btn--variant-contained::before {
  border-radius: inherit;
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.v-btn--variant-outlined {
  border: thin solid currentColor;
}
.v-btn--variant-text .v-btn__overlay {
  background: currentColor;
}
.v-btn--variant-contained-text .v-btn__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}
@supports selector(:focus-visible) {
  .v-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 2px solid currentColor;
    border-radius: inherit;
    opacity: 0;
    transform: scale(1.25);
    transition: opacity 0.2s ease-in-out, transform 0.2s step-end;
  }
  .v-btn:focus-visible::after {
    opacity: calc(.25 * var(--v-theme-overlay-multiplier));
    transform: scale(1);
    transition: opacity 0.2s ease-in-out, transform 0.2s cubic-bezier(0, 0, 0.2, 1);
  }
}
.v-btn--flat {
  box-shadow: none;
}
.v-btn--icon {
  border-radius: 50%;
  min-width: 0;
  padding: 0;
  font-size: 1rem;
}
.v-btn--icon.v-btn--density-default {
  width: calc(var(--v-btn-height) + 12px);
  height: calc(var(--v-btn-height) + 12px);
}
.v-btn--icon.v-btn--density-comfortable {
  width: calc(var(--v-btn-height) + 0px);
  height: calc(var(--v-btn-height) + 0px);
}
.v-btn--icon.v-btn--density-compact {
  width: calc(var(--v-btn-height) + -8px);
  height: calc(var(--v-btn-height) + -8px);
}

.v-btn--elevated:hover, .v-btn--elevated:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.v-btn--elevated:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.v-btn--block {
  display: flex;
  flex: 1 0 auto;
  min-width: 100%;
}
.v-btn--disabled {
  pointer-events: none;
}
.v-btn--disabled.v-btn--disabled {
  color: rgba(var(--v-theme-on-surface), 0.26);
  opacity: 1;
}
.v-btn--disabled.v-btn--variant-contained {
  background: rgb(var(--v-theme-surface));
  box-shadow: none;
}
.v-btn--disabled.v-btn--variant-contained .v-btn__overlay {
  opacity: 0.4615384615;
}
.v-btn--stacked {
  flex-direction: column;
  line-height: 1.7;
}
.v-btn--stacked.v-btn--size-x-small {
  --v-btn-size: 0.625rem;
  --v-btn-height: 56px;
  font-size: 0.625rem;
  min-width: 56px;
  padding: 0 12px;
}

.v-btn--stacked.v-btn--size-small {
  --v-btn-size: 0.75rem;
  --v-btn-height: 64px;
  font-size: 0.75rem;
  min-width: 64px;
  padding: 0 14px;
}

.v-btn--stacked.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 72px;
  font-size: 0.875rem;
  min-width: 72px;
  padding: 0 16px;
}

.v-btn--stacked.v-btn--size-large {
  --v-btn-size: 1rem;
  --v-btn-height: 80px;
  font-size: 1rem;
  min-width: 80px;
  padding: 0 18px;
}

.v-btn--stacked.v-btn--size-x-large {
  --v-btn-size: 1.125rem;
  --v-btn-height: 88px;
  font-size: 1.125rem;
  min-width: 88px;
  padding: 0 20px;
}

.v-btn--stacked.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}

.v-btn--stacked.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -16px);
}

.v-btn--stacked.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -24px);
}

.v-btn__overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.v-app-bar .v-btn {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}

.v-bottom-navigation .v-btn {
  filter: grayscale(1);
  flex-direction: column;
  font-size: 0.75rem;
  height: auto;
  max-width: 168px;
  min-width: 80px;
  opacity: 0.64;
  text-transform: none;
  transition-duration: 0.2s;
  transition-property: transform, opacity, filter;
  width: auto;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0;
}
.v-bottom-navigation--grow .v-btn {
  width: 100%;
}
.v-bottom-navigation--horizontal .v-btn {
  flex-direction: row;
}
.v-bottom-navigation--shift .v-btn > .v-icon {
  transform: translateY(0);
  transition: inherit;
}
.v-bottom-navigation--shift .v-btn > *:not([class*=v-]) {
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: scale(0.8) translateY(10px);
  transition: inherit;
}
.v-bottom-navigation .v-btn--active {
  filter: grayscale(0);
  opacity: 1;
}
.v-bottom-navigation .v-btn--active:hover.v-btn__overlay,
.v-bottom-navigation .v-btn--active .v-btn__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-bottom-navigation .v-btn--active:focus .v-btn__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}
.v-bottom-navigation--shift .v-btn--active > .v-icon {
  transform: translateY(-7px);
}
.v-bottom-navigation--shift .v-btn--active > *:not([class*=v-]) {
  opacity: 1;
  transform: scale(1) translateY(5px);
}

.v-card-actions .v-btn {
  padding: 0 8px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.v-card-actions .v-btn ~ .v-btn {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

.v-banner-actions .v-btn {
  padding: 0 8px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}

.v-pagination .v-btn {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.v-pagination .v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
  width: calc(var(--v-btn-height) + 0px);
}
.v-pagination .v-btn.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -4px);
  width: calc(var(--v-btn-height) + -4px);
}
.v-pagination .v-btn.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -8px);
  width: calc(var(--v-btn-height) + -8px);
}
.v-pagination__list .v-btn--elevated {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.v-pagination__item--is-active .v-btn__overlay {
  opacity: var(--v-border-opacity);
}.v-counter {
  flex: 0 1 auto;
  font-size: 12px;
}.v-divider {
  display: block;
  flex: 1 1 100%;
  height: 0px;
  max-height: 0px;
  transition: inherit;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: thin 0 0 0;
}
.v-divider--vertical {
  align-self: stretch;
  border-width: 0 thin 0 0;
  display: inline-flex;
  height: inherit;
  margin-left: -1px;
  max-height: 100%;
  max-width: 0px;
  vertical-align: text-bottom;
  width: 0px;
}
.v-divider--inset:not(.v-divider--vertical) {
  max-width: calc(100% - 72px);
  -webkit-margin-start: 72px;
          margin-inline-start: 72px;
}
.v-divider--inset.v-divider--vertical {
  margin-bottom: 8px;
  margin-top: 8px;
  max-height: calc(100% - 16px);
}.v-dialog {
  z-index: 2400;
  align-items: center;
  justify-content: center;
}
.v-dialog .v-overlay__content {
  max-height: 360px;
  min-width: 240px;
  max-width: 560px;
  border-radius: 4px;
}
@media (max-width: 959px) {
  .v-dialog .v-overlay__content {
    max-width: 280px;
  }
}
.v-dialog .v-overlay__content > .v-card,
.v-dialog .v-overlay__content > .v-sheet {
  border-radius: inherit;
  overflow: hidden;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}
.v-dialog .v-overlay__content > .v-card > .v-card-avatar {
  padding: 0;
}
.v-dialog .v-overlay__content > .v-card > .v-card-header {
  padding: 14px 24px 0;
}
.v-dialog .v-overlay__content > .v-card > .v-card-header + .v-card-text {
  padding-top: 10px;
}
.v-dialog .v-overlay__content > .v-card > .v-card-text {
  font-size: inherit;
  letter-spacing: 0.03125em;
  line-height: inherit;
  padding: 16px 24px 10px;
}

.v-dialog--fullscreen {
  --v-scrollbar-offset: 0px;
}
.v-dialog--fullscreen .v-overlay__content {
  border-radius: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
}.v-expansion-panel {
  background-color: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-expansion-panel:not(:first-child)::after {
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
}
.v-expansion-panel--disabled .v-expansion-panel-title {
  color: rgba(var(--v-theme-on-surface), 0.26);
}
.v-expansion-panel--disabled .v-expansion-panel-title .v-expansion-panel-title__overlay {
  opacity: 0.4615384615;
}

.v-expansion-panels {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
}
.v-expansion-panels:not(.v-expansion-panels--variant-accordion) > :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active) {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.v-expansion-panels:not(.v-expansion-panels--variant-accordion) > :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.v-expansion-panels:not(.v-expansion-panels--variant-accordion) > :first-child:not(.v-expansion-panel--active):not(.v-expansion-panel--before-active) {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.v-expansion-panels:not(.v-expansion-panels--variant-accordion) > :last-child:not(.v-expansion-panel--active):not(.v-expansion-panel--after-active) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.v-expansion-panels--variant-accordion > :first-child {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.v-expansion-panels--variant-accordion > :last-child {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.v-expansion-panels--variant-accordion > :last-child .v-expansion-panel-title--active {
  border-bottom-left-radius: initial;
  border-bottom-right-radius: initial;
}
.v-expansion-panels--variant-accordion > :not(:first-child):not(:last-child) {
  border-radius: 0 !important;
}
.v-expansion-panels--variant-accordion .v-expansion-panel-title__overlay {
  transition: 0.3s border-radius cubic-bezier(0.4, 0, 0.2, 1);
}

.v-expansion-panel {
  flex: 1 0 100%;
  max-width: 100%;
  position: relative;
  transition: 0.3s all cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: margin-top, border-radius, border, max-width;
  border-radius: 4px;
}
.v-expansion-panel:not(:first-child)::after {
  border-top-style: solid;
  border-top-width: thin;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s opacity cubic-bezier(0.4, 0, 0.2, 1);
}
.v-expansion-panel--disabled .v-expansion-panel-title {
  pointer-events: none;
}
.v-expansion-panel--active:not(:first-child),
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 16px;
}
.v-expansion-panel--active:not(:first-child)::after,
.v-expansion-panel--active + .v-expansion-panel::after {
  opacity: 0;
}
.v-expansion-panel--active > .v-expansion-panel-title {
  min-height: 64px;
}

.v-expansion-panel__shadow {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: inherit;
  z-index: -1;
}

.v-expansion-panel-title {
  align-items: center;
  border-radius: inherit;
  display: flex;
  font-size: 0.9375rem;
  line-height: 1;
  min-height: 48px;
  outline: none;
  padding: 16px 24px;
  position: relative;
  transition: 0.3s min-height cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  justify-content: space-between;
}
.v-expansion-panel-title:hover .v-expansion-panel-title__overlay {
  opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
}
.v-expansion-panel-title:focus-visible .v-expansion-panel-title__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-expansion-panel-title:focus .v-expansion-panel-title__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
}
.v-expansion-panel-title--active:hover.v-expansion-panel-title__overlay,
.v-expansion-panel-title--active .v-expansion-panel-title__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-expansion-panel-title--active:focus .v-expansion-panel-title__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}
.v-expansion-panel-title--active::before {
  opacity: 0.12;
}

.v-expansion-panel-title__overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  border-radius: inherit;
  opacity: 0;
}

.v-expansion-panel-title__icon {
  display: inline-flex;
  margin-bottom: -4px;
  margin-top: -4px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}

.v-expansion-panel-text {
  display: flex;
}
.v-expansion-panel-text__wrapper {
  padding: 8px 24px 16px;
  flex: 1 1 auto;
  max-width: 100%;
}

.v-expansion-panels--variant-accordion > .v-expansion-panel {
  margin-top: 0;
}
.v-expansion-panels--variant-accordion > .v-expansion-panel::after {
  opacity: 1;
}

.v-expansion-panels--variant-popout > .v-expansion-panel {
  max-width: calc(100% - 32px);
}
.v-expansion-panels--variant-popout > .v-expansion-panel--active {
  max-width: calc(100% + 16px);
}

.v-expansion-panels--variant-inset > .v-expansion-panel {
  max-width: 100%;
}
.v-expansion-panels--variant-inset > .v-expansion-panel--active {
  max-width: calc(100% - 32px);
}.v-chip {
  align-items: center;
  cursor: default;
  display: inline-flex;
  position: relative;
  text-decoration: none;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 9999px;
}
.v-chip--size-x-small {
  --v-chip-size: 0.625rem;
  --v-chip-height: 16px;
  font-size: 0.625rem;
  padding: 0 6px;
}
.v-chip--size-x-small .v-avatar {
  --v-avatar-height: 8px;
}
.v-chip--pill.v-chip--size-x-small .v-avatar {
  --v-avatar-height: 16px;
}

.v-chip--size-x-small .v-chip__prepend {
  -webkit-margin-start: -3px;
          margin-inline-start: -3px;
  -webkit-margin-end: 3px;
          margin-inline-end: 3px;
}
.v-chip--pill.v-chip--size-x-small .v-chip__prepend {
  -webkit-margin-start: -6px;
          margin-inline-start: -6px;
}

.v-chip--size-x-small .v-chip__append {
  -webkit-margin-end: -3px;
          margin-inline-end: -3px;
  -webkit-margin-start: 3px;
          margin-inline-start: 3px;
}
.v-chip--pill.v-chip--size-x-small .v-chip__append {
  -webkit-margin-end: -6px;
          margin-inline-end: -6px;
}

.v-chip--size-small {
  --v-chip-size: 0.75rem;
  --v-chip-height: 24px;
  font-size: 0.75rem;
  padding: 0 9px;
}
.v-chip--size-small .v-avatar {
  --v-avatar-height: 16px;
}
.v-chip--pill.v-chip--size-small .v-avatar {
  --v-avatar-height: 24px;
}

.v-chip--size-small .v-chip__prepend {
  -webkit-margin-start: -4.5px;
          margin-inline-start: -4.5px;
  -webkit-margin-end: 4.5px;
          margin-inline-end: 4.5px;
}
.v-chip--pill.v-chip--size-small .v-chip__prepend {
  -webkit-margin-start: -9px;
          margin-inline-start: -9px;
}

.v-chip--size-small .v-chip__append {
  -webkit-margin-end: -4.5px;
          margin-inline-end: -4.5px;
  -webkit-margin-start: 4.5px;
          margin-inline-start: 4.5px;
}
.v-chip--pill.v-chip--size-small .v-chip__append {
  -webkit-margin-end: -9px;
          margin-inline-end: -9px;
}

.v-chip--size-default {
  --v-chip-size: 0.875rem;
  --v-chip-height: 32px;
  font-size: 0.875rem;
  padding: 0 12px;
}
.v-chip--size-default .v-avatar {
  --v-avatar-height: 24px;
}
.v-chip--pill.v-chip--size-default .v-avatar {
  --v-avatar-height: 32px;
}

.v-chip--size-default .v-chip__prepend {
  -webkit-margin-start: -6px;
          margin-inline-start: -6px;
  -webkit-margin-end: 6px;
          margin-inline-end: 6px;
}
.v-chip--pill.v-chip--size-default .v-chip__prepend {
  -webkit-margin-start: -12px;
          margin-inline-start: -12px;
}

.v-chip--size-default .v-chip__append {
  -webkit-margin-end: -6px;
          margin-inline-end: -6px;
  -webkit-margin-start: 6px;
          margin-inline-start: 6px;
}
.v-chip--pill.v-chip--size-default .v-chip__append {
  -webkit-margin-end: -12px;
          margin-inline-end: -12px;
}

.v-chip--size-large {
  --v-chip-size: 1rem;
  --v-chip-height: 40px;
  font-size: 1rem;
  padding: 0 15px;
}
.v-chip--size-large .v-avatar {
  --v-avatar-height: 32px;
}
.v-chip--pill.v-chip--size-large .v-avatar {
  --v-avatar-height: 40px;
}

.v-chip--size-large .v-chip__prepend {
  -webkit-margin-start: -7.5px;
          margin-inline-start: -7.5px;
  -webkit-margin-end: 7.5px;
          margin-inline-end: 7.5px;
}
.v-chip--pill.v-chip--size-large .v-chip__prepend {
  -webkit-margin-start: -15px;
          margin-inline-start: -15px;
}

.v-chip--size-large .v-chip__append {
  -webkit-margin-end: -7.5px;
          margin-inline-end: -7.5px;
  -webkit-margin-start: 7.5px;
          margin-inline-start: 7.5px;
}
.v-chip--pill.v-chip--size-large .v-chip__append {
  -webkit-margin-end: -15px;
          margin-inline-end: -15px;
}

.v-chip--size-x-large {
  --v-chip-size: 1.125rem;
  --v-chip-height: 48px;
  font-size: 1.125rem;
  padding: 0 18px;
}
.v-chip--size-x-large .v-avatar {
  --v-avatar-height: 40px;
}
.v-chip--pill.v-chip--size-x-large .v-avatar {
  --v-avatar-height: 48px;
}

.v-chip--size-x-large .v-chip__prepend {
  -webkit-margin-start: -9px;
          margin-inline-start: -9px;
  -webkit-margin-end: 9px;
          margin-inline-end: 9px;
}
.v-chip--pill.v-chip--size-x-large .v-chip__prepend {
  -webkit-margin-start: -18px;
          margin-inline-start: -18px;
}

.v-chip--size-x-large .v-chip__append {
  -webkit-margin-end: -9px;
          margin-inline-end: -9px;
  -webkit-margin-start: 9px;
          margin-inline-start: 9px;
}
.v-chip--pill.v-chip--size-x-large .v-chip__append {
  -webkit-margin-end: -18px;
          margin-inline-end: -18px;
}

.v-chip.v-chip--density-default {
  height: calc(var(--v-chip-height) + 0px);
}

.v-chip.v-chip--density-comfortable {
  height: calc(var(--v-chip-height) + -8px);
}

.v-chip.v-chip--density-compact {
  height: calc(var(--v-chip-height) + -12px);
}

.v-chip--variant-plain, .v-chip--variant-outlined, .v-chip--variant-text, .v-chip--variant-contained-text {
  background: transparent;
  color: inherit;
}
.v-chip--variant-plain {
  opacity: 0.26;
}
.v-chip--variant-plain:focus, .v-chip--variant-plain:hover {
  opacity: 1;
}
.v-chip--variant-plain .v-chip__overlay {
  display: none;
}
.v-chip--variant-contained {
  background: rgba(var(--v-theme-on-surface), var(--v-activated-opacity));
  color: currentColor;
  z-index: 1;
}
.v-chip--variant-outlined {
  border: thin solid currentColor;
}
.v-chip--variant-text .v-chip__overlay {
  background: currentColor;
}
.v-chip--variant-contained-text .v-chip__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}
.v-chip--border {
  border-width: thin;
}
.v-chip--link {
  cursor: pointer;
}
.v-chip--label {
  border-radius: 8px;
}

.v-chip__append {
  -webkit-margin-start: 8px;
          margin-inline-start: 8px;
  -webkit-margin-end: 0;
          margin-inline-end: 0;
}
.v-chip__append + .v-chip__close {
  -webkit-margin-start: 0;
          margin-inline-start: 0;
}

.v-chip__prepend {
  -webkit-margin-start: -12px;
          margin-inline-start: -12px;
  -webkit-margin-end: 8px;
          margin-inline-end: 8px;
}

.v-chip__close {
  align-self: center;
  cursor: pointer;
  display: inline-flex;
  flex: 0 1 auto;
  font-size: 18px;
  max-height: 18px;
  max-width: 18px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  -webkit-margin-start: 8px;
          margin-inline-start: 8px;
  -webkit-margin-end: -4px;
          margin-inline-end: -4px;
}
.v-chip__close .v-icon {
  font-size: inherit;
}

.v-chip--disabled {
  opacity: 0.3;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.v-chip--label {
  border-radius: 8px;
}.v-container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 960px) {
  .v-container {
    max-width: 900px;
  }
}
@media (min-width: 1280px) {
  .v-container {
    max-width: 1200px;
  }
}
@media (min-width: 1920px) {
  .v-container {
    max-width: 1800px;
  }
}
@media (min-width: 2560px) {
  .v-container {
    max-width: 2400px;
  }
}
.v-container--fluid {
  max-width: 100%;
}

.v-row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}
.v-row + .row {
  margin-top: 12px;
}
.v-row + .row--dense {
  margin-top: 4px;
}
.v-row--dense {
  margin: -4px;
}
.v-row--dense > .v-col,
.v-row--dense > [class*=v-col-] {
  padding: 4px;
}
.v-row.v-row--no-gutters {
  margin: 0;
}
.v-row.v-row--no-gutters > .v-col,
.v-row.v-row--no-gutters > [class*=v-col-] {
  padding: 0;
}

.v-col-xxl,
.v-col-xxl-auto, .v-col-xxl-12, .v-col-xxl-11, .v-col-xxl-10, .v-col-xxl-9, .v-col-xxl-8, .v-col-xxl-7, .v-col-xxl-6, .v-col-xxl-5, .v-col-xxl-4, .v-col-xxl-3, .v-col-xxl-2, .v-col-xxl-1, .v-col-xl,
.v-col-xl-auto, .v-col-xl-12, .v-col-xl-11, .v-col-xl-10, .v-col-xl-9, .v-col-xl-8, .v-col-xl-7, .v-col-xl-6, .v-col-xl-5, .v-col-xl-4, .v-col-xl-3, .v-col-xl-2, .v-col-xl-1, .v-col-lg,
.v-col-lg-auto, .v-col-lg-12, .v-col-lg-11, .v-col-lg-10, .v-col-lg-9, .v-col-lg-8, .v-col-lg-7, .v-col-lg-6, .v-col-lg-5, .v-col-lg-4, .v-col-lg-3, .v-col-lg-2, .v-col-lg-1, .v-col-md,
.v-col-md-auto, .v-col-md-12, .v-col-md-11, .v-col-md-10, .v-col-md-9, .v-col-md-8, .v-col-md-7, .v-col-md-6, .v-col-md-5, .v-col-md-4, .v-col-md-3, .v-col-md-2, .v-col-md-1, .v-col-sm,
.v-col-sm-auto, .v-col-sm-12, .v-col-sm-11, .v-col-sm-10, .v-col-sm-9, .v-col-sm-8, .v-col-sm-7, .v-col-sm-6, .v-col-sm-5, .v-col-sm-4, .v-col-sm-3, .v-col-sm-2, .v-col-sm-1, .v-col,
.v-col-auto, .v-col-12, .v-col-11, .v-col-10, .v-col-9, .v-col-8, .v-col-7, .v-col-6, .v-col-5, .v-col-4, .v-col-3, .v-col-2, .v-col-1 {
  width: 100%;
  padding: 12px;
}

.v-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.v-col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.v-col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

.v-col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.v-col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.v-col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.v-col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.v-col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.v-col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}

.v-col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}

.v-col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.v-col-10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.v-col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}

.v-col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.offset-1.v-locale--is-ltr, .v-locale--is-ltr .offset-1 {
  margin-left: 8.3333333333%;
}
.offset-1.v-locale--is-rtl, .v-locale--is-rtl .offset-1 {
  margin-right: 8.3333333333%;
}

.offset-2.v-locale--is-ltr, .v-locale--is-ltr .offset-2 {
  margin-left: 16.6666666667%;
}
.offset-2.v-locale--is-rtl, .v-locale--is-rtl .offset-2 {
  margin-right: 16.6666666667%;
}

.offset-3.v-locale--is-ltr, .v-locale--is-ltr .offset-3 {
  margin-left: 25%;
}
.offset-3.v-locale--is-rtl, .v-locale--is-rtl .offset-3 {
  margin-right: 25%;
}

.offset-4.v-locale--is-ltr, .v-locale--is-ltr .offset-4 {
  margin-left: 33.3333333333%;
}
.offset-4.v-locale--is-rtl, .v-locale--is-rtl .offset-4 {
  margin-right: 33.3333333333%;
}

.offset-5.v-locale--is-ltr, .v-locale--is-ltr .offset-5 {
  margin-left: 41.6666666667%;
}
.offset-5.v-locale--is-rtl, .v-locale--is-rtl .offset-5 {
  margin-right: 41.6666666667%;
}

.offset-6.v-locale--is-ltr, .v-locale--is-ltr .offset-6 {
  margin-left: 50%;
}
.offset-6.v-locale--is-rtl, .v-locale--is-rtl .offset-6 {
  margin-right: 50%;
}

.offset-7.v-locale--is-ltr, .v-locale--is-ltr .offset-7 {
  margin-left: 58.3333333333%;
}
.offset-7.v-locale--is-rtl, .v-locale--is-rtl .offset-7 {
  margin-right: 58.3333333333%;
}

.offset-8.v-locale--is-ltr, .v-locale--is-ltr .offset-8 {
  margin-left: 66.6666666667%;
}
.offset-8.v-locale--is-rtl, .v-locale--is-rtl .offset-8 {
  margin-right: 66.6666666667%;
}

.offset-9.v-locale--is-ltr, .v-locale--is-ltr .offset-9 {
  margin-left: 75%;
}
.offset-9.v-locale--is-rtl, .v-locale--is-rtl .offset-9 {
  margin-right: 75%;
}

.offset-10.v-locale--is-ltr, .v-locale--is-ltr .offset-10 {
  margin-left: 83.3333333333%;
}
.offset-10.v-locale--is-rtl, .v-locale--is-rtl .offset-10 {
  margin-right: 83.3333333333%;
}

.offset-11.v-locale--is-ltr, .v-locale--is-ltr .offset-11 {
  margin-left: 91.6666666667%;
}
.offset-11.v-locale--is-rtl, .v-locale--is-rtl .offset-11 {
  margin-right: 91.6666666667%;
}

@media (min-width: 600px) {
  .v-col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .v-col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .v-col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .v-col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .v-col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .v-col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .v-col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .v-col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .v-col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .v-col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .v-col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .v-col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .v-col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .v-col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-sm-0.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-0.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-0 {
    margin-right: 0;
  }

  .offset-sm-1.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-1 {
    margin-left: 8.3333333333%;
  }
  .offset-sm-1.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-1 {
    margin-right: 8.3333333333%;
  }

  .offset-sm-2.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-2 {
    margin-left: 16.6666666667%;
  }
  .offset-sm-2.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-2 {
    margin-right: 16.6666666667%;
  }

  .offset-sm-3.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-3.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-3 {
    margin-right: 25%;
  }

  .offset-sm-4.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-4 {
    margin-left: 33.3333333333%;
  }
  .offset-sm-4.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-4 {
    margin-right: 33.3333333333%;
  }

  .offset-sm-5.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-5 {
    margin-left: 41.6666666667%;
  }
  .offset-sm-5.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-5 {
    margin-right: 41.6666666667%;
  }

  .offset-sm-6.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-6.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-6 {
    margin-right: 50%;
  }

  .offset-sm-7.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-7 {
    margin-left: 58.3333333333%;
  }
  .offset-sm-7.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-7 {
    margin-right: 58.3333333333%;
  }

  .offset-sm-8.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-8 {
    margin-left: 66.6666666667%;
  }
  .offset-sm-8.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-8 {
    margin-right: 66.6666666667%;
  }

  .offset-sm-9.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-9.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-9 {
    margin-right: 75%;
  }

  .offset-sm-10.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-10 {
    margin-left: 83.3333333333%;
  }
  .offset-sm-10.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-10 {
    margin-right: 83.3333333333%;
  }

  .offset-sm-11.v-locale--is-ltr, .v-locale--is-ltr .offset-sm-11 {
    margin-left: 91.6666666667%;
  }
  .offset-sm-11.v-locale--is-rtl, .v-locale--is-rtl .offset-sm-11 {
    margin-right: 91.6666666667%;
  }
}
@media (min-width: 960px) {
  .v-col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .v-col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .v-col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .v-col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .v-col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .v-col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .v-col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .v-col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .v-col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .v-col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .v-col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .v-col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .v-col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .v-col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-md-0.v-locale--is-ltr, .v-locale--is-ltr .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-0.v-locale--is-rtl, .v-locale--is-rtl .offset-md-0 {
    margin-right: 0;
  }

  .offset-md-1.v-locale--is-ltr, .v-locale--is-ltr .offset-md-1 {
    margin-left: 8.3333333333%;
  }
  .offset-md-1.v-locale--is-rtl, .v-locale--is-rtl .offset-md-1 {
    margin-right: 8.3333333333%;
  }

  .offset-md-2.v-locale--is-ltr, .v-locale--is-ltr .offset-md-2 {
    margin-left: 16.6666666667%;
  }
  .offset-md-2.v-locale--is-rtl, .v-locale--is-rtl .offset-md-2 {
    margin-right: 16.6666666667%;
  }

  .offset-md-3.v-locale--is-ltr, .v-locale--is-ltr .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-3.v-locale--is-rtl, .v-locale--is-rtl .offset-md-3 {
    margin-right: 25%;
  }

  .offset-md-4.v-locale--is-ltr, .v-locale--is-ltr .offset-md-4 {
    margin-left: 33.3333333333%;
  }
  .offset-md-4.v-locale--is-rtl, .v-locale--is-rtl .offset-md-4 {
    margin-right: 33.3333333333%;
  }

  .offset-md-5.v-locale--is-ltr, .v-locale--is-ltr .offset-md-5 {
    margin-left: 41.6666666667%;
  }
  .offset-md-5.v-locale--is-rtl, .v-locale--is-rtl .offset-md-5 {
    margin-right: 41.6666666667%;
  }

  .offset-md-6.v-locale--is-ltr, .v-locale--is-ltr .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-6.v-locale--is-rtl, .v-locale--is-rtl .offset-md-6 {
    margin-right: 50%;
  }

  .offset-md-7.v-locale--is-ltr, .v-locale--is-ltr .offset-md-7 {
    margin-left: 58.3333333333%;
  }
  .offset-md-7.v-locale--is-rtl, .v-locale--is-rtl .offset-md-7 {
    margin-right: 58.3333333333%;
  }

  .offset-md-8.v-locale--is-ltr, .v-locale--is-ltr .offset-md-8 {
    margin-left: 66.6666666667%;
  }
  .offset-md-8.v-locale--is-rtl, .v-locale--is-rtl .offset-md-8 {
    margin-right: 66.6666666667%;
  }

  .offset-md-9.v-locale--is-ltr, .v-locale--is-ltr .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-9.v-locale--is-rtl, .v-locale--is-rtl .offset-md-9 {
    margin-right: 75%;
  }

  .offset-md-10.v-locale--is-ltr, .v-locale--is-ltr .offset-md-10 {
    margin-left: 83.3333333333%;
  }
  .offset-md-10.v-locale--is-rtl, .v-locale--is-rtl .offset-md-10 {
    margin-right: 83.3333333333%;
  }

  .offset-md-11.v-locale--is-ltr, .v-locale--is-ltr .offset-md-11 {
    margin-left: 91.6666666667%;
  }
  .offset-md-11.v-locale--is-rtl, .v-locale--is-rtl .offset-md-11 {
    margin-right: 91.6666666667%;
  }
}
@media (min-width: 1280px) {
  .v-col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .v-col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .v-col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .v-col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .v-col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .v-col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .v-col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .v-col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .v-col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .v-col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .v-col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .v-col-lg-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .v-col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .v-col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-lg-0.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-0.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-0 {
    margin-right: 0;
  }

  .offset-lg-1.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-1 {
    margin-left: 8.3333333333%;
  }
  .offset-lg-1.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-1 {
    margin-right: 8.3333333333%;
  }

  .offset-lg-2.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-2 {
    margin-left: 16.6666666667%;
  }
  .offset-lg-2.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-2 {
    margin-right: 16.6666666667%;
  }

  .offset-lg-3.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-3.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-3 {
    margin-right: 25%;
  }

  .offset-lg-4.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-4 {
    margin-left: 33.3333333333%;
  }
  .offset-lg-4.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-4 {
    margin-right: 33.3333333333%;
  }

  .offset-lg-5.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-5 {
    margin-left: 41.6666666667%;
  }
  .offset-lg-5.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-5 {
    margin-right: 41.6666666667%;
  }

  .offset-lg-6.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-6.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-6 {
    margin-right: 50%;
  }

  .offset-lg-7.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-7 {
    margin-left: 58.3333333333%;
  }
  .offset-lg-7.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-7 {
    margin-right: 58.3333333333%;
  }

  .offset-lg-8.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-8 {
    margin-left: 66.6666666667%;
  }
  .offset-lg-8.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-8 {
    margin-right: 66.6666666667%;
  }

  .offset-lg-9.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-9.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-9 {
    margin-right: 75%;
  }

  .offset-lg-10.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-10 {
    margin-left: 83.3333333333%;
  }
  .offset-lg-10.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-10 {
    margin-right: 83.3333333333%;
  }

  .offset-lg-11.v-locale--is-ltr, .v-locale--is-ltr .offset-lg-11 {
    margin-left: 91.6666666667%;
  }
  .offset-lg-11.v-locale--is-rtl, .v-locale--is-rtl .offset-lg-11 {
    margin-right: 91.6666666667%;
  }
}
@media (min-width: 1920px) {
  .v-col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .v-col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .v-col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .v-col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .v-col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .v-col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .v-col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .v-col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .v-col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .v-col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .v-col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .v-col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .v-col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .v-col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-xl-0.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-0.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-0 {
    margin-right: 0;
  }

  .offset-xl-1.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-1 {
    margin-left: 8.3333333333%;
  }
  .offset-xl-1.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-1 {
    margin-right: 8.3333333333%;
  }

  .offset-xl-2.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-2 {
    margin-left: 16.6666666667%;
  }
  .offset-xl-2.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-2 {
    margin-right: 16.6666666667%;
  }

  .offset-xl-3.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-3.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-3 {
    margin-right: 25%;
  }

  .offset-xl-4.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-4 {
    margin-left: 33.3333333333%;
  }
  .offset-xl-4.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-4 {
    margin-right: 33.3333333333%;
  }

  .offset-xl-5.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-5 {
    margin-left: 41.6666666667%;
  }
  .offset-xl-5.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-5 {
    margin-right: 41.6666666667%;
  }

  .offset-xl-6.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-6.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-6 {
    margin-right: 50%;
  }

  .offset-xl-7.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-7 {
    margin-left: 58.3333333333%;
  }
  .offset-xl-7.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-7 {
    margin-right: 58.3333333333%;
  }

  .offset-xl-8.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-8 {
    margin-left: 66.6666666667%;
  }
  .offset-xl-8.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-8 {
    margin-right: 66.6666666667%;
  }

  .offset-xl-9.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-9.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-9 {
    margin-right: 75%;
  }

  .offset-xl-10.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-10 {
    margin-left: 83.3333333333%;
  }
  .offset-xl-10.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-10 {
    margin-right: 83.3333333333%;
  }

  .offset-xl-11.v-locale--is-ltr, .v-locale--is-ltr .offset-xl-11 {
    margin-left: 91.6666666667%;
  }
  .offset-xl-11.v-locale--is-rtl, .v-locale--is-rtl .offset-xl-11 {
    margin-right: 91.6666666667%;
  }
}
@media (min-width: 2560px) {
  .v-col-xxl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .v-col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .v-col-xxl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .v-col-xxl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .v-col-xxl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .v-col-xxl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .v-col-xxl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .v-col-xxl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .v-col-xxl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .v-col-xxl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .v-col-xxl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .v-col-xxl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .v-col-xxl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .v-col-xxl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-xxl-0.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-0.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-0 {
    margin-right: 0;
  }

  .offset-xxl-1.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-1 {
    margin-left: 8.3333333333%;
  }
  .offset-xxl-1.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-1 {
    margin-right: 8.3333333333%;
  }

  .offset-xxl-2.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-2 {
    margin-left: 16.6666666667%;
  }
  .offset-xxl-2.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-2 {
    margin-right: 16.6666666667%;
  }

  .offset-xxl-3.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-3.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-3 {
    margin-right: 25%;
  }

  .offset-xxl-4.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-4 {
    margin-left: 33.3333333333%;
  }
  .offset-xxl-4.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-4 {
    margin-right: 33.3333333333%;
  }

  .offset-xxl-5.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-5 {
    margin-left: 41.6666666667%;
  }
  .offset-xxl-5.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-5 {
    margin-right: 41.6666666667%;
  }

  .offset-xxl-6.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-6.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-6 {
    margin-right: 50%;
  }

  .offset-xxl-7.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-7 {
    margin-left: 58.3333333333%;
  }
  .offset-xxl-7.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-7 {
    margin-right: 58.3333333333%;
  }

  .offset-xxl-8.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-8 {
    margin-left: 66.6666666667%;
  }
  .offset-xxl-8.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-8 {
    margin-right: 66.6666666667%;
  }

  .offset-xxl-9.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-9.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-9 {
    margin-right: 75%;
  }

  .offset-xxl-10.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-10 {
    margin-left: 83.3333333333%;
  }
  .offset-xxl-10.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-10 {
    margin-right: 83.3333333333%;
  }

  .offset-xxl-11.v-locale--is-ltr, .v-locale--is-ltr .offset-xxl-11 {
    margin-left: 91.6666666667%;
  }
  .offset-xxl-11.v-locale--is-rtl, .v-locale--is-rtl .offset-xxl-11 {
    margin-right: 91.6666666667%;
  }
}.v-file-input input[type=file] {
  left: 0;
  max-width: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  width: 0;
}

.v-file-input .v-input__control {
  min-width: 0;
}
.v-file-input .v-input__field {
  max-width: 100%;
  min-width: 0;
}
.v-file-input .v-input__input {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-file-input .v-input__input.v-file-input--chips {
  flex-wrap: wrap;
}
.v-file-input .v-input__input .v-chip {
  -webkit-margin-end: 4px;
          margin-inline-end: 4px;
}

.v-file-input .v-file-input__clearable {
  opacity: 0;
}
.v-file-input.v-input--dirty .v-input__control:hover .v-file-input__clearable {
  opacity: 1;
}
.v-file-input.v-input--focused.v-input--dirty .v-file-input__clearable {
  opacity: 1;
}

.v-file-input.v-input--disabled {
  pointer-events: none;
}/* region INPUT */
.v-field {
  font-size: 16px;
  letter-spacing: 0.009375em;
  max-width: 100%;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --v-field-padding-before: 16px;
  --v-field-padding-after: 16px;
}
.v-field .v-field__input {
  opacity: var(--v-high-emphasis-opacity);
  width: 100%;
  height: 100%;
  -webkit-padding-start: var(--v-field-padding-before);
          padding-inline-start: var(--v-field-padding-before);
  -webkit-padding-end: var(--v-field-padding-after);
          padding-inline-end: var(--v-field-padding-after);
  display: flex;
  align-items: center;
}
.v-field .v-field__input:focus, .v-field .v-field__input:active {
  outline: none;
}
.v-field .v-field__input:invalid {
  box-shadow: none;
}
.v-field--variant-plain, .v-field--variant-underlined {
  --v-field-padding-before: 0;
  --v-field-padding-after: 0;
}
.v-field--prepended {
  --v-field-padding-before: 6px;
}
.v-field--appended {
  --v-field-padding-after: 6px;
}
.v-field.v-field--variant-contained, .v-field.v-field--variant-filled {
  --v-field-padding-top: 21px;
  --v-field-padding-bottom: 6px;
}
.v-field.v-field--variant-contained.v-field--single-line, .v-field.v-field--variant-filled.v-field--single-line {
  --v-field-padding-top: 0;
  --v-field-padding-bottom: 0;
}
.v-field.v-field--variant-plain, .v-field.v-field--variant-underlined {
  --v-field-padding-top: 16px;
  --v-field-padding-bottom: 8px;
}
.v-input--density-default.v-field.v-field--variant-plain, .v-input--density-default.v-field.v-field--variant-underlined {
  --v-field-padding-top: 30px;
}

.v-input--density-comfortable.v-field.v-field--variant-plain, .v-input--density-comfortable.v-field.v-field--variant-underlined {
  --v-field-padding-top: 24px;
}

.v-input--density-compact.v-field.v-field--variant-plain, .v-input--density-compact.v-field.v-field--variant-underlined {
  --v-field-padding-top: 18px;
}

/* endregion */
/* region CONTROL */
.v-field__control {
  align-items: center;
  border-radius: 4px;
  contain: layout;
  display: flex;
  flex: 1 0;
  grid-area: control;
  height: var(--v-input-control-height);
  position: relative;
}
.v-field--prepended .v-field__control {
  -webkit-padding-start: 12px;
          padding-inline-start: 12px;
}
.v-field--appended .v-field__control {
  -webkit-padding-end: 12px;
          padding-inline-end: 12px;
}
.v-field--variant-contained .v-field__control {
  background: rgb(var(--v-theme-surface));
  border-color: transparent;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.v-field--variant-contained .v-field__control, .v-field--variant-filled .v-field__control {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.v-field--variant-plain .v-field__control, .v-field--variant-underlined .v-field__control {
  border-radius: 0;
  padding: 0;
}

/* endregion */
/* region FIELD */
.v-field__field {
  align-items: center;
  display: flex;
  flex: 1 0;
  height: 100%;
  position: relative;
}
.v-field__field .v-field__input {
  letter-spacing: 0.009375em;
  padding-top: var(--v-field-padding-top, 0);
  padding-bottom: var(--v-field-padding-bottom, 0);
}

/* endregion */
/* region AFFIXES */
.v-field__prepend-inner,
.v-field__append-inner,
.v-field .v-input__prepend,
.v-field .v-input__append {
  align-items: center;
  display: flex;
  opacity: 0.6;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.v-field--focused .v-field__prepend-inner,
.v-field--focused .v-field__append-inner,
.v-field--focused .v-input__prepend,
.v-field--focused .v-input__append {
  opacity: 1;
}
.v-field--variant-plain .v-field__prepend-inner, .v-field--variant-underlined .v-field__prepend-inner,
.v-field--variant-plain .v-field__append-inner,
.v-field--variant-underlined .v-field__append-inner,
.v-field--variant-plain .v-input__prepend,
.v-field--variant-underlined .v-input__prepend,
.v-field--variant-plain .v-input__append,
.v-field--variant-underlined .v-input__append {
  align-self: flex-end;
}
.v-input--density-default.v-field--variant-plain .v-field__prepend-inner, .v-input--density-default.v-field--variant-underlined .v-field__prepend-inner, .v-input--density-default.v-field--variant-plain .v-field__append-inner, .v-input--density-default.v-field--variant-underlined .v-field__append-inner, .v-input--density-default.v-field--variant-plain .v-input__prepend, .v-input--density-default.v-field--variant-underlined .v-input__prepend, .v-input--density-default.v-field--variant-plain .v-input__append, .v-input--density-default.v-field--variant-underlined .v-input__append {
  margin-bottom: 4px;
}

.v-input--density-comfortable.v-field--variant-plain .v-field__prepend-inner, .v-input--density-comfortable.v-field--variant-underlined .v-field__prepend-inner, .v-input--density-comfortable.v-field--variant-plain .v-field__append-inner, .v-input--density-comfortable.v-field--variant-underlined .v-field__append-inner, .v-input--density-comfortable.v-field--variant-plain .v-input__prepend, .v-input--density-comfortable.v-field--variant-underlined .v-input__prepend, .v-input--density-comfortable.v-field--variant-plain .v-input__append, .v-input--density-comfortable.v-field--variant-underlined .v-input__append {
  margin-bottom: 3px;
}

.v-input--density-compact.v-field--variant-plain .v-field__prepend-inner, .v-input--density-compact.v-field--variant-underlined .v-field__prepend-inner, .v-input--density-compact.v-field--variant-plain .v-field__append-inner, .v-input--density-compact.v-field--variant-underlined .v-field__append-inner, .v-input--density-compact.v-field--variant-plain .v-input__prepend, .v-input--density-compact.v-field--variant-underlined .v-input__prepend, .v-input--density-compact.v-field--variant-plain .v-input__append, .v-input--density-compact.v-field--variant-underlined .v-input__append {
  margin-bottom: 2px;
}

.v-field--variant-plain .v-field .v-input__prepend, .v-field--variant-underlined .v-field .v-input__prepend,
.v-field--variant-plain .v-field .v-input__append,
.v-field--variant-underlined .v-field .v-input__append {
  align-self: flex-end;
}

.v-field__clearable {
  opacity: 0;
  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-field--focused .v-field__clearable, .v-field__control:hover .v-field__clearable {
  opacity: 1;
}

/* endregion */
/* region LABEL */
.v-field-label {
  contain: layout paint;
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 0.009375em;
  min-width: 0;
  max-width: calc(100% - var(--v-field-padding-before) - var(--v-field-padding-after));
  opacity: 0.6;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  text-overflow: ellipsis;
  transform-origin: left center;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  -webkit-margin-start: var(--v-field-padding-before);
          margin-inline-start: var(--v-field-padding-before);
  -webkit-margin-end: var(--v-field-padding-after);
          margin-inline-end: var(--v-field-padding-after);
}
.v-field--active .v-field-label {
  visibility: hidden;
}
.v-field--focused .v-field-label {
  opacity: 1;
}
.v-input--density-default.v-field--variant-plain .v-field-label, .v-input--density-default.v-field--variant-underlined .v-field-label {
  bottom: 4px;
}

.v-input--density-comfortable.v-field--variant-plain .v-field-label, .v-input--density-comfortable.v-field--variant-underlined .v-field-label {
  bottom: 3px;
}

.v-input--density-compact.v-field--variant-plain .v-field-label, .v-input--density-compact.v-field--variant-underlined .v-field-label {
  bottom: 2px;
}

.v-field-label--floating {
  --v-field-label-scale: 0.75em;
  font-size: var(--v-field-label-scale);
  visibility: hidden;
  max-width: 100%;
}
.v-field.v-field--active .v-field-label--floating {
  visibility: visible;
}
.v-field--variant-contained .v-field-label--floating, .v-field--variant-filled .v-field-label--floating {
  transform: translateY(calc(var(--v-input-control-height) / 56 * -12));
}
.v-field--variant-plain .v-field-label--floating, .v-field--variant-underlined .v-field-label--floating {
  transform: translateY(-24px);
  margin: 0;
}
.v-field--variant-outlined .v-field-label--floating {
  transform: translateY(-50%);
  transform-origin: center;
  position: static;
  margin: 0 4px;
}

/* endregion */
/* region OUTLINE */
.v-field__outline {
  --v-field-border-width: 1px;
  --v-field-border-opacity: 0.38;
  align-items: stretch;
  contain: layout;
  display: flex;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 100%;
}
.v-field__control:hover .v-field__outline {
  --v-field-border-opacity: var(--v-high-emphasis-opacity);
}
.v-field.v-field--focused .v-field__outline {
  --v-field-border-opacity: 1;
}
.v-field--variant-outlined.v-field--focused .v-field__outline {
  --v-field-border-width: 2px;
}
.v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before {
  border-style: solid;
  border-width: 0 0 var(--v-field-border-width);
  opacity: var(--v-field-border-opacity);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--variant-filled .v-field__outline::after, .v-field--variant-underlined .v-field__outline::after {
  border-color: currentColor;
  border-style: solid;
  border-width: 0 0 2px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scaleX(0);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--focused.v-field--variant-filled .v-field__outline::after, .v-field--focused.v-field--variant-underlined .v-field__outline::after {
  transform: scaleX(1);
}

.v-field--variant-outlined .v-field__outline {
  border-radius: inherit;
}
.v-field--variant-outlined .v-field__outline__start, .v-field--variant-outlined .v-field__outline__notch::before, .v-field--variant-outlined .v-field__outline__notch::after, .v-field--variant-outlined .v-field__outline__end {
  border: 0 solid currentColor;
  opacity: var(--v-field-border-opacity);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.v-field--variant-outlined .v-field__outline__start {
  flex: 0 0 12px;
  border-top-width: var(--v-field-border-width);
  border-bottom-width: var(--v-field-border-width);
  border-inline-start-width: var(--v-field-border-width);
}
.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr, .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start {
  border-radius: 4px 0 0 4px;
}
.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl, .v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start {
  border-radius: 0 4px 4px 0;
}
.v-field--variant-outlined .v-field__outline__notch {
  flex: none;
  position: relative;
  border-width: 0 0 var(--v-field-border-width);
}
.v-field--variant-outlined .v-field__outline__notch::before, .v-field--variant-outlined .v-field__outline__notch::after {
  opacity: var(--v-field-border-opacity);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--variant-outlined .v-field__outline__notch::before {
  border-width: var(--v-field-border-width) 0 0;
}
.v-field--variant-outlined .v-field__outline__notch::after {
  bottom: 0;
  border-width: 0 0 var(--v-field-border-width);
}
.v-field--active.v-field--variant-outlined .v-field__outline__notch::before {
  opacity: 0;
}

.v-field--variant-outlined .v-field__outline__end {
  flex: 1;
  border-top-width: var(--v-field-border-width);
  border-bottom-width: var(--v-field-border-width);
  border-inline-end-width: var(--v-field-border-width);
}
.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr, .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end {
  border-radius: 0 4px 4px 0;
}
.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl, .v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end {
  border-radius: 4px 0 0 4px;
}

/* endregion */
/* region DETAILS */
.v-field--variant-plain .v-input__details, .v-field--variant-underlined .v-input__details {
  -webkit-padding-start: 0;
          padding-inline-start: 0;
  -webkit-padding-end: 0;
          padding-inline-end: 0;
}

.v-field__details {
  transition: inherit;
}

/* endregion */
/* region OVERLAY */
.v-field--variant-filled .v-field__overlay {
  background-color: rgb(var(--v-theme-on-surface));
  border-radius: inherit;
  opacity: 0.04;
  pointer-events: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-field--variant-filled.v-field--has-background .v-field__overlay {
  opacity: 0;
}
.v-field--variant-filled .v-field__control:hover .v-field__overlay {
  opacity: calc(0.08 * var(--v-theme-overlay-multiplier));
}
.v-field--variant-filled.v-field.v-field--focused .v-field__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}

/* endregion */
/* region MODIFIERS */
.v-field--reverse .v-field__input.v-locale--is-ltr, .v-locale--is-ltr .v-field--reverse .v-field__input {
  text-align: right;
}
.v-field--reverse .v-field__input.v-locale--is-rtl, .v-locale--is-rtl .v-field--reverse .v-field__input {
  text-align: left;
}

.v-field--disabled {
  pointer-events: none;
}
.v-field--disabled,
.v-field--disabled input {
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
.v-field--disabled.v-field--variant-filled .v-field__outline::before, .v-field--disabled.v-field--variant-underlined .v-field__outline::before {
  border-image: repeating-linear-gradient(to right, rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity)) 0px, rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity)) 2px, transparent 2px, transparent 4px) 1 repeat;
}

/* endregion */.v-layout {
  --v-scrollbar-offset: 0px;
  position: relative;
  display: flex;
  flex: 1 1 auto;
}
.v-layout--full-height {
  --v-scrollbar-offset: inherit;
  height: 100%;
}.v-img {
  --v-theme-overlay-multiplier: 3;
  z-index: 0;
}

.v-img__img,
.v-img__picture,
.v-img__placeholder,
.v-img__error {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-img__img--preload {
  filter: blur(4px);
}
.v-img__img--contain {
  object-fit: contain;
}
.v-img__img--cover {
  object-fit: cover;
}.v-layout-item {
  position: fixed;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-layout-item--absolute {
  position: absolute;
}.v-item-group {
  flex: 0 1 auto;
  max-width: 100%;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}.v-footer {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  padding: 8px 24px;
  position: relative;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-footer--absolute {
  position: absolute;
}
.v-footer--fixed {
  position: fixed;
}
.v-footer--rounded {
  border-radius: 4px;
}.v-input {
  display: grid;
  flex: 1 1 auto;
  grid-template-areas: "prepend control append" "a messages b";
  grid-template-columns: -webkit-max-content auto -webkit-max-content;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto auto;
}
.v-input--density-default {
  --v-input-control-height: 56px;
}

.v-input--density-comfortable {
  --v-input-control-height: 48px;
}

.v-input--density-compact {
  --v-input-control-height: 40px;
}

.v-input__details {
  align-items: flex-end;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  grid-area: messages;
  letter-spacing: 0.0333333333em;
  line-height: normal;
  min-height: 22px;
  padding-top: 6px;
  overflow: hidden;
  -webkit-padding-start: 16px;
          padding-inline-start: 16px;
  -webkit-padding-end: 16px;
          padding-inline-end: 16px;
  justify-content: space-between;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.v-input__prepend,
.v-input__append {
  display: flex;
  align-items: center;
  align-self: center;
}

.v-input__prepend {
  -webkit-margin-end: 16px;
          margin-inline-end: 16px;
  grid-area: prepend;
}

.v-input__append {
  -webkit-margin-start: 16px;
          margin-inline-start: 16px;
  grid-area: append;
}.v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  height: 1em;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  vertical-align: middle;
  width: 1em;
}
.v-icon--left {
  -webkit-margin-end: 8px;
          margin-inline-end: 8px;
}
.v-icon--right {
  -webkit-margin-start: 8px;
          margin-inline-start: 8px;
}
.v-icon--size-x-small {
  font-size: 1em;
}
.v-icon--size-small {
  font-size: 1.25em;
}
.v-icon--size-default {
  font-size: 1.5em;
}
.v-icon--size-large {
  font-size: 1.75em;
}
.v-icon--size-x-large {
  font-size: 2em;
}

.v-icon__svg {
  fill: currentColor;
}

.v-bottom-navigation .v-btn:not(.v-btn--icon):not(.v-btn--stacked) .v-icon--size-default {
  font-size: 24px;
}
.v-bottom-navigation:not(.v-bottom-navigation--horizontal) .v-btn:not(.v-btn--icon):not(.v-btn--stacked) .v-icon--size-default {
  margin: 0;
}
.v-btn:not(.v-btn--icon) .v-icon--left {
  -webkit-margin-start: calc(var(--v-btn-height) / -9);
          margin-inline-start: calc(var(--v-btn-height) / -9);
  -webkit-margin-end: calc(var(--v-btn-height) / 4.5);
          margin-inline-end: calc(var(--v-btn-height) / 4.5);
}
.v-btn:not(.v-btn--icon) .v-icon--right {
  -webkit-margin-start: calc(var(--v-btn-height) / 4.5);
          margin-inline-start: calc(var(--v-btn-height) / 4.5);
  -webkit-margin-end: calc(var(--v-btn-height) / -9);
          margin-inline-end: calc(var(--v-btn-height) / -9);
}.v-list {
  overflow: auto;
  padding: 8px 0;
  position: relative;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0;
}
.v-list--border {
  border-width: thin;
  box-shadow: none;
}
.v-list--absolute {
  position: absolute;
}
.v-list--fixed {
  position: fixed;
}
.v-list--disabled {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.v-list--disabled > [class*=v-list-] {
  opacity: 0.6;
}
.v-list--rounded {
  border-radius: 4px;
}
.v-list--subheader {
  padding-top: 0;
}

.v-list-img {
  border-radius: inherit;
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.v-list-subheader {
  align-items: center;
  background: inherit;
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  -webkit-padding-end: 16px;
          padding-inline-end: 16px;
  -webkit-padding-start: 16px;
          padding-inline-start: 16px;
  min-height: 48px;
  transition: 0.2s min-height cubic-bezier(0.4, 0, 0.2, 1);
}
.v-list-subheader__text {
  opacity: var(--v-medium-emphasis-opacity);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-list--density-default .v-list-subheader {
  min-height: 48px;
}

.v-list--density-comfortable .v-list-subheader {
  min-height: 44px;
}

.v-list--density-compact .v-list-subheader {
  min-height: 40px;
}

.v-list-subheader--inset {
  -webkit-padding-start: 72px;
          padding-inline-start: 72px;
}
.v-list--nav .v-list-subheader {
  font-size: 0.75rem;
}
.v-list--subheader-sticky .v-list-subheader {
  background: inherit;
  left: 0;
  position: sticky;
  top: 0;
  z-index: 1;
}

.v-list__overlay {
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
}.v-locale-provider {
  display: contents;
}.v-main {
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
}
@-moz-document url-prefix() {
  @media print {
    .v-main {
      display: block;
    }
  }
}.v-menu {
  z-index: 800;
}
.v-menu .v-overlay__content {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}
.v-menu .v-overlay__content > .v-card,
.v-menu .v-overlay__content > .v-sheet {
  background: rgb(var(--v-theme-surface));
  border-radius: inherit;
  overflow: auto;
  height: 100%;
}
.v-menu .v-overlay__content > .v-card::before,
.v-menu .v-overlay__content > .v-sheet::before {
  border-radius: inherit;
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}.v-navigation-drawer {
  -webkit-overflow-scrolling: touch;
  background: rgb(var(--v-theme-surface));
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  pointer-events: auto;
  top: 0;
  transition-duration: 0.2s;
  transition-property: box-shadow, transform, visibility, width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  position: fixed;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-navigation-drawer--border {
  border-width: thin;
  box-shadow: none;
}
.v-navigation-drawer--absolute {
  position: absolute;
}
.v-navigation-drawer--floating {
  border-color: transparent;
}
.v-navigation-drawer--rounded {
  border-radius: 4px;
}
.v-navigation-drawer--start {
  border-inline-end-width: thin;
}
.v-navigation-drawer--start.v-locale--is-ltr, .v-locale--is-ltr .v-navigation-drawer--start {
  left: 0;
  right: auto;
}
.v-navigation-drawer--start.v-locale--is-rtl, .v-locale--is-rtl .v-navigation-drawer--start {
  left: auto;
  right: 0;
}
.v-navigation-drawer--end {
  border-inline-start-width: thin;
}
.v-navigation-drawer--end.v-locale--is-ltr, .v-locale--is-ltr .v-navigation-drawer--end {
  left: auto;
  right: 0;
}
.v-navigation-drawer--end.v-locale--is-rtl, .v-locale--is-rtl .v-navigation-drawer--end {
  left: 0;
  right: auto;
}
.v-navigation-drawer--temporary {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}

.v-navigation-drawer__content {
  flex: 0 1 auto;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.v-navigation-drawer__img {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
.v-navigation-drawer__img img {
  height: inherit;
  object-fit: cover;
  width: inherit;
}.v-list-item {
  align-items: center;
  display: flex;
  padding: 8px 16px;
  position: relative;
  outline: none;
  text-decoration: none;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
}
.v-list-item--border {
  border-width: thin;
  box-shadow: none;
}
.v-list-item:hover .v-list-item__overlay {
  opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
}
.v-list-item:focus-visible .v-list-item__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-list-item:focus .v-list-item__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
}
.v-list-item--active:hover.v-list-item__overlay,
.v-list-item--active .v-list-item__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-list-item--active:focus .v-list-item__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}
.v-list-item--variant-plain, .v-list-item--variant-outlined, .v-list-item--variant-text, .v-list-item--variant-contained-text {
  background: transparent;
  color: inherit;
}
.v-list-item--variant-plain {
  opacity: 0.62;
}
.v-list-item--variant-plain:focus, .v-list-item--variant-plain:hover {
  opacity: 1;
}
.v-list-item--variant-plain .v-list-item__overlay {
  display: none;
}
.v-list-item--variant-contained {
  background: rgba(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface));
  z-index: 1;
}
.v-list-item--variant-outlined {
  border: thin solid currentColor;
}
.v-list-item--variant-text .v-list-item__overlay {
  background: currentColor;
}
.v-list-item--variant-contained-text .v-list-item__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}
.v-list-item--rounded {
  border-radius: 4px;
}
.v-list-item--disabled {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  opacity: 0.6;
}
.v-list-item--link {
  cursor: pointer;
}

.v-list-item-avatar {
  align-self: center;
  height: 40px;
  transition: inherit;
  transition-property: height, width;
  width: 40px;
}
.v-list-item-avatar--start {
  -webkit-margin-end: 16px;
          margin-inline-end: 16px;
}
.v-list-item-avatar--end {
  -webkit-margin-start: 16px;
          margin-inline-start: 16px;
}
.v-list--density-default .v-list-item-avatar {
  height: 40px;
  width: 40px;
}
.v-list--density-default.v-list--three-line .v-list-item-avatar {
  margin-top: 4px;
}

.v-list--density-comfortable .v-list-item-avatar {
  height: 34px;
  width: 34px;
}
.v-list--density-comfortable.v-list--three-line .v-list-item-avatar {
  margin-top: 8px;
}

.v-list--density-compact .v-list-item-avatar {
  height: 28px;
  width: 28px;
}
.v-list--density-compact.v-list--three-line .v-list-item-avatar {
  margin-top: 12px;
}

.v-list--two-line .v-list-item-avatar {
  margin-top: 4px;
  margin-bottom: 4px;
}
.v-list--three-line .v-list-item-avatar {
  align-self: flex-start;
}

.v-list-item-media {
  margin-top: 0;
  margin-bottom: 0;
}
.v-list-item-media--start {
  -webkit-margin-end: 16px;
          margin-inline-end: 16px;
}
.v-list-item-media--end {
  -webkit-margin-start: 16px;
          margin-inline-start: 16px;
}
.v-list--two-line .v-list-item-media {
  margin-top: -4px;
  margin-bottom: -4px;
}
.v-list--three-line .v-list-item-media {
  margin-top: 0;
  margin-bottom: 0;
}

.v-list-item-header {
  flex: 1 1 auto;
  min-width: 0;
}

.v-list-item-subtitle {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  opacity: var(--v-medium-emphasis-opacity);
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  line-height: 1rem;
  text-transform: none;
}
.v-list--two-line .v-list-item-subtitle {
  -webkit-line-clamp: 1;
}
.v-list--three-line .v-list-item-subtitle {
  -webkit-line-clamp: 2;
}
.v-list--nav .v-list-item-subtitle {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  line-height: 1rem;
}

.v-list-item-title {
  -webkit-hyphens: auto;
          hyphens: auto;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  word-wrap: break-word;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  line-height: 1.5rem;
  text-transform: none;
}
.v-list--nav .v-list-item-title {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1rem;
}

.v-list--density-default.v-list--one-line .v-list-item {
  min-height: 48px;
  padding: 8px 16px;
}
.v-list--density-default.v-list--two-line .v-list-item {
  min-height: 64px;
  padding: 12px 16px;
}
.v-list--density-default.v-list--three-line .v-list-item {
  min-height: 88px;
  padding: 16px 16px;
}

.v-list--density-comfortable.v-list--one-line .v-list-item {
  min-height: 44px;
  padding: 4px 16px;
}
.v-list--density-comfortable.v-list--two-line .v-list-item {
  min-height: 60px;
  padding: 8px 16px;
}
.v-list--density-comfortable.v-list--three-line .v-list-item {
  min-height: 84px;
  padding: 12px 16px;
}

.v-list--density-compact.v-list--one-line .v-list-item {
  min-height: 40px;
  padding: 0px 16px;
}
.v-list--density-compact.v-list--two-line .v-list-item {
  min-height: 56px;
  padding: 4px 16px;
}
.v-list--density-compact.v-list--three-line .v-list-item {
  min-height: 80px;
  padding: 8px 16px;
}

.v-list-item__overlay {
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
}
.v-list-item--active.v-list-item--contained .v-list-item__overlay {
  --v-theme-overlay-multiplier: 0;
}.v-pagination__list {
  display: inline-flex;
  list-style-type: none;
  justify-content: center;
  width: 100%;
}
.v-pagination__item, .v-pagination__first, .v-pagination__prev, .v-pagination__next, .v-pagination__last {
  margin: 0.3rem;
}.v-overlay-container {
  contain: layout;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  display: contents;
}

.v-overlay-scroll-blocked {
  -webkit-padding-end: var(--v-scrollbar-offset);
          padding-inline-end: var(--v-scrollbar-offset);
  overflow-y: hidden !important;
}

.v-overlay {
  border-radius: inherit;
  display: flex;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  z-index: 800;
  -webkit-padding-end: var(--v-scrollbar-offset);
          padding-inline-end: var(--v-scrollbar-offset);
  bottom: 0;
  right: 0;
}

.v-overlay__content {
  outline: none;
  position: absolute;
  pointer-events: auto;
  contain: layout;
}

.v-overlay__scrim {
  pointer-events: auto;
  background: rgb(var(--v-theme-on-surface));
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: 32%;
  position: fixed;
  right: 0;
  top: 0;
}

.v-overlay--absolute {
  position: absolute;
}.v-rating {
  max-width: 100%;
  display: inline-flex;
  white-space: nowrap;
}
.v-rating--readonly {
  pointer-events: none;
}

.v-rating__wrapper {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
}
.v-rating__wrapper--bottom {
  flex-direction: column-reverse;
}

.v-rating__item {
  display: inline-flex;
  position: relative;
}
.v-rating__item label {
  cursor: pointer;
}
.v-rating__item .v-btn--variant-plain {
  opacity: 1;
}
.v-rating__item .v-btn {
  transition-property: transform;
}
.v-rating__item .v-btn .v-icon {
  transition: inherit;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.v-rating__item:hover:not(.v-rating__item--focused) .v-icon {
  transform: scale(1.25);
}
.v-rating__item--focused .v-btn__overlay {
  display: block;
  opacity: var(--v-hover-opacity);
}
.v-rating__item--half {
  overflow: hidden;
  position: absolute;
  width: 50%;
  z-index: 1;
}
.v-rating__item--half .v-btn__overlay, .v-rating__item--half:hover .v-btn__overlay {
  opacity: 0;
}

.v-rating__hidden {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}.v-progress-circular {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  vertical-align: middle;
}
.v-progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.v-progress-circular__content {
  align-items: center;
  display: flex;
  justify-content: center;
}

.v-progress-circular__underlay {
  color: rgba(var(--v-border-color), var(--v-border-opacity));
  stroke: currentColor;
  z-index: 1;
}

.v-progress-circular__overlay {
  stroke: currentColor;
  transition: all 0.6s ease-in-out, stroke-width 0s;
  z-index: 2;
}

.v-progress-circular--size-x-small {
  height: 16px;
  width: 16px;
}
.v-progress-circular--size-small {
  height: 24px;
  width: 24px;
}
.v-progress-circular--size-default {
  height: 32px;
  width: 32px;
}
.v-progress-circular--size-large {
  height: 48px;
  width: 48px;
}
.v-progress-circular--size-x-large {
  height: 64px;
  width: 64px;
}

.v-progress-circular--indeterminate > svg {
  -webkit-animation: progress-circular-rotate 1.4s linear infinite;
          animation: progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}
.v-progress-circular--indeterminate .v-progress-circular__overlay {
  -webkit-animation: progress-circular-dash 1.4s ease-in-out infinite;
          animation: progress-circular-dash 1.4s ease-in-out infinite;
  stroke-dasharray: 25, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
}

.v-progress-circular--disable-shrink > svg {
  -webkit-animation-duration: 0.7s;
          animation-duration: 0.7s;
}
.v-progress-circular--disable-shrink .v-progress-circular__overlay {
  -webkit-animation: none;
          animation: none;
}

.v-progress-circular--indeterminate:not(.v-progress-circular--visible) > svg,
.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay {
  -webkit-animation-play-state: paused !important;
          animation-play-state: paused !important;
}

@-webkit-keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}
@-webkit-keyframes progress-circular-rotate {
  100% {
    transform: rotate(270deg);
  }
}
@keyframes progress-circular-rotate {
  100% {
    transform: rotate(270deg);
  }
}.v-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.v-progress-linear__background {
  background: currentColor;
  bottom: 0;
  left: 0;
  opacity: var(--v-border-opacity);
  position: absolute;
  top: 0;
  transition-property: width, left, right;
  transition: inherit;
}

.v-progress-linear__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.v-progress-linear__determinate,
.v-progress-linear__indeterminate {
  background: currentColor;
}

.v-progress-linear__determinate {
  height: inherit;
  left: 0;
  position: absolute;
  transition: inherit;
  transition-property: width, left, right;
}

.v-progress-linear__indeterminate .long, .v-progress-linear__indeterminate .short {
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
  -webkit-animation-duration: 2.2s;
          animation-duration: 2.2s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  background-color: inherit;
  bottom: 0;
  height: inherit;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: auto;
  will-change: left, right;
}
.v-progress-linear__indeterminate .long {
  -webkit-animation-name: indeterminate-ltr;
          animation-name: indeterminate-ltr;
}
.v-progress-linear__indeterminate .short {
  -webkit-animation-name: indeterminate-short-ltr;
          animation-name: indeterminate-short-ltr;
}

.v-progress-linear__stream {
  -webkit-animation: stream 0.25s infinite linear;
          animation: stream 0.25s infinite linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
  bottom: 0;
  left: auto;
  opacity: 0.3;
  pointer-events: none;
  position: absolute;
  transition: inherit;
  transition-property: width, left, right;
}

.v-progress-linear--reverse .v-progress-linear__background,
.v-progress-linear--reverse .v-progress-linear__determinate,
.v-progress-linear--reverse .v-progress-linear__content {
  left: auto;
  right: 0;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .long, .v-progress-linear--reverse .v-progress-linear__indeterminate .short {
  left: auto;
  right: 0;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .long {
  -webkit-animation-name: indeterminate-rtl;
          animation-name: indeterminate-rtl;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .short {
  -webkit-animation-name: indeterminate-short-rtl;
          animation-name: indeterminate-short-rtl;
}
.v-progress-linear--reverse .v-progress-linear__stream {
  right: auto;
}

.v-progress-linear--absolute,
.v-progress-linear--fixed {
  left: 0;
  z-index: 1;
}

.v-progress-linear--absolute {
  position: absolute;
}

.v-progress-linear--fixed {
  position: fixed;
}

.v-progress-linear--rounded {
  border-radius: 4px;
}
.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,
.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate {
  border-radius: inherit;
}

.v-progress-linear--striped .v-progress-linear__determinate {
  -webkit-animation: progress-linear-stripes 1s infinite linear;
          animation: progress-linear-stripes 1s infinite linear;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 25%, transparent 0, transparent 50%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 75%, transparent 0, transparent);
  background-repeat: repeat;
  background-size: var(--v-progress-linear-height);
}

.v-progress-linear--active .v-progress-linear__indeterminate .long, .v-progress-linear--active .v-progress-linear__indeterminate .short {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}
.v-progress-linear--active .v-progress-linear__stream {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}

.v-progress-linear--rounded-bar .v-progress-linear__determinate,
.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,
.v-progress-linear--rounded-bar .v-progress-linear__stream + .v-progress-linear__background {
  border-radius: 4px;
}
.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr, .v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl, .v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

@-webkit-keyframes indeterminate-ltr {
  0% {
    left: -90%;
    right: 100%;
  }
  60% {
    left: -90%;
    right: 100%;
  }
  100% {
    left: 100%;
    right: -35%;
  }
}

@keyframes indeterminate-ltr {
  0% {
    left: -90%;
    right: 100%;
  }
  60% {
    left: -90%;
    right: 100%;
  }
  100% {
    left: 100%;
    right: -35%;
  }
}
@-webkit-keyframes indeterminate-rtl {
  0% {
    left: 100%;
    right: -90%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: -35%;
    right: 100%;
  }
}
@keyframes indeterminate-rtl {
  0% {
    left: 100%;
    right: -90%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: -35%;
    right: 100%;
  }
}
@-webkit-keyframes indeterminate-short-ltr {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
@keyframes indeterminate-short-ltr {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
@-webkit-keyframes indeterminate-short-rtl {
  0% {
    left: 100%;
    right: -200%;
  }
  60% {
    left: -8%;
    right: 107%;
  }
  100% {
    left: -8%;
    right: 107%;
  }
}
@keyframes indeterminate-short-rtl {
  0% {
    left: 100%;
    right: -200%;
  }
  60% {
    left: -8%;
    right: 107%;
  }
  100% {
    left: -8%;
    right: 107%;
  }
}
@-webkit-keyframes stream {
  to {
    transform: translateX(var(--v-progress-linear-stream-to));
  }
}
@keyframes stream {
  to {
    transform: translateX(var(--v-progress-linear-stream-to));
  }
}
@-webkit-keyframes progress-linear-stripes {
  0% {
    background-position-x: var(--v-progress-linear-height);
  }
}
@keyframes progress-linear-stripes {
  0% {
    background-position-x: var(--v-progress-linear-height);
  }
}.v-responsive {
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.v-responsive__content {
  flex: 1 0 0px;
  max-width: 100%;
}

.v-responsive__sizer ~ .v-responsive__content {
  -webkit-margin-start: -100%;
          margin-inline-start: -100%;
}

.v-responsive__sizer {
  flex: 1 0 0px;
  transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}.v-sheet {
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}
.v-sheet--border {
  border-width: thin;
  box-shadow: none;
}
.v-sheet--absolute {
  position: absolute;
}
.v-sheet--fixed {
  position: fixed;
}
.v-sheet--rounded {
  border-radius: 4px;
}.v-theme-provider {
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
}.v-tooltip .v-overlay__content {
  background: rgba(var(--v-theme-on-surface), 0.5);
  color: rgb(var(--v-theme-surface));
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 1.6;
  display: inline-block;
  padding: 5px 16px;
  text-transform: initial;
  width: auto;
  opacity: 1;
  pointer-events: none;
}
.v-tooltip .v-overlay__content[class*=enter-active] {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 150ms;
}
.v-tooltip .v-overlay__content[class*=leave-active] {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 75ms;
}.v-text-field {
  margin-bottom: 36px;
}
.v-text-field__prefix, .v-text-field__suffix {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: default;
  opacity: 0.6;
  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  padding-top: calc(var(--v-field-padding-top, 0) + 1px);
  padding-bottom: var(--v-field-padding-bottom, 0);
}
.v-text-field__prefix {
  -webkit-padding-start: var(--v-field-padding-before);
          padding-inline-start: var(--v-field-padding-before);
}
.v-text-field__suffix {
  -webkit-padding-end: var(--v-field-padding-after);
          padding-inline-end: var(--v-field-padding-after);
}
.v-text-field.v-field--has-details {
  margin-bottom: 14px;
}
.v-text-field.v-field--hide-details {
  margin-bottom: 0;
}
.v-text-field--prefixed.v-text-field .v-field__input {
  --v-field-padding-before: 6px;
}

.v-text-field--suffixed.v-text-field .v-field__input {
  --v-field-padding-after: 0;
}

.v-text-field .v-field__control {
  cursor: text;
}
.v-text-field input {
  flex: 1;
  opacity: 1;
  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
}
.v-text-field input:focus, .v-text-field input:active {
  outline: none;
}
.v-text-field input:invalid {
  box-shadow: none;
}.v-system-bar {
  align-items: center;
  background: rgba(var(--v-theme-on-background), 0.02);
  display: flex;
  flex: 1 1 auto;
  font-size: 1rem;
  font-weight: 400;
  height: 24px;
  justify-content: flex-end;
  padding: 0 8px;
  position: relative;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0;
  text-align: end;
}
.v-system-bar i {
  color: rgba(var(--v-theme-on-background), 0.5);
  font-size: 16px;
}
.v-system-bar--absolute {
  position: absolute;
}
.v-system-bar--fixed {
  position: fixed;
}
.v-system-bar--lights-out {
  background: rgba(var(--v-theme-background), 0.7);
}
.v-system-bar--rounded {
  border-radius: 0;
}
.v-system-bar--window {
  height: 32px;
}
.v-system-bar--window i {
  font-size: 20px;
}.v-timeline .v-timeline-divider__dot {
  background: rgb(var(--v-theme-on-surface));
}

.v-timeline {
  display: grid;
  grid-auto-flow: dense;
  position: relative;
}
.v-timeline--horizontal.v-timeline {
  grid-template-rows: auto -webkit-min-content auto;
  grid-template-rows: auto min-content auto;
  width: 100%;
}
.v-timeline--horizontal.v-timeline .v-timeline-item__body, .v-timeline--horizontal.v-timeline .v-timeline-item__opposite {
  -webkit-padding-start: calc((var(--v-timeline-dot-size) / 2) - 5px);
          padding-inline-start: calc((var(--v-timeline-dot-size) / 2) - 5px);
}
.v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__body {
  grid-row: 3;
  padding-top: 24px;
}
.v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__opposite {
  grid-row: 1;
  padding-bottom: 24px;
}
.v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__body {
  grid-row: 1;
  padding-bottom: 24px;
}
.v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__opposite {
  grid-row: 3;
  padding-top: 24px;
}

.v-timeline--vertical.v-timeline {
  grid-template-columns: auto -webkit-min-content auto;
  grid-template-columns: auto min-content auto;
  height: 100%;
}
.v-timeline--vertical.v-timeline .v-timeline-item__body, .v-timeline--vertical.v-timeline .v-timeline-item__opposite {
  padding-top: calc((var(--v-timeline-dot-size) - 1.5em) / 2);
}
.v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__body {
  grid-column: 1;
  text-align: end;
  -webkit-padding-end: 24px;
          padding-inline-end: 24px;
}
.v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__opposite {
  grid-column: 3;
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
}
.v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__body {
  grid-column: 3;
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
}
.v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__opposite {
  grid-column: 1;
  text-align: end;
  -webkit-padding-end: 24px;
          padding-inline-end: 24px;
}

.v-timeline-item {
  display: contents;
}

.v-timeline-divider__line {
  background: rgba(var(--v-border-color), var(--v-border-opacity));
  position: absolute;
}
.v-timeline--horizontal .v-timeline-divider__line {
  height: var(--v-timeline-line-thickness);
  width: calc(100% - var(--v-timeline-line-inset, 0px));
}

.v-timeline--vertical .v-timeline-divider__line {
  height: 100%;
  width: var(--v-timeline-line-thickness);
}

.v-timeline--vertical.v-timeline--inset-line .v-timeline-divider__line {
  height: calc(100% - var(--v-timeline-dot-size) - var(--v-timeline-line-inset));
  bottom: calc(var(--v-timeline-line-inset) / 2);
}

.v-timeline--horizontal.v-timeline--inset-line .v-timeline-divider__line {
  width: calc(100% - var(--v-timeline-dot-size) - var(--v-timeline-line-inset));
  inset-inline-end: calc(var(--v-timeline-line-inset) / 2);
}

.v-timeline--vertical.v-timeline:not(.v-timeline--inset-line) .v-timeline-item:first-child .v-timeline-divider__line {
  bottom: 0;
  height: calc(100% - (var(--v-timeline-dot-size) / 2));
}

.v-timeline--horizontal.v-timeline:not(.v-timeline--inset-line) .v-timeline-item:first-child .v-timeline-divider__line {
  width: calc(100% - (var(--v-timeline-dot-size) / 2));
  inset-inline-end: 0;
}

.v-timeline-divider {
  position: relative;
  display: flex;
  align-items: center;
}
.v-timeline--horizontal .v-timeline-divider {
  flex-direction: row;
  grid-row: 2;
}

.v-timeline--vertical .v-timeline-divider {
  flex-direction: column;
  grid-column: 2;
}

.v-timeline-divider__dot {
  z-index: 1;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.v-timeline-divider__dot--size-x-small {
  height: 22px;
  width: 22px;
}
.v-timeline-divider__dot--size-x-small .v-timeline-divider__inner-dot {
  height: calc(100% - 6px);
  width: calc(100% - 6px);
}
.v-timeline-divider__dot--size-small {
  height: 30px;
  width: 30px;
}
.v-timeline-divider__dot--size-small .v-timeline-divider__inner-dot {
  height: calc(100% - 8px);
  width: calc(100% - 8px);
}
.v-timeline-divider__dot--size-default {
  height: 38px;
  width: 38px;
}
.v-timeline-divider__dot--size-default .v-timeline-divider__inner-dot {
  height: calc(100% - 8px);
  width: calc(100% - 8px);
}
.v-timeline-divider__dot--size-large {
  height: 46px;
  width: 46px;
}
.v-timeline-divider__dot--size-large .v-timeline-divider__inner-dot {
  height: calc(100% - 8px);
  width: calc(100% - 8px);
}
.v-timeline-divider__dot--size-x-large {
  height: 54px;
  width: 54px;
}
.v-timeline-divider__dot--size-x-large .v-timeline-divider__inner-dot {
  height: calc(100% - 10px);
  width: calc(100% - 10px);
}

.v-timeline-divider__inner-dot {
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

/** Modifiers **/
.v-timeline--horizontal.v-timeline--density-comfortable {
  height: 100%;
}
.v-timeline--horizontal.v-timeline--density-comfortable.v-timeline--side-end {
  grid-template-rows: -webkit-min-content -webkit-min-content auto;
  grid-template-rows: min-content min-content auto;
}
.v-timeline--horizontal.v-timeline--density-comfortable.v-timeline--side-start {
  grid-template-rows: auto -webkit-min-content -webkit-min-content;
  grid-template-rows: auto min-content min-content;
}

.v-timeline--vertical.v-timeline--density-comfortable {
  width: 100%;
}
.v-timeline--vertical.v-timeline--density-comfortable.v-timeline--side-end {
  grid-template-columns: -webkit-min-content -webkit-min-content auto;
  grid-template-columns: min-content min-content auto;
}
.v-timeline--vertical.v-timeline--density-comfortable.v-timeline--side-start {
  grid-template-columns: auto -webkit-min-content -webkit-min-content;
  grid-template-columns: auto min-content min-content;
}

.v-timeline--horizontal.v-timeline--density-compact.v-timeline--side-end {
  grid-template-rows: -webkit-min-content auto;
  grid-template-rows: min-content auto;
}
.v-timeline--horizontal.v-timeline--density-compact.v-timeline--side-start {
  grid-template-rows: auto -webkit-min-content;
  grid-template-rows: auto min-content;
}
.v-timeline--horizontal.v-timeline--density-compact .v-timeline-item__body {
  grid-row: 1;
}

.v-timeline--vertical.v-timeline--density-compact.v-timeline--side-end {
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
}
.v-timeline--vertical.v-timeline--density-compact.v-timeline--side-start {
  grid-template-columns: auto -webkit-min-content;
  grid-template-columns: auto min-content;
}
.v-timeline--vertical.v-timeline--density-compact .v-timeline-item__body {
  grid-column: 3;
}

.v-timeline--horizontal.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {
  grid-row: 3;
  padding-bottom: initial;
  padding-top: 24px;
}
.v-timeline--horizontal.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__opposite {
  grid-row: 1;
  padding-bottom: 24px;
  padding-top: initial;
}

.v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {
  grid-column: 3;
  text-align: initial;
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
}
.v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__opposite {
  grid-column: 1;
  -webkit-padding-end: 24px;
          padding-inline-end: 24px;
}

.v-timeline--horizontal.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__body {
  grid-row: 1;
  padding-bottom: 24px;
  padding-top: initial;
}
.v-timeline--horizontal.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__opposite {
  grid-row: 3;
  padding-bottom: initial;
  padding-top: 24px;
}

.v-timeline--vertical.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__body {
  grid-column: 1;
  text-align: end;
  -webkit-padding-end: 24px;
          padding-inline-end: 24px;
}
.v-timeline--vertical.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__opposite {
  grid-column: 3;
  -webkit-padding-start: 24px;
          padding-inline-start: 24px;
}

.v-timeline-divider--fill-dot .v-timeline-divider__inner-dot {
  height: inherit;
  width: inherit;
}

.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-divider__line {
  display: none;
}`;function zt(){return fn().__VUE_DEVTOOLS_GLOBAL_HOOK__}function fn(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const St=typeof Proxy=="function",Et="devtools-plugin:setup",Ct="plugin:settings:set";class Nt{constructor(t,i){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=i;const r={};if(t.settings)for(const o in t.settings){const p=t.settings[o];r[o]=p.defaultValue}const a=`__vue-devtools-plugin-settings__${t.id}`;let e={...r};try{const o=localStorage.getItem(a),p=JSON.parse(o);Object.assign(e,p)}catch(o){}this.fallbacks={getSettings(){return e},setSettings(o){try{localStorage.setItem(a,JSON.stringify(o))}catch(p){}e=o}},i.on(Ct,(o,p)=>{o===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(o,p)=>this.target?this.target.on[p]:(...m)=>{this.onQueue.push({method:p,args:m})}}),this.proxiedTarget=new Proxy({},{get:(o,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...m)=>(this.targetQueue.push({method:p,args:m,resolve:()=>{}}),this.fallbacks[p](...m)):(...m)=>new Promise(g=>{this.targetQueue.push({method:p,args:m,resolve:g})})})}async setRealTarget(t){this.target=t;for(const i of this.onQueue)this.target.on[i.method](...i.args);for(const i of this.targetQueue)i.resolve(await this.target[i.method](...i.args))}}function At(n,t){const i=fn(),r=zt(),a=St&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))r.emit(Et,n,t);else{const e=a?new Nt(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Ft="store";function F(n,t){Object.keys(n).forEach(function(i){return t(n[i],i)})}function Rt(n){return n!==null&&typeof n=="object"}function Lt(n){return n&&typeof n.then=="function"}function _(n,t){if(!n)throw new Error("[vuex] "+t)}function It(n,t){return function(){return n(t)}}function hn(n,t,i){return t.indexOf(n)<0&&(i&&i.prepend?t.unshift(n):t.push(n)),function(){var r=t.indexOf(n);r>-1&&t.splice(r,1)}}function vn(n,t){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var i=n.state;U(n,i,[],n._modules.root,!0),W(n,i,t)}function W(n,t,i){var r=n._state;n.getters={},n._makeLocalGettersCache=Object.create(null);var a=n._wrappedGetters,e={};F(a,function(o,p){e[p]=It(o,n),Object.defineProperty(n.getters,p,{get:function(){return e[p]()},enumerable:!0})}),n._state=l.reactive({data:t}),n.strict&&Ot(n),r&&i&&n._withCommit(function(){r.data=null})}function U(n,t,i,r,a){var e=!i.length,o=n._modules.getNamespace(i);if(r.namespaced&&(n._modulesNamespaceMap[o]&&!0!=="production"&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+i.join("/")),n._modulesNamespaceMap[o]=r),!e&&!a){var p=X(t,i.slice(0,-1)),m=i[i.length-1];n._withCommit(function(){m in p&&console.warn('[vuex] state field "'+m+'" was overridden by a module with the same name at "'+i.join(".")+'"'),p[m]=r.state})}var g=r.context=Tt(n,o,i);r.forEachMutation(function(s,d){var c=o+d;$t(n,c,s,g)}),r.forEachAction(function(s,d){var c=s.root?d:o+d,x=s.handler||s;Dt(n,c,x,g)}),r.forEachGetter(function(s,d){var c=o+d;Pt(n,c,s,g)}),r.forEachChild(function(s,d){U(n,t,i.concat(d),s,a)})}function Tt(n,t,i){var r=t==="",a={dispatch:r?n.dispatch:function(e,o,p){var m=V(e,o,p),g=m.payload,s=m.options,d=m.type;if((!s||!s.root)&&(d=t+d,!n._actions[d])){console.error("[vuex] unknown local action type: "+m.type+", global type: "+d);return}return n.dispatch(d,g)},commit:r?n.commit:function(e,o,p){var m=V(e,o,p),g=m.payload,s=m.options,d=m.type;if((!s||!s.root)&&(d=t+d,!n._mutations[d])){console.error("[vuex] unknown local mutation type: "+m.type+", global type: "+d);return}n.commit(d,g,s)}};return Object.defineProperties(a,{getters:{get:r?function(){return n.getters}:function(){return un(n,t)}},state:{get:function(){return X(n.state,i)}}}),a}function un(n,t){if(!n._makeLocalGettersCache[t]){var i={},r=t.length;Object.keys(n.getters).forEach(function(a){if(a.slice(0,r)===t){var e=a.slice(r);Object.defineProperty(i,e,{get:function(){return n.getters[a]},enumerable:!0})}}),n._makeLocalGettersCache[t]=i}return n._makeLocalGettersCache[t]}function $t(n,t,i,r){var a=n._mutations[t]||(n._mutations[t]=[]);a.push(function(o){i.call(n,r.state,o)})}function Dt(n,t,i,r){var a=n._actions[t]||(n._actions[t]=[]);a.push(function(o){var p=i.call(n,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:n.getters,rootState:n.state},o);return Lt(p)||(p=Promise.resolve(p)),n._devtoolHook?p.catch(function(m){throw n._devtoolHook.emit("vuex:error",m),m}):p})}function Pt(n,t,i,r){if(n._wrappedGetters[t]){console.error("[vuex] duplicate getter key: "+t);return}n._wrappedGetters[t]=function(e){return i(r.state,r.getters,e.state,e.getters)}}function Ot(n){l.watch(function(){return n._state.data},function(){_(n._committing,"do not mutate vuex store state outside mutation handlers.")},{deep:!0,flush:"sync"})}function X(n,t){return t.reduce(function(i,r){return i[r]},n)}function V(n,t,i){return Rt(n)&&n.type&&(i=t,t=n,n=n.type),_(typeof n=="string","expects string as the type, but found "+typeof n+"."),{type:n,payload:t,options:i}}var jt="vuex bindings",wn="vuex:mutations",K="vuex:actions",L="vuex",Mt=0;function Bt(n,t){At({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[jt]},function(i){i.addTimelineLayer({id:wn,label:"Vuex Mutations",color:yn}),i.addTimelineLayer({id:K,label:"Vuex Actions",color:yn}),i.addInspector({id:L,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),i.on.getInspectorTree(function(r){if(r.app===n&&r.inspectorId===L)if(r.filter){var a=[];Sn(a,t._modules.root,r.filter,""),r.rootNodes=a}else r.rootNodes=[zn(t._modules.root,"")]}),i.on.getInspectorState(function(r){if(r.app===n&&r.inspectorId===L){var a=r.nodeId;un(t,a),r.state=qt(Ht(t._modules,a),a==="root"?t.getters:t._makeLocalGettersCache,a)}}),i.on.editInspectorState(function(r){if(r.app===n&&r.inspectorId===L){var a=r.nodeId,e=r.path;a!=="root"&&(e=a.split("/").filter(Boolean).concat(e)),t._withCommit(function(){r.set(t._state.data,e,r.state.value)})}}),t.subscribe(function(r,a){var e={};r.payload&&(e.payload=r.payload),e.state=a,i.notifyComponentUpdate(),i.sendInspectorTree(L),i.sendInspectorState(L),i.addTimelineEvent({layerId:wn,event:{time:Date.now(),title:r.type,data:e}})}),t.subscribeAction({before:function(r,a){var e={};r.payload&&(e.payload=r.payload),r._id=Mt++,r._time=Date.now(),e.state=a,i.addTimelineEvent({layerId:K,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:e}})},after:function(r,a){var e={},o=Date.now()-r._time;e.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(e.payload=r.payload),e.state=a,i.addTimelineEvent({layerId:K,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:e}})}})})}var yn=8702998,Ut=6710886,Vt=16777215,kn={label:"namespaced",textColor:Vt,backgroundColor:Ut};function _n(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function zn(n,t){return{id:t||"root",label:_n(t),tags:n.namespaced?[kn]:[],children:Object.keys(n._children).map(function(i){return zn(n._children[i],t+i+"/")})}}function Sn(n,t,i,r){r.includes(i)&&n.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[kn]:[]}),Object.keys(t._children).forEach(function(a){Sn(n,t._children[a],i,r+a+"/")})}function qt(n,t,i){t=i==="root"?t:t[i];var r=Object.keys(t),a={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(r.length){var e=Gt(t);a.getters=Object.keys(e).map(function(o){return{key:o.endsWith("/")?_n(o):o,editable:!1,value:Z(function(){return e[o]})}})}return a}function Gt(n){var t={};return Object.keys(n).forEach(function(i){var r=i.split("/");if(r.length>1){var a=t,e=r.pop();r.forEach(function(o){a[o]||(a[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),a=a[o]._custom.value}),a[e]=Z(function(){return n[i]})}else t[i]=Z(function(){return n[i]})}),t}function Ht(n,t){var i=t.split("/").filter(function(r){return r});return i.reduce(function(r,a,e){var o=r[a];if(!o)throw new Error('Missing module "'+a+'" for path "'+t+'".');return e===i.length-1?o:o._children},t==="root"?n:n.root._children)}function Z(n){try{return n()}catch(t){return t}}var z=function(t,i){this.runtime=i,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},En={namespaced:{configurable:!0}};En.namespaced.get=function(){return!!this._rawModule.namespaced},z.prototype.addChild=function(t,i){this._children[t]=i},z.prototype.removeChild=function(t){delete this._children[t]},z.prototype.getChild=function(t){return this._children[t]},z.prototype.hasChild=function(t){return t in this._children},z.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},z.prototype.forEachChild=function(t){F(this._children,t)},z.prototype.forEachGetter=function(t){this._rawModule.getters&&F(this._rawModule.getters,t)},z.prototype.forEachAction=function(t){this._rawModule.actions&&F(this._rawModule.actions,t)},z.prototype.forEachMutation=function(t){this._rawModule.mutations&&F(this._rawModule.mutations,t)},Object.defineProperties(z.prototype,En);var R=function(t){this.register([],t,!1)};R.prototype.get=function(t){return t.reduce(function(i,r){return i.getChild(r)},this.root)},R.prototype.getNamespace=function(t){var i=this.root;return t.reduce(function(r,a){return i=i.getChild(a),r+(i.namespaced?a+"/":"")},"")},R.prototype.update=function(t){Cn([],this.root,t)},R.prototype.register=function(t,i,r){var a=this;r===void 0&&(r=!0),Fn(t,i);var e=new z(i,r);if(t.length===0)this.root=e;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],e)}i.modules&&F(i.modules,function(p,m){a.register(t.concat(m),p,r)})},R.prototype.unregister=function(t){var i=this.get(t.slice(0,-1)),r=t[t.length-1],a=i.getChild(r);if(!a){console.warn("[vuex] trying to unregister module '"+r+"', which is not registered");return}!a.runtime||i.removeChild(r)},R.prototype.isRegistered=function(t){var i=this.get(t.slice(0,-1)),r=t[t.length-1];return i?i.hasChild(r):!1};function Cn(n,t,i){if(Fn(n,i),t.update(i),i.modules)for(var r in i.modules){if(!t.getChild(r)){console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");return}Cn(n.concat(r),t.getChild(r),i.modules[r])}}var Nn={assert:function(n){return typeof n=="function"},expected:"function"},Yt={assert:function(n){return typeof n=="function"||typeof n=="object"&&typeof n.handler=="function"},expected:'function or object with "handler" function'},An={getters:Nn,mutations:Nn,actions:Yt};function Fn(n,t){Object.keys(An).forEach(function(i){if(!!t[i]){var r=An[i];F(t[i],function(a,e){_(r.assert(a),Wt(n,i,e,a,r.expected))})}})}function Wt(n,t,i,r,a){var e=t+" should be "+a+' but "'+t+"."+i+'"';return n.length>0&&(e+=' in module "'+n.join(".")+'"'),e+=" is "+JSON.stringify(r)+".",e}function Xt(n){return new y(n)}var y=function n(t){var i=this;t===void 0&&(t={}),_(typeof Promise!="undefined","vuex requires a Promise polyfill in this browser."),_(this instanceof n,"store must be called with the new operator.");var r=t.plugins;r===void 0&&(r=[]);var a=t.strict;a===void 0&&(a=!1);var e=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new R(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=e;var o=this,p=this,m=p.dispatch,g=p.commit;this.dispatch=function(c,x){return m.call(o,c,x)},this.commit=function(c,x,v){return g.call(o,c,x,v)},this.strict=a;var s=this._modules.root.state;U(this,s,[],this._modules.root),W(this,s),r.forEach(function(d){return d(i)})},Q={state:{configurable:!0}};y.prototype.install=function(t,i){t.provide(i||Ft,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!0!=="production";r&&Bt(t,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(n){_(!1,"use store.replaceState() to explicit replace store state.")},y.prototype.commit=function(t,i,r){var a=this,e=V(t,i,r),o=e.type,p=e.payload,m=e.options,g={type:o,payload:p},s=this._mutations[o];if(!s){console.error("[vuex] unknown mutation type: "+o);return}this._withCommit(function(){s.forEach(function(c){c(p)})}),this._subscribers.slice().forEach(function(d){return d(g,a.state)}),m&&m.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")},y.prototype.dispatch=function(t,i){var r=this,a=V(t,i),e=a.type,o=a.payload,p={type:e,payload:o},m=this._actions[e];if(!m){console.error("[vuex] unknown action type: "+e);return}try{this._actionSubscribers.slice().filter(function(s){return s.before}).forEach(function(s){return s.before(p,r.state)})}catch(s){console.warn("[vuex] error in before action subscribers: "),console.error(s)}var g=m.length>1?Promise.all(m.map(function(s){return s(o)})):m[0](o);return new Promise(function(s,d){g.then(function(c){try{r._actionSubscribers.filter(function(x){return x.after}).forEach(function(x){return x.after(p,r.state)})}catch(x){console.warn("[vuex] error in after action subscribers: "),console.error(x)}s(c)},function(c){try{r._actionSubscribers.filter(function(x){return x.error}).forEach(function(x){return x.error(p,r.state,c)})}catch(x){console.warn("[vuex] error in error action subscribers: "),console.error(x)}d(c)})})},y.prototype.subscribe=function(t,i){return hn(t,this._subscribers,i)},y.prototype.subscribeAction=function(t,i){var r=typeof t=="function"?{before:t}:t;return hn(r,this._actionSubscribers,i)},y.prototype.watch=function(t,i,r){var a=this;return _(typeof t=="function","store.watch only accepts a function."),l.watch(function(){return t(a.state,a.getters)},i,Object.assign({},r))},y.prototype.replaceState=function(t){var i=this;this._withCommit(function(){i._state.data=t})},y.prototype.registerModule=function(t,i,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),_(Array.isArray(t),"module path must be a string or an Array."),_(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,i),U(this,this.state,t,this._modules.get(t),r.preserveState),W(this,this.state)},y.prototype.unregisterModule=function(t){var i=this;typeof t=="string"&&(t=[t]),_(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var r=X(i.state,t.slice(0,-1));delete r[t[t.length-1]]}),vn(this)},y.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),_(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),vn(this,!0)},y.prototype._withCommit=function(t){var i=this._committing;this._committing=!0,t(),this._committing=i},Object.defineProperties(y.prototype,Q);class Rn{constructor(){this.minimaps=new Set}notifyMinimapOnUpdate(t,i){i?this.minimaps.add(t):this.minimaps.delete(t)}notifyMinimaps(){const t=new Set;this.minimaps.forEach(i=>i.takeSnapshot()||t.add(i)),t.forEach(i=>this.minimaps.delete(i))}}class Ln extends Rn{constructor(t,i){super();this.values=t,this.errors=i||{},this.values=t||{}}createStoreItem(t,i){for(const r of t.getStoreKeys(i))if(r&&r in this.values)return new Kt(i,r)}getError(t,i,r){const a=this.errors[i.key];return Array.isArray(a)?a.length?String(a[0]):"":a?String(a):""}getName(t,i){return i.key}getValue(t,i){return this.values[i.key]}isDisabled(t,i){return t.isDisabled(i.e)}update(t,i){this.errors=i||{},this.values=t||{},super.notifyMinimaps()}}class Kt{constructor(t,i){this.e=t,this.key=i}destructor(){}}const Zt={createFrameworkItem(n,t){return t.tagName==="INPUT"&&["checkbox","radio"].includes(t.type)?Pn.B4_Check:Pn.B4_Other}},P=class{constructor(n,t){this.form=n,this.resizeObserver=new ResizeObserver(this.onFormResize.bind(this)),this.page=t||n,this.resizeObserver.observe(n),this.updateLayoutOnScroll=this.updateLayoutOnScroll.bind(this),this.page.addEventListener("scroll",this.updateLayoutOnScroll,!0)}clearLayoutHandler(){this.resizeObserver.disconnect(),this.page.removeEventListener("scroll",this.updateLayoutOnScroll,!0),this.layoutHandler=void 0}clipsContentX(n){const{overflow:t,overflowX:i}=n.style;return P.CLIP.includes(t)||P.CLIP.includes(i)}clipsContentY(n){const{overflow:t,overflowY:i}=n.style;return P.CLIP.includes(t)||P.CLIP.includes(i)}getDisplayLabel(n,t){return t?.getAttribute("aria-label")||t?.textContent||n.getAttribute("aria-label")||n.id}getDisplayValue(n,t,i){const r=n.tagName;if(r==="INPUT"){const a=n;return a.type==="checkbox"||a.type==="radio"?a.checked?t:"":a.type==="password"?"*****":String(i)}if(r==="SELECT"){const a=Array.isArray(i)?i:[i];if(!a.length)return String(i);const e=n.options;return typeof a[0]=="number"?a.map(o=>e[o].text).join(`
`):Array.from(e).filter(o=>a.includes(o.value)).map(o=>o.text).join(`
`)}return String(i)}getElements(n){const t=Array.from(this.form.elements);return n.length&&t.push(...Array.from(this.page.querySelectorAll("#"+n.join(",#")))),t}getLabelFor(n){let t=n.id?this.page.querySelector("label[for="+n.id+"]"):void 0;return!t&&n.parentElement?.tagName==="LABEL"&&(t=n.parentElement),!t&&n.previousElementSibling?.tagName==="LABEL"&&(t=n.previousElementSibling),t}getParent(n){return n.parentElement}getPlaceholder(n){return n.getAttribute("placeholder")||""}getRect(n){return(n||this.page).getBoundingClientRect()}getStoreKeys(n){const t=n.getAttribute("name");return t?[t,n.id]:[n.id]}isDisabled(n){if(n.tagName!=="TEXTAREA")return n.disabled;const t=n;return t.disabled||t.readOnly}isHidden(n){return n.hidden}setLayoutHandler(n){this.layoutHandler=n}onFormResize(){this.layoutHandler&&this.layoutHandler.handleLayout()}updateLayoutOnScroll(n){n.target instanceof HTMLElement&&this.layoutHandler&&this.layoutHandler.handleLayout(n.target)}};let In=P;In.CLIP=["auto","hidden","scroll"];class Qt{constructor(t){if(this.wrapperClass=t,!t)throw new Error("FmmFrameworkItemBase requires wrapperClass")}destructor(){}getEnvelope(t,i,r){let a=i.parentElement;for(;a&&a.tagName!=="FORM"&&!a.classList.contains(this.wrapperClass);)a=a.parentElement;if(a&&a.tagName!=="FORM")return a;if(r){for(a=r.parentElement;a&&a.tagName!=="FORM"&&!a.classList.contains(this.wrapperClass);)a=a.parentElement;return a&&a.tagName!=="FORM"?a:void 0}}getError(t,i,r,a){return""}getLabel(t,i){return i.querySelector("LABEL")||i.querySelector("[aria-label]")}getValue(t,i,r,a){return""}}const Tn=class extends Rn{constructor(){super(...arguments);this.listener=this.notifyMinimaps.bind(this)}createStoreItem(n,t){const i=t.tagName;if(i==="INPUT"){const r=t;return Tn.INPUTTYPES.includes(r.type)?new Jt(r,this.listener):void 0}if(i==="SELECT")return new ni(t,this.listener);if(i==="TEXTAREA")return new ti(t,this.listener)}getError(n,t,i){return t.fe.validationMessage||t.fe.required&&!t.fe.value&&"Required"||""}getName(n,t){return t.fe.name}getValue(n,t){return t.getValue()}isDisabled(n,t){return n.isDisabled(t.fe)}};let $n=Tn;$n.INPUTTYPES=["checkbox","color","date","datetime","datetime-local","email","month","number","password","radio","range","search","tel","text","time","url","week"];class Dn extends Qt{constructor(t){super(t)}getError(t,i,r,a){if(!i.classList.contains("is-invalid"))return"";for(let e=i.nextElementSibling;e&&e!==i;e=e.nextElementSibling)if(e.classList.contains("invalid-feedback"))return e.textContent||"";return""}}const Pn={B4_Check:new Dn("form-check"),B4_Other:new Dn("form-group")};class J{constructor(t,i,r){this.fe=t,this.event=i,this.listener=r,t.addEventListener(i,r)}destructor(){this.fe.removeEventListener(this.event,this.listener)}getValue(){return this.fe.value||void 0}isDisabled(){return this.fe.disabled}}class Jt extends J{constructor(t,i){super(t,"input",i)}}class ni extends J{constructor(t,i){super(t,"change",i);this.e=t,this.isMultiple=t.multiple}getValue(){const t=this.e.selectedIndex;if(t<0)return;if(!this.isMultiple)return[t];const i=[],r=this.e.options;for(let a=r.length;--a>=t;)r[a].selected&&i.push(a);return i.reverse()}}class ti extends J{constructor(t,i){super(t,"input",i);this.e=t}}class h{static createMinimap(t,i){if(!t.anchor)throw new Error("FmmMinimap not created: invalid anchor");return new nn(i).createMinimap({...t,ordinal:0,usePanelDetail:!1})}static createPanel(t,i,r,a,e){const o="FmmPanel not created: invalid ";if(!t)throw new Error(o+"parent");if(i<1||i>20)throw new Error(o+"minimapsCount");return new nn(e,i,!!a,t,r)}static trim(t){return t?.trim().replace(/\u200B/g,"")}}h.CLASS=Object.freeze({Detached:"fmm-detached",DetailPopup:"fmm-detail",Disabled:"fmm-disabled",Error:"fmm-error",Fieldset:"fmm-fieldset",Header:"fmm-header",Invalid:"fmm-invalid",Legend:"fmm-legend",MinimapFrame:"fmm-frame",MinimapPopup:"fmm-popup",Optional:"fmm-optional",Pushpin:"fmm-pushpin",Required:"fmm-required",Title:"fmm-title",Valid:"fmm-valid",Value:"fmm-value"}),h.CSS=`
	circle.fmm-pushpin {
		fill: blue;
	}
	div.fmm-detail,
	div.fmm-popup {
		background-color: darkgray;
		border: 1px solid black;
		box-shadow: 5px 5px lightgray;
		padding-top: 10px;
		z-index: 1;
	}
	div.fmm-disabled {
		background-color: darkgray;
	}
	div.fmm-disabled,
	div.fmm-invalid,
	div.fmm-optional,
	div.fmm-required,
	div.fmm-valid {
		border: 1px solid transparent;
	}
	div.fmm-frame {
		background-color: white;
	}
	div.fmm-header {
		border-bottom: 5px groove;
		margin: 0;
	}
	div.fmm-invalid {
		background-color: red;
	}
	div.fmm-optional {
		border-color: black;
	}
	div.fmm-required {
		border-color: red;
	}
	div.fmm-valid {
		background-color: green;
	}
	fieldset.fmm-fieldset {
		background-color: white;
		border-top: 5px groove;
		min-width: 0;
		padding: 5px 10px;
	}
	fieldset.fmm-fieldset div.fmm-disabled,
	fieldset.fmm-fieldset div.fmm-invalid,
	fieldset.fmm-fieldset div.fmm-optional,
	fieldset.fmm-fieldset div.fmm-required,
	fieldset.fmm-fieldset div.fmm-valid {
		border-width: 2px;
	}
	label.fmm-title {
		font-size: smaller;
		padding: 2px;
	}
	legend.fmm-legend {
		background-color: white;
		margin: 5px;
		max-width: 100%;
		padding-right: 5px;
	}
	textarea.fmm-value {
		height: 3em;
		width: 100%;
	}
	div.fmm-detached.fmm-popup,
	div.fmm-detached div.fmm-detail {
		background-color: lightgray;
	}
	div.fmm-detached.fmm-frame,
	div.fmm-detached div.fmm-frame,
	div.fmm-detached fieldset.fmm-fieldset,
	iv.fmm-detached legend.fmm-legend {
		background-color: lightgray !important;
	}
	`,h.STATUS_CLASS=Object.freeze({Disabled:"fmm-disabled",Invalid:"fmm-invalid",Optional:"fmm-optional",Required:"fmm-required",Valid:"fmm-valid"});class ii{constructor(t,i,r){this.parent=r,this.clip=r?.clipRect(t.getRect(i))||t.getRect(i),this.clipX=t.clipsContentX(i),this.clipY=t.clipsContentY(i)}clipRect(t){const i=Math.max(t.left,this.clip.left),r=Math.max(t.top,this.clip.top),a=Math.max(0,(this.clipX?Math.min(t.right,this.clip.right):t.right)-i),e=Math.max(0,(this.clipY?Math.min(t.bottom,this.clip.bottom):t.bottom)-r),o={left:i,top:r,width:a,height:e,right:i+a,bottom:r+e};return a&&e&&this.parent?this.parent.clipRect(o):o}}class ri{constructor(t,i){this.debounceMsec=t,this.task=i,this._doTask=this.doTask.bind(this),this.notBeforeMsec=0}destructor(){!this.task||(this.timer&&window.clearTimeout(this.timer),this.timer=void 0)}cancel(){return this.timer?(window.clearTimeout(this.timer),this.timer=void 0,!0):!1}doNow(){!this.task||(this.cancel(),this.task())}schedule(){!this.task||(this.notBeforeMsec=Date.now()+this.debounceMsec,this.timer||(this.timer=window.setTimeout(this._doTask,this.debounceMsec)))}doTask(){const t=this.notBeforeMsec-Date.now();t>0?this.timer=window.setTimeout(this._doTask,t):(this.timer=void 0,this.task())}}class On{constructor(t,i){this.data=I.NULLDATA,this.minimapId=0;const r=this.e=t.createElement("FIELDSET");r.className=h.CLASS.Fieldset;const a=E.ELLIPSIS(t.createElement("LEGEND"));a.className=h.CLASS.Legend,this.status=a.appendChild(t.createElement("DIV")),this.status.style.display="inline-block",this.status.style.margin="3px 6px 0 3px",this.status.style.height="0.7em",this.status.style.width="1em",this.label=a.appendChild(t.createElement("SPAN")),this.label.textContent=E.NBSP,r.appendChild(a),this.value=r.appendChild(t.createElement("TEXTAREA")),this.value.className=h.CLASS.Value,this.value.readOnly=!0,this.error=E.ELLIPSIS(r.appendChild(t.createElement("DIV"))),this.error.className=h.CLASS.Error,this.error.textContent=E.NBSP,i&&i.appendChild(r)}destructor(){this.e.parentElement&&this.e.parentElement.removeChild(this.e)}clear(t){t&&t!==this.data||(this.error.textContent=this.label.textContent=E.NBSP,this.status.className=this.value.placeholder=this.value.value="",this.data=I.NULLDATA)}refreshDisplay(t){if(t!==this.minimapId)return;const i=this.data,r=i.aggregateLabel?.concat(": ")||"";this.error.textContent=this.error.title=i.error||E.NBSP,this.label.textContent=this.label.title=r+i.label||E.NBSP,this.status.className=h.STATUS_CLASS[i.status],this.value.placeholder=i.placeholder||"",this.value.value=i.aggregateValues?.join(`
`)||i.value||""}setDisplay(t,i){this.data=i||I.NULLDATA,this.refreshDisplay(this.minimapId=t)}}const jn=class{constructor(n,t,i,r){this.e=t,this.storeItem=i;const a=r.form.getLabelFor(t);this.dynamicLabel=r.dynamicLabels.includes(n),this.form=r.form,this.framework=r.framework?.createFrameworkItem(n,t)||jn.DEFAULT_FRAMEWORK,this.envelope=this.framework.getEnvelope(n,t,a)||this.getCommonAncestor(t,a)||t,this.label=a||this.framework.getLabel(n,this.envelope),this.snapshot=new I(n,r)}destructor(){this.framework.destructor(),this.storeItem.destructor()}layoutSnapshot(n,t,i){const r=this.form.getParent(this.envelope);if(!r)return this.snapshot.setRect();const a=(n.get(r)||this.getClipContext(r,n)).clipRect(this.form.getRect(this.envelope));if(!a.width||!a.height)return this.snapshot.setRect();const e=Math.floor((a.left-t.left)*i),o=Math.floor((a.top-t.top)*i),p=Math.max(2,Math.floor(a.height*i)),m=Math.max(2,Math.floor(a.width*i));return this.snapshot.setRect(new DOMRectReadOnly(e,o,m,p))}removeIfDetached(){if(this.form.getParent(this.envelope)){for(let n=this.e;n;n=this.form.getParent(n))if(n===this.envelope)return!1}return this.snapshot.destructor(),this.destructor(),!0}takeSnapshot(n,t){const i=this.snapshot.data,r=i.name;(!i.label||this.dynamicLabel)&&(i.label=h.trim(n.getDisplayLabel(this.e,this.label)||r),i.placeholder=h.trim(this.form.getPlaceholder(this.e)));let a=h.trim(this.framework.getValue(r,this.e,this.envelope,i.label));if(!a){const o=t.getValue(n,this.storeItem);o&&(a=h.trim(n.getDisplayValue(this.e,i.label,o)))}i.value=a;const e=!!a;return e&&i.aggregateValues&&i.aggregateValues.push(a),i.error=h.trim(this.framework.getError(r,this.e,this.envelope,e)||t.getError(n,this.storeItem,e)),t.isDisabled(n,this.storeItem)?this.snapshot.setStatus("Disabled"):e?this.snapshot.setStatus(i.error?"Invalid":"Valid"):this.snapshot.setStatus(i.error?"Required":"Optional"),i}getClipContext(n,t){const i=this.form.getParent(n),r=i?t.get(i)||this.getClipContext(i,t):void 0,a=new ii(this.form,n,r);return t.set(n,a),a}getCommonAncestor(n,t){const i=[];for(;t;t=this.form.getParent(t))i.push(t);for(;n&&!i.includes(n);)n=this.form.getParent(n);return n}};let Mn=jn;Mn.DEFAULT_FRAMEWORK={destructor:()=>{},getEnvelope:(n,t,i)=>{},getError:(n,t,i,r)=>"",getLabel:(n,t)=>{},getValue:(n,t,i,r)=>""};const Bn=class{constructor(){this.list=[],this.ignore=new WeakSet,this.nameCounter=0}destructor(){this.ignore=new WeakSet,this.list.splice(0).forEach(n=>n.destructor())}compose(n){const t=n.form.getElements(n.customElementIds);this.list.splice(0).forEach(r=>r.removeIfDetached()||this.list.push(r));const i=new WeakSet;this.list.forEach(r=>i.add(r.e)),t.forEach(r=>{if(i.has(r)||this.ignore.has(r))return;if(n.form.isHidden(r))return this.ignore.add(r);const a=n.store.createStoreItem(n.form,r);if(a){const e=n.store.getName(n.form,a)||Bn.NAMEPREFIX+String(this.nameCounter++);this.list.push(new Mn(e,r,a,n))}i.add(r)})}layoutSnapshots(n,t,i){this.list.forEach(r=>r.layoutSnapshot(n,t,i))}takeSnapshots(n,t){return this.list.map(i=>i.takeSnapshot(n,t))}};let Un=Bn;Un.NAMEPREFIX="$FmmFSI";const Vn=class{constructor(n,t,i,r){this.dragData="";const a=this.div=n.createElement("DIV");a.className=h.CLASS.MinimapFrame,a.draggable=!0,a.ondragstart=this.onDragStart.bind(this),a.style.cursor="grab",a.style.position="relative";const e=this.header=a.appendChild(n.createElement("DIV"));e.className=h.CLASS.Header,e.style.overflow="hidden",e.style.whiteSpace="nowrap";const o=E.ELLIPSIS(n.createElement("LABEL"));o.className=h.CLASS.Title,o.style.cursor="inherit",o.textContent=o.title=i;const p=t.style;if(r){p.position="absolute",p.top=p.bottom=p.left=p.right="0",Vn.POSITIONS.includes(r.style.position)||(r.style.position="relative"),r.appendChild(t),this.popup=new tn(n,h.CLASS.MinimapPopup,this.div,t);let m=t.previousElementSibling;for(;m&&!m.className.includes("fmm-");)m=m.previousElementSibling;m&&r.removeChild(m),this.setDestroyOnDetachFromDOM(r,t)}else e.appendChild(t),p.display="inline-block",p.margin="1px 2px 0 1px",p.height="0.5em",p.width="0.8em";e.appendChild(o)}destructor(){!this.div.parentElement||(this.detach(),this.popup&&this.popup.destructor(),this.popup=void 0,this.div.onmouseenter=this.div.onmouseleave=null,this.div.parentElement?.removeChild(this.div))}detach(){this.popup?this.div.parentElement?.classList.add(h.CLASS.Detached):this.div.classList.add(h.CLASS.Detached)}newDetailPopup(n,t){return new tn(n,h.CLASS.DetailPopup,t.e,this.div)}setSnapshotResult(n){this.dragData=JSON.stringify(n)}onDragStart(n){n.dataTransfer?.setData("text/plain",this.dragData)}setDestroyOnDetachFromDOM(n,t){new MutationObserver((i,r)=>{t.parentElement!==n&&(r.disconnect(),this.destructor())}).observe(n,{childList:!0})}};let qn=Vn;qn.POSITIONS=["absolute","fixed","relative","sticky"];const E={ELLIPSIS:n=>(n.style.overflow="hidden",n.style.textOverflow="ellipsis",n.style.whiteSpace="nowrap",n),NBSP:"\xA0",NOP:()=>{}},O=class{constructor(n,t){this.onUpdateBeingCalled=!1,this.pendingCompose=!1,this.pendingLayout=!1,this.pendingSnapshot=!1;const i=t.ef,r=i.createElement("DIV");this.ordinal=n.ordinal||0,this.summaryData={...I.NULLDATA,label:n.title},this.title=n.title;const a=new qn(i,r,this.title,n.anchor);t.add(this,n.anchor?void 0:a.div),a.div.onmouseenter=this.onFrameEnter.bind(this),a.div.onmouseleave=this.onFrameLeave.bind(this),n.anchor&&n.zoomFactor&&a.popup&&a.popup.setZoomable(this,a.header,Math.min(O.MAX_ZOOMFACTOR,Math.max(0,n.zoomFactor))),a.header.onmouseenter=this.onHeaderEnter.bind(this);const e=new ei(i,a.div);this.minimapId=O.idCounter++,this.useWidthToScale=!!n.useWidthToScale,this.verbosity=n.verbosity||0,this.d={clipContextAncestors:new WeakMap,doUpdates:new ri(n.debounceMsec||O.DEFAULT_DEBOUNCEMSEC,()=>this.doPendingUpdates()),onUpdate:n.onUpdate||O.ONUPDATE,paramUpdates:{aggregateLabels:n.aggregateLabels||{},aggregateValuesMap:{},customElementIds:[],dynamicLabels:n.dynamicLabels||[],ef:t.ef,form:n.form,framework:n.framework,snapshotUpcall:{hideDetail:this.snapshotHidden.bind(this),showDetail:this.snapshotActive.bind(this)},snapshotsPanel:e,store:n.store||new $n},storeItems:new Un};const o=n.usePanelDetail&&t.detail||new On(i);this.z={detail:o,detailPopup:o===t.detail?void 0:n.anchor?a.newDetailPopup(i,o):t.newDetailPopup(o),frame:a,panel:t,pin:new ai(i,a.div),snapshotsPanel:e,status:r},n.anchor&&(r.onmouseover=this.onStatusEnter.bind(this)),this.d.paramUpdates.store.notifyMinimapOnUpdate(this,!0),this.d.paramUpdates.form.setLayoutHandler(this)}static ONUPDATE(n){}destructor(){this.detach();const n=this.z;!n||(this.z=void 0,n.status.parentElement?.removeChild(n.status),n.snapshotsPanel.destructor(),n.pin.destructor(),n.frame.destructor(),n.detail.clear(this.activeSnapshot),n.detail!==n.panel.detail&&n.detail.destructor(),n.detailPopup&&n.detailPopup.destructor(),n.panel.remove(this))}compose(n){!this.d||(this.d.paramUpdates.customElementIds=n||[],this.pendingCompose=this.pendingLayout=!0,this.takeSnapshot())}get isDetached(){return this.d===void 0}get isPinned(){return this.z?.pin.isPinned}get isPinnedToPanelDetail(){return this.isPinned&&this.z?.detail===this.z?.panel.detail}detach(){const n=this.d,t=this.z;!n||!t||(this.d=void 0,n.doUpdates.destructor(),this.pendingCompose=this.pendingLayout=!1,this.pendingSnapshot=!0,this.doPendingUpdates(),t.frame.detach(),n.paramUpdates.form.clearLayoutHandler(),n.paramUpdates.store.notifyMinimapOnUpdate(this,!1),n.storeItems.destructor())}handleLayout(n){(!n||this.d?.clipContextAncestors.has(n))&&(this.pendingLayout=!0,this.d?.doUpdates.schedule())}layout(n){const t=this.d,i=this.z;if(!t||!i)return;const r=n&&this.verbosity?Date.now():0,a=t.paramUpdates.form.getRect();if(a?.height&&a.width){t.clipContextAncestors=new WeakMap;const e=i.snapshotsPanel.computeScale(a,i.frame,this.useWidthToScale);i.snapshotsPanel.show(!1),t.storeItems.layoutSnapshots(t.clipContextAncestors,a,e),i.snapshotsPanel.show(!0),n&&(i.pin.trackOff(i.frame),i.pin.trackOn(i.snapshotsPanel,n))}n&&this.verbosity&&console.log("FormMinimap["+this.title+"] Layout(ms)="+String(Date.now()-r))}notifyMinimap(n,t){}onFrameEnter(n){const t=this.z;!t||(this.isPinned||t.pin.trackOn(t.snapshotsPanel,n),this.activeSnapshot&&t.detail.setDisplay(this.minimapId,this.activeSnapshot),this.showPopups())}onFrameLeave(){const n=this.z;!n||this.isPinned||(n.pin.trackOff(n.frame),n.detail.clear(this.activeSnapshot),n.detailPopup?n.detailPopup.hide():n.panel.hideDetailPopup(),n.frame.popup&&n.frame.popup.hide())}onHeaderEnter(n){n.stopPropagation(),!(!this.z||this.isPinned)&&(this.activeSnapshot=void 0,this.z.detail.setDisplay(this.minimapId,this.summaryData))}onStatusEnter(n){n.stopPropagation(),this.z?.frame.popup?.isShowing||this.showPopups()}takeSnapshot(){return this.d?(this.pendingSnapshot=!0,this.d.doUpdates.schedule(),!0):!1}doTakeSnapshot(){const n=this.d,t=this.z;if(!n||!t)return{snapshots:[],status:"Disabled",title:this.title};const i=n.paramUpdates,r=Object.values(i.aggregateValuesMap);r.forEach(p=>p.splice(0));const a=n.storeItems.takeSnapshots(i.form,i.store);r.forEach(p=>p.sort());const e=t.snapshotsPanel.computeStatus();t.status.className=h.STATUS_CLASS[e];const o={};return e!=="Disabled"&&a.filter(p=>p.error&&p.status===e).forEach(p=>o[p.aggregateLabel||p.label]=p.error),this.summaryData.aggregateValues=Object.keys(o).sort().map(p=>p+": "+o[p]),this.summaryData.status=e,{snapshots:a,status:e,title:this.title}}doPendingUpdates(){const n=this.d,t=this.z;if(!n||!t)return;const i=this.verbosity?Date.now():0;this.pendingCompose&&n.storeItems.compose(n.paramUpdates);const r=this.verbosity?Date.now():0;this.pendingLayout&&this.layout();const a=this.verbosity?Date.now():0;let e=a;if(this.pendingSnapshot){const o=this.doTakeSnapshot();t.frame.setSnapshotResult(o),this.verbosity&&(e=Date.now()),t.detail.refreshDisplay(this.minimapId),this.onUpdateBeingCalled||(this.onUpdateBeingCalled=!0,n.onUpdate(o),this.onUpdateBeingCalled=!1)}if(this.verbosity){const o=this.pendingCompose?" Compose(ms)="+String(r-i):"",p=this.pendingLayout?" Layout(ms)="+String(a-r):"",m=this.pendingSnapshot?" Snapshot(ms)="+String(e-a):"";(o||p||m)&&console.log("FormMinimap["+this.title+"]"+o+p+m)}this.pendingCompose=this.pendingLayout=this.pendingSnapshot=!1}showPopups(){const n=this.z;!n||(this.d&&this.d.doUpdates.doNow(),n.frame.popup&&n.frame.popup.show(!0),n.detailPopup?n.detailPopup.show(!1):n.panel.showDetailPopup())}snapshotActive(n){this.isPinned||this.z?.detail.setDisplay(this.minimapId,this.activeSnapshot=n)}snapshotHidden(n,t){const i=this.z;!i||(this.activeSnapshot===t&&(this.activeSnapshot=void 0),i.detail.clear(t),i.pin.trackOff(i.frame,n))}};let q=O;q.DEFAULT_DEBOUNCEMSEC=200,q.MAX_ZOOMFACTOR=5,q.idCounter=0;const Gn=class{constructor(n=Gn.EF,t=1,i=!1,r,a){if(this.ef=n,this.minimapsCount=t,this.vertical=i,this.minimaps=[],r){this.detail=new On(this.ef,a),this.popupParent=r.appendChild(this.ef.createElement("DIV"));const e=this.popupParent.style;e.position="relative",a||(this.detailPopup=this.newDetailPopup(this.detail)),this.div=r.appendChild(this.ef.createElement("DIV")),this.div.style.height=this.div.style.width="100%",this.div.style.overflow="hidden",this.div.style.position="relative"}}destructor(){this.detail&&this.detail.destructor(),this.detailPopup&&this.detailPopup.destructor(),this.minimaps.splice(0).forEach(n=>n.destructor())}add(n,t){if(t&&this.div){this.div.appendChild(t),t.style.position="absolute";const i=100/this.minimapsCount;this.vertical?(t.style.top=String(n.ordinal*i)+"%",t.style.height=String(i*.9)+"%",t.style.right=t.style.left="0"):(t.style.left=String(n.ordinal*i)+"%",t.style.width=String(i*.9)+"%",t.style.top=t.style.bottom="0")}this.minimaps[n.ordinal]&&this.minimaps[n.ordinal].destructor(),this.minimaps[n.ordinal]=n}createMinimap(n){const t="FmmMinimap <"+n.title+"> not created: invalid ";if(!n.form)throw new Error(t+"form");if(n.ordinal&&n.ordinal>=this.minimapsCount)throw new Error(t+"ordinal");return new q(n,this)}destroyDetached(){this.minimaps.filter(n=>n.isDetached).forEach(n=>n.destructor())}hideDetailPopup(){this.detailPopup&&!this.minimaps.find(n=>n.isPinnedToPanelDetail)&&this.detailPopup.hide()}newDetailPopup(n){return this.popupParent?new tn(this.ef,h.CLASS.DetailPopup,n.e,this.popupParent):void 0}remove(n){delete this.minimaps[n.ordinal]}showDetailPopup(){this.detailPopup&&this.detailPopup.show(!1)}};let nn=Gn;nn.EF={createElement:n=>document.createElement(n),createElementNS:(n,t)=>document.createElementNS(n,t)};class tn{constructor(t,i,r,a){this.div=a.appendChild(t.createElement("DIV")),this.div.className=i,this.div.style.display="none",this.div.style.position="absolute",this.div.appendChild(r),a.style.overflow="visible",r.style.display="block",r.style.position="relative"}destructor(){this.div.parentElement&&this.div.parentElement.removeChild(this.div)}get isShowing(){return this.div.style.display!=="none"}getElementSize(t){const i=this.div.style;if(i.display!=="none"){const e=this.div.getBoundingClientRect(),o=t.getBoundingClientRect();return[e.height-(o.top-e.top),e.width-(o.left-e.left)]}i.visibility="hidden",i.display="block";const r=this.div.getBoundingClientRect(),a=t.getBoundingClientRect();return i.display="none",i.visibility="visible",[r.height-(a.top-r.top),r.width-(a.left-r.left)]}hide(){this.div.style.display="none"}setZoomable(t,i,r){let a=!1,e=0,o=0;i.style.cursor="zoom-in",i.onclick=p=>{if(p.button===0){if(p.stopPropagation(),!e){const m=this.div.getBoundingClientRect();e=m.height,o=m.width}t.useWidthToScale?this.div.style.width=String(a?o:o*r)+"px":this.div.style.height=String(a?e:e*r)+"px",t.layout(p),a=!a,i.style.cursor=a?"zoom-out":"zoom-in"}}}show(t){const i=Math.max(document.documentElement.clientHeight,window.innerHeight||0),r=Math.max(document.documentElement.clientWidth,window.innerWidth||0),a=this.div.style;if(a.display!=="none")return;a.left=a.bottom="auto",a.right=t?"50%":"105%",a.top=t?"50%":"0",a.visibility="hidden",a.display="block";const e=this.div.getBoundingClientRect();if(e.left<0){a.left=t?"50%":"105%",a.right="auto";const o=this.div.getBoundingClientRect();r-o.left-o.width<e.left&&(a.left="auto",a.right=t?"50%":"105%")}if(e.bottom>i){a.bottom=t?"50%":"0",a.top="auto";const o=this.div.getBoundingClientRect();o.top+o.height-i>e.bottom&&(a.bottom="auto",a.top=t?"50%":"0")}a.visibility="visible"}}class ai{constructor(t,i){this.SIZE=24,this.parentCursor="none",this.pinned=!1;const r="http://www.w3.org/2000/svg",a=i.appendChild(t.createElementNS(r,"svg"));this.svg=a,i.style.overflow="visible",a.setAttribute("height",String(this.SIZE)),a.setAttribute("width",String(this.SIZE));const e=this.SIZE/4,o=a.appendChild(t.createElementNS(r,"circle"));o.setAttribute("class",h.CLASS.Pushpin),o.setAttribute("cx",String(this.SIZE-e)),o.setAttribute("cy",String(e)),o.setAttribute("r",String(e));const p=a.appendChild(t.createElementNS(r,"polygon"));[[this.SIZE/2+1,Math.ceil(e*1.5)],[0,this.SIZE],[Math.ceil(this.SIZE*.6),e*2-1]].forEach(([m,g])=>{const s=this.svg.createSVGPoint();s.x=m,s.y=g,p.points.appendItem(s)}),p.setAttribute("style","fill:black"),a.style.display="none",a.style.position="absolute"}destructor(){this.trackOff()}get isPinned(){return this.pinned}trackOff(t,i){const r=this.svg.parentNode;i&&i!==r||(this.pinned=!1,this.svg.style.display="none",r.onclick=r.onmousemove=null,r.style.cursor=this.parentCursor,t?t.div.appendChild(this.svg):r.removeChild(this.svg))}trackOn(t,i){const r=this.svg.parentNode,a=r.getBoundingClientRect();r.appendChild(this.svg),this.parentCursor=r.style.cursor,this.svg.style.zIndex=String(+r.style.zIndex+1),r.onclick=e=>{if(e.button===0)if(this.pinned)this.pinned=!1,r.style.cursor="none",r.appendChild(this.svg),this.move(e,a);else{if(this.pinned=!0,r.style.cursor=this.parentCursor,t.reparentPushPinToSnapshot(this.svg,e))return;const o=Math.max(1,(e.clientX-a.left)*100/a.width);this.svg.style.left=String(o)+"%";const p=Math.min(95,(a.top+a.height-e.clientY)*100/a.height);this.svg.style.bottom=String(p)+"%"}},r.onmousemove=e=>this.move(e,a),this.move(i,a),r.style.cursor="none",this.svg.style.display="block"}move(t,i){if(this.pinned)return;const r=t.clientX-i.left,a=i.top+i.height-t.clientY;this.svg.style.left=String(Math.min(i.width,Math.max(r,0)))+"px",this.svg.style.bottom=String(Math.min(i.height,Math.max(a,0)))+"px"}}const Hn=class{constructor(n,t){const i=t.aggregateLabels[n];i&&!(n in t.aggregateValuesMap)&&(t.aggregateValuesMap[n]=[]),this.data={...Hn.NULLDATA,aggregateLabel:i,aggregateValues:t.aggregateValuesMap[n],name:n},this.upcall=t.snapshotUpcall,this.div=t.ef.createElement("DIV"),this.div.style.position="absolute",this.div.onmouseover=r=>{r.stopPropagation(),this.upcall.showDetail(this.data)},t.snapshotsPanel.addSnapshot(this,this.div),this.destructor=()=>{this.div.onmouseover=null,this.upcall.hideDetail(this.div,this.data),t.snapshotsPanel.removeSnapshot(this,this.div),this.destructor=E.NOP}}destructor(){}reparentPushPin(n,t,i){const r=this.rect;return!r||t<r.left||t>r.left+r.width||i<r.top||i>r.top+r.height?!1:(this.div.appendChild(n),n.style.left=String((t-r.left)*100/r.width)+"%",n.style.bottom=String((r.top+r.height-i)*100/r.height)+"%",!0)}setRect(n){if(this.rect&&n&&this.rect.left===n.left&&this.rect.top===n.top&&this.rect.right===n.right&&this.rect.bottom===n.bottom)return;this.rect=n;const t=this.div.style;return n?(t.left=String(n.left)+"px",t.top=String(n.top)+"px",t.height=String(n.height)+"px",t.width=String(n.width)+"px",t.display="block"):(this.upcall.hideDetail(this.div,this.data),t.display="none")}setStatus(n){this.div.className=h.STATUS_CLASS[this.data.status=n]}};let I=Hn;I.NULLDATA={aggregateLabel:"",aggregateValues:void 0,error:"",label:"",name:"",placeholder:"",status:"Optional",value:""};class ei{constructor(t,i){this.list=[],this.div=i.appendChild(t.createElement("DIV")),this.div.style.position="relative"}destructor(){this.div.parentElement&&this.div.parentElement.removeChild(this.div),this.list.splice(0).forEach(t=>t.destructor())}addSnapshot(t,i){this.list.push(t),this.div.appendChild(i)}computeScale(t,i,r){if(!this.div.parentElement)return 0;const[a,e]=i.popup?i.popup.getElementSize(this.div):this.getSize(),o=a/t.height,p=e/t.width,m=this.div.parentElement.style,g=this.div.style;if(i.popup||(r=t.height*p<=a),r){const d=String(Math.round(t.height*p))+"px";if(m.width=g.width=String(e)+"px",g.height=d,g.height===d)return p}else{const d=String(Math.round(t.width*o))+"px";if(g.height=String(a)+"px",m.width=g.width=d,m.width===d&&g.width===d)return o}const s=Math.min(o,p);return g.height=String(Math.round(t.height*s))+"px",m.width=g.width=String(Math.round(t.width*s))+"px",s}computeStatus(){let t="Disabled",i,r;const a=this.list;for(let e=a.length;--e>=0;){const o=a[e].data.status;if(o==="Invalid")return o;o!=="Disabled"&&(t=void 0),o==="Required"&&(i=o),o==="Valid"&&(r=o)}return i||t||r||"Optional"}removeSnapshot(t,i){const r=this.list.findIndex(a=>a===t);r<0||(this.list.splice(r,1),this.div.removeChild(i))}reparentPushPinToSnapshot(t,i){const r=this.div.getBoundingClientRect(),a=i.clientX-r.left,e=i.clientY-r.top;return!!this.list.find(o=>o.reparentPushPin(t,a,e))}show(t){this.div.style.display=t?"block":"none"}getSize(){const t=this.div.getBoundingClientRect();if(!this.div.parentElement)return[t.height,t.width];const i=this.div.parentElement.getBoundingClientRect();return[i.height-(t.top-i.top),i.width-(t.left-i.left)]}}const C=class{constructor(){this.fAddRandomUseName=this.addRandomUseName.bind(this),this.fOnUpdate=this.onUpdate.bind(this),this.fRemoveUncheckedUseNames=this.removeUncheckedUseNames.bind(this),this.fSubmit=this.submit.bind(this),this.names1000=[],this.customElementIds=[],this.realNamesShown=[],this.submitted=!1,this.useNamesShown=[],this.namesRemaining=[...Object.keys(C.namesAll)],this.useNamesShownAsBooleanArray=[],Array.from(Array(10)).forEach(n=>this.names1000.push(...this.namesRemaining)),this.names1000.forEach((n,t)=>this.names1000[t]=String(t)+": "+n),this.randomQuotes=C.randomize(Object.entries(C.quotes),5)}static randomize(n,t){for(let i=n.length;--i>0;){const r=Math.floor(Math.random()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return t===void 0?n:n.slice(0,t)}addRandomUseName(){const n=this.namesRemaining.length;if(n===0)return window.alert("No more!");const t=Math.floor(Math.random()*n),i=this.namesRemaining.splice(t,1)[0],r=this.useNamesShown.findIndex(a=>a>i);return r<0?(this.useNamesShown.push(i),this.useNamesShownAsBooleanArray.push(!1)):(this.useNamesShown.splice(r,0,i),this.useNamesShownAsBooleanArray.splice(r,0,!1)),this.useNamesAdded(r,i),this.composeMinimap()}onChangeUseName(n){const t=[];n instanceof RadioNodeList?Array.prototype.forEach.call(n,i=>i.checked&&t.push(i.value)):n.checked&&t.push(n.value),this.setUseNamesSelected(t)}onUpdate(){}removeUncheckedUseNames(){const n=this.useNamesGetSelected(),t=[],i=[];for(let r=this.useNamesShown.length;--r>=0;){if(n[r])continue;const a=this.useNamesShown.splice(r,1)[0];this.namesRemaining.push(a),t.push(C.namesAll[a]),i.push(r)}this.useNamesShownAsBooleanArray=this.useNamesShown.map(r=>!0),this.useNamesRemoved(i),this.updateRealNamesSelected(t),this.composeMinimap()}setUseNamesSelected(n){this.useNamesShownAsBooleanArray=this.mapUseNamesToBooleanArray(n),this.updateRealNamesShown()}submit(){this.submitted=!0,this.composeMinimap()}mapUseNamesToBooleanArray(n){const t=n.sort(),i=t.length-1;let r=0;return this.useNamesShown.map(a=>r>i||a!==t[r]?!1:(r++,!0))}takeSnapshot(){}updateRealNamesShown(){const n=this.useNamesGetSelected(),t=[];this.useNamesShown.forEach((i,r)=>n[r]&&t.push(C.namesAll[i])),this.realNamesShown.join("")!==t.join("")&&(this.realNamesShown=t,this.takeSnapshot())}useNamesGetSelected(){return this.useNamesShownAsBooleanArray}composeMinimap(){this.customElementIds=[...this.customElementIds]}};let b=C;b.adventures={a:"A Wizard of Earthsea",b:"The Tombs of Atuan",c:"The Farthest Shore",d:"Tehanu",e:"The Other Wind",f:"Tales from Earthsea"},b.controls={adventure:{label:"Adventure",placeholder:"e.g. Tehanu",type:"select"},adventure2:{label:"More Adventure",placeholder:"e.g. The Farthest Shore",type:"select"},adventureAuto:{label:"Adventure Auto",placeholder:"e.g. The Tombs of Atuan",type:"select"},agree:{label:"Shall we continue?",placeholder:"",type:"checkbox"},danceDate:{label:"Long Dance date",placeholder:"e.g. Midsummer Eve",type:"date"},danceRange:{label:"Long Dance duration (0-10 hours)",max:"10",min:"0",placeholder:"e.g. 7",type:"range"},danceToggle:{label:"Long Dance?",placeholder:"",type:"checkbox"},deed:{label:"Deed of Erreth-Akbe",placeholder:"e.g. and on his breast lay the rune-ring broken",type:"textarea"},email:{label:"Sending Runes",placeholder:"e.g. duny@gont, sparrowhawk@roke",type:"email"},quoteRadios:{label:"Quote",placeholder:"e.g. Take care, Tenar",type:"radio"},realName:{label:"Real Name",placeholder:"e.g. Ged, Tenar, Tehanu, Anieb, Medra",type:"password"},realNames:{label:"Real Names",placeholder:"e.g. Ged, Tenar",size:"4",type:"select"},realNames2:{label:"More Real Names",placeholder:"e.g. Medra, Anieb",size:"4",type:"select"},useName:{label:"Use Name",placeholder:"e.g. Sparrowhawk, Arha, Therru, Flag, Otter",type:"text"},useNames:{label:"Use Names (Alphabetical)"},useNamesAll:{label:"Names (1000+ checkboxes)"}},b.css=`
	body {
		font-family: sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	div.headbar {
		background: whitesmoke;
		border: 1px solid black;
		padding: 5px 10px;
	}
	div.heading {
		float: left;
	}
	div.heading h1 {
		font-weight: 500;
		margin: 0;
	}
	div.anchors {
		float: right;
		padding-top: 4px;
		width: 2%;
	}
	div.anchors > div {
		height: 1rem;
	}
	div.anchor > div.active {
		border: 1px solid blue;
	}
	.fmm-panel {
		float: right;
		height: 6.5rem;
		width: 25%;
	}
	div.detail {
		float: right;
		margin: 5px;
		width: 22%;
	}
	div.fmm-detail {
		width: 300px;
	}
	div.fmm-popup {
		height: 6rem;
	}
	div.fmm-frame {
		border-left: 2px solid darkgray;
		border-right: 2px solid darkgray;
		padding: 0 2px;
	}
	label.form-check-label {
		white-space: nowrap;
	}
	`,b.debounceMsec=200,b.initialValues={adventure:"",adventure2:"",adventureAuto:"",agree:!1,danceDate:"",danceRange:5,danceToggle:!1,deed:"",email:"",quoteRadios:"",realName:"",realNames:[],realNames2:[],useName:"",useNames:[],useNamesAll:[]},b.messages={adventure:{required:"Adventure is required"},adventure2:{required:"More adventure is required"},adventureAuto:{required:"Adventure auto is required"},agree:{required:"Agreement is required to proceed"},danceDate:{required:"Must know the Long Dance"},danceRange:{min:"Must Long Dance at least 7 hours"},danceToggle:{required:"Must join the Long Dance"},deed:{required:"Must recount the Deed of Erreth-Akbe"},email:{email:"Sending runes must be a valid email address"},quoteRadios:{required:"Quote selection is required"},realName:{min:"Real name must be at least 6 characters",required:"Real name is required"},realNames:{},realNames2:{},useName:{required:"Use name is required"},useNames:{},useNamesAll:{}},b.namesAll={Aider:"Hara",Akaren:"Akaren",Apple:"Hayohe",Ard:"Ard",Arha:"Tenar",Arren:"Lebannen",Aspen:"Erisen",Ath:"Ath",Ayo:"Ayo",Azver:"Azver",Beech:"Beech",Benderesh:"Benderesk",Blackbeard:"Blackbeard",Brand:"Brand",Cob:"Cob",Crow:"Crow",Deyala:"Deyala",Duby:"Duy",Diamond:"Essiri",Dragonfly:"Irian",Dulse:"Heleth",Duny:"Ged-Duny",Early:"Teriel",Elfarran:"Elfarran",Elt:"Elt",Ember:"Elehal",Ennas:"Ennas","Erreth-Akbe":"Erreth-Akbe",Firelord:"Firelord",Flag:"Anieb",Flint:"Flint",Gamble:"Gamble",Gelluk:"Tinaral",Gensher:"Gensher",Gift:"Emer",Goha:"Tenar",Golden:"Golden",Gully:"Irioth",Hare:"Hare",Hawk:"Ged-Hawk",Heather:"Heather",Hemlock:"Hemlock",Highdrake:"Highdrake",Hound:"Hound",Ioeth:"Ioeth",Ivory:"Ivory",Ivy:"Ivy",Jasper:"Jasper",Kalessin:"Kalessin",Kelub:"Ged-Kelub",Kossil:"Kossil",Kurremkarmerruk:"Kurremkarmerruk",Lark:"Lark",Licky:"Licky",Lily:"Mevre",Littleash:"Littleash",Losen:"Losen",Maharion:"Maharion",Manan:"Manan",Mead:"Mean",Mebbeth:"Mebbeth",Morred:"Morred",Moss:"Hatha",Murre:"Murre",Nemmerle:"Nemmerle",Nereger:"Nereger",Nesty:"Nesty",Ogion:"Aihal",Onyx:"Onyx",Orm:"Orm",OrmEmbar:"OrmEmbar",OrmIrian:"OrmIrian",Otak:"Irioth",Otter:"Medra-Otter",Pechvarry:"Pechvarry",Penthe:"Penthe",Rose:"Etaudis",Rowan:"Rowan",Segoy:"Segoy",Seppel:"Seppel",Serrathen:"Serrathen",Serret:"Serret",Serriadh:"Serriadh",Seserakh:"Seserakh",Silence:"Aihal-Silence",Skiorh:"Skiorh",Sopli:"Spoli",Spark:"Spark",Sparrowhawk:"Ged",Sunbright:"Ayeth",Tangle:"Tangle",Tern:"Medra",Thar:"Thar",Therru:"Tehanu",Thol:"Thol",Thorion:"Thorion",Tuly:"Tuly",Uahto:"Uahto",Underhill:"Yevaud",Veil:"Yahan",Vetch:"Estarriol",Yarrow:"Kest",Yevaud:"Yevaud"},b.quotes={a:"Ged.",b:"That is between me and my shadow.",c:"I am here, I Ged the Sparrowhawk, and I summon my shadow!",d:"Arw sobriost.",e:"I did . . . I did not know what else to do, Segoy.",f:"Which of us saved the other from the Labyrinth, Ged?",g:"The women, the hand.  Ask them.  In the village.  I did see the Mountain.",h:"With your name, Yevaud.",i:"I named you once, I think.",j:"Take care, Tenar.",k:"But dragons live a thousand years ... They are worth talking to, as you might guess.",l:"The greatest gift of this age of the world, and it was given by a poor old foolish woman in sealskins to a silly lout"},b.aggregateLabels={quoteRadios:C.controls.quoteRadios.label,useNames:C.controls.useNames.label,useNamesAll:C.controls.useNamesAll.label};class oi extends b{constructor(){super()}updateRealNamesSelected(t){}useNamesAdded(t,i){this.useNamesShown=[...this.useNamesShown]}useNamesRemoved(t){this.useNamesShown=[...this.useNamesShown]}}const rn=f.default.defineComponent({methods:{destructor(){return S.MINIMAPS.get(this)?.destructor()},takeSnapshot(){return S.MINIMAPS.get(this)?.takeSnapshot()}},mounted(){if(Object.keys(this.$slots).length)throw new Error("FmmVueMinimap is a contentless tag");let n=this.$el?.parentElement;for(;n&&n.tagName!=="FORM";)n=n.parentElement;if(!n)throw new Error("FmmVueMinimap must be used inside a FORM tag");const t={aggregateLabels:this.aggregateLabels,anchor:this.anchor,debounceMsec:this.debounceMsec,dynamicLabels:this.dynamicLabels,form:new In(n,this.page),framework:this.framework,onUpdate:r=>this.$emit("update",r),ordinal:this.ordinal,store:this.store,title:this.title,usePanelDetail:this.usePanelDetail,useWidthToScale:this.useWidthToScale,verbosity:this.verbosity,zoomFactor:this.zoomFactor},i=this.panel?S.PANELS.get(this.panel)?.createMinimap(t):h.createMinimap(t);!i||(S.MINIMAPS.set(this,i),i.compose(this.customElementIds),this.$watch("customElementIds",r=>i.compose(r)))},name:"FmmVueMinimap",props:{aggregateLabels:Object,anchor:HTMLDivElement,customElementIds:Array,debounceMsec:Number,dynamicLabels:Array,framework:Object,ordinal:Number,page:HTMLDivElement,panel:{type:Object,validator:n=>n.$options.name==="FmmVuePanel"},store:Object,title:{required:!0,type:String,validator:n=>n?.trim().length>0},usePanelDetail:Boolean,useWidthToScale:Boolean,verbosity:Number,zoomFactor:Number},render:()=>f.default.h("div"),unmounted(){const n=S.MINIMAPS.get(this);n&&n.detach(),S.MINIMAPS.delete(this)},updated(){this.$nextTick(()=>S.MINIMAPS.get(this)?.takeSnapshot())}}),pi=f.default.defineComponent({methods:{destroyDetached(){const n=S.PANELS.get(this);n&&n.destroyDetached()}},mounted(){if(Object.keys(this.$slots).length)throw new Error("FmmVuePanel is a contentless tag");S.PANELS.set(this,h.createPanel(this.$el,this.minimapsCount,this.detailParent,this.vertical))},name:"FmmVuePanel",props:{detailParent:HTMLDivElement,minimapsCount:{required:!0,type:Number,validator:n=>n>0},vertical:Boolean},render:()=>f.default.h("div",{class:"fmm-panel"},[f.default.h("style",{tag:"component",attrs:{type:"text/css"}},h.CSS)]),unmounted(){const n=S.PANELS.get(this);n&&n.destructor(),S.PANELS.delete(this)}});f.default.defineComponent({data(){return{store:void 0}},emits:["store"],mounted(){if(Object.keys(this.$slots).length)throw new Error("FmmVueStore is a contentless tag");this.$emit("store",this.store=new Ln(this.values,this.errors))},name:"FmmVueStore",props:{errors:Object,values:{required:!0,type:Object}},render(){return null},watch:{errors:function(){this.store.update(this.values,this.errors)},values:function(){this.store.update(this.values,this.errors)}}});const Yn=f.default.defineComponent({data(){return{$store:void 0,unsubscribeToStore:void 0,store:void 0}},emits:["store"],mounted(){if(Object.keys(this.$slots).length)throw new Error("FmmVuex is a contentless tag");this.$emit("store",this.store=new Ln(this.$store.state,this.errors)),this.unsubscribeToStore=this.$store.subscribe((n,t)=>this.store.update(t,this.errors))},name:"FmmVuex",props:{errors:Object},render(){return null},unmounted(){this.unsubscribeToStore()},watch:{errors:function(){this.store.update(this.$store.state,this.errors)}}}),S={MINIMAPS:new WeakMap,PANELS:new WeakMap},mi={createFrameworkItem(n,t){return t.parentElement?.classList.contains("v-select__selections")?new li(t):new Wn(t)}};class Wn{constructor(t){const i=t.tagName==="INPUT"&&t.type==="radio";let r=t.parentElement;const a=i?"v-radio":"v-input";for(;r&&!r.classList.contains(a);)r=r.parentElement;if(!r)this.envelope=this.forValidation=t;else{this.envelope=r;const e=r.querySelectorAll("LABEL");if(e.length===1&&(this.label=e[0]),i)for(;r&&!r.classList.contains("v-input--radio-group");)r=r.parentElement;this.forValidation=r||this.envelope}}destructor(){}getEnvelope(t,i,r){return this.envelope}getError(t,i,r,a){return this.forValidation.querySelector("DIV.v-messages__message")?.textContent||""}getLabel(t,i){return this.label}getValue(t,i,r,a){return""}}class li extends Wn{getValue(t,i,r,a){return i.parentElement?.textContent||""}}const an={data:()=>({adventures:Object.entries(b.adventures),aggregateLabels:b.aggregateLabels,controls:b.controls,debounceMsec:void 0,ea:new oi,fmmStore:void 0,framework:Zt,messages:b.messages,messagesMap:{minLength:"min",minValue:"min"}}),props:{anchor:HTMLElement,mkey:{type:String,required:!0,validator:n=>n?.trim().length>0},page:HTMLElement,panel:{type:Object,required:!0,validator:n=>n.$options.name==="FmmVuePanel"},title:{type:String,required:!0,validator:n=>n?.trim().length>0}}},G=Xt({mutations:{setValue(n,[t,i]){n[t]=i}},state:b.initialValues,strict:!0}),Xn={...an,computed:{validationErrors(){const n={};return this.v$.$silentErrors.forEach(i=>n[i.$property]=typeof i.$message=="string"?i.$message:i.$message.value),n},...function(n){return Object.keys(b.initialValues).forEach(t=>n[t]={get:()=>G.state[t],set:i=>G.commit("setValue",[t,i])}),n}({})},setup:()=>({v$:st()}),store:G,validations:{adventure:{required:N},adventure2:{required:N},adventureAuto:{required:N},agree:{required:n=>n},danceDate:{required:N},danceRange:{maxValue:kt(10),minValue:wt(6)},danceToggle:{required:n=>n},deed:{required:N},email:{email:bt},quoteRadios:{required:N},realName:{required:N,minLength:ht(6)},useName:{required:N}}},di=f.default.defineComponent({data(){return{c:b.controls[this.id],r:!!b.messages[this.id]?.required}},name:"N0C",props:{className:String,ea:Object,id:{type:String,required:!0}},template:`
<div :class='"form-group form-check " + (className || "")'>
<input class='form-check-input' :id='id' :name='id' :required='r' :type='c.type' @change='ea[id]=$event.target.checked'/>
<label class='form-check-label' :for='id'>
	{{c.label}}
</label>
</div>
`}),si=f.default.defineComponent({name:"N0CL",props:{className:String,divHeight:String,list:Array,listName:String,onChange:Function},template:`
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<div v-for='(name, i) in list' :class='className' :key='name'>
<input
	class='form-check-input'
	type='checkbox'
	:id='listName + String(i)'
	:name='listName'
	:value='name'
	@change='onChange && onChange($event)'
/>
<label class='form-check-label' :for='listName + String(i)'>
	{{name}}
</label>
</div>
</div>
`}),en=f.default.defineComponent({data(){return{c:b.controls[this.id]}},name:"N0G",props:{className:String,id:{type:String,required:!0}},template:`<div :class='"form-group " + (className || "")'>
<label :for='id'>{{c.label}}</label>
<slot></slot>
</div>
`}),gi=f.default.defineComponent({components:{N0G:en},data(){return{c:b.controls[this.id],r:!!b.messages[this.id]?.required}},name:"N0I",props:{className:String,disabled:Boolean,id:{type:String,required:!0}},template:`<N0G :class='className' :id='id'>
<input
	class='form-control'
	:disabled='disabled'
	:id='id'
	:name='id'
	:placeholder='c.placeholder'
	:required='r'
	:type='c.type'
/>
</N0G>
`}),xi=f.default.defineComponent({components:{N0G:en},data(){return{c:b.controls[this.id],r:!!b.messages[this.id]?.required}},name:"N0S",props:{className:String,id:{type:String,required:!0}},template:`		<N0G :class='className' :id='id'>
<select
	class='form-control'
	:id='id'
	:multiple='c.size !== undefined'
	:name='id'
	:required='r'
	:size='c.size ? +c.size : undefined'
	>
	<slot></slot>
</select>
</N0G>
`}),ci=f.default.defineComponent({components:{N0G:en},data(){return{c:b.controls[this.id],r:!!b.messages[this.id]?.required}},name:"N0T",props:{className:String,id:{type:String,required:!0}},template:`<N0G :class='className' :id='id'>
<textarea class='form-control' :id='id' :name='id' :placeholder='c.placeholder' :required='r' />
</N0G>
`}),bi=f.default.defineComponent({...an,components:{FmmVueMinimap:rn,N0C:di,N0CL:si,N0I:gi,N0S:xi,N0T:ci},methods:{onChangeUseName(){this.ea.onChangeUseName(this.$refs.form.elements.namedItem("useNames"))}},name:"NativeBootstrap4",template:`
	<div class='bootstrap-iso card'>
		<form ref='form' class='card-body' @submit='submit()'>
			<FmmVueMinimap
				:aggregateLabels='aggregateLabels'
				:anchor='anchor'
				:customElementIds='ea.customElementIds'
				:framework='framework'
				:key='mkey'
				:ordinal='parseInt(mkey)'
				:page='page'
				:panel='mkey.endsWith("truetrue")? undefined: panel'
				:title='title'
				:usePanelDetail='mkey.endsWith("false")'
				:verbosity='1'
				:zoomFactor='2.0'
				@update='ea.onUpdate()'/>
			<div class='form-row'>
				<N0I className='col-md-6 col-sm-12' id='useName' />
				<N0I className='col-md-6 col-sm-12' id='realName' />
			</div>
			<div class='form-row'>
				<div class='col-md-9 col-sm-12 px-2'>
					<label>{{controls.quoteRadios.label}}</label>
					<div v-for='[key, value] in ea.randomQuotes' class='form-group form-check m-0' :key='key'>
						<input
							class='form-check-input'
							name='quoteRadios'
							required
							type='radio'
							:id='"quoteRadios-" + key'
							:value='value'
						/>
						<label class='form-check-label' :for='"quoteRadios-" + key'>
							{{value}}
						</label>
					</div>
				</div>
				<div class='col-md-3 col-sm-12'>
					<N0I className='col-md-12 col-sm-12 mx-0 px-0' id='email' />
					<N0S className='col-md-12 col-sm-12 mx-0 px-0' id='adventure'>
						<option v-for='[key, value] in adventures' :key='key' :value='key'>
							{{value}}
						</option>
					</N0S>
				</div>
			</div>
			<hr />
			<div class='form-row'>
				<N0C className='col-md-3 col-sm-6 px-2 text-center my-auto' :ea='ea' id='danceToggle' />
				<N0I className='col-md-3 col-sm-6 mx-0 px-2' id='danceDate' :disabled='!ea.danceToggle' />
				<N0I className='col-md-3 col-sm-6 mx-0 px-2' id='danceRange' :disabled='!ea.danceToggle' />
				<N0T className='col-md-3 col-sm-6 mx-0 px-2' id='deed' />
			</div>
			<hr />
			<div class='form-row'>
				<div class='col-md-3 col-sm-6 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNamesAll.label}}</label>
					</div>
					<N0CL className='form-group form-check m-0' divHeight='5em' listName='useNamesAll' :list='ea.names1000' />
				</div>
				<div class='col-md-6 col-sm-12 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNames.label}}</label>
						<button
							class='btn btn-sm btn-outline-dark float-right'
							type='button'
							@click='ea.removeUncheckedUseNames()'>
							--
						</button>
						<button
							class='btn btn-sm btn-outline-dark float-right mr-1'
							type='button'
							@click='ea.addRandomUseName()'>
							+
						</button>
						<hr class='clearfix' />
					</div>
					<N0CL
						className='form-group form-check-inline col-md-2 col-sm-4'
						diHeight='4em'
						listName='useNames'
						:list='ea.useNamesShown'
						:onChange='onChangeUseName'
					/>
				</div>
				<N0S class='col-md-3 col-sm-6' id='realNames'>
					<option v-for='r in ea.realNamesShown' :key='r' :value='r'>
						{{r}}
					</option>
				</N0S>
			</div>
			<hr />
			<div class='form-row'>
				<N0C :ea='ea' id='agree' />
			</div>
			<div class='text-center'>
				<button class='btn btn-primary mr-1'>Submit</button>
				<button class='btn btn-secondary mr-1' type='reset'>
					Reset
				</button>
			</div>
		</form>
	</div>`}),fi=f.default.defineComponent({components:{},data(){return{c:b.controls[this.id]}},name:"T0C",props:{cols:String,errors:Object,id:{type:String,required:!0}},template:`<v-col :cols='cols'>
<v-switch
	:error-messages='errors[id]'
	:id='id'
	:label='c.label'
	:name='id'
	v-model='$parent[id]'/>
</v-col>
`}),hi=f.default.defineComponent({components:{},name:"T0CG",props:{divHeight:String,list:Array,listName:String,onChange:Function},template:`
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<component is='style' type='text/css'>.v-input--dense.v-input--selection-controls { margin-top: 0; }</component>
	<v-row dense><v-col cols='3' v-for='(name, i) in list'	:key='name'>
	<v-checkbox
	dense
	:id='listName + String(i)'
	:label='name'
	:name='listName'
	:value='name'
	v-model='$parent[listName]' 
	@click='onChange && onChange($event)'/>
	</v-col></v-row>
</div>
`}),vi=f.default.defineComponent({components:{},name:"T0CL",props:{divHeight:String,list:Array,listName:String},template:`
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<component is='style' type='text/css'>.v-input--dense.v-input--selection-controls { margin-top: 0; }</component>
	<v-checkbox v-for='(name, i) in list'
	dense
	:id='listName + String(i)'
	:key='name'
	:label='name'
	:name='listName'
	:value='name'
	v-model='$parent[listName]' />
</div>
`}),ui=f.default.defineComponent({components:{},data(){return{c:b.controls[this.id]}},name:"T0I",props:{cols:String,disabled:Boolean,errors:Object,id:{type:String,required:!0}},template:`		<v-col :cols='cols'>
<v-text-field
	:disabled='disabled'
	:error-messages='errors[id]'
	:id='id'
	:label='c.label'
	:name='id'
	:placeholder='c.placeholder'
	:type='c.type'
	v-model='$parent[id]' 
/>
</v-col>
`}),wi=f.default.defineComponent({components:{},computed:{sitems(){const n=[];return this.items?.length&&Array.isArray(this.items[0])?this.items.forEach(t=>n.push({text:t[1],value:t[0]})):this.items.forEach(t=>n.push({text:t,value:t})),n}},data(){return{c:b.controls[this.id]}},name:"T0S",props:{cols:String,errors:Object,id:{type:String,required:!0},items:Array},template:`		<v-col :cols='cols'>
<v-select
	:error-messages='errors[id]'
	:id='id'
	:items='sitems'
	:label='c.label'
	:multiple='c.size !== undefined'
	:size='c.size ? +c.size : undefined'
	v-model='$parent[id]'/>
</v-col>
`}),yi=f.default.defineComponent({components:{},data(){return{c:b.controls[this.id]}},name:"T0T",props:{cols:String,errors:Object,id:{type:String,required:!0}},template:`<v-col :cols='cols'>
<v-textarea
	:error-messages='errors[id]'
	:id='id'
	:label='c.label'
	:name='id'
	:placeholder='c.placeholder'
	rows='2'
	v-model='$parent[id]' />
</v-col>
`}),ki=f.default.defineComponent({...Xn,components:{FmmVueMinimap:rn,FmmVuex:Yn,T0C:fi,T0CG:hi,T0CL:vi,T0I:ui,T0S:wi,T0T:yi},methods:{onChangeUseName(n){window.setTimeout(()=>this.ea.onChangeUseName(this.$refs.form.elements.namedItem("useNames")),this.debounceMsec)}},mounted(){this.debounceMsec=500,this.framework=mi},name:"T0Z",template:`
<form ref='form' @submit='submit()'>
	<FmmVuex @store='fmmStore=$event'/>
	<FmmVueMinimap
		v-if='fmmStore'
		:aggregateLabels='aggregateLabels'
		:anchor='anchor'
		:customElementIds='ea.customElementIds'
		:debounceMsec='debounceMsec'
		:framework='framework'
		:key='mkey'
		:ordinal='parseInt(mkey)'
		:page='page'
		:panel='panel'
		:store='fmmStore'
		:title='title'
		:usePanelDetail='mkey.endsWith("false")'
		:verbosity='1'
		:zoomFactor='2.5'
		@update='ea.onUpdate()'/>
	<v-container fluid>
		<v-row dense>
			<T0I cols=4 :errors='validationErrors' id='useName' />
			<T0I cols=4 :errors='validationErrors' id='realName' />
			<T0I cols=4 :errors='validationErrors' id='email' />
		</v-row>
		<v-row dense>
			<v-col cols='9'>
				<v-radio-group 
					dense
					:error-messages='validationErrors.quoteRadios'
					hide-details='auto'
					:label='controls.quoteRadios.label'
					v-model='quoteRadios'>
					<v-radio v-for='[key, value] in ea.randomQuotes' :key='key'
						:id='"quoteRadios-" + key'
						name='quoteRadios'
						:label='value'/>
				</v-radio-group>
			</v-col>
			<T0S cols=3 :errors='validationErrors' id='adventure' :items='adventures'/>
		</v-row>
		<v-row dense>
			<T0C cols=3 :errors='validationErrors' id='danceToggle' />
			<T0I cols=3 :disabled='!danceToggle' :errors='validationErrors' id='danceDate' />
			<T0I cols=3 :disabled='!danceToggle' :errors='validationErrors' id='danceRange' />
			<T0T cols=3 :errors='validationErrors' id='deed' />
		</v-row>
		<hr />
		<v-row dense>
			<v-col cols='3'>
				<label>{{controls.useNamesAll.label}}</label>
				<hr/>
				<T0CL divHeight='7em' :list='ea.names1000' listName='useNamesAll' />
			</v-col>
			<v-col cols='6'>
				<label>{{controls.useNames.label}}</label>
				<v-icon class='float-right' dense @click='ea.removeUncheckedUseNames()'>mdi-minus</v-icon>
				<v-icon class='float-right' dense @click='ea.addRandomUseName()'>mdi-plus</v-icon>
				<hr class='clearfix' />
				<T0CG
					divHeight='7em'
					:list='ea.useNamesShown'
					listName='useNames'
					:onChange='onChangeUseName'
				/>
			</v-col>
			<T0S cols=3 :errors='validationErrors' id='realNames' :items='ea.realNamesShown'/>
		</v-row>
		<v-row dense>
			<T0C cols=3 :errors='validationErrors' id='agree' />
		</v-row>
		<div class='text-center'>
			<v-btn color='primary' type='submit'>Submit</v-btn>
			<v-btn type='reset'>Reset</v-btn>
		</div>
	</v-container>
</form>`}),_i=f.default.defineComponent({...an,components:{T0Z:ki},data(){return{css:_t}},name:"VuexVuelidateVuetify",template:`
<div :style='{ transform: "rotate(-45deg)", textAlign: "center", fontSize: "xx-large", fontWeight: "bold" }'>
	A W A I T I N G<br/>S T A B L E<br/>V U E T I F Y<br/>R E L E A S E
	<!--component is='style' type='text/css'>{{ css }}</component>
	<v-app>
		<v-main>
			<T0Z :anchor='anchor' :mkey='mkey' :page='page' :panel='panel' :title='title'/>
		</v-main>
	</v-app-->
</div>`}),zi=f.default.defineComponent({data(){return{c:b.controls[this.id]}},name:"V0C",props:{className:String,id:{type:String,required:!0}},template:`
<div :class='"form-group form-check " + (className || "")'>
<input class='form-check-input' :id='id' :name='id' :type='c.type' v-model='$parent[id]' />
<label class='form-check-label' :for='id'>
	{{c.label}}
</label>
</div>
`}),Si=f.default.defineComponent({name:"V0CL",props:{className:String,divHeight:String,list:Array,listName:String,onChange:Function},template:`
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<div v-for='(name, i) in list' :class='className' :key='name'>
<input
	class='form-check-input'
	type='checkbox'
	:id='listName + String(i)'
	:name='listName'
	:value='name'
	v-model='$parent[listName]' 
	@change='onChange && onChange($event)'
/>
<label class='form-check-label' :for='listName + String(i)'>
	{{name}}
</label>
</div>
</div>
`}),on=f.default.defineComponent({data(){return{c:b.controls[this.id]}},name:"V0G",props:{className:String,id:{type:String,required:!0}},template:`<div :class='"form-group " + (className || "")'>
<label :for='id'>{{c.label}}</label>
<slot></slot>
</div>
`}),Ei=f.default.defineComponent({components:{V0G:on},data(){return{c:b.controls[this.id]}},name:"V0I",props:{className:String,disabled:Boolean,id:{type:String,required:!0}},template:`		<V0G :class='className' :id='id'>
<input
	class='form-control'
	:disabled='disabled'
	:id='id'
	:name='id'
	:placeholder='c.placeholder'
	:type='c.type'
	v-model='$parent[id]' 
/>
</V0G>
`}),Ci=f.default.defineComponent({components:{V0G:on},data(){return{c:b.controls[this.id]}},name:"V0S",props:{className:String,id:{type:String,required:!0}},template:`		<V0G :class='className' :id='id'>
<select
	class='form-control'
	:id='id'
	:multiple='c.size !== undefined'
	:name='id'
	:size='c.size ? +c.size : undefined'
	v-model='$parent[id]' 
	>
	<slot></slot>
</select>
</V0G>
`}),Ni=f.default.defineComponent({components:{V0G:on},data(){return{c:b.controls[this.id]}},name:"V0T",props:{className:String,id:{type:String,required:!0}},template:`<V0G :class='className' :id='id'>
<textarea class='form-control' :id='id' :name='id' :placeholder='c.placeholder' v-model='$parent[id]' />
</V0G>
`}),Ai=f.default.defineComponent({...Xn,components:{FmmVueMinimap:rn,FmmVuex:Yn,V0C:zi,V0CL:Si,V0I:Ei,V0S:Ci,V0T:Ni},methods:{onChangeUseName(n){this.ea.onChangeUseName(this.$refs.form.elements.namedItem("useNames"))}},name:"VuexVuelidate",template:`
	<div class='bootstrap-iso card'>
		<form class='card-body' ref='form' @submit='submit()'>
			<FmmVuex :errors='validationErrors' @store='fmmStore=$event'/>
			<FmmVueMinimap
				v-if='fmmStore'
				:aggregateLabels='aggregateLabels'
				:anchor='anchor'
				:customElementIds='ea.customElementIds'
				:framework='framework'
				:key='mkey'
				:ordinal='parseInt(mkey)'
				:page='page'
				:panel='panel'
				:store='fmmStore'
				:title='title'
				:usePanelDetail='mkey.endsWith("false")'
				:verbosity='1'
				:zoomFactor='3.0'
				@update='ea.onUpdate()'/>
			<div class='form-row'>
				<V0I className='col-md-6 col-sm-12' id='useName' />
				<V0I className='col-md-6 col-sm-12' id='realName' />
			</div>
			<div class='form-row'>
				<div class='col-md-9 col-sm-12 px-2'>
					<label>{{controls.quoteRadios.label}}</label>
					<div v-for='[key, value] in ea.randomQuotes' :key='key' class='form-group form-check m-0'>
						<input
							class='form-check-input'
							:id='"quoteRadios-" + key'
							name='quoteRadios'
							type='radio'
							:value='value'
							v-model='quoteRadios'
						/>
						<label class='form-check-label' :for='"quoteRadios-" + key'>
							{{value}}
						</label>
					</div>
				</div>
				<div class='col-md-3 col-sm-12'>
					<V0I className='col-md-12 col-sm-12 mx-0 px-0' id='email' />
					<V0S className='col-md-12 col-sm-12 mx-0 px-0' id='adventure'>
						<option v-for='[key, value] in adventures' :key='key' :value='key'>
							{{value}}
						</option>
					</V0S>
				</div>
			</div>
			<hr />
			<div class='form-row'>
				<V0C className='col-md-3 col-sm-6 px-2 text-center my-auto' id='danceToggle' />
				<V0I className='col-md-3 col-sm-6 mx-0 px-2' :disabled='!danceToggle' id='danceDate' />
				<V0I className='col-md-3 col-sm-6 mx-0 px-2' :disabled='!danceToggle' id='danceRange' />
				<V0T className='col-md-3 col-sm-6 mx-0 px-2' id='deed' />
			</div>
			<hr />
			<div class='form-row'>
				<div class='col-md-3 col-sm-6 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNamesAll.label}}</label>
					</div>
					<V0CL divHeight='5em' :list='ea.names1000' listName='useNamesAll' className='form-group form-check m-0' />
				</div>
				<div class='col-md-6 col-sm-12 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNames.label}}</label>
						<button
							type='button'
							class='btn btn-sm btn-outline-dark float-right'
							@click='ea.removeUncheckedUseNames()'>
							--
						</button>
						<button
							type='button'
							class='btn btn-sm btn-outline-dark float-right mr-1'
							@click='ea.addRandomUseName()'>
							+
						</button>
						<hr class='clearfix' />
					</div>
					<V0CL
						className='form-group form-check-inline col-md-2 col-sm-4'
						diHeight='4em'
						:list='ea.useNamesShown'
						listName='useNames'
						:onChange='onChangeUseName'
					/>
				</div>
				<V0S class='col-md-3 col-sm-6' id='realNames'>
					<option v-for='r in ea.realNamesShown' :key='r' :value='r'>{{r}}</option>
				</V0S>
			</div>
			<hr />
			<div class='form-row'>
				<V0C id='agree' />
			</div>
			<div class='text-center'>
				<button class='btn btn-primary mr-1'>Submit</button>
				<button class='btn btn-secondary mr-1' type='reset'>Reset</button>
			</div>
		</form>
	</div>`}),Fi=f.default.defineComponent({components:{FmmVuePanel:pi,NativeBootstrap4:bi,VuexVuelidate:Ai,VuexVuelidateVuetify:_i},data:()=>({css:b.css+" legend { display: inline }",refAnchor0:void 0,refAnchor1:void 0,refAnchor2:void 0,refDetail:void 0,refPage:void 0,refPanel:void 0,s:{a:!1,d:!1,n:0,t:["Native Bootstrap4","Vuex Vuelidate","Vuex Vuelidate Vuetify"]}}),methods:{destroyDetached(){window.setTimeout(()=>this.refPanel.destroyDetached(),10)}},mounted(){this.refAnchor0=this.$refs.anchor0,this.refAnchor1=this.$refs.anchor1,this.refAnchor2=this.$refs.anchor2,this.refDetail=this.$refs.detail,this.refPage=this.$refs.page},name:"AppVue",template:`
	<div ref='page'>
		<component is='style' type='text/css'>{{ css }}</component>
		<div class='headbar'>
			<div class='heading'>
				<h1>Earthsea - Form Minimap Vue</h1>
				<div>Ursule K. LeGuin -- <select style='appearance: auto; border-style: solid;' @change='s.n = $event.target.selectedIndex'>
						<option v-for='t in s.t' :key='t' :value='t'>{{t}}</option>
					</select>
				</div><br/>
				A minimap can be fixed in a panel or <input type='checkbox' @change='destroyDetached(s.a = $event.target.checked)'/>
					popped up from an anchor.<br/>
				Detail view can shown in the panel or <input type='checkbox' @change='destroyDetached(s.d = $event.target.checked)'/>
					floated per minimap.
			</div>
			<FmmVuePanel v-if='refDetail' ref='panel' :detailParent='refDetail' :minimapsCount='s.t.length'/>
			<div ref='detail' class='detail' :style='{ display: s.d? "none": "block" }'></div>
			<div class='anchors'>
				<div :class='{ active: s.n === 0}' ref='anchor0'></div>
				<div :class='{ active: s.n === 1}' ref='anchor1'></div>
				<div :class='{ active: s.n === 2}' ref='anchor2'></div>
			</div>
			<div style='clear: both'/>
			</div>
		<NativeBootstrap4 v-if='refPanel && s.n === 0' :mkey='"0"+s.a+s.d' :anchor='s.a? refAnchor0: null' :page='refPage' :panel='refPanel' :title='s.t[0]'/>
		<VuexVuelidate v-if='refPanel && s.n === 1' :mkey='"1"+s.a+s.d' :anchor='s.a? refAnchor1: null' :page='refPage' :panel='refPanel' :title='s.t[1]'/>
		<VuexVuelidateVuetify v-if='refPanel && s.n === 2' :mkey='"2"+s.a+s.d' :anchor='s.a? refAnchor2: null' :page='refPage' :panel='refPanel' :title='s.t[2]'/>
	</div>
`,updated(){this.refPanel=this.$refs.panel}});A.AppVue=Fi,A.store=G});
