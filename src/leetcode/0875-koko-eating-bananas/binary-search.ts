function minEatingSpeed(piles: number[], h: number): number {
  let ans = Math.max(...piles)
  let l = 1
  let r = ans

  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    let hour = 0
    for (const p of piles) hour += Math.ceil(p / m)
    if (hour <= h) {
      ans = Math.min(ans, m)
      r = m - 1
    } else l = m + 1
  }
  return ans
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))
