/** Unimplemented code */
const guess = (_num: number): -1 | 0 | 1 => 0

// biome-ignore lint/correctness/noUnusedVariables: Tests won't run since `guess()` always returns 0
function guessNumber(n: number): number {
  let l = 1
  let r = n
  while (l <= n) {
    const m = Math.floor((l + r) / 2)
    const dir = guess(m)
    if (dir === 0) return m
    if (dir < 0) r = m - 1
    else l = m + 1
  }
  return -1
}
