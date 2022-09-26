import{i as cr,l as fr,j as dr,D as pr,T as Re}from"./index.3b5951cb.js";var Ve={exports:{}},oe={exports:{}},We=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},mr=We,ue=Object.prototype.toString,le=function(r){return function(e){var t=ue.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function C(r){return r=r.toLowerCase(),function(t){return le(t)===r}}function ce(r){return Array.isArray(r)}function j(r){return typeof r>"u"}function hr(r){return r!==null&&!j(r)&&r.constructor!==null&&!j(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var He=C("ArrayBuffer");function _r(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&He(r.buffer),e}function vr(r){return typeof r=="string"}function Er(r){return typeof r=="number"}function Ge(r){return r!==null&&typeof r=="object"}function I(r){if(le(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Rr=C("Date"),Sr=C("File"),gr=C("Blob"),Ar=C("FileList");function fe(r){return ue.call(r)==="[object Function]"}function Cr(r){return Ge(r)&&fe(r.pipe)}function Pr(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||ue.call(r)===e||fe(r.toString)&&r.toString()===e)}var yr=C("URLSearchParams");function Or(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Dr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function de(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),ce(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function se(){var r={};function e(n,i){I(r[i])&&I(n)?r[i]=se(r[i],n):I(n)?r[i]=se({},n):ce(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)de(arguments[t],e);return r}function br(r,e,t){return de(e,function(n,i){t&&typeof n=="function"?r[i]=mr(n,t):r[i]=n}),r}function wr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Tr(r,e,t,a){r.prototype=Object.create(e.prototype,a),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Ur(r,e,t){var a,n,i,s={};e=e||{};do{for(a=Object.getOwnPropertyNames(r),n=a.length;n-- >0;)i=a[n],s[i]||(e[i]=r[i],s[i]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function xr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var a=r.indexOf(e,t);return a!==-1&&a===t}function Nr(r){if(!r)return null;var e=r.length;if(j(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var Lr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),h={isArray:ce,isArrayBuffer:He,isBuffer:hr,isFormData:Pr,isArrayBufferView:_r,isString:vr,isNumber:Er,isObject:Ge,isPlainObject:I,isUndefined:j,isDate:Rr,isFile:Sr,isBlob:gr,isFunction:fe,isStream:Cr,isURLSearchParams:yr,isStandardBrowserEnv:Dr,forEach:de,merge:se,extend:br,trim:Or,stripBOM:wr,inherits:Tr,toFlatObject:Ur,kindOf:le,kindOfTest:C,endsWith:xr,toArray:Nr,isTypedArray:Lr,isFileList:Ar},D=h;function Se(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Je=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(D.isURLSearchParams(t))n=t.toString();else{var i=[];D.forEach(t,function(l,d){l===null||typeof l>"u"||(D.isArray(l)?d=d+"[]":l=[l],D.forEach(l,function(p){D.isDate(p)?p=p.toISOString():D.isObject(p)&&(p=JSON.stringify(p)),i.push(Se(d)+"="+Se(p))}))}),n=i.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Ir=h;function M(){this.handlers=[]}M.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};M.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};M.prototype.forEach=function(e){Ir.forEach(this.handlers,function(a){a!==null&&e(a)})};var Fr=M,jr=h,Mr=function(e,t){jr.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},Xe=h;function w(r,e,t,a,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),a&&(this.request=a),n&&(this.response=n)}Xe.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ye=w.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){ze[r]={value:r}});Object.defineProperties(w,ze);Object.defineProperty(Ye,"isAxiosError",{value:!0});w.from=function(r,e,t,a,n,i){var s=Object.create(Ye);return Xe.toFlatObject(r,s,function(l){return l!==Error.prototype}),w.call(s,r.message,e,t,a,n),s.name=r.name,i&&Object.assign(s,i),s};var U=w,Ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},S=h;function Br(r,e){e=e||new FormData;var t=[];function a(i){return i===null?"":S.isDate(i)?i.toISOString():S.isArrayBuffer(i)||S.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,s){if(S.isPlainObject(i)||S.isArray(i)){if(t.indexOf(i)!==-1)throw Error("Circular reference detected in "+s);t.push(i),S.forEach(i,function(l,d){if(!S.isUndefined(l)){var f=s?s+"."+d:d,p;if(l&&!s&&typeof l=="object"){if(S.endsWith(d,"{}"))l=JSON.stringify(l);else if(S.endsWith(d,"[]")&&(p=S.toArray(l))){p.forEach(function(u){!S.isUndefined(u)&&e.append(f,a(u))});return}}n(l,f)}}),t.pop()}else e.append(s,a(i))}return n(r),e}var Qe=Br,H,ge;function kr(){if(ge)return H;ge=1;var r=U;return H=function(t,a,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):a(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},H}var G,Ae;function qr(){if(Ae)return G;Ae=1;var r=h;return G=r.isStandardBrowserEnv()?function(){return{write:function(a,n,i,s,o,l){var d=[];d.push(a+"="+encodeURIComponent(n)),r.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),r.isString(s)&&d.push("path="+s),r.isString(o)&&d.push("domain="+o),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(a){var n=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),G}var $r=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Vr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Wr=$r,Hr=Vr,Ze=function(e,t){return e&&!Wr(t)?Hr(e,t):t},J,Ce;function Gr(){if(Ce)return J;Ce=1;var r=h,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return J=function(a){var n={},i,s,o;return a&&r.forEach(a.split(`
`),function(d){if(o=d.indexOf(":"),i=r.trim(d.substr(0,o)).toLowerCase(),s=r.trim(d.substr(o+1)),i){if(n[i]&&e.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([s]):n[i]=n[i]?n[i]+", "+s:s}}),n},J}var X,Pe;function Jr(){if(Pe)return X;Pe=1;var r=h;return X=r.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),n;function i(s){var o=s;return t&&(a.setAttribute("href",o),o=a.href),a.setAttribute("href",o),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=i(window.location.href),function(o){var l=r.isString(o)?i(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),X}var Y,ye;function B(){if(ye)return Y;ye=1;var r=U,e=h;function t(a){r.call(this,a==null?"canceled":a,r.ERR_CANCELED),this.name="CanceledError"}return e.inherits(t,r,{__CANCEL__:!0}),Y=t,Y}var z,Oe;function Xr(){return Oe||(Oe=1,z=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}),z}var K,De;function be(){if(De)return K;De=1;var r=h,e=kr(),t=qr(),a=Je,n=Ze,i=Gr(),s=Jr(),o=Ke,l=U,d=B(),f=Xr();return K=function(u){return new Promise(function(sr,P){var x=u.data,N=u.headers,L=u.responseType,y;function _e(){u.cancelToken&&u.cancelToken.unsubscribe(y),u.signal&&u.signal.removeEventListener("abort",y)}r.isFormData(x)&&r.isStandardBrowserEnv()&&delete N["Content-Type"];var c=new XMLHttpRequest;if(u.auth){var or=u.auth.username||"",ur=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";N.Authorization="Basic "+btoa(or+":"+ur)}var $=n(u.baseURL,u.url);c.open(u.method.toUpperCase(),a($,u.params,u.paramsSerializer),!0),c.timeout=u.timeout;function ve(){if(!!c){var R="getAllResponseHeaders"in c?i(c.getAllResponseHeaders()):null,O=!L||L==="text"||L==="json"?c.responseText:c.response,A={data:O,status:c.status,statusText:c.statusText,headers:R,config:u,request:c};e(function(W){sr(W),_e()},function(W){P(W),_e()},A),c=null}}if("onloadend"in c?c.onloadend=ve:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(ve)},c.onabort=function(){!c||(P(new l("Request aborted",l.ECONNABORTED,u,c)),c=null)},c.onerror=function(){P(new l("Network Error",l.ERR_NETWORK,u,c,c)),c=null},c.ontimeout=function(){var O=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",A=u.transitional||o;u.timeoutErrorMessage&&(O=u.timeoutErrorMessage),P(new l(O,A.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,u,c)),c=null},r.isStandardBrowserEnv()){var Ee=(u.withCredentials||s($))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Ee&&(N[u.xsrfHeaderName]=Ee)}"setRequestHeader"in c&&r.forEach(N,function(O,A){typeof x>"u"&&A.toLowerCase()==="content-type"?delete N[A]:c.setRequestHeader(A,O)}),r.isUndefined(u.withCredentials)||(c.withCredentials=!!u.withCredentials),L&&L!=="json"&&(c.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&c.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(y=function(R){!c||(P(!R||R&&R.type?new d:R),c.abort(),c=null)},u.cancelToken&&u.cancelToken.subscribe(y),u.signal&&(u.signal.aborted?y():u.signal.addEventListener("abort",y))),x||(x=null);var V=f($);if(V&&["http","https","file"].indexOf(V)===-1){P(new l("Unsupported protocol "+V+":",l.ERR_BAD_REQUEST,u));return}c.send(x)})},K}var Q,we;function Yr(){return we||(we=1,Q=null),Q}var m=h,Te=Mr,Ue=U,zr=Ke,Kr=Qe,Qr={"Content-Type":"application/x-www-form-urlencoded"};function xe(r,e){!m.isUndefined(r)&&m.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Zr(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=be()),r}function et(r,e,t){if(m.isString(r))try{return(e||JSON.parse)(r),m.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var k={transitional:zr,adapter:Zr(),transformRequest:[function(e,t){if(Te(t,"Accept"),Te(t,"Content-Type"),m.isFormData(e)||m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return xe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=m.isObject(e),n=t&&t["Content-Type"],i;if((i=m.isFileList(e))||a&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Kr(i?{"files[]":e}:e,s&&new s)}else if(a||n==="application/json")return xe(t,"application/json"),et(e);return e}],transformResponse:[function(e){var t=this.transitional||k.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&m.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i)throw s.name==="SyntaxError"?Ue.from(s,Ue.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Yr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};m.forEach(["delete","get","head"],function(e){k.headers[e]={}});m.forEach(["post","put","patch"],function(e){k.headers[e]=m.merge(Qr)});var pe=k,rt=h,tt=pe,nt=function(e,t,a){var n=this||tt;return rt.forEach(a,function(s){e=s.call(n,e,t)}),e},Z,Ne;function er(){return Ne||(Ne=1,Z=function(e){return!!(e&&e.__CANCEL__)}),Z}var Le=h,ee=nt,at=er(),it=pe,st=B();function re(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new st}var ot=function(e){re(e),e.headers=e.headers||{},e.data=ee.call(e,e.data,e.headers,e.transformRequest),e.headers=Le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||it.adapter;return t(e).then(function(n){return re(e),n.data=ee.call(e,n.data,n.headers,e.transformResponse),n},function(n){return at(n)||(re(e),n&&n.response&&(n.response.data=ee.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},v=h,rr=function(e,t){t=t||{};var a={};function n(f,p){return v.isPlainObject(f)&&v.isPlainObject(p)?v.merge(f,p):v.isPlainObject(p)?v.merge({},p):v.isArray(p)?p.slice():p}function i(f){if(v.isUndefined(t[f])){if(!v.isUndefined(e[f]))return n(void 0,e[f])}else return n(e[f],t[f])}function s(f){if(!v.isUndefined(t[f]))return n(void 0,t[f])}function o(f){if(v.isUndefined(t[f])){if(!v.isUndefined(e[f]))return n(void 0,e[f])}else return n(void 0,t[f])}function l(f){if(f in t)return n(e[f],t[f]);if(f in e)return n(void 0,e[f])}var d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return v.forEach(Object.keys(e).concat(Object.keys(t)),function(p){var u=d[p]||i,E=u(p);v.isUndefined(E)&&u!==l||(a[p]=E)}),a},te,Ie;function tr(){return Ie||(Ie=1,te={version:"0.27.2"}),te}var ut=tr().version,g=U,me={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){me[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var Fe={};me.transitional=function(e,t,a){function n(i,s){return"[Axios v"+ut+"] Transitional option '"+i+"'"+s+(a?". "+a:"")}return function(i,s,o){if(e===!1)throw new g(n(s," has been removed"+(t?" in "+t:"")),g.ERR_DEPRECATED);return t&&!Fe[s]&&(Fe[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,s,o):!0}};function lt(r,e,t){if(typeof r!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],s=e[i];if(s){var o=r[i],l=o===void 0||s(o,i,r);if(l!==!0)throw new g("option "+i+" must be "+l,g.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new g("Unknown option "+i,g.ERR_BAD_OPTION)}}var ct={assertOptions:lt,validators:me},nr=h,ft=Je,je=Fr,Me=ot,q=rr,dt=Ze,ar=ct,b=ar.validators;function T(r){this.defaults=r,this.interceptors={request:new je,response:new je}}T.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=q(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&ar.assertOptions(a,{silentJSONParsing:b.transitional(b.boolean),forcedJSONParsing:b.transitional(b.boolean),clarifyTimeoutError:b.transitional(b.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(t)===!1||(i=i&&E.synchronous,n.unshift(E.fulfilled,E.rejected))});var s=[];this.interceptors.response.forEach(function(E){s.push(E.fulfilled,E.rejected)});var o;if(!i){var l=[Me,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(s),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=t;n.length;){var f=n.shift(),p=n.shift();try{d=f(d)}catch(u){p(u);break}}try{o=Me(d)}catch(u){return Promise.reject(u)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};T.prototype.getUri=function(e){e=q(this.defaults,e);var t=dt(e.baseURL,e.url);return ft(t,e.params,e.paramsSerializer)};nr.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(t,a){return this.request(q(a||{},{method:e,url:t,data:(a||{}).data}))}});nr.forEach(["post","put","patch"],function(e){function t(a){return function(i,s,o){return this.request(q(o||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}T.prototype[e]=t(),T.prototype[e+"Form"]=t(!0)});var pt=T,ne,Be;function mt(){if(Be)return ne;Be=1;var r=B();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(s){a=s});var n=this;this.promise.then(function(i){if(!!n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](i);n._listeners=null}}),this.promise.then=function(i){var s,o=new Promise(function(l){n.subscribe(l),s=l}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s){n.reason||(n.reason=new r(s),a(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]},e.prototype.unsubscribe=function(a){if(!!this._listeners){var n=this._listeners.indexOf(a);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var a,n=new e(function(s){a=s});return{token:n,cancel:a}},ne=e,ne}var ae,ke;function ht(){return ke||(ke=1,ae=function(e){return function(a){return e.apply(null,a)}}),ae}var ie,qe;function _t(){if(qe)return ie;qe=1;var r=h;return ie=function(t){return r.isObject(t)&&t.isAxiosError===!0},ie}var $e=h,vt=We,F=pt,Et=rr,Rt=pe;function ir(r){var e=new F(r),t=vt(F.prototype.request,e);return $e.extend(t,F.prototype,e),$e.extend(t,e),t.create=function(n){return ir(Et(r,n))},t}var _=ir(Rt);_.Axios=F;_.CanceledError=B();_.CancelToken=mt();_.isCancel=er();_.VERSION=tr().version;_.toFormData=Qe;_.AxiosError=U;_.Cancel=_.CanceledError;_.all=function(e){return Promise.all(e)};_.spread=ht();_.isAxiosError=_t();oe.exports=_;oe.exports.default=_;(function(r){r.exports=oe.exports})(Ve);const St=cr(Ve.exports),he=St.create({baseURL:{ADSK_3DSMAX_x64_2015:"D:\\3dmax\\3ds Max 2015\\",ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\anguj\\AppData\\Roaming",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_18488_XGQZYPAUZPEKVTIR",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"LAPTOP-G9EATUSV",ComSpec:"C:\\Windows\\system32\\cmd.exe",CUDA_CACHE_MAXSIZE:"268435456",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"d:\\Users\\anguj\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\anguj",INIT_CWD:"D:\\Development\\marriage_law_h5",LANG:"zh_CN.UTF-8",LOCALAPPDATA:"C:\\Users\\anguj\\AppData\\Local",LOGONSERVER:"\\\\LAPTOP-G9EATUSV",NODE:"D:\\System\\nodejs\\node.exe",NODE_ENV:"production",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_config_bin_links:"true",npm_config_ignore_optional:"",npm_config_ignore_scripts:"",npm_config_init_license:"MIT",npm_config_init_version:"1.0.0",npm_config_registry:"https://registry.npm.taobao.org",npm_config_save_prefix:"^",npm_config_strict_ssl:"true",npm_config_user_agent:"yarn/1.22.19 npm/? node/v16.17.0 win32 x64",npm_config_version_commit_hooks:"true",npm_config_version_git_message:"v%s",npm_config_version_git_sign:"",npm_config_version_git_tag:"true",npm_config_version_tag_prefix:"v",npm_execpath:"D:\\System\\nvm\\v16.17.0\\node_modules\\yarn\\bin\\yarn.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build --mode production",npm_node_execpath:"D:\\System\\nodejs\\node.exe",npm_package_dependencies_axios:"^0.27.2",npm_package_dependencies_moment:"^2.29.4",npm_package_dependencies_node_sass:"^7.0.1",npm_package_dependencies_nprogress:"^0.2.0",npm_package_dependencies_pinia:"^2.0.17",npm_package_dependencies_pinia_plugin_persistedstate:"^1.6.3",npm_package_dependencies_sass:"^1.54.0",npm_package_dependencies_sass_loader:"^13.0.2",npm_package_dependencies_scss:"^0.2.4",npm_package_dependencies_vant:"^3.5.2",npm_package_dependencies_vue:"^3.2.37",npm_package_dependencies_vue_router:"4",npm_package_dependencies_xgplayer:"^2.31.7",npm_package_devDependencies_vite:"^3.0.0",npm_package_devDependencies__vitejs_plugin_vue:"^3.0.0",npm_package_name:"marriage_law_h5",npm_package_private:"true",npm_package_readmeFilename:"README.md",npm_package_scripts_build:"vite build --mode production",npm_package_scripts_build_aplha:"vite build --mode aplha",npm_package_scripts_dev:"vite --mode development",npm_package_scripts_preview:"vite preview",npm_package_type:"module",npm_package_version:"0.0.0",NUMBER_OF_PROCESSORS:"8",NVM_HOME:"D:\\System\\nvm",NVM_SYMLINK:"D:\\System\\nodejs",OneDrive:"C:\\Users\\anguj\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"C:\\Users\\anguj\\AppData\\Local\\Temp\\yarn--1664193781345-0.26143455981377106;D:\\Development\\marriage_law_h5\\node_modules\\.bin;C:\\Users\\anguj\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Users\\anguj\\AppData\\Local\\Yarn\\bin;D:\\System\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;D:\\System\\lib\\node_modules\\npm\\bin\\node-gyp-bin;D:\\System\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Common Files\\Autodesk Shared\\;C:\\Program Files\\Git\\cmd;D:\\System\\nvm;D:\\System\\nodejs;C:\\Users\\anguj\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin;C:\\Program Files\\Bandizip\\;D:\\anguj\\code\\tools\\\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177\\dll;C:\\Users\\anguj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\Users\\anguj\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\anguj\\AppData\\Local\\GitHubDesktop\\bin;D:\\System\\nvm;D:\\System\\nodejs;C:\\Users\\anguj\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 140 Stepping 1, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"8c01",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\anguj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\Windows",TEMP:"C:\\Users\\anguj\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.71.2",TMP:"C:\\Users\\anguj\\AppData\\Local\\Temp",USERDOMAIN:"LAPTOP-G9EATUSV",USERDOMAIN_ROAMINGPROFILE:"LAPTOP-G9EATUSV",USERNAME:"anguj",USERPROFILE:"C:\\Users\\anguj",VRAY_SEND_FEEDBACK:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"d:\\Users\\anguj\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"D:\\Users\\anguj\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-54e879731e-sock",windir:"C:\\Windows",YARN:"C:\\Users\\anguj\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin",YARN_WRAP_OUTPUT:"false",ZES_ENABLE_SYSMAN:"1",VUE_APP_API_URL_UPLOAD:"https://api.lc.familyeducation.org.cn",VUE_APP_API_URL:"https://api.lc.familyeducation.org.cn",VUE_APP_PREFIX_STR:"/v1",BASE_URL:"/h5"}.BASE_API,timeout:1e4,withCredentials:!1});he.interceptors.request.use(r=>{const e=fr();return r.headers={uid:e.loginInfo.uid,token:e.loginInfo.token,"Content-Type":"multipart/form-data"},r},r=>Promise.reject(r));he.interceptors.response.use(async r=>{const e=r.data;if(!r.config.checkRes)return e;if(e.errorCode!==0&&e.code!==0){let t="";return e.errorInfo&&(t+=e.errorInfo),e.msg&&(t+=e.msg),(e.code==="-1"||e.code===-1)&&dr.replace("/login"),e.code===101||e.code===100?(await store.dispatch("user/clearUserInfo"),await pr.alert({message:t}),location.reload()):e.code===404?e:(Re(e.echo),Promise.reject(t))}else return e.data},r=>(Re.fail("\u7F51\u7EDC\u5F02\u5E38"),Promise.reject(r)));const At=async(r,e={},{method:t="post",checkRes:a=!0,urlParams:n=[]}={})=>he({url:r,data:e,method:t,checkRes:a});export{At as r};
