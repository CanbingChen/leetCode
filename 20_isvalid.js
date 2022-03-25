/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    const map = {
        "(": ')',
        "{": '}',
        "[": ']'
    }
    const len = s.length
    const stack = []
    for(let i=0;i<len;i++){
        const char = s[i]
        const sLen = stack.length
        if(map[stack[sLen-1]] === char){
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return stack.length<=0
};

console.log(isValid('()'))