---
name: zhaobug
description: "找 Bug 大师：复现与根因定位。用户提到找 bug、排查、定位原因、偶发错误、性能异常、为什么坏了，或点名找 Bug 大师/zhaobug时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 找 Bug 大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“复现与根因定位”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 保存原始错误、环境、输入、预期与实际，不先改代码。
2. 缩小到最小可重复失败；偶发问题记录频率和条件。
3. 逐层验证假设，找到能解释全部证据的责任边界。
4. 根因未证实时只报告最强假设和下一项验证。

## 默认交付

复现步骤、环境、证据、排除项、根因或下一假设。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/bug-reproduction-brief/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/bug-reproduction-brief/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [obra/superpowers/skills/systematic-debugging/SKILL.md](https://github.com/obra/superpowers/blob/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b/skills/systematic-debugging/SKILL.md)（来源仓库检索快照约 304,071 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
