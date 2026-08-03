---
title: "Coleman QFT Problem 14"
---

>[!question] 
>设 $\psi_A,\psi_B,\psi_C,\psi_D$ 是四个Dirac旋量场，$C,P,T$ 变换按下面的标准形式定义：
>$$ U_P^\dagger \psi(\vec x,t)U_P=\beta\psi(-\vec x,t),\quad U_C^\dagger\psi(x)U_C=\psi^*(x),\quad \varOmega_{PT}^{-1}\psi(x)\varOmega_{PT}=i\gamma_5\psi(-x)\quad (\text{Majorana basis})$$
>考虑下面的相互作用项：
>$$\mathcal H'=g_1(\bar\psi_A\gamma^\mu\psi_B)(\bar\psi_C\gamma_\mu\psi_D)+g_2(\bar\psi_A\gamma^\mu\psi_B)(\bar\psi_C\gamma_\mu\gamma_5\psi_D)+g_3(\bar\psi_A\gamma^\mu\gamma_5\psi_B)(\bar\psi_C\gamma_\mu\psi_D)+g_4(\bar\psi_A\gamma^\mu\gamma_5\psi_B)(\bar\psi_C\gamma_\mu\gamma_5\psi_D)+\text{c.c.}$$
>（1）说明 $\mathcal H'(0)$ 是 $CPT$ 不变的。
>（2）在 $g_i$ 满足怎样的条件下， $\mathcal H'(0)$ 是 $C$ 不变的？$P$ 不变的？$T$ 不变的？$PC$ ？$CT$ ？$TP$ ？

（1）关于二次型的三种变换下的性质我们已经在[Coleman QFT - Lecture 22. CPT与Fermi场](./Coleman%20QFT%20-%20Lecture%2022.%20CPT%E4%B8%8EFermi%E5%9C%BA.md)中讨论过，即：
$$
C:\begin{cases}
\bar\psi_1\gamma^\mu\psi_2\to -\bar\psi_2\gamma^\mu\psi_1\\
\bar\psi_1\gamma^\mu\gamma_5\psi_2\to \bar\psi_2\gamma^\mu\gamma_5\psi_1
\end{cases}\;,\quad P:\begin{cases}
\bar\psi_1\gamma^\mu\psi_2\to \pm\bar\psi_1\gamma^\mu\psi_2,\quad (+:\mu=0,\;-:\mu=1,2,3)\\
\bar\psi_1\gamma^\mu\gamma_5\psi_2\to \mp\bar\psi_1\gamma^\mu\gamma_5\psi_2
\end{cases}\;$$

以及
$$
\varOmega_{PT}^{-1}\bar\psi_1\gamma^\mu\psi_2\varOmega_{PT}=-i\bar\psi_1\gamma_5(-\gamma^\mu)i\gamma_5\psi_2=\bar\psi_1\gamma^\mu\psi_2,\quad \varOmega_{PT}^{-1}\bar\psi_1\gamma^\mu\gamma_5\psi_2\varOmega_{PT}=-i\bar\psi_1\gamma_5\gamma^\mu i\psi_2=-\bar\psi_1\gamma^\mu\gamma_5\psi_2
$$
因此
$$
CPT:\begin{cases}
\bar\psi_1\gamma^\mu\psi_2\to -\bar\psi_2\gamma^\mu\psi_1=-(\bar\psi_1\gamma^\mu\psi_2)^\dagger\\
\bar\psi_1\gamma^\mu\gamma_5\psi_2\to -\bar\psi_2\gamma^\mu\gamma_5\psi_1=-(\bar\psi_1\gamma^\mu\gamma_5\psi_2)^\dagger
\end{cases}
$$
这里用到的性质为：
$$
(\bar\psi_1\gamma^\mu\psi_2)^\dagger=\overline{(\bar\psi_1\gamma^\mu\psi_2)}=\bar\psi_2\gamma^\mu\psi_1,\quad (\bar\psi_1\gamma^\mu\gamma_5\psi_2)^\dagger=\overline{(\bar\psi_1\gamma^\mu\gamma_5\psi_2)}=\bar\psi_2(-\gamma_5)\gamma^\mu\psi_1=\bar\psi_2\gamma^\mu\gamma_5\psi_1
$$
对于 $\mathcal H'$ 中的每一项，$CPT$ 都将其变为其厄米共轭项（其会把系数变成复共轭），由于 $\mathcal H$ 是厄米的，因此在 $CPT$ 下不变。
（2）由于 $CPT$ 下 $\mathcal H'(0)$ 不变，因此 $P$ 不变性等价于 $CT$ 不变性，$C$ 不变性等价于 $PT$ 不变性， $T$ 不变性等价于 $CP$ 不变性。
$P$ 不变性：要求两个二次型在变换下按相同的方式变换，例如
$$
(\bar\psi_A\gamma^\mu\psi_B)(\bar\psi_C\gamma_\mu\psi_D)
$$
在 $P$ 下不变。因为 $\mu=0$ 时两项都不变，$\mu\ne 0$ 时两项都加负号。故 $\mathcal H'$ 中的第二项和第三项会加负号，第一项与第四项不变。故 $P/CT$ 不变要求
$$
g_2=g_3=0
$$
关于 $C$ 不变性：
$$
U_C^\dagger[g_1(\bar\psi_A\gamma^\mu\psi_B)(\bar\psi_C\gamma_\mu\psi_D)]U_C=g_1[(\bar\psi_A\gamma^\mu\psi_B)(\bar\psi_C\gamma_\mu\psi_D)]^\dagger
$$
因此会将其对应到其厄米共轭项。而第二项与第三项则会加一个负号。故 $C/PT$ 不变性要求：
$$
g_1,g_4 \;\text{are real},\quad g_2,g_3\;\text{are imaginary}
$$
最后，考察 $CP$ 不变性。其变换为：
$$
U_{CP}^\dagger\bar\psi_1\gamma^\mu\psi_2 U_{CP}=\mp\bar\psi_2\gamma^\mu\psi_1=\mp(\bar\psi_1\gamma^\mu\psi_2)^\dagger,\quad U_{CP}^\dagger\bar\psi_1\gamma^\mu\gamma_5\psi_2 U_{CP}=\mp(\bar\psi_1\gamma^\mu\gamma_5\psi_2)^\dagger\quad(-:\mu=0,\,+:\mu\ne 0)
$$
因此其对 $\mathcal H'$ 中的四项的作用都是只取厄米共轭，且不改变系数。因此 $CP/T$ 不变性要求：
$$
g_1,g_2,g_3,g_4\in\mathbb R
$$

---

>[!question]
>在[Coleman QFT - Lecture 25. 处理无限大：正规化与重整化](./Coleman%20QFT%20-%20Lecture%2025.%20%E5%A4%84%E7%90%86%E6%97%A0%E9%99%90%E5%A4%A7%EF%BC%9A%E6%AD%A3%E8%A7%84%E5%8C%96%E4%B8%8E%E9%87%8D%E6%95%B4%E5%8C%96.md)中，我们推导了在四维时空中一个图的表观发散度可以写为：
>$$D=4-B_E-\dfrac32 F_E+\sum_i n_i\delta_i,\quad \delta_i\equiv b_i+\dfrac32 f_i+d_i-4=\mathrm{dim}\,\mathcal L_i-4$$
>推导公式在一般的 $d$ 维时空中的版本。回答：使 $\phi^n$ 可重整化的最大的 $n$ 是多少？使 $(\bar\psi\psi)^2$ 可重整化的 $d$ 满足什么条件？

使用量纲分析。由于 $S$ 无量纲，因此：
$$
[\mathcal L]=[M]^{d}
$$
由自由场的动能项得到：
$$
[(\partial_\mu\phi)^2]=[M]^d\Rightarrow[\phi]=[M]^{\frac d2-1},\quad [\bar\psi\partial\mkern-9mu/\psi]=[M]^d\Rightarrow [\psi]=[M]^{\frac{d-1}{2}}
$$
对于每一根玻色子内线，其提供一个delta函数（$d$ 维）以及分母上的二次式，而费米子内线则提供delta函数与分母上的一次式。每个顶点也提供一个delta函数，而又要去除一个总的delta函数。故
$$
D=(d-2)B_I+(d-1)F_I+\sum_i n_i d_i-\sum_i n_id+d
$$
利用
$$
2B_I+B_E=\sum_i b_i n_i,\quad 2F_I+F_E=\sum_i f_i n_i
$$
则
$$
D=d-\dfrac{d-2}{2}B_E-\dfrac{d-1}{2}F_E-\sum_i n_i\delta_i,\quad \delta_i=\dfrac{d-2}{2}b_i+\dfrac{d-1}{2}f_i+d_i-d
$$
显然 $d=4$ 会回到原来的结果。
可重整化的相互作用类型要求 $\delta_i\leq 0$。对于 $\phi^n$：
$$
\delta=\dfrac{n}{2}(d-2)-d\leq 0\Rightarrow n\le \dfrac{2d}{d-2}
$$
$d=4$ 时对应于 $n\le 4$，是我们熟悉的结果。对于 $(\bar\psi\psi)^2$：
$$
\delta=2(d-1)-d=d-2\le 0\Rightarrow d\le 2
$$

---

>[!question]
>考虑旋量场与赝标量场的Yukawa相互作用：
>$$\mathcal L'=g\bar\psi i\gamma_5\psi\phi$$
>我们已经在[Coleman QFT - Lecture 21. Dirac方程 III：量子化与Feynman规则](./Coleman%20QFT%20-%20Lecture%2021.%20Dirac%E6%96%B9%E7%A8%8B%20III%EF%BC%9A%E9%87%8F%E5%AD%90%E5%8C%96%E4%B8%8EFeynman%E8%A7%84%E5%88%99.md)计算过介子-核子弹性散射的 $O(g^2)$ 阶的散射振幅了，其由两个图组成，设两个图代表的振幅分别为 $g^2M_1$ 与 $g^2M_2$。
>现在考虑介子与核子同位旋不变的相互作用理论（[Coleman QFT - Lecture 24. 同位旋](./Coleman%20QFT%20-%20Lecture%2024.%20%E5%90%8C%E4%BD%8D%E6%97%8B.md)中有过讨论）：
>$$\mathcal L'=g\,\vec \Phi\cdot\bar Ni\gamma_5\vec\tau N $$
>考虑下面三个不同类型的介子-核子散射过程：
>$$(a)\;p+\pi^+\to p+\pi^+\qquad (b) \;n+\pi^+\to n+\pi^+,\qquad (c)\;n+\pi^+\to p+\pi^0$$
>计算这三个过程到 $O(g^2)$ 阶的散射振幅，用 $g,M_1,M_2$ 表示。同时，计算同位旋描述下纯态 $I=\dfrac12$ 与 $I=\dfrac32$ 的弹性散射振幅 $a_{1/2}$ 与 $a_{3/2}$。

将相互作用显式写出来：
$$
\mathcal L'=g\begin{pmatrix}
\bar p&\bar n
\end{pmatrix}\begin{pmatrix}
\pi^0 &\sqrt 2\pi^+\\
\sqrt 2\pi^-&-\pi^0
\end{pmatrix}i\gamma_5\begin{pmatrix}
 p\\ n
\end{pmatrix}=g(\bar pi\gamma_5 p\pi^0+\sqrt 2\bar pi\gamma_5 n\pi^++\sqrt 2\bar ni\gamma_5 p\pi^--\bar n i\gamma_5 n\pi^0)
$$
(a) 过程对应的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260215155740.png" width="500">
</div>

注意，这里由于不存在电荷为2的中间核子，因此只有第二幅图有贡献。即
$$
a(p\pi^+\to p\pi^+)=2g^2 M_2
$$
类似的，由于不存在电荷-1的核子，过程 (b) 只有第一幅图有贡献，因此：
$$
a(n\pi^+\to n\pi^+)=2g^2 M_1
$$
而 (c) 过程则两幅图均有贡献：

<div align="center">
  <img src="./pictures/Pasted image 20260215160059.png" width="500">
</div>

因此
$$
a(n\pi^+\to p\pi^0)=\sqrt 2g^2(M_2-M_1)
$$
现在，再来考虑 $a_{3/2},a_{1/2}$。这用CG系数分解即可，过程 (a) 是纯的 $I=\dfrac32$ 散射过程：
$$
a_{3/2}=a(p\pi^+\to p\pi^+)=2g^2 M_2
$$
而过程 (b) 由CG分解得到：
$$
a(n\pi^+\to n\pi^+)=\dfrac13 a_{3/2}+\dfrac23  a_{1/2}=2g^2 M_1\Rightarrow a_{1/2}=3g^2M_1-g^2M_2
$$
我们可以用 (c) 过程进行验证：
$$
a(n\pi^+\to p\pi^0)=\dfrac{\sqrt 2}{3}a_{3/2}-\dfrac{\sqrt 2}{3}a_{1/2}=\sqrt 2g^2(M_2-M_1)
$$

---

 >[!question]
 >在这个问题中，你将比较两个介子-核子相互作用的理论。自由Lagrangian是相同的：
 >$$\mathcal L_0=\dfrac12\partial_\mu\phi\,\partial^\mu\phi-\dfrac12\mu^2\phi^2+\bar\psi(i\partial\mkern-9mu/-m)\psi$$
 >第一个理论是我们熟悉的赝标量的Yukawa相互作用：
 >$$\mathcal L'_I=g\bar\psi i\gamma_5\psi\phi$$
 >第二个理论称为“梯度耦合”加上一个二次耦合：
 >$$\mathcal L_{II}'=\mu^{-1}[ag\bar\psi\gamma^\mu\gamma_5\psi\partial_\mu\phi+bg^2\bar\psi\psi\phi^2]$$
 >其中 $a,b$ 是无量纲的实数。说明通过合适选取 $a,b$，可以使到 $O(g^2)$ 阶的介子-核子散射与核子-核子散射的散射振幅均在两个理论下相同。确定此时的 $a,b$。

首先来看核子-核子散射 $N+N\to N+N$。两个理论均给出Feynman图为：
 
<div align="center">
  <img src="./pictures/Pasted image 20260215164528.png" width="500">
</div>

Theory 1：
$$
i\mathcal A_1=-g^2\left[\bar u_{1'}i\gamma_5 u_1\bar u_{2'}i\gamma_5 u_2\dfrac{i}{(p_1-p_1')^2-\mu^2}-(1'\leftrightarrow 2')\right]
$$
Theory 2：
$$
i\mathcal A_2=\dfrac{g^2a^2}{\mu^2}\left[\bar u_{1'}(p\mkern-8.5mu/_{1'}-p\mkern-8.5mu/_{1})\gamma_5u_1\bar u_{2'}(p\mkern-8.5mu/_{2'}-p\mkern-8.5mu/_{2})\gamma_5u_2\dfrac{i}{(p_1-p_{1'})^2-\mu^2}-(1'\leftrightarrow 2')\right]
$$
由于
$$
\bar u_{1'}(p\mkern-8.5mu/_{1'}-p\mkern-8.5mu/_{1})\gamma_5u_1=2m\bar u_{1'}\gamma_5u_1,\quad \bar u_{2'}(p\mkern-8.5mu/_{2'}-p\mkern-8.5mu/_{2})\gamma_5u_2=2m\bar u_{2'}\gamma_5u_2
$$
比较两个理论的结果得到：
$$
\dfrac{4m^2a^2}{\mu^2}=1\Rightarrow a=\dfrac{\mu}{2m}
$$
再来看介子-核子散射 $\phi+N\to \phi+N$，第二个理论中的二次耦合项会有额外的贡献。我们画出Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20260215165657.png" width="800">
</div>

Theory 1：
$$
i\mathcal A_1=-ig^2\bar u'\left[i\gamma_5\dfrac{p\mkern-8.5mu/+q\mkern-8.5mu/+m}{s-m^2}i\gamma_5+i\gamma_5\dfrac{p\mkern-8.5mu/'-q\mkern-8.5mu/+m}{u-m^2}i\gamma_5\right]u=-ig^2\bar u'q\mkern-8.5mu/ u\left[\dfrac{1}{s-m^2}-\dfrac{1}{u-m^2}\right]\quad(s=(p+q)^2, u=(p'-q)^2)
$$
Theory 2：
$$
\begin{align}
i\mathcal A_2&=\dfrac{ia^2g^2}{\mu^2}\bar u'
\left[(-q\mkern-8.5mu/')\gamma_5\dfrac{p\mkern-8.5mu/+q\mkern-8.5mu/+m}{s-m^2}q\mkern-8.5mu/\gamma_5+q\mkern-8.5mu/\gamma_5\dfrac{p\mkern-8.5mu/'-q\mkern-8.5mu/+m}{u-m^2}(-q\mkern-8.5mu/')\gamma_5\right]u+\dfrac{2ig^2b}{\mu}\bar u' u\\
&=-\dfrac{ig^2}{4m^2}\bar u'\left[q\mkern-8.5mu/'\dfrac{p\mkern-8.5mu/+q\mkern-8.5mu/-m}{s-m^2}q\mkern-8.5mu/+q\mkern-8.5mu/\dfrac{p\mkern-8.5mu/'-q\mkern-8.5mu/-m}{u-m^2}q\mkern-8.5mu/'\right]u+\dfrac{2ig^2b}{\mu}\bar u' u
\end{align}
$$
利用
$$
\begin{align}
\bar u'q\mkern-8.5mu/'(p\mkern-8.5mu/+q\mkern-8.5mu/-m)q\mkern-8.5mu/u&=\bar u'(p\mkern-8.5mu/'+q\mkern-8.5mu/'-m)(p\mkern-8.5mu/+q\mkern-8.5mu/-m)(p\mkern-8.5mu/+q\mkern-8.5mu/-m)u=\bar u'(p\mkern-8.5mu/+q\mkern-8.5mu/-m)^3u\\
&=\bar u'\left[s(p\mkern-8.5mu/+q\mkern-8.5mu/)-3sm+3(p\mkern-8.5mu/+q\mkern-8.5mu/)m^2-m^3\right]u\\
&=\bar u'[-2ms+2m^3+(s+3m^2)q\mkern-8.5mu/]u
\end{align}
$$
$$
\bar u'q\mkern-8.5mu/(p\mkern-8.5mu/'-q\mkern-8.5mu/-m)q\mkern-8.5mu/'u=\bar u'(p\mkern-8.5mu/'-q\mkern-8.5mu/-m)^3u=\bar u'[-2um+2m^3-(u+3m^2)q\mkern-8.5mu/]u
$$
带入得到：
$$
i\mathcal A_2=-ig^2\bar u' q\mkern-8.5mu/ u\left[\dfrac{1}{s-m^2}+\dfrac{1}{u-m^2}\right]+ig^2\bar u' u\left[\dfrac{1}{m}+\dfrac{2b}{\mu}\right]
$$
因此
$$
\dfrac{1}{m}+\dfrac{2b}{\mu}=0\Rightarrow b=-\dfrac{\mu}{2m}
$$
故 $a=-b=\mu/2m$，理论2的相互作用项就是：
$$
\mathcal L_{II}'=\dfrac{g}{2m}\left[g\bar\psi\gamma^\mu\gamma_5\psi\partial_\mu\phi-g^2\bar\psi\psi\phi^2\right]
$$

---


