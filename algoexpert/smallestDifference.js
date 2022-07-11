//link: https://www.algoexpert.io/questions/smallest-difference

function smallestDifference(arrayOne, arrayTwo) {
  // sort the arrays so that we don't have to compare all the numbers
  arrayOne = arrayOne.sort((a, b) => a - b)
  arrayTwo = arrayTwo.sort((a, b) => a - b)
  //make some variables for comparison
  let [absMin, pair, jMax] = [Infinity, [], arrayTwo.length - 1]
  for (let i = 0; i < arrayOne.length; i++) {
    let j = 0;
    let [tempMin, tempPair] = [Infinity, []]
    //while the difference is smaller, see if there is a better option
    while(Math.abs(arrayOne[i] - arrayTwo[j]) < tempMin && j <= jMax){
      tempMin = Math.abs(arrayOne[i] - arrayTwo[j])
      tempPair = [arrayOne[i], arrayTwo[j]]
      j++
    }
    if(tempMin < absMin) {
      absMin = tempMin;
      pair = tempPair;
    }
  }
  //return the result
  return pair;
}

