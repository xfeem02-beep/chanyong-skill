# 已核查来源基线

检索快照：2026-10-23。stars 会变化，只用于发现；是否采用取决于任务适配、完整内容、许可证、依赖、副作用和实测。固定提交链接用于复核当时内容，不代表自动跟踪 `main`。

| 来源 | 快照 stars | 采用方式 |
|---|---:|---|
| [obra/superpowers](https://github.com/obra/superpowers/tree/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b) | 304022 | 采用计划粒度和完成前验证纪律；不继承全局强制触发、重复批准或自动代理 |
| [mattpocock/skills](https://github.com/mattpocock/skills/tree/5beb35b040e3de97e54fa9e386d7e42d15c295c2) | 301464 | 采用总路由、阶段入口和深模块方法；代理路线保持可选 |
| [anthropics/skills](https://github.com/anthropics/skills/tree/dbd4588f9e1033efb41dad4bef2f7947c8993d44) | 183188 | 采用官方技能结构、提示词审计与评测合同；逐技能核对许可证 |
| [garrytan/gstack](https://github.com/garrytan/gstack/tree/b04cc35832183a89ed71eed628de15a6f315a1a8) | 137357 | 只参考岗位分工和有界 QA；不自动引入运行时、hooks、遥测、Cookie、发布或付费调用 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable/tree/5cb95eea9c96479f57afe0732a45470d30183326) | 85277 | 只选审计与设计检查方法；当前版含引擎下载和复杂编排，不整套静默启用 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/d14efff8ed1faa4187f004f79926f428c8074ec7) | 139288 | 采用视觉系统、构图、品牌载体与图像提示词的结构化方法；不复制其完整工具链或强制默认风格 |
| [wshobson/agents](https://github.com/wshobson/agents/tree/0874a27b17a22e2b7c2e2bcd725768e0803cad06) | 41599 | 采用提示词合同、结构化输出、失败样本和小步评测；不引入 LangChain、模型依赖或隐藏推理要求 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 36206 | 发现目录；快照树含 0 个 `SKILL.md`，候选须回原作者核查 |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 32872 | 按需采用网页设计审查规则；动态远端规则必须重新核查 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins/tree/33d3dea41a341b341d4f5da2e8801ae0c89be2b8) | 31965 | 采用研究、策划、架构、内容、数据、交付等短岗位模板；连接器与命令不自动启用 |
| [openai/skills](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431) | 28266 | 采用官方 Codex 技能结构和按需专业能力；不整库安装 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills/tree/07b34f64ee828df08953f505b7f747aef85ae7c6) | 27322 | 采用精简需求、假设优先级和测试场景；Claude 命令不冒充 Codex 原生命令 |
| [agentskills/agentskills](https://github.com/agentskills/agentskills) | 26498 | 采用开放格式和技能评测方法；不推断各宿主都支持同一菜单与工具 |
| [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) | 15517 | 发现/说明目录；快照树含 0 个 `SKILL.md`，不整库安装 |

AI 评测优先核查当前 [ai-evals-course/evals-skills](https://github.com/ai-evals-course/evals-skills)。旧 `hamelsmu/evals-skills` 已在 README 标为 deprecated；没有固定候选 SHA、许可证和完整差异前不复制新文件。

本表不是安全审计。来源更新时必须保留旧基线、候选完整 SHA、逐文件哈希、许可证和本地适配差异。
