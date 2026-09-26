import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Camelcase<"foobar">, "foobar">>,
  Expect<Equal<Camelcase<"FOOBAR">, "foobar">>,
  Expect<Equal<Camelcase<"foo_bar">, "fooBar">>,
  Expect<Equal<Camelcase<"foo__bar">, "foo_Bar">>,
  Expect<Equal<Camelcase<"foo_$bar">, "foo_$bar">>,
  Expect<Equal<Camelcase<"foo_bar_">, "fooBar_">>,
  Expect<Equal<Camelcase<"foo_bar__">, "fooBar__">>,
  Expect<Equal<Camelcase<"foo_bar_$">, "fooBar_$">>,
  Expect<Equal<Camelcase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<Camelcase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<Camelcase<"-">, "-">>,
  Expect<Equal<Camelcase<"">, "">>,
  Expect<Equal<Camelcase<"😎">, "😎">>,
]

// ================== SOLUTION ==================

type Camelcase<S extends string> = S extends `${infer Head}${infer Tail}`
  ? Head extends "_"
    ? Tail extends `${infer L extends Letter}${infer Rest}`
      ? `${Capitalize<L>}${Camelcase<Rest>}`
      : `${Head}${Camelcase<Tail>}`
    : `${Uncapitalize<Head>}${Camelcase<Tail>}`
  : S
type LowercaseLetter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
type Letter = LowercaseLetter | Capitalize<LowercaseLetter>
