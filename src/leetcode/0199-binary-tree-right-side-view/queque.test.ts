import { describe, expect, it } from "vitest"
import { rightSideView, type TreeNode } from "./queque"

const n = (
  val: number,
  left: TreeNode | null = null,
  right: TreeNode | null = null,
): TreeNode => ({
  val,
  left,
  right,
})

describe("rightSideView", () => {
  it("returns an empty array for an empty tree", () => {
    expect(rightSideView(null)).toEqual([])
  })

  it("returns the single value for a one-node tree", () => {
    expect(rightSideView(n(1))).toEqual([1])
  })

  it("returns the rightmost nodes for the LeetCode example", () => {
    /*
        1
       / \
      2   3
       \   \
        5   4
    */
    const root = n(1, n(2, null, n(5)), n(3, null, n(4)))

    expect(rightSideView(root)).toEqual([1, 3, 4])
  })

  it("returns left children when right is absent", () => {
    /*
        1
       /
      2
     /
    3
    */
    const root = n(1, n(2, n(3)))

    expect(rightSideView(root)).toEqual([1, 2, 3])
  })

  it("returns the rightmost value per level for a complete tree", () => {
    /*
            1
          /   \
         2     3
        / \   / \
       4   5 6   7
    */
    const root = n(1, n(2, n(4), n(5)), n(3, n(6), n(7)))

    expect(rightSideView(root)).toEqual([1, 3, 7])
  })
})
