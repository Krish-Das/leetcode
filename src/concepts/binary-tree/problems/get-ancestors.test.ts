import { describe, expect, it } from "vitest"
import { Tree } from "../base"
import { ancestors } from "./get-ancestors"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

const buildBalancedTree = () => {
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
  return tree
}

describe("ancestors", () => {
  it("returns an empty array for an empty tree", () => {
    const tree = new Tree(compareNumbers)

    expect(ancestors(tree, 20, compareNumbers)).toEqual([])
  })

  it("returns an empty array for the root value", () => {
    const tree = buildBalancedTree()

    expect(ancestors(tree, 20, compareNumbers)).toEqual([])
  })

  it("returns the root as the only ancestor of a direct child", () => {
    const tree = buildBalancedTree()

    expect(ancestors(tree, 10, compareNumbers)).toEqual([20])
    expect(ancestors(tree, 30, compareNumbers)).toEqual([20])
  })

  it("returns ancestors from root to parent", () => {
    const tree = buildBalancedTree()

    expect(ancestors(tree, 6, compareNumbers)).toEqual([20, 10])
    expect(ancestors(tree, 14, compareNumbers)).toEqual([20, 10])
    expect(ancestors(tree, 24, compareNumbers)).toEqual([20, 30])
  })

  it("returns all ancestors for deeply nested values", () => {
    const tree = buildBalancedTree()

    expect(ancestors(tree, 3, compareNumbers)).toEqual([20, 10, 6])
    expect(ancestors(tree, 8, compareNumbers)).toEqual([20, 10, 6])
    expect(ancestors(tree, 26, compareNumbers)).toEqual([20, 30, 24])
  })

  it("returns an empty array when the value is not in the tree", () => {
    const tree = buildBalancedTree()

    expect(ancestors(tree, 100, compareNumbers)).toEqual([])
  })

  it("returns an empty array for a single-node tree when querying the root", () => {
    const tree = new Tree(compareNumbers)
    tree.insert(20)

    expect(ancestors(tree, 20, compareNumbers)).toEqual([])
  })

  it("returns an empty array for a single-node tree when querying a missing value", () => {
    const tree = new Tree(compareNumbers)
    tree.insert(20)

    expect(ancestors(tree, 10, compareNumbers)).toEqual([])
  })
})
