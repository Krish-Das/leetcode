function addBinary(a: string, b: string): string {
  const bitsA = a.split("").map((v) => Number(v))
  const bitsB = b.split("").map((v) => Number(v))

  const biggest = a.length > b.length ? bitsA : bitsB
  const smallest = a.length <= b.length ? bitsA : bitsB

  let carry = 0
  const arr: number[] = []

  for (let i = 0; i <= biggest.length; i++) {
    const biggestDigit = biggest[i] ?? 0
    const smallestDigit = smallest[i] ?? 0

    arr.unshift((biggestDigit + smallestDigit + carry) % 2)
    carry = Number(biggestDigit + smallestDigit + carry === 2)
  }

  // for (let i = biggest.length - 1; i >= -1; i--) {
  //   const biggestDigit = biggest[i] ?? 0;
  //   const smallestDigit = smallest[i] ?? 0;

  //   arr.unshift((biggestDigit + smallestDigit + carry) % 2);
  //   carry = Number(biggestDigit + smallestDigit + carry === 2);
  // }
  return arr.join("")
}

export { addBinary }

console.clear()
// console.log(addBinary("00", "00"));
// console.log(addBinary("00", "01"));
// console.log(addBinary("00", "10"));
// console.log(addBinary("01", "11"));
// console.log(addBinary("1", "11"));
console.log(addBinary("11", "1")) // "100"
//                     8421;
//                     3210
console.log(addBinary("1010", "1011")) // "10101"
