/** biome-ignore-all lint/suspicious/noExplicitAny: unknown breaks contravariant param matching */
import type { Equal, Expect } from "@type-challenges/utils"

// TODO: Didn't understand the `{then: ...}` part
type MyAwaited<T extends Promise<unknown> | { then: (...args: any[]) => any }> =
  T extends
    | Promise<infer U>
    | { then: (onfulfilled: (arg: infer U) => any) => any }
    ? U extends Promise<unknown> | { then: (...args: any[]) => any }
      ? MyAwaited<U>
      : U
    : never

// ================== TEST CASES ==================

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type _cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error(2344)
type _E1 = MyAwaited<number>
