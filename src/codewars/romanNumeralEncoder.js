function solution(number) {
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
