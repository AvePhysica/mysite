---
title: "Coleman QFT Lecture 1: 在量子力学中引入相对论"
---

## 1.1 准备工作

初等量子力学专注于考虑非相对性的情形，一个典型的例子是，对于球对称势的散射问题，其具有 $SO(3)$ 的旋转对称性。现在我们想要将其推广至相对论情形。因此，上面的对称性暗示着我们需要一个有Lorentz不变性的理论。
### 能量修正量级的考虑

在非相对论量子力学中，定态微扰理论给出能量的直到二阶的修正为：
$$
\delta E_0=\langle 0|\delta V|0\rangle+\sum_{n\ne 0}\dfrac{|\langle0|\delta V|n\rangle|^2}{E_0-E_n}
$$
这说明我们需要对一切可能的中间态进行求和。
这与相对论修正有什么关系呢？实际上在一个典型的散射过程中，在一定能量下有可能产生额外的粒子，如下面的过程是可能的：
$$
p+p\to p+p+\pi^0
$$
而动能与静能之比正是 $(v/c)^2$ 。因此，多粒子态对能量的修正与相对论性修正应当处于同一量级。也就是说，如果我们要将量子力学推广至相对论情形，我们就不得不考虑粒子数不守恒对能量的修正。
### 自然单位制

自然单位制是物理学家常用来简化问题（偷懒）的方法，具体来说，选取物理量
$$
\hbar=c=4\pi\epsilon_0=k_B=1
$$
这样所有物理量的量纲均为能量的次幂，也就是单位全部可以表示为 $eV^k$ 的形式。一些常用物理量的量纲为：
$$
[M]=[E]=[T]^{-1}=[L]^{-1}
$$
后面的表达式中如果感觉量纲不太对，比如差一个 $c$ 或 $\hbar$ 。那多半是使用自然单位制导致的。
### 闵氏度规与Lorentz群

在相对论的情形下，使用四矢量描述物理量往往是方便的。甚至可以说狭义相对论就是建立在**闵氏时空**上的几何学。闵氏时空是配备了闵氏度规 $\eta_{\mu\nu}$ 的四维时空。关于 $\eta_{\mu\nu}$ 的选取有两种方法，分别称为西海岸度规和东海岸度规，即 $\eta=\mathrm{diag}(1,-1,-1,-1)$ 和 $\eta=\mathrm{diag}(-1,1,1,1)$。在QFT中一般更加习惯于使用前者，因此后面都遵从前者的定义（其实是我比较适应西海岸度规）。闵氏时空中的坐标点由四维矢量 $x^\mu=\{x^0,x^1,x^2,x^3\}=\{t,\vec x\}$ 刻画。同样的，能量与动量合成四矢量 $p^\mu=(E,\vec p)$ 。
矢量有协变与逆变之分，带上标的矢量是**逆变矢量**，带下标的矢量是**协变矢量**。度规可用于升降指标：
$$
a_\mu=\eta_{\mu\nu}a^\nu,\quad b^\mu=\eta^{\mu\nu}b_\nu
$$
微分算子也有相应的四矢量形式：
$$
\partial_\mu\equiv\dfrac{\partial}{\partial x^\mu}=\left(\dfrac{\partial}{\partial t},\nabla\right)
$$
其模方称为 **d'Alembert 算符**：
$$
\square\equiv\partial_\mu\partial^\mu=(\partial^0)^2-\nabla^2
$$
两个四矢量的内积定义为：
$$
a\cdot b=a^\mu b_\mu=a^0b_0+a^1b_1+a^2b_2+a^3b_3=a^0b^0-\vec a\cdot\vec b
$$
洛伦兹变换由 $4\times4$ 矩阵 $\Lambda^\mu_\nu$ 描述：
$$
\Lambda: x^\mu\to x'^{\mu}=\Lambda^\mu_\nu x^\nu\equiv\Lambda x
$$
其定义为不改变任意两个四矢量内积的变换：
$$
\Lambda x\cdot\Lambda y=x\cdot y,\quad \forall\,x,y
$$
全体洛伦兹变换 $\Lambda$ 构成**洛伦兹群** $O(3,1)$ 。然而，这个群实际上是不连通的，其有四个连通分支，其中一个中含有恒等变换 $I$ ，其构成**特殊洛伦兹群** $SO(3,1)$，剩下三个可以由宇称 $P$ 与时间反演 $T$ 作用在 $SO(3,1)$ 上得到。$SO(3,1)$ 是 $O(3,1)$ 的子群。实际上，我们一般更为关心可以由恒等变换连续得到的特殊洛伦兹群 $SO(3,1)$，因此也往往直接称其为洛伦兹群。当我们提到洛伦兹不变性时，一般是指其在 $SO(3,1)$ 下不变。
四矢量按其模长分为三类：
$$
a^\mu\text{ is called}\begin{cases}
\text{timelike},\quad a^2>0\\
\text{spacelike},\quad a^2<0\\
\text{null},\quad a^2=0
\end{cases}
$$
对于两个时空点 $x,y$ ，其**间隔**定义为 $(x-y)^2$，同样可按上面的标准将其分为三类。
在四维时空中的傅里叶变换我们约定为以下形式：
$$
\tilde F(k)\equiv\int\mathrm{d}^4x\,F(x)\,\mathrm{e}^{ik\cdot x},\quad F(x)=\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\tilde F(k)\,\mathrm{e}^{-ik\cdot x}
$$
即每一个对波矢的积分都要除以一个 $2\pi$。

## 1.2 构造Lorentz不变的单粒子态

现在，我们来尝试构造一个相对论性的单粒子态理论。我们知道，在非相对论情形下，单粒子态的Hilbert空间的基可以取为动量算符 $\hat P$ 的本征态：
$$
\hat P\,|\vec p\rangle=\vec p\,|\vec p\rangle
$$
在没有外势场的情况下，其也为能量本征态：
$$
\hat H\,|\vec p\rangle=\dfrac{\vec p^2}{2\mu}|\vec p\rangle
$$
其中 $\mu$ 代表粒子（静）质量。而在相对论情形下，由于我们只是改变了能量-动量关系，因此粒子的态同样可完全由其动量描述，即 $|\vec p\rangle$ 仍构成一组基，此时其对应的能量本征值为：
$$
\hat H\,|\vec p\rangle=\sqrt{|\vec p|^2+\mu^2}\,|\vec p\rangle\equiv\omega_{\vec p}\,|\vec p\rangle
$$
然而，我们还不确定我们这样定义的基能否满足**Lorentz不变性**。这里先提一下，所谓的Lorentz不变性指在 $SO(3,1)$ 下态的内积模方不变。在确认这一点之前，我们先来看看我们所期望的平移不变性与 $SO(3)$ 旋转不变性。

> [!example]
> **平移不变性**：平移算符 $U(a)$ 由一个平移四矢量 $a^\mu$ 确定，其满足以下性质：
> $$U(a)U(a)^\dagger=1,\quad U(0)=1,\quad U(a)U(b)=1$$
> 其生成元正是动量算符：
> $$U(a)=\mathrm{e}^{i\hat P\cdot a},\quad \hat P^\mu=(\hat H,\hat P)$$
> 其作用在动量本征态上的效果是：
> $$U(a)|\vec p\rangle=\mathrm{e}^{i(\omega_{\vec p}a^0-\vec p\cdot \vec a)}|\vec p\rangle$$
> 因此其只是加了一个相位，故显然保持内积的模方不变。
> 
> **旋转不变性**：三维旋转算符 $U(R)$ 由一个三维空间旋转 $R\in SO(3)$ 确定，其满足：
> $$ U(R)U(R)^\dagger=1,\quad U(I)=1,\quad U(R_1)U(R_2)=U(R_1R_2)$$
> 其对算符的作用是：
> $$ U(R)^\dagger \hat PU(R)=R\hat P,\quad U(R)^\dagger\hat HU(R)=\hat H$$
> 可验证，由下面定义给出的旋转算符满足上面的所有关系：
> $$U(R)\,|\vec p\rangle=|R\vec p\rangle$$
> 我们来验证其中一条：
> $$ U(R)^\dagger \hat PU(R)=U(R)^\dagger\hat P\int\mathrm{d}^3\vec p\,|\vec p\rangle\langle\vec p| U(R)=\int\mathrm{d}^3\vec p\,\vec p\,|R^{-1}\vec p\rangle\langle R^{-1}\vec p|=\int\mathrm{d}^3\vec p\,R\vec p\,|\vec p\rangle\langle \vec p|=R\vec P$$
> 其中用到了 $\mathrm{d}^3\vec p$ 在旋转下不变。

**Lorentz不变性**：现在我们来验证这一点。前面已经提到，我们无需四个分量来刻画粒子态，因为粒子的四动量需要满足约束 $p^2=\mu^2$，这一条件也称为**在壳(On-Shell)条件**，现在的粒子态我可以写为 $|\omega_{\vec p},\,\vec p\rangle=|\vec p\rangle$。我们先将其记为态 $|p\rangle$。直觉上，Lorentz变换对态的变换应该为：
$$
U(\Lambda)|p\rangle=|\Lambda p\rangle
$$
同时，我们期望四动量算符 $P^\mu$ 是矢量算符，也就是说：
$$
U(\Lambda)^\dagger\hat P^\mu U(\Lambda)=\Lambda\hat P^\mu
$$
然而，这是不正确的！可以使用上面验证旋转不变的步骤试一试。这是由于我们定义的 $|p\rangle$ 就是原先的 $|\vec p\rangle$ ，其正交关系与完备关系为：
$$
\langle p'|p\rangle=\delta^{(3)}(\vec p-\vec p'),\quad \int\mathrm{d}^3\vec p\,|p\rangle\langle p|=I
$$
然而，$\mathrm{d}^3 p$ 并不是Lorentz变换下的不变量，因此上面那步换元是无法进行的。
这是由于我们选取的完备性关系不是一个Lorentz变换下“好的”关系，事实上，真正Lorentz不变的积分测度是**四维体积元** $\mathrm{d}^4 p$。但是显然不能直接取其作为积分测度，因为态必须满足**在壳条件**。必须先将能量部分的积分先完成：
$$
\int_{p^0=-\infty}^{+\infty}\mathrm{d}^4p\,\delta(p^2-\mu^2)\theta(p^0)=\dfrac{\mathrm{d}^3\vec p}{2\omega_{\vec p}}
$$
 $\theta(x)$ 是阶跃函数，在 $x>0$ 时取1，$x<0$时为0。这一测度才是Lorenzt不变的三维测度。从图像上理解，粒子态被束缚在四维时空的一个超双曲面的一支上。我们实际上是求出了曲面各处的超面积。
 
<div align="center">
  <img src="./pictures/Pasted image 20251118112532.png" width="500">
</div>

因此，需要的完备性关系为：
$$
\dfrac{1}{(2\pi)^3}\int\dfrac{\mathrm{d}^3\vec p}{2\omega_{\vec p}}\,|p\rangle\langle p|=I
$$
这里的 $(2\pi)^3$ 只是一种规范的选取。故我们的态应当定义为：
$$
|p\rangle=(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}\;|\vec p\rangle
$$
这一理论便是Lorentz不变的。总结一下，我们将Lorentz变换算符定义为：
$$
U(\Lambda)|p\rangle\equiv|\Lambda p\rangle
$$
则其满足如下的关系：
$$
U(\Lambda)U(\Lambda)^\dagger
=1,\quad U(I)=I,\quad U(\Lambda_1)U(\Lambda_2)=U(\Lambda_1\Lambda_2),\quad U(\Lambda)^\dagger\hat P^\mu U(\Lambda)=\Lambda\hat P^\mu
$$

## 1.3 传播子的计算

在量子力学中，我们计算过非相对性下自由粒子的传播子，现在我们来计算一下相对论性自由粒子的传播子。
考虑初始时定域于 $\vec x=0$ 处的波函数：
$$
\langle \vec x|\psi\rangle=\delta^{(3)}(\vec x)
$$
其演化为：
$$
\langle\vec x|\mathrm{e}^{-i\hat Ht}|\psi\rangle=\int\dfrac{\mathrm d^3\vec p}{(2\pi)^3}\,\mathrm{e}^{i\vec p\cdot \vec x-i\omega_{\vec p}t}
$$
用球坐标积分：设 $|\vec x|=r$
$$
\mathrm{RHS}=\int_0^\infty
\dfrac{p^2\mathrm{d}p}{(2\pi)^2}\mathrm{e}^{-i\omega_{\vec p }t}\int_0^\pi\mathrm{e}^{ipr\cos\theta}\sin\theta\,\mathrm{d}\theta=\dfrac{1}{(2\pi)^2r}\int_{-\infty}^{+\infty}\mathrm{d}p\,p\,\mathrm{e}^{ipr-i\omega_{\vec p }t}
$$
这一积分可用留数定理化简。可以看到，$\omega_{\vec p}$ 是多值函数，其两个分支点为 $p=\pm i\mu$。取下面的割线以及围道，大圆弧上的积分趋于零，故原先的积分等于割线左右路径的积分。

<div align="center">
  <img src="./pictures/Pasted image 20251118110807.png" width="500">
</div>

在割线左右 $p=iy$：
$$
\omega_{\vec p}=\begin{cases}
i\sqrt{y^2-\mu^2},\quad x=0^+\\
-i\sqrt{y^2-\mu^2},\quad x=0^-
\end{cases}
$$
故原先的积分等于：
$$
\langle\vec x|\mathrm{e}^{-i\hat Ht}|\psi\rangle=\dfrac{i}{(2\pi)^2r}\int_\mu^\infty\mathrm{d} y\,y\,\mathrm{e}^{-ry}\sinh\left(\sqrt{y^2-\mu^2}\,t\right)
$$
这个积分我们还是没法积，但是我们可以看到积分函数是恒正的，因此结果也一定不是零，也就是说粒子在任意短的时间 $t$ 内便会扩散至全空间。我们可以确定一个传播子的上界：
$$
\langle\vec x|\mathrm{e}^{-i\hat Ht}|\psi\rangle<\dfrac{i}{(2\pi)^2r}\int_\mu^\infty\mathrm{d} y\,y\,\mathrm{e}^{-(r-t)y}=\mathrm{e}^{-(r-t)\mu}\left(\dfrac{1}{(r-t)^2}+\dfrac{\mu}{r-t}\right)
$$
也就是至少按 ${r-t}$ 的指数衰减。
这一非定域性是与相对论的基本假设——**速度不超过光速**相矛盾的。也就是说，我们费这么大力气构造出的Lorentz不变的单粒子态理论与相对论是存在冲突的。问题出在哪？这将引出**多粒子态与量子场**的概念。

---






