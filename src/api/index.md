# 目录

[开发必读：基础资料](../guide/index)

## 患者

| 请求方式 | 接口路径                                        | 描述                                              |
| -------- | ----------------------------------------------- | ------------------------------------------------- |
| `GET`    | /api/patients                                   | <a class="q" title="待开发">获取患者列表</a>      |
| `POST`   | /api/patients                                   | <a class="c" title="待确认">新增患者</a>          |
| `PUT`    | /api/patients/`{patientId}`                     | <a class="c2" title="待二次确认">更新患者资料</a> |
| `POST`   | /api/patients/`patientId`/families              | [【WIP】添加患者亲属信息]()    |
| `GET`    | /api/patients/`patientId`/families              | 查看患者亲属列表                                  |
| `GET`    | /api/patients/`patientId`/families/`{familyId}` | 查看患者亲属信息                                  |
