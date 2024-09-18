/*
Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A B C
*/

function foo(callback) {
  setTimeout(function () {
    callback("A");
  }, Math.random() * 1000);
}

function bar(callback) {
  setTimeout(function () {
    callback("B");
  }, Math.random() * 1000);
}

function baz(callback) {
  setTimeout(function () {
    callback("C");
  }, Math.random() * 1000);
}

const wrapper = (cb) => {
  return new Promise((res) => cb(res));
};

const log = async () => {
  const a = await wrapper(foo);
  const b = await wrapper(bar);
  const c = await wrapper(baz);

  console.log(a, b, c);
};

// log();

///
var i = 10;
var array = [];

while (i--) {
  array.push(function () {
    return i + i;
  });
}

// console.log(
//   array[0](), // Что выведет: -2
//   array[1]() // Что выведет: -2
// );

// var n = 1;

// function fn(n) {
//   n = 3;
// }
// fn(n);
// console.log(n);

const arr = [1110, 123000, 231000, 1011, 0, 11, 1]; // [[1110, 1011], [123000, 231000]]

const smog = (arr) => {
  const res = {};

  for (let num of arr) {
    const hash = getHash(num);
    if (res[hash]) {
      res[hash].push(num);
    } else {
      res[hash] = [num];
    }
  }

  return Object.values(res);
};

const getHash = (num) => {
  let toString = num + "";
  let totalSum = 0;

  let totalMultiply = 1;

  for (let char of toString) {
    if (char !== "0") totalSum += +char;
  }

  for (let char of toString) {
    if (char !== "0") totalMultiply *= +char;
  }

  return totalMultiply * totalSum;
};
console.log(smog(arr));
