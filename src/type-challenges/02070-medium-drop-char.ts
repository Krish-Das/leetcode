import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>,
]

// ================== SOLUTION ==================

type _DropChar<
  S extends string,
  Char extends string,
> = S extends `${infer Head}${infer Tail}`
  ? Head extends Char
    ? `${DropChar<Tail, Char>}`
    : `${Head}${DropChar<Tail, Char>}`
  : S

type __DropChar<
  T,
  C extends string,
> = T extends `${infer Left}${C}${infer Right}`
  ? `${Left}${DropChar<Right, C>}`
  : T

type DropChar<T, C extends string> = T extends `${infer Left}${C}${infer Rest}`
  ? // ? `→${Left} |${C}| ${DropChar<Right, C>}`
    `→${Left} |${C}| ${Rest}`
  : T

type _ = DropChar<"tbutterflyt", "t">
//   ^?
