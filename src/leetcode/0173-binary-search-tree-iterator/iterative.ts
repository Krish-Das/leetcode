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
  private stack: NodeLink[]
  private current: NodeLink

  constructor(private readonly root: NodeLink) {
    this.current = this.root
    this.stack = []
  }

  get #hasNext() {
    return this.stack.length > 0 || this.current !== null
  }

  next(): number {
    if (!this.#hasNext) return Number.NaN

    while (this.current) {
      this.stack.push(this.current)
      this.current = this.current.left
    }
    // biome-ignore lint/style/noNonNullAssertion: guarded by stack.length check
    const node = this.stack.pop()!
    this.current = node.right

    return node.val
  }

  hasNext = () => this.#hasNext
}
