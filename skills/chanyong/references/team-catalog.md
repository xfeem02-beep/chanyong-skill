# Team 选择目录

用户说“搜索 chanyong”“常用有哪些组合”“给我选 Team”“这个 Team 做什么”时读取。先展示 Team，不倾倒所有单 Skill；用户说“查看单 Skill”时再按能力组展示成员。

安装清单按 `chanyong` → 九个 Team → 单独 Skill 排列。Codex `$` 选择器按英文 Skill 名排序；手机端只显示末尾几项时可直接点 `$zz-chanyong` 进入常用总控。

| 中文名 | 英文 Skill 名 | 一句话用途 |
|---|---|---|
| 策划组 | `project-strategy-team` | 研究、策划、规划、拆解 |
| 工程组 | `engineering-delivery-team` | 架构、开发、修复、验收 |
| 界面组 | `interface-design-team` | 网站、后台、App 界面 |
| 出图组 | `visual-design-team` | 海报、封面、品牌素材 |
| 审查组 | `design-review-team` | 设计挑刺、统一和交接 |
| 运营组 | `ecommerce-operations-team` | 商品、库存、订单、售后 |
| 推广组 | `growth-marketing-team` | SEO、内容、广告、增长 |
| 测试组 | `quality-testing-team` | 回归、兼容和上线验收 |
| 合规组 | `commerce-compliance-team` | 隐私、宣传、支付、跨境 |

中文短名是自然语言别名。用户说“运营组，帮我……”等同于选择对应英文 Team；原生 Skill 搜索和 `$` 调用仍使用英文 Skill 名。不要声称客户端已经注册中文斜杠命令。

`deep-research-mode` 是可单独调用的深度研究 Skill，也会被 `project-strategy-team` 在复杂研究阶段按需使用；它不是第二个总控。

## 只有三种使用方式

### AUTO 全自动

用户只说目标。`chanyong` 自动选 Team 或单 Skill，并在执行前显示：

```text
AUTO｜推广组｜growth-marketing-team
SEO、内容、广告、增长；本次重点：SEO 与商品内容。
```

### TEAM 指定组合

用户点名一个 `*-team`。保持该 Team 为主组合，只在它内部选必要方法；需要跨 Team 时先说明理由，用户说“不加”就跳过。

```text
TEAM｜工程组｜engineering-delivery-team
架构、开发、修复、验收。
```

### SOLO 单独 Skill

用户说“只用 X”“X 单独处理”或 `--solo`。只运行该 Skill，不增加 Team、辅助或验收者；能力不足时说明限制。

```text
SOLO｜深度研究｜deep-research-mode
多来源检索、冲突核验和带引用报告。
```

用户只是查看目录时不执行任务。用户没有指定时默认 AUTO，不要求先选。
