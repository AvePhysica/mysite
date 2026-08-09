---
title: "第八讲：强化学习 I——MDP 与动态规划"
date: 2026-08-09
description: "从智能体—环境交互出发，整理 MRP、MDP、价值函数、Bellman 方程、策略迭代与价值迭代。"
tags:
  - Machine Learning
  - Reinforcement Learning
  - Dynamic Programming
---

> 本文由 GPT-5.6-sol 完成。

监督学习的样本通常已经给定，而强化学习中的数据来自智能体与环境的连续交互。一个动作不仅带来即时奖励，还会改变下一状态，进而影响未来能够获得的全部奖励。

因此强化学习的核心不是孤立地预测标签，而是处理**序贯决策与延迟回报**。本讲先假设环境模型已知，建立 Markov 决策过程，并用动态规划求解最优策略；下一讲再去掉“模型已知”这一条件。

## 一、智能体与环境

在时间步 $t$，智能体观察状态 $S_t$，依据策略选择动作 $A_t$。环境返回奖励 $R_{t+1}$ 并转移到状态 $S_{t+1}$：

$$
S_t\xrightarrow{A_t}
(R_{t+1},S_{t+1}).
$$

强化学习问题通常包含三种对象：

- **策略** $\pi$：在每个状态如何选择动作；
- **价值函数**：某状态或状态—动作对的长期收益；
- **环境模型**：动作之后的状态转移与奖励规律。

模型可以未知，但策略和价值是学习过程必须回答的问题。奖励定义尤其关键：智能体只会优化它收到的信号，而不会自动理解设计者真正想要什么。

## 二、Markov 性与 Markov 过程

### 1. Markov 性

若当前状态已经包含预测未来所需的全部信息，则

$$
\Pr(S_{t+1}=s'\mid S_t,A_t,S_{t-1},A_{t-1},\ldots)
=\Pr(S_{t+1}=s'\mid S_t,A_t).
$$

这称为 Markov 性。它不是说历史不存在，而是说历史对未来的影响已经被当前状态充分概括。若状态表示遗漏关键信息，问题在这个表示下便不是 Markov 的。

### 2. Markov 链

没有动作时，有限状态 Markov 链由状态集合 $\mathcal S$ 与转移矩阵 $P$ 描述：

$$
P_{ss'}=\Pr(S_{t+1}=s'\mid S_t=s),
\qquad
\sum_{s'}P_{ss'}=1.
$$

状态分布以

$$
\boldsymbol p_{t+1}^\top
=\boldsymbol p_t^\top P
$$

演化。强化学习会在这个随机状态演化上进一步加入奖励与可控动作。

## 三、Markov 奖励过程

Markov Reward Process（MRP）可写成四元组

$$
\langle\mathcal S,P,R,\gamma\rangle,
$$

其中 $R_s=\mathbb E[R_{t+1}\mid S_t=s]$，折扣因子 $\gamma\in[0,1)$。

### 1. 回报

从时刻 $t$ 开始的折扣回报定义为

$$
G_t
=R_{t+1}+\gamma R_{t+2}
+\gamma^2R_{t+3}+\cdots
=\sum_{k=0}^{\infty}\gamma^kR_{t+k+1}.
$$

$\gamma$ 同时承担几种作用：表达对近期收益的偏好，使无限时域回报在有界奖励下收敛，并影响价值传播的时间尺度。有限回合任务即使可以取 $\gamma=1$，也必须保证回合终止与回报有限。

### 2. 状态价值与 Bellman 方程

状态价值是条件期望

$$
v(s)=\mathbb E[G_t\mid S_t=s].
$$

利用

$$
G_t=R_{t+1}+\gamma G_{t+1},
$$

得到 Bellman 方程

$$
v(s)=R_s+
\gamma\sum_{s'}P_{ss'}v(s').
$$

矩阵形式为

$$
\boldsymbol v=\boldsymbol R+\gamma P\boldsymbol v,
$$

若状态数有限，可直接解得

$$
\boldsymbol v=(I-\gamma P)^{-1}\boldsymbol R.
$$

直接求逆的代价随状态数迅速增长；动态规划则通过反复应用 Bellman 更新迭代逼近解。

## 四、Markov 决策过程

Markov Decision Process（MDP）加入动作，写成

$$
\langle\mathcal S,\mathcal A,P,R,\gamma\rangle.
$$

转移与期望奖励可以写为

$$
P_{ss'}^a
=\Pr(S_{t+1}=s'\mid S_t=s,A_t=a),
$$

$$
R_s^a
=\mathbb E[R_{t+1}\mid S_t=s,A_t=a].
$$

### 1. 策略

随机策略定义为

$$
\pi(a\mid s)=\Pr(A_t=a\mid S_t=s),
\qquad
\sum_a\pi(a\mid s)=1.
$$

固定策略 $\pi$ 后，MDP 被“平均”为一个 MRP：

$$
P_{ss'}^\pi
=\sum_a\pi(a\mid s)P_{ss'}^a,
\qquad
R_s^\pi
=\sum_a\pi(a\mid s)R_s^a.
$$

所以策略评估本质上是在计算这个诱导 MRP 的价值。

### 2. 状态价值与动作价值

$$
v_\pi(s)
=\mathbb E_\pi[G_t\mid S_t=s],
$$

$$
q_\pi(s,a)
=\mathbb E_\pi[G_t\mid S_t=s,A_t=a].
$$

两者关系为

$$
v_\pi(s)=\sum_a\pi(a\mid s)q_\pi(s,a),
$$

以及

$$
q_\pi(s,a)
=R_s^a+
\gamma\sum_{s'}P_{ss'}^a v_\pi(s').
$$

## 五、Bellman 期望方程

将第一步动作和下一状态展开：

$$
v_\pi(s)
=\sum_a\pi(a\mid s)
\left[
R_s^a+gamma\sum_{s'}P_{ss'}^a v_\pi(s')
\right].
$$

动作价值满足

$$
q_\pi(s,a)
=R_s^a+gamma\sum_{s'}P_{ss'}^a
\sum_{a'}\pi(a'\mid s')q_\pi(s',a').
$$

Bellman 方程的意义不是简单的递归记号，而是把无限时域回报拆成“一步奖励 + 下一状态的价值”。强化学习的大多数算法，都可以看成对这个等式的采样、逼近或优化。

## 六、最优价值与 Bellman 最优方程

若对所有状态都有 $v_\pi(s)\ge v_{\pi'}(s)$，则称策略 $\pi$ 不劣于 $\pi'$。最优状态价值和动作价值定义为

$$
v_*(s)=\max_\pi v_\pi(s),
\qquad
q_*(s,a)=\max_\pi q_\pi(s,a).
$$

Bellman 最优方程为

$$
v_*(s)
=\max_a\left[
R_s^a+gamma\sum_{s'}P_{ss'}^a v_*(s')
\right],
$$

$$
q_*(s,a)
=R_s^a+gamma\sum_{s'}P_{ss'}^a
\max_{a'}q_*(s',a').
$$

与固定策略下的线性 Bellman 方程不同，最大值算子使最优方程成为非线性方程。不过一旦得到 $q_*$，最优策略可以直接贪心选取：

$$
\pi_*(s)\in\arg\max_a q_*(s,a).
$$

有限折扣 MDP 中，至少存在一个确定性平稳最优策略；不需要记住完整历史，也不必随时间改变规则。

## 七、动态规划的适用条件

动态规划利用 Bellman 方程把大问题分成重叠子问题。经典方法假设：

- 状态与动作空间足够小，可以枚举；
- 转移概率 $P$ 与奖励模型 $R$ 已知；
- 可以对下一状态做完整期望备份。

这就是所谓 full backup。它给出精确的规划基线，却在大状态空间或未知环境中不可直接使用。后续的 Monte Carlo 与 TD 方法会用样本备份替代模型期望。

## 八、策略迭代

策略迭代在“评估当前策略”和“改进当前策略”之间循环。

### 1. 策略评估

固定 $\pi$，迭代更新

$$
v_{k+1}(s)
=\sum_a\pi(a\mid s)
\left[
R_s^a+gamma\sum_{s'}P_{ss'}^a v_k(s')
\right].
$$

定义 Bellman 期望算子 $T^\pi$，则 $v_{k+1}=T^\pi v_k$。在无穷范数下它是 $\gamma$-压缩映射：

$$
\|T^\pi u-T^\pi v\|_\infty
\le\gamma\|u-v\|_\infty.
$$

因此它有唯一不动点 $v_\pi$，从任意初值迭代都收敛。

### 2. 策略改进

根据当前价值做一步前瞻，选择

$$
\pi'(s)
\in\arg\max_a
\left[
R_s^a+gamma\sum_{s'}P_{ss'}^a v_\pi(s')
\right].
$$

策略改进定理保证

$$
v_{\pi'}(s)\ge v_\pi(s),
\qquad \forall s.
$$

若策略不再变化，它已经满足 Bellman 最优条件。有限 MDP 中策略数量有限，因此精确策略迭代会在有限次改进后停止。

### 3. 截断评估

不必每次把 $v_\pi$ 算到完全收敛再改进策略。只做有限轮评估便切换，也能形成广义策略迭代（Generalized Policy Iteration, GPI）。实际强化学习中，价值估计与策略改进往往就是同时、近似地进行。

## 九、价值迭代

价值迭代直接应用 Bellman 最优算子：

$$
v_{k+1}(s)
=\max_a
\left[
R_s^a+gamma\sum_{s'}P_{ss'}^a v_k(s')
\right].
$$

记右侧为 $(T_*v_k)(s)$。同样有

$$
\|T_*u-T_*v\|_\infty
\le\gamma\|u-v\|_\infty,
$$

所以 $T_*$ 具有唯一不动点 $v_*$，且

$$
v_k\longrightarrow v_*.
$$

得到近似最优价值后，再提取贪心策略。价值迭代可视为策略迭代的极端形式：每次只做一次截断评估就立刻改进。

### 策略迭代与价值迭代

| 方法 | 每轮主要工作 | 特点 |
| --- | --- | --- |
| 策略迭代 | 多次评估固定策略，再贪心改进 | 外层轮次通常少，单轮较重 |
| 价值迭代 | 每次直接做最优 Bellman 备份 | 单轮简单，可能需要更多轮 |

两者都依赖动态规划的最优性原理：一个最优策略的剩余决策，从任何可达状态开始也必须对那个子问题最优。

## 十、小结

本讲建立了强化学习的数学骨架：

$$
\text{Markov 性}
\longrightarrow
\text{MRP 与回报}
\longrightarrow
\text{MDP 与策略}
\longrightarrow
\text{Bellman 方程}
\longrightarrow
\text{动态规划求最优策略}.
$$

Bellman 方程把长期决策压缩为局部一致性条件；策略迭代在评估与改进间往返，价值迭代则直接逼近最优不动点。它们解决的是“模型已知时如何规划”，也为模型未知时的采样学习提供了模板。
