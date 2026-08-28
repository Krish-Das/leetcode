import { expect, it } from "vitest"
import { minSubArrayLen } from "./sliding-window"

it("returns minimal length of contiguous subarray with sum >= target", () => {
  // LeetCode standard examples
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
  expect(minSubArrayLen(4, [1, 4, 4])).toBe(1)
  expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0)

  // Single element, meets target exactly
  expect(minSubArrayLen(5, [5])).toBe(1)

  // Single element, exceeds target
  expect(minSubArrayLen(3, [5])).toBe(1)

  // Single element, below target
  expect(minSubArrayLen(10, [5])).toBe(0)

  // Whole array needed
  expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5)

  // No subarray meets target
  expect(minSubArrayLen(100, [1, 2, 3, 4, 5])).toBe(0)

  // Target met by full array only, one short otherwise
  expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3)

  // Answer at the very start
  expect(minSubArrayLen(3, [3, 1, 1, 1, 1])).toBe(1)

  // Answer at the very end
  expect(minSubArrayLen(3, [1, 1, 1, 1, 3])).toBe(1)

  // Large single value skips over smaller ones
  expect(minSubArrayLen(6, [1, 1, 1, 1, 1, 100])).toBe(1)

  // Target equal to sum of entire array
  expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5)

  // Target one more than sum of entire array (impossible)
  expect(minSubArrayLen(16, [1, 2, 3, 4, 5])).toBe(0)

  // All same values
  expect(minSubArrayLen(4, [2, 2, 2, 2, 2])).toBe(2)

  // Target of 1, smallest possible subarray (any single element)
  expect(minSubArrayLen(1, [1, 2, 3])).toBe(1)

  // Multiple candidate windows, must pick smallest
  expect(minSubArrayLen(7, [2, 1, 5, 2, 8])).toBe(1)
  expect(minSubArrayLen(8, [3, 4, 1, 1, 6])).toBe(3)

  // Two-element array, needs both
  expect(minSubArrayLen(9, [4, 5])).toBe(2)

  // Two-element array, needs one
  expect(minSubArrayLen(4, [4, 5])).toBe(1)

  // Empty array
  expect(minSubArrayLen(5, [])).toBe(0)

  // Max constraint value elements
  expect(
    minSubArrayLen(1000000000, [100000, 100000, 100000, 100000, 100000]),
  ).toBe(0)

  // Target at max constraint, large array of max values
  expect(minSubArrayLen(100000, Array(10).fill(100000))).toBe(1)

  // Long array, answer near the end (tests window doesn't get stuck)
  expect(
    minSubArrayLen(
      20,
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20],
    ),
  ).toBe(1)

  // Decreasing values with a spike
  expect(minSubArrayLen(50, [10, 2, 3, 50])).toBe(1)

  // Large uniform array, window must span many elements
  expect(minSubArrayLen(1000, Array(1000).fill(1))).toBe(1000)

  // Performance: long array of small values, O(n^2) would be slow, O(n) instant
  expect(minSubArrayLen(500000, Array(100000).fill(5))).toBe(100000)

  // Performance: long array, no valid subarray (must scan whole array)
  expect(minSubArrayLen(100000000, Array(100000).fill(1))).toBe(0)
})
