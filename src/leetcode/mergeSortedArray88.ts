/**
 * https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[] = [0], m: number, nums2: number[] = [], n: number): void {

    let i = m-1;
    let j = n - 1;
    let k = nums1.length - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--
        } else {
            nums1[k] = nums2[j];
            j--
        }
        k--
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--
        k--
    }
};

merge([2,0], 1, [1], 1);
