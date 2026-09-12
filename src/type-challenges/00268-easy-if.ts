import type { Equal, Expect } from "@type-challenges/utils"

type If<C extends boolean, T, F> = C extends true ? T : F

// ================== TEST CASES ==================

type _cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>,
  Expect<Equal<If<boolean, "a", 2>, "a" | 2>>,
]

// @ts-expect-error
type _error = If<null, "a", "b">
