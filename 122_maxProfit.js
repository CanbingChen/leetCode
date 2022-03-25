var maxProfit = function(prices) {

    let result = 0
    const len = prices.length
    const list = new Array(len).fill(0).map(_ => [0,0])
    list[0][0] = 0
    list[0][1] = -prices[0]
    for(let i = 1;i<len;i++){
        list[i][0] = Math.max(list[i-1][0],list[i-1][1]+prices[i])
        list[i][1] = Math.max(list[i-1][0]-prices[i],list[i-1][1])

    }
    return list[len-1][0]
    console.log(list)

};


console.log(maxProfit([7,1,5,3,6,4]))