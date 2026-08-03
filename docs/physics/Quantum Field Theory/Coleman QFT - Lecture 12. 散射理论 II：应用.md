---
title: "Coleman QFT Lecture 12: 散射理论 II：应用"
---

这一章将利用[[Coleman QFT - Lecture 11. 散射理论 I：Mandelstam变量、CPT和相空间]]最后得出的微分跃迁概率与Feynman振幅的关系，计算其在一些实际物理过程中的应用。为了防止你已经不记得，我将结论抄在下面：
$$
(\text{diff. trans. prob. per unit time})=|\mathcal A_{fi}|^2D\prod_i\dfrac{1}{2E_i},\quad D=(2\pi)^4\delta^{(4)}(p_f-p_i)\prod_f\dfrac{\mathrm{d}^3\vec p_f}{(2\pi)^32E_f}
$$
本章将讨论五个主题。

## 12.1 衰变

衰变过程就是指初态为单粒子态的跃迁过程。衰变的单位时间微分跃迁概率记为 $\mathrm{d}\varGamma$，而总的单位时间跃迁概率记为 $\varGamma$。即
$$
\mathrm{d}\varGamma=\dfrac{\text{diff. decay. prob.}}{\text{unit time}}=\dfrac{1}{2E_p}|\mathcal A_{fi}|^2D
$$
对全体末态求和即得 $\varGamma$。一般而言，我们喜欢在质心系（或零动量系）考虑问题，对衰变而言即为初态是静止的单粒子，因此
$$
\dfrac{\text{rest decay. prob.}}{\text{unit time}}=\varGamma=\dfrac{1}{2m}\sum_f\int|\mathcal{A}_{fi}|^2D
$$
由于 $|\mathcal{A}_{fi}|^2D$ 是Lorentz不变的，因此对于非静止系，只需要将 $m$ 换成入射粒子能量 $E_p$ 即可：
$$
\dfrac{\text{decay. prob.}}{\text{unit time}}=\dfrac{m}{E_p}\varGamma=\dfrac{\mathrm{d}\tau}{\mathrm{d} t}\varGamma
$$
也就是说，运动粒子的寿命会比静止粒子长，具体相差一个Lorentz因子$\gamma$。

## 12.2 双粒子散射

现在，来考虑入射态是双粒子态的散射过程。在[[Coleman QFT - Lecture 11. 散射理论 I：Mandelstam变量、CPT和相空间]]中，我们提到此时的初态归一化方式为：
$$
|i\rangle=\sqrt V|\vec p_1,\vec p_2\rangle
$$
其表示粒子2在单位体积内出现的概率为1。接下来，我们来求流的强度，其刻画了粒子1与粒子2“接近”彼此的速率。考虑下面的示意图：

<div align="center">
  <img src="./pictures/Pasted image 20251215170818.png" width="500">
</div>

流的强度定义为单位时间穿过单位面积的粒子数，其表示为：
$$
(\text{flux})=\dfrac{\text{(density)$\times$(volume)}}{\text{(area)$\times$(time)}}=\dfrac{|\vec v_1-\vec v_2|At}{At}=|\vec v_1-\vec v_2|
$$
注意密度是1。因此，微分散射截面为：
$$
\mathrm{d}\sigma=\dfrac{\text{diff. decay. prob.}}{\text{unit time}\times\text{unit flux}}=\dfrac{1}{4E_1E_2}\dfrac{1}{|\vec v_1-\vec v_2|}|\mathcal A_{fi}|^2D
$$
>[!tip]
>注意这里是非相对论性的相对速度 $|\vec v_1-\vec v_2|$，而非Lorentz不变的相对论性相对速度。我们并没有换到某一种粒子的静止系。

总截面 $\sigma$ 为：
$$
\sigma=\underbrace{\dfrac{1}{4E_1E_2}\dfrac{1}{|\vec v_1-\vec v_2|}}_{\text{not Lorentz invariance}}\times\underbrace{\sum_f\int|\mathcal A_{fi}|^2D}_{\text{Lorentz invariance}}
$$
注意前半部分（与入射态有关）不是Lorentz不变的，因此散射截面也不是Lorentz不变的。
我们可以更进一步：考虑质心系，设两粒子都沿 $x$ 轴运动，其四动量写为：
$$
p_1=(E_1,p_1,0,0),\quad p_2=(E_2,p_2,0,0),\quad p_{1}=-p_2=|\vec p_i|
$$
则
$$
E_1E_2|\vec v_1-\vec v_2|=E_1E_2\left|\dfrac{p_1}{E_1}-\dfrac{p_2}{E_2}\right|=|p_1E_2-p_2E_1|=E_T|\vec p_i|
$$
其中 $E_T=E_1+E_2$ 为入射总能量，总截面即为：
$$
\sigma=\dfrac{1}{4E_T|\vec p_i|}\sum_f\int|\mathcal A_{fi}|^2D
$$
最后再提一下，关于散射截面的一个直观理解就是沿入射方向的粒子看到的散射面积有多大，因此我们自然会觉得这样一个面积在Lorentz变换下会扭曲变形，从而不是Lorentz不变的。但是，沿面积法向（也就是入射方向）的boost似乎不应该改变截面大小。我们拿上面的例子来看看：由于
$$
E_1E_2|\vec v_1-\vec v_2|=|p_1E_2-p_2E_1|=|\epsilon^{23\mu\nu}p_{1\mu}p_{2\nu}|
$$
其中 $\epsilon^{\mu\nu\rho\lambda}$ 是全反对称四阶张量。显然，上面的右侧表达式在 $(0,1)$ 平面内的Lorentz变换下是不变的，而这正是沿 $x$ 轴的boost。因此我们验证了猜想。

## 12.3 末态为双粒子态时的态密度

现在，我们来处理 $D$。假设末态为双粒子，同时假设我们仍在质心系中，则末态满足：
$$
\vec p_T=\vec p_3+\vec p_4=0,\quad E_T=E_3+E_4
$$
$D$ 的表达式为：
$$
D=(2\pi)^4\delta^{(4)}(p_i-p_f)\dfrac{\mathrm{d}^3\vec p_3}{(2\pi)^32E_3}\dfrac{\mathrm{d}^3\vec p_4}{(2\pi)^32E_4}
$$
其中，由于 $\vec p_4=-\vec p_3$（这对应于delta函数中的 $\delta^{(3)}(\vec p_3+\vec p_4)$），因此我们可以直接完成对 $\vec p_4$ 的积分：
$$
D=(2\pi)^4\delta^{(4)}(E_3+E_4-E_T)\dfrac{\mathrm{d}^3\vec p_3}{(2\pi)^3\,4E_3E_4}
$$
注意这里的 $E_4$ 代表动量为 $-\vec p_3$ 粒子的能量。接下来，取球坐标，则积分变为：
$$
D=(2\pi)^4\delta^{(4)}(E_3+E_4-E_T)\dfrac{|\vec p_3|^2\mathrm{d}|\vec p_3|\mathrm{d}\varOmega_3}{(2\pi)^3\,4E_3E_4}
$$
我们知道，delta函数中的 $E_3+E_4-E_T$ 实际上是 $|\vec p_3|$ 的函数，因此我们可以完成对 $\mathrm{d}|\vec p_3|$ 的积分：
$$
D=\dfrac{|\vec p_3|^2\mathrm{d}\varOmega_3}{16\pi^2E_3E_4}\left|\dfrac{\partial(E_3+E_4)}{\partial |\vec p_3|}\right|^{-1}
$$
假设出射粒子的静质量为 $m_3,m_4$，则
$$
E_3+E_4=\sqrt{m_3^2+|\vec p_3|^2}+\sqrt{m_4^2+|\vec p_3|^2}
$$
因此
$$
\left|\dfrac{\partial(E_3+E_4)}{\partial |\vec p_3|}\right|^{-1}=\left[|\vec p_3|\left(\dfrac{1}{E_3}+\dfrac{1}{E_4}\right)\right]^{-1}=\dfrac{E_3E_4}{|\vec p_3|E_T}
$$
最终得到：
$$
D=\dfrac{1}{16\pi^2}\dfrac{|\vec p_f|\,\mathrm{d}\varOmega_f}{E_T}
$$
这个结果是很简洁的。接下来看两个例子：

>[!example]
>- 计算质心系中的二体散射的**微分散射截面** $\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}$：
> 利用已经得到的结论：
> $$\mathrm{d}\sigma=\dfrac{1}{4E_1E_2}\dfrac{1}{|\vec v_1-\vec v_2|}|\mathcal A_{fi}|^2D=\dfrac{1}{4E_T|\vec p_i|}|\mathcal A_{fi}|^2\dfrac{1}{16\pi^2}\dfrac{|\vec p_f|\,\mathrm{d}\varOmega_f}{E_T}$$
>最终整理得到：
>$$\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{1}{64\pi^2E_T^2}\dfrac{|\vec p_f|}{|\vec p_i|}|\mathcal A_{fi}|^2$$
>对于**非弹性散射**过程，由于入射粒子与出射粒子的质量差异，一般而言有 $|\vec p_f|\ne|\vec p_i|$。你可能觉得这看上去有点问题，因为在时间反演下入射和出射粒子会交换，因此截面也会变。但这是正常的，我们只要求振幅 $\mathcal A_{fi}$ 是时间反演不变的，但是截面是可以变的。
>在非相对论的量子散射理论中，散射振幅与微分散射截面相联系：
>$$\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=|f(p,\cos\theta)|^2$$
>因此我们得到：
>$$f(p,\cos\theta)=\dfrac{c}{8\pi E_T}\mathcal A_{fi},\quad |c|=1$$
>上面的式子存在一个相位自由度，在后面，我们会证明散射理论中著名的**光学定理**，那时会说明 $c=1$。

>[!example]
>- 我们来考察Model 3中所谓的介子衰变为核子对的过程：
>$$\phi\to N+\bar N$$
>该过程的最低阶的Feynman图即为一个基本顶角，其贡献为：
>$$-ig(2\pi)^4\delta^{(4)}(p+p-q)$$
>对应的Feynman振幅为：
>$$i\mathcal A_{fi}=-ig$$
>因此质心系中的衰变率为：
>$$\varGamma=\dfrac{1}{2E_i}\int|\mathcal A_{fi}|^2D=\dfrac{1}{2\mu}\int|\mathcal A_{fi}|^2\dfrac{1}{16\pi^2}\dfrac{|\vec p_f|\,\mathrm{d}\varOmega_f}{E_T}=\dfrac{g^2}{8\pi\mu^2}|\vec p_f|$$
>由于$E_T=\mu=2\sqrt{|\vec p_f|^2+m^2}$，代入得到：
>$$\varGamma=\dfrac{g^2}{16\pi\mu^2}\sqrt{\mu^2-4m^2}$$
>当然，上式在 $\mu<2m$ 时没有任何意义，这其实是真实的条件：介子是稳定的，不会衰变成核子对。


## 12.4 光学定理

我们早已在非相对论的量子散射理论中遇到过光学定理(Optical Theorem)，其将 $\theta=0$ 的散射振幅的虚部与总散射截面相联系：
$$
\mathrm{Im}\,f(\,\vec p\,,\theta=0)=\dfrac{|\vec p|}{4\pi}\sigma
$$

可以参考[[AQM_Note 6]]。在QFT的散射理论中也有相似的定理。此时我们用Feynman振幅 $\mathcal A_{fi}$ 代替散射振幅 $f(p,\cos\theta)$。定理表述为：
$$
\mathrm{Im}\,\mathcal A_{ii}=2E_T|\vec p_i|\sigma
$$
**证明**：为证明此定理，我们要用到 $S$ 矩阵的幺正性：
$$
S^\dagger S=SS^\dagger=1
$$
因此
$$
(S-1)(S^\dagger-1)=2-S-S^\dagger=-[(S-1)+(S^\dagger -1)]\tag{*}
$$
我们知道
$$
\langle f|S-1|i\rangle=i\mathcal A_{fi}(2\pi)^4\delta^{(4)}(p_f-p_i),\quad \langle f|S^\dagger-1|i\rangle=-i\mathcal A_{if}^*(2\pi)^4\delta^{(4)}(p_f-p_i)
$$
因此
$$
\langle f|S-1|i\rangle+\langle f|S^\dagger-1|i\rangle=(2\pi)^4\delta^{(4)}(p_f-p_i)(i\mathcal A_{fi}-i\mathcal A_{if}^*)
$$
另一方面
$$
\langle f|(S-1)(S^\dagger-1)|i\rangle=\sum_m\langle f|(S-1)|m\rangle\langle m|(S^\dagger-1)|i\rangle=\sum_m\mathcal A_{fm}\mathcal A_{im}^*(2\pi)^8\delta^{(4)}(p_m-p_i)\delta^{(4)}(p_m-p_f)
$$
上面要对所有中间态求和。我们可以对不同粒子数的中间态分类，则
$$
\sum_m=\sum_{r=1}^\infty\dfrac{1}{r!}\prod_{n=1}^r\int\dfrac{\mathrm{d}^3\vec q_n}{(2\pi)^32E_n}
$$
利用(\*)式，我们得到：
$$
(2\pi)^4\delta^{(4)}(p_f-p_i)(i\mathcal A_{if}^*-i\mathcal A_{fi})=\sum_{r=1}^\infty\dfrac{1}{r!}\prod_{n=1}^r\int\dfrac{\mathrm{d}^3\vec q_n}{(2\pi)^32E_n}\mathcal{A}_{fm}\mathcal A_{im}^*(2\pi)^4\delta^{(4)}(p_m-p_i)
$$
现在，我们取 $f=i$，则
$$
i(\mathcal A_{ii}^*-\mathcal A_{ii})=2\,\mathrm{Im} \,\mathcal A_{ii}=\sum_{r=1}^\infty\dfrac{1}{r!}\prod_{n=1}^r\int\dfrac{\mathrm{d}^3\vec q_n}{(2\pi)^32E_n}|\mathcal{A}_{mi}|^2(2\pi)^4\delta^{(4)}(p_m-p_i)=\sum_m\int D\,|\mathcal A_{mi}|^2=4E_T|\vec p_i|\sigma
$$
因此
$$
\mathrm{Im}\,\mathcal A_{ii}=2E_T|\vec p_i|\sigma
$$
即我们证明了光学定理。
将其与非相对论中的光学定理相比较，得到：
$$
\mathrm{Im}\,f(\,\vec p\,,\theta=0)=\dfrac{1}{8\pi E_T}\mathrm{Im}\,\mathcal A_{ii}
$$
与我们前面得到的表达式：
$$f(p,\cos\theta)=\dfrac{c}{8\pi E_T}\mathcal A_{fi},\quad |c|=1$$
相比较，立刻得到 $c=1$。

## 12.5 末态为三粒子态时的态密度

这一节我们来讨论三粒子态。其实只是计算变得繁琐了一点，主要的思路没有变。在质心系中
$$
\sum_i\vec p_i=0\Rightarrow \vec p_3=-(\vec p_1+\vec p_2)
$$
而 $D$ 的表达式为：
$$
D=(2\pi)^4\delta^{(4)}(p_i-p_f)\dfrac{1}{(2\pi)^9}\dfrac{\mathrm{d}^3\vec p_1\mathrm{d}^3\vec p_2\mathrm{d}^3\vec p_3}{8E_1E_2E_3}
$$
类似的，将 $\mathrm{d}^3\vec p_3$ 的积分完成，并使用球坐标：
$$
D=\delta(E_1+E_2+E_3-E_T)\dfrac{1}{(2\pi)^5}\dfrac{p_1^2\,\mathrm{d}p_1\mathrm{d}\varOmega_1\cdot p_2^2\,\mathrm{d}p_2\mathrm{d}\varOmega_2}{8E_1E_2E_3}
$$
此时 $E_3$ 是 $p_1,p_2$ 以及两动量间夹角余弦值 $\cos\theta_{12}$ 的函数。我们的立体角积分可以化为：
$$
\mathrm{d}\varOmega_1\mathrm{d}\varOmega_2=\mathrm{d}\varOmega_1\mathrm{d}\phi_{12}\mathrm{d}(\cos\theta_{12})
$$
而
$$
E_3(\cos\theta_{12})=\sqrt{p_1^2+p_2^2+2p_1p_2\cos\theta_{12}+m_3^2}
$$
我们先将 $\mathrm{d}(\cos\theta_{12})$ 处理掉（这并不唯一，你也可以处理 $\mathrm{d}p_1$ 等）。因此假设 $p_1,p_2$ 是固定的，由能量守恒条件 $E_1+E_2+E_3=E_T$ 可求解出 $\cos\theta_{12}=\xi$，则
$$
\delta(E_1+E_2+E_3-E_T)=\delta(\cos\theta_{12}-\xi)\cdot\dfrac{1}{E_3'(\xi)},\quad E_3'(\xi)=\dfrac{\partial E_3}{\partial\cos\theta_{12}}\bigg|_{\cos\theta_{12}=\xi}=\dfrac{p_1p_2}{E_3}
$$
因此
$$
D=\dfrac{p_1\mathrm{d} p_1\cdot p_2\mathrm{d} p_2}{8E_1E_2}\mathrm{d}\varOmega_1\mathrm{d}\phi_{12}=\dfrac{1}{8(2\pi)^5}\mathrm{d}E_1\mathrm{d}E_2\mathrm{d}\varOmega_1\mathrm{d}\phi_{12}
$$
这里用到了 $p\,\mathrm{d}p=E\,\mathrm{d}E$。实际计算时，我们需要计算的积分是 $$\int|\mathcal A_{fi}|^2D$$
积分边界由 $\cos\theta_{12}\in[-1,+1]$ 确定，当然边界的形状不会很好看。但是我们至少知道态密度在 $(E_1,E_2)$ 平面上是均匀的。最后考虑一个例子：单粒子衰变成三个粒子。此时Feynman振幅 $\mathcal A_{fi}$ 是各向同性的，因此我们可以完成上面对角度的积分：
$$
D=\dfrac{1}{32\pi^3}\mathrm{d}E_1\mathrm{d}E_2
$$

## 12.6 预告：一个问题

下面，我将提出一个问题。这个问题将与我们后面几章讨论的东西有关。

>[!question]
>现在有一个外线不在质壳上的Feynman图，它将代表什么？

首先想到的：它可能是更大的一个Feynman图的内部部分，一个例子如下图所示：

<div align="center">
  <img src="./pictures/Pasted image 20251215201838.png" width="28%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20251215201852.png" width="25%" style="display: inline-block;">
</div>

另一个观点是：所有这些允许外部线脱离质壳的Feynman图，其将与称为**格林函数**的物理对象相联系。其能刻画我们的理论对外界源的响应。具体的内容将会留到下一章详细展开。

