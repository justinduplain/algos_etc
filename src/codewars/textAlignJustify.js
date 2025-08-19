//link: https://www.codewars.com/kata/537e18b6147aa838f600001b 

//helper function takes in a line's words in an array and
//formats it correctly
const makeLine = (line, width, charCount) => {
  //takes care of the last line in the series
  if(line.length <= 1) return line.join('');
  const oHs = new Array(line.length + width - charCount).fill(' ')
  while(oHs && oHs.length > 0) {
    for (let i = 0; i < line.length - 1; i++) {
      if(oHs.length) line[i] = line[i].concat(oHs.pop())
    }
  }
  return(line.join(''))
}

//recursive solution
function justify(text, width, result=[]) {
  if (text === ' ' || text.length === 0) { //base case
    return result.join('\n')
  }
  text = text.split(' ');
  let [charCount, line, lineFinished] = [0, [], false];
  while(!lineFinished) { //pack the line
    if(text[0] && charCount + text[0].length <= width) {
      charCount+= text[0].length + 1;
      line.push(text.shift());
    } else {lineFinished = true;}
  }
  if(text.length === 0) {
    line = [line.join(' ')]
    text = []
  };
  result.push(makeLine(line, width, charCount))
  //play it again sam;
  return justify(text.join(' '), width, result)
}

