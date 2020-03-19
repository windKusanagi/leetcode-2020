/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (!nums) return [];
  const res = [];
  const cur = [];

  dfs2(nums, cur, 0, res);

  return res;
};

const dfs = (nums, cur, index, res) => {
  res.push([...cur]);
  while(index < nums.length) {
    cur.push(nums[index]);
    dfs(nums, cur, ++index, res);
    cur.pop();
  }
};