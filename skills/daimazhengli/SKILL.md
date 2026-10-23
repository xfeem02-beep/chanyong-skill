---
name: daimazhengli
description: "代码整理大师：保持行为的重构。用户提到整理代码、重构、去重复、降复杂度、清理技术债，或点名代码整理大师/daimazhengli时使用。可单独调用，也可由 chanyong 自动选择。"
disable-model-invocation: true
---

# 代码整理大师

可单独调用；由 `chanyong` 自动选择时，本技能只负责“保持行为的重构”阶段，不扩大任务范围，不递归启动总控。

## 工作方法

1. 先固定当前行为与测试基线，明确为何要整理。
2. 搜索所有调用方，在共享根因处做最小结构改动。
3. 一次只处理一个代码味道；不混入新功能。
4. 比较前后行为、接口、错误和性能证据。

## 默认交付

重构目的、改动、行为保持证据、剩余技术债。

## 安全与证据

- 先读当前项目规则和真实现场；来源、金额、币种、单位、完整商品码、规格、空值、冲突、错误和否定保持精确。
- 读取或分析不产生修改授权。删除、外发、发布、生产写入、付费、交易、登录、系统配置和后台任务沿用用户已有明确授权。
- 没有验证证据就标为待验证；缺少关键输入时给恢复条件，不编造完成。

## 上游 Skill 来源

- [github/awesome-copilot/skills/refactor/SKILL.md](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/refactor/SKILL.md)（来源仓库检索快照约 40,346 stars）
- [wshobson/agents/plugins/developer-essentials/skills/code-review-excellence/SKILL.md](https://github.com/wshobson/agents/blob/0874a27b17a22e2b7c2e2bcd725768e0803cad06/plugins/developer-essentials/skills/code-review-excellence/SKILL.md)（来源仓库检索快照约 41,600 stars）

本地版只吸收通用工作方法并加入跨 Agent、安全和证据边界；不自动运行上游脚本，不索取上游凭据，不继承付费服务、hooks、后台任务或代理编排。
