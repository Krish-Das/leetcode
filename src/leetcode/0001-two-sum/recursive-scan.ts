const nums = [2, 7, 11, 15]
const target = 9

let answerArr: number[] = []

function countWithMap(pointerAt: number = 0): number[] | undefined {
  const firstElement = nums[pointerAt]

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i]
    // biome-ignore lint/style/noNonNullAssertion: depricated code
    if (el! + firstElement! === target && pointerAt !== i) {
      answerArr = [pointerAt, i]
      break
    }
  }

  if (answerArr.length === 0) countWithMap(pointerAt + 1)
  if (answerArr.length !== 0) return answerArr
}

export { countWithMap }
