import { expect, it } from "vitest"
import { productExceptSelf } from "./prefix-suffix-products"

it("returns product array except self", () => {
  const normalizeZero = (arr: number[]) => arr.map((n) => (n === 0 ? 0 : n))
  // LeetCode examples
  expect(normalizeZero(productExceptSelf([1, 2, 3, 4]))).toEqual([24, 12, 8, 6])
  expect(normalizeZero(productExceptSelf([-1, 1, 0, -3, 3]))).toEqual([
    0, 0, 9, 0, 0,
  ])

  // minimum array length
  expect(normalizeZero(productExceptSelf([0, 0]))).toEqual([0, 0])
  expect(normalizeZero(productExceptSelf([3, 5]))).toEqual([5, 3])

  // two or more zeros -> all zeros
  expect(normalizeZero(productExceptSelf([0, 4, 0, 2]))).toEqual([0, 0, 0, 0])

  // exactly one zero -> isolates product to that index
  expect(normalizeZero(productExceptSelf([2, 0, 5, 4]))).toEqual([0, 40, 0, 0])

  // all negative numbers
  expect(normalizeZero(productExceptSelf([-1, -2, -3, -4]))).toEqual([
    -24, -12, -8, -6,
  ])

  // all ones
  expect(normalizeZero(productExceptSelf([1, 1, 1, 1]))).toEqual([1, 1, 1, 1])

  // near boundary of value range (-30 <= nums[i] <= 30)
  expect(normalizeZero(productExceptSelf([30, 30, 30, 30]))).toEqual([
    27000, 27000, 27000, 27000,
  ])
})
