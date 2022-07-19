//link: https://www.algoexpert.io/questions/merge-sorted-arrays

const mergeToTarget = (array, target) => {
  if (target.length === 0) return array;
  if (array[0] >= target[target.length -1]) {
     target = target.concat(array)
   } else if (array[array.length - 1] <= target[0]) {
     target = array.concat(target);
   } else {
     let temp = []
     while(array.length && target.length) {
       array[0] <= target[0] ? temp.push(array.shift()) : temp.push(target.shift())
     }
     target = temp.concat(target).concat(array)
   }
  return target;
}

function mergeSortedArrays(arrays) {
 const start = performance.now();
 arrays = [...arrays]
 let target = arrays.pop()
 arrays.forEach( array => {target = mergeToTarget(array, target)})
 console.log(performance.now() - start)
 return target
}


