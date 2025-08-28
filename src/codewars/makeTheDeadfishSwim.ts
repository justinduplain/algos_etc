/**
 * https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
 * 
 * Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

*/

const str = "iiisdoso";

export function parse(data: string): number[] {

  const output: number[] = [];
  let current: number = 0;

  for (const c of data) {
    switch (c) {
      case 'i':
        current++;
        break;
      case 'd': 
        current--;
        break;
      case 's':
        current = current**2;
        break;
      case 'o':
        output.push(current);
        break;
      default:
        // ignore other characters
        break;
    }
  }

  return output;
  
}

parse(str);