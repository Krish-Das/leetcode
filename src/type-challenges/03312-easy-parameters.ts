/** biome-ignore-all lint/suspicious/noExplicitAny: generic type utility, any needed for inference */
import type { Equal, Expect } from "@type-challenges/utils"

function foo(_arg1: string, _arg2: number): void {}
function bar(_arg1: boolean, _arg2: { a: "A" }): void {}
function baz(): void {}

type _cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

// ================== SOLUTION ==================

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never
