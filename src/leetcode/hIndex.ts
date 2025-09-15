/**
 * https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * Input: citations = [3,0,6,1,5]
 * Output: 3
 * Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
 * Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
 */

//     
const a = [1, 9, 8, 5, 0, 0, 0] // 9, 8, 5, 1, 0
const c = [3,0,6,1,5]; // 6, 5, 3, 1, 0


function hIndex(citations: number[]): number {
    
  citations.sort((a, b) => b - a) // high to low

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) return i;
  }

  return citations.length; 
};

hIndex(a);
hIndex(c);