---
title: "Coleman QFT Lecture 29: 推广泛函积分方法"
---

在上一章[[Coleman QFT - Lecture 28. 泛函积分与Feynman图]]中，我介绍了简单标量场理论的泛函积分方法，并证明了其正确性。同时在最后一节应用到有质量矢量场上，得到了正确的传播子。但我们还没有证明泛函积分方法对于一般的矢量场理论是否适用，这需要先从 $\mathcal L$ 中消除自由度才能写出Hamiltonian形式的积分。本章我们还要研究标量电动力学，其需要处理涉及到导数耦合的理论。另外，我还需介绍如何将泛函积分方法应用于费米场，毕竟我们并不知道费米场的经典形式是什么。我们将用Grassmann变量（反交换的c数）来建模，并学习如何用它们进行微积分运算。
## 29.1 费米场的泛函积分方法

费米场需要满足**基本反对易关系**，因此其经典对应物不会是普通的数，而是称为Grassmann变量的反对易的数。引入一系列Grassmann变量的记号：
$$
\eta,\xi,\bar\eta,\bar\xi,\cdots
$$
任意两个Grassmann变量都是反对易的：
$$
\{\eta,\xi\}=0,\quad \{\bar\eta,\xi\}=0,\quad\cdots
$$
因此其推论就是任意Grassmann变量的平方为零：
$$
\eta^2=\bar\eta^2=\xi^2=\bar\xi^2=0,\cdots
$$
作为结果，其指数则为：
$$
\mathrm{e}^\eta=1+\eta+\dfrac{1}{2!}\eta^2+\cdots=1+\eta
$$
接下来，我将给出一些其积分满足的先验条件：
1. 线性性：
$$
\int \mathrm{d}\eta\,(\alpha F_1(\eta)+\beta F_2(\eta))=\pm\alpha\int\mathrm{d}\eta\,F_1(\eta)\pm\beta\int\mathrm{d}\eta\,F_2(\eta)
$$
这里如果 $\alpha,\beta$ 为普通的数，则后面都取正号。如果其为Grassmann变量，则由于其与 $\mathrm{d}\eta$ 交换，因此要变成负号。
2. 平移不变性：
$$
\int\mathrm{d}\eta\,F(\eta)=\int\mathrm{d}\eta\,F(\eta+\xi)
$$
这就是普通积分换元的推广。
3. 归一化：
$$
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta \,\mathrm{e}^{\bar\eta\eta}=1
$$
这实际是Gaussian的推广。

我将说明这些要求已经唯一确定下面形式的积分：
$$
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\,f(\eta,\bar\eta)
$$
由于 $f$ 可以做Taylor展开，且只有头几项会被保留（平方就变成零），因此实际上只需处理下面四项的积分：
$$
\{1,\eta,\bar\eta,\bar\eta\eta\}
$$
由条件2：
$$
\int\mathrm{d}\eta\,g(\eta)=\int\mathrm{d}\eta\,g(\eta+\xi)=\int\mathrm{d}\eta\,(A+B\eta)+\int\mathrm{d}\eta\,(A+B\eta+B\xi)
$$
因此由条件1得到：
$$
B\xi\int\mathrm{d}\eta=0\Rightarrow\int\mathrm{d}\eta=0,\quad \int\mathrm{d}\bar\eta=0
$$
因此前三项：
$$
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\,1=\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\,\eta=\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\,\bar\eta=0
$$
因为总存在一个变量的被积函数为1。接下来，由条件3：
$$
1=\int\mathrm{d}\eta\,\mathrm{d}\bar\eta \,\mathrm{e}^{\bar\eta\eta}=\int\mathrm{d}\eta\,\mathrm{d}\bar\eta \,{\bar\eta\eta}=\left[\int\mathrm{d}\eta\,\eta\right]^2
$$
假设 $\int\mathrm{d}\eta\,\eta>0$，因此
$$
\int\mathrm{d}\eta\,\eta=1,\quad \int\mathrm{d}\eta\,\mathrm{d}\bar\eta \,{\bar\eta\eta}=1
$$
从这里可以看出，Grassmann变量的积分规则和导数规则是一样的。Grassmann变量的Gauss积分为：
$$
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\,\mathrm{e}^{a\bar\eta\eta}=\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\,(1+a\bar\eta\eta)=a
$$
现在可以推广至多维情形，一般的二次型：
$$
(\bar\eta,A\eta)=\sum_{i,j=1}^n\bar\eta_iA_{ij}\eta_j\to \sum_{i=1}^na_i\bar\eta_i\eta_i
$$
最后做了一个正交对角化。定义多维积分测度：
$$
(\mathrm{d}\eta)(\mathrm{d}\bar\eta)\equiv\mathrm{d}\eta_1\mathrm{d}\bar\eta_1\cdots\mathrm{d}\eta_n\mathrm{d}\bar\eta_n=\prod_{r=1}^n\mathrm{d}\eta_r\mathrm{d}\bar\eta_r
$$
这里没有什么 $2\pi$。一般的Gauss积分就可以写为：
$$
\int(\mathrm{d}\eta)(\mathrm{d}\bar\eta)\,\mathrm{e}^{(\bar\eta,A\eta)}=\int(\mathrm{d}\eta)(\mathrm{d}\bar\eta)\,\prod_r\mathrm{e}^{a_r \bar\eta_r\eta_r}=\mathrm{det}\,A
$$
现在的行列式就直接在分子上。与一般复变量的Gaussian比较：
$$
\int(\mathrm{d}\vec z^*)(\mathrm{d}\vec z)\,\mathrm{e}^{-(\vec z^*,A\vec z)}=(\mathrm{det}\,A)^{-1},\quad (\mathrm{d}z)\equiv\dfrac{\mathrm{d}^nz}{(2\pi)^n}
$$
实Grassmann变量的Gaussian则为：
$$
\int(\mathrm{d}\theta)\,\mathrm{e}^{\frac12(\theta,A\theta)}=\mathrm{det}\,A
$$
这与普通实变量的Gaussian类似：
$$
\int(\mathrm{d}\vec x)\,\mathrm{e}^{-\frac12(\vec x,A\vec x)}=(\mathrm{det}\,A)^{-1/2}
$$
这样，我们就知道如何处理Fermi场的经典情形。考虑一组Fermi场：
$$
\psi=\begin{pmatrix}
\psi_1\\\psi_2\\\vdots\\\psi_N
\end{pmatrix},\quad\bar\psi=(\bar\psi_1,\bar\psi_2,\cdots,\bar\psi_N)
$$
考虑某一个包含这些Fermi场的理论：
$$
S=\int\mathrm{d}^4x\,[\bar\psi(x)A(\phi)\psi(x)]+S_B(\phi)=(\bar\psi,A(\phi)\psi)+S_B[\phi(x)]
$$
这就是理论的一般形式。泛函积分方法说，想要得到生成泛函，只用将经典的 $\mathrm{e}^{iS}$ 对涉及到的场做泛函积分即可。让我们先不管玻色场，来看对Fermi场的积分。上面的公式告诉我们：
$$
N\int(\mathrm{{d}\psi})(\mathrm{d}\bar\psi)\,\mathrm{e}^{iS}\propto \mathrm{det}\,A
$$
因此生成泛函就是：
$$
Z\propto\int(\mathrm{d}\phi)\,\mathrm{det}\,A\times\mathrm{e}^{iS_B[\phi]}=\int(\mathrm{d}\phi)\,\exp(iS_B[\phi]+\,\mathrm{Tr}\,(\ln A))
$$
这里使用了公式：
$$
\ln(\mathrm{det}\,A)=\mathrm{Tr}\,(\ln A)
$$
$A(\phi)$ 仍是一个场变量，因此 $\mathrm{det}\, A$ 称为**泛函行列式**。现在，相当于我们在处理一个玻色场理论，等效作用量就是：
$$
S_{\text{eff}}=S_B[\phi]-i\,\mathrm{Tr}\,(\ln A(\phi))
$$
接下来我们来研究 $\mathrm{Tr}\,(\ln A(\phi))$ 的物理意义。一般而言，$A$ 可分解为自由部分与相互作用部分：
$$
A=A_0+V=i\partial\mkern-9mu/-m+V
$$
将其做微扰展开：
$$
\begin{align}
\mathrm{Tr}\,(\ln (A_0+V))&=\mathrm{Tr}\,(\ln A_0)+\mathrm{Tr}\,(\ln (1+A_0^{-1}V))\\
&=\mathrm{Tr}\,(\ln A_0)+\sum_{n=1}^\infty\dfrac{(-1)^{n+1}}{n!}\mathrm{Tr}[(A_0^{-1}V)^n]
\end{align}
$$
第一项可被吸收进归一化因子中，而后面的 $A_0^{-1}$ 就是Dirac传播子，而 $V$ 则代表了耦合顶点，因此其对应到Feynman图上就是一系列的闭合Fermi圈。（Fermi loop会多出一个负号）

<div align="center">
  <img src="./pictures/Pasted image 20260223122029.png" width="600">
</div>

由于我们一开始就没考虑源的作用，因此不会出现外线，得到的都是真空极化图。如果考虑源的作用：
$$
Z[\eta,\bar\eta,J]=\int(\mathrm{d}\psi)(\mathrm{d}\bar\psi)(\mathrm{d}\phi)\,\mathrm{e}^{iS+i\bar\eta\psi+i\eta\bar\psi+iJ\phi}
$$
这就会产生（Fermi或Bose）外线。

## 29.2 导数耦合的泛函积分方法

到这里，我将使用我们更为熟悉的粒子语言而不是场论语言。考虑一个一般的Lagrangian：
$$
 L=\dfrac12\dot q^a A_{ab}\dot q^b+B_a(q)\dot q^a-V(q)+J_a q^a
$$
注意，路径积分能处理的是二次式。我将先直接写出这种情形下的泛函积分公式：
$$
Z[J]
=N\int\prod_a(\mathrm{d}q^a)(\mathrm{det}\,A)^{1/2}\mathrm{e}^{iS}
$$
这里比起一开始的公式多出了一个 $(\mathrm{det}\,A)^{1/2}$ 因子。实际上，上面的公式式Lagrangian形式的，还有一个Hamiltonian形式的版本：
$$
S=\int\mathrm{d}t\,L=\int\mathrm{d}t\,(p_a\dot q^a-H)\equiv S_H
$$
$$
\boxed{Z[J]
=N\int\prod_a(\mathrm{d}q^a)(\mathrm{d}p_a)\,\mathrm{e}^{iS_H}}
$$
其正确性我留到后面给出证明。但是这两种形式的等价性是显然的，只需完成对 $p_a$ 的泛函积分即可。由于
$$
p_a=\dfrac{\partial L}{\partial \dot q^a}=A_{ab}\dot q^b+B_a\Rightarrow \dot q^a=(A^{-1})^{ab}(p_a-B_b)
$$
$$
H=\dfrac12p_a(A^{-1})^{ab}p_b+(\text{terms at most linear in $p$'s})
$$
因此对 $p$ 的泛函积分会给出因子 $(\mathrm{det}\,A)^{1/2}$。

Lagrangian形式的泛函积分公式告诉我们，我们不需要将Lagrangian形式的相互作用 $\mathcal L_I$ 先化为 $\mathcal H_I$ 再用Dyson公式计算，而是可以直接计算作用量
$$
S=\int\mathrm d^4x\,\mathcal L
$$
再计算泛函积分即可。因此，对于导数作用，例如 $\partial_\mu\phi$，其在自由场表达式中就相当于乘上一个 $\pm ik_\mu$（$+$ 对于出射，$-$ 对于入射）。因此我们一开始使用的“天真的”导数耦合规则的确是正确的。$\mathcal H_I\ne -\mathcal L_I$ 的问题与 $\partial_\mu$ 与时序积不对易的问题的确互相抵消。

一般而言，我们更喜欢使用Lagrangian形式的泛函积分公式，因为理论一般给出的都是Lagrangian。但是它有一个缺陷：由于因子 $(\mathrm{det}\,A)^{1/2}$ 的存在，其不是显式的指数形式，因此没办法直接写出对应的Feynman规则。解决的其中一种办法就是利用
$$
\mathrm{det}\,A=\mathrm{e}^{\mathrm{Tr}\,(\ln A)}
$$
把它强行塞进指数项中，再做微扰展开。但这种方法存在发散与非局域化的问题。下面我们将介绍另一种方法。

## 29.3 鬼场

Lagrangian形式的泛函积分公式为：
$$
Z[J]
=N\int\prod_a(\mathrm{d}q^a)(\mathrm{det}\,A)^{1/2}\mathrm{e}^{iS}
$$
我们想丢掉 $(\mathrm{det}\,A)^{1/2}$ 因子，为此，引入一个**鬼场(ghost field)**，其为Fermi场 $\eta^a,\bar\eta^a$ ：
$$
Z[J]
=N\int\prod_a(\mathrm{d}q^a)(\mathrm{d}\eta^a)(\mathrm{d}\bar\eta^a)\mathrm{e}^{iS_{\text{eff}}},\quad S_{\text{eff}}\equiv S+\int\mathrm{d}^4x\,\bar\eta^a(A^{1/2})_{ab}\eta^b
$$
这里仍然是使用了Grassmann变量的Gauss积分公式：
$$
\int(\mathrm{d}\eta)(\mathrm{d}\bar\eta)\,\mathrm{e}^{(\bar\eta,A\eta)}=\mathrm{det}\,A
$$
这样，我的理论中就多出了一种Fermi场，其完全是由于计算需要而引入的，并不是有物理实在的场，因此称为**鬼场**。我们来看一个例子：
在[[Coleman QFT - Problem 8]]中，我们研究了一个自由标量场理论的重定义问题。考虑一个有外源耦合的自由标量场：
$$
\mathcal L=\dfrac12(\partial_\mu\phi)^2-\dfrac12\mu^2\phi^2+J\phi
$$
定义另一个场 $A$：
$$
\phi=A+\dfrac12 gA^2,\quad \partial_\mu\phi=(1+gA)\partial_\mu A
$$
由LSZ定理，这不会影响散射矩阵。新的Lagrangian写为
$$
\mathcal L=\dfrac12(\partial_\mu A)^2(1+gA)^2-\dfrac12\mu^2(A+\dfrac12 gA^2)^2+J(A+\dfrac12 gA^2)
$$
这里我们尝试用泛函积分方法导出该理论的Feynman规则，并验证 $O(g)$ 阶散射振幅为零。首先，由于二次导数项乘了一个额外的因子 $(1+gA)^2$ ，因此我们引入鬼场：
$$
\mathcal L_{\text{eff}}=\mathcal L+\bar\eta\eta(1+gA)
$$
这样我们的理论中有两种场，标量场 $A$ 的传播子就是普通的 $\dfrac{i}{k^2-\mu^2+i\epsilon}$，而鬼场没有二次项，因此传播子就是 $i$。鬼场是一个无自旋的场，但遵从Fermi统计。

<div align="center">
  <img src="./pictures/Pasted image 20260224103117.png" width="350">
</div>

$O(g)$ 阶及以下的相互作用有五种：
$$
JA,\quad gA(\partial_\mu A)^2,\quad -\dfrac12 g\mu^2A^3,\quad \dfrac12 gJA^2,\quad gA\bar\eta\eta
$$
现在我要将其组装为 $O(g)$ 阶的真空极化振幅。后四种只能用一次，多余的外线则用 $JA$ 抵消，可以得到下面四张图：

<div align="center">
  <img src="./pictures/Pasted image 20260224104953.png" width="750">
</div>

这里的每张图都是发散的（其在大 $k$ 下表现为积分 $\int\mathrm{d}^4 k/{k^2}$ ），但我们只需验证被积函数能否互相抵消。将公有的如 $\tilde J(0)$ 或 $i$ 因子去除后
第一幅图：$3$ 来源于 $A^3$ 的不可区分性。
$$
-\dfrac12\mu^2\cdot 3\cdot \dfrac{i}{-\mu^2}i\dfrac{i}{k^2-\mu^2+i\epsilon}
$$
第二幅图：$k^2$ 来源于导数耦合，由于一个入射一个出射，因此因子就是 $ik\cdot (-ik)=k^2$。
$$
\dfrac{i}{-\mu^2}i\dfrac{ik^2}{k^2-\mu^2+i\epsilon}
$$
第三幅图：
$$
\dfrac12\dfrac{i}{k^2-\mu^2+i\epsilon}
$$
第四幅图：
$$
(-1)i\dfrac{i}{-\mu^2}i
$$
实际上总的表达式为：
$$
ig\tilde J(0)\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\left\{-\dfrac32\mu^2\dfrac{i}{-\mu^2}i\dfrac{i}{k^2-\mu^2+i\epsilon}+\dfrac{i}{-\mu^2}i\dfrac{ik^2}{k^2-\mu^2+i\epsilon}+\dfrac12\dfrac{i}{k^2-\mu^2+i\epsilon}-i\dfrac{i}{-\mu^2}i\right\}=0
$$
这正是我们期待的。

## 29.4 证明Hamiltonian形式的泛函积分公式

Hamiltonian形式：
$$
Z[J]
=N\int(\mathrm{d}\phi)(\mathrm{d}\pi)\,\mathrm{e}^{iS_H},\quad S_H=\int\mathrm{d}^4x\,(\pi\dot \phi-\mathcal H)
$$
我们要证明其与Dyson公式等价。为简单起见，考虑下面的简单标量场理论：
$$
\mathcal H=\dfrac12\pi^2+\dfrac12(\nabla\phi)^2+\dfrac12\mu^2\phi^2+\mathcal H'(\pi,\phi)-J\phi-K\pi
$$
与动量耦合的项 $K\pi$ 后面就会看到其作用，最后将其取为零即可。生成泛函：
$$
\begin{align}
Z[J,K]=\langle 0|S|0\rangle_{J,K}&\propto\langle 0|T\exp\left\{-i\int\mathrm{d}^4x\,[\mathcal H'(\phi_I,\pi_I)-J\phi_I-K\pi_I]\right\}|0\rangle\\
&=\exp\left\{-i\int\mathrm{d}^4y\,\mathcal H'\left(-i\dfrac{\delta}{\delta J(y)},-i\dfrac{\delta}{\delta K(y)}\right)\right\}\langle 0|T\exp\left\{i\int\mathrm{d}^4x\,[J\phi_I+K\pi_I]\right\}|0\rangle
\end{align}
$$
现在转向泛函积分。
$$
\begin{align}
&\int(\mathrm{d}\phi)(\mathrm{d}\pi)\,\exp\left\{i\int\mathrm{d}^4x\,[\pi\dot\phi-\mathcal H]\right\}\\&=\exp\left\{-i\int\mathrm{d}^4y\,\mathcal H'\left(-i\dfrac{\delta}{\delta J(y)},-i\dfrac{\delta}{\delta K(y)}\right)\right\}\times\int(\mathrm{d}\phi)(\mathrm{d}\pi)\exp\left\{i\int\mathrm{d}^4x\left[\pi\dot\phi-\left(\dfrac12\pi^2+\dfrac12(\nabla\phi)^2+\dfrac12\mu^2\phi^2\right)+J\phi+K\pi\right]\right\}
\end{align}
$$
比较两个结果，我们需要证明的就是：
$$
\langle 0|T\exp\left\{i\int\mathrm{d}^4x\,[J\phi_I+K\pi_I]\right\}|0\rangle\overset{?}{=}\int(\mathrm{d}\phi)(\mathrm{d}\pi)\exp\left\{i\int\mathrm{d}^4x\left[\pi\dot\phi-\left(\dfrac12\pi^2+\dfrac12(\nabla\phi)^2+\dfrac12\mu^2\phi^2\right)+J\phi+K\pi\right]\right\}
$$
显然，后面关于 $\pi$ 的积分是一个Gaussian：
$$
Q(\pi)=\dfrac12\pi^2-\pi\dot\phi-K\pi
$$
注意，这里无需代入 $\dot\phi=\pi$ ，因为这是由运动方程决定的。而泛函积分中 $\dot\phi$ 和 $\pi$ 是独立的变量，相空间Lagrangian $\pi\dot\phi-\mathcal H$ 应视为 $\pi,\dot\phi,\phi$ 的函数。其极值点为：
$$
\bar\pi=\dot \phi+K,\quad Q(\bar\pi)=-\dfrac12(\dot\phi+K)^2
$$
因此
$$
\mathrm{RHS}=\int(\mathrm{d}\phi)\exp\left\{i\int\mathrm{d}^4x\left[\dfrac12\dot\phi^2-\dfrac12(\nabla\phi)^2-\dfrac12\mu^2\phi^2+J\phi+K\dot\phi+\dfrac12K^2\right]\right\}
$$
这样就回到了对 $\phi$ 的单变量泛函积分。通过分部积分，$K\dot\phi\simeq -\dot K\phi$ ，因此现在就相当于一个外源为 $J-\dot K$ 耦合的自由标量场理论：
$$
\mathrm{RHS}=\exp\left\{-\dfrac12\int\mathrm{d}^4x\,\mathrm{d}^4y\left[(J(x)-\dot K(x))\Delta_F(x-y)(J(y)-\dot K(y))\right]\right\}\mathrm{e}^{\frac i2\int\mathrm{d}^4x\,K^2(x)}
$$
另一方面，$\langle 0|T\exp\left\{i\int\mathrm{d}^4x\,[J\phi_I+K\pi_I]\right\}|0\rangle$ 就是一个外源作用的Model 1模型。因此
$$
\langle 0|T\exp\left\{i\int\mathrm{d}^4x\,[J\phi_I+K\pi_I]\right\}|0\rangle=\exp\left\{-\int\mathrm{d}^4x\,\mathrm{d}^4y\left[\dfrac12J(x)J(y)\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\phi_I(x) \phi_I} (y)+J(x)\pi(y)\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\phi_I(x) \pi_I} (y)+\dfrac12K(x)K(y)\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\pi_I(x) \pi_I} (y)\right]\right\}
$$
因此我们要计算三个缩并。其中 $\pi_I=\partial_0\phi_I$。首先：
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\phi_I(x) \phi_I} (y)=\Delta_F(x-y)=\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
然后
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\phi_I(x) \pi_I} (y)=\partial_0^y\Delta_F(x-y)
$$
因为 $\phi_I$ 的等时对易子为零，因此一次导数可以与时序积交换。最后，由于
$$
\partial_0^xT[\phi_I(x)\pi_I(y)]=T[\pi_I(x)\pi_I(y)]+\delta(x^0-y^0)[\phi_I(\vec x,t),\pi_I(\vec y,t)]=T[\pi_I(x)\pi_I(y)]+i\delta^{(4)}(x-y)
$$
因此
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\pi_I(x) \pi_I} (y)=\partial_0^x\partial_0^y\Delta_F(x-y)+i\delta^{(4)}(x-y)
$$
全部代入得到：
$$
\begin{align}
&\langle 0|T\exp\left\{i\int\mathrm{d}^4x\,[J\phi_I+K\pi_I]\right\}|0\rangle\\&=\exp\left\{-\int\mathrm{d}^4x\,\mathrm{d}^4y\left[\dfrac12J(x)J(y)\Delta_F(x-y)+J(x)K(y)\partial_0^x\Delta_F(x-y)+\dfrac12K(x)K(y)(\partial_0^x\partial_0^y\Delta_F(x-y)+i\delta^{(4)}(x-y))\right]\right\}\\
&\simeq\exp\left\{-\int\mathrm{d}^4x\,\mathrm{d}^4y\left[\left(\dfrac12J(x)J(y)-J(x)\dot K(y)+\dot K(x)\dot K(y)\right)\Delta_F(x-y)-\dfrac i2K(x)K(y)\delta^{(4)}(x-y))\right]\right\}\\
&=exp\left\{-\dfrac12\int\mathrm{d}^4x\,\mathrm{d}^4y\left[(J(x)-\dot K(x))\Delta_F(x-y)(J(y)-\dot K(y))\right]\right\}\mathrm{e}^{\frac i2\int\mathrm{d}^4x\,K^2(x)}
\end{align}
$$
正是泛函积分的结果。这样我们就证明了Hamiltonian形式的泛函积分公式。（可自行推广至其他类型的场）

## 29.5 去除约束变量

在很多时候我们会遇到约束方程，其与时间演化无关。例如，最典型的是Proca方程：
$$
\mu^2A^\mu=\partial_\nu F^{\mu\nu}
$$
其 $\mu=0$ 分量给出方程：
$$
\mu^2 A^0=\partial_i F^{0i}
$$
这告诉我们 $A^0$ 不是独立的，而是可以由 $F^{i0}$ 确定的。这是一个**约束方程**。在Lagrangian中不显含 $\partial_0 A^0$，因此 $A^0$ 的EL方程不含时间导数。
考虑另一个例子：
$$
L=L_1(q,\dot q)+\dfrac12 ay^2+b(q)y
$$
这里 $y$ 就是一个约束变量，其EL方程给出：
$$
ay=-b(q)\Rightarrow y=-\dfrac ba
$$
将其代会原Lagrangian以消除约束变量，我们得到等效Lagrangian：
$$
\bar L=L_1-\dfrac{b^2}{2a}
$$
由于约束变量满足的约束方程本质上就是极值方程：
$$
\dfrac{\partial L}{\partial y}=0
$$
其对应于二次式取极值，因此一个重要的观察是，其Gauss积分剩下的部分正是极值的指数。因此在差一个归一化常数因子的意义下，有
$$
\int(\mathrm{d}q)(\mathrm{d}y)\exp\left\{i\int\mathrm{d}t\,L\right\}\sim\int(\mathrm{d}q)\exp\left\{i\int\mathrm{d}t\,\bar L\right\}
$$
因此消除约束变量的方法就是直接完成其泛函积分。反过来说，**泛函积分理论是不区分动力学变量与约束变量的**。这又解决了一个技术问题，在正则量子化体系中，我们必须小心的区分两者，只能规定动力学变量与其正则动量间的对易关系，同时还要将所有约束变量去除。但在泛函积分理论中，我们不需要管这些，直接对所有场做泛函积分，就能得到正确的生成泛函。（这样说还是有点问题，因为对于规范理论，实际上有许多冗余自由度，这时就要用Faddeev-Popov程序进行量子化了）
另一方面，如果二次项系数 $a$ 实际与动力学变量有关，这样积出来的 $\mathrm{det}\, A$ 就不能简单归到系数中。我们又需要引入鬼场来将其放到指数上去。简单写一下，多变量情形下：
$$
L=\dfrac12\sum_{a,b}y^aA_{ab}y^b+\sum_a b_ay^a+L_1(q)
$$
如果 $A_{ab}=A_{ab}(q)$ ，则去除约束变量 $y$ 后的结果就是：
$$
\int(\mathrm{d}y)(\mathrm{d}\eta)(\mathrm{d}\bar\eta)\exp\left\{i\int\mathrm{d}t\left[L+\bar \eta^aA_{ab}^{1/2}\eta^b\right]\right\}
$$
## 29.6 有质量介子QED的泛函积分量子化

现在，经过介绍上面处理技术问题的泛函积分办法后，我们能来回答[[Coleman QFT - Lecture 27. 电磁相互作用与最小耦合]]最后一节提出的问题了：为什么有这么多的技术问题，我们还能用天真的Feynman规则？
旋量QED的作用量为：
$$
S_{2nd}=\int\mathrm{d}^4x\left\{-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)^2+\dfrac12\mu^2A_\nu A^\nu+\bar\psi(i\partial\mkern-9.5mu/-eA\mkern-9mu/-m)\psi\right\}
$$
这称为**二阶作用量**，因为其中第一项是二阶导数，其为场 $A_\mu$ 的泛函。我们还有其他形式的作用量：
$$
S_{1st}=\int\mathrm{d}^4x\,\left\{\dfrac14 F_{\mu\nu} F^{\mu\nu}-\dfrac12 F_{\mu\nu}(\partial^\mu A^\nu-\partial^\nu A^\mu)+\dfrac12\mu^2A^\nu A_\nu+\bar\psi(i\partial\mkern-9.5mu/-eA\mkern-9mu/-m)\psi\right\}
$$
注意这里的 $F_{\mu\nu}$ 并不是 $\partial_\mu A_\nu-\partial_\nu A_\mu$ 的记号，而是独立的变量。实际上：
$$
S_{2nd}=S_{1st}-\int\mathrm{d}^4x\,\dfrac14[F_{\mu\nu}-(\partial_\mu A_\nu-\partial_\nu A_\mu)]^2
$$
因此相当于约束。实际上，简单计算表明：
$$
\int\prod_{\mu\nu}(\mathrm{d}F_{\mu\nu})\prod_\lambda(\mathrm{d}A_{\lambda})\,\mathrm{e}^{iS_{1st}}=\int\prod_\lambda(\mathrm{d}A_{\lambda})\,\mathrm{e}^{iS_{2nd}}
$$
因此这两个作用量在泛函积分下会给出相同的结果。另一方面，从 $S_{1st}$ 出发，我也可以选择不消除 $F_{\mu\nu}$，而是消除约束变量 $A^0,F^{ij}$，这将得到：
$$
\int\prod_{\mu\nu}(\mathrm{d}F_{\mu\nu})\prod_\lambda(\mathrm{d}A_{\lambda})\,\mathrm{e}^{iS_{1st}}=\int\prod_j(\mathrm{d}F_{0j})\prod_i(\mathrm{d}A_i)\,\mathrm{e}^{iS_{\text{other}}}
$$
什么是 $S_{\text{other}}$ 呢？实际上，我们的作用量一直都没有改变，只是改变了其变量。现在的作用量是 $F_{0j},A_i$ 的函数，它们实际上就是该理论的 $q,p$。因此得到的就是 $S_{\mathcal H}$：
$$
S_\mathcal H
=\int\mathrm{d}^4x\,\mathcal L(A_i,F_{0i},\bar\psi,\psi)
$$
因此
$$
\int\prod_j(\mathrm{d}F_{0j})\prod_i(\mathrm{d}A_i)\,\mathrm{e}^{iS_{\mathcal H}}=\int\prod_{\mu\nu}(\mathrm{d}F_{\mu\nu})\prod_\lambda(\mathrm{d}A_{\lambda})\,\mathrm{e}^{iS_{1st}}=\int\prod_\lambda(\mathrm{d}A_{\lambda})\,\mathrm{e}^{iS_{2nd}}
$$
左侧的就是正确的Hamiltionian形式的泛函积分，因此其等于生成泛函。而右侧的就是简单的对 $A_\mu$ 的协变的泛函积分公式，从 $S_{2nd}$ 可以简单的读出原先的Feynman公式（在[[Coleman QFT - Lecture 28. 泛函积分与Feynman图]]中，我们证明了对 $A_\mu$ 的泛函积分公式会直接给出原来的传播子）。因此，原先的规则的确是正确的。通过 $S_{1st}$ ，我们将左侧严格正确的，但存在约束变量、时序积交换等问题的形式，转化为了容易写出Feynman规则的右侧形式。

---

