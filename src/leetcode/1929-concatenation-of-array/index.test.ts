import { describe, expect, it } from "vitest"
import { getConcatenation as concat } from "./concat"
import { getConcatenation as singlePass } from "./single-pass"
import { getConcatenation as spread } from "./spread"

describe("returns concatinated array", () => {
  it("concat approach", () => {
    expect(concat([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1])
    expect(concat([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1])
  })

  it("one-pass approach", () => {
    expect(singlePass([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1])
    expect(singlePass([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1])
  })

  it("spread approach", () => {
    expect(spread([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1])
    expect(spread([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1])
  })
})
