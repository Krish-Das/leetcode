import { describe, expect, it } from "vitest"
import { inorderTraversal, TreeNode } from "./recursive"

describe("inorderTraversal (recursive)", () => {
  it("returns an empty array for an empty tree", () => {
    expect(inorderTraversal(null)).toEqual([])
  })

  it("returns the single value for a one-node tree", () => {
    expect(inorderTraversal(new TreeNode(1))).toEqual([1])
  })

  it("traverses the LeetCode example tree", () => {
    /*
        1
         \
          2
         /
        3
    */
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

    expect(inorderTraversal(root)).toEqual([1, 3, 2])
  })

  it("traverses a complete binary tree in order", () => {
    /*
            4
          /   \
         2     6
        / \   / \
       1   3 5   7
    */
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(6, new TreeNode(5), new TreeNode(7)),
    )

    expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7])
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

    expect(inorderTraversal(root)).toEqual([1, 2, 3])
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

    expect(inorderTraversal(root)).toEqual([1, 2, 3])
  })

  it("traverses a tree with negative values", () => {
    /*
        0
       / \
     -2  -1
    */
    const root = new TreeNode(0, new TreeNode(-2), new TreeNode(-1))

    expect(inorderTraversal(root)).toEqual([-2, 0, -1])
  })
})
