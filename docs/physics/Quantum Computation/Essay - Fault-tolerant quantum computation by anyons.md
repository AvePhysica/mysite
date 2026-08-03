---
title: "Essay - Fault-tolerant quantum computation by anyons"
date: 2026-08-03
---

量子计算在一些特定问题的处理上效率远高于经典计算，但其**退相干**与**错误**的问题十分难以解决。Shor给出了**容错量子计算**的方案，只需量子门的错误率在某一常数阈值 $\delta$ 下，其仍然可以用于模拟量子线路。然而，$\delta$ 过小而在应用中难以实现。
经典比特与逻辑门是足够可靠的，其利用磁性材料作为信息载体，原子的自旋倾向于同向排列，因此当一个自旋错误反转时，相互作用会迫使其翻转回来。这实际上是在物理层面实现**纠错机制**。这一机制能否迁移至量子计算上？
我先考虑在二维环面(2D-Torus)上的**稳定子量子码**。Qubits生活在lattice的边上，而稳定子算符在顶点与面上。我们可以构造一个局域相互作用的Hamiltonian（相当于违反稳定子能量需要升高能量）。Hamiltonian的基态即对应于无错误状态，但注意基态是 $4^g$ 重简并的，$g$ 是曲面的**亏格(genus)**。这种简并性能在微扰下被保持，更严格的说，基态的分量程度可以写为 $\exp({-aL})$，$L$ 是lattice的尺度。这样的系统可以作为量子存储器，其通过物理层面的结构维持稳定性。
该模型中的激发态是**任意子(anyons)**。对abelian的任意子模型，当一个任意子绕另一个运动一周时会产生一个相位。但在nonablian anyons的模型下，其会做一个非平凡的幺正变换。因此，即使在平面上 $n$ 粒子激发态仍然具有简并。

## 1. Toric codes与对应的Hamiltonian

考虑环面上的 $k\times k$ 正方晶格。qubits在晶格的边上，因此有 $2k^2$ 个qubits。对于顶点 $s$ 与面 $p$，其上的算符为：
$$
A_s=\prod_{j\in \mathrm{star}(s)}\sigma_j^x,\quad B_p=\prod _{j\in\text{boundary}(p)}\sigma_j^z
$$
这些算符互相对易（因为 $\mathrm{star}(s)$ 与 $\text{boundary}(p)$ 有0或2条重合的边）。$A_s,B_p$ 是厄米且幺正的算符，其本征值为 $\pm 1$。

<div align="center">
  <img src="./pictures/Pasted image 20260314212108.png" width="400">
</div>

记这个 $2^{2k^2}$ 维的Hilbert空间为 $\mathcal N$。定义**保护子空间** $\mathcal L\subseteq\mathcal N$ 为：
$$
\mathcal L\equiv\big\{|\xi\rangle\in\mathcal N:A_s|\xi\rangle=B_p|\xi\rangle=|\xi\rangle,\; \forall s,p\big\}
$$
这个构造给我们了**toric code**的编码空间。$A_s,B_p$ 称为这个code的**稳定子(stabilizer)**。
注意到恒等式：
$$
\prod_sA_s=\prod_pB_p=1
$$
故独立的stabilizer的个数为 $2k^2-2$，因此 $\mathcal L$ 的维度为：
$$
\mathrm{dim}\,\mathcal L=2^{2k^2-2k^2+2}=4
$$
另一种理解方式是考虑 $\mathcal L$ 上全体线性算符构成的**代数(algebra)** $\mathbf{L}(\mathcal L)$。记 $\mathcal F\subseteq \mathbf{L}(\mathcal L)$ 为 $A_s,B_p$ 生成的代数，一个直接的结论是 $\mathbf{L}(\mathcal L)\cong\mathcal G/\mathcal T$，其中 $\mathcal G\supseteq \mathcal F$ 为全体与 $A_s,B_p$ 交换的代数，而 $\mathcal T\subset \mathcal G$ 为 $A_s-1,B_p-1$ 生成的**理想(ideal)**。代数 $\mathcal G$ 由下面形式的算符生成：
$$
Z=\prod _{j\in c}\sigma_j^z,\quad X=\prod _{j\in c'}\sigma_j^x
$$
其中 $c$ 是一个环路(loop)，而 $c'$ 是一个截断(cut)，即对偶晶格上的环路。若一个loop(or cut)是**可缩的(contractible)**，则其应当可以写为稳定子的乘积，即 $Z\equiv 1\;(\mathrm{mod}\,\mathcal T)$。因此，只有不可缩的loops与cuts才是我们真正感兴趣的。实际上，代数 $\mathbf{L}(\mathcal L)$ 由 $Z_1,Z_2,X_1,X_2$ 四个算子生成，其分别对应于下图中的loops $c_{x1},c_{x2}$ 与cuts $c'_{z1},c'_{z2}$。

<div align="center">
  <img src="./pictures/Pasted image 20260314215125.png" width="400">
</div>

这四个算符的对易关系和一般的Pauli算符 $\sigma_1^z,\sigma_2^z,\sigma_1^x,\sigma_2^x$ 一样，因此我们有两组独立的Puali算符，这个空间是4维的。
用更数学化的语言来说，代数 $\mathcal F$ 对应到 2-边界与 0-上边界（系数取自 $\mathbb Z_2$），代数 $\mathcal G$ 对应到 1-循环与1-上循环，而代数 $\mathbf{L}(\mathcal L)$ 对应到 **1-同调与 1-上同调**。
当然，我们也能更简单的理解这一点。将 $\mathcal N$ 的基用 $z_j=0,1$ 标记，其中 $j$ 标记边。约束 $B_p|\xi\rangle=|\xi\rangle$ 意味着每一方格的四条边的求和为零(mod 2)。因此其一定形成环路，满足条件的基矢可以用两个**拓扑数** $v_{1},v_{2}$ 标记，其含义是某一个态在两条回路 $c_{z1},c_{z2}$ 上求和的结果(mod 2)，因此共有四种状态。另一方面，约束 $A_s|\xi\rangle=|\xi\rangle$ 要求所有 $v_1,v_2$ 相同的矢量必须以**相同的系数**进入这四个基矢中，因此 $A_p$ 会将 $v_1,v_2$ 相同的矢量互相转化。也就是说，保护子空间的基矢可以写为：
$$
|\xi_{v_1,v_2}\rangle=2^{-(k^2-1)/2}\sum_{z_1,\cdots,z_n}|z_1,\cdots,z_n\rangle,\quad \sum_{j\in z_1}z_j=v_1,\;\sum_{j\in z_2}z_j=v_2
$$
接下来，考虑一个一般的错误 $E\in\mathbf{L}(\mathcal N)$：
$$
E=\sigma(\alpha_1,\cdots,\alpha_n;\beta_1,\cdots,\beta_n)=\prod_j(\sigma_j^x)^{\alpha_j}(\sigma_j^z)^{\beta_j},\quad \alpha_j,\beta_j=0,1
$$
当且仅当 $E\in\mathcal G$ 时，这个错误无法被探测到，但是注意 $E\in\mathcal F$ 时，则 $E|\xi\rangle=|\xi\rangle,\;\forall |\xi\rangle\in\mathcal L$，因此这其实相当于没有错误。因此真正无法探测的错误 $E$ 必包含不可缩的回路，这意味着 $|\text{Supp}(E)|\ge k$。（ $\text{Supp}(E)$ 指 $\alpha_j\ne 0\,\text{or}\,\beta_j\ne 0$ 的 $j$ 的集合）这样的错误发生的概率随系统尺度的增大而趋于零。
在原先的纠错程序中，我们的目标是找出特征向量 $(\alpha_1,\cdots,\alpha_n;\beta_1,\cdots,\beta_n)$。而现在新的想法是在物理层面做纠错，考虑Hamiltonian：
$$
H_0=-\sum_s A_s-\sum_p B_p
$$
由于 $A_s,B_p$ 是对易的，这个Hamiltonian是容易做对角化的，其基态有**四重简并**。注意到由于 $A_s,B_p$ 的本征值为 $\pm 1$，因此激发态间的能隙满足 $\Delta E\ge 2$。注意到这个Hamiltonian仅包含局域的相互作用，我们期望错误对应的激发态可以通过某种冷却过程自动消失。
来看看这个Hamiltonian在扰动下是否保持稳定，考虑下面形式的微扰：
$$
V=-\vec h\cdot\sum_j\vec \sigma_j-\sum_{j< p}J_{jp}(\vec \sigma_j,\vec \sigma_p)
$$
考虑原Hamiltonian的两个正交基态 $|\xi\rangle,|\eta\rangle\in\mathcal L$，在微扰理论的 $m$ 阶近似下，能级分裂正比于 $\langle \xi|V^m|\eta\rangle$ 或 $\langle \xi|V^m|\xi\rangle-\langle \eta|V^m|\eta\rangle$。然而，这两个量只有当 $V^m$ 包含沿不可缩环路时才非零，由于 $V$ 应被假设为局域的，因此其最多包含两个 $\sigma$ 矩阵，因此能级分裂只发生在 $\lceil k/2\rceil$ 及以上的阶数上。这个分裂将以 $\exp(-ak)$ 指数衰减。
上面的结果可以推广至任意的亏格为 $g$ 的2D紧致可定向曲面上，Hamiltonian基态为 $4^g$ 重简并，此时在微扰下基态分裂正比于 $\exp(-aL)$，$L$ 为最小的维度。宏观系统感知整体拓扑性质的原因在于**长程关联**，这种纠缠我们会在下面提及。基态简并性依赖于拓扑性质，因此我们在处理**拓扑量子序**。

## 2. Abelian anyons

我们来尝试对Hamiltonian $H_0$ 的一些低能激发态进行分类。作为一个基本的激发，当 $A_s|\xi\rangle=B_p|\xi\rangle=|\xi\rangle$ 中的某些条件违反时代表有粒子被激发。但是，由于约束条件 $\prod_s A_s=\prod_p B_p=1$，单粒子激发态时不被允许的。但是，构造双粒子激发是可能的。形式为 $|\psi^z(t)\rangle=S^z(t)|\xi\rangle$ 或 $|\psi^x(t')\rangle=S^x(t')|\xi\rangle$，其中 $|\xi\rangle$ 是一个任意的基态，以及
$$
S^z(t)=\prod_{j\in t}\sigma_j^z,\quad S^x(t')=\prod_{j\in t'}\sigma^x_j
$$
在第一种情况下，双粒子在一条开弦(string, non-closed path) $t$ 的端点被激发，将其称为z-type的粒子，或者"**电荷(electric charge)**"。相应的，x-type粒子称为"**磁涡(magnetic vortices)**"，其占据对偶晶格上开弦的端点（即原晶格的面）。算符 $S^x(t),S^z(t')$ 称为**弦算符(string operators)**。其仅与 $A_s,B_p$ 中的两个不对易。注意态 $|\psi^z(t)\rangle=S^z(t)|\xi\rangle$ 仅与 $t$ 所属的**同伦类**有关。

<div align="center">
  <img src="./pictures/Pasted image 20260315143145.png" width="350">
</div>

任意偶数数量的z-type粒子与偶数数量的x-type粒子都是允许的，它们两两通过开弦连接。每种确定数量的粒子组成均对应于 $4^g$ 维的简并子空间，从基态出发得到相应的激发态 $S^{a_1}(t_1)\cdots S^{a_m}(t_m)|\xi\rangle$ ，其属于哪一个简并态取决于 $t_1,\cdots,t_m$ 的同伦类。
我们来看看这些粒子在torus上移动的效果。将一个z-type的粒子沿 $c_{z1},c_{z2}$ 移动等价于作用算符 $Z_1,Z_2$。我们可以将这一过程应用基态，先激发一对粒子，将其中一个粒子绕环面一周再发生湮灭。我们还能考虑一个x-type粒子绕z-type粒子运动一周的过程，如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20260315143936.png" width="450">
</div>

则
$$
|\Psi_{i}\rangle=S^z(t)|\psi^x(q)\rangle,\quad |\Psi_f\rangle=S^x(c)S^z(t)|\psi^x(q)\rangle=-|\Psi_i\rangle
$$
因为 $S^x(c)$ 与 $S^z(t)$ 反对易（有一条边重合），且 $S^x(c)|\psi^x(q)\rangle=|\psi^x(q)\rangle$。有这样性质的粒子称为**阿贝尔任意子(abelian anyons)**。更广义的说，abelian anyons是实现（带色）辫群一维非平凡表示的粒子。本例子也可以被解释为AB效应。其与分数量子Hall效应有紧密的联系，对于因子为 $p/q$ 的分数量子Hall系统，仅存在一种带电荷 $1/q$ 的粒子（即绕一圈产生的额外相位为 $\exp(2\pi i/q)$ ）。任意子和基态简并有相同的机制，它们都是拓扑量子序的体现。

## 3. 涌现的对称性

Toric code本质上是一个 $\mathbb Z_2$ 规范理论，$z_j$ 对应到 $\mathbb Z_2$ 矢势，$\sigma_j^x$ 对应于与之共轭的电场。$A_s$ 对应于局域规范变换，$B_p$ 对应于面 $p$ 上的磁通。条件 $A_s|\xi\rangle=|\xi\rangle$ 代表态 $|\xi\rangle$ 是规范不变的，而条件 $B_p|\xi\rangle=|\xi\rangle$ 代表规范场对应的**联络平坦**。但这规范只在基态不被违反，违反规范需要付出更高的能量，但不是完全禁止。
尽管微扰下的Hamiltonian $H=H_0+V$ 缺乏一般对称性，但系统仍呈现出两个守恒律：**电荷与磁荷守恒**（在mod 2的意义上）。在一般的电动力学中，电荷守恒联系到局域（规范）$U(1)$ 对称性，而我们的例子则是对应于两个局域 $\mathbb Z_2$ 对称性。因此，系统呈现出 $\mathbb Z_2\times\mathbb Z_2$ 的动力学对称性。
这个对称性从何而来？为此，我们需要扩展系统。新的自由度在于在顶点与面上放上新的自旋变量 $v_s,w_p=0,1$。顶点上的自旋保持在 $\frac{1}{\sqrt 2}(|0\rangle+|1\rangle)$，面上的自旋保持在 $|0\rangle$，这些自旋构成唯一的状态 $|\zeta\rangle$，满足 $\sigma_s^x|\zeta\rangle=\sigma^z_p|\zeta\rangle=|\zeta\rangle$。这样，我们将原先的Hilbert空间 $\mathcal N$ 嵌入了更大的空间 $\mathcal T$，$|\psi\rangle\to|\psi\rangle\otimes|\zeta\rangle$。现在考虑在空间 $\mathcal T$ 上的幺正变换 $U$ ：
$$
v_s\to v_s,\quad z_j\to z_j+\sum_{s=\text{endpoint}(j)}v_s,\quad w_p\to w_p+\sum_{j\in{\text{boundary(p)}}}z_j
$$
（所有求和均在mod 2下）。新的物理子空间变成 $\mathcal N'=U\mathcal N$。相应的，变换后矢量 $|\psi\rangle\in\mathcal N'$ 在下面的对称性变换下不变：
$$
P_s=U\sigma_s^xU^\dagger=\sigma_s^x A_s,\quad Q_p=U\sigma_p^zU^\dagger=\sigma_p^z B_p
$$
变换后的Hamiltonian $H'=UHU^\dagger$ 与这两个算符对易（因为原先 $H=H\otimes I$ 与 $\sigma_s^x,\sigma_p^z$ 显然对易）。说得更清楚一点，我们考虑的Hilbert空间 $\mathcal T$ 由三种变量刻画：
$$
|\Psi\rangle=|v_s,z_j,w_p\rangle:s(site),j(edge),p(plane)
$$
原先的 $\sigma_s^x$ 相当于反转 $v_s$。则
$$
U\sigma_s^xU^\dagger|\Psi'\rangle=U\sigma_s^x|v_s,z_j,w_p\rangle=U|\bar v_s,z_j,w_p\rangle=|\bar v_s,z_j+\sum_s\bar v_s,w_p+\sum_j z_j\rangle
$$
可以看到，当反转某一个 $v_s$ 时，与之相邻的边 $z_j$ 都会发生一次反转，因此这相当于 $A_s$ 的作用。同理，$Q_p=\sigma_p^zB_p$ 的结果是类似的。
在物理子空间中，等价有 $P_s\equiv 1,Q_p\equiv 1$。因此新的Hamiltonian可以写为：
$$
H_0'=UH_0U^\dagger\equiv-\sum_s\sigma_s^x-\sum_p\sigma_p^z
$$
用场论语言来说，顶点上的变量 $v_s$ （或者说算符 $\sigma_s^z$ ）是**Higgs场**。算符 $P_s$ 是局域规范变换。因此，一个任意的Hamiltonian可以通过引入辅助Higgs场来写成规范不变的形式。因此我们可以使隐藏的规范对称性显现出来。

原Hamiltonian的电荷由顶点算符 $\sigma_s^x$ 给出，由于 $\prod_s \sigma_s^x=1$，因此任意紧致表面的总电荷为零。 

## 4. 群代数基础上的model

现在，我们尝试来建立nonabelian anyons的模型。设 $G$ 为一个一般的有限群，记 $\mathcal H=\mathbb C[G]$ 为其对应的**群代数**，即全体复系数群元素的线性组合的空间。可以将 $\{|g\rangle: g\in G\}$ 视为这个Hilbert空间 $\mathcal H$ 的一组标准正交基，空间的维数为 $N=|G|$。我们研究取值于该空间的“自旋”。
我们需要该空间上的四种线性算子，其由群元素 $g,h\in G$ 标记：
$$
L_+^g|z\rangle=|gz\rangle,\quad L_-^g|z\rangle=|g^{-1}z\rangle,\quad T_+^h|z\rangle=\delta_{h,z}|z\rangle,\quad T_-^h|z\rangle=\delta_{h^{-1},z}|z\rangle
$$
（在Hopf代数的语境中，算子 $L_+^g,\,L_-^g,\,T^h_+,\, T_-^h$ 分别对应左乘法、右乘法、左余乘法和右余乘法）。这些算子满足以下对易关系：
$$
L_+^gT_+^h=T_+^{gh}L_+^g,\quad L_+^gT_-^h=T_-^{hg^{-1}}L_+^g,\quad L_-^gT_+^h=T_+^{hg^{-1}}L_-^g,\quad L_-^g T_-^h=T_-^{gh}L_-^g
$$
现在考虑一个定向2D曲面上的任意晶格，其边上有取值于 $\mathcal H$ 的自旋，并且我们在边上加箭头代表其方向。用 $j$ 标记晶格的边，$s$ 为其一个端点。定义算符 $L^g(j,s)=L^g_\pm(j)$ ，其中当 $s$ 为 $j$ 起点时取负号，终点时取正号。类似的，若 $p$ 为 $j$ 左侧（右侧）的面，定义算符 $T^h(j,p)$ 为 $T_-^h$ ( $T_+^h$ )。如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20260321230153.png" width="600">
</div>

用这些记号，可以定义在顶点 $s$ 上的局域规范变换与在面 $p$ 上的磁荷算子：
$$
A_g(s,p)=A_g(s)=\prod_{j\in\text{star}(s)}L^g(j,s),\quad B_h(s,p)=\sum_{h_1h_2\cdots h_k=h}\prod_{m=1}^k T^{h_m}(j_m,p)
$$
其中 $j_1,\cdots,j_m$ 为面 $p$ 的从顶点 $s$ 开始逆时针顺序的 $m$ 条边。为了保持两个算符的对偶性，即使 $A_g$ 不依赖于面 $p$，我们仍将其记为 $A_g(s,p)$。这些算子生成了群 $G$ 上的代数 $\mathcal D=\mathbf{D}(G)$，这是群代数 $\mathbb C[G]$ 的Drinfield's quantum double。现在，我们只需要两个 $A_g(s,p)$ 与 $B_h(s,p)$ 的线性组合：
$$
A(s)=N^{-1}\sum_{g\in G}A_g(s,p),\quad B(p)=B_1(s,p)
$$
$A(s),B(p)$ 均为投影算符，前者投影至 $s$ 处规范不变的态，后者投影至面 $p$ 磁荷为零的态。$A(s)$ 与 $A(s')$ 对易，$B(p)$ 与 $B(p')$ 对易。在 $G=\mathbb Z_2$ 的情况，其与原先的检验算符 $A_s,B_p$ 几乎相同。实际上，$A(s)=\dfrac12(A_s+1),\;B(p)=\dfrac12(B_p+1)$。
现在，我们只定义了总的Hilbert空间 $\mathcal N$（其为 $\mathcal H$ 的张量积）与其上的一些算符。现在我们定义Hamiltonian：
$$
H_0=\sum_s(1-A(s))+\sum_p(1-B(p))
$$
基态由下式给出：
$$
\mathcal L=\{|\xi\rangle\in\mathcal N:\;A(s)|\xi\rangle=B(p)|\xi\rangle=|\xi\rangle\;\;\text{for all } s,p\}
$$
其对应能量0。而激发态的能量 $\ge 1$。这样，基态与平坦 $G$-联络相联系，因此球面上的基态不简并。
