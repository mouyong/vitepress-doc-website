import{_ as t,o as d,c as a,N as r}from"./chunks/framework.849a41bc.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/users/users.md","lastUpdated":1680334499000}'),e={name:"database/users/users.md"},s=r('<h2 id="用户表-users" tabindex="-1">用户表 users <a class="header-anchor" href="#用户表-users" aria-label="Permalink to &quot;用户表 users&quot;">​</a></h2><table><thead><tr><th>字段注释</th><th>字段名</th><th>字段类型</th><th>默认值</th><th>可空</th><th>备注</th></tr></thead><tbody><tr><td>主键ID</td><td>id</td><td>bigint unsigned</td><td></td><td>NO</td><td>自动递赠</td></tr><tr><td>姓名</td><td>name</td><td>varchar(64)</td><td></td><td>NO</td><td></td></tr><tr><td>性别</td><td>gender</td><td>varchar(64)</td><td></td><td>NO</td><td>未知-UNKNOWN<br>男性-MALE<br>女性-FEMALE</td></tr><tr><td>手机号</td><td>mobile</td><td>varchar(32)</td><td></td><td>NO</td><td>手机号</td></tr><tr><td>通讯地址</td><td>address</td><td>varchar(64)</td><td></td><td>YES</td><td>包含省市区的详细地址</td></tr><tr><td>经度</td><td>longitude</td><td>varchar(64)</td><td></td><td>YES</td><td>通过详细地址转换得到</td></tr><tr><td>纬度</td><td>latitude</td><td>varchar(64)</td><td></td><td>YES</td><td>通过详细地址转换得到</td></tr><tr><td>创建时间</td><td>created_at</td><td>timestamp</td><td>CURRENT_TIMESTAMP</td><td>NO</td><td></td></tr><tr><td>更新时间</td><td>updated_at</td><td>timestamp</td><td></td><td>YES</td><td></td></tr><tr><td>删除时间</td><td>deleted_at</td><td>timestamp</td><td></td><td>YES</td><td></td></tr></tbody></table><h2 id="开发说明" tabindex="-1">开发说明 <a class="header-anchor" href="#开发说明" aria-label="Permalink to &quot;开发说明&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">业务逻辑</p><ul><li>用户的经纬度通过传入的地址，请求 <strong>高德地图 API</strong> 后转换得到。</li></ul></div>',4),o=[s];function c(i,h,l,n,_,u){return d(),a("div",null,o)}const b=t(e,[["render",c]]);export{p as __pageData,b as default};