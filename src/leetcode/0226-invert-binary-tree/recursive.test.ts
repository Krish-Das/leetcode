import { describe, expect, it } from "vitest"
import { createTree } from "#leetcode/tree-node"
import { invertTree } from "./recursive"

describe("invertTree (recursion)", () => {
  it("returns null for an empty tree", () => {
    expect(invertTree(null)).toBeNull()
  })

  it("inverts a single-node tree", () => {
    const root = createTree([1])

    const result = invertTree(root)

    expect(result).toEqual(createTree([1]))
  })

  it("inverts the LeetCode example tree", () => {
    /*
          4             4
        /   \         /   \
       2     7   =>  7     2
      / \   / \     / \   / \
     1   3 6   9   9   6 3   1
    */
    const root = createTree([4, 2, 7, 1, 3, 6, 9])

    const result = invertTree(root)

    expect(result).toEqual(createTree([4, 7, 2, 9, 6, 3, 1]))
  })

  it("inverts a left-skewed chain into a right-skewed chain", () => {
    /*
      1              1
     /        =>      \
    2                 2
   /                   \
  3                     3
    */
    const root = createTree([1, 2, null, 3])

    const result = invertTree(root)

    expect(result).toEqual(createTree([1, null, 2, null, 3]))
  })

  it("inverts a right-skewed chain into a left-skewed chain", () => {
    /*
      1              1
       \        =>  /
        2          2
         \        /
          3       3
    */
    const root = createTree([1, null, 2, null, 3])

    const result = invertTree(root)

    expect(result).toEqual(createTree([1, 2, null, 3]))
  })

  it("inverts a tree with single-child nodes", () => {
    /*
      1              1
     / \        =>  / \
    2   3          3   2
       /               \
      4                 4
    */
    const root = createTree([1, 2, 3, null, null, 4])

    const result = invertTree(root)

    expect(result).toEqual(createTree([1, 3, 2, null, 4]))
  })

  it("inverts a tree with duplicate values", () => {
    /*
      1              1
     / \        =>  / \
    2   2          2   2
       / \        / \
      3   3      3   3
    */
    const root = createTree([1, 2, 2, null, null, 3, 3])

    const result = invertTree(root)

    expect(result).toEqual(createTree([1, 2, 2, 3, 3]))
  })
})
