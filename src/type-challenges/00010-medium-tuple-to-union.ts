import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<TupleToUnion<["1", "2", "3"]>, "1" | "2" | "3">>,
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

// ================== SOLUTION ==================

type TupleToUnion<Tuple extends readonly unknown[]> = Tuple[number]
