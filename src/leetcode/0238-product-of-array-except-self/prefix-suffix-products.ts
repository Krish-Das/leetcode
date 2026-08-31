function productExceptSelf(nums: number[]): number[] {
  const ans = Array.from({ length: nums.length }, () => 1)

  // Prefix
  for (let i = 0, acc = 1; i < nums.length - 1; i++) {
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    acc *= nums[i]!
    ans[i + 1] = acc
  }

  // Postfix + ans
  for (let i = nums.length - 1, acc = 1; i >= 0; i--) {
    ans[i] = (ans[i] ?? 1) * acc
    // biome-ignore lint/style/noNonNullAssertion: len-1 >= i >= 0
    acc *= nums[i]!
  }

  return ans
}

export { productExceptSelf }
