class Node {
  private readonly ALPHABET_SIZE = 26

  children: (Node | null)[] = Array.from(
    { length: this.ALPHABET_SIZE },
    () => null,
  )
  isEndOfWord: boolean = false
}

class Trie {
  private root = new Node()

  private toIndex = (char: string): number =>
    char.charCodeAt(0) - "a".charCodeAt(0)

  // biome-ignore lint/correctness/noUnusedPrivateClassMembers: may be used later
  private toChar = (code: number): string =>
    String.fromCharCode("a".charCodeAt(0) + code)

  insert(word: string): void {
    const normalized = word.trim().toLowerCase()
    if (!normalized.length) return

    let current = this.root
    for (const char of normalized) {
      const idx = this.toIndex(char)
      const node = current.children[idx]
      if (!node) current.children[idx] = new Node()
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      current = current.children[idx] as Node
    }
    current.isEndOfWord = true
  }

  search(word: string): boolean {
    const normalized = word.trim().toLowerCase()
    if (!normalized.length) return false

    let current = this.root
    for (const char of normalized) {
      const code = this.toIndex(char)
      const node = current.children[code]
      if (!node) return false
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      current = current.children[code] as Node
    }
    return current.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    const normalized = prefix.trim().toLowerCase()
    if (!normalized.length) return true

    let current = this.root
    for (const char of normalized) {
      const idx = this.toIndex(char)
      const node = current.children[idx]
      if (!node) return false
      current = node
    }
    return true
  }
}

export { Node as TrieNode, Trie }
