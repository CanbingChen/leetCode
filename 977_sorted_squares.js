/**
 * 时间复杂度on
 * @param {number[]} nums
 * @return {number[]}
 */


var sortedSquares = function (nums) {
  const len = nums.length;
  const index = nums.findIndex((item) => item >= 0);
  const result = [];
  if(index<0){
    return nums.reverse().map(item => item*item)

  }
  const leftNums = nums.splice(0, index);
  
  let i = index - 1,
    j = 0;
  while (j < len - index || i >= 0) {
    const leftValue = Math.pow(leftNums[i],2)
    const rightValue = Math.pow(nums[j],2)
    if(i<0){
        result.push(rightValue);
        j++
        continue;
    }
    if(j >= len - index){
        result.push(leftValue);
        i--;
        continue;
    }
    if (leftValue <= rightValue) {
      result.push(leftValue);
      i--;
      continue;
    }
    result.push(rightValue);
    j++
  }
  return result
};
console.log(sortedSquares([-4,-1]));
