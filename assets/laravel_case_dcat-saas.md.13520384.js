import{_ as s,o as a,c as n,a as e}from"./app.68f6244c.js";const h=JSON.parse('{"title":"DcatSaas","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"关注代码仓库","slug":"关注代码仓库","link":"#关注代码仓库","children":[]},{"level":2,"title":"前置要求","slug":"前置要求","link":"#前置要求","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"前后端分离的部署示例","slug":"前后端分离的部署示例","link":"#前后端分离的部署示例","children":[]},{"level":2,"title":"协议","slug":"协议","link":"#协议","children":[]},{"level":2,"title":"开发者交流群","slug":"开发者交流群","link":"#开发者交流群","children":[]}],"relativePath":"laravel/case/dcat-saas.md","lastUpdated":1673050428000}'),l={name:"laravel/case/dcat-saas.md"},p=e(`<h1 id="dcatsaas" tabindex="-1">DcatSaas <a class="header-anchor" href="#dcatsaas" aria-hidden="true">#</a></h1><p><a href="https://packagist.org/packages/mouyong/dcat-saas" target="_blank" rel="noreferrer"><img src="http://poser.pugx.org/mouyong/dcat-saas/license" alt="License"></a></p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h2><p>一款帮助你在 30 分钟内从 0 搭建 Laravel SaaS 化项目的插件。</p><p>在<code>插件管理器</code>与<code>应用市场管理器</code>的插件架构设计下，采用<code>Tenancy 3.x</code>、<code>Dcat-Admin</code>、<code>Laravel</code> 可快速建立属于你的 SaaS 业务框架。</p><p>初期可采用 <code>Dcat-Admin</code> 完成中心应用开账号，租户应用建立业务逻辑的方案。研发到一定阶段后，推荐采用 <a href="https://lolicode.gitee.io/scui-doc/" target="_blank" rel="noreferrer">scui</a> 或其他你喜欢的管理后台框架，将项目前后端进行分离。</p><p>依赖项目：</p><ul><li><a href="http://gitee.com/fresns/plugin-manager" target="_blank" rel="noreferrer">插件管理器 fresns/plugin-manager</a></li><li><a href="https://gitee.com/fresns/market-manager" target="_blank" rel="noreferrer">应用市场管理器 fresns/market-manager</a></li><li><a href="https://tenancyforlaravel.com/" target="_blank" rel="noreferrer">Tenancy 3.x</a></li><li><a href="http://www.dcatadmin.com/" target="_blank" rel="noreferrer">Dcat-Admin</a></li><li><a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a></li></ul><h2 id="关注代码仓库" tabindex="-1">关注代码仓库 <a class="header-anchor" href="#关注代码仓库" aria-hidden="true">#</a></h2><p><a href="https://github.com/mouyong/dcat-saas" target="_blank" rel="noreferrer">点击前往代码仓库</a></p><h2 id="前置要求" tabindex="-1">前置要求 <a class="header-anchor" href="#前置要求" aria-hidden="true">#</a></h2><ul><li>Laravel 9+</li><li>Tenancy 3+</li><li>DcatAdmin 2.*</li><li>fresns/plugin-manager ^2</li><li>fresns/market-manager ^1</li><li>项目已完成 fresns/plugin-manager、fresns/market-manager 的安装。</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><ol><li>修改扩展包稳定性限制 <code>composer.json</code> 需要允许安装稳定性为 <code>dev</code> 的依赖包。相关设置见下方代码。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;minimum-stability&quot;: &quot;dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;prefer-stable&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>初始化</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 创建新项目 saas-test</span></span>
<span class="line"><span style="color:#A6ACCD;">composer create-project --prefer-dist laravel/laravel saas-test</span></span>
<span class="line"><span style="color:#A6ACCD;"># 进入项目目录</span></span>
<span class="line"><span style="color:#A6ACCD;">cd saas-test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 初始化 git 仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &quot;feat: Init.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 配置应用市场管理器与插件管理器的安装源</span></span>
<span class="line"><span style="color:#A6ACCD;">composer config repositories.market-manager vcs https://gitee.com/fresns/market-manager</span></span>
<span class="line"><span style="color:#A6ACCD;">composer config repositories.plugin-manager vcs https://gitee.com/fresns/plugin-manager</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装应用市场管理器与插件管理器</span></span>
<span class="line"><span style="color:#A6ACCD;">composer require fresns/market-manager:dev-master</span></span>
<span class="line"><span style="color:#A6ACCD;">composer require fresns/plugin-manager:2.x-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 配置数据库与项目信息</span></span>
<span class="line"><span style="color:#A6ACCD;">	APP_NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">	APP_URL</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	DB_HOST</span></span>
<span class="line"><span style="color:#A6ACCD;">	DB_DATABASE</span></span>
<span class="line"><span style="color:#A6ACCD;">	DB_USERNAME</span></span>
<span class="line"><span style="color:#A6ACCD;">	DB_PASSWORD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 执行迁移，增加 plugins 表</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交仓库变动。方便查看 saas 初始化的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &quot;feat: Install market-manager and plugin-manager.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 从 github 下载 dcat-saas 扩展</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan market:require mouyong/dcat-saas</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 或从 zip 压缩包安装 dcat-saas</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan market:require ~/dcat-saas.zip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 激活插件</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan plugin:activate DcatSaas</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 初始化 saas 信息</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas:install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>使用</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 常用命令</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas                                # 查看 saas 扩展包提供的命令</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas:install                        # 初始化 saas（会提示是否覆盖）</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas:demo-add                       # 添加租户 可指定租户名，默认 foo</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas:demo-del                       # 删除租户 可指定租户名，默认 foo</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas:menu-export                    # 导出菜单（默认会尝试导出 foo 租户多菜单）</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan saas:menu-reset                     # 重置菜单 (根据导出的菜单进行租户菜单重置)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan tenants:list                        # 查看租户列表</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan tenants:migrate --tenants foo       # 执行 foo 租户的迁移，开发阶段建议指定租户，部署阶段可不指定，以批量运行租户迁移</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan tenants:rollback --tenants foo      # 回滚 foo 租户的迁移，开发阶段建议指定租户，部署阶段可不指定，以批量运行租户迁移的回滚操作</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 其他命令自行查看</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="前后端分离的部署示例" tabindex="-1">前后端分离的部署示例 <a class="header-anchor" href="#前后端分离的部署示例" aria-hidden="true">#</a></h2><p>宝塔缓存与前端代理的配置示例：</p><p>搭配 <code>flow.aliyun.com</code> 或宝塔 <code>webhook</code> 可完成项目的 <code>devops</code> 自动化部署。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># scui</span></span>
<span class="line"><span style="color:#A6ACCD;">location ~* ^/(dashboard|tenants-assets|img|config|pc) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://localhost:3000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # proxy_pass http://192.168.0.34:3000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # proxy_pass http://xxx.hecs.example.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # proxy_pass https://xxx-xxx-dashboard.oss-cn-shenzhen.aliyuncs.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># scui</span></span>
<span class="line"><span style="color:#A6ACCD;">location ~* ^/(dashboard|tenants-assets|img|config|pc) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass https://xxx-dashboard-aone.oss-cn-shenzhen.aliyuncs.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># scui</span></span>
<span class="line"><span style="color:#A6ACCD;">location ~* ^/(platform|platform-assets|img|config) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass https://xxx-dashboard-platform.oss-cn-shenzhen.aliyuncs.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 有缓存的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">location ~* ^/assets {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_cache cache_one;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_cache_key $host$uri$is_args$args;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Nginx-Cache &quot;$upstream_cache_status&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_cache_valid 200 304 1m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_cache_valid 404 500 502 503 504 1m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_cache_valid any 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">    expires 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://test-csim-dashboard.oss.iwnweb.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-hidden="true">#</a></h2><p><a href="https://github.com/mouyong/dcat-saas/blob/master/LICENSE" target="_blank" rel="noreferrer">Apache 2.0</a></p><h2 id="开发者交流群" tabindex="-1">开发者交流群 <a class="header-anchor" href="#开发者交流群" aria-hidden="true">#</a></h2><p><a href="https://qm.qq.com/cgi-bin/qm/qr?k=JdZJTPzOEsDo3gCR1ENENRXqWPmM-67l&amp;jump_from=webapi&amp;authKey=5EZ6xwqKptmf3U3QMT/IkclubXceZt2JWqkiQbfwXiELv2d4roHTMX32MmBWoi4q" target="_blank" rel="noreferrer">技术交流群</a> ID: 305795002</p>`,27),o=[p];function r(t,c,i,A,C,d){return a(),n("div",null,o)}const D=s(l,[["render",r]]);export{h as __pageData,D as default};
