/** biome-ignore-all lint/style/noNonNullAssertion: Non-nulls are handled */
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

export function createTree(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] === null) return null

  const root = new TreeNode(values[0]!)
  const queue: TreeNode[] = [root]
  let i = 1

  while (queue.length && i < values.length) {
    const node = queue.shift()!
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i]!)
      queue.push(node.left)
    }
    i++
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i]!)
      queue.push(node.right)
    }
    i++
  }

  return root
}
