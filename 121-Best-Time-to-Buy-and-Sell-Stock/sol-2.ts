function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }

  return profit;
}

console.clear();
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([0]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
