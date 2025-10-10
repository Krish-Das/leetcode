//
// Time: O(nlogn) — due to sorting.
// Space: O(1) — in-place sorting.
//
function containsDuplicate(nums: number[]): boolean {
  const sorted = nums.sort();

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) return true;
  }

  return false;
}

console.clear();
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
