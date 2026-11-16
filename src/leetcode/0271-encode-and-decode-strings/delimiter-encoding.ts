class Solution {
  private delimiter = ";"

  encode(strs: string[]): string {
    return strs.map((str) => `${str.length}${this.delimiter}${str}`).join("")
  }

  decode(str: string): string[] {
    const decoded: string[] = []

    let s = str
    while (s.length) {
      const delimiterIdx = s.indexOf(this.delimiter)
      const lengthStr = s.slice(0, delimiterIdx)
      const wordLen = Number.parseInt(lengthStr, 10)
      if (Number.isNaN(wordLen)) break
      const wordStart = lengthStr.length + this.delimiter.length
      const wordEnd = wordStart + wordLen
      const word = s.slice(wordStart, wordEnd)
      decoded.push(word)
      s = s.slice(wordEnd)
    }

    return decoded
  }
}

export { Solution }
