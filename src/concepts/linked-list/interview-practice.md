Here are the algorithms and operations you should be able to write cold for a singly linked list, ranked by how often they appear in interviews.

### **The Essentials (Basic API)**

You should own these without thinking:

- `insertAt(index, data)` — not just head/tail
- `deleteAt(index)` — generalized version of your `remove`
- `indexOf(data)` / `contains(data)` — search by value
- `clear()` — reset the list properly
- `isEmpty()` / `length` — O(1) metadata

### **The Classics (Asked Everywhere)**

Master these; they are the actual interview questions:

1. **Reverse a linked list** — iterative and recursive versions
2. **Find the middle node** — slow/fast pointer (Floyd’s pattern)
3. **Find the kth node from the end** — two-pointer gap technique
4. **Detect a cycle** — Floyd’s Cycle-Finding (tortoise and hare)
5. **Find the start of a cycle** — extension of #4
6. **Remove duplicates** — from an unsorted list (hash set vs. O(1) space)
7. **Merge two sorted lists** — iterative and recursive
8. **Partition around a value x** — nodes < x come before nodes ≥ x (stable vs. unstable)

### **The Trickier Ones (Frequently Asked)**

9. **Add two numbers represented by linked lists** — digits stored in reverse order
10. **Check if a linked list is a palindrome** — reverse second half + compare
11. **Reorder list** — L0→Ln→L1→Ln-1→L2→Ln-2… (combine middle, reverse, merge)
12. **Remove nth node from the end** — one-pass with two pointers
13. **Intersection of two linked lists** — find the merging node
14. **Deep copy / clone a list with random pointers** — though usually doubly-linked with `random`, the pattern (interweaving nodes) is famous
15. **Sort a linked list** — merge sort is the natural fit; know why quicksort is awkward

### **The Techniques (More Important Than the Problems)**

Interviewers care less about whether you memorized #11 and more about whether you recognize these patterns:

| Technique                         | Used In                               |
| --------------------------------- | ------------------------------------- |
| **Two pointers (slow/fast)**      | Middle, cycle detection, kth from end |
| **Two pointers (gap/k distance)** | kth from end, remove nth from end     |
| **Two pointers (from two lists)** | Merge sorted, intersection            |
| **Reversal in-place**             | Reverse, palindrome, reorder list     |
| **Recursion**                     | Reverse, merge, print backward        |
| **Hash map / set**                | Duplicates, intersection (naive)      |

### **My Suggested Order**

If you want to train efficiently:

1. Finish your core API (`insertAt`, `deleteAt`, `indexOf`, `clear`)
2. Reverse iterative
3. Reverse recursive
4. Find middle
5. kth from end
6. Detect cycle + find cycle start
7. Merge two sorted lists
8. Remove duplicates (both O(n) time / O(n) space and O(n²) time / O(1) space)
9. Palindrome check
10. Reorder list (this one combines #3, #4, and #1 — it’s the ultimate integration test)

### **One Meta-Skill**

Be able to **draw the pointer movements**. Interviewers will ask you to walk through your code with a 3-node list. If you can trace `prev`, `curr`, `next` on a whiteboard without getting lost, you’ve already separated yourself from most candidates.

Want to pick one and start?
