type MyPick<K, V extends keyof K> = {
  [key in V]: K[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type _TodoPreview = MyPick<Todo, "title" | "completed">
//   ^?
