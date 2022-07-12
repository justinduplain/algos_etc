//link: https://www.algoexpert.io/questions/spiral-traverse 

function spiralTraverse(array) {
  let result = [];
  // calculates total elements in the array
  let elements = array[0].length * array.length
  // assigns max limits for columns and rows
  let xMax = array[0].length - 1;
  let yMax = array.length - 1;
  //adds a counter for the elements and sets minimums
  let [i, xMin, yMin] = [1, 0, 0]
  // performs the loop as long as all elements have not been seen
  while(i <= elements) {
    // at beginning of loop, set starting points
    let [x, y] = [xMin, yMin]
    // traverse right, adding values and incrimenting counters
    // we watch i in each for loop for the edge case that all elements 
    // have been visited but the iteration continues
    while(x <= xMax && i <= elements) {
     result.push(array[y][x])
     x++
     i++
    }
    // now that x is at the max we can reduce the max level before the next loop
    xMax--
    //brings x back to the last index, the final loop above pushed it past the final column
    x--
    //not that we traversed this row we can push it out of the scope
    yMin++
    //incriments to the next row
    y++
    //other while loops set up similar to above
    //traverse down
    while(y <= yMax && i <= elements) {
      result.push(array[y][x])
      y++
      i++
    }
    y--
    x--
    yMax--
    //traverse left
    while(x >= xMin && i <= elements){
      result.push(array[y][x])
      x--
      i++
    }
    x++
    y--
    xMin++
    //traverse up
    while(y >= yMin && i <= elements){
      result.push(array[y][x])
      y--
      i++
    }
  }  //if i <= number of elements, will loop again
  return result;
}
