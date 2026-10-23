---
name: jianrong
description: "兼容大师：旧系统接入新能力与迁移。用户提到兼容、老系统、新旧对接、迁移、升级、API 破坏、双写、回滚，或点名兼容大师/jianrong时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 兼容大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“旧系统接入新能力与迁移”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 盘点旧调用方、版本、数据格式、错误语义和不能中断的路径。
2. 设计兼容层或分阶段迁移，避免一次切换；旧数据保持可读。
3. 写清版本协商、弃用窗口、转换、幂等、回滚和观测。
4. 同时测试旧客户端与新客户端，未验证的环境标明。

## 默认交付

兼容矩阵、迁移阶段、适配点、验证、回滚和弃用条件。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/api-breaking-change-detector/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/api-breaking-change-detector/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [wshobson/agents/plugins/framework-migration/skills/dependency-upgrade/SKILL.md](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/framework-migration/skills/dependency-upgrade/SKILL.md)（来源仓库检索快照约 41,600 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
