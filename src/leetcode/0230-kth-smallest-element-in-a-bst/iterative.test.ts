import { describe, expect, it } from "vitest"
import { TreeNode, kthSmallest } from "./iterative"

describe("kthSmallest", () => {
  it("returns the smallest element when k is 1", () => {
    /*
        3
       / \
      1   4
       \
        2
    */
    const root = new TreeNode(
      3,
      new TreeNode(1, null, new TreeNode(2)),
      new TreeNode(4),
    )

    expect(kthSmallest(root, 1)).toBe(1)
  })

  it("returns the kth smallest element in a larger tree", () => {
    /*
            5
          /   \
         3     6
        / \
       2   4
      /
     1
    */
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
      new TreeNode(6),
    )

    expect(kthSmallest(root, 3)).toBe(3)
  })

  it("returns the root value when k equals the middle position", () => {
    /*
        2
       / \
      1   3
    */
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))

    expect(kthSmallest(root, 2)).toBe(2)
  })

  it("returns the largest element when k equals the tree size", () => {
    /*
        2
       / \
      1   3
    */
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))

    expect(kthSmallest(root, 3)).toBe(3)
  })

  it("works for a left-heavy chain", () => {
    /*
        5
       /
      4
     /
    3
   /
  2
 /
1
    */
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(3, new TreeNode(2, new TreeNode(1)))),
    )

    expect(kthSmallest(root, 2)).toBe(2)
  })

  it("works for a right-heavy chain", () => {
    /*
      1
       \
        2
         \
          3
           \
            4
             \
              5
    */
    const root = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5))),
      ),
    )

    expect(kthSmallest(root, 4)).toBe(4)
  })

  it("returns -1 for an empty tree", () => {
    expect(kthSmallest(null, 1)).toBe(-1)
  })
})
