---
title: "Coleman QFT Lecture 21: Dirac方程 III：量子化与Feynman规则"
---

## 21.1 Dirac 场的正则量子化

正则量子化的步骤在[Coleman QFT - Lecture 4. 场的正则量子化](./Coleman%20QFT%20-%20Lecture%204.%20%E5%9C%BA%E7%9A%84%E6%AD%A3%E5%88%99%E9%87%8F%E5%AD%90%E5%8C%96.md)中提到过，我们已经构造出了Dirac场的Lagrangian：
$$
\mathcal L=\pm\left[i\psi^\dagger(\partial_0+\vec \alpha\cdot\nabla)\psi-m\psi^\dagger\beta\psi\right]
$$
正则动量为：
$$
\pi_\mu=\dfrac{\partial\mathcal L}{\partial(\partial_0\psi)}=\pm i\psi^\dagger
$$
Dirac旋量有四个分量 $\{\psi_a\}$，因此我们实际上有四组场量-共轭动量，用原来的正则量子化方法得到：
$$
[\psi_a(\vec x,t),\psi_b(\vec y,t)]=0,\quad [\psi_a^\dagger(\vec x,t),\psi_b^\dagger(\vec y,t)]=0,\quad [\psi_a(\vec x,t),\psi_b^\dagger(\vec y,t)]=\pm\delta^{(3)}(\vec x-\vec y)\delta_{ab}
$$
但是，我要提前说明的是，**Fermi统计**会要求上面的对易关系替换为反对易关系。现在就来说明上面的正则量子化条件会导致什么问题。Dirac场的Hamitonian为：
$$
\mathcal H=\sum_a\pi_\psi^a\partial_0\psi_a-\mathcal L=\pm\psi^\dagger(-i\vec\alpha\cdot\nabla+m\beta)\psi=\pm i\psi^\dagger\partial_0\psi
$$
最后一步是Dirac方程的结果。这其实不是很严谨，因为Hamiltonian本身只是一个相空间的泛函，其不要求场量满足真实的运动方程。但对于我们考虑的满足方程的Dirac场，上面的结果仍是正确的。现在，我们来构造满足Dirac方程的旋量场 $\psi(x)$。这一点可以类比标量场，我们只需要将方程的平面波解搭配上对应的产生-湮灭算符即可。这会给出下面的**平面波展开式**：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{\vec p}^{(r)}u_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot x}+c_{\vec p}^{(r)\dagger} v_{\vec p}^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
这里的 $u_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot x}$ 与 $v_{\vec p}^{(r)}\mathrm{e}^{ip\cdot x}$ 正是[Coleman QFT - Lecture 20. Dirac方程 II：求解](./Coleman%20QFT%20-%20Lecture%2020.%20Dirac%E6%96%B9%E7%A8%8B%20II%EF%BC%9A%E6%B1%82%E8%A7%A3.md)中得到的平面波解，$r$ 用于标记螺旋度的两个本征态。而湮灭算符 $b_{\vec p}^{(r)}$ 代表湮灭一个核子，产生算符 $c_{\vec p}^{(r)}$ 代表产生一个反核子，因此 $\psi(x)$ 会使总的“电荷”减一。类似的，$\psi^\dagger(y)$ 的展开式为：
$$
\psi^\dagger(y)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{\vec p}^{(r)\dagger}u_{\vec p}^{(r)\dagger}\mathrm{e}^{ip\cdot y}+c_{\vec p}^{(r)} v_{\vec p}^{(r)\dagger}\mathrm{e}^{-ip\cdot y}\right]
$$
注意这里取厄米共轭的操作产生了两个效果，一是产生-湮灭算符的厄米共轭，二是旋量 $u_{\vec p},v_{\vec p}$ 的复共轭加转置。这可能会产生一些问题，当我们考虑 $[\psi,\psi^\dagger]$ 时，$\psi\psi^\dagger$ 是一个 $4\times 4$ 的矩阵，而 $\psi^\dagger\psi$ 只是一个数，所以这个对易子的定义不是很好。鉴于这种原因，我们单独研究其分量的对易子。先猜测产生-湮灭算符的对易关系。Ansatz：
$$
[b_{\vec p}^{(r)},b_{\vec p'}^{(s)\dagger}]=\delta^{rs}\delta^{(3)}(\vec p-\vec p')B(\vec p),\quad [c_{\vec p}^{(r)\dagger},c_{\vec p'}^{(s)}]=\delta^{rs}\delta^{(3)}(\vec p-\vec p')C(\vec p),\quad\text{其他对易子为零}
$$
则 $[\psi_a(\vec x,t),\psi_b(\vec y,t)]=[\psi_a^\dagger(\vec x,t),\psi_b^\dagger(\vec y,t)]=0$ 显然成立，而
$$
[\psi_a(\vec x,t),\psi^\dagger_b(\vec y,t)]=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}{2E_p}}\left[\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}B(\vec p)\sum_{r=1}^2u_{\vec p\,a}^{(r)} u_{\vec p\, b}^{(r)*}+\mathrm{e}^{-i\vec p\cdot(\vec x-\vec y)}C(\vec p)\sum_{r=1}^2v_{\vec p\,a}^{(r)} v_{\vec p\, b}^{(r)*}\right]
$$
利用[Coleman QFT - Lecture 20. Dirac方程 II：求解](./Coleman%20QFT%20-%20Lecture%2020.%20Dirac%E6%96%B9%E7%A8%8B%20II%EF%BC%9A%E6%B1%82%E8%A7%A3.md)中最后一节推导出的完备关系式：
$$
\sum_{r=1}^2u_{\vec p}^{(r)}\bar u_{\vec p}^{(r)}=p\mkern -8.5mu /+m,\quad \sum_{r=1}^2v_{\vec p}^{(r)}\bar v_{\vec p}^{(r)}=p\mkern -8.5mu /-m
$$
通过同时右乘 $\gamma^0$ 可以回到 $u_{\vec p}^\dagger$，因此
$$
\sum_{r=1}^2u_{\vec p\,a}^{(r)} u_{\vec p\, b}^{(r)*}=E_p\delta_{ab}-\vec p\cdot(\vec\gamma\gamma^0)_{ab}+m\gamma^0_{ab},\quad \sum_{r=1}^2v_{\vec p\,a}^{(r)} v_{\vec p\, b}^{(r)*}=E_p\delta_{ab}-\vec p\cdot(\vec\gamma\gamma^0)_{ab}-m\gamma^0_{ab}
$$
注意到如果设置 $B(\vec p)=C(\vec p)=\pm 1$ 的话，有
$$
[\psi_a(\vec x,t),\psi^\dagger_b(\vec y,t)]=\pm\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3}{2E_p}}\mathrm{e}^{i\vec p\cdot(\vec x-\vec y)}\cdot 2E_p\delta_{ab}=\pm\delta_{ab}\delta^{(3)}(\vec x-\vec y)
$$
就得到了原来的正则量子化体条件。到现在为止，一切都很好。问题出在对能量的计算上：
$$
\begin{align}
H&=\int\mathrm{d}^3\vec x\,\mathcal H=\pm\int\mathrm{d}^3\vec x\,i\psi^\dagger\partial_0\psi\\
&=\pm\int\mathrm{d}^3\vec x\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\int\dfrac{\mathrm{d}^3\vec p'}{(2\pi)^{3/2}\sqrt{2E_{p'}}}\sum_{r=1}^2\left[b_{\vec p}^{(r)\dagger}u_{\vec p}^{(r)\dagger}\mathrm{e}^{-ip\cdot x}+c_{\vec p}^{(r)}v_{\vec p}^{(r)\dagger}\mathrm{e}^{ip\cdot x}\right]\sum_{s=1}^2E_p\left[-b_{\vec p'}^{(s)}u_{\vec p'}^{(s)}\mathrm{e}^{ip'\cdot x}+c_{\vec p'}^{(s)\dagger}v_{\vec p'}^{(s)}\mathrm{e}^{-ip'\cdot x}\right]\\
&=\pm\int\dfrac{\mathrm{d}^3\vec p}{2E_p}E_p\sum_{r=1}^2 \left(2E_pb_{\vec p}^{(r)\dagger}b_{\vec p}^{(r)}-2E_pc_{\vec p}^{(r)}c_{\vec p}^{(r)\dagger}\right)\\
&=\pm\int\mathrm{d}^3\vec p\,E_p\sum_{r=1}^2\left(b_{\vec p}^{(r)\dagger}b_{\vec p}^{(r)}-c_{\vec p}^{(r)}c_{\vec p}^{(r)\dagger}\right)
\end{align}
$$
其中用到了正交关系式：
$$
\bar u_{\vec p}^{(r)}\gamma^\mu u_{\vec p}^{(s)}=\bar v_{\vec p}^{(r)}\gamma^\mu v_{\vec p}^{(s)}=2p^\mu\delta^{rs}\Rightarrow u_{\vec p}^{(r)\dagger}u_{\vec p}^{(r)}=v_{\vec p}^{(r)\dagger}v_{\vec p}^{(r)}=2E_p\delta^{rs}
$$
以及
$$
\bar u_{\vec p}^{(r)}\gamma^\mu v_{\vec p}^{(s)}=\bar v_{\vec p}^{(r)}\gamma^\mu u_{\vec p}^{(s)}=0\Rightarrow u_{\vec p}^{(r)\dagger}v_{\vec p}^{(r)}=v_{\vec p}^{(r)\dagger}u_{\vec p}^{(r)}=0
$$
能量表达式的问题在于其不正定，不论我们选择最前面的正号还是负号。这在物理上是不被允许的。

这个问题的解决方法由 Jordan 和 Wigner 提出。在非相对论量子力学中，我们知道对于全同玻色子与费米子，玻色子在交换两个粒子时波函数不变，而费米子则要加一个负号，以确保Pauli不相容原理成立。这种**反对称性**启示我们将量子场分为**Fermi场**和**Bose场**，Bose场用对易子进行正则量子化，而Fermi场则用反对易子进行正则量子化。我们这里研究的旋量场就是Fermi场，因此正则量子化条件为：
$$
\{\psi_a(\vec x,t),\psi_b(\vec y,t)\}=0,\quad \{\psi_a^\dagger(\vec x,t),\psi_b^\dagger(\vec y,t)\}=0,\quad \{\psi_a(\vec x,t),\psi_b^\dagger(\vec y,t)\}=\pm\delta^{(3)}(\vec x-\vec y)\delta_{ab}
$$
而且我们可以确定这里的正负号了。考虑一个一般的算符：
$$
\theta(t)\equiv\int\mathrm{d}^3\vec x\,\sum_a f_a(\vec x)\psi_a(\vec x,t)
$$
其反对易子为
$$
\{\theta,\theta^\dagger\}=\pm\int\mathrm{d}^3\vec x\sum_a|f_a(\vec x)|^2
$$
但是反对易子在任何态下的期望值是正定的，因为：
$$
\langle\phi|\{\theta,\theta^\dagger\}|\phi\rangle=|\theta^\dagger|\phi\rangle|^2+|\theta|\phi\rangle|^2\ge 0
$$
因此要取正号。回到平面波展开式：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{\vec p}^{(r)}u_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot x}+c_{\vec p}^{(r)\dagger} v_{\vec p}^{(r)}\mathrm{e}^{ip\cdot x}\right],\quad \psi^\dagger(y)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{\vec p}^{(r)\dagger}u_{\vec p}^{(r)\dagger}\mathrm{e}^{ip\cdot y}+c_{\vec p}^{(r)} v_{\vec p}^{(r)\dagger}\mathrm{e}^{-ip\cdot y}\right]
$$
我们发现产生-湮灭算符同样应当满足**反对易关系**而不是对易关系：
$$
\{b_{\vec p}^{(r)},b_{\vec p'}^{(s)\dagger}\}=\delta^{rs}\delta^{(3)}(\vec p-\vec p'),\quad \{c_{\vec p}^{(r)},c_{\vec p'}^{(s)\dagger}\}=\delta^{rs}\delta^{(3)}(\vec p-\vec p'),\quad\text{其他反对易子为零}
$$
请自行验证正则量子化关系成立。此时的能量表达式为：
$$
H=\int\mathrm{d}^3\vec p\,E_p\sum_{r=1}^2\left(b_{\vec p}^{(r)\dagger}b_{\vec p}^{(r)}-c_{\vec p}^{(r)}c_{\vec p}^{(r)\dagger}\right)=\int\mathrm{d}^3\vec p\,E_p\sum_{r=1}^2\left(b_{\vec p}^{(r)\dagger}b_{\vec p}^{(r)}+c_{\vec p}^{(r)\dagger}c_{\vec p}^{(r)}-\underbrace{\delta^{(3)}(0)}_{\text{can be discarded}}\right)
$$
这个能量表达式就是**正定的**。我们可以验证一下产生-湮灭算符与哈密顿量的对易关系。暂时忽略自旋：
$$
[H,b_{\vec q}]=\left[\int\mathrm{d}^3\vec p\,E_pb_{\vec p}^\dagger b_{\vec p},b_{\vec q}\right]=\int\mathrm{d}^3\vec p\,E_p\left(b_{\vec p}^\dagger\{b_{\vec p},b_{\vec q}\}-\{b_{\vec p}^\dagger,b_{\vec q}\}b_{\vec p}\right)=-E_{\vec q}\,b_{\vec q},\quad [H,b_{\vec q}^\dagger]=E_{\vec q}\,b_{\vec q}^\dagger
$$
因此一些熟知的作用关系仍不变：
$$
b_{\vec q}|0\rangle=H|0\rangle=0,\quad b_{\vec q}^\dagger|0\rangle=|\vec q\rangle,\quad H|\vec q\rangle=E_q|\vec q\rangle,\quad \langle\vec q'|\vec q\rangle=\langle 0|b_{\vec q'}b_{\vec q}|0\rangle=\delta^{(3)}(\vec q-\vec q')
$$
多粒子态为：
$$
|\vec q_1,\cdots,\vec q_n\rangle=b_{\vec q_1}^\dagger\cdots b_{\vec q_n}^\dagger|0\rangle
$$
但这个态是**全反对称**的，任意交换两个粒子会多出一个负号。这是Fermi场独有的特性。如双粒子态：
$$
|\vec q_1,\vec q_2\rangle=-|\vec q_2,\vec q_1\rangle,\quad |\vec q_1,\vec q_1\rangle=0
$$
这是Pauli不相容定理。

回忆我们在[Coleman QFT - Lecture 3. 构建标量量子场](./Coleman%20QFT%20-%20Lecture%203.%20%E6%9E%84%E5%BB%BA%E6%A0%87%E9%87%8F%E9%87%8F%E5%AD%90%E5%9C%BA.md)中最开始引入对易子的原因，其是出于因果性的考虑，两个类空间隔的观测量之间不会互相影响，因此我们构建了算符场，并且要求类空间隔的场的对易子为零。但现在我们改用了反对易子，则
$$
[\psi_a(\vec x,t),\psi_b(\vec y,t)]=2\psi_a(\vec x,t)\psi_b(\vec y,t)\ne 0
$$
因此Fermi场 $\psi(x)$ 不是**可观测量**。观测量必须由偶数个Fermi场的乘积组成。因此可以说“Fermi场是可观测量的平方根”。
Fermi场的反对易关系导致其经典极限也是比较奇怪的。我们可以使 $\hbar\to 0$，但仍需要“奇怪的”满足反对易关系的数。这种满足反对易关系的数正式上称为**Grassman变量**。

## 21.2 Fermi场的Wick定理

我们将要调整Model 3，前面我们将核子场视为复标量场，现在要将其改为旋量场。Lagrangian有下面的形式：
$$
\mathcal L=\bar\psi(i\partial\mkern-9.5mu/-m)+\dfrac12\partial^\mu\phi\partial_\mu\phi-\dfrac12\mu^2\phi^2-g\bar\psi\varGamma\psi\phi+\cdots
$$
这里当 $\phi$ 为标量场时 $\varGamma$ 为 $\mathbb 1$ ，$\phi$ 为赝标量场时 $\varGamma$ 为 $i\gamma_5$。这样可以使Lagrangian有**宇称不变性**。接下来，我们来考虑时序积的Lorentz不变性。考虑两个**类空间隔**处的场，分别位于原点与 $x$ 处 $(x^2=x\cdot x<0,x^0>0)$，标量场的时序积定义为：
$$
T(\phi(0)\phi(x))=\phi(x)\phi(0)
$$
由于间隔类空，我们可以通过Lorentz变换使得 $x^0<0$，则
$$
T(\phi(0)\phi(x))=\phi(0)\phi(x)
$$
这不会产生问题，因为 $[\phi(0),\phi(x)]=0\;(x^2<0)$，因此两个时序积是相等的。 而如果间隔是类空的，的确两个结果不一定相等，但是也没有办法通过Lorentz变换将 $x^0>0$ 变成 $x^0<0$。因此，这样定义的时序积是**Lorentz不变**的。
时序积的Lorentz协变性保证了QFT的Lorentz协变性。因为散射矩阵S就定义成时序积的形式，其应该是Lorentz不变量。但是，如果用上面的方式定义Fermi场的时序积，很容易能发现问题。在原系中：
$$
T(\psi_a(0)\psi_b(x))=\psi_b(x)\psi_a(0)
$$
换系后
$$
T(\psi_a(0)\psi_b(x))=\psi_a(0)\psi_b(x)=-\psi_b(x)\psi_a(0),\quad \text{for }\,x^2<0
$$
> [!tip]
> 这里可以验证对于类空间隔 $(x-y)^2<0$，有 $\{\psi_a(x),\psi_b^\dagger(y)\}=0$。利用平面波展开以及正交关系：
> $$\{\psi_a(x),\psi_b^\dagger(y)\}=\gamma_{ab}^0(i\partial\mkern-8.5mu/_x-m)\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32E_p}[\mathrm{e}^{-ip\cdot(x-y)}-\mathrm{e}^{ip\cdot(x-y)}]=\gamma_{ab}^0(i\partial\mkern-8.5mu/_x-m)i\Delta(x-y)$$
> 而当 $(x-y)^2<0$ 时 $\Delta(x-y)=0$。

因为Fermi场遵循的是反对易规则，因此会多出一个负号。因此，我们必须修改时序积的定义。解决方法是加上一个额外的因子：
$$
T(\psi_1(t_1)\cdots\psi_n(t_n))=(-1)^p\psi_{j_1}(t_{j_1})\cdots\psi_{j_n}(t_{j_n}),\quad t_{j_1}>t_{j_2}>\cdots>t_{j_n}
$$
$p$ 是置换数。如果 $\{j_1,j_2,\cdots,j_n\}$ 相对于 $\{1,2,\cdots,n\}$ 是**奇置换**，则要加上额外的负号。以两个Fermi场的时序积为例：
$$
T(\psi_a(x)\psi_b(y))=-T(\psi_b(y)\psi_a(x))=\begin{cases}
\psi_a(x)\psi_b(y),\quad x^0>y^0\\
-\psi_b(y)\psi_a(x),\quad x^0<y^0
\end{cases}
$$
也就是说
$$
T(\psi(x)\psi(y))=\theta({x^0-y^0})\psi(x)\psi(y)-\theta(y^0-x^0)\psi(y)\psi(x)
$$
因此现在时序积还取决于原先场的排列顺序。但是，Dyson公式仍成立。因为 $H_I$ 中一定含有偶数个Fermi场，因此 $H_I$ 的时序积不会出现额外的负号。
类似的，正规序积也要加上额外的负号：
$$
:\psi_1(x_1)\cdots\psi_n(x_n)):=(-1)^p\psi_{j_1}(x_{j_1})\cdots\psi_{j_n}(x_{j_n})+\cdots,\quad \text{$b^\dagger,c^\dagger$ 在 $b,c$ 的左侧}
$$
例如
$$
:\psi_1(x_1)\psi_2(x_2):=\psi_1^{(+)}\psi_2^{(+)}+\psi_1^{(-)}\psi_2^{(-)}+\psi_1^{(-)}\psi_2^{(+)}-\psi_2^{(-)}\psi_1^{(+)}
$$
其中
$$
\psi^{(+)}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2b_{\vec p}^{(r)}u_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot x},\quad \psi^{(-)}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2c_{\vec p}^{(r)\dagger}v_{\vec p}^{(r)}\mathrm{e}^{ip\cdot x}
$$
这样就完成了时序积与正规序积的定义。可以证明，在这样的定义下，Wick定理仍然成立。在此不做具体证明，可以参考[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)。对于两个旋量场的情况，缩并定义为：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi_a(x) \bar\chi_b} (y)\equiv T(\psi_a(x)\bar \chi_b(y))-:\psi_a(x)\bar \chi_b(y):
$$
与标量场类似的，旋量场的缩并也是一个纯数。通过对上面式子的直接展开计算可得：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi_a(x) \bar\chi_b} (y)=\theta(x_0-y_0)\{\psi_a^{(+)},\bar\chi_b^{(-)}\}-\theta(y_0-x_0)\{\bar\chi_b^{(+)},\bar\psi_a^{(-)}\}
$$
反对易括号会将产生-湮灭算符变成纯数。场的缩并实际上就是两点Green函数（或者说传播子），下一节我们就来具体计算它。

## 21.3 计算Dirac传播子

两个Fermi场的缩并定义为：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi(x) \bar\psi} (y)\equiv T(\psi(x)\bar \psi(y))-:\psi(x)\bar \psi(y):
$$
注意这里我把分量角标去掉了。这会导致前面提到的问题，即 $\bar\psi\psi$ 与 $\psi\bar\psi$ 按矩阵乘法来看是阶数不同的矩阵。因此我们规定不论写的顺序如何，上面的式子都代表一个 $4\times 4$ 矩阵， $\psi$ 的分量指标 $a$ 与 $\bar\psi$ 的分量指标 $b$ 构成矩阵元的坐标 $(ab)$。我们就来计算缩并的显式表达式。
平面波展开式：
$$
\psi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{\vec p}^{(r)}u_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot x}+c_{\vec p}^{(r)\dagger} v_{\vec p}^{(r)}\mathrm{e}^{ip\cdot x}\right]
$$
$$
\bar\psi(y)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2E_p}}\sum_{r=1}^2\left[b_{\vec p}^{(r)\dagger}\bar u_{\vec p}^{(r)}\mathrm{e}^{ip\cdot y}+c_{\vec p}^{(r)} \bar v_{\vec p}^{(r)}\mathrm{e}^{-ip\cdot y}\right]
$$
当 $x^0>y^0$ 时
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi(x) \bar\psi} (y)=\langle 0|T(\psi(x)\bar\psi(y))|0\rangle=\int\dfrac{\mathrm{d}^3\vec p\,\mathrm{d}^3\vec p'}{(2\pi)^3\sqrt{2E_p}\sqrt{2E_{p'}}}\mathrm{e}^{-ip\cdot x+ip'\cdot y}\sum_{r,s}\langle 0|b_{\vec p}^{(r)}b_{\vec p'}^{(s)\dagger}|0\rangle u_{\vec p}^{(r)}\bar u_{\vec p'}^{(s)}
$$
利用
$$
\langle 0|b_{\vec p}^{(r)}b_{\vec p'}^{(s)\dagger}|0\rangle=\langle 0|\{b_{\vec p}^{(r)},b_{\vec p'}^{(s)\dagger}\}|0\rangle=\delta^{rs}\delta^{(3)}(\vec p-\vec p'),\quad \sum_r u_{\vec p}^{(r)}\bar u_{\vec p}^{(r)}=p\mkern-8.5 mu/+m
$$
因此
$$
\mathrm{RHS}=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32E_p}\mathrm{e}^{-ip\cdot(x-y)}(p\mkern-8.5mu/+m)=(i\partial\mkern-8.5mu/_x+m)\underbrace{\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^32E_p}\mathrm{e}^{-ip\cdot(x-y)}}_{\Delta_+(x-y)}
$$
$x^0<y^0$ 的计算是类似的，会得到：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi(x) \bar\psi} (y)=\langle 0|T(\psi(x)\bar\psi(y))|0\rangle=(i\partial\mkern-8.5mu/_x+m)\Delta_+(y-x)
$$
在[Coleman QFT - Lecture 8. 微扰理论 I：Wick diagram](./Coleman%20QFT%20-%20Lecture%208.%20%E5%BE%AE%E6%89%B0%E7%90%86%E8%AE%BA%20I%EF%BC%9AWick%20diagram.md)中，我们得到过标量场缩并的表达式：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;}}\mkern-3mu\normalsize |}{\phi(x) \phi} (y)=\theta(x^0-y^0)\Delta_+(x-y)+\theta(y^0-x^0)\Delta_+(y-x)=\lim_{\epsilon\to0^+}\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
比较其与旋量场的结果，可以发现旋量场的缩并只是多出了一个 $(i\partial\mkern-8.5mu/_x+m)$ 因子，因此可以写为：
$$
\begin{align}
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi(x) \bar\psi} (y)&=(i\partial\mkern-8.5mu/_x+m)\overset {|\Large \mkern-2mu{}^{\overline{\quad\;}}\mkern-3mu\normalsize |}{\phi(x) \phi} (y)\\
&=(i\partial\mkern-8.5mu/_x+m)\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i}{p^2-\mu^2+i\epsilon}\\
&=\int\dfrac{\mathrm{d}^4p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x-y)}\dfrac{i(p\mkern-8.5mu/+m)}{p^2-\mu^2+i\epsilon}
\end{align}
$$
因此，在动量空间旋量场的传播子就是：
$$
\tilde S_F=\dfrac{i(p\mkern-8.5mu/+m)}{p^2-\mu^2+i\epsilon}
$$
这称为**Dirac传播子**，注意这是一个 $4\times 4$ 矩阵。与之对比，标量场的传播子就是 
$$
\tilde \Delta_F=\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
另一个理解Dirac传播子的方法在于将其改写为：
$$
\tilde S_F=\dfrac{i(p\mkern-8.5mu/+m)}{p^2-\mu^2+i\epsilon}=\dfrac{i(p\mkern-8.5mu/+m-i\epsilon)}{p^2-\mu^2+i\epsilon}=\dfrac{i}{p\mkern-8.5mu/-m+i\epsilon}
$$
其形式与标量场传播子非常像。实际上有下面的对应：
$$
\text{Klein-Gordon Eq.}:\square^2+m^2\longrightarrow\text{propagator}:\tilde \Delta_F=\dfrac{i}{p^2-\mu^2+i\epsilon}
$$
$$
\text{Dirac Eq.}:i\partial\mkern-8.5mu/-m\longrightarrow\text{propagator}:\tilde S_F=\dfrac{i}{p\mkern-8.5mu/-m+i\epsilon}
$$
这种深刻的对应关系在后面通过**路径积分量子化**中会得到更明确的解释：传播子本质上是自由Lagrangian $\varphi\mathcal D\varphi$ 中算符 $\mathcal D$ 的逆。

## 21.4 一个例子：核子-介子散射

我们要重复在标量场理论中做过的事情了，即算一些具体的散射过程。然后我会总结出旋量场理论下的Feynman规则。在Model 3中，自由核子场与自由介子场的相互作用由下式给出：
$$
\mathcal L_I=-g\bar\psi\varGamma\psi\phi\qquad (\varGamma=\mathbb 1\,\text{ or }\,i\gamma_5)
$$
考虑核子-介子弹性散射过程：
$$
N+\phi\to N+\phi
$$
要求 $S=T\,\mathrm{e}^{-i\int\mathrm{d}^4x\,\mathcal H_I}$ 的对应矩阵元。我们考虑最低阶（即 $O(g^2)$ 阶），Dyson展开式中的这一项为：
$$
\dfrac{1}{2!}(-ig)^2\int\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,T(\bar\psi_2\varGamma\psi_2\phi_2\bar\psi_1\varGamma\psi_1\phi_1)
$$
对于该散射过程，我们要缩并掉两个核子场。由于对称性，缩并 $\bar\psi_2\psi_1$ 和 $\psi_2\bar\psi_1$ 的贡献是一样的，这去掉了前面的系数 $1/2!$，相当于去掉Feynman图上顶点的编号。对应的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260127162006.png" width="700">
</div>

矩阵元为：
$$
\begin{align}
\langle f|S-1|i\rangle&=\langle p',s;q'|(-ig)^2\int\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,:\bar\psi_2\varGamma\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi_2\phi_2 \bar\psi_1}\varGamma\psi_1\phi_1:|p,r;q\rangle\\
&=(-ig)^2\int\dfrac{\mathrm{d}^4k}{(2\pi)^4}\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,\mathrm{e}^{i(q'+p')x_2}\mathrm{e}^{-i(q+p)x_1}[\mathrm{e}^{-ik\cdot(x_2-x_1)}\times\bar u_{\vec p'}^{(s)}\varGamma\dfrac{i}{k\mkern-8.5mu/-m+i\epsilon}\varGamma u_{\vec p}^{(r)}]\\
&=(-ig)^2(2\pi)^4\delta^{(4)}(p+q-p'-q')\bar u_{\vec p'}^{(s)}\varGamma\dfrac{i}{p\mkern-8.5mu/+q\mkern-8.5mu/-m+i\epsilon}\varGamma u_{\vec p}^{(r)}
\end{align}
$$
类似的定义Feynman振幅：
$$
\langle f|S-1|i\rangle\equiv(2\pi)^4\delta^{(4)}(p+q-p'-q')\mathcal \,iA_{fi},\quad \mathcal iA_{fi}=(-ig)^2\bar u_{\vec p'}^{(s)}\varGamma\dfrac{i}{p\mkern-8.5mu/+q\mkern-8.5mu/-m+i\epsilon}\varGamma u_{\vec p}^{(r)}
$$
此外，我们还能来讨论一下反核子-介子散射，即
$$
\bar N+\phi\to \bar N+\phi
$$
来看看其与核子-介子散射有什么不同。同样的，画出其Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20260127163421.png" width="600">
</div>

对应的表达式就是：
$$
\langle f|S-1|i\rangle=\langle p',s;q'|(-ig)^2\int\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,:\bar\psi_2\varGamma\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\;}}\mkern-3mu\normalsize |}{\psi_2\phi_2 \bar\psi_1}\varGamma\psi_1\phi_1:|p,r;q\rangle
$$
这里左右的态指反核子-介子态。现在不同点出现了，原先我们用 $\psi_1$ 湮灭右侧的核子，$\bar\psi_2$ 产生左侧的核子，但现在我们只能用 $\bar\psi_2$ 湮灭右侧的反核子，$\psi_1$
产生左侧的反核子，因此这两个算符要换位置。这会产生一个额外的 $-1$ 因子。同时，由于现在顶点2负责湮灭，因此中间的动量 $k=-p-q$（你可以写出积分式确认这一点），以及代表核子的旋量 $u$ 用代表反核子的旋量 $v$ 代替。因此这个散射过程的Feynman振幅为：
$$
\mathcal iA_{fi}=(-1)\cdot(-ig)^2\bar v_{\vec p'}^{(s)}\varGamma\dfrac{i}{-p\mkern-8.5mu/-q\mkern-8.5mu/-m+i\epsilon}\varGamma v_{\vec p}^{(r)}
$$
在处理标量场时，由于传播子是动量的二次式，因此不用考虑内线动量的正负。但Dirac传播子中，动量的正负会影响到传播子的表达式，因此要更为小心的处理。现在我可以写下旋量场的Feynman规则了。

## 21.5 包含费米子理论的Feynman规则

由于Fermi场的非对易关系以及矩阵运算不能随意交换顺序，因此Feynman规则更为复杂。将分成三个部分：

<div align="center">
  <img src="./pictures/Pasted image 20260127174213.png" width="600">
</div>

首先是因子，内线对应于传播子，根据其是介子线还是核子线，写下标量传播子与Dirac传播子。顶点处写下 $-ig\varGamma$，以及动量守恒的delta函数。而外线则根据其出射与入射，以及核子与反核子写下对应的旋量。

<div align="center">
  <img src="./pictures/Pasted image 20260127174810.png" width="600">
</div>

第二部分是将矩阵按一定的顺序组装起来。由于基本顶点有一根朝内的核子线与一根朝外的核子线，因此核子线要么首尾连接至外线，形成一条**核子链**，要么成环。对前一种情况，我们要从整根线的最前端开始，逆着箭头的方向依次写下各部分的因子。以下图为例：

<div align="center">
  <img src="./pictures/Pasted image 20260127195852.png" width="400">
</div>

我们从(1)开始，沿Fermi线的逆方向一直写到(7)。其对应于表达式
$$
i\mathcal A_{fi}=\bar u_{\vec p'}(-ig\varGamma)\dfrac{i}{k\mkern-8.5mu/_2-m+i\epsilon}(-ig\varGamma)\dfrac{i}{k\mkern-8.5mu/_1-m+i\epsilon}(-ig\varGamma)u_{\vec p}
$$
对于后一种成环的情况，以下图为例：

<div align="center">
  <img src="./pictures/Pasted image 20260127200320.png" width="400">
</div>

对应的表达式为
$$
-\mathrm{Tr}(:\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-3mu\normalsize |}{\psi_4\bar\psi_1}\varGamma\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-3mu\normalsize |}{\psi_1\bar\psi_2}\varGamma\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-3mu\normalsize |}{\psi_2\bar\psi_3}\varGamma\overset {|\Large \mkern-2mu{}^{\overline{\;\;\;}}\mkern-3mu\normalsize |}{\psi_3\bar\psi_4}\varGamma:)
$$
由于将最右侧的 $\psi_4$ 换到最左侧，故多一个负号，同时对指标求和等价于求整体的迹。
我们还是回到原来的核子-介子散射的计算上来。将自旋态合进旋量中，入射核子态记为 $u$，出射核子态记为 $u'$。同时，为了演示具体的计算，假设 $\varGamma=i\gamma_5$。$O(g^2)$ 的Feynman图实际上有两张：

<div align="center">
  <img src="./pictures/Pasted image 20260127202431.png" width="600">
</div>

两幅图中都只有一根核子链，根据Feynman规则可以写出
$$
\begin{align}
i\mathcal A_{fi}&=(-ig)^2\bar u'\left[i\gamma_5\dfrac{i}{p\mkern-8.5mu/+q\mkern-8.5mu/-m+i\epsilon}i\gamma_5\right]u+(-ig)^2\bar u'\left[i\gamma_5\dfrac{i}{p\mkern-8.5mu/'-q\mkern-8.5mu/-m+i\epsilon}i\gamma_5\right]u\\
&=ig^2\bar u'\gamma_5\left[\dfrac{p\mkern-8.5mu/+q\mkern-8.5mu/+m}{(p+q)^2-m^2}+\dfrac{p\mkern-8.5mu/'-q\mkern-8.5mu/+m}{(p'-q)^2-m^2}\right]\gamma_5 u\\
&=ig^2\bar u'\left[\dfrac{-p\mkern-8.5mu/-q\mkern-8.5mu/+m}{(p+q)^2-m^2}+\dfrac{-p\mkern-8.5mu/'+q\mkern-8.5mu/+m}{(p'-q)^2-m^2}\right]u\\
&=ig^2\bar u' q\mkern-8.5mu/u\left[\dfrac{1}{(p'-q)^2-m^2}-\dfrac{1}{(p+q)^2-m^2}\right]
\end{align}
$$
第三个等号用到了 $\gamma_5$ 与 $\gamma^\mu$ 反对易，第四个等号用到 $p\mkern-8.5 mu/u=mu,\;\bar u'p\mkern-8.5 mu/'=\bar u'm$。

下面我们来看一个更有难度的例子：核子-核子弹性散射，即
$$
N+N\to N+N
$$
$O(g^2)$ 阶的Feynman图是容易画出来的：

<div align="center">
  <img src="./pictures/Pasted image 20260127203439.png" width="600">
</div>

每幅图中都有两根核子链，我可以写下其Feynman振幅，除了一个**符号问题**：
$$
i\mathcal A_{fi}=(-ig)^2(\text{sign 1})(\bar u_1'i\gamma_5 u_1)(\bar u_2'i\gamma_5 u_2)\dfrac{i}{(p_1-p_1')^2-\mu^2}+(-ig)^2(\text{sign 2})(\bar u_1'i\gamma_5 u_2)(\bar u_2'i\gamma_5 u_1)\dfrac{i}{(p_1-p_2')^2-\mu^2}
$$
这个符号我暂时记为 $\text{sign 1}$ 与 $\text{sign 2}$。这是Feynman规则的第三部分，即使你按前面的规则写出了各图代表的振幅，最后整体仍然可能需要加一个额外的负号。这来源于Fermi子态的反对称。对于这个例子，入态和出态都是双核子态，因此先产生/湮灭哪个核子是需要考虑的问题。
这里，将介绍的是一个称为“$\bar\psi\psi$ **法则**”的技巧。观察原先的时序积：
$$
T(\bar\psi_2\varGamma\psi_2\phi_2\bar\psi_1\varGamma\psi_1\phi_1)
$$
可以看到，对于同一个角标（顶点）的核子场，一定是 $\bar\psi$ 在前而 $\psi$ 在后。另一方面，不同角标的 $\bar\psi\psi$ 的排列顺序则是无关紧要的，因为它们**彼此对易**。回到我们的例子，由于我们在处理核子，因此
$$
\bar\psi_1’\psi_1\to b_1'^\dagger b_1,\quad \bar\psi_2'\psi_2\to b_2'^\dagger b_2
$$
因此有贡献的对象是 $:b_1'^\dagger b_1b_2'^\dagger b_2:$ ，而我们最后要得到的先湮灭、后产生的对象为 $:b_1'^\dagger b_2'^\dagger b_2b_1:$ ，可以看出只需将最后一个 $b_1$ 向左跨过 $b_2^\dagger b_2$ 即可，因此
$$
:b_1'^\dagger b_1b_2'^\dagger b_2:\,=\,:b_1'^\dagger b_2'^\dagger b_2b_1:
$$
因此 $\text{sign 1}$ 为正号。对于第二幅图，我们有
$$
\bar\psi_1'\psi_2\to b_1'^\dagger b_2,\quad \bar\psi_2'\psi_1=b_2'^\dagger b_1
$$
因此这时处理的对象为 $:b_1'^\dagger b_2b_2'^\dagger b_1:$ ，有
$$
:b_1'^\dagger b_2b_2'^\dagger b_1:\,=-:b_1'^\dagger b_2'^\dagger b_2b_1:
$$
因此 $\text{sign 2}$ 为负号。实际上，两个符号的正负取决于我对初末态的定义，但是不管怎样定义，两幅图的符号一定是相反的，因为其等价于交换了算符 $b_1$ 和 $b_2$。因此这两项振幅应当相减，真正重要的是各Feynman图之间的**相对符号**。

## 21.6 对自旋态求和与平均

最后，我们来探讨自旋在散射中的处理。由于在很多实验中，我们并不关心粒子态的自旋，比如发射粒子的装置发射的是非极化的粒子束，而探测器也不会检测出射粒子的自旋。这使得我们计算散射截面时，需要**对出射粒子的自旋态求总和，对入射粒子的自旋态求平均**。
作为一个例子，我们还是回到一开始的核子-介子散射，Feynman振幅是一个关于能量与角度的函数乘以 $\bar u' q\mkern-8.5mu / u$：
$$
\mathcal A_{fi}=f(E,\theta)\,\bar u' q\mkern-8.5mu / u
$$
前面的函数与自旋无关。我现在将自旋态显式地写出来：
$$
\mathcal A_{sr}=f(E,\theta)\,\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)}
$$
注意：对自旋态求和与平均都是指对振幅的模方而不是振幅，也就是说：
$$
|\mathcal A|^2=\dfrac12\sum_{r,s}|\mathcal A_{rs}|^2=\dfrac{1}{2}|f(E,\theta)|^2\sum_{r,s}(\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)})^\dagger(\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)})
$$
利用
$$
(\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)})^\dagger=u_{\vec p}^{(r)\dagger}\gamma^{\mu\dagger}\gamma^{0\dagger}u_{\vec p'}^{(s)}q_\mu=u_{\vec p}^{(r)\dagger}\gamma^0\gamma^0\gamma^{\mu\dagger}\gamma^0u_{\vec p'}^{(s)}q_\mu=\bar u_{\vec p}^{(r)}q\mkern-8.5mu/ u_{\vec p'}^{(s)}
$$
由 $\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)}$ 是一个纯数，因此其厄米共轭等于Dirac伴随，而 $\gamma^\mu$ 是自伴的，也可得到上面的结果。因此
$$
|\mathcal A|^2=\dfrac{1}{2}|f(E,\theta)|^2\sum_{r,s}\bar u_{\vec p}^{(r)}q\mkern-8.5mu/ u_{\vec p'}^{(s)}\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)}
$$
接下来怎么办呢？一个技巧来源于Feynman：上面是两个二次型相乘，最后是一个数。我们可以交换一下其乘法的顺序，最后求迹，仍会得到原来的结果。即
$$
\sum_{r,s}\bar u_{\vec p}^{(r)}q\mkern-8.5mu/ u_{\vec p'}^{(s)}\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)}=\mathrm{Tr}\left(\sum_{r,s}q\mkern-8.5mu/ u_{\vec p'}^{(s)}\bar u_{\vec p'}^{(s)}q\mkern-8.5mu/ u_{\vec p}^{(r)}\bar u_{\vec p}^{(r)}\right)=\mathrm{Tr}(q\mkern-8.5mu/(p\mkern-8.5mu/+m)q\mkern-8.5mu/(p\mkern-8.5mu/'+m))
$$
第二步用了完备性关系。我们在[Coleman QFT - Problem 11](./Coleman%20QFT%20-%20Problem%2011.md)中推导了 $a\mkern-9.5mu /$ 的乘积的迹如何求解，有结论：
$$
\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /)=\dfrac12\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /+b\mkern-9.5mu /a\mkern-9.5mu /)=4a\cdot b,\quad \mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /d\mkern-9.5mu /)=4(a\cdot b)(c\cdot d)-4(a\cdot c)(b\cdot d)+4(a\cdot d)(b\cdot c)
$$
因此
$$
\begin{align}
|\mathcal A|^2&=\dfrac12|f(E,\theta)|^2\mathrm{Tr}(q\mkern-8.5mu/(p\mkern-8.5mu/+m)q\mkern-8.5mu/(p\mkern-8.5mu/'+m))\\
&=2|f|^2\left[m^2q^2+(q\cdot p)(q\cdot p')-q^2p\cdot p'+(q\cdot p)(q\cdot p')\right]\\
&=2|f|^2\left[\mu^2(m^2-p\cdot p')+2(q\cdot p)(q\cdot p')\right]
\end{align}
$$
这就是化简后的表达式。

---












