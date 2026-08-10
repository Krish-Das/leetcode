# LeetCode DSA Practice

## Structure

```sh
src/
├── leetcode/     # LeetCode problem solutions
├── concepts/     # Standalone DSA concept practice
├── language/     # TypeScript/JS language feature practice (e.g., `this`, closures, prototypes)
└── quizzes/      # Knowledge assessments
```

## Conventions

### Adding a new LeetCode problem

- Place in `src/leetcode/{NNNN-kebab-case-title}/`
- Use a **zero-padded 4-digit number** as prefix (e.g., `0001-two-sum`, `0121-best-time-to-buy-and-sell-stock`)
- Name is derived from the LeetCode problem title in kebab-case

### Solution files

- Each solution file is named after the **approach** (e.g., `brute-force.ts`, `hash-map.ts`, `two-pointer.ts`, `sorting.ts`, `bucket-sort.ts`)
- No generic `sol-{n}.ts` or `best-sol.ts` — the filename should tell you the approach
- Include an `index.ts` if you want a canonical/default solution to re-export
- Include a `README.md` with the problem statement (and examples/constraints if helpful)

### Concepts

- Place in `src/concepts/{topic}/`
- Used for standalone practice that isn't tied to a specific LeetCode problem (e.g., `binary-search/`, `linked-list/`)

### Language features

- Place in `src/language/{topic}/`
- Used for TypeScript/JavaScript language feature deep-dives that aren't algorithms (e.g., `this-keyword/`, `closures/`, `prototypes/`)

### Quizzes

- Place in `src/quizzes/`
- One markdown file per topic (e.g., `typescript-fundamentals.md`)

### General

- All code is TypeScript (`.ts`)
- Use Biome for formatting/linting (`bun run check`, `bun run format`)
- Run a solution with `bun run src/leetcode/{NNNN-name}/{file}.ts`
