// https://leetcode.com/problems/house-robber/submissions/1394314756/

var rob = function (nums) {
  let total1 = 0;
  let total2 = 0;
  let isAlert = false;
  let prev;
  for (let i = 0; i < nums.length; i++) {
    if (isAlert) {
      isAlert = false;
      total1 += nums[i];
      continue;
    }
    isAlert = true;
    total2 += nums[i];
  }

  return total1 > total2 ? total1 : total2;
};

const arr = [1, 2, 3, 1];
const arr2 = [2, 7, 9, 3, 1];

console.log(rob(arr2));
