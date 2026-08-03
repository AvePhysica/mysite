---
title: "Coleman QFT Problem 5"
---

>[!question]
>本题讨论Pair Model，其由G.Wentzel提出。模型的相互作用哈密顿量由下式给出：
>$$H_I=\dfrac{1}{2}g\,\left(\int\mathrm{d}^3\vec x\,\rho(\vec x)\phi(\vec x,t)\right)^2$$
>其与Model 2不同的点便在于其为一个二次型。
>
>（1）计算 $\langle\vec p|S-1|\vec p'\rangle$，即单粒子态跃迁振幅。说明下式成立：
>$$\langle\vec p|S-1|\vec p'\rangle=\tilde\rho(\vec p)\tilde\rho(\vec p')^*F(\omega_{\vec p})\delta(\omega_{\vec p}-\omega_{\vec p'})$$
>其中 $F(\omega_{\vec p})$ 是一个关于 $\omega_{\vec p}$ 的函数，应表示为对 $|\tilde\rho(\vec p)|^2$ 的积分。
>
>（2）计算说明 $S^\dagger S-1=0$ 对于单粒子态成立，即
>$$\langle\vec p|S^\dagger S-1|\vec p'\rangle=0$$

（1）由于我们只要求单粒子态的矩阵元，这为我们化简许多的缩并提供了极大的便利。直接来计算：
$$
\langle \vec p|S-1|\vec p'\rangle=\langle\vec p|\,T\exp\left[-i\int\mathrm{d}t\,H_I\right]-1|\vec p'\rangle=\sum_{n=1}^\infty\dfrac{(-ig)^n}{2^n\,n!}\int\mathrm{d}t_1\mathrm{d}^3\vec x_1\mathrm{d}^3\vec y_1\cdots\mathrm{d}t_n\mathrm{d}^3\vec x_n\mathrm{d}^3\vec y_n\,\rho(\vec x_1)\rho(\vec y_1)\cdots\rho(\vec x_n)\rho(\vec y_n)\langle\vec p|\,T(\phi(x_1)\phi(y_1)\cdots\phi(x_n)\phi(y_n))|\vec p'\rangle
$$
对于单粒子态矩阵元，留下的标量场算符个数只能为0或2。但是，我们不需要关注那些完全缩并的算符，因为其应当被抵消项抵消。也就是说，我们只需要考虑有两个场没有缩并的算符即可，即
$$
\mathrm{RHS}=\sum_{n=1}^\infty\dfrac{(-ig)^n}{2^n\,n!}\int\mathrm{d}t_1\mathrm{d}^3\vec x_1\mathrm{d}^3\vec y_1\cdots\mathrm{d}t_n\mathrm{d}^3\vec x_n\mathrm{d}^3\vec y_n\,\rho(\vec x_1)\rho(\vec y_1)\cdots\rho(\vec x_n)\rho(\vec y_n)\langle\vec p|:\phi(\vec x_1,t_1)\overset {|\Large \mkern-2mu{}^{\overline{\quad\quad\;\,}}\mkern-3mu\normalsize |}{\phi(\vec y_1,t_1) \phi} (\vec x_2,t_2)\cdots\overset {|\Large \mkern-2mu{}^{\overline{\quad\quad\quad\;\;\;}}\mkern-3mu\normalsize |}{\phi(\vec y_{n-1},t_{n-1}) \phi} (\vec x_n,t_n)\phi(\vec y_n,t_n):|\vec p'\rangle+\text{permutations}
$$
我们怎么处理置换呢？先来看看一共有多少种置换。首先我们可以对每一个序号交换 $x$ 与 $y$ ，这将产生一个 $2^n$ 的因子。此外，我们还可以对序号做置换，一共有 $n!$ 种置换方式。而积分的对称性使得每一种置换方式的贡献是相同的，因此：
$$
\mathrm{RHS}=\sum_{n=1}^\infty\dfrac{(-ig)^n}{2}\int\mathrm{d}t_1\mathrm{d}^3\vec x_1\mathrm{d}^3\vec y_1\cdots\mathrm{d}t_n\mathrm{d}^3\vec x_n\mathrm{d}^3\vec y_n\,\rho(\vec x_1)\rho(\vec y_1)\cdots\rho(\vec x_n)\rho(\vec y_n)\langle\vec p|:\phi(\vec x_1,t_1)\overset {|\Large \mkern-2mu{}^{\overline{\quad\quad\;\,}}\mkern-3mu\normalsize |}{\phi(\vec y_1,t_1) \phi} (\vec x_2,t_2)\cdots\overset {|\Large \mkern-2mu{}^{\overline{\quad\quad\quad\;\;\;}}\mkern-3mu\normalsize |}{\phi(\vec y_{n-1},t_{n-1}) \phi} (\vec x_n,t_n)\phi(\vec y_n,t_n):|\vec p'\rangle
$$
这里注意前面有一个 $1/2$，这是因为我们**重复计算**了一种置换：即将 $1\sim n$ 逆序排列，又交换了所有的 $x,y$。这将得到与原先相同的缩并方式。缩并只是一些数，可以提到外面。我们真正要计算的矩阵元是 $\langle\vec p|:\phi(\vec x_1,t_1)\phi(\vec y_n,t_n):|\vec p'\rangle$。将其分为产生与湮灭部分，有贡献的项是其中的两项：
$$
\langle\vec p|:\phi(\vec x_1,t_1)\phi(\vec y_n,t_n):|\vec p'\rangle=\langle\vec p|\phi^-(\vec x_1,t_1)\phi^+(\vec y_n,t_n)+\phi^-(\vec y_n,t_n)\phi^+(\vec x_1,t_1)|\vec p'\rangle
$$
同样的，两项的贡献应当相等。因此，我们可以只考虑前面的一项，并去掉系数 $1/2$。
现在来计算 $\langle\vec p|\phi^-(\vec x_1,t_1)\phi^+(\vec y_n,t_n)|\vec p'\rangle$：
$$
\begin{align}
\langle\vec p|\phi^-(\vec x_1,t_1)\phi^+(\vec y_n,t_n)|\vec p'\rangle&=\int\dfrac{\mathrm{d}^3\vec q}{(2\pi)^{3/2}\sqrt{2\omega_{\vec q}}}\mathrm{e}^{iq\cdot x_1}\int\dfrac{\mathrm{d}^3\vec q'}{(2\pi)^{3/2}\sqrt{2\omega_{\vec q'}}}\mathrm{e}^{-iq'\cdot y_n}\langle \vec p|a_{\vec q}^\dagger \,a_{\vec q'}|\vec p'\rangle\\&=\int\dfrac{\mathrm{d}^3\vec q}{(2\pi)^{3/2}\sqrt{2\omega_{\vec q}}}\mathrm{e}^{iq\cdot x_1}\int\dfrac{\mathrm{d}^3\vec q'}{(2\pi)^{3/2}\sqrt{2\omega_{\vec q'}}}\mathrm{e}^{-iq'\cdot y_n}\,\delta^{(3)}(\vec p-\vec q)\delta^{(3)}(\vec p'-\vec q')\\&=\dfrac{\mathrm{e}^{ip\cdot x_1}}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\dfrac{\mathrm{e}^{-ip'\cdot y_n}}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p'}}}

\end{align}
$$
同时缩并可表示为四维积分，则
$$
\langle \vec p|S-1|\vec p'\rangle=\sum_{n=1}^{\infty}(-ig)^n\int\mathrm{d}t_1\mathrm{d}^3\vec x_1\mathrm{d}^3\vec y_1\cdots\mathrm{d}t_n\mathrm{d}^3\vec x_n\mathrm{d}^3\vec y_n\,\rho(\vec x_1)\rho(\vec y_1)\cdots\rho(\vec x_n)\rho(\vec y_n)\times\dfrac{\mathrm{e}^{ip\cdot x_1}}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p}}}\dfrac{\mathrm{e}^{-ip'\cdot y_n}}{(2\pi)^{3/2}\sqrt{2\omega_{\vec p'}}}\prod_{i=1}^{n-1}\int\dfrac{\mathrm{d}^4k_i}{(2\pi)^4}\dfrac{i\,\mathrm{e}^{-ik_i\cdot(y_i-x_{i+1})}}{k_i^2-\mu^2+i\epsilon}
$$
先完成空间积分：
$$
\mathrm{RHS}=\sum_{n=1}^\infty\dfrac{(-ig)^n\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{(2\pi)^3\sqrt{2\omega_{\vec p}\cdot2\omega_{\vec p'}}}\int\mathrm{d}t_1\mathrm{d}t_2\cdots\mathrm{d}t_n\,\mathrm{e}^{i\omega_{\vec p}t_1}\mathrm{e}^{-i\omega_{\vec p'}t_n}\times\prod_{i=1}^{n-1}\int\dfrac{\mathrm{d}^4k_i}{(2\pi)^4}\dfrac{|\tilde\rho(\vec k_i)|^2i\,\mathrm{e}^{-ik_i^0(t_i-t_{i+1})}}{k_i^2-\mu^2+i\epsilon}
$$
再完成对时间的积分：
$$
\mathrm{RHS}=-ig\,\delta(\omega_{\vec p}-\omega_{\vec p'})\dfrac{\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{(2\pi)^2\,2\omega_{\vec p}}\sum_{n=1}^\infty\prod_{i=1}^{n-1}g\int\dfrac{\mathrm{d}^3\vec k_i}{(2\pi)^3}\dfrac{|\tilde\rho(\vec k_i)|^2}{\omega_{\vec p}-|\vec k_i|^2-\mu^2+i\epsilon}
$$
可以看出，后面积分中的 $i$ 并不重要，因为 $\vec k_i$ 就是积分变量，因此我们可以记
$$
G(\omega_{\vec p})\equiv g\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3}\dfrac{|\tilde\rho(\vec k)|^2}{\omega_{\vec p}-|\vec k|^2-\mu^2+i\epsilon}
$$
则后面的求和是一个等比数列求和：
$$
\langle \vec p|S-1|\vec p'\rangle=-ig\,\delta(\omega_{\vec p}-\omega_{\vec p'})\dfrac{\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{(2\pi)^2\,2\omega_{\vec p}}\sum_{n=1}^\infty[G(\omega_{\vec p})]^{n-1}=-\dfrac{ig\,\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{8\pi^2\omega_{\vec p}}\delta(\omega_{\vec p}-\omega_{\vec p'})\dfrac{1}{1-G(\omega_{\vec p})}
$$
故
$$
\langle\vec p|S-1|\vec p'\rangle=\tilde\rho(\vec p)\tilde\rho(\vec p')^*F(\omega_{\vec p})\delta(\omega_{\vec p}-\omega_{\vec p'}),\quad F(\omega_{\vec p})=-\dfrac{ig}{8\pi^2\omega_{\vec p}}\dfrac{1}{1-G(\omega_{\vec p})}
$$
成立。

（2）考虑下面的恒等式：
$$
S^\dagger S-1=(S^\dagger-1)(S-1)+(S-1)+(S^\dagger-1)
$$
已知
$$
\langle\vec p|S-1|\vec p'\rangle=\tilde\rho(\vec p)\tilde\rho(\vec p')^*F(\omega_{\vec p})\delta(\omega_{\vec p}-\omega_{\vec p'}),\quad F(\omega_{\vec p})=-\dfrac{ig}{8\pi^2\omega_{\vec p}}\dfrac{1}{1-G(\omega_{\vec p})}
$$
取其共轭得到：
$$
\langle\vec p|S^\dagger-1|\vec p'\rangle=\langle\vec p'|S^\dagger-1|\vec p\rangle^*=\tilde\rho(\vec p)\tilde\rho(\vec p')^*F(\omega_{\vec p})^*\delta(\omega_{\vec p}-\omega_{\vec p'})
$$
则两者之和为
$$
\begin{align}
\langle\vec p|S-1|\vec p'\rangle+\langle\vec p|S^\dagger-1|\vec p'\rangle&=\dfrac{ig\,\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{8\pi^2\omega_{\vec p}|1-G(\omega_{\vec p})|^2}\delta(\omega_{\vec p}-\omega_{\vec p'})\cdot g\int\dfrac{\mathrm{d}^3\vec k}{(2\pi)^3}|\tilde\rho(\vec k)|^2\cdot2\pi i\delta(\omega_{\vec p}^2-\omega_{\vec k}^2)\\&=\dfrac{ig\,\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{8\pi^2\omega_{\vec p}|1-G(\omega_{\vec p})|^2}\delta(\omega_{\vec p}-\omega_{\vec p'})\cdot\left[\dfrac{ig}{8\pi^2\omega_{\vec p}}\int\mathrm{d}^3\vec k\,|\tilde\rho(\vec k)|^2\delta(\omega_{\vec p}-\omega_{\vec k})\right]
\end{align}
$$
另一方面
$$
\begin{align}
\langle\vec p|(S-1)(S^\dagger-1)|\vec p'\rangle&=\int\mathrm{d}^3\vec k\,\langle\vec p|S-1|\vec k\rangle\langle\vec k|S-1|\vec p'\rangle\\&=\dfrac{ig\,\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{8\pi^2\omega_{\vec p}|1-G(\omega_{\vec p})|^2}\left[-\dfrac{ig}{8\pi^2}\int\dfrac{\mathrm{d}^3\vec k}{\omega_{\vec p'}}\tilde\rho(\vec k)^*\delta(\omega_{\vec p}-\omega_\vec k)\tilde\rho(\vec k)\delta(\omega_{\vec p'}-\omega_\vec k)\right]\\&=\dfrac{ig\,\tilde\rho(\vec p)\,\tilde\rho(\vec p')^*}{8\pi^2\omega_{\vec p}|1-G(\omega_{\vec p})|^2}\delta(\omega_{\vec p}-\omega_{\vec p'})\cdot\left[\dfrac{-ig}{8\pi^2\omega_{\vec p}}\int\mathrm{d}^3\vec k\,|\tilde\rho(\vec k)|^2\delta(\omega_{\vec p}-\omega_{\vec k})\right]
\end{align}
$$
比较可得两者互为相反数，因此
$$
\langle\vec p|S^\dagger S-1|\vec p'\rangle=\langle\vec p|(S-1)(S^\dagger-1)|\vec p'\rangle+\langle\vec p|S-1|\vec p'\rangle+\langle\vec p|S^\dagger-1|\vec p'\rangle=0
$$
