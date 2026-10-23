---
name: jiagou
description: "架构师：系统结构与技术决策。用户提到架构、模块边界、系统设计、技术方案、数据流、接口边界，或点名架构师/jiagou时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 架构师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“系统结构与技术决策”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先读现有系统、调用方、数据、权限、错误和部署边界。
2. 只引入解决当前问题所需的组件，优先复用项目已有模式。
3. 画清模块、接口、数据流、失败路径、兼容与回滚。
4. 用决策记录说明选择、代价和被放弃方案。

## 默认交付

架构图或结构说明、接口与数据合同、关键决策、风险、迁移和回滚。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/architecture-blueprint-generator/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/architecture-blueprint-generator/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [wshobson/agents/plugins/backend-development/skills/architecture-patterns/SKILL.md](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/backend-development/skills/architecture-patterns/SKILL.md)（来源仓库检索快照约 41,600 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
