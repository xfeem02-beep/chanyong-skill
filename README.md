# chanyong

在 macOS 或 Windows 终端运行一条命令，把 `chanyong` 安装到本机 `skills` CLI 能检测到的 Agent：

```sh
npx -y github:xfeem02-beep/chanyong-skill
```

需要 Node.js 22.20 或更高版本。安装器关闭本次安装的匿名遥测，并同时尝试全局安装与当前项目安装。

同一条命令适用于 macOS Terminal、Windows PowerShell 和 Windows CMD。安装器直接调用 Node.js，不经过 shell 拼接，因此支持 `C:\Program Files\...`、中文用户名和带空格的项目路径。
