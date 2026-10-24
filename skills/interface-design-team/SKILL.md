---
name: interface-design-team
description: "界面组：为网站、后台、App、小程序和 Dashboard 读取现有项目，确定一个视觉方向，整理设计系统与 UX 文案，并按需实现和复核。用户要求新界面、页面改版、交互流程或设计系统落地时使用；海报和纯图片转 visual-design-team。"
disable-model-invocation: true
---

# interface-design-team

这是设计家族的第一套打法，可单独点名，也可由 `chanyong` 自动选择。它负责界面从方向到真实页面，不同时启动全部设计 Skill。

## 组合顺序

1. 读真实项目、页面、业务流程、组件和设计规范；用户要求与项目现有系统优先。
2. 由 `design-taste-frontend` 形成或提纯一个主方向。需要外部案例时再用 `refero-design`，缺具体 UI 规则时再用 `ui-ux-pro-max`。
3. 只有涉及按钮、提示、错误、空状态或引导文字时才用 `ux-copy` 方法；只有组件、Token、状态不统一时才用 `design-system` 方法。
4. 用户要求实现时，用项目组件或 `frontend-design` 落成真实响应式界面；只要方案时不改代码。
5. 查看真实页面与多尺寸截图，检查业务流程、层级、响应式、交互状态、文案和可访问性。

## 停止规则

- 每阶段一个主能力。Taste 决定主方向，其他能力只补证据、细节或实现。
- 已有明确设计系统时不重新发明主题；局部修改不扩成全站改版。
- 可选外部 Skill 不可用时按本技能内置步骤继续，并说明未调用该 Skill。
- 发布、生产写入、登录和外发沿用现有授权。

方法参考内置 Taste Skill v2，以及已核查的 Anthropic Design Plugin、Refero、UI/UX Pro Max 与 frontend-design；不复制连接器、命令或平台专属流程。
