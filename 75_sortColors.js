/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   const len = nums.length;
//   if (len <= 1) return nums;
//   const mid = Math.floor(len / 2);
//   const midData = nums.splice(mid, 1);
//   const leftData = [];
//   const rightData = [];
//   nums.forEach(item => {
//       if(item<=midData){
//         leftData.push(item)
//         return 
//       }
//       rightData.push(item)
//   })
 
//   return [...sortColors(leftData), ...midData, ...sortColors(rightData)];
// };

var sortColors = function (nums) {
    let p0 = p1 = 0
    for(let i = 0;i<nums.length;++i){
        let tmp = nums[i]
        if(nums[i] === 1){
            nums[i] = nums[p1]
            nums[p1] = tmp
            p1++
            continue
        }
        if(nums[i] === 0){
            nums[i] = nums[p0]
            nums[p0] = tmp
            if(p0<p1){
                const d = nums[p1]
                nums[p1] = nums[i]
                nums[i] = d
            }
            p1++
            p0++
        }
    }
};

console.log(sortColors([2,0,2,1,1,0]));
