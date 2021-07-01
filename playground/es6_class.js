class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // 实例方法， 存于__proto__下而不是实例中
  getSummary() {
    return `${this.title}, ${this.author}, ${this.year}`;
  }

  // 静态方法
  static topBookStore() {
    return "what ever";
  }
}

const b1 = new Book("1", "123", 2020);

console.log(b1.getSummary());
console.log(b1.getThis());
// console.log(Book.topBookStore());

// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);
//     this.month = month;
//   }

//   getNewSummary() {
//     return `${this.title}, ${this.author}, ${this.year}, ${this.month}`;
//   }
// }

// const m1 = new Magazine("magazine", 2, 2000, 12);

// // 实例方法可直接继承并且使用
// console.log(m1.getSummary());
// console.log(m1.getNewSummary());
