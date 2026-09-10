import { describe, expect, it } from "vitest"
import { calPoints } from "./stack"

describe("682. Baseball Game (stack)", () => {
  it("returns 30 for [5, 2, C, D, +]", () => {
    expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30)
  })

  it("returns 27 for [5, -2, 4, C, D, 9, +, +]", () => {
    expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27)
  })

  it("returns 0 for [1, C]", () => {
    expect(calPoints(["1", "C"])).toBe(0)
  })
})
