import type { Equal, Expect } from "@type-challenges/utils"

type First<T extends readonly unknown[]> = T extends [] ? never : T[0]

type arr1 = ["a", "b", "c"]
type arr2 = [3, 2, 1]
type empty = []

type head1 = First<arr1>
type head2 = First<arr2>
type headEmpty = First<empty>

type _cases = [
  Expect<Equal<head1, "a">>,
  Expect<Equal<head2, 3>>,
  Expect<Equal<headEmpty, never>>,
]
