import type { NodeLink, Tree } from "../traversal"

function isBst(tree: Tree<number>): boolean {
  const traverse = (
    node: NodeLink<number>,
    min: number = Number.NEGATIVE_INFINITY,
    max: number = Number.POSITIVE_INFINITY,
  ): boolean => {
    if (!node) return true
    if (node.value <= min || node.value >= max) return false

    return (
      traverse(node.left, min, node.value) &&
      traverse(node.right, node.value, max)
    )
  }

  return traverse(tree.root)
}

export { isBst }
