//
// Time: O(n)
// Space: O(n)
function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();

  for (const i of nums) {
    if (set.has(i)) return true;
    set.add(i);
  }

  return false;
}

console.clear();
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
