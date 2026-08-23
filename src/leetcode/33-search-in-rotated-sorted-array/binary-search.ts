function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    const middle = nums[m]!
    const left = nums[l]!
    const right = nums[r]!

    if (middle === target) return m

    if (middle < left) {
      if (middle < target && target <= right) l = m + 1
      else r = m - 1
    } else {
      if (left <= target && target < middle) r = m - 1
      else l = m + 1
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1
console.log(search([3, 1], 1)) // 1
