export function evalRPN(tokens: string[]): number {
  const operators = new Set<string>(["+", "-", "*", "/"])
  const stack: number[] = []
  for (const token of tokens) {
    if (!operators.has(token)) {
      stack.push(Number.parseInt(token, 10))
      continue
    }
    const right = stack.pop()
    const left = stack.pop()
    if (right === undefined || left === undefined) return Number.NaN
    // biome-ignore lint/security/noGlobalEval: It's LeetCode anyway, let's not overengineer it!
    const res = Math.trunc(eval(`${left} ${token} (${right})`))
    stack.push(res)
  }
  return stack.at(-1) ?? Number.NaN
}
