// returrn true if the integer power of 3

const isPowerOfThree = (n) => {
  if (n < 3) return false;

  while (n % 3 === 0) n /= 3;

  return n === 1;
};

// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(3));
// console.log(isPowerOfThree(10));

const isPowerOfFive = (n) => {
  if (n < 5) return false;

  while (n % 5 === 0) {
    n = n / 5;
  }

  return n === 1;
};

// console.log(isPowerOfFive(5));
// console.log(isPowerOfFive(15));
// console.log(isPowerOfFive(125));
// console.log(isPowerOfFive(625));

console.log(15 % 5);