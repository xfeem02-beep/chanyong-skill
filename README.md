# chanyong

在 macOS 或 Windows 终端运行一条命令，把 `chanyong` 能力大家庭安装到 Codex 通用 `.agents`、Claude Code 和 Grok：

```sh
node -e "fetch('https://is.gd/chanyong_install').then(r=>r.text()).then(eval)"
```

需要 Node.js 22.20 或更高版本，不要求另外安装 Git。安装器关闭本次安装的匿名遥测，并同时尝试全局安装与当前项目安装。Codex 使用的 `.agents/skills` 也是多个兼容 Agent 的通用入口；不再向几十个未使用的 Agent 目录重复复制。其他 Agent 可读取标准 `.agents/skills` 时直接共用。同一条命令始终获取最新稳定版，可以直接重复运行更新。

同一条命令适用于 macOS Terminal、Windows PowerShell 和 Windows CMD。安装器直接调用 Node.js，不经过 shell 拼接，因此支持 `C:\Program Files\...`、中文用户名和带空格的项目路径。

Skill 在每个新对话首次使用时检查一次公开 GitHub Release：没有新版时保持安静；发现新版时显示“发现新版 → 正在更新 → 更新成功/失败”，成功后重新读取新版总控并继续原任务。安装结束会明确显示“已安装 / 已更新 / 已是最新版”和版本日期。版本按 `YYYY.MM.DD-rNN` 排列，例如 `2026.10.24-r01` 是当天第一版、`r02` 是当天第二版。更新只在当前对话前台运行，不启动后台服务，不上传项目、提示词、记忆或身份信息。入口脚本给 Release 下载地址加入当次时间参数，避免 `npx` 把同名最新版链接长期复用为旧缓存。

## 一个总控，也可单独使用

安装包按 `skills/<成员名>/` 组织。`chanyong` 是唯一自动总控；`jinengguan` 只在项目出现 Skill 能力缺口时自动充当“嗅觉”。每个内置专业成员仍有自己的 `SKILL.md`，可以按名称单独调用。以后加入 `skills/` 的合规成员会随同一条安装命令一起安装。成员规范见 [`family-installation.md`](skills/chanyong/references/family-installation.md)。

当前共有 **42 个专业成员**、**10 个顶部快捷入口**和 **1 个旧版兼容入口**，按 1 个总控和 8 个能力组组织：

| 分组 | 成员 |
|---|---|
| 快捷入口 | `00-chanyong`（常用总控）、`01-team-cehua` 至 `09-team-hegui`（九个 Team 顺序入口） |
| 总控 | `chanyong`（常用）；`zz-chanyong` 仅保留旧版兼容 |
| 个人与知识 | `dongwo`（懂我）、`tuijian`（推荐师）、`mishu`（秘书）、`fupan`（复盘师）、`zhishi`（知识管家） |
| 研究与策略 | `project-strategy-team`（策划组）、`chuangyi`（创意师）、`guihua`（规划大师）、`yanjiu`（研究大师）、`deep-research-mode`（深度研究模式）、`solution-finder`（解决方案师）、`cehua`（策划师）、`chaijie`（拆解师）、`juece`（决策师） |
| 选品与采购 | `product-information-research`（商品信息查询）、`xuanpin`（选品大师）、`bijia`（商品价格比价大师）、`caigou`（采购大师） |
| 运营与增长 | `ecommerce-operations-team`（运营组）、`growth-marketing-team`（推广组） |
| 工程与接口 | `engineering-delivery-team`（工程组）、`jiagou`（架构师）、`tishici`（提示词大师）、`biancheng`（写代码专业大师）、`jianrong`（兼容大师）、`api`（API 大师）、`gaojigongchengshi`（高级工程师） |
| 质量与安全 | `quality-testing-team`（测试组）、`commerce-compliance-team`（合规组）、`anquan`（安全管理大师）、`devils-advocate`（挑刺儿高手）、`zhaobug`（找 Bug 大师）、`xiubug`（修 Bug 大师）、`daimazhengli`（代码整理大师） |
| 设计与视觉 | `interface-design-team`（界面组）、`visual-design-team`（出图组）、`design-review-team`（审查组）、`design-taste-frontend`（Taste 设计导演） |
| 电脑与维护 | `beifen`（备份大师）、`diannao`（电脑管理大师）、`jinengguan`（自动发现能力缺口并审查、安装、更新 Skills） |

用户可以直接点名任一成员；未点名时由 chanyong 自动选择。搜索或询问 `chanyong` 组合时先展示九个 Team 的短中文名、英文 Skill 名和一句用途。中文名可直接说，例如“运营组，帮我……”。原生 `$` 调用仍用英文 Skill 名。使用方式只有三种：`AUTO` 全自动、`TEAM` 指定一个组合、`SOLO` 单独一个 Skill。每次只读取命中的工作方法，通常使用一个主成员，复杂任务最多增加一个辅助和一个验收成员。现有能力覆盖不了项目需求时，`jinengguan` 才去 GitHub 查真实、热门、活跃且许可证清楚的 Skill；低风险候选按用户已有授权安装，重复能力不装。商品信息查询、电商和商品研究类外部 Skill 另设硬门槛：来源 GitHub 仓库少于 1,000 stars 不安装，达到门槛仍要检查活跃度、许可证、凭据、付费和后台副作用。

Codex `$` 与兼容客户端的 `/` 选择器按 SKILL.md 英文名排序。顶部现在固定显示 `00-chanyong`，随后按 `01` 至 `09` 显示策划组、工程组、界面组、出图组、审查组、运营组、推广组、测试组、合规组，之后才是普通单独 Skill。快捷入口只转入真实 Skill；原来的 `$chanyong` 和 Team 英文名继续有效。

用户可以直接说白话，允许口语、拼音、中英混写、漏字和常见错别字。`chanyong` 结合整句、前后文与当前项目识别真实意图，不要求标准英文 Skill 名或长命令；只有涉及不同业务结果或不可逆动作的歧义才追问。商品码、条码、金额、规格、路径、网址、命令和报错等精确字段不会被模糊纠正。

非简单任务先形成最小 Task Contract；已有项目只读取与当前目标相关的规则、入口、模块、组件、数据流和测试，不全库重扫。路由严格限制为一个 Primary、最多一个 Auxiliary 和一个只读 Validator。默认 `AUTO`；点名 `*-team` 使用 `TEAM`；说“只用 X”或 `--solo` 使用 `SOLO`。“先推荐组合”只展示目录供选择。复杂任务结束时返回实际读取、修改、检查和未解决项，不用“已完成”代替证据。完整控制层见 [`control-plane.md`](skills/chanyong/references/control-plane.md)，Team 目录见 [`team-catalog.md`](skills/chanyong/references/team-catalog.md)。

每个非简单任务开头都会显示实际选择，例如：`本次使用：zhaobug — 定位登录错误；xiubug — 完成最小修复；anquan — 检查安全回归`。显示真实英文 Skill 名和本次功能，没有启用的 Skill 不显示。

## 自动设计家族

设计能力收敛成三套打法，`chanyong` 每次只选一套主组合：

1. **`interface-design-team` 界面组**：网站、后台、App、小程序与 Dashboard。读项目和设计系统，由 Taste 锁定一个主方向，再按缺口补参考、UI 规则、UX 文案、设计系统、实现和多尺寸复核。
2. **`visual-design-team` 出图组**：海报、封面、品牌视觉、产品场景图与系列素材。先做视觉卡；ImageGen 负责图像素材，Canvas 负责准确文字和排版，Theme 只在需要成套主题时加入。
3. **`design-review-team` 审查组**：设计挑刺、UX 文案、设计系统、无障碍和开发交接。按问题只选一条审查主线，输出具体位置、影响等级、最小修法和未验证项。

截图里的 `design-critique`、`ux-copy`、`design-handoff`、`accessibility-review`、`design-system`，以及 `theme-factory`、`canvas-design` 都被放进对应组合按需使用；它们不会一起启动。宿主装有原 Skill 时直接用，没有时由三个组合 Skill 的内置方法继续，因此 Codex、Claude Code 和 Grok 的基础路线保持一致。完整路由见 [`skills/chanyong/references/design-family.md`](skills/chanyong/references/design-family.md)。

## 自动能力大家庭

快速研究、深度研究、商品查询、运营、推广、SEO/AI 搜索、解决方案、挑刺、策划、架构、开发、测试、排错、安全合规、重构、迁移、设计、动效、图片、视频、Word、PDF、PPT、Excel、逆向、审查和验收都由同一个入口识别。项目需要新能力时，Skill 嗅觉会先查现有成员，再有界搜索 GitHub、审查候选并按授权安装。每个阶段只选一个主 Skill，最多加一个补充能力和一个验收能力；显式限定的小靠、Codex 审查、交接、多代理等不会被普通语义误触发。完整规则见 [`skills/chanyong/references/capability-family.md`](skills/chanyong/references/capability-family.md)，电商四套组合见 [`skills/chanyong/references/commerce-family.md`](skills/chanyong/references/commerce-family.md)。

个人记忆只有用户明确说“记住”才写入。同一台电脑上的 Codex、Claude Code、Grok 和不同项目默认共用用户级私有记忆；多台电脑各自配置同一个私人同步目录后共用。该目录同时提供 `documents/` 作为日后指定文档位置。公开安装包不含任何人的偏好、客户资料或备份内容；GitHub 上传默认关闭，只有明确要求且确认远端为私人仓库后才能执行。

安装完成后，对任意 Agent 直接说“把共享记忆目录设为 `<绝对路径>`”即可配置；无需记脚本命令。每台电脑只配置一次，并让同步盘或私人 Git 仓库在这些电脑上对应到该目录。单文件记忆不适合多机同时写：写入前先同步，出现冲突时保留双方并人工确认。更换目录不会覆盖目标已有记忆，恢复默认也不会删除旧数据。

给其他项目或其他 AI 的可复制安装指令：[`CHANYONG-INSTALL-PROMPT.txt`](CHANYONG-INSTALL-PROMPT.txt)。
