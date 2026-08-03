---
title: "Coleman QFT Lecture 17: 不稳定粒子"
---

本章是标量场的最后一章，算是一个番外篇吧。前面提到，由于介子实际上是稳定的，即 $\mu<2m$，因此Model 3的基本顶点代表的介子衰变过程 $\phi\to N+\bar N$ 是不会发生的，或者说满足能动量守恒的解必须使某些分量变成复数。实际上，我们的微扰理论中永远不会涉及到不稳定的粒子，因为当我们考虑 $t=\pm \infty$ 时，不稳定的粒子并不存在，我们计算的S矩阵元是对于稳定粒子态而言的。但是，如果我们强行在原先的理论中设置 $\mu>2m$，则会发生什么呢？
## 17.1 计算 $\mu>2m$ 下的传播子 $\tilde D'$

在[Coleman QFT - Problem 9](./Coleman%20QFT%20-%20Problem%209.md)中，我们已得到了下面的关系：
$$
\mathrm{Im}\,\tilde \Pi'(p^2)=-\dfrac{\pi\sigma(p^2)}{|\tilde D(p^2)|^2}
$$
而且我们得到当 $p^2>4m^2$ 时，
$$
\mathrm{Im}\,\tilde\Pi'(p^2)=-\dfrac{g^2}{16\pi}\sqrt{1-\dfrac{4m^2}{p^2}}\ne0
$$
因此当 $\mu>2m$ 时，我们使用重整化条件：
$$
\tilde \Pi'(\mu^2)=0
$$
会得到一个复的抵消项系数 $B_2$。这绝不是我们期望的，因为这将导致哈密顿量不是**厄米的**。因此，这说明重整化条件需要修改。事实上，我们不需要任何对该粒子的重整化条件，因为其不稳定性导致不可能出现在散射过程中。所以，施加怎样的重整化条件是无关紧要的。我将选取下面的规定：
$$
\mathrm{Re}\;\tilde \Pi'(\mu^2)=0,\quad \mathrm{Re}\;\dfrac{\mathrm{d}\Pi'}{\mathrm{d}p^2}\bigg|_{p^2=\mu^2}=0
$$
这样可以使在 $\mu^2=4m^2$ 处的抵消项系数是**连续变化**的。
我们知道，传播子可以表示为：
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2-\tilde\Pi'(p^2)+i\epsilon}
$$
原先的重整化条件保证了 $p^2=\mu^2$ 是极点，但现在就不一定了。我们在 $p^2\simeq \mu^2$ 附近做展开，假设 $p^2-\mu^2\sim O(g^2)$：
$$
[-i\tilde D'(p^2)]^{-1}=p^2-\mu^2+\tilde \Pi'(\mu^2)+O(g^4)=p^2-\mu^2+i\,\mathrm{Im}\;\tilde \Pi'(\mu^2)+O(g^4)
$$
利用：
$$
\mathrm{Im}\,\tilde \Pi'(p^2)=-\dfrac{\pi\sigma(p^2)}{|\tilde D(p^2)|^2}=-\dfrac12|\tilde D'(p^2)|^{-2}\sum_n'(2\pi)^4\delta^{(4)}(q-p_n)|\langle n|\phi'(0)|0\rangle|^2=-\dfrac12(2\mu\varGamma)=-\mu\varGamma
$$
其中用到了
$$
\varGamma=\dfrac{1}{2m}\sum_f\int|\mathcal{A}_{fi}|^2D,\quad |\langle n|\phi'(0)|0\rangle|^2\sim\mathcal A_{fi}\,(|i\rangle\text{为单粒子态})
$$
故
$$
[-i\tilde D'(p^2)]^{-1}=p^2-\mu^2+i\mu\varGamma+O(g^4)=p^2-\left(\mu-\dfrac12i\varGamma\right)^2+O(g^4)
$$
因此现在的极点由原先在实轴上的 $p^2=\mu^2$ 移至现在的实轴下方 $p^2=\left(\mu-\frac12i\varGamma\right)^2$。另一方面，传播子仍具有实轴上的割线。在微扰的意义下，割线的起点为：
$$
p^2=\min(4m^2,4\mu^2)=4m^2\quad (\mu>2m)
$$
因此，我们可以发现，当 $\mu<2m$ 逐渐过渡到 $\mu>2m$ 的不稳定情形时，原先的实轴上的极点 $p^2=\mu^2$ 逐渐右移，直至碰到割线的起点，然后下移至实轴下方。解析结构如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20260118110908.png" width="400">
</div>

最后，你可能会觉得奇怪，我们之前不是证明过传播子除实轴的极点与割线外，应该是全平面解析的吗？现在这个实轴下方的极点又怎么解释。事实上，我们取的小虚部 $i\epsilon$ 告诉我们要取割线上方的解析分支。这个在割线下方的极点并不在原先的复平面内，而是进入了第二张复平面，这也就是所谓的**Riemann面**。

## 17.2 Breit-Wigner 公式

接下来，我们研究传播子具有的性质。从下面的传播子形式出发：
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2+i\mu\varGamma},\quad \mu,\varGamma\in\mathbb R
$$
当然，实际的介子传播子只在 $p^2\simeq \mu^2$ 时才具有上面的形式。但我们仍能研究其性质。
考虑点源扰动：
$$
\mathcal L\to\mathcal L+\rho(x)\phi'(x),\quad \rho(x)=\lambda\delta^{(4)}(x)
$$
此点源会从真空中激发出介子。考虑 $\lambda$ 的最低阶，从真空态到 $|n\rangle$ 的跃迁振幅为：
$$
\mathcal A_{\text{vac}\to n}\propto\lambda\langle n|\phi'(0)|0\rangle+O(\lambda^2)
$$
我不想关心任何前面的系数。现在，产生一个动量为 $k$ 的末态的概率为：
$$
P(k)\propto\lambda^2\sum_n'|\langle n|\phi'(0)|0\rangle|^2(2\pi)^4\delta^{(4)}(p_n-k)+O(\lambda^3)\propto\lambda^2\sigma(k^2)\propto-\lambda^2\,\mathrm{Im}(-i\tilde D'(k^2))
$$
因此
$$
P(k)\propto\lambda^2\dfrac{\mu\varGamma}{(k^2-\mu^2)^2+\mu^2\varGamma^2}+O(\lambda^3)
$$
我们可以画出这一函数代表的Lorentz线型(lineshape)：

<div align="center">
  <img src="./pictures/Pasted image 20260118113214.png" width="500">
</div>

这个分布称为Breit-Wigner分布，其在 $k^2=\mu^2$ 处有一个峰，即最容易产生该动量的粒子。但是，衰变率导致实际分布有一个宽度。同时，在质心系中考虑，则 $k^2=E^2$，由于
$$
E^2-\mu^2\simeq 2\mu(E-\mu)
$$
得到能量分布：
$$
P(E)\propto \lambda^2\dfrac{\varGamma}{4\mu[(E-\mu)^2+\varGamma^2/4]}
$$
因此 $\varGamma$ 实际就是能量分布的**半高全宽**。作为对比，如果我们考虑原先的传播子：
$$
\tilde D(p^2)=\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
点源仍为 $\lambda\,\delta^{(4)}(x)\phi(x)$，因此一级近似下其只能产生单粒子态，故一定有 $k^2=\mu^2$，此时的分布即 $k^2=\mu^2$ 处的delta函数，正是 $\varGamma\to 0$ 的结果。

## 17.3 指数衰变律

不稳定粒子的重要特征便是其会发生衰变，现在设想我们要测量一种不稳定粒子（如K介子）的寿命，实验步骤如下：在特定区域制造具有确定动量的K介子，在不同的距离处探测K介子剩余的数量，以此得到K介子数量随距离的变化趋势。最终绘制的曲线将明显呈现出**指数衰减**的规律。
我们希望模拟一个不稳定粒子的衰变过程。为此，我们需要一个源来产生粒子。考虑一般的源：
$$
\mathcal L\to\mathcal L+f(x)\phi'(x)
$$
在一级近似下：
$$
\langle n|S|0\rangle\approx \int \mathrm{d}x\,f(x)\langle n|\phi'(x)|0\rangle=\int \mathrm{d}x\,f(x)\,\mathrm{e}^{ik\cdot x}\langle n|\phi'(0)|0\rangle=\tilde f(k)\langle n|\phi'(0)|0\rangle
$$
其中 $k$ 为多粒子态的动量。而后面的 $\langle n|\phi'(0)|0\rangle$ 与传播子的虚部相联系。我们想要创造一个在空间与动量域上都比较局域的源（当然，由于不确定原理，其不可能绝对局域）。$f(x)$ 及其Fourier变换具有下面的形状：

<div align="center">
  <img src="./pictures/Pasted image 20260118150106.png" width="500">
</div>

同时调节参数使 $\bar k\approx \mu$，这样可以保证产生的大部分是想要的K介子。其次，我们使用探测器在 $y$ 处探测介子，其将探测下面态的振幅：
$$
\int\mathrm{d}^4x\,f(x-y)\phi'(x)|0\rangle
$$
因此，我们说一个K介子在 $x=0$ 附近产生，然后在 $x=y$ 附近被探测到的振幅即为下式：
$$
\mathcal A(y)=\int\mathrm{d}^4x\,\mathrm{d}^4 x'\,f(x'-y)^*f(x)\langle 0|\phi'(x')\phi'(x)|0\rangle
$$
现在假设 $y$ 是足够的大，使得两个区域几乎没有覆盖。因此，由于 $x'$ 局域在 $y$ 附近，其时间分量大于 $x$。因此我们可以将后面的乘积换成时序积，因而变成两点Green函数：
$$
\mathcal A(y)=\int\mathrm{d}^4x\,\mathrm{d}^4 x'\,f(x'-y)^*f(x)\langle 0|T(\phi'(x')\phi'(x))|0\rangle
$$
$$
\langle 0|T(\phi'(x')\phi'(x))|0\rangle=\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\mathrm{e}^{-iq\cdot (x'-x)}\dfrac{i}{q^2-\mu^2+i\mu\varGamma}
$$
因此其相当于对 $f$ 做Fourier变换：
$$
\mathcal A(y)=\int\dfrac{\mathrm{d}^4 k}{(2\pi)^4}|\tilde f(k)|^2\mathrm{e}^{-ik\cdot y}\dfrac{i}{k^2-\mu^2+i\mu\varGamma}
$$
到这里，我们先暂停一下，来想想预期出现怎样的结果。设 $s_0=\sqrt{y^2}$ 为K介子的固有时。首先，指数衰变律要求因子 $\mathrm{e}^{-\varGamma s_0/2}$，这里除以2是因为振幅还要平方。其次，在介子本征系中，其能量就是静能 $\mu$，因此应该会有相位因子 $\mathrm{e}^{-i\mu s_0}$。最后，薛定谔方程告诉我们波包是会扩散的，因此还会有一个额外的扩散因子 $s_0^{-3/2}$（这里不解释原因了）。因此，最终期望的结果为：
$$
\lim_{y^2\to \infty}\mathcal A(y)\propto\exp\left(-i\mu s_0-\frac12\varGamma s_0\right)\,s_0^{-3/2}
$$
我们下一节就来证明这一猜想，要用到的关键技术手段是**驻点近似**。

## 17.4 由驻点近似得到指数律

驻点近似是说，考虑一个快速振荡的函数的积分，只有那些几乎不振荡的点附近对积分有贡献，而其它部分都会抵消。用数学语言表达就是：考虑下面形式的积分：
$$
I=\int\mathrm{d}t\,\mathrm{e}^{i\theta(t)}\,g(t)
$$
其中实函数 $\theta(t)$ 变化得足够快（相对 $g(t)$ 而言）。对积分有主要贡献的区域在驻点附近，先假设 $\theta(t)$ 只有 $t=t_0$ 一个驻点，即
$$
\dfrac{\mathrm{d}\theta}{\mathrm{d}t}=0\quad \text{for}\; t=t_0
$$
则**驻点近似**表明：
$$
I=\mathrm{e}^{i\theta(t_0)}g(t_0)\int\mathrm{d}t\,\exp\left(\dfrac{i}{2}\theta''(t_0)(t-t_0)^2\right)
$$
后面是一个沿虚轴的Gauss积分，得到结果：
$$
I=\mathrm{e}^{i\theta(t_0)}g(t_0)\sqrt{\dfrac{2\pi}{|\theta''(t_0)|}}\mathrm{e}^{i\frac{\pi}{4}\text{sgn}(\theta''(t_0))}
$$
回到上一节的最后一步：振幅为
$$
\mathcal A(y)=\int\dfrac{\mathrm{d}^4 k}{(2\pi)^4}|\tilde f(k)|^2\mathrm{e}^{-ik\cdot y}\dfrac{i}{k^2-\mu^2+i\mu\varGamma}
$$
由于 $\tilde f(k)$ 的局域性，只需关注 $k^2\simeq \mu^2$ 的积分区域。由于 $y$ 很大，因此指数 $\mathrm{e}^{-ik\cdot y}$ 是快速振荡的。但我们不能直接对其用驻点近似，因为在 $k^2\simeq \mu^2$ 的区域，当 $\varGamma$ 很小时，传播子同样会发生相位的快速变化。如果只认为 $\mathrm{e}^{-ik\cdot y}$ 为振荡项，则我们会求出一个仅在 $s_0\gg\varGamma^{-1}$ 时适用的近似公式，这会导致指数律消失，我们只会得到平凡的零振幅。需要一个技巧将传播子也纳入振荡中：
$$
\dfrac{i}{k^2-\mu^2+i\mu\varGamma}=\int_0^\infty\dfrac{\mathrm{d}s}{2\mu}\mathrm{e}^{i(s/2\mu)(k^2-\mu^2+i\mu\varGamma)}
$$
$$
\mathcal A(y)=\dfrac{1}{(2\pi)^42\mu}\int_0^\infty\mathrm{d}s\int\mathrm{d}^4k\,|\tilde f(k)|^2\exp\left(-ik\cdot y+i\dfrac{sk^2}{2\mu}\right)\mathrm{e}^{-\varGamma s/2}
$$
现在 $\theta(k)=-k\cdot y+\dfrac{sk^2}{2\mu}$，驻点为
$$
\theta'(k_0)=0\Rightarrow k_0=\dfrac{\mu}{s}y,\quad \theta''(k_0)=-\dfrac{s}{\mu}
$$
用驻点近似可以先完成对 $k$ 的积分（注意这是一个四重积分）：
$$
\mathcal A(y)=\mathrm{e}^{i\pi}\dfrac{\mu}{2(2\pi)^2}|\tilde f(k_0)|^2\int_0^\infty\mathrm{d}s\,\mathrm{e}^{-\frac12\varGamma s}\dfrac{1}{s^2}\mathrm{e}^{-i\theta(s)}
$$
其中 $\theta(s)=\dfrac{\mu y^2}{2s}+\dfrac{\mu s}{2}$，因此这也是一个振荡的积分，$y$ 很大因此振荡很快。其驻点为：
$$
s_0=\sqrt {y^2},\quad \theta(s_0)=\mu s_0,\quad \theta''(s_0)=\dfrac{\mu}{{s_0}}
$$
可以看到，介子的固有时自动地出现了。得到最后的结果：
$$
\mathcal A(y)=-\sqrt{\dfrac{\mu}{32\pi^3}}\mathrm{e}^{i\pi/4}|\tilde f(k_0)|^2\mathrm{e}^{-i\mu s_0}\mathrm{e}^{-\frac12\varGamma s_0}s_0^{-3/2}
$$
这与我们先前的猜想是一致的，即证明了指数衰减律。

---

