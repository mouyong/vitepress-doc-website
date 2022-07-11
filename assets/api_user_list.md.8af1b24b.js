import{_ as s,c as a,o as n,a as l}from"./app.48abcb6a.js";const C=JSON.parse('{"title":"\u83B7\u53D6\u7528\u6237\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Query \u53C2\u6570\uFF1A","slug":"query-\u53C2\u6570\uFF1A"},{"level":2,"title":"\u8FD4\u56DE\u7ED3\u679C\uFF1A","slug":"\u8FD4\u56DE\u7ED3\u679C\uFF1A"},{"level":2,"title":"\u5F00\u53D1\u8BF4\u660E","slug":"\u5F00\u53D1\u8BF4\u660E"}],"relativePath":"api/user/list.md"}'),o={name:"api/user/list.md"},e=l(`<h1 id="\u83B7\u53D6\u7528\u6237\u5217\u8868" tabindex="-1">\u83B7\u53D6\u7528\u6237\u5217\u8868 <a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u5217\u8868" aria-hidden="true">#</a></h1><ul><li>\u8BF7\u6C42\u65B9\u5F0F: <code>GET</code></li><li>\u8BF7\u6C42\u5730\u5740: <code>/api/users</code></li></ul><h2 id="query-\u53C2\u6570\uFF1A" tabindex="-1">Query \u53C2\u6570\uFF1A <a class="header-anchor" href="#query-\u53C2\u6570\uFF1A" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>keyword</td><td>String</td><td>NO</td><td>\u641C\u7D22\u5173\u952E\u8BCD\uFF0C\u641C\u7D22\u5B57\u6BB5\uFF1A<a href="./../../database/user/users.html">users.name</a></td></tr></tbody></table><h2 id="\u8FD4\u56DE\u7ED3\u679C\uFF1A" tabindex="-1">\u8FD4\u56DE\u7ED3\u679C\uFF1A <a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C\uFF1A" aria-hidden="true">#</a></h2><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">err_code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">err_msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;">// API \u53C2\u8003 &gt; \u63A5\u53E3\u6570\u636E\u6A21\u578B &gt; \u7528\u6237\u4FE1\u606F,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">meta</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">current_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">page_size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">last_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F00\u53D1\u8BF4\u660E" tabindex="-1">\u5F00\u53D1\u8BF4\u660E <a class="header-anchor" href="#\u5F00\u53D1\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u67E5\u8BE2\u7528\u6237\u8868\u7684\u6240\u6709\u4FE1\u606F <ul><li>\u5F53\u7528\u6237\u9700\u8981\u641C\u7D22\u6307\u5B9A\u7528\u6237\u65F6\uFF0C\u901A\u8FC7\u8BF7\u6C42\u53C2\u6570\u4E2D\u7684 <code>keyword</code> \u641C\u7D22 <code>users.name</code></li><li>\u5173\u952E\u8BCD\u641C\u7D22\u4F7F\u7528 <code>mysql</code> \u7684 <code>like</code> \u67E5\u8BE2</li></ul></li></ul>`,8),p=[e];function t(r,c,D,F,y,i){return n(),a("div",null,p)}var u=s(o,[["render",t]]);export{C as __pageData,u as default};
