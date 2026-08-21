function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((b, a) => b - a)
  const ans: number[][] = []

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i - 1] === sorted[i]) continue

    let left = i + 1
    let right = sorted.length - 1
    while (left < right) {
      /*
       * biome-ignore lint/style/noNonNullAssertion: Read below
       * i is always within bound
       * since nums.length >= 3, `right` (len-1) is always within bound
       * the `(left < right)` check prevents `left` to get out of bound
       */
      const sum = sorted[i]! + sorted[left]! + sorted[right]!
      if (sum === 0) {
        // biome-ignore lint/style/noNonNullAssertion: Read above
        ans.push([sorted[i]!, sorted[left]!, sorted[right]!])
        right--
        left++
        while (sorted[left - 1] === sorted[left] && left < right) left++
        continue
      }
      if (sum < 0) left++
      if (sum > 0) right--
    }
  }

  return ans
}

console.log(threeSum([1, 0, -2, 3, 1, -1]))
