function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number[]>();

  for (const num of nums) {
    const count = map.get(num);
    if (!count) {
      map.set(num, [num]); // first time seeing the number
    } else {
      const updated = [...count, num];
      map.set(num, updated);
    }
  }

  const groups = Array.from(map.values());

  const sortedGroups = groups.sort((a, b) => b.length - a.length);
  const topK = sortedGroups.slice(0, k);

  return topK.map((a) => a.at(0)!);
}

console.log(`ans: ${topKFrequent([1, 1, 1, 2, 2, 3], 2)}`); // [1, 2]
console.log(`ans: ${topKFrequent([1], 1)}`); // [1]
console.log(`ans: ${topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)}`); // [1, 2]

// console.log(topKFrequent([1, 2, 3, 2, 3, 2, 3, 1, 3, 2], 2)); // [1, 2]
// console.log(`ans: ${topKFrequent([2, 2, 1, 1, 2], 1)}`);
