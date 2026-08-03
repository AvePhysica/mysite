---
title: "Coleman QFT Problem 12"
---

>[!question]
>当我们尝试对自由Dirac理论用对易子量子化时，我们遇到了能量不正定的问题，因此转而使用反对易子进行正则量子化规避了此问题。下面，我们来尝试对原先的标量场理论使用**反对易子**量子化。对于一个自由的带电标量场：
>$$\mathcal L=\pm(\partial_\mu\phi^*-\mu^2\phi^*\phi)$$
>假设其满足基本反对易关系：
>$$\{\phi(\vec x,t),\phi(\vec y,t)\}=\{\dot\phi(\vec x,t),\dot\phi(\vec y,t)\}=0$$
>$$\{\phi(\vec x,t),\phi^*(\vec y,t)\}=\{\dot\phi(\vec x,t),\dot\phi^*(\vec y,t)\}=0$$
>$$\{\phi(\vec x,t),\dot \phi^*(\vec y,t)\}=\lambda\delta^{(3)}(\vec x-\vec y)$$
>说明其会破坏Hilbert空间中的反对易子**正定性**，这是指对于任何 $\theta$ 以及态矢量 $|\phi\rangle$，均有
>$$\langle\phi|\{\theta,\theta^\dagger\}|\phi\rangle\geq 0$$

考虑标量场的平面波展开式：
$$
\phi(x)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_p}}[b_\vec p\,\mathrm{e}^{-ip\cdot x}+c_\vec p^\dagger \,\mathrm{e}^{ip\cdot x}]
$$
因此
$$
\phi(\vec x,0)=\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}\sqrt{2\omega_p}}[b_\vec p\,\mathrm{e}^{i\vec p\cdot \vec x}+c_\vec p^\dagger \,\mathrm{e}^{-i\vec p\cdot \vec x}],\quad \dot\phi(\vec x,0)=i\int\dfrac{\mathrm{d}^3\vec p}{(2\pi)^{3/2}}\sqrt{\dfrac{\omega_p}{2}}[-b_\vec p\,\mathrm{e}^{i\vec p\cdot \vec x}+c_\vec p^\dagger \,\mathrm{e}^{ip\cdot x}]
$$
由其可以反解出：
$$
b_\vec p=\int\dfrac{\mathrm{d}^3\vec x}{(2\pi)^{3/2}}\mathrm{e}^{-i\vec p\cdot\vec x}\left[\sqrt{\dfrac{\omega_p}{2}}\phi(\vec x,0)+\dfrac{i}{\sqrt{2\omega_p}}\dot\phi(\vec x,0)\right],\quad c_\vec p^\dagger=\int\dfrac{\mathrm{d}^3\vec x}{(2\pi)^{3/2}}\mathrm{e}^{i\vec p\cdot\vec x}\left[\sqrt{\dfrac{\omega_p}{2}}\phi(\vec x,0)-\dfrac{i}{\sqrt{2\omega_p}}\dot\phi(\vec x,0)\right]
$$
取厄米共轭得到：
$$
b_\vec p^\dagger=\int\dfrac{\mathrm{d}^3\vec x}{(2\pi)^{3/2}}\mathrm{e}^{i\vec p\cdot\vec x}\left[\sqrt{\dfrac{\omega_p}{2}}\phi^*(\vec x,0)-\dfrac{i}{\sqrt{2\omega_p}}\dot\phi^*(\vec x,0)\right],\quad c_\vec p=\int\dfrac{\mathrm{d}^3\vec x}{(2\pi)^{3/2}}\mathrm{e}^{-i\vec p\cdot\vec x}\left[\sqrt{\dfrac{\omega_p}{2}}\phi^*(\vec x,0)+\dfrac{i}{\sqrt{2\omega_p}}\dot\phi^*(\vec x,0)\right]
$$
计算反对易子：
$$
\{b_\vec p,b_{\vec p'}^\dagger\}=\int\dfrac{\mathrm{d}^3\vec x}{(2\pi)^3}\,\mathrm{e}^{-i(\vec p-\vec p')\cdot \vec x}\dfrac{i}{2}\left[\lambda^*\sqrt{\dfrac{\omega_{p'}}{\omega_p}}-\lambda\sqrt{\dfrac{\omega_p}{\omega_{p'}}}\right]=\mathrm{Im(\lambda)\delta^{(3)}}(\vec p-\vec p')
$$
$$
\{c^\dagger_\vec p,c_{\vec p'}\}=-\mathrm{Im}(\lambda)\delta^{(3)}(\vec p-\vec p')
$$
因此 $\langle 0|\{b_\vec p,b_{\vec p'}^\dagger\}|0\rangle$ 与 $\langle 0|\{c_\vec p,c_{\vec p'}^\dagger\}|0\rangle$ 不可能同时为正，破坏了正定性。

---

>[!question]
>计算质心系中介子-核子散射的微分散射截面，到最低阶 $O(g^2)$ 即可。此时的相互作用为“标量”理论：
>$$\mathcal L'_I=g\bar\psi\psi\phi$$

$O(g^2)$ 阶的两个Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260202165541.png" width="600">
</div>

其对应的Feynman振幅为：
$$
i\mathcal A^{(1)}_{rs}=-g^2\bar u^{(r)}_{\vec p'}\dfrac{i(p\mkern -8.5 mu/+k\mkern -8.5 mu/+m)}{(p+k)^2-m^2}u_\vec p^{(s)},\quad i\mathcal A_{rs}^{(2)}=-g^2\bar u^{(r)}_{\vec p'}\dfrac{i(p\mkern -8.5 mu/-k\mkern -8.5 mu/'+m)}{(p-k')^2-m^2}u_\vec p^{(s)}
$$
令
$$
A=\dfrac{1}{(p+k)^2-m^2}+\dfrac{1}{(p-k')^2-m^2},\quad B=\dfrac{1}{(p+k)^2-m^2}-\dfrac{1}{(p-k')^2-m^2}
$$
则
$$
i\mathcal A_{rs}=-ig^2 \bar u_{\vec p'}^{(r)}(2mA+k\mkern-8.5mu/B)u_\vec p^{(s)}
$$
微分散射截面为：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{1}{64\pi^2E_T^2}\cdot\dfrac12\sum_{r,s}|\mathcal A_{rs}|^2
$$
其中
$$
\begin{align}
\sum_{r,s}|\mathcal A_{rs}|^2&=g^4\sum_{r,s}\bar u_{\vec p'}^{(r)}(2mA+k\mkern-8.5mu/B)u_\vec p^{(s)}\bar u_{\vec p}^{(s)}(2mA+k\mkern-8.5mu/B)u_{\vec p'}^{(r)}\\&=g^4\,\mathrm{Tr}\,[(p\mkern-8.5 mu/'+m)(2mA+k\mkern-8.5mu/B)(p\mkern-8.5 mu/+m)(2mA+k\mkern-8.5mu/B)]\\
&=4g^4\left[4m^2A^2(p\cdot p'+m^2)+4m^2ABk\cdot(p+p')+B^2(m^2\mu^2+2(p\cdot k)(p'\cdot k)-\mu^2(p\cdot p'))\right]
\end{align}
$$
因此最终得到：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{g^4}{32\pi^2E_T^2}\left[4m^2A^2(p\cdot p'+m^2)+4m^2ABk\cdot(p+p')+B^2(m^2\mu^2+2(p\cdot k)(p'\cdot k)-\mu^2(p\cdot p'))\right]
$$
---

>[!question]
>在“赝标量”理论下计算核子-反核子散射的微分散射截面，到最低阶 $O(g^2)$ 即可。
>$$\mathcal L_I'=g\bar\psi i\gamma_5\psi\phi$$

相关的Feynman图为：

<div align="center">
  <img src="./pictures/Pasted image 20260202171242.png" width="600">
</div>

两个图实际上等效于交换费米线 $p_1'$ 与 $p_2$ ，因此振幅要相减。相应的Feynman振幅为：
$$
i\mathcal A_{rr'ss'}^{(1)}=-g^2[\bar u_1'i\gamma_5 u_1]\dfrac{i}{(p_1-p_1')^2-\mu^2}[\bar v_2i\gamma_5 v_2'],\quad i\mathcal A_{rr'ss'}^{(2)}=-g^2[\bar u_1'i\gamma_5 v_2']\dfrac{i}{(p_1+p_2)^2-\mu^2}[\bar v_2i\gamma_5 u_1]
$$
记
$$
A=\dfrac{i}{(p_1-p_1')^2-\mu^2},\quad B=\dfrac{i}{(p_1+p_2)^2-\mu^2}
$$
则
$$
|i\mathcal A_{rr'ss'}|^2=g^4\left[\begin{align}
A^2[\bar u_1'i\gamma_5 u_1][\bar v_2i\gamma_5 v_2'][\bar v_2'i\gamma_5 v_2][\bar u_1'i\gamma_5 u_1]\\
-AB[\bar u_1'i\gamma_5 u_1][\bar v_2i\gamma_5 v_2'][\bar u_1i\gamma_5 v_2][\bar v_2'i\gamma_5 u_1']\\
-AB[\bar u_1'i\gamma_5 v_2'][\bar v_2i\gamma_5 u_1][\bar v_2'i\gamma_5 v_2][\bar u_1i\gamma_5 u_1']\\
+B^2[\bar u_1i\gamma_5 v_2'][\bar v_2i\gamma_5 u_1][\bar u_1i\gamma_5 v_2][\bar v_2'i\gamma_5 u_1']
\end{align}\right]
$$
再求和得到：
$$
\dfrac14\sum_{rr'ss'}|i\mathcal A_{rr'ss'}|^2=\dfrac14 g^4\left[\begin{align}
&A^2\mathrm{Tr}[(p\mkern-8.5mu/_1'+m)(p\mkern-8.5mu/_1-m)]\cdot\mathrm{Tr}[(p\mkern-8.5mu/_2-m)(p\mkern-8.5mu/_2'+m)]\\
&-AB\mathrm{Tr}[(p\mkern-8.5mu/_1'+m)(p\mkern-8.5mu/_1-m)(p\mkern-8.5mu/_2-m)(p\mkern-8.5mu/_2'+m)]\\
&-AB\mathrm{Tr}[(p\mkern-8.5mu/_1'+m)(p\mkern-8.5mu/_2'-m)(p\mkern-8.5mu/_2-m)(p\mkern-8.5mu/_1+m)]\\
&+B^2\mathrm{Tr}[(p\mkern-8.5mu/_1'+m)(p\mkern-8.5mu/_2'-m)]\cdot\mathrm{Tr}[(p\mkern-8.5mu/_1-m)(p\mkern-8.5mu/_2+m)]
\end{align}\right]
$$
最后得到：
$$
\dfrac{\mathrm{d}\sigma}{\mathrm{d}\varOmega}=\dfrac{1}{64\pi^2E_T^2}\cdot|\mathcal A|^2
$$
$$
\begin{align}
|\mathcal A|^2&=4g^2A^2(p_1\cdot p_1'-m^2)(p_2\cdot p_2'-m^2)+4g^4B^2(p_1\cdot p_2+m^2)(p_1'\cdot p_2'+m^2)\\
&-2g^4AB[(p_1\cdot p_2)(p_1'\cdot p_2')-(p_1\cdot p_2')(p_2\cdot p_1')+(p_1\cdot p_1')(p_2\cdot p_2')]\\
&+2g^4ABm^2(p_1\cdot p_2+p_1\cdot p_2'-p_1\cdot p_1'-p_2\cdot p_2'-p_1\cdot p_2'-p_2\cdot p_1'+m^2)
\end{align}
$$

---

