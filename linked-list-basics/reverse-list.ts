class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  constructor() {
    this.head = null;
  }
  prepend(data: Node<T>["data"]): void {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }
  toArray(): T[] {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  reverse() {
    let prev: Node<T> | null = null;
    let current = this.head;

    while (current) {
      const tmp = current.next;
      current.next = prev;
      prev = current;
      current = tmp;
    }

    this.head = prev;
  }
}

const ll = new LinkedList();

console.clear();
for (let i = 10 ** 10; i >= 0; i--) {
  ll.prepend(i);
}

console.log(ll.head?.data);
console.log(ll.toArray());

ll.reverse();

console.log(ll.head?.data);
console.log(ll.toArray());
