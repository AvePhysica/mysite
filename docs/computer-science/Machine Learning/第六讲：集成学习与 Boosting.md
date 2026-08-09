---
title: "第六讲：集成学习、AdaBoost 与梯度提升"
date: 2026-08-09
description: "从投票与弱学习器出发，推导 AdaBoost、指数损失与误差界，并整理 Gradient Boosting、XGBoost 的二阶目标。"
tags:
  - Machine Learning
  - Boosting
  - XGBoost
---

> 本文由 GPT-5.6-sol 完成。

集成学习的基本判断是：与其把全部希望寄托在一个模型上，不如让一组模型共同决定。Bagging 通过并行重采样降低方差；Boosting 则让模型按顺序加入，每一步都试图弥补当前集成的不足。

这两类方法都在“组合模型”，但机制完全不同。本讲重点放在 Boosting：弱学习器为什么能够组成强学习器，AdaBoost 的权重更新从哪里来，以及梯度提升如何把这一思想推广到一般可微损失。

## 一、为什么集成可能更强

设 $M$ 个二分类器独立地以概率 $p>1/2$ 预测正确，多数投票出错意味着正确分类器不超过一半。由 Hoeffding 不等式可得

$$
\Pr(\text{多数投票错误})
\le\exp\left[-2M\left(p-\frac12\right)^2\right].
$$

理想的独立性在现实中很少成立，但公式揭示了两个必要条件：基学习器要比随机猜测好，同时它们的错误要有差异。若所有模型永远犯同样的错，投票不会创造新信息。

Bagging 主要通过数据与特征随机化制造差异；Boosting 则根据已有模型的错误重新分配注意力，让后续模型专门处理难点。

## 二、Boosting 的基本形式

考虑二分类标签 $y_i\in\{-1,+1\}$，弱学习器输出 $h_t(x)\in\{-1,+1\}$。Boosting 构造加法模型

$$
F_T(x)=\sum_{t=1}^T\alpha_t h_t(x),
\qquad
H_T(x)=\operatorname{sgn}F_T(x).
$$

“弱学习器”通常指在当前加权分布上错误率严格小于 $1/2$ 的学习器。Boosting 并不是简单重复训练同一个模型，而是让训练分布随着轮次变化。

## 三、AdaBoost 算法

### 1. 样本权重与弱分类器

初始化

$$
D_1(i)=\frac1n.
$$

第 $t$ 轮在加权数据上训练 $h_t$，其加权错误率为

$$
\varepsilon_t
=\sum_{i=1}^nD_t(i)
\mathbb I\bigl(h_t(x_i)\ne y_i\bigr).
$$

分类器权重取为

$$
\alpha_t
=\frac12\log\frac{1-\varepsilon_t}{\varepsilon_t}.
$$

当 $\varepsilon_t<1/2$ 时，$\alpha_t>0$；错误率越低，话语权越大。

### 2. 更新样本分布

$$
D_{t+1}(i)
=\frac{D_t(i)
\exp[-\alpha_t y_i h_t(x_i)]}{Z_t},
$$

其中 $Z_t$ 是归一化常数。正确分类时 $y_i h_t(x_i)=1$，权重乘 $e^{-\alpha_t}$；错误分类时乘 $e^{\alpha_t}$。归一化以后，错分样本相对权重提高。

需要稍微克制一种常见说法：AdaBoost 不是“只看错分样本”。它仍然使用全部样本，只是改变它们在下一轮目标中的相对分量。

## 四、从指数损失推导 AdaBoost

AdaBoost 可以看成逐坐标最小化经验指数损失

$$
L(F)=\sum_{i=1}^n
\exp[-y_iF(x_i)].
$$

已知 $F_{t-1}$ 后，加入 $\alpha h$：

$$
L(F_{t-1}+\alpha h)
=\sum_i
e^{-y_iF_{t-1}(x_i)}e^{-\alpha y_i h(x_i)}.
$$

把

$$
D_t(i)\propto e^{-y_iF_{t-1}(x_i)}
$$

视为当前样本分布，则选择 $h_t$ 等价于最小化加权分类错误。固定 $h_t$ 后，按正确与错误样本分组：

$$
Z_t(\alpha)
=(1-\varepsilon_t)e^{-\alpha}
+\varepsilon_t e^{\alpha}.
$$

令导数为零，得到

$$
\alpha_t=\frac12
\log\frac{1-\varepsilon_t}{\varepsilon_t}.
$$

所以“提高错分样本权重”和“最小化指数损失”不是两个独立技巧，而是同一推导的两种表达。

## 五、训练误差界与间隔

### 1. 经验错误率上界

因为

$$
\mathbb I(y_iF_T(x_i)\le0)
\le e^{-y_iF_T(x_i)},
$$

训练错误率满足

$$
\hat R(H_T)
\le\frac1n\sum_i e^{-y_iF_T(x_i)}
=\prod_{t=1}^TZ_t.
$$

代入最优 $\alpha_t$ 后

$$
Z_t=2\sqrt{\varepsilon_t(1-\varepsilon_t)}.
$$

令弱学习优势 $\gamma_t=\frac12-\varepsilon_t$，利用 $\sqrt{1-x}\le e^{-x/2}$，可得

$$
\hat R(H_T)
\le\exp\left(-2\sum_{t=1}^T\gamma_t^2\right).
$$

只要每轮都保持正优势，训练错误会指数下降。这解释了 AdaBoost 为何常能很快把训练错误压到零。

### 2. 为什么训练零误差后还可能继续改善

定义归一化间隔

$$
\rho_i=
\frac{y_iF_T(x_i)}{\sum_{t=1}^T|\alpha_t|}.
$$

间隔为正表示分类正确，绝对值表示预测的稳健程度。Boosting 在训练错误已经为零后，仍可能继续把许多样本推向更大的正间隔。基于间隔分布和基学习器复杂度，可以得到泛化界；这比只数训练错误更能解释其后续收益。

另一方面，指数损失会对严重错分点赋予极大权重，因此对标签噪声与异常点可能敏感。稳健变体或较温和的损失在这类场景中更合适。

## 六、梯度提升：在函数空间里下降

AdaBoost 针对指数损失。Gradient Boosting 把思路推广为：对任意可微损失，每一轮训练一个基学习器去拟合当前损失关于模型输出的负梯度。

加法模型写成

$$
F_t(x)=F_{t-1}(x)+\eta\rho_t h_t(x),
$$

其中 $\eta$ 是学习率。第 $t$ 轮的伪残差为

$$
r_{it}
=-\left.
\frac{\partial\ell(y_i,F(x_i))}{\partial F(x_i)}
\right|_{F=F_{t-1}}.
$$

先让 $h_t(x_i)$ 拟合 $r_{it}$，再通过一维搜索或叶节点优化确定步长 $\rho_t$。

### 1. 平方损失

若

$$
\ell(y,F)=\frac12(y-F)^2,
$$

则

$$
r_{it}=y_i-F_{t-1}(x_i),
$$

恰好是真实残差。因此“不断拟合残差”是梯度提升在平方损失下的特例。

### 2. 二元对数损失

若 $p_i=\sigma(F(x_i))$，交叉熵对分数的负梯度为

$$
r_{it}=y_i-p_i.
$$

这时拟合的是概率残差，而不是直接拟合 $0$-$1$ 分类错误。

## 七、正则化的梯度提升

梯度提升树通常通过以下方式控制复杂度：

- 使用较小学习率 $\eta$；
- 限制树深、叶节点数和叶节点最少样本；
- 对样本和特征进行子采样；
- 使用早停；
- 惩罚叶节点权重与新增叶子。

树的数量与学习率存在明显联动：较小学习率通常需要更多轮，却往往得到更平滑、可控的拟合过程。

## 八、XGBoost 的二阶目标

第 $t$ 轮加入一棵回归树 $f_t$：

$$
\hat y_i^{(t)}
=\hat y_i^{(t-1)}+f_t(x_i).
$$

正则化目标为

$$
\mathcal L^{(t)}
=\sum_{i=1}^n
\ell\left(y_i,
\hat y_i^{(t-1)}+f_t(x_i)\right)
+\Omega(f_t),
$$

常用树复杂度

$$
\Omega(f)=\gamma T+
\frac\lambda2\sum_{j=1}^Tw_j^2,
$$

其中 $T$ 是叶节点数，$w_j$ 是第 $j$ 个叶子的输出。

### 1. 二阶 Taylor 展开

在当前预测处展开损失：

$$
\mathcal L^{(t)}
\approx
\sum_i\left[
g_i f_t(x_i)+\frac12h_i f_t^2(x_i)
\right]+\Omega(f_t),
$$

其中

$$
g_i=\partial_{\hat y^{(t-1)}}\ell_i,
\qquad
h_i=\partial^2_{\hat y^{(t-1)}}\ell_i.
$$

设叶子 $j$ 包含样本集合 $I_j$，并记

$$
G_j=\sum_{i\in I_j}g_i,
\qquad
H_j=\sum_{i\in I_j}h_i.
$$

则与该叶权重有关的目标是

$$
G_jw_j+rac12(H_j+\lambda)w_j^2.
$$

最优叶权重为

$$
w_j^*=-\frac{G_j}{H_j+\lambda},
$$

固定树结构的最优目标值为

$$
-\frac12\sum_{j=1}^T
\frac{G_j^2}{H_j+\lambda}
+\gamma T.
$$

### 2. 分裂增益

把一个叶节点分成左右两部分，增益为

$$
\operatorname{Gain}
=\frac12\left[
\frac{G_L^2}{H_L+\lambda}
+\frac{G_R^2}{H_R+\lambda}
-\frac{(G_L+G_R)^2}{H_L+H_R+\lambda}
\right]-\gamma.
$$

只有增益足够大，分裂才值得发生。这里的一阶梯度说明当前预测应向哪里改，二阶梯度刻画局部曲率，$\lambda$ 收缩叶权重，$\gamma$ 则直接惩罚结构增长。

LightGBM 等系统在采样、直方图、叶子生长策略和工程实现上进一步加速，但核心仍是正则化的加法树模型，不宜只把它们理解为“更快的随机森林”。

## 九、小结

Boosting 的演化路线是

$$
\text{加权分类}
\longrightarrow
\text{指数损失}
\longrightarrow
\text{函数空间梯度}
\longrightarrow
\text{二阶近似与正则化树}.
$$

AdaBoost 展示了弱学习器如何经由自适应重加权组成强分类器；Gradient Boosting 把“纠正错误”精确化为拟合负梯度；XGBoost 再把二阶信息、树结构代价和高效搜索结合起来。贯穿三者的不是某一棵特殊的树，而是逐步构造加法模型的思想。
