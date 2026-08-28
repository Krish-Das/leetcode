function lengthOfLongestSubstring(s: string): number {
  const seen = new Map<string, number>()
  let maxWinSize = 0

  let left = 0
  let right = 0
  while (right < s.length) {
    /*
     * biome-ignore lint/style/noNonNullAssertion: Read below
     * 0 <= left <= right < s.length
     * since `seen.get(char)` will never contain neg(-) values
     */
    const char = s[right]!
    const lastSeenIdx = seen.get(char)
    if (lastSeenIdx === undefined) {
      seen.set(char, right)

      const winSize = right - left + 1
      maxWinSize = Math.max(maxWinSize, winSize)
      right++
      continue
    }

    left = lastSeenIdx + 1
    right = left
    seen.clear()
    // biome-ignore lint/style/noNonNullAssertion: Read above
    seen.set(s[right]!, right)
    right++
  }
  return maxWinSize
}

export { lengthOfLongestSubstring }
