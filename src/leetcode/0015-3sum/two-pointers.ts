function threeSum(nums: number[]) {
  const cache = new Map<number, [number, number, number]>()
  const triplets: [number, number, number][] = []
  const seen = new Set<string>()
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i]!
    if (cache.has(first)) continue

    const set = new Set<number>()
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue
      const second = nums[j]!
      const needed = 0 - first - second
      const isFound = set.has(needed)
      if (isFound) {
        const sorted = [first, second, needed].sort((b, a) => b - a)
        const stringified = JSON.stringify(sorted)
        if (seen.has(stringified)) continue

        triplets.push([first, second, needed])
        seen.add(stringified)
        cache.set(first, [first, second, needed])
        continue
      }
      set.add(second)
    }
  }
  return triplets
}

console.log(threeSum([1, 0, -2, 3, 1, -1]))
