function isPalindrome(s: string): boolean {
  const REGEX = /[^A-Za-z0-9]/g // ^ inside [...] negates the class
  const cleanedStr = s.toLowerCase().replace(REGEX, "")

  let start = 0
  let end = cleanedStr.length - 1

  while (start <= end) {
    if (cleanedStr[start] !== cleanedStr[end]) return false
    start++
    end--
  }

  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) // "amanaplanacanalpanama" → true
console.log(isPalindrome("race a car")) // "raceacar" → false
console.log(isPalindrome(" ")) // "" → true
