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

export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    ans.push(node.val)
    stack.push(node.right, node.left)
  }
  return ans
}
