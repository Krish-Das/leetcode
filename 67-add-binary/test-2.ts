import { addBinary } from "./sol-1"

// Test function
function testBinaryAddition(
  a: string,
  b: string,
  expected: string,
  testName: string,
): boolean {
  const result = addBinary(a, b)
  const passed = result === expected

  console.log(`${passed ? "✓" : "✗"} ${testName}`)
  if (!passed) {
    console.log(`  Expected: ${expected}`)
    console.log(`  Got:      ${result}`)
  }

  return passed
}

// Automated test suite
function _runAllTests(): void {
  console.log("Running Binary Addition Tests...\n")

  let passed = 0
  let failed = 0

  const tests = [
    // Basic tests
    { a: "0", b: "0", expected: "0", name: "Zero + Zero" },
    { a: "1", b: "0", expected: "1", name: "One + Zero" },
    { a: "0", b: "1", expected: "1", name: "Zero + One" },
    { a: "1", b: "1", expected: "10", name: "One + One (with carry)" },

    // Your example
    { a: "01", b: "01", expected: "10", name: "01 + 01" },

    // Simple additions
    { a: "10", b: "01", expected: "11", name: "10 + 01" },
    {
      a: "11",
      b: "01",
      expected: "100",
      name: "11 + 01 (with carry propagation)",
    },
    { a: "11", b: "11", expected: "110", name: "11 + 11" },

    // Different lengths
    { a: "1", b: "11", expected: "100", name: "Different lengths: 1 + 11" },
    { a: "101", b: "1", expected: "110", name: "Different lengths: 101 + 1" },
    {
      a: "1010",
      b: "11",
      expected: "1101",
      name: "Different lengths: 1010 + 11",
    },

    // Multiple carries
    { a: "111", b: "1", expected: "1000", name: "Multiple carries: 111 + 1" },
    {
      a: "1111",
      b: "1",
      expected: "10000",
      name: "Multiple carries: 1111 + 1",
    },
    { a: "1111", b: "1111", expected: "11110", name: "1111 + 1111" },

    // Longer numbers
    { a: "10101", b: "01010", expected: "11111", name: "10101 + 01010" },
    { a: "11001", b: "10110", expected: "101111", name: "11001 + 10110" },
    { a: "100101", b: "10011", expected: "111000", name: "100101 + 10011" },

    // Edge cases with leading zeros
    {
      a: "00001",
      b: "00001",
      expected: "10",
      name: "Leading zeros: 00001 + 00001",
    },
    { a: "0000", b: "0000", expected: "0", name: "Multiple zeros" },

    // Large numbers
    {
      a: "11111111",
      b: "1",
      expected: "100000000",
      name: "Large: 11111111 + 1",
    },
    {
      a: "10101010",
      b: "01010101",
      expected: "11111111",
      name: "Large: 10101010 + 01010101",
    },

    // Commutative property tests
    { a: "1101", b: "101", expected: "10010", name: "1101 + 101" },
    { a: "101", b: "1101", expected: "10010", name: "101 + 1101 (reversed)" },
  ]

  tests.forEach((test) => {
    if (testBinaryAddition(test.a, test.b, test.expected, test.name)) {
      passed++
    } else {
      failed++
    }
  })

  console.log(`\n${"=".repeat(50)}`)
  console.log(`Results: ${passed} passed, ${failed} failed`)
  console.log(
    `Success rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`,
  )
}
