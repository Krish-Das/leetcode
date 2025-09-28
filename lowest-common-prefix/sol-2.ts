function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  let result = "";

  // Sort lexicographically
  const sorted = strs.sort((a, b) => a.localeCompare(b));
  const first = sorted[0]!;
  const last = sorted[sorted.length - 1]!;

  // Copmare the first with the last
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    } else {
      break;
    }
  }
  return result;
}

console.clear();
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flowed"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["aa", "aa"]));
console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));
console.log(longestCommonPrefix(["a", "a", "c"]));
