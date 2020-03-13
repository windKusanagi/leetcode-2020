/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max_cur= nums[0], max = nums[0];;

  for (let i = 1; i < nums.length; i ++) {
    max_cur = Math.max(nums[i] + max_cur, max_cur);
    if (max_cur > max){
      max = max_cur;
    }
  };

  return max;
};

