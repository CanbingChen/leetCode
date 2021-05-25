/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    citations.sort((a,b) => b-a)
    const result = citations.findIndex((item,i) => {
        return item === i+1
    })
    if(result>=0)return result +1
    return 0
};

console.log(hIndex([3,0,6,1,5]))