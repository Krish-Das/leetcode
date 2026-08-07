class Node<T> {
  data: T
  next: Node<T> | null
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList<T> {
  size: number
  private head: Node<T> | null
  constructor() {
    this.head = null
    this.size = 0
  }

  toArray(): T[] {
    const array = []
    let pointer = this.head

    while (pointer !== null) {
      array.push(pointer.data)
      pointer = pointer.next
    }

    return array
  }

  /**
   * @todo Handle negative indices (e.g., -1 for last element)
   */
  private getNodeAt(index: number): Node<T> {
    if (!this.head) throw new RangeError("Index out of bounds: list is empty")
    let pointer = this.head

    for (let i = 0; i < index; i++) {
      if (!pointer.next)
        throw new RangeError(
          `Index out of bounds: ${index} exceeds list length`,
        )

      pointer = pointer.next
    }

    return pointer
  }

  getAt(index: number): T {
    const nodeAtIndex = this.getNodeAt(index)
    return nodeAtIndex.data
  }

  insertHead(data: T): this {
    const prevHead = this.head
    const newHead = new Node(data, prevHead)
    this.head = newHead
    this.size++
    return this
  }

  insertTail(data: T): this {
    const newNode = new Node(data)
    let pointer = this.head

    if (!pointer) {
      this.head = newNode
      this.size++
      return this
    }

    while (pointer.next !== null) {
      pointer = pointer.next
    }
    pointer.next = newNode
    this.size++
    return this
  }

  /**
   * @todo Handle negative indices (e.g., -1 for last element)
   */
  insertAt(index: number, data: T): this {
    if (index === 0) {
      const newNode = new Node(data, this.head)
      this.head = newNode
      this.size++
      return this
    }

    const nodeAtIndex = this.getNodeAt(index - 1)
    const newNode = new Node(data, nodeAtIndex.next)
    nodeAtIndex.next = newNode
    this.size++
    return this
  }

  /**
   * @todo Handle negative indices (e.g., -1 for last element)
   */
  deleteAt(index: number): this {
    let prevNode: Node<T> | null = null
    let pointer = this.head

    if (pointer === null)
      throw new RangeError("Index out of bounds: list is empty")

    if (index === 0) {
      this.head = pointer.next
      this.size--
      return this
    }

    for (let i = 0; i < index; i++) {
      if (!pointer.next) throw new RangeError("Index is out of bounds")
      prevNode = pointer
      pointer = pointer.next
    }

    if (!prevNode)
      throw new Error(
        "Invariant violated: prevNode should not be null after loop",
      )
    prevNode.next = pointer.next
    pointer.next = null

    this.size--
    return this
  }

  clear(): this {
    this.head = null
    this.size = 0
    return this
  }

  indexOf(data: T): number {
    let pointer = this.head
    let index = 0

    while (pointer !== null) {
      if (pointer.data === data) return index
      pointer = pointer.next
      index++
    }
    return -1
  }

  reverse(): this {
    let prev = null
    let current = this.head

    while (current !== null) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev

    return this
  }

  /**
   * @note uses Floyd's cycle detection or tortoise and hare algorithm
   */
  getMiddle(): T | undefined {
    let fast = this.head
    let slow = this.head

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      // biome-ignore lint/style/noNonNullAssertion: slow can't be null here since fast reaches the end first
      slow = slow!.next
    }
    return slow?.data
  }
}

const list = new LinkedList<string>()
const res = list
  .insertHead("B")
  .insertHead("A")
  .insertTail("D")
  .insertAt(2, "C")
  .insertAt(2, "E")
  .toArray()
console.log(res)
console.log(list.getMiddle())
