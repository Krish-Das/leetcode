function maxProfit(prices: number[]): number {
  let leftBuy = 0;
  let rightSell = 0;
  let profit = 0;

  while (rightSell < prices.length) {
    const buyingPrice = prices[leftBuy]!;
    const sellPrice = prices[rightSell]!;

    if (buyingPrice < sellPrice) {
      profit = Math.max(profit, sellPrice - buyingPrice);
    } else {
      leftBuy = rightSell;
    }

    rightSell++;
  }

  return profit;
}

console.clear();
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([0]));
// console.log(maxProfit([2, 4, 1]));
// console.log(maxProfit([3, 2, 6, 5, 0, 3]));
