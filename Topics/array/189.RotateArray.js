/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const step = k % nums.length;
  reverse(0, nums.length - 1, nums);
  reverse(0, step - 1, nums);
  reverse(step, nums.length - 1, nums);
  console.log(nums);
};

const reverse = (start, end, arr) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
