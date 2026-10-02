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
