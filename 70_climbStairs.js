var climbStairs = function(n) {
    if(n<=1)return n
    if(n === 2)return 2
    let left = 1
    let right = 2
    let result = 0
    for(let i = 3;i<=n;i++){
        result = left+right
        left = right
        right = result
    }
    return result
};

console.log(climbStairs(3))