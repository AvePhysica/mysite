---
title: "Coleman QFT Lecture 16: 重整化 II：推广与延伸"
---

## 16.1 介子的自能函数（完结）

在[Coleman QFT - Lecture 15. 重整化 I：确定抵消项](./Coleman%20QFT%20-%20Lecture%2015.%20%E9%87%8D%E6%95%B4%E5%8C%96%20I%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%8A%B5%E6%B6%88%E9%A1%B9.md) 中，我们算到一半就停了。将最后一步抄在这里：
$$
-i\tilde \Pi^f(p^2)=g^2\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\int_0^1\dfrac{\mathrm{d}x}{[k^2-p^2x^2+p^2x-m^2+i\epsilon]^2}
$$
同时，在15.5中，我们求解了下面的一类积分：
$$
I_n=\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\dfrac{1}{(q^2+a+i\epsilon)^n},\quad a\in\mathbb R,\,n\in\mathbb Z_+
$$
我们需要的结果是 $I_2=-\dfrac{i}{16\pi^2}\ln(-a)$，得到：
$$
\tilde\Pi^f(p^2)=\dfrac{g^2}{16\pi^2}\int_0^1\mathrm{d}x\,\ln(m^2-p^2x(1-x)-i\epsilon)
$$
这个积分仍是发散的，但是 $\tilde\Pi'(p^2)$ 是收敛的：
$$
\tilde \Pi'(p^2)=\tilde \Pi^f(p^2)-\tilde \Pi^f(\mu^2)-(p^2-\mu^2)\dfrac{\mathrm{d}\tilde \Pi^f}{\mathrm{d} p^2}\bigg|_{\mu^2}
$$
$$
\tilde\Pi'(p^2)=\dfrac{g^2}{16\pi^2}\int_0^1\mathrm{d}x\left\{\ln\left(\dfrac{m^2-p^2x(1-x)-i\epsilon}{m^2-\mu^2x(1-x)-i\epsilon}\right)+(p^2-\mu^2)\dfrac{x(1-x)}{m^2-\mu^2x(1-x)-i\epsilon}\right\}
$$
实际上，由于介子是稳定的，故 $\mu^2 x(1-x)\leq \mu^2/4<m^2$ ，故分母不会出现极点，可以去掉小虚部，得到：
$$
\tilde\Pi'(p^2)=\dfrac{g^2}{16\pi^2}\int_0^1\mathrm{d}x\left\{\ln\left(\dfrac{m^2-p^2x(1-x)-i\epsilon}{m^2-\mu^2x(1-x)}\right)+(p^2-\mu^2)\dfrac{x(1-x)}{m^2-\mu^2x(1-x)}\right\}
$$
这个积分我不想积出来，因为全部展开会非常丑。因此我直接将其作为 $\tilde\Pi'(p^2)$ 最终的 $O(g^2)$ 阶的表达式。其解析性质显然为在 $p^2<4m^2$ 的实轴上解析。
作为一个检验，我们知道介子传播子可以表示为：
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2-\tilde \Pi'(p^2)+i\epsilon}
$$
而 $\tilde\Pi'(p^2)$ 的奇异性来源于对数内分子为零（分母恒大于零），其表现为实轴上 $p^2\in[4m^2,+\infty]$ 的割线。
以及Kallen-Lehmann谱表示：
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2+i\epsilon}+\int_0^\infty\mathrm{d} a^2\,\sigma(a^2)\dfrac{i}{p^2-a^2+i\epsilon}
$$
表明其解析性质为 $p^2=\mu^2$ 处的**一阶极点**以及 $p^2=4m^2$ 为起点的实轴的上的**割线**。因此，显而易见的是当 $p^2<\mu^2<4m^2$ 时解析。

## 16.2 Feynman参数化

在[Coleman QFT - Lecture 15. 重整化 I：确定抵消项](./Coleman%20QFT%20-%20Lecture%2015.%20%E9%87%8D%E6%95%B4%E5%8C%96%20I%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%8A%B5%E6%B6%88%E9%A1%B9.md)中，我们已经提到过Feynman参数化，其中引用了下面的积分结果：
$$
\int_0^1\mathrm{d}x\,\dfrac{1}{[ax-b(1-x)]^2}=\dfrac{1}{ab}
$$
实际上，真实的Feynman参数化对应于一个更普适的公式。考虑一些Feynman分母的连乘：
$$
\prod_{i=1}^n\dfrac{1}{a_i+i\epsilon}
$$
首先将其写成：
$$
\dfrac{1}{a_i+i\epsilon}=-i\int_0^\infty\mathrm{d}\beta_i\,\mathrm{e}^{i\beta_i(a_i+i\epsilon)}
$$
现在考虑下面的恒等式：.
$$
\int_0^\infty\dfrac{\mathrm{d}\lambda}{\lambda}\delta\left(1-\dfrac{\beta}{\lambda}\right)=\int_0^\infty\dfrac{\mathrm{d}\lambda}{\lambda}\left|\dfrac{\beta}{\lambda}\right|^{-1}\delta(\lambda-\beta)=1
$$
取 $\sum_i\beta_i=\beta$，有
$$
\prod_{i=1}^n\dfrac{1}{a_n+i\epsilon}=(-1)^n\prod_{i=1}^n\int\mathrm{d}\beta_i\,\mathrm{e}^{i\beta_i(a_i+i\epsilon)}\int_0^\infty\dfrac{\mathrm{d}\lambda}{\lambda}\delta\left(1-\dfrac{\sum_i\beta_i}{\lambda}\right)
$$
做换元 $\alpha_i=\beta_i/\lambda$，得到
$$
\prod_{i=1}^n\dfrac{1}{a_n+i\epsilon}=(-1)^n\int_0^\infty\mathrm{d}\lambda\,\lambda^{n-1}\int_0^1\mathrm{d}\alpha_1\cdots\mathrm{d}\alpha_n\,\delta\left(1-\sum_i\alpha_i\right)\mathrm{e}^{i\lambda\sum_i\alpha_i(a_i+i\epsilon)}=\int_0^1\mathrm{d}\alpha_1\cdots\mathrm{d}\alpha_n\dfrac{(n-1)!}{[\sum\alpha_i(a_i+i\epsilon)]^n}\delta\left(1-\sum_i\alpha_i\right)
$$
上式称为**Feynman参数化**，其中 $\alpha_1,\cdots\alpha_n$ 为Feynman参数。观察式子，一般而言，当我们计算圈图积分时，往往会遇到左侧的式子，每个Feynman分母都代表一个传播子。现在将其等于右侧，则变成一个对Feynman参数的积分。实际上，对于单圈图，所有传播子都形如 $(k^2-a+i\epsilon)^{-1}$ 的形式，故我们可以先用积分表完成对 $k$ 的积分，最后再处理对Feynman参数的积分。当然，这样说你很可能不是很明白，让我们考虑下面的例子：
考虑著名的 $\phi^4$ 理论，Lagrangian为：
$$
\mathcal{L}=\mathcal L_0-\dfrac{\lambda}{4!}\phi^4
$$
其最低阶的非平凡介子自能项由下图给出：

<div align="center">
  <img src="./pictures/Pasted image 20260113130558.png" width="600">
</div>

这里我们已经按能动量守恒标上了动量，这样就不用管那些顶点delta函数的积分。暂时先不考虑**组合因子**（这对 $\phi^4$ 理论是一个难点）以及常数因子。其涉及的积分为：
$$
I=\int\mathrm{d}^4k_1\mathrm{d}^4k_2\dfrac{1}{(k_1^2-\mu^2)(k_2^2-\mu^2)((p-k_1-k_2)^2-\mu^2)}
$$
实际上，我们可以考虑更为一般的积分。假设需要计算的图有 $l$ 个**回路**，每个回路按能动量守恒都可以用一个待积分的动量 $k_i$ 表示。再假设存在 $p_j$ 刻画的**外线**，以及共有 $n$ 条**内线**，则考虑的积分必具有下面的形式：
$$
I=\int\mathrm{d}^4k_1\cdots\mathrm{d}^4k_l\int_0^1\mathrm{d}\alpha_1\cdots\mathrm{d} \alpha_n\,\delta\left(1-\sum\alpha\right)\dfrac{1}{D^n}
$$
这里 $D$ 是关于 $k_i$ 的**二次函数**，其具有下面的一般形式
$$
D=\sum_{i,j=1}^l A_{ij}\,k_i\cdot k_j+\sum_{i=1}^l B_i\cdot k_i+C
$$
关于各系数：$A_{ij}$ 是**对称的** $l\times l$ 矩阵，矩阵元都是 $\alpha_i$ 的线性组合。由于对Feynman参数的积分为 $0\sim 1$，对于 $\alpha_i>0$ 的情形，可以证明 $A_{ij}$ 是**可逆的**。$B_i$ 则是一组四矢量，关于 $\alpha_i$ 与 $p_j$ 是线性的。

由于 $A_{ij}$ 可逆，一定可以通过重定义 $k_i$ 消去线性项，具体来说：
$$
\text{Define}\qquad k_i'\equiv k_i+\dfrac12\sum_jA^{-1}_{ij}B_j
$$
则
$$
D=\sum_{i,j=1}^l A_{ij}\,k_i'\cdot k_j'+C'\quad C'=C-\dfrac14\sum_{i,j=1}^l B_i A_{ij}^{-1}B_j
$$
此外，由于 $A_{ij}$ 是对称的，其一定可以被**对角化**。选取合适的 $k_i''$ 可以使其对角化，同时由于 $k_i'\to k_i''$ 是幺正变化，故积分测度不变。得到：
$$
I=\int\mathrm{d}^4k_1''\cdots\mathrm{d}^4k_l''\int_0^1\mathrm{d}\alpha_1\cdots\mathrm{d}\alpha_n\,\delta\left(1-\sum_{i=1}^l\alpha_i\right)\dfrac{1}{(\sum_{i=1}^la_i(k_i'')^2+c')^n}
$$
其中发 $a_i$ 是 $A_{ij}$ 的特征值。最后，做换元 $k_i'''=\sqrt{a_i}k_i''$，有
$$
I==\int\mathrm{d}^4k_1'''\cdots\mathrm{d}^4k_l'''\int_0^1\mathrm{d}\alpha_1\cdots\mathrm{d}\alpha_n\,\dfrac{1}{(\det A)^2}\delta\left(1-\sum_{i=1}^l\alpha_i\right)\dfrac{1}{(\sum_{i=1}^l(k_i'')^2+c')^n}
$$
这样，用积分表便可以完成对 $k$ 的积分。
需要注意的是，Feynman参数化过程**不一定**能有效简化积分。原先，对每一个回路的积分 $\mathrm{d}^4 k$ 是四重的，而在Feynman参数化（且完成对 $k$ 的积分）后，剩下的为对Feynman参数的积分，其积分数等于内线数。后者不一定比前者少。对于我们的 $\phi^4$ 理论，原先的积分是 $\mathrm{d}^4k_1\mathrm{d}^4k_2$ 的八重积分，在参数化后变成对参数的三重积分，因此的确是简化了的。

## 16.3 耦合常数重整化

我们离完成 Model 3 的重整化只差一步了，即对耦合常数的重整化，对应于下面的项：
$$
\mathcal L_{CT}=\cdots+F\psi^*\psi\phi+\cdots
$$
其基本顶点与 $g\psi^*\psi\phi$ 是相同的。为了确定 $F$ ，我们需要考虑三点Green函数。首先定义相应的1PI图：

<div align="center">
  <img src="./pictures/Pasted image 20260113141232.png" width="400">
</div>

最低阶的几个Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260113141724.png" width="600">
</div>

现在我们面临一个问题：重整化条件源于 $g$ 的定义，但我们并不知道怎么定义 $g$。一般而言，习惯于取下面的约定：
$$
g\equiv\tilde\Gamma'(m^2,m^2,\mu^2)
$$
这个定义的意思是在说，当我们考虑所有**介子衰变为两个核子的过程**时，我们不需要考虑高阶图，而只需考虑最低阶的基本顶点贡献即可，也就是把该过程的振幅定义为 $g$ 。这样定义是比较自然的。值得注意的是，由于介子实际上是稳定的( $\mu^2<4m^2$ )，故这一过程若要满足能动量守恒 $p+p'+q=0$，则其一些分量必须是复数，因此该过程实际上并不会发生。但是，通过将 $\tilde\Gamma'(p^2,p'^2,q^2)$ 视为复变量的函数，从其物理区域可以唯一地**解析延拓**至该点。
从上面的前几项展开，以及重整化条件，我们可以知道后两个图在 $p^2=p'^2=m^2,q^2=\mu^2$ 的条件下互相抵消，因此可以确定 $F_3$，对于更高阶的 $F_n$ ，其可以按相同方法确定：其必须和同阶的对三点1PI图有贡献的项抵消。

下面来看几个实际的物理过程：考虑介子-核子弹性散射过程：
$$
\phi+N\to \phi+N
$$
其对应的图可以分类为以下四种：

<div align="center">
  <img src="./pictures/Pasted image 20260113143630.png" width="700">
</div>

(a)类为四点1PI图。而(b), (c), (d)类呈现出s, t, u通道的特征。对于(b)图，其表达式为：
$$
(b)=-i\tilde\Gamma'(s,m^2,\mu^2)\tilde D'(s)(-i\tilde \Gamma'(m^2,s,\mu^2))
$$
其在 $s=m^2$ 处有一个**极点**，其由核子传播子 $\tilde D'$ 造成。此外，我们还知道该点的留数为 $i$，因此：
$$
\tilde D'(s)=\dfrac{i}{s-m^2}+\text{terms analytic at }s=m^2
$$
同时，(a)(c)(d)类图在该点是解析的，因为它们的 $s$ 不会经过一些图的部分之后“汇聚”到一根核子线上。相应的， (b), (d)图具有的极点是 $t=\mu^2$ 与 $u=m^2$。故核子-介子散射振幅在 $s=m^2$ 点的解析性质为：
$$
\mathcal A=\dfrac{-ig^2}{s-m^2}+\text{terms analytic at }s=m^2
$$
现在我们知道如何测定 $g$ 了，通过测量介子-核子散射过程的散射截面，并且解析延拓 $s=(p_1+p_2)^2$ 至 $s=m^2$ ，便可以观测到该点的极点性质，通过测量留数可以得到 $g$。

另一方面，还能考虑核子-核子弹性散射过程。
$$
N+N\to N+N
$$
类似的，图可以分为四种情况，我们这次只列出 t 通道：

<div align="center">
  <img src="./pictures/Pasted image 20260113150224.png" width="600">
</div>

其在 $t=\mu^2$ 处有极点，因此散射振幅为：
$$
\mathcal A=\dfrac{-ig^2}{t-\mu^2}+\text{terms analytic at }t=\mu^2
$$
同样的，通过解析延拓得到这一点的留数，也可以得到 $g^2$。

## 16.4 所有理论都是可重整化的吗？

在计算介子的传播子时，我们发现重整化项 $B,C$ 消除了 $\tilde\Pi'(p^2)$ 中的无穷大，但这并不意味着重整化是完全为消除无限大而出现的。实际上。对于介子的两点1PI图，其只需质量重整化项 $C$ 就足以消除无限大，因此需要的重整化常数是多于消除无限大要求的常数数量的。另一方面，对于耦合常数重整化，$F_3$ 由下面的图确定：

<div align="center">
  <img src="./pictures/Pasted image 20260113151348.png" width="400">
</div>

其有三条内线以及一个回路，因此在大 $k$ 时的趋势为 $\mathrm{d}^4k/k^6$，因此积分是收敛的。抵消项 $F$ 并没有起到消除无限大的作用。
下面我们仍使用 $\phi^4$ 理论，来进一步讨论**重整化**与**无限大**间的关系。Lagrangian仍为：
$$
\mathcal L=\mathcal L_0-\dfrac{1}{4!}g_0\phi^4
$$
首先考虑到 $O(g_0^2)$ 阶的图。对两点函数，有下面的“唇形图”：

<div align="center">
  <img src="./pictures/Pasted image 20260113152130.png" width="400">
</div>

在大 $k$ 时，其趋近于 $\mathrm{d}^4k_1\mathrm{d}^4k_2/k^6$。现在，我们同时需要抵消项系数 $B,C$，第一个将二次发散变成对数发散，而第二个将对数发散变成收敛的积分。我们实际关心的是该图的二阶导：
$$
\dfrac{\mathrm{d}^2\tilde\Pi^f(p^2)}{\mathrm{d}(p^2)^2}=\dfrac{\mathrm{d}^2\tilde\Pi'(p^2)}{\mathrm{d}(p^2)^2}
$$
其次，我们还有四点函数：

<div align="center">
  <img src="./pictures/Pasted image 20260113152930.png" width="500">
</div>

这个图在大 $k$ 时趋于 $\mathrm{d}^4k/k^4$，因此是对数发散的，其可以被耦合常数重整化的抵消项消除。至此为止，一切都很好，对理论的重整化顺利消除了可能出现的各种无穷大。

接下来，我们来处理一些不一样的东西。考虑 $\phi^5$ 理论：
$$
\mathcal L=\mathcal L_0-\dfrac{1}{5!}g\phi^5
$$
此时，我们有下面的到 $O(g^2)$ 阶的六点函数图：

<div align="center">
  <img src="./pictures/Pasted image 20260113153311.png" width="500">
</div>

其同样是对数发散的。但是，现在我们最多外线的重整化是耦合常数重整化，其是一个五点函数，对上面的六点函数无能为力。
如果想要强行消除这个发散，我们需要引入六点函数的重整化项：

<div align="center">
  <img src="./pictures/Pasted image 20260113153605.png" width="500">
</div>

因此Lagrangian变成：
$$
\mathcal L=\mathcal L_0-\dfrac{1}{5!}g\phi^5-\dfrac{1}{6!}h\phi^6
$$
但我们真的消除了无穷大吗？并没有，我们实际上产生了新的发散图：

<div align="center">
  <img src="./pictures/Pasted image 20260113153808.png" width="500">
</div>

其为发散的八点函数与七点函数。为了消除这里的无穷大，我们又不得不引入新的抵消项：
$$
\dfrac{1}{7!}j\phi^7+\dfrac{1}{8!}k\phi^8
$$
但这显然又会出现直至十二条外线的发散图。因此，我们永远无法通过引入抵消项消除该理论的发散，或者说如果我们尝试重整化该理论，则最终我们需要**无限多的抵消项**。对于这样的，需要无限多的抵消项才能消除发散的理论，称为**不可重整化**的理论。因此，并不是所有的理论都能被很好的重整化。

---









