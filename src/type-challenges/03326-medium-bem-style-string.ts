import type { Equal, Expect } from "@type-challenges/utils"

type _cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >,
]

// ================== SOLUTION ==================

type BEM<
  B extends string,
  E extends readonly string[],
  M extends readonly string[],
> = `${B}${E extends readonly [] ? "" : `__${E[number]}`}${M extends readonly [] ? "" : `--${M[number]}`}`
