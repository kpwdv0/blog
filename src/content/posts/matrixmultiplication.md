---
title: "linear regression with matrices and gradients"
date: 2025-11-29
category: math
readTime: 12
description: "deriving the ordinary least squares formula from scratch using matrix calculus."
---

## 1. Introduction

In computer science class, we briefly touched upon the idea about doing linear regression with matrices, but never truly learned how it worked. Instead, we only coded linear regression with gradient descent.

And, on my airplane to my winter destination, seeing as I had pure, unfiltered time, I decided to take a closer look.

This article is meant to be read with pencil and paper in hand (especially if these concepts are unfamiliar to you). Important passages will be marked with three exclamation points (!!!).

## 2. Establishing our regression formula

We're only going to be considering the simplest function (a straight line)! The function of our original scatter plot can be written as its regressed line, and for each point $(x,y)$, an "error term." The error term is each point's distance from the line:

$$
y_i = \beta_0 + \beta_1 x_i + \epsilon_i
$$

where $i = 1,\ldots,n$. Now, letting $i = 1,\ldots,n$, we obtain:

$$
y_1 = \beta_0 + \beta_1 x_1 + \epsilon_1
$$
$$
y_2 = \beta_0 + \beta_1 x_2 + \epsilon_2
$$

so on and so forth for each point. We can write this using matrix notation in a far more efficient way.

## 3. Properties of a matrix (addition, multiplication, etc.)

Matrix multiplication: I can give you a definition along the lines of "add and multiply each row with each possible column." Here is my somewhat less convoluted example:

$$
\begin{bmatrix}a & b\\c & d \end{bmatrix} \cdot \begin{bmatrix}e & f\\g & h\end{bmatrix} = \begin{bmatrix}ae+bg & af+bh\\ce+dg & cf+dh \end{bmatrix}
$$

As for matrix addition, we simply add up the corresponding elements:
$$
\begin{bmatrix}a & b\\c & d \end{bmatrix} + \begin{bmatrix}e & f\\g & h\end{bmatrix} = \begin{bmatrix}a+e & b+f\\c+g & d+h \end{bmatrix}
$$

Next, the "transposition" of a matrix is simply a matrix with its rows and columns swapped. If an item is in row $i$ and column $j$, it is now in row $j$ and column $i$:

$$
A = \begin{bmatrix} a& b & c\\d & f & g \\ h &i & j \end{bmatrix}, \quad A^T = \begin{bmatrix} a& d & h\\b & f & i \\ c & g & j \end{bmatrix}
$$

It is important to note that $(A^T)^T = A$.

Last, the identity matrix. It's like the number 1: $AI = A$ for every $A$, where $I$ has $1$s on the diagonal and $0$ everywhere else.

The inverse matrix $A^{-1}$ is the matrix you multiply $A$ by to get the corresponding identity matrix $I$.

## 4. Rewriting our collection of equations as matrices

Okay, now that our basics are covered, let's go ahead and try and find some formulas! We can notice that:

$$
\begin{bmatrix}1 & x_1 \\1 & x_2 \\\vdots & \vdots \\1 & x_n
\end{bmatrix}\begin{bmatrix}\beta_0 \\\beta_1\end{bmatrix} = \begin{bmatrix}
\beta_0 + \beta_1 x_1 \\
\beta_0 + \beta_1 x_2 \\
\vdots \\
\beta_0 + \beta_1 x_n
\end{bmatrix}
$$

which is what we have in our original set of functions! (Try multiplying it out yourself for small values of $n$ if you are not easily convinced.)

So, we set:

$$
X = \begin{bmatrix}1 & x_1 \\1 & x_2 \\\vdots & \vdots \\1 & x_n
\end{bmatrix}, \quad \beta = \begin{bmatrix}\beta_0 \\\beta_1\end{bmatrix}, \quad Y = \begin{bmatrix}
y_1 \\y_2 \\\vdots \\y_n
\end{bmatrix}, \quad \epsilon = \begin{bmatrix}
\epsilon_1 \\\epsilon_2 \\\vdots \\\epsilon_n
\end{bmatrix}
$$

And now, we can write our set of functions as:

$$
Y = X\beta + \epsilon
$$

We have a wonderfully short and simple statement that we can then manipulate!

## 5. Finding a formula for the error given the coefficients

We now write a function for the error of prediction. Since we want to find the value of $\beta$ that gives the least error, we solve for $\epsilon$ and write it as a function:

$$
e(\beta) = Y - X\beta
$$

In class, we learned the function for mean squared error as:

$$
\text{MSE}(\beta) = \frac{1}{n} \sum_{i=1}^n e^2_i(\beta)
$$

In terms of our matrices, multiplying a column matrix by its transposition gives $\sum_{i=1}^n e^2_i$, so we can write:

$$
\text{MSE}(\beta) = \frac{1}{n}e^Te
$$

How wonderfully convenient! Writing in terms of $X$ and $Y$ using $e(\beta) = Y - X\beta$:

$$
\frac{1}{n}(Y - X\beta)^T(Y - X\beta) = \frac{1}{n}(Y^T - \beta^TX^T)(Y-X\beta)
$$

Expanding:

$$
\frac{1}{n}(Y^TY - Y^TX\beta - \beta^TX^TY + \beta^TX^TX\beta)
$$

Since $Y^TX\beta$ is a $1\times 1$ matrix, it equals its own transpose: $Y^TX\beta = \beta^TX^TY$. So:

$$
\text{MSE}(\beta) = \frac{1}{n}(Y^TY - 2\beta^TX^TY + \beta^TX^TX\beta)
$$

## 6. Finding the gradient

Since we want to find the values of $\beta$ that minimize the mean squared error, we calculate the "slope" of the function and find the point at which the slope is 0. We take the "gradient" with respect to $\beta$.

More formally, the gradient of the function $f$ with respect to $x$ is:

$$
\nabla_x f(x) =
\begin{bmatrix}
\frac{\partial f}{\partial x_1} \\
\frac{\partial f}{\partial x_2} \\
\vdots \\
\frac{\partial f}{\partial x_n}
\end{bmatrix}
$$

So, let's find $\nabla \text{MSE}(\beta)$. We distribute the gradient:

$$
= \frac{1}{n}(\nabla Y^TY - \nabla 2\beta^TX^TY + \nabla\beta^TX^TX\beta)
$$

### First piece

Since $Y^TY$ is not impacted by $\beta$, it is effectively a constant and its gradient is $0$.

### Second piece

We can rewrite $\nabla 2\beta^TX^TY$ as $\nabla \beta^Tc$ where $c = 2X^TY$ is constant. Using sum notation:

$$
\nabla_{\beta} \beta^T c = \nabla_{\beta} \sum_{i=1}^{n} \beta_i c_i
$$

Since every term is constant except $\beta_i c_i$, and $\frac{\partial}{\partial \beta_i} \beta_i c_i = c_i$:

$$
\nabla_{\beta} (\beta^T c) = c
$$

Therefore: $\nabla 2\beta^TX^TY = 2X^TY$

### Third piece

We let $A = X^TX$ and work with $f(\beta) = \beta^TA\beta = \sum_{i,j} \beta_i A_{ij} \beta_j$. Taking the partial derivative with respect to $\beta_k$ and using casework, then noting that $A$ is symmetric ($A = X^TX$ implies $A_{ij} = A_{ji}$):

$$
\nabla \beta^TX^TX\beta = 2X^TX\beta
$$

## 6. Finale

Putting it all together:

$$
\nabla \text{MSE}(\beta) = \frac{1}{n}(0 - 2X^TY + 2X^TX\beta) = \frac{2}{n}(X^TX\beta - X^TY)
$$

At the optimum $\hat{\beta}$, this equals zero:

$$
X^TX\hat{\beta} - X^TY = 0 \implies \hat{\beta} = \frac{X^TY}{X^TX}
$$

Given sets of points formatted into a matrix as we originally established, we can find good estimates for our coefficients!

## 7. Multivariable and nonlinear extensions

The multivariable and nonlinear extensions use the same formula. For a quadratic model:

$$
y_i = \beta_0 + \beta_1x_i + \beta_2x^2_i + \epsilon_i
$$

We add another column for $x^2$ and another row for $\beta_2$:

$$
X = \begin{bmatrix}1 & x_1 & x^2_1\\1 & x_2 & x^2_2\\\vdots & \vdots & \vdots \\1 & x_n & x^2_n
\end{bmatrix}, \quad \beta = \begin{bmatrix}\beta_0 \\\beta_1 \\\beta_2\end{bmatrix}
$$

This $X$ matrix is called the design matrix. The order is arbitrary — you just need to make sure that the $X$ columns correspond with the rows of $\beta$.

We can then go on to talk about properties of the hat matrix, fitted values, residuals, covariances, Gaussian noise, expectations, etc. — but that requires a stronger linear algebra prerequisite and will be saved for another article.
