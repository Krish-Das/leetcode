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

console.log(twoSum([2, 7, 11, 15], 9)) // [1,2]
console.log(twoSum([2, 3, 4], 6)) // [1,3]
console.log(twoSum([-1, 0], -1)) // [1,2]
