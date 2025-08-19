//link:https://www.algoexpert.io/questions/three-number-sum 

function threeNumberSum(array, target) {
  array = array.sort((a, b) => a - b)
  let result = []
  let last = array.length -1
  let [left, mid, right] = [0, 1, last]
  while(left < right){
    while(right > mid) {
      if (array[left] + array[mid] + array[right] > target) {
        right--
      } else if(array[left] + array[mid] + array[right] === target){
        result.push([array[left], array[mid], array[right]])
        mid++
      } else if(array[left] + array[mid] + array[right] < target){
        mid++
      }
    }
    left++
    mid = left + 1
    right = last
  }
  return result
}
