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

  protected isLeaf(node: TreeNode<T>): boolean {
    return node.left === null && node.right === null
  }

  depth(): number {
    const visit = (node: NodeLink<T>): number => {
      if (!node) return -1
      if (this.isLeaf(node)) return 0
      return 1 + Math.max(visit(node.left), visit(node.right))
    }
    return visit(this._root)
  }
}

export type { Comparator, NodeLink, TreeNode }
