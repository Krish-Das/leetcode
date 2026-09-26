import type { Equal, Expect } from "@type-challenges/utils"

type One = { foo: number }
// biome-ignore lint/complexity/noBannedTypes: test case
type Empty = {}
type Multi = { foo: number; bar: string }

type _cases = [
  Expect<Equal<Loose<One>["foo"], number>>,
  Expect<Equal<Loose<One>["bar"], unknown>>,
  Expect<Equal<Loose<One>["whateverRandomKey"], unknown>>,
  Expect<Equal<Loose<One>[symbol], unknown>>,
  Expect<Equal<Loose<Multi>["foo"], number>>,
  Expect<Equal<Loose<Multi>["bar"], string>>,
  Expect<Equal<Loose<Empty>["anything"], unknown>>,
]

// value-level: should pass
const _v1 = { foo: 30, bar: true } satisfies Loose<One>
const _v2 = { foo: 30 } satisfies Loose<One>
const _v3 = {
  foo: 30,
  extra1: "a",
  extra2: [1, 2, 3],
  extra3: null,
} satisfies Loose<One>

// value-level: should fail
// @ts-expect-error - foo missing
const _v4 = {} satisfies Loose<One>

// @ts-expect-error - foo wrong type
const _v5 = { foo: "not a number" } satisfies Loose<One>

// @ts-expect-error - foo wrong type, even with extras present
const _v6 = { foo: true, bar: 1 } satisfies Loose<One>

// ================== SOLUTION ==================

type Loose<T extends Record<PropertyKey, unknown>> = {
  [P in keyof T]: T[P]
} & {
  [key: PropertyKey]: unknown
}
