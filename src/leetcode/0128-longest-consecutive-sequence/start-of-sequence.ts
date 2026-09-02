function longestConsecutive(nums: number[]): number {
  let longest = 0

  const numSet = new Set<number>(nums)

  for (const num of numSet) {
    if (numSet.has(num - 1)) continue

    let len = 0
    for (let curr = num; numSet.has(curr); curr++) len++
    longest = Math.max(longest, len)
  }

  return longest
}

export { longestConsecutive }
