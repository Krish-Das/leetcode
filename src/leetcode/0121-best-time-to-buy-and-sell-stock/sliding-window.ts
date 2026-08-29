function maxProfit(prices: number[]): number {
  let maxProfit = 0
  for (let R = 0, L = 0; R < prices.length && L <= R; R++) {
    // biome-ignore lint/style/noNonNullAssertion: 0 <= L <= R <= len
    const profit = prices[R]! - prices[L]!
    maxProfit = Math.max(maxProfit, profit)
    if (profit < 0) L = R
  }
  return maxProfit
}

export { maxProfit }
