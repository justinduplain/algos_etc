/**
 * https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 * 
 */



const numsA = [2,2,1,1,1,2,2];

// solution 1 -- O(n) space due to hashmap

// function majorityElement(nums: number[]): number {
//   const map: Record<string, number> = {};

//   // count up the qty of each number
//   for (const num of nums) {
//     const key: string = String(num);
//     map[key] ? map[num]++ : map[num] = 1;
//   }

//   // vars to keep track of highest count
//   let num = 0;
//   let count = 0;

//   // iterate through the key/value pairs and find the highest count
//   for (const [key, value] of Object.entries(map)) {
//     if (value > count) {
//       count = value;
//       num = parseInt(key);
//     }
//   }

//   return num;
    
// };


// solution 2 - O(1) space
function majorityElement(nums: number[]): number {
  // uses moore's voting algo
  let [candidate, count] = [0, 0];

  for (const num of nums) {
    // when the counter gets down to 0 we have a new candidate
    if(count == 0) candidate = num;
    // if the current item is our candidate we'll increment a counter 
    // the counter is relative to other candidates, not to the actual instances of the item
    if(num === candidate) {
      count++
    } else count--;
  }

  return candidate;
};

majorityElement(numsA);