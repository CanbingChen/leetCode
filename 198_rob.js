var rob = function(nums) {

    if(!nums||nums.length<=0)return 0
    const len = nums.length
    if(len === 1)return nums[0]
    if(len === 2 )return Math.max(nums[0],nums[1])
    let right = Math.max(nums[0],nums[1])
    let left = nums[0]
    let max = 0
    for(let i = 2;i<len;i++){
        console.log(left,right,nums[i])
        max = Math.max(right,left+nums[i])
        left = right
        right = max
    }
    return max
};

console.log(rob([2,7,9,3,1]))