---
title: "Coleman QFT Problem 13"
---

>[!question]
>在[Coleman QFT - Lecture 23. 旋量场理论的重整化](./Coleman%20QFT%20-%20Lecture%2023.%20%E6%97%8B%E9%87%8F%E5%9C%BA%E7%90%86%E8%AE%BA%E7%9A%84%E9%87%8D%E6%95%B4%E5%8C%96.md)中，对核子自能函数的计算还剩了一点没完成。请完成 $\tilde\Sigma'(p\mkern-8.5mu/)$ 到 $O(g^2)$ 阶的计算，最后仅保留对Feynman参数的积分。

已经得到的结果是：
$$
\tilde\Sigma'(p\mkern-8.5mu/)=\Sigma^f(p\mkern-8.5mu/)-\Sigma^f(m)-(p\mkern-8.5mu/-m)\dfrac{\mathrm{d}\Sigma^f}{\mathrm{d}p\mkern-8.5mu/}\bigg|_{p\mkern-8.5mu/=m}
$$
以及
$$
\Sigma^f(p\mkern-8.5mu/)=-\dfrac{ig^2}{(2\pi)^4}\int\mathrm{d}^4k'\int_0^1\mathrm{d}x\,\dfrac{-p\mkern-8.5mu/(1-x)+m}{[k'^2+p^2x(1-x)-m^2x-\mu^2(1-x)+i\epsilon]^2}
$$
只用完成对 $k'$ 的积分，[Coleman QFT - Lecture 15. 重整化 I：确定抵消项](./Coleman%20QFT%20-%20Lecture%2015.%20%E9%87%8D%E6%95%B4%E5%8C%96%20I%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%8A%B5%E6%B6%88%E9%A1%B9.md)最后一节的积分表给出：
$$
I_2=\int\dfrac{\mathrm{d}^4 q}{(2\pi)^4}\dfrac{1}{(q^2+a+i\epsilon)^2}=-\dfrac{i}{16\pi^2}\ln(-a)
$$
则
$$
\Sigma^f(p\mkern-8.5mu/)=\dfrac{g^2}{16\pi^2}\int_0^1\mathrm{d}x\,[p\mkern-8.5mu/(1-x)-m]\ln[-p^2x(1-x)+(1-x)\mu^2+xm^2-i\epsilon]
$$
最后得到：
$$
\begin{align}
&\tilde\Sigma'(p\mkern-8.5mu/)=\dfrac{g^2}{16\pi^2}\int_0^1\mathrm{d}x\,\bigg\{[p\mkern-8.5mu/(1-x)-m]\ln[-p^2x(1-x)+(1-x)\mu^2+xm^2-i\epsilon]\\
&+mx\ln[x^2m^2+(1-x)\mu^2-i\epsilon]-(p\mkern-8.5mu/-m)\left[(1-x)\ln[x^2m^2+(1-x)\mu^2-i\epsilon]+\dfrac{2m^2x^2(1-x)}{(1-x)\mu^2+x^2m^2-i\epsilon}\right]\bigg\}
\end{align}
$$
---

>[!question]
>（1）类似的，计算到 $O(g^2)$ 阶的介子的自能函数 $\tilde\Pi'(k^2)$。仅保留对Feynman参数的积分。
>（2）在[Coleman QFT - Problem 9](./Coleman%20QFT%20-%20Problem%209.md)中，我们推导过公式：
>$$-\mathrm{Im}[-i\tilde D'(k^2)]^{-1}=\mathrm{Im}\,\tilde \Pi'(k^2)=\dfrac{-\pi\sigma(k^2)}{|\tilde D(k^2)|^2}$$
>由于当 $k>2m$ 时 $\sigma(k^2)>0$ ，因此介子自能函数 $\tilde\Pi'(k^2)$ 的虚部在 $k>2m$ 时是负的。由（1）的计算结果验证这一点。

（1）类似的
$$
\tilde\Pi'(k^2)=\Pi^f(k^2)-\Pi^f(\mu^2)-(k^2-\mu^2)\dfrac{\mathrm{d}\Pi^f}{\mathrm{d}k^2}\bigg|_{k^2=\mu^2}
$$
相关的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260209121123.png" width="700">
</div>

对应的表达式为：
$$
\begin{align}
-i\tilde\Pi^f(k^2)=&(-ig)^2\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\cdot-\mathrm{Tr}\left[\dfrac{i(k\mkern -8.5mu/+q\mkern -8.5mu/+m)}{(k+q)^2-m^2+i\epsilon}i\gamma_5\dfrac{i(q\mkern -8.5mu/+m)}{q^2-m^2+i\epsilon}i\gamma_5\right]\\
=&-g^2\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\dfrac{4[(k+q)\cdot q-m^2]}{[(k+q)^2-m^2+i\epsilon][q^2-m^2+i\epsilon]}\\
=&-g^2\int_0^1\mathrm{d}x\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\dfrac{4[(k+q)\cdot q-m^2]}{(q^2+2q\cdot kx+k^2x-m^2+i\epsilon)^2}\\
\overset{q'=q+kx}{=\!=\!=}&-g^2\int_0^1\mathrm{d}x\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\dfrac{4[q'^2-k^2x(1-x)-m^2]}{(q'^2+k^2x(1-x)-m^2+i\epsilon)^2}\\
=&4g^2\int_0^1\mathrm{d}x\int\dfrac{\mathrm{d}^4q}{(2\pi)^4}\left[\dfrac{2k^2x(1-x)}{(q'^2+k^2x(1-x)-m^2+i\epsilon)^2}-\dfrac{1}{q'^2+k^2x(1-x)-m^2+i\epsilon}\right]\\
=&-\dfrac{ig^2}{4\pi^2}\int_0^1\mathrm{d}x\cdot[3k^2x(1-x)-m^2]\ln(m^2-k^2x(1-x)-i\epsilon)
\end{align}
$$
代入最开始的式子：
$$
\tilde\Pi'(k^2)=\dfrac{g^2}{4\pi^2}\int_0^1\mathrm{d}x\left[(3k^2x(1-x)-m^2)\ln\left(\dfrac{m^2-k^2x(1-x)-i\epsilon}{m^2-\mu^2x(1-x)}\right)+\dfrac{(3\mu^2x(1-x)-m^2)x(1-x)}{m^2-\mu^2x(1-x)}(k^2-\mu^2)\right]
$$
（2） $\tilde\Pi'(k^2)$ 的虚部来源于对数中的分子小于零，则其相角为 $-\pi$。因此我们只用看 $\Pi^f$ ：
$$
\Pi^f(k^2)=\dfrac{g^2}{4\pi^2}\int_0^1\mathrm{d}x\cdot[3k^2x(1-x)-m^2]\ln(m^2-k^2x(1-x)-i\epsilon)
$$
$$
\mathrm{Im}\,\Pi^f(k^2)=-\dfrac{g^2}{4\pi}\int_0^1\mathrm{d}x\,[3k^2x(1-x)-m^2]\,\theta(k^2x(1-x)-m^2)
$$
当 $k^2>4m^2$ 时，存在 $x\in[0,1]$ 中的一段区域使得 $k^2x(1-x)-m^2>0$，同时这段区域满足 $3k^2x(1-x)-m^2>0$，因此最终的符号是负号：
$$
\mathrm{sgn}\left(\mathrm{Im}\,\Pi^f(k^2)\right)=-1
$$
正是我们期望的结果。这验证了对于Fermi线的环路要加一个负号再求迹。

---
