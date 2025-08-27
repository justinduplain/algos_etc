/**
 * Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only once.
 *  The relative order of the elements should be kept the same. Then return the
 *  number of unique elements in nums.
 * 
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five 
 * elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what
 * you leave beyond the returned k (hence they are underscores).
 *
 *  */ 

const numsA = [0,1,1,1,1,2,2,3,3,4];


function removeDuplicates(nums: number[]): number {

  // two pointers
  let t = 0;
  let p = 1;

  while (p < nums.length) {
    if (nums[t] !== nums[p]) { // new number, add it in the next spot
      t++
      nums[t] = nums[p] as number;
    } 

    p++ // advance the pointer

  }

  return t + 1;
    
};

removeDuplicates(numsA);