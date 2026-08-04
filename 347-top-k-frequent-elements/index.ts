function _topKFrequent(nums: number[], k: number): number[] {
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

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  // Array pre allocation in JS for some reason!
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of map) {
    buckets[count]!.push(num);
  }

  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]!);
  }
  return result.slice(0, k);
}

console.log(`ans: ${topKFrequent([1, 1, 1, 2, 2, 3], 2)}`); // [1, 2]
console.log(`ans: ${topKFrequent([1], 1)}`); // [1]
console.log(`ans: ${topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)}`); // [1, 2]

topKFrequent([1, 2, 3, 2, 3, 2, 3, 1, 3, 2], 3); // [1, 2]
console.log(`ans: ${topKFrequent([2, 2, 1, 1, 2], 1)}`);
