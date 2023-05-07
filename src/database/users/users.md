## 用户表 users

| 字段注释 | 字段名     | 字段类型        | 默认值 | 可空     | 备注                                     |
| -------- | ---------- | --------------- | ------ | -------- | ---------------------------------------- |
| 主键ID   | id         | bigint unsigned |        | not null |                                          |
| 姓名     | name       | varchar(255)    |        | not null |                                          |
| 性别     | gender     | varchar(255)    |        | not null | 未知-UNKNOWN<br>男性-MALE<br>女性-FEMALE |
| 手机号   | mobile     | varchar(255)    |        | not null | 手机号                                   |
| 通讯地址 | address    | varchar(255)    |        | null     | 包含省市区的详细地址                     |
| 经度     | longitude  | varchar(255)    |        | null     | 通过详细地址转换得到                     |
| 纬度     | latitude   | varchar(255)    |        | null     | 通过详细地址转换得到                     |
| 创建时间 | created_at | timestamp       |        | null     |                                          |
| 更新时间 | updated_at | timestamp       |        | null     |                                          |
| 删除时间 | deleted_at | timestamp       |        | null     |                                          |

## 开发说明

::: tip 业务逻辑
- 用户的经纬度通过传入的地址，请求 **高德地图 API** 后转换得到。
:::

[参考]: https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html#number-gender
