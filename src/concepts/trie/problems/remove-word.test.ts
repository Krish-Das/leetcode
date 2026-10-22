import { beforeEach, describe, expect, it } from "vitest"
import { Trie } from ".."
import { removeWord } from "./remove-word"

class TestTrie extends Trie {
  removeWord(word: string): boolean {
    return removeWord(this.root, word)
  }
}

describe("remove", () => {
  let trie: TestTrie

  beforeEach(() => {
    trie = new TestTrie()
  })

  describe("return value", () => {
    it("returns false when removing a word from an empty trie", () => {
      expect(trie.removeWord("apple")).toBe(false)
    })

    it("returns false when the word does not exist", () => {
      trie.insert("apple")

      expect(trie.removeWord("banana")).toBe(false)
    })

    it("returns false when only a prefix of the word exists", () => {
      trie.insert("apple")

      expect(trie.removeWord("app")).toBe(false)
    })

    it("returns false when the word is only a prefix of an existing word", () => {
      trie.insert("application")

      expect(trie.removeWord("apple")).toBe(false)
    })

    it("returns true when the word exists", () => {
      trie.insert("apple")

      expect(trie.removeWord("apple")).toBe(true)
    })

    it("returns false when the same word is removed twice", () => {
      trie.insert("apple")

      expect(trie.removeWord("apple")).toBe(true)
      expect(trie.removeWord("apple")).toBe(false)
    })

    it("returns false when removing a word from an empty string input", () => {
      trie.insert("apple")

      expect(trie.removeWord("")).toBe(false)
      expect(trie.search("apple")).toBe(true)
    })
  })

  describe("removing complete words", () => {
    it("makes the removed word unavailable to search", () => {
      trie.insert("apple")

      expect(trie.removeWord("apple")).toBe(true)
      expect(trie.search("apple")).toBe(false)
    })

    it("preserves unrelated words", () => {
      trie.insert("apple")
      trie.insert("banana")
      trie.insert("cherry")

      expect(trie.removeWord("banana")).toBe(true)

      expect(trie.search("apple")).toBe(true)
      expect(trie.search("banana")).toBe(false)
      expect(trie.search("cherry")).toBe(true)
    })

    it("preserves words that share a prefix with the removed word", () => {
      trie.insert("app")
      trie.insert("apple")
      trie.insert("application")
      trie.insert("apply")

      expect(trie.removeWord("apple")).toBe(true)

      expect(trie.search("app")).toBe(true)
      expect(trie.search("apple")).toBe(false)
      expect(trie.search("application")).toBe(true)
      expect(trie.search("apply")).toBe(true)
    })

    it("preserves a shorter word when removing a longer word", () => {
      trie.insert("app")
      trie.insert("apple")

      expect(trie.removeWord("apple")).toBe(true)

      expect(trie.search("app")).toBe(true)
      expect(trie.search("apple")).toBe(false)
    })

    it("preserves a longer word when removing its prefix word", () => {
      trie.insert("app")
      trie.insert("apple")

      expect(trie.removeWord("app")).toBe(true)

      expect(trie.search("app")).toBe(false)
      expect(trie.search("apple")).toBe(true)
    })

    it("preserves words with shared internal paths", () => {
      trie.insert("cart")
      trie.insert("card")
      trie.insert("care")
      trie.insert("car")

      expect(trie.removeWord("card")).toBe(true)

      expect(trie.search("card")).toBe(false)
      expect(trie.search("cart")).toBe(true)
      expect(trie.search("care")).toBe(true)
      expect(trie.search("car")).toBe(true)
    })
  })

  describe("prefix handling", () => {
    it("preserves a shared prefix after removing one word", () => {
      trie.insert("car")
      trie.insert("cart")
      trie.insert("carbon")

      expect(trie.removeWord("cart")).toBe(true)

      expect(trie.startsWith("car")).toBe(true)
      expect(trie.search("car")).toBe(true)
      expect(trie.search("carbon")).toBe(true)
      expect(trie.search("cart")).toBe(false)
    })

    it("removes the longer-only prefix path when no other word uses it", () => {
      trie.insert("car")
      trie.insert("cart")

      expect(trie.removeWord("cart")).toBe(true)

      expect(trie.search("car")).toBe(true)
      expect(trie.startsWith("car")).toBe(true)
    })

    it("preserves a prefix used by another word after removal", () => {
      trie.insert("team")
      trie.insert("teal")
      trie.insert("tear")

      expect(trie.removeWord("teal")).toBe(true)

      expect(trie.startsWith("tea")).toBe(true)
      expect(trie.search("team")).toBe(true)
      expect(trie.search("tear")).toBe(true)
      expect(trie.search("teal")).toBe(false)
    })

    it("does not change existing prefixes when removal fails", () => {
      trie.insert("apple")
      trie.insert("application")

      expect(trie.removeWord("appetizer")).toBe(false)

      expect(trie.startsWith("app")).toBe(true)
      expect(trie.startsWith("apple")).toBe(true)
      expect(trie.search("apple")).toBe(true)
      expect(trie.search("application")).toBe(true)
    })
  })

  describe("tree shapes", () => {
    it("removes the only word from a single-word trie", () => {
      trie.insert("hello")

      expect(trie.removeWord("hello")).toBe(true)

      expect(trie.search("hello")).toBe(false)
      expect(trie.startsWith("h")).toBe(false)
    })

    it("removes a word from a left-heavy character chain", () => {
      trie.insert("abcdef")
      trie.insert("abc")

      expect(trie.removeWord("abcdef")).toBe(true)

      expect(trie.search("abcdef")).toBe(false)
      expect(trie.search("abc")).toBe(true)
      expect(trie.startsWith("abc")).toBe(true)
    })

    it("removes a word from a branching trie", () => {
      trie.insert("dog")
      trie.insert("dot")
      trie.insert("dove")
      trie.insert("cat")
      trie.insert("car")

      expect(trie.removeWord("dot")).toBe(true)

      expect(trie.search("dog")).toBe(true)
      expect(trie.search("dot")).toBe(false)
      expect(trie.search("dove")).toBe(true)
      expect(trie.search("cat")).toBe(true)
      expect(trie.search("car")).toBe(true)
    })

    it("allows remaining words to be removed after pruning a branch", () => {
      trie.insert("stone")
      trie.insert("stove")
      trie.insert("story")

      expect(trie.removeWord("stone")).toBe(true)
      expect(trie.search("stove")).toBe(true)
      expect(trie.search("story")).toBe(true)

      expect(trie.removeWord("stove")).toBe(true)
      expect(trie.search("stove")).toBe(false)
      expect(trie.search("story")).toBe(true)

      expect(trie.removeWord("story")).toBe(true)
      expect(trie.search("story")).toBe(false)
    })
  })

  describe("duplicate insertions", () => {
    it("removes a word inserted more than once", () => {
      trie.insert("apple")
      trie.insert("apple")
      trie.insert("apple")

      expect(trie.removeWord("apple")).toBe(true)
      expect(trie.search("apple")).toBe(false)
      expect(trie.removeWord("apple")).toBe(false)
    })

    it("preserves other words when a duplicate word is removed", () => {
      trie.insert("apple")
      trie.insert("apple")
      trie.insert("application")

      expect(trie.removeWord("apple")).toBe(true)

      expect(trie.search("apple")).toBe(false)
      expect(trie.search("application")).toBe(true)
    })
  })

  describe("edge cases", () => {
    it("removes a one-character word", () => {
      trie.insert("a")
      trie.insert("apple")

      expect(trie.removeWord("a")).toBe(true)

      expect(trie.search("a")).toBe(false)
      expect(trie.search("apple")).toBe(true)
    })

    it("removes a word containing repeated characters", () => {
      trie.insert("letter")
      trie.insert("lettuce")

      expect(trie.removeWord("letter")).toBe(true)

      expect(trie.search("letter")).toBe(false)
      expect(trie.search("lettuce")).toBe(true)
    })

    it("handles case-sensitive words independently", () => {
      trie.insert("Apple")
      trie.insert("apple")

      expect(trie.removeWord("Apple")).toBe(true)

      expect(trie.search("Apple")).toBe(false)
      expect(trie.search("apple")).toBe(true)
    })

    it("removes words containing non-ASCII characters", () => {
      trie.insert("café")
      trie.insert("caféine")

      expect(trie.removeWord("café")).toBe(true)

      expect(trie.search("café")).toBe(false)
      expect(trie.search("caféine")).toBe(true)
    })

    it("does not affect the trie when removal fails repeatedly", () => {
      trie.insert("hello")
      trie.insert("help")

      expect(trie.removeWord("helmet")).toBe(false)
      expect(trie.removeWord("helmet")).toBe(false)

      expect(trie.search("hello")).toBe(true)
      expect(trie.search("help")).toBe(true)
    })
  })
})
