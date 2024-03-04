// returrn true if the integer power of 3

const isPowerOfThree = (n) => {
  if (n < 2) return false;

  while (n % 3 === 0) n /= 3;

  return n === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(10));
