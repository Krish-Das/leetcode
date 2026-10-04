import type { Equal, Expect } from "@type-challenges/utils"

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type _cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type _errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>,
]

// ================== SOLUTION ==================

type Mutable<T extends object> = {
  -readonly [key in keyof T]: T[key]
}
