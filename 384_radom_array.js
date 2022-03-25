var Solution = function(nums) {
    this.initList = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.initList
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const list = this.initList.map(item => item)
    let len = list.length
    for(let i = 0;i<len;i++){
        const index = Math.floor(Math.random()*(len-i))+i
        const tmp = list[index]
        list[index] = list[i]
        list[i] = tmp
    }
    return list 
};

const solution = new Solution([1, 2, 3])
console.log(solution,'=============')
console.log(solution.shuffle(),'111111111111')
console.log(solution.reset())
console.log(solution.shuffle())
