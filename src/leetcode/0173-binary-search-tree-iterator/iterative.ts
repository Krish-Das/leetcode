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
export class BSTIterator {
  private current: NodeLink
  private stack: NodeLink[] = []
  constructor(root: NodeLink) {
    this.current = root
  }

  next(): number {
    if (!this.#hasNext) return Number.NaN

    let current = this.current
    while (current) {
      this.stack.push(current)
      current = current.left
    }
    // biome-ignore lint/style/noNonNullAssertion: guarded by stack.length check
    const node = this.stack.pop()!
    this.current = node.right
    return node.val
  }

  hasNext = (): boolean => this.#hasNext

  get #hasNext() {
    return this.stack.length > 0 || this.current !== null
  }
}
