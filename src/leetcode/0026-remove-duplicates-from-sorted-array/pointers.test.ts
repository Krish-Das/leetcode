import { describe, expect, it } from "vitest"
import { removeDuplicates } from "./pointers"

describe("26. Remove Duplicates from Sorted Array (pointers)", () => {
  const cases: { input: number[]; expectedNums: number[] }[] = [
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      expectedNums: [0, 1, 2, 3, 4],
    },
    {
      input: [1, 1, 2],
      expectedNums: [1, 2],
    },
  ]

  cases.forEach(({ input, expectedNums }) => {
    it(`tests [${input}]`, () => {
      const k = removeDuplicates(input)

      expect(k).toBe(expectedNums.length)
      for (let i = 0; i < k; i++) {
        expect(input[i]).toBe(expectedNums[i])
      }
    })
  })
})
