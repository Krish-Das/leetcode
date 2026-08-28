// biome-ignore-all lint/style/noNonNullAssertion: 0 <= left <= right < s.length

function lengthOfLongestSubstring(s: string): number {
  const seen = new Map<string, number>()
  let maxWinSize = 0

  let left = 0
  let right = 0
  while (right < s.length) {
    const char = s[right]!
    const lastSeenIdx = seen.get(char)

    if (lastSeenIdx === undefined) {
      seen.set(char, right)
      const winSize = right - left + 1
      maxWinSize = Math.max(maxWinSize, winSize)
      right++
      continue
    }

    while (left <= lastSeenIdx) {
      seen.delete(s[left]!)
      left++
    }
    seen.set(char, right)
    right++
  }
  return maxWinSize
}

export { lengthOfLongestSubstring }
