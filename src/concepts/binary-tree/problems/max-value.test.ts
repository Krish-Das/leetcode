import { describe, expect, it } from "vitest"
import { Tree } from "../traversal"
import { bstMax, max } from "./max-value"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue

const createTree = (values: number[]) => {
  const tree = new Tree(compareNumbers)
  for (const value of values) tree.insert(value)
  return tree
}

describe("max", () => {
  it("returns positive infinity for an empty tree", () => {
    expect(max(createTree([]))).toBe(undefined)
  })

  it("returns the root value for a single-node tree", () => {
    expect(max(createTree([20]))).toBe(20)
  })

  it("finds the smallest value in a multi-level tree", () => {
    expect(max(createTree([20, 10, 30, 6, 14, 24, 3, 8, 26]))).toBe(30)
  })

  it("finds negative maximum values", () => {
    expect(max(createTree([-5, -10, -10, -2, -5]))).toBe(-2)
  })
})

describe("bstMax", () => {
  it("returns undefined for an empty tree", () => {
    expect(bstMax(createTree([]))).toBeUndefined()
  })

  it("finds the leftmost value in a multi-level binary search tree", () => {
    expect(bstMax(createTree([20, 10, 30, 6, 14, 24, 3, 8, 26]))).toBe(30)
  })

  it("finds negative maximum values", () => {
    expect(bstMax(createTree([-5, -10, -2, -5]))).toBe(-2)
  })
})
