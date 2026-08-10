/** biome-ignore-all lint/correctness/noUnusedVariables: archive */

/**
 * @fixme breaks when nums contains 0
 */
function productExceptSelf(nums: number[]): number[] {
  const productOfAll = nums.reduce((acc, num) => acc * num, 1)
  const bucket: number[] = []
  for (const num of nums) {
    const productExceptNum = productOfAll / num
    bucket.push(productExceptNum)
  }
  return bucket
}
