export type Comparator<T> = (value: T, nodeValue: T) => number

export type NodeLink<T> = TreeNode<T> | null
export class TreeNode<T> {
  constructor(
    public value: T,
    public left: NodeLink<T> = null,
    public right: NodeLink<T> = null,
  ) {}
}

export class Tree<T> {
  protected _root: NodeLink<T> = null

  get root() {
    return this._root
  }

  constructor(protected readonly compare: Comparator<T>) {}

  insert(value: T): this {
    if (!this._root) {
      this._root = new TreeNode(value)
      return this
    }

    let node = this._root
    for (;;) {
      const order = this.compare(value, node.value)
      if (order === 0) return this // duplicate: do nothing

      const side = order < 0 ? "left" : "right"
      const next = node[side]

      if (!next) {
        node[side] = new TreeNode(value)
        return this
      }
      node = next
    }
  }

  has(value: T): boolean {
    let current = this._root

    while (current) {
      if (current.value === value) return true
      const order = this.compare(value, current.value)
      const side = order < 0 ? "left" : "right"
      current = current[side]
    }

    return false
  }
}
