class Solution {
  private padding: number
  private paddingContent: string

  constructor() {
    this.padding = 3
    this.paddingContent = "0"
  }
  encode(strs: string[]): string {
    let encryptedStr = ""
    for (const str of strs) {
      const paddedStr = str.length
        .toString()
        .padStart(this.padding, this.paddingContent)
      encryptedStr += paddedStr + str
    }
    return encryptedStr
  }

  decode(str: string): string[] {
    const bucket: string[] = []
    const machine = (str: string) => {
      if (!str.length) return

      const delimiter = str.slice(0, this.padding)
      const delimiterNumber = parseInt(delimiter, 10)
      const word = str.slice(this.padding, delimiterNumber + this.padding)
      const nextWord = str.slice(delimiterNumber + this.padding)

      bucket.push(word)
      machine(nextWord)
    }
    machine(str)
    return bucket
  }
}

const sol = new Solution()
// const strs = ["Hello", "World"]
// const strs = ["apples", "2orange"]
// const strs = ["apple", "typewriter"]
const strs = ["", "vn"]
// const strs = [""]
const encoded = sol.encode(strs)
const decoded = sol.decode(encoded)
console.log({ strs, encoded, decoded })
