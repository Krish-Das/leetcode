import type { Equal, Expect } from "@type-challenges/utils"

type Columns = [
  { id: "name"; values: string[] },
  { id: "age"; values: number[] },
]

type ExtendedColumns = [
  ...Columns,
  { id: "active"; values: boolean[] },
  { id: "roles"; values: ["admin", "member"] },
]

type ReadonlyColumns = readonly [
  { id: "name"; values: string[] },
  { id: "age"; values: number[] },
]

type ReadonlyValueColumns = readonly [
  { readonly id: "roles"; readonly values: readonly ["admin", "member"] },
]

type _cases = [
  // Matches at different positions and preserves the value type.
  Expect<Equal<GetColValuesById<Columns, "name">, string[]>>,
  Expect<Equal<GetColValuesById<Columns, "age">, number[]>>,
  Expect<Equal<GetColValuesById<ExtendedColumns, "active">, boolean[]>>,
  Expect<
    Equal<GetColValuesById<ExtendedColumns, "roles">, ["admin", "member"]>
  >,
  // Supports empty and readonly column lists.
  Expect<Equal<GetColValuesById<[], "name">, never>>,
  Expect<Equal<GetColValuesById<ReadonlyColumns, "age">, number[]>>,
  Expect<
    Equal<
      GetColValuesById<ReadonlyValueColumns, "roles">,
      readonly ["admin", "member"]
    >
  >,
  // A union of IDs should return the values of every matching column.
  Expect<Equal<GetColValuesById<Columns, "name" | "age">, string[] | number[]>>,
  Expect<Equal<GetColValuesById<Columns, "address">, never>>,
]

// ================== SOLUTION ==================

type TColumn = { readonly id: string; readonly values: readonly unknown[] }
type GetColValuesById<
  Columns extends readonly TColumn[],
  Id extends TColumn["id"],
> = Columns extends readonly [
  { id: infer I extends TColumn["id"]; values: infer V },
  ...infer Rest extends readonly TColumn[],
]
  ? Id extends I
    ? V
    : GetColValuesById<Rest, Id>
  : never
