import type { Equal, Expect } from "@type-challenges/utils"

type MyExclude<T, U> = T extends U ? never : T

// ================== TEST CASES ==================

type _cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    // biome-ignore lint/complexity/noBannedTypes: Test case requires this
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >,
]
