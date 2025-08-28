/**
 * https://www.codewars.com/kata/5541f58a944b85ce6d00006a/typescript
 * 
 * Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):
 * if F(n) * F(n+1) = prod: (F(n), F(n+1), true)
 * 
 * If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
 * (F(n), F(n+1), false)
 * 
 * where F(n) is the smallest one such as F(n) * F(n+1) > prod.
 * 
 * 714 ---> (21, 34, true)
 * --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34
 * 
 * 800 --->  (34, 55, false)
 * --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
 * 
 */ 

export const productFib = (prod:number): [number,number,boolean] => {
  let [i, j] = [0, 1];

  while (i * j < prod) {
    const k = i + j;
    i = j;
    j = k;
  }

  return [i, j, i * j === prod];
}

productFib(800);