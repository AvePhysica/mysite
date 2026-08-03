---
title: "Note 2. 量子Fourier变换"
---

本章介绍**量子傅里叶变换**(Quantum Fourier Transformation, QFT)
## 基本概念与量子线路实现

我们已经很熟悉连续傅里叶变换，其一种版本可以表述为：
$$
F(y)=\int_{-\infty}^{\infty}f(x)\,\mathrm{e}^{2\pi ixy}\,\mathrm{d}x,\quad f(x)=\int_{-\infty}^\infty F(y)\,\mathrm{e}^{-2\pi ixy}\,\mathrm{d}y
$$
离散傅里叶变换只需将上面的积分改为求和。$N$ 个离散数的傅里叶变换可以表述为：
$$
y_k=\dfrac{1}{\sqrt N}\sum_{j=0}^{N-1}x_j\,\mathrm{e}^{2\pi i\frac{jk}{N}},\quad x_j=\dfrac{1}{\sqrt N}\sum_{k=0}^{N-1}y_k\,\mathrm{e}^{-2\pi i\frac{jk}{N}}
$$
量子傅里叶变换(QFT)的作用对象是基矢，例如在 $N$ 维空间中，基矢 $\{|j\rangle\}$ 的量子傅里叶变换为：
$$
|j\rangle\to\dfrac{1}{\sqrt N}\sum_{k=0}^{N-1}|k\rangle\,\mathrm{e}^{2\pi i\frac{jk}{N}}
$$
这是一个幺正变换。对于任意态的变换为：
$$
\sum_{j=0}^{N-1}x_j|j\rangle\to\sum_{k=0}^{N-1}|k\rangle\left(\dfrac{1}{\sqrt N}\sum_{j=0}^{N-1}x_j\,\mathrm{e}^{2\pi i\frac{jk}{N}}\right)=\sum_{k=0}^{N-1}y_k|k\rangle
$$
即其相当于对系数做了离散傅里叶变换。

接下来，我们假设 $N=2^n$，即研究n个qubits的变换。系统基矢可用一个二级制数 $j=j_1\cdots j_n$ 表示。此时有下面的结论：
$$
|j_1\cdots j_n\rangle\xrightarrow{QFT}\dfrac{1}{2^{n/2}}(|0\rangle+\mathrm{e}^{2\pi i\,0.j_n}|1\rangle)(|0\rangle+\mathrm{e}^{2\pi i\,0.j_{n-1}j_n}|1\rangle)\cdots(|0\rangle+\mathrm{e}^{2\pi i\,0.j_1j_2\cdots j_n}|1\rangle)
$$
上式称为QFT的**乘积表示**。直接计算可验证：
$$
\begin{align}
|j_1\cdots j_n\rangle\xrightarrow{QFT}\dfrac{1}{2^{n/2}}\sum_{\{k_i=0,1\}}\mathrm{e}^{2\pi ij(\frac{k_1}{2}+\frac{k_2}{2^2}+\cdots+\frac{k_n}{2^n})}|k_1\cdots k_n\rangle=\dfrac{1}{2^{n/2}}\bigotimes_{i=1}^n(|0\rangle+\mathrm{e}^{2\pi i\frac{j}{2^i}}|1\rangle)\\=\dfrac{1}{2^{n/2}}(|0\rangle+\mathrm{e}^{2\pi i\,0.j_n}|1\rangle)(|0\rangle+\mathrm{e}^{2\pi i\,0.j_{n-1}j_n}|1\rangle)\cdots(|0\rangle+\mathrm{e}^{2\pi i\,0.j_1j_2\cdots j_n}|1\rangle)
\end{align}
$$
接下来，我们自然会考虑如何用量子线路实现QFT。首先的思路是设计线路实现变换：
$$
|j_1\rangle\to|0\rangle+\mathrm{e}^{2\pi i\,0.j_n}|1\rangle,\quad \cdots,\quad |j_n\rangle\to|0\rangle+\mathrm{e}^{2\pi i\,0.j_1\cdots j_n}|1\rangle
$$
但这是不行的，因为为了实现 $j_n$ 的变换，我们需要使用 $|j_1\rangle$，但其已经在第一步中变换掉了。因此，我们需要将整个过程反过来：
$$
|j_1\rangle\to|0\rangle+\mathrm{e}^{2\pi i\,0.j_1\cdots j_n}|1\rangle,\quad \cdots,\quad |j_n\rangle\to|0\rangle+\mathrm{e}^{2\pi i\,0.j_n}|1\rangle
$$
这样，后面的变换才不会用到前面的状态。最后我们再做交换运算：
$$
|j_1\rangle\leftrightarrow |j_n\rangle,\quad |j_2\rangle\leftrightarrow |j_{n-1}\rangle,\quad\cdots
$$
线路的实现需要用到旋转算符 $R_k=|0\rangle\langle 0|+\exp(2\pi i/2^k)|1\rangle\langle 1|$，QFT的实现线路如下图所示：

<div align="center">
  <img src="../pictures/Pasted image 20260503121311.png" width="600">
</div>

旋转门的叠加提供了变换的相位。同时，由于QFT变换是幺正的，我们将上面的线路反过来，就能实现**逆量子傅里叶变换**(Inverse QFT)。

对于经典的快速傅里叶变换(FFT)，其计算时间步长为 $N\log N=n 2^n$ ，而上面的QFT线路的门数量是 $O(n^2)$，因此其相对于经典傅里叶变换是有优势的。然而，QFT实际上有一些问题，首先，没有有效的方法制备初始的任意态 $\sum_{j=0}^{N-1}x_j|j\rangle$。其次也没办法提取出变换后状态的系数 $y_k$。也就是说，QFT并不能有效的用于求解**离散傅里叶变换**，但其在一些其他的问题上是有优势的。接下来就来介绍几个应用QFT线路的问题。
## 相位估计

我们的问题是：已知幺正算符 $U$ 有一个本征态 $|u\rangle$，满足
$$
U|u\rangle=\mathrm{e}^{2\pi i\varphi}|u\rangle
$$
希望对 $\varphi\in[0,1)$ 做出估计。
我们假设已经有一个Oracle可以制备状态 $|u\rangle$，并且可以执行 Controlled-$U^{2^j}$ 操作。采用下面的线路：

<div align="center">
  <img src="../pictures/Pasted image 20260503203820.png" width="600">
</div>

这里，由于 $|u\rangle$ 是 $U$ 的本征态，因此 Controlled-$U^{2^j}$ 门的作用只是产生一个相位，其等效于对上方的qubits作用一个相位。此时，注意到上面的输出正是QFT变换后的结果形式，因为假设 $\varphi=0.j_1\cdots j_t$，则
$$
2^0\varphi=0.j_1\cdots j_t,\quad\cdots\quad 2^{t-1}\varphi\sim0.j_t\quad(\text{整数部分不重要}) 
$$
因此，我们只需对结果做逆QFT，就能得到 $|j_1\rangle,\cdots,|j_t\rangle$。

<div align="center">
  <img src="../pictures/Pasted image 20260504095245.png" width="600">
</div>


再重新看这个过程，逆QFT变换的效果可以写为：
$$
\dfrac{1}{2^{t/2}}\sum_{j=0}^{2^t-1}\mathrm{e}^{2\pi ij\varphi}|j\rangle\otimes |u\rangle\xrightarrow{\text{inverse QFT}}\sum_{b=0}^{2^t-1}\left(\dfrac{1}{2^t}\sum_{j=0}^{2^t-1}\mathrm{e}^{\frac{2\pi ij}{2^t}(2^t\varphi-b)}\right)|b\rangle\otimes|u\rangle
$$
前面假设了 $2^t\varphi$ 为整数，因此求和的结果是 $\delta_{b,2^t\varphi}$，故逆QFT的结果就是 $|2^t\varphi\rangle\otimes|u\rangle$，这样就能完美得到 $\varphi$。而当 $2^t\varphi$ 并不是整数时，求和将得到一系列 $|b\rangle\otimes|u\rangle$ 的线性叠加，但其在 $b=\mathrm{int}\,2^t\varphi$ 处有峰值，因此测量时大概率能得到 $\varphi$ 的一个有限位数估计。因此相位估计并不是一个一定成功的算法。这里给出一个结论：定义 $b$ 的误差为 $\delta=|\varphi-2^{-t}b|\,(0\le \delta\le2^{-t})$，如果我们希望 $\delta<2^{-n}$，且算法的成功概率不低于 $1-\epsilon$，则所需的 $t$ 最小为：
$$
t=n+\log\left(2+\dfrac{1}{2\epsilon}\right)
$$
## 求阶问题与质因数分解

著名的RSA加密算法的核心在于，经典算法对一个大数分解质因数是困难的。对于分解 $N=p\times q$，现在最先进的经典算法完成的时间为：
$$
2^{(\log N)^a},\quad a=\dfrac13
$$
对于量子计算，其按下面的流程进行：
- 如果 $N$ 为偶数，则直接返回2。
- 确定 $N$ 是否可以写为形式 $N=a^b$，如果是则返回 $a$。此步可以用经典算法高效完成。
- 随机选取一个 $x\in\{2,\cdots,N-1\}$，如果 $\mathrm{GCD}(x,N)>1$ 则返回 $x$。
- 确定最小的 $r>0$ 使得 $x^r\equiv 1\,(\mathrm{mod}\,N)$。
- 若 $r$ 为偶时，计算 $\mathrm{GCD}(x^{r/2}-1,N)$ 与 $\mathrm{GCD}(x^{r/2}+1,N)$，检查其中是否包含非平凡结果。如果没有，则返回步骤3。
求最大公约数可以使用经典算法高效完成。因此上面需要量子算法参与的只有步骤4，这一步也称为**求阶问题**。
求阶问题实际上可以等效为一个相位估计问题。考虑一个幺正算符：
$$
U_x|y\rangle\equiv |xy\,\mathrm{mod}\,N\rangle
$$


