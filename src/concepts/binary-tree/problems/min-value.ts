import type { NodeLink, Tree } from "../traversal"

/**
 * Finds the minimum value in a binary tree.
 *
 * Visits every node. Does not need BST order.
 * Works only for `Tree<number>`.
 *
 * @param tree - Tree of numbers.
 * @returns The smallest value. Returns `undefined` if the tree is empty.
 *
 * @complexity O(n) time, O(h) stack space.
 *
 * @signature `(tree: Tree<number>) => number | undefined`
 */
function min(tree: Tree<number>): number | undefined {
  if (!tree.root) return undefined

  const traverse = (node: NodeLink<number>): number =>
    node
      ? Math.min(node.value, traverse(node.left), traverse(node.right))
      : Number.POSITIVE_INFINITY

  return traverse(tree.root)
}

/**
 * Finds the minimum value in a binary search tree.
 *
 * Needs BST order. Walks left from the root until there is no left child.
 * Gives wrong results on a plain binary tree. Use {@link min} for that.
 * Works only for `Tree<number>`.
 *
 * @param tree - Binary search tree of numbers.
 * @returns The smallest value. Returns `undefined` if the tree is empty.
 *
 * @complexity O(h) time, O(1) space (iterative).
 *
 * @signature `(tree: Tree<number>) => number | undefined`
 */
function bstMin(tree: Tree<number>): number | undefined {
  let node = tree.root
  if (!node) return undefined

  while (node.left) node = node.left

  return node.value
}

export { bstMin, min }
