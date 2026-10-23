---
name: tishici
description: "提示词大师：提示词设计与评测。用户提到提示词、系统提示、模型行为、分类、识别、生成、RAG、prompt，或点名提示词大师/tishici时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 提示词大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“提示词设计与评测”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先定义输入、期望输出、拒绝条件、工具边界和失败样本。
2. 从最短提示开始，只加入能通过评测证明有用的约束和示例。
3. 为关键边界建立小型样例集，比较准确性、一致性和成本。
4. 不要求暴露隐藏思维；使用可核查的结果和简短依据。

## 默认交付

可复用提示词、变量说明、测试样例、已知失败和迭代建议。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/prompt-optimizer/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/prompt-optimizer/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/prompt-engineering/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/prompt-engineering/SKILL.md)（来源仓库检索快照约 48,374 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
