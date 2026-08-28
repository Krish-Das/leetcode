function minSubArrayLen(target: number, nums: number[]): number {
  // biome-ignore lint/style/noNonNullAssertion: 1 <= nums.length
  let sum = nums[0]!
  let result = Number.POSITIVE_INFINITY

  let right = 0
  let left = 0
  while (right < nums.length && left <= right) {
    if (sum >= target) result = Math.min(result, right - left + 1)
    if (sum > target) {
      sum -= nums[left] ?? 0
      left++
    } else {
      right++
      sum += nums[right] ?? 0
    }
  }
  return result === Number.POSITIVE_INFINITY ? 0 : result
}

export { minSubArrayLen }
