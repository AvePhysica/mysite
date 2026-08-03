---
title: "Coleman QFT Problem 7"
---

>[!question]
>我们已经完成了在质心系中的双粒子态密度的推导：
>$$D=\dfrac{1}{16\pi^2}\dfrac{|\vec p_f|\,\mathrm{d}\varOmega_f}{E_T}$$
>计算实验系下的态密度 $D$（即 $\vec p_T\ne 0$ ）。

态密度的定义为：
$$
D=(2\pi)^4\cdot\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32E_p}\dfrac{\mathrm{d}^3\vec q}{(2\pi)^32E_q}\delta^{(3)}(\vec p+\vec q-\vec p_T)\delta(E_p+E_q-E_T)
$$
将对 $\vec q$ 的积分先完成：
$$
D=(2\pi)^4\cdot\dfrac{\mathrm{d}^3\vec p}{(2\pi)^64E_pE_q}\delta(E_p+E_q-E_T)\bigg|_{\vec q=\vec p_T-\vec p}
$$
由
$$
E_q=\sqrt{m_q^2+|\vec p_T|^2+|\vec p|^2-2|\vec p_T||\vec p|\cos\theta}
$$
仍使用球坐标，delta函数可以化为对角度的函数：
$$
\delta(E_p+E_q-E_T)\bigg|_{\vec q=\vec p_T-\vec p}=\left|\dfrac{\partial E_q}{\partial(\cos\theta)}\right|^{-1}\delta(\cos\theta-\cos\theta_k)=\dfrac{E_q}{|\vec p_T||\vec p|}\delta(\cos\theta-\cos\theta_k)
$$
因此
$$
D=\dfrac{p^2\,\mathrm{d}p\mathrm{d}\phi}{(2\pi)^24E_pE_q}\cdot\dfrac{E_q}{p_Tp}=\dfrac{\mathrm{d}E_p\mathrm{d}\phi}{16\pi^2|\vec p_T|}
$$
此即实验系下的双粒子末态的态密度。

---
>[!question]
>设 $A,B,C,D$ 为四个实标量场，其动力学由下面的Lagrangian density确定：
>$$\mathcal L=\dfrac12[(\partial_\mu A)^2-m^2A^2+(\partial_\mu B)^2+(\partial_\mu C)^2+(\partial_\mu D)^2]+g\,ABCD$$
>注意到 $A$ 的质量为 $m$ ，而 $B,C,D$ 是无质量的。其允许衰变过程 $A\to B+C+D$ 发生。在 $g$ 的最低阶下，计算 $A$ 的衰变率。如果相互作用项为 $g\,AB^3$ ，则其允许衰变过程 $A\to 3B$ 发生。此时的衰变率又是什么？

计算衰变率的公式为：
$$
\varGamma=\dfrac{1}{2m}\int|\mathcal A_{fi}|^2D
$$
衰变过程 $A\to B+C+D$ 的最低阶Feynman振幅为：

<div align="center">
  <img src="./pictures/Pasted image 20260102111709.png" width="400">
</div>


三粒子末态的态密度公式为：
$$
D=\dfrac{1}{32\pi^3}\mathrm{d}E_B\,\mathrm{d}E_C
$$
接下来确定 $(E_B,E_C)$ 的允许取值范围。由于 $B,C,D$ 均无质量，因此其能量等于动量的模长。考虑能量守恒与动量守恒：
$$
\vec p_B+\vec p_C+\vec p_D=0,\quad m=E_B+E_C+E_D
$$
即要解决周长恒定的三角形的两条边取值应满足的条件是什么。首先，第三边应满足：
$$
|E_B-E_C|\leq E_D\leq E_B+E_C
$$
左侧关系要求：
$$
\max(E_B,E_C)\leq \dfrac m2
$$
右侧关系要求：
$$
E_B+E_C\geq \dfrac m2
$$
由这两个条件，我们可以画出 $(E_B,E_C)$ 平面上的允许区域：

<div align="center">
  <img src="./pictures/Pasted image 20260102112330.png" width="400">
</div>

此区域的面积为 $m^2/8$。因此衰变率为：
$$
\varGamma=\dfrac{1}{32\pi^3}\cdot g^2\cdot\dfrac{m^2}{8}=\dfrac{g^2m}{512\pi^3}
$$
再来考虑衰变过程 $A\to 3B$ ，其大部分求解过程是一样的，只有两个区别：
- 此时的Feynman振幅将变成原来的 $3!$ 倍（因为我们要在Feynman图的线上标动量，有 $3!$ 种标法）：
$$
i\mathcal A_{fi}=3!(-ig)
$$
- 此时的末态态密度要除以 $3!$，因为出射粒子全同，故积分时重复算了 $3!$ 次。
综上，由于衰变率中Feynman振幅要平方，因此总的衰变率要乘以 $3!$：
$$
\varGamma=\dfrac{3g^2m}{256\pi^3}
$$
---
