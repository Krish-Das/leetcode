function pivotIndex(nums: number[]): number {
  const length = nums.length
  const ans = Array.from({ length }, () => Number.NaN)

  let post = 0
  for (let i = length - 1; i >= 0; i--) {
    ans[i] = post
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    post += nums[i]!
  }

  let pre = 0
  for (let i = 0; i < length; i++) {
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    const res = ans[i]! - pre
    if (res === 0) return i
    ans[i] = res
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    pre += nums[i]!
  }

  return -1
}

export { pivotIndex }
