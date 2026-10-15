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

export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  const isEmpty = !(preorder.length && inorder.length)
  if (isEmpty) return null

  // biome-ignore lint/style/noNonNullAssertion: preorder length in ensured above ↑
  const pivot = preorder[0]!
  const pivotIdx = inorder.indexOf(pivot)

  const lInorder = inorder.slice(0, pivotIdx)
  const lPreorder = preorder.slice(1, lInorder.length + 1)

  const rInorder = inorder.slice(pivotIdx + 1, inorder.length + 1)
  const rPreorder = preorder.slice(1 + lInorder.length)

  const left = buildTree(lPreorder, lInorder)
  const right = buildTree(rPreorder, rInorder)
  return new TreeNode(pivot, left, right)
}
