function plusOne(digits: number[]): number[] {
  const numberAsString = digits.join("");
  const number = BigInt(numberAsString);
  const added = number + 1n;

  return added
    .toString()
    .split("")
    .map((v) => Number(v));
}

console.clear();
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
