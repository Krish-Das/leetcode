import { describe, expect, it } from "vitest"
import { countPrimes } from "./brute-force"

describe("countPrimes", () => {
  describe("inputs with no primes", () => {
    it.each([0, 1, 2])("returns 0 for n = %i", (n) => {
      expect(countPrimes(n)).toBe(0)
    })
  })

  describe("upper bound is exclusive", () => {
    it("does not count n when n is prime", () => {
      expect(countPrimes(7)).toBe(3) // 2, 3, 5
    })

    it("counts a prime that is n - 1", () => {
      expect(countPrimes(8)).toBe(4) // 2, 3, 5, 7
    })

    it("returns 1 for n = 3 (only 2)", () => {
      expect(countPrimes(3)).toBe(1)
    })
  })

  describe("small inputs", () => {
    it.each([
      [4, 2], // 2, 3
      [5, 2], // 2, 3
      [6, 3], // 2, 3, 5
      [10, 4], // 2, 3, 5, 7
      [20, 8], // 2, 3, 5, 7, 11, 13, 17, 19
      [30, 10],
      [50, 15],
    ])("countPrimes(%i) = %i", (n, expected) => {
      expect(countPrimes(n)).toBe(expected)
    })
  })

  describe("composite numbers", () => {
    it("does not count perfect squares of primes", () => {
      // 4, 9, 25, 49 are composite
      expect(countPrimes(50)).toBe(15)
    })

    it("counts 23 for n = 24, because 23 is prime", () => {
      expect(countPrimes(23)).toBe(8)
      expect(countPrimes(24)).toBe(9)
    })

    it("gives the same count for n = 24 and n = 25 (24 is composite)", () => {
      expect(countPrimes(25)).toBe(countPrimes(24))
    })
  })

  describe("larger inputs", () => {
    it.each([
      [100, 25],
      [1000, 168],
      [10000, 1229],
    ])("countPrimes(%i) = %i", (n, expected) => {
      expect(countPrimes(n)).toBe(expected)
    })
  })

  describe("properties", () => {
    it("never decreases as n grows", () => {
      let previous = 0
      for (let n = 0; n <= 200; n++) {
        const current = countPrimes(n)
        expect(current).toBeGreaterThanOrEqual(previous)
        previous = current
      }
    })

    it("increases by 1 only when n - 1 is prime", () => {
      // countPrimes(n + 1) - countPrimes(n) = 1 if n is prime, else 0
      expect(countPrimes(12) - countPrimes(11)).toBe(1) // 11 is prime
      expect(countPrimes(13) - countPrimes(12)).toBe(0) // 12 is composite
    })
  })
})
