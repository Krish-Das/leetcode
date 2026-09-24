import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >,
]

// @ts-expect-error
type _error = Flatten<"1">

// ================== SOLUTION ==================

type Flatten<T extends readonly unknown[]> = T extends readonly [
  infer Head,
  ...infer Tail,
]
  ? Head extends readonly unknown[]
    ? Flatten<[...Head, ...Tail]>
    : [Head, ...Flatten<Tail>]
  : T // T will always be `[]` anyway
