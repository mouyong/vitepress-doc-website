import{f as b,p as d,h as _,d as p,b as s,o as i,y as f,A as g,e as S,c as h,F as w,N as P,a1 as r,I as c,a2 as x,u as C,l as $,a3 as j,a4 as k,a5 as E,a6 as I,a7 as L,a8 as R,a9 as T,aa as B,ab as H,ac as V,ad as D,ae as F,af as O}from"./chunks/framework.82ade74d.js";import{a as z,_ as N,t as l}from"./chunks/theme.dad8c497.js";const u=b(),v="",M=v+d("/sponsor/sponsors.json");function y(){return _(async()=>{if(u.value)return;const t=await(await fetch(M)).json();u.value=G(t)}),{data:u}}function G(e){return[{tier:"Platinum Sponsor",size:"big",items:m(e.platinum)},{tier:"Gold Sponsors",size:"medium",items:m(e.gold)}]}function m(e){return e.map(t=>({...t,img:v+d(`/sponsor/images/${t.img}`)}))}const U=p({__name:"HomeSponsors",setup(e){const{data:t}=y();return(a,n)=>s(t)?(i(),f(s(z),{key:0,message:"Plugins World is free and open source, made possible by wonderful sponsors.","action-text":"Become a sponsor","action-link":"https://gitee.com/github-mouyong/plugins-world?donate=true",data:s(t)},null,8,["data"])):g("",!0)}}),q="/logo_square_en.png",W=P('<a class="fresnsAside" href="https://gitee.com/github-mouyong/plugins-world?donate=true" target="_blank"><img width="22" height="22" src="'+q+'"><span><p class="extra-info">助力生态可持续发展</p><p class="heading">赞助 插件世界 发展</p><p class="extra-info">成为赞助者</p></span></a>',1),J=p({__name:"AsideSponsors",setup(e){const{data:t}=y(),a=S(()=>(t==null?void 0:t.value.map(n=>({size:n.size==="big"?"mini":"xmini",items:n.items})))??[]);return(n,ae)=>(i(),h(w,null,[W,s(t)?(i(),f(s(N),{key:0,data:s(a)},null,8,["data"])):g("",!0)],64))}});const K=["innerHTML"],Q=p({__name:"SvgImage",props:{svg:null},setup(e){return(t,a)=>(i(),h("figure",{class:"svg-image-root",innerHTML:e.svg},null,8,K))}});const X=Object.assign({...l,Layout:()=>r(l.Layout,null,{"home-features-after":()=>r(U),"aside-ads-before":()=>r(J)}),enhanceApp({app:e}){e.component("SvgImage",Q)}});function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=A(X),Y=p({name:"VitePressApp",setup(){const{site:e}=C();return _(()=>{$(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),j(),k(),E(),o.setup&&o.setup(),()=>r(o.Layout)}});async function Z(){const e=te(),t=ee();t.provide(I,e);const a=L(e.route);return t.provide(R,a),t.component("Content",T),t.component("ClientOnly",B),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:H}),{app:t,router:e,data:a}}function ee(){return V(Y)}function te(){let e=c,t;return D(a=>{let n=F(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),c&&(e=!1),O(()=>import(n),[])},o.NotFound)}c&&Z().then(({app:e,router:t,data:a})=>{t.go().then(()=>{x(t.route,a.site),e.mount("#app")})});export{Z as createApp};
