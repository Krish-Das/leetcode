const nums = [2, 7, 11, 15]
const target = 9

let pointerAt = 0;
let lastPointer: number | undefined;

function count() {
  for (let i = 0; i < nums.length; i++) {
    const added = nums[pointerAt] + nums[i];
    if (pointerAt !== i && added === target) {
      lastPointer = i;
      break;
    }
  }
  if (lastPointer === undefined) {
    pointerAt++;
    count();
  }
  return [pointerAt, lastPointer];
}

export { count };
