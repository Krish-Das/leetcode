import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >,
]

// ================== SOLUTION ==================

type StringToUnion<S extends string> = S extends `${infer Head}${infer Rest}`
  ? Head | StringToUnion<Rest>
  : never
