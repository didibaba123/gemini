# Ilya Sutskever 访谈：从规模化时代迈向研究时代

> **原视频**：[YouTube - Ilya Sutskever – We're moving from the age of scaling to the age of research](https://www.youtube.com/watch?v=aR20FWCCjAs)
> **播客**：Dwarkesh Patel 播客
> **发布时间**：2025年11月25日
> **嘉宾**：Ilya Sutskever（OpenAI 前首席科学家，现 Safe Superintelligence Inc. CEO）

---

## 概要

Ilya Sutskever 离开 OpenAI 后首次公开深度访谈。他与 Dwarkesh Patel 讨论了 AI 行业从"规模化时代"向"研究时代"的转变、当前大模型的泛化缺陷、强化学习的局限性、情感作为价值函数的类比，以及他创办的 Safe Superintelligence Inc.（SSI）的愿景与策略。

---

## 核心观点梳理

### 1. AI 发展的三个时代

| 时间段 | 时代 | 特征 |
|--------|------|------|
| 2012–2020 | 研究时代 | 以新想法和新架构驱动 |
| 2020–2025 | 规模化时代 | 靠堆算力和数据扩展模型 |
| 2026+ | 新研究时代 | 预训练数据有限，需要全新方法 |

- 规模化"吸走了房间里所有的氧气"，导致所有人都在做同样的事情
- 再增加 100 倍规模会有所改善，但**不会带来质变**
- **"公司的数量远远多于想法的数量"**

### 2. "锯齿状"泛化问题（Jagged Generalization）

当前模型存在一个悖论：
- 能通过律师资格考试、解决博士级物理题
- 却会在**基础任务上反复犯错**

> 例如：让模型修复代码中的 bug，它可能修好一个却引入新的；再让它修新的，又把原来的 bug 重新引入。

Sutskever 认为这种"锯齿状"表现是因为：
- 公司无意间将评测基准变成了 RL 训练环境
- 本质上是在"人类研究者层面的奖励黑客"

### 3. 强化学习（RL）的局限

- 目前公司在 RL 上花费的算力**已超过预训练**
- 长推理链的 rollout 消耗大量计算，但每次 rollout 产生的学习量相对较少
- RL 让模型变得"过于单一和狭隘聚焦"

### 4. 情感即价值函数

Sutskever 讲述了一个经典神经科学案例：

> 一位大脑情感中枢受损的患者仍能解谜题，却无法做任何决定——花几个小时都选不好一双袜子。

**启示**：生物情感充当"价值函数"，帮助高效引导决策——告诉你何时该停止思考并采取行动。

### 5. 人类泛化能力远超模型

- 模型的泛化能力**远不如人类**
- 人类在样本效率和鲁棒性上都表现更好
- 关键差异在于人类拥有评估中间步骤的"价值函数"
- Sutskever 声称知道一个**"缺失的机器学习原理"**可以解释这一差距，但拒绝透露——暗示这正是 SSI 在研究的方向

### 6. SSI（Safe Superintelligence Inc.）的战略

- 离开 OpenAI 后创办，已融资 **30 亿美元**，估值 320 亿美元
- 拥有"不同的技术路线"
- **不急于发布产品**，专注于构建超级智能
- 优先解决安全和对齐问题，再考虑商业化
- 但承认如果时间线比预期更长，可能不得不发布产品

> "我的思维方式有所转变：我现在更重视 AI 被渐进式地、提前地部署。"

#### 联合创始人离职事件

> "背景是我们正在以 320 亿美元估值融资，然后 Meta 提出收购，我拒绝了。但我的前联合创始人在某种意义上接受了。"

### 7. 时间线预测

- **5 到 20 年内**将出现具有人类级学习能力的系统
- 这样的系统将引向超级智能
- 超级智能应该被部署到世界中，在实践中学习——类似人类加入一个组织

### 8. 安全与对齐

- 第一个超级智能 AI 应该**"被对齐，并且以某种方式关心有感知能力的生命、关心人类"**
- 希望最强大的超级智能能够被"某种方式限制"，但**目前不知道如何做到**
- AI 应与"关爱有感知的生命"这一核心价值对齐

### 9. 经济影响

- 预期 AI 将带来**"快速"甚至"非常快速"**的经济增长
- 具体速度取决于不同地区设定的规则

---

## 关键金句

> "规模化吸走了房间里所有的氧气。"

> "公司的数量远远多于想法的数量。"

> "模型的泛化能力远不如人类。"

> "我现在更重视 AI 被渐进式地、提前地部署。"

---

## 社区反响

这次访谈在 AI 社区引发了广泛讨论。部分人认为内容"令人失望"，也有人认为这是年度最重要的 AI 对话之一。核心争议在于 Sutskever 是否真正掌握了突破性的新方法，还是仅仅在批评现有路径。

---

## 参考来源

- [Dwarkesh Podcast 原文](https://www.dwarkesh.com/p/ilya-sutskever-2)
- [EA Forum 访谈要点摘录](https://forum.effectivealtruism.org/posts/iuKa2iPg7vD9BdZna/highlights-from-ilya-sutskever-s-november-2025-interview)
- [Hacker News 讨论](https://news.ycombinator.com/item?id=46048125)
- [The Neuron 深度解读](https://www.theneuron.ai/explainer-articles/unpacking-dwarkeshs-ilya-sutskever-interview-on-agi-asi-and-how-to-build-both-safely)
- [Zvi Mowshowitz 评论](https://thezvi.substack.com/p/on-dwarkesh-patels-second-interview)

---

#AI #IlyaSutskever #SSI #超级智能 #AGI #深度学习 #强化学习 #Dwarkesh
