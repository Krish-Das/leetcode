class Node {
  children: Map<string, Node>
  isEndOfWord: boolean = false
  constructor() {
    this.children = new Map<string, Node>()
  }
}

class Trie {
  private root = new Node()

  insert(word: string): void {
    let current = this.root
    for (const char of word) {
      // LeetCode doesn't support map.prototype.getOrInsert()
      if (!current.children.has(char)) current.children.set(char, new Node())
      // biome-ignore lint/style/noNonNullAssertion: It is inserted above
      current = current.children.get(char)!
    }
    current.isEndOfWord = true
  }

  search(word: string): boolean {
    let current = this.root
    for (const char of word) {
      const existing = current.children.get(char)
      if (!existing) return false
      current = existing
    }
    return current.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let current = this.root
    for (const char of prefix) {
      const existing = current.children.get(char)
      if (!existing) return false
      current = existing
    }
    return true
  }
}

export { Node as TrieNode, Trie }
