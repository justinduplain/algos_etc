// PROMPT //

/*
Link: https://www.algoexpert.io/questions/find-three-largest-numbers

  Write a function that takes in an array of at least three integers and,
  without sorting the input array, returns a sorted array of the three largest
  integers in the input array.

  Sample Input = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
  Sample Output = [18, 141, 541]

*/

//helper function that checks a single value against and updates highsArray
function checkSingleValue(val, highs) {
  for (let i = 2; i >= 0; i--) {
    if (val >= highs[i]) {
      highs.splice(i + 1, 0, val)
      return highs.splice(-3)
    }
  }
  return highs
}
function findThreeLargestNumbers(array) {
  let highs = [-Infinity]
  array.forEach(val => (highs = checkSingleValue(val, highs)))
  return highs
}
