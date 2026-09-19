import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<OnlyNumbers2<[1, 2, "foo", 3, "bar"]>, [1, 2, 3]>>,
  Expect<
    Equal<
      OnlyNumbers2<["foo", 0, true, -1, null, 1.5, undefined, () => void]>,
      [0, -1, 1.5]
    >
  >,
  Expect<Equal<OnlyNumbers2<[number, "foo", 42]>, [number, 42]>>,
  Expect<Equal<OnlyNumbers2<["foo", "bar"]>, []>>,
  Expect<Equal<OnlyNumbers2<[1, "two", "3"]>, [1, 3]>>,
  Expect<Equal<OnlyNumbers2<[]>, []>>,
  Expect<Equal<OnlyNumbers2<readonly [1, "foo", 2]>, [1, 2]>>,
  // @ts-expect-error(2344)
  Expect<Equal<OnlyNumbers2<undefined>, []>>,
]

// ================== SOLUTION ==================

// biome-ignore lint/suspicious/noExplicitAny: generic constraint requires any
type OnlyNumbers2<List extends readonly any[]> = List extends readonly [
  infer First,
  ...infer Rest,
]
  ? First extends number
    ? [First, ...OnlyNumbers2<Rest>]
    : First extends `${infer N extends number}`
      ? [N, ...OnlyNumbers2<Rest>]
      : OnlyNumbers2<Rest>
  : []
