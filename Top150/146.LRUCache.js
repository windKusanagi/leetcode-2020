/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = {};
  this.order = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map[key] !== undefined) {
    const keyIdx = this.order.indexOf(key);
    this.order.splice(keyIdx, 1);
    this.order.push(key);
    return this.map[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map[key] !== undefined) {
    const keyIdx = this.order.indexOf(key);
    this.order.splice(keyIdx, 1);
    this.order.push(key);
  } else {
    if (Object.keys(this.map).length === this.capacity) {
      const k = this.order.shift();
      this.order.push(key);
      delete this.map[k];
    } else {
      this.order.push(key);
    }
  }
  this.map[key] = value;
};