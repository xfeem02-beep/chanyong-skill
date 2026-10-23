---
name: diannao
description: "电脑管理大师：电脑健康检查与安全维护。用户提到电脑管理、电脑变慢、磁盘、启动项、系统服务、软件整理、Windows、macOS、Linux，或点名电脑管理大师/diannao时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 电脑管理大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“电脑健康检查与安全维护”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先识别系统、设备、当前症状和不能中断的工作。
2. 先做只读盘点：存储、进程、启动项、更新、日志、备份状态和异常。
3. 按影响与可逆性给建议；一次只处理一个可验证问题。
4. 删除、卸载、升级、改权限、系统配置或后台服务前必须有当前动作的明确授权。

## 默认交付

健康概览、证据、优先问题、安全处理步骤、验证与回退。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/powershell-windows/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/powershell-windows/SKILL.md)（来源仓库检索快照约 48,374 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/linux-administration/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/linux-administration/SKILL.md)（来源仓库检索快照约 48,374 stars）
- [sickn33/agentic-awesome-skills/plugins/agentic-awesome-skills-claude/skills/os-scripting/SKILL.md](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/os-scripting/SKILL.md)（来源仓库检索快照约 48,374 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
