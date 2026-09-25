import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Kebabcase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<Kebabcase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<Kebabcase<"foo-bar">, "foo-bar">>,
  Expect<Equal<Kebabcase<"foo_bar">, "foo_bar">>,
  Expect<Equal<Kebabcase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<Kebabcase<"ABC">, "a-b-c">>,
  Expect<Equal<Kebabcase<"-">, "-">>,
  Expect<Equal<Kebabcase<"">, "">>,
  Expect<Equal<Kebabcase<"😎">, "😎">>,
]

// ================== SOLUTION ==================

type Kebabcase<S extends string> = S extends `${infer Head}${infer Tail}`
  ? Tail extends Uncapitalize<Tail>
    ? `${Uncapitalize<Head>}${Kebabcase<Tail>}`
    : `${Uncapitalize<Head>}-${Kebabcase<Tail>}`
  : S
