const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"] as const
type RomanNumeral = (typeof romanNumerals)[number]
type RomanValueMap = Record<RomanNumeral, number>
const romanValues: RomanValueMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s: string): number {
  let num = 0
  s.split("").forEach((n) => {
    num += romanValues[n]
  })
  return num
}

console.clear()
console.log(romanToInt("III")) // 3
console.log(romanToInt("IV")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
