var lengthOfLongestSubstring = function(s) {

    const len = s.length
    let left = 0
    let right = 0
    let max = 0
    let map = new Map()
    while(left<len&&right<len){
        const item = s[right]
        if(map.get(item)){
           left = map.get(item)
           right = left
            map = new Map()
        }else{
            max = Math.max(right - left+1,max)
            map.set(item,right+1)
       right++
            
           
        }
       console.log(map,max,left,right)
    } 
    return max
};
console.log(lengthOfLongestSubstring("abcdebdosabsaa"))
