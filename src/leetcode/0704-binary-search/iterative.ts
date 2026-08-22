function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    // biome-ignore lint/style/noNonNullAssertion: M is always within bounds
    const num = nums[middle]!
    if (num === target) return middle
    if (num < target) left = middle + 1
    else right = middle - 1
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
