import type { NodeLink, Tree } from "../traversal"

function isEqual<T>(first: Tree<T>, second: Tree<T>): boolean {
  const traverse = <T>(first: NodeLink<T>, second: NodeLink<T>): boolean => {
    if (!first && !second) return true
    if (!first || !second) return false

    return (
      first.value === second.value &&
      traverse(first.left, second.left) &&
      traverse(first.right, second.right)
    )
  }
  return traverse(first.root, second.root)
}

export { isEqual }
