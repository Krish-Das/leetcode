import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >,
]

type _errors = [
  // @ts-expect-error
  FlipArguments<"string">,
  // @ts-expect-error
  FlipArguments<{ key: "value" }>,
  // @ts-expect-error
  FlipArguments<["apple", "banana", 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]

// ================== SOLUTION ==================

// biome-ignore lint/suspicious/noExplicitAny: unknown breaks contravariant param matching
type FlipArguments<F extends (...args: any[]) => unknown> = F extends (
  ...args: infer Args
) => infer R
  ? (...args: Flip<Args>) => R
  : never
type Flip<Args extends readonly unknown[]> = Args extends readonly [
  ...infer Head,
  infer Tail,
]
  ? [Tail, ...Flip<Head>]
  : []
