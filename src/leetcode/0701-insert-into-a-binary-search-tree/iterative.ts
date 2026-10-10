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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  const newNode = new TreeNode(val)
  if (!root) return newNode

  const stack: (TreeNode | null)[] = [root]
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    const side = val < node.val ? "left" : "right"
    if (!node[side]) {
      node[side] = newNode
      break
    }
    stack.push(node[side])
  }

  return root
}

export { insertIntoBST }
