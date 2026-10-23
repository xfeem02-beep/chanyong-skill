# chanyong

在 macOS 或 Windows 终端运行一条命令，把 `chanyong` 能力大家庭安装到本机 `skills` CLI 能检测到的 Agent：

```sh
npx -y https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz
```

需要 Node.js 22.20 或更高版本，不要求另外安装 Git。安装器关闭本次安装的匿名遥测，并同时尝试全局安装与当前项目安装。同一条命令始终获取最新稳定版，可以直接重复运行更新。

同一条命令适用于 macOS Terminal、Windows PowerShell 和 Windows CMD。安装器直接调用 Node.js，不经过 shell 拼接，因此支持 `C:\Program Files\...`、中文用户名和带空格的项目路径。

Skill 在每个新对话首次使用时只读检查公开 GitHub Release；仅在发现新版时提示这条更新命令，不后台静默覆盖，不上传项目、提示词或身份信息。

## 一个总控，也可单独使用

安装包按 `skills/<成员名>/` 组织。`chanyong` 是唯一自动总控；每个内置专业成员仍有自己的 `SKILL.md`，可以按名称单独调用。以后加入 `skills/` 的合规成员会随同一条安装命令一起安装。成员规范见 [`family-installation.md`](skills/chanyong/references/family-installation.md)。

当前独立成员：`chanyong`、`design-taste-frontend`、`dongwo`（懂我）、`chuangyi`（创意师）、`tuijian`（推荐师）、`mishu`（秘书）、`xuanpin`（选品大师）、`guihua`（规划大师）、`beifen`（备份大师）。用户可以直接点名任一成员；未点名时由 chanyong 自动选择。

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

个人记忆默认只在当前电脑的私有目录保存，而且只有用户明确说“记住”才写入。公开 GitHub 安装包不包含任何人的偏好、客户资料或备份内容；跨设备记忆同步需要用户自己指定私有同步位置。

给其他项目或其他 AI 的可复制安装指令：[`CHANYONG-INSTALL-PROMPT.txt`](CHANYONG-INSTALL-PROMPT.txt)。
