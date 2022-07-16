//link: https://www.algoexpert.io/questions/laptop-rentals

const laptopRentals = times => {
  const graph = []
  let max = 0;
  times.forEach(interval => {
    let [i, j] = [interval[0], interval[1]]
    while (i < j) {
      graph[i] ? graph[i]++ : graph[i] = 1;
      graph[i] > max ? max = graph[i] : null;
      i++
    }
  })
  return max;
}

