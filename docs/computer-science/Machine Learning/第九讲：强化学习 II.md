---
title: "第九讲：强化学习 II——无模型价值学习"
date: 2026-08-09
description: "从 Monte Carlo 与时序差分学习出发，整理 TD(λ)、Sarsa、Q-learning、随机逼近、值函数近似与致命三元组。"
tags:
  - Machine Learning
  - Reinforcement Learning
  - Temporal Difference
---

> 本文由 GPT-5.6-sol 完成。

上一讲的动态规划假设转移概率和奖励模型已知，因此可以对所有下一状态求期望。现实中我们往往只有交互得到的轨迹，既不知道 $P$，也无法枚举完整环境。

无模型强化学习的任务是用样本替代模型。Monte Carlo 等一局结束后使用真实回报；时序差分一边采样，一边用当前价值估计进行自举；控制算法再把价值估计与策略改进结合起来。

## 一、无模型预测与控制

给定策略 $\pi$，**预测**问题是估计 $v_\pi$ 或 $q_\pi$；**控制**问题则是寻找最优策略。两者通过广义策略迭代连接：

$$
\text{策略评估}
\rightleftarrows
\text{策略改进}.
$$

无模型方法不学习显式转移概率，但仍可利用实际转移样本

$$
(S_t,A_t,R_{t+1},S_{t+1}).
$$

“无模型”不是没有环境，也不是不使用状态转移，而是不先估计一个可供规划的 $\hat P$ 与 $\hat R$。

## 二、Monte Carlo 方法

### 1. 用完整回报估计价值

一条回合轨迹为

$$
S_0,A_0,R_1,S_1,A_1,R_2,\ldots,S_T.
$$

从时刻 $t$ 的实际回报

$$
G_t=\sum_{k=0}^{T-t-1}
\gamma^kR_{t+k+1}
$$

是 $v_\pi(S_t)$ 的样本。增量均值更新为

$$
V(S_t)
\leftarrow
V(S_t)+\alpha_t
[G_t-V(S_t)].
$$

若 $\alpha_t=1/N(S_t)$，它就是所有已观察回报的样本平均。

### 2. First-visit 与 Every-visit

- First-visit MC：一回合中只用状态第一次出现后的回报；
- Every-visit MC：使用该状态每次出现后的回报。

在适当条件下两者都能收敛。MC 目标不依赖当前价值估计，因此没有自举偏差；但必须等回合结束，且完整回报受后续全部随机奖励影响，方差通常较大。

### 3. Monte Carlo 控制

若已估计 $Q(s,a)$，可对其贪心改进策略。但纯贪心会停止探索，因此常使用 $\varepsilon$-greedy。先从并列最优动作中选定一个 $a^*$，再令

$$
\pi(a\mid s)=
\begin{cases}
1-\varepsilon+\varepsilon/|\mathcal A(s)|,
&a=a^*,\\
\varepsilon/|\mathcal A(s)|,&\text{其他动作}.
\end{cases}
$$

若探索率逐渐趋于零，同时每个状态—动作对仍被无限访问，就得到 GLIE（Greedy in the Limit with Infinite Exploration）的典型条件：有限时间保持探索，极限时趋向贪心。

## 三、时序差分学习

### 1. TD(0)

TD 不等待回合结束，而使用一步目标

$$
Y_t^{\mathrm{TD}}
=R_{t+1}+\gamma V(S_{t+1}).
$$

更新为

$$
V(S_t)
\leftarrow
V(S_t)+\alpha_t\delta_t,
$$

其中 TD 误差

$$
\delta_t
=R_{t+1}+\gamma V(S_{t+1})-V(S_t).
$$

下一状态价值 $V(S_{t+1})$ 本身仍是估计值，这种用估计更新估计的方式称为 **bootstrapping（自举）**。

### 2. MC 与 TD 的偏差—方差权衡

MC 目标 $G_t$ 在策略固定时是价值的无偏样本，但方差较高，而且只能用于回合式任务。TD 目标引入当前估计，通常有偏，却只依赖一步随机性、方差更低，并可在线用于持续任务。

| 方法 | 更新目标 | 自举 | 等待回合结束 |
| --- | --- | --- | --- |
| Monte Carlo | 完整回报 $G_t$ | 否 | 是 |
| TD(0) | $R_{t+1}+\gamma V(S_{t+1})$ | 是 | 否 |

不能简单断言哪一个总是更好。目标相关性、环境随机性、初始估计与函数近似都会改变实际表现。

## 四、多步回报与 TD(λ)

### 1. $n$ 步回报

一步 TD 与完整 MC 之间有一条连续谱。$n$ 步回报为

$$
G_t^{(n)}
=R_{t+1}+\gamma R_{t+2}
+\cdots+\gamma^{n-1}R_{t+n}
+\gamma^nV(S_{t+n}).
$$

$n=1$ 是 TD(0)；当 $n$ 延伸到回合结束时，变成 MC。较大的 $n$ 减少自举、增加采样方差，较小的 $n$ 则相反。

### 2. $\lambda$-return

TD($\lambda$) 对不同步数回报做指数加权：

$$
G_t^\lambda
=(1-\lambda)
\sum_{n=1}^{\infty}
\lambda^{n-1}G_t^{(n)},
\qquad 0\le\lambda<1.
$$

在回合式任务中需把终止回报的剩余权重计入。$\lambda=0$ 接近一步 TD，$\lambda\to1$ 接近 MC。

### 3. 资格迹

前向视角需要等待未来的多步奖励。后向视角维护资格迹

$$
e_t(s)=\gamma\lambda e_{t-1}(s)
+\mathbb I(S_t=s),
$$

并令

$$
V(s)\leftarrow V(s)+\alpha\delta_t e_t(s).
$$

一次 TD 误差会沿着最近访问过的状态向后分配信用；越久远的状态，资格迹衰减得越多。这正是延迟奖励下的信用分配机制。

## 五、从预测到控制：Sarsa

Sarsa 使用五元组

$$
(S_t,A_t,R_{t+1},S_{t+1},A_{t+1})
$$

更新动作价值：

$$
Q(S_t,A_t)
\leftarrow Q(S_t,A_t)
+\alpha\left[
R_{t+1}+\gamma Q(S_{t+1},A_{t+1})
-Q(S_t,A_t)
\right].
$$

因为目标中的 $A_{t+1}$ 由当前行为策略实际选出，Sarsa 是 **on-policy** 方法：评估并改进的就是正在采样的策略。

这意味着探索动作的风险会进入价值估计。例如某条路径理论上最短，却紧贴高惩罚区域；只要 $\varepsilon$-greedy 探索仍存在，Sarsa 就可能偏好更安全的路线。

## 六、Q-learning

Q-learning 的更新是

$$
Q(S_t,A_t)
\leftarrow Q(S_t,A_t)
+\alpha\left[
R_{t+1}
+\gamma\max_{a'}Q(S_{t+1},a')
-Q(S_t,A_t)
\right].
$$

它用行为策略产生数据，却以目标中的贪心动作评估最优策略，因此是 **off-policy** 方法。只要有限 MDP 中所有状态—动作对被充分访问，并满足适当学习率条件，表格型 Q-learning 可收敛到 $Q_*$。

### Sarsa 与 Q-learning

| 方法 | 下一动作目标 | 策略关系 |
| --- | --- | --- |
| Sarsa | 实际选择的 $A_{t+1}$ | on-policy |
| Q-learning | $\max_{a'}Q(S_{t+1},a')$ | off-policy |

Q-learning 的最大化还会带来过估计偏差：带噪声的多个估计取最大值，期望通常偏高。Double Q-learning 通过“一个估计负责选动作，另一个负责评价”来缓解这一问题。

## 七、随机逼近视角

许多强化学习更新都具有形式

$$
x_{t+1}
=x_t+\alpha_t
[H(x_t)+w_t-x_t],
$$

其中 $H$ 是希望求不动点的算子，$w_t$ 是零均值噪声。经典 Robbins–Monro 步长条件为

$$
\sum_{t=0}^{\infty}\alpha_t=\infty,
\qquad
\sum_{t=0}^{\infty}\alpha_t^2<\infty.
$$

第一条保证算法不会过早停止，第二条使随机噪声的累计影响有限。

对 Q-learning，Bellman 最优算子

$$
(HQ)(s,a)
=\mathbb E\left[
R_{t+1}+\gamma\max_{a'}Q(S_{t+1},a')
\mid s,a
\right]
$$

是 $\gamma$-压缩映射，其唯一不动点为 $Q_*$. 单步样本目标可看成 $HQ$ 加上条件均值为零的噪声。结合充分访问、奖励有界与步长条件，便形成表格型 Q-learning 收敛证明的骨架。

## 八、值函数近似

状态空间很大或连续时，无法为每个状态单独存储 $V(s)$。改用参数化函数

$$
\hat v(s;\boldsymbol w)\approx v_\pi(s),
\qquad
\hat q(s,a;\boldsymbol w)\approx q_\pi(s,a).
$$

若目标价值 $v_\pi(s)$ 已知，可在状态分布 $\mu$ 下最小化

$$
J(\boldsymbol w)
=\mathbb E_{S\sim\mu}
\left[
(v_\pi(S)-\hat v(S;\boldsymbol w))^2
\right].
$$

负梯度方向为

$$
\Delta\boldsymbol w
\propto
[v_\pi(S)-\hat v(S;\boldsymbol w)]
\nabla_{\boldsymbol w}\hat v(S;\boldsymbol w).
$$

但真实 $v_\pi$ 不可直接观察，只能用采样目标替代：

### 1. MC 近似

$$
\Delta\boldsymbol w
=\alpha
[G_t-\hat v(S_t;\boldsymbol w)]
\nabla_{\boldsymbol w}\hat v(S_t;\boldsymbol w).
$$

### 2. 半梯度 TD(0)

$$
\Delta\boldsymbol w
=\alpha
\left[
R_{t+1}+\gamma\hat v(S_{t+1};\boldsymbol w)
-\hat v(S_t;\boldsymbol w)
\right]
\nabla_{\boldsymbol w}\hat v(S_t;\boldsymbol w).
$$

这里把 TD 目标暂时当作常数，没有对其中 $\hat v(S_{t+1};\boldsymbol w)$ 求导，所以称为半梯度。它并非普通监督学习损失的完整梯度下降，却在线性 on-policy 设定下具有良好理论性质。

### 3. 线性函数近似

令

$$
\hat v(s;\boldsymbol w)
=\boldsymbol w^\top\phi(s),
$$

则 TD 更新简化为

$$
\boldsymbol w
\leftarrow
\boldsymbol w+alpha\delta_t\phi(S_t).
$$

函数近似能在相似状态之间共享信息，这是其主要价值；代价是一次更新会同时改变许多状态的估计，收敛分析也不再像表格情形那样直接。

## 九、致命三元组

下列三种要素同时出现时，价值学习可能不稳定甚至发散：

1. 函数近似；
2. 自举；
3. off-policy 训练。

这被称为 **Deadly Triad（致命三元组）**。三者单独出现并不必然有问题，危险来自它们的联合作用：采样分布与目标策略不一致，当前估计又作为下一次目标，函数近似还把局部误差传播到其他状态。

现代深度 Q 学习常使用目标网络、经验回放、梯度裁剪等方法改善稳定性，但这些工程机制不等于从根本上消除了所有发散可能。

## 十、经验回放

将交互转移存入回放缓冲区

$$
\mathcal D=
\{(s_t,a_t,r_{t+1},s_{t+1},d_{t+1})\},
$$

训练时随机抽取小批量。经验回放有三点作用：

- 重复使用历史数据，提高样本效率；
- 打破连续轨迹的强相关性，使批量更新更接近独立采样；
- 平滑数据分布的快速变化。

但回放数据来自旧策略，因此天然带有 off-policy 特征。缓冲区太旧可能造成分布失配，太小又不能充分去相关。优先经验回放会更频繁抽取 TD 误差大的样本，同时需要重要性采样权重校正抽样偏差。

## 十一、从 DP 到 MC 与 TD

几类方法可以放在“备份宽度”和“备份深度”上比较：

| 方法 | 是否需要模型 | 备份特点 |
| --- | --- | --- |
| 动态规划 | 是 | 枚举下一状态，使用完整期望 |
| Monte Carlo | 否 | 沿一条样本轨迹直到终点 |
| TD(0) | 否 | 一步采样后立即自举 |
| $n$ 步 TD | 否 | 在采样深度与自举之间折中 |

动态规划在宽度上展开所有可能后继；Monte Carlo 在深度上走到回合终点；TD 则只走有限步，再用当前估计截断未来。它们不是彼此割裂的算法清单，而是对 Bellman 关系采用不同近似的结果。

## 十二、小结

本讲的主线是

$$
\text{完整回报}
\longrightarrow
\text{一步自举}
\longrightarrow
\text{多步与资格迹}
\longrightarrow
\text{on/off-policy 控制}
\longrightarrow
\text{函数近似与稳定性}.
$$

MC 用真实回报换取高方差，TD 用自举换取在线更新；Sarsa 学习行为策略本身，Q-learning 则从行为数据中逼近贪心目标策略。进入函数近似后，泛化能力与训练稳定性同时出现，强化学习也由“表格更新”真正进入了现代大规模学习问题。
