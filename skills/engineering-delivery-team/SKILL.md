---
name: engineering-delivery-team
description: "工程交付组合：读取现有项目，按需完成架构、接口、兼容、代码实现、Bug 定位修复、安全检查和测试验收。用户要整体开发、系统改造、跨模块修复、从架构到上线验收时使用；明确小改直接用对应单 Skill。"
disable-model-invocation: true
---

# engineering-delivery-team

这是架构、开发、修复与测试的组合入口。可单独指定；由 `chanyong` 选择时，它作为一个 Team 持有工程交付，不重复开启多个总控。

## 内部路线

1. 先读项目规则、入口、调用方、数据流、现有测试和不可破坏约束，只建立当前任务需要的 Project Context。
2. 跨系统、权限、数据合同、迁移或关键取舍才用 `jiagou`；简单修改不做多余架构。
3. 实现由 `biancheng` 或复杂任务的 `gaojigongchengshi` 负责；接口用 `api`，旧系统迁移用 `jianrong`。
4. 故障先 `zhaobug` 复现定位，再由 `xiubug` 最小修复；不借修 Bug 重构无关代码。
5. `quality-testing-team` 作为独立验收；存在真实攻击面时补 `anquan`。只修验收失败项并停止扩展。

## 默认显示

```text
engineering-delivery-team（工程交付组合）
负责：必要架构、开发/修复、兼容接口、安全与测试验收。
本次重点：<本次实际命中的部分>
```

读取和开发不自动授权部署、生产写入、迁移真实数据、付费服务或外部联系。没有运行证据不能说通过。

## 方法来源

- [obra/superpowers](https://github.com/obra/superpowers/tree/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b)（MIT；计划、调试、测试与完成前验证）
- [github/awesome-copilot](https://github.com/github/awesome-copilot/tree/d85f762d6e521abf5fe16703946e9b38adc42da7)（MIT；架构、接口、Bug、安全与兼容方法）

本地版只组合已安装成员，不继承全局钩子、自动代理、部署或外部写入。
