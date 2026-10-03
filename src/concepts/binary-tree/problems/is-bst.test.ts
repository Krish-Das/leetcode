/** biome-ignore-all lint/style/noNonNullAssertion: Required by testcases */
import { describe, expect, it } from "vitest"
import { Tree } from "../traversal"
import { isBst } from "./is-bst"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

const createTree = (values: number[]) => {
  const tree = new Tree(compareNumbers)
  for (const value of values) tree.insert(value)
  return tree
}

describe("isBst", () => {
  it("returns true for an empty tree", () => {
    expect(isBst(createTree([]))).toBe(true)
  })

  it("returns true for a valid multi-level binary search tree", () => {
    expect(isBst(createTree([10, 5, 15, 2, 7, 12, 20]))).toBe(true)
  })

  it("returns false when an immediate child is on the wrong side", () => {
    const tree = createTree([10, 5, 15])
    tree.root!.left!.value = 12

    expect(isBst(tree)).toBe(false)
  })

  it("returns true when a nested value is inserted into its valid subtree", () => {
    expect(isBst(createTree([10, 5, 15, 12, 20, 8]))).toBe(true)
  })
})
