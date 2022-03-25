var lengthOfLIS = function(nums) {
    const len = nums.length
    if(len<=0)return 0
    const dpList = new Array(len)
    dpList[0] = 1
    let max = 1
    for(let i = 1;i<len;i++){
      
        dpList[i] = 1
        for(let j = 0;j<i;j++){
            if(nums[i]>nums[j]){
                dpList[i] = Math.max(dpList[i],dpList[j]+1)
            }
        }
       
        max = Math.max(dpList[i],max)
    }
    return max
};



console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))