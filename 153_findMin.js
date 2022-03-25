function findMin(nums){

    const len = nums.length
    let left = 0
    let right = len - 1
    while(left<right){
        const mid = Math.floor((left+right)/2)
        if(nums[right]>nums[mid]){
            right = mid 
            
        }else{
            left = mid+1
        }


    }
   return nums[left]

}

console.log(findMin([4,5,6,7,0,1,2]))