# users 用户表

| 字段名     | 字段类型              | 字段注释 | 默认值            | 可空 | 备注                                                             |
| ---------- | --------------------- | -------- | ----------------- | ---- | ---------------------------------------------------------------- |
| id         | int *UNSIGNED*        | 主键 ID  |                   | NO   | 自动递赠                                                         |
| name       | varchar(64)           | 姓名     |                   | NO   |                                                                  |
| gender     | unsigned tiny integer | 性别     |                   | NO   | [性别合法值][微信小程序性别合法值]<br>0 未知<br>1 男性<br>2 女性 |
| mobile     | varchar(32)           | 手机号   |                   | NO   | 手机号                                                           |
| address    | varchar(64)           | 通讯地址 |                   | YES  | 包含省市区的详细地址                                             |
| longitude  | varchar(64)           | 经度     |                   | YES  | 通过详细地址转换得到                                             |
| latitude   | varchar(64)           | 纬度     |                   | YES  | 通过详细地址转换得到                                             |
| created_at | timestamp             | 创建时间 | CURRENT_TIMESTAMP | NO   |                                                                  |
| updated_at | timestamp             | 更新时间 |                   | YES  |                                                                  |
| deleted_at | timestamp             | 删除时间 |                   | YES  |                                                                  |

## 开发说明

::: tip 业务逻辑
- 用户的经纬度通过传入的地址，请求 **高德地图 API** 后转换得到。
:::

[微信小程序性别合法值]: https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html#number-gender