import { describe, expect, it } from "vitest"
import { Tree } from "../traversal"
import { min } from "./min-value"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

const createTree = (values: number[]) => {
  const tree = new Tree(compareNumbers)
  for (const value of values) tree.insert(value)
  return tree
}

describe("min", () => {
  it("returns positive infinity for an empty tree", () => {
    expect(min(createTree([]))).toBe(undefined)
  })

  it("returns the root value for a single-node tree", () => {
    expect(min(createTree([20]))).toBe(20)
  })

  it("finds the smallest value in a multi-level tree", () => {
    expect(min(createTree([20, 10, 30, 6, 14, 24, 3, 8, 26]))).toBe(3)
  })

  it("finds negative minimum values", () => {
    expect(min(createTree([0, -5, 10, -10, -2, 5]))).toBe(-10)
  })
})
