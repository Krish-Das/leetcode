import { describe, expect, it } from "vitest"
import { BSTIterator, TreeNode } from "./iterative"

describe("BSTIterator", () => {
  it("iterates over the LeetCode example BST in ascending order", () => {
    /*
            7
          /   \
         3     15
              /  \
             9    20
    */
    const root = new TreeNode(
      7,
      new TreeNode(3),
      new TreeNode(15, new TreeNode(9), new TreeNode(20)),
    )

    const iterator = new BSTIterator(root)

    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(3)
    expect(iterator.next()).toBe(7)
    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(9)
    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(15)
    expect(iterator.next()).toBe(20)
    expect(iterator.hasNext()).toBe(false)
  })

  it("returns NaN and has no next on an empty tree", () => {
    const iterator = new BSTIterator(null)

    expect(iterator.hasNext()).toBe(false)
    expect(Number.isNaN(iterator.next())).toBe(true)
  })

  it("handles a single-node tree", () => {
    const iterator = new BSTIterator(new TreeNode(42))

    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(42)
    expect(iterator.hasNext()).toBe(false)
  })

  it("handles a left-heavy chain", () => {
    /*
        3
       /
      2
     /
    1
    */
    const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)))

    const iterator = new BSTIterator(root)

    expect(iterator.next()).toBe(1)
    expect(iterator.next()).toBe(2)
    expect(iterator.next()).toBe(3)
    expect(iterator.hasNext()).toBe(false)
  })

  it("handles a right-heavy chain", () => {
    /*
      1
       \
        2
         \
          3
    */
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))

    const iterator = new BSTIterator(root)

    expect(iterator.next()).toBe(1)
    expect(iterator.next()).toBe(2)
    expect(iterator.next()).toBe(3)
    expect(iterator.hasNext()).toBe(false)
  })

  it("returns NaN when calling next after exhaustion", () => {
    const root = new TreeNode(1)

    const iterator = new BSTIterator(root)
    iterator.next()

    expect(iterator.hasNext()).toBe(false)
    expect(Number.isNaN(iterator.next())).toBe(true)
  })

  it("supports alternating next and hasNext calls", () => {
    /*
        2
       / \
      1   3
    */
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))

    const iterator = new BSTIterator(root)

    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(1)
    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(2)
    expect(iterator.hasNext()).toBe(true)
    expect(iterator.next()).toBe(3)
    expect(iterator.hasNext()).toBe(false)
  })

  it("exhausts all values of a complete BST", () => {
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

    const iterator = new BSTIterator(root)
    const values: number[] = []

    while (iterator.hasNext()) {
      values.push(iterator.next())
    }

    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
