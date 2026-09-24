import type { Equal, Expect } from "@type-challenges/utils"

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type _cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]

// ================== SOLUTION ==================

// biome-ignore lint/suspicious/noExplicitAny: rest element requires any, unknown is not assignable here
type AppendArgument<F extends (...args: any[]) => unknown, U> = F extends (
  ...args: infer Args
) => infer R
  ? (...args: [...Args, U]) => R
  : never
