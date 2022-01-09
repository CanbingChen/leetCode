var checkValidString = function(s) {
    const len = s.length
    const list1 = []
    const list2 = []
    for(let i = 0;i<len;i++){
        if(s[i] === '('){
            list1.push(i)
        }
        if(s[i] === '*'){
            list2.push(i)
        }
        if(s[i] === ')'){
           if(list1.length<=0&&list2.length<=0){
               return false
           }
           if(list1.length>0){
               list1.pop()
           }else{
               list2.pop()
           }
        }
    }
    while(list1.length>0&&list2.length>0){
        const len1 = list1.length
        const len2 = list2.length
        if(list1[len1-1]>list2[len2-1])return false
        list1.pop()
        list2.pop()
    }
    return list1.length<=0
};
console.log(checkValidString('('))