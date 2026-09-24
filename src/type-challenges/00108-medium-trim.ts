import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>,
]

// ================== SOLUTION ==================

type Whitespace = " " | "\n" | "\t"
type Trim<S extends string> = S extends
  | `${Whitespace}${infer T}`
  | `${infer T}${Whitespace}`
  ? Trim<T>
  : S
