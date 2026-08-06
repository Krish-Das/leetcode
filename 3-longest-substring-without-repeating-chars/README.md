```ts
function lengthOfLongestSubstring(s: string): number {
  const answers: string[] = [];
  let str = "";
  s.split("").map((item, idx) => {
    if (str.includes(item)) {
      answers.push(str);
      str = "";
    }
    str += item;
  });

  return answers;
}
```
