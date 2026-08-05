---
title: "Coleman QFT Lecture 26: 矢量场"
---

在标量场和旋量场后，我们开始处理矢量场。其实际难度不如旋量场，因为旋量场里你要同时处理旋量指标与矢量指标。
## 26.1 自由实矢量场

习惯上，矢量场记为 $A^\mu(x)$。实矢量场满足 $A_\mu=A_\mu^*$。
我们的目的就是构造出一个合理的Lagrangian，其要满足的主要条件就是Lorentz不变性（物理规律的协变性）与 $A^\mu$ 是二次的（为了得到线性运动方程）。于是我们便要考虑如何从矢量构造标量。
1. 无导数。显然唯一Lorentz不变的二次型就是
$$
A_\mu A^\mu
$$
2. 一个导数。构造不出任何东西。两个 $A_\mu$ 与一个 $\partial_\mu$ 无法构造出Lorentz标量。
3. 两个导数。有三种可能：
$$
(\partial_\mu A_\nu)(\partial^\mu A^\nu),\quad (\partial^\mu A_\mu)(\partial^\nu A_\nu),\quad (\partial^\nu A_\mu)(\partial^\mu A_\nu)
$$
但实际上后两种在分部积分下是等价的：
$$
(\partial^\mu A_\mu)(\partial^\nu A_\nu)\simeq -(\partial^\nu\partial^\mu A_\mu)A_\nu\simeq (\partial^\nu A_\mu)(\partial^\mu A_\nu)
$$
因此Lagrangian的最一般形式就是：
$$
\mathcal L=\pm\dfrac12\left[(\partial_\mu A_\nu)(\partial^\mu A^\nu)+a(\partial^\mu A_\mu)(\partial^\nu A_\nu)+b A_\nu A^\nu\right]
$$
直接变分可得：
$$
-\partial^\mu\partial_\mu A_\nu-a\partial_\nu\partial_\mu A^\mu+bA_\nu=0
$$
按照套路，我们来研究其平面波解：
$$
A_\nu=\varepsilon_\nu \mathrm{e}^{-ik\cdot x}\Rightarrow k^2\varepsilon_\nu+ak_\nu\varepsilon\cdot k+b\varepsilon_\nu=0
$$
其中出现了 $\varepsilon\cdot k$。为了进一步求解，我们引入纵向解与横向解的概念。
（a）**纵向(Longitudinal)**：$\varepsilon_\nu\propto k_\nu$
$$
[\,k^2+ak^2+b\,]k_\nu=0\Rightarrow k^2\equiv \mu_L^2=-\dfrac{b}{1+a}
$$
（b）**横向(Transverse)**：$\varepsilon_\nu\perp k_\nu$
$$
[k^2+b]\varepsilon_\nu=0\Rightarrow k^2\equiv\mu_T^2=-b
$$
这里有四个自由度，三个横向一个纵向。这实际上源于Lorentz群限制在小群上的CG分解结果。这里简单提一下。

>[!tip] 补充
**小群(little group)**：粒子的自旋是其内部属性，我们应当将其与粒子的动量分离。因此，定义小群为保持粒子动量不变的时空变换。对于有质量的粒子，我们可以取其静止系，则 $p=(\mu,0,0,0)$，因此其小群就是空间旋转群 $SO(3)$。现在，矢量场对应于Lorentz群的 $(1/2,1/2)$ 表示，将其限制在小群上，则$$\left(\dfrac12,\dfrac12\right)\to 0\oplus 1$$
在静止系中，纵向解即 $(A^0,0,0,0)$，其的确在 $SO(3)$ 下不变，对应于表示 $0$ 的标量粒子。而横向解即 $(0,A^1,A^2,A^3)$，对应于 $SO(3)$ 的矢量表示的自旋1粒子。

由于我们希望研究的是自旋1粒子，因此我们的Larangian肯定不能含有纵向解部分。这一点就要求
$$
a=-1,\quad b\ne 0
$$
$b$ 实际上代表了粒子的质量，横向解$b=-\mu^2$，因此我们现在是在研究有质量粒子。无质量粒子消除纵向解的办法是加入**规范(gauge)**。因此，有质量的自旋1粒子的Lagrangian就是：
$$
\mathcal L=\pm\dfrac12\left[(\partial_\mu A_\nu)(\partial^\mu A^\nu)-(\partial^\mu A_\mu)(\partial^\nu A_\nu) -\mu^2A_\nu A^\nu\right]
$$
通过将第二项等价为 $(\partial^\nu A_\mu)(\partial^\mu A_\nu)$，并且定义**场张量**：
$$
F_{\mu\nu}\equiv\partial_\mu A_\nu-\partial_\nu A_\mu
$$
则Lagrangian可以写为：
$$
\mathcal L=\pm\left[\dfrac14 F_{\mu\nu} F^{\mu\nu}-\dfrac12\mu^2 A_\nu A^\nu\right]
$$
$\mu\to 0$ 实际上就得到了熟悉的电磁场的Lagrangian。电磁场就是质量为零的光子场，这时纵向解相当于规范变换：
$$
A_\mu\to A_\mu'=A_\mu+\partial_\mu \lambda,\quad F_{\mu\nu}\,\text{ is invariant}
$$

## 26.2 Proca方程与解

我们再写一遍由Lagrangian导出的运动方程：
$$
-\partial^\mu\partial_\mu A_\nu+\partial_\nu\partial_\mu A^\mu-\mu^2 A_\nu=0
$$
其可以由 $F_{\mu\nu}$ 写为：
$$
\partial^\mu F_{\nu\mu}-\mu^2 A_\nu=0
$$
上式称为**Proca**方程，其为自旋1的有质量粒子的运动方程。若 $\mu=0$ ，则Proca方程退化为无源空间的Maxwell方程（的其中两个）：
$$
\partial^\nu F_{\mu\nu}=0
$$
对Proca方程取散度 $\partial^\nu$ ，得到
$$
\partial^\nu\partial^\mu F_{\nu\mu}-\mu^2 \partial^\nu A_\nu=-\mu^2 \partial^\nu A_\nu=0\Rightarrow \partial^\nu A_\nu=0
$$
这里用到了 $F_{\mu\nu}$ 的**反对称**性质。对这个结果我们并不奇怪，因为 $A_\mu$ 的散度为零就对应于不存在纵向波解。这个结论称为Lorenz条件。回到最开始的式子：
$$
-\partial^\mu\partial_\mu A_\nu+\partial_\nu\partial_\mu A^\mu-\mu^2 A_\nu=-\partial^\mu\partial_\mu A_\nu-\mu^2 A_\nu=0\Rightarrow (\square^2+\mu^2)A_\mu=0
$$
即 $A_\mu$ 的四个分量都分别满足Klein-Gordan方程。也就是说，Proca方程等价于四个分量的KG方程加上Lorenz条件。因此平面波解只有三个（横向）自由度。$A_\mu$ 的各个分量可以写为：
$$
A_\mu=\varepsilon_\mu^{(r)}(k)\,\mathrm{e}^{-ik\cdot x}\quad (r=1,2,3),\quad k^\mu \varepsilon_\mu^{(r)}(k)=k\cdot \varepsilon^{(r)}=0
$$
$r$ 标记了满足 $k\cdot \varepsilon^{(r)}=0$ 条件的三个线性独立解，或者说 $k$ 的正交补空间的一组基。简单考虑静止系的例子：$k=(\mu,0,0,0)$。我们规定正交归一条件：
$$
\varepsilon^{(r)*}\cdot\varepsilon^{(s)}=-\delta^{rs}
$$
这样，我们可以取最简单的解：
$$
\varepsilon^{(1)}=\begin{pmatrix}0\\1\\0\\0\end{pmatrix},\quad \varepsilon^{(2)}=\begin{pmatrix}0\\0\\1\\0\end{pmatrix},\quad \varepsilon^{(3)}=\begin{pmatrix}0\\0\\0\\1\end{pmatrix}
$$
当然，$r$ 也可标记 $z$ 方向自旋的本征态：
$$
\varepsilon^{(1)}=\dfrac{1}{\sqrt2}\begin{pmatrix}0\\1\\i\\0\end{pmatrix},\quad \varepsilon^{(2)}=\dfrac{1}{\sqrt2}\begin{pmatrix}0\\1\\-i\\0\end{pmatrix},\quad \varepsilon^{(3)}=\begin{pmatrix}0\\0\\0\\1\end{pmatrix}
$$
除了正交归一关系，更为重要的是完备关系。回忆在Dirac方程中的完备关系：
$$
P_u\equiv\dfrac{1}{2m}\sum_{r=1}^2u_{\vec p}^{(r)}\bar u_{\vec p}^{(r)}=\dfrac{p\mkern-8.5mu/+m}{2m},\quad P_v\equiv\dfrac{1}{2m}\sum_{r=1}^2v_{\vec p}^{(r)}\bar v_{\vec p}^{(r)}=\dfrac{p\mkern-8.5mu/-m}{2m}
$$
Proca方程的平面波解也有类似的关系式。定义
$$
P_{\mu\nu}(k)=\sum_{r=1}^3\varepsilon_\mu^{(r)}(k)\varepsilon_\nu^{(r)*}(k)$$
我们现在猜测其形式。其应当只与 $k$ 有关。因此构造出的二阶张量只有可能是 $g_{\mu\nu}$ 与 $k_\mu k_\nu$。故我们先写
$$
P_{\mu\nu}(k)=A g_{\mu\nu}+Bk_{\mu}k_{\nu}
$$
利用
$$
k^\mu P_{\mu\nu}(k)=\sum_{r=1}^3k^\mu \varepsilon_\mu^{(r)}(k)\varepsilon_\nu^{(r)*}(k)=0\Rightarrow A=-\mu^2B
$$
$$
P_{\mu\nu}\varepsilon^{\nu(s)}=-\varepsilon_{\mu}^{(s)}\Rightarrow A=-1
\Rightarrow B=\dfrac{1}{\mu^2}
$$
因此
$$
P_{\mu\nu}(k)=\sum_{r=1}^3\varepsilon_\mu^{(r)}(k)\varepsilon_\nu^{(r)*}(k)=-g_{\mu\nu}+\dfrac{k_\mu k_{\nu}}{\mu^2}
$$
作为一个检验，静止系中：
$$
P_{\mu\nu}(k=(\mu,0,0,0))=\delta_{ij}\quad (i,j=1,2,3)
$$
上面给出的两组解都是满足这一关系的。

## 26.3 Proca场的正则量子化

现在来按我们熟知的正则量子化步骤，尝试正则量子化矢量场。我们将Lagrangian的时间与空间分量分开写，这将很快展现出其原因：
$$
\mathcal L=\pm\left[\dfrac12 F_{0i}F^{0i}+\dfrac14F_{ij}F^{ij}-\dfrac12\mu^2 A_0A^0-\dfrac12\mu^2A_iA^i\right]
$$
正则动量是其对时间导数的偏导。这里的时间导数出现在 $F_{0i}=\partial_0A_i-\partial_iA_0$ 中，有
$$
\pi^i=\dfrac{\partial\mathcal L}{\partial(\partial_0A_i)}=\pm F^{0i}
$$
但是
$$
\pi^0=\dfrac{\partial\mathcal L}{\partial(\partial_0A_0)}=0
$$
这是否说明正则量子化步骤出问题了呢？$A^0$ 的正则动量为零，那我们要怎么规定对易子呢？好吧，这是一个容易产生的误解。
Proca方程本质是二阶微分方程组，其只有**三个**自由度。因此，我们只需要三个正则坐标以及三个其对应的正则动量作为初值，即可得到唯一的解。也就是说，$A^i$ 及其正则动量 $F^{0i}$ 构成了一组完备的**初值数据(initial value data, IVD)**。为了证明这一点，由于四个KG方程的初值条件是 $\{A_\mu,\partial_0 A_\mu\}=\{A_i,\partial_0A_i,A_0,\partial_0 A_0\}$，我们仅需说明这组初值可以由 $\{A_i,F^{0i}\}$ 得到即可。首先 $A_i$ 是相同的，然后由Lorenz条件：
$$
\partial_\mu A^\mu=0\Rightarrow\partial_0A^0=-\partial_i A_i
$$
由于给定的是一固定时刻的所有空间坐标点的 $A_i$，因此 $\partial_i A^i$ 是已知的。因此可得 $\partial_0A_0$ 。接着，考虑方程
$$
\partial^\mu F_{\nu\mu}-\mu^2 A_\nu=0
$$
$\nu=0$ 分量给出：
$$
A^0=\dfrac{1}{\mu^2}\partial_i F^{0i}
$$
故可得 $A^0$。最后，利用
$$
F_{0i}=\partial_0 A_i-\partial_i A_0
$$
由于已经得到了 $A^0$，故 $\partial_iA_0$ 也是已知的，故可得 $\partial_0 A_i$。这样就证明了 $\{A_i,F^{0i}\}$ 构成了Proca方程的IVD。我们可以将其与之前的理论相对比：

<div align="center">
  <img src="./pictures/Pasted image 20260216105540.png" width="800">
</div>

于是，Hamiltonian则为：
$$
\mathcal H=\pi^i\partial_0A_i-\mathcal L=\pm F^{0i}\partial_0 A_i-\mathcal L=\pm F^{0i}F_{0i}\pm F^{0i}\partial_i A_0-\mathcal L
$$
第二项可以用分部积分：
$$
 F^{0i}\partial_i A_0\simeq -(\partial_i F^{0i})A_0=-\mu^2A^0A_0
$$
因此
$$
\mathcal H=\pm\left[\dfrac12 F_{0i}F^{0i}-\dfrac14F_{ij}F^{ij}-\dfrac12\mu^2 A_0A^0+\dfrac12\mu^2A_iA^i\right]
$$
可以看到其相当于反转空间部分的符号。现在我们可以用正定性确定最开始的符号了。由于
$$
F_{0i}F^{0i}\leq 0,\quad F_{ij}F^{ij}\geq 0,\quad A_0A^0\ge 0,\quad A_iA^i\le 0
$$
因此应该取负号。故
$$
\mathcal H=-\left[\dfrac12 F_{0i}F^{0i}-\dfrac14F_{ij}F^{ij}-\dfrac12\mu^2 A_0A^0+\dfrac12\mu^2A_iA^i\right],\quad\mathcal L=-\dfrac14F_{\mu\nu}F^{\mu\nu}+\dfrac12\mu^2A_\nu A^\nu
$$
这个结果和标量场的结果很像，但是质量项有相反的符号。
$$
\mathcal L_\phi=\dfrac12(\partial_\mu\phi\partial^\mu\phi-\mu^2\phi^2)
$$
现在我们可以应用一般的正则量子化步骤了。规定正则对易子：
$$
\boxed{[A_i(\vec x,t),A_j(\vec y,t)]=0,\quad [F^{i0}(\vec x,t),F^{j0}(\vec y,t)]=0,\quad [F^{i0}(\vec x,t),A_j(\vec y,t)]=-i\delta^i_j\delta^{(3)}(\vec x-\vec y)}
$$
同时写出矢量场的平面波展开：
$$
A_\mu(x)=\sum_{r=1}^3\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^{3/2}\sqrt{2\omega_k}}\left[a_{\vec k}^{(r)}\varepsilon^{(r)}_\mu(k)\,\mathrm{e}^{-ik\cdot x}+a_{\vec k}^{(r)\dagger}\varepsilon^{(r)*}_\mu(k)\,\mathrm{e}^{+ik\cdot x}\right]
$$
我们自然会猜测产生-湮灭算符的对易关系：
$$
\left[a_{\vec k}^{(r)},a_{\vec k'}^{(s)\dagger}\right]=\delta^{(3)}(\vec k-\vec k')\delta^{rs}
$$
这是否和正则对易子自洽呢？答案是是的。我们来验证它。回忆标量场的情形：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^{3/2}\sqrt{2\omega_{k}}}(\,a_{\vec k}\,\mathrm{e}^{-ik\cdot x}+a^\dagger_{\vec k}\,\mathrm{e}^{ik\cdot x}\,)
$$
$$
[\phi(x),\phi(y)]=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^{3/2}\sqrt{2\omega_{k}}}(\mathrm{e}^{-ik\cdot(x-y)}-\mathrm{e}^{ik\cdot(x-y)})\equiv\int\mathrm{d}^3\vec k\,(\cdots)\equiv i\Delta(x-y)
$$
且在等时情形下 $(x^0=y^0)$ 有性质：
$$
\Delta(x-y)=0,\quad \partial_0^x\Delta(x-y)=-\delta^{(3)}(x-y),\quad \partial_0^x\partial_0^y\Delta(x-y)=0
$$
这就是标量场的正则对易子。现在，对于矢量场，情况也是类似的：
$$
[A_\mu(x),A_\nu (y)]=\int\mathrm{d}^3\vec k\,(\cdots)\sum_r\varepsilon_\mu^{(r)}(k)\varepsilon_\nu^{(r)*}(k)=\int\mathrm{d}^3\vec k\,(\cdots)\left[-g_{\mu\nu}+\dfrac{k_\mu k_{\nu}}{\mu^2}\right]=\left[-g_{\mu\nu}-\dfrac{\partial^x_\mu \partial^x_\nu}{\mu^2}\right]i\Delta(x-y)
$$
则
$$
[A_i(\vec x,t),A_j(\vec y,t)]=\left[-g_{\mu\nu}-\dfrac{\partial^x_\mu \partial^x_\nu}{\mu^2}\right]i\Delta(\vec x-\vec y,0)=0
$$
$$
\begin{align}
[F_{\lambda\mu}(x),A_\nu(y)]&=\partial_\lambda^x[A_\mu(x),A_\nu(y)]-\partial_\mu^x[A_\lambda(x),A_\nu(y)]\\
&=\partial_\lambda^x
\left[-g_{\mu\nu}-\dfrac{\partial^x_\mu \partial^x_\nu}{\mu^2}\right]i\Delta(x-y)-\partial_\mu^x\left[-g_{\lambda\nu}-\dfrac{\partial^x_\lambda \partial^x_\nu}{\mu^2}\right]i\Delta(x-y)\\
&=\left(-g_{\mu\nu}\partial_\lambda^x+g_{\lambda\nu}\partial_\mu^x\right)i\Delta(x-y)
\end{align}
$$
故
$$
[F^{i0}(x),A_j(y)]\bigg|_{x^0=y^0}=(-\delta^0_j\partial_x^i+\delta^i_j\partial_x^0)i\Delta(\vec x-\vec y,0)=-i\delta^i_j\delta^{(3)}(\vec x-\vec y)
$$
$$
\begin{align}
[F_{i0}(x),F_{j0}(y)]\bigg|_{x^0=y^0}&=\partial_j^y[F_{i0}(x),A_0(y)]-\partial_0^y[F_{i0}(x),A_j(y)]\\
&=\partial_j^y(-g_{00}\partial_i^x+g_{i0}\partial_0^x)i\Delta(\vec x-\vec y)-\partial_0^y(-g_{0j}\partial_i^x+g_{ij}\partial_0^x)i\Delta(\vec x-\vec y)\\
&=-(g_{00}\partial_i^x\partial_j^y+g_{ij}\partial_0^x\partial^y_0)i\Delta(\vec x-\vec y)\\
&=0
\end{align}
$$
最后，经过非常恶心的计算，你可以验证;
$$
H=\int\mathrm{d}^3\vec x\,\mathcal H=\int\mathrm{d}^3\vec k\,\omega_k\sum_ra_{\vec k}^{(r)\dagger}a_{\vec k}^{(r)}
$$
以上就是有质量矢量场的正则量子化过程。如果你想使用相同的方法对无质量矢量场做量子化，你会遇到许多问题。比如完备性关系在 $\mu\to 0$ 下发散：
$$
P_{\mu\nu}(k)=\sum_{r=1}^3\varepsilon_\mu^{(r)}(k)\varepsilon_\nu^{(r)*}(k)=-g_{\mu\nu}+\dfrac{k_\mu k_{\nu}}{\mu^2}
$$
还有一些别的矛盾。比如Maxwell方程给出：
$$
\partial_i F^{0i}=0
$$
但是
$$
[\partial_iF^{i0}(\vec x,t),A_j(\vec y,t)]=-i\partial_j^x\delta^{(3)}(\vec x-\vec y)\ne 0
$$
因此导出了矛盾。这一点在有质量情形下不会有问题，因为Proca方程给出：
$$
\partial_i F^{i0}=-\mu^2A^0
$$
$$
\partial_i^x[F^{i0}(\vec x,t),A_j(\vec y,t)]=-\mu^2[A^0(\vec x,t),A_j(\vec y,t)]=-\mu^2\left[-\delta_j^0-\dfrac{\partial^x_0 \partial^x_j}{\mu^2}\right]i\Delta(\vec x-\vec y,0)=-i\partial_j^x\delta^{(3)}(\vec x-\vec y)
$$
可以看到两个 $\mu^2$ 消掉了，得到了一致的结果。

## 26.4 极限 $\mu\to 0$：一个简单的物理结果

考虑最简单的耦合：矢量场和一个流 $J^\mu$ 耦合。Lagrangian为
$$
\mathcal L=-\dfrac14 F_{\mu\nu}F^{\mu\nu}+\dfrac12\mu^2A^\nu A_\nu-J^\mu A_\mu
$$
运动方程就是：
$$
\partial^\nu F_{\mu\nu}-\mu^2A_\mu+J_\mu=0
$$
对其取散度得到：
$$
\mu^2\partial^\mu A_\mu=\partial^\mu J_\mu
$$
现在，如果我取 $\mu=0$，则 $\partial_\mu J^\mu=0$ 。也就是说和无质量矢量场耦合的流一定是**守恒流**，否则运动方程就会无解。因此我们的理论只允许其与守恒流耦合。
现在回到有质量情况。这个变换的源会激发出矢量介子，产生一个螺旋度 $r$ 与动量 $k$ 的介子的振幅应当正比于：
$$
\mathcal A_{fi}\propto\varepsilon_\mu^{(r)*}\tilde J^\mu(k)
$$
现在，我们仍假设耦合的流是一个守恒流，这将在方程中反过来导出：
$$
\partial^\mu A_\mu=0
$$
即纵向自由度不存在，只有三个横向自由度。下面我们假设介子沿 $z$ 方向运动，则
$$
k^\mu=\left(\sqrt{|\vec k|^2+\mu^2},0,0,|\vec k|\right)
$$
此时的三个平面波解为：
$$
\varepsilon^{(1)}=\begin{pmatrix}0\\1\\0\\0\end{pmatrix},\quad \varepsilon^{(2)}=\begin{pmatrix}0\\0\\1\\0\end{pmatrix},\quad \varepsilon^{(3)}=\dfrac{1}{\mu}\begin{pmatrix}|\vec k|\\0\\0\\\sqrt{|\vec k|^2+\mu^2}\end{pmatrix}
$$
考虑发射 $z$ 方向自旋零的粒子（有些时候将其称为“纵向”极化，不要将其和前面的纵向相混淆），这个过程的振幅为：
$$
\mathcal A_3\sim\dfrac{1}{\mu}\left(|\vec k|\tilde J^0-\sqrt{|\vec k|^2+\mu^2}\tilde J^3\right)
$$
由流守恒方程：
$$
k^\mu\tilde J_\mu=\sqrt{|\vec k|^2+\mu^2}\tilde J^0-|\vec k|\tilde J^3=0
$$
故
$$
\mathcal A_3\sim\dfrac1\mu\tilde J^0\left(|\vec k|-\dfrac{|\vec k|^2+\mu^2}{|\vec k|}\right)=-\dfrac{\mu}{|\vec k|}\tilde J^0
$$
可以看到，在 $\mu\to 0$ 时，沿运动方向的自旋为零的介子激发振幅会被压低直至为零。这其实解释了为什么光子只有两种极化。要理解这一点，考虑横向极化条件
$$
k^\mu\varepsilon_\mu^{(r)}=0
$$
当 $\mu=0$ 时，$\epsilon_\mu\propto k^\mu$ 的纵向解也同时满足了上面的方程，因为 $k^2=\mu^2=0$。也就是说，其中一个极化态会趋近于本不存在的纵向解，故这个解的振幅会被压低。在小质量情形，即使系统仍然有三个自由度，但自旋零的介子是难以与守恒流耦合的。由小量展开：
$$
\omega_k=\sqrt{|\vec k|^2+\mu^2}\approx|\vec k|\left(1+O(\mu^2/|\vec k|^2)\right)
$$
故
$$
\varepsilon^{(3)\mu}\approx\dfrac{|\vec k|}{\mu}(1,0,0,1)\approx\dfrac{k^\mu}{\mu}
$$
因而耦合被流守恒方程 $k^\mu\tilde J_\mu=0$ 抑制。

## 26.5 有质量的实矢量场的Feynman规则

到这里，接下来就是如何计算一个给定相互作用的S矩阵了。例如，一个典型的相互作用是一个有质量矢量场与电子（Dirac旋量场）的Yukawa耦合：
$$
\mathcal L'=-e\bar\psi\gamma^\mu\varGamma\psi A_\mu
$$
$\varGamma=1$：$A_\mu$ 是极矢量。$\varGamma=i\gamma_5$：$A_\mu$ 是轴矢量。
为了计算Dyson展开中的时序积，应用Wick定理，因此自然要计算矢量场的Wick缩并：
$$
\overset {|\Large \mkern-3mu{}^{\overline{\quad\;\;\;\,}}\mkern-3mu\normalsize |}{A_\mu(x) A}_\nu (y)=\langle 0|T(A_\mu(x)A_\nu(y))|0\rangle
$$
由前面的计算，直接应用平面波展开式得到：
$$
\langle 0|A_\mu(x)A_\nu(y)|0\rangle=\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^32\omega_k}\mathrm{e}^{-ik\cdot(x-y)}\left[-g_{\mu\nu}+\dfrac{k_\mu k_\nu}{\mu^2}\right]=\left[-g_{\mu\nu}-\dfrac{\partial^x_\mu \partial^x_\nu}{\mu^2}\right]\Delta_+(x-y)
$$
这里用到了和前面相同的技巧，即 $k_\mu\to -i\partial^x_\mu$。回忆之前处理标量场的步骤：
$$
\langle 0|\phi(x)\phi(y)|0\rangle=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}\,\mathrm{e}^{-ip\cdot (x-y)}\equiv\Delta_+(x-y)
$$
$$
\langle 0|T(\phi(x)\phi(y))|0\rangle=\theta(x^0-y^0)\Delta_+(x-y)+\theta(y^0-x^0)\Delta_+(y-x)=\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
这里本质上是通过对 $p^0$ 的积分中极点位置的移动自动完成时序积的排序。那么，矢量场的结果也会是类似的吗？猜测下面的结果：
$$
\langle 0|T(A_\mu(x)A_\nu(y))|0\rangle\overset{?}{=}\left[-g_{\mu\nu}-\dfrac{\partial^x_\mu \partial^x_\nu}{\mu^2}\right]\theta(x^0-y^0)\Delta_+(x-y)+(x\leftrightarrow y)=\int\dfrac{\mathrm{d}^4 k}{(2\pi)^4}\dfrac{i}{k^2-\mu^2+i\epsilon}\left[-g_{\mu\nu}+\dfrac{k_\mu k_\nu}{\mu^2}\right]\mathrm{e}^{ik\cdot(x-y)}
$$
实际上我们在[Coleman QFT - Lecture 21. Dirac方程 III：量子化与Feynman规则](./Coleman%20QFT%20-%20Lecture%2021.%20Dirac%E6%96%B9%E7%A8%8B%20III%EF%BC%9A%E9%87%8F%E5%AD%90%E5%8C%96%E4%B8%8EFeynman%E8%A7%84%E5%88%99.md)中处理Fermi场的Wick缩并时就是用的这种方法：
$$
\begin{align}
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi(x) \bar\psi} (y)&=(i\partial\mkern-8.5mu/_x+m)\overset {|\Large \mkern-2mu{}^{\overline{\quad\;}}\mkern-3mu\normalsize |}{\phi(x) \phi} (y)
=(i\partial\mkern-8.5mu/_x+m)\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
=\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i(p\mkern-8.5mu/+m)}{p^2-\mu^2+i\epsilon}
\end{align}
$$
然而，我们并不能一直幸运。这样得到的Fermi场的Dirac传播子结果是**正确**的，然而矢量场的结果是**有问题**的。这源于 $\theta(x^0-y^0)$ 函数也要求导，这会产生一个额外的delta函数。具体来说：
当 $\mu,\nu\ne 0$ 时，$\theta(x^0-y^0)$ 与 $\partial^x_\mu \partial^x_\nu$ 是对易的，因此没有任何问题。
当 $\mu=i,\nu=0$ 时，此时不对易，会多出一项：
$$
\partial_i^x[\delta(x^0-y^0)\Delta_+(x-y)-(x\leftrightarrow y)]
$$
但是这个式子中的delta函数限制了 $x^0=y^0$，此时由[Coleman QFT - Lecture 3. 构建标量量子场](./Coleman%20QFT%20-%20Lecture%203.%20%E6%9E%84%E5%BB%BA%E6%A0%87%E9%87%8F%E9%87%8F%E5%AD%90%E5%9C%BA.md)中的论证，$\Delta_+(x-y)=\Delta_+(y-x)$，故两项相消。因此**一个导数**不会有问题，这也是为什么Dirac传播子的结果是正确的。
真正的问题来源于 $\mu=\nu=0$。二阶导数的不对易性是不可忽略的。我们举一例来说明。在[Coleman QFT - Problem 1](./Coleman%20QFT%20-%20Problem%201.md)中的第二题得到了：
$$
(\square_x^2+\mu^2)T(\phi(x)\phi(y))=-i\delta^{(4)}(x-y)
$$
因此
$$
(\square_x^2+\mu^2)[\theta(x_0-y_0)\Delta_+(x-y)+(x\leftrightarrow y)]=-i\delta^{(4)}(x-y)
$$
但是 $(\square^2_x+\mu^2)\Delta_+(x-y)=0$。因此这个delta函数正是来源于二阶微分算符 $\partial_0^2$ 作用于 $\theta(x_0-y_0)$ 。因此这一项是不可忽略的。

实际上，我们还有另一个问题。一开始的相互作用项：
$$
\mathcal L'=-e\bar\psi\gamma^\mu\varGamma\psi A_\mu=-e\bar\psi\gamma^0\varGamma\psi A_0-e\bar\psi\gamma^i\varGamma\psi A_i
$$
第一项有问题，因为 $A_0$ 并不是场变量而是约束变量，其应当由 $F^{i0}$ 表示出来。也就是说，相互作用项中含有广义坐标的成分，这将导致 $\mathcal H_I\ne -\mathcal L_I$。所以我们又一次遇到了导数相互作用中相同的问题。

然而，如同导数相互作用中幸运的解决方案一样，在这里，我们如果“天真的”将 $\mathcal H_I=-\mathcal L_I$，并且认为传播子就是
$$
\boxed{D_F^{\mu\nu}(x-y)=\int\dfrac{\mathrm{d}^4 k}{(2\pi)^4}\dfrac{i}{k^2-\mu^2+i\epsilon}\left[-g_{\mu\nu}+\dfrac{k_\mu k_\nu}{\mu^2}\right]\mathrm{e}^{ik\cdot(x-y)}}
$$
这样会最终得到正确的计算结果。
这就像我们犯了两个错误，但它们却恰好能互相抵消，所以说我们是幸运的。在这里，我还没有办法说明这个巧合是如何发生的，证明这一点需要用到泛函积分进行量子化的方法。这也是泛函积分的优势所在。但在那之前，我们先暂且认为这个传播子是正确的。于是可以写出该理论的Feynman规则：

<div align="center">
  <img src="./pictures/Pasted image 20260216145033.png" width="800">
</div>

下面我们运用这些规则来计算一个例子：
**Compton散射（有质量光子）**：康普顿散射指光子与电子发生的弹性散射。这里取 $\varGamma=1$，因为光子是极矢量。$O(e^2)$ 的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260216145437.png" width="600">
</div>

则散射振幅为：
$$
i\mathcal A_{fi}=(-ie)^2\bar u'\left[\varepsilon\mkern-8.5mu/'^*\dfrac{i}{p\mkern-8.5mu/+k\mkern-8.5mu/-m}\varepsilon\mkern-8.5mu/+\varepsilon\mkern-8.5mu/\dfrac{i}{p\mkern-8.5mu/'-k\mkern-8.5mu/-m}\varepsilon\mkern-8.5mu/'^*\right]u
$$
这并不困难。下面我将说明纵向极化的光子无法参与Compton散射过程。（**相互作用项使得存在纵向极化解**）这一点可以理解为：S矩阵元是相对于无穷远自由态而言的，因此不存在纵向极化的自由光子。利用LSZ约化公式：
$$
\langle k',p'|S-1|k,p\rangle=i\mathcal A_{fi}=i\int\mathrm{d}^4x\,\mathrm{e}^{-ik\cdot x}\varepsilon_\mu(\square^2+\mu^2)\langle k',p'|A^\mu(x)|p\rangle
$$
当 $\varepsilon_\mu\propto k_\mu$ 时，我们已经论证过当光子与守恒流耦合时，不存在纵向极化模式。
$$
\partial^\mu J_\mu=\mu^2 \partial^\mu A_\mu\Rightarrow \partial^\mu A_\mu=0\quad (\text{ if } \partial^\mu J_\mu=0\text{ and }\mu\ne 0)
$$
做一个自洽性检验。利用LSZ约化公式：
$$
\langle k',p'|S-1|k,p\rangle=i\mathcal A_{fi}=i\int\mathrm{d}^4x\,\mathrm{e}^{-ik\cdot x}\varepsilon_\mu(\square^2+\mu^2)\langle k',p'|A^\mu(x)|p\rangle
$$
因此
$$
\begin{align}
\mathcal A_{fi}&\propto\int\mathrm{d}^4x\,\mathrm{e}^{-ik\cdot x}k_\mu(\square^2+\mu^2)\langle k',p'|A^\mu(x)|p\rangle\\
&\propto -\int\mathrm{d}^4x\,\partial_\mu(\mathrm{e}^{-ik\cdot x})(\square^2+\mu^2)\langle k',p'|A^\mu(x)|p\rangle\\
&\simeq \int\mathrm{d}^4x\,\mathrm{e}^{-ik\cdot x}k_\mu(\square^2+\mu^2)\langle k',p'|\partial_\mu A^\mu(x)|p\rangle\\
&\propto \int\mathrm{d}^4x\,\mathrm{e}^{-ik\cdot x}k_\mu(\square^2+\mu^2)\langle k',p'|\partial_\mu J^\mu(x)|p\rangle=0
\end{align}
$$
因此一般性的论证了振幅应当为零。我们也可以通过Compton散射振幅直接验证，当 $\varepsilon^\mu=k^\mu/\mu$ 时：
$$
\begin{align}
i\mathcal A_{fi}&=\dfrac{(-ie)^2}{\mu}\bar u'\left[\varepsilon\mkern-8.5mu/'^*\dfrac{i}{p\mkern-8.5mu/+k\mkern-8.5mu/-m}k\mkern-8.5mu/+k\mkern-8.5mu/\dfrac{i}{p\mkern-8.5mu/'-k\mkern-8.5mu/-m}\varepsilon\mkern-8.5mu/'^*\right]u\\
&=i\dfrac{(-ie)^2}{\mu}\bar u'\left[\varepsilon\mkern-8.5mu/'^*\dfrac{k\mkern-8.5mu/+p\mkern-8.5mu/-m}{p\mkern-8.5mu/+k\mkern-8.5mu/-m}-\dfrac{-k\mkern-8.5mu/+p\mkern-8.5mu/'-m}{p\mkern-8.5mu/'-k\mkern-8.5mu/-m}\varepsilon\mkern-8.5mu/'^*\right]u\\
&=i\dfrac{(-ie)^2}{\mu}\bar u'[\varepsilon\mkern-8.5mu/'^*-\varepsilon\mkern-8.5mu/'^*]u=0
\end{align}
$$
这的确是我们期待的。

---






