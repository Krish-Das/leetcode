// biome-ignore-all lint/style/noNonNullAssertion: allow concise indexed access in practice solution

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!
    const needed = target - num
    const neededIdx = map.get(needed)

    if (neededIdx !== undefined) return [neededIdx, i]

    map.set(num, i)
  }

  return []
}

console.clear()
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
