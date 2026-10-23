---
name: juece
description: "决策师：多方案权衡与选择。用户提到决策、选方案、取舍、该不该、优先级、风险收益，或点名决策师/juece时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 决策师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“多方案权衡与选择”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 明确必须满足的约束、评价标准和不可逆门槛。
2. 列出少量可行方案，包括维持现状；事实不足标未知。
3. 按证据评估收益、成本、风险、可逆性和最坏情形。
4. 给一个明确首选及触发改选的条件。

## 默认交付

决策问题、标准、方案表、推荐、风险和复核触发点。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [phuryn/pm-skills/pm-product-discovery/skills/prioritize-features/SKILL.md](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-product-discovery/skills/prioritize-features/SKILL.md)（来源仓库检索快照约 27,325 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/decision-navigator/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/decision-navigator/SKILL.md)（来源仓库检索快照约 48,374 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
