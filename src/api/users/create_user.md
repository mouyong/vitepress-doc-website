# 新增用户

- 请求方式: `POST`
- 请求地址: `/api/users`

## Body 参数

| 参数名            | 类型    | 默认值 | 可空     | 说明                                                                 |
| ----------------- | ------- | ------ | -------- | -------------------------------------------------------------------- |
| name              | string  |        | required | 用户姓名                                                             |
| gender            | integer | 0      | required | 用户性别                                                             |
| mobile            | string  |        | required | 用户手机号                                                           |
| address           | string  |        | nullable | 用户居住地址，完整的省市区及详细地址，如：广东省深圳市宝安区 xx 花园 |
| highest_education | integer |        | nullable | <a class="q">学历枚举值</a>                                          |
| nation            | integer |        | nullable | <a class="q">名族枚举值枚举值：omics-h5 中整理出来</a>               |
| birthday          | string  |        | nullable | 用户生日，格式：2022-02-02 02:02:02                                  |
| native_place      | string  |        | nullable | 用户籍贯，身份证的所属地，如广东、北京                               |


## 返回结果

```json
{
    "err_code": 0,
    "err_msg": "success",
    "data": {
        "user_id": "users.id",
    }
}
```


## 开发说明

- 将提交的资料保存到 `users` 表
- 保存成功 `users` 信息后，再创建用户附加资料
    - 用户附加资料表的 `user_id` 关联 `users.id`
- 返回数据只返回关键信息，无关干扰信息不返回给前端


[用户]: ../database/patient/patients.md
