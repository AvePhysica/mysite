---
title: "Coleman QFT Lecture 14: LSZ约化公式"
---

本章紧接上一章[Coleman QFT - Lecture 13. Green函数与Heisenberg场](./Coleman%20QFT%20-%20Lecture%2013.%20Green%E5%87%BD%E6%95%B0%E4%B8%8EHeisenberg%E5%9C%BA.md)，来回答第二个问题：

>[!question]
>我们前面知道通过将Green函数限制在外线的质壳上能得到散射矩阵的矩阵元。这一关系在新的散射理论中是否仍成立？以四点函数为例：
>$$\langle k_3,k_4|S-1|k_1,k_2\rangle=\prod_{r=1}^4[(-i)(k_r^2-\mu^2)]\tilde G^{(4)}(-k_3,-k_4,k_1,k_2)$$
>是否成立？

我们先回忆一下，在上一章的最后一节中，我们对于每一个单粒子态 $|f\rangle$：
$$
|f\rangle=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^32\omega_k}F(\vec k)|k\rangle
$$
都构造了一个KG方程的解：
$$
f(x)=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^32\omega_k}F(\vec k)\mathrm{e}^{-ik\cdot x},\quad (\square^2+\mu^2)f(x)=0
$$
同时构造了一个时间依赖的算符：
$$
\phi'^{f}(t)\equiv i\int\mathrm{d}^3\vec x\,[\phi'(x)\partial_0f(x)-f(x)\partial_0\phi'(x)]
$$
其满足：
$$
\lim_{t\to\pm\infty}\langle\psi|\phi'^f(t)|0\rangle=\langle\psi|f\rangle
$$
因此我们说 $\phi'^f(t)$ 在无穷远的渐近条件下变成一个**单粒子态的产生算符**。本章首先来看看双粒子态的产生算符：

## 14.1 双粒子态

我们实际上还有另一个方程：
$$
\lim_{t\to\pm\infty}\langle0|\phi'^f(t)|\psi\rangle=0
$$
因此说 $\phi'^f(t)$ 是一个产生算符。类似的，我们应当期待 $\psi'^{f\dagger}(t)$ 为一个湮灭算符：
$$
\lim_{t\to\pm\infty}\langle0|\phi'^{f\dagger}(t)|\psi\rangle=\langle f|\psi\rangle,\quad \lim_{t\to\pm\infty}\langle\psi|\phi'^{f\dagger}(t)|0\rangle=0
$$
现在，我们假设有两个波包单粒子态 $|f_1\rangle, |f_2\rangle$，其展开系数为 $F_1(\vec k), F_2(\vec k)$。现在假设两者的展开式中没有相等动量的平面波分量，即
$$
F_1(\vec k)F_2(\vec k)=0,\quad \text{for all }\,\vec k
$$
现在来考虑 $\displaystyle\lim_{t\to +\infty}\langle\psi|\phi'^{f_2\dagger}(t)|f_1\rangle$。在我们的假设下，当 $t\to+\infty$ 时，由于两个态 $|f_1\rangle, |f_2\rangle$ 没有动量相同的分量，因此其应该在无穷远的未来足够远离，即两者是不相关的。因此，我们自然会有以下推论：
$$
\lim_{t\to +\infty}\langle\psi|\phi'^{f_2}(t)|f_1\rangle=\langle \psi|f_1,f_2\rangle^{\text{out}}
$$
当然，这样的分析还是很粗糙的，但具体的数学证明是比较繁琐的，故在此略去。但还是假装我们完成了证明。另一方面，有
$$
\lim_{t\to -\infty}\langle\psi|\phi'^{f_2}(t)|f_1\rangle=\langle \psi|f_1,f_2\rangle^{\text{in}}
$$
现在我们便构造出了双粒子态的**出态与入态**，将其推广至多粒子态是简单的，只需继续作用产生算符即可。

## 14.2  LSZ约化公式的证明

现在，我们可以开始证明LSZ约化公式了，这个公式的表述整理如下

>[!tip] LSZ约化公式
> 首先按下式定义**重整化场**对应的Green函数：
> $$G'^{(n)}(x_1,\cdots,x_n)\equiv\langle0|T(\phi'(x_1)\cdots\phi'(x_n))|0\rangle=Z_3^{-n/2}G^{(n)}(x_1,\cdots,x_n)$$
> 由Fourier变换定义动量空间中的Green函数：
> $$\tilde G'^{(n)}(k_1,\cdots,k_n)\equiv\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\mathrm{e}^{-ik_1\cdot x_1-\cdots-ik_n\cdot x_n}G'^{(n)}(x_1,\cdots,x_n)$$
> 则
> $$\langle k_{i+1},\cdots,k_n|S-1|k_1,\cdots,k_i\rangle=(-i)^4\prod_{r=1}^n(k_r^2-\mu^2)\tilde G'^{(n)}(k_1,\cdots,k_i,-k_{i+1},\cdots,-k_n)$$
>我们可以把总的LSZ定理表述为：（以四点函数为例）
>$$\langle k_3,k_4|S-1|k_1,k_2\rangle=(i)^4\int\mathrm{d}^4x_1\mathrm{d}^4x_2\mathrm{d}^4x_3\mathrm{d}^4x_4\,\mathrm{e}^{-ik_1\cdot x_1-ik_2\cdot x_2+ik_3\cdot x_3+ik_4\cdot x_4}\times\prod_{r=1}^4(\square^2_r+\mu^2)\langle0|T(\phi'(x_1)\phi'(x_2)\phi'(x_3)\phi'(x_4))|0\rangle$$
>另一方面，由于物理的散射过程都是用波包态描述的，LSZ约化公式也可表述为以下形式：
>$$\langle g_1,g_2|S-1|f_1,f_2\rangle=(i)^4\int\mathrm{d}^4x_1\mathrm{d}^4x_2\mathrm{d}^4x_3\mathrm{d}^4x_4\,g_1^*(x_1)g_2^*(x_2)f_{1}(x_3)f_2(x_4)\times\prod_{r=1}^4(\square^2_r+\mu^2)\langle0|T(\phi'(x_1)\phi'(x_2)\phi'(x_3)\phi'(x_4))|0\rangle$$

下面我们来证明LSZ约化公式。首先从一个有用的引理开始：假设 $|f\rangle$ 是一个单粒子波包态，$f(x)$ 是其对应的KG方程的解。假设 $A(x)$ 是另一个单粒子场，我们可以类比定义其产生算符：
$$
A^f(t)\equiv i\int\mathrm{d}^3\vec x\,[A(\partial_0 f)-f(\partial_0 A)]
$$
引理为：
$$
i\int\mathrm{d}^4x\,f(x)(\square^2+\mu^2)A(x)=\left(\lim_{t\to-\infty}-\lim_{t\to+\infty}\right)A^f(t)
$$

证明是直接的，计算左侧得到：
$$
\begin{align}
\mathrm{LHS}&=i\int\mathrm{d}^4x\,f\,[\partial_0^2A-\nabla^2A+\mu^2A]\\
&=i\int\mathrm{d}^4x\,[f\,\partial_0^2A+A(-\nabla^2+\mu^2)f]\\
&=i\int\mathrm{d}^4x\,[f(\partial_0^2A)-A(\partial_0^2f)]\\
&=i\int\mathrm{d}t\,\partial_0\int\mathrm{d}^3\vec x\,[f(\partial_0A)-A(\partial_0 f)]\\
&=-\int\mathrm{d}t\,\partial_0 A^f(t)=\left(\lim_{t\to-\infty}-\lim_{t\to+\infty}\right)A^f(t)=\mathrm{RHS}
\end{align}
$$
假设 $A$ 是一个厄米场，我们可以取引理的复共轭，得到：
$$
A^{f\dagger}(t)=-i\int\mathrm{d}^3\vec x\,[A(\partial_0f^*)-f^*(\partial_0 A)]
$$
$$
i\int\mathrm{d}^4x\,f^*(x)(\square^2+\mu^2)A(x)=\left(\lim_{t\to+\infty}-\lim_{t\to-\infty}\right)A^{f\dagger}(t)
$$
现在正式开始对LSZ约化公式的证明。仍以四点函数为例来处理，我们要证明的式子是：
$$
\langle g_1,g_2|S-1|f_1,f_2\rangle=(i)^4\int\mathrm{d}^4x_1\mathrm{d}^4x_2\mathrm{d}^4x_3\mathrm{d}^4x_4\,g_1^*(x_1)g_2^*(x_2)f_{1}(x_3)f_2(x_4)\times\prod_{r=1}^4(\square^2_r+\mu^2)\langle0|T(\phi'(x_1)\phi'(x_2)\phi'(x_3)\phi'(x_4))|0\rangle
$$
可以看到，右侧的 $\langle0|T(\phi'(x_1)\cdots\phi'(x_n))|0\rangle$ 可以视为 $x_4$ 的场，利用引理可以完成对 $x_4$ 的积分：
$$
\mathrm{RHS}=\left(\lim_{t_4\to-\infty}-\lim_{t_4\to+\infty}\right)\,i^3\int\mathrm{d}^4x_1\mathrm{d}^4x_2\mathrm{d}^4x_3\,g_1^*(x_1)g_2^*(x_2)f_{1}(x_3)\times\prod_{r=1}^4(\square^2_r+\mu^2)\langle0|T(\phi'(x_1)\phi'(x_2)\phi'(x_3)\phi'^f(t_4))|0\rangle
$$
与之类似的，我们可以完成剩下三个积分：
$$
\mathrm{RHS}=\prod_{r=1}^{2}\left(\lim_{t_r\to\infty}-\lim_{t_r\to-\infty}\right)\prod_{s=3}^{4}\left(\lim_{t_s\to-\infty}-\lim_{t_s\to-\infty}\right)\langle 0|T(\phi'^{g_1\dagger}(t_1)\phi'^{g_2\dagger}(t_2)\phi'^{f_1}(t_3)\phi'^{f_2}(t_4))|0\rangle
$$
现在，我们回忆起 $\phi'^{f}$ 与 $\phi'^{f\dagger}$ 的性质：
$$
\lim_{t\to\pm\infty}\langle\cdots|\phi'^{f\dagger}(t)|0\rangle=0,\quad \lim_{t\to\pm\infty}\langle0|\phi'^{f}(t)|\cdots\rangle=0
$$
因此在上面的式子中，由于时序积的存在，当 $t_3$ 或 $t_4$ 趋于 $+\infty$ 时其会放到左侧，因此变成零，也就是说：
$$
\begin{align}
\mathrm{RHS}&=\prod_{r=1}^{2}\left(\lim_{t_r\to\infty}-\lim_{t_r\to-\infty}\right)\langle0|T(\phi'^{g_1\dagger}(t_1)\phi'^{g_2\dagger}(t_2))\phi'^{f_1}(-\infty)\phi'^{f_4}(-\infty)|0\rangle\\&=\prod_{r=1}^{2}\left(\lim_{t_r\to\infty}-\lim_{t_r\to-\infty}\right)\langle 0|T(\phi'^{g_1\dagger}(t_1)\phi'^{g_2\dagger}(t_2))|f_1,f_2\rangle^{\text{in}}\\&=\left(\lim_{t_1\to\infty}-\lim_{t_1\to-\infty}\right)\left(\langle g_2|\phi'^{g_1\dagger}(t_1)|f_1,f_2\rangle^{\text{in}}-\lim_{t_2\to-\infty}\langle 0|\phi'^{g_1\dagger}(t_1)\phi'^{g_2\dagger}(t_2)|f_1,f_2\rangle^{\text{in}}\right)
\end{align}
$$
由于
$$
\lim_{t_1\to\pm\infty}\lim_{t_2\to-\infty}\langle 0|\phi'^{g_1\dagger}(t_1)\phi'^{g_2\dagger}(t_2)|f_1,f_2\rangle^{\text{in}}=\lim_{t_2\to-\infty}\langle g_1|\phi'^{g_2\dagger}(t_2)|f_1,f_2\rangle^{\text{in}}
$$
因此第二项
$$
\left(\lim_{t_1\to\infty}-\lim_{t_1\to-\infty}\right)\lim_{t_2\to-\infty}\langle 0|\phi'^{g_1\dagger}(t_1)\phi'^{g_2\dagger}(t_2)|f_1,f_2\rangle^{\text{in}}=0
$$
而第一项：
$$
\begin{align}
&\left(\lim_{t_1\to\infty}-\lim_{t_1\to-\infty}\right)\langle g_2|\phi'^{g_1\dagger}(t_1)|f_1,f_2\rangle^{\text{in}}
=\,^{\text{out}}\langle g_1,g_2|f_1,f_2\rangle^{\text{in}}-\,^{\text{in}}\langle g_1,g_2|f_1,f_2\rangle^{\text{in}}\\&=\langle g_1,g_2|S|f_1,f_2\rangle-\langle g_1,g_2|f_1,f_2\rangle=\langle g_1,g_2|S-1|f_1,f_2\rangle=\mathrm{LHS}
\end{align}
$$
即证明了LSZ约化公式。这样我们就完成了对Question 2的回答，即可以通过重整化场的Green函数得到散射矩阵。
应用相同的证明方法，LSZ公式还有一些推论。比如，我们可以在一半的地方停下来：
$$
\langle k_3,k_4|S-1|k_1,k_2\rangle=\int\mathrm{d}^4x_3\mathrm{d}^4x_4\,\mathrm{e}^{ik_3\cdot x_3+ik_4\cdot x_4}(i)^2(\square_3^2+\mu^2)(\square_4^2+\mu^2)\langle 0|T(\phi'(x_3)\phi'(x_4))|k_1,k_2\rangle^{\text{in}}
$$
或者可以算算符的矩阵元：
$$
^{\text{out}}\langle k_1,\cdots ,k_n|A(x)|0\rangle=\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\mathrm{e}^{ik_1\cdot x_1+\cdots+ik_n\cdot x_n}\times\prod_{r=1}^n(\square_r^2+\mu^2)\langle0|T(\phi'(x_1)\cdots\phi'(x_n)A(x))|0\rangle
$$
## 14.3 Model 3的回顾

Model 3的Lagrangian具有以下形式：
$$
\mathcal L=\dfrac12(\partial_\mu\phi)^2-\dfrac12\mu_0\phi^2+\partial_\mu\psi^*\partial^\mu\psi-m_0^2\psi^*\psi-g_0\psi^*\psi\phi+\text{const}
$$
这里 $\mu_0,m_0$ 为介子与核子的**裸质量**(bare mass)，我们在[Coleman QFT - Lecture 10. 质量重整化与费曼图](./Coleman%20QFT%20-%20Lecture%2010.%20%E8%B4%A8%E9%87%8F%E9%87%8D%E6%95%B4%E5%8C%96%E4%B8%8E%E8%B4%B9%E6%9B%BC%E5%9B%BE.md)中曾提到过它，而 $g_0$ 被称为**裸耦合常数**(bare coupling constant)。
要注意的是，由于相互作用项的存在，其中存在的场都不是自由场，而是Heisenberg场。这与我们之前在Wick图或者Feynman图下做展开的思想是完全不同的，当时我们一直将场作为自由场，把相互作用项作为微扰。其的确在渐近情形下是正确的，但这样的理解是有偏差的。
另一方面现在，整个Lagrangian都是由裸物理量写出来的，我们需要重整化。首先是质量与耦合常数的重整化：
$$
g_0=g+\cdots,\quad \mu_0=\mu+\cdots,\quad m_0=m+\cdots
$$
我们还需对场做重整化，首先是介子场：
$$
\phi'=Z_3^{-1/2}[\phi-\langle0|\phi|0\rangle]\Rightarrow\langle0|\phi'|0\rangle=0,\quad \langle k|\phi(0)|0\rangle=1
$$
然后是核子场：
$$
\psi'=Z_2^{-1/2}\psi\Rightarrow\langle0|\psi'|0\rangle=0\,(\text{respect to charge conservation}),\quad \langle k|\psi(0)|0\rangle=1
$$
现在，Model 3的Lagrangian被拆分为：
$$
\mathcal L=\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu\phi'^2+\partial_\mu\psi'^*\partial^\mu\psi'-m^2\psi'^*\psi'-g_0\psi'^*\psi'\phi'+\mathcal L_{CT}
$$
$$
\mathcal L_{CT}=A\phi'+\dfrac12 B(\partial_\mu\phi')^2-\dfrac12 C\phi'^2+D\partial_\mu\psi'^*\partial^\mu\psi'-E\psi'^*\psi'-F\psi'^*\psi'\phi'+\text{const}
$$
这些抵消项的系数由重整化条件确定：
1. $\langle0|\phi'|0\rangle=0\to A$
2. $\langle q|\phi'|0\rangle=1\to B$
3. 真实介子质量 $\mu\to C$
4. $\langle p|\psi'(0)|0\rangle=1\to D$
5. 真实核子质量 $m\to E$
6. 耦合常数定义 $g\to F$
我们马上会开始对这一重整化模型的计算，但在此之前先预告一下，有两个技术问题要处理。

- $\mathcal L_{CT}$ 中的导数项。本章的最后一节就来处理这个问题。
- 重整化条件还没有用Green函数系统地表述出来，这将是下一章的内容。

## 14.4 猜测导数相互作用项的Feynman规则

首先我们先来明确为什么导数项会出现问题。首先，正则动量：
$$
\pi_\mu=\dfrac{\partial \mathcal L}{\partial(\partial^\mu\phi)}\ne\partial_\mu\phi
$$
因此做Legendre变换得到的 $\mathcal H_I\ne-\mathcal L_I$。另一方面，在计算时序积时，导数算符不与时序积操作对易：
$$
T(\partial_\mu\phi(x)\cdots)\ne\partial_\mu T(\phi(x)\cdots)
$$
这将带来完全的混乱。然而，其最终解决方法又是很简单的。我们从下面这个最简单的例子开始：
$$
\mathcal L=\dfrac12(\partial_\mu\phi)^2-\dfrac12\mu^2\phi^2
$$
我们可以对场做重整化使得相互作用项出现导数项：
$$
\phi=\sqrt{Z_3}\phi',\quad \mathcal L=\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu^2\phi'^2+(Z_3-1)\left[\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu^2\phi'^2\right]
$$
现在的相互作用项即为：
$$
\mathcal L_I=\dfrac12(Z_3-1)[(\partial_\mu\phi')^2-\mu^2\phi'^2]
$$
这一项为介子的抵消项，其对应的Feynman图基本顶点为：

<div align="center">
  <img src="./pictures/Pasted image 20260103223426.png" width="400">
</div>
表达式为：
$$
i(Z_3-1)(2\pi)^4\delta^{(4)}(q+q')[(\cdots)-\mu^2]
$$
我们还不知道 $(\cdots)$ 代表的导数项是什么，但我们已经可以猜了，由于右侧是 $\mu^2$，直接猜是 $q^2$，即有替换 $\partial_\mu\phi\to ik_\mu\phi$。为来验证这一点，我们来算理论的两点Green函数 $\tilde G'^{(2)}(q,q')$，其可展开为下面的连通图之和（我们不需要真空泡）：

<div align="center">
  <img src="./pictures/Pasted image 20260103224638.png" width="800">
</div>

其对应的表达式为：
$$
\tilde G'^{(2)}(q,q')=(2\pi)^4\delta^{(4)}(q+q')\cdot\dfrac{i}{q^2-\mu^2}\times\left[1+\dfrac{i(Z_3-1)\cdot i(q^2-\mu^2)}{q^2-\mu^2+i\epsilon}+\left(\dfrac{i(Z_3-1)\cdot i(q^2-\mu^2)}{q^2-\mu^2+i\epsilon}\right)^2+\cdots\right]
$$
后面是一个等比数列求和：
$$
\mathrm{RHS}=(2\pi)^4\delta^{(4)}(q+q')\cdot\dfrac{i}{q^2-\mu^2}\sum_{n=0}^\infty(1-Z_3)^n=Z_3^{-1}(2\pi)^4\delta^{(4)}(q+q')\cdot\dfrac{i}{q^2-\mu^2}
$$
然而，这个理论在一开始时的Lagrangian是最简单的自由场：
$$
\mathcal L=\dfrac12(\partial_\mu\phi)^2-\dfrac12\mu^2\phi^2
$$
因此其对应的Green函数即为：
$$
\tilde G^{(2)}(q,q')=(2\pi)^4\delta^{(4)}(q+q')\cdot\dfrac{i}{q^2-\mu^2}
$$
而两种情况下Green函数的定义式为：
$$
G^{(n)}(x_i)=\langle 0|T(\phi(x_1)\cdots\phi(x_n)|0\rangle,\quad G'^{(n)}(x_i)=\langle 0|T(\phi'(x_1)\cdots\phi'(x_n)|0\rangle
$$
由于 $\phi=\sqrt{Z_3}\phi'$ ，因此应当有：
$$
G^{(n)}(x_i)=Z_3^{n/2}G'^{(n)}(x_i),\quad \tilde G^{(n)}(k_i)=Z_3^{n/2}\tilde G'^{(n)}(k_i)
$$
而我们的确得到了：
$$
\tilde G^{(2)}(q,q')=Z_3\,\tilde G'^{(2)}(q,q')
$$
因此我们的猜测在这一情形下是可行的。当然，你也可以在更复杂的模型上验证其的正确性。总的来说，对于有导数的相互作用项，我们可以不用管其可能的出现的问题，只需做替换 $\partial_\mu\to ik_\mu$ ，就能得到正确的结果。

---






