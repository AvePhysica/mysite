---
title: "Coleman QFT Lecture 30: 有质量光子的电动力学"
---

在[[Coleman QFT - Lecture 29. 推广泛函积分方法]]的最后，我们通过证明泛函积分的三种形式（二阶形式、一阶形式与Hamiltonian形式）彼此等价，说明了“天真的”Feynman规则是正确的。本章就来讨论一些具体的散射过程。但在此之前，先来讨论**标量电动力学**的Feynman规则。
## 30.1 标量电动力学的Feynman规则

类似的，如果采用正则量子化体系，则会遇到标量场的导数作用、消除 $A_0$ 的技术性难题。所以我们直接采用泛函积分方法。Proca Lagrangian的二阶形式为：
$$
S_{2nd}=\int\mathrm{d}^4x\,\left[(D_\mu \phi)^*(D^\mu\phi)-m^2\phi^*\phi-\dfrac12\partial_\mu A_\nu(\partial^\mu A^\nu-\partial^\nu A^\mu)+\dfrac12\mu^2 A_\mu A^\mu\right]
$$
其中
$$
D_\mu\phi=(\partial_\mu+ie A_\mu)\phi
$$
我们同样可以写出一阶形式：
$$
S_{1st}=\int\mathrm{d}^4x\left[\dfrac14F_{\mu\nu}F^{\mu\nu}-\dfrac12 F^{\mu\nu}(\partial_\mu A_\nu-\partial_\nu A_\mu)+\dfrac12\mu^2 A_\mu A^\mu-\pi_\mu \pi^{\mu*}-m^2\phi^*\phi+\pi_\mu^*(\partial_\mu +ie A_\mu)\phi+\pi_\mu(\partial^\mu-ie A^\mu)\phi^*\right]
$$
其中 $F_{\mu\nu},\pi_\mu,\pi_\mu^*$ 的EL方程给出平凡关系：
$$
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu,\quad \pi_\mu=D_\mu\phi,\quad \pi_\mu^*=D^*_\mu\phi^*
$$
两形式等价，也就是说泛函积分给出相同结果：
$$
\int\prod_\mu(\mathrm{d}\pi_\mu)\prod_\nu(\mathrm{d}\pi_\nu^*)(\mathrm{d}\phi)(\mathrm{d}\phi^*)\prod_\lambda(\mathrm{d}A_\lambda)\prod_{\sigma\tau}(\mathrm{d}F_{\sigma\tau})\,\mathrm{e}^{iS_{1st}}=\int\prod_\lambda(\mathrm{d}A_\lambda)(\mathrm{d}\phi)(\mathrm{d}\phi^*)\,\mathrm{e}^{iS_{2nd}}
$$
从一阶形式出发，我们也可以消除 $A_0,F_{ij},\pi_i,\pi_i^*$，剩下的就是正则场量与其共轭动量：
$$
(q,p):\quad (A_i,F_{0i}),\;(\phi,\pi_0),\;(\phi^*,\pi_0^*)
$$
则会产生作用量的Hamiltonian形式：
$$
\int(\mathrm{d}\pi_0)(\mathrm{d}\pi_0^*)(\mathrm{d}\phi)(\mathrm{d}\phi^*)\prod_i(\mathrm{d}A_i)\prod_j(\mathrm{d}F_{0j})\,\mathrm{e}^{iS_{\mathcal H}}
$$
因此由二阶形式导出的Feynman规则是正确的，其由泛函积分的等价性保证。

## 30.2 有质量光子电动力学的Feynman规则

接下来我们具体列出有质量光子的标量电动力学与旋量电动力学的Feynman规则。

### 有质量光子的标量电动力学

$$
\begin{align}
\mathcal L&=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)(\partial^\mu A^\nu-\partial^\nu A^\mu)+\dfrac12\mu^2 A_\mu A^\mu+(\partial_\mu-ieA_\mu)\phi^*(\partial^\mu+ieA^\mu)\phi-m^2\phi^*\phi\\
&\simeq\underbrace{\dfrac12A_\mu\left[g^{\mu\nu}(\square^2+\mu^2)-\partial^\mu\partial^\nu\right]A^\nu-\phi^*(\square^2+m^2)\phi}_{\mathcal L_0}+\underbrace{e^2A_\mu A^\mu\phi^*\phi-ieA_\mu(\phi^*\partial^\mu \phi-\phi\partial^\mu\phi^*)}_{\mathcal L'}
\end{align}
$$
从上面的形式就能直接读出Feynman规则：

<div align="center">
  <img src="./pictures/Pasted image 20260421140944.png" width="700">
</div>

其中导数耦合的替换为 $\partial_\mu\phi\to ie q_\mu,\;\partial_\mu\phi^*\to -ieq_\mu$。

### 有质量光子的旋量电动力学

类似的有
$$
\begin{align}
\mathcal L&=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)(\partial^\mu A^\nu-\partial^\nu A^\mu)+\dfrac12\mu^2 A_\mu A^\mu+\bar\psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi\\
&\simeq\underbrace{\dfrac12A_\mu\left[g^{\mu\nu}(\square^2+\mu^2)-\partial^\mu\partial^\nu\right]A^\nu-\bar\psi(i\partial\mkern-9mu/-m)\psi}_{\mathcal L_0}+\underbrace{[-eA_\mu\bar\psi\gamma^\mu\psi]}_{\mathcal L'}
\end{align}
$$
Feynman规则就是：

<div align="center">
  <img src="./pictures/Pasted image 20260421141347.png" width="700">
</div>

以上都是有质量光子情形，当你想通过 $\mu\to 0$ 得到无质量光子QED的Feynman规则时，会遇到因子 $k^\mu k^\nu/\mu^2$ 发散的问题。在后面会提到对于像QED这样的只有一个矢量粒子的Abelian规范理论，这个困难可以通过技术手段消除。但对于有一个以上矢量粒子的Yang-Mills理论，这个困难无法被消除。也就是说无法从有质量理论的 $\mu\to 0$ 极限得到无质量理论。

## 30.3 旋量电动力学中的一些低阶计算

### Coulomb散射

考虑两个电子发生的弹性散射：$e(p_1)+e(p_2)\to e(p_1')+e(p_2')$。Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20260421142704.png" width="500">
</div>

记 $k=p_1-p_1',\;q=p_2'-p_1$，有
$$
i\mathcal A_1=-i(ie)^2(\bar u_1'\gamma^\mu u_1)(\bar u_2'\gamma^\nu u_2)\dfrac{g_{\mu\nu}-(k_\mu k_\nu/\mu^2)}{k^2+\mu^2}
$$
$$
i\mathcal A_2=+i(ie)^2(\bar u_1'\gamma^\mu u_2)(\bar u_2'\gamma^\nu u_1)\dfrac{g_{\mu\nu}-(q_\mu q_\nu/\mu^2)}{q^2+\mu^2}
$$
注意上式还能化简，由于
$$
k_\mu(\bar u_1'\gamma^\mu u_1)=\bar u_1'(p\mkern-8.5mu/_1-p\mkern-8.5mu/_1')u_1=0
$$
因此 $k_\mu k_\nu/\mu^2$ 项实际为零，同理 $q_\mu q_\nu/\mu^2$ 也可以去掉。因此
$$
i\mathcal A_1=-i(ie)^2(\bar u_1'\gamma^\mu u_1)(\bar u_2'\gamma^\nu u_2)\dfrac{g_{\mu\nu}}{k^2+\mu^2},\quad i\mathcal A_2=+i(ie)^2(\bar u_1'\gamma^\mu u_2)(\bar u_2'\gamma^\nu u_1)\dfrac{g_{\mu\nu}}{q^2+\mu^2}
$$
因此在无质量极限 $\mu\to 0$ 下会发散的灾难项消失了。振幅只在前向散射上发散（因为此时 $k^2=0$ ），这并不奇怪，因为经典下计算库伦散射的散射截面同样在 $\theta=0$ 的前向发散：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\left(\dfrac{Z_1Z_2 e^2}{2mv^2}\right)^2\dfrac{1}{\sin^4(\theta/2)}
$$
再来看看无质量下的传播子 $g_{\mu\nu}/k^2$，其看上去有四种光子，其中一种带有负号。这似乎与我们熟知的库伦规范下的两种光子偏振类型有所差异。为什么会这样？
为了解释这一点，我们先定义“电流”为：
$$
j_\mu^{(1,2)}=\bar u'_{(1,2)}\gamma_\mu u_{(1,2)}
$$
这是守恒流，因为
$$
k^\mu j_\mu^{(1,2)}=0
$$
振幅可以写为：
$$
\mathcal A_1=\dfrac{e^2 (j_0^{(1)}j_0^{(2)}-\vec j^{(1)}\cdot\vec j^{(2)})}{k_0^2-|\vec k|^2}
$$
我们可以将 $\vec j$ 按相对于 $\vec k$ 的纵向与横向分解：
$$
\vec j^{(r)}=\vec j^{(r)T}+\vec k\dfrac{\vec k\cdot\vec j^{(r)}}{|\vec k|^2}\vec j^{(r)T}+\vec k\dfrac{k_0j_0^{(r)}}{|\vec k|^2}
$$
也就是说纵向部分完全由时间分量决定。因此
$$
\mathcal A_1=-e^2\dfrac{\vec j^{(1)T}\cdot \vec j^{(2)T}}{k_0^2-|\vec k|^2}-e^2\dfrac{j_0^{(1)}j_0^{(2)}}{|\vec k|^2}
$$
第一项代表了交换两种横向极化的光子，而第二项不含时间分量 $k_0$ ，其实际代表了静态的**瞬时Coulomb作用**。
回忆在[[Coleman QFT - Lecture 9. 微扰理论 II：发散与抵消项]]中关于model 2基态能量的计算：
$$
E_0=-\dfrac iT\ln\langle0|S|0\rangle=\dfrac12(-ig)^2\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3}\dfrac{|\tilde\rho(\vec k)|^2}{|\vec k|^2+\mu^2}=\dfrac12\int\mathrm{d}^3\vec x\,\mathrm{d}^3\vec y\,\rho(\vec x)\left[-g^2\dfrac{\mathrm{e}^{-\mu|\vec x-\vec y|}}{4\pi|\vec x-\vec y|}\right]\rho(\vec y)
$$
由此导出了Yukawa势。现在我们考虑光子场与外源的耦合：
$$
\mathcal L_I=-e A_\mu J^\mu
$$
则
$$
\ln\langle 0|S|0\rangle=\dfrac12(-ie)^2\int\dfrac{\mathrm{d}^4 k}{(2\pi)^4}\tilde J^\mu(k)\tilde J_\nu(k)^*\dfrac{i}{k^2-\mu^2+i\epsilon}\left[-g^{\mu\nu}+\dfrac{k_\mu k_\nu}{\mu^2}\right]
$$
当守恒流条件成立时，即 $k_\mu\tilde J_\mu(k)=0$，因此 $k_\mu k_\nu/\mu^2$ 项可去掉，因此可以安全的取 $\mu\to 0$。另一方面。如果只考虑静场，则 $J_\mu(x)=(\rho(\vec x),\vec 0)$，因此其实际上可以完全回到类似标量场的情形，有
$$
E_0=-\dfrac iT\ln\langle0|S|0\rangle=\dfrac12(-ie)^2\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3}\dfrac{|\tilde\rho(\vec k)|^2}{|\vec k|^2}=\dfrac12\int\mathrm{d}^3\vec x\,\mathrm{d}^3\vec y\,\rho(\vec x)\left[\dfrac{e^2}{4\pi|\vec x-\vec y|}\right]\rho(\vec y)
$$
因此我们得到了Coulomb势：
$$
V(|\vec x-\vec y|)=\dfrac{e^2}{4\pi|\vec x-\vec y|}
$$
### Compton散射

Compton散射描述电子-光子弹性散射：$e(p)+\gamma(k,\varepsilon)\to e(p')+\gamma(k',\varepsilon')$。Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260422120200.png" width="500">
</div>

$$
i\mathcal A_{fi}=-ie^2\left[\bar u'\varepsilon\mkern-8.5mu/'^*\dfrac{1}{p\mkern-8.5mu/+k\mkern-8.5mu/-m}\varepsilon\mkern-8.5mu/u+\bar u'\varepsilon\mkern-8.5mu/\dfrac{1}{p\mkern-8.5mu/-k\mkern-8.5mu/'-m}\varepsilon\mkern-8.5mu/'^* u\right]
$$
在光子零质量极限下，纵向极化矢量可以写为：
$$
\varepsilon_\mu=\dfrac{k_\mu}{\mu}+O(\mu/|\vec k|),\quad \mathcal A_3\sim-\dfrac{\mu}{|\vec k|}\tilde j^0\to 0
$$
即纵向光子不会参与物理过程。这也可以直接代入上面Compton散射振幅看出。代入 $\varepsilon_\mu=k_\mu/\mu$：
$$
\varepsilon\mkern-8.5mu/ u=k\mkern-8.5mu/u/\mu=(p\mkern-8.5mu/+k\mkern-8.5mu/-m)u/\mu,\quad \bar u'\varepsilon\mkern-8.5mu/=\bar u'(-p\mkern-8.5mu/'+k\mkern-8.5mu/+m)/\mu
$$
故
$$
\mathcal A_{fi}=-\dfrac{e^2}{\mu}[\bar u'\varepsilon\mkern-8.5mu/'^*u-\bar u'\varepsilon\mkern-8.5mu/'^*u]=0
$$
的确是期望的结果。
可以总结一下，涉及发射一个 $\varepsilon_\mu$ 极化光子的振幅可以写为：
$$
\mathcal A_{fi}=\varepsilon^{(r)*}_\mu M^\mu\quad (k^\mu M_\mu=0)
$$
如果我们对末态自旋极化求和，有
$$
\sum_{r=1}^3|\mathcal A|^2=\sum M^{*\mu}\varepsilon_\mu^{(r)}\varepsilon_\nu^{(r)*}M^\nu=M_\mu^*\left[-g^{\mu\nu}+\dfrac{k^\mu k^\nu}{\mu^2}\right]M_\nu=-M_\mu^* M^\mu
$$
因此其就是简单的 $-M_\mu^* M^\mu$。

## 30.4 无质量电动力学的泛函积分量子化方法

最后，我们来讨论真正的QED理论，即无质量光子的量子电动力学理论。我们不从有质量理论的 $\mu\to 0$ 极限出发，而是直接处理理论本身。Lagrangian为：
$$
\mathcal L=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)^2+\bar \psi(i\partial\mkern-9mu/-m-eA\mkern-9mu/)\psi+(\text{source term})
$$
这个理论的正则量子化是有问题的，因为 $A_0$ 无法被消除。我们需要**规范条件**来良定义这个初值问题。当然也可以尝试泛函积分方法，使用[[Coleman QFT - Lecture 28. 泛函积分与Feynman图]]最后一节相似的流程。先定义横向与纵向投影算符：
$$
P_{\mu\nu}^T=g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2},\quad P_{\mu\nu}^L=\dfrac{k_\mu k_\nu}{k^2}
$$
积分核为：
$$
\tilde A_{\mu\nu}=-k^2g^{\mu\nu}+k^\mu k^\nu+\mu^2 g^{\mu\nu}=(-k^2+\mu^2)P_{\mu\nu}^T+\mu^2P_{\mu\nu}^L\to -k^2P_{\mu\nu}^T+(0)P_{\mu\nu}^L
$$
因此传播子为：
$$
\tilde D_{\mu\nu}^F(k)=-i\dfrac{g_{\mu\nu}-(k_\mu k_\nu/k^2)}{k^2}+\dfrac{k_\mu k_\nu}{k^2}\dfrac{i}{0}
$$
当然它发散了，这一点我们应早就预计到。在历史上，Faddeev与Popov使用其设计的特殊方法有效处理了这一发散问题。我们将在下一节解释它。在此之前，我们可以先来讨论QM中的**路径积分**，这也是Feynman一开始的叫法。考虑一个单粒子在一般势场中的运动：
$$
H=\dfrac{p^2}{2m}+V(q)
$$
Feynman想要计算传播子，即**时间演化算符在坐标表象下的矩阵元**。他证明了：
$$
\langle q_2|\mathrm{e}^{-iH(t_2-t_1)}|q_1\rangle=\int(\mathrm{d}q)\,\mathrm{e}^{i\int_{t_1}^{t_2}L\,\mathrm{d}t}
$$
右侧的积分遍历所有固定起点与终点的路径，即 $q(t_1)=q_1,\;q(t_2)=q_2$。由上式在 $\hbar\to 0$ 下，通过**驻点近似**可以导出经典理论中的最小作用量原理：
$$
\dfrac{\delta S}{\delta q}=0
$$
现在我们可以阐明Faddeev和Popov的核心观点。他们指出，将拉格朗日量（30.45）代入泛函积分的做法非常愚蠢——因为费曼强调的是“对历史求和”。在规范理论中，同一历史（即所有可观测量都完全相同的运动轨迹）可能由无数不同的场来表征，这些场之间都通过规范变换相互关联。因此，我们并未以正确的方式对历史进行求和。如果我们直接将拉格朗日量代入泛函积分并尝试对历史求和，实际上是在对每个历史进行无数次求和，因此发散是显然的结果。也就是说，泛函积分必须去除规范造成的**冗余自由度**。

---
