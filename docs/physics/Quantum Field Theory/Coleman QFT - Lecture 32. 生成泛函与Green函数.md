---
title: "Coleman QFT Lecture 32: 生成泛函与Green函数"
---

本章将涉及到三类不同的生成泛函，其将联系到三类Green函数，分别是：
1. 完整Green函数
2. 连通Green函数
3. 1PI Green函数
## 32.1 圈图展开

一个场的动力学可以完全由其与外源耦合的作用量确定：
$$
S[\phi,J]=S[\phi]+\int\mathrm{d}^4x\,J(x)\phi(x)
$$
其可以通过泛函积分方法联系到生成泛函与（完整）Green函数：
$$
Z[J]=N\int(\mathrm d\phi)\,\mathrm{e}^{iS[\phi,J]}=\sum_{n=0}^\infty\dfrac{i^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,J(x_1)\cdots J(x_n)\,G^{(n)}(x_1,\cdots,x_n),\quad N^{-1}=\int(\mathrm{d}\phi)\,\mathrm{e}^{iS[\phi]}
$$
由于全体Feynman图之和等于全体**连通**Feynman图之和的指数映射，因此生成泛函的关系也是类似的。连通生成泛函 $W[J]$ 满足：
$$
Z[J]=\mathrm{e}^{iW[J]},\quad iW[J]=\sum_{n=0}^\infty\dfrac{i^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,J(x_1)\cdots J(x_n)\,G_c^{(n)}(x_1,\cdots,x_n)
$$
这里 $G^{(n)}_c$ 就是连通Green函数，指所有有 $n$ 条外腿的连通Feynman图之和。
接下来我们来研究 $W[J]$ 的一个有趣的性质，首先我们需要将上式的 $\hbar$ 暂时恢复：
$$
Z_\hbar[J]=N\int(\mathrm d\phi)\,\mathrm{e}^{iS[\phi,J]/\hbar}=\exp(iW_\hbar[J])
$$
注意到顶点因子由 $\frac i\hbar$ 乘上相互作用项系数给出，因此一个顶点给出一个 $\hbar^{-1}$。此外，传播子对应于积分核（二次项系数）的逆，因此给出一个 $\hbar$。换句话说，一个给定Feynman图的贡献对 $\hbar$ 的依赖关系为：
$$
\mathcal G\propto\hbar^{I-V}
$$
这里 $I$ 指图的边数（Green函数涉及的Feynman图只有内线），$V$ 指顶点数。一个图论中的结论给出，任意连通图的顶点数、边数与loop之间存在关系：
$$
L=I-V+1
$$
其证明思路是将一个圈图逐步减去边使得 $L,I$ 同步减小，最终化为一个树图，而树图满足 $I_{tree}=V_{tree}-1$。故
$$
\mathcal G_c\propto \hbar^{I-V}=\hbar^{L-1}
$$
也就是说，我们可以按照 $\hbar$ 的阶数对连通生成泛函做展开：
$$
W_\hbar=-i\ln Z_\hbar=\dfrac{W_0}{\hbar}+W_1+\hbar W_2+\cdots(O(\hbar^2))
$$
第一项称为**树图阶近似**。这个按loop个数的展开过程就称为**圈图展开**(loop expansion)。举个例子，$\phi^4$ 理论的圈图展开结果如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20260507141446.png" width="600">
</div>

可以看到，其中每阶都有无限个图，因此仍然难以计算每一阶的贡献。然而，我们可以发现其中只有很少的**1PI图**。树图阶仅有的1PI图为：

<div align="center">
  <img src="./pictures/Pasted image 20260507141626.png" width="600">
</div>

因此，这启发我们去研究1PI图对应的生成泛函与Green函数有怎样的性质。

## 32.2 1PI Green函数及其生成泛函

1PI图的定义是不能通过切断一条边分成两个不连通部分的连通图。这类图的求和定义为1PI Green函数，其对应的生成泛函记为 $\Gamma[\bar\phi]$。这里 $\bar\phi$ 是一个经典场变量。这里 $\Gamma[\bar\phi]$ 称为**有效作用量**，其来源于下面的结论：在树图近似下，有
$$
\Gamma[\bar\phi]=S[\bar\phi]
$$
下面主要就是证明这个结论。在此之前，先要明确一下定义。生成泛函 $\Gamma[\bar\phi]$ 可以做Taylor展开：
$$
i\Gamma[\bar\phi]=i\sum_n\dfrac{1}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\Gamma^{(n)}(x_1,\cdots,x_n)\,\bar\phi(x_1)\cdots\bar\phi(x_n)
$$
系数做Fourier变换：
$$
\Gamma^{(n)}(x_1,\cdots,x_n)=\int\dfrac{\mathrm{d}^4p_1}{(2\pi)^4}\cdots\dfrac{\mathrm{d}^4p_n}{(2\pi)^4}\mathrm{e}^{i(p_1\cdot x_1+\cdots+p_n\cdot x_n)}\,\tilde\Gamma^{(n)}(p_1,\cdots,p_n)(2\pi)^4\delta^{(4)}(p_1+\cdots+p_n)
$$
这里对 $n\ne 2$，$\tilde\Gamma^{(n)}(p_1,\cdots,p_n)$ 定义为有 $n$ 条外腿的1PI Feynman图之和：

<div align="center">
  <img src="./pictures/Pasted image 20260507144957.png" width="700">
</div>

而对 $n=2$，其定义有不同之处。首先，我们知道两点Green函数与传播子相联系，而传播子可用1PI图表示：
$$
\tilde G^{(2)}(p,p')=(2\pi)^4\delta^{(4)}(p+p')\tilde D(p),\quad \tilde D(p)=\dfrac{i}{p^2-\mu^2-\tilde\Pi'(p^2)+i\epsilon}
$$
现在，$\tilde \Gamma^{(2)}(p,-p)$ 定义为
$$
i\tilde \Gamma^{(2)}(p,-p)=-\dfrac{1}{\tilde D(p)}=i(p^2-\mu^2)-i\tilde\Pi'(p^2)
$$
因此有一个额外的项 $p^2-\mu^2$。$S[\bar\phi]=\Gamma[\bar\phi]$ 在树图意义下成立的意思是我取 $S=\Gamma$，同时在泛函积分时只考虑那些树图，这样得到的 $W,Z$ 都将是精确的。
现在，我们从 $S[\bar\phi]=\Gamma[\bar\phi]$ 出发，来验证其是否能生成1PI图的生成泛函。由
$$
Z=N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS[\phi]}=N\int(\mathrm{d}\phi)\,\mathrm{e}^{i\Gamma[\phi]}\quad(\text{tree approximation})
$$
在树图近似下，传播子就是二次型系数之逆，因此
$$
\tilde D(p)=\dfrac{i}{\tilde\Gamma^{(2)}(p,-p)}
$$
这与我们的定义一致，这样便证明了在树图近似下，其生成的的确是**精确传播子** $\tilde D(p)$。对于更高阶的图，证明的关键在于注意到，我们总可以将其分解为**以1PI图为顶点，以精确传播子为内线**的**树图**之和，例如下图：

<div align="center">
  <img src="./pictures/Pasted image 20260507151840.png" width="800">
</div>

由于 $n\ne 2$ 的 $\Gamma[\phi]$ 会生成1PI图的Green函数，因此由泛函积分程序
$$
Z=N\int(\mathrm{d}\phi)\,\mathrm{e}^{i\Gamma[\phi]}\quad(\text{tree approximation})
$$
给出的顶点正是1PI图。仅取树图求和就得到精确的Green函数。也就是说，我们完成了上式可以生成正确的 $Z$ 的论证。这也就是说，1PI生成泛函满足
$$
\dfrac{\Gamma[\phi]}{\hbar}=\dfrac{S[\phi]}{\hbar}+S[\phi]\times O(1)
$$
对外源耦合情形，利用
$$
Z[J]=\exp\left[\dfrac{i}{\hbar}W[J]\right]\approx N\int(\mathrm{d}\phi)\exp\left\{\dfrac{i}{\hbar}\left(\Gamma[\phi]+\int\mathrm{d}^4x\,J\phi\right)\right\}
$$
约等号在树图阶意义下成立，也就是说，在 $\hbar=0$ 极限下其将变为**精确等于**，此时泛函积分的结果为**驻点近似**的结果：
$$
\dfrac{\delta\Gamma[\bar\phi]}{\delta\bar\phi(x)}=-J(x)\Rightarrow \bar\phi(x)=\bar\phi_J(x)
$$
此时满足
$$
W[J]=\Gamma[\bar\phi_J]+\int\mathrm{d}^4x\,J(x)\bar\phi_J(x)
$$
这实际上是一个**Legendre变换式**，其为精确成立的。其逆变换为：
$$
\dfrac{\delta W}{\delta J(x)}=\bar\phi(x),\quad \Gamma[\bar\phi]=W[J]-\int\mathrm{d}^4x\,J_{\bar\phi}\bar\phi
$$

从这个方向理解，有
$$
\bar\phi(x)=\dfrac{\delta W[J]}{\delta J(x)}=\dfrac{\int(\mathrm{d}\phi)\phi\exp[i(S+\int\mathrm{d}^4x\,J\phi)]}{\int(\mathrm{d}\phi)\exp[i(S+\int\mathrm{d}^4x\,J\phi)]}=\dfrac{\langle 0|\phi(x)|0\rangle_J}{\langle 0|0\rangle_J}
$$
因此 $\bar\phi(x)$ 可以理解为在有外源耦合下的 $\phi(x)$ 的某种经典测量平均值，它是一个**经典场**。

## 32.3 统计力学与QFT的类比

泛函积分与统计力学中配分函数是类似的，有
$$
Z(\beta)=\mathrm{Tr}(\mathrm{e}^{-\beta H}),\quad Z[J]=N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS[\phi,J]}
$$
其他的一些类比如下表所示：

<div align="center">
  <img src="./pictures/Pasted image 20260507205507.png" width="500">
</div>

## 32.4 协变规范下的QED

我们来具体讨论上面的形式理论应用在QED中的结果。其讨论核心在于规范变换可以表示为 $\Gamma$ 的什么条件。我们将所有的场($\psi,\bar\psi,A_\mu$)包含进一个总场 $\Phi$ 中，规范变换可以一般的写为：
$$
\Phi\to\Phi'=\Phi+A(\Phi)\delta\chi 
$$
在FP程序下，作用量可以写为**规范不变项**与**规范固定项**之和：
$$
S[\Phi]=S_{GI}[\Phi]+S_{GF}[\Phi]=S_{GI}[\Phi]-\dfrac{1}{2\xi}\int\mathrm{d}^4x\,(\partial_\mu A^\mu)^2
$$
在规范变换下：
$$
S[\Phi]\to S'[\Phi']=S[\Phi]-\dfrac 1\xi\int\mathrm{d}^4x\,(\partial_\mu A^\mu)\square^2\delta\chi=S[\Phi]+\int\mathrm{d}^4x\,B(\Phi)\delta\chi,\quad B(\Phi)=-\dfrac 1\xi(\partial_\mu A^\mu)\square^2
$$
泛函积分的测度 $\mathrm{d}\Phi$ 是不变的（因为其对 $A_\mu$ 只是加上一个常数，$\psi,\bar\psi$ 是旋转），而我们要求规范变换不能改变泛函积分的结果，因此
$$
\begin{align}
\mathrm{e}^{iW[J]}&\to N\int(\mathrm{d}\Phi)\exp\left\{i\left(S[\Phi]+\int\mathrm{d}^4x\,J\Phi+\int\mathrm{d}^4x\,(JA(\Phi)+B(\Phi))\delta\chi\right)\right\}\\
&=N\int(\mathrm{d}\Phi)\mathrm{e}^{i(S[\Phi]+\int\mathrm{d}^4x\,J\Phi)}\left[\int\mathrm{d}^4y\,(JA(\Phi)+B(\Phi))\delta\chi(y)\right]
\end{align}
$$
假设 $A(\Phi),B(\Phi)$ 关于 $\Phi$ 是至多线性的，则上面右侧括号可以用平均值 $\bar\Phi$ 替代，即
$$
\mathrm{RHS}=\left[\int\mathrm{d}^4y\,(JA(\bar\Phi)+B(\bar\Phi))\delta\chi(y)\right]\mathrm{e}^{iW[J]}
$$
变换平凡的要求即为：
$$
\int\mathrm{d}^4y\,(JA(\bar\Phi)+B(\bar\Phi))\delta\chi(y)=0
$$
利用前面得到的结果 $\dfrac{\delta\Gamma[\bar\phi]}{\delta\bar\phi(x)}=-J(x)$，则
$$
\int\mathrm{d}^4y\,\dfrac{\delta\Gamma[\bar\Phi]}{\delta\bar\Phi(x)}A(\bar\Phi)\delta\chi(y)=\int \mathrm{d}^4y\,B(\bar\Phi)\delta\chi(y)=0\Rightarrow \delta\Gamma[\bar\Phi]=\delta S[\bar\Phi]=\delta S_{GF}[\bar\Phi]
$$
这个关系称为**一般形式的Ward identity**。也就是说，虽然 $\Gamma[\bar\Phi]$ 仅在树图近似下等于 $S[\bar\Phi]$，但其规范变换下的变换却严格与 $S[\bar\Phi]$ 的变换一致。也就是说，$\Gamma$ 也可分解为：
$$
\Gamma[\bar\Phi]=\Gamma_{GI}[\bar\Phi]+S_{GF}[\bar\Phi]
$$
如果我们代入具体的规范变换形式，上式实际上是：
$$
-ie\dfrac{\delta\Gamma}{\delta\psi(x)}\psi(x)+ie\dfrac{\delta\Gamma}{\delta\bar\psi(x)}\bar\psi(x)-\partial^\mu\dfrac{\delta\Gamma}{\delta A^\mu(x)}=-\dfrac{1}{\xi}(\partial_\mu A^\mu)\square^2
$$
下一章讲QED的重整化，将会把这里得到的Ward identity应用到重整化中。

---

