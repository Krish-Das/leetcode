import { describe, expect, it } from "vitest"

import { Solution } from "./delimiter-encoding"

describe("271. Encode and Decode Strings (delimiter)", () => {
  const solution = new Solution()

  it("round-trips the LeetCode example", () => {
    const input = ["lint", "code", "love", "you"]

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("round-trips strings containing the delimiter character", () => {
    const input = ["hello#world", "foo#bar#baz", "qux"]

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("round-trips an empty array", () => {
    const input: string[] = []

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("round-trips a single empty string", () => {
    const input = [""]

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("round-trips multiple empty strings", () => {
    const input = ["", "", ""]

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("round-trips strings with leading and trailing delimiters", () => {
    const input = ["#leading", "trailing#", "#both#"]

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("round-trips unicode and special characters", () => {
    const input = ["hello 👋", "世界", "🚀🚀🚀", "tab\tnew\nline"]

    expect(solution.decode(solution.encode(input))).toEqual(input)
  })

  it("produces a stable encoding", () => {
    const input = ["a", "bb", "ccc"]

    expect(solution.encode(input)).toBe(solution.encode(input))
  })
})
