---
title: "Coleman QFT Lecture 20: Dirac方程 II：求解"
---

>[!summary]
>先对上一章做一个简单的回顾：
>- Lorentz群的表示 $D^{(\frac12,0)},\,D^{(0,\frac12)}$ 是**旋量表示**，其表示空间中生活着**Weyl旋量** $u_\pm$，两者在旋转下的变换相同，boost下的变换不同，可以通过宇称相互转换。通过Pauli矩阵可以构造作为矢量分量的双线性型：
>$$V^\mu=(u_+^\dagger u_+,u_+^\dagger\sigma^i u_+),\quad W^\mu=(W^0,W^i)=(u_-^\dagger u_-,-u_-^\dagger \sigma^i u_-)$$
>- 矢量的散度是**标量**，可以用于构造Lagrangian：
>$$\mathcal L_+=\pm i\,(u_+^\dagger \partial_0 u_++u_+^\dagger \vec \sigma\cdot\nabla u_+)\quad \mathcal L_-=\pm i(u_-^\dagger \partial_0 u_--u_-^\dagger \vec \sigma\cdot\nabla u_-)$$
>其变分可以得到Weyl方程。两种旋量场分别代表了**右手与左手**（**螺旋度** $\pm1/2$ ）的**无质量**粒子。Weyl理论不具有**宇称**对称性，两种粒子在宇称下相互转化。
>- 将两种旋量场都放进Lagrangian中，可以构造出**含质量项**的**宇称不变**的Lagrangian：
>$$\mathcal L=\pm\left[i\left(u_+^\dagger\partial_0 u_++u_+^\dagger\vec\sigma\cdot\nabla u_++ u_-^\dagger \partial_0 u_--u_-^\dagger\vec \sigma\cdot\nabla u_-\right)-m(u_+^\dagger u_++ u_-^\dagger u_+)\right]$$
>通过定义Weyl基底下的**Dirac旋量**与**Dirac矩阵**：
>$$\psi\equiv\begin{pmatrix}u_+\\u_-\end{pmatrix},\quad \vec \alpha=\begin{pmatrix}\vec \sigma&0\\0&-\vec \sigma\end{pmatrix},\quad \beta=\begin{pmatrix}0&\mathbb 1\\\mathbb 1& 0\end{pmatrix}$$
>可以得到更简单的Lagrangian：
>$$ \mathcal L=\pm\left[i\psi^\dagger(\partial_0+\vec \alpha\cdot\nabla)\psi-m\psi^\dagger\beta\psi\right]$$
>以及变分得到的**Dirac方程**：
>$$i\partial_0\psi+i\vec\alpha\cdot\nabla\psi=m\beta\psi$$

## 20.1 Dirac 基底

Dirac矩阵是厄米的，其满足称为**Clifford代数**的反对易关系：
$$
\{\alpha_i,\alpha_j\}=2\delta_{ij},\quad \{\alpha_i,\beta\}=0,\quad \{\beta,\beta\}=2
$$
这可以很容易由Pauli矩阵的反对易性质推出：
$$
\{\sigma_i,\sigma_j\}=2\delta_{ij}
$$
Dirac旋量是两个Weyl旋量直接放在一起得到的旋量，其对应的Lorentz群表示是两个**不可约旋量表示的直和** $D^{(\frac12,0)}\oplus D^{(0,\frac12)}$。我们知道对两个旋量表示，生成元的表示为：
$$
\vec L=\dfrac12\vec \sigma,\quad\vec M=\pm\dfrac{i}{2}\vec \sigma
$$
因此其直和为：
$$
\vec L=\dfrac12\begin{pmatrix}
\vec\sigma&0\\ 0&\vec\sigma
\end{pmatrix}\equiv\dfrac12\vec\varSigma,\quad \vec M=\dfrac{i}{2}\begin{pmatrix}
\vec\sigma &0\\ 0&-\vec\sigma
\end{pmatrix}=\dfrac{i}{2}\vec\alpha
$$
宇称对Dirac旋量的作用是交换 $u_\pm$，即
$$
P: \psi(\vec x,t)\to \beta\psi(-\vec x,t)
$$
以上，我们都是在Weyl基底下进行讨论，其称为Dirac方程的**Weyl表示**。但当时Dirac用的并不是Weyl基底，他选择的是：
$$
\psi=\dfrac{1}{\sqrt 2}\begin{pmatrix}
u_++u_-\\
u_+-u_-
\end{pmatrix}
$$
这种基底称为Dirac表示或者**标准表示**(standard representation)。可以发现 $i\psi^\dagger\partial_0\psi=iu_+^\dagger\partial_0 u_++iu_-^\dagger\partial_0 u_-$ 不变。而Dirac矩阵变为：
$$
\vec \alpha=\begin{pmatrix}0&\vec\sigma\\\vec \sigma&0\end{pmatrix},\quad \beta=\begin{pmatrix}\mathbb 1&0\\0&-\mathbb 1 \end{pmatrix}
$$
此时的生成元表示仍满足：
$$
\vec L=\dfrac12\vec\varSigma,\quad\vec M=\dfrac i2\vec \alpha
$$
>[!tip]
>Dirac表示与Weyl表示只是基底变换而已，其通过下面的相似变换联系：
>$$\psi_D=T\psi_W,\quad \vec\alpha_D=T\vec\alpha_W T^{-1},\quad \beta_D=T\beta_W T^{-1},\quad T=\dfrac{1}{\sqrt 2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$$

## 20.2 平面波解

接下来我们来实际求解Dirac方程。不论在何种基底下，Dirac方程形式上总可写为：
$$
i\partial_0\psi+i\vec\alpha\cdot\nabla\psi=\beta m\psi
$$
由于其描述的是自由的质量为 $m$ 的粒子，我们自然会猜测平面波解。首先，我们猜测指数上带负号的**正频率解**：
$$
\psi(\vec x,t)=u_\vec p\,\mathrm{e}^{-ip\cdot x}
$$
注意不要混淆其与[[Coleman QFT - Lecture 19. Dirac方程 I：构造拉格朗日量]]中求解Weyl方程时的 $u_\vec p$，现在的 $u_\vec p$ 是四分量的列向量。后面我们会说明，Dirac方程可以推出质量为 $m$ 的Klein-Gordan方程，因此平面波的波矢应当处在质壳上，即
$$
E_p=\sqrt{\vec p^2+m^2}
$$
则Dirac方程变为：
$$
[E_p-\vec \alpha\cdot\vec p\,]u_\vec p=\beta mu_\vec p
$$
首先，我们考虑静止粒子( $\vec p=0$ )，则
$$
u_0=\beta u_0
$$
因此其即 $\beta$ 的本征矢。具体考虑标准表示，此时 $\beta=\mathrm{diag}(1,-1)$。因此本征矢为：
$$
u_0^{(1)}=\sqrt{2m}\begin{pmatrix}
1\\0\\0\\0
\end{pmatrix},\quad u_0^{(2)}=\sqrt{2m}\begin{pmatrix}
0\\1\\0\\0
\end{pmatrix}
$$
这里前面的系数 $\sqrt{2m}$ 的作用在后面会显现出来。那么，动量不为零的解又是什么呢？我们不需要直接求解Dirac方程，而是对上面的解施加boost即可。
$$
u_\vec p^{(r)}=\mathrm{e}^{-i\hat a\cdot\vec M\phi}u_0^{(r)}=\mathrm{e}^{\frac12\vec\alpha\cdot\hat a\phi}u_0^{(r)}
$$
其中 $$\hat a=\dfrac{\vec p}{|\vec p|},\quad \cosh\phi=\dfrac{E_p}{m}$$为了简单起见，考虑沿 $z$ 轴的动量，由于
$$
\mathrm{e}^{\frac12\alpha_z\phi}=\cosh\frac12\phi+\alpha_z\sinh\dfrac12\phi=\begin{pmatrix}
\cosh\frac\phi2&0&\sinh\frac\phi2&0\\
0&\cosh\frac\phi2&0&-\sinh\frac\phi2\\
\sinh\frac\phi2&0&\cosh\frac\phi2&0\\
0&-\sinh\frac\phi 2&0&\cosh\frac\phi2
\end{pmatrix}
$$
其中
$$
\cosh\frac\phi 2=\sqrt{\dfrac{\cosh\phi+1}{2}}=\sqrt{\dfrac{E_p+m}{2m}},\quad \sinh\frac\phi 2=\sqrt{\dfrac{E_p-m}{2m}}
$$
因此
$$
u_p^{(1)}=\begin{pmatrix}
\sqrt{E_p+m}\\0\\\sqrt{E_p-m}\\0
\end{pmatrix},\quad u_p^{(2)}=\begin{pmatrix}
0\\\sqrt{E_p+m}\\0\\-\sqrt{E_p-m}
\end{pmatrix},\quad
$$
我们可以做一个简单的验证。前面知道
$$V^\mu=(u_+^\dagger u_+,u_+^\dagger\sigma^i u_+),\quad W^\mu=(W^0,W^i)=(u_-^\dagger u_-,-u_-^\dagger \sigma^i u_-)$$
构成两个矢量。我们也可以将其合成一个由Dirac旋量构造的矢量，即
$$
U^\mu=(\psi^\dagger\psi,\psi^\dagger\vec\alpha\,\psi)
$$
对于 $\vec p=0$，有下面的关系：
$$
(u_0^{(r)\dagger}u_0^{(s)},u_0^{(r)\dagger}\vec\alpha \,u_0^{(s)})=(2m,\vec 0)\delta^{rs}
$$
而上面的解满足
$$
(u_p^{(r)\dagger}u_p^{(s)},u_p^{(r)\dagger}\vec\alpha \,u_p^{(s)})=2(E_p,\vec p)\delta^{rs}
$$
这正是能动量的Lorentz变换。
接下来，我们来看另一部分，关于**负频率**的平面波解，即
$$
\psi(\vec x,t)=v_\vec p\mathrm{e}^{+ip\cdot x},\quad p^0=E_p=\sqrt{\vec p^2+m^2}
$$
代入Dirac方程得到：
$$
[E_p-\vec\alpha\cdot\vec p\,]v_\vec p=-\beta mv_\vec p
$$
应用相同的流程。对于零动量 $\vec p=0$ 情形：
$$
v_0=-\beta v_0\Rightarrow v_0^{(1)}=\sqrt{2m}\begin{pmatrix}
0\\0\\0\\1
\end{pmatrix},\quad v_0^{(2)}=\sqrt{2m}\begin{pmatrix}
0\\0\\1\\0
\end{pmatrix}
$$
同样用boost得到沿 $z$ 方向运动的解：
$$
v_p^{(1)}=\begin{pmatrix}
0\\-\sqrt{E_p-m}\\0\\\sqrt{E_p+m}
\end{pmatrix},\quad v_p^{(2)}=\begin{pmatrix}
\sqrt{E_p-m}\\0\\\sqrt{E_p+m}\\0
\end{pmatrix}
$$
以及正交归一关系：
$$
(v_p^{(r)\dagger}v_p^{(s)},v_p^{(r)\dagger}\vec\alpha \,v_p^{(s)})=2(E_p,\vec p)\delta^{rs}
$$
负频率似乎代表着负能解，这一点当时引起了很多人的困扰。毕竟如果有负能解的存在，意味着能量无下界，会导致物理系统的不稳定。Dirac的提议是: 之所以带正能的电子不会掉落到负能态，是因为“除了会有少量速度较小的态, 所有的负能态已经被占满了。”随后，这种空穴解释被正电子的图像所取代：负能解代表带正电的正电子。当然，这样解释可以避免能量不正定的原因需要依靠量子化Dirac理论完成，这将在下一章进行。

最后，我们来说明平面波解也是角动量的本征态。由于我们考虑的是 $z$ 方向的boost，因此可以仅考虑 $z$ 方向的角动量 $L_z$，其矩阵表示为：
$$
L_z=\dfrac{1}{2}\begin{pmatrix}
\sigma_z&0\\0&\sigma_z
\end{pmatrix}=\dfrac12\begin{pmatrix}
1&0&0&0\\0&-1&0&0\\0&0&1&0\\0&0&0&-1
\end{pmatrix}
$$
对于零动量解，易验证：
$$
L_zu_0^{(1)}=\dfrac12u_0^{(1)},\quad L_zv_0^{(2)}=\dfrac12 v_0^{(2)},\quad L_zu_0^{(2)}=-\dfrac12u_0^{(2)},\quad L_zv_0^{(1)}=-\dfrac12v_0^{(1)}
$$
而对于 $p_z\ne 0$ 的粒子，由于沿 $z$ 方向的boost和 $L_z$ 对易，故上面的本征关系不变。因此，角标 $1,2$ 标记了角动量本征态，或者说螺旋度本征态。

## 20.3 Pauli 定理

接下来，我们稍微偏题一下，进行一些数学上的讨论。现在，我已经介绍了Dirac表示与Weyl表示，两者之间可以通过相似变换相联系。但Dirac矩阵的许多性质是不依赖于具体基底的，而是源于其代数结构。而这里说的代数结构，就是指前面提到的Clifford algebra：
$$
\{\alpha_i,\alpha_j\}=2\delta_{ij},\quad \{\alpha_i,\beta\}=0,\quad \{\beta,\beta\}=2
$$
这一关系显然在相似变换下不变。那么，Clifford代数能否将Dirac矩阵限制在至多差一个相似变换的范围内呢？答案是可以的。这就是Pauli定理，表述如下：
>[!tip] Pauli theorem
>任何一组满足Dirac代数的 $4\times 4$ 矩阵表示都等价于Weyl表示。

此定理暗示了下面的结果：所有只包含自旋1/2粒子且宇称对称的Lorentz群的表示都是**等价的**。也就是说，Dirac理论是唯一可以构建出的有宇称对称性的自旋1/2粒子的理论。下面就来证明该定理：
首先，定义
$$
M_i=\dfrac{i}{2}\alpha_i,\quad [M_i,M_j]=-i\epsilon_{ijk}L_k
$$
我们来证明这样定义出的 $\vec L$ 与 $\vec M$ 满足Lorentz群生成元的对易关系。会用到的引理：
$$
\epsilon_{ijk}\epsilon_{ijl}=2\delta_{kl},\quad [AB,C]=A\{B,C\}-\{A,C\}B
$$
则
$$
-i\epsilon_{ijk}L_k=-\dfrac14[\alpha_i,\alpha_j]=-\dfrac12\alpha_i\alpha_j\Rightarrow L_k=-\dfrac{i}{4}\epsilon_{ijk}\alpha_i\alpha_j
$$
$$
[L_k,M_l]=\dfrac18\epsilon_{ijk}[\alpha_i\alpha_j,\alpha_l]=\dfrac14\epsilon_{ijk}(\alpha_i\delta_{jl}-\delta_{il}\alpha_j)=\dfrac14(\epsilon_{ilk}\alpha_i-\epsilon_{ljk}\alpha_j)=-\dfrac12\epsilon_{kli}\alpha_i=i\epsilon_{kli}M_i
$$
$$
\begin{align}
[L_i,L_j]&=-\dfrac{1}{16}\epsilon_{ikl}\epsilon_{jmn}[\alpha_k\alpha_l,\alpha_m\alpha_n]=-\dfrac{1}{16}\epsilon_{ikl}\epsilon_{jmn}([\alpha_k\alpha_l,\alpha_m]\alpha_n+\alpha_m[\alpha_k\alpha_l,\alpha_n])\\&=-\dfrac18\epsilon_{ikl}\epsilon_{jmn}(\alpha_k\alpha_n\delta_{lm}-\alpha_l\alpha_n\delta_{km}+\alpha_m\alpha_k\delta_{ln}-\alpha_m\alpha_l\delta_{kn})\\&=-\frac18(\alpha_{j}\alpha_i-\delta_{ij}-\delta_{ij}+\alpha_j\alpha_i+\delta_{ij}-\alpha_i\alpha_j-\alpha_i\alpha_j+\delta_{ij})\\&=\dfrac14(\alpha_i\alpha_j-\alpha_j\alpha_i)=i\epsilon_{ijk}L_k
\end{align}
$$
这样就验证了生成元的对易关系，因此构造出的 $\vec L,\vec M$ 构成了Lorentz群的一个4维表示。那么是哪一个呢？
首先，不可约表示只可能是 $D^{(\frac32,0)},D^{(\frac12,\frac12)},D^{(0,\frac32)}$，但其不可能，因为
$$
L_z^2=-\dfrac14\alpha_x\alpha_y\alpha_x\alpha_y=\dfrac{1}{4}\alpha_x^2\alpha_y^2=\dfrac14
$$
因此 $\vec L$ 的表示矩阵只有本征值 $\pm1/2$。而现在，这三个不可约表示都存在超过 $l=\dfrac12$ 的角动量部分，因此是不可能的。换句话说，我们找的表示应该只含有自旋1/2表示，因此只能是旋量表示的直和，有三种可能：
$$
D^{(\frac12,0)}\oplus D^{(\frac12,0)},\quad D^{(\frac12,0)}\oplus D^{(0,\frac12)},\quad D^{(0,\frac12)}\oplus D^{(0,\frac12)}
$$
接下来使用 $\beta$，由恒等式：
$$
\beta\,\vec\alpha\,\beta^{-1}=\beta\,\vec\alpha\,\beta=-\vec\alpha
$$
因此
$$
\beta\vec M\beta^{-1}=-\vec M,\quad \beta\vec L\beta^{-1}=\vec L
$$
我们注意到，此变换的作用与宇称变换完全相同。因此 $\beta$ 就是宇称变换下的相似变换矩阵，也就是说此表示有宇称不变性。故我们只剩下一个选择，即表示为 $D^{(\frac12,0)}\oplus D^{(0,\frac12)}$。
以上所有的过程都只用到了Clifford代数的条件，因此对于任意的满足Clifford代数的 $4\times 4$ 矩阵 $\{\vec \alpha,\beta\}$，其都会生成相同的表示 $D^{(\frac12,0)}\oplus D^{(0,\frac12)}$。由于 $\vec M$ 正比于 $\vec \alpha$，故存在相似变换矩阵 $T$，使得：
$$
T\vec\alpha T^{-1}=\alpha_W=\begin{pmatrix}
\vec \sigma&0\\
0&-\vec \sigma
\end{pmatrix}
$$
由于 $\beta$ 与 $\vec \alpha$ 反对易且模方为1，其形式一定为：
$$
T\beta T^{-1}=\beta'=\begin{pmatrix}
0&\lambda\cdot\mathbb 1\\
\lambda^{-1}\cdot\mathbb 1&0
\end{pmatrix}
$$
现在再做一个相似变换：
$$
S=\begin{pmatrix}
\lambda\cdot\mathbb 1&0\\0&\mathbb 1
\end{pmatrix}:\quad\alpha_W\to S\alpha_WS^{-1}=\alpha_W,\quad \beta'\to S\beta'S^{-1}=\begin{pmatrix}
0&\mathbb1\\\mathbb1&0
\end{pmatrix}=\beta_W
$$
这样就证明了任意一组满足Clifford代数的 $4\times 4$ 矩阵都与Weyl表示等价。

## 20.4  $\gamma$ 矩阵

下面我将介绍关于Dirac矩阵的快速运算方法。首先假设Dirac矩阵式是厄米的：
$$
\vec \alpha^\dagger=\vec\alpha,\quad \beta^\dagger=\beta
$$
Weyl表示与Dirac表示都是满足条件的。但这个性质的确依赖于基底。现在定义旋量的“伴随”：
$$
\bar\psi=\psi^\dagger\beta
$$
$\bar\psi$ 称为**Dirac伴随**。矩阵（线性变换）的Dirac伴随定义为：
$$
\bar A\equiv \beta A^\dagger \beta
$$
由于 $\beta$ 的逆即为自身，Dirac伴随与厄米共轭有许多相同的性质。比如
$$
\overline {D(\Lambda)\psi}=\overline\psi\,\overline{D(\Lambda)}
$$
由于 $\psi^\dagger\beta\psi=\bar\psi\psi$ 为Lorentz标量，因此
$$
\Lambda:\bar\psi\psi\to\overline\psi\,\overline{D(\Lambda)}D(\Lambda)\psi=\bar\psi\psi
$$
因此 $\overline{D(\Lambda)}D(\Lambda)=1$，也就是说Lorentz群表示虽然不是厄米的，但在Dirac伴随下是等距的。这称为“**Dirac幺正性**”。

我们前面提到，用Dirac旋量构造的矢量形式为：
$$
U^\mu=(\psi^\dagger\psi,\psi^\dagger\vec\alpha\,\psi)
$$
我们想把所有的 $\psi^\dagger$ 改造成 $\bar\psi$ 的形式，因此在其中插入 $\beta^2=I$：
$$
U^\mu=(\psi^\dagger\beta^2\psi,\psi^\dagger\beta^2\vec\alpha\,\psi)=(\bar\psi\beta\psi,\bar\psi\beta\vec\alpha\,\psi)=\bar\psi\gamma^\mu\psi
$$
其中定义了gamma矩阵 
$$\gamma^\mu=(\gamma^0,\vec\gamma)\equiv(\beta,\beta\vec\alpha)$$这样，原先的厄米共轭全部用Dirac伴随替代，Dirac矩阵也用新的gamma矩阵替代。这样，构造矢量就可以直接看角标了：$\gamma^\mu$ 自带一个矢量指标，因此只用取其关于 $\psi,\bar\psi$ 的二次型即可得到矢量 $U^\mu=\bar\psi\gamma^\mu\psi$。
在标准表示下，gamma矩阵的显式矩阵为：
$$
\gamma^0=\beta=\begin{pmatrix}
0&\mathbb 1\\
\mathbb 1& 0
\end{pmatrix},\quad \gamma^i=\beta\alpha^i=\begin{pmatrix}
0&\sigma^i\\
-\sigma^i& 0
\end{pmatrix}
$$
gamma矩阵是Lorentz变换下的矢量，因此：
$$
\overline {D(\Lambda)}\,\gamma^\mu D(\Lambda)=\Lambda^\mu_\nu\gamma^\nu
$$
Clifford代数现在可以用gamma矩阵简化为：
$$
\{\gamma^\mu,\gamma^\nu\}=2\,\eta^{\mu\nu}\mathbb{1}_{4\times 4}
$$
这里 $\eta^{\mu\nu}=\mathrm{diag}(1,-1,-1,-1)$ 为闵氏度规。
拉格朗日量也可以被简化：
$$
\mathcal L=\pm\left[i\psi^\dagger(\partial_0+\vec \alpha\cdot\nabla)\psi-m\psi^\dagger\beta\psi\right]=\pm[i\bar\psi\beta\partial_0\psi+i\bar\psi\beta\vec\alpha\cdot\nabla\psi-m\bar\psi\psi]=\pm\bar\psi(i\gamma^\mu\partial_\mu-m)\psi
$$
这个形式已经非常简单了，而且一眼就能看出这是一个标量。但是Feynman不满足于此，他观察到很多地方需要将gamma矩阵与别的矢量做内积，因此引入了Feynman斜线符号：
$$
\gamma^\mu a_\mu\equiv a \mkern -9.5 mu /
$$
其有一些性质：
$$
(a \mkern -9.5 mu /)^2=a_\mu a_\nu\gamma^\mu\gamma^\nu=\dfrac12 a_\mu a_\nu\{\gamma^\mu,\gamma^\nu\}=\eta^{\mu\nu}a_\mu a_\nu=a^2
$$
$$
\{a \mkern -9.5 mu /,b\mkern -9.5mu /\}=2a^\mu b_\mu=2a\cdot b
$$
现在Lagrangian可以写为：
$$
\mathcal L=\pm\bar\psi(i\partial\mkern-9.5mu/-m)\psi
$$
Dirac方程即为：
$$
(i\partial\mkern-9.5mu/-m)\psi=0
$$
这个形式真是非常简洁了。最后证明一下由Dirac方程可以推出KG方程：左作用 $(i\partial\mkern-9.5mu/+m)$ 可得：
$$
(i\partial\mkern-9.5mu/+m)(i\partial\mkern-9.5mu/-m)\psi=-[\partial\mkern-9.5mu/^2+m^2]=-(\,\square^2+m^2)\psi=0
$$
正是质量为 $m$ 的Klein-Gordan方程。

## 20.5 旋量的双线性型

我们看到，$\bar\psi\psi$ 是Lorentz标量，而 $\bar\psi\gamma^\mu\psi$ 是Lorentz矢量。那么，其他的双线性型呢？我们将会看到，16个线性独立的双线性型可以分类为：标量（1），极矢量（4），反对称二阶张量（6），赝矢量（4）、赝标量（1）。
首先来考虑比较好处理的**宇称**，Dirac旋量在宇称作用下的变换关系为：
$$
P:\psi(\vec x,t)\to\beta\psi(-\vec x,t)=\gamma^0\psi(-\vec x,t)
$$
gamma矩阵的Dirac伴随性质为：
$$
\overline{\gamma^0}=\beta\beta^\dagger\beta=\gamma^0,\quad \overline{\gamma^i}=\beta\vec\alpha^\dagger\beta^\dagger\beta=\beta\vec\alpha=\gamma^i
$$
因此gamma矩阵是**Dirac自伴**的。故
$$
\overline{\gamma^0\psi(-\vec x,t)}=\bar\psi(-\vec x,t)\gamma^0
$$
因此
$$
P:\bar\psi\psi(\vec x,t)\to\bar\psi\gamma^0\gamma^0\psi(-\vec x,t)=\bar\psi\psi(-\vec x,t)
$$
因此这是一个（真）标量 (scalar)。另一方面：
$$
P:\bar\psi\gamma^\mu\psi(\vec x,t)\to\bar\psi\gamma^0\gamma^\mu\gamma^0\psi(-\vec x,t)=\begin{cases}
\bar\psi\gamma^0\psi(-\vec x,t),\quad \mu=0\\
-\bar\psi\gamma^i\psi(-\vec x,t),\quad\mu\ne 0
\end{cases}
$$
其中用到了 $\{\gamma^\mu,\gamma^0\}=2\delta^{\mu 0}$。因此宇称会反转矢量的空间部分，故这是一个**极矢量** (polar vector)。
接下来，我们考虑二阶张量 $\bar\psi\gamma^\mu\gamma^\nu\psi$，其可分解为对称与反对称部分：
$$
\bar\psi\gamma^\mu\gamma^\nu\psi=\dfrac12\bar\psi\{\gamma^\mu,\gamma^\nu\}\psi+\dfrac12\bar\psi[\gamma^\mu,\gamma^\nu]\psi=\eta^{\mu\nu}\bar\psi\psi+\dfrac12\bar\psi[\gamma^\mu,\gamma^\nu]\psi
$$
我们按习惯定义反对称部分：
$$
\sigma^{\mu\nu}\equiv\dfrac i2
[\gamma^\mu,\gamma^\nu]$$
$\sigma^{\mu\nu}/2$ 其实就是在[[Coleman QFT - Lecture 18. Lorentz群的表示]]中说明的一般的Lorentz变换的生成元 $J^{\mu\nu}$ 的表示。这源于 $\gamma^\mu$ 的矢量性：
$$
\overline {D(\Lambda)}\,\gamma^\mu D(\Lambda)=D^{-1}(\Lambda)\,\gamma^\mu D(\Lambda)=\Lambda^\mu_\nu\gamma^\nu
$$
由
$$
D(\Lambda(\epsilon_{\mu\nu}))=\exp\left(-\dfrac{i}{2}\epsilon_{\mu\nu}J^{\mu\nu}\right)
$$
应用无穷小变换 $\Lambda^\mu_\nu=I+\epsilon^\mu_\nu$ 得到：
$$
[J^{\rho\sigma},\gamma^\mu]=i(\eta^{\mu\rho}\gamma^\sigma-\eta^{\mu\sigma}\gamma^\rho)
$$
进行计算：
$$
[\left[\gamma^\rho,\gamma^\sigma\right],\gamma^\mu]=\gamma^\rho\{\gamma^\sigma,\gamma^\mu\}-\{\gamma^\rho,\gamma^\mu\}\gamma^\sigma-\gamma^\sigma\{\gamma^\rho,\gamma^\mu\}+\{\gamma^\sigma,\gamma^\mu\}\gamma^\rho=4(\eta^{\mu\rho}\gamma^\sigma-\eta^{\mu\sigma}\gamma^\rho)
$$
因此 $J^{\mu\nu}=\sigma^{\mu\nu}/2$ 满足条件。不管怎样，$\bar\psi\sigma^{\mu\nu}\psi$ 是一个Lorentz变换下的**反对称二阶张量**。
那如果有三个gamma矩阵呢？其会不会组合出三阶张量呢？这是不会的，或者说你的确构造出了一个三阶张量，但是其可以分解为更低阶的张量。这源于**四阶全反对称张量** $\epsilon^{\mu\nu\rho\sigma}$ 是Lorentz变换下的不变量。因此我们可以定义下面的对象：
$$
\gamma_5\equiv i\gamma^0\gamma^1\gamma^2\gamma^3=\begin{pmatrix}
0&1\\1&0
\end{pmatrix}
$$
其性质为
$$
(\gamma_5)^2=1,\quad \gamma_5^\dagger=\gamma_5=-\overline{\gamma_5},\quad\{\gamma_5,\gamma^\mu\}=0
$$
$i\bar\psi\gamma_5\psi$ 是一个Lorentz标量，但是是一个**赝标量** (pseudoscalar)。因为
$$
P:i\bar\psi\gamma_5\psi\to i\bar\psi\gamma^0\gamma_5\gamma^0\psi=-i\bar\psi\gamma_5\psi
$$
因此我们说明了四个gamma矩阵凑出的四阶张量实际上会分解出一个赝标量。回到三个gamma矩阵的情形，其一定可以写为
$$
\bar\psi\gamma^\mu\gamma_5\psi
$$
这是Lorentz变换下的矢量。其在宇称下的变换为：
$$
P:\bar\psi\gamma^\mu\gamma_5\psi\to\bar\psi\gamma^0\gamma^\mu\gamma_5\gamma^0\psi=\begin{cases}
-\bar\psi\gamma^0\gamma_5\psi,\quad \mu=0\\
\bar\psi\gamma^i\gamma_5\psi,\quad\mu\ne 0
\end{cases}
$$
反而是时间分量反号而空间分量不变，因此这是一个**赝矢量** (pseudovector)。现在，我们完成了对双线性型的全部分类，列表如下：

<div align="center">
  <img src="./pictures/Pasted image 20260126175542.png" width="900">
</div>

任何一个双线性型均可以分解为上面这五种类型的线性组合。

## 20.6 正交性与完备性

最后，我们来看Dirac方程的平面波解具有的正交性与完备性，这在后一章经常会用到。首先，我们在20.2节构造了下面的矢量：
$$
(u_p^{(r)\dagger}u_p^{(s)},u_p^{(r)\dagger}\vec\alpha \,u_p^{(s)})=(v_p^{(r)\dagger}v_p^{(s)},v_p^{(r)\dagger}\vec\alpha \,v_p^{(s)})=2(E_p,\vec p)\delta^{rs}
$$
这可以用gamma矩阵表示为
$$
\bar u_\vec p^{(r)}\gamma^\mu u_\vec p^{(s)}=\bar v_\vec p^{(r)}\gamma^\mu v_\vec p^{(s)}=2p^\mu\delta^{rs}
$$
将其与 $p_\mu$ 做内积得到：
$$
\bar u_\vec p^{(r)}p\mkern-8.5mu/ u_\vec p^{(s)}=\bar v_\vec p^{(r)}p\mkern-8.5mu/ v_\vec p^{(s)}=2m^2\delta^{rs}
$$
利用Dirac方程：
$$
(p\mkern-8.5mu/-m)u_\vec p^{(r)}=0,\quad (p\mkern-8.5mu/+m)v_\vec p^{(s)}=0
$$
得到
$$
\bar u_\vec p^{(r)}u_\vec p^{(s)}=2m\delta^{rs},\quad \bar v_\vec p^{(r)}v_\vec p^{(s)}=-2m\delta^{rs}
$$
那混合积 $\bar v_\vec p^{(r)}u_\vec p^{(s)}$ 和 $\bar u_\vec p^{(r)}v_\vec p^{(s)}$ 呢？利用
$$
m\bar u_\vec p^{(r)}v_\vec p^{(s)}=\bar u_\vec p^{(r)}p\mkern-8.5mu /v_\vec p^{(s)}=\bar u_\vec p^{(r)}(-m)v_\vec p^{(s)}\Rightarrow \bar u_\vec p^{(r)}v_\vec p^{(s)}=0
$$
因此
$$
\bar u_\vec p^{(r)}v_\vec p^{(s)}=\bar u_\vec p^{(r)}\gamma^\mu v_\vec p^{(s)}=\bar v_\vec p^{(r)}u_\vec p^{(s)}=\bar v_\vec p^{(r)}\gamma^\mu u_\vec p^{(s)}=0
$$
这样，我们知道四个平面波解是**Dirac正交**的。接下来研究完备性，考虑下面的定义：
$$
P_u\equiv\dfrac{1}{2m}\sum_{r=1}^2u_\vec p^{(r)}\bar u_\vec p^{(r)},\quad P_v\equiv\dfrac{1}{2m}\sum_{r=1}^2v_\vec p^{(r)}\bar v_\vec p^{(r)}
$$
可验证：
$$
P_u u_\vec p^{(s)}=\dfrac{1}{2m}\sum_{r=1}^2u_\vec p^{(r)}\underbrace{\bar u_\vec p^{(r)}u_\vec p^{(s)}}_{2m\delta^{rs}}=u_\vec p^{(s)},\quad P_u v_\vec p^{(s)}=0,\quad P_v u_{\vec p}^{(s)}=0,P_v v_\vec p^{(s)}=v_\vec p^{(s)}
$$
因此 $P_u,P_v$ 称为**旋量投影算符**。具体计算表明：
$$
P_u=\dfrac{1}{2m}(p\mkern-8.5mu /+m),\quad P_v=-\dfrac{1}{2m}(p\mkern-8.5mu /-m)
$$
这时上面的投影关系就很显然了，只需代入Dirac方程即可看出。做一些性质的检验：
$$
P_u+P_v=\dfrac{1}{2m}(p\mkern-8.5mu /+m-p\mkern-8.5mu /+m)=1
$$
$$
P_u^2=\dfrac{1}{4m^2}(p\mkern-8.5mu /^2+m^2+2mp\mkern-8.5mu /)=\dfrac{1}{4m^2}(2m^2+2mp\mkern-8.5mu /)=\dfrac{1}{2m}(p\mkern-8.5mu /+m)=P_u
$$
$$
P_v^2=\dfrac{1}{4m^2}(p\mkern-8.5mu /^2+m^2-2mp\mkern-8.5mu /)=\dfrac{1}{4m^2}(2m^2-2mp\mkern-8.5mu /)=-\dfrac{1}{2m}(p\mkern-8.5mu /-m)=P_v
$$

---



