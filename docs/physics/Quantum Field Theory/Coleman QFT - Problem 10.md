---
title: "Coleman QFT Problem 10"
---

>[!question]
>计算重整化“核子”的自能 $\tilde\Sigma'(p^2)$，同样到最低阶 $O(g^2)$ 阶。将答案表示为对一个Feynman参数的积分。证明其在复 $p^2$ 平面上有一条实轴上的割线，其他地方都解析。找到割线的起点（终点为 $+\infty$ ）。


重整化的自能函数为：
$$
i\tilde \Sigma'(p^2)=-i\left[\tilde \Sigma^f(p^2)-\tilde \Sigma^f(m^2)-(p^2-m^2)\dfrac{\mathrm{d}\tilde \Sigma^f}{\mathrm{d}p^2}\bigg|_{p^2=m}\right]
$$
其中 $\tilde \Sigma^f(p^2)$ 对应于下图：

<div align="center">
  <img src="./pictures/Pasted image 20260124224219.png" width="300">
</div>

即
$$
\begin{align}
\tilde \Sigma^f(p^2)&=(-ig)^2\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\dfrac{i}{(q+p)^2-\mu^2+i\epsilon}\dfrac{i}{q^2-m^2+i\epsilon}\\
&=\dfrac{g^2}{(2\pi)^4}\int_0^1\mathrm{d}x\int\dfrac{\mathrm{d}^4q}{[x((p+q)^2-\mu^2+i\epsilon)+(1-x)(q^2-m^2+i\epsilon)]^2}\\
&=-\dfrac{ig^2}{16\pi^2}\int_0^1\mathrm{d}x\,\ln[x^2p^2-x(p^2+m^2-\mu^2)+m^2-i\epsilon]
\end{align}
$$
因此
$$
\tilde \Sigma'(p^2)=\int_0^1\mathrm{d}x\,\left\{\ln\left[\dfrac{x^2p^2-x(p^2+m^2-\mu^2)+m^2-i\epsilon}{x^2m^2-x(2m^2-\mu^2)+m^2-i\epsilon}\right]-\dfrac{(x^2-x)(p^2-m^2)}{x^2m^2-x(2m^2-\mu^2)+m^2-i\epsilon}\right\}
$$
接下来来看解析结构。分母：
$$
x^2m^2-x(2m^2-\mu^2)+m^2=m^2(1-x)^2+x\mu^2>0
$$
因此非解析只能由对数带来。分子：
$$
f(x)\equiv x^2p^2-x(p^2+m^2-\mu^2)+m^2
=0$$
$$
f'(x)=2p^2x-(p^2+m^2-\mu^2)=0\Rightarrow x=\dfrac12+\dfrac{m^2-\mu^2}{2p^2}
$$
因此最小值为：
$$
f_{\min}(x)=-\dfrac{(p^2+m^2-\mu^2)^2}{4p^2}+m^2
$$
临界点为：
$$
p^2=(m\pm \mu)^2
$$
而 $p^2=(m-\mu)^2<m^2\;(\mu<2m)$ 是不可能的，因为核子传播子有 $p^2=m^2$ 处的一阶极点。因此割线的起点为：
$$
p^2=(m+\mu)^2
$$
这也是一个虚核子能变成一个核子与一个介子的最低能量。

---
