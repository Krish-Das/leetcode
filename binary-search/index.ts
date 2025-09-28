function search(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const element = array[mid];

    if (element === target) {
      return mid;
    } else if (element < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found
}

console.clear();
console.log(search([1, 2, 3, 4, 5, /**/ 6, 7, /**/ 8, 9, 10, 11, 12], 5));
console.log(search([1, 2, 3, 4, 5, /**/ 6, 7, /**/ 8, 9, 10, 11, 12], 6));
console.log(search([1, 2, 3, 4, 5, /**/ 6, 7, /**/ 8, 9, 10, 11, 12], 7));
console.log(search([1, 2, 3, 4, 5, /**/ 6, 7, /**/ 8, 9, 10, 11, 12], 8));
console.log(search([1, 2, 3, /**/ 4, 5, /**/ 6, 7, 8], 6));
console.log(search([1, 2, 3, /**/ 4, /**/ 5, 6, 7], 5));
console.log(search([1, 2, 3, 4, 5, /**/ 6, /**/ 7, 8, 9, 10, 11], 6));
console.log(search([1, 2, 3, 4, 5, /**/ 6, /**/ 7, 8, 9, 10, 11], 12));
