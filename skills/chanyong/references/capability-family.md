# 能力大家庭：自动识别与不冲突规则

本文件只在非简单任务需要选择专业能力时读取。`chanyong` 始终是唯一总控；专业 Skill 是阶段工具，不能递归启动另一套总控、扩大范围或取得新授权。宿主已经提供技能目录时以该目录为准，不为找 Skill 扫描无关个人文件。

## 固定选择规则

1. **先判定交付物和动作**：回答、研究、方案、代码、界面、图片、视频、文档、表格、审查、安装或发布。
2. **每阶段只选一个主 Skill**：最具体且直接产出该阶段结果的能力优先。最多再加一个补充能力和一个验收能力。
3. **顺序固定**：读现场 → 主专业能力 → 必要实现工具 → 独立验收。已完成且仍有效的阶段直接复用。
4. **冲突优先级**：用户明确要求 → 项目规则与现有设计/架构 → 最具体的已安装 Skill → 本包内置方法。通用框架不能覆盖专用能力。
5. **没有命中就不用**：普通问答、小文案、明确的一行修改直接完成；不要为了“显得专业”展开工作组。
6. **展示选择结果**：首次进度显示每个实际启用的真实英文 Skill 名字，以及它在本次任务主要做什么。不要用另造的中文职位替代真实名字，不展示未启用 Skill，不倾倒完整清单。
7. **Skill 不产生权限**：外发、发布、生产写入、交易、付费、登录、代理、凭据、后台任务和多代理仍沿用当前授权边界。

## 场景与主能力

| 场景 | 主能力（按适配选择一个） | 可选补充 | 验收/停止条件 |
|---|---|---|---|
| 研究用户、偏好、跨 Agent/项目记忆与指定文档目录 | [`dongwo`](../../dongwo/SKILL.md) | 同机共用用户级私有位置；多机由用户指定同一私人同步目录 | 明确事实、偏好、假设分开；只有用户明确要求才保存；GitHub 必须私有且明确触发 |
| 创意、点子、命名、活动概念 | [`chuangyi`](../../chuangyi/SKILL.md) | 视觉落地再进入设计家族；商品机会转 `xuanpin` | 方向有真实依据、彼此有机制差异，并能最小验证 |
| 个性化推荐与候选比较 | [`tuijian`](../../tuijian/SKILL.md) | `dongwo` 提供已确认偏好；最新信息用证据调研 | 给明确首选，事实/偏好判断/未知分开；不自动购买 |
| 待办、日程、会议与跟进 | [`mishu`](../../mishu/SKILL.md) | `guihua` 提供计划；宿主日历/邮件/自动化按授权使用 | 负责人、期限、时区和未决项清楚；不自动发送 |
| 精确商品资料、完整款号、条码/GTIN、同款来源 | [`product-information-research`](../../product-information-research/SKILL.md) | 经营筛选转 `xuanpin`；到手成本转 `bijia` | 商品与变体身份明确；输出 exact/candidate/conflicting/unavailable；价格和卖家信息不串源 |
| 经营选品与采购候选 | [`xuanpin`](../../xuanpin/SKILL.md) | 商品身份先用 `product-information-research`；数据分析、`guihua` | 商品与变体精确；关键成本缺失时利润为 null 且不推荐进货 |
| 目标、路线图与阶段规划 | [`guihua`](../../guihua/SKILL.md) | `mishu` 落日程和提醒；`dongwo` 提供工作节奏 | 关键路径、下一步、里程碑和完成证据明确 |
| 文件、项目与个人资料备份 | [`beifen`](../../beifen/SKILL.md) | 已安装的 restic/Kopia/系统备份工具 | 原数据保留；复制、校验、隔离恢复分别报告 |
| 快速证据调研与单一事实核查 | [`yanjiu`](../../yanjiu/SKILL.md) | 需要选择时转 `juece`；产品方向转 `cehua` | 一手来源支持结论；事实、推断、建议和未知分开 |
| 多来源复杂研究、尽调、市场全景、系统比较 | [`deep-research-mode`](../../deep-research-mode/SKILL.md) | 原生 `@Deepresearch` 真可用时优先；否则用当前检索工具 | 有研究计划、冲突核验、事实/推断/建议区分和逐项引用；未知明确 |
| 开放性卡点、找办法、替代路径 | [`solution-finder`](../../solution-finder/SKILL.md) | 缺事实转研究；明确故障转 `zhaobug`；取舍转 `juece` | 给少量机制不同的方案、明确首选、改选条件与最小验证 |
| 方案、结论或重要决策的反方压力测试 | [`devils-advocate`](../../devils-advocate/SKILL.md) | 完整修法转 `solution-finder`；代码缺陷用代码审查能力 | 最强反例、证据缺口和隐藏成本分级；重要问题有修复方向；不无限挑刺 |
| 产品、活动与商业策划 | [`cehua`](../../cehua/SKILL.md) | `yanjiu` 补证据；`guihua` 落计划 | 用户、价值、范围、成功指标和最小验证清楚 |
| 架构与技术决策 | [`jiagou`](../../jiagou/SKILL.md) | 接口用 `api`；迁移用 `jianrong` | 模块、数据、权限、错误、兼容和回滚清楚 |
| 模型行为与提示词 | [`tishici`](../../tishici/SKILL.md) | 视觉生成读取视觉体系；安全审查用 `anquan` | 有输入输出合同、失败样本和小型评测 |
| 目标与工作包拆解 | [`chaijie`](../../chaijie/SKILL.md) | `guihua` 只负责排期与节奏 | 工作包独立、依赖和完成证据明确 |
| 多方案选择与取舍 | [`juece`](../../juece/SKILL.md) | `yanjiu` 补事实；`dongwo` 补已确认偏好 | 明确首选、风险和改选条件 |
| 项目或工作复盘 | [`fupan`](../../fupan/SKILL.md) | 需要保存长期偏好才转 `dongwo` | 目标、结果、原因和下一项实验可核查 |
| 电脑健康与维护 | [`diannao`](../../diannao/SKILL.md) | 数据保护用 `beifen` | 先只读盘点；修改系统前有明确授权与回退 |
| 知识库与笔记整理 | [`zhishi`](../../zhishi/SKILL.md) | 当前事实核查用 `yanjiu` | 索引可检索；不擅自移动、删除或破坏链接 |
| Skill 主动发现、推荐、精简与更新 | [`jinengguan`](../../jinengguan/SKILL.md) | 安全代码审查用 `anquan` | 真实 SKILL.md、高星活跃来源、许可证、固定提交和隔离验证；商品类来源少于 1,000 stars 不安装；最多推荐 3 个并解释为什么不需要更多 |
| 安全审计与安全开发 | [`anquan`](../../anquan/SKILL.md) | 根因故障转 `zhaobug` | 攻击者、受害者、数据流、证据和修复明确 |
| Bug 复现与根因定位 | [`zhaobug`](../../zhaobug/SKILL.md) | 根因成立后转 `xiubug` | 最小复现或最强假设有证据 |
| Bug 最小修复 | [`xiubug`](../../xiubug/SKILL.md) | `zhaobug` 提供复现；`anquan` 检查安全影响 | 修复前失败、修复后通过，附近回归成立 |
| 专业代码实现 | [`biancheng`](../../biancheng/SKILL.md) | 架构用 `jiagou`；验收按项目工具 | 调用方、错误、配置和真实入口验证完整 |
| 复杂跨模块工程、性能与可靠性 | [`gaojigongchengshi`](../../gaojigongchengshi/SKILL.md) | 简单实现降级为 `biancheng`；安全用 `anquan` | 复杂度必要、关键取舍清楚、代表性负载与故障路径已验证 |
| 保行为代码整理 | [`daimazhengli`](../../daimazhengli/SKILL.md) | 深模块结构可补 `jiagou` | 前后行为、接口和错误语义一致 |
| 旧系统兼容与迁移 | [`jianrong`](../../jianrong/SKILL.md) | 接口合同用 `api` | 新旧客户端、数据、回滚和弃用条件已核对 |
| API 设计与接入 | [`api`](../../api/SKILL.md) | 安全用 `anquan`；版本迁移用 `jianrong` | 合同、错误、权限、幂等、兼容和测试清楚 |
| 韩国采购商品比价 | [`bijia`](../../bijia/SKILL.md) | `xuanpin` 确认买什么；`caigou` 负责怎么买 | 同款变体精确；完整到手成本或明确缺失 |
| 采购执行与控制 | [`caigou`](../../caigou/SKILL.md) | `bijia` 给成本；`mishu` 跟进节点 | 供应商、数量、成本、交期、审批与三方核对清楚 |
| 已有工作验收 | `verify-and-stop` | 专业格式检查工具 | 验收条件已获得最小充分证据，立即停止扩展 |
| 网站、落地页、后台、App、小程序、Dashboard | [`interface-design-team`](../../interface-design-team/SKILL.md)；Taste 主持方向 | 按缺口才用 Refero、UI/UX Pro Max、UX copy、design system 或 frontend-design | 看过真实渲染；多尺寸、状态、文字和可访问性已核对 |
| 海报、封面、品牌视觉、产品场景图、系列素材 | [`visual-design-team`](../../visual-design-team/SKILL.md) | 位图用 `imagegen`；准确文字与版式用 `canvas-design`；主题仅按需 | 查看真实成图；产品、文字、品牌、裁切和瑕疵已核对 |
| 设计挑刺、UX 文案、系统一致性、无障碍、开发交接 | [`design-review-team`](../../design-review-team/SKILL.md) | 按问题只选 critique/copy/system/accessibility/handoff 一条主线 | 发现有具体位置、影响等级、最小修法和未验证项 |
| 动效与微交互 | `motion-design` 定义目的与节奏 | 只选一个匹配栈的 GSAP Skill；React 用 `gsap-react`，滚动用 `gsap-scrolltrigger`，时间线用 `gsap-timeline` | 动效服务反馈/引导；支持减少动态效果；无明显卡顿 |
| 产品宣传片、页面视频 | 现有 HTML/数据驱动视频用 `hyperframes`；React 视频用 Remotion；产品电影感宣传片用 `video-shotcraft` | `media-use` 管素材；字幕、地图等只加载对应子 Skill | 能播放的真实视频、自然音频、关键帧与导出检查通过 |
| Word/PDF/PPT/Excel | 按目标格式只选 `docx`、`pdf`、`pptx` 或 `xlsx` | 数据分析只补实际需要的工具 | 文件能打开，格式、公式、分页/版式和关键内容检查通过 |
| Notebook 数据探索 | `hamelnb` | 格式交付再转 xlsx/pdf | 结果、环境状态和不可复现部分说明清楚 |
| 二进制、Electron、网页运行时逆向 | `reverse-engineer-anything` | 只使用任务需要的检查工具 | 事实来自实际目标和证据，不把猜测当结论 |
| Skill 创建、安装和更新 | `skill-creator` / `skill-installer` | 来源与许可证核查 | 结构、触发、安装、版本和回退已验证 |

## 设计家族内部顺序

- `interface-design-team`：界面从方向、规则、文案、系统到实现和多尺寸复核；Taste 是主审美方向。
- `visual-design-team`：视觉卡、提示词、图像素材、精确排版和成图复核。
- `design-review-team`：设计挑刺、UX 文案、设计系统、无障碍或开发交接；一次只选一条主线。
- Refero、`design-reference`、`ui-ux-pro-max`、`frontend-design`、`canvas-design`、`theme-factory` 和 Anthropic Design Plugin 都是组合中的按需能力，不单独争夺主方向。
- `motion-design` 与 GSAP 只有任务确实需要动效时进入，不能为了炫技自动添加。

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
