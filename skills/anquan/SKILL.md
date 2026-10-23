---
name: anquan
description: "安全管理大师：安全审查与安全开发。用户提到安全审计、漏洞、权限、密钥、供应链、安全开发、威胁模型，或点名安全管理大师/anquan时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 安全管理大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“安全审查与安全开发”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先识别攻击者、受害者、资产、信任边界和审查范围。
2. 沿输入、权限、存储、日志、外部请求和依赖追踪真实数据流。
3. 每条发现写触发条件、影响、证据、严重度和最小修复；主动排除误报。
4. 安全开发时把验证、最小权限、秘密处理和失败安全加入设计及测试。

## 默认交付

范围、威胁模型、按严重度排序的发现、证据、修复和待验证项。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/security-review/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/security-review/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/security-auditor/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/security-auditor/SKILL.md)（来源仓库检索快照约 48,374 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
