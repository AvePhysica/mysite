---
title: "Coleman QFT Lecture 9: 微扰理论 II：发散与抵消项"
---

在[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)中，我们给出了三个Model，并且用Wick图精确求解了第一个Model。本章我们来处理Model 2，其Hamiltonian density为：
$$
\mathcal H_I=g\,\phi(x)\rho(\vec x)
$$
即有一个不变的源 $\rho(\vec x)$。我们人为引入一个**绝热开关**：
$$
H_I(t)=g\int\mathrm{d}^3\vec x\,\phi(x)\rho(\vec x)\to f(t,T,\Delta)H_I(t)
$$
## 9.1 抵消项(counterterm)

由于实际上源是不变的，因此其无法从真空中激发出介子。这其实可以由前面对Model 1的讨论中得到：
$$
\tilde\rho(p)\equiv\int\mathrm{d}^4x\,\mathrm{e}^{ip\cdot x}\rho(x)
$$
当 $\rho$ 与 $t$ 无关时，只有 $E=0$ 的态有贡献。但是 $\omega_{\vec p}>\mu>0$，因此其不含任何发生跃迁的振幅。
现在，我们加上了一个绝热开关。我们当然希望其在 $T\to\infty$ 时回到源不变的结果。也就是说：
$$
\lim_{T\to\infty }\langle 0|U_I(T,-T)|0\rangle=1
$$
应当被满足。但真是这样吗？
我们先引入几个符号：设 $|0\rangle$ 为 $\hat H_0$ 的基态（也就是真空态），而 $|0\rangle_P$ 为真实哈密顿量 $\hat H$ 的基态。我们来看看一开始的真空态在缓慢加上源又缓慢撤掉后会发生怎样的演化。

|                  时间                   |                                               态矢量                                                |
| :-----------------------------------: | :----------------------------------------------------------------------------------------------: |
| $t<-\left(\dfrac{T}{2}+\Delta\right)$ |                         没有源的作用，哈密顿量就是 $\hat H_0$，此时的态就是真空态 $\|0\rangle$。                         |
|            $t=-\dfrac T2$             | 源已经完全加上，由绝热定理，状态将演化至存在源时的基态 $\mathrm{e}^{-i\gamma_-}\|0\rangle_P$，其中 $\gamma_-$ 为取决于加上源的过程的额外相位。 |
|             $t=\dfrac T2$             |            此时态在源不变下演化，变为 $\mathrm{e}^{-i(\gamma_-+E_0T)}\|0\rangle_P$，其中 $E_0$ 为基态能量。            |
| $t>\left(\dfrac{T}{2}+\Delta\right)$  |              同样的，由于绝热定理，态将演化到  $\mathrm{e}^{-i(\gamma_-+\gamma_++E_0T)}\|0\rangle$               |

因此
$$
\langle 0|U_I(\infty,-\infty)|0\rangle=\mathrm{e}^{-i(\gamma_++\gamma_-+E_0T)}\ne 1
$$
也就是说，我们人为加上的绝热开关导致了一个**额外的相位**。不论我们加入地有多慢，这一相位都是始终存在的。为了消除这个不想要的相位因子，一个简单的方法是向我们的Interaction Hamiltonian中加入额外的一项：
$$
H_I\to\left[\,g\!\int\mathrm{d}^3\vec x\,\phi(x)\rho(\vec x)-a\right]f(t)
$$
这一项称为**抵消项**(counterterm)。$a$ 仅仅只是一个数。我们取
$$
a\int f(t)\,\mathrm{d}t=a(T+O(\Delta))=\gamma_++\gamma_-+E_0T
$$
由于 $\Delta/T\to 0$，因此显然有
$$
a=E_0
$$
此时我们有
$$
\langle0|U_I(\infty,-\infty)|0\rangle=1
$$
## 9.2 求解S矩阵

我们看到，上面引入抵消项的本质原因在于当存在不变的源 $\rho(\vec x)$ 时，系统的基态能量 $E_0\ne 0$。这里要提一下，我们实际上只验证了真空态的情形，但我们有理由相信这对其他的态都是成立的。因为在遥远的过去，各个介子波包应当足够远离源，因此其能量的修正应与真空态的情形相同。然而，对于Model 3，情况就完全不一样了。即使粒子离源足够远，介子与核子间的相互作用将仍然存在，因此其能量修正会与真空态有所区别。

下面我们通过计算S矩阵来确实的说明这一点。此时的哈密顿量为：
$$
H_I=\left[\,g\!\int\mathrm{d}^3\vec x\,\phi(x)\rho(\vec x)-a\right]f(t)
$$
将涉及到三个连通Wick图：
<div align="center">
  <img src="./pictures/Pasted image 20251203111548.png" width="30%" style="display: inline-block;">
  <img src="./pictures/Pasted image 20251203111559.png" width="27.8%" style="display: inline-block;">
</div>
<div align="center">
  <img src="./pictures/Pasted image 20251203111609.png" width="500">
</div>
其中前两个我们已经在Model 1中遇到过了，而第三个为抵消项对应的Wick图。其分别代表的算符为：

$$
O_1=-ig\int\mathrm{d}^3\vec x\,\mathrm{d}t\,\rho(\vec x)\phi(x)f(t)
$$
$$
O_2=(-ig)^2\int\mathrm{d}^4x_1\mathrm{d}^4x_2\,\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)\rho(\vec x_1)\rho(\vec x_2)f(t_1)f(t_2)
$$
$$
O_3=ia\int\mathrm{d}t\,f(t)
$$
S矩阵为：
$$
S=U_I(\infty,-\infty)=\;:\exp\left(\dfrac{O_1}{1!}+\dfrac{O_2}{2!}+\dfrac{O_3}{1!}\right):
$$
其中 $O_2,O_3$ 只是纯数(c-number)。因此上面可以简单写为：
$$
S=\mathrm{e}^{(2)+(3)}:\mathrm{e}^{(1)}:
$$
注意到，当我们计算 $\langle 0|S|0\rangle$ 时，$:e^{(1)}:$ 只有展开的零阶项不为零，因此：
$$
\langle 0|S|0\rangle=\mathrm{e}^{(2)+(3)}=1
$$
即 $(2)+(3)=0$。因此如果我们想要知道基态能量 $E_0$ ，就只需要计算 $O_2$ 就行了。这会在下一节进行演示。现在我们还是集中于S矩阵的计算。
现在，我们知道了
$$
S=\;:\mathrm{e}^{(1)}:\;=\;:\exp\left(-ig\int\mathrm{d}^3\vec x\,\mathrm{d}t\,\rho(\vec x)\phi(x)f(t)\right)
$$
使用在[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)中对Model 1一模一样的计算：
$$
O_1=-ig\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\left(\tilde f(\omega_{\vec p})\tilde\rho(\vec p)a_{\vec p}+\tilde f(\omega_{\vec p})^*\tilde\rho(\vec p)^*a_{\vec p}^\dagger\right)
$$
现在，什么是 $\tilde f(\omega_{\vec p})$ ？我们知道对于很大的 $T$，$f(t)$ 接近于一个恒为1的常函数。其傅里叶变换显然为：
$$
\tilde f(\omega_{\vec p})=\int\mathrm{d} t\,\mathrm{e}^{-i\omega_{\vec p}t}f(t)\to2\pi\delta(\omega_{\vec p})
$$
然而 $\omega_{\vec p}>\mu$ ，因此其为正定的，因此最终的结果为零。最终得到：
$$
\lim_{T\to\infty}O_1=0\Rightarrow\lim_{T\to\infty}S=1
$$
也就是说不会产生任何在不同粒子态之间的跃迁。这样我们就证明了对任何粒子态，我们一开始的期望是成立的。

## 9.3 计算基态能量

前面提到了，抵消项满足的条件为：
$$
\lim_{T\to\infty}\left(\dfrac{O_2}{2}+O_3\right)=0
$$
利用
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x_1-x_2)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
则
$$
\dfrac{O_2}{2}=\lim_{\epsilon\to0^+}\dfrac{-ig^2}{2}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\dfrac{1}{(p^0)^2-|\vec p|^2-\mu^2+i\epsilon}|\tilde\rho(\vec p)|^2|\tilde{f}(p^0)|^2
$$
现在，我们知道在 $T$ 很大时，$\tilde{f}(p^0)$ 在 $p^0=0$ 附近为一个尖峰。因此，我们可以先将被积函数其他部分的 $p^0$ 取为零。即
$$
\dfrac{O_2}{2}=\dfrac{-ig^2}{2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\dfrac{|\tilde{\rho}(\vec p)|^2}{|\vec p|^2+\mu^2}\int\dfrac{\mathrm{d}p^0}{2\pi}|\tilde f(p^0)|^2
$$
接下来，利用**Parselval's Theorem**：
$$
\int\dfrac{\mathrm{d}p^0}{2\pi}|\tilde f(p^0)|^2=\int\mathrm{d}t\,|f(t)|^2=T+O(\Delta)
$$
而
$$
O_3=ia\int\mathrm{d}t\,f(t)=ia(T+O(\Delta))
$$
因此在 $T\to\infty$ 的极限下，有
$$
E_0=a=-\dfrac{g^2}{2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\dfrac{|\tilde{\rho}(\vec p)|^2}{|\vec p|^2+\mu^2}
$$
注意到这是一个负的能量。这就是系统的基态。
我们还能更进一步。因为源 $\rho(x)$ 与场 $\phi(x)$ 都是时空坐标的函数，因此我们自然会希望将能量写为下面的形式：
$$
E_0=-\dfrac{g^2}{2}\int\mathrm{d}^3 x\,\mathrm{d}^3y\,\rho(\vec x)V(\vec x-\vec y)\rho(\vec y),\quad V(\vec x)\equiv\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\dfrac{\mathrm{e}^{i\vec p\cdot\vec x}}{|\vec p|^2+\mu^2}
$$
与之类比的，在电动力学中，对于一个不变的电荷分布 $\rho(\vec x)$，体系的能量为：
$$
E=\dfrac{1}{2}\int\mathrm{d}^3\vec x\,\mathrm{d}^3\vec y
\,\dfrac{\rho(\vec x)\rho(\vec y)}{|\vec x-\vec y|}
$$
也就是说电动力学中的Coulomb势由现在的 $V(\vec x)\displaystyle\equiv\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\dfrac{\mathrm{e}^{i\vec p\cdot\vec x}}{|\vec p|^2+\mu^2}$ 所取代。现在，这个积分是可以直接积出来的：
我们设 $|\vec p|=p,|\vec x|=r$，则
$$
V(r)=\int_0^\infty\dfrac{2\pi p^2\,\mathrm{d}p}{(2\pi)^3(p^2+\mu^2)}\int_0^\pi\mathrm{e}^{-ipr\cos\theta}\,\mathrm{d}\theta=-\dfrac{i}{(2\pi)^2r}\int_{-\infty}^\infty\dfrac{p\,\mathrm{e}^{ipr}}{p^2+\mu^2}\,\mathrm{d}p
$$
后面这个积分用留数法就很简单。取上半平面的大圆弧，圆弧上的积分由Jordan引理保证为零，其围住的奇点为 $p=i\mu$，则
$$
V(r)=-\dfrac{i}{(2\pi)^2r}\cdot 2\pi i\left(\dfrac{i\mu\mathrm{e}^{-\mu r}}{2i\mu}\right)=\dfrac{\mathrm{e}^{-\mu r}}{4\pi r}
$$
可以看到，最后的形式是非常简洁而优美的。其是Coulomb势的 $r^{-1}$ 再加上指数衰减项 $\mathrm{e}^{-\mu r}$ 的结果。这个相互作用势称为**汤川势(Yukawa potential)**。
这里的 $\rho(\vec x)$ 可以视为一种“核子密度分布”，因为核子能与介子相互作用。因此，我们得到了核子间的相互作用势即为汤川势。考虑最简单的情形，现在有两个固定的核子，其通过交换介子相互作用。其密度分布可用delta函数描述为：
$$
\rho(\vec x)=\delta^{(3)}(\vec x-\vec x_1)+\delta^{(3)}(\vec x-\vec x_2)
$$
我们可以立刻写出其之间的相互作用势为：
$$
V_{int}(\vec x_1,\vec x_2)=-g^2\dfrac{\mathrm{e}^{-\mu|\vec x_1-\vec x_2|}}{4\pi\,|\vec x_1-\vec x_2|}
$$
但这不是全部，积分式中实际上还有两个核子的自能项。然而不幸的是，显然自能项是发散的，就像我们在电动力学中试图求解电子自能时的情形一样。更具体一点，从一开始的结果
$$
E_0=a=-\dfrac{g^2}{2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\dfrac{|\tilde{\rho}(\vec p)|^2}{|\vec p|^2+\mu^2}
$$
在取 $\rho(\vec x)\sim\delta^{(3)}(\vec x)$ 时，$\tilde\rho(\vec p)$ 为一常函数，上面的积分为：
$$
E_0\sim\int\dfrac{\mathrm{d}^3\vec p}{|\vec p|^2}\sim\int{\mathrm{d}p}\to\infty,\quad \text{as}\;|\vec p|\to\infty
$$
因此自能发散。这一发散我们称为**紫外发散(ultraviolet divergence)**，因为其发散来源于大的那些 $|\vec p|$，也就是说由于积分上限导致的发散。

## 9.4 计算基态波函数

好的，我们已经解决了能量。现在轮到波函数了。我们要求的是：
$$
\langle \vec p_1,\cdots,\vec p_n|0\rangle_P
$$
这里，我们可以暂时先不考虑抵消项，因为它只是用来修正相位的。我们关心的是分量的模。求解波函数的一个聪明的办法是选取下面的绝热开关：
$$
f(t)=\begin{cases}
\mathrm{e}^{\epsilon t},\quad t\leq0\\
0,\quad t>0
\end{cases}
$$
即如下图所示。
<div align="center">
  <img src="./pictures/Pasted image 20251203171455.png" width="400">
</div>

>[!tip]
>为什么选取这样的 $f(t)$ 呢？
首先，我们已经精确求解过Model 1，因此对于任意一个在 $t\to\pm\infty$ 的开关 $f(t)$ ，我们都能直接引用之前的结果，写出对应的散射算符 $S=U_I(\infty,-\infty)$。上面的这个 $f(t)$ 是满足要求的。
另一方面，让我们考虑 $t=-\infty$ 时的真空态 $|0\rangle$ 的演化。对于足够小的正数 $\epsilon$ ，源加上来的速度是足够慢的，由**绝热定理**，我们知道 $t=0$ 时的态即源存在下的基态 $|0\rangle_P$。但是，在 $t=0$ 时源被突然撤去，因此态仍将保持在 $|0\rangle_P$ 上（注意我们在相互作用绘景中）。也就是说，我们只需要计算 $S=U_I(\infty,-\infty)$，将其作用于真空态 $|0\rangle$ 就能得到 $|0\rangle_P$。即$$U_I(\infty,-\infty)|0\rangle=|0\rangle_P$$

好的，那我们直接引用[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)中Model 1的结果：
$$
\langle\vec p_1,\cdots,\vec p_n|0\rangle_P=\langle\vec p_1,\cdots,\vec p_n|S|0\rangle=\psi^{(n)}(\vec p_1,\cdots,\vec p_n)=\mathrm{e}^{\frac12(-\alpha+i\beta)}h(\vec p_1)h(\vec p_2)\cdots h(\vec p_n)
$$
其中
$$
h(\vec p)\equiv\dfrac{-ig\,\tilde\rho(\vec p,\omega_{\vec p})}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}=\dfrac{-ig\,\tilde\rho(\vec p)\tilde f(\omega_{\vec p})}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}},\quad \alpha=\int\mathrm{d}^3\vec p\,|h(\vec p)|^2
$$
现在我们能做的就是把对 $t$ 的积分完成：
$$
\tilde f(\omega_{\vec p})=\int_{-\infty}^0\mathrm{d}t\,\mathrm{e}^{-i\omega_{\vec p}t}\mathrm{e}^{\epsilon t}=\dfrac{1}{\epsilon-i\omega_{\vec p}}\to\dfrac{i}{\omega_{\vec p}}
$$
$$
\alpha=g^2\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3\,2\omega_{\vec p}}|\tilde\rho(\vec p)|^2|\tilde f(\omega_{\vec p})|^2=g^2\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3\,2\omega_{\vec p}^3}|\tilde\rho(\vec p)|^2
$$
最终的粒子数分布仍为Poisson分布：
$$
P(n)=\mathrm{e}^{-\alpha}\,\dfrac{\alpha^n}{n!},\quad \langle n\rangle=\alpha
$$
最后，我们进行一些讨论。前面提到，当 $\rho(x)$ 有delta函数的形式时会导致基态能量发散。那粒子数呢？考虑原点处的**单一点源**的情况：
$$
\rho(\vec x)\to\delta^{(3)}(\vec x)
$$
此时
$$
\alpha=g^2\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3\,2\omega_{\vec p}^3}|\tilde\rho(\vec p)|^2\sim\int\dfrac{\mathrm{d}^3\vec p}{\omega_{\vec p}^3}\sim\int\dfrac{\mathrm{d}^3\vec p}{|{\vec p}|^3}\sim\int\dfrac{\mathrm{d}p}{p}\to\infty,\quad \text{as}\;|\vec p|\to\infty
$$
因此同样是发散的，而且也是紫外发散。这将导致粒子数 $\langle n\rangle=\alpha$ 也发散。

## 9.5 尾声：红外发散

前面得到了基态能量与基态平均粒子数：
$$
E_0=-\dfrac{g^2}{2}\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3}\dfrac{|\tilde{\rho}(\vec p)|^2}{|\vec p|^2+\mu^2},\quad \langle n\rangle=\alpha=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^3\,2\omega_{\vec p}^3}|\tilde\rho(\vec p)|^2
$$
其在 $|\vec p|\to\infty$ 时积分发散，为紫外发散。但是由于 $\mu$ 的存在，其当 $|\vec p|\to0$ 并不会发散。但是，当 $\mu=0$ 时，$\alpha$ 在 $|\vec p|\to0$ 时同样渐近于
$$
\alpha\sim\int\dfrac{\mathrm{d}p}{p}\to\infty,\quad \text{as}\;|\vec p|\to 0,\;\mu=0
$$
也是发散的。这一发散发生于 $|\vec p|\to0$ 处，也就是积分的下限。这样的发散称为**红外发散(infrared divergence)**。
这一发散来源于我们将介子的质量设为0，但是我们可以注意到 $E$ 在此时并没有发散（趋于 $\int\mathrm{d}p$ ）。这给了我们一个提示：粒子数并**不是一个可观测量**。或者说如果我们用某种“粒子探测器”去探测这些无质量介子，我们只能探测到那些动量高于某一阈值 $|\vec p|_{\min}$ ，可以触发探测器的介子。因此这会设置一个**下截断**，避免了探测到无穷多的介子。
因此，我们通过将发散限制在了**不可观测量**上。称这种可以通过一些手段消除发散的理论为**可重整化的(renormalizable)**。

---
