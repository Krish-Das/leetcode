function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()
  for (const str of strs) {
    const groupName = str.split("").sort().join("")
    const group = map.get(groupName)

    if (!group) {
      map.set(groupName, [str])
      continue
    }

    map.set(groupName, [...group, str])
  }

  return [...map.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
