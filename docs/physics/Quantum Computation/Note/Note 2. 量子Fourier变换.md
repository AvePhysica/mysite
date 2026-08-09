---
title: "Note 2. 量子Fourier变换"
date: 2026-08-03
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

相位估计（Quantum Phase Estimation, QPE）要解决的问题是：已知幺正算符 $U$ 的一个本征态 $|u\rangle$，满足
$$
U|u\rangle=\mathrm{e}^{2\pi i\varphi}|u\rangle,\qquad \varphi\in[0,1),
$$
如何从量子线路中读出本征值所携带的相位 $\varphi$？这里假设我们能够制备 $|u\rangle$，并能执行 Controlled-$U^{2^k}$。前者给出相位所依附的本征态，后者负责将这个不可直接观测的全局相位“踢回”到辅助寄存器上。

### 1. 相位回踢

先考虑一个控制qubit处于 $\alpha|0\rangle+\beta|1\rangle$ 的情形。Controlled-$U^m$ 作用在它与本征态 $|u\rangle$ 上时，有
$$
\begin{aligned}
&\operatorname{C}(U^m)(\alpha|0\rangle+\beta|1\rangle)|u\rangle\\
={}&\alpha|0\rangle|u\rangle+\beta|1\rangle U^m|u\rangle\\
={}&\left(\alpha|0\rangle+\beta\mathrm{e}^{2\pi i m\varphi}|1\rangle\right)|u\rangle.
\end{aligned}
$$
目标寄存器仍然停留在 $|u\rangle$，但相位 $\mathrm{e}^{2\pi i m\varphi}$ 已经出现在控制qubit的相对相位中。相对相位可以通过干涉被测量，这就是后续使用QFT的入口。

### 2. 线路与状态演化

使用 $t$ 个辅助qubits，并记 $Q=2^t$。初态为 $|0\rangle^{\otimes t}|u\rangle$。对第一寄存器施加Hadamard门后，得到均匀叠加：
$$
|0\rangle^{\otimes t}|u\rangle
\longrightarrow
\dfrac{1}{\sqrt Q}\sum_{j=0}^{Q-1}|j\rangle|u\rangle.
$$
若 $j=j_{t-1}\cdots j_1j_0$，依次执行由第 $k$ 个qubit控制的 $U^{2^k}$，这些受控幂合起来正好实现 $U^j$，因此
$$
\dfrac{1}{\sqrt Q}\sum_{j=0}^{Q-1}|j\rangle|u\rangle
\longrightarrow
\dfrac{1}{\sqrt Q}\sum_{j=0}^{Q-1}|j\rangle U^j|u\rangle
=\dfrac{1}{\sqrt Q}\sum_{j=0}^{Q-1}\mathrm{e}^{2\pi i j\varphi}|j\rangle|u\rangle.
$$

<div align="center">
  <img src="../pictures/Pasted image 20260503203820.png" width="600">
</div>

如果 $\varphi$ 恰好有 $t$ 位有限二进制展开
$$
\varphi=0.\varphi_1\varphi_2\cdots\varphi_t,
$$
那么上式中的第一寄存器就是 $|Q\varphi\rangle$ 的QFT。换句话说，Controlled-$U^{2^k}$ 将 $2^k\varphi$ 的小数部分逐位写入了辅助qubits的相位；逆QFT再把这些相位转回计算基中的二进制数。

<div align="center">
  <img src="../pictures/Pasted image 20260504095245.png" width="600">
</div>

### 3. 精确相位与一般相位

对第一寄存器施加逆QFT后，完整状态为
$$
\sum_{b=0}^{Q-1}\alpha_b|b\rangle|u\rangle,\qquad
\alpha_b=\dfrac{1}{Q}\sum_{j=0}^{Q-1}
\mathrm{e}^{2\pi i j(\varphi-b/Q)}.
$$
当 $Q\varphi$ 是整数时，有限Fourier求和给出
$$
\alpha_b=\delta_{b,Q\varphi},
$$
所以测量必然得到 $b=Q\varphi$，从而精确恢复 $\varphi=b/Q$。

更一般地，$Q\varphi$ 通常不是整数。令
$$
\delta_b=\varphi-\dfrac{b}{Q},
$$
利用等比数列求和可得
$$
\alpha_b=
\dfrac{1-\mathrm{e}^{2\pi iQ\delta_b}}
{Q\left(1-\mathrm{e}^{2\pi i\delta_b}\right)},\qquad
P(b)=|\alpha_b|^2
=\dfrac{1}{Q^2}
\dfrac{\sin^2(\pi Q\delta_b)}{\sin^2(\pi\delta_b)}.
$$
这个分布在最接近 $Q\varphi$ 的整数附近形成尖峰。因此一次测量不会总是返回同一个 $b$，但 $b/Q$ 会以较高概率给出 $\varphi$ 的有限精度近似。QPE本质上是概率算法，而不是在任意相位下都能精确输出的算法。

如果希望误差满足
$$
\left|\varphi-\dfrac{b}{2^t}\right|\le 2^{-n},
$$
且成功概率至少为 $1-\epsilon$，一个常用的充分条件是
$$
t=n+\left\lceil\log_2\left(2+\dfrac{1}{2\epsilon}\right)\right\rceil.
$$
其中前 $n$ 个qubits负责精度，额外的qubits用于压低失败概率。若将 Controlled-$U^{2^k}$ 当作可调用的黑箱，Hadamard门需要 $O(t)$ 个，受控幂需要 $O(t)$ 次，逆QFT需要 $O(t^2)$ 个门，因此线路的门复杂度为 $O(t^2)$。若这些受控幂还需进一步分解，其真实成本则取决于具体的 $U$。

### 4. 输入不是精确本征态时

本征态似乎是QPE的苛刻前提，但若输入态可以展开为
$$
|\psi\rangle=\sum_a c_a|u_a\rangle,\qquad
U|u_a\rangle=\mathrm{e}^{2\pi i\varphi_a}|u_a\rangle,
$$
线性性保证线路会同时估计所有 $\varphi_a$。测量第一寄存器时，我们以约 $|c_a|^2$ 的概率得到 $\varphi_a$ 的估计，同时第二寄存器投影到对应的 $|u_a\rangle$。因此，真正必要的条件不是事先知道某个本征态，而是输入态与目标本征态有非零重叠。求阶算法正是利用了这一点。

## 求阶问题与质因数分解

给定互素的正整数 $x$ 与 $N$，$x$ 模 $N$ 的**阶**定义为满足
$$
x^r\equiv1\pmod N
$$
的最小正整数 $r$。数列
$$
1,x,x^2,\ldots,x^{r-1},x^r,x^{r+1},\ldots\pmod N
$$
会以 $r$ 为周期循环，求阶问题就是从 $x$ 和 $N$ 中找出这个未知周期。

求阶之所以值得单独研究，是因为Shor分解算法把大整数分解归约到了它。对待分解的奇合数 $N$，随机选取 $x\in\{2,\ldots,N-1\}$：若 $\gcd(x,N)>1$，已经直接找到了因子；否则求出 $x$ 模 $N$ 的阶 $r$。当 $r$ 为偶数且
$$
x^{r/2}\not\equiv-1\pmod N
$$
时，由
$$
(x^{r/2}-1)(x^{r/2}+1)\equiv0\pmod N
$$
可知，$\gcd(x^{r/2}-1,N)$ 与 $\gcd(x^{r/2}+1,N)$ 中至少能给出一个非平凡因子。求最大公约数和检查候选因子都能由经典算法高效完成，量子部分真正承担的任务只有求 $r$。

### 1. 一个简单例子

取 $x=5,N=21$，逐次计算可得
$$
5^1\equiv5,\quad
5^2\equiv4,\quad
5^3\equiv20,\quad
5^4\equiv16,\quad
5^5\equiv17,\quad
5^6\equiv1\pmod{21}.
$$
此前没有更小的正整数使结果回到 $1$，因此 $5$ 模 $21$ 的阶为 $r=6$。直接逐项尝试当然能解这个小例子，但当 $N$ 很大时，这种做法可能需要检查数量随 $N$ 增长的幂次，并不关于输入长度 $\log N$ 多项式高效。

### 2. 把求阶写成本征相位问题

令 $L=\lceil\log_2N\rceil$，在 $L$ 个qubits组成的第二寄存器上定义模乘算符
$$
U_x|y\rangle=|xy\bmod N\rangle,\qquad 0\le y<N.
$$
由于 $\gcd(x,N)=1$，乘以 $x$ 在模 $N$ 的剩余类上是一一映射，所以 $U_x$ 是一个置换，也就是幺正变换。为了把它定义在整个 $2^L$ 维空间中，可以约定当 $N\le y<2^L$ 时 $U_x|y\rangle=|y\rangle$；这部分不会参与算法。

在由 $|x^k\bmod N\rangle$ 张成的周期子空间中，定义
$$
|u_s\rangle=\dfrac{1}{\sqrt r}\sum_{k=0}^{r-1}
\mathrm{e}^{-2\pi isk/r}|x^k\bmod N\rangle,\qquad
s=0,1,\ldots,r-1.
$$
对它作用 $U_x$，并将指标循环平移一位，有
$$
\begin{aligned}
U_x|u_s\rangle
&=\dfrac{1}{\sqrt r}\sum_{k=0}^{r-1}
\mathrm{e}^{-2\pi isk/r}|x^{k+1}\bmod N\rangle\\
&=\mathrm{e}^{2\pi is/r}|u_s\rangle.
\end{aligned}
$$
因此 $U_x$ 的本征相位正是
$$
\varphi_s=\dfrac{s}{r}.
$$
只要能够对 $U_x$ 做相位估计，就能得到一个接近 $s/r$ 的有理数。分母中已经出现了我们要找的 $r$。

### 3. 不知道 $r$，如何制备本征态？

这里有一个看起来有点循环的地方：$|u_s\rangle$ 的定义依赖 $r$，但 $r$ 正是未知量。好在这些本征态的均匀叠加非常简单：
$$
\begin{aligned}
\dfrac{1}{\sqrt r}\sum_{s=0}^{r-1}|u_s\rangle
&=\dfrac{1}{r}\sum_{k=0}^{r-1}
\left(\sum_{s=0}^{r-1}\mathrm{e}^{-2\pi isk/r}\right)
|x^k\bmod N\rangle\\
&=|x^0\bmod N\rangle=|1\rangle.
\end{aligned}
$$
离散Fourier求和消去了所有 $k\ne0$ 的项。因此我们不需要知道任何一个 $|u_s\rangle$，只需把第二寄存器初始化为计算基态 $|1\rangle=|0\cdots01\rangle$。QPE会自动从这个叠加态中随机选出一个本征相位 $s/r$。

### 4. 求阶线路的状态演化

第一寄存器使用 $t$ 个qubits，记 $Q=2^t$。Hadamard门后，系统处于
$$
\dfrac{1}{\sqrt Q}\sum_{j=0}^{Q-1}|j\rangle|1\rangle.
$$
接下来执行受控模乘
$$
|j\rangle|y\rangle\longmapsto
|j\rangle|x^jy\bmod N\rangle.
$$
在线路中，它由 Controlled-$U_x^{2^k}$ 组成；各个常数 $x^{2^k}\bmod N$ 可以预先用重复平方计算。利用 $|1\rangle=r^{-1/2}\sum_s|u_s\rangle$，受控模乘后的状态可以写成
$$
\dfrac{1}{\sqrt{rQ}}
\sum_{s=0}^{r-1}\sum_{j=0}^{Q-1}
\mathrm{e}^{2\pi ijs/r}|j\rangle|u_s\rangle.
$$
对第一寄存器施加逆QFT并测量，就会随机得到某个 $s$ 对应的相位估计
$$
\dfrac{b}{Q}\approx\dfrac{s}{r}.
$$
由于 $|1\rangle$ 对每个 $|u_s\rangle$ 的权重相同，在理想情形下不同 $s$ 被选中的概率均为 $1/r$。注意测量直接给出的只是整数 $b$，并不会把 $r$ 写在屏幕上；从 $b/Q$ 恢复分母还需要最后一步经典后处理。

### 5. 用连分数恢复阶

有理逼近定理告诉我们：如果
$$
\left|\dfrac{b}{Q}-\dfrac{s}{r}\right|<\dfrac{1}{2r^2},
$$
那么约分后的 $s/r$ 一定出现在 $b/Q$ 的连分数渐近分数中。由于 $r<N$，通常选择
$$
N^2\le Q=2^t<2N^2,
$$
也就是取大约 $t=2L$ 个辅助qubits。这样QPE提供的精度足以用连分数找到候选分母。

若 $\gcd(s,r)=1$，约分后的分母就是 $r$；若二者不互素，只能得到 $r$ 的一个因子。因而每次得到候选 $r'$ 后，都必须经典验证
$$
x^{r'}\equiv1\pmod N.
$$
验证失败就重新运行算法；也可以收集多次测量得到的候选分母，再取它们的最小公倍数并继续验证。以 $x=5,N=21,r=6$ 为例，只有 $s=1,5$ 与 $6$ 互素时才能一次从约分分母中直接读出 $6$，其他结果可能只给出 $1,2$ 或 $3$。

### 6. 算法总结

求阶算法可以整理为下面几步：

1. 取 $L=\lceil\log_2N\rceil$，选择 $t\simeq2L$，制备 $|0\rangle^{\otimes t}|1\rangle$。
2. 对第一寄存器施加Hadamard门，得到 $Q=2^t$ 个计算基态的均匀叠加。
3. 执行 Controlled-$U_x^{2^k}$，等价于计算 $|j\rangle|1\rangle\mapsto|j\rangle|x^j\bmod N\rangle$。
4. 对第一寄存器施加逆QFT并测量，得到 $b$，使 $b/Q\approx s/r$。
5. 对 $b/Q$ 做连分数展开，提取分母小于 $N$ 的渐近分数，并用 $x^{r'}\equiv1\pmod N$ 验证候选阶。
6. 若候选无效则重复；得到正确的 $r$ 后，将它交回经典的最大公约数步骤完成因数分解。

这里的量子加速并不是因为QFT直接“算出了周期”，而是因为受控模乘把周期编码成了 $U_x$ 的本征相位，QFT再通过干涉把相位集中为可测量的频率峰。模指数运算、QFT和连分数后处理都能在 $\log N$ 的多项式时间内完成，这才使求阶算法成为Shor算法中真正关键的量子部分。
