import type { Alike, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>,
]

// @ts-expect-error
type _error = MyReadonly2<Todo1, "title" | "invalid">

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

// ================== SOLUTION ==================

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [U in K]: T[U]
} & {
  [U in keyof T as U extends K ? never : U]: T[U]
}
