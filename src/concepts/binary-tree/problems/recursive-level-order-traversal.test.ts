import { describe, expect, it } from "vitest"
import { Tree } from "../traversal"
import { levelOrder } from "./recursive-level-order-traversal"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

describe("recursive levelOrder", () => {
  it("returns an empty array for an empty tree", () => {
    const tree = new Tree(compareNumbers)

    expect(levelOrder(tree)).toEqual([])
  })

  it("returns the root value for a single-node tree", () => {
    const tree = new Tree(compareNumbers)
    tree.insert(20)

    expect(levelOrder(tree)).toEqual([20])
  })

  it("traverses nodes level by level", () => {
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

    expect(levelOrder(tree)).toEqual([20, 10, 30, 6, 14, 24, 3, 8, 26])
  })

  it("traverses a left-heavy chain level by level", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [10, 9, 8, 7, 6, 5, 4]) {
      tree.insert(value)
    }

    expect(levelOrder(tree)).toEqual([10, 9, 8, 7, 6, 5, 4])
  })

  it("traverses a right-heavy chain level by level", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [1, 2, 3, 4, 5, 6, 7]) {
      tree.insert(value)
    }

    expect(levelOrder(tree)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it("traverses a tree with single-child nodes level by level", () => {
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

    expect(levelOrder(tree)).toEqual([10, 5, 15, 2, 20, 1])
  })
})
