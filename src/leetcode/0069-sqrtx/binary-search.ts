function mySqrt(num: number): number {
  let cache = -1

  let left = 0
  let right = num
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const sqr = middle * middle
    if (sqr === num) return middle
    if (sqr < num) {
      left = middle + 1
      cache = middle
    } else right = middle - 1
  }

  return cache
}

export { mySqrt }
