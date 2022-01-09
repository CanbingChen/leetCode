var twoSum = function(nums, target) {
    const map = new Map()
    for(let i =0;i<nums.length;i++){
        console.log(map)
        if(map.get(nums[i]) !== undefined){
            return [map.get(nums[i]),i]
        }else{
            map.set(target-nums[i],i)
        }
    }
};
console.log(twoSum([2,7,11,15],9))