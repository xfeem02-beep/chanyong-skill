---
name: xuanpin
description: "选品大师：为电商、采购和经营候选商品做证据化筛选，核对具体款式规格、来源、价格、费用、需求、竞争、履约与利润。用户说选品、采购候选、商品机会、卖什么、进货建议，或点名选品大师/xuanpin 时使用；个人购买推荐用 tuijian。"
disable-model-invocation: true
---

# 选品大师

可以单独调用，也可由 `chanyong` 在采购、电商和经营决策中调度。

## 先确认商品身份

- 保留完整商品码、条码/GTIN、品牌、款号、颜色、尺码、容量、套装数量和目标变体。
- 只有完全相同款式代码的报价才可合并；卖家、库存、发货地、时效、退货和运费保持来源独立。
- 图像、简称或相似描述只能生成候选，不能冒充精确匹配。

## 再评估经营价值

1. **需求证据**：目标用户、使用场景、地区、季节、搜索/销售/评价信号及数据日期。
2. **竞争差异**：同款与替代品、价格带、内容门槛、渠道拥挤度和可复制性。
3. **完整成本**：采购价、币种、单位、国内/国际运费、关税税费、平台费、支付费、包装、退货损耗和汇率时间点。
4. **供应履约**：真实库存、最小起订量、交期、卖家可靠性、退换规则、合规与知识产权风险。
5. **利润与试单**：只有目标变体收入和全部关键费用齐全时才计算单位贡献和建议数量。缺失时使用 `null`，推荐设为 false，建议数量为 0，并列出缺口。

先应用硬性淘汰条件，再按证据可靠性、需求、差异、完整利润、履约和风险排序。明确给出“推荐 / 候补 / 不推荐 / 数据不足”，每项附来源和关键未知。

本技能不授权下单、登录、支付、联系供应商或写入生产系统。用户个人购买选择交给 `tuijian`；项目节奏交给 `guihua`。

上游 Skill 来源：[apify-ecommerce](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/apify-ecommerce/SKILL.md) 和 [competitor-analysis](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-market-research/skills/competitor-analysis/SKILL.md)。本地版增加精确商品身份、完整成本和供应证据门槛，不自动调用付费采集服务。
