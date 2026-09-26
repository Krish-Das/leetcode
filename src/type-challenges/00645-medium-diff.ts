import type { Equal, Expect } from "@type-challenges/utils"

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type _cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

// ================== SOLUTION ==================

type Diff<
  T extends Record<PropertyKey, unknown>,
  U extends Record<PropertyKey, unknown>,
> = {
  [key in keyof T | keyof U as key extends keyof T & keyof U
    ? never
    : key]: key extends keyof T ? T[key] : key extends keyof U ? U[key] : never
}
