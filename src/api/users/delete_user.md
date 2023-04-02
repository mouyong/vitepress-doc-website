# 删除用户

- 请求方式: `DELETE`
- 请求地址: `/api/user/{userId}`

## Path 参数

| 参数名 | 类型    | 默认值 | 可空     | 说明                         |
| ------ | ------- | ------ | -------- | ---------------------------- |
| userId | integer |        | required | [`users.id`][用户表] 用户 ID |


## 返回结果

```json
{
    "err_code": 0,
    "err_msg": "success",
    "data": {
        "user_id": "user.id",
    }
}
```


## 开发说明

- 根据用户编号查找到用户信息
- 将用户表的 `删除时间 deleted_at` 设置为当前时间


[用户表]: ../../database/user/users
