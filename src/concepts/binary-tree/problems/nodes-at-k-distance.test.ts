import { describe, expect, it } from "vitest"
import { type Comparator, Tree } from "../traversal"
import { nodesAtDistance } from "./nodes-at-k-distance"

const compareNumbers = ((a: number, b: number) =>
  a - b) satisfies Comparator<number>

const createTree = <T>(
  values: T[],
  comparator: Comparator<T> = compareNumbers as Comparator<T>,
) => {
  const tree = new Tree<T>(comparator)
  for (const value of values) tree.insert(value)
  return tree
}

describe("nodesAtDistance", () => {
  it("returns no values for an empty tree", () => {
    expect(nodesAtDistance(createTree([]), 0)).toEqual([])
  })

  it("returns the root value at distance zero", () => {
    expect(nodesAtDistance(createTree([20, 10, 30]), 0)).toEqual([20])
  })

  it("returns every node at the requested distance from the root", () => {
    const tree = createTree([20, 10, 30, 6, 14, 24, 3, 8, 26])

    expect(nodesAtDistance(tree, 2)).toEqual([6, 14, 24])
  })

  it("returns nodes at deeper distances in left-to-right order", () => {
    const tree = createTree([20, 10, 30, 6, 14, 24, 3, 8, 26])

    expect(nodesAtDistance(tree, 3)).toEqual([3, 8, 26])
  })

  it("returns no values when the requested distance exceeds the tree depth", () => {
    expect(nodesAtDistance(createTree([20, 10, 30]), 2)).toEqual([])
  })

  it("returns no values for an empty tree", () => {
    expect(
      nodesAtDistance(
        createTree(["g", "f", "x", "z"], (a, b) => a.localeCompare(b)),
        1,
      ),
    ).toEqual(["f", "x"])
  })
})
