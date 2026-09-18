import type { Equal, Expect } from "@type-challenges/utils"

type First<T extends readonly unknown[]> = T extends [] ? never : T[0]

// ================== TEST CASES ==================

type _cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type _errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>,
]
