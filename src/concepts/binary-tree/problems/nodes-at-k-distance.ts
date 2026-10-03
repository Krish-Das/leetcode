import type { NodeLink, Tree } from "../traversal"

function nodesAtDistance<T>(tree: Tree<T>, k: number): T[] {
  const traverse = <T>(
    node: NodeLink<T>,
    depth: number = 0,
    acc: T[] = [],
  ): T[] => {
    if (!node) return acc
    if (depth === k) {
      acc.push(node.value)
      return acc
    }

    traverse(node.left, depth + 1, acc)
    traverse(node.right, depth + 1, acc)

    return acc
  }

  return traverse(tree.root)
}

export { nodesAtDistance }
