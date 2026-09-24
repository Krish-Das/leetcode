import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>,
]

// ================== SOLUTION ==================

type Replace<
  T extends string,
  From extends string,
  To extends string,
> = From extends ""
  ? T
  : T extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : T
