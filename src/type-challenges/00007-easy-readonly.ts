type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

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
