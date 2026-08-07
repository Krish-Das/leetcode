const sort = (array: number[]): number[] => {
  const arr = [...array]

  for (let idx = 1; idx < arr.length; idx++) {
    let pointer = idx
    // biome-ignore lint/style/noNonNullAssertion: loop guard ensures pointer is always in range
    while (pointer > 0 && arr.at(pointer)! < arr.at(pointer - 1)!) {
      // biome-ignore lint/style/noNonNullAssertion: loop guard ensures pointer is always in range
      const tmp = arr.at(pointer)!
      // biome-ignore lint/style/noNonNullAssertion: loop guard ensures pointer - 1 is always in range
      arr[pointer] = arr.at(pointer - 1)!
      arr[pointer - 1] = tmp
      pointer--
    }
  }
  return arr
}

console.log(sort([])) // []
console.log(sort([1])) // [1]
console.log(sort([2, 1])) // [1, 2]
console.log(sort([1, 2])) // [1, 2]
console.log(sort([2, 3, 1, 4])) // [1, 2, 3, 4]
console.log(sort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
console.log(sort([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(sort([3, 3, 1, 2, 1])) // [1, 1, 2, 3, 3]
console.log(sort([0, -1, 5, -3, 2])) // [-3, -1, 0, 2, 5]
console.log(sort([4, 4, 4, 4])) // [4, 4, 4, 4]
console.log(sort([-5, -1, -3, -2, -4])) // [-5, -4, -3, -2, -1]
