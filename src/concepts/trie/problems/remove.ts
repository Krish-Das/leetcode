import type { TrieNode } from ".."

export function removeWord(root: TrieNode, word: string): boolean {
  return remove(root, word, 0)
}

function remove(node: TrieNode, word: string, index: number): boolean {
  if (index === word.length) {
    if (!node.isEndOfWord) return false
    node.isEndOfWord = false
    return true
  }

  const char = word.charAt(index)
  const child = node.children.get(char)
  if (!child) return false

  const success = remove(child, word, index + 1)
  if (!success) return false

  if (!child.children.size && !child.isEndOfWord) node.children.delete(char)

  return true
}
