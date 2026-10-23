---
name: devils-advocate
description: "挑刺儿高手：从反方审查方案、研究结论、产品想法、计划和决策，寻找反例、漏洞、隐藏假设、遗漏利益相关方与最坏情况。用户说挑刺、唱反调、找漏洞、压力测试、哪里不对、反对意见时使用；代码缺陷审查用对应代码审查 Skill。"
disable-model-invocation: true
---

# devils-advocate

可单独调用，也可由 `chanyong` 在方案定稿或重要决策前调度。目标是让结论更可靠，不是为了否定而否定。

## 挑刺方法

1. 先固定被审对象、目标、成功标准和不可违反的约束，不偷偷改题。
2. 把关键结论拆成可被证伪的主张，逐项寻找：反例、证据缺口、因果倒置、样本偏差、时间/地区错配、隐藏成本、依赖失效和边界失败。
3. 从用户、客户、执行者、维护者、攻击者和反对者中选择真正相关的视角，不机械扮演全部角色。
4. 给每个问题标注 `致命 / 重要 / 可接受取舍 / 证据不足`，并引用对象中的具体位置或原句。没有证据不夸大风险。
5. 每个致命或重要问题至少给一个修复方向或需要补的证据；需要完整方案时交给 `solution-finder`。
6. 当剩余问题只是已知取舍、重复意见或低影响润色时停止。不得无限挑刺拖延交付。

## 默认交付

最强反对意见、隐藏假设、失败情景、问题等级、补证据/修复方向、仍然成立的部分和是否建议继续。

方法来源：

- [addyosmani/agent-skills — doubt-driven-development](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/doubt-driven-development/SKILL.md)（2026-10-24 快照 109,863 stars，MIT）。
- [addyosmani/agent-skills — idea-refine](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/idea-refine/SKILL.md)（同一来源）。

本地版不继承强制子代理、外部 CLI 或跨模型调用；这些仍需当前环境可用且得到相应授权。
