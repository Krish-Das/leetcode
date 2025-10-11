function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();

  for (const i of s) {
    const count = map.get(i);
    if (!count) {
      map.set(i, 1);
      continue;
    }
    map.set(i, count + 1);
  }

  for (const i of t) {
    let count = map.get(i);
    if (!count) return false;

    map.set(i, --count);

    if (count <= 0) map.delete(i);
  }

  console.info("map:", map);

  return !map.size;
}

// console.clear();
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("car", "rat"));
