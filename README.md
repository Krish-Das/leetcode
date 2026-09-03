# lcpy - leetcode python

Python solutions and tests for LeetCode problems.

## Requirements

- Python 3.14 or newer
- [uv](https://docs.astral.sh/uv/)

## Setup

Install dependencies:

```sh
uv sync
```

## Project Layout

```text
src/lcpy/
  __init__.py
  leetcode/
    0125-valid-palindrome/
      two_pointers.py
      test_two_pointers.py
```

Each LeetCode problem lives in its own directory under `src/lcpy/leetcode/`.
Solution files are named by approach, and tests sit next to the corresponding
solution.

## Development

Run tests:

```sh
uv run pytest
```

Run lint checks:

```sh
uv run ruff check
```

Run formatter:

```sh
uv run ruff format
```

Run type checks:

```sh
uv run mypy src
```

## License

See [LICENSE.txt](LICENSE.txt).
