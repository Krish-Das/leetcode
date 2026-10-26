import type { TreeNode } from "#leetcode/tree-node"

export type NodeLink = TreeNode | null
export function hasPathSum(root: NodeLink, targetSum: number): boolean {
  function fn(node: NodeLink, sum = 0): boolean {
    if (!node) return false
    if (!(node.left || node.right)) {
      const newSum = sum + node.val
      if (newSum === targetSum) return true
    }
    return fn(node.left, sum + node.val) || fn(node.right, sum + node.val)
  }
  return fn(root)
}
