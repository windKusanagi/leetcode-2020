function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary= function () {
  return `${this.title}, ${this.author}, ${this.year}`;
}

const a = new Book('1', '2', 3);
console.log(a.getSummary());

function Magazine (title, author, year, month) {
  Book.call(this, title, author, year); // 只能继承实例属性
  this.month = month;
}
// 关键， 如果没有下面这一行，就会报错，Book的prototype方法无法被Magazine识别
// 下面两行也叫做 原型继承
// 原型继承 + 实例继承 又叫做 组合继承
Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;

const b = new Magazine('2', '3', 4, 5);

console.log(b.getSummary());

