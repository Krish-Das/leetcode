import type { Equal, Expect } from "@type-challenges/utils"

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// ================== TEST CASES ==================

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
}

// @ts-expect-error: cannot reassign a readonly property
todo.title = "Hello"
// @ts-expect-error: cannot reassign a readonly property
todo.description = "barFoo"

type _cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
