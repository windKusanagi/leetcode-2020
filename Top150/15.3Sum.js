/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const sum = 0 - nums[i];
      let head = i + 1;
      let end = len - 1;
      while (head < end) {
        if (nums[head] + nums[end] === sum) {
          res.push([nums[i], nums[head], nums[end]]);
          while (nums[head] === nums[head + 1]) head++;
          while (nums[end] === nums[end] - 1) end--;
          head++;
          end--;
        } else if (nums[head] + nums[end] > sum) {
          end--;
        } else {
          head++;
        }
      }
    }
  }
  return res;
};

const a = [-1, 0, 1, 2, -1, -4];
console.log(threeSum);
