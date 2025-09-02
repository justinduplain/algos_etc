/**
 * 
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 * 
 * 
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
 * 
 */

/**
 * 

profit = 12;
low = 4;

           i
[7,1,5,3,6,4,9]
             j

*/

const pricesA = [7,1,5,3,6,4,9];

function maxProfit(prices: number[]): number {

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
        profit += prices[i] - prices[i-1]; 
    }
  }
  
  return profit;
    
};

maxProfit(pricesA);