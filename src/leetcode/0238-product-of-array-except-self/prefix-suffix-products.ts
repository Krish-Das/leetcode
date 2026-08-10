function productExceptSelf(nums: number[]): number[] {
  const pre: number[] = []
  let preAcc: number = 1
  for (const num of nums) {
    preAcc *= num
    pre.push(preAcc)
  }

  const post: number[] = []
  let postAcc: number = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    // biome-ignore lint/style/noNonNullAssertion: nums[i] is never out of bound
    const num = nums[i]!
    postAcc *= num
    post[i] = postAcc
  }

  const bucket: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const preNum = pre[i - 1] ?? 1
    const postNum = post[i + 1] ?? 1
    const product = preNum * postNum
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
