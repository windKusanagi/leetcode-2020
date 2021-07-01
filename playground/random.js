// const b = {
//   a: '1',
//   c: () => {
//     console.log(this.a);
//   }
// }

// b.c();

// const obj = { name: 'a'};

// function fn() {
//   console.log(this);
//   return () => {
//     console.log(this);
//   }
// }

// const resFn = fn.call(obj);

// resFn();

function A () {
  let count = 0;
  return function B () {
    count ++;
    console.log(count);
  }
}

const C = A();
C();
C();
C();
