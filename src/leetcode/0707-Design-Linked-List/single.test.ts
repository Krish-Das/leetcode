import { describe, expect, it } from "vitest"
import { MyLinkedList } from "./single"

describe("707. Design Linked List (single)", () => {
  it("operates correctly through a sequence of calls", () => {
    const myLinkedList = new MyLinkedList()
    myLinkedList.addAtHead(1)
    myLinkedList.addAtTail(3)
    myLinkedList.addAtIndex(1, 2)
    expect(myLinkedList.get(1)).toBe(2)
    myLinkedList.deleteAtIndex(1)
    expect(myLinkedList.get(1)).toBe(3)
  })
})
