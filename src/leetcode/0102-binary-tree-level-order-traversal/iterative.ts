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

type NodeLink = TreeNode | null
export function levelOrder(root: NodeLink): number[][] {
  if (!root) return []

  const ans: number[][] = []
  let level = [root]
  while (level.length) {
    const next = []
    for (const node of level) {
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }
    ans.push(level.map((n) => n.val))
    level = next
  }
  return ans
}
