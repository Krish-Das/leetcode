import type { Equal, Expect } from "@type-challenges/utils"

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type _cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]

// ================== SOLUTION ==================

type PickByType<T, U> = {
  [key in keyof T as T[key] extends U ? key : never]: T[key]
}
