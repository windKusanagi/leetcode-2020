/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices || prices.length <= 1) return 0;
  let min = Infinity,
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};
