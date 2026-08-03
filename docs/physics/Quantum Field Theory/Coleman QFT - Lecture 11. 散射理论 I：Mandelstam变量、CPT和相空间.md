---
title: "Coleman QFT Lecture 11: 散射理论 I：Mandelstam变量、CPT和相空间"
---

本文将紧接着上一篇文章[Coleman QFT - Lecture 10. 质量重整化与费曼图](./Coleman%20QFT%20-%20Lecture%2010.%20%E8%B4%A8%E9%87%8F%E9%87%8D%E6%95%B4%E5%8C%96%E4%B8%8E%E8%B4%B9%E6%9B%BC%E5%9B%BE.md)，讨论其未完成的散射过程的振幅计算，并且在其中顺带引出一些有趣的话题。（我们已经完成了核子-核子散射的 $O(g^2)$ 阶的振幅计算，并且得到了Yukawa势以及交换势。）
## 11.1 核子-反核子散射

首先是 $2.6\quad N+\bar N\to N+\bar N$，其同样对应到两个Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20251211184352.png" width="500">
</div>

注意这里不像 $N+N\to N+N$，其两个图区别在于交换出射粒子（或入射粒子）的动量。现在 $N$ 与 $\bar N$ 并不相同，因此交换动量对应的是不同的散射过程。然而，我们可以改变基本顶点的位置，得到上面的两个不同的Feynman图。其代表的物理过程是有差异的，前者代表一个核子自己衰变成一个核子加一个虚介子，虚介子与反核子作用变成一个新的反核子。而后者代表初始的核子与反核子湮灭成一个虚介子，然后虚介子又自发分裂成新的核子与反核子。利用Feynman规则，我们能写出核子-反核子散射过程的Feynman振幅为：
$$
i\mathcal A_{fi}=(-ig)^2\left[\dfrac{i}{(p_1-p_1')^2-\mu^2+i\epsilon}+\dfrac{i}{(p_1+p_2)^2-\mu^2+i\epsilon}\right]
$$
可以看出第二项并不代表交换势。在质心系中，有
$$
(p_1+p_2)^2=(E_1+E_2)^2=E_T^2
$$
其中 $E_T$ 代表入射总能量。因此第二项存在极点 $E_T=\pm \mu$。事实上，我们知道介子实际上是稳定的，也就是说 $\mu<2m$，因此这个极点不会在实际的物理过程中看到。
现在我们借此讨论一下**分波**的分析。上面的第一项与出射的 $p_1'$ 方向有关，但第二项显然不依赖于出射角度，因此第二项是纯 $s$ 波的散射振幅。在非相对论量子力学中，我们是否遇见过这个散射过程中的极点？
答案是有的。实际上，我们只需要使用**定态微扰理论**：
$$
\mathcal A_{fi}\propto\langle f|V|i\rangle+\sum_n\dfrac{\langle f|V|n\rangle\langle n|V|i\rangle}{E_{n}-E_i}+\cdots
$$
显而易见的，第二阶近似项存在极点 $E_n=E_i$。这与我们考虑的物理情景是十分相似的：核子与反核子湮灭为一个介子，极点确实出现在当介子静能 $\mu$ 等于入射总能量 $E_T$ 时。因此，这个极点的出现并不是QFT独有的特征。

## 11.2 介子-核子散射与产生介子对

### 介子-核子散射

$2.7\quad N+\phi\to N+\phi$ ，此过程同样有两个Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20251211190524.png" width="600">
</div>

(b)和(b')是同一个图。按Feynman规则可写出散射过程的振幅为：
$$
i\mathcal A_{fi}=(-ig)^2\left[\dfrac{i}{(p_1+p_2)^2-m^2+i\epsilon}+\dfrac{i}{(p_1-p_2')^2-m^2+i\epsilon}\right]
$$
第一项同样是一个旋转不变的振幅，我们已经在11.1中分析过了。现在来看看第二项代表了怎样的相互作用势，由于 $(p_1-p_2')^2$ 的形式存在，我们会预测其和交换势有点关系。假设四动量的分量形式为：
$$
\begin{align}
&p_1=(\sqrt{p^2+m^2},\vec e\,p),\quad p_2=(\sqrt{p^2+\mu^2},-\vec e\,p)\\
&p_1'=(\sqrt{p^2+m^2},\vec e'\,p),\quad p_2'=(\sqrt{p^2+\mu^2},-\vec e'\,p)
\end{align}
$$
则
$$
(p_1-p_2')^2
-m^2=\left(\sqrt{p^2+m^2}-\sqrt{p^2+\mu^2}\right)^2-2p^2(1+\cos\theta)-m^2=\left(\sqrt{p^2+m^2}-\sqrt{p^2+\mu^2}\right)^2-\Delta_C^2-m^2
$$
因此现在第二项的振幅可以写做：
$$
(\text{second term amplitude})\propto\dfrac{1}{\Delta_C^2+m^2-\left(\sqrt{p^2+m^2}-\sqrt{p^2+\mu^2}\right)^2}
$$
将其与交换势的形式对比:
$$
(\text{exchange amplitude})\propto\dfrac{1}{\Delta_C^2+\mu^2}\Rightarrow V(r)\propto\dfrac{\mathrm{e}^{-\mu r}}{r}
$$
可以看到其不完全是交换势，因为介子与核子的质量存在差异，但我们可以大致估计一下：强行做替换
$$
\mu^2\to m^2-\left(\sqrt{p^2+m^2}-\sqrt{p^2+\mu^2}\right)^2
$$
因此力程：
$$
R^{-2}=m^2-\left(\sqrt{p^2+m^2}-\sqrt{p^2+\mu^2}\right)^2<m^2
$$
实际上，真实介子与核子的质量比大致为 $7:1$，因此在 $p\to 0$ 的极限下：
$$
\lim_{p\to 0}R^{-2}=2m\mu-\mu^2\approx\dfrac{13}{49}m^2\sim\dfrac14m^2
$$
而在 $p\to \infty$ 的极限下回到 $m^2$。因此其渐近关系可表示为
$$
V(r)\propto\begin{cases}
\dfrac{\mathrm{e}^{-mr}}{r},\quad \text{as }\,p\to\infty\\
\\
\dfrac{\mathrm{e}^{-\frac12mr}}{r},\quad \text{as }\,p\to0
\end{cases}
$$
### 核子-反核子湮灭为介子对

$2.8\quad N+\bar N\to \phi+\phi$ 的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20251211203047.png" width="500">
</div>

其并没有什么新的东西，和核子-核子散射是比较类似的。实际上，我们会在下一次练习的Problem中处理它。在此先不提。

## 11.3 交叉对称性与 CPT 不变性

经过上面两个具体二体散射过程的讨论，我们接下来来探讨一些更为**一般性**的主题。不论是在上一章中讨论的核子-核子散射，还是上面的核子-反核子散射与核子-介子散射，实际上都可以概括为“两个粒子入射，发生散射，两个粒子出射”的过程。其最低阶的振幅有下面的形式：
$$
i\mathcal A_{fi}=(-ig)^2\left[\dfrac{i}{(\cdots)^2-(\text{some mass})^2+i\epsilon}+\dfrac{i}{(\cdots)^2-(\text{some mass})^2+i\epsilon}\right]
$$
其中括号里面填的就是下面三种动量的线性组合：
$$
p_1-p_1',\quad p_1-p_2',\quad p_1+p_2
$$
其实就六种可能，但是总动量守恒使得其两两等价，因此就上面三种。这三种动量的线性组合分别引出了三个物理现象：依次为**Yukawa势**，**交换Yukawa势**，以及**能量本征态的极点**。我们已经对其进行了讨论，其均在非相对论量子力学的散射理论中存在对应物。
### 交叉对称性

下面，我们将说明这三种现象实际上同一件事的三个方面。这一件事称为**交叉(Crossing)**。
上面提到，这些散射过程实际上都是涉及到四个粒子的过程（两个入射，两个出射），我们可以用下面的图来描述这一类过程：

<div align="center">
  <img src="./pictures/Pasted image 20251211205431.png" width="300">
</div>

这样的图称为**交叉图**(crossing diagram)。

>[!important]
> 先来谈谈**约定**的问题：至今为止，我们的Feynman图都是规定为从右往左为时间正向，因此反方向（从左往右）的**线上面的箭头**暗示这是一个反粒子。（因为向内的箭头表示 $\psi$ 场，右侧为入射，因此为湮灭正粒子，左侧反之）因此，上面的图代表的散射过程为：
> $$1+2\to\bar 3+\bar 4$$
> 同时，我们还统一规定动量箭头都是向内的，因此能动量守恒条件为：
> $$p_1+p_2+p_3+p_4=0$$
>注意能量这里不能都是正的，实际上，我们约定入射粒子的 $p_r^0$ 为正。

为方便起见，我们定义以下三个变量：
$$
s=(p_1+p_2)^2=(p_3+p_4)^2,\quad t=(p_1+p_3)^2=(p_2+p_4)^2,\quad u=(p_1+p_4)^2=(p_2+p_3)^2
$$
这三个变量实际上就对应与一开始的三个动量的线性组合：
$$
p_1+p_2,\quad p_1-p_1',\quad p_1-p_2'
$$
因为在前面的各Feynman图中，我们一般取的约定为：
$$
p_1'=-p_3,\quad p_2'=-p_4
$$
这样四个动量的能量部分都是正的，是我们一般使用的四维动量。但是我们新的规范更具有对称性。
现在，我们可以从不同的方向来读这个图，比如从上往下读，会得到过程：
$$
1+3\to\bar 2+\bar 4
$$
等等。我们实际可以把任何两个粒子视为入射粒子，另外两个视为出射粒子。实际上，只有三种独立的过程，即
$$
1+2\to\bar 3+\bar 4,\quad 1+3\to \bar 2+\bar 4,\quad 1+4\to\bar 2+\bar 3
$$
我们没有考虑如 $3+4\to \bar 1+\bar 2$ 的另外三个过程，这将在后面对 $CPT$ 对称性的讨论中解释。好的，对于第一个过程，变量 $s$ 代表了总能量，而 $t,u$ 则代表两种可能的动量转移，我们称此过程为**s模式( s-channel process )**。对后两个过程，可以发现只是 $s,t,u$ 的地位轮换了，因此其分别称为**t模式**与**u模式**。
变量 $s,t,u$ 实际上刻画了所有交叉图代表的散射，其称为**Mandelstam变量**。但是，对于一个散射过程，显然只有两个参数是独立的，因此三个变量间存在一个恒等式：
$$
2(s+t+u)=3\sum_i p_i^2+2\sum_{i>j}p_i\cdot p_j=3\sum_im_i^2+2\sum_{i>j}p_i\cdot p_j
$$
其中 $m_i$ 为各粒子的质量。另一方面，由于能动量守恒，有
$$
0=\left(\sum_i p_i\right)^2=\sum_i m_i^2+2\sum_{i>j}p_i\cdot p_j
$$
因此
$$
s+t+u=\sum_i m_i^2
$$
这个恒等式是出奇的简洁。三个Mandelstam变量之和为固定值，因此只有两个独立自由度。我们可以用下面的图来刻画这一关系：

<div align="center">
  <img src="./pictures/Pasted image 20251211223550.png" width="500">
</div>

等边三角形内部的点到三条边的距离之和为一常数，即为等边三角形的高。同时，如果我们将外侧的距离定义为负数，则对平面这一结论都是成立的。平面上的点的坐标可以用Madelstam变量表示：
$$
\vec r=\dfrac23(s\vec e_s+t\vec e_t+u\vec e_u)
$$
图上的点称为**Mandelstam-Kibble plot**。实际上，上面的图在考虑三粒子衰变时同样是常用的（能量守恒条件为三个粒子能量和为常数），此时的点称为Dalitz plot。
现在，我们来考虑图上的各个区域分别代表了怎样的散射过程。实际上，并不是平面上的所有点都代表了实际的物理过程。为说明这一点，先假设各粒子质量相等。对于三角形内部的点，其三个Mandelstam变量都为正，但是我们知道其中一定有两个代表动量转移，而动量转移的平方必为零或负数。这是因为：
$$
(p-q)^2=p^2+q^2-2p\cdot q=m^2+m^2-2(m^2+|\vec p|(1-\cos\theta))\le 0
$$
当然我们这里假设了粒子质量相等，只是为了说明的确有的区域不能代表真实散射过程。因此，我们可以预见，对于真实的散射过程，应当会有两个变量为负，一个变量为正，且正的变量决定是哪一种模式（如 $s>0$ 就是 $s-$channel）。画在图上，即

<div align="center">
  <img src="./pictures/Pasted image 20251211230253.png" width="500">
</div>

可以看到，对 $s-$channel，$s$ 有一个极小值 $4m^2$，当然这也可以从其定义式中很容易看出来。
$$
s\equiv(p_1+p_2)^2\ge (m+m)^2=4m^2
$$
这称为 $s-$channel threshold。而另外两个变量 $t,u$ 则必须小于零，事实上，其分别是 $-\Delta^2,\Delta_C^2$ 。

>[!tip]
>对于质量不同粒子的散射，其允许区域的边界不会是上面这么漂亮的直线，而是一些奇怪的曲线（是四次方程的解）。但这不影响我们对其的定性讨论。

更具体一点，考虑下面的最简单的一个 $s-$channel散射过程：

<div align="center">
  <img src="./pictures/Pasted image 20251211230930.png" width="400">
</div>

其对应的振幅中含有的项为 $\dfrac{1}{(p_1+p_2)^2-m_5^2}=\dfrac{1}{s-m_5^2}$ ，这是一个亚纯函数，其有一个极点 $s=m_5^2$，但是其会出现在threshold以下。
到这里，你是否有一些感觉？我们再来看看这一项：
$$
\dfrac{1}{s-m_5^2}
$$
在 $s-$channel 中，其代表着**能量本征值的极点**，但是在 $t-$channel 和 $u-$channel 中呢？此时 $s<0$，其实际上代表了**Yukawa势**与**交换Yukawa势**。这就是为什么我们一开始说这三种现象是统一的：**三者只是同一个亚纯函数在复平面上三个不连通区域的限制形式**。

这一深刻的物理内涵来源于所谓的**交叉对称性**(crossing symmetry)。即使我们知道，这三者都在非相对论量子力学中出现过，但是交叉对称性确实是QFT的特色产物。可以想象的是，当我们逐渐退化回非相对论情形时，等效于取 $m\to\infty$，因此图中的等边三角形会越来越大，三个不连通区域最终会彼此离开，我们无法在同一个复平面上看到它们。三者的分离程度大致可以用 $\sim m^2$ 刻画。

### CPT 不变性

接下来，来填之前的坑。我们忽略了下面的散射过程：
$$
3+4\to\bar 1+\bar 2
$$
因为我说其与 $1+2\to\bar 3+\bar 4$ 相联系。这实际就是从相反的方向去读交叉图。我们做的是仅仅反转了所有四动量的符号，显然，其对应于Mandelstam图上的同一个点。由于Mandelstam变量不变，因此其**振幅也不变**。
另一方面，这两个过程实际上可以通过变换 $CPT$ 相联系。首先是 $C$，其将所有粒子变成其反粒子：
$$
C:1+2\to\bar 3+\bar 4 \longrightarrow \bar 1+\bar 2\to 3+4
$$
而 $T$ 将完成两件事：其将入射粒子与出射粒子交换，同时改变动量的符号。而 $P$ 正好又把动量的符号再改变一次，因此
$$
TP:\bar 1+\bar 2\to 3+4\longrightarrow 3+4\to\bar 1+\bar 2
$$
综上
$$
CPT:1+2\to\bar 3+\bar 4\longrightarrow3+4\to\bar 1+\bar 2
$$
这样，我们就证明了对于一个散射过程执行 $CPT$ 变换不会改变其振幅，因此理论具有 $CPT$ 不变性。
$$
\mathcal A_{fi}^{CPT}=\mathcal A_{fi}
$$
这便是著名的**CPT定理**。此结论是（非常非常）普适的，$CPT$ 不变性来源于我们宇宙的Lorentz不变性。事实上，在实验上已经观测到 $C,P,T$ 对称性的分别破坏，如弱作用不满足宇称守恒，K介子衰变过程的 $CP$ 破坏，但是 $CPT$ 对称性从未被打破。 

## 11.4 相空间与S矩阵

接下来，我们探讨一些更贴近实际的东西。前面用这么多的散射过程作为例子，来计算其Feynman振幅。其与S矩阵相联系，而S矩阵的矩阵元又与微分散射截面 $\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}$ 相联系，后者才是我们真正的可测量量。这一节我们就来推导如何计算微分散射截面。

>[!tip]
>先提醒一下，到现在为止，我们说的散射并不是狭义的指一个粒子在势场中的偏转，而是广义的包含了所有**态之间的跃迁过程**。而微分散射截面也并不是指单位时间散射到单位立体角的粒子数，而是指进入末态**相空间中单位体积元**的概率。为了避免混淆，以后我们都称其为**微分跃迁概率**。在连续谱下，谈论跃迁至某一精确态的概率是没有意义的，你只能讨论跃迁至末态相空间中某一块区域的概率。

首先，为了我们能合理的归一化我们的波函数，先考虑一个边长为 $L$ 的盒子，假设所有散射都发生在这个盒子中。此时的动量是离散谱：
$$
\vec p=\dfrac{2\pi}{L}(n_x,n_y,n_z),\quad n_i\in\mathbb{Z}
$$
归一化条件为：
$$
\langle\vec p'|\vec p\rangle=\delta_{\vec p'\vec p}
$$
这实际上等价于产生-湮灭算符的对易关系为：
$$
[a_{\vec p},a_{\vec p'}^\dagger]=\delta_{\vec p'\vec p}
$$
现在，我们的标量场展开式需要改写为：
$$
\phi(x)=\sum_{\vec p}\dfrac{1}{\sqrt V\sqrt{2E_{\vec p}}}\left(a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+a_{\vec p}^\dagger\,\mathrm{e}^{ip\cdot x}\right)
$$
原先连续谱下用于归一化的 $(2\pi)^{-3/2}$ 现在被替换为了 $V^{-1/2}$。我们来验证一下等时对易子：
$$
[\phi(\vec x,t),\dot\phi(\vec y,t)]=\sum_{\vec p}\dfrac{1}{V}\cdot\dfrac{1}{2E_\vec p}\left(\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}+\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}\right)\cdot iE_\vec p=\dfrac{i}{V}\sum_\vec p\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}=i\delta^{(3)}(\vec x-\vec y)
$$
最后一步即离散表象下的完备性关系。
现在，我们正式进入散射。跃迁概率为：
$$
(\text{transition probability})=|\langle f|S-1|i\rangle|^2
$$
但怎样来定义初态与末态呢？一个直接的想法是：
$$
|i\rangle=|\vec p_1,\vec p_2,\cdots,\vec p_n\rangle
$$
即直接取为多粒子态。但是，这在 $n\ge 2$ 时是存在问题的。当盒子的边长 $L\to\infty$ 时，由于每个粒子局域在某点附近的概率 $\propto V^{-1}$，因此各粒子之间接近的概率趋向于零，因此可以预见的是散射振幅也趋于零。通过对量级的分析，我们得到每多一个粒子，就要给态额外乘一个系数 $\sqrt V$。这样处理的意义在于：第一个粒子在单位体积中的概率为 $V^{-1}$，而剩下所有粒子在单位体积中的概率均为 $1$，这样在 $L\to\infty$ 下才能得到合理的散射振幅。我们马上来验证这一点。
也就是说，对单粒子态：
$$
|i\rangle=|\vec p\rangle
$$
这可以描述**衰变**过程。而对于双粒子态：
$$
|f\rangle=\sqrt V\,|\vec p_1,\vec p_2\rangle
$$
注意这里我们又取的是 $|\vec p\rangle$，与[Coleman QFT - Lecture 10. 质量重整化与费曼图](./Coleman%20QFT%20-%20Lecture%2010.%20%E8%B4%A8%E9%87%8F%E9%87%8D%E6%95%B4%E5%8C%96%E4%B8%8E%E8%B4%B9%E6%9B%BC%E5%9B%BE.md)中注意区分。
我们将 $S-1$ 的矩阵元写为下面的形式：
$$
\langle f|S-1|i\rangle=i\mathcal A_{fi}^{VT}(2\pi)^4\delta_{VT}^{(4)}(p_f-p_i)\prod_f
\left(\dfrac{1}{\sqrt V}\dfrac{1}{\sqrt{2E_{\vec p_f}}}\right)\prod_i
\left(\dfrac{1}{\sqrt{2E_{\vec p_i}}}\right)\dfrac{1}{\sqrt V}$$
为什么这与我们一开始看到的形式：
$$
\langle f|S-1|i\rangle=i(2\pi)^4\delta^{(4)}(p_f-p_i)\mathcal A_{fi}
$$
不同？这实际上就是来源于我们选取了不同的归一化关系，由于在离散表象下讨论问题，此时
$$
\langle 0|\phi(x)|\vec p\rangle=\dfrac{1}{\sqrt V\sqrt{2{E_{\vec p}}}}\mathrm{e}^{-ip\cdot x}
$$
因此每一根外线会贡献一个
$$
\dfrac{1}{\sqrt V\sqrt{2{E_{\vec p}}}}
$$
但是由于我们对 $|i\rangle$ 的额外乘的 $\sqrt V$ 因子，因此最终入射只会贡献一个 $1/\sqrt V$。
我们希望趋于连续情况时，有
$$
\lim_{V,T\to \infty}\mathcal{A}_{fi}^{VT}=\mathcal A_{fi}
$$
但这个 $\delta_{VT}^{(4)}(p_f-p_i)$ 呢？我们不太希望得到delta函数，因为我们最终是要对振幅平方的，delta函数的平方是“纯粹的垃圾”，我们不太会处理它。我将其的表达式显式的写在下面：
$$
(2\pi)^4\delta_{VT}^{(4)}(p)=\int\mathrm{d}^3\vec x\int_{-T/2}^{T/2}\mathrm{d}t\, f(t)\,\mathrm{e}^{ip\cdot x}
$$
显然有
$$
\lim_{V,T\to \infty}\int\mathrm{d}^3\vec x\int_{-T/2}^{T/2}\mathrm{d}t\, f(t)\,\mathrm{e}^{ip\cdot x}=\int\mathrm{d}^4x\,\mathrm{e}^{ip\cdot x}=(2\pi)^4\delta^{(4)}(p)
$$
这是delta函数。但我们感兴趣的是其平方：
$$
\begin{align}
\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}|(2\pi)^4\delta_{VT}^{(4)}(p)|^2&=\int_V\mathrm{d}^3\vec x\int_V\mathrm{d}^3\vec x'\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\,\mathrm{e}^{-i\vec p\cdot(\vec x-\vec x')}\int\dfrac{\mathrm{d}\omega_{\vec p}}{2\pi}\left|\int_{-T/2}^{T/2}\mathrm{d}t\, f(t)\,\mathrm{e}^{i\omega_{\vec p}t}\right|\\&=\int_V\mathrm{d}^3\vec x\int_{-T/2}^{T/2}\mathrm{d}t\,|f(t)|^2=VT
\end{align}
$$
因此
$$
\lim_{V,T\to\infty}[(2\pi)^4\delta_{VT}^{(4)}(p)]^2=(2\pi)^4VT\delta^{(4)}(p)
$$
这实际上是一个渐近形式。这个形式比原先那个delta函数的平方好多了，我们知道了其与 $V,T$ 的渐近关系。
接下来，散射振幅的平方又如何与微分跃迁概率相联系呢？首先，我们要知道像空间中的体积元是什么。这可以直接由离散情形过渡到连续情形来确定：在一个体积元 $\mathrm{d}^3\vec p$ 中的状态数为
$$
\dfrac{n_xn_yn_z}{p_xp_yp_z}\mathrm{d}^3\vec p=\dfrac{V\mathrm{d}^3\vec p}{(2\pi)^3}
$$
当然，熟悉统计力学的人对这个表达式是很熟悉的（不要忘记我们在自然单位制下，分母实际上就是 $\hbar^3(2\pi)^3=h^3$）。因此，微分跃迁概率为：
$$
(\text{diff. trans. prob.})=(\text{trans.prob.})\times\prod_f\dfrac{V\mathrm{d}^3\vec p_f}{(2\pi)^3}=|\langle f|S-1|i\rangle|^2\times\prod_f\dfrac{V\mathrm{d}^3\vec p_f}{(2\pi)^3}
$$
代入前面的表达式得到：
$$
(\text{diff. trans. prob.})=|\mathcal A_{fi}|^2(2\pi)^4VT\delta^{(4)}(p_f-p_i)\times\left[\prod_{f}\dfrac{1}{2E_f}\dfrac{1}{V}\cdot\dfrac{V\mathrm{d}^3\vec p_f}{(2\pi)^3}\right]\left[\prod_i\dfrac{1}{2E_i}\right]\dfrac{1}{V}
$$
可以看到，微分跃迁概率与时间 $T$ 成正比，这其实是Fermi黄金定则。同时，易验证上面的所有 $V$ 都消掉了，因此我们可以放心的取 $V\to\infty$。单位时间的微分跃迁概率为：
$$
(\text{diff. trans. prob. per unit time})=(2\pi)^4\delta^{(4)}(p_f-p_i)|\mathcal A_{fi}|^2\prod_f\dfrac{\mathrm{d}^3\vec p_f}{(2\pi)^32E_f}\prod_i\dfrac{1}{2E_i}
$$
我们通常将上面的结果写为：
$$
(\text{diff. trans. prob. per unit time})=|\mathcal A_{fi}|^2D\prod_i\dfrac{1}{2E_i}
$$
其中 $D$ 称为末态的相对论性态密度：
$$
D=(2\pi)^4\delta^{(4)}(p_f-p_i)\prod_f\dfrac{\mathrm{d}^3\vec p_f}{(2\pi)^32E_f}
$$
这是一个Lorentz变换下的**标量**。
至此，我们完成了对散射的一般推导。用Feynman图算出Lorentz不变的散射振幅 $\mathcal{A}_{fi}$，然后再代入上面的公式，即可得到任意跃迁的跃迁率。下一章，我们将把上面的结果应用于实际的过程中，研究其又是如何与我们熟悉的那些物理过程相联系的。
