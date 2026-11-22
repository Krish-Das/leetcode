export function checkInclusion(sub: string, str: string): boolean {
  const arr = Array.from({ length: 26 }, () => 0)
  for (const char of sub) {
    const idx = char.charCodeAt(0) - "a".charCodeAt(0)
    // biome-ignore lint/style/noNonNullAssertion: Index is within the 26-letter lowercase alphabet range.
    arr[idx]! += 1
  }
  const freq = arr.join()

  for (let ptr = 0; ptr <= str.length - sub.length; ptr++) {
    const arr = Array.from({ length: 26 }, () => 0)
    for (let i = ptr; i < ptr + sub.length; i++) {
      // biome-ignore lint/style/noNonNullAssertion: Index is within string bounds.
      const char = str[i]!
      const idx = char.charCodeAt(0) - "a".charCodeAt(0)
      // biome-ignore lint/style/noNonNullAssertion: Index is within the 26-letter lowercase alphabet range.
      arr[idx]! += 1
    }
    const key = arr.join()
    if (key === freq) return true
  }
  return false
}
