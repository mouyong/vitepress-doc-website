# 全局接口响应

```json
{
    "err_code": 0,
    "err_msg": "success",
    "data": null, // data: {}、data: []、data: null
    "meta": { // 有分页数据时会返回 meta 信息
        "total": 100,
        "current_page": 1,
        "page_size": 15, // 全局分页默认为 `15` 条/页
        "last_page": 9,
    },
}
```