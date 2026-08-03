---
title: "Coleman QFT Lecture 2: 简单的多体理论"
---

## 2.1 二次量子化

**二次量子化**理论为我们提供了另一种描述量子系统的方法，具体内容参见文章[[二次量子化]]，这里仅做简单介绍。在初等量子力学中，我们往往假定粒子数是不变量。即便如此，我们仍可以使用二次量子化的语言，只需要求只有粒子数不变的过程才能发生就可以了。然而，我们有时候会遇到粒子数可变的情况，比如研究电子气时，费米面之上的电子数就不一定守恒，因为其可以与**费米海**中的粒子进行交换。在QFT中，粒子数可变成为了一个最为根本的想法，**粒子是场的激发**。此时，我们唯一可以使用的语言便是二次量子化的语言。
二次量子化下，系统的Hilbert空间称为**Fock空间**。其中包含了真空态(vacuum)、单粒子态、双粒子态等。我们取动量表象，则系统任一态可以一般性的展开为：
$$
|\Psi\rangle=\psi_0|0\rangle+\int\psi_1(\vec p)|\vec p\rangle\,\mathrm{d}^3\vec p+\dfrac{1}{2!}\int\psi_2(\vec p_1,\vec p_2)|\vec p_1,\vec p_2\rangle\mathrm{d}^3 p_1\mathrm{d}^3p_2+\cdots
$$
其中系数 $1/2!$ 的来源为：由于粒子的不可区分，$|\vec p_1,\vec p_2\rangle=|\vec p_2,\vec p_1\rangle$（这里假设是交换对称），故不失一般性地选取 $\psi_2(\vec p_1,\vec p_2)=\psi_2(\vec p_2,\vec p_1)$，因此积分实际上重复一次，因此除以一个2。类似的，对于n粒子态，前面系数为 $1/n!$。

**产生-湮灭算符**连接了不同粒子数的状态，由于我们在动量表象下讨论问题，产生算符为 $\hat a_{\vec p}^\dagger$，湮灭算符为 $\hat a_{\vec p}$。其基本对易关系为：
$$
[a_{\vec p},a_{\vec p'}]=[a_{\vec p}^\dagger,a_{\vec p'}^\dagger]=0,\quad [a_{\vec p},a_{\vec p'}^\dagger]=\delta_{\vec p\vec p'}=\delta^{(3)}(\vec p-\vec p')
$$
粒子数算符为 $N_{\vec p}=a_{\vec p}^\dagger a_{\vec p}$，系统总动量算符与哈密顿量为：
$$
\vec P=\sum_{\vec p}\vec p\,a_{\vec p}^\dagger a_{\vec p},\quad \hat H=\sum_{\vec p}\omega_{\vec p}\,a_{\vec p}^\dagger a_{\vec p}
$$
> [!tip]
> 这里没有很区分求和与积分，请自行辨别。对于连续的动量谱，上面的求和应当改为积分，Kronecker符号应该为Dirac函数 $\delta^{(3)}(\vec p-\vec p')$。

有了产生算符，我们可以很方便的从真空态构造任意多粒子态，例如：
$$
|\vec p_1\rangle\equiv a^\dagger_{\vec p}|0\rangle,\quad |\vec p_1,\vec p_2\rangle\equiv a^\dagger_{\vec p_1}a^\dagger_{\vec p_2}|0\rangle
$$

>[!example]
> 从产生-湮灭算符的对易关系我们可以推导出多粒子态的正交归一关系。首先我们约定真空态是归一的：
> $$\langle 0|0\rangle=1$$
> **单粒子态**：
> $$\langle \vec p'|\vec p\rangle=\langle 0|a_{\vec p}a_{\vec p}^\dagger|0\rangle=\delta^{(3)}(\vec p-\vec p')$$
> **双粒子态**：
> $$\langle \vec p_1',\vec p_2'|\vec p_1,\vec p_2\rangle=\langle 0|a_{\vec p_1'}a_{\vec p_2'}a_{\vec p_1}^\dagger a_{\vec p_2}^\dagger|0\rangle=\delta^{(3)}(\vec p_1'-\vec p_1)\delta^{(3)}(\vec p_2'-\vec p_2)+\delta^{(3)}(\vec p_1'-\vec p_2)\delta^{(3)}(\vec p_2'-\vec p_1)$$

## 2.2 Lorentz 不变性的讨论

上面的讨论都仅限于三维动量，我们接下来将其推广至四维。这并不是很难，在前一章[[Coleman QFT - Lecture 1. 在量子力学中引入相对论]]中，我们已经得到了Lorentz协变的态矢量：
$$
|p\rangle=(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}\,|\vec p\rangle
$$
因此，显然我们应当将四维产生-湮灭算符定义为：
$$
\alpha^\dagger(p)\equiv (2\pi)^{3/2}\sqrt{2\omega_{\vec p}}\;a_{\vec p}^\dagger\,,\quad \alpha(p)\equiv (2\pi)^{3/2}\sqrt{2\omega_{\vec p}}\;a_{\vec p}
$$
因此有：
$$
\alpha^\dagger(p)|0\rangle=|p\rangle
$$
以此类推可以构造出任意的**Lorentz协变的多粒子态**。Lorentz变换作用在多粒子态上的效果为：
$$
U(\Lambda)|p_1,p_2,\cdots ,p_n\rangle=|\Lambda p_1,\Lambda p_2,\cdots,\Lambda p_n\rangle
$$
产生-湮灭算符如何变换？利用：
$$
|\Lambda p\rangle=U(\Lambda)|p\rangle=U(\Lambda)\alpha^\dagger(p)|0\rangle=U(\Lambda)\alpha^\dagger(p)U^\dagger(\Lambda)|0\rangle
$$
因此其变换为：
$$
U(\Lambda)\alpha^\dagger(p)U^\dagger(\Lambda)=\alpha^\dagger
(\Lambda p)$$
对其他任意的多粒子态均可验证上面的变换式。取其共轭式即得湮灭算符的变换关系：
$$
U(\Lambda)\alpha(p)U^\dagger(\Lambda)=\alpha(\Lambda^{-1}p)
$$
> [!check]
> 对任意的多粒子态：
> $$U(\Lambda)|p_1,\cdots,p_n\rangle=U(\Lambda)\alpha^\dagger(p_1)\cdots\alpha^\dagger(p_n)|0\rangle=\alpha^\dagger(\Lambda p_1)\cdots\alpha^\dagger(\Lambda p_n)|0\rangle=|\Lambda p_1,\cdots,\Lambda p_n\rangle$$

顺便一提，平移变换算符为 $U(a)=\mathrm{e}^{iP\cdot a}$，其对态的变换为：
$$
U(a)|0\rangle=|0\rangle,\quad U(a)|p_1,\cdots,p_n\rangle=\exp\left(ia\cdot\sum_{i=1}^np_i\right)|p_1,\cdots,p_n\rangle
$$
可推导出产生-湮灭算符的变换关系：
$$
\mathrm{e}^{iP\cdot a}\alpha^\dagger(p)\mathrm{e}^{-iP\cdot a}=\mathrm{e}^{ip\cdot a}\alpha^\dagger(p),\quad \mathrm{e}^{iP\cdot a}\alpha(p)\mathrm{e}^{-iP\cdot a}=\mathrm{e}^{-ip\cdot a}\alpha(p)
$$








