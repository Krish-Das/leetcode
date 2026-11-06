export function dailyTemperatures(temperatures: number[]): number[] {
  const ans = Array.from({ length: temperatures.length }, () => 0)
  const stack: number[] = []
  for (const [idx, temp] of temperatures.entries()) {
    let topIdx = stack.at(-1)
    while (
      topIdx !== undefined &&
      (temperatures[topIdx] ?? Number.POSITIVE_INFINITY) < temp
    ) {
      ans[topIdx] = idx - topIdx
      stack.pop()
      topIdx = stack.at(-1)
    }
    stack.push(idx)
  }
  return ans
}
