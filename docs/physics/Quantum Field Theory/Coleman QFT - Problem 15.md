---
title: "Coleman QFT Problem 15"
---

>[!question] 
>这个问题将构造一个只有纵向极化解的理论。考虑Lagrangian：
>$$\mathcal L=\pm\dfrac12\left[(\partial_\nu A^\nu)^2-\mu^2A_\nu A^\nu\right]$$
>说明其解为质量为 $m$ 的纵向波解，并且说明 $A_0$ 与其正则动量构成该理论的IVD。构造Hamiltonian，并确定符号。证明存在一种对应关系，可以将该理论的 $A_0$ 与其正则动量对应到标量场 $\phi$ 与 $\pi$ 上，使得该理论与Klein-Gordan理论等价。

变分得到运动方程：（其中三个是约束方程）
$$
\partial^\mu\partial^\nu A_\nu+\mu^2A^\mu=0
$$
取平面波试探解：
$$
A^\nu=\varepsilon^\nu \mathrm{e}^{-ik\cdot x}\Rightarrow k^\mu k^\nu \varepsilon_\nu-\mu^2\varepsilon^\mu=0
$$
横向解：
$$
\varepsilon\cdot k=0\Rightarrow -\mu^2\varepsilon^\mu=0
$$
因此不存在横向非平凡平面波解。纵向解：
$$
\varepsilon^\mu=a k^\mu\Rightarrow (k^2-\mu^2)\varepsilon^\mu=0\Rightarrow k^2=\mu^2
$$
因此存在质量 $\mu$ 的纵向平面波解。Lagrangian中唯一的时间导数项是 $\partial_0 A^0$，$A^0$ 对应的正则动量就是：
$$
\pi_0=\dfrac{\partial\mathcal L}{\partial(\partial_0 A^0)}=\pm\partial_\mu A^\mu
$$
由运动方程，$A^i$ 由正则动量 $\pi^0$ 完全确定。同时，
$$
\partial^0\pi_0+\mu^2 A^0=0
$$
因此 $\{A^0,\pi^0\}$ 构成该理论的IVD，可以确定后续任意时刻的 $A^\mu$。Hamiltonian就是
$$
\mathcal H=\pi_0\partial_0 A^0-\mathcal L=\pm\pi_0^2-\pi_0\partial_i A^i\mp\dfrac12\left[\pi_0^2-\mu^2 A^0 A_0-\mu^2 A^i A_i\right]\simeq \pm\left[\dfrac12\pi_0^2+\dfrac12\mu^2 A^0 A_0+\dfrac{1}{2\mu^2}(\partial_i \pi_0)^2\right]
$$
这里代入了约束方程，即用 $\pi_0$ 来表示 $A_i$。由于括号内的式子是正定的，因此符号应取 $+$ 。故
$$
\mathcal L=\dfrac12\left[(\partial_\nu A^\nu)^2-\mu^2A_\nu A^\nu\right],\quad \mathcal H=\dfrac12\pi_0^2+\dfrac12\mu^2 A^0 A_0+\dfrac{1}{2\mu^2}(\partial_i \pi_0)^2
$$
令 $\phi=-\dfrac 1\mu\pi_0,\;\pi=\mu A^0$，得到：
$$
\mathcal H=\dfrac12\pi^2+\dfrac12(\partial_i\phi)^2+\dfrac12\mu^2\phi^2,\quad \partial_0\phi=\pi
$$
正是KG理论的Hamiltonian。

---

>[!question]
>假设 $\psi_1,\psi_2$ 为两个Dirac场，质量为 $m_1,m_2$，以及 $A_\mu$ 为一个质量为 $\mu$ 的实矢量场。相互作用为：
>$$\mathcal L'=gA_\mu(\bar\psi_1\gamma^\mu\psi_2+\bar\psi_2\gamma^\mu\psi_1)$$
>当 $m_1>m_2+\mu$ 时，衰变过程 $\psi_1\to \psi_2+A_\nu$ 可以发生。计算质心系中最低阶的衰变宽度 $\varGamma$。由于该过程矢量场 $A_\mu$ 实际上耦合到一个不守恒的流上（ $m_1\ne m_2$ 时），验证这个理论在 $\mu\to 0$ 时会出现发散的问题。

基本顶点Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20260218145220.png" width="300">
</div>

有
$$
i\mathcal A_{fi}=ig\bar u^{s'}_2(p_2)\gamma^\nu u_1^s(p_1)\varepsilon_\nu^{(r)*}
$$
对自旋极化做求和平均：
$$
\dfrac12\sum_{s,s';r}|\mathcal A_{fi}|^2=\dfrac12 g^2\sum_{s,s';r}\bar u_1^s\gamma^\mu u_2^{s'}\bar u_2^{s'}\gamma^\nu u_1^s\varepsilon_\mu^{(r)}\varepsilon^{(r)*}_\nu=\dfrac12 g^2\,\mathrm{Tr}[\gamma^\mu(p\mkern-8.5mu/_2+m_2)\gamma^\nu(p\mkern-8.5mu/_1+m_1)]\left(-g^{\mu\nu}+\dfrac{(p_1-p_2)_\mu(p_1-p_2)_\nu}{\mu^2}\right)
$$
由
$$
\mathrm{Tr}[(p\mkern-8.5mu/_1-p\mkern-8.5mu/_2)(p\mkern-8.5mu/_2+m_2)(p\mkern-8.5mu/_1-p\mkern-8.5mu/_2)(p\mkern-8.5mu/_1+m_1)]=8[(p_1-p_2)\cdot p_1][(p_1-p_2)\cdot p_2]-4(p_1-p_2)^2(p_1\cdot p_2)+4m_1m_2(p_1-p_2)^2
$$
$$
\mathrm{Tr}[\gamma^\mu(p\mkern-8.5mu/_2+m_2)\gamma_\mu(p\mkern-8.5mu/_1+m_1)]=\mathrm{Tr}[(-2p\mkern-8.5mu/_2+4m_2)(p\mkern-8.5mu/_1+m_1)]=-8p_1\cdot p_2
+16m_1m_2$$
代入得到：
$$
\dfrac12\sum_{s,s';r}|\mathcal A_{fi}|^2=g^2\left[\dfrac{2(p_1\cdot p_2+m_1m_2)(m_1-m_2)^2}{\mu^2}-8m_1m_2+4p_1\cdot p_2\right]
$$
在质心系中：
$$
p_1=(m_1,0),\quad \sqrt{|\vec p_2|^2+\mu^2}+\sqrt{|\vec p_2|^2+m_2^2}=m_1
$$
解得
$$
|\vec p_2|=\sqrt{\dfrac{(m_1^2-(m_2+\mu)^2)(m_1^2-(m_2-\mu)^2)}{2m_1}},\quad E_2=\sqrt{|\vec p_2|^2+\mu^2}
$$
则
$$
\dfrac12\sum_{s,s';r}|\mathcal A_{fi}|^2=2g^2m_1\left[\dfrac{E_2+m_2}{\mu^2}(m_1-m_2)^2-2(2m_1-E_2)\right]
$$
$$
\varGamma=\dfrac{|\vec p_2|}{8\pi m_1^2}\cdot\dfrac12\sum_{s,s';r}|\mathcal A_{fi}|^2=\dfrac{g^2|\vec p_2|}{4\pi m_1}\left[\dfrac{E_2+m_2}{\mu^2}(m_1-m_2)^2-2(2m_1-E_2)\right]
$$
可以看到，当 $m_1\ne m_2$ 时，结果在 $\mu\to 0$ 时出现了发散的问题。

---

>[!question]
>考虑一个 $\phi^4$ 作用的Lagrangian：
>$$\mathcal L=\dfrac12\partial^\mu\phi'\partial_\mu\phi'-\dfrac12\mu^2\phi'^2-\dfrac{1}{4!}g\phi'^4-\dfrac{1}{4!}C\phi'^4+\cdots$$
>考虑该理论的耦合常数重整化，其要求介子-介子弹性散射的振幅在对称点 $s=t=u=\dfrac 43\mu^2$ 处精确满足：
>$$i\mathcal A=ig$$
>其中三个Mandelstam变量为（参见[[Coleman QFT - Lecture 11. 散射理论 I：Mandelstam变量、CPT和相空间]]）：
>$$s=(p+q)^2,\quad t=(p-p')^2,\quad u=(p-q')^2$$
>计算该散射过程到 $O(g^2)$ 阶的散射振幅，用 $s,t,u$ 表示，结果保留对Feynman参数的积分即可。并通过计算散射截面验证质心系中的光学定理成立。

 $O(g^2)$ 阶的介子-介子散射的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260218210613.png" width="600">
</div>

最后一张图是抵消项，四个图之和在对称点处应互相抵消，也就是说
$$
\mathcal A_4=-C_2,\quad \mathcal A_1+\mathcal A_2+\mathcal A_3-C_2=0\quad \text{at }\;s=t=u=\dfrac43\mu^2
$$
前三幅图就对应着三种模式。第一幅图为 $s$ 模式，有
$$
i\mathcal A_1=(-ig)^2\cdot\dfrac12\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\dfrac{i}{k^2-\mu^2+i\epsilon}\dfrac{i}{[(k+p+q)^2-\mu^2+i\epsilon]}
$$
这里的 $1/2$ 是因为 $1/4!$ 无法被完全消除。解释：从四个 $\phi(x_1)$ 与四个 $\phi(x_2)$ 中选择两组进行缩并，并选取未缩并场对应的外线，则选取的方式数为：
$$
(C_4^2)^2\times2\times 2^2=288
$$
因此总的因子就是
$$
\dfrac{288}{(4!)^2}=\dfrac12
$$
使用Feynman参数化，得到：
$$
\mathcal A_1(s)-\mathcal A_1(s=4\mu^2/3)=-\dfrac{g^2}{32\pi^2}\int_0^1\mathrm{d}x\,\ln\left[\dfrac{\mu^2-sx(1-x)-i\epsilon}{\mu^2-4\mu^2x(1-x)/3}\right]\equiv g^2f(s)
$$
剩下的两幅图只需将 $s$ 换成 $t,u$ 即可，因此介子-介子散射的振幅即为
$$
\mathcal A=-g+g^2[f(s)+f(t)+f(u)]+O(g^3)
$$
引用[[Coleman QFT - Lecture 12. 散射理论 II：应用]]中的结论，双粒子弹性散射的微分散射截面为
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{1}{64\pi^2E_T^2}|\mathcal A_{fi}|^2=\dfrac{g^2}{64\pi^2s}+O(g^3)
$$
总截面为（注意全同性的影响）：
$$
\sigma=\dfrac12\int\mathrm{d}\varOmega\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{g^2}{32\pi s}+O(g^3)
$$
在质心系中，入射动量与能量可以用 $s$ 表示：
$$
s=4(|\vec p_i|^2+\mu^2)\Rightarrow |\vec p_i|=\sqrt{\dfrac s4-\mu^2},\quad E_T=\sqrt s
$$
则
$$
2E_T|\vec p_i|\sigma=\dfrac{g^2}{32\pi}\sqrt{1-\dfrac{4\mu^2}{s^2}}
$$
另一方面，再来计算前向散射振幅 $\mathcal A_{ii}$ 的虚部。由于其相当于不发生作用，此时 $p=p',q=q'$，因此 $t=0,\;s\geq 4\mu^2,\;u=4\mu^2-s<0$。而虚部来源于积分中的对数可能存在负数，即
$$
\mu^2-sx(1-x)<0
$$
时会出现虚部。显然，$f(t),f(u)$ 都不会出现上述情况，因此
$$
\mathrm{Im}\,\mathcal A_{ii}=g^2\,\mathrm{Im}\,f(s)
$$
而
$$
\mathrm{Im}\,f(s)=-\dfrac{1}{32\pi^2}(-\pi)|x_2-x_1|
$$
其中 $x_1,x_2\in[0,1]$ 是分子的两个零点。由
$$
sx(1-x)=\mu^2\Rightarrow |x_2-x_1|=\sqrt{1-\dfrac{4\mu^2}{s}}
$$
因此
$$
\mathrm{Im}\,\mathcal A_{ii}=\dfrac{g^2}{32\pi}\sqrt{1-\dfrac{4\mu^2}{s^2}}=2E_T|\vec p_i|\sigma
$$
正是光学定理。

---
