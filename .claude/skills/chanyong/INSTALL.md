# 安装

在 macOS 或 Windows 终端运行：

```text
node -e "fetch('https://raw.githubusercontent.com/xfeem02-beep/chanyong-skill/main/scripts/bootstrap.cjs?'+Date.now()).then(r=>r.ok?r.text():Promise.reject(Error('HTTP '+r.status))).then(eval).catch(e=>{console.error(e.message);process.exit(1)})"
```

它把 `skills/` 中的全部家庭成员安装到当前用户和当前项目的 Codex 通用 `.agents`、Claude Code 与 Grok 入口。兼容标准 `.agents/skills` 的其他 Agent 可以直接共用，不向几十个未使用目录重复复制。安装器关闭本次安装的匿名遥测。需要 Node.js 22.20 或更高版本。

同一条命令始终下载最新稳定版，并为下载加入一次性时间参数绕过旧 `npx` 缓存，可直接重复运行完成更新。Skill 首次使用时只读检查公开 Release 版本；发现新版会提示这条命令，不会后台静默覆盖，也不会上传项目或提示词。
