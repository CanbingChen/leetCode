var merge = function(intervals) {
    intervals.sort((a,b) => {
        return a[0] - b[0]
    })
    return intervals.reduce((result,item) => {
        const [min,max] = item
        const len = result.length
        if(len <= 0 ){
            return [item]
        }
        const [resultMin,resultMax] = result[len-1]
        if(min > resultMax||max < resultMin){
            return [...result,item]
        }
        result[len-1] = [Math.min(min,resultMin),Math.max(max,resultMax)]
        return result
    },[])
};

console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))