function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k <= 0) return false

  const win = new Set<number>()
  const winSize = k

  let ptrAt = 0
  while (ptrAt < nums.length) {
    // biome-ignore lint/style/noNonNullAssertion: ptrAt is within bounds
    const current = nums[ptrAt]!
    if (win.has(current)) return true
    if (win.size === winSize) {
      // biome-ignore lint/style/noNonNullAssertion: ptrAt >= winSize since k <= nums.length
      const oldestNum = nums[ptrAt - winSize]!
      win.delete(oldestNum)
    }
    win.add(current)
    ptrAt++
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false
