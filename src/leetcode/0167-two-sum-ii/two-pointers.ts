function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    // biome-ignore lint/style/noNonNullAssertion: l and r never crosses themselves
    const sum = numbers[left]! + numbers[right]!
    if (sum === target) return [left + 1, right + 1]
    else {
      if (sum > target) right--
      else left++
    }
  }

  return []
}

export { twoSum }
