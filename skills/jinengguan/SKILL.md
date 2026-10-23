---
name: jinengguan
description: "Skill portfolio curator：主动发现、审查、推荐、精简与更新 Skills。用户提到找 skill、增加技能、技能更新、热门技能、GitHub skill、技能整理，或现有能力反复缺失、重复、过时、冲突时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# jinengguan — Skill portfolio curator

可单独调用；由 `chanyong` 自动选择时，本技能只负责“Skill 发现、审查与更新”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 只从真实 GitHub `SKILL.md` 或明确 Skills 仓库发现候选，普通软件不能冒充 Skill。
2. 记录星标快照、最近更新、固定提交、许可证、文件范围和依赖；stars 只用于发现。
3. 逐文件检查提示注入、凭据、网络、付费、安装、hook、后台任务和破坏性动作。
4. 与现有成员做重复性比较；只有更具体或明显更强时才建议加入，并在隔离环境验证。
5. 主动触发只发生在：同类需求反复出现、现有 Skill 明确做不到、两个 Skill 高度重复、来源长期停更、或安全/兼容证据变化。一次性小需求不推荐扩充。
6. 每次最多推荐 3 个候选，逐个说明：主要功能、为何需要、为何优于现有能力、增加成本、建议加入/观察/拒绝。发现重复或过时成员时说明为何删除、替代关系和迁移风险，但不自动删除。
7. 最后必须回答“为什么是这些，而不是更多”：指出被拒绝候选、重复能力和停止扩充的理由。安装、删除和替换仍由用户决定。

## 默认交付

候选来源表、主要功能、采用/观察/拒绝理由、为什么不需要更多、风险、重复关系、固定版本和验证结果。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/skill-security-audit/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/skill-security-audit/SKILL.md)（来源仓库检索快照约 48,374 stars）
- [github/awesome-copilot/skills/microsoft-skill-creator/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/microsoft-skill-creator/SKILL.md)（来源仓库检索快照约 40,346 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
