---
title: "solving a particularly hard integral"
date: 2025-11-19
category: math
readTime: 8
description: "working through a challenging integral."
thumbnail: /images/solvingaparticularlyhardintegral/image.png
---
![thumbnail](/images/solvingaparticularlyhardintegral/image.png)
Last month, my friend at https://ceti.kaush.com/ sent me a particularly challenging integral. Back then, I had no idea how to approach the question — I barely knew what an integral even was.

But I've done a lot since a month ago (mostly through Apostol Calc 1, recommended by the same friend), so I decided to revisit this and give it a shot. Ceti wrote a post on this himself, so if you're looking for something more coherent and organized, make sure to check that out!

The problem statement is as follows:
$$
I = \int_{0}^{1} \frac{x-\frac{1}{2}}{\ln{\left(\frac{x}{1-x}\right)}}\ dx
$$

This integral was a lot of fun to solve, so I recommend anybody who's reading this to try it yourself before reading the solution. :)

## 1. Substitution
My first thought is to use substitution to simplify the problem. We can write $u$ as the following and rewrite each part in terms of $u$:

$$
u = \frac{x}{1-x}, \qquad x = \frac{u}{1+u}
$$

We can also differentiate with respect to $u$ using the quotient rule:

$$
\frac{dx}{du} = \frac{d}{du}\frac{u}{1+u} = \frac{(1)(1+u) - (u)(1)}{(1+u)^2} = \frac{1}{(1+u)^2}
$$

We can now rewrite the entire integral, and with simple algebraic manipulation:

$$
I = \frac{1}{2} \int_{0}^{\infty} \frac{u-1}{(1+u)^3\ln{u}}du
$$

(Just to note, when $x=1$, $u = \frac{1}{0} = \infty$)

We successfully took apart our integral into something a little simpler. For ease, we set $I = \frac{1}{2}J$.

## 2. Make the integral J more symmetrical

We can transform the integral $J$ over $[0, \infty]$ to $[0, 1]$ to make it more manageable. We split the integral:

$$
\int_{0}^{\infty} = \int_{0}^{1} + \int_{1}^{\infty}
$$

To map the interval $[1, \infty)$ to $[0,1]$, we set $u = \frac{1}{v}$. When $u=1$, $v=1$ and when $u = \infty$, $v = 0$:

$$
\int_{1}^{\infty}\frac{u-1}{(1+u)^3\ln{u}}du = - \int_{0}^{1}\frac{1-v}{(1+v)^3\ln{v}}dv
$$

Now both integrals are over $[0,1]$. Since $v$ is a dummy variable we rewrite it as $u$, and combine:

$$
\int_0^{1} \frac{u-1}{(1+u)^3\ln{u}}du - \int_0^{1} \frac{1-u}{(1+u)^3\ln{u}}du = 2\int_0^{1} \frac{u-1}{(1+u)^3\ln{u}}du
$$

Since $J = 2I$, we divide by 2 to work with $I$ from now on:

$$
I = \int_0^{1} \frac{u-1}{(1+u)^3 \ln{u}}du
$$

## 3. Power Series

We split our integral:

$$
\int_0^{1} \frac{u-1}{(1+u)^3}\frac{1}{\ln{u}}du
$$

The first part has a rational denominator without a convenient antiderivative. We can use the binomial theorem to get rid of it:

$$
\frac{1}{(1+u)^3} = \sum_{n=0}^{\infty}(-1)^n \binom{n+2}{2} u^n \quad (|u|<1)
$$

Multiplying by $u-1$:

$$
\frac{u-1}{(1+u)^3} = (u-1)\sum_{n=0}^{\infty}(-1)^n\binom{n+2}{2}u^n
$$

Setting $a_n = (-1)^n\binom{n+2}{2}$ and distributing:

$$
(u-1)\sum_{n=0}^\infty a_nu^n = \sum_{n=0}^{\infty} a_n u^{n+1} - \sum_{n=0}^\infty a_nu^n
$$

Using an index shift $m = n+1$ on the first sum and combining (setting $a_0 = \binom{2}{2} = 1$):

$$
\sum_{n=0}^{\infty} (-1)^n \binom{n+2}{2} (u^{n+1} - u^n)
$$

Since this converges uniformly, we can take the summation outside the integral:

$$
\sum_{n=0}^{\infty}(-1)^n\binom{n+2}{2}\int_0^{1}(u^{n+1} - u^n)\frac{1}{\ln{u}}du
$$

## 4. Integral identity
It is easily proved that:
$$
\int_0^1 \frac{y^m-1}{\ln y}\,dy = \ln(m+1), \quad m \ge 0
$$

Therefore:

$$
\int_0^1 \frac{u^{n+1}-u^n}{\ln u}\,du = \ln(n+2) - \ln(n+1) = \ln\frac{n+2}{n+1}
$$

So:

$$
I = \sum_{n=0}^\infty (-1)^n \binom{n+2}{2} \ln\frac{n+2}{n+1}
$$

## 5. Series + Zeta Function
Because of the nature of the sum, it's easy to spot that we want to rewrite our equation in terms of $\zeta$.

We first write each log as:
$$
S = \sum_{n=0}^{\infty}a_n(\ln(n+2)-\ln(n+1)) = \sum_{n=0}^{\infty}a_n\ln(n+2) - \sum_{n=0}^{\infty}a_n\ln(n+1)
$$

Rewriting in terms of $k=n+2$ and $k=n+1$ and combining:

$$
\sum_{k=1}^{\infty}(a_{k-2} - a_{k-1})\ln k
$$

After careful algebra:

$$
I = \sum_{k=1}^\infty (-1)^k k^2 \ln k
$$

The structure of this sum corresponds to the derivative of the Dirichlet eta function:

$$
\eta(s) = \sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{k^s}, \qquad \eta'(s) = -\sum_{k=1}^{\infty}(-1)^{k-1}k^{-s}\ln k
$$

Setting $s=-2$:

$$
\eta'(-2) = -\sum_{k=1}^{\infty}(-1)^{k-1}k^{2}\ln k = \sum_{k=1}^\infty (-1)^k k^2 \ln k
$$

This observation was made through a lot of trial and error — you aren't expected to recognize this immediately!

We relate $\eta'(-2)$ to $\zeta'(-2)$. Using $\eta(s) = (1-2^{1-s})\zeta(s)$ and differentiating (the $8\zeta(-2)$ term vanishes since $\zeta(-2) = 0$):

$$
\eta'(-2) = -7\zeta'(-2)
$$

Using the known value $\zeta'(-2) = -\frac{\zeta(3)}{4\pi^2}$:

$$
\eta'(-2) = -7\zeta'(-2) = \frac{7\zeta(3)}{4\pi^2}
$$

Quick numerical check: $\frac{7\zeta(3)}{4\pi^2} \approx 0.2131$

This is the first integral I've ever actually sat down and solved, so I'm rather proud of my solution. For questions, comments, concerns, or other proofs, email me at kikisadventures37@gmail.com.
