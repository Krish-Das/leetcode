import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>,
]

// ================== SOLUTION ==================

type Whitespace = " " | "\n" | "\t"
type TrimLeft<S extends string> = S extends `${Whitespace}${infer T}`
  ? TrimLeft<T>
  : S
