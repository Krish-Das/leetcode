import { describe, expect, it } from "vitest"
import { buildTree, TreeNode } from "./array"

describe("buildTree", () => {
  it("builds the example tree from LeetCode", () => {
    const preorder = [3, 9, 20, 15, 7]
    const inorder = [9, 3, 15, 20, 7]

    const root = buildTree(preorder, inorder)

    /*
        3
       / \
      9  20
        /  \
       15   7
    */
    expect(root).toEqual(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    )
  })

  it("builds a single-node tree", () => {
    const root = buildTree([-1], [-1])

    expect(root).toEqual(new TreeNode(-1))
  })

  it("returns null for empty inputs", () => {
    expect(buildTree([], [])).toBeNull()
  })

  it("builds a left-skewed tree", () => {
    /*
        3
       /
      2
     /
    1
    */
    const preorder = [3, 2, 1]
    const inorder = [1, 2, 3]

    const root = buildTree(preorder, inorder)

    expect(root).toEqual(new TreeNode(3, new TreeNode(2, new TreeNode(1))))
  })

  it("builds a right-skewed tree", () => {
    /*
    1
     \
      2
       \
        3
    */
    const preorder = [1, 2, 3]
    const inorder = [1, 2, 3]

    const root = buildTree(preorder, inorder)

    expect(root).toEqual(
      new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
    )
  })

  it("builds a complete binary tree", () => {
    /*
            1
          /   \
         2     3
        / \   / \
       4   5 6   7
    */
    const preorder = [1, 2, 4, 5, 3, 6, 7]
    const inorder = [4, 2, 5, 1, 6, 3, 7]

    const root = buildTree(preorder, inorder)

    expect(root).toEqual(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6), new TreeNode(7)),
      ),
    )
  })

  it("builds a tree with only right children on the root", () => {
    /*
      1
       \
        2
       /
      3
    */
    const preorder = [1, 2, 3]
    const inorder = [1, 3, 2]

    const root = buildTree(preorder, inorder)

    expect(root).toEqual(
      new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
    )
  })
})
