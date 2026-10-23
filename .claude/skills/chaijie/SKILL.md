---
name: chaijie
description: "拆解师：目标与工作拆解。用户提到拆解、分步骤、任务分解、工作包、依赖、验收条件，或点名拆解师/chaijie时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 拆解师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“目标与工作拆解”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先定义最终可观察结果和边界。
2. 按独立、可交付、可验证拆成最少工作包。
3. 标出依赖、关键路径、负责人和接口；能并行才并行。
4. 每项写完成证据和停止条件，再交给规划大师排期。

## 默认交付

工作分解、依赖图、关键路径、验收条件和下一步。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/breakdown-plan/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/breakdown-plan/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [obra/superpowers/skills/writing-plans/SKILL.md](https://github.com/obra/superpowers/blob/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b/skills/writing-plans/SKILL.md)（来源仓库检索快照约 304,071 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
