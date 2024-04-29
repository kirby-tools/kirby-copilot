(function(){"use strict";const i=window.Vue;function K(){return window.panel}function N(){return K().api}function re(){const o=N();return{load:({parent:r,name:e})=>o.get(`${r}/sections/${e}`)}}function oe(){var t;return((t=i.getCurrentInstance())==null?void 0:t.proxy).$store}const V=i.computed;i.customRef,i.defineAsyncComponent,i.defineComponent,i.effectScope,i.getCurrentInstance,i.getCurrentScope,i.h,i.inject,i.isProxy,i.isReactive,i.isReadonly,i.isRef,i.isShallow,i.markRaw;const se=i.nextTick;i.onActivated,i.onBeforeMount;const ie=i.onBeforeUnmount;i.onBeforeUpdate,i.onDeactivated,i.onErrorCaptured,i.onMounted,i.onRenderTracked,i.onRenderTriggered,i.onScopeDispose,i.onServerPrefetch,i.onUnmounted,i.onUpdated,i.provide,i.proxyRefs,i.reactive,i.readonly;const v=i.ref;i.shallowReactive,i.shallowReadonly,i.shallowRef,i.toRaw,i.toRef,i.toRefs,i.triggerRef,i.unref,i.useAttrs,i.useCssModule,i.useCssVars,i.useListeners,i.useSlots;const W=i.watch;i.watchEffect,i.watchPostEffect,i.watchSyncEffect;const ae={blueprint:String,lock:[Boolean,Object],help:String,name:String,parent:String,timestamp:Number},ce=["openai","mistral"],U=["image/png","image/jpeg","image/webp","image/gif"],le=["error","warn","info","debug"],ue="kirby$copilot$";let L=[];const I=new Map;async function pe(o){if(!Array.isArray(o))throw new TypeError("Expected an array of assets");L.length>0||(L=o)}function G(o){if(L.length===0)throw new Error("Plugin assets are not registered");const t=L.find(r=>r.filename===o);if(!t)throw new Error(`Plugin asset "${o}" not found`);return t}async function H(o){if(o.endsWith(".js")||(o+=".js"),I.has(o))return I.get(o);const r=await import(G(o).url);return I.set(o,r),r}function de(o,t,r){return o.replace(/{([\w\d]+)}/g,(e,n)=>t[n.toLowerCase()]||((typeof r=="function"?r(n):r)??n))}let A;async function fe(o){const t=await ge(),r=await o.arrayBuffer(),e=await t.getDocument({data:r,useSystemFonts:!0}).promise;return(await Promise.all(Array.from({length:e.numPages},(c,a)=>he(e,a+1)))).join(`
`).replace(/\s+/g," ")}async function he(o,t){return(await(await o.getPage(t)).getTextContent()).items.filter(n=>n.str!=null).map(n=>n.str).join(" ")}async function ge(){if(A)return A;A=await H("pdfjs");const o=G("pdfjs.worker.js");return A.GlobalWorkerOptions.workerSrc=o.url,A}class me{constructor(){this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",2:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.error:console.log}log(t){const r=this._getLogFn(t.level),e=t.type==="log"?"":t.type,n=t.tag||"",a=`
  background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
  padding: 2px 0.5em;
`.trimStart(),u=`%c${[n,e].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?r(`${u}%c ${t.args[0]}`,a,"",...t.args.slice(1)):r(u,a,...t.args)}}const ye={error:0,warn:1,info:2};function ve(o){const t=new me;return new Proxy({},{get(r,e){return(...n)=>{t.log({level:ye[e],type:e,tag:o,args:n})}}})}let _e;function we(){return _e??(_e=ve("copilot"))}async function be({userPrompt:o,systemPrompt:t,context:r,files:e,config:n,logLevel:c,abortSignal:a}){const u=we(),{createMistral:s,createOpenAI:d,experimental_streamText:h}=await H("ai"),g=n.provider,l=n.providers[g],k={mistral:s,openai:d}[g],S=k({baseUrl:l.baseUrl||void 0,apiKey:l.apiKey}),C=e.filter(b=>b.type.startsWith("image/")),P=e.filter(b=>b.type==="application/pdf");let w=de(o,r);if(P.length>0){const m=`Additional context from the following PDF documents has been processed and made available to you. Include the information from these documents as applicable.

${(await Promise.all(P.map(fe))).map((y,x)=>`PDF document ${x+1}: ${y}`).join(`

`)}`;w+=`

${m}`}if(c>1&&(u.info("System prompt:",t),u.info("User prompt with context:",w)),g==="openai"&&C.length>0){const b=await Promise.all(C.map(async m=>{const y=await m.arrayBuffer();return{data:new Uint8Array(y),mimeType:m.type}}));return h({model:S.chat(l.model),temperature:n.temperature,maxTokens:n.maxGenerationTokens,system:t,messages:[{role:"user",content:[{type:"text",text:w},...b.map(m=>({type:"image",image:m.data}))]}],abortSignal:a})}return h({model:S.chat(l.model),temperature:n.temperature,maxTokens:n.maxGenerationTokens,system:t,prompt:w,abortSignal:a})}const J=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function xe(o,t){t?t={...J,...t}:t=J;const r=Y(t);return r.dispatch(o),r.toString()}const ke=Object.freeze(["prototype","__proto__","constructor"]);function Y(o){let t="",r=new Map;const e=n=>{t+=n};return{toString(){return t},getContext(){return r},dispatch(n){return o.replacer&&(n=o.replacer(n)),this[n===null?"null":typeof n](n)},object(n){if(n&&typeof n.toJSON=="function")return this.object(n.toJSON());const c=Object.prototype.toString.call(n);let a="";const u=c.length;u<10?a="unknown:["+c+"]":a=c.slice(8,u-1),a=a.toLowerCase();let s=null;if((s=r.get(n))===void 0)r.set(n,r.size);else return this.dispatch("[CIRCULAR:"+s+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(n))return e("buffer:"),e(n.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](n):o.ignoreUnknown||this.unkown(n,a);else{let d=Object.keys(n);o.unorderedObjects&&(d=d.sort());let h=[];o.respectType!==!1&&!q(n)&&(h=ke),o.excludeKeys&&(d=d.filter(l=>!o.excludeKeys(l)),h=h.filter(l=>!o.excludeKeys(l))),e("object:"+(d.length+h.length)+":");const g=l=>{this.dispatch(l),e(":"),o.excludeValues||this.dispatch(n[l]),e(",")};for(const l of d)g(l);for(const l of h)g(l)}},array(n,c){if(c=c===void 0?o.unorderedArrays!==!1:c,e("array:"+n.length+":"),!c||n.length<=1){for(const s of n)this.dispatch(s);return}const a=new Map,u=n.map(s=>{const d=Y(o);d.dispatch(s);for(const[h,g]of d.getContext())a.set(h,g);return d.toString()});return r=a,u.sort(),this.array(u,!1)},date(n){return e("date:"+n.toJSON())},symbol(n){return e("symbol:"+n.toString())},unkown(n,c){if(e(c),!!n&&(e(":"),n&&typeof n.entries=="function"))return this.array(Array.from(n.entries()),!0)},error(n){return e("error:"+n.toString())},boolean(n){return e("bool:"+n)},string(n){e("string:"+n.length+":"),e(n)},function(n){e("fn:"),q(n)?this.dispatch("[native]"):this.dispatch(n.toString()),o.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(n.name)),o.respectFunctionProperties&&this.object(n)},number(n){return e("number:"+n)},xml(n){return e("xml:"+n.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(n){return e("regex:"+n.toString())},uint8array(n){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(n))},uint8clampedarray(n){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(n))},int8array(n){return e("int8array:"),this.dispatch(Array.prototype.slice.call(n))},uint16array(n){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(n))},int16array(n){return e("int16array:"),this.dispatch(Array.prototype.slice.call(n))},uint32array(n){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(n))},int32array(n){return e("int32array:"),this.dispatch(Array.prototype.slice.call(n))},float32array(n){return e("float32array:"),this.dispatch(Array.prototype.slice.call(n))},float64array(n){return e("float64array:"),this.dispatch(Array.prototype.slice.call(n))},arraybuffer(n){return e("arraybuffer:"),this.dispatch(new Uint8Array(n))},url(n){return e("url:"+n.toString())},map(n){e("map:");const c=[...n];return this.array(c,o.unorderedSets!==!1)},set(n){e("set:");const c=[...n];return this.array(c,o.unorderedSets!==!1)},file(n){return e("file:"),this.dispatch([n.name,n.size,n.type,n.lastModfied])},blob(){if(o.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(n){return e("bigint:"+n.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const X="[native code] }",Se=X.length;function q(o){return typeof o!="function"?!1:Function.prototype.toString.call(o).slice(-Se)===X}class R{constructor(t,r){t=this.words=t||[],this.sigBytes=r===void 0?t.length*4:r}toString(t){return(t||Pe).stringify(this)}concat(t){if(this.clamp(),this.sigBytes%4)for(let r=0;r<t.sigBytes;r++){const e=t.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<t.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=t.words[r>>>2];return this.sigBytes+=t.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new R([...this.words])}}const Pe={stringify(o){const t=[];for(let r=0;r<o.sigBytes;r++){const e=o.words[r>>>2]>>>24-r%4*8&255;t.push((e>>>4).toString(16),(e&15).toString(16))}return t.join("")}},Be={stringify(o){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<o.sigBytes;e+=3){const n=o.words[e>>>2]>>>24-e%4*8&255,c=o.words[e+1>>>2]>>>24-(e+1)%4*8&255,a=o.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=n<<16|c<<8|a;for(let s=0;s<4&&e*8+s*6<o.sigBytes*8;s++)r.push(t.charAt(u>>>6*(3-s)&63))}return r.join("")}},Ce={parse(o){const t=o.length,r=[];for(let e=0;e<t;e++)r[e>>>2]|=(o.charCodeAt(e)&255)<<24-e%4*8;return new R(r,t)}},Re={parse(o){return Ce.parse(unescape(encodeURIComponent(o)))}};class Ee{constructor(){this._data=new R,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new R,this._nDataBytes=0}_append(t){typeof t=="string"&&(t=Re.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_doProcessBlock(t,r){}_process(t){let r,e=this._data.sigBytes/(this.blockSize*4);t?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const n=e*this.blockSize,c=Math.min(n*4,this._data.sigBytes);if(n){for(let a=0;a<n;a+=this.blockSize)this._doProcessBlock(this._data.words,a);r=this._data.words.splice(0,n),this._data.sigBytes-=c}return new R(r,c)}}class Te extends Ee{update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t)}}const Q=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],$e=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],$=[];class je extends Te{constructor(){super(...arguments),this._hash=new R([...Q])}reset(){super.reset(),this._hash=new R([...Q])}_doProcessBlock(t,r){const e=this._hash.words;let n=e[0],c=e[1],a=e[2],u=e[3],s=e[4],d=e[5],h=e[6],g=e[7];for(let l=0;l<64;l++){if(l<16)$[l]=t[r+l]|0;else{const m=$[l-15],y=(m<<25|m>>>7)^(m<<14|m>>>18)^m>>>3,x=$[l-2],j=(x<<15|x>>>17)^(x<<13|x>>>19)^x>>>10;$[l]=y+$[l-7]+j+$[l-16]}const k=s&d^~s&h,S=n&c^n&a^c&a,C=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),P=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),w=g+P+k+$e[l]+$[l],b=C+S;g=h,h=d,d=s,s=u+w|0,u=a,a=c,c=n,n=w+b|0}e[0]=e[0]+n|0,e[1]=e[1]+c|0,e[2]=e[2]+a|0,e[3]=e[3]+u|0,e[4]=e[4]+s|0,e[5]=e[5]+d|0,e[6]=e[6]+h|0,e[7]=e[7]+g|0}finalize(t){super.finalize(t);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Fe(o){return new je().finalize(o).toString(Be)}function Ae(o,t={}){const r=typeof o=="string"?o:xe(o,t);return Fe(r).slice(0,10)}function Le(...o){return`${ue}${Ae([...o])}`}let B;async function Ue({accept:o="*",multiple:t=!0}={}){return B=document.createElement("input"),B.type="file",B.classList.add("sr-only"),B.value=null,B.accept=o,B.multiple=t,B.click(),new Promise(r=>{B.addEventListener("change",e=>{r([...e.target.files]),B.remove()})})}async function Ie(o,{maxSize:t}={}){if(!t)return o;const r=await Me(o);return await Oe(r,o.type,t)}async function Me(o){const t=new Image,r=URL.createObjectURL(o);return t.src=r,await new Promise((e,n)=>{t.onload=()=>{e(t)},t.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Failed to load the image"))}}),URL.revokeObjectURL(r),t}async function Oe(o,t,r){const e=document.createElement("canvas"),n=e.getContext("2d");let c=1;r&&(o.width>r||o.height>r)&&(c=r/Math.max(o.width,o.height)),e.width=o.width*c,e.height=o.height*c,n.drawImage(o,0,0,e.width,e.height);const a=await new Promise(u=>{e.toBlob(u,t)});if(!a)throw new Error("Failed to convert canvas to Blob");return a}function De(o,t,r,e,n,c,a,u){var s=typeof o=="function"?o.options:o;t&&(s.render=t,s.staticRenderFns=r,s._compiled=!0),e&&(s.functional=!0),c&&(s._scopeId="data-v-"+c);var d;if(a?(d=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),n&&n.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(a)},s._ssrRegister=d):n&&(d=u?function(){n.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:n),d)if(s.functional){s._injectStyles=d;var h=s.render;s.render=function(k,S){return d.call(S),h(k,S)}}else{var g=s.beforeCreate;s.beforeCreate=g?[].concat(g,d):[d]}return{exports:o,options:s}}const Z={...ae},ze=Object.assign({inheritAttrs:!1},{__name:"Copilot",props:Z,setup(o){const t=o,r=K(),e=N(),n=oe(),c=/^<(\w+)>\s*<\/\1>$/,a=v(),u=v(),s=v(),d=v(),h=v(),g=v(),l=v(),k=v(),S=v(),C=v(!1),P=v(!1),w=v(!1),b=v(),m=v(),y=v(),x=v([]),j=v([]);let E,T;const M=V(()=>n.getters["content/values"]()),ee=V(()=>!P.value&&y.value!==void 0);W(m,f=>{C.value&&h.value&&(f&&f!==s.value?localStorage.setItem(`${E}$prompt`,f):(!f||f===s.value)&&localStorage.removeItem(`${E}$prompt`))}),W(w,f=>{C.value&&h.value&&(f?localStorage.setItem(`${E}$open`,"true"):localStorage.removeItem(`${E}$open`))}),(async()=>{const{load:f}=re(),p=await f({parent:t.parent,name:t.name});if(a.value=te(p.label)||r.t("johannschopplich.copilot.label"),u.value=p.field??void 0,s.value=p.userPrompt??void 0,d.value=p.systemPrompt||p.config.systemPrompt||void 0,h.value=p.storage,p.editable===!0&&x.value.push("edit"),p.files===!0&&x.value.push("files"),g.value=le.indexOf(p.config.logLevel??p.logLevel),l.value=p.supported,k.value=p.config,pe(p.assets),p.files==="auto"&&p.modelFile){S.value=p.modelFile;const{mime:_,url:z}=p.modelFile;U.includes(_)&&fetch(z).then(F=>F.blob()).then(F=>{j.value=[F]})}h.value&&(E=Le(r.view.path,u.value),m.value=localStorage.getItem(`${E}$prompt`)||s.value||"",w.value=localStorage.getItem(`${E}$open`)==="true",se(()=>{b.value&&w.value&&(b.value.open=!0)})),r.events.on("view.save",D),C.value=!0})(),ie(()=>{r.events.off("view.save",D)});function te(f){return!f||typeof f=="string"?f:f[r.translation.code]??Object.values(f)[0]}async function Ge(){if(!m.value){r.notification.error(r.t("johannschopplich.copilot.prompt.empty"));return}r.isLoading=!0,P.value=!0,y.value=M.value[u.value],T=new AbortController;let f="",p=Date.now();try{const{textStream:_}=await be({userPrompt:m.value,systemPrompt:d.value,context:ne(),files:j.value,config:k.value,logLevel:g.value,abortSignal:T.signal});for await(const z of _)if(f+=z,Array.isArray(y.value)){if(Date.now()-p<k.value.blocksUpdateThrottle)continue;p=Date.now();const F=await O(f);F.length>0&&n.dispatch("content/update",[u.value,[...y.value,...F]])}else n.dispatch("content/update",[u.value,y.value+f])}catch(_){if(T=void 0,r.isLoading=!1,P.value=!1,_ instanceof Error&&_.name==="AbortError")return;if(_ instanceof Error&&_.name==="ApiCallError"){console.error(_),r.notification.error(_.message);return}console.error(_),r.notification.error(r.t("johannschopplich.copilot.generator.error"));return}n.dispatch("content/update",[u.value,Array.isArray(y.value)?[...y.value,...await O(f)]:y.value+f]),T=void 0,r.isLoading=!1,P.value=!1,r.notification.success({icon:"sparkling",message:r.t("johannschopplich.copilot.generator.success")})}function He(){T==null||T.abort()}function Je(){n.dispatch("content/update",[u.value,y.value]),y.value=void 0}async function Ye(){const f=await Ue({accept:[...U,"application/pdf"].join(",")});j.value=await Promise.all(f.map(async p=>p.type.startsWith("image/")?Ie(p,{maxSize:2048}):p))}async function O(f){if(!f)return[];const{blocks:p}=await e.post("__copilot__/html2blocks",{html:f});return p.length===1&&"text"in p[0].content&&c.test(p[0].content.text)?[]:p}function ne(){const f={...M.value,title:r.view.title};return Object.fromEntries(Object.entries(f).map(([p,_])=>[p,Array.isArray(_)||typeof _=="object"&&_!==null?JSON.stringify(_):_]))}function D(){ee.value&&(y.value=void 0)}return{__sfc:!0,propsDefinition:Z,props:t,panel:r,api:e,store:n,EMPTY_HTML_TAG_RE:c,label:a,field:u,userPrompt:s,systemPrompt:d,storage:h,logLevel:g,supported:l,config:k,modelFile:S,isInitialized:C,isGenerating:P,isDetailsOpen:w,detailsElement:b,currentPrompt:m,currentFieldContent:y,allow:x,files:j,storageKey:E,abortController:T,currentContent:M,canUndo:ee,t:te,generate:Ge,abort:He,undo:Je,pickFiles:Ye,htmlToBlocks:O,createContext:ne,onModelSave:D,SUPPORTED_PROVIDERS:ce,SUPPORTED_VISION_MIME_TYPES:U}}});var Ke=function(){var n,c,a,u;var t=this,r=t._self._c,e=t._self._setupProxy;return e.isInitialized?r("k-section",{attrs:{label:e.label}},[!e.config.provider||!e.SUPPORTED_PROVIDERS.includes(e.config.provider)?r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" Unsupported provider "),r("code",[t._v(t._s(e.config.provider))]),t._v(" in the "),r("code",[t._v("johannschopplich.copilot.provider")]),t._v(" global configuration. ")])],1):(c=(n=e.config.providers)==null?void 0:n[e.config.provider])!=null&&c.apiKey?(u=(a=e.config.providers)==null?void 0:a[e.config.provider])!=null&&u.model?e.field?e.field in e.currentContent?e.supported?!e.allow.includes("edit")&&!e.userPrompt?r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" If the user prompt cannot be edited by the user, a default "),r("code",[t._v("userPrompt")]),t._v(" has to be set in the section configuration. ")])],1):r("div",{staticClass:"kai-space-y-4"},[r("k-button-group",{attrs:{layout:"collapsed"}},[r("k-button",{attrs:{icon:e.isGenerating?"loader":"sparkling",text:e.panel.t("johannschopplich.copilot.generate"),variant:"filled",size:"sm",theme:"positive",disabled:e.isGenerating},on:{click:function(s){return e.generate()}}}),e.isGenerating?r("k-button",{attrs:{icon:"cancel",text:e.panel.t("johannschopplich.copilot.stop"),variant:"filled",size:"sm",theme:"notice"},on:{click:function(s){return e.abort()}}}):t._e(),e.canUndo?r("k-button",{attrs:{icon:"undo",text:e.panel.t("johannschopplich.copilot.undo"),variant:"filled",size:"sm"},on:{click:function(s){return e.undo()}}}):t._e()],1),e.allow.length>0?r("details",{ref:"detailsElement",on:{toggle:function(s){e.isDetailsOpen=s.target.open}}},[r("summary",[t._v(" "+t._s([...e.allow.includes("edit")?[e.panel.t("johannschopplich.copilot.prompt.label")]:[],...e.allow.includes("files")?[e.panel.t("johannschopplich.copilot.context")]:[]].join(", "))+" ")]),r("div",{staticClass:"kai-mt-3"},[e.allow.includes("edit")?r("div",{staticClass:"kai-mb-2 kai-text-right"},[r("k-input",{key:e.isDetailsOpen?1:0,staticClass:"kai-mb-1",attrs:{placeholder:e.panel.t("johannschopplich.copilot.prompt.placeholder"),type:"textarea",buttons:!1,counter:!1},model:{value:e.currentPrompt,callback:function(s){e.currentPrompt=s},expression:"currentPrompt"}}),r("k-button",{directives:[{name:"show",rawName:"v-show",value:e.userPrompt&&e.currentPrompt!==e.userPrompt,expression:"userPrompt && currentPrompt !== userPrompt"}],attrs:{icon:"undo",text:"Reset",size:"xs",variant:"dimmed"},on:{click:function(s){e.currentPrompt=e.userPrompt}}})],1):t._e(),e.allow.includes("files")?r("k-button-group",{attrs:{layout:"collapsed"}},[r("k-button",{attrs:{icon:"upload",text:e.panel.t("johannschopplich.copilot.files.select"),variant:"filled",size:"sm"},on:{click:function(s){return e.pickFiles()}}}),e.files.length>0?r("k-button",{attrs:{icon:"cancel",text:e.panel.t("johannschopplich.copilot.remove"),variant:"filled",size:"sm"},on:{click:function(s){e.files=[]}}}):t._e()],1):e.modelFile?r("k-box",{attrs:{theme:"none"}},[r("k-text",[t._v(" "+t._s(e.panel.t(`johannschopplich.copilot.context.file.${e.SUPPORTED_VISION_MIME_TYPES.includes(e.modelFile.mime)?"model":"unsupported"}`))+" ")])],1):t._e()],1)]):t._e()],1):r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" The "),r("code",[t._v(t._s(e.field))]),t._v(" field is not supported. Use a "),r("code",[t._v("blocks")]),t._v(", "),r("code",[t._v("text")]),t._v(", "),r("code",[t._v("textarea")]),t._v(" or "),r("code",[t._v("textarea")]),t._v(" type. ")])],1):r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" The "),r("code",[t._v(t._s(e.field))]),t._v(" field does not exist in the current model. ")])],1):r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" Missing "),r("code",[t._v("field")]),t._v(" property in the section configuration. It is required for the generated text. ")])],1):r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" Missing "),r("code",[t._v("model")]),t._v(" property in the "),r("code",[t._v(t._s(`johannschopplich.copilot.providers.${e.config.provider}`))]),t._v(" global configuration. ")])],1):r("k-box",{attrs:{theme:"empty"}},[r("k-text",[t._v(" Missing "),r("code",[t._v("apiKey")]),t._v(" property in the "),r("code",[t._v(t._s(`johannschopplich.copilot.providers.${e.config.provider}`))]),t._v(" global configuration. ")])],1)],1):t._e()},Ne=[],Ve=De(ze,Ke,Ne,!1,null,null,null,null);const We=Ve.exports;window.panel.plugin("johannschopplich/copilot",{sections:{copilot:We}})})();
