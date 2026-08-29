import { expect, it } from "vitest"
import { maxTurbulenceSize } from "./sliding-window"

it("returns the length of a maximum size turbulent subarray", () => {
  expect(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])).toBe(5)
  expect(maxTurbulenceSize([4, 8, 12, 16])).toBe(2)
  expect(maxTurbulenceSize([100])).toBe(1)
  expect(maxTurbulenceSize([100, 100, 100])).toBe(1)
})
