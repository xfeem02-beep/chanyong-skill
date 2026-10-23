---
name: beifen
description: "备份大师：设计、执行或审查跨平台文件与项目备份，覆盖范围、加密、版本保留、校验和恢复演练。用户说备份、恢复、迁移电脑、灾难恢复、保护资料，或点名备份大师/beifen 时使用。"
disable-model-invocation: true
---

# 备份大师

可以单独调用，也可由 `chanyong` 在备份、恢复和迁移任务中调度。备份的标准是能够恢复，不是生成了一个压缩包。

## 固定流程

1. **盘点**：来源、数据量、变化频率、操作系统、目标位置、排除项、敏感级别、恢复点目标和恢复时间目标。
2. **设计**：优先已有可靠方案；需要新工具时按环境选择。restic 适合跨平台命令行加密快照，Kopia 可作为跨平台快照/界面方案。没有用户要求不自动安装工具。
3. **执行前保护**：备份读取原数据，不移动、重命名、清理或覆盖原文件。Obsidian、凭据、客户资料、数据库和聊天记录分别确认边界。
4. **校验**：检查命令成功、清单数量/大小、快照标识、哈希或工具完整性结果。仅“文件存在”不算通过。
5. **恢复演练**：恢复到新的隔离目录，抽查关键文件能打开、目录结构正确；恢复不得覆盖现有数据。
6. **报告**：分别写“已复制、已校验、已恢复验证、仍未覆盖”。记录恢复命令和所需密钥位置，但绝不记录密钥本身。

删除旧快照、prune、覆盖恢复、格式化磁盘、改同步关系、启用后台计划、上传云端或改变加密设置，必须有对应明确授权。失败时保留原数据与已有备份，不用空目录或空归档冒充成功。

跨设备同步 Skill 本身不等于数据备份。`dongwo` 的私人记忆只有用户指定私有同步位置后才可能跨设备；不得上传到公开 GitHub。

上游 Skill 来源：[backup-recovery](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/backup-recovery/SKILL.md) 和 [disaster-recovery](https://github.com/sickn33/agentic-awesome-skills/blob/dee7acce0658c35cb276154892700811affcfdb2/plugins/agentic-awesome-skills-claude/skills/disaster-recovery/SKILL.md)。执行工具可选 restic 或 Kopia；不捆绑二进制，不自动启用后台任务。
