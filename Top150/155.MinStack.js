/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.sta1 = [];
  this.sta2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.sta1.push(x);
  if (!this.sta2.length || x <= this.sta2[this.sta2.length - 1]) this.sta2.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const v = this.sta1.pop();
  if (this.sta2[this.sta2.length - 1] === v) this.sta2.pop();
  return v;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.sta1[this.sta1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.sta2[this.sta2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
