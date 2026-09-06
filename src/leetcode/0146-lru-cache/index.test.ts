import { describe, expect, it } from "vitest"
import { LRUCache } from "."

describe("LRUCache", () => {
  describe("capacity 2", () => {
    it("evicts least recently used when inserting 3 after put(1,0), put(2,2)", () => {
      const cache = new LRUCache(2)

      const results = [
        undefined,
        cache.put(1, 0),
        cache.put(2, 2),
        cache.get(1),
        cache.put(3, 3),
        cache.get(2),
        cache.put(4, 4),
        cache.get(1),
        cache.get(3),
        cache.get(4),
      ]

      const expected = [
        undefined,
        undefined,
        undefined,
        0,
        undefined,
        -1,
        undefined,
        -1,
        3,
        4,
      ]
      expect(results).toEqual(expected)
    })

    it("evicts least recently used when inserting 3 after put(1,1), put(2,2)", () => {
      const cache = new LRUCache(2)

      const results = [
        undefined,
        cache.put(1, 1),
        cache.put(2, 2),
        cache.get(1),
        cache.put(3, 3),
        cache.get(2),
        cache.put(4, 4),
        cache.get(1),
        cache.get(3),
        cache.get(4),
      ]

      const expected = [
        undefined,
        undefined,
        undefined,
        1,
        undefined,
        -1,
        undefined,
        -1,
        3,
        4,
      ]
      expect(results).toEqual(expected)
    })
  })
})