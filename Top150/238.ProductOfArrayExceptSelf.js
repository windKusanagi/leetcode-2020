/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = new Array(nums.length).fill(1);
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};
