---
title: "Coleman QFT Lecture 23: 旋量场理论的重整化"
---

## 23.1 Model 3 的重新讨论

我们仍首先来看核子-介子相互作用的Model 3，但现在核子场是自旋1/2的旋量场，介子场是赝标量场。Lagrangian写为：
$$
\mathcal L=\bar\psi(i\partial\mkern-8.5mu/-m_0)\psi+\dfrac12(\partial_\mu\phi)^2-\dfrac12\mu_0^2\phi^2+g_0\bar\psi i\gamma_5\psi\phi
$$
由于我们是要去做重整化，因此这里的Lagrangian都是用**裸参数**写出的，包括未重整化的Heisenberg场 $\phi,\psi$、裸质量 $\mu_0,m_0$ 与裸耦合强度 $g_0$。
首先来对场做重整化。由于 $\phi$ 是赝标量，故其真空期望为零自动被满足：
$$
\langle 0|\phi(x)|0\rangle=\langle 0|\phi(0)|0\rangle=0
$$
因此我们只需考虑单粒子态的重整化条件，定义：
$$
\langle 0|\phi(0)|p\rangle=\sqrt {Z_3}
$$
则取重整化场为：
$$
\phi'(x)=\dfrac{1}{\sqrt{Z_3}}\phi(x)
$$
对于核子场要加上自旋指标，我们只需研究 $\langle0|\psi(x)|r,p\rangle$（$\bar\psi$ 的矩阵元可以由电荷共轭得到）。但现在的问题是 $\psi(x)$ 是一个**列向量算符**，因此不止一个分量需要确定，我们要如何规定新的重整化条件呢？
首先，由Lorentz boost可以将其变为静止的单粒子态：
$$
|r,p\rangle=U(A)|r,p_{(0)}\rangle
$$
假设自旋指标标记的是 $J_z$ 的本征态，即：
$$
J_z|1,p_{(0)}\rangle=+\dfrac12|1,p_{(0)}\rangle,\quad J_z|2,p_{(0)}\rangle=-\dfrac12|2,p_{(0)}\rangle
$$
并且假设该粒子态具有正的宇称：
$$
U_P|1,p_{(0)}\rangle=+|1,p_{(0)}\rangle
$$
此时 $|2,p_{(0)}\rangle$ 可以由降算符 $J_x-iJ_y$ 作用于 $|1,p_{(0)}\rangle$ 得到。现在，通过对称性分析，我们能确定 $\langle0|\psi(x)|1,p_{(0)}\rangle$ 的性质。考虑
$$
\langle 0|\mathrm{e}^{i\theta J_z}\psi(0)\mathrm{e}^{-i\theta J_z}|1,p_{(0)}\rangle=\mathrm{e}^{-\frac12i\theta}\langle0|\psi(0)|1,p_{(0)}\rangle=\mathrm{e}^{-iL_z\theta}\langle0|\psi(0)|1,p_{(0)}\rangle
$$
第一个等号是由 $\mathrm{e}^{-i\theta J_z}$ 作用在态上得到的，其表现为本征值 $1/2$，第二个等号则是由 $\mathrm{e}^{-i\theta J_z}$ 作用于 $\psi(x)$ 上得到的，其对应于Lorentz群的旋量表示的矩阵 $L_z$，其作用于 $\langle0|\psi(0)|1,p_{(0)}\rangle$ 这个列矢量，混合其分量，因此 $\langle0|\psi(0)|1,p_{(0)}\rangle$ 是 $L_z$ 的本征矢量，本征值为 $1/2$。写下其矩阵：
$$
L_z=\dfrac12\begin{pmatrix}
\sigma_z&0\\ 0&\sigma_z
\end{pmatrix}
$$
因此一定有：
$$
\langle0|\psi(0)|1,p_{(0)}\rangle=\sqrt{2m}\begin{pmatrix}
a\\0\\b\\0
\end{pmatrix}
$$
这就是 $u^{(1)}_0$ 和 $v^{(2)}_0$ 的线性组合。还能更进一步，我们知道粒子与反粒子的宇称是相反的，因此自然会考虑宇称的作用：
$$
\langle 0|U_P^\dagger \psi(0)U_P|1,p_{(0)}\rangle=\langle0|\psi(x)|1,p_{(0)}\rangle=\beta\langle0|\psi(x)|1,p_{(0)}\rangle
$$
$\beta=\begin{pmatrix}\mathbb 1&0\\0&-\mathbb 1 \end{pmatrix}$ ，因此 $b=0$ 。故我们最终得到：
$$
\langle0|\psi(0)|1,p_{(0)}\rangle=\sqrt{2m}\begin{pmatrix}
a\\0\\0\\0
\end{pmatrix}
$$
对比自由场的结果：
$$
\langle0|\psi_{\text{free}}(0)|1,p_{(0)}\rangle=u_0^{(1)}=\sqrt{2m}\begin{pmatrix}
1\\0\\0\\0
\end{pmatrix}
$$
可以看到其仅仅差一个倍数 $a$ 。这是由**对称性**决定的，只要相互作用是Lorentz不变且宇称不变的，则矩阵元就一定具有上面的形式。令 $a=\sqrt {Z_2}$ ，则重整化核子场为：
$$
\psi'(x)=\dfrac{1}{\sqrt {Z_2}}\psi(x)
$$
此时
$$
\langle0|\psi'(0)|1,p_{(0)}\rangle=u_0^{(1)}\Rightarrow \langle0|\psi'(x)|r,p\rangle=\mathrm{e}^{-ip\cdot x}u_{\vec p}^{(r)}
$$
质量重整化与耦合常数重整化的步骤和[Coleman QFT - Lecture 15. 重整化 I：确定抵消项](./Coleman%20QFT%20-%20Lecture%2015.%20%E9%87%8D%E6%95%B4%E5%8C%96%20I%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%8A%B5%E6%B6%88%E9%A1%B9.md)是一样的。重整化后的Lagrangian写为：
$$
\mathcal L=\dfrac12(\partial_\mu\phi')^2-\dfrac12\mu^2\phi'^2+\bar\psi'(i\partial\mkern-8.5mu/-m)\psi'+g\bar\psi 'i\gamma_5\psi'\phi'+\dfrac12A(\partial_\mu\phi')^2-\dfrac12 B\phi'^2+C\bar\psi'i\partial\mkern-9mu/\psi'-D\bar\psi'\psi'-E\bar\psi'i\gamma_5\psi'\phi'
$$

>[!tip] Discuss
>前面假定了相互作用是宇称不变的，那如果不是会怎样呢？这样 $b$ 没有理由被消除。我们求助于 $\gamma_5=\begin{pmatrix}0&\mathbb 1\\\mathbb 1&0 \end{pmatrix}$：
>$$\langle0|\gamma_5\psi(0)|1,p_{(0)}\rangle=\sqrt{2m}\begin{pmatrix}b\\0\\a\\0\end{pmatrix}$$
>现在可以构造新的场为：
>$$\psi'=\dfrac{a\psi-b\gamma_5\psi}{a^2-b^2},\quad \langle0|\psi'(0)|1,p_{(0)}\rangle=u_0^{(1)}$$
>但这会导致更多的抵消项的产生。但这就是失去宇称对称性的后果：对称性越少，需要的重整化抵消项就越多。

## 23.2 重整化的Dirac传播子

抵消项 $A,B$ 由介子传播子 $p^2=\mu^2$ 处的解析性质决定，即这是介子自能函数 $\tilde \Pi'(\mu^2)$ 的一阶极点，且留数为 $i$。那为了确定抵消项 $C,D$，自然要考察核子的Dirac传播子：

<div align="center">
  <img src="./pictures/Pasted image 20260207220431.png" width="700">
</div>

值得注意的是，由于在计算Green函数时不会加外线的 $u,\bar u$ 因子，因此这里的 $\tilde S'(p)$ 是一个 $4\times 4$ 矩阵。我们可以将其分解为16个二次型的线性组合：
$$
\tilde S'(p)=a(p^2)+b(p^2)\gamma_5+c(p^2)p\mkern-8.5mu/+d(p^2)\gamma_5 p\mkern-8.5mu/+\underbrace{e(p^2)\sigma^{\mu\nu}p_\mu p_{\nu}}_{=0,\;\text{for $\sigma^{\mu\nu}$ is antisymmetric}}
$$
另一方面，其具有宇称不变性，因此这个表达式也一定具有确定的宇称。我们知道，零阶下自由Dirac传播子为：（参见[Coleman QFT - Lecture 21. Dirac方程 III：量子化与Feynman规则](./Coleman%20QFT%20-%20Lecture%2021.%20Dirac%E6%96%B9%E7%A8%8B%20III%EF%BC%9A%E9%87%8F%E5%AD%90%E5%8C%96%E4%B8%8EFeynman%E8%A7%84%E5%88%99.md)）
$$
\tilde S'_F=\dfrac{i(p\mkern-8.5mu/+m)}{p^2-m^2+i\epsilon}\quad \Rightarrow c(p^2)\bigg|_0=\dfrac{i}{p^2-m^2+i\epsilon},\quad a(p^2)\bigg|_{0}=mc(p^2)\bigg|_0
$$
因此其具有偶宇称，故 $b(p^2)=d(p^2)=0$。这样就确定了传播子一定具有下面的形式：
$$
\tilde S'(p)=a(p^2)+c(p^2)p\mkern-8.5mu/
$$

## 23.3 Dirac传播子的谱表示

类似于[Coleman QFT - Lecture 15. 重整化 I：确定抵消项](./Coleman%20QFT%20-%20Lecture%2015.%20%E9%87%8D%E6%95%B4%E5%8C%96%20I%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%8A%B5%E6%B6%88%E9%A1%B9.md)中标量场的Kallen-Lehmann谱表示，Dirac传播子同样有类似的定理。我先将其谱表示的结果写在下面：
$$
\tilde S'(p\mkern-8.5mu/)=\dfrac{i}{p\mkern-8.5mu/-m+i\epsilon}+i\int_{(m+\mu)^2}^\infty\mathrm{d}a^2\,\sigma_+(a^2)\dfrac{p\mkern-8.5mu/+a}{p^2-a^2+i\epsilon}+i\int_{(m+\mu)^2}^\infty\mathrm{d}a^2\,\sigma_-(a^2)\dfrac{p\mkern-8.5mu/-a}{p^2-a^2+i\epsilon}
$$
其与标量场的不同之处在于插入的中间态除了粒子数与总动量外，还需指定**角动量与宇称**。但是，由于一个旋量场只能产生总角动量为 $1/2$ 的粒子态，因此只需额外指定宇称即可。首先，$\sigma_\pm$ 的定义为：
$$
\sigma_+(p^2)\theta(p^0)(p\mkern-8.5mu/+m)\equiv(2\pi)^3\sum_{n,J^P=1/2^+}\delta^{(4)}(p-p_n)\langle 0|\psi'(0)|n\rangle\langle n|\bar\psi'(0)|0\rangle
$$
$$
\sigma_-(p^2)\theta(p^0)(p\mkern-8.5mu/-m)\equiv(2\pi)^3\sum_{n,J^P=1/2^-}\delta^{(4)}(p-p_n)\langle 0|\psi'(0)|n\rangle\langle n|\bar\psi'(0)|0\rangle
$$
这里 $J^P$ 代表角动量 $J$ 与宇称 $P$。这样，类似于KL谱表示的推导步骤：
$$
\begin{align}
\langle 0|\psi(x)\bar\psi(y)|0\rangle&=\sum_r\int\dfrac{\mathrm{d}^3q}{(2\pi)^32E_q}\mathrm{e}^{-iq\cdot(x-y)}\langle 0|\psi'(0)|q,r\rangle\langle q,r|\bar\psi'(0)|0\rangle
+\sum_{|n\rangle}\mkern-6.5mm\int\;\,\mathrm{e}^{-iP_n\cdot(x-y)}\langle 0|\psi'(0)|n\rangle\langle n|\bar\psi'(0)|0\rangle\\
&=\sum_r\int\dfrac{\mathrm{d}^3q}{(2\pi)^32E_q}\mathrm{e}^{-iq\cdot(x-y)}u_\vec q^{(r)}\bar u_\vec q^{(r)}+\int\mathrm{d}^4p\,\mathrm{e}^{-ip\cdot(x-y)}\sum_{|n\rangle}\mkern-6.5mm\int\;\,\delta^{(4)}(p-P_n)\langle 0|\psi'(0)|n\rangle\langle n|\bar\psi'(0)|0\rangle\\
&=\int\dfrac{\mathrm{d}^3q}{(2\pi)^32E_q}\mathrm{e}^{-iq\cdot(x-y)}(q\mkern-8.5mu/+m)+\int\dfrac{\mathrm{d}^4p}{(2\pi)^3}\mathrm{e}^{-ip\cdot(x-y)}[\sigma_+(p^2)\theta(p^0)(p\mkern-8.5mu/+m)+\sigma_-(p^2)\theta(p^0)(p\mkern-8.5mu/-m)]\\
&=(i\partial\mkern-9mu/_x+m)\Delta_+(x-y)+\int_0^\infty\mathrm{d}a^2\,\left[\sigma_+(a^2)(i\partial\mkern-9mu/_x+a)\Delta_+(x-y,a^2)+\sigma_-(a^2)(i\partial\mkern-9mu/_x-a)\Delta_+(x-y,a^2)\right]
\end{align}
$$
加上时序积后换到动量空间，只需做替换
$$
\Delta_+(x-y,a^2)\theta(x-y)+\Delta_+(y-x,a^2)\theta(y-x)\to \dfrac{i}{p^2-a^2+i\epsilon},\quad i\partial\mkern-9mu/_x\to p\mkern-8.5mu/
$$
就得到了一开始的结果。
$$
\tilde S'(p\mkern-8.5mu/)=\dfrac{i}{p\mkern-8.5mu/-m+i\epsilon}+i\int_{(m+\mu)^2}^\infty\mathrm{d}a^2\,\sigma_+(a^2)\dfrac{p\mkern-8.5mu/+a}{p^2-a^2+i\epsilon}+i\int_{(m+\mu)^2}^\infty\mathrm{d}a^2\,\sigma_-(a^2)\dfrac{p\mkern-8.5mu/-a}{p^2-a^2+i\epsilon}
$$
从这个形式，我们能看出传播子视为单复变量 $z$ 的函数 $\tilde S'(z)$ 的解析性质：其在 $z=m$ 处为一阶极点，且有两条割线，即实轴上范围 $z\leq -(m+\mu)$ 与 $z\geq m+\mu$ 为割线。可以见下图：

<div align="center">
  <img src="./pictures/Pasted image 20260207231557.png" width="600">
</div>

## 23.4 核子的自能函数 $\tilde\Sigma'$

与介子类似的，定义有两条核子外线的1PI图：

<div align="center">
  <img src="./pictures/Pasted image 20260207231746.png" width="400">
</div>

$\tilde\Sigma'(p\mkern-8.5mu/)$ 即为**核子的自能函数**。Dirac传播子可以写为一串1PI图的等比求和，得到：
$$
\tilde S'(p\mkern-8.5mu/)=\dfrac{i}{p\mkern-8.5mu/-m-\tilde\Sigma'(p\mkern-8.5mu/)+i\epsilon}
$$
核子的重整化条件用自能函数表述为：
$$
\tilde\Sigma'(m)=0,\quad \dfrac{\mathrm{d}\tilde\Sigma'(p\mkern-8.5mu/)}{\mathrm{d}p\mkern-8.5mu/}\bigg|_{p\mkern-8.5mu/=m}=0
$$
作为例子，我们来计算到 $O(g^2)$ 的自能函数。Lagrangian中有关的项为：
$$
\mathcal L=\cdots-g\bar\psi'i\gamma_5\psi'\phi'+C\bar\psi'i\partial\mkern-9mu/\psi'-D\bar\psi'\psi'+\cdots
$$
$O(g^2)$ 对应的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260207232348.png" width="600">
</div>

对于导数项，我们简单做替换 $\partial\mkern-9mu/\to p\mkern-8.5mu/$ ，则
$$
-i\tilde \Sigma'(p\mkern-8.5mu/)=-i\Sigma^f(p\mkern-8.5mu/)+iC_2p\mkern-8.5mu/-iD_2
$$
$$
\tilde\Sigma'(p\mkern-8.5mu/)=\Sigma^f(p\mkern-8.5mu/)-\Sigma^f(m)-(p\mkern-8.5mu/-m)\dfrac{\mathrm{d}\Sigma^f}{\mathrm{d}p\mkern-8.5mu/}\bigg|_{p\mkern-8.5mu/=m}
$$
第一个图对应的表达式为：
$$
-i\Sigma^f(p\mkern-8.5mu/)=(-ig)^2\int\dfrac{\mathrm d^4k}{(2\pi)^4}\dfrac{i}{k^2-\mu^2+i\epsilon}i\gamma_5\dfrac{i(p\mkern-8.5mu/+k\mkern-8.5mu/+m)}{(p+k)^2-m^2+i\epsilon}i\gamma_5
$$
则
$$
\begin{align}
\Sigma^f(p\mkern-8.5mu/)&=-\dfrac{ig^2}{(2\pi)^4}\int\mathrm{d}^4k\dfrac{1}{k^2-\mu^2+i\epsilon}\dfrac{(-p\mkern-8.5mu/-k\mkern-8.5mu/+m)}{(p+k)^2-m^2+i\epsilon}
\\&=-\dfrac{ig^2}{(2\pi)^4}\int\mathrm{d}^4k\int_0^1\mathrm{d}x\,\dfrac{-p\mkern-8.5mu/-k\mkern-8.5mu/+m}{[k^2+2k\cdot px+p^2x-m^2x-\mu^2(1-x)+i\epsilon]^2}\\
&=-\dfrac{ig^2}{(2\pi)^4}\int\mathrm{d}^4k'\int_0^1\mathrm{d}x\,\dfrac{-p\mkern-8.5mu/(1-x)-k\mkern-8.5mu/'+m}{[k'^2+p^2x(1-x)-m^2x-\mu^2(1-x)+i\epsilon]^2}\\
&=-\dfrac{ig^2}{(2\pi)^4}\int\mathrm{d}^4k'\int_0^1\mathrm{d}x\,\dfrac{-p\mkern-8.5mu/(1-x)+m}{[k'^2+p^2x(1-x)-m^2x-\mu^2(1-x)+i\epsilon]^2}
\end{align}
$$
最终得到：
$$
\begin{align}
\tilde\Sigma'(p\mkern-8.5mu/)=-\dfrac{ig^2}{(2\pi)^4}\int\mathrm{d}^4k'\int_0^1\mathrm{d}x&\bigg\{\dfrac{-p\mkern-8.5mu/(1-x)+m}{[k'^2+p^2x(1-x)-m^2x-\mu^2(1-x)+i\epsilon]^2}-\dfrac{mx}{[k'^2-m^2x^2-\mu^2(1-x)+i\epsilon]^2}\\
&-(p\mkern-8.5mu/-m)\left[\dfrac{x-1}{[k'^2-m^2x^2-\mu^2(1-x)+i\epsilon]^2}+\dfrac{4m^2x^2(x-1)}{[k'^2-m^2x^2-\mu^2(1-x)+i\epsilon]^3}\right]\bigg\}
\end{align}
$$
括号内前两项在大 $k'$ 时表现为 $\int\mathrm{d}^4k'\frac{k'^4}{k'^8}\sim\int\frac{\mathrm{d}k'}{k'}$，因此仍是对数发散的，而第三项会将此发散抵消，至于最后一项，其渐近行为 $\sim\int{\mathrm{d}k'}/{k'^3}$ ，因此本身就是收敛的。
自能函数的收敛性还能由另一个角度来分析。重整化条件相当于固定了一个点处的 $\Sigma^f$ 的零阶导与一阶导，因此只需判断**二阶导**是不是收敛即可。由于每对 $p\mkern-8.5mu/$ 求一次导，分母上 $k$ 的次数就增加一。因此
$$
\Sigma^f(p\mkern-8.5mu/)\sim\int\mathrm{d}^4k\dfrac{1}{k^3},\qquad \dfrac{\mathrm{d}^2\Sigma^f}{\mathrm{d}p\mkern-8.5mu/^2}\sim\int\dfrac{\mathrm{d}^4k}{k^5}\quad \text{is convergent}
$$
另一方面，我们还能重新看看介子的自能函数。到 $O(g^2)$ 阶的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260208100100.png" width="600">
</div>

其形成了核子线的闭合圈。Feynman规则给出：
$$
\tilde\Pi^f(p^2)\sim\int\mathrm{d}^4k\,\mathrm{Tr}\left[i\gamma_5\dfrac{1}{p\mkern-8.5mu/+k\mkern-8.5mu/-m}i\gamma_5\dfrac{1}{k\mkern-8.5mu/-m}\right]\sim\int\dfrac{\mathrm{d}^4k}{k^2}\sim\int\mathrm{d}k\,k
$$
是二次发散的。但是我们仍然只用关注对 $p^2$ 的二阶导。每对 $p^2$ 求一次导，分母上 $k$ 的次数增加二。因此
$$
\dfrac{\mathrm{d}^2\tilde\Pi'(p^2)}{\mathrm{d}(p^2)^2}\sim\int\dfrac{\mathrm{d}k}{k^3}\quad\text{is convergent}
$$

## 23.5 重整化的耦合常数

最后，我们来处理耦合常数的重整化问题。其要考虑三点Green函数：

<div align="center">
  <img src="./pictures/Pasted image 20260208100834.png" width="500">
</div>

注意 $\tilde\varGamma'$ 是一个 $4\times 4$ 矩阵。在微扰下其给出：
$$
\tilde\varGamma'=i\gamma_5g+O(g^3)
$$
现在，我们遇到了一个问题。在[Coleman QFT - Lecture 16. 重整化 II：推广与延伸](./Coleman%20QFT%20-%20Lecture%2016.%20%E9%87%8D%E6%95%B4%E5%8C%96%20II%EF%BC%9A%E6%8E%A8%E5%B9%BF%E4%B8%8E%E5%BB%B6%E4%BC%B8.md)中，我们使用的重整化条件是 $\tilde\varGamma'$ 在质壳上取到精确值 $g$：
$$
\tilde \varGamma'(m^2,m^2,\mu^2)=g
$$
但现在我不能简单限制在某一个点处 $\tilde\varGamma'=i\gamma_5g$，因为这是16个方程，其往往是**超定的**。为了解决这个问题，引入投影算符作用于Green函数上：
$$
(p\mkern-8.5mu/'+m)\tilde\varGamma'(p',p,q)(p\mkern-8.5mu/+m)\bigg|_{p^2=p'^2=m^2}
$$
也就是先限制核子在质壳上。这实际上是在说我们关心的是 $\bar u'\tilde\varGamma' u$。我先写下一个关系：
$$
(p\mkern-8.5mu/'+m)\tilde\varGamma'(p',p,q)(p\mkern-8.5mu/+m)\bigg|_{p^2=p'^2=m^2}=(p\mkern-8.5mu/'+m)i\gamma_5(p\mkern-8.5mu/+m)G(q^2)
$$
其中 $G(q^2)$ 是一个标量函数。我将对此做一个简单解释：上面的Feynman图可能代表不同的过程，比如 $^{out}\langle\bar N,N|\phi(0)|0\rangle,\langle N|\phi(0)|N\rangle$ 等，其可以通过解析延拓相联系，我们只需考虑一种即可。以前者为例，由于 $\phi(0)$ 是宇称奇的，且是Lorentz不变的，则核子-反核子态只有一种可能：
$$
J=0,L=0,S=0,P=-1
$$
因此只有一个不变的振幅，其完全由控制 $\phi(0)$ 的 $q^2$ 决定，因此可用一个标量函数 $G(q^2)$ 描述。这样，我们就可以安全的取重整化条件为：
$$
G(\mu^2)=G(q^2)\bigg|_{q^2=\mu^2}=g
$$
这也可以视为**物理耦合常数** $g$ 的定义。

---
