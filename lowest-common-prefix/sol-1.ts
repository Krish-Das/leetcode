function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  // Sort lexicographically
  const sorted = strs.sort((a, b) => a.localeCompare(b));

  const first = sorted[0]!;
  const last = sorted[sorted.length - 1]!;
  const resultArr: string[] = [];

  for (let i = 0; i < first.length; i++) {
    if (first.charAt(i) !== last.charAt(i)) break;
    resultArr.push(first.charAt(i));
  }
  return resultArr.join("");
}

console.clear();
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flowed"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["aa", "aa"]));
console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));
console.log(longestCommonPrefix(["a", "a", "c"]));
