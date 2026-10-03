import type { NodeLink, Tree } from "../traversal"

function max(tree: Tree<number>): number | undefined {
  if (!tree.root) return undefined

  const traverse = (
    node: NodeLink<number>,
    max: number = Number.NEGATIVE_INFINITY,
  ): number => {
    if (!node) return max
    return Math.max(node.value, traverse(node.left), traverse(node.right))
  }
  return traverse(tree.root)
}

function bstMax(tree: Tree<number>): number | undefined {
  let node = tree.root
  if (!node) return undefined

  while (node.right) node = node.right

  return node.value
}

export { bstMax, max }
