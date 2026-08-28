import { expect, it } from "vitest"
import { lengthOfLongestSubstring } from "./sliding-window"

it("returns length of longest substring without repeating characters", () => {
  // LeetCode standard examples
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3)

  // Empty string
  expect(lengthOfLongestSubstring("")).toBe(0)

  // Single character
  expect(lengthOfLongestSubstring("a")).toBe(1)

  // Two same characters
  expect(lengthOfLongestSubstring("aa")).toBe(1)

  // Two different characters
  expect(lengthOfLongestSubstring("ab")).toBe(2)

  // All unique characters
  expect(lengthOfLongestSubstring("abcdef")).toBe(6)

  // Repeat at the end
  expect(lengthOfLongestSubstring("abba")).toBe(2)

  // Repeat at the start
  expect(lengthOfLongestSubstring("aab")).toBe(2)

  // Longest substring in the middle
  expect(lengthOfLongestSubstring("dvdf")).toBe(3)

  // Longest substring in the middle, different pattern
  expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5)

  // Repeating pair
  expect(lengthOfLongestSubstring("abab")).toBe(2)

  // Three same characters
  expect(lengthOfLongestSubstring("aaa")).toBe(1)

  // Longest substring at the very end
  expect(lengthOfLongestSubstring("abcbdef")).toBe(5)

  // Character repeats far back (tests sliding window pointer jump)
  expect(lengthOfLongestSubstring("abcadefg")).toBe(7)

  // Spaces count as characters
  expect(lengthOfLongestSubstring("a b c")).toBe(3)
  expect(lengthOfLongestSubstring("   ")).toBe(1)

  // Digits
  expect(lengthOfLongestSubstring("1234512345")).toBe(5)

  // Mixed case: 'A' and 'a' are different characters
  expect(lengthOfLongestSubstring("aA")).toBe(2)
  expect(lengthOfLongestSubstring("AaAaAa")).toBe(2)

  // Special characters
  expect(lengthOfLongestSubstring("!@#!@#")).toBe(3)

  // Unicode characters
  expect(lengthOfLongestSubstring("日本語日本語")).toBe(3)

  // Long string with no repeats (length near constraint boundary)
  expect(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")).toBe(26)

  // Long string, all same character
  expect(lengthOfLongestSubstring("a".repeat(1000))).toBe(1)

  // Alternating two chars, long
  expect(lengthOfLongestSubstring("ab".repeat(500))).toBe(2)

  // Palindrome-like structure
  expect(lengthOfLongestSubstring("abccba")).toBe(3)

  // Single repeat far into an otherwise unique run
  expect(lengthOfLongestSubstring("abcdefga")).toBe(7)
})
