/** biome-ignore-all lint/style/noNonNullAssertion: pointers are always within bounds */
function searchMatrix(matrix: number[][], target: number): boolean {
  let lOuter = 0
  let rOuter = matrix.length - 1
  while (lOuter <= rOuter) {
    const mOuter = Math.floor((lOuter + rOuter) / 2)
    const row = matrix[mOuter]!
    if (row.at(0)! <= target && target <= row.at(-1)!) {
      // good ol' binary search
      let lInner = 0
      let rInner = row.length - 1
      while (lInner <= rInner) {
        const mInner = Math.floor((lInner + rInner) / 2)
        const num = row[mInner]!
        if (num === target) return true
        if (target < num) rInner = mInner - 1
        else lInner = mInner + 1
      }
      return false
    }
    if (target < row.at(0)!) rOuter = mOuter - 1
    else lOuter = mOuter + 1
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3, // true
  ),
)
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13, // true
  ),
)
