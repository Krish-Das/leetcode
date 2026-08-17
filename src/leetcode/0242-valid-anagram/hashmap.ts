function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const frequency = new Map<string, number>()
  for (const char of s) {
    const count = frequency.get(char)
    frequency.set(char, (count ?? 0) + 1)
  }

  for (const char of t) {
    const count = frequency.get(char)
    if (!count) return false
    if (count === 1) {
      frequency.delete(char)
      continue
    }
    frequency.set(char, count - 1)
  }

  return frequency.size === 0
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
