// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let minBuy = Infinity
    
    for(let i = 0 ; i < prices.length; i++) {
        if(prices[i] < minBuy) {
            minBuy = prices[i]
        }
        if(prices[i] - minBuy > maxProfit) {
            maxProfit = prices[i] - minBuy
        }
    }
    
    return maxProfit
    
};