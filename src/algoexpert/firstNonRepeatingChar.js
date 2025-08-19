//link: https://www.algoexpert.io/questions/first-non-repeating-character

function firstNonRepeatingCharacter(string) {
  let map = {}
  for (let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    map[char] ? map[char]++ : map[char] = 1;
  }
  for (let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    if (map[char] === 1) return i
  }
  return -1;
}
