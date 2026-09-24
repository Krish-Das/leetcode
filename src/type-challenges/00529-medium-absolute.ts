import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>,
]

// ================== SOLUTION ==================

type Absolute<Num extends number | string | bigint> =
  `${Num}` /* converts into string */ extends `-${infer N}` ? N : `${Num}`
