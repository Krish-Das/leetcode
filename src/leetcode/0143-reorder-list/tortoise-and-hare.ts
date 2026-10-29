class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function reorderList(head: ListNode | null): void {
  if (!head?.next) return

  // Find the last node of the first half
  let slow = head
  let fast: ListNode | null = head.next
  while (fast?.next) {
    // biome-ignore lint/style/noNonNullAssertion: fast.next asserts slow.next
    slow = slow.next!
    fast = fast.next.next
  }

  // Cut the list, then reverse the second half
  let reversed: ListNode | null = null
  let current = slow.next
  slow.next = null
  while (current) {
    const next = current.next
    current.next = reversed
    reversed = current
    current = next
  }

  // Interleave the two halves
  let first: ListNode | null = head
  let second = reversed
  while (first && second) {
    const firstNext: ListNode | null = first.next
    const secondNext: ListNode | null = second.next
    first.next = second
    second.next = firstNext
    first = firstNext
    second = secondNext
  }
}
