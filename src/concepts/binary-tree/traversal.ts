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

  *inOrder(): Generator<T, void, undefined> {
    const stack: NodeLink<T>[] = []
    let current = this.root
    while (current || stack.length) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      // biome-ignore lint/style/noNonNullAssertion: guarded by stack.length check
      const node = stack.pop()!
      yield node.value
      current = node.right
    }
  }

  *levelOrder(): Generator<T, void, undefined> {
    const queue: NodeLink<T>[] = [this.root]

    while (queue.length) {
      const node = queue.shift()
      if (!node) continue
      yield node.value
      queue.push(node.left, node.right)
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

  size(): number {
    const traverse = (node: NodeLink<T>): number => {
      if (!node) return 0
      return 1 + traverse(node.left) + traverse(node.right)
    }
    return traverse(this._root)
  }

  leafCount(): number {
    const count = (node: NodeLink<T>): number => {
      if (!node) return 0
      if (this.isLeaf(node)) return 1
      return count(node.left) + count(node.right)
    }
    return count(this._root)
  }
}

export type { Comparator, NodeLink, TreeNode }
