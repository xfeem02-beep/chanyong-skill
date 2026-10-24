# 电商经营家族：四套主组合

只在任务涉及店铺经营、推广增长、正式测试或电商合规时读取。一次只选一个 Primary；另一个组合只有补足明确缺口时才作为 Auxiliary 或 Validator。

| 用户真正要的结果 | 主 Skill | 可选补充 | 停止条件 |
|---|---|---|---|
| 商品、库存、订单、履约、售后、复购和经营复盘 | `ecommerce-operations-team` | 商品身份/选品/比价/采购只补对应成员 | 指标口径、瓶颈、负责人、30/60/90 天动作与复盘证据明确 |
| 推广、获客、GTM、SEO/AI 搜索、内容、广告、CRO 和增长实验 | `growth-marketing-team` | 深度研究、视觉或合规最多补一个 | 主阶段、主渠道、预算边界、指标、观察窗和停止条件明确 |
| 测试方案、回归、QA、上线验收 | `quality-testing-team` | 安全或设计审查只在相关风险命中时补一个 | 通过/失败/阻塞/未运行分开，并有可复核证据 |
| 消费者、隐私、Cookie、宣传、支付、退款、跨境或平台规则 | `commerce-compliance-team` | `anquan` 只补技术攻击面 | 法域、官方当前来源、差距、负责人和专业复核项明确 |

## 自动判断例子

- “研究韩国市场，给这家店做运营方案” → `deep-research-mode` 先补市场证据，`ecommerce-operations-team` 作为 Primary 产出经营计划。
- “这款商品怎么推广，搜索也要做” → `growth-marketing-team`；只有需要真实视觉素材才补 `visual-design-team`。
- “整个购买到退款流程上线前测一遍” → `quality-testing-team`；发现明确缺陷后交回 `zhaobug` / `xiubug`。
- “跨境页面、隐私和促销说法有没有风险” → `commerce-compliance-team`；用目标法域官方来源实时核验。

## 三种使用方式

- `auto`：直接说目标，`chanyong` 自动选最短完整路线并显示真实 Skill 名。
- `solo`：说“只用 growth-marketing-team，给我推广方案”，只运行该成员。
- `hybrid`：说“先推荐组合”，先显示主 Skill、必要补充和为什么，用户可跳过其中一项。

推广、发布、调价、改预算、发消息、采购、退款、生产写入和法律提交仍须沿用对应明确授权；自动路由不产生这些权限。
