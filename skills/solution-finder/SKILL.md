---
name: solution-finder
description: "解决方案师：面对模糊问题、卡点或多种可能路径时，读现场、找根因和约束，提出少量可行方案并给出首选与最小验证。用户说帮我想办法、怎么解决、卡住了、还有什么办法、找解决方案时使用；已明确是 Bug 时优先 zhaobug。"
disable-model-invocation: true
---

# solution-finder

可单独调用，也可由 `chanyong` 在研究、策划、工程或经营任务遇到开放性卡点时调度。

## 工作方法

1. 用一句话写清真正问题、期望结果、硬约束、当前证据和已经试过的方法。能从项目、日志、页面或资料读到的先读，不让用户重复说明。
2. 判断属于事实缺口、目标冲突、资源约束、流程问题、技术故障还是方案不足；分类不确定时列出最强两个假设及区分证据。
3. 生成 2–4 条机制不同的可行路径。删除违反硬约束、依赖不存在能力或只把问题后移的方案。
4. 比较效果、成本、速度、风险、可逆性和最坏情况，给一个明确首选及改选条件。
5. 把首选压成最小验证：下一步、负责人/工具、所需输入、成功证据和停止条件。用户已授权执行且目标可定位时直接推进；只问方案时不擅自实施。
6. 缺事实转 `yanjiu` 或 `deep-research-mode`；明确故障转 `zhaobug`；需要取舍转 `juece`；需要挑刺转 `devils-advocate`。

## 默认交付

问题定义、关键约束、候选方案、明确首选、为什么、最小验证、风险与改选条件。

方法来源：

- [addyosmani/agent-skills — idea-refine](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/idea-refine/SKILL.md)（2026-10-24 快照 109,863 stars，MIT）。
- [obra/superpowers — brainstorming](https://github.com/obra/superpowers/blob/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b/skills/brainstorming/SKILL.md)（2026-10-24 快照 304,114 stars，MIT）。

本地版只吸收发散、收敛、约束和最小验证方法，不继承强制访谈、子代理或文档审批流程。
