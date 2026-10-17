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
  const values: number[] = []

  const stack: NodeLink[] = []
  let current: NodeLink = root
  while (stack.length || current) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    // biome-ignore lint/style/noNonNullAssertion: guarded by stack.length check
    const node = stack.pop()!
    values.push(node.val)
    current = node.right
  }

  return values
}
