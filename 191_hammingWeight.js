function hammingWeight(num){
    const s = num.toString(2)
    const str = s.replace(/0/gi,'')
    console.log(str,s,num)
    return str.length
}


console.log(hammingWeight(00000000000000000000000000001011))