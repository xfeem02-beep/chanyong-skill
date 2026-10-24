---
name: ecommerce-operations-team
description: "电商运营组合：把商品、库存、订单、履约、退换售后、客户体验和经营指标组织成可执行运营体系。用户提到店铺运营、运营方案、商品运营、库存周转、履约、售后、复购或经营复盘时使用；单纯推广获客转 growth-marketing-team。"
disable-model-invocation: true
---

# ecommerce-operations-team

可单独调用；由 `chanyong` 自动选择时，本技能只负责电商日常经营与运营闭环，不递归启动总控。

## 工作方法

1. 先确认平台、市场、目标客户、商品范围、履约方式、团队和当前经营阶段；读取已有商品、订单、库存、客服与财务口径，不把缺失值当 0。
2. 画清经营链路：选品/上架 → 定价与内容 → 库存 → 下单支付 → 履约 → 退换售后 → 复购。每个环节只保留一个负责人、核心指标和异常处理。
3. 用同一时间、币种、订单/商品/包裹口径建立最小指标树：流量、转化、客单、毛利、退款、缺货、履约时效、库存周转、复购与客服问题。未经核验的利润和成本保持 `null`。
4. 找出当前最大约束，给 30/60/90 天主计划、每周复盘节奏、停止条件和证据；不一次铺开所有渠道与自动化。

## 分工边界

- 商品身份、完整款号和变体证据交给 `product-information-research`；经营选品交给 `xuanpin`；到手成本与采购执行交给 `bijia` / `caigou`。
- 获客、SEO、广告、内容和转化实验交给 `growth-marketing-team`；本技能接回库存、履约、客服、复购和经营指标。
- 需要改系统才转 `jiagou` / `biancheng`；需要当前法律判断转 `commerce-compliance-team`。

## 默认交付

经营现状、瓶颈、指标树、30/60/90 天运营计划、负责人、每周复盘表、风险和待验证数据。

## 安全与证据

- 读取或分析不产生改价、上架、下架、发货、退款、采购、发布、花费或联系客户的权限。
- 平台报表和第三方数据先核对时间范围、币种、税费、退款归属和去重键；样本不冒充全量。
- 没有真实订单、成本和库存证据时只给方法与待填口径，不编造经营结果。

## 上游 Skill 来源

- [coreyhaines31/marketingskills/marketing-plan](https://github.com/coreyhaines31/marketingskills/blob/e85f3cbc2e4a79bf33b2a12e9bdd9087d414735b/skills/marketing-plan/SKILL.md)（MIT；来源仓库检索快照约 56,256 stars）
- [coreyhaines31/marketingskills/analytics](https://github.com/coreyhaines31/marketingskills/blob/e85f3cbc2e4a79bf33b2a12e9bdd9087d414735b/skills/analytics/SKILL.md)（MIT；采用决策指标、同窗率和数据核对方法）
- [phuryn/pm-skills/metrics-dashboard](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-product-discovery/skills/metrics-dashboard/SKILL.md)（MIT；来源仓库检索快照约 27,327 stars）

本地版只吸收通用运营、指标和复盘方法；不继承外部账号连接、自动发布、自动调价、预算写入、后台循环或付费服务。
