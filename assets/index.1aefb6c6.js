var D=Object.defineProperty;var P=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var S=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,E=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&S(e,o,t[o]);if(P)for(var o of P(t))H.call(t,o)&&S(e,o,t[o]);return e};import{c as U,a as V,p as x,b as v,d as R,e as K,s as W,i as _,f as y,g as T,o as z,h as b,r as k,j as F,k as M,l as B,w as d,m as G,n as f,q as J}from"./vendor.8648d41f.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};X();const Y="modulepreload",$={},q="/amiibo-showcase/",h=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${q}${n}`,n in $)return;$[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Y,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((l,p)=>{s.addEventListener("load",l),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Q="amiibo-showcase",Z="Amiibo Showcase",ee="1.0.0",te="MIT",oe={dev:"vite",build:"vite build",preview:"vite preview",lint:"eslint --no-fix","lint:fix":"eslint",test:"jest","test:coverage":"jest --coverage","test:fails":"jest --onlyFailures",deploy:"gh-pages -d dist"},ne={axios:"^0.21.1","date-fns":"^2.28.0",flatpickr:"^4.6.11","js-cookie":"^3.0.1","jwt-decode":"^3.1.2",vue:"^3.2.25","vue-i18n":"9.1.9","vue-router":"4.0.12"},re={"@commitlint/cli":"^13.1.0","@commitlint/config-conventional":"^13.1.0","@types/jest":"^24.0.19","@types/node":"^16.11.4","@typescript-eslint/eslint-plugin":"^4.18.0","@typescript-eslint/parser":"^4.18.0","@vitejs/plugin-vue":"^2.2.0",eslint:"^7.32.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.4.0","gh-pages":"^6.1.1","lint-staged":"^11.2.4",prettier:"^2.2.1",sass:"~1.32.13","sass-loader":"^10.2.1","ts-jest":"^27.1.3",typescript:"^4.5.4","unplugin-vue-components":"^0.17.11",vite:"^2.8.0","vue-jest":"^5.0.0-0","vue-tsc":"^0.29.8"},ie={"pre-commit":"lint-staged","prepare-commit-msg":"commitlint --edit","pre-push":"yarn test --passWithNoTests"},se={extends:["@commitlint/config-conventional"]};var g={name:Q,title:Z,version:ee,license:te,scripts:oe,dependencies:ne,devDependencies:re,gitHooks:ie,commitlint:se,"lint-staged":{"*.{ts,js,vue}":"yarn lint:fix"}},c={appName:g.name,appVersion:g.version,appTitle:g.title,baseUrl:String("/amiibo-showcase/"),env:{dev:{}.NODE_ENV==="development",test:{}.NODE_ENV==="testing",prod:{}.NODE_ENV==="production"},local:{enabled:!1,accessToken:String("")},backend:{apiUrl:String("https://www.amiiboapi.com/api")},keys:{core:{accessToken:"js.amiiboShowcase.accessToken",redirectPath:"js.amiiboShowcase.redirectPath"}}};function ce(){const e=typeof navigator!="undefined"&&navigator.language;return String(e).slice(0,2)}function Me(e){const t=String(e).toUpperCase().split(" ");return t[0][0]+t[t.length-1][0]}function Be(e=500){let t;return o=>{clearTimeout(t),t=setTimeout(o,e)}}function ae(e){return Object.keys(e).reduce((t,o)=>{const n=e[o];return n?Array.isArray(n)?n.length===0?t:`${t}&${o}=${n.join(",")}`:`${t}&${o}=${n}`:t},"")}function Ge(e){return t=>{t.preventDefault(),e==null||e()}}function Je(){const e=document.documentElement,t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),o=(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0),n=t+e.clientHeight,r=o+e.clientWidth;return{top:t,right:r,bottom:n,left:o}}const ue={home:"/home",login:"/login",logout:"/logout"},le={user:{logout:"Logout"},menu:{home:"Home"}},pe={title:"Home"},me={title:"Login"},de={title:"Logout"};var fe={routes:ue,app:le,home:pe,login:me,logout:de};const he={home:"/inicio",login:"/entrar",logout:"/sair"},ge={user:{logout:"Sair"},menu:{home:"Inicio"}},ve={title:"Inicio"},_e={title:"Entrar"},ye={title:"Sair"};var be={routes:he,app:ge,home:ve,login:_e,logout:ye},a=(e=>(e.EN="en",e.PT="pt",e))(a||{});const u=U({locale:ce()||a.EN,fallbackLocale:a.EN,messages:{[a.EN]:fe,[a.PT]:be},dateTimeFormats:{[a.EN]:{short:{year:"numeric",month:"numeric",day:"numeric"},long:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}},[a.PT]:{short:{year:"numeric",month:"numeric",day:"numeric"},long:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}}}});function A(e,t,o){const n=new Date().toISOString(),r=o?V(x(n),o).toISOString():null,i=c.appVersion;return localStorage.setItem(e,JSON.stringify({at:n,until:r,version:i,data:t})),t}function ke(e,t){Object.keys(e).forEach(o=>{v.set(o,e[o],{path:"",secure:!0,sameSite:"Lax",expires:t})})}function O(e){return v.get()[e]||void 0}function we(...e){e.forEach(t=>{v.remove(t,{path:""})})}function Pe(e,t,o){if(e.matched.some(n=>n.meta.protected)){O(c.keys.core.accessToken)?o():(A(c.keys.core.redirectPath,e.fullPath),o("/login"));return}o()}function Se(e,t,o){e.meta.title?document.title=`${c.appTitle} | ${e.meta.title}`:document.title=c.appTitle,o()}const Ee=[{path:"/",alias:u.global.t("routes.home"),component:()=>h(()=>import("./HomePage.a03a6f84.js"),["assets/HomePage.a03a6f84.js","assets/HomePage.6fb9d621.css","assets/vendor.8648d41f.js"]),meta:{title:u.global.t("home.title"),protected:!0}},{path:"/login",alias:u.global.t("routes.login"),component:()=>h(()=>import("./LoginPage.45a57a10.js"),["assets/LoginPage.45a57a10.js","assets/vendor.8648d41f.js"]),meta:{title:u.global.t("login.title")}},{path:"/logout",alias:u.global.t("routes.logout"),component:()=>h(()=>import("./LogoutPage.91913f53.js"),["assets/LogoutPage.91913f53.js","assets/vendor.8648d41f.js"]),meta:{title:u.global.t("logout.title")}}],w=R({history:K(c.baseUrl),routes:Ee});w.beforeEach(Pe);w.beforeEach(Se);function Te(e){const t=W(e);function o(n){return t.value=n,n}return[t,o]}const j=Symbol("auth-provider");function $e(){const[e,t]=Te(O(c.keys.core.accessToken)),o=T(()=>{if(e.value&&!e.value.includes("undefined"))return z(e.value)}),n=T(()=>!!e.value);function r(m,I){t(m),ke({[c.keys.core.accessToken]:m},I)}function i(){t(void 0),we(c.keys.core.accessToken)}function s(m){r(c.local.accessToken||""),window.location.replace("/")}function l(){i(),window.location.replace("/")}function p(){s()}return{accessToken:e,user:o,authenticated:n,login:s,logout:l,handleUnauthorized:p}}function Ae(){y(j,$e())}function Oe(){return _(j)}const je=b({setup(e){return Ae(),(t,o)=>k(t.$slots,"default")}}),L=Symbol("http-provider");function Le(){const{accessToken:e,handleUnauthorized:t}=Oe(),o=F.create({baseURL:c.backend.apiUrl,paramsSerializer:ae});return o.interceptors.request.use(n=>e.value?E({},n):n),o.interceptors.response.use(n=>n,n=>{var r;return((r=n.response)==null?void 0:r.status)===401&&(A(c.keys.core.redirectPath,window.location.pathname),t()),Promise.reject(n)}),o}function Ne(){y(L,Le())}function Ie(){return _(L)}const De=b({setup(e){return Ne(),(t,o)=>k(t.$slots,"default")}});class Ce{constructor(t){this.http=t}async getAmiibos(t){return this.http.get("/amiibo",{params:t}).then(o=>o.data.amiibo)}async getGameseries(){return this.http.get("/gameseries").then(t=>t.data.amiibo)}}const N=Symbol("api-provider");function He(){const e=Ie();return{amiibo:new Ce(e)}}function Ue(){y(N,He())}function Xe(){return _(N)}const Ve=b({setup(e){return Ue(),(t,o)=>k(t.$slots,"default")}});var xe=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const Re={};function Ke(e,t){const o=G("router-view"),n=Ve,r=De,i=je;return M(),B(i,null,{default:d(()=>[f(r,null,{default:d(()=>[f(n,null,{default:d(()=>[f(o)]),_:1})]),_:1})]),_:1})}var We=xe(Re,[["render",Ke]]);J(We).use(w).use(u).mount("#app");export{xe as _,Xe as a,Te as b,Be as d,Me as g,Ge as p,Je as s,Oe as u};