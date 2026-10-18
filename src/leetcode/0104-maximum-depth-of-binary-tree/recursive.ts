import type { TreeNode } from "../tree-node"

type NodeLink = TreeNode | null
export function maxDepth(root: NodeLink, level: number = 0): number {
  if (!root) return level
  return Math.max(
    maxDepth(root.left, level + 1),
    maxDepth(root.right, level + 1),
  )
}
