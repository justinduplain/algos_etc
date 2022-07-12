/**********************
 Prompt One

Given a collection of intervals, [start, end], merge and return the overlapping intervals sorted in ascending order of their start times.
 
Example
intervals = [[7, 7], [2, 3], [6, 11], [1, 2]]
 
The interval [1, 2] merges with [2, 3] while [7, 7] merges with [6, 11]. There are no more overlapping intervals. The answer is [[1, 3], [6, 11]].
 
Function Description
Complete the function getMergedIntervals in the editor below.
 
getMergedIntervals has the following parameter(s):
    int intervals[[n][2]]:  the time intervals
 
Returns
    int[][2]: the merged intervals in sorted order
 
Constraints
* 1 ≤ n ≤ 105
* 1 ≤ intervals[i][2] ≤ 109
* intervals[i][0] ≤ intervals[i][1] for all i
********************* */

const getMergedIntervals = array => {
  console.log(array)
}

/**********************
| Prompt Two

Find 2nd largest number from an array [3,4,6,1,2,7,4,5,9,9,8,7,6,5,3,4,8,4,5,4,5,4]

Doubled numbers don't count
**********************/

const secondLargest = array => {
  let [largest, second] = [-Infinity, -Infinity]
  array.forEach(val => {
    if (val > largest) {
      second = largest
      largest = val
    } else if (val > second && val < largest) second = val
  })
  return second
}

secondLargest([
  8, 3, 4, 6, 1, 2, 7, 4, 5, 9, 9, 8, 7, 6, 5, 3, 4, 8, 4, 5, 4, 5, 4,
]) //8

/**********************
| Prompt Three

Create a function that takes in a string and returns the nth index of the first non-repeating character in the string. Indexes should be counted as starting at 1 (not 0)

eg. getUniqueCharIndex('evaluate') //returns 2 as v is the first unique character counted from first index as 1.

**********************/

function firstNonRepeatingCharacter(string) {
  let map = {}
  for (let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    map[char] ? map[char]++ : map[char] = 1;
  }
  for (let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    if (map[char] === 1) return i
  }
  return -1;
}














getUniqueCharIndex('evaluate')
getUniqueCharIndex('srs')
getUniqueCharIndex('prprprprprprprprtttttyyyxyz')
