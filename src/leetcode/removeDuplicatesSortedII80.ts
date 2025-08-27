/**
 *  // https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique
 * element appears at most twice. The relative order of the elements should be kept the same. 
 * 
 * Since it is impossible to change the length of the array in some languages, you must instead have the result
 * be placed in the first part of the array nums. More formally, if there are k elements after removing the
 * duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave
 * beyond the first k elements.
 * 
 * Return k after placing the final result in the first k slots of nums.
 * 
 * Input: nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3
 * respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 */ 
//                      i
// const numsA = [1,1,1,2,2,3];
//                    k


const numsA = [5];

function removeDuplicates(nums: number[]): number {
  // if there's only one item in the array this will return 1

  // use two pointers k, i
  // k will be "left", the index to be filled. i will be 'right', the index being examined
  let k = nums.length > 1 ? 2 : 1;

  for (let i = 2; i < nums.length; i++) {
    // if the iterator value is not the same as the current spot-2, we have a new value
    if (nums[i] !== nums[k-2]) {
      nums[k] = nums[i] as number;
      k++
    } 
  }

  return k;
    
};


removeDuplicates(numsA);
