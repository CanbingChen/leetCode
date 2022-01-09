var threeSum = function(nums) {
    const result = []
    const len = nums.length
    const cache = new Set()
    if(len<=0)return nums
    nums = nums.sort((a,b) => a-b)
    console.log(nums)
    for(let i = 0;i<len-2;i++){
       if(nums[i]>0)return result
       let left = i+1
       let right = len-1
       while(left<right){
        if(nums[i]+nums[left]+nums[right]>0){
            right--
        }else if(nums[i]+nums[left]+nums[right]<0){
            left++
        }else{
            const list = [nums[i],nums[left],nums[right]]
            const key =list.join()

            if(!cache.has(key)){
                result.push(list)
                cache.add(key)
            }
           
            left++
            right--
        }
       }
     
    }
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))