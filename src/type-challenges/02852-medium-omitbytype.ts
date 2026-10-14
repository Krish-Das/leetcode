import type { Equal, Expect } from "@type-challenges/utils"

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type _cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >,
]

// ================== SOLUTION ==================

type OmitByType<Obj extends object, Type> = {
  [key in keyof Obj as Obj[key] extends Type ? never : key]: Obj[key]
}
