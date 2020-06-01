/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || !nums.length) return nums;
  if (nums.length <= 2) return nums.length;
  let res = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[res - 2]) {
      nums[res++] = nums[i];
    }
  }
  return res;
};
