# Skill 大家庭安装与成员规则

`chanyong` 是唯一自动总控，但不是唯一可调用的 Skill。安装包中的每个一级目录都是独立成员：

```text
skills/
├── chanyong/    常用：唯一自动总控
├── project-strategy-team/    策划组：研究、策划、规划、拆解
├── engineering-delivery-team/    工程组：架构、开发、修复、验收
├── interface-design-team/    界面组：网站、后台、App 界面
├── visual-design-team/    出图组：海报、封面、品牌素材
├── design-review-team/    审查组：设计挑刺、统一和交接
├── design-taste-frontend/    Taste 设计导演：网页与应用审美方向
├── dongwo/    懂我：个人偏好、跨 Agent/项目共享记忆与指定文档目录
├── chuangyi/    创意师：创意产生与筛选
├── tuijian/    推荐师：个性化推荐与比较
├── mishu/    秘书：待办日程会议与跟进
├── product-information-research/    商品信息查询：精确商品身份与多来源资料核验
├── xuanpin/    选品大师：经营选品与采购候选
├── guihua/    规划大师：目标路线图与计划
├── beifen/    备份大师：加密备份与恢复验证
├── yanjiu/    研究大师：证据调研与事实核查
├── deep-research-mode/    深度研究模式：多来源检索、冲突核验与带引用报告
├── solution-finder/    解决方案师：卡点分析、首选方案与最小验证
├── cehua/    策划师：产品与活动策划
├── jiagou/    架构师：系统结构与技术决策
├── tishici/    提示词大师：提示词设计与评测
├── chaijie/    拆解师：目标与工作拆解
├── juece/    决策师：多方案权衡与选择
├── fupan/    复盘师：结果复盘与改进
├── diannao/    电脑管理大师：电脑健康检查与安全维护
├── zhishi/    知识管家：知识整理与检索
├── jinengguan/    技能馆长：Skill 发现、审查与更新
├── anquan/    安全管理大师：安全审查与安全开发
├── devils-advocate/    挑刺儿高手：反例、漏洞、隐藏假设与最坏情况
├── zhaobug/    找 Bug 大师：复现与根因定位
├── xiubug/    修 Bug 大师：最小修复与回归验证
├── biancheng/    写代码专业大师：最小完整代码实现
├── daimazhengli/    代码整理大师：保持行为的重构
├── jianrong/    兼容大师：旧系统接入新能力与迁移
├── api/    API 大师：API 设计、接入与版本治理
├── bijia/    商品价格比价大师：韩国采购到手成本比价
├── caigou/    采购大师：韩国采购执行方案与控制
├── ecommerce-operations-team/    运营组：商品、库存、订单、售后
├── growth-marketing-team/    推广组：SEO、内容、广告、增长
├── quality-testing-team/    测试组：回归、兼容和上线验收
├── commerce-compliance-team/    合规组：隐私、宣传、支付、跨境
└── gaojigongchengshi/    高级工程师：复杂跨模块工程与可靠性
```

## 分组与加载

- **总控**：`chanyong`（常用）
- **个人与知识**：`dongwo`（懂我）、`tuijian`（推荐师）、`mishu`（秘书）、`fupan`（复盘师）、`zhishi`（知识管家）
- **研究与策略**：`project-strategy-team`（策划组）、`chuangyi`（创意师）、`guihua`（规划大师）、`yanjiu`（研究大师）、`deep-research-mode`（深度研究模式）、`solution-finder`（解决方案师）、`cehua`（策划师）、`chaijie`（拆解师）、`juece`（决策师）
- **选品与采购**：`product-information-research`（商品信息查询）、`xuanpin`（选品大师）、`bijia`（商品价格比价大师）、`caigou`（采购大师）
- **运营与增长**：`ecommerce-operations-team`（运营组）、`growth-marketing-team`（推广组）
- **工程与接口**：`engineering-delivery-team`（工程组）、`jiagou`（架构师）、`tishici`（提示词大师）、`biancheng`（写代码专业大师）、`jianrong`（兼容大师）、`api`（API 大师）、`gaojigongchengshi`（高级工程师）
- **质量与安全**：`quality-testing-team`（测试组）、`commerce-compliance-team`（合规组）、`anquan`（安全管理大师）、`devils-advocate`（挑刺儿高手）、`zhaobug`（找 Bug 大师）、`xiubug`（修 Bug 大师）、`daimazhengli`（代码整理大师）
- **设计与视觉**：`interface-design-team`（界面组）、`visual-design-team`（出图组）、`design-review-team`（审查组）、`design-taste-frontend`（Taste 设计导演）
- **电脑与维护**：`beifen`（备份大师）、`diannao`（电脑管理大师）、`jinengguan`（技能馆长）

宿主启动时通常只登记 Skill 的名称与短说明，正文按需读取。Codex 侧专业成员设为 `allow_implicit_invocation: false`，Claude Code 侧设为 `disable-model-invocation: true`；因此自动路由只交给 `chanyong`，专业成员仍可由用户点名直接调用。其他 Agent 是否完全遵守这些标记取决于其 Skill 实现，安装器不作虚假保证。

## 新成员必须满足

1. 放在 `skills/<skill-name>/`，含自己的 `SKILL.md` 和必要资源。
2. 可被用户按名称单独调用，完成自己的窄任务，不递归启动 chanyong。
3. 默认由 chanyong 自动选择时，专业成员不同时争抢全局隐式触发；需要时由 chanyong 读取其说明。
4. 在 [capability-family.md](capability-family.md) 登记触发场景、主职责、补充职责、停止条件和冲突关系。
5. 保留来源、固定提交、许可证和本地适配说明；来源不明或许可证不允许分发的内容不打包，只登记为可选外部能力。
6. 不因加入大家庭自动获得发布、生产写入、付费、登录、外发、多代理或后台运行权限。
7. 一条安装命令必须同时验证当前用户级和项目级安装；支持的 Agent 至少检查 Codex、Claude、Grok，Windows 同时检查 PowerShell 与 CMD。
8. 私人记忆、客户资料、备份内容和账号数据永不进入公开安装包；公开仓库只放方法、脚本和空结构。
9. 同一台电脑的 Agent 和项目共用用户级记忆位置；多台电脑需要各自配置同一个私人同步目录。GitHub 上传必须明确触发并验证为私人仓库，不后台同步。

## 自动与单独调用

- `AUTO`：用户只描述任务，chanyong 根据 [capability-family.md](capability-family.md) 选择最具体 Team 或成员，并说明名称、职责和本次重点。
- `TEAM`：用户明确点名一个 `*-team`，保持该 Team 为主组合，只在 Team 内按需工作。
- `SOLO`：用户说“只用 X”“X 单独处理”或 `--solo`，只使用该 Skill，不静默增加其他成员。
- 用户说“常用有哪些组合”时读取 [team-catalog.md](team-catalog.md) 展示 Team，不执行任务。
- 用户点名 chanyong/常用：由总控选择最短完整路线。
- 一个阶段只允许一个主成员；辅助成员不得重新决定已经锁定的范围、架构或视觉方向。

安装器始终读取整个 `skills/` 目录，因此以后合规加入的新成员会随下一版安装包一起安装。已经安装的客户仍需运行更新命令取得新版本；GitHub 不能远程强制覆盖离线或受限设备。
