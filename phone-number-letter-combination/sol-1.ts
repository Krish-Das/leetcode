// biome-ignore-all lint/style/noNonNullAssertion: allow concise indexed access in practice solution

function _looper(arr1: string[], arr2: string[]) {
  const answer = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      const letter1 = arr1[i]!
      const letter2 = arr2[j]!
      answer.push(letter1 + letter2)
    }
  }
  return answer
}

function _looper2(arrays: string[][]) {
  const joined = arrays.concat().flat()
  let low = 0
  let high = 0
  const ans: string[] = []

  while (low < joined.length && high < joined.length) {
    const letter1 = joined[low]!
    const letter2 = joined[high]!
    const combined = letter1 + letter2

    ans.push(combined)

    if (high < joined.length - 1) {
      high += 1
    } else {
      high = 0
      low += 1
    }
  }

  return ans
}

function looper3(arrays: string[][]) {
  let i = 0
  let j = 0
  let k = 0

  const arr1 = arrays[0]!
  const arr2 = arrays[1]!
  const arr3 = arrays[2]!

  const res: string[] = []

  /*
   * only works for 3 arrays
   * but the arrays can contain any amount of elements (" ")
   */
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    const str = arr1[i]! + arr2[j]! + arr3[k]!
    res.push(str)

    if (k < arr3.length - 1) {
      k++
    } else {
      k = 0
      if (j < arr2.length - 1) {
        j++
      } else {
        j = 0
        if (i < arr1.length - 1) {
          i++
        } else {
          return res
        }
      }
    }
  }
}

console.clear()
/*
console.log(
  looper2([
    ["a", "b", "c"],
    ["d", "e", "f"],
  ]),
);
*/
console.log(
  looper3([
    ["a", "b", "x"],
    ["c", "d", "y"],
    ["e", "f", "z"],
  ]),
)
