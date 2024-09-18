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
    if (char !== "0") {
    }
    totalSum += +char;
  }

  for (let char of toString) {
    if (char !== "0") {
      totalMultiply *= +char;
    }
  }

  return totalMultiply * totalSum;
};

console.log(smog(arr));
