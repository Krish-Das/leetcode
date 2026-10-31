// biome-ignore-all lint/style/noNonNullAssertion: 0 <= left <= right < s.length

function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length

  const seen = new Map<string, number>()
  let out = 0
  for (let R = 0, L = 0; R < s.length; ) {
    const right = s[R]!
    const foundIdx = seen.get(right)
    if (foundIdx !== undefined) {
      while (L <= foundIdx) {
        const left = s[L]!
        seen.delete(left)
        L++
      }
    }
    seen.set(right, R)
    R++
    out = Math.max(out, R - L)
  }
  return out
}

export { lengthOfLongestSubstring }
