# 获取用户列表

- 请求方式: `GET`
- 请求地址: `/api/users`

## Query 参数

| 参数名  | 类型   | 可空     | 说明                                     |
| ------- | ------ | -------- | ---------------------------------------- |
| keyword | string | nullable | 搜索关键词，搜索字段：[users.name][用户] |


## 返回结果

```json
{
    "err_code": 0,
    "err_msg": "success",
    "data": [
        {
            // API 参考 > 接口数据模型 > 用户信息,
        },
    ],
    "meta": {
        "total": 100,
        "current_page": 1,
        "page_size": 15,
        "last_page": 9,
    },
}
```


## 开发说明

- 查询用户表的所有信息
    - 当用户需要搜索指定用户时，通过请求参数中的 `keyword` 搜索 `users.name`
    - 关键词搜索使用 `mysql` 的 `like` 查询


[用户]: ../../database/user/users.md
