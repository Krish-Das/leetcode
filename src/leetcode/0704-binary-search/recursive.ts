const recursion = (
  nums: number[],
  target: number,
  left: number,
  right: number,
) => {
  if (left > right) return -1
  const middle = Math.floor((left + right) / 2)
  // biome-ignore lint/style/noNonNullAssertion: M is always within bounds
  const num = nums[middle]!
  if (num === target) return middle
  if (num < target) return recursion(nums, target, middle + 1, right)
  if (num > target) return recursion(nums, target, left, middle - 1)
  return -1
}
const search = (nums: number[], target: number) =>
  recursion(nums, target, 0, nums.length - 1)

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
