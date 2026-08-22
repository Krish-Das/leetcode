function isValid(s: string): boolean {
  type Tokens = {
    opening: "(" | "{" | "["
    closing: ")" | "}" | "]"
  }
  type Opening = Tokens["opening"]
  type Closing = Tokens["closing"]

  const map = new Map<Closing, Opening>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ])
  const stack: Opening[] = []
  for (const token of s) {
    const opening = map.get(token as any)
    if (!opening) stack.push(token as Opening)
    else {
      const top = stack.pop()
      if (top !== opening) return false
    }
  }

  return !stack.length
}

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([])")) // true
console.log(isValid("([)]")) // false
// isValid("()")
// isValid("()[]{}")
// isValid("(]")
// isValid("([])")
// isValid("([)]")
