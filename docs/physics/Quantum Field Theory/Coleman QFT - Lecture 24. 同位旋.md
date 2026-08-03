---
title: "Coleman QFT Lecture 24: 同位旋"
---

这一章会涉及到更多的与实验事实有关的内容。会更多的进行根据一些线索的推测，而不是严格的数学证明。
## 24.1 场论对耦合常数的限制

同位旋理论的形成始于对核能级的研究。以轻核为例，它们虽然含有相同数量的核子，但电荷数不同，比如硼-12（5个质子和7个中子）、碳-12（各6个）和氮-12（7个质子和5个中子），具有相同核子数但电荷不同的原子核称为**镜像核**或**同量异位素(isobars)**。但其核能级是相近的。这说明两个质子之间的核力与两个中子之间的核力大致相当，这种核力与核子的具体类型无关。
当然，能级之间存在细微差异，但这些差异至少可通过库仑修正进行定性解释。另一方面，质子与中子的质量也存在微小差异。这促使我们做出一个猜想，即这个质量差异正是来源于**电磁作用**。
从场论中我们知道核子间的（长程）作用来源于交换 $\pi$ 介子。我将沿用先前的思路，假设在电磁作用不存在的情况下，所有 $\pi$ 介子的质量相同（实际上 $\pi$ 介子质量之间存在4或5 MeV的差异）。现在来构建一个包含两种核子（质子和中子）以及三种介子（$\pi^+,\pi^-,\pi^0$ ）的理论。质子场 $p$ 与中子场 $n$ 是Dirac场，而 $\pi$ 介子场 $\phi_+,\phi_0,\phi_-$ 为三个标量场（两个带电一个不带电），由实验得知 $\pi$ 介子是赝标量粒子，因此其需要 $\gamma_5$ 相互作用：
$$
\mathcal L'=g_P \bar pi\gamma_5p\phi_0+g_N\bar ni\gamma_5n\phi_0+g_C\bar pi\gamma_5 n\phi_++g_C^*\bar n i\gamma_5p\phi_-+\cdots
$$
上式为最一般的满足**Lorentz不变性、宇称不变以及电荷守恒**的相互作用形式，其中 $\cdots$ 指可能出现的抵消项。通过选取合适的相位，可以使 $g_C,g_P$ 是正实数。
通过核子-介子散射实验，测得这个相互作用是很强的，数据为：
$$
\dfrac{g^2}{4\pi}\sim14.7
$$
这说明微扰法是失效的。另一方面，我们有一个与微扰理论无关的结果： $\pi$ 介子传播子中的极点位于 $\pi$ 介子的物理质量处。这是重整化条件之一，且在微扰理论的所有阶数上都成立。由于假设作用力对核子类型无关，因此下面的过程应当具有相同的散射振幅：
$$
\mathcal A(pp\to pp)=\mathcal A(nn\to nn)=\mathcal A(pn\to pn)\quad\text{in an antisymmetric state}
$$
由重整化理论，极点邻域内的最低阶图因我们的重整化条件而不会受到修正，因此可以将上式在极点附近保留到 $O(g^2)$ 阶。
在[Coleman QFT - Lecture 21. Dirac方程 III：量子化与Feynman规则](./Coleman%20QFT%20-%20Lecture%2021.%20Dirac%E6%96%B9%E7%A8%8B%20III%EF%BC%9A%E9%87%8F%E5%AD%90%E5%8C%96%E4%B8%8EFeynman%E8%A7%84%E5%88%99.md)中介绍了其相关的Feynman规则，对于 $pp\to pp$ 散射，其对应的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260210204540.png" width="600">
</div>

对应的表达式为：
$$
\mathcal A(pp\to pp)=g_P^2[f(1',2';1,2)-f(1',2';2,1)],\quad f(1',2';1,2)=[\bar u_1'i\gamma_5 u_1]\dfrac{i}{(p_1'-p_1)^2-\mu^2+i\epsilon}[\bar u_2'i\gamma_5 u_2]
$$
当然，$nn\to nn$ 散射是类似的，其将上面的 $g_P$ 换成 $g_n$ 即可。对于 $pn\to pn$ 散射，设质子用 $1,1'$ 标记，中子用 $2,2'$ 标记，有两个Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20260210205041.png" width="600">
</div>

对应到表达式：
$$
\mathcal A(pn\to pn)=g_Pg_Nf(1',2';1,2)-g_C^2f(1',2';2,1)
$$
前面提到，我们要构造反对称态，即
$$
|i\rangle=\dfrac{1}{\sqrt 2}(|1,2\rangle-|2,1\rangle),\quad |f\rangle=\dfrac{1}{\sqrt 2}(|1',2'\rangle-|2',1'\rangle)
$$
因此有四个散射振幅。其中 $\langle 2',1'|S|2,1\rangle$ 和原来相同，即 $\mathcal A_D=\mathcal A$，而只交换一次的振幅变为：
$$
\mathcal A_E=g_Pg_Nf(1',2';2,1)-g_C^2 f(1',2';1,2)
$$
因此
$$
\mathcal A_{fi}=\mathcal A_D-\mathcal A_E=(g_Pg_N+g_C^2)(f(1',2';1,2)-f(1',2';2,1))
$$
现在，对比这三个过程的散射振幅，可以去掉公共部分 $f(1',2';1,2)-f(1',2';2,1)$，因此
$$
g_P^2=g_N^2=g_Pg_N+g_C^2
$$
第一个等号给出两种可能：
$$
\text{Possibility A}:g_P=g_N\Rightarrow g_C=0,\qquad \text{Possibility B}:g_P=-g_N\Rightarrow g_C=\sqrt 2g_P
$$
前一种被否决掉，因为实验证明了质子与中子可通过带电pion耦合。因此只能相信第二个可能。定义一个耦合常数为：
$$
g\equiv g_P=-g_N=\dfrac{g_C}{\sqrt 2}
$$
则相互作用写为：
$$
\mathcal L'=g[\phi_0(\bar pi\gamma_5p-\bar ni\gamma_5 n)+\sqrt 2\phi_+\bar pi\gamma_5 n+\sqrt 2\phi_-\bar ni\gamma_5p]
$$

## 24.2 核子与介子作为同位旋的分量

现在，上面的Lagrangian具有一个特别的对称性。首先，我们将带电标量场拆成：
$$
\phi_\pm=\dfrac{1}{\sqrt 2}(\phi_1\pm i\phi_2)
$$
这正是一开始引入“带电”时采用的原始形式，守恒荷对应于 $(\phi_1,\phi_2)\to (\phi_1,-\phi_2)$ 的反射对称性。同时令 $\phi_3\equiv \phi_0$，则
$$
\mathcal L'=g[\phi_3(\bar pi\gamma_5p-\bar ni\gamma_5n)+\phi_1(\bar pi\gamma_5 n+\bar ni\gamma_5p)-i\phi_2(\bar pi\gamma_5 n-\bar ni\gamma_5p)]
$$
现在，定义一个新的列**矢量** $\vec\Phi$：
$$
\vec\Phi=\begin{pmatrix}
\phi_1\\\phi_2\\
\phi_3
\end{pmatrix}
$$
以及一个八个分量的核子**旋量** $N$：
$$
N=\begin{pmatrix}
p\\n
\end{pmatrix}
$$
这样，自由Lagrangian可以写为：
$$
\mathcal L_{\text{free}}=\dfrac12\partial^\mu\vec\Phi\cdot \partial_\mu\vec\Phi-\dfrac12\mu^2\vec\Phi\cdot\vec\Phi+\bar N(i\partial\mkern-9mu/-m)N
$$
注意这里的点乘是对 $\vec\Phi$ 的分量而言的。相互作用现在可以写为非常简单的形式：
$$
\mathcal L'=g\,\vec \Phi\cdot\bar Ni\gamma_5\vec\tau N 
$$
这里 $\vec\tau=\vec\sigma\otimes\mathbb 1_{4\times 4}$。这个其实和最开始的核子-介子耦合 $g\phi\bar \psi i\gamma_5 \psi$ 很像，但现在多加了一个Pauli矩阵类似物 $\vec\tau$ 来与介子列矢量 $\vec\Phi$ 做点乘。此时，这个Lagrangian存在一个额外的 $SO(3)$ 对称性（或者更准确地说，$SU(2)$ 对称性），如果我们将 $\vec \Phi$ 与 $N$ 视为这个 $SU(2)$ 对称性群下的矢量与旋量：
$$
\vec \Phi(x)\to R(\hat e\theta)\vec \Phi(x),\quad N(x)\to \mathrm{e}^{-\frac12i\hat e\cdot\vec\tau\theta}N(x)
$$
这个**内部**对称性作用的空间称为**同位旋空间(isospace)**。注意，不要将其与Lorentz群的 $SO(3)$ 子群相混淆，后者是一个时空变换，其在变换场时还会顺带变换场坐标。而同位旋对称性是一个**内部**对称性，对时空坐标 $x$ 不起任何作用。三重态 $\vec\Phi$ 称为同位旋矢量(isovector)，而二重态 $N$ 称为同位旋旋量(isospinor)。
由于 $SU(2)$ 是一个三个连续参数刻画的Lie群，因此其将会对应到三个守恒的同位旋流 $\{J_i^\mu\}$。由于 $\mathcal L$ 在变换下不变（而不仅是协变），因此 $j^\mu_i=\pi_{ia}^\mu\delta\phi^a$，同时相互作用项 $\mathcal L'$ 不含场的时间导数，因此对守恒流无贡献。自由部分给出：
$$
\vec J^\mu=(\vec\Phi\times\partial^\mu\vec\Phi)+\dfrac12\bar N\gamma^\mu\vec \tau N
$$
这里要小心一点，仔细处理好指标运算与矢量运算之间的关系。守恒流的时间分量对空间积分就是守恒荷：
$$
I_i=\int\mathrm{d}^3\vec x\,J^0_i(\vec x,t),\quad\partial_0 I_i=0
$$
$I_i$ 间遵循 $SO(3)$ 的Lie代数：
$$
[I_i,I_j]=i\epsilon_{ijk}I_k
$$
>[!tip]
>这里补上前面[Coleman QFT - Lecture 5. 对称性与守恒律 I：时空对称性](./Coleman%20QFT%20-%20Lecture%205.%20%E5%AF%B9%E7%A7%B0%E6%80%A7%E4%B8%8E%E5%AE%88%E6%81%92%E5%BE%8B%20I%EF%BC%9A%E6%97%B6%E7%A9%BA%E5%AF%B9%E7%A7%B0%E6%80%A7.md)中没有讲到的一个点，就是守恒荷为什么是生成元。考虑一个Lagrangian不变的对称性变换，则
>$$j^\mu=\pi^\mu_a\delta\phi^a,\quad I=\int\mathrm{d}^3\vec x\,\pi_a\delta\phi^a$$
>则
>$$[\phi^a(x),I]=\int\mathrm{d}^3\vec y\,[\phi_a(x),\pi_b(x^0,\vec y)]\delta\phi^b(x^0,\vec y)=\int\mathrm{d}^3\vec y\,i\delta_{ab}\delta^{(3)}(\vec x-\vec y)\delta\phi^b(x^0,\vec y)=i\delta\phi^a(x)$$
>这正是无穷小变换下的表达式：
>$$\phi^a(x)\to \mathrm{e}^{iQ\lambda}\phi^a(x)\mathrm{e}^{-iQ\lambda}\Rightarrow \delta\phi^a(x)=-i[\phi^a,Q]$$
>因此守恒荷 $I$ 就是对称变换的生成元 $Q$。

因此，在这个同位旋对称性群下，核子态构成 $I=1$ 的表示空间，而介子态构成 $I=1/2$ 的表示空间。一开始的质子与中子，以及三种介子就是 $I_3$ 的本征态，即
$$
I=\dfrac12:\begin{cases}
\,p:\; I_3=\dfrac12\\
\,n:\;I_3=-\dfrac12
\end{cases},\qquad I=1:\begin{cases}
\,\pi^+:\; I_3=1\\
\,\pi^0:\;I_3=0\\
\,\pi^-:\;I_3=-1
\end{cases}
$$
真空态则是 $I=0$ 的同位旋标量。

## 24.3 同位旋守恒的一些实验结果

我们来考虑介子-核子散射。由于有三种介子与两种核子，因此初态和末态都各有六种可能，因此一共有36种散射。但是，其中很多被电荷守恒所禁止。唯一 $q=2$ 的态是 $\pi^+p$ ，因此其只能发生弹性散射（即 $\pi^+p\to \pi^+p$ ）。两个态有 $q=1$：$\pi^0p$ 与 $\pi^+n$。因此可以发生四种散射，其中两种是弹性散射：$\pi^+n\to \pi^+n,\,\pi^0p\to \pi^0p$。以及两个非弹性散射：$\pi^+n\to \pi^0p,\,\pi^0p\to \pi^+n$。同样的，两个态（ $\pi^0n,\pi^-p$ ）有 $q=0$ ，可以发生四种散射。以及最后唯一的态 $\pi^-n$ 有 $q=-1$ ，只能发生弹性散射 $\pi^-n\to \pi^-n$。列表如下

<div align="center">
  <img src="./pictures/Pasted image 20260211102034.png" width="500">
</div>

现在，我们来做同位旋分析。核子-介子具有的同位旋是 $I_\pi=1$ 与 $I_N=1/2$ 的张量积，可以分解为直和：
$$
1\otimes \dfrac12=\dfrac32\oplus\dfrac12
$$
因此，在承认同位旋对称性下，独立的散射振幅只有两个，即 $\mathcal A_{3/2}$ 与 $\mathcal A_{1/2}$ （散射矩阵在同位旋空间中是一个标量）。表中的所有散射过程的散射振幅可写为 $\mathcal A_{3/2}$ 与 $\mathcal A_{1/2}$ 的线性组合。
来考虑一些实验事实。对于散射过程 $\pi^+p\to \pi^+p$，其总散射截面作为质心系中能量的函数，在 $1232\,\mathrm{MeV}$ 处存在一个宽度大约 $100\,\mathrm{MeV}$ 的共振峰，这个共振点记为 $\Delta^{++}$。同时，这个散射过程的振幅就是 $\mathcal A_{3/2}$。根据光学定理：
$$
\sigma(\pi^+p)\propto\mathrm{Im}\,\mathcal A(\pi^+p\to \pi^+p)\propto \mathrm{Im}\,\mathcal A_{3/2}
$$
现在，再考虑散射过程 $\pi^-p\to \pi^-p$。这个态可以做CG分解为：
$$
|\pi^-p\rangle=\sqrt{\dfrac13}\bigg|I=\dfrac32,I_3=-\dfrac12\bigg\rangle-\sqrt{\dfrac23}\bigg|I=\dfrac12,I_3=-\dfrac12\bigg\rangle
$$
因此
$$
\mathcal A(\pi^-p\to \pi^-p)=\dfrac13\mathcal A_{3/2}+\dfrac23\mathcal A_{1/2}
$$
另一方面，在 $1232\,\mathrm{MeV}$ 处我们可以认为 $\mathcal A_{3/2}$ 远大于 $\mathcal A_{1/2}$。因此，可以近似得到：
$$
\sigma(\pi^-p)\propto\dfrac13\mathrm{Im}\,\mathcal A_{3/2}+(\text{small})\approx \dfrac13\sigma(\pi^+p)
$$
这一点已经从实验上证实。如下图所示，$\pi^-p\to \pi^-p$ 的总截面的确在 $\Delta^{++}$ 处有一个约为 $\sigma(\pi^+p)$ 高度三分之一的峰。

<div align="center">
  <img src="./pictures/Pasted image 20260211103545.png" width="600">
</div>

同位旋对称性可以加进多粒子态的交换对称性中。比如对于全同玻色系统，其空间部分、自旋部分与同位旋部分的总和需在交换下全对称，全同费米体系则需全反对称。这称为**广义Pauli原理**。例如，考虑过程：
$$
X\to 2\pi
$$
$\pi$ 介子无自旋。当 $X$ 的总角动量 $J$ 为偶时，由角动量守恒，$2\pi$ 系统具有偶的空间角动量 $L$。因此其空间部分是交换对称的，因此其同位旋也是偶的，即 $I=\{0,2\}$。而若 $J$ 为奇数时，同位旋就只能为 $I=1$。因此，对于角动量1而同位旋为0的 $\omega$ 介子，其无法发生衰变为两个 $\pi$ 介子的过程。但实际上是有微弱概率发生的，因为同位旋并不是严格的对称性，其在电磁作用与弱作用下被破坏。

## 24.4 超荷与G宇称

我们知道两个普遍的内部对称性对应的守恒荷，一个是熟悉的电荷 $Q$，另一个称为**强子数(baryon number)** $B$。强子数与同位旋对易：
$$
[B,\vec I]=0
$$
但电荷并不对易，不同的介子/核子属于同一同位旋 $I$，但携带不同的电荷 $Q$。可以发现，$I_3$ 的本征态也对应了电荷的本征态，且 $I_3$ 每增加1，电荷也增加1。写成数学语言就是：
$$
[Q,I_3]=0,\quad [Q,I_\pm]=\pm I_{\pm}
$$
这启发我们定义下面的物理对象：
$$
Y\equiv 2(Q-I_3)
$$
乘上一个2是为了让 $Y$ 是整数。$Y$ 称为**超荷(hypercharge)**。这样，同一同位旋 $I$ 中的粒子携带相同的超荷 $Y$，因此
$$
[Y,I_i]=0
$$
我们可以通过取同位旋下的平均，这会导致 $\langle I_3\rangle=0$，因此
$$
\langle Y\rangle=2\langle Q\rangle
$$
即某一个 $I$ 下的超荷 $Y$，就等于具有 $I$ 的粒子的电荷平均值的两倍。故介子的 $Y=0$，而核子的 $Y=1$。现在，我们有五个守恒荷，即 $I_i,Y,B$。其满足
$$
[I_i,I_j]=i\epsilon_{ijk}I_k,\quad [B,Y]=[B,I_i]=[Y,I_i]=0
$$
现在来讨论电荷共轭。从核子系统出发，其同位旋守恒流为：
$$
\vec J^\mu=\dfrac12\bar N\gamma^\mu\vec\tau N
$$
在电荷共轭下，二次型的变换关系为：
$$
C:\bar\psi_A\gamma^\mu\psi_B\to -\bar\psi_B\gamma^\mu\psi_A
$$
因此在电荷共轭下
$$
J_3^\mu=\dfrac{1}{2}(\bar p\gamma^\mu p-\bar n\gamma^\mu n)\to -J_3^\mu,\quad J_1^\mu=\dfrac12(\bar p\gamma^\mu n+\bar n\gamma^\mu p)\to -J_1^\mu,\quad J_2^\mu=\dfrac12i(\bar p\gamma^\mu n-\bar n\gamma^\mu p)\to J_2^\mu
$$
只有 $J_2^\mu$ 是不变的。故
$$
U_C^\dagger\begin{Bmatrix}I_1\\I_2\\I_3\end{Bmatrix} U_C=\begin{Bmatrix}-I_1\\I_2\\-I_3\end{Bmatrix}
$$
这一点的解释来源于Pauli矩阵中只有 $\tau_2$ 是纯虚的，导致了电荷共轭对同位旋空间中三个方向的作用不平等。因此，常见的作法是定义一个新的算符 $G$，称为 $G$ 宇称（但其和宇称没有任何关系）：
$$
U_G\equiv U_C\,\mathrm{e}^{-i\pi I_2}
$$
即绕着 $I_2$ 轴转 $180^\circ$，可以将 $I_1,I_3$ 重新变成不变的状态。因此，在 $G$ 宇称的作用下 $I_i$ 不变，因此
$$
[G,I_i]=0
$$
$G$ 具有电荷共轭的作用，即将粒子与反粒子交换。由于 $\pi^0$ 与 $\bar p i\gamma_5 p$ 耦合，而后者是在电荷共轭下不变的二次型，因此 $\pi^0$ 在电荷共轭下也是偶的。但是绕 $I_2$ 轴转 $180^\circ$ 会使得 $\pi^0$ （本质是同位旋空间中沿 $I_3$ 轴的矢量）加一个负号。因此在 $G$ 作用下 $\pi^0\to -\pi^0$。同时由于 $[G,I_i]=0$，因此其对 $\pi^\pm$ 的作用与 $\pi^0$ 是相同的。也就是说：
$$
G:\vec\Phi\to U_G^\dagger\vec\Phi U_G=-\vec \Phi
$$
因此 $\pi$ 介子在 $G$ 下是奇的。因此，下面的过程
$$
2\pi\to 3\pi
$$
由于违反了 $G$ 对称性而被禁止，即使其没有违反电荷、强子数、宇称等任何其他的守恒律，它也是不可能发生的。

---

