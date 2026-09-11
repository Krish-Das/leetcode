/** biome-ignore-all lint/style/noNonNullAssertion: Fix later */
type TLink<T> = TNode<T> | null
type TNode<T> = {
  val: T
  next: TLink<T>
}
class Node<T> {
  val: TNode<T>["val"]
  next: TNode<T>["next"]

  constructor(val: TNode<T>["val"], next: TNode<T>["next"]) {
    this.val = val
    this.next = next
  }
}

class MyLinkedList<T> {
  private head: TLink<T>

  constructor() {
    this.head = null
  }

  toArray(): T[] {
    if (this.head === null) return []
    let curr: TLink<T> = this.head
    const res = []
    while (curr !== null) {
      res.push(curr.val)
      curr = curr.next
    }
    return res
  }

  get(index: number): T | -1 {
    for (let idx = 0, curr = this.head; idx <= index && curr; idx++) {
      if (!curr) return -1
      if (idx === index) return curr.val
      curr = curr.next
    }
    return -1 // throw invariant
  }

  addAtHead(val: T): this {
    const newHead = new Node(val, this.head)
    this.head = newHead
    return this
  }

  addAtTail(val: T): this {
    const newNode = new Node(val, null)
    let curr = this.head
    if (!curr) {
      this.head = newNode
      return this
    }
    while (curr.next !== null) curr = curr.next
    curr.next = newNode
    return this
  }

  addAtIndex(index: number, val: T): this {
    if (index === 0) {
      const newNode = new Node(val, this.head)
      this.head = newNode
      return this
    }
    // let curr = this.head
    // for (let i = 0; i < index - 1; i++) curr = curr!.next
    // const newNode = new Node(val, curr!.next!.next)
    // curr!.next = newNode
    for (
      let i = 0, curr = this.head, prev = null as TLink<T>;
      i <= index;
      i++
    ) {
      if (i === index) {
        const newNode = new Node(val, curr)
        prev!.next = newNode
      }
      prev = curr
      curr = curr?.next || null
    }

    return this
  }

  deleteAtIndex(index: number): this {
    if (index === 0) {
      this.head = this.head!.next
      return this
    }

    for (
      let i = 0, curr = this.head, prev = null as TLink<T>;
      i <= index && curr !== null;
      i++
    ) {
      if (i === index) prev!.next = curr?.next || null

      prev = curr
      curr = curr?.next || null
    }

    return this
  }
}

export { MyLinkedList, Node }
