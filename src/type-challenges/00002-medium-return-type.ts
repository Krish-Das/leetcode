import type { Equal, Expect } from "@type-challenges/utils"

// biome-ignore lint/suspicious/noExplicitAny: generic constraint needs any
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  // biome-ignore lint/suspicious/noExplicitAny: generic constraint needs any
  ...args: any[]
) => infer U
  ? U
  : never

// ================== TEST CASES ==================

type _cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, "foo"]
  bar: "hello"
  prev(): number
}

const fn = (v: boolean) => (v ? 1 : 2)
// biome-ignore lint/suspicious/noExplicitAny: Test-case
const fn1 = (v: boolean, _w: any) => (v ? 1 : 2)
