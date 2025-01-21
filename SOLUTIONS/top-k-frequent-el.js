// my BEST O N * logN
var topKFrequent = function (nums, k) {
  let obj = {};
  let res = [];
  let final = [];

  for (let num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }

  for (let key in obj) {
    let val = obj[key];

    if (res[val]) {
      res[val].push(+key);
    } else {
      res[val] = [+key];
    }
  }

  res = res.filter(Boolean);

  for (let i = res.length - 1; i >= 0; i--) {
    console.log("res[i]");
    final.push(...res[i]);
    if (final.length >= k) {
      return final;
    }
  }
};

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2));
