---
title: "Note 1. 量子计算原理"
date: 2026-08-03
---

## 量子力学基础

Hilbert空间就是一个配备了内积的**复线性空间**，状态生活在Hilbert空间中，可以用Dirac ket表示。算符为Hilbert空间间的映射，对于线性映射能写为矩阵形式。一些特殊种类的算符包括：厄米的Hermitian($A^\dagger=A$)，幺正的unitary($A^\dagger A=AA^\dagger=I$)，正规的Normal($A^\dagger A=AA^\dagger$)，正定的Positive-definite($\langle u|A|u\rangle>0,\,\forall\, u$)。此外，通过外积可构建投影算符，正交完备基条件就表述为 $\sum_i a_i|v_i\rangle\langle v_i|=I$。
Hilbert空间可以通过**张量积**得到更大的Hilbert空间，对应于量子系统的复合。假设希尔伯特空间 R1 中的态矢量为 $|\alpha\rangle_1,|\beta\rangle_1$ ，希尔伯特空间R2中的态矢量为 $|\psi\rangle_2,|\phi\rangle_2$。由 R1 中的态矢量 $|\alpha\rangle_1$ 和 R2 中的态矢量 $|\psi\rangle_2$ 构成的直积态写成：
$$
|\alpha\rangle_1\otimes|\psi\rangle_2
$$
两个系统的算符也可以写为张量积的形式，其定义为：
$$
(A\otimes B)(|v\rangle\otimes|w\rangle)\equiv A|v\rangle\otimes B|w\rangle
$$
具体到矩阵表示上，有
$$
A\otimes B=\begin{pmatrix}
A_{11}B&A_{12}B&\cdots&A_{1n}B\\
A_{21}B&A_{22}B&\cdots&A_{2n}B\\
\vdots&\vdots&\ddots&\vdots\\
A_{m1}B&A_{m2}B&\cdots&A_{mn}B
\end{pmatrix}
$$
如果大Hilbert空间中的一个态可以写为子Hilbert空间中的态的叠加，则称为一个直积态(Direct state)，否则称为一个**纠缠态**(Entangled state)。通过将几个直积态做线性组合能容易得到纠缠态。另一方面，一个纠缠态也能分解为一些直积态的线性组合。这由以下的Schmidt分解定理保证：

> [!tip] Schmidt分解
> 假设一个双复合量子系统处于纯态 $|\psi_{AB}\rangle\in\mathcal H_A\otimes\mathcal H_B$，则
> $$|\psi_{AB}\rangle=\sum_{n=1,\cdots,d}\lambda_n|\psi_n\rangle|\phi_n\rangle,\quad d\le \min[\mathrm{dim}(\mathcal H_A),\mathrm{dim}(\mathcal H_B)]$$
> 其中 $\lambda_n> 0$，$\sum_n\lambda_n^2=1$，$\{|\psi_n\rangle\}$ 为 $\mathcal H_A$ 的一组正交基，$\{|\phi_n\rangle\}$ 为 $\mathcal H_B$ 的一组正交基。

这个定理就是SVD分解的直接推论。这里的 $d$ 称为**Schmidt秩**。对于直积态而言，$d=1$。而若 $d=\min[\mathrm{dim}(\mathcal H_A),\mathrm{dim}(\mathcal H_B)]$，则称为**最大纠缠态**。纠缠的程度可以用**香农熵**刻画：
$$
E=-\sum_{n=1}^d\lambda_n^2\log\lambda_n^2
$$
## 量子线路

经典计算的信号由电信号控制，例如高电平代表1，低电平代表0。通过经典逻辑门对信号进行操作。一个一般的逻辑门是一个映射 $f:\{0,1\}^n\to\{0,1\}^m$。常见的门包括与门、或门、非门、异或门等等。当这个映射是一一映射时，其就是**可逆的**，也就是说没有信息丢失。
而量子计算的信号为量子态（qubit）（一些量子双态系统），因此可以处于0与1的叠加态中，而对态的操作由**幺正的**量子逻辑门实现。也就是说，量子线路就是由制备好的一堆量子态输入，经过一个幺正变换，得到输出态并测量得到结果的过程。由于幺正性，这个过程一定是**可逆的**。
双态系统（qubit）生活在二维Hilbert空间中，其可以用**Bloch球**上的矢量描述，即
$$
|\psi\rangle=\cos\dfrac{\theta}{2}|0\rangle+\mathrm{e}^{i\phi}\sin\dfrac{\theta}{2}|1\rangle,\quad \rho=|\psi\rangle\langle\psi|=\begin{pmatrix}
\cos^2\dfrac{\theta}{2}&\mathrm e^{-i\phi}\cos\dfrac{\theta}{2}\sin\dfrac{\theta}{2}\\
\mathrm e^{i\phi}\cos\dfrac{\theta}{2}\sin\dfrac{\theta}{2}&\sin^2\dfrac{\theta}{2}
\end{pmatrix}
$$
幺正变换就对应于球面上的旋转。下面将列出一些常用的量子门。
### 单量子比特门

三个Pauli矩阵（既是厄米又是幺正）简记为 $X,Y,Z$，其矩阵表示为（Z的本征基下）：
$$
X=\begin{pmatrix}
0&1\\
1&0
\end{pmatrix},\quad Y=\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix},\quad Z=\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix}
$$
可以看到，X门将 $|0\rangle$ 与 $|1\rangle$ 反转，因此也称为bit-flip门；Z门则给 $|1\rangle$ 加一个负号，也称为phase-flip门。
Z将信号1反相，也有将其相位变换一个任意角度的相位门：
$$
R_\theta=\begin{pmatrix}
1&0\\
0&\mathrm{e}^{i\theta}
\end{pmatrix},\quad S=\begin{pmatrix}
1&0\\
0&i
\end{pmatrix}=R(\pi/2),\quad T=\begin{pmatrix}
1&0\\
0&\mathrm{e}^{i\pi/4}
\end{pmatrix}=R(\pi/4),\quad Z=R(\pi)
$$
此外，Hadamard门也是重要的，其为X本征基与Z本征基间的变换矩阵：
$$
H=\dfrac 1{\sqrt 2}\begin{pmatrix}
1&1\\
1&-1
\end{pmatrix}
$$
其效果为：
$$
H|0\rangle=|+\rangle=\dfrac{|0\rangle+|1\rangle}{\sqrt 2},\quad H|1\rangle=|-\rangle=\dfrac{|0\rangle-|1\rangle}{\sqrt 2}
$$
还可定义绕任意轴的旋转算符。
$$
R_{\hat n}(\theta)=\cos\dfrac{\theta}{2}I-i\sin\dfrac{\theta}{2}(\vec\sigma\cdot\hat n)
$$
事实上，任意单比特的幺正算符都可以写为一个相位乘一个旋转（因为其就是Bloch球面的旋转）。当然，我们知道任意轴的旋转都可以由两根**固定轴**的旋转复合而成（欧拉角）。因此有下面的**旋转分解定理**：
假设 $\hat m,\hat n$ 是两个不平行的三维单位矢量，则任意单比特幺正门可以分解为：
$$
U=\mathrm{e}^{i\alpha}U_{\hat n}(\beta)U_{\hat m}(\gamma)U_{\hat n}(\delta)
$$
下面给出一个定理，会在后面构造控制-U门时用到。

> [!theorem]
> 对于任意的单比特幺正门 $U$，存在单比特要正算符 $A,B,C$，满足
> $$ABC=I,\quad U=\mathrm{e}^{i\alpha}AXBXC$$

证明方法是直接构造 $A,B,C$：
$$
ABC=\underbrace{R_z(\beta)R_y\left(\dfrac\gamma2\right)}_{A}\underbrace{R_y\left(-\dfrac\gamma2\right)R_z\left(-\dfrac{\delta+\beta}2\right)}_{B}\underbrace{R_z\left(\dfrac{\delta-\beta}{2}\right)}_{C}=I
$$
$$
AXBXC=R_z(\beta)R_y\left(\dfrac\gamma2\right)R_y\left(\dfrac\gamma2\right)R_z\left(\dfrac{\delta+\beta}2\right)R_z\left(\dfrac{\delta-\beta}{2}\right)=R_z(\beta)R_y(\gamma)R_z(\delta)
$$
再用旋转分解定理就得到 $U=\mathrm{e}^{i\alpha}AXBXC$。
### 双量子比特门

最重要的双比特门是**控制非(Controlled-NOT,CNOT)门**，其可以表述为：当control端的信号为1时，就翻转target端的信号，否则不改变target端的信号。如下图所示：

<div align="center">
  <img src="../pictures/Pasted image 20260430133703.png" width="400">
</div>

这里 $\oplus$ 是不进位和，即异或运算。CNOT的矩阵表示为：
$$
CNOT=\begin{pmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&0&1\\
0&0&1&0
\end{pmatrix}
$$
CNOT门是一个**纠缠门**，能将直积态变为纠缠态，例如：
$$
CNOT(\alpha|0\rangle+\beta|1\rangle)\otimes |0\rangle=\alpha|00\rangle+\beta|11\rangle
$$
CNOT是一个控制 $X$ 门，因为翻转qubit就是X算符的效果。一般的，可以考虑控制U门：

<div align="center">
  <img src="../pictures/Pasted image 20260430134212.png" width="400">
</div>

利用 $U=\mathrm{e}^{i\alpha}AXBXC$ 的分解，我们可以将这个控制U门等效为CNOT门与单比特门的组合：

<div align="center">
  <img src="../pictures/Pasted image 20260430134528.png" width="400">
</div>

### Toffoli门

Toffoli门又称控制-控制非门，这是一个三比特门：

<div align="center">
  <img src="../pictures/Pasted image 20260430134831.png" width="600">
</div>

Toffolo门可以分解为Hadamard,T,CNOT门的组合。
此外，对于一般的 $C^n(U)$ 控制门（$n$ 个控制端，一个target端）:
$$
C^n(U)|x_1\cdots x_n\rangle|\psi\rangle=|x_1\cdots x_n\rangle U^{x_1\cdots x_n}|\psi\rangle
$$
其也可以通过Toffoli门与一些辅助qubits构造：

<div align="center">
  <img src="../pictures/Pasted image 20260430135740.png" width="600">
</div>

下面给出将这些常用量子门输入mathematica的代码：

```mathematica
Clear["Global`*"]

(*basis states*)ket0 = {1, 0};
ket1 = {0, 1};

(*X basis*)
Xket0 := (ket0 + ket1)/Sqrt[2]
Xket1 := (ket0 - ket1)/Sqrt[2]

(*gates*)
X = {{0, 1}, {1, 0}};
Y = {{0, -I}, {I, 0}};
Z = {{1, 0}, {0, -1}};
H = (1/Sqrt[2]) {{1, 1}, {1, -1}};
S = {{1, 0}, {0, I}};
T = {{1, 0}, {0, Exp[I*Pi/4]}};
Id2 = IdentityMatrix[2];
P0 = {{1, 0}, {0, 0}};
P1 = {{0, 0}, {0, 1}};

(*rotation gates*)
Rx[theta_] := MatrixExp[-I*theta/2*X];
Ry[theta_] := MatrixExp[-I*theta/2*Y];
Rz[theta_] := MatrixExp[-I*theta/2*Z];

(*two qubits*)
ket00 = KroneckerProduct[ket0, ket0];
ket01 = KroneckerProduct[ket0, ket1];
ket10 = KroneckerProduct[ket1, ket0];
ket11 = KroneckerProduct[ket1, ket1];
HI = KroneckerProduct[H, Id2];
IH = KroneckerProduct[Id2, H];
H2 = KroneckerProduct[H, H];

(*controlled gates*)
CNOT = {{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 0, 1}, {0, 0, 1, 0}};
CZ = {{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, -1}};

Toffoli = {{1, 0, 0, 0, 0, 0, 0, 0}, {0, 1, 0, 0, 0, 0, 0, 0}, {0, 0, 
    1, 0, 0, 0, 0, 0}, {0, 0, 0, 1, 0, 0, 0, 0}, {0, 0, 0, 0, 1, 0, 0,
     0}, {0, 0, 0, 0, 0, 1, 0, 0}, {0, 0, 0, 0, 0, 0, 0, 1}, {0, 0, 0,
     0, 0, 0, 1, 0}};
CSWAP = {{1, 0, 0, 0, 0, 0, 0, 0}, {0, 1, 0, 0, 0, 0, 0, 0}, {0, 0, 1,
     0, 0, 0, 0, 0}, {0, 0, 0, 1, 0, 0, 0, 0}, {0, 0, 0, 0, 1, 0, 0, 
    0}, {0, 0, 0, 0, 0, 0, 1, 0}, {0, 0, 0, 0, 0, 1, 0, 0}, {0, 0, 0, 
    0, 0, 0, 0, 1}};

```
## 量子态传输与测量原理

接下来来看一个简单的应用，如何将一个量子态由A地传递至B地？更准确的说，在A地有一个qubit，其处于某一未知量子态 $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$，如何使得B地的qubit同样处于该状态？

### 不可克隆原理

首先需要说明的一点是，制备B地处于 $|\psi\rangle$ 态的qubit一定会破坏掉A地的qubit状态，这是由于量子力学的不可克隆原理保证的。为说明这一点，假设存在某一线路，可以将一个（未知的）qubit的状态复制到另一qubit上且不破坏原qubit。这等价于存在一个幺正变换 $U_{copy}$，使得对于任意的 $|\psi\rangle$ 有
$$
U_{copy}|\psi\rangle|a\rangle=|\psi\rangle|\psi\rangle
$$
则自然要求
$$
U|0\rangle|a\rangle=|0\rangle|0\rangle,\quad U|1\rangle|a\rangle=|1\rangle|1\rangle
$$
此时，对于一般的 $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$，线性原理给出
$$
U|\psi\rangle|a\rangle=\alpha|0\rangle|0\rangle+\beta|1\rangle|1\rangle\ne|\psi\rangle|\psi\rangle
$$
因此不存在满足条件的 $U_{copy}$ 。也就是说，我们不可能“复制”未知量子态，而只能“传输”量子态。

### Bell态

传输量子态的过程需要用到其纠缠的性质。我们先介绍实现纠缠的**Bell态**。Bell基是一组由纠缠态构成的基，用Hadamard门与CNOT门就能制备它：

<div align="center">
  <img src="../pictures/Pasted image 20260430140140.png" width="600">
</div>

### 传输的量子线路

A地肯定不能无法通过直接测量得到 $|\psi\rangle$ 的系数 $\alpha,\beta$，因为例如测量 $Z$ 会使其坍缩至 $|0\rangle$ 或 $|1\rangle$。但是，我们仍能在不知道这个态的情况下对其进行传输。
我们采用下面的线路进行传输：

<div align="center">
  <img src="../pictures/Pasted image 20260430153655.png" width="600">
</div>

其中我们预先制备好一组Bell态 $\dfrac{|00\rangle+|11\rangle}{\sqrt 2}$，将纠缠的两个qubit分别送往A地和B地。初始态写为：
$$
|\psi_0\rangle=|\psi\rangle|\text{Bell}\rangle=\dfrac{1}{\sqrt 2}[\alpha|0\rangle(|00\rangle+|11\rangle)+\beta|1\rangle(|00\rangle+|11\rangle)]
$$
现在，处在A地可以对 $|\psi\rangle$ 与Bell态的第一个qubit执行CNOT操作，使得其发生纠缠，此时
$$
|\psi_1\rangle=\dfrac{1}{\sqrt 2}[\alpha|0\rangle(|00\rangle+|11\rangle)+\beta|1\rangle(|01\rangle+|10\rangle)]
$$
接下来执行一个Hadamard门操作，有
$$
\begin{align}
|\psi_2\rangle&=\dfrac{1}{2}[\alpha(|0\rangle+|1\rangle)(|00\rangle+|11\rangle)+\beta(|0\rangle-|1\rangle)(|01\rangle+|10\rangle)]\\&=\dfrac12[|00\rangle(\alpha|0\rangle+\beta|1\rangle)+|01\rangle(\alpha|1\rangle+\beta|0\rangle)+|10\rangle(\alpha|0\rangle-\beta|1\rangle)+|11\rangle(\alpha|1\rangle-\beta|0\rangle)]
\end{align}
$$
现在，由于 $\alpha,\beta$ 的信息被完全转移到第三个qubit上（也就是在B地的qubit上），A地可以放心对其两个qubit进行测量，这将有四种可能($00,01,10,11$)。对于这四种可能，B地的qubit会坍缩的四种不同的状态上，即：
$$
00\to \alpha|0\rangle+\beta|1\rangle,\quad01\to \alpha|1\rangle+\beta|0\rangle,\quad 10\to \alpha|0\rangle-\beta|1\rangle,\quad 11\to \alpha|1\rangle-\beta|0\rangle
$$
此时，A地可以将测量结果通过经典传输给B地，B地根据A的的结果对其qubit做量子门操作，例如当结果为 $10$ 时就作用一个Z算符：
$$
\alpha|0\rangle-\beta|1\rangle\xrightarrow{Z}\alpha|0\rangle+\beta|1\rangle=|\psi\rangle
$$
一般地说，当第一个qubit为1时就执行一个Z门，当第二个qubit为1时就执行一个X门。这样，B地的qubit就成功变成了 $|\psi\rangle$ 状态。
可以发现，唯一的A，B地间的传输发生在通过经典信道传输A地的测量结果，其无法超光速，因此量子态的传输速度同样被限制在光速以内。而如果这个测量结果在传输过程中被窃取，这其实是无所谓的，因为第三个qubit一直处在B地，因此该量子态的信息不会被泄露。也就是说，这样的传输是安全的。
### 推迟测量原理

前面的线路通过测量部分qubits，由测量结果来决定对其余qubits的门操作。这样的经典步骤总可以完全换为量子的。有下面的推迟测量原理：
- 测量后的经典条件控制，总能由量子的Controlled-U门代替。
- 在量子线路中间某步骤的测量，总能由变换移动至量子线路的末端。
也就是说，量子传输线路可以变换为：

<div align="center">
  <img src="../pictures/Pasted image 20260430160000.png" width="800">
</div>

通过控制门后，可以将纠缠态变回直积态：
$$
|\psi'\rangle=\dfrac12(|00\rangle+|01\rangle+|10\rangle+|11\rangle)(\alpha|0\rangle+\beta|1\rangle)=Qubits_{1-2}\otimes|\psi\rangle
$$
当然，这不意味着信息传播超光速。实际上，构造两地间的瞬时控制门是不可能的，两个控制门的操作时间仍受信息传递速度的限制。
### 等价测量原理

在一些时候，我们希望制备某一测量算符 $U$ 的本征态（先假设 $U$ 既是幺正又是厄米的，因此 $U^2=UU^\dagger=I$ ）。但是如果直接对qubit作用 $U$ 算符可能导致该qubit直接被**破坏**（而不是塌缩）。为避免这种事情发生，我们可以采用下面的线路：

<div align="center">
  <img src="../pictures/Pasted image 20260430160714.png" width="500">
</div>

引入一个制备在 $|0\rangle$ 态的辅助qubit。容易计算得到，上面线路的末态为：
$$
\dfrac{|0\rangle}{2}(|\psi_{in}\rangle+U|\psi_{in}\rangle)+\dfrac{|1\rangle}{2}(|\psi_{in}\rangle-U|\psi_{in}\rangle)
$$
此时对辅助qubit进行测量，则下面的qubits将坍缩到状态：
$$
|\psi_{out}\rangle=\dfrac{|\psi_{in}\rangle\pm U|\psi_{in}\rangle}{\sqrt 2}
$$
这就是算符 $U$ 的本征值 $\pm 1$ 的本征态。同时，由于我们没有直接对第二部分qubits测量，因此不会破坏它。

## 通用量子计算

通用量子计算是指用一组有限基础量子门集，实现Hilbert空间中任意n qubits幺正变换 $U$ 的能力。其分为两种：
- **精确通用性**：例如，任意n比特幺正变换可以由单比特门与CNOT门组合而成。
- **近似通用性**：实际计算中一般使用离散门集，例如 $\{H,T,CNOT\}$，其可以以任意精度 $\epsilon>0$ 逼近目标变换。


---
