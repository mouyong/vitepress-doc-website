# 常见问题

## 服务器权限设置

**1. 如何授予指定用户对目录及子目录的权限，同时不更改目录的所有者和所有组**

```bash
# 以宝塔面板举例，在终端中执行
# 设置 ACL 权限，授予 www 用户对 /www/wwwroot 目录的相关权限
# 授权后，该目录新增文件夹和文件，无论所有者是谁，该用户自动享有相关权限

sudo apt install acl
sudo setfacl -R -m g:www:r-x -m u:www:rwx /www/wwwroot
sudo setfacl -Rd -m g:www:r-x -m u:www:rwx /www/wwwroot
```