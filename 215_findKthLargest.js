var findKthLargest = function(nums, k) {
    const len = nums.length
    function quickSelect(list,leftNum){
        const leftList = []
        const rightList = []
        const index =  Math.floor(Math.random()*(list.length-1))
      
        const midValue = list.splice(index,1)[0]
        list.forEach(item => {
            if(item<=midValue){
                leftList.push(item)
            }else{
                rightList.push(item)
            }
        })
        const leftLen = leftList.length
        console.log(leftLen,leftNum,midValue,list,leftList,'index')
        if(leftLen + leftNum === len-k)return midValue
        return leftLen + leftNum < len-k?quickSelect(rightList,leftLen + leftNum+1):quickSelect(leftList,leftNum)
    }

    return quickSelect(nums,0)
};

console.log(findKthLargest([3,2,1,5,6,4],2))