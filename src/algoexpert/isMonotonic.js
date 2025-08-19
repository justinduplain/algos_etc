//link: https://www.algoexpert.io/questions/monotonic-array

function isMonotonic(array) {
  let [a, b] = [0, 1]
  while (array[a] - array[b] === 0) {
    a++
    b++
  }
  let decreasing = (array[a] > array[b])
  for (let i = b; i < array.length; i++) {
    if (decreasing) {
      if (array[i] > array[i-1]) return false;
    } else {
      if (array[i] < array[i-1]) return false;
    }
  }
  return true;
}
