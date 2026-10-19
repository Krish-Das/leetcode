import type { TreeNode } from "#leetcode/tree-node"

export type NodeLink = TreeNode | null
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): NodeLink {
  if (!root) return null
  if (p.val === root.val || q.val === root.val) return root

  const pSide = p.val < root.val ? "left" : "right"
  const qSide = q.val < root.val ? "left" : "right"
  if (pSide !== qSide) return root

  return lowestCommonAncestor(root[pSide], p, q)
}
