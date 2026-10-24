---
name: project-strategy-team
description: "策划组：把市场/用户研究、问题定义、产品策划、路线规划、任务拆解和方案决策组织成一条可执行路线。用户要从研究到策划、项目方向、商业方案、产品规划或整体路线时使用；只查单一事实转 yanjiu。"
disable-model-invocation: true
---

# project-strategy-team

这是研究、策划与规划的组合入口。可单独指定；由 `chanyong` 选择时，它作为一个 Team 持有最终方案，不把内部成员全部启动。

## 内部路线

1. 先明确要支持的决定、目标用户、范围、时间、约束和成功标准。
2. 缺少关键事实时选 `yanjiu`；多来源市场全景、尽调或系统比较才选 `deep-research-mode`。
3. 用 `cehua` 定义产品/活动主方案；用 `guihua` 排关键路径与里程碑；复杂目标才用 `chaijie` 拆工作包。
4. 有多个真实方案时用 `juece` 给首选和改选条件；需要反方压力测试时才补 `devils-advocate`。
5. 最终只交付一个主方向、证据、计划、负责人、风险和下一步验证。

## 默认显示

```text
TEAM｜策划组｜project-strategy-team
研究、策划、规划、拆解；本次重点：<实际命中的部分>。
```

研究和方案不自动授权开发、采购、发布、投放或生产写入。没有一手证据时标记假设和待验证项。

## 方法来源

- [phuryn/pm-skills](https://github.com/phuryn/pm-skills/tree/07b34f64ee828df08953f505b7f747aef85ae7c6)（MIT；产品战略、市场研究、GTM、规划与测试场景）
- [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills/tree/e85f3cbc2e4a79bf33b2a12e9bdd9087d414735b/skills)（MIT；市场、定位与增长证据方法）

本地版只组合已安装成员，不继承外部账号、自动发布、后台循环或代理编排。
