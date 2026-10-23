---
name: dongwo
description: "懂我：研究用户明确表达的偏好、选择方式、工作习惯和创意取向，并在用户明确要求记住时写入跨 Agent、跨项目的私有可修改记忆。用户说懂我、研究我、记住、共享记忆、以后按这个方式、查看/修改/忘记偏好时使用；普通对话不擅自持久化。"
disable-model-invocation: true
---

# 懂我：个人偏好与可控记忆

可以单独调用，也可由 `chanyong` 在推荐、规划、设计、选品或秘书任务前调用。目标是减少用户重复解释，同时让用户始终能查看、纠正、删除和导出自己的记忆。

## 三种信息严格分开

- **明确事实**：用户亲自说明、可直接复述的稳定信息。
- **明确偏好**：用户亲自表达的喜欢、不喜欢、常用方式、选择标准和长期要求。
- **工作假设**：从一次选择或行为推测出的可能倾向。只在当前任务使用，标明“推测”，不得保存。

## 记忆规则

1. 只有用户直接说“记住、以后都这样、保存这个偏好、修改记忆、忘记”等明确请求，才持久化。
2. 保存前把内容压成一条可执行偏好：适用场景、选择、必要例外。不要保存整段聊天。
3. 密码、令牌、密钥、验证码、客户原始资料、登录文件和付款信息永不保存。
4. 用户纠正时更新同一条记录，不保留会继续误导的旧结论；用户要求忘记时立即删除对应记录并报告结果。
5. 使用记忆前只取当前任务相关条目。用户本次要求、项目规则和最新事实始终高于旧偏好。
6. 推荐或创作结果要说明用了哪些已确认偏好；不把记忆当作客观事实来源。

## 私有存储

优先使用宿主提供且用户可管理的私有记忆。没有宿主记忆时，可运行 `scripts/memory.mjs`：

```text
node <skill>/scripts/memory.mjs location
node <skill>/scripts/memory.mjs status
node <skill>/scripts/memory.mjs list
node <skill>/scripts/memory.mjs save     # 从 stdin 读取 JSON
node <skill>/scripts/memory.mjs forget <id>
```

默认写入当前用户目录的 `.chanyong/private-memory/profile.json`。Codex、Claude Code、Grok 和不同项目安装的是同一脚本，都读取这个用户级位置，因此同一台电脑天然共用一份记忆。

多台电脑共享时，每台电脑各运行一次：

```text
node <skill>/scripts/memory.mjs configure <私人同步目录的绝对路径>
```

这个目录会包含 `private-memory/profile.json` 和 `documents/`。`configure` 在目标没有记忆文件时复制本机已有记忆，不覆盖目标已有记忆；`use-default` 只取消配置，不删除任何数据。可以用 `documents` 取得指定文档目录。多机同时写同一文件时可能冲突，写前先完成同步；发生冲突必须保留双方并由人确认，不能静默取新覆盖旧。

私人同步目录可以由用户自己的同步盘或私人 Git 仓库承载。上传 GitHub 前必须明确授权并确认仓库是 **private**，只提交 `private-memory/` 与 `documents/` 中已检查脱敏的内容；公开仓库、来源不明远端、冲突未解决或疑似密钥时停止。技能不自动建仓库、不后台拉取或推送。

`save` 输入示例：

```json
{"category":"interaction","key":"answer_style","value":"先给结论，再给必要证据；不用长命令","scope":"global"}
```

每次保存、修改或删除后，告诉用户记录了什么和实际位置。无法访问存储时如实说未保存。

## 研究用户

用户要求“研究我”时，整理：已确认目标、偏好、反感项、决策标准、工作节奏、常用工具、创意倾向和仍是未知的内容。证据只来自用户明确表达或用户授权读取的个人资料。输出“已确认 / 本次观察 / 待确认”，不得做心理诊断、人格定型或从敏感资料推断身份。

上游 Skill 来源：[agent-memory-discipline](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/agent-memory-discipline/SKILL.md) 和 [memory-merger](https://github.com/github/awesome-copilot/blob/d85f762d6e521abf5fe16703946e9b38adc42da7/skills/memory-merger/SKILL.md)。只吸收可控记忆、去重、更新和检索方法；不引入后台 Hooks、数据库服务或云上传。
