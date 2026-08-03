---
title: "Coleman QFT Lecture 8: 微扰理论 I：Wick diagram"
---

本节正式进入微扰论的具体计算。其目标在于计算相互作用绘景下的时间演化算符 $U_I(\infty,-\infty)$。必要时参考前一篇文章：[[Coleman QFT - Lecture 7. 微扰论与散射理论初步]]。我们将从时序积的表达式出发：
$$
S=U_I(\infty,-\infty)=T\exp\left(-i\int_{-\infty}^\infty \mathrm{d}t\,H_I(t)\right)
$$
## 8.1 三个相互作用模型

接下来，我们将给出三个含时微扰的具体物理模型。其将成为我们后面处理这类问题的引导例子。

>[!example]
>**Model 1**：Lagrangian为
>$$\mathcal L=\dfrac12(\partial^\mu\phi)(\partial_\mu\phi)-\dfrac12 \mu^2\phi^2-g\rho(x)\phi(x)$$
>可以看到前半部分就是自由标量场的Lagrangian，后面的一项则刻画了标量场 $\phi(x)$ 与一个时空坐标依赖的c-number场 $\rho(x)$ 的耦合或相互作用。常数 $g$ 称为**耦合常数**。

标量场满足的运动方程（即E-L方程）为：
$$
(\,\square^2+\mu^2)\phi(x)=-g\rho(x)
$$
这个方程实际上很像电动力学中势满足的d'Alembert方程：
$$
\square^2 A^\mu=-eJ^\mu
$$
因此我们可以将 $\rho(x)$ 理解为一种“源”。我们知道，变化的电流与电荷会激发出电磁波，或者说是量子化的光子。因此，我们预期 $\rho(x)$ 的变化同样会激发出波动的 $\phi(x)$，或者说激发出介子。

>[!example]
>**Model 2**：Lagrangian为
>$$\mathcal L=\dfrac12(\partial^\mu\phi)(\partial_\mu\phi)-\dfrac12 \mu^2\phi^2-g\rho(\vec x)\phi(x)$$
>其与Model 1的差别在于 $\rho(x)$ 变成了 $\rho(\vec x)$ ，即源 $\rho(\vec x)$ 与时间无关。这可以类比为静电磁场的情形。


>[!example]
>**Model 3**：Lagrangian为
>$$\mathcal L=\dfrac12(\partial^\mu\phi)(\partial_\mu\phi)-\dfrac12 \mu^2\phi^2+\partial^\mu\psi^*\partial_\mu\psi-m^2\psi^*\psi-g\phi\psi^*\psi$$
>这个模型中包含了两种标量场 $\phi,\psi$，其中 $\phi$ 场不带电（这里的电是指 SO(2) 内部对称性的守恒荷）而 $\psi,\psi^*$ 带电。同时最后一项描述两个场之间的耦合。可以视为两种粒子各自产生的场又互相影响造成了耦合。

$\phi$ 场的运动方程为：
$$
(\square^2+\mu^2)\phi=-g\psi^*\psi
$$
右侧相当于 $\phi$ 感受到的“源”。而 $\psi$ 场的运动方程为：
$$
(\square^2+m^2)\psi=-g\psi\phi
$$
可以看到两种场的互相影响的。这一模型实际上很像带电的核与中性的介子间耦合的Yukawa理论。
对于这三种模型，为计算 $U_I(\infty,-\infty)$，需写出其相互作用绘景下的哈密顿量。这实际就是微扰项。对Model 1，
$$
\mathcal H_I^{(1)}=g\rho(x)\phi(x)
$$
对 Model 2 , 3，我们要人为给它加上一个绝热“开关”$f(t)$。即
$$
\mathcal H_I^{(2)}=g f(t)\rho(\vec x)\phi(x),\quad \mathcal H_I^{(3)}=g f(t)\psi^*\psi\phi
$$

## 8.2 Wick定理

再次强调，我们的目标在于求解时序积表达式：
$$
S=U_I(\infty,-\infty)=T\exp\left(-i\int_{-\infty}^\infty \mathrm{d}t\,H_I(t)\right)
$$
然而，按时序积排列的场是不好计算矩阵元的。好计算矩阵元的是正规序排列。比如，我们要计算一个正规序的双粒子散射矩阵元：
$$
\langle p_1',p_2'|:\phi(x_1)\phi(x_2)\cdots\phi(x_n):|p_1,p_2\rangle
$$
由于是正规序，我们可以知道当 $n>4$ 时上面的表达式一定为零。为什么呢？每个 $\phi(x_i)$ 都含有产生算符 $a_{\vec p}^\dagger$ 与湮灭算符 $a_{\vec p}$，我们必须作用相等数量的产生-湮灭算符才能使矩阵元非零。当 $n>4$ 时，则至少要作用两个以上湮灭算符。但这会直接把双粒子态变成零。

因此，我们的任务变成了要将时序积表达式转化为正规序积。首先，我们先定义两个算符的**缩并**(contraction)，其直接定义为两个算符场的时序积与正规序积之差：
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;\;}}\mkern-3mu\normalsize |}{A(x_1) B} (x_2)=T(A(x_1)B(x_2))\;-:A(x_1)B(x_2):
$$
我先给出一个结论：

>[!claim]
>**缩并是一个纯数(c-number)。**

**Proof**：我们可以将场分成产生与湮灭部分：（带+角标的代表**湮灭算符**，带$-$角标的代表**产生算符**）
$$
A(x)=A^+(x)+A^-(x),\quad B(x)=B^+(x)+B^-(x)
$$
并且先假设 $x^0>y^0$，则
$$
T(A(x)B(y))=A^+(x)B^+(y)+A^-(x)B^+(y)+A^+(x)B^-(y)+A^-(x)B^-(y)
$$
而正规序要求+在后，因此上式中只有第三项不是正规序的，因此此时有：
$$
T(A(x)B(y))=\,:A(x)B(y):+[A^+(x),B^-(y)]
$$
显然，此对易子是一个**纯数**。或者更具体地说：
$$
[A^+(x),B^-(y)]=\begin{cases}
\Delta_+(x-y),\quad A=B\\
0,\quad A\ne B
\end{cases}
$$
这里 $\Delta_+(x-y)$ 是在第三章[[Coleman QFT - Lecture 3. 构建标量量子场]]中定义的，具体来说
$$
 \Delta _+(x-y)\equiv\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}(2\omega_{\vec p})}\mathrm{e}^{-ip\cdot (x-y)}
$$
对 $x^0<y^0$ 的讨论是类似的，实际上只需交换上面的 $x,y$ 即可。我们可以将其统一写为：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{A(x) A} (y)=\theta(x^0-y^0)\Delta_+(x-y)+\theta(y^0-x^0)\Delta_+(y-x)
$$
不论怎么样，它都是一个数而不是算符场。

另一避免使用阶跃函数的方法我们实际上已经在[[Coleman QFT - Problem 1]]中的第三题遇到过了。我们可以将 $\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x) \phi} (y)$ 夹在真空态之间（记住这是一个数，因此不论在哪个归一化态的平均值都等于这个数），但是正规序积作用在真空态上一定是零，因此：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x) \phi} (y)=\langle0|T(\phi(x)\phi(y))|0\rangle+\langle0|:\phi(x)\phi(y):|0\rangle=\langle0|T(\phi(x)\phi(y))|0\rangle
$$
在Problem 1的第三题中，我们证明了此表达式为：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x) \phi} (y)=\langle 0|T(\phi(x)\phi(y))|0\rangle=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
也就是说，对 $p^0$ 的积分自然会产生一个阶跃函数。后面将沿用这一表达式。
上面是对实标量场的缩并，对复标量场而言，你可以直接用其定义式计算（定义参考[[Coleman QFT - Lecture 6. 对称性与守恒律 II：内部对称性]]）：
$$
\psi=\dfrac{1}{\sqrt 2}(\phi^1+i\phi^2),\quad \psi^*=\dfrac{1}{\sqrt 2}(\phi^1-i\phi^2)
$$
则
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\psi^*(x) \psi} (y)=\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\psi(x) \psi^*} (y)=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
而其他的缩并均为零：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\psi^*(x) \psi^*} (y)=\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\psi(x) \psi} (y)=0
$$
最后说明两点：
- 我们可以将不相邻的两个场进行缩并，比如下式代表：
$$
:A(x)\overset {|\Large \mkern-2mu{}^{\overline{\quad\quad\quad }}\mkern-3mu\normalsize |}{B(y) C(z) D}(w):\,\equiv\;:A(x)C(z):\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{B(y)D} (w)
$$
- 为了简短，我们引入下面的记号：
$$
\phi^{a_1}(x_1)\phi^{a_2}(x_2)\cdots\phi^{a_n}(x_n)=\phi_1\phi_2\cdots\phi_n
$$
现在我们给出Wick定理：

>[!theorem]
>**Wick Theorem**：
>$$\begin{align}T(\phi_1\cdots\phi_n)=&:\phi_1\phi_2\cdots\phi_n:\\+&:\overset {|\Large \mkern-1mu{}^{\overline{\;\;\,}}\mkern-2mu\normalsize |}{\phi_1\phi_2}\phi_3\cdots\phi_n:(\text{其他所有有一个缩并的项})\\\\+&:\overset {|\Large \mkern-1mu{}^{\overline{\;\;\,}}\mkern-2mu\normalsize |}{\phi_1\phi_2}\overset {|\Large \mkern-1mu{}^{\overline{\;\;\,}}\mkern-2mu\normalsize |}{\phi_3\phi_4}+\cdots\phi_n:+(\text{其他所有有两个缩并的项})\\\\+&\cdots+(\text{其他所有有$\tfrac{n}{2}$或$\tfrac{n-1}{2}$个缩并的项})\end{align}$$

可以看到，等号右侧全是一些纯数与正规序积的乘积，因此Wick定理给出了从难算矩阵元的**时序积**形式到好计算矩阵元的**正规序积**形式的变换公式。下面来证明Wick定理：

**Proof**：我们采用数学归纳法来证明：先设 $W(\phi_1\phi_2\cdots \phi_n)$ 代表定理等号右侧的表达式。$n=1$ 时，上面公式给出 $T(\phi_1)=W(\phi_1)=\phi_1$ 是平凡的。来看 $n=2$ 情形，其代表
$$
T(\phi_1\phi_2)=W(\phi_1\phi_2)=\;:\phi_1\phi_2:+:\overset {|\Large \mkern-2mu{}^{\overline{\;\;\,}}\mkern-2mu\normalsize |}{\phi_1\phi_2}:=\;:\phi_1\phi_2:+\,\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-2mu\normalsize |}{\phi_1\phi_2}
$$
这正是缩并的定义式。
不失一般性的，我们可以重新排列场，使得 $x_1^0\geq x_2^0\geq\cdots\geq x_n^0$。（等号左右均与一开始的排列顺序无关）。根据归纳假设，有
$$
T(\phi_2\cdots\phi_n)=W(\phi_2\cdots\phi_n)
$$
在其左侧作用场 $\phi_1$：
$$
T(\phi_1\phi_2\cdots\phi_n)=\phi_1 T(\phi_2\cdots\phi_n)=\phi_1 W(\phi_2\cdots\phi_n)
$$
将 $\phi_1$ 拆分为产生与湮灭部分：
$$
\mathrm{RHS}=(\phi_1^++\phi_1^-) W(\phi_2\cdots\phi_n)=\phi_1^+ W(\phi_2\cdots\phi_n)+W(\phi_2\cdots\phi_n)\phi_1^-+[\phi_1^+, W(\phi_2\cdots\phi_n)]
$$
前两项 $\phi_1$ 的存在不会破坏正规序，因此其包含 $:\phi_1\phi_2\cdots\phi_n:$ 中所有**不涉及** $\phi_1$ 的缩并的正规序积。而最后一项由于 $\phi_1^+$ 与任何缩并的纯数都对易，因此其包含了所有**涉及** $\phi_1$ 缩并的正规序积（注意 $x_1^0$ 是最大的，因此 $[\phi^+_1,\phi_i]=[\phi^+_1,\phi_i^-]=\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-2mu\normalsize |}{\phi_1\phi_i}$）。两者合起来包含了 $:\phi_1\phi_2\cdots\phi_n:$ 所有的缩并，因此其就等于 $W(\phi_1\phi_2\cdots\phi_n)$。因此
$$
T(\phi_1\phi_2\cdots\phi_n)=W(\phi_1\phi_2\cdots\phi_n)
$$
即用归纳法证明了Wick定理。

Wick定理指出，时序积表达式 $T(\phi_1\phi_2\cdots\phi_n)$ 等于正规序积表达式 $:\phi_1\cdots\phi_n:$ 中考虑**所有可能的缩并**的表达式之和。其另一种表述方式为：
$$
T(\phi_1\phi_2\cdots\phi_n)=\;:\exp\left(\dfrac12\sum_{i,j=1}^n\;\,\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-2mu\normalsize |}{\phi_i\phi_j}\dfrac{\partial}{\partial \phi_i}\dfrac{\partial}{\partial \phi_j}\right)\phi_1\phi_2\cdots\phi_n:
$$
指数的展开式中每一项就代表了一种缩并方式。

## 8.3 Wick图与Wick展开

现在回到时间演化算符一开始的表达式：
$$
S=U_I(\infty,-\infty)=T\exp\left(-i\int \mathrm{d}^4x\,\mathcal H_I(t)\right)
$$
我们先拿Model 3举例：
$$
\mathcal H_I^{(3)}=gf(t)\psi^*\psi\phi
$$
因此上面的指数可以按 $g$ 的幂次进行展开。来看 $g^2$ 项：
$$
O(g^2):\quad \dfrac{(-ig)^2}{2!}\int\mathrm{d}^4x_1\mathrm{d}^4 x_2\,f(t_1)f(t_2)\,T(\psi_1^*\psi_1\phi_1\psi_2^*\psi_2\phi_2)
$$
由Wick定理，后面的时序积等于所有缩并的正规序积之和。接下来，我画出一个图来代表没有缩并的正规序 $:\psi_1^*\psi_1\phi_1\psi_2^*\psi_2\phi_2:$

<div align="center">
  <img src="./pictures/Pasted image 20251128092507.png" width="600">
</div>

这个图包含了两个所谓的**基本顶角**。每个顶角均由一根不带箭头的 $\phi$ 线与两根带箭头的 $\psi,\psi^*$ 线连接到同一顶点构成。其中向外的的箭头代表 $\psi^*$ 线，而向内箭头代表 $\psi$ 线。实际上，对于 $g^n$ 阶展开式，其无缩并的正规序积由 $n$ 个不相连的基本顶角表示。
那么，如何表示缩并呢？只需将缩并的两个场对应的线**相连**即可。比如 $\phi$ 场缩并的正规序积 $:\psi_1^*\psi_1\overset{|\Large \mkern-2mu{}^{\overline{\quad\quad}}\mkern-2mu\normalsize |}{\phi_1 \psi_2^*\psi_2\phi_2}:$ 由下面的图表示：

<div align="center">
  <img src="./pictures/Pasted image 20251128101128.png" width="600">
</div>

其包含的场算符为 $:\psi_1^*\psi_1\psi^*_2\psi_2:$ ，这代表核子（与反核子）的弹性散射。注意 $\psi$ 含有核子的湮灭算符与反核子的产生算符，而 $\psi^*$ 则相反，因此其对以下的过程有贡献（矩阵元非零）：
$$
N+N\to N+N,\quad \bar N+N\to\bar N+N,\quad \bar N+\bar N\to\bar N+\bar N
$$
但是其对于电荷不守恒的过程矩阵元为零，如 $N+N\to\bar N+\bar N$。这是因为 $\psi^*$ 总增加一个电荷，而 $\psi$ 总减少一个电荷。因此 $:\psi_1^*\psi_1\psi^*_2\psi_2:$ 贡献的过程一定满足**电荷守恒**。
实际上还有一些过程的矩阵元也非零，比如下面的过程：
$$
\text{vacuum}\to N+N+\bar N+\bar N
$$
其满足电荷守恒，矩阵元非零。但是其对散射矩阵没有贡献，这是因为其不满足**能动量守恒**。$S$ 的表达式中还要对 $\mathrm{d}^4x$ 积分，而 $\psi,\psi^*$ 的平面波展开式含有 $\mathrm{e}^{\pm ip\cdot x}$，因此会产生一个 $\delta$ 函数 $\delta(p_i-p_f)$，其保证所有过程均必须满足能动量守恒。

当然，缩并方式不止这一种。我们还能将 $\psi$ 与 $\psi^*$ 缩并。比如下面的项：
$$
\dfrac{(-ig)^2}{2!}\int\mathrm{d}^4x_1\mathrm{d}^4 x_2\,f(t_1)f(t_2)\,:\overset{|\Large \mkern-2mu{}^{\overline{\quad\quad\quad}}\mkern-2mu\normalsize |}{\psi_1^* \psi_1\phi_1\psi^*_2\psi_2}\phi_2:
$$
其可以用下面的图表示：

<div align="center">
  <img src="./pictures/Pasted image 20251128103328.png" width="600">
</div>

此时剩下的场算符为 $:\psi_1\phi_1\psi^*_2\phi_2:$ ，其对以下的过程有贡献：
$$
N+\phi\to N+\phi,\quad \bar N+\phi\to \bar N+\phi,\quad N+\bar N\to \phi+\phi
$$
诸如 $N\to\phi+\phi+N$ 的过程同样由于能动量守恒被禁止。

上面画出的图称为**Wick图**。我们知道，缩并在此情境下只允许上面的两种方式。因此，我们只能在图上将无箭头的 $\phi$ 线相连，或者将同向箭头的 $\psi,\psi^*$ 线相连。可以发现，Wick展开式中的项与“合法的”Wick图是**一一对应**的。因此，如果要求解Dyson级数中的某一特定阶的项（比如 $g^n$ 阶项），我们只需画出所有含 $n$ 个顶点的“合法的”Wick图，并将其对应的Wick展开式相加即可。我们还可以对更复杂的缩并画出对应的Wick图，比如：

<div align="center">
  <img src="./pictures/Pasted image 20251128104336.png" width="500">
</div>

其对应的Wick展开式实际上是一个纯数。

## 8.4 Wick图的连通性

当我求的阶数越来越高时，画出所有可能的Wick图也是困难的。因此这一节来介绍一个技巧。首先，注意到上面的图我们都小心的标注了顶点的序号，也就是说我们区分了下面的表达式：
$$
:\overset{|\Large \mkern-2mu{}^{\overline{\quad\quad\quad}}\mkern-2mu\normalsize |}{\psi_1^* \psi_1\phi_1\psi^*_2\psi_2}\phi_2:\quad\text{and}\quad :\psi_1^* \overset{|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-2mu\normalsize |}{\psi_1\phi_1\psi^*_2}\psi_2\phi_2:
$$
这两者确实在Wick展开式中是不同的项。因此下面两幅图都有贡献，是**不同**的图：

<div align="center">
  <img src="./pictures/Pasted image 20251128110451.png" width="600">
</div>

然而，我们最后的积分关于 $x_1$ 与 $x_2$ 是对称的，因此上面两项对总散射振幅有相同的贡献。更一般的，对于任意的Wick图，如果我们只是交换序号，其贡献显然不变。为此，我们希望去掉这种冗余度，将顶点上的标记“擦掉”。为此，我们先定义如下的量：
对于一个Wick图 $D$，定义与其关联的算符 $O(D)$ 为对应的Wick展开式，但要去掉前面系数分母上的阶乘。如上面的图8.3对应的算符为：
$$
O(D)={(-ig)^2}\int\mathrm{d}^4x_1\mathrm{d}^4 x_2\,f(t_1)f(t_2)\,:\psi_1^*\psi_1\overset{|\Large \mkern-2mu{}^{\overline{\quad\quad\,}}\mkern-2mu\normalsize |}{\phi_1 \psi_2^*\psi_2\phi_2}:
$$
同时定义 $n(D)$ 为 $D$ 中的顶点个数。因此，Wick展开式即为：
$$
\text{图 $D$ 对应的 Wick 展开式}=\dfrac{O(D)}{n(D)!}
$$
现在，我们要将顶点擦掉，也就是同时考虑 $n(D)!$ 个具有相同结构的Wick图。然而，这些Wick图中可能存在**相同**的图。比如看下面的两幅图：

<div align="center">
  <img src="./pictures/Pasted image 20251128111713.png" width="500">
</div>

其只是相当于对整个图做了一个旋转，因此对应于Wick展开式中相同的图，**我们不能重复计算**。现在记对于图 $D$，其存在 $S(D)$ 种置换顶点标记可以得到相同的Wick图。故与图 $D$ 有相同结构的不同的图共有 $\dfrac{n(D)!}{S(D)}$ 个。因此，这一组与图 $D$ 有相同结构的图的总贡献为：
$$
\text{与图 $D$ 有相同结构的图的总贡献}=\dfrac{O(D)}{n(D)!}\cdot\dfrac{n(D)!}{S(D)}=\dfrac{O(D)}{S(D)}
$$
接下来介绍**连通性**的概念。这是很好理解的，一个图是**连通的**是指任意两个点均被线条直接或间接连在一起。比如图8.2就是不连通的，而现在展示的其他的图都是连通的。
任意一个不连通的图都可以分解成几个连通的部分，如下图是一个可被分为三个连通部分的不连通图：

<div align="center">
  <img src="./pictures/Pasted image 20251128112627.png" width="500">
</div>

接下来，我先直接陈述一个奇妙的定理：

>[!theorem]
>所有Wick图（对应的Wick展开式）之和等于所有**连通的**Wick图（对应的Wick展开式）之和的正规序的指数函数。即
>$$\sum \text{all Wick diagram}=\;:\exp\left(\sum\text{all connected Wick diagram}\right):$$

下面我们来证明这个定理。为此，先引入一些符号。记所有连通图为 $D^{(c)}_r,\;r=1,2,3,\cdots$ ，一个一般的Wick图 $D$ 一定可以分解为 $D^{(c)}_r$ 的组合，设其中有 $n_r$ 个连通图 $D_r^{(c)}$ ，其中 $n_r$ 显然为非负整数。比如图8.13中有两个左侧类型的连通图，一个右侧类型的连通图。由于不同的连通图之间不会通过缩并耦合，因此图 $D$ 的算符 $O(D)$ 可表示为：
$$
O(D)=\;:\prod_{r=1}^\infty\left[O(D^{(c)}_r)\right]^{n_r}:
$$
那 $S(D)$ 又是什么呢？显然，如果我们做在一个连通图内做保持其不变的置换，显然也会保持全图不变。但如果置换了两个连通图中的部分点，其不可能与原图相同。但这是有特例的，如果我们直接交换两个相同连通图中的所有点，显然全图是不变的。这会额外产生一个 $\prod_r n_r!$ 的因子。因此，保持全图不变的置换总数为：
$$
S(D)=\prod_{r=1}^\infty n_r!\left[S(D_r^{(c)})\right]^{n_r}
$$
因此，与 $D$ 有相同结构的图的贡献可以表示为：
$$
\dfrac{O(D)}{S(D)}=\,:\prod_{r=1}^\infty \dfrac{1}{n_r!}\left[\dfrac{O(D_r^{(c)})}{S(D_r^{(c)})}\right]^{n_r}:
$$
我们知道，散射矩阵即对所有的Wick图求和。这实际上等价于对每一个 $n_r$ 均独立的从 $0$ 求和至 $\infty$。（注意我们已经去掉了顶点标记），因此
$$
\begin{align}
&\sum\text{all Wick diagram}=\sum_{n_1=1}^\infty\sum_{n_2=1}^\infty\cdots:\prod_{r=1}^\infty \dfrac{1}{n_r!}\left[\dfrac{O(D_r^{(c)})}{S(D_r^{(c)})}\right]^{n_r}:\,\\&=\,:\prod_{r=1}^\infty\exp\left(\dfrac{O(D_r^{(c)})}{S(D_r^{(c)})}\right):\;=\;:\exp\left(\sum\text{all connected Wick diagram}\right):
\end{align}
$$
即证明了定理。
有了这个定理，我们就不用去考虑所有的Wick图了，只需考虑那些连通的Wick图就可以了。其将在下面我们对Model 1的计算中发挥很大的作用。

## 8.5 Model 1的精确求解

现在我们来尝试求解Model 1，其相互作用绘景下的哈密顿量为：
$$
\mathcal H_I=g\rho(x)\phi(x)
$$
其中只含一个 $\phi$ 场。因此其基本顶角仅含一根不带箭头的 $\phi$ 线。我们可以尝试画一画其连通的Wick图。事实上，其只有两个连通图：

<div align="center">
  <img src="./pictures/Pasted image 20251128134719.png" width="30%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20251128134745.png" width="30%" style="display: inline-block;">
</div>

因为连接两个顶点只有右图所示的一种方式，且其已经没有外线用来连接其他图。这两幅图分别记为 $D_1,D_2$，其对应算符为：
$$
O_1=-ig\int\mathrm{d}^4x_1\,\rho(x_1)\phi(x_1),\quad O_2=(-ig)^2\int\mathrm{d}^4x_1\mathrm{d}^4x_2\,\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)\rho(x_1)\rho(x_2)
$$
$O_2$实际上是一个纯数，我们将其记为 $-\alpha+i\beta$。
两个图实际上都只有一种模式，换句话说，$S(D_1)=1,S(D_2)=2$。至此，我们已经可以计算散射矩阵：
$$
S=U_I(\infty,-\infty)=\,:\exp\left(\dfrac{O_1}{1!}+\dfrac{O_2}{2!}\right):\;=\mathrm{e}^{\frac12(-\alpha+i\beta)}:\exp(O_1):
$$
我们先来计算 $:\exp(O_1):$ ，利用 $\phi(x)$ 的平面波展开式：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(\,a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+a^\dagger_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)
$$
先定义源的傅里叶变换：
$$
\tilde\rho(p)\equiv\int\mathrm{d}^4x\,\mathrm{e}^{ip\cdot x}\rho(x)
$$
则
$$
O_1=-ig\int\mathrm{d}^4x\,\rho(x)\phi(x)=-ig\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\left[a_\vec p\,\tilde\rho(\vec p,\omega_{\vec p})^*+a_{\vec p}^\dagger\,\tilde\rho(\vec p,\omega_{\vec p})\right]
$$
这里需要注意的是，我们只需要在质壳上的傅里叶变换 $\tilde\rho(\vec p,\omega_{\vec p})$ 即可。
为简单起见，我们定义：
$$
h(\vec p)\equiv\dfrac{-ig\,\tilde\rho(\vec p,\omega_{\vec p})}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}},\quad O_1=\int\mathrm{d}^3\vec p\,\left[-h(\vec p)^*a_{\vec p}+h(\vec p)a_{\vec p}^\dagger\right]
$$
先考虑最简单的情形，即初始态为真空态的情形。设 $A\equiv\mathrm{e}^{\frac12(-\alpha+i\beta)}$，则
$$
S\,|vac\rangle=A:\exp(O_1):|vac\rangle=A\exp\left[\int\mathrm{d}^3\vec p\,h(\vec p)a_{\vec p}^\dagger\right]|vac\rangle
$$
其显然含有各种粒子数的态。假设 $\psi^{(n)}(\vec p_1,\cdots,\vec p_n)=\langle\vec p_1,\cdots,\vec p_n|S|vac\rangle$，则
$$
|\psi\rangle=\sum_{n=0}^\infty\dfrac{1}{n!}\int\mathrm{d}^3\vec p_1\cdots\mathrm{d}^3\vec p_n\,\psi^{(n)}(\vec p_1,\cdots,\vec p_n)|\vec p_1,\cdots,\vec p_n\rangle
$$
直接将上面的式子展开得到：
$$
\psi^{(0)}=A,\quad \psi^{(1)}(\vec p)=Ah(\vec p),\quad \psi^{(2)}(\vec p_1,\vec p_2)=Ah(\vec p_1)h(\vec p_2),\quad\cdots
$$

最后的态为 $n$ 粒子态的概率为：
$$
P(n)=\dfrac{1}{n!}\int\mathrm{d}^3\vec p_1\cdots\mathrm{d}^3\vec p_n\,|\psi^{(n)}(\vec p_1,\cdots,\vec p_n)|^2=\dfrac{|A|^2}{n!}\left[\int\mathrm{d}^3\vec p\,|h(\vec p)|^2\right]^n
$$
我们要求总概率的归一化：
$$
\sum_{n=0}^\infty P(n)=|A|^2\exp\left(\int\mathrm{d}^3\vec p\,|h(\vec p)|^2\right)=1
$$
因此我们得到：
$$
|A|^2=\exp\left(-\int\mathrm{d}^3\vec p\,|h(\vec p)|^2\right)\Rightarrow\alpha=\int\mathrm{d}^3\vec p\,|h(\vec p)|^2
$$
$P(n)$ 服从Poisson过程：
$$
P(n)=\mathrm{e}^{-\alpha}\,\dfrac{\alpha^n}{n!},\quad \langle n\rangle=\alpha
$$
这样我们就完成了Model 1的求解。（实际上我们还没有求解 $\beta$ ，但其效果只是一个相位，我们先不管它。）这个模型的求解说明了当我们考虑一个**变化的**源 $\rho(x)$ 时，其可以凭空从真空态中激发出介子，且光子的数量服从泊松分布。从上面的过程中，可能看不出为何要强调时变化的源，这将在下一章中Model 2的求解中进行讨论。

事实上，熟悉QM中谐振子的相干态的人，能看出上面的介子态正是一个**相干态**(coherence state)。其为真空态作用产生算符的指数映射的结果：
$$
|\lambda\rangle\equiv\mathrm{e}^{\lambda a^\dagger}|0\rangle
$$
这个态是湮灭算符的本征函数：
$$
a|\lambda\rangle=a\mathrm{e}^{\lambda a^\dagger}|0\rangle=[a,\mathrm{e}^{\lambda a^\dagger}]|0\rangle=\lambda|\lambda\rangle
$$
上面得到的
$$
|\lambda\rangle=\;:\mathrm{e}^{O_1}:\;=\;:\exp\left[\lambda\int\mathrm{d}^3\vec p\,h(\vec p)a_{\vec p}^\dagger\right]:|0\rangle
$$
其为 $\phi^+$ 的本征函数，具体来说：
$$
\phi^+|\lambda\rangle=\lambda_\phi|\lambda\rangle,\quad\lambda_\phi=\lambda\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\mathrm{e}^{-ip\cdot x}\,h(\vec p)
$$
---
