# 安装

在 macOS 或 Windows 终端运行：

```text
npx -y https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz
```

它先安装到所有支持全局技能的 Agent，再为当前项目安装到 `skills` CLI 支持的全部 Agent；不支持全局技能的宿主仍可使用项目副本。安装器关闭本次安装的匿名遥测。需要 Node.js 22.20 或更高版本。

同一条命令始终下载最新稳定版，可直接重复运行完成更新。Skill 首次使用时只读检查公开 Release 版本；发现新版会提示这条命令，不会后台静默覆盖，也不会上传项目或提示词。
