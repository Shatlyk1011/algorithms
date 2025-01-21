// input [0010101, 0111, 11110000000, 42100, 214, 442, 244, 222, 00000]

//output [[0010101, 0111], [11110000000], [42100, 214], [442], [244], [222]1]

const solution = (nums) => {
  let res = {};

  for (let num of nums) {
    const hash = getHash(num);

    let finalKey = Array.from({ length: 10 }).fill(0);

    for (let key in hash) {
      finalKey[key] = hash[key];
    }

    let superKey = finalKey.join("#");

    if (superKey in res) {
      res[superKey].push(num);
    } else {
      res[superKey] = [num];
    }
  }
  return Object.values(res);
};

const getHash = (num) => {
  let obj = {};

  for (let char of num) {
    if (char == 0) {
      continue;
    }
    obj[char] = obj[char] + 1 || 1;
  }

  return obj;
};

// let arr1 = ["12220000", "200000122"];
let arr1 = ["1220000", "20000012", "11110000000", "42100", "214", "442", "244", "222", "00000"];

console.log(solution(arr1));
