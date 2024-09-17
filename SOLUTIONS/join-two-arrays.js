//https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript

var join = function (arr1, arr2) {
  let res = {};

  for (let i = 0; i < arr1.length; i++) {
    let arr1Key = arr1[i].id;
    res[arr1Key] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    let arr2Key = arr2[i].id;

    if (res[arr2Key]) {
      for (let k in arr2[i]) {
        res[arr2Key][k] = arr2[i][k];
      }
    } else {
      res[arr2Key] = arr2[i];
    }
  }

  return Object.values(res);
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
