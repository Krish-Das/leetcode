function isPalindrome(x: number) {
  return x === Number(x.toString().split("").reverse().join(""));
}

console.clear();
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

console.log(isPalindrome(42024));
console.log(isPalindrome(-42024));
console.log(isPalindrome(1221));
console.log(isPalindrome(125521));
console.log(isPalindrome(1250021));
