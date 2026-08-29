import { expect, it } from "vitest"
import { maxProfit } from "./sliding-window"

it("returns maximum profit", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  expect(maxProfit([0])).toBe(0)
  expect(maxProfit([2, 4, 1])).toBe(2)
  expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4)
})
