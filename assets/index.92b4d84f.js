import{_ as I}from"./index.vue_vue_type_style_index_0_lang.83fd132a.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as w,s as k,u as V,p as N,r as d,o as v,U as l,V as z,b as c,e as m,f as a,w as n,j as p,W as A,l as f,t as g,F as C,X as R,Y as D,Z as E,A as F,_ as P,$ as y,a as W,g as x}from"./index.cd47d413.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const j={class:"nav"},q=w({__name:"startnav",setup(M){k();const{t:s,locale:_}=V(),i=N([{name:"frequently",path:"/start/commuse"},{name:"Customrelics",path:"/start/holyrelic"},{name:"Graduationrelics",path:"/start/holyrelic2"},{name:"Monsterspawning",path:"/start/monster"},{name:"Presetshortcuts",path:"/start/other"},{name:"LightCones",path:"/start/weapon"},{name:"item",path:"/start/thing"},{name:"character",path:"/start/avatar"},{name:"food",path:"/start/food"},{name:"avatar",path:"/start/page1"},{name:"scene",path:"/start/scene"},{name:"RemoteControl",path:"/start/about"}]);function o(r){l.push({path:r})}const e=d([""]),t=d(!1),h=()=>{t.value=window.innerWidth<=768};return h(),window.addEventListener("resize",h),v(()=>{e.value=[l.currentRoute.value.fullPath]}),z(()=>l.currentRoute.value.path,(r,$)=>{e.value=[r]},{immediate:!0}),v(()=>{_.value=navigator.language.includes("zh")?"zh":"en"}),(r,$)=>{const L=P,S=D,B=E;return c(),m("div",j,[a(B,{class:"menu","default-collapsed":t.value,showCollapseButton:"","default-open-keys":["0","1","2"],"selected-keys":e.value},{default:n(()=>[a(S,{key:"0"},{icon:n(()=>[a(p(A))]),title:n(()=>[f(g(p(s)("menu.main")),1)]),default:n(()=>[(c(!0),m(C,null,R(i,(u,T)=>(c(),F(L,{key:u.path,onClick:U=>o(u.path)},{default:n(()=>[f(g(p(s)(`menu.${u.name.toLowerCase()}`)),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["default-collapsed","selected-keys"])])}}});const G=b(q,[["__scopeId","data-v-5b7b55f8"]]),J={class:"cont"},K={class:"selectcom"},O=w({__name:"index",setup(M){const s=k();function _(o){const e={type:"CMD",data:o},t=JSON.stringify(e);s.socketSend(t)}const i=d(s.isLogin);return y("send",_),y("isLogin",!i),(o,e)=>{const t=W("router-view");return c(),m(C,null,[a(I),x("div",J,[a(G),x("div",K,[a(t)])])],64)}}});const ae=b(O,[["__scopeId","data-v-d16a0eea"]]);export{ae as default};
