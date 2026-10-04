import { describe, expect, it } from "vitest"
import { Tree } from "./traversal"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

it("traverses nodes in pre-order", () => {
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

  expect(tree.traverse().preOrder().toArray()).toEqual([
    20, 10, 6, 3, 8, 14, 30, 24, 26,
  ])
})

it("returns no values for an empty tree", () => {
  const tree = new Tree(compareNumbers)

  expect(tree.traverse().preOrder().toArray()).toEqual([])
})

it("returns -1 for an empty tree", () => {
  const tree = new Tree(compareNumbers)

  expect(tree.depth()).toBe(-1)
})

it("returns 0 for a tree with only a root", () => {
  const tree = new Tree(compareNumbers)
  tree.insert(20)

  expect(tree.depth()).toBe(0)
})

it("returns the longest root-to-leaf path", () => {
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

  expect(tree.depth()).toBe(3)
})

it("counts paths through nodes with only one child", () => {
  const tree = new Tree(compareNumbers)

  for (const value of [10, 5, 2, 1, 15, 20]) {
    tree.insert(value)
  }

  expect(tree.depth()).toBe(3)
})

describe("size", () => {
  it("returns 0 for an empty tree", () => {
    const tree = new Tree(compareNumbers)

    expect(tree.size()).toBe(0)
  })

  it("returns 1 for a tree with only a root", () => {
    const tree = new Tree(compareNumbers)
    tree.insert(20)

    expect(tree.size()).toBe(1)
  })

  it("counts all nodes in a balanced tree", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [20, 10, 30, 6, 14, 24, 3, 8, 26]) {
      tree.insert(value)
    }

    expect(tree.size()).toBe(9)
  })

  it("counts nodes in a left-heavy tree", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [10, 9, 8, 7, 6, 5, 4]) {
      tree.insert(value)
    }

    expect(tree.size()).toBe(7)
  })

  it("counts nodes in a right-heavy tree", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [1, 2, 3, 4, 5, 6, 7]) {
      tree.insert(value)
    }

    expect(tree.size()).toBe(7)
  })

  it("ignores duplicate values when counting size", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [20, 10, 30, 10, 20, 30, 15]) {
      tree.insert(value)
    }

    expect(tree.size()).toBe(4)
  })

  it("counts nodes in a tree with single-child nodes", () => {
    const tree = new Tree(compareNumbers)
    for (const value of [10, 5, 2, 1, 15, 20]) {
      tree.insert(value)
    }

    expect(tree.size()).toBe(6)
  })
})
