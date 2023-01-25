## 添加文档

```
# 添加
git subtree add -P vitepress-docs/ https://ghproxy.com/https://github.com/mouyong/vitepress-doc-website.git master

# 拉取更新
git subtree pull -P vitepress-docs/ https://ghproxy.com/https://github.com/mouyong/vitepress-doc-website.git master

# 安装依赖
cd vitepress-docs/
yarn install

# 编写文档
yarn docs:dev

# 生成静态文件
yarn docs:build
```

## 子目录部署

`nginx` 配置
```
location /docs/ {
  try_files $uri $uri/ $uri.html;
}
```
