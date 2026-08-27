import { expect, it } from "vitest"
import { characterReplacement } from "./sliding-window"

it("returns integer square root, floored", () => {
  expect(characterReplacement("ABAB", 2)).toBe(4)
  expect(characterReplacement("AABABBA", 1)).toBe(4)
})
