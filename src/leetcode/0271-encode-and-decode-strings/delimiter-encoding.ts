class Solution {
  private delimiter = ";"

  encode(strs: string[]): string {
    return strs.map((str) => `${str.length}${this.delimiter}${str}`).join("")
  }

  decode(str: string): string[] {
    const decoded: string[] = []

    let i = 0
    while (i < str.length) {
      const delimiterIdx = str.indexOf(this.delimiter, i)
      if (delimiterIdx === -1) break

      const lengthStr = str.slice(i, delimiterIdx)
      const wordLength = Number.parseInt(lengthStr, 10)
      if (Number.isNaN(wordLength)) break

      const wordStart = delimiterIdx + this.delimiter.length
      const wordEnd = wordStart + wordLength
      if (wordEnd > str.length) break

      const word = str.slice(wordStart, wordEnd)
      decoded.push(word)
      i = wordEnd
    }

    return decoded
  }
}

export { Solution }
