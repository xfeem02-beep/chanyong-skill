---
name: commerce-compliance-team
description: "电商合规组合：核查消费者权益、隐私与 Cookie、营销声明、支付数据、退款退货、跨境销售和平台规则。用户提到电商法律、合规、隐私政策、广告声明、支付合规、跨境规则或上线合规清单时使用；普通代码安全转 anquan。"
disable-model-invocation: true
---

# commerce-compliance-team

可单独调用；由 `chanyong` 自动选择时，本技能只做合规研究、差距分析和实施清单，不冒充律师或监管批准。

## 工作方法

1. 先确定经营主体、销售地、客户所在地、平台、商品类别、支付/物流/营销渠道和数据流；法域未知时不写确定结论。
2. 按任务只检查命中面：消费者告知与退换、价格/促销与广告声明、隐私/Cookie/营销同意、支付数据、未成年人、跨境税关/产品限制、平台条款。
3. 法律、监管和平台规则具有时效性：每次从适用法域的官方法规、监管机构、支付标准或平台官方文档核验生效日期；GitHub Skill 只提供检查框架，不能作为法律依据。
4. 输出“要求 → 当前证据 → 差距 → 负责人 → 截止/上线门槛”，明确事实、解释、风险和需要律师确认的条款。
5. 涉及支付数据时优先缩小持卡人数据范围并使用支付服务商令牌；不得在日志、Skill、提示词或报告中暴露密钥、完整卡号、CVV 或客户原始资料。

## 默认交付

适用范围、官方来源与日期、合规矩阵、高风险差距、最小整改、需律师/会计/平台确认项和上线门槛。

## 边界

- 这是研究和工程合规辅助，不构成法律意见；正式条款、跨境税务和监管申报由对应法域专业人士确认。
- 审查不授权修改政策、发布声明、接受条款、提交监管材料、处理真实支付或联系客户。
- `anquan` 负责漏洞与攻击面；本技能负责规则适用、记录和业务控制，两者需要时一主一辅，不能互相代替。

## 上游 Skill 来源

- [wshobson/agents/gdpr-data-handling](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/hr-legal-compliance/skills/gdpr-data-handling/SKILL.md)（MIT；来源仓库检索快照约 41,616 stars）
- [wshobson/agents/pci-compliance](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/payment-processing/skills/pci-compliance/SKILL.md)（MIT；采用支付数据最小化与验证框架）
- [phuryn/pm-skills/privacy-policy](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-toolkit/skills/privacy-policy/SKILL.md)（MIT；采用数据清单、法域和专业复核边界）

本地版不复制固定法律结论；执行时必须重新查询官方当前来源，不继承外部凭据、自动提交或平台写入。
