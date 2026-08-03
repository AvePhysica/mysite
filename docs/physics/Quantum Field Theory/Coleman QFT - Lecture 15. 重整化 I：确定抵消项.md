---
title: "Coleman QFT Lecture 15: 重整化 I：确定抵消项"
---

在[Coleman QFT - Lecture 14. LSZ约化公式](./Coleman%20QFT%20-%20Lecture%2014.%20LSZ%E7%BA%A6%E5%8C%96%E5%85%AC%E5%BC%8F.md)中，我们回顾了Model 3，并对其进行了重整化：
$$
\mathcal L=\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu^2\phi'^2+\partial_\mu\psi'^*\partial^\mu\psi'-m^2\psi'^*\psi'-g_0\psi'^*\psi'\phi'+\mathcal L_{CT}
$$
$$
\mathcal L_{CT}=A\phi'+\dfrac12 B(\partial_\mu\phi')^2-\dfrac12 C\phi'^2+D\partial_\mu\psi'^*\partial^\mu\psi'-E\psi'^*\psi'-F\psi'^*\psi'\phi'+\text{const}
$$
抵消项的系数由重整化条件确定：
1. $\langle0|\phi'|0\rangle=0\to A$
2. $\langle q|\phi'|0\rangle=1\to B$
3. 真实介子质量 $\mu\to C$
4. $\langle p|\psi'(0)|0\rangle=1\to D$
5. 真实核子质量 $m\to E$
6. 耦合常数定义 $g\to F$
本章来确定这些抵消项的系数。
## 15.1 系数 $A$ 的确定

首先，$A$ 由波函数重整化条件：
$$
\langle 0|\phi'(0)|0\rangle=0
$$
确定。其可以视为单点Green函数，即：

<div align="center">
  <img src="./pictures/Pasted image 20260108211406.png" width="500">
</div>

$A$ 可以用 $g$ 的幂级数展开。这是因为当 $g_0=0$ 时，初始理论就是自由场的Lagrangian，故自然满足所有重整化条件，因此也不会存在抵消项。故
$$
A=\sum_n A_n,\quad \text{where }\;A_n\propto g^n
$$
抵消项 $A\phi'$ 对应的Feynman图可表示为：

<div align="center">
  <img src="./pictures/Pasted image 20260108211925.png" width="500">
</div>

现在，我们假设已经确定了所有抵消项，直至 $O(g^{n-1})$ 阶的值。现在来考虑 $O(g^n)$ 阶的重整化条件，其可以分为阴影内有一个顶点、以及有不止一个顶点的两部分。前者正是 $A_n\phi'$，而后者则保证每个顶点的阶数都是 $O(g^{n-1})$ 及以下的，因此根据假设是已知的，这样就可以解出 $A_n$：

<div align="center">
  <img src="./pictures/Pasted image 20260108212441.png" width="500">
</div>

这一重整化条件还给了我们另一启示，考虑具有下面结构的图：

<div align="center">
  <img src="./pictures/Pasted image 20260108212600.png" width="300">
</div>

我将其称为“蝌蚪图”。重整化条件给出所有这种图的求和为零，这是因为：

<div align="center">
  <img src="./pictures/Pasted image 20260108212741.png" width="400">
</div>

## 15.2 Kallen-Lehmann 谱表示

接下来，我们来研究两点函数 $\langle 0|\phi'(x)\phi'(y)|0\rangle$。可以用它构造Green函数。我们有重整化条件：
$$
\langle n|\phi'(y)|0\rangle=\mathrm{e}^{ip_n\cdot y}\langle n|\phi'(0)|0\rangle,\quad \langle p|\phi'(0)|0\rangle=1
$$
我们可以插入完备基：
$$
\langle 0|\phi'(x)\phi'(y)|0\rangle=\sum_{|n\rangle}\langle 0|\phi'(x)|n\rangle\langle n|\phi'(y)|0\rangle=\sum_{|n\rangle}\mathrm{e}^{-ip_n\cdot(x-y)}|\langle n|\phi'(0)|0\rangle|^2
$$
后面的求和中，真空态 $\langle 0|\phi'(0)|0\rangle=0$，剩下的部分再拆成单粒子态与多粒子态：
$$
\mathrm{RHS}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32\omega_p}\mathrm{e}^{-ip\cdot (x-y)}+\sum_{n>1}'\mathrm{e}^{-ip_n\cdot(x-y)}|\langle n|\phi'(0)|0\rangle|^2
$$
现在我们使用一个trick，将多粒子态求和部分改写为：
$$
\sum_{n>1}'\mathrm{e}^{-ip_n\cdot(x-y)}|\langle n|\phi'(0)|0\rangle|^2=\int\dfrac{\mathrm{d}^4q}{(2\pi)^3}\mathrm{e}^{-iq\cdot(x-y)}\underbrace{\sum_{n>1}'(2\pi)^3\delta^{(4)}(q-p_n)|\langle n|\phi'(0)|0\rangle|^2}_{\sigma(q^2)\theta(q^0),\text{ Lorentz invariant}}=\int\dfrac{\mathrm{d}^4q}{(2\pi)^3}\sigma(q^2)\theta(q^0)\mathrm{e}^{-iq\cdot(x-y)}
$$
这里我们将暂时抛弃原先每一个 $\mathrm dq$ 配一个 $(2\pi)^{-1}$ 的惯例，而是除以 $(2\pi)^3$，后面会看到这样定义的方便之处。函数 $\sigma(q^2)$ 即定义为：
$$
\sigma(q^2)\theta(q^0)=\sum_{n>1}'(2\pi)^3\delta^{(4)}(q-p_n)|\langle n|\phi'(0)|0\rangle|^2
$$
其有一些性质，由于 $n\geq 2$，因此 $p_n^2$ 一定会大于最轻的两个粒子的质量和的平方，这可以写为：
$$
\sigma(q^2)=0,\quad \text{if }\;q^2<\min(4m^2,4\mu^2)
$$
但这一结论只在微扰的意义下成立，实际的理论中可能存在束缚态。对于实际理论，条件写为：
$$
\sigma(q^2)=0,\quad \text{if }\;q^2<\mu^2+\eta,\;\; \text{for some }\,\eta>0 
$$
回到两点函数 $\langle 0|\phi'(x)\phi'(y)|0\rangle$ 上来，我们曾经定义过
$$
\Delta_+(x-y,\mu^2)\equiv\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32\omega_p}\mathrm{e}^{-ip\cdot (x-y)}=\int\dfrac{\mathrm{d}^4p}{(2\pi)^3}\,\delta(p^2-\mu^2)\theta(p^0)\mathrm{e}^{-ip\cdot (x-y)}
$$
则
$$
\langle 0|\phi'(x)\phi'(y)|0\rangle=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32\omega_p}\mathrm{e}^{-ip\cdot (x-y)}+\int\dfrac{\mathrm{d}^4q}{(2\pi)^3}\sigma(q^2)\theta(q^0)\mathrm{e}^{-iq\cdot(x-y)}=\Delta_+(x-y,\mu^2)+\int_0^\infty\mathrm{d}a^2\,\sigma(a^2)\Delta_+(x-y,a^2)
$$
上面的表达式称为**Kallen-Lehmann谱表示**。对于自由场，上式没有后面关于多粒子态的项，正因为存在相互作用，故出现了额外的后一项。上式也常常写成下面的形式：
$$
\langle 0|\phi'(x)\phi'(y)|0\rangle=\int_0^\infty\mathrm{d}a^2\,\rho(a^2)\Delta_+(x-y,\mu^2),\quad \rho(a^2)=\delta(a^2-\mu^2)+\sigma(a^2)
$$
我们可以更往前一步。考虑对易子：
$$
\langle 0|[\phi'(x),\phi'(y)]|0\rangle=i\Delta(x-y,\mu^2)+\int_0^\infty\mathrm{d}a^2\,\sigma(a^2)\,i\Delta(x-y,a^2)
$$
我们知道：
$$
i\dfrac{\partial}{\partial x^0}\Delta(x-y)\bigg|_{x^0=y^0}=-i\delta^{(3)}(\vec x-\vec y)
$$
考虑等时对易子：
$$
\langle 0|[\phi'(\vec x,t),\dot\phi'(\vec y,t)]|0\rangle=i\delta^{(3)}(\vec x-\vec y)\left[1+\int_0^\infty\mathrm{d}a^2\,\sigma(a^2)\right]
$$
但是另一方面我们知道 $\phi'$ 由Heisenberg场重整化得到，而Heisenberg场与原先的自由场之间只是差一个绘景变换，因此对易子不变，故
$$
\langle 0|[\phi'(\vec x,t),\dot\phi'(\vec y,t)]|0\rangle=Z_3^{-1}\langle 0|i\delta^{(3)}(\vec x-\vec y)|0\rangle=Z_3^{-1}i\delta^{(3)}(\vec x-\vec y)
$$
我们得到了
$$
Z_3^{-1}=1+\int_0^\infty\mathrm{d}a^2\,\sigma(a^2)
$$
上式称为**Lehmann求和规则**。由于 $\sigma(a^2)>1$，故 $Z_3<1$。同时也可看出当 $Z_3=0$ 时退化为自由场理论，故不存在 $\sigma(a^2)$。

## 15.3 重整化的介子传播子 $\tilde D'$

现在我们来考虑传播子，其对应于两点Green函数：
$$
\tilde G'^{(2)}(k_1,k_2)=\int\mathrm{d}^4x\,\mathrm{d}^4y\,\mathrm{e}^{-ik_1\cdot x-ik_2\cdot y}\langle 0|T(\phi'(x)\phi'(y))|0\rangle
$$
由谱定理：
$$
\langle 0|\phi'(x)\phi'(y)|0\rangle=\Delta_+(x-y,\mu^2)+\int_0^\infty\mathrm{d}a^2\,\sigma(a^2)\Delta_+(x-y,a^2)
$$
在[Coleman QFT - Problem 1](./Coleman%20QFT%20-%20Problem%201.md)的第三题，我们对自由场证明了：
$$
\langle 0|T(\phi(x)\phi(y))|0\rangle=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
现在多出的一项实际上具有相同的结构，右侧的被积函数正是逆Fourier变换的结果，直接代入可以得到：
$$
\tilde G'^{(2)}(p,p')=(2\pi)^4\delta^{(4)}(p+p')\tilde D'(p^2)
$$
其中
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2+i\epsilon}+\int_0^\infty\mathrm{d} a^2\,\sigma(a^2)\dfrac{i}{p^2-a^2+i\epsilon}
$$
这个函数的解析形式是比较有趣的。如果我们不考虑小虚部 $i\epsilon$，第一项存在在 $p^2=\mu^2$ 的极点，而第二项则存在一条实轴上的割线，割线上满足 $\sigma(a^2)\ne 0$，因此起点为 $\mu^2+\eta$。小虚部 $i\epsilon$ 代表取割线上方的解析分支。如下图所示。

<div align="center">
  <img src="./pictures/Pasted image 20260108232626.png" width="600">
</div>

>[!tip] 补充
>这里插一段。从 $\tilde D'(p^2)$ 的形式出发，可以得到下面的式子：
>$$[-i\tilde D'(p^2)]^*=-i\tilde D'((p^2)^*)$$
>这称为**Schwarz reflection principle**。其说明当我们去掉分子的 $i$ 时，对 $p^2$ 取共轭相当于对函数取共轭，这一操作会使割线上方的点变成下方的点。割线两侧点的差异来源于 $-i\tilde D'(p^2)$ 的虚部，有
>$$\mathrm{Im}\,[-i\tilde D'(p^2)]=-\pi\sigma(p^2),\quad \text{for real }\, p^2>\mu^2$$

别忘了我们做了这么多是为什么，我们的目的是确定反项系数。注意到真实介子质量为 $\mu$ 在 $\tilde D'$ 中体现为其有 $p^2=\mu^2$ 的极点，而重整化条件 $\langle q|\phi'(0)|0\rangle=1$ 则对应于谱定理中 $\Delta_+(x-y,\mu^2)$ 前的系数为 $1$，这又对应于极点 $p^2=\mu^2$ 的留数为 $i$。这样，决定 $B,C$ 的重整化条件便可以完全由介子传播子在 $p^2=\mu^2$ 处的解析结构表出：$p^2=\mu^2$ **是传播子的一阶极点、且其留数为 $i$。** 接下来，要做的就很明显了。只需用Feynman图来计算两点Green函数，由于抵消项作为相互作用出现，其必出现在Green函数的表达式中，此时利用上面的条件便可以逐阶求解系数 $B,C$。

实际操作之前，我先定义一种特别的Green函数，称为**单粒子不可约Green函数** (one-particle irreducible Green's function)，用 1PI 表示：

<div align="center">
  <img src="./pictures/Pasted image 20260109101123.png" width="400">
</div>

其定义为所有满足**不能通过剪断一根线变成不连通图**条件的连通图之和。同时，按照惯例，1PI 图的表达式**不包含外线传播子**与能动量守恒的delta函数。对于有两根外线的1PI图，其表达式记为 $-i\tilde\Pi'(p^2)$：

<div align="center">
  <img src="./pictures/Pasted image 20260109102530.png" width="300">
</div>

现在，两点Green函数可以拆成下面的级数形式：

<div align="center">
  <img src="./pictures/Pasted image 20260109102604.png" width="700">
</div>

记 $\tilde D(p^2)=\dfrac{i}{p^2-\mu^2+i\epsilon}$ 为自由介子场传播子，则
$$
\tilde D'(p^2)=\tilde D+\tilde D(-i\tilde\Pi'(p^2))\tilde D+\tilde D(-i\tilde\Pi'(p^2))\tilde D(-i\tilde\Pi'(p^2))\tilde D+\cdots=\dfrac{1}{p^2-\mu^2-\tilde \Pi'(p^2)+i\epsilon}
$$
现在，我们看到质量项好像变成了 $\mu^2+\tilde\Pi'(p^2)$，因此 $\tilde\Pi'(p^2)$ 也称为介子的**自能函数**。重整化条件表述为 $p^2=\mu^2$ 处的解析性质，我们将 $\tilde\Pi'(p^2)$ 在此处展开：
$$
\tilde\Pi'(p^2)=\tilde \Pi'(\mu^2)+(p^2-\mu^2)\dfrac{\mathrm{d}\tilde\Pi'}{\mathrm{d}p^2}\bigg|_{\mu^2}+\cdots
$$
$p^2=\mu^2$ 是一阶极点，且留数值为 $i$，这等价于条件：
$$
\tilde \Pi'(\mu^2)=0,\quad \dfrac{\mathrm{d}\tilde\Pi'}{\mathrm{d}p^2}\bigg|_{\mu^2}=0\tag{*}
$$
这样，两个重整化条件便由介子的自能函数的性质表示出来。再来考虑 $B,C$ 的确定，与之有关的抵消项为：
$$
\mathcal L_{CT}=\cdots+\dfrac12 B(\partial_\mu\phi')^2-\dfrac12 C\phi'^2+\cdots
$$
基本顶点为：

<div align="center">
  <img src="./pictures/Pasted image 20260109103536.png" width="500">
</div>

（用了导数相互作用的技巧）类似的，$B,C$ 可以表示为 $g$ 的幂级数：
$$
B=\sum_n B_n,\quad C=\sum_n C_n,\quad B_n,C_n\propto g^n
$$
同样的，$\tilde \Pi'(p^2)$ 中 $O(g^n)$ 阶的项可以分为只有一个顶点的图以及不止一个顶点的图，后者每个顶点都是 $O(g^{n-1})$ 阶及以下的，我们可以假设其为已知的，因此：
$$
-i\tilde\Pi'(p^2)=(\text{known stuff, to }O(g^{n-1}))+i(B_np^2-C_n)
$$
代入重整化条件(\*)式得到：
$$
i(B_n\mu^2-C_n)=(\text{known stuff})\big|_{\mu^2},\quad iB_n=-\dfrac{\mathrm{d}}{\mathrm{d}p^2}\bigg|_{\mu^2}(\text{known stuff})
$$

这样我们就给出了 $B,C$ 的确定方案。对于核子重整化条件4,5，其与介子重整化的处理方法是完全相同的。核子的传播子与自能函数表示为：

<div align="center">
  <img src="./pictures/Pasted image 20260109104624.png" width="30%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20260109104636.png" width="29%" style="display: inline-block;">
</div>

与之有关的抵消项为：
$$
\mathcal L_{CT}=\cdots+D\partial_\mu\psi'^*\partial^\mu\psi'-E\psi'^*\psi'+\cdots
$$
重整化条件则为：
$$
\tilde\Sigma'(m^2)=0,\quad \dfrac{\mathrm{d}\tilde\Sigma'}{\mathrm{d}p^2}\bigg|_{m^2}=0
$$
同样可以确定 $D,E$。

## 15.4 介子自能的最低阶计算

前面都只是形式上的讨论，我们来实际算一算最低阶下（即 $O(g^2)$ 阶）的介子自能函数：

<div align="center">
  <img src="./pictures/Pasted image 20260109232105.png" width="800">
</div>

上面的两个图有贡献，我们将其写为：
$$
-i\tilde \Pi'(p^2)=-i\tilde\Pi^f(p^2)+i(B_2p^2-C_2)
$$
利用重整化条件：
$$
\tilde \Pi'(\mu^2)=0\Rightarrow C_2=B_2\mu^2-\tilde \Pi^f(\mu^2),\quad \dfrac{\mathrm{d}\tilde\Pi'}{\mathrm{d}p^2}\bigg|_{\mu^2}=0\Rightarrow B_2=\dfrac{\mathrm{d}\tilde\Pi^f}{\mathrm{d}p^2}\bigg|_{\mu^2}
$$
代入得到：
$$
-i\tilde\Pi'(p^2)=-i\left[\tilde \Pi^f(p^2)-\tilde \Pi^f(\mu^2)-(p^2-\mu^2)\dfrac{\mathrm{d}\tilde \Pi^f}{\mathrm{d} p^2}\bigg|_{\mu^2}\right]
$$
当然，$\tilde \Pi^f$ 是可以计算的。其只需对两条内线积分即可：
$$
-i\tilde \Pi^f(p^2)=(-ig)^2\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\dfrac{i}{q^2-m^2+i\epsilon}\dfrac{i}{(q+p)^2-m^2+i\epsilon}
$$
先预告一下，先考察被积函数在 $q\to\infty$ 时的行为，有
$$
\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\dfrac{i}{q^2-m^2+i\epsilon}\dfrac{i}{(q+p)^2-m^2+i\epsilon}\sim\dfrac{\mathrm{d}q}{q}\;\;\text{is divergent}
$$
这里，我就要提到**重整化**的含义了。没有人会在写出初始Model 3的Lagrangian后，就意识到质量与耦合系数需要重整化。实际上，他们一开始没有重整化，但是此时遇到了积分的发散。因此，重整化是使得**积分收敛**的操作。上面的 $i\tilde \Pi^f$ 的确是发散的，但是在重整化下，实际的介子自能函数 $i\tilde\Pi'(p^2)$ 确实是收敛的。在验证这一点之前，我先介绍一个Feynman提出的公式：
$$
\int_0^1\mathrm{d}x\,\dfrac{1}{[ax-b(1-x)]^2}=\dfrac{1}{ab}
$$
这里的变量 $x$ 称为一个Feynman参数，上面的公式只是一个简单的定积分而已，你可以验证它。我们取 $a,b$ 为积分中的两个分母。因此，积分可以化为：
$$
-i\tilde \Pi^f(p^2)=g^2\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\int\mathrm{d}x\,\dfrac{1}{[q^2+2p\cdot qx+p^2x-m^2+i\epsilon]^2}
$$
然后是交换积分顺序，我们做换元 $k=q+px$，则
$$
-i\tilde \Pi^f(p^2)=g^2\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\int\mathrm{d}x\,\dfrac{1}{[k^2-p^2x^2+p^2x-m^2+i\epsilon]^2}
$$
现在，我们交换积分顺序，在对 $k$ 积分时，我们不得不面临发散的问题。但一个显而易见的事实是，$\tilde \Pi^f(p^2)-\tilde \Pi^f(\mu^2)$ 在大 $q$ 时按 $q^{-6}$ 趋于零，因此积分收敛。同时， $\dfrac{\mathrm{d}\tilde \Pi^f}{\mathrm{d} p^2}\bigg|_{\mu^2}$ 也是明显收敛的，因此 $\tilde\Pi'(p^2)$ 也是收敛的。在此，我们先暂停一下，先介绍类似积分的一个积分表，这将会让我们更方便的处理此类问题。而介子的自能函数的完整计算会留到下一章的最开始进行。

## 15.5 单圈图的积分表

在上一节中，我们看到往往图中的闭合圈可能带来积分发散的问题。下一章中，我们还会遇到不止两条边的圈图的计算，其可以用**Feynman参数化**的技巧将其化成对Feynman参数的积分，有时会变得更简单。此时，对圈动量 $q$ 的积分往往具有以下形式：
$$
I_n=\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\dfrac{1}{(q^2+a+i\epsilon)^n},\quad a\in\mathbb R,\,n\in\mathbb Z_+
$$
此积分在 $n\geq 3$ 的情况下是收敛的。这个积分是在闵氏空间中进行的，让我将其显式的写出来：
$$
I_n=\int\dfrac{\mathrm{d} q_0\,\mathrm{d}^3\vec q}{(2\pi)^4}\dfrac{1}{(q_0^2-|\vec q|^2+a+i\epsilon)^n}
$$
接下来，你当然可以直接积分。但有一个奇妙的trick，它被称为**Wick旋转**。考虑被积函数在 $q_0$ 平面上的解析性质，$|\vec q|^2-a$ 可以大于零，也可以小于零，但不管哪一种，我们都可以将沿着实轴 $\mathrm{Re}\;q_0$ 的积分路径旋转至沿虚轴进行，如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20260110000128.png" width="600">
</div>

这里所谓的“旋转”实际上是取了大圆弧围道，使得围道**内部无极点**。这样的话，可以定义：
$$
q_0\equiv iq_4,\quad q^2=-q_E^2=-(|\vec q|^2+q_4^2)
$$
因此原先的积分变成对 $q_E$ 的四维**欧氏空间**的积分：
$$
I_n=i\int\dfrac{\mathrm{d}^4 q_E}{(2\pi)^4}\dfrac{1}{(-q_E^2+a+i\epsilon)^n}
$$
这就是Wick旋转的含义，可以将一个**闵氏空间**的积分转化为**欧氏空间**的积分。
接下来自然是化成球坐标，此时是四维情形，四维立体角为 $2\pi^2$ ，这可以由Gauss积分得到，这里就不演示了，因此
$$
\int\mathrm{d}^4z=2\pi^2\int z^3\mathrm{d} z=\pi^2\int z^2\,\mathrm{d}(z^2)
$$
因此做换元 $x=q_E^2$，得到：
$$
I_n=\dfrac{i}{16\pi^2}\int_0^\infty\dfrac{x\,\mathrm{d}x}{(-x+a)^n}=\dfrac{i}{16\pi^2}\int_0^\infty\left[\dfrac{a}{(a-x)^n}-\dfrac{1}{(a-x)^{n-1}}\right]\mathrm{d}x
$$
后面的积分只有当 $n\geq 3$ 时才是收敛的，结果为：
$$
I_n=\dfrac{i}{16\pi^2(n-1)(n-2)a^{n-2}},\quad n\geq 3
$$
对于 $n=1,2$ ，我们可以设置截断 $\Lambda$，即
$$
I_1=\dfrac{i}{16\pi^2}\int_0^\Lambda\dfrac{x\,\mathrm{d}x}{-x+a}=-\dfrac{i}{16\pi^2}\left[\Lambda+a\ln\dfrac{\Lambda-a}{-a}\right]
$$
$$
I_2=\dfrac{i}{16\pi^2}\int_0^\Lambda\dfrac{x\,\mathrm{d}x}{(-x+a)^2}=-\dfrac{i}{16\pi^2}\left[1+\dfrac{a}{\Lambda-a}-\ln\dfrac{\Lambda-a}{-a}\right]
$$
同时，我们知道高能截断会通过重整化消掉，因此简单的丢掉与 $\Lambda$ 有关的截断项，得到：
$$
I_1=\dfrac{i}{16\pi^2}a\ln(-a)+\cdots,\quad I_2=-\dfrac{i}{16\pi^2}\ln(-a)+\cdots
$$
这样我们就完成了 $I_n$ 的积分表，在下一章进行一些具体计算时会多次引用这一节的结论。

>[!tip]
>这里简单的设置截断有些不让人满意，让我将其解释得更清楚。首先对于 $I_1(a)$，在实际的计算中，我们会遇到的是其线性组合，而组合整体是收敛的。即
>$$\int_0^\infty x\mathrm{d}x\sum_n\dfrac{C_n}{x-a},\quad \sum_n C_n=\sum_n a_nC_n=0$$
>请验证这样的组合的分母实际是三次及以上的，因此是收敛的。从截断表达式：
>$$I_1-\dfrac{i}{16\pi^2}\left[\Lambda+a\ln\dfrac{\Lambda-a}{-a}\right]$$
>可以看出所有含 $\Lambda$ 的项在线性组合下都会消失，因此我们可以说 $I_1=\dfrac{i}{16\pi^2}a\ln(-a)$，不影响组合整体的结果。
>同样的，对于发散的 $I_2(a)$，也可以认为其只会以收敛的线性组合的形式出现：
>$$I_2(a)=\int_0^\infty x\mathrm{d}x\sum_n\dfrac{C_n}{(x-a)^2},\quad \sum_n C_n=0$$
>对于组合整体，可以等效认为 $I_2=-\dfrac{i}{16\pi^2}\ln(-a)$。
>最后，可以发现 $I_n$ 可以对 $a$ 求导增加分母的幂次，可以得到
>$$I_n(a)=\dfrac{(-1)^{n-1}}{(n-1)!}\dfrac{\mathrm{d}^{n-1}I_n(a)}{\mathrm{d}a^{n-1}}$$

---








