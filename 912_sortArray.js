function sortArray(nums){
    if(nums.length<=1)return nums
    const len = nums.length
    const mid = Math.floor(len/2)
    const left = []
    const right = []
    const midValue = nums.splice(mid,1)
    nums.forEach(item => {
        if(item<=midValue){
            left.push(item)
        }else{
            right.push(item)
        }
    })
    return [...sortArray(left),midValue,...sortArray(right)]
}