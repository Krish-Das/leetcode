import type { TreeNode } from "#leetcode/tree-node"

export type NodeLink = TreeNode | null
export function invertTree(root: TreeNode | null): NodeLink {
  if (!root) return null
  const left = root.left
  const right = root.right
  root.right = invertTree(left)
  root.left = invertTree(right)
  return root
}
