/**
 * https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. 
 * Then return the number of elements in nums which are not equal to val.
 */

const numsA = [3, 2, 2, 3];

// const nums = [3,2,2,3], 3
// Output: 2, nums = [2,2,_,_]

function removeElement(nums: number[], val: number): number {

  let t = 0;

  // iterate through the array and compare the focus to the val, place it at the pointer if not a match
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[t] = nums[i] as number;
      t++;
    }
  }

  return t
    
};

removeElement(numsA, 3);
