---
name: biancheng
description: "写代码专业大师：最小完整代码实现。用户提到写代码、实现功能、开发、编码、端到端功能，或点名写代码专业大师/biancheng时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 写代码专业大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“最小完整代码实现”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 读取项目规则、调用方、现有模式、测试和数据边界。
2. 先定最小端到端结果，复用项目代码和平台能力。
3. 实现调用方、错误处理、配置、必要测试和文档中受影响的部分。
4. 验证真实入口，达到验收即停止。

## 默认交付

实现结果、改动范围、验证、限制和风险。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [obra/superpowers/skills/executing-plans/SKILL.md](https://github.com/obra/superpowers/blob/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b/skills/executing-plans/SKILL.md)（来源仓库检索快照约 304,071 stars）
- [wshobson/agents/plugins/conductor/skills/context-driven-development/SKILL.md](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/conductor/skills/context-driven-development/SKILL.md)（来源仓库检索快照约 41,600 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
