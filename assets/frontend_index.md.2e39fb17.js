import{_ as e,o as a,c as t,a as r}from"./app.9a28adf9.js";const f=JSON.parse('{"title":"前端插件基本概念","description":"","frontmatter":{},"headers":[{"level":2,"title":"主程序","slug":"主程序","link":"#主程序","children":[]},{"level":2,"title":"前端插件","slug":"前端插件","link":"#前端插件","children":[]},{"level":2,"title":"扩展包插件","slug":"扩展包插件","link":"#扩展包插件","children":[]},{"level":2,"title":"应用插件","slug":"应用插件","link":"#应用插件","children":[]},{"level":2,"title":"功能扩展插件","slug":"功能扩展插件","link":"#功能扩展插件","children":[]}],"relativePath":"frontend/index.md","lastUpdated":1673089567000}'),i={name:"frontend/index.md"},d=r('<h1 id="前端插件基本概念" tabindex="-1">前端插件基本概念 <a class="header-anchor" href="#前端插件基本概念" aria-hidden="true">#</a></h1><h2 id="主程序" tabindex="-1">主程序 <a class="header-anchor" href="#主程序" aria-hidden="true">#</a></h2><p>主程序是项目的主体框架，业务承载端。</p><p>在主程序中，在前端中，通常指我们的管理后台。管理后台作为业务的承载端，在登录完成后</p><h2 id="前端插件" tabindex="-1">前端插件 <a class="header-anchor" href="#前端插件" aria-hidden="true">#</a></h2><p>前端插件独立存在，不与任何 HTTP API 进行交互的插件。通过与主程序协商，统一数据通讯协议后，可以在主程序中直接引用的插件。</p><p>前端插件包括但不限于以下语言完成的插件：Vue、React、Angular、javascrip + css + html。</p><p>前端插件定义了业务的交互方式，可以方便用户进行业务交互操作。交互完成后，可通过定制的通讯协议将交互产生的结果数据发送给主程序。</p><h2 id="扩展包插件" tabindex="-1">扩展包插件 <a class="header-anchor" href="#扩展包插件" aria-hidden="true">#</a></h2><p>扩展包插件一般指在后端程序中，项目的依赖包。主程序通过集成扩展包，按照扩展包插件的官方文档，可以快速完成功能的研发。</p><h2 id="应用插件" tabindex="-1">应用插件 <a class="header-anchor" href="#应用插件" aria-hidden="true">#</a></h2><p>应用插件通常指基于主程序完成的应用，在主程序中安装应用插件，可快速为主程序集成应用，如 CMS、商城、博客……</p><h2 id="功能扩展插件" tabindex="-1">功能扩展插件 <a class="header-anchor" href="#功能扩展插件" aria-hidden="true">#</a></h2><p>功能扩展插件一般指为主程序提供功能扩展的插件，目前暂指 PicGo 的扩展插件。</p><p>在主程序提供的扩展点，功能扩展插件可以扩展主程序的功能、页面交互等。</p>',15),n=[d];function h(l,s,c,o,p,_){return a(),t("div",null,n)}const x=e(i,[["render",h]]);export{f as __pageData,x as default};
