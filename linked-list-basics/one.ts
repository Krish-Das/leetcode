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
}

const ll = new LinkedList<number>();

console.clear();

ll.prepend(3);
ll.prepend(2);
ll.prepend(1);
ll.append(4);
ll.insertAt(999, 40);
