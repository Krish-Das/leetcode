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
    __init__.py
    p0015_3sum.py
    p0125_valid_palindrome.py
tests/
  test_0015_3sum.py
  test_0125_valid_palindrome.py
```

Each problem is a single module under `src/lcpy/leetcode/`, named
`p{NNNN}_{slug}.py` (zero-padded LeetCode ID). Tests live in `tests/` and
import the corresponding `Solution` class.

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
uv run mypy src tests
```

## License

See [LICENSE.txt](LICENSE.txt).
