---
title: "Coleman QFT Problem 9"
---

>[!question]
>在[Coleman QFT - Lecture 16. 重整化 II：推广与延伸](./Coleman%20QFT%20-%20Lecture%2016.%20%E9%87%8D%E6%95%B4%E5%8C%96%20II%EF%BC%9A%E6%8E%A8%E5%B9%BF%E4%B8%8E%E5%BB%B6%E4%BC%B8.md)中我们得到了介子的自能函数 $\tilde\Pi'(p^2)$（到 $O(g^2)$ 阶），我们没有将对Feynman参数的积分显式积出来。但如果我们只考虑其虚部，则并不会很繁琐。本题来讨论自能函数的虚部。
>（1）求介子自能函数的虚部表达式。
>（2）用谱定理，证明到任意阶都有：
>$$\mathrm{Im}\,\tilde \Pi'(p^2)\propto|\tilde D(p^2)|^{-2}\sigma(p^2)$$
>并求出比例常数。
>（3）计算到 $O(g^2)$ 阶的 $\sigma(p^2)$，并且将（1）问与（2）问的答案对比。

（1）我们在Lecture 16中得到的结果是：
$$
\tilde\Pi'(p^2)=\dfrac{g^2}{16\pi^2}\int_0^1\mathrm{d}x\left\{\ln\left(\dfrac{m^2-p^2x(1-x)-i\epsilon}{m^2-\mu^2x(1-x)}\right)+(p^2-\mu^2)\dfrac{x(1-x)}{m^2-\mu^2x(1-x)}\right\}
$$
虚部由于对数引起，当分子为负时，由于小虚部 $-i\epsilon$ 限制其在割线下方，因此其幅角为 $-\pi$。即
$$
\mathrm{Im}\,\tilde\Pi'(p^2)=-\dfrac{g^2}{16\pi}\int_0^1\mathrm{d}x\,\theta(p^2x(1-x)-m^2)
$$
后者即一个二次函数在 $[0,1]$ 区间内两零点的间隔长度。其零点为：
$$
x_{1,2}=\dfrac{p^2\pm\sqrt{p^4-4m^2p^2}}{2p^2}
$$
这两个零点的确都在 $[0,1]$ 区间内。因此
$$
\mathrm{Im}\,\tilde\Pi'(p^2)=-\dfrac{g^2}{16\pi}(x_2-x_1)=-\dfrac{g^2}{16\pi}\sqrt{1-\dfrac{4m^2}{p^2}}
$$
当然，对于 $4m^2>p^2$，有 $\mathrm{Im}\,\tilde\Pi'(p^2)=0$。

（2）谱表示定理：
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2+i\epsilon}+\int_0^\infty\mathrm{d} a^2\,\sigma(a^2)\dfrac{i}{p^2-a^2+i\epsilon}
$$
因此：
$$
\dfrac{1}{p^2-\mu^2-\tilde\Pi'(p^2)+i\epsilon}=\dfrac{1}{p^2-\mu^2+i\epsilon}+\int_0^\infty\mathrm{d} a^2\,\sigma(a^2)\dfrac{1}{p^2-a^2+i\epsilon}
$$
取上式的虚部，当 $p^2\ne \mu^2$ 时，左侧的小虚部 $i\epsilon$ 可以去掉，有
$$
\dfrac{\mathrm{Im} \,\tilde\Pi'(p^2)}{|p^2-\mu^2-\tilde\Pi'(p^2)|^2}=-\pi\int_0^\infty\mathrm{d}a^2\,\sigma(a^2)\delta(p^2-a^2)=-\pi\sigma(p^2)
$$
因此
$$
\mathrm{Im} \,\tilde\Pi'(p^2)=-\pi\dfrac{\sigma(p^2)}{|\tilde D'(p^2)|^2}
$$
这是一个普适的结论。

（3）$\sigma(p^2)$ 的定义式为
$$
\sigma(q^2)\theta(q^0)=\sum_{n>1}'(2\pi)^3\delta^{(4)}(q-p_n)|\langle n|\phi'(0)|0\rangle|^2
$$
这里，多粒子态 $|n\rangle$ 可以用出态展开，对所有多粒子态求和相当于对粒子数 $n$ 求和，并对每一粒子数的出态中各动量积分。同时，利用[Coleman QFT - Lecture 14. LSZ约化公式](./Coleman%20QFT%20-%20Lecture%2014.%20LSZ%E7%BA%A6%E5%8C%96%E5%85%AC%E5%BC%8F.md)中LSZ公式的推论，我们得到：
$$
^{\text{out}}\langle k_1,\cdots ,k_n|\phi(y)|0\rangle=\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\,\mathrm{e}^{ik_1\cdot x_1+\cdots+ik_n\cdot x_n}\times\prod_{r=1}^n(\square_r^2+\mu^2)\langle0|T(\phi'(x_1)\cdots\phi'(x_n)\phi(y))|0\rangle
$$
后面的 $\langle0|T(\phi'(x_1)\cdots\phi'(x_n)\phi(y))|0\rangle$ 实际上就是Green函数 $G'^{(n+1)}(x_1,\cdots,x_n,y)$，做Fourier变换得到：
$$
\mathrm{RHS}=(-i)^n\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\mathrm{e}^{iq\cdot y}(k_1^2-\mu^2)\cdots(k_n^2-\mu^2)\tilde G'^{(n+1)}(-k_1\cdots,-k_n,q)
$$
后面的Green函数可以用Feynman图计算。由于我们最终只要 $\sigma(q^2)$ 到 $O(g^2)$ 阶的结果，因此关于 $\tilde G'$ 只需计算至 $O(g)$ 阶即可，这实际上就是一个基本顶点：

<div align="center">
  <img src="./pictures/Pasted image 20260114115828.png" width="600">
</div>
因此
$$
^{\text{out}}\langle k,k'|\phi'(0)|0\rangle=(-ig)\int\mathrm{d}^4q\,\delta^{(4)}(k+k'-q)\dfrac{i}{q^2-\mu^2}=\dfrac{g}{(k+k')^2-\mu^2}
$$
因此到 $O(g^2)$ 阶的结果为：

$$
\sigma(p^2)\theta(p^0)=\int \dfrac{\mathrm{d}^3\vec k}{(2\pi)^32E_{k}}\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32E_{k'}}\left|\dfrac{g}{(k+k')^2-\mu^2}\right|^2(2\pi)^3\delta^{(4)}(p-k-k')
$$
由于上面 $p=k+k'$ ，故 $p^0>0$ 成立，因此
$$
\sigma(p^2)=\left|\dfrac{g}{p^2-\mu^2}\right|^2\dfrac{1}{2\pi}\underbrace{\int \dfrac{\mathrm{d}^3\vec k}{(2\pi)^32E_{k}}\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32E_{k'}}(2\pi)^4\delta^{(4)}(p-k-k')}_{\text{two particle state density}}
$$
后面的积分正是双粒子末态的态密度积分，这我们已经在[Coleman QFT - Lecture 12. 散射理论 II：应用](./Coleman%20QFT%20-%20Lecture%2012.%20%E6%95%A3%E5%B0%84%E7%90%86%E8%AE%BA%20II%EF%BC%9A%E5%BA%94%E7%94%A8.md)中计算过，有结论：
$$
D=\int \dfrac{\mathrm{d}^3\vec k}{(2\pi)^32E_{k}}\dfrac{\mathrm{d}^3\vec k'}{(2\pi)^32E_{k'}}(2\pi)^4\delta^{(4)}(p-k-k')=\dfrac{1}{16\pi^2}\dfrac{|\vec p_f|\mathrm{d}\varOmega_f}{E_T}
$$
注意这里由于我们已经知道最终的结果是Lorentz不变的，因此我们换到了质心系。此时入射的是单粒子，因此是各向同性的，可以完成对角度的积分：
$$
D=\dfrac{1}{4\pi}\dfrac{|\vec p_f|}{E_T}=\dfrac{1}{4\pi}\dfrac{\sqrt{p^2/4-m^2}}{\sqrt {p^2}}=\dfrac{1}{8\pi}\sqrt{1-\dfrac{4m^2}{p^2}}
$$
$$
\sigma(p^2)=\left|\dfrac{g}{p^2-\mu^2}\right|^2\dfrac{1}{2\pi}D=\left|\dfrac{g}{p^2-\mu^2}\right|^2\dfrac{1}{16\pi^2}\sqrt{1-\dfrac{4m^2}{p^2}}
$$
利用（2）的结论：
$$
\mathrm{Im} \,\tilde\Pi'(p^2)=-\pi\dfrac{\sigma(p^2)}{|\tilde D'(p^2)|^2}=-\dfrac{g^2}{16\pi}\sqrt{1-\dfrac{4m^2}{p^2}}
$$
其中用到了
$$
\tilde D'(p^2)=\dfrac{i}{p^2-\mu^2+i\epsilon}\quad \text{to }\,O(g^0)
$$
这一结果与（1）问是相同的。

---

>[!question]
>（1）计算到 $O(g^3)$ 阶的 $-i\tilde\Gamma'(p^2,p'^2,q^2)$，取 $p^2=p'^2=m^2$。结果表示为对两个Feynman参数的积分。
>（2）验证该函数的性质为：其有以 $q^2=4m^2$ 为起点到 $+\infty$ 的实轴上的割线，除此之外全平面解析。

到 $O(g^3)$ 阶的图为：
<div align="center">
  <img src="./pictures/Pasted image 20260114123558.png" width="600">
</div>
主要来计算第二个图：

<div align="center">
  <img src="./pictures/Pasted image 20260114123629.png" width="500">
</div>

$$
-i\tilde\Gamma^f(p^2,p'^2,q^2)=(-ig)^3\int\dfrac{\mathrm d^4k}{(2\pi)^4}\dfrac{i}{k^2-\mu^2+i\epsilon}\dfrac{i}{(p+k)^2-\mu^2+i\epsilon}\dfrac{i}{(p'-k)^2-\mu^2+i\epsilon}
$$
Feynman参数化给出：
$$
-i\tilde\Gamma^f(p^2,p'^2,q^2)=g^3\int\dfrac{\mathrm d^4k}{(2\pi)^4}\int_0^1\mathrm{d}\alpha_1\mathrm{d}\alpha_2\mathrm{d}\alpha_3\,\delta(1-\alpha_1-\alpha_2-\alpha_3)\dfrac{2!}{D}
$$
其中
$$
D=((p'-k)^2-m^2+i\epsilon)\alpha_1+((p+k)^2-m^2+i\epsilon)\alpha_2+(k^2-m^2+i\epsilon)\alpha_3
$$
直接取 $\alpha_3=1-\alpha_1-\alpha_2$，并且化简：
$$
D=(k-p'x+py)^2+a,\quad a=-p'^2x^2-p^2y^2+2p\cdot p'xy+xp'^2+yp^2-(1-x-y)\mu^2-(x+y)m^2+i\epsilon
$$
换元 $k\to k'=k-p'x+py$，并且利用积分表得到：
$$
\int\dfrac{\mathrm d^4k'}{(2\pi)^4}\dfrac{1}{(k'^2+a)^3}=\dfrac{i}{32\pi^2a}
$$
$a$ 可以进一步化简，利用 $q=p+p'$ 并且限制 $p^2=p'^2=m^2$：
$$
a=xyq^2-m^2(x+y)^2-(1-x-y)\mu^2+i\epsilon
$$
最终得到：
$$
\tilde\Gamma^f(m^2,m^2,q^2)=-\dfrac{g^3}{16\pi^2}\int_0^1\mathrm{d}x\int_0^{1-x}\mathrm{d}y\dfrac{1}{xyq^2-m^2(x+y)^2-(1-x-y)\mu^2+i\epsilon}
$$
$$
\tilde \Gamma'(m^2,m^2,q^2)=g+\tilde \Gamma^f(m^2,m^2,q^2)-\tilde \Gamma^f(m^2,m^2,\mu^2)
$$
（2）此函数仅当被积函数的分母为零时不解析，这等价于：
$$
q^2=\dfrac{m^2(x+y)^2-\mu^2(1-x-y)}{xy},\quad x\in[0,1],\,y\in[0,1-x]
$$
积分区域为xy平面上的三角形。做换元 $w=x+y\in[0,1],\quad z=x-y\in[-w,w]$。则
$$
q^2=\dfrac{4(w^2m^2+(1-w)\mu^2)}{w^2-z^2}
$$
先来看**最小值**。显然应取 $z=0$，则 $q^2_{\min,z}=4m^2+\dfrac{4(1-w)}{w^2}\mu^2$，再取 $w=1$ 得到最小值 $q_{\min}=4m^2$。
再来看**最大值**，由于 $z$ 可以无限制地接近于 $w$，因此 $q^2$ 可以任意的大。这样，我们就说明了实轴上 $[4m^2,+\infty]$ 的割线的存在。

---












