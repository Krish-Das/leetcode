import type { NodeLink, Tree } from "../base"

function areSibling<T>(tree: Tree<T>, first: T, second: T): boolean {
  const traverse = (node: NodeLink<T>, f: T, s: T): boolean => {
    if (!node) return false
    if (!node.left) return traverse(node.right, f, s)
    if (!node.right) return traverse(node.left, f, s)
    if (
      (node.left.value === f && node.right.value === s) ||
      (node.left.value === s && node.right.value === f)
    )
      return true

    return traverse(node.left, f, s) || traverse(node.right, f, s)
  }
  return traverse(tree.root, first, second)
}

export { areSibling }
