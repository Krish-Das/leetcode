import { expect, it } from "vitest"
import { mySqrt } from "./linear-scan"

it("returns integer square root, floored", () => {
  // Boundary: zero and one
  expect(mySqrt(0)).toBe(0)
  expect(mySqrt(1)).toBe(1)

  // Small non-perfect squares
  expect(mySqrt(2)).toBe(1)
  expect(mySqrt(3)).toBe(1)

  // Small perfect squares
  expect(mySqrt(4)).toBe(2)
  expect(mySqrt(9)).toBe(3)
  expect(mySqrt(16)).toBe(4)

  // Values just below a perfect square
  expect(mySqrt(8)).toBe(2)
  expect(mySqrt(15)).toBe(3)
  expect(mySqrt(24)).toBe(4)

  // Values just above a perfect square
  expect(mySqrt(5)).toBe(2)
  expect(mySqrt(10)).toBe(3)
  expect(mySqrt(17)).toBe(4)

  // Mid-range values
  expect(mySqrt(100)).toBe(10)
  expect(mySqrt(99)).toBe(9)
  expect(mySqrt(1000)).toBe(31)

  // Large values near 32-bit signed int limit (LeetCode constraint: 0 <= x <= 2^31 - 1)
  expect(mySqrt(2147395599)).toBe(46339) // largest x where result stays 46339
  expect(mySqrt(2147395600)).toBe(46340) // perfect square: 46340^2
  expect(mySqrt(2147483647)).toBe(46340) // max int32 input
})
