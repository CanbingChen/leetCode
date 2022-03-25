var maxProfit = function(prices) {
    if(!prices)return 0
    const len = prices.length
    if(len<=0)return 0
    let result = 0
    let min = prices[0]
    for(let i = 0;i<len;i++){
        min = Math.min(min,prices[i])
        result = Math.max(result,prices[i]-min)
    }
    return result
};

console.log(maxProfit([7,1,5,3,6,4]))