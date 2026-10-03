import { expect, it } from "vitest"
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
