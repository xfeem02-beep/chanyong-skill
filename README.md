# chanyong

在 macOS 或 Windows 终端运行一条命令，把 `chanyong` 能力大家庭安装到 Codex 通用 `.agents`、Claude Code 和 Grok：

```sh
node -e "fetch('https://raw.githubusercontent.com/xfeem02-beep/chanyong-skill/main/scripts/bootstrap.cjs?'+Date.now()).then(r=>r.ok?r.text():Promise.reject(Error('HTTP '+r.status))).then(eval).catch(e=>{console.error(e.message);process.exit(1)})"
```

需要 Node.js 22.20 或更高版本，不要求另外安装 Git。安装器关闭本次安装的匿名遥测，并同时尝试全局安装与当前项目安装。Codex 使用的 `.agents/skills` 也是多个兼容 Agent 的通用入口；不再向几十个未使用的 Agent 目录重复复制。其他 Agent 可读取标准 `.agents/skills` 时直接共用。同一条命令始终获取最新稳定版，可以直接重复运行更新。

同一条命令适用于 macOS Terminal、Windows PowerShell 和 Windows CMD。安装器直接调用 Node.js，不经过 shell 拼接，因此支持 `C:\Program Files\...`、中文用户名和带空格的项目路径。

Skill 在每个新对话首次使用时只读检查公开 GitHub Release；仅在发现新版时提示这条更新命令，不后台静默覆盖，不上传项目、提示词或身份信息。入口脚本给 Release 下载地址加入当次时间参数，避免 `npx` 把同名最新版链接长期复用为旧缓存。

## 一个总控，也可单独使用

安装包按 `skills/<成员名>/` 组织。`chanyong` 是唯一自动总控；每个内置专业成员仍有自己的 `SKILL.md`，可以按名称单独调用。以后加入 `skills/` 的合规成员会随同一条安装命令一起安装。成员规范见 [`family-installation.md`](skills/chanyong/references/family-installation.md)。

当前共有 **29 个独立成员**，按 1 个总控和 7 个能力组组织：

| 分组 | 成员 |
|---|---|
| 总控 | `chanyong`（常用） |
| 个人与知识 | `dongwo`（懂我）、`tuijian`（推荐师）、`mishu`（秘书）、`fupan`（复盘师）、`zhishi`（知识管家） |
| 研究与策略 | `chuangyi`（创意师）、`guihua`（规划大师）、`yanjiu`（研究大师）、`cehua`（策划师）、`chaijie`（拆解师）、`juece`（决策师） |
| 选品与采购 | `xuanpin`（选品大师）、`bijia`（商品价格比价大师）、`caigou`（采购大师） |
| 工程与接口 | `jiagou`（架构师）、`tishici`（提示词大师）、`biancheng`（写代码专业大师）、`jianrong`（兼容大师）、`api`（API 大师）、`gaojigongchengshi`（高级工程师） |
| 质量与安全 | `anquan`（安全管理大师）、`zhaobug`（找 Bug 大师）、`xiubug`（修 Bug 大师）、`daimazhengli`（代码整理大师） |
| 设计与视觉 | `design-taste-frontend`（Taste 设计导演） |
| 电脑与维护 | `beifen`（备份大师）、`diannao`（电脑管理大师）、`jinengguan`（技能馆长） |

用户可以直接点名任一成员；未点名时由 chanyong 自动选择。每次只读取命中的工作方法，通常使用一个主成员，复杂任务最多增加一个辅助和一个验收成员。

每个非简单任务开头都会显示实际选择，例如：`本次使用：chanyong → 找 Bug 大师（zhaobug，主）＋修 Bug 大师（xiubug，辅助）＋安全管理大师（anquan，验收）`，并解释选择原因；首次出现时提示下次可以直接说“找 Bug 大师，检查登录错误”。没有启用的 Skill 不显示。

## 自动设计家族

不需要输入 `/常用` 或 `/设计师`。自然语言命中页面、海报、品牌、效果图、产品场景图或图像提示词时，`chanyong` 自动说明正在使用的设计能力，并按最短路线组合：

1. 读取项目、品牌、真实内容和现有设计系统。
2. 用内置 Taste Skill 从项目本身提炼并锁定一个主审美方向；Refero、本机参考和 UI/UX Pro Max 只补证据与细节。
3. 用提示词视觉体系建立构图、色彩、字体、材质、光线和一致性锚点。
4. 位图素材交给 ImageGen，准确文字与海报排版交给 Canvas，界面交给项目组件和前端实现。
5. 查看真实成图或渲染，检查文字、产品、品牌、层级、裁切、对比度和瑕疵后再交付。

完整能力地图见 [`skills/chanyong/references/design-family.md`](skills/chanyong/references/design-family.md)。Taste Skill v2 已作为独立成员内置并固定到已核查版本：你可以单独点名 Taste，也可以让 chanyong 自动调度。其他外部 Skill 可用时作为专业补充，不要求客户把所有第三方仓库全部安装。

## 自动能力大家庭

研究、策划、架构、开发、排错、重构、迁移、设计、动效、图片、视频、Word、PDF、PPT、Excel、逆向、审查和验收都由同一个入口识别。每个阶段只选一个主 Skill，最多加一个补充能力和一个验收能力；显式限定的小靠、Codex 审查、交接、多代理等不会被普通语义误触发。完整规则见 [`skills/chanyong/references/capability-family.md`](skills/chanyong/references/capability-family.md)。

个人记忆只有用户明确说“记住”才写入。同一台电脑上的 Codex、Claude Code、Grok 和不同项目默认共用用户级私有记忆；多台电脑各自配置同一个私人同步目录后共用。该目录同时提供 `documents/` 作为日后指定文档位置。公开安装包不含任何人的偏好、客户资料或备份内容；GitHub 上传默认关闭，只有明确要求且确认远端为私人仓库后才能执行。

安装完成后，对任意 Agent 直接说“把共享记忆目录设为 `<绝对路径>`”即可配置；无需记脚本命令。每台电脑只配置一次，并让同步盘或私人 Git 仓库在这些电脑上对应到该目录。单文件记忆不适合多机同时写：写入前先同步，出现冲突时保留双方并人工确认。更换目录不会覆盖目标已有记忆，恢复默认也不会删除旧数据。

给其他项目或其他 AI 的可复制安装指令：[`CHANYONG-INSTALL-PROMPT.txt`](CHANYONG-INSTALL-PROMPT.txt)。
