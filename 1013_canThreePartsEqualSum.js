var canThreePartsEqualSum = function(arr) {
    const sum = arr.reduce((r,i) => r+i,0)
    const len = arr.length
    let first 
    let s = 0
    for(let i = 0;i<len;i++){
        s = s + arr[i]
        if(s === sum/3){
            first = i
            break
        }
    }
    if(first === undefined){
        return false
    }
    let second
    s = 0
    for(let i = first+1;i<len;i++){
        s = s + arr[i]
        if(s === sum/3){
            second = i
            break
        }
    }
    console.log(first,second)
    return second !== undefined&&second<len-1

};

console.log(canThreePartsEqualSum([1,-1,1,-1]))