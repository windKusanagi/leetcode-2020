console.log(1);

setTimeout(function () {
  console.log(2);
});

new Promise(function (resolve) {
  console.log(3);
  resolve();
}).then(function () {
  console.log(4);
});

console.log(10);

new Promise(function (resolve) {
  setTimeout(function () {
    console.log(5);
  });
  resolve();
}).then(function () {
  console.log(6);
});

setTimeout(function () {
  new Promise(function (resolve) {
    console.log(7);
  });
});

//执行顺序
// 1
// 3
// 10
// 4
// 6
// 2
// 5
// 7

