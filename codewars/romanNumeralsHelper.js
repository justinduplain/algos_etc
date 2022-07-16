/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
*/

class RomanNumerals {
  constructor() {}
}

RomanNumerals.toRoman = number => {
  let [...numStrArr] = JSON.stringify(number)
  console.log(numStrArr)
  let result = []
  let j = 0
  for (let i = numStrArr.length - 1; i >= 0; i--) {
    result.unshift(lookup(numStrArr[i], j))
    j++
  }
  return result.join('')
}

RomanNumerals.fromRoman = string => {
  const translator = {
    I: 1,
    IV: -1,
    IX: -1,
    V: 5,
    X: 10,
    XC: -10,
    XL: -10,
    L: 50,
    C: 100,
    CM: -100,
    CD: -100,
    D: 500,
    M: 1000,
  }
  return Array.from(string).reduce((totaller, r, i, arr) => {
    return translator.hasOwnProperty(`${r}${arr[i + 1]}`)
      ? (totaller += translator[`${r}${arr[i + 1]}`])
      : (totaller += translator[`${r}`])
  }, 0)
}

const lookup = (numChar, place) => {
  switch (place) {
    case 1:
      numChar = [numChar, '0'].join('')
      break
    case 2:
      numChar = [numChar, '00'].join('')
      break
    case 3:
      numChar = [numChar, '000'].join('')
      break
  }
  return map[numChar]
}

const map = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM',
  4000: 'MMMM',
  5000: 'V',
}
