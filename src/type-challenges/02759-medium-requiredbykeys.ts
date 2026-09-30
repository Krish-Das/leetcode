import type { Equal, Expect } from "@type-challenges/utils"

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type _cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
]

// ================== SOLUTION ==================

type RequiredByKeys<
  Obj extends object,
  K extends keyof Obj = keyof Obj,
> = Pretify<
  {
    [key in keyof Obj as key extends K ? never : key]: Obj[key]
  } & {
    [key in K]-?: Obj[key]
  }
>
type Pretify<T extends object> = { [key in keyof T]: T[key] } & {}
