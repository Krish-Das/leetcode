import type { TrieNode } from ".."

export function getWords(root: TrieNode): string[] {
  const words: string[] = []
  collectWords(root, "", words)
  return words
}

function collectWords(node: TrieNode, prefix: string, words: string[]): void {
  if (node.isEndOfWord) words.push(prefix)

  for (const [char, child] of node.children)
    collectWords(child, prefix + char, words)
}
