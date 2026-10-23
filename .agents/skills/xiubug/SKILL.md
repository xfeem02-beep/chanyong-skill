---
name: xiubug
description: "修 Bug 大师：最小修复与回归验证。用户提到修 bug、修复错误、解决故障、补丁、回归，或点名修 Bug 大师/xiubug时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 修 Bug 大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“最小修复与回归验证”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先取得已验证复现或根因；没有就先调用找 Bug 大师。
2. 在最窄责任层修改，保留原错误处理、数据和兼容行为。
3. 增加一个能在修复前失败、修复后通过的针对性检查。
4. 只跑足以证明修复的回归；发现新范围再重新评估。

## 默认交付

根因、最小改动、验证证据、风险和回退。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [obra/superpowers/skills/test-driven-development/SKILL.md](https://github.com/obra/superpowers/blob/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b/skills/test-driven-development/SKILL.md)（来源仓库检索快照约 304,071 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/agent-qa-debug-fix/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/agent-qa-debug-fix/SKILL.md)（来源仓库检索快照约 48,374 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
