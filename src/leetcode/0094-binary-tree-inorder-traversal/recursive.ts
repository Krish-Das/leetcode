export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export type NodeLink = TreeNode | null
export function inorderTraversal(root: NodeLink): number[] {
  function traverse(node: NodeLink, acc: number[] = []): number[] {
    if (!node) return acc
    return [...traverse(node.left, acc), node.val, ...traverse(node.right, acc)]
  }

  return traverse(root)
}
