var compose = function (functions) {
  return function (x = 4) {
    let sum = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      // for (let i = 0; i< functions.length; i++) {
      sum = functions[i](sum);
    }

    return sum;
  };
};

let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x],
  x = 4;

const composition = compose(functions);

console.log(composition(x));
