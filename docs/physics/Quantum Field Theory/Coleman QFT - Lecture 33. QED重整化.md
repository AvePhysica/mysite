---
title: "Coleman QFT Lecture 33: QED重整化"
---

在上一章[Coleman QFT - Lecture 32. 生成泛函与Green函数](./Coleman%20QFT%20-%20Lecture%2032.%20%E7%94%9F%E6%88%90%E6%B3%9B%E5%87%BD%E4%B8%8EGreen%E5%87%BD%E6%95%B0.md)中，我们得到了Ward identity：
$$
\delta\Gamma[\bar\phi]=\delta S_{GF}[\bar\phi]
$$
其将帮助我们完成对QED的重整化程序，因为它将保证所有的抵消项都可以取为规范不变的。接下来将在BPHZ程序中证明这一点。
## 33.1 抵消项与规范不变性

证明将采用归纳法，由五步完成。BPHZ程序可参见[Coleman QFT - Lecture 25. 处理无限大：正规化与重整化](./Coleman%20QFT%20-%20Lecture%2025.%20%E5%A4%84%E7%90%86%E6%97%A0%E9%99%90%E5%A4%A7%EF%BC%9A%E6%AD%A3%E8%A7%84%E5%8C%96%E4%B8%8E%E9%87%8D%E6%95%B4%E5%8C%96.md)。
1. 我们假设只需引入规范不变的抵消项，就能使理论到 $O(e^{n})$ 阶保持有限。接下来希望证明规范不变的抵消项也可以使理论到 $O(e^{n+1})$ 阶保持有限。当然，首先对于 $O(e^0)$ 阶是成立的，因为其对应于自由理论，无需引入任何抵消项。
2. BPHZ程序告诉我们，对于已经到 $O(e^n)$ 阶有限的理论，$O(e^{n+1})$ 阶的发散可以通过向作用量中引入抵消项消除：
$$
S[\Phi']\to S[\Phi']+e^{n+1}S_{CT}^{(n+1)}[\Phi']
$$
$S_{CT}$ 是依赖于截断的抵消项，若理论是可以重整化的，则 $S_{CT}$ 的维度应当不超过4。
3. 此时，我们来思考有效作用量 $\Gamma[\bar\Phi]$ 会如何变。由于 $S_{CT}$ 自己就生成了一个 $O(e^{n+1})$ 阶的顶点，其自己自然会作为一个1PI图出现。此外，其也可以和其他的相互作用项组合形成其他的1PI图，但其阶数一定高于 $e^{n+1}$，因此
$$
\Gamma[\bar\Phi']\to \Gamma[\bar\Phi']+e^{n+1}S_{CT}^{(n+1)}[\bar\Phi']+O(e^{n+2})
$$
4. 现在，变换后的 $\Gamma$ 应当是有限的，不依赖于截断的。也就是说，原先 $\Gamma[\bar\Phi']$ 中的发散项就是 $-e^{n+1}S_{CT}^{(n+1)}[\bar\Phi']$。
$$
\Gamma_{div}[\bar\Phi']=-e^{n+1}S_{CT}^{(n+1)}[\bar\Phi']
$$
5. 现在考虑规范变换：
$$
\bar\Phi'\to \bar\Phi'+\delta\bar\Phi'
$$
由Ward恒等式，有
$$
\delta\Gamma_{\text{finite}}-e^{n+1}\delta S_{CT}^{(n+1)}=\delta S_{GF}
$$
其中只有 $\delta S_{CT}^{(n+1)}$ 是依赖于截断的发散项，因此必然要求 $\delta S_{CT}=0$ ，也就是说抵消项是规范不变的。这样就说明了到 $O(e^{n+1})$ 阶需要的抵消项都是**规范不变的**。也就是说，$\delta\Gamma$ 必须等于不会发散的 $\delta S_{GF}$，因此其中的发散项（对应于抵消项）必然是不变的。
## 33.2 有质量光子QED的抵消项

对于旋量QED，BPHZ程序将给出重整化后的Lagrangian为：
$$
\mathcal L=-\dfrac14(F_{\mu\nu}')^2[1+A]+\bar\psi'(i\partial\mkern-9mu/-eA\mkern-9mu/')\psi'[1+B]-\bar\psi'\psi'[m+C]+\dfrac12\mu^2A_\lambda'A'^{\lambda}-\dfrac{1}{2\xi}(\partial_\lambda A'^{\lambda})^2
$$
前三项是规范不变的，因此抵消项只加在这三项上。另一方面，裸参数给出的未重整化Lagrangian为：
$$
\mathcal L=-\dfrac14(F_{\mu\nu})^2+\bar\psi(i\partial\mkern-9mu/-e_0A\mkern-9mu/-m_0)\psi+\dfrac12\mu^2A_\lambda A^{\lambda}-\dfrac{1}{2\xi_0}(\partial_\lambda A^{\lambda})^2
$$
场的重整化为：
$$
\psi=Z_2^{1/2}\psi',\quad A_\mu=Z_3^{1/2}A_\mu'
$$
$Z_i$ 称为**重整化常数**。当我们改变 $\xi$ 的取值时，由于 $A_\mu$ 是可观测量而 $\psi,\bar\psi$ 并不是，预计 $Z_2$ 会依赖于 $\xi$，而剩下的 $Z_3,m_0,\mu_0,e_0$ 都应该是 $\xi$ 无关的。现在，我们通过比较Lagrangian的两种形式，得到裸参数与物理参数与抵消项的关系：

<div align="center">
  <img src="./pictures/Pasted image 20260508194754.png" width="600">
</div>


关系 $\mu=Z_3^{1/3}\mu_0$ 说明了除非 $Z_3$ 存在极点，否则重整化不会改变光子的无质量性。
关系 $e=Z_3^{1/2}e_0$ 说明了**电荷重整化的普适性**。由于 $Z_3$ 来源于光子场的重整化，而与具体哪个费米场无关，因此不同的带电粒子有相同的裸电荷与物理电荷比例。我们可以将 $Z_3$ 视为某种屏蔽效应，由于**真空极化**，其会屏蔽电荷。从这一点我们也可以看出 $Z_3<1,\,e<e_0$。

对于标量QED，多出的一项规范不变项是：
$$
\mathcal L''=-\dfrac{1}{4!}\lambda_0(\phi^*\phi)^2
$$
来保证理论可重整化。也就是说，裸参数写出Lagrangian为：
$$
\mathcal L=-\dfrac14 F_{\mu\nu}F^{\mu\nu}+(\partial_\mu\phi^*)(\partial_\mu\phi)-\mu_0^2\phi^*\phi-ie_0[\phi^*\partial_\mu\phi-(\partial_\mu\phi^*)\phi]A^\mu+e_0^2\phi^*\phi A_\mu A^\mu-\dfrac{1}{4!}\lambda_0(\phi^*\phi)^2
$$
剩下的部分是类似的。最后一项是由于存在四条介子外腿的发散图，例如：

<div align="center">
  <img src="./pictures/Pasted image 20260508200357.png" width="600">
</div>

因此需要额外的一项来使这类图被抵消。
## 33.3 规范不变的截断

我们要求截断也是规范不变的，这样生成形式上规范不变的反项。我们将讨论[Coleman QFT - Lecture 25. 处理无限大：正规化与重整化](./Coleman%20QFT%20-%20Lecture%2025.%20%E5%A4%84%E7%90%86%E6%97%A0%E9%99%90%E5%A4%A7%EF%BC%9A%E6%AD%A3%E8%A7%84%E5%8C%96%E4%B8%8E%E9%87%8D%E6%95%B4%E5%8C%96.md)中的两种正规化手段。
### 维数正规化

我们曾经的得到过下面积分的结果：
$$
\int\dfrac{\mathrm{d}^nk}{(k^2+a^2)^\alpha}=\dfrac{\pi^{n/2}}{a^{2\alpha-n}}\dfrac{\Gamma(\alpha-n/2)}{\Gamma(\alpha)}
$$
对于 $n=4$ 与 $\alpha=2$，积分是对数发散的。我们取
$$
n=4-\epsilon
$$
则有下面的Gamma函数展开：
$$
\Gamma(2-n/2)=\Gamma(\epsilon/2)=\dfrac{2}{\epsilon}-\gamma+O(\epsilon),\quad \Gamma(1-n/2)=\gamma-1-\dfrac{2}{\epsilon}
$$
Gamma函数 $\Gamma(\alpha-n/2)$ 通过延拓，仅在 $n=2\alpha,2\alpha+2,2\alpha+4\cdots$ 上存在极点，我们直接对这些极点处理，使得重整化后对于任意的 $n$ 都有意义。这种保持规范不变形式的延拓是唯一的，规范不变性不依赖于时空的维度。一般来说，我们需要将所有事物写为依赖于 $n$ 的形式，最后再取 $n\to4$。度规张量为：
$$
g_{\mu\nu}=\mathrm{diag}(1,-1,-1,\cdots),\quad g^\mu_\mu=\mathrm{Tr}(g)=n
$$
通过Clifford代数构造Dirac矩阵：
$$
\{\gamma_\mu,\gamma_\nu\}=2\delta_{\mu\nu},\quad\mu,\nu=1,2,\cdots, n,\quad \gamma_\mu=\gamma_\mu^\dagger
$$
一些技术细节这里就不展开了。
### 正规场

Pauli-Villars正规化通过引入大质量辅助场来消除发散，其等价于向Lagrangian中加入一个辅助场 $\phi_1$：
$$
\mathcal L_0(\phi)+\mathcal L'(\phi)\to \mathcal L_0(\phi)+\mathcal L_0(\phi_1)+\mathcal L'(\phi+i\phi_1)
$$
传播子变为：
$$
\dfrac{1}{k^2-\mu^2}\to \dfrac{1}{k^2-\mu^2}-\dfrac{1}{k^2-M^2}
$$
我们可以对光子场做相同的操作：
$$
\mathcal L_I=\bar\psi(i\partial\mkern-9mu/-eA\mkern-9mu/-m)\psi\to \bar\psi(i\partial\mkern-9mu/-e\left(A\mkern-9mu/+\sum_r c_rA\mkern-9mu/^{(r)}-m_0\right)\psi
$$
其在下面的规范变换下仍不变：
$$
\psi\to \mathrm{e}^{-ie\chi}\psi,\quad A_\mu\to A_\mu+\partial_\mu\chi\quad A_\mu^{(r)}\to A_\mu^{(r)} 
$$
然而，由于理论中存在由Fermi loop造成的发散，例如真空极化：

<div align="center">
  <img src="./pictures/Pasted image 20260508212551.png" width="400">
</div>

如果我们尝试将Pauli-Villars正规化运用在费米场上，就会遇到问题。因为
$$
\bar\psi\gamma_\mu\psi\to(\bar\psi-i\bar\psi_1)\gamma_\mu(\psi+i\psi_1)
$$
则我们会破坏规范不变性，而且还破坏了守恒流：
$$
\partial^\mu[\bar\psi\gamma_\mu\psi_1-\bar\psi_1\gamma_\mu\psi]=(m_1-m)[\bar\psi\psi_1+\bar\psi_1\psi]
$$
Pauli和Villars提出了解决办法：其通过引入多个抵消场，巧妙安排其系数使得能在保证规范不变性与流守恒下抵消发散项。引入三个辅助场：
$$
\bar\psi\gamma_\mu\psi\to\bar\psi\gamma_\mu\psi+\sum_{i=1}^3c_i\bar\psi_i\gamma_\mu\psi_i
$$
假设：$\psi_1,\psi_3$ 服从Bose统计（属于非物理性的鬼场），而 $\psi_2$ 服从Fermi统计。这样，对于上面的真空极化图，有
$$
\sum_{r=0}^{3}\int\mathrm{d}^4k\dfrac{1}{k^2-m_r^2+a}
$$
$a$ 是一个依赖于外动量的函数，以及 $m_0=m$。注意到Fermi场积分要加负号，将上式按 $k$ 的负幂次展开，我们得到发散项的形式为：
$$
\int\dfrac{\mathrm{d}^4k}{k^2}(1-1+1-1)-\int\dfrac{\mathrm{d}^4k}{k^4}\,a(1-1+1-1)+\int\dfrac{\mathrm{d}^4k}{k^4}(m^2-m_1^2+m_2^2-m_3^2)+(\text{converge terms})
$$
通过合理选择 $m_r$ ，可以消除上面的发散项。
## 33.4 Ward恒等式与Green函数

我们来看光子有质量的旋量电动力学：
$$
\mathcal L=-\dfrac14(\partial_\mu A_\nu-\partial_\nu A_\mu)^2+\bar\psi(i\partial\mkern-9mu/-eA\mkern-9mu/-m)\psi-\dfrac{1}{2\xi}(\partial_\mu A^\mu)^2+\dfrac12\mu^2A_\mu A^\mu
$$
将会用到无穷小的规范变换：
$$
\delta A_\mu=\partial_\mu \delta\chi,\quad \delta\psi=-ie\psi\delta\chi,\quad \delta\bar\psi=ie\bar\psi\delta\chi
$$
我将用记号 $\Gamma^{(n,n,m)}$ 代表有 $n$ 条 $\psi$ ，$n$ 条 $\bar\psi$ 以及 $m$ 条 $A_\mu$ 外腿的1PI Green函数。当其涉及到 $A_\mu$ 时，还会依赖于其指标。
当 $n=0,m=2$ 时，其将联系到光子传播子。由
$$
\tilde D_{\mu\nu}(k)=-\dfrac{i}{k^2-\mu^2}\left[g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2}\right]-\dfrac{i}{k^2/\xi-\mu^2}\left[\dfrac{k_\mu k_\nu}{k^2}\right]+O(e)
$$
因此
$$
\tilde \Gamma^{(0,0,2)}_{\mu\nu}(k)\bigg|_{e=0}=-(k^2-\mu^2)\left[g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2}\right]-(k^2/\xi-\mu^2)\left[\dfrac{k_\mu k_\nu}{k^2}\right]
$$
我们想要研究 $\tilde \Gamma^{(0,0,2)}_{\mu\nu}(k)$ 对 $e$ 的依赖关系。来看 $\Gamma$ 中与之有关的一项：
$$
\Gamma=\dfrac{1}{2!}\int\mathrm{d}^4x\mathrm{d}^4y\,A^\mu(x)A^\nu(y)\Gamma_{\mu\nu}^{(0,0,2)}(x,y)+\cdots
$$
这一项仅涉及到 $A_\mu$ ，因此在规范变换下不依赖于 $e$，由
$$
A_\mu\to A_\mu+\partial_\mu\chi\Rightarrow \delta\Gamma=-\int\mathrm{d}^4x\mathrm{d}^4y\,(\partial_x^\mu\,\Gamma_{\mu\nu}^{(0,0,2)}(x,y))A^\nu(y)\delta\chi(x)+\cdots
$$
因此我们得到结论：
$$
\partial_x^\mu\,\Gamma_{\mu\nu}^{(0,0,2)}(x,y)=\partial_x^\mu\,\Gamma_{\mu\nu}^{(0,0,2)}(x,y)\bigg|_{e=0}\Rightarrow k^\mu\,\tilde\Gamma_{\mu\nu}^{(0,0,2)}(x,y)=k^\mu\,\tilde\Gamma_{\mu\nu}^{(0,0,2)}(x,y)\bigg|_{e=0}
$$
也就是说 $k^\mu\,\tilde\Gamma_{\mu\nu}^{(0,0,2)}(x,y)$ 与 $e$ 的取值无关，其只有严格的零阶量。
现在，我们知道光子的传播子应该也是被1PI图修正，而这两者都能分解为纵向与横向部分：
$$
\tilde D_{\mu\nu}'=\tilde D^TP_{\mu\nu}^T+\tilde D^LP_{\mu\nu}^L,\quad \tilde \Pi_{\mu\nu}'=\tilde \Pi^TP_{\mu\nu}^T+\tilde \Pi^LP_{\mu\nu}^L
$$
利用

<div align="center">
  <img src="./pictures/Pasted image 20260509223552.png" width="700">
</div>

得到
$$
\tilde D'_{\mu\nu}=-\dfrac{i}{k^2-\mu^2-\tilde \Pi^T}\left[g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2}\right]-\dfrac{i}{k^2/\xi-\mu^2-\tilde \Pi^L}\left[\dfrac{k_\mu k_\nu}{k^2}\right]
$$
$$
\tilde \Gamma_{\mu\nu}^{(0,0,2)}(k)=-(k^2-\mu^2-\tilde \Pi^T)\left[g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2}\right]-{(k^2/\xi-\mu^2-\tilde \Pi^L)}\left[\dfrac{k_\mu k_\nu}{k^2}\right]
$$
由于前面得到的
$$
k^\mu\,\tilde\Gamma_{\mu\nu}^{(0,0,2)}(x,y)=k^\mu\,\tilde\Gamma_{\mu\nu}^{(0,0,2)}(x,y)\bigg|_{e=0}
$$

其说明所有纵向的1PI图都只有零阶项。也就是说：
$$
\tilde \Pi^L(k^2)=0
$$
光子的两点1PI Green函数只有横向部分，同时由于光子是有质量的，因此其不应该存在 $k^2=0$ 的极点。因此：
$$
i\tilde\Pi_{\mu\nu}'(k^2)\propto\left[g_{\mu\nu}-\dfrac{k_\mu k_\nu}{k^2}\right]k^2
$$
接下来，我们来考虑另一个例子。考虑下面的三点1PI图：

<div align="center">
  <img src="./pictures/Pasted image 20260510101836.png" width="400">
</div>

与之有关的 $\Gamma$ 中的项为：
$$
\Gamma=\int\mathrm{d}^4x\,\mathrm{d}^4y\,\bar\psi(x)\psi(y)\Gamma^{(1,1,0)}(x,y)+\int\mathrm{d}^4x\,\mathrm{d}^4y\,\mathrm{d}^4z\,\bar\psi(x)\psi(y)A^\mu(z)\Gamma_\mu^{(1,1,1)}(x,y,z)+\cdots
$$
作用无穷小规范变换，由下面的公式：
$$
-ie\dfrac{\delta\Gamma}{\delta\psi(x)}\psi(x)+ie\dfrac{\delta\Gamma}{\delta\bar\psi(x)}\bar\psi(x)-\partial^\mu\dfrac{\delta\Gamma}{\delta A^\mu(x)}=-\left[\dfrac{1}{\xi}\square^2+\mu^2\right](\partial_\mu A^\mu)
$$
得知 $\delta\Gamma$ 与 $\bar\psi\psi$ 无关。因此
$$
0=\int\mathrm{d}^4x\,\mathrm{d}^4y\,\bar\psi(x)\psi(y)\left\{\Gamma^{(1,1,0)}(x,y)[ie\delta\chi(x)-ie\delta\chi(y)]+\int\mathrm{d}^4z\,(\partial^\mu\delta\chi(z))\Gamma_\mu^{(1,1,1)}(x,y,z)\right\}
$$
通过提取 $\bar\psi(x)\psi(y)\delta\chi(z)$ 的系数，得到：
$$
ie\Gamma^{(1,1,0)}(x,y)[\delta^{(4)}(x-z)-\delta^{(4)}(y-z)]=\partial_z^\mu\Gamma_\mu^{(1,1,1)}(x,y,z)\tag{*}
$$
这就将电子-光子顶点函数与电子传播子联系起来，上式称为Ward-Takahashi identity。上式的得出有另一种更为传统的方法：考虑守恒流
$$
j_\mu=\bar\psi\gamma^\mu\psi
$$
运动方程为：
$$
\partial^\mu F_{\mu\nu}+\mu^2_0A_\nu=j_\nu,\quad \partial^\mu j_\mu=0
$$
由正则对易关系可推出：
$$
[j_0(\vec x,t),\psi(\vec y,t)]=-\delta^{(3)}(\vec x-\vec y)\psi(\vec y,t),\quad [j_0(\vec x,t),\bar\psi(\vec y,t)]=\delta^{(3)}(\vec x-\vec y)\bar\psi(\vec y,t)
$$
则可推得下式：
$$
\partial_z^\mu\langle 0|T(j_\mu(z)\bar\psi(x)\psi(y))|0\rangle=[\delta^{(4)}(z-y)-\delta^{(4)}(z-x)]\langle 0|T(\bar\psi(x)\psi(y))|0\rangle
$$
这里推出的是完整Green函数版本的Ward-Takahashi identity。
再一次的，我们仍能从一般性的公式得到上面的结论。一般性的公式为：
$$
-ie\dfrac{\delta\Gamma}{\delta\psi(z)}\psi(z)+ie\dfrac{\delta\Gamma}{\delta\bar\psi(z)}\bar\psi(z)-\partial^\mu\dfrac{\delta\Gamma}{\delta A^\mu(z)}=-\left[\dfrac{1}{\xi}\square^2+\mu^2\right](\partial_\mu A^\mu)
$$
对 $\bar\psi(x),\psi(y)$ 求导，并将结果的所有场置为零，得到：
$$
ie\left[\delta^{(4)}(x-z)\dfrac{\delta^2\Gamma}{\delta\bar\psi(z)\delta\psi(y)}\bigg|_0+\delta^{(4)}(y-z)\dfrac{\delta^2\Gamma}{\delta\bar\psi(x)\delta\psi(z)}\bigg|_0\right]-\partial_z^\mu\dfrac{\delta^3\Gamma}{\delta\bar\psi(x)\delta\psi(y)\delta A^\mu(z)}\bigg|_0=0
$$
上式就是(\*)式。
(\*)可以Fourier变换到动量空间。记

<div align="center">
  <img src="./pictures/Pasted image 20260510104652.png" width="30%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20260510104706.png" width="30%" style="display: inline-block;">
</div>

并且假设动量守恒条件 $p'=p+k$，可以得到
$$
-ie[\tilde S_F^{-1}(p\mkern-9mu/')-\tilde S_F^{-1}(p\mkern-9mu/)]=k^\mu\tilde\Gamma_\mu(p',p,k)\tag{**}
$$
上式称为**original Ward identity**。我们可以在最低阶验证。有
$$
i\tilde S_F^{-1}(p\mkern-9mu/)=p\mkern-9mu/-m,\quad \tilde\Gamma_\mu(p',p,k)=-e\gamma_\mu
$$
代入发现其的确满足(\*\*)式。

我们可以对(\*\*)式在 $k_\mu=0$ 处求导，假设 $p$ 是固定的，则
$$
-ie\dfrac{\partial}{\partial p'^\mu}\tilde S_F^{-1}(p\mkern-9mu/')\bigg|_{p'=p}=\dfrac{\partial}{\partial k^\mu}(k^\mu\tilde\Gamma_\mu(p',p,k))\bigg|_{k=0}=\tilde\Gamma_\mu(p',p,0)
$$
也就是说，将一个极软光子（动量为零）注入电子线，等价于对电子传播子的倒数求导。
## 33.5 Ward恒等式与抵消项

可以使用(\*\*)式得到下面的结论：
$$
e_{\text{phys}}=e_{\text{BPHZ}}
$$
其中 $e_{\text{phys}}$ 就是由光子-电子顶点函数定义：
$$
i\bar u'\tilde\Gamma_\mu(p',p,k)u=-ie_{\text{phys}}\bar u'\gamma_\mu u
$$
其中 $p,p',k$ 都在质壳上：
$$
p^2=p'^2=m^2,\quad k^2=\mu^2,\quad (p\mkern-9mu/-m)u=(p\mkern-9mu/'-m)u'=0
$$
现在假设光子无质量，即 $\mu=0$。我们将 $\tilde S_F^{-1}(p\mkern-9mu/)$ 按 $(p\mkern-9mu/-m)$ 的幂次展开：
$$
\tilde S_F^{-1}(p\mkern-9mu/)=-i[(p\mkern-9mu/-m)+O((p\mkern-9mu/-m)^2)]
$$

Ward恒等式给出：
$$
ie_{\text{BPHZ}}^{-1}\tilde\Gamma_\mu(p',p,0)=\dfrac{\partial}{\partial p^\mu}\tilde S_F^{-1}(p\mkern-9mu/)=-i\gamma_\mu+O(p\mkern-9mu/-m)
$$
则
$$
ie_{\text{BPHZ}}^{-1}(\bar u'\tilde\Gamma_\mu(p',p,0)u)=ie_{\text{BPHZ}}^{-1}(-\bar u'\gamma_\mu u e_{\text{phys}})=-i\bar u'\gamma_\mu u
$$
上面用到了 $(p\mkern-9mu/-m)u=0$，因此
$$
e_{\text{phys}}=e_{\text{BPHZ}}=Z_3^{1/2}e_0
$$
但是，对于有质量光子，上面的结论并不成立。此时有
$$
e_{\text{phys}}=e_{\text{BPHZ}}+O(e_{\text{BPHZ}}^3)
$$
---


