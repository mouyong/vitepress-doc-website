import{_ as t,o as d,c as e,a as r}from"./app.40e43c3f.js";const m=JSON.parse('{"title":"users 用户表","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发说明","slug":"开发说明","link":"#开发说明","children":[]}],"relativePath":"database/user/users.md","lastUpdated":1673169476000}'),a={name:"database/user/users.md"},s=r('<h1 id="users-用户表" tabindex="-1">users 用户表 <a class="header-anchor" href="#users-用户表" aria-hidden="true">#</a></h1><table><thead><tr><th>字段名</th><th>字段类型</th><th>字段注释</th><th>默认值</th><th>可空</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>bigint unsigned</td><td>主键 ID</td><td></td><td>NO</td><td>自动递赠</td></tr><tr><td>name</td><td>varchar(64)</td><td>姓名</td><td></td><td>NO</td><td></td></tr><tr><td>gender</td><td>tinyint unsigned</td><td>性别</td><td></td><td>NO</td><td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html#number-gender" target="_blank" rel="noreferrer">性别合法值</a><br>0 未知<br>1 男性<br>2 女性</td></tr><tr><td>mobile</td><td>varchar(32)</td><td>手机号</td><td></td><td>NO</td><td>手机号</td></tr><tr><td>address</td><td>varchar(64)</td><td>通讯地址</td><td></td><td>YES</td><td>包含省市区的详细地址</td></tr><tr><td>longitude</td><td>varchar(64)</td><td>经度</td><td></td><td>YES</td><td>通过详细地址转换得到</td></tr><tr><td>latitude</td><td>varchar(64)</td><td>纬度</td><td></td><td>YES</td><td>通过详细地址转换得到</td></tr><tr><td>created_at</td><td>timestamp</td><td>创建时间</td><td>CURRENT_TIMESTAMP</td><td>NO</td><td></td></tr><tr><td>updated_at</td><td>timestamp</td><td>更新时间</td><td></td><td>YES</td><td></td></tr><tr><td>deleted_at</td><td>timestamp</td><td>删除时间</td><td></td><td>YES</td><td></td></tr></tbody></table><h2 id="开发说明" tabindex="-1">开发说明 <a class="header-anchor" href="#开发说明" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">业务逻辑</p><ul><li>用户的经纬度通过传入的地址，请求 <strong>高德地图 API</strong> 后转换得到。</li></ul></div>',4),i=[s];function n(o,h,c,l,_,u){return d(),e("div",null,i)}const b=t(a,[["render",n]]);export{m as __pageData,b as default};