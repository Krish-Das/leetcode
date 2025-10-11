function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
