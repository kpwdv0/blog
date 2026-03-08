---
title: "notes on regression"
date: 2026-03-06
category: math
readTime: 12
description: "a master post with notes taken from cmu's regression course"
thumbnail: /images/linearregwithmatrices/thumbnail.png
---
![thumbnail](/images/linearregwithmatrices/thumbnail.png)
## Expectation Rules
Let's first review rules for expectation, variance, and covariance so I won't  have to go through it throughout my notes:


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

...to be continued!