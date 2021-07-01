setTimeout(() => console.log(111));

setTimeout(() => console.log(333), 1000);

new Promise((res) => {
  console.log(444);
  res();
  console.log(555);
}).then(() => console.log(666));

console.log(777);

const test1 = async () => {
  console.log('test1');
  await test2();
  console.log('test1 last');
}

const test2 = async () => {
  console.log('test2');
} 

test1();

// 执行结果
// 444
// 555
// 777
// test1
// test2
// 666
// test1 last
// 111
// 333
