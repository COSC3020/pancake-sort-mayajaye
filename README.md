# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

#### Runtime in terms of comparisons: $T(n)\in\Theta(n^2)$

The steps are:
1. Base case, check the size of the array. $T(1) = 1$
1. Find the greatest element in the current subarray which takes n-1 comparisons. $T(n) = (n-1)$
2. Recursively call T(n-1).  $T(n) = T(n-1)$

Recurrence relation:
$T(n) = 1$ if $n\le1$

$T(n) = T(n-1) + (n-1)$ if $n>1$

$T(n)$ changes with each substitution by $T(n-i)+\sum_{i=0}^{n-1}i$

It will take n-1 recursive calls to reach the base case, so substituting (n-1) for i, we get:
$T(n) = 1 + \frac{n(n-1)}{2}$
$= 1 + \frac{n^{2}-n}{2}$

The -n, 1, and $\frac{1}{2}$ are asymptotically insignificant, so in terms of comparisons:
$T(n)\in\Theta(n^{2})$

#### Runtime in terms of flips: $T(n)\in\Theta(n)$

The steps are:
1. Flip the elements up to the greatest element. On the worst case this flips the first n elements
2. Flip the elements up to n-1. This will always flip the first n elements

Runtime equation:
$T(n) = n+n$
$=2n$

The constant factor is asymptotically insignificant, so in terms of flips:
$T(n)\in\Theta(n)$

#### Sources

I looked at [this](https://stackoverflow.com/questions/22977859/reversing-an-array-in-place) forum for in place flipping


"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."

