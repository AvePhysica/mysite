---
title: "Coleman QFT Lecture 22: CPT与Fermi场"
---

本章来研究Dirac旋量场的分立对称性，即其在电荷共轭、宇称与时间反演下如何变换。
## 22.1 宇称与Fermi场

在标量场理论中，宇称的作用为：
$$
P:\phi(\vec x,t)\to \pm\phi(-\vec x,t)
$$
如果我们有更多的场 $\{\phi^a\}$，则其有可能在宇称下混合：
$$
P:\phi^a(\vec x,t)\to M_b^a\phi^b(-\vec x,t)
$$
那旋量场的变换是什么呢？条件是在宇称变换下Dirac方程仍成立，即
$$
(i\partial\mkern-9.5mu/-m)\psi=(i\gamma^\mu\partial_\mu-m)\psi=0
$$
在宇称变换下：
$$
\partial_0\to \partial_0,\quad \partial_i\to -\partial_i
$$
设 $P:\psi\to M\psi$，则变换矩阵 $M$ 要满足：
$$
[M,\gamma^0]=0,\quad \{M,\gamma^i\}=0
$$
满足条件的矩阵正是 $M=\gamma^0=\beta$（实际上还可差一个任意相位），因此
$$
\psi(\vec x,t)\to \mathrm{e}^{i\eta_p}\beta\psi(-\vec x,t)
$$
这就是旋量场的宇称变换规则。作为一个例子，考虑下面的旋量场与标量场的相互作用：
$$
\mathcal L_I=g\bar\psi i\gamma_5\psi\phi
$$
其在宇称变换下不变：
$$
P:\psi(\vec x,t)\to \mathrm{e}^{i\eta_p}\beta\psi(-\vec x,t),\quad \phi(\vec x,t)\to -\phi(-\vec x,t)
$$
下面，宇称对具体粒子的作用又是什么？考虑旋量场的展开：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_\vec p^{(r)}u_\vec p^{(r)}\mathrm{e}^{-ip\cdot x}+c_\vec p^{(r)\dagger} v_\vec p^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
因此
$$
\psi(-\vec x,t)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{-\vec p}^{(r)}u_{-\vec p}^{(r)}\mathrm{e}^{ip\cdot x}+c_{-\vec p}^{(r)\dagger} v_{-\vec p}^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
旋量在宇称变换下的性质为：
$$
\beta u_\vec p^{(r)}=u_{-\vec p}^{(r)},\quad \beta v_\vec p^{(r)}=-v_{-\vec p}^{(r)}
$$
因此
$$
\beta\psi(-\vec x,t)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{-\vec p}^{(r)}u_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot x}-c_{-\vec p}^{(r)\dagger} v_{\vec p}^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
也就是说，宇称对应的幺正算符对 $b_\vec p,c_\vec p^\dagger$ 的作用为：

$$
P:\,b_\vec p^{(r)}\to b_{-\vec p}^{(r)},\quad c_\vec p^{(r)\dagger}\to -c_{-\vec p}^{(r)\dagger}
$$
取共轭可以得到对 $b^\dagger_\vec p,c_\vec p$ 的作用是类似的。这说明了粒子与反粒子具有相反的宇称，这一点已经在实验上得到验证。考虑核反应：
$$
p+\bar p\to\begin{cases}
\pi^++\pi^-\\
\pi^0+\pi^0
\end{cases}
$$
在静止系中，该反应由 $s$ 波态主导，因此 $p\bar p$ 态的可能参数为：
$$
p\bar p:\begin{cases}
l=0,s=0,J=0,P=-1\\
l=0,s=1,J=1,P=-1
\end{cases}
$$
分别对应于自旋单态与三重态。对于末态，$\pi^\pm$ 是玻色子，有相同的宇称。因此末态的空间波函数一定是宇称反对称的，也就是说末态的参数只有可能是：
$$
2\pi:s=0,l=1,J=1,P=-1
$$
才能保证宇称不变性。这时再由 $J$ 守恒，得知初态为单态的 $p\bar p$ 不会发生上面的过程。

## 22.2 Majorana表示

接下来我们来讨论电荷共轭的作用。在带电（复）标量场中，**电荷共轭**的作用相当于对场的平面波展开式取“**复共轭**”：
$$
C:\phi(x)\leftrightarrow \phi^*(x)
$$
但注意区分电荷共轭与复共轭。前者是一个线性幺正算符，对于场的线性组合，其作用满足：
$$
U_C^\dagger(a\phi_1+b\phi_2)U_C=aU_C^\dagger \phi_1 U_C+bU_C^\dagger \phi_2U_C
$$
但是复共轭操作是反线性的，其会将系数也取复共轭。电荷共轭真正的作用是交换粒子与反粒子：
$$
C:b_\vec p\leftrightarrow c_\vec p,\quad b_\vec p^\dagger\leftrightarrow c_\vec p^\dagger
$$
你可以显式地写出展开式验证：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}[b_{\vec p}\,\mathrm{e}^{-ip\cdot x}+c_{\vec p}^\dagger\,\mathrm{e}^{ip\cdot x}],\quad \phi^*(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}[c_{\vec p}\,\mathrm{e}^{-ip\cdot x}+b_{\vec p}^\dagger\,\mathrm{e}^{ip\cdot x}]
$$
这里，所说的 $\phi^*$ 是与复共轭有所区别的，其包含了对系数取复共轭，以及对算符取厄米共轭。所以实际上写成 $\phi^\dagger$ 会更好理解，但 $\phi^\dagger$ 也会有一些问题，因为旋量场 $\psi$ 是一个列矢量，$\dagger$ 还包含了转置的效果，这不是我们想要的。因此，在后面我会继续沿用 $\phi^*$ 的符号，注意其包含对系数的复共轭以及对算符取厄米共轭。
现在，我们将上面的过程应用到旋量场，猜想电荷共轭对旋量场的作用效果为：
$$
C:\psi(x)\leftrightarrow \psi^*(x) 
$$
Dirac形式理论是否具有这种对称性呢？我们列出Dirac方程：
$$
(i\partial\mkern-8.5mu/-m)\psi=0\xRightarrow{?}(i\partial\mkern-8.5mu/-m)\psi^*=0
$$
这就要求前面的算符 $(i\partial\mkern-8.5mu/-m)$ 是实的，即在复共轭下不变（注意Dirac方程只作用于展开式中的算符前面的系数）。这等价于要求 $\gamma^\mu$ 是纯虚的。即
$$
\gamma^{\mu*}=-\gamma^\mu
$$
我们遇到过的两种表示，即Weyl表示与Dirac表示都不满足（你可以看到其表达式中只有 $\sigma_y$ 中存在虚数）。但满足条件的表示是存在的，其称为**Majorana表示**。下面我们就来显式构造这一表示：
gamma矩阵写为：
$$
\gamma^\mu=(\gamma^0,\gamma^i)=(\beta,\beta\alpha^i)
$$
且 $\{\beta,\alpha^i\}$ 要满足Clifford代数：
$$
\{\alpha_i,\alpha_j\}=2\delta_{ij},\quad \{\alpha_i,\beta\}=0,\quad \{\beta,\beta\}=2
$$
上面的关系实际上可以表述为：**四个Dirac矩阵的平方都为1，且彼此反对易**。因此，重要的观察就是我们可以随意交换两个矩阵的记号，比如 $\{\alpha_2,\alpha_1,\beta,\alpha_3\}$ 就也满足Clifford代数。由Pauli定理，我可以找到一个相似变换联系这两组Dirac矩阵，下面直接列出：
$$
T=\dfrac{1}{\sqrt 2}\begin{pmatrix}
\sigma_x& i\sigma_z\\
i\sigma_z&\sigma_x
\end{pmatrix}=T^\dagger
$$
当然，这并不重要（实际上上面的相似变换会给出 $\{\alpha_2,\alpha_1,\beta,-\alpha_3\}$ ）重要的是现在的gamma矩阵变成 $\alpha_2$ 去和 $\alpha_1,\beta,\alpha_3$ 相乘。而在Dirac基下，由于 $\alpha_2$ 是纯虚的，剩下三个是纯实的，因此四个gamma矩阵是纯虚的。我可以列出其显式表达式：
$$
\gamma^0=\begin{pmatrix}
0& \sigma_y\\
\sigma_y&0
\end{pmatrix},\quad \gamma^1=-i\begin{pmatrix}
\sigma_z&0\\
0&\sigma_z
\end{pmatrix},\quad \gamma^2=\begin{pmatrix}
0& -\sigma_y\\
\sigma_y&0
\end{pmatrix},\quad \gamma^3=-i\begin{pmatrix}
\sigma_x&0\\
0&\sigma_x
\end{pmatrix}
$$
此即Majorana表示。为了完整，$\gamma_5$ 为：
$$
\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3=\begin{pmatrix}
-\sigma_y&0\\
0&\sigma_y
\end{pmatrix}
$$
同样是纯虚的。Majorana表示下gamma矩阵仍满足基本反对易关系：
$$
\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}\mathbb 1
$$
Majorana基下的另一个特征就是Lorentz群的表示变成纯实的，即
$$
D(\Lambda)=D(\Lambda)^*
$$
这一点可以通过生成元的表达式验证imaginary
$$
\vec M=\dfrac12 i\vec\alpha=\dfrac{1}{2}i\gamma^0\gamma^i\quad\text{is pure imaginary}
$$
因此
$$
D(A(\hat n\phi))=\mathrm{e}^{-i\vec M\cdot\hat n\phi}=\exp\left(\frac12\gamma^0\vec\gamma\cdot\hat n\phi\right)\quad \text{is real}
$$
类似的，
$$
L^k=-i\epsilon^{ijk}[M^i,M^j]\quad \text{is pure imaginary}
$$
因此同样的，$D(R(\hat n\theta))$ 也为实。这一点其实说明了Lorentz群的 $(1/2,0)\oplus(0,1/2)$ 表示是一个实表示。参见实表示、伪实表示与复表示。

## 22.3 Fermi场的电荷共轭

现在，我们正式开始研究Dirac理论中电荷共轭的作用。我们已经证明，在Majorana基底下，通过将电荷共轭的作用取为 $\psi\leftrightarrow \psi^*$，则这是一个对称性。那么，具体到平面波展开式中：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_\vec p^{(r)}u_\vec p^{(r)}\mathrm{e}^{-ip\cdot x}+c_\vec p^{(r)\dagger} v_\vec p^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
$$
\psi^*(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_\vec p^{(r)\dagger}u_\vec p^{(r)*}\mathrm{e}^{ip\cdot x}+c_\vec p^{(r)} v_\vec p^{(r)*}\mathrm{e}^{-ip\cdot x}\right]
$$
当然，电荷共轭的标准作用是：
$$
C:b_\vec p\leftrightarrow c_\vec p,\quad b_\vec p^\dagger\leftrightarrow c_\vec p^\dagger
$$
但看上去还是有些不一样，现在的问题就是
$$
u_{\vec p}^{(r)*}\overset{?}=v_\vec p^{(r)}
$$
是否成立。如果成立，则两种定义电荷共轭的方法就是等价的。由于Lorentz boost和复共轭是对易的，因此我们只需要证明
$$
u_0^{(r)*}=v_0^{(r)}
$$
我们可以通过直接去解 $\beta$ 的本征方程得到上面的结论。在Majorana基下：
$$
\beta=\begin{pmatrix}
0& \sigma_y\\
\sigma_y&0
\end{pmatrix}
$$
由 $u_0=\beta u_0,v_0=-\beta v_0$ ，解出：
$$
u_0^{(1)}=\sqrt m\begin{pmatrix}
0\\1\\-i\\0
\end{pmatrix},\quad u_0^{(2)}=\sqrt m\begin{pmatrix}
1\\0\\0\\i
\end{pmatrix},\quad v_0^{(1)}=\sqrt m\begin{pmatrix}
0\\1\\i\\0
\end{pmatrix},\quad v_0^{(2)}=\sqrt m\begin{pmatrix}
1\\0\\0\\-i
\end{pmatrix}
$$
因此显然有：
$$
u_0^{(r)*}=v_0^{(r)}
$$
成立。另一方面，其在 $L_z$ 下的本征关系为
$$
L_z u_0^{(1)}=\dfrac12 u_0^{(1)},\quad L_z u_0^{(2)}=-\dfrac 12u_0^{(2)},\quad L_z v_0^{(1)}=-\dfrac12 v_0^{(1)},\quad L_z v_0^{(2)}=\dfrac 12v_0^{(2)}
$$
因此复共轭会改变 $L_z$ 的符号，这来源于Majorana基下 $L_z$ 是纯虚的。因此，电荷共轭会导致自旋反转。

>[!tip]
>如果不采用Majorana基，事情会复杂许多。比如我们采用另一组基， $\psi_S$ 与 $\psi_M$ 通过相似变换联系：
>$$\psi_S=S\psi_M$$
>此时电荷共轭对其的作用即为：
>$$C:\psi_S=S\psi_M\to S\psi_M^*=S(S^{-1})^*\psi_S^*=\mathcal C\psi_S^*$$
>这会多出一个额外的变换矩阵 $\mathcal C$。

为了研究电荷共轭对耦合项的作用，我们考虑其对一般二次型 $\bar\psi_AM\psi_B$ 的作用，这两个场在电荷共轭下的作用均为：
$$
C:\psi_{A,B}(x)\to \psi^*_{A,B}(x)
$$
则
$$
U_C^\dagger:\bar\psi_AM\psi_B:U_C=U_C^\dagger:\psi_A^\dagger\gamma^0M\psi_B:U_C=\,:\psi_A^T\gamma^0M\psi_B^*:\,=(:\psi_A^T\gamma^0M\psi_B^*:)^T=-:\psi_B^\dagger M^T(\gamma^0)^T\psi_A:
$$
倒数第二步是因为这是一个 $1\times 1$ 矩阵，故可以取转置。最后一步的负号来源为我们交换了 $\psi_A$ 与 $\psi_B^\dagger$ 的顺序。注意区分求和的矩阵指标与场算符间的顺序。由于 $\gamma^0$ 是纯虚的厄米矩阵，因此
$$
(\gamma^0)^T=-\gamma^0
$$
则
$$
\mathrm{RHS}=\,:\psi_B^\dagger\gamma^0\gamma^0M^T\gamma^0\psi_A:\,=\,:\bar\psi_B\bar M^*\psi_A:
$$
因此可以写出16个二次型的电荷共轭变换性质，只需将中间的矩阵取自伴+复共轭即可。如下表所示：

<div align="center">
  <img src="./pictures/Pasted image 20260205140539.png" width="500">
</div>

做一些解释：第一个 $\bar \psi\psi$ 显然不变，第二个由于 $\gamma_5$ 是反自伴的：
$$
\bar \gamma_5=\gamma^0\gamma_5^\dagger\gamma^0=-\gamma_5
$$
因此 $i\gamma_5$ 是纯实且自伴的，故其不变。而第三个由于 $\gamma^\mu$ 是自伴且纯虚的，因此要加一个负号。第四个由于 $\gamma^\mu\gamma_5$ 是自伴且实的，因此不变。最后一个
$$
\sigma^{\mu\nu}=\dfrac i2[\gamma^\mu,\gamma^\nu]
$$
为自伴且纯虚的，因此要加负号。
因此，对于前面的两种理论（旋量-标量耦合与旋量-赝标量耦合），其涉及的二次型是 $\bar\psi\psi$ 与 $\bar\psi i\gamma_5\psi$ ，都是电荷共轭不变的。我们还能考虑另一例子：QED中旋量-矢量场耦合的相互作用项可写为：
$$
\bar\psi\gamma^\mu\psi A_\mu
$$
其在电荷共轭下不变，则要求：
$$
C:A_\mu(x)\to -A_\mu (x)
$$
因此要求光子场在电荷共轭下反号。这里也能体现电荷共轭与复共轭的区别，因为 $A_\mu$ 是一个实矢量场。
考虑电荷共轭的本征态是有趣的，由于其能交换粒子与反粒子，因此取这个态为一个粒子与一个反粒子构成的态，其一般形式可以写为：
$$
|\psi\rangle=\int\mathrm{d}^3\vec p\,\mathrm{d}^3\vec p'\sum_{r,s}f_{rs}(\vec p,\vec p')b_\vec p^{(r)\dagger}c_{\vec p'}^{(s)\dagger}|0\rangle
$$
则
$$
U_C|\psi\rangle=\int\mathrm{d}^3\vec p\,\mathrm{d}^3\vec p'\sum_{r,s}f_{rs}(\vec p,\vec p')c_\vec p^{(r)\dagger}b_{\vec p'}^{(s)\dagger}|0\rangle=-\int\mathrm{d}^3\vec p\,\mathrm{d}^3\vec p'\sum_{r,s}f_{sr}(\vec p',\vec p)b_{\vec p}^{(r)\dagger}c_{\vec p'}^{(s)\dagger}|0\rangle
$$
这里交换了指标 $r,s$ 与积分变量 $\vec p,\vec p'$。为了使 $|\psi\rangle$ 是电荷共轭的本征态（本征值为 $\pm 1$ ），对系数 $f_{rs}(\vec p,\vec p')$ 的要求为：
$$
U_C|\psi\rangle=|\psi\rangle\Leftrightarrow f_{rs}(\vec p,\vec p')=-f_{sr}(\vec p',\vec p),\quad U_C|\psi\rangle=-|\psi\rangle\Leftrightarrow f_{rs}(\vec p,\vec p')=f_{sr}(\vec p',\vec p)
$$
可以看到，对两粒子**对称**的振幅系数反而导致了**奇**的电荷共轭性质。这一点来源于费米场的交换反对易性。

考虑正负电子对衰变为两个光子的过程：
$$
e^++e^-\to 2\gamma
$$
由于光子 $C=-1$ ，因此两个光子关于电荷共轭有 $C=+1$，故左侧要求电子对的波函数是反对称的，因此只有 $J=0$ 的电子对才能发生这一湮灭过程。当然，$J=1$ 的电子对也可以湮灭，但其只能产生最少三个光子，由于电磁作用不是很强（耦合系数 $\alpha=1/137$ ），因此产生三光子的过程的振幅显著低于产生双光子的过程。

## 22.4 Fermi场的 $PT$ 不变性

将 $PT$ 变换合在一起考虑会更为简单，因为其同时反转时空坐标，与Lorentz变换对易。由于后面要提到的 $CPT$ 定理，$PT$ 的作用其实和 $C$ 是很像的，因此我将继续在Majorana基下讨论。首先，标量场的变换为：
$$
\varOmega_{PT}:\phi(x)\to \phi(-x)
$$
KG方程显然不变：
$$
(\square^2+\mu^2)\phi(x)=0\Leftrightarrow (\square^2+\mu^2)\phi(-x)=0
$$
那Dirac方程不变又要求什么？考虑一般的变换：
$$
\varOmega_{PT}:\psi(x)\to M\psi(-x),\quad (i\partial\mkern-8.5mu/-m)\psi(x)=0\xRightarrow{?}(i\partial\mkern-8.5mu/-m)M\psi(-x)=0
$$
由于 $\partial\mkern-8.5mu/$ 关于时空坐标是奇的，因此Dirac仍成立的条件就是：
$$
M\gamma^\mu=-\gamma^\mu M
$$
你可以发现 $M=\text{Const}\cdot\gamma_5$ 是成立的。可以证明的是，满足上面要求的矩阵只有可能是 $\gamma^5$ 的数倍。一般而言，我们会将变换定义为：
$$
PT:\psi(x)\to \varOmega_{PT}^{-1}\psi(x)\varOmega_{PT}=i\gamma_5\psi(-x)
$$
下面，来看作用两次会得到什么。由于
$$
\varOmega_{PT}^{-2}\psi(x)\varOmega_{PT}^2=\varOmega_{PT}^{-1}[i\gamma_5\psi(-x)]\varOmega_{PT}=-\psi(x)
$$
其中用到了 $i\gamma_5$ 是实矩阵，因此可以从括号中提出来。这个结果是不依赖于定义中前面的系数的，考虑另一个 $PT$ 变换的定义：
$$
\varOmega_{PT}'^{-1}\psi(x)\varOmega_{PT}'=i\gamma_5\mathrm{e}^{i\theta}\psi(-x)
$$
则
$$
\varOmega_{PT}^{-2}\psi(x)\varOmega_{PT}^2=\varOmega_{PT}^{-1}[i\gamma_5\mathrm{e}^{i\theta}\psi(-x)]\varOmega_{PT}=i\gamma_5\mathrm{e}^{-i\theta}(i\gamma_5)\mathrm{e}^{i\theta}\psi(x)=-\psi(x)
$$
得到了原来的结果。由于 $\varOmega^2_{PT}$ 是线性幺正算符，实际上可以将其表示为绕任意轴旋转 $2\pi$ 的结果：
$$
\varOmega^2_{PT}=U(R(2\pi\hat n))
$$
接下来就是关于二次型的变换讨论。要注意的点是 $\varOmega_{PT}$ 还有将系数取复共轭的效果。首先对于 $\bar\psi\psi$，由于反幺正算符满足：
$$
(\varOmega a,\varOmega b)=(a,b)^*\Rightarrow (a,\varOmega ^{-1}A^\dagger\varOmega b)=(\varOmega a,A^\dagger\varOmega b)^*=(\varOmega^{-1}A\varOmega a,b)=(a,(\varOmega^{-1}A\varOmega)^\dagger b)
$$
因此 $\varOmega^{-1} A^\dagger\varOmega=(\varOmega^{-1}A\varOmega)^\dagger$，故
$$
\varOmega_{PT}^{-1}\psi^\dagger(x)\varOmega_{PT}=\psi^\dagger(-x)(i\gamma_5)^\dagger=-i\psi^\dagger(-x)\gamma_5
$$
$$
\varOmega_{PT}^{-1}\bar\psi(x)\varOmega_{PT}=\varOmega_{PT}^{-1}\psi^\dagger(x)\varOmega_{PT}(-\gamma^0)=\psi^\dagger(-x)(-i\gamma_5)(-\gamma_0)=\bar\psi(-x)(-i\gamma_5)
$$
$$
PT:\bar\psi(x)\psi(x)\to \bar\psi(-x)(-i\gamma_5)(i\gamma_5)\psi(-x)=\bar\psi(-x)\psi(-x)
$$
因此是不变的。其他二次型的变换性质同样可以得到。
接下来，来看平面波展开式：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_\vec p^{(r)}u_\vec p^{(r)}\mathrm{e}^{-ip\cdot x}+c_\vec p^{(r)\dagger} v_\vec p^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
$$
\psi(x)=-i\gamma_5\varOmega_{PT}^{-1}\psi(-x)\varOmega_{PT}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[(\varOmega_{PT}^{-1}\,b_\vec p^{(r)}\varOmega_{PT})\,(-i\gamma_5u_\vec p^{(r)*})\mathrm{e}^{-ip\cdot x}+\cdots\right]
$$
先只看前面这个部分，由于
$$
(p\mkern-8.5mu/-m)(i\gamma_5u_\vec p^{(r)*})=0
$$
（ $u_\vec p^*\sim v_\vec p,\,\{\gamma^\mu,\gamma_5\}=0$ ），因此 $i\gamma_5u_\vec p^{(r)*}$ 一定还是 $u$。实际上，由于 $L_z$ 是两个gamma矩阵的乘积，故与 $i\gamma_5$ 对易，因此
$$
L_z(i\gamma_5 u_\vec p^{(1)*})=i\gamma_5 L_z v_\vec p^{(1)}=-\dfrac12(i\gamma_5 u_\vec p^{(1)*})
$$
因此 $i\gamma_5 u_\vec p^{(1)*}= u_\vec p^{(2)}$，即 $PT$ 会改变粒子的自旋（这是期望的结果），但不会交换粒子与反粒子。当然，还有可能差一个相位。具体的求解表明：
$$
i\gamma_5 u_\vec p^{(1)*}= u_\vec p^{(2)},\quad i\gamma_5 u_\vec p^{(2)*}= -u_\vec p^{(1)}
$$
这样，为了使上面的展开关系成立，产生-湮灭算符的变换即为：
$$
\varOmega_{PT}^{-1}\,b_\vec p^{(1)}\varOmega_{PT}=b_\vec p^{(2)},\quad \varOmega_{PT}^{-1}\,b_\vec p^{(2)}\varOmega_{PT}=-b_\vec p^{(1)}
$$
$c_\vec p^{(r)}$ 的变换同理。

## 22.5 Fermi场的CPT定理

我们在之前[Coleman QFT - Lecture 11. 散射理论 I：Mandelstam变量、CPT和相空间](./Coleman%20QFT%20-%20Lecture%2011.%20%E6%95%A3%E5%B0%84%E7%90%86%E8%AE%BA%20I%EF%BC%9AMandelstam%E5%8F%98%E9%87%8F%E3%80%81CPT%E5%92%8C%E7%9B%B8%E7%A9%BA%E9%97%B4.md)中讨论了标量场的CPT定理，我们通过散射振幅的显式形式得到了其具有CPT不变性的结论，但这样的证明不是很有普适性。这里会提供另一种证明方法，其适用于更广的范围。CPT定理的结果是：
$$
\mathcal A(p_1,p_2,\cdots)=\mathcal A(-p_1,-p_2,\cdots )
$$
这里一个 $-p$ 的入射粒子其实就代表一个动量为 $p$ 的出射反粒子，因此反转所有 $p$ 就相当于交换出射粒子与入射粒子，同时交换粒子与反粒子。
定理的证明用到一个解析延拓Lorentz群参数的技巧，首先，$\mathcal A$ 是具有Lorentz不变性，因此
$$
\mathcal A(\Lambda p_1,\Lambda p_2,\cdots)=\mathcal A(p_1,p_2,\cdots)
$$
我们考虑一个具体的例子：考虑只有一条核子出射线与一条核子入射线的Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20260205162842.png" width="500">
</div>

其振幅的一般形式为：
$$
\mathcal A=\bar uM(p,p',q_1,\cdots)u,\quad M=\int\mathrm{d}^4k_1\cdots\mathrm{d}^4k_n\,\dfrac{N(p,p',q_1,\cdots)}{D(p,p',q_1,\cdots)}
$$
则在Lorentz变换下：
$$
\mathcal A_{\Lambda}=\bar u'D^{-1}(\Lambda)M(\Lambda p,\Lambda p',\Lambda q_1,\cdots)D(\Lambda)u
$$
这个表达式一定是 $\Lambda$ 参数 $\theta,\phi$ 的解析函数，因为 $D(\Lambda)$ 是其指数函数，而 $D$ 是一个内积函数，具有Lorentz不变性，因此不会出现额外的极点与割线。我们可以安全的将参数 $\theta,\phi$ 延拓成复数：
$$
D(\Lambda)=D(R(\hat n\theta))\cdot D(A(\hat a\phi)),\quad \theta,\phi\in\mathbb C
$$
接下来，考虑一个特别的延拓后的Lorentz变换：
$$
\Lambda=R(\hat z\pi)\cdot A(i\hat z\pi)
$$
易验证：
$$
R(\hat z\pi):p^1\to -p^1,\quad p^2\to -p^2,\qquad A(i\hat z\pi):p^0\to -p^0,\quad p^3\to -p^3
$$
因此
$$
\Lambda=-\mathbb 1
$$
即这个Lorentz变换正好可以直接在动量前面加负号，因此CPT定理直接得证。这个证明是很简单的。
我们验证一下，其是否的确将粒子变成了反粒子。
$$
D(R(\hat z\pi))=\exp\left
(\dfrac12\gamma^1\gamma^2\pi\right)=\gamma^1\gamma^2,\quad D(A(i\hat z\pi))=\exp\left(i\dfrac12\gamma^0\gamma^3\pi\right)=i\gamma^0\gamma^3
$$
因此
$$
D(\Lambda)=i\gamma^0\gamma^1\gamma^2\gamma^3=\gamma_5
$$
故
$$
\mathcal A_\Lambda=\bar u'\gamma_5M(-p,-p',-q_1,\cdots)\gamma_5 u
$$
我们前面已经知道 $\gamma_5 u$ 其实是 $v$ ，因此其的确将粒子变成了反粒子。实际上，真正的CPT变换和这个Lorentz变换有一个负号的差别：
$$
CPT: u_\vec p^{(r)}\to i\gamma_5 u_\vec p^{(r)},\quad \bar u_\vec p^{(r)}\to \bar u_\vec p^{(r)}i\gamma_5
$$
因此
$$
\mathcal A_{CPT}=-\mathcal A_{\Lambda}=\mathcal A_{\Lambda}=\bar u'i\gamma_5M(- p,- p',-q_1,\cdots)i\gamma_5u
$$

---
