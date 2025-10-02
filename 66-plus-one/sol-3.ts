function plusOne(digits: number[]) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i]! + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  return carry ? [carry, ...digits] : digits;
}

console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([1, 0, 9]));
console.log(plusOne([]));
