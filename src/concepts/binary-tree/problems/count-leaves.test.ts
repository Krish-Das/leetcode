import { describe, expect, it } from "vitest"
import { Tree } from "../traversal"
import { countLeaves } from "./count-leaves"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

describe("countLeaves", () => {
  it("returns 0 for an empty tree", () => {
    const tree = new Tree(compareNumbers)

    expect(countLeaves(tree)).toBe(0)
  })

  it("returns 1 for a tree with only a root", () => {
    const tree = new Tree(compareNumbers)
    tree.insert(20)

    expect(countLeaves(tree)).toBe(1)
  })

  it("counts leaves in a balanced tree", () => {
    /*
            20
          /    \
        10      30
       /  \    /
      6   14  24
     / \        \
    3   8        26
    */
    const tree = new Tree(compareNumbers)
    for (const value of [20, 10, 30, 6, 14, 24, 3, 8, 26]) {
      tree.insert(value)
    }

    expect(countLeaves(tree)).toBe(4)
  })

  it("returns 1 for a left-heavy chain", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [10, 9, 8, 7, 6, 5, 4]) {
      tree.insert(value)
    }

    expect(countLeaves(tree)).toBe(1)
  })

  it("returns 1 for a right-heavy chain", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [1, 2, 3, 4, 5, 6, 7]) {
      tree.insert(value)
    }

    expect(countLeaves(tree)).toBe(1)
  })

  it("counts leaves in a tree with single-child nodes", () => {
    /*
        10
       /  \
      5    15
     /      \
    2        20
   /
  1
    */
    const tree = new Tree(compareNumbers)
    for (const value of [10, 5, 2, 1, 15, 20]) {
      tree.insert(value)
    }

    expect(countLeaves(tree)).toBe(2)
  })
})
