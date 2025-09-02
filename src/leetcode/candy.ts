/**
 * https://leetcode.com/problems/candy
 * 
 */

const input = [1,2,3,4,5,4,2,1];

function candy(ratings: number[]): number {
  
    // create a same-length array to track accumulations
    // each child gets at least one candy
    const candies = new Array(ratings.length).fill(1);

    // go left to right. Add a piece to the right neighbor if rated higher.
    for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i-1]){
        candies[i] = candies[i-1] + 1;
      }
    }
    // go right to left. Add a piece to left neighbor if rated higher.
    for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
        candies[i] = candies[i+1] + 1;
      };
    }

    // add up the tracking array;
    return candies.reduce((acc, n) => acc + n, 0);
};

candy(input);