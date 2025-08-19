// link: https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  let [i, left] = [0, true] //run from the left
  if (target < nums[0]) [i, left] = [nums.length - 1, false] // run from the right
  if (left) {
    while (target >= nums[i]) {
      if (nums[i] === target) return i
      i++
    }
  } else {
    //run from the right
    while (nums[i] >= target) {
      if (nums[i] === target) return i
      i--
    }
  }
  return -1
}
