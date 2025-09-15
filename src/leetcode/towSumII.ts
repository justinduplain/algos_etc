// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan-v2&envId=top-interview-150


const nums = [-3,2,7,11,15];
const t = 9;

function twoSum(numbers: number[], target: number): number[] {
  let [l, r] = [0, numbers.length - 1];
  while (l < numbers.length && r > 0) {
    if (numbers[l] + numbers[r] === target) {
      return [l+1, r+1];
    } else if (numbers[l] + numbers[r] > target) {
      r--
    } else if (numbers[l] + numbers[r] < target) {
      l++
    };
  };
  return [0,0]
}

twoSum(nums, t);