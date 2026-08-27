function characterReplacement(s: string, k: number): number {
  let ans = 0

  const winCharFreq = new Map<string, number>()
  const getMaxFreq = () => {
    let freq = 0
    // `values().reduce()` doesn't work on LeetCode
    for (const count of winCharFreq.values()) freq = Math.max(freq, count)
    return freq
  }

  let left = 0
  for (let right = 0; right < s.length; right++) {
    // biome-ignore lint/style/noNonNullAssertion: `right` is within bounds
    const char = s[right]!
    winCharFreq.set(char, (winCharFreq.get(char) ?? 0) + 1)

    const winSize = right - left + 1
    const maxCharFreq = getMaxFreq()

    if (winSize - maxCharFreq > k) {
      // biome-ignore lint/style/noNonNullAssertion: 0 <= left < right
      winCharFreq.set(s[left]!, (winCharFreq.get(s[left]!) ?? 0) - 1)
      left++
      continue
    }

    ans = Math.max(ans, winSize)
  }
  return ans
}

export { characterReplacement }
