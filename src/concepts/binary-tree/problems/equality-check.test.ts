import { describe, expect, it } from "vitest"
import { Tree } from "../traversal"
import { isEqual } from "./equality-check"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

const createTree = (values: number[]) => {
  const tree = new Tree(compareNumbers)
  for (const value of values) tree.insert(value)
  return tree
}

describe("isEqual", () => {
  it("returns true for two empty trees", () => {
    expect(isEqual(createTree([]), createTree([]))).toBe(true)
  })

  it("returns false when only one tree is empty", () => {
    expect(isEqual(createTree([]), createTree([20]))).toBe(false)
  })

  it("returns true for trees with identical values and structure", () => {
    const values = [20, 10, 30, 6, 14, 24, 3, 8, 26]

    expect(isEqual(createTree(values), createTree(values))).toBe(true)
  })

  it("returns false when a node value differs", () => {
    expect(isEqual(createTree([5, 3, 7]), createTree([5, 3, 8]))).toBe(false)
  })

  it.todo("returns false when identical values form different structures", () => {
    expect(
      isEqual(createTree([5, 3, 7, 2, 4]), createTree([5, 3, 7, 4, 2])),
    ).toBe(false)
  })
})
