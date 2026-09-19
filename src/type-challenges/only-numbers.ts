import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<OnlyNumbers<[1, 2, "foo", 3, "bar"]>, [1, 2, 3]>>,
  Expect<
    Equal<
      OnlyNumbers<["foo", 0, true, -1, null, 1.5, undefined, () => void]>,
      [0, -1, 1.5]
    >
  >,
  Expect<Equal<OnlyNumbers<[number, "foo", 42]>, [number, 42]>>,
  Expect<Equal<OnlyNumbers<["foo", "bar"]>, []>>,
  Expect<Equal<OnlyNumbers<[]>, []>>,
  Expect<Equal<OnlyNumbers<readonly [1, "foo", 2]>, [1, 2]>>,
  // @ts-expect-error(2344)
  Expect<Equal<OnlyNumbers<undefined>, []>>,
]

// ================== SOLUTION ==================

type OnlyNumbers<List extends readonly unknown[]> = List extends readonly [
  infer First,
  ...infer Rest,
]
  ? First extends number
    ? [First, ...OnlyNumbers<Rest>]
    : OnlyNumbers<Rest>
  : []
