function isPalindrome(x: number) {
  const split = x.toString().split("");
  const legnth = split.length;
  const rightSide = split.slice(0, Math.floor(legnth / 2));
  const leftSide = split.slice(Math.ceil(legnth / 2));
  const reversedRightSide = rightSide.reverse();

  const isPalindrome = reversedRightSide.join() === leftSide.join();
  return isPalindrome;
}

console.clear();
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// console.log(isPalindrome(-42024));
// console.log(isPalindrome(1221));
// console.log(isPalindrome(125521));
// console.log(isPalindrome(1250021));
