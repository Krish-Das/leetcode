import {
  type Comparator,
  type NodeLink,
  Tree as TreeBase,
  type TreeNode,
} from "./base"

class Traversal<T> {
  constructor(private readonly root: NodeLink<T>) {}

  *preOrder(): Generator<T, void, undefined> {
    const stack: NodeLink<T>[] = [this.root]
    while (stack.length) {
      const n = stack.pop()
      if (!n) continue
      stack.push(n.right, n.left)
      yield n.value
    }
  }
}

export class Tree<T> extends TreeBase<T> {
  traverse() {
    return new Traversal(this._root)
  }
}

export type { Comparator, NodeLink, TreeNode }
