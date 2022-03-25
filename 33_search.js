var search = function(nums, target) {
    const len = nums.length
    if(len<=0)return -1
    let left = 0
    let right = len-1
    while(left<right){
        const midIndex = Math.floor((right+left)/2)
        if(nums[midIndex] === target)return midIndex
       if(nums[left]<=nums[midIndex]){
           if(nums[left]<=target&&target<nums[midIndex]){
               right = midIndex -1
           }else{
               left = midIndex +1 
           }
       }else{
           if(nums[midIndex]<target && nums[len-1]>=target){
               left = midIndex +1
           }else{
               right = midIndex -1
           }
       }
    }
  console.log(left)

};

console.log(search([4,5,6,7,0,1,2],0))