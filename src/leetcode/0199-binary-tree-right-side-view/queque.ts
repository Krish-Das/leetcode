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
function rightSideView(root: NodeLink): number[] {
  if (!root) return []

  const ans: number[] = []
  let level = [root]
  while (level.length) {
    const next: TreeNode[] = []
    let last: NodeLink = null
    for (const node of level) {
      last = node
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }

    if (last) ans.push(last.val)
    level = next
  }

  return ans
}

export { rightSideView }
