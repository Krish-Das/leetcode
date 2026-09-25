import type { Equal, Expect } from "@type-challenges/utils"

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type _cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >,
]

// ================== SOLUTION ==================

type Merge<
  T extends Record<PropertyKey, unknown>,
  U extends Record<PropertyKey, unknown>,
> = {
  [key in keyof U | keyof T]: key extends keyof U
    ? U[key]
    : key extends keyof T
      ? T[key]
      : never
}
