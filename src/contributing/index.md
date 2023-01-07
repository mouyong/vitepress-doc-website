# 贡献指南

你好！很高兴你有兴趣为 `文档站` 做贡献。

你的每一次提问，每一句答复，每一场批评，每一行代码，每一个插件，对我们都是无比珍贵。

欢迎你对我们的工作进行指导批评。

对此我们十分感谢，我们一定认真倾听考虑你的意见。

如遇重大问题期望进行反馈，欢迎你在[互动交流](../community/discuss.md)的渠道中与我们取得联系。

在提交您的贡献之前，请务必花点时间阅读以下介绍：

## 协作规范

| 指南 | 来源 |
| --- | --- |
| [12-factors](https://12factor.net/zh_cn/) | Adam Wiggins |
| [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/) | Conventional Commits |
| [语义化版本号](https://semver.org/lang/zh-CN/) | Gravatars |
| [中文文档编写指南](https://tangjie.me/copywriting-style-guide) | 唐杰 |
| [英文文档编写指南](https://fresns.cn/contributing/writing-guide.html) | Vue.js |

::: details 查看 Commit 类型介绍
- 日志的所有内容都使用 ASCII 字符，不要用中文或者 emoji，这样最大化兼容性，也便于程序处理。总体结构如下：
```
类型(可选的范畴): 简短描述

可选的详情

可选的注解
```
- 下面是一个完整的示例：
```
feat(auth): increase length of new API key

the length is increased from 24 to 32 for new API keys

close #12
```
| 类型 | 说明 |
| --- | --- |
| feat | feature - 所有实现新功能、新行为的 commit 都属这个类型 |
| fix | 修正缺陷的 commit |
| chore | 日常维护性的改动，例如 linter 的配置等 |
| test | 与测试有关的改动 |
| refactor | 不改变行为的对代码结构的改进 |
| style | 对代码风格的修正（仅限缩进、空行一类的简单改动，对结构有影响的用 refactor） |
| cosm | cosmetic - 不改变行为的对界面的纯视觉上的改动 |
| docs | 对文档的改进，包括对外文档和代码注释 |
| build | 和构建流程、持续集成等有关的改动 |
:::

## 编码风格

为了保持代码库的整洁性和一致性，务必请你一定要遵守相关语言的的编码风格。如果您对此有疑问，请阅读相关源代码。这使得我们可以专注在贡献的内容本身，而非代码风格上。请您尽量在贡献时模仿其他代码库使用的风格。

### PHP 后端

**1. PHP 编码规范**
- [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-coding-style-guide.md) 编码规范
- [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) 编码规范
- [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) 自动加载规范

**2. PHP 编码约定(参考来源: [Fresns](https://fresns.cn/contributing/#编码风格))**
- 命名空间应当是单数（例如：`PluginsWorld\Discussion`，而非 `PluginsWorld\Discussions`）
- 接口命名应当以 `Interface` 结尾（例如：`MailableInterface`）
- 抽象类命名应当以 `Abstract` 开头（例如：`AbstractModel`）
- Trait 命名应当以 `Trait` 结尾（例如：`ScopeVisibilityTrait`）
- 状态命名，有状态迁移关系使用 `state`，没有状态迁移关系使用 `status`
    - `state` 交通灯状态： red -> green -> yellow
    - `status` 付款结果： success / failed

**3. PHP 模型约定**
::: details 查看 Model 相关代码段顺序定义
```php
class XxxModel
{
    // const 常量定义区域
    // use Trait 定义区域
    // static 属性定义区域
    // 属性定义区域
    // static 父级 Model 函数定义区域
    // scope 函数定义区域
    // setXxxYyyAttribute 定义区域
    // getXxxYyyAttribute 定义区域
    // xxxYyy(): Attribute 定义区域
    // relations 关系定义区域
    // 自定义函数定义区域
    // 静态自定义函数定义区域
}
```
:::

**4. 数据库风格**
**表** 的命名规则如下：
* 使用复数形式（`languages`）
* 多个单词之间用下划线分隔（`session_tokens`）
* 对于关系表，请将两个表名用单数的形式连接起来，并按字母顺序排列。（例如：`discussion_user`）

**字段** 的命名应当根据其数据类型而定：
- DATETIME 或 TIMESTAMP：`{动词}_at`（例如：created_at，read_at）或 `{动词}_until`（例如：suspended_until）
- INT 用于计数：`{名词}_count`（例如：comment_count，word_count）
- 外键：`{动词}_{实体对象}_id`（例如：hidden_user_id）
    - 动词可以使用具有相同意义的主键等替代（例如：帖子作者可以是 `user_id`)
- 布尔值：`is_{形容词}`（例如：is_locked）
- 标志性时间值必须采用 TIMESTAMP 类型字段，确保支持时区请求（例如：创建时间、更新时间、操作行为时间）。
- 颜色值字段统一存储为 6 位十六进制颜色值。

### 前端

**1. 前端编码规范**  
*待完善*

**2. 前端性能优化之雅虎35条军规**
- 查看[原文](https://developer.yahoo.com/performance/rules.html)
- 查看[掘金文章](https://juejin.cn/post/6844903657318645767)

![前端性能优化之雅虎35条军规](/frontend_performance_optimization.png)

## 贡献者许可协议

通过向 文档站 贡献你的代码，你授予 文档站 团队你的所有相关知识产权（包括版权、专利和任何其他权利）的非独占的、不可撤销的、全球性的、免版税的、可再许可且可转让的许可，以便我们在任何许可条款下使用、复制、准备衍生作品、分发、公开执行和展示此等贡献，包括但不限于以下条款：(a) 开放源码许可证，如 Apache-2.0 许可证；以及 (b) 二进制、专有或商业许可证。除本协议授权的许可外，你保留与此等贡献有关的所有权利、所有权和利益。

你确认，你能够授予我们这些权利。你声明，你在法律上有权授予上述许可。如果你的雇主对你所创造的知识产权拥有权利，你声明你已获得许可代表该雇主做出贡献，或者你的雇主已放弃了此等贡献的以上权利。

你声明，此等贡献是你的原创作品，而且据你所知，没有其他人主张或有权主张此等贡献有关的任何发明或专利的任何权利。你还声明，无论是通过签订协议还是其他方式，你都没有任何与本许可条款相冲突的法律义务。

文档站 团队确认，除非本协议中有明确的描述，你提供的任何贡献都是以「现状」为基础的，不附带任何形式的无论明示或暗示的保证或条件，包括但不限于任何关于所有权、非侵权、适销性或特定用途的适用性的保证或条件。

```
/*
 * PluginsWorld (https://github.com/mouyong/vitepress-doc-website)
 * Copyright (C) 2021-Present mouyong
 * Released under the MIT License.
 */
```
