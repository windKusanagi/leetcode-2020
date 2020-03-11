/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (!nums || nums.length === 0) return [];
  const res = [];
  const path = [];
  const used = nums.map(() => false);
  dfs(nums, used, path, res);
  return res;
};

const dfs = (nums, used, path, res) => {
  if (path.length === nums.length) {
    res.push([...path]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      used[i] = true;
      path.push(nums[i]);
      dfs(nums, used, path, res);
      path.pop();
      used[i] = false;
    }
  }
};


console.log(permute([1,2,3]));