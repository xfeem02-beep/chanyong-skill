# chanyong

在 macOS 或 Windows 终端运行一条命令，把 `chanyong` 安装到本机 `skills` CLI 能检测到的 Agent：

```sh
npx -y https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz
```

需要 Node.js 22.20 或更高版本，不要求另外安装 Git。安装器关闭本次安装的匿名遥测，并同时尝试全局安装与当前项目安装。同一条命令始终获取最新稳定版，可以直接重复运行更新。

同一条命令适用于 macOS Terminal、Windows PowerShell 和 Windows CMD。安装器直接调用 Node.js，不经过 shell 拼接，因此支持 `C:\Program Files\...`、中文用户名和带空格的项目路径。

Skill 在每个新对话首次使用时只读检查公开 GitHub Release；仅在发现新版时提示这条更新命令，不后台静默覆盖，不上传项目、提示词或身份信息。
