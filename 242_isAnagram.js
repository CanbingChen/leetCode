/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s === t)return false
    const sb = s.split('').sort().join('')
    const tb = t.split('').sort().join('')
    console.log(sb,tb)
    return sb === tb
};

console.log(isAnagram('anagram','nagaram'))