# chanyong

在 macOS 或 Windows 终端运行一条命令，把 `chanyong` 安装到本机 `skills` CLI 能检测到的 Agent：

```sh
npx -y https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz
```

需要 Node.js 22.20 或更高版本，不要求另外安装 Git。安装器关闭本次安装的匿名遥测，并同时尝试全局安装与当前项目安装。同一条命令始终获取最新稳定版，可以直接重复运行更新。

同一条命令适用于 macOS Terminal、Windows PowerShell 和 Windows CMD。安装器直接调用 Node.js，不经过 shell 拼接，因此支持 `C:\Program Files\...`、中文用户名和带空格的项目路径。

Skill 在每个新对话首次使用时只读检查公开 GitHub Release；仅在发现新版时提示这条更新命令，不后台静默覆盖，不上传项目、提示词或身份信息。

## 自动设计家族

不需要输入 `/常用` 或 `/设计师`。自然语言命中页面、海报、品牌、效果图、产品场景图或图像提示词时，`chanyong` 自动说明正在使用的设计能力，并按最短路线组合：

1. 读取项目、品牌、真实内容和现有设计系统。
2. 用内置 Taste Skill 从项目本身提炼并锁定一个主审美方向；Refero、本机参考和 UI/UX Pro Max 只补证据与细节。
3. 用提示词视觉体系建立构图、色彩、字体、材质、光线和一致性锚点。
4. 位图素材交给 ImageGen，准确文字与海报排版交给 Canvas，界面交给项目组件和前端实现。
5. 查看真实成图或渲染，检查文字、产品、品牌、层级、裁切、对比度和瑕疵后再交付。

完整能力地图见 [`skills/chanyong/references/design-family.md`](skills/chanyong/references/design-family.md)。Taste Skill v2 已内置并固定到已核查版本；其他外部 Skill 可用时作为专业补充，不要求客户把所有第三方仓库全部安装。
