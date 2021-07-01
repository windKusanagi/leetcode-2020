function People (name) {
  // name 为实例属性，需要定义在构造函数里
  this.name = name;
  People.count ++;
}

// 实例方法， 需先new一个对象再调用
People.prototype.getName = function () { return this.name };

// 静态方法，定义在类下，类似的如 Math.max()
People.getCount = function () { return People.count }

// 静态属性， 并不需要new一个新对象来调用方法，通过 类名.属性 调用
// 定义在类里
People.count = 0;

const a = new People('Adam');
const b = new People('Bob');

console.log(People.count); // 2
console.log(a.getName()); // Adam
console.log(People.getCount()); // 2
