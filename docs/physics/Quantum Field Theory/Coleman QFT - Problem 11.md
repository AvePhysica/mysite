---
title: "Coleman QFT Problem 11"
---

>[!question]
>在[[Coleman QFT - Lecture 20. Dirac方程 II：求解]]中，我们得到了Dirac方程的沿 $z$ 轴运动平面波解。现在对于一般的 $\vec p$，找到两个线性独立的正频率解，使其为螺旋度的本征态。（Hint：旋转算符与螺旋度算符对易）。

对于沿 $z$ 轴的运动，我们得到：
$$
u_{p_z}^{(1)}=\begin{pmatrix}
\sqrt{E_p+m}\\0\\\sqrt{E_p-m}\\0
\end{pmatrix},\quad u_{p_z}p^{(2)}=\begin{pmatrix}
0\\\sqrt{E_p+m}\\0\\-\sqrt{E_p-m}
\end{pmatrix},\quad
$$
其为螺旋度的本征态。由于旋转算符与螺旋度算符对易，我们只需对其施加旋转算符，即可得到一般 $\vec p$ 对应的解。角动量算符：
$$
\vec L=\dfrac12\begin{pmatrix}
\vec\sigma&0\\ 0&\vec\sigma
\end{pmatrix}
$$
用球坐标标记 $\vec p$ 的方位：$\hat p=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$。我们只需要先绕 $y$ 轴转 $\theta$ 角，再绕 $z$ 轴转 $\phi$ 角即可。两个旋转算符为：
$$
D(R(\hat y\theta))=\cos\dfrac{\theta}{2}-i\sin\dfrac{\theta}{2}\begin{pmatrix}
\sigma_y&0\\ 0&\sigma_y
\end{pmatrix}=\begin{pmatrix}
\cos\frac\theta2&-\sin\frac\theta 2&0&0\\
\sin\frac\theta 2&\cos\frac\theta 2&0&0\\
0&0&\cos\frac\theta 2&-\sin\frac\theta 2\\
0&0&\sin\frac\theta 2&\cos\frac\theta2
\end{pmatrix}
$$
$$
D(R(\hat z\phi))=\cos\dfrac{\theta}{2}-i\sin\dfrac{\theta}{2}\begin{pmatrix}
\sigma_z&0\\ 0&\sigma_z
\end{pmatrix}=\begin{pmatrix}
\mathrm{e}^{-\frac i2\phi}&0&0&0\\0&\mathrm{e}^{\frac i2\phi}&0&0\\0&0&\mathrm{e}^{-\frac i2\phi}&0\\0&0&0&\mathrm{e}^{\frac i2\phi}
\end{pmatrix}
$$
因此
$$
u_\vec p^{(1)}=D(R(\hat z\phi))D(R(\hat y\theta))u_{p_z}^{(1)}=\begin{pmatrix}
\mathrm{e}^{-\frac i2\phi}\cos\frac\theta 2\sqrt{E_p+m}\\\mathrm{e}^{\frac i2\phi}\sin\frac\theta 2\sqrt{E_p+m}\\\mathrm{e}^{-\frac i2\phi}\cos\frac\theta 2\sqrt{E_p-m}\\\mathrm{e}^{\frac i2\phi}\sin\frac\theta 2\sqrt{E_p-m}
\end{pmatrix}
$$
$$
u_\vec p^{(2)}=D(R(\hat z\phi))D(R(\hat y\theta))u_{p_z}^{(1)}=\begin{pmatrix}
-\mathrm{e}^{-\frac i2\phi}\sin\frac\theta 2\sqrt{E_p+m}\\\mathrm{e}^{\frac i2\phi}\cos\frac\theta 2\sqrt{E_p+m}\\\mathrm{e}^{-\frac i2\phi}\sin\frac\theta 2\sqrt{E_p-m}\\-\mathrm{e}^{\frac i2\phi}\cos\frac\theta 2\sqrt{E_p-m}
\end{pmatrix}
$$

---

>[!question]
>本题来研究如何求解形如 $a\mkern-9.5mu /$ 的乘积的迹。前几个是容易的：
>$$\mathrm{Tr}\,(\mathbb 1)=4$$
>$$\mathrm{Tr}\,(a\mkern-9.5mu /)=\mathrm{Tr}\,(\gamma_5\gamma_5a\mkern-9.5mu /)=-\mathrm{Tr}\,(\gamma_5a\mkern-9.5mu /\gamma_5)=-\mathrm{Tr}\,(\gamma_5\gamma_5a\mkern-9.5mu /)=0$$
>$$\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /)=\dfrac12\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /+b\mkern-9.5mu /a\mkern-9.5mu /)=4a\cdot b$$
>请继续计算 $\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /),\;\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /d\mkern-9.5mu /)$ 以及 $\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /d\mkern-9.5mu /\gamma_5)$。

- 对于奇数个相乘的情形，我们可以使用 $\gamma_5$-trick，即
$$
\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /)=\mathrm{Tr}\,(\gamma_5\gamma_5a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /)=-\mathrm{Tr}\,(\gamma_5a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /\gamma_5)=-\mathrm{Tr}\,(\gamma_5\gamma_5a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /)=0
$$
即 $\gamma_5$ 穿过奇数个 $\gamma^\mu$ 时会多出一个负号，而迹又有轮换不变性，因此其一定为零。
- 对于四个 $\gamma^\mu$ 相乘，我们考虑先计算 $\mathrm{Tr}(\gamma^\alpha\gamma^\beta\gamma^\mu\gamma^\nu)$，通过Clifford反对易关系，我们可以将 $\gamma^\nu$ 换到最左边，然后由轮换不变回到原式。具体来说：
$$
\mathrm{Tr}(\gamma^\alpha\gamma^\beta\gamma^\mu\gamma^\nu)=2\eta^{\mu\nu}\,\mathrm{Tr}(\gamma^\alpha\gamma^\beta)-2\eta^{\beta\nu}\,\mathrm{Tr}(\gamma^\alpha\gamma^\mu)+2\eta^{\alpha\nu}\,\mathrm{Tr}(\gamma^\beta\gamma^\mu)-\underbrace{\mathrm{Tr}(\gamma^\nu\gamma^\alpha\gamma^\beta\gamma^\mu)}_{=\mathrm{LHS}}
$$
且
$$
\mathrm{Tr}(\gamma^\mu\gamma^\nu)=\dfrac12\mathrm{Tr}(\{\gamma^\mu,\gamma^\nu\})=\dfrac12\cdot2\eta^{\mu\nu}\,\mathrm{Tr}(\mathbb 1_{4\times 4})=4\eta^{\mu\nu}$$

因此
$$
\mathrm{Tr}(\gamma^\alpha\gamma^\beta\gamma^\mu\gamma^\nu)=4\eta^{\mu\nu}\eta^{\alpha\beta}-4\eta^{\beta\nu}\eta^{\alpha\mu}+4\eta^{\alpha\nu}\eta^{\beta\mu}
$$
$$
\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /d\mkern-9.5mu /)=4(a\cdot b)(c\cdot d)-4(a\cdot c)(b\cdot d)+4(a\cdot d)(b\cdot c)
$$
- 最后，$\mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /d\mkern-9.5mu /\gamma_5)$ 的计算：$\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$，上面得到的表达式说明
$$
\mathrm{Tr}\,\gamma_5=0
$$
进一步，考虑 $\mathrm{Tr}(\gamma^\mu\gamma^\nu\gamma_5)$，当 $\mu=\nu$ 时，由于 $(\gamma^\mu)^2=\pm 1$，因此迹为零。当 $\mu\ne\nu$ 时，其会与 $\gamma_5$ 中的两个gamma矩阵抵掉，还剩下两个角标不同的gamma矩阵。由于 $\mathrm{Tr}(\gamma^\mu\gamma^\nu)=4\eta^{\mu\nu}$，故角标不同的gamma矩阵的积为零。因此
$$
\mathrm{Tr}(\gamma^\mu\gamma^\nu\gamma_5)=0
$$
接下来，考虑 $\mathrm{Tr}(\gamma^\alpha\gamma^\beta\gamma^\mu\gamma^\nu\gamma_5)$，若前面的四个角标中有相同的话，则会抵消回到上面的情形，因此迹不为零的条件是四个角标不相等。利用
$$
\mathrm{Tr}(\gamma^3\gamma^2\gamma^1\gamma^0\gamma_5)=\mathrm{Tr}(\gamma^3\gamma^2\gamma^1\gamma^0 \cdot i\gamma^0\gamma^1\gamma^2\gamma^3)=-i\,\mathrm{Tr}(\mathbb 1)=-4i
$$
而其他的组合都只至多差一个负号。得到
$$
\mathrm{Tr}(\gamma^\alpha\gamma^\beta\gamma^\mu\gamma^\nu\gamma_5)=4i\epsilon^{\alpha\beta\mu\nu},\quad \mathrm{Tr}\,(a\mkern-9.5mu /b\mkern-9.5mu /c\mkern-9.5mu /d\mkern-9.5mu /\gamma_5)=4i\epsilon_{\alpha\beta\mu\nu}a^\alpha b^\beta c^\mu d^\nu
$$

---













