import type { Equal, Expect } from "@type-challenges/utils"

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U,
]

// ================== TEST CASES ==================

const tuple = [1] as const

type _cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >,
]

// @ts-expect-error
type _error = Concat<null, undefined>
