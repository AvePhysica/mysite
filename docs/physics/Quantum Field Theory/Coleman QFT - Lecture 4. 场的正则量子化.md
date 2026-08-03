---
title: "Coleman QFT Lecture 4: 场的正则量子化"
---

**復習しましょう**：在[Coleman QFT - Lecture 3. 构建标量量子场](./Coleman%20QFT%20-%20Lecture%203.%20%E6%9E%84%E5%BB%BA%E6%A0%87%E9%87%8F%E9%87%8F%E5%AD%90%E5%9C%BA.md)中，我们由相对论因果律引入了标量场，并且利用几个假设得到了其具体形式。但是，如果要对每一个接下来的量子场理论都依照这一步骤，就显得有些麻烦了。而且，我们实际上不能预先知道更复杂的量子场应先天的满足那些性质。因此，我们需要一种构造量子场理论的普适方法。这就是这一节要讲的内容：即**场的正则量子化**。
下面的图显示了我们寻求的理论所处的位置：

<div align="center">
  <img src="./pictures/Pasted image 20251120192356.png" width="500">
</div>

从经典力学到量子力学，我们使用的是称为**正则量子化**的过程，而到经典场论的过程则是一个**连续化**的过程。因此我们可以预期，如果我们对经典力学同时进行这两个过程，就应当会得到我们需要的量子场论。我们先从经典力学开始：

## 4.1 经典力学

经典力学中，粒子（或系统）的状态由其广义坐标 $q^a(t)$ 与广义动量 $p_a(t)$ 描述。系统的拉格朗日量为切丛的函数：
$$
L=L(q^a(t),\dot q^a(t),t)
$$
而作用量为路径的泛函：
$$
S=\int_{t_1}^{t_2}\mathrm{d}t\,L(q^a,\dot q^a,t)
$$
真实路径要求作用量取极值，也就是说，在路径变分 $q^a\to q^a+\delta q^a$ 下，作用量的变分为零：$\delta S=0$。这里路径的变分为保持端点不变的变分：
$$
\delta q^a(t_1)=\delta q^a(t_2)=0
$$
广义动量 $p_a$ 定义为：
$$
p_a\equiv\dfrac{\partial L}{\partial \dot q^a}
$$
利用泛函变分：
$$
\delta S\simeq\int_{t_1}^{t_2}\mathrm{d}t\left[\left(\dfrac{\partial L}{\partial q^a}-\dfrac{\mathrm{d} p_a}{\mathrm{d}t}\right)\delta q^a\right]=0
$$
故可以得到Euler-Lagrange方程：
$$
\dfrac{\partial L}{\partial q^a}-\dfrac{\mathrm{d} p_a}{\mathrm{d}t}=0
$$
接下来，我们进入哈密顿力学。哈密顿量定义为拉格朗日量的勒让德变换：
$$
H\equiv p_a\,\dot q^a-L
$$
直接求其变分为：
$$
\delta H=\dot q^a\delta p_a-\dfrac{\partial L}{\partial q^a}\delta q^a=\dot q^a\delta p_a-\dot p_a\delta q^a
$$
可以得到哈密顿正则方程：
$$
\dfrac{\partial H}{\partial p_a}=\dot q^a,\quad \dfrac{\partial H}{\partial q_a}=-\dot p^a
$$
Arnold的书上提到，哈密顿力学实际上就是相空间中的几何学。其中最基本的内容是两个力学量的内积由其梯度的反对易的Poisson括号定义：
$$
\{f,g\}\equiv\dfrac{\partial f}{\partial q}\dfrac{\partial g}{\partial p}-\dfrac{\partial f}{\partial p}\dfrac{\partial g}{\partial q}
$$
这些就是对经典力学的简要概括。更多的内容这里就不多提了。
## 4.2 量子力学

在经典力学中，基本的Poisson括号为：
$$
\{q^a,q^b\}=\{p_a,p_b\}=0,\quad \{q^a,p_b\}=\delta_b^a
$$
将这些力学量视为在海森堡绘景下随时间演化的算符，并将Poisson括号换为对易子，即：
$$
[q^a(t),q^b(t)]=[p_a(t),p_b(t)]=0,\quad [q^a(t),p_b(t)]=i\delta_b^a
$$
这正是量子力学中的基本对易关系。哈密顿量的形式不变，其现在是算符 $q^a,p_a$ 的函数：
$$
\hat H=\hat H(p_a,q^a,t)
$$
对于任意力学量 $A$ ，其满足的海森堡方程为：
$$
\dfrac{\mathrm{d}A}{\mathrm{d} t}=i[H,A]+\dfrac{\partial A}{\partial t}
$$
实际上这是哈密顿正则方程的自然结论，这是因为：
$$
\dfrac{\mathrm{d}q^a}{\mathrm{d} t}=\dfrac{\partial H}{\partial p_a}=i[H,q^a],\quad \dfrac{\mathrm{d}p_a}{\mathrm{d} t}=-\dfrac{\partial H}{\partial q_a}=i[H,p^a]
$$
因此可以写为 $A=A(q^a,p_a,t)$ 的任意力学量满足海森堡方程。上面这一把基本泊松括号换为基本对易子的操作被称为**正则量子化**。

## 4.3 经典场论

在经典场论中，我们需要的初值条件是场在一个**固定**时刻 $t$ 以及**所有**位置 $\vec x$ 处的值。其与经典力学的类比关系是：
$$
q^a(t)\leftrightarrow\phi^a(\vec x, t),\quad t\leftrightarrow t,\quad a\leftrightarrow a,\vec x
$$
从这里便能看出来时间空间的不平权。时间仍作为演化参数，而位置坐标只是一个力学量的标记。
我们可以定义**拉格朗日量密度** $\mathcal L$ ：
$$
L=\int\mathcal L \,\mathrm{d}^3{\vec x}=\int\mathrm{d}^3{\vec x}\,\mathcal L (\phi^a(x),\partial _\mu\phi^a(x),x)
$$
注意此时的导数还包含对空间的导数。作用量则为：
$$
S=\int_{t_1}^{t_2}\mathrm{d}t\,L=\int\mathrm{d}^4x\,\mathcal L(\phi^a(x),\partial _\mu\phi^a(x),x)
$$
同样的，最小作用量原理给出：
$$
0=\delta S=\int\mathrm{d}^4x\left(\dfrac{\partial\mathcal L}{\partial\phi^a}\delta \phi^a+\dfrac{\partial\mathcal L}{\partial(\partial_\mu\phi^a)}\delta(\partial_\mu\phi^a)\right)\simeq\int\mathrm{d}^4x\left[\dfrac{\partial\mathcal L}{\partial\phi^a}+\partial_\mu\left(\dfrac{\partial\mathcal L}{\partial(\partial_\mu\phi^a)}\right)\right]\delta\phi^a
$$
定义广义动量密度：
$$
\pi_a^\mu=\dfrac{\partial\mathcal L}{\partial(\partial_\mu\phi^a)}
$$
则此时的EL方程为：
$$
\dfrac{\partial\mathcal L}{\partial\phi^a}-\partial_\mu\pi_a^\mu=0
$$
此时的类比为 $\pi_a^0(\vec x,t)\leftrightarrow p_a(t)$。

>[!example]
>考虑下面的拉格朗日量密度：
>$$\mathcal L=\pm \dfrac12(\partial_\mu\phi\partial^\mu\phi-m^2\phi^2)$$
>$$\pi^\mu=\pm\partial^\mu\phi$$
>E-L方程为：
>$$\partial_\mu\pi^\mu=\mp m^2\phi\Rightarrow \partial_\mu\partial^\mu\phi+m^2\phi=0$$
>这实际上就是KG方程。

接下来，我们向哈密顿力学迈进。上面的类比表明，哈密顿量密度的定义应为：
$$
\mathcal H=\pi_a\dot\phi^a-\mathcal L,\quad \pi_a\equiv\pi_a^0=\dfrac{\partial\mathcal L}{\partial\dot\phi^a}
$$
注意这里只取了**时间分量**的广义动量密度 $\pi_a^0$。哈密顿量即为：
$$
H=\int\mathrm{d}^3\vec x\,\mathcal H=\int\mathrm{d}^3\vec x\,(\pi_a\dot\phi^a-\mathcal L)
$$
>[!example]
>接着上面的例子，将拉格朗日量密度写为：
>$$\mathcal L=\pm \dfrac12(\dot\phi^2-|\nabla \phi|^2-m^2\phi^2)$$
>广义动量密度的时间分量：
>$$\pi=\dfrac{\partial\mathcal L}{\partial\dot\phi}=\pm\dot\phi$$
>哈密顿量密度为：
>$$\mathcal H=\pm \dfrac12(\dot\phi^2+|\nabla \phi|^2+m^2\phi^2)$$
>由正定性，上式应当取正号才是符合物理的。

## 4.4 量子场论

我们直接根据上面的类比关系，将量子力学中的基本对易关系推广至量子场中：
$$
[\phi^a(\vec x,t),\phi^b(\vec y,t)]=[\pi_a(\vec x,t),\pi_b(\vec y,t)]=0,\quad [\phi^a(\vec x,t),\pi_b(\vec y,t)]=i\delta^a_b\delta^{(3)}(\vec x-\vec y)
$$
这就是**场的正则量子化**过程，很简单不是吗？哈密顿算符即为：
$$
H=\int\mathrm{d}^3\vec x\,\mathcal H
$$
$\phi^a,\pi_a$ 的演化满足海森堡方程。（实际就是哈密顿正则方程量子化的结果）仍以我们上面给出的例子中的拉格朗日量与哈密顿量密度为例：
$$
\dot\phi(\vec x,t)=i[H,\phi(\vec x,t)]=i\int\mathrm{d}^3\vec y\,\dfrac12[\pi^2(\vec y,t),\phi(\vec x,t)]=i\int\mathrm{d}^3\vec y\,\pi(\vec y,t)(-i\delta^{(3)}(\vec x-\vec y))=\pi(\vec x,t)
$$
这实际上就是 $\pi_a$ 的定义式。另一方面：
$$
\dot\pi(\vec x,t)=i[H,\pi(\vec x,t)]=i\int\mathrm{d}^3\vec y\,\dfrac12\left\{[|\nabla_y\phi(\vec y,t)|^2,\pi(\vec x,t)]+m^2[\phi^2(\vec y,t),\pi(\vec x,t)]\right\}=\nabla^2\phi(\vec x,t)-m^2\phi(\vec x,t)
$$
即 $\phi(\vec x,t)$ 满足的运动方程为
$$
\ddot\phi(\vec x,t)=\nabla^2\phi(\vec x,t)-m^2\phi(\vec x,t)\Rightarrow (\,\square^2-m^2)\phi(x)=0
$$
这正是KG方程。当然，我们用哈密顿方法得到的结果应当与拉格朗日方法的结果一致。
可以看到，正则量子化过程完全无需考虑实际的物理条件是怎样的，因此其往往要更加直接。

## 4.5 正规序

现在，我们转向另一个话题。上面，我们得到了哈密顿量的表达式：
$$
H=\dfrac12\int\mathrm{d}^3
\vec x\,(\pi^2(\vec x,t)+|\nabla\phi(\vec x,t)|^2+\mu^2\phi^2(\vec x,t))$$
同时我们知道标量场的展开式为：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}(\,a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+a^\dagger_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)
$$
代入表达式中，逐项计算得：
$$
\begin{align}
\dfrac12\int\mathrm{d}^3\vec x\,\pi^2(\vec x,t)&=\dfrac12\iiint\dfrac{\mathrm{d}^3\vec x\,\mathrm{d}^3\vec p\,\mathrm{d}^3\vec p'}{2(2\pi)^3\sqrt{\omega_{\vec p}\omega_{\vec p'}}}(-i\omega_\vec p a_{\vec p}\,\mathrm{e}^{-ip\cdot x}+i\omega_{\vec p}a^\dagger_{\vec p}\,\mathrm{e}^{ip\cdot x}\,)(-i\omega_{\vec p'} a_{\vec p'}\,\mathrm{e}^{-ip'\cdot x}+i\omega_{\vec p'}a^\dagger_{\vec p'}\,\mathrm{e}^{ip'\cdot x}\,)\\&=\dfrac12\int\dfrac{\mathrm{d}^3\vec p}{2\omega_{\vec p}}[-\omega_{\vec p}^2(a_{\vec p}a_{-\vec p}\,\mathrm{e}^{-2i\,\omega_{\vec p}\,t}+a_{\vec p}^\dagger a_{-\vec p}^\dagger\,\mathrm{e}^{2i\,\omega_{\vec p}t})+\omega_{\vec p}^2(a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})]
\end{align}
$$
$$
\dfrac12\int\mathrm{d}^3\vec x\,|\nabla\phi(\vec x,t)|^2=\dfrac{1}{2}\int\dfrac{\mathrm{d}^3\vec p}{2\omega_{\vec p}}|\vec p|^2(a_{\vec p}a_{-\vec p}\,\mathrm{e}^{-2i\,\omega_{\vec p}\,t}+a_{\vec p}^\dagger a_{-\vec p}^\dagger\,\mathrm{e}^{2i\,\omega_{\vec p}\,t}+a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})
$$
$$
\dfrac12\int\mathrm{d}^3\vec x\,\mu^2\phi^2(\vec x,t)=\dfrac12
\int\dfrac{\mathrm{d}^3\vec p}{2\omega_{\vec p}}\mu^2(a_{\vec p}a_{-\vec p}\,\mathrm{e}^{-2i\,\omega_{\vec p}\,t}+a_{\vec p}^\dagger a_{-\vec p}^\dagger\,\mathrm{e}^{2i\,\omega_{\vec p}\,t}+a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})
$$
综上可得：
$$
\begin{align}
H&=\dfrac{1}{2}\int\dfrac{\mathrm{d}^3\vec p}{2\omega_{\vec p}}\left[(a_{\vec p}a_{-\vec p}\,\mathrm{e}^{-2i\,\omega_{\vec p}\,t}+a_{\vec p}^\dagger a_{-\vec p}^\dagger\,\mathrm{e}^{2i\,\omega_{\vec p}t})\times(\underbrace{-\omega_{\vec p}^2+|\vec p|^2+\mu^2}_{0})+(a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})\times(\underbrace{\omega_{\vec p}^2+|\vec p|^2+\mu^2}_{2\omega_{\vec p^2}})\right]\\&=\dfrac12\int\mathrm{d}^3\vec p\,(a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})\,\omega_{\vec p}
\end{align}
$$
然而，我们期待的形式却是：
$$
H=\int\mathrm{d}^3\vec p\,(a_{\vec p}^\dagger a_{\vec p})\,\omega_{\vec p}
$$
事实上，这两个哈密顿量间相差了一个无穷大，这是因为
$$
\dfrac12\int\mathrm{d}^3\vec p\,(a_{\vec p}a_{\vec p}^\dagger+a_{\vec p}^\dagger a_{\vec p})\,\omega_{\vec p}=\int\mathrm{d}^3\vec p\,\left(a_{\vec p}^\dagger a_{\vec p}+\dfrac12[a_{\vec p},a_{\vec p}^\dagger]\right)\,\omega_{\vec p}=\int\mathrm{d}^3\vec p\,\left(a_{\vec p}^\dagger a_{\vec p}+\dfrac12\delta^{(3)}(\vec 0)\right)\,\omega_{\vec p}
$$
然而，一个绝对的能量是无法测量的，我们能测量的只有相对能量。因此，我们轻率的丢弃这一项“无穷大的常数项”。然而，我们最好还是统一一下这两种方式得到的哈密顿量形式。为此，引入一种排序产生-湮灭算符顺序的约定，称为**正规序**(normal ordering)：
设 $\{\phi^{a_1}(x_1),\phi^{(a_2)}(x_2),\cdots,\phi^{a_n}(x_n)\}$ 为一组自由标量场，其按正规序的积记为：
$$
:\phi^{a_1}(x_1)\phi^{(a_2)}(x_2)\cdots\phi^{a_n}(x_n):
$$
即正规序积记为 $:(\cdots):$ 。其含义为对于这些场的展开式中的产生湮灭算符，统一**先作用湮灭算符，后作用产生算符**。也就是说，产生算符在左侧而湮灭算符在右侧。简单举一个例子：
$$
:aa^\dagger:\,=\,:a^\dagger a:\,=a^\dagger a
$$
上面的哈密顿量的表达式可以用正规序积表示为：
$$
H=\dfrac12\int\mathrm{d}^3
\vec x\,(:\pi^2+|\nabla\phi|^2+\mu^2\phi^2:)=\int\mathrm{d}^3\vec p\,(a_{\vec p}^\dagger a_{\vec p})\,\omega_{\vec p}
$$
先预告一下，在后面我们在做时间演化算符的微扰展开时，Dyson级数被表示为[Coleman QFT - Problem 1](./Coleman%20QFT%20-%20Problem%201.md)中提到的**时序积**，但为了方便求矩阵元，我们希望将其化为**正规序**的形式。这一步骤由QFT中重要的**Wick定理**实现。

---










