function productExceptSelf(nums: number[]): number[] {
  const length = nums.length
  const ans = Array.from({ length }, () => Number.NaN)

  let prefix = 1
  for (let i = 0; i < length; i++) {
    ans[i] = prefix
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    prefix *= nums[i]!
  }

  let suffix = 1
  for (let i = length - 1; i >= 0; i--) {
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    ans[i] = ans[i]! * suffix
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len-1
    suffix *= nums[i]!
  }

  return ans
}

export { productExceptSelf }
