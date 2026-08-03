---
title: "Coleman QFT Lecture 25: 处理无限大：正规化与重整化"
---

我们已经了解过重整化的基本步骤，比如在[[Coleman QFT - Lecture 23. 旋量场理论的重整化]]的最后，对耦合常数的重整化：
$$
\tilde \varGamma'=i\gamma_5g+O(g^3)
$$
$O(g^3)$ 阶的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260211150135.png" width="500">
</div>

第一个图对应到表达式：
$$
(\text{diagram 1})\propto\int\mathrm{d}^4 k\dfrac{1}{(k-p')^2-\mu^2+i\epsilon}\gamma_5\dfrac{1}{k\mkern-8.5mu/-q\mkern-8.5mu/-m+i\epsilon}\gamma_5\dfrac{1}{k\mkern-8.5mu/-m+i\epsilon}\gamma_5\sim\gamma_5\int\dfrac{\mathrm{d}^4k}{k^4}
$$
是对数发散的，而抵消项 $-E_3\gamma_5$ 会抵消这一发散。
现在，我们要来系统研究，重整化过程和消除无限大之间到底有怎样的关系？这就是这一章的内容。
## 25.1 正规化

消除计算过程中可能出现的发散的过程就称为**正规化(regularization)**。其一般会包含一个人为选取的参数 $\Lambda$，在计算的最后，我们再将此参数取其本来的值以希望消除其影响。这样说可能不是很清楚，我们来看几个正规化的常用方案：
### Method 1：硬截断(Brute force)

我们遇到的往往是紫外发散，这时候简单将积分上限从无穷变到一个有限的 $\Lambda$ 就可以消除发散，也就是简单丢掉 $|\vec k|>\Lambda$ 的 $\tilde \pi(\vec k),\tilde\phi(\vec k)$。这个方案能确实的消除无穷大，但缺点也是明显的：Lorentz不变性与规范不变性一般而言都是被破坏了的。
### Method 2：Pauli-Villars 正规化

这个方法通过调整传播子的形式来规避无穷大，比如介子传播子：
$$
\dfrac{1}{k^2-\mu^2}\to \dfrac{1}{k^2-\mu^2}-\dfrac{1}{k^2-\Lambda^2}=\dfrac{\mu^2-\Lambda^2}{(k^2-\mu^2)(k^2-\Lambda^2)}\sim O(k^{-4})
$$
这样就增加了分母的次数。最后再令 $\Lambda\to\infty$ 即可。更一般的，可以引入一系列参数来任意调高分母的次数：
$$
\dfrac{1}{k^2-\mu^2}\to \dfrac{1}{k^2-\mu^2}+\sum_{i=1}^N\dfrac{c_i}{k^2-M_i^2}\quad (M_i>\Lambda)
$$
将右侧通分并展开，可以得到使得分母次数升高的各条件：

<div align="center">
  <img src="./pictures/Pasted image 20260211152236.png" width="600">
</div>

这一过程可以通过在Lagrangian中引入所谓的**Pauli-Villars场** $\phi_1$ 来实现，即
$$
\mathcal L_I(\phi')\to \mathcal L_I(\Phi),\quad \Phi=\phi'+i\phi_1
$$
则新的场 $\Phi$ 的缩并即为：
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\Phi(x) \Phi} (0)=\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\phi'(x) \phi'} (0)-\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\phi_1(x) \phi_1} (0)=\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\mathrm{e}^{-ik\cdot x}\left(\dfrac{i}{k^2-\mu^2+i\epsilon}-\dfrac{i}{k^2-M^2+i\epsilon}\right)
$$
当然，这样做也是有一些问题的。现在的Lagrangian不是厄米的。为此，考虑算符 $(-1)^{N_1}$，其中 $N_1$ 为 $\phi_1$ 对应粒子的粒子数算符，则
$$
(-1)^{N_1}\phi_1=-\phi_1(-1)^{N_1}
$$
现在，定义新的内积：
$$
\langle a|b\rangle_{\text{new}}=\langle a|(-1)^{N_1}|b\rangle\Rightarrow \langle a|\phi_1|b\rangle_{\text{new}}=-\langle b|\phi_1|a\rangle_{\text{new}}^*
$$
因此 $(\phi_1)_{\text{new}}^\dagger=-\phi_1,\,(\Phi)_{\text{new}}^\dagger=\Phi$，因此在新的内积定义下，Lagrangian是厄米的。
### Method 3：维数正规化

这个方法听上去有点奇妙，我们去直接改变积分空间的维数，将时空维度从4换成一个连续变量 $d$。这样，我们处理的积分就形如：
$$
I=\int\dfrac{\mathrm{d}^dk}{(k^2+a^2)^n}
$$
当 $n>\dfrac{d}{2}$ 时积分收敛。我们前面已经通过Wick旋转完成了 $d=4$ 下的积分表。现在，为了计算一般的 $d$，我们考虑另一种方法。从下面的恒等式开始：
$$
\dfrac{1}{(k^2+a^2)^n}=\dfrac{1}{\Gamma(n)}\int_0^\infty\mathrm{d}\lambda\,\lambda^{n-1}\mathrm{e}^{-\lambda(k^2+a^2)}
$$
则
$$
I=\dfrac{1}{\Gamma(n)}\int_0^\infty\mathrm{d}\lambda\,\lambda^{n-1}\int\mathrm{d}^dk\,\mathrm{e}^{-\lambda(k^2+a^2)}
$$
而
$$
\int\mathrm{d}^dk\,\mathrm{e}^{-\lambda k^2}=\left(\dfrac\pi \lambda\right)^{d/2}
$$
这就是对通常的Gauss积分做解析延拓的结果。代入得到：
$$
I=\dfrac{\pi^{d/2}}{\Gamma(n)}\int_0^\infty\mathrm{d}\lambda\,\lambda^{n-\frac d2-1}\mathrm{e}^{-\lambda a^2}=\dfrac{\Gamma(n-\frac d2)}{\Gamma(n)}\dfrac{\pi^{d/2}}{a^{2n-d}}
$$
你可以自行对照 $d=4$ 的情况与[[Coleman QFT - Lecture 15. 重整化 I：确定抵消项]]的积分表。
改变空间维度会带来许多问题，比如你不能保持 $\alpha=e^2/4\pi\approx1/137$ 是一个维数无关的常量，而且你也不太能知道怎样定义新的gamma矩阵。甚至，如果我考虑最简单的标量场 $\phi^4$ 理论：
$$
\mathcal L=\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu^2\phi'^2-\dfrac{1}{4!}\lambda\phi'^4+\mathcal L_{CT}
$$
来做量纲分析。在[[Coleman QFT - Problem 2]] 中，我们得到过一般的 $d$ 维时空下标量场与Lagrangian的量纲为：
$$
[\phi']=[M]^{\frac d2-1},\quad [\mathcal L]=[M]^d
$$
因此 $[\lambda]=[M]^{4-d}$。也就是说现在 $\lambda$ 不一定是无量纲的。为了将其无量纲化，引入有质量量纲的参数 $\nu$，相互作用写为：
$$
\mathcal L_I=\dfrac{1}{4!}\lambda\nu^{4-d}\phi'^4
$$
但是，我们会发现当取 $d\to 4$ 的极限时，$\nu$ 的影响却不会那么简单的消失。具体来说，考虑下面的 $O(\lambda^2)$ 阶的四点Green函数图：

<div align="center">
  <img src="./pictures/Pasted image 20260211160051.png" width="500">
</div>


对应的散射振幅为：
$$
\mathcal A\propto (\lambda\nu^{4-d})^2\int\dfrac{\mathrm{d}^dk}{(2\pi)^d}\dfrac{1}{(k^2+a^2)^2}
$$
当然，这是化简后的结果，$a$ 是一个与质量、外动量及Feynman参数有关的量。由前面的积分结果，有
$$
\mathcal A\propto\dfrac{1}{(2\pi)^d}(\lambda\nu^{4-d})^2\dfrac{\pi^{d/2}}{\Gamma(2)}\Gamma\left(2-\frac d2\right)a^{d-4}
$$
设 $\epsilon\equiv 2-\dfrac d2$ 很小，由Gamma函数的性质：
$$
\Gamma(\epsilon)=\dfrac 1\epsilon
-\gamma+O(\epsilon)$$
$\gamma$ 是Euler–Mascheroni常数。代入得到：
$$
\mathcal A\propto\dfrac{\lambda^2\pi^2}{(2\pi)^d}\left[\dfrac 1\epsilon
-\gamma+O(\epsilon)\right]\left(\dfrac{\nu^2}{\pi a^2}\right)^{\large{\epsilon}}=\dfrac{\lambda^2\pi^2}{(2\pi)^d}\left[\dfrac{1}{\epsilon}-\gamma+\ln\left(\dfrac{\nu^2}{\pi^2a^2}\right)+O(\epsilon)\right]
$$
可以看到，$1/\epsilon$ 项表明这个图在4维下发散。即使取 $\epsilon=0$，仍无法消除 $\ln\left(\dfrac{\nu^2}{\pi^2a^2}\right)$ 项。

一个与维数正规化相伴的用于确定重整化反项（抵消项）的方法称为**最小减法(minimal subtraction)**，其实际上就是将抵消项定为位数正规化下的 $d=4$ 处的极点项。比如上面的例子：
$$
\tilde G^{(4)}\propto\nu^{4-d}\lambda^2\pi^2\left[\dfrac{1}{2-\frac d2}+(\,\text{finite as }d\to 4\,)\right]
$$
第一项就是极点项，因此最小减法给出的抵消项就直接用于消除这一项：
$$
\mathcal L_{CT}=\nu^{4-d}\lambda^2\pi^2\dfrac{1}{2-\frac d2}\dfrac{1}{4!}\phi'^4
$$
下面我们将介绍另一种构造抵消项的方法。

## 25.2 BPHZ 算法

我们暂时将研究的理论限制在仅包含自旋零与自旋 $1/2$ 粒子的范围内（毕竟至此只学了这两个）。在介绍BPHZ算法之前，我先引入一些记号。假设我的Lagrangian可以写为：
$$
\mathcal L=\mathcal L_0+\sum_i \mathcal L_i
$$
其中每一个 $\mathcal L_i$ 是一个相互作用单项式，其包含 $f_i$ 个Fermi场，$b_i$ 个Bose场以及 $d_i$ 个导数项。一些典型的相互作用及其参数列在下面：

<div align="center">
  <img src="./pictures/Pasted image 20260211171116.png" width="400">
</div>

在后面我们会需要这些记号。
### 表观发散度

现在，来考虑我们如何判断一个Feynman是收敛的还是发散的。经过对之前很多很多图的计算，现在我们不必写出完整的表达式，而可以总结出这些规律：每一个环路都对应于一个相应的环路积分，一个环路积分会在分子上加上一个四次的 $\mathrm{d}^4 k$。同时，一个标量场传播子 $\dfrac{i}{k^2-\mu^2}$ 使分母次数加二，而Dirac场传播子 $\dfrac{i}{k\mkern-8.5mu/-m}$ 使分母次数加一。最后，每个顶点处的导数会使分子次数加一。最终的发散取决于 $k$ 的总次数，将这个总次数定义一个图的**表观发散度(superficial degree of divergence)** $D$。则我们可以说：
$$
\text{If}\begin{cases}
D<0\quad \text{convergence}\\
D=0\quad \text{logarithmically divergence}\\
D=1\quad \text{linearly divergence}\\
\cdots
\end{cases}
$$
举一些例子：

<div align="center">
  <img src="./pictures/Pasted image 20260211170137.png" width="800">
</div>

这里提到“表观发散度”实际上不能完全决定一个图是发散的还是收敛的。比如最后一个图，它实际上是发散的，但表观发散度 $D=-2<0$。这是因为对于不止一个环路积分的图，有可能是其中一个积分引起的发散，但其被其他图的收敛掩盖了，最终导致 $D<0$。
### $p=0$ 处的Taylor展开

每一个Feynman图都是外线动量 $p_i$ 的解析函数，我们可以在 $p_i=0$ 附近做Taylor展开。例如

<div align="center">
  <img src="./pictures/Pasted image 20260211171400.png" width="600">
</div>

### BPHZ算法

现在我可以介绍BPHZ算法是怎样构造重整化反项的。其无需依赖于正规化参数。

>[!abstract] BPHZ Algorithm
>1. 用微扰理论逐阶计算，直到你遇到一个表观发散度 $D\ge 0$ 的1PI图。
>2. 将这个图关于外线动量做Taylor展开。加入抵消项，抵消所有的外线动量阶数 $\le D$ 的展开项。
>3. 回到第一步，继续这一过程，直到不会有新的表观发散度 $D\ge 0$ 的1PI图产生。

此算符最早发表在Bogoliubov和Parasiuk的文章上。这个算法的威力由下面的Hepp定理保证：

>[!note] Hepp's theorem
>若理论不涉及无质量场，则Bogoliubov算法消除了所有发散项。该算法产生的格林函数在 $\Lambda\to \infty$ 时与截断 $\Lambda$ 无关，且在微扰理论的所有阶数上均成立，无论采用何种正则化方法。

并且Zimmerman证明了该算法确实能消除所有紫外发散项，因此其也被称为**BPHZ重整化**。我们接下来通过例子来理解这一算法。

## 25.3 应用BPHZ算法

现在，有一个更加简单的方法来计算表观发散度。对于一个Feynman图，设 $F_E,F_I$ 为其Fermi外线数与内线数，$B_E,B_I$ 为其Bose外线数与内线数，$n_i$ 代表图中 $\mathcal L_i$ 代表的顶点数。并且 $f_i,b_i,d_i$ 在前面已经定义过。现在我们不从环路入手，而是从最开始的Feynman规则：每一条内线对应一个传播子的积分，每一个顶点处的导数给分子次数加一，每个顶点包含一个 $\delta^{(4)}(\cdots)$，其相当于给分母次数加四，但是Feynman振幅要除去整个图总体的动量守恒 $\delta^{(4)}(p_{tot})$，因此
$$
D=2B_I+3F_I+\sum_in_i d_i-4\sum_i n_i+4
$$
另一方面
$$
B_E+2B_I=\sum_i n_ib_i,\quad F_E+2F_I=\sum_i n_if_i
$$
因此
$$
D=-B_E-\dfrac32 F_E+\sum_i n_i\left(b_i+\dfrac32 f_i+d_i-4\right)-4
$$
定义**发散指数(index of divergence)** $\delta_i$：
$$
\delta_i\equiv b_i+\dfrac32 f_i+d_i-4
$$
其是对一个相互作用 $\mathcal L_i$ 而言的。则
$$
\boxed{D=-B_E-\dfrac32 F_E+\sum_i n_i\delta_i-4}
$$
现在，具体考虑一个发散的Feynman图，我需要将其对外线动量做Taylor展开，其中Bose外线展开一次可以使 $D$ 减二，而Fermi外线则可使 $D$ 减一。我的抵消项应当与这个Feynman图具有完全相同的（Fermi与Bose）外线数量，因此 $F_E,B_E$ 正是抵消项中Fermi场与Bose场的数量。同时，每当我对一根外线展开一阶时，相当于我要对抵消项中的相应场求一次导。因此抵消项中导数的数量应当 $\le D$。这样说还是比较抽象，考虑下面具体的理论：

**$\phi^4$ 相互作用理论**：
$$
\mathcal L=\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu^2\phi'^2-\dfrac{1}{4!}\lambda\phi'^4+\mathcal L_{CT}
$$
这个相互作用的发散指数为：
$$
\delta=b+\dfrac32 f+d-4=4+\dfrac32\cdot 0+0-4=0
$$
因此 $D$ 完全由外线数量决定：
$$
D=4-B_E
$$
同时考虑到 $\phi\to -\phi$ 的变换对称性，外线数量 $B_E$ 一定是偶数。故我们只需考虑 $B_E=0,2,4$ 即可。$B_E=0$ 无需考虑，因为重整化理论要求真空极化图的总和为零。首先考虑 $B_E=2,D=2$。因此我们的抵消项中含有两个 $\phi$。同时，对外线的Taylor展开只需展开一次到 $p^2$ 项，因此展开式中的两项分别需要零个和两个导数作用。故抵消项为：
$$
\mathcal L_{CT,1}=A\phi^2+B(\partial^\mu\phi)^2
$$
再考虑 $B_E=4,D=0$，我们无需Taylor展开（因为 $D=0$ ），只需引入一个含四个 $\phi$ 场的相互作用：
$$
\mathcal L_{CT,2}=C\phi^4
$$
因此 $\phi^4$ 理论的重整化抵消项即：
$$
\mathcal L_{CT}=A\phi^2+B(\partial^\mu\phi)^2+C\phi^4
$$

**$\phi^5$ 相互作用理论**：
$$
\mathcal L_I\propto \phi^5,\quad \delta=1
$$
这里 $\delta>0$，意味着引入越多的顶点就会产生表观发散度 $D$ 越大的Feynman图。因此我们需要对无数的 $D\ge 0$ 的发散图引入抵消项，这直接说明了该理论是**不可重整化**的。这里关于 $\phi^4,\phi^5$ 理论的重整化结果与[[Coleman QFT - Lecture 16. 重整化 II：推广与延伸]]最后一节是一致的。因此，可重整化与不可重整化理论就可以完全由 $\delta_i$ 的符号判断。

## 25.4 标量场与旋量场的可重整化理论综述

至此，我们可以为所有只含标量场与旋量场的可重整化理论做一个总结了。其相互作用的发散度和其量纲（不含耦合常数）有着紧密的联系。首先，Lagrangian具有的量纲为：
$$
[S]\text{ is dimensionless}\Rightarrow [\mathcal L]=[M]^4
$$
由此可以得到标量场与旋量场的量纲：
$$
[\mathcal L]=[(\partial_\mu\phi)^2]=[\bar\psi\partial\mkern-9mu/\psi]\Rightarrow [\phi]=[M],\quad [\psi]=[M]^{3/2}
$$
注意到这里的次数恰好和
$$
\delta_i\equiv b_i+\dfrac32 f_i+d_i-4
$$
的系数相同。这一点是可以证明的（这里略去）。现在，对于一个相互作用项（不含耦合常数，如 $\phi^4,\bar\psi\psi\phi$ 等）$\mathcal L_i$，其量纲为
$$
[\mathcal L_i]=[M]^{b_i+\frac32f_i+d_i}=[M]^{\delta_i+4}
$$
因此其量纲的指数完全决定了发散指数 $\delta_i$ 。耦合常数的量纲就是：
$$
[g]=[M]^{-\delta_i}
$$
一个相互作用是可重整化的，说明其 $\delta_i\le 0$。同时 $\delta_i\ge -3$。因此在四维空间中，实际上只有四种发散指数，即 $\delta_i=-3,-2,-1,0$。
从 $\delta=-3$ 开始，其仅包含一个Bose场：
$$
\delta=-3:\quad \mathcal L_i=\text{linear combination of }\phi
$$
然后
$$
\delta=-2:\quad\begin{cases}
\phi^2\\
\partial_\mu\phi\quad\text {(not Lorentz invariant)}
\end{cases}
$$
$$
\delta=-1:\quad\begin{cases}
\phi^3\\
\phi\partial_\mu\phi\quad\text {(not Lorentz invariant)}\\
\bar\psi\psi,\;\bar\psi i\gamma_5\psi
\end{cases}
$$
以上三种情况 $\delta<0$ ，此时的理论称为**超可重整化的(super-renormalizable)**。
最后
$$
\delta=0:\quad\begin{cases}
\phi^4\\
(\partial_\mu\phi)^2\\
\bar\psi\partial\mkern-9mu/\psi,\;\bar\psi\partial\mkern-9mu/i\gamma_5\psi\\
\bar\psi\psi\phi,\;\bar\psi i\gamma_5\psi\phi
\end{cases}
$$
因此如果我们处理的理论是可重整化的，我们就只会有以上这些有限可能的相互作用项。接下来介绍另一个概念：
在之前将重整化时，我们是先将Lagrangian中的质量等参数设为裸参数，再将其调整为物理参数，便可自然得到重整化反项。而现在我们则直接从消除无限大出发引入抵消项。若某一理论从后者得到的抵消项，均可以解释为对原始Lagrangian中参数进行调整的结果，则该理论称为**严格可重整化的**。
例如，考虑熟悉的赝标量介子与旋量核子的Yukawa相互作用：
$$
\mathcal L'=g\bar\psi i\gamma_5\psi\phi
$$
其有 $\delta=0$，这不是一个可重整化理论。因为下图（介子-介子散射）是对数发散的：

<div align="center">
  <img src="./pictures/Pasted image 20260211223105.png" width="300">
</div>

因此需要引入 $\phi^4$ 的抵消项，但其不能解释为原Lagrangian变换参数的结果。换言之，下面的理论就是**严格可重整化的**：
$$
\mathcal L'=g\bar\psi i\gamma_5\psi\phi-\dfrac{1}{4!}\lambda\phi^4
$$

最后，我将给出三个一般的定理：

>[!abstract] Theorem 1
>对于包含所有 $\delta\le 0$ 的相互作用的最一般的Lagrangian，其为严格可重整化的。

**Proof**：由于通过BPHZ算法引入的重整化反项满足：
$$
f=F_E,\quad b=B_E,\quad d\le D
$$
其对应的发散指数满足
$$
\delta=b+\dfrac32 f+d-4\leq B_E+\dfrac32 F_E+D-4=\sum_i n_i\delta_i
$$
由于原始Lagrangian包含的所有相互作用项都有 $\delta_i\le 0$ ，故 $\delta\le 0$。因此重整化反项一定已经被包含在原始Lagrangian中。故理论是严格可重整化的。

>[!abstract] Theorem 2
>对于包含所有 $\delta\le 0$ ，且满足特定内部对称性或宇称等对称性的相互作用的最一般的Lagrangian，其为严格可重整化的。

**Proof**：该定理只是在定理一上加上了对称性约束。这也是容易证明的，因为那些违反对称性的图的振幅一定是零。因此这些图不需要额外构造反项去抵消它们。
作为一个例子，前面提到
$$
\mathcal L'=g\bar\psi i\gamma_5\psi\phi-\dfrac{1}{4!}\lambda\phi^4
$$
是严格可重整化的。这是因为这正是符合宇称的所有相互作用。与之类似的，考虑下面有同位旋对称性与宇称不变性的Yukawa理论：
$$
\mathcal L'=g\bar N\vec\tau i\gamma_5N\cdot\vec \Phi-\dfrac{1}{4!}\lambda(\vec \Phi\cdot\vec\Phi)^2
$$
同样是严格可重整化的。

>[!abstract] Theorem 3
>如果我们在定理2的Lagrangian中引入了破坏对称性的相互作用项，只要这些破坏对称性的项是超可重整化的，即其 $\delta_i<0$，则理论仍然是严格可重整化的。这称为**Symanzik's Rule**。

**Proof**：这里用到的关键点仍是式子：
$$
\delta<\sum_i n_i\delta_i
$$
因此当一个图包含了那些破坏对称性的相互作用顶点时，其生成的重整化反项的 $\delta$ 一定小于此项的 $\delta_i$。因此……（待补充）
例如，对于下面的理论：
$$
\mathcal L'=g\bar N\vec\tau i\gamma_5N\cdot\vec \Phi-\dfrac{1}{4!}\lambda(\vec \Phi\cdot\vec\Phi)^2\to\mathcal L'+\dfrac12\epsilon(\phi^0)^2
$$
使得 $\pi^0$ 和 $\pi^\pm$ 有不同的质量。但该项 $\delta=-2$，因此这个理论仍然是严格可重整化的。

---






