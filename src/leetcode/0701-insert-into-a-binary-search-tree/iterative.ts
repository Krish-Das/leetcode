// https://leetcode.com/problems/insert-into-a-binary-search-tree
class TreeNode {
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
function insertIntoBST(root: NodeLink, val: number): TreeNode | null {
  if (!root) return new TreeNode(val)

  const stack: NodeLink[] = [root]
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    if (val === node.val) break
    const side = val < node.val ? "left" : "right"
    if (!node[side]) {
      node[side] = new TreeNode(val)
      break
    }
    stack.push(node[side])
  }
  return root
}

export { insertIntoBST }
