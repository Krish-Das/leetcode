function groupAnagrams(strs: string[]): string[][] {
  // biome-ignore lint/style/noNonNullAssertion: How could this ever be outbound!
  if (strs.length === 1) return [[strs[0]!]]

  const map = new Map<string, string[]>()
  for (const str of strs) {
    const count = Array.from({ length: 26 }, () => 0)
    /*
     * biome-ignore lint/style/noNonNullAssertion: Read below
     *
     * The problem states strs[i] consists of lowercase English letters.
     * So the max one could go is:
     * "z".charCodeAt(0) - "a".charCodeAt(0) = 25, which is bounded.
     */
    for (const c of str) count[c.charCodeAt(0) - "a".charCodeAt(0)]!++
    const key = count.join("#")
    const group = map.get(key) ?? []
    group.push(str)
    map.set(key, group)
  }
  return [...map.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
