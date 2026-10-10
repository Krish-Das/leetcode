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
function kthSmallest(root: NodeLink, k: number): number {
  let n = k
  const stack: NodeLink[] = []
  let current = root
  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    // biome-ignore lint/style/noNonNullAssertion: guarded by stack.length check
    const node = stack.pop()!
    n--
    if (n === 0) return node.val
    current = node.right
  }

  return -1
}

export { kthSmallest }
