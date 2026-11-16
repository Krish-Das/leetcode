export function pivotIndex(nums: number[]): number {
  const ans: number[] = []
  let post = 0
  for (let idx = nums.length - 1; idx >= 0; idx--) {
    ans[idx] = post
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    post += nums[idx]!
  }

  let pre = 0
  for (const [idx, num] of nums.entries()) {
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    if (ans[idx]! === pre) return idx
    pre += num
  }
  return -1
}
