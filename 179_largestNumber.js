/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    if(nums.every(item => item ===0))nums = [0]
    nums.sort((a,b) => {
        return Number(`${b}${a}`)-Number(`${a}${b}`)
    })
    return nums.join('')
};
console.log(largestNumber([3,30,34,5,9]))