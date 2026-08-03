---
title: "Coleman QFT Problem 4"
---

>[!question]
>在[[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram]]中，我们精确求解了Model 1，其Lagrangian density为：
>$$\mathcal L=\dfrac12(\partial_\mu\phi)^2-\dfrac12\mu^2\phi^2-g\rho(x)\phi(x)$$
>其中图二代表了一个常数 $-\alpha+i\beta$。我们通过其作用于真空态上的归一化关系确定了其实部 $\alpha$，本题请通过直接求解图二验证这一点。

<div align="center">
  <img src="./pictures/Pasted image 20251128134719.png" width="30%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20251128134745.png" width="30%" style="display: inline-block;">
</div>

其表达式为：
$$
O_2=(-ig)^2\int\mathrm{d}^4x_1\mathrm{d}^4x_2\,\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)\rho(x_1)\rho(x_2)
$$
缩并可表示为：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)=\langle0|T(\phi(x_1)\phi(x_2))|0\rangle=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x_1-x_2)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
则
$$
\alpha=\lim_{\epsilon\to 0^+}\mathrm{Re}\left[\,g^2\!\int\mathrm{d}^4x\mathrm{d}^4y\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}\rho(x)\rho(y)\right]=\lim_{\epsilon\to 0^+}\mathrm{Re}\left[\,g^2\!\int \dfrac{\mathrm{d}^4p}{(2\pi)^4}\dfrac{i}{p^2-\mu^2+i\epsilon}\tilde{\rho}^*(p)\tilde\rho(p)\right]
$$
由于
$$
\lim_{\epsilon\to 0^+}\mathrm{Re}\left(\dfrac{i}{p^2-\mu^2+i\epsilon}\right)=\pi\,\delta(p^2-\mu^2)
$$
则
$$
\alpha=g^2\!\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\cdot\pi\delta(p^2-\mu^2)\tilde{\rho}^*(p)\tilde\rho(p)=\dfrac{g^2}{2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32\omega_{\vec p}}[\tilde{\rho}^*(\vec p,\omega_{\vec p})\tilde\rho(\vec p,\omega_{\vec p})+\tilde{\rho}^*(\vec p,-\omega_{\vec p})\tilde\rho(\vec p,-\omega_{\vec p})]=g^2\!\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32\omega_{\vec p}}\tilde{\rho}^*(\vec p,\omega_{\vec p})\tilde\rho(\vec p,\omega_{\vec p})
$$
其中最后一个等号是由于 $\rho(x)$ 是一个实场，因此：
$$
\tilde\rho(\vec p,-\omega_{\vec p})=\int\mathrm{d}^4x\,\mathrm{e}^{i\vec p\cdot\vec x+i\omega_{\vec p}t}\rho(x)=\tilde\rho^*(-\vec p,\omega_{\vec p})
$$
$$
\tilde{\rho}^*(\vec p,-\omega_{\vec p})\tilde\rho(\vec p,-\omega_{\vec p})=\tilde{\rho}(-\vec p,\omega_{\vec p})\tilde\rho^*(-\vec p,\omega_{\vec p})
$$
而最后的积分关于 $\vec p$  是对称的，因此与前一项相等。
根据定义：
$$
h(\vec p)\equiv\dfrac{-ig\,\tilde\rho(\vec p,\omega_{\vec p})}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}
$$
因此
$$
\alpha=\int\mathrm{d}^3\vec p\,h(\vec p)^*h(\vec p)=\int\mathrm{d}^3\vec p\,|h(\vec p)|^2
$$
与[[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram]]中用归一化得到的结果相同。

---

>[!question]
>本题研究**相干态**。考虑一个谐振子，其哈密顿量为：
>$$H=\dfrac12(p^2+q^2)$$
> 定义升降算符为
> $$a=\dfrac{1}{\sqrt 2}(q+ip),\quad a^\dagger=\dfrac{1}{\sqrt 2}(q-ip)$$
>相干态(coherent state) $|z\rangle$ 的定义为
>$$|z\rangle=N\mathrm{e}^{za^\dagger}|0\rangle,\quad z\in\mathbb{C}$$
>$N$ 为一个正实数，用于归一化：$\langle z|z\rangle=1$。
>（1）求解$N$。
>（2）计算两个相干态间的内积 $\langle z|z'\rangle$，说明其没有正交性。
>（3）证明相干态 $|z\rangle$ 是湮灭算符 $a$ 的本征态，并求其本征值。
>（4）所有相干态 $\{|z\rangle\}$ 是**超完备的**(overcomplete)。实际上，能量本征态可以相干态 $|z\rangle$ 在 $z=0$ 处的各阶导数表示，请说明这一点。此外，实际上有一个看上去像是完备性关系的公式：
>$$1=\alpha\int\mathrm{d}(\mathrm{Re}\,z)\mathrm{d}(\mathrm{Im}\,z)\,\mathrm{e}^{-\beta z^*z}|z\rangle\langle z|$$
>请证明这一公式，并且求出实数 $\alpha$ 与 $\beta$ 的值。
>（5）展示若 $F(q,p)$ 为正则坐标与动量的任意多项式，其正规序在相干态下的平均值为：
>$$\langle z|:F(p,q):|z\rangle=F(\bar p,\bar q)$$
>其中 $\bar p,\bar q$ 为实数，用 $z,z^*$ 表示 $\bar p,\bar q$。
>（6）求相干态 $|z\rangle$ 在坐标表象下的波函数，即 $\langle q|z\rangle$。

（1）直接计算得到
$$1=\langle z|z\rangle=|N|^2\langle0|\mathrm{e}^{z^*a}\mathrm{e}^{za^\dagger}|0\rangle=N^2\left(\sum_{i=0}^\infty \dfrac{z^{*i}}{(i!)^{1/2}}\langle i|\right)\left(\sum_{j=0}^\infty\dfrac{z^j}{(j!)^{1/2}}|j\rangle\right)=N^2\sum_{i=0}^\infty\dfrac{|z|^{2i}}{i!}=N^2\,\mathrm{e}^{|z|^2}
$$
因此
$$
N=\mathrm{e}^{-|z|^2/2}
$$
（2）直接计算：
$$
\langle z|z'\rangle=\mathrm{e}^{-(|z|^2+|z'|^2)/2}\sum_{i=0}^\infty\dfrac{(z^*z')^i}{i!}=\exp\left(-\dfrac{|z|^2+|z'|^2}{2}+z^*z'\right)
$$
其在 $z\ne z'$ 时也不为零。
（3）用能量本征态展开的结果为：
$$
|z\rangle=\mathrm{e}^{-|z|^2/2}\sum_{i=0}^\infty\dfrac{z^i}{\sqrt{i!}}|i\rangle
$$
则
$$
a|z\rangle=\mathrm{e}^{-|z|^2/2}\sum_{i=1}^\infty\dfrac{z^i}{\sqrt{(i-1)!}}|i-1\rangle=z\,\mathrm{e}^{-|z|^2/2}\sum_{i=0}^\infty\dfrac{z^i}{\sqrt{i!}}|i\rangle=z|z\rangle
$$
因此为本征值为 $z$ 的本征态。另一种更简单的做法是：
$$
a|z\rangle=Na\,\mathrm{e}^{za^\dagger}|0\rangle=N[a,\mathrm{e}^{za^\dagger}]|0\rangle=z[a,a^\dagger]N\,\mathrm{e}^{za^\dagger}|0\rangle=z|z\rangle
$$
（4）仍利用上面的展开式：
$$
\dfrac{\mathrm{d}^m}{\mathrm{d}z^m}|z\rangle\bigg|_{z=0}=\text{($|z\rangle$展开式中$z^m$项的系数)}\cdot m!=\mathrm{e}^{-|z|^2/2}\sqrt{m!}\,|m\rangle
$$
因此
$$
|m\rangle=\dfrac{\mathrm{e}^{|z|^2/2}}{\sqrt{m!}}\dfrac{\mathrm{d}^m}{\mathrm{d}z^m}|z\rangle\bigg|_{z=0}
$$
因此能量本征态可用 $|z\rangle$ 于 $z=0$ 处的各阶导数表示。接下来，设 $z=x+iy$，则
$$
\alpha\int\mathrm{d}(\mathrm{Re}\,z)\mathrm{d}(\mathrm{Im}\,z)\,\mathrm{e}^{-\beta z^*z}|z\rangle\langle z|=\alpha\sum_{m,n=0}^\infty\dfrac{1}{\sqrt{m!n!}}\int\mathrm{d}x\,\mathrm{d}y\,\mathrm{e}^{-(\beta+1)(x^2+y^2)}(x+iy)^n(x-iy)^m|n\rangle\langle m|
$$
令 $x+iy=r\,\mathrm{e}^{i\theta}$，换到极坐标：
$$
\mathrm{RHS}=\alpha\sum_{m,n=0}^\infty\dfrac{|n\rangle\langle m|}{\sqrt{n!m!}}\int r\,\mathrm{d}r\mathrm{d}\theta\,\mathrm{e}^{-(\beta+1)r^2}r^{m+n}\mathrm{e}^{i(n-m)\theta}=\alpha\sum_{m,n=0}^\infty\dfrac{|n\rangle\langle m|}{\sqrt{n!m!}}\cdot 2\pi\delta_{mn}\cdot(\beta+1)^{-\frac{m+n+2}{2}}\int_0^\infty t^{m+n+1}\mathrm{e}^{-t^2}\,\mathrm{d}t=\alpha\pi\sum_{n=0}^\infty(\beta+1)^{-(n+1)}|n\rangle\langle n|
$$
能量本征态的完备性关系为：
$$
\sum_{n=0}^\infty|n\rangle\langle n|=1
$$
因此我们应当取
$$
\alpha=\dfrac1\pi,\quad \beta=-1
$$
此时公式
$$
\alpha\int\mathrm{d}(\mathrm{Re}\,z)\mathrm{d}(\mathrm{Im}\,z)\,\mathrm{e}^{-\beta z^*z}|z\rangle\langle z|=1
$$
成立。

（5）实际上，我们只需验证下面式子成立：
$$
\langle z|:p^mq^n:|z\rangle=\bar p^m\bar q^n
$$
利用：
$$
:p^mq^n:\;=\;:\left[-i\dfrac{1}{\sqrt2}(a-a^\dagger)\right]^m\left[\dfrac{1}{\sqrt2}(a+a^\dagger)\right]^n:\;=\sum_{i,j}C_{ij} (a^\dagger)^ia^j
$$
这里 $C_{ij}$ 只是一个展开系数而已。则
$$
\langle z|:p^mq^n:|z\rangle=\sum_{i,j}C_{ij}\langle z|(a^\dagger)^ia^j|z\rangle=\sum_{i,j}C_{ij}z^{*i}z^j
$$
因此我们实际上是在做替换 $a^\dagger\to z^*,a\to z$，因此
$$
\langle z|:p^mq^n:|z\rangle=\left[-i\dfrac{1}{\sqrt2}(z-z^*)\right]^m\left[\dfrac{1}{\sqrt2}(z+z^*)\right]^n=(\sqrt2\,\mathrm{Im}\,z)^m(\sqrt2\,\mathrm{Re}\,z)^n
$$
因此只需取
$$
\bar p=\sqrt2\,\mathrm{Im}\,z=-i\dfrac{1}{\sqrt2}(z-z^*),\quad \bar q=\sqrt2\,\mathrm{Re}\,z=\dfrac{1}{\sqrt2}(z+z^*)
$$
则有下面的公式
$$
\langle z|:F(p,q):|z\rangle=F(\bar p,\bar q)
$$
成立。
（6）由于相干态 $|z\rangle$ 是 $a$ 的本征态：
$$
a|z\rangle=z|z\rangle
$$
在坐标表象下：
$$
\langle q|a|z\rangle=\dfrac{1}{\sqrt 2}\left(\dfrac{\mathrm{d}}{\mathrm{d}q}+q\right)\langle q|z\rangle=z\langle q|z\rangle
$$
即要求解微分方程：
$$
y'+xy=\sqrt 2\,zy
$$
齐次方程的通解为 $y=C\,\mathrm{e}^{-\frac12x^2}$，利用常数变易法：
$$
y=u(x)\,\mathrm{e}^{-x^2/2}\Rightarrow u'(x)=\sqrt 2z\,u(x),\quad u(x)=C\,\mathrm{e}^{\sqrt 2zx}
$$
最终得到：
$$
\langle q|z\rangle=C\exp\left(-\dfrac12 x^2+\sqrt 2zx\right)=\langle 0|z\rangle\exp\left(-\dfrac12 x^2+\sqrt 2zx\right)
$$
这实际上是将基态波函数平移的结果。

---

>[!question]
>设 $K$ 是一个厄米算符，$|\psi\rangle$ 是一个归一的态。 $f(K)$ 在态 $|\psi\rangle$ 下的期望值定义为：
>$$\langle f(K)\rangle=\langle \psi|f(K)|\psi\rangle$$
>现在定义一个关于实自变量 $k$ 的函数 $\eta(k)$：
>$$\eta(k)\equiv\langle\delta(K-k)\rangle$$
>现在假设
>$$K=\int\mathrm{d}^3\vec x\, g(\vec x)\phi(\vec x,0)$$
>求在质量为 $m$ 的自由标量场 $\phi(x)$ 的真空态下的 $\eta(k)$。提示：你可能会用到Model 1的一些计算结果。可以取 $\beta=0$。

利用下面的公式：
$$
\delta(x)=\int_{-\infty}^\infty\dfrac{\mathrm{d}q}{2\pi}\,\mathrm{e}^{-iqx}
$$
则
$$
\eta(k)=\langle 0|\delta(K-k)|0\rangle=\int\dfrac{\mathrm{d}q}{2\pi}\left\langle 0\left|\exp\left[-iq\left(\int\mathrm{d}^3x\,g(\vec x)\phi(\vec x,0)\right)-k\right]\right|\,0\right\rangle=\int\dfrac{\mathrm{d}q}{2\pi}\,\mathrm{e}^{iqk}\left\langle 0\left|\exp\left[-iq\left(\int\mathrm{d}^4x\,G(x)\phi(x)\right)\right]\right|\,0\right\rangle\tag{*}
$$
其中 $G(x)\equiv g(\vec x)\delta(t)$。因此我们看到，需要求一个标量场的指数函数的真空-真空分量。这实际上很像Model 1。回顾一下，在Model 1中，我们的微扰项为：
$$
\mathcal H_I=-g\rho(x)\phi(x)
$$
此时
$$
S=U_I(\infty,-\infty)=T\exp\left(-ig\int\mathrm{d}^4x\,\rho(x)\phi(x)\right)=A\exp\left[\int\mathrm{d}^3\vec p\,(-h(\vec p)^*a_{\vec p}+h(\vec p)a_{\vec p}^\dagger)\right]
$$
其中
$$
A=\mathrm{e}^{\frac12(-\alpha+i\beta)},\quad \alpha=\int\mathrm{d}^3p\,|h(\vec p)|^2=g^2\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^22\omega_{\vec p}}|\tilde{\rho}(\vec p,\omega_{\vec p})|^2
$$
回到(\*)式，由于实际上只有 $t=0$ 时刻的 $\phi$ 有贡献，含时序可被视为被满足。因此有下面的类比关系：
$$
\alpha\to\alpha'=q^2\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^22\omega_{\vec p}}|\tilde{G}(\vec p,\omega_{\vec p})|^2
$$
其中
$$
\tilde{G}(\vec p,\omega_{\vec p})=\int\mathrm{d}^4x\,\mathrm{e}^{ip\cdot x}G(x)=\int\mathrm{d}^3\vec x\,\mathrm{e}^{-i\vec p\cdot\vec x}g(\vec x)=\tilde g(\vec p)
$$
另一方面：
$$
\langle0|S|0\rangle=A=\mathrm{e}^{-\frac12\alpha}
$$
则
$$
\eta(k)=\int\dfrac{\mathrm{d}q}{2\pi}\mathrm{e}^{iqk}\mathrm{e}^{-\frac12\alpha'}=\int\dfrac{\mathrm{d}q}{2\pi}\exp\left[-\dfrac12 q^2\sigma+iqk\right]=\dfrac{1}{\sqrt{2\pi\sigma}}\mathrm{e}^{-\frac{k^2}{2\sigma}},\quad \sigma=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^22\omega_{\vec p}}|\tilde{g}(\vec p)|^2
$$
这正是一个高斯型波包(Gaussian)。

---
