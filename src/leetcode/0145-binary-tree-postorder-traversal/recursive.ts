import type { TreeNode } from "../tree-node"

export function postorderTraversal(
  root: TreeNode | null,
  post: number[] = [],
): number[] {
  if (!root) return post
  return [
    ...postorderTraversal(root.left, post),
    ...postorderTraversal(root.right, post),
    root.val,
  ]
}
