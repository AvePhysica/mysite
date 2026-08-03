---
title: "Coleman QFT Lecture 31: Faddeev-Popov程序"
---

紧接上一篇文章[Coleman QFT - Lecture 30. 有质量光子的电动力学](./Coleman%20QFT%20-%20Lecture%2030.%20%E6%9C%89%E8%B4%A8%E9%87%8F%E5%85%89%E5%AD%90%E7%9A%84%E7%94%B5%E5%8A%A8%E5%8A%9B%E5%AD%A6.md)，来处理无质量光子电动力学中泛函积分方法出现发散的问题。

## 31.1 有限维方法

一个规范不变场的有限维情形可以描述为，我们有一个 $n+m$ 个自变量的多元函数：
$$
F(z_1,\cdots,z_{n+m})\quad (z_i\in\mathbb R) 
$$
记 $x_r=\{z_1,\cdots,z_n\},\quad y_s=\{z_{n+1},\cdots,z_{n+m}\}$。若 $F$ 实际上只取决于前 $n$ 个变量，也就是 $x_r$：
$$
F(z_1,\cdots,z_{n+m})= F(x_r)\quad\text{or}\quad \dfrac{\partial F}{\partial y_s}=0
$$
则 $y_s$ 就可以理解为那些规范带来的冗余自由度。现在，如果我们对所有 $z$ 积分，其当然会发散。因此我们只对 $x_r$ 积分，并假设其为收敛的：
$$
I=\int\prod_{a=1}^n\mathrm{d}x_a\,F(x)
$$
我可以取 $y_s$ 为任何值，反正不影响上面的结果。假设积分是沿某个面 $y_b=f_b(x)$ 进行的，则上式可以写为：
$$
I=\int\prod_{a=1}^{n+m}\mathrm{d}z_a\,F(z)\prod_{b=1}^m\delta(y_b-f_b(x))
$$
当然，积分面也可以取为隐函数形式，如
$$
G_b(z_1,\cdots,z_{n+m})=0,\quad b=1,2,\cdots,m
$$
当然要求其Jacobi不为零，即非退化。此时
$$
I=\int\prod_{a=1}^{n+m}\mathrm{d}z_a\,F(z)\prod_{b=1}^m\delta(G_b)\Delta,\quad \Delta\equiv\det\left(\dfrac{\partial G_b}{\partial y_c}\right)
$$
这些过程能给我们接下来做的事一些启发。

## 31.2 推广至规范场论

接下来，我们回到QED的规范问题上。规范变化可以写为：
$$
\begin{align}
&A_\mu\to A_\mu'=A_\mu+\partial_\mu\chi\\
&\psi\to \psi'=\mathrm{e}^{-ie\chi}\psi\\
&\bar\psi\to\bar\psi'=\mathrm{e}^{ie\chi}\bar\psi
\end{align}
$$
我们将所有涉及到的场都打包进一个总场 $\Phi$ 中
$$
\Phi=(A_\mu,\psi,\bar\psi,\cdots)
$$
作用量在规范变换下不变：
$$
S[\Phi]\to S[\Phi']=S[\Phi]
$$
Faddeev-Popov方法说，我们应当先选取一个规范，**规范**就是一些条件 $G(\Phi)=0$，其为前面 $G_b(z_i)=0$ 的类比。。其消除了规范变换的冗余自由度。不同的规范相当于选择不同的积分面，但其结果应当是一致的。

<div align="center">
  <img src="./pictures/Pasted image 20260423204921.png" width="400">
</div>

Faddeev-Popov程序正是如此，其陈述如下：
$$
Z=N\int(\mathrm{d}\Phi)\mathrm{e}^{iS[\Phi]}\delta[G(\Phi)]\Delta,\quad \Delta=\det\left(\dfrac{\delta G}{\delta\chi}\right)
$$
一些remark：
- 首先，$Z$ 应当是规范不变的，也就是说 $Z$ 不应当依赖于 $G$ 的选取。
- 要求 $S$ 中源仅与规范不变量耦合，如 $F_{\mu\nu},\,\bar\psi\psi,\,\bar\psi\gamma^\mu\psi$ 等。
- Faddeev-Popov方法仅是用于消除规范冗余自由度带来的发散，其对圈图等发散无能为力。因此我们仍需使用正规化与重整化处理。这将在后面进行讨论，关键在于截断方法必须保持规范不变性。
- 最后，泛函积分的证明必须依赖于正则量子化。泛函积分的优势在于其能很方便的切换积分变量。

现在来考虑Jacobi行列式。例如，对于Lorenz规范：
$$
G(A^\mu)=\partial_\mu A^\mu,\quad \delta G=\square^2\chi\Rightarrow \dfrac{\delta G}{\delta \chi}=\square^2
$$
这样写看上去很不严谨啊。算符 $\square^2$ 的行列式是个什么东西？我们马上会提到，但你先只需知道其和积分变量没关系就行了，我们可以将其吸收进常数 $N$ 中。所以它暂时是不重要的。

## 31.3 应用至QED

我们可以引入ghost场来理解这个行列式：
$$
\det(\square^2)=\int(\mathrm{d}\eta)(\mathrm{d}\bar\eta)\,\mathrm{e}^{iS_{FP}},\quad S_{FP}=\int\mathrm{d}^4x\,(\bar\eta\,\square^2\eta)=-\int\mathrm{d}^4x\,(\partial^\mu\bar\eta)(\partial_\mu\eta)
$$
这相对于 $\Phi$ 是个常数，此时称ghosts是**解耦的**。其可被吸收进 $N$ 中。

在开始正式计算前，我先稍微修改一下规范条件，将Lorenz规范修改为：
$$
\partial_\mu A^\mu=f(x)
$$
$f$ 是时空上的任意函数。则
$$
Z=N\int(\mathrm{d}\Phi)\,\mathrm{e}^{iS}\delta[\partial_\mu A^\mu-f]
$$
由于上式与 $f$ 无关，我们还能更进一步，引入一个 $f$ 的泛函 $F[f]$，并且对 $f$ 积分。这相当于设置了一个权函数 $F[f]$，其积分只会产生一个常数。因此
$$
Z=N'\int(\mathrm{d}\Phi)(\mathrm{d}f)\,\mathrm{e}^{iS}\delta[\partial_\mu A^\mu-f]F[f]=N'\int(\mathrm{d}\Phi)\,\mathrm{e}^{iS}F[\partial_\mu A^\mu]
$$
也就是说，这相当于给原来的式子乘上一个任意的 $\partial_\mu A^\mu$ 的权函数。接下来，我们取一个特别的权函数：
$$
F[f]=\exp\left\{-\dfrac{i}{2\xi}\int\mathrm{d}^4x\,f^2\right\}
$$
现在我可以写：
$$
Z=N'\int(\mathrm{d}\Phi)\,\mathrm{e}^{iS_{eff}},\quad S_{eff}=\int\mathrm{d}^4x\,\mathcal L_{eff}
$$
$$
\mathcal L_{eff}=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)^2+\bar \psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi-\underbrace{\dfrac{1}{2\xi}(\partial_\mu A^\mu)^2}_{\text{gauge-fixing term}}
$$
最后一项称为**固定规范项**，其不是规范不变的。利用这个表达式，其通过分部积分可以得到：
$$
\mathcal L_{eff}\simeq \dfrac12 A_\mu\left[g^{\mu\nu}\square^2-\left(1-\dfrac{1}{\xi}\right)\partial^\mu\partial^\nu\right]A_\nu+\bar\psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi
$$
现在我们可以读出传播子，其为二次项积分核的逆：
$$
\tilde D^{\mu\nu}_\xi(k)=\dfrac{i}{k^2+i\epsilon}\left[-g^{\mu\nu}+\dfrac{k^\mu k^\nu}{k^2}\right]-\dfrac{i\xi}{k^2+i\epsilon}\dfrac{k^\mu k^\nu}{k^2}
$$
可以看到，原先没有gauge-fixing项时对应于 $\xi\to \infty$，因此纵向极化项传播子发散。上面的传播子实际上依赖于 $\xi$，称为一族**协变规范**(covariant gauge)。因此，我们知道了QED中光子传播子实际上不是唯一的，而是有很多种选择。但其不会影响可观测量。常见的选择有两种：
- **Feynman gauge**：$\xi=1$，有
$$
\tilde D^{\mu\nu}_F(k)=-\dfrac{ig^{\mu\nu}}{k^2+i\epsilon}
$$
- **Landau gauge**：$\xi\to 0$，有
$$
\tilde D^{\mu\nu}_L(k)=\dfrac{i}{k^2+i\epsilon}\left[-g^{\mu\nu}+\dfrac{k^\mu k^\nu}{k^2}\right]
$$
还有一些别的选择，如 $\xi=3$ 的**Yennie-Fried gauge**：
$$
\tilde D^{\mu\nu}_Y(k)=\dfrac{i}{k^2+i\epsilon}\left[-g^{\mu\nu}-2\dfrac{k^\mu k^\nu}{k^2}\right]
$$
其**红外性质**比较良好。

## 31.4 Faddeev-Popov方法与正则量子化的等价性

前面已经展示所有的规范都是等价的。现在我将说明轴向规范下($A_3=0$)FP流程与正则量子化是等价的。从一阶 $\mathcal L_{1st}$ 出发：
$$
\mathcal L_{1st}=\dfrac14 F_{\mu\nu}F^{\mu\nu}-\dfrac12 F_{\mu\nu}(\partial^\mu A^\nu-\partial^\nu A^\mu)+\bar\psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi
$$
在轴向规范下，$A_3$ 是约束变量，因此真正的正则场变量是 $A_1,A_2,\psi$，共轭动量为 $F_{10},F_{20},\bar\psi$。以下的拉丁字母 $i,j=1,2$。有
$$
\begin{align}
\mathcal L_{1st}&=\dfrac14 F_{ij}F^{ij}-\dfrac12 F_{ij}(\partial^iA^j-\partial^j A^i)+\dfrac12 F_{i3} F^{i3}+F_{i3}(\partial^3A^i)\\&+\dfrac12 F_{i0}F^{i0}-F_{i0}(\partial^i A^0-\partial^0 A^i)+\dfrac12 F_{03}F^{03}+F_{03}(\partial^3 A^0)+\bar\psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi
\end{align}
$$
其中 $F_{ij},F_{i3},F_{03},A_0$ 都是约束变量。其被场变量与共轭动量决定：
$$
F_{ij}=\partial_i A_j-\partial_j A_i,\quad F_{i3}=-\partial_3 A_i
$$
$$
\partial_\mu F^{\mu\nu}=\partial_1 F^{10}+\partial_2F^{20}+\partial_3 F^{30}=e\bar\psi\gamma^0\psi
$$
确定 $F^{30}$，最后
$$
F^{30}=\partial^3 A^0
$$
确定 $A_0$。因此，正则量子化就是：
$$
Z=N\int(\mathrm{d}A_1)(\mathrm{d}A_2)(\mathrm{d}F_{01})(\mathrm{d}F_{20})(\mathrm{d}\psi)(\mathrm{d}\bar\psi)\exp(iS_{\mathcal H})
$$
通过 $S_{1st}$，其可以化为：
$$
\begin{align}
Z&=N'\int\prod_{\mu\nu}(\mathrm{d}F_{\mu\nu})(\mathrm{d}A_0)(\mathrm{d}A_1)(\mathrm{d}A_2)(\mathrm{d}\psi)(\mathrm{d}\bar\psi)\exp(iS_{1st})\\
&=N''\int(\mathrm{d}A_0)(\mathrm{d}A_1)(\mathrm{d}A_2)(\mathrm{d}\psi)(\mathrm{d}\bar\psi)\exp(iS_{2nd})\\
&=N''\int\prod_\mu(\mathrm{d}A_\mu)(\mathrm{d}\psi)(\mathrm{d}\bar\psi)\delta(A_3)\exp(iS_{2nd})
\end{align}
$$
这正是轴向规范下的FP表达式。因此其与正则量子化是等价。故我们证明了FP程序的正确性。
现在，我们已经可以写出QED的Feynman规则（采用**Feynman规范**）：

<div align="center">
  <img src="./pictures/Pasted image 20260424143939.png" width="600">
</div>

## 31.5 回顾有质量介子理论

我们来回答最后一个问题，有质量矢量场理论中，传播子中的项 $k_\mu k_\nu/\mu^2$ 会在无质量极限下发散，如何合理的解释这一点？考虑一个仅与Fermi场耦合的矢量场，我们往Lagrangian中加入一个自由标量场（这个方法称为**Stuckelberg mechanism**）：
$$
\mathcal L=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)^2+\dfrac12\mu^2A_\mu A^\mu+\bar\psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi+\dfrac12 a(\partial_\mu\psi)^2-\dfrac12b\phi^2
$$
由于 $\phi$ 不与场耦合，因此其不会影响物理。现在，我们做一个变换：
$$
\psi=\psi'\,\mathrm{e}^{ie\phi},\quad \partial_\mu\psi=\mathrm{e}^{ie\phi}(\partial_\mu\psi'+ie\psi'\partial_\mu\phi)
$$
现在
$$
\mathcal L=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)^2+\dfrac12\mu^2A_\mu A^\mu+\bar\psi'(i\partial\mkern-9mu/-m-eA\mkern-9mu/-e\partial\mkern-9mu/\phi)\psi'+\dfrac12 a(\partial_\mu\psi)^2-\dfrac12b\phi^2
$$
这样，我们引入了一个“虚幻”的 $\psi,\phi$ 间的耦合。现在考虑复合场 $A_\mu+\partial_\mu \phi$ 的传播子：
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\quad\quad\;}}\mkern-3mu\normalsize |}{(A_\mu+\partial_\mu \phi)(A_\mu+\partial_\mu \phi)}=\overset {|\Large \mkern-3mu{}^{\overline{\quad}}\mkern-3mu\normalsize |}{A_\mu A_\nu}+\partial_\mu\overset {|\Large \mkern-3mu{}^{\overline{\quad\;}}\mkern-3mu\normalsize |}{\phi\,\partial_\nu\phi}=i\left[\dfrac{-g_{\mu\nu}+(k_\mu k_\nu/k^2)}{k^2-\mu^2+i\epsilon}+\dfrac{k_\mu k_\nu}{ak^2-b+i\epsilon}\right]
$$
$a,b$ 的选择不会影响最终的 $S$ 矩阵。比如，我们取
$$
a=-\mu^2,\quad b=-\mu^4
$$
此时就会得到Feynman规范的传播子：
$$
\tilde D^{\mu\nu}_F(k)=-\dfrac{ig^{\mu\nu}}{k^2+i\epsilon}
$$
更一般的，取
$$
a=-\mu^2,\quad b=-\xi\mu^4
$$
就能生成FP方法下的一族协变传播子：
$$
\tilde D^{\mu\nu}_\xi(k)=\dfrac{i}{k^2+i\epsilon}\left[-g^{\mu\nu}+\dfrac{k^\mu k^\nu}{k^2}\right]-\dfrac{i\xi}{k^2+i\epsilon}\dfrac{k^\mu k^\nu}{k^2}
$$
这样我们就用一种神奇的方法，消除了传播子中的发散项 $k_\mu k_\nu/\mu^2$。这个方法没办法推广至non-abelian理论中，有质量的Yang-Mills理论没办法通过取**零质量极限**的操作平滑过渡到无质量的Yang-Mills理论。

## 31.6 QED重整化第一瞥

在本章的最后，我们稍微来尝试重整化。直接用BPHZ程序，从重整化场开始：
$$
A_\mu'=Z_3^{-1/2}A_\mu,\quad \psi'=Z_2^{-1/2}\psi
$$
用这些场书写的Lagrangian为：
$$
\mathcal L=-\dfrac14(F_{\mu\nu}')^2-\dfrac{1}{2\xi}(\partial_\mu A'^\mu)^2+\bar\psi'(i\partial\mkern-9mu/-m-eA\mkern-9mu/')\psi'+(\text{counterterms})
$$
由于BPHZ程序不涉及Lorentz不变性，因此我们可以将 $A_\mu$ 按四个传播子为 $g_{\mu\nu}/k^2$ 的标量场处理。现在我们写下Lorentz不变的抵消项：

<div align="center">
  <img src="./pictures/Pasted image 20260424193617.png" width="600">
</div>

这些就是所有维数$\le 4$ 的可能抵消项形式。（没有管破坏宇称的项，如 $\bar\psi'\gamma_5\psi'$）。接下来进一步分析：
我们希望只有gauge-fixing term（及其重整化项）不是规范不变的，因此有要求：
$$
A=G=0
$$
接下来，我们期望下面的条件条件得到满足：
$$
C=-D
$$
因为 $C/D$ 刻画了裸电荷的值。如果 $C+D=0$，则这两项counterterms可以合为：
$$
Ci\bar\psi'\partial\mkern-9mu/\psi+D\bar\psi'eA\mkern-9mu/\psi=C\bar\psi'(i\partial\mkern-9mu/-eA\mkern-9mu/)\psi
$$
因此不改变裸电荷的值。我们知道电子和质子的物理电荷是相等的，因此如果有上面的条件，我们就知道其裸电荷也相等。否则我们就不得不接受其裸电荷不同，但在不同的重整化过程中正好得到了完全相同的物理电荷。显然，前者是更有可能的，这称为**电荷的普适性**。当然，这并不是证明而只是猜测，具体证明会在后面的章节中使用Ward identity完成。
最后，我们取
$$
F=0
$$
因为 $\xi$ 本身就是任取的，所以这一项不造成任何物理影响。综上，这些argument给出：
$$
A=F=G=0,\quad C=-D
$$

---


