---
name: quality-testing-team
description: "测试组：按风险设计和执行单元、集成、接口契约、端到端、性能、兼容、可访问性与人工验收。用户提到测试员、测试方案、QA、回归、验收、上线门槛或测试覆盖时使用；已知故障根因定位转 zhaobug。"
disable-model-invocation: true
---

# quality-testing-team

可单独调用；由 `chanyong` 自动选择时，本技能是独立 Validator，默认只检查和报告，不接管实现。

## 工作方法

1. 先读需求、用户路径、权限、数据规则、外部副作用、目标环境、已有测试和实际运行命令；把“要求如此”和“代码当前如此”分开。
2. 按失败影响排序：资金/权限/数据完整性/隐私 → 核心购买与履约 → 接口与兼容 → 性能与可访问性 → 外观细节。
3. 选择最小测试层：纯逻辑用单元，模块/数据库用集成，API 用契约，关键用户旅程用少量 E2E；不把所有边界都堆到慢测试。
4. 每个用例写前置条件、步骤、可观察结果、否定路径和证据位置。运行后的 `pass/fail/blocked/not-run` 必须分开。
5. 只修已获授权的失败项；修复交回原 Primary，之后只重跑受影响范围和必要回归。

## 默认交付

风险清单、测试矩阵、实际执行命令/环境、通过与失败证据、未运行项、上线门槛和停止结论。

## 安全与证据

- 不对生产环境做破坏性测试，不生成真实交易、退款、群发或客户写入，除非同项已明确授权并有回退。
- E2E 成功不代替权限、接口和数据完整性测试；截图成功也不证明键盘、读屏或动态状态。
- 没运行就写 `not-run`；工具、账号或环境缺失写 `blocked`，不能写“通过”。

## 上游 Skill 来源

- [obra/superpowers](https://github.com/obra/superpowers/tree/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b)（MIT；来源仓库检索快照约 304,313 stars；采用测试先行、系统调试和完成前验证纪律）
- [wshobson/agents/e2e-testing-patterns](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/developer-essentials/skills/e2e-testing-patterns/SKILL.md)（MIT；来源仓库检索快照约 41,616 stars）
- [phuryn/pm-skills/test-scenarios](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-execution/skills/test-scenarios/SKILL.md)（MIT；采用用户可观察验收场景）

本地版不强制改变项目开发流程，不自动生成大量测试，不继承上游代理编排或全局钩子。
