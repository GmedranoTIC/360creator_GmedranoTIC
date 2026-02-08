(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jf={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function Ry(){if(Rg)return Oo;Rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var u in l)u!=="key"&&(c[u]=l[u])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Cg;function Cy(){return Cg||(Cg=1,Jf.exports=Ry()),Jf.exports}var Rt=Cy(),$f={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function Dy(){if(Dg)return pe;Dg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function g(L,X,ct){this.props=L,this.context=X,this.refs=S,this.updater=ct||M}g.prototype.isReactComponent={},g.prototype.setState=function(L,X){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,X,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function A(){}A.prototype=g.prototype;function U(L,X,ct){this.props=L,this.context=X,this.refs=S,this.updater=ct||M}var N=U.prototype=new A;N.constructor=U,b(N,g.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function C(L,X,ct){var dt=ct.ref;return{$$typeof:o,type:L,key:X,ref:dt!==void 0?dt:null,props:ct}}function I(L,X){return C(L.type,X,L.props)}function Z(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function F(L){var X={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ct){return X[ct]})}var j=/\/+/g;function T(L,X){return typeof L=="object"&&L!==null&&L.key!=null?F(""+L.key):X.toString(36)}function K(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(X){L.status==="pending"&&(L.status="fulfilled",L.value=X)},function(X){L.status==="pending"&&(L.status="rejected",L.reason=X)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function V(L,X,ct,dt,vt){var rt=typeof L;(rt==="undefined"||rt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(rt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case e:xt=!0;break;case x:return xt=L._init,V(xt(L._payload),X,ct,dt,vt)}}if(xt)return vt=vt(L),xt=dt===""?"."+T(L,0):dt,z(vt)?(ct="",xt!=null&&(ct=xt.replace(j,"$&/")+"/"),V(vt,X,ct,"",function(Bt){return Bt})):vt!=null&&(Z(vt)&&(vt=I(vt,ct+(vt.key==null||L&&L.key===vt.key?"":(""+vt.key).replace(j,"$&/")+"/")+xt)),X.push(vt)),1;xt=0;var Nt=dt===""?".":dt+":";if(z(L))for(var Pt=0;Pt<L.length;Pt++)dt=L[Pt],rt=Nt+T(dt,Pt),xt+=V(dt,X,ct,rt,vt);else if(Pt=v(L),typeof Pt=="function")for(L=Pt.call(L),Pt=0;!(dt=L.next()).done;)dt=dt.value,rt=Nt+T(dt,Pt++),xt+=V(dt,X,ct,rt,vt);else if(rt==="object"){if(typeof L.then=="function")return V(K(L),X,ct,dt,vt);throw X=String(L),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return xt}function G(L,X,ct){if(L==null)return L;var dt=[],vt=0;return V(L,dt,"","",function(rt){return X.call(ct,rt,vt++)}),dt}function nt(L){if(L._status===-1){var X=L._result;X=X(),X.then(function(ct){(L._status===0||L._status===-1)&&(L._status=1,L._result=ct)},function(ct){(L._status===0||L._status===-1)&&(L._status=2,L._result=ct)}),L._status===-1&&(L._status=0,L._result=X)}if(L._status===1)return L._result.default;throw L._result}var J=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ht={map:G,forEach:function(L,X,ct){G(L,function(){X.apply(this,arguments)},ct)},count:function(L){var X=0;return G(L,function(){X++}),X},toArray:function(L){return G(L,function(X){return X})||[]},only:function(L){if(!Z(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return pe.Activity=_,pe.Children=ht,pe.Component=g,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=U,pe.StrictMode=r,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,pe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},pe.cache=function(L){return function(){return L.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(L,X,ct){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var dt=b({},L.props),vt=L.key;if(X!=null)for(rt in X.key!==void 0&&(vt=""+X.key),X)!W.call(X,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&X.ref===void 0||(dt[rt]=X[rt]);var rt=arguments.length-2;if(rt===1)dt.children=ct;else if(1<rt){for(var xt=Array(rt),Nt=0;Nt<rt;Nt++)xt[Nt]=arguments[Nt+2];dt.children=xt}return C(L.type,vt,dt)},pe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},pe.createElement=function(L,X,ct){var dt,vt={},rt=null;if(X!=null)for(dt in X.key!==void 0&&(rt=""+X.key),X)W.call(X,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(vt[dt]=X[dt]);var xt=arguments.length-2;if(xt===1)vt.children=ct;else if(1<xt){for(var Nt=Array(xt),Pt=0;Pt<xt;Pt++)Nt[Pt]=arguments[Pt+2];vt.children=Nt}if(L&&L.defaultProps)for(dt in xt=L.defaultProps,xt)vt[dt]===void 0&&(vt[dt]=xt[dt]);return C(L,rt,vt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(L){return{$$typeof:u,render:L}},pe.isValidElement=Z,pe.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:nt}},pe.memo=function(L,X){return{$$typeof:h,type:L,compare:X===void 0?null:X}},pe.startTransition=function(L){var X=O.T,ct={};O.T=ct;try{var dt=L(),vt=O.S;vt!==null&&vt(ct,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(P,J)}catch(rt){J(rt)}finally{X!==null&&ct.types!==null&&(X.types=ct.types),O.T=X}},pe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},pe.use=function(L){return O.H.use(L)},pe.useActionState=function(L,X,ct){return O.H.useActionState(L,X,ct)},pe.useCallback=function(L,X){return O.H.useCallback(L,X)},pe.useContext=function(L){return O.H.useContext(L)},pe.useDebugValue=function(){},pe.useDeferredValue=function(L,X){return O.H.useDeferredValue(L,X)},pe.useEffect=function(L,X){return O.H.useEffect(L,X)},pe.useEffectEvent=function(L){return O.H.useEffectEvent(L)},pe.useId=function(){return O.H.useId()},pe.useImperativeHandle=function(L,X,ct){return O.H.useImperativeHandle(L,X,ct)},pe.useInsertionEffect=function(L,X){return O.H.useInsertionEffect(L,X)},pe.useLayoutEffect=function(L,X){return O.H.useLayoutEffect(L,X)},pe.useMemo=function(L,X){return O.H.useMemo(L,X)},pe.useOptimistic=function(L,X){return O.H.useOptimistic(L,X)},pe.useReducer=function(L,X,ct){return O.H.useReducer(L,X,ct)},pe.useRef=function(L){return O.H.useRef(L)},pe.useState=function(L){return O.H.useState(L)},pe.useSyncExternalStore=function(L,X,ct){return O.H.useSyncExternalStore(L,X,ct)},pe.useTransition=function(){return O.H.useTransition()},pe.version="19.2.4",pe}var Ug;function Lh(){return Ug||(Ug=1,$f.exports=Dy()),$f.exports}var Ae=Lh();const Uy=Nh(Ae);var td={exports:{}},zo={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Ny(){return Ng||(Ng=1,(function(o){function e(V,G){var nt=V.length;V.push(G);t:for(;0<nt;){var J=nt-1>>>1,ht=V[J];if(0<l(ht,G))V[J]=G,V[nt]=ht,nt=J;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var G=V[0],nt=V.pop();if(nt!==G){V[0]=nt;t:for(var J=0,ht=V.length,L=ht>>>1;J<L;){var X=2*(J+1)-1,ct=V[X],dt=X+1,vt=V[dt];if(0>l(ct,nt))dt<ht&&0>l(vt,ct)?(V[J]=vt,V[dt]=nt,J=dt):(V[J]=ct,V[X]=nt,J=X);else if(dt<ht&&0>l(vt,nt))V[J]=vt,V[dt]=nt,J=dt;else break t}}return G}function l(V,G){var nt=V.sortIndex-G.sortIndex;return nt!==0?nt:V.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,u=f.now();o.unstable_now=function(){return f.now()-u}}var p=[],h=[],x=1,_=null,y=3,v=!1,M=!1,b=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(V){for(var G=i(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=V)r(h),G.sortIndex=G.expirationTime,e(p,G);else break;G=i(h)}}function z(V){if(b=!1,N(V),!M)if(i(p)!==null)M=!0,P||(P=!0,F());else{var G=i(h);G!==null&&K(z,G.startTime-V)}}var P=!1,O=-1,W=5,C=-1;function I(){return S?!0:!(o.unstable_now()-C<W)}function Z(){if(S=!1,P){var V=o.unstable_now();C=V;var G=!0;try{t:{M=!1,b&&(b=!1,A(O),O=-1),v=!0;var nt=y;try{e:{for(N(V),_=i(p);_!==null&&!(_.expirationTime>V&&I());){var J=_.callback;if(typeof J=="function"){_.callback=null,y=_.priorityLevel;var ht=J(_.expirationTime<=V);if(V=o.unstable_now(),typeof ht=="function"){_.callback=ht,N(V),G=!0;break e}_===i(p)&&r(p),N(V)}else r(p);_=i(p)}if(_!==null)G=!0;else{var L=i(h);L!==null&&K(z,L.startTime-V),G=!1}}break t}finally{_=null,y=nt,v=!1}G=void 0}}finally{G?F():P=!1}}}var F;if(typeof U=="function")F=function(){U(Z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,T=j.port2;j.port1.onmessage=Z,F=function(){T.postMessage(null)}}else F=function(){g(Z,0)};function K(V,G){O=g(function(){V(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(V){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var nt=y;y=G;try{return V()}finally{y=nt}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var nt=y;y=V;try{return G()}finally{y=nt}},o.unstable_scheduleCallback=function(V,G,nt){var J=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?J+nt:J):nt=J,V){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=nt+ht,V={id:x++,callback:G,priorityLevel:V,startTime:nt,expirationTime:ht,sortIndex:-1},nt>J?(V.sortIndex=nt,e(h,V),i(p)===null&&V===i(h)&&(b?(A(O),O=-1):b=!0,K(z,nt-J))):(V.sortIndex=ht,e(p,V),M||v||(M=!0,P||(P=!0,F()))),V},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(V){var G=y;return function(){var nt=y;y=G;try{return V.apply(this,arguments)}finally{y=nt}}}})(nd)),nd}var Lg;function Ly(){return Lg||(Lg=1,ed.exports=Ny()),ed.exports}var id={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Oy(){if(Og)return Nn;Og=1;var o=Lh();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,h,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:h,implementation:x}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,x)},Nn.flushSync=function(p){var h=f.T,x=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=h,r.p=x,r.d.f()}},Nn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var x=h.as,_=u(x,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:v}):x==="script"&&r.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=u(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Nn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,_=u(x,h.crossOrigin);r.d.L(p,x,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(p,h){if(typeof p=="string")if(h){var x=u(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,h){return p(h)},Nn.useFormState=function(p,h,x){return f.H.useFormState(p,h,x)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var zg;function zy(){if(zg)return id.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=Oy(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function Py(){if(Pg)return zo;Pg=1;var o=Ly(),e=Lh(),i=zy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function u(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(s=d.return,s!==null){a=s;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return p(d),t;if(m===s)return p(d),n;m=m.sibling}throw Error(r(188))}if(a.return!==s.return)a=d,s=m;else{for(var E=!1,H=d.child;H;){if(H===a){E=!0,a=d,s=m;break}if(H===s){E=!0,s=d,a=m;break}H=H.sibling}if(!E){for(H=m.child;H;){if(H===a){E=!0,a=m,s=d;break}if(H===s){E=!0,s=m,a=d;break}H=H.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var j=Symbol.for("react.client.reference");function T(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===j?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case A:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:T(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return T(t(n))}catch{}}return null}var K=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},J=[],ht=-1;function L(t){return{current:t}}function X(t){0>ht||(t.current=J[ht],J[ht]=null,ht--)}function ct(t,n){ht++,J[ht]=t.current,t.current=n}var dt=L(null),vt=L(null),rt=L(null),xt=L(null);function Nt(t,n){switch(ct(rt,n),ct(vt,t),ct(dt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Q0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Q0(n),t=J0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(dt),ct(dt,t)}function Pt(){X(dt),X(vt),X(rt)}function Bt(t){t.memoizedState!==null&&ct(xt,t);var n=dt.current,a=J0(n,t.type);n!==a&&(ct(vt,t),ct(dt,a))}function ie(t){vt.current===t&&(X(dt),X(vt)),xt.current===t&&(X(xt),Do._currentValue=nt)}var we,ue;function R(t){if(we===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);we=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+t+ue}var St=!1;function ot(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ut=function(){throw Error()};if(Object.defineProperty(Ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ut,[])}catch(Mt){var _t=Mt}Reflect.construct(t,[],Ut)}else{try{Ut.call()}catch(Mt){_t=Mt}t.call(Ut.prototype)}}else{try{throw Error()}catch(Mt){_t=Mt}(Ut=t())&&typeof Ut.catch=="function"&&Ut.catch(function(){})}}catch(Mt){if(Mt&&_t&&typeof Mt.stack=="string")return[Mt.stack,_t.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=s.DetermineComponentFrameRoot(),E=m[0],H=m[1];if(E&&H){var Q=E.split(`
`),mt=H.split(`
`);for(d=s=0;s<Q.length&&!Q[s].includes("DetermineComponentFrameRoot");)s++;for(;d<mt.length&&!mt[d].includes("DetermineComponentFrameRoot");)d++;if(s===Q.length||d===mt.length)for(s=Q.length-1,d=mt.length-1;1<=s&&0<=d&&Q[s]!==mt[d];)d--;for(;1<=s&&0<=d;s--,d--)if(Q[s]!==mt[d]){if(s!==1||d!==1)do if(s--,d--,0>d||Q[s]!==mt[d]){var wt=`
`+Q[s].replace(" at new "," at ");return t.displayName&&wt.includes("<anonymous>")&&(wt=wt.replace("<anonymous>",t.displayName)),wt}while(1<=s&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?R(a):""}function Y(t,n){switch(t.tag){case 26:case 27:case 5:return R(t.type);case 16:return R("Lazy");case 13:return t.child!==n&&n!==null?R("Suspense Fallback"):R("Suspense");case 19:return R("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return R("Activity");default:return""}}function D(t){try{var n="",a=null;do n+=Y(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var et=Object.prototype.hasOwnProperty,Et=o.unstable_scheduleCallback,At=o.unstable_cancelCallback,$=o.unstable_shouldYield,B=o.unstable_requestPaint,w=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,Tt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ft=o.unstable_IdlePriority,Kt=o.log,re=o.unstable_setDisableYieldValue,Ct=null,zt=null;function qt(t){if(typeof Kt=="function"&&re(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Ct,t)}catch{}}var kt=Math.clz32?Math.clz32:it,Gt=Math.log,me=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Gt(t)/me|0)|0}var Vt=256,It=262144,Xt=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Lt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var d=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var H=s&134217727;return H!==0?(s=H&~m,s!==0?d=Ot(s):(E&=H,E!==0?d=Ot(E):a||(a=H&~t,a!==0&&(d=Ot(a))))):(H=s&~m,H!==0?d=Ot(H):E!==0?d=Ot(E):a||(a=s&~t,a!==0&&(d=Ot(a)))),d===0?0:n!==0&&n!==d&&(n&m)===0&&(m=d&-d,a=n&-n,m>=a||m===32&&(a&4194048)!==0)?n:d}function Ht(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,s,d,m){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var H=t.entanglements,Q=t.expirationTimes,mt=t.hiddenUpdates;for(a=E&~a;0<a;){var wt=31-kt(a),Ut=1<<wt;H[wt]=0,Q[wt]=-1;var _t=mt[wt];if(_t!==null)for(mt[wt]=null,wt=0;wt<_t.length;wt++){var Mt=_t[wt];Mt!==null&&(Mt.lane&=-536870913)}a&=~Ut}s!==0&&el(t,s,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~n))}function el(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-kt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ks(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-kt(a),d=1<<s;d&n|t[s]&n&&(t[s]|=n),a&=~d}}function Lr(t,n){var a=n&-n;return a=(a&42)!==0?1:Gs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Gs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Or(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vs(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Sg(t.type))}function Ci(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ii=Math.random().toString(36).slice(2),sn="__reactFiber$"+ii,xn="__reactProps$"+ii,xi="__reactContainer$"+ii,zr="__reactEvents$"+ii,Pr="__reactListeners$"+ii,nl="__reactHandles$"+ii,Xs="__reactResources$"+ii,ir="__reactMarker$"+ii;function Ws(t){delete t[sn],delete t[xn],delete t[zr],delete t[Pr],delete t[nl]}function Sa(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[xi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=rg(t);t!==null;){if(a=t[sn])return a;t=rg(t)}return n}t=a,a=t.parentNode}return null}function ba(t){if(t=t[sn]||t[xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Xs];return n||(n=t[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[ir]=!0}var at=new Set,bt={};function gt(t,n){ft(t,n),ft(t+"Capture",n)}function ft(t,n){for(bt[t]=n,t=0;t<n.length;t++)at.add(n[t])}var Wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},jt={};function Jt(t){return et.call(jt,t)?!0:et.call(Qt,t)?!1:Wt.test(t)?jt[t]=!0:(Qt[t]=!0,!1)}function te(t,n,a){if(Jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ee(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function le(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(E){a=""+E,m.call(this,E)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(E){a=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){if(!t._valueTracker){var n=Le(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Pe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Le(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ae(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oe=/[\n"\\]/g;function de(t){return t.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,s,d,m,E,H){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+le(n)):t.value!==""+le(n)&&(t.value=""+le(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,E,le(n)):a!=null?Sn(t,E,le(a)):s!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),H!=null&&typeof H!="function"&&typeof H!="symbol"&&typeof H!="boolean"?t.name=""+le(H):t.removeAttribute("name")}function ji(t,n,a,s,d,m,E,H){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),n!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||n!=null)){Ye(t);return}a=a!=null?""+le(a):"",n=n!=null?""+le(n):a,H||n===t.value||(t.value=n),t.defaultValue=n}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=H?t.checked:!!s,t.defaultChecked=!!s,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Ye(t)}function Sn(t,n,a){n==="number"&&ae(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ai(t,n,a,s){if(t=t.options,n){n={};for(var d=0;d<a.length;d++)n["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=n.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&s&&(t[a].defaultSelected=!0)}else{for(a=""+le(a),n=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,s&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function Fe(t,n,a){if(n!=null&&(n=""+le(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+le(a):""}function bn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(K(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=le(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ye(t)}function dn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ir(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var d in n)s=n[d],n.hasOwnProperty(d)&&a[d]!==s&&En(t,d,s)}else for(var m in n)n.hasOwnProperty(m)&&En(t,m,n[m])}function yi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(t){return Tv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Yc=null;function Zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Br=null;function Kh(t){var n=ba(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var d=s[xn]||null;if(!d)throw Error(r(90));yn(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Pe(s)}break t;case"textarea":Fe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ai(t,!!a.multiple,n,!1)}}}var Kc=!1;function Qh(t,n,a){if(Kc)return t(n,a);Kc=!0;try{var s=t(n);return s}finally{if(Kc=!1,(Fr!==null||Br!==null)&&(Xl(),Fr&&(n=Fr,t=Br,Br=Fr=null,Kh(n),t)))for(n=0;n<t.length;n++)Kh(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Yi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Qc=!1}var Ea=null,Jc=null,al=null;function Jh(){if(al)return al;var t,n=Jc,a=n.length,s,d="value"in Ea?Ea.value:Ea.textContent,m=d.length;for(t=0;t<a&&n[t]===d[t];t++);var E=a-t;for(s=1;s<=E&&n[a-s]===d[m-s];s++);return al=d.slice(t,1<s?1-s:void 0)}function rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function $h(){return!1}function Hn(t){function n(a,s,d,m,E){this._reactName=a,this._targetInst=d,this.type=s,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var H in t)t.hasOwnProperty(H)&&(a=t[H],this[H]=a?a(m):m[H]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?sl:$h,this.isPropagationStopped=$h,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Hn(rr),Ys=_({},rr,{view:0,detail:0}),Av=Hn(Ys),$c,tu,Zs,ll=_({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?($c=t.screenX-Zs.screenX,tu=t.screenY-Zs.screenY):tu=$c=0,Zs=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),tp=Hn(ll),wv=_({},ll,{dataTransfer:0}),Rv=Hn(wv),Cv=_({},Ys,{relatedTarget:0}),eu=Hn(Cv),Dv=_({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Hn(Dv),Nv=_({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=Hn(Nv),Ov=_({},rr,{data:0}),ep=Hn(Ov),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Iv[t])?!!n[t]:!1}function nu(){return Fv}var Bv=_({},Ys,{key:function(t){if(t.key){var n=zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hv=Hn(Bv),kv=_({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Hn(kv),Gv=_({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Vv=Hn(Gv),Xv=_({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Hn(Xv),jv=_({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Hn(jv),Yv=_({},rr,{newState:0,oldState:0}),Zv=Hn(Yv),Kv=[9,13,27,32],iu=Yi&&"CompositionEvent"in window,Ks=null;Yi&&"documentMode"in document&&(Ks=document.documentMode);var Qv=Yi&&"TextEvent"in window&&!Ks,ip=Yi&&(!iu||Ks&&8<Ks&&11>=Ks),ap=" ",rp=!1;function sp(t,n){switch(t){case"keyup":return Kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Jv(t,n){switch(t){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(rp=!0,ap);case"textInput":return t=n.data,t===ap&&rp?null:t;default:return null}}function $v(t,n){if(Hr)return t==="compositionend"||!iu&&sp(t,n)?(t=Jh(),al=Jc=Ea=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!tx[t.type]:n==="textarea"}function cp(t,n,a,s){Fr?Br?Br.push(s):Br=[s]:Fr=s,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function ex(t){W0(t,0)}function cl(t){var n=ar(t);if(Pe(n))return t}function up(t,n){if(t==="change")return n}var fp=!1;if(Yi){var au;if(Yi){var ru="oninput"in document;if(!ru){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),ru=typeof dp.oninput=="function"}au=ru}else au=!1;fp=au&&(!document.documentMode||9<document.documentMode)}function hp(){Qs&&(Qs.detachEvent("onpropertychange",pp),Js=Qs=null)}function pp(t){if(t.propertyName==="value"&&cl(Js)){var n=[];cp(n,Js,t,Zc(t)),Qh(ex,n)}}function nx(t,n,a){t==="focusin"?(hp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",pp)):t==="focusout"&&hp()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Js)}function ax(t,n){if(t==="click")return cl(n)}function rx(t,n){if(t==="input"||t==="change")return cl(n)}function sx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:sx;function $s(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var d=a[s];if(!et.call(n,d)||!qn(t[d],n[d]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,n){var a=mp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mp(a)}}function _p(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_p(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ae(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ae(t.document)}return n}function su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ox=Yi&&"documentMode"in document&&11>=document.documentMode,kr=null,ou=null,to=null,lu=!1;function xp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||kr==null||kr!==ae(s)||(s=kr,"selectionStart"in s&&su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),to&&$s(to,s)||(to=s,s=Ql(ou,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=kr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},cu={},yp={};Yi&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function or(t){if(cu[t])return cu[t];if(!Gr[t])return t;var n=Gr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return cu[t]=n[a];return t}var Sp=or("animationend"),bp=or("animationiteration"),Mp=or("animationstart"),lx=or("transitionrun"),cx=or("transitionstart"),ux=or("transitioncancel"),Ep=or("transitionend"),Tp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function Si(t,n){Tp.set(t,n),gt(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Vr=0,fu=0;function fl(){for(var t=Vr,n=fu=Vr=0;n<t;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var d=ri[n];ri[n++]=null;var m=ri[n];if(ri[n++]=null,s!==null&&d!==null){var E=s.pending;E===null?d.next=d:(d.next=E.next,E.next=d),s.pending=d}m!==0&&Ap(a,d,m)}}function dl(t,n,a,s){ri[Vr++]=t,ri[Vr++]=n,ri[Vr++]=a,ri[Vr++]=s,fu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function du(t,n,a,s){return dl(t,n,a,s),hl(t)}function lr(t,n){return dl(t,null,null,n),hl(t)}function Ap(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var d=!1,m=t.return;m!==null;)m.childLanes|=a,s=m.alternate,s!==null&&(s.childLanes|=a),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&n!==null&&(d=31-kt(a),t=m.hiddenUpdates,s=t[d],s===null?t[d]=[n]:s.push(n),n.lane=a|536870912),m):null}function hl(t){if(50<Mo)throw Mo=0,bf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function fx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new fx(t,n,a,s)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,s,d,m){var E=0;if(s=t,typeof t=="function")hu(t)&&(E=1);else if(typeof t=="string")E=gy(t,a,dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=Yn(31,a,n,d),t.elementType=C,t.lanes=m,t;case b:return cr(a.children,d,m,n);case S:E=8,d|=24;break;case g:return t=Yn(12,a,n,d|2),t.elementType=g,t.lanes=m,t;case z:return t=Yn(13,a,n,d),t.elementType=z,t.lanes=m,t;case P:return t=Yn(19,a,n,d),t.elementType=P,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:E=10;break t;case A:E=9;break t;case N:E=11;break t;case O:E=14;break t;case W:E=16,s=null;break t}E=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(E,a,n,d),n.elementType=t,n.type=s,n.lanes=m,n}function cr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function pu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Rp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function mu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=Cp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:D(n)},Cp.set(t,n),n)}return{value:t,source:n,stack:D(n)}}var Wr=[],jr=0,ml=null,eo=0,oi=[],li=0,Ta=null,Di=1,Ui="";function Ki(t,n){Wr[jr++]=eo,Wr[jr++]=ml,ml=t,eo=n}function Dp(t,n,a){oi[li++]=Di,oi[li++]=Ui,oi[li++]=Ta,Ta=t;var s=Di;t=Ui;var d=32-kt(s)-1;s&=~(1<<d),a+=1;var m=32-kt(n)+d;if(30<m){var E=d-d%5;m=(s&(1<<E)-1).toString(32),s>>=E,d-=E,Di=1<<32-kt(n)+d|a<<d|s,Ui=m+t}else Di=1<<m|a<<d|s,Ui=t}function gu(t){t.return!==null&&(Ki(t,1),Dp(t,1,0))}function _u(t){for(;t===ml;)ml=Wr[--jr],Wr[jr]=null,eo=Wr[--jr],Wr[jr]=null;for(;t===Ta;)Ta=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null,Di=oi[--li],oi[li]=null}function Up(t,n){oi[li++]=Di,oi[li++]=Ui,oi[li++]=Ta,Di=n.id,Ui=n.overflow,Ta=t}var Tn=null,Ze=null,Te=!1,Aa=null,ci=!1,vu=Error(r(519));function wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(si(n,t)),vu}function Np(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[xn]=s,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)Se(To[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),ji(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),bn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Z0(n.textContent,a)?(s.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),s.onScroll!=null&&Se("scroll",n),s.onScrollEnd!=null&&Se("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||wa(t,!0)}function Lp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function qr(t){if(t!==Tn)return!1;if(!Te)return Lp(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||If(t.type,t.memoizedProps)),a=!a),a&&Ze&&wa(t),Lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=ag(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=ag(t)}else n===27?(n=Ze,ka(t.type)?(t=Gf,Gf=null,Ze=t):Ze=n):Ze=Tn?fi(t.stateNode.nextSibling):null;return!0}function ur(){Ze=Tn=null,Te=!1}function xu(){var t=Aa;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Aa=null),t}function no(t){Aa===null?Aa=[t]:Aa.push(t)}var yu=L(null),fr=null,Qi=null;function Ra(t,n,a){ct(yu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=yu.current,X(yu)}function Su(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function bu(t,n,a,s){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;t:for(;m!==null;){var H=m;m=d;for(var Q=0;Q<n.length;Q++)if(H.context===n[Q]){m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Su(m.return,a,t),s||(E=null);break t}m=H.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(r(341));E.lanes|=a,m=E.alternate,m!==null&&(m.lanes|=a),Su(E,a,t),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===t){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Yr(t,n,a,s){t=null;for(var d=n,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var H=d.type;qn(d.pendingProps.value,E.value)||(t!==null?t.push(H):t=[H])}}else if(d===xt.current){if(E=d.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}d=d.return}t!==null&&bu(n,t,a,s),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){fr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Op(fr,t)}function _l(t,n){return fr===null&&dr(t),Op(t,n)}function Op(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(r(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hx=o.unstable_scheduleCallback,px=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new dx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&hx(px,function(){t.controller.abort()})}var ao=null,Eu=0,Zr=0,Kr=null;function mx(t,n){if(ao===null){var a=ao=[];Eu=0,Zr=Rf(),Kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Eu++,n.then(zp,zp),n}function zp(){if(--Eu===0&&ao!==null){Kr!==null&&(Kr.status="fulfilled");var t=ao;ao=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function gx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var d=0;d<a.length;d++)(0,a[d])(n)},function(d){for(s.status="rejected",s.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),s}var Pp=V.S;V.S=function(t,n){x0=w(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mx(t,n),Pp!==null&&Pp(t,n)};var hr=L(null);function Tu(){var t=hr.current;return t!==null?t:qe.pooledCache}function vl(t,n){n===null?ct(hr,hr.current):ct(hr,n.pool)}function Ip(){var t=Tu();return t===null?null:{parent:on._currentValue,pool:t}}var Qr=Error(r(460)),Au=Error(r(474)),xl=Error(r(542)),yl={then:function(){}};function Fp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=s}},function(s){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t}throw mr=n,Qr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Qr):a}}var mr=null;function Hp(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function kp(t){if(t===Qr||t===xl)throw Error(r(483))}var Jr=null,ro=0;function Sl(t){var n=ro;return ro+=1,Jr===null&&(Jr=[]),Bp(Jr,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gp(t){function n(st,tt){if(t){var pt=st.deletions;pt===null?(st.deletions=[tt],st.flags|=16):pt.push(tt)}}function a(st,tt){if(!t)return null;for(;tt!==null;)n(st,tt),tt=tt.sibling;return null}function s(st){for(var tt=new Map;st!==null;)st.key!==null?tt.set(st.key,st):tt.set(st.index,st),st=st.sibling;return tt}function d(st,tt){return st=Zi(st,tt),st.index=0,st.sibling=null,st}function m(st,tt,pt){return st.index=pt,t?(pt=st.alternate,pt!==null?(pt=pt.index,pt<tt?(st.flags|=67108866,tt):pt):(st.flags|=67108866,tt)):(st.flags|=1048576,tt)}function E(st){return t&&st.alternate===null&&(st.flags|=67108866),st}function H(st,tt,pt,Dt){return tt===null||tt.tag!==6?(tt=pu(pt,st.mode,Dt),tt.return=st,tt):(tt=d(tt,pt),tt.return=st,tt)}function Q(st,tt,pt,Dt){var se=pt.type;return se===b?wt(st,tt,pt.props.children,Dt,pt.key):tt!==null&&(tt.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===W&&pr(se)===tt.type)?(tt=d(tt,pt.props),so(tt,pt),tt.return=st,tt):(tt=pl(pt.type,pt.key,pt.props,null,st.mode,Dt),so(tt,pt),tt.return=st,tt)}function mt(st,tt,pt,Dt){return tt===null||tt.tag!==4||tt.stateNode.containerInfo!==pt.containerInfo||tt.stateNode.implementation!==pt.implementation?(tt=mu(pt,st.mode,Dt),tt.return=st,tt):(tt=d(tt,pt.children||[]),tt.return=st,tt)}function wt(st,tt,pt,Dt,se){return tt===null||tt.tag!==7?(tt=cr(pt,st.mode,Dt,se),tt.return=st,tt):(tt=d(tt,pt),tt.return=st,tt)}function Ut(st,tt,pt){if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return tt=pu(""+tt,st.mode,pt),tt.return=st,tt;if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:return pt=pl(tt.type,tt.key,tt.props,null,st.mode,pt),so(pt,tt),pt.return=st,pt;case M:return tt=mu(tt,st.mode,pt),tt.return=st,tt;case W:return tt=pr(tt),Ut(st,tt,pt)}if(K(tt)||F(tt))return tt=cr(tt,st.mode,pt,null),tt.return=st,tt;if(typeof tt.then=="function")return Ut(st,Sl(tt),pt);if(tt.$$typeof===U)return Ut(st,_l(st,tt),pt);bl(st,tt)}return null}function _t(st,tt,pt,Dt){var se=tt!==null?tt.key:null;if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return se!==null?null:H(st,tt,""+pt,Dt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return pt.key===se?Q(st,tt,pt,Dt):null;case M:return pt.key===se?mt(st,tt,pt,Dt):null;case W:return pt=pr(pt),_t(st,tt,pt,Dt)}if(K(pt)||F(pt))return se!==null?null:wt(st,tt,pt,Dt,null);if(typeof pt.then=="function")return _t(st,tt,Sl(pt),Dt);if(pt.$$typeof===U)return _t(st,tt,_l(st,pt),Dt);bl(st,pt)}return null}function Mt(st,tt,pt,Dt,se){if(typeof Dt=="string"&&Dt!==""||typeof Dt=="number"||typeof Dt=="bigint")return st=st.get(pt)||null,H(tt,st,""+Dt,se);if(typeof Dt=="object"&&Dt!==null){switch(Dt.$$typeof){case v:return st=st.get(Dt.key===null?pt:Dt.key)||null,Q(tt,st,Dt,se);case M:return st=st.get(Dt.key===null?pt:Dt.key)||null,mt(tt,st,Dt,se);case W:return Dt=pr(Dt),Mt(st,tt,pt,Dt,se)}if(K(Dt)||F(Dt))return st=st.get(pt)||null,wt(tt,st,Dt,se,null);if(typeof Dt.then=="function")return Mt(st,tt,pt,Sl(Dt),se);if(Dt.$$typeof===U)return Mt(st,tt,pt,_l(tt,Dt),se);bl(tt,Dt)}return null}function $t(st,tt,pt,Dt){for(var se=null,Ue=null,ne=tt,_e=tt=0,Me=null;ne!==null&&_e<pt.length;_e++){ne.index>_e?(Me=ne,ne=null):Me=ne.sibling;var Ne=_t(st,ne,pt[_e],Dt);if(Ne===null){ne===null&&(ne=Me);break}t&&ne&&Ne.alternate===null&&n(st,ne),tt=m(Ne,tt,_e),Ue===null?se=Ne:Ue.sibling=Ne,Ue=Ne,ne=Me}if(_e===pt.length)return a(st,ne),Te&&Ki(st,_e),se;if(ne===null){for(;_e<pt.length;_e++)ne=Ut(st,pt[_e],Dt),ne!==null&&(tt=m(ne,tt,_e),Ue===null?se=ne:Ue.sibling=ne,Ue=ne);return Te&&Ki(st,_e),se}for(ne=s(ne);_e<pt.length;_e++)Me=Mt(ne,st,_e,pt[_e],Dt),Me!==null&&(t&&Me.alternate!==null&&ne.delete(Me.key===null?_e:Me.key),tt=m(Me,tt,_e),Ue===null?se=Me:Ue.sibling=Me,Ue=Me);return t&&ne.forEach(function(ja){return n(st,ja)}),Te&&Ki(st,_e),se}function ce(st,tt,pt,Dt){if(pt==null)throw Error(r(151));for(var se=null,Ue=null,ne=tt,_e=tt=0,Me=null,Ne=pt.next();ne!==null&&!Ne.done;_e++,Ne=pt.next()){ne.index>_e?(Me=ne,ne=null):Me=ne.sibling;var ja=_t(st,ne,Ne.value,Dt);if(ja===null){ne===null&&(ne=Me);break}t&&ne&&ja.alternate===null&&n(st,ne),tt=m(ja,tt,_e),Ue===null?se=ja:Ue.sibling=ja,Ue=ja,ne=Me}if(Ne.done)return a(st,ne),Te&&Ki(st,_e),se;if(ne===null){for(;!Ne.done;_e++,Ne=pt.next())Ne=Ut(st,Ne.value,Dt),Ne!==null&&(tt=m(Ne,tt,_e),Ue===null?se=Ne:Ue.sibling=Ne,Ue=Ne);return Te&&Ki(st,_e),se}for(ne=s(ne);!Ne.done;_e++,Ne=pt.next())Ne=Mt(ne,st,_e,Ne.value,Dt),Ne!==null&&(t&&Ne.alternate!==null&&ne.delete(Ne.key===null?_e:Ne.key),tt=m(Ne,tt,_e),Ue===null?se=Ne:Ue.sibling=Ne,Ue=Ne);return t&&ne.forEach(function(wy){return n(st,wy)}),Te&&Ki(st,_e),se}function We(st,tt,pt,Dt){if(typeof pt=="object"&&pt!==null&&pt.type===b&&pt.key===null&&(pt=pt.props.children),typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:t:{for(var se=pt.key;tt!==null;){if(tt.key===se){if(se=pt.type,se===b){if(tt.tag===7){a(st,tt.sibling),Dt=d(tt,pt.props.children),Dt.return=st,st=Dt;break t}}else if(tt.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===W&&pr(se)===tt.type){a(st,tt.sibling),Dt=d(tt,pt.props),so(Dt,pt),Dt.return=st,st=Dt;break t}a(st,tt);break}else n(st,tt);tt=tt.sibling}pt.type===b?(Dt=cr(pt.props.children,st.mode,Dt,pt.key),Dt.return=st,st=Dt):(Dt=pl(pt.type,pt.key,pt.props,null,st.mode,Dt),so(Dt,pt),Dt.return=st,st=Dt)}return E(st);case M:t:{for(se=pt.key;tt!==null;){if(tt.key===se)if(tt.tag===4&&tt.stateNode.containerInfo===pt.containerInfo&&tt.stateNode.implementation===pt.implementation){a(st,tt.sibling),Dt=d(tt,pt.children||[]),Dt.return=st,st=Dt;break t}else{a(st,tt);break}else n(st,tt);tt=tt.sibling}Dt=mu(pt,st.mode,Dt),Dt.return=st,st=Dt}return E(st);case W:return pt=pr(pt),We(st,tt,pt,Dt)}if(K(pt))return $t(st,tt,pt,Dt);if(F(pt)){if(se=F(pt),typeof se!="function")throw Error(r(150));return pt=se.call(pt),ce(st,tt,pt,Dt)}if(typeof pt.then=="function")return We(st,tt,Sl(pt),Dt);if(pt.$$typeof===U)return We(st,tt,_l(st,pt),Dt);bl(st,pt)}return typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint"?(pt=""+pt,tt!==null&&tt.tag===6?(a(st,tt.sibling),Dt=d(tt,pt),Dt.return=st,st=Dt):(a(st,tt),Dt=pu(pt,st.mode,Dt),Dt.return=st,st=Dt),E(st)):a(st,tt)}return function(st,tt,pt,Dt){try{ro=0;var se=We(st,tt,pt,Dt);return Jr=null,se}catch(ne){if(ne===Qr||ne===xl)throw ne;var Ue=Yn(29,ne,null,st.mode);return Ue.lanes=Dt,Ue.return=st,Ue}finally{}}}var gr=Gp(!0),Vp=Gp(!1),Ca=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ze&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,n=hl(t),Ap(t,null,a),n}return dl(t,s,n,a),hl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ks(t,a)}}function Cu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=n:m=m.next=n}else d=m=n;a={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Du=!1;function lo(){if(Du){var t=Kr;if(t!==null)throw t}}function co(t,n,a,s){Du=!1;var d=t.updateQueue;Ca=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,H=d.shared.pending;if(H!==null){d.shared.pending=null;var Q=H,mt=Q.next;Q.next=null,E===null?m=mt:E.next=mt,E=Q;var wt=t.alternate;wt!==null&&(wt=wt.updateQueue,H=wt.lastBaseUpdate,H!==E&&(H===null?wt.firstBaseUpdate=mt:H.next=mt,wt.lastBaseUpdate=Q))}if(m!==null){var Ut=d.baseState;E=0,wt=mt=Q=null,H=m;do{var _t=H.lane&-536870913,Mt=_t!==H.lane;if(Mt?(be&_t)===_t:(s&_t)===_t){_t!==0&&_t===Zr&&(Du=!0),wt!==null&&(wt=wt.next={lane:0,tag:H.tag,payload:H.payload,callback:null,next:null});t:{var $t=t,ce=H;_t=n;var We=a;switch(ce.tag){case 1:if($t=ce.payload,typeof $t=="function"){Ut=$t.call(We,Ut,_t);break t}Ut=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=ce.payload,_t=typeof $t=="function"?$t.call(We,Ut,_t):$t,_t==null)break t;Ut=_({},Ut,_t);break t;case 2:Ca=!0}}_t=H.callback,_t!==null&&(t.flags|=64,Mt&&(t.flags|=8192),Mt=d.callbacks,Mt===null?d.callbacks=[_t]:Mt.push(_t))}else Mt={lane:_t,tag:H.tag,payload:H.payload,callback:H.callback,next:null},wt===null?(mt=wt=Mt,Q=Ut):wt=wt.next=Mt,E|=_t;if(H=H.next,H===null){if(H=d.shared.pending,H===null)break;Mt=H,H=Mt.next,Mt.next=null,d.lastBaseUpdate=Mt,d.shared.pending=null}}while(!0);wt===null&&(Q=Ut),d.baseState=Q,d.firstBaseUpdate=mt,d.lastBaseUpdate=wt,m===null&&(d.shared.lanes=0),Pa|=E,t.lanes=E,t.memoizedState=Ut}}function Xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Wp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xp(a[t],n)}var $r=L(null),Ml=L(0);function jp(t,n){t=oa,ct(Ml,t),ct($r,n),oa=t|n.baseLanes}function Uu(){ct(Ml,oa),ct($r,$r.current)}function Nu(){oa=Ml.current,X($r),X(Ml)}var Zn=L(null),ui=null;function Na(t){var n=t.alternate;ct(en,en.current&1),ct(Zn,t),ui===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(ui=t)}function Lu(t){ct(en,en.current),ct(Zn,t),ui===null&&(ui=t)}function qp(t){t.tag===22?(ct(en,en.current),ct(Zn,t),ui===null&&(ui=t)):La()}function La(){ct(en,en.current),ct(Zn,Zn.current)}function Kn(t){X(Zn),ui===t&&(ui=null),X(en)}var en=L(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ge=null,Ve=null,ln=null,Tl=!1,ts=!1,_r=!1,Al=0,uo=0,es=null,_x=0;function $e(){throw Error(r(321))}function Ou(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function zu(t,n,a,s,d,m){return $i=m,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,V.H=t===null||t.memoizedState===null?Dm:Ku,_r=!1,m=a(s,d),_r=!1,ts&&(m=Zp(n,a,s,d)),Yp(t),m}function Yp(t){V.H=po;var n=Ve!==null&&Ve.next!==null;if($i=0,ln=Ve=ge=null,Tl=!1,uo=0,es=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&gl(t)&&(cn=!0))}function Zp(t,n,a,s){ge=t;var d=0;do{if(ts&&(es=null),uo=0,ts=!1,25<=d)throw Error(r(301));if(d+=1,ln=Ve=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}V.H=Um,m=n(a,s)}while(ts);return m}function vx(){var t=V.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(ge.flags|=1024),n}function Pu(){var t=Al!==0;return Al=0,t}function Iu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}$i=0,ln=Ve=ge=null,ts=!1,uo=Al=0,es=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ge.memoizedState=ln=t:ln=ln.next=t,ln}function nn(){if(Ve===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=ln===null?ge.memoizedState:ln.next;if(n!==null)ln=n,Ve=t;else{if(t===null)throw ge.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ln===null?ge.memoizedState=ln=t:ln=ln.next=t}return ln}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,es===null&&(es=[]),t=Bp(es,t,n),n=ge,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,V.H=n===null||n.memoizedState===null?Dm:Ku),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===U)return An(t)}throw Error(r(438,String(t)))}function Bu(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ge.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=I;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=nn();return Hu(n,Ve,t)}function Hu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var d=t.baseQueue,m=s.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}n.baseQueue=d=m,s.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{n=d.next;var H=E=null,Q=null,mt=n,wt=!1;do{var Ut=mt.lane&-536870913;if(Ut!==mt.lane?(be&Ut)===Ut:($i&Ut)===Ut){var _t=mt.revertLane;if(_t===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null}),Ut===Zr&&(wt=!0);else if(($i&_t)===_t){mt=mt.next,_t===Zr&&(wt=!0);continue}else Ut={lane:0,revertLane:mt.revertLane,gesture:null,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null},Q===null?(H=Q=Ut,E=m):Q=Q.next=Ut,ge.lanes|=_t,Pa|=_t;Ut=mt.action,_r&&a(m,Ut),m=mt.hasEagerState?mt.eagerState:a(m,Ut)}else _t={lane:Ut,revertLane:mt.revertLane,gesture:mt.gesture,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null},Q===null?(H=Q=_t,E=m):Q=Q.next=_t,ge.lanes|=Ut,Pa|=Ut;mt=mt.next}while(mt!==null&&mt!==n);if(Q===null?E=m:Q.next=H,!qn(m,t.memoizedState)&&(cn=!0,wt&&(a=Kr,a!==null)))throw a;t.memoizedState=m,t.baseState=E,t.baseQueue=Q,s.lastRenderedState=m}return d===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function ku(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,d=a.pending,m=n.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=t(m,E.action),E=E.next;while(E!==d);qn(m,n.memoizedState)||(cn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),a.lastRenderedState=m}return[m,s]}function Kp(t,n,a){var s=ge,d=nn(),m=Te;if(m){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!qn((Ve||d).memoizedState,a);if(E&&(d.memoizedState=a,cn=!0),d=d.queue,Xu($p.bind(null,s,d,t),[t]),d.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,ns(9,{destroy:void 0},Jp.bind(null,s,d,a,n),null),qe===null)throw Error(r(349));m||($i&127)!==0||Qp(s,n,a)}return a}function Qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=wl(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Jp(t,n,a,s){n.value=a,n.getSnapshot=s,tm(n)&&em(t)}function $p(t,n,a){return a(function(){tm(n)&&em(t)})}function tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function em(t){var n=lr(t,2);n!==null&&Wn(n,t,2)}function Gu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),_r){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function nm(t,n,a,s){return t.baseState=a,Hu(t,Ve,typeof s=="function"?s:ta)}function xx(t,n,a,s,d){if(Nl(t))throw Error(r(485));if(t=n.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};V.T!==null?a(!0):m.isTransition=!1,s(m),a=n.pending,a===null?(m.next=n.pending=m,im(n,m)):(m.next=a.next,n.pending=a.next=m)}}function im(t,n){var a=n.action,s=n.payload,d=t.state;if(n.isTransition){var m=V.T,E={};V.T=E;try{var H=a(d,s),Q=V.S;Q!==null&&Q(E,H),am(t,n,H)}catch(mt){Vu(t,n,mt)}finally{m!==null&&E.types!==null&&(m.types=E.types),V.T=m}}else try{m=a(d,s),am(t,n,m)}catch(mt){Vu(t,n,mt)}}function am(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){rm(t,n,s)},function(s){return Vu(t,n,s)}):rm(t,n,a)}function rm(t,n,a){n.status="fulfilled",n.value=a,sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,im(t,a)))}function Vu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==s)}t.action=null}function sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function om(t,n){return n}function lm(t,n){if(Te){var a=qe.formState;if(a!==null){t:{var s=ge;if(Te){if(Ze){e:{for(var d=Ze,m=ci;d.nodeType!==8;){if(!m){d=null;break e}if(d=fi(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ze=fi(d.nextSibling),s=d.data==="F!";break t}}wa(s)}s=!1}s&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=s,a=wm.bind(null,ge,s),s.dispatch=a,s=Gu(!1),m=Zu.bind(null,ge,!1,s.queue),s=In(),d={state:n,dispatch:null,action:t,pending:null},s.queue=d,a=xx.bind(null,ge,d,m,a),d.dispatch=a,s.memoizedState=t,[n,a,!1]}function cm(t){var n=nn();return um(n,Ve,t)}function um(t,n,a){if(n=Hu(t,n,om)[0],t=Cl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=fo(n)}catch(E){throw E===Qr?xl:E}else s=n;n=nn();var d=n.queue,m=d.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,ns(9,{destroy:void 0},yx.bind(null,d,a),null)),[s,m,t]}function yx(t,n){t.action=n}function fm(t){var n=nn(),a=Ve;if(a!==null)return um(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ns(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ge.updateQueue,n===null&&(n=wl(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function dm(){return nn().memoizedState}function Dl(t,n,a,s){var d=In();ge.flags|=t,d.memoizedState=ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ul(t,n,a,s){var d=nn();s=s===void 0?null:s;var m=d.memoizedState.inst;Ve!==null&&s!==null&&Ou(s,Ve.memoizedState.deps)?d.memoizedState=ns(n,m,a,s):(ge.flags|=t,d.memoizedState=ns(1|n,m,a,s))}function hm(t,n){Dl(8390656,8,t,n)}function Xu(t,n){Ul(2048,8,t,n)}function Sx(t){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=wl(),ge.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function pm(t){var n=nn().memoizedState;return Sx({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function mm(t,n){return Ul(4,2,t,n)}function gm(t,n){return Ul(4,4,t,n)}function _m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function vm(t,n,a){a=a!=null?a.concat([t]):null,Ul(4,4,_m.bind(null,n,t),a)}function Wu(){}function xm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Ou(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Ou(n,s[1]))return s[0];if(s=t(),_r){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[s,n],s}function ju(t,n,a){return a===void 0||($i&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=S0(),ge.lanes|=t,Pa|=t,a)}function Sm(t,n,a,s){return qn(a,n)?a:$r.current!==null?(t=ju(t,a,s),qn(t,n)||(cn=!0),t):($i&42)===0||($i&1073741824)!==0&&(be&261930)===0?(cn=!0,t.memoizedState=a):(t=S0(),ge.lanes|=t,Pa|=t,n)}function bm(t,n,a,s,d){var m=G.p;G.p=m!==0&&8>m?m:8;var E=V.T,H={};V.T=H,Zu(t,!1,n,a);try{var Q=d(),mt=V.S;if(mt!==null&&mt(H,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var wt=gx(Q,s);ho(t,n,wt,$n(t))}else ho(t,n,s,$n(t))}catch(Ut){ho(t,n,{then:function(){},status:"rejected",reason:Ut},$n())}finally{G.p=m,E!==null&&H.types!==null&&(E.types=H.types),V.T=E}}function bx(){}function qu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var d=Mm(t).queue;bm(t,d,n,nt,a===null?bx:function(){return Em(t),a(s)})}function Mm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Em(t){var n=Mm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},$n())}function Yu(){return An(Do)}function Tm(){return nn().memoizedState}function Am(){return nn().memoizedState}function Mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Da(a);var s=Ua(n,t,a);s!==null&&(Wn(s,n,a),oo(s,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function Ex(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(t)?Rm(n,a):(a=du(t,n,a,s),a!==null&&(Wn(a,t,s),Cm(a,n,s)))}function wm(t,n,a){var s=$n();ho(t,n,a,s)}function ho(t,n,a,s){var d={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(t))Rm(n,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var E=n.lastRenderedState,H=m(E,a);if(d.hasEagerState=!0,d.eagerState=H,qn(H,E))return dl(t,n,d,0),qe===null&&fl(),!1}catch{}finally{}if(a=du(t,n,d,s),a!==null)return Wn(a,t,s),Cm(a,n,s),!0}return!1}function Zu(t,n,a,s){if(s={lane:2,revertLane:Rf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nl(t)){if(n)throw Error(r(479))}else n=du(t,a,s,2),n!==null&&Wn(n,t,2)}function Nl(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function Rm(t,n){ts=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Cm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ks(t,a)}}var po={readContext:An,use:Rl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};po.useEffectEvent=$e;var Dm={readContext:An,use:Rl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:hm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,_m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var s=t();if(_r){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=In();if(a!==void 0){var d=a(n);if(_r){qt(!0);try{a(n)}finally{qt(!1)}}}else d=n;return s.memoizedState=s.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},s.queue=t,t=t.dispatch=Ex.bind(null,ge,t),[s.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Gu(t);var n=t.queue,a=wm.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(t,n){var a=In();return ju(a,t,n)},useTransition:function(){var t=Gu(!1);return t=bm.bind(null,ge,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ge,d=In();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(be&127)!==0||Qp(s,n,a)}d.memoizedState=a;var m={value:a,getSnapshot:n};return d.queue=m,hm($p.bind(null,s,m,t),[t]),s.flags|=2048,ns(9,{destroy:void 0},Jp.bind(null,s,m,a,n),null),a},useId:function(){var t=In(),n=qe.identifierPrefix;if(Te){var a=Ui,s=Di;a=(s&~(1<<32-kt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_x++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yu,useFormState:lm,useActionState:lm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bu,useCacheRefresh:function(){return In().memoizedState=Mx.bind(null,ge)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ku={readContext:An,use:Rl,useCallback:xm,useContext:An,useEffect:Xu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:Cl,useRef:dm,useState:function(){return Cl(ta)},useDebugValue:Wu,useDeferredValue:function(t,n){var a=nn();return Sm(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Cl(ta)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:Yu,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=nn();return nm(a,Ve,t,n)},useMemoCache:Bu,useCacheRefresh:Am};Ku.useEffectEvent=pm;var Um={readContext:An,use:Rl,useCallback:xm,useContext:An,useEffect:Xu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:ku,useRef:dm,useState:function(){return ku(ta)},useDebugValue:Wu,useDeferredValue:function(t,n){var a=nn();return Ve===null?ju(a,t,n):Sm(a,Ve.memoizedState,t,n)},useTransition:function(){var t=ku(ta)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:Yu,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=nn();return Ve!==null?nm(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:Am};Um.useEffectEvent=pm;function Qu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),d=Da(s);d.payload=n,a!=null&&(d.callback=a),n=Ua(t,d,s),n!==null&&(Wn(n,t,s),oo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),d=Da(s);d.tag=1,d.payload=n,a!=null&&(d.callback=a),n=Ua(t,d,s),n!==null&&(Wn(n,t,s),oo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(t,s,a),n!==null&&(Wn(n,t,a),oo(n,t,a))}};function Nm(t,n,a,s,d,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,m,E):n.prototype&&n.prototype.isPureReactComponent?!$s(a,s)||!$s(d,m):!0}function Lm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ju.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var d in t)a[d]===void 0&&(a[d]=t[d])}return a}function Om(t){ul(t)}function zm(t){console.error(t)}function Pm(t){ul(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Im(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function $u(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Fm(t){return t=Da(t),t.tag=3,t}function Bm(t,n,a,s){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=s.value;t.payload=function(){return d(m)},t.callback=function(){Im(n,a,s)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Im(n,a,s),typeof d!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var H=s.stack;this.componentDidCatch(s.value,{componentStack:H!==null?H:""})})}function Tx(t,n,a,s,d){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,d,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Wl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=d,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Tf(t,s,d)),!1;case 22:return a.flags|=65536,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Tf(t,s,d)),!1}throw Error(r(435,a.tag))}return Tf(t,s,d),Wl(),!1}if(Te)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,s!==vu&&(t=Error(r(422),{cause:s}),no(si(t,a)))):(s!==vu&&(n=Error(r(423),{cause:s}),no(si(n,a))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,s=si(s,a),d=$u(t.stateNode,s,d),Cu(t,d),tn!==4&&(tn=2)),!1;var m=Error(r(520),{cause:s});if(m=si(m,a),bo===null?bo=[m]:bo.push(m),tn!==4&&(tn=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=d&-d,a.lanes|=t,t=$u(a.stateNode,s,t),Cu(a,t),!1;case 1:if(n=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ia===null||!Ia.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=Fm(d),Bm(d,t,a,s),Cu(a,d),!1}a=a.return}while(a!==null);return!1}var tf=Error(r(461)),cn=!1;function wn(t,n,a,s){n.child=t===null?Vp(n,null,a,s):gr(n,t.child,a,s)}function Hm(t,n,a,s,d){a=a.render;var m=n.ref;if("ref"in s){var E={};for(var H in s)H!=="ref"&&(E[H]=s[H])}else E=s;return dr(n),s=zu(t,n,a,E,m,d),H=Pu(),t!==null&&!cn?(Iu(t,n,d),ea(t,n,d)):(Te&&H&&gu(n),n.flags|=1,wn(t,n,s,d),n.child)}function km(t,n,a,s,d){if(t===null){var m=a.type;return typeof m=="function"&&!hu(m)&&m.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=m,Gm(t,n,m,s,d)):(t=pl(a.type,null,s,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(m=t.child,!cf(t,d)){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(E,s)&&t.ref===n.ref)return ea(t,n,d)}return n.flags|=1,t=Zi(m,s),t.ref=n.ref,t.return=n,n.child=t}function Gm(t,n,a,s,d){if(t!==null){var m=t.memoizedProps;if($s(m,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=m,cf(t,d))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ea(t,n,d)}return ef(t,n,a,s,d)}function Vm(t,n,a,s){var d=s.children,m=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(m=m!==null?m.baseLanes|a:a,t!==null){for(s=n.child=t.child,d=0;s!==null;)d=d|s.lanes|s.childLanes,s=s.sibling;s=d&~m}else s=0,n.child=null;return Xm(t,n,m,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,m!==null?m.cachePool:null),m!==null?jp(n,m):Uu(),qp(n);else return s=n.lanes=536870912,Xm(t,n,m!==null?m.baseLanes|a:a,a,s)}else m!==null?(vl(n,m.cachePool),jp(n,m),La(),n.memoizedState=null):(t!==null&&vl(n,null),Uu(),La());return wn(t,n,d,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xm(t,n,a,s,d){var m=Tu();return m=m===null?null:{parent:on._currentValue,pool:m},n.memoizedState={baseLanes:a,cachePool:m},t!==null&&vl(n,null),Uu(),qp(n),t!==null&&Yr(t,n,s,!0),n.childLanes=d,null}function Ol(t,n){return n=Pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Wm(t,n,a){return gr(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Ax(t,n,a){var s=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Te){if(s.mode==="hidden")return t=Ol(n,s),n.lanes=536870912,mo(null,t);if(Lu(n),(t=Ze)?(t=ig(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Rp(t),a.return=n,n.child=a,Tn=n,Ze=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return Ol(n,s)}var m=t.memoizedState;if(m!==null){var E=m.dehydrated;if(Lu(n),d)if(n.flags&256)n.flags&=-257,n=Wm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Yr(t,n,a,!1),d=(a&t.childLanes)!==0,cn||d){if(s=qe,s!==null&&(E=Lr(s,a),E!==0&&E!==m.retryLane))throw m.retryLane=E,lr(t,E),Wn(s,t,E),tf;Wl(),n=Wm(t,n,a)}else t=m.treeContext,Ze=fi(E.nextSibling),Tn=n,Te=!0,Aa=null,ci=!1,t!==null&&Up(n,t),n=Ol(n,s),n.flags|=4096;return n}return t=Zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ef(t,n,a,s,d){return dr(n),a=zu(t,n,a,s,void 0,d),s=Pu(),t!==null&&!cn?(Iu(t,n,d),ea(t,n,d)):(Te&&s&&gu(n),n.flags|=1,wn(t,n,a,d),n.child)}function jm(t,n,a,s,d,m){return dr(n),n.updateQueue=null,a=Zp(n,s,a,d),Yp(t),s=Pu(),t!==null&&!cn?(Iu(t,n,m),ea(t,n,m)):(Te&&s&&gu(n),n.flags|=1,wn(t,n,a,m),n.child)}function qm(t,n,a,s,d){if(dr(n),n.stateNode===null){var m=Xr,E=a.contextType;typeof E=="object"&&E!==null&&(m=An(E)),m=new a(s,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ju,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=s,m.state=n.memoizedState,m.refs={},wu(n),E=a.contextType,m.context=typeof E=="object"&&E!==null?An(E):Xr,m.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(Qu(n,a,E,s),m.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ju.enqueueReplaceState(m,m.state,null),co(n,s,m,d),lo(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){m=n.stateNode;var H=n.memoizedProps,Q=vr(a,H);m.props=Q;var mt=m.context,wt=a.contextType;E=Xr,typeof wt=="object"&&wt!==null&&(E=An(wt));var Ut=a.getDerivedStateFromProps;wt=typeof Ut=="function"||typeof m.getSnapshotBeforeUpdate=="function",H=n.pendingProps!==H,wt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(H||mt!==E)&&Lm(n,m,s,E),Ca=!1;var _t=n.memoizedState;m.state=_t,co(n,s,m,d),lo(),mt=n.memoizedState,H||_t!==mt||Ca?(typeof Ut=="function"&&(Qu(n,a,Ut,s),mt=n.memoizedState),(Q=Ca||Nm(n,a,Q,s,_t,mt,E))?(wt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=mt),m.props=s,m.state=mt,m.context=E,s=Q):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{m=n.stateNode,Ru(t,n),E=n.memoizedProps,wt=vr(a,E),m.props=wt,Ut=n.pendingProps,_t=m.context,mt=a.contextType,Q=Xr,typeof mt=="object"&&mt!==null&&(Q=An(mt)),H=a.getDerivedStateFromProps,(mt=typeof H=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Ut||_t!==Q)&&Lm(n,m,s,Q),Ca=!1,_t=n.memoizedState,m.state=_t,co(n,s,m,d),lo();var Mt=n.memoizedState;E!==Ut||_t!==Mt||Ca||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof H=="function"&&(Qu(n,a,H,s),Mt=n.memoizedState),(wt=Ca||Nm(n,a,wt,s,_t,Mt,Q)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(mt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,Mt,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,Mt,Q)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&_t===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&_t===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=Mt),m.props=s,m.state=Mt,m.context=Q,s=wt):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&_t===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&_t===t.memoizedState||(n.flags|=1024),s=!1)}return m=s,zl(t,n),s=(n.flags&128)!==0,m||s?(m=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,t!==null&&s?(n.child=gr(n,t.child,null,d),n.child=gr(n,null,a,d)):wn(t,n,a,d),n.memoizedState=m.state,t=n.child):t=ea(t,n,d),t}function Ym(t,n,a,s){return ur(),n.flags|=256,wn(t,n,a,s),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(t){return{baseLanes:t,cachePool:Ip()}}function rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function Zm(t,n,a){var s=n.pendingProps,d=!1,m=(n.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),E&&(d=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(d?Na(n):La(),(t=Ze)?(t=ig(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Rp(t),a.return=n,n.child=a,Tn=n,Ze=null)):t=null,t===null)throw wa(n);return kf(t)?n.lanes=32:n.lanes=536870912,null}var H=s.children;return s=s.fallback,d?(La(),d=n.mode,H=Pl({mode:"hidden",children:H},d),s=cr(s,d,a,null),H.return=n,s.return=n,H.sibling=s,n.child=H,s=n.child,s.memoizedState=af(a),s.childLanes=rf(t,E,a),n.memoizedState=nf,mo(null,s)):(Na(n),sf(n,H))}var Q=t.memoizedState;if(Q!==null&&(H=Q.dehydrated,H!==null)){if(m)n.flags&256?(Na(n),n.flags&=-257,n=of(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),H=s.fallback,d=n.mode,s=Pl({mode:"visible",children:s.children},d),H=cr(H,d,a,null),H.flags|=2,s.return=n,H.return=n,s.sibling=H,n.child=s,gr(n,t.child,null,a),s=n.child,s.memoizedState=af(a),s.childLanes=rf(t,E,a),n.memoizedState=nf,n=mo(null,s));else if(Na(n),kf(H)){if(E=H.nextSibling&&H.nextSibling.dataset,E)var mt=E.dgst;E=mt,s=Error(r(419)),s.stack="",s.digest=E,no({value:s,source:null,stack:null}),n=of(t,n,a)}else if(cn||Yr(t,n,a,!1),E=(a&t.childLanes)!==0,cn||E){if(E=qe,E!==null&&(s=Lr(E,a),s!==0&&s!==Q.retryLane))throw Q.retryLane=s,lr(t,s),Wn(E,t,s),tf;Hf(H)||Wl(),n=of(t,n,a)}else Hf(H)?(n.flags|=192,n.child=t.child,n=null):(t=Q.treeContext,Ze=fi(H.nextSibling),Tn=n,Te=!0,Aa=null,ci=!1,t!==null&&Up(n,t),n=sf(n,s.children),n.flags|=4096);return n}return d?(La(),H=s.fallback,d=n.mode,Q=t.child,mt=Q.sibling,s=Zi(Q,{mode:"hidden",children:s.children}),s.subtreeFlags=Q.subtreeFlags&65011712,mt!==null?H=Zi(mt,H):(H=cr(H,d,a,null),H.flags|=2),H.return=n,s.return=n,s.sibling=H,n.child=s,mo(null,s),s=n.child,H=t.child.memoizedState,H===null?H=af(a):(d=H.cachePool,d!==null?(Q=on._currentValue,d=d.parent!==Q?{parent:Q,pool:Q}:d):d=Ip(),H={baseLanes:H.baseLanes|a,cachePool:d}),s.memoizedState=H,s.childLanes=rf(t,E,a),n.memoizedState=nf,mo(t.child,s)):(Na(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function sf(t,n){return n=Pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function of(t,n,a){return gr(n,t.child,null,a),t=sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Km(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Su(t.return,n,a)}function lf(t,n,a,s,d,m){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:d,treeForkCount:m}:(E.isBackwards=n,E.rendering=null,E.renderingStartTime=0,E.last=s,E.tail=a,E.tailMode=d,E.treeForkCount=m)}function Qm(t,n,a){var s=n.pendingProps,d=s.revealOrder,m=s.tail;s=s.children;var E=en.current,H=(E&2)!==0;if(H?(E=E&1|2,n.flags|=128):E&=1,ct(en,E),wn(t,n,s,a),s=Te?eo:0,!H&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,a,n);else if(t.tag===19)Km(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(a=n.child,d=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=n.child,n.child=null):(d=a.sibling,a.sibling=null),lf(n,!1,d,a,m,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&El(t)===null){n.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}lf(n,!0,a,null,m,s);break;case"together":lf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function wx(t,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),Ra(n,on,t.memoizedState.cache),ur();break;case 27:case 5:Bt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(t,n,a):(Na(n),t=ea(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var d=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Yr(t,n,a,!1),s=(a&n.childLanes)!==0),d){if(s)return Qm(t,n,a);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ct(en,en.current),s)break;return null;case 22:return n.lanes=0,Vm(t,n,a,n.pendingProps);case 24:Ra(n,on,t.memoizedState.cache)}return ea(t,n,a)}function Jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!cf(t,a)&&(n.flags&128)===0)return cn=!1,wx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Te&&(n.flags&1048576)!==0&&Dp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")hu(t)?(s=vr(t,s),n.tag=1,n=qm(null,n,t,s,a)):(n.tag=0,n=ef(null,n,t,s,a));else{if(t!=null){var d=t.$$typeof;if(d===N){n.tag=11,n=Hm(null,n,t,s,a);break t}else if(d===O){n.tag=14,n=km(null,n,t,s,a);break t}}throw n=T(t)||t,Error(r(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,d=vr(s,n.pendingProps),qm(t,n,s,d,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var m=n.memoizedState;d=m.element,Ru(t,n),co(n,s,null,a);var E=n.memoizedState;if(s=E.cache,Ra(n,on,s),s!==m.cache&&bu(n,[on],a,!0),lo(),s=E.element,m.isDehydrated)if(m={element:s,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){n=Ym(t,n,s,a);break t}else if(s!==d){d=si(Error(r(424)),n),no(d),n=Ym(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=fi(t.firstChild),Tn=n,Te=!0,Aa=null,ci=!0,a=Vp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ur(),s===d){n=ea(t,n,a);break t}wn(t,n,s,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=Jl(rt.current).createElement(a),s[sn]=n,s[xn]=t,Rn(s,a,t),k(s),n.stateNode=s):n.memoizedState=cg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Bt(n),t===null&&Te&&(s=n.stateNode=sg(n.type,n.pendingProps,rt.current),Tn=n,ci=!0,d=Ze,ka(n.type)?(Gf=d,Ze=fi(s.firstChild)):Ze=d),wn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((d=s=Ze)&&(s=iy(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,Tn=n,Ze=fi(s.firstChild),ci=!1,d=!0):d=!1),d||wa(n)),Bt(n),d=n.type,m=n.pendingProps,E=t!==null?t.memoizedProps:null,s=m.children,If(d,m)?s=null:E!==null&&If(d,E)&&(n.flags|=32),n.memoizedState!==null&&(d=zu(t,n,vx,null,null,a),Do._currentValue=d),zl(t,n),wn(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=Ze)&&(a=ay(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Ze=null,t=!0):t=!1),t||wa(n)),null;case 13:return Zm(t,n,a);case 4:return Nt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=gr(n,null,s,a):wn(t,n,s,a),n.child;case 11:return Hm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ra(n,n.type,s.value),wn(t,n,s.children,a),n.child;case 9:return d=n.type._context,s=n.pendingProps.children,dr(n),d=An(d),s=s(d),n.flags|=1,wn(t,n,s,a),n.child;case 14:return km(t,n,n.type,n.pendingProps,a);case 15:return Gm(t,n,n.type,n.pendingProps,a);case 19:return Qm(t,n,a);case 31:return Ax(t,n,a);case 22:return Vm(t,n,a,n.pendingProps);case 24:return dr(n),s=An(on),t===null?(d=Tu(),d===null&&(d=qe,m=Mu(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),n.memoizedState={parent:s,cache:d},wu(n),Ra(n,on,d)):((t.lanes&a)!==0&&(Ru(t,n),co(n,null,null,a),lo()),d=t.memoizedState,m=n.memoizedState,d.parent!==s?(d={parent:s,cache:s},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),Ra(n,on,s)):(s=m.cache,Ra(n,on,s),s!==d.cache&&bu(n,[on],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(t){t.flags|=4}function uf(t,n,a,s,d){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(T0())t.flags|=8192;else throw mr=yl,Au}else t.flags&=-16777217}function $m(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pg(n))if(T0())t.flags|=8192;else throw mr=yl,Au}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,ss|=n)}function go(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Rx(t,n,a){var s=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ji(on),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xu())),Ke(n),null;case 26:var d=n.type,m=n.memoizedState;return t===null?(na(n),m!==null?(Ke(n),$m(n,m)):(Ke(n),uf(n,d,null,s,a))):m?m!==t.memoizedState?(na(n),Ke(n),$m(n,m)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&na(n),Ke(n),uf(n,d,t,s,a)),null;case 27:if(ie(n),a=rt.current,d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=dt.current,qr(n)?Np(n):(t=sg(d,s,a),n.stateNode=t,na(n))}return Ke(n),null;case 5:if(ie(n),d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(m=dt.current,qr(n))Np(n);else{var E=Jl(rt.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof s.is=="string"?E.createElement("select",{is:s.is}):E.createElement("select"),s.multiple?m.multiple=!0:s.size&&(m.size=s.size);break;default:m=typeof s.is=="string"?E.createElement(d,{is:s.is}):E.createElement(d)}}m[sn]=n,m[xn]=s;t:for(E=n.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===n)break t;for(;E.sibling===null;){if(E.return===null||E.return===n)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}n.stateNode=m;t:switch(Rn(m,d,s),d){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&na(n)}}return Ke(n),uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=rt.current,qr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,d=Tn,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Z0(t.nodeValue,a)),t||wa(n,!0)}else t=Jl(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=qr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=qr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!d)throw Error(r(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[sn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),d=!1}else d=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool),m=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(m=s.memoizedState.cachePool.pool),m!==d&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Ke(n),null);case 4:return Pt(),t===null&&Nf(n.stateNode.containerInfo),Ke(n),null;case 10:return Ji(n.type),Ke(n),null;case 19:if(X(en),s=n.memoizedState,s===null)return Ke(n),null;if(d=(n.flags&128)!==0,m=s.rendering,m===null)if(d)go(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(m=El(t),m!==null){for(n.flags|=128,go(s,!1),t=m.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wp(a,t),a=a.sibling;return ct(en,en.current&1|2),Te&&Ki(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&w()>Gl&&(n.flags|=128,d=!0,go(s,!1),n.lanes=4194304)}else{if(!d)if(t=El(m),t!==null){if(n.flags|=128,d=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!m.alternate&&!Te)return Ke(n),null}else 2*w()-s.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,d=!0,go(s,!1),n.lanes=4194304);s.isBackwards?(m.sibling=n.child,n.child=m):(t=s.last,t!==null?t.sibling=m:n.child=m,s.last=m)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=w(),t.sibling=null,a=en.current,ct(en,d?a&1|2:a&1),Te&&Ki(n,s.treeForkCount),t):(Ke(n),null);case 22:case 23:return Kn(n),Nu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&X(hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Cx(t,n){switch(_u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(on),Pt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ie(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(en),null;case 4:return Pt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Kn(n),Nu(),t!==null&&X(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(on),null;case 25:return null;default:return null}}function t0(t,n){switch(_u(n),n.tag){case 3:Ji(on),Pt();break;case 26:case 27:case 5:ie(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:X(en);break;case 10:Ji(n.type);break;case 22:case 23:Kn(n),Nu(),t!==null&&X(hr);break;case 24:Ji(on)}}function _o(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var d=s.next;a=d;do{if((a.tag&t)===t){s=void 0;var m=a.create,E=a.inst;s=m(),E.destroy=s}a=a.next}while(a!==d)}}catch(H){He(n,n.return,H)}}function Oa(t,n,a){try{var s=n.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var m=d.next;s=m;do{if((s.tag&t)===t){var E=s.inst,H=E.destroy;if(H!==void 0){E.destroy=void 0,d=n;var Q=a,mt=H;try{mt()}catch(wt){He(d,Q,wt)}}}s=s.next}while(s!==m)}}catch(wt){He(n,n.return,wt)}}function e0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Wp(n,a)}catch(s){He(t,t.return,s)}}}function n0(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(d){He(t,n,d)}}function Ni(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(d){He(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){He(t,n,d)}else a.current=null}function i0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(d){He(t,t.return,d)}}function ff(t,n,a){try{var s=t.stateNode;Qx(s,t.type,a,n),s[xn]=n}catch(d){He(t,t.return,d)}}function a0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function df(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||a0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(s!==4&&(s===27&&ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Fl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function r0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Rn(n,s,a),n[sn]=t,n[xn]=a}catch(m){He(t,t.return,m)}}var ia=!1,un=!1,pf=!1,s0=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Dx(t,n){if(t=t.containerInfo,zf=rc,t=vp(t),su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var d=s.anchorOffset,m=s.focusNode;s=s.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break t}var E=0,H=-1,Q=-1,mt=0,wt=0,Ut=t,_t=null;e:for(;;){for(var Mt;Ut!==a||d!==0&&Ut.nodeType!==3||(H=E+d),Ut!==m||s!==0&&Ut.nodeType!==3||(Q=E+s),Ut.nodeType===3&&(E+=Ut.nodeValue.length),(Mt=Ut.firstChild)!==null;)_t=Ut,Ut=Mt;for(;;){if(Ut===t)break e;if(_t===a&&++mt===d&&(H=E),_t===m&&++wt===s&&(Q=E),(Mt=Ut.nextSibling)!==null)break;Ut=_t,_t=Ut.parentNode}Ut=Mt}a=H===-1||Q===-1?null:{start:H,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:t,selectionRange:a},rc=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,m=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)d=t[a],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,a=n,d=m.memoizedProps,m=m.memoizedState,s=a.stateNode;try{var $t=vr(a.type,d);t=s.getSnapshotBeforeUpdate($t,m),s.__reactInternalSnapshotBeforeUpdate=t}catch(ce){He(a,a.return,ce)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function o0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),s&4&&_o(5,a);break;case 1:if(ra(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){He(a,a.return,E)}else{var d=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){He(a,a.return,E)}}s&64&&e0(a),s&512&&vo(a,a.return);break;case 3:if(ra(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wp(t,n)}catch(E){He(a,a.return,E)}}break;case 27:n===null&&s&4&&r0(a);case 26:case 5:ra(t,a),n===null&&s&4&&i0(a),s&512&&vo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),s&4&&u0(t,a);break;case 13:ra(t,a),s&4&&f0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Bx.bind(null,a),ry(t,a))));break;case 22:if(s=a.memoizedState!==null||ia,!s){n=n!==null&&n.memoizedState!==null||un,d=ia;var m=un;ia=s,(un=n)&&!m?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=d,un=m}break;case 30:break;default:ra(t,a)}}function l0(t){var n=t.alternate;n!==null&&(t.alternate=null,l0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function aa(t,n,a){for(a=a.child;a!==null;)c0(t,n,a),a=a.sibling}function c0(t,n,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:un||Ni(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ni(a,n);var s=Je,d=kn;ka(a.type)&&(Je=a.stateNode,kn=!1),aa(t,n,a),wo(a.stateNode),Je=s,kn=d;break;case 5:un||Ni(a,n);case 6:if(s=Je,d=kn,Je=null,aa(t,n,a),Je=s,kn=d,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(m){He(a,n,m)}else try{Je.removeChild(a.stateNode)}catch(m){He(a,n,m)}break;case 18:Je!==null&&(kn?(t=Je,eg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):eg(Je,a.stateNode));break;case 4:s=Je,d=kn,Je=a.stateNode.containerInfo,kn=!0,aa(t,n,a),Je=s,kn=d;break;case 0:case 11:case 14:case 15:Oa(2,a,n),un||Oa(4,a,n),aa(t,n,a);break;case 1:un||(Ni(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&n0(a,n,s)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,aa(t,n,a),un=s;break;default:aa(t,n,a)}}function u0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){He(n,n.return,a)}}}function f0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){He(n,n.return,a)}}function Ux(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new s0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new s0),n;default:throw Error(r(435,t.tag))}}function Bl(t,n){var a=Ux(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var d=Hx.bind(null,t,s);s.then(d,d)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var d=a[s],m=t,E=n,H=E;t:for(;H!==null;){switch(H.tag){case 27:if(ka(H.type)){Je=H.stateNode,kn=!1;break t}break;case 5:Je=H.stateNode,kn=!1;break t;case 3:case 4:Je=H.stateNode.containerInfo,kn=!0;break t}H=H.return}if(Je===null)throw Error(r(160));c0(m,E,d),Je=null,kn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d0(n,t),n=n.sibling}var bi=null;function d0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),s&4&&(Oa(3,t,t.return),_o(3,t),Oa(5,t,t.return));break;case 1:Gn(n,t),Vn(t),s&512&&(un||a===null||Ni(a,a.return)),s&64&&ia&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var d=bi;if(Gn(n,t),Vn(t),s&512&&(un||a===null||Ni(a,a.return)),s&4){var m=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,d=d.ownerDocument||d;e:switch(s){case"title":m=d.getElementsByTagName("title")[0],(!m||m[ir]||m[sn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(s),d.head.insertBefore(m,d.querySelector("head > title"))),Rn(m,s,a),m[sn]=t,k(m),s=m;break t;case"link":var E=dg("link","href",d).get(s+(a.href||""));if(E){for(var H=0;H<E.length;H++)if(m=E[H],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(H,1);break e}}m=d.createElement(s),Rn(m,s,a),d.head.appendChild(m);break;case"meta":if(E=dg("meta","content",d).get(s+(a.content||""))){for(H=0;H<E.length;H++)if(m=E[H],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(H,1);break e}}m=d.createElement(s),Rn(m,s,a),d.head.appendChild(m);break;default:throw Error(r(468,s))}m[sn]=t,k(m),s=m}t.stateNode=s}else hg(d,t.type,t.stateNode);else t.stateNode=fg(d,s,t.memoizedProps);else m!==s?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,s===null?hg(d,t.type,t.stateNode):fg(d,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),s&512&&(un||a===null||Ni(a,a.return)),a!==null&&s&4&&ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),s&512&&(un||a===null||Ni(a,a.return)),t.flags&32){d=t.stateNode;try{dn(d,"")}catch($t){He(t,t.return,$t)}}s&4&&t.stateNode!=null&&(d=t.memoizedProps,ff(t,d,a!==null?a.memoizedProps:d)),s&1024&&(pf=!0);break;case 6:if(Gn(n,t),Vn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch($t){He(t,t.return,$t)}}break;case 3:if(ec=null,d=bi,bi=$l(n.containerInfo),Gn(n,t),bi=d,Vn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch($t){He(t,t.return,$t)}pf&&(pf=!1,h0(t));break;case 4:s=bi,bi=$l(t.stateNode.containerInfo),Gn(n,t),Vn(t),bi=s;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Bl(t,s)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=w()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Bl(t,s)));break;case 22:d=t.memoizedState!==null;var Q=a!==null&&a.memoizedState!==null,mt=ia,wt=un;if(ia=mt||d,un=wt||Q,Gn(n,t),un=wt,ia=mt,Vn(t),s&8192)t:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(a===null||Q||ia||un||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Q=a=n;try{if(m=Q.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{H=Q.stateNode;var Ut=Q.memoizedProps.style,_t=Ut!=null&&Ut.hasOwnProperty("display")?Ut.display:null;H.style.display=_t==null||typeof _t=="boolean"?"":(""+_t).trim()}}catch($t){He(Q,Q.return,$t)}}}else if(n.tag===6){if(a===null){Q=n;try{Q.stateNode.nodeValue=d?"":Q.memoizedProps}catch($t){He(Q,Q.return,$t)}}}else if(n.tag===18){if(a===null){Q=n;try{var Mt=Q.stateNode;d?ng(Mt,!0):ng(Q.stateNode,!1)}catch($t){He(Q,Q.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Bl(t,a))));break;case 19:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Bl(t,s)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(a0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var d=a.stateNode,m=df(t);Fl(t,m,d);break;case 5:var E=a.stateNode;a.flags&32&&(dn(E,""),a.flags&=-33);var H=df(t);Fl(t,H,E);break;case 3:case 4:var Q=a.stateNode.containerInfo,mt=df(t);hf(t,mt,Q);break;default:throw Error(r(161))}}catch(wt){He(t,t.return,wt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function h0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;h0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)o0(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),xr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&n0(n,n.return,a),xr(n);break;case 27:wo(n.stateNode);case 26:case 5:Ni(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,d=t,m=n,E=m.flags;switch(m.tag){case 0:case 11:case 15:sa(d,m,a),_o(4,m);break;case 1:if(sa(d,m,a),s=m,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(mt){He(s,s.return,mt)}if(s=m,d=s.updateQueue,d!==null){var H=s.stateNode;try{var Q=d.shared.hiddenCallbacks;if(Q!==null)for(d.shared.hiddenCallbacks=null,d=0;d<Q.length;d++)Xp(Q[d],H)}catch(mt){He(s,s.return,mt)}}a&&E&64&&e0(m),vo(m,m.return);break;case 27:r0(m);case 26:case 5:sa(d,m,a),a&&s===null&&E&4&&i0(m),vo(m,m.return);break;case 12:sa(d,m,a);break;case 31:sa(d,m,a),a&&E&4&&u0(d,m);break;case 13:sa(d,m,a),a&&E&4&&f0(d,m);break;case 22:m.memoizedState===null&&sa(d,m,a),vo(m,m.return);break;case 30:break;default:sa(d,m,a)}n=n.sibling}}function mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)p0(t,n,a,s),n=n.sibling}function p0(t,n,a,s){var d=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),d&2048&&_o(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(d&2048){Mi(t,n,a,s),t=n.stateNode;try{var m=n.memoizedProps,E=m.id,H=m.onPostCommit;typeof H=="function"&&H(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Q){He(n,n.return,Q)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?m._visibility&2?Mi(t,n,a,s):xo(t,n):m._visibility&2?Mi(t,n,a,s):(m._visibility|=2,is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),d&2048&&mf(E,n);break;case 24:Mi(t,n,a,s),d&2048&&gf(n.alternate,n);break;default:Mi(t,n,a,s)}}function is(t,n,a,s,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var m=t,E=n,H=a,Q=s,mt=E.flags;switch(E.tag){case 0:case 11:case 15:is(m,E,H,Q,d),_o(8,E);break;case 23:break;case 22:var wt=E.stateNode;E.memoizedState!==null?wt._visibility&2?is(m,E,H,Q,d):xo(m,E):(wt._visibility|=2,is(m,E,H,Q,d)),d&&mt&2048&&mf(E.alternate,E);break;case 24:is(m,E,H,Q,d),d&&mt&2048&&gf(E.alternate,E);break;default:is(m,E,H,Q,d)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,d=s.flags;switch(s.tag){case 22:xo(a,s),d&2048&&mf(s.alternate,s);break;case 24:xo(a,s),d&2048&&gf(s.alternate,s);break;default:xo(a,s)}n=n.sibling}}var yo=8192;function as(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)m0(t,n,a),t=t.sibling}function m0(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&yo&&t.memoizedState!==null&&_y(a,bi,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var s=bi;bi=$l(t.stateNode.containerInfo),as(t,n,a),bi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=yo,yo=16777216,as(t,n,a),yo=s):as(t,n,a));break;default:as(t,n,a)}}function g0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,v0(s,t)}g0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_0(t),t=t.sibling}function _0(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):So(t);break;default:So(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,v0(s,t)}g0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function v0(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:io(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var d=s.sibling,m=s.return;if(l0(s),s===a){gn=null;break t}if(d!==null){d.return=m,gn=d;break t}gn=m}}}var Nx={getCacheForType:function(t){var n=An(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(on).controller.signal}},Lx=typeof WeakMap=="function"?WeakMap:Map,ze=0,qe=null,ye=null,be=0,Be=0,Qn=null,za=!1,rs=!1,_f=!1,oa=0,tn=0,Pa=0,yr=0,vf=0,Jn=0,ss=0,bo=null,Xn=null,xf=!1,kl=0,x0=0,Gl=1/0,Vl=null,Ia=null,hn=0,Fa=null,os=null,la=0,yf=0,Sf=null,y0=null,Mo=0,bf=null;function $n(){return(ze&2)!==0&&be!==0?be&-be:V.T!==null?Rf():Vs()}function S0(){if(Jn===0)if((be&536870912)===0||Te){var t=It;It<<=1,(It&3932160)===0&&(It=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Wn(t,n,a){(t===qe&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ba(t,be,Jn,!1)),Un(t,a),((ze&2)===0||t!==qe)&&(t===qe&&((ze&2)===0&&(yr|=a),tn===4&&Ba(t,be,Jn,!1)),Li(t))}function b0(t,n,a){if((ze&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ht(t,n),d=s?Px(t,n):Ef(t,n,!0),m=s;do{if(d===0){rs&&!s&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,m&&!Ox(a)){d=Ef(t,n,!1),m=!1;continue}if(d===2){if(m=n,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;t:{var H=t;d=bo;var Q=H.current.memoizedState.isDehydrated;if(Q&&(ls(H,E).flags|=256),E=Ef(H,E,!1),E!==2){if(_f&&!Q){H.errorRecoveryDisabledLanes|=m,yr|=m,d=4;break t}m=Xn,Xn=d,m!==null&&(Xn===null?Xn=m:Xn.push.apply(Xn,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){ls(t,0),Ba(t,n,0,!0);break}t:{switch(s=t,m=d,m){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ba(s,n,Jn,!za);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(d=kl+300-w(),10<d)){if(Ba(s,n,Jn,!za),Lt(s,0,!0)!==0)break t;la=n,s.timeoutHandle=$0(M0.bind(null,s,a,Xn,Vl,xf,n,Jn,yr,ss,za,m,"Throttled",-0,0),d);break t}M0(s,a,Xn,Vl,xf,n,Jn,yr,ss,za,m,null,-0,0)}}break}while(!0);Li(t)}function M0(t,n,a,s,d,m,E,H,Q,mt,wt,Ut,_t,Mt){if(t.timeoutHandle=-1,Ut=n.subtreeFlags,Ut&8192||(Ut&16785408)===16785408){Ut={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},m0(n,m,Ut);var $t=(m&62914560)===m?kl-w():(m&4194048)===m?x0-w():0;if($t=vy(Ut,$t),$t!==null){la=m,t.cancelPendingCommit=$t(U0.bind(null,t,n,m,a,s,d,E,H,Q,wt,Ut,null,_t,Mt)),Ba(t,m,E,!mt);return}}U0(t,n,m,a,s,d,E,H,Q)}function Ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var d=a[s],m=d.getSnapshot;d=d.value;try{if(!qn(m(),d))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,s){n&=~vf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var d=n;0<d;){var m=31-kt(d),E=1<<m;s[m]=-1,d&=~E}a!==0&&el(t,a,n)}function Xl(){return(ze&6)===0?(Eo(0),!1):!0}function Mf(){if(ye!==null){if(Be===0)var t=ye.return;else t=ye,Qi=fr=null,Fu(t),Jr=null,ro=0,t=ye;for(;t!==null;)t0(t.alternate,t),t=t.return;ye=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ty(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Mf(),qe=t,ye=a=Zi(t.current,null),be=n,Be=0,Qn=null,za=!1,rs=Ht(t,n),_f=!1,ss=Jn=vf=yr=Pa=tn=0,Xn=bo=null,xf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var d=31-kt(s),m=1<<d;n|=t[d],s&=~m}return oa=n,fl(),a}function E0(t,n){ge=null,V.H=po,n===Qr||n===xl?(n=Hp(),Be=3):n===Au?(n=Hp(),Be=4):Be=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ye===null&&(tn=1,Ll(t,si(n,t.current)))}function T0(){var t=Zn.current;return t===null?!0:(be&4194048)===be?ui===null:(be&62914560)===be||(be&536870912)!==0?t===ui:!1}function A0(){var t=V.H;return V.H=po,t===null?po:t}function w0(){var t=V.A;return V.A=Nx,t}function Wl(){tn=4,za||(be&4194048)!==be&&Zn.current!==null||(rs=!0),(Pa&134217727)===0&&(yr&134217727)===0||qe===null||Ba(qe,be,Jn,!1)}function Ef(t,n,a){var s=ze;ze|=2;var d=A0(),m=w0();(qe!==t||be!==n)&&(Vl=null,ls(t,n)),n=!1;var E=tn;t:do try{if(Be!==0&&ye!==null){var H=ye,Q=Qn;switch(Be){case 8:Mf(),E=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var mt=Be;if(Be=0,Qn=null,cs(t,H,Q,mt),a&&rs){E=0;break t}break;default:mt=Be,Be=0,Qn=null,cs(t,H,Q,mt)}}zx(),E=tn;break}catch(wt){E0(t,wt)}while(!0);return n&&t.shellSuspendCounter++,Qi=fr=null,ze=s,V.H=d,V.A=m,ye===null&&(qe=null,be=0,fl()),E}function zx(){for(;ye!==null;)R0(ye)}function Px(t,n){var a=ze;ze|=2;var s=A0(),d=w0();qe!==t||be!==n?(Vl=null,Gl=w()+500,ls(t,n)):rs=Ht(t,n);t:do try{if(Be!==0&&ye!==null){n=ye;var m=Qn;e:switch(Be){case 1:Be=0,Qn=null,cs(t,n,m,1);break;case 2:case 9:if(Fp(m)){Be=0,Qn=null,C0(n);break}n=function(){Be!==2&&Be!==9||qe!==t||(Be=7),Li(t)},m.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Fp(m)?(Be=0,Qn=null,C0(n)):(Be=0,Qn=null,cs(t,n,m,7));break;case 5:var E=null;switch(ye.tag){case 26:E=ye.memoizedState;case 5:case 27:var H=ye;if(E?pg(E):H.stateNode.complete){Be=0,Qn=null;var Q=H.sibling;if(Q!==null)ye=Q;else{var mt=H.return;mt!==null?(ye=mt,jl(mt)):ye=null}break e}}Be=0,Qn=null,cs(t,n,m,5);break;case 6:Be=0,Qn=null,cs(t,n,m,6);break;case 8:Mf(),tn=6;break t;default:throw Error(r(462))}}Ix();break}catch(wt){E0(t,wt)}while(!0);return Qi=fr=null,V.H=s,V.A=d,ze=a,ye!==null?0:(qe=null,be=0,fl(),tn)}function Ix(){for(;ye!==null&&!$();)R0(ye)}function R0(t){var n=Jm(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?jl(t):ye=n}function C0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Fu(n);default:t0(a,n),n=ye=wp(n,oa),n=Jm(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?jl(t):ye=n}function cs(t,n,a,s){Qi=fr=null,Fu(n),Jr=null,ro=0;var d=n.return;try{if(Tx(t,d,n,a,be)){tn=1,Ll(t,si(a,t.current)),ye=null;return}}catch(m){if(d!==null)throw ye=d,m;tn=1,Ll(t,si(a,t.current)),ye=null;return}n.flags&32768?(Te||s===1?t=!0:rs||(be&536870912)!==0?t=!1:(za=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),D0(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){D0(n,za);return}t=n.return;var a=Rx(n.alternate,n,oa);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);tn===0&&(tn=5)}function D0(t,n){do{var a=Cx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);tn=6,ye=null}function U0(t,n,a,s,d,m,E,H,Q){t.cancelPendingCommit=null;do ql();while(hn!==0);if((ze&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(m=n.lanes|n.childLanes,m|=fu,vi(t,a,m,E,H,Q),t===qe&&(ye=qe=null,be=0),os=n,Fa=t,la=a,yf=m,Sf=d,y0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kx(ut,function(){return P0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=V.T,V.T=null,d=G.p,G.p=2,E=ze,ze|=4;try{Dx(t,n,a)}finally{ze=E,G.p=d,V.T=s}}hn=1,N0(),L0(),O0()}}function N0(){if(hn===1){hn=0;var t=Fa,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=V.T,V.T=null;var s=G.p;G.p=2;var d=ze;ze|=4;try{d0(n,t);var m=Pf,E=vp(t.containerInfo),H=m.focusedElem,Q=m.selectionRange;if(E!==H&&H&&H.ownerDocument&&_p(H.ownerDocument.documentElement,H)){if(Q!==null&&su(H)){var mt=Q.start,wt=Q.end;if(wt===void 0&&(wt=mt),"selectionStart"in H)H.selectionStart=mt,H.selectionEnd=Math.min(wt,H.value.length);else{var Ut=H.ownerDocument||document,_t=Ut&&Ut.defaultView||window;if(_t.getSelection){var Mt=_t.getSelection(),$t=H.textContent.length,ce=Math.min(Q.start,$t),We=Q.end===void 0?ce:Math.min(Q.end,$t);!Mt.extend&&ce>We&&(E=We,We=ce,ce=E);var st=gp(H,ce),tt=gp(H,We);if(st&&tt&&(Mt.rangeCount!==1||Mt.anchorNode!==st.node||Mt.anchorOffset!==st.offset||Mt.focusNode!==tt.node||Mt.focusOffset!==tt.offset)){var pt=Ut.createRange();pt.setStart(st.node,st.offset),Mt.removeAllRanges(),ce>We?(Mt.addRange(pt),Mt.extend(tt.node,tt.offset)):(pt.setEnd(tt.node,tt.offset),Mt.addRange(pt))}}}}for(Ut=[],Mt=H;Mt=Mt.parentNode;)Mt.nodeType===1&&Ut.push({element:Mt,left:Mt.scrollLeft,top:Mt.scrollTop});for(typeof H.focus=="function"&&H.focus(),H=0;H<Ut.length;H++){var Dt=Ut[H];Dt.element.scrollLeft=Dt.left,Dt.element.scrollTop=Dt.top}}rc=!!zf,Pf=zf=null}finally{ze=d,G.p=s,V.T=a}}t.current=n,hn=2}}function L0(){if(hn===2){hn=0;var t=Fa,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=V.T,V.T=null;var s=G.p;G.p=2;var d=ze;ze|=4;try{o0(t,n.alternate,n)}finally{ze=d,G.p=s,V.T=a}}hn=3}}function O0(){if(hn===4||hn===3){hn=0,B();var t=Fa,n=os,a=la,s=y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,os=Fa=null,z0(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ia=null),Or(a),n=n.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=V.T,d=G.p,G.p=2,V.T=null;try{for(var m=t.onRecoverableError,E=0;E<s.length;E++){var H=s[E];m(H.value,{componentStack:H.stack})}}finally{V.T=n,G.p=d}}(la&3)!==0&&ql(),Li(t),d=t.pendingLanes,(a&261930)!==0&&(d&42)!==0?t===bf?Mo++:(Mo=0,bf=t):Mo=0,Eo(0)}}function z0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function ql(){return N0(),L0(),O0(),P0()}function P0(){if(hn!==5)return!1;var t=Fa,n=yf;yf=0;var a=Or(la),s=V.T,d=G.p;try{G.p=32>a?32:a,V.T=null,a=Sf,Sf=null;var m=Fa,E=la;if(hn=0,os=Fa=null,la=0,(ze&6)!==0)throw Error(r(331));var H=ze;if(ze|=4,_0(m.current),p0(m,m.current,E,a),ze=H,Eo(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Ct,m)}catch{}return!0}finally{G.p=d,V.T=s,z0(t,n)}}function I0(t,n,a){n=si(a,n),n=$u(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Un(t,2),Li(t))}function He(t,n,a){if(t.tag===3)I0(t,t,a);else for(;n!==null;){if(n.tag===3){I0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ia===null||!Ia.has(s))){t=si(a,t),a=Fm(2),s=Ua(n,a,2),s!==null&&(Bm(a,s,n,t),Un(s,2),Li(s));break}}n=n.return}}function Tf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Lx;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(a)||(_f=!0,d.add(a),t=Fx.bind(null,t,n,a),n.then(t,t))}function Fx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(be&a)===a&&(tn===4||tn===3&&(be&62914560)===be&&300>w()-kl?(ze&2)===0&&ls(t,0):vf|=a,ss===be&&(ss=0)),Li(t)}function F0(t,n){n===0&&(n=Ie()),t=lr(t,n),t!==null&&(Un(t,n),Li(t))}function Bx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),F0(t,a)}function Hx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),F0(t,a)}function kx(t,n){return Et(t,n)}var Yl=null,us=null,Af=!1,Zl=!1,wf=!1,Ha=0;function Li(t){t!==us&&t.next===null&&(us===null?Yl=us=t:us=us.next=t),Zl=!0,Af||(Af=!0,Vx())}function Eo(t,n){if(!wf&&Zl){wf=!0;do for(var a=!1,s=Yl;s!==null;){if(t!==0){var d=s.pendingLanes;if(d===0)var m=0;else{var E=s.suspendedLanes,H=s.pingedLanes;m=(1<<31-kt(42|t)+1)-1,m&=d&~(E&~H),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,G0(s,m))}else m=be,m=Lt(s,s===qe?m:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(m&3)===0||Ht(s,m)||(a=!0,G0(s,m));s=s.next}while(a);wf=!1}}function Gx(){B0()}function B0(){Zl=Af=!1;var t=0;Ha!==0&&$x()&&(t=Ha);for(var n=w(),a=null,s=Yl;s!==null;){var d=s.next,m=H0(s,n);m===0?(s.next=null,a===null?Yl=d:a.next=d,d===null&&(us=a)):(a=s,(t!==0||(m&3)!==0)&&(Zl=!0)),s=d}hn!==0&&hn!==5||Eo(t),Ha!==0&&(Ha=0)}function H0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-kt(m),H=1<<E,Q=d[E];Q===-1?((H&a)===0||(H&s)!==0)&&(d[E]=fe(H,n)):Q<=n&&(t.expiredLanes|=H),m&=~H}if(n=qe,a=be,a=Lt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&At(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ht(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&At(s),Or(a)){case 2:case 8:a=Tt;break;case 32:a=ut;break;case 268435456:a=Ft;break;default:a=ut}return s=k0.bind(null,t),a=Et(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&At(s),t.callbackPriority=2,t.callbackNode=null,2}function k0(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var s=be;return s=Lt(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(b0(t,s,n),H0(t,w()),t.callbackNode!=null&&t.callbackNode===a?k0.bind(null,t):null)}function G0(t,n){if(ql())return null;b0(t,n,!0)}function Vx(){ey(function(){(ze&6)!==0?Et(lt,Gx):B0()})}function Rf(){if(Ha===0){var t=Zr;t===0&&(t=Vt,Vt<<=1,(Vt&261888)===0&&(Vt=256)),Ha=t}return Ha}function V0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:il(""+t)}function X0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Xx(t,n,a,s,d){if(n==="submit"&&a&&a.stateNode===d){var m=V0((d[xn]||null).action),E=s.submitter;E&&(n=(n=E[xn]||null)?V0(n.formAction):E.getAttribute("formAction"),n!==null&&(m=n,E=null));var H=new ol("action","action",null,s,d);t.push({event:H,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var Q=E?X0(d,E):new FormData(d);qu(a,{pending:!0,data:Q,method:d.method,action:m},null,Q)}}else typeof m=="function"&&(H.preventDefault(),Q=E?X0(d,E):new FormData(d),qu(a,{pending:!0,data:Q,method:d.method,action:m},m,Q))},currentTarget:d}]})}}for(var Cf=0;Cf<uu.length;Cf++){var Df=uu[Cf],Wx=Df.toLowerCase(),jx=Df[0].toUpperCase()+Df.slice(1);Si(Wx,"on"+jx)}Si(Sp,"onAnimationEnd"),Si(bp,"onAnimationIteration"),Si(Mp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(lx,"onTransitionRun"),Si(cx,"onTransitionStart"),Si(ux,"onTransitionCancel"),Si(Ep,"onTransitionEnd"),ft("onMouseEnter",["mouseout","mouseover"]),ft("onMouseLeave",["mouseout","mouseover"]),ft("onPointerEnter",["pointerout","pointerover"]),ft("onPointerLeave",["pointerout","pointerover"]),gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function W0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],d=s.event;s=s.listeners;t:{var m=void 0;if(n)for(var E=s.length-1;0<=E;E--){var H=s[E],Q=H.instance,mt=H.currentTarget;if(H=H.listener,Q!==m&&d.isPropagationStopped())break t;m=H,d.currentTarget=mt;try{m(d)}catch(wt){ul(wt)}d.currentTarget=null,m=Q}else for(E=0;E<s.length;E++){if(H=s[E],Q=H.instance,mt=H.currentTarget,H=H.listener,Q!==m&&d.isPropagationStopped())break t;m=H,d.currentTarget=mt;try{m(d)}catch(wt){ul(wt)}d.currentTarget=null,m=Q}}}}function Se(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var s=t+"__bubble";a.has(s)||(j0(n,t,2,!1),a.add(s))}function Uf(t,n,a){var s=0;n&&(s|=4),j0(a,t,s,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Nf(t){if(!t[Kl]){t[Kl]=!0,at.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Uf(a,!1,t),Uf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Uf("selectionchange",!1,n))}}function j0(t,n,a,s){switch(Sg(n)){case 2:var d=Sy;break;case 8:d=by;break;default:d=qf}a=d.bind(null,n,a,t),d=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?t.addEventListener(n,a,{capture:!0,passive:d}):t.addEventListener(n,a,!0):d!==void 0?t.addEventListener(n,a,{passive:d}):t.addEventListener(n,a,!1)}function Lf(t,n,a,s,d){var m=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var E=s.tag;if(E===3||E===4){var H=s.stateNode.containerInfo;if(H===d)break;if(E===4)for(E=s.return;E!==null;){var Q=E.tag;if((Q===3||Q===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;H!==null;){if(E=Sa(H),E===null)return;if(Q=E.tag,Q===5||Q===6||Q===26||Q===27){s=m=E;continue t}H=H.parentNode}}s=s.return}Qh(function(){var mt=m,wt=Zc(a),Ut=[];t:{var _t=Tp.get(t);if(_t!==void 0){var Mt=ol,$t=t;switch(t){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":Mt=Hv;break;case"focusin":$t="focus",Mt=eu;break;case"focusout":$t="blur",Mt=eu;break;case"beforeblur":case"afterblur":Mt=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Mt=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Mt=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Mt=Vv;break;case Sp:case bp:case Mp:Mt=Uv;break;case Ep:Mt=Wv;break;case"scroll":case"scrollend":Mt=Av;break;case"wheel":Mt=qv;break;case"copy":case"cut":case"paste":Mt=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Mt=np;break;case"toggle":case"beforetoggle":Mt=Zv}var ce=(n&4)!==0,We=!ce&&(t==="scroll"||t==="scrollend"),st=ce?_t!==null?_t+"Capture":null:_t;ce=[];for(var tt=mt,pt;tt!==null;){var Dt=tt;if(pt=Dt.stateNode,Dt=Dt.tag,Dt!==5&&Dt!==26&&Dt!==27||pt===null||st===null||(Dt=js(tt,st),Dt!=null&&ce.push(Ao(tt,Dt,pt))),We)break;tt=tt.return}0<ce.length&&(_t=new Mt(_t,$t,null,a,wt),Ut.push({event:_t,listeners:ce}))}}if((n&7)===0){t:{if(_t=t==="mouseover"||t==="pointerover",Mt=t==="mouseout"||t==="pointerout",_t&&a!==Yc&&($t=a.relatedTarget||a.fromElement)&&(Sa($t)||$t[xi]))break t;if((Mt||_t)&&(_t=wt.window===wt?wt:(_t=wt.ownerDocument)?_t.defaultView||_t.parentWindow:window,Mt?($t=a.relatedTarget||a.toElement,Mt=mt,$t=$t?Sa($t):null,$t!==null&&(We=c($t),ce=$t.tag,$t!==We||ce!==5&&ce!==27&&ce!==6)&&($t=null)):(Mt=null,$t=mt),Mt!==$t)){if(ce=tp,Dt="onMouseLeave",st="onMouseEnter",tt="mouse",(t==="pointerout"||t==="pointerover")&&(ce=np,Dt="onPointerLeave",st="onPointerEnter",tt="pointer"),We=Mt==null?_t:ar(Mt),pt=$t==null?_t:ar($t),_t=new ce(Dt,tt+"leave",Mt,a,wt),_t.target=We,_t.relatedTarget=pt,Dt=null,Sa(wt)===mt&&(ce=new ce(st,tt+"enter",$t,a,wt),ce.target=pt,ce.relatedTarget=We,Dt=ce),We=Dt,Mt&&$t)e:{for(ce=Yx,st=Mt,tt=$t,pt=0,Dt=st;Dt;Dt=ce(Dt))pt++;Dt=0;for(var se=tt;se;se=ce(se))Dt++;for(;0<pt-Dt;)st=ce(st),pt--;for(;0<Dt-pt;)tt=ce(tt),Dt--;for(;pt--;){if(st===tt||tt!==null&&st===tt.alternate){ce=st;break e}st=ce(st),tt=ce(tt)}ce=null}else ce=null;Mt!==null&&q0(Ut,_t,Mt,ce,!1),$t!==null&&We!==null&&q0(Ut,We,$t,ce,!0)}}t:{if(_t=mt?ar(mt):window,Mt=_t.nodeName&&_t.nodeName.toLowerCase(),Mt==="select"||Mt==="input"&&_t.type==="file")var Ue=up;else if(lp(_t))if(fp)Ue=rx;else{Ue=ix;var ne=nx}else Mt=_t.nodeName,!Mt||Mt.toLowerCase()!=="input"||_t.type!=="checkbox"&&_t.type!=="radio"?mt&&yi(mt.elementType)&&(Ue=up):Ue=ax;if(Ue&&(Ue=Ue(t,mt))){cp(Ut,Ue,a,wt);break t}ne&&ne(t,_t,mt),t==="focusout"&&mt&&_t.type==="number"&&mt.memoizedProps.value!=null&&Sn(_t,"number",_t.value)}switch(ne=mt?ar(mt):window,t){case"focusin":(lp(ne)||ne.contentEditable==="true")&&(kr=ne,ou=mt,to=null);break;case"focusout":to=ou=kr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,xp(Ut,a,wt);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":xp(Ut,a,wt)}var _e;if(iu)t:{switch(t){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Hr?sp(t,a)&&(Me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(ip&&a.locale!=="ko"&&(Hr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Hr&&(_e=Jh()):(Ea=wt,Jc="value"in Ea?Ea.value:Ea.textContent,Hr=!0)),ne=Ql(mt,Me),0<ne.length&&(Me=new ep(Me,t,null,a,wt),Ut.push({event:Me,listeners:ne}),_e?Me.data=_e:(_e=op(a),_e!==null&&(Me.data=_e)))),(_e=Qv?Jv(t,a):$v(t,a))&&(Me=Ql(mt,"onBeforeInput"),0<Me.length&&(ne=new ep("onBeforeInput","beforeinput",null,a,wt),Ut.push({event:ne,listeners:Me}),ne.data=_e)),Xx(Ut,t,mt,a,wt)}W0(Ut,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",s=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=js(t,a),d!=null&&s.unshift(Ao(t,d,m)),d=js(t,n),d!=null&&s.push(Ao(t,d,m))),t.tag===3)return s;t=t.return}return[]}function Yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q0(t,n,a,s,d){for(var m=n._reactName,E=[];a!==null&&a!==s;){var H=a,Q=H.alternate,mt=H.stateNode;if(H=H.tag,Q!==null&&Q===s)break;H!==5&&H!==26&&H!==27||mt===null||(Q=mt,d?(mt=js(a,m),mt!=null&&E.unshift(Ao(a,mt,Q))):d||(mt=js(a,m),mt!=null&&E.push(Ao(a,mt,Q)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var Zx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Kx,"")}function Z0(t,n){return n=Y0(n),Y0(t)===n}function Xe(t,n,a,s,d,m){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||dn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&dn(t,""+s);break;case"className":oe(t,"class",s);break;case"tabIndex":oe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(t,a,s);break;case"style":Ir(t,s,m);break;case"data":if(n!=="object"){oe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=il(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",d.name,d,null),Xe(t,n,"formEncType",d.formEncType,d,null),Xe(t,n,"formMethod",d.formMethod,d,null),Xe(t,n,"formTarget",d.formTarget,d,null)):(Xe(t,n,"encType",d.encType,d,null),Xe(t,n,"method",d.method,d,null),Xe(t,n,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=il(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);break;case"onScroll":s!=null&&Se("scroll",t);break;case"onScrollEnd":s!=null&&Se("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(d.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=il(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Se("beforetoggle",t),Se("toggle",t),te(t,"popover",s);break;case"xlinkActuate":ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ee(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ee(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ee(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ee(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":te(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ev.get(a)||a,te(t,a,s))}}function Of(t,n,a,s,d,m){switch(a){case"style":Ir(t,s,m);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(d.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?dn(t,s):(typeof s=="number"||typeof s=="bigint")&&dn(t,""+s);break;case"onScroll":s!=null&&Se("scroll",t);break;case"onScrollEnd":s!=null&&Se("scrollend",t);break;case"onClick":s!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),n=a.slice(2,d?a.length-7:void 0),m=t[xn]||null,m=m!=null?m[a]:null,typeof m=="function"&&t.removeEventListener(n,m,d),typeof s=="function")){typeof m!="function"&&m!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,d);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):te(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var s=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var E=a[m];if(E!=null)switch(m){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,m,E,a,null)}}d&&Xe(t,n,"srcSet",a.srcSet,a,null),s&&Xe(t,n,"src",a.src,a,null);return;case"input":Se("invalid",t);var H=m=E=d=null,Q=null,mt=null;for(s in a)if(a.hasOwnProperty(s)){var wt=a[s];if(wt!=null)switch(s){case"name":d=wt;break;case"type":E=wt;break;case"checked":Q=wt;break;case"defaultChecked":mt=wt;break;case"value":m=wt;break;case"defaultValue":H=wt;break;case"children":case"dangerouslySetInnerHTML":if(wt!=null)throw Error(r(137,n));break;default:Xe(t,n,s,wt,a,null)}}ji(t,m,H,Q,mt,E,d,!1);return;case"select":Se("invalid",t),s=E=m=null;for(d in a)if(a.hasOwnProperty(d)&&(H=a[d],H!=null))switch(d){case"value":m=H;break;case"defaultValue":E=H;break;case"multiple":s=H;default:Xe(t,n,d,H,a,null)}n=m,a=E,t.multiple=!!s,n!=null?ai(t,!!s,n,!1):a!=null&&ai(t,!!s,a,!0);return;case"textarea":Se("invalid",t),m=d=s=null;for(E in a)if(a.hasOwnProperty(E)&&(H=a[E],H!=null))switch(E){case"value":s=H;break;case"defaultValue":d=H;break;case"children":m=H;break;case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(91));break;default:Xe(t,n,E,H,a,null)}bn(t,s,d,m);return;case"option":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Xe(t,n,Q,s,a,null)}return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(s=0;s<To.length;s++)Se(To[s],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(mt in a)if(a.hasOwnProperty(mt)&&(s=a[mt],s!=null))switch(mt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,mt,s,a,null)}return;default:if(yi(n)){for(wt in a)a.hasOwnProperty(wt)&&(s=a[wt],s!==void 0&&Of(t,n,wt,s,a,void 0));return}}for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null&&Xe(t,n,H,s,a,null))}function Qx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,H=null,Q=null,mt=null,wt=null;for(Mt in a){var Ut=a[Mt];if(a.hasOwnProperty(Mt)&&Ut!=null)switch(Mt){case"checked":break;case"value":break;case"defaultValue":Q=Ut;default:s.hasOwnProperty(Mt)||Xe(t,n,Mt,null,s,Ut)}}for(var _t in s){var Mt=s[_t];if(Ut=a[_t],s.hasOwnProperty(_t)&&(Mt!=null||Ut!=null))switch(_t){case"type":m=Mt;break;case"name":d=Mt;break;case"checked":mt=Mt;break;case"defaultChecked":wt=Mt;break;case"value":E=Mt;break;case"defaultValue":H=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(r(137,n));break;default:Mt!==Ut&&Xe(t,n,_t,Mt,s,Ut)}}yn(t,E,H,Q,mt,wt,m,d);return;case"select":Mt=E=H=_t=null;for(m in a)if(Q=a[m],a.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":Mt=Q;default:s.hasOwnProperty(m)||Xe(t,n,m,null,s,Q)}for(d in s)if(m=s[d],Q=a[d],s.hasOwnProperty(d)&&(m!=null||Q!=null))switch(d){case"value":_t=m;break;case"defaultValue":H=m;break;case"multiple":E=m;default:m!==Q&&Xe(t,n,d,m,s,Q)}n=H,a=E,s=Mt,_t!=null?ai(t,!!a,_t,!1):!!s!=!!a&&(n!=null?ai(t,!!a,n,!0):ai(t,!!a,a?[]:"",!1));return;case"textarea":Mt=_t=null;for(H in a)if(d=a[H],a.hasOwnProperty(H)&&d!=null&&!s.hasOwnProperty(H))switch(H){case"value":break;case"children":break;default:Xe(t,n,H,null,s,d)}for(E in s)if(d=s[E],m=a[E],s.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":_t=d;break;case"defaultValue":Mt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==m&&Xe(t,n,E,d,s,m)}Fe(t,_t,Mt);return;case"option":for(var $t in a)if(_t=a[$t],a.hasOwnProperty($t)&&_t!=null&&!s.hasOwnProperty($t))switch($t){case"selected":t.selected=!1;break;default:Xe(t,n,$t,null,s,_t)}for(Q in s)if(_t=s[Q],Mt=a[Q],s.hasOwnProperty(Q)&&_t!==Mt&&(_t!=null||Mt!=null))switch(Q){case"selected":t.selected=_t&&typeof _t!="function"&&typeof _t!="symbol";break;default:Xe(t,n,Q,_t,s,Mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)_t=a[ce],a.hasOwnProperty(ce)&&_t!=null&&!s.hasOwnProperty(ce)&&Xe(t,n,ce,null,s,_t);for(mt in s)if(_t=s[mt],Mt=a[mt],s.hasOwnProperty(mt)&&_t!==Mt&&(_t!=null||Mt!=null))switch(mt){case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:Xe(t,n,mt,_t,s,Mt)}return;default:if(yi(n)){for(var We in a)_t=a[We],a.hasOwnProperty(We)&&_t!==void 0&&!s.hasOwnProperty(We)&&Of(t,n,We,void 0,s,_t);for(wt in s)_t=s[wt],Mt=a[wt],!s.hasOwnProperty(wt)||_t===Mt||_t===void 0&&Mt===void 0||Of(t,n,wt,_t,s,Mt);return}}for(var st in a)_t=a[st],a.hasOwnProperty(st)&&_t!=null&&!s.hasOwnProperty(st)&&Xe(t,n,st,null,s,_t);for(Ut in s)_t=s[Ut],Mt=a[Ut],!s.hasOwnProperty(Ut)||_t===Mt||_t==null&&Mt==null||Xe(t,n,Ut,_t,s,Mt)}function K0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var d=a[s],m=d.transferSize,E=d.initiatorType,H=d.duration;if(m&&H&&K0(E)){for(E=0,H=d.responseEnd,s+=1;s<a.length;s++){var Q=a[s],mt=Q.startTime;if(mt>H)break;var wt=Q.transferSize,Ut=Q.initiatorType;wt&&K0(Ut)&&(Q=Q.responseEnd,E+=wt*(Q<H?1:(H-mt)/(Q-mt)))}if(--s,n+=8*(m+E)/(d.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zf=null,Pf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function Q0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function If(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function $x(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var $0=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(ny)}:$0;function ny(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function eg(t,n){var a=n,s=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(d),ps(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var m=a.firstChild;m;){var E=m.nextSibling,H=m.nodeName;m[ir]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=E}}else a==="body"&&wo(t.ownerDocument.body);a=d}while(a);ps(n)}function ng(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function iy(t,n,a,s){for(;t.nodeType===1;){var d=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function ay(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Hf(t){return t.data==="$?"||t.data==="$~"}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ry(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gf=null;function ag(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function rg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function sg(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ws(t)}var di=new Map,og=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=G.d;G.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:hy,S:dy,M:py};function sy(){var t=ca.f(),n=Xl();return t||n}function oy(t){var n=ba(t);n!==null&&n.tag===5&&n.type==="form"?Em(n):ca.r(t)}var fs=typeof document>"u"?null:document;function lg(t,n,a){var s=fs;if(s&&typeof n=="string"&&n){var d=de(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),og.has(d)||(og.add(d),t={rel:t,crossOrigin:a,href:n},s.querySelector(d)===null&&(n=s.createElement("link"),Rn(n,"link",t),k(n),s.head.appendChild(n)))}}function ly(t){ca.D(t),lg("dns-prefetch",t,null)}function cy(t,n){ca.C(t,n),lg("preconnect",t,n)}function uy(t,n,a){ca.L(t,n,a);var s=fs;if(s&&t&&n){var d='link[rel="preload"][as="'+de(n)+'"]';n==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+de(a.imageSizes)+'"]')):d+='[href="'+de(t)+'"]';var m=d;switch(n){case"style":m=ds(t);break;case"script":m=hs(t)}di.has(m)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(m,t),s.querySelector(d)!==null||n==="style"&&s.querySelector(Ro(m))||n==="script"&&s.querySelector(Co(m))||(n=s.createElement("link"),Rn(n,"link",t),k(n),s.head.appendChild(n)))}}function fy(t,n){ca.m(t,n);var a=fs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+de(s)+'"][href="'+de(t)+'"]',m=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=hs(t)}if(!di.has(m)&&(t=_({rel:"modulepreload",href:t},n),di.set(m,t),a.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(m)))return}s=a.createElement("link"),Rn(s,"link",t),k(s),a.head.appendChild(s)}}}function dy(t,n,a){ca.S(t,n,a);var s=fs;if(s&&t){var d=Ma(s).hoistableStyles,m=ds(t);n=n||"default";var E=d.get(m);if(!E){var H={loading:0,preload:null};if(E=s.querySelector(Ro(m)))H.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(m))&&Vf(t,a);var Q=E=s.createElement("link");k(Q),Rn(Q,"link",t),Q._p=new Promise(function(mt,wt){Q.onload=mt,Q.onerror=wt}),Q.addEventListener("load",function(){H.loading|=1}),Q.addEventListener("error",function(){H.loading|=2}),H.loading|=4,tc(E,n,s)}E={type:"stylesheet",instance:E,count:1,state:H},d.set(m,E)}}}function hy(t,n){ca.X(t,n);var a=fs;if(a&&t){var s=Ma(a).hoistableScripts,d=hs(t),m=s.get(d);m||(m=a.querySelector(Co(d)),m||(t=_({src:t,async:!0},n),(n=di.get(d))&&Xf(t,n),m=a.createElement("script"),k(m),Rn(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(d,m))}}function py(t,n){ca.M(t,n);var a=fs;if(a&&t){var s=Ma(a).hoistableScripts,d=hs(t),m=s.get(d);m||(m=a.querySelector(Co(d)),m||(t=_({src:t,async:!0,type:"module"},n),(n=di.get(d))&&Xf(t,n),m=a.createElement("script"),k(m),Rn(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(d,m))}}function cg(t,n,a,s){var d=(d=rt.current)?$l(d):null;if(!d)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=Ma(d).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var m=Ma(d).hoistableStyles,E=m.get(t);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=d.querySelector(Ro(t)))&&!m._p&&(E.instance=m,E.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),m||my(d,t,a,E.state))),n&&s===null)throw Error(r(528,""));return E}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=Ma(d).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+de(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function ug(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),k(n),t.head.appendChild(n))}function hs(t){return'[src="'+de(t)+'"]'}function Co(t){return"script[async]"+t}function fg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+de(a.href)+'"]');if(s)return n.instance=s,k(s),s;var d=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),k(s),Rn(s,"style",d),tc(s,a.precedence,t),n.instance=s;case"stylesheet":d=ds(a.href);var m=t.querySelector(Ro(d));if(m)return n.state.loading|=4,n.instance=m,k(m),m;s=ug(a),(d=di.get(d))&&Vf(s,d),m=(t.ownerDocument||t).createElement("link"),k(m);var E=m;return E._p=new Promise(function(H,Q){E.onload=H,E.onerror=Q}),Rn(m,"link",s),n.state.loading|=4,tc(m,a.precedence,t),n.instance=m;case"script":return m=hs(a.src),(d=t.querySelector(Co(m)))?(n.instance=d,k(d),d):(s=a,(d=di.get(m))&&(s=_({},a),Xf(s,d)),t=t.ownerDocument||t,d=t.createElement("script"),k(d),Rn(d,"link",s),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,tc(s,a.precedence,t));return n.instance}function tc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,m=d,E=0;E<s.length;E++){var H=s[E];if(H.dataset.precedence===n)m=H;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function dg(t,n,a){if(ec===null){var s=new Map,d=ec=new Map;d.set(a,s)}else d=ec,s=d.get(a),s||(s=new Map,d.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),d=0;d<a.length;d++){var m=a[d];if(!(m[ir]||m[sn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(n)||"";E=t+E;var H=s.get(E);H?H.push(m):s.set(E,[m])}}return s}function hg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function pg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _y(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=ds(s.href),m=n.querySelector(Ro(d));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=m,k(m);return}m=n.ownerDocument||n,s=ug(s),(d=di.get(d))&&Vf(s,d),m=m.createElement("link"),k(m);var E=m;E._p=new Promise(function(H,Q){E.onload=H,E.onerror=Q}),Rn(m,"link",s),a.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function vy(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+n);0<t.imgBytes&&Wf===0&&(Wf=62500*Jx());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Wf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(d)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(xy,t),ic=null,nc.call(t))}function xy(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var s=a.get(null);else{a=new Map,ic.set(t,a);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),s=E)}s&&a.set(null,s)}d=n.instance,E=d.getAttribute("data-precedence"),m=a.get(E)||s,m===s&&a.set(null,d),a.set(E,d),this.count++,s=nc.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:U,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function yy(t,n,a,s,d,m,E,H,Q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function mg(t,n,a,s,d,m,E,H,Q,mt,wt,Ut){return t=new yy(t,n,a,E,Q,mt,wt,Ut,H),n=1,m===!0&&(n|=24),m=Yn(3,null,null,n),t.current=m,m.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,m.memoizedState={element:s,isDehydrated:a,cache:n},wu(m),t}function gg(t){return t?(t=Xr,t):Xr}function _g(t,n,a,s,d,m){d=gg(d),s.context===null?s.context=d:s.pendingContext=d,s=Da(n),s.payload={element:a},m=m===void 0?null:m,m!==null&&(s.callback=m),a=Ua(t,s,n),a!==null&&(Wn(a,t,n),oo(a,t,n))}function vg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jf(t,n){vg(t,n),(t=t.alternate)&&vg(t,n)}function xg(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Wn(n,t,67108864),jf(t,67108864)}}function yg(t){if(t.tag===13||t.tag===31){var n=$n();n=Gs(n);var a=lr(t,n);a!==null&&Wn(a,t,n),jf(t,n)}}var rc=!0;function Sy(t,n,a,s){var d=V.T;V.T=null;var m=G.p;try{G.p=2,qf(t,n,a,s)}finally{G.p=m,V.T=d}}function by(t,n,a,s){var d=V.T;V.T=null;var m=G.p;try{G.p=8,qf(t,n,a,s)}finally{G.p=m,V.T=d}}function qf(t,n,a,s){if(rc){var d=Yf(s);if(d===null)Lf(t,n,s,sc,a),bg(t,s);else if(Ey(d,t,n,a,s))s.stopPropagation();else if(bg(t,s),n&4&&-1<My.indexOf(t)){for(;d!==null;){var m=ba(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ot(m.pendingLanes);if(E!==0){var H=m;for(H.pendingLanes|=2,H.entangledLanes|=2;E;){var Q=1<<31-kt(E);H.entanglements[1]|=Q,E&=~Q}Li(m),(ze&6)===0&&(Gl=w()+500,Eo(0))}}break;case 31:case 13:H=lr(m,2),H!==null&&Wn(H,m,2),Xl(),jf(m,2)}if(m=Yf(s),m===null&&Lf(t,n,s,sc,a),m===d)break;d=m}d!==null&&s.stopPropagation()}else Lf(t,n,s,null,a)}}function Yf(t){return t=Zc(t),Zf(t)}var sc=null;function Zf(t){if(sc=null,t=Sa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=u(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function Sg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case lt:return 2;case Tt:return 8;case ut:case Zt:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ga=null,Va=null,Xa=null,Uo=new Map,No=new Map,Wa=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Lo(t,n,a,s,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:m,targetContainers:[d]},n!==null&&(n=ba(n),n!==null&&xg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Ey(t,n,a,s,d){switch(n){case"focusin":return Ga=Lo(Ga,t,n,a,s,d),!0;case"dragenter":return Va=Lo(Va,t,n,a,s,d),!0;case"mouseover":return Xa=Lo(Xa,t,n,a,s,d),!0;case"pointerover":var m=d.pointerId;return Uo.set(m,Lo(Uo.get(m)||null,t,n,a,s,d)),!0;case"gotpointercapture":return m=d.pointerId,No.set(m,Lo(No.get(m)||null,t,n,a,s,d)),!0}return!1}function Mg(t){var n=Sa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){yg(a)});return}}else if(n===31){if(n=u(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Yc=s,a.target.dispatchEvent(s),Yc=null}else return n=ba(a),n!==null&&xg(n),t.blockedOn=a,!1;n.shift()}return!0}function Eg(t,n,a){oc(t)&&a.delete(n)}function Ty(){Kf=!1,Ga!==null&&oc(Ga)&&(Ga=null),Va!==null&&oc(Va)&&(Va=null),Xa!==null&&oc(Xa)&&(Xa=null),Uo.forEach(Eg),No.forEach(Eg)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ty)))}var cc=null;function Tg(t){cc!==t&&(cc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],d=t[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var m=ba(a);m!==null&&(t.splice(n,3),n-=3,qu(m,{pending:!0,data:d,method:a.method,action:s},s,d))}}))}function ps(t){function n(Q){return lc(Q,t)}Ga!==null&&lc(Ga,t),Va!==null&&lc(Va,t),Xa!==null&&lc(Xa,t),Uo.forEach(n),No.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Mg(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var d=a[s],m=a[s+1],E=d[xn]||null;if(typeof m=="function")E||Tg(a);else if(E){var H=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[xn]||null)H=E.formAction;else if(Zf(d)!==null)continue}else H=E.action;typeof H=="function"?a[s+1]=H:(a.splice(s,3),s-=3),Tg(a)}}}function Ag(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return d=E})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function Qf(t){this._internalRoot=t}uc.prototype.render=Qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();_g(a,s,t,n,null,null)},uc.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;_g(t.current,2,null,t,null,null),Xl(),n[xi]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Mg(t)}};var wg=e.version;if(wg!=="19.2.4")throw Error(r(527,wg,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Ay={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Ct=fc.inject(Ay),zt=fc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",d=Om,m=zm,E=Pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError)),n=mg(t,1,!1,null,null,a,s,null,d,m,E,Ag),t[xi]=n.current,Nf(t),new Qf(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,d="",m=Om,E=zm,H=Pm,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(H=a.onRecoverableError),a.formState!==void 0&&(Q=a.formState)),n=mg(t,1,!0,n,a??null,s,d,Q,m,E,H,Ag),n.context=gg(null),a=n.current,s=$n(),s=Gs(s),d=Da(s),d.callback=null,Ua(a,d,s),a=s,n.current.lanes=a,Un(n,a),Li(n),t[xi]=n.current,Nf(t),new uc(n)},zo.version="19.2.4",zo}var Ig;function Iy(){if(Ig)return td.exports;Ig=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=Py(),td.exports}var Fy=Iy();const By=Nh(Fy);var Cn=(o=>(o.IMAGE="IMAGE",o.LINK="LINK",o.SCENE="SCENE",o))(Cn||{});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="182",Hy=0,Fg=1,ky=2,zc=1,Gy=2,Go=3,nr=0,jn=1,Pi=2,ga=0,Us=1,Bg=2,Hg=3,kg=4,Vy=5,Rr=100,Xy=101,Wy=102,jy=103,qy=104,Yy=200,Zy=201,Ky=202,Qy=203,Pd=204,Id=205,Jy=206,$y=207,tS=208,eS=209,nS=210,iS=211,aS=212,rS=213,sS=214,Fd=0,Bd=1,Hd=2,Ls=3,kd=4,Gd=5,Vd=6,Xd=7,H_=0,oS=1,lS=2,Bi=0,k_=1,G_=2,V_=3,X_=4,W_=5,j_=6,q_=7,Y_=300,Nr=301,Os=302,Wd=303,jd=304,Vc=306,qd=1e3,ma=1001,Yd=1002,Dn=1003,cS=1004,hc=1005,zn=1006,ad=1007,Dr=1008,gi=1009,Z_=1010,K_=1011,jo=1012,zh=1013,Gi=1014,Ii=1015,va=1016,Ph=1017,Ih=1018,qo=1020,Q_=35902,J_=35899,$_=1021,tv=1022,Ri=1023,xa=1026,Ur=1027,ev=1028,Fh=1029,zs=1030,Bh=1031,Hh=1033,Pc=33776,Ic=33777,Fc=33778,Bc=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,th=37492,eh=37496,nh=37488,ih=37489,ah=37490,rh=37491,sh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,yh=36492,Sh=36494,bh=36495,Mh=36283,Eh=36284,Th=36285,Ah=36286,uS=3200,fS=0,dS=1,tr="",pi="srgb",Ps="srgb-linear",kc="linear",ke="srgb",ms=7680,Gg=519,hS=512,pS=513,mS=514,kh=515,gS=516,_S=517,Gh=518,vS=519,Vg=35044,Xg="300 es",Fi=2e3,Gc=2001;function nv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xS(){const o=Yo("canvas");return o.style.display="block",o}const Wg={};function jg(...o){const e="THREE."+o.shift();console.log(e,...o)}function he(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ce(...o){const e="THREE."+o.shift();console.error(e,...o)}function Zo(...o){const e=o.join(" ");e in Wg||(Wg[e]=!0,he(...o))}function yS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qg=1234567;const Xo=Math.PI/180,Ko=180/Math.PI;function Bs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function Vh(o,e){return(o%e+e)%e}function SS(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function bS(o,e,i){return o!==e?(i-o)/(e-o):0}function Wo(o,e,i){return(1-i)*o+i*e}function MS(o,e,i,r){return Wo(o,e,1-Math.exp(-i*r))}function ES(o,e=1){return e-Math.abs(Vh(o,e*2)-e)}function TS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function AS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function wS(o,e){return o+Math.floor(Math.random()*(e-o+1))}function RS(o,e){return o+Math.random()*(e-o)}function CS(o){return o*(.5-Math.random())}function DS(o){o!==void 0&&(qg=o);let e=qg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function US(o){return o*Xo}function NS(o){return o*Ko}function LS(o){return(o&o-1)===0&&o!==0}function OS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function PS(o,e,i,r,l){const c=Math.cos,f=Math.sin,u=c(i/2),p=f(i/2),h=c((e+r)/2),x=f((e+r)/2),_=c((e-r)/2),y=f((e-r)/2),v=c((r-e)/2),M=f((r-e)/2);switch(l){case"XYX":o.set(u*x,p*_,p*y,u*h);break;case"YZY":o.set(p*y,u*x,p*_,u*h);break;case"ZXZ":o.set(p*_,p*y,u*x,u*h);break;case"XZX":o.set(u*x,p*M,p*v,u*h);break;case"YXY":o.set(p*v,u*x,p*M,u*h);break;case"ZYZ":o.set(p*M,p*v,u*x,u*h);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ds(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const rd={DEG2RAD:Xo,RAD2DEG:Ko,generateUUID:Bs,clamp:Ee,euclideanModulo:Vh,mapLinear:SS,inverseLerp:bS,lerp:Wo,damp:MS,pingpong:ES,smoothstep:TS,smootherstep:AS,randInt:wS,randFloat:RS,randFloatSpread:CS,seededRandom:DS,degToRad:US,radToDeg:NS,isPowerOfTwo:LS,ceilPowerOfTwo:OS,floorPowerOfTwo:zS,setQuaternionFromProperEuler:PS,normalize:Fn,denormalize:Ds};class Ge{constructor(e=0,i=0){Ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,u){let p=r[l+0],h=r[l+1],x=r[l+2],_=r[l+3],y=c[f+0],v=c[f+1],M=c[f+2],b=c[f+3];if(u<=0){e[i+0]=p,e[i+1]=h,e[i+2]=x,e[i+3]=_;return}if(u>=1){e[i+0]=y,e[i+1]=v,e[i+2]=M,e[i+3]=b;return}if(_!==b||p!==y||h!==v||x!==M){let S=p*y+h*v+x*M+_*b;S<0&&(y=-y,v=-v,M=-M,b=-b,S=-S);let g=1-u;if(S<.9995){const A=Math.acos(S),U=Math.sin(A);g=Math.sin(g*A)/U,u=Math.sin(u*A)/U,p=p*g+y*u,h=h*g+v*u,x=x*g+M*u,_=_*g+b*u}else{p=p*g+y*u,h=h*g+v*u,x=x*g+M*u,_=_*g+b*u;const A=1/Math.sqrt(p*p+h*h+x*x+_*_);p*=A,h*=A,x*=A,_*=A}}e[i]=p,e[i+1]=h,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const u=r[l],p=r[l+1],h=r[l+2],x=r[l+3],_=c[f],y=c[f+1],v=c[f+2],M=c[f+3];return e[i]=u*M+x*_+p*v-h*y,e[i+1]=p*M+x*y+h*_-u*v,e[i+2]=h*M+x*v+u*y-p*_,e[i+3]=x*M-u*_-p*y-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,u=Math.cos,p=Math.sin,h=u(r/2),x=u(l/2),_=u(c/2),y=p(r/2),v=p(l/2),M=p(c/2);switch(f){case"XYZ":this._x=y*x*_+h*v*M,this._y=h*v*_-y*x*M,this._z=h*x*M+y*v*_,this._w=h*x*_-y*v*M;break;case"YXZ":this._x=y*x*_+h*v*M,this._y=h*v*_-y*x*M,this._z=h*x*M-y*v*_,this._w=h*x*_+y*v*M;break;case"ZXY":this._x=y*x*_-h*v*M,this._y=h*v*_+y*x*M,this._z=h*x*M+y*v*_,this._w=h*x*_-y*v*M;break;case"ZYX":this._x=y*x*_-h*v*M,this._y=h*v*_+y*x*M,this._z=h*x*M-y*v*_,this._w=h*x*_+y*v*M;break;case"YZX":this._x=y*x*_+h*v*M,this._y=h*v*_+y*x*M,this._z=h*x*M-y*v*_,this._w=h*x*_-y*v*M;break;case"XZY":this._x=y*x*_-h*v*M,this._y=h*v*_-y*x*M,this._z=h*x*M+y*v*_,this._w=h*x*_+y*v*M;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],u=i[5],p=i[9],h=i[2],x=i[6],_=i[10],y=r+u+_;if(y>0){const v=.5/Math.sqrt(y+1);this._w=.25/v,this._x=(x-p)*v,this._y=(c-h)*v,this._z=(f-l)*v}else if(r>u&&r>_){const v=2*Math.sqrt(1+r-u-_);this._w=(x-p)/v,this._x=.25*v,this._y=(l+f)/v,this._z=(c+h)/v}else if(u>_){const v=2*Math.sqrt(1+u-r-_);this._w=(c-h)/v,this._x=(l+f)/v,this._y=.25*v,this._z=(p+x)/v}else{const v=2*Math.sqrt(1+_-r-u);this._w=(f-l)/v,this._x=(c+h)/v,this._y=(p+x)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,u=i._x,p=i._y,h=i._z,x=i._w;return this._x=r*x+f*u+l*h-c*p,this._y=l*x+f*p+c*u-r*h,this._z=c*x+f*h+r*p-l*u,this._w=f*x-r*u-l*p-c*h,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,u=this.dot(e);u<0&&(r=-r,l=-l,c=-c,f=-f,u=-u);let p=1-i;if(u<.9995){const h=Math.acos(u),x=Math.sin(h);p=Math.sin(p*h)/x,i=Math.sin(i*h)/x,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class yt{constructor(e=0,i=0,r=0){yt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Yg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Yg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,u=e.z,p=e.w,h=2*(f*l-u*r),x=2*(u*i-c*l),_=2*(c*r-f*i);return this.x=i+p*h+f*_-u*x,this.y=r+p*x+u*h-c*_,this.z=l+p*_+c*x-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,u=i.y,p=i.z;return this.x=l*p-c*u,this.y=c*f-r*p,this.z=r*u-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new yt,Yg=new Jo;class ve{constructor(e,i,r,l,c,f,u,p,h){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,u,p,h)}set(e,i,r,l,c,f,u,p,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=u,x[3]=i,x[4]=c,x[5]=p,x[6]=r,x[7]=f,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],u=r[3],p=r[6],h=r[1],x=r[4],_=r[7],y=r[2],v=r[5],M=r[8],b=l[0],S=l[3],g=l[6],A=l[1],U=l[4],N=l[7],z=l[2],P=l[5],O=l[8];return c[0]=f*b+u*A+p*z,c[3]=f*S+u*U+p*P,c[6]=f*g+u*N+p*O,c[1]=h*b+x*A+_*z,c[4]=h*S+x*U+_*P,c[7]=h*g+x*N+_*O,c[2]=y*b+v*A+M*z,c[5]=y*S+v*U+M*P,c[8]=y*g+v*N+M*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],u=e[5],p=e[6],h=e[7],x=e[8];return i*f*x-i*u*h-r*c*x+r*u*p+l*c*h-l*f*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],u=e[5],p=e[6],h=e[7],x=e[8],_=x*f-u*h,y=u*p-x*c,v=h*c-f*p,M=i*_+r*y+l*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=_*b,e[1]=(l*h-x*r)*b,e[2]=(u*r-l*f)*b,e[3]=y*b,e[4]=(x*i-l*p)*b,e[5]=(l*c-u*i)*b,e[6]=v*b,e[7]=(r*p-h*i)*b,e[8]=(f*i-r*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,u){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*f+h*u)+f+e,-l*h,l*p,-l*(-h*f+p*u)+u+i,0,0,1),this}scale(e,i){return this.premultiply(od.makeScale(e,i)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,i){return this.premultiply(od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ve,Zg=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IS(){const o={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===tr?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ps]:{primaries:e,whitePoint:r,transfer:kc,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const De=IS();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class FS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=Yo("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:e.width,height:e.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BS=0;class Xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,u=l.length;f<u;f++)l[f].isDataTexture?c.push(ld(l[f].image)):c.push(ld(l[f]))}else c=ld(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let HS=0;const cd=new yt;class Pn extends Fs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ma,l=ma,c=zn,f=Dr,u=Ri,p=gi,h=Pn.DEFAULT_ANISOTROPY,x=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Bs(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=p,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Y_;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,h=p[0],x=p[4],_=p[8],y=p[1],v=p[5],M=p[9],b=p[2],S=p[6],g=p[10];if(Math.abs(x-y)<.01&&Math.abs(_-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+b)<.1&&Math.abs(M+S)<.1&&Math.abs(h+v+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,N=(v+1)/2,z=(g+1)/2,P=(x+y)/4,O=(_+b)/4,W=(M+S)/4;return U>N&&U>z?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=P/r,c=O/r):N>z?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=P/l,c=W/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=O/c,l=W/c),this.set(r,l,c,i),this}let A=Math.sqrt((S-M)*(S-M)+(_-b)*(_-b)+(y-x)*(y-x));return Math.abs(A)<.001&&(A=1),this.x=(S-M)/A,this.y=(_-b)/A,this.z=(y-x)/A,this.w=Math.acos((h+v+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Fs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const f=r.count;for(let u=0;u<f;u++)this.textures[u]=c.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Xh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends kS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class iv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=new yt(1/0,1/0,1/0),i=new yt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=c.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),mc.subVectors(this.max,Po),_s.subVectors(e.a,Po),vs.subVectors(e.b,Po),xs.subVectors(e.c,Po),qa.subVectors(vs,_s),Ya.subVectors(xs,vs),Sr.subVectors(_s,xs);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-Sr.z,Sr.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,Sr.z,0,-Sr.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-Sr.y,Sr.x,0];return!ud(i,_s,vs,xs,mc)||(i=[1,0,0,0,1,0,0,0,1],!ud(i,_s,vs,xs,mc))?!1:(gc.crossVectors(qa,Ya),i=[gc.x,gc.y,gc.z],ud(i,_s,vs,xs,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new yt,new yt,new yt,new yt,new yt,new yt,new yt,new yt],Ei=new yt,pc=new $o,_s=new yt,vs=new yt,xs=new yt,qa=new yt,Ya=new yt,Sr=new yt,Po=new yt,mc=new yt,gc=new yt,br=new yt;function ud(o,e,i,r,l){for(let c=0,f=o.length-3;c<=f;c+=3){br.fromArray(o,c);const u=l.x*Math.abs(br.x)+l.y*Math.abs(br.y)+l.z*Math.abs(br.z),p=e.dot(br),h=i.dot(br),x=r.dot(br);if(Math.max(-Math.max(p,h,x),Math.min(p,h,x))>u)return!1}return!0}const VS=new $o,Io=new yt,fd=new yt;class Wh{constructor(e=new yt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):VS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(fd)),this.expandByPoint(Io.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new yt,dd=new yt,_c=new yt,Za=new yt,hd=new yt,vc=new yt,pd=new yt;class av{constructor(e=new yt,i=new yt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){dd.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(dd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(_c),u=Za.dot(this.direction),p=-Za.dot(_c),h=Za.lengthSq(),x=Math.abs(1-f*f);let _,y,v,M;if(x>0)if(_=f*p-u,y=f*u-p,M=c*x,_>=0)if(y>=-M)if(y<=M){const b=1/x;_*=b,y*=b,v=_*(_+f*y+2*u)+y*(f*_+y+2*p)+h}else y=c,_=Math.max(0,-(f*y+u)),v=-_*_+y*(y+2*p)+h;else y=-c,_=Math.max(0,-(f*y+u)),v=-_*_+y*(y+2*p)+h;else y<=-M?(_=Math.max(0,-(-f*c+u)),y=_>0?-c:Math.min(Math.max(-c,-p),c),v=-_*_+y*(y+2*p)+h):y<=M?(_=0,y=Math.min(Math.max(-c,-p),c),v=y*(y+2*p)+h):(_=Math.max(0,-(f*c+u)),y=_>0?c:Math.min(Math.max(-c,-p),c),v=-_*_+y*(y+2*p)+h);else y=f>0?-c:c,_=Math.max(0,-(f*y+u)),v=-_*_+y*(y+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(dd).addScaledVector(_c,y),v}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),u=r-f,p=r+f;return p<0?null:u<0?this.at(p,i):this.at(u,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,u,p;const h=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,l=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,l=(e.min.x-y.x)*h),x>=0?(c=(e.min.y-y.y)*x,f=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,f=(e.min.y-y.y)*x),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(u=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(u=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),r>p||u>l)||((u>r||r!==r)&&(r=u),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,c){hd.subVectors(i,e),vc.subVectors(r,e),pd.crossVectors(hd,vc);let f=this.direction.dot(pd),u;if(f>0){if(l)return null;u=1}else if(f<0)u=-1,f=-f;else return null;Za.subVectors(this.origin,e);const p=u*this.direction.dot(vc.crossVectors(Za,vc));if(p<0)return null;const h=u*this.direction.dot(hd.cross(Za));if(h<0||p+h>f)return null;const x=-u*Za.dot(pd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,l,c,f,u,p,h,x,_,y,v,M,b,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,u,p,h,x,_,y,v,M,b,S)}set(e,i,r,l,c,f,u,p,h,x,_,y,v,M,b,S){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=u,g[13]=p,g[2]=h,g[6]=x,g[10]=_,g[14]=y,g[3]=v,g[7]=M,g[11]=b,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),u=Math.sin(r),p=Math.cos(l),h=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=f*x,v=f*_,M=u*x,b=u*_;i[0]=p*x,i[4]=-p*_,i[8]=h,i[1]=v+M*h,i[5]=y-b*h,i[9]=-u*p,i[2]=b-y*h,i[6]=M+v*h,i[10]=f*p}else if(e.order==="YXZ"){const y=p*x,v=p*_,M=h*x,b=h*_;i[0]=y+b*u,i[4]=M*u-v,i[8]=f*h,i[1]=f*_,i[5]=f*x,i[9]=-u,i[2]=v*u-M,i[6]=b+y*u,i[10]=f*p}else if(e.order==="ZXY"){const y=p*x,v=p*_,M=h*x,b=h*_;i[0]=y-b*u,i[4]=-f*_,i[8]=M+v*u,i[1]=v+M*u,i[5]=f*x,i[9]=b-y*u,i[2]=-f*h,i[6]=u,i[10]=f*p}else if(e.order==="ZYX"){const y=f*x,v=f*_,M=u*x,b=u*_;i[0]=p*x,i[4]=M*h-v,i[8]=y*h+b,i[1]=p*_,i[5]=b*h+y,i[9]=v*h-M,i[2]=-h,i[6]=u*p,i[10]=f*p}else if(e.order==="YZX"){const y=f*p,v=f*h,M=u*p,b=u*h;i[0]=p*x,i[4]=b-y*_,i[8]=M*_+v,i[1]=_,i[5]=f*x,i[9]=-u*x,i[2]=-h*x,i[6]=v*_+M,i[10]=y-b*_}else if(e.order==="XZY"){const y=f*p,v=f*h,M=u*p,b=u*h;i[0]=p*x,i[4]=-_,i[8]=h*x,i[1]=y*_+b,i[5]=f*x,i[9]=v*_-M,i[2]=M*_-v,i[6]=u*x,i[10]=b*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XS,e,WS)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ka.crossVectors(r,ti),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ka.crossVectors(r,ti)),Ka.normalize(),xc.crossVectors(ti,Ka),l[0]=Ka.x,l[4]=xc.x,l[8]=ti.x,l[1]=Ka.y,l[5]=xc.y,l[9]=ti.y,l[2]=Ka.z,l[6]=xc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],u=r[4],p=r[8],h=r[12],x=r[1],_=r[5],y=r[9],v=r[13],M=r[2],b=r[6],S=r[10],g=r[14],A=r[3],U=r[7],N=r[11],z=r[15],P=l[0],O=l[4],W=l[8],C=l[12],I=l[1],Z=l[5],F=l[9],j=l[13],T=l[2],K=l[6],V=l[10],G=l[14],nt=l[3],J=l[7],ht=l[11],L=l[15];return c[0]=f*P+u*I+p*T+h*nt,c[4]=f*O+u*Z+p*K+h*J,c[8]=f*W+u*F+p*V+h*ht,c[12]=f*C+u*j+p*G+h*L,c[1]=x*P+_*I+y*T+v*nt,c[5]=x*O+_*Z+y*K+v*J,c[9]=x*W+_*F+y*V+v*ht,c[13]=x*C+_*j+y*G+v*L,c[2]=M*P+b*I+S*T+g*nt,c[6]=M*O+b*Z+S*K+g*J,c[10]=M*W+b*F+S*V+g*ht,c[14]=M*C+b*j+S*G+g*L,c[3]=A*P+U*I+N*T+z*nt,c[7]=A*O+U*Z+N*K+z*J,c[11]=A*W+U*F+N*V+z*ht,c[15]=A*C+U*j+N*G+z*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],u=e[5],p=e[9],h=e[13],x=e[2],_=e[6],y=e[10],v=e[14],M=e[3],b=e[7],S=e[11],g=e[15],A=p*v-h*y,U=u*v-h*_,N=u*y-p*_,z=f*v-h*x,P=f*y-p*x,O=f*_-u*x;return i*(b*A-S*U+g*N)-r*(M*A-S*z+g*P)+l*(M*U-b*z+g*O)-c*(M*N-b*P+S*O)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],u=e[5],p=e[6],h=e[7],x=e[8],_=e[9],y=e[10],v=e[11],M=e[12],b=e[13],S=e[14],g=e[15],A=_*S*h-b*y*h+b*p*v-u*S*v-_*p*g+u*y*g,U=M*y*h-x*S*h-M*p*v+f*S*v+x*p*g-f*y*g,N=x*b*h-M*_*h+M*u*v-f*b*v-x*u*g+f*_*g,z=M*_*p-x*b*p-M*u*y+f*b*y+x*u*S-f*_*S,P=i*A+r*U+l*N+c*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=A*O,e[1]=(b*y*c-_*S*c-b*l*v+r*S*v+_*l*g-r*y*g)*O,e[2]=(u*S*c-b*p*c+b*l*h-r*S*h-u*l*g+r*p*g)*O,e[3]=(_*p*c-u*y*c-_*l*h+r*y*h+u*l*v-r*p*v)*O,e[4]=U*O,e[5]=(x*S*c-M*y*c+M*l*v-i*S*v-x*l*g+i*y*g)*O,e[6]=(M*p*c-f*S*c-M*l*h+i*S*h+f*l*g-i*p*g)*O,e[7]=(f*y*c-x*p*c+x*l*h-i*y*h-f*l*v+i*p*v)*O,e[8]=N*O,e[9]=(M*_*c-x*b*c-M*r*v+i*b*v+x*r*g-i*_*g)*O,e[10]=(f*b*c-M*u*c+M*r*h-i*b*h-f*r*g+i*u*g)*O,e[11]=(x*u*c-f*_*c-x*r*h+i*_*h+f*r*v-i*u*v)*O,e[12]=z*O,e[13]=(x*b*l-M*_*l+M*r*y-i*b*y-x*r*S+i*_*S)*O,e[14]=(M*u*l-f*b*l-M*r*p+i*b*p+f*r*S-i*u*S)*O,e[15]=(f*_*l-x*u*l+x*r*p-i*_*p-f*r*y+i*u*y)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,u=e.y,p=e.z,h=c*f,x=c*u;return this.set(h*f+r,h*u-l*p,h*p+l*u,0,h*u+l*p,x*u+r,x*p-l*f,0,h*p-l*u,x*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,u=i._z,p=i._w,h=c+c,x=f+f,_=u+u,y=c*h,v=c*x,M=c*_,b=f*x,S=f*_,g=u*_,A=p*h,U=p*x,N=p*_,z=r.x,P=r.y,O=r.z;return l[0]=(1-(b+g))*z,l[1]=(v+N)*z,l[2]=(M-U)*z,l[3]=0,l[4]=(v-N)*P,l[5]=(1-(y+g))*P,l[6]=(S+A)*P,l[7]=0,l[8]=(M+U)*O,l[9]=(S-A)*O,l[10]=(1-(y+b))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ys.set(l[0],l[1],l[2]).length();const f=ys.set(l[4],l[5],l[6]).length(),u=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const h=1/c,x=1/f,_=1/u;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=u,this}makePerspective(e,i,r,l,c,f,u=Fi,p=!1){const h=this.elements,x=2*c/(i-e),_=2*c/(r-l),y=(i+e)/(i-e),v=(r+l)/(r-l);let M,b;if(p)M=c/(f-c),b=f*c/(f-c);else if(u===Fi)M=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(u===Gc)M=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=x,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,u=Fi,p=!1){const h=this.elements,x=2/(i-e),_=2/(r-l),y=-(i+e)/(i-e),v=-(r+l)/(r-l);let M,b;if(p)M=1/(f-c),b=f/(f-c);else if(u===Fi)M=-2/(f-c),b=-(f+c)/(f-c);else if(u===Gc)M=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=x,h[4]=0,h[8]=0,h[12]=y,h[1]=0,h[5]=_,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new yt,Ti=new rn,XS=new yt(0,0,0),WS=new yt(1,1,1),Ka=new yt,xc=new yt,ti=new yt,Qg=new rn,Jg=new Jo;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],u=l[8],p=l[1],h=l[5],x=l[9],_=l[2],y=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-x,v),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,v),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(u,c)):(this._x=Math.atan2(-x,v),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const $g=new yt,Ss=new Jo,da=new rn,yc=new yt,Fo=new yt,qS=new yt,YS=new Jo,t_=new yt(1,0,0),e_=new yt(0,1,0),n_=new yt(0,0,1),i_={type:"added"},ZS={type:"removed"},bs={type:"childadded",child:null},md={type:"childremoved",child:null};class ni extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new yt,i=new ya,r=new Jo,l=new yt(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ve}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?yc.copy(e):yc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Fo,yc,this.up):da.lookAt(yc,Fo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(da),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),bs.child=e,this.dispatchEvent(bs),bs.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZS),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,YS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(u=>({...u})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let h=0,x=p.length;h<x;h++){const _=p[h];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,h=this.material.length;p<h;p++)u.push(c(e.materials,this.material[p]));l.material=u}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let u=0;u<this.children.length;u++)l.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];l.animations.push(c(e.animations,p))}}if(i){const u=f(e.geometries),p=f(e.materials),h=f(e.textures),x=f(e.images),_=f(e.shapes),y=f(e.skeletons),v=f(e.animations),M=f(e.nodes);u.length>0&&(r.geometries=u),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),v.length>0&&(r.animations=v),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(u){const p=[];for(const h in u){const x=u[h];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new yt(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new yt,ha=new yt,gd=new yt,pa=new yt,Ms=new yt,Es=new yt,a_=new yt,_d=new yt,vd=new yt,xd=new yt,yd=new an,Sd=new an,bd=new an;class wi{constructor(e=new yt,i=new yt,r=new yt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),ha.subVectors(r,i),gd.subVectors(e,i);const f=Ai.dot(Ai),u=Ai.dot(ha),p=Ai.dot(gd),h=ha.dot(ha),x=ha.dot(gd),_=f*h-u*u;if(_===0)return c.set(0,0,0),null;const y=1/_,v=(h*p-u*x)*y,M=(f*x-u*p)*y;return c.set(1-v-M,M,v)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,f,u,p){return this.getBarycoord(e,i,r,l,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,pa.x),p.addScaledVector(f,pa.y),p.addScaledVector(u,pa.z),p)}static getInterpolatedAttribute(e,i,r,l,c,f){return yd.setScalar(0),Sd.setScalar(0),bd.setScalar(0),yd.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,r),bd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(yd,c.x),f.addScaledVector(Sd,c.y),f.addScaledVector(bd,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),ha.subVectors(e,i),Ai.cross(ha).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ai.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,u;Ms.subVectors(l,r),Es.subVectors(c,r),_d.subVectors(e,r);const p=Ms.dot(_d),h=Es.dot(_d);if(p<=0&&h<=0)return i.copy(r);vd.subVectors(e,l);const x=Ms.dot(vd),_=Es.dot(vd);if(x>=0&&_<=x)return i.copy(l);const y=p*_-x*h;if(y<=0&&p>=0&&x<=0)return f=p/(p-x),i.copy(r).addScaledVector(Ms,f);xd.subVectors(e,c);const v=Ms.dot(xd),M=Es.dot(xd);if(M>=0&&v<=M)return i.copy(c);const b=v*h-p*M;if(b<=0&&h>=0&&M<=0)return u=h/(h-M),i.copy(r).addScaledVector(Es,u);const S=x*M-v*_;if(S<=0&&_-x>=0&&v-M>=0)return a_.subVectors(c,l),u=(_-x)/(_-x+(v-M)),i.copy(l).addScaledVector(a_,u);const g=1/(S+b+y);return f=b*g,u=y*g,i.copy(r).addScaledVector(Ms,f).addScaledVector(Es,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Md(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class je{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=Vh(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Md(f,c,e+1/3),this.g=Md(f,c,e),this.b=Md(f,c,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],u=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const r=rv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):he("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return De.workingToColorSpace(On.copy(this),e),Math.round(Ee(On.r*255,0,255))*65536+Math.round(Ee(On.g*255,0,255))*256+Math.round(Ee(On.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),u=Math.min(r,l,c);let p,h;const x=(u+f)/2;if(u===f)p=0,h=0;else{const _=f-u;switch(h=x<=.5?_/(f+u):_/(2-f-u),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=x,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=pi){De.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Sc);const r=Wo(Qa.h,Sc.h,i),l=Wo(Qa.s,Sc.s,i),c=Wo(Qa.l,Sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new je;je.NAMES=rv;let KS=0;class Xc extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Us,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Id,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const u in c){const p=c[u];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qh extends Xc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new yt,bc=new Ge;let QS=0;class ki{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Vg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(e),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ds(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ds(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ds(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ds(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ds(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}}class sv extends ki{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class ov extends ki{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _i extends ki{constructor(e,i,r){super(new Float32Array(e),i,r)}}let JS=0;const hi=new rn,Ed=new ni,Ts=new yt,ei=new $o,Bo=new $o,_n=new yt;class Wi extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nv(e)?ov:sv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ve().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new _i(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new yt(-1/0,-1/0,-1/0),new yt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new yt,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const u=i[c];Bo.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(ei.min,Bo.min),ei.expandByPoint(_n),_n.addVectors(ei.max,Bo.max),ei.expandByPoint(_n)):(ei.expandByPoint(Bo.min),ei.expandByPoint(Bo.max))}ei.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const u=i[c],p=this.morphTargetsRelative;for(let h=0,x=u.count;h<x;h++)_n.fromBufferAttribute(u,h),p&&(Ts.fromBufferAttribute(e,h),_n.add(Ts)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),u=[],p=[];for(let W=0;W<r.count;W++)u[W]=new yt,p[W]=new yt;const h=new yt,x=new yt,_=new yt,y=new Ge,v=new Ge,M=new Ge,b=new yt,S=new yt;function g(W,C,I){h.fromBufferAttribute(r,W),x.fromBufferAttribute(r,C),_.fromBufferAttribute(r,I),y.fromBufferAttribute(c,W),v.fromBufferAttribute(c,C),M.fromBufferAttribute(c,I),x.sub(h),_.sub(h),v.sub(y),M.sub(y);const Z=1/(v.x*M.y-M.x*v.y);isFinite(Z)&&(b.copy(x).multiplyScalar(M.y).addScaledVector(_,-v.y).multiplyScalar(Z),S.copy(_).multiplyScalar(v.x).addScaledVector(x,-M.x).multiplyScalar(Z),u[W].add(b),u[C].add(b),u[I].add(b),p[W].add(S),p[C].add(S),p[I].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let W=0,C=A.length;W<C;++W){const I=A[W],Z=I.start,F=I.count;for(let j=Z,T=Z+F;j<T;j+=3)g(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const U=new yt,N=new yt,z=new yt,P=new yt;function O(W){z.fromBufferAttribute(l,W),P.copy(z);const C=u[W];U.copy(C),U.sub(z.multiplyScalar(z.dot(C))).normalize(),N.crossVectors(P,C);const Z=N.dot(p[W])<0?-1:1;f.setXYZW(W,U.x,U.y,U.z,Z)}for(let W=0,C=A.length;W<C;++W){const I=A[W],Z=I.start,F=I.count;for(let j=Z,T=Z+F;j<T;j+=3)O(e.getX(j+0)),O(e.getX(j+1)),O(e.getX(j+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,v=r.count;y<v;y++)r.setXYZ(y,0,0,0);const l=new yt,c=new yt,f=new yt,u=new yt,p=new yt,h=new yt,x=new yt,_=new yt;if(e)for(let y=0,v=e.count;y<v;y+=3){const M=e.getX(y+0),b=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),x.subVectors(f,c),_.subVectors(l,c),x.cross(_),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.fromBufferAttribute(r,S),u.add(x),p.add(x),h.add(x),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let y=0,v=i.count;y<v;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),x.subVectors(f,c),_.subVectors(l,c),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,p){const h=u.array,x=u.itemSize,_=u.normalized,y=new h.constructor(p.length*x);let v=0,M=0;for(let b=0,S=p.length;b<S;b++){u.isInterleavedBufferAttribute?v=p[b]*u.data.stride+u.offset:v=p[b]*x;for(let g=0;g<x;g++)y[M++]=h[v++]}return new ki(y,x,_)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wi,r=this.index.array,l=this.attributes;for(const u in l){const p=l[u],h=e(p,r);i.setAttribute(u,h)}const c=this.morphAttributes;for(const u in c){const p=[],h=c[u];for(let x=0,_=h.length;x<_;x++){const y=h[x],v=e(y,r);p.push(v)}i.morphAttributes[u]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,p=f.length;u<p;u++){const h=f[u];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],x=[];for(let _=0,y=h.length;_<y;_++){const v=h[_];x.push(v.toJSON(e.data))}x.length>0&&(l[p]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],_=c[h];for(let y=0,v=_.length;y<v;y++)x.push(_[y].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,x=f.length;h<x;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new rn,Mr=new av,Mc=new Wh,s_=new yt,Ec=new yt,Tc=new yt,Ac=new yt,Td=new yt,wc=new yt,o_=new yt,Rc=new yt;class Vi extends ni{constructor(e=new Wi,i=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const u=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const u=this.morphTargetInfluences;if(c&&u){wc.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const x=u[p],_=c[p];x!==0&&(Td.fromBufferAttribute(_,e),f?wc.addScaledVector(Td,x):wc.addScaledVector(Td.sub(i),x))}i.add(wc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(c),Mr.copy(e.ray).recast(e.near),!(Mc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Mc,s_)===null||Mr.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),Mr.copy(e.ray).applyMatrix4(r_),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Mr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,u=c.index,p=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,y=c.groups,v=c.drawRange;if(u!==null)if(Array.isArray(f))for(let M=0,b=y.length;M<b;M++){const S=y[M],g=f[S.materialIndex],A=Math.max(S.start,v.start),U=Math.min(u.count,Math.min(S.start+S.count,v.start+v.count));for(let N=A,z=U;N<z;N+=3){const P=u.getX(N),O=u.getX(N+1),W=u.getX(N+2);l=Cc(this,g,e,r,h,x,_,P,O,W),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,v.start),b=Math.min(u.count,v.start+v.count);for(let S=M,g=b;S<g;S+=3){const A=u.getX(S),U=u.getX(S+1),N=u.getX(S+2);l=Cc(this,f,e,r,h,x,_,A,U,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,b=y.length;M<b;M++){const S=y[M],g=f[S.materialIndex],A=Math.max(S.start,v.start),U=Math.min(p.count,Math.min(S.start+S.count,v.start+v.count));for(let N=A,z=U;N<z;N+=3){const P=N,O=N+1,W=N+2;l=Cc(this,g,e,r,h,x,_,P,O,W),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,v.start),b=Math.min(p.count,v.start+v.count);for(let S=M,g=b;S<g;S+=3){const A=S,U=S+1,N=S+2;l=Cc(this,f,e,r,h,x,_,A,U,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function $S(o,e,i,r,l,c,f,u){let p;if(e.side===jn?p=r.intersectTriangle(f,c,l,!0,u):p=r.intersectTriangle(l,c,f,e.side===nr,u),p===null)return null;Rc.copy(u),Rc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Rc);return h<i.near||h>i.far?null:{distance:h,point:Rc.clone(),object:o}}function Cc(o,e,i,r,l,c,f,u,p,h){o.getVertexPosition(u,Ec),o.getVertexPosition(p,Tc),o.getVertexPosition(h,Ac);const x=$S(o,e,i,r,Ec,Tc,Ac,o_);if(x){const _=new yt;wi.getBarycoord(o_,Ec,Tc,Ac,_),l&&(x.uv=wi.getInterpolatedAttribute(l,u,p,h,_,new Ge)),c&&(x.uv1=wi.getInterpolatedAttribute(c,u,p,h,_,new Ge)),f&&(x.normal=wi.getInterpolatedAttribute(f,u,p,h,_,new yt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:u,b:p,c:h,normal:new yt,materialIndex:0};wi.getNormal(Ec,Tc,Ac,y.normal),x.face=y,x.barycoord=_}return x}class tl extends Wi{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const u=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],h=[],x=[],_=[];let y=0,v=0;M("z","y","x",-1,-1,r,i,e,f,c,0),M("z","y","x",1,-1,r,i,-e,f,c,1),M("x","z","y",1,1,e,r,i,l,f,2),M("x","z","y",1,-1,e,r,-i,l,f,3),M("x","y","z",1,-1,e,i,r,l,c,4),M("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new _i(h,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(_,2));function M(b,S,g,A,U,N,z,P,O,W,C){const I=N/O,Z=z/W,F=N/2,j=z/2,T=P/2,K=O+1,V=W+1;let G=0,nt=0;const J=new yt;for(let ht=0;ht<V;ht++){const L=ht*Z-j;for(let X=0;X<K;X++){const ct=X*I-F;J[b]=ct*A,J[S]=L*U,J[g]=T,h.push(J.x,J.y,J.z),J[b]=0,J[S]=0,J[g]=P>0?1:-1,x.push(J.x,J.y,J.z),_.push(X/O),_.push(1-ht/W),G+=1}}for(let ht=0;ht<W;ht++)for(let L=0;L<O;L++){const X=y+L+K*ht,ct=y+L+K*(ht+1),dt=y+(L+1)+K*(ht+1),vt=y+(L+1)+K*ht;p.push(X,ct,vt),p.push(ct,dt,vt),nt+=6}u.addGroup(v,nt,C),v+=nt,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Is(o[i]);for(const l in r)e[l]=r[l]}return e}function t1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function lv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const e1={clone:Is,merge:Bn};var n1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Xc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n1,this.fragmentShader=i1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=t1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class cv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new yt,l_=new Ge,c_=new Ge;class mi extends cv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/h,l*=f.width/p,r*=f.height/h}const u=this.filmOffset;u!==0&&(c+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,ws=1;class a1 extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(As,ws,e,i);l.layers=this.layers,this.add(l);const c=new mi(As,ws,e,i);c.layers=this.layers,this.add(c);const f=new mi(As,ws,e,i);f.layers=this.layers,this.add(f);const u=new mi(As,ws,e,i);u.layers=this.layers,this.add(u);const p=new mi(As,ws,e,i);p.layers=this.layers,this.add(p);const h=new mi(As,ws,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,u,p]=i;for(const h of i)this.remove(h);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,u,p,h,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,u),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,y,v),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class uv extends Pn{constructor(e=[],i=Nr,r,l,c,f,u,p,h,x){super(e,i,r,l,c,f,u,p,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fv extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new uv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new tl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:ga});c.uniforms.tEquirect.value=i;const f=new Vi(l,c),u=i.minFilter;return i.minFilter===Dr&&(i.minFilter=zn),new a1(1,10,this).update(e,f),i.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Dc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new yt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new yt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new yt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new yt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const u=this._targetRay,p=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,r),g=this._getHandJoint(h,b);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const x=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],y=x.position.distanceTo(_.position),v=.02,M=.005;h.inputState.pinching&&y>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(u.matrix.fromArray(l.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,l.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(l.linearVelocity)):u.hasLinearVelocity=!1,l.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(l.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return u!==null&&(u.visible=l!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class s1 extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class o1 extends Pn{constructor(e=null,i=1,r=1,l,c,f,u,p,h=Dn,x=Dn,_,y){super(null,f,u,p,h,x,l,c,_,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new yt,l1=new yt,c1=new ve;class wr{constructor(e=new yt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=wd.subVectors(r,i).cross(l1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(wd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||c1.getNormalMatrix(e),l=this.coplanarPoint(wd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Wh,u1=new Ge(.5,.5),Uc=new yt;class dv{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,f=new wr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const u=this.planes;return u[0].copy(e),u[1].copy(i),u[2].copy(r),u[3].copy(l),u[4].copy(c),u[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Fi,r=!1){const l=this.planes,c=e.elements,f=c[0],u=c[1],p=c[2],h=c[3],x=c[4],_=c[5],y=c[6],v=c[7],M=c[8],b=c[9],S=c[10],g=c[11],A=c[12],U=c[13],N=c[14],z=c[15];if(l[0].setComponents(h-f,v-x,g-M,z-A).normalize(),l[1].setComponents(h+f,v+x,g+M,z+A).normalize(),l[2].setComponents(h+u,v+_,g+b,z+U).normalize(),l[3].setComponents(h-u,v-_,g-b,z-U).normalize(),r)l[4].setComponents(p,y,S,N).normalize(),l[5].setComponents(h-p,v-y,g-S,z-N).normalize();else if(l[4].setComponents(h-p,v-y,g-S,z-N).normalize(),i===Fi)l[5].setComponents(h+p,v+y,g+S,z+N).normalize();else if(i===Gc)l[5].setComponents(p,y,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=u1.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qo extends Pn{constructor(e,i,r=Gi,l,c,f,u=Dn,p=Dn,h,x=xa,_=1){if(x!==xa&&x!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:_};super(y,l,c,f,u,p,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class f1 extends Qo{constructor(e,i=Gi,r=Nr,l,c,f=Dn,u=Dn,p,h=xa){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,r,l,c,f,u,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wc extends Wi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,u=Math.floor(r),p=Math.floor(l),h=u+1,x=p+1,_=e/u,y=i/p,v=[],M=[],b=[],S=[];for(let g=0;g<x;g++){const A=g*y-f;for(let U=0;U<h;U++){const N=U*_-c;M.push(N,-A,0),b.push(0,0,1),S.push(U/u),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let A=0;A<u;A++){const U=A+h*g,N=A+h*(g+1),z=A+1+h*(g+1),P=A+1+h*g;v.push(U,N,P),v.push(N,z,P)}this.setIndex(v),this.setAttribute("position",new _i(M,3)),this.setAttribute("normal",new _i(b,3)),this.setAttribute("uv",new _i(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yh extends Wi{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:u},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+u,Math.PI);let h=0;const x=[],_=new yt,y=new yt,v=[],M=[],b=[],S=[];for(let g=0;g<=r;g++){const A=[],U=g/r;let N=0;g===0&&f===0?N=.5/i:g===r&&p===Math.PI&&(N=-.5/i);for(let z=0;z<=i;z++){const P=z/i;_.x=-e*Math.cos(l+P*c)*Math.sin(f+U*u),_.y=e*Math.cos(f+U*u),_.z=e*Math.sin(l+P*c)*Math.sin(f+U*u),M.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),S.push(P+N,1-U),A.push(h++)}x.push(A)}for(let g=0;g<r;g++)for(let A=0;A<i;A++){const U=x[g][A+1],N=x[g][A],z=x[g+1][A],P=x[g+1][A+1];(g!==0||f>0)&&v.push(U,N,P),(g!==r-1||p<Math.PI)&&v.push(N,z,P)}this.setIndex(v),this.setAttribute("position",new _i(M,3)),this.setAttribute("normal",new _i(b,3)),this.setAttribute("uv",new _i(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class d1 extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h1 extends Xc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends Xc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class m1{constructor(e,i,r){const l=this;let c=!1,f=0,u=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){u++,c===!1&&l.onStart!==void 0&&l.onStart(x,f,u),c=!0},this.itemEnd=function(x){f++,l.onProgress!==void 0&&l.onProgress(x,f,u),f===u&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,_){return h.push(x,_),this},this.removeHandler=function(x){const _=h.indexOf(x);return _!==-1&&h.splice(_,2),this},this.getHandler=function(x){for(let _=0,y=h.length;_<y;_+=2){const v=h[_],M=h[_+1];if(v.global&&(v.lastIndex=0),v.test(x))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const g1=new m1;class Zh{constructor(e){this.manager=e!==void 0?e:g1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rs=new WeakMap;class _1 extends Zh{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=Rd.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0);else{let _=Rs.get(f);_===void 0&&(_=[],Rs.set(f,_)),_.push({onLoad:i,onError:l})}return f}const u=Yo("img");function p(){x(),i&&i(this);const _=Rs.get(this)||[];for(let y=0;y<_.length;y++){const v=_[y];v.onLoad&&v.onLoad(this)}Rs.delete(this),c.manager.itemEnd(e)}function h(_){x(),l&&l(_),Rd.remove(`image:${e}`);const y=Rs.get(this)||[];for(let v=0;v<y.length;v++){const M=y[v];M.onError&&M.onError(_)}Rs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){u.removeEventListener("load",p,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",p,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Rd.add(`image:${e}`,u),c.manager.itemStart(e),u.src=e,u}}class v1 extends Zh{constructor(e){super(e)}load(e,i,r,l){const c=new Pn,f=new _1(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(u){c.image=u,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class pv extends cv{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,u=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,u-=x*this.view.offsetY,p=u-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,u,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class x1 extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const u_=new rn;class y1{constructor(e,i,r=0,l=1/0){this.ray=new av(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new jh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return u_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(u_),this}intersectObject(e,i=!0,r=[]){return wh(e,this,r,i),r.sort(f_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)wh(e[l],this,r,i);return r.sort(f_),r}}function f_(o,e){return o.distance-e.distance}function wh(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let f=0,u=c.length;f<u;f++)wh(c[f],e,i,!0)}}function d_(o,e,i,r){const l=S1(r);switch(i){case $_:return o*e;case ev:return o*e/l.components*l.byteLength;case Fh:return o*e/l.components*l.byteLength;case zs:return o*e*2/l.components*l.byteLength;case Bh:return o*e*2/l.components*l.byteLength;case tv:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case Hh:return o*e*4/l.components*l.byteLength;case Pc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(e,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(e,8)/2;case $d:case th:case nh:case ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case eh:case ah:case rh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yh:case Sh:case bh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Th:case Ah:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function S1(o){switch(o){case gi:case Z_:return{byteLength:1,components:1};case jo:case K_:case va:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case Gi:case zh:case Ii:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mv(){let o=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function b1(o){const e=new WeakMap;function i(u,p){const h=u.array,x=u.usage,_=h.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,h,x),u.onUploadCallback();let v;if(h instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=o.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=o.SHORT;else if(h instanceof Uint32Array)v=o.UNSIGNED_INT;else if(h instanceof Int32Array)v=o.INT;else if(h instanceof Int8Array)v=o.BYTE;else if(h instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,p,h){const x=p.array,_=p.updateRanges;if(o.bindBuffer(h,u),_.length===0)o.bufferSubData(h,0,x);else{_.sort((v,M)=>v.start-M.start);let y=0;for(let v=1;v<_.length;v++){const M=_[y],b=_[v];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++y,_[y]=b)}_.length=y+1;for(let v=0,M=_.length;v<M;v++){const b=_[v];o.bufferSubData(h,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function c(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=e.get(u);p&&(o.deleteBuffer(p.buffer),e.delete(u))}function f(u,p){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const x=e.get(u);(!x||x.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,i(u,p));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,p),h.version=u.version}}return{get:l,remove:c,update:f}}var M1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,N1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,j1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:M1,alphahash_pars_fragment:E1,alphamap_fragment:T1,alphamap_pars_fragment:A1,alphatest_fragment:w1,alphatest_pars_fragment:R1,aomap_fragment:C1,aomap_pars_fragment:D1,batching_pars_vertex:U1,batching_vertex:N1,begin_vertex:L1,beginnormal_vertex:O1,bsdfs:z1,iridescence_fragment:P1,bumpmap_pars_fragment:I1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:k1,color_fragment:G1,color_pars_fragment:V1,color_pars_vertex:X1,color_vertex:W1,common:j1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:Z1,displacementmap_vertex:K1,emissivemap_fragment:Q1,emissivemap_pars_fragment:J1,colorspace_fragment:$1,colorspace_pars_fragment:tb,envmap_fragment:eb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:ab,envmap_physical_pars_fragment:mb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ob,fog_fragment:lb,fog_pars_fragment:cb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:fb,lights_lambert_fragment:db,lights_lambert_pars_fragment:hb,lights_pars_begin:pb,lights_toon_fragment:gb,lights_toon_pars_fragment:_b,lights_phong_fragment:vb,lights_phong_pars_fragment:xb,lights_physical_fragment:yb,lights_physical_pars_fragment:Sb,lights_fragment_begin:bb,lights_fragment_maps:Mb,lights_fragment_end:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Rb,map_fragment:Cb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Nb,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:zb,morphcolor_vertex:Pb,morphnormal_vertex:Ib,morphtarget_pars_vertex:Fb,morphtarget_vertex:Bb,normal_fragment_begin:Hb,normal_fragment_maps:kb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:Zb,opaque_fragment:Kb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:tM,dithering_pars_fragment:eM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:rM,shadowmap_vertex:sM,shadowmask_pars_fragment:oM,skinbase_vertex:lM,skinning_pars_vertex:cM,skinning_vertex:uM,skinnormal_vertex:fM,specularmap_fragment:dM,specularmap_pars_fragment:hM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:_M,uv_pars_fragment:vM,uv_pars_vertex:xM,uv_vertex:yM,worldpos_vertex:SM,background_vert:bM,background_frag:MM,backgroundCube_vert:EM,backgroundCube_frag:TM,cube_vert:AM,cube_frag:wM,depth_vert:RM,depth_frag:CM,distance_vert:DM,distance_frag:UM,equirect_vert:NM,equirect_frag:LM,linedashed_vert:OM,linedashed_frag:zM,meshbasic_vert:PM,meshbasic_frag:IM,meshlambert_vert:FM,meshlambert_frag:BM,meshmatcap_vert:HM,meshmatcap_frag:kM,meshnormal_vert:GM,meshnormal_frag:VM,meshphong_vert:XM,meshphong_frag:WM,meshphysical_vert:jM,meshphysical_frag:qM,meshtoon_vert:YM,meshtoon_frag:ZM,points_vert:KM,points_frag:QM,shadow_vert:JM,shadow_frag:$M,sprite_vert:tE,sprite_frag:eE},Yt={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},zi={basic:{uniforms:Bn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Bn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new je(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Bn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Bn([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Bn([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new je(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Bn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Bn([Yt.points,Yt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Bn([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Bn([Yt.common,Yt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Bn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Bn([Yt.sprite,Yt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Bn([Yt.common,Yt.displacementmap,{referencePosition:{value:new yt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Bn([Yt.lights,Yt.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};zi.physical={uniforms:Bn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Nc={r:0,b:0,g:0},Tr=new ya,nE=new rn;function iE(o,e,i,r,l,c,f){const u=new je(0);let p=c===!0?0:1,h,x,_=null,y=0,v=null;function M(U){let N=U.isScene===!0?U.background:null;return N&&N.isTexture&&(N=(U.backgroundBlurriness>0?i:e).get(N)),N}function b(U){let N=!1;const z=M(U);z===null?g(u,p):z&&z.isColor&&(g(z,1),N=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,N){const z=M(N);z&&(z.isCubeTexture||z.mapping===Vc)?(x===void 0&&(x=new Vi(new tl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Is(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(P,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Tr.copy(N.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(Tr)),x.material.toneMapped=De.getTransfer(z.colorSpace)!==ke,(_!==z||y!==z.version||v!==o.toneMapping)&&(x.material.needsUpdate=!0,_=z,y=z.version,v=o.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new Vi(new Wc(2,2),new Xi({name:"BackgroundMaterial",uniforms:Is(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=De.getTransfer(z.colorSpace)!==ke,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||y!==z.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,_=z,y=z.version,v=o.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function g(U,N){U.getRGB(Nc,lv(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,N,f)}function A(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,N=1){u.set(U),p=N,g(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,g(u,p)},render:b,addToRenderList:S,dispose:A}}function aE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function u(I,Z,F,j,T){let K=!1;const V=_(j,F,Z);c!==V&&(c=V,h(c.object)),K=v(I,j,F,T),K&&M(I,j,F,T),T!==null&&e.update(T,o.ELEMENT_ARRAY_BUFFER),(K||f)&&(f=!1,N(I,Z,F,j),T!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))}function p(){return o.createVertexArray()}function h(I){return o.bindVertexArray(I)}function x(I){return o.deleteVertexArray(I)}function _(I,Z,F){const j=F.wireframe===!0;let T=r[I.id];T===void 0&&(T={},r[I.id]=T);let K=T[Z.id];K===void 0&&(K={},T[Z.id]=K);let V=K[j];return V===void 0&&(V=y(p()),K[j]=V),V}function y(I){const Z=[],F=[],j=[];for(let T=0;T<i;T++)Z[T]=0,F[T]=0,j[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:F,attributeDivisors:j,object:I,attributes:{},index:null}}function v(I,Z,F,j){const T=c.attributes,K=Z.attributes;let V=0;const G=F.getAttributes();for(const nt in G)if(G[nt].location>=0){const ht=T[nt];let L=K[nt];if(L===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(L=I.instanceColor)),ht===void 0||ht.attribute!==L||L&&ht.data!==L.data)return!0;V++}return c.attributesNum!==V||c.index!==j}function M(I,Z,F,j){const T={},K=Z.attributes;let V=0;const G=F.getAttributes();for(const nt in G)if(G[nt].location>=0){let ht=K[nt];ht===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor));const L={};L.attribute=ht,ht&&ht.data&&(L.data=ht.data),T[nt]=L,V++}c.attributes=T,c.attributesNum=V,c.index=j}function b(){const I=c.newAttributes;for(let Z=0,F=I.length;Z<F;Z++)I[Z]=0}function S(I){g(I,0)}function g(I,Z){const F=c.newAttributes,j=c.enabledAttributes,T=c.attributeDivisors;F[I]=1,j[I]===0&&(o.enableVertexAttribArray(I),j[I]=1),T[I]!==Z&&(o.vertexAttribDivisor(I,Z),T[I]=Z)}function A(){const I=c.newAttributes,Z=c.enabledAttributes;for(let F=0,j=Z.length;F<j;F++)Z[F]!==I[F]&&(o.disableVertexAttribArray(F),Z[F]=0)}function U(I,Z,F,j,T,K,V){V===!0?o.vertexAttribIPointer(I,Z,F,T,K):o.vertexAttribPointer(I,Z,F,j,T,K)}function N(I,Z,F,j){b();const T=j.attributes,K=F.getAttributes(),V=Z.defaultAttributeValues;for(const G in K){const nt=K[G];if(nt.location>=0){let J=T[G];if(J===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const ht=J.normalized,L=J.itemSize,X=e.get(J);if(X===void 0)continue;const ct=X.buffer,dt=X.type,vt=X.bytesPerElement,rt=dt===o.INT||dt===o.UNSIGNED_INT||J.gpuType===zh;if(J.isInterleavedBufferAttribute){const xt=J.data,Nt=xt.stride,Pt=J.offset;if(xt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<nt.locationSize;Bt++)g(nt.location+Bt,xt.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Bt=0;Bt<nt.locationSize;Bt++)S(nt.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,ct);for(let Bt=0;Bt<nt.locationSize;Bt++)U(nt.location+Bt,L/nt.locationSize,dt,ht,Nt*vt,(Pt+L/nt.locationSize*Bt)*vt,rt)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<nt.locationSize;xt++)g(nt.location+xt,J.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<nt.locationSize;xt++)S(nt.location+xt);o.bindBuffer(o.ARRAY_BUFFER,ct);for(let xt=0;xt<nt.locationSize;xt++)U(nt.location+xt,L/nt.locationSize,dt,ht,L*vt,L/nt.locationSize*xt*vt,rt)}}else if(V!==void 0){const ht=V[G];if(ht!==void 0)switch(ht.length){case 2:o.vertexAttrib2fv(nt.location,ht);break;case 3:o.vertexAttrib3fv(nt.location,ht);break;case 4:o.vertexAttrib4fv(nt.location,ht);break;default:o.vertexAttrib1fv(nt.location,ht)}}}}A()}function z(){W();for(const I in r){const Z=r[I];for(const F in Z){const j=Z[F];for(const T in j)x(j[T].object),delete j[T];delete Z[F]}delete r[I]}}function P(I){if(r[I.id]===void 0)return;const Z=r[I.id];for(const F in Z){const j=Z[F];for(const T in j)x(j[T].object),delete j[T];delete Z[F]}delete r[I.id]}function O(I){for(const Z in r){const F=r[Z];if(F[I.id]===void 0)continue;const j=F[I.id];for(const T in j)x(j[T].object),delete j[T];delete F[I.id]}}function W(){C(),f=!0,c!==l&&(c=l,h(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:A}}function rE(o,e,i){let r;function l(h){r=h}function c(h,x){o.drawArrays(r,h,x),i.update(x,r,1)}function f(h,x,_){_!==0&&(o.drawArraysInstanced(r,h,x,_),i.update(x,r,_))}function u(h,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,_);let v=0;for(let M=0;M<_;M++)v+=x[M];i.update(v,r,1)}function p(h,x,_,y){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)f(h[M],x[M],y[M]);else{v.multiDrawArraysInstancedWEBGL(r,h,0,x,0,y,0,_);let M=0;for(let b=0;b<_;b++)M+=x[b]*y[b];i.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function sE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ri&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const W=O===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==gi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ii&&!W)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=p(h);x!==h&&(he("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:v,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:N,maxSamples:z,samples:P}}function oE(o){const e=this;let i=null,r=0,l=!1,c=!1;const f=new wr,u=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const v=_.length!==0||y||r!==0||l;return l=y,r=_.length,v},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=x(_,y,0)},this.setState=function(_,y,v){const M=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,g=o.get(_);if(!l||M===null||M.length===0||c&&!S)c?x(null):h();else{const A=c?0:r,U=A*4;let N=g.clippingState||null;p.value=N,N=x(M,y,U,v);for(let z=0;z!==U;++z)N[z]=i[z];g.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function h(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,v,M){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const g=v+b*4,A=y.matrixWorldInverse;u.getNormalMatrix(A),(S===null||S.length<g)&&(S=new Float32Array(g));for(let U=0,N=v;U!==b;++U,N+=4)f.copy(_[U]).applyMatrix4(A,u),f.normal.toArray(S,N),S[N+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function lE(o){let e=new WeakMap;function i(f,u){return u===Wd?f.mapping=Nr:u===jd&&(f.mapping=Os),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Wd||u===jd)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const h=new fv(p.height);return h.fromEquirectangularTexture(o,f),e.set(f,h),f.addEventListener("dispose",l),i(h.texture,f.mapping)}else return null}}return f}function l(f){const u=f.target;u.removeEventListener("dispose",l);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const er=4,h_=[.125,.215,.35,.446,.526,.582],Cr=20,cE=256,Ho=new pv,p_=new je;let Cd=null,Dd=0,Ud=0,Nd=!1;const uE=new yt;class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:u=uE}=c;Cd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,u),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Dd,Ud),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:va,format:Ri,colorSpace:Ps,depthBuffer:!1},l=g_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fE(c)),this._blurMaterial=hE(c,e,i),this._ggxMaterial=dE(c,e,i)}return l}_compileMaterial(e){const i=new Vi(new Wi,e);this._renderer.compile(i,Ho)}_sceneToCubeUV(e,i,r,l,c){const p=new mi(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,v=_.toneMapping;_.getClearColor(p_),_.toneMapping=Bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new tl,new qh({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let g=!1;const A=e.background;A?A.isColor&&(S.color.copy(A),e.background=null,g=!0):(S.color.copy(p_),g=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(p.up.set(0,h[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[U],c.y,c.z)):N===1?(p.up.set(0,0,h[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[U],c.z)):(p.up.set(0,h[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[U]));const z=this._cubeSize;Cs(l,N*z,U>2?z:0,z,z),_.setRenderTarget(l),g&&_.render(b,p),_.render(e,p)}_.toneMapping=v,_.autoClear=y,e.background=A}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const u=c.uniforms;u.envMap.value=e;const p=this._cubeSize;Cs(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Ho)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,u=this._lodMeshes[r];u.material=f;const p=f.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-x*x),y=0+h*1.25,v=_*y,{_lodMax:M}=this,b=this._sizeLods[r],S=3*b*(r>M-er?r-M+er:0),g=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=v,p.mipInt.value=M-i,Cs(c,S,g,3*b,2*b),l.setRenderTarget(c),l.render(u,Ho),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-r,Cs(e,S,g,3*b,2*b),l.setRenderTarget(e),l.render(u,Ho)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,u){const p=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=h;const y=h.uniforms,v=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*v):2*Math.PI/(2*Cr-1),b=c/M,S=isFinite(c)?1+Math.floor(x*b):Cr;S>Cr&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const g=[];let A=0;for(let O=0;O<Cr;++O){const W=O/b,C=Math.exp(-W*W/2);g.push(C),O===0?A+=C:O<S&&(A+=2*C)}for(let O=0;O<g.length;O++)g[O]=g[O]/A;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=f==="latitudinal",u&&(y.poleAxis.value=u);const{_lodMax:U}=this;y.dTheta.value=M,y.mipInt.value=U-r;const N=this._sizeLods[l],z=3*N*(l>U-er?l-U+er:0),P=4*(this._cubeSize-N);Cs(i,z,P,3*N,2*N),p.setRenderTarget(i),p.render(_,Ho)}}function fE(o){const e=[],i=[],r=[];let l=o;const c=o-er+1+h_.length;for(let f=0;f<c;f++){const u=Math.pow(2,l);e.push(u);let p=1/u;f>o-er?p=h_[f-o+er-1]:f===0&&(p=0),i.push(p);const h=1/(u-2),x=-h,_=1+h,y=[x,x,_,x,_,_,x,x,_,_,x,_],v=6,M=6,b=3,S=2,g=1,A=new Float32Array(b*M*v),U=new Float32Array(S*M*v),N=new Float32Array(g*M*v);for(let P=0;P<v;P++){const O=P%3*2/3-1,W=P>2?0:-1,C=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];A.set(C,b*M*P),U.set(y,S*M*P);const I=[P,P,P,P,P,P];N.set(I,g*M*P)}const z=new Wi;z.setAttribute("position",new ki(A,b)),z.setAttribute("uv",new ki(U,S)),z.setAttribute("faceIndex",new ki(N,g)),r.push(new Vi(z,null)),l>er&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function g_(o,e,i){const r=new Hi(o,e,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function dE(o,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function hE(o,e,i){const r=new Float32Array(Cr),l=new yt(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function __(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function v_(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pE(o){let e=new WeakMap,i=null;function r(u){if(u&&u.isTexture){const p=u.mapping,h=p===Wd||p===jd,x=p===Nr||p===Os;if(h||x){let _=e.get(u);const y=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==y)return i===null&&(i=new m_(o)),_=h?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const v=u.image;return h&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new m_(o)),_=h?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",c),_.texture):null}}}return u}function l(u){let p=0;const h=6;for(let x=0;x<h;x++)u[x]!==void 0&&p++;return p===h}function c(u){const p=u.target;p.removeEventListener("dispose",c);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function mE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zo("WebGLRenderer: "+r+" extension not supported."),l}}}function gE(o,e,i,r){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",f),delete l[y.id];const v=c.get(y);v&&(e.remove(v),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function u(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const v in y)e.update(y[v],o.ARRAY_BUFFER)}function h(_){const y=[],v=_.index,M=_.attributes.position;let b=0;if(v!==null){const A=v.array;b=v.version;for(let U=0,N=A.length;U<N;U+=3){const z=A[U+0],P=A[U+1],O=A[U+2];y.push(z,P,P,O,O,z)}}else if(M!==void 0){const A=M.array;b=M.version;for(let U=0,N=A.length/3-1;U<N;U+=3){const z=U+0,P=U+1,O=U+2;y.push(z,P,P,O,O,z)}}else return;const S=new(nv(y)?ov:sv)(y,1);S.version=b;const g=c.get(_);g&&e.remove(g),c.set(_,S)}function x(_){const y=c.get(_);if(y){const v=_.index;v!==null&&y.version<v.version&&h(_)}else h(_);return c.get(_)}return{get:u,update:p,getWireframeAttribute:x}}function _E(o,e,i){let r;function l(y){r=y}let c,f;function u(y){c=y.type,f=y.bytesPerElement}function p(y,v){o.drawElements(r,v,c,y*f),i.update(v,r,1)}function h(y,v,M){M!==0&&(o.drawElementsInstanced(r,v,c,y*f,M),i.update(v,r,M))}function x(y,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,y,0,M);let S=0;for(let g=0;g<M;g++)S+=v[g];i.update(S,r,1)}function _(y,v,M,b){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)h(y[g]/f,v[g],b[g]);else{S.multiDrawElementsInstancedWEBGL(r,v,0,c,y,0,b,0,M);let g=0;for(let A=0;A<M;A++)g+=v[A]*b[A];i.update(g,r,1)}}this.setMode=l,this.setIndex=u,this.render=p,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function vE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,u){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=u*(c/3);break;case o.LINES:i.lines+=u*(c/2);break;case o.LINE_STRIP:i.lines+=u*(c-1);break;case o.LINE_LOOP:i.lines+=u*c;break;case o.POINTS:i.points+=u*c;break;default:Ce("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xE(o,e,i){const r=new WeakMap,l=new an;function c(f,u,p){const h=f.morphTargetInfluences,x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(u);if(y===void 0||y.count!==_){let I=function(){W.dispose(),r.delete(u),u.removeEventListener("dispose",I)};var v=I;y!==void 0&&y.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let N=0;M===!0&&(N=1),b===!0&&(N=2),S===!0&&(N=3);let z=u.attributes.position.count*N,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*P*4*_),W=new iv(O,z,P,_);W.type=Ii,W.needsUpdate=!0;const C=N*4;for(let Z=0;Z<_;Z++){const F=g[Z],j=A[Z],T=U[Z],K=z*P*4*Z;for(let V=0;V<F.count;V++){const G=V*C;M===!0&&(l.fromBufferAttribute(F,V),O[K+G+0]=l.x,O[K+G+1]=l.y,O[K+G+2]=l.z,O[K+G+3]=0),b===!0&&(l.fromBufferAttribute(j,V),O[K+G+4]=l.x,O[K+G+5]=l.y,O[K+G+6]=l.z,O[K+G+7]=0),S===!0&&(l.fromBufferAttribute(T,V),O[K+G+8]=l.x,O[K+G+9]=l.y,O[K+G+10]=l.z,O[K+G+11]=T.itemSize===4?l.w:1)}}y={count:_,texture:W,size:new Ge(z,P)},r.set(u,y),u.addEventListener("dispose",I)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const b=u.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",h)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function yE(o,e,i,r){let l=new WeakMap;function c(p){const h=r.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==h&&(e.update(_),l.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),l.get(p)!==h&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,h))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==h&&(y.update(),l.set(y,h))}return _}function f(){l=new WeakMap}function u(p){const h=p.target;h.removeEventListener("dispose",u),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:c,dispose:f}}const SE={[k_]:"LINEAR_TONE_MAPPING",[G_]:"REINHARD_TONE_MAPPING",[V_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[q_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function bE(o,e,i,r,l){const c=new Hi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),f=new Hi(e,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),u=new Wi;u.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _i([0,2,0,0,2,0],2));const p=new d1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Vi(u,p),x=new pv(-1,1,1,-1,0,1);let _=null,y=null,v=!1,M,b=null,S=[],g=!1;this.setSize=function(A,U){c.setSize(A,U),f.setSize(A,U);for(let N=0;N<S.length;N++){const z=S[N];z.setSize&&z.setSize(A,U)}},this.setEffects=function(A){S=A,g=S.length>0&&S[0].isRenderPass===!0;const U=c.width,N=c.height;for(let z=0;z<S.length;z++){const P=S[z];P.setSize&&P.setSize(U,N)}},this.begin=function(A,U){if(v||A.toneMapping===Bi&&S.length===0)return!1;if(b=U,U!==null){const N=U.width,z=U.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return g===!1&&A.setRenderTarget(c),M=A.toneMapping,A.toneMapping=Bi,!0},this.hasRenderPass=function(){return g},this.end=function(A,U){A.toneMapping=M,v=!0;let N=c,z=f;for(let P=0;P<S.length;P++){const O=S[P];if(O.enabled!==!1&&(O.render(A,z,N,U),O.needsSwap!==!1)){const W=N;N=z,z=W}}if(_!==A.outputColorSpace||y!==A.toneMapping){_=A.outputColorSpace,y=A.toneMapping,p.defines={},De.getTransfer(_)===ke&&(p.defines.SRGB_TRANSFER="");const P=SE[y];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(b),A.render(h,x),b=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){c.dispose(),f.dispose(),u.dispose(),p.dispose()}}const gv=new Pn,Rh=new Qo(1,1),_v=new iv,vv=new GS,xv=new uv,x_=[],y_=[],S_=new Float32Array(16),b_=new Float32Array(9),M_=new Float32Array(4);function Hs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=x_[l];if(c===void 0&&(c=new Float32Array(l),x_[l]=c),e!==0){r.toArray(c,0);for(let f=1,u=0;f!==e;++f)u+=i,o[f].toArray(c,u)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function qc(o,e){let i=y_[e];i===void 0&&(i=new Int32Array(e),y_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function ME(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function EE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function TE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function AE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function wE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;M_.set(r),o.uniformMatrix2fv(this.addr,!1,M_),mn(i,r)}}function RE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;b_.set(r),o.uniformMatrix3fv(this.addr,!1,b_),mn(i,r)}}function CE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;S_.set(r),o.uniformMatrix4fv(this.addr,!1,S_),mn(i,r)}}function DE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function UE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function NE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function LE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function OE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function zE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function PE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function IE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function FE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Rh.compareFunction=i.isReversedDepthBuffer()?Gh:kh,c=Rh):c=gv,i.setTexture2D(e||c,l)}function BE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||vv,l)}function HE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||xv,l)}function kE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||_v,l)}function GE(o){switch(o){case 5126:return ME;case 35664:return EE;case 35665:return TE;case 35666:return AE;case 35674:return wE;case 35675:return RE;case 35676:return CE;case 5124:case 35670:return DE;case 35667:case 35671:return UE;case 35668:case 35672:return NE;case 35669:case 35673:return LE;case 5125:return OE;case 36294:return zE;case 36295:return PE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return BE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return kE}}function VE(o,e){o.uniform1fv(this.addr,e)}function XE(o,e){const i=Hs(e,this.size,2);o.uniform2fv(this.addr,i)}function WE(o,e){const i=Hs(e,this.size,3);o.uniform3fv(this.addr,i)}function jE(o,e){const i=Hs(e,this.size,4);o.uniform4fv(this.addr,i)}function qE(o,e){const i=Hs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function YE(o,e){const i=Hs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ZE(o,e){const i=Hs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function KE(o,e){o.uniform1iv(this.addr,e)}function QE(o,e){o.uniform2iv(this.addr,e)}function JE(o,e){o.uniform3iv(this.addr,e)}function $E(o,e){o.uniform4iv(this.addr,e)}function tT(o,e){o.uniform1uiv(this.addr,e)}function eT(o,e){o.uniform2uiv(this.addr,e)}function nT(o,e){o.uniform3uiv(this.addr,e)}function iT(o,e){o.uniform4uiv(this.addr,e)}function aT(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));let f;this.type===o.SAMPLER_2D_SHADOW?f=Rh:f=gv;for(let u=0;u!==l;++u)i.setTexture2D(e[u]||f,c[u])}function rT(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||vv,c[f])}function sT(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||xv,c[f])}function oT(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||_v,c[f])}function lT(o){switch(o){case 5126:return VE;case 35664:return XE;case 35665:return WE;case 35666:return jE;case 35674:return qE;case 35675:return YE;case 35676:return ZE;case 5124:case 35670:return KE;case 35667:case 35671:return QE;case 35668:case 35672:return JE;case 35669:case 35673:return $E;case 5125:return tT;case 36294:return eT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}class cT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=GE(i.type)}}class uT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lT(i.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const u=l[c];u.setValue(e,i[u.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function E_(o,e){o.seq.push(e),o.map[e.id]=e}function dT(o,e,i){const r=o.name,l=r.length;for(Ld.lastIndex=0;;){const c=Ld.exec(r),f=Ld.lastIndex;let u=c[1];const p=c[2]==="]",h=c[3];if(p&&(u=u|0),h===void 0||h==="["&&f+2===l){E_(i,h===void 0?new cT(u,o,e):new uT(u,o,e));break}else{let _=i.map[u];_===void 0&&(_=new fT(u),E_(i,_)),i=_}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const u=e.getActiveUniform(i,f),p=e.getUniformLocation(i,u.name);dT(u,p,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const u=i[c],p=r[u.id];p.needsUpdate!==!1&&u.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function T_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const hT=37297;let pT=0;function mT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${i[f]}`)}return r.join(`
`)}const A_=new ve;function gT(o){De._getMatrix(A_,De.workingColorSpace,o);const e=`mat3( ${A_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case kc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function w_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const u=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+mT(o.getShaderSource(e),u)}else return c}function _T(o,e){const i=gT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const vT={[k_]:"Linear",[G_]:"Reinhard",[V_]:"Cineon",[X_]:"ACESFilmic",[j_]:"AgX",[q_]:"Neutral",[W_]:"Custom"};function xT(o,e){const i=vT[e];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new yt;function yT(){De.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function bT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function MT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),f=c.name;let u=1;c.type===o.FLOAT_MAT2&&(u=2),c.type===o.FLOAT_MAT3&&(u=3),c.type===o.FLOAT_MAT4&&(u=4),i[f]={type:c.type,location:o.getAttribLocation(e,f),locationSize:u}}return i}function Vo(o){return o!==""}function R_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(o){return o.replace(ET,AT)}const TT=new Map;function AT(o,e){let i=xe[e];if(i===void 0){const r=TT.get(e);if(r!==void 0)i=xe[r],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ch(i)}const wT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(o){return o.replace(wT,RT)}function RT(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function U_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CT={[zc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function DT(o){return CT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UT={[Nr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function NT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":UT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const LT={[Os]:"ENVMAP_MODE_REFRACTION"};function OT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":LT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zT={[H_]:"ENVMAP_BLENDING_MULTIPLY",[oS]:"ENVMAP_BLENDING_MIX",[lS]:"ENVMAP_BLENDING_ADD"};function PT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":zT[o.combine]||"ENVMAP_BLENDING_NONE"}function IT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function FT(o,e,i,r){const l=o.getContext(),c=i.defines;let f=i.vertexShader,u=i.fragmentShader;const p=DT(i),h=NT(i),x=OT(i),_=PT(i),y=IT(i),v=ST(i),M=bT(c),b=l.createProgram();let S,g,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Vo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Vo).join(`
`),g.length>0&&(g+=`
`)):(S=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),g=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?xe.tonemapping_pars_fragment:"",i.toneMapping!==Bi?xT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,_T("linearToOutputTexel",i.outputColorSpace),yT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),f=Ch(f),f=R_(f,i),f=C_(f,i),u=Ch(u),u=R_(u,i),u=C_(u,i),f=D_(f),u=D_(u),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=A+S+f,N=A+g+u,z=T_(l,l.VERTEX_SHADER,U),P=T_(l,l.FRAGMENT_SHADER,N);l.attachShader(b,z),l.attachShader(b,P),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(Z){if(o.debug.checkShaderErrors){const F=l.getProgramInfoLog(b)||"",j=l.getShaderInfoLog(z)||"",T=l.getShaderInfoLog(P)||"",K=F.trim(),V=j.trim(),G=T.trim();let nt=!0,J=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,z,P);else{const ht=w_(l,z,"vertex"),L=w_(l,P,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+K+`
`+ht+`
`+L)}else K!==""?he("WebGLProgram: Program Info Log:",K):(V===""||G==="")&&(J=!1);J&&(Z.diagnostics={runnable:nt,programLog:K,vertexShader:{log:V,prefix:S},fragmentShader:{log:G,prefix:g}})}l.deleteShader(z),l.deleteShader(P),W=new Hc(l,b),C=MT(l,b)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=l.getProgramParameter(b,hT)),I},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=P,this}let BT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new kT(e),i.set(e,r)),r}}class kT{constructor(e){this.id=BT++,this.code=e,this.usedTimes=0}}function GT(o,e,i,r,l,c,f){const u=new jh,p=new HT,h=new Set,x=[],_=new Map,y=l.logarithmicDepthBuffer;let v=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return h.add(C),C===0?"uv":`uv${C}`}function S(C,I,Z,F,j){const T=F.fog,K=j.geometry,V=C.isMeshStandardMaterial?F.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||V),nt=G&&G.mapping===Vc?G.image.height:null,J=M[C.type];C.precision!==null&&(v=l.getMaxPrecision(C.precision),v!==C.precision&&he("WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,L=ht!==void 0?ht.length:0;let X=0;K.morphAttributes.position!==void 0&&(X=1),K.morphAttributes.normal!==void 0&&(X=2),K.morphAttributes.color!==void 0&&(X=3);let ct,dt,vt,rt;if(J){const Re=zi[J];ct=Re.vertexShader,dt=Re.fragmentShader}else ct=C.vertexShader,dt=C.fragmentShader,p.update(C),vt=p.getVertexShaderID(C),rt=p.getFragmentShaderID(C);const xt=o.getRenderTarget(),Nt=o.state.buffers.depth.getReversed(),Pt=j.isInstancedMesh===!0,Bt=j.isBatchedMesh===!0,ie=!!C.map,we=!!C.matcap,ue=!!G,R=!!C.aoMap,St=!!C.lightMap,ot=!!C.bumpMap,Y=!!C.normalMap,D=!!C.displacementMap,et=!!C.emissiveMap,Et=!!C.metalnessMap,At=!!C.roughnessMap,$=C.anisotropy>0,B=C.clearcoat>0,w=C.dispersion>0,q=C.iridescence>0,lt=C.sheen>0,Tt=C.transmission>0,ut=$&&!!C.anisotropyMap,Zt=B&&!!C.clearcoatMap,Ft=B&&!!C.clearcoatNormalMap,Kt=B&&!!C.clearcoatRoughnessMap,re=q&&!!C.iridescenceMap,Ct=q&&!!C.iridescenceThicknessMap,zt=lt&&!!C.sheenColorMap,qt=lt&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Gt=!!C.specularColorMap,me=!!C.specularIntensityMap,it=Tt&&!!C.transmissionMap,Vt=Tt&&!!C.thicknessMap,It=!!C.gradientMap,Xt=!!C.alphaMap,Ot=C.alphaTest>0,Lt=!!C.alphaHash,Ht=!!C.extensions;let fe=Bi;C.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Ie={shaderID:J,shaderType:C.type,shaderName:C.name,vertexShader:ct,fragmentShader:dt,defines:C.defines,customVertexShaderID:vt,customFragmentShaderID:rt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Bt,batchingColor:Bt&&j._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&j.instanceColor!==null,instancingMorph:Pt&&j.morphTexture!==null,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ps,alphaToCoverage:!!C.alphaToCoverage,map:ie,matcap:we,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:nt,aoMap:R,lightMap:St,bumpMap:ot,normalMap:Y,displacementMap:D,emissiveMap:et,normalMapObjectSpace:Y&&C.normalMapType===dS,normalMapTangentSpace:Y&&C.normalMapType===fS,metalnessMap:Et,roughnessMap:At,anisotropy:$,anisotropyMap:ut,clearcoat:B,clearcoatMap:Zt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:Kt,dispersion:w,iridescence:q,iridescenceMap:re,iridescenceThicknessMap:Ct,sheen:lt,sheenColorMap:zt,sheenRoughnessMap:qt,specularMap:kt,specularColorMap:Gt,specularIntensityMap:me,transmission:Tt,transmissionMap:it,thicknessMap:Vt,gradientMap:It,opaque:C.transparent===!1&&C.blending===Us&&C.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Ot,alphaHash:Lt,combine:C.combine,mapUv:ie&&b(C.map.channel),aoMapUv:R&&b(C.aoMap.channel),lightMapUv:St&&b(C.lightMap.channel),bumpMapUv:ot&&b(C.bumpMap.channel),normalMapUv:Y&&b(C.normalMap.channel),displacementMapUv:D&&b(C.displacementMap.channel),emissiveMapUv:et&&b(C.emissiveMap.channel),metalnessMapUv:Et&&b(C.metalnessMap.channel),roughnessMapUv:At&&b(C.roughnessMap.channel),anisotropyMapUv:ut&&b(C.anisotropyMap.channel),clearcoatMapUv:Zt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:qt&&b(C.sheenRoughnessMap.channel),specularMapUv:kt&&b(C.specularMap.channel),specularColorMapUv:Gt&&b(C.specularColorMap.channel),specularIntensityMapUv:me&&b(C.specularIntensityMap.channel),transmissionMapUv:it&&b(C.transmissionMap.channel),thicknessMapUv:Vt&&b(C.thicknessMap.channel),alphaMapUv:Xt&&b(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Y||$),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(ie||Xt),fog:!!T,useFog:C.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Nt,skinning:j.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:X,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:ie&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===ke,decodeVideoTextureEmissive:et&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===ke,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Pi,flipSided:C.side===jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||Bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ie.vertexUv1s=h.has(1),Ie.vertexUv2s=h.has(2),Ie.vertexUv3s=h.has(3),h.clear(),Ie}function g(C){const I=[];if(C.shaderID?I.push(C.shaderID):(I.push(C.customVertexShaderID),I.push(C.customFragmentShaderID)),C.defines!==void 0)for(const Z in C.defines)I.push(Z),I.push(C.defines[Z]);return C.isRawShaderMaterial===!1&&(A(I,C),U(I,C),I.push(o.outputColorSpace)),I.push(C.customProgramCacheKey),I.join()}function A(C,I){C.push(I.precision),C.push(I.outputColorSpace),C.push(I.envMapMode),C.push(I.envMapCubeUVHeight),C.push(I.mapUv),C.push(I.alphaMapUv),C.push(I.lightMapUv),C.push(I.aoMapUv),C.push(I.bumpMapUv),C.push(I.normalMapUv),C.push(I.displacementMapUv),C.push(I.emissiveMapUv),C.push(I.metalnessMapUv),C.push(I.roughnessMapUv),C.push(I.anisotropyMapUv),C.push(I.clearcoatMapUv),C.push(I.clearcoatNormalMapUv),C.push(I.clearcoatRoughnessMapUv),C.push(I.iridescenceMapUv),C.push(I.iridescenceThicknessMapUv),C.push(I.sheenColorMapUv),C.push(I.sheenRoughnessMapUv),C.push(I.specularMapUv),C.push(I.specularColorMapUv),C.push(I.specularIntensityMapUv),C.push(I.transmissionMapUv),C.push(I.thicknessMapUv),C.push(I.combine),C.push(I.fogExp2),C.push(I.sizeAttenuation),C.push(I.morphTargetsCount),C.push(I.morphAttributeCount),C.push(I.numDirLights),C.push(I.numPointLights),C.push(I.numSpotLights),C.push(I.numSpotLightMaps),C.push(I.numHemiLights),C.push(I.numRectAreaLights),C.push(I.numDirLightShadows),C.push(I.numPointLightShadows),C.push(I.numSpotLightShadows),C.push(I.numSpotLightShadowsWithMaps),C.push(I.numLightProbes),C.push(I.shadowMapType),C.push(I.toneMapping),C.push(I.numClippingPlanes),C.push(I.numClipIntersection),C.push(I.depthPacking)}function U(C,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),C.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),C.push(u.mask)}function N(C){const I=M[C.type];let Z;if(I){const F=zi[I];Z=e1.clone(F.uniforms)}else Z=C.uniforms;return Z}function z(C,I){let Z=_.get(I);return Z!==void 0?++Z.usedTimes:(Z=new FT(o,I,C,c),x.push(Z),_.set(I,Z)),Z}function P(C){if(--C.usedTimes===0){const I=x.indexOf(C);x[I]=x[x.length-1],x.pop(),_.delete(C.cacheKey),C.destroy()}}function O(C){p.remove(C)}function W(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:N,acquireProgram:z,releaseProgram:P,releaseShaderCache:O,programs:x,dispose:W}}function VT(){let o=new WeakMap;function e(f){return o.has(f)}function i(f){let u=o.get(f);return u===void 0&&(u={},o.set(f,u)),u}function r(f){o.delete(f)}function l(f,u,p){o.get(f)[u]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function XT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function N_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function L_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(_,y,v,M,b,S){let g=o[e];return g===void 0?(g={id:_.id,object:_,geometry:y,material:v,groupOrder:M,renderOrder:_.renderOrder,z:b,group:S},o[e]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=v,g.groupOrder=M,g.renderOrder=_.renderOrder,g.z=b,g.group=S),e++,g}function u(_,y,v,M,b,S){const g=f(_,y,v,M,b,S);v.transmission>0?r.push(g):v.transparent===!0?l.push(g):i.push(g)}function p(_,y,v,M,b,S){const g=f(_,y,v,M,b,S);v.transmission>0?r.unshift(g):v.transparent===!0?l.unshift(g):i.unshift(g)}function h(_,y){i.length>1&&i.sort(_||XT),r.length>1&&r.sort(y||N_),l.length>1&&l.sort(y||N_)}function x(){for(let _=e,y=o.length;_<y;_++){const v=o[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:u,unshift:p,finish:x,sort:h}}function WT(){let o=new WeakMap;function e(r,l){const c=o.get(r);let f;return c===void 0?(f=new L_,o.set(r,[f])):l>=c.length?(f=new L_,c.push(f)):f=c[l],f}function i(){o=new WeakMap}return{get:e,dispose:i}}function jT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new yt,color:new je};break;case"SpotLight":i={position:new yt,direction:new yt,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new yt,color:new je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new yt,skyColor:new je,groundColor:new je};break;case"RectAreaLight":i={color:new je,position:new yt,halfWidth:new yt,halfHeight:new yt};break}return o[e.id]=i,i}}}function qT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let YT=0;function ZT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function KT(o){const e=new jT,i=qT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new yt);const l=new yt,c=new rn,f=new rn;function u(h){let x=0,_=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let v=0,M=0,b=0,S=0,g=0,A=0,U=0,N=0,z=0,P=0,O=0;h.sort(ZT);for(let C=0,I=h.length;C<I;C++){const Z=h[C],F=Z.color,j=Z.intensity,T=Z.distance;let K=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===zs?K=Z.shadow.map.texture:K=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)x+=F.r*j,_+=F.g*j,y+=F.b*j;else if(Z.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(Z.sh.coefficients[V],j);O++}else if(Z.isDirectionalLight){const V=e.get(Z);if(V.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const G=Z.shadow,nt=i.get(Z);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,r.directionalShadow[v]=nt,r.directionalShadowMap[v]=K,r.directionalShadowMatrix[v]=Z.shadow.matrix,A++}r.directional[v]=V,v++}else if(Z.isSpotLight){const V=e.get(Z);V.position.setFromMatrixPosition(Z.matrixWorld),V.color.copy(F).multiplyScalar(j),V.distance=T,V.coneCos=Math.cos(Z.angle),V.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),V.decay=Z.decay,r.spot[b]=V;const G=Z.shadow;if(Z.map&&(r.spotLightMap[z]=Z.map,z++,G.updateMatrices(Z),Z.castShadow&&P++),r.spotLightMatrix[b]=G.matrix,Z.castShadow){const nt=i.get(Z);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,r.spotShadow[b]=nt,r.spotShadowMap[b]=K,N++}b++}else if(Z.isRectAreaLight){const V=e.get(Z);V.color.copy(F).multiplyScalar(j),V.halfWidth.set(Z.width*.5,0,0),V.halfHeight.set(0,Z.height*.5,0),r.rectArea[S]=V,S++}else if(Z.isPointLight){const V=e.get(Z);if(V.color.copy(Z.color).multiplyScalar(Z.intensity),V.distance=Z.distance,V.decay=Z.decay,Z.castShadow){const G=Z.shadow,nt=i.get(Z);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,nt.shadowCameraNear=G.camera.near,nt.shadowCameraFar=G.camera.far,r.pointShadow[M]=nt,r.pointShadowMap[M]=K,r.pointShadowMatrix[M]=Z.shadow.matrix,U++}r.point[M]=V,M++}else if(Z.isHemisphereLight){const V=e.get(Z);V.skyColor.copy(Z.color).multiplyScalar(j),V.groundColor.copy(Z.groundColor).multiplyScalar(j),r.hemi[g]=V,g++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Yt.LTC_FLOAT_1,r.rectAreaLTC2=Yt.LTC_FLOAT_2):(r.rectAreaLTC1=Yt.LTC_HALF_1,r.rectAreaLTC2=Yt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==v||W.pointLength!==M||W.spotLength!==b||W.rectAreaLength!==S||W.hemiLength!==g||W.numDirectionalShadows!==A||W.numPointShadows!==U||W.numSpotShadows!==N||W.numSpotMaps!==z||W.numLightProbes!==O)&&(r.directional.length=v,r.spot.length=b,r.rectArea.length=S,r.point.length=M,r.hemi.length=g,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=N+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,W.directionalLength=v,W.pointLength=M,W.spotLength=b,W.rectAreaLength=S,W.hemiLength=g,W.numDirectionalShadows=A,W.numPointShadows=U,W.numSpotShadows=N,W.numSpotMaps=z,W.numLightProbes=O,r.version=YT++)}function p(h,x){let _=0,y=0,v=0,M=0,b=0;const S=x.matrixWorldInverse;for(let g=0,A=h.length;g<A;g++){const U=h[g];if(U.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),_++}else if(U.isSpotLight){const N=r.spot[v];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),v++}else if(U.isRectAreaLight){const N=r.rectArea[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),y++}else if(U.isHemisphereLight){const N=r.hemi[b];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(S),b++}}}return{setup:u,setupView:p,state:r}}function O_(o){const e=new KT(o),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function f(x){r.push(x)}function u(){e.setup(i)}function p(x){e.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:u,setupLightsView:p,pushLight:c,pushShadow:f}}function QT(o){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let u;return f===void 0?(u=new O_(o),e.set(l,[u])):c>=f.length?(u=new O_(o),f.push(u)):u=f[c],u}function r(){e=new WeakMap}return{get:i,dispose:r}}const JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,t2=[new yt(1,0,0),new yt(-1,0,0),new yt(0,1,0),new yt(0,-1,0),new yt(0,0,1),new yt(0,0,-1)],e2=[new yt(0,-1,0),new yt(0,-1,0),new yt(0,0,1),new yt(0,0,-1),new yt(0,-1,0),new yt(0,-1,0)],z_=new rn,ko=new yt,Od=new yt;function n2(o,e,i){let r=new dv;const l=new Ge,c=new Ge,f=new an,u=new h1,p=new p1,h={},x=i.maxTextureSize,_={[nr]:jn,[jn]:nr,[Pi]:Pi},y=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:JT,fragmentShader:$T}),v=y.clone();v.defines.HORIZONTAL_PASS=1;const M=new Wi;M.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Vi(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let g=this.type;this.render=function(P,O,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;P.type===Gy&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=zc);const C=o.getRenderTarget(),I=o.getActiveCubeFace(),Z=o.getActiveMipmapLevel(),F=o.state;F.setBlending(ga),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=g!==this.type;j&&O.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(K=>K.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,K=P.length;T<K;T++){const V=P[T],G=V.shadow;if(G===void 0){he("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const nt=G.getFrameExtents();if(l.multiply(nt),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/nt.x),l.x=c.x*nt.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/nt.y),l.y=c.y*nt.y,G.mapSize.y=c.y)),G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Go){if(V.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Hi(l.x,l.y,{format:zs,type:va,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new Qo(l.x,l.y,Ii),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=xa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else{V.isPointLight?(G.map=new fv(l.x),G.map.depthTexture=new f1(l.x,Gi)):(G.map=new Hi(l.x,l.y),G.map.depthTexture=new Qo(l.x,l.y,Gi)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=xa;const ht=o.state.buffers.depth.getReversed();this.type===zc?(G.map.depthTexture.compareFunction=ht?Gh:kh,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn)}G.camera.updateProjectionMatrix()}const J=G.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<J;ht++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,ht),o.clear();else{ht===0&&(o.setRenderTarget(G.map),o.clear());const L=G.getViewport(ht);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),F.viewport(f)}if(V.isPointLight){const L=G.camera,X=G.matrix,ct=V.distance||L.far;ct!==L.far&&(L.far=ct,L.updateProjectionMatrix()),ko.setFromMatrixPosition(V.matrixWorld),L.position.copy(ko),Od.copy(L.position),Od.add(t2[ht]),L.up.copy(e2[ht]),L.lookAt(Od),L.updateMatrixWorld(),X.makeTranslation(-ko.x,-ko.y,-ko.z),z_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G._frustum.setFromProjectionMatrix(z_,L.coordinateSystem,L.reversedDepth)}else G.updateMatrices(V);r=G.getFrustum(),N(O,W,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===Go&&A(G,W),G.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(C,I,Z)};function A(P,O){const W=e.update(b);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hi(l.x,l.y,{format:zs,type:va})),y.uniforms.shadow_pass.value=P.map.depthTexture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(O,null,W,y,b,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(O,null,W,v,b,null)}function U(P,O,W,C){let I=null;const Z=W.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(Z!==void 0)I=Z;else if(I=W.isPointLight===!0?p:u,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const F=I.uuid,j=O.uuid;let T=h[F];T===void 0&&(T={},h[F]=T);let K=T[j];K===void 0&&(K=I.clone(),T[j]=K,O.addEventListener("dispose",z)),I=K}if(I.visible=O.visible,I.wireframe=O.wireframe,C===Go?I.side=O.shadowSide!==null?O.shadowSide:O.side:I.side=O.shadowSide!==null?O.shadowSide:_[O.side],I.alphaMap=O.alphaMap,I.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,I.map=O.map,I.clipShadows=O.clipShadows,I.clippingPlanes=O.clippingPlanes,I.clipIntersection=O.clipIntersection,I.displacementMap=O.displacementMap,I.displacementScale=O.displacementScale,I.displacementBias=O.displacementBias,I.wireframeLinewidth=O.wireframeLinewidth,I.linewidth=O.linewidth,W.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=o.properties.get(I);F.light=W}return I}function N(P,O,W,C,I){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&I===Go)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld);const j=e.update(P),T=P.material;if(Array.isArray(T)){const K=j.groups;for(let V=0,G=K.length;V<G;V++){const nt=K[V],J=T[nt.materialIndex];if(J&&J.visible){const ht=U(P,J,C,I);P.onBeforeShadow(o,P,O,W,j,ht,nt),o.renderBufferDirect(W,null,j,ht,P,nt),P.onAfterShadow(o,P,O,W,j,ht,nt)}}}else if(T.visible){const K=U(P,T,C,I);P.onBeforeShadow(o,P,O,W,j,K,null),o.renderBufferDirect(W,null,j,K,P,null),P.onAfterShadow(o,P,O,W,j,K,null)}}const F=P.children;for(let j=0,T=F.length;j<T;j++)N(F[j],O,W,C,I)}function z(P){P.target.removeEventListener("dispose",z);for(const W in h){const C=h[W],I=P.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}}const i2={[Fd]:Bd,[Hd]:Vd,[kd]:Xd,[Ls]:Gd,[Bd]:Fd,[Vd]:Hd,[Xd]:kd,[Gd]:Ls};function a2(o,e){function i(){let it=!1;const Vt=new an;let It=null;const Xt=new an(0,0,0,0);return{setMask:function(Ot){It!==Ot&&!it&&(o.colorMask(Ot,Ot,Ot,Ot),It=Ot)},setLocked:function(Ot){it=Ot},setClear:function(Ot,Lt,Ht,fe,Ie){Ie===!0&&(Ot*=fe,Lt*=fe,Ht*=fe),Vt.set(Ot,Lt,Ht,fe),Xt.equals(Vt)===!1&&(o.clearColor(Ot,Lt,Ht,fe),Xt.copy(Vt))},reset:function(){it=!1,It=null,Xt.set(-1,0,0,0)}}}function r(){let it=!1,Vt=!1,It=null,Xt=null,Ot=null;return{setReversed:function(Lt){if(Vt!==Lt){const Ht=e.get("EXT_clip_control");Lt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Vt=Lt;const fe=Ot;Ot=null,this.setClear(fe)}},getReversed:function(){return Vt},setTest:function(Lt){Lt?xt(o.DEPTH_TEST):Nt(o.DEPTH_TEST)},setMask:function(Lt){It!==Lt&&!it&&(o.depthMask(Lt),It=Lt)},setFunc:function(Lt){if(Vt&&(Lt=i2[Lt]),Xt!==Lt){switch(Lt){case Fd:o.depthFunc(o.NEVER);break;case Bd:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case Ls:o.depthFunc(o.LEQUAL);break;case kd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=Lt}},setLocked:function(Lt){it=Lt},setClear:function(Lt){Ot!==Lt&&(Vt&&(Lt=1-Lt),o.clearDepth(Lt),Ot=Lt)},reset:function(){it=!1,It=null,Xt=null,Ot=null,Vt=!1}}}function l(){let it=!1,Vt=null,It=null,Xt=null,Ot=null,Lt=null,Ht=null,fe=null,Ie=null;return{setTest:function(Re){it||(Re?xt(o.STENCIL_TEST):Nt(o.STENCIL_TEST))},setMask:function(Re){Vt!==Re&&!it&&(o.stencilMask(Re),Vt=Re)},setFunc:function(Re,Un,vi){(It!==Re||Xt!==Un||Ot!==vi)&&(o.stencilFunc(Re,Un,vi),It=Re,Xt=Un,Ot=vi)},setOp:function(Re,Un,vi){(Lt!==Re||Ht!==Un||fe!==vi)&&(o.stencilOp(Re,Un,vi),Lt=Re,Ht=Un,fe=vi)},setLocked:function(Re){it=Re},setClear:function(Re){Ie!==Re&&(o.clearStencil(Re),Ie=Re)},reset:function(){it=!1,Vt=null,It=null,Xt=null,Ot=null,Lt=null,Ht=null,fe=null,Ie=null}}}const c=new i,f=new r,u=new l,p=new WeakMap,h=new WeakMap;let x={},_={},y=new WeakMap,v=[],M=null,b=!1,S=null,g=null,A=null,U=null,N=null,z=null,P=null,O=new je(0,0,0),W=0,C=!1,I=null,Z=null,F=null,j=null,T=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(nt)[1]),V=G>=1):nt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),V=G>=2);let J=null,ht={};const L=o.getParameter(o.SCISSOR_BOX),X=o.getParameter(o.VIEWPORT),ct=new an().fromArray(L),dt=new an().fromArray(X);function vt(it,Vt,It,Xt){const Ot=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(it,Lt),o.texParameteri(it,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(it,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<It;Ht++)it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?o.texImage3D(Vt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(Vt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return Lt}const rt={};rt[o.TEXTURE_2D]=vt(o.TEXTURE_2D,o.TEXTURE_2D,1),rt[o.TEXTURE_CUBE_MAP]=vt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[o.TEXTURE_2D_ARRAY]=vt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),rt[o.TEXTURE_3D]=vt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),u.setClear(0),xt(o.DEPTH_TEST),f.setFunc(Ls),ot(!1),Y(Fg),xt(o.CULL_FACE),R(ga);function xt(it){x[it]!==!0&&(o.enable(it),x[it]=!0)}function Nt(it){x[it]!==!1&&(o.disable(it),x[it]=!1)}function Pt(it,Vt){return _[it]!==Vt?(o.bindFramebuffer(it,Vt),_[it]=Vt,it===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Vt),it===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Vt),!0):!1}function Bt(it,Vt){let It=v,Xt=!1;if(it){It=y.get(Vt),It===void 0&&(It=[],y.set(Vt,It));const Ot=it.textures;if(It.length!==Ot.length||It[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,Ht=Ot.length;Lt<Ht;Lt++)It[Lt]=o.COLOR_ATTACHMENT0+Lt;It.length=Ot.length,Xt=!0}}else It[0]!==o.BACK&&(It[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(It)}function ie(it){return M!==it?(o.useProgram(it),M=it,!0):!1}const we={[Rr]:o.FUNC_ADD,[Xy]:o.FUNC_SUBTRACT,[Wy]:o.FUNC_REVERSE_SUBTRACT};we[jy]=o.MIN,we[qy]=o.MAX;const ue={[Yy]:o.ZERO,[Zy]:o.ONE,[Ky]:o.SRC_COLOR,[Pd]:o.SRC_ALPHA,[nS]:o.SRC_ALPHA_SATURATE,[tS]:o.DST_COLOR,[Jy]:o.DST_ALPHA,[Qy]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[eS]:o.ONE_MINUS_DST_COLOR,[$y]:o.ONE_MINUS_DST_ALPHA,[iS]:o.CONSTANT_COLOR,[aS]:o.ONE_MINUS_CONSTANT_COLOR,[rS]:o.CONSTANT_ALPHA,[sS]:o.ONE_MINUS_CONSTANT_ALPHA};function R(it,Vt,It,Xt,Ot,Lt,Ht,fe,Ie,Re){if(it===ga){b===!0&&(Nt(o.BLEND),b=!1);return}if(b===!1&&(xt(o.BLEND),b=!0),it!==Vy){if(it!==S||Re!==C){if((g!==Rr||N!==Rr)&&(o.blendEquation(o.FUNC_ADD),g=Rr,N=Rr),Re)switch(it){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bg:o.blendFunc(o.ONE,o.ONE);break;case Hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",it);break}else switch(it){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Hg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kg:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",it);break}A=null,U=null,z=null,P=null,O.set(0,0,0),W=0,S=it,C=Re}return}Ot=Ot||Vt,Lt=Lt||It,Ht=Ht||Xt,(Vt!==g||Ot!==N)&&(o.blendEquationSeparate(we[Vt],we[Ot]),g=Vt,N=Ot),(It!==A||Xt!==U||Lt!==z||Ht!==P)&&(o.blendFuncSeparate(ue[It],ue[Xt],ue[Lt],ue[Ht]),A=It,U=Xt,z=Lt,P=Ht),(fe.equals(O)===!1||Ie!==W)&&(o.blendColor(fe.r,fe.g,fe.b,Ie),O.copy(fe),W=Ie),S=it,C=!1}function St(it,Vt){it.side===Pi?Nt(o.CULL_FACE):xt(o.CULL_FACE);let It=it.side===jn;Vt&&(It=!It),ot(It),it.blending===Us&&it.transparent===!1?R(ga):R(it.blending,it.blendEquation,it.blendSrc,it.blendDst,it.blendEquationAlpha,it.blendSrcAlpha,it.blendDstAlpha,it.blendColor,it.blendAlpha,it.premultipliedAlpha),f.setFunc(it.depthFunc),f.setTest(it.depthTest),f.setMask(it.depthWrite),c.setMask(it.colorWrite);const Xt=it.stencilWrite;u.setTest(Xt),Xt&&(u.setMask(it.stencilWriteMask),u.setFunc(it.stencilFunc,it.stencilRef,it.stencilFuncMask),u.setOp(it.stencilFail,it.stencilZFail,it.stencilZPass)),et(it.polygonOffset,it.polygonOffsetFactor,it.polygonOffsetUnits),it.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(it){I!==it&&(it?o.frontFace(o.CW):o.frontFace(o.CCW),I=it)}function Y(it){it!==Hy?(xt(o.CULL_FACE),it!==Z&&(it===Fg?o.cullFace(o.BACK):it===ky?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Nt(o.CULL_FACE),Z=it}function D(it){it!==F&&(V&&o.lineWidth(it),F=it)}function et(it,Vt,It){it?(xt(o.POLYGON_OFFSET_FILL),(j!==Vt||T!==It)&&(o.polygonOffset(Vt,It),j=Vt,T=It)):Nt(o.POLYGON_OFFSET_FILL)}function Et(it){it?xt(o.SCISSOR_TEST):Nt(o.SCISSOR_TEST)}function At(it){it===void 0&&(it=o.TEXTURE0+K-1),J!==it&&(o.activeTexture(it),J=it)}function $(it,Vt,It){It===void 0&&(J===null?It=o.TEXTURE0+K-1:It=J);let Xt=ht[It];Xt===void 0&&(Xt={type:void 0,texture:void 0},ht[It]=Xt),(Xt.type!==it||Xt.texture!==Vt)&&(J!==It&&(o.activeTexture(It),J=It),o.bindTexture(it,Vt||rt[it]),Xt.type=it,Xt.texture=Vt)}function B(){const it=ht[J];it!==void 0&&it.type!==void 0&&(o.bindTexture(it.type,null),it.type=void 0,it.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(it){Ce("WebGLState:",it)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(it){Ce("WebGLState:",it)}}function lt(){try{o.texSubImage2D(...arguments)}catch(it){Ce("WebGLState:",it)}}function Tt(){try{o.texSubImage3D(...arguments)}catch(it){Ce("WebGLState:",it)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(it){Ce("WebGLState:",it)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(it){Ce("WebGLState:",it)}}function Ft(){try{o.texStorage2D(...arguments)}catch(it){Ce("WebGLState:",it)}}function Kt(){try{o.texStorage3D(...arguments)}catch(it){Ce("WebGLState:",it)}}function re(){try{o.texImage2D(...arguments)}catch(it){Ce("WebGLState:",it)}}function Ct(){try{o.texImage3D(...arguments)}catch(it){Ce("WebGLState:",it)}}function zt(it){ct.equals(it)===!1&&(o.scissor(it.x,it.y,it.z,it.w),ct.copy(it))}function qt(it){dt.equals(it)===!1&&(o.viewport(it.x,it.y,it.z,it.w),dt.copy(it))}function kt(it,Vt){let It=h.get(Vt);It===void 0&&(It=new WeakMap,h.set(Vt,It));let Xt=It.get(it);Xt===void 0&&(Xt=o.getUniformBlockIndex(Vt,it.name),It.set(it,Xt))}function Gt(it,Vt){const Xt=h.get(Vt).get(it);p.get(Vt)!==Xt&&(o.uniformBlockBinding(Vt,Xt,it.__bindingPointIndex),p.set(Vt,Xt))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},J=null,ht={},_={},y=new WeakMap,v=[],M=null,b=!1,S=null,g=null,A=null,U=null,N=null,z=null,P=null,O=new je(0,0,0),W=0,C=!1,I=null,Z=null,F=null,j=null,T=null,ct.set(0,0,o.canvas.width,o.canvas.height),dt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),f.reset(),u.reset()}return{buffers:{color:c,depth:f,stencil:u},enable:xt,disable:Nt,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:ie,setBlending:R,setMaterial:St,setFlipSided:ot,setCullFace:Y,setLineWidth:D,setPolygonOffset:et,setScissorTest:Et,activeTexture:At,bindTexture:$,unbindTexture:B,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:re,texImage3D:Ct,updateUBOMapping:kt,uniformBlockBinding:Gt,texStorage2D:Ft,texStorage3D:Kt,texSubImage2D:lt,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:zt,viewport:qt,reset:me}}function r2(o,e,i,r,l,c,f){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,x=new WeakMap;let _;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,w){return v?new OffscreenCanvas(B,w):Yo("canvas")}function b(B,w,q){let lt=1;const Tt=$(B);if((Tt.width>q||Tt.height>q)&&(lt=q/Math.max(Tt.width,Tt.height)),lt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ut=Math.floor(lt*Tt.width),Zt=Math.floor(lt*Tt.height);_===void 0&&(_=M(ut,Zt));const Ft=w?M(ut,Zt):_;return Ft.width=ut,Ft.height=Zt,Ft.getContext("2d").drawImage(B,0,0,ut,Zt),he("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ut+"x"+Zt+")."),Ft}else return"data"in B&&he("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),B;return B}function S(B){return B.generateMipmaps}function g(B){o.generateMipmap(B)}function A(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(B,w,q,lt,Tt=!1){if(B!==null){if(o[B]!==void 0)return o[B];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ut=w;if(w===o.RED&&(q===o.FLOAT&&(ut=o.R32F),q===o.HALF_FLOAT&&(ut=o.R16F),q===o.UNSIGNED_BYTE&&(ut=o.R8)),w===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.R8UI),q===o.UNSIGNED_SHORT&&(ut=o.R16UI),q===o.UNSIGNED_INT&&(ut=o.R32UI),q===o.BYTE&&(ut=o.R8I),q===o.SHORT&&(ut=o.R16I),q===o.INT&&(ut=o.R32I)),w===o.RG&&(q===o.FLOAT&&(ut=o.RG32F),q===o.HALF_FLOAT&&(ut=o.RG16F),q===o.UNSIGNED_BYTE&&(ut=o.RG8)),w===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),q===o.UNSIGNED_INT&&(ut=o.RG32UI),q===o.BYTE&&(ut=o.RG8I),q===o.SHORT&&(ut=o.RG16I),q===o.INT&&(ut=o.RG32I)),w===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),q===o.UNSIGNED_INT&&(ut=o.RGB32UI),q===o.BYTE&&(ut=o.RGB8I),q===o.SHORT&&(ut=o.RGB16I),q===o.INT&&(ut=o.RGB32I)),w===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),q===o.BYTE&&(ut=o.RGBA8I),q===o.SHORT&&(ut=o.RGBA16I),q===o.INT&&(ut=o.RGBA32I)),w===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),w===o.RGBA){const Zt=Tt?kc:De.getTransfer(lt);q===o.FLOAT&&(ut=o.RGBA32F),q===o.HALF_FLOAT&&(ut=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ut=Zt===ke?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function N(B,w){let q;return B?w===null||w===Gi||w===qo?q=o.DEPTH24_STENCIL8:w===Ii?q=o.DEPTH32F_STENCIL8:w===jo&&(q=o.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===qo?q=o.DEPTH_COMPONENT24:w===Ii?q=o.DEPTH_COMPONENT32F:w===jo&&(q=o.DEPTH_COMPONENT16),q}function z(B,w){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Dn&&B.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?w.mipmaps.length:1}function P(B){const w=B.target;w.removeEventListener("dispose",P),W(w),w.isVideoTexture&&x.delete(w)}function O(B){const w=B.target;w.removeEventListener("dispose",O),I(w)}function W(B){const w=r.get(B);if(w.__webglInit===void 0)return;const q=B.source,lt=y.get(q);if(lt){const Tt=lt[w.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&C(B),Object.keys(lt).length===0&&y.delete(q)}r.remove(B)}function C(B){const w=r.get(B);o.deleteTexture(w.__webglTexture);const q=B.source,lt=y.get(q);delete lt[w.__cacheKey],f.memory.textures--}function I(B){const w=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(w.__webglFramebuffer[lt]))for(let Tt=0;Tt<w.__webglFramebuffer[lt].length;Tt++)o.deleteFramebuffer(w.__webglFramebuffer[lt][Tt]);else o.deleteFramebuffer(w.__webglFramebuffer[lt]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[lt])}else{if(Array.isArray(w.__webglFramebuffer))for(let lt=0;lt<w.__webglFramebuffer.length;lt++)o.deleteFramebuffer(w.__webglFramebuffer[lt]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let lt=0;lt<w.__webglColorRenderbuffer.length;lt++)w.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[lt]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=B.textures;for(let lt=0,Tt=q.length;lt<Tt;lt++){const ut=r.get(q[lt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),f.memory.textures--),r.remove(q[lt])}r.remove(B)}let Z=0;function F(){Z=0}function j(){const B=Z;return B>=l.maxTextures&&he("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),Z+=1,B}function T(B){const w=[];return w.push(B.wrapS),w.push(B.wrapT),w.push(B.wrapR||0),w.push(B.magFilter),w.push(B.minFilter),w.push(B.anisotropy),w.push(B.internalFormat),w.push(B.format),w.push(B.type),w.push(B.generateMipmaps),w.push(B.premultiplyAlpha),w.push(B.flipY),w.push(B.unpackAlignment),w.push(B.colorSpace),w.join()}function K(B,w){const q=r.get(B);if(B.isVideoTexture&&Et(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&q.__version!==B.version){const lt=B.image;if(lt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(q,B,w);return}}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+w)}function V(B,w){const q=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){rt(q,B,w);return}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+w)}function G(B,w){const q=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){rt(q,B,w);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+w)}function nt(B,w){const q=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&q.__version!==B.version){xt(q,B,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+w)}const J={[qd]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[Yd]:o.MIRRORED_REPEAT},ht={[Dn]:o.NEAREST,[cS]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},L={[hS]:o.NEVER,[vS]:o.ALWAYS,[pS]:o.LESS,[kh]:o.LEQUAL,[mS]:o.EQUAL,[Gh]:o.GEQUAL,[gS]:o.GREATER,[_S]:o.NOTEQUAL};function X(B,w){if(w.type===Ii&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===ad||w.magFilter===hc||w.magFilter===Dr||w.minFilter===zn||w.minFilter===ad||w.minFilter===hc||w.minFilter===Dr)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,J[w.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,J[w.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,J[w.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,ht[w.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,ht[w.minFilter]),w.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,L[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dn||w.minFilter!==hc&&w.minFilter!==Dr||w.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(B,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ct(B,w){let q=!1;B.__webglInit===void 0&&(B.__webglInit=!0,w.addEventListener("dispose",P));const lt=w.source;let Tt=y.get(lt);Tt===void 0&&(Tt={},y.set(lt,Tt));const ut=T(w);if(ut!==B.__cacheKey){Tt[ut]===void 0&&(Tt[ut]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,q=!0),Tt[ut].usedTimes++;const Zt=Tt[B.__cacheKey];Zt!==void 0&&(Tt[B.__cacheKey].usedTimes--,Zt.usedTimes===0&&C(w)),B.__cacheKey=ut,B.__webglTexture=Tt[ut].texture}return q}function dt(B,w,q){return Math.floor(Math.floor(B/q)/w)}function vt(B,w,q,lt){const ut=B.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,q,lt,w.data);else{ut.sort((Ct,zt)=>Ct.start-zt.start);let Zt=0;for(let Ct=1;Ct<ut.length;Ct++){const zt=ut[Zt],qt=ut[Ct],kt=zt.start+zt.count,Gt=dt(qt.start,w.width,4),me=dt(zt.start,w.width,4);qt.start<=kt+1&&Gt===me&&dt(qt.start+qt.count-1,w.width,4)===Gt?zt.count=Math.max(zt.count,qt.start+qt.count-zt.start):(++Zt,ut[Zt]=qt)}ut.length=Zt+1;const Ft=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),re=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Ct=0,zt=ut.length;Ct<zt;Ct++){const qt=ut[Ct],kt=Math.floor(qt.start/4),Gt=Math.ceil(qt.count/4),me=kt%w.width,it=Math.floor(kt/w.width),Vt=Gt,It=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,me),o.pixelStorei(o.UNPACK_SKIP_ROWS,it),i.texSubImage2D(o.TEXTURE_2D,0,me,it,Vt,It,q,lt,w.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ft),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,re)}}function rt(B,w,q){let lt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(lt=o.TEXTURE_3D);const Tt=ct(B,w),ut=w.source;i.bindTexture(lt,B.__webglTexture,o.TEXTURE0+q);const Zt=r.get(ut);if(ut.version!==Zt.__version||Tt===!0){i.activeTexture(o.TEXTURE0+q);const Ft=De.getPrimaries(De.workingColorSpace),Kt=w.colorSpace===tr?null:De.getPrimaries(w.colorSpace),re=w.colorSpace===tr||Ft===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Ct=b(w.image,!1,l.maxTextureSize);Ct=At(w,Ct);const zt=c.convert(w.format,w.colorSpace),qt=c.convert(w.type);let kt=U(w.internalFormat,zt,qt,w.colorSpace,w.isVideoTexture);X(lt,w);let Gt;const me=w.mipmaps,it=w.isVideoTexture!==!0,Vt=Zt.__version===void 0||Tt===!0,It=ut.dataReady,Xt=z(w,Ct);if(w.isDepthTexture)kt=N(w.format===Ur,w.type),Vt&&(it?i.texStorage2D(o.TEXTURE_2D,1,kt,Ct.width,Ct.height):i.texImage2D(o.TEXTURE_2D,0,kt,Ct.width,Ct.height,0,zt,qt,null));else if(w.isDataTexture)if(me.length>0){it&&Vt&&i.texStorage2D(o.TEXTURE_2D,Xt,kt,me[0].width,me[0].height);for(let Ot=0,Lt=me.length;Ot<Lt;Ot++)Gt=me[Ot],it?It&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,Gt.width,Gt.height,zt,qt,Gt.data):i.texImage2D(o.TEXTURE_2D,Ot,kt,Gt.width,Gt.height,0,zt,qt,Gt.data);w.generateMipmaps=!1}else it?(Vt&&i.texStorage2D(o.TEXTURE_2D,Xt,kt,Ct.width,Ct.height),It&&vt(w,Ct,zt,qt)):i.texImage2D(o.TEXTURE_2D,0,kt,Ct.width,Ct.height,0,zt,qt,Ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Vt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,kt,me[0].width,me[0].height,Ct.depth);for(let Ot=0,Lt=me.length;Ot<Lt;Ot++)if(Gt=me[Ot],w.format!==Ri)if(zt!==null)if(it){if(It)if(w.layerUpdates.size>0){const Ht=d_(Gt.width,Gt.height,w.format,w.type);for(const fe of w.layerUpdates){const Ie=Gt.data.subarray(fe*Ht/Gt.data.BYTES_PER_ELEMENT,(fe+1)*Ht/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,fe,Gt.width,Gt.height,1,zt,Ie)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,Gt.width,Gt.height,Ct.depth,zt,Gt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ot,kt,Gt.width,Gt.height,Ct.depth,0,Gt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?It&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,Gt.width,Gt.height,Ct.depth,zt,qt,Gt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ot,kt,Gt.width,Gt.height,Ct.depth,0,zt,qt,Gt.data)}else{it&&Vt&&i.texStorage2D(o.TEXTURE_2D,Xt,kt,me[0].width,me[0].height);for(let Ot=0,Lt=me.length;Ot<Lt;Ot++)Gt=me[Ot],w.format!==Ri?zt!==null?it?It&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ot,0,0,Gt.width,Gt.height,zt,Gt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ot,kt,Gt.width,Gt.height,0,Gt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?It&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,Gt.width,Gt.height,zt,qt,Gt.data):i.texImage2D(o.TEXTURE_2D,Ot,kt,Gt.width,Gt.height,0,zt,qt,Gt.data)}else if(w.isDataArrayTexture)if(it){if(Vt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,kt,Ct.width,Ct.height,Ct.depth),It)if(w.layerUpdates.size>0){const Ot=d_(Ct.width,Ct.height,w.format,w.type);for(const Lt of w.layerUpdates){const Ht=Ct.data.subarray(Lt*Ot/Ct.data.BYTES_PER_ELEMENT,(Lt+1)*Ot/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,Ct.width,Ct.height,1,zt,qt,Ht)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,zt,qt,Ct.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Ct.width,Ct.height,Ct.depth,0,zt,qt,Ct.data);else if(w.isData3DTexture)it?(Vt&&i.texStorage3D(o.TEXTURE_3D,Xt,kt,Ct.width,Ct.height,Ct.depth),It&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,zt,qt,Ct.data)):i.texImage3D(o.TEXTURE_3D,0,kt,Ct.width,Ct.height,Ct.depth,0,zt,qt,Ct.data);else if(w.isFramebufferTexture){if(Vt)if(it)i.texStorage2D(o.TEXTURE_2D,Xt,kt,Ct.width,Ct.height);else{let Ot=Ct.width,Lt=Ct.height;for(let Ht=0;Ht<Xt;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,kt,Ot,Lt,0,zt,qt,null),Ot>>=1,Lt>>=1}}else if(me.length>0){if(it&&Vt){const Ot=$(me[0]);i.texStorage2D(o.TEXTURE_2D,Xt,kt,Ot.width,Ot.height)}for(let Ot=0,Lt=me.length;Ot<Lt;Ot++)Gt=me[Ot],it?It&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,zt,qt,Gt):i.texImage2D(o.TEXTURE_2D,Ot,kt,zt,qt,Gt);w.generateMipmaps=!1}else if(it){if(Vt){const Ot=$(Ct);i.texStorage2D(o.TEXTURE_2D,Xt,kt,Ot.width,Ot.height)}It&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,qt,Ct)}else i.texImage2D(o.TEXTURE_2D,0,kt,zt,qt,Ct);S(w)&&g(lt),Zt.__version=ut.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function xt(B,w,q){if(w.image.length!==6)return;const lt=ct(B,w),Tt=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+q);const ut=r.get(Tt);if(Tt.version!==ut.__version||lt===!0){i.activeTexture(o.TEXTURE0+q);const Zt=De.getPrimaries(De.workingColorSpace),Ft=w.colorSpace===tr?null:De.getPrimaries(w.colorSpace),Kt=w.colorSpace===tr||Zt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,Ct=w.image[0]&&w.image[0].isDataTexture,zt=[];for(let Lt=0;Lt<6;Lt++)!re&&!Ct?zt[Lt]=b(w.image[Lt],!0,l.maxCubemapSize):zt[Lt]=Ct?w.image[Lt].image:w.image[Lt],zt[Lt]=At(w,zt[Lt]);const qt=zt[0],kt=c.convert(w.format,w.colorSpace),Gt=c.convert(w.type),me=U(w.internalFormat,kt,Gt,w.colorSpace),it=w.isVideoTexture!==!0,Vt=ut.__version===void 0||lt===!0,It=Tt.dataReady;let Xt=z(w,qt);X(o.TEXTURE_CUBE_MAP,w);let Ot;if(re){it&&Vt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,me,qt.width,qt.height);for(let Lt=0;Lt<6;Lt++){Ot=zt[Lt].mipmaps;for(let Ht=0;Ht<Ot.length;Ht++){const fe=Ot[Ht];w.format!==Ri?kt!==null?it?It&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht,0,0,fe.width,fe.height,kt,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht,me,fe.width,fe.height,0,fe.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht,0,0,fe.width,fe.height,kt,Gt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht,me,fe.width,fe.height,0,kt,Gt,fe.data)}}}else{if(Ot=w.mipmaps,it&&Vt){Ot.length>0&&Xt++;const Lt=$(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,me,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(Ct){it?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,zt[Lt].width,zt[Lt].height,kt,Gt,zt[Lt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,me,zt[Lt].width,zt[Lt].height,0,kt,Gt,zt[Lt].data);for(let Ht=0;Ht<Ot.length;Ht++){const Ie=Ot[Ht].image[Lt].image;it?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht+1,0,0,Ie.width,Ie.height,kt,Gt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht+1,me,Ie.width,Ie.height,0,kt,Gt,Ie.data)}}else{it?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,kt,Gt,zt[Lt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,me,kt,Gt,zt[Lt]);for(let Ht=0;Ht<Ot.length;Ht++){const fe=Ot[Ht];it?It&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht+1,0,0,kt,Gt,fe.image[Lt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht+1,me,kt,Gt,fe.image[Lt])}}}S(w)&&g(o.TEXTURE_CUBE_MAP),ut.__version=Tt.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function Nt(B,w,q,lt,Tt,ut){const Zt=c.convert(q.format,q.colorSpace),Ft=c.convert(q.type),Kt=U(q.internalFormat,Zt,Ft,q.colorSpace),re=r.get(w),Ct=r.get(q);if(Ct.__renderTarget=w,!re.__hasExternalTextures){const zt=Math.max(1,w.width>>ut),qt=Math.max(1,w.height>>ut);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,ut,Kt,zt,qt,w.depth,0,Zt,Ft,null):i.texImage2D(Tt,ut,Kt,zt,qt,0,Zt,Ft,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),et(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,Tt,Ct.__webglTexture,0,D(w)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,Tt,Ct.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(B,w,q){if(o.bindRenderbuffer(o.RENDERBUFFER,B),w.depthBuffer){const lt=w.depthTexture,Tt=lt&&lt.isDepthTexture?lt.type:null,ut=N(w.stencilBuffer,Tt),Zt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;et(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,D(w),ut,w.width,w.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,D(w),ut,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ut,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,B)}else{const lt=w.textures;for(let Tt=0;Tt<lt.length;Tt++){const ut=lt[Tt],Zt=c.convert(ut.format,ut.colorSpace),Ft=c.convert(ut.type),Kt=U(ut.internalFormat,Zt,Ft,ut.colorSpace);et(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,D(w),Kt,w.width,w.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,D(w),Kt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(B,w,q){const lt=w.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=r.get(w.depthTexture);if(Tt.__renderTarget=w,(!Tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),lt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,w.depthTexture.addEventListener("dispose",P)),Tt.__webglTexture===void 0){Tt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Tt.__webglTexture),X(o.TEXTURE_CUBE_MAP,w.depthTexture);const re=c.convert(w.depthTexture.format),Ct=c.convert(w.depthTexture.type);let zt;w.depthTexture.format===xa?zt=o.DEPTH_COMPONENT24:w.depthTexture.format===Ur&&(zt=o.DEPTH24_STENCIL8);for(let qt=0;qt<6;qt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+qt,0,zt,w.width,w.height,0,re,Ct,null)}}else K(w.depthTexture,0);const ut=Tt.__webglTexture,Zt=D(w),Ft=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Kt=w.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(w.depthTexture.format===xa)et(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Kt,Ft,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Kt,Ft,ut,0);else if(w.depthTexture.format===Ur)et(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Kt,Ft,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Kt,Ft,ut,0);else throw new Error("Unknown depthTexture format")}function ie(B){const w=r.get(B),q=B.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==B.depthTexture){const lt=B.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),lt){const Tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,lt.removeEventListener("dispose",Tt)};lt.addEventListener("dispose",Tt),w.__depthDisposeCallback=Tt}w.__boundDepthTexture=lt}if(B.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let lt=0;lt<6;lt++)Bt(w.__webglFramebuffer[lt],B,lt);else{const lt=B.texture.mipmaps;lt&&lt.length>0?Bt(w.__webglFramebuffer[0],B,0):Bt(w.__webglFramebuffer,B,0)}else if(q){w.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[lt]),w.__webglDepthbuffer[lt]===void 0)w.__webglDepthbuffer[lt]=o.createRenderbuffer(),Pt(w.__webglDepthbuffer[lt],B,!1);else{const Tt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ut)}}else{const lt=B.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Pt(w.__webglDepthbuffer,B,!1);else{const Tt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function we(B,w,q){const lt=r.get(B);w!==void 0&&Nt(lt.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ie(B)}function ue(B){const w=B.texture,q=r.get(B),lt=r.get(w);B.addEventListener("dispose",O);const Tt=B.textures,ut=B.isWebGLCubeRenderTarget===!0,Zt=Tt.length>1;if(Zt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=w.version,f.memory.textures++),ut){q.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Ft]=[];for(let Kt=0;Kt<w.mipmaps.length;Kt++)q.__webglFramebuffer[Ft][Kt]=o.createFramebuffer()}else q.__webglFramebuffer[Ft]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)q.__webglFramebuffer[Ft]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ft=0,Kt=Tt.length;Ft<Kt;Ft++){const re=r.get(Tt[Ft]);re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture(),f.memory.textures++)}if(B.samples>0&&et(B)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Tt.length;Ft++){const Kt=Tt[Ft];q.__webglColorRenderbuffer[Ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ft]);const re=c.convert(Kt.format,Kt.colorSpace),Ct=c.convert(Kt.type),zt=U(Kt.internalFormat,re,Ct,Kt.colorSpace,B.isXRRenderTarget===!0),qt=D(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,zt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(q.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),X(o.TEXTURE_CUBE_MAP,w);for(let Ft=0;Ft<6;Ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let Kt=0;Kt<w.mipmaps.length;Kt++)Nt(q.__webglFramebuffer[Ft][Kt],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt);else Nt(q.__webglFramebuffer[Ft],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);S(w)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ft=0,Kt=Tt.length;Ft<Kt;Ft++){const re=Tt[Ft],Ct=r.get(re);let zt=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(zt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,Ct.__webglTexture),X(zt,re),Nt(q.__webglFramebuffer,B,re,o.COLOR_ATTACHMENT0+Ft,zt,0),S(re)&&g(zt)}i.unbindTexture()}else{let Ft=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ft=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ft,lt.__webglTexture),X(Ft,w),w.mipmaps&&w.mipmaps.length>0)for(let Kt=0;Kt<w.mipmaps.length;Kt++)Nt(q.__webglFramebuffer[Kt],B,w,o.COLOR_ATTACHMENT0,Ft,Kt);else Nt(q.__webglFramebuffer,B,w,o.COLOR_ATTACHMENT0,Ft,0);S(w)&&g(Ft),i.unbindTexture()}B.depthBuffer&&ie(B)}function R(B){const w=B.textures;for(let q=0,lt=w.length;q<lt;q++){const Tt=w[q];if(S(Tt)){const ut=A(B),Zt=r.get(Tt).__webglTexture;i.bindTexture(ut,Zt),g(ut),i.unbindTexture()}}}const St=[],ot=[];function Y(B){if(B.samples>0){if(et(B)===!1){const w=B.textures,q=B.width,lt=B.height;let Tt=o.COLOR_BUFFER_BIT;const ut=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(B),Ft=w.length>1;if(Ft)for(let re=0;re<w.length;re++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Kt=B.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let re=0;re<w.length;re++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),Ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[re]);const Ct=r.get(w[re]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,q,lt,0,0,q,lt,Tt,o.NEAREST),p===!0&&(St.length=0,ot.length=0,St.push(o.COLOR_ATTACHMENT0+re),B.depthBuffer&&B.resolveDepthBuffer===!1&&(St.push(ut),ot.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,St))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ft)for(let re=0;re<w.length;re++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[re]);const Ct=r.get(w[re]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.TEXTURE_2D,Ct,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const w=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function D(B){return Math.min(l.maxSamples,B.samples)}function et(B){const w=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(B){const w=f.render.frame;x.get(B)!==w&&(x.set(B,w),B.update())}function At(B,w){const q=B.colorSpace,lt=B.format,Tt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||q!==Ps&&q!==tr&&(De.getTransfer(q)===ke?(lt!==Ri||Tt!==gi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),w}function $(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=nt,this.rebindTextures=we,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function s2(o,e){function i(r,l=tr){let c;const f=De.getTransfer(l);if(r===gi)return o.UNSIGNED_BYTE;if(r===Ph)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ih)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===J_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Z_)return o.BYTE;if(r===K_)return o.SHORT;if(r===jo)return o.UNSIGNED_SHORT;if(r===zh)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===va)return o.HALF_FLOAT;if(r===$_)return o.ALPHA;if(r===tv)return o.RGB;if(r===Ri)return o.RGBA;if(r===xa)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===ev)return o.RED;if(r===Fh)return o.RED_INTEGER;if(r===zs)return o.RG;if(r===Bh)return o.RG_INTEGER;if(r===Hh)return o.RGBA_INTEGER;if(r===Pc||r===Ic||r===Fc||r===Bc)if(f===ke)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===th||r===eh||r===nh||r===ih||r===ah||r===rh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===$d||r===th)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===eh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===nh)return c.COMPRESSED_R11_EAC;if(r===ih)return c.COMPRESSED_SIGNED_R11_EAC;if(r===ah)return c.COMPRESSED_RG11_EAC;if(r===rh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_h)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yh||r===Sh||r===bh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yh)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mh||r===Eh||r===Th||r===Ah)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Mh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Eh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Th)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ah)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new hv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xi({vertexShader:o2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new Wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends Fs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,u="local-floor",p=1,h=null,x=null,_=null,y=null,v=null,M=null;const b=typeof XRWebGLBinding<"u",S=new c2,g={},A=i.getContextAttributes();let U=null,N=null;const z=[],P=[],O=new Ge;let W=null;const C=new mi;C.viewport=new an;const I=new mi;I.viewport=new an;const Z=[C,I],F=new x1;let j=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let xt=z[rt];return xt===void 0&&(xt=new Ad,z[rt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(rt){let xt=z[rt];return xt===void 0&&(xt=new Ad,z[rt]=xt),xt.getGripSpace()},this.getHand=function(rt){let xt=z[rt];return xt===void 0&&(xt=new Ad,z[rt]=xt),xt.getHandSpace()};function K(rt){const xt=P.indexOf(rt.inputSource);if(xt===-1)return;const Nt=z[xt];Nt!==void 0&&(Nt.update(rt.inputSource,rt.frame,h||f),Nt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function V(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",V),l.removeEventListener("inputsourceschange",G);for(let rt=0;rt<z.length;rt++){const xt=P[rt];xt!==null&&(P[rt]=null,z[rt].disconnect(xt))}j=null,T=null,S.reset();for(const rt in g)delete g[rt];e.setRenderTarget(U),v=null,y=null,_=null,l=null,N=null,vt.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,r.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){u=rt,r.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return y!==null?y:v},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",V),l.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Pt=null,Bt=null;A.depth&&(Bt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=A.stencil?Ur:xa,Pt=A.stencil?qo:Gi);const ie={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(ie),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new Hi(y.textureWidth,y.textureHeight,{format:Ri,type:gi,depthTexture:new Qo(y.textureWidth,y.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Nt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};v=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),N=new Hi(v.framebufferWidth,v.framebufferHeight,{format:Ri,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),h=null,f=await l.requestReferenceSpace(u),vt.setContext(l),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(rt){for(let xt=0;xt<rt.removed.length;xt++){const Nt=rt.removed[xt],Pt=P.indexOf(Nt);Pt>=0&&(P[Pt]=null,z[Pt].disconnect(Nt))}for(let xt=0;xt<rt.added.length;xt++){const Nt=rt.added[xt];let Pt=P.indexOf(Nt);if(Pt===-1){for(let ie=0;ie<z.length;ie++)if(ie>=P.length){P.push(Nt),Pt=ie;break}else if(P[ie]===null){P[ie]=Nt,Pt=ie;break}if(Pt===-1)break}const Bt=z[Pt];Bt&&Bt.connect(Nt)}}const nt=new yt,J=new yt;function ht(rt,xt,Nt){nt.setFromMatrixPosition(xt.matrixWorld),J.setFromMatrixPosition(Nt.matrixWorld);const Pt=nt.distanceTo(J),Bt=xt.projectionMatrix.elements,ie=Nt.projectionMatrix.elements,we=Bt[14]/(Bt[10]-1),ue=Bt[14]/(Bt[10]+1),R=(Bt[9]+1)/Bt[5],St=(Bt[9]-1)/Bt[5],ot=(Bt[8]-1)/Bt[0],Y=(ie[8]+1)/ie[0],D=we*ot,et=we*Y,Et=Pt/(-ot+Y),At=Et*-ot;if(xt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(At),rt.translateZ(Et),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Bt[10]===-1)rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const $=we+Et,B=ue+Et,w=D-At,q=et+(Pt-At),lt=R*ue/B*$,Tt=St*ue/B*$;rt.projectionMatrix.makePerspective(w,q,lt,Tt,$,B),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function L(rt,xt){xt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(xt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let xt=rt.near,Nt=rt.far;S.texture!==null&&(S.depthNear>0&&(xt=S.depthNear),S.depthFar>0&&(Nt=S.depthFar)),F.near=I.near=C.near=xt,F.far=I.far=C.far=Nt,(j!==F.near||T!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,T=F.far),F.layers.mask=rt.layers.mask|6,C.layers.mask=F.layers.mask&3,I.layers.mask=F.layers.mask&5;const Pt=rt.parent,Bt=F.cameras;L(F,Pt);for(let ie=0;ie<Bt.length;ie++)L(Bt[ie],Pt);Bt.length===2?ht(F,C,I):F.projectionMatrix.copy(C.projectionMatrix),X(rt,F,Pt)};function X(rt,xt,Nt){Nt===null?rt.matrix.copy(xt.matrixWorld):(rt.matrix.copy(Nt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(xt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Ko*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&v===null))return p},this.setFoveation=function(rt){p=rt,y!==null&&(y.fixedFoveation=rt),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=rt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(F)},this.getCameraTexture=function(rt){return g[rt]};let ct=null;function dt(rt,xt){if(x=xt.getViewerPose(h||f),M=xt,x!==null){const Nt=x.views;v!==null&&(e.setRenderTargetFramebuffer(N,v.framebuffer),e.setRenderTarget(N));let Pt=!1;Nt.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let ue=0;ue<Nt.length;ue++){const R=Nt[ue];let St=null;if(v!==null)St=v.getViewport(R);else{const Y=_.getViewSubImage(y,R);St=Y.viewport,ue===0&&(e.setRenderTargetTextures(N,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(N))}let ot=Z[ue];ot===void 0&&(ot=new mi,ot.layers.enable(ue),ot.viewport=new an,Z[ue]=ot),ot.matrix.fromArray(R.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(R.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(St.x,St.y,St.width,St.height),ue===0&&(F.matrix.copy(ot.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(ot)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const ue=_.getDepthInformation(Nt[0]);ue&&ue.isValid&&ue.texture&&S.init(ue,l.renderState)}if(Bt&&Bt.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let ue=0;ue<Nt.length;ue++){const R=Nt[ue].camera;if(R){let St=g[R];St||(St=new hv,g[R]=St);const ot=_.getCameraImage(R);St.sourceTexture=ot}}}}for(let Nt=0;Nt<z.length;Nt++){const Pt=P[Nt],Bt=z[Nt];Pt!==null&&Bt!==void 0&&Bt.update(Pt,xt,h||f)}ct&&ct(rt,xt),xt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xt}),M=null}const vt=new mv;vt.setAnimationLoop(dt),this.setAnimationLoop=function(rt){ct=rt},this.dispose=function(){}}}const Ar=new ya,f2=new rn;function d2(o,e){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,lv(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,A,U,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),x(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&v(S,g,N)):g.isMeshMatcapMaterial?(c(S,g),M(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),b(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&u(S,g)):g.isPointsMaterial?p(S,g,A,U):g.isSpriteMaterial?h(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===jn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===jn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const A=e.get(g),U=A.envMap,N=A.envMapRotation;U&&(S.envMap.value=U,Ar.copy(N),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(Ar)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function u(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,A,U){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*A,S.scale.value=U*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function x(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function v(S,g,A){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,g){g.matcap&&(S.matcap.value=g.matcap)}function b(S,g){const A=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function h2(o,e,i,r){let l={},c={},f=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,U){const N=U.program;r.uniformBlockBinding(A,N)}function h(A,U){let N=l[A.id];N===void 0&&(M(A),N=x(A),l[A.id]=N,A.addEventListener("dispose",S));const z=U.program;r.updateUBOMapping(A,z);const P=e.render.frame;c[A.id]!==P&&(y(A),c[A.id]=P)}function x(A){const U=_();A.__bindingPointIndex=U;const N=o.createBuffer(),z=A.__size,P=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,N),N}function _(){for(let A=0;A<u;A++)if(f.indexOf(A)===-1)return f.push(A),A;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const U=l[A.id],N=A.uniforms,z=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,O=N.length;P<O;P++){const W=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,I=W.length;C<I;C++){const Z=W[C];if(v(Z,P,C,z)===!0){const F=Z.__offset,j=Array.isArray(Z.value)?Z.value:[Z.value];let T=0;for(let K=0;K<j.length;K++){const V=j[K],G=b(V);typeof V=="number"||typeof V=="boolean"?(Z.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,F+T,Z.__data)):V.isMatrix3?(Z.__data[0]=V.elements[0],Z.__data[1]=V.elements[1],Z.__data[2]=V.elements[2],Z.__data[3]=0,Z.__data[4]=V.elements[3],Z.__data[5]=V.elements[4],Z.__data[6]=V.elements[5],Z.__data[7]=0,Z.__data[8]=V.elements[6],Z.__data[9]=V.elements[7],Z.__data[10]=V.elements[8],Z.__data[11]=0):(V.toArray(Z.__data,T),T+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,Z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(A,U,N,z){const P=A.value,O=U+"_"+N;if(z[O]===void 0)return typeof P=="number"||typeof P=="boolean"?z[O]=P:z[O]=P.clone(),!0;{const W=z[O];if(typeof P=="number"||typeof P=="boolean"){if(W!==P)return z[O]=P,!0}else if(W.equals(P)===!1)return W.copy(P),!0}return!1}function M(A){const U=A.uniforms;let N=0;const z=16;for(let O=0,W=U.length;O<W;O++){const C=Array.isArray(U[O])?U[O]:[U[O]];for(let I=0,Z=C.length;I<Z;I++){const F=C[I],j=Array.isArray(F.value)?F.value:[F.value];for(let T=0,K=j.length;T<K;T++){const V=j[T],G=b(V),nt=N%z,J=nt%G.boundary,ht=nt+J;N+=J,ht!==0&&z-ht<G.storage&&(N+=z-ht),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=N,N+=G.storage}}}const P=N%z;return P>0&&(N+=z-P),A.__size=N,A.__cache={},this}function b(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",A),U}function S(A){const U=A.target;U.removeEventListener("dispose",S);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const A in l)o.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:p,update:h,dispose:g}}const p2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function m2(){return Oi===null&&(Oi=new o1(p2,16,16,zs,va),Oi.name="DFG_LUT",Oi.minFilter=zn,Oi.magFilter=zn,Oi.wrapS=ma,Oi.wrapT=ma,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class g2{constructor(e={}){const{canvas:i=xS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:u=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:v=gi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=v,S=new Set([Hh,Bh,Fh]),g=new Set([gi,Gi,jo,qo,Ph,Ih]),A=new Uint32Array(4),U=new Int32Array(4);let N=null,z=null;const P=[],O=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=pi;let Z=0,F=0,j=null,T=-1,K=null;const V=new an,G=new an;let nt=null;const J=new je(0);let ht=0,L=i.width,X=i.height,ct=1,dt=null,vt=null;const rt=new an(0,0,L,X),xt=new an(0,0,L,X);let Nt=!1;const Pt=new dv;let Bt=!1,ie=!1;const we=new rn,ue=new yt,R=new an,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Y(){return j===null?ct:1}let D=r;function et(k,at){return i.getContext(k,at)}try{const k={alpha:!0,depth:l,stencil:c,antialias:u,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oh}`),i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Re,!1),D===null){const at="webgl2";if(D=et(at,k),D===null)throw et(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(k){throw Ce("WebGLRenderer: "+k.message),k}let Et,At,$,B,w,q,lt,Tt,ut,Zt,Ft,Kt,re,Ct,zt,qt,kt,Gt,me,it,Vt,It,Xt,Ot;function Lt(){Et=new mE(D),Et.init(),It=new s2(D,Et),At=new sE(D,Et,e,It),$=new a2(D,Et),At.reversedDepthBuffer&&y&&$.buffers.depth.setReversed(!0),B=new vE(D),w=new VT,q=new r2(D,Et,$,w,At,It,B),lt=new lE(C),Tt=new pE(C),ut=new b1(D),Xt=new aE(D,ut),Zt=new gE(D,ut,B,Xt),Ft=new yE(D,Zt,ut,B),me=new xE(D,At,q),qt=new oE(w),Kt=new GT(C,lt,Tt,Et,At,Xt,qt),re=new d2(C,w),Ct=new WT,zt=new QT(Et),Gt=new iE(C,lt,Tt,$,Ft,M,p),kt=new n2(C,Ft,At),Ot=new h2(D,B,At,$),it=new rE(D,Et,B),Vt=new _E(D,Et,B),B.programs=Kt.programs,C.capabilities=At,C.extensions=Et,C.properties=w,C.renderLists=Ct,C.shadowMap=kt,C.state=$,C.info=B}Lt(),b!==gi&&(W=new bE(b,i.width,i.height,l,c));const Ht=new u2(C,D);this.xr=Ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const k=Et.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=Et.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(k){k!==void 0&&(ct=k,this.setSize(L,X,!1))},this.getSize=function(k){return k.set(L,X)},this.setSize=function(k,at,bt=!0){if(Ht.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}L=k,X=at,i.width=Math.floor(k*ct),i.height=Math.floor(at*ct),bt===!0&&(i.style.width=k+"px",i.style.height=at+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,k,at)},this.getDrawingBufferSize=function(k){return k.set(L*ct,X*ct).floor()},this.setDrawingBufferSize=function(k,at,bt){L=k,X=at,ct=bt,i.width=Math.floor(k*bt),i.height=Math.floor(at*bt),this.setViewport(0,0,k,at)},this.setEffects=function(k){if(b===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let at=0;at<k.length;at++)if(k[at].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(V)},this.getViewport=function(k){return k.copy(rt)},this.setViewport=function(k,at,bt,gt){k.isVector4?rt.set(k.x,k.y,k.z,k.w):rt.set(k,at,bt,gt),$.viewport(V.copy(rt).multiplyScalar(ct).round())},this.getScissor=function(k){return k.copy(xt)},this.setScissor=function(k,at,bt,gt){k.isVector4?xt.set(k.x,k.y,k.z,k.w):xt.set(k,at,bt,gt),$.scissor(G.copy(xt).multiplyScalar(ct).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(k){$.setScissorTest(Nt=k)},this.setOpaqueSort=function(k){dt=k},this.setTransparentSort=function(k){vt=k},this.getClearColor=function(k){return k.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(k=!0,at=!0,bt=!0){let gt=0;if(k){let ft=!1;if(j!==null){const Wt=j.texture.format;ft=S.has(Wt)}if(ft){const Wt=j.texture.type,Qt=g.has(Wt),jt=Gt.getClearColor(),Jt=Gt.getClearAlpha(),te=jt.r,oe=jt.g,ee=jt.b;Qt?(A[0]=te,A[1]=oe,A[2]=ee,A[3]=Jt,D.clearBufferuiv(D.COLOR,0,A)):(U[0]=te,U[1]=oe,U[2]=ee,U[3]=Jt,D.clearBufferiv(D.COLOR,0,U))}else gt|=D.COLOR_BUFFER_BIT}at&&(gt|=D.DEPTH_BUFFER_BIT),bt&&(gt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),Gt.dispose(),Ct.dispose(),zt.dispose(),w.dispose(),lt.dispose(),Tt.dispose(),Ft.dispose(),Xt.dispose(),Ot.dispose(),Kt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Or),Ht.removeEventListener("sessionend",Vs),Ci.stop()};function fe(k){k.preventDefault(),jg("WebGLRenderer: Context Lost."),I=!0}function Ie(){jg("WebGLRenderer: Context Restored."),I=!1;const k=B.autoReset,at=kt.enabled,bt=kt.autoUpdate,gt=kt.needsUpdate,ft=kt.type;Lt(),B.autoReset=k,kt.enabled=at,kt.autoUpdate=bt,kt.needsUpdate=gt,kt.type=ft}function Re(k){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Un(k){const at=k.target;at.removeEventListener("dispose",Un),vi(at)}function vi(k){el(k),w.remove(k)}function el(k){const at=w.get(k).programs;at!==void 0&&(at.forEach(function(bt){Kt.releaseProgram(bt)}),k.isShaderMaterial&&Kt.releaseShaderCache(k))}this.renderBufferDirect=function(k,at,bt,gt,ft,Wt){at===null&&(at=St);const Qt=ft.isMesh&&ft.matrixWorld.determinant()<0,jt=ir(k,at,bt,gt,ft);$.setMaterial(gt,Qt);let Jt=bt.index,te=1;if(gt.wireframe===!0){if(Jt=Zt.getWireframeAttribute(bt),Jt===void 0)return;te=2}const oe=bt.drawRange,ee=bt.attributes.position;let le=oe.start*te,Le=(oe.start+oe.count)*te;Wt!==null&&(le=Math.max(le,Wt.start*te),Le=Math.min(Le,(Wt.start+Wt.count)*te)),Jt!==null?(le=Math.max(le,0),Le=Math.min(Le,Jt.count)):ee!=null&&(le=Math.max(le,0),Le=Math.min(Le,ee.count));const Qe=Le-le;if(Qe<0||Qe===1/0)return;Xt.setup(ft,gt,jt,bt,Jt);let Ye,Pe=it;if(Jt!==null&&(Ye=ut.get(Jt),Pe=Vt,Pe.setIndex(Ye)),ft.isMesh)gt.wireframe===!0?($.setLineWidth(gt.wireframeLinewidth*Y()),Pe.setMode(D.LINES)):Pe.setMode(D.TRIANGLES);else if(ft.isLine){let ae=gt.linewidth;ae===void 0&&(ae=1),$.setLineWidth(ae*Y()),ft.isLineSegments?Pe.setMode(D.LINES):ft.isLineLoop?Pe.setMode(D.LINE_LOOP):Pe.setMode(D.LINE_STRIP)}else ft.isPoints?Pe.setMode(D.POINTS):ft.isSprite&&Pe.setMode(D.TRIANGLES);if(ft.isBatchedMesh)if(ft._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount,ft._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Pe.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{const ae=ft._multiDrawStarts,Oe=ft._multiDrawCounts,de=ft._multiDrawCount,yn=Jt?ut.get(Jt).bytesPerElement:1,ji=w.get(gt).currentProgram.getUniforms();for(let Sn=0;Sn<de;Sn++)ji.setValue(D,"_gl_DrawID",Sn),Pe.render(ae[Sn]/yn,Oe[Sn])}else if(ft.isInstancedMesh)Pe.renderInstances(le,Qe,ft.count);else if(bt.isInstancedBufferGeometry){const ae=bt._maxInstanceCount!==void 0?bt._maxInstanceCount:1/0,Oe=Math.min(bt.instanceCount,ae);Pe.renderInstances(le,Qe,Oe)}else Pe.render(le,Qe)};function ks(k,at,bt){k.transparent===!0&&k.side===Pi&&k.forceSinglePass===!1?(k.side=jn,k.needsUpdate=!0,Pr(k,at,bt),k.side=nr,k.needsUpdate=!0,Pr(k,at,bt),k.side=Pi):Pr(k,at,bt)}this.compile=function(k,at,bt=null){bt===null&&(bt=k),z=zt.get(bt),z.init(at),O.push(z),bt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(at.layers)&&(z.pushLight(ft),ft.castShadow&&z.pushShadow(ft))}),k!==bt&&k.traverseVisible(function(ft){ft.isLight&&ft.layers.test(at.layers)&&(z.pushLight(ft),ft.castShadow&&z.pushShadow(ft))}),z.setupLights();const gt=new Set;return k.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;const Wt=ft.material;if(Wt)if(Array.isArray(Wt))for(let Qt=0;Qt<Wt.length;Qt++){const jt=Wt[Qt];ks(jt,bt,ft),gt.add(jt)}else ks(Wt,bt,ft),gt.add(Wt)}),z=O.pop(),gt},this.compileAsync=function(k,at,bt=null){const gt=this.compile(k,at,bt);return new Promise(ft=>{function Wt(){if(gt.forEach(function(Qt){w.get(Qt).currentProgram.isReady()&&gt.delete(Qt)}),gt.size===0){ft(k);return}setTimeout(Wt,10)}Et.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let Lr=null;function Gs(k){Lr&&Lr(k)}function Or(){Ci.stop()}function Vs(){Ci.start()}const Ci=new mv;Ci.setAnimationLoop(Gs),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(k){Lr=k,Ht.setAnimationLoop(k),k===null?Ci.stop():Ci.start()},Ht.addEventListener("sessionstart",Or),Ht.addEventListener("sessionend",Vs),this.render=function(k,at){if(at!==void 0&&at.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const bt=Ht.enabled===!0&&Ht.isPresenting===!0,gt=W!==null&&(j===null||bt)&&W.begin(C,j);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(at),at=Ht.getCamera()),k.isScene===!0&&k.onBeforeRender(C,k,at,j),z=zt.get(k,O.length),z.init(at),O.push(z),we.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),Pt.setFromProjectionMatrix(we,Fi,at.reversedDepth),ie=this.localClippingEnabled,Bt=qt.init(this.clippingPlanes,ie),N=Ct.get(k,P.length),N.init(),P.push(N),Ht.enabled===!0&&Ht.isPresenting===!0){const Qt=C.xr.getDepthSensingMesh();Qt!==null&&ii(Qt,at,-1/0,C.sortObjects)}ii(k,at,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(dt,vt),ot=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,ot&&Gt.addToRenderList(N,k),this.info.render.frame++,Bt===!0&&qt.beginShadows();const ft=z.state.shadowsArray;if(kt.render(ft,k,at),Bt===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(gt&&W.hasRenderPass())===!1){const Qt=N.opaque,jt=N.transmissive;if(z.setupLights(),at.isArrayCamera){const Jt=at.cameras;if(jt.length>0)for(let te=0,oe=Jt.length;te<oe;te++){const ee=Jt[te];xn(Qt,jt,k,ee)}ot&&Gt.render(k);for(let te=0,oe=Jt.length;te<oe;te++){const ee=Jt[te];sn(N,k,ee,ee.viewport)}}else jt.length>0&&xn(Qt,jt,k,at),ot&&Gt.render(k),sn(N,k,at)}j!==null&&F===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),gt&&W.end(C),k.isScene===!0&&k.onAfterRender(C,k,at),Xt.resetDefaultState(),T=-1,K=null,O.pop(),O.length>0?(z=O[O.length-1],Bt===!0&&qt.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,P.pop(),P.length>0?N=P[P.length-1]:N=null};function ii(k,at,bt,gt){if(k.visible===!1)return;if(k.layers.test(at.layers)){if(k.isGroup)bt=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(at);else if(k.isLight)z.pushLight(k),k.castShadow&&z.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||Pt.intersectsSprite(k)){gt&&R.setFromMatrixPosition(k.matrixWorld).applyMatrix4(we);const Qt=Ft.update(k),jt=k.material;jt.visible&&N.push(k,Qt,jt,bt,R.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||Pt.intersectsObject(k))){const Qt=Ft.update(k),jt=k.material;if(gt&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),R.copy(k.boundingSphere.center)):(Qt.boundingSphere===null&&Qt.computeBoundingSphere(),R.copy(Qt.boundingSphere.center)),R.applyMatrix4(k.matrixWorld).applyMatrix4(we)),Array.isArray(jt)){const Jt=Qt.groups;for(let te=0,oe=Jt.length;te<oe;te++){const ee=Jt[te],le=jt[ee.materialIndex];le&&le.visible&&N.push(k,Qt,le,bt,R.z,ee)}}else jt.visible&&N.push(k,Qt,jt,bt,R.z,null)}}const Wt=k.children;for(let Qt=0,jt=Wt.length;Qt<jt;Qt++)ii(Wt[Qt],at,bt,gt)}function sn(k,at,bt,gt){const{opaque:ft,transmissive:Wt,transparent:Qt}=k;z.setupLightsView(bt),Bt===!0&&qt.setGlobalState(C.clippingPlanes,bt),gt&&$.viewport(V.copy(gt)),ft.length>0&&xi(ft,at,bt),Wt.length>0&&xi(Wt,at,bt),Qt.length>0&&xi(Qt,at,bt),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function xn(k,at,bt,gt){if((bt.isScene===!0?bt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[gt.id]===void 0){const le=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[gt.id]=new Hi(1,1,{generateMipmaps:!0,type:le?va:gi,minFilter:Dr,samples:At.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Wt=z.state.transmissionRenderTarget[gt.id],Qt=gt.viewport||V;Wt.setSize(Qt.z*C.transmissionResolutionScale,Qt.w*C.transmissionResolutionScale);const jt=C.getRenderTarget(),Jt=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(Wt),C.getClearColor(J),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),ot&&Gt.render(bt);const oe=C.toneMapping;C.toneMapping=Bi;const ee=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),z.setupLightsView(gt),Bt===!0&&qt.setGlobalState(C.clippingPlanes,gt),xi(k,bt,gt),q.updateMultisampleRenderTarget(Wt),q.updateRenderTargetMipmap(Wt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Le=0,Qe=at.length;Le<Qe;Le++){const Ye=at[Le],{object:Pe,geometry:ae,material:Oe,group:de}=Ye;if(Oe.side===Pi&&Pe.layers.test(gt.layers)){const yn=Oe.side;Oe.side=jn,Oe.needsUpdate=!0,zr(Pe,bt,gt,ae,Oe,de),Oe.side=yn,Oe.needsUpdate=!0,le=!0}}le===!0&&(q.updateMultisampleRenderTarget(Wt),q.updateRenderTargetMipmap(Wt))}C.setRenderTarget(jt,Jt,te),C.setClearColor(J,ht),ee!==void 0&&(gt.viewport=ee),C.toneMapping=oe}function xi(k,at,bt){const gt=at.isScene===!0?at.overrideMaterial:null;for(let ft=0,Wt=k.length;ft<Wt;ft++){const Qt=k[ft],{object:jt,geometry:Jt,group:te}=Qt;let oe=Qt.material;oe.allowOverride===!0&&gt!==null&&(oe=gt),jt.layers.test(bt.layers)&&zr(jt,at,bt,Jt,oe,te)}}function zr(k,at,bt,gt,ft,Wt){k.onBeforeRender(C,at,bt,gt,ft,Wt),k.modelViewMatrix.multiplyMatrices(bt.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),ft.onBeforeRender(C,at,bt,gt,k,Wt),ft.transparent===!0&&ft.side===Pi&&ft.forceSinglePass===!1?(ft.side=jn,ft.needsUpdate=!0,C.renderBufferDirect(bt,at,gt,ft,k,Wt),ft.side=nr,ft.needsUpdate=!0,C.renderBufferDirect(bt,at,gt,ft,k,Wt),ft.side=Pi):C.renderBufferDirect(bt,at,gt,ft,k,Wt),k.onAfterRender(C,at,bt,gt,ft,Wt)}function Pr(k,at,bt){at.isScene!==!0&&(at=St);const gt=w.get(k),ft=z.state.lights,Wt=z.state.shadowsArray,Qt=ft.state.version,jt=Kt.getParameters(k,ft.state,Wt,at,bt),Jt=Kt.getProgramCacheKey(jt);let te=gt.programs;gt.environment=k.isMeshStandardMaterial?at.environment:null,gt.fog=at.fog,gt.envMap=(k.isMeshStandardMaterial?Tt:lt).get(k.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&k.envMap===null?at.environmentRotation:k.envMapRotation,te===void 0&&(k.addEventListener("dispose",Un),te=new Map,gt.programs=te);let oe=te.get(Jt);if(oe!==void 0){if(gt.currentProgram===oe&&gt.lightsStateVersion===Qt)return Xs(k,jt),oe}else jt.uniforms=Kt.getUniforms(k),k.onBeforeCompile(jt,C),oe=Kt.acquireProgram(jt,Jt),te.set(Jt,oe),gt.uniforms=jt.uniforms;const ee=gt.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(ee.clippingPlanes=qt.uniform),Xs(k,jt),gt.needsLights=Sa(k),gt.lightsStateVersion=Qt,gt.needsLights&&(ee.ambientLightColor.value=ft.state.ambient,ee.lightProbe.value=ft.state.probe,ee.directionalLights.value=ft.state.directional,ee.directionalLightShadows.value=ft.state.directionalShadow,ee.spotLights.value=ft.state.spot,ee.spotLightShadows.value=ft.state.spotShadow,ee.rectAreaLights.value=ft.state.rectArea,ee.ltc_1.value=ft.state.rectAreaLTC1,ee.ltc_2.value=ft.state.rectAreaLTC2,ee.pointLights.value=ft.state.point,ee.pointLightShadows.value=ft.state.pointShadow,ee.hemisphereLights.value=ft.state.hemi,ee.directionalShadowMap.value=ft.state.directionalShadowMap,ee.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,ee.spotShadowMap.value=ft.state.spotShadowMap,ee.spotLightMatrix.value=ft.state.spotLightMatrix,ee.spotLightMap.value=ft.state.spotLightMap,ee.pointShadowMap.value=ft.state.pointShadowMap,ee.pointShadowMatrix.value=ft.state.pointShadowMatrix),gt.currentProgram=oe,gt.uniformsList=null,oe}function nl(k){if(k.uniformsList===null){const at=k.currentProgram.getUniforms();k.uniformsList=Hc.seqWithValue(at.seq,k.uniforms)}return k.uniformsList}function Xs(k,at){const bt=w.get(k);bt.outputColorSpace=at.outputColorSpace,bt.batching=at.batching,bt.batchingColor=at.batchingColor,bt.instancing=at.instancing,bt.instancingColor=at.instancingColor,bt.instancingMorph=at.instancingMorph,bt.skinning=at.skinning,bt.morphTargets=at.morphTargets,bt.morphNormals=at.morphNormals,bt.morphColors=at.morphColors,bt.morphTargetsCount=at.morphTargetsCount,bt.numClippingPlanes=at.numClippingPlanes,bt.numIntersection=at.numClipIntersection,bt.vertexAlphas=at.vertexAlphas,bt.vertexTangents=at.vertexTangents,bt.toneMapping=at.toneMapping}function ir(k,at,bt,gt,ft){at.isScene!==!0&&(at=St),q.resetTextureUnits();const Wt=at.fog,Qt=gt.isMeshStandardMaterial?at.environment:null,jt=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ps,Jt=(gt.isMeshStandardMaterial?Tt:lt).get(gt.envMap||Qt),te=gt.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,oe=!!bt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ee=!!bt.morphAttributes.position,le=!!bt.morphAttributes.normal,Le=!!bt.morphAttributes.color;let Qe=Bi;gt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Qe=C.toneMapping);const Ye=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,Pe=Ye!==void 0?Ye.length:0,ae=w.get(gt),Oe=z.state.lights;if(Bt===!0&&(ie===!0||k!==K)){const Mn=k===K&&gt.id===T;qt.setState(gt,k,Mn)}let de=!1;gt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Oe.state.version||ae.outputColorSpace!==jt||ft.isBatchedMesh&&ae.batching===!1||!ft.isBatchedMesh&&ae.batching===!0||ft.isBatchedMesh&&ae.batchingColor===!0&&ft.colorTexture===null||ft.isBatchedMesh&&ae.batchingColor===!1&&ft.colorTexture!==null||ft.isInstancedMesh&&ae.instancing===!1||!ft.isInstancedMesh&&ae.instancing===!0||ft.isSkinnedMesh&&ae.skinning===!1||!ft.isSkinnedMesh&&ae.skinning===!0||ft.isInstancedMesh&&ae.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&ae.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&ae.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&ae.instancingMorph===!1&&ft.morphTexture!==null||ae.envMap!==Jt||gt.fog===!0&&ae.fog!==Wt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==qt.numPlanes||ae.numIntersection!==qt.numIntersection)||ae.vertexAlphas!==te||ae.vertexTangents!==oe||ae.morphTargets!==ee||ae.morphNormals!==le||ae.morphColors!==Le||ae.toneMapping!==Qe||ae.morphTargetsCount!==Pe)&&(de=!0):(de=!0,ae.__version=gt.version);let yn=ae.currentProgram;de===!0&&(yn=Pr(gt,at,ft));let ji=!1,Sn=!1,ai=!1;const Fe=yn.getUniforms(),bn=ae.uniforms;if($.useProgram(yn.program)&&(ji=!0,Sn=!0,ai=!0),gt.id!==T&&(T=gt.id,Sn=!0),ji||K!==k){$.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Fe.setValue(D,"projectionMatrix",k.projectionMatrix),Fe.setValue(D,"viewMatrix",k.matrixWorldInverse);const En=Fe.map.cameraPosition;En!==void 0&&En.setValue(D,ue.setFromMatrixPosition(k.matrixWorld)),At.logarithmicDepthBuffer&&Fe.setValue(D,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Fe.setValue(D,"isOrthographic",k.isOrthographicCamera===!0),K!==k&&(K=k,Sn=!0,ai=!0)}if(ae.needsLights&&(Oe.state.directionalShadowMap.length>0&&Fe.setValue(D,"directionalShadowMap",Oe.state.directionalShadowMap,q),Oe.state.spotShadowMap.length>0&&Fe.setValue(D,"spotShadowMap",Oe.state.spotShadowMap,q),Oe.state.pointShadowMap.length>0&&Fe.setValue(D,"pointShadowMap",Oe.state.pointShadowMap,q)),ft.isSkinnedMesh){Fe.setOptional(D,ft,"bindMatrix"),Fe.setOptional(D,ft,"bindMatrixInverse");const Mn=ft.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Fe.setValue(D,"boneTexture",Mn.boneTexture,q))}ft.isBatchedMesh&&(Fe.setOptional(D,ft,"batchingTexture"),Fe.setValue(D,"batchingTexture",ft._matricesTexture,q),Fe.setOptional(D,ft,"batchingIdTexture"),Fe.setValue(D,"batchingIdTexture",ft._indirectTexture,q),Fe.setOptional(D,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Fe.setValue(D,"batchingColorTexture",ft._colorsTexture,q));const dn=bt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&me.update(ft,bt,yn),(Sn||ae.receiveShadow!==ft.receiveShadow)&&(ae.receiveShadow=ft.receiveShadow,Fe.setValue(D,"receiveShadow",ft.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(bn.envMap.value=Jt,bn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&at.environment!==null&&(bn.envMapIntensity.value=at.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=m2()),Sn&&(Fe.setValue(D,"toneMappingExposure",C.toneMappingExposure),ae.needsLights&&Ws(bn,ai),Wt&&gt.fog===!0&&re.refreshFogUniforms(bn,Wt),re.refreshMaterialUniforms(bn,gt,ct,X,z.state.transmissionRenderTarget[k.id]),Hc.upload(D,nl(ae),bn,q)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Hc.upload(D,nl(ae),bn,q),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Fe.setValue(D,"center",ft.center),Fe.setValue(D,"modelViewMatrix",ft.modelViewMatrix),Fe.setValue(D,"normalMatrix",ft.normalMatrix),Fe.setValue(D,"modelMatrix",ft.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const Mn=gt.uniformsGroups;for(let En=0,Ir=Mn.length;En<Ir;En++){const yi=Mn[En];Ot.update(yi,yn),Ot.bind(yi,yn)}}return yn}function Ws(k,at){k.ambientLightColor.needsUpdate=at,k.lightProbe.needsUpdate=at,k.directionalLights.needsUpdate=at,k.directionalLightShadows.needsUpdate=at,k.pointLights.needsUpdate=at,k.pointLightShadows.needsUpdate=at,k.spotLights.needsUpdate=at,k.spotLightShadows.needsUpdate=at,k.rectAreaLights.needsUpdate=at,k.hemisphereLights.needsUpdate=at}function Sa(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(k,at,bt){const gt=w.get(k);gt.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),w.get(k.texture).__webglTexture=at,w.get(k.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:bt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,at){const bt=w.get(k);bt.__webglFramebuffer=at,bt.__useDefaultFramebuffer=at===void 0};const ba=D.createFramebuffer();this.setRenderTarget=function(k,at=0,bt=0){j=k,Z=at,F=bt;let gt=null,ft=!1,Wt=!1;if(k){const jt=w.get(k);if(jt.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(D.FRAMEBUFFER,jt.__webglFramebuffer),V.copy(k.viewport),G.copy(k.scissor),nt=k.scissorTest,$.viewport(V),$.scissor(G),$.setScissorTest(nt),T=-1;return}else if(jt.__webglFramebuffer===void 0)q.setupRenderTarget(k);else if(jt.__hasExternalTextures)q.rebindTextures(k,w.get(k.texture).__webglTexture,w.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){const oe=k.depthTexture;if(jt.__boundDepthTexture!==oe){if(oe!==null&&w.has(oe)&&(k.width!==oe.image.width||k.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(k)}}const Jt=k.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Wt=!0);const te=w.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(te[at])?gt=te[at][bt]:gt=te[at],ft=!0):k.samples>0&&q.useMultisampledRTT(k)===!1?gt=w.get(k).__webglMultisampledFramebuffer:Array.isArray(te)?gt=te[bt]:gt=te,V.copy(k.viewport),G.copy(k.scissor),nt=k.scissorTest}else V.copy(rt).multiplyScalar(ct).floor(),G.copy(xt).multiplyScalar(ct).floor(),nt=Nt;if(bt!==0&&(gt=ba),$.bindFramebuffer(D.FRAMEBUFFER,gt)&&$.drawBuffers(k,gt),$.viewport(V),$.scissor(G),$.setScissorTest(nt),ft){const jt=w.get(k.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+at,jt.__webglTexture,bt)}else if(Wt){const jt=at;for(let Jt=0;Jt<k.textures.length;Jt++){const te=w.get(k.textures[Jt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Jt,te.__webglTexture,bt,jt)}}else if(k!==null&&bt!==0){const jt=w.get(k.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,bt)}T=-1},this.readRenderTargetPixels=function(k,at,bt,gt,ft,Wt,Qt,jt=0){if(!(k&&k.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=w.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Qt!==void 0&&(Jt=Jt[Qt]),Jt){$.bindFramebuffer(D.FRAMEBUFFER,Jt);try{const te=k.textures[jt],oe=te.format,ee=te.type;if(!At.textureFormatReadable(oe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=k.width-gt&&bt>=0&&bt<=k.height-ft&&(k.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+jt),D.readPixels(at,bt,gt,ft,It.convert(oe),It.convert(ee),Wt))}finally{const te=j!==null?w.get(j).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(k,at,bt,gt,ft,Wt,Qt,jt=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=w.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Qt!==void 0&&(Jt=Jt[Qt]),Jt)if(at>=0&&at<=k.width-gt&&bt>=0&&bt<=k.height-ft){$.bindFramebuffer(D.FRAMEBUFFER,Jt);const te=k.textures[jt],oe=te.format,ee=te.type;if(!At.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,le),D.bufferData(D.PIXEL_PACK_BUFFER,Wt.byteLength,D.STREAM_READ),k.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+jt),D.readPixels(at,bt,gt,ft,It.convert(oe),It.convert(ee),0);const Le=j!==null?w.get(j).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Le);const Qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await yS(D,Qe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Wt),D.deleteBuffer(le),D.deleteSync(Qe),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,at=null,bt=0){const gt=Math.pow(2,-bt),ft=Math.floor(k.image.width*gt),Wt=Math.floor(k.image.height*gt),Qt=at!==null?at.x:0,jt=at!==null?at.y:0;q.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,bt,0,0,Qt,jt,ft,Wt),$.unbindTexture()};const ar=D.createFramebuffer(),Ma=D.createFramebuffer();this.copyTextureToTexture=function(k,at,bt=null,gt=null,ft=0,Wt=null){Wt===null&&(ft!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Wt=ft,ft=0):Wt=0);let Qt,jt,Jt,te,oe,ee,le,Le,Qe;const Ye=k.isCompressedTexture?k.mipmaps[Wt]:k.image;if(bt!==null)Qt=bt.max.x-bt.min.x,jt=bt.max.y-bt.min.y,Jt=bt.isBox3?bt.max.z-bt.min.z:1,te=bt.min.x,oe=bt.min.y,ee=bt.isBox3?bt.min.z:0;else{const dn=Math.pow(2,-ft);Qt=Math.floor(Ye.width*dn),jt=Math.floor(Ye.height*dn),k.isDataArrayTexture?Jt=Ye.depth:k.isData3DTexture?Jt=Math.floor(Ye.depth*dn):Jt=1,te=0,oe=0,ee=0}gt!==null?(le=gt.x,Le=gt.y,Qe=gt.z):(le=0,Le=0,Qe=0);const Pe=It.convert(at.format),ae=It.convert(at.type);let Oe;at.isData3DTexture?(q.setTexture3D(at,0),Oe=D.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(q.setTexture2DArray(at,0),Oe=D.TEXTURE_2D_ARRAY):(q.setTexture2D(at,0),Oe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,at.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,at.unpackAlignment);const de=D.getParameter(D.UNPACK_ROW_LENGTH),yn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ji=D.getParameter(D.UNPACK_SKIP_PIXELS),Sn=D.getParameter(D.UNPACK_SKIP_ROWS),ai=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ye.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,te),D.pixelStorei(D.UNPACK_SKIP_ROWS,oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ee);const Fe=k.isDataArrayTexture||k.isData3DTexture,bn=at.isDataArrayTexture||at.isData3DTexture;if(k.isDepthTexture){const dn=w.get(k),Mn=w.get(at),En=w.get(dn.__renderTarget),Ir=w.get(Mn.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,En.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let yi=0;yi<Jt;yi++)Fe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,w.get(k).__webglTexture,ft,ee+yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,w.get(at).__webglTexture,Wt,Qe+yi)),D.blitFramebuffer(te,oe,Qt,jt,le,Le,Qt,jt,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ft!==0||k.isRenderTargetTexture||w.has(k)){const dn=w.get(k),Mn=w.get(at);$.bindFramebuffer(D.READ_FRAMEBUFFER,ar),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Jt;En++)Fe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,ft,ee+En):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,ft),bn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mn.__webglTexture,Wt,Qe+En):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mn.__webglTexture,Wt),ft!==0?D.blitFramebuffer(te,oe,Qt,jt,le,Le,Qt,jt,D.COLOR_BUFFER_BIT,D.NEAREST):bn?D.copyTexSubImage3D(Oe,Wt,le,Le,Qe+En,te,oe,Qt,jt):D.copyTexSubImage2D(Oe,Wt,le,Le,te,oe,Qt,jt);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else bn?k.isDataTexture||k.isData3DTexture?D.texSubImage3D(Oe,Wt,le,Le,Qe,Qt,jt,Jt,Pe,ae,Ye.data):at.isCompressedArrayTexture?D.compressedTexSubImage3D(Oe,Wt,le,Le,Qe,Qt,jt,Jt,Pe,Ye.data):D.texSubImage3D(Oe,Wt,le,Le,Qe,Qt,jt,Jt,Pe,ae,Ye):k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Wt,le,Le,Qt,jt,Pe,ae,Ye.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Wt,le,Le,Ye.width,Ye.height,Pe,Ye.data):D.texSubImage2D(D.TEXTURE_2D,Wt,le,Le,Qt,jt,Pe,ae,Ye);D.pixelStorei(D.UNPACK_ROW_LENGTH,de),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ai),Wt===0&&at.generateMipmaps&&D.generateMipmap(Oe),$.unbindTexture()},this.initRenderTarget=function(k){w.get(k).__webglFramebuffer===void 0&&q.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?q.setTextureCube(k,0):k.isData3DTexture?q.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?q.setTexture2DArray(k,0):q.setTexture2D(k,0),$.unbindTexture()},this.resetState=function(){Z=0,F=0,j=null,$.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const _2=({scene:o,onAddHotspot:e,onHotspotClick:i,selectedHotspotId:r,isPreviewMode:l})=>{const c=Ae.useRef(null),f=Ae.useRef(null),u=Ae.useRef(null),p=Ae.useRef(null),h=Ae.useRef(null),x=Ae.useRef(null),_=Ae.useRef(0),y=Ae.useRef(0),v=Ae.useRef(!1),M=Ae.useRef({x:0,y:0}),b=Ae.useRef({lon:0,lat:0}),S=Ae.useRef(e),g=Ae.useRef(l);return Ae.useEffect(()=>{S.current=e},[e]),Ae.useEffect(()=>{g.current=l},[l]),Ae.useEffect(()=>{if(!c.current)return;const A=c.current.clientWidth,U=c.current.clientHeight,N=new s1;p.current=N;const z=new mi(75,A/U,1,1100);u.current=z;const P=new g2({antialias:!0,alpha:!0});P.setPixelRatio(window.devicePixelRatio),P.setSize(A,U),c.current.appendChild(P.domElement),f.current=P;const O=new Yh(500,60,40),W=new qh({side:Pi,transparent:!0}),C=new Vi(O,W);N.add(C),h.current=C;const I=()=>{if(!u.current||!x.current||!c.current)return;const J=c.current.clientWidth,ht=c.current.clientHeight,L=x.current.children;for(let X=0;X<L.length;X++){const ct=L[X],dt=ct.getAttribute("data-pos");if(!dt)continue;const vt=JSON.parse(dt),rt=new yt(vt.x,vt.y,vt.z);rt.project(u.current),rt.z>1?ct.style.display="none":(ct.style.display="flex",ct.style.left=`${(rt.x*.5+.5)*J}px`,ct.style.top=`${(rt.y*-.5+.5)*ht}px`)}};let Z;const F=()=>{if(!f.current||!u.current||!p.current)return;y.current=Math.max(-85,Math.min(85,y.current));const J=rd.degToRad(90-y.current),ht=rd.degToRad(_.current);u.current.lookAt(500*Math.sin(J)*Math.cos(ht),500*Math.cos(J),500*Math.sin(J)*Math.sin(ht)),f.current.render(N,u.current),I(),Z=requestAnimationFrame(F)},j=J=>{J.button===0&&(v.current=!0,M.current={x:J.clientX,y:J.clientY},b.current={lon:_.current,lat:y.current})},T=J=>{v.current&&(_.current=(M.current.x-J.clientX)*.15+b.current.lon,y.current=(J.clientY-M.current.y)*.15+b.current.lat)},K=J=>{if(!v.current)return;if(v.current=!1,Math.hypot(J.clientX-M.current.x,J.clientY-M.current.y)<5&&!g.current){if(!f.current||!u.current||!c.current||!h.current)return;const L=c.current.getBoundingClientRect(),X=new Ge((J.clientX-L.left)/L.width*2-1,-((J.clientY-L.top)/L.height)*2+1),ct=new y1;ct.setFromCamera(X,u.current),ct.params.Mesh.threshold=0;const dt=ct.intersectObject(h.current);dt.length>0&&S.current({x:dt[0].point.x,y:dt[0].point.y,z:dt[0].point.z})}},V=J=>{u.current&&(u.current.fov=rd.clamp(u.current.fov+J.deltaY*.05,10,100),u.current.updateProjectionMatrix())},G=()=>{if(!c.current||!u.current||!f.current)return;const J=c.current.clientWidth,ht=c.current.clientHeight;u.current.aspect=J/ht,u.current.updateProjectionMatrix(),f.current.setSize(J,ht)},nt=P.domElement;return nt.addEventListener("pointerdown",j),window.addEventListener("pointermove",T),window.addEventListener("pointerup",K),nt.addEventListener("wheel",V,{passive:!0}),window.addEventListener("resize",G),F(),()=>{cancelAnimationFrame(Z),window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",K),window.removeEventListener("resize",G),c.current&&(nt.removeEventListener("pointerdown",j),nt.removeEventListener("wheel",V),c.current.innerHTML=""),P.dispose(),O.dispose(),W.dispose()}},[]),Ae.useEffect(()=>{if(!h.current||!o.imageSource)return;new v1().load(o.imageSource,U=>{if(h.current){const N=h.current.material;N.map=U,N.needsUpdate=!0}})},[o.imageSource]),Rt.jsxs("div",{ref:c,className:"w-full h-full bg-black relative overflow-hidden touch-none cursor-grab active:cursor-grabbing",children:[Rt.jsx("div",{ref:x,className:"absolute inset-0 pointer-events-none z-20",children:o.hotspots.map(A=>Rt.jsxs("div",{"data-pos":JSON.stringify(A.position),onClick:U=>{U.stopPropagation(),i(A)},className:`absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full cursor-pointer transition-all pointer-events-auto group
              ${r===A.id&&!l?"ring-4 ring-blue-500 scale-125":"hover:scale-110"}
              ${A.type===Cn.SCENE?"bg-blue-600":A.type===Cn.LINK?"bg-orange-600":"bg-purple-600"}
              border-2 border-white shadow-xl`,children:[Rt.jsx("span",{className:"text-white text-lg drop-shadow-md pointer-events-none",children:A.type===Cn.SCENE?"🚪":A.type===Cn.LINK?"🔗":"🖼️"}),Rt.jsx("div",{className:"absolute top-12 opacity-0 group-hover:opacity-100 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10 shadow-2xl transition-all uppercase tracking-wider",children:A.label})]},A.id))}),!l&&Rt.jsx("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 pointer-events-none z-30 shadow-2xl ring-1 ring-blue-500/20",children:"Click Anywhere to Place Hotspot"})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=o=>{const e=x2(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=Ae.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...u},p)=>Ae.createElement("svg",{ref:p,...y2,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:yv("lucide",l),...!c&&!S2(u)&&{"aria-hidden":"true"},...u},[...f.map(([h,x])=>Ae.createElement(h,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=(o,e)=>{const i=Ae.forwardRef(({className:r,...l},c)=>Ae.createElement(b2,{ref:c,iconNode:e,className:yv(`lucide-${v2(P_(o))}`,`lucide-${o}`,r),...l}));return i.displayName=P_(o),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],E2=vn("circle-plus",M2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],A2=vn("door-open",T2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],R2=vn("download",w2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D2=vn("eye",C2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],N2=vn("file-code",U2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],O2=vn("file-plus",L2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],P2=vn("house",z2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Dh=vn("image",I2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],B2=vn("link",F2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],k2=vn("map",H2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],V2=vn("pen-line",G2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Sv=vn("plus",X2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],j2=vn("refresh-ccw",W2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Y2=vn("save",q2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],I_=vn("settings",Z2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],bv=vn("trash-2",K2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],J2=vn("upload",Q2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],F_=vn("x",$2),tA=({tour:o,activeSceneId:e,onSelectScene:i,onAddScene:r,onRemoveScene:l,onLoadProject:c,onUpdateTourTitle:f})=>Rt.jsxs("aside",{className:"w-72 bg-slate-900 border-r border-slate-800 flex flex-col z-20 shadow-2xl",children:[Rt.jsxs("div",{className:"p-6 border-b border-slate-800",children:[Rt.jsxs("div",{className:"flex items-center justify-between mb-8",children:[Rt.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-black tracking-tighter text-2xl uppercase italic",children:[Rt.jsx(k2,{size:28,strokeWidth:3}),"Pano"]}),Rt.jsx("button",{onClick:()=>{confirm("Reload app? Unsaved changes will be lost.")&&window.location.reload()},className:"p-1.5 text-slate-500 hover:text-white transition-colors",title:"Reload Studio",children:Rt.jsx(j2,{size:14})})]}),Rt.jsxs("div",{className:"mb-6",children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2",children:"Import Archive"}),Rt.jsxs("label",{className:"flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 rounded-xl px-4 py-3 cursor-pointer hover:bg-blue-500/10 transition-all hover:border-blue-500/30 group",children:[Rt.jsx(N2,{size:18,className:"text-blue-400 transition-transform group-hover:scale-110"}),Rt.jsx("span",{className:"text-xs text-blue-400 font-bold",children:"Open .pano File"}),Rt.jsx("input",{type:"file",accept:".pano",className:"hidden",onChange:u=>{var p;return((p=u.target.files)==null?void 0:p[0])&&c(u.target.files[0])}})]})]}),Rt.jsxs("div",{children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2",children:"Tour Name"}),Rt.jsx("input",{type:"text",value:o.title,onChange:u=>f(u.target.value),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-semibold placeholder-slate-600",placeholder:"Project Title"})]})]}),Rt.jsxs("div",{className:"flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-900/30",children:[Rt.jsxs("div",{className:"flex items-center justify-between mb-4 px-2",children:[Rt.jsxs("h2",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest",children:["Scenes (",o.scenes.length,")"]}),Rt.jsxs("label",{className:"p-1.5 bg-blue-600 hover:bg-blue-500 rounded-full cursor-pointer shadow-lg shadow-blue-900/40 transition-transform active:scale-90",children:[Rt.jsx(Sv,{size:16}),Rt.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:u=>{var p;return((p=u.target.files)==null?void 0:p[0])&&r(u.target.files[0])}})]})]}),Rt.jsxs("div",{className:"space-y-4",children:[o.scenes.length===0&&Rt.jsxs("div",{className:"flex flex-col items-center justify-center py-12 px-6 border-2 border-dashed border-slate-800 rounded-2xl opacity-50 text-center",children:[Rt.jsx(E2,{size:32,className:"mb-2 text-slate-700"}),Rt.jsx("p",{className:"text-[10px] text-slate-600 font-bold uppercase tracking-wider",children:"Empty Project"})]}),o.scenes.map(u=>Rt.jsxs("div",{onClick:()=>i(u.id),className:`group relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${e===u.id?"border-blue-500 ring-4 ring-blue-500/20 shadow-2xl":"border-slate-800 hover:border-slate-700 shadow-lg"}`,children:[Rt.jsxs("div",{className:"aspect-[2/1] bg-slate-800 relative",children:[u.imageSource&&Rt.jsx("img",{src:u.imageSource,alt:u.name,className:"w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"}),Rt.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-3",children:Rt.jsxs("div",{className:"flex items-center justify-between",children:[Rt.jsx("span",{className:"text-[11px] font-bold truncate pr-4 uppercase tracking-tighter drop-shadow-lg",children:u.name}),o.startSceneId===u.id&&Rt.jsx(P2,{size:12,className:"text-emerald-400 shrink-0"})]})})]}),Rt.jsx("button",{onClick:p=>{p.stopPropagation(),l(u.id)},className:"absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-xl",children:Rt.jsx(bv,{size:12})})]},u.id))]})]}),Rt.jsx("div",{className:"p-4 bg-slate-950/80 border-t border-slate-800",children:Rt.jsx("div",{className:"text-[8px] text-slate-600 text-center font-black uppercase tracking-[0.3em]",children:"Panocraft Studio v2.6"})})]}),eA=({hotspot:o,scenes:e,onUpdate:i,onRemove:r,onClose:l})=>{if(!o)return Rt.jsxs("div",{className:"w-80 bg-slate-900 border-l border-slate-800 flex flex-col items-center justify-center p-8 text-center text-slate-500",children:[Rt.jsx(I_,{className:"w-12 h-12 mb-4 opacity-20"}),Rt.jsx("p",{className:"text-sm",children:"Select a hotspot to edit its properties or click on the sphere to add a new one."})]});const c=(f,u)=>{i({...o,[f]:u})};return Rt.jsxs("aside",{className:"w-80 bg-slate-900 border-l border-slate-800 flex flex-col z-20 shadow-2xl",children:[Rt.jsxs("div",{className:"p-6 border-b border-slate-800 flex items-center justify-between",children:[Rt.jsxs("h2",{className:"text-lg font-bold flex items-center gap-2",children:[Rt.jsx(I_,{size:20,className:"text-blue-400"}),"Properties"]}),Rt.jsx("button",{onClick:l,className:"p-1 hover:bg-slate-800 rounded-lg transition-colors",children:Rt.jsx(F_,{size:20})})]}),Rt.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar",children:[Rt.jsxs("div",{children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3",children:"Interaction Type"}),Rt.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:Cn.SCENE,icon:Rt.jsx(A2,{size:18}),label:"Scene"},{id:Cn.LINK,icon:Rt.jsx(B2,{size:18}),label:"Link"},{id:Cn.IMAGE,icon:Rt.jsx(Dh,{size:18}),label:"Media"}].map(f=>Rt.jsxs("button",{onClick:()=>c("type",f.id),className:`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${o.type===f.id?"border-blue-500 bg-blue-500/10 text-blue-400":"border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700"}`,children:[f.icon,Rt.jsx("span",{className:"text-[9px] font-bold",children:f.label})]},f.id))})]}),Rt.jsxs("div",{className:"space-y-4",children:[Rt.jsxs("div",{children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2",children:"Label"}),Rt.jsx("input",{type:"text",value:o.label,onChange:f=>c("label",f.target.value),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",placeholder:"e.g. Balcony"})]}),o.type===Cn.SCENE&&Rt.jsxs("div",{children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2",children:"Destination"}),Rt.jsxs("select",{value:o.targetSceneId,onChange:f=>c("targetSceneId",f.target.value),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none",children:[Rt.jsx("option",{value:"",children:"Select Target..."}),e.map(f=>Rt.jsx("option",{value:f.id,children:f.name},f.id))]})]}),o.type===Cn.LINK&&Rt.jsxs("div",{children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2",children:"External Link"}),Rt.jsx("input",{type:"url",value:o.targetUrl,onChange:f=>c("targetUrl",f.target.value),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",placeholder:"https://..."})]}),o.type===Cn.IMAGE&&Rt.jsxs("div",{children:[Rt.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2",children:"Popup Content"}),Rt.jsx("div",{className:"space-y-3",children:o.contentImageUrl?Rt.jsxs("div",{className:"relative group rounded-xl overflow-hidden border border-slate-700",children:[Rt.jsx("img",{src:o.contentImageUrl,alt:"Preview",className:"w-full h-32 object-cover"}),Rt.jsx("button",{onClick:()=>c("contentImageUrl",""),className:"absolute top-2 right-2 p-1.5 bg-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity",children:Rt.jsx(F_,{size:12})})]}):Rt.jsxs("label",{className:"flex flex-col items-center justify-center h-32 border-2 border-dashed border-slate-800 rounded-2xl hover:border-slate-700 transition-colors cursor-pointer bg-slate-800/30 group",children:[Rt.jsx(Dh,{className:"text-slate-600 mb-2 group-hover:text-slate-400 transition-colors",size:24}),Rt.jsx("span",{className:"text-[10px] text-slate-500 font-bold uppercase",children:"Upload Media"}),Rt.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:f=>{var p;const u=(p=f.target.files)==null?void 0:p[0];if(u){const h=new FileReader;h.onload=x=>{var _;return c("contentImageUrl",(_=x.target)==null?void 0:_.result)},h.readAsDataURL(u)}}})]})})]})]})]}),Rt.jsx("div",{className:"p-6 border-t border-slate-800 bg-slate-950/50",children:Rt.jsxs("button",{onClick:()=>r(o.id),className:"w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-all font-bold border border-red-500/20",children:[Rt.jsx(bv,{size:18}),"Remove Hotspot"]})})]})};function Oc(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zd={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var B_;function nA(){return B_||(B_=1,(function(o,e){(function(i){o.exports=i()})(function(){return(function i(r,l,c){function f(h,x){if(!l[h]){if(!r[h]){var _=typeof Oc=="function"&&Oc;if(!x&&_)return _(h,!0);if(u)return u(h,!0);var y=new Error("Cannot find module '"+h+"'");throw y.code="MODULE_NOT_FOUND",y}var v=l[h]={exports:{}};r[h][0].call(v.exports,function(M){var b=r[h][1][M];return f(b||M)},v,v.exports,i,r,l,c)}return l[h].exports}for(var u=typeof Oc=="function"&&Oc,p=0;p<c.length;p++)f(c[p]);return f})({1:[function(i,r,l){var c=i("./utils"),f=i("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(p){for(var h,x,_,y,v,M,b,S=[],g=0,A=p.length,U=A,N=c.getTypeOf(p)!=="string";g<p.length;)U=A-g,_=N?(h=p[g++],x=g<A?p[g++]:0,g<A?p[g++]:0):(h=p.charCodeAt(g++),x=g<A?p.charCodeAt(g++):0,g<A?p.charCodeAt(g++):0),y=h>>2,v=(3&h)<<4|x>>4,M=1<U?(15&x)<<2|_>>6:64,b=2<U?63&_:64,S.push(u.charAt(y)+u.charAt(v)+u.charAt(M)+u.charAt(b));return S.join("")},l.decode=function(p){var h,x,_,y,v,M,b=0,S=0,g="data:";if(p.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var A,U=3*(p=p.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(p.charAt(p.length-1)===u.charAt(64)&&U--,p.charAt(p.length-2)===u.charAt(64)&&U--,U%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=f.uint8array?new Uint8Array(0|U):new Array(0|U);b<p.length;)h=u.indexOf(p.charAt(b++))<<2|(y=u.indexOf(p.charAt(b++)))>>4,x=(15&y)<<4|(v=u.indexOf(p.charAt(b++)))>>2,_=(3&v)<<6|(M=u.indexOf(p.charAt(b++))),A[S++]=h,v!==64&&(A[S++]=x),M!==64&&(A[S++]=_);return A}},{"./support":30,"./utils":32}],2:[function(i,r,l){var c=i("./external"),f=i("./stream/DataWorker"),u=i("./stream/Crc32Probe"),p=i("./stream/DataLengthProbe");function h(x,_,y,v,M){this.compressedSize=x,this.uncompressedSize=_,this.crc32=y,this.compression=v,this.compressedContent=M}h.prototype={getContentWorker:function(){var x=new f(c.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new p("data_length")),_=this;return x.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),x},getCompressedWorker:function(){return new f(c.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(x,_,y){return x.pipe(new u).pipe(new p("uncompressedSize")).pipe(_.compressWorker(y)).pipe(new p("compressedSize")).withStreamInfo("compression",_)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,l){var c=i("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new c("STORE compression")},uncompressWorker:function(){return new c("STORE decompression")}},l.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,l){var c=i("./utils"),f=(function(){for(var u,p=[],h=0;h<256;h++){u=h;for(var x=0;x<8;x++)u=1&u?3988292384^u>>>1:u>>>1;p[h]=u}return p})();r.exports=function(u,p){return u!==void 0&&u.length?c.getTypeOf(u)!=="string"?(function(h,x,_,y){var v=f,M=y+_;h^=-1;for(var b=y;b<M;b++)h=h>>>8^v[255&(h^x[b])];return-1^h})(0|p,u,u.length,0):(function(h,x,_,y){var v=f,M=y+_;h^=-1;for(var b=y;b<M;b++)h=h>>>8^v[255&(h^x.charCodeAt(b))];return-1^h})(0|p,u,u.length,0):0}},{"./utils":32}],5:[function(i,r,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(i,r,l){var c=null;c=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:c}},{lie:37}],7:[function(i,r,l){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",f=i("pako"),u=i("./utils"),p=i("./stream/GenericWorker"),h=c?"uint8array":"array";function x(_,y){p.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=y,this.meta={}}l.magic="\b\0",u.inherits(x,p),x.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(h,_.data),!1)},x.prototype.flush=function(){p.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},x.prototype.cleanUp=function(){p.prototype.cleanUp.call(this),this._pako=null},x.prototype._createPako=function(){this._pako=new f[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(y){_.push({data:y,meta:_.meta})}},l.compressWorker=function(_){return new x("Deflate",_)},l.uncompressWorker=function(){return new x("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,l){function c(v,M){var b,S="";for(b=0;b<M;b++)S+=String.fromCharCode(255&v),v>>>=8;return S}function f(v,M,b,S,g,A){var U,N,z=v.file,P=v.compression,O=A!==h.utf8encode,W=u.transformTo("string",A(z.name)),C=u.transformTo("string",h.utf8encode(z.name)),I=z.comment,Z=u.transformTo("string",A(I)),F=u.transformTo("string",h.utf8encode(I)),j=C.length!==z.name.length,T=F.length!==I.length,K="",V="",G="",nt=z.dir,J=z.date,ht={crc32:0,compressedSize:0,uncompressedSize:0};M&&!b||(ht.crc32=v.crc32,ht.compressedSize=v.compressedSize,ht.uncompressedSize=v.uncompressedSize);var L=0;M&&(L|=8),O||!j&&!T||(L|=2048);var X=0,ct=0;nt&&(X|=16),g==="UNIX"?(ct=798,X|=(function(vt,rt){var xt=vt;return vt||(xt=rt?16893:33204),(65535&xt)<<16})(z.unixPermissions,nt)):(ct=20,X|=(function(vt){return 63&(vt||0)})(z.dosPermissions)),U=J.getUTCHours(),U<<=6,U|=J.getUTCMinutes(),U<<=5,U|=J.getUTCSeconds()/2,N=J.getUTCFullYear()-1980,N<<=4,N|=J.getUTCMonth()+1,N<<=5,N|=J.getUTCDate(),j&&(V=c(1,1)+c(x(W),4)+C,K+="up"+c(V.length,2)+V),T&&(G=c(1,1)+c(x(Z),4)+F,K+="uc"+c(G.length,2)+G);var dt="";return dt+=`
\0`,dt+=c(L,2),dt+=P.magic,dt+=c(U,2),dt+=c(N,2),dt+=c(ht.crc32,4),dt+=c(ht.compressedSize,4),dt+=c(ht.uncompressedSize,4),dt+=c(W.length,2),dt+=c(K.length,2),{fileRecord:_.LOCAL_FILE_HEADER+dt+W+K,dirRecord:_.CENTRAL_FILE_HEADER+c(ct,2)+dt+c(Z.length,2)+"\0\0\0\0"+c(X,4)+c(S,4)+W+K+Z}}var u=i("../utils"),p=i("../stream/GenericWorker"),h=i("../utf8"),x=i("../crc32"),_=i("../signature");function y(v,M,b,S){p.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=M,this.zipPlatform=b,this.encodeFileName=S,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(y,p),y.prototype.push=function(v){var M=v.meta.percent||0,b=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,p.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:b?(M+100*(b-S-1))/b:100}}))},y.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var M=this.streamFiles&&!v.file.dir;if(M){var b=f(v,M,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:b.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(v){this.accumulate=!1;var M=this.streamFiles&&!v.file.dir,b=f(v,M,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(b.dirRecord),M)this.push({data:(function(S){return _.DATA_DESCRIPTOR+c(S.crc32,4)+c(S.compressedSize,4)+c(S.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:b.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var v=this.bytesWritten,M=0;M<this.dirRecords.length;M++)this.push({data:this.dirRecords[M],meta:{percent:100}});var b=this.bytesWritten-v,S=(function(g,A,U,N,z){var P=u.transformTo("string",z(N));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(g,2)+c(g,2)+c(A,4)+c(U,4)+c(P.length,2)+P})(this.dirRecords.length,b,v,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(v){this._sources.push(v);var M=this;return v.on("data",function(b){M.processChunk(b)}),v.on("end",function(){M.closedSource(M.previous.streamInfo),M._sources.length?M.prepareNextSource():M.end()}),v.on("error",function(b){M.error(b)}),this},y.prototype.resume=function(){return!!p.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(v){var M=this._sources;if(!p.prototype.error.call(this,v))return!1;for(var b=0;b<M.length;b++)try{M[b].error(v)}catch{}return!0},y.prototype.lock=function(){p.prototype.lock.call(this);for(var v=this._sources,M=0;M<v.length;M++)v[M].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,l){var c=i("../compressions"),f=i("./ZipFileWorker");l.generateWorker=function(u,p,h){var x=new f(p.streamFiles,h,p.platform,p.encodeFileName),_=0;try{u.forEach(function(y,v){_++;var M=(function(A,U){var N=A||U,z=c[N];if(!z)throw new Error(N+" is not a valid compression method !");return z})(v.options.compression,p.compression),b=v.options.compressionOptions||p.compressionOptions||{},S=v.dir,g=v.date;v._compressWorker(M,b).withStreamInfo("file",{name:y,dir:S,date:g,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(x)}),x.entriesCount=_}catch(y){x.error(y)}return x}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,l){function c(){if(!(this instanceof c))return new c;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var f=new c;for(var u in this)typeof this[u]!="function"&&(f[u]=this[u]);return f}}(c.prototype=i("./object")).loadAsync=i("./load"),c.support=i("./support"),c.defaults=i("./defaults"),c.version="3.10.1",c.loadAsync=function(f,u){return new c().loadAsync(f,u)},c.external=i("./external"),r.exports=c},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,l){var c=i("./utils"),f=i("./external"),u=i("./utf8"),p=i("./zipEntries"),h=i("./stream/Crc32Probe"),x=i("./nodejsUtils");function _(y){return new f.Promise(function(v,M){var b=y.decompressed.getContentWorker().pipe(new h);b.on("error",function(S){M(S)}).on("end",function(){b.streamInfo.crc32!==y.decompressed.crc32?M(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}r.exports=function(y,v){var M=this;return v=c.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),x.isNode&&x.isStream(y)?f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):c.prepareContent("the loaded zip file",y,!0,v.optimizedBinaryString,v.base64).then(function(b){var S=new p(v);return S.load(b),S}).then(function(b){var S=[f.Promise.resolve(b)],g=b.files;if(v.checkCRC32)for(var A=0;A<g.length;A++)S.push(_(g[A]));return f.Promise.all(S)}).then(function(b){for(var S=b.shift(),g=S.files,A=0;A<g.length;A++){var U=g[A],N=U.fileNameStr,z=c.resolve(U.fileNameStr);M.file(z,U.decompressed,{binary:!0,optimizedBinaryString:!0,date:U.date,dir:U.dir,comment:U.fileCommentStr.length?U.fileCommentStr:null,unixPermissions:U.unixPermissions,dosPermissions:U.dosPermissions,createFolders:v.createFolders}),U.dir||(M.file(z).unsafeOriginalName=N)}return S.zipComment.length&&(M.comment=S.zipComment),M})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,l){var c=i("../utils"),f=i("../stream/GenericWorker");function u(p,h){f.call(this,"Nodejs stream input adapter for "+p),this._upstreamEnded=!1,this._bindStream(h)}c.inherits(u,f),u.prototype._bindStream=function(p){var h=this;(this._stream=p).pause(),p.on("data",function(x){h.push({data:x,meta:{percent:0}})}).on("error",function(x){h.isPaused?this.generatedError=x:h.error(x)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},u.prototype.pause=function(){return!!f.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,l){var c=i("readable-stream").Readable;function f(u,p,h){c.call(this,p),this._helper=u;var x=this;u.on("data",function(_,y){x.push(_)||x._helper.pause(),h&&h(y)}).on("error",function(_){x.emit("error",_)}).on("end",function(){x.push(null)})}i("../utils").inherits(f,c),f.prototype._read=function(){this._helper.resume()},r.exports=f},{"../utils":32,"readable-stream":16}],14:[function(i,r,l){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(c,f){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(c,f);if(typeof c=="number")throw new Error('The "data" argument must not be a number');return new Buffer(c,f)},allocBuffer:function(c){if(Buffer.alloc)return Buffer.alloc(c);var f=new Buffer(c);return f.fill(0),f},isBuffer:function(c){return Buffer.isBuffer(c)},isStream:function(c){return c&&typeof c.on=="function"&&typeof c.pause=="function"&&typeof c.resume=="function"}}},{}],15:[function(i,r,l){function c(z,P,O){var W,C=u.getTypeOf(P),I=u.extend(O||{},x);I.date=I.date||new Date,I.compression!==null&&(I.compression=I.compression.toUpperCase()),typeof I.unixPermissions=="string"&&(I.unixPermissions=parseInt(I.unixPermissions,8)),I.unixPermissions&&16384&I.unixPermissions&&(I.dir=!0),I.dosPermissions&&16&I.dosPermissions&&(I.dir=!0),I.dir&&(z=g(z)),I.createFolders&&(W=S(z))&&A.call(this,W,!0);var Z=C==="string"&&I.binary===!1&&I.base64===!1;O&&O.binary!==void 0||(I.binary=!Z),(P instanceof _&&P.uncompressedSize===0||I.dir||!P||P.length===0)&&(I.base64=!1,I.binary=!0,P="",I.compression="STORE",C="string");var F=null;F=P instanceof _||P instanceof p?P:M.isNode&&M.isStream(P)?new b(z,P):u.prepareContent(z,P,I.binary,I.optimizedBinaryString,I.base64);var j=new y(z,F,I);this.files[z]=j}var f=i("./utf8"),u=i("./utils"),p=i("./stream/GenericWorker"),h=i("./stream/StreamHelper"),x=i("./defaults"),_=i("./compressedObject"),y=i("./zipObject"),v=i("./generate"),M=i("./nodejsUtils"),b=i("./nodejs/NodejsStreamInputAdapter"),S=function(z){z.slice(-1)==="/"&&(z=z.substring(0,z.length-1));var P=z.lastIndexOf("/");return 0<P?z.substring(0,P):""},g=function(z){return z.slice(-1)!=="/"&&(z+="/"),z},A=function(z,P){return P=P!==void 0?P:x.createFolders,z=g(z),this.files[z]||c.call(this,z,null,{dir:!0,createFolders:P}),this.files[z]};function U(z){return Object.prototype.toString.call(z)==="[object RegExp]"}var N={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(z){var P,O,W;for(P in this.files)W=this.files[P],(O=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&z(O,W)},filter:function(z){var P=[];return this.forEach(function(O,W){z(O,W)&&P.push(W)}),P},file:function(z,P,O){if(arguments.length!==1)return z=this.root+z,c.call(this,z,P,O),this;if(U(z)){var W=z;return this.filter(function(I,Z){return!Z.dir&&W.test(I)})}var C=this.files[this.root+z];return C&&!C.dir?C:null},folder:function(z){if(!z)return this;if(U(z))return this.filter(function(C,I){return I.dir&&z.test(C)});var P=this.root+z,O=A.call(this,P),W=this.clone();return W.root=O.name,W},remove:function(z){z=this.root+z;var P=this.files[z];if(P||(z.slice(-1)!=="/"&&(z+="/"),P=this.files[z]),P&&!P.dir)delete this.files[z];else for(var O=this.filter(function(C,I){return I.name.slice(0,z.length)===z}),W=0;W<O.length;W++)delete this.files[O[W].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(z){var P,O={};try{if((O=u.extend(z||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:f.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");u.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var W=O.comment||this.comment||"";P=v.generateWorker(this,O,W)}catch(C){(P=new p("error")).error(C)}return new h(P,O.type||"string",O.mimeType)},generateAsync:function(z,P){return this.generateInternalStream(z).accumulate(P)},generateNodeStream:function(z,P){return(z=z||{}).type||(z.type="nodebuffer"),this.generateInternalStream(z).toNodejsStream(P)}};r.exports=N},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,l){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,l){var c=i("./DataReader");function f(u){c.call(this,u);for(var p=0;p<this.data.length;p++)u[p]=255&u[p]}i("../utils").inherits(f,c),f.prototype.byteAt=function(u){return this.data[this.zero+u]},f.prototype.lastIndexOfSignature=function(u){for(var p=u.charCodeAt(0),h=u.charCodeAt(1),x=u.charCodeAt(2),_=u.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===p&&this.data[y+1]===h&&this.data[y+2]===x&&this.data[y+3]===_)return y-this.zero;return-1},f.prototype.readAndCheckSignature=function(u){var p=u.charCodeAt(0),h=u.charCodeAt(1),x=u.charCodeAt(2),_=u.charCodeAt(3),y=this.readData(4);return p===y[0]&&h===y[1]&&x===y[2]&&_===y[3]},f.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var p=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,p},r.exports=f},{"../utils":32,"./DataReader":18}],18:[function(i,r,l){var c=i("../utils");function f(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}f.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(){},readInt:function(u){var p,h=0;for(this.checkOffset(u),p=this.index+u-1;p>=this.index;p--)h=(h<<8)+this.byteAt(p);return this.index+=u,h},readString:function(u){return c.transformTo("string",this.readData(u))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},r.exports=f},{"../utils":32}],19:[function(i,r,l){var c=i("./Uint8ArrayReader");function f(u){c.call(this,u)}i("../utils").inherits(f,c),f.prototype.readData=function(u){this.checkOffset(u);var p=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,p},r.exports=f},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,l){var c=i("./DataReader");function f(u){c.call(this,u)}i("../utils").inherits(f,c),f.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},f.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},f.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},f.prototype.readData=function(u){this.checkOffset(u);var p=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,p},r.exports=f},{"../utils":32,"./DataReader":18}],21:[function(i,r,l){var c=i("./ArrayReader");function f(u){c.call(this,u)}i("../utils").inherits(f,c),f.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var p=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,p},r.exports=f},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,l){var c=i("../utils"),f=i("../support"),u=i("./ArrayReader"),p=i("./StringReader"),h=i("./NodeBufferReader"),x=i("./Uint8ArrayReader");r.exports=function(_){var y=c.getTypeOf(_);return c.checkSupport(y),y!=="string"||f.uint8array?y==="nodebuffer"?new h(_):f.uint8array?new x(c.transformTo("uint8array",_)):new u(c.transformTo("array",_)):new p(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,l){var c=i("./GenericWorker"),f=i("../utils");function u(p){c.call(this,"ConvertWorker to "+p),this.destType=p}f.inherits(u,c),u.prototype.processChunk=function(p){this.push({data:f.transformTo(this.destType,p.data),meta:p.meta})},r.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,l){var c=i("./GenericWorker"),f=i("../crc32");function u(){c.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(u,c),u.prototype.processChunk=function(p){this.streamInfo.crc32=f(p.data,this.streamInfo.crc32||0),this.push(p)},r.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,l){var c=i("../utils"),f=i("./GenericWorker");function u(p){f.call(this,"DataLengthProbe for "+p),this.propName=p,this.withStreamInfo(p,0)}c.inherits(u,f),u.prototype.processChunk=function(p){if(p){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+p.data.length}f.prototype.processChunk.call(this,p)},r.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,l){var c=i("../utils"),f=i("./GenericWorker");function u(p){f.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,p.then(function(x){h.dataIsReady=!0,h.data=x,h.max=x&&x.length||0,h.type=c.getTypeOf(x),h.isPaused||h._tickAndRepeat()},function(x){h.error(x)})}c.inherits(u,f),u.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,c.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(c.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var p=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":p=this.data.substring(this.index,h);break;case"uint8array":p=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":p=this.data.slice(this.index,h)}return this.index=h,this.push({data:p,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,l){function c(f){this.name=f||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}c.prototype={push:function(f){this.emit("data",f)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(f){this.emit("error",f)}return!0},error:function(f){return!this.isFinished&&(this.isPaused?this.generatedError=f:(this.isFinished=!0,this.emit("error",f),this.previous&&this.previous.error(f),this.cleanUp()),!0)},on:function(f,u){return this._listeners[f].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(f,u){if(this._listeners[f])for(var p=0;p<this._listeners[f].length;p++)this._listeners[f][p].call(this,u)},pipe:function(f){return f.registerPrevious(this)},registerPrevious:function(f){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=f.streamInfo,this.mergeStreamInfo(),this.previous=f;var u=this;return f.on("data",function(p){u.processChunk(p)}),f.on("end",function(){u.end()}),f.on("error",function(p){u.error(p)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var f=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),f=!0),this.previous&&this.previous.resume(),!f},flush:function(){},processChunk:function(f){this.push(f)},withStreamInfo:function(f,u){return this.extraStreamInfo[f]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var f in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,f)&&(this.streamInfo[f]=this.extraStreamInfo[f])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var f="Worker "+this.name;return this.previous?this.previous+" -> "+f:f}},r.exports=c},{}],29:[function(i,r,l){var c=i("../utils"),f=i("./ConvertWorker"),u=i("./GenericWorker"),p=i("../base64"),h=i("../support"),x=i("../external"),_=null;if(h.nodestream)try{_=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(M,b){return new x.Promise(function(S,g){var A=[],U=M._internalType,N=M._outputType,z=M._mimeType;M.on("data",function(P,O){A.push(P),b&&b(O)}).on("error",function(P){A=[],g(P)}).on("end",function(){try{var P=(function(O,W,C){switch(O){case"blob":return c.newBlob(c.transformTo("arraybuffer",W),C);case"base64":return p.encode(W);default:return c.transformTo(O,W)}})(N,(function(O,W){var C,I=0,Z=null,F=0;for(C=0;C<W.length;C++)F+=W[C].length;switch(O){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(Z=new Uint8Array(F),C=0;C<W.length;C++)Z.set(W[C],I),I+=W[C].length;return Z;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+O+"'")}})(U,A),z);S(P)}catch(O){g(O)}A=[]}).resume()})}function v(M,b,S){var g=b;switch(b){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=b,this._mimeType=S,c.checkSupport(g),this._worker=M.pipe(new f(g)),M.lock()}catch(A){this._worker=new u("error"),this._worker.error(A)}}v.prototype={accumulate:function(M){return y(this,M)},on:function(M,b){var S=this;return M==="data"?this._worker.on(M,function(g){b.call(S,g.data,g.meta)}):this._worker.on(M,function(){c.delay(b,arguments,S)}),this},resume:function(){return c.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(M){if(c.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},M)}},r.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var c=new ArrayBuffer(0);try{l.blob=new Blob([c],{type:"application/zip"}).size===0}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);f.append(c),l.blob=f.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!i("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,l){for(var c=i("./utils"),f=i("./support"),u=i("./nodejsUtils"),p=i("./stream/GenericWorker"),h=new Array(256),x=0;x<256;x++)h[x]=252<=x?6:248<=x?5:240<=x?4:224<=x?3:192<=x?2:1;h[254]=h[254]=1;function _(){p.call(this,"utf-8 decode"),this.leftOver=null}function y(){p.call(this,"utf-8 encode")}l.utf8encode=function(v){return f.nodebuffer?u.newBufferFrom(v,"utf-8"):(function(M){var b,S,g,A,U,N=M.length,z=0;for(A=0;A<N;A++)(64512&(S=M.charCodeAt(A)))==55296&&A+1<N&&(64512&(g=M.charCodeAt(A+1)))==56320&&(S=65536+(S-55296<<10)+(g-56320),A++),z+=S<128?1:S<2048?2:S<65536?3:4;for(b=f.uint8array?new Uint8Array(z):new Array(z),A=U=0;U<z;A++)(64512&(S=M.charCodeAt(A)))==55296&&A+1<N&&(64512&(g=M.charCodeAt(A+1)))==56320&&(S=65536+(S-55296<<10)+(g-56320),A++),S<128?b[U++]=S:(S<2048?b[U++]=192|S>>>6:(S<65536?b[U++]=224|S>>>12:(b[U++]=240|S>>>18,b[U++]=128|S>>>12&63),b[U++]=128|S>>>6&63),b[U++]=128|63&S);return b})(v)},l.utf8decode=function(v){return f.nodebuffer?c.transformTo("nodebuffer",v).toString("utf-8"):(function(M){var b,S,g,A,U=M.length,N=new Array(2*U);for(b=S=0;b<U;)if((g=M[b++])<128)N[S++]=g;else if(4<(A=h[g]))N[S++]=65533,b+=A-1;else{for(g&=A===2?31:A===3?15:7;1<A&&b<U;)g=g<<6|63&M[b++],A--;1<A?N[S++]=65533:g<65536?N[S++]=g:(g-=65536,N[S++]=55296|g>>10&1023,N[S++]=56320|1023&g)}return N.length!==S&&(N.subarray?N=N.subarray(0,S):N.length=S),c.applyFromCharCode(N)})(v=c.transformTo(f.uint8array?"uint8array":"array",v))},c.inherits(_,p),_.prototype.processChunk=function(v){var M=c.transformTo(f.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(f.uint8array){var b=M;(M=new Uint8Array(b.length+this.leftOver.length)).set(this.leftOver,0),M.set(b,this.leftOver.length)}else M=this.leftOver.concat(M);this.leftOver=null}var S=(function(A,U){var N;for((U=U||A.length)>A.length&&(U=A.length),N=U-1;0<=N&&(192&A[N])==128;)N--;return N<0||N===0?U:N+h[A[N]]>U?N:U})(M),g=M;S!==M.length&&(f.uint8array?(g=M.subarray(0,S),this.leftOver=M.subarray(S,M.length)):(g=M.slice(0,S),this.leftOver=M.slice(S,M.length))),this.push({data:l.utf8decode(g),meta:v.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=_,c.inherits(y,p),y.prototype.processChunk=function(v){this.push({data:l.utf8encode(v.data),meta:v.meta})},l.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,l){var c=i("./support"),f=i("./base64"),u=i("./nodejsUtils"),p=i("./external");function h(b){return b}function x(b,S){for(var g=0;g<b.length;++g)S[g]=255&b.charCodeAt(g);return S}i("setimmediate"),l.newBlob=function(b,S){l.checkSupport("blob");try{return new Blob([b],{type:S})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(b),g.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(b,S,g){var A=[],U=0,N=b.length;if(N<=g)return String.fromCharCode.apply(null,b);for(;U<N;)S==="array"||S==="nodebuffer"?A.push(String.fromCharCode.apply(null,b.slice(U,Math.min(U+g,N)))):A.push(String.fromCharCode.apply(null,b.subarray(U,Math.min(U+g,N)))),U+=g;return A.join("")},stringifyByChar:function(b){for(var S="",g=0;g<b.length;g++)S+=String.fromCharCode(b[g]);return S},applyCanBeUsed:{uint8array:(function(){try{return c.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return c.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function y(b){var S=65536,g=l.getTypeOf(b),A=!0;if(g==="uint8array"?A=_.applyCanBeUsed.uint8array:g==="nodebuffer"&&(A=_.applyCanBeUsed.nodebuffer),A)for(;1<S;)try{return _.stringifyByChunk(b,g,S)}catch{S=Math.floor(S/2)}return _.stringifyByChar(b)}function v(b,S){for(var g=0;g<b.length;g++)S[g]=b[g];return S}l.applyFromCharCode=y;var M={};M.string={string:h,array:function(b){return x(b,new Array(b.length))},arraybuffer:function(b){return M.string.uint8array(b).buffer},uint8array:function(b){return x(b,new Uint8Array(b.length))},nodebuffer:function(b){return x(b,u.allocBuffer(b.length))}},M.array={string:y,array:h,arraybuffer:function(b){return new Uint8Array(b).buffer},uint8array:function(b){return new Uint8Array(b)},nodebuffer:function(b){return u.newBufferFrom(b)}},M.arraybuffer={string:function(b){return y(new Uint8Array(b))},array:function(b){return v(new Uint8Array(b),new Array(b.byteLength))},arraybuffer:h,uint8array:function(b){return new Uint8Array(b)},nodebuffer:function(b){return u.newBufferFrom(new Uint8Array(b))}},M.uint8array={string:y,array:function(b){return v(b,new Array(b.length))},arraybuffer:function(b){return b.buffer},uint8array:h,nodebuffer:function(b){return u.newBufferFrom(b)}},M.nodebuffer={string:y,array:function(b){return v(b,new Array(b.length))},arraybuffer:function(b){return M.nodebuffer.uint8array(b).buffer},uint8array:function(b){return v(b,new Uint8Array(b.length))},nodebuffer:h},l.transformTo=function(b,S){if(S=S||"",!b)return S;l.checkSupport(b);var g=l.getTypeOf(S);return M[g][b](S)},l.resolve=function(b){for(var S=b.split("/"),g=[],A=0;A<S.length;A++){var U=S[A];U==="."||U===""&&A!==0&&A!==S.length-1||(U===".."?g.pop():g.push(U))}return g.join("/")},l.getTypeOf=function(b){return typeof b=="string"?"string":Object.prototype.toString.call(b)==="[object Array]"?"array":c.nodebuffer&&u.isBuffer(b)?"nodebuffer":c.uint8array&&b instanceof Uint8Array?"uint8array":c.arraybuffer&&b instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(b){if(!c[b.toLowerCase()])throw new Error(b+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(b){var S,g,A="";for(g=0;g<(b||"").length;g++)A+="\\x"+((S=b.charCodeAt(g))<16?"0":"")+S.toString(16).toUpperCase();return A},l.delay=function(b,S,g){setImmediate(function(){b.apply(g||null,S||[])})},l.inherits=function(b,S){function g(){}g.prototype=S.prototype,b.prototype=new g},l.extend=function(){var b,S,g={};for(b=0;b<arguments.length;b++)for(S in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],S)&&g[S]===void 0&&(g[S]=arguments[b][S]);return g},l.prepareContent=function(b,S,g,A,U){return p.Promise.resolve(S).then(function(N){return c.blob&&(N instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(N))!==-1)&&typeof FileReader<"u"?new p.Promise(function(z,P){var O=new FileReader;O.onload=function(W){z(W.target.result)},O.onerror=function(W){P(W.target.error)},O.readAsArrayBuffer(N)}):N}).then(function(N){var z=l.getTypeOf(N);return z?(z==="arraybuffer"?N=l.transformTo("uint8array",N):z==="string"&&(U?N=f.decode(N):g&&A!==!0&&(N=(function(P){return x(P,c.uint8array?new Uint8Array(P.length):new Array(P.length))})(N))),N):p.Promise.reject(new Error("Can't read the data of '"+b+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,l){var c=i("./reader/readerFor"),f=i("./utils"),u=i("./signature"),p=i("./zipEntry"),h=i("./support");function x(_){this.files=[],this.loadOptions=_}x.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+f.pretty(y)+", expected "+f.pretty(_)+")")}},isSignature:function(_,y){var v=this.reader.index;this.reader.setIndex(_);var M=this.reader.readString(4)===y;return this.reader.setIndex(v),M},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),y=h.uint8array?"uint8array":"array",v=f.transformTo(y,_);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,y,v,M=this.zip64EndOfCentralSize-44;0<M;)_=this.reader.readInt(2),y=this.reader.readInt(4),v=this.reader.readData(y),this.zip64ExtensibleData[_]={id:_,length:y,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,y;for(_=0;_<this.files.length;_++)y=this.files[_],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(_=new p({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var y=_;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===f.MAX_VALUE_16BITS||this.diskWithCentralDirStart===f.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===f.MAX_VALUE_16BITS||this.centralDirRecords===f.MAX_VALUE_16BITS||this.centralDirSize===f.MAX_VALUE_32BITS||this.centralDirOffset===f.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var M=y-v;if(0<M)this.isSignature(y,u.CENTRAL_FILE_HEADER)||(this.reader.zero=M);else if(M<0)throw new Error("Corrupted zip: missing "+Math.abs(M)+" bytes.")},prepareReader:function(_){this.reader=c(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=x},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,l){var c=i("./reader/readerFor"),f=i("./utils"),u=i("./compressedObject"),p=i("./crc32"),h=i("./utf8"),x=i("./compressions"),_=i("./support");function y(v,M){this.options=v,this.loadOptions=M}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var M,b;if(v.skip(22),this.fileNameLength=v.readInt(2),b=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(b),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((M=(function(S){for(var g in x)if(Object.prototype.hasOwnProperty.call(x,g)&&x[g].magic===S)return x[g];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+f.pretty(this.compressionMethod)+" unknown (inner file : "+f.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,M,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var M=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(M),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=c(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var M,b,S,g=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<g;)M=v.readInt(2),b=v.readInt(2),S=v.readData(b),this.extraFields[M]={id:M,length:b,value:S};v.setIndex(g)},handleUTF8:function(){var v=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var M=this.findExtraFieldUnicodePath();if(M!==null)this.fileNameStr=M;else{var b=f.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(b)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var g=f.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var M=c(v.value);return M.readInt(1)!==1||p(this.fileName)!==M.readInt(4)?null:h.utf8decode(M.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var M=c(v.value);return M.readInt(1)!==1||p(this.fileComment)!==M.readInt(4)?null:h.utf8decode(M.readData(v.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,l){function c(M,b,S){this.name=M,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=b,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var f=i("./stream/StreamHelper"),u=i("./stream/DataWorker"),p=i("./utf8"),h=i("./compressedObject"),x=i("./stream/GenericWorker");c.prototype={internalStream:function(M){var b=null,S="string";try{if(!M)throw new Error("No output type specified.");var g=(S=M.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),b=this._decompressWorker();var A=!this._dataBinary;A&&!g&&(b=b.pipe(new p.Utf8EncodeWorker)),!A&&g&&(b=b.pipe(new p.Utf8DecodeWorker))}catch(U){(b=new x("error")).error(U)}return new f(b,S,"")},async:function(M,b){return this.internalStream(M).accumulate(b)},nodeStream:function(M,b){return this.internalStream(M||"nodebuffer").toNodejsStream(b)},_compressWorker:function(M,b){if(this._data instanceof h&&this._data.compression.magic===M.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new p.Utf8EncodeWorker)),h.createWorkerFrom(S,M,b)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof x?this._data:new u(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<_.length;v++)c.prototype[_[v]]=y;r.exports=c},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,l){(function(c){var f,u,p=c.MutationObserver||c.WebKitMutationObserver;if(p){var h=0,x=new p(M),_=c.document.createTextNode("");x.observe(_,{characterData:!0}),f=function(){_.data=h=++h%2}}else if(c.setImmediate||c.MessageChannel===void 0)f="document"in c&&"onreadystatechange"in c.document.createElement("script")?function(){var b=c.document.createElement("script");b.onreadystatechange=function(){M(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},c.document.documentElement.appendChild(b)}:function(){setTimeout(M,0)};else{var y=new c.MessageChannel;y.port1.onmessage=M,f=function(){y.port2.postMessage(0)}}var v=[];function M(){var b,S;u=!0;for(var g=v.length;g;){for(S=v,v=[],b=-1;++b<g;)S[b]();g=v.length}u=!1}r.exports=function(b){v.push(b)!==1||u||f()}}).call(this,typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,l){var c=i("immediate");function f(){}var u={},p=["REJECTED"],h=["FULFILLED"],x=["PENDING"];function _(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=x,this.queue=[],this.outcome=void 0,g!==f&&b(this,g)}function y(g,A,U){this.promise=g,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof U=="function"&&(this.onRejected=U,this.callRejected=this.otherCallRejected)}function v(g,A,U){c(function(){var N;try{N=A(U)}catch(z){return u.reject(g,z)}N===g?u.reject(g,new TypeError("Cannot resolve promise with itself")):u.resolve(g,N)})}function M(g){var A=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof A=="function")return function(){A.apply(g,arguments)}}function b(g,A){var U=!1;function N(O){U||(U=!0,u.reject(g,O))}function z(O){U||(U=!0,u.resolve(g,O))}var P=S(function(){A(z,N)});P.status==="error"&&N(P.value)}function S(g,A){var U={};try{U.value=g(A),U.status="success"}catch(N){U.status="error",U.value=N}return U}(r.exports=_).prototype.finally=function(g){if(typeof g!="function")return this;var A=this.constructor;return this.then(function(U){return A.resolve(g()).then(function(){return U})},function(U){return A.resolve(g()).then(function(){throw U})})},_.prototype.catch=function(g){return this.then(null,g)},_.prototype.then=function(g,A){if(typeof g!="function"&&this.state===h||typeof A!="function"&&this.state===p)return this;var U=new this.constructor(f);return this.state!==x?v(U,this.state===h?g:A,this.outcome):this.queue.push(new y(U,g,A)),U},y.prototype.callFulfilled=function(g){u.resolve(this.promise,g)},y.prototype.otherCallFulfilled=function(g){v(this.promise,this.onFulfilled,g)},y.prototype.callRejected=function(g){u.reject(this.promise,g)},y.prototype.otherCallRejected=function(g){v(this.promise,this.onRejected,g)},u.resolve=function(g,A){var U=S(M,A);if(U.status==="error")return u.reject(g,U.value);var N=U.value;if(N)b(g,N);else{g.state=h,g.outcome=A;for(var z=-1,P=g.queue.length;++z<P;)g.queue[z].callFulfilled(A)}return g},u.reject=function(g,A){g.state=p,g.outcome=A;for(var U=-1,N=g.queue.length;++U<N;)g.queue[U].callRejected(A);return g},_.resolve=function(g){return g instanceof this?g:u.resolve(new this(f),g)},_.reject=function(g){var A=new this(f);return u.reject(A,g)},_.all=function(g){var A=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var U=g.length,N=!1;if(!U)return this.resolve([]);for(var z=new Array(U),P=0,O=-1,W=new this(f);++O<U;)C(g[O],O);return W;function C(I,Z){A.resolve(I).then(function(F){z[Z]=F,++P!==U||N||(N=!0,u.resolve(W,z))},function(F){N||(N=!0,u.reject(W,F))})}},_.race=function(g){var A=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var U=g.length,N=!1;if(!U)return this.resolve([]);for(var z=-1,P=new this(f);++z<U;)O=g[z],A.resolve(O).then(function(W){N||(N=!0,u.resolve(P,W))},function(W){N||(N=!0,u.reject(P,W))});var O;return P}},{immediate:36}],38:[function(i,r,l){var c={};(0,i("./lib/utils/common").assign)(c,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=c},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,l){var c=i("./zlib/deflate"),f=i("./utils/common"),u=i("./utils/strings"),p=i("./zlib/messages"),h=i("./zlib/zstream"),x=Object.prototype.toString,_=0,y=-1,v=0,M=8;function b(g){if(!(this instanceof b))return new b(g);this.options=f.assign({level:y,method:M,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},g||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var U=c.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(U!==_)throw new Error(p[U]);if(A.header&&c.deflateSetHeader(this.strm,A.header),A.dictionary){var N;if(N=typeof A.dictionary=="string"?u.string2buf(A.dictionary):x.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(U=c.deflateSetDictionary(this.strm,N))!==_)throw new Error(p[U]);this._dict_set=!0}}function S(g,A){var U=new b(A);if(U.push(g,!0),U.err)throw U.msg||p[U.err];return U.result}b.prototype.push=function(g,A){var U,N,z=this.strm,P=this.options.chunkSize;if(this.ended)return!1;N=A===~~A?A:A===!0?4:0,typeof g=="string"?z.input=u.string2buf(g):x.call(g)==="[object ArrayBuffer]"?z.input=new Uint8Array(g):z.input=g,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new f.Buf8(P),z.next_out=0,z.avail_out=P),(U=c.deflate(z,N))!==1&&U!==_)return this.onEnd(U),!(this.ended=!0);z.avail_out!==0&&(z.avail_in!==0||N!==4&&N!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(f.shrinkBuf(z.output,z.next_out))):this.onData(f.shrinkBuf(z.output,z.next_out)))}while((0<z.avail_in||z.avail_out===0)&&U!==1);return N===4?(U=c.deflateEnd(this.strm),this.onEnd(U),this.ended=!0,U===_):N!==2||(this.onEnd(_),!(z.avail_out=0))},b.prototype.onData=function(g){this.chunks.push(g)},b.prototype.onEnd=function(g){g===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=f.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},l.Deflate=b,l.deflate=S,l.deflateRaw=function(g,A){return(A=A||{}).raw=!0,S(g,A)},l.gzip=function(g,A){return(A=A||{}).gzip=!0,S(g,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,l){var c=i("./zlib/inflate"),f=i("./utils/common"),u=i("./utils/strings"),p=i("./zlib/constants"),h=i("./zlib/messages"),x=i("./zlib/zstream"),_=i("./zlib/gzheader"),y=Object.prototype.toString;function v(b){if(!(this instanceof v))return new v(b);this.options=f.assign({chunkSize:16384,windowBits:0,to:""},b||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||b&&b.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new x,this.strm.avail_out=0;var g=c.inflateInit2(this.strm,S.windowBits);if(g!==p.Z_OK)throw new Error(h[g]);this.header=new _,c.inflateGetHeader(this.strm,this.header)}function M(b,S){var g=new v(S);if(g.push(b,!0),g.err)throw g.msg||h[g.err];return g.result}v.prototype.push=function(b,S){var g,A,U,N,z,P,O=this.strm,W=this.options.chunkSize,C=this.options.dictionary,I=!1;if(this.ended)return!1;A=S===~~S?S:S===!0?p.Z_FINISH:p.Z_NO_FLUSH,typeof b=="string"?O.input=u.binstring2buf(b):y.call(b)==="[object ArrayBuffer]"?O.input=new Uint8Array(b):O.input=b,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new f.Buf8(W),O.next_out=0,O.avail_out=W),(g=c.inflate(O,p.Z_NO_FLUSH))===p.Z_NEED_DICT&&C&&(P=typeof C=="string"?u.string2buf(C):y.call(C)==="[object ArrayBuffer]"?new Uint8Array(C):C,g=c.inflateSetDictionary(this.strm,P)),g===p.Z_BUF_ERROR&&I===!0&&(g=p.Z_OK,I=!1),g!==p.Z_STREAM_END&&g!==p.Z_OK)return this.onEnd(g),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&g!==p.Z_STREAM_END&&(O.avail_in!==0||A!==p.Z_FINISH&&A!==p.Z_SYNC_FLUSH)||(this.options.to==="string"?(U=u.utf8border(O.output,O.next_out),N=O.next_out-U,z=u.buf2string(O.output,U),O.next_out=N,O.avail_out=W-N,N&&f.arraySet(O.output,O.output,U,N,0),this.onData(z)):this.onData(f.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(I=!0)}while((0<O.avail_in||O.avail_out===0)&&g!==p.Z_STREAM_END);return g===p.Z_STREAM_END&&(A=p.Z_FINISH),A===p.Z_FINISH?(g=c.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===p.Z_OK):A!==p.Z_SYNC_FLUSH||(this.onEnd(p.Z_OK),!(O.avail_out=0))},v.prototype.onData=function(b){this.chunks.push(b)},v.prototype.onEnd=function(b){b===p.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=f.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},l.Inflate=v,l.inflate=M,l.inflateRaw=function(b,S){return(S=S||{}).raw=!0,M(b,S)},l.ungzip=M},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,l){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(p){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var x=h.shift();if(x){if(typeof x!="object")throw new TypeError(x+"must be non-object");for(var _ in x)x.hasOwnProperty(_)&&(p[_]=x[_])}}return p},l.shrinkBuf=function(p,h){return p.length===h?p:p.subarray?p.subarray(0,h):(p.length=h,p)};var f={arraySet:function(p,h,x,_,y){if(h.subarray&&p.subarray)p.set(h.subarray(x,x+_),y);else for(var v=0;v<_;v++)p[y+v]=h[x+v]},flattenChunks:function(p){var h,x,_,y,v,M;for(h=_=0,x=p.length;h<x;h++)_+=p[h].length;for(M=new Uint8Array(_),h=y=0,x=p.length;h<x;h++)v=p[h],M.set(v,y),y+=v.length;return M}},u={arraySet:function(p,h,x,_,y){for(var v=0;v<_;v++)p[y+v]=h[x+v]},flattenChunks:function(p){return[].concat.apply([],p)}};l.setTyped=function(p){p?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,f)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,u))},l.setTyped(c)},{}],42:[function(i,r,l){var c=i("./common"),f=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var p=new c.Buf8(256),h=0;h<256;h++)p[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function x(_,y){if(y<65537&&(_.subarray&&u||!_.subarray&&f))return String.fromCharCode.apply(null,c.shrinkBuf(_,y));for(var v="",M=0;M<y;M++)v+=String.fromCharCode(_[M]);return v}p[254]=p[254]=1,l.string2buf=function(_){var y,v,M,b,S,g=_.length,A=0;for(b=0;b<g;b++)(64512&(v=_.charCodeAt(b)))==55296&&b+1<g&&(64512&(M=_.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(M-56320),b++),A+=v<128?1:v<2048?2:v<65536?3:4;for(y=new c.Buf8(A),b=S=0;S<A;b++)(64512&(v=_.charCodeAt(b)))==55296&&b+1<g&&(64512&(M=_.charCodeAt(b+1)))==56320&&(v=65536+(v-55296<<10)+(M-56320),b++),v<128?y[S++]=v:(v<2048?y[S++]=192|v>>>6:(v<65536?y[S++]=224|v>>>12:(y[S++]=240|v>>>18,y[S++]=128|v>>>12&63),y[S++]=128|v>>>6&63),y[S++]=128|63&v);return y},l.buf2binstring=function(_){return x(_,_.length)},l.binstring2buf=function(_){for(var y=new c.Buf8(_.length),v=0,M=y.length;v<M;v++)y[v]=_.charCodeAt(v);return y},l.buf2string=function(_,y){var v,M,b,S,g=y||_.length,A=new Array(2*g);for(v=M=0;v<g;)if((b=_[v++])<128)A[M++]=b;else if(4<(S=p[b]))A[M++]=65533,v+=S-1;else{for(b&=S===2?31:S===3?15:7;1<S&&v<g;)b=b<<6|63&_[v++],S--;1<S?A[M++]=65533:b<65536?A[M++]=b:(b-=65536,A[M++]=55296|b>>10&1023,A[M++]=56320|1023&b)}return x(A,M)},l.utf8border=function(_,y){var v;for((y=y||_.length)>_.length&&(y=_.length),v=y-1;0<=v&&(192&_[v])==128;)v--;return v<0||v===0?y:v+p[_[v]]>y?v:y}},{"./common":41}],43:[function(i,r,l){r.exports=function(c,f,u,p){for(var h=65535&c|0,x=c>>>16&65535|0,_=0;u!==0;){for(u-=_=2e3<u?2e3:u;x=x+(h=h+f[p++]|0)|0,--_;);h%=65521,x%=65521}return h|x<<16|0}},{}],44:[function(i,r,l){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,l){var c=(function(){for(var f,u=[],p=0;p<256;p++){f=p;for(var h=0;h<8;h++)f=1&f?3988292384^f>>>1:f>>>1;u[p]=f}return u})();r.exports=function(f,u,p,h){var x=c,_=h+p;f^=-1;for(var y=h;y<_;y++)f=f>>>8^x[255&(f^u[y])];return-1^f}},{}],46:[function(i,r,l){var c,f=i("../utils/common"),u=i("./trees"),p=i("./adler32"),h=i("./crc32"),x=i("./messages"),_=0,y=4,v=0,M=-2,b=-1,S=4,g=2,A=8,U=9,N=286,z=30,P=19,O=2*N+1,W=15,C=3,I=258,Z=I+C+1,F=42,j=113,T=1,K=2,V=3,G=4;function nt(R,St){return R.msg=x[St],St}function J(R){return(R<<1)-(4<R?9:0)}function ht(R){for(var St=R.length;0<=--St;)R[St]=0}function L(R){var St=R.state,ot=St.pending;ot>R.avail_out&&(ot=R.avail_out),ot!==0&&(f.arraySet(R.output,St.pending_buf,St.pending_out,ot,R.next_out),R.next_out+=ot,St.pending_out+=ot,R.total_out+=ot,R.avail_out-=ot,St.pending-=ot,St.pending===0&&(St.pending_out=0))}function X(R,St){u._tr_flush_block(R,0<=R.block_start?R.block_start:-1,R.strstart-R.block_start,St),R.block_start=R.strstart,L(R.strm)}function ct(R,St){R.pending_buf[R.pending++]=St}function dt(R,St){R.pending_buf[R.pending++]=St>>>8&255,R.pending_buf[R.pending++]=255&St}function vt(R,St){var ot,Y,D=R.max_chain_length,et=R.strstart,Et=R.prev_length,At=R.nice_match,$=R.strstart>R.w_size-Z?R.strstart-(R.w_size-Z):0,B=R.window,w=R.w_mask,q=R.prev,lt=R.strstart+I,Tt=B[et+Et-1],ut=B[et+Et];R.prev_length>=R.good_match&&(D>>=2),At>R.lookahead&&(At=R.lookahead);do if(B[(ot=St)+Et]===ut&&B[ot+Et-1]===Tt&&B[ot]===B[et]&&B[++ot]===B[et+1]){et+=2,ot++;do;while(B[++et]===B[++ot]&&B[++et]===B[++ot]&&B[++et]===B[++ot]&&B[++et]===B[++ot]&&B[++et]===B[++ot]&&B[++et]===B[++ot]&&B[++et]===B[++ot]&&B[++et]===B[++ot]&&et<lt);if(Y=I-(lt-et),et=lt-I,Et<Y){if(R.match_start=St,At<=(Et=Y))break;Tt=B[et+Et-1],ut=B[et+Et]}}while((St=q[St&w])>$&&--D!=0);return Et<=R.lookahead?Et:R.lookahead}function rt(R){var St,ot,Y,D,et,Et,At,$,B,w,q=R.w_size;do{if(D=R.window_size-R.lookahead-R.strstart,R.strstart>=q+(q-Z)){for(f.arraySet(R.window,R.window,q,q,0),R.match_start-=q,R.strstart-=q,R.block_start-=q,St=ot=R.hash_size;Y=R.head[--St],R.head[St]=q<=Y?Y-q:0,--ot;);for(St=ot=q;Y=R.prev[--St],R.prev[St]=q<=Y?Y-q:0,--ot;);D+=q}if(R.strm.avail_in===0)break;if(Et=R.strm,At=R.window,$=R.strstart+R.lookahead,B=D,w=void 0,w=Et.avail_in,B<w&&(w=B),ot=w===0?0:(Et.avail_in-=w,f.arraySet(At,Et.input,Et.next_in,w,$),Et.state.wrap===1?Et.adler=p(Et.adler,At,w,$):Et.state.wrap===2&&(Et.adler=h(Et.adler,At,w,$)),Et.next_in+=w,Et.total_in+=w,w),R.lookahead+=ot,R.lookahead+R.insert>=C)for(et=R.strstart-R.insert,R.ins_h=R.window[et],R.ins_h=(R.ins_h<<R.hash_shift^R.window[et+1])&R.hash_mask;R.insert&&(R.ins_h=(R.ins_h<<R.hash_shift^R.window[et+C-1])&R.hash_mask,R.prev[et&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=et,et++,R.insert--,!(R.lookahead+R.insert<C)););}while(R.lookahead<Z&&R.strm.avail_in!==0)}function xt(R,St){for(var ot,Y;;){if(R.lookahead<Z){if(rt(R),R.lookahead<Z&&St===_)return T;if(R.lookahead===0)break}if(ot=0,R.lookahead>=C&&(R.ins_h=(R.ins_h<<R.hash_shift^R.window[R.strstart+C-1])&R.hash_mask,ot=R.prev[R.strstart&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=R.strstart),ot!==0&&R.strstart-ot<=R.w_size-Z&&(R.match_length=vt(R,ot)),R.match_length>=C)if(Y=u._tr_tally(R,R.strstart-R.match_start,R.match_length-C),R.lookahead-=R.match_length,R.match_length<=R.max_lazy_match&&R.lookahead>=C){for(R.match_length--;R.strstart++,R.ins_h=(R.ins_h<<R.hash_shift^R.window[R.strstart+C-1])&R.hash_mask,ot=R.prev[R.strstart&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=R.strstart,--R.match_length!=0;);R.strstart++}else R.strstart+=R.match_length,R.match_length=0,R.ins_h=R.window[R.strstart],R.ins_h=(R.ins_h<<R.hash_shift^R.window[R.strstart+1])&R.hash_mask;else Y=u._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++;if(Y&&(X(R,!1),R.strm.avail_out===0))return T}return R.insert=R.strstart<C-1?R.strstart:C-1,St===y?(X(R,!0),R.strm.avail_out===0?V:G):R.last_lit&&(X(R,!1),R.strm.avail_out===0)?T:K}function Nt(R,St){for(var ot,Y,D;;){if(R.lookahead<Z){if(rt(R),R.lookahead<Z&&St===_)return T;if(R.lookahead===0)break}if(ot=0,R.lookahead>=C&&(R.ins_h=(R.ins_h<<R.hash_shift^R.window[R.strstart+C-1])&R.hash_mask,ot=R.prev[R.strstart&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=R.strstart),R.prev_length=R.match_length,R.prev_match=R.match_start,R.match_length=C-1,ot!==0&&R.prev_length<R.max_lazy_match&&R.strstart-ot<=R.w_size-Z&&(R.match_length=vt(R,ot),R.match_length<=5&&(R.strategy===1||R.match_length===C&&4096<R.strstart-R.match_start)&&(R.match_length=C-1)),R.prev_length>=C&&R.match_length<=R.prev_length){for(D=R.strstart+R.lookahead-C,Y=u._tr_tally(R,R.strstart-1-R.prev_match,R.prev_length-C),R.lookahead-=R.prev_length-1,R.prev_length-=2;++R.strstart<=D&&(R.ins_h=(R.ins_h<<R.hash_shift^R.window[R.strstart+C-1])&R.hash_mask,ot=R.prev[R.strstart&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=R.strstart),--R.prev_length!=0;);if(R.match_available=0,R.match_length=C-1,R.strstart++,Y&&(X(R,!1),R.strm.avail_out===0))return T}else if(R.match_available){if((Y=u._tr_tally(R,0,R.window[R.strstart-1]))&&X(R,!1),R.strstart++,R.lookahead--,R.strm.avail_out===0)return T}else R.match_available=1,R.strstart++,R.lookahead--}return R.match_available&&(Y=u._tr_tally(R,0,R.window[R.strstart-1]),R.match_available=0),R.insert=R.strstart<C-1?R.strstart:C-1,St===y?(X(R,!0),R.strm.avail_out===0?V:G):R.last_lit&&(X(R,!1),R.strm.avail_out===0)?T:K}function Pt(R,St,ot,Y,D){this.good_length=R,this.max_lazy=St,this.nice_length=ot,this.max_chain=Y,this.func=D}function Bt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new f.Buf16(2*O),this.dyn_dtree=new f.Buf16(2*(2*z+1)),this.bl_tree=new f.Buf16(2*(2*P+1)),ht(this.dyn_ltree),ht(this.dyn_dtree),ht(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new f.Buf16(W+1),this.heap=new f.Buf16(2*N+1),ht(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new f.Buf16(2*N+1),ht(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ie(R){var St;return R&&R.state?(R.total_in=R.total_out=0,R.data_type=g,(St=R.state).pending=0,St.pending_out=0,St.wrap<0&&(St.wrap=-St.wrap),St.status=St.wrap?F:j,R.adler=St.wrap===2?0:1,St.last_flush=_,u._tr_init(St),v):nt(R,M)}function we(R){var St=ie(R);return St===v&&(function(ot){ot.window_size=2*ot.w_size,ht(ot.head),ot.max_lazy_match=c[ot.level].max_lazy,ot.good_match=c[ot.level].good_length,ot.nice_match=c[ot.level].nice_length,ot.max_chain_length=c[ot.level].max_chain,ot.strstart=0,ot.block_start=0,ot.lookahead=0,ot.insert=0,ot.match_length=ot.prev_length=C-1,ot.match_available=0,ot.ins_h=0})(R.state),St}function ue(R,St,ot,Y,D,et){if(!R)return M;var Et=1;if(St===b&&(St=6),Y<0?(Et=0,Y=-Y):15<Y&&(Et=2,Y-=16),D<1||U<D||ot!==A||Y<8||15<Y||St<0||9<St||et<0||S<et)return nt(R,M);Y===8&&(Y=9);var At=new Bt;return(R.state=At).strm=R,At.wrap=Et,At.gzhead=null,At.w_bits=Y,At.w_size=1<<At.w_bits,At.w_mask=At.w_size-1,At.hash_bits=D+7,At.hash_size=1<<At.hash_bits,At.hash_mask=At.hash_size-1,At.hash_shift=~~((At.hash_bits+C-1)/C),At.window=new f.Buf8(2*At.w_size),At.head=new f.Buf16(At.hash_size),At.prev=new f.Buf16(At.w_size),At.lit_bufsize=1<<D+6,At.pending_buf_size=4*At.lit_bufsize,At.pending_buf=new f.Buf8(At.pending_buf_size),At.d_buf=1*At.lit_bufsize,At.l_buf=3*At.lit_bufsize,At.level=St,At.strategy=et,At.method=ot,we(R)}c=[new Pt(0,0,0,0,function(R,St){var ot=65535;for(ot>R.pending_buf_size-5&&(ot=R.pending_buf_size-5);;){if(R.lookahead<=1){if(rt(R),R.lookahead===0&&St===_)return T;if(R.lookahead===0)break}R.strstart+=R.lookahead,R.lookahead=0;var Y=R.block_start+ot;if((R.strstart===0||R.strstart>=Y)&&(R.lookahead=R.strstart-Y,R.strstart=Y,X(R,!1),R.strm.avail_out===0)||R.strstart-R.block_start>=R.w_size-Z&&(X(R,!1),R.strm.avail_out===0))return T}return R.insert=0,St===y?(X(R,!0),R.strm.avail_out===0?V:G):(R.strstart>R.block_start&&(X(R,!1),R.strm.avail_out),T)}),new Pt(4,4,8,4,xt),new Pt(4,5,16,8,xt),new Pt(4,6,32,32,xt),new Pt(4,4,16,16,Nt),new Pt(8,16,32,32,Nt),new Pt(8,16,128,128,Nt),new Pt(8,32,128,256,Nt),new Pt(32,128,258,1024,Nt),new Pt(32,258,258,4096,Nt)],l.deflateInit=function(R,St){return ue(R,St,A,15,8,0)},l.deflateInit2=ue,l.deflateReset=we,l.deflateResetKeep=ie,l.deflateSetHeader=function(R,St){return R&&R.state?R.state.wrap!==2?M:(R.state.gzhead=St,v):M},l.deflate=function(R,St){var ot,Y,D,et;if(!R||!R.state||5<St||St<0)return R?nt(R,M):M;if(Y=R.state,!R.output||!R.input&&R.avail_in!==0||Y.status===666&&St!==y)return nt(R,R.avail_out===0?-5:M);if(Y.strm=R,ot=Y.last_flush,Y.last_flush=St,Y.status===F)if(Y.wrap===2)R.adler=0,ct(Y,31),ct(Y,139),ct(Y,8),Y.gzhead?(ct(Y,(Y.gzhead.text?1:0)+(Y.gzhead.hcrc?2:0)+(Y.gzhead.extra?4:0)+(Y.gzhead.name?8:0)+(Y.gzhead.comment?16:0)),ct(Y,255&Y.gzhead.time),ct(Y,Y.gzhead.time>>8&255),ct(Y,Y.gzhead.time>>16&255),ct(Y,Y.gzhead.time>>24&255),ct(Y,Y.level===9?2:2<=Y.strategy||Y.level<2?4:0),ct(Y,255&Y.gzhead.os),Y.gzhead.extra&&Y.gzhead.extra.length&&(ct(Y,255&Y.gzhead.extra.length),ct(Y,Y.gzhead.extra.length>>8&255)),Y.gzhead.hcrc&&(R.adler=h(R.adler,Y.pending_buf,Y.pending,0)),Y.gzindex=0,Y.status=69):(ct(Y,0),ct(Y,0),ct(Y,0),ct(Y,0),ct(Y,0),ct(Y,Y.level===9?2:2<=Y.strategy||Y.level<2?4:0),ct(Y,3),Y.status=j);else{var Et=A+(Y.w_bits-8<<4)<<8;Et|=(2<=Y.strategy||Y.level<2?0:Y.level<6?1:Y.level===6?2:3)<<6,Y.strstart!==0&&(Et|=32),Et+=31-Et%31,Y.status=j,dt(Y,Et),Y.strstart!==0&&(dt(Y,R.adler>>>16),dt(Y,65535&R.adler)),R.adler=1}if(Y.status===69)if(Y.gzhead.extra){for(D=Y.pending;Y.gzindex<(65535&Y.gzhead.extra.length)&&(Y.pending!==Y.pending_buf_size||(Y.gzhead.hcrc&&Y.pending>D&&(R.adler=h(R.adler,Y.pending_buf,Y.pending-D,D)),L(R),D=Y.pending,Y.pending!==Y.pending_buf_size));)ct(Y,255&Y.gzhead.extra[Y.gzindex]),Y.gzindex++;Y.gzhead.hcrc&&Y.pending>D&&(R.adler=h(R.adler,Y.pending_buf,Y.pending-D,D)),Y.gzindex===Y.gzhead.extra.length&&(Y.gzindex=0,Y.status=73)}else Y.status=73;if(Y.status===73)if(Y.gzhead.name){D=Y.pending;do{if(Y.pending===Y.pending_buf_size&&(Y.gzhead.hcrc&&Y.pending>D&&(R.adler=h(R.adler,Y.pending_buf,Y.pending-D,D)),L(R),D=Y.pending,Y.pending===Y.pending_buf_size)){et=1;break}et=Y.gzindex<Y.gzhead.name.length?255&Y.gzhead.name.charCodeAt(Y.gzindex++):0,ct(Y,et)}while(et!==0);Y.gzhead.hcrc&&Y.pending>D&&(R.adler=h(R.adler,Y.pending_buf,Y.pending-D,D)),et===0&&(Y.gzindex=0,Y.status=91)}else Y.status=91;if(Y.status===91)if(Y.gzhead.comment){D=Y.pending;do{if(Y.pending===Y.pending_buf_size&&(Y.gzhead.hcrc&&Y.pending>D&&(R.adler=h(R.adler,Y.pending_buf,Y.pending-D,D)),L(R),D=Y.pending,Y.pending===Y.pending_buf_size)){et=1;break}et=Y.gzindex<Y.gzhead.comment.length?255&Y.gzhead.comment.charCodeAt(Y.gzindex++):0,ct(Y,et)}while(et!==0);Y.gzhead.hcrc&&Y.pending>D&&(R.adler=h(R.adler,Y.pending_buf,Y.pending-D,D)),et===0&&(Y.status=103)}else Y.status=103;if(Y.status===103&&(Y.gzhead.hcrc?(Y.pending+2>Y.pending_buf_size&&L(R),Y.pending+2<=Y.pending_buf_size&&(ct(Y,255&R.adler),ct(Y,R.adler>>8&255),R.adler=0,Y.status=j)):Y.status=j),Y.pending!==0){if(L(R),R.avail_out===0)return Y.last_flush=-1,v}else if(R.avail_in===0&&J(St)<=J(ot)&&St!==y)return nt(R,-5);if(Y.status===666&&R.avail_in!==0)return nt(R,-5);if(R.avail_in!==0||Y.lookahead!==0||St!==_&&Y.status!==666){var At=Y.strategy===2?(function($,B){for(var w;;){if($.lookahead===0&&(rt($),$.lookahead===0)){if(B===_)return T;break}if($.match_length=0,w=u._tr_tally($,0,$.window[$.strstart]),$.lookahead--,$.strstart++,w&&(X($,!1),$.strm.avail_out===0))return T}return $.insert=0,B===y?(X($,!0),$.strm.avail_out===0?V:G):$.last_lit&&(X($,!1),$.strm.avail_out===0)?T:K})(Y,St):Y.strategy===3?(function($,B){for(var w,q,lt,Tt,ut=$.window;;){if($.lookahead<=I){if(rt($),$.lookahead<=I&&B===_)return T;if($.lookahead===0)break}if($.match_length=0,$.lookahead>=C&&0<$.strstart&&(q=ut[lt=$.strstart-1])===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]){Tt=$.strstart+I;do;while(q===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]&&q===ut[++lt]&&lt<Tt);$.match_length=I-(Tt-lt),$.match_length>$.lookahead&&($.match_length=$.lookahead)}if($.match_length>=C?(w=u._tr_tally($,1,$.match_length-C),$.lookahead-=$.match_length,$.strstart+=$.match_length,$.match_length=0):(w=u._tr_tally($,0,$.window[$.strstart]),$.lookahead--,$.strstart++),w&&(X($,!1),$.strm.avail_out===0))return T}return $.insert=0,B===y?(X($,!0),$.strm.avail_out===0?V:G):$.last_lit&&(X($,!1),$.strm.avail_out===0)?T:K})(Y,St):c[Y.level].func(Y,St);if(At!==V&&At!==G||(Y.status=666),At===T||At===V)return R.avail_out===0&&(Y.last_flush=-1),v;if(At===K&&(St===1?u._tr_align(Y):St!==5&&(u._tr_stored_block(Y,0,0,!1),St===3&&(ht(Y.head),Y.lookahead===0&&(Y.strstart=0,Y.block_start=0,Y.insert=0))),L(R),R.avail_out===0))return Y.last_flush=-1,v}return St!==y?v:Y.wrap<=0?1:(Y.wrap===2?(ct(Y,255&R.adler),ct(Y,R.adler>>8&255),ct(Y,R.adler>>16&255),ct(Y,R.adler>>24&255),ct(Y,255&R.total_in),ct(Y,R.total_in>>8&255),ct(Y,R.total_in>>16&255),ct(Y,R.total_in>>24&255)):(dt(Y,R.adler>>>16),dt(Y,65535&R.adler)),L(R),0<Y.wrap&&(Y.wrap=-Y.wrap),Y.pending!==0?v:1)},l.deflateEnd=function(R){var St;return R&&R.state?(St=R.state.status)!==F&&St!==69&&St!==73&&St!==91&&St!==103&&St!==j&&St!==666?nt(R,M):(R.state=null,St===j?nt(R,-3):v):M},l.deflateSetDictionary=function(R,St){var ot,Y,D,et,Et,At,$,B,w=St.length;if(!R||!R.state||(et=(ot=R.state).wrap)===2||et===1&&ot.status!==F||ot.lookahead)return M;for(et===1&&(R.adler=p(R.adler,St,w,0)),ot.wrap=0,w>=ot.w_size&&(et===0&&(ht(ot.head),ot.strstart=0,ot.block_start=0,ot.insert=0),B=new f.Buf8(ot.w_size),f.arraySet(B,St,w-ot.w_size,ot.w_size,0),St=B,w=ot.w_size),Et=R.avail_in,At=R.next_in,$=R.input,R.avail_in=w,R.next_in=0,R.input=St,rt(ot);ot.lookahead>=C;){for(Y=ot.strstart,D=ot.lookahead-(C-1);ot.ins_h=(ot.ins_h<<ot.hash_shift^ot.window[Y+C-1])&ot.hash_mask,ot.prev[Y&ot.w_mask]=ot.head[ot.ins_h],ot.head[ot.ins_h]=Y,Y++,--D;);ot.strstart=Y,ot.lookahead=C-1,rt(ot)}return ot.strstart+=ot.lookahead,ot.block_start=ot.strstart,ot.insert=ot.lookahead,ot.lookahead=0,ot.match_length=ot.prev_length=C-1,ot.match_available=0,R.next_in=At,R.input=$,R.avail_in=Et,ot.wrap=et,v},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,l){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,l){r.exports=function(c,f){var u,p,h,x,_,y,v,M,b,S,g,A,U,N,z,P,O,W,C,I,Z,F,j,T,K;u=c.state,p=c.next_in,T=c.input,h=p+(c.avail_in-5),x=c.next_out,K=c.output,_=x-(f-c.avail_out),y=x+(c.avail_out-257),v=u.dmax,M=u.wsize,b=u.whave,S=u.wnext,g=u.window,A=u.hold,U=u.bits,N=u.lencode,z=u.distcode,P=(1<<u.lenbits)-1,O=(1<<u.distbits)-1;t:do{U<15&&(A+=T[p++]<<U,U+=8,A+=T[p++]<<U,U+=8),W=N[A&P];e:for(;;){if(A>>>=C=W>>>24,U-=C,(C=W>>>16&255)===0)K[x++]=65535&W;else{if(!(16&C)){if((64&C)==0){W=N[(65535&W)+(A&(1<<C)-1)];continue e}if(32&C){u.mode=12;break t}c.msg="invalid literal/length code",u.mode=30;break t}I=65535&W,(C&=15)&&(U<C&&(A+=T[p++]<<U,U+=8),I+=A&(1<<C)-1,A>>>=C,U-=C),U<15&&(A+=T[p++]<<U,U+=8,A+=T[p++]<<U,U+=8),W=z[A&O];n:for(;;){if(A>>>=C=W>>>24,U-=C,!(16&(C=W>>>16&255))){if((64&C)==0){W=z[(65535&W)+(A&(1<<C)-1)];continue n}c.msg="invalid distance code",u.mode=30;break t}if(Z=65535&W,U<(C&=15)&&(A+=T[p++]<<U,(U+=8)<C&&(A+=T[p++]<<U,U+=8)),v<(Z+=A&(1<<C)-1)){c.msg="invalid distance too far back",u.mode=30;break t}if(A>>>=C,U-=C,(C=x-_)<Z){if(b<(C=Z-C)&&u.sane){c.msg="invalid distance too far back",u.mode=30;break t}if(j=g,(F=0)===S){if(F+=M-C,C<I){for(I-=C;K[x++]=g[F++],--C;);F=x-Z,j=K}}else if(S<C){if(F+=M+S-C,(C-=S)<I){for(I-=C;K[x++]=g[F++],--C;);if(F=0,S<I){for(I-=C=S;K[x++]=g[F++],--C;);F=x-Z,j=K}}}else if(F+=S-C,C<I){for(I-=C;K[x++]=g[F++],--C;);F=x-Z,j=K}for(;2<I;)K[x++]=j[F++],K[x++]=j[F++],K[x++]=j[F++],I-=3;I&&(K[x++]=j[F++],1<I&&(K[x++]=j[F++]))}else{for(F=x-Z;K[x++]=K[F++],K[x++]=K[F++],K[x++]=K[F++],2<(I-=3););I&&(K[x++]=K[F++],1<I&&(K[x++]=K[F++]))}break}}break}}while(p<h&&x<y);p-=I=U>>3,A&=(1<<(U-=I<<3))-1,c.next_in=p,c.next_out=x,c.avail_in=p<h?h-p+5:5-(p-h),c.avail_out=x<y?y-x+257:257-(x-y),u.hold=A,u.bits=U}},{}],49:[function(i,r,l){var c=i("../utils/common"),f=i("./adler32"),u=i("./crc32"),p=i("./inffast"),h=i("./inftrees"),x=1,_=2,y=0,v=-2,M=1,b=852,S=592;function g(F){return(F>>>24&255)+(F>>>8&65280)+((65280&F)<<8)+((255&F)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new c.Buf16(320),this.work=new c.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function U(F){var j;return F&&F.state?(j=F.state,F.total_in=F.total_out=j.total=0,F.msg="",j.wrap&&(F.adler=1&j.wrap),j.mode=M,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new c.Buf32(b),j.distcode=j.distdyn=new c.Buf32(S),j.sane=1,j.back=-1,y):v}function N(F){var j;return F&&F.state?((j=F.state).wsize=0,j.whave=0,j.wnext=0,U(F)):v}function z(F,j){var T,K;return F&&F.state?(K=F.state,j<0?(T=0,j=-j):(T=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?v:(K.window!==null&&K.wbits!==j&&(K.window=null),K.wrap=T,K.wbits=j,N(F))):v}function P(F,j){var T,K;return F?(K=new A,(F.state=K).window=null,(T=z(F,j))!==y&&(F.state=null),T):v}var O,W,C=!0;function I(F){if(C){var j;for(O=new c.Buf32(512),W=new c.Buf32(32),j=0;j<144;)F.lens[j++]=8;for(;j<256;)F.lens[j++]=9;for(;j<280;)F.lens[j++]=7;for(;j<288;)F.lens[j++]=8;for(h(x,F.lens,0,288,O,0,F.work,{bits:9}),j=0;j<32;)F.lens[j++]=5;h(_,F.lens,0,32,W,0,F.work,{bits:5}),C=!1}F.lencode=O,F.lenbits=9,F.distcode=W,F.distbits=5}function Z(F,j,T,K){var V,G=F.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new c.Buf8(G.wsize)),K>=G.wsize?(c.arraySet(G.window,j,T-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(K<(V=G.wsize-G.wnext)&&(V=K),c.arraySet(G.window,j,T-K,V,G.wnext),(K-=V)?(c.arraySet(G.window,j,T-K,K,0),G.wnext=K,G.whave=G.wsize):(G.wnext+=V,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=V))),0}l.inflateReset=N,l.inflateReset2=z,l.inflateResetKeep=U,l.inflateInit=function(F){return P(F,15)},l.inflateInit2=P,l.inflate=function(F,j){var T,K,V,G,nt,J,ht,L,X,ct,dt,vt,rt,xt,Nt,Pt,Bt,ie,we,ue,R,St,ot,Y,D=0,et=new c.Buf8(4),Et=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!F||!F.state||!F.output||!F.input&&F.avail_in!==0)return v;(T=F.state).mode===12&&(T.mode=13),nt=F.next_out,V=F.output,ht=F.avail_out,G=F.next_in,K=F.input,J=F.avail_in,L=T.hold,X=T.bits,ct=J,dt=ht,St=y;t:for(;;)switch(T.mode){case M:if(T.wrap===0){T.mode=13;break}for(;X<16;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(2&T.wrap&&L===35615){et[T.check=0]=255&L,et[1]=L>>>8&255,T.check=u(T.check,et,2,0),X=L=0,T.mode=2;break}if(T.flags=0,T.head&&(T.head.done=!1),!(1&T.wrap)||(((255&L)<<8)+(L>>8))%31){F.msg="incorrect header check",T.mode=30;break}if((15&L)!=8){F.msg="unknown compression method",T.mode=30;break}if(X-=4,R=8+(15&(L>>>=4)),T.wbits===0)T.wbits=R;else if(R>T.wbits){F.msg="invalid window size",T.mode=30;break}T.dmax=1<<R,F.adler=T.check=1,T.mode=512&L?10:12,X=L=0;break;case 2:for(;X<16;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(T.flags=L,(255&T.flags)!=8){F.msg="unknown compression method",T.mode=30;break}if(57344&T.flags){F.msg="unknown header flags set",T.mode=30;break}T.head&&(T.head.text=L>>8&1),512&T.flags&&(et[0]=255&L,et[1]=L>>>8&255,T.check=u(T.check,et,2,0)),X=L=0,T.mode=3;case 3:for(;X<32;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}T.head&&(T.head.time=L),512&T.flags&&(et[0]=255&L,et[1]=L>>>8&255,et[2]=L>>>16&255,et[3]=L>>>24&255,T.check=u(T.check,et,4,0)),X=L=0,T.mode=4;case 4:for(;X<16;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}T.head&&(T.head.xflags=255&L,T.head.os=L>>8),512&T.flags&&(et[0]=255&L,et[1]=L>>>8&255,T.check=u(T.check,et,2,0)),X=L=0,T.mode=5;case 5:if(1024&T.flags){for(;X<16;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}T.length=L,T.head&&(T.head.extra_len=L),512&T.flags&&(et[0]=255&L,et[1]=L>>>8&255,T.check=u(T.check,et,2,0)),X=L=0}else T.head&&(T.head.extra=null);T.mode=6;case 6:if(1024&T.flags&&(J<(vt=T.length)&&(vt=J),vt&&(T.head&&(R=T.head.extra_len-T.length,T.head.extra||(T.head.extra=new Array(T.head.extra_len)),c.arraySet(T.head.extra,K,G,vt,R)),512&T.flags&&(T.check=u(T.check,K,vt,G)),J-=vt,G+=vt,T.length-=vt),T.length))break t;T.length=0,T.mode=7;case 7:if(2048&T.flags){if(J===0)break t;for(vt=0;R=K[G+vt++],T.head&&R&&T.length<65536&&(T.head.name+=String.fromCharCode(R)),R&&vt<J;);if(512&T.flags&&(T.check=u(T.check,K,vt,G)),J-=vt,G+=vt,R)break t}else T.head&&(T.head.name=null);T.length=0,T.mode=8;case 8:if(4096&T.flags){if(J===0)break t;for(vt=0;R=K[G+vt++],T.head&&R&&T.length<65536&&(T.head.comment+=String.fromCharCode(R)),R&&vt<J;);if(512&T.flags&&(T.check=u(T.check,K,vt,G)),J-=vt,G+=vt,R)break t}else T.head&&(T.head.comment=null);T.mode=9;case 9:if(512&T.flags){for(;X<16;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(L!==(65535&T.check)){F.msg="header crc mismatch",T.mode=30;break}X=L=0}T.head&&(T.head.hcrc=T.flags>>9&1,T.head.done=!0),F.adler=T.check=0,T.mode=12;break;case 10:for(;X<32;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}F.adler=T.check=g(L),X=L=0,T.mode=11;case 11:if(T.havedict===0)return F.next_out=nt,F.avail_out=ht,F.next_in=G,F.avail_in=J,T.hold=L,T.bits=X,2;F.adler=T.check=1,T.mode=12;case 12:if(j===5||j===6)break t;case 13:if(T.last){L>>>=7&X,X-=7&X,T.mode=27;break}for(;X<3;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}switch(T.last=1&L,X-=1,3&(L>>>=1)){case 0:T.mode=14;break;case 1:if(I(T),T.mode=20,j!==6)break;L>>>=2,X-=2;break t;case 2:T.mode=17;break;case 3:F.msg="invalid block type",T.mode=30}L>>>=2,X-=2;break;case 14:for(L>>>=7&X,X-=7&X;X<32;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if((65535&L)!=(L>>>16^65535)){F.msg="invalid stored block lengths",T.mode=30;break}if(T.length=65535&L,X=L=0,T.mode=15,j===6)break t;case 15:T.mode=16;case 16:if(vt=T.length){if(J<vt&&(vt=J),ht<vt&&(vt=ht),vt===0)break t;c.arraySet(V,K,G,vt,nt),J-=vt,G+=vt,ht-=vt,nt+=vt,T.length-=vt;break}T.mode=12;break;case 17:for(;X<14;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(T.nlen=257+(31&L),L>>>=5,X-=5,T.ndist=1+(31&L),L>>>=5,X-=5,T.ncode=4+(15&L),L>>>=4,X-=4,286<T.nlen||30<T.ndist){F.msg="too many length or distance symbols",T.mode=30;break}T.have=0,T.mode=18;case 18:for(;T.have<T.ncode;){for(;X<3;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}T.lens[Et[T.have++]]=7&L,L>>>=3,X-=3}for(;T.have<19;)T.lens[Et[T.have++]]=0;if(T.lencode=T.lendyn,T.lenbits=7,ot={bits:T.lenbits},St=h(0,T.lens,0,19,T.lencode,0,T.work,ot),T.lenbits=ot.bits,St){F.msg="invalid code lengths set",T.mode=30;break}T.have=0,T.mode=19;case 19:for(;T.have<T.nlen+T.ndist;){for(;Pt=(D=T.lencode[L&(1<<T.lenbits)-1])>>>16&255,Bt=65535&D,!((Nt=D>>>24)<=X);){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(Bt<16)L>>>=Nt,X-=Nt,T.lens[T.have++]=Bt;else{if(Bt===16){for(Y=Nt+2;X<Y;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(L>>>=Nt,X-=Nt,T.have===0){F.msg="invalid bit length repeat",T.mode=30;break}R=T.lens[T.have-1],vt=3+(3&L),L>>>=2,X-=2}else if(Bt===17){for(Y=Nt+3;X<Y;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}X-=Nt,R=0,vt=3+(7&(L>>>=Nt)),L>>>=3,X-=3}else{for(Y=Nt+7;X<Y;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}X-=Nt,R=0,vt=11+(127&(L>>>=Nt)),L>>>=7,X-=7}if(T.have+vt>T.nlen+T.ndist){F.msg="invalid bit length repeat",T.mode=30;break}for(;vt--;)T.lens[T.have++]=R}}if(T.mode===30)break;if(T.lens[256]===0){F.msg="invalid code -- missing end-of-block",T.mode=30;break}if(T.lenbits=9,ot={bits:T.lenbits},St=h(x,T.lens,0,T.nlen,T.lencode,0,T.work,ot),T.lenbits=ot.bits,St){F.msg="invalid literal/lengths set",T.mode=30;break}if(T.distbits=6,T.distcode=T.distdyn,ot={bits:T.distbits},St=h(_,T.lens,T.nlen,T.ndist,T.distcode,0,T.work,ot),T.distbits=ot.bits,St){F.msg="invalid distances set",T.mode=30;break}if(T.mode=20,j===6)break t;case 20:T.mode=21;case 21:if(6<=J&&258<=ht){F.next_out=nt,F.avail_out=ht,F.next_in=G,F.avail_in=J,T.hold=L,T.bits=X,p(F,dt),nt=F.next_out,V=F.output,ht=F.avail_out,G=F.next_in,K=F.input,J=F.avail_in,L=T.hold,X=T.bits,T.mode===12&&(T.back=-1);break}for(T.back=0;Pt=(D=T.lencode[L&(1<<T.lenbits)-1])>>>16&255,Bt=65535&D,!((Nt=D>>>24)<=X);){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(Pt&&(240&Pt)==0){for(ie=Nt,we=Pt,ue=Bt;Pt=(D=T.lencode[ue+((L&(1<<ie+we)-1)>>ie)])>>>16&255,Bt=65535&D,!(ie+(Nt=D>>>24)<=X);){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}L>>>=ie,X-=ie,T.back+=ie}if(L>>>=Nt,X-=Nt,T.back+=Nt,T.length=Bt,Pt===0){T.mode=26;break}if(32&Pt){T.back=-1,T.mode=12;break}if(64&Pt){F.msg="invalid literal/length code",T.mode=30;break}T.extra=15&Pt,T.mode=22;case 22:if(T.extra){for(Y=T.extra;X<Y;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}T.length+=L&(1<<T.extra)-1,L>>>=T.extra,X-=T.extra,T.back+=T.extra}T.was=T.length,T.mode=23;case 23:for(;Pt=(D=T.distcode[L&(1<<T.distbits)-1])>>>16&255,Bt=65535&D,!((Nt=D>>>24)<=X);){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if((240&Pt)==0){for(ie=Nt,we=Pt,ue=Bt;Pt=(D=T.distcode[ue+((L&(1<<ie+we)-1)>>ie)])>>>16&255,Bt=65535&D,!(ie+(Nt=D>>>24)<=X);){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}L>>>=ie,X-=ie,T.back+=ie}if(L>>>=Nt,X-=Nt,T.back+=Nt,64&Pt){F.msg="invalid distance code",T.mode=30;break}T.offset=Bt,T.extra=15&Pt,T.mode=24;case 24:if(T.extra){for(Y=T.extra;X<Y;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}T.offset+=L&(1<<T.extra)-1,L>>>=T.extra,X-=T.extra,T.back+=T.extra}if(T.offset>T.dmax){F.msg="invalid distance too far back",T.mode=30;break}T.mode=25;case 25:if(ht===0)break t;if(vt=dt-ht,T.offset>vt){if((vt=T.offset-vt)>T.whave&&T.sane){F.msg="invalid distance too far back",T.mode=30;break}rt=vt>T.wnext?(vt-=T.wnext,T.wsize-vt):T.wnext-vt,vt>T.length&&(vt=T.length),xt=T.window}else xt=V,rt=nt-T.offset,vt=T.length;for(ht<vt&&(vt=ht),ht-=vt,T.length-=vt;V[nt++]=xt[rt++],--vt;);T.length===0&&(T.mode=21);break;case 26:if(ht===0)break t;V[nt++]=T.length,ht--,T.mode=21;break;case 27:if(T.wrap){for(;X<32;){if(J===0)break t;J--,L|=K[G++]<<X,X+=8}if(dt-=ht,F.total_out+=dt,T.total+=dt,dt&&(F.adler=T.check=T.flags?u(T.check,V,dt,nt-dt):f(T.check,V,dt,nt-dt)),dt=ht,(T.flags?L:g(L))!==T.check){F.msg="incorrect data check",T.mode=30;break}X=L=0}T.mode=28;case 28:if(T.wrap&&T.flags){for(;X<32;){if(J===0)break t;J--,L+=K[G++]<<X,X+=8}if(L!==(4294967295&T.total)){F.msg="incorrect length check",T.mode=30;break}X=L=0}T.mode=29;case 29:St=1;break t;case 30:St=-3;break t;case 31:return-4;case 32:default:return v}return F.next_out=nt,F.avail_out=ht,F.next_in=G,F.avail_in=J,T.hold=L,T.bits=X,(T.wsize||dt!==F.avail_out&&T.mode<30&&(T.mode<27||j!==4))&&Z(F,F.output,F.next_out,dt-F.avail_out)?(T.mode=31,-4):(ct-=F.avail_in,dt-=F.avail_out,F.total_in+=ct,F.total_out+=dt,T.total+=dt,T.wrap&&dt&&(F.adler=T.check=T.flags?u(T.check,V,dt,F.next_out-dt):f(T.check,V,dt,F.next_out-dt)),F.data_type=T.bits+(T.last?64:0)+(T.mode===12?128:0)+(T.mode===20||T.mode===15?256:0),(ct==0&&dt===0||j===4)&&St===y&&(St=-5),St)},l.inflateEnd=function(F){if(!F||!F.state)return v;var j=F.state;return j.window&&(j.window=null),F.state=null,y},l.inflateGetHeader=function(F,j){var T;return F&&F.state?(2&(T=F.state).wrap)==0?v:((T.head=j).done=!1,y):v},l.inflateSetDictionary=function(F,j){var T,K=j.length;return F&&F.state?(T=F.state).wrap!==0&&T.mode!==11?v:T.mode===11&&f(1,j,K,0)!==T.check?-3:Z(F,j,K,K)?(T.mode=31,-4):(T.havedict=1,y):v},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,l){var c=i("../utils/common"),f=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],p=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(x,_,y,v,M,b,S,g){var A,U,N,z,P,O,W,C,I,Z=g.bits,F=0,j=0,T=0,K=0,V=0,G=0,nt=0,J=0,ht=0,L=0,X=null,ct=0,dt=new c.Buf16(16),vt=new c.Buf16(16),rt=null,xt=0;for(F=0;F<=15;F++)dt[F]=0;for(j=0;j<v;j++)dt[_[y+j]]++;for(V=Z,K=15;1<=K&&dt[K]===0;K--);if(K<V&&(V=K),K===0)return M[b++]=20971520,M[b++]=20971520,g.bits=1,0;for(T=1;T<K&&dt[T]===0;T++);for(V<T&&(V=T),F=J=1;F<=15;F++)if(J<<=1,(J-=dt[F])<0)return-1;if(0<J&&(x===0||K!==1))return-1;for(vt[1]=0,F=1;F<15;F++)vt[F+1]=vt[F]+dt[F];for(j=0;j<v;j++)_[y+j]!==0&&(S[vt[_[y+j]]++]=j);if(O=x===0?(X=rt=S,19):x===1?(X=f,ct-=257,rt=u,xt-=257,256):(X=p,rt=h,-1),F=T,P=b,nt=j=L=0,N=-1,z=(ht=1<<(G=V))-1,x===1&&852<ht||x===2&&592<ht)return 1;for(;;){for(W=F-nt,I=S[j]<O?(C=0,S[j]):S[j]>O?(C=rt[xt+S[j]],X[ct+S[j]]):(C=96,0),A=1<<F-nt,T=U=1<<G;M[P+(L>>nt)+(U-=A)]=W<<24|C<<16|I|0,U!==0;);for(A=1<<F-1;L&A;)A>>=1;if(A!==0?(L&=A-1,L+=A):L=0,j++,--dt[F]==0){if(F===K)break;F=_[y+S[j]]}if(V<F&&(L&z)!==N){for(nt===0&&(nt=V),P+=T,J=1<<(G=F-nt);G+nt<K&&!((J-=dt[G+nt])<=0);)G++,J<<=1;if(ht+=1<<G,x===1&&852<ht||x===2&&592<ht)return 1;M[N=L&z]=V<<24|G<<16|P-b|0}}return L!==0&&(M[P+L]=F-nt<<24|64<<16|0),g.bits=V,0}},{"../utils/common":41}],51:[function(i,r,l){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,l){var c=i("../utils/common"),f=0,u=1;function p(D){for(var et=D.length;0<=--et;)D[et]=0}var h=0,x=29,_=256,y=_+1+x,v=30,M=19,b=2*y+1,S=15,g=16,A=7,U=256,N=16,z=17,P=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Z=new Array(2*(y+2));p(Z);var F=new Array(2*v);p(F);var j=new Array(512);p(j);var T=new Array(256);p(T);var K=new Array(x);p(K);var V,G,nt,J=new Array(v);function ht(D,et,Et,At,$){this.static_tree=D,this.extra_bits=et,this.extra_base=Et,this.elems=At,this.max_length=$,this.has_stree=D&&D.length}function L(D,et){this.dyn_tree=D,this.max_code=0,this.stat_desc=et}function X(D){return D<256?j[D]:j[256+(D>>>7)]}function ct(D,et){D.pending_buf[D.pending++]=255&et,D.pending_buf[D.pending++]=et>>>8&255}function dt(D,et,Et){D.bi_valid>g-Et?(D.bi_buf|=et<<D.bi_valid&65535,ct(D,D.bi_buf),D.bi_buf=et>>g-D.bi_valid,D.bi_valid+=Et-g):(D.bi_buf|=et<<D.bi_valid&65535,D.bi_valid+=Et)}function vt(D,et,Et){dt(D,Et[2*et],Et[2*et+1])}function rt(D,et){for(var Et=0;Et|=1&D,D>>>=1,Et<<=1,0<--et;);return Et>>>1}function xt(D,et,Et){var At,$,B=new Array(S+1),w=0;for(At=1;At<=S;At++)B[At]=w=w+Et[At-1]<<1;for($=0;$<=et;$++){var q=D[2*$+1];q!==0&&(D[2*$]=rt(B[q]++,q))}}function Nt(D){var et;for(et=0;et<y;et++)D.dyn_ltree[2*et]=0;for(et=0;et<v;et++)D.dyn_dtree[2*et]=0;for(et=0;et<M;et++)D.bl_tree[2*et]=0;D.dyn_ltree[2*U]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function Pt(D){8<D.bi_valid?ct(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function Bt(D,et,Et,At){var $=2*et,B=2*Et;return D[$]<D[B]||D[$]===D[B]&&At[et]<=At[Et]}function ie(D,et,Et){for(var At=D.heap[Et],$=Et<<1;$<=D.heap_len&&($<D.heap_len&&Bt(et,D.heap[$+1],D.heap[$],D.depth)&&$++,!Bt(et,At,D.heap[$],D.depth));)D.heap[Et]=D.heap[$],Et=$,$<<=1;D.heap[Et]=At}function we(D,et,Et){var At,$,B,w,q=0;if(D.last_lit!==0)for(;At=D.pending_buf[D.d_buf+2*q]<<8|D.pending_buf[D.d_buf+2*q+1],$=D.pending_buf[D.l_buf+q],q++,At===0?vt(D,$,et):(vt(D,(B=T[$])+_+1,et),(w=O[B])!==0&&dt(D,$-=K[B],w),vt(D,B=X(--At),Et),(w=W[B])!==0&&dt(D,At-=J[B],w)),q<D.last_lit;);vt(D,U,et)}function ue(D,et){var Et,At,$,B=et.dyn_tree,w=et.stat_desc.static_tree,q=et.stat_desc.has_stree,lt=et.stat_desc.elems,Tt=-1;for(D.heap_len=0,D.heap_max=b,Et=0;Et<lt;Et++)B[2*Et]!==0?(D.heap[++D.heap_len]=Tt=Et,D.depth[Et]=0):B[2*Et+1]=0;for(;D.heap_len<2;)B[2*($=D.heap[++D.heap_len]=Tt<2?++Tt:0)]=1,D.depth[$]=0,D.opt_len--,q&&(D.static_len-=w[2*$+1]);for(et.max_code=Tt,Et=D.heap_len>>1;1<=Et;Et--)ie(D,B,Et);for($=lt;Et=D.heap[1],D.heap[1]=D.heap[D.heap_len--],ie(D,B,1),At=D.heap[1],D.heap[--D.heap_max]=Et,D.heap[--D.heap_max]=At,B[2*$]=B[2*Et]+B[2*At],D.depth[$]=(D.depth[Et]>=D.depth[At]?D.depth[Et]:D.depth[At])+1,B[2*Et+1]=B[2*At+1]=$,D.heap[1]=$++,ie(D,B,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],(function(ut,Zt){var Ft,Kt,re,Ct,zt,qt,kt=Zt.dyn_tree,Gt=Zt.max_code,me=Zt.stat_desc.static_tree,it=Zt.stat_desc.has_stree,Vt=Zt.stat_desc.extra_bits,It=Zt.stat_desc.extra_base,Xt=Zt.stat_desc.max_length,Ot=0;for(Ct=0;Ct<=S;Ct++)ut.bl_count[Ct]=0;for(kt[2*ut.heap[ut.heap_max]+1]=0,Ft=ut.heap_max+1;Ft<b;Ft++)Xt<(Ct=kt[2*kt[2*(Kt=ut.heap[Ft])+1]+1]+1)&&(Ct=Xt,Ot++),kt[2*Kt+1]=Ct,Gt<Kt||(ut.bl_count[Ct]++,zt=0,It<=Kt&&(zt=Vt[Kt-It]),qt=kt[2*Kt],ut.opt_len+=qt*(Ct+zt),it&&(ut.static_len+=qt*(me[2*Kt+1]+zt)));if(Ot!==0){do{for(Ct=Xt-1;ut.bl_count[Ct]===0;)Ct--;ut.bl_count[Ct]--,ut.bl_count[Ct+1]+=2,ut.bl_count[Xt]--,Ot-=2}while(0<Ot);for(Ct=Xt;Ct!==0;Ct--)for(Kt=ut.bl_count[Ct];Kt!==0;)Gt<(re=ut.heap[--Ft])||(kt[2*re+1]!==Ct&&(ut.opt_len+=(Ct-kt[2*re+1])*kt[2*re],kt[2*re+1]=Ct),Kt--)}})(D,et),xt(B,Tt,D.bl_count)}function R(D,et,Et){var At,$,B=-1,w=et[1],q=0,lt=7,Tt=4;for(w===0&&(lt=138,Tt=3),et[2*(Et+1)+1]=65535,At=0;At<=Et;At++)$=w,w=et[2*(At+1)+1],++q<lt&&$===w||(q<Tt?D.bl_tree[2*$]+=q:$!==0?($!==B&&D.bl_tree[2*$]++,D.bl_tree[2*N]++):q<=10?D.bl_tree[2*z]++:D.bl_tree[2*P]++,B=$,Tt=(q=0)===w?(lt=138,3):$===w?(lt=6,3):(lt=7,4))}function St(D,et,Et){var At,$,B=-1,w=et[1],q=0,lt=7,Tt=4;for(w===0&&(lt=138,Tt=3),At=0;At<=Et;At++)if($=w,w=et[2*(At+1)+1],!(++q<lt&&$===w)){if(q<Tt)for(;vt(D,$,D.bl_tree),--q!=0;);else $!==0?($!==B&&(vt(D,$,D.bl_tree),q--),vt(D,N,D.bl_tree),dt(D,q-3,2)):q<=10?(vt(D,z,D.bl_tree),dt(D,q-3,3)):(vt(D,P,D.bl_tree),dt(D,q-11,7));B=$,Tt=(q=0)===w?(lt=138,3):$===w?(lt=6,3):(lt=7,4)}}p(J);var ot=!1;function Y(D,et,Et,At){dt(D,(h<<1)+(At?1:0),3),(function($,B,w,q){Pt($),ct($,w),ct($,~w),c.arraySet($.pending_buf,$.window,B,w,$.pending),$.pending+=w})(D,et,Et)}l._tr_init=function(D){ot||((function(){var et,Et,At,$,B,w=new Array(S+1);for($=At=0;$<x-1;$++)for(K[$]=At,et=0;et<1<<O[$];et++)T[At++]=$;for(T[At-1]=$,$=B=0;$<16;$++)for(J[$]=B,et=0;et<1<<W[$];et++)j[B++]=$;for(B>>=7;$<v;$++)for(J[$]=B<<7,et=0;et<1<<W[$]-7;et++)j[256+B++]=$;for(Et=0;Et<=S;Et++)w[Et]=0;for(et=0;et<=143;)Z[2*et+1]=8,et++,w[8]++;for(;et<=255;)Z[2*et+1]=9,et++,w[9]++;for(;et<=279;)Z[2*et+1]=7,et++,w[7]++;for(;et<=287;)Z[2*et+1]=8,et++,w[8]++;for(xt(Z,y+1,w),et=0;et<v;et++)F[2*et+1]=5,F[2*et]=rt(et,5);V=new ht(Z,O,_+1,y,S),G=new ht(F,W,0,v,S),nt=new ht(new Array(0),C,0,M,A)})(),ot=!0),D.l_desc=new L(D.dyn_ltree,V),D.d_desc=new L(D.dyn_dtree,G),D.bl_desc=new L(D.bl_tree,nt),D.bi_buf=0,D.bi_valid=0,Nt(D)},l._tr_stored_block=Y,l._tr_flush_block=function(D,et,Et,At){var $,B,w=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=(function(q){var lt,Tt=4093624447;for(lt=0;lt<=31;lt++,Tt>>>=1)if(1&Tt&&q.dyn_ltree[2*lt]!==0)return f;if(q.dyn_ltree[18]!==0||q.dyn_ltree[20]!==0||q.dyn_ltree[26]!==0)return u;for(lt=32;lt<_;lt++)if(q.dyn_ltree[2*lt]!==0)return u;return f})(D)),ue(D,D.l_desc),ue(D,D.d_desc),w=(function(q){var lt;for(R(q,q.dyn_ltree,q.l_desc.max_code),R(q,q.dyn_dtree,q.d_desc.max_code),ue(q,q.bl_desc),lt=M-1;3<=lt&&q.bl_tree[2*I[lt]+1]===0;lt--);return q.opt_len+=3*(lt+1)+5+5+4,lt})(D),$=D.opt_len+3+7>>>3,(B=D.static_len+3+7>>>3)<=$&&($=B)):$=B=Et+5,Et+4<=$&&et!==-1?Y(D,et,Et,At):D.strategy===4||B===$?(dt(D,2+(At?1:0),3),we(D,Z,F)):(dt(D,4+(At?1:0),3),(function(q,lt,Tt,ut){var Zt;for(dt(q,lt-257,5),dt(q,Tt-1,5),dt(q,ut-4,4),Zt=0;Zt<ut;Zt++)dt(q,q.bl_tree[2*I[Zt]+1],3);St(q,q.dyn_ltree,lt-1),St(q,q.dyn_dtree,Tt-1)})(D,D.l_desc.max_code+1,D.d_desc.max_code+1,w+1),we(D,D.dyn_ltree,D.dyn_dtree)),Nt(D),At&&Pt(D)},l._tr_tally=function(D,et,Et){return D.pending_buf[D.d_buf+2*D.last_lit]=et>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&et,D.pending_buf[D.l_buf+D.last_lit]=255&Et,D.last_lit++,et===0?D.dyn_ltree[2*Et]++:(D.matches++,et--,D.dyn_ltree[2*(T[Et]+_+1)]++,D.dyn_dtree[2*X(et)]++),D.last_lit===D.lit_bufsize-1},l._tr_align=function(D){dt(D,2,3),vt(D,U,Z),(function(et){et.bi_valid===16?(ct(et,et.bi_buf),et.bi_buf=0,et.bi_valid=0):8<=et.bi_valid&&(et.pending_buf[et.pending++]=255&et.bi_buf,et.bi_buf>>=8,et.bi_valid-=8)})(D)}},{"../utils/common":41}],53:[function(i,r,l){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,l){(function(c){(function(f,u){if(!f.setImmediate){var p,h,x,_,y=1,v={},M=!1,b=f.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(f);S=S&&S.setTimeout?S:f,p={}.toString.call(f.process)==="[object process]"?function(N){process.nextTick(function(){A(N)})}:(function(){if(f.postMessage&&!f.importScripts){var N=!0,z=f.onmessage;return f.onmessage=function(){N=!1},f.postMessage("","*"),f.onmessage=z,N}})()?(_="setImmediate$"+Math.random()+"$",f.addEventListener?f.addEventListener("message",U,!1):f.attachEvent("onmessage",U),function(N){f.postMessage(_+N,"*")}):f.MessageChannel?((x=new MessageChannel).port1.onmessage=function(N){A(N.data)},function(N){x.port2.postMessage(N)}):b&&"onreadystatechange"in b.createElement("script")?(h=b.documentElement,function(N){var z=b.createElement("script");z.onreadystatechange=function(){A(N),z.onreadystatechange=null,h.removeChild(z),z=null},h.appendChild(z)}):function(N){setTimeout(A,0,N)},S.setImmediate=function(N){typeof N!="function"&&(N=new Function(""+N));for(var z=new Array(arguments.length-1),P=0;P<z.length;P++)z[P]=arguments[P+1];var O={callback:N,args:z};return v[y]=O,p(y),y++},S.clearImmediate=g}function g(N){delete v[N]}function A(N){if(M)setTimeout(A,0,N);else{var z=v[N];if(z){M=!0;try{(function(P){var O=P.callback,W=P.args;switch(W.length){case 0:O();break;case 1:O(W[0]);break;case 2:O(W[0],W[1]);break;case 3:O(W[0],W[1],W[2]);break;default:O.apply(u,W)}})(z)}finally{g(N),M=!1}}}}function U(N){N.source===f&&typeof N.data=="string"&&N.data.indexOf(_)===0&&A(+N.data.slice(_.length))}})(typeof self>"u"?c===void 0?this:c:self)}).call(this,typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(zd)),zd.exports}var iA=nA();const Uh=Nh(iA),aA=async o=>{const e=new Uh,i=e.folder("images");if(!i){alert("Error creating images folder");return}const r=await Promise.all(o.scenes.map(async(u,p)=>{let h="";if(u.imageSource)try{const y=await(await fetch(u.imageSource)).blob(),v=u.imageFileName||`scene_${p}.jpg`;i.file(v,y),h=`images/${v}`}catch(_){console.error("Failed to process image for export",_)}const x=await Promise.all(u.hotspots.map(async _=>{if(_.type==="IMAGE"&&_.contentImageUrl)try{if(_.contentImageUrl.startsWith("data:")){const v=await(await fetch(_.contentImageUrl)).blob(),M=`hotspot_${_.id}.jpg`;return i.file(M,v),{..._,contentImageUrl:`images/${M}`}}}catch(y){console.error("Failed to process hotspot image",y)}return _}));return{...u,imageSource:h,hotspots:x}})),l={...o,scenes:r},c=JSON.stringify(l),f=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${o.title}</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <style>
        body { margin: 0; overflow: hidden; background: #000; font-family: sans-serif; }
        #container { width: 100vw; height: 100vh; }
        .hotspot {
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #fff;
            border-radius: 50%;
            cursor: pointer;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 10;
        }
        .hotspot:hover { transform: translate(-50%, -50%) scale(1.15); background: #fff; }
        .hotspot-label {
            position: absolute;
            top: 48px;
            background: rgba(0,0,0,0.85);
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            white-space: nowrap;
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            pointer-events: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        #info {
            position: absolute;
            top: 20px;
            left: 20px;
            color: white;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(8px);
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: bold;
            pointer-events: none;
            border: 1px solid rgba(255,255,255,0.1);
        }
        #overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.95);
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 100;
            color: white;
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        #overlay img { max-width: 90%; max-height: 80%; border-radius: 12px; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 0 50px rgba(0,0,0,0.8); }
        #overlay-text { margin-top: 20px; font-size: 18px; font-weight: bold; }
        #overlay .close { position: absolute; top: 30px; right: 30px; cursor: pointer; font-size: 40px; color: #fff; transition: transform 0.2s; }
        #overlay .close:hover { transform: scale(1.1); color: #ff4b4b; }
    </style>
</head>
<body>
    <div id="info">${o.title}</div>
    <div id="container"></div>
    <div id="overlay">
        <span class="close" onclick="closeOverlay()">&times;</span>
        <img id="overlay-img" src="" />
        <p id="overlay-text"></p>
    </div>

    <script>
        const tourData = ${c};
        let currentSceneId = tourData.startSceneId;
        
        let camera, scene, renderer, sphere;
        let isUserInteracting = false;
        let onPointerDownMouseX = 0, onPointerDownMouseY = 0;
        let lon = 0, onPointerDownLon = 0;
        let lat = 0, onPointerDownLat = 0;
        let phi = 0, theta = 0;
        const hotspotsElements = [];

        init();
        animate();

        function init() {
            const container = document.getElementById('container');
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
            scene = new THREE.Scene();

            const geometry = new THREE.SphereGeometry(500, 60, 40);
            geometry.scale(-1, 1, 1);
            const material = new THREE.MeshBasicMaterial();
            sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            container.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('wheel', onDocumentMouseWheel);
            window.addEventListener('resize', onWindowResize);

            loadScene(currentSceneId);
        }

        function loadScene(id) {
            const sceneData = tourData.scenes.find(s => s.id === id);
            if (!sceneData) return;
            currentSceneId = id;

            const loader = new THREE.TextureLoader();
            loader.load(sceneData.imageSource, function(texture) {
                sphere.material.map = texture;
                sphere.material.needsUpdate = true;
                renderHotspots(sceneData.hotspots);
            });
        }

        function renderHotspots(hotspots) {
            hotspotsElements.forEach(el => el.remove());
            hotspotsElements.length = 0;

            hotspots.forEach(hs => {
                const el = document.createElement('div');
                el.className = 'hotspot';
                
                let icon = '📍';
                if(hs.type === 'IMAGE') icon = '🖼️';
                if(hs.type === 'LINK') icon = '🔗';
                if(hs.type === 'SCENE') icon = '🚪';

                el.innerHTML = '<span style="font-size: 20px">' + icon + '</span><div class="hotspot-label">' + hs.label + '</div>';
                el.onclick = () => handleHotspotClick(hs);
                document.body.appendChild(el);
                hotspotsElements.push(el);
                el.userData = hs;
            });
        }

        function handleHotspotClick(hs) {
            if (hs.type === 'SCENE') {
                loadScene(hs.targetSceneId);
            } else if (hs.type === 'LINK') {
                window.open(hs.targetUrl, '_blank');
            } else if (hs.type === 'IMAGE') {
                document.getElementById('overlay-img').src = hs.contentImageUrl;
                document.getElementById('overlay-text').innerText = hs.label;
                document.getElementById('overlay').style.display = 'flex';
            }
        }

        function closeOverlay() {
            document.getElementById('overlay').style.display = 'none';
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onPointerDown(event) {
            if (event.isPrimary === false) return;
            isUserInteracting = true;
            onPointerDownMouseX = event.clientX;
            onPointerDownMouseY = event.clientY;
            onPointerDownLon = lon;
            onPointerDownLat = lat;
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
        }

        function onPointerMove(event) {
            if (event.isPrimary === false) return;
            lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
            lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
        }

        function onPointerUp() {
            isUserInteracting = false;
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        }

        function onDocumentMouseWheel(event) {
            const fov = camera.fov + event.deltaY * 0.05;
            camera.fov = THREE.MathUtils.clamp(fov, 10, 75);
            camera.updateProjectionMatrix();
        }

        function animate() {
            requestAnimationFrame(animate);
            update();
        }

        function update() {
            lat = Math.max(-85, Math.min(85, lat));
            phi = THREE.MathUtils.degToRad(90 - lat);
            theta = THREE.MathUtils.degToRad(lon);

            const x = 500 * Math.sin(phi) * Math.cos(theta);
            const y = 500 * Math.cos(phi);
            const z = 500 * Math.sin(phi) * Math.sin(theta);

            camera.lookAt(x, y, z);
            renderer.render(scene, camera);
            updateHotspotPositions();
        }

        function updateHotspotPositions() {
            hotspotsElements.forEach(el => {
                const hs = el.userData;
                const pos = new THREE.Vector3(hs.position.x, hs.position.y, hs.position.z);
                pos.project(camera);

                if (pos.z > 1) {
                    el.style.display = 'none';
                } else {
                    const x = (pos.x * 0.5 + 0.5) * window.innerWidth;
                    const y = (pos.y * -0.5 + 0.5) * window.innerHeight;
                    el.style.display = 'flex';
                    el.style.left = x + 'px';
                    el.style.top = y + 'px';
                }
            });
        }
    <\/script>
</body>
</html>`;e.file("index.html",f);try{const u=await e.generateAsync({type:"blob"}),p=URL.createObjectURL(u),h=document.createElement("a");h.href=p,h.download=`${o.title.replace(/\s+/g,"_")}_tour.zip`,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(p)}catch(u){console.error("ZIP generation failed",u),alert("Failed to create tour export.")}};class rA{constructor(){this.dbName="PanocraftDB",this.storeName="projects"}async init(){return new Promise((e,i)=>{try{const r=indexedDB.open(this.dbName,1);r.onupgradeneeded=()=>{const l=r.result;l.objectStoreNames.contains(this.storeName)||l.createObjectStore(this.storeName)},r.onsuccess=()=>e(r.result),r.onerror=()=>i(r.error)}catch(r){i(r)}})}async save(e,i){try{const r=await this.init();return new Promise((l,c)=>{const f=r.transaction(this.storeName,"readwrite");f.objectStore(this.storeName).put(i,e),f.oncomplete=()=>l(),f.onerror=()=>c(f.error)})}catch(r){console.error("IndexedDB Save Failed",r)}}async load(e){try{const i=await this.init();return new Promise((r,l)=>{const f=i.transaction(this.storeName,"readonly").objectStore(this.storeName).get(e);f.onsuccess=()=>r(f.result),f.onerror=()=>l(f.error)})}catch(i){return console.error("IndexedDB Load Failed",i),null}}}const $a=new rA,sA=()=>{const[o,e]=Ae.useState({title:"My 360 Tour",startSceneId:"",scenes:[]}),[i,r]=Ae.useState(""),[l,c]=Ae.useState(null),[f,u]=Ae.useState(!1),[p,h]=Ae.useState(!1),[x,_]=Ae.useState(!1),y=o.scenes.find(P=>P.id===i),v=y==null?void 0:y.hotspots.find(P=>P.id===l);Ae.useEffect(()=>{(async()=>{try{const O=await $a.load("current-tour");O&&O.scenes&&O.scenes.length>0&&(e(O),r(O.startSceneId||O.scenes[0].id))}catch(O){console.error("Auto-load failed",O)}})()},[]);const M=async()=>{if(p&&!confirm("You have unsaved changes. Start a new tour anyway?"))return;const P={title:"My 360 Tour",startSceneId:"",scenes:[]};e(P),r(""),c(null),h(!1),await $a.save("current-tour",P)},b=async()=>{try{_(!0);const P=new Uh,O=await Promise.all(o.scenes.map(async F=>{const{imageSource:j,...T}=F;if(j)try{const G=await(await fetch(j)).blob();P.file(`images/${F.imageFileName}`,G)}catch(V){console.warn(`Could not include image ${F.imageFileName} in ZIP`,V)}const K=await Promise.all(F.hotspots.map(async V=>{if(V.type===Cn.IMAGE&&V.contentImageUrl&&V.contentImageUrl.startsWith("data:")){const nt=await(await fetch(V.contentImageUrl)).blob(),J=`content_${V.id}.jpg`;return P.file(`images/${J}`,nt),{...V,contentImageUrl:J}}return V}));return{...T,hotspots:K}})),W={...o,scenes:O};P.file("project.json",JSON.stringify(W,null,2));const C=await P.generateAsync({type:"blob"}),I=URL.createObjectURL(C),Z=document.createElement("a");Z.href=I,Z.download=`${o.title.replace(/\s+/g,"_")}_project.pano`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(I),await $a.save("current-tour",o),h(!1),alert("Project saved successfully!")}catch(P){console.error("ZIP export failed",P),alert("Failed to create project file.")}finally{_(!1)}},S=async P=>{try{_(!0);const O=await Uh.loadAsync(P),W=O.file("project.json");if(!W)throw new Error("Missing project.json in archive");const C=await W.async("string"),I=JSON.parse(C),Z=await Promise.all(I.scenes.map(async j=>{const T=O.file(`images/${j.imageFileName}`);let K="";if(T){const G=await T.async("blob");K=URL.createObjectURL(G)}const V=await Promise.all(j.hotspots.map(async G=>{if(G.type===Cn.IMAGE&&G.contentImageUrl&&!G.contentImageUrl.startsWith("data:")){const nt=O.file(`images/${G.contentImageUrl}`);if(nt){const J=await nt.async("blob");return{...G,contentImageUrl:await g(J)}}}return G}));return{...j,imageSource:K,hotspots:V}})),F={...I,scenes:Z};e(F),F.scenes.length>0&&r(F.startSceneId||F.scenes[0].id),h(!1),await $a.save("current-tour",F)}catch(O){console.error("ZIP import failed",O),alert("Error loading .pano file.")}finally{_(!1)}},g=P=>new Promise(O=>{const W=new FileReader;W.onloadend=()=>O(W.result),W.readAsDataURL(P)}),A=Ae.useCallback(async P=>{const O=URL.createObjectURL(P),W={id:crypto.randomUUID(),name:P.name.split(".")[0],imageFileName:P.name,imageSource:O,hotspots:[]};e(C=>{const I={...C,scenes:[...C.scenes,W],startSceneId:C.startSceneId||W.id};return $a.save("current-tour",I),I}),r(W.id),h(!0)},[]),U=Ae.useCallback(P=>{e(O=>{const W={...O,scenes:O.scenes.map(C=>C.id===i?{...C,hotspots:C.hotspots.map(I=>I.id===P.id?P:I)}:C)};return $a.save("current-tour",W),W}),h(!0)},[i]),N=Ae.useCallback(P=>{if(!i||f)return;const O=crypto.randomUUID(),W={id:O,type:Cn.SCENE,position:{x:P.x,y:P.y,z:P.z},label:"New Hotspot",targetSceneId:"",targetUrl:"",contentImageUrl:""};e(C=>{const I={...C,scenes:C.scenes.map(Z=>Z.id===i?{...Z,hotspots:[...Z.hotspots,W]}:Z)};return $a.save("current-tour",I),I}),c(O),h(!0)},[i,f]),z=Ae.useCallback(P=>{e(O=>{const W={...O,scenes:O.scenes.map(C=>C.id===i?{...C,hotspots:C.hotspots.filter(I=>I.id!==P)}:C)};return $a.save("current-tour",W),W}),c(null),h(!0)},[i]);return Rt.jsxs("div",{className:"flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[Rt.jsx(tA,{tour:o,activeSceneId:i,onSelectScene:r,onAddScene:A,onRemoveScene:P=>{confirm("Remove this scene?")&&(e(O=>{var C;const W=O.scenes.filter(I=>I.id!==P);return{...O,scenes:W,startSceneId:O.startSceneId===P?((C=W[0])==null?void 0:C.id)||"":O.startSceneId}}),h(!0))},onLoadProject:S,onUpdateTourTitle:P=>{e(O=>({...O,title:P})),h(!0)}}),Rt.jsxs("div",{className:"flex-1 relative flex flex-col",children:[Rt.jsxs("header",{className:"h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-md z-10",children:[Rt.jsxs("div",{className:"flex items-center gap-4",children:[Rt.jsx("h1",{className:"text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent",children:o.title}),p&&Rt.jsx("span",{className:"text-[10px] bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-full border border-amber-500/20 uppercase font-black tracking-widest",children:"Unsaved"})]}),Rt.jsxs("div",{className:"flex items-center gap-3",children:[Rt.jsxs("button",{onClick:M,className:"flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 font-medium",children:[Rt.jsx(O2,{size:18}),"New Tour"]}),Rt.jsxs("button",{onClick:b,disabled:x,className:"flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 font-medium disabled:opacity-50",children:[Rt.jsx(Y2,{size:18}),x?"Processing...":"Save .pano"]}),Rt.jsx("div",{className:"w-px h-6 bg-slate-800 mx-1"}),Rt.jsxs("button",{onClick:()=>u(!f),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${f?"bg-emerald-600 text-white":"bg-slate-800 hover:bg-slate-700 border border-slate-700"}`,children:[f?Rt.jsx(V2,{size:18}):Rt.jsx(D2,{size:18}),f?"Editor":"Preview"]}),Rt.jsxs("button",{onClick:()=>aA(o),className:"flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold shadow-lg shadow-blue-900/20",children:[Rt.jsx(R2,{size:18}),"Export HTML"]})]})]}),Rt.jsx("main",{className:"flex-1 relative overflow-hidden bg-black",children:y?Rt.jsx(_2,{scene:y,onAddHotspot:N,onHotspotClick:P=>{f?P.type===Cn.SCENE&&P.targetSceneId?r(P.targetSceneId):P.type===Cn.LINK&&P.targetUrl?window.open(P.targetUrl,"_blank"):P.type===Cn.IMAGE&&c(P.id):c(P.id)},selectedHotspotId:l,isPreviewMode:f}):Rt.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8 text-center",children:Rt.jsxs("div",{className:"max-w-md w-full p-10 bg-slate-900/50 rounded-[2.5rem] border border-slate-800 backdrop-blur-xl",children:[Rt.jsx(Dh,{size:48,className:"text-blue-500 mx-auto mb-6"}),Rt.jsx("h2",{className:"text-2xl font-black mb-4 tracking-tight",children:"Panocraft 360 Studio"}),Rt.jsxs("div",{className:"flex flex-col gap-3",children:[Rt.jsxs("label",{className:"flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold cursor-pointer transition-all active:scale-95 shadow-lg shadow-blue-900/20",children:[Rt.jsx(Sv,{size:20}),"New 360 Scene",Rt.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:P=>{var O;return((O=P.target.files)==null?void 0:O[0])&&A(P.target.files[0])}})]}),Rt.jsxs("label",{className:"flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold border border-slate-700 cursor-pointer transition-all active:scale-95",children:[Rt.jsx(J2,{size:20}),"Load .pano Project",Rt.jsx("input",{type:"file",accept:".pano",className:"hidden",onChange:P=>{var O;return((O=P.target.files)==null?void 0:O[0])&&S(P.target.files[0])}})]})]})]})})})]}),!f&&Rt.jsx(eA,{hotspot:v||null,scenes:o.scenes,onUpdate:U,onRemove:z,onClose:()=>c(null)})]})},Mv=document.getElementById("root");if(!Mv)throw new Error("Could not find root element to mount to");const oA=By.createRoot(Mv);oA.render(Rt.jsx(Uy.StrictMode,{children:Rt.jsx(sA,{})}));
