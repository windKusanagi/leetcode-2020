/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 1; i < nums.length; i++) {
    sum += i;
  }

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }

  return sum;
};
