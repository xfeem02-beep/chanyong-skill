---
name: caigou
description: "采购大师：韩国采购执行方案与控制。用户提到采购、供应商、询价、采购单、怎么买最便宜、交期、到货、三方匹配，或点名采购大师/caigou时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 采购大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“韩国采购执行方案与控制”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 从选品和比价结果接收精确商品/变体、数量和完整成本，不重复猜商品。
2. 比较供应商真实性、库存、最小起订、阶梯价、交期、付款、退换和物流路线。
3. 形成询价→批准→下单→收货→账单核对流程，记录负责人和证据。
4. 登录、验证码、下单、付款、对外询价和正式承诺保持人工确认。

## 默认交付

采购建议、供应商与路线比较、数量、成本、交期、风险、审批和核对清单。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/odoo-purchase-workflow/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/odoo-purchase-workflow/SKILL.md)（来源仓库检索快照约 48,374 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/vendor-contractor-management/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/vendor-contractor-management/SKILL.md)（来源仓库检索快照约 48,374 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
