// PROMPT //
/*

Link: https://www.algoexpert.io/questions/kadane's-algorithm

 Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each other in the input array).

*/

function kadanesAlgorithm(arr) {
  let subArr = arr[0]
  let maxSum = arr[0]
  for (let i = 1; i < arr.length; i++) {
    subArr = Math.max(subArr + arr[i], arr[i])
    maxSum = Math.max(maxSum, subArr)
  }
  return maxSum
}

let arr = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

kadanesAlgorithm(arr)

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm
