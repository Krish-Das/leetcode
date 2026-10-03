import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
]

// ================== SOLUTION ==================

type Shift<Tupple extends readonly unknown[]> = Tupple extends readonly [
  unknown,
  ...infer Tail,
]
  ? Tail
  : []
