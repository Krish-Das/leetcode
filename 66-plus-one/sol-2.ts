import { test } from "./test";

function plusOne(digits: number[]) {
  let hand = 1; // The problem requires to add the numbers by 1
  let arr: number[] = [];

  for (let i = digits.length; i >= 0; i--) {
    const currentDigit = digits[i - 1];
    const added = (currentDigit ?? 0) + hand;
    const ones = added % 10;
    const tenths = Math.floor((added % 100) / 10);

    if (hand !== 0 || currentDigit !== undefined) arr.unshift(ones);

    hand = tenths;
  }

  return arr;
}

console.clear();
// console.log(test(run));

console.log(plusOne("9".split("").map((s) => Number(s))));
console.log(plusOne("8".split("").map((s) => Number(s))));
