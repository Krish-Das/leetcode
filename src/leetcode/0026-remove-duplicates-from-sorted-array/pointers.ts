function removeDuplicates(nums: number[]): number {
  let left = 0
  for (let i = 1; i < nums.length; i++) {
    // biome-ignore lint/style/noNonNullAssertion: i is within bounds
    const current = nums[i]!
    // biome-ignore lint/style/noNonNullAssertion: 0 <= left < len
    if (current > nums[left]!) {
      left++
      nums[left] = current
    }
  }
  return left + 1
}

export { removeDuplicates }
