import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

// ================== SOLUTION ==================

type _Last<Tupple extends readonly unknown[]> = Tupple extends readonly [
  infer First,
  ...infer Rest,
]
  ? Rest["length"] extends 0
    ? First
    : _Last<Rest>
  : never

type Last<Tupple extends readonly unknown[]> = Tupple extends readonly [
  // biome-ignore lint/suspicious/noExplicitAny: rest element requires any, unknown is not assignable here
  ...any,
  infer Tail,
]
  ? Tail
  : never
