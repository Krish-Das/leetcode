import type { Comparator, NodeLink, Tree } from "../base"

/**
 * Relies on BST
 */
function ancestors<T>(tree: Tree<T>, value: T, compare: Comparator<T>): T[] {
  let current: NodeLink<T> = tree.root
  const out: T[] = []
  while (current) {
    const difference = compare(value, current.value)
    const hasMatched = difference === 0
    if (hasMatched) break

    const side = difference < 0 ? "left" : "right"
    const isLeaf = current[side] === null
    if (isLeaf) return []

    out.push(current.value)
    current = current[side]
  }
  return out
}

export { ancestors }
