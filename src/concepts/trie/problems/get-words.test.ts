import { beforeEach, describe, expect, it } from "vitest"
import { Trie } from ".."
import { getWords } from "./get-words"
import { removeWord } from "./remove-word"

class TestTrie extends Trie {
  getWords(): string[] {
    return getWords(this.root)
  }
  removeWord(word: string): boolean {
    return removeWord(this.root, word)
  }
}

describe("getWords", () => {
  let trie: TestTrie

  beforeEach(() => {
    trie = new TestTrie()
  })

  // Compare words without requiring a specific traversal order.
  const expectWords = (expected: string[]) => {
    expect([...trie.getWords()].sort()).toEqual([...expected].sort())
  }

  describe("basic behavior", () => {
    it("returns an empty array for an empty trie", () => {
      expect(trie.getWords()).toEqual([])
    })

    it("returns the only word in a single-word trie", () => {
      trie.insert("apple")

      expectWords(["apple"])
    })

    it("returns all inserted words", () => {
      trie.insert("apple")
      trie.insert("banana")
      trie.insert("cherry")

      expectWords(["apple", "banana", "cherry"])
    })

    it("returns an array of strings", () => {
      trie.insert("apple")
      trie.insert("banana")

      const words = trie.getWords()

      expect(Array.isArray(words)).toBe(true)
      expect(words.every((word) => typeof word === "string")).toBe(true)
    })

    it("returns a new array on each call", () => {
      trie.insert("apple")

      const first = trie.getWords()
      const second = trie.getWords()

      expect(first).not.toBe(second)
      expect(first).toEqual(second)
    })
  })

  describe("prefix handling", () => {
    it("does not include prefixes that are not complete words", () => {
      trie.insert("application")

      expectWords(["application"])
    })

    it("includes a prefix only when it is also a complete word", () => {
      trie.insert("app")
      trie.insert("apple")
      trie.insert("application")

      expectWords(["app", "apple", "application"])
    })

    it("returns words that share the same prefix", () => {
      trie.insert("car")
      trie.insert("card")
      trie.insert("care")
      trie.insert("careful")
      trie.insert("cart")

      expectWords(["car", "card", "care", "careful", "cart"])
    })

    it("handles words where one word is a prefix of several others", () => {
      trie.insert("a")
      trie.insert("an")
      trie.insert("ant")
      trie.insert("ante")
      trie.insert("antenna")

      expectWords(["a", "an", "ant", "ante", "antenna"])
    })

    it("does not return incomplete paths in a branching trie", () => {
      trie.insert("dog")
      trie.insert("dot")
      trie.insert("dove")
      trie.insert("door")

      expectWords(["dog", "dot", "dove", "door"])
    })
  })

  describe("tree shapes", () => {
    it("returns words from a single-character branch", () => {
      trie.insert("a")
      trie.insert("b")
      trie.insert("c")

      expectWords(["a", "b", "c"])
    })

    it("returns words from a long character chain", () => {
      trie.insert("abcdef")
      trie.insert("abc")
      trie.insert("abcd")
      trie.insert("ab")

      expectWords(["ab", "abc", "abcd", "abcdef"])
    })

    it("returns words from multiple branches", () => {
      trie.insert("apple")
      trie.insert("application")
      trie.insert("banana")
      trie.insert("band")
      trie.insert("bandana")
      trie.insert("cat")
      trie.insert("car")

      expectWords([
        "apple",
        "application",
        "banana",
        "band",
        "bandana",
        "cat",
        "car",
      ])
    })

    it("returns words regardless of insertion order", () => {
      trie.insert("zebra")
      trie.insert("apple")
      trie.insert("mango")
      trie.insert("banana")

      expectWords(["apple", "banana", "mango", "zebra"])
    })
  })

  describe("duplicate insertions", () => {
    it("returns a word only once when it is inserted multiple times", () => {
      trie.insert("apple")
      trie.insert("apple")
      trie.insert("apple")

      expectWords(["apple"])
    })

    it("does not duplicate words when shared prefixes are inserted repeatedly", () => {
      trie.insert("app")
      trie.insert("apple")
      trie.insert("app")
      trie.insert("application")
      trie.insert("apple")

      expectWords(["app", "apple", "application"])
    })

    it("returns distinct words that differ by one character", () => {
      trie.insert("cat")
      trie.insert("car")
      trie.insert("cap")
      trie.insert("can")

      expectWords(["cat", "car", "cap", "can"])
    })
  })

  describe("state changes", () => {
    it("reflects words inserted after an earlier call", () => {
      trie.insert("apple")

      expectWords(["apple"])

      trie.insert("banana")

      expectWords(["apple", "banana"])
    })

    it("does not change previously returned arrays after insertion", () => {
      trie.insert("apple")

      const previousWords = trie.getWords()

      trie.insert("banana")

      expect(previousWords).toEqual(["apple"])
      expectWords(["apple", "banana"])
    })

    it("excludes a word after it is removed", () => {
      trie.insert("apple")
      trie.insert("banana")
      trie.insert("cherry")

      expect(trie.removeWord("banana")).toBe(true)

      expectWords(["apple", "cherry"])
    })

    it("preserves other words when a shared-prefix word is removed", () => {
      trie.insert("app")
      trie.insert("apple")
      trie.insert("application")
      trie.insert("apply")

      expect(trie.removeWord("apple")).toBe(true)

      expectWords(["app", "application", "apply"])
    })

    it("returns an empty array after all words are removed", () => {
      trie.insert("apple")
      trie.insert("banana")

      expect(trie.removeWord("apple")).toBe(true)
      expect(trie.removeWord("banana")).toBe(true)

      expect(trie.getWords()).toEqual([])
    })

    it("does not change the returned words after an unsuccessful removal", () => {
      trie.insert("apple")
      trie.insert("banana")

      expect(trie.removeWord("cherry")).toBe(false)

      expectWords(["apple", "banana"])
    })
  })

  describe("edge cases", () => {
    it("handles words containing repeated characters", () => {
      trie.insert("letter")
      trie.insert("better")
      trie.insert("committee")

      expectWords(["letter", "better", "committee"])
    })

    it("treats uppercase and lowercase words as distinct", () => {
      trie.insert("Apple")
      trie.insert("apple")
      trie.insert("APPLE")

      expectWords(["Apple", "apple", "APPLE"])
    })

    it("handles words containing non-ASCII characters", () => {
      trie.insert("café")
      trie.insert("naïve")
      trie.insert("東京")

      expectWords(["café", "naïve", "東京"])
    })

    it("handles words containing numbers and punctuation", () => {
      trie.insert("hello-world")
      trie.insert("hello123")
      trie.insert("hello!")

      expectWords(["hello-world", "hello123", "hello!"])
    })

    it("returns consistent results across repeated calls", () => {
      trie.insert("apple")
      trie.insert("application")
      trie.insert("banana")

      const first = trie.getWords()
      const second = trie.getWords()
      const third = trie.getWords()

      expect(second).toEqual(first)
      expect(third).toEqual(first)
    })
  })
})
