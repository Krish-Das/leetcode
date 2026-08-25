/** biome-ignore-all lint/style/noNonNullAssertion: There ain't no way! */
function findMin(nums: number[]): number {
  let min = nums[0]!
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const left = nums[l]!
    const right = nums[r]!
    const m = Math.floor((l + r) / 2)
    const middle = nums[m]!

    min = Math.min(min, left <= right ? left : middle)
    if (middle >= left) l = m + 1
    else r = m - 1
  }
  return min
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
