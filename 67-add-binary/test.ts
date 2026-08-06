// biome-ignore-all lint/style/noNonNullAssertion: allow concise indexed access in practice test

import { addBinary } from "./sol-1"

/** All 2‑bit binary strings */
const bits = ["00", "01", "10", "11"] as const

/** Expected results – pre‑computed */
const expected: Record<string, string> = {
  "00+00": "00",
  "00+01": "01",
  "00+10": "10",
  "00+11": "11",
  "01+00": "01",
  "01+01": "10",
  "01+10": "11",
  "01+11": "00", // overflow (2‑bit wrap‑around)
  "10+00": "10",
  "10+01": "11",
  "10+10": "00", // overflow
  "10+11": "01", // overflow
  "11+00": "11",
  "11+01": "00", // overflow
  "11+10": "01", // overflow
  "11+11": "10", // overflow
}

/** Simple assertion helper */
function assertEqual(actual: string, expected: string, a: string, b: string) {
  if (actual !== expected) {
    console.error(`❌ ${a} + ${b} = ${actual} (expected ${expected})`)
    process.exitCode = 1
  } else {
    console.log(`✅ ${a} + ${b} = ${actual}`)
  }
}

/** Run exhaustive test suite */
for (const a of bits) {
  for (const b of bits) {
    const key = `${a}+${b}`
    const result = addBinary(a, b)
    assertEqual(result, expected[key]!, a, b)
  }
}
