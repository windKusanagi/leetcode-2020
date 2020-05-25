/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = [];
  this.dict = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.dict[val] !== undefined) return false;
  this.arr.push(val);
  this.dict[val] = this.arr.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.dict[val] === undefined ) return false;
  const last = this.arr[this.arr.length - 1];
  if (last !== val) {
    this.arr[this.dict[val]] = last;
    this.dict[last] = this.dict[val];
  }
  this.arr.pop();
  delete this.dict[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
