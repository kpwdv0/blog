---
title: "notes on regression - lecture 1"
date: 2026-03-06
category: math
readTime: 12
description: "a post with notes taken from cmu's regression course"
thumbnail: /images/linearregwithmatrices/thumbnail.png
---
![thumbnail](/images/linearregwithmatrices/thumbnail.png)
## Expectation Rules
Let's first review rules for expectation, variance, and covariance so I won't  have to go through it throughout my notes:

First, we define the term “expectation.” Expectation is basically the average value of a function, which we can calculate both continuously and discretely:

$$
\mathbb{E}[X] = \int x p(x) dx, \mathbb{E}[X] = \sum_x x p(x)
$$

,where $p(x)$ is the probability density function, or the probability that the $x$ value occurs.

We can also define variance and covariance.

Variance averages the squared distance between the true $X$ value and the mean.
$$
\text{Var}[X] = \mathbb{E}[(X-\mathbb{E}[X])^2]
$$

Covariance measures how $X$ and $Y$ move together: a larger covariance value indicates a stronger relationshp between $X$ and $Y$. It’s important to note that covariance cannot be compared across mutliple different situations, and it scales differently!
$$
\text{Cov} [X,Y] = \mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[X])]
$$

Here are some important algebra rules. Although not too relevant in this lecture, it’ll definetely come up more later:

Linearity of expectations: $\mathbb{E}[aX + bY] = a \mathbb{E}[X] + b \mathbb{E} [Y]$

Variance identity: $\text{Var}[X] = \mathbb{E} [X^2] - (\mathbb{E} [X])^2 $

Covariance identity: $\text{Cov} [X,Y] = \mathbb{E} [XY] - \mathbb{E} [X] \mathbb{E} [Y]$

Covariance symmetry: $\text{Cov} [X,Y] = \text{Cov} [Y,X]$

Variance is covariance with itself: $\text{Cov} [X,X] = \text{Var} [X]$

Variance is not linear: $\text{Var} [aX+b] = a^2 \text{Var} [X]$

Covariance is not linear: $\text{Cov} [aX + \beta_1 Y] = a \text{Cov} [X,Y]$

Variance of a sum: $\text{Var} [X+Y] = \text{Var} [X] + \text{Var} [Y] + 2 \text{Cov} [X,Y]$

Variance of a _big_ sum: 
$$
\text{Var} [\sum^n_{i=1} X_i] = \sum^n_{i=1} \sum^n_{j=1} \text{Cov} [X_y, X_j] = \sum^n_{i=1} \text{Var} [X_i] + 2 \sum^{n-1}_{i=1} \sum_{j>i} \text{Cov} [X_i, X_j]
$$

Law of total expectation (Note: This looks fancy but it’s actually really intuitive; if you average out every $X$ value on each event $Y$, you just get the average of $X$): $\mathbb{E} [X] = \mathbb{E} [\mathbb{E} [X|Y]]$

Independence implies zero covariance: If $X$ and $Y$ are independent, then $\text{Cov} [X,Y] = 0$, but the reverse is not true!

Law of large numbers (if you repeat something multiple times, the average result gets closer to the mean, and more formally): With random variables $X_1, X_2, X_3, …, X_n$ with expected value $\mathbb{E}[X]$, then:
$$
\frac{1}{n} \sum^n_{i=1}X_i \rightarrow \mathbb{E} [X]
$$

Central limit theorem (when you average many independent variables, the distribution of the average is around normal, like a bell curve): Let $X
_1, X_2, …, X_n$ be independent, identically distributed random variables with mean $\gamma$ and variance $\sigma^2$ as $n \rightarrow \infty$:
$$
\sqrt{n} \frac{\bar{X}_n - \mathbb{E} [X]}{\text{Var} [X] } \approx N[0,1]
$$ 

Statistic: A statistic is a function of the data and the data alone.

Estimator: Statistic that guesses at the parameter or a function of it, written as $\hat{\theta}$


## Best prediction given random Y
We can write the error for a given value as $(Y-m)^2$, where $Y$ is a random, real value and $m$ is our prediction. The MSE, or the expected value of this is: $\mathbb{E}[(Y-m)^2]$. We can define the MSE as: 

We can also introduce the following formulas for any values $Z$, $Y$ and $m$:
$$
\text{Var}(Z) = \mathbb{E}[(Z - \mathbb{E}[Z])^2]
$$

and:

$$
\mathbb{E}[Z^2] = (\mathbb{E}[Z])^2 + \text{Var}(Z)
$$

Combining these two formulas results in a something called bias-variance decomposition, whcih we can apply to our function for MSE:
$$
\mathbb{E}[(Y-m)^2] = (\mathbb{E}[Y-m])^2 + \text{Var}(Y-m)
$$

We can also rewrite: $ \mathbb{E}[Y-m] = \mathbb{E}[Y] - m$, because subtracting a constant doesn't change the expected value!

Also: $\text{Var}(Y-m) = \text{Var}(Y)$, because subtracting a constant does not change variance.

So, we can rewrite the MSE as:
$$
\text{MSE}(m) = (\mathbb{E}[Y]-m)^2 + \text{Var}(Y)
$$

Since our prediction is $m$, we're trying to minimize the $(\mathbb{E}[Y]-m^2)$ term. We can turn to calulus, take the derivitave, and set it equal to zero to find the "minimum" of our function.

We can use the chain rule:
$$
\frac{\text{d}}{\text{d}m} (\mathbb{E}[Y]-m)^2 = -2(\mathbb{E}[Y]-m)
$$

Now we set it equal to zero:
$$
-2 (\mathbb{E}[Y]-m) = 0 \implies \mathbb{E}[Y] = m
$$

This means that the best single number prediction of a random variable under squared error loss is just the mean! (This is decently intuitive, but it's cool to go out and derive it yourself).

## Prediction one random variable from another
Let's say we observe $X$ and want to predict $Y$. If $X=x$, we predict $m(x)$.

The law of total expectation states that: 
$$
\mathbb{E}[Y-m(X)^2] = \mathbb{E}[\mathbb{E}[(Y-m(C))^2 | X]]
$$

Now we restrict $m(X) = \beta_0 + \beta_1 X$ so that we can find the optimial linear predictor (just for now)! So:

$$
\text{MSE}(\beta_0, \beta_1) = \mathbb{E}[(Y-(\beta_0 + \beta_1X))^2]
$$

We can multiply this out and distribute the expectation:
$$
\mathbb{E}[Y^2 - 2Y(\beta_0 + \beta_1X) + (\beta_0 + \beta_1X)^2] 
$$
$$
= \mathbb{E}[Y^2] - 2\beta_0\mathbb{E}[Y] - 2\beta_1 \mathbb{E}[XY] + \mathbb{E}[(\beta_0 + \beta_1X)^2]
$$

We can deal with the last term:
$$
\mathbb{E}[(\beta_0 + \beta_1X)^2] = \mathbb{E}[\beta^2_0 + 2\beta_0\beta_1X + \beta^2_1X^2]
$$

We then distribute the expectation, noting that $\mathbb{E}[\beta^2_0] = \beta^2_0 $, $\mathbb{E}[2\beta_0\beta_1X] = 2\beta_0\beta_1\mathbb{E}[X]$, $\mathbb{E}[\beta_1^2X^2] = \beta_1^2 \mathbb{E} [X^2]$

Plugging that ito our original function gives us:
$$
\text{MSE}(\beta_0, \beta_1) = \mathbb{E}[Y^2] - 2\beta_0\mathbb{E}[Y] - 2\beta_1 \mathbb{E}[XY]  + \beta^2_0 + 2\beta_0\beta_1 \mathbb{E}[X] + b^2_1 \mathbb{E}[X^2]
$$

Let's find values of $\beta_0$  and $\beta_1$ that minimizes the function. We can use our same derivitave trick we did earlier to find a minimum, starting with $\beta_0$. We need a partial derivitave this time since we're dealing with multiple varibles $\beta_0$ and $\beta_1$, starting with $\beta_0$. We're eliminating all constants without $\beta_0$

$$
\frac{\partial \text{MSE}}{\partial \beta_0} = \frac{\partial}{\partial \beta_0} (\beta^2_0 - 2\beta_0 \mathbb{E}[Y] + 2\beta_0\beta_1 \mathbb{E}[X])
$$

I'm going to skip over some trivial calculus steps, so if you can't follow, then you should learn calculus before reading this article. This is equal to:

$$
2\beta_0 - 2\mathbb{E}[Y] + 2\beta_1 \mathbb{E}[X]
$$

Setting equal to $0$, we can then solve and get $\beta_0 = \mathbb{E}[Y] - \mathbb{E}[Y]$

We can do the same thing for $\beta_1$:
$$
\frac{\partial \text{MSE}}{\partial \beta_1} = \frac{\partial}{\partial \beta_1}(-2\beta_1 \mathbb{E}[XY] + 2\beta_0 \beta_1 \mathbb{E}[X] + b^2_1 \mathbb{E} [X^2])
$$

Which is equal to:
$$
-2 \mathbb{E}[XY] + 2 \beta_0 \mathbb{E}[X] + 2\beta_1 \mathbb{E}[X^2]
$$

Now we set it equal to 0, and with some careful algebra algebra we get $\mathbb{E}[XY] = \beta_0 \mathbb{E}[X] + \beta_1 \mathbb{E}[X]^2 + \beta_1 \mathbb{E} [X^2]$

add stuff here askdfjhfks


Here are some important notes about the equation that was mentioned:
1. The optimal intercept $\beta_0$ makes the line go through the mean Y value of the mean X value. This means that $\beta_0 + \beta_1 \mathbb{E} [X]= \mathbb{E} [Y]$ and the line passes through $\mathbb{E}[X], \mathbb{E}[Y]$. We can easily prove this by substituting $\mathbb{E}[X]$ for all $X$ in our equations.
2. We should sanity check our full equation by making sure that the units “balance” on both sides of the equation. 
3. Only the variance and the covariance impact the $\beta_1$ term, meaning the actual expectation doesn’t matter! $\beta_1$ will stay the same, regardless if you shift the function.
4. We must also keep in mind some important morals (although a bit self-explanatory): 1. This approximation might not even be good! 2. We make no assumptions about the noise or fluctuations of the function.
