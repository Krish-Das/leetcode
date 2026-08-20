function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()
  for (const num of nums) map.set(num, (map.get(num) ?? 0) + 1)

  const bucket = Array.from({ length: nums.length + 1 }, () => [] as number[])
  for (const [num, index] of map) (bucket[index] ?? []).push(num)

  const ans: number[] = []
  for (let i = bucket.length - 1; i >= 0 && ans.length < k; i--)
    ans.push(...(bucket[i] ?? []))

  return ans
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)) // [1, 2]
console.log(topKFrequent([2, 2, 1, 1, 2], 1))
