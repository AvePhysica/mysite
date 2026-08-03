---
title: "Color code"
---

## Color code基础内容

2D color code是定义在二维晶格上的表面纠错码，假设qubits放在三角形面上 $f\in\Delta_2(L)$ 上，而X,Z型稳定子放在顶点 $v\in\Delta_0(L)$ 上，其会对所有共顶点的面qubits执行对应的Pauli算符。由于这是一个CSS码，可以将X,Z型错误分开处理，因此我们可以先只考虑Z型错误，设发生Z错误的面集合为 $\epsilon\subseteq\Delta_2(L)$，其会在一些顶点 $\sigma\subseteq\Delta_0(L)$ 产生X-syndrome。
我们的目的在于对于任意一个syndrome输入 $\sigma\in\delta_0(L)$，需要确定一种correction $\phi\in\Delta_2(L)$。

<div align="center">
  <img src="./pictures/Pasted image 20260517105324.png" width="700">
</div>

并不要求 $\phi=\epsilon$ 严格成立，只需要 $\phi+\epsilon$ 逻辑上平凡即可。其不具有toric code简单的syndrome作为error端点的关系，因此纠错更难进行。顶点被三种颜色染色，记为 $R,G,B$，单个qubit错误会激发三种不同颜色的端点，而两个相连错误则会留下同色的一对激发，这就是color code的两种基本激发模式，因此纠错时的配对方式有两种：**三色配对与两同色配对**。
采取的解码方案称为**限制解码(Restriction Decoder)**，其想法可概括为：将其投影至只含两个颜色的子晶格上，在这些晶格上做Toric-code-like decoding，最后讲结果映射回color code得到解码方案。

<div align="center">
  <img src="./pictures/Pasted image 20260517110355.png" width="700">
</div>

所谓限制晶格 $L_{RG}$ 就是将所有蓝色顶点与与之相连的边移除后得到的晶格（图(c)）。记 $\sigma_{RG}\in\Delta_0(L_{RG})$ 为R,B两种颜色的syndrome集合。我们可以确定
$$
|\sigma_{RG}|\equiv 0\;(\mathrm{mod}\,2)
$$
因为不论是三色还是两同色激发都满足上式。这启发我们可以将其两两配对，也就是说一定能找到 $\rho_{RG}\subseteq\Delta_1(L_{RG})$，使得 $\partial_1\rho_{RG}=\sigma_{RG}$。类似的，我们也可限制到RB晶格上，得到相应的 $\sigma_{RB},\rho_{RB}$。对于限制晶格上的两两配对问题，这其实是一个MWPM（最小权完美匹配）问题，其可以在经典计算机上高效完成。
接下来，我们要将边修正通过local lifting得到原晶格的面修正。我们先将两条纠错链合起来 $\rho_{RG}\cup \rho_{RB}$，当然这两个集合是无交的，同时其会以所有的R-syndrome为公共顶点。
定义记号，设 $\beta\subseteq\Delta_1(L)$ 是一组边集合，记 $\Delta_0^R(\beta)$ 为所有含在 $\beta$ 内的R顶点集合，$\beta|_v$ 为所有连接顶点 $v\in\Delta_0(L)$ 的 $\beta$ 中的边集合。以及 $St_2(v)$ 为所有含有 $v$ 中顶点的面集合。这样，对于每个顶点 $v\in\Delta_0^R(\rho_{RG}\cup\rho_{RB})$，local lifting procedure找到一组面 $\tau_v\subseteq St_2(v)$，使得其边界恰好与 $\rho_{RG}\cup\rho_{RB}$ 匹配。这是指：
$$
(\partial_2\tau_v)\big|_v=(\rho_{RG}\cup\rho_{RB})\big |_v
$$
最后对所有的红色顶点执行这一步骤，得到Restriction Decoder：
$$
\varphi=\bigcup_{v\in\Delta_0^R(\rho_{RG}\cup\rho_{RB})}\tau_v
$$
这一过程为什么能保证纠错成功？首先，我们先考虑绿色顶点（蓝色与之是平权的），其会在 $L_{RG}$ 中被涉及。关键的观察在于 $\rho_{RG}$ 一定是交替经过红色与绿色顶点的。对于非端点的绿色顶点，其前后都有红色顶点，则在local lifting中对前后的红色顶点都寻找面和边匹配，因此面对该绿色顶点一定包含偶数次，因此是成立的。而对于端点的绿色顶点，其只有奇数个红色顶点与之相连，因此得到的面也只会奇数次覆盖它，故其的确是一个syndrome。再来看红色顶点，若其是在其中一种限制晶格的 $\rho$ 内部，则与之相连的是同色顶点，此时观察得到需要偶数个面与 $\rho$ 匹配。而对于syndrome的红色顶点，其只需要奇数个面就与其匹配。故这也是满足要求的。

## 纠错阈值

上面的解码方案将其放在限制晶格上处理，其不一定是最优的。此时的纠错阈值就是Toric code的错误阈值。最优的纠错方案应当选取概率最大的逻辑类，也就是使下式最大：
$$
\mathrm{prob}(h|S)=\dfrac{\sum_{C\in h}\mathrm{prob}(S+C)}{\sum_{C}\mathrm{prob}(S+C)}
$$
这里 $C$ 代表闭链，边界算子 $\partial:\Delta_2\to \Delta_0$ 是那些包含在奇数个错误面中的顶点。阈值的存在告诉我们，在大晶格极限下，最优编码一定能成功纠错。设真实错误面集合为 $E\in\Delta_2(L)$，而我们的纠错面集合为 $E'\in\Delta_2(L)$，则 $\partial(E+E')=\partial C=0$。在给定 $E$ 下, $E'$ 的概率分布满足：
$$
\mathrm{prob}(E'|E)\propto\prod_f\exp(J_f u_f),\quad u_f=1-2n_C(f)\in\{1,-1\}
$$
其中
$$
\exp(-2J_f)=\begin{cases}
p/(1-p),\quad \text{for }f\notin E\\
(1-p)/p,\quad \text{for }f\in E
\end{cases}
$$
因此仍可对应于 $E$ 决定耦合系数，给出 $C$ 就能给出一个概率分布的统计力学模型。 $C$ 为环路的条件可以通过在顶点上放置Ising自旋来实现，这是由于每个顶点 $v$ 都与六个顶点 $v_1,\cdots,v_6$ 与六个面相邻，该顶点周围的-1面数可由下式导出：
$$
\sigma_v^6\cdot\prod_{i=1}^6\sigma_{v_i}^2=1
$$
因此的确是一条闭链。此时
$$
Z[J,\eta]=\sum_{\{\sigma_v\}}\exp\left(J\sum_{\langle ijk\rangle}\eta_{ijk}\sigma_i\sigma_j\sigma_k\right)\,\quad \eta_{ijk}=\begin{cases}+1,\quad f_{ijk}\notin E\\-1,\quad f_{ijk}\in E\end{cases}
$$
这是一个三体random-bond Ising模型，也就是相互作用是由共面的三个自旋状态的自旋决定的。现在纠错阈值就转化为这个模型的相变阈值问题。Nishimori线仍由下式给出：
$$
\mathrm{e}^{-2J}=\dfrac{p}{1-p}
$$
$p=0$ 的三体Ising model称为Baxter-Wu模型，其可以精确求解。论文中得到的结果是：
$$
\dfrac{k_B T}{J}=\dfrac{2}{\ln(1+\sqrt 2)}\approx 2.269
$$
$p\ne 0$ 的random-bond三体Ising model只能依赖于数值方法求解。大致可以画出下面的相图：

<div align="center">
  <img src="./pictures/Pasted image 20260520221555.png" width="600">
</div>

估计的阈值为 $p_c\approx0.109$。可以验证其满足于Gilbert-Varshamov bound，即CSS code的解码阈值满足 $R(p)\le 1-2H(p)$。当 $R=0$ 时得到 $p=0.1100$。
