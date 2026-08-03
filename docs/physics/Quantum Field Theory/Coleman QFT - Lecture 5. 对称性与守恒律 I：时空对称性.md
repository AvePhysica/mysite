---
title: "Coleman QFT Lecture 5: 对称性与守恒律 I：时空对称性"
---

## 5.1 经典力学中的Noether定理

这一章我们开始讨论**对称性与守恒律**。先来回顾一下：在经典力学中，Noether定理指出每一个连续对称性都对应一个守恒量。其具体内容为：
考虑一个一般的拉格朗日量：
$$
L(q^1,\cdots,q^n;\dot q^1,\cdots\dot q_n;t)
$$
考虑一个由一个参数 $\lambda$ 刻画的连续变换：
$$
\lambda:q^a(t)\to q^a(t;\lambda)
$$
且在 $\lambda=0$ 时为恒等变换，即 $q^a(t)=q^a(t,\lambda=0)$。
考虑其无穷小变换，即：
$$
q^a\to q^a+(Dq^a)\,\mathrm{d}\lambda,\quad Dq^a\equiv\dfrac{\partial q^a}{\partial\lambda}\bigg|_{\lambda=0}
$$
则拉格朗日量的无穷小变换为：
$$
DL=\dfrac{\partial L}{\partial q^a}Dq^a+\dfrac{\partial L}{\partial \dot q^a}D\dot q^a=\dfrac{\partial L}{\partial q^a}Dq^a+p_a\dfrac{\mathrm{d}(Dq^a)}{\mathrm{d}t}
$$
**定义**：我们称一个变换是对称性，若再次变换下拉格朗日量是**协变**的，即可表示为时间的全导数：
$$
DL=\dfrac{\mathrm{d}F}{\mathrm{d}t}
$$
这样的话作用量的变换为：
$$
S'=\int_{t_1}^{t_2}L'(q'^a,\dot q'^a,t)\,\mathrm{d}t=S+F(q_2^a,\dot q_2^a,t)-F(q_1^a,\dot q_1^a,t)
$$
因此只在边界上有差异，不影响保持边界的变分 $\delta S=0$ 导出的运动方程。
**Noether's Theorem**：有无穷小对称性的系统一定存在与之对应的守恒量。
我们可以通过直接构造守恒量证明这一点。守恒量为：
$$
Q=p_aDq^a-F
$$
有
$$
\dfrac{\mathrm{d} Q}{\mathrm{d} t}=\dot p_a\mathrm{d}q^a+p_a\dfrac{\mathrm{d}(Dq^a)}{\mathrm{d}t}-\dfrac{\mathrm{d}F}{\mathrm{d}t}=\dfrac{\partial L}{\partial q^a}Dq^a+\dfrac{\partial L}{\partial \dot q^a}D\dot q^a-DL=0
$$
来看几个例子：

>[!example]
>**平移不变性**：考虑一个有平移不变性的拉格朗日量，例如：
>$$L=\dfrac12\sum_rm_r\dot{\vec x}^r\cdot\dot{\vec x}^r+\sum_{r>s}V^{(r,s)}(|\vec x^r-\vec x^s|)$$
> 在平移变换
> $$\vec x^r\to{\vec x}^r+\vec e\lambda$$
> 下不变。因此
>$$D\vec x^r=\vec e,\quad DL=0,\quad F=0$$
>守恒量为：
>$$ Q=\vec e\cdot\sum_rm_r\dot{\vec x}^r$$
>这是沿 $\vec e$ 方向的动量守恒。
>**时间平移**：考虑一个不含时的拉格朗日量 $L(q^a,\dot q^a)$，即 $\dfrac{\partial L}{\partial t}=0$。考虑时间平移变换：
>$$q^a(t)\to q^a(t+\lambda)$$
>在此变换下：
>$$Dq^a=\dfrac{\partial q^a}{\partial\lambda}\bigg|_{\lambda=0}=\dot q^a$$
>$$DL=\dfrac{\partial L}{\partial q^a}\dot q^a+\dfrac{\partial L}{\partial \dot q^a}D\ddot q^a=\dfrac{\mathrm{d}L}{\mathrm{d}t},\quad F=L$$
>$$Q=p_aDq^a-F=p_a\dot q^a-L=E$$
>即能量守恒。
>**旋转变换**：考虑一个绕轴 $\vec e$ 旋转角度 $\lambda$ 的旋转变换。假设拉格朗日量在旋转下不变。
>$$\vec x^r\to R(\lambda,\vec e)\vec x^r$$
>在此变换下：
>$$D\vec x^r=\vec e\times\vec x^r,\quad DL=0,\quad F=0$$
>守恒量为：
>$$Q=\sum_r\vec p_r\cdot(\vec e\times\vec x^r)=\vec e\cdot\sum_r\vec x^r\times\vec p_r=\vec e\cdot J$$
>即沿 $\vec e$ 方向的角动量守恒。

## 5.2 量子力学中的对称性与守恒律

量子力学中同样有相似的联系，具体参见AQM_Note 4。但此时我们可以从守恒量反推出对称变换。具体来说，设 $Q$ 是一个守恒量，则
$$
[q^a,Q]=iDq^a
$$
也就是说，守恒量 $Q$ 是对应对称性变换的无穷小变换的生成元。证明如下：
$$
\mathrm{e}^{iQ\lambda}q^a\mathrm{e}^{-iQ\lambda}=q^a-i[q^a,Q]\lambda+O(\lambda^2)
$$
故
$$iDq^a=i\dfrac{\partial q^a}{\partial\lambda}\big|_{\lambda=0}=[q^a,Q]$$

## 5.3 场论中的守恒流

场论中的动力学变量为一组场 $\phi^a(x)$，考虑一个单参连续变换：
$$
\phi^a(x)\to\phi^a(x,\lambda),\quad D\phi^a\equiv\dfrac{\partial\phi^a}{\partial\lambda}\bigg|_{\lambda=0}
$$
对称性的定义是**拉格朗日量密度可表示为四矢量的梯度**，即：
$$
D\mathcal L=\partial_\mu F^\mu
$$
此时拉格朗日量的变换为：
$$
DL=D\int\mathrm{d}^3\vec x\,\partial_\mu F^\mu=\dfrac{\mathrm{d}}{\mathrm{d}t}\int\mathrm{d}^3\vec x\, F^0
$$
这里用到所有场在无穷远的边界上应趋于零。因此拉格朗日量是协变的， $F=\int\mathrm{d}^3\vec x\, F^0$。
计算 $D\mathcal L$：
$$
D\mathcal L=\dfrac{\partial\mathcal L}{\partial\phi^a}D\phi^a+\pi_a^\mu\partial_{\mu}(D\phi^a)
$$
与 $Q=p_aDq^a-F$ 类比，定义下面的四矢量：
$$
J^\mu\equiv\pi^\mu_aD\phi^a-F^\mu
$$
有
$$
\partial_\mu J^\mu=(\partial_\mu\pi^\mu_a)D\phi^a+\pi_a^\mu\partial_\mu(D\phi^a)-\partial_\mu F^\mu=\dfrac{\partial\mathcal L}{\partial\phi^a}D\phi^a+\pi_a^\mu\partial_{\mu}(D\phi^a)-\partial_\mu F^\mu=0
$$
因此这是一个**守恒流**。其四维散度为零。可将其 $0$ 分量视为“密度”，而将剩下三个分量构成的矢量视为“流”，得到标准的**流守恒方程**：
$$
\dfrac{\partial J^0}{\partial t}+\nabla\cdot\vec J=0
$$
全空间的“密度”积分为守恒量：
$$
Q=\int\mathrm{d}^3\vec x\,J^0=\int\mathrm{d}^3\vec x\,(\pi_a^0D\phi^a-F)
$$
要注意的点是，守恒流的定义并**不是唯一确定**的。由于只需其四维散度为零，实际上我们只需给它加上一个任意量的四维旋度即可。这相当于给其加上一个**反对称二阶张量的散度**：
$$
F^\mu \to F^\mu+\partial_{\nu}A^{\mu\nu}\quad\text{where} \;A^{\mu\nu}=-A^{\nu\mu}
$$
此时
$$
\partial_{\mu}\partial_{\nu}A^{\mu\nu}=0
$$
守恒流与守恒量的变换为：
$$
J^\mu\to J^\mu-\partial_{\nu}A^{\mu\nu},\quad Q=\int\mathrm{d}^3\vec x\,J^0\to\int\mathrm{d}^3\vec x\,(J^0+\partial_i A^{0i})
$$
第二项为空间散度，故其积分后得到无穷远的边界项，等于0。故总的守恒量是不变的。

## 5.4 时空平移对称性与能动张量

时空平移变换为：
$$
\phi^a(x)\to \phi^a(x+\lambda e),\quad D\phi^a=e_\rho\partial^\rho\phi^a(x)
$$
当 $\mathcal L$  不显含时空坐标 $x^\mu$ 时，时空平移变换是一个对称性。验证：拉格朗日量密度的变换为：
$$
D\mathcal L=e_\rho\left[\dfrac{\partial\mathcal L}{\partial\phi^a}\partial^\rho\phi^a+\dfrac{\partial\mathcal L}{\partial(\partial_\nu\phi^a)}\partial^\rho(\partial^\nu\phi^a)\right]=e_\rho\partial^{\rho}\mathcal L=\partial_\mu(g^{\mu\rho}e_\rho\mathcal L)
$$
因此是协变的。守恒流为：
$$
J^\mu\equiv\pi^\mu_aD\phi^a-F^\mu=\pi_a^\mu e_\rho\partial^\rho \phi^a-g^{\mu\rho}e_\rho\mathcal L=e_\rho T^{\rho\mu}
$$
其中
$$
T^{\rho\mu}\equiv\pi_a^\mu \partial^\rho \phi^a-g^{\mu\rho}\mathcal L
$$
称为**能动张量**。一般而言，其并**不是对称**的。指标 $\mu$ 刻画了密度与流，而指标 $\rho$ 则刻画了能量与动量。可以检查一下：
$$
T^{00}=\pi_a^0\partial^0\phi^a-g^{00}\mathcal L=\pi_a\dot\phi^a-\mathcal L=\mathcal H
$$
正是哈密顿量密度。另一方面：
$$
T^{i0}=\pi^0\partial^i\phi=(\partial^0\phi)(\partial^i\phi)
$$
我们期望其为动量密度，也就是说总动量为：
$$
\vec P=-\int\mathrm{d}^3\vec x\,(\partial^0\phi)(\nabla\phi)
$$
那我们如何验证它呢？实际上我们知道另一个表达式：
$$
\vec P=\int\mathrm{d}^3\vec p\,(a_{\vec p}^\dagger a_{\vec p})\,\vec p
$$
为验证两者相同，将标量场的展开式代入前一式：
$$
\vec P=-\iiint\dfrac{\mathrm{d}^3\vec x\,\mathrm{d}^3\vec p\,\mathrm{d}^3\vec p'}{2(2\pi)^3\sqrt{\omega_{\vec p}\omega_{\vec p'}}}(-i\omega_\vec p a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+i\omega_{\vec p}a^\dagger_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)(i\vec p' a_{\vec p'}\,\mathrm{e}^{-ip'\cdot x}-i\vec p'a^\dagger_{\vec p'}\,\mathrm{e}^{ip'\cdot x}\,)=\dfrac12 \int\mathrm{d}^3\vec p\,(a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})\,\vec p
$$
我们又一次遇到了在[Coleman QFT - Lecture 4. 场的正则量子化](./Coleman%20QFT%20-%20Lecture%204.%20%E5%9C%BA%E7%9A%84%E6%AD%A3%E5%88%99%E9%87%8F%E5%AD%90%E5%8C%96.md)中正规序一节遇到的问题：两个表达式相差了一个无穷大的常数。不管它或者将其理解为正规序，则两个表达式确实是相等的。

## 5.5 洛伦兹变换对称性

上面我们讨论了时空平移对称性，并由其导出了**能动张量**守恒。现在，我们来看Poincare对称群的另一部分：洛伦兹变换。其无限小变换为：
$$
\Lambda:x^\mu\to x^\mu+\epsilon^{\mu\nu}x_{\nu}\,\mathrm{d}\lambda
$$
$\epsilon^{\mu\nu}$ 即为Lorentz变换矩阵。其保内积要求：
$$
\epsilon^{\mu\nu}+\epsilon^{\nu\mu}=0
$$
因此其为反对称的 $4\times 4$ 矩阵。当体系具有Lorentz对称性时，就是指拉格朗日量密度 $\mathcal L$ 是一个Lorentz标量。
此时标量场的变换为：
$$
\Lambda:\phi(x)\to\phi'(x)= \phi(\Lambda^{-1}x)
$$
取无穷小变换，得到：
$$
D\phi^a=\epsilon_{\sigma\rho}x^\sigma\partial^\rho\phi^a
$$
类似的，拉格朗日量密度的变换即为：
$$
D\mathcal L=\epsilon_{\sigma\rho}x^\sigma\partial^\rho\mathcal L=\partial_{\mu}(g^{\mu\rho}\epsilon_{\sigma\rho}x^\sigma\mathcal L)
$$
守恒流即为：
$$
J^\mu=\pi_a^\mu D\phi^a-F^\mu=\epsilon_{\sigma\rho}x^{\sigma}(\pi_a^\mu\partial^\rho\phi^a-g^{\mu\rho}\mathcal L)=\epsilon_{\sigma\rho}x^{\sigma}T^{\rho\mu}
$$
由于 $\epsilon_{\sigma\rho}$ 是反对称的，我们写下其等价形式：
$$
J^\mu=\dfrac 12\epsilon_{\sigma\rho}(x^{\sigma}T^{\rho\mu}-x^\rho T^{\sigma\mu})=\dfrac 12\epsilon_{\sigma\rho}M^{\sigma\rho\mu}
$$

构造出的这个反对称的 $M^{\sigma\rho\mu}$ 称为**轨道角动量流**。
因此，守恒流要求 $\partial_\mu M^{\sigma\rho\mu}=0$成立，代入上面的定义式得到：
$$
T^{\rho\sigma}=T^{\sigma\rho}
$$
也就是说此时的能动张量是**对称**的。换句话说，**对于有Lorenzt对称性的系统（只含空间部分），其能动张量一定是对称的**。

在能动张量 $T^{\rho\mu}$ 中，我们取 $\mu=0$ 即可得到守恒量密度 $T^{\rho0}$ ，这实际上就是四动量密度。那么，对轨道角动量取 $\mu=0$ 得到的 $M^{\sigma\rho0}$ 又是什么守恒量的密度呢？也就是说，守恒量
$$
J^{\lambda\rho}\equiv\int\mathrm{d}^3\vec x\,M^{\lambda\rho 0}
$$
是什么守恒量？
我们来算一下 $J^{12}$：
$$
J^{12}=\int\mathrm{d}^3\vec x\,[x^1T^{20}-x^2T^{10}]
$$
这显然是绕 $z$ 轴的总角动量，因此我们知道了 $J^{12},J^{23},J^{31}$ 就是角动量矢量 $\vec L$ 。
那么带 $0$ 的分量又是什么？算一下 $J^{10}$：
$$
J^{10}=\int\mathrm{d}^3\vec x\,[x^1T^{00}-x^0T^{10}]=\int\mathrm{d}^3\vec x\,x^1T^{00}-tP^1
$$
好像还是看不出什么。那我们将其对时间求导：
$$
\dfrac{\mathrm{d}J^{10}}{\mathrm{d}t}=\dfrac{\mathrm{d}}{\mathrm{d}t}\int\mathrm{d}^3\vec x\,x^1T^{00}-P^1=0
$$
现在再看看。 $T^{00}=\mathcal H$ 是能量密度分布，因此前面的积分式刻画了系统质心（能量中心）的位置，而后面则是其动量。因此， $J^{10}$ 的守恒描述了系统质心在 $e_1$ 方向上以匀速运动。也就是说，系统的平移对称性与Lorentz对称性一起导致了系统质心会做**匀速直线运动**。

---

>[!summary]
> 在经典力学中，系统的拉格朗日量是广义坐标及其时间导数的函数：
> $$L=L(q^a,\dot q^a,t)$$
> 系统具有某种**单参数连续对称性**，即 $DL=\frac{\mathrm{d}F}{\mathrm dt}$，则Noether定理给出其必有相应的**守恒量**：
> $$ Q=p_a Dq^a-F,\quad \dfrac{\mathrm{d}Q}{\mathcal{d}t}=0$$
> 扩展至场论中，系统的拉格朗日量密度是**场与其对时空坐标偏导**的函数：
> $$\mathcal L=\mathcal L(\phi^a,\partial_\mu\phi^a,x^\mu)$$
> 系统具有某种**单参数连续对称性**，等价于 $D\mathcal L=\partial_\mu F^\mu$，Noether定理给出一定存在对应的**守恒流**：
> $$J^\mu=\pi_a^\mu D\phi^a-F^\mu,\quad \partial_\mu J^\mu=0$$
>守恒流的0分量代表守恒量的密度，其对全空间积分可以得到守恒量。
> 不显含时空坐标的拉格朗日量密度具有**时空平移对称性**，这导致了**能动张量**守恒：
> $$T^{\rho\mu}\equiv\pi_a^\mu \partial^\rho \phi^a-g^{\mu\rho}\mathcal L,\quad \partial_\mu T^{\rho\mu}=0$$
>在Lorentz变换下是标量的拉格朗日量密度具有**Lorentz变换对称性**，这导致了**角动量流**守恒：
>$$M^{\sigma\rho\mu}=x^{\sigma}T^{\rho\mu}-x^\rho T^{\sigma\mu},\quad \partial_\mu M^{\sigma\rho\mu}=0$$








