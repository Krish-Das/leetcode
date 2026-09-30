import type { Equal, Expect } from "@type-challenges/utils"

type NodeA = {
  type: "A"
  name: string
  flag: number
}

type NodeB = {
  type: "B"
  id: number
  flag: number
}

type NodeC = {
  type: "C"
  name: string
  flag: number
}

type ReplacedNodeA = {
  type: "A"
  name: number
  flag: string
}

type ReplacedNodeB = {
  type: "B"
  id: number
  flag: string
}

type ReplacedNodeC = {
  type: "C"
  name: number
  flag: string
}

type NoNameNodeA = {
  type: "A"
  flag: number
  name: never
}

type NoNameNodeC = {
  type: "C"
  flag: number
  name: never
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

type _cases = [
  Expect<
    Equal<
      ReplaceKeys<Nodes, "name" | "flag", { name: number; flag: string }>,
      ReplacedNodes
    >
  >,
  Expect<Equal<ReplaceKeys<Nodes, "name", { aa: number }>, NodesNoName>>,
]

// ================== SOLUTION ==================

type ReplaceKeys<
  T extends Record<PropertyKey, unknown>,
  K extends PropertyKey,
  V extends Record<PropertyKey, unknown>,
> = {
  // [k in keyof T as k extends Key ? never : k]: k
  // [k in Key as k extends keyof T ? never : k]: k
  // [k in Key]: T[k]
  [key in keyof V]: key
}

type _ = ReplaceKeys<Nodes, "name" | "flag", { name: number; flag: string }>
//   ^?

type ReplacedNodes = ReplaceKeys<
  //   ^?
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.
