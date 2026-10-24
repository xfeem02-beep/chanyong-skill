---
name: deep-research-mode
description: "ChatGPT-style deep research：为复杂、多来源、需要反复检索与综合的问题制定研究计划，核查冲突并交付带引用报告。用户说深度研究、全面调查、市场全景、系统比较、尽调，或普通搜索不足以回答时使用；单一事实查询不用。"
disable-model-invocation: true
---

# deep-research-mode

可单独调用，也可由 `chanyong` 在复杂研究阶段调度。本技能复用 ChatGPT 深度研究的公开工作方式，不声称把 ChatGPT 的原生产品功能复制到其他 Agent。

## 能力选择

1. 宿主能直接调用原生 `@Deepresearch` 时优先使用，并沿用当前账号的额度、来源权限和工作区限制。
2. 原生能力只能由用户在界面启动时，给出一次可直接使用的 `@Deepresearch` 请求文本；没有真实启动证据就不能说正在运行。
3. 宿主没有原生模式时，使用当前可用的网页、文件、应用和数据工具完成同一类流程。多代理不是必需条件，只有用户或项目规则明确授权才使用。

## 研究流程

1. 形成 Research Contract：问题、受众、地区、时间范围、要支持的决定、交付格式，以及公开网络、上传文件、连接应用、指定网站的可用范围。只有差异会改变研究结果时才追问。
2. 指定来源模式：`open-web`、`prioritize-sites`、`restrict-sites` 或 `files/apps`。没有用户指定时按证据质量选择，不把“优先”误写成“仅限”。
3. 给简短研究计划：子问题、证据标准、来源策略、交付结构和停止条件。原生 Deep Research 允许用户编辑计划时交给原生界面；回退流程在范围明确时直接执行，不制造一次无意义确认。
4. 多轮检索并随证据调整查询。优先官方文档、原始数据、论文、公司披露和一手页面；聚合页只用于发现。
5. 长任务用 `planning / researching / verifying / synthesizing` 报真实阶段；宿主支持中途输入时接受调整方向和来源。没有异步任务或原生进度证据时，不声称后台运行或通知。
6. 为关键结论保留来源、发布日期、事件日期和适用范围。冲突来源并列，解释口径差异，不强行合并。
7. 交付结构化报告：结论、证据、反例/冲突、未知、建议、来源链接；长报告加目录、来源清单和简短研究活动摘要。每个关键判断区分事实、推断与建议。
8. 对引用、数字、商品码、价格币种单位、日期、空值和否定做最终复核。无法验证的内容标记待验证。用户需要分享时，按宿主真实能力导出 Markdown、Word 或 PDF；没有导出证据只交付聊天报告。

## 停止条件

- 新来源只重复已有证据，关键冲突已解释，研究问题均有答案或明确未知。
- 快速查一个事实、网址、价格或规格时转 `yanjiu` 或 `product-information-research`，不启动长报告。
- 研究不授权购买、登录、外发、付费数据源或生产写入。

方法依据：[OpenAI Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-deep-research-faq/)（2026-10-24 核查）、[OpenAI Research with ChatGPT](https://openai.com/academy/search-and-deep-research/) 和 [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)（计划编辑、指定网站/连接应用、实时进度与中途调整）。
