class Solution {
  private delimiter: string
  private delimiterRegexp: RegExp

  constructor() {
    this.delimiter = "#"
    this.delimiterRegexp = /#(.*)/s
  }

  encode(strs: string[]): string {
    let encoded = ""
    for (const str of strs) {
      const length = str.length.toString()
      encoded += length + this.delimiter + str
    }
    return encoded
  }

  /**
   * @returns the word and the rest (rest is null only when fully consumed)
   */
  private machine(str: string): [string, string | null] {
    const [num, group] = str.split(this.delimiterRegexp)

    const isEncodingInvalid = !num
    if (isEncodingInvalid) throw new Error("Malformed encoding!")
    const len = parseInt(num, 10)
    const isStrEmpty = Number.isNaN(len)
    if (isStrEmpty) throw new Error("Malformed encoding!")

    if (!group) return ["", null]

    const word = group.slice(0, len)
    const rest = group.slice(len)
    return [word, rest.length ? rest : null]
  }

  decode(str: string): string[] {
    let acc = str
    const bucket: string[] = []
    while (acc) {
      const [word, rest] = this.machine(acc)
      bucket.push(word)
      if (!rest) break
      acc = rest
    }
    return bucket
  }
}

const sol = new Solution()
// const strs = ["Hello", "World"]
// const strs = ["apples", "2orange"]
const strs = ["apple", "9typew#iters"]
// const strs = ["", "vn"]
// const strs = [""]
const encoded = sol.encode(strs)
const decoded = sol.decode(encoded)
console.log(decoded)
// console.log(sol.decode("5#apple12#9typew#iters"))
// console.log(sol.decode("6#apples7#2orange"))
// console.log(sol.decode("0#2#vn"))
// console.log(sol.decode("0#"))
