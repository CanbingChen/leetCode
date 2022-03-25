var search = function(nums, target) {
    if(!nums||nums.length<=0)return -1
    const len = nums.length
    let left = 0
    let right = len-1
    while(left<=right){
        const mid = Math.floor((right+left)/2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[mid] < target){
            left = mid+1
            continue
        }
        if(nums[mid] > target){
            right = mid-1
            continue
        }
        
    }
    return -1
}

console.log(search([-1,0,3,5,9,12],13))