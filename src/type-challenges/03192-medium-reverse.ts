import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>,
]

type _errors = [
  // @ts-expect-error
  Reverse<"string">,
  // @ts-expect-error
  Reverse<{ key: "value" }>,
]

// ================== SOLUTION ==================

type Reverse<T extends readonly unknown[]> = T extends readonly [
  infer Head,
  ...infer Tail,
]
  ? [...Reverse<Tail>, Head]
  : []
