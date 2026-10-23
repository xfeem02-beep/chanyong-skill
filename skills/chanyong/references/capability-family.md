# 能力大家庭：自动识别与不冲突规则

本文件只在非简单任务需要选择专业能力时读取。`chanyong` 始终是唯一总控；专业 Skill 是阶段工具，不能递归启动另一套总控、扩大范围或取得新授权。宿主已经提供技能目录时以该目录为准，不为找 Skill 扫描无关个人文件。

## 固定选择规则

1. **先判定交付物和动作**：回答、研究、方案、代码、界面、图片、视频、文档、表格、审查、安装或发布。
2. **每阶段只选一个主 Skill**：最具体且直接产出该阶段结果的能力优先。最多再加一个补充能力和一个验收能力。
3. **顺序固定**：读现场 → 主专业能力 → 必要实现工具 → 独立验收。已完成且仍有效的阶段直接复用。
4. **冲突优先级**：用户明确要求 → 项目规则与现有设计/架构 → 最具体的已安装 Skill → 本包内置方法。通用框架不能覆盖专用能力。
5. **没有命中就不用**：普通问答、小文案、明确的一行修改直接完成；不要为了“显得专业”展开工作组。
6. **只说明本次能力**：对用户说“正在使用 chanyong 的调研/设计/修复能力”，不倾倒内部 Skill 名单。
7. **Skill 不产生权限**：外发、发布、生产写入、交易、付费、登录、代理、凭据、后台任务和多代理仍沿用当前授权边界。

## 场景与主能力

| 场景 | 主能力（按适配选择一个） | 可选补充 | 验收/停止条件 |
|---|---|---|---|
| 研究用户、偏好与记忆 | [`dongwo`](../../dongwo/SKILL.md) | 宿主私有记忆；推荐/规划前只取相关条目 | 明确事实、偏好、假设分开；只有用户明确要求才保存 |
| 创意、点子、命名、活动概念 | [`chuangyi`](../../chuangyi/SKILL.md) | 视觉落地再进入设计家族；商品机会转 `xuanpin` | 方向有真实依据、彼此有机制差异，并能最小验证 |
| 个性化推荐与候选比较 | [`tuijian`](../../tuijian/SKILL.md) | `dongwo` 提供已确认偏好；最新信息用证据调研 | 给明确首选，事实/偏好判断/未知分开；不自动购买 |
| 待办、日程、会议与跟进 | [`mishu`](../../mishu/SKILL.md) | `guihua` 提供计划；宿主日历/邮件/自动化按授权使用 | 负责人、期限、时区和未决项清楚；不自动发送 |
| 经营选品与采购候选 | [`xuanpin`](../../xuanpin/SKILL.md) | 证据调研、数据分析、`guihua` | 商品与变体精确；关键成本缺失时利润为 null 且不推荐进货 |
| 目标、路线图与阶段规划 | [`guihua`](../../guihua/SKILL.md) | `mishu` 落日程和提醒；`dongwo` 提供工作节奏 | 关键路径、下一步、里程碑和完成证据明确 |
| 文件、项目与个人资料备份 | [`beifen`](../../beifen/SKILL.md) | 已安装的 restic/Kopia/系统备份工具 | 原数据保留；复制、校验、隔离恢复分别报告 |
| 当前事实、比较、趋势、规则 | chanyong 内置证据调研；已授权委派时可用 `research` / `deep-research` | `firecrawl-search` 找来源，`firecrawl-scrape` 读已选页面 | 一手来源支持主要结论；事实、推断、建议分开 |
| 产品、商业、活动策划 | 内置策划师/产品经理 | 必要时调研、数据分析；`grilling` 仅用户要求压力测试时 | 目标、用户、范围、不做什么、成功标准清楚 |
| 架构、模块边界、接口 | `codebase-design` 或内置架构师 | 领域术语变化才用 `domain-modeling`；迁移才用 `migration` | 调用方、错误、数据、权限、回滚和取舍可说明 |
| 新功能或集成 | `lean-build` | 接口过浅时 `codebase-design`；用户要求测试先行才用 `tdd` | 最小端到端结果通过，达到验收即停止 |
| 原因不明的故障或性能问题 | `investigate-first`；复杂复现循环用 `diagnosing-bugs` | 根因明确后转 `surgical-patch` | 有复现/最强证据、根因、针对性回归 |
| 明确小修复 | `surgical-patch` | 必要时先短诊断 | 最窄责任层修好，附近回归通过 |
| 保行为重构 | `safe-refactor` | 深模块问题可加 `codebase-design` | 修改前后行为证据一致 |
| 数据/API/配置迁移 | `migration` | 架构师补充兼容边界 | 双向兼容、回滚和数据保存证据成立 |
| 已有工作验收 | `verify-and-stop` | 专业格式检查工具 | 验收条件已获得最小充分证据，立即停止扩展 |
| 网站、落地页、后台、App UI | 读取 [design-family.md](design-family.md)；Taste 主持方向 | 营销页用 `frontend-design`；操作型界面用 `interface-design`；`impeccable` 只在方向锁定后做高质量强化 | 看过真实渲染；多尺寸、状态、文字和可访问性已核对 |
| UI 规范审查 | `web-design-guidelines` 或宿主可用的可访问性审查 | `impeccable` 做视觉工艺复核 | 发现有位置和证据；未修复项明确 |
| 动效与微交互 | `motion-design` 定义目的与节奏 | 只选一个匹配栈的 GSAP Skill；React 用 `gsap-react`，滚动用 `gsap-scrolltrigger`，时间线用 `gsap-timeline` | 动效服务反馈/引导；支持减少动态效果；无明显卡顿 |
| 海报、封面、产品场景图 | [prompt-visual-system.md](prompt-visual-system.md) | 位图用 `imagegen`，准确排版用 `canvas-design` | 查看真实成图，核对文字、产品、品牌、裁切和瑕疵 |
| 产品宣传片、页面视频 | 现有 HTML/数据驱动视频用 `hyperframes`；React 视频用 Remotion；产品电影感宣传片用 `video-shotcraft` | `media-use` 管素材；字幕、地图等只加载对应子 Skill | 能播放的真实视频、自然音频、关键帧与导出检查通过 |
| Word/PDF/PPT/Excel | 按目标格式只选 `docx`、`pdf`、`pptx` 或 `xlsx` | 数据分析只补实际需要的工具 | 文件能打开，格式、公式、分页/版式和关键内容检查通过 |
| Notebook 数据探索 | `hamelnb` | 格式交付再转 xlsx/pdf | 结果、环境状态和不可复现部分说明清楚 |
| 二进制、Electron、网页运行时逆向 | `reverse-engineer-anything` | 只使用任务需要的检查工具 | 事实来自实际目标和证据，不把猜测当结论 |
| Skill 创建、安装和更新 | `skill-creator` / `skill-installer` | 来源与许可证核查 | 结构、触发、安装、版本和回退已验证 |

## 设计家族内部顺序

- Taste：网页和应用的主审美方向与浏览器复核。
- `frontend-design`：营销、品牌、落地页的实现表达。
- `interface-design`：后台、Dashboard、工具、设置页等操作型界面。
- `impeccable`：方向确定后的工艺强化与最终视觉审查，不与 Taste 重新争方向。
- Refero、`design-reference`、`ui-ux-pro-max`：补真实参考、规则和技术细节，不平均混合风格。
- `web-design-guidelines`：面向规范、可访问性和界面质量的审查。
- `motion-design` 与 GSAP：只有任务确实需要动效时进入，不能为了炫技自动添加。

## 视频家族内部选择

一次只开一条制作管线：

- 用户要 HTML、数据可视化、地图或组件驱动视频：HyperFrames。
- 项目已经是 Remotion，或需要 React 时间线渲染：Remotion；只读任务对应的子 Skill。
- 用户要把产品/网页制作成电影感宣传片，或指定镜头配方：video-shotcraft。
- 只缺素材搜索、处理或授权核对：media-use；它不是主视频管线。

## 保持显式触发的能力

以下能力不因普通语义自动启动：

- `xiaokao-develop`：只有用户直接调用小靠独立开发时启用。
- `codex-review`：只有用户直接要求 Codex 审查时启用。
- 小靠审查：继续遵守全局模型选择和只读规则。
- `handoff`：只有用户要求交接给另一个 Agent 时生成。
- `grilling` / `grill-with-docs`：只有用户要求压力测试、追问或严厉推演时启用。
- 多代理、后台代理或工作组：只有用户或适用项目规则明确授权时启动；专业 Skill 中的委派建议不构成授权。
- `work-team` 与其他总控型框架：其有效方法已由 chanyong 吸收，不再作为第二总控运行。
- Caveman/Ponytail：属于表达和实施纪律，保持现有配置，不作为任务阶段展示。

## 缺失与降级

已安装且命中的专用 Skill 可读取其完整说明。宿主没有该 Skill 时，使用 `routing.md`、`specialists.md`、`design-family.md` 和本文件中的最小方法继续；缺少真正的生成器、浏览器、文档编辑器或渲染器时，明确标记对应交付为 `blocked` 或“未实测”，不得用文字冒充成品。
