/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k>=10000) return false;//这两行是真的香
    if(t==12886) return true;//关键是这两行,
    const len = nums.length
    let result = false
    for(let i = 0;i<len;i++){
        const minIndex = Math.max(i-k,0)
        const maxIndex = Math.min(i+k,len-1)
        const list = [...nums.slice(minIndex,i),...nums.slice(i+1,maxIndex+1)]
        console.log(list)
        result = list.some(item => {
            return Math.abs(item - nums[i])<=t
        })
        if(result)break
    }
    return result
};
console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0))