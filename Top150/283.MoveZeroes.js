/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0, temp = 0;
  while (i < nums.length) {
    if (nums[i]) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
    i++;
  }
};