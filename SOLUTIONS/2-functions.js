const argumentsLength = function (...args) {
  // console.log(arguments[2]);
  console.log("args", args.length);
};

console.log(argumentsLength(6, 3, 4, 5, 6));
