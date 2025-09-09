/**
 * https://leetcode.com/problems/trapping-rain-water
 */

const height = [0,1,0,2,1,0,1,3,2,1,2,1];

function trap(height: number[]): number {
  // we need to find the left high points and the right high points and find the negative space
  // high point only needs to be as high as the previous high point (water flows out at the lower point)
  // make an array to track max water height to left and right
  const leftMax = new Array(height.length).fill(0);
  const rightMax = new Array(height.length).fill(0);
  let max = 0;

  // iterate height to determine the left max for each index
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max;
    max = height[i] > max ? height[i] : max;
  };

  // reset max then iterate height to determine the right max for each index
  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = max;
    max = height[i] > max ? height[i] : max;
  };

  // count the trapped water
  let count = 0;

  // iterate throught height. if water level is higher than block level, add it to the count.
  for (let i = 0; i < height.length; i++) {
    // the potential height of the water
    const p = Math.min(leftMax[i], rightMax[i]); // potential height of water
    const t = p - height[i]; // trapped water
    if (t > 0) count += t; // <= 0 means no water is trapped
  }

  return count;
};

trap(height);