---
title: "Coleman QFT Lecture 28: 泛函积分与Feynman图"
---

泛函积分的最开始的版本称为“路径积分”，由Feynman在20世纪40年代首先引入。这种方法将为我们带来巨大优势，使我们能够处理导数耦合、冗余变量、规范不变性等问题。函数积分有时也被称为“函数空间积分”或“无限维空间积分”。我们都知道如何在一维空间或 $n$ 维空间上进行积分运算，现在我要将 $n$ 取为无穷大。

## 28.1 从Gauss积分开始

Gauss积分你肯定早就见过，一维情形下的结果为：
$$
\int_{-\infty}^{+\infty}\mathrm{d}x\,\mathrm{e}^{-\frac12 ax^2}=\sqrt{2\pi}\,a^{-\frac12}\quad (a>0)
$$
通过解析延拓，上式可以推广至 $a$ 为复数的情形，只要其实部大于零即可保证收敛。
我们也可以做 $n$ 维Gaussian：设 $\vec x\in\mathbb R^n$，对于任意对称矩阵 $A$，考虑二次型：
$$
(\vec x,A\vec x)=\vec x^TA\vec x=\sum_{a,b=1}^n x_a A_{ab}x_b
$$
通过对角化（对称矩阵一定可以正交对角化），有
$$
(\vec x,A\vec x)=\sum_{a=1}^n\lambda_a y_a^2
$$
$\lambda_a$ 就是 $A$ 的特征值。现在
$$
\int\mathrm{d}^n\vec x\,\mathrm{e}^{-\frac12(\vec x,A\vec x)}=(2\pi)^{n/2}\prod_{i=1}^n\lambda_i^{-1/2}=(2\pi)^{n/2}(\mathrm{det}\,A)^{-1/2}
$$
因为后面要将其推广至 $n\to \infty$ 情形，我们不希望结果中存在一个发散因子 $(2\pi)^{n/2}$。为了符号的简洁，定义
$$
(\mathrm{d}\vec x)\equiv\dfrac{\mathrm{d}^n\vec x}{(2\pi)^{n/2}}
$$
这样上面的式子就变成：
$$
\int(\mathrm{d}\vec x)\,\mathrm{e}^{-\frac12(\vec x,A\vec x)}=(\mathrm{det}\,A)^{-1/2}
$$
当然，我们还能做一般的二次式：
$$
Q(\vec x)=\dfrac12(\vec x,A\vec x)+(\vec b,\vec x)+c
$$
其最值在 $\bar x=-A^{-1}\vec b$ 处取到，此时
$$
Q(\vec x)=Q(\bar x)+\dfrac12(\vec x-\bar x,A(\vec x,\bar x)),\quad Q(\bar x)=-\dfrac12(\vec b,A^{-1}\vec b)+c
$$
对于其Gaussian，只需做换元 $\vec y\equiv \vec x-\bar x$，得到：
$$
\int(\mathrm{d}\vec x)\,\mathrm{e}^{-Q(\vec x)}=\mathrm{e}^{-Q(\bar x)}\int(\mathrm{d}\vec y)\,\mathrm{e}^{-\frac12(\vec y,A\vec y)}=\mathrm{e}^{-Q(\bar x)}(\mathrm{det}\, A)^{-1/2}
$$
我们可以更进一步，在被积函数中加入一个多项式 $P(\vec x)$，其可以通过对 $\vec b$ 求导得到：
$$
\int(\mathrm{d}\vec x)\,P(\vec x)\,\mathrm{e}^{-Q(\vec x)}=\int(\mathrm{d}\vec x)\,P\left(-\frac{\partial}{\partial \vec b}\right)\,\mathrm{e}^{-Q(\vec x)}=(\mathrm{det}\, A)^{-1/2}P\left(-\frac{\partial}{\partial \vec b}\right)\,\mathrm{e}^{-Q(\bar x)}
$$
我们甚至可以将其推广为复平面的积分，只需将其视为两个实变量的积分：
$$
\vec z=\dfrac{1}{\sqrt 2}(\vec x+i\vec y),\quad \mathrm{d}\vec z^*\mathrm{d}\vec z=\mathrm{d}\vec x\,\mathrm{d}\vec y
$$
则
$$
\int(\mathrm{d}\vec z^*)(\mathrm{d}\vec z)\,\mathrm{e}^{-(\vec z^*,A\vec z)}=(\mathrm{det}\,A)^{-1}
$$
现在，我们的所有公式中都不显式出现 $n$，因此可以将这些形式直接推广至 $n\to \infty$ 的情况。这就是**泛函积分**，叫这个名字是因为一般进行的无限维积分都是函数空间中的积分。同时，由于无限维积分空间常常是不可数无限的连续空间，我们使用的基也是连续的。例如，4维空间中的可积函数 $\phi(x)$ 构成一个线性空间，其内积定义为：
$$
(\phi_1,\phi_2)=\int\mathrm{d}^4\vec x\,\phi_1(x)\phi_2(x)
$$
将 $\phi(x)$ 视为一个无穷维列向量，其指标由 $x$ 表征，分量即 $x$ 处的取值。我可以定义二次式：
$$
Q[\phi]=\dfrac12\int\mathrm{d}^4 x\,\mathrm{d}^4y\,\phi(x)A(x,y)\phi(y)+\int\mathrm{d}^4 x\,b(x)\phi(x)+c
$$
$A(x,y)$ 称为**积分核(integral kernel)**。

## 28.2 场论中的泛函积分

我们先考虑最简单的情形，考虑一个经典标量场 $\phi$ 的无导数相互作用理论，并且加上一项外源耦合项：
$$
\mathcal L(\phi,J)=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2+\mathcal L'(\phi)
+J\phi$$
以及经典作用量为：
$$
S_c[\phi,J]=\int\mathrm{d}^4x\,\mathcal L(\phi,J)
$$
在量子场论中，[Coleman QFT - Lecture 13. Green函数与Heisenberg场](./Coleman%20QFT%20-%20Lecture%2013.%20Green%E5%87%BD%E6%95%B0%E4%B8%8EHeisenberg%E5%9C%BA.md)中提到过**生成泛函**，其定义为S矩阵的真空-真空分量：
$$
Z[J]=\langle 0|S|0\rangle_J
$$
通过研究其在 $J=0$ 处的各阶导数就可以得到所有Green函数。**泛函积分路径**就是说（我将在后面证明其与正则量子化等价）：
$$
\boxed{Z[J]=N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS_c[\phi,\,J]}}
$$
这里可以看到，右侧的式子完全是经典的。$N$ 是与 $J$ 无关的归一化常数，其满足：
$$
Z[0]=1
$$
$N$ 实际上与真空极化振幅有关。接下来，我将说明Green函数可以合法的延拓至Euclidean空间中，然后将说明泛函积分在Euclidean空间中是良定义的，最后我将说明泛函积分公式的正确性。
用Wick转动可以将Minkowski空间旋转至Euclidean空间，而不跨过任何极点：
$$
q_0\to \mathrm{e}^{i\alpha}q_0,\quad 0\le \alpha\le \dfrac\pi 2
$$
实际上等价于换元 $q_0=iq_4$（参见[Coleman QFT - Lecture 15. 重整化 I：确定抵消项](./Coleman%20QFT%20-%20Lecture%2015.%20%E9%87%8D%E6%95%B4%E5%8C%96%20I%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%8A%B5%E6%B6%88%E9%A1%B9.md)）这样 $k^2$ 变成
$$
k^2=-k_4^2-\vec k^2=-k_E^2
$$
回忆
$$
Z[J]=1+\sum_{n=1}^\infty\dfrac{(-i)^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,G^{(n)}(x_1,x_2,\cdots,x_n)J(x_1)\cdots J(x_n)
$$
我们做了动量空间的Wick转动，此时对坐标空间要做相反的Wick转动，才能维持内积 $k\cdot x$ 不变。即
$$
x_0\to -ix_0,\quad x_0\equiv-ix_4,\quad x_4\in\mathbb R
$$
这样才能使Euclidean空间的Fourier变换不会出现指数变换。现在，欧氏空间中的Green函数即定义为：
$$
G^{(n)}(x_1,x_2,\cdots ,x_n)=\langle 0|T[\phi_H(x_1)\cdots\phi_H(x_n)]|0\rangle
$$
假设 $x_1^0\ge x_2^0\ge\cdots\ge x^0_n$，则
$$
\begin{align}
\langle 0|T[\phi_H(x_1)\cdots\phi_H(x_n)]|0\rangle&=\langle0|\phi_H(\vec x_1,0)\mathrm{e}^{-iH(x_1^0-x_2^0)}\phi_H(\vec x_2,0)\cdots\mathrm{e}^{-iH(x_{n-1}^0-x_n^0)}\phi_H(\vec x_n,0)|0\rangle\\&=\sum_{i_1,\cdots,i_{n-1}}\langle 0|\phi_H(\vec x_1,0)|i_1\rangle\cdots\langle i_{n-1}|\phi_H(\vec x_n,0)|0\rangle\,\mathrm{e}^{-E_{i_1}(x_1^4-x_2^4)}\cdots\mathrm{e}^{-E_{i_{n-1}}(x_{n-1}^4-x_n^4)}
\end{align}
$$
其中 $|i\rangle$ 是能量为 $E_i$ 的 $H$ 的本征态，这样就在Euclidean空间中定义了Green函数，故也可得到 $Z[J]$。因此 $Z[J]$ 在Euclidean中是良定义的。

## 28.3 自由理论的生成泛函

为证明公式的正确性，我们从自由理论开始，设 $\mathcal L'=0$，则
$$
\mathcal L(\phi,J)=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2+J(x)\phi
$$
这就是[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)研究过的Model 1。我们直接通过Wick图求得了其严格解：
$$
U_I(\infty,-\infty)=S=\exp(O_2/2):\exp(O_1):\;,\quad Z_0[J]=\langle0|S|0\rangle=\exp(O_2/2)=\mathrm{e}^{\frac12(-\alpha+i\beta)}
$$
$O_2$ 就是两点间的标量场缩并，直接计算表明：
$$
O_2=(-i)^2\int\mathrm{d}^4x_1\mathrm{d}^4x_2\,\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)J(x_1)J(x_2)=-\int\mathrm{d}^4x\mathrm{d}^4y\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}J(x)J(y)
$$
完成对 $x,y$ 的积分，得到：
$$
Z_0[J]=\exp\left[-\dfrac12\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\tilde J(-k)\dfrac{i}{k^2-\mu^2+i\epsilon}\tilde J(k)\right]
$$
事实上，我们也可以选择完成对动量的积分，即
$$
\begin{align}
&\int\mathrm{d}^4x\,\mathrm{d}^4y\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}J(x)J(y)=\int\mathrm{d}^4x\,\mathrm{d}^4y\dfrac{-i}{\square_x^2+\mu^2-i\epsilon}J(x)J(y)\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\\=&\int\mathrm{d}^4x\,\mathrm{d}^4y\,\dfrac{-i}{\square_x^2+\mu^2-i\epsilon}J(x)J(y)\,\delta^{(4)}(x-y)=\int\mathrm{d}^4 x\,J(x)\dfrac{-i}{\square^2+\mu^2-i\epsilon}J(x)
\end{align}
$$
因此
$$
Z_0[J]=\exp\left[\dfrac12\int\mathrm{d}^4 x\,J(x)\dfrac{i}{\square^2+\mu^2-i\epsilon}J(x)\right]
$$
进一步的，由
$$
\square^2=-\partial_4^2-\nabla^2=-\square_E^2,\quad \mathrm{d}^4x=-i\,\mathrm{d}^4x_E
$$
于是Euclidean空间的表达式就是：
$$
Z_0[J]=\exp\left\{\dfrac12\int\mathrm{d}^4x_E\,J(x)\dfrac{1}{-\square_E^2+\mu^2}J(x)\right\}=\exp\left[\dfrac12(J,(-\square_E^2+\mu^2)^{-1}J)\right]
$$
接下来我们来验证泛函积分公式的右侧，$N\displaystyle\int(\mathrm{d}\phi)\,\mathrm{e}^{iS_c[\phi,\,J]}$：
$$
\begin{align}
iS_c&=i\int\mathrm{d}^4x\,\left[\dfrac12(\partial_0\phi)^2-\dfrac12(\nabla\phi)^2-\dfrac12\mu^2\phi^2+J\phi\right]\\
&=\int\mathrm{d}^4x_E\,\left[-\dfrac12(\partial_4\phi)^2-\dfrac12(\nabla\phi)^2-\dfrac12\mu^2\phi^2+J\phi\right]\\
&\simeq -\int\mathrm{d}^4x_E\,\left[\dfrac12\phi(-\square^2_E+\mu^2)\phi-J\phi\right]
\end{align}
$$
现在，这是关于 $\phi$ 的Gauss积分，有
$$
A=-\square_E^2+\mu^2,\quad b=J
$$
因此
$$
\int(\mathrm{d}\phi)\exp\left[-\dfrac12(\phi,A\phi)+(b,\phi)\right]=\exp\left[\dfrac12(b,A^{-1}b)\right](\mathrm{det}\,A)^{-1/2}
$$
$$
N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS_c[\phi,\,J]}=N\,\mathrm{det}\,(-\square_E^2+\mu^2)^{-\frac12}\exp\left[\dfrac12(J,(-\square_E^2+\mu^2)^{-1}J)\right]
$$
由于 $Z_0[0]=1$，因此
$$
N\,\mathrm{det}\,(-\square_E^2+\mu^2)^{-\frac12}=1
$$
故确实得到了：
$$
Z_0[J]=N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS_c[\phi,\,J]}=\exp\left[\dfrac12(J,(-\square_E^2+\mu^2)^{-1}J)\right]
$$
即我们验证了自由情形下泛函积分公式的正确性。在后面，我们会直接写Minkowski空间中的表达式：
$$
Z_0[J]=\exp\left[-\dfrac12\left(J,\dfrac{i}{-\square^2-\mu^2+i\epsilon}J\right)\right]
$$
你应当知道其可以通过Wick转动得到我们会算的Euclidean空间中的积分。

## 28.4 相互作用理论的生成泛函

接下来，我们希望证明泛函积分公式对一般的相互作用理论都是正确的。你可能会觉得这非常困难，毕竟绝大部分的相互作用理论都没办法精确求解。但这其实一点也不难，我们只需要证明其与Dyson公式等价即可。原始的Dyson公式给出：
$$
Z[J]=N'\,^B\langle 0|T\exp\left(-i\int\mathrm{d}^4x\,\mathcal H_I\right)|0\rangle^B=N'\,^B\langle 0|T\exp\left(-i\int\mathrm{d}^4x\,(\mathcal L'(\phi_I)+J\phi_I)\right)|0\rangle^B
$$
这里的 $N'$ 同样用于使 $Z[J=0]=1$，即消除不连通的真空泡。实际上
$$
N'=\,^B\langle 0|T\exp\left(-i\int\mathrm{d}^4x\,\mathcal L'(\phi_I)\right)|0\rangle^B
$$
使用技巧：
$$
Z[J]=N'\exp\left[i\int\mathrm{d}^4z\,\mathcal L'\left(-i\dfrac{\delta}{\delta J(z)}\right)\right]\,^B\langle 0|T\exp\left(-i\int\mathrm{d}^4x\,J\phi_I\right)|0\rangle^B=N'\exp\left[i\int\mathrm{d}^4z\,\mathcal L'\left(-i\dfrac{\delta}{\delta J(z)}\right)\right]Z_0[J]
$$
因此一般的相互作用可以通过对 $Z_0[J]$ 求泛函导数得到。另一方面，对于公式的右侧，令自由情形的作用量为：
$$
S_0[\phi,J]=\int\mathrm{d}^4x\,[\mathcal L_0+J\phi]
$$
则
$$
\begin{align}
N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS[\phi,J]}&=N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS_0[\phi,J]}\exp\left(i\int\mathrm{d}^4y\,\,\mathcal L'(\phi(y))\right)\\&=N\exp\left[i\int\mathrm{d}^4z\,\mathcal L'\left(-i\dfrac{\delta}{\delta J(z)}\right)\right]\underbrace{\int(\mathrm{d}\phi)\,\mathrm{e}^{iS_0[\phi,J]}}_{N_0^{-1}Z_0[J]}
\end{align}
$$
因此，我们取
$$
N=N_0N'
$$
则
$$
Z[J]=N'\,^B\langle 0|T\exp\left(-i\int\mathrm{d}^4x\,(\mathcal L'(\phi_I)+J\phi_I)\right)|0\rangle^B=N\int(\mathrm{d}\phi)\,\mathrm{e}^{iS[\phi,J]}
$$
可以看到，外源项 $J\phi$ 在上面的证明过程中起到了很大的作用。可以将相互作用项中的 $\phi$ 换为对 $J(x)$ 的泛函导数，这样就转换为对 $Z_0[J]$ 的泛函导数，因此可以化成经典情形。

## 28.5 泛函积分导出Feynman规则

现在，我们完成了对一个简单的标量场理论的泛函公式证明，即
$$
Z[J]=N\exp\left[i\int\mathrm{d}^4z\,\mathcal L'\left(-i\dfrac{\delta}{\delta J(z)}\right)\right]Z_0[J] 
$$
其中
$$
Z_0[J]=\exp\left\{-\dfrac12\int\mathrm{d}^4x\,\mathrm{d}^4y\,J(x)\Delta_F(x-y)J(y)\right\},\quad \Delta_F(x-y)=\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\mathrm{e}^{-ik\cdot(x-y)}\dfrac{i}{k^2-\mu^2+i\epsilon}
$$
这里我保留了积分的形式。我们将 $Z_0[J]$ 做展开：
$$
Z_0[J]=\sum_n\dfrac{1}{2^n n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\mathrm{d}^4y_1\cdots\mathrm{d}^4y_n\left[(iJ(x_1))\Delta_F(x_1-y_1)(iJ(y_1))\cdots(iJ(x_n))\Delta_F(x_n-y_n)(iJ(y_n))\right]
$$
这里，每一项 $\displaystyle\int\mathrm{d}^4x_i\,\mathrm{d}^4y_i(iJ(x_i))\Delta_F(x_i-y_i)(iJ(y_i))$ 代表中间一个传播子内线，两侧源作为内线端点的图。因此，求和的 $n$ 阶项就对应于 $n$ 根不连通内线的Feynman图，例如：

<div align="center">
  <img src="./pictures/Pasted image 20260220190158.png" width="600">
</div>

接下来，相互作用项对应于
$$
\exp\left[i\int\mathrm{d}^4x\,\mathcal L'\left(-i\dfrac{\delta}{\delta J(z)}\right)\right]
$$
每一个 $-i\dfrac{\delta}{\delta J(z)}$ 会“敲掉”一个顶点，使得其不得不与其他的线段相连。这就回到了Feynman图的顶点对应于相互作用。具体来算一个。考虑
$$
\mathcal L'(\phi)=g\phi^3
$$
研究其作用于 $Z_0[J]^{(4)}$ 的效果。非平凡的第一项为：
$$
ig\int\mathrm{d}^4z\left(-i\dfrac{\delta}{\delta J(z)}\right)^3
$$
因此其会敲掉三个源顶点，使其相连。这又有两种可能：

<div align="center">
  <img src="./pictures/Pasted image 20260220191049.png" width="60%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20260220191101.png" width="18%" style="display: inline-block;">
</div>

这将导致右图所示的顶点。另一种可能是：

<div align="center">
  <img src="./pictures/Pasted image 20260220191219.png" width="60%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20260220191233.png" width="18%" style="display: inline-block;">
</div>

对于二阶项，则相当于有两个顶点。可能的Feynman图就是

<div align="center">
  <img src="./pictures/Pasted image 20260220200023.png" width="15%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20260220200036.png" width="30%" style="display: inline-block;">
</div>

我不想谈论那些麻烦的组合问题，这里只是演示泛函积分是如何导出Feynman规则的。相互作用通过作用于 $J(x)$ 上得到顶点处的delta函数：
$$
\dfrac{\delta J(x_i)}{\delta J(z)}=\delta^{(4)}(x_i-z)
$$
这是普通离散变量 $\partial x^a/\partial x^b=\delta^a_b$ 的推广。其可以由
$$
\delta J(x_i)=\int\mathrm{d}^4z\,\dfrac{\delta J(x_i)}{\delta J(z)}\delta J(z)
$$
推出。
积分核 $A$ 决定了传播子。在标量场的例子中，注意到其传播子满足：
$$
\Delta_F(x-y)=\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\mathrm{e}^{-ik\cdot(x-y)}\dfrac{i}{k^2-\mu^2+i\epsilon}=\dfrac{i}{-\square^2-\mu^2+i\epsilon}\delta^{(4)}(x-y)
$$
而积分核为：
$$
A=-\square^2-\mu^2
$$
因此
$$
A\Delta_F(x-y)=i\delta^{(4)}(x-y)
$$
这个关系式就是通过积分核确定传播子的方法。对于一般的理论，若其泛函积分可以写为Gaussian的形式：
$$
Z[J]\equiv\int(\mathrm{d}\phi)\exp\left\{i\left[\dfrac12(\phi,A\phi)+(J,\phi)+S'(\phi)\right]\right\}
$$
则**传播子就是积分核 $A$ 的逆**：
$$
AD_F(x-y)=i\delta^{(4)}(x-y)
$$
下次我们会对一些更为棘手的情况进行处理。在本章的最后，我们先来尝试将这一流程应用于有质量矢量介子理论的量子化。

## 28.6 有质量矢量介子的传播子

这里，为了不与积分核 $A$ 的记号混淆，用 $B_\mu$ 指代矢量场。其经典自由作用量会给出传播子，让我们验证这一点：
$$
\begin{align}
S_0(B_\mu)&=\int\mathrm{d}^4x\left[-\dfrac14 F_{\mu\nu}F^{\mu\nu}+\dfrac12\mu^2 B_\mu B^\mu\right]\\
&=\int\mathrm{d}^4x\left[-\dfrac12 \partial_\mu B_\nu(\partial^\mu B^\nu-\partial^\nu B^\mu)+\dfrac12\mu^2 B_\mu B^\mu\right]\\
&\simeq \int\mathrm{d}^4x\left[\dfrac12 B_\mu\left(g^{\mu\nu}\square^2-\partial^\mu\partial^\nu+\mu^2 g^{\mu\nu}\right)B_\nu\right]\\
&\equiv \int\mathrm{d}^4x\,\dfrac12 B_\mu A^{\mu\nu}B_\nu
\end{align}
$$
这样就化成了二次型，因此传播子就是 $A_{\mu\nu}$ 的逆，也就是
$$
A^{\mu\nu}D_{\nu\rho}^P(x-y)=\left(g^{\mu\nu}\square^2-\partial^\mu\partial^\nu+\mu^2 g^{\mu\nu}\right)D_{\nu\rho}^P(x-y)=i\delta^\mu_\rho\delta^{(4)}(x-y)
$$
怎么求这个微分算子的逆呢？（这本质上就是求解微分方程的Green函数）一个常用的方法就是做Fourier变换，换到动量空间：
$$
D_{\nu\rho}^P(x)=\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\,\mathrm{e}^{-ik\cdot x}\tilde D^P_{\nu\rho}(k),\quad (-k^2g^{\mu\nu}+k^\mu k^\nu+\mu^2 g^{\mu\nu})\tilde D^P_{\nu\rho}(k)=i\delta_\rho^\mu
$$
接下来怎么办呢？受到[Coleman QFT - Lecture 26. 矢量场](./Coleman%20QFT%20-%20Lecture%2026.%20%E7%9F%A2%E9%87%8F%E5%9C%BA.md)中的启发，这个算符可以分解为**纵向与横向**两部分，投影算符为
$$
P_{\mu\nu}^L=\dfrac{k_\mu k_\nu}{k^2},\quad P_{\mu\nu}^T=g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2}
$$
其满足：
$$
P^T_{\mu\nu}+P^L_{\mu\nu}=g_{\mu\nu},\quad P_{\mu\nu}^{T/L} P^{T/L\,\nu}_\rho=P^{T/L}_{\mu\rho},\quad P_{\mu\nu}^{T/L} P^{L/T\,\nu}_\rho=0
$$
这是投影算符的一般性质。现在算符可以写为：
$$
\tilde A_{\mu\nu}=-k^2g^{\mu\nu}+k^\mu k^\nu+\mu^2 g^{\mu\nu}=(-k^2+\mu^2) P_{\mu\nu}^T+\mu^2 P_{\mu\nu}^L
$$
现在指标依赖都进入投影算符里面了，投影算符的逆就是自身，因此
$$
\tilde D_{\mu\nu}^P(k)=\dfrac{i P^T_{\mu\nu}}{-k^2+\mu^2}+\dfrac{iP^L_{\mu\nu}}{\mu^2}=-\dfrac{i}{k^2-\mu^2}\left[g_{\mu\nu}-\dfrac{k_\mu k_\nu}{\mu^2}\right]\to \dfrac{i}{k^2-\mu^2+i\epsilon}\left[-g_{\mu\nu}+\dfrac{k_\mu k_\nu}{\mu^2}\right]
$$
这里由于在Minkowski空间中 $(k^2-\mu^2)^{-1}$ 不是一个良定义的算符，因此我们要给它补上 $i\epsilon$。这个式子正是早在[Coleman QFT - Lecture 26. 矢量场](./Coleman%20QFT%20-%20Lecture%2026.%20%E7%9F%A2%E9%87%8F%E5%9C%BA.md)中得到的传播子的表达式。因子
$$
-g_{\mu\nu}+\dfrac{k_\mu k_\nu}{\mu^2}
$$
就是将在壳的介子投影至横向极化的投影算符 $P_{\mu\nu}^T$  。这进一步证明了泛函积分的正确性。

---
