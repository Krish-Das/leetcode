import type { Equal, Expect } from "@type-challenges/utils"

type Length<T extends readonly unknown[]> = T["length"]

type tesla = ["tesla", "model 3", "model X", "model Y"]
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
]

type teslaLength = Length<tesla>
type spaceXLength = Length<spaceX>

type _cases = [Expect<Equal<teslaLength, 4>>, Expect<Equal<spaceXLength, 5>>]
