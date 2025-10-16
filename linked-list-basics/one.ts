class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList<T> {
  size: number;
  private head: Node<T> | null;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  toArray(): T[] {
    const v = [];
    let current = this.head;
    while (current) {
      v.push(current.data);
      current = current.next;
    }
    return v;
  }
  prepend(data: Node<T>["data"]): void {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
  }
  append(data: Node<T>["data"]): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  insertAt(data: Node<T>["data"], index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    if (index === this.size) {
      this.append(data);
      return;
    }

    let current = this.head!;
    let count = 0;

    while (current) {
      if (count === index - 1) {
        const newNode = new Node(data, current.next);
        current.next = newNode;
        this.size++;
        return;
      }

      count++;
      current = current.next!;
    }
  }
  getAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.size) throw new Error("Index is out of bounds");
    let current = this.head;
    let currentIdx = 0;
    while (current && currentIdx < idx) {
      current = current.next;
      currentIdx++;
    }
    return current?.data;
  }
  removeAt(idx: number): T {
    if (idx < 0 || idx >= this.size) {
      throw new Error("Index is out of bounds");
    }

    if (!this.head) {
      throw new Error("Cannot remove from an empty list");
    }

    // Case 1: remove head
    if (idx === 0) {
      const value = this.head.data;
      this.head = this.head.next;
      this.size--;
      return value;
    }

    // Case 2: remove non-head
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      if (!current.next) {
        throw new Error("Index is out of bounds");
      }
      current = current.next;
    }

    const removed = current.next!;
    current.next = removed.next;
    removed.next = null;

    this.size--;
    return removed.data;
  }
}

const ll = new LinkedList<number>();

console.clear();

ll.prepend(3);
ll.prepend(2);
ll.prepend(1);
ll.append(4);

console.log(ll.toArray());
console.log(ll.removeAt(0));
console.log(ll.toArray());
