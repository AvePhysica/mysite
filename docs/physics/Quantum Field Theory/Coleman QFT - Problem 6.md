---
title: "Coleman QFT Problem 6"
---

>[!question]
>考虑衰变过程 $K\to\pi^++\pi^-$，$K$ 介子的质量为 $498\,\mathrm{MeV}$，$\pi^{\pm}$ 的质量为 $140\,\mathrm{MeV}$，衰变率为 $\varGamma=0.773\times 10^{10}\,\mathrm{s}^{-1}$。计算 $g/m_K$。

这是末态为两个粒子的衰变过程，利用[[Coleman QFT - Lecture 12. 散射理论 II：应用]]中得到的公式：
$$
\hbar\varGamma=\dfrac{1}{2m}\sum_f\int|\mathcal{A}_{fi}|^2D
$$
最低阶下 $\mathcal A_{fi}=g$，而
$$
D=\dfrac{1}{16\pi^2}\dfrac{|\vec p_f|\,\mathrm{d}\varOmega_f}{E_T}
$$
得到：
$$
\hbar\varGamma=\dfrac{g^2}{16\pi m_K^2}\sqrt{m_K^2-4m_\pi^2}
$$
解得
$$
\dfrac{g}{m_K}=\sqrt{\dfrac{16\pi\hbar\varGamma}{\sqrt{m_K^2-4m_\pi^2}}}=7.88\times 10^{-7}
$$
---

>[!question]
>在Model 3下，计算质心系中核子-反核子散射的微分散射截面以及总散射截面，保留至 $g$ 的非零最低阶。

核子-反核子散射：
$$
N+\bar N\to N+\bar N
$$
这是一个二体散射，其微分散射截面为：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{1}{64\pi^2E_T}\dfrac{|\vec p_f|}{|\vec p_i|}|\mathcal A_{fi}|^2=\dfrac{1}{64\pi^2E_T}|\mathcal A_{fi}|^2
$$
在[[Coleman QFT - Lecture 11. 散射理论 I：Mandelstam变量、CPT和相空间]]中，我们已经计算过对应的Feynman振幅（到 $O(g^2)$ 阶）：
$$
i\mathcal A_{fi}=(-ig)^2\left[\dfrac{i}{(p_1-p_1')^2-\mu^2+i\epsilon}+\dfrac{i}{(p_1+p_2)^2-\mu^2+i\epsilon}\right]
$$
在质心系中：
$$
E_T=2\sqrt{|\vec p_i|^2+m^2},\quad (p_1-p_1')^2=2|\vec p_i|^2(1-\cos\theta),\quad (p_1+p_2)^2=E_T^2
$$
因此
$$
\mathcal A_{fi}=-g^2\left[\dfrac{-1}{2|\vec p_i|^2(1-\cos\theta)+\mu^2-i\epsilon}+\dfrac{1}{E_T^2-\mu^2+i\epsilon}\right]
$$
由于两个分母都不可能为零，我们可以安全的去掉 $i\epsilon$。代入得到微分散射截面为：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{g^4}{64\pi^2E_T^2}\left[\dfrac{2(|\vec p_i|^2(1-\cos\theta)+\mu^2)-E_T^2}{(E_T^2-\mu^2)(|\vec p_i|^2(1-\cos\theta)+\mu^2)}\right]^2
$$
总截面即为：
$$
\sigma=\dfrac{g^4}{32\pi E_T^2(E_T^2-\mu^2)^2}\int_{-1}^1\mathrm dz\,\left[\dfrac{2(|\vec p_i|^2(1-z)+\mu^2)-E_T^2}{|\vec p_i|^2(1-z)+\mu^2}\right]^2
$$
这个积分看着恐怖，实际上并不难积。做换元 $u=2|\vec p_i|^2(1-z)+\mu^2$：
$$
\begin{align}
\sigma&=\dfrac{g^4}{64\pi|\vec p_i|^2E_T^2(E_T^2-\mu^2)^2}\int_{\mu^2}^{2|\vec p_i|^2+\mu^2}\mathrm du\,\left[1-\dfrac{E_T^2-\mu^2}{u}\right]^2\\&=\dfrac{g^4}{16\pi E_T^2(E_T^2-\mu^2)^2}\left[1-\dfrac{E_T^2-\mu^2}{2|\vec p_i|^2}\ln\left(\dfrac{4|\vec p_i|^2+\mu^2}{\mu^2}\right)+\dfrac{(E_T^2-\mu^2)^2}{\mu^2(4|\vec p_i|^2+\mu^2)}\right]
\end{align}
$$
即为总截面 $\sigma$。

---

>[!question]
>在Model 3下，计算质心系中核子-反核子湮灭变成两个介子的微分散射截面以及总散射截面，保留至 $g$ 的非零最低阶。（注意不要重复计算末态）

核子-反核子湮灭：
$$
N+\bar N\to\phi+\phi
$$
相关的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20251221170749.png" width="600">
</div>

其Feynman振幅为：
$$
i\mathcal A_{fi}=(-ig)^2\left[\dfrac{i}{(p-q)^2-m^2+i\epsilon}+\dfrac{i}{(p-q')^2-m^2+i\epsilon}\right]
$$
用散射角表示为：
$$
(p-q)^2=2|\vec p||\vec q|\cos\theta-(|\vec p|^2+|\vec q|^2),\quad (p-q')^2=-2|\vec p||\vec q|\cos\theta-(|\vec p|^2+|\vec q|^2)
$$
则
$$
\mathcal A_{fi}=-g^2\left[\dfrac{1}{2|\vec p||\vec q|\cos\theta-(|\vec p|^2+|\vec q|^2)-m^2}+\dfrac{1}{-2|\vec p||\vec q|\cos\theta-(|\vec p|^2+|\vec q|^2)-m^2}\right]
$$
因此微分散射截面为：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac12\cdot\dfrac{1}{64\pi^2E_T}\dfrac{|\vec q|}{|\vec p|}|\mathcal A_{fi}|^2=\dfrac{g^4}{32\pi^2E_T^2}\dfrac{|\vec q|}{|\vec p|}\left[\dfrac{|\vec p|^2+|\vec q|^2+m^2}{(2|\vec p||\vec q|\cos\theta)^2-(|\vec p|^2+|\vec q|^2+m^2)^2}\right]^2
$$
上面的 $1/2$ 源于出射粒子是全同的，因此末态的态密度要除以2。
总截面为：
$$
\sigma=\dfrac{g^4}{32\pi E_T^2}(|\vec p|^2+|\vec q|^2+m^2)^2\cdot\dfrac{|\vec q|}{|\vec p|}\int_{-1}^1\mathrm dz\,\left[\dfrac{1}{(2|\vec p||\vec q|z)^2-(|\vec p|^2+|\vec q|^2+m^2)^2}\right]^2
$$
计算积分得到：
$$
\sigma=\dfrac{g^4}{16\pi E_T^2}\dfrac{|\vec q|}{|\vec p|}\left[\dfrac{1}{2|\vec q||\vec p|(|\vec p|^2+|\vec q|^2+m^2)}\arctan\left(\dfrac{2|\vec p||\vec q|}{|\vec p|^2+|\vec q|^2+m^2}-\dfrac{1}{(2|\vec p||\vec q|)^2-(|\vec p|^2+|\vec q|^2+m^2)^2}\right)\right]
$$
注意 $\vec q$ 与 $\vec p$ 间存在约束：
$$
|\vec q|^2+\mu^2=|\vec p|^2+m^2
$$
当 $|\vec p|\to 0$ 时，可以发现 $\sigma\to\infty$。

---

>[!question]
>此问题我们来研究一个反幺正算符对 $S$ 矩阵的作用。为了使事情更简单，我们考虑时间反演算符 $\varOmega_T$。其对态的作用记为：
>$$|a^T\rangle\equiv\varOmega^T|a\rangle$$
>它将改变所有动量的方向，同时会将入态与出态相交换：
>$$\varOmega_T|a\rangle^{in}=|a^T\rangle^{out}$$
>（1）从 $S$ 矩阵的定义出发，证明：
>$$\langle a|S|b\rangle=\langle b^T|S|a^T\rangle$$
>（2）现在，从 $S$ 作为时间演化算符出发，证明（1）中的表达式。已知哈密顿量的变换为：
>$$\varOmega_TH_I(t)\varOmega_I^{-1}=H_I(-t)$$

（1）利用S矩阵的定义：
$$
\langle a|S|b\rangle=^{out}\!\!\langle a|b\rangle^{in}=(\varOmega_T b^{in},\varOmega_T a^{out})=(b^{T\,out},a^{T\, in})=\langle b^T|S|a^T\rangle
$$
（2）利用时间演化算符的Dyson级数展开：
$$
\begin{align}
\langle a|S|b\rangle&=\langle a|U_I(\infty,-\infty)|b\rangle\\
&=\sum_n(-i)^n\langle a|\int_{t_1>t_2>\cdots>t_n}\mathrm{d}t_1\cdots\mathrm{d}t_n\,H_I(t_1)\cdots H_I(t_n)|b\rangle\\
&=\sum_{n}(-i)^n\left(\varOmega_T\int_{t_1>t_2>\cdots>t_n}\mathrm{d}t_1\cdots\mathrm{d}t_n\,H_I(t_1)\cdots H_I(t_n)b,\varOmega_Ta\right)\\
&=\sum_{n}(-i)^n\left(\int_{t_1>t_2>\cdots>t_n}\mathrm{d}t_1\cdots\mathrm{d}t_n\,H_I(-t_1)\cdots H_I(-t_n)b^T,a^T\right)\\
&=\sum_{n}(-i)^n\left(b^T,\left[\int_{t_1>t_2>\cdots>t_n}\mathrm{d}t_1\cdots\mathrm{d}t_n\,H_I(-t_1)\cdots H_I(-t_n)\right]^\dagger a^T\right)\\
&=\sum_{n}(-i)^n\left(b^T,\left[\int_{t_1>t_2>\cdots>t_n}\mathrm{d}t_1\cdots\mathrm{d}t_n\,H_I(-t_n)\cdots H_I(-t_1)\right] a^T\right)\\
&=(b^T,U_I(\infty,-\infty) a^T)\\&=\langle b^T|S|a^T\rangle
\end{align}
$$
即证明了等式。

---





