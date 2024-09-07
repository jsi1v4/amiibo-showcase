import{_ as U,s as oe,g as se,u as ne,d as X,p as O,a as le,b as F}from"./index.504ab47e.js";import{k as a,t as c,r as w,f as $,e as g,v as S,x as s,y,s as q,l as j,F as L,z as M,A as H,B,C as V,D as P,T as ae,w as h,E as W,u as re,G as ie,n as b,H as ue,I as z,J as N,K as ce,L as _e,M as de,N as pe,O as me}from"./vendor.2478c013.js";const fe={},he={class:"app-content"};function be(o,e){return a(),c("div",he,[w(o.$slots,"default")])}var ve=U(fe,[["render",be]]);const ye=y("div",{class:"base-progress-bar__value"},null,-1),ge=[ye],Y=$({props:{height:null},setup(o){const e=o,t=g(()=>Number(e.height)?`${e.height}px`:e.height);return(n,r)=>(a(),c("div",{class:"base-progress-bar",style:S({height:s(t)})},ge,4))}});const $e=$({props:{modelValue:null,class:null,offsetX:{default:0},offsetY:{default:0},contentClass:null,items:null},emits:["update:modelValue"],setup(o,{emit:e}){const t=o,n=q(null),r=g(()=>{if(!t.modelValue||!n.value)return;const _=oe(),d={w:document.body.clientWidth,h:document.body.clientHeight},m={w:n.value.clientWidth,h:n.value.clientHeight},p={x:t.modelValue.pageX,y:t.modelValue.pageY},v={x:Number(t.offsetX),y:Number(t.offsetY)};let k=0,C=0,x=0,A=0;return k=p.y+v.y,A=p.x+v.x,p.y+m.h>_.bottom&&(x=d.h-_.bottom+16+v.y,k=0),p.x+m.w>_.right&&(C=_.right-p.x+v.x,A=0),{top:k?`${k}px`:void 0,right:C?`${C}px`:void 0,bottom:x?`${x}px`:void 0,left:A?`${A}px`:void 0}});function i(){e("update:modelValue",null)}return(_,d)=>(a(),j(ae,{to:"#app-portal"},[t.modelValue?(a(),c("div",{key:0,class:V(["base-menu",t.class])},[y("div",{class:"base-menu__overlay",onClick:d[0]||(d[0]=m=>i())}),y("ul",{class:V(["base-menu__content",t.contentClass]),style:S(s(r)),ref_key:"menuRef",ref:n},[w(_.$slots,"extra"),t.items?(a(!0),c(L,{key:1},M(t.items,(m,p)=>(a(),c("li",{key:p,class:"base-menu__content__item"},[w(_.$slots,"item",{item:m},()=>[H(B(m),1)])]))),128)):w(_.$slots,"default",{key:0})],6)],2)):P("",!0)]))}});const G=$({props:{type:{default:"body"}},setup(o){const e=o,t=g(()=>{switch(e.type){case"h1":return"h1";case"h2":return"h2";case"h3":return"h3";case"h4":return"h4";case"h5":return"h5";case"h6":return"h6";case"body-bold":case"body2-bold":case"caption-bold":return"strong";default:return"span"}});return(n,r)=>(a(),j(W(s(t)),{class:V(["base-text",`base-text--${e.type}`])},{default:h(()=>[w(n.$slots,"default")]),_:3},8,["class"]))}});const J=$({props:{size:{default:24}},setup(o){const e=o,t=g(()=>{if(!Number(e.size))return e.size}),n=g(()=>{if(Number(e.size))return`${e.size}px`});return(r,i)=>(a(),c("i",{class:V(["base-icon",s(t)&&`base-icon--${s(t)}`]),style:S({fontSize:s(n)})},[w(r.$slots,"default")],6))}});const K=$({props:{to:null,href:null,replace:{type:Boolean},outline:{type:Boolean},fill:{type:Boolean},icon:{type:Boolean},block:{type:Boolean},noPadding:{type:Boolean},noHover:{type:Boolean},inline:{type:Boolean},submit:{type:Boolean},disabled:{type:Boolean}},setup(o){const e=o;return(t,n)=>(a(),j(W(e.to?"router-link":e.href?"a":"button"),{class:V(["base-btn",{"base-btn--outline":e.outline,"base-btn--fill":e.fill,"base-btn--block":e.block,"base-btn--icon":e.icon,"base-btn--no-padding":e.noPadding,"base-btn--no-hover":e.noHover,"base-btn--inline":e.inline,"base-btn--disabled":e.disabled}]),to:e.to,href:e.href,replace:e.replace,disabled:e.disabled,type:e.submit?"submit":"button"},{default:h(()=>[w(t.$slots,"default")]),_:3},8,["class","to","href","replace","disabled","type"]))}});const we=["title"],xe=["alt","src"],ke={key:1,class:"base-avatar__initials"},Be=$({props:{title:null,photo:null,size:{default:36}},setup(o){const e=o,t=g(()=>se(e.title)),n=g(()=>({height:`${e.size}px`,width:`${e.size}px`}));return(r,i)=>(a(),c("div",{class:V(["base-avatar"]),style:S(s(n)),title:e.title},[e.photo?(a(),c("img",{key:0,class:"base-avatar__photo",alt:`${e.title} avatar`,src:e.photo,style:S(s(n))},null,12,xe)):(a(),c("span",ke,B(s(t)),1))],12,we))}});const Ce={class:"app-user"},Ve=$({props:{title:null,photo:null},setup(o){const e=o,t=q(null),n=re(),{t:r}=ie(),i=[{label:r("app.user.logout"),icon:"logout",onClick:()=>n.push(r("routes.logout"))}];return(_,d)=>{const m=Be,p=K,v=J,k=G,C=$e;return a(),c("div",Ce,[b(p,{onClick:d[0]||(d[0]=x=>t.value=x),"no-padding":"","no-hover":""},{default:h(()=>[b(m,{class:"app-user__avatar",title:e.title,photo:e.photo},null,8,["title","photo"])]),_:1}),b(C,{items:i,modelValue:s(t),"onUpdate:modelValue":d[1]||(d[1]=x=>ue(t)?t.value=x:null),"offset-x":"40"},{item:h(({item:x})=>[b(p,{href:x.link,target:"_blank",onClick:x.onClick,"no-padding":"","no-hover":""},{default:h(()=>[b(v,{size:"18"},{default:h(()=>[H(B(x.icon),1)]),_:2},1024),b(k,{type:"body2"},{default:h(()=>[H(B(x.label),1)]),_:2},1024)]),_:2},1032,["href","onClick"])]),_:1},8,["modelValue"])])}}});const ze={class:"layout-default"},Ne=$({props:{loading:{type:Boolean}},setup(o){const e=o,{user:t}=ne();return(n,r)=>{var m;const i=Ve,_=Y,d=ve;return a(),c("div",ze,[b(i,{title:(m=s(t))==null?void 0:m.name},null,8,["title"]),b(d,null,{default:h(()=>[z(b(_,null,null,512),[[N,e.loading]]),w(n.$slots,"default")]),_:3})])}}});const Q=$({props:{align:null,justify:null,flex:{type:Boolean},noWrap:{type:Boolean},gap:null},setup(o){const e=o;return(t,n)=>(a(),c("div",{class:V(["base-row",e.align&&`base-row--align-${e.align}`,e.justify&&`base-row--justify-${e.justify}`,e.gap&&`base-row--gap-${e.gap}`,e.flex&&"base-row--flex",e.noWrap&&"base-row--no-wrap"])},[w(t.$slots,"default")],2))}});const Z=$({props:{sm:null,md:null,lg:{default:12},align:null,justify:null},setup(o){const e=o,t={sm:600,md:960,lg:1264},n=g(()=>{const r=screen.width>=t.lg?e.lg:screen.width<t.lg&&screen.width>=t.md?e.md||e.lg:e.sm||e.md||e.lg;return`calc(${(100/(12/Number(r))).toFixed(2)}% - var(--row-gap, 0px))`});return(r,i)=>(a(),c("div",{class:V(["base-col",e.align&&`base-col--align-${e.align}`,e.justify&&`base-col--justify-${e.justify}`]),style:S({width:s(n)})},[w(r.$slots,"default")],6))}});const Se=$({props:{height:null,width:null,noTop:{type:Boolean},noBottom:{type:Boolean},overflow:{type:Boolean}},setup(o){const e=o,t=g(()=>Number(e.height)?`${e.height}px`:e.height),n=g(()=>Number(e.width)?`${e.width}px`:e.width);return(r,i)=>(a(),c("div",{class:V(["base-card",{"base-card--no-top":e.noTop,"base-card--no-bottom":e.noBottom,"base-card--overflow":e.overflow}]),style:S({height:s(t),width:s(n)})},[w(r.$slots,"default")],6))}});const Ae=$({props:{size:{default:26}},setup(o){const e=o,t=g(()=>Number(e.size)?{height:`${e.size}px`,width:`${e.size}px`}:{height:e.size,width:e.size});return(n,r)=>(a(),c("div",{class:"base-spinner",style:S(s(t))},null,4))}});const He={},Ie={class:"util-loading"};function je(o,e){const t=Ae;return a(),c("div",Ie,[b(t,{class:"util-loading__spinner",size:"50"})])}var De=U(He,[["render",je]]);const Le=["src"],Pe=$({props:{items:null,loading:{type:Boolean}},setup(o){const e=o,t=q(0),n=X(1200);g(()=>{var i;return(i=e.items)==null?void 0:i.slice()});function r(i){n(()=>t.value=i.target.scrollTop)}return(i,_)=>{const d=De,m=G,p=Se,v=Z,k=Q;return a(),c("div",{class:"home-amiibo-list",onScroll:r},[b(k,{gap:"sm"},{default:h(()=>[(a(!0),c(L,null,M(e.items,C=>(a(),j(v,{key:C.id,lg:"3",md:"4",sm:"6"},{default:h(()=>[b(p,{class:"home-amiibo-list__item",height:"320",overflow:""},{default:h(()=>[z(b(d,null,null,512),[[N,e.loading]]),b(m,{type:"body-bold"},{default:h(()=>[H(B(C.label),1)]),_:2},1024),y("img",{src:C.value.image,height:"250"},null,8,Le)]),_:2},1024)]),_:2},1024))),128))]),_:1})],32)}}});const qe={class:"base-form-field"},Re={class:"base-form-field__wrapper"},Te={class:"base-form-field__label",for:"base-form-field"},Fe={class:"base-form-field__label__required"},Me={class:"base-form-field__control-wrapper"},We=["value"],Ee=["value"],Oe=["active","onClick"],Ue={class:"base-form-field__bottom"},Xe=$({props:{type:null,label:null,placeholder:null,hint:null,textNothing:null,rows:null,required:{type:Boolean},readonly:{type:Boolean},block:{type:Boolean},items:null,multiple:{type:Boolean},modelValue:null},emits:["update:modelValue","search"],setup(o,{emit:e}){const t=o,n=g(()=>{switch(t.type){case"select":return"select";default:return t.rows?"textarea":"input"}}),r=g(()=>{switch(t.type){case"select":return{keydown:O(m),mousedown:O()};default:return{input:E}}}),i=g(()=>{switch(t.type){case"select":case"autocomplete":case"api-autocomplete":if(t.multiple){const l=t.modelValue||[];return l==null?void 0:l.map(u=>u.label).join(", ")}else{const l=t.modelValue;return l==null?void 0:l.label}default:return t.modelValue}}),_=g(()=>{if(t.readonly)return!1;switch(t.type){case"select":case"autocomplete":case"api-autocomplete":return!0;default:return!1}}),d=ce(!1);function m(){_.value&&(d.value=!0)}function p(){d.value=!1}function v(l){t.readonly||(e("update:modelValue",l),_.value&&(!l||!t.multiple)&&p())}function k(){v(void 0)}function C(l){if(t.multiple){const u=t.modelValue||[];A(l)?v(u.filter(f=>f.id!==l.id)):v([...u,l])}else v(l)}function x(l){var u;if(_.value)if(t.multiple){const f=t.modelValue;return((u=f==null?void 0:f[f.length-1])==null?void 0:u.id)===l.id}else{const f=t.modelValue;return(f==null?void 0:f.id)===l.id}}function A(l){if(_.value&&t.multiple){const u=t.modelValue;return u==null?void 0:u.some(f=>f.id===l.id)}}const T=X(1200),D=q(t.items||[]),ee=g(()=>{var l;return(((l=t.items)==null?void 0:l.length)||0)-D.value.length}),I=q("");function E(l){const u=l.target;switch(t.type){case"text":v(u.value);break;case"number":v(Number(u.value));break;case"search":v(u.value),T(()=>{u.value&&u.value.length>2&&e("search",u.value)});break;case"api-autocomplete":T(()=>{I.value=u.value,u.value&&u.value.length>2&&e("search",u.value)});break;case"autocomplete":T(()=>{var f;I.value=u.value,D.value=((f=t.items)==null?void 0:f.filter(R=>u.value?`${R.id}-${R.label}`.toLowerCase().includes(u.value):!0))||[]});break}}function te(){I.value="",D.value=t.items||[]}return _.value&&_e(()=>t.items,()=>{D.value=t.items||[]}),(l,u)=>(a(),c("div",qe,[y("div",Re,[z(y("label",Te,[H(B(t.label)+" ",1),z(y("span",Fe,"*",512),[[N,t.required]])],512),[[N,t.label]]),y("div",{class:V(["base-form-field__container",{"base-form-field__container--textarea":!!t.rows}]),onClick:m},[w(l.$slots,"prepend"),y("div",Me,[(a(),j(W(s(n)),de({id:"base-form-field",class:["base-form-field__control",{"base-form-field__readonly":t.readonly,"base-form-field__placeholder":!s(i)}],placeholder:t.placeholder,rows:t.rows,required:t.required,readonly:t.readonly||!!s(I),value:s(i)},t.type==="number"?{type:"number"}:void 0,pe(s(r)),{autocomplete:"off"}),{default:h(()=>[s(n)==="select"?(a(),c(L,{key:0},[z(y("option",{value:""},B(t.placeholder),513),[[N,t.placeholder]]),y("option",{value:s(i)},B(s(i)||t.placeholder),9,We)],64)):P("",!0)]),_:1},16,["class","placeholder","rows","required","readonly","value"])),s(I)?(a(),c("input",{key:0,class:"base-form-field__control base-form-field__control--search",value:s(I),onInput:E,autocomplete:"off"},null,40,Ee)):P("",!0)]),w(l.$slots,"append")],2),s(_)&&d.value?(a(),c(L,{key:0},[y("div",{class:"base-form-field__overlay",onClick:p}),y("ul",{class:"base-form-field__items",style:S({right:t.block?0:void 0})},[z(y("li",{class:"base-form-field__items__item base-form-field__placeholder",onClick:k},B(t.textNothing||l.$t("base-components.form-field-nothing")),513),[[N,!t.required]]),z(y("li",{class:"base-form-field__items__item base-form-field__placeholder",onClick:te},B(l.$t("base-components.form-field-clear"))+" "+B(t.type==="autocomplete"?l.$t("base-components.form-field-filtered",{v:s(ee)}):""),513),[[N,s(I)]]),(a(!0),c(L,null,M(s(D),(f,R)=>(a(),c("li",{key:`${R}-${A(f)}`,class:"base-form-field__items__item",active:x(f),onClick:tt=>C(f)},[w(l.$slots,"item",{item:f,active:A(f)},()=>[H(B(f.label),1)])],8,Oe))),128))],4)],64)):P("",!0)]),y("div",Ue,[w(l.$slots,"bottom"),z(y("span",{class:"base-form-field__hint"},B(t.hint),513),[[N,t.hint]])])]))}});const Ye={class:"home-amiibo-search"},Ge=H("search"),Je=H("close"),Ke=$({props:{value:null,loading:{type:Boolean}},emits:["handle"],setup(o,{emit:e}){const t=o;return(n,r)=>{const i=J,_=K,d=Y,m=Xe,p=Z,v=Q;return a(),c("div",Ye,[b(v,{justify:"center"},{default:h(()=>[b(p,{lg:"4"},{default:h(()=>[b(m,{type:"search","model-value":t.value,onSearch:r[1]||(r[1]=k=>e("handle",k))},{prepend:h(()=>[b(i,null,{default:h(()=>[Ge]),_:1})]),append:h(()=>[t.value?(a(),j(_,{key:0,icon:"",onClick:r[0]||(r[0]=k=>e("handle",""))},{default:h(()=>[b(i,{size:"20"},{default:h(()=>[Je]),_:1})]),_:1})):P("",!0)]),bottom:h(()=>[z(b(d,null,null,512),[[N,t.loading]])]),_:1},8,["model-value"])]),_:1})]),_:1})])}}});function Qe(){return o=>(o==null?void 0:o.map((e,t)=>({id:t+1,name:e.name||e.character,gameName:e.gameSeries,amiiboGame:e.amiiboSeries,image:e.image})))||[]}function Ze(){return o=>Qe()(o).map(t=>({id:t.id,label:t.name,value:t}))}function et(){const{amiibo:o}=le(),[e,t]=F(""),[n,r]=F(!1),[i,_]=F([]);async function d(p){return r(!0),o.getAmiibos({name:p}).then(Ze()).then(_).finally(()=>r(!1))}function m(p){t(p),d(p)}return me(()=>{d()}),{amiiboList:i,search:e,handleSearch:m,loading:n}}const nt=$({setup(o){const{amiiboList:e,search:t,handleSearch:n,loading:r}=et();return(i,_)=>{const d=Ke,m=Pe,p=Ne;return a(),j(p,null,{default:h(()=>{var v;return[b(d,{loading:!((v=s(e))!=null&&v.length),value:s(t),onHandle:s(n)},null,8,["loading","value","onHandle"]),b(m,{loading:s(r),items:s(e)},null,8,["loading","items"])]}),_:1})}}});export{nt as default};
