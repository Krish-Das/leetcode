/** biome-ignore-all lint/style/noNonNullAssertion: There ain't no way! */
export function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle]! > nums[right]!) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return nums[left]!
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
