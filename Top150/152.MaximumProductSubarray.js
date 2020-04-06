/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = nums[0];
  let cur_min = nums[0];
  let cur_max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const pre_max = cur_max;
    cur_max = Math.max(Math.max(pre_max * nums[i], cur_min * nums[i]), nums[i]);
    cur_min = Math.min(Math.min(pre_max * nums[i], cur_min * nums[i]), nums[i]);
    res = Math.max(res, cur_max);
  }

  return res;
};
