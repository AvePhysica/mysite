---
title: "Coleman QFT Lecture 13: Green函数与Heisenberg场"
---

在上一章[Coleman QFT - Lecture 12. 散射理论 II：应用](./Coleman%20QFT%20-%20Lecture%2012.%20%E6%95%A3%E5%B0%84%E7%90%86%E8%AE%BA%20II%EF%BC%9A%E5%BA%94%E7%94%A8.md)的最后，我们提到了外线不在质壳上的Feynman图。这个研究对象是比较有趣的，它将引出我们本章要讲的**Green函数**。为了简单起见，我将只考虑外线为介子线的Feynman图。其推广是简单的。

## 13.1  $\tilde G^{(n)}(k_i)$ 的图形化定义

我们仍在Model 3下讨论。我将定义一个四点函数 $\tilde G^{(4)}(k_1,k_2,k_3,k_4)$，其定义为所有有四条介子外线的图代表的表达式之和。其将包含微扰的所有阶数。如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20251228224927.png" width="400">
</div>

我将采取如下的定义：所有的图包含了连通与不连通的图，每个图包含所有的delta函数，以及所有传播子（包括外线），外线的动量均规定为向内，并且要对内线动量积分。于是，上面的四点函数 $\tilde G^{(4)}(k_1,k_2,k_3,k_4)$ 的按阶数展开的前几项为：

<div align="center">
  <img src="./pictures/Pasted image 20251228225157.png" width="600">
</div>

可以看到，其的确是包含 $O(g^0)$ 阶的图，而此外最低阶就是 $O(g^4)$ 了。我们将对应的表达式写出来：
$$
\tilde G^{(4)}(k_1,k_2,k_3,k_4)=(2\pi)^4\delta^{(4)}(k_1+k_3)\dfrac{1}{k_1^2-\mu^2+i\epsilon}(2\pi)^4\delta^{(4)}(k_2+k_4)\dfrac{1}{k_2^2-\mu^2+i\epsilon}+\cdots
$$
现在，我们只是定义了一个四点函数而已。如果我们想要回到真实的物理过程，就需要使外线回到质壳上，且去掉它们的传播子。因此，有下面的公式：
$$
\langle k_3,k_4|S-1|k_1,k_2\rangle=\prod_{r=1}^4[(-i)(k_r^2-\mu^2)]\tilde G^{(4)}(-k_3,-k_4,k_1,k_2)
$$
其中最后取所有 $k_r^2=\mu^2$。上面的式子是很重要的。它告诉我们如果我们想要计算一个实际的散射过程，且已知一个模型对应的Green函数 $\tilde G$，则用上面的公式就能直接得到散射振幅。以上面的图为例，可以看到其只有两个传播子，但是却乘了四个传播子之逆，因此最终在质壳条件下为零。这也是应当的，散射振幅的最低阶数为 $O(g^4)$。
更一般的多点函数 $\tilde G^{(n)}(k_i)$ 定义如下：

<div align="center">
  <img src="./pictures/Pasted image 20251228232423.png" width="800">
</div>

即所有有 $n$ 条外线的图对应表达式之和。进一步的，我们可以定义其傅里叶变换后的函数为：
$$
G^{(n)}(x_1,\cdots,x_n)\equiv\int\dfrac{\mathrm{d}^4k_1}{(2\pi)^4}\cdots\dfrac{\mathrm{d}^4k_n}{(2\pi)^4}\mathrm{e}^{+ik_1\cdot x_1+\cdots+ik_n\cdot x_n}\tilde G^{(n)}(k_1,\cdots,k_n)
$$
## 13.2  $G^{(n)}(x_i)$ 的生成泛函 $Z[\rho]$

接下来，我们将看到 $\tilde G^{(n)}(k_i)$ 的物理意义。上一章我们提到，外线不在质壳上的图可以视为更大的图的一个**内部区域**。为了构造一个更大的图，我们向Hamiltonian中加入一项Model 1的相互作用项：
$$
\mathcal H\to\mathcal H+\rho(x)\phi(x)
$$
回忆我们对Model 1的处理（参考[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)），对于场与势的作用，其基本顶点可表示为：

<div align="center">
  <img src="./pictures/Pasted image 20251229160218.png" width="350">
</div>

即一个单独的顶点连上一根介子线。其代表的振幅为：
$$
\langle k|-i\int\mathrm{d}^4x\,\rho(x)\phi(x)\,|0\rangle=-i\int\rho(x)\langle k|\phi(x)|0\rangle\,\mathrm{d}^4x
$$
而
$$
\langle k|\phi(x)|0\rangle=\int\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32\omega_{k'}}\mathrm{e}^{ik'\cdot x}\langle k|\alpha^\dagger_{k'}|0\rangle=\int\mathrm{d}^3\vec k\,\mathrm{e}^{ik'\cdot x}\delta^{(3)}(\vec k-\vec k')=\mathrm{e}^{ik\cdot x}
$$
因此
$$
\text{graph}=-i\int\rho(x)\,\mathrm{e}^{ik\cdot x}\,\mathrm{d}^4x=-i\tilde \rho(-k)
$$
对于原先的图，我们可以让每根外线都连接一个上面的基本顶点，这样外线就都变成了内线，因此整个图对 $\langle 0|S|0\rangle$ 有贡献。因此，在新的模型下，真空-真空跃迁的矩阵元为：
$$
Z[\rho]\equiv\langle 0|S|0\rangle=1+\sum_{n=1}^\infty\dfrac{(-i)^n}{n!}\int\dfrac{\mathrm{d}^4k_1}{(2\pi)^4}\cdots\dfrac{\mathrm{d}^4k_n}{(2\pi)^4}\tilde G^{(n)}(k_1,\cdots,k_n)\tilde \rho(-k_1)\tilde \rho(-k_2)\cdots\tilde \rho(-k_n)
$$
这里的 $n!$ 来源于 $k_1,\cdots,k_n$ 是不可区分的，因此在计算其积分时重复计算了 $n!$ 次。这一组合效应常常出现在只有内线的Feynman图中。

>[!important]
>**注意**：这里我们修改了Fourier变换的定义。此时采用的定义为：
>$$f(x)=\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\tilde f(k)\,\mathrm{e}^{ik\cdot x},\quad \tilde f(k)=\int\mathrm{d}^4x\,f(x)\,\mathrm{e}^{-ik\cdot x}$$

我们利用下面的公式：
$$
\int\mathrm{d} x\,f(x)g(x)=\int\dfrac{\mathrm{d}k}{2\pi}\tilde f(k)\tilde g(k)^*=\int\dfrac{\mathrm{d}k}{2\pi}\tilde f(k)\tilde g(-k)
$$
得到：
$$
Z[\rho]=1+\sum_{n=1}^\infty\dfrac{(-i)^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,G^{(n)}(x_1,\cdots,x_n)\rho(x_1)\cdots\rho(x_n)
$$
此时，我们可以看出 $G^{(n)}(x_1,\cdots,x_n)$ 的含义了：其代表了系统对外源 $\rho(x)$ 的响应，因此称为**Green函数**。而 $Z[\rho]$ 是关于外源分布 $\rho(x)$ 的泛函，称为
**生成泛函**。我们只需求其各阶泛函导数即可求出Green函数：
$$
G^{(n)}(x_1,\cdots,x_n)=i^n\dfrac{\partial^n Z[\rho]}{\partial\rho(x_1)\cdots\partial\rho(x_n)}\bigg|_{\rho(x)=0}
$$
最后再提一点：我们已经证明过所有Wick图之和等于连通Wick图之和的指数。对于生成泛函也有类似的结论。即：
$$
Z[\rho]=\langle0|\sum\text{all Wick diagrams}|0\rangle=\langle 0|:\exp\left(\sum\text{all connected diagrams}\right):|0\rangle
$$
$$
\begin{align}
\ln Z[\rho]&=\langle 0|:\sum\text{all connected diagrams}:|0\rangle\\
&=\sum_{n=1}^\infty\dfrac{(-i)^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,G_c^{(n)}(x_1,\cdots,x_n)\rho(x_1)\cdots\rho(x_n)
\end{align}
$$
这里 $G_c$ 代表连通的Green图。

## 13.3 丢掉绝热开关

前面提到，对于如Model 3中的相互作用 $g\psi\psi^*\phi$，我们需要引入一个绝热开关 $f(t)$，其保证了时间上的边界条件，即在 $t=\pm\infty$ 时不存在相互作用。
现在，我们希望去掉这个人为引入的绝热开关，即取 $f(t)=1$。此时的代价在于，不论何时相互作用总是存在的。我们仍在Hamiltonian上加上与外源的作用：
$$
\mathcal H=\mathcal H_0+\mathcal H'\to\mathcal H_0+\mathcal H'+\rho(x)\phi(x),\quad \mathcal H'=g\psi^*\psi\phi
$$
我们本应将这个 Hamiltonian 分为 $\mathcal H_0$ 与 $\mathcal H'+\rho\phi$ 两部分，分别对应于**自由Hamiltonian**与**相互作用Hamiltonian**。现在，一个新奇的想法是：既然我们要考察的是外源作用对系统的影响，何不将其分为 $\mathcal H_0+\mathcal H'$ 与 $\rho\phi$ 这两部分？
让我们看看这样划分的结果。自由部分Hamiltonian支配场的演化，也就是说现在的标量场演化满足：
$$
\phi_H(t)=\mathrm{e}^{iHt}\phi_H(0)\mathrm{e}^{-iHt},\quad H=\int\mathrm{d}^3x\,(\mathcal H_0+\mathcal H')
$$
这里的 $H$ 实际上就是Model 3的总哈密顿量。因此，我们实际上采取了**Heisenberg绘景**。这里的 $\phi_H(x)$ 称为**Heisenberg场**。其不是自由场，因此不满足自由场的运动方程（即**KG方程**）。
另一方面，态的演化由外源项 $\rho(x)\phi(x)$ 决定。现在我们的基态同样要做出改变，首先“真空态”应当定义为 $H$ 的零本征态：
$$
\hat H|0\rangle^P=0,\quad ^P\langle0|0\rangle^P=1
$$
$|0\rangle^P$ 称为**物理真空态**。同时，时间演化自然也由外源项决定。
$$
U_I(\infty,-\infty)=\exp\left[-i\int\mathrm{d}^4x\,\rho(x)\phi_H(x)\right]
$$
这里我们实际上将外源项中的自由场 $\phi(x)$ 换成了Heisenberg场 $\phi_H(x)$，因为在新的散射理论下，我们有的仅仅是新的Heisenberg场，自然应当取上面的形式。
新的生成泛函定义为：
$$
Z[\rho]\equiv\,^P\langle0|S|0\rangle^P=\,^P\langle 0|T\exp\left[-i\int\mathrm{d}^4x\,\rho(x)\phi_H(x)\right]|0\rangle^P
$$
注意：新的Heisenberg场存在一些问题，比如Wick定理不成立，其缩并 $\overset {|\Large \mkern-2mu{}^{\overline{\quad\quad}}\mkern-3mu\normalsize |}{\phi_H(x) \phi_H} (y)$ 甚至不再是一个纯数。但我们还是能将上面的指数展开为Dyson级数的形式：
$$
Z[\rho]=\sum_{n=0}^\infty\dfrac{(-i)^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\rho(x_1)\cdots\rho(x_n)\,^P\langle 0|T(\phi_H(x_1)\cdots\phi_H(x_n))|0\rangle^P
$$
回顾我们开始时用Green函数的定义式，立刻得到新的散射理论下Green函数定义为：
$$
G^{(n)}(x_1,\cdots,x_n)\equiv\,^P\langle 0|T(\phi_H(x_1)\cdots\phi_H(x_n))|0\rangle^P
$$
现在，我们在新的散射理论下重新定义了态、场、生成泛函 $Z[\rho]$ 与Green函数 $G(x_i)$。回顾我们最先是如何定义Green函数的：先将有 $n$ 条外线且外线可以不在质壳上的Feynman图定义为 $\tilde G^{(n)}(k_i)$，再将Green函数定义为其Fourier变换。这引出了下面的问题：

>[!question]
>新的Green函数还能由Feynman图的相加得到吗？换句话说，如何利用Feynman图计算真空-真空跃迁振幅，即生成泛函 $Z[\rho]$ ？

## 13.4 问题的解答

上面问题的答案是正确的。我们考虑标准的使用Feynman图的流程，生成泛函为真空-真空跃迁振幅：
$$
Z[\rho]^{\mathrm{Feyn}}=\lim_{t_\pm\to\pm\infty}\langle 0|\exp\left(-i\int_{t_-}^{t_+}(\mathcal H_I+\rho(x)\phi(x))\,\mathrm{d}^4x\right)|0\rangle,\quad \mathcal H_I=g\psi^*(x)\psi(x)\phi(x)
$$
但这一表达式是存在缺陷的。因为当 $\rho=0$ 时，这一表达式的结果不是 $1$。这是因为在上面的表达式中，包含了一些有其他单独的不连通真空泡的部分，每一个图都伴随着一组在其外加入任意的**不连通真空泡**的图。因此我们要除去它们。之前我们通过引入**抵消项**来规避这一影响，但此方法仅适用于加上绝热开关后的理论。更简单的方法是直接除掉 $\rho=0$ 的跃迁振幅：
$$
Z[\rho]^{\mathrm{Feyn}}=\lim_{t_\pm\to\pm\infty}\dfrac{\langle 0|T\exp\left(-i\int_{t_-}^{t_+}(\mathcal H_I+\rho(x)\phi(x))\,\mathrm{d}^4x\right)|0\rangle}{\langle 0|T\exp\left(-i\int_{t_-}^{t_+}\mathcal H_I\,\mathrm{d}^4x\right)|0\rangle}
$$
这个方法很粗暴，但的确是有效的，上式得到的就是所有不含不连通真空泡的无外线图之和。其按 $\rho$ 的幂次展开式的系数即为用Feynman图算出的Green函数 $G^{(n)\mathrm{Feyn}}(x_i)$：
$$
Z[\rho]^{\mathrm{Feyn}}=\sum_{n=0}^\infty\dfrac{(-i)^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\rho(x_1)\rho(x_2)\cdots\rho(x_n)G^{(n)\mathrm{Feyn}}(x_1,\cdots,x_n)
$$
直接利用Dyson展开式。可以得到：
$$
G^{(n)\mathrm{Feyn}}(x_1,\cdots,x_n)=\lim_{t_\pm\to\pm\infty}\dfrac{\langle 0|T\exp\left(-i\int_{t_-}^{t_+}\mathcal H_I\,\mathrm{d}^4x\right)\phi(x_1)\cdots\phi(x_n)|0\rangle}{\langle 0|T\exp\left(-i\int_{t_-}^{t_+}\mathcal H_I\,\mathrm{d}^4x\right)|0\rangle}
$$
我们知道，Heisenberg场与自由场之间的关系为：
$$
\phi_H(t,\vec x)=U_I(t,0)^\dagger\phi(t,\vec x)U_I(t,0)=U_I(0,t)\phi(t,\vec x)U_I(t,0),\quad U_I=\exp\left[-i\int\mathrm{d}^4x\,\mathcal H_I\right]
$$
这里我们约定了 $t=0$ 时各绘景的统一性。现在来看Green函数 $G^{(n)\mathrm{Feyn}}(x_i)$ 的表达式，由于最后对 $x_i$ 的积分是全对称的，因此我们不妨假设 $t_1>t_2>\cdots>t_n$，此时分子写为：
$$
\begin{align}
&\lim_{t\pm\to\pm\infty}\langle0|T\exp\left[-i\int_{t_1}^{t_+}\mathrm{d}^4x\,\mathcal H_I\right]\phi(x_1)\exp\left[-i\int_{t_2}^{t_1}\mathrm{d}^4x\,\mathcal H_I\right]\phi(x_2)\dots\phi(x_n)\exp\left[-i\int_{t_-}^{t_n}\mathrm{d}^4x\,\mathcal H_I\right]|0\rangle\\
=&\lim_{t_\pm\to\pm\infty}\langle 0|U_I(t_+,t_1)\phi(x_1)U_I(t_1,t_2)\phi(x_2)\cdots U_I(t_{n-1},t_n)\phi(x_n)U(t_n,t_-)|0\rangle\\
=&\lim_{t\pm\to\pm\infty}\langle0|U_I(t_+,0)\phi_H(x_1)\phi_H(x_2)\cdots\phi_H(x_n)U_I(0,t_-)|0\rangle
\end{align}
$$
接下来，我们来考虑 $t_\pm\to\pm\infty$ 时会发生什么。我们将左侧的一大块全部定义为一个左矢 $\langle \psi|$：
$$
\langle \psi|\equiv\langle 0|U_I(t_+,0)\phi_H(x_1)\cdots\phi_H(x_n)
$$
因此我们要求的就是：
$$
\langle\psi|U_I(0,t_-)|0\rangle=\langle\psi|\mathrm{e}^{iH_It_-}|0\rangle=\langle\psi|\mathrm{e}^{iHt_-}|0\rangle,\quad H=H_I+H_0,\quad H_0|0\rangle=0
$$
我们希望将 $|0\rangle$ 换成物理真空态 $|0\rangle^P$，即 $H$ 的零本征态。记
$$
H|n\rangle=E_n|n\rangle,\quad H|0\rangle^P=0
$$
其构成一组完备基，我们可以将其插入：
$$
\langle\psi|\mathrm{e}^{iHt_-}|0\rangle=\sum_n\langle \psi|n\rangle\langle n|\mathrm{e}^{iHt_-}|0\rangle=\langle\psi|0\rangle^P\,^P\langle0|0\rangle+\sum_{n\ne 0}\mathrm{e}^{-iE_nt_-}\langle \psi|n\rangle\langle n|0\rangle
$$
当 $t_-\to-\infty$ 时，后一项会振荡得越来越快。这里，我们将引用一个分析中的结论：

>[!theorem]
>**Riemann-Lebesgue Lemma**：若 $f$ 在 $[a,b]$ 上Riemann可积，则
>$$\lim_{n\to\infty}\int_a^b f(x)\cos nx\,\mathrm{d}x=\lim_{n\to\infty}\int_a^b f(x)\sin nx\,\mathrm{d}x=0$$

其说一个性质良好的函数乘上一个快速振荡的函数，在区域中的积分随振荡速度的加快而趋于零。当然，上面表达式中实际不是积分，而是对 $n$ 的求和，但结论也是一样的。我们可以在 $t_-\to-\infty$ 的极限下丢掉后一项，因此
$$
\lim_{t_-\to-\infty}\langle\psi|\mathrm{e}^{iHt_-}|0\rangle=\langle\psi|0\rangle^P\,^P\langle0|0\rangle
$$
因此我们只是做替换：
$$
U_I(0,-\infty)|0\rangle\to|0\rangle^P\,^P\langle0|0\rangle
$$
同样的，对于左侧也有：
$$
\langle 0|U_I(+\infty,0)\to\langle0|0\rangle^P\,^P\langle 0|
$$
因此

$$
\begin{align}
G^{(n)\mathrm{Feyn}}(x_1,\cdots,x_n)&=\lim_{t\pm\to\pm\infty}\dfrac{\langle0|U_I(t_+,0)\phi_H(x_1)\phi_H(x_2)\cdots\phi_H(x_n)U_I(0,t_-)|0\rangle}{\langle 0|U_I(t_+,t_-)|0\rangle}\\&=\dfrac{\langle0|0\rangle^P\,^P\langle 0|\phi_H(x_1)\cdots\phi_H(x_n)|0\rangle^P\,^P\langle0|0\rangle}{\langle 0|0\rangle^P\,^P\langle 0|0\rangle^P\,^P\langle 0|0\rangle}\\&=\,^P\langle 0|\phi_H(x_1)\cdots\phi_H(x_n)|0\rangle^P\\
&=G^{(n)}(x_1,\cdots,x_n)
\end{align}
$$
因此我们证明了我们仍可以用Feynman图来求**生成泛函**与**Green函数**。也就是说我们定义的两种路径是完全等价的。

## 13.5 构造“入态”与“出态”

上面我们验证了用Feynman图计算出来的真空-真空散射振幅 $\langle 0|U_I(+\infty,-\infty)|0\rangle$（去除不连通真空泡），与在Heisenberg绘景下得到的物理真空-物理真空散射振幅 $^P\langle 0|U_I'(+\infty,-\infty)|0\rangle^P$ 相同，即：
$$
\lim_{t_\pm\to\pm\infty}\dfrac{\langle 0|T\exp\left(-i\int_{t_-}^{t_+}(\mathcal H_I+\rho(x)\phi(x))\,\mathrm{d}^4x\right)|0\rangle}{\langle 0|T\exp\left(-i\int_{t_-}^{t_+}\mathcal H_I\,\mathrm{d}^4x\right)|0\rangle}=\,^P\langle 0|T\exp\left[-i\int\mathrm{d}^4x\,\rho(x)\phi_H(x)\right]|0\rangle^P
$$
那对于其他的散射矩阵元呢？引出下面的问题：

>[!question]
>我们前面知道通过将Green函数限制在外线的质壳上能得到散射矩阵的矩阵元。这一关系在新的散射理论中是否仍成立？以四点函数为例：
>$$\langle k_3,k_4|S-1|k_1,k_2\rangle=\prod_{r=1}^4[(-i)(k_r^2-\mu^2)]\tilde G^{(4)}(-k_3,-k_4,k_1,k_2)$$
>是否成立？

答案：“**almost**”是对的。我们将在本节中构造“入态”与“出态”(in/out-state)，散射矩阵S的矩阵元等于入态与出态的内积。我将证明其矩阵元在除了一个相关的因子外就等于右侧的式子。这个因子源于所谓的**波函数重整化**。公式的完整证明将留到下一章完成，这实际上就是著名的**LSZ(Lehmann-Symanzik-Zimmermann)约化公式**。
在开始之前，为了能让式子看起来简单一点，鉴于本节我们将只会用到新的散射理论，因此原先的真空态 $|0\rangle$ 与自由场 $\phi(x)$ 都不会再用到，因此我们将新的散射理论中的Heisenberg场与物理真空态记为：
$$
\phi(x)\equiv \phi_H(x),\quad |0\rangle\equiv|0\rangle^P
$$
现在，我们假设新的散射理论中有一个**物理的单介子态** $|p\rangle$，其满足正交归一关系：
$$
\langle p|p'\rangle=(2\pi)^32\omega_{p}\delta^{(3)}(\vec p-\vec p')
$$
其自然地被定义为动量算符 $P^\mu$ 的本征态：
$$
P^\mu|p\rangle=p^\mu|p\rangle,\quad p^0=\omega_p=\sqrt{|\vec p|^2+\mu^2}
$$
接下来，我来解释波函数重整化的概念。首先考虑单个场的真空-真空矩阵元，由平移不变性：
$$
\langle 0|\phi(x)|0\rangle=\langle 0|\mathrm{e}^{iP\cdot x}\phi(0)\mathrm{e}^{-iP\cdot x}|0\rangle=\langle 0|\phi(0)|0\rangle
$$
我要求新的场**在真空态下的平均值是零**。这可以通过下面的变换实现：
$$
\phi(x)\to\phi(x)-\langle0|\phi(0)|0\rangle
$$
即直接减去为常数的平均值即可。此外，还可以计算从真空态到单粒子态的跃迁矩阵元：
$$
\langle k|\phi(x)|0\rangle=\mathrm{e}^{ik\cdot x}\langle k|\phi(0)|0\rangle
$$
现在，由于 $\langle k|\phi(0)|0\rangle$ 应当具有Lorentz不变性，这会让我们想到构造 $k^\mu k_\mu$，但其就是 $\mu^2$ 。因此这一表达式应该与 $k$ 无关，是一个常数，写为：
$$
\langle k|\phi(0)|0\rangle=\sqrt Z_3
$$
这个奇怪的 $\sqrt Z_3$ 只是一个约定，其出自Dyson的原始论文。对于单核子态其为 $\sqrt Z_2$。我的第二个要求是新的场的此矩阵元为$1$，因此总的来说，我将场重新取为：
$$
\phi'(x)\equiv Z_3^{-1/2}(\phi(x)-\langle 0|\phi(x)|0\rangle),\quad \langle 0|\phi'(x)|0\rangle=0,\quad \langle k|\phi'(x)|0\rangle=\mathrm{e}^{ik\cdot x}
$$
你可以验证的是，在原先的散射理论中，自由标量场是直接满足上面的两个条件的。现在在新的散射理论下，Heisenberg场不满足这两项条件，变换后的场 $\phi'(x)$ 称为**重整化场**。
现在，我们的目标变成要寻找一个算符，其作用在真空态上会产生一个任意的单粒子态 $|f\rangle$。一般的，其可用平面波态展开为：
$$
|f\rangle=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^32\omega_k}F(\vec k)|k\rangle
$$
现在，让我们定义一个函数 $f(x)$：
$$
f(x)=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^32\omega_k}F(\vec k)\mathrm{e}^{-ik\cdot x}
$$
其为满足KG方程的平面波：
$$
(\,\square^2+\mu^2)f(x)=0
$$
这样每个“波包”的单粒子态 $|f\rangle$ 都对应到一个KG方程的解空间中的函数 $f(x)$ ，其通过平面波基下的展开系数 $F(\vec k)$ 相联系。可验证的是：
$$
\langle k'|f\rangle=F(\vec k')
$$
接下来，我将定义一个奇怪的算符：
$$
\phi'^{f}(t)\equiv i\int\mathrm{d}^3\vec x\,[\phi'(x)\partial_0f(x)-f(x)\partial_0\phi'(x)]
$$
首先，由于这里面涉及的算符只有重整化场 $\phi'(x)$ ，因此显然有
$$
\langle 0|\phi'^f(x)|0\rangle=0
$$
那 $\langle k|\phi'^f(x)|0\rangle$ 呢？来算算：
$$
\begin{align}
\langle k|\phi'^f(t)|0\rangle&=i\int\mathrm{d}^3\vec x\int\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32\omega_{k'}}F(\vec k')[-i\omega_{k'}\,\mathrm{e}^{-ik'\cdot x}-\mathrm{e}^{-ik'\cdot x}\partial_0]\langle k|\phi'(x)|0\rangle\\
&=i\int\mathrm{d}^3\vec x\int\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32\omega_{k'}}F(\vec k')\,\mathrm{e}^{i(k-k')\cdot x}[-i\omega_{k'}-i\omega_{k}]\\&=i\left(\dfrac{-2i\omega_k}{2\omega_k}\right)F(\vec k)=F(\vec k)=\langle k|f\rangle
\end{align}
$$
类似的计算给出：
$$
\langle0|\phi'^f(t)|k\rangle=0
$$
因此，新算符 $\phi'^f(t)$ 就像一个产生单粒子态 $|f\rangle$ 的产生算符一样。最后，对于多粒子态 $|n\rangle$，情况又怎样呢？仍取动量本征态：
$$
P^\mu|n\rangle=p_n^\mu|n\rangle
$$
因此
$$
\langle n|\phi'(x)|0\rangle=\mathrm{e}^{ip_n\cdot x}\langle n|\phi'(0)|0\rangle
$$
但还不知道 $\langle n|\phi'(0)|0\rangle$ 是什么。现在来算 $\langle n|\phi'^f(t)|0\rangle$：
$$
\begin{align}
\langle n|\phi'^f(t)|0\rangle&=i\int\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32\omega_{k'}}F(\vec k')(-i\omega_k-iE_n)\langle n|\phi'(0)|0\rangle\int\mathrm{d}^3\vec x\,\mathrm{e}^{-i(k-p_n)\cdot x}\\
&=\dfrac{\omega_{\vec p_n}+E_n}{2\omega_{\vec p_n}}F(\vec p_n)\langle n|\phi'(0)|0\rangle\mathrm{e}^{-i(\omega_{\vec p_n}-E_n)t}
\end{align}
$$
注意这与单粒子情形的区别。单粒子下 $E_k=\omega_k$ ，但多粒子下 $\omega_{\vec p_n}<E_n$，因此其依赖于时间 $t$，结果是振荡的。
进一步，考察 $t\to\pm\infty$ 的极限，考虑一个任意的态 $|\psi\rangle$，其与 $\phi'^f(t)|0\rangle$ 的内积为：
$$
\lim_{t\to\pm\infty}\langle\psi|\phi'^f(t)|0\rangle=\lim_{t\to\pm\infty}\sum_n\,\langle\psi|n\rangle\langle n|\phi'^f(t)|0\rangle
$$
$n=0$ 时，$\langle 0|\phi'^f(x)|0\rangle=0$ 导致此项为零。$n>1$ 时，由于振荡因子的存在，同样利用Riemann-Lebesgue引理知对 $n$ 求和的结果为零，因此唯一有贡献的项是单粒子态，即：
$$
\lim_{t\to\pm\infty}\langle\psi|\phi'^f(t)|0\rangle=\sum_k\langle\psi|k\rangle\langle k|\phi'^f(t)|0\rangle=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^32\omega_k}\langle\psi|k\rangle F(\vec k)=\langle\psi|f\rangle
$$
因此，前面说的“新算符 $\phi'^f(t)$ 就像一个产生单粒子态 $|f\rangle$ 的产生算符一样”需要加上无穷远的渐近条件 $t\to\pm\infty$：
$$
\lim_{t\to\pm\infty}\phi'^f(t)|0\rangle=|f\rangle
$$
这看上去和入态和出态的定义很像。所谓的入态与出态，实际上就是在 $t\to\pm\infty$ 时能回到平面波态的态，因此这一过程看起来可以用于构造入态与出态。具体说明以及我们遗留下来，关于LSZ公式的证明将在下一章中完成。

>[!tip] 自由场的重新考虑
>这一节有一些乱，比如重整化场的条件与一个莫名其妙定义的算符 $\phi'^f(t)$，可能让人有点晕。我们来考虑在旧的散射理论中，这些东西都对应什么。这将有助于你理解并记忆这些东西。
>自由场的平面波展开为：
>$$\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}(2\omega_{\vec p})}(\,\alpha_{p}\,\mathrm{e}^{-ip\cdot x}+\alpha^\dagger_{p}\,\mathrm{e}^{ip\cdot x}\,)$$
>其直接满足了两个条件：
>$$\langle 0|\phi'(x)|0\rangle=0,\quad \langle k|\phi'(x)|0\rangle=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}(2\omega_{\vec p})}\mathrm{e}^{ip\cdot x}\langle k|p\rangle=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}(2\omega_{\vec p})}\mathrm{e}^{ip\cdot x}(2\pi)^{3}(2\omega_{\vec p})\delta^{(3)}(\vec p-\vec k)=\mathrm{e}^{ik\cdot x}$$
> 再来看看那个奇怪的算符 $\phi'^f(t)$ 是什么，直接代入定义式得到：
> $$\begin{align}
>\phi'^{f}(t)&\equiv i\int\mathrm{d}^3\vec x\,[\phi(x)\partial_0f(x)-f(x)\partial_0\phi(x)]\\
>&=i\int\mathrm{d}^3\vec x\left[\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_p)}(\alpha_{p}\,\mathrm{e}^{-ip\cdot x}+\alpha^\dagger_{p}\,\mathrm{e}^{ip\cdot x})\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3(2\omega_k)}F(\vec k)\cdot -i\omega_k\mathrm{e}^{-ik\cdot x}-\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_p)}(-i\omega_p\alpha_{p}\,\mathrm{e}^{-ip\cdot x}+i\omega_p\alpha^\dagger_{p}\,\mathrm{e}^{ip\cdot x})\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3(2\omega_k)}F(\vec k)\,\mathrm{e}^{-ik\cdot x}\right]\\
>&=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3(2\omega_k)^2}\alpha^\dagger_kF(\vec k)\cdot 2\omega_k=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3(2\omega_k)}F(\vec k)\,\alpha^\dagger_k
>\end{align}$$
>因此其显然是一个单粒子态产生算符，作用于真空态的效果为：
>$$\phi'^f(t)|0\rangle=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3(2\omega_k)}F(\vec k)\,|k\rangle=|f\rangle$$
>这正是我们预期的结果。因此，在原先的散射理论下，算符 $\phi'^f(t)$ 就是 $|f\rangle$ 的产生算符，实际上也不依赖于时间。但在我们新的理论下，Heisenberg场是无法显式求解的，因此我们类比自由场，构造了新理论下的单粒子态产生算符 $\phi'^f(t)$。其不同点便在于只有取无穷远的渐近极限 $t\to\pm\infty$ ，此算符才能变成真正的产生算符。

---




























