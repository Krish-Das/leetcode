function isValid(s: string): boolean {
  const pairMaps = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const openings = ["(", "{", "["];
  const stack: string[] = [];

  for (let el of s) {
    if (openings.includes(el)) {
      stack.push(el);
      continue;
    }

    const lastStackElement = stack[stack.length - 1];
    const pair = pairMaps.get(el)!;

    if (pair !== lastStackElement) return false;
    stack.pop();
  }

  return !stack.length;
}

console.clear();
console.log(isValid("()[]{}"));
// console.log(isValid("()"));
// console.log(isValid("(]"));
// console.log(isValid("[]"));
// console.log(isValid("([])"));
// console.log(isValid("([])"));
// console.log(isValid("([)]"));
