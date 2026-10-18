import { describe, expect, it } from "vitest"
import { createTree } from "#leetcode/tree-node"
import { maxDepth } from "./recursive"

describe("maxDepth (recursive)", () => {
  it("returns 0 for an empty tree", () => {
    expect(maxDepth(null)).toBe(0)
  })

  it("returns 1 for a single-node tree", () => {
    expect(maxDepth(createTree([1]))).toBe(1)
  })

  it("returns 3 for the balanced example tree", () => {
    /*
        3
       / \
      9  20
         / \
        15  7
    */
    const root = createTree([3, 9, 20, null, null, 15, 7])

    expect(maxDepth(root)).toBe(3)
  })

  it("returns the depth of a left-skewed chain", () => {
    /*
      1
     /
    2
   /
  3
    */
    const root = createTree([1, 2, null, 3])

    expect(maxDepth(root)).toBe(3)
  })

  it("returns the depth of a right-skewed chain", () => {
    /*
      1
       \
        2
         \
          3
    */
    const root = createTree([1, null, 2, null, 3])

    expect(maxDepth(root)).toBe(3)
  })

  it("returns the depth of a tree with single-child nodes", () => {
    /*
        1
       / \
      2   3
     /
    4
    */
    const root = createTree([1, 2, 3, 4])

    expect(maxDepth(root)).toBe(3)
  })

  it("accounts for the initial level when provided", () => {
    const root = createTree([1])

    expect(maxDepth(root, 2)).toBe(3)
  })

  it("returns the provided level for an empty tree", () => {
    expect(maxDepth(null, 5)).toBe(5)
  })
})
