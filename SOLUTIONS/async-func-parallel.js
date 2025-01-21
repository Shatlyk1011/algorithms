var promiseAll = function (functions) {
  return new Promise((res, rej) => {
    let results = [];
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          results[i] = val;
          count++;

          if (count === functions.length) {
            res(results);
          }
        })
        .catch((err) => rej(err));
    });
  });
};

const functions1 = [() => new Promise((resolve) => setTimeout(() => resolve(5), 200))];

const functions2 = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
];

const functions3 = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

console.log(promiseAll(functions1));
console.log(promiseAll(functions2));
console.log(promiseAll(functions3));
