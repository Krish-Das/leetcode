export function trap(heights: number[]): number {
  const leftMax: number[] = []

  let max = 0
  for (const height of heights) {
    max = Math.max(height, max)
    leftMax.push(max)
  }

  let water = 0
  let rightMax = 0
  for (let i = heights.length - 1; i >= 0; i--) {
    // biome-ignore lint/style/noNonNullAssertion: always within bound
    const height = heights[i]!
    rightMax = Math.max(rightMax, height)
    // biome-ignore lint/style/noNonNullAssertion: bound(L) = 0 → len-1 - 1
    water += Math.min(leftMax[i]!, rightMax) - height
  }

  return water
}
