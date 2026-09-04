function getConcatenation(nums: number[]): number[] {
  const ans: (number | undefined)[] = Array.from(
    { length: nums.length * 2 },
    () => undefined,
  )

  nums.forEach((num, idx) => {
    ans[idx] = num
    ans[idx + nums.length] = num
  })

  return ans as number[]
}

export { getConcatenation }
