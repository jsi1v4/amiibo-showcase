var L=Object.defineProperty;var S=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var E=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,P=(t,e)=>{for(var o in e||(e={}))D.call(e,o)&&E(t,o,e[o]);if(S)for(var o of S(e))C.call(e,o)&&E(t,o,e[o]);return t};import{c as x,a as R,b as V,d as v,s as H,i as _,p as y,u as M,e as T,o as U,f as b,r as k,g as J,h as K,j as F,k as W,l as z,w as d,m as G,n as f,q as Q}from"./vendor.2478c013.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};B();const X="modulepreload",I={},Y="/amiibo-showcase/",h=function(e,o){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=`${Y}${n}`,n in I)return;I[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":X,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((l,p)=>{s.addEventListener("load",l),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())},Z="amiibo-showcase",q="Amiibo Showcase",ee="1.0.0",te="MIT",oe={dev:"vite",build:"vite build",preview:"vite preview",lint:"eslint --no-fix","lint:fix":"eslint",test:"jest","test:coverage":"jest --coverage","test:fails":"jest --onlyFailures",deploy:"gh-pages -d dist"},ne={axios:"^0.21.1","date-fns":"^2.28.0",flatpickr:"^4.6.11","js-cookie":"^3.0.1","jwt-decode":"^3.1.2",vue:"^3.2.25","vue-i18n":"9.1.9","vue-router":"4.0.12"},re={"@commitlint/cli":"^13.1.0","@commitlint/config-conventional":"^13.1.0","@types/jest":"^24.0.19","@types/node":"^16.11.4","@typescript-eslint/eslint-plugin":"^4.18.0","@typescript-eslint/parser":"^4.18.0","@vitejs/plugin-vue":"^2.2.0",eslint:"^7.32.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.4.0","gh-pages":"^6.1.1","lint-staged":"^11.2.4",prettier:"^2.2.1",sass:"~1.32.13","sass-loader":"^10.2.1","ts-jest":"^27.1.3",typescript:"^4.5.4","unplugin-vue-components":"^0.17.11",vite:"^2.8.0","vue-jest":"^5.0.0-0","vue-tsc":"^0.29.8"},ie={"pre-commit":"lint-staged","prepare-commit-msg":"commitlint --edit","pre-push":"yarn test --passWithNoTests"},se={extends:["@commitlint/config-conventional"]};var g={name:Z,title:q,version:ee,license:te,scripts:oe,dependencies:ne,devDependencies:re,gitHooks:ie,commitlint:se,"lint-staged":{"*.{ts,js,vue}":"yarn lint:fix"}},c={appName:g.name,appVersion:g.version,appTitle:g.title,baseUrl:String("/amiibo-showcase/"),env:{dev:{}.NODE_ENV==="development",test:{}.NODE_ENV==="testing",prod:{}.NODE_ENV==="production"},local:{enabled:!1,accessToken:String("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")},backend:{apiUrl:String("https://www.amiiboapi.com/api")},keys:{core:{accessToken:"js.amiiboShowcase.accessToken",redirectPath:"js.amiiboShowcase.redirectPath"}}};function ce(){const t=typeof navigator!="undefined"&&navigator.language;return String(t).slice(0,2)}function Ge(t){const e=String(t).toUpperCase().split(" ");return e[0][0]+e[e.length-1][0]}function Qe(t=500){let e;return o=>{clearTimeout(e),e=setTimeout(o,t)}}function ae(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n?Array.isArray(n)?n.length===0?e:`${e}&${o}=${n.join(",")}`:`${e}&${o}=${n}`:e},"")}function Be(t){return e=>{e.preventDefault(),t==null||t()}}function Xe(){const t=document.documentElement,e=(window.pageYOffset||t.scrollTop)-(t.clientTop||0),o=(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0),n=e+t.clientHeight,r=o+t.clientWidth;return{top:e,right:r,bottom:n,left:o}}const ue={home:"/home",login:"/login",logout:"/logout"},le={user:{logout:"Logout"},menu:{home:"Home"}},pe={title:"Home"},me={title:"Login"},de={title:"Logout"};var fe={routes:ue,app:le,home:pe,login:me,logout:de};const he={home:"/inicio",login:"/entrar",logout:"/sair"},ge={user:{logout:"Sair"},menu:{home:"Inicio"}},ve={title:"Inicio"},_e={title:"Entrar"},ye={title:"Sair"};var be={routes:he,app:ge,home:ve,login:_e,logout:ye},a=(t=>(t.EN="en",t.PT="pt",t))(a||{});const u=x({locale:ce()||a.EN,fallbackLocale:a.EN,messages:{[a.EN]:fe,[a.PT]:be},dateTimeFormats:{[a.EN]:{short:{year:"numeric",month:"numeric",day:"numeric"},long:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}},[a.PT]:{short:{year:"numeric",month:"numeric",day:"numeric"},long:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}}}});function ke(t,e,o){if(t.matched.some(n=>n.meta.protected)){o();return}o()}function we(t,e,o){t.meta.title?document.title=`${c.appTitle} | ${t.meta.title}`:document.title=c.appTitle,o()}const Se=[{path:"/",alias:u.global.t("routes.home"),component:()=>h(()=>import("./HomePage.5511caa3.js"),["assets/HomePage.5511caa3.js","assets/HomePage.455b3880.css","assets/vendor.2478c013.js"]),meta:{title:u.global.t("home.title"),protected:!0}},{path:"/login",alias:u.global.t("routes.login"),component:()=>h(()=>import("./LoginPage.a8cb5025.js"),["assets/LoginPage.a8cb5025.js","assets/vendor.2478c013.js"]),meta:{title:u.global.t("login.title")}},{path:"/logout",alias:u.global.t("routes.logout"),component:()=>h(()=>import("./LogoutPage.98853667.js"),["assets/LogoutPage.98853667.js","assets/vendor.2478c013.js"]),meta:{title:u.global.t("logout.title")}}],w=R({history:V(c.baseUrl),routes:Se});w.beforeEach(ke);w.beforeEach(we);function Ee(t,e){Object.keys(t).forEach(o=>{v.set(o,t[o],{path:"",secure:!0,sameSite:"Lax",expires:e})})}function Pe(t){return v.get()[t]||void 0}function Te(...t){t.forEach(e=>{v.remove(e,{path:""})})}function Ie(t){const e=H(t);function o(n){return e.value=n,n}return[e,o]}const O=Symbol("auth-provider");function Oe(){const t=M(),[e,o]=Ie(Pe(c.keys.core.accessToken)),n=T(()=>{if(e.value&&!e.value.includes("undefined"))return U(e.value)}),r=T(()=>!!e.value);function i(m,N){o(m),Ee({[c.keys.core.accessToken]:m},N)}function s(){o(void 0),Te(c.keys.core.accessToken)}function l(m){i(c.local.accessToken||""),t.push("/")}function p(){s(),t.push("/login")}function A(){l()}return{accessToken:e,user:n,authenticated:r,login:l,logout:p,handleUnauthorized:A}}function $e(){y(O,Oe())}function je(){return _(O)}const Ae=b({setup(t){return $e(),(e,o)=>k(e.$slots,"default")}});function Ne(t,e,o){const n=new Date().toISOString(),r=o?J(K(n),o).toISOString():null,i=c.appVersion;return localStorage.setItem(t,JSON.stringify({at:n,until:r,version:i,data:e})),e}const $=Symbol("http-provider");function Le(){const{accessToken:t,handleUnauthorized:e}=je(),o=F.create({baseURL:c.backend.apiUrl,paramsSerializer:ae});return o.interceptors.request.use(n=>t.value?P({},n):n),o.interceptors.response.use(n=>n,n=>{var r;return((r=n.response)==null?void 0:r.status)===401&&(Ne(c.keys.core.redirectPath,window.location.pathname),e()),Promise.reject(n)}),o}function De(){y($,Le())}function Ce(){return _($)}const xe=b({setup(t){return De(),(e,o)=>k(e.$slots,"default")}});class Re{constructor(e){this.http=e}async getAmiibos(e){return this.http.get("/amiibo",{params:e}).then(o=>o.data.amiibo)}async getGameseries(){return this.http.get("/gameseries").then(e=>e.data.amiibo)}}const j=Symbol("api-provider");function Ve(){const t=Ce();return{amiibo:new Re(t)}}function He(){y(j,Ve())}function Ye(){return _(j)}const Me=b({setup(t){return He(),(e,o)=>k(e.$slots,"default")}});var Ue=(t,e)=>{const o=t.__vccOpts||t;for(const[n,r]of e)o[n]=r;return o};const Je={};function Ke(t,e){const o=G("router-view"),n=Me,r=xe,i=Ae;return W(),z(i,null,{default:d(()=>[f(r,null,{default:d(()=>[f(n,null,{default:d(()=>[f(o)]),_:1})]),_:1})]),_:1})}var Fe=Ue(Je,[["render",Ke]]);Q(Fe).use(w).use(u).mount("#app");export{Ue as _,Ye as a,Ie as b,Qe as d,Ge as g,Be as p,Xe as s,je as u};
