type Operation = "+" | "C" | "D" | `${number}`

function calPoints(operations: string[]): number {
  const scores: number[] = []
  for (const op of operations as Operation[]) {
    switch (op) {
      case "+": {
        // biome-ignore lint/style/noNonNullAssertion: there will always be at least two previous scores on the record
        scores.push(scores.at(-1)! + scores.at(-2)!)
        break
      }
      case "D": {
        // biome-ignore lint/style/noNonNullAssertion: there will always be at least one previous score on the record
        scores.push(scores.at(-1)! * 2)
        break
      }
      case "C": {
        scores.pop()
        break
      }
      default:
        scores.push(Number.parseInt(op, 10))
    }
  }

  const sum = scores.reduce((acc, score) => score + acc, 0)
  return sum
}

export { calPoints }
