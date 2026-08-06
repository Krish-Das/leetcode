function lengthOfLongestSubstring(s: string): number {
  const answers: string[] = []
  let str = ""
  s.split("").forEach((item) => {
    if (str.includes(item)) {
      answers.push(str)
      str = ""
      str += item
    } else {
      str += item
    }
  })

  return 0
}

console.clear()
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("a"))
// console.log(lengthOfLongestSubstring(""));
