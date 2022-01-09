function maxSum(n1,n2){
    const maxLen = Math.max(n1.length,n2.length)
    const num1 = n1.padStart(maxLen,0)
    const num2 = n2.padStart(maxLen,0)
    let result = ''
    let f = 0
    for(let i =maxLen-1;i>=0;i--){
        const sum = parseInt(num1[i])+parseInt(num2[i])+f    
        f = Math.floor(sum/10)    
        result = sum%10 +result
    }
    if(f>0){
        result = 1+result
    }
    return result
}

console.log(maxSum("9007199254740991","1234567899999999999"))