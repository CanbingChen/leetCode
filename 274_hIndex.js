/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    citations.sort((a,b) => b-a)
    let result = 0
    console.log(citations,'citations')
    citations.forEach((item,i) => {
        if(item >= i+1){
            result = Math.max(result,result +1)
        }
    })
    return result
};

console.log(hIndex([3,0,6,1,5]))