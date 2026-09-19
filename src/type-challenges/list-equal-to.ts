import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<ListEqualTo<[1, 2, 3], 2>, [false, true, false]>>,
  Expect<Equal<ListEqualTo<[2, 2, 3, 2], 2>, [true, true, false, true]>>,
  Expect<
    Equal<
      ListEqualTo<["foo", 1, true, null, undefined], "foo">,
      [true, false, false, false, false]
    >
  >,
  Expect<Equal<ListEqualTo<[2, 2], number>, [false, false]>>,
  Expect<Equal<ListEqualTo<[2 | 3, 2], 2>, [false, true]>>,
  Expect<
    // @ts-expect-error(2344): overengineering required
    Equal<ListEqualTo<readonly ["foo", "bar"], "foo">, readonly [true, false]>
  >,
  Expect<Equal<ListEqualTo<[], 1>, []>>,
]

// ================== SOLUTION ==================

// biome-ignore lint/suspicious/noExplicitAny: generic constraint requires any
type ListEqualTo<List extends readonly any[], Target> = List extends readonly [
  infer First,
  ...infer Rest,
]
  ? [
      Equal<First, Target> extends true ? true : false,
      ...ListEqualTo<Rest, Target>,
    ]
  : []
