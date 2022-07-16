//link: https://www.algoexpert.io/questions/longest-peak

function longestPeak(array) {
  let [maximum, i, j, k] = [0, 0, 1, 2];
  while (i < array.length - 1) {
    [j, k] = [i - 1, i + 1]
    if(array[j] < array[i] && array[i] > array[k]) {
      while(array[j] < array[j+1]) j--  
      j++
      while(array[k - 1] > array[k]) k++
      maximum = Math.max(k - j, maximum)
    }
    i++
  }
  return maximum
}

