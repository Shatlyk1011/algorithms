// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Max Profit
const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currProfit = prices[j] - prices[i];
      if (profit < currProfit && currProfit > 0) {
        profit = currProfit;
      }
    }
  }
  return profit;
};

// Max profit (BEST)
const maxProfit2 = (prices) => {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }

  return profit;
};

console.log("maxprofit", maxProfit2([7, 1, 5, 3, 6, 4]));
