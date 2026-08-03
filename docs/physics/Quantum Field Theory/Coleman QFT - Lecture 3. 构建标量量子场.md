---
title: "Coleman QFT Lecture 3: 构建标量量子场"
---

## 3.1 量子场的引入

**復習しましょう**：在[[Coleman QFT - Lecture 1. 在量子力学中引入相对论]]中，我们构造了Lorentz协变的单粒子态，然而通过对其传播子的计算表明，粒子的运动可能超光速，这是狭义相对论严格禁止的。
狭义相对论的最大速度为光速的限制，导致了**因果律**(Causality)。具体来说，我们考虑在两个时空点 $x,y$ 处进行的测量（注意这里已包含了测量的位置与实践），光速不可超越导致的因果律要求：若两个测量时空点之间的间隔是**类空的**，即 $(x-y)^2<0$，则其测量不会互相影响。
这启示我们：当我们谈到一个可观测量时，我们应当限制观测的时空点，也就是说需要区分**不同时空点测量的可观测量**。现在我们假设前面在两个时空点 $x,y$ 处进行测量的观测量为 $O_1,O_2$，相对论因果律要求：
$$
[O_1,O_2]=0,\quad \text{if $(x-y)^2<0$}
$$
这是因为不对易的算符之间的测量必然受到**不确定性原理**的约束。这样，原先的可观测量被扩展为**可观测量场**：即在每个时空点处分布着一些可观测量。我们将这个场记为 $\phi(x)$，或者还可能有一组这样的场 $\phi^a(x)$。这里的算符是时空的函数，所以我们处在**海森堡绘景**下。

>[!note]
>注意区分这里的场与波函数的概念。波函数 $\psi(x)$ 本质是从时空点到**复数**的映射，而可观测量场 $\phi(x)$ 是时空点到**算符**的映射。实际上，二次量子化中的**“二次”**，就是指建立一个算符场。

## 3.2 构造标量场

### 标量场满足的条件

现在，我们只有一组**标量场** $\phi^a(x)$。先假设这些 $\phi^a(x)$ 都是互相对易的。先假定其必须满足以下的条件：

1. Casualty：$$[\phi^a(x),\phi^a(y)]=0,\quad \text{if $(x-y)^2<0$}$$
2. Hemitian：$$ \phi^a(x)=\phi^a(x)^\dagger$$
3. Translations：$$ \mathrm{e}^{-iP\cdot y}\phi^a(x)\mathrm{e}^{iP\cdot y}=\phi^a(x-y)$$
4. Lorentz Transformations：$$U(\Lambda)^\dagger\phi^a(x)U(\Lambda)=\phi^a(\Lambda^{-1} a)$$
5. Linear combination assumption：$$\phi^a(x)=\int \mathrm{d}^3\vec p\,[F^a_{\vec p}(x)a_{\vec p}+G^a_{\vec p}(x)a^\dagger_{\vec p}\,]$$
上面的第四条是**标量场**的定义，即洛伦兹变换下的标量。至于为什么平移是 $-y$ 以及洛伦兹变换是 $\Lambda^{-1}$，可以理解为我对算符场做了一个**主动变换**，而这等效于对时空坐标点的**逆向被动变换**。

### 显式构造标量场

接下来我们来尝试构造满足上述条件的标量量子场。利用第三个条件：
$$
\phi(x)=\mathrm{e}^{iP\cdot x}\phi(0)\mathrm{e}^{-iP\cdot x}
$$
$\phi(0)$ 最一般的形式为：
$$
\phi(0)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f_p\,\alpha(p)+g_p\,\alpha^\dagger(p)]
$$
接下来来看Lorentz不变性：我们要求 $U(\Lambda)\phi(0)U(\Lambda)^\dagger=\phi(0)$，这是因为 $\Lambda 0=0$。则
$$
\phi(0)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f_p\,\alpha(p)+g_p\,\alpha^\dagger(p)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f_p\,\alpha(\Lambda p)+g_p\,\alpha^\dagger(\Lambda p)]
$$
注意上面的 $f_p,g_p$ 只是数而已，因此 $U(\Lambda)$ 可以直接“穿过去”。做换元 $p\to \Lambda p$，则
$$
\phi(0)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f_{\Lambda^{-1}p}\,\alpha(p)+g_{\Lambda^{-1}p}\,\alpha^\dagger(p)]
$$
由于 $\alpha(p),\,\alpha^\dagger(p)$ 是线性无关的算符，故表达式中其系数必须分别相等，也就是说：
$$
f_{\Lambda p}=f_p,\quad g_{\Lambda p}=g_p,\quad \forall\,\Lambda\in SO(3,1),\,p
$$
当然，$p$ 满足约束条件 $p^2=\mu^2$。由于通过Lorentz变换，我们实际上可以从超曲面上的一点到达其他的任意一点。也就是说，$f_p,g_p$ 必须在整个超双曲面上为**常数**。即
$$
f_p=f\,,\quad g_p=g
$$
因此标量场可写为：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f\,\mathrm{e}^{-ip\cdot x}\,\alpha(p)+g\,\mathrm{e}^{ip\cdot x}\,\alpha^\dagger(p)]
$$
> [!check]
> 可以直接显式验证上面的标量场满足Lorentz不变性：
> $$\begin{align}U^\dagger(\Lambda)\phi(x)U(\Lambda)&=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f\,\mathrm{e}^{-ip\cdot x}\,\alpha(\Lambda^{-1}p)+g\,\mathrm{e}^{ip\cdot x}\,\alpha^\dagger(\Lambda^{-1}p)]\\&=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f\,\mathrm{e}^{-i(\Lambda p)\cdot x}\,\alpha(p)+g\,\mathrm{e}^{i(\Lambda p)\cdot x}\,\alpha^\dagger(p)]\\&=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[f\,\mathrm{e}^{-ip\cdot (\Lambda^{-1}x)}\,\alpha(p)+g\,\mathrm{e}^{ip\cdot (\Lambda^{-1} x)}\,\alpha^\dagger(p)]\\&=\phi(\Lambda^{-1}x)
> \end{align}$$

总结一下，现在满足条件3，4和5的标量场具有下面的形式：
$$
\phi(x)=f\,\phi^{(+)}(x)+g\,\phi^{(-)}(x),\quad \phi^{(+)}(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\,\mathrm{e}^{-ip\cdot x}\,a_{\vec p},\quad \phi^{(-)}(x)=\phi^{(+)}(x)^\dagger
$$
现在我们来考察条件2，即**厄米性**。由于 $\phi^{(+)}(x)$ 与 $\phi^{(-)}(x)$ 互为厄米共轭，因此我们要求：
$$
g=f^*
$$
我们实际上能构造出两个线性无关的厄米标量场：
$$
\phi^1(x)=\phi^{(+)}(x)+\phi^{(-)}(x),\quad \phi^2(x)=i(\phi^{(+)}(x)-\phi^{(-)}(x))
$$
先假设这两个场都是可行的，也就是说任意形如 $a\phi^1(x)+b\phi^2(x)$ 的组合均为可观测量场($a,b\in \mathbb R$)。来看看其是否满足条件1，即因果性是否会被破坏。由于显然有 $[\phi^{(+)}(x),\phi^{(+)}(y)]=[\phi^{(-)}(x),\phi^{(-)}(y)]=0$，唯一需计算的是 $[\phi^{(+)}(x),\phi^{(-)}(y)]$：
$$
[\phi^{(+)}(x),\phi^{(-)}(y)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\,\int\dfrac{\mathrm{d}^3\vec p'}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p'}}}\,\mathrm{e}^{-ip\cdot x}\mathrm{e}^{ip'\cdot y}\delta^{(3)}(\vec p-\vec p')=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}(2\omega_{\vec p})}\mathrm{e}^{-ip\cdot (x-y)}\equiv \Delta _+(x-y)
$$
显然最终结果是 $x-y$ 的函数。另一个对易子显然为：
$$
[\phi^{(-)}(x),\phi^{(+)}(y)]=-\Delta_+(y-x)
$$
那么这个最后的积分如何计算呢？我们将其对 $x^0$ 求偏导，得到：
$$
\dfrac{\partial}{\partial x^0}\Delta_+(x)=-\dfrac{i}{2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\mathrm{e}^{-ip\cdot x}
$$
这个积分我们已经在第一章的传播子计算中算过了。得到的结论是积分的结果恒正。现在，我们来计算 $[\phi^1(x),\phi^2(y)]$：
$$
[\phi^1(x),\phi^2(y)]=i[\phi^{(-)}(x),\phi^{(+)}(y)]-i[\phi^{(+)}(x),\phi^{(-)}(y)]=-i(\Delta_{+}(x-y)+\Delta_+(y-x))
$$
我们要求 $(x-y)^2<0$ 时上面的对易子为零，但这是显然不正确的。因为其对 $x^0$ 的导数始终不为零。
我们再来算算 $[\phi^1(x),\phi^1(y)]$：
$$
[\phi^1(x),\phi^1(y)]=[\phi^{(-)}(x),\phi^{(+)}(y)]+[\phi^{(+)}(x),\phi^{(-)}(y)]=\Delta_+(x-y)-\Delta_+(y-x)\equiv i\Delta(x-y)
$$
这个式子会在 $(x-y)^2<0$ 时为零吗？幸运的是，这的确是正确的。说明这一点我们不需要做任何具体的计算。以下是证明：
写出 $\Delta_+(x-y)$ 的表达式：
$$
\Delta_+(x-y)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}(2\omega_{\vec p})}\mathrm{e}^{-ip\cdot (x-y)}
$$
可以明显地看出，其为一个Lorentz标量，即
$$
U(\Lambda)^\dagger\Delta_+(x)U(\Lambda)=\Delta_+(\Lambda x)=\Delta_+(x)
$$
同时，对于一个**类空矢量**，**存在一个Lorentz变换可以将其变为其相反的矢量**。具体可参照下面的双曲面图：

<div align="center">
  <img src="./pictures/Pasted image 20251118223609.png" width="300">
</div>

类时矢量处在上下的双曲面（灰色）上，其是不连通的，因此无法通过Lorentz变换将其从一支变到另一支上。而类时矢量处在侧面的双曲面上，其完全连通，因此可以有Lorentz变换得到其相反矢量。即
$$
\text{若 $x^2<0$ ,\quad 则存在Lorentz变换$\Lambda$，使 $\Lambda x=-x$}
$$
因此，综合这两个结论，我们得到：
$$
\Delta_+(x-y)=\Delta_+(y-x),\quad \text{if $(x-y)^2<0$}
$$
即 $(x-y)^2<0$ 时 $[\phi^1(x),\phi^1(y)]=0$。同样可验证，$[\phi^2(x),\phi^2(y)]$ 也为零。也就是说，我们不能两者都取，而只能取其中之一。
然而，实际上 $a_{\vec p}, a_{\vec p}^\dagger$ 是有一个相位的自由度的，即允许做变换：
$$
a_{\vec p}\to\mathrm{e}^{i\theta}a_{\vec p}\,,\quad a_{\vec p}^\dagger\to\mathrm{e}^{-i\theta}a_{\vec p}^\dagger
$$
因此这两种场实际上是等价的。不失一般性，我们直接取 $\phi^1(x)$ 作为标量场的一般形式，也就是说质量为 $\mu$ 的标量场具有下面的形式：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(\,a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+a^\dagger_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)
$$
## 3.3 另一个角度：Klein-Gordan方程

上面的过程并不是一般教科书中得到标量场的方法。上面构造的标量场满足的一个重要性质是所谓的**Klein_Gordan方程**：
$$
\square^2\phi(x)+\mu^2\phi(x)=0\tag{a}
$$
> [!check]
> 将标量场写为如下形式：
> $$\phi(x)=\int\dfrac{\mathrm{d}^4 p}{(2\pi)^3}\delta(p^2-\mu^2)\theta(p^0)(\alpha(p)\,\mathrm{e}^{-ip\cdot x}+\alpha^\dagger(p)\,\mathrm{e}^{ip\cdot x})$$
> $$\square^2 \,\phi(x)=\partial^\mu\partial_\mu\phi(x)=\int\dfrac{\mathrm{d}^4 p}{(2\pi)^3}\delta(p^2-\mu^2)\theta(p^0)(-p^2)(\alpha(p)\,\mathrm{e}^{-ip\cdot x}+\alpha^\dagger(p)\,\mathrm{e}^{ip\cdot x})$$
> 所以
> $$(\square^2+\mu^2)\phi(x)=\partial^\mu\partial_\mu\phi(x)=\int\dfrac{\mathrm{d}^4 p}{(2\pi)^3}\delta(p^2-\mu^2)\theta(p^0)(\mu^2-p^2)(\alpha(p)\,\mathrm{e}^{-ip\cdot x}+\alpha^\dagger(p)\,\mathrm{e}^{ip\cdot x})$$
> 可以看到在壳条件 $p^2=\mu^2$ 直接导致积分函数恒为零，因此KG方程成立。
> $$\square^2\phi(x)+\mu^2\phi(x)=0$$

第二个重要性质是我们已经得到的因果律条件：
$$
[\phi(x),\phi(y)]=i\Delta(x-y)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[\mathrm{e}^{-ip\cdot(x-y)}-\mathrm{e}^{ip\cdot(x-y)}]=0,\quad \text{if $(x-y)^2<0$}\tag{b}
$$
实际上，从这两个方程出发，而不是原先第五个条件，我们就可以重新构造出原先的标量场。下面是必要的步骤：

>[!hint]
>我们从KG方程出发，其解的一般形式为：
>$$\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(\,a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+b_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)$$
> 厄米性要求 $b_{\vec p}=a_{\vec p}^\dagger$ 。由方程 $[\phi(x),\phi(y)]=0$，我们可以得到算符的基本对易关系：
> $$[a_{\vec p},a_{\vec p}^\dagger]=\delta^{(3)}(\vec p-\vec p')$$
> 利用平移变换关系：
> $$\phi(x-a)=\mathrm{e}^{-iP\cdot x}\phi(x)\mathrm{e}^{iP\cdot x}$$
> 我们可以通过求导推导出 $a_{\vec p},\,a^\dagger_{\vec p}$ 与动量算符 $\vec P$ 以及哈密顿量 $\hat H$ 的对易关系。例如对时间求导：海森堡方程为
> $$\dfrac{\partial\phi(x)}{\partial t}=i[H,\phi(x)]$$
> $$\mathrm{LHS}=\dfrac{\partial}{\partial t}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(\,a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+b_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(-i\omega_{\vec p}\,a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+i\omega_{\vec p}a_{\vec p}^\dagger\,\mathrm{e}^{ip\cdot x}\,)$$
> $$\mathrm{RHS}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(\,i[H,a_{\vec p}]\,\mathrm{e}^{-ip\cdot x}+i[H,a^\dagger_{\vec p}]\,\mathrm{e}^{ip\cdot x}\,)$$
> 故
> $$[H,a_{\vec p}\,]=-\omega_{\vec p},\quad[H,a^\dagger_{\vec p}\,]=\omega_{\vec p}$$

接下来我要提到的一点是，第二个方程，即关于 $[\phi(x),\phi(y)]$ 的条件可以**被减弱**。我们考虑下面的**等时对易子**(equal time commutator)：
$$
[\phi(\vec x,t),\phi(\vec y,t)]=i\Delta(\vec x-\vec y)
$$
其间隔一定是类空的，因为$(\vec x-\vec y)^2=-|\vec x-\vec y|^2<0$，因此我们期望其结果为0。验证如下：

>[!check]
>$$[\phi(\vec x,t),\phi(\vec y,t)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}-\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}]=0$$
>因为被积函数为奇函数。

因此
$$
[\phi(\vec x,t),\phi(\vec y,t)]=0\tag{1b}
$$
另一个需要考虑的等时对易子是 $[\dot\phi(\vec x,t),\phi(\vec y,t)]$，其相当于对上式求 ${x^0}$ 的偏导：
$$
[\dot\phi(\vec x,t),\phi(\vec y,t)]=i\dfrac{\partial}{\partial x^0}\Delta(x-y)\bigg|_{x^0=t}
$$
直接交换积分与求导顺序得到：
$$
[\dot\phi(\vec x,t),\phi(\vec y,t)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[-i\omega_{\vec p}\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}-i\omega_{\vec p}\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}]=-i\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}=-i\delta^{(3)}(\vec x-\vec y)\tag{2b}
$$
因此前面的条件 $(b)$ 被我们拆成了两个条件 $(1b),(2b)$。现在，条件 $(a),(1b),(2b)$ 也足以推导出整个标量场理论。

>[!tip]
> 对这件事更本质的理解在于KG方程是一个对 $x^0$ 的二阶微分方程，其可等价的写为将 $\phi(y)$ 固定时**等时对易子满足的方程**：
> $$(\square^2_x+\mu^2)[\phi(x),\phi(y)]=0$$
>而条件 $(1b),(2b)$ 在实际上相当于给出了等时对易子的在 $x^0=t$ 时的初值与对 $x^0$ 导数的处置条件，由微分方程理论，这已经足以确定标量场 $\phi(x)$ 的形式。

最后，我要提的一点是：上面我们从一般的对易子 $[\phi(x),\phi(y)]$ 转向等时对易子 $[\phi(\vec x,t),\phi(\vec y,t)]$ 时，显然时间与空间不再平权（不然为什么我们没有考虑什么同一位置的对易子之类的）。这是正常的，因为我从没说过QFT中时间与空间平权。事实上，在后面还会谈到利用Lagrangian构建标量场，在这一步中更能看出时间与空间的不同。事实上，空间坐标应当视为一种“**标记**”，不同空间处的算符应当视为**不同**的可观测量，而同一位置、不同时间的算符则被视为同一算符的**时间演化**。

## 3.4 类比的启示

我们还能尝试计算一下 $[\dot\phi(\vec x,t),\dot\phi(\vec y,t)]$：
$$
[\dot\phi(\vec x,t),\dot\phi(\vec y,t)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3(2\omega_{\vec p})}[-\omega_{\vec p}^2\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}+\omega_{\vec p}^2\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}]=0
$$
仍是因为被积函数是奇函数。

>[!summary]
> 总结一下，我们得到的三个等时对易子为：
> $$[\phi(\vec x,t),\phi(\vec y,t)]=[\dot\phi(\vec x,t),\dot\phi(\vec y,t)]=0,\quad [\dot\phi(\vec x,t),\phi(\vec y,t)]=-i\delta^{(3)}(\vec x-\vec y)$$

回忆：在初等量子力学的海森堡绘景下，一个最为基本的概念是坐标与动量的对易子：
$$
[q^a(t),q^b(t)]=[p^a(t),p^b(t)]=0,\quad [p^a(t),q^b(t)]=-i\delta^{ab}
$$
可以看出，这些对易子与上面的等时对易子有强烈的类比关系：将位置坐标 $\vec x,\vec y$ 视为**标记** $a,b$，标量场视为广义坐标，其时间导数视为广义动量，即可得到完全相同的对易关系。这将会引导我们迈向下一章：即一个标准的用拉格朗日量与哈密顿量的**正则量子化**步骤。

---
















