export function trap(height: number[]): number {
  let sum = 0,
    left = 0,
    right = height.length - 1,
    maxR = Number.NEGATIVE_INFINITY,
    maxL = Number.NEGATIVE_INFINITY

  while (left < right) {
    // biome-ignore lint/style/noNonNullAssertion: bound(L) = 0 → len-1 - 1
    const heightLeft = height[left]!,
      // biome-ignore lint/style/noNonNullAssertion: bound(R) = len-1 → 1
      heightRight = height[right]!

    if (heightRight < heightLeft) {
      maxR = Math.max(maxR, heightRight)
      sum += Math.max(maxR - heightRight, 0)
      right--
    } else {
      maxL = Math.max(maxL, heightLeft)
      sum += Math.max(maxL - heightLeft, 0)
      left++
    }
  }
  return sum
}
