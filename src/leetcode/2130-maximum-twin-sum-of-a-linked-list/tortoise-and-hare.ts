class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function pairSum(head: ListNode | null): number {
  let sum = Number.NEGATIVE_INFINITY

  let slow = head
  let fast = head
  let prev = null
  while (fast?.next) {
    fast = fast.next?.next
    // biome-ignore lint/style/noNonNullAssertion: fast.next asserts slow.next
    const next = slow!.next
    // biome-ignore lint/style/noNonNullAssertion: fast.next asserts slow.next
    slow!.next = prev
    prev = slow
    slow = next
  }

  while (prev && slow) {
    sum = Math.max(sum, slow.val + prev.val)
    slow = slow.next
    prev = prev.next
  }
  return sum
}
