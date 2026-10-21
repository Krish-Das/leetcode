import { describe, expect, it } from "vitest"

import { Trie } from "./array"

describe("Trie", () => {
  describe("initial state", () => {
    it("returns false when searching an empty trie", () => {
      const trie = new Trie()

      expect(trie.search("apple")).toBe(false)
      expect(trie.search("")).toBe(false)
    })

    it("returns false for non-empty prefixes in an empty trie", () => {
      const trie = new Trie()

      expect(trie.startsWith("a")).toBe(false)
      expect(trie.startsWith("apple")).toBe(false)
    })

    it("returns true for an empty prefix", () => {
      const trie = new Trie()

      // Every string starts with the empty prefix.
      expect(trie.startsWith("")).toBe(true)
    })
  })

  describe("insert and search", () => {
    it("finds an inserted word", () => {
      const trie = new Trie()

      trie.insert("apple")

      expect(trie.search("apple")).toBe(true)
    })

    it("does not treat a prefix as a complete word", () => {
      const trie = new Trie()

      trie.insert("apple")

      expect(trie.search("app")).toBe(false)
      expect(trie.search("appl")).toBe(false)
    })

    it("does not match a longer word when only a shorter word was inserted", () => {
      const trie = new Trie()

      trie.insert("app")

      expect(trie.search("apple")).toBe(false)
      expect(trie.search("apples")).toBe(false)
    })

    it("distinguishes words that differ by one character", () => {
      const trie = new Trie()

      trie.insert("cat")

      expect(trie.search("cat")).toBe(true)
      expect(trie.search("car")).toBe(false)
      expect(trie.search("cab")).toBe(false)
      expect(trie.search("bat")).toBe(false)
    })

    it("handles a single-character word", () => {
      const trie = new Trie()

      trie.insert("a")

      expect(trie.search("a")).toBe(true)
      expect(trie.search("b")).toBe(false)
    })

    it("handles words that share a common prefix", () => {
      const trie = new Trie()

      trie.insert("car")
      trie.insert("card")
      trie.insert("care")
      trie.insert("careful")

      expect(trie.search("car")).toBe(true)
      expect(trie.search("card")).toBe(true)
      expect(trie.search("care")).toBe(true)
      expect(trie.search("careful")).toBe(true)
      expect(trie.search("caref")).toBe(false)
      expect(trie.search("cars")).toBe(false)
    })

    it("supports inserting a shorter word after a longer word", () => {
      const trie = new Trie()

      trie.insert("testing")
      trie.insert("test")

      expect(trie.search("testing")).toBe(true)
      expect(trie.search("test")).toBe(true)
      expect(trie.search("teste")).toBe(false)
    })

    it("supports inserting a longer word after a shorter word", () => {
      const trie = new Trie()

      trie.insert("test")
      trie.insert("testing")

      expect(trie.search("test")).toBe(true)
      expect(trie.search("testing")).toBe(true)
      expect(trie.search("teste")).toBe(false)
    })

    it("does not find words that were never inserted", () => {
      const trie = new Trie()

      trie.insert("hello")
      trie.insert("world")

      expect(trie.search("hell")).toBe(false)
      expect(trie.search("word")).toBe(false)
      expect(trie.search("help")).toBe(false)
      expect(trie.search("worlds")).toBe(false)
    })
  })

  describe("startsWith", () => {
    it("returns true for a prefix of an inserted word", () => {
      const trie = new Trie()

      trie.insert("apple")

      expect(trie.startsWith("a")).toBe(true)
      expect(trie.startsWith("ap")).toBe(true)
      expect(trie.startsWith("app")).toBe(true)
      expect(trie.startsWith("appl")).toBe(true)
      expect(trie.startsWith("apple")).toBe(true)
    })

    it("returns true for a prefix that is not a complete word", () => {
      const trie = new Trie()

      trie.insert("application")

      expect(trie.startsWith("app")).toBe(true)
      expect(trie.search("app")).toBe(false)
    })

    it("returns false when the prefix does not exist", () => {
      const trie = new Trie()

      trie.insert("apple")

      expect(trie.startsWith("b")).toBe(false)
      expect(trie.startsWith("apt")).toBe(false)
      expect(trie.startsWith("apples")).toBe(false)
    })

    it("returns true for a word inserted as a complete word", () => {
      const trie = new Trie()

      trie.insert("hello")

      expect(trie.startsWith("hello")).toBe(true)
    })

    it("continues matching shared prefixes across multiple words", () => {
      const trie = new Trie()

      trie.insert("flower")
      trie.insert("flow")
      trie.insert("flight")

      expect(trie.startsWith("f")).toBe(true)
      expect(trie.startsWith("fl")).toBe(true)
      expect(trie.startsWith("flo")).toBe(true)
      expect(trie.startsWith("flig")).toBe(true)
      expect(trie.startsWith("fliw")).toBe(false)
    })
  })

  describe("duplicate insertions", () => {
    it("preserves search results when the same word is inserted repeatedly", () => {
      const trie = new Trie()

      trie.insert("apple")
      trie.insert("apple")
      trie.insert("apple")

      expect(trie.search("apple")).toBe(true)
      expect(trie.search("app")).toBe(false)
      expect(trie.startsWith("appl")).toBe(true)
    })

    it("preserves other words when a shared-prefix word is inserted repeatedly", () => {
      const trie = new Trie()

      trie.insert("app")
      trie.insert("apple")
      trie.insert("app")

      expect(trie.search("app")).toBe(true)
      expect(trie.search("apple")).toBe(true)
      expect(trie.startsWith("ap")).toBe(true)
    })
  })

  describe("independent Trie instances", () => {
    it("does not share inserted words between instances", () => {
      const first = new Trie()
      const second = new Trie()

      first.insert("apple")

      expect(first.search("apple")).toBe(true)
      expect(second.search("apple")).toBe(false)
      expect(second.startsWith("app")).toBe(false)
    })

    it("allows instances to contain different words", () => {
      const first = new Trie()
      const second = new Trie()

      first.insert("cat")
      second.insert("dog")

      expect(first.search("cat")).toBe(true)
      expect(first.search("dog")).toBe(false)
      expect(second.search("dog")).toBe(true)
      expect(second.search("cat")).toBe(false)
    })
  })

  describe("case insensitivity and character boundaries", () => {
    it("treats uppercase and lowercase letters as distinct", () => {
      const trie = new Trie()

      trie.insert("Apple")

      expect(trie.search("Apple")).toBe(true)
      expect(trie.search("apple")).toBe(true)
      expect(trie.startsWith("App")).toBe(true)
      expect(trie.startsWith("app")).toBe(true)
    })

    it("supports strings containing punctuation", () => {
      const trie = new Trie()

      trie.insert("hello-world")
      trie.insert("user@example.com")

      expect(trie.search("hello-world")).toBe(true)
      expect(trie.startsWith("hello-")).toBe(true)
      expect(trie.search("user@example.com")).toBe(true)
      expect(trie.startsWith("user@")).toBe(true)
      expect(trie.search("hello")).toBe(false)
    })
  })

  describe("empty strings", () => {
    it("returns false when searching for an empty word", () => {
      const trie = new Trie()

      expect(trie.search("")).toBe(false)
    })

    it("returns true for an empty prefix", () => {
      const trie = new Trie()

      expect(trie.startsWith("")).toBe(true)
    })

    it("does not affect other words when searching for an empty string", () => {
      const trie = new Trie()

      trie.insert("apple")

      expect(trie.search("")).toBe(false)
      expect(trie.search("apple")).toBe(true)
      expect(trie.search("app")).toBe(false)
      expect(trie.startsWith("")).toBe(true)
    })
  })
})
