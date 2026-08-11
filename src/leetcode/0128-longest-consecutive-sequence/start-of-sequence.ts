function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums)
  let maxLen = 0

  for (const start of numSet) {
    if (numSet.has(start - 1)) continue

    let current = start
    let length = 1
    while (numSet.has(current + 1)) {
      length++
      current++
    }
    maxLen = Math.max(maxLen, length)
  }

  return maxLen
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 0, 1, 2, 3, 4, 5, 6, 7, 8 -> 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 1])) // 0, 1, 2, 3, 4, 5 -> 6
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 1, 2, 3, 4 -> 4
console.log(longestConsecutive([1, 0, 1, 2])) //0, 1, 2 -> 3
