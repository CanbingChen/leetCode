var merge = function(nums1, m, nums2, n) {
    let len = m+n-1
    while(len>=0){
        if(n<1){
            nums1[len--] = nums1[--m]
            continue
        }
        nums1[len--] = nums1[m-1]>=nums2[n-1]?nums1[--m]:nums2[--n]
    }

};

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
merge(nums1,3,nums2,3)
console.log(nums1,'====')