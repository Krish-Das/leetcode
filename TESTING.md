# Testing Rules

## Generic rules

1. **Read first**
   - Read the implementation file and any existing test file before writing.
   - Don’t change the implementation unless explicitly asked.

2. **Follow TDD**
   - Always write tests before changing any implementation.
   - Assert the correct expected behavior even when the current implementation is incomplete or failing.
   - Run the tests to confirm failures, then implement or fix.

3. **Co-locate test files**
   - Place `*.test.ts` next to the implementation file it tests (same directory).

4. **Use exported signatures**
   - Import the same public API the implementation exposes.
   - Prefer exported types/classes over re-declaring them in the test file.

5. **Test framework**
   - Tests run with Vitest via `bun test <file>`.
   - Use `describe` blocks to group related tests.

6. **Coverage checklist**
   Every test suite should usually include edge cases, representative examples, and boundary inputs.

7. **Assertions**
   - Use `.toEqual` for collections and structures.
   - Use `.toBe` for primitives and reference identity.
   - Use `Number.isNaN(value)` for NaN behavior.

8. **Verification**
   - Always run the relevant test file with `bun test <path>`.
   - Report pass/fail summary concisely.

## Tree-specific conventions

1. **Coverage** — a typical tree test suite covers:
   - empty tree
   - single-node tree
   - balanced / representative example tree
   - left-heavy chain
   - right-heavy chain
   - tree with single-child nodes
   - duplicate values (when applicable)

2. **Helpers**
   - Reuse `compareNumbers = (a: number, b: number) => a - b` for BST-style `Tree` tests.
   - Extract common tree builders to avoid repetition.
