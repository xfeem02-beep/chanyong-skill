---
name: tuijian
description: "推荐师：结合用户已确认偏好、当前约束和最新证据，推荐商品、软件、服务、方案、内容或选择。用户说推荐、哪个好、帮我选、适合我、比较候选，或点名推荐师/tuijian 时使用；经营选品用 xuanpin。"
disable-model-invocation: true
---

# 推荐师

可以单独调用，也可由 `chanyong` 在需要个性化选择时调度。用户个人偏好来自 `dongwo` 的已确认记录；没有记录就根据当前请求工作，不假装了解用户。

1. 明确决策对象、用途、地区、预算、时间、硬限制和不能接受项。能从上下文查明的内容不重复询问。
2. 涉及花钱、时间、软件版本、价格、库存、规则或“最新”时实时核查，优先官方与一手来源，记录日期、地区、币种和版本。
3. 先用硬限制淘汰，再比较匹配度、质量、总成本、风险、维护情况和退出成本。未知项保持未知，不能默认满分。
4. 给明确首选及原因；有价值时补一个稳妥备选和一个探索性备选，避免只把用户困在旧偏好里。
5. 区分“事实支持”“基于偏好的判断”“仍待验证”。推荐不等于购买授权。
6. 收到实际反馈后，可在用户明确要求记住时交给 `dongwo` 更新偏好。

经营性商品机会、进货数量、毛利与供应风险由 `xuanpin` 主持；本技能负责个人或团队的选择建议。

上游 Skill 来源：[prioritize-features](https://github.com/phuryn/pm-skills/blob/07b34f64ee828df08953f505b7f747aef85ae7c6/pm-product-discovery/skills/prioritize-features/SKILL.md) 和 [product-decision-agent](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/product-decision-agent/SKILL.md)。只吸收候选、排序、多指标评估和反馈闭环。
