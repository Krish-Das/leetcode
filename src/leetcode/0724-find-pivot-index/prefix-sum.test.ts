import { describe, expect, it } from "vitest"
import { pivotIndex } from "./prefix-sum"

describe("pivotIndex", () => {
  it("returns 3 for [1, 7, 3, 6, 5, 6]", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
  })

  it("returns -1 for [1, 2, 3] (no pivot)", () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1)
  })

  it("returns 0 when pivot is the first element [2, 1, -1]", () => {
    expect(pivotIndex([2, 1, -1])).toBe(0)
  })

  it("returns 0 for [0, 0]", () => {
    expect(pivotIndex([0, 0])).toBe(0)
  })
})
