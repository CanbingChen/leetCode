function search(nums,target,isLast){
    const len = nums.length
    let left = 0,right = len-1;
    while(left<=right){
        const mid = Math.floor((left+right)/2)
        if(nums[mid]<target||(isLast &&nums[mid]<=target)){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return left

}
var searchRange = function(nums, target) {
    const len = nums.length
    if(len<=0)return [-1,-1]
    const fIndex = search(nums,target)
    const lIndex = search(nums,target,true)
    return [fIndex,lIndex]
};

console.log(searchRange([5,7,7,8,8,10],8))