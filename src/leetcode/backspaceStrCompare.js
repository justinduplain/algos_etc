// link: https://leetcode.com/problems/backspace-string-compare
const makeFinal = str => {
  let arr = [...str]
  let final = []
  for (let i = 0; i < arr.length; i++) { 
     arr[i] === '#' ? final.pop() : final.push(arr[i]);
  }
  return final
}

var backspaceCompare = function(s, t) {
    return makeFinal(s).join('') === makeFinal(t).join('')
};

