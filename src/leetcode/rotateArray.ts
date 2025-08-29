/**
 * https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 * 
 */



// // brute force option still uses extenal memory
// function rotate(nums: number[], k: number): void {

//   while (k > 0) {
//     nums.unshift(nums.pop() as number);
//     k--;
//   }

// };

//         l
// [10, 7, 6, 5]
//      r

/**
 * Helper function to reverse a portion of an array
 * @param arr the array
 * @param l the left index (start) of the segment
 * @param r the right index (end) of the segment
 * 
 * @returns void, the array is changed in place
 */
function reverseSegment(arr: number[], l: number, r: number): void {
  while(l < r){
    const temp = arr[l] as number;
    arr[l] = arr[r] as number;
    arr[r] = temp;
    l++;
    r--;
  }
}

// use array reversal in place
function rotate(nums: number[], k: number): void {

  // if k is longer than the array it loops, so we need only the end quantity
  k = k % nums.length;

  // reverse the entire array, eg [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1];
  nums.reverse();

  // reorder the portion of k (now at the beginning)
  reverseSegment(nums, 0, k-1);
  
  // put the original section back into order
  reverseSegment(nums, k, nums.length - 1);
};


const numsA = [1,2,3,4,5,6,7];
const k = 3;

rotate(numsA, k);

