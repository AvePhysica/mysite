---
title: "Coleman QFT Problem 3"
---

前三个题我们尝试对一个**非相对论场论**应用正则量子化步骤。已知理论的拉格朗日量为：
$$
\mathcal L=i\psi^*\partial_0\psi+b\nabla\psi^*\cdot\nabla\psi
$$
其中 $b$ 是一个实系数。

>[!question]
>假设 $\mathcal L$ 定义了一个经典场论。
>（1）列出其对应的Euler-Lagrange方程。
>（2）考虑平面波解，即 $\psi\sim\mathrm{e}^{i(\vec p\cdot\vec x-\omega t)}$。求解色散关系 $\omega(|\vec p|)$。
>（3）此理论并不是Lorentz不变的，但是其仍然有时空平移对称性与 $U(1)$ 的内部对称性。即下面的变换是对称性：
>$$\psi\to\mathrm{e}^{-i\lambda}\psi,\quad \psi^*\to\mathrm{e}^{i\lambda}\psi^*$$
>因此其有守恒的能量、动量与电荷。求解这些守恒量的表达式，用场及其导数的积分式表示。

（1）将 $\psi$ 与 $\psi^*$ 视为独立的场，对 $\psi^*$ 与 $\psi$ 变分得到EL方程：
$$
i\partial_0\psi-b\nabla^2\psi=0,\quad i\partial_0\psi^*+b\nabla^2\psi^*=0
$$
（2）代入平面波解：
$$
\omega+b|\vec p|^2=0\Rightarrow \omega=-b|\vec p|^2
$$
可以看到此色散关系是二次的，因此这的确是一个非相对论理论。
（3）考虑时空平移对称性，其导致能动张量守恒。能动张量为：
$$
T^{\rho\mu}=\pi_a^\mu\partial^\rho\phi_a-g^{\mu\rho}\mathcal L
$$
由于我们只需求对应的守恒量（能量与动量），只需考虑 $\mu=0$ 的分量。
$$
\pi^0_\psi=\dfrac{\partial\mathcal L}{\partial(\partial_0\psi)}=i\psi^*,\quad \pi_{\psi^*}^0=0
$$
能量为：
$$
T^{00}=i\psi^*\partial^0\psi-\mathcal L=-b\nabla\psi\cdot\nabla\psi^*,\quad H=-b\int\mathrm{d}^3\vec x\,\nabla\psi\cdot\nabla\psi^*
$$
动量为：
$$
T^{i0}=i\psi^*\partial^i\psi,\quad \vec P=i\int \mathrm{d}^3\vec x\,\psi^*\nabla\psi
$$
考虑 $U(1)$ 对称性，其对应的守恒流为：
$$
D\psi=-i\psi,\quad D\psi^*=i\psi^*,\quad J^\mu=\pi_a^\mu D\phi^a-F^\mu=-i\psi\,\pi_\psi^{\mu}+i\psi^*\,\pi_{\psi^*}^\mu
$$
取 $\mu=0$ ，则
$$
J^0=\psi\psi^*,\quad Q=\int\mathrm{d}^3\vec x\,\psi\psi^*
$$
---

>[!question]
>接下来我们尝试**量子化**这一理论。
>（1）对体系进行正则量子化。
>>[!Hint]
>> You may be bothered by the fact that the momentum conjugate to $\psi^*$ vanishes. Don't be. Because the equations of motion are first-order in time, a complete and independent set of initial-value data consists of $\psi$ and its conjugate momentum, $i\psi^*$ , alone. It is only on these that you need to impose the canonical quantization conditions.)
>
>（2）$\psi^*,\psi$ 可用产生-湮灭算符 $a_{\vec p},a^\dagger{\vec p}$ 做平面波展开，利用对易关系确定一个**合适的**展开系数。
>（3）写出能量、动量与内部对称性对应的电荷的表达式，用产生-湮灭算符表示。(Normal-order freely.)

（1）由于 $\pi_\psi^0=i\psi^*$，故**正则量子化**导出的对易关系为：
$$
[\psi(\vec x,t),\psi(\vec y,t)]=[\psi^*(\vec x,t),\psi^*(\vec y,t)]=0\quad [\psi(\vec x,t),\psi^*(\vec y,t)]=\delta^{(3)}(\vec x-\vec y)
$$
（2）假设平面波展开式为：
$$
\psi(\vec x,t)=\int\mathrm{d}^3\vec p\,[f(\vec p)a_{\vec p}\,\mathrm{e}^{i(\vec p\cdot\vec x-\omega t)}+g(\vec p)a_{\vec p}^\dagger\,\mathrm{e}^{-i(\vec p\cdot\vec x-\omega t)}]
$$
$$
\psi^*(\vec x,t)=\int\mathrm{d}^3\vec p\,[f^*(\vec p)a_{\vec p}^\dagger\,\mathrm{e}^{-i(\vec p\cdot\vec x-\omega t)}+g^*(\vec p)a_{\vec p}\,\mathrm{e}^{i(\vec p\cdot\vec x-\omega t)}]
$$
产生-湮灭算符的对易关系为：
$$
[a_{\vec p},a_{\vec p'}]=[a_{\vec p}^\dagger,a_{\vec p'}^\dagger]=0,\quad [a_{\vec p},a_{\vec p'}^\dagger]=\delta^{(3)}(\vec p-\vec p')
$$
则下面对易子为：
$$
[\psi(\vec x,t),\psi^*(\vec y,t)]=\int\mathrm{d}^3\vec p\,[|f(\vec p)|^2\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}-|g(\vec p)|^2\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}]=\delta^{(3)}(\vec x-\vec y)
$$
$$
[\psi(\vec x,t),\psi(\vec y,t)]=\int\mathrm{d}^3\vec p\,f(\vec p)g(\vec p)\cdot2i\sin(\vec p\cdot(\vec x-\vec y))
$$
后面这个对易子实际上者能为我们提供一点信息：即只需取 $f(\vec p)g(\vec p)$ 是关于 $\vec p$ 的偶函数即可。因此，我们不能通过这些对易关系完全确定 $f(\vec p)$ 与 $g(\vec p)$ 的形式。下面是一种**合适的**选取：
$$
f(\vec p)=\dfrac{1}{(2\pi)^{3/2}},\quad g(\vec p)=0
$$
（3）第一题已经求出三者作为场的积分的表达式。先看能量：
$$
H=-b\int\mathrm{d}^3\vec x\,\nabla\psi\cdot\nabla\psi^*=H=b\int\mathrm{d}^3\vec x\,\psi^*\nabla^2\psi=-b\int\mathrm{d}^3\vec p\,a_{\vec p}^\dagger a_{\vec p}\,|\vec p|^2=\sum_{\vec p}N_{\vec p}\,\omega_{\vec p}
$$
这是我们期望的结果。动量为：
$$
\vec P=-i\int\mathrm{d}^3\vec x\,\psi^*\nabla\psi=\int\mathrm{d}^3\vec p\,\vec p\,a_{\vec p}^\dagger a_{\vec p}=\sum_{\vec p}N_{\vec p}\,\vec p
$$
电荷为：
$$
Q=\int\mathrm{d}^3\vec x\,\psi^*\psi=\int\mathrm{d}^3\vec p\,a_{\vec p}^\dagger a_{\vec p}=\sum_{\vec p}N_{\vec p}
$$
---

>[!question]
>在相对论性的复标量场理论中，我们构造了相应于三种分立对称性(CPT)的变换算符 $U_C,U_P,\varOmega_T$。其对标量场的作用为：
>$$\begin{align}U_C^\dagger\,\psi(\vec x,t)\,U_C&=\psi^*(\vec x,t)\\ U_P^\dagger\,\psi(\vec x,t)\,U_P&=\psi(-\vec x,t)\\ \varOmega^{-1}_T\,\psi(\vec x,t)\,\varOmega_T&=\psi(\vec x,-t)\end{align}$$
>在上面的非相对论理论中，如果我们仍然采取上面的变换定义，将会只有两种变换是仍存在的，而另一种违反了一些关系而不能存在。请说明这一点。

**宇称**：其对复标量场的变换为：
$$
U_P^\dagger\,\psi(\vec x,t)\,U_P=\psi(-\vec x,t),\quad U_P^\dagger\,\psi^*(\vec x,t)\,U_P=\psi^*(-\vec x,t)
$$
我们希望宇称对算符的变换关系为：
$$
U_P^\dagger\, a_{\vec p }\,U_P=a_{-\vec p},\quad U_P^\dagger\, a^\dagger_{\vec p }\,U_P=a^\dagger_{-\vec p}
$$
做平面波展开：
$$
U_P^\dagger\,\psi(\vec x,t)\,U_P=\int\mathrm{d}^3\vec p\,\dfrac{1}{(2\pi)^{3/2}}a_{-\vec p}\,\mathrm{e}^{i(\vec p\cdot\vec x-\omega t)}=\int\mathrm{d}^3\vec p\,\dfrac{1}{(2\pi)^{3/2}}a_{\vec p}\,\mathrm{e}^{i(-\vec p\cdot\vec x-\omega t)}=\psi(-\vec x,t)
$$
$\psi^*$ 验证同理。因此其的定义是良好的。

**时间反演**：我们希望其对算符的作用为：
$$
\varOmega_T^{-1}\,a_{\vec p}\,\varOmega_T=a_{-\vec p},\quad \varOmega_T^{-1}\,a_{\vec p}^\dagger\,\varOmega_T=a_{-\vec p}^\dagger
$$
同样展开验证：（注意反线性算符会将系数变为复共轭）
$$
\varOmega^{-1}_T\,\psi(\vec x,t)\,\varOmega_T=\int\mathrm{d}^3\vec p\,\dfrac{1}{(2\pi)^{3/2}}a_{-\vec p}\,\mathrm{e}^{-i(\vec p\cdot\vec x-\omega t)}=\int\mathrm{d}^3\vec p\,\dfrac{1}{(2\pi)^{3/2}}a_{\vec p}\,\mathrm{e}^{-i(-\vec p\cdot\vec x-\omega t)}=\psi(\vec x,-t)
$$
$\psi^*$ 验证同理。因此其的定义也是良好的。

**电荷共轭**：直接考虑其对对易子的作用：
$$
U_C^\dagger\,[\psi(\vec x,t),\psi^*(\vec y,t)]\,U_C=[\psi^*(\vec x,t),\psi(\vec y,t)]=-\delta^{(3)}(\vec x-\vec y)
$$
但是
$$
U_C^\dagger\,[\psi(\vec x,t),\psi^*(\vec y,t)]\,U_C=U_C^\dagger\,\delta^{(3)}(\vec x-\vec y)\,U_C=\delta^{(3)}(\vec x-\vec y)
$$
两者是矛盾的，因此电荷共轭不会存在。

---

>[!question]
>考虑一个无质量的自由标量场。其拉格朗日量为：
>$$\mathcal L(x)=\dfrac12\partial^\mu\phi(x)\partial_\mu\phi(x)$$
>对其实施一个单参连续**扩张**变换(dilation)，变换由下式定义：
>$$\mathcal D:\phi(x)\to\mathrm{e}^\lambda\phi(\mathrm{e}^\lambda x)$$
>（1）说明作用量 $S=\int\mathrm{d}^4x\,\mathcal L(x)$ 在此变换下不变，因此此变换是系统的对称性。
>（2）计算扩张变换对应的守恒流 $J^\mu$ 与守恒量 $Q$。
> （3）计算 $Q$ 与 $\phi$ 的对易子，验证其为：
> $$[\phi,Q]=iD\phi$$
> （4）计算 $Q$ 与 $P^\mu$ 的对易子，验证其为：
> $$[P^\mu,Q]=iP^\mu$$

（1）作用量的变换为：
$$
\mathcal D:S\to S'=\int\mathrm{d}^4 x\,\dfrac12\partial^\mu(\mathrm{e}^\lambda\phi(\mathrm{e}^\lambda x))\partial_\mu(\mathrm{e}^\lambda\phi(\mathrm{e}^\lambda x))=\int\mathrm{d}^4y\,\mathrm{e}^{-4\lambda}\cdot\dfrac12\mathrm{e}^{2\lambda}\dfrac{\partial\phi(y)}{\partial y_\mu}\cdot\mathrm{e}^{2\lambda}\dfrac{\partial\phi(y)}{\partial y^\mu}=\int\mathrm{d}^4y\,\mathcal L(y)=S
$$
故其不变。
（2）在无穷小变换下：
$$
D\phi=\dfrac{\partial(\mathrm{e}^\lambda\phi(\mathrm{e}^\lambda x))}{\partial\lambda}\bigg|_{\lambda=0}=\phi(x)+x^\mu\partial_\mu\phi(x)
$$
$$
D\mathcal L=\partial^\mu\phi\,\partial_{\mu}(D\phi)=2\partial^\mu\phi\,\partial_{\mu}\phi+x^\nu\partial^\mu\phi\,\partial_{\mu}\partial_\nu\phi=\dfrac{1}{2}\partial_{\mu}[x^\mu\partial^\nu\phi\,\partial_{\nu}\phi]\Rightarrow F^\mu=\dfrac12x^\mu\partial^\nu\phi\,\partial_{\nu}\phi
$$
守恒流即为：
$$
J^\mu=\pi^\mu D\phi-F^\mu=\partial^{\mu}\phi\,(\phi+x^\nu\partial_\nu\phi)-\dfrac 12x^\mu\partial^\nu\phi\,\partial_{\nu}\phi
$$
守恒荷：
$$
Q=\int\mathrm{d}^3\vec x\,\left[\partial^{0}\phi\,(\phi+x^\nu\partial_\nu\phi)-\dfrac 12x^0\partial^\nu\phi\,\partial_{\nu}\phi\right]
$$
（3）等时对易关系为：
$$
[\phi(\vec y),\pi(\vec x)]=[\phi(\vec y),\dot\phi(\vec x)]=i\delta^{(3)}(\vec x-\vec y),\quad\text{at equal time}
$$
由于 $Q$ 是守恒量，我们取其时间与 $\phi(y)$ 的时间相同。另一方面，我们可以求出 $\phi$ 与其对坐标的偏导 $\nabla\phi$ 的对易子为零，这可以直接由展开式得到：
$$
[\nabla\phi(\vec x,t),\phi(\vec y,t)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[i\vec p\,\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}+i\vec p\,\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}]=0
$$
这是因为被积函数是奇函数。计算对易子 $[\phi(y),Q]$：
$$
[\phi(y),Q]=\int\mathrm{d}^3\vec x\,i\delta^{(3)}(\vec x-\vec y)\left[\phi(x)+x^\nu\partial_\nu\phi(x)+\pi(x) x^0-x^0\pi(x)\right]=i[\phi(y)+y^\nu\partial_\nu\phi(y)]=iD\phi(y)
$$
即证明了 $[\phi,Q]=iD\phi$。
（4）四维动量为：
$$
P^\mu=\int\mathrm{d}^3\vec x\,T^{\mu 0}=\int\mathrm d^3 x\,(\pi(x)\partial^\mu\phi(x)-g^{0\mu}\mathcal L)
$$
而
$$
[\partial^\mu\phi(x),Q]=\partial^\mu (iD\phi)=i[2+x^\nu\partial_\nu]\partial^\mu\phi(x)
$$
$$
[P^\mu,Q]=\int\mathrm{d}^3\vec x\,\left\{i(4+x^\nu\partial_\nu)(\pi(x)\partial^\mu(x))-i(4+x^\nu\partial_\nu)g^{0\mu}\mathcal L\right\}=\int\mathrm{d}^3\vec x\,i(4+x\cdot\partial)T^{\mu 0}
$$
第二项可以做分部积分：
$$
i\int\mathrm{d}^3\vec x\,(x\cdot\partial)T^{\mu 0}=ix^0\partial_0P^\mu+i\int\mathrm{d}^3\vec x\,[\partial_i(x^iT^{\mu 0})-3T^{\mu 0}]=-3i P^\mu
$$
第一项为零是因为能动张量守恒，第二项为边界项也为零。
因此
$$
[P^\mu,Q]=4iP^\mu-3i P^\mu=iP^\mu
$$
证明了题目的表达式。

---


