const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1))

const nthFibonacci = (n: number): number =>
  n <= 1 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

const fibonacciArray = Array.from({ length: 10 }, (_, n) => {
  return nthFibonacci(n)
})

console.log(fibonacciArray)
