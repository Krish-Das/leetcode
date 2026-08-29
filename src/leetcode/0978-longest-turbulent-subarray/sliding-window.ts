function maxTurbulenceSize(arr: number[]): number {
  const isSameDirection = (
    n: number,
    nMinus1: number | undefined,
    nMinus2: number | undefined,
  ) => {
    if (nMinus1 === undefined || nMinus2 === undefined) return false
    return Math.sign(n - nMinus1) === Math.sign(nMinus1 - nMinus2)
  }

  let ans = 0
  for (let right = 0, left = 0; right < arr.length && left <= right; right++) {
    const res = isSameDirection(
      // biome-ignore lint/style/noNonNullAssertion: 0 <= right < len
      arr[right]!,
      arr[right - 1],
      arr[right - 2],
    )
    if (res) left = right - 1
    if (arr[right] === arr[right - 1]) left = right
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

export { maxTurbulenceSize }
