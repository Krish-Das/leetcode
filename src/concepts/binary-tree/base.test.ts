import { expect, it } from "vitest"
import { Tree } from "./base"

const compareNumbers = (value: number, nodeValue: number) => value - nodeValue
const compareStrings = (value: string, nodeValue: string) =>
  value.localeCompare(nodeValue)

it("inserts values on the correct side and skips duplicates", () => {
  const tree = new Tree(compareNumbers)

  expect(tree.insert(3)).toBe(tree)
  tree.insert(8)
  tree.insert(1)
  tree.insert(8)

  expect(tree.root?.value).toBe(3)
  expect(tree.root?.left?.value).toBe(1)
  expect(tree.root?.right?.value).toBe(8)
  expect(tree.root?.right?.right).toBeNull()
})

it("traverses existing branches to insert nested values", () => {
  const tree = new Tree(compareNumbers)

  for (const value of [5, 3, 7, 2, 4, 6, 8]) {
    tree.insert(value)
  }

  expect(tree.root?.left?.left?.value).toBe(2)
  expect(tree.root?.left?.right?.value).toBe(4)
  expect(tree.root?.right?.left?.value).toBe(6)
  expect(tree.root?.right?.right?.value).toBe(8)
})

it("inserts strings using the injected comparator", () => {
  const tree = new Tree(compareStrings)

  for (const value of ["e", "a", "b", "f", "h", "b"]) {
    tree.insert(value)
  }

  // [ "e", "a", "b", "f", "h" ]
  //     e
  //    / \
  //   a   f
  //    \   \
  //     b   h
  expect(tree.root?.value).toBe("e")
  expect(tree.root?.left?.value).toBe("a")
  expect(tree.root?.left?.right?.value).toBe("b")
  expect(tree.root?.right?.value).toBe("f")
  expect(tree.root?.right?.right?.value).toBe("h")
  expect(tree.root?.left?.right?.right).toBeNull()
})
