/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let nums1 = [1,3]
let nums2 = [2]

//1,2,3,3,4,5,6,7,8,8,9

 var findMedianSortedArrays = function(nums1, nums2) {
    let grArr = []
    let i = 0, 
    j = 0,
    rez = 0;
    let len1 = nums1.length;
    let len2 = nums2.length;
    let rezLen = len1 + len2;
    while ((i < len1) && (j < len2)) {
        if (nums1[i] < nums2[j]) {
            grArr.push(nums1[i]);
            i++;
        }
        else {
            grArr.push(nums2[j]);
            j++;
        }
    }
    for (i; i < len1; i++) {
        grArr.push(nums1[i]);
    }
    for (j; j < len2; j++) {
        grArr.push(nums2[j]);
    }
    console.log(gr);
    if (grArr.length % 2) {
        rez = grArr[((rezLen-1)/2)]
    }
    else{
        rez = (grArr[((rezLen)/2)]+grArr[(rezLen/2)-1]) / 2
        
    }
    console.log(rez);
    return rez
};

findMedianSortedArrays(nums1, nums2)