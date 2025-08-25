// https://www.codewars.com/kata/550498447451fbbd7600041c/train/typescript

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const c = [121,144,19,161,19,144,19,11];
const d = [231,14641,20736,361,25921,361,20736,361];

export function comp(a1: number[] | null, a2: number[] | null): boolean {

  // quick exits
  if (a1 === null || a2 === null || a1.length !== a2.length) return false; 

  const a: number[] = a1 as number[];
  const b: number[] = a2 as number[];

  /**
   * sort arrays to check in order OR make a JS Map to count squared values,
   * this will have to be done twice, once for each array and then iterated through. 
   * 
   * Will go for sorting first, then compare directly. 
   * */ 

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  // increment through the first array, comparing to the second

  const l = a.length;
  for (let i = 0; i < l ; i++) {
    const sq = a[i] * a[i];
    if (sq !== b[i]) return false;
  }

  return true;

};

comp(c, d);
