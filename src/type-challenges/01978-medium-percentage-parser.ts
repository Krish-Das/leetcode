import type { Equal, Expect } from "@type-challenges/utils"

type Case0 = ["", "", ""]
type Case1 = ["+", "", ""]
type Case2 = ["+", "1", ""]
type Case3 = ["+", "100", ""]
type Case4 = ["+", "100", "%"]
type Case5 = ["", "100", "%"]
type Case6 = ["-", "100", "%"]
type Case7 = ["-", "100", ""]
type Case8 = ["-", "1", ""]
type Case9 = ["", "", "%"]
type Case10 = ["", "1", ""]
type Case11 = ["", "100", ""]

type _cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>,
]

// ================== SOLUTION ==================

type CheckSuffix<S extends string> = S extends `${infer Digit}%`
  ? [Digit, "%"]
  : [S, ""]

type PercentageParser<Percent extends string> =
  Percent extends `${infer Sign extends "+" | "-"}${infer Tail}`
    ? [`${Sign}`, ...CheckSuffix<Tail>]
    : ["", ...CheckSuffix<Percent>]

type _ = PercentageParser<"">
//   ^?

type _ = PercentageParser<"1">
//   ^?

type _ = PercentageParser<"100%">
//   ^?

type _ = PercentageParser<"+100%">
//   ^?

type _ = PercentageParser<"-100%">
//   ^?
