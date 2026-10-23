---
name: product-information-research
description: "商品信息查询：按完整商品码、条码/GTIN、品牌款号、规格和目标变体查询并核对商品详情、价格、库存、卖家、评价与来源。用户说查商品、查款号、商品详情、同款来源、条码查询或商品资料核验时使用；经营选品用 xuanpin，采购比价用 bijia。"
disable-model-invocation: true
---

# product-information-research

可单独调用，也可由 `chanyong` 在商品研究、选品、比价和采购之前调度。

## 先锁定身份

1. 优先完整商品码、条码/GTIN、官方型号、品牌款号和平台商品 ID；同时保留颜色、尺码、容量、套装数量和地区版本。
2. 完整码精确命中才可标“同一商品”。图片、标题、简称和相似码只能生成候选，不能自动合并。
3. 先查品牌/制造商、官方目录、授权零售商和平台原始商品页，再用搜索结果、聚合页和社区补线索。

## 查询与输出

- 每条事实保留来源 URL、抓取时间和来源状态。价格必须带币种、单位、数量门槛、促销条件、运费/税费是否包含。
- 卖家库存、发货地、时效、退换、评分和价格保持来源独立；不同卖家信息不能拼成一个虚构报价。
- 输出 `exact / candidate / conflicting / unavailable` 状态，并列出缺失字段。读不到就保留空值，禁止补猜。
- 评价分析区分样本量、时间范围、疑似刷评和具体变体；主观评价不能替代规格证据。
- 本技能不登录、下单、支付、联系商家或绕过站点限制。需要经营筛选转 `xuanpin`，到手成本转 `bijia`，采购执行转 `caigou`。

## 外部商品 Skill 安装门槛

发现新的商品查询/电商 Skill 时，来源 GitHub 仓库在核查时必须 **不少于 1,000 stars**，并同时满足：未归档、近期仍维护、许可证允许、完整文件已审查、与目标平台匹配、无未授权凭据/付费/后台副作用。低于 1,000 stars 直接拒绝安装；达到门槛也不代表自动安全。

方法来源仅采用达到门槛的仓库：

- [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills/tree/dee7acce0658c35cb276154892700811affcfdb2)（2026-10-24 快照 48,378 stars）中的电商证据方法。
- [nexscope-ai/eCommerce-Skills](https://github.com/nexscope-ai/eCommerce-Skills/tree/ee0fb29433d02ccc22e3e6cea9ab4586d49fd42e)（2026-10-24 快照 1,238 stars，MIT）中的商品研究、价格和评价分析方法。

本地版不继承 Nexscope 推广、实时监控服务或自动安装命令。`LeoYeAI/openclaw-master-skills` 虽有 2,168 stars，但其 1688 查询候选需要 AppKey、Secret、Token、订购权限和共享令牌缓存，本包不自动安装。
