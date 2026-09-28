import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  // biome-ignore lint/complexity/noBannedTypes: Test case
  Expect<Equal<IsNever<{}>, false>>,
]

// ================== SOLUTION ==================

type IsNever<T> = [T] extends [never] ? true : false
