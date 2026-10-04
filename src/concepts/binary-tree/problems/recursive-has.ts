import type { NodeLink, Tree } from "../base"

function has<T>(tree: Tree<T>, target: T): boolean {
  const traverse = (node: NodeLink<T>, target: T): boolean => {
    if (!node) return false
    if (node.value === target) return true
    return traverse(node.left, target) || traverse(node.right, target)
  }
  return traverse(tree.root, target)
}

export { has }
