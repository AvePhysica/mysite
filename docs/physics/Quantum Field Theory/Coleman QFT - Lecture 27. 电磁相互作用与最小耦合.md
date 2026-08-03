---
title: "Coleman QFT Lecture 27: 电磁相互作用与最小耦合"
---

当矢量介子无质量或质量极小时，我们可以将其视为光子，其与物质场的相互作用构成了电动力学基础。要描述矢量场的相互作用，我们需要讨论三个密切相关的问题：**无质量情况下的规范不变性、有质量情况下的守恒流，以及最小耦合方案**。通过这些讨论，我们将能够写出光子与任意系统（自由介子场、自由费米子场，或相互作用的介子与费米子场）的相互作用方程。这就是这一章的主要内容。在最后，我们会讨论尝试从相互作用形式导出Feynman规则，指出其会遇到的技术难题。

## 27.1 规范不变性与守恒流

Proca理论的Lagrangian为：
$$
\mathcal L_P=-\dfrac14F_{\mu\nu}F^{\mu\nu}+\dfrac12\mu^2A_\mu A^\mu,\quad F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu
$$
加上与外源的耦合项 $-J^\mu A_\mu$，得到运动方程：
$$
\partial^\mu F_{\mu\nu}+\mu^2A_\nu=J_\nu
$$
取散度就得到：
$$
\mu^2\partial^\nu A_\nu=\partial^\nu J_\nu
$$
在 $\mu \to 0$ 时得到 $\partial_\mu J^\mu=0$ ，即流守恒方程。因此，**无质量的矢量场只能与守恒流耦合**，记住这个重要的结论。现在，我们考虑有质量矢量场与其他场的一般相互作用形式。我将其他所有参与耦合的场用一个列矢量表示：
$$
\phi\equiv(\phi_1,\phi_2,\cdots)^T
$$
其分量可能是标量场、Dirac场等等。Lagrangian可以写为：
$$
\mathcal L=-\dfrac14F_{\mu\nu}F^{\mu\nu}+\dfrac12\mu^2A_\mu A^\mu+\mathcal L'(\phi,\partial_\mu \phi,A_\mu,\partial_\nu A_\mu)=\mathcal L_P+\mathcal L'
$$
对 $A_\mu$ 变分：
$$
\delta\mathcal L=\left(\partial_\nu F^{\nu\mu}+\mu^2 A^\mu+\dfrac{\partial\mathcal L'}{\partial A_\mu}\right)\delta A_\mu
$$
将最后一项记为：
$$
\dfrac{\partial\mathcal L'}{\partial A_\mu}\equiv-J^\mu
$$
现在的运动方程就和原先与外源耦合得到的方程相同：
$$
\partial_\nu F^{\nu\mu}+\mu^2A^\mu-J^\mu=0
$$
流守恒是一个很好的性质。我们期望相互作用应当满足：
$$
\partial_\mu J^\mu=0
$$
这是因为我们希望理论在 $\mu \to 0$ 时保持良好的性质，由此可推出相互作用的形式应当具有**规范不变性**：规范变换是指将一个任意标量函数 $\chi(x)$ 的梯度加到矢量场 $A_\mu(x)$ 上：
$$
A_\mu\overset{\chi}{\longrightarrow} A_\mu+\partial_\mu\chi,\quad F^{\mu\nu}\;\text{is invariant}
$$
同时 $\phi$ 也会发生某些变换：
$$
\phi\overset{\chi}{\longrightarrow}\phi'
$$
考虑无穷小规范变换诱导的场的变分 $\delta A_\mu=\partial_\mu\delta\chi,\;\phi\to\phi'=\phi+\delta\phi$ ，质量项的变换为：
$$
\delta\left(\frac12\mu^2A_\mu A^\mu\right)=\mu^2A^\mu\partial_\mu\delta\chi\simeq -\mu^2\partial_\mu A^\mu\,\delta\chi
$$
由流守恒条件
$$
0=\partial_\mu J^\mu=\mu^2\partial_\mu A^\mu
$$
因此在流守恒条件下，质量项在变分下不变，因此相互作用项也要不变。反过来说，如果我们要求相互作用项具有规范不变性，则其对应的 $J^\mu$ 一定是一个守恒流。但是注意这不是规范对称性由Noether定理对应的守恒流，而是另一种内部对称性对应的守恒流。我们推导出 $J^\mu$ 守恒的步骤并不是对称性 $\to$ 守恒流的**Noether步骤**，而是基于运动方程的**自洽性条件**。这个守恒流来源于 $\phi$ 的Lagrangian的一个内部对称性，即一个单参连续变换：
$$
\delta\phi=-i Q\phi\,\delta\lambda\quad\text{or}\quad \phi(x)\to\phi(x,\lambda)=\mathrm{e}^{-iQ\lambda}\phi(x)
$$
由该内部对称性得到的守恒流为：
$$
J^\mu=-i\pi^\mu Q\phi
$$
因此**规范对称性**说明了该守恒流的存在，而由**内部对称性**才能导出该守恒流的具体形式。这样说有点抽象，还是来看具体例子：

>[!example]  Example 1：自由Dirac场
>$$\mathcal L_m=\bar\psi(i\partial\mkern-9mu/-m)\psi$$
> 其内部对称性是 $U(1)$ ，即
> $$\psi\to \mathrm{e}^{i\lambda}\psi,\quad \bar\psi\to\mathrm{e}^{-i\lambda}\bar\psi$$
> 此变换下 $\mathcal L_m$ 不变，对应的守恒流为：
> $$J^\mu=\dfrac{\partial\mathcal L_m}{\partial(\partial_\mu\phi)}D\phi=\bar\psi \gamma^\mu\psi$$
> 检验：
> $$\partial_\mu J^\mu=(\partial_\mu\bar\psi)\gamma^\mu\psi+\bar\psi\gamma^\mu(\partial_\mu\psi)=im\bar\psi\psi-im\bar\psi\psi=0$$

>[!example] Example 2：带电自由标量场
>$$\mathcal L_m=\partial_\mu\phi^*\partial^\mu\phi-\mu^2\phi^*\phi$$
>其内部对称性也是 $U(1)$，变换为：
>$$\phi\to \mathrm{e}^{i\lambda}\phi,\quad \phi^*\to\mathrm{e}^{-i\lambda}\phi^*$$
>因此
>$$J^\mu=(\partial^\mu\phi^*)(-i\phi)+(\partial^\mu\phi)(i\phi^*)=i[\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*]$$
>检验：
>$$\partial_\mu J^\mu=i[\phi^*\square^2\phi-\phi\square^2\phi^*]=i[\phi^*\mu^2\phi-\phi\mu^2\phi^*]=0$$

现在，我们来尝试构造这两个例子对应的耦合形式。我们知道的条件为：
$$
\dfrac{\partial\mathcal L'}{\partial A_\mu}\equiv-J^\mu\qquad(\text{可能差一个常数因子})
$$
但是我们并不知道 $\mathcal L'$ 的具体形式。没关系，我们大胆来猜测。最简单的形式就是：
$$
\mathcal L'=-eJ^\mu A_\mu+\mathcal L_m
$$
显然满足条件。但现在的问题是，加上耦合项后，$J^\mu$ 是否仍然守恒？这并不能明显看出来。我们对两个例子分别进行验证。
$$
\mathcal L\overset{?}{=}\mathcal L_P+\mathcal L_m-eJ^\mu A_\mu=\mathcal L_P+\mathcal L'
$$
考虑例子1，$J^\mu=\bar\psi\gamma^\mu\psi$，则运动方程是：
$$
(i\partial\mkern-9mu/-m)\psi-e\gamma^\mu\psi A_\mu=0,\quad (i\partial\mkern-9mu/-m)\psi-e\bar\psi\gamma^\mu A_\mu=0
$$
守恒流是否仍守恒？验证：
$$
i\partial_\mu(\bar\psi\gamma^\mu\psi)=e\bar\psi\gamma^\mu A_\mu\psi-e\bar\psi\gamma^\mu A_\mu\psi=0
$$
因此仍守恒。那对于例子2呢？$J^\mu=i[\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*]$，运动方程为：
$$
(\square^2+\mu^2)\phi+2ieA^\mu\partial_\mu\phi+ie\phi\partial_\mu A^\mu=0,\quad (\square^2+\mu^2)\phi^*-2ieA^\mu\partial_\mu\phi^*-ie\phi^*\partial_\mu A^\mu=0
$$
此时有：
$$
-i\partial_\mu J^\mu=\phi^*\square^2\phi-\phi\square^2\phi^*=-2ieA_\mu(\phi^*\partial^\mu\phi+\phi\partial^\mu\phi^*)-2ie\phi^*\phi\partial_\mu A^\mu=-2ie\partial^\mu(A_\mu\phi^*\phi)
$$
其不必然为零。因此相互作用并不像 $-eJ^\mu A_\mu$ 这么简单。

## 27.2 最小耦合方法

找到合理的相互作用项形式的方法称为**最小耦合方法**。到现在为止，我们考虑了两种变换。一种是规范变换，其由一个任意的标量函数 $\chi(x)$ 生成：
$$
A_\mu\overset{\chi}{\longrightarrow} A_\mu+\partial_\mu\chi,\quad \phi\overset{\chi}{\longrightarrow}\phi'
$$
另一种是内部对称性，其由一个参数 $\lambda$ 生成：
$$
\delta\phi=-i Q\phi\,\delta\lambda\quad\text{or}\quad \phi(x)\to\phi(x,\lambda)=\mathrm{e}^{-iQ\lambda}\phi(x)
$$
可以看到，前者对每个时空点 $x$ 处的场进行不同的变换，而后者进行相同的变换。这两种变换方式称为**局域变换**与**全局变换**。Noether定理只保证全局变换有对应的守恒流。
现在，假设我们将这个内部对称性改写为局域版本，$\delta\lambda$ 是一个依赖于 $x$ 的函数：
$$
\delta\phi=-iQ\phi\delta\lambda(x)
$$
那 $\mathcal L_m$ 是否仍然不变？一般会变，因为导数项的变换规则变成
$$
\delta(\partial^\mu\phi)=\partial^\mu\delta\phi=-iQ(\partial^\mu\phi)\delta\lambda-iQ\phi(\partial^\mu\lambda)
$$
多出来了一项，因此 $\delta\mathcal L_m\ne 0$。为了解决这一问题，引入下面的**协变导数**：
$$
\boxed{D_\mu\phi\equiv\partial_\mu \phi+ieA_\mu Q\phi}
$$
这样 $A_\mu$ 同时也在规范变换下变换，则
$$
\delta(D_\mu \phi)=-iQ(\partial^\mu\phi)\delta\lambda-iQ\phi(\partial^\mu\delta\lambda)+ie(\partial^\mu\delta\chi)Q\phi+ieA_\mu Q(-iQ\phi\delta\lambda)
$$
注意到若取
$$
\delta\lambda=e\delta\chi
$$
则第二项与第三项抵消，因此
$$
\delta(D_\mu\phi)=-iQ(\partial_\mu\phi+ieA_\mu Q\phi)\delta\lambda=-iQ(D_\mu\phi)\delta\lambda
$$
这样 $D_\mu\phi$ 的变换就和 $\phi$ 一样了，因此如果将 $\mathcal L_m$ 中的 $\partial_\mu$ 全部改为 $D_\mu$ ，则其在变换下不变。这一结果是很有启发的。我们就是要找在规范变换下不变的 $\mathcal L'$，而现在内部对称性局域化+修改导数为协变导数后就能得到不变的Lagrangian。因此将**规范变换**定义为：
$$
\begin{cases}
\delta\phi=-iQ\phi\,\delta\lambda(x)\\
\delta A_\mu=\dfrac{1}{e}\partial_\mu\,\delta\lambda(x)
\end{cases}\quad \text{or}\quad \begin{cases}
\phi\to\mathrm{e}^{-iQ\lambda(x)\phi}\\
A_\mu\to A_\mu+\dfrac 1e\partial_\mu\lambda(x)
\end{cases}
$$
同时定义：
$$
\mathcal L'=\text{将 $\mathcal L_m$ 中的所有 $\partial_\mu$ 换为 $D_\mu$ }
$$
则 $\mathcal L'$ 就在规范变换下不变。这就是最小耦合方法，耦合就包含在 $D_\mu$ 中：
$$
\mathcal L=\mathcal L_P+\mathcal L_m(\phi,\partial_\mu\phi)\to \mathcal L_P+\mathcal L_m(\phi,D_\mu\phi)
$$
同时，现在的守恒流也就是原来内部对称性导出的守恒流 $J^\mu$ 中的 $\partial_\mu$ 全换为 $D_\mu$ 的结果（再加上一个 $e$ ）。这是因为：
$$
J^\mu_{\text{new}}\equiv-\dfrac{\partial\mathcal L'}{\partial A_\mu}=-\dfrac{\partial\mathcal L_m(\phi,D_\mu\phi)}{\partial A_\mu}=-\dfrac{\partial\mathcal L_m(\phi,D_\mu\phi)}{\partial (D_\mu\phi)}\cdot ieQ\phi=eJ^\mu(\phi,D_\mu\phi)
$$
运动方程为
$$
\partial_\nu F^{\nu\mu}+\mu^2 A^\mu+\dfrac{\partial\mathcal L'}{\partial A_\mu}=\partial_\nu F^{\nu\mu}+\mu^2 A^\mu-eJ^\mu=0
$$
仍然，将该步骤应用于两个例子：

>[!example] **Example 1. Revisited**：
>$$D_\mu\psi=\partial_\mu\psi+ieA_\mu\psi$$
> 则
> $$\mathcal L_m=\bar\psi(i\partial\mkern-9mu/-m)\psi\to \mathcal L'=\bar\psi(i\partial\mkern-9mu/-m)\psi-eJ^\mu A_\mu$$
> 这实际上就给出了最简单的耦合形式 $-eJ^\mu A_\mu$，因此我们验证了 $J^\mu$ 仍然守恒。原来的守恒流为：
> $$J^\mu=\bar\psi\gamma^\mu\psi$$
>其中没有导数 $\partial_\mu$，因此我们无需对其做任何修改。$\mathcal L_I=-eJ^\mu A_\mu=-e\bar\psi\gamma^\mu\psi A_\mu$ 就是[Coleman QFT - Lecture 26. 矢量场](./Coleman%20QFT%20-%20Lecture%2026.%20%E7%9F%A2%E9%87%8F%E5%9C%BA.md)中提到的Yukawa耦合。

>[!example] **Example 2. Revisited**：
>$$D_\mu\phi=\partial_\mu\phi+ieA_\mu\phi,\quad D_\mu\phi^*=\partial_\mu\phi^*-ieA^\mu\phi^*$$
>则
>$$\mathcal L_m=\partial_\mu\phi^*\partial^\mu\phi-\mu^2\phi^*\phi\to\mathcal L'=D_\mu\phi^*D^\mu\phi-\mu^2\phi^*\phi=\mathcal L_m-ie[\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*]A_\mu+e^2A^\mu A_\mu \phi^*\phi$$
>这个耦合形式就更为复杂了，其比 $-eJ^\mu A_\mu$ 多了一项**四次耦合**。新的守恒流为：
>$$J^\mu=i[\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*]\to J^\mu_{\text{new}}=ie[\phi^*D^\mu\phi-\phi D^\mu\phi^*]$$
>你可以通过新的运动方程验证其确实是守恒流。

最小耦合得出的耦合并不一定是唯一的满足要求的耦合形式。例如，考虑下面的Lagrangian：
$$
\mathcal L=\mathcal L_P+\bar\psi(iD\mkern-11mu/-m)\psi+a\bar\psi\sigma_{\mu\nu}\psi F^{\mu\nu}
$$
其中 $\sigma^{\mu\nu}=\dfrac i2[\gamma_\mu,\gamma_\nu]$。多出的一项称为“**Pauli项**”。由于 $F^{\mu\nu}$ 与 $\bar\psi\sigma^{\mu\nu}\psi$ 显然都是规范不变的，这也是一个满足要求的耦合方式。其将导出一个新的守恒流（Pauli项含有 $A_\mu$ 的导数，要用分部积分处理）：
$$
J_\mu=-\dfrac{\partial\mathcal L'}{\partial A^\mu}=e\bar\psi\gamma_\mu\psi-2a\partial^\nu(\bar\psi\sigma_{\mu\nu}\psi)
$$
其中Pauli项的处理为：
$$
a\bar\psi\sigma_{\mu\nu}\psi F^{\mu\nu}=-2a\bar\psi\sigma_{\mu\nu}\psi\partial^\nu A^\mu\simeq 2a\partial^{\nu}(\bar\psi\sigma_{\mu\nu}\psi) A^\mu
$$
Pauli项的构造方式可以从下面理解：先考虑一个平凡项：
$$
\mathcal L'=(\partial^\mu\bar\psi)\sigma_{\mu\nu}(\partial^\nu\psi)\simeq -\bar\psi\sigma_{\mu\nu}\partial^\mu\partial^\nu\psi
$$
由于 $\sigma_{\mu\nu}$ 反对称，因此上式为零。我们可以将其加入 $\mathcal L_m$ 中再执行最小耦合步骤，则上式被替换为：
$$
\mathcal L'=(D^\mu\bar\psi)\sigma_{\mu\nu}(D^\nu\psi)\simeq -\bar\psi\sigma_{\mu\nu}D^\mu D^\nu\psi
$$
但现在 $D^\mu$ 与 $D^\nu$ 并不对易，事实上
$$
[D^\mu ,D^\nu]=D^\mu D^\nu-D^\nu D^\mu=ie F^{\mu\nu}
$$
代入就得到了Pauli项。
在四维理论中，我们通常无需考虑这些非最小相互作用，因为它们（尤其是这一项）通常被证明是**不可重整化**的。因此一般我们只需考虑最小耦合方法生成的耦合项即可。

>[!abstract]
>现在，我们反过来梳理一遍步骤，可能对你理解这两节有帮助。系统的Lagrangian为：
>$$\mathcal L=\mathcal L_P+\mathcal L',\quad \mathcal L_P=-\dfrac14 F_{\mu\nu}F^{\mu\nu}+\dfrac12\mu^2 A_\mu A^\mu,\quad \mathcal L'=\mathcal L_m+\mathcal L_{\text{coupling}}$$
>对 $A_\mu$ 变分得到的运动方程为：
>$$\partial_\nu F^{\nu\mu}+\mu^2A^\mu-J^\mu=0\Rightarrow \mu^2\partial_\mu A_\mu=\partial_\mu J_\mu,\quad J^\mu\equiv-\dfrac{\partial\mathcal L'}{\partial A_\mu}$$
>现在假设存在一种规范变换 $A_\mu\to A_\mu+\partial_\mu\chi,\;\phi\to \phi'$，使得规范变换下 $\mathcal L'$ 不变。而无穷小规范变换诱导出一种变分，则只有 $\dfrac12\mu^2 A_\mu A^\mu$ 会发生变化，得到Lorenz条件以及流守恒方程：
>$$\partial _\mu A^\mu=0\Rightarrow \partial_\mu J^\mu=0$$
>因此相互作用的规范不变性必然导致守恒流。另一方面，假设物质场的自由Lagrangian一开始具有某种内部对称性，因此具有某种守恒流：
>$$\delta\phi=-iQ\lambda\phi\Rightarrow j^\mu=-i\pi^\mu Q\phi$$
>现在，我们将规范变换关于 $\phi$ 的部分定义为此内部对称性局域化的结果。此时引入协变导数 $D_\mu$。我们证明了如果将 $\mathcal L_m$ 中的所有 $\partial_\mu$ 换为 $D_\mu$，则其在规范变换下不变。这就是最小耦合方案。将新的 $\mathcal L_m$ 作为 $\mathcal L'$。则这种规范不变性对应的守恒流 $J^\mu$ 正是原先内部对称性导致的守恒流 $j^\mu$ 中将所有 $\partial_\mu$ 换为 $D_\mu$ 的结果。
>

## 27.3 技术难题

从原理上说，所有条件都已具备。我们清楚相互作用的具体形式，采用正则对易子处理玻色子、反对易子处理费米子的经典量子化方法。现在只需按部就班：推导Hamiltonian，写出Dyson公式，应用Wick定理，获得Feynman规则，运用重整化方案，提取 $S$ 矩阵，然后就可以愉快地开始计算了。
为什么不开始呢？第一个问题源于无质量情形下，传播子是发散的。这一点实际上来源于**规范不变性**。在有质量情形下，我们假设相互作用是规范不变的，利用变分 $\delta A_\mu=\partial_\mu \delta\chi$ 或者由运动方程得到Lorenz条件：
$$
\partial_\nu F^{\nu\mu}+\mu^2 A^\mu+\dfrac{\partial\mathcal L'}{\partial A_\mu}=0\Rightarrow \partial_\mu A^\mu=0
$$
这是真实运动的约束。但是在无质量情形下，运动方程本身就是规范不变的。也就是说，如果 $\{A_i(\vec x,t)\}$ 是运动方程的解，则 $A_i'=A_i+\partial_i\chi$ 也是运动方程的解。即使我们施加了初值条件，由于 $\chi$ 是任意函数，我可以取其在初始时 $\chi(\vec x,t_0)=0$，而在其它时刻不为零，也能得到无穷组满足运动方程与初值条件的解。为了限制解的唯一性，我们必须人为施加**规范条件**。比如Lorenz规范 $\partial_\mu A^\mu=0$，或者Coulomb规范 $\nabla\cdot\vec A=0$。

第二个问题来源于**导数耦合**，这我们早就提到过。在[Coleman QFT - Lecture 14. LSZ约化公式](./Coleman%20QFT%20-%20Lecture%2014.%20LSZ%E7%BA%A6%E5%8C%96%E5%85%AC%E5%BC%8F.md)中，我们提到可以“天真的”认为 $\partial_\mu\phi\to ik_\mu\phi$，但这显然是有问题的。例如，考虑下面的赝标量-旋量耦合：
$$
\mathcal L_I=f\bar\psi\gamma^\mu\gamma_5\psi\partial_\mu\phi\equiv fK^\mu \partial_\mu\phi
$$
完整的Lagrangian就是：
$$
\mathcal L=\dfrac12(\partial^\mu \phi\partial_\mu\phi-m^2\phi^2)+\bar\psi(i\gamma^\mu\partial_\mu-m)\psi+fK^\mu\partial_\mu\phi
$$
此时 $\phi$ 的正则动量是：
$$
\pi_f=\dfrac{\partial\mathcal L}{\partial(\partial_0\phi)}=\partial^0\phi+fK^0
$$
因此
$$
\mathcal H_I\ne -\mathcal L_I
$$
具体写出：
$$
\mathcal H=\dfrac12(\pi_f^2+(\nabla\phi)^2+m^2\phi^2)+\bar\psi(\vec\gamma\cdot\nabla\psi+m\psi)-fK^\mu\partial_\mu\phi-\dfrac12 f^2(K^0)^2=\mathcal H_\phi+\mathcal H_\psi-\underbrace{\left(\mathcal L_I+\dfrac12f^2(\bar\psi\gamma^0\gamma_5\psi)^2\right)}_{\mathcal H_I}
$$
因此
$$
\mathcal H_I=-\mathcal L_I-\dfrac12f^2(\bar\psi\gamma^0\gamma_5\psi)^2
$$
其甚至不是Lorentz标量，这将导致S矩阵也不是Lorentz标量。另一个问题来源于时序积，我们将要计算含导数的标量场的缩并。由
$$
\partial_x^0\partial_y^0T(\phi_I(x)\phi_I(y))=T(\pi_I(x)\pi_I(y))+i\delta^{(4)}(x-y)
$$
因此
$$
\langle 0|T(\partial_x^\mu\phi_I(x)\partial^\nu_y\phi_I(y))|0\rangle=\partial_x^\mu\partial_y^\nu i\Delta(x-y)-ig^{0\nu}g^{0\mu}\delta^{(4)}(x-y)
$$
第二项是纯粹的垃圾，我们完全不希望来处理这种东西。
事实上，这些问题会互相抵消，因此我们一开始天真的处理能导出正确的答案。这一点已经在[Coleman QFT - Lecture 26. 矢量场](./Coleman%20QFT%20-%20Lecture%2026.%20%E7%9F%A2%E9%87%8F%E5%9C%BA.md)中提到过了，论证这一点需要用到泛函积分的技巧。

我最后一个要提到的问题是约束变量的问题。[Coleman QFT - Lecture 26. 矢量场](./Coleman%20QFT%20-%20Lecture%2026.%20%E7%9F%A2%E9%87%8F%E5%9C%BA.md)提到，Proca Lagrangian的IVD是 $\{A_i,F^{i0}\}$，$\{A_\mu,\partial_0 A_\mu\}=\{A_i,\partial_0A_i,A_0,\partial_0 A_0\}$ 可以由其得到。得到 $A^0$ 的式子为：
$$
\mu^2 A^0=\partial_i F^{i0}-J^0
$$
在消除 $A^0$ 的过程中，$(A^0)^2$ 项会引入 $(J^0)^2$ 项，因此其会涉及到类似于 $[\partial^0\phi(x),\partial^0\phi(y)]$ 的计算，这会出现和第二个问题类似的麻烦，出现多余的delta函数等。

这一系列问题在正则量子化的框架下是非常不易处理的，因此下一章我将介绍处理这类问题很有优势的**泛函积分量子化**方法。

---



