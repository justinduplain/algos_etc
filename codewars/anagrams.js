// link: https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// SOLVING WITH SORT //

function anagrams(word, words) {
  const sortedWord = word.split('').sort().join('')
  return words.filter(function (w) {
    return w.split('').sort().join('') === sortedWord
  })
}

// SOLVING WITHOUT SORT //

// function objSameVals(obj1, obj2) {
//   const obj1Length = Object.keys(obj1).length;
//   const obj2Length = Object.keys(obj2).length;

//   if(obj1Length === obj2Length) {
//       return Object.keys(obj1).every(
//           key => obj2.hasOwnProperty(key)
//              && obj2[key] === obj1[key]);
//   }
//   return false;
// }

// function anagrams(word, words) {
// const source = {};
// const result = [];
// for (var i = 0; i < word.length; i++) {
//   if (source.hasOwnProperty(word.charAt(i))) {
//     source[word.charAt(i)]++
//   } else source[word.charAt(i)] = 1;
// }
// words.forEach(string => {
//   const check = {}
//   for (var i = 0; i < string.length; i++) {
//     if (check.hasOwnProperty(string.charAt(i))) {
//       check[string.charAt(i)]++
//     } else check[string.charAt(i)] = 1;
//   }
//   if (objSameVals(source, check)) {
//     console.log('got one')
//     result.push(string)
//   }
// })
// return result
// }

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
