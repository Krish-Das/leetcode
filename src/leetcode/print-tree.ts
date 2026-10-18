import type { TreeNode } from "#leetcode/tree-node.ts"

function height(n: TreeNode | null): number {
  return n ? 1 + Math.max(height(n.left), height(n.right)) : 0
}

export function printTree(root: TreeNode | null): string {
  if (!root) return ""

  const h = height(root)
  const width = 2 ** h * 2
  const grid: string[][] = Array.from({ length: h * 2 - 1 }, () =>
    Array(width).fill(" "),
  )

  function place(
    n: TreeNode | null,
    row: number,
    col: number,
    offset: number,
  ): void {
    if (!n) return

    const currentRow = grid[row]
    if (!currentRow) return

    const value = String(n.val)
    const start = Math.max(0, col - Math.floor(value.length / 2))
    for (let i = 0; i < value.length; i++) {
      currentRow[start + i] = value.charAt(i)
    }

    const branchRow = grid[row + 1]
    if (!branchRow) return

    if (n.left) {
      const childCol = col - offset
      branchRow[Math.floor((col + childCol) / 2)] = "/"
      place(n.left, row + 2, childCol, Math.floor(offset / 2))
    }

    if (n.right) {
      const childCol = col + offset
      branchRow[Math.floor((col + childCol) / 2)] = "\\"
      place(n.right, row + 2, childCol, Math.floor(offset / 2))
    }
  }

  place(root, 0, Math.floor(width / 2), Math.floor(width / 4))

  return grid
    .map((row) => row.join("").trimEnd())
    .filter((line) => line.trim().length > 0)
    .join("\n")
}
