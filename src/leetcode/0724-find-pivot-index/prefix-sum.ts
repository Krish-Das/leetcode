function pivotIndex(nums: number[]): number {
  const accumulator = Array.from(
    { length: nums.length },
    () => Number.POSITIVE_INFINITY,
  )

  // walk backward and accumulate the sum
  for (let i = nums.length - 1, bAcc = 0; i >= 0; i--) {
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len
    bAcc += nums[i]!
    accumulator[i] = bAcc
  }

  // walk forward and check the sum
  for (let i = 0, fAcc = 0; i < nums.length; i++) {
    // biome-ignore lint/style/noNonNullAssertion: 0 < i < len
    fAcc += nums[i]!
    if(fAcc === accumulator[i]) return i
  }

  return -1
}

export { pivotIndex }