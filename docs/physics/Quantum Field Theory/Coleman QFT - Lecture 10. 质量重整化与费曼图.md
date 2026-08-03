---
title: "Coleman QFT Lecture 10: 质量重整化与费曼图"
---

在[[Coleman QFT - Lecture 9. 微扰理论 II：发散与抵消项]]中，我们讨论了Model 2的求解。总结一下，对于一个不变的源，为了抵消引入绝热开关导致的额外相位，我们往哈密顿量中加入抵消项。通过抵消项还能求出体系的基态能量。本章我们进入对Model 3，即核子-介子相互作用：
$$
\mathcal H_I=g\psi^*\psi\phi f(t)
$$
我们将对此模型的两个方面展开讨论：
- 能移问题(energy-shift problem)。我们需要额外的**质量重整化**项。
- 微扰展开出无限多的Wick图，我们不可能计算出S矩阵的显式表达式。我们只能对特定的矩阵元进行展开计算，换句话说，我们只能计算特定散射过程的振幅。与之对应的工具是**Feynman图**。

## 10.1 质量重整化

质量重整化的思想起源于古老的流体力学问题，当时格林 (George Green) 在考虑一个刚体球浸没在液体中的问题。假设球体的体积为 $V$，浸没在密度为 $\rho$ 的理想流体（无粘滞，不可压缩）中，球体密度为流体的 $1/10$。显然，球体会在浮力作用下上浮。其加速度应该为
$$
a=\dfrac{F_{float}}{m_0}=\dfrac{\rho gV}{\frac{1}{10}\rho V}=10g
$$
吗？用常理想想就会觉得不太可能。可以将乒乓球放进水下试试，它显然不会有这么高的加速度。当然，你可能会觉得是由于水实际上是有粘滞力的，但是当球刚开始运动时，其速度很小，因此粘滞力也很小。但是，即使在这个阶段，其加速度也不会这么大。
问题出在哪里？Stokes最先给出了这一问题的物理解释。球在运动时必将带动其周围的流体也发生运动，因此流体的加速同样会对球产生一个反作用力。经过对无粘性流体绕流速度场的严格计算，可以求出实际的加速度为：
$$
a=\dfrac{F_{float}}{m_0+\frac12\rho V}=\dfrac32 g
$$
现在，如果你并不知道流体的存在，而只能看到运动的刚体球，你会觉得其质量增加了，从原先的 $m_0$ 变成 $m_0+\dfrac12\rho V$。事实上，我们根本测量不到其原始质量 $m_0$，因为球体的任意运动都会带动流体的相应运动，球体速度对外力的响应将始终表现出修改后的质量。这实际上就是一种**质量重整化**。
重整化的思想下一次出现是在经典电动力学中，当时Lorentz在考虑电子的运动。我们先假设电子是一个半径为 $r$ 的带电球（导体），则其静能为：
$$
E_{rest}=m_0c^2+\dfrac{ke^2}{r}
$$
$k$ 只是一个常数（不是静电常量），后一项也等于电子产生的静电场能。此时，我们可以定义电子的“有效质量”：
$$
m\equiv m_0+\dfrac{ke^2}{rc^2}
$$
可以证明，当外力推动电子时，其会带动周围的电场“一起运动”，从而表现出的质量正是 $m$。
上面的两个讨论适用于一般性的物理情景，当一个粒子在某种连续介质中运动（电子可能是在“以太”中运动吧）时，其与介质的相互作用会改变其对外力的响应，这等效于一个不同质量的粒子在真空中运动。这便是**质量重整化**，将相互作用归入质量之中。

现在，我们回到Model 3的Lagrangian：
$$
\mathcal L=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu_0^2\phi^2-g\psi^*\psi\phi+\text{(nucleon terms)}
$$
这里 $\mu_0$ 是介子的原始质量，或者说**裸质量**(bare mass)。而我们观测到的介子质量记为 $\mu$，称为其**物理质量**(physical mass)。两者的差异正是来源于介子与核子的相互作用项 $g\psi^*\psi\phi$。现在，我们将裸质量修改为物理质量，将差异部分塞进相互作用部分，并引入适当的抵消项：
$$
\mathcal L=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2+\partial^\mu\psi^*\partial_\mu\psi-m^2\psi^*\psi+f(t)\left[-g\psi^*\psi\phi+a+\dfrac12 b\phi^2+c\psi^*\psi\right]
$$
因此微扰项为：
$$
\mathcal H_I=-f(t)\left[-g\psi^*\psi\phi+a+\dfrac12 b\phi^2+c\psi^*\psi\right]
$$
我们引入了三个抵消项，$a$ 用于抵消人为加入 $f(t)$ 带来的相移，而 $b,c$ 则实现对介子、核子质量的重整化。
现在，我们的基为自由部分哈密顿量的能量本征态，也就是：
$$
\mathcal H_0=\dfrac12(\partial^\mu\phi)^2-\dfrac12\mu^2\phi^2+\partial^\mu\psi^*\partial_\mu\psi-m^2\psi^*\psi
$$
这是一个质量为 $\mu$ 的介子场与质量为 $m$ 的核子场。我们知道，对于实际上不含时的扰动，不应当发生任何的跃迁。因此，我们通过以下的关系来确定抵消项系数：
$$
\langle 0|S|0\rangle=1\Rightarrow a,\quad \langle\vec q|S|\vec q'\rangle=1\Rightarrow b,\quad \langle\vec p|S|\vec p'\rangle=1\Rightarrow c
$$
确定系数后，便能确定裸质量：
$$
\mu_0^2=\mu^2-b,\quad m_0^2=m^2-c
$$

## 10.2  Feynman规则

现在，我们来尝试计算S矩阵的特定矩阵元。考虑下面的核子-核子散射过程：
$$
N(\vec p_1)+N(\vec p_2)\to N(\vec p_1')+N(\vec p_2')
$$
我们希望这一过程到 $O(g^2)$ 阶的振幅。也就是
$$
\langle  p_1', p_2'|S-1| p_1, p_2\rangle
$$
注意我们采取的是 $|p\rangle$ 而不是 $|\vec p\rangle$，这会让我们的结果更简洁。其Dyson展开式中 $O(g^2)$ 阶的项为：
$$
\dfrac12(-ig)^2\int\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,T(\psi(x_1)^*\psi(x_1)\phi(x_1)\psi(x_2)^*\psi(x_2)\phi(x_2))
$$
与上面散射过程的振幅相联系的Wick图为：

<div align="center">
  <img src="./pictures/Pasted image 20251207231040.png" width="600">
</div>

回顾一下，这一个Wick图有两个顶点，因此是 $O(g^2)$ 阶的。另一方面，其通过缩并介子场 $\phi$ ，外线剩下四个核子场（两个 $\psi$ 与两个 $\psi^*$）。**右侧的两个 $\psi$ 场用于湮灭入射的两个核子，而左侧的两个 $\psi^*$ 场则用于产生两个出射的核子。** 因此，此图对上面的散射过程有贡献。因为我们考虑的是给出动量的散射过程，不妨将对应场产生/湮灭粒子的动量标在对应的**外线**上。因此，我们可以画出下面两个图：

<div align="center">
  <img src="./pictures/Pasted image 20251207231532.png" width="600">
</div>

注意两个图的差异。但是，我们实际上还能交换顶点的序号得到不同的图，但其会给出完全相同的贡献。因此，我们不妨干脆将顶点序号擦掉，并乘上一个 $n!$ 因子。这将抵消Dyson展开式中的 $1/n!$ 因子。此时得到的图，我们称为**Feynman diagram**。

我们来具体计算这一矩阵元，来演示Feynman图是如何工作的。首先，上面的Wick图代表的展开式为：
$$
\dfrac12(-ig)^2\int\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,:\psi(x_1)^*\psi(x_1)\psi(x_2)^*\psi(x_2):\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)
$$
场算符部分是 $:\psi(x_1)^*\psi(x_1)\psi(x_2)^*\psi(x_2):$ ，其矩阵元为：
$$
\langle p_1', p_2'|:\psi(x_1)^*\psi(x_1)\psi(x_2)^*\psi(x_2):| p_1, p_2\rangle=\langle p_1', p_2'|\psi^*_1\psi^*_2|0\rangle\langle0|\psi_1\psi_2| p_1, p_2\rangle
$$
其中
$$
\langle0|\psi_1\psi_2| p_1, p_2\rangle=\exp(-ip_1\cdot x_1-ip_2\cdot x_2)+\exp(-ip_1\cdot x_2-ip_2\cdot x_1)
$$
$$
\langle p_1', p_2'|\psi^*_1\psi^*_2|0\rangle=\exp(ip_1'\cdot x_1+ip_2'\cdot x_2)+\exp(ip_1'\cdot x_2+ip_2'\cdot x_1)
$$
则
$$
\begin{align}
&\langle p_1', p_2'|:\psi(x_1)^*\psi(x_1)\psi(x_2)^*\psi(x_2):| p_1, p_2\rangle\\\\
=&\;\underbrace{\exp(ix_1\cdot(p_1'-p_1)+ix_2\cdot(p_2'-p_2))}_{\text{diagram (a)}}+\underbrace{\exp(ix_1\cdot(p_1'-p_2)+ix_2\cdot(p_2'-p_1))}_{\text{diagram (b)}}+(x_1\leftrightarrow x_2)
\end{align}
$$
可以看到，实际的矩阵元含有四项，前两项分别代表了图10.3中的图(a)与图(b)，也就是交换 $p_1,p_2$ 的结果，而后两项则为前两项交换 $x_1,x_2$ 的结果，对应于交换顶点的操作。就像前面所说的，我们可以直接去掉这两项，并同时去掉Dyson展开式的系数 $1/n!$。同时，缩并可表示为（默认取 $\epsilon\to 0^+$ 的极限）：
$$
\overset {|\Large \mkern-2mu{}^{\overline{\quad\;\,}}\mkern-3mu\normalsize |}{\phi(x_1) \phi} (x_2)=\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\mathrm{e}^{-iq\cdot(x_1-x_2)}\dfrac{i}{q^2-\mu^2+i\epsilon}
$$
代入矩阵元得到：
$$
\begin{align}
\langle  p_1', p_2'|S-1| p_1, p_2\rangle&=(-ig)^2\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\dfrac{i}{q^2-\mu^2+i\epsilon}\int\mathrm{d}^4x_1\,\mathrm{d}^4x_2\,\exp(ix_1\cdot(p_1'-p_1-q)+ix_2\cdot(p_2'-p_2+q))+(p_1\leftrightarrow p_2)\\
&=(-ig)^2(2\pi)^4\int\mathrm{d}^4q\,\dfrac{i}{q^2-\mu^2+i\epsilon}\delta^{(4)}(p_1'-p_1-q)\delta^{(4)}(p_2'-p_2+q)+(p_1\leftrightarrow p_2)
\end{align}
$$
利用 $\delta(x-a)\delta(x-b)=\delta(a-b)\delta(x-b)$，化简得到：
$$
\langle  p_1', p_2'|S-1| p_1, p_2\rangle=(-ig)^2(2\pi)^4\delta^{(4)}(p_1'+p_2'-p_1-p_2)\int\mathrm{d}^4q\,\dfrac{i}{q^2-\mu^2+i\epsilon}[\delta^{(4)}(p_1'-p_1-q)+\delta^{(4)}(p_2'-p_1+q)]
$$
最后这个积分就很简单了，结果为：
$$
\langle  p_1', p_2'|S-1| p_1, p_2\rangle=(-ig)^2(2\pi)^4\delta^{(4)}(p_1'+p_2'-p_1-p_2)\left[\dfrac{1}{(p_1-p_1')^2-\mu^2+i\epsilon}+\dfrac{1}{(p_1-p_2')^2-\mu^2+i\epsilon}\right]
$$
delta函数确保了只有能动量守恒的过程才可以发生。我们可以定义一个Lorentz不变的振幅，称为**Feynman amplitude**：
$$
\mathcal A_{fi}=(-ig)^2\dfrac{1}{(p_1-p_1')^2-\mu^2+i\epsilon}+(-ig)^2\dfrac{1}{(p_1-p_2')^2-\mu^2+i\epsilon}
$$
$$
\langle f|S-1|i\rangle=(2\pi)^4\delta^{(4)}(p_1'+p_2'-p_1-p_2)\,i\mathcal A_{fi}
$$
上面我们经过繁琐的计算，确定了最终振幅的形式。我们实际上是可以总结出一些规律的。比如，对每一个缩并场，在图上便对应于一根内线，其将引入一个积分：
$$
\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\mathrm{e}^{-iq\cdot(x_1-x_2)}\dfrac{i}{q^2-\mu^2+i\epsilon}\,\text{(for meson)}\quad \text{or}\quad \int\dfrac{\mathrm{d}^4 p}{(2\pi)^4}\mathrm{e}^{-ip\cdot(x_1-x_2)}\dfrac{i}{p^2-\mu^2+i\epsilon}\,(\text{for nucleon})
$$
对于每一个顶点，该顶点对应的坐标积分会得到一个该顶点处的delta函数。实际上，我们可以将内线视为一种**虚粒子**，如上面两个 $\phi$ 场的缩并可视为一个四动量为 $q$ 的虚介子，顶点处的delta函数可视为各顶点需要满足的能动量守恒条件。其称为虚粒子的原因是其不需要满足质壳关系 $q^2=\mu^2$，而是对所有可能的 $q$ 积分，被积函数称为虚粒子的**Feynman传播子**：
$$
\tilde\Delta_F(q^2)\equiv\dfrac{i}{q^2-\mu^2+i\epsilon}
$$
可以看到，偏离质壳越远的虚粒子贡献就越小。
实际上，每当我们画出一个Feynman图，其各个部分可以按照一定的规则对应到式子，这样我们就不用从Dyson展开式出发，而是直接将图对应的表达式组合出来即可。这些规则便称为**Feynman规则**，其总结为下表：

<div align="center">
  <img src="./pictures/Pasted image 20251208101135.png" width="600">
</div>

因此Feynman图成为了计算具体散射过程的有力工具。我们只需画出散射过程对应顶点数的所有可能Feynman图，再对每个图写出其对应的表达式，最后将所有表达式相加即可。注意上面的规则实际上是有一些规律的。关于 $2\pi$ ：每一个动量积分 $\mathrm{d}q$ 要除以一个 $2\pi$ ，每一个delta函数要乘一个 $2\pi$。 

## 10.3 Model 3的Feynman图

接下来，我们来具体讨论Model 3中直到 $O(g^2)$ 的所有可能Feynman图。首先，先来看 $O(g)$ 阶的图，一共有两个：

<div align="center">
  <img src="./pictures/Pasted image 20251208105238.png" width="300">
</div>

第一个就是一个基本顶点，其代表了一个介子衰变至两个核子的过程。如果这一过程可发生，说明介子是不稳定的。但是，实际的介子质量 $\mu$ 小于两倍的核子质量 $2m$。因此顶点处的能动量守恒关系是不可能实现的，因此该过程振幅为零，介子仍然是稳定的。这实际上是在说，单粒子衰变产物的总静质量必须小于原粒子的静质量，才可能满足能动量守恒关系。
第二个图实际上代表了真空中凭空产生一个介子，这是不可能发生的，顶点处的能动量关系不可能实现（为什么？）。因此，这两个 $O(g)$ 阶的图振幅均为零。

接下来是 $O(g^2)$ 阶的图，共有23个。（或由对称性减至17个）

<div align="center">
  <img src="./pictures/Pasted image 20251208110455.png" width="400">
</div>

这就是两个图1.1，同样的，当 $\mu<2m$ 时振幅为零。

<div align="center">
  <img src="./pictures/Pasted image 20251208110626.png" width="600">
</div>

图2包含了三个没有外腿的费曼图，其为全部对 $\langle 0|S|0\rangle$ 的 $O(g^2)$ 阶有贡献的图，最后一个即为抵消项，其系数 $a$ 由下面的条件确定：
$$
\langle 0|S|0\rangle=1\quad \text{to }\,O(g^2)
$$
可以求出真空能量的修正。
接下来是有两条外腿的图，首先是介子：

<div align="center">
  <img src="./pictures/Pasted image 20251208111221.png" width="500">
</div>

代表了单介子散射，我们应当要求单介子在真空中不应发生散射，因此图(b)代表的抵消项的系数 $b$ 由下式确定：
$$
\langle \vec q|S-1|\vec q'\rangle=0\quad\text{to }\,O(g^2)
$$
接下来是核子：

<div align="center">
  <img src="./pictures/Pasted image 20251208111523.png" width="700">
</div>

这里有三个可能的图，同样的，由重整化条件确定抵消项系数 $c$ ：
$$
\langle \vec p|S-1|\vec p'\rangle=0\quad\text{to }\,O(g^2)
$$
接下来是双粒子散射。这些我们都先不做具体计算，留到下一章中去讨论。
$2.5\quad N+N\to N+N$
实际上，我们还可以有反核子散射，然而，其通过 $C$ （电荷共轭）与核子-核子散射相联系：
$$
N+N\to N+N\xleftrightarrow{\,\,\,C\,\,\,}\bar N+\bar N\to \bar N+\bar N
$$
由于我们的理论有 $C$ 变换下的不变性，因此这两个过程将有完全一样的振幅。
$2.6\quad N+\bar N\to N+\bar N$
$2.7\quad N+\phi\to N+\phi$
其将通过 $C$ 联系到
$$
N+\phi\to N+\phi\xleftrightarrow{\,\,\,C\,\,\,}\bar N+\phi\to \bar N+\phi
$$
$2.8\quad N+\bar N\to \phi+\phi$
其将通过 $T$（时间反演）联系到：
$$
N+\bar N\to \phi+\phi\xleftrightarrow{\,\,\,T\,\,\,}\phi+\phi\to \bar N+N
$$
>[!tip]
>这里没有提到介子-介子散射 $\phi+\phi\to\phi+\phi$，因为其最低阶的图是 $O(g^4)$ 阶的：

<div align="center">
  <img src="./pictures/Pasted image 20251208160143.png" width="700">
</div>
所以我们先不讨论。
对于所有的这些散射过程，都会对应到两个Feynman图。马上我将演示每一个散射的振幅求解过程。回顾：
$$
\langle  p_1', p_2'|S-1| p_1, p_2\rangle=(2\pi)^4\delta^{(4)}(p_f-p_i)\,i\mathcal A_{fi}
$$
这里 $\mathcal A_{fi}$ 前面的 $i$ 只是一种惯例。因此，我们实际要求的就是每个散射过程的Feynman振幅 $A_{fi}$。 

## 10.4 $O(g^2)$ 阶的核子-核子散射

我们先来回头看看我们已经处理过的核子-核子散射过程。其对应于下面的两个Feynman图：

<div align="center">
  <img src="./pictures/Pasted image 20251208160914.png" width="700">
</div>

其中(b)和(b')是一个图，只是不同方式而已。图(a)根据Feynman规则可以写出表达式：
$$
\begin{align}
(\text{diagram (a)})&=\underbrace{\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\dfrac{i}{q^2-\mu^2+i\epsilon}}_{\text{$q$内线}}\cdot\underbrace{(-ig)(2\pi)^4\delta^{(4)}(p_1'+q-p_1)}_{\text{上顶点}}\cdot\underbrace{(-ig)(2\pi)^4\delta^{(4)}(p_2'-q-p_2)}_{\text{下顶点}}\\
&=-g^2(2\pi)^4\delta^{(4)}(p_2'+p_1'-p_2-p_1)\dfrac{i}{(p_1-p_1')^2-\mu^2+i\epsilon}
\end{align}
$$
图(b)是类似的。因此
$$
\mathcal A_{fi}=-g^2\left[\dfrac{1}{(p_1-p_1')^2-\mu^2+i\epsilon}+\dfrac{1}{(p_1-p_2')^2-\mu^2+i\epsilon}\right]
$$
正是我们先前得到的结果。
现在，我们先后退一步，回到非相对论量子力学中的散射问题。两个核子发生弹性散射的过程，被理解为其在一个排斥势下的偏转。由于上面我们取的是最低阶 $O(g^2)$ 阶的结果，对应到散射理论中，我们自然想到会使用**Born近似**。考虑下图所示的核子-核子在质心系的散射过程：

<div align="center">
  <img src="./pictures/Pasted image 20251208162134.png" width="500">
</div>

此时的四动量为：
$$
\vec p_1=-\vec p_2=\vec e\,p,\quad p_1'=(\sqrt{p^2+m^2},\vec e'p),\quad p_2'=(\sqrt{p^2+m^2},-\vec e'p)
$$
其中 $\vec e$ 与 $\vec e'$ 分别代表了入射与出射方向的单位矢量。则
$$
(p_1-p_1')^2=-p^2(\vec e-\vec e')^2=-2p^2(1-\cos\theta)\equiv-\Delta^2
$$
$$
(p_1-p_2')^2=-p^2(\vec e+\vec e')^2=-2p^2(1+\cos\theta)\equiv-\Delta_C^2
$$
则Feynman振幅为：
$$
\mathcal A_{fi}=g^2\left[\dfrac{1}{\Delta^2+\mu^2}+\dfrac{1}{\Delta_C^2+\mu^2}\right]
$$
这里我把分母上的 $i\epsilon$ 去掉了，因为分母是恒正的（无极点）。
而在非相对论量子力学中，Born近似的最低阶项说，散射振幅是势场的三维傅里叶变换：
$$
\mathcal A_{fiNR}=\langle f|V|i\rangle\propto\int\mathrm{d}^3\vec r\,V(r)\,\mathrm{e}^{-i\vec\Delta\cdot \vec r}=\tilde V(\Delta)
$$
比较这两个结果，我们看到如果要使QFT的结果能回到非相对论下的结果，应当有：
$$
\tilde V(\Delta)\propto g^2\dfrac{1}{\Delta^2+\mu^2}\Rightarrow V(r)\propto V_{\text{Yukawa}}(r)= g^2\dfrac{\mathrm{e}^{-\mu r}}{r}
$$
我们又一次得到了核子间的等效作用势便是**Yukawa势**，这已经在[[Coleman QFT - Lecture 9. 微扰理论 II：发散与抵消项]]中对Model 2的讨论中得到过，当时我们通过计算固定核子源 $\rho(x)$ 下介子场的基态能量，来推断这一体系具有的相互作用能。现在，我们则是直接考虑核子-介子相互作用体系，通过研究散射过程的振幅来确定相互作用的形式。因此，我们的理论是自洽的。

然而，还没有结束。$\mathcal A_{fi}$ 的第二项又对应什么呢？实际上，这一项来源于入射与出射的粒子是两个**全同粒子**。因此，我们不能判断原先动量为 $\vec p_1$ 的核子散射后变成了动量为 $\vec p_1'$ 的核子还是动量为 $\vec p_2'$ 的核子。引入下面的**交换算符**：
$$
\mathcal E\psi(r_1,r_2)=\psi(r_2,r_1) 
$$
则第二项对应的相互作用势为：
$$
V(r)\propto V_{\text{Yukawa}}(r)\,\mathcal E
$$
因此总的相互作用势可写为：
$$
V(r)\propto V_{\text{Yukawa}}(r)(1+\mathcal E)
$$
