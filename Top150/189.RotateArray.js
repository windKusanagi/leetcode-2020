/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (!nums || !k) return;
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k-1);
  reverse(nums, k, nums.length - 1);
};

const reverse = (arr, left, right) => {
  let temp;
  while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
};