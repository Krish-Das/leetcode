import type { Equal, Expect } from "@type-challenges/utils"

type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
}

const tuple = ["tesla", "model 3", "model X", "model Y"] as const
type result = TupleToObject<typeof tuple>

type _cases = Expect<
  Equal<
    result,
    {
      tesla: "tesla"
      "model 3": "model 3"
      "model X": "model X"
      "model Y": "model Y"
    }
  >
>
