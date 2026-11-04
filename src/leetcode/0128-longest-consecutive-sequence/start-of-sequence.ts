function longestConsecutive(nums: number[]): number {
  const numSet = new Set<number>(nums)

  let ans = 0
  for (const num of numSet) {
    if (numSet.has(num - 1)) continue

    let len = 0
    for (let curr = num; numSet.has(curr); curr++) len++
    ans = Math.max(ans, len)
  }

  return ans
}

export { longestConsecutive }
