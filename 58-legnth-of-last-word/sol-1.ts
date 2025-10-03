function lengthOfLastWord(s: string): number {
  const arr = s.trim().split(" ");
  const lastWord = arr[arr.length - 1]!;
  return lastWord.length;
}

console.clear();
console.log(lengthOfLastWord("Hello world"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord(""));
