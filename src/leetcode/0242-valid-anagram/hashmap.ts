function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const freq = new Map<string, number>()
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1)
  for (const c of t) {
    const n = freq.get(c) ?? 0
    if (n === 0) return false
    freq.set(c, n - 1)
  }
  return true
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
