function groupAnagrams(strs: string[]): string[][] {
  const group = new Map<string, string[]>()
  for (const str of strs) {
    const sorted = [...str].sort().join("")
    const existing = group.get(sorted)
    const newArr = existing ?? []
    newArr.push(str) // O(1) instead of spreading the array, which is O(n)
    group.set(sorted, newArr)
  }

  return [...group.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
