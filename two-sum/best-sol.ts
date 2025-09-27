function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const need = target - num;
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(num, i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
