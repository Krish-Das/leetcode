import { describe, expect, it } from "vitest"
import { levelOrder, TreeNode } from "./iterative"

describe("levelOrder", () => {
  it("returns an empty array for an empty tree", () => {
    expect(levelOrder(null)).toEqual([])
  })

  it("returns a single level for a one-node tree", () => {
    const root = new TreeNode(1)

    expect(levelOrder(root)).toEqual([[1]])
  })

  it("traverses the LeetCode example tree level by level", () => {
    /*
        3
       / \
      9  20
        /  \
       15   7
    */
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )

    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]])
  })

  it("traverses a complete binary tree", () => {
    /*
            1
          /   \
         2     3
        / \   / \
       4   5 6   7
    */
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7)),
    )

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]])
  })

  it("traverses a left-skewed tree", () => {
    /*
        3
       /
      2
     /
    1
    */
    const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)))

    expect(levelOrder(root)).toEqual([[3], [2], [1]])
  })

  it("traverses a right-skewed tree", () => {
    /*
      1
       \
        2
         \
          3
    */
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))

    expect(levelOrder(root)).toEqual([[1], [2], [3]])
  })

  it("preserves left-to-right order for single-child nodes", () => {
    /*
        1
       / \
      2   3
     /     \
    4       5
    */
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(5)),
    )

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5]])
  })
})
