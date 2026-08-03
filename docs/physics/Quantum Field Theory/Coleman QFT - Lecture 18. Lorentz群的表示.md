---
title: "Coleman QFT Lecture 18: Lorentz群的表示"
---

我们已经完成了对标量场的讨论，马上要开始讨论旋量场。但在此之前，需要一些数学铺垫，来明晰这些标量场、旋量场、矢量场都是什么。其来源于Lorentz群的不同表示。
## 18.1 一般的Lorentz变换

Lorentz群即 $SO(3,1)$，定义为在四维闵氏空间中保模长（间隔）且行列式为1的线性变换。我们假设 $\Lambda\in SO(3,1)$，并且有一系列场 $\{\phi_a(x)\}$，其在Lorentz变换下按如下方式变换：
$$
U(\Lambda)^{\dagger}\phi_a(x)U(\Lambda)=\sum_bD_{ab}(\Lambda)\phi_b(\Lambda^{-1}x)
$$
即假设变换是线性的。那么，这个线性变换 $D_{ab}(\Lambda)$ 需要满足怎样的性质呢？
其要求保Lorentz群的乘法运算：
$$
U(\Lambda_1)U(\Lambda_2)=U(\Lambda_1\Lambda_2)
$$
事实上，这一条件可以适当放宽，可以加上一个任意的相位：
$$
U(\Lambda_1)U(\Lambda_2)=U(\Lambda_1\Lambda_2)\mathrm{e}^{i\phi(\Lambda_1,\Lambda_2)}
$$
后面会说明，这一个相位会导致如**旋量表示**的出现，实际上我们只需要允许有些时候的额外负号即可。上面的保乘法条件正是群表示论的核心所在。下面我将给出群表示的定义以及一些基本概念：（也可参见群表示论）
**定义**：群的一个 **表示(representation)** 是指一个从群元素到线性变换的映射，线性变换遵循与对应群元素相同的代数，即
$$
\text{If }\;\Lambda_1\Lambda_2=\Lambda_3,\quad \text{then }\;D(\Lambda_1)D(\Lambda_2)=D(\Lambda_3)
$$
容易验证：
$$
D(\Lambda^{-1})=D(\Lambda)^{-1}
$$
如果这个映射是单的，也就是说 $D(\Lambda)=D(\Lambda')$ 当且仅当 $\Lambda=\Lambda'$ ，则称表示是**忠实的(faithful)**。
注意，对于Lorentz群而言，表示不一定是幺正的，比如，由于Lorentz本身就是一个 $4\times 4$ 矩阵群，故 $D(\Lambda)=\Lambda$ 构成一个四维表示，这个表示就不是幺正的。表示的**非幺正性**实际上来源于Lorentz群的**非紧致性**。
如果两个表示可以用一个相似表换联系起来，即
$$
D(\Lambda)'=TD(\Lambda)T^{-1}\Leftrightarrow D(\Lambda)'\sim D(\Lambda)
$$
则称两个表示 $D,D'$ 是**等价的(equivalent)**。对于紧致群，任意表示都有等价的幺正表示，但对于Lorentz群则不然。
两个表示的**直和(direct sum)** 定义为：
$$
D(\Lambda)=D^{(1)}(\Lambda)\oplus D^{(2)}(\Lambda)\equiv\begin{pmatrix}
D^{(1)}(\Lambda)&0\\
0&D^{(2)}(\Lambda)
\end{pmatrix}
$$
最后，如果一个表示等价于（至少）两个表示的直和，换句话说，存在一个相似变换使得所有矩阵被同时分块对角化，则称其为**可约**(reducible)表示，反之称为**不可约**(irreducible)表示。我们接下来的任务就是找出Lorentz群 $SO(3,1)$ 有哪些不可约表示。在此之前，先来研究三维旋转群 $SO(3)$ 的不可约表示。

## 18.2 旋转群的不可约表示

三维旋转群 $SO(3)$ 定义为三维欧氏空间中保模长且行列式为1的线性变换。任意一个三维旋转都可用转动轴 $\hat n$ 与转动角度 $\theta$ 来表征：
$$
R\in SO(3):\;R=R(\hat n \theta),\quad 0\le \theta\le \pi
$$
同一根转轴上的旋转的复合相当于简单将转角相加减，其是可交换的：
$$
R(\hat n\theta)R(\hat n\theta')=R(\hat n(\theta+\theta'))
$$
因此表示也必须满足：
$$
U(R(\hat n\theta))U(R(\hat n\theta'))=U(R(\hat n(\theta+\theta')))\tag{*}
$$
此时可以将 $U$ 视为连续变量 $\theta$ 的函数，该映射关系完全由 $\hat n$ 决定，在 $\theta=0$ 处求其微分：
$$
i\dfrac{\partial}{\partial\theta}D(R(\hat n\theta))\bigg|_{\theta=0}\equiv\hat n\cdot \vec L
$$
这里 $\vec L$ 是一个定义的矢量，我们可以暂且称其为“角动量”，但其分量并不是数而是矩阵。其也称为无穷小旋转的**生成元**(generator)。我们可以对(\*)式求 $\theta'=0$ 的导数：
$$
\dfrac{\partial}{\partial\theta}D(R(\hat n\theta))=-i\hat n\cdot\vec L\,D(R(\hat n\theta))\Rightarrow D(R(\hat n\theta))=\exp(-i\hat n\cdot \vec L\,\theta)
$$
上面使用了“初始条件”$D(R(0))=I$。注意这是一个矩阵指数。现在，寻找表示 $D(R)$ 就转化为寻找 $\vec L$ 了。

>[!tip]
>这里，$SO(3)$ 是一个李群，而其无穷小变换的生成元 $\vec L$ 构成了一个线性空间，且此空间上有对易子结构，这样的配有对易子（Lie括号）的线性空间称为一个Lie代数。

通过研究无穷小旋转的复合关系，我们得到生成元的对易关系：
$$
[L_i,L_j]=i\epsilon_{ijk}L_k
$$
我们实际就是要找满足上面对易关系的Lie代数 $\vec L$ 的表示。Pauli首先解决了此问题，他指出不可约表示可以用一个数 $s$ 来标记， $s$ 称为自旋(spin)，其取值为 $\{0,\frac12,1,\cdots\}$。下面列出最低几个表示的显式：
$$
\begin{align}
&s=0:\vec L^{(0)}=0\\
&s=1/2: \vec L^{(1/2)}=\dfrac12\vec \sigma\\
&s=1:(L_i^{(1)})_{jk}=-i\epsilon_{ijk}
\end{align}
$$
由于 $SO(3)$ 是紧致的，故我们总可以选取合适的基使得 $\vec L^{(s)}$ 是厄米的，因此 $D^{(s)}$ 即为幺正的。另一方面，对于那些 $s$ 为半整数的表示，其实际上是投影表示，仅构成Lie代数的表示，而不构成Lie群的严格表示。此时Lie代数的指数映射构成Lie群的双重覆盖。
$$
D^{(s)}(R(2\pi\hat n))=(-1)^{2s}
$$
## 18.3 Lorentz 群的不可约表示

Lorentz群本身作用于4维闵氏时空上，如果其对时间分量的作用是平凡的，则其就是一个**旋转(rotation)**，因此 $SO(3)$ 为 $SO(3,1)$ 的一个子群。另一个子群中的元素称为**推动(boost)**，其就是我们熟悉的沿某一方向匀速运动的Lorentz变换，其同样可以由换系方向 $\hat a$ 与一个表征速度（称为**快度**）的参数 $\phi$ 表征，记为 $A(\hat a \phi)$。例如一个沿 $z$ 轴的boost为：
$$
A(\hat z\phi):x^0\to x'^0=x^0\cosh\phi-x^3\sinh\phi,\;x^3\to x'^3=x^3\cosh\phi- x^0\sinh\phi
$$
速度与快度的关系为：
$$
\tanh \phi=v,\quad 0\le \phi<\infty,\quad 0\le v<1
$$
同样的，沿同一方向的boost可以直接叠加快度。应用相似的步骤，可以定义：
$$
\hat n\cdot \vec L=i\dfrac{\partial}{\partial\theta}D(R(\hat n\theta))\bigg|_{\theta=0},\quad \hat a\cdot \vec M=i\dfrac{\partial}{\partial\phi}D(A(\hat a\phi))\bigg|_{\phi=0}
$$
即 $\vec L$ 生成旋转，$\vec M$ 生成boost。其对易关系为：
$$
[L_i,L_j]=i\epsilon_{ijk}L_k,\quad [L_i,M_j]=i\epsilon_{ijk}M_k,\quad [M_i,M_j]=-i\epsilon_{ijk}L_k
$$
这其实与 $SO(4)$ 的Lie代数的对易关系很像，唯一的区别在于最后一个对易子多了负号。在此，我们验证一下宇称的作用（注意宇称不是Lorentz变换），其不会改变旋转，但会改变boost的方向，也就是说：
$$
P:\vec L\to\vec L,\quad \vec M\to -\vec M
$$
可验证上面的对易关系仍满足。而对 $SO(4)$ 而言，不论是 $\vec L$ 还是 $\vec M$ 都不变号。现在，我们定义一组新的生成元：
$$
\vec J^{(\pm)}\equiv\dfrac {1}{2}(\vec L\pm i\vec M)
$$
其满足的对易关系为：
$$
[J_{i}^{(\pm)},J_j^{(\pm)}]=i\epsilon_{ijk}J_k^{(\pm)},\quad [J_i^{(+)},J_j^{(-)}]=0
$$
这里，我们看到，$J_i^{(\pm)}$ 分别独立满足 $\vec L$ 的对易关系。在表示论中有这样的定理：如果一个Lie代数可以写为两个Lie代数的直和：
$$
\mathfrak g=\mathfrak g_1\oplus\mathfrak g_2
$$
则 $\mathfrak g_1$ 与 $\mathfrak g_2$ 的不可约表示的张量积一定是 $\mathfrak g$ 的不可约表示。现在，可以看到Lorentz群的Lie代数可以写为两个 $SO(3)$ 的Lie代数的直和：
$$
\mathfrak{so}(3,1)=\mathfrak{so}(3)\oplus\mathfrak{so}(3)
$$
因此 $\mathfrak{so}(3,1)$ 的不可约表示可以用两个自旋指标 $s_+,s_-$ 标记，即 
$$
D^{(s_+,s_-)}(\Lambda),\quad s_+,s_-=0,\dfrac12,1,\cdots
$$
其表示空间中的矢量可以标记为 $|m_+,m_-\rangle$，有以下性质：
$$
J_z^{(\pm)}|m_+,m_-\rangle=m_\pm|m_+,m_-\rangle,\quad \mathrm{dim}\,D^{(s_+,s_-)}(\Lambda)=(2s_++1)(2s_-+1)
$$
由于 $J^{(\pm)}$ 实际上就是两个 $SO(3)$ 的生成元，因此我们总可以将其取为厄米的。此时：
$$
\vec L=\vec J^{(+)}+\vec J^{(-)}\;\;\text{is Hermitian}\Rightarrow D(R(\hat n\theta))=\mathrm{e}^{-i\hat n\cdot \vec L\theta}\;\;\text{is unitary}
$$
$$
\vec M=-i(\vec J^{(+)}-\vec J^{(-)})\;\;\text{is not Hermitian}\Rightarrow D(A(\hat a\phi))=\mathrm{e}^{-i\hat a\cdot \vec M\phi}\;\;\text{is not unitary}
$$
因此这不是一个幺正表示。

>[!tip] 补充：
>首先，$\vec J^{(+)}+\vec J^{(-)}$ 实际是指：
>$$\vec J^{(+)}\otimes\mathbb{1}_{2s_2+1}+\mathbb{1}_{2s_1+1}\otimes\vec J^{(-)}$$
>这是独立的两块空间，而不是直接相加两个矩阵（毕竟维数都不一定一样）
>其次，一个更加有Lorentz协变性的生成元定义为：
>$$J^{ij}=\epsilon^{ijk}L_k,\quad J^{0i}=-J^{i0}=M_i,\quad J^{00}=0$$
>就定义出了一个反对称矩阵。生成元的对易关系可以表示为：
>$$[J^{\mu\nu},J^{\alpha\beta}]=ig^{\nu\alpha}J^{\mu\beta}-ig^{\mu\alpha}J^{\nu\beta}-ig^{\nu\beta}J^{\mu\alpha}+ig^{\mu\beta}J^{\nu\alpha}$$
>表示可以用生成元的指数映射得到：
>$$D(\Lambda(\epsilon_{\mu\nu}))=\exp\left(-\dfrac{i}{2}\epsilon_{\mu\nu}J^{\mu\nu}\right)$$
>这里 $\epsilon_{\mu\nu}$ 是一个刻画Lorentz变换参数的反对称矩阵。

## 18.4 $SO(3)$ 群不可约表示 $D^{(s)}$ 的性质

### 复共轭

显然 $D^{(s)}(R)^*$ 也是 $SO(3)$ 的不可约表示，由于 $SO(3)$ 同一维度的不可约表示只有一个，因此必有
$$
D^{(s)}
(R)^*\sim D^{(s)}(R)
$$
生成元的关系为（注意指数上的 $i$ 会反号）：
$$
\vec J^{(s)}\sim-\vec J^{(s)*}
$$

### 直积

两个不可约表示的直积可分解为一系列不可约表示的直和：
$$
D^{(s_1)}(R)\otimes D^{(s_2)}(R)\bigoplus_{s=|s_1-s_2|}^{s_1+s_2}D^{(s)}(R)
$$
这里就不证明了。可参见紧李群上的积分。

### 交换对称性

两个相同的不可约表示的直积存在一种交换对称性。首先：
$$
D^{(s)}\otimes D^{(s)}\sim\bigoplus_{J=0}^{2s} D^{(J)}
$$
表示空间同样是张量积，其有CG系数分解，即 $|J,m_J\rangle$ 可分解为 $|s_1,m_1\rangle\otimes|s_2,m_2\rangle$ 的线性组合。交换对称性是指：
$$
J=2s: |2s,2s\rangle
=|s,s\rangle\otimes|s,s\rangle \;\;\text{is symmetry}
$$
$$
J=2s-1:\text{此空间与 $J=2s$ 空间正交，为反对称}
$$
依次向下，空间为对称与反对称交替出现。这里的对称与反对称指其为交换算符 $P$ 的本征态，对应于本征值1与-1。交换算符定义为：
$$
P(|a\rangle\otimes|b\rangle)=|b\rangle\otimes|a\rangle
$$
## 18.5 Lorentz 群不可约表示的性质

### 复共轭

由于 $\vec J^{(\pm)}$ 构成两个 $SO(3)$ 群的Lie代数，其表示的复共轭性质为：
$$
\vec J^{(\pm)*}\sim-\vec J^{(\pm)}
$$
因此
$$
\vec L\sim-\vec L^*,\quad \vec M^*\sim\vec M
$$
一个值得启发的点是，我们可以考虑指标交换，即交换 $\vec J^{(+)}$ 与 $\vec J^{(-)}$：
$$
\vec L=\vec J^{(+)}+\vec J^{(-)}\to \vec L,\quad \vec M=-i(\vec J^{(+)}-\vec J^{(-)})\to -\vec M
$$
同时复共轭会改变指数映射的 $i$，具体来说：
$$
D(R(\hat n\theta))^*=\mathrm{e}^{i\hat n\cdot \vec L^*\theta}\sim\mathrm{e}^{i\hat n\cdot (-\vec L)\theta},\quad D(A(\hat a\phi))^*=\mathrm{e}^{i\hat a\cdot\vec M^*\phi}\sim\mathrm{e}^{i\hat a\cdot\vec M\phi}
$$
即其与交换  $\vec J^{(+)}$ 与 $\vec J^{(-)}$ 的结果是一样的。因此，我们得到：
$$
[D^{(s_+,s_-)}(\Lambda)]^*\sim D^{(s_-,s_+)}(\Lambda)
$$
### 宇称

宇称对转动与boost的作用为：
$$
\vec L\to\vec L,\quad \vec M\to-\vec M
$$
这正是交换 $\vec J^{(+)}$ 与 $\vec J^{(-)}$ 的变换，因此
$$
P: D^{(s_+,s_-)}\to D^{(s_-,s_+)}
$$

### 直积

直积只是对两个 $SO(3)$ 的部分分别做直积，因此
$$
D^{(s_+,s_-)}\otimes D^{(s_+',s_-')}\sim\bigoplus_{J_+,J_-}D^{(J_+,J_-)},\quad J_+=|s_+-s_+'|,\cdots,s_++s_+',\quad J_+=|s_--s_-'|,\cdots,s_-+s_-'
$$
这是简单的。

### 旋转子群

一个群的不可约表示在其子群上可能变成可约的，因为矩阵的数量变少了，其有可能能同时分块对角化了。比如，对于Lorentz群 $SO(3,1)$ 的旋转子群 $SO(3)$ 而言：
$$
D(R(\hat n\theta))=\mathrm{e}^{-i(\vec J^{(+)}+\vec J^{(-)})\cdot\vec n\theta}
$$
Lorentz群本身“几乎”同构于
$$
SO(3,1)\simeq SU(2)\otimes SU(2)
$$
而原先的表示则对应于：
$$
D^{(s_+,s_-)}(\Lambda)=D^{(s_+)}(\Lambda_1)\otimes D^{(s_-)}(\Lambda_2)
$$
$SO(3)$ 在Lorentz群中是**对角嵌入**的，换言之，给定一个 $g\in SO(3)$，其对应于
$$
g\to(g,g)\in SU(2)\otimes SU(2)
$$
因此
$$
D^{(s_+,s_-)}(g)=D^{(s_+)}(g)\otimes D^{(s_-)}(g)\sim\bigoplus_{s=|s_+-s_-|}^{s_++s_-}D^{(s)}(g)
$$
实际上就相当于两个角动量的耦合。

### 矢量表示

**矢量表示**即 $U(\Lambda)=\Lambda$，这是一个不可约表示，因为Lorentz变换会混合所有分量，故不存在不变子空间。那么，其对应到 $s_+,s_-$ 是什么？首先，由维度我们知道：
$$
(2s_++1)(2s_-+1)=4
$$
另一方面，一个自然的要求是该表示是**实的**，因为其是实矩阵。也就是说 $s_+=s_-$，故 $s_\pm=\dfrac12$。
再来看限制在旋转群 $SO(3)$ 的效果：
$$
D^{(1/2,1/2)}(R)\sim D^{(1)}(R)\oplus D^{(0)}(R)
$$
这符合我们的预期。旋转不改变时间分量，只混合空间分量，就对应于 $D^{(0)}$ 与 $D^{(1)}$。

### 张量表示

来看看二阶张量 $T_{\mu\nu}$ 作为表示空间，此表示的维度为：
$$
\mathrm{dim}\,D(\Lambda)=4\times 4=16
$$
这个表示是可约的。由于张量表示实际上为两个矢量表示的张量积，所以
$$
D(\Lambda)\sim D^{(1/2,1/2)}(\Lambda)\otimes D^{(1/2,1/2)}(\Lambda)\sim D^{(1,1)}\oplus D^{(1,0)}\oplus D^{(0,1)}\oplus D^{(0,0)}
$$
我们来看看张量空间是如何分解的。首先，由对称性可分解为：
$$
T_{\mu\nu}=S_{\mu\nu}+A_{\mu\nu}
$$
其中
$$
S_{\mu\nu}=\dfrac12(T_{\mu\nu}+T_{\nu\mu}),\quad A_{\mu\nu}=\dfrac12(T_{\mu\nu}-T_{\nu\mu})
$$
这两块空间在Lorentz变换下是不变的（你可以验证这一点），对于 $n=4$ ，其空间维度分别为 $10$ 和 $6$，因此由维度知道：
$$
D(\Lambda)\sim\underbrace{D^{(1,1)}\oplus D^{(1,0)}}_{\text{for sym.}}\oplus \underbrace{D^{(0,1)}\oplus D^{(0,0)}}_{\text{for antisym.}}
$$
也就是说，这两块区域还能再分。
首先来看 $S_{\mu\nu}$，其还能分成迹与无迹部分：
$$
S_{\mu\nu}=\tilde S_{\mu\nu}+\dfrac14 \eta_{\mu\nu}S^\lambda_\lambda
$$
可以验证两部分是不变子空间。另一方面，对于 $A_{\mu\nu}$ 部分，其分解涉及到**对偶**(dual)的概念：
$$
\star A^{\mu\nu}\equiv\dfrac12 \epsilon^{\mu\nu\lambda\sigma}A_{\lambda\sigma},\quad \star\star A^{\mu\nu}=-A^{\mu\nu}
$$
 $A_{\mu\nu}$ 部分可以分解为**自对偶**与**自反对偶部分**：
$$
 A_{\mu\nu}^{(\pm)}=\dfrac12(A_{\mu\nu}\pm i\,\star A_{\mu\nu})
$$
其满足性质：
$$
\star A_{\mu\nu}^{(\pm)}=\mp iA_{\mu\nu}^{(\pm)}
$$
可以验证 $A_{\mu\nu}^{(\pm)}$ 分别构成了三维的不变子空间，限制在其上便得到不可约表示 $D^{(1,0)}$ 与 $D^{(0,1)}$。这两个分解实际上用到了度规张量 $\eta_{\mu\nu}$ 以及四阶全反对称张量 $\epsilon^{\mu\nu\lambda\sigma}$ 在Lorentz群下的不变性。

---

