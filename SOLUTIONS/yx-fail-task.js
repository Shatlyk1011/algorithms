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
      totalSum += +char;
    }
  }

  for (let char of toString) {
    if (char !== "0") {
      totalMultiply *= +char;
    }
  }

  return totalMultiply * totalSum;
};

// console.log("1", smog(arr));

const yxFail = (arr) => {
  const res = {};

  for (let i = 0; i < arr.length; i++) {
    let hash = getHash2(arr[i]);
    // console.log("hash", hash);
    if (res[hash]) {
      res[hash].push(arr[i]);
    } else {
      res[hash] = [arr[i]];
    }
  }
  console.log("res", res);
  return Object.values(res);
};

const getHash2 = (val) => {
  let toStr = val + "";
  let hash = 1;
  let maxLength = 0;

  for (let char of toStr) {
    if (char !== "0") {
      hash *= +char;
      maxLength++;
    }
  }
  return hash * maxLength;
};

const arr2 = [1110, 123000, 231000, 1011, 0, 11, 1]; // [[1110, 1011], [123000, 231000]]

console.log("2", yxFail(arr2));
