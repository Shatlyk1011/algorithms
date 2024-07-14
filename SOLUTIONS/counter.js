// counter
var createCounter = function (init) {
  let val = init;
  // Pre-increment (++count): Increments the variable before its value is used in an expression.

  // Post-increment (count++): Increments the variable after its value is used in an expression.
  return {
    increment: function () {
      return ++val;
    },
    reset: function () {
      val = init;
      return val;
    },
    decrement: function () {
      return --val;
    },
  };
};

const counter = createCounter(5);

console.log(counter.increment());

const expect = function (val) {
  return {
    toBe: function (val2) {
      if (val === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val3) {
      if (val !== val3) {
        true;
      } else {
        throw Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5));
