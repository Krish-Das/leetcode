function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let ans = 0
  while (left < right) {
    // biome-ignore lint/style/noNonNullAssertion: bound(L) = 0 → len-2
    const leftHeight = height[left]!
    // biome-ignore lint/style/noNonNullAssertion: bound(R) = len-1 → 1
    const rightHeight = height[right]!

    const h = Math.min(leftHeight, rightHeight)
    const b = right - left
    const area = h * b
    ans = Math.max(ans, area)

    if (rightHeight < leftHeight) right--
    else left++
  }
  return ans
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1
