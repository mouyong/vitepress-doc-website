# 全局请求头

| Header        | 值                | 说明                                                                  |
| ------------- | ----------------- | --------------------------------------------------------------------- |
| Authorization | Bearer `${token}` | 登录 token，用户登录后才能请求的接口，需要在 header 中携带 token 信息 |
| Accept        | application/json  | 接收的响应数据类型                                                    |
| Content-Type  | application/json  | 数据请求类型                                                          |