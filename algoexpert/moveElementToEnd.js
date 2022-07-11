// link: https://www.algoexpert.io/questions/move-element-to-end

function moveElementToEnd(array, toMove) {
  let [left, right] = [0, array.length - 1]
  while(left <= right) {
    if(array[left] === toMove) {
      array.push(array.splice(left, 1)[0])
      right--
    } else left++
  }
  return array;
}
