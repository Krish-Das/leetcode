import { describe, expect, it } from "vitest"
import { Tree } from "../base"
import { areSibling } from "./are-sibling"

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

describe("areSibling", () => {
  it("returns false for an empty tree", () => {
    const tree = new Tree(compareNumbers)

    expect(areSibling(tree, 10, 30)).toBe(false)
  })

  it("returns false for a single-node tree", () => {
    const tree = new Tree(compareNumbers)
    tree.insert(20)

    expect(areSibling(tree, 20, 20)).toBe(false)
  })

  it("returns true for root's immediate children", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 10, 30)).toBe(true)
  })

  it("returns true for siblings in either order", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 30, 10)).toBe(true)
  })

  it("returns true for siblings deeper in the tree", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 6, 14)).toBe(true)
    expect(areSibling(tree, 3, 8)).toBe(true)
  })

  it("returns false when nodes share a level but not a parent", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 6, 24)).toBe(false)
  })

  it("returns false for a parent-child pair", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 20, 10)).toBe(false)
    expect(areSibling(tree, 10, 6)).toBe(false)
  })

  it("returns false when comparing a node with itself", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 10, 10)).toBe(false)
  })

  it("returns false when one value is not in the tree", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 10, 100)).toBe(false)
  })

  it("returns false when both values are not in the tree", () => {
    const tree = buildBalancedTree()

    expect(areSibling(tree, 100, 200)).toBe(false)
  })
})
