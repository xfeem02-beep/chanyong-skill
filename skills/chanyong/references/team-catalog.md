# Team 选择目录

用户说“搜索 chanyong”“常用有哪些组合”“给我选 Team”“这个 Team 做什么”时读取。先展示 Team，不倾倒所有单 Skill；用户说“查看单 Skill”时再按能力组展示成员。

| Team | 中文说明 | 适合做什么 |
|---|---|---|
| `project-strategy-team` | 项目研究策划组合 | 市场/用户研究、产品策划、规划、拆解和决策 |
| `engineering-delivery-team` | 工程交付组合 | 架构、开发、接口、兼容、Bug、安全和测试验收 |
| `interface-design-team` | 界面设计组合 | 网站、后台、App、小程序和 Dashboard |
| `visual-design-team` | 视觉出图组合 | 海报、封面、品牌视觉、产品场景和系列素材 |
| `design-review-team` | 设计审查交付组合 | 设计挑刺、UX 文案、系统一致性、无障碍和交接 |
| `ecommerce-operations-team` | 电商运营组合 | 商品、库存、订单、履约、售后、复购和经营复盘 |
| `growth-marketing-team` | 推广增长组合 | 定位、推广、SEO/AI 搜索、内容、广告、转化和归因 |
| `quality-testing-team` | 测试验收组合 | 风险测试、回归、兼容、性能、可访问性和上线门槛 |
| `commerce-compliance-team` | 电商合规组合 | 消费者、隐私、宣传、支付、退款、跨境与平台规则 |

`deep-research-mode` 是可单独调用的深度研究 Skill，也会被 `project-strategy-team` 在复杂研究阶段按需使用；它不是第二个总控。

## 只有三种使用方式

### AUTO 全自动

用户只说目标。`chanyong` 自动选 Team 或单 Skill，并在执行前显示：

```text
模式：AUTO 全自动
本次选择：growth-marketing-team（推广增长组合）
负责：推广、SEO、内容、广告、转化与增长实验。
本次重点：SEO 与商品内容；未启用其他 Team。
```

### TEAM 指定组合

用户点名一个 `*-team`。保持该 Team 为主组合，只在它内部选必要方法；需要跨 Team 时先说明理由，用户说“不加”就跳过。

```text
模式：TEAM 指定组合
本次选择：engineering-delivery-team（工程交付组合）
负责：必要架构、开发/修复、安全与测试验收。
```

### SOLO 单独 Skill

用户说“只用 X”“X 单独处理”或 `--solo`。只运行该 Skill，不增加 Team、辅助或验收者；能力不足时说明限制。

```text
模式：SOLO 单独 Skill
本次选择：deep-research-mode（深度研究模式）
负责：多来源检索、冲突核验和带引用报告。
```

用户只是查看目录时不执行任务。用户没有指定时默认 AUTO，不要求先选。
