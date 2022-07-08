// link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1]
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) left = mid + 1
    else right = mid
  }
  return nums[left]
}

//my solution
// var findMin = function (nums) {
//   let [i, left] = [0, true] //defaults from the left
//   let last = nums.length - 1
//   let min
//   if (nums[last] < nums[0]) [i, left] = [last, false] // run from the right
//   if (left) {
//     min = nums[0]
//     while (min > nums[i + 1]) {
//       min = nums[i + 1]
//       i++
//     }
//   } else {
//     //run from the right
//     min = nums[last]
//     while (min > nums[i - 1]) {
//       min = nums[i - 1]
//       i--
//     }
//   }
//   return min
// }
