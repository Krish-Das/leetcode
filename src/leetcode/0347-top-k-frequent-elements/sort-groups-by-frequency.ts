// biome-ignore-all lint/style/noNonNullAssertion: allow concise indexed access in practice solution
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number[]>()

  for (const num of nums) map.set(num, [...(map.get(num) ?? []), num])

  const groups = Array.from(map.values())

  const sortedGroups = groups.sort((a, b) => b.length - a.length)
  const topK = sortedGroups.slice(0, k)

  return topK.map((a) => a.at(0)!)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)) // [1, 2]
console.log(topKFrequent([2, 2, 1, 1, 2], 1))
