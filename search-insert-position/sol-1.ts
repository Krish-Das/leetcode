function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid: number = -1;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    let centerElement = nums[mid]!;

    if (target === centerElement) {
      return mid;
    } else if (target > centerElement) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.clear();
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 1)); // 0
console.log(searchInsert([1], 1)); // 0
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 4)); // 2
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1], 2)); // 1
