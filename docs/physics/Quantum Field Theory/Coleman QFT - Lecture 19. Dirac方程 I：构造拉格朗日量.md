---
title: "Coleman QFT Lecture 19: Dirac方程 I：构造拉格朗日量"
---

[[Coleman QFT - Lecture 18. Lorentz群的表示]]
## 19.1 由旋量构造矢量

在非相对论量子力学中，遇到过自旋-1/2的粒子，并且我们知道其在旋转下的性质，这样的粒子的自旋空间便是一个**旋量空间**，其中的元素称为**Pauli旋量**。现在，我们知道旋转群是不够的，在相对论量子力学中，我们需要考虑完整的Lorentz群。Lorentz群的表示由两个指标刻画，即 $D^{(s_+.s_-)}(\Lambda)$。我们已经知道矢量表示为 $D^{(1/2,1/2)}$，其表示空间为矢量空间。相对应的，$D^{(1/2,0)}$ 与 $D^{(0,1/2)}$ 称为**旋量表示**，表示空间由所谓的旋量构成。Lorentz群的生成元的表示为：
$$
\vec J^{(\pm)}=\dfrac12\vec \sigma\Rightarrow \vec L=\dfrac12\vec \sigma,\,\vec M=\pm\dfrac{i}{2}\vec \sigma\qquad (+\text{ for }D^{(1/2,0)})
$$
记 $D^{(1/2,0)}$ 与 $D^{(0,1/2)}$ 的表示空间中的旋量为 $u_+$ 与 $u_-$，则其在旋转与boost下的变换为：
$$
R(\hat n\theta):u_\pm\to \mathrm{e}^{-\frac12i\vec\sigma\cdot\hat n\theta}u_\pm,\quad A(\hat a\phi):u_\pm\to\mathrm{e}^{\pm\frac12\vec\sigma\cdot\hat a\phi}u_\pm
$$
因此 $u_\pm$ 在旋转下变换相同，但在boost下变换不同，$u_\pm$ 称为**Weyl旋量**。由于两个表示在宇称下相互转换，称两种Weyl旋量有不同的**手征性**(chirality)。
$$
P: u_\pm\to u_{\mp}
$$
即宇称会交换Weyl旋量的手征。
现在，我们先只考虑一种旋量的双线性型，即 $u_+^\dagger,u_+$能构成的双线性型，其在Lorentz群下的变换为：
$$
D^{(\frac12,0)}(\Lambda)\otimes D^{(0,\frac12)}(\Lambda)\sim D^{(\frac12,\frac12)}(\Lambda)
$$
这正是矢量表示，因此我们可以预计我们能构造出一个**分量为旋量双线性型的矢量**。

>[!tip]
>这一段可能有点难以理解，我们用 $SO(3)$ 的表示来举个例子。考虑其本身，构成一个三维矢量表示 $D^{(1)}(R)$，表示空间为矢量空间。而矢量的双线性型就是一个二阶张量 $T^{\mu\nu}=V^\mu W^\nu$。二阶张量表示是一个九维可约表示，其可分解为迹、无迹对称以及反对称三部分。这用表示的语言来说就是：
>$$D^{(1)}(R)\otimes D^{(1)}(R)=D^{(0)}(R)\oplus D^{(2)}(R)\oplus D^{(1)}(R)$$
>现在我们考虑的是旋量表示的双线性型 $u_{+}^{*\alpha}u_{+}^\beta$，由于 $u_+^*$ 对应的表示是 $D^{(0,\frac12)}$，因此这个张量积对应于矢量表示：
>$$D^{(\frac12,0)}(\Lambda)\otimes D^{(0,\frac12)}(\Lambda)\sim D^{(\frac12,\frac12)}(\Lambda)$$
>这个“二阶张量”的四个矩阵元经过线性组合可以变成一个四矢量的四个分量。也就是说我们要找到一个映射：
>$$\sigma^\mu_{\alpha\beta}:u_+^{*\alpha}u_+^\beta\to V^\mu$$
>其等价于四个双线性型 $u_+^\dagger \sigma^\mu u_+$，我们很快会看到，$\sigma^\mu=(I,\sigma^i)$，即单位矩阵与Pauli矩阵。

接下来来考虑矢量分量对应的双线性型是什么。对于时间分量，其要在旋转下不变，因此矩阵要与所有Pauli矩阵 $\vec \sigma$ 对易，这只有单位矩阵一种可能，因此：
$$
V^0=u_+^\dagger u_+
$$
空间分量实际上也只有一种选择，在[[SO(3)与SU(2)]]中，我们提到过Pauli矩阵下面的性质：若将Pauli矩阵同时视为三维空间的矢量与二位旋量空间的二阶张量，则其在旋转下不变。也就是说，下面的双线性型：
$$
V^i=u_+^\dagger\sigma^i u_+
$$
在旋转变换下按矢量变换。
我们来验证这样构造出的 $V^\mu=(V^0,V^i)=(u_+^\dagger u_+,u_+^\dagger\sigma^i u_+)$ 是Lorentz矢量。先考虑一个旋转 $R(\hat z\theta)$：
$$
V^i=u_+^\dagger\sigma^i u_+\to u_+^\dagger\mathrm{e}^{\frac i2\sigma_z\theta}\sigma^i\mathrm{e}^{-\frac i2\sigma_z\theta}u_+=\begin{cases}
V^z,\quad i=z\\
V^x\cos\theta-V^y\sin\theta,\quad i=x\\
V^x\sin\theta+V^y\cos\theta,\quad i=y
\end{cases}
$$
上面最后一步运用了Hadamard引理：
$$
\mathrm{e}^{A}B\,\mathrm{e}^{-A}=B+[A,B]+\dfrac{1}{2!}[A,[A,B]]+\dfrac{1}{3!}[A,[A,[A,B]]]+\cdots
$$
再考虑boost $A(\hat z\phi)$：
$$
V^0=u_+^\dagger u_+\to u_+^\dagger\mathrm{e}^{\frac12\sigma_z\phi}\mathrm{e}^{\frac12\sigma_z\phi}u_+=u_+^\dagger\mathrm{e}^{\sigma_z\phi}u_+
$$
而
$$
\mathrm{e}^{\sigma_z\phi}=\cosh\phi+\sinh\phi\, \sigma_z\Rightarrow V^0\to V^0\cosh\phi+V^3\sinh\phi
$$
类似可以验证：
$$
\mathrm{e}^{\frac12\sigma_z\phi}\sigma_{x,y}\,\mathrm{e}^{\frac12\sigma_z\phi}=\sigma_{x,y}\mathrm{e}^{-\frac12\sigma_z\phi}\mathrm{e}^{\frac12\sigma_z\phi}=\sigma_{x,y}\Rightarrow V^{1,2}\to V^{1,2}
$$
$$
\mathrm{e}^{\frac12\sigma_z\phi}\sigma_{z}\,\mathrm{e}^{\frac12\sigma_z\phi}=\mathrm{e}^{\sigma_z\phi}\sigma_{z}=\sigma_z\cosh\phi+\sinh\phi\Rightarrow V^3\to V^3\cosh\phi+V^0\sinh\phi
$$
故我们验证了 $V^\mu$ 的确是一个Lorentz群下的矢量。类似的，还可以用 $u_-$ 构造矢量 $W^\mu=(W^0,W^i)=(u_-^\dagger u_-,-u_-^\dagger \sigma^i u_-)$（注意多出来的**负号**）。

>[!add]
>这里补充一点说明，前面我们通过Lorentz群表示的一般性质，说明了两种旋量表示可以通过复共轭相互转化，也就是说 $u_+^*$ 的变换等价于 $u_-$，这里来具体找到这个相似变换的矩阵。要用到的一个重要性质是：
>$$\sigma_y \vec\sigma^*\sigma_y^{-1}=\sigma_y \vec\sigma^*\sigma_y=-\vec \sigma$$
>这源于在现在的基下，只有 $\sigma_y$ 是虚的（复共轭的性质很依赖于选取的基）。我们可以取相似变换矩阵为 $T=\sigma_y$。其说明 $\sigma^*\sim -\sigma$。
>旋转：
>$$R(\hat n\theta):u_+^*\to \mathrm{e}^{+\frac i2\vec \sigma^*\cdot\hat n\theta}u_+,\quad \sigma_y\,\mathrm{e}^{+\frac i2\vec \sigma^*\cdot\hat n\theta}\sigma_y^{-1}=\mathrm{e}^{-\frac i2\vec \sigma\cdot\hat n\theta}$$
>boost：
>$$A(\hat a\phi):u_+^*\to \mathrm{e}^{+\frac 12\vec \sigma^*\cdot\hat a\phi}u_+,\quad \sigma_y\mathrm{e}^{+\frac 12\vec \sigma^*\cdot\hat a\phi}\sigma_y^{-1}=\mathrm{e}^{-\frac 12\vec \sigma\cdot\hat a\phi}$$
>因此其对应于表示 $D^{(0,\frac12)}(\Lambda)$。

## 19.2 Weyl旋量的Lagrangian

现在，我们知道如何由 $u_+$ 构造出矢量，然后做内积便可以得到标量。因此我们可以尝试用 $u_+$ 来构造Lagrangian了。其要满足下面的几点要求：
1.  $\mathcal L$ 是Lorentz标量。
2.  $\mathcal L$ 需要有内部对称性，以得到守恒荷。
3.  $\mathcal L$ 必须是场的双线性型，这样才能给出线性的运动方程。
4.  为简化起见，$\mathcal L$ 最多包含两个导数。
5.  作用量 $S=\int\mathrm{d}^4 x\,\mathcal L$ 应是实的，$S^*=S$。

首先想到的就是矢量自身的内积，即
$$
V^\mu V_\mu=(u_+^\dagger u_+)^2-(u_+^\dagger\vec \sigma u_+)\cdot(u_+^\dagger\vec \sigma u_+)
$$
但其是旋量场的四次型，因此违反了条件3。根据条件2，我会构造下面的变换：
$$
u_+\to \mathrm{e}^{i\alpha} u_+,\quad u_+^\dagger\to \mathrm{e}^{-i\alpha}u_+^\dagger
$$
同时根据条件4，我们能构造的双线性型只有以下三类：
$$
(a)\,u_+^\dagger Au_+,\quad (b)\,u_+^\dagger A(\partial_\mu u_+),\quad (c)\,u_+^\dagger A(\partial_\mu\partial_\nu u_+)
$$
（对 $u_+^\dagger,u_+$ 分别求一阶导的二次型可以通过分部积分化成 $(c)$ 类）同时，结合我们构造出的双线性型矢量，构造标量的方法就显而易见了：只需将 $(b)$ 类中的指标与矢量指标缩并即可，因此构造的标量为：
$$
\mathcal L=\eta (u_+^\dagger \partial_0 u_++u_+^\dagger \vec \sigma\cdot\nabla u_+)
$$
$\eta$ 是一个待定系数。对右侧取厄米共轭，会得到对 $u_+^\dagger$ 的微分。由于作用量为：
$$
S=\eta \int\mathrm{d}^4 x\,[u_+^\dagger \partial_0 u_++u_+^\dagger \vec \sigma\cdot\nabla u_+]
$$
通过分部积分得到：
$$
S= -\eta\int\mathrm{d}^4 x\,[(\partial_0 u_+^\dagger)u_++(\nabla u_+^\dagger)\cdot\vec \sigma u_+],\quad S^*=\eta^*\int\mathrm{d}^4 x\,[(\partial_0 u_+^\dagger)u_++(\nabla u_+^\dagger)\cdot\vec \sigma u_+]
$$
为了满足条件5（ $S=S^*$ ），则 $\eta=-\eta^*$，因此系数 $\eta$ 是纯虚的。不考虑 $\eta$ 的模方，我们只剩下两种选择：
$$
\mathcal L=\pm i\,(u_+^\dagger \partial_0 u_++u_+^\dagger \vec \sigma\cdot\nabla u_+)
$$
类似的，同样可以用 $u_-$ 构造出一个Lagrangian：
$$
\mathcal L=\pm i(u_-^\dagger \partial_0 u_--u_-^\dagger \vec \sigma\cdot\nabla u_-)
$$
## 19.3 Weyl 方程

有了作用量，我们自然可以通过变分得到运动方程。对 $u_\pm^\dagger$ 做变分得到：
$$
(\partial_0+\vec \sigma\cdot\nabla)u_+=0,\quad (\partial_0-\vec \sigma\cdot\nabla)u_-=0
$$
此方程称为**Weyl方程**。可以证明此方程可以导出**无质量粒子的KG方程**：
$$
(\partial^0\mp \vec \sigma\cdot\nabla)(\partial_0\pm\vec \sigma\cdot\nabla)u_\pm=(\partial_0^2-\nabla^2)u_\pm=\square^2u_\pm=0
$$
因此常说Weyl方程是KG方程的“平方根”，KG方程是二阶微分方程，而Weyl方程是一阶的。我们考虑Weyl方程的**平面波解**：
$$
u_+(x)=u_\vec p\,\mathrm{e}^{\pm ip\cdot x},\quad p_\mu=(|\vec p|,-\vec p)
$$
来确定 $u_\vec p$，为简单期间，考虑沿 $z$ 轴运动有手性无质量粒子，其可以用Weyl方程描述，$p^\mu=p^0(1,0,0,1)$。代入Weyl方程得到：
$$
(p^0-\vec \sigma\cdot\vec p)u_\vec p=(1-\sigma_z)u_\vec p=0\Rightarrow u_\vec p=\begin{pmatrix}
1\\0
\end{pmatrix}
$$
因此我们可以猜测，对于光锥上的每一个动量 $p^\mu$，均存在一个对应的二分量旋量 $u_\vec p$。因此，当我们在量子化这一理论时，对于每一动量的粒子都会有相应的产生湮灭算符。
接下来，我们来讨论自旋。首先，对于**无质量粒子**，我们无法换到其静止系中。因此，其空间对称性就不再是原先的 $SO(3)$，而是子群 $ISO(2)$（这里说的“空间对称性”就是保持动量不变的**小群**）。此时，我们只能谈论无质量粒子的自旋在运动方向上的投影，这称为**螺旋度**(helicity)。仍以上面沿 $z$ 方向运动的粒子为例，粒子态是 $J_z$ 的本征态。
$$
J_z|p\rangle=\lambda|p\rangle
$$
对此理论进行量子化，会得到一个Weyl旋量场 $u_+(x)$，这是一个算符场，类比在标量场的情形，我们期待：
$$
\langle 0|u_+(x)|p\rangle=u_\vec p\,\mathrm{e}^{-ip\cdot x}
$$
同时，利用 $u_+$ 在Lorentz变换下的性质，得到
$$
\mathrm{e}^{-i\lambda\theta}\langle 0|u_+(0)|p\rangle=\langle 0|\mathrm{e}^{iJ_z\theta}u_+(0)\mathrm{e}^{-iJ_z\theta}|p\rangle=\mathrm{e}^{-\frac i2\sigma_z\theta}\langle 0|u_+(0)|p\rangle
$$
因此
$$
\mathrm{e}^{-i\lambda\theta}u_\vec p=\mathrm{e}^{-\frac i2\sigma_z\theta} u_\vec p=\mathrm{e}^{-\frac i2\theta} u_\vec p\Rightarrow \lambda=\dfrac12
$$
这样就说明了旋量场 $u_+$ 描述的粒子就是螺旋度为 $\lambda=1/2$ 的粒子。
由于该理论带有守恒荷，因此存在反粒子。因此，场算符 $u_+(x)$ 还会产生反粒子。我们只需将上面的过程反过来，由于：
$$
\langle p|\mathrm{e}^{iJ_z\theta}=\mathrm{e}^{i\lambda'\theta}\langle p|
$$
其他部分不变，即可得到反粒子的螺旋度为：
$$
\lambda'=-\dfrac12
$$
螺旋度即手性，我们习惯上称螺旋度 $\lambda=\dfrac12$ 的粒子为**右手的**。
那 $u_-$ y又如何呢？实际上其没有任何新的东西，因为 $u_+^*$ 等价于 $u_-$，因此如果去尝试量子化 $u_-$ ，其会得到左手的粒子以及右手的反粒子。复共轭场本质上就是交换粒子与反粒子。
Weyl理论并不是宇称不变的，其很好的描述了有手性的中微子，其具有单一螺旋度。而对于具有**宇称不变性**的量子电动力学，无质量光子就必须同时能具有 $+1$ 与 $-1$ 的螺旋度。

>[!tip] **Majorana质量项**
>在开启下一节，关于Dirac方程的讨论前，我先指出仅使用 $u_+$ 也是可以构造出质量项的，考虑组合 $u_+^T\sigma_2 u_+$，利用性质 $\vec \sigma^T\sigma_2=-\sigma_2\vec\sigma$，可知该组合在Lorentz变换下不变（请自行验证）。现在的Lagrangian可以写为：
>$$ \mathcal L=\pm i(u_+^\dagger\sigma^\mu\partial_\mu u_+)-\dfrac12(mu_+^T\sigma_2 u_++m^*u_+^\dagger\sigma_2 u_+^*)$$
>后一项是为了让Lagrangian为厄米的。但这其实有一点作弊的感觉，因为其中用到了 $u_+^*$，这实际上已经是左手的粒子。同样的，对 $u_+^\dagger$ 变分得到运动方程：
>$$\pm i\left(\partial_0+\vec \sigma\cdot\nabla\right)u_+=m^* \sigma_2 u_+^*$$
>其复共轭方程给出
>$$\pm i\left(\partial_0-\vec \sigma\cdot\nabla\right)u_+^*=mu_+$$
>联立两式可以得到：
>$$ \square^2 u_++|m|^2 u_+=0$$
>这的确对应于质量为 $m$ 的粒子。
>Majorana质量项的问题在于其破坏了条件2，由于后面的双线性型是 $u_+^T$ 与 $u_+$ 的，因此原先的 $U(1)$ 对称性被破坏：
>$$u_+\to \mathrm{e}^{i\alpha} u_+,\quad u_+^\dagger\to \mathrm{e}^{-i\alpha}u_+^\dagger$$

## 19.4 Dirac方程

Weyl方程不令人满意之处有两点，一是只能描述无质量粒子，而是破坏了宇称不变性。现在，我们考虑同时用上 $u_\pm$ ，来构造一个有宇称不变性的理论。首先，对于原先的两个Lorentz标量：
$$
u_+^\dagger\partial_0 u_++u_+^\dagger\vec\sigma\cdot\nabla u_+,\; u_-^\dagger \partial_0 u_--u_-^\dagger\vec \sigma\cdot\nabla u_-
$$
其在宇称下互相转化（ $P:\nabla\to -\nabla,\; u_\pm\to u_{\mp}$ ）。
那么，双线性型 $u_+^\dagger u_-$ 又会怎么变呢？其对应的表示为：
$$
D^{(\frac12,0)}\otimes D^{(\frac12,0)}=D^{{(1,0)}}\oplus D^{(0,0)}
$$
其实际上对应于标量表示，我们可以验证这一点。旋转：
$$
R(\hat n\theta): u_+^\dagger u_-\to u_+^\dagger\mathrm{e}^{\frac i2\vec\sigma\cdot\hat n\theta}\mathrm{e}^{-\frac i2\vec\sigma\cdot\hat n\theta}u_-=u_+^\dagger u_-
$$
boost：
$$
A(\hat a\phi):u_+^\dagger u_-\to u_+^\dagger\mathrm{e}^{\frac 12\vec\sigma\cdot\hat a\phi}\mathrm{e}^{-\frac 12\vec\sigma\cdot\hat a\phi}u_-=u_+^\dagger u_-
$$
因此其的确是一个标量。同理 $u_-^\dagger u_+$ 也是标量。这两个标量在宇称下互相转化，可作为**质量项**出现在Lagrangian中。因此，我们可以构造如下的**宇称不变**的Lagrangian：
$$
\mathcal L=\pm\left[i\left(u_+^\dagger\partial_0 u_++u_+^\dagger\vec\sigma\cdot\nabla u_++ u_-^\dagger \partial_0 u_--u_-^\dagger\vec \sigma\cdot\nabla u_-\right)-mu_+^\dagger u_--m^* u_-^\dagger u_+\right]
$$
通过选择 $u_\pm$ 的相位可使 $m$ 为实数，宇称对旋量的作用（相位上）定义为：
$$
P: u_\pm(\vec x,t)\to u_\mp(-\vec x,t)
$$
我们可以简化拉格朗日量。定义一个四分量的旋量：
$$
\psi\equiv\begin{pmatrix}
u_+\\u_-
\end{pmatrix}
$$
其称为**Dirac旋量**。以及四个 $4\times 4$ 矩阵：
$$
\vec \alpha=\begin{pmatrix}
\vec \sigma&0\\
0&-\vec \sigma
\end{pmatrix},\quad \beta=\begin{pmatrix}
0&\mathbb 1\\
\mathbb 1& 0
\end{pmatrix}
$$
此时的Lagrangian可以写为 $\psi$ 的双线性型：
$$
\mathcal L=\pm\left[i\psi^\dagger(\partial_0+\vec \alpha\cdot\nabla)\psi-m\psi^\dagger\beta\psi\right]
$$
对 $\psi^\dagger$ 变分可以得到**Dirac方程**：
$$
i\partial_0\psi+i\vec\alpha\cdot\nabla\psi=m\beta\psi
$$
当然，这只是Dirac方程的一种形式。这里使用的 $\psi,\vec\alpha,\beta$ 的矩阵形式称为**Weyl基底**，$\vec\alpha,\beta$ 称为**Dirac矩阵**。下一章我们会探讨Dirac方程的其他形式以及解的形式，并推测解所代表粒子的性质。

---

















