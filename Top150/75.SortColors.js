/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (!nums || nums.lemgth <= 1) return;
  let start = 0,
    end = nums.length - 1,
    index = 0;
  while (index <= end) {
    if (nums[index] === 0) {
      [nums[start], nums[index]] = [nums[index], nums[start]];
      index++;
      start++;
    } else if (nums[index] === 2) {
      [nums[index], nums[end]] = [nums[end], nums[index]];
      end--;
    } else {
      index++;
    }
  }
};
