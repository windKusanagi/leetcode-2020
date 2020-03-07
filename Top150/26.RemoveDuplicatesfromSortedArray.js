/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length <= 1) return nums.length;
  let len = 1;
  for (let i = 1; i < nums.length; i ++ ){
    if (nums[i] !== nums[i-1]) {
      nums[len] = nums[i];
      len ++;
    }
  }
  return len;
};

const n1 = [1,2,2,4,5,6,7,7];
const n2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(n1), n1);
console.log(removeDuplicates(n2), n2);