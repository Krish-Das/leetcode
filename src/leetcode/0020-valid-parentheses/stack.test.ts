import { expect, it } from "vitest"
import { isValid } from "./stack"

it("validates correctly nested and ordered brackets", () => {
  expect(isValid("()")).toBe(true)
  expect(isValid("()[]{}")).toBe(true)
  expect(isValid("(]")).toBe(false)
  expect(isValid("([])")).toBe(true)
  expect(isValid("([)]")).toBe(false)
})
