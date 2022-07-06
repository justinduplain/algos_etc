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

RomanNumerals.toRoman = (number) => "M";

//example 1666 -> 6, 60, 600 1000
//right most char is 6, so this is represented as VI
//next input is 60, which is depicted as LX
//next input is 600, which is depicted as DC,

RomanNumerals.fromRoman = (string) => {
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
  };
  return Array.from(string).reduce((totaller, r, i, arr) => {
    return translator.hasOwnProperty(`${r}${arr[i + 1]}`)
      ? (totaller += translator[`${r}${arr[i + 1]}`])
      : (totaller += translator[`${r}`]);
  }, 0);
};
