---
title: "Coleman QFT Lecture 6: 对称性与守恒律 II：内部对称性"
---

>[!info]
>本章继续对对称性与守恒律的讨论。在上一章[[Coleman QFT - Lecture 5. 对称性与守恒律 I：时空对称性]]中，我们讨论了连续时空对称性，并得到了其对应的守恒流。而本章讨论的**内部对称性**是与时空对称性相对的，其不会涉及对时空坐标的变换，不相关不同时空点的场，而仅变换在**同一点**处的场。“内部”意味着“**非几何**”。

## 6.1 连续对称性

>[!example]
>**Ex.1 SO(2)对称性**：考虑一组自由标量场，其有相同的质量。最简单的情形是只有两个场：$a=\{1,2\}$。拉格朗日量密度为：
>$$\mathcal L=\dfrac12(\partial^\mu\phi^a\partial_\mu\phi^a-\mu^2\phi^a\phi^a)$$
>由于这是一个二次型 $\phi^a\phi^a=(\phi^1)^2+(\phi^2)^2$，其在二维旋转群 $SO(2)$ 下不变。具体来说，变换为：
>$$\phi^1\to\phi^1\cos\lambda+\phi^2\sin\lambda,\quad\phi^2\to\phi^2\cos\lambda-\phi^1\sin\lambda$$
>这也是一个单参连续变换。有
>$$D\phi^1=\phi^2,\quad D\phi^2=-\phi^1,\quad \pi_1^\mu=\partial^\mu\phi^1,\quad\pi_1^\mu=\partial^\mu\phi^2,\quad D\mathcal L=0$$
>故对应的守恒流为：
>$$ J^\mu=\pi_a^\mu D\phi^a-F^\mu=(\partial^\mu\phi^1)\phi^2-(\partial^\mu\phi^2)\phi^1$$
>验证其散度为零是简单的：
>$$\partial_\mu J^\mu=(\square^2\phi^1)\phi^2-(\square^2\phi^2)\phi^1=(\mu^2\phi^1)\phi^2-(\mu^2\phi^2)\phi^1=0$$
>使用了从Lagrangian推出来的EL方程（即KG方程）。这里便能看出两个场的质量相等是必须的。

我们接着上面的例子，来求其守恒量 $Q$：
$$
Q=\int\mathrm{d}^3\vec x\,[\dot\phi^1\phi^2-\dot\phi^2\phi^1]=i\int\mathrm{d}^3\vec p\,\left[a_{\vec p}^{(1)\dagger}a_{\vec p}^{(2)}-a_{\vec p}^{(2)\dagger}a_{\vec p}^{(1)}\right]
$$
我们暂且将 $Q$ 称为某种“电荷”。这是一个二次型，我们可以将其对角化。使用变换：
$$
\begin{cases}
b_{\vec p}=\dfrac{1}{\sqrt 2}\left(a_{\vec p}^{(1)}+ia_{\vec p}^{(2)}\right)\\
b_{\vec p}^\dagger=\dfrac{1}{\sqrt 2}\left(a_{\vec p}^{(1)\dagger}-ia_{\vec p}^{(2)\dagger}\right)
\end{cases}\;\qquad\begin{cases}
c_{\vec p}=\dfrac{1}{\sqrt 2}\left(a_{\vec p}^{(1)}-ia_{\vec p}^{(2)}\right)\\
c_{\vec p}^\dagger=\dfrac{1}{\sqrt 2}\left(a_{\vec p}^{(1)\dagger}+ia_{\vec p}^{(2)\dagger}\right)
\end{cases}
$$
可验证的是，其仍满足产生-湮灭算符的基本对易关系：
$$
\left[b_{\vec p},b^\dagger_{\vec p'}\right]=\left[c_{\vec p},c^\dagger_{\vec p'}\right]=\delta^{(3)}(\vec p-\vec p'),\quad \text{All other commutators equal zero.}
$$
因此我们可以称 $b_{\vec p}^\dagger$ 与$c_{\vec p}^\dagger$ 产生的粒子为 $B,C$，此时的 $Q$ 有对角的形式：
$$
Q=\int\mathrm{d}^3\vec p\,\left[b_{\vec p}^{\dagger}b_{\vec p}-c_{\vec p}^{\dagger}c_{\vec p}\right]=N_b-N_c
$$
即粒子 $B,C$ 是电荷 $Q$ 的本征态，$B$ 粒子携带电荷 $+1$，$C$ 粒子携带电荷 $-1$。
上面的讨论可以进一步继续。我们已经重定义了产生-湮灭算符，下一步我们可以重新将两个实标量场线性组合，得到两个共轭复标量场：
$$
\psi=\dfrac{1}{\sqrt 2}(\phi^1+i\phi^2),\quad \psi^*=\dfrac{1}{\sqrt 2}(\phi^1-i\phi^2)
$$
其展开式为：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}[b_{\vec p}\,\mathrm{e}^{-ip\cdot x}+c_{\vec p}^\dagger\,\mathrm{e}^{ip\cdot x}],\quad \psi^*(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}[c_{\vec p}\,\mathrm{e}^{-ip\cdot x}+b_{\vec p}^\dagger\,\mathrm{e}^{ip\cdot x}]
$$
可以看到， $\psi$ 生成一个 $C$ 或湮灭一个 $B$ ，总体效果均为将 $Q$ 减少1，而 $\psi^*$ 生成一个 $B$ 或湮灭一个 $C$ ，总体效果均为将 $Q$ 增加1。这一点也可由其与 $Q$ 的对易子看出：
$$
[Q,\psi]=-\psi,\quad [Q,\psi^*]=\psi^*
$$
$\psi,\psi^*$有一些奇特的性质。比如：其等时对易子为：
$$
[\psi(\vec x,t),\dot\psi^*(\vec y,t)]=[\psi^*(\vec x,t),\dot\psi(\vec y,t)]=i\delta^{(3)}(\vec x-\vec y)
$$
其也满足KG方程：
$$
(\square^2+\mu^2)\psi(x)=(\square^2+\mu^2)\psi^*(x)=0
$$
原先的拉格朗日量密度为：
$$
\mathcal L=(\partial_\mu\psi^*\partial^\mu\psi)-\mu^2\psi^*\psi
$$
现在，我们将 $\psi^*,\psi$ 视为两个独立的场。对 $\psi^*$ 变分得到：
$$
\dfrac{\partial\mathcal L}{\partial\psi^*}-\partial_\mu\left(\dfrac{\partial\mathcal L}{\partial(\partial_\mu\psi^*)}\right)=-(\square^2+\mu^2)\psi=0
$$
同样的，对 $\psi$ 变分也能得到 $\psi^*$ 满足的KG方程。

最后，来看看原先的 $SO(2)$ 对称性现在对应什么变换。原先的变换为：
$$\phi^1\to\phi^1\cos\lambda+\phi^2\sin\lambda,\quad\phi^2\to\phi^2\cos\lambda-\phi^1\sin\lambda$$
其对应于 $\psi,\psi^*$ 的变换为：
$$
\psi\to\mathrm{e}^{-i\lambda}\,\psi,\quad \psi^*\to\mathrm{e}^{i\lambda}\,\psi^*
$$
即复平面上的旋转。从这里可以看出 $U(1)$ 与 $SO(2)$ 是同构的。在无穷小变换下：
$$
D\psi=-i\psi,\quad D\psi^*=i\psi^*
$$
则守恒流为：
$$
J^\mu=-i(\partial^\mu\psi^*)\psi+i(\partial^\mu\psi)\psi^*,\quad \partial_\mu J^\mu=0
$$
验证同样是通过 $\psi,\psi^*$ 满足的KG方程完成的。

>[!hint]
>为什么我们在变分时可以将 $\psi,\psi^*$ 视为独立的场？它们明明应该互为复共轭嘛。
>为回答这一点，我们直接考虑一个一般的Lagrangian：
>$$\mathcal L=\mathcal L(\psi,\psi^*,\partial_\mu\psi,\partial_\mu\psi^*)$$
>作用量当然要是实的。对作用量的变分一定具有下面的形式：
>$$\delta S=\int\mathrm{d}^4x\,(A\delta\psi+A^*\delta\psi^*)=0$$
>一方面，取 $\delta\psi$ 为实，则 $\delta\psi=\delta\psi^*$ ，因此 $A=A^*$。
>另一方面，还可以取 $\delta\psi$ 为纯虚，则 $\delta\psi=-\delta\psi^*$ ，因此 $A=-A^*$。
>综合一下，就得到了 $A=A^*=0$ 的结论。这与我们在一开始时将 $\delta\psi,\delta\psi^*$ 视为**独立**得到的结果是相同的。


>[!example]
>**Ex.2**：回到我们一开始的Lagrangian：
>$$\mathcal L=\dfrac12(\partial^\mu\phi^a\partial_\mu\phi^a-\mu^2\phi^a\phi^a)$$
>但现在的 $a=1,2,\cdots,n$ ，因此其有 $SO(n)$ 对称性。其将对应于 $\dfrac12n(n-1)$ 个守恒流：
>$$J_\mu^{[ab]}=(\partial_\mu\psi^a)\psi^b-(\partial_\mu\psi^b)\psi^a=-J_\mu^{[ba]}$$
>现在我不太可能将所有对应的守恒量 $Q^{[ij]}$ 全部同时对角化，因为其对应的变换彼此不对易。但是，我们可以对角化其中的一部分。 比如：对 $n=3$，可以引入场：
>$$\psi=\dfrac{1}{\sqrt 2}(\phi^1+i\phi^2),\quad \psi^*=\dfrac{1}{\sqrt 2}(\phi^1-i\phi^2),\quad \phi_3=\phi_0$$
>则 $\psi,\psi^*,\phi_0$ 对 $Q_{12}$ 的作用为 $-1,+1$ 以及不变。

## 6.2 电荷的洛伦兹不变性

本节来补充一个点：守恒流 $J^\mu$ 在Lagrangian为Lorentz标量时显然是一个四矢量。那么，其对应的守恒量
$$
Q=\int\mathrm{d}^3\vec x\,J^0
$$
在Lorentz变换下如何变呢？我们的感觉来源于电动力学，电动课上会告诉我们，电荷是一个**Lorentz标量**。当然我们会猜想 $Q$ 也是一个Lorentz标量。因此，要证明的就是：

>[!theorem]
>对于一个Lorentz四矢量守恒流 $J^\mu$ ，其 $0$ 分量在全空间的积分 $Q=\int\mathrm{d}^3\vec x\,J^0$ 是一个Lorentz标量。

**Proof**：这个积分式中出现的是不好变换的 $\mathrm d^3\vec x$ 与 $J^0$，而比较好变换的是 $\mathrm{d}^4 x$ 与 $J^\mu$。我们先将其转化为这种形式：
$$
Q=\int\mathrm{d}^4x\,\delta(n\cdot x)\,(n\cdot J),\quad n=(1,0,0,0)
$$
现在做Lorentz变换。在变换 $\Lambda$ 下：
$$
J(x')\to J'(x')=\Lambda J(\Lambda^{-1}x)
$$
则
$$
Q'=\int\mathrm{d}^4x\,\delta(n\cdot x)\,(n\cdot \Lambda J(\Lambda^{-1}x))
$$
换元 $n=\Lambda n',\,x=\Lambda x'$，则
$$
Q'=\int\mathrm{d}^4x'\,\delta(n'\cdot x')\,(n'\cdot J(x'))=\int\mathrm{d}^4x\,\partial_\mu\theta(n'\cdot x)\,J^\mu(x)
$$
因此
$$
Q-Q'=\int\mathrm{d}^4x\,(\partial_\mu\theta(n'\cdot x)-\partial_\mu\theta(n\cdot x))\,J^\mu(x)
$$
利用分部积分：
$$
Q-Q'=-\int\mathrm{d}^4x[\theta(n\cdot x)-\theta(n'\cdot x)]\partial_\mu J^\mu(x)+\int\mathrm{d}S_{\mu}[\theta(n\cdot x)-\theta(n'\cdot x)]J^{\mu}(x)
$$
第二项为边界项。对于任意固定的 $\vec x$ ，$n\cdot x,n'\cdot x$ 在 $t\to\infty$ 时均大于零，而在 $t\to-\infty$ 时均小于零。因此第二项对于无限大的边界积分为零。具体如下图所示：
<div align="center">
  <img src="./pictures/Pasted image 20251123232930.png" width="500">
</div>

第一项由于 $\partial_\mu J^\mu=0$ 故为零。综上，$Q$ 是Lorentz不变量。

这一结论可以从积分的形式直接看出来，$Q$ 即为 $J^\mu$ 在等时超曲面上的第二型积分，即：
$$
Q=\int_{\Sigma_t}\mathrm{d}\Sigma_\mu J^\mu,\quad n_\mu=(1,0,0,0)
$$
Lorentz变换后的积分面由等时面 $t=0$ 变换至另一等时面 $t'=0$，其与无穷远的空间边界共同围住一四维体积 $V$，利用Gauss定理有：
$$
0=\int\mathrm{d}^4x\,\partial_\mu J^\mu(x)=\int_{\Sigma_t}\mathrm{d}\Sigma_\mu J^\mu-\int_{\Sigma_{t'}}\mathrm{d}\Sigma'_\mu J^\mu-\int_{S_{\infty}}\mathrm{d}\Sigma_\mu J^\mu
$$
无穷远处 $J^\mu=0$，故
$$
\int_{\Sigma_t}\mathrm{d}\Sigma_\mu J^\mu=\int_{\Sigma_{t'}}\mathrm{d}\Sigma'_\mu J^\mu\Rightarrow Q'=Q
$$
## 6.3 分立对称性

前面讨论的都是连续对称性，因此有对应的守恒流与守恒荷。现在我们来讨论另一类同样重要的对称性：**分立对称性**。其同样为一种变换：
$$
\phi(x)\to \phi'(x)
$$
但此时没有变换参数。对称性要求拉格朗日量密度是协变的，即作用量不变：
$$
\int\mathrm{d}^4x\,\mathcal L(\phi,\partial^\mu\phi)=\int\mathrm{d}^4x\,\mathcal L(\phi',\partial^\mu\phi')
$$
### 电荷共轭(charge conjugate)

回到我们一开始具有 $SO(2)$ 对称性的系统：
$$
\mathcal L=\dfrac12(\partial^\mu\phi^a\partial_\mu\phi^a-\mu^2\phi^a\phi^a),\quad a=1,2
$$
但其实其具有完整的 $O(2)$ 对称性。也就是说，其在**反射**下也是协变的。取一个特殊的反射为：
$$
C：\phi^1\to\phi^1,\quad \phi^2\to-\phi^2
$$
回忆前面定义的复标量场：
$$
\psi=\dfrac{1}{\sqrt 2}(\phi^1+i\phi^2),\quad \psi^*=\dfrac{1}{\sqrt 2}(\phi^1-i\phi^2)
$$
其在电荷共轭下的变换为：
$$
\psi\xleftrightarrow{\,\,C\,\,}\psi^*
$$
另一方面，产生-湮灭算符的变换为：
$$
a_{\vec p}^{(1)}\to U_C^\dagger a_{\vec p}^{(1)}U_C=a_{\vec p}^{(1)},\quad a_{\vec p}^{(2)}\to U_C^\dagger a_{\vec p}^{(2)}U_C=-a_{\vec p}^{(2)}
$$
同样的，我们可以写出前面重新定义的 $b_{\vec p},c_{\vec p}$ 的变换关系：
$$
b_{\vec p}\xleftrightarrow{\,\,C\,\,} c_{\vec p},\quad b_{\vec p}^\dagger\xleftrightarrow{\,\,C\,\,} c_{\vec p}^\dagger
$$
其效果正是交换了两种 $Q$ 本征态的粒子。此变换可以由幺正算符 $U_C$ 表示。同时
$$
U_C^2=1\Rightarrow U_C=U_C^{-1}=U_C^\dagger
$$
故其还是厄米的。其本征值为 $\pm 1$。其作用于 $Q$ 上的效果是将其反号：
$$
C:Q\to U_C^\dagger\, Q\,U_C=-Q
$$
### 宇称(parity)

宇称变换也称为**空间反射**，其将空间坐标反号而时间不变：
$$
P:\vec x\to -\vec x,\quad t\to t
$$
称在宇称下反号的矢量为**极矢量**，如坐标 $\vec x$，动量 $\vec p$。而不反号的为**赝矢量**或**轴矢量**，如角动量 $\vec L$，磁场 $\vec B$。另一方面，称变号的标量为**赝标量**。

>[!example]
>**Ex.3  $\phi^4$相互作用**：加入 $\phi^4$ 相互作用后的Lagrangian为：
>$$\mathcal L^{(1)}=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2-g\phi^4$$
>宇称变换的作用为：
>$$P:\phi(\vec x,t)\to\phi(-\vec x,t)$$
> 其会改变Lagrangian：
> $$\mathcal L^{(1)}(\vec x,t)\to\mathcal L^{(1)}(-\vec x,t)$$
>但由于作用量要对全空间积分，故作用量不变。
>事实上，还有一种宇称作用方式：当认为 $\phi$ 是赝标量场时，宇称作用为
>$$P:\phi(\vec x,t)\to-\phi(-\vec x,t)$$
>称为赝标量变换规则。在此变换下，显然Lagrangian仍是协变的。

>[!example]
>**Ex.3  $\phi^3$相互作用**：再加入 $\phi^3$ 相互作用后的Lagrangian为：
>$$\mathcal L^{(2)}=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2-g\phi^4-h\phi^3$$
>现在赝标量变换 $\phi\to-\phi$ 不再是对称性了。只有标量宇称变换是对称性。

>[!example]
>**Ex.4   $\epsilon_{\mu\nu\rho\sigma}$ 的耦合**：Lagrangian为：
>$$\mathcal L^{(3)}=\dfrac12 \sum_{a=1}^4[(\partial_\mu\phi^a)^2-\mu_a^2(\phi^a)^2]-\lambda\epsilon_{\mu\nu\rho\sigma}\partial^\mu\phi^1\partial^\nu\phi^2\partial^\rho\phi^3\partial^\sigma\phi^4$$
>其中 $\epsilon_{\mu\nu\rho\sigma}$ 是四阶全反对称张量，可以发现耦合中的每一项均含有一个时间分量与三个空间分量，因此为使这一项在宇称下不变，我们假设其中有一个场为赝标量场，剩下三个为标量场（或者反过来）。此时宇称才是其对称性。
>

>[!example]
>**Ex.5 前面的组合**：在上一个例子中再加上 $\phi^3$ 相互作用项：
>$$ \mathcal L^{(4)}=\mathcal L^{(3)}-h\sum_{a=1}^4(\phi^a)^3$$
>则不论我们定义哪一个场是赝标量场，都会引起Lagrangian变化，因此此Lagrangian不存在宇称对称性。

### 时间反演(time reversal)

时间反演是一个特别的对称性，其变换为：
$$
T:t\to -t,\quad \vec x\to\vec x
$$
其特别之处在于这不是一个线性变换。我们假设其对应于一个算符 $U_T$ ，其对时间演化算符的作用为：
$$
U_T^\dagger\,\mathrm{e}^{-iHt}U_T=\mathrm{e}^{iHt}
$$
取无穷小变换，立刻得到：
$$
U_T^\dagger(-iH)U_T=iH
$$
若我们假设 $U_T$ 是线性算符，则 $U_T^\dagger\,H\,U_T=-H$ ，因此 $H$ 与 $-H$ 有相同的本征值谱，这将导致**能量无下界**。因此我们的假设不能成立。
事实上，$U_T$ 是**反线性算符**。具体来说，一个一般的反线性反幺正算符 $\varOmega$ 满足的性质为：
$$
(\varOmega a,\varOmega b)=(b,a)=(a,b)^*,\quad \varOmega(\alpha a+\beta b)=\alpha^*\varOmega a+\beta^*\varOmega b\tag{*}
$$
任意的反线性反幺正算符 $\varOmega$ 可分解为一个幺正算符 $U$ 与复共轭算符 $K$ 的乘积：
$$
\varOmega=UK
$$
>[!tip]
>这里我没有很区分**反线性**与**反幺正**。实际上，(\*)式的前一式为反幺正的定义，而后一式为反线性的定义。但是，可以证明的是，反幺正算符一定反线性。这可以由计算反线性定义式的模长为零证明：
>$$|\varOmega(\alpha a+\beta b)-\alpha^*\varOmega a+\beta^*\varOmega b|^2=0$$
>具体展开自行计算。

量子力学中，关于对称性的一个著名定理是所谓的**Wigner's Theorem**，其指出在选取合适的相位时，任意的保内积模长的变换一定是**幺正或反幺正**的。其具体证明可参见[[AQM_Note 4]]。

回到最开始的Lagrangian：
$$
\mathcal L=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2
$$
在相对论量子力学中，我们更常使用宇称与时间反演的复合变换 $\varOmega_{PT}$，其将四维时空坐标全部反号。显然其不改变粒子态的动量：
$$
\varOmega_{PT}|\,\vec p_1,\vec p_2,\cdots,\vec p_n\rangle=|\,\vec p_1,\vec p_2,\cdots,\vec p_n\rangle
$$
其也不改变动量表象的产生-湮灭算符：
$$
a_\vec p=\varOmega^{-1}_{PT}\,a_{\vec p}\varOmega_{PT},\quad a_\vec p^\dagger=\varOmega^{-1}_{PT}\,a^\dagger_{\vec p}\varOmega_{PT}
$$
其对标量场的作用为：
$$
PT:\phi(x)\to\varOmega^{-1}_{PT}\,\phi(x)\varOmega_{PT}=\phi(-x)
$$
显然，在此变换下，Lagrangian同样是协变的（作用量要对时间积分），因此其具有时间反演对称性。

---





















