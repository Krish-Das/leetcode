const secondSmallest = (nums: number[]) => {
  if (nums.length < 1) return undefined

  // biome-ignore lint/style/noNonNullAssertion: nums[0] is always inbound
  let smallest = nums[0]!
  let second: number | undefined
  for (let i = 1; i < nums.length; i++) {
    // biome-ignore lint/style/noNonNullAssertion: nums[i] is always inbound
    const num = nums[i]!
    if (num === smallest) continue
    if (num < smallest) {
      second = smallest
      smallest = num
      continue
    }

    second = second !== undefined ? Math.min(second, num) : num
  }
  return second
}

console.log(secondSmallest([1, -1, 3, 4, 5])) // 1
console.log(secondSmallest([1, 2, 3, 4, 5])) // 2
console.log(secondSmallest([])) // undefined
console.log(secondSmallest([1])) // undefined
console.log(secondSmallest([1, 1])) // undefined
console.log(secondSmallest([1, 1, 2])) // 2
