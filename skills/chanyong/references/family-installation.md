# Skill 大家庭安装与成员规则

`chanyong` 是唯一自动总控，但不是唯一可调用的 Skill。安装包中的每个一级目录都是独立成员：

```text
skills/
├── chanyong/                 自动总控，可显式调用
├── design-taste-frontend/    Taste，可显式单独调用
├── dongwo/                   懂我与私有可控记忆
├── chuangyi/                 创意师
├── tuijian/                  推荐师
├── mishu/                    秘书
├── xuanpin/                  选品大师
├── guihua/                   规划大师
├── beifen/                   备份大师
└── <future-skill>/            未来成员，同样独立
```

## 新成员必须满足

1. 放在 `skills/<skill-name>/`，含自己的 `SKILL.md` 和必要资源。
2. 可被用户按名称单独调用，完成自己的窄任务，不递归启动 chanyong。
3. 默认由 chanyong 自动选择时，专业成员不同时争抢全局隐式触发；需要时由 chanyong 读取其说明。
4. 在 [capability-family.md](capability-family.md) 登记触发场景、主职责、补充职责、停止条件和冲突关系。
5. 保留来源、固定提交、许可证和本地适配说明；来源不明或许可证不允许分发的内容不打包，只登记为可选外部能力。
6. 不因加入大家庭自动获得发布、生产写入、付费、登录、外发、多代理或后台运行权限。
7. 一条安装命令必须同时验证当前用户级和项目级安装；支持的 Agent 至少检查 Codex、Claude、Grok，Windows 同时检查 PowerShell 与 CMD。
8. 私人记忆、客户资料、备份内容和账号数据永不进入公开安装包；公开仓库只放方法、脚本和空结构。

## 自动与单独调用

- 用户只描述任务：chanyong 根据 [capability-family.md](capability-family.md) 选择最具体成员，首次进度只说明本次能力。
- 用户明确点名成员：直接使用该成员，chanyong 不改选另一个主 Skill；只有缺少必要前置、工具或权限时才说明。
- 用户点名 chanyong/常用：由总控选择最短完整路线。
- 一个阶段只允许一个主成员；辅助成员不得重新决定已经锁定的范围、架构或视觉方向。

安装器始终读取整个 `skills/` 目录，因此以后合规加入的新成员会随下一版安装包一起安装。已经安装的客户仍需运行更新命令取得新版本；GitHub 不能远程强制覆盖离线或受限设备。
