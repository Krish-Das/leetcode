import { describe, expect, it } from "vitest"
import { insertIntoBST } from "./iterative"

type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

const createNode = (
  val: number,
  left: TreeNode | null = null,
  right: TreeNode | null = null,
): TreeNode => ({ val, left, right })

describe("insertIntoBST", () => {
  it("inserts into an empty tree", () => {
    const root = insertIntoBST(null, 5)

    expect(root).toEqual(createNode(5))
  })

  it("inserts a smaller value to the left of the root", () => {
    const root = createNode(5)

    const result = insertIntoBST(root, 3)

    expect(result).toEqual(createNode(5, createNode(3)))
  })

  it("inserts a larger value to the right of the root", () => {
    const root = createNode(5)

    const result = insertIntoBST(root, 7)

    expect(result).toEqual(createNode(5, null, createNode(7)))
  })

  it("inserts into a complete BST", () => {
    /*
          4
         / \
        2   7
       / \
      1   3
    */
    const root = createNode(
      4,
      createNode(2, createNode(1), createNode(3)),
      createNode(7),
    )

    const result = insertIntoBST(root, 5)

    /*
          4
         / \
        2   7
       / \  /
      1  3 5
    */
    expect(result).toEqual(
      createNode(
        4,
        createNode(2, createNode(1), createNode(3)),
        createNode(7, createNode(5)),
      ),
    )
  })

  it("inserts a value smaller than all existing nodes", () => {
    const root = createNode(5, null, createNode(10))

    const result = insertIntoBST(root, 1)

    expect(result).toEqual(createNode(5, createNode(1), createNode(10)))
  })

  it("inserts a value larger than all existing nodes", () => {
    const root = createNode(5, createNode(2), null)

    const result = insertIntoBST(root, 10)

    expect(result).toEqual(createNode(5, createNode(2), createNode(10)))
  })

  it("inserts duplicate-valued nodes according to BST rule", () => {
    const root = createNode(5, createNode(3), createNode(7))

    const result = insertIntoBST(root, 3)

    /*
          5
         / \
        3   7
         \
          3
    */
    expect(result).toEqual(
      createNode(5, createNode(3, null, createNode(3)), createNode(7)),
    )
  })

  it("returns the same root reference", () => {
    const root = createNode(10)

    const result = insertIntoBST(root, 5)

    expect(result).toBe(root)
  })

  it("inserts into the left subtree of a larger tree", () => {
    const root = createNode(
      10,
      createNode(5, createNode(2), createNode(7)),
      createNode(15),
    )

    const result = insertIntoBST(root, 3)

    expect(result).toEqual(
      createNode(
        10,
        createNode(5, createNode(2, null, createNode(3)), createNode(7)),
        createNode(15),
      ),
    )
  })

  it("inserts into the right subtree of a larger tree", () => {
    const root = createNode(
      10,
      createNode(5),
      createNode(15, createNode(12), createNode(20)),
    )

    const result = insertIntoBST(root, 17)

    expect(result).toEqual(
      createNode(
        10,
        createNode(5),
        createNode(15, createNode(12), createNode(20, createNode(17))),
      ),
    )
  })
})
