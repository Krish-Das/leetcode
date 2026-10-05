import type { NodeLink, Tree } from "../base"

function countLeaves<T>(tree: Tree<T>): number {
  const count = (node: NodeLink<T>): number => {
    if (!node) return 0
    if (!node.right && !node.left) return 1
    return count(node.left) + count(node.right)
  }
  return count(tree.root)
}

export { countLeaves }
