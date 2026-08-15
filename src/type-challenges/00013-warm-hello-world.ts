import type { Equal, Expect, NotAny } from "@type-challenges/utils"

type HelloWorld = string

type _cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
