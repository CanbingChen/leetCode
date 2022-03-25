var addStrings = function(num1, num2) {
    
    let maxLen = Math.max(num1.length,num2.length)
    const s1 = num1.padStart(maxLen,0)
    const s2 = num2.padStart(maxLen,0)
    console.log(s1,s2)
    let result = ''
    let f = 0
    for(let i = maxLen-1;i>=0;i--){
        const sum = parseInt(s1[i])+parseInt(s2[i])+f
        console.log(sum,f,'sum')
        result = (sum%10)+result
        f = Math.floor(sum/10)
    }

    if(f>0){
        result = f+result
    }
    return result
};

console.log(addStrings("584","18"))