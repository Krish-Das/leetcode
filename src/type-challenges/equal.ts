/** biome-ignore-all lint/suspicious/noExplicitAny: test cases */
import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  // Primitives and literals
  Expect<Equal<MyEqual<1, 1>, true>>,
  Expect<Equal<MyEqual<1, 2>, false>>,
  Expect<Equal<MyEqual<string, string>, true>>,
  Expect<Equal<MyEqual<string, number>, false>>,
  Expect<Equal<MyEqual<true, true>, true>>,
  Expect<Equal<MyEqual<true, false>, false>>,
  Expect<Equal<MyEqual<null, undefined>, false>>,
  // Special types
  Expect<Equal<MyEqual<any, any>, true>>,
  Expect<Equal<MyEqual<any, unknown>, false>>,
  Expect<Equal<MyEqual<any, never>, false>>,
  Expect<Equal<MyEqual<unknown, unknown>, true>>,
  Expect<Equal<MyEqual<unknown, string>, false>>,
  Expect<Equal<MyEqual<never, never>, true>>,
  Expect<Equal<MyEqual<never, undefined>, false>>,
  // Unions and intersections
  Expect<Equal<MyEqual<1 | 2, 2 | 1>, true>>,
  Expect<Equal<MyEqual<1 | 2, 1 | 2 | 3>, false>>,
  Expect<
    Equal<
      MyEqual<{ id: number } & { name: string }, { id: number; name: string }>,
      false
    >
  >,
  // Structured types
  Expect<Equal<MyEqual<{ id: 1 }, { id: 1 }>, true>>,
  Expect<Equal<MyEqual<{ id: 1 }, { id: number }>, false>>,
  Expect<Equal<MyEqual<{ readonly id: 1 }, { id: 1 }>, false>>,
  Expect<Equal<MyEqual<{ id?: 1 }, { id: 1 }>, false>>,
  Expect<Equal<MyEqual<[1, "foo"], [1, "foo"]>, true>>,
  Expect<Equal<MyEqual<[1, "foo"], readonly [1, "foo"]>, false>>,
  Expect<Equal<MyEqual<Array<number>, Array<string>>, false>>,
  // Functions
  Expect<
    Equal<MyEqual<(value: string) => number, (value: string) => number>, true>
  >,
  Expect<
    Equal<MyEqual<(value: string) => number, (value: string) => string>, false>
  >,
]

// ================== SOLUTION ==================

export type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false
