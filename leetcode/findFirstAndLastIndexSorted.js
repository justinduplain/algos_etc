//link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

var searchRange = function (nums, target) {
  const output = [-1, -1]
  for (let i = 0; i < nums.length; i++) {
    if (output[0] === -1) {
      if (nums[i] === target) {
        output[0] = i
      }
    }
    if (nums[i] === target) {
      output[1] = i
    }
    if (nums[i] > target) break
  }
  return output
}

/*

Runtime: 68 ms, faster than 86.65% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.

Memory Usage: 42.5 MB, less than 72.40% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.

*/
