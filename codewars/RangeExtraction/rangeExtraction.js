/*
PROMPT
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

A format for expressing an ordered array of integers is to use a comma separated array of either individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a array of integers in increasing order and returns a correctly formatted string in the range format.

Example:
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

const solution = array => {
  //x points to the low value in a range
  //a & b are used as pointers as we stetp through the array
  //result holds the output
  let [x, a, b, result] = [0, 0, 1, []]
  //helper function to update our pointers
  const updatePointers = () => {
    a = b
    x = b
    b++
  }

  //run through the array from the left and stop at the end
  while (a < array.length) {
    /* If x and a are pointing at the same index, then we haven't
    started evaluating a range *yet* */
    if (x === a) {
      //if the right value is more than one higher than left
      //are not evaluating a range.
      if (array[b] - array[a] !== 1) {
        //Add the left number to the result array.
        result.push(array[x])
        updatePointers()
      }
      //if the right value is one number higher than left we MAY be evaluating a range. X stays the same as we evaluate
      if (array[b] - array[a] === 1) {
        a++
        b++
        /* at this point we know that we are trying to evaluate
        a range. if the right value is again one higher, we
        know the range is more than two increments so we will
        iterate through the range. */
        if (array[b] - array[a] === 1) {
          while (array[b] - array[a] === 1) {
            a++
            b++
          }
          result.push(array[x] + '-' + array[a])
          updatePointers()
        } else {
          result.push(array[x], array[a])
          updatePointers()
        }
      }
    }
  }
  return result.join(',')
}

solution([
  -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 25,
]) //"-6,-3-1,3-5,7-11,14,15,17-20,25"
