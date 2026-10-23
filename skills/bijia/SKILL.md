---
name: bijia
description: "商品价格比价大师：韩国采购到手成本比价。用户提到比价、最低价格、韩国采购、哪家便宜、到手价、运费税费比较，或点名商品价格比价大师/bijia时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 商品价格比价大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“韩国采购到手成本比价”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先用完整商品码、品牌、型号、颜色、尺码和数量确认同款；不能确认就分开列。
2. 保留来源时间、原币价格、币种、汇率口径、库存、卖家、运费、税费、支付费、境内外物流和数量门槛。
3. 计算到手总成本与单位成本；缺一项就把结果标为不完整，不能伪称最便宜。
4. 分别说明最低标价、最低到手价、最快和风险最低选项。

## 默认交付

同款证据、逐来源成本表、最低完整成本、缺失项和推荐条件。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/apify-ecommerce/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/apify-ecommerce/SKILL.md)（来源仓库检索快照约 48,374 stars）
- [phuryn/pm-skills/pm-product-strategy/skills/pricing-strategy/SKILL.md](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-product-strategy/skills/pricing-strategy/SKILL.md)（来源仓库检索快照约 27,325 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
