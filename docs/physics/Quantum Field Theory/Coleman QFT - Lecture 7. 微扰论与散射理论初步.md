---
title: "Coleman QFT Lecture 7: 微扰论与散射理论初步"
---

本节来进入QFT的一个核心话题：**微扰论**。以及一个重要应用，即**量子散射理论**。
## 7.1 含时微扰理论

具体的形式理论请参见文章：
[[含时微扰论 Part.I 形式理论]]
[[含时微扰论 Part.II 瞬变近似与绝热近似]]
总结来说，含时微扰问题归结于求解相互作用绘景下的时间演化算符 $U_I(t,t_0)$。当Hamilton显含时间时，$U_I(t,t_0)$ 只能表示为Dyson级数的形式：
$$
U_I(t,t_0)=1+\sum_{n=1}^\infty\left(\dfrac{-i}{\hbar}\right)^n\int_{t_0}^t\mathrm{d}t_1\int_{t_0}^{t_1}\mathrm{d}t_2\cdots\int_{t_0}^{t_{n-1}}\mathrm{d}t_n\hat H_{int}(t_1)\hat H_{int}(t_2)\cdots\hat H_{int}(t_n)
$$
但更简单的方法是将其写为**时序积**的形式（我们已经在[[Coleman QFT - Problem 1]]中遇到过它了）：
$$
U_I(t,t_0)= T\exp\left(-i\int_{t_0}^t\mathrm{d} t'\,H_I(t')\right)
$$
其将级数展开中的场按从晚到早的顺序排列。先剧透一下：QFT中的Feynman图正是用来计算上式的矩阵元的。每一个Feynman图就代表微扰展开中的一项。

## 7.2 散射理论与S矩阵

具体的形式理论参见文章：
[[散射理论Part.I 定态散射理论]]
[[散射理论 Part.II 含时散射理论]]
[[散射理论 Part.III 角动量表象：分波与相移]]
[[散射理论 Part.IV 低能散射与高能散射]]

散射S矩阵的矩阵元描述“出态”与“入态”的内积。在含时理论中，假设势是被**绝热**加上的，因此在 $t=\pm\infty$ 时能量本征态均为自由粒子的平面波态 $|\vec k\rangle$。当入射的态是 $|\vec k_i\rangle$ 时，设其于 $t=0$ 时的态为 $|\psi^{in}\rangle$，而当出射的态是 $|\vec k_f\rangle$ 时，$t=0$ 时的态为 $|\psi^{out}\rangle$，则S矩阵的矩阵元定义为：
$$
\langle \vec k_f|S|\vec k_i\rangle=\langle\psi^{out}|\psi^{in}\rangle
$$
可以看出，散射矩阵正是从 $t=-\infty$ 到 $t=+\infty$ 的时间演化算符：
$$
S=U_I(\infty,-\infty)
$$
含时散射理论可以用来处理定态问题，我们只需为原先的散射势加上一个绝热“开关”即可。即
$$
H_I\to f(t,T,\Delta)H_I
$$
其中 $T$ 刻画势场存在的时间，而 $\Delta$ 用来描述势逐渐打开与关闭的时间尺度。$f$ 的具体行为可以参考下面的图示：

<div align="center">
  <img src="./pictures/Pasted image 20251124212431.png" width="500">
</div>

我们有理由相信，在 $f(t,T,\Delta)H_I$ 下的含时散射问题在取 $T\to\infty,\Delta\to\infty$ 下会回到原先的定态散射情形。但是，含时散射能让我们方便地描述入射与出射平面波态 $|\vec k_i\rangle,|\vec k_f\rangle$。同时，散射矩阵即为：
$$
S=\lim_{T\to\infty,\Delta\to\infty,\Delta/T\to 0}U_I(+\infty,-\infty)
$$
散射矩阵实际上描述了整个散射过程，通过其我们可以知道散射截面、散射振幅。同样的，具体推导参考上面给出的文章。
因此，若我们认为势场相对于粒子能量是微扰，则不论是定态散射还是含时散射，其散射过程完全归结于相互作用绘景下时间演化算符的求解。这便回到了前面含时微扰论中的Dyson级数。下一节，我们会关注于Dyson级数的求解，将会提到Wick定理。

---
