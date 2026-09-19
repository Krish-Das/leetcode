import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  // biome-ignore lint/complexity/noBannedTypes: test case
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  // @ts-expect-error(2344): use `Equal` type helper to fix this error
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  // @ts-expect-error(2344): use `Equal` type helper to fix this error
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  // @ts-expect-error(2344): use `Equal` type helper to fix this error
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  // @ts-expect-error(2344): use `Equal` type helper to fix this error
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  // @ts-expect-error(2344): use `Equal` type helper to fix this error
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  // @ts-expect-error(2344): use `Equal` type helper to fix this error
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

// ================== SOLUTION ==================

// biome-ignore lint/suspicious/noExplicitAny: generic constraint requires any
type Includes<List extends readonly any[], Target> = List extends [
  infer First,
  ...infer Rest,
]
  ? First extends Target
    ? true
    : Includes<Rest, Target>
  : false
