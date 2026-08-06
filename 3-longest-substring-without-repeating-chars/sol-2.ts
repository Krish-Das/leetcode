function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0

  const answers: string[] = []
  let str = ""
  s.split("").forEach((item, idx) => {
    if (str.includes(item)) {
      answers.push(str)
      str = ""
    }
    str += item
    if (idx === s.length - 1 && str.length) answers.push(str)
  })

  // return answers.reduce((acc, v) => (acc.length > v.length ? acc : v))
  // return answers.map((a) => a.length).reduce((acc, v) => (acc > v ? acc : v));
  return 0
}

console.clear()
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring(""))
