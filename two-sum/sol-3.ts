function that(nums: number[], target: number): number[] {
  function counterPart(pointerAt: number = 0): number {
    const firstElement = nums[pointerAt];
    return nums.findIndex(
      (e, idx) => idx !== pointerAt && firstElement + e === target,
    );
  }

  let arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const that = counterPart(i);
    if (that < 0) continue;
    arr.push(that);
  }
  const sorted = arr.sort((a, b) => a - b);
  return sorted;
}

console.log(that([2, 7, 11, 15], 9)); // [0,1]
console.log(that([3, 2, 4], 6)); // [1,2]
console.log(that([3, 3], 6)); // [0,1]
