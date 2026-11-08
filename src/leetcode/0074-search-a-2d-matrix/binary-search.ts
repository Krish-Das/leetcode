/** biome-ignore-all lint/style/noNonNullAssertion: pointers are always within bounds */
export function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0
  let bottom = matrix.length - 1

  while (top <= bottom) {
    const midRow = Math.floor((top + bottom) / 2)
    const row = matrix[midRow]!

    if (target < row.at(0)!) bottom = midRow - 1
    else if (target > row.at(-1)!) top = midRow + 1
    else {
      let left = 0
      let right = row.length - 1
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const value = row[mid]!
        if (value === target) return true
        if (value < target) left = mid + 1
        else right = mid - 1
      }
      return false
    }
  }
  return false
}