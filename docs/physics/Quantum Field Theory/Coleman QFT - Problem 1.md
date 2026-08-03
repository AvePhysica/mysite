---
title: "Coleman QFT Problem 1"
---

>[!Question]
说明$\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega)}$是Lorentz不变量。

Proof：考虑Lorentz变换。首先，这个积分测度显然在 $SO(3)$ 下是不变的，因此只需验证boost下的不变性。又由于其为各向同性的，只需验证一个沿 $z$ 方向的boost即可。将其记为 $\Lambda$，其一般的形式为：
$$
\Lambda:(t,x,y,z)\to(\,t\cosh \eta+z\sinh\eta\,,x,y,\,t\sinh\eta+z\cosh\eta)
$$
故变换的Jacobi行列式为：
$$
\mathrm{d}^3\vec p'=J\mathrm{d}^3\vec p\,,\quad J=\left|\dfrac{\partial p_i}{\partial p_j}\right|=\begin{vmatrix}
1&0&0\\
0&1& 0\\
0&0&\cosh\eta+\dfrac{\partial\omega}{\partial p_z}\sinh\eta
\end{vmatrix}=\cosh\eta+\dfrac{p_z}{\omega}\sinh\eta
$$
因此
$$
\dfrac{\mathrm{d}^3\vec p'}{(2\pi)^3(2\omega')}=\dfrac{\left(\cosh\eta+\dfrac{p_z}{\omega}\sinh\eta\right)\mathrm{d}^3\vec p}{(2\pi)^3\,2(\omega\cosh\eta+p_z\sinh\eta)}=\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega)}
$$
即证明了其为Lorentz不变量。

---

>[!question]
>**（时序积）** 两个算符场 $A(x)$ 与 $B(y)$ 的**时序积**被定义为：
>$$T(A(x)B(y))=\begin{cases}A(x)B(y),\quad \text{if $x_0>y_0$} \\ B(y)A(x),\quad \text{if $x_0<y_0$}\end{cases}$$
>即时间上晚的算符放在前面。仅使用场满足的KG方程以及等时对易子，证明：对于一个质量为 $\mu$ 的自由标量场，满足：
>$$(\square_x^2+\mu^2)T(\phi(x)\phi(y))=c\delta^{(4)}(x-y)$$
>并确定 $c$ 的值。

Proof：KG方程为：
$$
(\square^2+\mu^2)\,\phi(x)=0
$$
等时对易子的结果为：
$$
[\phi(\vec x,t),\phi(\vec y,t)]=0,\quad [\dot\phi(\vec x,t),\phi(\vec y,t)]=-i\delta^{(3)}(\vec x-\vec y)
$$
时序积可以用阶跃函数写为：
$$
T(\phi(x)\phi(y))=\phi(x)\phi(y)\theta(x^0-y^0)+\phi(y)\phi(x)\theta(y^0-x^0)
$$
将微分算符 $\square^2_x$ 拆成 $\partial_{x^0}^2-\nabla^2_x$我们有
$$
\dfrac{\partial}{\partial x^0}T(\phi(x)\phi(y))=\dot\phi(x)\phi(y)\theta(x^0-y^0)+\phi(y)\dot\phi(x)\theta(y^0-x^0)+\delta(x^0-y^0)[\phi(x),\phi(y)]
$$
上面的最后一项为零（因为所有$x^0=y^0$ 的等时对易子都是零)，再求一次导得到：
$$
\dfrac{\partial^2}{\partial (x^0)^2}T(\phi(x)\phi(y))=\delta(x^0-y^0)[\dot \phi(x),\phi(y)]+\ddot\phi(x)\phi(y)\theta(x^0-y^0)+\phi(y)\ddot\phi(x)\theta(y^0-x^0)
$$
而空间部分的求导为：
$$
\nabla^2_x\,T(\phi(x)\phi(y))=(\nabla_x^2\phi(x))\phi(y)\theta(x^0-y^0)+\phi(y)(\nabla_x^2\phi(x))\theta(y^0-x^0)
$$
可以看到，在 $(\square^2_x+\mu^2)\,T(\phi(x)\phi(y))$中，所有带有 $\theta$ 函数的项都凑成了KG方程的形式，因此都等于零。化简得到：
$$
\begin{align}
(\square^2_x+\mu^2)\,T(\phi(x)\phi(y))&=\delta(x^0-y^0)[\dot \phi(x),\phi(y)]=\delta(x^0-y^0)[\dot \phi(x),\phi(y)]\bigg|_{x^0=y^0}\\&=\delta(x^0-y^0)\cdot-i\delta^{(3)}(\vec x-\vec y)=-i\delta^{(4)}(x-y)
\end{align}
$$
我们得到了要证明的式子，$c=-i$。

---

> [!question]
> 证明：
> $$\langle 0|T(\phi(x)\phi(y))|0\rangle=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}$$

Proof：我们先来计算左侧的矩阵元：
当 $x^0>y^0$ 时
$$
\langle 0|\phi(x)\phi(y)|0\rangle=\left\langle0\left|\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}a_{\vec p}\,\mathrm{e}^{-ip\cdot x}\int \dfrac{\mathrm{d}^3\vec p'}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p'}}}a_{\vec p'}^\dagger\,\mathrm{e}^{ip'\cdot y}\right|\,0\right\rangle=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\,\mathrm{e}^{-ip\cdot (x-y)}
$$
对 $y^0>x^0$ 只需交换 $x,y$ 即可，因此：
$$
\langle 0|T(\phi(x)\phi(y))|0\rangle=\begin{cases}
\displaystyle\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\,\mathrm{e}^{-ip\cdot (x-y)},\quad \text{if $x^0>y^0$}\\
\displaystyle\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\,\mathrm{e}^{-ip\cdot (y-x)},\quad \text{if $x^0<y^0$}
\end{cases}
$$
现在来计算右边的积分：显然我们用只需求出关于 $p^0$ 的积分即可。用留数定理处理。被积函数有两个奇点：
$$
p^0=\omega_{\vec p}-i\epsilon,\quad p^0=-\omega_{\vec p}+i\epsilon
$$
这里我们稍微换了一下 $\epsilon$ ，只要保持其始终是一个小正数即可。对于 $x^0>y^0$ ，我们应当取上半平面大圆弧，其上的积分为零。此时围住的奇点是 $p^0=-\omega_{\vec p}+i\epsilon$，留数值为：
$$
\lim_{\epsilon\to0^+}\mathrm{Res}\left(\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon},\;p^0=-\omega_{\vec p}+i\epsilon\right)=\mathrm{e}^{-ip\cdot(x-y)}\cdot\dfrac{i}{-2\omega_{\vec p}},\quad p=(\,\omega_{\vec p},\,\vec p\,)
$$
因此
$$
\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^4}\cdot 2\pi i\cdot\mathrm{e}^{-ip\cdot(x-y)}\cdot\dfrac{i}{-2\omega_{\vec p}}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\mathrm{e}^{-ip\cdot(x-y)},\quad x^0>y^0
$$
而当 $x^0<y^0$时，我们要取下半平面大圆弧围道，此时的留数值为：
$$
\lim_{\epsilon\to0^+}\mathrm{Res}\left(\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon},\;p^0=\omega_{\vec p}-i\epsilon\right)=\mathrm{e}^{-ip\cdot(x-y)}\cdot\dfrac{i}{2\omega_{\vec p}},\quad p=(\,-\omega_{\vec p},\,\vec p\,)
$$
因此
$$
\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^4}\cdot 2\pi i\cdot\mathrm{e}^{-ip\cdot(y-x)}\cdot\dfrac{i}{-2\omega_{\vec p}}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\mathrm{e}^{-ip\cdot(y-x)},\quad x^0<y^0
$$
上面我们利用了积分区域关于 $\vec p$ 是偶的，因此可将 $\vec p$ 换为 $-\vec p$ 。综上：
$$
\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}=\begin{cases}
\displaystyle\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\,\mathrm{e}^{-ip\cdot (x-y)},\quad \text{if $x^0>y^0$}\\
\displaystyle\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\,\mathrm{e}^{-ip\cdot (y-x)},\quad \text{if $x^0<y^0$}
\end{cases}
$$
故我们证明了结论：
$$
\langle 0|T(\phi(x)\phi(y))|0\rangle=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
---

>[!question]
> 定义如下的可观测量：
> $$A(a)=\dfrac{1}{(a\sqrt\pi)^3}\int\mathrm{d}^3\vec x\,\phi(\vec x,0)\,\mathrm{e}^{-|\vec x|^2/a^2}$$
>求其在真空态下的方差 $\mathrm{var}\,A$，并求出其在 $a$ 很小与很大时的渐近关系。

Solution：由于 $\langle0| \phi(\vec x,0)|0\rangle=0$，故 $\langle A\rangle=0$。因此 $\mathrm{var}\,A=\langle A^2\rangle$。
$$
\begin{align}
\langle A^2\rangle&=\dfrac{1}{\pi^3a^6}\iint\mathrm{d}^3\vec x\,\mathrm{d}^3\vec y\,\mathrm{e}^{-(|\vec x|^2+|\vec y|^2)/a^2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt {2\omega_{\vec p}}}\mathrm{e}^{i\vec p\cdot \vec x}\int\dfrac{\mathrm{d}^3\vec q}{(2\pi)^{3/2}\sqrt {2\omega_{\vec q}}}\mathrm{e}^{-i\vec q\cdot \vec x}\langle 0|a_{\vec p}a_{\vec q}^\dagger|0\rangle\\&=\dfrac{1}{\pi^3a^6}\iint\mathrm{d}^3\vec x\,\mathrm{d}^3\vec y\,\mathrm{e}^{-(|\vec x|^2+|\vec y|^2)/a^2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\mathrm{e}^{i\vec p\cdot (\vec x-\vec y)}\\&=\dfrac{1}{\pi^3a^6}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\int\mathrm{d}^3\vec x\,\mathrm{e}^{-\frac{|x|^2}{a^2}+i\vec p\cdot \vec x}\int\mathrm{d}^3\vec y\,\mathrm{e}^{-\frac{|y|^2}{a^2}+i\vec p\cdot \vec y}
\end{align}
$$
由于
$$
\int\mathrm{d}x_i\,\mathrm{e}^{-\frac{x_i^2}{a^2}+i\vec p\cdot \vec x_i}=a\sqrt{\pi}\,\exp\left(-\dfrac{a^2p_i^2}{4}\right)
$$
因此上式为：
$$
\langle A^2\rangle=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\mathrm{e}^{-\frac12a^2|\vec p|^2}=\dfrac{1}{4\pi^2}\int_0^\infty\dfrac{p^2\,\mathrm{d}p}{\sqrt{p^2+\mu^2}}\mathrm{e}^{-\frac12a^2p^2}=\dfrac{1}{4\pi^2a^2}\int_0^\infty\dfrac{\mathrm{e}^{-u^2/2}u^2\,\mathrm{d}u}{\sqrt{u^2+a^2\mu^2}}
$$
到此为止，我们没办法继续了。最后，来看看渐近分析：
当 $a\to 0$ 时：
$$
\mathrm{RHS}=\dfrac{1}{4\pi^2a^2}\int_0^\infty u\,\mathrm{e}^{-u^2/2}\,\mathrm{d}u=\dfrac{1}{4\pi^2a^2}\sim a^{-2}
$$
当 $a\to \infty$ 时：
$$
\mathrm{RHS}=\dfrac{1}{4\pi^2a^3\mu}\int_0^\infty u^2\,\mathrm{e}^{-u^2/2}\,\mathrm{d}u=\dfrac{\sqrt{2\pi}}{8\pi^2\mu}\cdot\dfrac{1}{a^3}\sim a^{-3}
$$
















