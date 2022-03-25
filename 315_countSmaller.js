

var countSmaller = function(nums) {
    const len = nums.length
    const result = (new Array(len)).fill(0)
    for(let i = len-2;i>=0;i--){
        const item = nums[i]
        for(let j = i+1;j<len;j++){
            if(item>nums[j]){
                result[i] = result[j]+1
                break;
            }
        }
    }
    return result
};



console.log(countSmaller([2,0,1]))

// console.log(countSmaller([-1,-1]))