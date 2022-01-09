/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    function quickSort(list){
        const len = list.length
        if(len<=1)return list
        const left = []
        const right = []
      
        const midValue = list.splice(Math.floor(len/2),1)
        list.forEach(item => {
            if(item<=midValue){
                left.push(item)
            }else{
                right.push(item)
            }
        })
        return [...quickSort(left),...midValue,...quickSort(right)]
    }
    const result = quickSort(nums)
    return result[result.length-k]

};

console.log(findKthLargest([3,2,1,5,6,4],2))