import type { NodeLink, Tree } from "../traversal"

function levelOrder<T>(tree: Tree<T>) {
  const height = tree.depth()
  const nodesAtDistance = <T>(
    node: NodeLink<T>,
    distance: number,
    h: number = 0,
  ): T[] => {
    if (!node) return []
    if (distance === h) return [node.value]

    return [
      ...nodesAtDistance(node.left, distance, h + 1),
      ...nodesAtDistance(node.right, distance, h + 1),
    ]
  }

  const out: T[] = []
  for (let i = 0; i <= height; i++) {
    out.push(...nodesAtDistance(tree.root, i))
  }

  return out
}

export { levelOrder }
