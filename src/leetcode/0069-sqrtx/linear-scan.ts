function mySqrt(num: number): number {
  for (let i = 0; i <= num; i++) {
    const square = i * i
    if (square === num) return i
    if (square > num) return i - 1
  }

  return 0
}

export { mySqrt }
