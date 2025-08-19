//link: https://www.algoexpert.io/questions/nth-fibonacci

const ref = {
  1: 0,
  2: 1,
  3: 1,
}

function getNthFib(n) {
  if (n === 1) return 0;
  if(ref[n]) {
    return ref[n];
  }
  return ref[n] = getNthFib(n-1) + getNthFib(n-2)
}

