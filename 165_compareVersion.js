var compareVersion = function(version1, version2) {
    const list1 = version1.split('.')
    const list2 = version2.split('.')
    const len1 = list1.length
    const len2 = list2.length
    const maxLen = Math.max(len1,len2)
    for(let i = 0;i<maxLen;i++){
    list1[i] = list1[i]||'0'
    list2[i] = list2[i]||'0'
    }
    for(let i = 0;i<maxLen;i++){
        if(parseInt(list1[i])<parseInt(list2[i])){
            return -1
        }
        if(parseInt(list1[i])>parseInt(list2[i])){
            return 1
        }
    }
    return 0
};

console.log(compareVersion("0.1","1.0"))