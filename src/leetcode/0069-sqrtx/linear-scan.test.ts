import { expect, it } from "vitest"
import { mySqrt } from "./linear-scan"

it("returns integer square root, floored", () => {
  expect(mySqrt(0)).toBe(0)
  expect(mySqrt(1)).toBe(1)
  expect(mySqrt(2)).toBe(1)
  expect(mySqrt(4)).toBe(2)
  expect(mySqrt(8)).toBe(2)
  expect(mySqrt(15)).toBe(3)
  expect(mySqrt(16)).toBe(4)
})
