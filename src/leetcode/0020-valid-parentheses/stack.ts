const PAIRS: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[",
}

function isValid(s: string): boolean {
  const stack: string[] = []

  for (const token of s) {
    const opening = PAIRS[token]

    if (opening) {
      if (stack.pop() !== PAIRS[token]) return false
    } else stack.push(token)
  }

  return !stack.length
}

export { isValid }
