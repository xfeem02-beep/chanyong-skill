---
name: growth-marketing-team
description: "推广组：产品定位、市场推广、SEO/AI 搜索、内容、社媒、广告、转化、留存、归因和增长实验。用户提到推广、获客、营销、增长、搜索排名、SEO、GTM、活动传播或渠道选择时使用；店铺履约与库存运营转 ecommerce-operations-team。"
disable-model-invocation: true
---

# growth-marketing-team

可单独调用；由 `chanyong` 自动选择时，本技能只负责推广与增长阶段，不递归启动总控，也不把所有渠道同时启动。

## 最短路线

1. 先读产品、目标市场、客户原话、现有渠道、预算、历史结果、品牌限制与可用数据；缺少时明确 `MISSING`，不猜基线。
2. 判断当前瓶颈属于定位、获客、激活、留存、推荐或收入，只选一个主阶段和一个主渠道。
3. 按任务选一条主线：定位/GTM、SEO 与 AI 搜索、内容/社媒、广告、落地页与 CRO、邮件/复购、分析/归因或增长循环。
4. 每个建议写目标人群、机制、素材、渠道、预算上限、指标、观察窗、停止条件和下一步；先小实验，再按证据扩大。
5. 网站与公开搜索任务先检查真实页面、抓取/索引条件和官方平台证据；静态抓取看不到的动态 Schema 不冒充“没有”。

## 组合边界

- 需要市场全景或竞品证据先用 `yanjiu` / `deep-research-mode`；需要视觉素材时只补 `visual-design-team`。
- 日常商品、库存、履约、退款和客服经营交给 `ecommerce-operations-team`。
- 广告、邮件、社媒、价格或页面建议默认只出策略/草稿；改预算、投放、发布、群发、采集个人数据必须沿用明确授权。
- 涉及宣传声明、Cookie、隐私、跨境销售或平台规则时补 `commerce-compliance-team`。

## 默认交付

现状与瓶颈、首选增长路线、渠道与内容计划、实验表、指标/归因口径、预算边界、停止条件和待验证项。

## 上游 Skill 来源

- [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills/tree/e85f3cbc2e4a79bf33b2a12e9bdd9087d414735b/skills)（MIT；来源仓库检索快照约 56,256 stars；采用 product-marketing、marketing-plan、seo-audit、analytics、ads、CRO 与 growth-loop 方法）
- [phuryn/pm-skills/gtm-strategy](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-go-to-market/skills/gtm-strategy/SKILL.md)（MIT；来源仓库检索快照约 27,327 stars）

本地版只吸收通用增长方法并加上证据、花费和外发边界；不继承上游 MCP、账号访问、自动发布、自动调预算、后台循环或客户目录约定。
