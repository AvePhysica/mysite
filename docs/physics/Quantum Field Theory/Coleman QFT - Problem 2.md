---
title: "Coleman QFT Problem 2"
---

>[!question]
>在 $d$ 维时空中，一个自由标量场的量纲是什么？
> 已知
> $$\mathcal L=\dfrac12(\partial_\mu\phi\partial^\mu \phi)-\sum_{n\geq 2}a_n\phi^n$$
>$\mathcal L,S,a_n$ 的量纲分别是什么？

注意我们在自然单位制下讨论问题，基本物理量的量纲关系为：
$$
[E]=[M]=[L]^{-1}=[T]^{-1}
$$
利用等时对易关系：
$$
[\phi(\vec x,t),\dot\phi(\vec y,t)]=i\delta^{(d-1)}(\vec x-\vec y)
$$
因此标量场 $\phi$ 的量纲为：
$$
[\phi]^2/[T]=[L]^{-(d-1)}=[E]^{d-1}\Rightarrow[\phi]=[E]^{\frac d2-1}
$$
利用 $[\partial_\mu]=[L]^{-1}=[E]$，得到：
$$
[\mathcal L]=[\phi]^2/[L]^2=[E]^d,\quad [S]=[\mathcal L]\cdot[L]^d=1\quad [a_n]=[\mathcal L]/[\phi]^n=[E]^{d(1-\frac n2)-n}
$$
---

>[!question]
>在[[Coleman QFT - Problem 1]]的第四题中，定义了可观测量：
>$$A(a)=\dfrac{1}{(a\sqrt\pi)^3}\int\mathrm{d}^3\vec x\,\phi(\vec x,0)\,\mathrm{e}^{-|\vec x|^2/a^2}$$
> 对于小的 $a$ ，其期望的近似式为
> $$\mathrm{var}\;A(a)=\alpha a^\beta+\cdots$$
>（1）对于一个一般的维度 $d$ ，确定 $\beta$。
>（2）将观测量中的 $\phi$ 换为哈密顿量密度 $\mathcal H$ ，确定此时的 $\beta$。

（1）方差的量纲为：
$$
[\mathrm{var}\;A(a)]=[\phi]^{2}=[E]^{d-2}
$$
在小 $a$ 下，$\alpha$ 与 $a$ 无关，其一定无量纲。因此：
$$
[\alpha a^\beta]=[L]^\beta=[E]^{d-2}\Rightarrow \beta=2-d
$$
（2）哈密顿量密度的量纲为 $[\mathcal H]=[\mathcal L]=[E]^d$，故
$$
[\mathrm{var}\;A(a)]=[\mathcal H]^{2}=[E]^{2d}
$$
$$
[\alpha a^\beta]=[L]^\beta=[E]^{2d}\Rightarrow \beta=-2d
$$
---

>[!question]
>考虑一个实矢量场 $A_\mu$。系统的拉格朗日量密度定义为：
>$$\mathcal L=-\dfrac14 F_{\mu\nu}F^{\mu\nu},\quad F_{\mu\nu}\equiv \partial_\mu A_\nu-\partial_\nu A_{\mu}$$
>求解系统的Euler-Lagrange方程。
>进一步的，若定义电场 $\vec E=(F^{10},F^{20},F^{30})$ 以及磁场 $\vec B=(F^{32},F^{13},F^{21})$ ，推导其满足的Maxwell方程组。

作用量为：
$$
S=\int\mathcal L\,\mathrm{d}^4x=-\dfrac14\int F_{\mu\nu}F^{\mu\nu}\,\mathrm{d}^4x
$$
其变分为：
$$
\delta S=-\dfrac12\int F^{\mu\nu}\delta(F_{\mu\nu})\,\mathrm{d}^4x
$$
而
$$
F^{\mu\nu}\,\delta(F_{\mu\nu})=F^{\mu\nu}\,\delta(\partial_\mu A_\nu-\partial_\nu A_{\mu})\simeq\partial_{\mu }F^{\mu\nu}\delta A_\nu-\partial_\nu F^{\mu\nu}\delta A_\mu=2\,\partial_\nu F^{\mu\nu}\delta A_\mu
$$
$$
\delta S=-\int\partial_\nu F^{\mu\nu}\delta A_\mu\,\mathrm{d}^4x=0
$$
由 $\delta A_\mu$ 的任意性，EL方程即为：
$$
\partial_\nu F^{\mu\nu}=0
$$
代入电场与磁场的定义式，得到：
$$
\mu=0\Rightarrow \nabla\cdot\vec E=0,\quad\mu\ne 0\Rightarrow \nabla\times\vec B=\dfrac{\partial \vec E}{\partial t}
$$

---

>[!question]
>如果我们定义：
>$$\theta^{\nu\mu}\equiv T^{\nu\mu}+a\partial_\lambda(A^\nu F^{\mu\lambda})$$ 
>选取合适的常数 $a$ ，$\theta^{\mu\nu}=\theta^{\nu\mu}$，且其 $\mu=\nu=0$ 分量为通常的能量密度，即
>$$\theta^{00}=\dfrac12(|\vec E|^2+|\vec B|^2)$$

能动张量为：
$$
T^{\nu\mu}=\dfrac{\partial\mathcal L}{\partial(\partial_\mu A_\lambda)}\partial^\nu A_\lambda-g^{\mu\nu}\mathcal L=-F^{\mu\lambda}\partial^\nu A_{\lambda}+\dfrac14g^{\mu\nu}F^{\lambda\sigma}F_{\lambda\sigma}
$$
而
$$
\partial_\lambda(A^\nu F^{\mu\lambda})=F^{\mu\lambda}\,\partial_\lambda A^\nu
$$
可以看到只要取 $a=1$ ，则
$$
\theta^{\nu\mu}=F^{\mu\lambda}(\partial_\lambda A^\nu-\partial_\nu A^\lambda)+\dfrac14g^{\mu\nu}F^{\lambda\sigma}F_{\lambda\sigma}=-g_{\lambda\sigma}F^{\mu\lambda}F^{\nu\sigma}+\dfrac14g^{\mu\nu}F^{\lambda\sigma}F_{\lambda\sigma}
$$
显然是对称的。其 $\mu=\nu=0$ 分量为：
$$
\theta^{00}=-g_{\lambda\sigma}F^{0\lambda}F^{0\sigma}+\dfrac14F^{\lambda\sigma}F_{\lambda\sigma}=|\vec E|^2+\dfrac12(|\vec B|^2-|\vec E|^2)=\dfrac12(|\vec B|^2+|\vec E|^2)
$$
确实是电磁场的能量密度。

>[!tip]
>注意本题与上一题中描述的电磁场拉格朗日量是矢量场 $A^\mu$ 的函数，因此即使 $\mathcal L$ 是Lorentz标量，其角动量流也不一定守恒，因为其总角动量流还包含自旋角动量的部分。因此，一开始得到的能动张量并不对称。而本题对其的对称化称为Belinfante–Rosenfeld 对称化，将自旋部分吸收进 $T^{\mu\nu}$，因此对应的角动量流是总角动量流，其为守恒流。

---

