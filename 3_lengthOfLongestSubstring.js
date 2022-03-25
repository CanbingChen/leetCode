function lengthOfLongestSubstring(s){
    const len = s.length
    let left = 0
    let right = 0
    let max = 0
    let map = new Map()
    while(left<len&&right<len){
        if(map.has(s[right])){
            left = map.get(s[right])+1
            right = left
            map = new Map()
        }else{
            max = Math.max(max,right-left+1)
            map.set(s[right],right)
            right++
        }
    }
    return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))