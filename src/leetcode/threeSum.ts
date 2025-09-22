// https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150

const nums = [-1,0,1,2,-1,-4]

function threeSum(nums: number[]): number[][] {

    nums.sort((a, b) => a - b)
  const solution: number[][] = [];
  const len = nums.length;

  // with sorted array we can start from the left
  for (let i = 0; i < nums.length; i++) {
    // if value is 0 or greater, then we cant get 0 result
    if (nums[i] > 0) {
      break;
      // skip duplicates of current index
    } else if (nums[i] === nums[i-1]) {
      continue;
    }

    let [l, r] = [i+1, len-1]; 
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        // valid triplet
        solution.push([nums[i], nums[l], nums[r]])

        // iterate
        l++
        r++

        // prevent duplicates by checking for same values on both l/r pointers
        while (l < r && nums[l] === nums[l-1]) l++
        while (l < r && nums[r] === nums[r+1]) r--
      }
    }
  }
  return solution;
};

threeSum(nums);