function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let count = 0
  let windowAvg = 0
  for (let currIdx = 0; currIdx < arr.length; currIdx++) {
    const leftOutIdx = currIdx - k
    const leftOutAvg = (arr[leftOutIdx] ?? 0) / k
    // biome-ignore lint/style/noNonNullAssertion: i is always within bound
    const enteringAvg = arr[currIdx]! / k
    windowAvg += enteringAvg - leftOutAvg
    if (currIdx >= k - 1 && windowAvg >= threshold) count++
  }

  return count
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)) // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)) // 6
