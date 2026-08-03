---
title: "Coleman QFT Problem 8"
---

在[[Coleman QFT - Lecture 14. LSZ约化公式]]中，我们得到了一个很强的结论：只要我们选取的局域场满足**真空态与单粒子态间的归一化关系**，则其就会给出相同的散射 $S$ 矩阵。下面用一个简单的例子来验证这一点。

>[!question]
>考虑一个自由标量场理论：
>$$\mathcal L=\dfrac{1}{2}(\partial_\mu\phi)^2-\dfrac12\mu^2\phi^2$$
>现在我们定义另一个新的场 $A$：
>$$\phi=A+\dfrac12 gA^2$$
>则用 $A$ 表示的Lagrangian为：
>$$\mathcal L=\dfrac12(\partial_\mu A)^2(1+gA)^2-\dfrac12\mu^2\left(A+\dfrac12 gA^2\right)^2$$
>由于 $A$ 的二次项对真空态-单粒子态矩阵元无贡献，因此我们期望新的理论同样不会有任何散射振幅（因为原先的理论根本没有相互作用）。请对于双介子弹性散射验证这一点，只需到 $g$ 的非零最低阶即可（即 $g^2$ 阶）。

我们将新的Lagrangian分为自由与相互作用两部分：
$$
\mathcal L=\dfrac12(\partial_\mu A)^2-\dfrac 12\mu^2A^2+\mathcal L_I
$$
其中
$$
\mathcal L_I=(\partial_\mu A)^2(gA+\dfrac12g^2A^2)-\dfrac12\mu^2(gA^3+\dfrac14 g^2A^4)
$$
相互作用是包含导数的，但我们可以采取在[[Coleman QFT - Lecture 14. LSZ约化公式]]中得到的有效方法。简单认为 $\mathcal H_I=-\mathcal L_I$，并且做替换 $\partial_\mu\to ip_\mu$。我们将相互作用项分为两类。首先，对于项 $g(A\partial_\mu A\partial^\mu A-\frac12 \mu^2A^3)$，其基本顶点为：

<div align="center">
  <img src="./pictures/Pasted image 20260107125732.png" width="700">
</div>

表达式即：
$$
ig(k_1^2+k_2^2+k_3^2-3\mu^2)
$$
当然，动量守恒要求 $k_1+k_2+k_3=0$。其到 $O(g^2)$ 的双介子弹性散射图为：

<div align="center">
  <img src="./pictures/Pasted image 20260107125936.png" width="300">
</div>

表达式为：
$$
i\mathcal A_{12,34}=ig[k_1^2+k_2^2+(k_1+k_2)^2-3\mu^2]\dfrac{i}{(k_1+k_2)^2-\mu^2}ig[k_3^2+k_4^2+(k_1+k_2)^2-3\mu^2]
$$
注意我们算的不是Green函数，而是外线在质壳上的Feynman图，即 $k_i^2=\mu^2$。代入后得到：
$$
k_i^2=\mu^2:\quad i\mathcal A_{12,34}=-ig^2((k_1+k_2)^2-\mu^2)
$$
这样的图实际上有三个，中间的传播线的动量为 $k_1+k_2,k_1+k_3,k_1+k_4$，因此总的Feynman振幅为：
$$
\begin{align}
i\mathcal A_{12,34}+i\mathcal A_{13,24}+i\mathcal A_{14,23}&=-ig^2((k_1+k_2)^2+(k_1+k_3)^2+(k_1+k_4)^2-3\mu^2)\\&=-ig^2(k_1^2+k_2^2+k_3^2+k_4^2-3\mu^2)=-ig^2\mu^2
\end{align}
$$
其次，对于项 $g^2(\frac12 A^2\partial_\mu A\partial^\mu A-\frac18\mu^2A^4)$，其基本顶点为：

<div align="center">
  <img src="./pictures/Pasted image 20260107131508.png" width="700">
</div>

表达式为：
$$
ig^2[k_1^2+k_2^2+k_3^2+k_4^2-3\mu^2]=ig^2\mu^2
$$
其本身就是 $O(g^2)$ 阶的双介子弹性散射图，因此Feynman振幅即上面的表达式。故总的散射振幅为：
$$
\mathcal A_{\text{tot}}=-ig^2\mu^2+ig^2\mu^2=0
$$
因此我们验证了散射振幅为零的结论。

---
