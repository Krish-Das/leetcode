/** biome-ignore-all lint/style/noNonNullAssertion: nums will always be in the range */

// worst: O(n²); best: O(n)
function productExceptSelf(nums: number[]): number[] {
  const map = new Map<number, number>()
  const bucket: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!
    const cache = map.get(num)
    // cache hit
    if (cache !== undefined) {
      bucket.push(cache)
      continue
    }

    // cache miss
    let product = 1
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue
      product *= nums[j]!
    }

    // update cache
    map.set(num, product)
    bucket.push(product)
  }

  return bucket
}

console.log(
  productExceptSelf([1, 2, 3, 4]), // [24,12,8,6]
)
console.log(
  productExceptSelf([-1, 1, 0, -3, 3]), // [0,0,9,0,0]
)
console.log(
  productExceptSelf([0, 0]), // [0,0,9,0,0]
)
