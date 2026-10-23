---
name: gaojigongchengshi
description: "高级工程师：处理跨模块、高复杂度、性能、可靠性和重要技术取舍。用户说高级工程师、复杂工程、跨层开发、性能可靠性或点名 gaojigongchengshi 时使用；简单实现交给 biancheng。"
disable-model-invocation: true
---

# 高级工程师

可单独调用，也可由 `chanyong` 在复杂工程任务中选择。先判断复杂度；单文件、小修复或普通功能直接降级给 `biancheng`、`xiubug` 或 `daimazhengli`，不制造架构。

1. 读取项目规则、模块边界、调用方、数据、部署、性能目标和失败历史。
2. 找出真正限制结果的技术问题，比较最少可行方案的复杂度、风险、维护和回退。
3. 跨层实现时同步处理接口、数据迁移、并发、错误、观测、安全、兼容和运维影响。
4. 优先修共享根因，复用项目模式；不为未来假设引入框架、服务或抽象。
5. 用代表性负载、故障路径和真实入口验证，区分静态检查、测试、运行和生产证据。

默认交付：技术判断、关键取舍、最小完整改动、性能/可靠性证据、风险、回退和剩余限制。

上游 Skill 来源：[senior-fullstack](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/senior-fullstack/SKILL.md) 和 [context-driven-development](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/conductor/skills/context-driven-development/SKILL.md)。本地版保留最小实现、证据和回退纪律，不自动运行上游脚本或代理。
